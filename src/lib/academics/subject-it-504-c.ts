/**
 * Academics - RGPV 5th-semester subject: IT-504(C) Java Programming.
 *
 * Structure mirrors subject-ad-502.ts: units -> one chapter per unit ->
 * numbered sections.  Each section carries body paragraphs, bullets, a
 * diagram, key terms, a callout, a table or code sample, and examiner-style
 * exam questions (7 or 14 marks) with answer outlines.
 */

import type { AcademicSubject } from "./types";

export const it504c: AcademicSubject = {
  id: "it-504-c",
  code: "IT-504(C)",
  title: "Java Programming",
  semester: "V Semester",
  program: "RGPV · Information Technology",
  tagline:
    "Every topic of IT-504(C) as one connected story: how source becomes bytecode on the JVM, how classes grow into interfaces, packages and constructors, how AWT windows listen to events and applets live in browsers, how threads share data safely while exceptions propagate up the stack, how streams reach files and JDBC reaches databases, and how sockets and RMI reach across networks.",
  description:
    "Five units walk from the Java environment and the object-oriented core (classes, inheritance, interfaces, packages, constructors, garbage collection), through AWT components, layout managers, the event delegation model, applets and Swing, into multithreading with synchronization and the exception hierarchy, then stream-based I/O with serialization and JDBC connectivity, ending with TCP and UDP sockets, internet addressing and a complete RMI application.",
  accentColor: "#f97316",
  emoji: "JP",
  unitCount: 5,
  totalSections: 37,
  units: [
    {
      number: 1,
      roman: "I",
      title: "The Java Environment and Object Orientation",
      summary:
        "Unit I builds the platform and the language core: the JDK-JVM-API stack and its tools, applications versus applets, the object-oriented pillars of encapsulation, inheritance and polymorphism with abstract classes, interfaces with their variables and extensions, packages with scope, lifetime and access specifiers, constructors with this and finalize(), and arrays with memory allocation and garbage collection.",
      chapter: {
        number: "01",
        title: "The Language and Its Machine",
        intro:
          "Unit I covers the JDK, the JVM and the Java API, the compiler-interpreter-appletviewer-debugger toolset, the basic idea of applications and applets, objects, classes and encapsulation, inheritance with software reuse, polymorphism with abstract classes and methods, defining, implementing, extending interfaces and their variables, packages with scope, lifetime and access specifiers, constructors, copy constructors, this and finalize(), and arrays with memory allocation and garbage collection.",
        inOneBreath:
          "The JDK compiles source to bytecode and the JVM executes it, so portability lives at the bytecode level. Classes bundle state and behaviour; inheritance reuses, polymorphism dispatches at runtime, and interfaces promise capability without spending the single extends. Packages organize names, access specifiers control visibility, constructors initialize with this and this(), and finalize() is the collector's optional hook. Arrays are heap objects, and the garbage collector reclaims whatever is no longer reachable.",
        sections: [
          {
            number: "1.1",
            title: "The Java environment - JDK, JVM and the API",
            body: [
              "The Java environment is a three-layer machine. The JDK (Java Development Kit) is the outermost box holding the compiler and development tools; inside it the JRE (Java Runtime Environment) holds the JVM plus the core class libraries; and the JVM itself is the virtual processor that executes bytecode. You write Human.java, javac compiles it to Human.class - bytecode, not machine code - and the java launcher hands that bytecode to the JVM. Because every operating system ships a JVM that speaks the same bytecode format, the same .class file runs everywhere: write once, run anywhere. Portability lives at the bytecode level, not at the source level.",
              "When the JVM starts a program it runs the class loader. Loading locates the .class files; linking verifies, prepares and resolves them - the bytecode verifier rejects illegal code such as forged pointers or stack misuse, which is how untrusted code is contained; preparation assigns defaults to static fields; resolution connects symbolic references. Initialization then runs static initializers, and only after all that does main() execute. Loading is lazy and dynamic: a class is loaded on first real use, which is why Java needs no separate link-and-build step the way C++ does.",
              "The Java API is the shipped class library, organized into packages: java.lang (String, Math, System - imported automatically), java.util (collections and utilities), java.io (streams, Unit IV), java.awt and java.applet (Unit II), java.net (Unit V) and java.sql (Unit IV). Programming in Java is mostly composing your own classes with API classes rather than writing everything from scratch, which is why knowing the package map of the syllabus is half the subject.",
              "The exam asks 'explain JDK, JRE and JVM' or 'why is Java platform independent'. The full-mark shape: draw the nesting JDK contains JRE contains JVM, trace Human.java through javac to bytecode to execution, and close with the observation that the JVM is itself an interpreter-plus-JIT hybrid - the JIT (just-in-time compiler) converts frequently executed bytecode into machine code at runtime, so Java gets portability without paying forever in speed.",
            ],
            keyTerms: [
              { term: "JDK", definition: "The development kit: compiler (javac), debugger, javadoc, jar, plus the JRE." },
              { term: "JRE", definition: "The JVM plus the core class libraries - what a machine needs only to run Java programs." },
              { term: "JVM", definition: "The bytecode-executing virtual machine: class loader, verifier, interpreter and JIT." },
              { term: "Bytecode", definition: "The portable instruction set of the .class file - the level at which Java's portability lives." },
              { term: "Java API", definition: "The standard class library organized into packages such as java.lang, java.util, java.io." },
            ],
            table: {
              caption: "The three layers and what each answers.",
              headers: ["Layer", "Contains", "Answers the question"],
              rows: [
                ["JDK", "javac, jdb, javadoc, jar, appletviewer + the JRE", "what do I need to develop Java programs?"],
                ["JRE", "JVM + core class libraries", "what do I need only to run them?"],
                ["JVM", "class loader, bytecode verifier, interpreter, JIT", "how does bytecode actually execute?"],
                ["Java API", "packages: java.lang, java.util, java.io, java.net, java.sql", "which ready-made classes can I compose?"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "From source to execution",
              caption: "Compile once to bytecode; every platform's JVM executes the same file.",
              stages: [
                { label: "Human.java", note: "source text" },
                { label: "javac", note: "compiler - syntax and type checks" },
                { label: "Human.class", note: "portable bytecode" },
                { label: "JVM", note: "load, verify, initialize" },
                { label: "Execution", note: "interpreted + JIT on the OS" },
              ],
            },
            bullets: [
              "JDK contains the JRE contains the JVM - the nesting is the standard diagram.",
              "javac compiles source to bytecode; the JVM loads, verifies and executes it.",
              "The bytecode verifier rejects forged pointers and illegal stack operations.",
              "Classes load lazily on first use - no separate linker stage like C++.",
              "The Java API is the package-organized library your classes compose with.",
              "The JIT compiles hot bytecode to machine code at runtime - portability plus speed.",
            ],
            callout: {
              type: "tip",
              title: "Portability is a bytecode property",
              body: "Source is compiled once to bytecode; each platform's JVM translates bytecode to its own machine code. Saying 'the JVM is the platform' - the program targets the JVM, and the JVM targets the OS - is the sentence that separates a complete platform-independence answer from a vague one.",
            },
            examQuestions: [
              {
                q: "Explain the architecture of the Java environment - JDK, JRE, JVM and the Java API. Trace what happens to a Human.java file from compilation to execution, and explain why Java is platform independent.",
                marks: 14,
                outline: [
                  "JDK = development tools + JRE; JRE = JVM + core libraries; nesting drawn.",
                  "javac compiles Human.java to Human.class bytecode after syntax and type checks.",
                  "JVM class loader: loading, verification, preparation, resolution, initialization.",
                  "Bytecode verifier rejects forged pointers and stack misuse - untrusted code contained.",
                  "Interpreter plus JIT: hot bytecode compiled to machine code at runtime.",
                  "Portability is a bytecode property - one .class file, many platform JVMs.",
                  "Java API supplies packages (java.lang, java.util, java.io) the program composes with.",
                ],
              },
              {
                q: "Describe the working of the JVM class loader and the bytecode verifier. Why does Java not need a separate linking step the way C++ does?",
                marks: 7,
                outline: [
                  "Loading locates the .class file; classes load lazily on first use.",
                  "Linking: verify (verifier), prepare (defaults), resolve (symbolic references).",
                  "Verifier rejects illegal bytecode - forged pointers, stack misuse, bad casts.",
                  "Initialization runs static initializers before main() executes.",
                  "Dynamic loading replaces static linking - references resolve at runtime.",
                ],
              },
            ],
          },
          {
            number: "1.2",
            title: "The programming environment - tools, applications and applets",
            body: [
              "The JDK ships the working toolset. javac is the compiler that turns source into bytecode; java is the launcher that loads a class and invokes its main(); appletviewer runs applets inside their HTML <applet> tag without needing a browser; jdb is the command-line debugger with breakpoints, stepping and watchpoints; javadoc generates HTML documentation from /** ... */ comments; javap disassembles a .class file to show the compiler's view; jar archives packages into one compressed file. Every practical session uses these seven names, and the exam asks them as 'explain the Java programming environment'.",
              "Applications and applets are the two program shapes. An application is standalone: launched with java ClassName, entering through public static void main(String[] args), holding the normal file and network rights of its user. An applet is embedded in an HTML page and hosted by a browser or appletviewer: it has no main() - the host calls init(), start(), paint(), stop() and destroy() in its life cycle (section 2.6) - and it runs inside the security sandbox: no local file reading or writing, no network connection except back to its origin host, no program execution, no native libraries.",
              "The worked pair fixes the workflow. Application: save public class Hello { public static void main(String[] args) { System.out.println(\"Hello, RGPV\"); } } as Hello.java, compile with javac Hello.java, run with java Hello - the console prints Hello, RGPV. Applet: compile HelloApplet.java, write <applet code=\"HelloApplet.class\" width=200 height=60> into Hello.html, and run appletviewer Hello.html. The compile command and the run command of each shape are one-mark staples in every paper.",
              "The contrast question wants three axes: entry point (main() versus the life-cycle methods), host (the OS command line versus a browser or appletviewer), and security (full user rights versus the sandbox). A useful non-obvious line: javadoc comments are documentation code - the /** */ blocks are compiled for the documentation tool, not for the JVM, which is why they survive in shipped libraries.",
            ],
            keyTerms: [
              { term: "javac", definition: "The compiler: source .java files into portable .class bytecode." },
              { term: "appletviewer", definition: "JDK tool that runs an applet from its HTML tag without a browser." },
              { term: "jdb", definition: "The command-line debugger: breakpoints, stepping, inspecting variables." },
              { term: "Sandbox", definition: "The applet's security cage: no local files, no foreign network, no native code." },
              { term: "main()", definition: "The application entry point - public static void main(String[] args)." },
            ],
            table: {
              caption: "The programming environment's tools.",
              headers: ["Tool", "Role", "Typical use"],
              rows: [
                ["javac", "compiler", "javac Hello.java produces Hello.class"],
                ["java", "interpreter / launcher", "java Hello runs main() on the JVM"],
                ["appletviewer", "applet runner", "appletviewer Hello.html shows the applet"],
                ["jdb", "debugger", "breakpoints, stepping, thread inspection"],
                ["javadoc", "documentation generator", "HTML pages from /** */ comments"],
                ["javap", "disassembler", "shows methods and bytecode of a class"],
                ["jar", "archiver", "packages classes into one compressed file"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Application vs applet",
              caption: "Same language, two hosts: the OS command line versus a sandboxed browser page.",
              left: {
                heading: "Application",
                items: [
                  "Entry point: public static void main(String[] args)",
                  "Launched with the java command",
                  "Full file and network rights of its user",
                  "Example: a Swing desktop program (Unit II)",
                ],
              },
              right: {
                heading: "Applet",
                items: [
                  "No main() - the host drives init/start/paint/stop/destroy",
                  "Hosted by a browser or appletviewer from an HTML tag",
                  "Sandbox: no local files, no foreign hosts, no native code",
                  "Example: the animation applet of section 2.6",
                ],
              },
            },
            bullets: [
              "javac compiles, java runs, appletviewer shows applets, jdb debugs.",
              "javadoc turns /** */ comments into HTML; javap disassembles classes.",
              "Applications enter through main(); applets are driven by their life cycle.",
              "Applets run in the sandbox: no local I/O, no foreign hosts, no native libraries.",
              "Applet HTML: <applet code=\"X.class\" width=200 height=60> plus <param> tags.",
              "Compile-run pairs: javac + java for applications, javac + appletviewer for applets.",
            ],
            callout: {
              type: "exam",
              title: "An applet has no main()",
              body: "Adding main() to an applet compiles fine but is never called - the browser, not the programmer, drives the life cycle. Pair that with the sandbox list (no local files, origin-host-only networking, no native code) and the application-versus-applet question is fully covered.",
            },
            examQuestions: [
              {
                q: "Explain the Java programming environment. Describe the roles of the compiler, interpreter, appletviewer and debugger, and the purpose of the Java API.",
                marks: 7,
                outline: [
                  "javac compiles source to portable bytecode.",
                  "java loads the class and invokes main() on the JVM.",
                  "appletviewer runs applets from their HTML tag without a browser.",
                  "jdb provides breakpoints, stepping and variable inspection.",
                  "The Java API is the package-organized library programs compose with.",
                ],
              },
              {
                q: "Differentiate a Java application from a Java applet with reference to entry point, execution host and security restrictions.",
                marks: 7,
                outline: [
                  "Application: main() entry; applet: init/start/paint/stop/destroy driven by the host.",
                  "Application runs standalone via the java command; applet needs an HTML host.",
                  "Applets face the sandbox: no local file I/O, no foreign network hosts.",
                  "No native libraries or program execution from applet code.",
                  "Both compile to the same bytecode with the same javac.",
                ],
              },
              {
                q: "Write the steps and commands to compile and run (a) a standalone application and (b) an applet, naming the tool used at each step.",
                marks: 7,
                outline: [
                  "Save Hello.java containing the main() method.",
                  "Compile: javac Hello.java produces Hello.class.",
                  "Run: java Hello prints the greeting.",
                  "Applet: write the <applet code/width/height> tag into Hello.html.",
                  "Run: appletviewer Hello.html; note the applet has no main().",
                ],
              },
            ],
          },
          {
            number: "1.3",
            title: "Objects, classes and encapsulation",
            body: [
              "A class is the template: it declares the fields (state) and methods (behaviour) that every of its instances carries. An object is a runtime instance of that class, created with new, existing as a distinct entity with identity even when its field values equal another object's. Objects cooperate only by message passing - calling each other's methods - never by editing each other's raw data. The banking domain is the standard vehicle: not a pile of procedures around a shared record, but Account objects that each own a balance and guard it.",
              "Encapsulation is the discipline that makes this work: declare the fields private and expose behaviour through public methods, so the class - not the caller - protects its own invariants. In the BankAccount example the balance field is private; deposit(double amt) validates amt > 0 before touching it, and getBalance() is the controlled read path. The commented line a.balance = -9999; is a compile error, and that rejection is the whole point: no outside code, however careless, can drive an account negative.",
              "Object creation traces precisely: new BankAccount(500) allocates the object on the heap, runs the constructor, and returns a reference - the variable holds the reference, not the object. Assignment copies references, not objects: BankAccount a2 = a1 makes two names for one account, so a2.deposit(100) is visible through a1.getBalance(). This reference semantics is the difference between comparing values (equals) and comparing identity (==) - a distinction the exam probes regularly.",
              "The exam asks 'define class and object' and 'what is encapsulation; how is it achieved'. The full-mark answer names the three properties (identity, state, behaviour), gives the BankAccount example with a validating mutator, and states the benefit: data can only change through the class's own rules, so invariants hold no matter who calls. Getters and setters alone are not encapsulation - the validation inside them is.",
            ],
            keyTerms: [
              { term: "Class", definition: "The template declaring the fields and methods shared by all its instances." },
              { term: "Object", definition: "A runtime instance with identity, state and behaviour, created by new on the heap." },
              { term: "Encapsulation", definition: "Private fields behind public, validating methods - the class guards its invariants." },
              { term: "Invariant", definition: "A condition (balance >= 0) the class's methods preserve against all callers." },
              { term: "Reference", definition: "The variable's actual content: the address of an object, not the object itself." },
            ],
            codeExample: {
              language: "java",
              caption: "EncapsDemo.java - state hidden behind validating behaviour",
              code: `class BankAccount {
    private double balance;                 // hidden state

    BankAccount(double opening) {           // constructor
        balance = opening;
    }

    public void deposit(double amt) {       // validating mutator
        if (amt > 0) balance += amt;
    }

    public double getBalance() {            // controlled read access
        return balance;
    }
}

public class EncapsDemo {
    public static void main(String[] args) {
        BankAccount a = new BankAccount(500);
        BankAccount a2 = a;                 // two names, one object
        a2.deposit(250);
        // a.balance = -9999;               // compile error - state is guarded
        System.out.println(a.getBalance()); // 750.0
    }
}`,
            },
            diagram: {
              kind: "layers",
              title: "A class as layers",
              caption: "Callers see only the top layer; the state that maintains invariants is private at the bottom.",
              layers: [
                { label: "Public methods", note: "deposit(), withdraw(), getBalance() - the only doorway" },
                { label: "Private helpers", note: "internal logic the class may rearrange freely" },
                { label: "Private fields", note: "balance - invisible from outside, protected by the methods" },
              ],
            },
            bullets: [
              "Class = template; object = runtime instance with identity, state and behaviour.",
              "new allocates on the heap and returns a reference; variables hold references.",
              "Encapsulation: private fields, public validating methods, invariants protected.",
              "Assignment copies references, not objects - two names can alias one account.",
              "Identity (==) and value equality (equals) are different comparisons.",
              "Getters and setters are not encapsulation by themselves - validation is.",
            ],
            callout: {
              type: "tip",
              title: "Accessors are not encapsulation by themselves",
              body: "A setBalance(double b) that writes any value is a private field with public plumbing - it guards nothing. Encapsulation means the mutator enforces the rules (amount > 0, no overdraft) so the invariant holds no matter who calls. Write the validation sentence explicitly in exam answers.",
            },
            examQuestions: [
              {
                q: "Define class and object. Explain encapsulation with a BankAccount example showing private state, a validating mutator and an accessor, and state why direct field access is dangerous.",
                marks: 14,
                outline: [
                  "Class = template declaring fields and methods; object = instance with identity.",
                  "new allocates on the heap; variables hold references to the object.",
                  "Encapsulation: private balance, public deposit()/withdraw()/getBalance().",
                  "deposit() validates amt > 0 before changing state - the invariant is guarded.",
                  "Direct access a.balance = -9999 compiles only if balance is public - and corrupts state.",
                  "Benefits: controlled access, modularity, invariants hold against any caller.",
                ],
              },
              {
                q: "Explain the difference between a primitive variable and a reference variable, and what happens when two references are assigned the same object.",
                marks: 7,
                outline: [
                  "A primitive variable holds the value itself; a reference holds an object's address.",
                  "Assignment copies the reference, never the object.",
                  "BankAccount a2 = a1: two names, one object - both see each other's changes.",
                  "== compares references; equals() compares values.",
                  "null is a reference to no object; primitives cannot be null.",
                ],
              },
            ],
          },
          {
            number: "1.4",
            title: "Inheritance, polymorphism and abstract classes",
            body: [
              "Inheritance is the is-a relationship: class Circle extends Shape means every Circle is a Shape, inheriting its fields and methods, adding its own, and overriding inherited ones for specialized behaviour. Java allows only single class inheritance - every class extends exactly one parent, ending at Object - because multiple parents create ambiguity about which inherited member wins. super calls the parent's constructor or the overridden method; software reuse is the payoff: the general code is written once in Shape and every subclass gets it free.",
              "Polymorphism is dynamic method dispatch: a Shape reference may hold a Circle, a Rect or any future subclass, and s.area() resolves at runtime to the actual object's class, not the reference's type. The worked trace: Shape[] shapes = { new Circle(2), new Rect(3, 4) }; the loop prints 12.566370614359172 and then 12.0 - the same statement, two different methods. Overriding rules: same signature, visibility not reduced, @Override annotation documents intent. Overloading (same name, different signatures, resolved at compile time) must not be confused with overriding (same signature, resolved at runtime) - the classic exam contrast.",
              "Abstract classes formalize the partial parent. Declared abstract, a class cannot be instantiated; it may mix concrete methods with abstract ones - method signatures with no body - and every concrete subclass must implement the abstract methods or itself be abstract. abstract class Shape { abstract double area(); } fixes the contract (every shape can compute its area) while leaving the formula to each subclass. Unlike interfaces, abstract classes can carry state (fields) and constructors, and they spend the subclass's single extends.",
              "The exam asks 'explain inheritance and polymorphism with an example' or 'differentiate abstract class and interface'. Draw the hierarchy pyramid, trace the dispatch through the shapes array, and close with extensibility: adding a Triangle requires zero changes to the loop - that sentence is the mark that shows you understand why polymorphism exists, not merely what it does. The abstract-class-versus-interface half wants three contrasts: state versus none, one-extends versus many-implements, partial code versus pure contract.",
            ],
            keyTerms: [
              { term: "Inheritance", definition: "The is-a relation via extends: subclass inherits, adds and overrides members." },
              { term: "Overriding", definition: "Redefining an inherited method with the same signature; resolved at runtime." },
              { term: "Dynamic method dispatch", definition: "The call s.area() binds to the actual object's class, not the reference type." },
              { term: "Abstract class", definition: "A non-instantiable class mixing concrete and abstract methods; carries state and constructors." },
              { term: "super", definition: "Reference to the parent: super(...) constructs, super.method() bypasses the override." },
            ],
            codeExample: {
              language: "java",
              caption: "PolyDemo.java - one call site, many behaviours",
              code: `abstract class Shape {                 // cannot be instantiated
    abstract double area();            // subclasses must implement
}

class Circle extends Shape {
    double r;
    Circle(double r) { this.r = r; }
    double area() { return Math.PI * r * r; }
}

class Rect extends Shape {
    double w, h;
    Rect(double w, double h) { this.w = w; this.h = h; }
    double area() { return w * h; }
}

public class PolyDemo {
    public static void main(String[] args) {
        Shape[] shapes = { new Circle(2), new Rect(3, 4) };
        for (Shape s : shapes) {       // dynamic method dispatch
            System.out.println(s.area());
        }                              // 12.566370614359172 then 12.0
    }
}`,
            },
            diagram: {
              kind: "pyramid",
              title: "The Shape hierarchy",
              caption: "General at the top, concrete at the bottom - the dispatch always lands on the bottom tier.",
              tiers: [
                { label: "Object", note: "the root every class eventually extends" },
                { label: "abstract Shape", note: "declares area(); holds the shared contract" },
                { label: "Circle · Rect · Triangle", note: "concrete subclasses implementing area()" },
              ],
            },
            bullets: [
              "extends builds the is-a tree; every class ends at Object; single inheritance only.",
              "Overriding: same signature, runtime binding; overloading: new signatures, compile-time binding.",
              "A Shape reference holding any subclass is polymorphism in action.",
              "Abstract classes cannot be instantiated; abstract methods force subclass implementation.",
              "Abstract classes carry fields and constructors - interfaces traditionally carry none.",
              "Extensibility: add Triangle and the dispatch loop changes by zero lines.",
            ],
            callout: {
              type: "exam",
              title: "Overloading vs overriding in one line",
              body: "Overloading: same method name, different parameter lists, resolved at compile time in one class. Overriding: same signature, parent and child, resolved at runtime by dynamic dispatch. Quote both halves together - each is worth a mark, and mixing them up is the most common loss on this question.",
            },
            examQuestions: [
              {
                q: "Explain inheritance, method overriding and dynamic method dispatch with a Shape-Circle-Rectangle example. State the rules of overriding and the role of the abstract modifier.",
                marks: 14,
                outline: [
                  "extends builds the is-a hierarchy; subclasses inherit and add members.",
                  "Abstract Shape declares area(); cannot be instantiated itself.",
                  "Circle and Rect implement area() with their own formulas.",
                  "A Shape[] holding both subclasses: s.area() dispatches at runtime.",
                  "Trace: 12.566... for Circle(2), 12.0 for Rect(3,4).",
                  "Overriding rules: same signature, visibility not reduced, @Override documents intent.",
                  "Abstract classes carry state and constructors; they spend the single extends.",
                ],
              },
              {
                q: "Why does Java forbid multiple class inheritance, and how do interfaces fill the gap?",
                marks: 7,
                outline: [
                  "Two parents create ambiguity: which inherited field or method wins?",
                  "Java allows exactly one extends; the tree ends at Object.",
                  "A class may implement many interfaces - capability without inherited state.",
                  "Interfaces carry no instance fields, so no diamond conflict arises.",
                  "Example: class Box implements Drawable, Colorable - two contracts, one class.",
                ],
              },
            ],
          },
          {
            number: "1.5",
            title: "Interfaces - defining, implementing and extending",
            body: [
              "An interface is a reference type that declares a contract: method signatures without bodies (implicitly public abstract) and constants (implicitly public static final). It carries no instance state. A class joins the contract with implements and must supply public implementations for every method - writing them package-private is a compile error, because the implementing method may not have weaker access than the interface method it fulfils. An interface reference may hold any implementing object, which is how Java code talks to capabilities instead of concrete classes.",
              "The worked example: interface Drawable declares double COST_PER_CM2 = 0.05 and void draw(); class Box implements Drawable, Colorable supplies draw() and setColor() - implementing two interfaces at once is Java's answer to multiple inheritance, and it costs nothing from the single-extends budget. Drawable d = new Box(); d.draw(); dispatches polymorphically exactly like section 1.4. Interfaces extend interfaces - interface Resizable extends Drawable adds resize() - and may extend several at once, growing contracts without touching implementations.",
              "Variables in interfaces are constants: the compiler treats every field as public static final, so COST_PER_CM2 is shared, unchangeable and reachable as Drawable.COST_PER_CM2 - assigning to it anywhere is a compile error. Applying interfaces is the subject's connective tissue: the AWT event model (Unit II) is interface application - ActionListener is an interface, the frame registers a listener object, and the windowing system calls actionPerformed() through that interface without ever knowing the class. API contracts, callbacks and the collection interfaces of java.util all run on the same mechanism.",
              "The exam asks 'what is an interface; how is it defined, implemented, extended; what about its variables'. Structure the answer as those four sub-questions, give the Drawable-Box listing, and finish with the multiple-inheritance sentence: interfaces deliver multiple inheritance of type (many contracts) while single inheritance of implementation (one parent's code) stays unambiguous. The follow-up probe - why may an interface declare constants but no instance fields - answers itself: an interface is a contract, not a storage; instance state belongs to the implementing class.",
            ],
            keyTerms: [
              { term: "Interface", definition: "A contract type: abstract method signatures plus public static final constants." },
              { term: "implements", definition: "The clause by which a class supplies public bodies for every interface method." },
              { term: "Interface constant", definition: "Every interface field is implicitly public static final - shared and immutable." },
              { term: "Interface inheritance", definition: "Interfaces extend interfaces, several at a time, growing the contract." },
              { term: "Callback", definition: "Code invoked through an interface type by a system that never knew the class - the AWT listener pattern." },
            ],
            codeExample: {
              language: "java",
              caption: "InterfaceDemo.java - define, implement, extend, apply",
              code: `interface Drawable {                    // implicitly public abstract members
    double COST_PER_CM2 = 0.05;         // implicitly public static final
    void draw();                        // implicitly public abstract
}

interface Colorable { void setColor(String c); }

class Box implements Drawable, Colorable {   // multiple interfaces allowed
    public void draw() { System.out.println("box drawn"); }
    public void setColor(String c) { System.out.println("box is " + c); }
}

interface Resizable extends Drawable {  // interfaces extend interfaces
    void resize(double f);
}

public class InterfaceDemo {
    public static void main(String[] args) {
        Drawable d = new Box();         // interface as a type
        d.draw();                       // box drawn
        System.out.println(Drawable.COST_PER_CM2);  // 0.05
    }
}`,
            },
            diagram: {
              kind: "flow",
              title: "Applying an interface",
              caption: "Define the contract, implement it, then invoke through the interface - the system never sees the class.",
              steps: [
                { label: "Define", note: "interface Drawable { void draw(); }" },
                { label: "Implement", note: "class Box implements Drawable - public bodies" },
                { label: "Hold", note: "Drawable d = new Box();" },
                { label: "Invoke", note: "d.draw() dispatches to Box at runtime" },
                { label: "Extend", note: "interface Resizable extends Drawable grows the contract" },
              ],
            },
            bullets: [
              "Interface methods are implicitly public abstract; fields implicitly public static final.",
              "A class may implement many interfaces - multiple inheritance of type.",
              "Implementing methods must be public; weaker access is a compile error.",
              "Interfaces extend interfaces (several at once); classes extend only one class.",
              "Interface references enable callbacks: the AWT calls actionPerformed() blindly.",
              "Constants are reached as InterfaceName.FIELD and can never be reassigned.",
            ],
            callout: {
              type: "warning",
              title: "Weaker access is a compile error",
              body: "Writing void draw() (package-private) in a class that implements Drawable fails: 'attempting to assign weaker access privileges'. The interface method is implicitly public, so the implementation must be declared public too. The same section of the rule makes assigning to any interface constant illegal.",
            },
            examQuestions: [
              {
                q: "What is an interface? Explain defining, implementing and extending interfaces, and the status of variables declared inside interfaces, with a working example.",
                marks: 14,
                outline: [
                  "Interface = contract: abstract method signatures plus constants; no instance state.",
                  "Defined with the interface keyword; methods implicitly public abstract.",
                  "Implemented with implements; every method supplied public - weaker access fails.",
                  "Variables are implicitly public static final - shared constants, assignable never.",
                  "Extended with extends: Resizable extends Drawable; multiple extends allowed.",
                  "Example: Box implements Drawable, Colorable; Drawable d = new Box(); d.draw().",
                  "Multiple inheritance of type without the diamond problem of multiple parents.",
                ],
              },
              {
                q: "How do interfaces provide multiple inheritance in Java? Contrast interface inheritance with class inheritance.",
                marks: 7,
                outline: [
                  "Classes: one extends - ambiguity of two parents forbids more.",
                  "Interfaces: a class implements many; each contributes only a contract.",
                  "No state is inherited from interfaces, so no field conflicts arise.",
                  "Abstract classes give implementation reuse but spend the single extends.",
                  "Drawable + Colorable on one Box shows the two contracts composed.",
                ],
              },
            ],
          },
          {
            number: "1.6",
            title: "Packages, scope, lifetime and access specifiers",
            body: [
              "A package is a named group of related classes - physically a directory, logically a namespace. The first statement package college.library; places the file's classes into that package; import java.util.*; brings names in (or import java.util.Date; imports one), and fully qualified names (java.util.Date) work without any import. The CLASSPATH tells the compiler and JVM where package roots live. Packages deliver three things: namespace management - the classic collision is java.util.Date versus java.sql.Date, resolved by importing exactly one or qualifying; access control (the default specifier is package-wide); and reuse as the unit of API organization.",
              "Scope and lifetime are different questions that the exam pairs deliberately. A local variable (declared inside a method or block) is scoped to its block and lives only while the block executes; the compiler rejects use-before-initialization - locals get no defaults. A parameter behaves like a local, initialized by the call. An instance field is scoped to the class and lives as long as its object, zero-defaulted at creation. A static field is one copy per class, living from class loading to unloading. The four rows of the table are the entire answer; quoting the error 'variable might not have been initialized' shows the local case concretely.",
              "Access specifiers answer 'who may see this member?'. private: the same class only. Default (no keyword, package-private): every class in the same package. protected: the package plus subclasses anywhere, even in other packages. public: everyone. Top-level classes may only be public or default - private and protected are member-level only. The design default is private for state and public for the API surface, with protected as the subclass extension hook.",
              "The exam asks the access matrix as a table (write all four rows and four columns), 'explain scope and lifetime' with the four variable kinds, and package mechanics with an import program. The non-obvious traps: protected includes the package (students answer subclass-only), and omitting a specifier silently grants package access - wider than most beginners intend. One more probe pairs java.util.Date with java.sql.Date - same simple name, two packages - to test whether the namespace story is understood, not recited.",
            ],
            keyTerms: [
              { term: "Package", definition: "A named namespace (and directory) grouping related classes; declared first in the file." },
              { term: "import", definition: "Brings package members into name scope; fully qualified names need no import." },
              { term: "Scope", definition: "The region of code where a name is visible - block, class or package." },
              { term: "Lifetime", definition: "How long the storage exists - block execution, object life, or class loading." },
              { term: "package-private", definition: "The default access: visible to every class in the same package, no keyword needed." },
            ],
            table: {
              caption: "Scope and lifetime of the four variable kinds.",
              headers: ["Variable kind", "Declared", "Scope", "Lifetime"],
              rows: [
                ["Local", "inside a method or block", "that block only", "while the block executes"],
                ["Parameter", "in the method signature", "the whole method", "one method invocation"],
                ["Instance field", "in the class, no static", "the class's methods", "as long as the owning object"],
                ["Static field", "in the class, with static", "the class's methods", "from class loading to unloading"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Choosing an access specifier",
              caption: "Start from who should reach the member; one keyword follows.",
              start: "Who should reach this member?",
              branches: [
                { label: "Everyone - it is the API", outcome: "public: any package, any subclass", good: true },
                { label: "Subclasses extending it", outcome: "protected: package plus subclasses in other packages", good: true },
                { label: "Only this class", outcome: "private: fields and internal helpers", good: true },
                { label: "Only this package's collaborators", outcome: "default: write no keyword at all", good: true },
              ],
            },
            bullets: [
              "package college.library; is the first statement; import brings names into scope.",
              "Packages give namespaces (java.util.Date vs java.sql.Date), access control and reuse.",
              "Locals have block scope and no defaults - use before initialization is a compile error.",
              "Instance fields live with the object; static fields live with the class.",
              "Access ladder: private < default < protected < public.",
              "Top-level classes may be public or default only - never private or protected.",
            ],
            callout: {
              type: "warning",
              title: "Protected is not subclass-only",
              body: "A protected member is visible to every class in the same package as well as to subclasses anywhere. And omitting a specifier does not make a member private - it silently grants package access. Quote the full four-row matrix in the exam; the two shorthand myths cost a mark each.",
            },
            examQuestions: [
              {
                q: "What is a package? Explain how packages are created and imported, and write the access-specifier matrix showing visibility in the same class, same package, subclass in another package and the world.",
                marks: 14,
                outline: [
                  "Package = namespace + directory; declared with package college.library; first.",
                  "import java.util.*; or import java.util.Date; or fully qualified names.",
                  "CLASSPATH locates package roots for compiler and JVM.",
                  "private: same class only.",
                  "Default: same package only.",
                  "protected: same package plus subclasses anywhere.",
                  "public: everywhere; top-level classes limited to public or default.",
                ],
              },
              {
                q: "Explain scope and lifetime for local, parameter, instance and static variables with one example of each.",
                marks: 7,
                outline: [
                  "Local: block scope, dies with the block, no default initialization.",
                  "Parameter: method scope, initialized by the call.",
                  "Instance field: class scope, lives with the object, zero-defaulted.",
                  "Static field: class scope, one copy, lives from loading to unloading.",
                  "The 'variable might not have been initialized' error is the local case.",
                ],
              },
            ],
          },
          {
            number: "1.7",
            title: "Constructors, this and finalize()",
            body: [
              "A constructor initializes a newly created object: same name as the class, no return type, invoked automatically by new. Constructors overload freely - Point(int x, int y), Point(), Point(Point p) - giving several initialization paths. If the class declares none, the compiler inserts a default no-argument constructor that merely calls super(); but the moment you write any constructor, the default disappears, which is the classic surprise when a subclass's implicit super() can no longer find a matching parent constructor and the file refuses to compile.",
              "this is the reference to the current object inside an instance method or constructor. Its three uses: disambiguating fields from parameters (this.x = x), passing the current object as an argument (listener registration in Unit II), and constructor chaining - this(0, 0) invokes another constructor of the same class and must be the FIRST statement of the constructor body. The copy constructor is a user-defined convention Java has no automatic equivalent for: Point(Point p) { this(p.x, p.y); } builds a new object with the same state - you write it when cloning matters, unlike C++ which copies implicitly.",
              "finalize() is the garbage collector's hook: protected void finalize() throws Throwable runs on an object just before the collector reclaims it - Java's nearest thing to a C++ destructor. Its reliability is the exam point: the JVM gives no guarantee it ever runs (the program may exit first), it may run arbitrarily late, and it is deprecated since Java 9. Therefore never close files, sockets or database connections in finalize() - use finally blocks or try-with-resources - and treat it as a last-resort safety net at most.",
              "The exam asks 'explain constructor overloading and copy constructors with an example' and 'what is the this pointer'. The Point listing answers both halves in one program; add the two rule sentences - this() must be the first statement, and the default constructor vanishes once you declare any constructor - and the finalize() caveats for the garbage-collection sub-question. If a subclass compiles only after the parent regains a no-arg constructor, say why: the implicit super() call needs a match.",
            ],
            keyTerms: [
              { term: "Constructor", definition: "Same-name, no-return-type member invoked automatically by new to initialize state." },
              { term: "Default constructor", definition: "The compiler-inserted no-arg constructor - present only when the class declares none." },
              { term: "this", definition: "Reference to the current object: field disambiguation, argument passing, this() chaining." },
              { term: "Copy constructor", definition: "A user-defined constructor taking the same class: Point(Point p) copies state." },
              { term: "finalize()", definition: "The collector's optional pre-reclaim hook - deprecated since Java 9, never guaranteed." },
            ],
            codeExample: {
              language: "java",
              caption: "CtorDemo.java - overloading, this(), the copy constructor",
              code: `class Point {
    int x, y;

    Point(int x, int y) {            // parameterized constructor
        this.x = x;                  // this disambiguates field vs parameter
        this.y = y;
    }

    Point() { this(0, 0); }          // this() chains - first statement only

    Point(Point p) {                 // user-defined copy constructor
        this(p.x, p.y);              // copies state from another instance
    }

    protected void finalize() {      // GC hook - deprecated in Java 9+
        System.out.println("reclaimed");
    }
}

public class CtorDemo {
    public static void main(String[] args) {
        Point a = new Point(3, 4);
        Point b = new Point(a);      // copy: b.x = 3, b.y = 4
        System.out.println(b.x + "," + b.y);   // 3,4
        a = null;                    // old object now unreachable
    }
}`,
            },
            diagram: {
              kind: "flow",
              title: "What new actually does",
              caption: "Allocation, defaulting, construction, chaining, then the reference - in that order.",
              steps: [
                { label: "new Point(3, 4)", note: "arguments evaluated" },
                { label: "Heap allocation", note: "fields set to zero/false/null" },
                { label: "Constructor runs", note: "this points at the new object" },
                { label: "this(...) chains", note: "first statement only, if written" },
                { label: "Reference assigned", note: "the variable now names the object" },
              ],
            },
            bullets: [
              "Constructor: class name, no return type, runs automatically at new.",
              "Constructors overload; the default no-arg one vanishes once you declare any.",
              "this disambiguates fields, passes the object, and this() chains constructors.",
              "this() must be the first statement of the constructor body.",
              "The copy constructor is user-written: Point(Point p) { this(p.x, p.y); }.",
              "finalize() is not guaranteed to run - resource cleanup belongs in finally.",
            ],
            callout: {
              type: "exam",
              title: "First-statement-only chaining",
              body: "this(0, 0) placed after any other statement is a compile error, and two constructors that chain to each other in a loop are rejected as recursive constructor invocation. State the rule plus the vanishing-default-constructor rule - both are one-mark probes hidden inside constructor questions.",
            },
            examQuestions: [
              {
                q: "Explain constructors in Java: default and parameterized constructors, constructor overloading, the this reference and this() chaining, and a user-defined copy constructor, with a Point example.",
                marks: 14,
                outline: [
                  "Constructor: class name, no return type, invoked automatically by new.",
                  "Default constructor inserted only when the class declares none - and removed otherwise.",
                  "Overloading: Point(int, int), Point() and Point(Point) as three paths.",
                  "this.x = x disambiguates fields from parameters; this passes the current object.",
                  "this(0, 0) chains constructors and must be the first statement.",
                  "Copy constructor: Point(Point p) { this(p.x, p.y); } - user-defined, unlike C++.",
                  "Chaining output: new Point(3,4), copy gives x=3, y=4.",
                ],
              },
              {
                q: "What is finalize()? Why can a Java program not rely on it to release resources, and what should be used instead?",
                marks: 7,
                outline: [
                  "finalize() runs on an object just before the collector reclaims it.",
                  "No guarantee of execution - the JVM may exit before collection.",
                  "Timing is arbitrary; it is deprecated since Java 9.",
                  "Never close files, sockets or connections there - too unreliable.",
                  "Use finally blocks or try-with-resources for deterministic cleanup.",
                ],
              },
            ],
          },
          {
            number: "1.8",
            title: "Arrays, memory allocation and garbage collection",
            body: [
              "An array is an indexed collection of elements of one type - and in Java it is itself an object on the heap, even int[]. Declare with int[] marks (the preferred form) or int marks[]; create with new int[5], which fixes the length and zero-fills the elements; or initialize directly with String[] names = {\"Asha\", \"Bharat\"};. The length is a public final field: marks.length - no parentheses. Multidimensional arrays are arrays of arrays, and jagged shapes are legal: int[][] grid = new int[3][]; gives three rows of yet-unknown length. Out-of-range indexing throws ArrayIndexOutOfBoundsException at runtime, never a compile error.",
              "Memory splits into three regions. The method area holds class data: bytecode, static variables, the constant pool. The heap holds every object and array, shared by all threads - new allocates here. Each thread has its own stack of frames, and a frame holds the method's parameters, local variables and references; the reference points into the heap, the object itself never lives on the stack. Two references may name one heap object (aliasing, section 1.3), which is exactly how one account gets two account-holders.",
              "Garbage collection reclaims heap objects the program can no longer reach. Reachability is judged from GC roots - live threads' stacks and static fields. While any chain of references leads from a root to the object, it is retained; nulling or reassigning the last reference removes the path, and once no path remains the object is eligible for collection, with finalize() (section 1.7) the optional pre-reclaim hook. System.gc() is a request, never a command - timing is the collector's business. No free() or delete exists: Java's model removes the C++ memory bug class, but leaks remain possible by holding references forever.",
              "The exam asks 'explain memory allocation and garbage collection' and 'describe arrays with an example'. Draw stack and heap with two references pointing at one object, list the GC roots, state the eligibility rule, and show the array program with its output. The one-liner that earns the final mark: garbage collection frees unreachable objects automatically, but a reachable-but-never-used object - a static list that only grows - is a Java-level leak.",
            ],
            keyTerms: [
              { term: "Array", definition: "A fixed-length, same-type indexed collection - itself a heap object with a final length field." },
              { term: "Heap", definition: "The shared region holding all objects and arrays, allocated by new." },
              { term: "Stack", definition: "Per-thread frames of parameters, locals and references into the heap." },
              { term: "Garbage collection", definition: "Automatic reclamation of objects unreachable from the GC roots." },
              { term: "GC roots", definition: "Live thread stacks and static fields - the starting points of reachability." },
            ],
            codeExample: {
              language: "java",
              caption: "ArrayDemo.java - creation, access and making objects unreachable",
              code: `public class ArrayDemo {
    public static void main(String[] args) {
        int[] marks = new int[5];            // heap allocation, zero-filled
        marks[0] = 90;
        System.out.println(marks.length);    // 5 - a field, not a method

        String[] names = { "Asha", "Bharat" };
        for (String n : names) {
            System.out.println(n);           // Asha, then Bharat
        }

        int[][] grid = new int[2][3];        // 2 rows, 3 columns
        grid[1][2] = 7;

        names = null;                        // old array now unreachable
        System.gc();                         // a hint to the collector, not a command
    }
}`,
            },
            diagram: {
              kind: "fork",
              title: "What happens to an object after new",
              caption: "Reachability decides everything - and leaks are reachable objects nobody uses.",
              start: "Who still references the object?",
              branches: [
                { label: "A live variable or parameter", outcome: "retained on the heap - the collector must not touch it", good: true },
                { label: "The last reference is nulled or reassigned", outcome: "unreachable - eligible for collection", good: true },
                { label: "Only a static field still points to it", outcome: "kept until the class unloads", good: true },
                { label: "A static list keeps growing forever", outcome: "memory leak - reachable, unused, never freed", good: false },
              ],
            },
            bullets: [
              "Arrays are objects: new int[5] zero-fills; length is a final field, no parentheses.",
              "Initializers: String[] names = { \"Asha\", \"Bharat\" }; jagged arrays are legal.",
              "Bad indexes throw ArrayIndexOutOfBoundsException at runtime.",
              "Method area holds class data; the heap holds objects; stacks hold frames.",
              "Variables hold references; two references may alias one heap object.",
              "GC frees unreachable objects; System.gc() is a hint, and leaks need a live reference.",
            ],
            callout: {
              type: "warning",
              title: "length is a field on arrays, a method on Strings",
              body: "marks.length compiles; marks.length() does not. str.length() compiles; str.length does not. The two APIs differ and mixing them is the most common compile error in array-and-string exam code. Also remember: out-of-range array access is a runtime exception, not a compile-time check.",
            },
            examQuestions: [
              {
                q: "Explain array declaration, creation and multidimensional arrays in Java. Then describe heap and stack memory allocation and how garbage collection decides that an object is unreachable.",
                marks: 14,
                outline: [
                  "Arrays are objects: int[] marks = new int[5]; zero-filled, fixed length.",
                  "length is a public final field; initializer syntax fills declared values.",
                  "Multidimensional arrays are arrays of arrays; jagged shapes are legal.",
                  "Method area: class data and statics; heap: all objects; stack: frames and references.",
                  "Variables hold references; two references can alias one object.",
                  "GC roots: live stacks and static fields; no root path means eligible.",
                  "finalize() is the optional hook; System.gc() is a hint, not a command.",
                ],
              },
              {
                q: "Why can Java not have a C-style memory leak, and yet still leak? Give one Java-level leak example.",
                marks: 7,
                outline: [
                  "No free()/delete: the collector reclaims every unreachable object automatically.",
                  "A leak needs a live reference: reachable but never used.",
                  "Example: a static List that accumulates entries forever.",
                  "Listeners registered but never removed on long-lived components.",
                  "Fix: drop references (null, remove, clear) so objects become unreachable.",
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
      title: "AWT, Event Handling, Applets and Swing",
      summary:
        "Unit II puts the program on screen: the container-component hierarchy and window fundamentals, every AWT control and the menu family, the four layout managers, the event delegation model with its three actors, the event class hierarchy and adapter classes, applets with their class hierarchy, life cycle, security restrictions and HTML tags, and the Swing library that modernizes it all.",
      chapter: {
        number: "02",
        title: "Windows, Events and Applets",
        intro:
          "Unit II covers AWT containers and components with window fundamentals - Component, Container, Panel, Window, Frame, Canvas - the AWT controls and menus, the flow, grid, border and card layout managers, the event delegation model in its three styles, the event class hierarchy with listener interfaces and adapter classes, the applet class hierarchy, life cycle, security restrictions and HTML tags, and an introduction to Swing and building applications with it.",
        inOneBreath:
          "Everything visible is a Component; Containers hold Components, and Frame is the window you actually build on. Layout managers place children; the delegation model routes each event from a source through an event object to every registered listener, with adapters padding out the big listener interfaces. Applets run init-start-paint-stop-destroy inside a sandboxed browser, and Swing replaces heavyweight OS peers with lightweight, pluggable-look-and-feel J-components on the same event model.",
        sections: [
          {
            number: "2.1",
            title: "Window fundamentals - containers and components",
            body: [
              "The AWT (Abstract Window Toolkit, java.awt) organizes the screen as one tree. At the root stands Component - every visible thing, carrying paint(), setSize(), setVisible(), getSize(). Container extends Component and adds what containers do: add() and remove() children, and a layout manager to position them. Below Container the family splits: Panel is a generic borderless grouping box, Window is a free-floating top-level surface with no title or menubar, Frame is the workhorse - a Window with title, border, resizable edges and a menubar - Dialog is a bounded conversation window, and Canvas is a blank component to draw on.",
              "The worked minimum program: Frame f = new Frame(\"First\"); f.setSize(300, 200); f.setLayout(new FlowLayout()); f.add(new Button(\"OK\")); f.setVisible(true); - the order matters, with setVisible(true) last. A frame created but never shown simply does not appear. Removing a control is f.remove(b). The typing that makes this possible: Button isA Component, Frame isA Container isA Component, so add(Component) accepts any control anywhere in the tree.",
              "Nesting is how real screens are composed: Panels inside a Frame divide it into regions, each panel carrying its own layout manager, and an Applet extends Panel - so an applet IS a container and can host buttons directly, which is why applets and controls share this one unit. Canvas exists for custom drawing: subclass it, override paint(Graphics g), and draw. One naming subtlety the exam likes: AWT components are heavyweight - each one is backed by a peer, an OS-native widget doing the real drawing - which is the 'Abstract' in the name and the limitation Swing (2.7) removes.",
              "The exam asks 'explain the AWT hierarchy' or 'explain container and component with an example'. Draw the tree Component → Container → {Panel, Window} → {Applet, Frame, Dialog}, give the role of each of the six window-fundamentals classes, list the fundamental Component methods, and close with the five-line frame program - the diagram plus the program is the full rubric.",
            ],
            keyTerms: [
              { term: "Component", definition: "Every visible AWT object - paint(), setSize(), setVisible() live here." },
              { term: "Container", definition: "A Component that holds others: add(), remove(), and a layout manager." },
              { term: "Frame", definition: "A Window with title, border and menubar - the standard application window." },
              { term: "Panel", definition: "A borderless grouping container; Applet extends it." },
              { term: "Canvas", definition: "A blank component whose subclass overrides paint() for custom drawing." },
            ],
            table: {
              caption: "The window fundamentals.",
              headers: ["Class", "Extends", "Role"],
              rows: [
                ["Component", "Object", "every visible thing; paint, size, visibility"],
                ["Container", "Component", "add()/remove() children; owns the layout manager"],
                ["Panel", "Container", "borderless grouping box; Applet's parent"],
                ["Window", "Container", "free-floating top-level surface, no title"],
                ["Frame", "Window", "title + border + resizable + menubar - the app window"],
                ["Canvas", "Component", "blank drawing surface; subclass overrides paint()"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "The AWT class hierarchy",
              caption: "Index 0 is the top of the tree; everything below inherits everything above.",
              layers: [
                { label: "Component", note: "paint(), setSize(), setVisible() - every visible object" },
                { label: "Container", note: "add(), remove(), owns a layout manager" },
                { label: "Panel | Window", note: "borderless grouping vs free-floating surface" },
                { label: "Applet | Frame | Dialog", note: "the concrete workhorses of the syllabus" },
              ],
            },
            bullets: [
              "Component is the root of everything visible; Container adds children and layout.",
              "Frame = Window + title + border + menubar; Panel is Applet's parent.",
              "Order matters: create, setLayout, add, setSize, then setVisible(true) last.",
              "f.remove(b) takes a control out; the layout reflows.",
              "Applet extends Panel, so applets can host controls directly.",
              "AWT components are heavyweight - each backed by an OS peer widget.",
            ],
            callout: {
              type: "tip",
              title: "Applet extends Panel",
              body: "The applet class sits inside the same hierarchy as buttons and frames - which is why an applet can host controls directly and why AWT, events and applets form one syllabus unit. Drawing the hierarchy with Applet hanging under Panel is the line examiners look for in the hierarchy question.",
            },
            examQuestions: [
              {
                q: "Explain the AWT class hierarchy for window fundamentals - Component, Container, Panel, Window, Frame and Canvas - giving the role and one use of each. Write the code that opens a sized, visible Frame containing one button.",
                marks: 14,
                outline: [
                  "Component: every visible object - paint(), setSize(), setVisible().",
                  "Container extends it: add()/remove() plus a layout manager.",
                  "Panel: borderless grouping box; parent of Applet.",
                  "Window: free-floating surface; Frame adds title, border, menubar.",
                  "Canvas: blank surface for custom painting.",
                  "Program: new Frame, setLayout(new FlowLayout()), add(new Button(\"OK\")),",
                  "setSize(300,200), setVisible(true) - show last.",
                ],
              },
              {
                q: "Why is the AWT called 'abstract' and its components 'heavyweight'? Explain the peer mechanism and its main limitation.",
                marks: 7,
                outline: [
                  "Each AWT component delegates drawing and events to a peer - an OS widget.",
                  "Heavyweight: real native resources behind every button and label.",
                  "Look and feel varies with the OS - the program cannot fix it.",
                  "Only widgets common to all platforms could be included - a small set.",
                  "The limitation motivates Swing's lightweight, Java-painted components.",
                ],
              },
            ],
          },
          {
            number: "2.2",
            title: "AWT controls and menus",
            body: [
              "Controls are the interactive widgets, each a Component subclass. Label shows static text; Button fires a command; Checkbox is an on/off toggle, and wrapping several in a CheckboxGroup turns them into radio buttons where exactly one is on; Choice is a drop-down list; List is a scrollable multi-select box; TextField takes one line of text; TextArea takes many; Scrollbar adjusts a range. Menus are the MenuComponent family, attached differently from controls: a MenuBar is set on a Frame with setMenuBar(), and Menu and MenuItem (plus CheckboxMenuItem) hang off it. Controls join a container with add() and leave with remove().",
              "The worked form builds all of it in one frame: a Label \"Name:\", a TextField(15), a Checkbox \"Student\", a Choice with courses added by course.add(\"B.Tech\"), and a Button \"Submit\" - laid out by FlowLayout so they flow left to right. Reading back uses each control's getter: t.getText(), c.getState(), course.getSelectedItem(). The frame is sized then shown. Every control is also an event source - Button fires ActionEvent, Checkbox and Choice and List fire ItemEvent, Text components fire TextEvent, Scrollbar fires AdjustmentEvent - a one-to-one mapping the event table of 2.5 makes explicit.",
              "A control does nothing until a listener is registered: the Submit button paints and presses but responds to nothing without an ActionListener (2.4). This separation - construction here, behaviour in the event section - is the standard program shape for the exam's form-design questions: layout and controls first, listeners second. It also gives the answer its reading back: t.getText() supplies the name typed, c.getState() the toggle, course.getSelectedItem() the chosen course - one getter per control completes the form.",
              "The exam asks 'list the AWT controls with an example' or 'write a program to design a registration form'. Answer with the control table (name, constructor, one getter, its event) plus the form program. The CheckboxGroup-versus-Checkbox and Choice-versus-List distinctions are the recurring short probes: independent toggles versus single-select radio, and drop-down versus visible multi-select list. Menus close the answer: MenuBar set on the frame, Menu and MenuItem hanging beneath, CheckboxMenuItem for stateful entries.",
            ],
            keyTerms: [
              { term: "CheckboxGroup", definition: "Groups checkboxes into radio behaviour - exactly one selected." },
              { term: "Choice", definition: "Drop-down single-select control; items added with add()." },
              { term: "List", definition: "Scrollable list supporting multi-selection." },
              { term: "TextField / TextArea", definition: "Single-line and multi-line text entry components." },
              { term: "MenuBar", definition: "Set on a Frame with setMenuBar(); holds Menu and MenuItem objects." },
            ],
            codeExample: {
              language: "java",
              caption: "ControlsDemo.java - a form of AWT controls",
              code: `import java.awt.*;

public class ControlsDemo {
    public static void main(String[] args) {
        Frame f = new Frame("Registration");
        Label l = new Label("Name:");
        TextField t = new TextField(15);
        Checkbox c = new Checkbox("Student");
        Choice course = new Choice();        // drop-down
        course.add("B.Tech");
        course.add("M.Tech");
        Button b = new Button("Submit");

        f.setLayout(new FlowLayout());       // controls flow left to right
        f.add(l);
        f.add(t);
        f.add(c);
        f.add(course);
        f.add(b);
        f.setSize(320, 150);
        f.setVisible(true);                  // always show last
    }
}`,
            },
            diagram: {
              kind: "pipeline",
              title: "Putting a control on screen",
              caption: "Create, configure, add, listen, show - the same five steps for every control.",
              stages: [
                { label: "Create", note: "new Button(\"Submit\")" },
                { label: "Configure", note: "text, state, items" },
                { label: "Add", note: "f.add(b) into the container" },
                { label: "Listen", note: "b.addActionListener(...)" },
                { label: "Show", note: "f.setVisible(true)" },
              ],
            },
            bullets: [
              "Label, Button, Checkbox (+CheckboxGroup for radio), Choice, List, TextField, TextArea, Scrollbar.",
              "Menus: Frame.setMenuBar(mb); MenuBar holds Menu; Menu holds MenuItem.",
              "Controls enter and leave with container add() and remove().",
              "Every control is an event source: Button-Action, Checkbox/Choice/List-Item, Text-Text, Scrollbar-Adjustment.",
              "Read state with getText(), getState(), getSelectedItem().",
              "No listener means a control that draws but never responds.",
            ],
            callout: {
              type: "exam",
              title: "Match control to event",
              body: "Button fires ActionEvent; Checkbox, Choice and List fire ItemEvent; TextField and TextArea fire TextEvent; Scrollbar fires AdjustmentEvent. Writing the correct event class beside each control in a form-design answer is exactly what the examiner scans for - it connects 2.2 to 2.5 in one stroke.",
            },
            examQuestions: [
              {
                q: "Write an AWT program that designs a student registration form using Label, TextField, Checkbox, Choice and Button, and explain the role of each control in the form.",
                marks: 14,
                outline: [
                  "Frame created; FlowLayout set before controls are added.",
                  "Label \"Name:\" captions the TextField(15) entry field.",
                  "Checkbox \"Student\" is an independent on/off toggle.",
                  "Choice drop-down filled with course.add(\"B.Tech\") options.",
                  "Button \"Submit\" added - its ActionEvent listener registered (2.4).",
                  "setSize then setVisible(true) last; state read via getText/getState/getSelectedItem.",
                ],
              },
              {
                q: "Explain Checkbox vs CheckboxGroup, Choice vs List, and TextField vs TextArea with one use case each.",
                marks: 7,
                outline: [
                  "Checkbox: independent toggles (newsletter opt-in); CheckboxGroup forces radio behaviour.",
                  "Choice: compact drop-down, single selection; List: visible rows, multi-select.",
                  "TextField: one line (username); TextArea: multi-line with scrollbars (address).",
                  "All are Components and event sources for their matching events.",
                  "Menus are separate: MenuBar-Menu-MemberItem attached to a Frame.",
                ],
              },
            ],
          },
          {
            number: "2.3",
            title: "Layout managers",
            body: [
              "A layout manager is a policy object that decides where a container places its children as sizes change - the container delegates positioning with setLayout(manager). The syllabus's four: FlowLayout places children left to right in natural size and wraps to the next row (the default for Panel and Applet); GridLayout cuts the space into rows x columns of equal cells and stretches every child to fill its cell; BorderLayout divides the container into five named regions - NORTH, SOUTH, EAST, WEST and CENTER, with CENTER taking all leftover space (the default for Frame); CardLayout stacks children like a deck and shows one at a time via first(), next() and show().",
              "The worked contrast: add the same three buttons under each manager. FlowLayout: a tidy row of natural-sized buttons that wraps when the frame narrows. GridLayout(1, 3): three equal cells, buttons stretched. BorderLayout: f.add(b1, \"North\"); f.add(b2, \"Center\"); f.add(b3, \"South\"); - the center button eats the resizing. CardLayout: three buttons occupy the same rectangle and card.first()/card.next(f) flips between them. Absolute positioning is possible with setLayout(null) plus b.setBounds(x, y, w, h), and the exam asks why it is discouraged.",
              "Choosing is the design skill: forms suit FlowLayout or a grid; application shells with a toolbar, work area and status bar suit BorderLayout; calculators and keypads suit GridLayout; wizards and tab-like panels suit CardLayout. Complex screens are composed by nesting: a BorderLayout frame whose CENTER holds a GridLayout panel of keys, each panel with its own manager. The calculator shell is the worked composite: NORTH the display, CENTER the 4x3 key grid, SOUTH the clear and equals row.",
              "The exam asks 'explain the layout managers with diagrams' - draw all four arrangements, state the two defaults (Panel gets FlowLayout, Frame gets BorderLayout), note the position string in add(component, \"North\"), and answer the setBounds probe: absolute coordinates break on resize, different fonts and different DPI, which is the whole reason managers exist. The nesting sentence - each container owns its own manager, so panels compose freely - is what lifts the answer from a list to a design argument.",
            ],
            keyTerms: [
              { term: "FlowLayout", definition: "Left-to-right in natural size, wrapping rows - default for Panel and Applet." },
              { term: "GridLayout", definition: "Equal rows-by-columns cells; every child stretched to fill." },
              { term: "BorderLayout", definition: "Five named regions with CENTER taking the leftover - default for Frame." },
              { term: "CardLayout", definition: "Stacks children as cards; one visible at a time via next()/show()." },
              { term: "setBounds", definition: "Absolute x, y, width, height placement - only valid with setLayout(null)." },
            ],
            table: {
              caption: "The four layout managers.",
              headers: ["Manager", "Placement rule", "Default for", "Typical use"],
              rows: [
                ["FlowLayout", "left to right, wrap to next row", "Panel, Applet", "forms, toolbars"],
                ["GridLayout", "equal cells, children stretched", "none", "calculators, keypads"],
                ["BorderLayout", "five regions, CENTER takes leftover", "Frame", "application shells"],
                ["CardLayout", "stack of cards, one visible", "none", "wizards, step panels"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "FlowLayout vs BorderLayout",
              caption: "Sequence versus regions - the two managers every program ends up mixing.",
              left: {
                heading: "FlowLayout",
                items: [
                  "Children in source order, natural sizes",
                  "Wraps to a new row at the edge",
                  "Gaps controlled in the constructor",
                  "Forms, toolbars, control strips",
                ],
              },
              right: {
                heading: "BorderLayout",
                items: [
                  "Five named regions: N, S, E, W, Center",
                  "Center absorbs all resizing space",
                  "add(child, \"North\") positions by string",
                  "Application shells: toolbar, work area, status",
                ],
              },
            },
            bullets: [
              "setLayout(manager) delegates all positioning to a policy object.",
              "FlowLayout: sequence and wrap; default for Panel and Applet.",
              "GridLayout: uniform cells - children resize to fit their cell.",
              "BorderLayout: N/S/E/W/Center; default for Frame; center takes the leftover.",
              "CardLayout: one visible card; first(), next(), show() navigate.",
              "setLayout(null) + setBounds is legal but breaks on resize and other fonts.",
            ],
            callout: {
              type: "warning",
              title: "setLayout(null) is a trap",
              body: "Absolute setBounds coordinates look easier and die on the first resize, font change or DPI difference - the UI hardens into one machine's geometry. The exam probe 'why not position everything with setBounds?' expects exactly that sentence: portability and resize-responsiveness die, and managers exist to prevent it.",
            },
            examQuestions: [
              {
                q: "Explain FlowLayout, GridLayout, BorderLayout and CardLayout with diagrams. State the default layout of a Frame and a Panel, and write a program nesting a GridLayout of buttons inside the CENTER region of a BorderLayout frame.",
                marks: 14,
                outline: [
                  "FlowLayout: left-to-right, wrap; default for Panel/Applet.",
                  "GridLayout: rows x columns of equal stretched cells.",
                  "BorderLayout: five regions, CENTER takes leftover; default for Frame.",
                  "CardLayout: stacked cards, one visible; next()/show() navigate.",
                  "Program: frame.setLayout(new BorderLayout());",
                  "Panel keys = new Panel(new GridLayout(4, 3)); fill with buttons.",
                  "frame.add(keys, \"Center\"); setSize; setVisible(true).",
                ],
              },
              {
                q: "Why does Java need layout managers instead of absolute positioning? What are the risks of setLayout(null)?",
                marks: 7,
                outline: [
                  "Window sizes, fonts and DPI differ across machines.",
                  "Managers recompute positions on resize - UIs stay usable.",
                  "setLayout(null) freezes coordinates with setBounds(x, y, w, h).",
                  "Risk: overlapping or clipped controls on any other machine.",
                  "Nesting panels with different managers composes complex screens.",
                ],
              },
            ],
          },
          {
            number: "2.4",
            title: "The event delegation model",
            body: [
              "Java's event handling has three actors. The event source is the component where something happens - a Button, a TextField. The event object is a snapshot of what happened, an instance of a subclass of AWTEvent carrying getSource() and its own data (getActionCommand() for buttons, getKeyCode() for keys). The event listener is an object implementing the matching listener interface, registered with the source via addXxxListener(). On a user action the source creates the event object and invokes the appropriate handler method on every registered listener - the source delegates the handling, hence the delegation model.",
              "The syllabus names three styles. Ignoring the event: no listener registered, the event fires and is simply discarded - the silent default for most components. Self-contained events: the source handles its own events, typically the frame class implementing ActionListener and registering itself with b.addActionListener(this) - compact, but couples UI construction to application logic. Delegating events: a separate listener class (SaveHandler implements ActionListener) does the handling - the preferred style, because one source can feed several independent listeners and the logic can change without touching the window code.",
              "The worked trace: EventDemo registers this as the button's ActionListener; a click makes the AWT create an ActionEvent, walk the registered listeners, and call actionPerformed(e) on the event-dispatch thread, where e.getActionCommand() returns the button's label. Register two listeners and both are called. Everything the user does - click, key, focus, window close - flows through this same three-actor pipeline, which is why one diagram answers every event question in the unit.",
              "The exam asks 'explain the event delegation model with a diagram' and 'write a program handling a button click'. Draw source → event object → listeners with the registration arrow back, name the three actors, list the three styles with the one-line preference argument (separation of UI from logic, one source many listeners), and give the program with its trace.",
            ],
            keyTerms: [
              { term: "Event source", definition: "The component where the event occurs - it creates and fires the event object." },
              { term: "Event object", definition: "The snapshot subclass of AWTEvent: getSource(), getActionCommand(), coordinates, keys." },
              { term: "Event listener", definition: "An object implementing the listener interface, registered with addXxxListener()." },
              { term: "Registration", definition: "source.addActionListener(l) - the wiring that makes handling happen." },
              { term: "Event-dispatch thread", definition: "The single AWT thread on which all handler methods run." },
            ],
            codeExample: {
              language: "java",
              caption: "EventDemo.java - source, listener, handler",
              code: `import java.awt.*;
import java.awt.event.*;

public class EventDemo implements ActionListener {
    Frame f;
    Button b;

    EventDemo() {
        f = new Frame("Delegation");
        b = new Button("Click");
        b.addActionListener(this);       // register listener with the source
        f.add(b);                        // self-contained style: this handles it
        f.setSize(200, 120);
        f.setVisible(true);
    }

    public void actionPerformed(ActionEvent e) {   // runs on the event thread
        System.out.println("source was " + e.getActionCommand());
    }                                    // prints: source was Click

    public static void main(String[] args) {
        new EventDemo();
    }
}`,
            },
            diagram: {
              kind: "flow",
              title: "One click through the delegation model",
              caption: "The source fires; every registered listener hears it.",
              steps: [
                { label: "User clicks the Button", note: "the event source" },
                { label: "Source creates ActionEvent", note: "getSource(), getActionCommand()" },
                { label: "Dispatch to registered listeners", note: "added via addActionListener" },
                { label: "actionPerformed(e) runs", note: "on the event-dispatch thread" },
                { label: "Handler updates state or UI", note: "no listener - the event is discarded" },
              ],
            },
            bullets: [
              "Three actors: source, event object, listener - registration is the wiring.",
              "Ignoring the event: no listener, the event dies silently.",
              "Self-contained: the source handles its own events (addActionListener(this)).",
              "Delegating: separate listener objects - preferred, one source feeds many listeners.",
              "Handlers run on the event-dispatch thread, serialized with all other UI work.",
              "The same pipeline carries clicks, keys, focus, items and window events.",
            ],
            callout: {
              type: "tip",
              title: "One source, many listeners",
              body: "The delegation model's real payoff over self-contained handling: a Button can feed a logger, a validator and the save logic simultaneously, and each listener changes without touching the frame. That sentence is the expected answer to 'why is delegation preferred over self-contained events?'.",
            },
            examQuestions: [
              {
                q: "Explain Java's event delegation model: event source, event object and event listener. Describe ignoring the event, self-contained events and delegating events, and justify why delegation is preferred.",
                marks: 14,
                outline: [
                  "Source: the component where the action happens; fires event objects.",
                  "Event object: AWTEvent subclass with getSource() and event-specific data.",
                  "Listener: implements the interface, registered via addXxxListener().",
                  "Ignoring: no listener registered - the event is discarded.",
                  "Self-contained: the source class implements its own listener (addActionListener(this)).",
                  "Delegating: separate listener objects handle the events.",
                  "Delegation wins: separation of UI and logic; one source, many listeners.",
                ],
              },
              {
                q: "Write a program where clicking a Button prints its action command, and trace what happens between the click and the printed line.",
                marks: 7,
                outline: [
                  "Frame + Button built; b.addActionListener(this) registers the listener.",
                  "Click: the AWT creates an ActionEvent on the source.",
                  "Registered listeners are called on the event-dispatch thread.",
                  "actionPerformed(e) reads e.getActionCommand() - the button label.",
                  "println executes; without registration nothing would happen.",
                ],
              },
            ],
          },
          {
            number: "2.5",
            title: "Event classes, listener interfaces and adapter classes",
            body: [
              "The event classes form a hierarchy rooted outside AWT: Object → EventObject (java.util, contributing getSource()) → AWTEvent (java.awt, adding an event id) → the leaf classes the syllabus lists: ActionEvent, AdjustmentEvent, ContainerEvent, FocusEvent, ItemEvent, KeyEvent, MouseEvent, TextEvent and WindowEvent. Each leaf carries its own data: MouseEvent has getX(), getY() and getClickCount(); KeyEvent has getKeyCode(); ActionEvent has getActionCommand() and getModifiers(); WindowEvent identifies which of the seven window operations fired it.",
              "Listener interfaces pair with the events. ActionListener (actionPerformed) and ItemListener (itemStateChanged) have one method; FocusListener has two (focusGained, focusLost); KeyListener three (keyPressed, keyReleased, keyTyped); MouseListener five (clicked, pressed, released, entered, exited) with MouseMotionListener two more (dragged, moved); WindowListener seven; ContainerListener two (componentAdded, componentRemoved); AdjustmentListener and TextListener one each. The syllabus's 'relationship between interface, methods called, parameters and event source' is exactly this pairing: the source's addXxxListener accepts the interface, and invokes each of its methods with a parameter of the matching event class.",
              "Adapter classes solve the padding problem: WindowAdapter, MouseAdapter, KeyAdapter and FocusAdapter implement every method of their interface with an empty body, so you extend the adapter and override only what you need. Implementing WindowListener directly forces seven methods even when you want only windowClosing - four of them empty. No adapter exists for one-method interfaces such as ActionListener: there is nothing to pad.",
              "The exam asks 'draw the event class hierarchy' (layers diagram), 'what is an adapter class' (definition plus the WindowAdapter example plus why ActionListener has none), and the table of event classes with their interfaces, key methods and firing components - the three artifacts together are the complete answer. Add one interface-parameter sentence - every listener method takes its own event class as the parameter, which is the syllabus's 'relationship between interface, methods called, parameters and event source' - and the rubric is fully covered.",
            ],
            keyTerms: [
              { term: "EventObject", definition: "java.util root of all events; supplies getSource()." },
              { term: "AWTEvent", definition: "java.awt mid-layer adding the event id; parent of all AWT event classes." },
              { term: "MouseListener", definition: "Five-method interface - the reason MouseAdapter exists." },
              { term: "WindowListener", definition: "Seven-method interface: opened, closing, closed, iconified, deiconified, activated, deactivated." },
              { term: "Adapter class", definition: "Empty implementation of a multi-method listener; extend it, override only what you need." },
            ],
            table: {
              caption: "Event class - listener interface - key methods - fired by.",
              headers: ["Event class", "Listener interface", "Key methods", "Fired by"],
              rows: [
                ["ActionEvent", "ActionListener", "actionPerformed", "Button, MenuItem, TextField (Enter)"],
                ["ItemEvent", "ItemListener", "itemStateChanged", "Checkbox, Choice, List"],
                ["MouseEvent", "MouseListener + MouseMotionListener", "clicked, pressed, dragged, moved", "any component"],
                ["KeyEvent", "KeyListener", "keyPressed, keyTyped, keyReleased", "TextField, TextArea, frames"],
                ["WindowEvent", "WindowListener", "windowOpened..windowClosed (7)", "Frame, Dialog"],
                ["FocusEvent", "FocusListener", "focusGained, focusLost", "any focusable component"],
                ["TextEvent", "TextListener", "textValueChanged", "TextField, TextArea"],
                ["AdjustmentEvent", "AdjustmentListener", "adjustmentValueChanged", "Scrollbar"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "The event class hierarchy",
              caption: "Every leaf inherits getSource() from EventObject and an id from AWTEvent.",
              layers: [
                { label: "EventObject (java.util)", note: "getSource() - every event knows its source" },
                { label: "AWTEvent (java.awt)", note: "event id, consumed flag" },
                { label: "ActionEvent | MouseEvent | KeyEvent | WindowEvent | ...", note: "typed data: commands, coordinates, key codes" },
              ],
            },
            bullets: [
              "Hierarchy: Object → EventObject → AWTEvent → the nine leaf event classes.",
              "One-method interfaces: Action, Item, Text, Adjustment; multi-method: Mouse (5), Window (7), Key (3).",
              "Interface methods take the matching event class as their parameter.",
              "Adapters: WindowAdapter, MouseAdapter, KeyAdapter, FocusAdapter - empty bodies.",
              "Extending MouseAdapter to override only mouseClicked beats five empty methods.",
              "No adapter for ActionListener - a one-method interface has nothing to pad.",
            ],
            callout: {
              type: "warning",
              title: "WindowListener demands seven methods",
              body: "implements WindowListener forces all seven methods even for a plain close-the-window program - four would be empty. extends WindowAdapter overrides only windowClosing. And the follow-up probe: no adapter exists for ActionListener because a one-method interface needs no padding.",
            },
            examQuestions: [
              {
                q: "Draw the event class hierarchy from EventObject to the leaf classes. For any four event classes, name the listener interface, its key methods and the component that fires it. Explain adapter classes with WindowAdapter.",
                marks: 14,
                outline: [
                  "Object → EventObject (getSource) → AWTEvent (id) → leaf classes.",
                  "ActionEvent/ActionListener/actionPerformed - Button.",
                  "MouseEvent/MouseListener/pressed, clicked, dragged - any component.",
                  "KeyEvent/KeyListener/keyPressed, Typed, Released - text components.",
                  "WindowEvent/WindowListener/seven methods - Frame, Dialog.",
                  "Adapter: WindowAdapter implements all seven empty; subclass overrides one.",
                  "No adapter for one-method interfaces like ActionListener.",
                ],
              },
              {
                q: "Why do adapter classes exist only for some listener interfaces? Implement window closing both with WindowListener and with WindowAdapter, and compare the code.",
                marks: 7,
                outline: [
                  "Adapters pad multi-method interfaces with empty bodies.",
                  "WindowListener: seven methods, most empty - verbose.",
                  "WindowAdapter: extend and override only windowClosing.",
                  "ActionListener has one method - nothing to pad, no adapter exists.",
                  "Anonymous adapter subclasses are the usual compact form.",
                ],
              },
            ],
          },
          {
            number: "2.6",
            title: "Applets - hierarchy, life cycle, security and HTML tags",
            body: [
              "The applet's class hierarchy: Object → Component → Container → Panel → Applet (java.applet) → JApplet (Swing). An applet is therefore a Panel that a browser or appletviewer hosts - it has no main(); the host drives it. Five methods run the life: init() executes once when the applet loads (read parameters, build the UI); start() runs after init() and again on every return to the page (resume animation, threads); paint(Graphics g) redraws whenever the display needs it; stop() runs when the page is left (suspend work); destroy() runs once at unload (final release).",
              "The worked trace: LifeApplet implements all five, and the HTML tag <applet code=\"LifeApplet.class\" width=200 height=80><param name=\"user\" value=\"asha\"></applet> embeds and parameterizes it. Run appletviewer LifeApplet.html: init prints once, start prints, paint draws \"Hi asha\" using getParameter(\"user\"); switch windows away - stop; return - start again; close the viewer - destroy. Refreshing the drawing goes through repaint(), which schedules update() and then paint() on the AWT thread: never call paint(g) directly.",
              "Security restrictions are the price of downloadable code. A sandboxed applet cannot read or write local files, cannot open network connections except back to its origin host (the server it was loaded from), cannot execute local programs or load native libraries, cannot read most system properties, and cannot make native method calls - violations throw SecurityException. The rationale: the code arrives from an untrusted web page, so the browser confines it to memory and computation, with the origin host as its only conversation partner.",
              "The exam asks 'explain the applet life cycle with a diagram' (the cycle, with which methods repeat and which run once), 'HTML tags for applets' (code, width, height, align, and <param> for parameters), and 'applet security restrictions' (the list plus the origin-host rule). The lifecycle trace with window switching is what turns the diagram into a full-mark answer. Mark once-versus-many on the diagram itself: init and destroy carry an arrow labelled once, start, paint and stop carry per-visit arrows.",
            ],
            keyTerms: [
              { term: "Applet", definition: "A Panel hosted by a browser - no main(); the host drives init/start/paint/stop/destroy." },
              { term: "init()", definition: "Runs once at load: read parameters, build the UI." },
              { term: "start() / stop()", definition: "Run on every page entry and exit - resume and suspend ongoing work." },
              { term: "repaint()", definition: "The correct way to request redrawing - schedules update() then paint()." },
              { term: "Sandbox", definition: "The applet's restrictions: no local I/O, origin-host-only network, no native code." },
            ],
            codeExample: {
              language: "java",
              caption: "LifeApplet.java - the five life-cycle methods and its HTML tag",
              code: `import java.applet.Applet;
import java.awt.Graphics;

/* <applet code="LifeApplet.class" width="200" height="80">
      <param name="user" value="asha">
   </applet> */
public class LifeApplet extends Applet {
    public void init() {
        System.out.println("init - once, at load");
    }

    public void start() {
        System.out.println("start - page shown");
    }

    public void paint(Graphics g) {
        g.drawString("Hi " + getParameter("user"), 20, 20);
    }

    public void stop() {
        System.out.println("stop - page left");
    }

    public void destroy() {
        System.out.println("destroy - unloaded");
    }
}
// run: appletviewer LifeApplet.html   (the tag sits in the HTML page)`,
            },
            diagram: {
              kind: "cycle",
              title: "The applet life cycle",
              caption: "init and destroy run once; start, paint and stop repeat with every page visit.",
              steps: [
                { label: "init()", note: "once - load, read params, build UI" },
                { label: "start()", note: "page shown or revisited" },
                { label: "paint()", note: "redraw as needed" },
                { label: "stop()", note: "page hidden" },
                { label: "destroy()", note: "once - unload" },
              ],
            },
            bullets: [
              "Hierarchy: Object → Component → Container → Panel → Applet → JApplet.",
              "init() and destroy() run once; start()/stop() repeat on page visits.",
              "paint(Graphics) redraws; call repaint(), never paint() directly.",
              "getParameter(\"user\") reads the <param> tag's value.",
              "Sandbox: no local files, no foreign hosts, no programs, no native libraries.",
              "Embedded with <applet code width height> plus <param name value> tags.",
            ],
            callout: {
              type: "exam",
              title: "Never call paint directly - call repaint()",
              body: "Calling paint(g) yourself draws once on the current thread and skips the update cycle. repaint() schedules update() followed by paint() on the AWT thread - the correct request path. Examiners reward the sentence 'paint is called for you; repaint requests it', and it connects directly to the event-dispatch thread of 2.4.",
            },
            examQuestions: [
              {
                q: "Explain the life cycle of an applet with a diagram, giving the role of init, start, paint, stop and destroy and when each is invoked. Include the HTML tags used to embed and parameterize the applet.",
                marks: 14,
                outline: [
                  "Hierarchy: Panel under Component/Container - Applet extends Panel.",
                  "init(): once at load - parameters read, UI built.",
                  "start(): after init and on each return to the page; stop(): on leaving.",
                  "paint(Graphics): every redraw; requested via repaint().",
                  "destroy(): once at unload.",
                  "Trace: init, start, paint, (stop, start on window switch), destroy.",
                  "HTML: <applet code width height> with <param name value> inside.",
                ],
              },
              {
                q: "List the security restrictions imposed on applets and justify why the sandbox exists.",
                marks: 7,
                outline: [
                  "No reading or writing local files.",
                  "Network connections only to the origin host.",
                  "No executing local programs or loading native libraries.",
                  "No reading most system properties; no native method calls.",
                  "Rationale: code from an untrusted page must be confined - the origin host is its only partner.",
                ],
              },
              {
                q: "Differentiate init() from start() and stop() from destroy(), tracing the calls when the user switches windows and closes the viewer.",
                marks: 7,
                outline: [
                  "init: once at load; start: every page entry.",
                  "stop: every page exit; destroy: final unload.",
                  "Switch away: stop; return: start again - start repeats.",
                  "Close viewer: destroy once - init never repeats.",
                  "Animation/threads resume in start, suspend in stop.",
                ],
              },
            ],
          },
          {
            number: "2.7",
            title: "Introduction to Swing",
            body: [
              "Swing (javax.swing) is the successor UI library to AWT. Its components are lightweight: painted by Java onto a surface, with no OS peer widget - AWT's components are heavyweight peers. Names gain a J: JFrame, JPanel, JButton, JLabel, JTextField, JCheckBox. The set is far richer than the AWT's least-common-denominator widgets: JTable, JTree, JTabbedPane, JSlider, JToolBar. Every Swing component supports pluggable look and feel - one call swaps the entire skin (Metal, Windows, Motif) at runtime - and painting is double-buffered for flicker-free updates.",
              "The worked application: JFrame f = new JFrame(\"Swing\"); JButton b = new JButton(\"Count\"); b.addActionListener(e -> System.out.println(\"clicked\")); - note the lambda listener, the modern compact form of the anonymous ActionListener class of 2.4; the event model itself is identical. The classic placement rule: f.getContentPane().add(b) - Swing adds to the frame's content pane, a JPanel layer holding everything except the menubar. f.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE) replaces the window-closing listener plumbing that AWT needed via WindowAdapter.",
              "Architecture is the theory half: Swing components follow MVC - the model holds the state, the view paints it, the controller interprets input; Swing merges view and controller into one UI-delegate object (the model-delegate pattern), which is what lets the same JButton model render under any installed look and feel. Building applications follows a containment ladder: top-level containers (JFrame, JDialog, JApplet) → intermediate containers (JPanel, JScrollPane) → atomic components - nested with the same layout managers as AWT.",
              "The exam asks 'compare AWT and Swing' (the table: weight, peers, look-and-feel, component richness, MVC, placement rule) and 'build an application using Swing' (the demo above). Connect back twice: the event delegation model is unchanged from 2.4, and the layout managers are unchanged from 2.3 - Swing replaces the components, not the framework. The MVC sub-question usually rides along: name model, view, controller, then the UI delegate as the merged pair that makes pluggable look and feel possible.",
            ],
            keyTerms: [
              { term: "Lightweight component", definition: "Painted by Java with no OS peer - Swing's defining property." },
              { term: "Pluggable look and feel", definition: "One call swaps the whole skin (Metal, Windows, Motif) at runtime." },
              { term: "Content pane", definition: "The frame's JPanel layer where Swing components are added." },
              { term: "MVC", definition: "Model holds state, view paints, controller interprets; Swing's UI delegate merges view+controller." },
              { term: "JFrame", definition: "Swing's top-level window - JApplet and JDialog are the other top-levels." },
            ],
            table: {
              caption: "AWT vs Swing, with the component mapping.",
              headers: ["Aspect", "AWT", "Swing"],
              rows: [
                ["Package", "java.awt", "javax.swing"],
                ["Weight", "heavyweight - OS peer per component", "lightweight - painted by Java"],
                ["Look and feel", "varies with the OS", "pluggable at runtime"],
                ["Component set", "least common denominator", "JTable, JTree, JTabbedPane, JSlider..."],
                ["Architecture", "peer-based", "MVC with UI delegate"],
                ["Placement", "frame.add(c)", "frame.getContentPane().add(c)"],
                ["Examples", "Button, Label", "JButton, JLabel"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "AWT vs Swing",
              caption: "Peers versus painting - and everything else follows from that one choice.",
              left: {
                heading: "AWT",
                items: [
                  "Heavyweight: an OS peer behind each widget",
                  "Look varies with the platform",
                  "Smallest common widget set",
                  "add() directly on the container",
                ],
              },
              right: {
                heading: "Swing",
                items: [
                  "Lightweight: painted by Java, no peers",
                  "Pluggable look and feel at runtime",
                  "Rich components: JTable, JTree, JSlider",
                  "MVC with UI delegate; content pane placement",
                ],
              },
            },
            bullets: [
              "Swing = javax.swing; names gain J: JFrame, JButton, JLabel, JTextField.",
              "Lightweight components are Java-painted - no OS peers, one look everywhere possible.",
              "Pluggable look and feel swaps skins at runtime; painting is double-buffered.",
              "Components are added to the content pane, not the frame directly.",
              "MVC: model (state), view (paint), controller (input) - merged as UI delegate.",
              "Event delegation and layout managers carry over unchanged from AWT.",
            ],
            callout: {
              type: "tip",
              title: "The content pane is the exam answer",
              body: "frame.getContentPane().add(child) is the architecturally correct placement - the content pane is a JPanel layer of the frame holding everything but the menubar. Recent JDKs accept frame.add(child) directly, but the classic exam answer (and the real structure) is the content pane - say it and earn the mark.",
            },
            examQuestions: [
              {
                q: "What is Swing? Compare AWT and Swing on weight, peers, look-and-feel, component set and architecture, and write a Swing application with a JFrame and a button whose clicks are counted.",
                marks: 14,
                outline: [
                  "Swing = javax.swing, lightweight Java-painted components.",
                  "AWT heavyweight peers vs Swing no peers - look follows from this.",
                  "Pluggable look and feel at runtime; richer set: JTable, JTree, JSlider.",
                  "MVC with UI delegate; components placed on the content pane.",
                  "Program: JFrame, JButton, getContentPane().add(b).",
                  "Lambda or anonymous ActionListener increments a counter.",
                  "setDefaultCloseOperation(EXIT_ON_CLOSE); setSize; setVisible(true).",
                ],
              },
              {
                q: "Explain the MVC architecture of Swing components and the roles of the UI delegate and the content pane.",
                marks: 7,
                outline: [
                  "Model: the state (selected, text, enabled).",
                  "View: paints the model; Controller: interprets input.",
                  "Swing merges view+controller into one UI delegate object.",
                  "Delegates are swappable - that is pluggable look and feel.",
                  "The content pane is the placement layer of top-level containers.",
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
      title: "Multithreading and Exception Handling",
      summary:
        "Unit III makes programs concurrent and robust: simple threads and the two ways of creating them, the thread life cycle, synchronization with locks, synchronized methods and blocks, scheduling and priorities, the producer-consumer relationship, daemon threads, and the complete exception story - stack-based execution and propagation, exception types, try-catch-finally, the throw statement and assertions.",
      chapter: {
        number: "03",
        title: "Concurrency and Failure",
        intro:
          "Unit III covers the overview of simple threads and multithreaded programming, the thread life cycle, creating threads by extending Thread and by implementing Runnable, thread synchronization with locks, synchronized methods and synchronized blocks, thread scheduling, the producer-consumer relationship, daemon threads, the basic idea of exception handling, stack-based execution and exception propagation, exception types, try, catch, finally, the throw statement and assertions.",
        inOneBreath:
          "A thread is an independent call stack: start() creates it and run() fills it, and the scheduler picks among runnable threads. Shared mutable data needs a lock - synchronized methods and blocks make read-modify-write sequences atomic, and wait/notify coordinates producer against consumer. Exceptions are objects thrown up the call stack until some catch matches; checked ones must be caught or declared, finally always runs, and assertions verify internal invariants when -ea is enabled.",
        sections: [
          {
            number: "3.1",
            title: "Simple threads and the thread life cycle",
            body: [
              "A thread is a lightweight unit of execution with its own call stack, sharing the process's heap with every other thread. Every Java program starts with one: the main thread that runs main(). Multithreaded programming overlaps work - a UI stays responsive while data loads, several sockets are served at once. Java gives two creation routes. Extend Thread and override run(), then start an instance; or implement Runnable - the preferred route, because it does not spend the class's single extends and separates the task (what runs) from the runner (the Thread that executes it): new Thread(runnable).start().",
              "The worked example runs both routes at once: CountUp implements Runnable counting 1..3, CountDown extends Thread counting 3..1; main starts both and keeps going. Three call stacks interleave, and the output order genuinely varies from run to run - the visible proof of concurrency. The critical distinction: t.start() asks the JVM to build a NEW call stack and invoke run() on the new thread; calling t.run() directly executes the body on the CURRENT thread - correct-looking code with zero concurrency, and the most-repeated exam trap in this unit.",
              "The life cycle has five states. New: created, not yet started. Runnable: start() called, ready and waiting for the scheduler. Running: the scheduler's current pick, executing run(). Blocked/Waiting: paused by sleep(ms), wait(), an unfinished I/O, or a lock it cannot get; it returns to Runnable when the cause clears. Dead: run() returned or an exception escaped; a dead thread cannot restart - calling start() again throws IllegalThreadStateException. sleep() is static and pauses the current thread while keeping any locks it holds; wait() (section 3.3) is the instance method that releases the monitor.",
              "The exam asks 'define thread; explain the life cycle with a diagram; the two ways of creating threads'. Draw the five-state cycle, write the two-route program, and give the start-versus-run sentence explicitly - it is the differentiator between a memorized answer and an understood one. Two state details pad the diagram marks: start() moves a thread from New to Runnable, never straight to Running, and a Dead thread cannot re-enter the cycle - a second start() throws IllegalThreadStateException.",
            ],
            keyTerms: [
              { term: "Thread", definition: "A lightweight execution unit with its own call stack, sharing the heap." },
              { term: "Runnable", definition: "The task interface whose run() a Thread executes - creation without spending extends." },
              { term: "start()", definition: "Creates the new call stack and runs the task on it; never call run() directly." },
              { term: "Thread scheduler", definition: "The JVM mechanism picking which runnable thread runs - partly platform-dependent." },
              { term: "IllegalThreadStateException", definition: "Thrown by start() on a thread that already started or died." },
            ],
            codeExample: {
              language: "java",
              caption: "ThreadDemo.java - both creation routes, interleaved",
              code: `class CountUp implements Runnable {   // way 1: implement Runnable
    public void run() {
        for (int i = 1; i <= 3; i++) System.out.println("up " + i);
    }
}

class CountDown extends Thread {      // way 2: extend Thread
    public void run() {
        for (int i = 3; i >= 1; i--) System.out.println("down " + i);
    }
}

public class ThreadDemo {
    public static void main(String[] args) {
        new Thread(new CountUp()).start();  // start(), never run()
        new CountDown().start();            // three call stacks interleave
        System.out.println("main keeps going");
    }
}
// output order varies between runs - that variance IS the concurrency`,
            },
            diagram: {
              kind: "cycle",
              title: "The thread life cycle",
              caption: "start() moves a thread out of New; sleep, wait or a lock can park it; run() returning kills it.",
              steps: [
                { label: "New", note: "created, not started" },
                { label: "Runnable", note: "start() called; awaiting the scheduler" },
                { label: "Running", note: "run() executing on the CPU" },
                { label: "Blocked / Waiting", note: "sleep, wait, I/O, or lock unavailable" },
                { label: "Dead", note: "run() returned; start() again throws" },
              ],
            },
            bullets: [
              "A thread = its own call stack over the shared heap; main() runs on the main thread.",
              "Create by extending Thread or by implementing Runnable (preferred).",
              "start() builds the new stack; run() called directly stays on the current thread.",
              "Life cycle: New → Runnable → Running → Blocked/Waiting → Dead.",
              "A dead thread cannot restart - second start() throws IllegalThreadStateException.",
              "sleep() is static and keeps locks; wait() releases the monitor.",
            ],
            callout: {
              type: "warning",
              title: "run() on main, start() on the new thread",
              body: "t.run() executes the loop body on the CURRENT thread: a sequential program wearing a thread costume, with no concurrency and no new stack. Only t.start() makes the JVM create the call stack and invoke run() there. State this distinction explicitly - it decides the top mark of the thread question.",
            },
            examQuestions: [
              {
                q: "What is a thread? Explain the thread life cycle with a diagram and the two ways of creating threads, writing a program that uses both. Why must start() be called instead of run()?",
                marks: 14,
                outline: [
                  "Thread = lightweight execution unit with its own call stack over shared heap.",
                  "Life cycle: New, Runnable, Running, Blocked/Waiting, Dead - drawn as a cycle.",
                  "Route 1: extend Thread, override run(), new CountDown().start().",
                  "Route 2: implement Runnable, wrap in new Thread(task).start() - preferred.",
                  "start() creates the new call stack; the JVM invokes run() on it.",
                  "run() called directly executes on the current thread - no concurrency.",
                  "Dead threads cannot restart: second start() throws IllegalThreadStateException.",
                ],
              },
              {
                q: "Compare extending Thread with implementing Runnable. Which is preferred and why?",
                marks: 7,
                outline: [
                  "Extending Thread spends the class's single extends.",
                  "Runnable separates the task from the runner - the class stays free.",
                  "One Runnable object can be shared by several threads.",
                  "Extend Thread only to modify Thread behaviour itself.",
                  "Both end in the same life cycle and the same start() call.",
                ],
              },
            ],
          },
          {
            number: "3.2",
            title: "Synchronization - locks, synchronized methods and blocks",
            body: [
              "A race condition is two threads interleaving over shared data with lost updates. count++ is three machine steps - read the field, add one, write it back - and two threads interleaving can both read the same old value and write one increment total. The worked demonstration: two threads each incrementing 10000 times. Without synchronization the printout is something like 17342, different every run; with synchronization it is 20000 every run. Interleaving is not a bug in the code's logic but in its atomicity - which is exactly what synchronization restores.",
              "The mechanism is the monitor: every object has one built-in lock. A thread must acquire the object's monitor before entering synchronized code on it and releases it on exit; other threads block until then - one thread inside the critical section at a time. Two forms on the syllabus: the synchronized method (synchronized void inc() locks THIS object's monitor; synchronized static locks the Class object, protecting static state) and the synchronized block (synchronized (lockObject) { ... }), which lets you choose which lock to take and shrink the critical section to just the shared-data statements - the performance-conscious form.",
              "Reentrancy is the subtle property that makes the design workable: a thread already holding a monitor may re-enter synchronized code on the same object - otherwise a synchronized method calling another synchronized method on this would deadlock instantly. One rule connects to 3.3: wait(), notify() and notifyAll() may only be called while holding the object's monitor - calling them outside synchronized code throws IllegalMonitorStateException.",
              "The exam asks 'what is a race condition; explain synchronization with an example' and 'synchronized method versus synchronized block'. Show the unsynchronized trace losing updates with two varying totals, then add the keyword and show the stable 20000, name which lock each form takes (instance monitor vs Class object vs chosen lock object), and state reentrancy. One more line completes it: the lock releases on exit even when an exception leaves the critical section, which is why synchronized never leaks a hold the way hand-rolled flags can.",
            ],
            keyTerms: [
              { term: "Race condition", definition: "Interleaved threads losing updates over shared data - correctness depends on timing." },
              { term: "Monitor / lock", definition: "Every object's built-in lock; held while inside its synchronized code." },
              { term: "Critical section", definition: "The code that must run atomically - one thread at a time." },
              { term: "Reentrancy", definition: "A thread holding a monitor may re-enter its own synchronized code." },
              { term: "static synchronized", definition: "Locks the Class object - the guard for static (class-level) state." },
            ],
            codeExample: {
              language: "java",
              caption: "SyncDemo.java - the race, then the fix",
              code: `class Counter {
    private int count = 0;

    synchronized void inc() {        // locks THIS object's monitor
        count++;                     // read-modify-write: must be atomic
    }

    int get() { return count; }
}

class Adder implements Runnable {
    Counter c;
    Adder(Counter c) { this.c = c; }
    public void run() {
        for (int i = 0; i < 10000; i++) c.inc();
    }
}

public class SyncDemo {
    public static void main(String[] args) throws InterruptedException {
        Counter c = new Counter();
        Thread t1 = new Thread(new Adder(c));
        Thread t2 = new Thread(new Adder(c));
        t1.start(); t2.start();
        t1.join(); t2.join();
        System.out.println(c.get()); // 20000 - unsynchronized: varies, e.g. 17342
    }
}
// block form: synchronized(this) { count++; }  or a dedicated lock object`,
            },
            diagram: {
              kind: "flow",
              title: "One monitor, one entrant",
              caption: "Acquire, run, release - everyone else waits at the door.",
              steps: [
                { label: "Thread reaches synchronized code", note: "on object O" },
                { label: "Lock free?", note: "yes: acquire O's monitor; no: block" },
                { label: "Critical section runs", note: "count++ atomically" },
                { label: "Exit releases the lock", note: "even on exception" },
                { label: "Waiting threads compete", note: "scheduler picks the next entrant" },
              ],
            },
            bullets: [
              "count++ is three steps; interleaving loses updates - the race condition.",
              "Every object has one monitor; synchronized code acquires it on entry.",
              "synchronized method locks this; synchronized static locks the Class object.",
              "synchronized (lock) { ... } chooses the lock and shrinks the critical section.",
              "Reentrant: a thread may re-enter its own monitor without deadlocking.",
              "wait/notify require holding the monitor - outside, IllegalMonitorStateException.",
            ],
            callout: {
              type: "exam",
              title: "Say which lock each form takes",
              body: "Instance synchronized methods lock the object's own monitor; synchronized static methods lock the Class object; a synchronized block locks whatever object you hand it. Three forms, three different locks - stating which is which is the mark-separator in synchronization questions, and the block's finer granularity is the performance argument.",
            },
            examQuestions: [
              {
                q: "What is a race condition? Explain locks, synchronized methods and synchronized blocks with a two-thread counter example that fails unsynchronized and succeeds synchronized.",
                marks: 14,
                outline: [
                  "count++ is read-modify-write; interleaving loses increments.",
                  "Unsynchronized demo: two threads x 10000 - totals vary (e.g. 17342).",
                  "Every object carries one monitor lock acquired on synchronized entry.",
                  "synchronized void inc() locks this - the fix gives 20000 every run.",
                  "Block form: synchronized(lockObject) { ... } - chosen lock, smaller section.",
                  "static synchronized locks the Class object for static state.",
                  "Reentrancy: a thread may re-enter its own monitor safely.",
                ],
              },
              {
                q: "Explain reentrancy and the difference between synchronizing on an instance, on a dedicated lock object and on the Class object.",
                marks: 7,
                outline: [
                  "Reentrant: holding a monitor permits re-entry into its synchronized code.",
                  "Without it, synchronized methods calling each other would self-deadlock.",
                  "Instance lock guards instance fields.",
                  "Dedicated lock object: finer granularity, private from callers.",
                  "Class object lock guards static fields across all instances.",
                ],
              },
            ],
          },
          {
            number: "3.3",
            title: "Thread scheduling and the producer-consumer relationship",
            body: [
              "Which runnable thread actually runs is the scheduler's decision, and it is deliberately vague - partly platform-dependent, so correct programs never depend on a particular pick. What the programmer gets: thread priorities, MIN_PRIORITY = 1, NORM_PRIORITY = 5 (the default), MAX_PRIORITY = 10, set with t.setPriority(n) as a hint the scheduler usually honours by preempting; and yield(), a hint that the current thread is willing to let another runnable thread of the same priority go. Time-sliced systems rotate equal-priority threads; no time slicing means one may starve another - the reason busy-wait loops are banned.",
              "The producer-consumer relationship is the syllabus's coordination pattern: a producer thread creates items, a consumer thread processes them, and a bounded buffer sits between them. The naive versions both fail - unsynchronized, they corrupt the buffer; busy-waiting (while (full) ; ) burns CPU. The correct version uses the monitor's condition methods: wait() releases the lock and parks the thread until notified; notify() wakes one waiter on the same object; notifyAll() wakes all. Producer: while (full) wait(); put the item; notify(). Consumer: while (empty) wait(); take the item; notify().",
              "The worked Buffer: put(int v) and get() are synchronized methods; each waits in a while loop on its condition, acts, then notify(). Two traces earn the marks: if the consumer runs first, it finds the buffer empty, wait()s - releasing the monitor so the producer can enter - and wakes when produced. And the reason the loop is while rather than if: after waking, another thread may have emptied the buffer again, and wakeups can be spurious - the condition must be re-tested under the re-acquired lock.",
              "The exam asks for the producer-consumer program (buffer class, both thread bodies, the output trace) as the 14-mark staple, and 'explain thread scheduling and priorities' as the 7-mark one. Daemon threads close the unit's cast: setDaemon(true) before start() makes a background servant - the JVM exits when only daemons remain (section 3.4 for the full treatment). In the trace, show both orders: consumer-first waits and releases the monitor, producer-first fills and notifies - either way the pair interleaves produced-consumed.",
            ],
            keyTerms: [
              { term: "Thread priority", definition: "1 to 10 hint (NORM = 5) via setPriority(); the scheduler usually, never certainly, honours it." },
              { term: "yield()", definition: "A hint that the current thread will let an equal-priority runnable thread proceed." },
              { term: "wait()", definition: "Releases the monitor and parks until notified - callable only inside synchronized code." },
              { term: "notify() / notifyAll()", definition: "Wake one or all waiters on the same object's monitor." },
              { term: "Spurious wakeup", definition: "A wait() may return without notify() - conditions must be re-tested in a while." },
            ],
            codeExample: {
              language: "java",
              caption: "PCDemo.java - producer and consumer coordinating on one buffer",
              code: `class Buffer {
    private int item;
    private boolean has = false;         // the condition flag

    synchronized void put(int v) {
        while (has) {                    // while, not if - re-test on wake
            try { wait(); } catch (InterruptedException e) { }
        }
        item = v; has = true;
        System.out.println("produced " + v);
        notify();                        // wake the consumer
    }

    synchronized int get() {
        while (!has) {
            try { wait(); } catch (InterruptedException e) { }
        }
        has = false;
        System.out.println("consumed " + item);
        notify();
        return item;
    }
}

public class PCDemo {
    public static void main(String[] args) {
        final Buffer b = new Buffer();
        new Thread() { public void run() { for (int i = 1; i <= 3; i++) b.put(i); } }.start();
        new Thread() { public void run() { for (int i = 1; i <= 3; i++) b.get(); } }.start();
    }
}
// interleaved output: produced 1 / consumed 1 / produced 2 / consumed 2 ...`,
            },
            diagram: {
              kind: "pipeline",
              title: "Producer - buffer - consumer",
              caption: "Both ends synchronize on the buffer; wait() parks, notify() wakes.",
              stages: [
                { label: "Producer thread", note: "creates items" },
                { label: "synchronized put()", note: "wait while full; add; notify" },
                { label: "Shared buffer", note: "item + has flag, one monitor" },
                { label: "synchronized get()", note: "wait while empty; remove; notify" },
                { label: "Consumer thread", note: "processes items" },
              ],
            },
            bullets: [
              "Scheduling is platform-dependent; priorities (1, 5, 10) and yield() are hints only.",
              "Busy-waiting burns CPU - coordination belongs to wait/notify.",
              "wait() releases the monitor; sleep() keeps it - the pairing that lets the other side in.",
              "Producer: while (full) wait(); put; notify(). Consumer: while (empty) wait(); take; notify().",
              "while, not if: re-test the condition after waking - spurious and stale wakeups happen.",
              "wait/notify/notifyAll are legal only while holding the object's monitor.",
            ],
            callout: {
              type: "warning",
              title: "wait in a while, never an if",
              body: "After waking, the condition may already be false again - another consumer emptied the buffer between notify() and re-acquiring the lock, and wakeups can be spurious. Re-test in a while under the re-acquired monitor. Pair it with the other classic: wait() releases the lock, sleep() does not - that difference is what makes the handshake possible.",
            },
            examQuestions: [
              {
                q: "Explain thread scheduling, priorities and the yield() method. Then write the producer-consumer program using wait() and notify(), explaining why the waiting condition is tested in a while loop.",
                marks: 14,
                outline: [
                  "The scheduler picks runnable threads; platform-dependent - programs must not rely on it.",
                  "Priorities 1..10, NORM = 5, setPriority as a hint; yield() lets equals proceed.",
                  "Producer puts, consumer takes, bounded buffer between them.",
                  "synchronized put(): while (full) wait(); add; notify().",
                  "synchronized get(): while (empty) wait(); remove; notify().",
                  "while, not if: re-test after wake - spurious wakeups and intervening consumers.",
                  "wait() releases the monitor so the other side can enter.",
                ],
              },
              {
                q: "What is a daemon thread? How is it created, and when does the JVM terminate with respect to daemon threads?",
                marks: 7,
                outline: [
                  "A background servant thread - the GC thread is one.",
                  "Created with t.setDaemon(true) BEFORE t.start().",
                  "Calling setDaemon after start throws IllegalThreadStateException.",
                  "The JVM exits when only daemon threads remain - daemons die mid-task.",
                  "Never use daemons for work that must complete, such as I/O.",
                ],
              },
            ],
          },
          {
            number: "3.4",
            title: "Daemon threads and thread utilities",
            body: [
              "Daemon threads are background servants: garbage collection itself runs on one. Mark a thread daemon with t.setDaemon(true) - which must be called BEFORE t.start(), or it throws IllegalThreadStateException. The rule that gives them meaning: the JVM exits when the last USER thread ends, killing any daemons mid-task without cleanup. An infinite daemon loop therefore does not hang the program - main finishes, the JVM exits. Remove setDaemon(true) and the same loop hangs the process forever: the contrast is the whole exam answer.",
              "The worked contrast: Thread t = new Thread() { public void run() { while (true) { } } }; t.setDaemon(true); t.start(); main ends, the JVM exits instantly despite the infinite loop. Make it a user thread and the program never terminates. Which threads deserve daemon status: monitors, timers, cache cleaners, the GC - work that serves others and may safely die incomplete. Which never: file writes, database transactions, socket conversations that must complete.",
              "The utility methods complete the toolbox. start() and run() from 3.1; static Thread.sleep(ms) pauses the CURRENT thread (keeping its locks; it throws the checked InterruptedException); t.join() makes the CALLING thread wait for t to die - the SyncDemo's t1.join(); t2.join() before printing is join doing its job; t.interrupt() politely requests cancellation (sleeping or waiting threads wake with InterruptedException); t.isAlive(), t.getName()/setName(), t.setPriority()/getPriority(), Thread.currentThread() round out the set.",
              "The exam asks 'write short notes on daemon threads' and 'explain sleep(), join() and yield()'. The recurring probe inside it: sleep() versus wait() - sleep is static, keeps all locks and needs no monitor; wait is an instance method of Object, releases the monitor it is holding and requires one. Quote both lines and the daemon exit rule, and the question is fully covered.",
            ],
            keyTerms: [
              { term: "Daemon thread", definition: "Background servant; JVM exits when only daemons remain, killing them mid-task." },
              { term: "setDaemon(true)", definition: "Must precede start(); afterwards it throws IllegalThreadStateException." },
              { term: "sleep(ms)", definition: "Static pause of the current thread; keeps locks; throws InterruptedException." },
              { term: "join()", definition: "Caller waits for the target thread to die." },
              { term: "interrupt()", definition: "Requests cancellation; wakes sleeping/waiting threads with InterruptedException." },
            ],
            table: {
              caption: "The thread utility methods.",
              headers: ["Method", "On what", "Locks", "Purpose"],
              rows: [
                ["start()", "instance", "acquires nothing", "create the call stack, run the task"],
                ["sleep(ms)", "static", "keeps all locks", "pause the current thread"],
                ["join()", "instance", "none held", "wait for another thread to die"],
                ["wait() / notify()", "instance of Object", "releases / needs monitor", "coordinate on a shared object"],
                ["yield()", "static", "none", "hint: let an equal-priority thread run"],
                ["setDaemon(bool)", "instance", "none", "mark as background servant (before start)"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "User thread vs daemon thread",
              caption: "The JVM's exit rule runs on the difference.",
              left: {
                heading: "User thread",
                items: [
                  "Default: setDaemon(false)",
                  "Keeps the JVM alive until it finishes",
                  "Must complete its work - I/O, computation",
                  "Example: main, request handlers",
                ],
              },
              right: {
                heading: "Daemon thread",
                items: [
                  "setDaemon(true) before start()",
                  "JVM exits when only daemons remain",
                  "May be killed mid-task, no cleanup",
                  "Example: GC, timers, monitors",
                ],
              },
            },
            bullets: [
              "setDaemon(true) before start(); after start it throws IllegalThreadStateException.",
              "The JVM exits when the last user thread ends - daemons die mid-task.",
              "Daemon work: GC, timers, monitors - never must-complete I/O.",
              "sleep() is static, keeps locks, throws checked InterruptedException.",
              "join() makes the caller wait for the target's death.",
              "interrupt() wakes sleeping/waiting threads with InterruptedException.",
            ],
            callout: {
              type: "warning",
              title: "sleep() keeps the lock; wait() releases it",
              body: "A sleeping thread still holds every monitor it owned - sleeping inside a synchronized block starves everyone else. wait() hands the monitor back so the producer or consumer can proceed. The exam probe 'differentiate sleep and wait' wants exactly these two lines, plus static-versus-instance.",
            },
            examQuestions: [
              {
                q: "Write notes on daemon threads and on the methods sleep(), join(), yield() and interrupt(), contrasting sleep() with wait().",
                marks: 14,
                outline: [
                  "Daemon: setDaemon(true) before start; serves others; killed at JVM exit.",
                  "The JVM exits when only daemons remain - infinite daemon loop does not hang.",
                  "sleep(ms): static, current thread, keeps locks, checked InterruptedException.",
                  "join(): caller waits for the target to die.",
                  "yield(): hint to let an equal-priority runnable thread proceed.",
                  "interrupt(): wakes sleepers/waiters with InterruptedException.",
                  "wait() vs sleep(): wait is an Object method, releases the monitor, needs one.",
                ],
              },
              {
                q: "A program runs one infinite user thread and one daemon thread. State when the JVM exits, and what changes if setDaemon(true) is called after start().",
                marks: 7,
                outline: [
                  "The user thread keeps the JVM alive - it never exits.",
                  "Remove the user thread (or daemonize it): exit happens at once.",
                  "setDaemon after start throws IllegalThreadStateException.",
                  "The thread stays a user thread - the process hangs.",
                  "Fix: call setDaemon(true) before start().",
                ],
              },
            ],
          },
          {
            number: "3.5",
            title: "Exception handling - try, catch, finally, throw and throws",
            body: [
              "An exception is an object describing an abnormal event, thrown at the point of failure and caught by matching handler code. The five keywords do the work: try wraps the risky statements; catch (SpecificException e) recovers - clauses are tested in order and the first matching handler wins; finally runs whether or not an exception fired, even across a return - the guaranteed place to close files and connections; throw raises an exception explicitly; throws on a method signature declares the checked exceptions the method may propagate. Handling exists to move error code out of the main line of the algorithm.",
              "Propagation is stack-based, which is the syllabus's precise phrasing. Method calls pile up as stack frames; a throw searches the CURRENT frame for a matching catch; finding none, the frame pops and the same exception object propagates to the caller's frame; up and up until someone catches - or the default handler at the thread's base prints the stack trace and kills the thread. The worked trace: divide(10, 0) throws ArithmeticException inside divide; divide has no handler, so its frame pops; main's catch (ArithmeticException e) matches and prints 'caught: / by zero'; finally prints its line regardless.",
              "throw versus throws is the vocabulary probe. throw new IllegalArgumentException(\"age cannot be \" + age) raises one concrete exception object, anywhere in a method body. throws IOException, SQLException on the signature declares what may escape - the compiler's contract for CHECKED exceptions (3.6): catch them or declare them. Custom exceptions are user classes extending Exception (checked) or RuntimeException (unchecked), typically with two constructors; they carry domain meaning - InvalidAgeException says more than IllegalArgumentException.",
              "The exam asks 'explain try-catch-finally with an example' and 'differentiate throw and throws'. The ExcDemo program answers the first with its three-line output (caught line, finally line, then the deliberately thrown exception crashing main with a stack trace); the second is two definitions plus one example each, with the custom-exception sentence for the extra mark. Write the definitions in one breath each - throw raises an object, throws declares types - because examiners scan for the object-versus-declaration distinction.",
            ],
            keyTerms: [
              { term: "Exception object", definition: "A Throwable instance describing the failure, thrown and caught." },
              { term: "try / catch", definition: "Risky code and its handlers; clauses match in order, first match wins." },
              { term: "finally", definition: "Cleanup that runs with or without an exception - even across return." },
              { term: "throw", definition: "Raises one concrete exception object: throw new IllegalArgumentException(...)." },
              { term: "throws", definition: "Declares checked exceptions a method may propagate to its caller." },
            ],
            codeExample: {
              language: "java",
              caption: "ExcDemo.java - try, catch, finally, throw in one program",
              code: `public class ExcDemo {
    static int divide(int a, int b) {
        return a / b;                    // throws ArithmeticException if b == 0
    }

    public static void main(String[] args) {
        try {
            System.out.println(divide(10, 0));
        } catch (ArithmeticException e) {
            System.out.println("caught: " + e.getMessage());  // / by zero
        } finally {
            System.out.println("finally always runs");        // cleanup
        }

        int age = -5;
        if (age < 0) {
            throw new IllegalArgumentException("age cannot be " + age);
        }                                  // uncaught: stack trace, thread dies
    }
}
// output: caught: / by zero   then   finally always runs`,
            },
            diagram: {
              kind: "flow",
              title: "How an exception propagates",
              caption: "Search the current frame, pop, repeat - the stack unwinds until someone catches.",
              steps: [
                { label: "a / b throws in divide()", note: "ArithmeticException created" },
                { label: "Search divide's frame", note: "no matching catch" },
                { label: "Frame pops", note: "locals discarded, exception carried up" },
                { label: "main's catch matches", note: "handler runs on the same object" },
                { label: "finally executes", note: "with or without the catch" },
              ],
            },
            bullets: [
              "try wraps risk; catch handlers match in order; finally always runs.",
              "Exceptions are objects - the same instance travels up the call stack.",
              "No matching handler anywhere: default handler prints the stack trace, thread dies.",
              "throw raises an object in the body; throws declares types on the signature.",
              "Checked exceptions obey catch-or-declare; unchecked ones do not.",
              "Custom exceptions extend Exception (checked) or RuntimeException (unchecked).",
            ],
            callout: {
              type: "exam",
              title: "finally beats return",
              body: "A return inside try still executes finally on the way out - only System.exit() or JVM death skips it. And catch ordering is law: catch (Exception e) before catch (ArithmeticException e) makes the second clause unreachable, which javac reports as an error, not a warning. Both sentences are one-mark probes.",
            },
            examQuestions: [
              {
                q: "Explain Java's exception handling mechanism - try, catch, finally, throw and throws - with a program that divides by zero, catches the exception and runs a finally block. Trace how the exception propagates on the call stack.",
                marks: 14,
                outline: [
                  "Exception = Throwable object thrown at the failure point.",
                  "try wraps divide(10, 0); ArithmeticException thrown inside divide.",
                  "divide has no handler - its frame pops, the same object propagates.",
                  "main's catch (ArithmeticException) matches; e.getMessage() is '/ by zero'.",
                  "finally runs regardless - cleanup guaranteed, even across return.",
                  "throw raises an object in the body; throws declares on the signature.",
                  "No match anywhere: default handler prints the stack trace and kills the thread.",
                ],
              },
              {
                q: "Differentiate throw and throws with examples, and state when you would define a custom exception class.",
                marks: 7,
                outline: [
                  "throw: one concrete object, inside the body - throw new IllegalArgumentException(msg).",
                  "throws: declared types on the signature - void read() throws IOException.",
                  "throws is the checked-exception contract: callers must catch or declare.",
                  "Custom class: extends Exception or RuntimeException, with constructors.",
                  "Use one when domain meaning matters - InvalidAgeException beats a generic type.",
                ],
              },
            ],
          },
          {
            number: "3.6",
            title: "Exception types and the checked / unchecked divide",
            body: [
              "The hierarchy roots at Throwable. Its Error branch is fatal JVM-level trouble - OutOfMemoryError, StackOverflowError, VirtualMachineError - unchecked and not meant to be caught. Its Exception branch splits into the checked exceptions - IOException, SQLException, ClassNotFoundException, InterruptedException, FileNotFoundException - and RuntimeException, whose children are the unchecked exceptions: NullPointerException, ArithmeticException, ArrayIndexOutOfBoundsException, ClassCastException, NumberFormatException, IllegalArgumentException. One root, three behaviour classes - the diagram is the answer's skeleton.",
              "The divide is a design decision. Checked exceptions mark foreseeable, recoverable environment failures - file missing, network down, SQL refused - so the API DECLARES them and the compiler forces every caller to choose: catch in a try, or declare with throws (catch-or-declare). Unchecked exceptions mark programming bugs - a null dereference, a bad index - that no catch clause can meaningfully repair; the compiler demands nothing, because catching them usually hides the defect. Errors mark a JVM that cannot continue at all.",
              "The worked contrast: new FileReader(\"missing.txt\") throws FileNotFoundException - checked - and a class that neither catches nor declares it is rejected by javac with 'unreported exception FileNotFoundException; must be caught or declared to be thrown'. Divide by zero, in contrast, compiles silently and explodes at runtime: you MAY catch ArithmeticException but the compiler never demands it. The rule sentence: catch-or-declare applies to Exception subclasses except RuntimeException and its children; Error is exempt too.",
              "The exam asks 'draw the exception hierarchy', 'differentiate checked and unchecked exceptions with two examples each', and often 'why is NumberFormatException unchecked' - because it signals a caller-side parsing bug, not an environment failure the program could plan around. The 2x2 matrix (compiler-forced versus recoverable) is the diagram that compresses the whole divide into one picture. Custom exceptions earn a line: extend Exception for a checked domain error, RuntimeException for a programming-signal one - InvalidAgeException is the standard example.",
            ],
            keyTerms: [
              { term: "Throwable", definition: "Root of the hierarchy; only Throwable (or subclasses) can be thrown or caught." },
              { term: "Checked exception", definition: "Exception subclass outside RuntimeException - catch-or-declare enforced by the compiler." },
              { term: "Unchecked exception", definition: "RuntimeException family - a programming bug, no compiler demand." },
              { term: "Error", definition: "Throwable branch for fatal JVM trouble - OutOfMemoryError, StackOverflowError." },
              { term: "catch-or-declare", definition: "Checked exceptions must be caught in a try or declared in throws." },
            ],
            table: {
              caption: "The three behaviour classes.",
              headers: ["Category", "Examples", "Compiler rule", "Typical cause"],
              rows: [
                ["Checked (Exception, not runtime)", "IOException, SQLException, ClassNotFoundException", "catch or declare", "environment failure - file, network, SQL"],
                ["Unchecked (RuntimeException)", "NullPointerException, ArithmeticException, NumberFormatException", "no rule", "programming bug - null, bad index, bad parse"],
                ["Error", "OutOfMemoryError, StackOverflowError", "no rule (do not catch)", "JVM cannot continue"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "The checked / unchecked divide",
              caption: "Compiler pressure versus recoverability - one quadrant is empty by design.",
              axes: { x: "compiler forces handling (no -> yes)", y: "recovery possible (no -> yes)" },
              quadrants: [
                { label: "Error", note: "unchecked and fatal: OutOfMemoryError, StackOverflowError" },
                { label: "Checked exceptions", note: "recoverable and compiler-forced: IOException, SQLException" },
                { label: "RuntimeException family", note: "recoverable-ish bugs, not forced: NullPointerException" },
                { label: "Empty by design", note: "Java never makes a fatal condition a checked exception" },
              ],
            },
            bullets: [
              "Throwable → Error (fatal, unchecked) and Exception.",
              "Exception → checked (IOException, SQLException) and RuntimeException (unchecked).",
              "Catch-or-declare applies to checked only - 'must be caught or declared to be thrown'.",
              "Unchecked marks bugs: catching them usually hides the defect.",
              "Errors: never catch - the JVM cannot continue anyway.",
              "Custom exceptions extend Exception (checked) or RuntimeException (unchecked).",
            ],
            callout: {
              type: "exam",
              title: "The one-line compiler rule",
              body: "'Catch-or-declare applies to Exception subclasses EXCEPT RuntimeException and its children; Error is exempt too.' Answer the checked/unchecked question with that sentence plus two example pairs per side, and the rubric is fully covered - including the follow-up about why NumberFormatException is unchecked.",
            },
            examQuestions: [
              {
                q: "Draw the exception class hierarchy from Throwable. Differentiate checked and unchecked exceptions with two examples of each and state the compiler's rule for each category.",
                marks: 14,
                outline: [
                  "Throwable → Error and Exception - drawn as the root split.",
                  "Error: OutOfMemoryError, StackOverflowError - unchecked, never caught.",
                  "Checked: IOException, SQLException, ClassNotFoundException.",
                  "Unchecked: NullPointerException, ArithmeticException, NumberFormatException.",
                  "Compiler rule: catch-or-declare for checked only.",
                  "Unchecked signals a bug - catching usually hides it.",
                  "Worked contrast: FileNotFoundException rejected by javac; / by zero compiles.",
                ],
              },
              {
                q: "Why are NullPointerException and ArithmeticException unchecked while IOException and SQLException are checked? Justify the design.",
                marks: 7,
                outline: [
                  "Unchecked = programming bugs no handler can repair - null, bad index.",
                  "Checked = foreseeable environment failures the caller can plan for.",
                  "Checked are declared so callers consciously choose catch or propagate.",
                  "Forcing handlers on bugs would bury defects under empty catch blocks.",
                  "Errors are exempt too - the JVM cannot continue regardless.",
                ],
              },
            ],
          },
          {
            number: "3.7",
            title: "Assertions",
            body: [
              "An assertion is a boolean condition the programmer claims true at that point, checked at runtime: assert x >= 0; or with a diagnostic message, assert x >= 0 : \"x was \" + x;. A true assertion costs almost nothing; a false one throws AssertionError carrying the message. Assertions document and verify internal invariants - a private method's precondition, a postcondition after a loop, an unreachable branch - without the ceremony of if-throw. They are part of Unit III because they are the lightest tool in the failure-handling toolbox.",
              "Assertions are disabled by default. They evaluate only when enabled: java -ea MyApp (or -enableassertions) turns them on, -da turns them off, and granularity goes down to packages and classes (-ea:com.college...). The design reason: shipped code skips the checks for speed, while development and testing run with them on. That default is also the danger - code that behaves one way in the lab and another in production, because the lab ran with -ea.",
              "Where to use them - and where never to: use for internal invariants (private method preconditions), loop invariants, and assert false : \"should never get here\" on impossible branches. Never for public argument validation - throw IllegalArgumentException instead, because public callers face disabled assertions - never for user input, and never with side effects: assert cleanup() runs cleanup only while assertions are enabled, so production (default off) never cleans up - the classic assertion bug and the exam's favourite trap.",
              "The exam asks 'what are assertions; syntax; enabling; when to use'. The AssertDemo listing plus the -ea flag plus the public-API caveat plus the side-effect rule is the complete answer - four short points, each worth its mark. The two forms belong in the syntax half: assert x >= 0; without a message and assert x >= 0 : \"x was \" + x; with one - and the message is what an AssertionError prints, so examiners look for it.",
            ],
            keyTerms: [
              { term: "assert", definition: "assert condition; or assert condition : message; - a claimed-true check." },
              { term: "AssertionError", definition: "Thrown when the condition is false and assertions are enabled." },
              { term: "-ea / -da", definition: "Enable/disable assertions at launch; per-package and per-class granularity." },
              { term: "Invariant", definition: "A condition that must hold at a program point - the assertion's subject." },
              { term: "Side-effect-free check", definition: "The rule that assert bodies must not do work the program depends on." },
            ],
            codeExample: {
              language: "java",
              caption: "AssertDemo.java - the two forms and the enabling flag",
              code: `public class AssertDemo {
    static double sqrtApprox(double x) {
        assert x >= 0 : "x was " + x;    // internal precondition, with message
        return Math.sqrt(x);
    }

    public static void main(String[] args) {
        System.out.println(sqrtApprox(16));   // 4.0
        // run with:  java -ea AssertDemo
        // a failing assertion throws AssertionError and stops the thread
        // without -ea the check is skipped entirely - zero cost, zero guard
    }
}`,
            },
            diagram: {
              kind: "fork",
              title: "What an assert statement does",
              caption: "Three paths - and the disabled one is the production default.",
              start: "assert x >= 0 : \"x was \" + x;",
              branches: [
                { label: "Condition true (-ea on)", outcome: "execution continues - near-zero cost", good: true },
                { label: "Condition false (-ea on)", outcome: "AssertionError with the message - thread stops", good: false },
                { label: "Assertions disabled (default)", outcome: "the whole statement is skipped - no check, no cost", good: true },
              ],
            },
            bullets: [
              "Two forms: assert condition; and assert condition : message;",
              "Disabled by default; java -ea enables, -da disables, per package or class.",
              "False assertion throws AssertionError carrying the message.",
              "Use for internal invariants, postconditions, impossible branches.",
              "Never for public argument validation - throw IllegalArgumentException instead.",
              "Never with side effects - disabled in production, the work never happens.",
            ],
            callout: {
              type: "warning",
              title: "assert must be side-effect free",
              body: "assert cleanup(); performs cleanup only while assertions are enabled - in production (default off) it never runs, silently. And argument checks in public methods belong in throw-new-IllegalArgumentException, not assert, because callers run with assertions disabled. Both lines are the standard assertion-question probes.",
            },
            examQuestions: [
              {
                q: "What is an assertion? Explain the two forms of the assert statement, how assertions are enabled and disabled, and the situations where assertions should and should not be used.",
                marks: 14,
                outline: [
                  "Assertion: a claimed-true condition checked at runtime.",
                  "Forms: assert cond; and assert cond : message; - message feeds the error.",
                  "False assertion throws AssertionError; the thread stops.",
                  "Disabled by default; java -ea enables, -da disables, per package/class.",
                  "Use: internal invariants, postconditions, assert false on impossible branches.",
                  "Never: public argument validation - use IllegalArgumentException.",
                  "Never with side effects: assert cleanup() does nothing in production.",
                ],
              },
              {
                q: "Why are assertions disabled by default, and what bug does 'assert cleanup();' create?",
                marks: 7,
                outline: [
                  "Default-off keeps shipped code fast - checks are a development instrument.",
                  "Lab runs with -ea behave differently from production without it.",
                  "cleanup() executes only while assertions are enabled.",
                  "Production skips it - resources leak silently.",
                  "Fix: do the work unconditionally; assert only observes.",
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
      title: "Input/Output and JDBC",
      summary:
        "Unit IV moves data: the stream model and the File class with directories, the byte-stream family from InputStream and OutputStream to FileInputStream, FileOutputStream and PrintStream, RandomAccessFile, the character streams BufferedReader, BufferedWriter and PrintWriter, serialization, and then JDBC - the connectivity model, the JDBC-ODBC bridge, the driver manager, the java.sql package, navigating the ResultSet, the JDBC exception classes and connecting to a remote database.",
      chapter: {
        number: "04",
        title: "Streams, Files and Databases",
        intro:
          "Unit IV covers exploring Java I/O with directories and stream classes, the byte streams - InputStream, OutputStream, FileInputStream, FileOutputStream, PrintStream, RandomAccessFile - the character streams - BufferedReader, BufferedWriter, PrintWriter - serialization, and JDBC: the JDBC-ODBC bridge, the connectivity model, the driver manager, navigating the result set object contents, the java.sql package, the JDBC exception classes and connecting to a remote database.",
        inOneBreath:
          "A stream is a sequence of data flowing between a source and a program; File names paths, byte streams move raw data, character streams decode text, RandomAccessFile seeks by record, and serialization writes whole objects. JDBC opens a Connection through the DriverManager and a driver, sends SQL with a Statement, and walks a ResultSet one next() at a time, with SQLException carrying a message, a vendor code and an SQLState.",
        sections: [
          {
            number: "4.1",
            title: "Exploring Java I/O - streams, directories and the File class",
            body: [
              "A stream is the abstraction of a sequence of data flowing from a source into the program (input) or from the program to a sink (output). java.io organizes the library by data unit: byte streams (8-bit, headed by the abstract InputStream and OutputStream) for binary data, and character streams (16-bit char, headed by Reader and Writer) for text with encoding. System.in, System.out and System.err are pre-opened streams every program already owns. Everything else in this unit is a subclass choice within that skeleton.",
              "The File class models a PATHNAME, not contents: new File(\"notes.txt\") builds a descriptor and touches nothing on disk. Probes: exists(), isFile(), isDirectory(), canRead(), length(), lastModified(). Directory work: list() returns names, listFiles() returns File objects, mkdir() and mkdirs() create, listRoots() enumerates drives; manipulation: createNewFile(), renameTo(), delete(). Filters narrow listings: dir.list(new FilenameFilter accepting names ending .txt). Path building is portable with File(parent, child) and File.separator rather than hand-concatenated slashes.",
              "The worked listing creates the data directory, describes a child notes.txt (exists() false until something writes it), counts the empty directory's entries with dir.list().length, and prints File.pathSeparator - \";\" on Windows, \":\" on Unix. Choosing a family is the section's decision diagram: raw binary (images, audio, .class) goes to byte streams; human text goes to character streams; fixed-size records with repositioning go to RandomAccessFile; whole objects travel by serialization.",
              "The exam asks 'what is a stream; explain the File class methods; write a program to list a directory'. Answer with the two-family definition, the File method table with the descriptor-versus-contents distinction stated explicitly, and the directory program. The new-File-touches-nothing sentence is the mark that shows real understanding, and the portability pair - File.separator inside one path, File.pathSeparator between paths - is the short-note probe that usually rides along with the directory question.",
            ],
            keyTerms: [
              { term: "Stream", definition: "A sequence of data flowing between source/sink and program; input or output." },
              { term: "File class", definition: "A pathname descriptor - probes and manipulates paths, never holds contents." },
              { term: "Byte vs character streams", definition: "8-bit binary (InputStream/OutputStream) versus 16-bit decoded text (Reader/Writer)." },
              { term: "FilenameFilter", definition: "accept() predicate narrowing a directory listing." },
              { term: "File.separator", definition: "The platform path separator ('/' or '\\\\') as a constant." },
            ],
            codeExample: {
              language: "java",
              caption: "FileDemo.java - directories, probes and metadata",
              code: `import java.io.File;

public class FileDemo {
    public static void main(String[] args) {
        File dir = new File("data");
        if (!dir.exists()) dir.mkdir();          // create the directory

        File f = new File(dir, "notes.txt");     // parent + child path
        System.out.println(f.exists());          // false - new File wrote nothing
        System.out.println(dir.isDirectory());   // true
        System.out.println(dir.list().length);   // 0 - empty directory

        for (String name : dir.list()) {         // listing entries
            System.out.println(name);
        }
        System.out.println(File.pathSeparator);  // ";" on Windows, ":" on Unix
        System.out.println(File.separator);      // "\\" on Windows, "/" on Unix
    }
}`,
            },
            diagram: {
              kind: "fork",
              title: "Which I/O family for which data?",
              caption: "One decision, four branches - the whole unit hangs on it.",
              start: "What kind of data moves?",
              branches: [
                { label: "Raw binary - images, audio, .class", outcome: "byte streams: FileInputStream / FileOutputStream", good: true },
                { label: "Human text with encoding", outcome: "character streams: FileReader, BufferedReader, PrintWriter", good: true },
                { label: "Fixed-size records, repositioning", outcome: "RandomAccessFile with seek()", good: true },
                { label: "Whole objects to disk or wire", outcome: "ObjectOutputStream serialization (4.5)", good: true },
              ],
            },
            bullets: [
              "Stream = data sequence; two families by unit: bytes (8-bit) and characters (16-bit).",
              "System.in / out / err are the pre-opened standard streams.",
              "File is a pathname descriptor: exists(), length(), list(), mkdir(), delete().",
              "new File touches nothing on disk - createNewFile() and mkdir() write.",
              "Build paths portably: File(parent, child), File.separator, File.pathSeparator.",
              "Choose by data: bytes for machines, characters for humans, RAF for records, serialization for objects.",
            ],
            callout: {
              type: "tip",
              title: "new File touches nothing",
              body: "Constructing a File object only describes a path; exists() probes it, createNewFile() or mkdir() actually touch the disk. Programs that 'create a file' with new File and immediately read it fail precisely because of this - stating the descriptor-versus-contents distinction earns the understanding mark.",
            },
            examQuestions: [
              {
                q: "What is a stream in Java? Explain the File class with its important methods and write a program that creates a directory, lists its contents and prints file metadata.",
                marks: 14,
                outline: [
                  "Stream = sequence of data from source to program or program to sink.",
                  "Two families: byte streams (InputStream/OutputStream) and character streams (Reader/Writer).",
                  "File models a pathname: exists(), isFile(), isDirectory(), length().",
                  "Directory methods: list(), listFiles(), mkdir(), mkdirs(), listRoots().",
                  "Manipulation: createNewFile(), renameTo(), delete().",
                  "Program: mkdir if absent, new File(dir, child), list() loop, pathSeparator.",
                  "new File touches nothing - probes and creators are different methods.",
                ],
              },
              {
                q: "Differentiate byte streams and character streams, stating which abstract classes head each family and when you would choose each.",
                marks: 7,
                outline: [
                  "Byte streams: 8-bit units, headed by InputStream and OutputStream.",
                  "Character streams: 16-bit chars with charset decoding, headed by Reader and Writer.",
                  "Bytes for binary: images, audio, .class files.",
                  "Characters for text: logs, CSV, HTML - encoding handled correctly.",
                  "Bridges (InputStreamReader) connect the two families.",
                ],
              },
            ],
          },
          {
            number: "4.2",
            title: "The byte streams",
            body: [
              "The family heads at the abstract InputStream and OutputStream, each defining the core contract: read() / write() and close(). The file classes - FileInputStream and FileOutputStream - attach the contract to disk files. Decorators wrap them: BufferedInputStream and BufferedOutputStream add an in-memory buffer (fewer OS calls - the single biggest speedup available), DataInputStream and DataOutputStream read and write Java primitives in portable binary (writeInt, readDouble, writeUTF), PrintStream prints text representations (System.out is one), and SequenceInputStream concatenates inputs.",
              "The worked copy is the canonical loop: open FileInputStream(\"in.dat\") and FileOutputStream(\"out.dat\"); int b; while ((b = in.read()) != -1) out.write(b); close both. The subtlety the exam probes: read() returns an int in the range 0-255 - an unsigned reading of one byte - or -1 at end of file; a byte variable cannot represent that sentinel distinctly, which is why the loop variable is int. Closing belongs in a finally block: an unclosed stream leaks an OS handle and may leave buffered bytes unwritten.",
              "Buffering is the practical lesson: the same loop wrapped as new BufferedInputStream(new FileInputStream(...), 8192) runs many times faster on large files because each OS call moves a block instead of a byte. DataOutputStream completes the picture for records: out.writeInt(n); out.writeDouble(d); out.writeUTF(s) - and DataInputStream reads them back in the SAME order written, the protocol being positional. PrintStream closes the loop on a favourite probe: System.out.println goes through a PrintStream wrapped around the standard output file descriptor.",
              "The exam asks 'write a program to copy a file using byte streams' and 'explain the InputStream/OutputStream hierarchy'. The copy program with the -1 sentinel sentence is the 14-mark core; the hierarchy answer draws the abstract roots with the five concrete children and gives one role each - file attach, buffer, primitives, text printing. Close with the finally question: streams close in finally so handles release and buffers flush even when an exception fires mid-copy.",
            ],
            keyTerms: [
              { term: "InputStream / OutputStream", definition: "The abstract byte-stream roots: read()/write(), close()." },
              { term: "FileInputStream", definition: "Reads raw bytes from a file." },
              { term: "Buffered stream", definition: "Decorator adding an in-memory buffer - fewer OS calls, large speedup." },
              { term: "DataOutputStream", definition: "Writes primitives in portable binary: writeInt, writeDouble, writeUTF." },
              { term: "-1 sentinel", definition: "read()'s end-of-file return; the reason the loop variable is int." },
            ],
            codeExample: {
              language: "java",
              caption: "CopyBytes.java - the canonical byte-loop copy",
              code: `import java.io.*;

public class CopyBytes {
    public static void main(String[] args) throws IOException {
        FileInputStream in = new FileInputStream("in.dat");
        FileOutputStream out = new FileOutputStream("out.dat");

        int b;                              // read() gives 0..255, or -1 at EOF
        while ((b = in.read()) != -1) {
            out.write(b);
        }

        in.close();                         // release OS handles - always close
        out.close();
        System.out.println("copied");

        // faster on big files:
        // in = new BufferedInputStream(new FileInputStream("in.dat"), 8192);
    }
}`,
            },
            diagram: {
              kind: "pipeline",
              title: "Byte flow through a program",
              caption: "Source to sink, one byte at a time - buffering batches the OS calls.",
              stages: [
                { label: "Source", note: "file, socket, memory" },
                { label: "InputStream", note: "read() - one byte or -1" },
                { label: "Program", note: "transform, forward, count" },
                { label: "OutputStream", note: "write() - one byte out" },
                { label: "Sink", note: "file, socket, console" },
              ],
            },
            bullets: [
              "Abstract roots: InputStream / OutputStream with read(), write(), close().",
              "FileInputStream / FileOutputStream attach the contract to disk files.",
              "Buffered* decorators batch OS calls - the main practical speedup.",
              "DataOutput/DataInput move primitives in a fixed written order.",
              "read() returns 0-255 as int, or -1 at EOF - loop variable must be int.",
              "Close streams in finally - handles leak and buffers stall otherwise.",
            ],
            callout: {
              type: "exam",
              title: "read() returns int, and -1 means end",
              body: "The byte arrives as 0-255 (an unsigned reading of 8 bits) and -1 flags EOF; a byte variable cannot hold the sentinel distinctly, so the loop variable is int. Quote the condition while ((b = in.read()) != -1) verbatim - it is the sentence the copy-file question is graded on.",
            },
            examQuestions: [
              {
                q: "Explain the InputStream/OutputStream class hierarchy with the roles of FileInputStream, FileOutputStream, BufferedInputStream and DataOutputStream. Write a program to copy one file to another using byte streams.",
                marks: 14,
                outline: [
                  "Abstract roots define read()/write()/close().",
                  "FileInputStream/FileOutputStream attach to disk files.",
                  "Buffered* decorators batch OS calls - big speedup on large files.",
                  "DataOutputStream/DataInputStream write and read primitives positionally.",
                  "PrintStream prints text - System.out is one.",
                  "Program: open both, while ((b = in.read()) != -1) out.write(b), close both.",
                  "read() gives int 0-255 or -1 - the sentinel is why b is int.",
                ],
              },
              {
                q: "Why does buffering make stream I/O faster, and why must streams be closed in a finally block?",
                marks: 7,
                outline: [
                  "Unbuffered: one OS call per byte - syscall overhead dominates.",
                  "Buffered: one call per block (e.g. 8192 bytes), drained from memory.",
                  "Close in finally so it runs even when an exception fires.",
                  "Unclosed streams leak OS handles and may lose buffered bytes.",
                  "Order: close output after input; flush before close if needed.",
                ],
              },
            ],
          },
          {
            number: "4.3",
            title: "The character streams",
            body: [
              "The character family heads at the abstract Reader and Writer - same shape as the byte family, but the unit is the 16-bit char with charset decoding built in. The bridges are InputStreamReader and OutputStreamWriter: wrap any byte stream and convert bytes to characters using a charset (UTF-8 and friends) - they are where encoding actually happens. FileReader and FileWriter are convenience subclasses of the bridges over FileInputStream and FileOutputStream with the default charset. BufferedReader adds readLine() and buffering; BufferedWriter adds newLine(); PrintWriter adds print/println for every type.",
              "The worked copy: BufferedReader in = new BufferedReader(new FileReader(\"notes.txt\")); PrintWriter out = new PrintWriter(new BufferedWriter(new FileWriter(\"copy.txt\"))); then String line; while ((line = in.readLine()) != null) out.println(line.toUpperCase()); - whole lines instead of bytes, null instead of -1 at end. The listing also shows the DECORATOR stacking that Java I/O is famous for: each wrapper adds one capability (decoding, buffering, formatting) over the same underlying stream, and the wrappers compose in any order.",
              "The byte-versus-character contrast is the exam's conceptual core: text copied byte-by-byte through FileInputStream corrupts every multibyte character - a UTF-8 rupee sign or Hindi glyph is 2-4 bytes, and byte-wise writing mangles it - while character streams perform the charset conversion, which is why FileReader exists at all. The rule: bytes for machines (images, .class, network packets), characters for humans (logs, CSV, HTML). Specify the charset explicitly - new InputStreamReader(in, StandardCharsets.UTF_8) - when the default platform charset would make files machine-dependent.",
              "The exam asks 'explain BufferedReader and PrintWriter with a line-copy program' and 'differentiate byte and character streams'. The program plus the two sentinels (-1 for streams, null for readers) and the encoding sentence cover the rubric; the decorator-stacking observation is the extra mark. Name the stack order aloud - FileReader decodes, BufferedWriter buffers, PrintWriter formats - because examiners check that you know each wrapper adds exactly one capability over the same underlying stream.",
            ],
            keyTerms: [
              { term: "Reader / Writer", definition: "The abstract character-stream roots - 16-bit units with charset decoding." },
              { term: "InputStreamReader", definition: "The byte-to-character bridge applying a charset." },
              { term: "BufferedReader", definition: "Adds buffering and readLine(); null at end of input." },
              { term: "PrintWriter", definition: "print/println for every type; reports failure via checkError(), not exceptions." },
              { term: "Charset", definition: "The byte-to-character mapping - UTF-8 being the portable choice." },
            ],
            codeExample: {
              language: "java",
              caption: "CharCopy.java - lines in, lines out",
              code: `import java.io.*;

public class CharCopy {
    public static void main(String[] args) throws IOException {
        BufferedReader in = new BufferedReader(
            new FileReader("notes.txt"));         // bytes decoded to chars
        PrintWriter out = new PrintWriter(
            new BufferedWriter(new FileWriter("copy.txt")));

        String line;
        while ((line = in.readLine()) != null) {  // whole lines, null at EOF
            out.println(line.toUpperCase());
        }

        in.close();
        out.close();
        System.out.println("done");
    }
}`,
            },
            diagram: {
              kind: "compare",
              title: "Byte streams vs character streams",
              caption: "Same skeleton, different unit - and only one of them understands encoding.",
              left: {
                heading: "Byte streams",
                items: [
                  "Unit: 8-bit byte, no decoding",
                  "Heads: InputStream / OutputStream",
                  "Images, audio, .class, packets",
                  "read() returns -1 at end",
                ],
              },
              right: {
                heading: "Character streams",
                items: [
                  "Unit: 16-bit char via a charset",
                  "Heads: Reader / Writer",
                  "Logs, CSV, HTML, source code",
                  "readLine() returns null at end",
                ],
              },
            },
            bullets: [
              "Reader/Writer head the family; InputStreamReader/Writer are the charset bridges.",
              "FileReader/FileWriter = the bridges over file streams with default charset.",
              "BufferedReader.readLine() - null at EOF, versus -1 in byte streams.",
              "PrintWriter formats every type; failures set a flag (checkError()).",
              "Decorators stack: decoding, then buffering, then formatting.",
              "Byte-wise copying corrupts multibyte text - encoding is why readers exist.",
            ],
            callout: {
              type: "warning",
              title: "Two sentinels, one syllabus",
              body: "Streams end with read() == -1; readers end with readLine() == null. Mixing them - while ((line = in.readLine()) != -1) - is a compile error, but the exam point is the WHY: byte input cannot produce a -1 byte value distinct from data, so streams borrow the int -1; line input simply reports exhaustion as null.",
            },
            examQuestions: [
              {
                q: "Explain the Reader/Writer hierarchy with InputStreamReader as the byte-to-character bridge, and write a program using BufferedReader and PrintWriter to copy a text file line by line.",
                marks: 14,
                outline: [
                  "Reader/Writer: abstract character roots with charset decoding.",
                  "InputStreamReader/OutputStreamWriter wrap byte streams with a charset.",
                  "FileReader/FileWriter = the bridges over file streams.",
                  "BufferedReader adds readLine() and buffering; BufferedWriter adds newLine().",
                  "PrintWriter adds println for every type.",
                  "Program: while ((line = in.readLine()) != null) out.println(line.toUpperCase()).",
                  "Sentinels: readers end at null; byte streams end at -1.",
                ],
              },
              {
                q: "Why should text files never be copied with raw byte streams? Explain with the encoding problem.",
                marks: 7,
                outline: [
                  "Multibyte characters span 2-4 bytes in UTF-8.",
                  "Byte-wise copying preserves bytes but not character boundaries on conversion.",
                  "Character streams decode with a charset, then re-encode correctly.",
                  "Default charset varies per platform - specify UTF-8 explicitly.",
                  "Rule: bytes for machines, characters for human-readable text.",
                ],
              },
            ],
          },
          {
            number: "4.4",
            title: "RandomAccessFile",
            body: [
              "RandomAccessFile opens a file as a byte array you can move within. Construct it as new RandomAccessFile(\"data.bin\", \"rw\") - modes are \"r\" (read-only) and \"rw\" (read-write). seek(long pos) moves the file pointer to a byte offset; getFilePointer() reports where it is; length() gives the size. It also implements DataInput and DataOutput, so readInt(), writeInt(), readUTF(), writeUTF() work directly on it - an int occupies exactly 4 bytes, which is what makes offset arithmetic possible.",
              "The worked demo writes five ints (20 bytes), then seek(8) lands on the third int (index 2 x 4 bytes) and readInt() returns 30 - no scanning through the first two. seek(raf.length()) moves to the end, and the next writeInt appends. The record formula is the exam's favourite line: with fixed-size records of RECORD_SIZE bytes, record number n begins at n * RECORD_SIZE - raf.seek(n * RECORD_SIZE) reads or updates any student record directly, which is how classic database and index files work.",
              "The choice question: sequential text processing belongs to readers; a straight image copy belongs to byte streams; update-in-place by record number belongs to RandomAccessFile - edit one student record without rewriting the file. And the trick question the exam loves: RandomAccessFile is NOT a stream - it extends Object directly (not InputStream or OutputStream), implementing only DataInput and DataOutput. That is why it cannot be decorated with BufferedInputStream, and why buffering, if needed, is absent by design.",
              "The exam asks 'explain RandomAccessFile with seek() and getFilePointer()' as the 14-mark question (the demo plus the record formula) and 'differentiate sequential and random access files' as the 7-mark one (scan-from-start versus jump-to-offset, stream classes versus RAF, text versus records). In the demo, trace the pointer aloud: after readInt() at offset 8 the pointer sits at 12 - getFilePointer() proves the jump, which is the sentence that makes the demo a demonstration rather than a listing.",
            ],
            keyTerms: [
              { term: "RandomAccessFile", definition: "A file opened for reading and writing with a movable pointer - not a stream." },
              { term: "seek(long)", definition: "Moves the file pointer to a byte offset from the start." },
              { term: "File pointer", definition: "The current position; read/write advances it, getFilePointer() reports it." },
              { term: "DataInput / DataOutput", definition: "The interfaces RAF implements - readInt, writeUTF and friends." },
              { term: "Record size", definition: "Fixed bytes per record; record n lives at offset n * RECORD_SIZE." },
            ],
            codeExample: {
              language: "java",
              caption: "RafDemo.java - jump to the third int, append at the end",
              code: `import java.io.*;

public class RafDemo {
    public static void main(String[] args) throws IOException {
        RandomAccessFile raf = new RandomAccessFile("data.bin", "rw");

        for (int i = 1; i <= 5; i++) {
            raf.writeInt(i * 10);            // five ints = 20 bytes
        }

        raf.seek(8);                         // jump to the 3rd int (2 * 4)
        System.out.println(raf.readInt());   // 30
        System.out.println(raf.getFilePointer()); // 12 - the pointer moved too

        raf.seek(raf.length());              // append at the end
        raf.writeInt(60);
        raf.close();
    }
}`,
            },
            diagram: {
              kind: "fork",
              title: "How should this file be read?",
              caption: "Sequential by default - jump only when records are fixed-size.",
              start: "How does the file get read?",
              branches: [
                { label: "Whole file, start to end", outcome: "stream classes: FileInputStream / BufferedReader", good: true },
                { label: "By record number, in place", outcome: "RandomAccessFile + seek(n * RECORD_SIZE)", good: true },
                { label: "Append at end only", outcome: "FileOutputStream append mode, or seek(length())", good: true },
                { label: "Need buffering too", outcome: "not RandomAccessFile - it is not a stream and cannot be decorated", good: false },
              ],
            },
            bullets: [
              "Modes: \"r\" read-only, \"rw\" read-write; the pointer starts at 0.",
              "seek(pos) jumps; getFilePointer() reports; length() sizes.",
              "Implements DataInput/DataOutput: readInt, writeUTF - an int is 4 bytes.",
              "Record formula: record n at offset n * RECORD_SIZE - the exam's favourite line.",
              "Not a stream: extends Object, cannot be wrapped in BufferedInputStream.",
              "Use for update-in-place records; use streams for sequential text and binary.",
            ],
            callout: {
              type: "exam",
              title: "RandomAccessFile is not a stream",
              body: "It extends Object and implements DataInput and DataOutput - so it cannot be decorated with BufferedInputStream, and 'is RandomAccessFile a stream?' has answer NO. The mark-earning line in any random-access answer is the record location formula seek(n * RECORD_SIZE).",
            },
            examQuestions: [
              {
                q: "Explain RandomAccessFile: its modes, the seek() and getFilePointer() methods, and reading and writing with the DataInput/DataOutput methods. Write a program that writes five integers and then reads the third one directly.",
                marks: 14,
                outline: [
                  "Constructor modes \"r\" and \"rw\"; pointer starts at offset 0.",
                  "seek(pos) moves the pointer; getFilePointer() reports; length() sizes.",
                  "Implements DataInput/DataOutput - writeInt, readInt, readUTF, writeUTF.",
                  "Each int occupies exactly 4 bytes - offset arithmetic works.",
                  "Program: write 10..50, seek(2 * 4 = 8), readInt returns 30.",
                  "seek(length()) appends at the end.",
                  "Record formula: record n at n * RECORD_SIZE.",
                ],
              },
              {
                q: "Differentiate sequential-access and random-access file processing with one class example of each.",
                marks: 7,
                outline: [
                  "Sequential: read from start in order - FileInputStream, BufferedReader.",
                  "Random: jump to any offset - RandomAccessFile with seek().",
                  "Sequential suits text and streaming; random suits fixed records.",
                  "RAF is not a stream - no decoration, direct DataInput/DataOutput.",
                  "Random access updates one record without rewriting the file.",
                ],
              },
            ],
          },
          {
            number: "4.5",
            title: "Serialization",
            body: [
              "Serialization converts a live object - with its whole field graph - into a byte stream; deserialization rebuilds the object from those bytes. ObjectOutputStream.writeObject(obj) writes to a file or socket; ObjectInputStream.readObject() returns Object and the caller casts. The class must implement Serializable - an EMPTY marker interface whose only job is to declare intent - and every object reachable from its fields must be serializable too, or the write throws NotSerializableException at the first offender.",
              "The worked round-trip: Student with String name and transient int otp is written to s.dat and read back - name arrives intact, otp arrives as 0. transient means 'do not persist this field': passwords, open sockets, cached handles that mean nothing on another machine. Static fields are not serialized either - they belong to the class, not the instance. The subtle fact the exam loves: deserialization allocates the object WITHOUT calling any constructor; state comes from the stream, so an invariant enforced only inside the constructor does not apply to a deserialized object.",
              "Versioning and uses complete the topic. serialVersionUID - a private static final long - pins the class version; changing fields without fixing it makes reading old data throw InvalidClassException, while declaring it lets compatible evolution proceed. Uses: saving program state to disk, deep-copying an object through a serialize-roundtrip, and sending objects over sockets - which is exactly what RMI (Unit V) does with every remote method's arguments and return value, the cross-unit connection the exam probes. Externalizable is the manual-control alternative.",
              "The exam asks 'what is serialization; write a program to serialize and deserialize an object; explain the roles of the Serializable interface, transient and serialVersionUID'. The Student trace (asha 0) answers all three halves at once - quote the deserialized output explicitly. Then add the uses sentence: persistence to disk, deep copy through a serialize-roundtrip, and RMI's arguments and returns - Unit V runs this exact mechanism on the wire, which is the cross-unit link examiners like to see acknowledged.",
            ],
            keyTerms: [
              { term: "Serializable", definition: "The empty marker interface granting writeObject/readObject participation." },
              { term: "ObjectOutputStream", definition: "writeObject() flattens the object graph into bytes." },
              { term: "transient", definition: "Field modifier: skip on serialization; arrives as its default value." },
              { term: "serialVersionUID", definition: "The class's version stamp - mismatch throws InvalidClassException." },
              { term: "Deserialization", definition: "Rebuilds the object from bytes - without calling any constructor." },
            ],
            codeExample: {
              language: "java",
              caption: "SerialDemo.java - write an object, read it back",
              code: `import java.io.*;

class Student implements Serializable {           // marker interface
    private static final long serialVersionUID = 1L;
    String name;
    transient int otp;                            // skipped on serialization

    Student(String name, int otp) {
        this.name = name;
        this.otp = otp;
    }
}

public class SerialDemo {
    public static void main(String[] args) throws IOException, ClassNotFoundException {
        ObjectOutputStream out = new ObjectOutputStream(new FileOutputStream("s.dat"));
        out.writeObject(new Student("asha", 1234));
        out.close();

        ObjectInputStream in = new ObjectInputStream(new FileInputStream("s.dat"));
        Student s = (Student) in.readObject();    // no constructor ran here
        in.close();
        System.out.println(s.name + " " + s.otp); // asha 0 - transient zeroed
    }
}`,
            },
            diagram: {
              kind: "pipeline",
              title: "The serialization round-trip",
              caption: "Object to bytes to file - and back into a fresh, constructor-less object.",
              stages: [
                { label: "Live object", note: "in the heap, with its field graph" },
                { label: "writeObject()", note: "graph flattened to bytes" },
                { label: "Byte stream", note: "file, socket, RMI call" },
                { label: "readObject()", note: "cast from Object" },
                { label: "Reconstructed object", note: "no constructor; transient defaults" },
              ],
            },
            bullets: [
              "Serializable is an empty marker interface - intent, not methods.",
              "Every reachable field must be serializable, or NotSerializableException.",
              "transient fields are skipped; they arrive as defaults (0, null, false).",
              "Static fields belong to the class - never serialized.",
              "Deserialization skips constructors; declare serialVersionUID to version the class.",
              "Uses: persistence, deep copy, and RMI's arguments and returns (Unit V).",
            ],
            callout: {
              type: "warning",
              title: "Deserialization skips constructors",
              body: "The object is rebuilt from bytes by reflection - no constructor runs, so invariants enforced only in the constructor do not hold for deserialized instances. Pair it with the versioning rule: without a fixed serialVersionUID, any class change breaks old files with InvalidClassException.",
            },
            examQuestions: [
              {
                q: "What is serialization? Write a program that serializes a Student object to a file and deserializes it, explaining the roles of the Serializable marker interface, the transient modifier and serialVersionUID.",
                marks: 14,
                outline: [
                  "Serialization: object graph to bytes via ObjectOutputStream.writeObject().",
                  "Serializable is an empty marker interface declaring intent.",
                  "Program: write new Student(\"asha\", 1234), read back, cast, print.",
                  "Output 'asha 0': transient otp skipped, arrives as default.",
                  "Static fields are not serialized - they belong to the class.",
                  "Deserialization calls no constructor - state comes from the stream.",
                  "serialVersionUID pins the version; mismatch throws InvalidClassException.",
                ],
              },
              {
                q: "Which fields does Java refuse to serialize, and why? Explain transient and static with the deserialized values they produce.",
                marks: 7,
                outline: [
                  "transient fields: deliberately skipped - passwords, sockets, caches.",
                  "They arrive as defaults: 0, null, false.",
                  "static fields: belong to the class, not the instance - never serialized.",
                  "Non-serializable object references throw NotSerializableException.",
                  "Marking intent is the programmer's job - the marker interface carries no methods.",
                ],
              },
            ],
          },
          {
            number: "4.6",
            title: "JDBC - the connectivity model and the driver manager",
            body: [
              "JDBC (Java Database Connectivity, java.sql and javax.sql) is the standard API that lets one SQL-speaking Java program run against any database for which a driver exists. The connectivity model has four participants: the application, which speaks only the JDBC API (Connection, Statement, ResultSet); the JDBC API itself; a DRIVER, which implements that API for one specific DBMS; and the database. The DriverManager keeps the registry of loaded drivers and hands out connections from a URL of the form jdbc:subprotocol:subname - jdbc:mysql://localhost:3306/college.",
              "The driver types are the syllabus's comparison table. Type I: the JDBC-ODBC bridge - JDBC calls translated to ODBC, needing a configured ODBC DSN; slow, Windows-bound, and removed from Java 8 onward. Type II: native API, part-Java - calls the DBMS's C library; fast but platform-locked. Type III: network protocol, pure Java - a middleware server translates; flexible for intranets. Type IV: thin driver, pure Java - speaks the DBMS's own network protocol directly (MySQL Connector/J, Oracle thin); the modern default.",
              "The worked connect: Class.forName(\"com.mysql.cj.jdbc.Driver\") loads the class, whose static block calls DriverManager.registerDriver - that side effect IS the registration; then Connection con = DriverManager.getConnection(url, \"root\", \"secret\"). On the connection: setAutoCommit(false) for transaction control, with commit() and rollback(); the same source code runs unchanged against any DBMS whose driver is on the classpath - portability is JDBC's whole point, the contrast with ODBC's C-level binding.",
              "The exam asks 'explain the JDBC architecture with a diagram' (the layered stack: application → JDBC API/DriverManager → driver → database) and 'describe the driver types with merits and demerits' (the table). Answers that name the types but skip the trade-offs lose the comparison marks - say 'Type I portable but DSN-bound; Type IV pure Java and direct'. The connect trace completes it: Class.forName's static block registers the driver, and getConnection matches the URL's subprotocol to pick it.",
            ],
            keyTerms: [
              { term: "JDBC", definition: "The java.sql API for DB-independent SQL access through pluggable drivers." },
              { term: "DriverManager", definition: "Keeps the loaded drivers and returns connections for JDBC URLs." },
              { term: "JDBC URL", definition: "jdbc:subprotocol:subname - jdbc:mysql://host:3306/dbname." },
              { term: "Type IV driver", definition: "Pure-Java thin driver speaking the DBMS network protocol directly." },
              { term: "JDBC-ODBC bridge", definition: "Type I: JDBC translated to ODBC; needs a DSN; removed from Java 8." },
            ],
            table: {
              caption: "The four JDBC driver types.",
              headers: ["Type", "Mechanism", "Merit", "Demerit"],
              rows: [
                ["I - JDBC-ODBC bridge", "JDBC calls translated to ODBC", "no vendor driver needed", "DSN setup, Windows-bound, slow, removed in Java 8"],
                ["II - native API", "calls the DBMS C library", "fast", "platform-locked, native install"],
                ["III - network protocol", "middleware translates, pure Java", "flexible, no client DB library", "extra server tier"],
                ["IV - thin driver", "pure Java, DBMS protocol directly", "portable, fast, modern default", "one driver jar per DBMS"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "The JDBC connectivity model",
              caption: "Portable calls on top; one driver per DBMS at the bottom.",
              layers: [
                { label: "Java application", note: "portable JDBC calls - Connection, Statement, ResultSet" },
                { label: "JDBC API + DriverManager", note: "URL routing, driver registry" },
                { label: "JDBC driver (Type I-IV)", note: "translates to the DBMS's protocol" },
                { label: "Database server", note: "executes SQL, returns rows" },
              ],
            },
            bullets: [
              "Application speaks the JDBC API; a driver implements it per DBMS.",
              "DriverManager maps jdbc: URLs to registered drivers and returns Connections.",
              "Class.forName loads the driver; its static block registers it.",
              "Type I is the syllabus's bridge - DSN-bound, removed from Java 8.",
              "Type IV thin drivers are pure Java - the modern default.",
              "Same source code, any DBMS - portability is the design win.",
            ],
            callout: {
              type: "exam",
              title: "Say the type AND the trade-off",
              body: "The JDBC-ODBC bridge is Type I: portable code, but ODBC DSN setup, Windows-bound and slow - and removed from Java 8 onward. Type IV is pure Java and speaks the DBMS protocol directly - the modern choice. Answers naming types without trade-offs lose the comparison marks.",
            },
            examQuestions: [
              {
                q: "Explain the JDBC connectivity model with a layered diagram: application, JDBC API, driver manager, driver and database. Describe the four JDBC driver types with one merit and one demerit each.",
                marks: 14,
                outline: [
                  "Application speaks only the JDBC API - portable SQL calls.",
                  "DriverManager registers drivers and routes jdbc: URLs.",
                  "The driver translates API calls to one DBMS's protocol.",
                  "Type I bridge: no vendor jar, but DSN-bound, slow, removed in Java 8.",
                  "Type II native API: fast, platform-locked.",
                  "Type III middleware: flexible intranets, extra tier.",
                  "Type IV thin driver: pure Java, direct - the modern default.",
                ],
              },
              {
                q: "Explain the role of DriverManager and the form of a JDBC URL. How does Class.forName() register a driver?",
                marks: 7,
                outline: [
                  "DriverManager keeps the loaded-driver registry.",
                  "getConnection(url, user, pass) picks a driver matching the URL.",
                  "URL: jdbc:subprotocol:subname - jdbc:mysql://localhost:3306/college.",
                  "Class.forName loads the driver class; its static block calls registerDriver.",
                  "That side effect is the registration - no explicit registration call needed.",
                ],
              },
            ],
          },
          {
            number: "4.7",
            title: "The java.sql package and navigating the ResultSet",
            body: [
              "The package inventory: interfaces Driver, Connection, Statement, PreparedStatement, CallableStatement, ResultSet, ResultSetMetaData and DatabaseMetaData; the class DriverManager; the SQLException family (4.8). PreparedStatement is the professional form: precompiled SQL with ? placeholders - con.prepareStatement(\"SELECT * FROM student WHERE roll = ?\") - filled with setInt(1, roll) before executeQuery(); faster on repeats and immune to SQL injection because parameters never mix with SQL text.",
              "ResultSet mechanics are the navigation half. executeQuery(SELECT) returns the ResultSet with its cursor positioned BEFORE the first row; rs.next() advances one row and returns false when it moves past the end - the while loop IS the navigation. Getters accept column index (1-based, not 0!) or column name: rs.getInt(1) and rs.getString(\"name\") are equivalent. Updates go through executeUpdate, which returns the affected-row count for INSERT, UPDATE and DELETE. ResultSetMetaData - getColumnCount(), getColumnName(i) - lets one generic loop print any query's result.",
              "The worked program is the six-step skeleton every exam answer follows: load the driver, connect, create the statement, execute, navigate the rows printing roll and name, close everything in order rs → st → con. The scrollable variant: create the statement with ResultSet.TYPE_SCROLL_INSENSITIVE and ResultSet.CONCUR_READ_ONLY, then rs.absolute(3), rs.first(), rs.last(), rs.previous() move anywhere - the syllabus's 'navigating the result set object contents' in its full form.",
              "The exam asks 'write a JDBC program to display a table' and 'explain how the ResultSet cursor works'. Number the six steps as comments in the program - structure marks survive even if an SQL detail slips - and quote the two ResultSet facts: the cursor starts before row one, and columns are 1-based. The PreparedStatement sub-question rides along: ? placeholders precompile once, fill with setInt and setString before executeQuery, and keep user input out of the SQL text - faster on repeats and injection-safe.",
            ],
            keyTerms: [
              { term: "Connection", definition: "The session to the database - statements come from it, transactions commit on it." },
              { term: "Statement / PreparedStatement", definition: "SQL carriers; the prepared form precompiles with ? parameters." },
              { term: "ResultSet", definition: "The cursor over query results - before the first row until next() moves it." },
              { term: "next()", definition: "Advances one row, false past the end - the navigation loop's condition." },
              { term: "ResultSetMetaData", definition: "Column count and names - for printing any result generically." },
            ],
            codeExample: {
              language: "java",
              caption: "JdbcDemo.java - the six steps, numbered",
              code: `import java.sql.*;

public class JdbcDemo {
    public static void main(String[] args) {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");       // 1. load driver
            Connection con = DriverManager.getConnection(    // 2. connect
                "jdbc:mysql://localhost:3306/college", "root", "secret");
            Statement st = con.createStatement();            // 3. statement
            ResultSet rs = st.executeQuery(                  // 4. execute
                "SELECT roll, name FROM student");

            while (rs.next()) {                              // 5. navigate
                System.out.println(rs.getInt("roll") + " " + rs.getString("name"));
            }

            rs.close(); st.close(); con.close();             // 6. release
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }
}`,
            },
            diagram: {
              kind: "flow",
              title: "The six JDBC steps",
              caption: "Every exam program is this skeleton with different SQL.",
              steps: [
                { label: "1 Load the driver", note: "Class.forName(...)" },
                { label: "2 Connect", note: "DriverManager.getConnection(url, user, pass)" },
                { label: "3 Create statement", note: "createStatement or prepareStatement" },
                { label: "4 Execute", note: "executeQuery / executeUpdate" },
                { label: "5 Navigate", note: "while (rs.next()) + getters" },
                { label: "6 Close", note: "rs, st, con - in that order" },
              ],
            },
            bullets: [
              "java.sql: Driver, Connection, Statement, PreparedStatement, ResultSet, DriverManager.",
              "PreparedStatement: ? placeholders, setInt/setString - precompiled, injection-safe.",
              "The ResultSet cursor starts BEFORE the first row; next() advances and reports.",
              "Getters take a 1-based column index or a column name.",
              "executeQuery for SELECT; executeUpdate returns the affected-row count.",
              "ResultSetMetaData gives column count and names for generic printing.",
            ],
            callout: {
              type: "warning",
              title: "Columns are 1-based, and next() comes first",
              body: "rs.getInt(0) throws SQLException, and calling any getter before the first next() fails the same way - the cursor starts before row one, not on it. These two facts are the ResultSet half of every JDBC question's rubric, and both are classic lab bugs.",
            },
            examQuestions: [
              {
                q: "List the important interfaces of the java.sql package and write a complete JDBC program that connects to a database, executes a SELECT and prints every row, closing resources in the correct order.",
                marks: 14,
                outline: [
                  "Interfaces: Driver, Connection, Statement, PreparedStatement, ResultSet.",
                  "Plus ResultSetMetaData, DatabaseMetaData; class DriverManager.",
                  "Step 1: Class.forName loads the driver.",
                  "Step 2: DriverManager.getConnection(url, user, pass).",
                  "Steps 3-4: createStatement, executeQuery(SELECT...).",
                  "Step 5: while (rs.next()) with getInt/getString by name or 1-based index.",
                  "Step 6: close rs, then st, then con.",
                ],
              },
              {
                q: "Explain how the ResultSet cursor works, the difference between getting columns by index and by name, and the advantage of PreparedStatement over Statement.",
                marks: 7,
                outline: [
                  "Cursor starts before the first row; next() advances and returns false at end.",
                  "Getters without next() first throw SQLException.",
                  "By index: getInt(1) - positional; by name: getString(\"roll\") - readable.",
                  "Indexes are 1-based, not 0 - a classic bug.",
                  "PreparedStatement precompiles with ? parameters - faster and injection-safe.",
                ],
              },
            ],
          },
          {
            number: "4.8",
            title: "JDBC exceptions and connecting to a remote database",
            body: [
              "The JDBC exception classes. SQLException is the root: it carries THREE identifications - getMessage() (the human sentence), getErrorCode() (the vendor-specific numeric code) and getSQLState() (the portable five-character ANSI code, e.g. 08S01 for connection failure, 28000 for invalid authorization) - plus a chain: getNextException() walks causes wrapped underneath, essential when a driver wraps the real error. SQLWarning is the non-fatal sibling: retrieved via con.getWarnings() and then ws.getNextWarning() - ignored silently if never fetched. BatchUpdateException adds long[] update counts when a batch fails partway; DataTruncation reports a column cut short.",
              "Connecting to a remote database changes the URL and nothing else: jdbc:mysql://193.16.4.7:3306/college - the host (name or IP) and port move into the URL, and everything downstream of getConnection is identical code. The requirements are on the environment, not the program: a network-capable driver (Type III or IV - the Type I JDBC-ODBC bridge talks to a LOCAL ODBC manager, so remote databases through it need a DSN pointing at the remote server), credentials granted remote access on the server, a reachable host:port through firewalls, and sensible timeout configuration.",
              "The diagnostic trace is the professional habit the exam quotes. 'Communications link failure' → wrong host or port, or a firewall - check SQLState 08S01. 'Access denied for user' → wrong credentials or no remote grant - SQLState 28000. 'No suitable driver found for jdbc:mysql//localhost/college' → the driver jar is missing from the classpath, or the URL scheme is malformed (one slash, not two) - the classic typo question. Reading all three identifications before guessing is the diagnosis method.",
              "The exam asks 'explain the JDBC exception classes and SQLException's methods' and 'how does connecting to a remote database differ from a local one'. The answer: same program, URL carries host:port, network-capable driver required, and the three-identification diagnostic habit. Two lines finish the exception half: SQLWarning is non-fatal and fetched explicitly through getWarnings() then getNextWarning() - silent otherwise - and BatchUpdateException reports one update count per batched statement so the program knows which statement failed.",
            ],
            keyTerms: [
              { term: "SQLException", definition: "Root JDBC exception - message, vendor error code, SQLState, and a cause chain." },
              { term: "getSQLState()", definition: "The portable five-char ANSI code: 08S01 link failure, 28000 bad credentials." },
              { term: "SQLWarning", definition: "Non-fatal notices fetched via getWarnings() / getNextWarning()." },
              { term: "getNextException()", definition: "Walks the chain of wrapped causes under a SQLException." },
              { term: "Remote URL", definition: "jdbc:subprotocol://host:port/db - the only thing that changes for remote databases." },
            ],
            table: {
              caption: "The JDBC exception classes.",
              headers: ["Class", "When it appears", "Key methods / data"],
              rows: [
                ["SQLException", "any SQL or connection failure", "getMessage, getErrorCode, getSQLState, getNextException"],
                ["SQLWarning", "non-fatal notices (implicit conversions)", "getWarnings, getNextWarning"],
                ["BatchUpdateException", "a batch fails partway", "getUpdateCounts - long[] per statement"],
                ["DataTruncation", "a column value got cut", "getIndex, getDataSize, getTransferSize"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Reading a SQLException",
              caption: "Read all three identifications before guessing - each message maps to one cause.",
              start: "getConnection throws - read message, error code, SQLState:",
              branches: [
                { label: "No suitable driver found", outcome: "driver jar missing or URL scheme typo - fix classpath/URL", good: false },
                { label: "Communications link failure", outcome: "host, port or firewall - SQLState 08S01", good: false },
                { label: "Access denied for user", outcome: "wrong credentials or no remote grant - SQLState 28000", good: false },
                { label: "Unknown database", outcome: "the URL names a database that does not exist - create it", good: false },
              ],
            },
            bullets: [
              "SQLException carries message + vendor code + SQLState + a cause chain.",
              "getNextException() finds the real error wrapped by a driver.",
              "SQLWarning is non-fatal - fetched explicitly or silently ignored.",
              "BatchUpdateException reports per-statement update counts.",
              "Remote database: host and port move into the URL; the program is unchanged.",
              "Remote needs a Type III/IV driver, remote-granted credentials, an open port.",
            ],
            callout: {
              type: "tip",
              title: "One exception, three identifications",
              body: "getMessage() is the human sentence, getErrorCode() the vendor number, getSQLState() the portable ANSI code (08S01 link failure, 28000 bad credentials). Quote all three - plus the chain via getNextException() - and a JDBC debugging answer reads as a diagnosis instead of a guess.",
            },
            examQuestions: [
              {
                q: "Explain the JDBC exception classes - SQLException, SQLWarning, BatchUpdateException - with the diagnostic methods of SQLException. How does connecting to a remote database differ from a local one?",
                marks: 14,
                outline: [
                  "SQLException: getMessage, getErrorCode (vendor), getSQLState (ANSI).",
                  "getNextException() walks wrapped causes - the chain matters.",
                  "SQLWarning: non-fatal, fetched via getWarnings()/getNextWarning().",
                  "BatchUpdateException: getUpdateCounts array for partial batches.",
                  "Remote database: URL carries jdbc:mysql://host:port/db.",
                  "Program code is identical - only the URL and driver change.",
                  "Requirements: Type III/IV driver, remote-granted credentials, open port.",
                ],
              },
              {
                q: "A JDBC program prints 'No suitable driver found for jdbc:mysql//localhost/college'. Diagnose the causes and write the corrected connection code.",
                marks: 7,
                outline: [
                  "Cause 1: the driver jar is not on the classpath.",
                  "Cause 2: the URL is malformed - jdbc:mysql// has one slash; it needs two.",
                  "Fix: jdbc:mysql://localhost:3306/college.",
                  "Class.forName(\"com.mysql.cj.jdbc.Driver\") before getConnection.",
                  "DriverManager.getConnection(url, user, pass) completes it.",
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
      title: "Java Networking and RMI",
      summary:
        "Unit V crosses the network: exploring the java.net package, networking basics with sockets and the client-server model, reserved ports and servers, internet addressing with InetAddress, TCP sockets with Socket and ServerSocket, UDP sockets with DatagramSocket and DatagramPacket, and RMI - the client/server architecture, RMI registry services, and the steps of creating an RMI application with a complete example.",
      chapter: {
        number: "05",
        title: "Sockets and Remote Objects",
        intro:
          "Unit V covers the java.net package, networking basics - sockets, the client-server model, reserved ports and servers - internet addressing with InetAddress, TCP sockets with Socket and ServerSocket, UDP sockets with DatagramSocket and DatagramPacket, and RMI: the client/server architecture, RMI registry services, and the steps of creating an RMI application with a complete working example.",
        inOneBreath:
          "A socket is an IP address plus a port; servers bind well-known ports and listen, clients connect. TCP (Socket, ServerSocket) delivers a reliable ordered byte stream; UDP (DatagramSocket, DatagramPacket) sends fast, unguaranteed packets; InetAddress resolves names to addresses. RMI raises the level: publish a remote object under a name in the registry, look the stub up, and call methods on it - serialization carries every argument across.",
        sections: [
          {
            number: "5.1",
            title: "Networking basics - sockets, client-server and reserved ports",
            body: [
              "A socket is one endpoint of a two-way communication channel, identified by an IP address plus a port number; a connection is the pair (client IP, client port) ↔ (server IP, server port). The client-server model assigns the roles: the server binds a well-known port and listens forever - waiting in accept() - while clients initiate with the server's address and that port, receiving an ephemeral local port for the conversation. One host, many services: the IP finds the building, the port finds the mailbox - which is how web, mail and SSH share one machine. java.net supplies Socket, ServerSocket, DatagramSocket, DatagramPacket, URL and InetAddress.",
              "Ports are 16-bit numbers, 0-65535. The reserved (well-known) range 0-1023 belongs to standard services and needs administrator privileges to bind: FTP 20/21, Telnet 23, SMTP 25, DNS 53, HTTP 80, POP3 110, HTTPS 443. The registered range 1024-49151 is for applications, and 49152-65535 is the dynamic pool from which clients draw their ephemeral ports. Lab programs must therefore listen on 1024+ - binding port 80 without privileges fails.",
              "Two transports sit below the application. TCP is connection-oriented: a handshake opens the channel, every byte is acknowledged, lost segments are retransmitted, order is preserved - the app sees a reliable byte stream. UDP is connectionless: datagrams addressed like letters, no handshake, no delivery or ordering guarantee, minimal overhead, and broadcast/multicast possible. Every syllabus protocol (HTTP, FTP, SMTP) rides TCP; DNS lookups, streaming media and games ride UDP. The four-layer picture - application over transport (TCP/UDP) over internet (IP) over network access - is the diagram the exam expects.",
              "The exam asks 'define socket; explain the client-server model; list reserved ports'. Answer with the endpoint definition, the roles-and-ports story, the well-known table, and the layered stack. The privilege sentence - binding below 1024 needs admin rights, so labs use 1024+ - is the practical mark. Close with the one-line transport contrast: TCP gives reliable ordered streams for protocols like HTTP, UDP gives fast unguaranteed datagrams for DNS and media - it sets up 5.3 and 5.4 in a sentence.",
            ],
            keyTerms: [
              { term: "Socket", definition: "One endpoint of two-way communication: IP address + port." },
              { term: "Port", definition: "A 16-bit number distinguishing services on one host; 0-65535." },
              { term: "Reserved ports", definition: "0-1023, assigned to standard services; binding needs privileges." },
              { term: "Client-server model", definition: "Server binds and listens on a well-known port; clients initiate." },
              { term: "TCP vs UDP", definition: "Reliable ordered streams versus fast unguaranteed datagrams." },
            ],
            table: {
              caption: "Reserved (well-known) ports.",
              headers: ["Port", "Service", "Transport"],
              rows: [
                ["20 / 21", "FTP data / control", "TCP"],
                ["23", "Telnet", "TCP"],
                ["25", "SMTP (mail)", "TCP"],
                ["53", "DNS", "UDP (and TCP)"],
                ["80", "HTTP", "TCP"],
                ["110", "POP3", "TCP"],
                ["443", "HTTPS", "TCP"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "The TCP/IP layer stack",
              caption: "Your Java program lives at the top; TCP and UDP are the transport choices beneath it.",
              layers: [
                { label: "Application layer", note: "HTTP, SMTP, and your Java program" },
                { label: "Transport layer", note: "TCP (reliable streams) or UDP (datagrams)" },
                { label: "Internet layer", note: "IP addressing and routing" },
                { label: "Network access layer", note: "Ethernet / Wi-Fi delivery" },
              ],
            },
            bullets: [
              "Socket = IP + port; a connection pairs a client endpoint with a server endpoint.",
              "Servers bind well-known ports and listen; clients get ephemeral ports.",
              "Reserved range 0-1023 needs privileges - labs listen on 1024+.",
              "Well-known: FTP 20/21, Telnet 23, SMTP 25, DNS 53, HTTP 80, HTTPS 443.",
              "TCP: handshake, acknowledgment, ordering; UDP: datagrams, no guarantees.",
              "Layer stack: application over TCP/UDP over IP over network access.",
            ],
            callout: {
              type: "exam",
              title: "Bind below 1024 and you need privileges",
              body: "The reserved range 0-1023 is assigned to standard services; on modern systems binding there without administrator rights fails outright. That is why every lab server uses a port like 2000 or 5000. Naming HTTP 80 and HTTPS 443 with the reason (well-known = privileged) completes the ports answer.",
            },
            examQuestions: [
              {
                q: "What is a socket? Explain the client-server model, port numbers and reserved ports, and draw the TCP/IP layer stack indicating where TCP, UDP and the application program sit.",
                marks: 14,
                outline: [
                  "Socket = endpoint identified by IP address + port.",
                  "Client-server: server binds a well-known port and listens; clients initiate.",
                  "Ports are 16-bit: 0-65535; clients receive ephemeral ports.",
                  "Reserved 0-1023: FTP, Telnet, SMTP, DNS, HTTP, HTTPS - privileged binding.",
                  "Layer stack: application → transport (TCP/UDP) → internet (IP) → network access.",
                  "TCP: connection-oriented, reliable, ordered; UDP: connectionless datagrams.",
                  "One host, many services - the port distinguishes the mailbox.",
                ],
              },
              {
                q: "List five well-known ports with their services and transports, and explain why clients usually receive an ephemeral port.",
                marks: 7,
                outline: [
                  "HTTP 80/TCP, SMTP 25/TCP, DNS 53/UDP, FTP 21/TCP, HTTPS 443/TCP.",
                  "Servers must be findable - fixed, advertised ports.",
                  "Clients are many and short-lived - the OS assigns a free dynamic port.",
                  "The connection is still unique: client IP + ephemeral port + server IP + port.",
                  "Dynamic range: roughly 49152-65535.",
                ],
              },
            ],
          },
          {
            number: "5.2",
            title: "Internet addressing and the java.net toolbox",
            body: [
              "InetAddress is Java's IP-address object, and the marking detail is that it has NO public constructor - every instance comes from a static factory. getByName(\"www.rgpv.ac.in\") performs a DNS lookup and returns the address (throwing the checked UnknownHostException when the name does not resolve); getAllByName() returns all addresses of a multi-homed host; getLocalHost() returns the machine's own address. Instance methods: getHostName(), getHostAddress(), isReachable(timeout). Subclasses Inet4Address and Inet6Address distinguish IPv4 dotted-decimal from IPv6 colon-hex forms.",
              "URL is the pointer to a resource: protocol://host:port/path?query. new URL(\"https://rgpv.ac.in/index.html\") validates the string at construction (the checked MalformedURLException - the URL is parsed before any network happens). openStream() is the convenience GET: it returns an InputStream over the response body, ready to read line by line; openConnection() returns a URLConnection for the full conversation - headers, POST bodies, caching. Together with Socket, ServerSocket and InetAddress, these classes are the entire java.net surface the syllabus names.",
              "The worked program does the whole topic in twelve lines: resolve www.rgpv.ac.in and print its IP; print the local host's name and address; construct a URL; openStream() into a BufferedReader and print the first line of the page. Both failure modes are checked exceptions and both appear in the program: UnknownHostException from the DNS lookup, MalformedURLException from the URL parse - the try/catch is part of the answer, not decoration.",
              "The exam asks 'explain InetAddress with its methods and a program' and 'explain the URL class'. Answer with the factory-only construction sentence (no new InetAddress()), the three factory methods, the two URL failure modes, and the program. The distinction - InetAddress is an ADDRESS, URL is a resource POINTER, Socket is a CHANNEL - is the 3-mark contrast that often rides along.",
            ],
            keyTerms: [
              { term: "InetAddress", definition: "An IP address object - factory-built only: getByName, getAllByName, getLocalHost." },
              { term: "DNS lookup", definition: "Hostname to IP resolution performed by getByName(); fails with UnknownHostException." },
              { term: "URL", definition: "protocol://host:port/path - a resource pointer, validated at construction." },
              { term: "openStream()", definition: "Convenience GET returning an InputStream over the response body." },
              { term: "MalformedURLException", definition: "Checked exception thrown when the URL string does not parse." },
            ],
            codeExample: {
              language: "java",
              caption: "NetDemo.java - resolve a name, read a page",
              code: `import java.io.*;
import java.net.*;

public class NetDemo {
    public static void main(String[] args) throws Exception {
        InetAddress ip = InetAddress.getByName("www.rgpv.ac.in");
        System.out.println(ip.getHostAddress());        // e.g. 14.139.235.X
        System.out.println(InetAddress.getLocalHost().getHostName());

        URL url = new URL("https://rgpv.ac.in/index.html");
        BufferedReader in = new BufferedReader(
            new InputStreamReader(url.openStream()));   // convenience GET
        System.out.println(in.readLine());              // first line of the page
        in.close();
    }
}
// UnknownHostException if the name does not resolve
// MalformedURLException if the URL string does not parse`,
            },
            diagram: {
              kind: "pipeline",
              title: "From hostname to bytes",
              caption: "The lookup happens before any socket exists.",
              stages: [
                { label: "Hostname string", note: "\"www.rgpv.ac.in\"" },
                { label: "DNS lookup", note: "getByName() - UnknownHostException on failure" },
                { label: "InetAddress", note: "IP + name, ready to use" },
                { label: "Socket / URL opens", note: "connection to IP + port" },
                { label: "Bytes flow", note: "readLine() / read()" },
              ],
            },
            bullets: [
              "InetAddress has no public constructor - static factories only.",
              "getByName does DNS; getLocalHost is self; getAllByName for multi-homed hosts.",
              "Instance methods: getHostName, getHostAddress, isReachable.",
              "URL validates at construction - MalformedURLException is checked.",
              "openStream() returns the body stream; openConnection() gives full control.",
              "Three nouns: InetAddress = address, URL = resource pointer, Socket = channel.",
            ],
            callout: {
              type: "warning",
              title: "InetAddress has no constructor",
              body: "new InetAddress(...) is a compile error - every address comes from a static factory (getByName, getLocalHost, getAllByName). And both network exceptions here are CHECKED: UnknownHostException from DNS and MalformedURLException from URL parsing - the try/catch is part of a correct answer.",
            },
            examQuestions: [
              {
                q: "Explain internet addressing in Java: the InetAddress class, its factory methods and key methods, and the URL class with openStream(). Write a program that resolves a hostname and reads the first line of a web page.",
                marks: 14,
                outline: [
                  "InetAddress represents an IP; NO public constructor - static factories.",
                  "getByName does DNS (UnknownHostException); getLocalHost; getAllByName.",
                  "Methods: getHostName, getHostAddress, isReachable.",
                  "Inet4Address / Inet6Address distinguish IP versions.",
                  "URL: protocol://host:port/path; validated at construction (MalformedURLException).",
                  "openStream() returns the body InputStream.",
                  "Program: getByName, print address, new URL, openStream, readLine.",
                ],
              },
              {
                q: "Differentiate URL, InetAddress and Socket - what does each represent, and which methods construct or open each?",
                marks: 7,
                outline: [
                  "InetAddress: an address - built by static factories (getByName).",
                  "URL: a resource pointer - new URL(string), validated on construction.",
                  "Socket: a communication channel - new Socket(host, port) opens it.",
                  "URL points, InetAddress resolves, Socket connects and carries streams.",
                  "Failure modes: UnknownHostException, MalformedURLException, ConnectException.",
                ],
              },
            ],
          },
          {
            number: "5.3",
            title: "TCP sockets - Socket and ServerSocket",
            body: [
              "The TCP pair divides the roles. Server side: ServerSocket ss = new ServerSocket(2000) binds the port and listens; Socket s = ss.accept() BLOCKS until a client arrives and returns a NEW Socket dedicated to that conversation. Client side: Socket s = new Socket(\"localhost\", 2000) performs the connect (the TCP handshake - SYN, SYN-ACK, ACK - is below the API; accept() returning is its visible consequence). Both sides then hold streams: s.getInputStream() and s.getOutputStream() - wrap them in BufferedReader and PrintWriter and the conversation is ordinary I/O.",
              "The worked echo pair: the client println(\"hello\"); the server readLine(), then println(\"echo: hello\") back; the client reads and prints it. close() on both ends releases the connection. Ordering note: the server must reach accept() before or while the client connects, or the client's connect waits in the listen backlog. Everything unreliable - retransmission, ordering, error checking - is TCP's business below the API; the program sees only a clean byte stream.",
              "Serving many clients is the pattern that connects Unit III to Unit V: accept() in a loop, and for each returned Socket spawn a thread - while (true) { Socket s = ss.accept(); new Handler(s).start(); }. The ServerSocket only ever listens; each conversation gets its own Socket, its own streams and its own thread. setSoTimeout(ms) bounds how long accept() or a read blocks; close() from either side surfaces as an IOException (often EOF) in the peer - the failure signals a multithreaded server must handle per client.",
              "The exam asks 'write a TCP client-server echo/chat program' (the standard 14-mark program with the roles of ServerSocket, accept(), getInputStream and getOutputStream explained) and 'how would you serve many clients simultaneously' - the accept-loop plus one-thread-per-client is the expected answer. Add the failure sentence: a client that closes surfaces as IOException on the server's read, so each handler thread owns its try/catch - that is what makes the multithreaded server robust rather than just concurrent.",
            ],
            keyTerms: [
              { term: "ServerSocket", definition: "The listening socket: bind + listen; accept() returns conversation sockets." },
              { term: "accept()", definition: "Blocks until a client connects; returns a NEW Socket per client." },
              { term: "Socket", definition: "The conversation endpoint - getInputStream/getOutputStream carry the data." },
              { term: "Handshake", definition: "TCP's SYN/SYN-ACK/ACK setup - below the API, visible as accept() returning." },
              { term: "One thread per client", definition: "The scaling pattern: accept() in a loop, one handler thread per returned Socket." },
            ],
            codeExample: {
              language: "java",
              caption: "EchoServer.java + EchoClient.java - one conversation over TCP",
              code: `import java.io.*;
import java.net.*;

public class EchoServer {
    public static void main(String[] args) throws Exception {
        ServerSocket server = new ServerSocket(2000);   // bind + listen
        Socket s = server.accept();                     // blocks until a client
        BufferedReader in = new BufferedReader(
            new InputStreamReader(s.getInputStream()));
        PrintWriter out = new PrintWriter(s.getOutputStream(), true);

        String line = in.readLine();                    // read from the client
        out.println("echo: " + line);                   // write back
        System.out.println("served " + s.getInetAddress());

        s.close();
        server.close();
    }
}

class EchoClient {
    public static void main(String[] args) throws Exception {
        Socket s = new Socket("localhost", 2000);       // connect + handshake
        PrintWriter out = new PrintWriter(s.getOutputStream(), true);
        BufferedReader in = new BufferedReader(
            new InputStreamReader(s.getInputStream()));
        out.println("hello");
        System.out.println(in.readLine());              // echo: hello
        s.close();
    }
}`,
            },
            diagram: {
              kind: "flow",
              title: "A TCP conversation, start to finish",
              caption: "The server listens; the client connects; accept() hands over a fresh Socket.",
              steps: [
                { label: "new ServerSocket(2000)", note: "server binds + listens" },
                { label: "accept() blocks", note: "server waits" },
                { label: "new Socket(host, 2000)", note: "client connects - handshake" },
                { label: "accept() returns", note: "a NEW Socket for this client" },
                { label: "Both wrap streams", note: "getInputStream / getOutputStream" },
                { label: "Exchange, then close()", note: "reliable, ordered, done" },
              ],
            },
            bullets: [
              "ServerSocket binds and listens; accept() blocks and returns a per-client Socket.",
              "Client: new Socket(host, port) performs the connect and handshake.",
              "Both sides talk through getInputStream()/getOutputStream().",
              "TCP guarantees: ordered, error-checked, retransmitted byte stream.",
              "Scale: accept() in a loop, one thread per accepted Socket.",
              "setSoTimeout bounds blocking; peer close() surfaces as IOException.",
            ],
            callout: {
              type: "tip",
              title: "accept() hands you a NEW socket",
              body: "The ServerSocket stays listening forever; every conversation runs on a fresh Socket object returned by accept(). Beginners try to read and write on the ServerSocket itself and stall - the exam probe 'what does accept() return?' wants: a Socket connected to exactly one client, which is why servers spawn one thread per client.",
            },
            examQuestions: [
              {
                q: "Write a TCP server and client where the client sends a string and the server echoes it back. Explain the roles of ServerSocket, accept(), getInputStream and getOutputStream, and what happens on the network during connection setup.",
                marks: 14,
                outline: [
                  "Server: new ServerSocket(2000) binds and listens.",
                  "accept() blocks; the client's connect triggers the TCP handshake.",
                  "accept() returns a NEW Socket dedicated to that client.",
                  "Both sides wrap getInputStream()/getOutputStream().",
                  "Client println; server readLine + println(\"echo: ...\"); client reads.",
                  "close() both ends; the server prints the client's InetAddress.",
                  "TCP guarantees ordering, error checking, retransmission below the API.",
                ],
              },
              {
                q: "How would you extend the echo server to serve many clients simultaneously? Explain the accept-loop with one thread per client.",
                marks: 7,
                outline: [
                  "while (true) { Socket s = ss.accept(); new Handler(s).start(); }",
                  "The ServerSocket only listens - never does conversation I/O.",
                  "Each client gets its own Socket, streams and thread.",
                  "Threads share nothing per conversation - no synchronization needed there.",
                  "Per-client IOExceptions are handled inside the handler thread.",
                ],
              },
            ],
          },
          {
            number: "5.4",
            title: "UDP sockets - DatagramSocket and DatagramPacket",
            body: [
              "UDP is connectionless: no handshake, no stream, no guarantee - just packets (datagrams) addressed like letters. The two classes: DatagramSocket is the mailbox - one per endpoint, bound to a port if it receives; DatagramPacket is the envelope - for sending it carries byte[] data, length, destination InetAddress and port; for receiving it carries just a buffer whose contents and length fill in on arrival. send(packet) fires; receive(packet) blocks until a datagram lands.",
              "The worked pair: the sender builds byte[] msg = \"ping\".getBytes(), wraps it with InetAddress.getByName(\"localhost\") and port 3000, send(), done - no server needed to be there first, which is the point. The receiver binds DatagramSocket(3000), prepares byte[256] and a packet around it, receive() blocks, and the message prints as new String(in.getData(), 0, in.getLength()) - trimmed to getLength() because the buffer is bigger than the datagram. Ceiling: a datagram's payload maxes near 65507 bytes; larger messages must be split by the application.",
              "When UDP wins: latency-sensitive, self-healing traffic. DNS - one query, one reply, retry cheap. Streaming media - a lost frame is better skipped than delayed by retransmission. Online games - state arrives repeatedly, the newest packet wins. Broadcast and multicast - one send, many receivers, impossible on TCP. The application, not the transport, owns reliability: an echo over UDP that wants acknowledgments must build them itself at the application level.",
              "The exam asks 'write a UDP sender/receiver program' and 'differentiate TCP and UDP sockets' - the table on connection, reliability, ordering, overhead, classes and applications. The trim-to-getLength() detail and the ~64KB ceiling are the marking details inside the program question. In the comparison, lead with the guarantee line - TCP retransmits what UDP drops - and finish with the applications row, because that is where the examiner checks you know DNS, streaming and games are UDP by design, not by accident.",
            ],
            keyTerms: [
              { term: "DatagramSocket", definition: "The UDP mailbox - send() and receive(); bound to a port to receive." },
              { term: "DatagramPacket", definition: "The envelope: data, length, address, port (for sending) or a fill-on-arrival buffer." },
              { term: "Connectionless", definition: "No handshake or state - each packet travels independently." },
              { term: "getLength()", definition: "The received packet's real size - trim to it when reading the buffer." },
              { term: "Broadcast", definition: "One datagram to many receivers - TCP cannot do this." },
            ],
            codeExample: {
              language: "java",
              caption: "UdpDemo.java + UdpReceiver.java - fire and receive",
              code: `import java.net.*;

public class UdpDemo {
    public static void main(String[] args) throws Exception {
        DatagramSocket sender = new DatagramSocket();       // ephemeral port
        byte[] msg = "ping".getBytes();
        DatagramPacket out = new DatagramPacket(
            msg, msg.length, InetAddress.getByName("localhost"), 3000);
        sender.send(out);                                   // fire and forget
        sender.close();
    }
}

class UdpReceiver {
    public static void main(String[] args) throws Exception {
        DatagramSocket sock = new DatagramSocket(3000);     // same port
        byte[] buf = new byte[256];
        DatagramPacket in = new DatagramPacket(buf, buf.length);
        sock.receive(in);                                   // blocks until a packet
        System.out.println(new String(in.getData(), 0, in.getLength()));
        sock.close();
    }
}
// prints: ping   (only if the receiver was already running - no guarantees!)`,
            },
            diagram: {
              kind: "compare",
              title: "TCP vs UDP",
              caption: "Everything the two transports differ on, in one picture.",
              left: {
                heading: "TCP",
                items: [
                  "Connection first: handshake",
                  "Reliable, ordered byte stream",
                  "Lost data retransmitted",
                  "Socket + ServerSocket",
                  "HTTP, FTP, echo servers",
                ],
              },
              right: {
                heading: "UDP",
                items: [
                  "Connectionless datagrams",
                  "No delivery or ordering guarantee",
                  "Never retransmits; minimal overhead",
                  "DatagramSocket + DatagramPacket",
                  "DNS, streaming, games, broadcast",
                ],
              },
            },
            bullets: [
              "DatagramSocket = mailbox; DatagramPacket = envelope with data + address + port.",
              "receive() blocks until a datagram arrives; send() just fires.",
              "Trim received data to in.getLength() - the buffer is usually bigger.",
              "Payload ceiling near 65507 bytes per datagram.",
              "No ordering or delivery guarantee - the application owns reliability.",
              "UDP wins for latency: DNS, media, games, broadcast and multicast.",
            ],
            callout: {
              type: "exam",
              title: "Trim to getLength()",
              body: "receive() fills your buffer, but the datagram may be shorter: read exactly in.getLength() bytes - new String(in.getData(), 0, in.getLength()) - or you print buffer junk after the message. Add the ~64KB ceiling and the no-guarantee sentence, and the UDP program answer is complete.",
            },
            examQuestions: [
              {
                q: "Write a UDP sender and receiver program using DatagramSocket and DatagramPacket, and explain how the packet's data, length and address fields are used on each side.",
                marks: 14,
                outline: [
                  "Sender: DatagramSocket(), byte[] msg, packet with data + length + address + port.",
                  "send() fires - no connection, no server needed first.",
                  "Receiver: DatagramSocket(3000) binds the port.",
                  "Packet built around a buffer; receive() blocks until arrival.",
                  "getData() returns the buffer; getLength() the actual datagram size.",
                  "Print new String(in.getData(), 0, in.getLength()) - trimmed.",
                  "No guarantees: the ping prints only if the receiver was already listening.",
                ],
              },
              {
                q: "Differentiate TCP and UDP sockets on connection, reliability, ordering, overhead and typical applications, naming the Java classes of each.",
                marks: 7,
                outline: [
                  "TCP: connection-oriented (handshake); UDP: connectionless.",
                  "TCP reliable and ordered; UDP best-effort, may drop or reorder.",
                  "TCP overhead from acknowledgments; UDP minimal header cost.",
                  "Classes: Socket/ServerSocket vs DatagramSocket/DatagramPacket.",
                  "Uses: HTTP/FTP/echo vs DNS/streaming/games/broadcast.",
                ],
              },
            ],
          },
          {
            number: "5.5",
            title: "RMI - architecture, stubs, skeletons and the registry",
            body: [
              "RMI (Remote Method Invocation) lets a program call a method on an object living in another JVM as if it were local. Four participants: the remote interface - extends java.rmi.Remote, and EVERY method declares throws RemoteException; the implementation - extends UnicastRemoteObject and implements the interface; the server - constructs the implementation and publishes it; the client - looks it up and invokes. The illusion is built by the STUB: a client-side class implementing the remote interface whose methods do not execute anything - they MARSHAL the arguments (serialize them) into a network call.",
              "The plumbing is layered: client object → stub (proxy: marshals parameters) → remote reference layer → transport (TCP underneath) → skeleton (server-side proxy: unmarshals, invokes the real method) → remote object; return values flow back serialized the same way. The registry is the name service: rmiregistry runs on default port 1099, Naming.rebind(\"Hello\", obj) publishes a stub under a name, Naming.lookup(\"rmi://host/Hello\") retrieves it. Since Java 5 stubs are generated dynamically at runtime; rmic HelloImpl is the legacy manual generation step the syllabus still names.",
              "Why RemoteException on every method: any hop can fail - connection drops, marshalling errors, server death - so the interface forces clients to treat network failure as a normal outcome of every call, checked at compile time. And the connection to Unit IV: arguments and return values must be Serializable - primitives and Serializable objects are copied by value across the wire; an argument whose type is itself a Remote interface passes by reference as a stub. RMI is serialization applied to distributed objects.",
              "The exam asks 'explain the RMI architecture with a diagram' and 'state the role of the stub, skeleton and registry'. Draw the five layers, define marshalling and unmarshalling in one line each, give the registry's port and its two Naming methods, and finish with the serialization sentence - the cross-unit link the examiner probes. The compile-time half matters too: RemoteException on every remote method means the client cannot forget network failure - the compiler, not runtime luck, enforces the handling.",
            ],
            keyTerms: [
              { term: "Remote interface", definition: "extends java.rmi.Remote; every method declares throws RemoteException." },
              { term: "Stub", definition: "The client-side proxy implementing the interface - marshals arguments into a call." },
              { term: "Skeleton", definition: "The server-side proxy - unmarshals and invokes the real object." },
              { term: "RMI registry", definition: "The name service on port 1099: Naming.rebind publishes, Naming.lookup retrieves." },
              { term: "Marshalling", definition: "Serializing arguments and returns for the wire; unmarshalling rebuilds them." },
            ],
            table: {
              caption: "The RMI participants.",
              headers: ["Participant", "Side", "Role"],
              rows: [
                ["Remote interface", "shared", "the contract; every method throws RemoteException"],
                ["Implementation", "server", "extends UnicastRemoteObject, real method bodies"],
                ["Stub", "client", "proxy - marshals arguments, forwards the call"],
                ["Skeleton", "server", "unmarshals, invokes the implementation"],
                ["rmiregistry", "server host", "maps names to stubs on port 1099"],
                ["Client", "client", "lookup, cast to the interface, invoke"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "The RMI call path",
              caption: "Index 0 is the caller; every hop between is plumbing the illusion needs.",
              layers: [
                { label: "Client", note: "calls hello.sayHello() through the interface" },
                { label: "Stub (client proxy)", note: "marshals arguments, sends over TCP" },
                { label: "Remote reference layer + transport", note: "routes and delivers the call" },
                { label: "Skeleton (server proxy)", note: "unmarshals, invokes the real method" },
                { label: "Remote object (HelloImpl)", note: "executes and returns - serialized back" },
              ],
            },
            bullets: [
              "Remote interface: extends Remote; every method throws RemoteException.",
              "Implementation extends UnicastRemoteObject - exporting is its constructor's side effect.",
              "Stub marshals on the client; skeleton unmarshals on the server.",
              "Registry: rmiregistry on port 1099; rebind publishes, lookup retrieves the stub.",
              "Since Java 5 stubs generate dynamically; rmic is the legacy step.",
              "Arguments and returns must be Serializable - Unit IV's mechanism on the wire.",
            ],
            callout: {
              type: "warning",
              title: "Every remote method throws RemoteException",
              body: "Omit it on ONE method and the interface fails to compile - Remote methods must declare the network can fail. And Naming.lookup returns the STUB, not the object: the client casts to the interface (Hello), never to HelloImpl, which need not even be on the client's classpath.",
            },
            examQuestions: [
              {
                q: "Explain the architecture of RMI with a diagram: client, stub, remote reference layer, transport, skeleton and remote object. State the role of the RMI registry and why every remote method declares throws RemoteException.",
                marks: 14,
                outline: [
                  "Client calls the interface; the stub proxies the call.",
                  "Stub marshals arguments - serialization onto the wire.",
                  "Remote reference layer + transport (TCP) deliver the call.",
                  "Skeleton unmarshals and invokes the real implementation.",
                  "Return value travels back serialized through the same path.",
                  "Registry on port 1099: rebind publishes, lookup retrieves the stub.",
                  "RemoteException on every method: any hop can fail - checked at compile time.",
                ],
              },
              {
                q: "What are marshalling and unmarshalling in RMI, and how does serialization (Unit IV) make them work?",
                marks: 7,
                outline: [
                  "Marshalling: serializing arguments and return values into bytes.",
                  "Unmarshalling: rebuilding them on the other side - no constructors run.",
                  "ObjectOutputStream/ObjectInputStream do the work inside stub and skeleton.",
                  "Parameters must be Serializable or Remote (stubs pass by reference).",
                  "The same mechanism serves files (4.5) and the wire (this unit).",
                ],
              },
            ],
          },
          {
            number: "5.6",
            title: "Steps of creating an RMI application, with an example",
            body: [
              "The six steps, in order. One: define the remote interface - extends Remote, every method declares throws RemoteException. Two: implement it - the class extends UnicastRemoteObject, and its no-arg constructor declares throws RemoteException because exporting happens in super(). Three: compile, then generate stubs - rmic HelloImpl in the legacy flow (Java 5+ generates them dynamically). Four: start the registry - rmiregistry, port 1099 by default (start rmiregistry 2000 to change it). Five: start the server - it constructs the implementation and Naming.rebind(\"Hello\", impl). Six: run the client - Naming.lookup(\"rmi://localhost/Hello\"), cast to the interface, invoke.",
              "The worked example is four small files: Hello (the interface) with String sayHello() throws RemoteException; HelloImpl returning \"Hello from the server\"; HelloServer re-binding and printing 'server ready'; HelloClient looking up, casting to Hello - NEVER to HelloImpl, which need not be on the client's classpath - and printing the returned string. The whole flow compiles to: javac *.java, rmic HelloImpl, rmiregistry &, java HelloServer, java HelloClient - four processes, three JVMs.",
              "What actually moves: the client thread calls h.sayHello() on the stub; the stub marshals zero arguments and sends the call over TCP; the skeleton unmarshals, invokes HelloImpl.sayHello() on the SERVER JVM; the result string serializes back and the stub returns it to the waiting client. Failure at any hop surfaces as RemoteException at the call site - the client code reads like a local call but compiles the network failure handling in. That reading-like-local property is RMI's design goal and the sentence that earns the final mark.",
              "The exam asks 'list the steps to create an RMI application and write an example'. Write the six steps numbered, then the four files with their roles; quoting port 1099, the four processes, and 'lookup returns the stub' are the bonus marks that separate 7 from 14. Name the processes explicitly - rmiregistry, the server JVM, the client JVM, and rmic only as a build-time tool - because 'who runs where' is the question behind the question.",
            ],
            keyTerms: [
              { term: "rmic", definition: "The legacy stub/skeleton generator run on the implementation class." },
              { term: "rmiregistry", definition: "The name service process - port 1099 by default." },
              { term: "Naming.rebind / lookup", definition: "Publish a stub under a name; retrieve it by URL rmi://host/name." },
              { term: "UnicastRemoteObject", definition: "The implementation's parent - constructing it exports the object." },
              { term: "Remote interface", definition: "Step one: extends Remote, methods throw RemoteException." },
            ],
            codeExample: {
              language: "java",
              caption: "The Hello RMI application - four files, six steps",
              code: `// file: Hello.java - step 1: the remote interface
import java.rmi.*;
interface Hello extends Remote {
    String sayHello() throws RemoteException;
}

// file: HelloImpl.java - step 2: the implementation
import java.rmi.server.*;
class HelloImpl extends UnicastRemoteObject implements Hello {
    HelloImpl() throws RemoteException { super(); }   // export on construction
    public String sayHello() { return "Hello from the server"; }
}

// file: HelloServer.java - step 5: publish into the registry
class HelloServer {
    public static void main(String[] a) throws Exception {
        java.rmi.Naming.rebind("rmi://localhost/Hello", new HelloImpl());
        System.out.println("server ready");
    }
}

// file: HelloClient.java - step 6: look up and invoke
class HelloClient {
    public static void main(String[] a) throws Exception {
        Hello h = (Hello) java.rmi.Naming.lookup("rmi://localhost/Hello");
        System.out.println(h.sayHello());   // Hello from the server
    }
}
// run: javac *.java && rmic HelloImpl && rmiregistry & then java HelloServer, java HelloClient`,
            },
            diagram: {
              kind: "flow",
              title: "The six steps of an RMI application",
              caption: "Interface, implementation, stubs, registry, server, client - in that order.",
              steps: [
                { label: "1 Define the interface", note: "extends Remote, throws RemoteException" },
                { label: "2 Implement it", note: "extends UnicastRemoteObject" },
                { label: "3 Compile + rmic", note: "legacy stub generation" },
                { label: "4 Start the registry", note: "rmiregistry - port 1099" },
                { label: "5 Start the server", note: "Naming.rebind(\"Hello\", impl)" },
                { label: "6 Run the client", note: "Naming.lookup, cast to Hello, invoke" },
              ],
            },
            bullets: [
              "Step 1: interface extends Remote; every method throws RemoteException.",
              "Step 2: implementation extends UnicastRemoteObject; constructor throws RemoteException.",
              "Step 3: javac, then rmic HelloImpl for legacy stubs (dynamic since Java 5).",
              "Step 4: rmiregistry on port 1099 - a separate process, started first.",
              "Step 5: server rebinds; step 6: client looks up and casts to the INTERFACE.",
              "The call marshals over TCP and returns serialized - RemoteException on any hop.",
            ],
            callout: {
              type: "exam",
              title: "The registry stores names, not objects that run",
              body: "rebind happens in the server process (it exports the object), lookup happens in the client, and the registry itself is a separate rmiregistry process on port 1099 that never executes your code - it only maps names to stubs. Naming who runs where (registry, server JVM, client JVM) is what separates a 7 from a 14 on this question.",
            },
            examQuestions: [
              {
                q: "List the steps involved in creating an RMI application and write a complete Hello-world RMI example - remote interface, implementation, server and client - naming the tools and the registry port used at each step.",
                marks: 14,
                outline: [
                  "Step 1: interface Hello extends Remote; sayHello throws RemoteException.",
                  "Step 2: HelloImpl extends UnicastRemoteObject implements Hello.",
                  "Step 3: javac, then rmic HelloImpl - legacy stub generation.",
                  "Step 4: start rmiregistry - default port 1099.",
                  "Step 5: server Naming.rebind(\"rmi://localhost/Hello\", impl).",
                  "Step 6: client Naming.lookup, cast to Hello, call sayHello().",
                  "Output 'Hello from the server'; four processes across three JVMs.",
                ],
              },
              {
                q: "In the Hello RMI example, trace what travels across the network when the client calls sayHello(), and state why the client casts to the interface and not to HelloImpl.",
                marks: 7,
                outline: [
                  "The call marshals (serializes) arguments in the stub and crosses TCP.",
                  "The skeleton unmarshals and invokes HelloImpl on the server JVM.",
                  "The return string serializes back to the stub.",
                  "The client holds only the interface and stub - not HelloImpl's code.",
                  "So the cast target is Hello; casting to HelloImpl would ClassCastException.",
                ],
              },
            ],
          },
          {
            number: "5.7",
            title: "Choosing the transport - TCP, UDP and RMI",
            body: [
              "The choice is the abstraction level you want to program at. UDP datagrams are the network's raw unit - you build your own reliability, ordering and framing. TCP sockets give reliable ordered byte streams - you still design the message protocol on top. RMI gives method calls on remote objects - marshalling, routing, threading and failure-signalling are the framework's job; you write interfaces. Each layer inherits the one below: RMI actually rides on TCP, which rides on IP - so this is not three transports but three levels of abstraction over the same wire.",
              "The worked decisions: a college results server where correctness matters and clients are Java → TCP sockets, or RMI if an object API helps; a campus clock broadcast where the newest packet wins and late packets are garbage → UDP; a distributed calculator library where clients call add(a, b) on a server object → RMI, because the interface survives changes - swap the implementation and clients never notice. Migrating RMI to sockets means rewriting the protocol by hand; migrating sockets to RMI means inventing object semantics - the effort asymmetry is the design lesson.",
              "The comparison table completes it: connection (oriented vs connectionless vs managed by RMI), reliability (guaranteed vs best-effort vs guaranteed with RemoteException signalling), data unit (byte stream vs datagram vs serialized method call), classes, programming effort, and the one hard limit - RMI is Java-to-Java only, because arguments are serialized Java objects; a C++ client must use sockets whatever you build. That limit is the standard 'when is RMI the wrong choice' answer.",
              "The exam asks 'compare TCP, UDP and RMI' or 'when would you choose RMI over sockets'. Answer with the abstraction-level argument, the table, the Java-to-Java limitation, and one worked decision per transport - four moves, full marks. If the question is the reverse - when RMI is wrong - the two disqualifiers are non-Java clients and the need for a hand-rolled wire protocol: RMI buys you object semantics, and paying for that with Java-only clients is the trade the examiner wants named.",
            ],
            keyTerms: [
              { term: "Abstraction level", definition: "Datagrams < byte streams < remote method calls - the real axis of the choice." },
              { term: "Protocol framing", definition: "The message structure you build yourself on raw TCP streams." },
              { term: "Java-to-Java", definition: "RMI's limit - serialized Java objects on both ends; other languages need sockets." },
              { term: "Distributed object", definition: "An object whose methods execute in another JVM via a stub." },
              { term: "Transport choice", definition: "Match reliability needs and language scope: TCP, UDP or RMI." },
            ],
            table: {
              caption: "TCP vs UDP vs RMI.",
              headers: ["Aspect", "TCP sockets", "UDP sockets", "RMI"],
              rows: [
                ["Connection", "oriented - handshake", "connectionless", "registry + exported object"],
                ["Reliability", "guaranteed, ordered", "best-effort, no ordering", "guaranteed; failures as RemoteException"],
                ["Data unit", "byte stream", "datagram (approx. 64KB max)", "serialized method call"],
                ["Classes", "Socket, ServerSocket", "DatagramSocket, DatagramPacket", "Remote, UnicastRemoteObject, Naming"],
                ["Effort", "design your own protocol", "build your own reliability", "write an interface; framework does the rest"],
                ["Language scope", "any language", "any language", "Java-to-Java only"],
                ["Typical use", "chat, file transfer, HTTP", "DNS, streaming, games, broadcast", "distributed object applications"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "What does your application need?",
              caption: "One question, three transports - and a fourth answer people forget.",
              start: "What does the application need?",
              branches: [
                { label: "Reliable ordered conversation", outcome: "TCP: Socket + ServerSocket - chat, file transfer, HTTP", good: true },
                { label: "Fast, loss-tolerant, broadcast", outcome: "UDP: DatagramSocket + DatagramPacket - DNS, media, games", good: true },
                { label: "Call methods on a remote object", outcome: "RMI: interface + UnicastRemoteObject + registry", good: true },
                { label: "Both ends in the same JVM", outcome: "none of these - a plain method call is cheaper than any transport", good: false },
              ],
            },
            bullets: [
              "The axis is abstraction: datagrams < byte streams < method calls.",
              "RMI rides on TCP - not a third transport, a higher level.",
              "TCP when correctness matters; UDP when latency beats completeness.",
              "RMI when both ends are Java and an object API pays for itself.",
              "RMI's hard limit: Java-to-Java only - serialized Java objects on the wire.",
              "Migrating up (sockets to RMI) is cheap; migrating down rewrites the protocol.",
            ],
            callout: {
              type: "tip",
              title: "RMI is not a third transport",
              body: "RMI rides on TCP; choosing between them is choosing an abstraction level, not a wire protocol. And RMI speaks only Java-to-Java - a C++ client must use sockets whatever you build. Those two sentences are the complete answer to 'when is RMI the wrong choice?'.",
            },
            examQuestions: [
              {
                q: "Compare TCP sockets, UDP sockets and RMI as ways of building networked Java applications - connection, reliability, data unit, classes used, programming effort and typical applications. When is RMI the wrong choice?",
                marks: 14,
                outline: [
                  "TCP: connection-oriented, reliable byte stream - Socket/ServerSocket.",
                  "UDP: connectionless datagrams, best-effort - DatagramSocket/DatagramPacket.",
                  "RMI: remote method calls over serialized objects - Remote, Naming.",
                  "Effort: your protocol on TCP, your reliability on UDP, your interface on RMI.",
                  "Uses: chat/transfer vs DNS/media/broadcast vs distributed objects.",
                  "RMI is Java-to-Java only - serialized Java objects on the wire.",
                  "Wrong choice: non-Java clients, or when a simple socket protocol suffices.",
                ],
              },
              {
                q: "For a college results server, a campus clock broadcast and a distributed calculator, recommend TCP, UDP or RMI respectively and justify each in two lines.",
                marks: 7,
                outline: [
                  "Results server: TCP - correctness and ordering matter; a protocol is easy to define.",
                  "Clock broadcast: UDP - the newest packet wins; late packets are garbage.",
                  "Distributed calculator: RMI - method-call interface, framework handles marshalling.",
                  "Bonus: RMI assumes Java clients; the clock needs no reliability at all.",
                  "Each justification names the deciding property, not just the transport.",
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
        { topic: "Exception handling: try-catch-finally, throw vs throws, checked vs unchecked, stack propagation", weight: "approx. 12-15 marks", note: "Every paper asks one 'explain with example' plus one 'differentiate' - rehearse the divide-by-zero trace until it is automatic." },
        { topic: "Multithreading: life cycle, two creation routes, synchronization, producer-consumer", weight: "approx. 12-15 marks", note: "The wait/notify program is the 14-mark staple; the start-vs-run and sleep-vs-wait contrasts decide the top marks." },
        { topic: "Interfaces, inheritance, polymorphism and abstract classes", weight: "approx. 10-12 marks", note: "One 'define and implement' program per paper - draw the hierarchy and trace the dispatch." },
        { topic: "JDBC: connectivity model, driver types, the six-step program, ResultSet navigation", weight: "approx. 10-12 marks", note: "Write the numbered program from memory; name all four driver types with one trade-off each." },
        { topic: "AWT controls, layout managers and the event delegation model", weight: "approx. 10-12 marks", note: "Draw the four layouts and the source-event-listener diagram; match every control to its event class." },
        { topic: "TCP and UDP socket programs with the comparison table", weight: "approx. 8-10 marks", note: "The echo pair and the datagram pair; say who blocks where (accept, receive, connect)." },
        { topic: "RMI: architecture, registry services, the six steps with the Hello example", weight: "approx. 6-8 marks", note: "Number the steps, name port 1099, and draw the stub-skeleton layer stack." },
        { topic: "JDK/JVM/API, packages and access specifiers, constructors, arrays and GC", weight: "approx. 6-8 marks", note: "Short-note bank: write the access matrix and the JDK-JRE-JVM stack from memory." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Two hours a day, five days a week, with the weekend for writing programs by hand. Every unit ends with one program you can produce unaided on paper - a running class, a synchronized buffer, a JDBC query - because in this subject the code IS the answer.",
      ],
      weeks: [
        {
          week: "Week 1",
          focus: "Unit I - the environment and the OO core",
          tasks: [
            "Trace Human.java to bytecode to JVM execution; write the JDK-JRE-JVM nesting from memory.",
            "Write BankAccount, the Shape hierarchy and the Drawable interface by hand, with outputs.",
            "Write the access-specifier matrix and the scope-and-lifetime table; import a package twice.",
            "Explain constructor overloading, this(), the copy constructor and finalize() in one page.",
            "Create and index arrays; state the GC eligibility rule and one Java-level leak.",
          ],
        },
        {
          week: "Week 2",
          focus: "Unit II - AWT, events, applets and Swing",
          tasks: [
            "Build the controls form program; add and remove controls; name each control's event class.",
            "Write the four layout managers with diagrams and nest a grid inside a border region.",
            "Write the delegation demo; draw source → event object → listener with registration.",
            "Draw the event class hierarchy; write window closing with WindowListener and with WindowAdapter.",
            "Trace the applet life cycle with the HTML tag; write the AWT vs Swing table.",
          ],
        },
        {
          week: "Week 3",
          focus: "Unit III - threads",
          tasks: [
            "Draw the five-state life cycle; write both creation routes and the start-vs-run sentence.",
            "Run the counter demo unsynchronized and synchronized; quote the two totals.",
            "Write the producer-consumer buffer with wait/notify and justify the while loop.",
            "Write the daemon thread note and the sleep-vs-wait contrast; fill the thread-methods table.",
          ],
        },
        {
          week: "Week 4",
          focus: "Unit III - exceptions, plus Unit IV streams",
          tasks: [
            "Write the try-catch-finally program; trace propagation through two stack frames.",
            "Draw the Throwable hierarchy; state the catch-or-declare rule with four examples.",
            "Write the byte-copy and char-copy programs; state both end-of-data sentinels.",
            "Write the RandomAccessFile seek demo with the n * RECORD_SIZE formula.",
            "Write the serialization round-trip; explain transient and serialVersionUID.",
          ],
        },
        {
          week: "Week 5",
          focus: "Unit IV - JDBC, plus Unit V sockets",
          tasks: [
            "Write the six-step JDBC program from memory with numbered comments.",
            "Fill the driver-types table (I-IV) with one merit and one demerit each.",
            "List SQLException's three identifications; diagnose the 'No suitable driver' typo.",
            "Write the TCP echo pair and the UDP datagram pair; mark who blocks where.",
            "Write the InetAddress/URL program; name both checked network exceptions.",
          ],
        },
        {
          week: "Week 6",
          focus: "Unit V - RMI, and integration",
          tasks: [
            "Write the RMI six steps and the four Hello files; draw the stub-skeleton stack.",
            "Fill the TCP vs UDP vs RMI table; write one worked decision per transport.",
            "Attempt two full papers in three-hour sittings, all units mixed.",
            "Redraw the master diagrams from memory: JVM stack, event delegation, thread life cycle, JDBC layers, RMI stack.",
            "Rewrite the five in-one-breath recaps; patch every gap the same day.",
          ],
        },
      ],
    },
    {
      id: "exam-tips",
      heading: "Exam-hall strategy",
      examTips: [
        "Pair every mechanism with its diagram: the JVM stack for Unit I, the delegation arrows for Unit II, the thread life cycle and call-stack propagation for Unit III, the decorator chain and JDBC layers for Unit IV, the socket setup and RMI stack for Unit V. The diagram is half the marks.",
        "Write programs in the examiner's expected shape: imports, class, main, and the expected output as a comment on the closing println. Code that shows its output reads as tested code.",
        "For synchronization questions, show the unsynchronized trace first (varying totals, e.g. 17342), then add the keyword and show the stable 20000 - before/after numbers make the race condition visible.",
        "Quote compiler rules verbatim: catch-or-declare for checked exceptions; catch clauses subclass-first; this() first statement; setDaemon before start(); implementing methods must be public. A stated rule earns the mark even when the example is short.",
        "For JDBC answers, number the six steps as comments inside the program - load, connect, statement, execute, navigate, close - examiners scan for the skeleton and the 1-based columns.",
        "Match controls to events by name: Button-ActionEvent, Checkbox/Choice/List-ItemEvent, Text components-TextEvent, Scrollbar-AdjustmentEvent; adapter classes exist only for multi-method interfaces.",
        "In networking questions, say who blocks where: accept() blocks the server, receive() blocks the UDP receiver, connect blocks the client - the blocking points are where the marks live.",
        "Time-box: short notes get five minutes; 7-mark questions get twelve; a 14-mark program gets twenty-two - write the skeleton first, fill the bodies second, and never polish one answer at the cost of two blank ones.",
      ],
    },
    {
      id: "slips",
      heading: "Last-day strategy and common slips",
      body: [
        "Morning of the exam: redraw the master artefacts once each on rough paper - the JDK-JRE-JVM stack with the compile-run pipeline, the access-specifier matrix, the source-event-listener diagram, the thread life cycle, the stack-propagation picture, the byte-versus-character family tree, the six JDBC steps, and the RMI stub-skeleton stack. Anything you cannot redraw from memory is tonight's revision target, not tomorrow's reading.",
        "Then read the key-term lists of all five units and the in-one-breath recaps; skim the comparison tables (application vs applet, byte vs char streams, checked vs unchecked, sleep vs wait, AWT vs Swing, driver types, TCP vs UDP vs RMI). Do not open new material today - the paper rewards programs and diagrams you can produce unaided, and both die of fatigue at 3 a.m.",
      ],
      bullets: [
        "Calling run() instead of start() - no new call stack, no concurrency; the loop runs on main.",
        "Catching Exception before its subclass - the second catch is unreachable, a compile error.",
        "Using if instead of while around wait() - spurious wakeups and intervening consumers corrupt the protocol.",
        "Trusting finalize() to close files or connections - the JVM guarantees nothing; cleanup belongs in finally.",
        "Reading ResultSet columns at index 0 or before the first next() - the cursor starts before row one and columns are 1-based.",
        "Writing readLine() != -1 or read() != null - byte streams end at -1, character readers end at null.",
        "Declaring a remote method without throws RemoteException - the interface will not compile.",
        "Casting the RMI lookup result to the implementation class instead of the interface.",
        "Saying protected means subclass-only - it includes the whole package; and omitting a specifier silently grants package access.",
        "Binding a lab server to a port below 1024 - reserved range, needs privileges; use 1024+.",
        "Serializing without a fixed serialVersionUID - class evolution breaks old files with InvalidClassException.",
      ],
    },
  ],
};
