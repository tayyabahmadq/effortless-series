import type { AcademicSubject } from "./types";

export const cy406: AcademicSubject = {
  id: "cy-406",
  code: "CY-406",
  title: "Advance Python Programming",
  semester: "IV Semester",
  program: "RGPV · Cyber Security",
  tagline:
    "Every topic of the syllabus as one connected story: from Python's core and sockets, through internet data formats and web programming, into servers, threads and the GIL, then multiprocessing and distributed objects, ending with advanced I/O models and the coroutine machinery of cooperative multitasking.",
  description:
    "Five units walk from the Python review and TCP/UDP socket programming, through HTML/XML/JSON handling, CGI/WSGI and custom HTTP servers, into advanced networking with SSL, the threading library and the GIL, then pickle/ctypes serialization, multiprocessing and distributed computing with XML-RPC, closing with blocking/non-blocking/polling/async I/O and generators, coroutines, tasklets and greenlets.",
  accentColor: "#f59e0b",
  emoji: "AP",
  unitCount: 5,
  totalSections: 35,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Python Review and Socket Programming",
      summary:
        "Unit I restores the language fundamentals - syntax, data types, functions, modules, packages and classes - then builds the network layer: TCP clients and servers on sockets, UDP datagram clients and servers, the high-level library modules for HTTP, FTP and XML-RPC, and urllib for interacting with web servers.",
      chapter: {
        number: "01",
        title: "The Language and the Wire",
        intro:
          "Unit I covers the Python review (program structure, data types, operators, control flow, functions, modules, packages, classes), TCP and UDP socket programming client- and server-side, high-level internet library modules (HTTP, FTP, XML-RPC) and the urllib module.",
        inOneBreath:
          "Python's review items are the grammar; sockets are the first system interface: TCP gives ordered reliable streams via bind-listen-accept-connect, UDP gives fast connectionless datagrams. High-level modules (urllib, ftplib, xmlrpc.client) wrap the socket work in protocols, so the programmer handles intent instead of bytes.",
        sections: [
          {
            number: "1.1",
            title: "Python essentials - structure, types and operators",
            body: [
              "Python is a dynamically typed, interpreted language whose program structure is indentation-based: blocks are defined by consistent whitespace rather than braces, which makes layout part of the syntax. The review's checklist: literals and variables (names are references bound to objects), the core data types (int, float, str, bool, bytes), the compound types (list, tuple, dict, set), operators (arithmetic, comparison, logical, identity 'is', membership 'in', slicing), and the evaluation order of expressions governed by precedence.",
              "A worked session fixes the type model: x = 10 binds an int object; x = 'ten' rebinds the same name to a str - types live on objects, not variables. Slicing s[1:4] returns characters 1 through 3; s[::-1] reverses; 'in' tests membership ('py' in 'python' is True); and the mutable/immutable divide governs behaviour - lists mutate in place while tuples and strings cannot, which is why tuples work as dict keys. Escape sequences ('\n', '\t', raw strings r'c:\path') complete the string half of the review.",
              "Control flow closes the loop: if/elif/else for branching, for over iterables (Python's for is a for-each), while with break/continue/pass, and the idiom of enumerate and zip instead of index arithmetic. A worked loop shows the idiom: for i, ch in enumerate('abc'): pairs each character with its index - cleaner than range(len(s)). These constructs are the substrate every later unit assumes; the exam's review questions are usually short programs (GCD, prime check, list processing) built exactly from this set.",
              "Exam framing: expect 'explain Python's data types with examples', 'show mutable vs immutable behaviour', and small programs (GCD, prime, matrix multiply) from the associated lab list. Write code in answers - examiners grade the code as the answer; prose alone scores half.",
            ],
            keyTerms: [
              { term: "Dynamic typing", definition: "Types belong to objects; names are references rebindable at any time." },
              { term: "Mutable vs immutable", definition: "Lists/dicts/sets mutate in place; int/str/tuple cannot - affects dict keys and aliasing." },
              { term: "Slicing", definition: "seq[start:stop:step] extracts subranges; negative steps reverse." },
              { term: "Membership 'in'", definition: "Operator testing containment in any iterable." },
            ],
            codeExample: {
              language: "python",
              caption: "review.py - the constructs the unit assumes",
              code: `x = 10                  # int object; names are references
x = "ten"               # rebound to a str - types live on objects

nums = [3, 1, 4, 1, 5]
nums.sort()              # in-place mutation - lists are mutable
point = (3, 4)           # tuple - immutable, usable as dict key

s = "python"
print(s[1:4], s[::-1])   # yth  nohtyp
print("py" in s)         # True - membership

for i, ch in enumerate("abc"):
    print(i, ch)         # 0 a / 1 b / 2 c`,
            },
            bullets: [
              "Blocks are indentation; there are no braces.",
              "Core types: int, float, str, bool, bytes; compounds: list, tuple, dict, set.",
              "Mutable vs immutable governs aliasing and dict keys.",
              "Slicing seq[start:stop:step]; negative step reverses.",
              "for is a for-each over iterables; enumerate/zip replace index math.",
              "Escape sequences and raw strings complete the string toolkit.",
            ],
            diagram: {
              kind: "compare",
              title: "Mutable vs immutable in one picture",
              caption: "Same operation, different consequence - the review's most-asked contrast.",
              left: {
                heading: "Mutable (list, dict, set)",
                items: [
                  "lst.append(4) changes the object",
                  "All names bound to it see the change",
                  "Usable as dict values, not keys",
                  "Copies must be explicit (lst.copy())",
                ],
              },
              right: {
                heading: "Immutable (int, str, tuple)",
                items: [
                  "Operations return new objects",
                  "Safe to share across names",
                  "Usable as dict keys and set members",
                  "Rebinding replaces the reference, not the object",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Types live on objects",
              body: "The one-line mental model that answers a dozen review questions: in Python, variables are names and types live on objects - so x = 10 then x = 'ten' is rebinding, not type violation. Follow-on questions about copying, aliasing and dict keys all resolve from this model.",
            },
            examQuestions: [
              {
                q: "Explain Python's core and compound data types with examples, and demonstrate mutable vs immutable behaviour using list and tuple.",
                marks: 14,
                outline: [
                  "Core: int, float, str, bool, bytes",
                  "Compounds: list, tuple, dict, set",
                  "Names are references; types belong to objects",
                  "List mutation: nums.sort() changes in place",
                  "Tuple immutability: safe as dict keys",
                  "Slicing and membership operators demonstrated",
                  "Aliasing: two names, one object - copies must be explicit",
                ],
              },
              {
                q: "Write a Python program to find the GCD of two numbers.",
                marks: 7,
                outline: [
                  "Euclid: while b: a, b = b, a % b",
                  "Return a as the GCD",
                  "Read inputs and print the result",
                ],
              },
            ],
          },
          {
            number: "1.2",
            title: "Functions, modules and packages",
            body: [
              "Functions are def-ined blocks with parameters, defaults, keyword arguments and return values - Python's unit of reuse. The review's function toolkit: default arguments evaluated once at definition time (the classic mutable-default pitfall), *args for positional packing, **kwargs for keyword packing, docstrings, and first-class function status (functions are objects - assignable, passable). Scopes follow the LEGB rule: local, enclosing, global, built-in - with the global and nonlocal statements as the explicit escape hatches.",
              "A worked example shows the packing idiom: def report(*args, **kwargs) collects any call shape; report(1, 2, mode='fast') yields args=(1, 2), kwargs={'mode': 'fast'}. The mutable-default pitfall deserves its demonstration: def add(item, bucket=[]) appends to the SAME list across calls - the default is created once; the fix is bucket=None and create inside. Examiners set exactly this trap in review questions.",
              "Modules and packages are Python's namespace architecture: a module is a .py file imported with import name (namespace) or from name import item (binding); a package is a directory with __init__.py containing modules and sub-packages, imported by dotted path (import mypkg.tools.net). The standard library is packages all the way down - socket, http, json - and __name__ == '__main__' guards make modules both runnable and importable. The import system caches modules in sys.modules, which is why circular imports need care.",
              "Exam framing: expect 'explain functions with default and variable arguments', 'what is the mutable default argument problem', and 'module vs package' short notes. Write the pitfall code in the answer; examiners grade the demonstrated behaviour over the prose definition.",
            ],
            keyTerms: [
              { term: "*args / **kwargs", definition: "Packing arbitrary positional and keyword arguments into a function." },
              { term: "LEGB scope rule", definition: "Name resolution order: local, enclosing, global, built-in." },
              { term: "Module", definition: "A .py file providing a namespace, imported with import/from." },
              { term: "Package", definition: "A directory with __init__.py holding modules and sub-packages, addressed by dotted path." },
              { term: "Mutable default pitfall", definition: "Default arguments are evaluated once - a list default is shared across calls." },
            ],
            codeExample: {
              language: "python",
              caption: "args_kwargs.py - packing and the default trap",
              code: `def report(*args, **kwargs):
    print(args, kwargs)

report(1, 2, mode="fast")     # (1, 2) {'mode': 'fast'}

def add_bad(item, bucket=[]): # BUG: one shared list
    bucket.append(item)
    return bucket

def add_ok(item, bucket=None):  # correct pattern
    if bucket is None:
        bucket = []
    bucket.append(item)
    return bucket

print(add_bad(1), add_bad(2))   # [1, 2] [1, 2] - shared!
print(add_ok(1), add_ok(2))     # [1] [2]`,
            },
            bullets: [
              "def with defaults, keyword args, *args, **kwargs.",
              "Defaults are evaluated once - mutable defaults are shared traps.",
              "LEGB name resolution; global/nonlocal as escape hatches.",
              "Module = .py namespace; package = __init__.py directory, dotted imports.",
              "__name__ == '__main__' makes files both runnable and importable.",
              "sys.modules caches imports - circular imports need design care.",
            ],
            diagram: {
              kind: "flow",
              title: "How an import resolves",
              caption: "Four steps from dotted name to module object.",
              steps: [
                { label: "Parse dotted path", note: "pkg.sub.module" },
                { label: "Check sys.modules", note: "cache hit returns immediately" },
                { label: "Locate and execute", note: "module code runs once, top to bottom" },
                { label: "Bind name", note: "namespace object bound in the importer" },
              ],
            },
            callout: {
              type: "warning",
              title: "Defaults are born once",
              body: "The review's most-tested trap: default arguments are evaluated at function definition, not per call - so def f(x, acc=[]) shares one list across every call. Write both the buggy and fixed versions in the answer; the contrast is the full answer, and the same principle explains why functools.partial and closures freeze values.",
            },
            examQuestions: [
              {
                q: "Explain Python functions with default, positional-packed and keyword-packed arguments, and demonstrate the mutable-default-argument problem with its fix.",
                marks: 14,
                outline: [
                  "def syntax with defaults and keyword arguments",
                  "*args packs positionals into a tuple; **kwargs packs keywords",
                  "Defaults evaluated once at definition time",
                  "Buggy: def add(x, bucket=[]) shares one list",
                  "Demonstration: add_bad(1), add_bad(2) -> [1, 2] [1, 2]",
                  "Fix: bucket=None and create inside the call",
                  "LEGB scoping supports the explanation",
                ],
              },
              {
                q: "Differentiate a module from a package with one import example of each.",
                marks: 7,
                outline: [
                  "Module: single .py file namespace",
                  "Package: directory with __init__.py holding modules",
                  "import socket (module) vs import mypkg.tools (package)",
                ],
              },
            ],
          },
          {
            number: "1.3",
            title: "Classes and objects",
            body: [
              "Classes are the review's OOP half: class statements define state (attributes) and behaviour (methods); __init__ initializes; self is the explicit instance parameter; and the object model exposes everything as attributes on objects. The review's method taxonomy: instance methods (take self), class methods (@classmethod, take cls - factory constructors), and static methods (@staticmethod - namespace-only helpers). Encapsulation is by convention: _name signals internal, __name triggers name mangling.",
              "A worked class fixes the pattern: class Stack with __init__(self) building self._items = [], push/pop methods, __len__ and __repr__ dunders so len() and print() work natively. Inheritance (class Derived(Base)) with super().__init__() chains constructors; method overriding redefines behaviour; Python supports multiple inheritance with the MRO (method resolution order, C3-linearized and introspectable via cls.__mro__) resolving diamond conflicts. Duck typing is the runtime's philosophy: 'if it quacks' - interfaces are behavioural, not declared.",
              "A worked inheritance trace: class FileLogger(BaseLogger) overrides write(); a call dispatches by MRO - instance first, then Derived, then Base; super() coordinates the chain. Special methods (__len__, __iter__, __enter__/__exit__, __add__) are how built-in operators and protocols bind to user classes - writing __enter__/__exit__ makes a class a context manager (Unit III's with-statement), and writing __next__ makes it an iterator (Unit V's generators). The OOP review is thus the setup for the whole course's advanced machinery.",
              "Exam framing: expect 'explain classes with __init__ and methods', 'instance vs class vs static methods', and 'inheritance with super()'. Write the Stack class; examiners grade working code with one dunder included.",
            ],
            keyTerms: [
              { term: "self", definition: "Explicit instance parameter in every instance method." },
              { term: "__init__", definition: "Initializer invoked on construction; sets instance state." },
              { term: "Class vs static method", definition: "@classmethod receives cls (factories); @staticmethod receives nothing (helpers)." },
              { term: "MRO", definition: "Method resolution order - C3-linearized lookup path across inheritance." },
              { term: "Dunder methods", definition: "__len__, __iter__, __enter__ and friends - protocols binding operators to classes." },
            ],
            codeExample: {
              language: "python",
              caption: "stack.py - the review's canonical class",
              code: `class Stack:
    def __init__(self):
        self._items = []

    def push(self, item):
        self._items.append(item)

    def pop(self):
        return self._items.pop()

    def __len__(self):                 # len() works natively
        return len(self._items)

    def __repr__(self):                # print() shows this
        return f"Stack({self._items!r})"

s = Stack()
s.push(1); s.push(2)
print(len(s), s)      # 2 Stack([1, 2])`,
            },
            bullets: [
              "class with __init__, self, and attributes on instances.",
              "Instance/class/static methods: self, cls, nothing.",
              "Encapsulation by convention: _name internal, __name mangled.",
              "Inheritance with super(); MRO resolves multiple inheritance.",
              "Dunders bind protocols: __len__, __iter__, __enter__/__exit__.",
              "Duck typing: behaviour over declared interfaces.",
            ],
            diagram: {
              kind: "flow",
              title: "Method lookup follows the MRO",
              caption: "Instance -> class -> bases, in C3-linearized order.",
              steps: [
                { label: "Call obj.method()", note: "attribute lookup begins" },
                { label: "Instance dict", note: "attributes set on the object" },
                { label: "Class of obj", note: "Derived's methods" },
                { label: "Base classes in MRO", note: "Base, then mixins, then object" },
                { label: "Found / AttributeError", note: "first hit wins" },
              ],
            },
            callout: {
              type: "tip",
              title: "Dunders are the course's load-bearing hooks",
              body: "Keep the connection alive from the first week: __iter__ and __next__ power Unit V's generators and coroutines; __enter__/__exit__ power Unit III's context managers and the logging module; __getstate__/__setstate__ hook Unit IV's pickling. The OOP review is not preliminaries - it is the API surface of every later unit.",
            },
            examQuestions: [
              {
                q: "Explain Python classes and objects with a worked example (a Stack class), covering __init__, instance methods, dunders, inheritance with super() and the MRO.",
                marks: 14,
                outline: [
                  "class syntax; __init__ sets state; self is explicit",
                  "Instance/class/static methods contrasted",
                  "Stack: _items, push, pop, __len__, __repr__",
                  "len() and print() work via the dunders",
                  "Inheritance: class Derived(Base), super().__init__()",
                  "MRO: C3-linearized lookup; diamond resolution",
                  "Duck typing: behaviour over declared interfaces",
                ],
              },
              {
                q: "Differentiate @classmethod and @staticmethod with one use case each.",
                marks: 7,
                outline: [
                  "@classmethod receives cls - factory constructors (Stack.from_list)",
                  "@staticmethod receives neither - pure helpers",
                  "Both are accessible via class and instance",
                ],
              },
            ],
          },
          {
            number: "1.4",
            title: "TCP sockets - client and server",
            body: [
              "The socket is the file-like handle to a network connection, and TCP is the syllabus's first protocol: a connection-oriented, ordered, reliable byte stream. The server dance is bind -> listen -> accept: bind to (host, port), listen with a backlog, then accept() blocks until a client arrives and returns a NEW socket per connection - the listening socket never carries data. The client dance is connect -> send/recv -> close. Both sides treat the socket as a file: recv(n) reads up to n bytes, send(b) writes, and neither guarantees message boundaries - TCP is a stream.",
              "A worked echo pair fixes the pattern: server binds ('127.0.0.1', 5000), listens, accepts, then loops recv(1024) -> sendall(same) until b'' (the client's close marks EOF); client connects, sendall(b'hello'), prints recv. The boundary lesson is the exam's favourite sub-point: one send may arrive as several recvs and vice versa - applications must frame data (length prefixes, delimiters, or line protocols). AF_INET + SOCK_STREAM name the address family and stream type in socket.socket().",
              "The blocking reality is the section's forward pointer: a one-connection-at-a-time server is trivial but useless - accept() and recv() block, so a second client waits. The three escape routes - a thread per connection, a process per connection, or non-blocking/event-driven I/O (Unit V) - are exactly the syllabus's later units; this section's job is to state the problem so those units solve it. Structured alternatives: the socketserver framework (Unit III) packages the dance.",
              "Exam framing: expect 'write a TCP echo client-server pair' and 'explain bind/listen/accept vs connect'. Write both programs in full; add the framing caveat and the blocking problem as the closing paragraph - that paragraph is where the later units' marks are seeded.",
            ],
            keyTerms: [
              { term: "Socket", definition: "Endpoint handle for network communication - AF_INET + SOCK_STREAM for TCP." },
              { term: "bind/listen/accept", definition: "Server sequence: claim address, queue connections, get a per-client socket." },
              { term: "connect", definition: "Client sequence: establish the stream, then send/recv." },
              { term: "Stream semantics", definition: "TCP has no message boundaries - applications must frame data." },
              { term: "Blocking I/O", definition: "accept/recv wait - one-thread-per-connection or events needed beyond one client." },
            ],
            codeExample: {
              language: "python",
              caption: "echo_server.py / echo_client.py - the canonical pair",
              code: `# echo_server.py
import socket
srv = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
srv.bind(("127.0.0.1", 5000))
srv.listen(5)                        # backlog of pending clients
print("listening on 5000")
conn, addr = srv.accept()            # NEW socket per connection
with conn:
    while True:
        data = conn.recv(1024)       # blocks; b'' = client closed
        if not data:
            break
        conn.sendall(data)           # echo back

# echo_client.py
import socket
with socket.create_connection(("127.0.0.1", 5000)) as c:
    c.sendall(b"hello")
    print(c.recv(1024))              # b'hello'`,
            },
            bullets: [
              "Server: socket -> bind -> listen -> accept (new socket per client).",
              "Client: socket -> connect -> send/recv -> close.",
              "recv(1024) means up to 1024 bytes - TCP is a stream, not messages.",
              "Applications frame data: length prefixes, delimiters, or line protocols.",
              "One-connection servers block - threads/processes/events solve it.",
              "socketserver framework packages the dance for reuse (Unit III).",
            ],
            diagram: {
              kind: "flow",
              title: "The TCP handshake in code",
              caption: "Server and client sequences meeting at accept().",
              steps: [
                { label: "Server binds", note: "(host, port) claimed" },
                { label: "Server listens", note: "backlog queues pending clients" },
                { label: "Client connects", note: "three-way handshake completes" },
                { label: "accept() returns", note: "new dedicated socket" },
                { label: "send/recv loop", note: "until one side closes (b'')" },
              ],
            },
            callout: {
              type: "exam",
              title: "recv is not a message read",
              body: "The boundary trap is the most common runtime bug and the most-asked viva question: recv(1024) returns whatever is available, not one message. State the framing rule (length prefix or delimiter) in every socket answer - it is the sentence that separates socket experience from socket memorization.",
            },
            examQuestions: [
              {
                q: "Write a TCP echo server and client in Python, and explain the bind/listen/accept sequence, stream semantics and the message-framing problem.",
                marks: 14,
                outline: [
                  "Server: AF_INET/SOCK_STREAM, bind, listen, accept",
                  "Client: create_connection, sendall, recv",
                  "accept returns a new socket per client",
                  "recv(1024) = up to 1024 bytes, not one message",
                  "Framing: length prefixes or delimiters",
                  "EOF signalled by recv returning b''",
                  "Blocking limitation -> threads/processes/events (later units)",
                ],
              },
              {
                q: "Why does the server get a new socket from accept() instead of using the listening socket?",
                marks: 7,
                outline: [
                  "The listening socket only queues connections",
                  "Each client needs a private duplex stream",
                  "The server keeps listening while conversations proceed",
                ],
              },
            ],
          },
          {
            number: "1.5",
            title: "UDP sockets - datagram client and server",
            body: [
              "UDP is the syllabus's connectionless protocol: no handshake, no ordering, no delivery guarantee - each sendto() is an independent datagram that may arrive out of order, duplicated, or never. The client is socket(AF_INET, SOCK_DGRAM) -> sendto(data, addr) -> recvfrom(bufsize); the server binds and loops recvfrom() -> sendto(). No listen, no accept, no per-client sockets: one datagram socket serves everyone, with the sender's address returned by recvfrom for replies.",
              "A worked echo pair fixes the contrast: client sendto(b'hi', ('127.0.0.1', 5001)), then recvfrom(1024) returns (data, addr); server bind(('0.0.0.0', 5001)), loop data, addr = s.recvfrom(1024) -> s.sendto(data, addr). The reliability lesson is the exam's favourite demonstration: comment out the server and the client's recvfrom blocks forever - UDP silently drops; production code adds timeouts (settimeout) and application-level acks/retries, which is why real protocols (QUIC, game netcode) build reliability on top selectively.",
              "The comparison table is the section's deliverable: TCP (stream, ordered, reliable, connect/accept, per-client sockets, heavier) vs UDP (datagram, unordered, best-effort, sendto/recvfrom, one socket, lighter). The use-case line completes it: UDP wins where latency beats completeness - DNS queries, VoIP, games, telemetry - and TCP wins where bytes must be right - web, mail, file transfer. The syllabus's later units use both: custom servers (Unit III) and distributed objects (Unit IV) sit on either.",
              "Exam framing: expect 'write a UDP echo pair' and 'compare TCP and UDP'. Write both programs; add the drop-demonstration paragraph (client blocking forever with the server off) and the timeout fix - that operational detail is what the examiner is fishing for.",
            ],
            keyTerms: [
              { term: "SOCK_DGRAM", definition: "Datagram socket type - connectionless UDP." },
              { term: "sendto / recvfrom", definition: "Datagram primitives carrying the peer address with each call." },
              { term: "Best-effort delivery", definition: "Packets may be lost, duplicated or reordered - UDP offers no repair." },
              { term: "settimeout", definition: "Socket timeout preventing recvfrom from blocking forever on drops." },
              { term: "Datagram socket economy", definition: "One bound socket serves all peers - no per-connection state." },
            ],
            table: {
              caption: "TCP vs UDP - the comparison row set examiners expect.",
              headers: ["Property", "TCP (SOCK_STREAM)", "UDP (SOCK_DGRAM)"],
              rows: [
                ["Connection", "handshake: connect/accept", "none - sendto directly"],
                ["Delivery", "reliable, ordered, retransmitted", "best-effort, may drop/reorder"],
                ["Boundaries", "byte stream - frame manually", "each sendto is one datagram"],
                ["Sockets", "one listening + one per client", "one socket serves all"],
                ["Typical uses", "web, mail, file transfer", "DNS, VoIP, games, telemetry"],
              ],
            },
            bullets: [
              "UDP client: socket(SOCK_DGRAM) -> sendto -> recvfrom.",
              "UDP server: bind -> loop recvfrom -> sendto reply.",
              "No listen/accept - one datagram socket serves every peer.",
              "Drops are silent: recvfrom blocks forever without a timeout.",
              "UDP wins on latency, TCP on completeness - DNS/VoIP vs web/mail.",
              "Later units build servers (Unit III) and RPC (Unit IV) on both.",
            ],
            diagram: {
              kind: "compare",
              title: "Same echo task, two protocols",
              caption: "The ceremony TCP adds is exactly what UDP deletes.",
              left: {
                heading: "TCP echo",
                items: [
                  "connect before any data",
                  "accept per client - new socket",
                  "ordered, reliable stream",
                  "frames must be designed",
                ],
              },
              right: {
                heading: "UDP echo",
                items: [
                  "sendto straight away",
                  "one socket, address per datagram",
                  "drops and reorder possible",
                  "timeout + acks are app work",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "UDP drops silently",
              body: "The demonstration worth writing in answers: switch the echo server off and the UDP client's recvfrom blocks forever - no error, no EOF, just silence. That is what 'no delivery guarantee' means operationally. The fix (settimeout + retry) is two lines and the examiner's favourite follow-up.",
            },
            examQuestions: [
              {
                q: "Write a UDP echo client and server in Python and contrast UDP with TCP on connection, delivery, boundaries and socket economy.",
                marks: 14,
                outline: [
                  "Client: SOCK_DGRAM, sendto(data, addr), recvfrom",
                  "Server: bind, loop recvfrom -> sendto(data, addr)",
                  "No listen/accept - one socket serves all peers",
                  "Silent drops: recvfrom blocks forever without settimeout",
                  "Boundaries preserved per datagram (unlike TCP streams)",
                  "TCP: reliable ordered streams with per-client sockets",
                  "Use cases: DNS/VoIP/games vs web/mail/files",
                ],
              },
              {
                q: "Why does DNS use UDP rather than TCP for ordinary queries?",
                marks: 7,
                outline: [
                  "One small request, one small reply - single datagrams",
                  "Latency beats retransmission ceremony",
                  "TCP retained as fallback for zone transfers and large answers",
                ],
              },
            ],
          },
          {
            number: "1.6",
            title: "High-level internet clients - HTTP, FTP and XML-RPC",
            body: [
              "Above the socket layer, the standard library ships protocol clients so the programmer handles intent, not bytes: http.client and urllib for HTTP, ftplib for FTP, smtplib for mail, and xmlrpc.client for XML-RPC (Unit IV's distributed-objects protocol). Each module encapsulates the protocol's choreography - headers, modes, encoding - and returns structured results; the socket work of section 1.4 continues underneath.",
              "A worked HTTP fetch with http.client: conn = http.client.HTTPSConnection('example.com'); conn.request('GET', '/'); resp = conn.getresponse(); print(resp.status, resp.read()). The same fetch via ftplib's pattern for files: ftp = ftplib.FTP('host'); ftp.login(user, pw); ftp.retrbinary('RETR report.pdf', callback) - the callback receives chunks, mirroring recv's stream behaviour. The module pattern is uniform: connect (constructor), request/commands (methods), response/callback (data), close (context manager).",
              "xmlrpc.client prefigures Unit IV: a ServerProxy object exposes remote functions as local calls - proxy = xmlrpc.client.ServerProxy('http://localhost:8000'); print(proxy.add(2, 3)) invokes a remote procedure over XML, hiding the wire entirely. That is the high-level library design lesson: each module trades a little control for a large abstraction gain - urllib handles headers and redirects; ftplib handles modes and chunking; xmlrpc.client handles encoding and envelope - and the exam's question is usually 'which module for which task and why'.",
              "Exam framing: expect 'explain the high-level internet modules' with one worked fetch per protocol, and 'advantages over raw sockets' - the answer is uniform: protocol choreography encapsulated, structured results returned, security/redirect/encoding handled by the library.",
            ],
            keyTerms: [
              { term: "http.client", definition: "Low-level HTTP/1.1 client - request/response with status and body." },
              { term: "ftplib", definition: "FTP client with retrbinary/retrlines chunk callbacks." },
              { term: "xmlrpc.client", definition: "ServerProxy exposing remote procedures as local calls." },
              { term: "smtplib", definition: "Mail sending client - sendmail with MIME-prepared messages." },
              { term: "Abstraction trade", definition: "High-level modules trade control for encapsulated protocol choreography." },
            ],
            codeExample: {
              language: "python",
              caption: "clients.py - one fetch per protocol",
              code: `import http.client, ftplib, xmlrpc.client

# HTTP: status + body without socket plumbing
conn = http.client.HTTPSConnection("example.com")
conn.request("GET", "/")
resp = conn.getresponse()
print(resp.status, resp.getheader("Content-Type"))
body = resp.read()
conn.close()

# FTP: chunk callback mirrors recv's stream behaviour
# ftp = ftplib.FTP("host"); ftp.login("u", "p")
# ftp.retrbinary("RETR report.pdf", open("out.pdf", "wb").write)

# XML-RPC: remote function as a local call
# proxy = xmlrpc.client.ServerProxy("http://localhost:8000")
# print(proxy.add(2, 3))`,
            },
            bullets: [
              "http.client: request/getresponse with status, headers, body.",
              "ftplib: retrbinary/retrlines with chunk callbacks.",
              "xmlrpc.client: ServerProxy makes remote calls look local.",
              "Uniform pattern: connect -> command -> data -> close.",
              "urllib adds redirects, auth, and URL handling on top.",
              "Abstraction gain: protocol choreography hidden; control traded.",
            ],
            diagram: {
              kind: "pyramid",
              title: "The network-client abstraction stack",
              caption: "Each tier hides more of the wire.",
              tiers: [
                { label: "ServerProxy / urllib", note: "protocol intent - calls and URLs" },
                { label: "http.client / ftplib", note: "protocol choreography - headers, modes" },
                { label: "socket", note: "bytes on the wire - stream or datagram" },
                { label: "OS + TCP/IP", note: "the actual transport" },
              ],
            },
            callout: {
              type: "tip",
              title: "One pattern, four modules",
              body: "Memorize the uniform shape - connect, command, data, close - and every high-level client question becomes pattern-matching: http.client requests, ftplib retrieves, smtplib sends, xmlrpc.client proxies. Examiners accept the pattern plus one worked call per module as a complete answer.",
            },
            examQuestions: [
              {
                q: "Explain Python's high-level internet library modules (http.client, ftplib, xmlrpc.client) with one worked example each, and state their advantage over raw socket programming.",
                marks: 14,
                outline: [
                  "http.client: HTTPSConnection, request, getresponse, read",
                  "ftplib: login + retrbinary with a chunk callback",
                  "xmlrpc.client: ServerProxy - remote function as local call",
                  "Uniform pattern: connect -> command -> data -> close",
                  "Advantage: protocol choreography encapsulated",
                  "Structured results: status objects, callbacks, proxies",
                  "Trade-off: less control, far less code",
                ],
              },
              {
                q: "How does xmlrpc.client hide the network from the caller?",
                marks: 7,
                outline: [
                  "ServerProxy wraps method attribute access",
                  "Calls are encoded as XML-RPC envelopes (Unit IV)",
                  "Results decoded and returned as Python objects",
                ],
              },
            ],
          },
          {
            number: "1.7",
            title: "urllib - interacting with web servers",
            body: [
              "The urllib package (urllib.request, urllib.parse, urllib.error) is the syllabus's named module for interacting with web servers: urllib.request.urlopen fetches URLs with redirects, authentication handlers and proxies already handled; Request objects carry method, headers and data for POSTs; urllib.parse builds and splits URLs (urlencode, urlparse, quote); urllib.error structures failures (HTTPError, URLError). It is the single-call replacement for the http.client choreography of section 1.6.",
              "A worked GET and POST: with urllib.request.urlopen('https://api.example.com/data') as r: print(r.status, r.read()); then req = urllib.request.Request(url, data=json.dumps(payload).encode(), headers={'Content-Type': 'application/json'}) and urlopen(req) for the POST. Error handling is the exam's operational half: HTTPError is also a response object (read its body for the server's error message); URLError covers connection-level failures; with urlopen(req, timeout=5) the call cannot hang indefinitely - the UDP timeout lesson in HTTP clothing.",
              "The layered relationship completes the section: urllib.request sits above http.client, adding an opener/handler architecture (ProxyHandler, HTTPBasicAuthHandler) that composes cross-cutting behaviour; both sit above socket. The syllabus names 'urllib2' in its historical phrasing - Python 3 split the old urllib2 into this package, a one-line exam note worth making. For the cyber-security branch's usage pattern (probing endpoints, submitting forms, downloading reports), urllib is the working tool.",
              "Exam framing: expect 'explain the urllib module with a GET and POST example' and 'urllib vs http.client'. Write both snippets; state the opener/handler architecture and the Python-3 naming note. The timeout parameter and HTTPError-as-response detail are the operational marks.",
            ],
            keyTerms: [
              { term: "urllib.request", definition: "urlopen and Request - URL fetching with redirects/auth handled." },
              { term: "urllib.parse", definition: "URL construction and decomposition - urlencode, urlparse, quote." },
              { term: "urllib.error", definition: "HTTPError (also a response) and URLError for connection failures." },
              { term: "Opener/handler architecture", definition: "Composable handlers (proxy, auth) layered over the base fetch." },
              { term: "urllib2 note", definition: "Python 2's urllib2 became the Python 3 urllib package." },
            ],
            codeExample: {
              language: "python",
              caption: "webclient.py - GET, POST and error handling",
              code: `import urllib.request, urllib.error, json

# GET
with urllib.request.urlopen("https://api.example.com/data",
                            timeout=5) as r:
    print(r.status, r.headers["Content-Type"])
    data = r.read()

# POST with a JSON body
req = urllib.request.Request(
    "https://api.example.com/items",
    data=json.dumps({"name": "probe"}).encode(),
    headers={"Content-Type": "application/json"}, method="POST")
with urllib.request.urlopen(req, timeout=5) as r:
    print(r.status, r.read())

# structured errors
try:
    urllib.request.urlopen("https://api.example.com/missing")
except urllib.error.HTTPError as e:
    print(e.code, e.read())      # 404 - HTTPError IS a response
except urllib.error.URLError as e:
    print("connection problem:", e.reason)`,
            },
            bullets: [
              "urlopen: one call to fetch a URL with redirects handled.",
              "Request objects: method, headers, data for POSTs.",
              "urllib.parse: urlencode/urlparse/quote build and split URLs.",
              "HTTPError doubles as a response - read its error body.",
              "timeout= prevents indefinite hangs; URLError covers connect failures.",
              "Layering: urllib.request over http.client over socket.",
            ],
            diagram: {
              kind: "layers",
              title: "The urllib stack",
              caption: "Handlers compose around the fetch; everything ends in sockets.",
              layers: [
                { label: "urllib.request.urlopen", note: "single-call fetch with redirect/auth" },
                { label: "Opener + handlers", note: "proxy, auth, error handlers composed" },
                { label: "http.client", note: "HTTP/1.1 choreography" },
                { label: "socket", note: "TCP bytes on the wire" },
              ],
            },
            callout: {
              type: "tip",
              title: "HTTPError is a response",
              body: "The operational detail examiners test: HTTPError inherits from the response object, so its body can be read for the server's own error message - e.code for the status, e.read() for the details. Combined with timeout=5, it turns urllib from a toy into an auditable web client.",
            },
            examQuestions: [
              {
                q: "Explain the urllib package: urlopen and Request for GET and POST, urllib.parse and urllib.error roles, and the relationship between urllib.request and http.client.",
                marks: 14,
                outline: [
                  "urlopen: one-call fetch with redirects/auth handled",
                  "Request: method, headers, data - POST with JSON body shown",
                  "parse: urlencode, urlparse, quote",
                  "error: HTTPError (also a response - read the body), URLError",
                  "timeout parameter prevents hangs",
                  "Layering: urllib.request over http.client over socket",
                  "Historical note: Python 2's urllib2 -> Python 3's urllib",
                ],
              },
              {
                q: "When would you choose http.client over urllib.request?",
                marks: 7,
                outline: [
                  "Fine control over the HTTP conversation",
                  "Persistent connections and explicit request/response cycles",
                  "urllib suffices for fetch-and-handle tasks",
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
      title: "Internet Data Handling and Web Programming",
      summary:
        "Unit II handles the formats the web speaks - HTML, XML and JSON with detailed ElementTree coverage - then builds the server side: CGI scripting, the WSGI interface, and implementing custom HTTP servers in Python.",
      chapter: {
        number: "02",
        title: "Formats and Servers",
        intro:
          "Unit II covers processing common internet data formats (HTML, XML, JSON), the ElementTree interface for XML parsing, CGI scripting, the WSGI interface, and implementing custom HTTP servers.",
        inOneBreath:
          "JSON is dumps/loads; XML is ElementTree's parse/find/iter with attributes and namespaces; HTML is parsed, not regexed. CGI runs a process per request; WSGI is the callable standard between servers and Python apps; http.server subclasses turn handler methods into a custom server. One rule governs the unit: parse with libraries, never with string surgery.",
        sections: [
          {
            number: "2.1",
            title: "HTML handling in Python",
            body: [
              "HTML handling is parsing markup into structure - the syllabus's entry to the format trio. Python's stdlib offers html.parser (an event-driven parser: handle_starttag, handle_endtag, handle_data callbacks) and html.escape/unescape for entity safety; third-party parsers (BeautifulSoup, lxml) add tree navigation, but the stdlib API is the exam's base. The governing rule: HTML is parsed with a parser, never with string surgery - regex over HTML is the classic bug source (attributes, comments and encoding defeat it).",
              "A worked parse with html.parser: subclass HTMLParser, override handle_starttag to collect tag names and attributes (a tags with href), override handle_data for text, feed() the document, and retrieve the collected links. The event-driven model mirrors XML's ElementTree alternative: parser gives callbacks (streaming, memory-light), tree gives navigation (random access) - the same choice XML presents in section 2.3, so the HTML section plants the decision vocabulary.",
              "The security angle is the cyber-security branch's interest: html.escape(str) escapes < > & quotes for safe embedding (defeating reflected XSS when echoing user input); parsing untrusted HTML should disable script processing or sanitize; and the parser's handling of malformed markup (unclosed tags) is why libraries beat regex. A worked escape: html.escape('<img src=x onerror=alert(1)>') renders the payload inert text - the smallest complete XSS defence demonstration in the syllabus.",
              "Exam framing: expect 'explain HTML parsing in Python' with a link-extractor worked example, and 'html.escape's role in web security'. Write the parser subclass; state the never-regex rule and the escape-vs-parse pairing as the closing paragraph.",
            ],
            keyTerms: [
              { term: "html.parser", definition: "Event-driven stdlib parser - callbacks per tag, attribute and text chunk." },
              { term: "html.escape", definition: "Escapes <, >, &, quotes - makes embedded text inert (XSS defence)." },
              { term: "Event-driven vs tree", definition: "Streaming callbacks vs navigable tree - the parse-model choice." },
              { term: "No-regex rule", definition: "Markup is parsed with parsers; regex over HTML breaks on attributes/comments." },
            ],
            codeExample: {
              language: "python",
              caption: "links.py - extract every link with html.parser",
              code: `from html.parser import HTMLParser
import html

class LinkCollector(HTMLParser):
    def __init__(self):
        super().__init__()
        self.links = []

    def handle_starttag(self, tag, attrs):
        if tag == "a":
            for name, value in attrs:
                if name == "href":
                    self.links.append(value)

    def handle_data(self, data):
        pass  # text chunks arrive here when needed

doc = '<a href="/a">A</a> plain <a href="/b">B</a>'
p = LinkCollector()
p.feed(doc)
print(p.links)                    # ['/a', '/b']

payload = '<img src=x onerror=alert(1)>'
print(html.escape(payload))       # &lt;img src=x onerror=alert(1)&gt;`,
            },
            bullets: [
              "html.parser: subclass, override handle_starttag/handle_data, feed().",
              "Event-driven (streaming, light) vs tree (navigable) - the model choice.",
              "html.escape/unescape handle entity safety.",
              "Escaping user input is the minimal reflected-XSS defence.",
              "Never regex HTML - attributes, comments and encoding defeat it.",
              "Third-party parsers (BeautifulSoup, lxml) wrap the same idea with navigation.",
            ],
            diagram: {
              kind: "flow",
              title: "An HTML parse in event order",
              caption: "The parser walks the document; callbacks fire per event.",
              steps: [
                { label: "feed(doc)", note: "document handed to the parser" },
                { label: "handle_starttag", note: "tag name + attribute list" },
                { label: "handle_data", note: "text chunks between tags" },
                { label: "handle_endtag", note: "closing tags" },
                { label: "close()", note: "flush and finish" },
              ],
            },
            callout: {
              type: "warning",
              title: "Regex over HTML is a bug factory",
              body: "The rule examiners want stated: attributes with '>' inside quotes, comments, and entity encodings defeat any regex - use the parser. Then flip it: when outputting, use the escaper. Parsing in, escaping out - the pair is the whole HTML-handling security posture in one sentence.",
            },
            examQuestions: [
              {
                q: "Explain HTML handling in Python with html.parser: the event-driven model, a worked link-extractor subclass, and html.escape's role in preventing XSS.",
                marks: 14,
                outline: [
                  "Subclass HTMLParser; override handle_starttag/handle_data",
                  "feed() drives the parse; events fire per tag/text",
                  "Link collector: gather href attributes into a list",
                  "Event-driven vs tree-parsing trade-off",
                  "html.escape makes embedded text inert - XSS defence",
                  "Never regex HTML: attributes, comments, encoding defeat it",
                  "BeautifulSoup/lxml as navigation-rich wrappers",
                ],
              },
              {
                q: "Why is regex-based HTML extraction unreliable?",
                marks: 7,
                outline: [
                  "Attribute values may contain '>' inside quotes",
                  "Comments and entities break naive patterns",
                  "Encoding variants multiply the cases",
                  "A real parser handles the grammar",
                ],
              },
            ],
          },
          {
            number: "2.2",
            title: "JSON - the data interchange format",
            body: [
              "JSON (JavaScript Object Notation) is the syllabus's interchange format: objects as dicts, arrays as lists, strings/numbers/bools/null as scalars. Python's json module maps both directions: json.dumps(obj) serializes to a string (indent= and sort_keys= for readable output), json.loads(s) parses back; file variants dump/load; and the type-mapping table (dict <-> object, list <-> array, str <-> string, None <-> null) is the exam's core knowledge.",
              "A worked round trip: payload = {'user': 'dev', 'ids': [1, 2], 'ok': True}; s = json.dumps(payload) -> the JSON text with quoted keys; back = json.loads(s) -> the same dict. The custom half is the differentiator: datetime and Decimal are not JSON-native, so dumps raises TypeError - the fix is a default= hook (json.dumps(obj, default=str)) or a custom JSONEncoder; the reverse needs object_hook= to reconstitute types on load. Exchange APIs (the unit's web clients, Unit IV's RPC payloads) live on this machinery.",
              "The security and robustness notes complete the section: json.loads on untrusted input is safe from code execution (unlike pickle - Unit IV's contrast is the exam favourite), but huge documents cost memory (streaming parsers exist in third-party libs), and duplicate keys silently overwrite (last wins) - a subtle data-loss trap. JSON has no comments, no dates, and one numeric type - design payloads accordingly. These constraints explain why XML (next section) persists where schema and comments matter.",
              "Exam framing: expect 'explain JSON handling in Python with dumps/loads', 'the type-mapping table', and 'JSON vs pickle for untrusted data' - the last one is the security branch's distinguishing question and its answer ('json parses data; pickle executes code') belongs in every answer.",
            ],
            keyTerms: [
              { term: "json.dumps / loads", definition: "Serialize Python objects to JSON text and back." },
              { term: "Type mapping", definition: "dict<->object, list<->array, str<->string, True/False/None <-> true/false/null." },
              { term: "default= hook", definition: "Function called for non-serializable objects (datetime, Decimal)." },
              { term: "object_hook=", definition: "Callable reconstructing custom types during loads." },
              { term: "JSON vs pickle", definition: "JSON parses inert data; pickle can execute code - untrusted input uses JSON." },
            ],
            table: {
              caption: "The type-mapping table - the exam's core JSON knowledge.",
              headers: ["Python", "JSON", "Note"],
              rows: [
                ["dict", "object", "keys become strings"],
                ["list, tuple", "array", "tuples serialize as arrays"],
                ["str / int / float", "string / number", "one JSON numeric type"],
                ["True / False / None", "true / false / null", "case shift"],
                ["datetime, Decimal", "raises TypeError", "use default= or custom encoder"],
              ],
            },
            bullets: [
              "json.dumps/loads for strings; dump/load for files.",
              "indent= and sort_keys= for readable output.",
              "Non-native types need default= on write, object_hook= on read.",
              "json.loads never executes code - the safe choice for untrusted input.",
              "Duplicate keys overwrite silently; no comments or dates in the format.",
              "APIs and RPC payloads (Units IV, VII) ride this machinery.",
            ],
            diagram: {
              kind: "compare",
              title: "Serializing for machines vs humans",
              caption: "Compact for the wire, indented for the eye.",
              left: {
                heading: "json.dumps(payload)",
                items: [
                  "Single line - minimal bytes",
                  "Best for the wire and storage",
                  "Separators trimmed by default",
                ],
              },
              right: {
                heading: "json.dumps(payload, indent=2, sort_keys=True)",
                items: [
                  "Newlines and indentation",
                  "Diff-friendly and readable",
                  "Same data, different presentation",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "JSON parses - pickle executes",
              body: "The security branch's signature sentence: json.loads converts inert text to data and cannot run code; pickle.load can execute arbitrary code from the file. Loading untrusted pickle files is arbitrary code execution by design - Unit IV returns to this. Any answer about internet data handling should carry this contrast.",
            },
            examQuestions: [
              {
                q: "Explain JSON handling in Python: dumps/loads with a worked round trip, the Python-to-JSON type mapping, handling non-native types with default= and object_hook=, and why JSON is preferred over pickle for untrusted data.",
                marks: 14,
                outline: [
                  "dumps/loads with dict/list/str/bool round trip",
                  "Type table: dict<->object, list<->array, None<->null",
                  "datetime/Decimal raise TypeError - default=str or encoder",
                  "object_hook reconstitutes types on load",
                  "indent/sort_keys for readable output",
                  "json.loads never executes code; pickle.load can",
                  "Duplicate keys overwrite - last wins",
                ],
              },
              {
                q: "Why does json.dumps raise TypeError on a datetime, and what are the two fixes?",
                marks: 7,
                outline: [
                  "JSON has no date type - only string/number/bool/null",
                  "Fix 1: default=str converts on serialization",
                  "Fix 2: custom JSONEncoder with a format choice",
                ],
              },
            ],
          },
          {
            number: "2.3",
            title: "XML and the ElementTree interface",
            body: [
              "XML is the structured-markup format the syllabus singles out for 'detailed coverage of the ElementTree interface': nested elements with attributes, text content, and namespace qualification. ElementTree (xml.etree) is the stdlib API: ET.parse('file.xml') or ET.fromstring(s) returns an Element tree with tag, attrib, text; find/findall/iter search by tag or path; Element(tag, attrib) + SubElement build new trees; ET.tostring/ElementTree.write serialize back.",
              "A worked parse-and-query: tree = ET.fromstring('<inventory><item id=\"1\"><name>bolt</name></item>...</inventory>'); for item in tree.findall('item'): print(item.get('id'), item.find('name').text) - attributes via .get(), text via .find('name').text, iteration via .iter('item'). The building half: root = ET.Element('config'); child = ET.SubElement(root, 'server', host='db'); child.text = 'main'; ET.tostring(root) - round-trip capable. XPath-lite expressions ('item[@id=\"1\"]') are supported for queries.",
              "The format contrasts are the section's exam payload: XML vs JSON - XML carries schema (XSD/DTD), namespaces and comments; JSON is lighter and maps directly to Python objects. Streaming vs tree: ElementTree is tree-based (whole document in memory); iterparse streams events for huge files (memory bounded); SAX is the pure-event alternative. Security notes for the branch: stdlib ElementTree is hardened, but XML's entity machinery (XXE - external entity injection) is a named attack class - parsers should disable external entities, and xml.etree does by default while some alternatives do not.",
              "Exam framing: expect 'explain the ElementTree interface' with parse-find-build worked code, 'XML vs JSON', and 'tree vs streaming'. The XXE sentence - 'entity machinery is an attack surface; hardened parsers disable external entities' - is the security branch's differentiating mark.",
            ],
            keyTerms: [
              { term: "Element", definition: "Tree node with tag, attrib dict, text and children." },
              { term: "find / findall / iter", definition: "Query API by tag name or XPath-lite path." },
              { term: "iterparse", definition: "Streaming parse yielding (event, element) pairs - bounded memory for huge files." },
              { term: "Namespace", definition: "URI-qualified element names - handled via prefixes in queries." },
              { term: "XXE", definition: "XML external-entity injection - hardened parsers disable external entities." },
            ],
            codeExample: {
              language: "python",
              caption: "inventory.py - parse, query, build, serialize",
              code: `import xml.etree.ElementTree as ET

doc = """<inventory>
  <item id="1"><name>bolt</name><qty>500</qty></item>
  <item id="2"><name>nut</name><qty>1200</qty></item>
</inventory>"""
root = ET.fromstring(doc)

for item in root.findall("item"):
    print(item.get("id"), item.find("name").text,
          item.find("qty").text)
# 1 bolt 500 / 2 nut 1200

# build a new tree and serialize
cfg = ET.Element("config")
srv = ET.SubElement(cfg, "server", host="db1")
srv.text = "main"
print(ET.tostring(cfg).decode())`,
            },
            bullets: [
              "ET.parse/fromstring build the tree; Element has tag, attrib, text.",
              "find/findall/iter query by tag or path; .get() reads attributes.",
              "Element + SubElement build; tostring/write serialize back.",
              "iterparse streams for huge documents - bounded memory.",
              "XML vs JSON: schema and namespaces vs light object mapping.",
              "XXE: entity machinery is an attack surface - hardened parsers disable it.",
            ],
            diagram: {
              kind: "fork",
              title: "Choosing an XML API",
              caption: "Size and navigation need decide the parser.",
              start: "An XML document to process",
              branches: [
                { label: "Small/medium, random access", outcome: "ElementTree parse - tree navigation with find/iter", good: true },
                { label: "Huge document", outcome: "iterparse streaming - memory bounded", good: true },
                { label: "Pure event pipeline", outcome: "SAX callbacks - fastest, least convenient", good: true },
                { label: "Untrusted XML, unhardened parser", outcome: "XXE risk - external entities must be disabled", good: false },
              ],
            },
            callout: {
              type: "exam",
              title: "The XXE sentence",
              body: "The security branch's XML mark: 'XML's entity machinery is an attack surface - XXE reads files or SSRFs via external entities; use hardened parsers with external entities disabled'. xml.etree disallows external entities by default; that default is the defence. Any detailed ElementTree answer earns its last marks here.",
            },
            examQuestions: [
              {
                q: "Explain the ElementTree interface in detail: parsing, querying (find/findall/iter, attributes, text), building new trees, serializing, and the streaming alternative for large documents.",
                marks: 14,
                outline: [
                  "ET.fromstring/parse -> Element tree",
                  "Element API: tag, attrib (get), text, children",
                  "findall('item') loop with find('name').text",
                  "Element + SubElement construction with attributes",
                  "ET.tostring serialization - round trip",
                  "iterparse streams (event, element) pairs for huge files",
                  "Security: XXE - external entities disabled in stdlib",
                ],
              },
              {
                q: "Compare XML and JSON as internet data formats.",
                marks: 7,
                outline: [
                  "XML: schema, namespaces, comments - heavier",
                  "JSON: object mapping, lighter, no schema/comments",
                  "XML persists where validation and mixed content matter",
                ],
              },
            ],
          },
          {
            number: "2.4",
            title: "CGI scripting",
            body: [
              "CGI (Common Gateway Interface) is the historical web-programming model the syllabus names first: the web server launches a fresh process per request, passes inputs via environment variables (REQUEST_METHOD, QUERY_STRING, CONTENT_LENGTH) and stdin, and ships the script's stdout to the browser - the process boundary IS the interface. Python's cgi module (FieldStorage for form parsing) and cgitb (tracebacks to the browser for debugging) are its helpers; the pattern is universal even where deprecated.",
              "A worked CGI script fixes the shape: shebang and imports; print('Content-Type: text/html') then a blank line (the header/body separator that CGI's most common bug forgets); parse form fields via cgi.FieldStorage(); read QUERY_STRING for GET params; emit HTML. The lifecycle: server receives request -> forks the script with env/stdin -> script prints headers + body -> server relays to client -> process exits. Every request is a fresh interpreter: stateless, simple, and expensive - the model's defining trade.",
              "The trade-offs are the exam's analytical payload: CGI's simplicity (any language, zero shared state, process isolation per request) vs its cost (a process spawn per request - seconds under load, no connection reuse, no in-memory state). Its successors preserve the interface ideas while removing the cost: FastCGI keeps processes alive, mod_python embedded the interpreter, and WSGI (next section) standardized the Python callable boundary - CGI is the ancestor all of them answer.",
              "Exam framing: expect 'explain CGI with a worked script' and 'CGI limitations and successors'. Write the script with the header/blank-line discipline; state the per-request process model; close with the successor chain. The blank-line-after-headers note is the practical mark - most CGI failures in practice are exactly that.",
            ],
            keyTerms: [
              { term: "CGI", definition: "Server launches one process per request; env vars + stdin in, stdout out." },
              { term: "FieldStorage", definition: "cgi module parser for form fields from GET/POST." },
              { term: "Header/body separator", definition: "The blank line after headers - CGI's most common bug." },
              { term: "Statelessness", definition: "Each request is a fresh process - no in-memory state survives." },
              { term: "cgitb", definition: "Traceback formatter for browser-side debugging." },
            ],
            codeExample: {
              language: "python",
              caption: "hello_cgi.py - the canonical script",
              code: `#!/usr/bin/env python3
import cgi, cgitb
cgitb.enable()                        # debug tracebacks to the browser

form = cgi.FieldStorage()
name = form.getvalue("name", "world")

print("Content-Type: text/html")      # headers
print()                               # blank line - body begins
print(f"<h1>Hello, {cgi.escape(name)}!</h1>")
# env vars available: REQUEST_METHOD, QUERY_STRING, CONTENT_LENGTH`,
            },
            bullets: [
              "One process per request - the defining model.",
              "Inputs: environment variables + stdin; outputs: stdout with headers.",
              "cgi.FieldStorage parses form fields; cgitb aids debugging.",
              "Headers, blank line, body - the ordering is the classic bug.",
              "Simple and isolated, but process spawn per request is expensive.",
              "Successors: FastCGI (persistent), WSGI (callable standard).",
            ],
            diagram: {
              kind: "flow",
              title: "One CGI request, end to end",
              caption: "The process boundary is the interface.",
              steps: [
                { label: "Request arrives", note: "GET /cgi/hello.py?name=dev" },
                { label: "Server forks", note: "env vars set; stdin wired" },
                { label: "Script runs", note: "headers + blank line + HTML to stdout" },
                { label: "Server relays", note: "stdout becomes the response" },
                { label: "Process exits", note: "state gone - next request starts fresh" },
              ],
            },
            callout: {
              type: "tip",
              title: "The blank line is the protocol",
              body: "The operational mark: CGI output is 'headers, one empty line, body' - forget the blank line and the server treats everything as malformed headers.cgi escape user values before embedding (html.escape) - the unit's security rule applied to the oldest web model.",
            },
            examQuestions: [
              {
                q: "Explain CGI scripting: the per-request process model, environment variables, a worked Python CGI script, and the model's limitations with its successors.",
                marks: 14,
                outline: [
                  "Server forks a process per request",
                  "Inputs via REQUEST_METHOD/QUERY_STRING env + stdin",
                  "Script prints Content-Type, blank line, body",
                  "cgi.FieldStorage parses form fields; cgitb for debug",
                  "Stateless: nothing survives between requests",
                  "Cost: process spawn per request under load",
                  "Successors: FastCGI persistent processes -> WSGI callable standard",
                ],
              },
              {
                q: "Why is CGI impractical at scale?",
                marks: 7,
                outline: [
                  "Interpreter startup per request - hundreds of milliseconds",
                  "No connection reuse or in-memory caching",
                  "Modern servers keep workers resident (WSGI/FastCGI)",
                ],
              },
            ],
          },
          {
            number: "2.5",
            title: "The WSGI interface",
            body: [
              "WSGI (Web Server Gateway Interface, PEP 3333) is the syllabus's standard boundary: a uniform callable contract between web servers and Python applications - any WSGI server can run any WSGI app. The contract: the app is a callable application(environ, start_response); environ carries the CGI-style request variables; start_response(status, headers) declares the response; the app returns an iterable of body byte-strings. One signature, the whole ecosystem.",
              "A worked WSGI app is the exam's canonical answer: def app(environ, start_response): path = environ['PATH_INFO']; body = f'hello at {path}'.encode(); start_response('200 OK', [('Content-Type', 'text/html')]); return [body] - four lines, runnable by any server via make_server('localhost', 8000, app).serve_forever() from wsgiref. The middleware pattern is the architecture's payload: a WSGI app that wraps another app (def middleware(environ, start_response): return inner(environ, start_response)) composes logging, auth, compression - the design that made the Python web stack modular.",
              "The CGI comparison is the exam's expected contrast: CGI spawns a process per request; WSGI apps are callables resident in a long-lived server process - no spawn cost, in-memory state possible, and the environ/start_response contract replaces env/stdin/stdout. Frameworks (Flask, Django) are WSGI apps underneath; gunicorn/uwsgi are WSGI servers; the syllabus's 'WSGI interface' is the seam between them. ASGI (async successor) is a one-line modern note for the Unit V bridge.",
              "Exam framing: expect 'explain the WSGI interface with a worked application' and 'WSGI vs CGI'. Write the four-line app; state the callable contract (environ, start_response, iterable); close with middleware composition and the framework/server split. The middleware sentence is the architecture mark.",
            ],
            keyTerms: [
              { term: "WSGI (PEP 3333)", definition: "Callable contract: app(environ, start_response) -> iterable of bytes." },
              { term: "environ", definition: "Dict of CGI-style request variables per request." },
              { term: "start_response", definition: "Callback declaring status and headers before the body iterable." },
              { term: "Middleware", definition: "A WSGI app wrapping another app - composable cross-cutting layers." },
              { term: "wsgiref", definition: "Reference implementation and simple server for development." },
            ],
            codeExample: {
              language: "python",
              caption: "wsgi_app.py - the four-line contract",
              code: `from wsgiref.simple_server import make_server

def app(environ, start_response):
    path = environ.get("PATH_INFO", "/")
    body = f"<h1>hello at {path}</h1>".encode()
    start_response("200 OK",
                   [("Content-Type", "text/html"),
                    ("Content-Length", str(len(body)))])
    return [body]                     # iterable of byte-strings

def log_middleware(inner):            # middleware = app wrapping app
    def wrapped(environ, start_response):
        print(environ["REQUEST_METHOD"], environ["PATH_INFO"])
        return inner(environ, start_response)
    return wrapped

make_server("localhost", 8000, log_middleware(app)).serve_forever()`,
            },
            bullets: [
              "Contract: app(environ, start_response) -> iterable of bytes.",
              "environ carries CGI-style variables; start_response declares status/headers.",
              "Any WSGI server runs any WSGI app - the portability point.",
              "Middleware wraps apps: logging, auth, compression compose.",
              "WSGI vs CGI: resident callables vs process-per-request.",
              "Frameworks are WSGI apps; gunicorn/uwsgi are WSGI servers.",
            ],
            diagram: {
              kind: "layers",
              title: "The WSGI seam",
              caption: "One callable contract separates servers from applications.",
              layers: [
                { label: "WSGI app / framework", note: "Flask, Django - return the body iterable" },
                { label: "Middleware stack", note: "log, auth, compress - app wrapping app" },
                { label: "WSGI server", note: "gunicorn, uwsgi, wsgiref - parse HTTP, call the app" },
                { label: "socket", note: "TCP listener on the port" },
              ],
            },
            callout: {
              type: "exam",
              title: "One signature runs everything",
              body: "The architecture sentence: 'WSGI's power is a single callable signature - app(environ, start_response) - which is why any server runs any app and middleware composes by wrapping'. Write the four-line app; the examiner verifies the signature, the start_response call, and the returned iterable.",
            },
            examQuestions: [
              {
                q: "Explain the WSGI interface: the application callable contract, environ and start_response roles, a worked minimal application, middleware composition, and the contrast with CGI.",
                marks: 14,
                outline: [
                  "PEP 3333: app(environ, start_response) -> iterable of bytes",
                  "environ: CGI-style request variables dict",
                  "start_response(status, headers) before the body",
                  "Worked app: PATH_INFO -> hello response via wsgiref",
                  "Middleware: wrapper app composing logging/auth",
                  "CGI contrast: resident callable vs process per request",
                  "Servers (gunicorn) vs frameworks (Flask) - both WSGI",
                ],
              },
              {
                q: "Why does WSGI scale where CGI does not?",
                marks: 7,
                outline: [
                  "Apps live in long-lived server processes",
                  "No interpreter startup per request",
                  "In-memory state and connection reuse possible",
                ],
              },
            ],
          },
          {
            number: "2.6",
            title: "Implementing custom HTTP servers",
            body: [
              "The syllabus's 'implementing custom HTTP servers' is Python's http.server module: BaseHTTPRequestHandler subclasses implement do_GET/do_POST; HTTPServer (from socketserver) accepts connections and dispatches by method; SimpleHTTPRequestHandler serves files. The handler contract: override do_GET(self), read self.path/headers, write self.send_response(code), self.send_header(...), self.end_headers(), then self.wfile.write(body) - rfile/wfile are the request/response streams.",
              "A worked custom server fixes the pattern: class Handler(BaseHTTPRequestHandler) with do_GET serving a JSON hello (send_response(200), Content-Type header, json.dumps body) and do_POST reading Content-Length bytes from self.rfile and echoing them; HTTPServer(('127.0.0.1', 8000), Handler).serve_forever(). The routing-by-if (self.path checks) shows why frameworks exist; the per-request handler instantiation shows why state belongs in the server class or external stores. ThreadingHTTPServer wraps it with a thread per connection (the Unit III bridge).",
              "The design lessons are the section's payload: a web server is protocol parsing + dispatch + serialization, and http.server exposes exactly that seam - enough to build health endpoints, webhooks, and embedded control panels (the branch's operational need), not enough to replace gunicorn for production. The security notes: never serve SimpleHTTPRequestHandler on untrusted networks (directory exposure), validate paths against traversal, and bind to localhost for internal endpoints.",
              "Exam framing: expect 'implement a custom HTTP server with GET and POST handling'. Write the Handler subclass in full; explain the BaseHTTPRequestHandler contract and the socketserver dispatch; close with the threading upgrade and the production caveat. The rfile/wfile pairing is the practical mark.",
            ],
            keyTerms: [
              { term: "BaseHTTPRequestHandler", definition: "Subclass contract: do_GET/do_POST, send_response, send_header, end_headers." },
              { term: "HTTPServer", definition: "socketserver-based accept loop dispatching to handler classes." },
              { term: "rfile / wfile", definition: "The request-input and response-output streams per handler instance." },
              { term: "SimpleHTTPRequestHandler", definition: "File-serving handler - useful locally, dangerous exposed." },
              { term: "ThreadingHTTPServer", definition: "Thread-per-connection wrapper - the concurrency bridge to Unit III." },
            ],
            codeExample: {
              language: "python",
              caption: "mini_server.py - GET and POST by hand",
              code: `from http.server import BaseHTTPRequestHandler, HTTPServer
import json

class Handler(BaseHTTPRequestHandler):
    def do_GET(self):
        body = json.dumps({"path": self.path, "ok": True}).encode()
        self.send_response(200)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def do_POST(self):
        length = int(self.headers.get("Content-Length", 0))
        data = self.rfile.read(length)          # request body in
        self.send_response(201)
        self.send_header("Content-Type", "application/json")
        self.end_headers()
        self.wfile.write(b'{"echo": ' + data + b'}')

    def log_message(self, *a):                  # quiet logs
        pass

HTTPServer(("127.0.0.1", 8000), Handler).serve_forever()`,
            },
            bullets: [
              "Subclass BaseHTTPRequestHandler; implement do_GET/do_POST.",
              "send_response + send_header + end_headers + wfile.write = the response.",
              "rfile.read(Content-Length) reads request bodies.",
              "HTTPServer dispatches; ThreadingHTTPServer adds a thread per client.",
              "Routing is by if/path - frameworks exist to organize this.",
              "Security: validate paths, bind localhost, never expose file serving.",
            ],
            diagram: {
              kind: "pipeline",
              title: "One request through a custom server",
              caption: "Protocol in, handler dispatch, serialization out.",
              stages: [
                { label: "Accept", note: "HTTPServer accepts and instantiates Handler" },
                { label: "Parse", note: "method, path, headers exposed on self" },
                { label: "Dispatch", note: "do_GET / do_POST chosen by method" },
                { label: "Respond", note: "send_response -> headers -> wfile body" },
                { label: "Close", note: "connection cleaned up per protocol" },
              ],
            },
            callout: {
              type: "warning",
              title: "Read exactly Content-Length bytes",
              body: "The practical POST bug: reading rfile without honouring Content-Length either blocks (too little read) or corrupts (too much). The two-line discipline - length = int(self.headers['Content-Length']); data = self.rfile.read(length) - is the section's most-asked runtime detail, mirroring Unit I's framing lesson.",
            },
            examQuestions: [
              {
                q: "Implement a custom HTTP server in Python: the BaseHTTPRequestHandler contract, GET and POST handling with JSON responses, the role of HTTPServer, and the threading upgrade.",
                marks: 14,
                outline: [
                  "Subclass BaseHTTPRequestHandler; define do_GET/do_POST",
                  "GET: send_response, headers, wfile.write(json body)",
                  "POST: read Content-Length bytes from rfile",
                  "HTTPServer binds and serve_forever() loops",
                  "Handler instantiated per request - state goes to the server",
                  "ThreadingHTTPServer: thread per connection (Unit III bridge)",
                  "Production caveat: validation, localhost binding, frameworks",
                ],
              },
              {
                q: "How does http.server relate to WSGI servers like gunicorn?",
                marks: 7,
                outline: [
                  "http.server: handler-class custom servers, development grade",
                  "gunicorn: WSGI callable host, production hardening",
                  "Same seam: HTTP parsing -> application dispatch",
                ],
              },
            ],
          },
          {
            number: "2.7",
            title: "Putting the unit together - a small JSON web service",
            body: [
              "The unit's synthesis: one small service exercising every piece - a custom http.server handler that parses JSON bodies (section 2.2), stores items in memory, serves them over GET/POST (section 2.6), with WSGI-style separation (section 2.5) and one XML report (section 2.3) to prove the formats interoperate. The exam values synthesis questions ('build a small web service') because they require wiring, not recitation.",
              "A worked design walks the data once: POST /items with JSON {'name': 'x'} -> handler reads rfile via Content-Length, json.loads validates, appends to a server-side list, returns 201 with the new item; GET /items returns the list as JSON; GET /items/report.xml returns ET.tostring of an XML rendering of the same list. One in-memory store, two serializations, one protocol - every unit-II concept in three endpoints.",
              "The architecture notes lift it beyond a code dump: separate parse (json.loads with try/except ValueError -> 400), validate (required fields), store (guarded by a threading.Lock once Unit III's concurrency arrives), and serialize (json.dumps for the API, ET for the report) - four responsibilities that frameworks formalize. The security checklist rides along: input size caps (read at most Content-Length with a max), path allowlisting, and error responses that leak nothing internal.",
              "Exam framing: expect 'design a small web service using http.server and JSON/XML handling'. Present the three endpoints, the four-responsibility split, and the security checklist - the answer reads as an architecture, which is exactly the difference between a pass and a distinction on synthesis questions.",
            ],
            keyTerms: [
              { term: "Endpoint", definition: "A (method, path) pair the server dispatches to logic." },
              { term: "Parse-validate-store-serialize", definition: "The four responsibilities every request handler splits." },
              { term: "Input cap", definition: "Maximum accepted Content-Length - the size-based DoS defence." },
              { term: "Error discipline", definition: "400/404 responses that leak nothing internal." },
            ],
            codeExample: {
              language: "python",
              caption: "items_service.py - the unit in three endpoints",
              code: `from http.server import BaseHTTPRequestHandler, HTTPServer
import json
import xml.etree.ElementTree as ET

ITEMS = []

class Handler(BaseHTTPRequestHandler):
    def _send(self, code, body, ctype="application/json"):
        self.send_response(code)
        self.send_header("Content-Type", ctype)
        self.end_headers()
        self.wfile.write(body)

    def do_GET(self):
        if self.path == "/items":
            self._send(200, json.dumps(ITEMS).encode())
        elif self.path == "/items/report.xml":
            root = ET.Element("items")
            for it in ITEMS:
                ET.SubElement(root, "item", name=it["name"])
            self._send(200, ET.tostring(root),
                       ctype="application/xml")
        else:
            self._send(404, b'{"error": "not found"}')

    def do_POST(self):
        if self.path != "/items":
            return self._send(404, b'{"error": "not found"}')
        n = int(self.headers.get("Content-Length", 0))
        if n > 10_000:                        # input cap
            return self._send(413, b'{"error": "too large"}')
        try:
            item = json.loads(self.rfile.read(n))
            name = str(item["name"])[:50]     # validate
        except (ValueError, KeyError):
            return self._send(400, b'{"error": "bad request"}')
        ITEMS.append({"name": name})
        self._send(201, json.dumps({"name": name}).encode())

HTTPServer(("127.0.0.1", 8000), Handler).serve_forever()`,
            },
            bullets: [
              "Three endpoints: POST /items, GET /items, GET /items/report.xml.",
              "Parse -> validate -> store -> serialize - the four responsibilities.",
              "json.loads with ValueError handling returns clean 400s.",
              "XML report proves the formats interoperate on one store.",
              "Input caps and path allowlists ride along from the start.",
              "A threading.Lock guards ITEMS once concurrency arrives (Unit III).",
            ],
            diagram: {
              kind: "flow",
              title: "POST /items, end to end",
              caption: "Every unit-II concept in one request's path.",
              steps: [
                { label: "Read body", note: "Content-Length-capped rfile read" },
                { label: "Parse", note: "json.loads with error handling" },
                { label: "Validate", note: "required fields, length caps" },
                { label: "Store", note: "append to the shared list" },
                { label: "Respond", note: "201 with the created item as JSON" },
              ],
            },
            callout: {
              type: "tip",
              title: "Synthesis is the distinction",
              body: "Synthesis questions grade wiring: state the four responsibilities (parse, validate, store, serialize) before the code, and the examiner can follow the program even if a detail slips. Code dumps without the responsibility split read as memorized fragments - the split is the architecture mark.",
            },
            examQuestions: [
              {
                q: "Design a small JSON web service using http.server: three endpoints (POST/GET items, XML report), the parse-validate-store-serialize responsibilities, and the security checklist.",
                marks: 14,
                outline: [
                  "POST /items: capped read, json.loads, validate, append, 201",
                  "GET /items: JSON dump of the store",
                  "GET /items/report.xml: ElementTree rendering",
                  "Error discipline: 400/404/413 with no internal leaks",
                  "Four responsibilities named before the code",
                  "Input caps and path allowlisting",
                  "Concurrency note: lock the store for Unit III",
                ],
              },
              {
                q: "Why cap the accepted Content-Length even on a trusted internal service?",
                marks: 7,
                outline: [
                  "Unbounded reads let a large body exhaust memory",
                  "A size cap is the cheapest DoS defence",
                  "Return 413 instead of reading the body",
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
      title: "Advanced Networking and Thread Programming",
      summary:
        "Unit III builds the concurrent server: custom TCP/UDP server frameworks, concurrency models and SSL, then the threading library in depth - synchronization primitives, threads and queues, the GIL, thread debugging, logging and context managers.",
      chapter: {
        number: "03",
        title: "Servers, Threads and the GIL",
        intro:
          "Unit III covers writing custom TCP/UDP servers, concurrency and SSL for networking, the threading library, thread synchronization, threads with queues, thread debugging, the GIL, the logging module, and context managers.",
        inOneBreath:
          "socketserver turns the socket dance into classes; SSL wraps sockets in TLS; threads share memory and need Locks, Semaphores, Conditions and Queues. The GIL serializes bytecode execution - threads help I/O-bound work, multiprocessing helps CPU-bound. Logging and context managers are the discipline that keeps concurrent programs debuggable.",
        sections: [
          {
            number: "3.1",
            title: "Writing custom TCP/UDP servers with socketserver",
            body: [
              "The syllabus's 'modules for writing custom TCP/UDP servers' is the socketserver framework: BaseServer + TCPServer/UDPServer handle the accept loop; request handler subclasses (BaseRequestHandler / StreamRequestHandler / DatagramRequestHandler) implement handle() per request; mixins (ThreadingMixIn, ForkingMixIn) add concurrency; serve_forever() runs the loop. The framework packages Unit I's dance into overridable classes - the exam's 'custom server' question expects exactly this structure.",
              "A worked TCP server: class EchoHandler(socketserver.BaseRequestHandler): def handle(self): data = self.request.recv(1024); self.request.sendall(data); then socketserver.TCPServer(('127.0.0.1', 5000), EchoHandler).serve_forever(). The UDP variant swaps UDPServer and DatagramRequestHandler (self.request is (data, socket) pair). The threaded upgrade is one line: class ThreadedTCPServer(ThreadingMixIn, TCPServer): pass - mixin composition is the framework's design lesson.",
              "The design reasoning completes the section: handler classes separate per-connection logic from the accept loop, so the same handler serves TCPServer, UDPServer, or their threaded variants; allow_reuse_address kills the TIME_WAIT rebinding annoyance; and the server's lifecycle (serve_forever + shutdown) is controllable for tests. The production note stays honest: for real services use WSGI/asyncio stacks; socketserver is the syllabus's teaching frame for what those hide.",
              "Exam framing: expect 'write a custom TCP server using socketserver' and 'explain the framework's classes'. Write the handler + server; show the ThreadingMixIn one-liner; state the handler-per-request separation. The mixin sentence is the design mark.",
            ],
            keyTerms: [
              { term: "socketserver", definition: "Stdlib framework: server classes + request handlers + concurrency mixins." },
              { term: "BaseRequestHandler", definition: "Subclass contract: implement handle() per connection/datagram." },
              { term: "ThreadingMixIn", definition: "Mixin making the server spawn a thread per request." },
              { term: "allow_reuse_address", definition: "Server flag enabling immediate rebind after restart (SO_REUSEADDR)." },
              { term: "serve_forever", definition: "The accept loop; shutdown() stops it from another thread." },
            ],
            codeExample: {
              language: "python",
              caption: "echo_framework.py - socketserver in three pieces",
              code: `import socketserver

class EchoHandler(socketserver.BaseRequestHandler):
    def handle(self):                       # per connection
        while True:
            data = self.request.recv(1024)  # StreamRequestHandler sugar
            if not data:
                break
            self.request.sendall(data)

class ThreadedTCPServer(socketserver.ThreadingMixIn,
                        socketserver.TCPServer):
    allow_reuse_address = True
    daemon_threads = True                   # threads die with the server

if __name__ == "__main__":
    with ThreadedTCPServer(("127.0.0.1", 5000), EchoHandler) as srv:
        srv.serve_forever()                 # Ctrl+C shuts down cleanly`,
            },
            bullets: [
              "TCPServer/UDPServer own the accept loop; handlers own per-request logic.",
              "handle() is the override point; self.request is the connection.",
              "ThreadingMixIn/ForkingMixIn add concurrency by composition.",
              "allow_reuse_address fixes restart rebinding.",
              "serve_forever/shutdown give a controllable lifecycle.",
              "Same handler serves TCP or UDP variants - the framework's economy.",
            ],
            diagram: {
              kind: "flow",
              title: "One request through socketserver",
              caption: "The framework's classes and the handler's seam.",
              steps: [
                { label: "Server accepts", note: "TCPServer accept loop" },
                { label: "MixIn decides", note: "inline, thread, or fork per request" },
                { label: "Handler instantiated", note: "request wired to self.request" },
                { label: "handle() runs", note: "your per-connection logic" },
                { label: "Cleanup", note: "socket closed; loop continues" },
              ],
            },
            callout: {
              type: "tip",
              title: "Mixins are the design lesson",
              body: "The differentiating observation: socketserver teaches composition - concurrency arrives by adding ThreadingMixIn to the class bases, not by rewriting the server. State that design point in the answer; the same mixin pattern recurs in Unit IV's process pools and throughout the stdlib.",
            },
            examQuestions: [
              {
                q: "Write a custom TCP echo server using the socketserver framework and explain its class structure: server classes, request handlers, and concurrency mixins.",
                marks: 14,
                outline: [
                  "EchoHandler(BaseRequestHandler): handle() with recv/sendall",
                  "TCPServer((host, port), Handler) binds and loops",
                  "serve_forever() runs; shutdown() stops",
                  "ThreadingMixIn: thread per request by composition",
                  "allow_reuse_address for clean restarts",
                  "UDP variant: UDPServer + DatagramRequestHandler",
                  "Separation: accept loop vs per-request logic",
                ],
              },
              {
                q: "Why does the handler class improve on the raw-socket server of Unit I?",
                marks: 7,
                outline: [
                  "Per-connection logic is isolated in handle()",
                  "The accept loop, binding and errors are framework-owned",
                  "Concurrency becomes a mixin choice, not a rewrite",
                ],
              },
            ],
          },
          {
            number: "3.2",
            title: "Concurrency models for servers",
            body: [
              "A server that serves one client at a time is a toy; concurrency is the syllabus's structural question, with three classic models. Thread-per-connection: each accepted client gets a thread (ThreadingMixIn) - shared memory makes state easy, the GIL limits CPU parallelism, and thousands of blocked-on-I/O threads are practical. Process-per-connection (ForkingMixIn): isolation and true parallelism, at IPC and memory cost. Event-driven (Unit V): one thread multiplexing many sockets via select/epoll - the nginx/asyncio model.",
              "A worked comparison anchors the choice: a chat server with 500 clients mostly waiting on recv - thread-per-connection is natural (500 blocked threads cost memory, not CPU, and shared state is a dict); a CPU-bound computation service - processes (the GIL serializes threads' CPU work; Unit IV's multiprocessing is the answer); a 10,000-connection proxy - event-driven (threads at that count exhaust memory; epoll multiplexes cheaply). Each model wins one workload - the exam's 'which model when' is answered by the workload's blocking profile.",
              "SSL belongs in the same syllabus line and gets its own section next, but the concurrency-SSL interaction is worth stating: TLS handshakes are CPU work (best under processes or async with crypto offload), session resumption reduces handshake cost, and blocking SSL sockets behave like plain blocking sockets for threading purposes - wrap after accept, as the next section shows.",
              "Exam framing: expect 'compare thread-based, process-based and event-driven servers'. Give the three models with the worked workload mapping and the blocking-profile principle: I/O-bound -> threads, CPU-bound -> processes, many-connections -> events. The blocking-profile sentence is the differentiator.",
            ],
            keyTerms: [
              { term: "Thread-per-connection", definition: "One thread per client - natural for I/O-bound, shared-state servers." },
              { term: "Process-per-connection", definition: "Forking model - isolation and true parallelism, IPC cost." },
              { term: "Event-driven", definition: "One loop multiplexing sockets via select/epoll - the many-connection model." },
              { term: "Blocking profile", definition: "The workload's I/O vs CPU split - decides the model." },
              { term: "C10K", definition: "The 10,000-client problem - event-driven architectures' raison d'etre." },
            ],
            table: {
              caption: "Three server models - the workload mapping.",
              headers: ["Model", "Mechanism", "Wins for", "Costs"],
              rows: [
                ["Thread per connection", "ThreadingMixIn, shared memory", "I/O-bound, shared state (chat)", "GIL limits CPU; memory per thread"],
                ["Process per connection", "ForkingMixIn, separate address space", "CPU-bound, isolation-critical", "IPC and memory overhead"],
                ["Event-driven", "select/epoll multiplexing (Unit V)", "many connections (C10K)", "callback complexity, no blocking calls"],
              ],
            },
            bullets: [
              "Threads: shared memory, GIL-serialized CPU - I/O-bound workloads win.",
              "Processes: isolation and true parallelism at IPC cost.",
              "Events: one loop, many sockets - the C10K answer (Unit V).",
              "Choose by blocking profile: I/O-bound, CPU-bound, or connection-count-bound.",
              "SSL adds CPU cost to handshakes - processes or resumption mitigate.",
              "The same handler class runs under any model - the socketserver lesson.",
            ],
            diagram: {
              kind: "fork",
              title: "Choosing the server's concurrency model",
              caption: "The workload's blocking profile decides.",
              start: "What does the server spend its time doing?",
              branches: [
                { label: "Mostly waiting on I/O", outcome: "thread per connection - blocked threads cost memory, not CPU", good: true },
                { label: "Crunching CPU", outcome: "processes - the GIL serializes thread CPU work (Unit IV)", good: true },
                { label: "Holding thousands of sockets", outcome: "event-driven multiplexing (Unit V) - threads would exhaust memory", good: true },
              ],
            },
            callout: {
              type: "tip",
              title: "The blocking-profile principle",
              body: "The one-line decision rule examiners reward: 'I/O-bound -> threads; CPU-bound -> processes; connection-count-bound -> events'. Every model question is answered by classifying the workload first - the models are fixed, the workloads vary.",
            },
            examQuestions: [
              {
                q: "Compare thread-per-connection, process-per-connection and event-driven server models with their mechanisms, workloads and costs. Which suits a chat server, a CPU-bound service and a 10,000-connection proxy, and why?",
                marks: 14,
                outline: [
                  "Threads: shared memory, GIL-serialized CPU, cheap for blocked I/O",
                  "Processes: isolation, true parallelism, IPC cost",
                  "Events: select/epoll multiplexing, callback complexity",
                  "Chat server: I/O-bound with shared state - threads",
                  "CPU service: GIL blocks thread parallelism - processes",
                  "10k-connection proxy: threads exhaust memory - events",
                  "Blocking-profile principle as the decision rule",
                ],
              },
              {
                q: "Why do threads suit I/O-bound servers despite the GIL?",
                marks: 7,
                outline: [
                  "The GIL serializes CPU bytecode, not blocked waits",
                  "Threads waiting on recv/sleep release the GIL",
                  "Shared memory makes session state trivial",
                ],
              },
            ],
          },
          {
            number: "3.3",
            title: "SSL/TLS in Python",
            body: [
              "The ssl module wraps a socket in TLS: an SSLContext holds protocol settings and certificates; ctx.wrap_socket(sock, server_hostname=...) returns an SSLSocket performing the handshake on first use. Servers load cert chains (ctx.load_cert_chain('cert.pem', 'key.pem')); clients verify the server against system CA roots (create_default_context()) - the syllabus's 'SSL' item in one module.",
              "A worked secure echo: server side - ctx = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER); ctx.load_cert_chain('cert.pem', 'key.pem'); tls = ctx.wrap_socket(conn, server_side=True); then recv/sendall as usual. Client side - ctx = ssl.create_default_context(); tls = ctx.wrap_socket(socket.create_connection(('host', 443)), server_hostname='host'); read/write as usual, with verification failures raising ssl.SSLCertVerificationError. The posture notes: default contexts verify and check hostnames (context.check_hostname = True); downgrading to CERT_NONE silences errors and destroys the protection - the exam's 'what not to do' line.",
              "The operational details complete the section: TLS versions and cipher selection live on the context (minimum_version), SNI (server_hostname) routes certificate selection, session resumption reduces handshake cost under concurrency (section 3.2's note), and sockets must be wrapped after accept on servers. The branch-specific rule: never disable verification for 'testing' in shipped code - pin a test CA instead; hostname mismatch and expired certificates are the two errors to read from SSLCertVerificationError.",
              "Exam framing: expect 'explain the ssl module with a worked client-server pair' and 'certificate verification posture'. Write both wrap_socket calls; state the default-context rule and the CERT_NONE anti-pattern. The 'wrap after accept' detail is the practical mark.",
            ],
            keyTerms: [
              { term: "SSLContext", definition: "Holder of TLS protocol settings, certificates and verification policy." },
              { term: "wrap_socket", definition: "Transforms a plain socket into an SSLSocket; handshake on first I/O." },
              { term: "create_default_context", definition: "Client context with CA verification and hostname checks on." },
              { term: "load_cert_chain", definition: "Server-side certificate and private key loading." },
              { term: "CERT_NONE anti-pattern", definition: "Disabling verification destroys TLS's protection - never ship it." },
            ],
            codeExample: {
              language: "python",
              caption: "tls_echo.py - wrap after accept",
              code: `import socket, ssl

# ---- server ----
ctx = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
ctx.load_cert_chain("cert.pem", "key.pem")
srv = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
srv.bind(("127.0.0.1", 5000)); srv.listen(5)
conn, addr = srv.accept()
tls = ctx.wrap_socket(conn, server_side=True)   # wrap AFTER accept
print(tls.recv(1024))

# ---- client ----
cctx = ssl.create_default_context()             # verify + hostname check
raw = socket.create_connection(("localhost", 5000))
tls_c = cctx.wrap_socket(raw, server_hostname="localhost")
tls_c.sendall(b"secure hello")
# verification failure -> ssl.SSLCertVerificationError`,
            },
            bullets: [
              "SSLContext holds settings; wrap_socket returns the SSLSocket.",
              "Clients: create_default_context - verification and hostname check on.",
              "Servers: load_cert_chain, wrap after accept, server_side=True.",
              "Handshake happens on first I/O; failures raise SSLCertVerificationError.",
              "Never ship CERT_NONE - pin a test CA instead.",
              "Resumption reduces handshake cost under concurrency.",
            ],
            diagram: {
              kind: "flow",
              title: "A TLS connection, in module terms",
              caption: "Context, wrap, handshake, then the ordinary socket API.",
              steps: [
                { label: "Build context", note: "protocol version, certs, policy" },
                { label: "Wrap socket", note: "plain -> SSLSocket" },
                { label: "Handshake", note: "on first read/write; verify certificates" },
                { label: "Secure I/O", note: "recv/sendall now encrypted" },
                { label: "Failure mode", note: "SSLCertVerificationError - read it, don't disable" },
              ],
            },
            callout: {
              type: "warning",
              title: "CERT_NONE is not a debug flag",
              body: "The security branch's rule: ssl contexts created with check_hostname=False and verify_mode=CERT_NONE 'fix' certificate errors by deleting the protection - MITM becomes invisible. The correct debugging move is reading SSLCertVerificationError (hostname mismatch? expired? untrusted root?) and fixing the certificate chain. State this in every SSL answer.",
            },
            examQuestions: [
              {
                q: "Explain Python's ssl module: SSLContext and wrap_socket roles, a worked TLS client-server echo pair, certificate verification posture, and the operational details (wrap after accept, SNI, resumption).",
                marks: 14,
                outline: [
                  "SSLContext: protocol settings, certs, verification policy",
                  "wrap_socket: plain socket -> SSLSocket; handshake on first I/O",
                  "Server: load_cert_chain + wrap after accept, server_side=True",
                  "Client: create_default_context with hostname check",
                  "Failures: SSLCertVerificationError - read code and reason",
                  "Anti-pattern: CERT_NONE deletes protection - pin test CAs",
                  "SNI routing and session resumption under concurrency",
                ],
              },
              {
                q: "Why must server-side sockets be wrapped after accept() rather than the listening socket?",
                marks: 7,
                outline: [
                  "The listening socket only queues connections",
                  "Each connection gets its own handshake and session state",
                  "Wrapping the listener would tie one TLS session to all clients",
                ],
              },
            ],
          },
          {
            number: "3.4",
            title: "The threading library",
            body: [
              "The threading library (the syllabus's 'Thread debugging' companion) models threads as objects: threading.Thread(target=f, args=(...)) then .start()/.join() for lifecycle; .name and daemon flag for housekeeping; threading.active_count/current_thread for introspection; and threading.Timer for delayed calls. Threads share the process's memory - the power and the danger - so the library's synchronization primitives (next section) are its real content.",
              "A worked pair of threads fixes the pattern: def worker(n): print(n); t1 = Thread(target=worker, args=(1,)); t2 = Thread(target=worker, args=(2,)); t1.start(); t2.start(); t1.join(); t2.join(). The interleaving is nondeterministic - run twice, different orders - which is the teaching moment: shared prints interleave, and any shared STRUCTURE (a counter, a list) needs a lock. The daemon flag marks threads that die with the process (background keepalives); non-daemon threads block interpreter exit until joined.",
              "Debugging threads - the syllabus's named sub-topic - is a discipline: faulthandler (dump all thread stacks on signal), logging with thread names (%(threadName)s - every log line attributed), thread-safe structures (queue.Queue instead of hand-rolled lists), and deadlock avoidance by lock ordering. The debugger's reality: print-based interleaving lies (two prints can appear ordered); the logging module's thread-aware formatter and timestamps are the honest tool.",
              "Exam framing: expect 'explain the threading library with a worked example' and 'how do you debug threads in Python'. Write the pair-join example; name daemon vs non-daemon; close with the debugging discipline (faulthandler, thread-named logging, queues, lock ordering). The 'prints lie' sentence is the debugging mark.",
            ],
            keyTerms: [
              { term: "threading.Thread", definition: "Thread object with target/args; start() launches, join() waits." },
              { term: "Daemon thread", definition: "Dies with the process - background helpers; non-daemon threads block exit." },
              { term: "faulthandler", definition: "Dumps all thread stacks on fault/signals - the debugging anchor." },
              { term: "%(threadName)s", definition: "Logging formatter attributing every line to its thread." },
              { term: "Shared memory", definition: "Threads share the process - the power and the race-condition danger." },
            ],
            codeExample: {
              language: "python",
              caption: "threads.py - pair, join, and thread-named logs",
              code: `import threading, logging, time

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s %(threadName)s: %(message)s")

def worker(n):
    logging.info("start %d", n)
    time.sleep(0.2 * (3 - n))
    logging.info("done %d", n)

t1 = threading.Thread(target=worker, args=(1,), name="alpha")
t2 = threading.Thread(target=worker, args=(2,), name="beta")
t1.start(); t2.start()
t1.join(); t2.join()               # main waits for both
print("active:", threading.active_count())

# run twice - the interleaving differs: nondeterminism is the lesson`,
            },
            bullets: [
              "Thread(target, args) -> start() -> join() lifecycle.",
              "Nondeterministic interleaving - shared structures need locks.",
              "daemon=True: dies with process; non-daemon blocks interpreter exit.",
              "faulthandler dumps all stacks on signals - the debugging anchor.",
              "Thread-named logging attributes every line honestly.",
              "Lock ordering prevents the classic AB-BA deadlock.",
            ],
            diagram: {
              kind: "cycle",
              title: "A thread's lifecycle",
              caption: "The object API mirrors the lifecycle exactly.",
              steps: [
                { label: "Create", note: "Thread(target=...)" },
                { label: "start()", note: "OS thread launched; target runs" },
                { label: "Run", note: "shares memory with all threads" },
                { label: "finish", note: "target returns; resources released" },
                { label: "join()", note: "caller waits; exit determined" },
              ],
            },
            callout: {
              type: "exam",
              title: "Prints lie; logs do not",
              body: "The debugging sentence examiners reward: 'thread interleaving makes print-based debugging unreliable - two prints can appear in an order neither thread produced'. The honest tool is logging with %(threadName)s and timestamps, backed by faulthandler's full-stack dumps. Name both in any thread-debugging answer.",
            },
            examQuestions: [
              {
                q: "Explain the threading library: Thread lifecycle (start/join), daemon vs non-daemon threads, a worked two-thread example, and the thread-debugging discipline.",
                marks: 14,
                outline: [
                  "Thread(target, args) -> start() -> join()",
                  "Interleaving nondeterministic - run twice, different orders",
                  "daemon threads die with the process; others block exit",
                  "Shared memory requires synchronization (next section)",
                  "faulthandler dumps all thread stacks",
                  "logging with %(threadName)s attributes lines",
                  "Lock ordering prevents AB-BA deadlocks",
                ],
              },
              {
                q: "What does the daemon flag change about interpreter shutdown?",
                marks: 7,
                outline: [
                  "Non-daemon threads are joined before exit",
                  "Daemon threads are killed abruptly at shutdown",
                  "Choose daemons for background keepalives only",
                ],
              },
            ],
          },
          {
            number: "3.5",
            title: "Thread synchronization",
            body: [
              "Shared memory makes synchronization the threading library's core: threading.Lock (mutual exclusion - acquire/release, with-block), RLock (reentrant for nested acquisition), Semaphore(n) (counting admission), Event (one-shot signaling - wait/set), Condition (wait/notify around a shared predicate), and Barrier(n) (rendezvous of n parties). The race condition is the motivation: two threads incrementing a counter lose updates because read-modify-write is three bytecodes, not one.",
              "A worked race and its fix is the exam's canonical demonstration: counter = 0; def bump(): global counter; for _ in range(100000): counter += 1; two threads -> final count below 200000 (lost updates); with lock = Lock() and 'with lock: counter += 1' -> exactly 200000. The with-statement is the discipline (release on exception, no forgotten release); the lost-update arithmetic (both read 5, both write 6) is the explanation examiners check.",
              "The higher-level primitives deserve their worked sketches: Event for 'ready' signaling (a worker waits; the loader sets); Condition for bounded buffers (producer waits on not-full, notifies on put - the queue.Queue implementation); Barrier for synchronized phases (benchmark threads start together). Choosing by need: exclusion -> Lock/RLock; admission -> Semaphore; signaling -> Event; predicate coordination -> Condition; rendezvous -> Barrier. The syllabus's 'thread synchronization' is answered by the race demo plus this chooser.",
              "Exam framing: expect 'demonstrate a race condition and fix it with Lock' and 'explain Semaphore/Event/Condition with use cases'. Write the counter demo with numbers; give the chooser table; the with-statement discipline and the lost-update arithmetic are the marks.",
            ],
            keyTerms: [
              { term: "Race condition", definition: "Interleaved read-modify-write losing updates on shared state." },
              { term: "Lock / with lock", definition: "Mutual exclusion; the with-statement releases on exception." },
              { term: "Semaphore(n)", definition: "Counting admission - n concurrent holders." },
              { term: "Condition", definition: "wait/notify coordination around a shared predicate (bounded buffers)." },
              { term: "Barrier(n)", definition: "Rendezvous - all n parties released together." },
            ],
            codeExample: {
              language: "python",
              caption: "race.py - the lost update and its fix",
              code: `import threading

counter = 0
lock = threading.Lock()

def bump_unsafe(n):
    global counter
    for _ in range(n):
        counter += 1        # read-modify-write: three steps

def bump_safe(n):
    global counter
    for _ in range(n):
        with lock:          # exclusion makes it atomic
            counter += 1

t1 = threading.Thread(target=bump_unsafe, args=(100_000,))
t2 = threading.Thread(target=bump_unsafe, args=(100_000,))
t1.start(); t2.start(); t1.join(); t2.join()
print(counter)              # < 200000 - updates lost

counter = 0
t1 = threading.Thread(target=bump_safe, args=(100_000,))
t2 = threading.Thread(target=bump_safe, args=(100_000,))
t1.start(); t2.start(); t1.join(); t2.join()
print(counter)              # 200000 exactly`,
            },
            bullets: [
              "Race: counter += 1 is read-modify-write - interleaving loses updates.",
              "Lock + with-statement: exclusion with exception-safe release.",
              "RLock for nested acquisition; Semaphore(n) for admission.",
              "Event: one-shot ready signaling; Condition: predicate coordination.",
              "Barrier: n-party rendezvous for phased work.",
              "Chooser: exclusion/admission/signaling/predicate/rendezvous.",
            ],
            diagram: {
              kind: "matrix",
              title: "Which primitive for which need?",
              caption: "Four needs, four primitives - the synchronization chooser.",
              axes: { x: "Coordination style (mutual -> signaling)", y: "Parties involved (one -> many)" },
              quadrants: [
                { label: "Condition", note: "many parties, predicate coordination (buffer)" },
                { label: "Lock / RLock", note: "one-at-a-time mutual exclusion (counter)" },
                { label: "Barrier / Semaphore", note: "many parties - rendezvous or counted admission" },
                { label: "Event", note: "one broadcaster, many waiters (ready flag)" },
              ],
            },
            callout: {
              type: "exam",
              title: "Write the lost-update numbers",
              body: "The race demo earns marks by arithmetic, not assertion: two threads x 100,000 increments -> a total below 200,000; both threads read 5 and write 6 -> one increment vanishes. Give the numbers, the three-step read-modify-write, and the with-lock fix - that sequence is the complete synchronization answer.",
            },
            examQuestions: [
              {
                q: "Demonstrate a race condition on a shared counter and fix it with threading.Lock. Explain Semaphore, Event, Condition and Barrier with one use case each.",
                marks: 14,
                outline: [
                  "counter += 1 is read-modify-write - three steps",
                  "Two threads x 100,000 -> total below 200,000",
                  "Both read 5, both write 6 - one update lost",
                  "with lock: makes the increment atomic",
                  "Semaphore(n): admitting n concurrent holders",
                  "Event: one-shot ready signaling; Barrier: rendezvous",
                  "Condition: wait/notify for bounded buffers",
                ],
              },
              {
                q: "Why is the with-statement preferred over explicit acquire/release?",
                marks: 7,
                outline: [
                  "Release happens even if the block raises",
                  "No forgotten release path",
                  "Scoped lifetime reads clearly",
                ],
              },
            ],
          },
          {
            number: "3.6",
            title: "Threads and queues",
            body: [
              "The syllabus's 'threads and queues' is the producer-consumer pattern - the standard bridge between shared-memory threads and message-passing design: queue.Queue (thread-safe, blocking, bounded) hands work between threads so they touch data only through the queue, not each other. The API: put(item) blocks while full, get() blocks while empty, put_nowait/get_nowait raise, task_done() and join() coordinate completion, and maxsize bounds memory (backpressure by blocking).",
              "A worked pipeline fixes the pattern: producer thread PUTs URLs into Queue(maxsize=100); N worker threads GET, fetch, and PUT results to a results queue; a writer thread GETs results; completion via sentinel values (None) after producers finish, then q.join(). The three lessons inside the demo: bounded queues apply backpressure (a fast producer blocks instead of exploding memory), workers are interchangeable (scale N without touching logic), and sentinels replace join-guessing for shutdown. Deadlock risk: task_done() once per get, or q.join() never returns.",
              "The design reasoning is the exam's payload: queues convert shared-state coordination (locks around every access) into ownership transfer (each item owned by exactly one thread at a time) - fewer locks, clearer invariants, natural backpressure. The syllabus's phrase 'threads and queues' is answered by the pattern, the bounded-backpressure point, and the sentinel shutdown discipline; the same pattern reappears in Unit IV's multiprocessing.Queue and Unit V's coroutine pipelines.",
              "Exam framing: expect 'explain the producer-consumer pattern with queue.Queue' and 'how do bounded queues provide backpressure'. Write the producer-N-workers-sentinel sketch; state the ownership-transfer argument and the task_done discipline.",
            ],
            keyTerms: [
              { term: "queue.Queue", definition: "Thread-safe blocking queue - the producer-consumer workhorse." },
              { term: "Backpressure", definition: "Bounded queues block fast producers when consumers fall behind." },
              { term: "Sentinel", definition: "A reserved value (None) signalling workers to exit." },
              { term: "task_done / join", definition: "Completion accounting - join returns when every get has its task_done." },
              { term: "Ownership transfer", definition: "Each item owned by one thread at a time - design replaces locking." },
            ],
            codeExample: {
              language: "python",
              caption: "pipeline.py - producer, workers, sentinel shutdown",
              code: `import threading, queue, urllib.request

jobs = queue.Queue(maxsize=100)       # bounded -> backpressure

def producer(urls):
    for u in urls:
        jobs.put(u)
    for _ in range(3):                # one sentinel per worker
        jobs.put(None)

def worker():
    while True:
        url = jobs.get()              # blocks while empty
        try:
            if url is None:           # sentinel -> exit
                return
            body = urllib.request.urlopen(url, timeout=5).read()
            print(url, len(body))
        finally:
            jobs.task_done()          # once per get

threads = [threading.Thread(target=worker) for _ in range(3)]
for t in threads: t.start()
producer(["https://example.com"] * 5)
jobs.join()                           # waits for all task_done
for t in threads: t.join()`,
            },
            bullets: [
              "queue.Queue: thread-safe blocking handoff with optional maxsize.",
              "Bounded queue -> fast producers block - backpressure without locks.",
              "N interchangeable workers; scale N without touching logic.",
              "Sentinels (None) give workers a clean exit condition.",
              "task_done once per get; q.join() waits for full completion.",
              "The pattern reappears as multiprocessing.Queue and coroutine pipes.",
            ],
            diagram: {
              kind: "pipeline",
              title: "Producer-consumer with backpressure",
              caption: "The bounded queue is the valve - full means block, not bloat.",
              stages: [
                { label: "Producer", note: "puts work; blocks when queue is full" },
                { label: "Queue(maxsize)", note: "the valve - bounded memory" },
                { label: "Workers x N", note: "get, process, task_done" },
                { label: "Sentinel", note: "None ends each worker cleanly" },
                { label: "join", note: "completion when all gets are done" },
              ],
            },
            callout: {
              type: "tip",
              title: "One sentinel per worker",
              body: "The shutdown bug that costs marks: with N workers, producers must put N sentinels - one worker consumes each None and exits. One sentinel exits only one worker; the rest hang on get(). Pair it with task_done-per-get and the pipeline shuts down deterministically - the two rules examiners check.",
            },
            examQuestions: [
              {
                q: "Explain the producer-consumer pattern with queue.Queue: the API, bounded backpressure, sentinel shutdown and completion accounting (task_done/join), with a worked multi-worker pipeline.",
                marks: 14,
                outline: [
                  "queue.Queue: thread-safe, blocking put/get",
                  "maxsize bounds memory - fast producers block (backpressure)",
                  "N workers get/process/task_done - interchangeable",
                  "Sentinels: one None per worker for clean exits",
                  "q.join() returns when every get has task_done",
                  "Ownership transfer replaces per-access locking",
                  "Same pattern as multiprocessing.Queue and coroutine pipes",
                ],
              },
              {
                q: "How do bounded queues differ from unbounded ones in a fast-producer scenario?",
                marks: 7,
                outline: [
                  "Unbounded: memory grows without limit - producer never waits",
                  "Bounded: put() blocks - the system self-regulates",
                  "Backpressure propagates upstream naturally",
                ],
              },
            ],
          },
          {
            number: "3.7",
            title: "The GIL, logging and context managers",
            body: [
              "The Global Interpreter Lock (GIL) is the syllabus's named interpreter-model fact: CPython executes bytecode holding one mutex, so only one thread runs Python code at a time - threads do not parallelize CPU-bound work. Threads still help I/O-bound work because blocking calls (sockets, file reads, time.sleep, many C extensions) release the GIL while waiting. The consequence shapes every choice in this course: CPU parallelism needs processes (Unit IV); concurrency-with-I/O uses threads or events (Unit V).",
              "A worked demonstration pins it: four threads looping pure-Python additions take about the same wall time as four sequential loops (GIL-serialized); four processes over the same work take about a quarter (true parallelism); four threads fetching URLs take about a quarter of one sequential fetch (the GIL released during waits). The three-way result is the exam's favourite table - same code shape, three timing outcomes, one mechanism (GIL held vs released).",
              "The logging module and context managers are the syllabus's discipline pair. Logging: named loggers, levels (DEBUG..CRITICAL), handlers/formatters, %(threadName)s attribution, and per-module loggers via logging.getLogger(__name__) - the honest alternative to prints in concurrent code. Context managers: with-statement semantics via __enter__/__exit__ (files, locks, sockets) - resources released on exception paths; contextlib.contextmanager turns a generator into one (Unit V's tie-in); nested context managers compose (with lock, conn:). Together they make concurrent programs debuggable and leak-free.",
              "Exam framing: expect 'what is the GIL and what are its consequences' and 'explain the logging module / context managers'. Give the three-way timing table; state the GIL-release rule for blocking calls; write one @contextmanager example. The 'threads for I/O, processes for CPU' sentence is the GIL answer's core.",
            ],
            keyTerms: [
              { term: "GIL", definition: "CPython's mutex - one thread executes Python bytecode at a time." },
              { term: "GIL release", definition: "Blocking I/O and many C calls release the GIL - threads still help I/O-bound work." },
              { term: "Logger hierarchy", definition: "getLogger(__name__) - per-module loggers propagating to root handlers." },
              { term: "Context manager", definition: "__enter__/__exit__ pair bound by with - exception-safe resource release." },
              { term: "contextlib.contextmanager", definition: "Decorator turning a generator into a context manager." },
            ],
            table: {
              caption: "Same work, three shapes, three timings - the GIL table.",
              headers: ["Work shape", "Wall time vs sequential", "Mechanism"],
              rows: [
                ["4 threads, pure CPU loop", "about 1x (no gain)", "GIL serializes bytecode"],
                ["4 processes, pure CPU loop", "about 0.25x", "true parallelism (Unit IV)"],
                ["4 threads, URL fetches", "about 0.25x", "GIL released during socket waits"],
              ],
            },
            bullets: [
              "GIL: one mutex; one thread runs Python bytecode at a time.",
              "Blocking calls release the GIL - I/O-bound threads still gain.",
              "CPU parallelism requires processes (Unit IV's multiprocessing).",
              "Three-way demo: threads-CPU 1x, processes 0.25x, threads-I/O 0.25x.",
              "logging.getLogger(__name__): per-module loggers, thread-named lines.",
              "with-statement releases locks/files/sockets on exception paths.",
            ],
            diagram: {
              kind: "compare",
              title: "Threads vs processes under the GIL",
              caption: "The workload's nature, not preference, decides.",
              left: {
                heading: "Threads (GIL-bound)",
                items: [
                  "CPU work serialized - no speedup",
                  "I/O waits release the GIL - real speedup",
                  "Shared memory: locks needed",
                  "Lightweight to create",
                ],
              },
              right: {
                heading: "Processes (Unit IV)",
                items: [
                  "True parallelism on all cores",
                  "Separate memory: IPC required",
                  "Heavier startup cost",
                  "The CPU-bound answer",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "The GIL-release rule",
              body: "The complete GIL answer in one sentence: 'the GIL serializes Python bytecode, but blocking operations (sockets, files, sleep, C extensions) release it - so threads accelerate I/O-bound work and never CPU-bound work, which is what processes are for'. The three-way timing table demonstrates it; recite the sentence first.",
            },
            examQuestions: [
              {
                q: "Explain the GIL and its consequences with a three-way demonstration (CPU threads, CPU processes, I/O threads). Also explain the logging module's use in threaded programs and context managers with @contextmanager.",
                marks: 14,
                outline: [
                  "GIL: one mutex; one thread runs bytecode at a time",
                  "CPU threads: about 1x wall time - serialized",
                  "CPU processes: about 0.25x - true parallelism",
                  "I/O threads: about 0.25x - GIL released during waits",
                  "Consequence: threads for I/O, processes for CPU",
                  "logging.getLogger(__name__) + %(threadName)s discipline",
                  "@contextmanager: generator -> with-compatible resource guard",
                ],
              },
              {
                q: "Why does the with-statement matter more in threaded code than single-threaded code?",
                marks: 7,
                outline: [
                  "Exceptions in one thread must not leak held locks",
                  "A leaked lock deadlocks unrelated threads",
                  "with guarantees release on every exit path",
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
      title: "Message Passing, Serialization and Distributed Computing",
      summary:
        "Unit IV moves from threads to processes: IPC and message passing, pickle/ctypes serialization, multiprocessing's process objects, pipes, queues, shared memory and pools, then the distributed view - actors, client/server, REST, RPC, XML-RPC and distributed objects.",
      chapter: {
        number: "04",
        title: "From Processes to Distributed Objects",
        intro:
          "Unit IV covers interprocess communication and message passing, pickle and ctypes serialization, multiprocessing (process objects, pipes, queues, shared memory, pools), and distributed computing concepts - actors, client/server, REST, RPC, XML-RPC and distributed objects.",
        inOneBreath:
          "Processes need explicit channels: pickle serializes objects, ctypes handles binary layouts, pipes connect pairs, queues fan out work, shared memory shares arrays, pools farm out tasks. Distributed computing scales the same message-passing shape across machines - REST over HTTP, RPC over XML, actors over queues.",
        sections: [
          {
            number: "4.1",
            title: "Interprocess communication and message passing",
            body: [
              "Processes do not share memory (unlike threads) - each has its own address space, so Unit III's shared-counter race disappears and its shared-state convenience vanishes with it. Interprocess communication (IPC) restores cooperation through explicit channels: pipes (one-way byte streams between related processes), named pipes/FIFOs (filesystem-visible), queues (message passing with buffering), shared memory (raw shared arrays with explicit synchronization), sockets (the network-capable channel), and signals (asynchronous notification).",
              "A worked contrast fixes the model shift: the Unit III counter race is impossible between processes - each process increments its own copy - but sharing the total now requires a channel: send each increment over a pipe, or mmap a shared Value with a Lock. The message-passing philosophy that replaces shared state: send data, not references; each process owns its memory; coordination happens at the channel. This is exactly the actor model's premise (section 4.6) and the reason the syllabus pairs 'message passing' with multiprocessing.",
              "The channel chooser is the section's deliverable: pipe for two related processes; multiprocessing.Queue for fan-out work distribution; shared memory (Value/Array/mmap) for hot large data where copying hurts; sockets when processes may live on different machines (the distributed upgrade); signals for control notification, not data. Choosing wrong shows up as either serialization overhead (channels on hot paths) or race conditions (shared memory without locks) - the two failure modes to name.",
              "Exam framing: expect 'explain IPC mechanisms in Python' and 'why do processes need message passing where threads do not'. State the address-space isolation, walk the counter contrast, and give the chooser table. The 'send data, not references' sentence is the philosophy mark.",
            ],
            keyTerms: [
              { term: "Address-space isolation", definition: "Processes own private memory - no accidental sharing, no shared-state races." },
              { term: "Pipe", definition: "One-way byte channel between related processes." },
              { term: "Message passing", definition: "Cooperation by sending data through channels instead of sharing memory." },
              { term: "Shared memory", definition: "Explicitly shared arrays/values - fast but needing locks." },
              { term: "Actor model", definition: "Concurrent units exchanging messages - the message-passing extreme." },
            ],
            table: {
              caption: "The IPC channel chooser.",
              headers: ["Channel", "Shape", "Wins for", "Watch out"],
              rows: [
                ["Pipe", "one-way, two related processes", "simple parent-child links", "one direction only"],
                ["multiprocessing.Queue", "fan-out/fan-in messages", "work distribution", "serialization overhead"],
                ["Shared memory (Value/Array)", "raw shared data + locks", "hot, large numeric data", "manual synchronization"],
                ["Sockets", "network-capable channels", "cross-machine (distributed)", "framing needed"],
                ["Signals", "async notification", "control events (kill, reload)", "no data payload"],
              ],
            },
            bullets: [
              "Processes own private memory - Unit III's races vanish, sharing needs channels.",
              "Pipes connect pairs; queues fan out; shared memory shares hot data.",
              "Sockets upgrade any channel across machines (the distributed bridge).",
              "Send data, not references - the message-passing philosophy.",
              "Two failure modes: serialization overhead vs unsynchronized sharing.",
              "The actor model (4.6) is this philosophy's pure form.",
            ],
            diagram: {
              kind: "compare",
              title: "Threads vs processes: sharing model",
              caption: "The same program, two cooperation disciplines.",
              left: {
                heading: "Threads",
                items: [
                  "Shared memory by default",
                  "Locks guard every shared access",
                  "Race conditions are the bug class",
                  "Cheap creation and communication",
                ],
              },
              right: {
                heading: "Processes",
                items: [
                  "Private memory by default",
                  "Channels carry the data",
                  "Serialization is the cost class",
                  "True parallelism, no GIL",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Send data, not references",
              body: "The philosophy sentence that organizes the whole unit: 'processes cannot share references, so they send data - every IPC mechanism is a channel choice shaped by size, direction and locality'. Attach the chooser table and the two failure modes, and the IPC question is fully answered.",
            },
            examQuestions: [
              {
                q: "Explain interprocess communication in Python: why processes need explicit channels, the pipe/queue/shared-memory/socket/signal mechanisms with use cases, and the contrast with thread-based sharing.",
                marks: 14,
                outline: [
                  "Address-space isolation removes shared-state races and convenience",
                  "Pipe: one-way link between related processes",
                  "Queue: fan-out work distribution with buffering",
                  "Shared memory: hot large data with explicit locks",
                  "Sockets: the cross-machine upgrade; signals: control only",
                  "Threads: shared memory + locks vs processes: channels + serialization",
                  "Failure modes: serialization overhead vs unsynchronized sharing",
                ],
              },
              {
                q: "Why is the Unit III counter race impossible between two processes?",
                marks: 7,
                outline: [
                  "Each process has a private address space",
                  "Increments touch separate copies of the variable",
                  "Sharing requires an explicit channel - where new coordination begins",
                ],
              },
            ],
          },
          {
            number: "4.2",
            title: "pickle and ctypes - data serialization",
            body: [
              "Serialization moves objects across channels; the syllabus names the two polar tools. pickle: Python-native binary serialization - pickle.dumps(obj) / loads(s), Pickler/Unpickler, protocol versions (default is fine; higher protocols are faster), and the ability to serialize almost any Python object graph (classes, instances, nested structures). ctypes: the foreign-function interface for C - defining C-compatible structs/unions, calling shared-library functions (CDLL), and controlling binary layout for interoperability.",
              "A worked pickle round trip: data = {'cfg': [1, 2], 'ts': 'x'}; blob = pickle.dumps(data); back = pickle.loads(blob) - the object graph restored. The security half is the exam's distinguishing content: pickle.loads executes code embedded in the pickle stream (reduce opcodes invoke callables) - untrusted pickles are arbitrary code execution; the rule is 'pickle only between trusted endpoints' (your own processes), never over the network from unknown parties - JSON (Unit II) is the untrusted-safe alternative.",
              "A worked ctypes definition shows the binary half: class Point(Structure): _fields_ = [('x', c_int), ('y', c_int)]; p = Point(3, 4); p.x - memory layout matching C's struct; libc = CDLL('libc.so.6'); libc.atoi(b'42') calls into C. Use cases: wrapping native libraries, building binary protocol frames, reading/writing C data files. The pairing logic: pickle for Python-object transport between trusted processes; ctypes for binary-layout interop with C; JSON for untrusted text interchange - three serializers, three contracts.",
              "Exam framing: expect 'explain pickle with its security implications' and 'what is ctypes for'. Give both worked snippets; state the trusted-endpoints rule with the reduce-opcode mechanism; close the three-serializer comparison. The 'loads executes code' sentence is the security branch's signature mark.",
            ],
            keyTerms: [
              { term: "pickle.dumps / loads", definition: "Python-native binary serialization of object graphs." },
              { term: "Pickle code execution", definition: "loads() invokes callables embedded in the stream - untrusted pickles are RCE." },
              { term: "ctypes.Structure", definition: "C-layout struct definition for binary interoperability." },
              { term: "CDLL", definition: "Loaded shared library - C functions callable from Python." },
              { term: "Serializer contracts", definition: "pickle: trusted objects; ctypes: C layouts; JSON: untrusted text." },
            ],
            codeExample: {
              language: "python",
              caption: "serializers.py - pickle round trip and ctypes struct",
              code: `import pickle, ctypes

# pickle: Python-native object transport (TRUSTED endpoints only)
data = {"cfg": [1, 2, 3], "name": "probe"}
blob = pickle.dumps(data)
back = pickle.loads(blob)
print(back)                     # {'cfg': [1, 2, 3], 'name': 'probe'}

# ctypes: C-layout struct + native call
class Point(ctypes.Structure):
    _fields_ = [("x", ctypes.c_int), ("y", ctypes.c_int)]

p = Point(3, 4)
print(p.x, p.y, ctypes.sizeof(p))   # 3 4 8 (two c_ints)

# libc = ctypes.CDLL("libc.so.6")  # Linux: call into C
# print(libc.atoi(b"42"))          # 42`,
            },
            bullets: [
              "pickle: almost any Python object graph, binary, Python-version-sensitive.",
              "loads() executes embedded callables - untrusted pickles are code execution.",
              "Rule: pickle only between trusted endpoints; JSON for untrusted text.",
              "ctypes.Structure matches C memory layout; CDLL calls native functions.",
              "Higher pickle protocols are faster but Python-version-sensitive.",
              "Three contracts: pickle (trusted objects), ctypes (C), JSON (untrusted).",
            ],
            diagram: {
              kind: "fork",
              title: "Which serializer for which channel?",
              caption: "The trust boundary decides - not preference.",
              start: "Data crossing a boundary",
              branches: [
                { label: "Between your own processes", outcome: "pickle - full Python objects, fast, safe inside the trust domain", good: true },
                { label: "From the internet or strangers", outcome: "JSON/inert text - pickle here is arbitrary code execution", good: true },
                { label: "Into or out of C code", outcome: "ctypes - explicit C layouts and native calls", good: true },
                { label: "Untrusted pickle.load", outcome: "remote code execution by design - never", good: false },
              ],
            },
            callout: {
              type: "warning",
              title: "pickle.load is code execution",
              body: "The signature security sentence: 'pickle.loads does not parse - it executes; the stream contains opcodes that invoke callables, so a crafted pickle runs arbitrary code'. The defence is a trust rule, not a flag: pickle only between your own processes; anything touching untrusted input is JSON. This is the unit's most-asked security point.",
            },
            examQuestions: [
              {
                q: "Explain pickle and ctypes as Python's serialization tools: a pickle round trip, the code-execution risk and the trusted-endpoints rule, and a ctypes.Structure/CDLL example showing C interoperability.",
                marks: 14,
                outline: [
                  "pickle.dumps/loads round trip on a dict",
                  "Stream contains reduce opcodes invoking callables",
                  "Untrusted pickle = arbitrary code execution",
                  "Rule: pickle only between trusted processes; JSON for untrusted",
                  "ctypes.Structure with _fields_ - C-compatible layout",
                  "CDLL loads shared libraries; native calls demonstrated",
                  "Three contracts: pickle/ctypes/JSON by trust and layout",
                ],
              },
              {
                q: "Why is pickle faster and richer than JSON but unsuitable for public APIs?",
                marks: 7,
                outline: [
                  "Binary protocol, full Python object graph",
                  "Cost: code execution on load and Python-version coupling",
                  "Public APIs need inert, language-neutral formats",
                ],
              },
            ],
          },
          {
            number: "4.3",
            title: "Multiprocessing - process objects and pipes",
            body: [
              "The multiprocessing module is Python's answer to the GIL: Process(target=f, args=...) spawns real OS processes with private memory and true CPU parallelism. The API mirrors threading deliberately - start()/join(), daemon flag, name - so Unit III's lifecycle knowledge transfers; the differences are the payload: arguments are pickled across the spawn boundary (everything passed must be picklable), state is private, and coordination needs the unit's channels.",
              "A worked parallel computation fixes the pattern: def crunch(n): return sum(i * i for i in range(n)); procs = [Process(target=worker, args=(chunk,)) for chunk in chunks]; start/join each. The pipe variant connects pairs: parent_conn, child_conn = Pipe(); child sends results through child_conn; parent receives from parent_conn - a duplex channel for two related processes. The spawn-method note is operational: on Windows and macOS the default start method re-imports the module (spawn), so the __name__ == '__main__' guard is mandatory - the most common student runtime error.",
              "The design reasoning completes the section: process objects are for long-lived workers (services, watchers); pipes for point-to-point results; pools (next section) for fan-out compute; and the pickling constraint shapes data contracts (plain types, no sockets/locks in args). The exam's 'multiprocessing vs threading' contrast rides on Unit III's GIL table: same API shape, opposite sharing model, different workload.",
              "Exam framing: expect 'explain multiprocessing.Process with a worked example' and 'why must the main guard be used'. Write the spawn/join example and the pipe pair; state the pickling constraint and the spawn-method reason. The __main__-guard explanation is the operational mark.",
            ],
            keyTerms: [
              { term: "multiprocessing.Process", definition: "OS process object - start/join lifecycle, private memory, true parallelism." },
              { term: "Pickling boundary", definition: "Arguments/results cross processes serialized - must be picklable." },
              { term: "Pipe", definition: "Duplex channel between two related processes (parent_conn/child_conn)." },
              { term: "Spawn method", definition: "Child re-imports the module - the __main__ guard is mandatory." },
              { term: "GIL bypass", definition: "Processes run on separate cores - the CPU-bound answer." },
            ],
            codeExample: {
              language: "python",
              caption: "procs.py - process objects and a pipe",
              code: `import multiprocessing as mp

def worker(n, conn):
    total = sum(i * i for i in range(n))
    conn.send(total)                # result through the pipe
    conn.close()

def crunch(n):                      # picklable arg, picklable return
    return sum(i * i for i in range(n))

if __name__ == "__main__":          # REQUIRED under spawn
    # pattern 1: fire and join
    p = mp.Process(target=crunch, args=(1_000_000,))
    p.start(); p.join()

    # pattern 2: pipe back the result
    parent, child = mp.Pipe()
    q = mp.Process(target=worker, args=(1_000_000, child))
    q.start()
    print(parent.recv())            # the computed total
    q.join()`,
            },
            bullets: [
              "Process(target, args): start/join like Thread, but a real OS process.",
              "Args and results cross by pickling - keep them plain and picklable.",
              "Pipe(): duplex channel; parent/child endpoints send/recv.",
              "Spawn start method re-imports the module - __main__ guard mandatory.",
              "Private memory: no shared-state races, no shared-state convenience.",
              "CPU parallelism without the GIL - the workload table's winner.",
            ],
            diagram: {
              kind: "flow",
              title: "A Process call, end to end",
              caption: "The pickle boundary is where threads and processes differ.",
              steps: [
                { label: "Construct Process", note: "target + picklable args" },
                { label: "start()", note: "child process spawned; module re-imported (spawn)" },
                { label: "Pickle boundary", note: "args serialized into the child" },
                { label: "Child runs", note: "private memory, own interpreter" },
                { label: "join()", note: "parent waits; results via pipe/queue" },
              ],
            },
            callout: {
              type: "warning",
              title: "The __main__ guard is not decoration",
              body: "Under the spawn start method (Windows/macOS default), each child re-imports the main module - without 'if __name__ == \"__main__\":' the child re-executes process creation and forks recursively until the runtime kills it. The guard is the single most common multiprocessing crash; explain it in every Process answer.",
            },
            examQuestions: [
              {
                q: "Explain multiprocessing.Process: the lifecycle, the pickling boundary, a worked parallel example with a Pipe returning results, and why the __main__ guard is mandatory under spawn.",
                marks: 14,
                outline: [
                  "Process(target, args) -> start() -> join()",
                  "Private memory: true parallelism, no GIL serialization",
                  "Args/results pickled across the spawn boundary",
                  "Pipe(): parent/child endpoints; child sends the total",
                  "parent.recv() retrieves the child's result",
                  "Spawn re-imports the module - guard prevents recursive forks",
                  "Design: plain picklable data contracts",
                ],
              },
              {
                q: "What kinds of objects cannot cross a multiprocessing boundary?",
                marks: 7,
                outline: [
                  "Sockets, locks, open files - OS handles are not picklable",
                  "Lambdas/closures defined locally lack a module path",
                  "Keep contracts to plain data types",
                ],
              },
            ],
          },
          {
            number: "4.4",
            title: "Queues and shared memory in multiprocessing",
            body: [
              "Two coordination styles live in multiprocessing: message channels (Queue, Pipe) and shared memory (Value, Array, RawArray). multiprocessing.Queue is Unit III's queue with a pickling boundary: producers put, consumers get, tasks are distributed fan-out style - the workhorse for process pools of workers. Shared memory shares raw storage across processes without copying: Value('i', 0) for a single typed value, Array('i', n) for typed arrays, mmap for file-backed regions - fast, but synchronization is manual (Lock via the value's get_lock or an explicit Lock).",
              "A worked fan-out fixes the Queue pattern: def worker(q): while True: item = q.get(); result = compute(item); out.put(result); with N workers reading one in-queue and writing one out-queue - Unit III's producer-consumer with processes and pickling. A worked shared counter: counter = mp.Value('i', 0); def bump(n): for _ in range(n): with counter.get_lock(): counter.value += 1; N processes -> exactly the sum (the lock survives the process boundary). The two patterns' contrast: Queue moves work (serialization per item); shared memory moves data (zero-copy, manual locks).",
              "The chooser is the section's deliverable: Queue for work distribution with plain-Python payloads; shared memory for hot numeric data (image buffers, arrays) where serialization dominates cost; Pipe for point-to-point; Pool (next section) when tasks are independent function calls. The failure modes to name: Queue on huge items pays pickle tax per item (chunk or share instead); shared memory without locks re-creates Unit III's race across processes; and daemon processes need explicit shutdown of their queues.",
              "Exam framing: expect 'multiprocessing.Queue vs Value/Array' and 'demonstrate a shared counter across processes'. Write both patterns; state the chooser with the pickle-tax and race failure modes. The get_lock demonstration is the practical mark.",
            ],
            keyTerms: [
              { term: "multiprocessing.Queue", definition: "Pickling process-safe queue - fan-out/fan-in work distribution." },
              { term: "mp.Value / mp.Array", definition: "Typed shared-memory cells/arrays across processes." },
              { term: "get_lock", definition: "The lock attached to shared values - required for read-modify-write." },
              { term: "Pickle tax", definition: "Per-item serialization cost - the Queue pattern's hidden bill." },
              { term: "Zero-copy sharing", definition: "Shared memory's advantage - no serialization on the hot path." },
            ],
            codeExample: {
              language: "python",
              caption: "shared.py - queue fan-out and a locked shared counter",
              code: `import multiprocessing as mp

def bump(n, counter):
    for _ in range(n):
        with counter.get_lock():    # manual sync - required
            counter.value += 1

def worker(q, out):
    while True:
        item = q.get()
        if item is None:            # sentinel
            return
        out.put(item * item)

if __name__ == "__main__":
    counter = mp.Value("i", 0)
    ps = [mp.Process(target=bump, args=(100_000, counter))
          for _ in range(4)]
    for p in ps: p.start()
    for p in ps: p.join()
    print(counter.value)            # 400000 exactly

    q, out = mp.Queue(), mp.Queue()
    ws = [mp.Process(target=worker, args=(q, out)) for _ in range(2)]
    for w in ws: w.start()
    for i in range(5): q.put(i)
    q.put(None); q.put(None)        # one sentinel per worker
    print([out.get() for _ in range(5)])
    for w in ws: w.join()`,
            },
            bullets: [
              "Queue: work distribution with pickling; fan-out/fan-in shape.",
              "Value/Array: zero-copy shared storage with manual locks.",
              "get_lock() guards read-modify-write across processes.",
              "Shared counter demo: 4 processes x 100,000 -> exact total.",
              "Pickle tax: huge items should be chunked or shared, not queued.",
              "Sentinels and joins close the queue patterns cleanly.",
            ],
            diagram: {
              kind: "compare",
              title: "Move the work or share the data",
              caption: "Queue and shared memory are the two coordination shapes.",
              left: {
                heading: "multiprocessing.Queue",
                items: [
                  "Pickles every item - copy per hop",
                  "Plain-Python payloads only",
                  "Natural fan-out and backpressure",
                  "Simplest correct-by-construction path",
                ],
              },
              right: {
                heading: "Value / Array (shared memory)",
                items: [
                  "Zero-copy - no serialization",
                  "Numeric/typed data only",
                  "Manual locks (get_lock) required",
                  "Fastest for hot large buffers",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "The pickle tax decides",
              body: "The chooser sentence: 'Queue pays a pickle per item - fine for small work items, fatal for megabyte buffers; shared memory pays a lock per access - fine for numeric hot paths'. Then the demo pair (locked counter exact, queue fan-out clean) shows both styles working - that contrast is the section's full answer.",
            },
            examQuestions: [
              {
                q: "Compare multiprocessing.Queue with Value/Array shared memory: mechanisms, costs, and a worked demonstration of each (fan-out workers and a locked shared counter).",
                marks: 14,
                outline: [
                  "Queue: pickling process-safe channel; fan-out work",
                  "Worker loop: get, compute, out.put; sentinels to stop",
                  "Value('i', 0): typed shared cell across processes",
                  "get_lock(): required for counter read-modify-write",
                  "Demo: 4 processes x 100,000 increments -> exact total",
                  "Pickle tax on large items vs zero-copy sharing",
                  "Failure modes: serialization overhead vs unsynchronized races",
                ],
              },
              {
                q: "When does shared memory beat a Queue, and what discipline does it demand?",
                marks: 7,
                outline: [
                  "Hot, large, numeric data - serialization dominates otherwise",
                  "Demands explicit locks around every read-modify-write",
                  "Consequently best for buffers, not message streams",
                ],
              },
            ],
          },
          {
            number: "4.5",
            title: "Process pools",
            body: [
              "ProcessPoolExecutor (concurrent.futures) and multiprocessing.Pool are the syllabus's fan-out abstraction: spawn a fixed pool of workers once, submit many independent function calls, collect futures/results. The API: with ProcessPoolExecutor(max_workers=4) as ex: fut = ex.submit(fn, arg); fut.result() blocks for the value; ex.map(fn, iterable) yields results in order; as_completed(futures) yields out of order as they finish. The pool owns worker lifecycle - you submit work, not processes.",
              "A worked parallel map pins the pattern: with ProcessPoolExecutor() as ex: results = list(ex.map(crunch, chunks)) - N chunks computed on all cores, results in input order. The exception behaviour is the exam's operational detail: exceptions in workers are pickled back and re-raised at fut.result() - the caller's stack shows the failure; crashes that kill the worker (segfaults) break the pool and raise BrokenProcessPool. The GIL-table tie-in: pools are the CPU-bound answer - the same map on threads gains nothing on pure Python loops.",
              "The design reasoning: pools amortize process startup (spawn is expensive - one pool, many tasks), map respects ordering while as_completed respects time, and chunking (map's chunksize) amortizes per-task overhead for many tiny items. Choosing pool size: match CPU cores for CPU-bound work; ThreadPoolExecutor is the same API for I/O-bound work (threads + GIL-release) - one interface, two executors, chosen by the workload's blocking profile (Unit III's principle).",
              "Exam framing: expect 'explain ProcessPoolExecutor/Pool with a worked parallel map' and 'submit vs map vs as_completed'. Write the map example; state the exception-reraise and BrokenProcessPool behaviours, the chunksize point, and the executor-choice rule. The future/exception mechanics are the operational marks.",
            ],
            keyTerms: [
              { term: "ProcessPoolExecutor", definition: "Fixed worker pool; submit/map/as_completed return futures." },
              { term: "Future", definition: "Handle to a pending result - .result() blocks; exceptions re-raised there." },
              { term: "BrokenProcessPool", definition: "Raised when a worker dies hard (segfault) - the pool is unusable." },
              { term: "chunksize", definition: "Tasks per worker per fetch - amortizes overhead for tiny items." },
              { term: "Executor choice", definition: "ProcessPool for CPU-bound; ThreadPoolExecutor for I/O-bound - same API." },
            ],
            codeExample: {
              language: "python",
              caption: "pool.py - parallel map and out-of-order completion",
              code: `from concurrent.futures import ProcessPoolExecutor, as_completed

def crunch(n):                     # must be a module-level function
    return sum(i * i for i in range(n))

if __name__ == "__main__":
    chunks = [2_000_000] * 4

    # ordered map: results match input order
    with ProcessPoolExecutor(max_workers=4) as ex:
        for res in ex.map(crunch, chunks):
            print(res)

    # out-of-order completion: as each finishes
    with ProcessPoolExecutor(max_workers=4) as ex:
        futs = {ex.submit(crunch, n): n for n in chunks}
        for fut in as_completed(futs):
            print(futs[fut], "->", fut.result())  # re-raises worker errors`,
            },
            bullets: [
              "Pool owns workers; submit/map/as_completed own tasks.",
              "ex.map: results in input order; as_completed: in finish order.",
              "Worker exceptions re-raised at fut.result() in the caller.",
              "Hard crashes raise BrokenProcessPool - the pool must be rebuilt.",
              "chunksize amortizes per-task overhead for tiny work items.",
              "Same API as ThreadPoolExecutor - choose by blocking profile.",
            ],
            diagram: {
              kind: "pipeline",
              title: "A pool executing a parallel map",
              caption: "Submit once, workers chew, results stream back.",
              stages: [
                { label: "Build pool", note: "max_workers processes spawned once" },
                { label: "Submit tasks", note: "picklable fn + args cross over" },
                { label: "Workers chew", note: "independent tasks on all cores" },
                { label: "Futures resolve", note: "results pickled back, exceptions re-raised" },
                { label: "Shutdown", note: "context exit joins all workers" },
              ],
            },
            callout: {
              type: "tip",
              title: "Same API, two executors",
              body: "The design sentence examiners reward: 'concurrent.futures gives one interface with two executors - ProcessPoolExecutor for CPU-bound (true parallelism) and ThreadPoolExecutor for I/O-bound (GIL released on waits); the choice is the workload's blocking profile, not the API'. Write the map example once, name both executors, and the answer covers the whole pool question.",
            },
            examQuestions: [
              {
                q: "Explain process pools with ProcessPoolExecutor: submit/map/as_completed semantics, a worked parallel map, future exception behaviour, chunksize, and the executor-choice rule.",
                marks: 14,
                outline: [
                  "Pool spawns workers once; tasks are submitted to it",
                  "ex.map: ordered results over an iterable",
                  "as_completed: results in finish order",
                  "Worker exceptions re-raised at fut.result()",
                  "Segfaults raise BrokenProcessPool - pool unusable",
                  "chunksize amortizes overhead on tiny tasks",
                  "ProcessPool for CPU-bound; ThreadPool for I/O-bound - same API",
                ],
              },
              {
                q: "Why must pooled functions be module-level rather than lambdas?",
                marks: 7,
                outline: [
                  "Args/functions cross the boundary by pickling",
                  "Lambdas lack an importable module path",
                  "Module-level names pickle by reference and re-import cleanly",
                ],
              },
            ],
          },
          {
            number: "4.6",
            title: "Distributed computing concepts - actors, REST and RPC",
            body: [
              "Distributed computing extends the unit's message-passing across machines: the same channel shapes, worse latency, new failure modes (partition, partial failure). The syllabus's concept set: actors (concurrent units with private state communicating only by messages - the pure message-passing model), client/server (request/response roles), REST (resources addressed by URLs, manipulated by HTTP verbs, stateless - the web's architecture style), and RPC (calling a remote function as if local - the transport-level style XML-RPC and gRPC implement).",
              "A worked conceptual mapping ties the unit together: a multiprocessing.Queue producer-consumer pair becomes an actor system when each worker is a stateful unit with an inbox; the Unit II JSON service is REST (GET/POST on /items resources, stateless handlers); the xmlrpc.client ServerProxy of Unit I is RPC (proxy.add(2, 3) hides the wire); a distributed objects system goes further and marshals object references across the wire (the syllabus's 'distributed objects' - implemented in Python via Pyro or multiprocessing managers).",
              "The failure-mode paragraph is the section's differentiator: local calls fail loudly (exception, process crash); remote calls fail ambiguously (timeout - did it happen?). Distributed systems therefore add idempotency (safe retries), timeouts everywhere, and acknowledgment protocols. REST's statelessness is a deliberate answer: keep no session on the server, so any node can serve any request and horizontal scaling is trivial - the design reasoning examiners want behind the acronym.",
              "Exam framing: expect 'explain actor model / REST / RPC' and 'map Python mechanisms onto distributed concepts'. Give the mapping table, the failure-ambiguity paragraph, and REST's statelessness reasoning. The 'remote calls fail ambiguously' sentence is the conceptual mark.",
            ],
            keyTerms: [
              { term: "Actor model", definition: "Stateful concurrent units with inboxes - communication only by messages." },
              { term: "REST", definition: "Resource-oriented HTTP architecture - verbs on URLs, stateless servers." },
              { term: "RPC", definition: "Remote procedure call - remote function invoked like a local one." },
              { term: "Distributed objects", definition: "Object references marshalled across the wire (Pyro, managers)." },
              { term: "Partial failure", definition: "Remote calls fail ambiguously - timeouts cannot say 'happened' vs 'not'." },
            ],
            table: {
              caption: "Python mechanisms mapped to distributed concepts.",
              headers: ["Concept", "Local shape", "Distributed shape"],
              rows: [
                ["Message passing", "multiprocessing.Queue/Pipe", "actor inboxes, message brokers"],
                ["Client/server", "socketserver handler", "HTTP service endpoints"],
                ["REST", "Unit II's JSON handlers", "URL resources + HTTP verbs, stateless"],
                ["RPC", "local function call", "xmlrpc.client ServerProxy, gRPC"],
                ["Distributed objects", "shared objects in one process", "Pyro/managers - remote object references"],
              ],
            },
            bullets: [
              "Actors: private state + inbox - the message-passing extreme.",
              "REST: verbs on resources, stateless - horizontal scaling by design.",
              "RPC: local-call illusion over the wire - XML-RPC is Python's named example.",
              "Distributed objects: references marshalled across machines.",
              "Remote failures are ambiguous - timeouts demand idempotency.",
              "Same channel shapes as the unit's local halves, worse latency.",
            ],
            diagram: {
              kind: "layers",
              title: "The distributed-abstraction ladder",
              caption: "Each rung hides more of the wire than the one below.",
              layers: [
                { label: "Distributed objects", note: "remote object references (Pyro, managers)" },
                { label: "RPC", note: "remote calls as local calls (XML-RPC, gRPC)" },
                { label: "REST", note: "HTTP verbs on stateless resources" },
                { label: "Sockets/queues", note: "raw channels - the unit's local base" },
              ],
            },
            callout: {
              type: "exam",
              title: "Remote calls fail ambiguously",
              body: "The conceptual sentence that lifts distributed answers: 'a local call either ran or raised; a remote call can time out without saying whether it ran - so distributed designs add timeouts, idempotency and acknowledgments'. Attach REST's statelessness as the scaling corollary and the concept question is complete.",
            },
            examQuestions: [
              {
                q: "Explain the actor model, client/server, REST and RPC as distributed-computing concepts, mapping each to a Python mechanism from this unit, and state the partial-failure problem.",
                marks: 14,
                outline: [
                  "Actors: stateful units with inboxes - Queue workers as the local shape",
                  "Client/server: request roles - socketserver as the local shape",
                  "REST: resources + HTTP verbs, stateless - Unit II's JSON service",
                  "RPC: local-call illusion - xmlrpc.client ServerProxy",
                  "Distributed objects: references over the wire (Pyro/managers)",
                  "Partial failure: timeouts cannot confirm execution",
                  "Consequences: idempotency, acknowledgment protocols",
                ],
              },
              {
                q: "Why is REST's statelessness a scaling feature rather than a limitation?",
                marks: 7,
                outline: [
                  "Any node can serve any request - no session affinity",
                  "Horizontal scaling is trivial behind a load balancer",
                  "State lives in the client or a shared store",
                ],
              },
            ],
          },
          {
            number: "4.7",
            title: "XML-RPC and distributed objects in Python",
            body: [
              "The syllabus's concrete distributed pair: XML-RPC (xmlrpc.server + xmlrpc.client) and multiprocessing's manager-based distributed objects. XML-RPC: the server registers functions (SimpleXMLRPCServer.register_function), the client's ServerProxy invokes them as local calls - request/response encoded in XML over HTTP, values constrained to the XML-RPC type set (int, string, bool, double, datetime, array, struct). The syllabus's 'use of the multiprocessing library to implement distributed objects' is BaseManager: register a class, serve it, connect from another machine, and manipulate the remote object through a proxy.",
              "A worked XML-RPC pair fixes the pattern: server - with SimpleXMLRPCServer(('localhost', 8000)) as s: s.register_function(lambda a, b: a + b, 'add'); s.serve_forever(); client - proxy = ServerProxy('http://localhost:8000'); print(proxy.add(2, 3)) -> 5. The manager variant: class MyList(list): pass; BaseManager.register('MyList', MyList); mgr = BaseManager(address=('/tmp/x.sock')); mgr.serve... client connects and mgr.MyList() returns a Proxy whose method calls marshal across the wire - a shared object, not a copy.",
              "The security and design notes complete the section: XML-RPC carries the Unit II XML caveats (parse cost, entity handling - stdlib is hardened) and the trust model of any RPC (authenticate endpoints, validate arguments - a public XML-RPC endpoint is an open door); the historical note is that the syllabus's 'urllib2/XML-RPC' pairing reflects Python 2-era naming, with Python 3's xmlrpc package the current form. Managers trade convenience for latency (every attribute access is a round trip) - share coarse objects, not hot loops.",
              "Exam framing: expect 'write an XML-RPC server and client' and 'explain distributed objects via multiprocessing managers'. Write both snippets; state the type constraints, the proxy round-trip cost, and the trust/authentication requirement. The proxy-is-a-round-trip warning is the practical mark.",
            ],
            keyTerms: [
              { term: "SimpleXMLRPCServer", definition: "Registers Python functions exposed as XML-RPC methods." },
              { term: "ServerProxy", definition: "Client-side object proxying attribute access into remote calls." },
              { term: "XML-RPC type set", definition: "int, string, bool, double, datetime, array, struct - nothing else crosses." },
              { term: "BaseManager", definition: "Multiprocessing manager serving registered classes as remote proxies." },
              { term: "Proxy round trip", definition: "Every remote-object operation is a network call - share coarse objects." },
            ],
            codeExample: {
              language: "python",
              caption: "xmlrpc_pair.py - server registers, client calls",
              code: `# ---- server: rpc_server.py ----
from xmlrpc.server import SimpleXMLRPCServer

def add(a, b):
    return a + b

def stats(items):
    return {"count": len(items), "sum": sum(items)}

with SimpleXMLRPCServer(("localhost", 8000)) as srv:
    srv.register_function(add, "add")
    srv.register_function(stats, "stats")
    srv.serve_forever()

# ---- client: rpc_client.py ----
from xmlrpc.client import ServerProxy
proxy = ServerProxy("http://localhost:8000")
print(proxy.add(2, 3))                    # 5
print(proxy.stats([1, 2, 3, 4]))          # {'count': 4, 'sum': 10}`,
            },
            bullets: [
              "Server: SimpleXMLRPCServer + register_function + serve_forever.",
              "Client: ServerProxy - remote methods as attribute calls.",
              "Type set: int/str/bool/float/datetime/array/struct only.",
              "BaseManager.register: remote objects via proxies (distributed objects).",
              "Every proxy operation is a round trip - share coarse objects.",
              "Trust model: authenticate endpoints, validate arguments.",
            ],
            diagram: {
              kind: "flow",
              title: "One XML-RPC call, decoded",
              caption: "The local-call illusion, layer by layer.",
              steps: [
                { label: "proxy.add(2, 3)", note: "attribute access on the proxy" },
                { label: "Encode", note: "methodName + params -> XML envelope" },
                { label: "HTTP POST", note: "to the server's endpoint" },
                { label: "Server invokes", note: "registered function with decoded args" },
                { label: "Decode", note: "response XML -> Python value returned" },
              ],
            },
            callout: {
              type: "warning",
              title: "A public XML-RPC endpoint is an open door",
              body: "The security branch's rule: RPC servers execute registered functions for whoever reaches them - an unauthenticated XML-RPC endpoint on a public interface is remote code execution by invitation. Bind to localhost, add authentication, validate every argument. The same trust reasoning applies to BaseManager sockets - state it in every RPC answer.",
            },
            examQuestions: [
              {
                q: "Write an XML-RPC server and client pair and explain the encoding flow. Describe multiprocessing managers as distributed objects, with the proxy round-trip cost and the trust requirements.",
                marks: 14,
                outline: [
                  "Server: SimpleXMLRPCServer, register_function, serve_forever",
                  "Client: ServerProxy - proxy.add(2, 3) as a local-looking call",
                  "Flow: encode XML -> HTTP POST -> invoke -> decode",
                  "Type set: int/str/bool/float/datetime/array/struct",
                  "BaseManager.register + connect - remote object proxies",
                  "Every proxy op is a round trip - coarse-grained sharing",
                  "Security: authenticate, validate, bind localhost",
                ],
              },
              {
                q: "Why should shared remote objects be coarse-grained rather than fine-grained?",
                marks: 7,
                outline: [
                  "Each attribute access/method call is a network round trip",
                  "Fine-grained loops multiply latency catastrophically",
                  "Coarse operations amortize the wire cost",
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
      title: "Advanced I/O Handling and Generators/Coroutines",
      summary:
        "Unit V completes the concurrency story: the I/O models - blocking, non-blocking, polling, signal-driven and asynchronous - then the cooperative machinery: generators, yield-based coroutines with send/throw/close, asyncio's async/await, and the tasklet/greenlet cooperative-multitasking landscape.",
      chapter: {
        number: "05",
        title: "I/O Models and Cooperative Multitasking",
        intro:
          "Unit V covers blocking, non-blocking, polling, signal-driven and asynchronous I/O; generators and coroutines; cooperative multitasking with tasklets, greenlets and asyncio.",
        inOneBreath:
          "Blocking I/O parks the thread; non-blocking returns EWOULDBLOCK; polling multiplexes many sockets with select/epoll; signal and async push completion to you. Generators produce lazily; coroutines consume via send(); async/await schedules thousands of tasks on one event loop - cooperative multitasking where tasks yield control explicitly.",
        sections: [
          {
            number: "5.1",
            title: "Blocking and non-blocking I/O",
            body: [
              "The syllabus's I/O models begin with the two base modes. Blocking I/O (the default): the call - recv, read, accept - does not return until it has data (or an error); the thread parks in the kernel. Non-blocking I/O: the socket is set non-blocking (sock.setblocking(False)); calls return immediately with an EWOULDBLOCK/BlockingIOError exception when no data is ready, leaving the caller free to do other work and retry.",
              "A worked contrast pins the behaviour: a blocking recv on an idle socket freezes the thread until bytes arrive - Unit I's server limitation; the same recv on a non-blocking socket raises BlockingIOError instantly, and the application loops: try recv, on BlockingIOError do other work, retry later. The pattern's cost is visible immediately - busy-looping between attempts burns CPU - which is exactly why polling (next section) exists: ask the OS which sockets are ready, then touch only those. Non-blocking is the enabling mode; polling is its efficient driver.",
              "The design reasoning completes the section: blocking suits one-thread-per-connection models (each thread parked independently - Unit III's choice); non-blocking suits event loops (one thread, many sockets, no parking). The trade table: blocking = simple control flow, expensive concurrency; non-blocking = cheap concurrency, inverted control flow (your code must handle 'not ready' everywhere). Every later model in the unit is a strategy for managing that inversion.",
              "Exam framing: expect 'distinguish blocking and non-blocking I/O with socket examples'. Write both recv variants; state the EWOULDBLOCK/BlockingIOError behaviour and the busy-loop cost. The 'non-blocking enables, polling drives' sentence is the unit's connective mark.",
            ],
            keyTerms: [
              { term: "Blocking I/O", definition: "Calls wait until data is ready - the thread parks in the kernel." },
              { term: "Non-blocking I/O", definition: "setblocking(False); calls return immediately, raising BlockingIOError when not ready." },
              { term: "EWOULDBLOCK", definition: "The C-level 'not ready yet' signal Python exposes as BlockingIOError." },
              { term: "Inverted control flow", definition: "The application must handle 'not ready' at every call - the non-blocking cost." },
              { term: "Busy loop", definition: "Naive non-blocking retries burn CPU - polling is the cure." },
            ],
            table: {
              caption: "Blocking vs non-blocking - the base trade.",
              headers: ["Property", "Blocking", "Non-blocking"],
              rows: [
                ["Idle recv", "thread parks until data", "raises BlockingIOError immediately"],
                ["Control flow", "straight-line, simple", "must handle 'not ready' everywhere"],
                ["Concurrency style", "one thread per connection", "one loop, many sockets"],
                ["Idle cost", "parked thread (cheap per thread)", "busy retries (expensive) unless polled"],
              ],
            },
            bullets: [
              "Blocking: recv waits; the thread parks - simple, expensive at scale.",
              "Non-blocking: setblocking(False); not-ready raises BlockingIOError.",
              "The caller loops: try, on BlockingIOError do other work, retry.",
              "Naive retries busy-loop - polling (next section) drives efficiently.",
              "Blocking suits thread-per-connection; non-blocking suits event loops.",
              "Every I/O model in this unit manages the same inversion differently.",
            ],
            diagram: {
              kind: "compare",
              title: "The same recv call in both modes",
              caption: "One parks the thread; the other hands control back.",
              left: {
                heading: "Blocking recv",
                items: [
                  "No data -> thread sleeps in the kernel",
                  "Returns only when bytes arrive",
                  "Simple control flow",
                  "One thread per connection",
                ],
              },
              right: {
                heading: "Non-blocking recv",
                items: [
                  "No data -> BlockingIOError at once",
                  "Thread keeps working",
                  "Must retry later - inverted flow",
                  "Enablement for event loops",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Non-blocking enables, polling drives",
              body: "The unit's connective sentence: 'non-blocking is the mode - calls never park; polling is the drive - the OS tells you which sockets are ready so you touch only those'. Every later model (poll, signals, async) is a strategy for that pairing; state it in the first model answer and reuse it everywhere.",
            },
            examQuestions: [
              {
                q: "Distinguish blocking and non-blocking I/O with Python socket examples, explain BlockingIOError, and describe the control-flow inversion and its cost.",
                marks: 14,
                outline: [
                  "Blocking: recv parks the thread until data arrives",
                  "Non-blocking: setblocking(False) before I/O",
                  "Not-ready recv raises BlockingIOError (EWOULDBLOCK)",
                  "Application loop: try, do other work, retry",
                  "Naive retry burns CPU - busy loop",
                  "Blocking fits thread-per-connection; non-blocking fits event loops",
                  "Polling (next model) drives the non-blocking mode efficiently",
                ],
              },
              {
                q: "Why is a non-blocking socket alone not a complete concurrency solution?",
                marks: 7,
                outline: [
                  "Retrying blindly busy-loops the CPU",
                  "The app needs to know WHEN sockets are ready",
                  "Polling/epoll supplies that knowledge",
                ],
              },
            ],
          },
          {
            number: "5.2",
            title: "Polling - select, poll and epoll",
            body: [
              "Polling is the efficient driver of non-blocking I/O: ask the kernel which of many sockets are ready, then operate only on those. Python's select module exposes the ladder: select.select(rlist, wlist, xlist, timeout) - the portable FD_SET-limited classic; select.poll - no FD limit, level-triggered flags; select.epoll (Linux) and select.kqueue (BSD/macOS) - scalable, event-notifying. The module also bundles selectors (the modern unified API) which picks the best implementation per platform.",
              "A worked select loop is the exam's canonical answer: inputs = [server] + clients; readable, _, _ = select.select(inputs, [], []); for s in readable: if s is server: accept a new client; else: data = s.recv(1024) or close-on-empty. One thread now serves hundreds of connections - the C10K model of Unit III's table, realized. The epoll upgrade: epoll.register(fd, select.EPOLLIN); events = epoll.poll(); O(ready) instead of O(all-fds) per call - the scalability reason nginx and asyncio use it.",
              "The model's cost is the inverted control flow: state must live in data structures (per-connection buffers, stages), since no thread parks per connection; a blocking call anywhere in the loop freezes every client - the event-loop discipline. The timeout parameter converts pure polling into timed waits (block until ready or timeout), which is how event loops sleep efficiently instead of spinning.",
              "Exam framing: expect 'explain select/poll/epoll with a select-based echo server'. Write the select loop; state the O(n)-vs-O(ready) scalability point and the level-vs-edge trigger nuance; close with the no-blocking-calls discipline. The timeouts-as-sleep sentence is the practical mark.",
            ],
            keyTerms: [
              { term: "select.select", definition: "Portable readiness poll over fd lists with a timeout." },
              { term: "poll / epoll", definition: "Scalable readiness APIs - epoll notifies only ready fds (O(ready))." },
              { term: "selectors module", definition: "Modern unified API choosing the best per-platform implementation." },
              { term: "Level vs edge trigger", definition: "Report-while-ready vs report-on-change - the epoll nuance." },
              { term: "Event-loop discipline", definition: "No blocking calls inside the loop - one stall freezes every client." },
            ],
            codeExample: {
              language: "python",
              caption: "select_server.py - one thread, many clients",
              code: `import socket, select

server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server.setblocking(False)                 # non-blocking mode
server.bind(("127.0.0.1", 5000))
server.listen(100)
clients = {}

while True:
    readable, _, _ = select.select(
        [server] + list(clients), [], [], timeout=1.0)
    for s in readable:
        if s is server:
            conn, addr = server.accept()  # new client
            conn.setblocking(False)
            clients[conn] = b""
        else:
            try:
                data = s.recv(1024)
            except ConnectionError:
                data = b""
            if data:
                clients[s] += data        # buffer partial reads
                s.sendall(data)           # echo
            else:
                clients.pop(s, None)      # closed
                s.close()
    # one thread just served every connected client`,
            },
            bullets: [
              "select: portable poll over fd lists with timeout.",
              "poll/epoll: scalable - epoll reports only ready fds.",
              "selectors: the modern unified wrapper API.",
              "Worked loop: accept new clients, buffer partial reads, echo ready ones.",
              "No blocking calls inside the loop - one stall freezes everyone.",
              "Timeout makes the loop sleep efficiently - not a busy spin.",
            ],
            diagram: {
              kind: "flow",
              title: "One tick of an event loop",
              caption: "Poll, dispatch, process, repeat - the C10K pattern.",
              steps: [
                { label: "Poll", note: "select/epoll: which fds are ready?" },
                { label: "Dispatch", note: "accept new connections; wake handlers" },
                { label: "Process", note: "read/write only ready sockets" },
                { label: "Buffer", note: "partial reads stored per connection" },
                { label: "Sleep", note: "timeout waits for the next readiness" },
              ],
            },
            callout: {
              type: "exam",
              title: "O(n) versus O(ready)",
              body: "The scalability sentence: 'select scans every registered fd per call - O(n); epoll returns only the ready ones - O(ready), which is why it serves tens of thousands of connections'. Then the discipline corollary: 'any blocking call in the loop stalls all clients'. Both sentences together are the polling answer's spine.",
            },
            examQuestions: [
              {
                q: "Explain the polling I/O model with select: a worked single-threaded echo server, the poll/epoll scalability difference, and the event-loop discipline.",
                marks: 14,
                outline: [
                  "select.select(rlist, wlist, xlist, timeout)",
                  "Worked loop: accept new clients, recv ready ones, echo",
                  "Non-blocking sockets are the enabling mode",
                  "poll/epoll: no fd limits; epoll O(ready) vs select O(n)",
                  "selectors module as the unified modern API",
                  "No blocking calls in the loop - one stall freezes all",
                  "Timeout = efficient sleep, not busy spin",
                ],
              },
              {
                q: "Why does epoll scale better than select for thousands of connections?",
                marks: 7,
                outline: [
                  "select copies and scans every fd each call",
                  "epoll registers interest once and reports ready events",
                  "Cost tracks activity, not population",
                ],
              },
            ],
          },
          {
            number: "5.3",
            title: "Signal-driven and asynchronous I/O",
            body: [
              "The syllabus's last two I/O models push completion toward the application instead of asking repeatedly. Signal-driven I/O (POSIX SIGIO): register the socket for signal notification; the kernel raises SIGIO when data arrives; the handler wakes your code to read - no polling loop, though Python's support is thin (signal module + fcntl flags) and Unix-only. Asynchronous I/O: the request is submitted and the completion event arrives later - overlap I/O with computation entirely.",
              "A worked signal sketch fixes the concept: set the socket owner and O_ASYNC flags (fcntl.F_SETOWN, FASYNC), register signal.signal(signal.SIGIO, handler), and in the handler read the ready socket. The pedagogical point: the kernel now initiates the wake-up - the application moved from 'ask repeatedly' (polling) to 'be told' (signal). Limitations to state: signal handlers run as interrupts with reentrancy hazards, signals carry no payload (which fd? - the handler must discover), and portability is poor - which is why Python's ecosystem standardized on event loops instead.",
              "Python's real async answer is asyncio (next section's machinery, introduced here): async/await coroutines scheduled on an event loop that itself uses epoll/kqueue under the hood - asynchronous I/O in the syllabus's sense, delivered as cooperative tasks rather than kernel signals. The mapping: signal-driven and true kernel-AIO are the POSIX models; asyncio is Python's user-space realization of 'submit work, get notified on completion' - the syllabus's five models map onto one loop.",
              "Exam framing: expect 'explain signal-driven and asynchronous I/O models and their Python support'. Give the SIGIO sketch, its limitations (reentrancy, no payload, portability), and the asyncio mapping. The 'kernel tells you' vs 'you ask the kernel' contrast with polling is the model ladder's capstone sentence.",
            ],
            keyTerms: [
              { term: "Signal-driven I/O", definition: "Kernel raises SIGIO when a socket is ready - no polling loop." },
              { term: "SIGIO", definition: "The POSIX signal; handler must discover which fd fired." },
              { term: "Asynchronous I/O", definition: "Submit now, completion later - I/O overlapped with compute." },
              { term: "Reentrancy hazard", definition: "Signal handlers interrupt arbitrary code - async-signal-safe work only." },
              { term: "asyncio mapping", definition: "User-space event loop (epoll-backed) as Python's practical async model." },
            ],
            table: {
              caption: "The five I/O models on one ladder.",
              headers: ["Model", "Who waits?", "Python support"],
              rows: [
                ["Blocking", "the thread, parked", "default socket/file behaviour"],
                ["Non-blocking", "nobody - immediate error", "setblocking(False)"],
                ["Polling", "the loop, asking", "select/poll/epoll, selectors"],
                ["Signal-driven", "the kernel, telling (SIGIO)", "signal + fcntl - Unix, thin"],
                ["Asynchronous", "submitted, completed later", "asyncio loop over epoll/kqueue"],
              ],
            },
            bullets: [
              "Signal-driven: kernel raises SIGIO; handler wakes the app.",
              "Sketch: F_SETOWN/FASYNC flags + signal.signal(SIGIO, handler).",
              "Limitations: reentrancy, no fd payload, Unix-only, thin Python support.",
              "Asynchronous: submit-and-notify - overlap I/O with compute.",
              "asyncio realizes the async model in user space over epoll.",
              "Ladder: park -> error -> ask -> be told -> submit-and-complete.",
            ],
            diagram: {
              kind: "flow",
              title: "Signal-driven I/O, end to end",
              caption: "From flags to handler to read - the kernel initiates.",
              steps: [
                { label: "Register interest", note: "F_SETOWN + FASYNC on the socket" },
                { label: "Install handler", note: "signal.signal(SIGIO, handler)" },
                { label: "Kernel signals", note: "SIGIO raised when data arrives" },
                { label: "Handler runs", note: "discover fd; do minimal safe work" },
                { label: "App reads", note: "ordinary recv on the ready socket" },
              ],
            },
            callout: {
              type: "tip",
              title: "The ladder is the answer",
              body: "Memorize the five-model ladder and its 'who waits' column - park, error, ask, be told, submit-and-complete. Examiners set 'compare the I/O handling models' regularly; the ladder plus one Python support line per model is a complete, well-organized answer that also previews asyncio correctly.",
            },
            examQuestions: [
              {
                q: "Explain signal-driven and asynchronous I/O models: the SIGIO registration sketch, signal-handler limitations, and how asyncio realizes the asynchronous model in Python.",
                marks: 14,
                outline: [
                  "Signal-driven: kernel raises SIGIO on readiness",
                  "Registration: F_SETOWN/FASYNC + signal handler",
                  "Limitations: reentrancy, no fd payload, portability",
                  "Asynchronous: submit work, completion notified later",
                  "asyncio: user-space loop over epoll/kqueue",
                  "Coroutines scheduled as cooperative tasks (next section)",
                  "Five-model ladder: park, error, ask, told, submit-complete",
                ],
              },
              {
                q: "Why did Python's ecosystem standardize on event loops rather than SIGIO?",
                marks: 7,
                outline: [
                  "Signal handlers are reentrancy-hazardous interrupts",
                  "No payload: the handler must discover the fd",
                  "Event loops port across platforms and compose with coroutines",
                ],
              },
            ],
          },
          {
            number: "5.4",
            title: "Generators",
            body: [
              "A generator is a function containing yield: calling it returns a generator object; each next() runs to the next yield, returns its value, and freezes local state until the next next(). The two consequences are the section's content: lazy evaluation (values computed on demand, infinite sequences become expressible) and state preservation (locals survive between calls - a resumable function). return (or exhaustion) raises StopIteration.",
              "A worked pair fixes the pattern: def countdown(n): while n: yield n; n -= 1; list(countdown(3)) -> [3, 2, 1]; and an infinite generator def naturals(): n = 0; while True: yield n; n += 1 - safe because nothing is computed until asked; itertools.islice(naturals(), 5) takes five. Generator expressions (x*x for x in nums) are the inline form - the lazy cousin of list comprehensions; sum(x*x for x in range(10**7)) never materializes the list.",
              "The pipeline idiom is the section's payload: generators compose - def lines(f): for ln in f: yield ln.strip(); def errors(lines): for ln in lines: if 'ERROR' in ln: yield ln; one pass streams a log file through both stages, memory constant regardless of file size. The same machinery powers Unit II's @contextmanager and Unit IV's pickling of generators-as-iterables, and it is the substrate coroutines build on - the syllabus's 'generators and coroutines' pairing is literal: same keyword, two roles.",
              "Exam framing: expect 'explain generators with yield' and 'write an infinite/pipelined generator'. Write countdown and the log-pipeline; state laziness, state preservation, StopIteration, and the memory-constant point. The 'yield is resumable state' sentence is the conceptual mark.",
            ],
            keyTerms: [
              { term: "yield", definition: "Produces a value and freezes function state until resumed." },
              { term: "Laziness", definition: "Values computed on demand - infinite sequences expressible." },
              { term: "StopIteration", definition: "Raised at exhaustion (return or fall-through)." },
              { term: "Generator expression", definition: "(expr for x in it) - the lazy comprehension form." },
              { term: "Pipeline idiom", definition: "Generators chained stage to stage - constant-memory streams." },
            ],
            codeExample: {
              language: "python",
              caption: "pipeline.py - generators streaming a log",
              code: `def countdown(n):
    while n:
        yield n            # freeze here; resume on next()
        n -= 1

def naturals():            # infinite - safe because lazy
    n = 0
    while True:
        yield n
        n += 1

def lines(fh):             # stage 1: strip
    for ln in fh:
        yield ln.strip()

def errors(seq):           # stage 2: filter
    for ln in seq:
        if "ERROR" in ln:
            yield ln

print(list(countdown(3)))               # [3, 2, 1]
import itertools, io
log = io.StringIO("INFO ok\\nERROR disk\\nINFO net\\nERROR auth\\n")
for ln in errors(lines(log)):           # one pass, constant memory
    print(ln)                           # ERROR disk / ERROR auth`,
            },
            bullets: [
              "yield: return a value AND freeze state - resumable functions.",
              "Laziness: infinite sequences safe until consumed.",
              "Generator expressions: (x*x for x in it) - lazy comprehensions.",
              "StopIteration at exhaustion; for-loops consume transparently.",
              "Pipelines compose: stage functions chained - constant memory.",
              "Same keyword powers @contextmanager and coroutines next.",
            ],
            diagram: {
              kind: "cycle",
              title: "A generator's resume loop",
              caption: "next() runs to the next yield, then freezes again.",
              steps: [
                { label: "Create", note: "call the generator function - nothing runs yet" },
                { label: "next()", note: "run to the first yield" },
                { label: "Yield value", note: "caller receives; state frozen" },
                { label: "next() again", note: "resume after the yield" },
                { label: "Exhaust", note: "return/fall-through raises StopIteration" },
              ],
            },
            callout: {
              type: "tip",
              title: "One keyword, two roles",
              body: "The pairing sentence that organizes the last unit: 'yield in the value role makes generators - resumable producers; yield in the receive role (data = yield) makes coroutines - resumable consumers'. Every exam question in this unit resolves to which role yield is playing; state the distinction explicitly.",
            },
            examQuestions: [
              {
                q: "Explain generators in Python: the yield mechanism, laziness and state preservation, a worked infinite generator and a constant-memory log pipeline, and StopIteration semantics.",
                marks: 14,
                outline: [
                  "Generator function returns a generator object; next() drives it",
                  "yield returns a value and freezes locals",
                  "countdown(3) -> [3, 2, 1] walkthrough",
                  "naturals() infinite - safe because computed on demand",
                  "Generator expressions as lazy comprehensions",
                  "Pipeline: lines -> errors over a stream, constant memory",
                  "Exhaustion raises StopIteration; for consumes transparently",
                ],
              },
              {
                q: "Why does sum(x*x for x in range(10**7)) use less memory than the list-comprehension version?",
                marks: 7,
                outline: [
                  "Generator yields one value at a time",
                  "List comprehension materializes all 10^7 values",
                  "Summation consumes lazily - memory constant",
                ],
              },
            ],
          },
          {
            number: "5.5",
            title: "Coroutines - send, throw and close",
            body: [
              "A coroutine is the consumer role of yield: data = yield expr pauses the coroutine AND hands a value in - caller's .send(value) resumes the coroutine with data set to value. The bootstrap rule: a fresh coroutine must be primed by next() (or send(None)) before the first send with data, because execution starts at the top and pauses at the first yield. gen.throw(exc) raises inside the coroutine at the pause point; gen.close() ends it cleanly (GeneratorExit).",
              "A worked coroutine fixes the pattern: def averager(): total = count = 0; avg = None; while True: x = yield avg; total += x; count += 1; avg = total / count - co = averager(); next(co) primes; co.send(10) -> 10; co.send(20) -> 15; co.send(30) -> 20. The state machine reads: yield as both output (avg) and input (x) - a running accumulator you feed values into. Delegation: yield from iterable chains sub-generators transparently (the pre-async plumbing).",
              "The design payload is the section's point: coroutines are cooperatively scheduled consumers - each send() runs the coroutine to its next yield and returns control; no preemption, no locks (single-threaded by construction). This is exactly the machinery asyncio builds on: await is yield-from with a scheduler behind it - the syllabus's 'coroutines' section is the internals of the next section's async/await. The two-role yield rule (produce vs consume) organizes the whole unit.",
              "Exam framing: expect 'explain coroutines with send() and a worked example' and 'priming, throw, close'. Write the averager with its prime-send sequence; state the two-role yield rule, yield from delegation, and the no-lock concurrency property. The priming rule is the most-asked runtime detail.",
            ],
            keyTerms: [
              { term: "Coroutine", definition: "Consumer role of yield - data = yield receives via send()." },
              { term: "Priming", definition: "First next() (or send(None)) required before sending real data." },
              { term: "gen.throw / gen.close", definition: "Raise an exception at the pause point / end the coroutine with GeneratorExit." },
              { term: "yield from", definition: "Delegate to a sub-generator/awaitable - the async plumbing." },
              { term: "Cooperative scheduling", definition: "Coroutines yield control explicitly - single-threaded, lock-free." },
            ],
            codeExample: {
              language: "python",
              caption: "averager.py - a coroutine you feed values into",
              code: `def averager():
    total = count = 0
    avg = None
    while True:
        x = yield avg          # output AND input at once
        total += x
        count += 1
        avg = total / count

co = averager()
print(next(co))       # None   <- priming: run to the first yield
print(co.send(10))    # 10.0
print(co.send(20))    # 15.0
print(co.send(30))    # 20.0

co.close()            # GeneratorExit raised at the pause point
# gen.throw(ValueError) would raise INSIDE the coroutine instead`,
            },
            bullets: [
              "data = yield expr: yield both returns and receives.",
              "Priming: first next() runs to the pause point before send works.",
              "averager walkthrough: None, 10, 15, 20 via prime + sends.",
              "throw() raises inside the coroutine; close() raises GeneratorExit.",
              "yield from delegates to sub-generators - async's plumbing.",
              "Cooperative by construction: single thread, no locks.",
            ],
            diagram: {
              kind: "flow",
              title: "One send() through the averager",
              caption: "Prime, send, resume, yield - the coroutine handshake.",
              steps: [
                { label: "Prime", note: "next(co): run to 'yield avg'" },
                { label: "send(10)", note: "10 delivered as x; loop resumes" },
                { label: "Compute", note: "total/count/avg updated" },
                { label: "Yield avg", note: "10.0 returned to the caller" },
                { label: "Freeze", note: "state preserved until the next send" },
              ],
            },
            callout: {
              type: "warning",
              title: "Prime before you send",
              body: "The runtime trap examiners set: calling co.send(10) on a fresh coroutine raises TypeError - execution has not reached the first yield yet, so there is nowhere to deliver the value. The priming call next(co) (or send(None)) is mandatory; state it and show it in every coroutine answer.",
            },
            examQuestions: [
              {
                q: "Explain Python coroutines: the data = yield mechanism, priming, a worked averager with send(), the roles of throw() and close(), and yield from delegation.",
                marks: 14,
                outline: [
                  "Coroutine = consumer role of yield",
                  "data = yield expr: receives via send, returns via yield",
                  "Priming: next(co) before the first data send",
                  "Averager: None -> 10.0 -> 15.0 -> 20.0",
                  "throw(): exception raised at the pause point",
                  "close(): GeneratorExit for clean shutdown",
                  "yield from chains sub-generators - the async plumbing",
                ],
              },
              {
                q: "Why are coroutines inherently lock-free for shared state?",
                marks: 7,
                outline: [
                  "They run in one thread, cooperatively",
                  "Only one coroutine executes between yields",
                  "No preemption - so no interleaving races",
                ],
              },
            ],
          },
          {
            number: "5.6",
            title: "async/await and the event loop",
            body: [
              "asyncio is the syllabus's modern cooperative-multitasking machinery: async def defines a coroutine; await suspends it until an awaitable completes; an event loop schedules thousands of coroutines on one thread, multiplexing I/O with epoll/kqueue (section 5.2's model as the engine). The API: asyncio.run(main()) boots the loop; asyncio.gather/collections of tasks run concurrently; asyncio.sleep/streams are the awaitable primitives; Task objects wrap coroutines for scheduling.",
              "A worked concurrent fetcher pins the pattern: async def fetch(url): reader, writer = await asyncio.open_connection(url, 80); writer.write(b'GET / HTTP/1.0\\r\\n\\r\\n'); await writer.drain(); data = await reader.read(); return len(data); async def main(): urls = [...]; results = await asyncio.gather(*(fetch(u) for u in urls)); asyncio.run(main()) - hundreds of fetches concurrent on one thread. The key sentence: await points are the scheduling points - the loop interleaves coroutines exactly at awaits, so code between awaits runs without interruption (the coroutines-are-lock-free property, now operational).",
              "The design discipline completes the section: never block the loop (time.sleep, heavy CPU inside coroutines stall every task - use asyncio.sleep, or run_in_executor for CPU work); CPU parallelism remains the processes' job (Unit IV); and the syllabus's greenlets/tasklets (next section) are the same cooperative idea in different dialects. The syllabus's 'tasklets, greenlets, coroutines' clause is answered by: coroutines = language machinery, asyncio = the stdlib scheduler, greenlets = C-level stack switching (used by gevent), tasklets = Stackless Python's term.",
              "Exam framing: expect 'explain asyncio with a worked concurrent example' and 'what are await points'. Write the gather-fetcher; state the await-point scheduling rule, the no-blocking discipline, and the greenlet/tasklet vocabulary. The 'await points are scheduling points' sentence is the section's core.",
            ],
            keyTerms: [
              { term: "async def / await", definition: "Coroutine definition and suspension on awaitables." },
              { term: "Event loop", definition: "The scheduler multiplexing tasks over epoll-backed readiness." },
              { term: "Task / gather", definition: "Scheduled coroutine handles; gather runs many concurrently." },
              { term: "Await point", definition: "The only place the loop may switch tasks - scheduling granularity." },
              { term: "Never block the loop", definition: "Blocking calls stall every task - use async primitives or executors." },
            ],
            codeExample: {
              language: "python",
              caption: "async_fetch.py - one thread, many connections",
              code: `import asyncio

async def fetch(host):
    reader, writer = await asyncio.open_connection(host, 80)
    writer.write(b"GET / HTTP/1.0\\r\\nHost: %s\\r\\n\\r\\n"
                 % host.encode())
    await writer.drain()
    data = await reader.read(512)
    writer.close()
    await writer.wait_closed()
    return host, len(data)

async def main():
    urls = ["example.com", "www.python.org", "rgpv.ac.in"]
    results = await asyncio.gather(*(fetch(u) for u in urls))
    for host, n in results:
        print(host, n)

asyncio.run(main())     # three fetches concurrent on one thread`,
            },
            bullets: [
              "async def + await: cooperative coroutines on one event loop.",
              "gather/run: boot the loop, run tasks concurrently.",
              "Await points are the only scheduling points - lock-free between them.",
              "Blocking calls stall every task - async primitives or run_in_executor.",
              "The loop's engine is epoll/kqueue - Unit 5.2's model underneath.",
              "CPU-bound work stays with processes (Unit IV).",
            ],
            diagram: {
              kind: "cycle",
              title: "One tick of the asyncio loop",
              caption: "Ready tasks run to their next await; the loop waits for events.",
              steps: [
                { label: "Poll readiness", note: "epoll over registered sockets" },
                { label: "Wake tasks", note: "coroutines awaiting those fds resume" },
                { label: "Run to await", note: "each task runs until its next await" },
                { label: "Schedule", note: "completed awaits queue follow-ups" },
                { label: "Sleep", note: "loop waits for the next event batch" },
              ],
            },
            callout: {
              type: "exam",
              title: "Await points are scheduling points",
              body: "The section's load-bearing sentence: 'the event loop may switch coroutines only at await - so code between awaits is atomic, and blocking calls anywhere else stall every task'. The first half explains why coroutines need no locks; the second explains the cardinal asyncio sin. Both halves belong in every async answer.",
            },
            examQuestions: [
              {
                q: "Explain asyncio's async/await model: coroutine definition, the event loop's role, a worked concurrent fetcher with gather, await points as scheduling points, and the no-blocking discipline.",
                marks: 14,
                outline: [
                  "async def defines coroutines; await suspends on awaitables",
                  "asyncio.run boots the loop; gather runs tasks concurrently",
                  "Worked fetcher: open_connection, drain, read - all awaited",
                  "Await points: the only switch points - atomic between them",
                  "Lock-free concurrency by cooperative construction",
                  "Blocking calls stall the loop - async.sleep or executors",
                  "CPU work remains the processes' job (Unit IV)",
                ],
              },
              {
                q: "Why does time.sleep(1) inside a coroutine stall the whole program?",
                marks: 7,
                outline: [
                  "It blocks the single loop thread",
                  "No task can run until the sleep ends",
                  "asyncio.sleep awaits instead, freeing the loop",
                ],
              },
            ],
          },
          {
            number: "5.7",
            title: "Tasklets, greenlets and cooperative multitasking",
            body: [
              "The syllabus's closing clause names the cooperative-multitasking family: coroutines (yield/await - the language machinery, sections 5.5-5.6), greenlets (C-level stack switching - an entire call stack swapped atomically, the engine inside gevent which patches sockets to be green), and tasklets (Stackless Python's microthreads - the term the syllabus quotes). All three are cooperative: switching happens where the code says so, never by preemption.",
              "A worked greenlet sketch fixes the contrast with generators: from greenlet import greenlet; def jump(): gr2.switch(); print('back in 1'); gr1 = greenlet(jump); gr2 = greenlet(other); gr1.switch() - control jumps between stacks explicitly. The difference from generators: a greenlet suspends an arbitrary call DEPTH (any function in its stack), while a generator pauses only its own frame - stackful vs stackless switching, exactly the vocabulary behind 'tasklets' (Stackless' stackful microthreads) and async/await (stackless, explicit await points).",
              "The comparison table is the section's deliverable: generators/coroutines - stackless, yield-marked, stdlib; async/await - stackless with a scheduler (asyncio), the modern standard; greenlets - stackful, arbitrary-depth switching, gevent's engine; tasklets - stackful microthreads, Stackless Python's dialect. The unifying sentence: cooperative multitasking means the code yields control explicitly - no locks (single thread), cheap switches (no kernel involvement), and the discipline that no task may hog the loop (the 'never block' rule of 5.6 generalized).",
              "Exam framing: expect 'explain cooperative multitasking and differentiate coroutines, greenlets and tasklets'. Give the three-way table, the stackful-vs-stackless contrast, the gevent/Stackless attributions, and the no-preemption/no-lock/no-hogging discipline. The stackful-vs-stackless sentence is the section's technical mark.",
            ],
            keyTerms: [
              { term: "Cooperative multitasking", definition: "Tasks yield control explicitly - no preemption, single-threaded." },
              { term: "Greenlet", definition: "C-level stackful switching - suspends arbitrary call depth (gevent's engine)." },
              { term: "Tasklet", definition: "Stackless Python's microthread - the syllabus's named dialect." },
              { term: "Stackful vs stackless", definition: "Switching whole call stacks vs resuming one frame - the family's dividing line." },
              { term: "gevent", definition: "Library patching blocking I/O onto greenlets - implicit cooperative concurrency." },
            ],
            table: {
              caption: "The cooperative family, three dialects.",
              headers: ["Dialect", "Switch style", "Scheduling", "Where seen"],
              rows: [
                ["Generators/coroutines", "stackless - at yield", "manual or caller-driven", "stdlib, pipelines"],
                ["async/await", "stackless - at await", "asyncio event loop", "modern stdlib"],
                ["Greenlets", "stackful - any depth", "explicit switch or gevent hub", "gevent, WSGI servers"],
                ["Tasklets", "stackful microthreads", "Stackless scheduler", "Stackless Python"],
              ],
            },
            bullets: [
              "Cooperative = code yields explicitly; no preemption, no locks.",
              "Greenlets switch whole stacks - any call depth can pause.",
              "Generators/async are stackless - pause only at marked points.",
              "gevent patches sockets to be green - implicit concurrency.",
              "Tasklets are Stackless Python's stackful microthreads.",
              "Discipline: no task may hog the loop - the yield regularly rule.",
            ],
            diagram: {
              kind: "pyramid",
              title: "The cooperative-multitasking stack",
              caption: "Language machinery below, dialects above - one idea throughout.",
              tiers: [
                { label: "Tasklets / greenlets", note: "stackful dialects - Stackless, gevent" },
                { label: "async/await + asyncio", note: "stackless with a scheduler - modern stdlib" },
                { label: "Generators / coroutines", note: "yield machinery - the base" },
                { label: "Event/epoll readiness", note: "the I/O engine underneath (5.2)" },
              ],
            },
            callout: {
              type: "tip",
              title: "Stackful vs stackless is the dividing line",
              body: "The technical sentence that distinguishes the dialects: 'a generator/await pauses exactly one frame at a marked point (stackless); a greenlet or tasklet suspends an entire call stack at any depth (stackful)'. From that one line, the scheduling consequences (explicit await points vs arbitrary switch) follow - quote it and the comparison question is answered.",
            },
            examQuestions: [
              {
                q: "Explain cooperative multitasking and differentiate coroutines, greenlets and tasklets: switching style, scheduling, and where each is used (asyncio, gevent, Stackless).",
                marks: 14,
                outline: [
                  "Cooperative: tasks yield control explicitly - no preemption",
                  "Coroutines/await: stackless, paused at marked points, asyncio-scheduled",
                  "Greenlets: stackful C-level stack switching, any depth",
                  "gevent: greenlets + patched sockets - implicit concurrency",
                  "Tasklets: Stackless Python's stackful microthreads",
                  "Stackful vs stackless as the dividing line",
                  "Discipline: no task hogs the loop; lock-free single thread",
                ],
              },
              {
                q: "Why does cooperative multitasking eliminate the need for locks among its tasks?",
                marks: 7,
                outline: [
                  "Only one task runs at a time on one thread",
                  "Switches occur only at explicit yield/await/switch points",
                  "No preemption - so no interleaved races",
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
        { topic: "TCP/UDP socket programs (echo pairs)", weight: "about 8-10 marks", note: "Write both programs cold - the most-set coding question." },
        { topic: "Threading: races, locks, queues, GIL", weight: "about 10-12 marks", note: "Counter demo with numbers + producer-consumer + GIL table." },
        { topic: "Multiprocessing and pools", weight: "about 8-10 marks", note: "Process/pipe, Queue vs shared memory, ProcessPoolExecutor." },
        { topic: "JSON/XML (ElementTree) handling", weight: "about 8-10 marks", note: "Round trip + parse-find-build + JSON-vs-pickle security." },
        { topic: "I/O models ladder (blocking to async)", weight: "about 8-10 marks", note: "Five-model ladder + select server code." },
        { topic: "Generators and coroutines (send/priming)", weight: "about 8-10 marks", note: "Averager walkthrough + priming trap." },
        { topic: "CGI/WSGI/custom HTTP servers", weight: "about 6-8 marks", note: "Four-line WSGI app + BaseHTTPRequestHandler contract." },
        { topic: "XML-RPC and distributed concepts", weight: "about 6-8 marks", note: "Server/client pair + actor/REST/RPC mapping." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Two hours a day, five days a week, with every program actually run - this subject's marks live in working code, not prose. Keep a notebook of the twelve canonical programs and re-type them from memory in week six.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - review and sockets", tasks: ["Types, slicing, mutable/immutable demo", "Functions: *args/**kwargs + mutable-default trap", "Stack class with dunders; MRO sketch", "TCP echo pair + framing rule", "UDP echo pair + timeout lesson", "urllib GET/POST + error handling"] },
        { week: "Week 2", focus: "Unit II - formats and servers", tasks: ["html.parser link extractor + escape", "json dumps/loads round trip + type table", "ElementTree parse-find-build + iterparse note", "CGI script with header discipline", "Four-line WSGI app + middleware", "http.server GET/POST handler; mini service synthesis"] },
        { week: "Week 3", focus: "Unit III - servers and threads", tasks: ["socketserver echo + ThreadingMixIn", "Concurrency model chooser (blocking profile)", "ssl wrap pair + CERT_NONE warning", "Race demo with lost-update numbers", "Semaphore/Event/Condition/Barrier chooser", "Producer-consumer with sentinels", "GIL three-way table"] },
        { week: "Week 4", focus: "Unit IV - processes and distribution", tasks: ["IPC chooser + counter contrast", "pickle round trip + code-execution rule", "ctypes Struct + CDLL", "Process + Pipe pair; __main__ guard", "Queue fan-out + shared counter with get_lock", "ProcessPoolExecutor map + futures", "XML-RPC pair + actor/REST/RPC mapping"] },
        { week: "Week 5", focus: "Unit V - I/O models and coroutines", tasks: ["Blocking vs non-blocking recv", "select echo loop; epoll scalability note", "SIGIO sketch + limitations", "countdown + infinite generators; log pipeline", "Averager coroutine + priming", "async gather fetcher + await-point rule", "greenlet/tasklet comparison table"] },
        { week: "Week 6", focus: "Revision and papers", tasks: ["Re-type all twelve canonical programs from memory", "Two full past papers under time", "Error log rewritten three times", "One-page API sheet (socket, threading, mp, asyncio)", "One-page concept sheet (GIL, models, cooperative family)"] },
      ],
    },
    {
      id: "exam-tips",
      heading: "Exam-hall strategy",
      examTips: [
        "Write code, not descriptions - every program question is graded on the code; wrap prose around it, never replace it.",
        "Every socket answer includes the framing caveat (TCP stream, length prefixes) and every UDP answer the timeout lesson.",
        "For threading questions, give the lost-update numbers: two threads x 100,000 -> less than 200,000; with lock -> exactly 200,000.",
        "For multiprocessing answers, state the pickling boundary and the __main__-guard/spawn reason - the two operational traps.",
        "For the GIL, recite the three-way table: CPU threads 1x, processes 0.25x, I/O threads 0.25x.",
        "For coroutines, show priming (next(co)) before the first send - the most-asked runtime trap.",
        "For I/O models, draw the five-rung ladder (park, error, ask, told, submit-complete) before any code.",
        "Time-box: 7-mark questions about 12 minutes, 14-mark about 22 minutes; leave 10 minutes to re-check code for syntax slips.",
      ],
    },
    {
      id: "slips",
      heading: "Last-day strategy and common slips",
      body: [
        "Last day: re-type the twelve canonical programs once each (TCP pair, UDP pair, urllib fetch, WSGI app, http.server handler, socketserver echo, race+lock, producer-consumer, process+pipe, pool map, averager coroutine, async gather), then re-read the concept sheet: GIL, I/O ladder, cooperative family, trust rules for pickle/XML-RPC. Do not learn new APIs tonight - consolidate the ones you will actually write.",
      ],
      bullets: [
        "Forgetting the blank line after CGI headers - the classic 'script prints nothing' bug.",
        "Calling send() on an unprimed coroutine - prime with next() first.",
        "time.sleep inside a coroutine - stalls the whole loop; use asyncio.sleep.",
        "Shared mp.Value mutated without get_lock - the cross-process race reborn.",
        "recv(1024) treated as one message - TCP is a stream; frame it.",
        "CERT_NONE to 'fix' SSL errors - deletes the protection; pin a test CA.",
        "Pickle from untrusted sources - loads executes code; JSON instead.",
        "Mutable default arguments - one shared list across calls; use None.",
        "One sentinel for N workers - all but one hang; send one per worker.",
        "Blocking calls inside the select/asyncio loop - one stall freezes every client.",
        "Blocking listening socket used for TLS - wrap after accept, per connection.",
        "Non-daemon threads forgotten at shutdown - the interpreter waits forever; join or daemonize.",
      ],
    },
  ],
};
