/**
 * Academics - CS-305 Object Oriented Programming & Methodology (RGPV CSE, Sem III).
 *
 * Five units, one chapter each, 8 numbered sections per chapter (40 sections).
 * Every section carries 3-5 body paragraphs, key bullets, one DiagramSpec,
 * a C++ code example with expected output, a callout, key terms, and three
 * exam questions (one 7-mark with outline, two short-answer).
 *
 * A separate `studyPlan` array drives the per-subject "Guide Me" tab.
 */

import type { AcademicSubject } from "./types";

export const cs305: AcademicSubject = {
  id: "cs-305",
  code: "CS-305",
  title: "Object Oriented Programming & Methodology",
  semester: "III Semester",
  program: "RGPV · Computer Science & Engineering",
  tagline:
    "The complete C++ exam companion: objects and classes, constructors and destructors, operator overloading, inheritance, virtual functions, streams, files, templates and exceptions - every topic with syntax, worked code, output and a redrawable diagram.",
  description:
    "Five units walk from the object-oriented way of thinking through the full C++ class machinery - constructors, friends, static members - into operator overloading and inheritance, then runtime polymorphism with streams and file handling, and finally generic programming with templates plus exception handling. Every section pairs concept with compilable code and a diagram you can redraw in the exam hall.",
  accentColor: "#f472b6",
  emoji: "C++",
  unitCount: 5,
  totalSections: 40,
  units: [
    {
      number: 1,
      roman: "I",
      title: "OOP Methodology & C++ Foundations",
      summary:
        "Why objects exist, the four pillars of object orientation, the benefits and application areas, and the C++ toolkit you need before classes arrive: program structure, tokens, data types, operators, expressions and control flow.",
      chapter: {
        number: "01",
        title: "The Object Way of Thinking & C++ Foundations",
        intro:
          "Unit I contrasts the procedural and object-oriented paradigms, defines every core OOP term the paper asks for, motivates the methodology, and then rebuilds the C++ base: program structure, tokens, data types, operators, expressions and control structures.",
        inOneBreath:
          "Procedural languages separate data from functions and global data is exposed everywhere; OOP binds data and the functions that operate on it into a class, hides the data, and models the problem domain directly. The pillars are encapsulation, abstraction, inheritance and polymorphism; messages are function calls between objects; dynamic binding chooses the function at run time. C++ = C + classes: edit, preprocess, compile, link, run; tokens are keywords, identifiers, literals, operators and punctuators; expressions promote smaller types to larger; control flow is selection, iteration and jump.",
        sections: [
          {
            number: "1.1",
            title: "From procedural to object-oriented programming",
            body: [
              "A programming paradigm is the style in which a program is organised. The procedural paradigm (C, Pascal, FORTRAN) organises a program as a set of functions that transform data. Data is declared separately - often globally - and passed from function to function. This works for small programs, but as a system grows the number of functions explodes and every change to a data structure forces edits in every function that touches it.",
              "The deeper weakness is that procedural design treats data as passive. Global data is visible to all functions, so any function can corrupt it; there is no way to say \"only these operations may change this data\". The model also maps poorly onto real problems: a bank account, a student record or a file window is a thing that carries state and behaviour together, not two separate lists.",
              "Object-oriented programming answers both problems. A class bundles data (attributes) and the functions allowed to touch that data (methods) into one unit, and objects are runtime instances of classes. Data is private by convention; the outside world communicates through a public interface of methods. This is often summarised as \"objects = data + operations, with control over access\".",
              "The result is a design method as much as a language feature: you decompose the problem into the objects of the domain, define how they respond to messages, and let inheritance reuse what already exists. C++ is the classic vehicle for this methodology - it keeps all of C (efficiency, low-level access) and adds classes, and the rest of this subject is a tour of those additions.",
            ],
            bullets: [
              "Procedural paradigm: program = functions operating on separately declared data; OOP paradigm: program = interacting objects.",
              "Procedural weakness #1: global data is reachable by every function, so no protection against accidental corruption.",
              "Procedural weakness #2: changes to a data structure ripple into all dependent functions - poor scalability.",
              "OOP binds data and methods into a class; objects are instances created from that blueprint at run time.",
              "Data hiding: private members are accessible only through the class's own member functions.",
              "OOP maps naturally onto real-world entities (accounts, students, files), making design and maintenance easier.",
              "C++ is a superset of C in spirit: everything C offers plus classes, inheritance, overloading, templates and exceptions.",
            ],
            codeExample: {
              language: "cpp",
              caption: "Procedural data with no protection vs. a class that guards its own data.",
              code: `#include <iostream>
using namespace std;

// Procedural style: balance is exposed to everyone.
float balance = 1000.0f;

class Account {
    float bal;                     // private: hidden data
public:
    void set(float b) { bal = b; } // the only entry point
    float get() { return bal; }
};

int main() {
    balance = -99999.0f;           // allowed - no protection!
    Account a;
    // a.bal = -99999.0f;          // ERROR: bal is private
    a.set(5000.0f);
    cout << a.get();               // OUTPUT: 5000
    return 0;
}`,
            },
            diagram: {
              kind: "compare",
              title: "Procedural vs. object-oriented organisation",
              caption: "Same problem, two shapes: loose functions over shared data, or objects guarding their own data.",
              left: {
                heading: "Procedure-oriented (C)",
                items: [
                  "Program divided into functions",
                  "Data moves from function to function",
                  "Global data open to every function",
                  "Top-down design; little reuse",
                  "Hard to model real-world entities",
                ],
              },
              right: {
                heading: "Object-oriented (C++)",
                items: [
                  "Program divided into objects",
                  "Data + methods live in one class",
                  "Private data, public interface",
                  "Bottom-up design; inheritance reuse",
                  "Objects mirror problem-domain entities",
                ],
              },
            },
            keyTerms: [
              { term: "Paradigm", definition: "The organising style of a program - e.g. procedural, object-oriented, functional." },
              { term: "Class", definition: "A user-defined type bundling data members and member functions under one access policy." },
              { term: "Object", definition: "A runtime instance of a class with its own copy of the data members." },
              { term: "Data hiding", definition: "Restricting direct access to internal data so it changes only via the class's methods." },
            ],
            callout: {
              type: "tip",
              title: "Answer the \"why\" before the \"what\"",
              body: "RGPV papers love the 7-mark question \"Explain limitations of procedural programming and how OOP overcomes them\". Lead with the two weaknesses (exposed global data, poor scalability), then show how class + private data + public interface answers each one - a two-column argument scores full marks.",
            },
            examQuestions: [
              {
                q: "Explain the limitations of procedure-oriented programming and describe how the object-oriented paradigm overcomes them.",
                marks: 7,
                outline: [
                  "Define paradigm; procedural programs are function-centric with separately declared data",
                  "Weakness 1: global data accessible to all functions - no protection, error-prone",
                  "Weakness 2: data and functions are decoupled; any data change ripples through dependent functions",
                  "Poor mapping between the model and real-world entities; hard to maintain large systems",
                  "OOP answer: class binds data + operations; objects are instances of classes",
                  "OOP answer: private data + public interface enforces controlled access (data hiding)",
                  "Additional gains: inheritance reuse, polymorphism, easier maintenance and extension",
                ],
              },
              {
                q: "Define an object and a class with a small C++ declaration of each.",
                marks: 2,
              },
              {
                q: "List any four features of object-oriented programming languages.",
                marks: 2,
              },
            ],
          },
          {
            number: "1.2",
            title: "Basic concepts: objects, classes and the OOP vocabulary",
            body: [
              "An object is a runtime entity with three facets: identity (a name or address that distinguishes it from every other object), state (the current values of its data members) and behaviour (the member functions it can execute). Two objects of class Student each carry their own roll number and marks - separate state - but share one set of member functions defined by the class.",
              "A class is a blueprint, not a container of values: it specifies which data members exist, their types, and which functions may read or change them. Defining a class allocates no memory; declaring an object does. In C++ a class is written with the keyword class, members are grouped under access labels (private, protected, public), and the class body ends with a semicolon - forgetting that semicolon is the classic beginner compile error.",
              "Objects communicate by sending messages - in C++, message passing is simply calling a member function on an object: obj.show(). The receiver decides how to respond by looking up the method; the same message to different classes can trigger different behaviour (polymorphism). Message passing therefore has three parts: the object addressed, the method name, and any arguments.",
              "Around objects and classes the syllabus hangs four more words. Encapsulation is the bundling itself. Abstraction is exposing only the essential features and hiding the machinery. Inheritance lets a class acquire members of another class. Polymorphism lets one interface take many forms - the same function name behaving differently by context. Every later unit is a deep dive into one of these four.",
            ],
            bullets: [
              "Object = identity + state + behaviour; each object owns its own copy of the data members.",
              "Class = blueprint: declares data members, member functions and access labels; consumes no memory itself.",
              "Access labels: private (default in class), protected, public - they control who may touch each member.",
              "Message passing in C++ = obj.method(args): receiver object, method name, argument list.",
              "Encapsulation bundles data + methods; abstraction hides mechanism, shows essential features.",
              "Inheritance: derived class reuses and extends a base class; polymorphism: one name, many forms.",
              "Dynamic binding: the choice of which function actually runs is deferred to run time via virtual functions.",
            ],
            codeExample: {
              language: "cpp",
              caption: "A class, two objects with independent state, message passing, and output.",
              code: `#include <iostream>
using namespace std;

class Student {                  // blueprint - no memory yet
    int roll;                    // private by default
public:
    void set(int r) { roll = r; }
    void show() { cout << "Roll " << roll << "\\n"; }
};

int main() {
    Student a, b;                // two objects, two states
    a.set(17);                   // message to a
    b.set(42);                   // same message to b
    a.show();                    // Roll 17
    b.show();                    // Roll 42
    return 0;
}`,
            },
            diagram: {
              kind: "layers",
              title: "Anatomy of an object",
              caption: "Peel an object from the outside in: a public interface, behaviour behind it, state inside, identity anchoring it all.",
              layers: [
                { label: "Identity", note: "name / address that makes this object unique" },
                { label: "Interface (public methods)", note: "the messages other code may send" },
                { label: "Behaviour (member functions)", note: "how each message is answered" },
                { label: "State (private data members)", note: "values this object alone owns" },
              ],
            },
            keyTerms: [
              { term: "Identity", definition: "The property that distinguishes one object from all others - its name or address." },
              { term: "State", definition: "The current values of an object's data members at a point in time." },
              { term: "Message passing", definition: "Requesting an object to execute one of its methods: obj.show()." },
              { term: "Encapsulation", definition: "Binding data and the functions that use it into one class unit." },
              { term: "Abstraction", definition: "Representing essential features while hiding background implementation detail." },
            ],
            callout: {
              type: "exam",
              title: "Define-then-illustrate wins the marks",
              body: "For \"explain basic concepts of OOP\", write one crisp definition per term (object, class, encapsulation, abstraction, inheritance, polymorphism, dynamic binding, message passing) and attach a one-line C++ fragment to at least three of them. Eight definitions with three illustrations is a full 7-mark answer.",
            },
            examQuestions: [
              {
                q: "Explain the basic concepts of object-oriented programming: objects, classes, encapsulation, abstraction, inheritance, polymorphism, dynamic binding and message passing.",
                marks: 7,
                outline: [
                  "Object: runtime entity with identity, state and behaviour; give Student example",
                  "Class: blueprint of objects; declares data members, methods, access labels; no memory until instantiated",
                  "Encapsulation: bundling of data + methods in one unit",
                  "Abstraction: expose essential features, hide implementation detail",
                  "Inheritance: derived class acquires members of a base class; reuse",
                  "Polymorphism: same name, many forms; compile-time (overloading) vs run-time (virtual)",
                  "Dynamic binding + message passing: obj.show() selects code at run time via virtual functions",
                ],
              },
              {
                q: "Differentiate between an object and a class with one C++ statement of each.",
                marks: 2,
              },
              {
                q: "What is message passing? Name its three components.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.3",
            title: "Encapsulation, data abstraction and data hiding",
            body: [
              "Encapsulation is the mechanism: member data and member functions are wrapped into a single capsule, the class. Data hiding is the policy that follows: data members are declared private so that only member functions of the class (and declared friends) can reach them. The outside world is left with a public interface - the set of methods the class chooses to expose.",
              "Data abstraction is the design viewpoint on top of the mechanism. A class abstracts a real-world entity: class Stack offers push, pop and isEmpty without ever revealing whether it stores the elements in an array or a linked list. Abstract data types (ADTs) are exactly this idea formalised - a specification of values and operations, independent of implementation. C++ classes are the language's direct support for ADTs.",
              "The practical dividend is safety and freedom to change. Because all writes pass through methods, validation happens at one choke point: setAge can reject negative values before they enter the object. Because callers depend only on the public interface, the private representation can be rewritten (array to linked list) without touching a single caller - this is why encapsulation is the backbone of maintainable systems.",
              "Access in C++ is enforced at compile time by the three labels. private members are visible only inside the class (and friends). protected members behave like private for the outside world but stay visible to derived classes - the bridge that inheritance (Unit III) needs. public members form the interface anyone may use. A well-designed class keeps data private, helper routines private or protected, and publishes a minimal public set.",
            ],
            bullets: [
              "Encapsulation = wrapping data + methods in one class; data hiding = declaring the data private.",
              "Abstraction = design-level hiding: user knows WHAT operations exist, not HOW they are implemented.",
              "ADT: abstract data type - a class seen as its public operations, independent of its private representation.",
              "private: class-internal (plus friends); protected: class + derived classes; public: everyone.",
              "In a class, members are private by default; in a struct, public by default - the only difference between them.",
              "Validation choke point: every write to private data passes through a method, so checks live in one place.",
              "Implementation can change (array to linked list) without breaking callers that use only the public interface.",
            ],
            codeExample: {
              language: "cpp",
              caption: "Private data guarded by a validation choke point.",
              code: `#include <iostream>
using namespace std;

class Person {
    int age;                          // hidden state
public:
    bool setAge(int a) {              // single entry point
        if (a < 0 || a > 130) {
            cout << "Rejected " << a << "\\n";
            return false;             // validation lives here
        }
        age = a;
        return true;
    }
    int getAge() { return age; }
};

int main() {
    Person p;
    p.setAge(-5);                     // Rejected -5
    p.setAge(20);
    cout << p.getAge();               // OUTPUT: 20
    return 0;
}`,
            },
            diagram: {
              kind: "fork",
              title: "What happens when outside code touches a member",
              caption: "The compiler checks the access label at the call site and accepts or rejects accordingly.",
              start: "Outside code writes obj.member",
              branches: [
                { label: "member is public", outcome: "allowed - part of the class interface", good: true },
                { label: "member is protected", outcome: "rejected outside; allowed only inside derived classes", good: true },
                { label: "member is private", outcome: "compile error: 'member is private' - must go through a method", good: false },
              ],
            },
            keyTerms: [
              { term: "Encapsulation", definition: "Binding of data and the functions that manipulate it into a single class unit." },
              { term: "Data hiding", definition: "Making data members private so they can change only through class methods." },
              { term: "Data abstraction", definition: "Exposing essential operations while hiding implementation details (ADT view)." },
              { term: "Public interface", definition: "The set of public members other code is allowed to call." },
            ],
            callout: {
              type: "warning",
              title: "Abstraction is not the same as hiding",
              body: "Examiners probe the difference. Data hiding is an implementation-level mechanism (private label blocks access); abstraction is a design-level view (user sees operations, not machinery). Write both sentences - merging them into one vague line is the most common way students drop a mark here.",
            },
            examQuestions: [
              {
                q: "Define encapsulation, data abstraction and data hiding. How do the three access specifiers of C++ support them? Illustrate with a short class.",
                marks: 7,
                outline: [
                  "Define encapsulation: data + methods bundled in a class",
                  "Define data hiding: private members unreachable from outside",
                  "Define abstraction: essential features exposed, mechanism hidden (ADT)",
                  "private: only class + friends; protected: also derived classes; public: everyone",
                  "class defaults to private, struct to public - state both",
                  "Code sketch: class with private data, public setter with validation",
                  "Benefit line: representation can change without touching callers",
                ],
              },
              {
                q: "What is an abstract data type (ADT)? Give one example.",
                marks: 2,
              },
              {
                q: "State the default access of members in a class and in a struct.",
                marks: 2,
              },
            ],
          },
          {
            number: "1.4",
            title: "Inheritance, polymorphism, dynamic binding and message passing",
            body: [
              "Inheritance is the reuse relationship: a derived (child) class automatically acquires the data members and member functions of a base (parent) class, then adds or overrides what it needs. Syntax: class Student : public Person { ... }. The derived object contains a base-class subobject inside itself, which is why a Student can be used anywhere a Person is expected. Inheritance models an \"is-a\" relationship; contrast it with a \"has-a\" relationship, which is modelled by making one class a member of another (composition).",
              "Polymorphism - literally \"many forms\" - lets one interface serve many types. C++ provides two flavours. Compile-time (static) polymorphism is achieved by function overloading and operator overloading: the compiler picks the correct version from the argument types. Run-time (dynamic) polymorphism is achieved by virtual functions: the decision of which override runs is made while the program is executing, based on the actual object a pointer or reference refers to.",
              "Dynamic binding is the engine of run-time polymorphism. When a function is declared virtual, calls through a base-class pointer are resolved at run time by consulting the object's vtable (a per-class table of function pointers) instead of being fixed at compile time. Delete the keyword virtual and the same call binds statically to the base version even when the object is really derived - a favourite exam trap.",
              "Message passing ties the concepts together at run time: objects are created, messages (member-function calls) are sent, the receiver selects and executes the method, its state may change, and a result may be returned. The whole OO program is this loop repeated across a network of collaborating objects, which is why some texts describe OOP as \"programming by sending messages to objects\".",
            ],
            bullets: [
              "Inheritance syntax: class Derived : public Base { ... }; derived object embeds a base subobject.",
              "Is-a (inheritance) vs has-a (composition/aggregation) - know which relationship your design expresses.",
              "Compile-time polymorphism: function overloading and operator overloading, resolved by the compiler.",
              "Run-time polymorphism: virtual functions, resolved through the object's vtable while running.",
              "Dynamic binding applies only through pointers/references to the base class - not through plain objects.",
              "Message passing = obj.method(args); same message to different classes can yield different behaviour.",
              "Virtual destructor matters too: deleting a derived object via a base pointer needs a virtual destructor.",
            ],
            codeExample: {
              language: "cpp",
              caption: "One message, two behaviours: virtual function dispatch at run time.",
              code: `#include <iostream>
using namespace std;

class Shape {
public:
    virtual void draw() { cout << "generic shape\\n"; }
    virtual ~Shape() {}
};

class Circle : public Shape {
public:
    void draw() { cout << "circle\\n"; }   // override
};

class Square : public Shape {
public:
    void draw() { cout << "square\\n"; }   // override
};

void render(Shape& s) { s.draw(); }       // dynamic binding

int main() {
    Circle c; Square q;
    render(c);                            // circle
    render(q);                            // square
    return 0;
}`,
            },
            diagram: {
              kind: "cycle",
              title: "The message-passing loop of an OO program",
              caption: "An object-oriented program is this loop running across all collaborating objects.",
              steps: [
                { label: "Create objects", note: "constructors initialise state" },
                { label: "Send message", note: "obj.method(args)" },
                { label: "Receiver selects method", note: "virtual lookup if polymorphic" },
                { label: "Method executes", note: "reads and updates private state" },
                { label: "Result returned", note: "object ready for the next message" },
              ],
            },
            keyTerms: [
              { term: "Inheritance", definition: "Mechanism by which a derived class acquires the members of a base class." },
              { term: "Polymorphism", definition: "One interface, many forms: static via overloading, dynamic via virtual functions." },
              { term: "Dynamic binding", definition: "Run-time selection of the function to execute, via the vtable of virtual functions." },
              { term: "Overriding", definition: "A derived class redefining a base-class virtual function with the same signature." },
              { term: "Composition", definition: "\"Has-a\" relationship where one class contains an object of another as a member." },
            ],
            callout: {
              type: "tip",
              title: "Name the two polymorphisms separately",
              body: "The strongest 7-mark answers split polymorphism into compile-time (overloading) and run-time (virtual functions) with one tiny code line for each. Students who only write \"polymorphism means many forms\" without the split usually cap at 4 of 7 marks.",
            },
            examQuestions: [
              {
                q: "Explain inheritance, polymorphism and dynamic binding with suitable C++ examples. Distinguish compile-time from run-time polymorphism.",
                marks: 7,
                outline: [
                  "Inheritance: class Derived : public Base; derived object contains base subobject; is-a reuse",
                  "Tiny inheritance code with a base and derived class",
                  "Polymorphism definition: one interface, many forms",
                  "Compile-time: function/operator overloading, resolved by compiler",
                  "Run-time: virtual functions, resolved by vtable through base pointer/reference",
                  "Dynamic binding code: Shape/Circle example showing base-pointer call choosing the override",
                  "Message passing: obj.method() as the means objects cooperate",
                ],
              },
              {
                q: "What does the keyword virtual do in a C++ class?",
                marks: 2,
              },
              {
                q: "Differentiate between function overloading and function overriding.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.5",
            title: "Benefits and applications of OOP",
            body: [
              "The methodology earns its keep through six recurring benefits. Reusability through inheritance means tested base classes (containers, streams, GUI widgets) are extended rather than rewritten. Modularity through classes gives independent, compilable units with narrow interfaces. Maintainability follows: because state is hidden behind methods, a bug in the representation is fixed inside one class.",
              "Data security comes from access control - private members simply cannot be corrupted by outside code. Extensibility comes from polymorphism: new derived classes plug into existing code that only knows the base interface, often with zero edits to the calling code (the classic \"open for extension, closed for modification\" principle). Finally, OOP reduces complexity in large systems because the design vocabulary - objects, messages, hierarchies - matches the way humans decompose problems.",
              "These benefits explain where OOP dominates. Simulation and modelling were its birthplace (Simula 67). GUI frameworks are built entirely on inheritance and virtual handlers. Object databases and CAD/CAM systems store and manipulate entities as objects. AI and machine-learning toolkits model models, layers and datasets as classes. And modern C++ standard-library components - streams, containers, iterators - are themselves objects built with the very techniques in this subject.",
              "Honest engineering also notes the costs: a steeper learning curve, more upfront design effort, and slight runtime overhead for dynamic binding (one indirection per virtual call). RGPV papers sometimes ask for \"advantages and applications\"; presenting five benefits, one limitation, and four application domains reads as a complete, mature answer.",
            ],
            bullets: [
              "Reusability: inheritance lets existing classes be extended without rewriting tested code.",
              "Modularity: the program is partitioned into classes that compile and test independently.",
              "Maintainability + data security: private state changes only via methods; fixes stay local.",
              "Extensibility: polymorphic code accepts new derived classes without modification.",
              "Complexity control: design vocabulary (objects, messages) mirrors the problem domain.",
              "Applications: simulation, GUI frameworks, OODBMS, CAD/CAM, AI/ML toolkits, the C++ STL itself.",
              "Costs to mention: learning curve, design overhead, one indirection per virtual call.",
            ],
            codeExample: {
              language: "cpp",
              caption: "Extensibility: existing render loop accepts a brand-new class unmodified.",
              code: `#include <iostream>
#include <vector>
using namespace std;

class Shape {
public: virtual void draw() { cout << "shape\\n"; }
};
class Circle : public Shape {
public: void draw() { cout << "o\\n"; }
};
class Triangle : public Shape {          // added later
public: void draw() { cout << "^\\n"; }
};

int main() {
    vector<Shape*> shapes = { new Circle, new Triangle };
    for (Shape* s : shapes) s->draw();   // o and ^ - loop unchanged
    return 0;
}`,
            },
            diagram: {
              kind: "pipeline",
              title: "From problem to program: the OO methodology",
              caption: "Object-oriented design is bottom-up: identify the objects first, compose the system second.",
              stages: [
                { label: "Identify objects & classes", note: "nouns of the problem domain" },
                { label: "Define attributes", note: "the state each class must hold" },
                { label: "Define operations", note: "messages each class answers" },
                { label: "Establish relationships", note: "inheritance, composition, association" },
                { label: "Compose & refine", note: "objects collaborate to run the system" },
              ],
            },
            keyTerms: [
              { term: "Reusability", definition: "Using existing classes via inheritance and composition instead of rewriting code." },
              { term: "Modularity", definition: "Decomposition of a program into independent, separately compiled classes." },
              { term: "Extensibility", definition: "Ability to add new behaviour (new derived classes) without modifying existing code." },
              { term: "Open-closed principle", definition: "Modules should be open for extension but closed for modification." },
            ],
            callout: {
              type: "exam",
              title: "Benefits + applications is a two-part answer",
              body: "Structure the 7-mark version as two headed lists: (a) five benefits each with one supporting sentence, (b) four application areas each naming a concrete example (GUI frameworks, simulation, OODBMS, AI toolkits). Ending with one honest limitation signals maturity and typically earns the last mark.",
            },
            examQuestions: [
              {
                q: "Discuss the major benefits of object-oriented programming and list its application areas with examples.",
                marks: 7,
                outline: [
                  "Reusability through inheritance - extend tested base classes",
                  "Modularity - classes compile and test independently",
                  "Data security - private state reachable only via methods",
                  "Maintainability - fixes localised inside one class",
                  "Extensibility - polymorphism accepts new derived classes unmodified",
                  "Applications: simulation, GUI frameworks, OODBMS, CAD/CAM, AI/ML libraries, STL",
                  "One limitation (learning curve / virtual-call overhead) for completeness",
                ],
              },
              {
                q: "Name any four application areas where OOP is widely used.",
                marks: 2,
              },
              {
                q: "Which OOP feature primarily provides reusability? Why?",
                marks: 3,
              },
            ],
          },
          {
            number: "1.6",
            title: "Structure of a C++ program, tokens and basic data types",
            body: [
              "Every C++ program follows a recognisable skeleton: include directives (#include <iostream>), a using declaration (using namespace std;), class and function definitions, and exactly one function main() where execution begins. The preprocessor first pastes in the included headers; the compiler translates each translation unit to object code; the linker joins object files and libraries into an executable; the loader runs it.",
              "The smallest units the compiler recognises are tokens: keywords (int, class, public, virtual - reserved and unspellable as names), identifiers (user-chosen names for variables, functions, classes - must start with a letter or underscore), literals (42, 3.14, 'a', \"text\"), operators (+, <<, ::) and punctuators (;, {, }). Comments (// line and /* block */) are stripped before compilation and are not tokens.",
              "Basic data types form a small family. Characters: char (1 byte). Integers: short int, int, long int - signed or unsigned. Floating point: float, double, long double. Boolean: bool holding true/false. The void type means \"no value\" and is used for functions returning nothing and for generic pointers. The exact sizes are implementation-defined, but typical on RGPV exam machines: char 1, int 4, float 4, double 8 bytes.",
              "Type modifiers (signed, unsigned, short, long) reshape the basic types, and const makes a value unmodifiable after initialisation. Variables must be declared before use, may be initialised at declaration (int n = 5;), and their scope is the block in which they are declared. A working first program - reading two integers and printing their sum - is the minimal evidence an examiner wants that you can assemble this skeleton.",
            ],
            bullets: [
              "Skeleton: #include headers -> using namespace std; -> class/function definitions -> main().",
              "Build cycle: preprocess (#include, #define) -> compile to object code -> link libraries -> execute.",
              "Five token classes: keywords, identifiers, literals/constants, operators, punctuators.",
              "Identifier rules: letters/digits/underscore, cannot start with a digit, cannot be a keyword, case-sensitive.",
              "Basic types: char, int (with short/long/signed/unsigned), float, double, bool, void.",
              "Typical sizes: char 1 byte, int 4, float 4, double 8 - sizes are implementation-defined.",
              "const declares an unmodifiable value; every variable must be declared before use.",
            ],
            codeExample: {
              language: "cpp",
              caption: "A complete first program: input, computation, output.",
              code: `#include <iostream>        // preprocessor pastes I/O declarations
using namespace std;       // so we can write cout, cin

int main() {
    int a, b;              // declarations before use
    cout << "Enter two integers: ";
    cin >> a >> b;
    int sum = a + b;       // initialisation at declaration
    cout << "Sum = " << sum << "\\n";
    return 0;              // exit status to the OS
}`,
            },
            diagram: {
              kind: "pipeline",
              title: "From source file to running program",
              caption: "The four build stages every .cpp file passes through.",
              stages: [
                { label: "Edit", note: "write source in a .cpp file" },
                { label: "Preprocess", note: "#include and #define are expanded" },
                { label: "Compile", note: "tokens -> assembly -> object file (.o/.obj)" },
                { label: "Link", note: "object files + libraries joined into an executable" },
                { label: "Run", note: "loader starts execution at main()" },
              ],
            },
            keyTerms: [
              { term: "Token", definition: "Smallest individual unit of a program recognised by the compiler." },
              { term: "Identifier", definition: "Programmer-chosen name for a variable, function, class or object." },
              { term: "Keyword", definition: "A reserved word (int, class, virtual) with fixed meaning; cannot be used as an identifier." },
              { term: "Preprocessor", definition: "Build stage that expands #include and #define directives before compilation." },
              { term: "void type", definition: "Type meaning \"no value\"; used for valueless returns and generic pointers." },
            ],
            callout: {
              type: "warning",
              title: "The missing semicolon after a class body",
              body: "class Box { ... } without the closing semicolon produces a cascade of confusing errors at the next declaration. It is the single most common compile error in student C++ code - mention it in any answer about program structure and fix it in every program you write.",
            },
            examQuestions: [
              {
                q: "Describe the general structure of a C++ program. Explain the different types of tokens available in C++ with examples.",
                marks: 7,
                outline: [
                  "Skeleton: includes, using declaration, class/function definitions, main()",
                  "Build stages: preprocess -> compile -> link -> run",
                  "Tokens definition: smallest units the compiler recognises",
                  "Keywords: reserved words, examples int, class, virtual",
                  "Identifiers: naming rules (start letter/underscore, no keywords, case-sensitive)",
                  "Literals, operators, punctuators with one example each",
                  "Brief note on basic data types (char, int, float, double, bool, void) and typical sizes",
                ],
              },
              {
                q: "List the fundamental data types of C++ with their typical sizes in bytes.",
                marks: 2,
              },
              {
                q: "State the rules for forming valid identifiers in C++.",
                marks: 2,
              },
            ],
          },
          {
            number: "1.7",
            title: "Operators, expressions and type conversions in C++",
            body: [
              "C++ carries C's rich operator set. Arithmetic: + - * / % with integer division truncating (7/2 is 3) and % defined only for integers. Relational: < <= > >= == != producing bool. Logical: && || ! with short-circuit evaluation - the second operand is skipped when the first already decides the result. Assignment and compound assignment: = += -= *= /= %=. Increment/decrement: ++ and --, each in prefix (change then use) and postfix (use then change) form.",
              "Bitwise operators (& | ^ ~ << >>) manipulate individual bits, and the conditional operator (cond ? a : b) is C++'s only ternary operator. Two operators have overloaded meanings in early programs: << and >> serve both as bit-shift operators and, with streams, as insertion and extraction. Precedence and associativity decide evaluation order - parentheses override everything, and * / % bind tighter than + -.",
              "An expression mixes operands of different types, and C++ quietly promotes them: char and short promote to int in any arithmetic; in a mixed expression the smaller type is converted to the larger (int -> long -> float -> double). This implicit conversion is convenient but lossy in the wrong direction - assigning a double to an int discards the fractional part by truncation toward zero.",
              "Explicit conversion is available when the implicit rules are not what you want. The C-style cast (int)x still works, but modern C++ prefers static_cast<int>(x), which states the conversion clearly and is checked by the compiler. Know both forms: RGPV questions on \"type compatibility and conversion\" expect the promotion ladder, the truncation warning, and one line each of implicit and explicit conversion.",
            ],
            bullets: [
              "Arithmetic: + - * / %; integer division truncates; % needs integer operands.",
              "Relational and logical operators yield bool; && and || short-circuit.",
              "++/-- : prefix changes then uses; postfix uses then changes - know a++ vs ++a.",
              "Bitwise & | ^ ~ << >> act on bits; << >> double as stream insert/extract operators.",
              "Ternary cond ? a : b replaces a simple if-else as an expression.",
              "Promotion ladder: char/short -> int -> long -> float -> double (smaller converts to larger).",
              "Narrowing conversions lose data (double -> int truncates); prefer static_cast<int>(x) for clarity.",
            ],
            codeExample: {
              language: "cpp",
              caption: "Integer division, promotion, postfix vs prefix, and an explicit cast.",
              code: `#include <iostream>
using namespace std;

int main() {
    int a = 7, b = 2;
    cout << a / b << "\\n";          // 3   (integer division)
    cout << a / 2.0 << "\\n";        // 3.5 (b promoted to double)
    int i = 5;
    cout << i++ << " " << i << "\\n";// 5 6 (use then change)
    double d = 9.7;
    int t = static_cast<int>(d);    // explicit cast
    cout << t << "\\n";              // 9   (truncated)
    return 0;
}`,
            },
            diagram: {
              kind: "pyramid",
              title: "The promotion ladder of basic types",
              caption: "In a mixed expression, the narrower type climbs toward the wider one at the base.",
              tiers: [
                { label: "char / bool (1 byte)", note: "promote to int in any arithmetic" },
                { label: "int / unsigned int", note: "the default arithmetic type" },
                { label: "long / long long", note: "wider integers" },
                { label: "double / long double", note: "widest - wins every mixed expression" },
              ],
            },
            keyTerms: [
              { term: "Operator precedence", definition: "Rule deciding which operator binds first in an expression; parentheses override it." },
              { term: "Short-circuit evaluation", definition: "&& and || skip the second operand when the first already determines the result." },
              { term: "Implicit conversion", definition: "Automatic type conversion performed by the compiler, e.g. int to double in mixed arithmetic." },
              { term: "static_cast", definition: "Modern C++ explicit conversion notation: static_cast<type>(value)." },
            ],
            callout: {
              type: "tip",
              title: "Trace a++ and ++a on paper",
              body: "The one-line output questions almost always hide a postfix/prefix trick: cout << a++ prints the old value, cout << ++a prints the new one. Write the value-before and value-after above the expression in the margin - it takes five seconds and removes all doubt.",
            },
            examQuestions: [
              {
                q: "Explain the arithmetic, relational, logical and bitwise operators of C++ with examples. How does the compiler convert between different operand types in an expression?",
                marks: 7,
                outline: [
                  "Arithmetic + - * / %: integer division truncates, % only for integers",
                  "Relational < <= > >= == != produce bool",
                  "Logical && || ! with short-circuit evaluation example",
                  "Bitwise & | ^ ~ << >> with one shifting example",
                  "Precedence/associativity and parentheses",
                  "Implicit promotion ladder: char/short -> int -> long -> float -> double",
                  "Narrowing/truncation warning + static_cast example",
                ],
              },
              {
                q: "What is the output of int x = 5; cout << x++ << \" \" << ++x; ? Justify briefly.",
                marks: 3,
              },
              {
                q: "Why is 7 / 2 equal to 3 but 7 / 2.0 equal to 3.5 in C++?",
                marks: 2,
              },
            ],
          },
          {
            number: "1.8",
            title: "Control structures and functions in C++",
            body: [
              "Selection structures choose a path. if / else if / else executes a block when a condition is true; switch (expr) jumps to the matching case label for integral or enum expressions, and break stops fall-through - without break, execution slides into the next case, a behaviour that is a bug in most programs but occasionally exploited deliberately. The default label handles unmatched values.",
              "Iteration repeats a block. The while loop tests before each pass (may run zero times); the do-while tests after (runs at least once - ideal for menu loops); the for loop bundles initialisation, condition and update in one header and is the workhorse for counted repetition. Range-based for (for (int x : arr)) iterates over containers directly and appears constantly in modern C++.",
              "Jump statements alter flow: break exits the nearest loop or switch; continue skips to the next iteration; return leaves the function (optionally carrying a value); goto jumps to a label but is discouraged because it destroys structured flow. In exam answers, name goto only to condemn it - examiners reward the structured alternative.",
              "Functions modularise behaviour: return-type name(parameters) { body }. Arguments pass by value (a copy - callee cannot change the caller's variable) or by reference (& - an alias, callee can modify, no copy cost). Default arguments let calls omit trailing parameters (void log(string msg, int level = 1);). Function prototypes allow calling before definition, which is what makes classes and their methods orderable in any sequence.",
            ],
            bullets: [
              "if / else if / else: general selection; condition is any bool expression.",
              "switch: multi-way selection on integral values; break prevents fall-through; default catches the rest.",
              "while tests first (0+ runs); do-while tests last (1+ runs); for bundles init/condition/update.",
              "Range-based for iterates containers: for (int x : v) sum += x;",
              "break exits loop/switch; continue skips an iteration; return exits the function; goto is discouraged.",
              "Pass by value copies the argument; pass by reference (&) aliases it and allows modification.",
              "Default arguments must be trailing; prototypes let functions be called before their definition.",
            ],
            codeExample: {
              language: "cpp",
              caption: "Selection, iteration, pass-by-reference and a default argument together.",
              code: `#include <iostream>
using namespace std;

void grade(int marks, char g = 'P') {   // default argument
    if (marks >= 60) g = 'A';
    else if (marks >= 40) g = 'B';
    cout << "Grade: " << g << "\\n";
}

int main() {
    int m[] = {75, 30};
    for (int i = 0; i < 2; i++) grade(m[i]);
    // Grade: A   Grade: P
    int x = 4;
    int& r = x;                          // reference alias
    r = r * 2;
    cout << x << "\\n";                   // 8 - caller's x changed
    return 0;
}`,
            },
            diagram: {
              kind: "fork",
              title: "Choosing the right control structure",
              caption: "Each need selects a different structure - and one of them you should avoid.",
              start: "What does this step of the algorithm need?",
              branches: [
                { label: "choose among paths", outcome: "if / else for two-way, switch for multi-way on integral values", good: true },
                { label: "repeat while a condition holds", outcome: "for (counted) or while (condition-tested) loop", good: true },
                { label: "run at least once (menus)", outcome: "do-while tests after the body", good: true },
                { label: "jump anywhere", outcome: "goto - unstructured, harms readability; use loops and functions instead", good: false },
              ],
            },
            keyTerms: [
              { term: "Fall-through", definition: "switch behaviour where execution continues into the next case when break is missing." },
              { term: "Pass by reference", definition: "Argument passing where the callee receives an alias and can modify the caller's variable." },
              { term: "Default argument", definition: "A trailing parameter with a preset value used when the call omits it." },
              { term: "Prototype", definition: "A function declaration giving signature only, enabling calls before the definition appears." },
            ],
            callout: {
              type: "warning",
              title: "switch needs break on every case",
              body: "The most common control-flow bug in student code: forgetting break so every case after the matching one also executes. In any exam program with a switch, write the break before moving to the next case - examiners deduct for fall-through even when the final output looks right.",
            },
            examQuestions: [
              {
                q: "Explain the selection, iteration and jump control structures of C++ with syntax and one example each. Why is the goto statement discouraged?",
                marks: 7,
                outline: [
                  "if / else if / else syntax + example",
                  "switch with case/break/default; explain fall-through without break",
                  "while (pre-tested) vs do-while (post-tested, runs at least once)",
                  "for loop header: init; condition; update; range-based for mention",
                  "break vs continue with one-line examples",
                  "return; goto jumps to a label",
                  "goto condemned: destroys structured single-entry single-exit flow; use loops/functions",
                ],
              },
              {
                q: "Differentiate between while and do-while loops with one example.",
                marks: 2,
              },
              {
                q: "Explain pass by value and pass by reference with a two-line example.",
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
      title: "Classes & Objects in Depth",
      summary:
        "The working machinery of the class: member functions inside and outside the class, inline functions, static members, friends, and the full object lifecycle through constructors (default, parameterized, copy) and destructors.",
      chapter: {
        number: "02",
        title: "Classes, Objects, Friends & Object Lifetime",
        intro:
          "Unit II turns the OOP vocabulary into working C++: how classes and member functions are declared and defined, when the compiler inlines code, how static members are shared across all objects, how friends legitimately break the wall, and how constructors and destructors manage every object from birth to death.",
        inOneBreath:
          "A class declares members under private/protected/public; member functions may be defined inside (inline by default) or outside with the scope-resolution operator ClassName::func. static data members exist once per class and must be defined outside; static functions have no this pointer and touch only static members. Friends are declared inside a class yet are not members - they reach private data by invitation. Constructors run automatically at object birth (default, parameterized, copy, dynamic forms) and destructors run automatically at death, in reverse construction order; neither can be overloaded as to return type and neither returns a value.",
        sections: [
          {
            number: "2.1",
            title: "Defining classes and access specifiers in practice",
            body: [
              "A class definition begins with the keyword class, a name in PascalCase by convention, and a body of member declarations grouped under three access labels: private, protected, public. Members are private by default, which makes the safe pattern automatic: declare data first, then open a public section for the interface. The definition ends with a semicolon after the closing brace - class Box { ... };",
              "Private is the default for a reason: it makes data hiding the path of least resistance. Every data member you forget to protect stays invisible to outside code, so bugs of accidental modification become compile errors rather than runtime mysteries. Helper functions used only by the public methods also belong here - shrinking the public interface is a design goal, not an accident.",
              "A class may contain data members of built-in types, objects of other classes (composition), pointers, and even a static member - but not an object of its own class (that would be infinitely recursive; a pointer or reference to its own class is fine). Member functions may be declared in the class and defined later, and member data may be initialised through constructors (Unit 2.7) rather than at the declaration site.",
              "Objects of the class are created exactly like built-in variables: Box b1; Box boxes[10]; Box* p = new Box;. Each object gets its own copy of every non-static data member, laid out in memory roughly in declaration order. Two different objects share the same member-function code - the functions are stored once, and the hidden this pointer tells each call which object's data to touch.",
            ],
            bullets: [
              "Syntax: class Name { private: ... protected: ... public: ... }; - semicolon after the closing brace is mandatory.",
              "Members are private by default; keep data private, publish a minimal public interface.",
              "public = interface for all code; protected = also visible to derived classes; private = this class and friends only.",
              "A class cannot contain an object of its own type; pointers/references to its own type are allowed.",
              "Each object holds its own copy of non-static data members; member functions are shared code, one copy per class.",
              "Objects are declared like variables: Box b; arrays of objects; dynamic objects with new Box.",
              "The hidden this pointer inside every non-static member function addresses the current object.",
            ],
            codeExample: {
              language: "cpp",
              caption: "A class with private data, public interface, and two independent objects.",
              code: `#include <iostream>
using namespace std;

class Box {
    double length;               // private by default
    double width;
public:                          // interface begins
    void set(double l, double w) { length = l; width = w; }
    double area() { return length * width; }
};                               // <-- semicolon required

int main() {
    Box b1, b2;                  // two objects, two states
    b1.set(3.0, 4.0);
    b2.set(5.0, 2.0);
    cout << b1.area() << " " << b2.area();  // 12 10
    return 0;
}`,
            },
            diagram: {
              kind: "layers",
              title: "The three access zones of a class",
              caption: "Read a class from the outside in: public interface, protected bridge, private core.",
              layers: [
                { label: "public", note: "interface every caller may use - methods and operators" },
                { label: "protected", note: "visible to this class and derived classes - the inheritance bridge" },
                { label: "private", note: "hidden data and helper methods - this class and friends only" },
              ],
            },
            keyTerms: [
              { term: "Access specifier", definition: "Label (private, protected, public) controlling who may reference a group of members." },
              { term: "Member function", definition: "A function declared inside a class; operates on the class's data through this." },
              { term: "this pointer", definition: "Implicit pointer inside non-static member functions holding the address of the current object." },
              { term: "Composition", definition: "A class containing objects of other classes as its data members (has-a relationship)." },
            ],
            callout: {
              type: "exam",
              title: "Draw the class box in every answer",
              body: "Whenever a question says \"write a class\", surround the definition with a labelled rectangle: private zone on the left/top, public zone on the right/bottom. Examiners award presentation marks for a clear access-zone layout, and it forces you to keep data private and the interface public in your own code too.",
            },
            examQuestions: [
              {
                q: "Write the general syntax of a class in C++. Explain the role of each access specifier with a small example class.",
                marks: 7,
                outline: [
                  "General syntax with class keyword, body, three access labels, trailing semicolon",
                  "private: default access; this class + friends only",
                  "protected: this class + derived classes",
                  "public: interface for all code",
                  "struct vs class default difference",
                  "Example class: private data, public set/show methods",
                  "Note: each object has its own data copy; functions shared via this",
                ],
              },
              {
                q: "Can a class contain an object of its own type? Justify.",
                marks: 2,
              },
              {
                q: "What is the difference between a class and a structure in C++?",
                marks: 2,
              },
            ],
          },
          {
            number: "2.2",
            title: "Objects: declaration, member access and memory",
            body: [
              "Declaring ClassName obj; creates an object: memory is reserved for one copy of every non-static data member and the constructor runs to initialise it. Member access uses the dot operator (obj.member) for objects, the arrow operator (ptr->member) for pointers to objects, and the member-of-object shorthand with references identically to dots. Attempting to reach a private member through any of these is a compile error - access rules do not relax for pointers.",
              "Memory layout: an object's size is roughly the sum of its non-static data members (plus possible padding for alignment). Member functions contribute nothing to object size - there is exactly one copy of each function in the executable, shared by all objects. An empty class still has size 1 (so distinct objects get distinct addresses), a detail examiners occasionally spring as a one-mark question.",
              "Objects may be grouped and allocated in all the usual ways. Arrays of objects (Box boxes[5];) construct each element in order; if the class has only a default constructor this is automatic. Dynamic objects (Box* p = new Box;) live on the heap and must be released with delete p;, which also runs the destructor. Object assignment (b2 = b1;) copies member by member by default - fine for simple classes, dangerous when the class manages its own resources (the shallow-copy issue behind copy constructors in 2.7).",
              "Objects as function arguments follow the same rules as any type: passed by value they are copied (constructor and destructor both run), passed by reference they are aliased (no copy, callee may modify), passed as const reference they are read-only aliases. Returning an object by value likewise constructs a temporary. Knowing which of these copies occur is exactly what separates a 7-mark object-lifecycle answer from a 3-mark one.",
            ],
            bullets: [
              "obj.member (dot) for objects; ptr->member (arrow) for pointers; access rules identical for both.",
              "Object size ~ sum of non-static data members (+ alignment padding); member functions are stored once, not per object.",
              "sizeof(empty class) is 1 so two objects never share an address.",
              "Arrays of objects construct each element; dynamic objects via new must be matched with delete.",
              "Assignment b2 = b1 copies members one by one (default shallow copy).",
              "Pass by value copies the object (constructor + destructor run); pass by const reference avoids the copy.",
              "Object scope follows normal block rules: locals die at block exit, destructors run automatically.",
            ],
            codeExample: {
              language: "cpp",
              caption: "Dot vs arrow access, an array of objects, and sizeof evidence.",
              code: `#include <iostream>
using namespace std;

class Pt {
    int x, y;
public:
    void set(int a, int b) { x = a; y = b; }
    int sum() { return x + y; }
};

int main() {
    Pt a, arr[3];            // one object + array of 3
    Pt* p = &a;
    p->set(2, 3);            // arrow access
    cout << a.sum() << "\\n"; // 5 (dot access)
    for (int i = 0; i < 3; i++) arr[i].set(i, i * 10);
    cout << arr[2].sum() << "\\n";      // 22
    cout << sizeof(Pt) << "\\n";        // 8 - two ints, no functions
    return 0;
}`,
            },
            diagram: {
              kind: "pipeline",
              title: "Life of an object",
              caption: "From declaration to destruction, every stage is automatic - that is the point.",
              stages: [
                { label: "Declaration", note: "memory reserved for data members" },
                { label: "Construction", note: "constructor initialises the state" },
                { label: "Use", note: "messages via dot/arrow operators" },
                { label: "Destruction", note: "destructor runs at scope exit or delete" },
                { label: "Memory released", note: "stack pops or heap block returns" },
              ],
            },
            keyTerms: [
              { term: "Dot operator .", definition: "Accesses members of an object directly: obj.show()." },
              { term: "Arrow operator ->", definition: "Accesses members through a pointer: ptr->show(), equivalent to (*ptr).show()." },
              { term: "Array of objects", definition: "Box boxes[5]; constructs five objects, each with its own state." },
              { term: "Dynamic object", definition: "Object created on the heap with new and released explicitly with delete." },
            ],
            callout: {
              type: "tip",
              title: "obj.member vs ptr->member in one line",
              body: "Write the identity ptr->member == (*ptr).member in your answer. It shows you understand the arrow is pure notation over dereference-then-dot, and it is exactly the line the 2-mark version of this question is checking for.",
            },
            examQuestions: [
              {
                q: "Explain how objects are declared, accessed and stored in memory in C++. Contrast member access through objects and through pointers, and state what sizeof of a class measures.",
                marks: 7,
                outline: [
                  "Declaration ClassName obj; constructor runs; per-object data copies",
                  "Dot operator for objects with example",
                  "Arrow operator for pointers; ptr->m == (*ptr).m",
                  "Memory: size ~ non-static members + padding; functions stored once",
                  "Empty class has size 1 - explain why",
                  "Arrays of objects and dynamic objects (new/delete)",
                  "Pass by value vs reference - where copies and destructor calls happen",
                ],
              },
              {
                q: "What does sizeof return for an empty class and why?",
                marks: 2,
              },
              {
                q: "Rewrite (*p).show() using the arrow operator.",
                marks: 2,
              },
            ],
          },
          {
            number: "2.3",
            title: "Defining member functions: inside vs outside the class",
            body: [
              "C++ offers two placements for a member function's body. Defined inside the class, the function is a candidate for inlining automatically - the compiler may replace the call with the body to remove call overhead. The code is compact and the intent obvious, which is why small accessors (get, set, isEmpty) almost always live inside the class.",
              "Defined outside the class, the function keeps its declaration inside but its body appears after the class, and the scope-resolution operator ties them together: ReturnType ClassName::functionName(parameters) { ... }. The ClassName:: prefix is not decoration - it puts the definition inside the class's scope, giving the body direct access to private members without any qualification. This outside style is preferred for larger functions: it keeps the class declaration a readable table of contents.",
              "The two styles can be mixed freely within one class. A common professional layout is: class declaration in a header with all bodies outside (in a .cpp), tiny one-line accessors inline inside. Examiners often ask \"define member function outside the class using scope resolution operator\" - they want the ClassName:: syntax plus a sentence on why it is used (separation of interface from implementation, cleaner large classes).",
              "One subtlety: functions defined inside the class are treated as inline functions (requests, not commands), while outside definitions are ordinary functions unless the keyword inline is added at the definition. Also, an outside definition can only appear once per program (it is a definition, not a declaration) - redefining it in another translation unit is a linker error.",
            ],
            bullets: [
              "Inside definition: body written in the class - treated as an inline request.",
              "Outside definition: declare inside, define below as ReturnType ClassName::func(...) { ... }",
              "ClassName:: places the definition in the class scope - private members are directly usable.",
              "Outside style separates interface from implementation; recommended for large functions.",
              "Inside style is convenient for small accessors that benefit from inlining.",
              "inline keyword can be added to an outside definition to request inlining there too.",
              "Each outside definition must appear exactly once in the whole program (one-definition rule).",
            ],
            codeExample: {
              language: "cpp",
              caption: "Both styles in one class: inline inside, scope-resolution outside.",
              code: `#include <iostream>
using namespace std;

class Rectangle {
    double l, w;
public:
    void set(double a, double b);          // declaration only
    double area() { return l * w; }        // defined inside (inline)
    void show();
};

void Rectangle::set(double a, double b) {  // outside definition
    l = a; w = b;                          // private members: direct
}
void Rectangle::show() {
    cout << "area = " << area() << "\\n";
}

int main() {
    Rectangle r;
    r.set(4, 5);
    r.show();                              // area = 20
    return 0;
}`,
            },
            diagram: {
              kind: "compare",
              title: "Member function: defined inside vs outside the class",
              caption: "Same access rights, different treatment by the compiler.",
              left: {
                heading: "Inside the class",
                items: [
                  "Body written within the class body",
                  "Automatically an inline request",
                  "Compact for tiny functions",
                  "Class declaration grows long",
                  "No scope-resolution operator needed",
                ],
              },
              right: {
                heading: "Outside the class (ClassName::)",
                items: [
                  "Declared inside, defined after the class",
                  "Ordinary function unless marked inline",
                  "Keeps the class declaration readable",
                  "Separates interface from implementation",
                  "Requires ReturnType ClassName::func syntax",
                ],
              },
            },
            keyTerms: [
              { term: "Scope resolution operator ::", definition: "Qualifies a name with its class or namespace scope, e.g. Rectangle::set." },
              { term: "Inline function", definition: "Function the compiler may expand at the call site to avoid call overhead." },
              { term: "One-definition rule", definition: "A function or variable may have exactly one definition in the entire program." },
            ],
            callout: {
              type: "exam",
              title: "Never forget the ClassName:: prefix",
              body: "Writing void set(double a) { ... } outside the class without Rectangle:: makes it a free function with no access to private members - the compiler says it cannot access them. In any \"define member function outside the class\" question, the scope-resolution operator is the whole point; a missing ClassName:: is an automatic mark loss.",
            },
            examQuestions: [
              {
                q: "How are member functions defined inside and outside a class? Compare the two approaches and explain the role of the scope resolution operator with an example program.",
                marks: 7,
                outline: [
                  "Inside definition syntax; automatically treated as inline",
                  "Outside definition: declaration inside, ReturnType ClassName::func outside",
                  "ClassName:: puts the body in class scope -> private members directly accessible",
                  "Interface/implementation separation benefit",
                  "Inline keyword on outside definitions",
                  "Complete example: class with one function each way",
                  "One-definition rule note for multi-file programs",
                ],
              },
              {
                q: "What happens if you omit the class name while defining a member function outside the class?",
                marks: 2,
              },
              {
                q: "Which functions are automatically inline candidates when defined inside a class?",
                marks: 2,
              },
            ],
          },
          {
            number: "2.4",
            title: "Inline functions and the scope resolution operator",
            body: [
              "An inline function asks the compiler to substitute the function's body directly at each call site, eliminating the call, the stack frame and the return jump - trading code size for speed. Syntax: prefix the definition with the keyword inline (int inline square(int x) { return x * x; }) or simply define the function inside the class body.",
              "Inlining is a request, not a command. The compiler refuses to inline (silently making the function ordinary) when the body contains loops, switch or goto, when it is recursive, when it is too large, or when taking the function's address forces a real body to exist. This is why inline suits small, hot, leaf functions - accessors, arithmetic helpers - and why a 50-line function marked inline gains nothing.",
              "The scope resolution operator :: has a second identity beyond classes. In its unary form it reaches the global scope: ::count refers to the global variable count even when a local variable of the same name shadows it. In its binary (qualified) form it names a scope: ClassName::member for class members and Namespace::name for namespace members, which is exactly how std::cout reaches the standard namespace.",
              "Inline functions are also the modern replacement for parameterised macros (#define SQR(x) ((x)*(x))). Macros are text substitutions with no type checking and classic bugs (SQR(a+1) expands wrongly if parentheses slip); inline functions are real functions with types, evaluated once, debuggable. When a question pairs \"define inline function\", adding the macro comparison earns the evaluation marks.",
            ],
            bullets: [
              "inline keyword (or in-class definition) requests body substitution at call sites: no call overhead.",
              "Benefits: speed for small functions; no stack frame, no jump, no return overhead.",
              "Compiler may refuse: loops, switch, goto, recursion, large bodies, address taken.",
              "Trade-off: every call site gets a copy - code size can grow (space vs speed).",
              "Unary :: reaches the global scope past a shadowing local (::count).",
              "Binary :: qualifies class members (Rectangle::set) and namespace members (std::cout).",
              "Inline functions beat #define macros: type-checked, single evaluation, debuggable.",
            ],
            codeExample: {
              language: "cpp",
              caption: "Inline vs macro: the classic SQR(a+1) bug the macro gets wrong.",
              code: `#include <iostream>
using namespace std;
#define MSQR(x) x*x                 // unsafe macro

inline int isqr(int x) { return x * x; }   // safe inline

int g = 100;                        // global

int main() {
    int a = 2;
    cout << isqr(a + 1) << "\\n";    // 9  - correct
    cout << MSQR(a + 1) << "\\n";    // 5! (a+1*a+1)
    int g = 5;                      // shadows the global
    cout << ::g << "\\n";            // 100 - unary :: escapes
    return 0;
}`,
            },
            diagram: {
              kind: "fork",
              title: "What the compiler does with an inline request",
              caption: "The keyword is a request; the compiler's heuristics decide the outcome.",
              start: "Compiler meets inline function f",
              branches: [
                { label: "body is small and loop-free", outcome: "expanded at each call site - zero call overhead", good: true },
                { label: "body has loops / switch / is recursive", outcome: "request silently ignored - becomes an ordinary call", good: false },
                { label: "function address is taken", outcome: "a real out-of-line body must exist anyway", good: false },
              ],
            },
            keyTerms: [
              { term: "inline keyword", definition: "Function specifier requesting expansion of the body at each call site." },
              { term: "Unary scope resolution ::", definition: "Prefix operator accessing the global scope: ::x." },
              { term: "Binary scope resolution ::", definition: "Class or namespace qualifier: ClassName::member, Namespace::name." },
              { term: "Macro", definition: "#define text substitution performed by the preprocessor without type checking." },
            ],
            callout: {
              type: "tip",
              title: "State that inline is a request",
              body: "Answers that say \"the compiler inlines the function\" lose precision; answers that say \"the compiler may inline it and falls back to an ordinary call when the body is complex\" do not. One sentence - \"inline is a request, not a command\" - is worth a mark in almost every inline question.",
            },
            examQuestions: [
              {
                q: "What is an inline function? Explain its advantages and limitations, and compare it with macros. Illustrate the unary and binary uses of the scope resolution operator.",
                marks: 7,
                outline: [
                  "Definition: inline requests body substitution at call sites",
                  "Advantages: no call overhead, faster for small functions, type-safe",
                  "Limitations: ignored for loops/switch/recursion/large bodies; code size grows",
                  "Macro comparison: MSQR(a+1) expansion bug vs inline correctness",
                  "Unary :: : ::count reaches global past a shadowing local",
                  "Binary :: : Rectangle::member and std::cout examples",
                  "Short program demonstrating isqr vs MSQR outputs",
                ],
              },
              {
                q: "Write the syntax of an inline function and state two conditions under which the compiler may refuse to inline.",
                marks: 2,
              },
              {
                q: "What does ::g mean when a local variable g also exists?",
                marks: 2,
              },
            ],
          },
          {
            number: "2.5",
            title: "Static data members and static member functions",
            body: [
              "A static data member exists once for the whole class no matter how many objects are created - all objects share the same variable. It is declared inside the class with the keyword static and must be defined exactly once outside the class: int Counter::count = 0; (definition, not the declaration, allocates storage). Typical uses: object counters, shared configuration, common lookup tables.",
              "Because the member is shared, it can record facts about the population of objects. The canonical example is a constructor incrementing a static counter and the destructor decrementing it, giving a live count of existing objects. Access does not even require an object: Counter::count works through the class name directly, though obj.count is also legal syntax.",
              "Static member functions complement the shared data. They are declared static inside the class and, crucially, have no this pointer - they are not attached to any object. Consequences follow mechanically: they may be called through the class name (Counter::getCount()) even before any object exists; they may access only static data members and other static functions; they cannot be declared const or virtual because there is no object state to protect or dispatch.",
              "The examinable pair is \"static vs normal member\". Normal data: one copy per object, initialised by constructors. Static data: one copy per class, initialised at its outside definition, alive for the whole program. Normal functions: need an object, receive this. Static functions: need no object, receive no this, touch only static members. Write that four-line table and the 7-mark question is essentially complete.",
            ],
            bullets: [
              "static data member: declared in class with static, defined and initialised once outside: int Counter::count = 0;",
              "All objects share the single copy; it exists even when zero objects do.",
              "Accessible via class name Counter::count or through any object.",
              "Classic use: constructor/destructor maintaining a live object count.",
              "static member functions have no this pointer and may be called without an object.",
              "Static functions can use only static data and static functions; cannot be const or virtual.",
              "Storage: static members are not part of any object - they never affect sizeof an object.",
            ],
            codeExample: {
              language: "cpp",
              caption: "A self-counting class: shared counter updated by every constructor.",
              code: `#include <iostream>
using namespace std;

class Counter {
    int id;                         // per object
    static int live;                // shared by all
public:
    Counter() { ++live; id = live; }
    ~Counter() { --live; }
    static int getLive() {          // no this pointer
        return live;                // static data only
    }
};

int Counter::live = 0;              // definition outside

int main() {
    Counter a, b;
    cout << Counter::getLive() << "\\n";  // 2
    { Counter c; }
    cout << Counter::getLive() << "\\n";  // 1 (c destroyed)
    return 0;
}`,
            },
            diagram: {
              kind: "flow",
              title: "How one static member serves every object",
              caption: "Declaration, definition, and two independent access routes.",
              steps: [
                { label: "Declared in class", note: "static int count; - no memory yet" },
                { label: "Defined outside", note: "int Counter::count = 0; - storage allocated once" },
                { label: "Shared by all objects", note: "every constructor sees the same variable" },
                { label: "Accessed by class name", note: "Counter::count works with zero objects" },
              ],
            },
            keyTerms: [
              { term: "Static data member", definition: "A class variable with exactly one copy shared by all objects, defined outside the class." },
              { term: "Static member function", definition: "A function with no this pointer, callable through the class name, limited to static members." },
              { term: "Object counter idiom", definition: "Static count incremented in the constructor and decremented in the destructor." },
            ],
            callout: {
              type: "warning",
              title: "Declaring is not defining",
              body: "Writing static int count; inside the class only declares it - the linker error 'undefined reference to Counter::count' means you forgot the outside definition int Counter::count = 0;. This is the single most common static-member bug in exam programs; state the two-step rule explicitly in your answer.",
            },
            examQuestions: [
              {
                q: "What are static data members and static member functions? Explain their properties, how they are declared and defined, and how they differ from normal members. Illustrate with an object-counting program.",
                marks: 7,
                outline: [
                  "Static data: one copy per class shared by all objects",
                  "Declaration inside class + mandatory outside definition with ::",
                  "Exists even with zero objects; accessible as ClassName::member",
                  "Static functions: no this, callable without object, only static members",
                  "Cannot be const or virtual - justify via absence of this",
                  "Program: Counter with static live count updated by constructor/destructor",
                  "Contrast table: normal vs static members",
                ],
              },
              {
                q: "Why can a static member function not access non-static data members?",
                marks: 3,
              },
              {
                q: "Where and how is a static data member initialised?",
                marks: 2,
              },
            ],
          },
          {
            number: "2.6",
            title: "Friend functions and friend classes",
            body: [
              "Encapsulation draws a wall around private data, and friend is the official, controlled way through it. A friend function is declared inside a class with the keyword friend but is not a member: it has no this, is not called with the dot operator, and yet is granted full access to the private and protected members of that class. Syntax: friend ReturnType name(args); inside the class - the declaration position (under any access label) is irrelevant since friendship is not an access member.",
              "Friendship is granted, not taken, and it is neither inherited nor transitive. The class itself decides who its friends are; if B is a friend of A, B's friends gain nothing, and a class derived from B is not thereby a friend either. These three one-liners - granted not taken, not inherited, not transitive - are the standard marks in any friendship question.",
              "The legitimate uses are operations that need private data of two classes, or symmetric operator overloads. A classic: a function compare(A, B) that must read internals of both classes; or a binary operator+ declared as a friend so both operands are ordinary parameters and expressions like 5 + obj (object on the right only) work naturally. Friend classes are coarser: declaring friend class B lets every member function of B touch A's privates - useful for tightly coupled pairs like a container and its iterator.",
              "Friendship must stay rare: each friend is a hole in the capsule, coupling the friend's code to the class's private representation. The design rule worth stating in answers: use member functions when the operation conceptually belongs to one object; use a friend only when a non-member genuinely needs private access and making it a member would be artificial (symmetric operators are the accepted example).",
            ],
            bullets: [
              "friend declaration inside the class grants a non-member access to private/protected members.",
              "A friend is not a member: no this, not called with obj., not inherited, not virtual.",
              "Friendship is given by the class itself - granted, not taken.",
              "Not transitive and not inherited: friend-of-friend gains nothing.",
              "Typical uses: functions touching two classes' internals; symmetric operator overloads like 5 + obj.",
              "friend class B opens all of B's member functions to A's private data (container/iterator pairs).",
              "Keep friend use minimal - every friend weakens encapsulation.",
            ],
            codeExample: {
              language: "cpp",
              caption: "A friend function reading two classes' private data.",
              code: `#include <iostream>
using namespace std;

class B;                          // forward declaration

class A {
    int x;
public:
    A(int v) : x(v) {}
    friend void mix(const A&, const B&);   // grant
};

class B {
    int y;
public:
    B(int v) : y(v) {}
    friend void mix(const A&, const B&);   // grant
};

void mix(const A& a, const B& b) {  // NOT a member
    cout << a.x + b.y << "\\n";      // private access: ok
}

int main() {
    A a(3); B b(4);
    mix(a, b);                      // OUTPUT: 7
    return 0;
}`,
            },
            diagram: {
              kind: "fork",
              title: "Who may touch the private members?",
              caption: "Encapsulation admits exactly three kinds of code - and one of them by written invitation.",
              start: "Code tries to read a private member",
              branches: [
                { label: "member function of the class", outcome: "allowed - this points at the object", good: true },
                { label: "declared friend", outcome: "allowed - friendship granted inside the class", good: true },
                { label: "anyone else", outcome: "compile error: member is private", good: false },
              ],
            },
            keyTerms: [
              { term: "Friend function", definition: "Non-member function granted access to a class's private and protected members." },
              { term: "Friend class", definition: "Class all of whose member functions are friends of the granting class." },
              { term: "Forward declaration", definition: "class B; - announces a class name before its full definition so it can be referenced." },
            ],
            callout: {
              type: "exam",
              title: "Recite the three friendship laws",
              body: "Granted not taken, not inherited, not transitive. Almost every 7-mark friend question has one mark reserved for these properties; list them as bullet lines right after the definition and before your example program.",
            },
            examQuestions: [
              {
                q: "What is a friend function? Explain its characteristics and necessity, distinguish it from a member function, and write a program where a friend accesses the private data of two classes.",
                marks: 7,
                outline: [
                  "Definition: non-member granted private access by friend declaration inside the class",
                  "Characteristics: no this, not called via object, not inherited, not transitive, not virtual",
                  "Friendship granted by the class, not stolen",
                  "Necessity: operations needing internals of two classes; symmetric operators",
                  "Member vs friend contrast (calling convention, membership)",
                  "Program: classes A and B, friend mix(a, b) summing privates",
                  "Caveat: friendship weakens encapsulation - use sparingly",
                ],
              },
              {
                q: "State the three properties that friendship in C++ does NOT have.",
                marks: 2,
              },
              {
                q: "How is a friend function invoked? Does it need an object?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.7",
            title: "Constructors: default, parameterized, copy and dynamic",
            body: [
              "A constructor is a special member function with the same name as the class and no return type - not even void. It runs automatically the moment an object is created, and its job is to bring every data member to a valid initial state. Because the compiler calls it, forgetting to initialise is no longer the object user's problem: the class itself guarantees birth-time validity.",
              "The default constructor takes no arguments (ClassName();) and is invoked by ClassName obj;. If you define no constructor at all, the compiler synthesises one that default-initialises members - numeric members become indeterminate unless the class provides defaults, which is why relying on the implicit constructor is risky. The parameterized constructor takes arguments (ClassName(double l, double w);) and is invoked with them: Box b(3, 4);. Defining any constructor stops the compiler from generating its implicit default one - provide both when both birth modes are needed (the classic two-constructor class).",
              "The copy constructor builds a new object as a copy of an existing one: ClassName(const ClassName& other). It runs in three situations: initialisation from another object (Box b2 = b1;), passing an object by value, and returning an object by value. The compiler-generated version copies member by member (shallow copy) - correct for simple classes but broken when members are pointers: two objects then share one buffer, and both destructors free it. Classes owning raw pointers must write their own deep-copy constructor - the single most examined constructor subtlety.",
              "A dynamic constructor allocates memory with new inside the constructor (this->str = new char[strlen(s)+1];) so each object owns sized storage that its destructor releases with delete[]. Initialiser lists (ClassName(double l) : length(l) { }) initialise members before the body runs, are required for const and reference members, and are marginally more efficient than assignment in the body - worth one line in any constructor answer.",
            ],
            bullets: [
              "Constructor: same name as the class, no return type, called automatically at object creation.",
              "Default constructor: no arguments; compiler's implicit version appears only if you define none.",
              "Parameterized: takes arguments - Box b(3, 4); supports constructor overloading (multiple forms).",
              "Copy constructor: ClassName(const ClassName&); runs on init-from-object, pass-by-value, return-by-value.",
              "Shallow copy (compiler default) shares pointed-to memory; deep copy must be hand-written for pointer members.",
              "Dynamic constructor: new inside the constructor, matching delete[] in the destructor.",
              "Member initialiser list : length(l) initialises before the body; required for const/reference members.",
            ],
            codeExample: {
              language: "cpp",
              caption: "Default, parameterized and copy constructors all in action.",
              code: `#include <iostream>
using namespace std;

class Box {
    double l, w;
public:
    Box() : l(1), w(1) { cout << "default\\n"; }
    Box(double a, double b) : l(a), w(b) { cout << "param\\n"; }
    Box(const Box& o) : l(o.l), w(o.w) { cout << "copy\\n"; }
    double area() { return l * w; }
};

void take(Box b) { cout << b.area() << "\\n"; }  // by value: copies

int main() {
    Box a;            // default
    Box b(3, 4);      // parameterized
    Box c = b;        // copy
    take(b);          // copy again
    return 0;         // OUTPUT lines: default param copy copy 12
}`,
            },
            diagram: {
              kind: "flow",
              title: "Which constructor runs?",
              caption: "The compiler matches the birth form of the object to the constructor signature.",
              steps: [
                { label: "Object declared", note: "Box a; Box b(3,4); Box c = b;" },
                { label: "Arguments inspected", note: "none / values / an existing object" },
                { label: "Matching constructor chosen", note: "default / parameterized / copy" },
                { label: "Initialiser list runs", note: "members initialised before the body" },
                { label: "Body executes", note: "object is ready to use" },
              ],
            },
            keyTerms: [
              { term: "Constructor", definition: "Special member with the class's name and no return type that initialises a new object automatically." },
              { term: "Default constructor", definition: "Constructor callable with no arguments." },
              { term: "Copy constructor", definition: "Constructor of the form ClassName(const ClassName&) that builds a new object from an existing one." },
              { term: "Deep copy", definition: "User-written copy that duplicates pointed-to data so objects do not share memory." },
              { term: "Initialiser list", definition: "Constructor syntax : member(value) initialising members before the constructor body runs." },
            ],
            callout: {
              type: "warning",
              title: "Define one constructor, lose the other",
              body: "Defining Box(double, double) removes the compiler's implicit default constructor, so Box b; no longer compiles. Whenever a class needs both birth modes, write both constructors. This trap appears in nearly every constructor question - mention it unprompted.",
            },
            examQuestions: [
              {
                q: "What is a constructor? Explain default, parameterized and copy constructors with syntax and a program showing each. When does the copy constructor get invoked?",
                marks: 7,
                outline: [
                  "Definition: class-named special function, no return type, auto-called at creation",
                  "Default constructor syntax and compiler-generated fallback rule",
                  "Parameterized constructor syntax; constructor overloading",
                  "Copy constructor signature ClassName(const ClassName&)",
                  "Three copy-constructor triggers: init-from-object, pass-by-value, return-by-value",
                  "Shallow vs deep copy and the pointer-member danger",
                  "Program with all three constructors printing which runs",
                ],
              },
              {
                q: "Why must a class owning a raw pointer define its own copy constructor?",
                marks: 3,
              },
              {
                q: "What is a member initialiser list and when is it mandatory?",
                marks: 2,
              },
            ],
          },
          {
            number: "2.8",
            title: "Destructors and object lifetime",
            body: [
              "A destructor is the mirror of the constructor: same name as the class prefixed with a tilde (~Box()), takes no arguments, returns nothing, and runs automatically when an object dies. There can be exactly one destructor per class - it cannot be overloaded - and it cannot take parameters, which is also why it cannot be called with arguments. Its mandate is cleanup: release memory the object allocated, close files and sockets, flush buffers.",
              "Destruction is automatic and order-reversed. Objects in a scope are destroyed in the reverse order of their construction: the last constructed dies first. Locals die at block exit; temporaries die at the end of the full expression that created them; static and global objects die at program end in reverse order; heap objects die only when delete (or delete[]) executes - forgetting delete leaks the memory and never runs the destructor.",
              "The destructor is where the dynamic constructor's promise is kept. A class that allocated char* str = new char[...] in its constructor writes ~String() { delete[] str; } so every death releases its own buffer. Miss the destructor and the program leaks; call delete on a buffer two objects share (the shallow-copy trap) and the program corrupts the heap. Constructor allocates, destructor releases - a pairing often called RAII, the foundation of resource-safe C++.",
              "One forward pointer belongs in every destructor answer: virtual destructors. When deleting a derived object through a base-class pointer, the destructor must be declared virtual, otherwise only the base destructor runs and the derived part is leaked (undefined behaviour). State the one-line rule now - Unit IV returns to it with the full polymorphism machinery.",
            ],
            bullets: [
              "Destructor syntax ~ClassName(); no arguments, no return type, exactly one per class.",
              "Called automatically: scope exit for locals, program end for statics, delete for heap objects.",
              "Destruction order is reverse of construction order within a scope.",
              "Primary job: release resources - free memory, close files, flush buffers.",
              "Forgetting delete leaks memory and skips the destructor; double delete corrupts the heap.",
              "Constructor allocates / destructor releases (RAII pairing).",
              "Deleting a derived object via a base pointer requires a virtual destructor.",
            ],
            codeExample: {
              language: "cpp",
              caption: "Reverse-order destruction and the RAII pairing of new/delete.",
              code: `#include <iostream>
#include <cstring>
using namespace std;

class String {
    char* data;
public:
    String(const char* s) {                    // dynamic constructor
        data = new char[strlen(s) + 1];
        strcpy(data, s);
        cout << "built " << data << "\\n";
    }
    ~String() {                                // releases what was taken
        cout << "freed " << data << "\\n";
        delete[] data;
    }
};

int main() {
    String a("first");
    { String b("second"); }   // block: b dies first
    cout << "end of main\\n";
    return 0;
}`,
            },
            diagram: {
              kind: "compare",
              title: "Constructor vs destructor",
              caption: "Two automatic bookends of every object's life.",
              left: {
                heading: "Constructor",
                items: [
                  "Same name as the class",
                  "Runs at object creation",
                  "Can be overloaded (many forms)",
                  "Can take arguments",
                  "Acquires and initialises resources",
                ],
              },
              right: {
                heading: "Destructor",
                items: [
                  "Tilde-prefixed name ~Class()",
                  "Runs at object death",
                  "Cannot be overloaded (exactly one)",
                  "Takes no arguments, returns nothing",
                  "Releases resources (delete, close, flush)",
                ],
              },
            },
            keyTerms: [
              { term: "Destructor", definition: "Special member ~ClassName() invoked automatically to clean up a dying object." },
              { term: "RAII", definition: "Resource Acquisition Is Initialisation: acquire in constructor, release in destructor." },
              { term: "Memory leak", definition: "Heap memory whose last pointer is lost before delete - the destructor never runs." },
              { term: "Virtual destructor", definition: "Destructor declared virtual so delete via a base pointer destroys the full derived object." },
            ],
            callout: {
              type: "exam",
              title: "Predict the destruction order out loud",
              body: "Output-prediction questions pair constructors and destructors deliberately. The rule: construction top-to-bottom, destruction bottom-to-top within a scope. Annotate each object's birth and death line in the margin before writing the final output sequence - it turns a guessing question into arithmetic.",
            },
            examQuestions: [
              {
                q: "What is a destructor? Explain its characteristics, when it is invoked, and the order of destruction of objects. Write a program demonstrating constructor/destructor pairing and reverse-order destruction.",
                marks: 7,
                outline: [
                  "Definition: ~ClassName(), automatic cleanup special member",
                  "Characteristics: no args, no return, one per class, cannot be overloaded",
                  "Triggers: scope exit, program end, delete",
                  "Reverse construction order within a scope",
                  "Role: delete[] allocated memory, close files (RAII)",
                  "Program with two objects, nested block, printed birth/death lines",
                  "Virtual destructor note for base-pointer deletion",
                ],
              },
              {
                q: "Can a destructor take parameters or be overloaded? Justify.",
                marks: 2,
              },
              {
                q: "What happens if delete is never called on a heap object?",
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
      title: "Operator Overloading, Type Conversion & Inheritance",
      summary:
        "Teaching old operators new tricks: overload rules, unary/binary and special operators, friend-based overloads, the three routes of type conversion, and every inheritance form with visibility modes, virtual base classes and constructor order.",
      chapter: {
        number: "03",
        title: "Overloading Operators & Building Class Hierarchies",
        intro:
          "Unit III first extends the language - which operators can be overloaded, how unary/binary/special operators and friend overloads are written, and how conversions move values between basic and class types - then builds class hierarchies: derived-class syntax, the five inheritance forms, and the diamond problem solved by virtual base classes.",
        inOneBreath:
          "Overloading gives user types operator semantics via member functions operatorX() or friend functions; ::, ., .* and sizeof can never be overloaded, and at least one operand of an overloaded operator must be a class object. Type conversion runs three ways: basic-to-class by constructor, class-to-basic by a casting operator T(), and class-to-class by the target's constructor or the source's casting operator - never both for the same pair. Inheritance: class D : visibility B; public keeps status, protected demotes public to protected, private makes everything private. Five shapes of inheritance exist; multiple inheritance causes diamond ambiguity, cured by virtual base classes whose constructor runs first and once.",
        sections: [
          {
            number: "3.1",
            title: "Operator overloading: concept and rules",
            body: [
              "Operator overloading lets user-defined types use the operators C++ already knows: two Complex objects can be added with c1 + c2, compared with c1 < c2, streamed with cout << c. The compiler turns each such use into a call to a specially named function - operator+ for +, operator<< for << - and the programmer supplies that function's body. The result is code that reads like mathematics instead of c3 = c1.add(c2).",
              "Overloaded operators are implemented either as member functions (Complex operator+(const Complex& rhs) - the left operand is this) or as non-member/friend functions (operator+(const Complex& a, const Complex& b) - both operands are parameters). The friend form is needed when the left operand is not a class object (5.0 + c1) and for stream operators, where the left operand is ostream&. A good class overloads what is natural for its domain and stops there.",
              "The rules are strict. You may only overload existing operators - no inventing ** or $. You may not change an operator's arity (a binary + stays binary) or its precedence and associativity. At least one operand must be a user-defined type, so overloading int + int is impossible. Some operators cannot be overloaded at all: :: (scope resolution), . (member access), .* (member pointer access) and sizeof. Assignment (=), subscript ([]), call (()) and arrow (->) must be overloaded as member functions - friend versions of these are illegal.",
              "The design intent matters for marks: overloading should preserve intuitive meaning. Overloading + to subtract confuses every reader and is considered bad practice - state this in answers, since \"operator overloading should be used judiciously so that semantics remain obvious\" is a standard concluding line in 7-mark questions.",
            ],
            bullets: [
              "Overloading redefines an existing operator for a class type via operatorX functions.",
              "Two forms: member operatorX(rhs) with left operand = this, or friend operatorX(a, b).",
              "Cannot create new operators; cannot change arity, precedence or associativity.",
              "At least one operand must be a user-defined class (cannot overload 2 + 3).",
              "Never overloadable: ::, ., .*, sizeof.",
              "Must be members: =, [], (), ->.",
              "Overloads should keep intuitive semantics - readers trust familiar symbols.",
            ],
            codeExample: {
              language: "cpp",
              caption: "First taste: overloading + and == as member functions.",
              code: `#include <iostream>
using namespace std;

class Complex {
    double re, im;
public:
    Complex(double r = 0, double i = 0) : re(r), im(i) {}
    Complex operator+(const Complex& r) {      // this + r
        return Complex(re + r.re, im + r.im);
    }
    bool operator==(const Complex& r) {
        return re == r.re && im == r.im;
    }
    void show() { cout << re << " + " << im << "i\\n"; }
};

int main() {
    Complex a(3, 4), b(1, 2);
    Complex c = a + b;              // calls a.operator+(b)
    c.show();                       // 4 + 6i
    cout << (a == b) << "\\n";       // 0
    return 0;
}`,
            },
            diagram: {
              kind: "compare",
              title: "What you may and may not overload",
              caption: "Four hard prohibitions and one soft design rule.",
              left: {
                heading: "Can be overloaded",
                items: [
                  "Arithmetic + - * / %",
                  "Comparison < == > <= !=",
                  "Increment ++ -- (pre and post)",
                  "Subscript [], call (), arrow ->",
                  "Stream << >> as friends",
                ],
              },
              right: {
                heading: "Cannot be overloaded",
                items: [
                  "Scope resolution ::",
                  "Member access .",
                  "Member pointer access .*",
                  "sizeof",
                  "No new operators (no ** allowed)",
                ],
              },
            },
            keyTerms: [
              { term: "Operator overloading", definition: "Giving existing C++ operators class-specific meaning through operatorX functions." },
              { term: "operatorX function", definition: "The specially named function (operator+, operator<<) that implements an overloaded operator." },
              { term: "Arity", definition: "The number of operands an operator takes - overloading cannot change it." },
            ],
            callout: {
              type: "warning",
              title: "Four operators are untouchable",
              body: "::, ., .* and sizeof can never be overloaded, and =, [], (), -> must be members. RGPV frequently asks this as a 2-mark list; answering \"everything can be overloaded\" is an instant zero on that part. Memorise the two lists.",
            },
            examQuestions: [
              {
                q: "What is operator overloading? State its rules and restrictions, list the operators that cannot be overloaded and those that must be overloaded as member functions, and show a small class with one overloaded operator.",
                marks: 7,
                outline: [
                  "Definition: redefining operators for class types via operatorX",
                  "Syntax: member form vs friend form",
                  "Rule: only existing operators; no change of arity/precedence/associativity",
                  "Rule: at least one operand must be a user-defined type",
                  "Cannot overload :: . .* sizeof",
                  "Must be members: = [] () ->",
                  "Example: Complex operator+ with output 4 + 6i",
                ],
              },
              {
                q: "Name the four operators that cannot be overloaded in C++.",
                marks: 2,
              },
              {
                q: "Why must at least one operand of an overloaded operator be a class object?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.2",
            title: "Overloading unary and binary operators",
            body: [
              "A binary operator takes two operands. As a member function it receives one explicit parameter because the left operand is the object itself: Complex operator+(const Complex& r) computes this + r. As a friend it takes two parameters: friend Complex operator+(const Complex& a, const Complex& b). Inside the member version, r's privates are reachable directly because r is an object of the same class.",
              "A unary operator takes one operand, so the member version takes zero explicit parameters (the operand is this) and the friend version takes exactly one. The classic unary pair is the increment: prefix operator++() changes the object and returns it, while postfix operator++(int) - the int is a pure dummy used only to distinguish the two - saves a copy, increments, and returns the saved copy. Mixing up which version returns the old value is the most common exam mistake in this topic.",
              "Return types deserve attention. Arithmetic operators (+, -, *) should return new objects by value, because a + b must not modify its operands. Comparison operators return bool. The assignment operator returns Complex& (a reference to *this) so that chained assignments a = b = c keep working. The stream-insertion operator returns ostream& for the same chaining reason - a topic completed in 3.3.",
              "The standard worked example is the Complex class: c3 = c1 + c2, plus unary minus (-c1) flipping both components. Trace the calls explicitly in the answer: c1 + c2 compiles to c1.operator+(c2) (member) or operator+(c1, c2) (friend); -c1 compiles to c1.operator-(). Examiners reward the mapping from operator syntax to function-call syntax because it proves you know overloading is syntactic sugar, not magic.",
            ],
            bullets: [
              "Binary as member: one parameter (right operand); as friend: two parameters.",
              "Unary as member: no parameters; as friend: exactly one parameter.",
              "Postfix distinguisher: operator++(int) - the int argument is a dummy.",
              "Prefix ++ modifies and returns *this; postfix saves, modifies, returns the old copy.",
              "Arithmetic operators return new objects by value; comparisons return bool.",
              "operator= returns ClassName& to keep a = b = c chains working.",
              "Trace rule: a + b is a.operator+(b) for members or operator+(a, b) for friends.",
            ],
            codeExample: {
              language: "cpp",
              caption: "Binary +, unary minus, and the prefix/postfix ++ pair.",
              code: `#include <iostream>
using namespace std;

class Counter {
    int v;
public:
    Counter(int v = 0) : v(v) {}
    Counter operator+(const Counter& r) {          // binary
        return Counter(v + r.v);
    }
    Counter operator-() { return Counter(-v); }    // unary
    Counter& operator++() { ++v; return *this; }   // prefix
    Counter operator++(int) {                      // postfix
        Counter old(*this); ++v; return old;
    }
    void show() { cout << v << "\\n"; }
};

int main() {
    Counter a(3), b(4), c;
    c = a + b;  c.show();      // 7
    (-a).show();               // -3
    (a++).show();              // 3  (old value)
    (++a).show();              // 5
    return 0;
}`,
            },
            diagram: {
              kind: "flow",
              title: "How the compiler turns c1 + c2 into a function call",
              caption: "Overloading is syntactic sugar: every operator use is a hidden call.",
              steps: [
                { label: "Expression c1 + c2 seen", note: "at least one operand is a class object" },
                { label: "Candidate looked up", note: "c1.operator+(c2) or friend operator+(c1, c2)" },
                { label: "Best match selected", note: "parameter types decide the overload" },
                { label: "Function executes", note: "body computes the result" },
                { label: "Result returned by value", note: "operands unchanged" },
              ],
            },
            keyTerms: [
              { term: "Postfix distinguisher", definition: "The dummy int parameter in operator++(int) that separates postfix from prefix." },
              { term: "Unary operator", definition: "Operator with one operand (-, ++, --, !, ~); member version takes no parameters." },
              { term: "Chained assignment", definition: "a = b = c working because operator= returns a reference to *this." },
            ],
            callout: {
              type: "tip",
              title: "Write the dummy int for postfix",
              body: "If the question says \"overload the post-increment operator\", the presence of the (int) parameter is the mark. Writing operator++() for postfix is the classic error - the signature alone tells the examiner whether you know which version returns the old value.",
            },
            examQuestions: [
              {
                q: "How are unary and binary operators overloaded in C++? Explain with a program that overloads +, unary minus and both forms of ++ on a class. How does the compiler distinguish prefix from postfix?",
                marks: 7,
                outline: [
                  "Binary: member takes one param, friend takes two; call mapping a+b -> a.operator+(b)",
                  "Unary: member takes none, friend takes one; call mapping -a -> a.operator-()",
                  "Prefix ++: modify then return *this (reference)",
                  "Postfix ++: dummy int parameter, save old copy, modify, return old",
                  "Return-type guidance: value for arithmetic, bool for comparison, ref for =",
                  "Full program: Counter/Complex with outputs 7, -3, 3, 5",
                  "Compiler distinction: presence/absence of the int parameter",
                ],
              },
              {
                q: "What is the purpose of the int parameter in operator++(int)?",
                marks: 2,
              },
              {
                q: "Why should an overloaded arithmetic operator return a new object rather than modify an operand?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.3",
            title: "Friend-based overloading and the string class example",
            body: [
              "Some overloads cannot be member functions. If the left operand is not the class - 5.0 + c, or cout << c where cout is an ostream - a member version cannot work because members require the left operand to be the object. The solution is a non-member function, which needs private access and therefore becomes a friend: friend ostream& operator<<(ostream&, const Complex&); declared inside the class, defined outside as an ordinary two-parameter function.",
              "The stream operators are the canonical friend overloads. operator<<(ostream& out, const Complex& c) writes c.re and c.im to out and returns out by reference; the returned stream is what makes chaining (cout << a << b) possible, because the first call's return value becomes the left operand of the second. operator>>(istream&, Complex&) reads into a non-const reference and also returns the stream.",
              "Friend overloads also give symmetric arithmetic. A member operator+(double) supports c + 5.0 but not 5.0 + c; a friend operator+(const Complex&, const Complex&) with a converting constructor supports both directions automatically, because 5.0 is converted to Complex(5.0) by the compiler before the friend is called. Symmetry without duplication is the argument for the friend form in design questions.",
              "The RGPV-favourite worked example is a user-defined String class with friend operator+ concatenating two strings: allocate a buffer of len1 + len2 + 1, copy both, return the result. It exercises friend access, dynamic memory, copy constructors and destructors in one program, which is why it appears as both a 7-mark question and a lab exercise. Trace it once by hand before the exam - the buffer arithmetic off-by-one is the usual slip.",
            ],
            bullets: [
              "Friend overloads handle left operands that are not class objects: 5.0 + c, cout << c.",
              "operator<<(ostream&, const T&) returns ostream& so chains like cout << a << b work.",
              "operator>>(istream&, T&) takes a non-const reference because it writes into the object.",
              "Friend arithmetic with a converting constructor gives symmetric c + 5.0 and 5.0 + c.",
              "Friend is not a member: no this, called like an ordinary function, granted private access.",
              "String-class example: friend operator+ allocates len1 + len2 + 1 and copies both parts.",
              "One-definition caution: declare friend inside the class, define exactly once outside.",
            ],
            codeExample: {
              language: "cpp",
              caption: "A String class with friend +, friend << and correct cleanup.",
              code: `#include <iostream>
#include <cstring>
using namespace std;

class Str {
    char* s;
public:
    Str(const char* t = "") { s = new char[strlen(t)+1]; strcpy(s, t); }
    friend Str operator+(const Str& a, const Str& b);
    friend ostream& operator<<(ostream& o, const Str& a);
    ~Str() { delete[] s; }
};

Str operator+(const Str& a, const Str& b) {      // friend, not member
    Str r;
    delete[] r.s;
    r.s = new char[strlen(a.s) + strlen(b.s) + 1];
    strcpy(r.s, a.s); strcat(r.s, b.s);
    return r;
}
ostream& operator<<(ostream& o, const Str& a) { return o << a.s; }

int main() {
    Str x("OOP"), y(" Rocks");
    cout << x + y << "\\n";           // OOP Rocks
    return 0;
}`,
            },
            diagram: {
              kind: "pipeline",
              title: "Evaluating cout << (x + y)",
              caption: "Two friend overloads cooperate inside one expression.",
              stages: [
                { label: "x + y parsed", note: "friend operator+(x, y) selected" },
                { label: "Result buffer built", note: "new char[len1 + len2 + 1], both parts copied" },
                { label: "Temporary returned", note: "copy constructor hands it to operator<<" },
                { label: "operator<< writes", note: "friend reaches private s and prints" },
                { label: "Stream returned", note: "chaining stays possible; temporary dies" },
              ],
            },
            keyTerms: [
              { term: "Stream insertion operator<<", definition: "Friend overload writing an object to an ostream and returning the stream." },
              { term: "Stream extraction operator>>", definition: "Friend overload reading an object from an istream via non-const reference." },
              { term: "Converting constructor", definition: "A single-argument constructor that lets the compiler convert another type to the class." },
            ],
            callout: {
              type: "warning",
              title: "Return the stream, not a copy",
              body: "operator<< must return ostream& - returning by value breaks chaining and may not even compile since streams are non-copyable. If your overloaded << returns void, cout << a << b fails immediately; check the return type first in any debugging question.",
            },
            examQuestions: [
              {
                q: "When is a friend function required for operator overloading? Write a String (or Complex) class that overloads + as a friend and << for output, and explain why these cannot be member functions.",
                marks: 7,
                outline: [
                  "Member overloads require the left operand to be the object",
                  "Left operands 5.0 (arithmetic) and cout (stream) break that requirement",
                  "Friend form: both operands as parameters, private access granted",
                  "operator<<(ostream&, const T&) returns ostream& for chaining",
                  "String example: friend operator+ with buffer of len1 + len2 + 1",
                  "Destructor releases the buffer; note the copy-constructor interaction",
                  "Why not member: ostream is not our class and cannot be modified",
                ],
              },
              {
                q: "Why must operator<< return ostream& instead of void?",
                marks: 2,
              },
              {
                q: "How does a friend overload make 5.0 + c and c + 5.0 both valid?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.4",
            title: "Overloading special operators: [], (), -> and ++",
            body: [
              "Four operators carry special rules and special uses. The subscript operator operator[] must be a member function, takes exactly one argument, and - critically - should return a reference. Returning int& lets assignment through the subscript work: v[2] = 10 modifies the vector only if operator[] returns a reference to the stored element. Returning by value silently discards the assignment - the classic bug in this topic.",
              "The function-call operator operator() (functor) may take any number of arguments, making objects callable like functions: Adder add(3); add(5) returns 8. Functors are how the STL plugs custom behaviour into algorithms (sort with a comparator), and their ability to carry state between calls is the advantage over plain functions worth stating in answers.",
              "The arrow operator operator-> must be a member, takes no arguments, and must return a pointer (or an object that itself provides operator->). It is the heart of smart pointers: a Wrapper holding a raw pointer forwards p->method() through its own operator->, adding bookkeeping (reference counts, locks) without changing client syntax.",
              "Increment gets its prefix/postfix split from 3.2, but the full pattern belongs here: prefix operator++() modifies and returns *this; postfix operator++(int) copies, modifies, returns the copy. The same split applies to decrement. Together, [] () -> and ++ are the standard \"special operators\" list; expect either a definitions question or one of them embedded in a program-trace question.",
            ],
            bullets: [
              "operator[]: member only, one argument, must return a reference to support v[i] = x.",
              "operator(): any number of arguments; makes the object callable - a functor.",
              "Functors carry state and are the STL's way of customising algorithms.",
              "operator->: member only, no arguments, must return a pointer (or proxy).",
              "-> overload is the mechanism behind smart pointers and wrappers.",
              "Prefix ++/--: modify, return *this; postfix: copy, modify, return the copy.",
              "All four are in the must-be-members list except where noted - [] () -> are member-only.",
            ],
            codeExample: {
              language: "cpp",
              caption: "Reference-returning subscript, a functor, and postfix ++.",
              code: `#include <iostream>
using namespace std;

class Vec {
    int d[3];
public:
    int& operator[](int i) { return d[i]; }   // reference!
    void show() { for (int i = 0; i < 3; i++) cout << d[i] << " "; }
};

class Adder {
    int bias;
public:
    Adder(int b) : bias(b) {}
    int operator()(int x) { return x + bias; }  // functor
};

int main() {
    Vec v;
    v[0] = 10; v[1] = 20; v[2] = 30;   // assignment needs int&
    v.show(); cout << "\\n";           // 10 20 30
    Adder add(100);
    cout << add(5) << "\\n";            // 105 - object called like a function
    return 0;
}`,
            },
            diagram: {
              kind: "fork",
              title: "Special operators, one rule each",
              caption: "Four overloads with four different contracts - mix them up and nothing compiles.",
              start: "Which special operator are you writing?",
              branches: [
                { label: "operator[]", outcome: "member, one arg, return a reference so assignment works", good: true },
                { label: "operator()", outcome: "member, any args - the functor; object callable like a function", good: true },
                { label: "operator->", outcome: "member, no args, must return a pointer (smart-pointer core)", good: true },
                { label: "operator++", outcome: "two signatures - ( ) for prefix, (int) dummy for postfix", good: true },
              ],
            },
            keyTerms: [
              { term: "Subscript operator", definition: "operator[] enabling v[i] syntax; must return a reference for assignment." },
              { term: "Functor", definition: "A class with operator() so its objects are invoked like functions." },
              { term: "Smart pointer", definition: "A wrapper class overloading operator-> to manage an owned raw pointer." },
            ],
            callout: {
              type: "exam",
              title: "Reference return is the hidden mark",
              body: "In any \"overload the subscript operator\" question, the int& return type is the discriminator. A version returning plain int compiles but breaks v[i] = x - state explicitly why the reference matters; that sentence usually carries the marks the code alone does not.",
            },
            examQuestions: [
              {
                q: "Explain the overloading of the subscript, function-call and arrow operators with their special rules. Write a class demonstrating [] with reference return and a functor.",
                marks: 7,
                outline: [
                  "operator[]: member-only, one argument, must return a reference",
                  "Why reference: enables assignment v[i] = 10 through the overload",
                  "operator(): any argument list; object called like a function (functor)",
                  "Functor advantage: carries state, usable as STL algorithm policy",
                  "operator->: member-only, returns a pointer; smart-pointer mechanism",
                  "Prefix/postfix ++ recap with the int dummy",
                  "Program: Vec with int& operator[] plus Adder functor with output",
                ],
              },
              {
                q: "What breaks if operator[] returns int instead of int&?",
                marks: 2,
              },
              {
                q: "What is a functor? Write its operator() signature for one int argument.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.5",
            title: "Type conversion: basic-to-class, class-to-basic, class-to-class",
            body: [
              "Type conversion moves a value between types, and with user classes there are three directions. Basic-to-class conversion is done by a converting constructor: Complex(double r) lets Complex c = 3.5; compile, because the compiler calls the constructor to build a Complex from the double. Any single-argument constructor (or a multi-argument one where the rest have defaults) acts as a converter from its argument type to the class.",
              "Class-to-basic conversion is done by a conversion (casting) operator - a member with no return type and no parameters whose name is the target type: operator double() { return value; }. Its odd syntax (the type name replaces the function name) is because the return type is the operator itself. With it, double d = obj; works. No arguments are permitted because the source object is fixed, and the return type cannot be declared because it is already the operator's name.",
              "Class-to-class conversion runs in either of two places, and this is the examinable subtlety. A constructor in the target class accepting a source object converts source-to-target; alternatively, a conversion operator in the source class converting to the target type does the same. Provide both for the same pair and any implicit conversion becomes ambiguous - a compile error. Rule of thumb: convert with the target's constructor when you own the target; with the source's operator when you do not.",
              "Implicit conversions are convenient but dangerous: they fire silently in function calls and comparisons, and explicit one-argument constructors should be marked explicit when you want the conversion only on demand. For the exam, one program showing all three conversions with comments naming the mechanism is the complete answer; the ambiguity trap earns the final mark.",
            ],
            bullets: [
              "Basic-to-class: single-argument constructor Complex(double) converts double to Complex.",
              "Class-to-basic: conversion operator operator double() - no return type, no parameters.",
              "Conversion-operator syntax: the target type is the function name; called as double(obj).",
              "Class-to-class route 1: constructor in the TARGET class taking the source type.",
              "Class-to-class route 2: conversion operator in the SOURCE class returning the target type.",
              "Both routes for the same pair = ambiguous conversion - compile error.",
              "explicit suppresses silent conversions; use it when implicit behaviour would surprise.",
            ],
            codeExample: {
              language: "cpp",
              caption: "All three conversion directions with named mechanisms.",
              code: `#include <iostream>
using namespace std;

class Metres {
    double m;
public:
    Metres(double d) : m(d) { }        // basic -> class
    operator double() {                // class -> basic
        return m;
    }
    void show() { cout << m << " m\\n"; }
};

class Feet {
    double f;
public:
    Feet(double x) : f(x) {}
    Feet(const Metres& mt)             // class -> class (target's ctor)
        : f(double(mt) * 3.2808) {}
    void show() { cout << f << " ft\\n"; }
};

int main() {
    Metres m = 2.5;                    // ctor converts double
    double d = m;                      // operator double()
    Feet ft = m;                       // Feet(Metres) constructor
    m.show();  cout << d << "\\n";  ft.show();   // 2.5 m / 2.5 / 8.202 ft
    return 0;
}`,
            },
            diagram: {
              kind: "fork",
              title: "Three conversion directions - and one trap",
              caption: "Pick the mechanism by which type you own - and never pick two.",
              start: "A value must change type",
              branches: [
                { label: "basic -> class", outcome: "single-argument constructor of the class does it", good: true },
                { label: "class -> basic", outcome: "conversion operator operator T() in the class", good: true },
                { label: "class -> class", outcome: "target's converting constructor OR source's conversion operator", good: true },
                { label: "both provided for one pair", outcome: "ambiguous conversion - compile error", good: false },
              ],
            },
            keyTerms: [
              { term: "Converting constructor", definition: "Single-argument constructor usable by the compiler to convert its argument type to the class." },
              { term: "Conversion operator", definition: "Member of the form operator T() that converts the object to type T; no declared return type." },
              { term: "explicit keyword", definition: "Constructor modifier forbidding silent implicit conversions." },
            ],
            callout: {
              type: "exam",
              title: "The odd signature is the point",
              body: "Students lose marks by writing a return type on a conversion operator - operator double() has NO return type keyword even though it returns a double, because the type is in its name. Draw attention to this oddity in your answer; explaining the oddity is usually worth more than the code itself.",
            },
            examQuestions: [
              {
                q: "Explain how conversions are performed between basic types and user-defined types, and between two user-defined classes. Write a program demonstrating basic-to-class, class-to-basic and class-to-class conversion, and state when such conversion becomes ambiguous.",
                marks: 7,
                outline: [
                  "Basic-to-class: converting constructor example Metres(double)",
                  "Class-to-basic: conversion operator syntax operator double(), no return type",
                  "Oddity: type name is the function name; no parameters allowed",
                  "Class-to-class route 1: target-class constructor taking source object",
                  "Class-to-class route 2: source-class conversion operator",
                  "Ambiguity when both routes exist for the same pair",
                  "Program converting double -> Metres -> double and Metres -> Feet",
                ],
              },
              {
                q: "Write the signature of a conversion operator from class Inches to double.",
                marks: 2,
              },
              {
                q: "What does the explicit keyword prevent?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.6",
            title: "Inheritance: defining derived classes and visibility modes",
            body: [
              "Inheritance lets a derived class acquire the members of a base class and add its own. Syntax: class Derived : visibility Base { ... };. The derived object physically contains a base subobject, so every derived instance carries all inherited data members plus its own. Inheritance models \"is-a\": Student is-a Person, Circle is-a Shape. The base keeps everything it had - the extension is purely additive.",
              "The visibility mode in the colon decides how inherited members appear in the derived class. Public inheritance (the normal mode) keeps public members public and protected members protected. Protected inheritance demotes public members to protected. Private inheritance demotes both public and protected to private - the outside world sees nothing, effectively making inheritance a form of composition. In every mode, private base members are inherited in memory but remain inaccessible to derived code: private means private, always.",
              "A derived class can add new members, redefine (override) inherited functions with the same signature, or reuse them untouched. Name resolution is inside-out: a name in the derived class hides the base-class name of the same spelling; the base version is reachable through Base::func() - the scope-resolution escape hatch. Overriding a base function with the same name but a different signature hides it entirely rather than overloading it (a classic one-mark trap).",
              "Constructors are not inherited: a derived object is built by running the base constructor first, then member constructors, then its own body (full order in 3.8). The derived constructor may pass arguments up the chain through the initialiser list: Student(string n, int r) : Person(n), roll(r) { }. Destructors run in the reverse order. Knowing this two-sentence rule lets you predict every constructor/destructor output question in inheritance.",
            ],
            bullets: [
              "Syntax: class Derived : public Base { ... }; the derived object embeds a base subobject.",
              "Is-a relationship (inheritance) vs has-a (composition as a data member).",
              "public inheritance: public stays public, protected stays protected.",
              "protected inheritance: public becomes protected; private inheritance: both become private.",
              "Private base members are inherited (occupy memory) but never accessible to derived code.",
              "Derived name hides base name of the same spelling; Base::func() reaches the hidden version.",
              "Constructors are not inherited; base constructor runs first via the initialiser list, destructors reverse.",
            ],
            codeExample: {
              language: "cpp",
              caption: "Public inheritance: extended state, overridden method, base-first construction.",
              code: `#include <iostream>
#include <string>
using namespace std;

class Person {
protected:                        // bridge for derived classes
    string name;
public:
    Person(string n) : name(n) { cout << "Person ctor\\n"; }
    void show() { cout << name; }
};

class Student : public Person {
    int roll;                     // new data member
public:
    Student(string n, int r) : Person(n), roll(r) {   // base first
        cout << " Student ctor\\n";
    }
    void show() {                 // overriding
        Person::show();           // reuse via scope resolution
        cout << " #" << roll << "\\n";
    }
};

int main() {
    Student s("Asha", 17);
    s.show();                     // Asha #17
    return 0;
}`,
            },
            diagram: {
              kind: "layers",
              title: "A chain of derived classes",
              caption: "Each layer inherits everything above it and adds its own members.",
              layers: [
                { label: "Person (base)", note: "name; show()" },
                { label: "Student : public Person", note: "inherits name/show; adds roll" },
                { label: "ResearchScholar : public Student", note: "inherits all; adds guide, thesis topic" },
              ],
            },
            keyTerms: [
              { term: "Base class", definition: "The class being inherited from; its members are acquired by the derived class." },
              { term: "Derived class", definition: "The class that inherits; contains a base subobject plus its own additions." },
              { term: "Visibility mode", definition: "The public/protected/private keyword in the inheritance clause controlling member demotion." },
              { term: "Name hiding", definition: "A derived member with the same name shadowing the base version until Base::name is used." },
            ],
            callout: {
              type: "warning",
              title: "Private members are inherited but locked",
              body: "A frequent misconception: \"derived classes do not inherit private members\". They do inherit them - the data occupies memory in every derived object - but the derived class cannot access them by name. Write that exact sentence; it is the line the 3-mark version of this question is grading.",
            },
            examQuestions: [
              {
                q: "What is inheritance? Explain the three visibility modes with a table of how member access changes, and write a two-level inheritance program showing base-first construction and function overriding.",
                marks: 7,
                outline: [
                  "Definition + syntax class D : mode B; is-a vs has-a",
                  "public inheritance: no demotion of public/protected",
                  "protected inheritance: public demoted to protected",
                  "private inheritance: public and protected demoted to private",
                  "Private members inherited in memory but inaccessible by name",
                  "Name hiding and Base::func() escape",
                  "Program: Person/Student with ctor order and override output",
                ],
              },
              {
                q: "Can a derived class access the private members of its base class?",
                marks: 2,
              },
              {
                q: "Differentiate between inheritance and composition (is-a vs has-a).",
                marks: 3,
              },
            ],
          },
          {
            number: "3.7",
            title: "Types of inheritance: single, multiple, multilevel, hierarchical, hybrid",
            body: [
              "Single inheritance: one derived, one base - class Student : public Person. The simplest and most common form; every other form reduces to chains and combinations of it. The derived class extends the base along one line.",
              "Multilevel inheritance chains classes: A <- B <- C, e.g. Animal <- Mammal <- Dog. C inherits everything from both A and B, and construction runs top-down (A, then B, then C) while destruction runs bottom-up. Deep chains are legal but fragile - each layer adds coupling - so real designs keep chains shallow.",
              "Hierarchical inheritance fans out: several classes inherit from one base, e.g. Circle, Square and Triangle all derived from Shape. This is the polymorphism workhorse: client code written against Shape handles every leaf class through base pointers - exactly the extensibility argued in Unit 1.5.",
              "Multiple inheritance gives one class two (or more) direct bases: class C : public A, public B. C carries subobjects of both A and B; if both bases declare the same member, an unqualified reference in C is ambiguous and must be qualified (A::f() or B::f()). The deeper structural problem is the diamond: D derives from B and C, both derived from A, so D contains two copies of A. The cure is the virtual base class - 3.8. Hybrid inheritance is any combination of the above (commonly hierarchical + multiple), and it is precisely the shape in which diamonds appear.",
            ],
            bullets: [
              "Single: one base, one derived - the atomic form.",
              "Multilevel: A <- B <- C chains; construction top-down, destruction bottom-up.",
              "Hierarchical: one base, many derived; enables base-pointer polymorphism.",
              "Multiple: one derived, several bases; subobject per base, constructed left to right.",
              "Multiple-inheritance ambiguity: same-name members from two bases need explicit qualification.",
              "Diamond problem: two copies of the common base reach the bottom class; fixed by virtual inheritance.",
              "Hybrid: a mix (hierarchical + multiple) - the classic diamond scenario in exam diagrams.",
            ],
            codeExample: {
              language: "cpp",
              caption: "Multiple inheritance and how to qualify an ambiguous member.",
              code: `#include <iostream>
using namespace std;

class Athlete {
public:
    void train() { cout << "train\\n"; }
};
class Scholar {
public:
    void train() { cout << "study\\n"; }   // same name!
};
class SportsScholar : public Athlete, public Scholar {
public:
    void train() {                        // resolve the clash
        Athlete::train();                 // qualify explicitly
        Scholar::train();
    }
};

int main() {
    SportsScholar s;
    s.train();                            // train / study
    return 0;
}`,
            },
            diagram: {
              kind: "fork",
              title: "Five shapes of inheritance",
              caption: "Name the relationship, draw the arrow, and you have the diagram half of the answer.",
              start: "One class inherits from...",
              branches: [
                { label: "one base (single)", outcome: "A <- B; the atomic extension", good: true },
                { label: "a chain (multilevel)", outcome: "A <- B <- C; construct top-down", good: true },
                { label: "siblings (hierarchical)", outcome: "one base, many derived; polymorphism workhorse", good: true },
                { label: "several bases (multiple)", outcome: "A and B -> C; qualify clashes; beware the diamond", good: true },
              ],
            },
            keyTerms: [
              { term: "Multilevel inheritance", definition: "Deriving from a derived class: A <- B <- C." },
              { term: "Hierarchical inheritance", definition: "Several classes inheriting from one common base." },
              { term: "Multiple inheritance", definition: "One class inheriting from two or more direct bases." },
              { term: "Ambiguity", definition: "Two bases providing the same member name, resolved by Base::member qualification." },
            ],
            callout: {
              type: "exam",
              title: "Draw all five in the margin",
              body: "For \"explain types of inheritance\", sketch all five shapes with labelled boxes in about six lines - the diagram is half the marks - then give one C++ declaration line for each. Text-only answers read as incomplete here even when technically correct.",
            },
            examQuestions: [
              {
                q: "Explain single, multilevel, hierarchical, multiple and hybrid inheritance with diagrams and one C++ example each. What ambiguity arises in multiple inheritance and how is it resolved?",
                marks: 7,
                outline: [
                  "Single: A <- B with class B : public A",
                  "Multilevel: A <- B <- C, construction order noted",
                  "Hierarchical: one base, many derived; Shape example",
                  "Multiple: class C : public A, public B; subobject per base",
                  "Ambiguity: same-name members need A::f() / B::f() qualification",
                  "Hybrid: combination; leads to the diamond structure",
                  "Small code showing Athlete/Scholar clash resolved",
                ],
              },
              {
                q: "Define multilevel inheritance with one example chain of classes.",
                marks: 2,
              },
              {
                q: "How is an ambiguous member from two base classes accessed in a derived class?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.8",
            title: "Virtual base classes and constructor order in hierarchies",
            body: [
              "The diamond problem. Let B and C both derive from A, and D derive from both B and C. Through normal inheritance, D contains two subobjects of A - one through B, one through C. Any access to an A member from D is ambiguous (B::x or C::x?), and two copies of A's data exist where logically there should be one. This duplication is the classic defect of hybrid inheritance.",
              "The cure is the virtual base class: when B and C declare their inheritance as class B : virtual public A, the compiler keeps exactly one shared A subobject in D, no matter how many paths lead to it. The keyword virtual on the inheritance clause - not to be confused with virtual functions - changes the storage layout so the common base exists once. Construction also changes: the virtual base is constructed directly by the most-derived class (D), not once per intermediate path.",
              "Constructor order with virtual bases follows a fixed protocol: (1) virtual bases first, in a left-to-right depth-first pass, constructed by the most-derived class even if D's initialiser list omits them; (2) direct non-virtual bases left to right; (3) the derived class's own data members in declaration order; (4) the derived constructor's body. Destructors run in exactly the reverse order. Predicting this order is a standard output question.",
              "One more ambiguity completes the topic: if a class inherits the same member through two routes and no virtual base is used, an unqualified use is ambiguous and must be qualified with the intermediate class name. Know both fixes - virtual inheritance for duplicated subobjects, explicit qualification for duplicate names - and you can answer any diamond question the paper poses.",
            ],
            bullets: [
              "Diamond: B and C derive from A, D derives from B and C; D gets two A subobjects.",
              "Symptom: ambiguous member access and duplicated base data in the bottom class.",
              "Fix: declare the inheritance virtual - class B : virtual public A.",
              "Virtual base: exactly ONE shared A subobject inside D regardless of paths.",
              "Virtual base is constructed by the most-derived class, first of all bases.",
              "Constructor order: virtual bases -> direct non-virtual bases (L to R) -> members -> derived body.",
              "Destructor order is the exact reverse; unrelated to virtual functions despite the shared keyword.",
            ],
            codeExample: {
              language: "cpp",
              caption: "Diamond cured by a virtual base: one A subobject, one construction.",
              code: `#include <iostream>
using namespace std;

class A {
public:
    int x;
    A() : x(10) { cout << "A "; }
};
class B : virtual public A {           // virtual inheritance
public:
    B() { cout << "B "; }
};
class C : virtual public A {
public:
    C() { cout << "C "; }
};
class D : public B, public C {
public:
    D() { cout << "D\\n"; }
};

int main() {
    D d;
    cout << d.x << "\\n";      // 10 - unambiguous now
    return 0;                  // prints: A B C D
}`,
            },
            diagram: {
              kind: "pipeline",
              title: "Constructor order in a diamond hierarchy",
              caption: "Fixed protocol from the virtual base down to the derived body.",
              stages: [
                { label: "Virtual base A", note: "built by the most-derived class, exactly once" },
                { label: "Direct bases B, C", note: "left to right, skip the virtual base" },
                { label: "Members of D", note: "in declaration order" },
                { label: "Body of D", note: "last to run; destructors reverse everything" },
              ],
            },
            keyTerms: [
              { term: "Diamond problem", definition: "Duplicated common base (and ambiguous access) in a B,C -> D hierarchy." },
              { term: "Virtual base class", definition: "Base inherited with virtual, ensuring a single shared subobject in the most-derived class." },
              { term: "Most-derived class", definition: "The class at the bottom of the hierarchy; responsible for constructing virtual bases." },
            ],
            callout: {
              type: "warning",
              title: "Two different 'virtual's",
              body: "virtual in the inheritance clause (virtual base) and virtual on a member function (dynamic dispatch, Unit IV) are unrelated mechanisms sharing one keyword. Examiners deliberately probe the confusion - open your answer with the sentence \"the keyword virtual here modifies inheritance, not a function\".",
            },
            examQuestions: [
              {
                q: "What is the diamond problem? How does a virtual base class solve it? Explain the constructor order in a hierarchy with virtual bases and predict the output of a four-class diamond program.",
                marks: 7,
                outline: [
                  "Diamond structure: B,C <- A; D <- B,C; two A subobjects in D",
                  "Symptoms: ambiguous access, duplicated data",
                  "Fix: class B : virtual public A; one shared subobject",
                  "Virtual base constructed by most-derived class, first",
                  "Order: virtual bases -> direct bases L-R -> members -> body",
                  "Trace program output: A B C D, then d.x = 10",
                  "Distinguish this virtual from virtual functions",
                ],
              },
              {
                q: "Why does a class with a virtual base construct it directly rather than letting intermediate classes do it?",
                marks: 3,
              },
              {
                q: "Write the declaration of class B inheriting A as a virtual public base.",
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
      title: "Polymorphism, I/O Streams & File Handling",
      summary:
        "Run-time polymorphism through virtual functions and abstract classes, the object-slicing trap, the C++ stream class hierarchy, formatted I/O with manipulators, and every file skill: opening modes, sequential text I/O, and random-access binary updates.",
      chapter: {
        number: "04",
        title: "Virtual Functions, Streams & Files",
        intro:
          "Unit IV delivers the run-time half of polymorphism - virtual functions, pure virtual functions, abstract classes, vtables and object slicing - then moves to C++ I/O: the stream class family, formatting with manipulators, and complete file handling from open modes to random-access binary records.",
        inOneBreath:
          "A virtual function binds through the base pointer at run time via the object's vtable; a class with a pure virtual function (= 0) is abstract and cannot be instantiated; deleting via a base pointer needs a virtual destructor, and assigning a derived object to a base object slices off the derived part. Streams: ios -> istream/ostream -> iostream -> fstream; formatting via setw, setprecision, hex, fixed and flags; files open with modes in|out|app|ate|binary|trunc; text I/O uses >> << and getline/get/put, binary records use read/write with reinterpret_cast, and seekg/seekp plus tellg/tellp give random access.",
        sections: [
          {
            number: "4.1",
            title: "Virtual functions and run-time polymorphism",
            body: [
              "A virtual function is a base-class member declared with the keyword virtual, whose actual version to execute is chosen at run time based on the real object - not on the type of the pointer or reference used to call it. Declare virtual void draw() in Shape, override it in Circle and Square, and a Shape* holding either object runs the right override. That is run-time (dynamic) polymorphism: one call site, many behaviours, decided late.",
              "The machinery underneath is the vtable. Each polymorphic class carries a hidden table of pointers to its virtual functions; each object carries a hidden pointer (the vptr) to its class's table. A virtual call through a base pointer therefore costs one extra indirection: load the vptr, index the table, jump. This is the small, constant overhead that answers the exam question \"what is the cost of virtual functions?\" - and it is why non-virtual is the sensible default for functions that will never be overridden.",
              "Two rules follow immediately. First, dynamic binding needs a pointer or reference: Shape s = Circle(); copies only the Shape part - no polymorphism (see 4.3 on slicing). Second, once virtual, always virtual down the hierarchy: overrides in derived classes need not repeat the keyword, though modern style writes override to catch signature typos. A mismatched signature is a hidden overload, not an override - the override keyword turns that silent bug into a compile error.",
              "Virtual destructors complete the picture. Deleting a derived object through a base pointer with a non-virtual destructor is undefined behaviour: only ~Base() runs. Making the destructor virtual ensures ~Derived() then ~Base() run in order. The rule worth stating in every polymorphism answer: a class designed as a base class must have a virtual destructor.",
            ],
            bullets: [
              "virtual keyword in the base class; overrides in derived classes with the same signature.",
              "Call through base pointer/reference selects the override at run time (dynamic binding).",
              "Mechanism: per-class vtable + per-object vptr; one indirection per virtual call.",
              "Dynamic binding requires pointer or reference - plain object calls bind statically.",
              "Once virtual, always virtual down the hierarchy; modern code marks overrides with override.",
              "Signature mismatch silently becomes name hiding - override turns it into a compile error.",
              "Base classes used polymorphically must declare a virtual destructor.",
            ],
            codeExample: {
              language: "cpp",
              caption: "One base pointer, three behaviours; virtual destructor in place.",
              code: `#include <iostream>
using namespace std;

class Shape {
public:
    virtual void draw() { cout << "shape\\n"; }
    virtual ~Shape() { cout << "~Shape\\n"; }
};
class Circle : public Shape {
public:
    void draw() override { cout << "circle\\n"; }
    ~Circle() { cout << "~Circle "; }
};
class Square : public Shape {
public:
    void draw() override { cout << "square\\n"; }
};

int main() {
    Shape* p = new Circle;
    p->draw();                    // circle (run-time choice)
    delete p;                     // ~Circle ~Shape (virtual dtor)
    return 0;
}`,
            },
            diagram: {
              kind: "flow",
              title: "How a virtual call is resolved",
              caption: "The compile-time type decides legality; the run-time object decides the code.",
              steps: [
                { label: "Call via base pointer", note: "p->draw() where p is Shape*" },
                { label: "Compiler checks statically", note: "draw() must be declared virtual in Shape" },
                { label: "Load object's vptr", note: "points to the real class's vtable" },
                { label: "Index the vtable", note: "entry for draw() holds the override address" },
                { label: "Derived function runs", note: "circle, square, or shape depending on the object" },
              ],
            },
            keyTerms: [
              { term: "Virtual function", definition: "Base-class member whose override is selected at run time through the object's vtable." },
              { term: "Vtable / vptr", definition: "Per-class table of virtual-function addresses and the hidden per-object pointer to it." },
              { term: "Overriding", definition: "Redefining a base virtual function in a derived class with an identical signature." },
              { term: "Virtual destructor", definition: "Destructor declared virtual so delete through a base pointer destroys the full derived object." },
            ],
            callout: {
              type: "exam",
              title: "Never write a polymorphic base without a virtual destructor",
              body: "Almost every run-time-polymorphism program in the paper ends with delete through a base pointer. Add virtual ~Shape() {} mechanically - the marker looks for it, and its absence is undefined behaviour worth a dedicated mark.",
            },
            examQuestions: [
              {
                q: "What is a virtual function? How does it achieve run-time polymorphism? Explain the vtable mechanism and the rules that govern virtual functions, with a complete program.",
                marks: 7,
                outline: [
                  "Definition: virtual member, override selected by the real object at run time",
                  "Contrast with compile-time binding for non-virtual calls",
                  "Vtable/vptr mechanism: per-class table, per-object pointer, one indirection",
                  "Rules: pointer/reference needed; once virtual always virtual; signature must match",
                  "override keyword catching signature typos",
                  "Virtual destructor rule for polymorphic base classes",
                  "Program: Shape/Circle/Square through Shape* with delete",
                ],
              },
              {
                q: "Why does dynamic binding not work through plain objects?",
                marks: 2,
              },
              {
                q: "What is the runtime cost of a virtual function call?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.2",
            title: "Pure virtual functions and abstract classes",
            body: [
              "A pure virtual function is a virtual function declared with no body and the initializer = 0: virtual void draw() = 0;. The declaration says \"every derived class must supply its own version\" while deliberately refusing to supply a default. A class containing at least one pure virtual function is an abstract class.",
              "Abstract classes exist to be inherited from, not instantiated. Shape s; is a compile error, and so is new Shape; - the compiler blocks any attempt to create an object of an incomplete concept. Pointers and references to abstract classes are perfectly legal, and that is the whole point: client code written against Shape* works with every concrete subclass, present and future. This is the interface concept: the abstract class is a contract, the concrete classes are implementations.",
              "A derived class must override every pure virtual function to become concrete; if it overrides only some, it remains abstract and still cannot be instantiated. Overrides may supply full behaviour or call back into a base implementation if the base defines one out of line (pure virtual functions may still have bodies - a rarely used but exam-worthy fact).",
              "The design vocabulary matters for marks: an abstract class with only pure virtual functions is effectively an interface; an abstract class with some implemented members is a partial skeleton (template method style). Contrast with a concrete class, instantiable and override-free. Typical exam ask: \"write an abstract class Shape with pure virtual area() and show() and derive Circle and Rectangle\" - the program plus the cannot-instantiate rule plus the must-override rule is the full answer.",
            ],
            bullets: [
              "Pure virtual syntax: virtual ReturnType name(args) = 0; - no body in the declaration.",
              "Abstract class: any class with at least one pure virtual function.",
              "Abstract classes cannot be instantiated; pointers/references to them are fine and essential.",
              "Derived class must override ALL pure virtuals to become concrete; otherwise still abstract.",
              "Pure virtual functions may optionally have a base body that derived overrides may call.",
              "Abstract class = design contract (interface); concrete classes = implementations.",
              "Abstract classes can still have constructors, data members and non-virtual functions.",
            ],
            codeExample: {
              language: "cpp",
              caption: "Abstract Shape, two concrete overrides, polymorphic use.",
              code: `#include <iostream>
using namespace std;

class Shape {                      // abstract: cannot instantiate
public:
    virtual double area() = 0;     // pure virtual
    virtual void show() = 0;
    virtual ~Shape() {}
};

class Circle : public Shape {
    double r;
public:
    Circle(double r) : r(r) {}
    double area() { return 3.14159 * r * r; }   // override all
    void show() { cout << "circle area " << area() << "\\n"; }
};

class Rect : public Shape {
    double w, h;
public:
    Rect(double w, double h) : w(w), h(h) {}
    double area() { return w * h; }
    void show() { cout << "rect area " << area() << "\\n"; }
};

int main() {
    Shape* s[] = { new Circle(2), new Rect(3, 4) };
    for (int i = 0; i < 2; i++) s[i]->show();   // circle area 12.5664 / rect area 12
    return 0;
}`,
            },
            diagram: {
              kind: "fork",
              title: "Inheriting from an abstract class",
              caption: "The compiler enforces the contract at every instantiation attempt.",
              start: "Derived class of an abstract base is compiled",
              branches: [
                { label: "overrides every pure virtual", outcome: "class becomes concrete - objects may be created", good: true },
                { label: "overrides only some", outcome: "class stays abstract - new Derived; is an error", good: false },
                { label: "someone writes Base b;", outcome: "compile error: cannot instantiate abstract class", good: false },
              ],
            },
            keyTerms: [
              { term: "Pure virtual function", definition: "Virtual function declared with = 0 and no body, forcing derived classes to implement it." },
              { term: "Abstract class", definition: "Class with at least one pure virtual function; cannot be instantiated." },
              { term: "Concrete class", definition: "Class with no pure virtuals remaining; fully instantiable." },
              { term: "Interface class", definition: "Abstract class whose members are all pure virtual - a pure contract." },
            ],
            callout: {
              type: "tip",
              title: "= 0 is the whole definition",
              body: "Students write virtual void area() = 0 { } and wonder why it fails. The = 0 replaces the body - nothing follows it. Write the declaration exactly, then note in prose that the semicolon ends it; getting this line right first is what the examiner scans for.",
            },
            examQuestions: [
              {
                q: "What is a pure virtual function and an abstract class? Explain their rules (instantiation, overriding obligations, use through pointers) and write a program with an abstract Shape and two derived classes.",
                marks: 7,
                outline: [
                  "Pure virtual syntax virtual void f() = 0; no body after = 0",
                  "Abstract class definition and cannot-instantiate rule",
                  "Pointers/references to abstract types are the intended usage",
                  "Derived must override all pure virtuals to be concrete",
                  "Abstract class may still have data, constructors, implemented methods",
                  "Program: Shape with area()/show() pure, Circle and Rect concrete, polymorphic loop",
                  "Interface vs partial-skeleton distinction",
                ],
              },
              {
                q: "Can an abstract class have a constructor? Justify.",
                marks: 2,
              },
              {
                q: "What happens if a derived class overrides only some pure virtual functions?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.3",
            title: "Dynamic binding, this pointer and object slicing",
            body: [
              "Binding is the association of a call with code. Static (early) binding fixes it at compile time: non-virtual calls, overloaded functions, templates. Dynamic (late) binding defers it to run time via the vtable: virtual calls through pointers/references. The same source line p->draw() can be either, depending solely on whether draw() is virtual - a distinction examiners test with a single output-prediction question.",
              "The this pointer is the implicit first argument of every non-static member function: it holds the address of the object on which the call was made. Inside a member, *this is the object itself - which is what operator= and prefix operator++ return. this is what lets every object share one copy of its functions yet touch its own data; a constructor can even pass *this to register itself somewhere. this is not available in static member functions - the tie back to Unit II's static rule.",
              "Object slicing is the trap. Assigning a derived object to a base object BY VALUE - Shape s = circle; or passing Circle by value into a Shape parameter - copies only the Shape part; the derived members are sliced off, and virtual calls on s behave like Shape's. Slicing cannot happen through pointers or references, because then no copy is made and the full object remains intact underneath.",
              "The composite rule set: want polymorphism? Use base-class pointers or references, never base-class objects by value. Store collections as vector<Shape*> (or modern unique_ptr), pass subclasses as const Base&, and declare the base destructor virtual. Write these four sentences with a two-line slicing demonstration and the 7-mark version of \"dynamic binding and its requirements\" is complete.",
            ],
            bullets: [
              "Static binding: compile-time (non-virtual calls, overloading, templates).",
              "Dynamic binding: run-time via vtable, only for virtual calls through pointer/reference.",
              "this: implicit pointer inside non-static members holding the current object's address.",
              "*this returned by operator= and prefix ++ enables chaining.",
              "this does not exist in static member functions or friend functions.",
              "Object slicing: base-object copy of a derived object keeps only the base part.",
              "Slicing only occurs with by-value copies; pointers/references preserve the full object.",
            ],
            codeExample: {
              language: "cpp",
              caption: "Slicing vs reference: identical classes, opposite outcomes.",
              code: `#include <iostream>
using namespace std;

class Base {
public:
    virtual void who() { cout << "base\\n"; }
};
class Derived : public Base {
    int extra = 42;                       // sliced away on copy
public:
    void who() override { cout << "derived " << extra << "\\n"; }
};

void byValue(Base b)  { b.who(); }        // slice happens here
void byRef(Base& b)   { b.who(); }        // no copy, no slice

int main() {
    Derived d;
    byValue(d);        // base   (sliced!)
    byRef(d);          // derived 42
    return 0;
}`,
            },
            diagram: {
              kind: "matrix",
              title: "Binding decisions at a glance",
              caption: "Two axes decide everything: how the call travels, and whether the function is virtual.",
              axes: { x: "call form: object -> pointer / reference", y: "function: non-virtual -> virtual" },
              quadrants: [
                { label: "Object + any function", note: "static binding - the object's own version" },
                { label: "Pointer + non-virtual", note: "static binding - base version runs even on derived object" },
                { label: "Pointer/reference + virtual", note: "dynamic binding - override chosen via vtable" },
                { label: "By-value copy of derived into base", note: "slicing - derived part lost, no polymorphism" },
              ],
            },
            keyTerms: [
              { term: "Static binding", definition: "Call-to-code association fixed at compile time." },
              { term: "Dynamic binding", definition: "Call-to-code association deferred to run time through the vtable." },
              { term: "Object slicing", definition: "Loss of derived-class parts when a derived object is copied into a base-class object." },
              { term: "this pointer", definition: "Implicit pointer to the current object inside non-static member functions." },
            ],
            callout: {
              type: "warning",
              title: "By value kills polymorphism",
              body: "The single most common trap question: a virtual call through an object parameter prints the base version and students insist it should print the derived one. The parameter was passed by value - it is a Base copy. Answer \"slicing, because the argument was copied\" and you have the mark.",
            },
            examQuestions: [
              {
                q: "Explain dynamic binding and the this pointer. What is object slicing, when does it occur, and how is it avoided? Support the answer with a program showing both a sliced and a preserved call.",
                marks: 7,
                outline: [
                  "Binding definition; static vs dynamic with one example each",
                  "Dynamic binding requires virtual + pointer/reference",
                  "this pointer: implicit argument, *this in operator= / ++",
                  "this absent in static members and friends",
                  "Object slicing: by-value base copy strips derived members",
                  "Avoidance: pointers/references, virtual destructor, container of pointers",
                  "Program with byValue printing base and byRef printing derived",
                ],
              },
              {
                q: "Why is this not available inside a static member function?",
                marks: 2,
              },
              {
                q: "Predict and justify: Base* p = new Derived; p->who(); where who() is virtual.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.4",
            title: "C++ streams and the stream class hierarchy",
            body: [
              "A stream is an abstraction of a sequence of bytes flowing from a source to a destination: bytes flow OUT of the program on an output stream (to the screen, a file, a buffer) and INTO the program on an input stream (from the keyboard, a file). The beauty of the abstraction is uniformity - the same << operator writes to the console, a string, or a disk file because all three are streams.",
              "The classes form a single inheritance tree rooted at ios. ios holds the state and formatting machinery; it derives istream (extraction: >>, get, getline, read, seekg) and ostream (insertion: <<, put, write, seekp, flush); iostream multiple-inherits both for bidirectional streams. Below these, ifstream/ofstream/fstream attach the machinery to disk files, and istringstream/ostringstream to in-memory strings. cin is an istream object, cout and cerr are ostream objects - they are pre-built objects, not keywords.",
              "Every stream carries state flags that code should check after reads: eofbit (end of input reached), failbit (logical error - bad data type), badbit (serious I/O failure). The functions eof(), fail(), bad(), good() report them, and the stream itself converts to bool, which is why while (cin >> x) terminates on bad input - the standard idiom for read-until-failure loops.",
              "Knowing the hierarchy earns marks, so be able to name it: ios at the root, istream and ostream above it, iostream joining them, fstream family attached to files, stringstream family to memory. One line worth adding: C++ I/O is itself an OOP showcase - the operators are overloaded, the classes inherit, and operator<< is a friend overload exactly as built in Unit III.",
            ],
            bullets: [
              "Stream = sequence of bytes; input streams deliver bytes into the program, output streams carry them out.",
              "ios: base class holding state flags and formatting machinery.",
              "istream: >>, get(), getline(), read(), seekg(); ostream: <<, put(), write(), seekp(), flush().",
              "iostream inherits both; fstream family connects streams to disk files.",
              "cin (istream), cout, cerr, clog (ostream) are predefined objects of the standard library.",
              "State flags: eofbit, failbit, badbit - tested with eof(), fail(), bad(), good().",
              "while (cin >> x) loops until extraction fails - the standard read idiom.",
            ],
            codeExample: {
              language: "cpp",
              caption: "Stream state flags in action with a read-until-failure loop.",
              code: `#include <iostream>
#include <sstream>
using namespace std;

int main() {
    int x;
    cout << "Enter numbers (letter stops): ";
    while (cin >> x)                 // stream -> bool
        cout << "got " << x << "\\n";
    if (cin.fail())                  // bad data stopped us
        cout << "stopped: bad input\\n";
    cin.clear();                     // reset flags to good
    // string streams: same << / >> operators
    ostringstream buf;
    buf << "x=" << 42;
    cout << buf.str() << "\\n";       // x=42
    return 0;
}`,
            },
            diagram: {
              kind: "layers",
              title: "The stream class hierarchy",
              caption: "Top layers are the most derived; every file class inherits everything above it.",
              layers: [
                { label: "ifstream / ofstream / fstream", note: "disk-file streams (also istringstream family)" },
                { label: "iostream", note: "bidirectional streams - inherits both directions" },
                { label: "istream / ostream", note: "extraction (>>) and insertion (<<) machinery" },
                { label: "ios", note: "root: state flags, buffers, formatting" },
              ],
            },
            keyTerms: [
              { term: "Stream", definition: "An abstraction of a sequence of bytes between a program and a device or buffer." },
              { term: "ios", definition: "Root stream class holding state flags and formatting data." },
              { term: "failbit / eofbit / badbit", definition: "State flags marking a data error, end of input, or serious I/O failure." },
              { term: "cerr", definition: "Unbuffered standard-error output stream." },
            ],
            callout: {
              type: "exam",
              title: "Name the hierarchy in one breath",
              body: "\"ios is the root; istream and ostream derive from it; iostream derives from both; ifstream, ofstream and fstream attach files; stringstream attaches memory; cin, cout, cerr are prebuilt objects.\" Saying this one sentence correctly usually collects the definition marks before any code is needed.",
            },
            examQuestions: [
              {
                q: "What is a stream? Describe the C++ stream class hierarchy with the roles of ios, istream, ostream, iostream and the fstream family, and explain the stream state flags with a small program.",
                marks: 7,
                outline: [
                  "Stream definition: byte sequence abstraction, uniform << and >>",
                  "ios: root, state flags and formatting",
                  "istream: >>, get, getline, read, seekg",
                  "ostream: <<, put, write, seekp, flush; iostream joins both",
                  "fstream family to files; stringstream family to memory",
                  "cin/cout/cerr as predefined objects, not keywords",
                  "Program: while(cin >> x) loop, fail() check, clear()",
                ],
              },
              {
                q: "Differentiate between cerr and cout.",
                marks: 2,
              },
              {
                q: "What do eof(), fail() and bad() report?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.5",
            title: "Unformatted and formatted I/O with manipulators",
            body: [
              "Unformatted I/O moves raw bytes with no interpretation. Reading: cin.get() reads one character, cin.getline(buf, n) reads a whole line into a char array (stripping the delimiter), cin.read(buf, n) reads a fixed block. Writing: cout.put(ch) writes one character, cout.write(buf, n) writes a block, cin.gcount() reports how many unformatted characters the last read took. The classic use is getline, because the extraction operator >> stops at the first whitespace and cannot read \"New Delhi\" in one go.",
              "Formatted I/O lets the stream convert and decorate values. Member functions set the knobs directly (cout.width(10), cout.precision(3), cout.fill('*')), but manipulators are the exam-standard way: they are inserted right into the chain. No-argument manipulators from <iostream>: endl (newline + flush), dec, hex, oct, boolalpha, fixed, scientific, left, right. Argument-taking manipulators need <iomanip>: setw(n), setprecision(n), setfill(c).",
              "Two behaviours trip everyone. First, setw applies only to the NEXT output item - it must be repeated for each field, unlike precision which sticks. Second, default float output shows 6 significant digits total; fixed + setprecision(2) switches to 2 digits after the decimal point. Flags can also be set wholesale: cout.setf(ios::showpoint | ios::fixed) or the hex manipulation for base changes.",
              "The complete formatted-output answer names the two families (iostream manipulators vs iomanip manipulators), shows one chained example with its exact output, and states the setw one-shot rule. Output-format questions are effectively free marks with this one example rehearsed: cout << setw(8) << setfill('*') << left << 42 prints 42****** .",
            ],
            bullets: [
              "Unformatted: get, getline, read (in); put, write, gcount (out) - raw bytes, no conversion.",
              ">> stops at whitespace; cin.getline(buf, n) reads whole lines - use it for names/sentences.",
              "endl = newline + flush; '\\n' is newline only.",
              "No-arg manipulators: dec, hex, oct, boolalpha, fixed, scientific, left, right.",
              "Arg manipulators from <iomanip>: setw(n), setprecision(n), setfill(c).",
              "setw affects only the next field; setprecision + fixed control decimals persistently.",
              "cout << setw(8) << setfill('*') << left << 42 -> 42******",
            ],
            codeExample: {
              language: "cpp",
              caption: "Field widths, fill, alignment and precision - with expected output.",
              code: `#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    cout << setw(8) << setfill('*') << left << 42 << "\\n";   // 42******
    cout << setw(8) << right << 42 << "\\n";                  // ******42
    double pi = 3.14159265;
    cout << pi << "\\n";                                      // 3.14159
    cout << fixed << setprecision(2) << pi << "\\n";          // 3.14
    cout << hex << 255 << "\\n";                              // ff
    cout << boolalpha << (3 > 2) << "\\n";                    // true
    return 0;
}`,
            },
            diagram: {
              kind: "pipeline",
              title: "How one << statement becomes formatted output",
              caption: "Each manipulator adjusts the stream's formatting state before the value flows.",
              stages: [
                { label: "Insertion request", note: "cout << setw(8) << 42" },
                { label: "Manipulators applied", note: "width 8, fill '*', left - state updated" },
                { label: "Value converted", note: "number to characters under current flags" },
                { label: "Buffer accumulates", note: "characters joined to the stream buffer" },
                { label: "Flush to device", note: "endl or buffer-full sends bytes to the screen" },
              ],
            },
            keyTerms: [
              { term: "Manipulator", definition: "A value inserted into a stream chain that changes formatting state or output (setw, endl, hex)." },
              { term: "setw", definition: "Sets the minimum field width for the NEXT output item only." },
              { term: "setprecision", definition: "Sets decimal precision; with fixed it means digits after the point." },
              { term: "cin.getline", definition: "Reads a full line including spaces into a char buffer, up to n-1 characters." },
            ],
            callout: {
              type: "tip",
              title: "setw is one-shot - repeat it",
              body: "cout << setw(5) << a << b does NOT pad b. The width resets after one field. In any expected-output question, underline each setw and match it to exactly one following value; this single rule settles most formatting traces.",
            },
            examQuestions: [
              {
                q: "Explain formatted and unformatted I/O in C++. Describe the important manipulators with a program whose output you predict exactly, and state the one-shot behaviour of setw.",
                marks: 7,
                outline: [
                  "Unformatted: get, getline, put, write, gcount roles",
                  "Why getline over >> for lines containing spaces",
                  "Formatted: member functions vs manipulators",
                  "No-arg manipulators: endl, dec/hex/oct, fixed, left/right, boolalpha",
                  "iomanip manipulators: setw, setprecision, setfill",
                  "setw one-shot rule vs persistent precision",
                  "Program with commented expected output (42****** etc.)",
                ],
              },
              {
                q: "Which header must be included for setw and setprecision?",
                marks: 2,
              },
              {
                q: "Why does cin >> name fail to read 'New Delhi'?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.6",
            title: "File streams: opening, closing and file modes",
            body: [
              "File handling in C++ needs <fstream>, which supplies ofstream (output to file), ifstream (input from file) and fstream (both). A file stream can be opened in the constructor (ofstream out(\"data.txt\");) or by calling open() explicitly (out.open(\"data.txt\");) - both accept a filename plus an optional mode. Every stream destructor closes its file automatically, but calling close() explicitly is good style when the file should be released early.",
              "The mode flags combine with |. Default modes are sensible: ofstream defaults to ios::out | ios::trunc (creating or WIPING the file - the classic accidental-data-loss trap), ifstream defaults to ios::in. Available modes: in (read), out (write), app (append - every write lands at end), ate (open and seek to end immediately), trunc (destroy existing contents), binary (no newline translation - raw bytes). ios::out alone truncates; ios::app preserves and appends; ios::in | ios::out allows updating an existing file.",
              "Always verify the open succeeded: if (!out) { ... } or out.is_open(). A failed open (missing file for reading, no permission for writing) sets failbit silently - reading from an unopened stream yields nothing and writing yields nowhere, with no exception unless you ask for one. This two-line check is what separates robust file code from fragile code, and it is a standard mark in file-handling programs.",
              "The full program skeleton to memorise: include <fstream>, construct with filename and mode, check is_open, loop reading or writing, close. When the question asks \"explain various file modes\", present the six flags as a table with one sentence each plus the two defaults, then show an append-mode opening that survives repeated runs.",
            ],
            bullets: [
              "Classes: ofstream (write), ifstream (read), fstream (both) - from <fstream>.",
              "Open via constructor or .open(\"name\", mode); close via .close() or the destructor.",
              "Defaults: ofstream = out | trunc; ifstream = in.",
              "Modes: in, out, app, ate, trunc, binary - combinable with |.",
              "ios::out truncates; ios::app appends at end; in|out updates an existing file.",
              "Always test: if (!out) or out.is_open() - failed opens set failbit quietly.",
              "binary mode disables newline translation and enables read()/write() record I/O.",
            ],
            codeExample: {
              language: "cpp",
              caption: "Write, reopen in append mode, read back - with the open check.",
              code: `#include <fstream>
#include <iostream>
using namespace std;

int main() {
    ofstream out("log.txt", ios::app);    // preserve old content
    if (!out) { cout << "open failed\\n"; return 1; }
    out << "run logged\\n";
    out.close();

    ifstream in("log.txt");
    string line;
    while (getline(in, line))
        cout << line << "\\n";             // all previous runs + this one
    return 0;
}`,
            },
            diagram: {
              kind: "fork",
              title: "Choosing an open mode",
              caption: "The mode decides the fate of whatever was already in the file.",
              start: "ofstream(\"data.txt\", mode)",
              branches: [
                { label: "ios::out (default)", outcome: "creates fresh - existing contents are DESTROYED", good: false },
                { label: "ios::app", outcome: "keeps contents; every write goes to the end", good: true },
                { label: "ios::ate", outcome: "opens, seeks to end; you can still reposition and overwrite", good: true },
                { label: "ios::in | ios::out", outcome: "open existing file for in-place updates (add binary for records)", good: true },
              ],
            },
            keyTerms: [
              { term: "ofstream / ifstream / fstream", definition: "Output, input, and bidirectional file-stream classes from <fstream>." },
              { term: "ios::app", definition: "Append mode: position at end before every write; existing data is preserved." },
              { term: "ios::trunc", definition: "Truncate mode: existing contents discarded at open (default for ofstream)." },
              { term: "is_open()", definition: "Returns true when the stream is successfully attached to a file." },
            ],
            callout: {
              type: "warning",
              title: "ofstream deletes your file by default",
              body: "Reopening a data file with plain ofstream for 'adding a record' silently erases everything already there - the mode is out|trunc. In any program that must preserve data, write ios::app explicitly and say why; examiners set this trap deliberately.",
            },
            examQuestions: [
              {
                q: "Explain file stream classes in C++ and the various file-opening modes with their effects. Write a program that appends to a file, reopens it, and prints its contents, checking for open failure.",
                marks: 7,
                outline: [
                  "ifstream/ofstream/fstream roles from <fstream>",
                  "Constructor-style and open()-style opening; close()",
                  "Mode table: in, out, app, ate, trunc, binary with one-line effects",
                  "Defaults: out|trunc for ofstream, in for ifstream",
                  "The truncation trap: ios::out destroys old data; app preserves",
                  "Open-failure check with is_open() / !stream",
                  "Program: append + getline read-back loop",
                ],
              },
              {
                q: "What happens to existing data when a file is opened with only ios::out?",
                marks: 2,
              },
              {
                q: "Differentiate between ios::app and ios::ate.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.7",
            title: "Sequential file I/O: reading and writing text and records",
            body: [
              "Sequential I/O processes a file as one long stream, read or written strictly in order. Writing uses the same operators as the console: out << name << ' ' << marks << '\\n'; - the stream-insertion machinery is inherited from ostream, so anything you can print to cout you can save to a file. Reading uses in >> var, which skips whitespace and stops at each field boundary.",
              "Character and line I/O round out text handling. in.get(ch) reads one character (spaces included); in.getline(buf, 80) reads one line; in.get(ch) returning a stream that converts to bool powers the classic char-by-char copy loop while (in.get(ch)) out.put(ch). For lines as strings, getline(in, str) from <string> is the modern choice - it handles spaces and resizes automatically.",
              "Records (objects) need a separator strategy. The simplest exam-friendly pattern: write fields space- or newline-separated, and read them back field by field with >> into the same member variables. For fixed-size binary records, out.write((char*)&obj, sizeof(obj)) and in.read((char*)&obj, sizeof(obj)) copy whole objects as raw bytes - legal because sizeof is constant, but only for classes without pointers (a pointer member would store an address meaningful only in the writing process).",
              "End-of-file detection completes the pattern: the read operation itself reports failure. Loop while (in >> a >> b) or while (in.read(...)) - when extraction or read hits EOF, the stream converts to false and the loop exits cleanly. Testing in.eof() BEFORE a failed read is the classic bug: the last record gets processed twice. Test after the read, via the stream state.",
            ],
            bullets: [
              "Sequential = strictly in order; write with <<, read with >>, same operators as console.",
              "get/put move single characters; getline moves lines; gcount reports bytes moved.",
              "Record pattern: fields separated by space/newline, read back field by field.",
              "Binary records: out.write((char*)&obj, sizeof(obj)) and in.read likewise.",
              "write/read is safe only for pointer-free classes - pointers store process-local addresses.",
              "Loop on the read itself: while (in >> a >> b) exits at EOF through stream state.",
              "Never test eof() before reading - the classic double-processes-last-record bug.",
            ],
            codeExample: {
              language: "cpp",
              caption: "Write records, read them back in order - the standard exam program.",
              code: `#include <fstream>
#include <iostream>
using namespace std;

class Student {
public:
    char name[20];
    int marks;
};

int main() {
    Student s[2] = { {"Asha", 88}, {"Bilal", 74} };
    ofstream out("stu.dat", ios::binary);
    for (int i = 0; i < 2; i++)
        out.write((char*)&s[i], sizeof(Student));   // raw record

    Student t;
    ifstream in("stu.dat", ios::binary);
    while (in.read((char*)&t, sizeof(Student)))     // exits at EOF
        cout << t.name << " " << t.marks << "\\n";
    return 0;
}`,
            },
            diagram: {
              kind: "compare",
              title: "Character/line I/O vs record (block) I/O",
              caption: "Text tools for humans, byte tools for machines - pick by reader, not by habit.",
              left: {
                heading: "Text: get / getline / put / << >>",
                items: [
                  "Human-readable, editable in any editor",
                  "Fields need separators (space, newline)",
                  "getline reads full lines with spaces",
                  ">> parses numbers automatically",
                  "Slight size overhead for separators",
                ],
              },
              right: {
                heading: "Binary: read / write with sizeof",
                items: [
                  "Raw bytes - compact and fast",
                  "Fixed-size records enable random access",
                  "Whole object copied in one call",
                  "Not human-readable",
                  "Unsafe for classes with pointer members",
                ],
              },
            },
            keyTerms: [
              { term: "Sequential access", definition: "Reading/writing a file strictly from beginning to end in order." },
              { term: "get / put", definition: "Single-character unformatted input and output functions of istream/ostream." },
              { term: "write / read", definition: "Block functions moving sizeof-sized raw bytes between memory and a binary file." },
              { term: "reinterpret_cast", definition: "Cast used to view an object's address as char* for binary I/O." },
            ],
            callout: {
              type: "exam",
              title: "Test EOF after the read",
              body: "while (!in.eof()) { in >> x; process x; } processes the last record twice - the most common file-handling bug in student programs. Write the loop as while (in >> x) { ... } so the stream state decides; mention this fix explicitly when the question is about EOF handling.",
            },
            examQuestions: [
              {
                q: "Explain sequential file I/O in C++. Write a program to store student records in a file and read them back, and explain how end-of-file should (and should not) be detected.",
                marks: 7,
                outline: [
                  "Sequential definition; write with << / write(), read with >> / read()",
                  "Text vs binary record choice",
                  "Program: class Student, ofstream with binary, loop of write()",
                  "Read-back loop while (in.read(...)) printing records",
                  "EOF via stream state (stream -> bool), not pre-tested eof()",
                  "The double-last-record bug and its fix",
                  "Pointer-member caveat for raw record copies",
                ],
              },
              {
                q: "Why must a class written with write()/read() avoid pointer members?",
                marks: 3,
              },
              {
                q: "Which functions move one character and one line respectively?",
                marks: 2,
              },
            ],
          },
          {
            number: "4.8",
            title: "Random access files: seekg, seekp and in-place updates",
            body: [
              "Random access abandons the one-way stream: any byte can be read or written at any position. Every file stream keeps two position indicators - get (reading) and put (writing) - and four functions manage them: seekg(offset, origin) moves the reading position, seekp moves the writing position, tellg and tellp report the current positions. With fixed-size binary records, record i lives at offset i * sizeof(Record), making direct jumps trivial.",
              "Origins for the seek: ios::beg (offset from the start - the default), ios::cur (offset from the current position, may be negative), ios::end (offset from the end; seekg(0, ios::end) jumps to the very end, and tellg() there returns the file size - the standard way to size a file). Combine in|out mode with binary and a file becomes a random-access database of records.",
              "The in-place update pattern: open fstream file(\"stu.dat\", ios::in | ios::out | ios::binary); read record i; modify fields; seekp back to the record start (the read moved the put pointer too in fstream); write the record back; done - no rewriting of the whole file. This record-update program is the single most requested file-handling program in RGPV papers.",
              "Pitfalls: seeking in text files is unreliable because newline translation makes offsets unstable - random access demands binary mode. Also, ios::app pins every write to the end regardless of seekp, so app and in-place updates are mutually exclusive. State both caveats; they are precisely the one-mark fine print of this topic.",
            ],
            bullets: [
              "seekg / seekp move the get / put positions; tellg / tellp report them.",
              "Origins: ios::beg (default), ios::cur (relative), ios::end.",
              "seekg(0, ios::end); int size = tellg(); sizes a file instantly.",
              "Record i sits at offset i * sizeof(Record) - the random-access formula.",
              "Update pattern: open in|out|binary, read record, modify, seekp back, write.",
              "Random access requires binary mode; text-mode offsets are unstable.",
              "ios::app overrides seekp - cannot update in place in append mode.",
            ],
            codeExample: {
              language: "cpp",
              caption: "Jump to record 1, read it, bump the marks, write it back.",
              code: `#include <fstream>
#include <iostream>
using namespace std;

struct Rec { char name[20]; int marks; };

int main() {
    // assume stu.dat already holds two records
    fstream f("stu.dat", ios::in | ios::out | ios::binary);
    f.seekg(1 * sizeof(Rec));                 // record index 1
    Rec r;
    f.read((char*)&r, sizeof(Rec));
    cout << r.name << " " << r.marks << "\\n";
    r.marks += 5;                             // modify
    f.seekp(1 * sizeof(Rec));                 // put pointer back
    f.write((char*)&r, sizeof(Rec));          // in-place update
    f.close();
    return 0;
}`,
            },
            diagram: {
              kind: "flow",
              title: "The in-place record update protocol",
              caption: "Five steps replace rewriting the entire file.",
              steps: [
                { label: "Open in|out|binary", note: "fstream, not ofstream" },
                { label: "seekg(i * sizeof(Rec))", note: "jump straight to record i" },
                { label: "read into struct", note: "sizeof bytes copied raw" },
                { label: "modify fields", note: "in memory" },
                { label: "seekp + write back", note: "same offset overwritten; file size unchanged" },
              ],
            },
            keyTerms: [
              { term: "Random access", definition: "Reading or writing at any byte position without passing through the file in order." },
              { term: "seekg / seekp", definition: "Reposition the get (read) / put (write) pointer of a stream." },
              { term: "tellg / tellp", definition: "Report the current get / put position in bytes." },
              { term: "ios::beg / cur / end", definition: "The three reference origins a seek offset is measured from." },
            ],
            callout: {
              type: "warning",
              title: "Binary mode is not optional here",
              body: "In text mode the OS translates newlines, so byte offsets computed as i * sizeof(Rec) drift out of alignment and records get silently corrupted. Any random-access answer must open with ios::binary and say why in one line - it is a standard deduction otherwise.",
            },
            examQuestions: [
              {
                q: "Explain random access file handling in C++. Describe seekg, seekp, tellg and tellp with their origin parameters, and write a program that updates one record of a binary file in place.",
                marks: 7,
                outline: [
                  "Random access definition vs sequential",
                  "Get/put position pointers of a stream",
                  "seekg/seekp(offset, origin) with beg/cur/end; tellg/tellp reporting",
                  "File-size idiom: seekg(0, ios::end) + tellg()",
                  "Record formula: offset = i * sizeof(Rec)",
                  "Update program: open in|out|binary, read, modify, seekp, write",
                  "Caveats: binary mode required; ios::app defeats seekp",
                ],
              },
              {
                q: "Write the statement that moves the read pointer to the 3rd record of sizeof(Rec)-sized records.",
                marks: 2,
              },
              {
                q: "How do you find the size of a file using tellg()?",
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
      title: "Templates, Exception Handling & the Standard Library",
      summary:
        "Generic programming with function and class templates (including multiple and default parameters), the complete exception-handling machinery from try/throw/catch to standard exception classes, and the STL as object-oriented programming in practice.",
      chapter: {
        number: "05",
        title: "Generic Code, Exceptions & the STL",
        intro:
          "Unit V closes the subject with two language-level safety nets and one library showcase: templates that write code once for every type, exceptions that separate error detection from error handling, and the Standard Template Library that packages containers, iterators and algorithms into the largest OOP payoff of all.",
        inOneBreath:
          "Function templates: template <class T> T f(T, T) - the compiler deduces T per call and instantiates a real function; class templates: template <class T> class Stack with members qualified Stack<T>::; multiple parameters template <class T, class U> and default arguments are both allowed. Exceptions: throw raises, try guards, catch handles - handler search unwinds the stack in order, catch(...) is the catch-all, rethrow propagates, and stack unwinding destroys local objects. Standard exceptions form an inheritance tree under std::exception with what(). The STL = containers + iterators + algorithms: vector/list/map store, iterators traverse, sort/find/accumulate compute.",
        sections: [
          {
            number: "5.1",
            title: "Generic programming and function templates",
            body: [
              "Generic programming writes an algorithm once, parameterised by type, instead of once per type. Before templates, a maximum function needed three near-identical overloads - max(int,int), max(double,double), max(string,string) - differing only in type. A function template collapses them into one declaration: template <class T> T myMax(T a, T b) { return a > b ? a : b; }. T is a type placeholder; class and typename are interchangeable here.",
              "Templates are not code at compile time of the template itself - they are recipes. When a call such as myMax(3, 5) appears, the compiler deduces T = int, generates (instantiates) a real function myMax<int>(int, int), and compiles that. Each distinct type used produces its own instantiation; types that do not support the operations the body uses (say, a class without operator>) fail at instantiation time with an error pointing inside the template.",
              "The classic exam comparison is template vs macro vs overload. Unlike #define macros, templates are type-checked and evaluated once. Unlike hand-written overloads, one template serves infinitely many types with a single source of truth - fix the algorithm once, every instantiation is fixed. Unlike virtual functions, template dispatch is compile-time: no vtable overhead, and the generated code inlines happily.",
              "Why the topic matters: the entire C++ standard library is template-based - vector<int>, map<string,int>, sort - so templates are not an exotic extra but the substrate of modern C++. For the exam, know the syntax cold, the deduction rule (both arguments must agree on T or the call fails), and one complete program with output.",
            ],
            bullets: [
              "template <class T> (or typename) declares a type placeholder T for the function.",
              "The compiler deduces T from the arguments and instantiates a concrete function per type.",
              "One template replaces a family of hand-written overloads - single source of truth.",
              "Templates are compile-time polymorphism: no vtable, fully optimisable, inlineable.",
              "Type errors surface at instantiation: T must support every operation the body uses.",
              "Both arguments must deduce the same T (myMax(3, 4.5) fails) unless T has two parameters.",
              "The STL (vector, sort, map) is built entirely on templates.",
            ],
            codeExample: {
              language: "cpp",
              caption: "One template, three instantiations - the compiler writes the overloads.",
              code: `#include <iostream>
#include <string>
using namespace std;

template <class T>
T myMax(T a, T b) { return a > b ? a : b; }

int main() {
    cout << myMax(3, 7) << "\\n";            // T = int    -> 7
    cout << myMax(2.5, 1.8) << "\\n";        // T = double -> 2.5
    cout << myMax(string("amy"), string("bob")) << "\\n";  // bob
    // cout << myMax(3, 4.5);               // ERROR: T clash
    return 0;
}`,
            },
            diagram: {
              kind: "compare",
              title: "Three ways to reuse one algorithm",
              caption: "Macros, overloads and templates - only one of them is type-safe and single-sourced.",
              left: {
                heading: "Function template",
                items: [
                  "Written once with type placeholder T",
                  "Type-checked at instantiation",
                  "Compiler generates per-type versions",
                  "Compile-time dispatch - no overhead",
                  "Errors point at real types",
                ],
              },
              right: {
                heading: "Macro / hand-written overloads",
                items: [
                  "Macro: text substitution, zero checking",
                  "Macro evaluates arguments multiple times",
                  "Overloads: one copy per type, hand-maintained",
                  "N overloads = N chances to fix a bug badly",
                  "Divergent copies drift apart over time",
                ],
              },
            },
            keyTerms: [
              { term: "Template", definition: "A blueprint from which the compiler generates type-specific functions or classes." },
              { term: "Template parameter T", definition: "The placeholder type declared in template <class T>; replaced by a real type per use." },
              { term: "Instantiation", definition: "The compiler's generation of a concrete function or class for a specific type argument." },
              { term: "Generic programming", definition: "Designing algorithms independent of the data types they operate on." },
            ],
            callout: {
              type: "exam",
              title: "Deduction failure is a favourite short question",
              body: "myMax(3, 4.5) fails because 3 forces T=int while 4.5 forces T=double. The fix is myMax<double>(3, 4.5) or two template parameters. Write both the error explanation and the two fixes - that is a complete 3-mark answer.",
            },
            examQuestions: [
              {
                q: "What is a function template? Explain template syntax, how the compiler deduces and instantiates types, and compare templates with macros and function overloading. Illustrate with a program.",
                marks: 7,
                outline: [
                  "Motivation: N overloads differing only in type collapse to one template",
                  "Syntax: template <class T> T f(T a, T b)",
                  "Deduction: T from call arguments; one instantiation per type",
                  "Errors at instantiation if T lacks needed operations",
                  "Comparison: type-safe vs macro; single-source vs N overloads; compile-time vs virtual",
                  "Both arguments must agree on T; explicit myMax<double>(3, 4.5) fix",
                  "Program: myMax over int/double/string with outputs",
                ],
              },
              {
                q: "Why does myMax(3, 4.5) fail to compile and how is it fixed?",
                marks: 3,
              },
              {
                q: "Are class and typename interchangeable in template parameter lists?",
                marks: 2,
              },
            ],
          },
          {
            number: "5.2",
            title: "Templates with multiple parameters, overloading and specialisation",
            body: [
              "A template may declare several type parameters: template <class T, class U> void show(T a, U b) - one argument can be int, the other double, and the instantiation show<int, double> is generated. Mixed-type arithmetic that failed with one T now works: template <class T, class U> auto-free design simply makes each parameter independent.",
              "Non-type (value) parameters are also legal: template <class T, int N> class Array stores N elements of T with N fixed at compile time - Array<int, 10>. The value must be a compile-time constant, which is precisely what makes the size part of the type and the storage stack-allocatable. This is how std::array<int, 10> works.",
              "Function templates can be overloaded - with ordinary functions and with other templates. Resolution prefers an exact non-template match, then the template with the best deduction. Explicit specialisation can also supply a hand-written version for one type: template <> int myMax<int>(int a, int b) { ... } replaces the generated one for that type. The classic exam example is a specialisation of a comparison or display function for const char* so it compares or prints strings, not pointers.",
              "Default template arguments round off the toolkit: template <class T = int> void f() lets f<int>() and f() both work. Together these features mean one template can serve a whole family of special cases with zero runtime cost - and every one of these mechanisms is exercised daily by the standard library.",
            ],
            bullets: [
              "Multiple type parameters: template <class T, class U> - independent deduction per parameter.",
              "Non-type parameters: template <class T, int N> - compile-time constants as part of the type.",
              "std::array<int, 10> is the everyday example of a non-type size parameter.",
              "Templates overload with normal functions; exact non-template matches win resolution.",
              "Explicit specialisation: template <> f<int>(...) hand-writes the version for one type.",
              "Specialise for const char* to compare/print strings rather than pointer values.",
              "Default template arguments: template <class T = int> allows omission at use.",
            ],
            codeExample: {
              language: "cpp",
              caption: "Multiple type parameters plus a const char* specialisation.",
              code: `#include <iostream>
#include <cstring>
using namespace std;

template <class T, class U>
void show(T a, U b) { cout << a << " and " << b << "\\n"; }

template <class T>
T biggest(T a, T b) { return a > b ? a : b; }

template <>                       // specialisation for C strings
const char* biggest(const char* a, const char* b) {
    return strcmp(a, b) > 0 ? a : b;
}

int main() {
    show(7, 2.5);                 // 7 and 2.5
    cout << biggest(4, 9) << "\\n";               // 9
    cout << biggest("pear", "apple") << "\\n";    // pear
    return 0;
}`,
            },
            diagram: {
              kind: "flow",
              title: "Template instantiation, step by step",
              caption: "From source line to generated function.",
              steps: [
                { label: "Call site found", note: "biggest(4, 9)" },
                { label: "Parameter deduction", note: "T = int from both arguments" },
                { label: "Specialisation check", note: "exact-type hand-written version wins if present" },
                { label: "Instantiation", note: "compiler generates biggest<int>(int, int)" },
                { label: "Type check of body", note: "operations must be valid for T" },
                { label: "Compiled call", note: "runs like any hand-written function" },
              ],
            },
            keyTerms: [
              { term: "Non-type parameter", definition: "Template parameter carrying a compile-time constant value (e.g. int N) rather than a type." },
              { term: "Specialisation", definition: "A hand-written template version for one specific type: template <> f<int>(...)." },
              { term: "Overload resolution", definition: "Compiler's rule choosing between template and non-template candidates; exact matches win." },
            ],
            callout: {
              type: "tip",
              title: "Specialise const char*, never compare pointers",
              body: "A generic biggest(\"pear\", \"apple\") compares addresses - garbage results. The specialisation using strcmp is the standard demonstration that templates do not magically handle every type. One sentence on WHY the specialisation is needed is what examiners look for.",
            },
            examQuestions: [
              {
                q: "Explain function templates with multiple parameters, non-type parameters and explicit specialisation, with an example of each. Why must const char* be specialised?",
                marks: 7,
                outline: [
                  "Multiple type params: template <class T, class U> with mixed-type call",
                  "Non-type params: template <class T, int N>; compile-time constant requirement",
                  "std::array<int, 10> as real-world non-type example",
                  "Overloading templates with ordinary functions; resolution order",
                  "Explicit specialisation syntax template <> f<int>(...)",
                  "const char* problem: pointer comparison vs strcmp",
                  "Program with show(T,U), biggest<T> and its specialisation",
                ],
              },
              {
                q: "Write a template declaration for a fixed-size Array of T with size 20.",
                marks: 2,
              },
              {
                q: "What is the syntax for explicitly specialising a function template for double?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.3",
            title: "Class templates",
            body: [
              "A class template is a blueprint for whole classes: template <class T> class Stack declares T throughout, and each use - Stack<int>, Stack<string> - instantiates a distinct class with T replaced. Every member that uses T is written as if T were a real type; the compiler performs the substitution at each instantiation point.",
              "Member functions defined outside the class need the template header repeated and the class name qualified: template <class T> void Stack<T>::push(T v) { ... }. The Stack<T>:: prefix supplies the scope exactly as Rectangle:: did in Unit II - only now the scope itself is parameterised. Constructors, destructors and the whole lifecycle machinery work identically.",
              "The canonical worked example is a generic stack over a fixed array: data member T arr[SIZE]; top index; push, pop, isEmpty, isFull. Written once with T, it becomes a stack of int, double, string or any user class the moment it is declared with that type argument. This one program answers most class-template questions; rehearse writing it from memory in under five minutes.",
              "Why class templates matter: they are the mechanism behind every STL container - vector<T>, list<T>, map<K,V> are all class templates. The design benefit is the same single-source-of-truth argument as function templates, but bigger: one tested container class serves every element type, with type errors caught at compile time instead of void*-casting disasters at run time.",
            ],
            bullets: [
              "Syntax: template <class T> class Stack { T arr[SIZE]; ... };",
              "Stack<int> and Stack<string> are two separate generated classes.",
              "Outside definitions repeat the template header: template <class T> void Stack<T>::push(T v).",
              "Objects declare with the type argument: Stack<int> s; - like any class instantiation.",
              "Generic stack (push/pop/isEmpty) is the standard exam program - memorise it.",
              "Class templates underpin vector<T>, list<T>, map<K,V> - the whole STL.",
              "Type safety: wrong-type pushes are compile errors, not silent memory corruption.",
            ],
            codeExample: {
              language: "cpp",
              caption: "A generic Stack class template used with two element types.",
              code: `#include <iostream>
#include <string>
using namespace std;

template <class T>
class Stack {
    T arr[10];
    int top;
public:
    Stack() : top(-1) {}
    void push(T v) { if (top < 9) arr[++top] = v; }
    T pop() { return top >= 0 ? arr[top--] : T(); }
    bool isEmpty() { return top < 0; }
};

template <class T>                 // outside definition style
bool Stack<T>::isEmpty() { return top < 0; }

int main() {
    Stack<int> si;
    si.push(10); si.push(20);
    cout << si.pop() << "\\n";              // 20
    Stack<string> ss;
    ss.push("done");
    cout << ss.pop() << "\\n";              // done
    return 0;
}`,
            },
            diagram: {
              kind: "pipeline",
              title: "From class template to working object",
              caption: "The recipe becomes a class, the class becomes an object.",
              stages: [
                { label: "Template written", note: "template <class T> class Stack - no code yet" },
                { label: "Declaration with type", note: "Stack<int> si; triggers instantiation" },
                { label: "Class generated", note: "T replaced by int everywhere; members compiled" },
                { label: "Object constructed", note: "normal constructor, normal lifecycle" },
                { label: "Type-safe use", note: "push(3.5) is a compile error - protection for free" },
              ],
            },
            keyTerms: [
              { term: "Class template", definition: "Blueprint declaring a class parameterised by one or more type placeholders." },
              { term: "Stack<T>", definition: "A specific instantiation of a stack template for element type T." },
              { term: "Member of a template", definition: "Function defined outside as template <class T> ReturnType ClassName<T>::name." },
            ],
            callout: {
              type: "warning",
              title: "Every outside definition needs its template header",
              body: "Writing bool Stack::isEmpty() outside a template class is a compile error - the definition must begin with template <class T> and qualify Stack<T>::. This is the single most failed line in class-template programs; check it first when your code will not compile.",
            },
            examQuestions: [
              {
                q: "What is a class template? Explain its syntax, how member functions are defined outside the class, and write a generic Stack class used with at least two different element types.",
                marks: 7,
                outline: [
                  "Definition: blueprint for classes parameterised by T",
                  "Syntax template <class T> class Stack with T-typed members",
                  "Each Stack<int> / Stack<string> is a distinct generated class",
                  "Outside definition: template <class T> void Stack<T>::push(T v)",
                  "Program: generic array-based stack with push/pop/isEmpty",
                  "Two instantiations used in main with outputs",
                  "Connection to STL containers vector<T> / map<K,V>",
                ],
              },
              {
                q: "Differentiate between a class template and a template class.",
                marks: 3,
              },
              {
                q: "Write the outside definition header for Stack<T>::pop returning T.",
                marks: 2,
              },
            ],
          },
          {
            number: "5.4",
            title: "Class templates with multiple and default parameters",
            body: [
              "Real containers need more than one parameter. map<K, V> takes a key type and a value type; a two-key cache takes three. The syntax extends naturally: template <class K, class V> class Pair { K key; V val; ... }; and usage is Pair<string, int> age;. Each type argument is independent, and every combination instantiates its own class.",
              "Default template arguments let the user omit types: template <class T, int N = 10> class Array means Array<double> is Array<double, 10>. Defaults follow the same trailing-only rule as function default arguments - once a parameter has a default, all parameters to its right must have defaults too. This is exactly how vector allocates: the full declaration is template <class T, class Allocator = allocator<T>> class vector, and nobody ever writes the second argument.",
              "Member functions of such templates may themselves be templates (member templates), and a class template may inherit from another class template or from an ordinary class. For the exam the two essential skills are: declare a multi-parameter template correctly, and instantiate it with some arguments defaulted. A Pair<K,V> plus an Array<T,N = 10> program covers both.",
              "The conceptual frame worth one line in answers: templates are compile-time polymorphism. Choosing Stack<int> vs Stack<string> is like choosing between overloads - resolved by the compiler, zero runtime cost, and unlike inheritance-based polymorphism it needs no virtual functions, no vtable, and no base-class interface. Know when each applies: templates for type-independent structure, virtual functions for behaviour that varies per object at run time.",
            ],
            bullets: [
              "Multiple parameters: template <class K, class V> class Pair { K key; V val; };",
              "map<K, V> is the everyday example of a two-parameter class template.",
              "Defaults: template <class T, int N = 10> - Array<double> means N = 10.",
              "Default parameters must be trailing (rightmost), mirroring function default rules.",
              "vector's real declaration defaults its allocator: class Allocator = allocator<T>.",
              "Templates = compile-time polymorphism; virtual functions = run-time polymorphism.",
              "Choose templates for type-independent structure, inheritance for per-object behaviour.",
            ],
            codeExample: {
              language: "cpp",
              caption: "A two-parameter Pair template and a sized Array with a default.",
              code: `#include <iostream>
#include <string>
using namespace std;

template <class K, class V>
class Pair {
    K key; V val;
public:
    Pair(K k, V v) : key(k), val(v) {}
    void show() { cout << key << " = " << val << "\\n"; }
};

template <class T, int N = 10>      // default size
class Array {
    T d[N];
public:
    int size() { return N; }
};

int main() {
    Pair<string, int> a("age", 20);
    a.show();                       // age = 20
    Pair<int, double> b(1, 99.5);
    b.show();                       // 1 = 99.5
    Array<float> f;                 // N defaults to 10
    cout << f.size() << "\\n";       // 10
    return 0;
}`,
            },
            diagram: {
              kind: "compare",
              title: "Template polymorphism vs virtual-function polymorphism",
              caption: "Both are polymorphism - the difference is when the choice is made.",
              left: {
                heading: "Templates (compile-time)",
                items: [
                  "Type decided by the compiler at instantiation",
                  "Zero runtime cost - no vtable, no indirection",
                  "One generated copy per type used",
                  "Structure reused across types (containers)",
                  "Errors found at compile time",
                ],
              },
              right: {
                heading: "Virtual functions (run-time)",
                items: [
                  "Behaviour chosen per object while running",
                  "One vtable indirection per call",
                  "One copy of code shared by all types",
                  "Behaviour varied across objects (shapes)",
                  "Requires base pointer/reference",
                ],
              },
            },
            keyTerms: [
              { term: "Default template argument", definition: "Preset for a template parameter used when the call omits it: template <class T = int>." },
              { term: "Compile-time polymorphism", definition: "Type/behaviour selection done by the compiler - templates and overloading." },
              { term: "Run-time polymorphism", definition: "Behaviour selection during execution via virtual functions and base pointers." },
            ],
            callout: {
              type: "exam",
              title: "The trailing-default rule repeats",
              body: "Just like function parameters, template parameters with defaults must sit at the right end - template <class T = int, int N> is illegal. State the rule once; it applies to both contexts and is a standard 2-mark question in either.",
            },
            examQuestions: [
              {
                q: "Explain class templates with multiple type parameters and default template arguments. Contrast compile-time (template) polymorphism with run-time (virtual) polymorphism, and write a program using a two-parameter template and a defaulted one.",
                marks: 7,
                outline: [
                  "Multi-parameter syntax template <class K, class V> class Pair",
                  "Instantiation Pair<string, int>; map<K,V> as real example",
                  "Default arguments syntax and trailing-only rule",
                  "vector<T, Allocator = allocator<T>> real-world default",
                  "Compile-time vs run-time polymorphism contrast table",
                  "When to choose which mechanism",
                  "Program: Pair<K,V> twice + Array<T, N = 10> with output 10",
                ],
              },
              {
                q: "Why must template parameters with defaults be trailing?",
                marks: 2,
              },
              {
                q: "Which real STL container is a two-parameter class template, and what are its parameters?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.5",
            title: "Exception handling: try, throw and catch",
            body: [
              "Exception handling separates error DETECTION from error HANDLING. The code that discovers a problem (deep inside a function) throws an exception; the code that knows what to do about it (often far away, near main) catches it. Between the two, the normal flow is abandoned and the runtime searches for a handler - no error codes threaded through every return value.",
              "The three keywords form one protocol. throw raises an exception carrying a value: throw 404, throw \"overflow\", or throw SomeObject(args). try { ... } guards a block; any throw inside it (including inside functions it calls) jumps out of the whole try region. catch (Type t) { ... } handles a specific type; handlers are tried top to bottom in order of declaration, and the first type-compatible one runs.",
              "Matching is by type, not value, and it is strict: catch(int) matches only int throws - no conversions, so double does not match int and vice versa. If no catch in the chain matches, the program calls terminate() and aborts ungracefully. catch(...) matches everything and must be listed last (the compiler enforces reachability) - the safety net for unknown types.",
              "A worked skeleton: a division function tests for zero and throws a const char* message; main wraps the call in try and prints the message from catch. Two properties to name in answers: exceptions propagate up the call stack until a matching handler is found, and only code inside a try block can have its exceptions caught - a throw with no try above it goes straight to terminate.",
            ],
            bullets: [
              "throw expr; raises an exception carrying a value of any type.",
              "try { } guards a block - throws inside (including in called functions) jump to handlers.",
              "catch (Type t) { } handles matching types; handlers checked in declaration order.",
              "Type matching is strict: no conversions between int and double throws.",
              "No matching handler -> terminate() aborts the program.",
              "catch (...) catches everything; must appear last in the handler list.",
              "Separation of concerns: thrower reports WHAT went wrong, catcher decides WHAT to do.",
            ],
            codeExample: {
              language: "cpp",
              caption: "Throw a message, catch it two frames up - with output.",
              code: `#include <iostream>
using namespace std;

double divide(int a, int b) {
    if (b == 0)
        throw "division by zero";       // detection
    return (double)a / b;
}

int main() {
    try {                               // handling zone
        cout << divide(10, 2) << "\\n";  // 5
        cout << divide(7, 0) << "\\n";   // skipped
        cout << "never printed\\n";
    }
    catch (const char* msg) {           // matches the throw type
        cout << "error: " << msg << "\\n";
    }
    cout << "program continues\\n";
    return 0;
}`,
            },
            diagram: {
              kind: "fork",
              title: "Fate of a thrown exception",
              caption: "Every throw follows exactly one of these paths.",
              start: "throw fires inside a try block",
              branches: [
                { label: "a catch matches the type", outcome: "handler runs; program continues after the try", good: true },
                { label: "no catch matches", outcome: "std::terminate() called - program aborts", good: false },
                { label: "handler rethrows (throw;)", outcome: "exception continues outward to an outer try", good: true },
                { label: "throw outside any try", outcome: "no handler possible - terminate immediately", good: false },
              ],
            },
            keyTerms: [
              { term: "throw", definition: "Statement that raises an exception carrying a value of any type." },
              { term: "try block", definition: "Guarded region whose inner throws are eligible for matching handlers." },
              { term: "catch handler", definition: "Type-matched clause that receives and processes the thrown value." },
              { term: "catch(...)", definition: "Catch-all handler matching any exception type; must be last." },
            ],
            callout: {
              type: "exam",
              title: "Order of handlers is graded",
              body: "If your program lists catch(...) before catch(int), the int handler is unreachable - compilers reject it and examiners deduct. The rule (specific first, catch-all last) is itself a standard 2-mark question; write it explicitly under your handler list.",
            },
            examQuestions: [
              {
                q: "Explain the exception-handling mechanism of C++: the roles of try, throw and catch, how handlers are matched and ordered, and what happens when no handler matches. Write a program with a throwing function and a catching main.",
                marks: 7,
                outline: [
                  "Motivation: separate detection from handling; no error-code plumbing",
                  "throw expr raises any-typed value; try guards the region",
                  "catch matching by exact type, in declaration order",
                  "No conversions between built-in throw types",
                  "Unmatched throw -> terminate(); catch(...) last as safety net",
                  "Propagation through nested calls up to the nearest matching handler",
                  "Program: divide throwing const char*, main printing error and continuing",
                ],
              },
              {
                q: "Where must catch(...) appear in a handler list and why?",
                marks: 2,
              },
              {
                q: "Does catch(double) handle a throw of int? Justify.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.6",
            title: "Throwing objects, stack unwinding, rethrow and catch-all",
            body: [
              "Throwing class objects beats throwing ints and strings: an exception object can carry structured data - an error code, a message, the offending value - and its type can organise handlers into families. Throwing an object constructs it at the throw site, and the catch parameter receives a copy of it. Catching by const reference (catch (const MyError& e)) is best practice: it avoids another copy and allows catching derived classes polymorphically.",
              "Stack unwinding is what happens between throw and catch. When an exception propagates out of a function, every local object in every frame it leaves is destroyed - destructors run in reverse order exactly as in normal returns. This guarantee (RAII, Unit 2.8) is why resources wrapped in objects (file streams, locks) release themselves during exception propagation: the file stream destructor closes the file even though the function never reached its return.",
              "A handler can give up and rethrow with a bare throw; statement - the original exception (not a copy) continues outward to an outer try, enabling handler chains: a low-level layer logs and rethrows, a high-level layer reports to the user. After a handler completes without rethrowing, execution resumes at the first statement after the whole try-catch, not inside the try.",
              "Multiple catch blocks for one try handle different exception types; inheritance-aware matching means catch (const std::exception&) catches every standard exception subclass. Design guidance to quote: throw by value, catch by reference, and never let an exception escape a destructor - an exception during unwinding calls terminate immediately.",
            ],
            bullets: [
              "Throw user-defined objects to carry structured error data (code + message + value).",
              "Catch by const reference: no extra copy, catches derived exception classes too.",
              "Stack unwinding destroys all local objects in frames the exception exits.",
              "RAII + unwinding = resources self-release (file streams close, memory frees).",
              "Bare throw; inside a handler rethrows the SAME exception outward.",
              "After successful handling, execution resumes after the entire try-catch block.",
              "Multiple catch blocks match by type; derived types match base-class handlers.",
            ],
            codeExample: {
              language: "cpp",
              caption: "An exception object with data, rethrow, and the catch-all.",
              code: `#include <iostream>
using namespace std;

class AgeError {
public:
    int bad;
    AgeError(int b) : bad(b) {}
};

void validate(int age) {
    try {
        if (age < 0) throw AgeError(age);
    }
    catch (AgeError& e) {
        cout << "logged age " << e.bad << "\\n";
        throw;                          // rethrow same object
    }
}

int main() {
    try {
        validate(-3);
    }
    catch (AgeError& e) {               // outer handler
        cout << "rejected: " << e.bad << "\\n";
    }
    catch (...) { cout << "unknown\\n"; } // must be last
    return 0;
}`,
            },
            diagram: {
              kind: "flow",
              title: "The life of an exception",
              caption: "From throw to resume-or-terminate, every stage is deterministic.",
              steps: [
                { label: "throw object", note: "exception object constructed at throw site" },
                { label: "stack unwinding", note: "locals destroyed, destructors run" },
                { label: "handler search", note: "innermost try outwards, first type match wins" },
                { label: "handler runs", note: "bare throw; rethrows the same object outward" },
                { label: "resume after try-catch", note: "or terminate() if never handled" },
              ],
            },
            keyTerms: [
              { term: "Stack unwinding", definition: "Automatic destruction of local objects in every frame an exception exits." },
              { term: "Rethrow", definition: "Bare throw; inside a handler forwarding the same exception to outer handlers." },
              { term: "Exception object", definition: "The value thrown - usually a class instance carrying error details." },
            ],
            callout: {
              type: "tip",
              title: "Throw by value, catch by reference",
              body: "The mantra earns marks in any exception-design question: throw by value (cheap construction), catch by const reference (no slicing, no copy, polymorphic matching). Add \"never throw from a destructor during unwinding\" and the design section is complete.",
            },
            examQuestions: [
              {
                q: "Explain throwing user-defined exception objects, stack unwinding and rethrowing. Why should exceptions be caught by reference? Write a program with an exception class, an intermediate logging handler and a rethrow.",
                marks: 7,
                outline: [
                  "Why objects: structured error data + type-based handler families",
                  "Catch by const reference: no copy, no slicing, catches derived types",
                  "Stack unwinding: destructors run in reverse order in exited frames",
                  "RAII tie-in: resources released during propagation",
                  "Bare throw; rethrows the same exception to outer try",
                  "Execution resumes after the whole try-catch when handled",
                  "Program: AgeError thrown, logged and rethrown, outer catch prints",
                ],
              },
              {
                q: "What does a bare throw; statement do inside a catch block?",
                marks: 2,
              },
              {
                q: "Where does execution resume after a catch block finishes?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.7",
            title: "Standard exception classes and designing your own hierarchy",
            body: [
              "The standard library ships a ready exception family rooted at std::exception (header <exception>), whose virtual const char* what() returns a description. Below it sit two branches: std::logic_error for detectable-before-run mistakes (invalid_argument, out_of_range, length_error) and std::runtime_error for problems only visible at run time (overflow_error, range_error). vector::at throws out_of_range; stoi throws invalid_argument - you have met this family already.",
              "Using the standard classes is preferred over inventing ad-hoc types: their common base means ONE handler catch (const exception& e) { cerr << e.what(); } covers everything the library can throw, and what() gives a free message. Showing at() versus [] is the vivid demonstration: [] on a bad index is undefined behaviour, at() throws out_of_range - same container, safety on demand.",
              "Designing your own hierarchy follows the same shape: derive from std::exception (or std::runtime_error), override what() to return your message, and throw subclasses so handlers can catch either the whole family or a specific leaf. A realistic example: class InsufficientFunds : public runtime_error with a deficit member, thrown by Account::withdraw, caught as runtime_error in main.",
              "Best-practice list for the exam: derive from std::exception, include useful data in members, override what(), throw by value, catch by const reference, order handlers from most derived to most general, and keep destructors exception-free. One program with a custom exception class overriding what() demonstrates every bullet at once.",
            ],
            bullets: [
              "std::exception is the root; virtual what() returns the message.",
              "logic_error branch: invalid_argument, out_of_range, length_error - catchable bugs.",
              "runtime_error branch: overflow_error, range_error - runtime conditions.",
              "vector::at() throws out_of_range; [] does not - safety on demand.",
              "One catch (const exception& e) with e.what() handles the whole family.",
              "Custom exceptions: derive, override what(), optionally add data members.",
              "Order handlers most-derived first; keep destructors exception-free.",
            ],
            codeExample: {
              language: "cpp",
              caption: "A custom exception derived from std::exception with what() overridden.",
              code: `#include <iostream>
#include <exception>
#include <vector>
using namespace std;

class InsufficientFunds : public exception {
    double short_by;
public:
    InsufficientFunds(double s) : short_by(s) {}
    const char* what() throw() {
        return "withdrawal exceeds balance";
    }
    double deficit() { return short_by; }
};

int main() {
    try {
        throw InsufficientFunds(250.0);
    }
    catch (const InsufficientFunds& e) {
        cout << e.what() << " (need " << e.deficit() << ")\\n";
    }
    vector<int> v(3);
    try { v.at(10) = 1; }                          // checked access
    catch (const exception& e) { cout << e.what(); }
    return 0;
}`,
            },
            diagram: {
              kind: "layers",
              title: "The standard exception hierarchy",
              caption: "Catch high for safety, catch low for precision.",
              layers: [
                { label: "std::exception", note: "root; virtual what()" },
                { label: "std::logic_error / std::runtime_error", note: "the two standard branches" },
                { label: "out_of_range, invalid_argument, overflow_error", note: "concrete library exceptions" },
                { label: "Your exceptions", note: "derive from a branch, override what()" },
              ],
            },
            keyTerms: [
              { term: "std::exception", definition: "Root standard exception class providing virtual what()." },
              { term: "what()", definition: "Virtual member returning a human-readable error description." },
              { term: "out_of_range", definition: "logic_error subclass thrown by checked accesses such as vector::at()." },
              { term: "Custom exception", definition: "User class derived from std::exception adding data and a specific what()." },
            ],
            callout: {
              type: "exam",
              title: "Catch the family, not the leaf",
              body: "The sophisticated sentence examiners reward: \"catch (const exception& e) catches every standard and derived exception, so library and user errors share one handler, while more specific handlers placed earlier can special-case leaves\". Pair it with the at() versus [] demo and this 7-mark question is fully covered.",
            },
            examQuestions: [
              {
                q: "Describe the standard C++ exception hierarchy and its commonly used classes. Explain how to design a custom exception class, and write a program using both a standard exception (at()) and your own exception with what().",
                marks: 7,
                outline: [
                  "Root std::exception with virtual what()",
                  "logic_error branch and its subclasses; runtime_error branch",
                  "vector::at() throwing out_of_range vs unchecked []",
                  "One family handler catch (const exception&) with what()",
                  "Custom class: derive, override what(), add data members",
                  "Handler ordering: derived before base",
                  "Program: InsufficientFunds custom + at() out_of_range caught",
                ],
              },
              {
                q: "What does vector::at(10) do differently from v[10] for a 3-element vector?",
                marks: 3,
              },
              {
                q: "Which member of std::exception returns the error message?",
                marks: 2,
              },
            ],
          },
          {
            number: "5.8",
            title: "The STL as object-oriented programming in practice",
            body: [
              "The Standard Template Library is where every technique in this subject meets: containers are class templates (Unit V), their operators are overloaded (Unit III), iterators overload ++ and * to behave like pointers (Unit III special operators), and algorithms are function templates (Unit V) working through iterators (Unit IV pointers made generic). Knowing the STL is therefore the best possible revision of the whole syllabus through working code.",
              "The three pillars. Containers store data: vector (contiguous array, fast random access), list (doubly linked, fast splicing), map (balanced tree of key-value pairs, sorted lookup), set, deque, stack and queue adapters. Iterators are generalized pointers: begin() and end() delimit every container, and all traversal is for (auto it = v.begin(); it != v.end(); ++it) or the range-for for (auto x : v). Algorithms are free function templates: sort(v.begin(), v.end()), find, count, accumulate, reverse, max_element - they work on ANY container whose iterators they accept.",
              "The payoff is the decoupling: sort does not know vector from list; it only knows that iterators support ++, * and comparison. Adding a new container does not touch a single algorithm, and adding a new algorithm serves every container - the open-closed principle from Unit 1.5 realised at library scale. This separation is also why the same for loop pattern reads identically over int vectors and string maps.",
              "For the exam, the essential program is a vector of a user-defined class sorted by a member: build the class (Unit II), place objects in vector<Student> (class template), sort with a lambda or functor comparator (functors, Unit 3.4), and print with iterators. One such program demonstrates class templates, operator overloading, iterators and algorithms in about fifteen lines - the perfect closing example of the subject.",
            ],
            bullets: [
              "Three pillars: containers store, iterators traverse, algorithms compute.",
              "Core containers: vector, list, deque, map, set; stack/queue as adapters.",
              "begin()/end() iterator pair delimits every container; range-for is the shorthand.",
              "Algorithms are function templates: sort, find, count, reverse, accumulate, max_element.",
              "Iterators overload ++, * and == - Unit III special operators doing real work.",
              "Container/algorithm decoupling = open-closed principle at library scale.",
              "vector of user class + sort with comparator = the all-concepts exam program.",
            ],
            codeExample: {
              language: "cpp",
              caption: "Objects in a container, sorted by a member - every unit in one program.",
              code: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

class Student {
public:
    string name; int marks;
    Student(string n, int m) : name(n), marks(m) {}
};

bool byMarks(const Student& a, const Student& b) {
    return a.marks > b.marks;               // descending
}

int main() {
    vector<Student> v;                       // class template
    v.push_back(Student("Asha", 88));
    v.push_back(Student("Bilal", 74));
    sort(v.begin(), v.end(), byMarks);       // algorithm + functor
    for (auto& s : v)                        // iterator traversal
        cout << s.name << " " << s.marks << "\\n";
    return 0;
}`,
            },
            diagram: {
              kind: "pyramid",
              title: "The STL architecture",
              caption: "Algorithms on top never touch containers directly - iterators bridge them.",
              tiers: [
                { label: "Algorithms", note: "sort, find, count - function templates" },
                { label: "Iterators", note: "generalised pointers: begin(), end(), ++, *" },
                { label: "Containers", note: "vector, list, map, set - class templates" },
                { label: "Allocators", note: "memory strategy behind every container" },
              ],
            },
            keyTerms: [
              { term: "Container", definition: "STL class template that stores collections (vector, list, map, set)." },
              { term: "Iterator", definition: "Object generalising pointers to traverse containers; begin()/end() delimit the range." },
              { term: "Algorithm", definition: "Free function template operating through iterators (sort, find, count)." },
              { term: "STL", definition: "Standard Template Library: the generic container/iterator/algorithm framework of C++." },
            ],
            callout: {
              type: "tip",
              title: "Close the paper with the integration program",
              body: "If a question says \"explain STL with an example\", the vector-of-objects sort shows class templates, operator overloading, functors and iterators at once - and signals to the examiner that you see the subject as one connected system, not ten disconnected chapters.",
            },
            examQuestions: [
              {
                q: "Explain the three components of the STL and how they interact. Show how algorithms remain independent of containers through iterators, and write a program storing class objects in a vector and sorting them.",
                marks: 7,
                outline: [
                  "Containers: vector/list/map as class templates",
                  "Iterators: generalised pointers, begin()/end(), ++ and * overloaded",
                  "Algorithms: sort/find/count as function templates over iterator ranges",
                  "Decoupling: algorithms know only iterator requirements",
                  "Open-closed principle: new containers/algorithms without touching the other side",
                  "Program: vector<Student>, sort with comparator, range-for print",
                  "Tie-back: templates + overloading + OOP classes in one example",
                ],
              },
              {
                q: "Name three STL containers and the data structure each is built on.",
                marks: 3,
              },
              {
                q: "What do v.begin() and v.end() return, and why is end() not the last element?",
                marks: 2,
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
        "RGPV OOP papers spread roughly evenly across the five units, but the marks concentrate in a few recurring formats: a definitions-and-concepts question from Unit I, one class-design program with constructors from Unit II, one operator-overloading or inheritance program from Unit III, one virtual-function program and one file-handling program from Unit IV, and one template or exception program from Unit V. Allocate revision time to the program-writing topics first - they carry both the 7-mark questions and the short notes.",
      ],
      weightedTopics: [
        { topic: "Classes, constructors, destructors, copy constructor", weight: "~10-12 marks", note: "Program plus 'constructor types' theory; write the Box/String class until it is automatic." },
        { topic: "Virtual functions, abstract classes, run-time polymorphism", weight: "~10-12 marks", note: "Shape hierarchy program + vtable explanation appears almost every year." },
        { topic: "Operator overloading (member vs friend, special operators)", weight: "~8-10 marks", note: "Complex/String class with friend << is the standard program." },
        { topic: "Inheritance types, visibility modes, virtual base classes", weight: "~8-10 marks", note: "Five inheritance diagrams + diamond problem; pure diagram marks." },
        { topic: "File handling: modes, sequential I/O, random access", weight: "~8-10 marks", note: "Record-write program and seekg/seekp update program - practise both." },
        { topic: "Function and class templates", weight: "~6-8 marks", note: "Generic stack + myMax; short and reliable marks." },
        { topic: "Exception handling (try/throw/catch, standard hierarchy)", weight: "~6-8 marks", note: "One program plus 'what happens when no handler matches'." },
        { topic: "OOP concepts and procedural-vs-OOP comparison", weight: "~6-8 marks", note: "Pure theory - memorise the definitions list once and bank the marks." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Assuming a five-day week with two hours a day, this schedule covers every section twice - once for understanding, once for speed-writing - and reserves the final week for full papers and output-prediction drills.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - concepts and C++ base", tasks: ["OOP concepts, four pillars, procedural-vs-OOP table", "C++ structure, tokens, data types, operators", "Write 4 small programs: class, inline, static, control flow"] },
        { week: "Week 2", focus: "Unit II - the class machinery", tasks: ["Classes, member functions, access specifiers", "Static members, friend functions, inline vs macro", "Constructors (all three types) + destructors program with traced output"] },
        { week: "Week 3", focus: "Unit III - overloading and inheritance", tasks: ["Overload +, ==, unary -, prefix/postfix ++", "Friend << for a String class; type conversions program", "Five inheritance diagrams + virtual base class program"] },
        { week: "Week 4", focus: "Unit IV - polymorphism and files", tasks: ["Virtual functions, pure virtual, abstract Shape hierarchy", "Object slicing demo; stream hierarchy and manipulators", "File modes, record write/read, seekg/seekp update program"] },
        { week: "Week 5", focus: "Unit V - templates and exceptions", tasks: ["Function template + class template Stack", "Multiple/default template parameters", "try/throw/catch program, custom exception class, STL vector-sort program"] },
        { week: "Week 6", focus: "Full revision + papers", tasks: ["Two full past papers under 3-hour timing", "Output-prediction drill: 10 constructor/destructor traces", "Redraw every diagram from memory (hierarchy, vtable call, diamond)"] },
      ],
    },
    {
      id: "exam-tips",
      heading: "Exam-hall strategy",
      examTips: [
        "Start with the theory definitions (OOP concepts, overloading rules, file modes) - they are fast, high-certainty marks that warm you up.",
        "In every program: include headers, class with private data, public interface, main with output comments. A program without expected output loses the presentation mark.",
        "Write the expected output as comments on the cout lines - it proves you traced the program and usually recovers marks even if a line of code slips.",
        "For virtual-function questions, name the vtable/vptr mechanism and add a virtual destructor unprompted - both are standing marks.",
        "For constructor questions, state the two rules nobody forgets in the hall: defining one constructor removes the implicit default one, and copy constructors run on pass-by-value.",
        "For file programs, check is_open() after opening and read with while (in >> ...) - never pre-test eof().",
        "Draw the inheritance diagram before writing the code in any inheritance question; the diagram alone is worth 2-3 marks.",
        "Time-box: 2-mark questions under 5 minutes, 3-mark under 8, 7-mark programs under 25 minutes. If a program stalls, finish the theory parts of the answer and return later.",
      ],
    },
    {
      id: "slips",
      heading: "Common slips that cost easy marks",
      bullets: [
        "Forgetting the semicolon after a class definition - cascading errors on the next lines.",
        "Omitting ClassName:: when defining a member function outside the class (or the template <class T> header for template classes).",
        "Declaring a static member but never defining it outside the class - linker error, zero program marks.",
        "Writing operator++() for the postfix form - the (int) dummy parameter IS the answer.",
        "Calling a virtual function through a plain object and expecting dynamic binding - that is object slicing, not polymorphism.",
        "Missing the virtual destructor on a polymorphic base class when the program deletes via a base pointer.",
        "Reopening a file with plain ofstream to 'add a record' - out|trunc erases the file; ios::app is required.",
        "Testing eof() before reading, so the last record processes twice - loop on the read itself.",
        "Writing a return type on a conversion operator (operator double() has none) or a body after = 0 in a pure virtual declaration.",
        "Placing catch(...) before specific handlers - unreachable code, deducted marks.",
      ],
    },
  ],
};
