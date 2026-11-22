import type { AcademicSubject } from "./types";

export const cy604b: AcademicSubject = {
  id: "cy-604-b",
  code: "CY-604(B)",
  title: "OOAD",
  semester: "VI Semester",
  program: "RGPV · Cyber Security",
  tagline:
    "Every topic of the syllabus as one connected story: the object-oriented concepts, OMT's three models and the analysis they drive, object design from algorithms to packaging, the translation of designs into C++ and Java, and the UML diagrams with object-oriented databases closing the loop.",
  description:
    "Five units walk from objects, classes, abstraction, inheritance, encapsulation, aggregation and polymorphism, through the OO development process, OMT's object, dynamic and function models with object, state and data-flow diagrams, into object design - combining models, algorithms, control, associations and packaging - then the translation into implementation with programming style, documentation and the C++/Java comparison, ending with UML's diagram families and object-oriented databases.",
  accentColor: "#14b8a6",
  emoji: "OA",
  unitCount: 5,
  totalSections: 35,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Overview of Object-Oriented Concepts",
      summary:
        "Unit I builds the vocabulary everything else uses: objects and classes, abstraction with abstract classes, encapsulation and information hiding, generalization and inheritance including multiple inheritance, aggregation and composition, polymorphism, links and associations, and the case for the object-oriented approach itself.",
      chapter: {
        number: "01",
        title: "The Object Vocabulary",
        intro:
          "Unit I covers objects and classes, abstraction and abstract classes, generalization and inheritance, encapsulation, multiple inheritance, aggregation abstraction classes, polymorphism, links and associations, and the need for the object-oriented approach.",
        inOneBreath:
          "A class is the blueprint; objects are its instances holding state in private attributes behind a public method interface. Abstraction names the essentials and suppresses the rest; inheritance generalizes common behaviour into superclasses (with multiple inheritance's diamond to manage); aggregation is whole-part with independence, composition without it; polymorphism lets one message call many methods through dynamic dispatch - and links are the instances of the associations that bind the model together.",
        sections: [
          {
            number: "1.1",
            title: "Objects and classes",
            body: [
              "An object is a runtime entity bundling state (attributes - the values it currently holds) and behaviour (operations - the methods it can execute), with an identity that distinguishes it from every other object even one with identical state. A class is the blueprint: the declaration of the attributes, the operations, and the semantics its instances will share. The relationship is instantiation - the class is the type, the object is the value; one class, many objects, each with its own state.",
              "A worked pair fixes the distinction. Class BankAccount: attributes accountNumber, owner, balance; operations deposit(amount), withdraw(amount), getBalance(). Objects: account A (101, 'Riya', 5000), account B (102, 'Arjun', 25000) - same structure, independent state, distinct identities. The deposit method on A moves A's balance only; B is untouched. The invariant (balance >= 0) is declared once in the class and holds for every instance - the blueprint's second job: not just structure, but the rules the structure obeys.",
              "The identity property deserves the exam's attention: object identity is not value equality - two account objects with identical balances are still two different objects (different identities), while in value-based systems (databases without object identity, C structs) equality is all there is. Object identity is what makes references, sharing and graphs (an object pointing to another) natural - the feature the relational world re-implements with keys. The exam's sentence: classes define structure, rules and behaviour once; objects carry state and identity per instance.",
              "Exam framing: expect 'differentiate object and class' or 'define object identity'. Give the definitions, run the BankAccount pair, and land the identity sentence - state and behaviour per instance, structure and rules once. Identity is the third property - equal values remain distinct objects, and references are built on that. The BankAccount pair is the worked example - same structure, separate states, distinct identities.",
            ],
            keyTerms: [
              { term: "Object", definition: "Runtime entity: state (attributes) + behaviour (operations) + identity." },
              { term: "Class", definition: "The blueprint declaring attributes, operations and invariants for its instances." },
              { term: "Instantiation", definition: "Creating an object from a class - type to value." },
              { term: "Object identity", definition: "Distinctness independent of state - the basis of references and sharing." },
            ],
            table: {
              caption: "Class vs object - the guaranteed contrast.",
              headers: ["Aspect", "Class", "Object"],
              rows: [
                ["What it is", "Blueprint / type", "Instance / value"],
                ["Exists", "At compile/design time", "At runtime"],
                ["Holds", "Attribute and operation declarations, invariants", "Current state per instance"],
                ["Count", "One", "Many per class"],
                ["Analogy", "BankAccount definition", "Account 101 with balance 5000"],
              ],
            },
            bullets: [
              "Object = state + behaviour + identity; class = the shared blueprint.",
              "Instantiation: one class, many objects, independent state each.",
              "Invariants declared once hold for every instance (balance >= 0).",
              "Worked pair: accounts 101 and 102 - same structure, separate states.",
              "Identity != value equality: identical balances are still distinct objects.",
              "Identity enables references and object graphs - keys re-implement it in RDBMS.",
            ],
            diagram: {
              kind: "compare",
              title: "Class vs object",
              caption: "The blueprint and its instances - structure once, state per instance.",
              left: {
                heading: "Class: BankAccount",
                items: [
                  "Attributes: accountNumber, owner, balance",
                  "Operations: deposit, withdraw, getBalance",
                  "Invariant: balance >= 0",
                  "Declared once - no state of its own",
                ],
              },
              right: {
                heading: "Objects: 101 and 102",
                items: [
                  "101: Riya, balance 5000",
                  "102: Arjun, balance 25000",
                  "Same operations, independent state",
                  "Distinct identities - equal values would still differ",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Identity is the third property",
              body: "Students list state and behaviour and forget identity - the property examiners probe. The sentence: 'two objects with identical state remain distinct because identity is independent of value; that is what references and sharing are built on.' It also connects to the OODB unit (5.6).",
            },
            examQuestions: [
              {
                q: "Differentiate objects from classes with a worked BankAccount example, and explain object identity and why it differs from value equality.",
                marks: 14,
                outline: [
                  "Object: state + behaviour + identity at runtime",
                  "Class: blueprint declaring attributes, operations, invariants",
                  "BankAccount class vs accounts 101 (Riya, 5000) and 102 (Arjun, 25000)",
                  "Invariant balance >= 0 declared once, holds per instance",
                  "Instantiation: one class, many instances, independent state",
                  "Identity independent of value: equal balances remain distinct objects",
                  "Identity enables references and object graphs",
                ],
              },
              {
                q: "What is an invariant and where does it live in the OO model?",
                marks: 7,
                outline: [

                  "A rule that must hold for every instance at all times",

                  "Declared once in the class, enforced by operations",

                  "Example: balance never negative - deposit/withdraw guard it",

                  "Constructors establish it; mutators preserve it",

                  "Documented invariants are the class's real contract",

                ],              },
            ],
          },
          {
            number: "1.2",
            title: "Abstraction and abstract classes",
            body: [
              "Abstraction is the modelling act of naming the essentials and suppressing the irrelevant - the only way complex systems stay comprehensible. Its power scales with the level: an abstraction at the right level hides exactly what the user of that level must not care about. The classic ladder: at the lowest level, voltage transitions; above it, binary instructions; above that, machine operations; above that, a procedure; above that, an object's method; above that, a subsystem's API. Each level is real to its users and invisible beneath - and the OO method's contribution is making the levels explicit as classes with declared interfaces.",
              "The abstract class is abstraction's language construct: a class declared without complete implementation - some methods declared but undefined (pure virtual in C++, abstract in Java) - usable only as a superclass. Its purpose: to name the concept (Shape with area() declared) while forcing the specifics to subclasses (Circle.area computes pi*r*r, Rectangle.area w*h). You cannot instantiate an abstract class; you can only generalize over its children. The interface is the pure form: all methods abstract, no state - a contract without any body.",
              "A worked hierarchy fixes the mechanics. Abstract class Shape: attribute name; abstract operation area(): double; concrete operation describe() { return name + ' area ' + area(); } - describe is shared, area is deferred. Children Circle (r: area = 3.14*r*r), Rectangle (w,h: area = w*h), Triangle (b,ht: area = 0.5*b*ht). Client code: for each Shape s in list: print s.describe() - written once, working over every future shape that subclasses and implements area(). That is abstraction's payoff: the client depends on the concept, not on any concrete child.",
              "Exam framing: expect 'define abstraction' or 'what is an abstract class'. Give the ladder of abstraction, the abstract-class mechanics with the Shape hierarchy, and close with the dependency sentence - clients bind to abstractions, implementations vary beneath. Clients bind to the concept - any future shape implementing area joins the loop for free. The Shape hierarchy is the worked abstraction - describe shared, area deferred, clients child-blind.",
            ],
            keyTerms: [
              { term: "Abstraction", definition: "Naming essentials, suppressing irrelevant detail - the modelling act." },
              { term: "Abstract class", definition: "A superclass with declared-but-undefined operations - un-instantiable, generalizes children." },
              { term: "Interface", definition: "The pure abstraction: all methods abstract, no state - a contract." },
              { term: "Deferred method", definition: "Declared in the parent, implemented by each child (pure virtual / abstract)." },
            ],
            table: {
              caption: "The Shape hierarchy.",
              headers: ["Class", "Type", "area()"],
              rows: [
                ["Shape", "Abstract - name + describe() shared", "declared, not implemented"],
                ["Circle", "Concrete", "3.14 * r * r"],
                ["Rectangle", "Concrete", "w * h"],
                ["Triangle", "Concrete", "0.5 * b * ht"],
              ],
            },
            bullets: [
              "Abstraction: essentials named, irrelevancies suppressed - at the right level for the user.",
              "Ladder: voltage -> instructions -> procedures -> objects -> APIs - each level hides the one below.",
              "Abstract class: declared operations, undefined bodies; cannot instantiate.",
              "Shape example: describe() shared; area() deferred to Circle/Rectangle/Triangle.",
              "Clients iterate Shape and call describe() - unaware of concrete children.",
              "Interface = all-abstract contract; abstract class = partial implementation + contract.",
            ],
            diagram: {
              kind: "pyramid",
              title: "The ladder of abstraction",
              caption: "Each level hides the one below - the OO class is one rung, deliberately chosen.",
              tiers: [
                { label: "Subsystem APIs", note: "what other teams see" },
                { label: "Classes and methods", note: "objects with declared interfaces" },
                { label: "Procedures / functions", note: "structured programming's abstraction" },
                { label: "Machine instructions", note: "the hardware level beneath everything" },
              ],
            },
            callout: {
              type: "tip",
              title: "Clients bind to the concept",
              body: "The payoff sentence: 'the client loop iterates Shape and calls describe() - it depends on the abstraction, and any future shape that implements area() joins for free.' That sentence is why abstract classes exist, and it pre-answers the polymorphism question of 1.6.",
            },
            examQuestions: [
              {
                q: "Define abstraction with the ladder of abstraction, explain abstract classes and deferred methods, and work the Shape hierarchy showing how clients depend on the abstraction.",
                marks: 14,
                outline: [
                  "Abstraction: essentials named, detail suppressed at the right level",
                  "Ladder: hardware -> procedures -> objects -> subsystem APIs",
                  "Abstract class: declared operations, undefined bodies, un-instantiable",
                  "Shape: describe() concrete, area() deferred",
                  "Children: Circle, Rectangle, Triangle implement area()",
                  "Client loop: iterate Shape, call describe() - child-agnostic",
                  "Interface: all-abstract contract with no state",
                ],
              },
              {
                q: "When would you choose an interface over an abstract class?",
                marks: 7,
                outline: [

                  "No shared implementation to factor - pure contract",

                  "Multiple conformance needed (single inheritance limits)",

                  "Contract stability across unrelated implementers",

                  "Default methods blur the line where evolution needs them",

                  "Abstract classes carry state; interfaces cannot",

                ],              },
            ],
          },
          {
            number: "1.3",
            title: "Encapsulation and information hiding",
            body: [
              "Encapsulation bundles data and the operations on it into one unit - the class - and information hiding is its discipline: internal state is private, accessible only through the public interface. The two are often conflated; the syllabus names both, and the distinction is worth a sentence: encapsulation is the bundling (the container), information hiding is the policy (what the container exposes). Their joint effect: the class is a contract - callers depend on the interface, so the implementation can change freely beneath it (swapping a list for a hash table inside a cache class touches no caller).",
              "The visibility machinery enforces the policy: private (the class only), protected (the class and its subclasses), public (everyone). The convention: attributes private, operations public (with protected hooks for subclasses), plus accessors (getBalance) and mutators (deposit) when external reads or writes are genuinely needed - and the mutator is where validation lives, because it is the only door. A worked violation and fix: a public balance attribute lets any caller set account.balance = -100 - the invariant dies at the first assignment. Making balance private and routing writes through deposit/withdraw guards restores the invariant: negative deposits rejected at the single door.",
              "The design consequences complete the section: encapsulation is what makes change safe (the interface is the compatibility contract), what makes invariants enforceable (one door per write), and what makes testing tractable (the public interface is the test surface). The exam's sentence: encapsulation bundles state with its operations; information hiding privatizes the state; the invariant survives because every write passes through a guarded door.",
            ],
            keyTerms: [
              { term: "Encapsulation", definition: "Bundling data with its operations into one class unit." },
              { term: "Information hiding", definition: "The policy: internal state private, exposed only via the interface." },
              { term: "Visibility levels", definition: "Private (class), protected (class + subclasses), public (all)." },
              { term: "Accessor / mutator", definition: "Guarded read/write methods - the only doors to private state." },
            ],
            table: {
              caption: "The BankAccount boundary.",
              headers: ["Member", "Visibility", "Role"],
              rows: [
                ["balance", "private", "state - no direct external access"],
                ["accountNumber, owner", "private", "identity state"],
                ["deposit(amount)", "public", "guarded write - validates amount > 0"],
                ["withdraw(amount)", "public", "guarded write - checks balance >= amount"],
                ["getBalance()", "public", "read accessor"],
              ],
            },
            bullets: [
              "Encapsulation bundles; information hiding privatizes - container and policy.",
              "Visibility: private, protected, public - the enforcement machinery.",
              "Convention: private attributes, public operations, protected hooks.",
              "Violated: public balance lets balance = -100 kill the invariant.",
              "Fixed: single guarded door - deposit/withdraw validate every write.",
              "Payoffs: safe change, enforceable invariants, the interface as test surface.",
            ],
            diagram: {
              kind: "flow",
              title: "Every write passes one door",
              caption: "Client call -> public method -> validation -> private state - the invariant survives the journey.",
              steps: [
                { label: "Client call", note: "account.withdraw(3000)" },
                { label: "Public method", note: "the only external entry point" },
                { label: "Validation", note: "balance >= amount? reject otherwise" },
                { label: "Private state", note: "balance updated - invariant intact" },
              ],
            },
            callout: {
              type: "exam",
              title: "Container versus policy",
              body: "The precision sentence examiners reward: 'encapsulation is the bundling; information hiding is the policy on what the bundle exposes.' Then the invariant sentence: 'every write passes a guarded door, so the invariant cannot be bypassed by assignment.' Both, in order, is the full answer.",
            },
            examQuestions: [
              {
                q: "Distinguish encapsulation from information hiding, explain the visibility machinery, and show how a public balance attribute violates the invariant while guarded methods restore it.",
                marks: 14,
                outline: [
                  "Encapsulation: data + operations bundled into the class",
                  "Information hiding: private state behind a public interface",
                  "Visibility: private / protected / public",
                  "Convention: private attributes, public operations",
                  "Violation: public balance accepts -100 directly",
                  "Fix: deposit/withdraw validate at the single door",
                  "Consequences: safe change, enforceable invariants, testable interface",
                ],
              },
              {
                q: "Why are getters considered acceptable while public attributes are not?",
                marks: 7,
                outline: [

                  "A getter is a stable interface even if the storage changes",

                  "Computed or validated values can hide behind the same signature",

                  "Direct attribute access couples callers to the representation",

                  "Getters can later add logging or lazy computation",

                  "Fields cannot gain behaviour without breaking callers",

                ],              },
            ],
          },
          {
            number: "1.4",
            title: "Generalization, inheritance and multiple inheritance",
            body: [
              "Generalization is the modelling act: extracting what is common among classes into a superclass - SavingsAccount and CurrentAccount share accountNumber, owner and balance, so Account is born. Inheritance is the mechanism: the subclass automatically receives the superclass's attributes and operations, adding or overriding what differs. The is-a test gates every inheritance: a SavingsAccount is-an Account (inherit); a Customer has-an Account (do not inherit - associate). The substitutability consequence: anywhere the superclass is expected, any subclass works - 1.2's Shape loop written as a principle.",
              "A worked hierarchy fixes the mechanics. Account (attributes accountNumber, owner, balance; operations deposit, withdraw declared, withdraw deferred because rules differ). SavingsAccount: interest rate attribute; withdraw overridden to enforce minimum balance. CurrentAccount: overdraft limit attribute; withdraw overridden to permit within limit. Client code holds Account references and calls withdraw - each object applies its own rules. Two levels of reuse: the structure (attributes) and the algorithm skeleton (the template of validation-then-update) come free; the varying rule is the only thing each subclass writes.",
              "Multiple inheritance lets a class inherit from several superclasses - mixin power (a class both Saveable and Auditable) with the diamond problem as its price: D inherits from B and C, both inheriting from A - whose copy of A's attributes does D get? The resolutions, per language: C++ virtual inheritance (one shared A), C++ default (two copies, with scope resolution), Java's ban on class multiple inheritance replaced by multiple interface implementation (contracts multiply, state does not). The exam's sentence: generalization extracts the common into the superclass; inheritance delivers it; the is-a test and the diamond problem are the method's two checkpoints.",
              "Exam framing: expect 'explain inheritance' or 'the diamond problem'. Give generalization-vs-inheritance, the Account hierarchy with overridden withdraw, the is-a/has-a test, and the diamond with the language resolutions. The is-a gate is the checkpoint - inherit for is-a, associate for has-a, never for reuse alone. The Account hierarchy is the worked inheritance - structure reused, only the withdraw rule rewritten.",
            ],
            keyTerms: [
              { term: "Generalization", definition: "Extracting common attributes and operations into a superclass." },
              { term: "Inheritance", definition: "Subclasses receive superclass members automatically; override to vary." },
              { term: "is-a / has-a test", definition: "Inherit for is-a; associate for has-a - the gating question." },
              { term: "Diamond problem", definition: "D -> B, C -> A: ambiguity in A's members - virtual bases or interfaces resolve." },
            ],
            table: {
              caption: "The Account hierarchy.",
              headers: ["Class", "Adds", "withdraw() rule"],
              rows: [
                ["Account (super)", "accountNumber, owner, balance", "declared - deferred"],
                ["SavingsAccount", "interest rate", "enforce minimum balance"],
                ["CurrentAccount", "overdraft limit", "permit within overdraft"],
              ],
            },
            bullets: [
              "Generalization: the modelling act; inheritance: the delivery mechanism.",
              "is-a gates inheritance; has-a demands association - never inherit for reuse alone.",
              "Account hierarchy: structure and skeleton reused; only the withdraw rule varies.",
              "Substitutability: Account references accept every subclass (1.2's payoff, formalized).",
              "Multiple inheritance: mixins multiply power; the diamond multiplies A's members.",
              "Resolutions: C++ virtual base (one shared A); Java: multiple interfaces, single class parent.",
            ],
            diagram: {
              kind: "fork",
              title: "Inheriting from one vs many",
              caption: "Single inheritance is unambiguous; multiple inheritance buys power at the diamond's price.",
              start: "Class D needs two parents",
              branches: [
                { label: "Two parents share ancestor A", outcome: "diamond: which A does D inherit? - virtual base or interfaces resolve", good: false },
                { label: "C++ virtual inheritance", outcome: "one shared A subobject - ambiguity removed, layout cost paid", good: true },
                { label: "Java's answer", outcome: "single class parent + multiple interfaces - contracts multiply, state does not", good: true },
              ],
            },
            callout: {
              type: "warning",
              title: "The is-a test is the gate",
              body: "The most-marked slip in OO exams: inheriting for code reuse ('Stack can inherit from List - it needs the storage'). It fails the is-a test - a Stack is-not-a List - and breaks substitutability (List's insert-at-position on a Stack). Inherit for is-a; associate or compose for has-a. Every 'when do you inherit' question ends with this gate.",
            },
            examQuestions: [
              {
                q: "Explain generalization and inheritance with the Account hierarchy, state the is-a/has-a gating test, and describe the diamond problem with the language resolutions.",
                marks: 14,
                outline: [
                  "Generalization extracts common members into the superclass",
                  "Inheritance delivers them; override varies behaviour",
                  "Account -> SavingsAccount / CurrentAccount with overridden withdraw",
                  "Structure and skeleton reused; only the varying rule written",
                  "is-a gates inheritance; has-a demands association",
                  "Diamond: D via B and C both from A - whose members?",
                  "C++ virtual base shares one A; Java uses multiple interfaces",
                ],
              },
              {
                q: "Why is 'Stack inherits from List' a design error?",
                marks: 7,
                outline: [

                  "Fails the is-a test - a stack is not a list",

                  "Inherited list operations break the stack's invariant (LIFO)",

                  "Correct: composition - Stack has-a (or wraps) storage",

                  "Substitutability breaks - List references accept the Stack",

                  "Composition exposes only the stack's three operations",

                ],              },
            ],
          },
          {
            number: "1.5",
            title: "Aggregation and composition",
            body: [
              "The whole-part relationships are the has-a family, and the syllabus's pair differs on one question: does the part live independently? Aggregation: a whole-part association where parts exist independently of the whole - a Department has Professors, but a Professor survives the department's closure (transfers to another). Composition: a stronger whole-part where the part's lifetime is bound to the whole - a House has Rooms; destroy the house and the rooms go with it (no room without its house). The implementation tells them apart: aggregation holds references (shared parts allowed); composition constructs/destroys the parts itself (exclusive ownership).",
              "A worked triple fixes the boundary. Order has LineItems - composition (a line item exists only inside its order; deleting the order deletes them; a line item belongs to exactly one order). Order has Customer - aggregation (the customer exists independently; many orders may reference one customer). Order has a Currency object - aggregation with sharing (one Currency instance 'INR' shared by every order - parts shared across wholes are the aggregation signature). Three has-a relationships, three different implementations: composed children constructed in the order's constructor; customer and currency references merely held. The lifetime question decides every case: who creates, who destroys, who may share.",
              "The modelling consequence completes the section: whole-part structure appears everywhere in OO models, and choosing the wrong strength shows up as bugs (composition implemented as reference lets an orphaned part outlive its whole - a null-pointer waiting to happen; aggregation implemented as composition blocks legal sharing). The exam's sentence: aggregation is whole-part with independent lifetimes and shareable parts; composition is whole-part with bound lifetimes and exclusive ownership - the lifetime question decides which you draw.",
            ],
            keyTerms: [
              { term: "Aggregation", definition: "Whole-part with independent part lifetimes; parts may be shared." },
              { term: "Composition", definition: "Whole-part with bound lifetimes; exclusive ownership - parts die with the whole." },
              { term: "Lifetime question", definition: "Who creates, who destroys, who may share - decides aggregation vs composition." },
              { term: "Exclusive ownership", definition: "Exactly one whole owns the part - the composition contract." },
            ],
            table: {
              caption: "Three has-a relationships on Order.",
              headers: ["Relationship", "Kind", "Lifetime / sharing"],
              rows: [
                ["Order has LineItems", "Composition", "Parts constructed/destroyed by the order; exclusive"],
                ["Order has Customer", "Aggregation", "Customer independent; shared by many orders"],
                ["Order has Currency 'INR'", "Aggregation (shared)", "One instance shared across all orders"],
              ],
            },
            bullets: [
              "Aggregation: parts outlive the whole; references held; sharing allowed.",
              "Composition: parts bound to the whole; constructed/destroyed by it.",
              "Order trace: LineItems composed; Customer aggregated; Currency shared-aggregated.",
              "Lifetime question decides: who creates, who destroys, who shares.",
              "Wrong strength = bugs: orphaned parts (composition as reference) or blocked sharing.",
              "UML notation: hollow diamond aggregates; filled diamond composes.",
            ],
            diagram: {
              kind: "compare",
              title: "Aggregation vs composition",
              caption: "One lifetime question separates them - who dies when the whole dies?",
              left: {
                heading: "Aggregation (hollow diamond)",
                items: [
                  "Parts exist independently",
                  "Parts may be shared across wholes",
                  "Whole holds references",
                  "Example: Department - Professors",
                ],
              },
              right: {
                heading: "Composition (filled diamond)",
                items: [
                  "Parts bound to the whole's lifetime",
                  "Exclusive ownership - exactly one whole",
                  "Whole constructs and destroys parts",
                  "Example: Order - LineItems",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Ask the deletion question",
              body: "The fastest test in whole-part modelling: 'if I delete the whole, what happens to the part?' Dies with it -> composition; survives -> aggregation; survives but was never independently meaningful -> you probably misread the relationship. One question, one diamond shape, consistently applied.",
            },
            examQuestions: [
              {
                q: "Differentiate aggregation from composition, and classify Order's relationships to LineItems, Customer and Currency with the lifetime reasoning.",
                marks: 14,
                outline: [
                  "Aggregation: independent part lifetimes, shareable - hollow diamond",
                  "Composition: bound lifetimes, exclusive ownership - filled diamond",
                  "Lifetime question: who creates, destroys, shares",
                  "LineItems: composed - constructed by the order, die with it",
                  "Customer: aggregated - independent, shared by many orders",
                  "Currency 'INR': shared aggregation - one instance for all orders",
                  "Wrong strength causes orphan bugs or blocked sharing",
                ],
              },
              {
                q: "How does the implementation of composition differ from aggregation in code?",
                marks: 7,
                outline: [

                  "Composition: part constructed in the whole's constructor; destroyed in its destructor",

                  "Aggregation: reference merely assigned; lifetime managed elsewhere",

                  "Exclusive ownership enforced by construction, not convention",

                  "Deep copies duplicate composed parts, not aggregated ones",

                  "Destructors free composed parts explicitly",

                ],              },
            ],
          },
          {
            number: "1.6",
            title: "Polymorphism",
            body: [
              "Polymorphism is one name, many forms: the same message (method call) produces different behaviour depending on the receiving object's class. The mechanism is dynamic dispatch: the call shape.draw() is resolved at runtime by the object's actual class - Shape declares draw(), Circle's draw draws a circle, Square's draws a square. Static (compile-time) polymorphism exists too - overloading (1.4's sibling subject's unification work) and templates/generics - but the syllabus's OO sense is the dynamic kind, and it is what makes the abstract-class payoff of 1.2 work.",
              "A worked dispatch trace fixes the mechanics. The client loop: for each Shape s in shapes: s.draw(). Three objects in the list - Circle, Square, Circle. Runtime resolution: s.draw() consults the object's vtable (the per-class table of method implementations); the Circle entries route to Circle.draw twice, the Square entry once - three calls, three behaviours, one line of client code. Adding Triangle requires zero client changes: implement Triangle.draw, append to the list - the open-closed principle (open to extension, closed to modification) demonstrated in one loop.",
              "The design consequence completes the section: polymorphism inverts control - the client stops asking 'what kind is it?' with type-checks and starts trusting the object to answer the message itself. Before polymorphism: if (type == CIRCLE) drawCircle() else if (type == SQUARE)... - every new shape edits every client. After: the type-checks vanish into the dispatch. The exam's sentence: polymorphism lets one message invoke many methods through runtime dispatch - new behaviour joins by subclassing, not by editing clients.",
            ],
            keyTerms: [
              { term: "Polymorphism", definition: "One message, many method behaviours - resolved by the receiver's class." },
              { term: "Dynamic dispatch", definition: "Runtime method resolution via the object's class (vtable)." },
              { term: "Overriding", definition: "A subclass replacing the superclass's method implementation." },
              { term: "Open-closed principle", definition: "Open to extension (new subclasses), closed to modification (clients unchanged)." },
            ],
            bullets: [
              "One message, many forms: behaviour chosen by the receiver's class.",
              "Dynamic dispatch: vtable lookup at runtime - the mechanism.",
              "Overriding supplies the variants; the abstraction (1.2) supplies the contract.",
              "Trace: three shapes, one loop, three behaviours - vtable routes each.",
              "Triangle joins with zero client edits - open-closed demonstrated.",
              "Before/after: type-check ladders vanish into dispatch.",
            ],
            diagram: {
              kind: "flow",
              title: "Dynamic dispatch of s.draw()",
              caption: "The message is the same every time - the object's class decides the method.",
              steps: [
                { label: "Message", note: "s.draw() - identical syntax each call" },
                { label: "Inspect object", note: "actual class of s at runtime" },
                { label: "Vtable lookup", note: "class's table routes draw()" },
                { label: "Execute", note: "Circle.draw / Square.draw as routed" },
              ],
            },
            callout: {
              type: "tip",
              title: "The ladder that disappears",
              body: "The before/after sentence: 'polymorphism deletes the if-type-else ladder - the type checks become dispatch, and new subclasses join without touching clients.' It ties 1.2 (abstraction), 1.4 (inheritance) and this section into one mechanism, which is exactly how the examiner wants the trio connected.",
            },
            examQuestions: [
              {
                q: "Define polymorphism and dynamic dispatch, trace s.draw() over Circle, Square and a newly added Triangle, and explain the open-closed consequence with the vanishing type-check ladder.",
                marks: 14,
                outline: [
                  "Polymorphism: one message, behaviour by receiver's class",
                  "Dynamic dispatch: vtable resolution at runtime",
                  "Trace: three calls, three (or two distinct) behaviours",
                  "Triangle added: implement draw, append to list - zero client edits",
                  "Open-closed: extension by subclassing, clients closed",
                  "Before: if-type ladders in every client; after: dispatch",
                  "Mechanism chain: abstraction declares, inheritance supplies, dispatch selects",
                ],
              },
              {
                q: "Distinguish overriding from overloading.",
                marks: 7,
                outline: [

                  "Overriding: same signature, subclass replaces - runtime dispatch",

                  "Overloading: same name, different signatures - compile-time selection",

                  "Different mechanisms, different resolution times",

                  "Dynamic dispatch chooses overrides at runtime",

                  "Static resolution picks overloads at compile time",

                ],              },
            ],
            codeExample: {
              language: "java",
              caption: "The Shape loop - polymorphism in six lines",
              code: `abstract class Shape {
  abstract double area();
  void describe() { System.out.println(getClass().getSimpleName() + " area " + area()); }
}
class Circle extends Shape { double r; double area() { return 3.14 * r * r; } }
class Square extends Shape { double w;  double area() { return w * w; } }

for (Shape s : shapes) { s.describe(); }   // one line, many forms`,
            },
          },
          {
            number: "1.7",
            title: "Links, associations and the need for the OO approach",
            body: [
              "Associations are the class-level relationships; links are their instances - an Association 'Customer places Order' (class level) is realized by the links 'Riya placed order #501' (instance level). The association's properties: name, multiplicity (1, 0..1, 1..*, *), and direction/navigability (who can see whom). Multiplicity drives implementation: one-to-one as mutual references; one-to-many as a collection in the 'one'; many-to-many as collections on both sides (with an association class carrying relationship attributes - enrollment grade belongs to the Student-Course pair, not to either alone).",
              "A worked association set fixes the modelling. Classes Customer, Order, Product. Associations: Customer places Order (1..* : exactly one customer per order); Order contains Product (via LineItems - composition from 1.5, with quantity as the association-class attribute); Customer prefers Product (many-to-many, navigable Customer -> Product only). Implementation: Customer holds a List<Order>; Order holds customer reference and List<LineItem>; LineItem holds product reference and quantity. Five classes, four associations, one link instance set: Riya -> [order 501 -> (widget x2, gear x1)]. The model and the code agree item by item - which is the OO method's bookkeeping promise.",
              "The need for the OO approach closes the unit with its argument. Against the structured alternative: functional decomposition partitions by what the system does, so change ripples (a new report type edits every module that touches data), and data sits passively in structures that every module may corrupt. The OO partition is by what the system is (objects with responsibilities), so change localizes (a new report type is a new class; the data's invariants live inside their objects). Add 1.2-1.6's machinery - abstraction, encapsulation, inheritance, polymorphism - and the claim: OO aligns the model with the domain, so the diagram and the code stay the same thing at different scales. That alignment is the need.",
              "Exam framing: expect 'distinguish link and association' or 'justify the OO approach'. Give the class-level/instance-level pairing with multiplicities, the Customer-Order-Product model, and the structured-vs-OO change argument. The change-localization argument is the need - structured edits ripple, OO edits localize. The Customer-Order-Product model is the worked set - five classes, four associations, one link instance set.",
            ],
            keyTerms: [
              { term: "Association", definition: "Class-level relationship with name and multiplicity." },
              { term: "Link", definition: "An association's instance - a concrete connection between objects." },
              { term: "Multiplicity", definition: "How many instances participate: 1, 0..1, 1..*, *." },
              { term: "Association class", definition: "Attributes belonging to the relationship itself (quantity, grade)." },
            ],
            table: {
              caption: "The worked association set.",
              headers: ["Association", "Multiplicity", "Implementation"],
              rows: [
                ["Customer places Order", "1 : 1..*", "Customer holds List<Order>; Order holds customer ref"],
                ["Order contains LineItem", "1 : 1..* (composition)", "Order owns items; quantity on the line item"],
                ["LineItem refers Product", "* : 1", "Item holds product reference"],
                ["Customer prefers Product", "* : * navigable one way", "Customer holds preferred-product list"],
              ],
            },
            bullets: [
              "Association at class level; link at instance level - the pairing to state.",
              "Multiplicity drives implementation: references or collections per side.",
              "Association class: relationship-owned attributes (quantity on LineItem).",
              "Worked model: Customer-Order-LineItem-Product with one link instance set.",
              "Structured decomposition: change ripples across modules; OO: change localizes in classes.",
              "Need sentence: OO aligns model with domain - diagram and code stay one thing.",
            ],
            diagram: {
              kind: "fork",
              title: "Multiplicity decides the implementation",
              caption: "Each multiplicity branch has a standard coding answer.",
              start: "Association multiplicity",
              branches: [
                { label: "One-to-one", outcome: "mutual references - each side holds the other", good: true },
                { label: "One-to-many", outcome: "collection in the 'one'; back-reference in the 'many'", good: true },
                { label: "Many-to-many", outcome: "collections both sides - or an association class carrying attributes", good: true },
              ],
            },
            callout: {
              type: "exam",
              title: "The change-localization argument",
              body: "The 'need for OO' answer's core: 'structured decomposition partitions by function, so adding a report type edits every module; OO partitions by responsibility, so the same change is one new class.' Then stack 1.2-1.6's mechanisms as the enabling machinery. One argument, one mechanism chain - the full justification.",
            },
            examQuestions: [
              {
                q: "Distinguish links from associations, model the Customer-Order-Product set with multiplicities and implementations, and argue the need for the OO approach against structured decomposition.",
                marks: 14,
                outline: [
                  "Association: class-level relationship; link: its instance",
                  "Multiplicity: 1, 0..1, 1..*, * - drives references vs collections",
                  "Association class: quantity/grade attributes on the relationship",
                  "Model: Customer 1 : 1..* Order; Order composes LineItems",
                  "Implementation: lists, back-references, one-way navigability",
                  "Structured: change ripples; OO: change localizes as new classes",
                  "Machinery: abstraction, encapsulation, inheritance, polymorphism enable it",
                ],
              },
              {
                q: "What is an association class and when is it required?",
                marks: 7,
                outline: [

                  "Attributes belonging to the relationship, not either class",

                  "Example: grade on Student-Course enrollment",

                  "Required when the same pair's relationship carries data",

                  "The grade belongs to the pair, not either student alone",

                  "The pair's lifecycle needs its own object",

                ],              },
            ],
          },
        ],
      },
    },
    {
      number: 2,
      roman: "II",
      title: "OO Development, OMT and Object-Oriented Analysis",
      summary:
        "Unit II moves from concepts to process: the system design life cycle and OO process models, object-oriented analysis, the Object Modeling Technique's three models - object, dynamic and function - their relationships, object diagrams, state diagrams and data flow diagrams, and the analysis discipline that assembles them from requirements.",
      chapter: {
        number: "02",
        title: "OMT and the Analysis Models",
        intro:
          "Unit II covers the system design life cycle, object-oriented software development process models, object-oriented analysis, the Object Modeling Technique - object model, function model and the relationship among models - object diagrams, state diagrams, data flow diagrams, and analysis.",
        inOneBreath:
          "OO processes iterate use-case-to-code instead of staging documents. OMT describes the system three ways at once: the object model (what the things are - classes, associations, generalizations), the dynamic model (when things happen - states, events, transitions) and the function model (what transformations occur - DFDs); analysis builds all three from requirements and cross-checks them, with object diagrams freezing sample states and state diagrams binding behaviour.",
        sections: [
          {
            number: "2.1",
            title: "The system design life cycle and OO process models",
            body: [
              "The system design life cycle is the staged journey from idea to operation: requirements, analysis, design, implementation, testing, deployment, maintenance - every process model is a policy for sequencing those stages. The waterfall stages them once, sequentially, with documents as the hand-offs; its strength is discipline and contract clarity, its weakness is the late discovery of wrong assumptions (testing finds requirement errors last, when they cost most).",
              "The OO process models answer with iteration over increments. The OO iterative cycle: identify use cases -> model the domain (objects/classes - 2.7) -> design the architecture -> implement a thin slice -> test it -> refine with the next use case. Each increment delivers working, testable software; requirements learn from the running increments. The Spiral model (Boehm) adds risk analysis to every loop - prototype the risky parts first; the Unified Process adds phases (inception, elaboration, construction, transition) and disciplines (requirements, analysis, design, implementation - run concurrently in every iteration). The common OO signature: use cases drive, models evolve, code arrives early.",
              "A worked contrast fixes the choice logic. A payroll system with stable, legislated rules: waterfall fits - the requirements are fixed by law, documents are the deliverable, change is rare. A customer-facing web app with unknown preferences: OO iterative fits - use cases deliver in priority order, each release learns, the architecture refactors under test. The syllabus's sentence: the OO process replaces document hand-offs with evolving models and running increments - same life cycle stages, different sequencing policy.",
              "Exam framing: expect 'compare waterfall and OO process models'. Give the staged vs iterative framing, the OO cycle with use-case drivers, and the payroll-vs-web choice trace - closing with the sequencing-policy sentence. Sequencing policy is the difference - the stages are constant, the hand-off currency changes. The payroll-versus-web choice is the worked decision - stable law against unknown preferences.",
            ],
            keyTerms: [
              { term: "Waterfall", definition: "Staged-once, document-driven life cycle - discipline at the cost of late discovery." },
              { term: "OO iterative process", definition: "Use-case-driven increments: model, build, test, refine." },
              { term: "Spiral model", definition: "Iterative loops with risk analysis each cycle - prototype the risky parts." },
              { term: "Unified Process", definition: "Phases and disciplines run concurrently per iteration." },
            ],
            table: {
              caption: "Waterfall vs OO iterative.",
              headers: ["Aspect", "Waterfall", "OO iterative"],
              rows: [
                ["Sequencing", "Stages once, in order", "Stages per iteration, looping"],
                ["Hand-off", "Documents between phases", "Evolving models + running increments"],
                ["Feedback", "Late (testing finds it)", "Early (each increment tested)"],
                ["Risk", "Assumptions confirmed last", "Risky parts prototyped first (Spiral)"],
                ["Fits", "Stable, legislated requirements", "Evolving, user-facing requirements"],
              ],
            },
            bullets: [
              "Life cycle stages are constant; process models differ in sequencing policy.",
              "Waterfall: document hand-offs, late discovery of wrong assumptions.",
              "OO iterative: use cases drive increments; models evolve; code arrives early.",
              "Spiral adds risk analysis per loop; UP adds phases + concurrent disciplines.",
              "Payroll (stable law) -> waterfall; web app (unknown preferences) -> iterative.",
              "Sentence: same stages, different sequencing policy.",
            ],
            diagram: {
              kind: "compare",
              title: "Waterfall vs OO iterative",
              caption: "Documents handed down stairs, or models growing through loops.",
              left: {
                heading: "Waterfall",
                items: [
                  "Requirements -> design -> code -> test, once",
                  "Documents are the deliverables",
                  "Feedback arrives at testing - last and costliest",
                  "Fits stable, legislated domains",
                ],
              },
              right: {
                heading: "OO iterative",
                items: [
                  "Use case -> model -> slice -> test, repeated",
                  "Working increments are the deliverables",
                  "Feedback every iteration - early",
                  "Risky parts prototyped first (Spiral/UP)",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Sequencing policy, not different stages",
              body: "The framing sentence that elevates the answer: 'every process model walks the same life cycle stages - what differs is the sequencing policy and the hand-off currency (documents vs evolving models).' It prevents the common error of describing iterative development as skipping stages.",
            },
            examQuestions: [
              {
                q: "Explain the system design life cycle and compare waterfall with OO iterative process models (including Spiral and Unified Process notes), choosing the right model for a payroll system vs a web application.",
                marks: 14,
                outline: [
                  "Life cycle: requirements, analysis, design, implementation, test, deploy, maintain",
                  "Waterfall: staged once; document hand-offs; late feedback",
                  "OO iterative: use-case-driven increments; models evolve; early feedback",
                  "Spiral: risk analysis per loop; prototype risky parts",
                  "UP: phases (inception..transition) with concurrent disciplines",
                  "Payroll: stable legislated rules -> waterfall fits",
                  "Web app: unknown preferences -> iterative fits",
                ],
              },
              {
                q: "Why does the OO process deliver code early, and what is the cost?",
                marks: 7,
                outline: [

                  "Thin slices validate assumptions while cheap to change",

                  "Cost: refactoring churn and architecture rework between increments",

                  "Managed by architecture-first elaboration (UP)",

                  "Early code surfaces requirement misunderstandings while cheap",

                  "Cost: rework when increments overturn assumptions",

                ],              },
            ],
          },
          {
            number: "2.2",
            title: "Object-oriented analysis",
            body: [
              "Object-oriented analysis (OOA) builds a model of the problem domain - what the system must know and do - without committing to implementation. The method's steps: gather requirements as use cases (the scenarios actors play); identify candidate objects and classes from the domain vocabulary (nouns: customer, order, invoice); establish associations and multiplicities (who relates to whom); identify generalizations (what is common); assign responsibilities and operations (verbs become methods); and model significant dynamic behaviour (states and events for objects with lifecycles - 2.6).",
              "A worked OOA pass fixes the method on one requirement. Requirement: 'customers place orders for products; each order may contain several products with quantities; preferred customers get discounts.' OOA: use cases - Place Order, Apply Discount. Classes from nouns: Customer, Order, Product, LineItem, DiscountRule. Associations: Customer 1-1..* Order (places); Order composes LineItems; LineItem refers Product (quantity as the association attribute). Generalization: DiscountRule -> SeasonalRule, BulkRule. Responsibilities: Order.total() computes; DiscountRule.applies(order) decides; Customer.preferred? flags. States: Order (placed -> paid -> shipped -> delivered - the lifecycle 2.6 draws). One paragraph of requirements, five classes, four associations, one hierarchy, one lifecycle - analysis's compression is the deliverable.",
              "The discipline's boundary is the exam's precision mark: analysis says what (domain objects, responsibilities, rules) and stops before how (data structures, algorithms, classes that exist only for the implementation). The tell: an analysis class must make sense to a domain expert reading its name - 'OrderValidationStrategy' is design; 'Order' is analysis. The exam's sentence: OOA models the domain in the domain's own vocabulary - nouns become classes, verbs become responsibilities, and implementation vocabularies wait for design.",
            ],
            keyTerms: [
              { term: "OOA", definition: "Modelling the problem domain: classes, associations, responsibilities - before design." },
              { term: "Use case", definition: "A scenario an actor plays - the requirements unit OO processes drive on." },
              { term: "Domain vocabulary", definition: "Nouns -> classes, verbs -> responsibilities - the analysis heuristic." },
              { term: "Analysis/design boundary", definition: "What the system is vs how it is built - domain names vs implementation names." },
            ],
            table: {
              caption: "One requirement analyzed.",
              headers: ["OOA step", "Product"],
              rows: [
                ["Use cases", "Place Order; Apply Discount"],
                ["Classes (nouns)", "Customer, Order, Product, LineItem, DiscountRule"],
                ["Associations", "places 1:1..*; composes LineItems; refers Product"],
                ["Generalization", "DiscountRule -> Seasonal, Bulk"],
                ["Responsibilities (verbs)", "Order.total(); DiscountRule.applies(); Customer.preferred?"],
                ["Lifecycle", "placed -> paid -> shipped -> delivered"],
              ],
            },
            bullets: [
              "OOA models what - domain objects, responsibilities, rules - not how.",
              "Steps: use cases -> classes -> associations -> generalizations -> responsibilities -> states.",
              "Noun/verb heuristic: domain vocabulary becomes the model's vocabulary.",
              "Worked pass: one requirement -> 5 classes, 4 associations, 1 hierarchy, 1 lifecycle.",
              "Boundary test: would a domain expert recognize every class name?",
              "Implementation names (strategies, caches) wait for design.",
            ],
            diagram: {
              kind: "flow",
              title: "The OAA steps",
              caption: "From use cases to a domain model - one pass, then iterate per use case.",
              steps: [
                { label: "Use cases", note: "scenarios actors play" },
                { label: "Candidate classes", note: "nouns from the domain vocabulary" },
                { label: "Associations", note: "relationships with multiplicities" },
                { label: "Generalizations", note: "common structure extracted" },
                { label: "Responsibilities", note: "verbs become operations" },
              ],
            },
            callout: {
              type: "exam",
              title: "The domain-expert name test",
              body: "The boundary's operational check: 'read each class name aloud to a domain expert - Order passes; OrderValidationStrategy does not.' Analysis vocabulary belongs to the domain; design vocabulary (strategies, caches, gateways) belongs later. One test, clean boundary, marks secured.",
            },
            examQuestions: [
              {
                q: "Explain object-oriented analysis steps and perform an OOA pass on the customer-order requirement, producing classes, associations, generalizations and responsibilities - with the analysis/design boundary stated.",
                marks: 14,
                outline: [
                  "Steps: use cases -> candidate classes -> associations -> generalizations -> responsibilities -> states",
                  "Noun/verb heuristic from the domain vocabulary",
                  "Classes: Customer, Order, Product, LineItem, DiscountRule",
                  "Associations: places 1:1..*; Order composes LineItems",
                  "Generalization: DiscountRule -> Seasonal, Bulk",
                  "Responsibilities: total(), applies(), preferred?",
                  "Boundary: domain-expert name test; implementation names deferred",
                ],
              },
              {
                q: "Why do use cases drive OO analysis?",
                marks: 7,
                outline: [

                  "Scenarios reveal which classes and interactions matter",

                  "Coverage: every use case touches the model - gaps become visible",

                  "Incremental: one use case per analysis pass",

                  "Actors and goals anchor the domain vocabulary",

                  "Each pass ends with a reviewable model slice",

                ],              },
            ],
          },
          {
            number: "2.3",
            title: "The object model and OMT's three models",
            body: [
              "OMT (Object Modeling Technique - Rumbaugh's method, later folded into UML) describes the system with three simultaneous models, each answering one question. The object model answers what: the static structure - classes (attributes, operations), associations with multiplicities, generalization hierarchies, aggregations - drawn as the class diagram. The dynamic model answers when: object lifecycles - states, events, transitions, and system-wide scenarios. The function model answers what transformations: data flows from sources through transformations to sinks - the DFD view.",
              "The object model is the backbone, and its diagram's elements are the syllabus's vocabulary: classes as boxes with three compartments (name, attributes, operations); associations as lines with multiplicities and names; generalizations as triangles pointing at the superclass; aggregations as diamonds (hollow/filled - 1.5). A worked object-model fragment: Customer, Order, LineItem, Product with the associations from 2.2, plus Account generalization from 1.4 if the domain has accounts - four to five classes render the requirement's entire static structure.",
              "The three-model division of labour is the exam's favourite framing: the object model is the dictionary (what exists), the dynamic model is the grammar (when things may happen), the function model is the semantics (what the transformations compute). Each model cross-checks the others - an operation in the object model should appear as a process in the function model or an event-driven action in the dynamic model, and 2.5's relationship section formalizes that check. The sentence: OMT's power is three views of one system, each validating the other two.",
              "Exam framing: expect 'explain OMT's three models' or 'draw the object model'. Give the three models with their questions and notations, work the object-model fragment, and close with the three-views sentence. Dictionary, grammar, semantics - the trio's memory sentence opens every three-model answer. The Customer-Order fragment is the worked object model - four classes rendering the requirement.",
            ],
            keyTerms: [
              { term: "OMT", definition: "Object Modeling Technique: object, dynamic and function models of one system." },
              { term: "Object model", definition: "Static structure: classes, associations, generalizations, aggregations." },
              { term: "Dynamic model", definition: "Behaviour over time: states, events, transitions, scenarios." },
              { term: "Function model", definition: "Transformations: data flows from sources through processes to sinks." },
            ],
            table: {
              caption: "OMT's three models.",
              headers: ["Model", "Question", "Diagram", "Contents"],
              rows: [
                ["Object model", "What exists?", "Class diagram", "Classes, associations, generalizations"],
                ["Dynamic model", "When does it happen?", "State diagrams", "States, events, transitions"],
                ["Function model", "What transforms?", "DFD", "Processes, data stores, flows"],
              ],
            },
            bullets: [
              "OMT: three simultaneous models - dictionary, grammar, semantics.",
              "Object model: class boxes (name/attributes/operations), associations, generalizations.",
              "Dynamic model: states, events, transitions per lifecycle-bearing object.",
              "Function model: DFD - sources, processes, stores, sinks.",
              "Worked fragment: Customer-Order-LineItem-Product renders the static structure.",
              "Cross-checking: operations appear as processes or event actions - 2.5 formalizes.",
            ],
            diagram: {
              kind: "layers",
              title: "OMT's three-model stack",
              caption: "One system, three views - the object model anchors the other two.",
              layers: [
                { label: "Function model", note: "what transformations compute - DFDs" },
                { label: "Dynamic model", note: "when things happen - states and events" },
                { label: "Object model", note: "what exists - classes, associations, hierarchy" },
                { label: "The system", note: "one reality, three projections" },
              ],
            },
            callout: {
              type: "tip",
              title: "Dictionary, grammar, semantics",
              body: "The memory sentence for the trio: 'the object model is the dictionary (what exists), the dynamic model the grammar (when it may happen), the function model the semantics (what it computes).' Any three-model question can be opened with it and then filled with the worked fragment.",
            },
            examQuestions: [
              {
                q: "Explain OMT's three models with their questions, notations and division of labour, and draw a worked object-model fragment for the customer-order domain.",
                marks: 14,
                outline: [
                  "Object model: classes, associations, generalizations - the what",
                  "Class box: name, attributes, operations compartments",
                  "Dynamic model: states, events, transitions - the when",
                  "Function model: DFD processes, stores, flows - the transformation",
                  "Fragment: Customer, Order, LineItem, Product with multiplicities",
                  "Generalization/aggregation notations (triangles, diamonds)",
                  "Cross-validation: operations appear in the other two models",
                ],
              },
              {
                q: "Why does the object model anchor the other two?",
                marks: 7,
                outline: [

                  "States belong to objects; transformations act on object data",

                  "No object model means no owners for states or processes",

                  "It is the dictionary the grammar and semantics reference",

                  "Without owners, states and processes float unattached",

                  "Associations give the other models their navigation",

                ],              },
            ],
          },
          {
            number: "2.4",
            title: "The function model and data flow diagrams",
            body: [
              "The function model describes the system as transformations of data - and its diagram is the data flow diagram (DFD): processes (bubbles - transformations), data stores (open rectangles - resting data), external entities (squares - sources/sinks), and data flows (arrows - what moves). The notation's discipline: every process transforms input to output (no spontaneous generation), every store is read or written by some process, and the diagram shows flow, not control (no sequences, no decisions - that is the dynamic model's job).",
              "DFDs are leveled, and the leveling is the exam's mechanics. Level 0 (context diagram): the whole system as one process with its external entities - 'Order Processing System' receiving customer orders and shipping requests, emitting invoices and shipping documents. Level 1: explode into major processes - Validate Order, Compute Total, Generate Invoice, Update Inventory - with the stores (Orders, Inventory, Prices). Level 2: explode any process further (Compute Total -> fetch prices, apply line discounts, sum, apply customer discount - 2.2's DiscountRule as a process input). Numbering (1, 1.1, 1.1.1) tracks the explosion, and balancing guarantees the parent's flows equal the child's.",
              "A worked leveling trace fixes the discipline. Context: Customer -> [Order Processing] -> Invoice. Level 1: Customer order -> Validate Order -> Valid Order (store) -> Compute Total (reads Prices store) -> Invoice -> Customer; Compute Total also writes Updated Inventory after Update Inventory reads Valid Order. Balance check: every flow into the parent context (order in, invoice out) appears at level 1's boundary - nothing invented, nothing dropped. The exam's sentence: the function model is the system as data transformations, leveled by explosion, balanced at every boundary.",
            ],
            keyTerms: [
              { term: "DFD", definition: "Processes, stores, external entities and flows - the function model's notation." },
              { term: "Context diagram (level 0)", definition: "The whole system as one process with its externals." },
              { term: "Leveling / explosion", definition: "Expanding a process into sub-processes; numbering tracks depth." },
              { term: "Balancing", definition: "Parent's boundary flows equal the child's - the leveling invariant." },
            ],
            table: {
              caption: "Leveling the order-processing system.",
              headers: ["Level", "Contents", "Balanced flows"],
              rows: [
                ["0 (context)", "One process + Customer, Warehouse externals", "order in; invoice/shipping out"],
                ["1", "Validate, Compute Total, Invoice, Update Inventory + 3 stores", "same boundary flows, exploded"],
                ["2 (of Compute Total)", "Fetch prices, Apply discounts, Sum", "1's boundary for process 2 preserved"],
              ],
            },
            bullets: [
              "DFD elements: process bubbles, data stores, external entities, flows.",
              "Discipline: no control logic in DFDs - that belongs to the dynamic model.",
              "Level 0 = context diagram; level 1 = major processes; level 2 = explosions.",
              "Numbering (1, 1.1, 1.1.1) tracks the explosion path.",
              "Balancing: parent and child boundary flows must match exactly.",
              "Worked trace: context -> four processes, three stores -> total computed in three steps.",
            ],
            diagram: {
              kind: "flow",
              title: "Level 1 DFD - order processing",
              caption: "From customer order to invoice through four processes and three stores.",
              steps: [
                { label: "Validate Order", note: "customer order -> valid order (store)" },
                { label: "Compute Total", note: "reads Prices; applies discounts (2.2's rule)" },
                { label: "Update Inventory", note: "reads valid order; writes inventory" },
                { label: "Generate Invoice", note: "invoice -> customer (boundary flow)" },
              ],
            },
            callout: {
              type: "warning",
              title: "No control in the DFD",
              body: "The classic DFD slip: drawing decision diamonds or sequence arrows in a data flow diagram - those are flowchart concepts. The DFD shows what transforms into what, not when or in what order; sequence belongs to the dynamic model, decisions to its guards. Name this separation explicitly in any DFD answer.",
            },
            examQuestions: [
              {
                q: "Explain the function model and DFD notation, demonstrate leveling with the context diagram, level 1 and one level 2 explosion of order processing, and state the balancing invariant.",
                marks: 14,
                outline: [
                  "Elements: processes, data stores, external entities, flows",
                  "No control logic - sequence and decisions belong elsewhere",
                  "Level 0: one process + externals (order in, invoice out)",
                  "Level 1: Validate, Compute Total, Invoice, Update Inventory + stores",
                  "Level 2: Compute Total explodes to fetch/discount/sum",
                  "Numbering tracks explosions; balancing preserves boundary flows",
                  "Function model = transformations; dynamic model = timing",
                ],
              },
              {
                q: "How does the function model relate to the object model's operations?",
                marks: 7,
                outline: [

                  "Each DFD process realizes one or more object operations",

                  "Data stores map to objects/attributes; flows map to arguments/results",

                  "Cross-check: every operation should trace to a process or event action",

                  "Flows correspond to operation arguments and results",

                  "Every orphan process exposes a missing operation",

                ],              },
            ],
          },
          {
            number: "2.5",
            title: "The relationship among the models",
            body: [
              "The three models describe one system, and OMT's cross-check formalizes how they meet. The correspondences: each object-model operation must be realized somewhere - either as a process in the function model (a computation) or as an action on a transition in the dynamic model (a reaction to events); each dynamic-model state must belong to an object-model class (states hang on objects); each function-model data store maps to object-model classes/attributes; each event on a transition corresponds to an operation invocation or a real-world arrival.",
              "The consistency checklist is the exam's tool, and it reads as five questions over the three diagrams: does every class with a lifecycle have a state diagram? Does every state transition carry its triggering event, and does that event trace to an operation or external arrival? Does every operation appear as a process or an action? Does every DFD store correspond to classes/attributes? Do the function model's outputs match the scenarios the dynamic model's event traces tell? A worked cross-check on the order domain: Order.total() (object model) appears as the Compute Total process (function model); Order's states placed -> paid -> shipped (dynamic) are triggered by events payment-received and ship-confirmed, both tracing to operations; the Orders store (function) is the Order class (object). All five questions answer - the models agree.",
              "Why the check matters completes the section: three independently drawn diagrams drift into contradiction (an operation nobody realizes, a state with no trigger, a store with no class), and the cross-check is the drift detector - the analysis-phase equivalent of testing. The exam's sentence: the models are three projections of one system, and the relationship table is the projection's alignment check - every element accounted for in at least one other model.",
            ],
            keyTerms: [
              { term: "Cross-check", definition: "Every model element must be realized or owned in another model." },
              { term: "Realization", definition: "An operation appearing as a process (function) or transition action (dynamic)." },
              { term: "Drift detector", definition: "The consistency checklist catching contradictions between diagrams." },
              { term: "Balanced model set", definition: "All five consistency questions answered - analysis complete." },
            ],
            table: {
              caption: "The correspondence table.",
              headers: ["Object model", "Dynamic model", "Function model"],
              rows: [
                ["Class Order with lifecycle", "Order's state diagram", "-"],
                ["Operation total()", "-", "Process: Compute Total"],
                ["Attribute set of Order", "States hold attribute constraints", "Store: Orders"],
                ["Operation receivePayment()", "Transition on payment-received", "-"],
                ["-", "Event payment-received", "Flow: payment data"],
              ],
            },
            bullets: [
              "Operations realize as processes or transition actions - never orphaned.",
              "States belong to classes; events trace to operations or arrivals.",
              "DFD stores map to classes/attributes; flows map to arguments.",
              "Worked cross-check: total(), payment-received, Orders store all accounted.",
              "Five consistency questions form the drift detector.",
              "Sentence: three projections, one alignment check.",
            ],
            diagram: {
              kind: "pipeline",
              title: "Model cross-validation",
              caption: "Draw all three, then walk the correspondence table - every element accounted.",
              stages: [
                { label: "Object model", note: "classes, operations, attributes" },
                { label: "Dynamic model", note: "states + events per lifecycle class" },
                { label: "Function model", note: "processes + stores" },
                { label: "Cross-check", note: "five questions; orphans and ghosts surface" },
                { label: "Aligned model set", note: "analysis ready for design" },
              ],
            },
            callout: {
              type: "exam",
              title: "Orphans and ghosts",
              body: "The cross-check's two failure names: an operation no process or action realizes is an orphan; an event with no operation or arrival is a ghost. Walking the correspondence table names them precisely - 'the five questions surface orphans and ghosts before design inherits them.'",
            },
            examQuestions: [
              {
                q: "Explain the relationship among OMT's three models with the correspondence table, demonstrate the five-question consistency check on the order domain, and name the orphan/ghost failures it catches.",
                marks: 14,
                outline: [
                  "Operations realize as processes or transition actions",
                  "States belong to classes; events trace to operations/arrivals",
                  "DFD stores map to classes/attributes; flows to arguments",
                  "Worked: total() -> Compute Total; payment-received -> transition",
                  "Orders store -> Order class; flows -> payment data",
                  "Five questions: lifecycle, triggers, realization, stores, outputs",
                  "Orphans (unrealized operations) and ghosts (untriggered events) surface",
                ],
              },
              {
                q: "Why can three independently drawn diagrams contradict each other?",
                marks: 7,
                outline: [

                  "Each diagram answers a different question - no shared enforcement",

                  "Drift: additions to one model skip the others",

                  "The cross-check is the alignment discipline",

                  "Independent authors compound the drift",

                  "The alignment check is analysis's version of testing",

                ],              },
            ],
          },
          {
            number: "2.6",
            title: "Object diagrams and state diagrams",
            body: [
              "Two more diagrams complete OMT's notation set. The object diagram is a snapshot: instances (objects with their current attribute values) and their links at one moment - a class diagram made concrete. Its use: validating the class model against reality ('here is a legal configuration') and documenting example configurations for testers. A worked snapshot: customer(Riya) -> order(501, status: placed) -> lineItem(widget, qty: 2) -> product(widget, price: 199) - every link an instance of 2.2's associations, every value legal under the class invariants.",
              "The state diagram is the lifecycle: for a class whose objects have behaviour-over-time, the states (modes of existence with attribute constraints), the events that trigger transitions, the guards (conditions permitting the transition), and the actions performed. Order's state diagram: placed -[payment received]-> paid -[ship confirmed]-> shipped -[delivery confirmed]-> delivered, plus placed -[cancelled]-> cancelled; guards like (balance cleared) on the payment transition. The state diagram's discipline: one start state, transitions named by events, states named by adjectives (placed, paid) rather than activities.",
              "The pair's contrast is the exam's framing: the object diagram freezes time (one instant, values and links), the state diagram spans time (all instants, transitions and events). Together they validate each other: every state must be reachable in some legal object diagram; every object snapshot must sit in exactly one state. The sentence: the object diagram proves the structure can be instantiated; the state diagram proves the instances can live - and each is the other's witness.",
            ],
            keyTerms: [
              { term: "Object diagram", definition: "A snapshot: instances, attribute values, links at one instant." },
              { term: "State diagram", definition: "A lifecycle: states, events, guards, transitions for one class." },
              { term: "Guard", definition: "The condition permitting a transition (balance cleared)." },
              { term: "Mutual witness", definition: "Every state reachable in a snapshot; every snapshot in exactly one state." },
            ],
            table: {
              caption: "Order's lifecycle as a state table.",
              headers: ["From", "Event [guard]", "To", "Action"],
              rows: [
                ["(start)", "order submitted", "placed", "create line items"],
                ["placed", "payment received [balance cleared]", "paid", "authorize shipment"],
                ["paid", "ship confirmed", "shipped", "notify customer"],
                ["shipped", "delivery confirmed", "delivered", "close order"],
                ["placed", "cancelled", "cancelled", "release stock"],
              ],
            },
            bullets: [
              "Object diagram: one instant - instances, values, links.",
              "Use: legal-configuration examples for validation and testers.",
              "State diagram: states + events + guards + actions over all time.",
              "Order lifecycle: placed -> paid -> shipped -> delivered, with cancelled exit.",
              "Naming: states are adjectives; transitions are events; guards permit.",
              "Mutual witnessing: snapshots and states validate each other.",
            ],
            diagram: {
              kind: "compare",
              title: "Snapshot vs lifecycle",
              caption: "One instant against all instants - each diagram witnesses the other.",
              left: {
                heading: "Object diagram (one instant)",
                items: [
                  "customer(Riya) -> order(501, placed)",
                  "-> lineItem(widget, qty 2)",
                  "-> product(widget, 199)",
                  "Proves: the structure can be instantiated",
                ],
              },
              right: {
                heading: "State diagram (all instants)",
                items: [
                  "placed -[payment, cleared]-> paid",
                  "-[ship confirmed]-> shipped",
                  "-[delivery]-> delivered; cancelled exit",
                  "Proves: instances can live through events",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "States are adjectives",
              body: "The notation slip examiners catch: states named as activities ('processing', 'computing') instead of modes ('placed', 'paid'). The state is what the object is between events; the activity belongs in the transition's action. One naming rule cleans the whole diagram.",
            },
            examQuestions: [
              {
                q: "Distinguish object diagrams from state diagrams, write Order's state table with events, guards and actions, and explain the mutual-witness validation between the two.",
                marks: 14,
                outline: [
                  "Object diagram: snapshot of instances, values, links",
                  "Worked snapshot: Riya -> order 501 -> lineItem -> product",
                  "State diagram: states, events, guards, actions for one class",
                  "Lifecycle: placed -> paid -> shipped -> delivered; cancelled",
                  "Guards: balance cleared on the payment transition",
                  "Naming: adjectival states, event transitions",
                  "Mutual witness: states reachable in snapshots; snapshots in states",
                ],
              },
              {
                q: "When does a class need a state diagram at all?",
                marks: 7,
                outline: [

                  "Only when instances have behaviour-over-time (lifecycle modes)",

                  "Value objects and stateless services need none",

                  "Forcing states on everything produces empty diagrams",

                  "Event-driven behaviour is the trigger criterion",

                  "User-visible mode changes justify states",

                ],              },
            ],
          },
          {
            number: "2.7",
            title: "Analysis - from requirements to a validated model set",
            body: [
              "Analysis is the disciplined assembly of everything this unit built: from requirements, produce use cases; from use cases, the object model (2.2's pass); from lifecycle-bearing classes, state diagrams (2.6); from data-processing requirements, the DFDs (2.4); then cross-validate (2.5) and iterate - because each model built reveals gaps in the others (a state diagram with no operation to trigger a transition is a requirements question in disguise).",
              "A worked iteration trace fixes the loop. Pass 1: use cases Place Order, Pay, Ship, Deliver -> object model (Customer, Order, LineItem, Product) -> Order state diagram sketched -> DFD for order processing. Cross-check: the state 'paid' has no triggering operation in the object model - the requirement never said how payment arrives. Requirement question raised: 'how are payments received - online, offline?' Answer (online gateway event) added to the use cases. Pass 2: operation receivePayment() added; transition now triggered; DFD gains the payment flow. Three models, two passes, one requirement clarified - analysis is where questions surface while they are still cheap.",
              "The analysis deliverable is the validated model set: the object model (the dictionary), the state diagrams (the grammar), the DFDs (the semantics), the use cases (the traceability root), and the open-issues list (the questions surfaced, answered, and folded back). The exam's sentence: analysis is iterative modelling with cross-validation - the loop runs until the three models agree and every disagreement has become a clarified requirement.",
            ],
            keyTerms: [
              { term: "Analysis iteration", definition: "Model -> cross-check -> gap -> clarified requirement -> re-model." },
              { term: "Open-issues list", definition: "Questions surfaced by modelling, answered and folded back." },
              { term: "Validated model set", definition: "Object model + state diagrams + DFDs + use cases, agreeing." },
              { term: "Cheap-question principle", definition: "Gaps surface in analysis where answers cost least." },
            ],
            table: {
              caption: "The two-pass iteration.",
              headers: ["Pass", "Built", "Cross-check finding", "Resolution"],
              rows: [
                ["1", "Use cases + object model + states + DFD", "'paid' state has no trigger", "How do payments arrive?"],
                ["2", "receivePayment() + payment flow added", "Transition triggered; store maps", "Requirement clarified; models agree"],
              ],
            },
            bullets: [
              "Assembly: use cases -> object model -> state diagrams -> DFDs -> cross-check.",
              "Each model built reveals gaps in the others - the loop's engine.",
              "Worked: 'paid' with no trigger became a payment-method requirement question.",
              "Pass 2 folds the answer back in - models agree.",
              "Deliverable: validated model set + open-issues list resolved.",
              "Sentence: analysis iterates until disagreement becomes clarification.",
            ],
            diagram: {
              kind: "cycle",
              title: "The analysis loop",
              caption: "Model, cross-check, surface gaps, clarify, re-model - until the three agree.",
              steps: [
                { label: "Model", note: "object model, states, DFDs from use cases" },
                { label: "Cross-check", note: "the five consistency questions" },
                { label: "Surface gaps", note: "orphans, ghosts, unexplained states" },
                { label: "Clarify", note: "gaps become requirement questions" },
                { label: "Re-model", note: "answers folded back; loop continues" },
              ],
            },
            callout: {
              type: "exam",
              title: "Gaps are cheap here",
              body: "The section's closing argument: 'every gap the analysis loop surfaces is a question answered while it is still cheap - the same question found in testing costs tenfold.' The two-pass trace demonstrates the economy: one clarification, three models repaired.",
            },
            examQuestions: [
              {
                q: "Describe the analysis phase as iterative model assembly with cross-validation, work the two-pass trace on the order domain, and state the deliverable of a completed analysis.",
                marks: 14,
                outline: [
                  "Assembly: use cases -> object model -> state diagrams -> DFDs",
                  "Cross-check surfaces orphans, ghosts, untriggered states",
                  "Pass 1: 'paid' state lacks a trigger - requirements question",
                  "Clarification: payments arrive via online gateway",
                  "Pass 2: receivePayment() + payment flow folded in",
                  "Deliverable: validated model set + resolved open-issues list",
                  "Economy: gaps clarified here cost a fraction of test-phase finds",
                ],
              },
              {
                q: "Why do analysis models iterate rather than finalize in one pass?",
                marks: 7,
                outline: [

                  "Each model's construction reveals assumptions the others test",

                  "Requirements genuinely clarify under modelling pressure",

                  "One pass cannot know what the state diagram will ask",

                  "Gaps surface as questions while answers are cheap",

                  "The loop converts disagreement into clarified requirements",

                ],              },
            ],
          },
        ],
      },
    },
    {
      number: 3,
      roman: "III",
      title: "Object-Oriented Design",
      summary:
        "Unit III turns the analysis models into a buildable design: the overview of object design, combining the three models, designing algorithms with design optimization, implementing control, designing associations and object representation, physical packaging with documented design decisions, and the comparison with the use-case-driven approach.",
      chapter: {
        number: "03",
        title: "From Models to Design",
        intro:
          "Unit III covers the overview of object design, combining the three models, designing algorithms and design optimization, implementation of control, design of associations and object representation, physical packaging and documenting design decisions, and the comparison of the object-design approach with the use-case-driven approach.",
        inOneBreath:
          "Object design reads the three analysis models together, then adds the how: algorithms for each operation (optimized by restructuring classes and adding indexes), a control style (state-machine driven or procedure driven), association implementations (direction and collections), and packaging (subsystems, layers, documented decisions) - with the use-case-driven alternative working from scenarios first rather than models first.",
        sections: [
          {
            number: "3.1",
            title: "Overview of object design",
            body: [
              "Object design is the bridge phase: analysis said what (domain classes, responsibilities, states, flows); design decides how - and the syllabus's overview is its step list. Combine the three analysis models (read operations, states and flows together per class - 3.2); design algorithms for every operation (the computational recipes); optimize the design (restructure for speed or simplicity); implement the control style (how events and sequencing drive objects); design the associations (direction, collections, traversal costs); determine object representation (attributes as variables, references, or persisted fields); and package physically (subsystems, compilation units, documented decisions).",
              "A worked design pass fixes the steps on one operation. Analysis said: Order.total() computes the sum of line-item prices with customer discounts (2.2's model). Design: combine models - total() is called from the function model's Compute Total process and invoked after the 'placed' state's validation action; design the algorithm - fetch prices from LineItems, multiply quantities, sum, then apply the DiscountRule strategy (1.2's hierarchy polymorphically); optimize - cache the computed total, invalidate on mutation (the dirty-flag pattern) since totals are re-read at billing; control - total() is a plain query, no state change; associations - Order already holds LineItem collection, traversal cost fine; representation - total is derived (not stored) unless performance demands otherwise; packaging - Order joins the Orders subsystem with its decision documented (cache choice + rationale).",
              "The design decisions' record is the phase's discipline: every how-decision (algorithm, cache, control style, packaging) is written down with its rationale - because design rationale is what survives team turnover, and 3.6 makes it a step of its own. The exam's sentence: object design adds the how to the analysis what - algorithms, optimization, control, associations, representation and packaging, each decision recorded with its reason.",
              "Exam framing: expect 'explain the steps of object design'. Give the step list, work the total() design pass across all steps, and close with the recorded-decisions sentence. Rationale is the deliverable - six months later the recorded why explains the cache. The total() design pass is the worked example - six decisions, each recorded with rationale.",
            ],
            keyTerms: [
              { term: "Object design", definition: "The bridge phase: adding the how to the analysis what." },
              { term: "Algorithm design", definition: "Computational recipes per operation, using the model's structure." },
              { term: "Design optimization", definition: "Restructuring for efficiency - caches, indexes, algorithm swaps." },
              { term: "Design rationale", definition: "The recorded why behind each how-decision." },
            ],
            table: {
              caption: "The design steps on Order.total().",
              headers: ["Step", "Decision"],
              rows: [
                ["Combine models", "total() called post-validation; realized by Compute Total"],
                ["Algorithm", "sum items x quantities; apply DiscountRule polymorphically"],
                ["Optimize", "cache total with dirty-flag invalidation"],
                ["Control", "plain query - no state change"],
                ["Associations", "traverse existing LineItem collection"],
                ["Representation + packaging", "derived attribute; Orders subsystem; rationale recorded"],
              ],
            },
            bullets: [
              "Design steps: combine models, algorithms, optimize, control, associations, representation, packaging.",
              "Worked pass: total() designed in six recorded decisions.",
              "Optimization example: dirty-flag cache - recompute only on mutation.",
              "Polymorphic discount rules reuse 1.2's hierarchy at design level.",
              "Every decision carries rationale - turnover survives on it.",
              "Sentence: design adds the how; analysis stays the what.",
            ],
            diagram: {
              kind: "flow",
              title: "The object design steps",
              caption: "Seven steps from combined models to packaged, documented design.",
              steps: [
                { label: "Combine models", note: "operations + states + flows per class" },
                { label: "Design algorithms", note: "recipes for every operation" },
                { label: "Optimize", note: "caches, indexes, restructuring" },
                { label: "Implement control", note: "state-driven or procedure-driven" },
                { label: "Design associations", note: "direction and collections" },
                { label: "Package", note: "subsystems + documented decisions" },
              ],
            },
            callout: {
              type: "tip",
              title: "Rationale is the deliverable",
              body: "The line that separates design from documentation theatre: 'the design phase's real output is not the diagrams - it is the recorded rationale for each how-decision, because six months later the rationale is the only thing that explains the cache.' Carry it into 3.6's packaging section.",
            },
            examQuestions: [
              {
                q: "Explain the steps of object design and work a complete design pass for Order.total() - models combined, algorithm, optimization, control, associations, representation and packaging.",
                marks: 14,
                outline: [
                  "Combine: total() called post-validation, realized by Compute Total",
                  "Algorithm: sum items, apply DiscountRule polymorphically",
                  "Optimize: dirty-flag cache - recompute on mutation only",
                  "Control: query operation, no state change",
                  "Associations: traverse the existing LineItem collection",
                  "Representation: derived attribute unless performance demands storage",
                  "Packaging: Orders subsystem with recorded rationale",
                ],
              },
              {
                q: "Why does design optimize by restructuring rather than micro-tuning?",
                marks: 7,
                outline: [

                  "Structural wins (caches, indexes) change complexity classes",

                  "Micro-tuning is fragile against compiler/hardware changes",

                  "Restructuring decisions are recorded; micro-tuning rots",

                  "Caches and indexes outlive compiler improvements",

                  "Measured profiles name where restructuring pays",

                ],              },
            ],
          },
          {
            number: "3.2",
            title: "Combining the three models",
            body: [
              "Analysis produced three models; design consumes them together - and the combination is mechanical enough to step through. For each class: gather its operations from the object model; gather its states and transition actions from the dynamic model; gather the processes that read or write its attributes from the function model. The union is the class's full responsibility set - the operations the design must implement, each traceable to the model that demanded it.",
              "A worked combination for Order fixes the trace. Object model: operations total(), receivePayment(), ship(); attributes items, status, customer. Dynamic model: states placed/paid/shipped/delivered; transition actions - on payment-received: authorizeShipment(); on ship-confirmed: notifyCustomer(). Function model: Compute Total reads Order's items; Update Inventory writes stock; payment flow delivers the payment data. The combined responsibility set: total(), receivePayment() (invoking authorizeShipment on success), ship() (invoking notifyCustomer), plus the guards - status checks that each operation validates against the state model before acting. Six responsibilities from three diagrams, every one traceable.",
              "The combination's check is 2.5's cross-validation run in design direction: the union should have no orphans (operations no model demanded) and no ghosts (model demands nothing implements). The exam's sentence: combining the models turns three views into one responsibility list per class - each entry traceable to the diagram that demanded it, none invented. The validation costs one pass per class and repays itself as implementation contracts.",
            ],
            keyTerms: [
              { term: "Responsibility union", definition: "Object-model operations + dynamic actions + function processes per class." },
              { term: "Traceability", definition: "Each responsibility cites its demanding model." },
              { term: "Design-direction cross-check", definition: "2.5's five questions run to validate the union." },
              { term: "Guard validation", definition: "Operations check the state model before acting." },
            ],
            table: {
              caption: "Order's combined responsibility set.",
              headers: ["Responsibility", "Demanded by", "Notes"],
              rows: [
                ["total()", "Object model + function model", "query; cached per 3.1"],
                ["receivePayment()", "Dynamic model (payment-received)", "validates status = placed"],
                ["authorizeShipment()", "Dynamic action", "invoked on successful payment"],
                ["ship()", "Object model + dynamic (ship-confirmed)", "invokes notifyCustomer()"],
                ["notifyCustomer()", "Dynamic action", "communication responsibility"],
                ["status guards", "Dynamic model", "every mutator validates its state"],
              ],
            },
            bullets: [
              "Per class: union of object operations, dynamic actions, function processes.",
              "Worked: Order gains six responsibilities, each traceable.",
              "Guards: mutators validate state-model constraints before acting.",
              "No orphans (unexplained operations), no ghosts (unmet demands).",
              "The union is the implementation contract design hands to coding.",
              "Sentence: three views become one traceable responsibility list.",
            ],
            diagram: {
              kind: "pipeline",
              title: "Combining models into responsibilities",
              caption: "Three inputs per class, one union out - each entry traceable.",
              stages: [
                { label: "Object model", note: "operations + attributes for the class" },
                { label: "Dynamic model", note: "states + transition actions" },
                { label: "Function model", note: "processes reading/writing the class" },
                { label: "Union", note: "the responsibility set - guards included" },
                { label: "Validate", note: "no orphans, no ghosts (2.5 in reverse)" },
              ],
            },
            callout: {
              type: "exam",
              title: "Guards come from the dynamic model",
              body: "The combination detail students miss: transition guards become operation preconditions - receivePayment() must check status = placed because the dynamic model's transition said so. 'Guards are the dynamic model's contribution to the code' is the sentence that shows the combination was really done.",
            },
            examQuestions: [
              {
                q: "Explain how the three models are combined into per-class responsibility sets, work Order's union with guards, and connect the combination check to 2.5's cross-validation.",
                marks: 14,
                outline: [
                  "Per class: object operations + dynamic actions + function processes",
                  "Order: total, receivePayment, ship, authorizeShipment, notifyCustomer",
                  "Guards: status checks from dynamic-model transitions",
                  "Traceability: each responsibility cites its demanding diagram",
                  "No orphans or ghosts after validation",
                  "Union = the implementation contract for coding",
                  "Check = 2.5's five questions run in design direction",
                ],
              },
              {
                q: "Where do operation preconditions come from in a combined design?",
                marks: 7,
                outline: [

                  "From the dynamic model's transition guards",

                  "receivePayment checks status = placed before accepting",

                  "The state model is the source of validation logic",

                  "Transitions enumerate legal operation orders",

                  "Invalid sequences become precondition failures",

                ],              },
            ],
          },
          {
            number: "3.3",
            title: "Designing algorithms and design optimization",
            body: [
              "Each operation's algorithm is a design decision: the computational recipe balancing simplicity, flexibility and performance. The design considerations: choose the algorithm class (brute force vs optimized; recursive vs iterative); choose data structures (the algorithm's substrate - a set vs a list changes complexity); break complex operations into internal methods; and keep operations small, focused and substitutable. The optimization pass then restructures: add redundant classes or attributes for speed (indexes, caches), adjust associations for traversal frequency, or swap algorithms where profiles demand.",
              "A worked optimization pair fixes both directions. Simple-first: Customer.ordersBetween(d1, d2) designed as a linear scan of the orders collection - correct, adequate for 100 orders. Profile-driven optimization: at 100,000 orders the scan costs too much - add a redundant index (orders-by-date secondary structure maintained on insert) - a redundant structure added for speed, documented as such (3.1's rationale). Reverse direction: Order.total()'s dirty-flag cache from 3.1 - a redundant attribute (cachedTotal) added to avoid recomputation, invalidated on mutation. Both optimizations add redundancy deliberately, both are documented, both trade space and consistency-risk for time.",
              "The optimization discipline is the section's caution: optimize by measurement, not by intuition (profiles name the hot paths; intuition names the wrong ones); keep the simple version until measured need appears (the simple-first rule); and document every redundancy (an undocumented cache is a correctness landmine - stale data with no owner). The exam's sentence: algorithm design chooses recipes and structures; optimization adds measured, documented redundancy - never cleverness without a profile.",
            ],
            keyTerms: [
              { term: "Algorithm recipe", definition: "The computational plan per operation - class, structure, decomposition." },
              { term: "Redundant structure", definition: "An index or cache added for speed, documented and maintained." },
              { term: "Simple-first rule", definition: "Implement the simple version until measurement demands more." },
              { term: "Dirty flag", definition: "Cache invalidation marker - recompute only on mutation." },
            ],
            table: {
              caption: "Two optimizations, documented.",
              headers: ["Operation", "Simple version", "Optimized", "Trade-off recorded"],
              rows: [
                ["ordersBetween", "linear scan - O(n)", "orders-by-date index - O(log n)", "index maintained on every insert"],
                ["total()", "recompute on each call", "cachedTotal + dirty flag", "staleness risk owned by mutators"],
              ],
            },
            bullets: [
              "Algorithm design: class, structures, decomposition, small operations.",
              "Optimization: redundant structures for measured hot paths.",
              "Index example: orders-by-date - space and maintenance for query speed.",
              "Cache example: dirty-flag total - staleness owned and invalidated.",
              "Simple-first: implement simple, measure, then restructure.",
              "Rule: no cleverness without a profile; no redundancy without documentation.",
            ],
            diagram: {
              kind: "fork",
              title: "Optimizing an operation",
              caption: "Measurement decides the branch - and every branch adds documented redundancy.",
              start: "Operation too slow?",
              branches: [
                { label: "Query-heavy reads", outcome: "add an index structure - maintain on writes", good: true },
                { label: "Repeated identical computation", outcome: "cache with dirty-flag invalidation", good: true },
                { label: "Wrong algorithm class", outcome: "swap the recipe (scan -> search) - complexity change", good: true },
                { label: "Not actually measured", outcome: "stop - simple-first; profile before optimizing", good: false },
              ],
            },
            callout: {
              type: "warning",
              title: "No cleverness without a profile",
              body: "The discipline sentence: 'optimization without measurement optimizes the wrong code.' The ordersBetween index costs maintenance on every insert - justified only when the profile says reads dominate. Design exams and production code both punish intuition-driven restructuring.",
            },
            examQuestions: [
              {
                q: "Explain algorithm design considerations and the optimization pass, with the ordersBetween index and the total() dirty-flag cache as documented worked optimizations.",
                marks: 14,
                outline: [
                  "Recipe choice: algorithm class, data structures, decomposition",
                  "Operations kept small, focused, substitutable",
                  "Optimization adds redundant structures for measured hot paths",
                  "ordersBetween: linear scan -> orders-by-date index (O(log n))",
                  "total(): dirty-flag cache - recompute on mutation only",
                  "Both trades recorded: maintenance cost / staleness risk",
                  "Discipline: simple-first; profile; document every redundancy",
                ],
              },
              {
                q: "What risks does an undocumented cache introduce?",
                marks: 7,
                outline: [

                  "Stale data served with no owner to invalidate",

                  "Mutation paths missed - correctness erodes silently",

                  "Future maintainers cannot distinguish cache from truth",

                  "Cache and truth diverge silently under missed paths",

                  "Later edits may invalidate without touching the flag",

                ],              },
            ],
          },
          {
            number: "3.4",
            title: "Implementation of control",
            body: [
              "The dynamic model said when things happen; design must choose the control style that realizes it. Three styles, per the syllabus's framing: procedure-driven control - the code drives, calling operations in programmed sequences (the traditional style; the dynamic model's scenarios become procedure flows); event-driven control - events drive, a dispatcher receives events and routes them to handlers (the state machine made literal); and concurrent control - objects as tasks with their own threads, coordinating through messages (for genuinely parallel domains).",
              "The state-machine mapping is the syllabus's named technique: a state diagram implements directly as a state variable plus a dispatch - each state a case, each transition an event handler that validates and moves. A worked mapping of Order's state diagram: enum status {PLACED, PAID, SHIPPED, DELIVERED, CANCELLED}; receivePayment() checks status == PLACED, performs the transition, fires authorizeShipment(); invalid events per state are rejected (the guard discipline from 3.2). Alternatively the table-driven form: transitions held in a table (state, event) -> (next state, action), interpreted by one dispatch loop - data-driven states, easy to modify without recompiling logic.",
              "The choice logic completes the section: procedure-driven fits few, fixed flows (batch processing); event-driven fits many, variable event orders (UIs, servers, order lifecycles - where the state diagram is the truth); concurrency fits independent parallel actors (sensors, multi-user) at the price of synchronization complexity. The exam's sentence: control style is a design decision that converts the dynamic model into code - state machines map to state variables or tables, and the wrong style fights the model forever.",
            ],
            keyTerms: [
              { term: "Procedure-driven control", definition: "Code drives: programmed call sequences realize the flows." },
              { term: "Event-driven control", definition: "Dispatcher routes events to handlers - the state machine literal." },
              { term: "State variable + dispatch", definition: "status enum + per-event handlers implementing the diagram." },
              { term: "Table-driven states", definition: "(state, event) -> (next, action) table - data-driven transitions." },
            ],
            table: {
              caption: "Order's state machine, two implementations.",
              headers: ["Aspect", "State variable + cases", "Table-driven"],
              rows: [
                ["Structure", "enum status; switch per event", "transition table; one interpreter loop"],
                ["receivePayment", "case PLACED: validate, set PAID, fire action", "lookup (PLACED, payment) -> (PAID, action)"],
                ["Invalid events", "rejected per case", "rejected by table miss"],
                ["Change cost", "recompile logic", "edit table data"],
                ["Fits", "small, fixed machines", "large or frequently edited machines"],
              ],
            },
            bullets: [
              "Three styles: procedure-driven, event-driven, concurrent.",
              "State diagram -> state variable + dispatch, or a transition table.",
              "Worked: Order's receivePayment validates status, transitions, fires actions.",
              "Table-driven: transitions as data - edit without recompiling.",
              "Choice: fixed few flows -> procedures; variable event orders -> events.",
              "Wrong style fights the dynamic model forever.",
            ],
            diagram: {
              kind: "compare",
              title: "Procedure-driven vs event-driven control",
              caption: "Who drives - the code's sequence, or the arriving events?",
              left: {
                heading: "Procedure-driven",
                items: [
                  "Code calls operations in programmed order",
                  "Dynamic model flattened into flows",
                  "Simple to trace, rigid to change",
                  "Fits batch, fixed pipelines",
                ],
              },
              right: {
                heading: "Event-driven (state machine)",
                items:
                  [
                    "Dispatcher routes events to handlers",
                    "States and transitions literal in code",
                    "Handles any event order within the machine",
                    "Fits lifecycles, UIs, servers",
                  ],
              },
            },
            callout: {
              type: "tip",
              title: "Guards become preconditions",
              body: "The implementation sentence tying 3.2 to code: 'in the state-variable style, every transition guard is the handler's first precondition check - receivePayment rejects anything not PLACED.' The dynamic model did not disappear; it reappeared as validation.",
            },
            examQuestions: [
              {
                q: "Explain the control-implementation styles, map Order's state diagram to a state variable with dispatch and to a transition table, and state the choice logic between styles.",
                marks: 14,
                outline: [
                  "Styles: procedure-driven, event-driven, concurrent",
                  "State variable + per-event cases implementing the diagram",
                  "receivePayment: check PLACED, transition, fire authorizeShipment",
                  "Invalid events rejected per guards",
                  "Table-driven: (state, event) -> (next, action); edit as data",
                  "Choice: fixed flows -> procedures; variable orders -> events",
                  "Concurrency only for genuinely parallel actors",
                ],
              },
              {
                q: "When is a transition table preferable to coded cases?",
                marks: 7,
                outline: [

                  "Many states/events - the table scales without logic growth",

                  "Frequent machine edits - data changes beat recompiles",

                  "External configuration of lifecycles needed",

                  "Coded cases grow quadratically with states x events",

                  "Tables scale linearly and stay reviewable",

                ],              },
            ],
          },
          {
            number: "3.5",
            title: "Designing associations and object representation",
            body: [
              "Analysis drew associations as lines; design must implement them as code, and the decisions are direction and structure. Direction: one-way (only one class holds the reference - cheaper, but traversal is restricted) or two-way (both sides hold - richer navigation at consistency cost: every update must maintain both ends). Structure: a single reference (1 multiplicity), a collection (set/list per ordering needs), or an association object (when the relationship carries attributes or many-to-many needs a first-class home - 1.7's association class materialized).",
              "A worked implementation set fixes the choices. Customer 1-1..* Order: two-way - Customer holds List<Order> (queries 'my orders' are frequent), Order holds customer reference (invoices need the customer) - both ends maintained by the association's single mutator addOrder(). Customer *-* Product (prefers): association object Preference(customer, product, since) - the relationship carries the since attribute, so it becomes a class. LineItem -> Product: one-way (items need products; products do not need items) - the cheap direction, chosen deliberately. Three associations, three structures, all decisions recorded: bidirectional where queries demand, one-way where traffic is one-sided, association objects where attributes live on the relationship.",
              "Object representation completes the section: attributes as in-memory variables (references for associations, values for primitives) versus persisted fields (the OODB mapping 5.6 anticipates), with the representation decision documented per class (what persists, what derives, what caches - 3.1's dirty flag being a representation decision). The exam's sentence: association design chooses direction and structure per traversal need, and object representation chooses what each attribute really is - both recorded as decisions, not accidents.",
            ],
            keyTerms: [
              { term: "Association direction", definition: "One-way (single holder) vs two-way (both ends maintained)." },
              { term: "Association object", definition: "A class materializing the relationship when it carries attributes." },
              { term: "Traversal frequency", definition: "The query pattern that justifies each direction choice." },
              { term: "Object representation", definition: "Per-attribute decisions: variable, reference, persisted, derived, cached." },
            ],
            table: {
              caption: "Three associations, three implementations.",
              headers: ["Association", "Decision", "Rationale"],
              rows: [
                ["Customer - Orders", "Two-way: List<Order> + customer ref", "Queries demand both directions"],
                ["Customer - Product (prefers)", "Association object Preference(since)", "Relationship carries data"],
                ["LineItem -> Product", "One-way reference", "Products never query items"],
              ],
            },
            bullets: [
              "Direction: one-way cheap and clear; two-way rich but double-maintained.",
              "Structure: reference, collection, or association object per multiplicity+data.",
              "Worked: bidirectional Customer-Orders; Preference object; one-way LineItem.",
              "Two-way ends updated by one mutator - consistency centralized.",
              "Representation: derived and cached attributes documented per class.",
              "Sentence: direction and structure are traversal-frequency decisions.",
            ],
            diagram: {
              kind: "fork",
              title: "Implementing an association",
              caption: "Three standard shapes - chosen by traversal need and relationship data.",
              start: "Association to implement",
              branches: [
                { label: "One-way traversal only", outcome: "single reference in the querying class - cheapest", good: true },
                { label: "Both directions queried", outcome: "two-way references with a single mutator maintaining both", good: true },
                { label: "Relationship carries attributes", outcome: "association object class - the relationship becomes first-class", good: true },
              ],
            },
            callout: {
              type: "exam",
              title: "One mutator owns both ends",
              body: "The two-way pitfall and its fix: naive code sets customer and order independently - one end forgotten and the model corrupts. The design rule: 'bidirectional associations are maintained by one method (addOrder) that sets both ends - never by callers touching each side.' It is the consistency invariant examiners probe.",
            },
            examQuestions: [
              {
                q: "Explain association implementation decisions - direction and structure - with the worked Customer-Order, Preference and LineItem set, and state the object-representation decisions that accompany them.",
                marks: 14,
                outline: [
                  "Direction: one-way vs two-way by traversal frequency",
                  "Two-way costs double maintenance - centralized in one mutator",
                  "Structure: reference, collection, or association object",
                  "Customer-Orders: bidirectional lists (queries both ways)",
                  "Preference: association object carrying since",
                  "LineItem->Product: one-way - products never query items",
                  "Representation: derived/cached/persisted decisions documented",
                ],
              },
              {
                q: "When does a many-to-many association deserve an association object instead of two collections?",
                marks: 7,
                outline: [

                  "When the relationship itself carries data (since, quantity, grade)",

                  "When it needs identity, queries or lifecycle of its own",

                  "Two bare collections cannot host relationship attributes",

                  "The pair (customer, product) gains an addressable object",

                  "Queries about the relationship become direct",

                ],              },
            ],
          },
          {
            number: "3.6",
            title: "Physical packaging and documenting design decisions",
            body: [
              "Logical design classes need a physical home, and packaging is that decision set: compilation units and modules (which classes compile together), subsystems (clusters of classes with declared interfaces and hidden internals - 1.3's hiding at architecture scale), layering (which subsystems may depend on which - the dependency direction rule: dependencies point downward, toward stable abstractions), and the visibility rules between packages. A worked packaging for the order system: subsystems Customer, Ordering, Pricing, Persistence - Ordering may depend on Pricing (calls DiscountRule) but Pricing never depends on Ordering; Persistence depends on all (it must see everything) while nothing depends back except through its declared interfaces.",
              "The packaging tests are mechanical: the acyclic-dependency test (no cycles in the subsystem graph - cycles make compilation and comprehension order-dependent); the interface test (each subsystem's surface is small, declared, and sufficient); and the build test (each subsystem compiles and tests in isolation against stubs). The order system passes: Pricing compiles alone against its interfaces; Ordering's tests run with a stubbed Pricing; no cycle exists.",
              "Documenting design decisions is the syllabus's named step, and its form is the decision record: for each significant how-decision - the decision, the alternatives considered, the rationale, and the consequences (3.1's total() cache: decision 'cache with dirty flag'; alternatives 'recompute always, persist total'; rationale 'billing re-reads frequently, mutations are rare'; consequences 'mutators must invalidate; stale risk owned'). The record's value is turnover survival - the new developer reads why, not just what. The exam's sentence: packaging assigns classes to subsystems with directed dependencies and isolated builds; documentation records each decision with its alternatives and rationale - the design's memory.",
            ],
            keyTerms: [
              { term: "Subsystem", definition: "A class cluster with a declared interface and hidden internals." },
              { term: "Dependency direction", definition: "Dependencies point toward stable abstractions - no upward edges." },
              { term: "Acyclic dependency test", definition: "No cycles in the subsystem graph." },
              { term: "Decision record", definition: "Decision + alternatives + rationale + consequences per how-choice." },
            ],
            table: {
              caption: "The order system's packaging.",
              headers: ["Subsystem", "Contains", "Depends on"],
              rows: [
                ["Customer", "Customer, Preference", "Persistence interfaces"],
                ["Ordering", "Order, LineItem", "Pricing, Persistence"],
                ["Pricing", "DiscountRule hierarchy", "Persistence interfaces"],
                ["Persistence", "Storage, mapping", "all (downward only)"],
              ],
            },
            bullets: [
              "Packaging: modules, subsystems, layers, inter-package visibility.",
              "Dependency rule: edges point downward toward stable abstractions.",
              "Worked graph: Ordering -> Pricing; Pricing never back; Persistence below all.",
              "Tests: acyclic graph; declared interfaces; isolated builds with stubs.",
              "Decision records: decision, alternatives, rationale, consequences.",
              "Sentence: packaging is architecture-scale information hiding.",
            ],
            diagram: {
              kind: "layers",
              title: "The layered packaging",
              caption: "Dependencies point downward only - the acyclic rule made visible.",
              layers: [
                { label: "Persistence", note: "storage and mapping - sees all, depended on by all" },
                { label: "Pricing", note: "DiscountRule hierarchy - stable abstractions" },
                { label: "Ordering", note: "Order, LineItem - depends on Pricing" },
                { label: "Application / UI", note: "the top - depends on everything below" },
              ],
            },
            callout: {
              type: "exam",
              title: "The decision record's four fields",
              body: "The documentation question's template: 'decision, alternatives, rationale, consequences - four fields per how-decision.' Then one filled example (the total() cache) converts the template into evidence. Design documentation without alternatives and consequences is a memo, not a record.",
            },
            examQuestions: [
              {
                q: "Explain physical packaging - subsystems, layers, dependency direction - with the order-system packaging and its three tests, and demonstrate the decision-record format with the total() cache.",
                marks: 14,
                outline: [
                  "Packaging: compilation units, subsystems, layers, visibility",
                  "Dependency rule: downward toward stable abstractions; acyclic",
                  "Worked: Customer, Ordering, Pricing, Persistence subsystems",
                  "Ordering -> Pricing allowed; Pricing never depends back",
                  "Tests: acyclicity, declared interfaces, isolated stubbed builds",
                  "Decision record: decision, alternatives, rationale, consequences",
                  "Cache example: recompute vs persist vs dirty-flag - rationale recorded",
                ],
              },
              {
                q: "Why do dependency cycles make builds fragile?",
                marks: 7,
                outline: [

                  "Compilation order becomes ambiguous within the cycle",

                  "Changes propagate endlessly around the loop",

                  "No subsystem can be tested or released independently",

                  "Cycles convert subsystems into one de-facto unit",

                  "Build tools recompile the whole loop every time",

                ],              },
            ],
          },
          {
            number: "3.7",
            title: "The comparison with the use-case-driven approach",
            body: [
              "The object-design method this unit walked is model-driven: the analysis models (classes, states, flows) are combined and realized. The use-case-driven alternative (Jacobson's, folded into the Unified Process) starts from scenarios: for each use case, walk its flow - realize it as interacting objects (the interaction diagram), let the objects' responsibilities accumulate across use cases, then consolidate into classes. The two differ in the direction of construction: models first versus scenarios first.",
              "A worked contrast on the same requirement fixes the difference. Place Order, model-driven: combine models (3.2) -> Order's responsibility set -> implement. Place Order, use-case-driven: walk the scenario step by step - customer submits items -> an Order object receives createOrder(items) -> Order asks Product for prices -> LineItems form -> DiscountRule applies -> total returned. The walk assigns responsibilities to whatever object each step needs (the OO maxim: which object should do this? the one with the information), and after walking several use cases, the accumulated responsibilities consolidate into the same class set - arrived at from scenarios rather than models.",
              "The comparison's verdict is methodological, not competitive: model-driven suits stable, well-understood domains (the models are trustworthy; realize them); use-case-driven suits fuzzy, interaction-heavy domains (the scenarios are the ground truth; discover the objects from them); mature practice mixes both - use cases for discovery and traceability, models for structure and completeness. The exam's sentence: model-driven realizes what the models promise; use-case-driven discovers the objects the scenarios need - the choice is which artifact you trust first.",
            ],
            keyTerms: [
              { term: "Model-driven design", definition: "Combine analysis models; realize their operations (this unit's path)." },
              { term: "Use-case-driven design", definition: "Walk scenarios; assign responsibilities; consolidate into classes." },
              { term: "Responsibility assignment", definition: "Give each step to the object holding the information." },
              { term: "Interaction realization", definition: "The use case's flow drawn as object messages." },
            ],
            table: {
              caption: "Model-driven vs use-case-driven.",
              headers: ["Aspect", "Model-driven", "Use-case-driven"],
              rows: [
                ["Starting artifact", "The three analysis models", "The use-case scenarios"],
                ["Construction", "Combine + realize responsibilities", "Walk flows + assign per step"],
                ["Strength", "Completeness, structure", "Traceability, discovery"],
                ["Risk", "Models drift from real usage", "Classes emerge ad hoc without consolidation"],
                ["Fits", "Stable, well-understood domains", "Fuzzy, interaction-heavy domains"],
              ],
            },
            bullets: [
              "Model-driven: combine (3.2), realize; use-case-driven: walk, assign, consolidate.",
              "Worked walk: Place Order step-by-step assigns createOrder, pricing, discounting.",
              "OO maxim: give each responsibility to the object with the information.",
              "Consolidation after several walks yields the same class set from scenarios.",
              "Verdict: trust the models when they are solid; trust the scenarios when they are not.",
              "Mature practice mixes both: scenarios for discovery, models for completeness.",
            ],
            diagram: {
              kind: "cycle",
              title: "The use-case-driven loop",
              caption: "Walk a scenario, assign responsibilities, consolidate - repeat per use case.",
              steps: [
                { label: "Pick use case", note: "one scenario, one flow" },
                { label: "Walk the flow", note: "step-by-step through the objects" },
                { label: "Assign responsibilities", note: "information-holder principle" },
                { label: "Draw interactions", note: "the realization diagram" },
                { label: "Consolidate", note: "accumulate into classes; next use case" },
              ],
            },
            callout: {
              type: "tip",
              title: "Which artifact do you trust first?",
              body: "The comparison's one-line verdict: 'model-driven trusts the models; use-case-driven trusts the scenarios - choose by which artifact your domain makes trustworthy.' Stable legislated domains trust models; fuzzy user-facing domains trust scenarios. The sentence answers every 'compare the approaches' question.",
            },
            examQuestions: [
              {
                q: "Compare the model-driven object design of this unit with the use-case-driven approach, walking Place Order both ways, and state the methodological verdict with domain examples.",
                marks: 14,
                outline: [
                  "Model-driven: combine models, realize the responsibility set (3.2)",
                  "Use-case-driven: walk the scenario, assign per step, consolidate",
                  "Walk: createOrder -> prices -> LineItems -> discount -> total",
                  "Information-holder principle assigns each step",
                  "Consolidation across use cases yields the class set",
                  "Model-driven fits stable domains; scenarios fit fuzzy ones",
                  "Mature practice mixes both - discovery plus completeness",
                ],
              },
              {
                q: "What does the use-case-driven approach add that model-driven lacks?",
                marks: 7,
                outline: [

                  "Traceability: every class traces to scenarios users recognize",

                  "Discovery: interactions reveal responsibilities models miss",

                  "Early validation with stakeholders through recognizable flows",

                  "Every class cites the scenarios that need it",

                  "Missing behaviour surfaces as unwalkable flows",

                ],              },
            ],
          },
        ],
      },
    },
    {
      number: 4,
      roman: "IV",
      title: "Translating Design into Implementation",
      summary:
        "Unit IV makes the design executable: the translation of the object model into code - attributes, operations, associations and state machines - the programming style that keeps OO code clean, the documentation that preserves it, the characterization of object-oriented languages, and the comparison of C++, Java and object programming.",
      chapter: {
        number: "04",
        title: "Design to Code",
        intro:
          "Unit IV covers the translation of object-oriented design into implementation, programming style, documentation, the characterization of object-oriented languages, and the comparison of object-oriented languages like C++, Java and object programming.",
        inOneBreath:
          "Translation maps the design mechanically: attributes to member variables, operations to methods, associations to references and collections (direction per 3.5), state machines to enum-plus-dispatch or transition tables, generalizations to extends with super-calls. Style keeps it readable (self-documenting names, small methods, no duplicated knowledge), documentation preserves it (class contracts, design records), and language choice - C++'s value semantics and multiple inheritance, Java's single inheritance with interfaces - shapes every mapping.",
        sections: [
          {
            number: "4.1",
            title: "The translation step - from design to code",
            body: [
              "Translation is the mechanical half of implementation: the design decided the how; the language realizes it - and most mappings are one-to-one. The mapping table: classes to classes (or structs with methods); attributes to member variables (visibility per 1.3's policy); operations to methods (signatures from the model); associations to references or collections (direction and structure from 3.5); generalizations to inheritance (extends/derives, with super-calls for overridden paths); state machines to enum-plus-dispatch or transition tables (3.4); association classes to intermediate objects; packaged subsystems to namespaces/packages and build units (3.6).",
              "A worked translation fixes the table on Order. Design said: class Order with attributes items (collection, composition), status (state machine), customer (two-way reference); operations total() (cached), receivePayment() (guarded). Code: class Order { private List<LineItem> items; private OrderStatus status; private Customer customer; private double cachedTotal; private boolean totalDirty; public double total() { if (totalDirty) { recompute; totalDirty = false; } return cachedTotal; } public void receivePayment(Payment p) { if (status != PLACED) throw ...; status = PAID; authorizeShipment(); } } - eleven design decisions from three units, each visible as a line of code. Nothing new was invented; translation found a home for each decision.",
              "The translation's discipline: mechanical fidelity (the code matches the design; surprises belong in design revisions, not in code), naming consistency (the model's names survive to code - traceability from use case through class to method), and the refinement note (translation may refine details the design left open - loop styles, error classes - but never reverse decisions). The exam's sentence: translation is the one-to-one mapping of design decisions into language constructs - each decision finds exactly one home, and traceability survives to the identifiers.",
              "Exam framing: expect 'how is OO design translated into implementation'. Give the mapping table, work the Order translation with its decision origins, and close with the fidelity sentence. Surprises go back to design - code is translation, not authorship. The Order translation is the worked mapping - eleven design decisions, each a visible line.",
            ],
            keyTerms: [
              { term: "Translation", definition: "The mechanical mapping of design decisions into language constructs." },
              { term: "Mapping fidelity", definition: "Code matches design; surprises go back to design, not into code." },
              { term: "Naming traceability", definition: "Model names survive to identifiers - use case to method." },
              { term: "Refinement", definition: "Details the design left open, filled locally without reversing decisions." },
            ],
            table: {
              caption: "The mapping table.",
              headers: ["Design artifact", "Language construct"],
              rows: [
                ["Class", "class / struct with methods"],
                ["Attribute", "member variable, visibility applied"],
                ["Operation", "method with the designed signature"],
                ["Association (direction, structure)", "reference or collection, per 3.5"],
                ["Generalization", "extends / derives + super-calls"],
                ["State machine", "enum + dispatch or transition table"],
                ["Association class", "intermediate class object"],
                ["Subsystem", "package / namespace / build unit"],
              ],
            },
            bullets: [
              "Translation maps design decisions one-to-one into constructs.",
              "Worked Order: cached total, guarded transition, two-way association in code.",
              "Each line traces to a decision from Units I-III.",
              "Naming consistency preserves use-case-to-method traceability.",
              "Refinement fills open details; reversal of decisions is forbidden.",
              "Sentence: each decision finds exactly one home in the code.",
            ],
            diagram: {
              kind: "pipeline",
              title: "Design decisions to code",
              caption: "Every design artifact passes through the mapping table - nothing invented en route.",
              stages: [
                { label: "Design documents", note: "classes, states, associations, decisions" },
                { label: "Mapping table", note: "artifact -> construct, one-to-one" },
                { label: "Code", note: "each decision a visible line" },
                { label: "Traceability check", note: "identifiers match model names" },
              ],
            },
            callout: {
              type: "exam",
              title: "Surprises go back to design",
              body: "The discipline sentence: 'if coding discovers a problem the design did not anticipate, the fix returns to the design documents first - code is translation, not authorship.' That rule is what keeps the model-code correspondence auditable, and it is the answer to 'what makes translation mechanical?'",
            },
            examQuestions: [
              {
                q: "Explain the translation of OO design into implementation with the mapping table, and work the Order translation showing where each design decision lands in code.",
                marks: 14,
                outline: [
                  "Mappings: classes, attributes, operations, associations, generalizations",
                  "State machine -> enum + dispatch or transition table",
                  "Association classes -> intermediate objects; subsystems -> packages",
                  "Order: List<LineItem>, OrderStatus status, Customer reference",
                  "total(): cachedTotal + dirty flag from 3.1's optimization",
                  "receivePayment(): status guard from the dynamic model",
                  "Fidelity: surprises return to design; identifiers stay traceable",
                ],
              },
              {
                q: "Why should translation remain mechanical rather than creative?",
                marks: 7,
                outline: [

                  "The design's rationale was recorded; code-side invention bypasses it",

                  "Traceability between model and code breaks with invention",

                  "Reviews compare code to design - creativity hides defects there",

                  "Creative coding re-opens decided questions silently",

                  "Traceability from use case to line depends on fidelity",

                ],              },
            ],
          },
          {
            number: "4.2",
            title: "Translating associations and attributes in detail",
            body: [
              "The association mappings deserve their own mechanics because they are where translation errors concentrate. Attributes: primitive-typed attributes map to value variables; object-typed attributes map to references; derived attributes (total) map to methods or cached fields (3.1); attribute multiplicity (a phone list) maps to collections. Associations: 1-to-1 as mutual references; 1-to-many as a collection in the 'one' plus back-reference in the 'many'; many-to-many as collections both sides or an association object; composition as constructed-and-owned parts; aggregation as held references (1.5's lifetime question, coded).",
              "A worked translation set fixes the codes. Customer-Orders (two-way, 1-to-many): class Customer { private List<Order> orders; void addOrder(Order o) { orders.add(o); o.setCustomer(this); } } - the single mutator 3.5 demanded, both ends set together. Order-LineItems (composition): class Order { private List<LineItem> items = new ArrayList<>(); public LineItem addItem(Product p, int qty) { LineItem li = new LineItem(p, qty); items.add(li); return li; } } - parts born inside the whole, no external constructor exposed. Customer-Product preferences (many-to-many with data): class Preference { Customer c; Product p; Date since; } held in a collection - the association class materialized. Three associations, three standard codes, zero ambiguity.",
              "The bidirectional-consistency invariant is the section's watch-point: two-way associations have exactly one mutator per relationship, or the model corrupts (a null back-reference is the classic bug). The exam's sentence: attribute and association translation follows the standard codes - value vs reference, collection per multiplicity, composition owning construction, and one mutator per bidirectional pair. The single mutator lives on the 'one' side - addOrder sets both ends atomically.",
            ],
            keyTerms: [
              { term: "Value vs reference mapping", definition: "Primitive attributes as values; object attributes as references." },
              { term: "Single-mutator invariant", definition: "Bidirectional associations updated by one method setting both ends." },
              { term: "Composition coding", definition: "Parts constructed inside the whole; creation not externally exposed." },
              { term: "Association object coding", definition: "The relationship materialized as a class with its own fields." },
            ],
            table: {
              caption: "Association-to-code standards.",
              headers: ["Association shape", "Standard code"],
              rows: [
                ["1-to-1", "Mutual references; one mutator sets both"],
                ["1-to-many two-way", "Collection in the 'one'; back-ref in the 'many'; addOrder-style mutator"],
                ["Many-to-many with data", "Association class held in a collection"],
                ["Composition", "Parts constructed by the whole; no external creation"],
                ["Aggregation", "Held references; lifetime external"],
              ],
            },
            bullets: [
              "Attributes: value vs reference vs derived vs collection - four mappings.",
              "Associations: the five standard codes cover every multiplicity shape.",
              "Worked: addOrder sets both ends - the single-mutator invariant in code.",
              "Composition: LineItems born in Order.addItem - no orphan construction.",
              "Preference class: the association object materialized.",
              "Watch-point: null back-references are the classic bidirectional bug.",
            ],
            diagram: {
              kind: "fork",
              title: "Which association code applies?",
              caption: "Multiplicity, direction and data decide the standard mapping.",
              start: "Association shape",
              branches: [
                { label: "1-to-many, two-way", outcome: "collection + back-reference; one mutator sets both ends", good: true },
                { label: "Many-to-many with attributes", outcome: "association class in a collection", good: true },
                { label: "Composition (part dies with whole)", outcome: "parts constructed inside the whole; no external creation", good: true },
              ],
            },
            callout: {
              type: "warning",
              title: "The null back-reference",
              body: "The bug examiners describe: Order created with customer set, but the customer's orders list never updated - the model now disagrees with itself from one side. Prevention is structural: the single-mutator rule (addOrder sets both ends) and no public setters on either end of a bidirectional association.",
            },
            examQuestions: [
              {
                q: "Explain the detailed translation of attributes and associations, code the Customer-Orders, Order-LineItems and Preference mappings, and state the single-mutator invariant.",
                marks: 14,
                outline: [
                  "Attributes: value, reference, derived (method/cache), collection",
                  "1-to-many two-way: List in Customer + back-reference in Order",
                  "Single mutator: addOrder sets both ends together",
                  "Composition: LineItems constructed in Order.addItem",
                  "Many-to-many with data: Preference association class",
                  "Aggregation: held references, lifetime external",
                  "Watch: null back-references are the classic bidirectional bug",
                ],
              },
              {
                q: "Why must composition hide the part's constructor?",
                marks: 7,
                outline: [

                  "External creation orphans the part from its whole",

                  "Exclusive ownership requires birth inside the whole",

                  "The lifetime contract is enforced by visibility",

                  "Public constructors invite parts without wholes",

                  "The lifetime contract becomes a runtime guarantee",

                ],              },
            ],
          },
          {
            number: "4.3",
            title: "Translating state machines and generalizations",
            body: [
              "Two design artifacts need non-obvious code mappings. State machines (3.4's two styles, now concretely): the state-variable form maps states to an enum, events to methods, guards to preconditions, and transition actions to the code after the assignment; the table-driven form maps (state, event) pairs to (next-state, action) entries interpreted by one loop. Worked mapping of Order: enum OrderStatus { PLACED, PAID, SHIPPED, DELIVERED, CANCELLED }; receivePayment(Payment p) { if (status != PLACED) throw IllegalState; if (!p.cleared()) throw GuardFail; status = PAID; authorizeShipment(); } - enum, guard, transition, action: the four elements of the state diagram, in order.",
              "Generalizations map to language inheritance with three mechanics: the extends/derives declaration; super-calls where overridden methods extend rather than replace (SavingsAccount.withdraw calls super.withdraw for the base validation, then applies the minimum-balance rule); and constructor chaining (subclass constructors invoke superclass constructors to initialize inherited state). The abstract-class pattern (1.2) completes the set: deferred methods declared abstract; the client loop dispatches polymorphically. A worked pair: SavingsAccount.withdraw(amount) { super.withdraw(amount); if (balance < minBalance) { rollback; throw; } } - inheritance mechanics plus the override-and-extend pattern in three lines.",
              "The translation notes worth quoting: enums make states explicit and switch-exhaustive (the compiler catches missing cases); table-driven machines localize machine edits to data; super-calls preserve base invariants while specializing; and constructor chaining keeps initialization single-sourced. The exam's sentence: state machines translate as enum-guard-transition-action, generalizations as extends-with-super - the dynamic and object models, respectively, made literal. Table-driven machines edit as data - the machine's changes never touch compiled logic.",
            ],
            keyTerms: [
              { term: "State enum", definition: "States as enumeration values - switch-exhaustive, compiler-checked." },
              { term: "Guard as precondition", definition: "Transition conditions coded first in the event handler." },
              { term: "Super-call", definition: "Overridden methods invoking the base implementation to preserve invariants." },
              { term: "Constructor chaining", definition: "Subclass constructors initializing via superclass constructors." },
            ],
            table: {
              caption: "State diagram elements to code.",
              headers: ["Diagram element", "Code form"],
              rows: [
                ["State", "enum value (OrderStatus.PAID)"],
                ["Event", "public method (receivePayment)"],
                ["Guard", "precondition checks (status != PLACED -> throw)"],
                ["Transition", "status assignment"],
                ["Action", "code after transition (authorizeShipment)"],
                ["Invalid event", "exception or no-op per policy"],
              ],
            },
            bullets: [
              "State-variable form: enum + guarded methods + post-transition actions.",
              "Table-driven form: (state, event) -> (next, action) + one interpreter.",
              "Worked Order mapping: all five diagram elements visible in receivePayment.",
              "Generalization: extends + super-calls + constructor chaining.",
              "Override-and-extend: SavingsAccount runs base validation, then adds its rule.",
              "Compiler help: enums make missing states a compile error, not a bug.",
            ],
            diagram: {
              kind: "flow",
              title: "receivePayment: the state machine in code",
              caption: "Guard, transition, action - the diagram's anatomy, executed in order.",
              steps: [
                { label: "Guard", note: "status == PLACED? else reject" },
                { label: "Validate event data", note: "payment cleared?" },
                { label: "Transition", note: "status = PAID" },
                { label: "Action", note: "authorizeShipment() fires" },
              ],
            },
            callout: {
              type: "exam",
              title: "Four elements, four lines",
              body: "The mapping completeness check: 'guard, validate, transition, action - every state diagram element appears in receivePayment in that order.' Write the four-line method body next to the diagram fragment and the translation question is fully answered.",
            },
            examQuestions: [
              {
                q: "Translate Order's state machine to the state-variable form showing all diagram elements, and translate the Account generalization with super-calls and constructor chaining.",
                marks: 14,
                outline: [
                  "Enum OrderStatus: PLACED..CANCELLED",
                  "receivePayment: guard (PLACED), validate (cleared), transition (PAID), action",
                  "Invalid events: exceptions per policy",
                  "Table-driven alternative: (state, event) -> (next, action)",
                  "Generalization: extends with constructor chaining",
                  "SavingsAccount.withdraw: super.withdraw then minimum-balance rule",
                  "Compiler-checked exhaustiveness via enum switches",
                ],
              },
              {
                q: "Why do overridden methods sometimes need super-calls?",
                marks: 7,
                outline: [

                  "The base method carries invariants the subclass must preserve",

                  "Replace-without-super skips base validation",

                  "Extend-then-add is the safe override pattern",

                  "Base validation runs before the specialization adds rules",

                  "Skipping super duplicates and drifts the invariant logic",

                ],              },
            ],
          },
          {
            number: "4.4",
            title: "Programming style in OO code",
            body: [
              "Style is the readability contract, and OO style adds object-specific rules to the general ones. Naming: classes as nouns (Order), methods as verbs (computeTotal), booleans as predicates (isPreferred), consistent vocabulary with the model (traceability from 4.1). Structure: small methods doing one thing; deep encapsulation (no public attributes - 1.3); composition preferred over inheritance where is-a fails; program-to-interfaces (depend on Shape, not Circle - 1.2's payoff, restyled).",
              "The OO-specific style rules, per the syllabus's characterization intent: keep methods polymorphic rather than type-checking (the vanishing ladder of 1.6); let objects protect their invariants (no setBalance - mutators validate); minimize coupling (talk to neighbors, not to strangers - the Law of Demeter: a.order().getCustomer().getAddress() becomes a.shippingAddress()); and consistency over cleverness (one way to do a thing per codebase). A worked style contrast: poor - if (shape.type == CIRCLE) ... else if (shape.type == SQUARE) ...; public attributes; a.getB().getC().doIt(). Good - shape.draw(); private state behind mutators; a.doIt() delegation. Six style rules, six visible differences.",
              "The economics complete the section: OO code is read ten times more than written (style's payoff is the next reader); style violations concentrate defects (public attributes, type-ladders and train-wreck calls are where bugs live); and consistent style is team-scale documentation (the code says what the design decided). The exam's sentence: OO style is the readability contract - model-consistent names, small polymorphic methods, guarded state, low coupling - because the next reader is the customer of every line.",
            ],
            keyTerms: [
              { term: "Law of Demeter", definition: "Talk to immediate collaborators - not a.getB().getC().doIt()." },
              { term: "Program to interfaces", definition: "Depend on abstractions (Shape), not concretions (Circle)." },
              { term: "Self-documenting names", definition: "Model-consistent vocabulary: nouns, verbs, predicates." },
              { term: "Guarded mutators", definition: "No raw setters; every write validates the invariant." },
            ],
            table: {
              caption: "Style contrast - poor vs good.",
              headers: ["Rule", "Poor", "Good"],
              rows: [
                ["Polymorphism over type-checks", "if type == CIRCLE ... else ...", "shape.draw()"],
                ["Encapsulation", "public balance attribute", "private + deposit/withdraw"],
                ["Law of Demeter", "a.getB().getC().doIt()", "a.doIt() delegation"],
                ["Naming", "calc(), proc(), tmp2", "computeTotal(), isPreferred()"],
                ["Composition over inheritance", "Stack extends List", "Stack has-a storage"],
              ],
            },
            bullets: [
              "Naming: nouns for classes, verbs for methods, predicates for booleans - model vocabulary.",
              "Small methods, one purpose each; deep encapsulation by default.",
              "Polymorphic dispatch replaces type-check ladders (1.6 restyled).",
              "Law of Demeter: a.getB().getC() couples to strangers' structure.",
              "Program to interfaces; compose where is-a fails.",
              "Economics: code is read 10x more than written - style pays the next reader.",
            ],
            diagram: {
              kind: "compare",
              title: "Poor style vs OO style",
              caption: "Six rules, six visible differences - the readability contract in code.",
              left: {
                heading: "Poor style",
                items: [
                  "Type-check ladders instead of dispatch",
                  "Public attributes breaking invariants",
                  "Train-wreck calls: a.getB().getC().doIt()",
                  "Unexpressive names: calc, proc, tmp2",
                ],
              },
              right: {
                heading: "OO style",
                items: [
                  "shape.draw() - dispatch replaces ladders",
                  "Private state behind guarded mutators",
                  "Delegation: a.doIt()",
                  "Model-consistent names: computeTotal, isPreferred",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "The Law of Demeter in one line",
              body: "The style rule with the best name-recall: 'talk only to your immediate friends' - a method may call its own methods, its fields' methods, and its parameters' methods, never strangers reached through strangers. Each violated link couples the caller to another class's internal shape.",
            },
            examQuestions: [
              {
                q: "Explain OO programming style rules - naming, structure, polymorphism over type-checks, Demeter, guarded state - with the worked poor-vs-good contrast.",
                marks: 14,
                outline: [
                  "Naming: nouns, verbs, predicates; model-consistent vocabulary",
                  "Small single-purpose methods; encapsulation by default",
                  "Dispatch replaces type-check ladders",
                  "Law of Demeter: no train-wreck calls",
                  "Guarded mutators protect invariants",
                  "Program to interfaces; composition over inheritance",
                  "Economics: the next reader is the customer",
                ],
              },
              {
                q: "Why does the Law of Demeter improve maintainability?",
                marks: 7,
                outline: [

                  "Coupling to strangers freezes their internal structure",

                  "Refactoring B or C breaks every a.getB().getC() caller",

                  "Delegation localizes structural knowledge",

                  "Each intermediate class becomes an unintended dependency",

                  "Delegation defines the intended public surface",

                ],              },
            ],
          },
          {
            number: "4.5",
            title: "Documentation of OO designs",
            body: [
              "OO documentation serves two readers - the compiler needs code; the humans need everything else - and the syllabus's documentation covers the human layers. The layers: code-level (comments and doc-comments on classes and methods: purpose, parameters, invariants, exceptions - the contract of each member); design-level (the decision records of 3.6, the class diagrams and their rationale); system-level (the architecture: subsystems, layers, dependency directions); and process-level (traceability from use cases to classes to tests - 4.1's naming chain made explicit).",
              "A worked documentation set fixes the layers on Order. Code-level: /** Line item within an order. Invariant: quantity > 0, price == product.price at purchase time. */ on LineItem - the contract the reader can trust. Design-level: the decision record for the cached total (3.6's four fields). System-level: the subsystem diagram with dependency directions (3.6's layering). Process-level: the traceability table - use case Place Order -> classes Order, LineItem, DiscountRule -> tests testPlaceOrder, testDiscount. Four layers, one design, four audiences.",
              "The OO-specific documentation disciplines: document the invariant (every class's real contract is its invariants - balance >= 0 belongs in the doc, not just the code); document the exceptions (what can fail and what it means); document the rationale (why this design - the turnover argument); and keep documentation near the code (rotting documents are worse than none - the nearness rule). The exam's sentence: OO documentation is layered for its audiences - contracts at code level, rationale at design level, architecture at system level, traceability at process level - with invariants documented as the primary contract.",
            ],
            keyTerms: [
              { term: "Class contract", definition: "The doc-comment: purpose, parameters, invariants, exceptions." },
              { term: "Invariant documentation", definition: "The rules that always hold - the class's real contract." },
              { term: "Traceability table", definition: "Use case -> classes -> tests - the process-level layer." },
              { term: "Nearness rule", definition: "Documentation kept beside the code, or it rots." },
            ],
            table: {
              caption: "The documentation layers on Order.",
              headers: ["Layer", "Artifact", "Audience"],
              rows: [
                ["Code-level", "Doc-comments: invariants, exceptions", "Maintainers"],
                ["Design-level", "Decision records, class diagrams", "Designers, reviewers"],
                ["System-level", "Subsystem + dependency diagram", "Architects, new team members"],
                ["Process-level", "Use case -> class -> test traceability", "Product, QA, auditors"],
              ],
            },
            bullets: [
              "Layers: code, design, system, process - each with an audience.",
              "Code-level contracts: purpose, parameters, invariants, exceptions.",
              "Invariants documented - balance >= 0 is the contract, not an implementation detail.",
              "Decision records carry the rationale (3.6's four fields).",
              "Traceability: Place Order -> Order/LineItem/DiscountRule -> tests.",
              "Nearness rule: docs beside code or they rot.",
            ],
            diagram: {
              kind: "layers",
              title: "The documentation stack",
              caption: "Four layers, four audiences - contracts at the base, traceability at the top.",
              layers: [
                { label: "Process-level", note: "use case -> class -> test traceability" },
                { label: "System-level", note: "subsystems, layers, dependency directions" },
                { label: "Design-level", note: "decision records, diagrams, rationale" },
                { label: "Code-level", note: "doc-comments: contracts, invariants, exceptions" },
              ],
            },
            callout: {
              type: "exam",
              title: "Document the invariant first",
              body: "The priority sentence: 'of everything a class's documentation can say, the invariant matters most - it is the contract every caller and maintainer depends on.' A class documented without its invariants has documented its mechanics and lost its meaning.",
            },
            examQuestions: [
              {
                q: "Explain the layers of OO design documentation with worked Order artifacts at each layer, and state the OO-specific disciplines (invariants, exceptions, rationale, nearness).",
                marks: 14,
                outline: [
                  "Code-level: doc-comments with purpose, invariants, exceptions",
                  "LineItem contract: quantity > 0; price at purchase time",
                  "Design-level: decision records with alternatives and rationale",
                  "System-level: subsystem diagram with dependency directions",
                  "Process-level: use case -> class -> test traceability table",
                  "Disciplines: document invariants first; keep docs near code",
                  "Audiences: maintainers, designers, architects, QA",
                ],
              },
              {
                q: "Why can rotting documentation be worse than none?",
                marks: 7,
                outline: [

                  "Readers trust stale docs and act on wrong contracts",

                  "Wrong invariants propagate as confident bugs",

                  "Nearness and doc-tests keep documentation honest",

                  "Confident use of outdated invariants ships defects",

                  "Generated docs from code cannot rot structurally",

                ],              },
            ],
          },
          {
            number: "4.6",
            title: "Characterizing object-oriented languages",
            body: [
              "Languages differ in the OO machinery they provide, and the syllabus's characterization sorts them by their answers to four questions. Typing: static (types checked at compile time - C++, Java) or dynamic (checked at runtime - Smalltalk, Python). Inheritance: single (Java's classes), multiple (C++'s classes) or none-but-interfaces (Go-ish; Java's interface tier). Polymorphism support: universal dynamic dispatch (all class-based OO), overloading, generics/templates. Object model: class-based (C++, Java, Smalltalk - classes make objects) versus prototype-based (JavaScript - objects clone objects).",
              "A worked characterization matrix fixes the vocabulary. C++: static typing, multiple class inheritance, templates, value+reference semantics (objects on the stack or heap - the programmer chooses). Java: static typing, single class inheritance + multiple interfaces, generics, all references (objects live on the heap). Smalltalk: dynamic typing, single inheritance, everything-is-an-object purity (even classes are objects). Python: dynamic typing, multiple inheritance, duck typing (if it walks like a duck - method resolution needs no declaration). JavaScript: prototype-based, dynamic - objects cloning objects, no classes until ES6 syntax over the same mechanism.",
              "The characterization's consequence is the translation advice of 4.1: each answer reshapes a mapping (multiple inheritance available? the diamond rules apply; static typing? the compiler enforces the model's types; prototype-based? generalization is delegation). The exam's sentence: characterize a language by typing, inheritance, polymorphism support and object model - those four answers predict every translation decision. The matrix's practical use is predictive - characterization before translation.",
            ],
            keyTerms: [
              { term: "Static typing", definition: "Types checked at compile time - C++, Java." },
              { term: "Dynamic typing", definition: "Types checked at runtime - Smalltalk, Python." },
              { term: "Class-based vs prototype-based", definition: "Classes instantiate objects vs objects clone objects (JavaScript)." },
              { term: "Duck typing", definition: "Behaviour-based typing - method presence over declared type." },
            ],
            table: {
              caption: "The characterization matrix.",
              headers: ["Language", "Typing", "Inheritance", "Object model"],
              rows: [
                ["C++", "Static", "Multiple (classes) + templates", "Class-based; value or reference"],
                ["Java", "Static", "Single + multiple interfaces", "Class-based; references only"],
                ["Smalltalk", "Dynamic", "Single", "Class-based; everything an object"],
                ["Python", "Dynamic", "Multiple", "Class-based; duck typing"],
                ["JavaScript", "Dynamic", "Prototype chain", "Prototype-based"],
              ],
            },
            bullets: [
              "Four questions: typing, inheritance, polymorphism support, object model.",
              "C++: multiple inheritance + templates + value/reference choice.",
              "Java: single class inheritance; interfaces carry multiple conformance.",
              "Smalltalk/Python: dynamic typing - dispatch is the only type check.",
              "JavaScript: prototype-based - generalization as delegation.",
              "Each answer reshapes the 4.1 translation mappings.",
            ],
            diagram: {
              kind: "matrix",
              title: "Typing x inheritance",
              caption: "The four OO quadrants - every mainstream language sits in one.",
              axes: { x: "Inheritance (single -> multiple)", y: "Typing (dynamic -> static)" },
              quadrants: [
                { label: "C++", note: "static + multiple - power and diamond cost" },
                { label: "Java", note: "static + single (+interfaces) - safety by structure" },
                { label: "Python", note: "dynamic + multiple - flexibility, runtime errors" },
                { label: "Smalltalk / JS", note: "dynamic + single/prototype - pure message passing" },
              ],
            },
            callout: {
              type: "tip",
              title: "Four answers predict the mapping",
              body: "The characterization's practical use: 'tell me a language's typing, inheritance model, polymorphism support and object model, and I can predict how every design artifact of Unit IV translates.' It turns the matrix from trivia into a tool - the exam's preferred framing.",
            },
            examQuestions: [
              {
                q: "Characterize object-oriented languages by typing, inheritance, polymorphism support and object model, placing C++, Java, Smalltalk, Python and JavaScript on the characterization matrix.",
                marks: 14,
                outline: [
                  "Static vs dynamic typing with consequences",
                  "Single vs multiple inheritance; interfaces as the Java answer",
                  "Class-based vs prototype-based object models",
                  "C++: static, multiple, templates, value/reference semantics",
                  "Java: static, single + interfaces, generics, references",
                  "Smalltalk: dynamic, single, pure objects; Python: duck typing",
                  "JavaScript: prototype chain - delegation as generalization",
                ],
              },
              {
                q: "How does static typing change the translation of Unit IV's mappings?",
                marks: 7,
                outline: [

                  "The model's types become compile-time declarations",

                  "Substitutability enforced by the compiler, not by discipline",

                  "Dynamic languages enforce the same model by runtime dispatch",

                  "Generics translate collection constraints into signatures",

                  "Cast-heavy code signals model-level type doubts",

                ],              },
            ],
          },
          {
            number: "4.7",
            title: "C++, Java and object programming compared",
            body: [
              "The syllabus's comparison pair, in the terms this unit built. C++: OO as an extension of systems programming - value semantics (objects on the stack, copied by default), manual memory (new/delete, RAII as the resource idiom), multiple inheritance with its diamond machinery, templates for compile-time polymorphism, and operator overloading; the cost is the management burden - every resource, every lifetime is the programmer's contract. Java: OO as the default discipline - reference semantics (objects live on the heap, garbage-collected), single class inheritance with interfaces for multiple conformance, no operator overloading, generics for type-safe collections; the cost is less systems control (no value objects, no manual memory) traded for safety and uniformity.",
              "A worked contrast on one design fixes the differences. The same Order class: C++ - Order owned by value in a vector, LineItems as members (composition expressed by containment), copy semantics needing a decision (deep copy? disable copying?), destructor releasing resources (RAII: no explicit cleanup); Java - Order as a heap object referenced everywhere, LineItems as a list of references, no copy decision needed (references share), no destructor (GC reclaims), memory-safety default with GC pauses as the trade. Same design, two runtimes - and the translation differences follow the characterization matrix exactly (4.6): value/reference semantics and single-vs-multiple inheritance are the two levers that moved.",
              "Object programming completes the trio as the practice claim: the language matters less than the discipline - encapsulation, polymorphic dispatch, small responsibilities and guarded state produce OO benefits in any of the three; skipping them produces 'C with classes' regardless of syntax. The exam's sentence: C++ trades safety for control (value semantics, manual memory, multiple inheritance); Java trades control for safety (references, GC, single inheritance) - and object programming is the discipline that either must keep.",
            ],
            keyTerms: [
              { term: "Value semantics", definition: "Objects copied by assignment; programmer-controlled lifetime (C++)." },
              { term: "Reference semantics", definition: "Objects shared by reference; GC-managed lifetime (Java)." },
              { term: "RAII", definition: "Resource Acquisition Is Initialization - destructors release resources (C++ idiom)." },
              { term: "Object programming discipline", definition: "Encapsulation, dispatch, small responsibilities - language-independent." },
            ],
            table: {
              caption: "C++ vs Java on the same Order design.",
              headers: ["Aspect", "C++", "Java"],
              rows: [
                ["Object storage", "Stack or heap; copied by value", "Heap only; shared by reference"],
                ["Composition (LineItems)", "Member containment; copy decisions needed", "List of references; no copy decision"],
                ["Memory", "Manual new/delete; RAII idiom", "Garbage collected"],
                ["Inheritance", "Multiple classes + virtual bases", "Single class + interfaces"],
                ["Polymorphism extras", "Templates, operator overloading", "Generics; no operator overloading"],
                ["Trade", "Control at management cost", "Safety at control cost"],
              ],
            },
            bullets: [
              "C++: value semantics, manual memory, multiple inheritance, templates.",
              "Java: reference semantics, GC, single inheritance + interfaces, generics.",
              "Same Order design: containment vs references; destructors vs GC.",
              "The levers that moved: value/reference semantics; single/multiple inheritance.",
              "Object programming: the discipline is language-independent - or it is 'C with classes'.",
              "Sentence: control for safety - the trade both languages price differently.",
            ],
            diagram: {
              kind: "compare",
              title: "C++ vs Java",
              caption: "The same OO design, two runtimes - control versus safety.",
              left: {
                heading: "C++",
                items: [
                  "Objects by value or reference - programmer chooses",
                  "Manual memory with RAII destructors",
                  "Multiple inheritance; virtual bases for diamonds",
                  "Templates and operator overloading",
                ],
              },
              right: {
                heading: "Java",
                items: [
                  "Objects on the heap, shared by reference",
                  "Garbage collection - no destructors",
                  "Single class inheritance + interfaces",
                  "Generics; no operator overloading",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "'C with classes' is the failure mode",
              body: "The comparison's cautionary close: 'a language does not make code object-oriented - public structs with attached functions are C with classes in any syntax.' The discipline (encapsulation, dispatch, guarded invariants) is the object programming the syllabus names; quote it as the comparison's verdict.",
            },
            examQuestions: [
              {
                q: "Compare C++ and Java as OO languages - semantics, memory, inheritance, polymorphism - through the same Order design, and state the object-programming discipline that transcends both.",
                marks: 14,
                outline: [
                  "C++: value/reference choice, manual memory, RAII, multiple inheritance",
                  "Java: heap references, GC, single inheritance + interfaces",
                  "Order in C++: containment, copy decisions, destructor",
                  "Order in Java: references, no copy decision, GC reclamation",
                  "Moved levers: value/reference semantics; single/multiple inheritance",
                  "Templates vs generics; operator overloading vs none",
                  "Verdict: discipline, not syntax, makes code OO",
                ],
              },
              {
                q: "What does RAII give C++ that Java's GC does not?",
                marks: 7,
                outline: [

                  "Deterministic resource release at scope exit",

                  "Non-memory resources (files, locks) freed predictably",

                  "GC reclaims memory eventually; RAII releases resources immediately",

                  "Locks and files release in exception paths too",

                  "Finalizers are no substitute for scoped destruction",

                ],              },
            ],
          },
        ],
      },
    },
    {
      number: 5,
      roman: "V",
      title: "UML and Object-Oriented Databases",
      summary:
        "Unit V standardizes the notation and completes the storage story: the UML diagram families - use case, class, sequence, collaboration, state chart, activity, component and deployment - then object-oriented databases: relational versus object-oriented, the OODB architecture, and the query language OQL.",
      chapter: {
        number: "05",
        title: "UML and Object Persistence",
        intro:
          "Unit V covers the Unified Modeling Language - class diagram, sequence diagram, use case diagram, collaboration diagram, state chart diagram, activity diagram, component diagram, deployment diagram - and object-oriented databases: relational versus object-oriented databases, the architecture of object-oriented databases, and the query language for object-oriented databases.",
        inOneBreath:
          "UML is one notation with three diagram families: structural (class, component, deployment - what exists), behavioural (use case, sequence, collaboration, state chart, activity - what happens), and the mapping between them. Object databases close the impedance mismatch: objects persist with identity, classes and inheritance intact - OODB architecture stores objects natively and OQL queries them with object-navigation syntax.",
        sections: [
          {
            number: "5.1",
            title: "UML - the notation and its diagram families",
            body: [
              "UML (Unified Modeling Language) merged the era's competing methods - Booch, OMT (2.3), Jacobson's use cases - into one standard notation (OMG-standardized from 1997). Its organizing idea: one model, multiple diagrams, each diagram a view of the same underlying model - change a class name once, every diagram that shows it updates (in real UML tools). The families: structural diagrams (class, object, component, deployment - what exists statically), behavioural diagrams (use case, sequence, collaboration, state chart, activity - what happens dynamically), and (in later UML) the profile mechanisms for domain extensions.",
              "The syllabus's named eight, mapped to their jobs: use case diagram (actors and the functions they invoke - requirements view); class diagram (classes, associations, generalizations - the static structure, OMT's object model standardized); sequence diagram (messages between objects over time, lifelines ordered top-to-bottom - one scenario's choreography); collaboration diagram (the same messages as a graph - who talks to whom, numbered by order); state chart (one class's lifecycle - states, events, guards); activity diagram (workflow - activities, decisions, forks); component diagram (the code's modular units and interfaces); deployment diagram (the hardware - nodes and the artifacts installed on them).",
              "A worked mapping fixes the families on the order system: use case (Customer - Place Order; Clerk - Ship), class (Customer, Order, LineItem, Product), sequence (Place Order's messages: createOrder, addItem, computeTotal), collaboration (the same messages numbered 1..4 as a graph), state chart (Order's lifecycle), activity (the order workflow with a fork: bill and ship in parallel), component (Ordering, Pricing components), deployment (app server and DB nodes). Eight diagrams, one model - the sentence: UML's power is the single model behind many views, each diagram answering one stakeholder's question.",
              "Exam framing: expect 'explain UML and its diagrams'. Give the merger history, the two families with the eight named diagrams and their jobs, and the worked mapping - closing with the one-model-many-views sentence. Sequence versus collaboration is one question - the same messages, ordered by time or by structure. The eight-diagram mapping is the worked set - one model, one order system, eight views.",
            ],
            keyTerms: [
              { term: "UML", definition: "The unified standard notation merging Booch, OMT and Jacobson's methods." },
              { term: "Structural diagrams", definition: "Class, object, component, deployment - the static views." },
              { term: "Behavioural diagrams", definition: "Use case, sequence, collaboration, state chart, activity - the dynamic views." },
              { term: "One model, many views", definition: "Diagrams are projections of one underlying model." },
            ],
            table: {
              caption: "The eight syllabus diagrams and their jobs.",
              headers: ["Diagram", "Family", "Answers"],
              rows: [
                ["Use case", "Behavioural", "What do actors do with the system?"],
                ["Class", "Structural", "What classes and relationships exist?"],
                ["Sequence", "Behavioural", "How do messages flow over time?"],
                ["Collaboration", "Behavioural", "Who talks to whom, in what order?"],
                ["State chart", "Behavioural", "How does one object's lifecycle run?"],
                ["Activity", "Behavioural", "What is the workflow, with parallelism?"],
                ["Component", "Structural", "What are the code units and interfaces?"],
                ["Deployment", "Structural", "What runs on which hardware?"],
              ],
            },
            bullets: [
              "UML merged Booch + OMT + Jacobson - OMG standard from 1997.",
              "Families: structural (static) and behavioural (dynamic).",
              "Sequence = time-ordered messages; collaboration = numbered message graph.",
              "State chart = one object's lifecycle; activity = workflow with forks.",
              "Component = code units; deployment = hardware nodes + artifacts.",
              "Worked mapping: all eight drawn from the one order-system model.",
            ],
            diagram: {
              kind: "layers",
              title: "The UML diagram stack",
              caption: "Structural below, behavioural above - all projections of one model.",
              layers: [
                { label: "Behavioural views", note: "use case, sequence, collaboration, state chart, activity" },
                { label: "Structural views", note: "class, component, deployment" },
                { label: "The underlying model", note: "one shared semantic model" },
                { label: "The system", note: "what every view projects" },
              ],
            },
            callout: {
              type: "exam",
              title: "Sequence vs collaboration is one question",
              body: "The most-confused pair, resolved in one sentence: 'sequence and collaboration show the same messages - sequence orders them by time, collaboration by structure.' If an exam asks for both, draw one and renumber; the information is identical, the layout differs.",
            },
            examQuestions: [
              {
                q: "Explain UML's origin and diagram families, list the eight named diagrams with the question each answers, and map them onto the order-system model.",
                marks: 14,
                outline: [
                  "UML: merger of Booch, OMT, Jacobson; OMG standard",
                  "Structural: class, object, component, deployment",
                  "Behavioural: use case, sequence, collaboration, state chart, activity",
                  "Sequence: time-ordered; collaboration: numbered graph - same messages",
                  "State chart: one lifecycle; activity: workflow with forks",
                  "Component: code units; deployment: nodes + artifacts",
                  "One model, many views - the organizing idea",
                ],
              },
              {
                q: "Which UML diagrams would you show to which stakeholder?",
                marks: 7,
                outline: [

                  "Users/analysts: use case and activity diagrams",

                  "Designers: class, sequence, state chart",

                  "Deployers: component and deployment diagrams",

                  "Auditors read traceability from use case to test",

                  "Operations teams read deployment for runbooks",

                ],              },
            ],
          },
          {
            number: "5.2",
            title: "Use case and class diagrams",
            body: [
              "The use case diagram is the requirements view: actors (stick figures - external entities with goals), use cases (ovals - the functions actors invoke), system boundary (the rectangle - what is being built), and the relationships: association (actor invokes case), include (one case always uses another - 'Pay' includes 'Authenticate'), extend (optional behaviour - 'Apply Discount' extends 'Place Order' when eligible), and generalization between actors or cases.",
              "The class diagram is the structure view: classes as three-compartment boxes (name, attributes with visibility, operations with signatures), associations as lines with multiplicities, generalizations as triangles, aggregations/compositions as diamonds - 1.7's association machinery in standardized notation. A worked pair for the order system: use cases - Customer invokes Place Order, Track Order; Clerk invokes Ship Order; Place Order includes Authenticate; Apply Discount extends Place Order. Class diagram - Customer 1-1..* Order; Order composes LineItem; LineItem *-1 Product; DiscountRule hierarchy with the triangle. The two diagrams' relationship is traceability: every class should trace to a use case; every use case realizes through classes - 3.7's consolidation, made visible.",
              "The contrast is the exam's framing: use case = behavioural-requirements (what actors get), class = structural-solution (what objects exist); the first is written with users, the second with designers; the first drives the second. The sentence: use case diagrams promise what the system does for actors; class diagrams declare the objects that keep the promise. Traceability runs both directions - every class cites a use case, every case realizes through classes.",
            ],
            keyTerms: [
              { term: "Actor", definition: "An external entity with goals - user, system, clock." },
              { term: "include", definition: "Mandatory sub-behaviour: Pay includes Authenticate." },
              { term: "extend", definition: "Optional/conditional behaviour: Apply Discount extends Place Order." },
              { term: "Three-compartment box", definition: "Name | attributes | operations - the class notation." },
            ],
            table: {
              caption: "The order system's two diagrams.",
              headers: ["Diagram", "Elements drawn"],
              rows: [
                ["Use case", "Customer: Place, Track; Clerk: Ship; include Authenticate; extend Apply Discount"],
                ["Class", "Customer 1-1..* Order; Order <>- LineItem; LineItem *-1 Product; DiscountRule triangle"],
              ],
            },
            bullets: [
              "Use case: actors, ovals, boundary, include/extend/generalization.",
              "include = always; extend = conditional - the two arrows students swap.",
              "Class: compartments, multiplicities, triangles, diamonds.",
              "Worked pair: four use cases; four classes; traceable both directions.",
              "Use case drives with users; class declares with designers.",
              "Sentence: the promise and the objects that keep it.",
            ],
            diagram: {
              kind: "compare",
              title: "Use case vs class diagram",
              caption: "Requirements view against structure view - traceability joins them.",
              left: {
                heading: "Use case diagram",
                items: [
                  "Actors with goals; oval use cases",
                  "include: mandatory sub-flow (Authenticate)",
                  "extend: conditional (Apply Discount)",
                  "Written with users - the promise",
                ],
              },
              right: {
                heading: "Class diagram",
                items: [
                  "Three-compartment classes",
                  "Multiplicities, triangles, diamonds",
                  "Customer-Order-LineItem-Product",
                  "Written with designers - the structure",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "include and extend point opposite ways",
              body: "The notation slip examiners set: include arrows point from base to included case (Place Order --> Authenticate); extend arrows point from the extension to the base (Apply Discount --> Place Order). Read the arrow as 'uses' versus 'may add to', and the directions stop swapping.",
            },
            examQuestions: [
              {
                q: "Explain use case and class diagrams with their notations, draw both for the order system including include and extend relationships, and state the traceability between them.",
                marks: 14,
                outline: [
                  "Use case: actors, use cases, system boundary",
                  "include: Place Order includes Authenticate - mandatory",
                  "extend: Apply Discount extends Place Order - conditional",
                  "Class: three compartments; multiplicities; triangles; diamonds",
                  "Customer 1-1..* Order; Order composes LineItems",
                  "Traceability: classes trace to use cases and back",
                  "Promise (actors' view) vs structure (designers' view)",
                ],
              },
              {
                q: "When does a use case deserve an extend relationship?",
                marks: 7,
                outline: [

                  "Behaviour that occurs only under a condition",

                  "Keeps the base case simple and the optional path separate",

                  "Distinct from include, which always runs",

                  "The extension point is declared in the base case",

                  "Optional paths stay out of the main flow",

                ],              },
            ],
          },
          {
            number: "5.3",
            title: "Sequence and collaboration diagrams",
            body: [
              "The interaction diagrams show object-to-object messages, and the pair differs only in layout. Sequence diagram: lifelines (one per object, vertical), time flowing downward, messages as horizontal arrows (solid for calls, dashed/dotted for returns), activation bars showing execution, and the fragment operators (alt for alternatives, loop, opt). Collaboration diagram: the same objects as nodes with links, messages as numbered arrows beside the links - the numbering (1, 1.1, 2) encodes the order and nesting.",
              "A worked sequence fixes the notation on Place Order. Lifelines: :Customer, :OrderForm, :Order, :Product, :DiscountRule. Messages: 1: createOrder(items) from Customer to OrderForm; 2: addItem(p, qty) to Order (repeated per item - a loop fragment); 3: getPrice() to Product (returns price - dotted back); 4: applyDiscount(order) to DiscountRule (returns discount); 5: computeTotal() self-call on Order; 6: confirm() return to Customer. The alt fragment: [customer preferred?] choose the BulkRule or SeasonalRule branch - 1.2's polymorphism drawn as alternatives.",
              "The collaboration rendering completes the pair: nodes :Customer, :OrderForm, :Order, :Product, :DiscountRule linked as the class diagram's associations allow; messages numbered 1 createOrder, 2 addItem (2.1, 2.2 for the loop), 3 getPrice, 4 applyDiscount, 5 computeTotal - same information, structural layout, and the reading difference: sequence answers 'in what order over time', collaboration answers 'over which links'. The exam's sentence: the interaction pair carries identical information; sequence renders it temporally, collaboration structurally - choose by the question you are answering.",
            ],
            keyTerms: [
              { term: "Lifeline", definition: "An object's vertical timeline in a sequence diagram." },
              { term: "Activation bar", definition: "The execution span on a lifeline while a method runs." },
              { term: "Fragment (alt, loop, opt)", definition: "Frame operators for alternatives, repetition, optionality." },
              { term: "Message numbering", definition: "Collaboration's order encoding: 1, 1.1, 2 - nesting included." },
            ],
            table: {
              caption: "Place Order's messages, both renderings.",
              headers: ["#", "Message", "From -> To", "Collab numbering"],
              rows: [
                ["1", "createOrder(items)", "Customer -> OrderForm", "1"],
                ["2", "addItem(p, qty) [loop per item]", "OrderForm -> Order", "2, 2.1, 2.2"],
                ["3", "getPrice() -> price", "Order -> Product", "3"],
                ["4", "applyDiscount(order) [alt: rule]", "Order -> DiscountRule", "4"],
                ["5", "computeTotal() self-call", "Order -> Order", "5"],
                ["6", "confirm -> return", "OrderForm -> Customer", "6"],
              ],
            },
            bullets: [
              "Sequence: lifelines, time downward, solid calls, dotted returns.",
              "Fragments: alt (polymorphic branches), loop (per-item), opt.",
              "Collaboration: links + numbered messages - structure carries order.",
              "Worked: six messages, one loop fragment, one alt for discount rules.",
              "Same information, two layouts - time vs structure.",
              "Choose by question: 'when' -> sequence; 'over which links' -> collaboration.",
            ],
            diagram: {
              kind: "flow",
              title: "Place Order as a sequence",
              caption: "Lifelines top to bottom, messages left to right - one scenario's choreography.",
              steps: [
                { label: "createOrder", note: "Customer -> OrderForm" },
                { label: "addItem (loop)", note: "per item: Order <- OrderForm" },
                { label: "getPrice", note: "Order -> Product; price returns" },
                { label: "applyDiscount (alt)", note: "Bulk or Seasonal rule chosen" },
                { label: "computeTotal + confirm", note: "Order self-call; return to Customer" },
              ],
            },
            callout: {
              type: "tip",
              title: "alt is polymorphism drawn",
              body: "The connection that ties Unit I to Unit V: 'the alt fragment's rule branches are 1.6's dynamic dispatch on paper - one message, several receivers, the runtime condition choosing.' Sequence diagrams do not replace polymorphism; they document its choreography.",
            },
            examQuestions: [
              {
                q: "Explain sequence and collaboration diagram notations, work Place Order's six messages with a loop and an alt fragment, and state the difference in layout and use.",
                marks: 14,
                outline: [
                  "Sequence: lifelines, activations, solid/dotted messages, fragments",
                  "alt: preferred-customer branch chooses Bulk or Seasonal rule",
                  "loop: addItem repeated per item",
                  "Collaboration: nodes, links, numbered messages (1, 2.1, 2.2)",
                  "Same six messages in both renderings",
                  "Sequence = temporal; collaboration = structural",
                  "Choice follows the question being answered",
                ],
              },
              {
                q: "What information does the message numbering in a collaboration diagram encode?",
                marks: 7,
                outline: [

                  "Call order at one level (1, 2, 3)",

                  "Nesting via decimals (2.1 inside 2)",

                  "Iteration and conditions as labels on the number",

                  "Numbering doubles as the call-tree reading",

                  "Depth equals the nesting of invocations",

                ],              },
            ],
          },
          {
            number: "5.4",
            title: "State chart and activity diagrams",
            body: [
              "Two behavioural diagrams remain, and their division of labour is precise. State chart (UML's state diagram, 2.6 standardized): one object's lifecycle - states, events, guards, actions, plus UML's additions (composite states nesting others, history states remembering where to return, entry/exit actions). Activity diagram: the workflow - activities (rounded boxes), transitions, decision nodes (diamonds with guards), forks and joins (bars for parallel branches), swimlanes (who does what), and start/end nodes.",
              "The division: state chart = one object reacting to events over its lifetime (Order's placed->paid->shipped); activity = many actors' coordinated workflow (the order process: Validate [Clerk lane] forks to Bill [Finance lane] and Pick [Warehouse lane], joining at Ship). A worked pair on the same domain: Order's state chart (states with entry actions - enter PAID: authorizeShipment) versus the order-filling activity diagram (swimlanes Customer/Clerk/Warehouse; decision: stock available? fork into parallel billing and picking; join before Ship). Same domain, different lenses: the state chart asks 'what mode is Order in?', the activity asks 'who does what, in what order, in parallel?'",
              "The choice rule completes the section: model with a state chart when one object's event-driven lifecycle is the question; model with an activity diagram when the workflow across roles is the question; they complement (an activity's workflow steps often trigger the state chart's events). The exam's sentence: state chart = one object's reaction machine; activity = the business process with parallelism - pick by the subject of the question.",
            ],
            keyTerms: [
              { term: "Composite state", definition: "A state containing sub-states - nesting lifecycles." },
              { term: "Fork / join bar", definition: "Parallel branches splitting and rejoining in activity diagrams." },
              { term: "Swimlane", definition: "The partition assigning activities to actors." },
              { term: "Decision node", definition: "The guarded diamond routing the workflow." },
            ],
            table: {
              caption: "State chart vs activity diagram.",
              headers: ["Aspect", "State chart", "Activity diagram"],
              rows: [
                ["Subject", "One object's lifecycle", "A workflow across roles"],
                ["Nodes", "States, events, guards, actions", "Activities, decisions, forks"],
                ["Parallelism", "Composite states", "Fork/join bars + swimlanes"],
                ["Order example", "placed -> paid -> shipped -> delivered", "Validate -> fork(Bill || Pick) -> Ship"],
                ["Question", "What mode is the object in?", "Who does what, when, in parallel?"],
              ],
            },
            bullets: [
              "State chart: one object, events, guards, composite/history states.",
              "Activity: activities, decisions, forks/joins, swimlanes.",
              "Worked pair: Order's lifecycle vs the order-filling workflow.",
              "Fork: billing and picking run in parallel before the join at Ship.",
              "Complement: workflow steps trigger the state chart's events.",
              "Choice rule: object's modes -> state chart; process -> activity.",
            ],
            diagram: {
              kind: "cycle",
              title: "Order's lifecycle as a state chart",
              caption: "Entry actions and guarded transitions - one object's reaction machine.",
              steps: [
                { label: "placed", note: "entry: create line items" },
                { label: "paid", note: "entry: authorizeShipment; guard: balance cleared" },
                { label: "shipped", note: "entry: notify customer" },
                { label: "delivered", note: "final - order closed" },
                { label: "cancelled", note: "exit path releasing stock" },
              ],
            },
            callout: {
              type: "exam",
              title: "Forks need joins",
              body: "The activity-diagram rule examiners check: 'every fork has a matching join - parallel branches recombine before the workflow continues.' Drawing a fork without a join leaves the flow semantically open; the bill-and-pick branches must both complete before Ship. One rule, instantly checkable.",
            },
            examQuestions: [
              {
                q: "Explain state chart and activity diagrams with their notations, draw both for the order domain (lifecycle and swimlaned workflow with fork/join), and state the choice rule.",
                marks: 14,
                outline: [
                  "State chart: states, events, guards, entry/exit actions",
                  "Composite and history states as UML additions",
                  "Activity: activities, decision diamonds, fork/join bars",
                  "Swimlanes: Clerk validates; Finance bills; Warehouse picks",
                  "Fork: Bill || Pick rejoin at Ship - forks need joins",
                  "Worked: Order lifecycle vs order-filling workflow",
                  "Rule: object modes -> state chart; process -> activity",
                ],
              },
              {
                q: "What does a history state contribute to a composite state?",
                marks: 7,
                outline: [

                  "Remembers the last active sub-state on re-entry",

                  "Interrupted lifecycles resume where they left",

                  "Useful for suspend/resume semantics",

                  "Re-entry skips the completed sub-states",

                  "Deep history remembers across nested levels",

                ],              },
            ],
          },
          {
            number: "5.5",
            title: "Component and deployment diagrams",
            body: [
              "The structural pair moves from design to delivery. Component diagram: the code's modular units - components (the compiled/deployable pieces: Ordering.jar, PricingService) with their provided interfaces (lollipops - what they offer) and required interfaces (sockets - what they consume), and dependencies between components. The rule that makes components real: they interact only through interfaces - the subsystem hiding of 3.6, standardized.",
              "Deployment diagram: the hardware topology - nodes (devices: app server, DB server, client PCs), communication paths between them (protocols: HTTP, TCP), and the artifacts installed on each node (the components from the component diagram, deployed). A worked pair for the order system: components - OrderUI, OrderingComponent (provides IOrdering; requires IPricing, IPersistence), PricingService (provides IPricing), PersistenceService (provides IPersistence); deployment - Client node (browser) -HTTP-> AppServer node (OrderUI + OrderingComponent) -TCP-> DBServer node (PersistenceService + the OODB of 5.7). Two diagrams, one bridge: the component diagram is the software's modular truth; the deployment diagram is where that truth physically lives.",
              "The mapping discipline between them completes the section: every artifact on a node traces to a component; every component's required interface resolves to some provider's provided interface (no dangling sockets - the acyclic/interface test of 3.6, re-run at deployment scale). The exam's sentence: component diagrams declare the software's units and interfaces; deployment diagrams place those units on hardware - the bridge from design to installed system.",
            ],
            keyTerms: [
              { term: "Component", definition: "A deployable code unit interacting only through interfaces." },
              { term: "Provided / required interface", definition: "Lollipop (offers) and socket (consumes) - the component contract." },
              { term: "Node", definition: "A hardware resource in the deployment diagram." },
              { term: "Artifact", definition: "A component installed on a node." },
            ],
            table: {
              caption: "Components to deployment.",
              headers: ["Element", "Component diagram", "Deployment diagram"],
              rows: [
                ["Units", "OrderUI, Ordering, Pricing, Persistence", "as artifacts on nodes"],
                ["Contracts", "IOrdering provided; IPricing required", "resolved across nodes"],
                ["Topology", "-", "Client -HTTP-> AppServer -TCP-> DBServer"],
                ["Rule", "interface-only interaction", "every artifact traces to a component"],
              ],
            },
            bullets: [
              "Component: units + provided (lollipop) + required (socket) interfaces.",
              "Interface-only interaction: 3.6's hiding at component scale.",
              "Deployment: nodes, communication paths, artifacts installed.",
              "Worked: three components; three nodes; HTTP and TCP paths.",
              "No dangling sockets: every required interface resolves to a provider.",
              "Sentence: component = software truth; deployment = where it lives.",
            ],
            diagram: {
              kind: "layers",
              title: "The deployed order system",
              caption: "Three nodes, components installed, contracts crossing the network.",
              layers: [
                { label: "DBServer node", note: "PersistenceService + the object database" },
                { label: "AppServer node", note: "OrderUI + OrderingComponent (+ PricingService)" },
                { label: "Client node", note: "browser over HTTP" },
                { label: "Communication paths", note: "HTTP client-server; TCP app-DB" },
              ],
            },
            callout: {
              type: "tip",
              title: "No dangling sockets",
              body: "The deployment-review test: 'walk every required interface and name its provider - any socket without a lollipop is a runtime failure scheduled for the worst day.' The interface resolution check is 3.6's acyclic test rerun across the network; quote it as the component/deployment bridge.",
            },
            examQuestions: [
              {
                q: "Explain component and deployment diagrams - interfaces, artifacts, nodes - and work the order system's components placed across client, app-server and DB-server nodes.",
                marks: 14,
                outline: [
                  "Components with provided (lollipop) and required (socket) interfaces",
                  "Ordering provides IOrdering; requires IPricing, IPersistence",
                  "Interface-only interaction between components",
                  "Deployment: Client -HTTP-> AppServer -TCP-> DBServer nodes",
                  "Artifacts installed per node trace to components",
                  "Resolution check: every socket meets a lollipop",
                  "Bridge: software units to installed topology",
                ],
              },
              {
                q: "Why must components interact only through interfaces?",
                marks: 7,
                outline: [

                  "Implementation hiding survives packaging - internals replaceable",

                  "Contracts enable independent builds and deployment",

                  "Direct coupling would re-create monolith dependencies",

                  "Interface versioning manages component evolution",

                  "Substitutable implementations follow from contracts",

                ],              },
            ],
          },
          {
            number: "5.6",
            title: "Relational versus object-oriented databases",
            body: [
              "The persistence question: where do objects live? The relational answer: tables of rows - the object flattened (attributes to columns, associations to foreign keys, identity to primary keys, inheritance to joined or single tables). The mismatch - the object-relational impedance mismatch - is the friction this comparison prices: objects navigate by reference (order.customer), rows join by key (SELECT ... JOIN); objects have identity independent of values, rows are values; objects have inheritance and collections, tables have neither natively; and every fetch is a query while every object access is a pointer dereference.",
              "A worked mismatch trace prices it. Loading Order 501 relationally: SELECT order 501 (row), JOIN customer (row), SELECT line items (rows), SELECT products (rows) - four queries, four assemblies, identity reconstructed from keys; navigation order.getItem(i).getProduct() hides three joins behind the call. Object-oriented answer: the object persists as itself - identity preserved, references real, inheritance stored, collections fetched lazily - and navigation order.getItem(i).getProduct() dereferences directly. The cost traded: RDBMS offers mature tooling, SQL's declarative power, and cross-language access; OODB offers seamless persistence at the price of coupling the schema to classes and thinner tool ecosystems.",
              "The comparison's dimensions complete the section: identity (explicit keys vs object identity), relationships (foreign keys + joins vs references + navigation), inheritance (table strategies vs native), queries (SQL over flattened rows vs OQL over objects - 5.7), and transactions/maturity (RDBMS's decades vs OODB's niche strengths). The exam's sentence: relational databases store values and reconstruct objects at every access; object databases store the objects themselves - the impedance mismatch is the price of the former and the promise of the latter.",
            ],
            keyTerms: [
              { term: "Impedance mismatch", definition: "The object-versus-row friction: navigation vs joins, identity vs keys." },
              { term: "Primary key as identity", definition: "The relational re-implementation of object identity." },
              { term: "Navigation vs join", definition: "Pointer dereference vs explicit query - the access-model split." },
              { term: "Inheritance table strategies", definition: "Joined, single-table, or per-class tables - the relational workaround." },
            ],
            table: {
              caption: "Relational vs object-oriented storage.",
              headers: ["Dimension", "RDBMS", "OODB"],
              rows: [
                ["Identity", "Primary keys; value equality", "Object identity native"],
                ["Relationships", "Foreign keys + joins", "References + direct navigation"],
                ["Inheritance", "Table strategies (joined/single)", "Stored natively"],
                ["Query", "SQL over rows", "OQL over objects"],
                ["Fetch cost", "Query per navigation hop", "Dereference (lazy loads possible)"],
                ["Ecosystem", "Mature tooling, SQL standard", "Niche, schema coupled to classes"],
              ],
            },
            bullets: [
              "Relational flattens: attributes to columns, associations to foreign keys.",
              "Mismatch trace: four queries to load one object graph.",
              "OODB: identity, references, inheritance, collections stored natively.",
              "Navigation dereferences; joins query - the access-model split.",
              "Trades: RDBMS maturity/SQL vs OODB seamlessness/schema coupling.",
              "Sentence: values reconstructed vs objects stored.",
            ],
            diagram: {
              kind: "compare",
              title: "RDBMS vs OODB",
              caption: "Flatten and reconstruct, or store the object itself.",
              left: {
                heading: "Relational database",
                items: [
                  "Rows and keys; identity = primary key",
                  "Navigation re-implemented as joins",
                  "Inheritance via table strategies",
                  "Mature SQL tooling; mismatch friction",
                ],
              },
              right: {
                heading: "Object-oriented database",
                items: [
                  "Objects with identity stored as-is",
                  "References dereference directly",
                  "Inheritance and collections native",
                  "OQL queries; schema coupled to classes",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "Count the queries",
              body: "The mismatch's measurable form: 'loading one order graph takes four SELECTs and three assemblies in the relational world; one lazy dereference chain in the object world.' The impedance mismatch is not philosophy - it is per-access cost, and that is the sentence that makes the comparison concrete.",
            },
            examQuestions: [
              {
                q: "Compare relational and object-oriented databases across identity, relationships, inheritance, queries and ecosystem, with the order-graph loading trace pricing the impedance mismatch.",
                marks: 14,
                outline: [
                  "RDBMS: rows, primary keys, foreign keys, joins",
                  "Identity reconstructed from keys at every load",
                  "Inheritance via joined/single-table strategies",
                  "OODB: native identity, references, inheritance, collections",
                  "Trace: four SELECTs + assemblies vs one lazy dereference chain",
                  "Trades: SQL maturity vs schema-class coupling",
                  "Sentence: values reconstructed vs objects stored",
                ],
              },
              {
                q: "Why does object identity complicate relational storage?",
                marks: 7,
                outline: [

                  "Tables are value-based - equality by columns",

                  "Distinct objects with equal values need surrogate keys",

                  "Referential integrity re-implements reference semantics",

                  "Two equal-value rows must remain two entities",

                  "OID mapping adds a translation layer to every query",

                ],              },
            ],
          },
          {
            number: "5.7",
            title: "OODB architecture and the query language (OQL)",
            body: [
              "The object-oriented database's architecture has three layers, per the syllabus: the application layer (objects in memory - the classes of Units I-IV); the OODBMS layer (the storage manager: object identity via OIDs, class extents - the collection of all instances per class, persistence-by-reachability or explicit persist calls, lazy loading of referenced objects, and transaction management); and the storage layer (the physical store holding objects, indexes on extents and attributes). The ODMG standard (Object Data Management Group) standardized this stack: the object model, OQL, and language bindings (C++, Java, Smalltalk).",
              "The mechanisms worth naming: OIDs (immutable object identifiers - identity independent of values, 1.1's property made physical); extents (per-class instance collections - the database's answer to 'all orders'); persistence by reachability (an object persists if reachable from a named root - the transitive persistence model); lazy loading (references load on first dereference - the fetch-cost answer to 5.6's mismatch); and bidirectional object references stored once and traversed both ways. A worked persistence trace: root = database.lookupCustomer('Riya'); her orders collection loads lazily; order 501 dereferences its LineItems on access; each LineItem dereferences its Product - one root lookup, then navigation, each hop a lazy load, identity intact throughout.",
              "OQL - the Object Query Language - is the standard's query layer: SQL-like syntax over objects, returning objects (not flattened rows). A worked OQL set: SELECT o FROM orders o WHERE o.total > 10000 - returns Order objects; SELECT o.customer.name, o.total FROM orders o WHERE o.status = 'PLACED' - navigation in the SELECT (dot-chains follow references); extent queries: SELECT p FROM products p WHERE p.price < 500. The exam's sentence: the OODB stack stores objects with OIDs and extents, loads them lazily by reachability, and queries them with OQL - SQL's syntax carrying object semantics.",
            ],
            keyTerms: [
              { term: "OID", definition: "Immutable object identifier - identity independent of values." },
              { term: "Extent", definition: "The per-class collection of all stored instances." },
              { term: "Persistence by reachability", definition: "Objects persist if reachable from a named root." },
              { term: "Lazy loading", definition: "Referenced objects load on first dereference." },
              { term: "OQL", definition: "ODMG's object query language - SQL-like syntax returning objects." },
            ],
            bullets: [
              "Three layers: application, OODBMS, storage - ODMG-standardized.",
              "OIDs: 1.1's identity made physical; extents answer 'all instances'.",
              "Persistence by reachability: transitive persistence from named roots.",
              "Lazy loading: dereference-triggered fetches - 5.6's cost answered.",
              "Worked trace: root lookup -> lazy orders -> lazy items -> lazy products.",
              "OQL: SELECT ... FROM extents WHERE navigation - returns objects.",
            ],
            diagram: {
              kind: "pipeline",
              title: "From OQL query to loaded objects",
              caption: "Query the extent, resolve OIDs, lazy-load the graph - objects returned.",
              stages: [
                { label: "OQL query", note: "SELECT o FROM orders o WHERE o.total > 10000" },
                { label: "Extent scan", note: "index over the orders extent" },
                { label: "OID resolution", note: "matching objects fetched by identifier" },
                { label: "Lazy loading", note: "referenced objects load on dereference" },
                { label: "Objects returned", note: "identity intact; navigation ready" },
              ],
            },
            callout: {
              type: "exam",
              title: "OQL returns objects, not rows",
              body: "The OQL distinction that earns the mark: 'SELECT o FROM orders o returns Order objects - the query's result navigates by reference, not by re-assembly from columns.' SQL syntax, object semantics; pair it with the lazy-loading trace and the architecture question is complete.",
            },
            examQuestions: [
              {
                q: "Explain the OODB architecture - OIDs, extents, persistence by reachability, lazy loading - work the customer-root persistence trace, and demonstrate OQL queries returning objects.",
                marks: 14,
                outline: [
                  "Layers: application, OODBMS (identity, extents, transactions), storage",
                  "OIDs: identity independent of values (1.1 physicalized)",
                  "Extents: per-class instance collections",
                  "Reachability: transitive persistence from named roots",
                  "Lazy loading: dereference-triggered fetches",
                  "Trace: root customer -> lazy orders -> items -> products",
                  "OQL: SELECT o FROM orders WHERE total > 10000 - objects returned",
                ],
              },
              {
                q: "How does persistence by reachability differ from explicit persist calls?",
                marks: 7,
                outline: [

                  "Reachability: transitive - anything reachable from a root persists",

                  "Explicit: each object marked by the programmer",

                  "Reachability removes bookkeeping; explicitness adds control",

                  "Explicit control avoids accidental deep persistence",

                  "Reachability matches the object-graph mental model",

                ],              },
            ],
            codeExample: {
              language: "sql",
              caption: "OQL over the order extents",
              code: `-- orders above 10000, as objects
SELECT o FROM orders o WHERE o.total > 10000;

-- navigation in the SELECT: dot-chains follow references
SELECT o.customer.name, o.total
FROM orders o
WHERE o.status = 'PLACED';

-- collection navigation inside a query
SELECT o
FROM orders o
WHERE EXISTS li IN o.items : li.product.price > 500;`,
            },
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
        { topic: "UML diagrams (class, sequence, use case)", weight: "about 12-14 marks", note: "One 'draw the diagram' question is near-certain - practise the order-system set." },
        { topic: "OO concepts: inheritance, polymorphism, encapsulation", weight: "about 10-12 marks", note: "The Account/Shape hierarchies and the diamond problem." },
        { topic: "OMT three models + relationship among them", weight: "about 10-12 marks", note: "Dictionary-grammar-semantics framing + the five-question cross-check." },
        { topic: "Object design steps (algorithms, associations, packaging)", weight: "about 8-10 marks", note: "The total() design pass and association codes." },
        { topic: "Aggregation vs composition + associations", weight: "about 8-10 marks", note: "The lifetime question and the Order triple." },
        { topic: "Relational vs OODB + OQL", weight: "about 8-10 marks", note: "Impedance mismatch trace + OQL snippets." },
        { topic: "Translation to implementation + style", weight: "about 6-8 marks", note: "Mapping table, single-mutator rule, Demeter." },
        { topic: "OO process models and analysis", weight: "about 6-8 marks", note: "Waterfall vs iterative; the two-pass analysis loop." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Two hours a day, five days a week; every weekend, draw one diagram set from memory (use case + class + sequence for the order system). This subject is diagram-examined: hand-drawn, correctly-notated diagrams are the marks.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - concepts", tasks: ["Class vs object + identity", "Abstraction ladder + Shape hierarchy", "Encapsulation + guarded doors", "Inheritance + is-a test + diamond", "Aggregation vs composition + Order triple", "Polymorphism dispatch + open-closed", "Links/associations + need-for-OO argument"] },
        { week: "Week 2", focus: "Unit II - process and OMT", tasks: ["Waterfall vs OO iterative", "OOA pass on the order requirement", "Three models + worked object model", "DFD leveling + balancing", "Model cross-check (five questions)", "Object vs state diagrams + lifecycle", "Two-pass analysis iteration"] },
        { week: "Week 3", focus: "Unit III - design", tasks: ["Design steps + total() pass", "Model combination + guards", "Algorithm optimization pair", "Control styles + state mapping", "Association implementation set", "Packaging + decision records", "Use-case-driven comparison"] },
        { week: "Week 4", focus: "Unit IV - translation", tasks: ["Mapping table + Order translation", "Association codes + single mutator", "State machine + super-call patterns", "Style rules + Demeter", "Documentation layers + invariants", "Language characterization matrix", "C++ vs Java on Order"] },
        { week: "Week 5", focus: "Unit V - UML and OODB", tasks: ["Eight diagrams + families", "Use case + class diagrams drawn", "Sequence + collaboration pair", "State chart + activity pair", "Component + deployment pair", "RDBMS vs OODB + mismatch trace", "OODB architecture + OQL snippets"] },
        { week: "Week 6", focus: "Revision and papers", tasks: ["Draw the full order-system diagram set from memory", "Re-run the OOA pass and design pass", "Two full past papers under time", "Error log rewritten three times"] },
      ],
    },
    {
      id: "exam-tips",
      heading: "Exam-hall strategy",
      examTips: [
        "This subject is diagram-examined: every big answer carries a hand-drawn diagram - draw it first, then explain its notation.",
        "Use one running example (Customer-Order-LineItem-Product) across diagrams and code - consistency earns recognition marks.",
        "For concept questions, give the mechanism sentence, not just the definition: dispatch via vtable, guards as preconditions, invariants as contracts.",
        "For OMT questions, open with dictionary-grammar-semantics, then work the fragment - framing plus evidence.",
        "For UML notation, get the arrows right: include vs extend directions, hollow vs filled diamonds, solid vs dotted messages.",
        "For comparison questions, use the dimension table (typing, inheritance, semantics, memory) - rows, not essays.",
        "For code questions, show the mapping origin: every line cites its design decision - fidelity is the mark.",
        "Time-box: 7-mark about 12 minutes, 14-mark about 22 minutes; leave 10 minutes to check arrows and multiplicities.",
      ],
    },
    {
      id: "slips",
      heading: "Last-day strategy and common slips",
      body: [
        "Last day: redraw the order-system diagram set (use case, class, sequence, state chart, activity) and re-write the Order translation snippet and one OQL query - by hand, once each. No new material tonight.",
      ],
      bullets: [
        "Swapping include and extend arrow directions - include points base-to-sub, extend extension-to-base.",
        "Drawing composition with a hollow diamond - filled composes, hollow aggregates.",
        "Listing state and behaviour but forgetting identity in the object definition.",
        "Inheriting for reuse without the is-a test - Stack extends List is the trap.",
        "Confusing overriding (runtime dispatch) with overloading (compile-time).",
        "Missing the single-mutator rule - null back-references are the classic bug.",
        "Calling drills of the dynamic model 'state diagrams with activities' - states are adjectives.",
        "Drawing a fork without a join in activity diagrams.",
        "Saying sequence and collaboration differ in information - only layout differs.",
        "Claiming SQL returns objects - OQL returns objects; SQL returns rows.",
        "Forgetting OIDs in OODB answers - identity is the architecture's core.",
        "Writing 'C with classes' examples while calling them OO - the discipline makes it OO.",
      ],
    },
  ],
};
