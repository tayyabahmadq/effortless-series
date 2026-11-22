import type { AcademicSubject } from "./types";

export const it606: AcademicSubject = {
  id: "it-606",
  code: "IT-606",
  title: "Android Programming",
  semester: "VI Semester",
  program: "RGPV · Information Technology",
  tagline:
    "Every topic of the syllabus as one connected story: how the Open Handset Alliance built the stack, how the SDK and emulator turn a laptop into a phone, how activities live and intents travel, how SQLite persists and providers share, and how camera, location and permissions ship it all securely.",
  description:
    "Five units walk from mobile-technology background and Android internals, through the SDK-Eclipse-emulator toolchain and the first application, into activities, intents, layouts and density independence, then broadcast receivers, SQLiteOpenHelper CRUD and content providers, ending with camera, location-based services and the security model.",
  accentColor: "#a855f7",
  emoji: "AP",
  unitCount: 5,
  totalSections: 31,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Introduction to Android",
      summary:
        "Unit I frames the platform: the evolution of mobile technologies, Android as an open-source software stack, the Open Handset Alliance behind it, the five-layer internals it runs on, the reasons developers choose it, and the Dalvik/ART execution story.",
      chapter: {
        number: "01",
        title: "From Mobile Technologies to the Android Stack",
        intro:
          "Unit I covers the background of mobile technologies, an overview of Android as an open platform, the Open Handset Alliance, what Android runs on internally, why developers choose Android, and how Dalvik and ART execute your code.",
        inOneBreath:
          "Mobile networks evolved from analogue voice (1G) to broadband app platforms (4G), splitting closed feature phones from SDK-equipped smartphones. Android is the open-source software stack - Linux kernel, native libraries, ART runtime, Java API framework, apps - that the Open Handset Alliance of chipmakers, OEMs and carriers built around Google's code. Its freedom, Java tooling and built-in services make it the default development platform, paid for with fragmentation across devices. Code travels the DEX pipeline: javac to bytecode, d8 to register-based DEX, aapt into an APK, ART ahead-of-time into native execution.",
        sections: [
          {
            number: "1.1",
            title: "A little background about mobile technologies",
            body: [
              "Mobile technologies progressed in labelled generations. 1G carried analogue voice only; 2G digitised the signal and added SMS over GSM; 2.5G (GPRS) introduced always-on packet data and the WAP browser; 3G (UMTS) delivered real mobile internet at hundreds of kilobits; 4G (LTE) turned the phone into a broadband computer. The device classes split along the same line: a feature phone runs closed, fixed firmware with at most small Java ME applets, while a smartphone runs an open operating system with a published SDK, a windowing UI and third-party applications.",
              "The turning point was 2007-2008. Before it, a mobile developer targeted operator portals and MIDP applets with tiny memory budgets and a thin API surface. The HTC Dream (T-Mobile G1), the first Android device, shipped in October 2008 with a touchscreen, a real browser, GPS and the Android Market: one platform, one SDK, open distribution. Every syllabus topic that follows - activities, layouts, SQLite, camera, location - exists because that generation of devices made an app-first phone possible.",
              "Examiners open the paper with this as a 7-marker: 'Trace the evolution of mobile technologies' or 'Differentiate a feature phone from a smartphone'. The marking scheme wants the generations named with one capability each, then the device-class contrast written as app-development potential - closed firmware versus open SDK - not as a list of hardware specifications.",
            ],
            keyTerms: [
              { term: "1G / 2G / 3G / 4G", definition: "Generations of cellular technology: analogue voice, digital voice + SMS, packet data, mobile broadband." },
              { term: "Feature phone", definition: "A phone with closed, fixed firmware and no published SDK for third-party apps." },
              { term: "Smartphone", definition: "A phone running an open operating system with an SDK, windowing UI and installable applications." },
              { term: "WAP", definition: "Wireless Application Protocol - the stripped-down web of 2.5G feature phones." },
            ],
            bullets: [
              "1G analogue voice; 2G digital voice + SMS (GSM); 2.5G GPRS + WAP data; 3G mobile internet; 4G LTE broadband.",
              "Feature phone: closed firmware, fixed UI, at most Java ME applets.",
              "Smartphone: open OS, published SDK, windowing UI, third-party apps.",
              "The Android Market (2008) made distribution open - any developer, any user.",
              "Every later topic (activities, SQLite, camera, location) presupposes the app-first smartphone.",
            ],
            diagram: {
              kind: "flow",
              title: "From voice calls to app ecosystems",
              caption: "Four generations, one direction: more data, more openness, more software.",
              steps: [
                { label: "1G", note: "analogue voice only" },
                { label: "2G", note: "digital voice + SMS" },
                { label: "2.5G", note: "GPRS packet data, WAP browsing" },
                { label: "3G", note: "real mobile internet" },
                { label: "4G", note: "broadband + app ecosystems" },
              ],
            },
            table: {
              caption: "The four generations at a glance.",
              headers: ["Generation", "Underlying technology", "What it enabled"],
              rows: [
                ["1G", "Analogue FM radio", "Voice calls only"],
                ["2G", "GSM / CDMA (digital)", "Voice + SMS, low-speed data"],
                ["2.5G", "GPRS / EDGE", "Always-on packet data, WAP browsing"],
                ["3G / 4G", "UMTS, HSPA, LTE", "Mobile internet, video, app stores"],
              ],
            },
            callout: {
              type: "tip",
              title: "Read the question's tense",
              body: "When the question says 'trace the evolution', write generations in order with dates (1980s analogue to 2010s LTE). When it says 'differentiate', a two-column device-class table scores faster than prose. Both variants come from the same syllabus line, so prepare both shapes.",
            },
            examQuestions: [
              {
                q: "Trace the evolution of mobile technologies from 1G to 4G and explain how the device classes changed with each generation.",
                marks: 7,
                outline: [
                  "1G: analogue cellular, voice only",
                  "2G: GSM digital voice + SMS; the network became a messaging medium",
                  "2.5G: GPRS packet data + WAP browser; the first mobile 'internet'",
                  "3G: UMTS broadband; browsing, video, downloads",
                  "4G: LTE; the phone becomes a broadband computer with app ecosystems",
                  "Device classes: closed feature phone vs open, SDK-equipped smartphone",
                ],
              },
              {
                q: "Differentiate a feature phone and a smartphone from a developer's point of view.",
                marks: 7,
                outline: [
                  "Feature phone: fixed, closed firmware; no third-party SDK",
                  "Apps (if any) are sandboxed Java ME applets with tiny APIs",
                  "Smartphone: open OS + published SDK + windowing UI",
                  "The developer reaches the device directly: activities, services, databases",
                  "Distribution: operator portals vs open app markets",
                  "Consequence: the smartphone enabled an app industry (Android, iOS)",
                ],
              },
            ],
          },
          {
            number: "1.2",
            title: "Overview of Android - an open platform for mobile development",
            body: [
              "Android is a complete, open-source software stack for mobile devices: a Linux kernel, native libraries and the ART/Dalvik runtime, a Java API framework, and a set of core applications - assembled so that any manufacturer can build a device and any developer can build an app without paying for the privilege. Google leads the project and releases the code as the Android Open Source Project (AOSP); device makers add their hardware layers and skins on top.",
              "The contrast with a closed stack is sharpest in the tooling. Building for a proprietary platform means a paid developer program, vendor-specific hardware and an approval gate before release. Building for Android meant a free SDK download, Java (the language every IT graduate already knew), a free emulator, and publishing the same day. The HTC Dream proved the model: an open stack shipped by an alliance of rivals, not by a single vendor.",
              "For the exam, 'What is Android?' must be answered as the stack definition - kernel, runtime, framework, apps - plus 'open source' and 'Open Handset Alliance'. Examiners deliberately award the definition mark for the word stack, because it separates students who memorised 'an operating system' from students who can draw the layers.",
            ],
            keyTerms: [
              { term: "Software stack", definition: "A complete vertical assembly - kernel, runtime, libraries, framework, apps - shipped as one platform." },
              { term: "AOSP", definition: "Android Open Source Project - the public source tree Google maintains for Android." },
              { term: "Open platform", definition: "No licence fee, inspectable source, and freedom for any manufacturer or developer to build on it." },
            ],
            bullets: [
              "Android = Linux kernel + native libraries + ART/Dalvik runtime + Java API framework + core apps.",
              "Open source: the code is released as AOSP; no licence fee for devices or apps.",
              "Led by Google within the Open Handset Alliance (next section).",
              "Free tooling: SDK, emulator and distribution - develop on Windows, Linux or Mac.",
              "First device: HTC Dream / T-Mobile G1, October 2008.",
            ],
            diagram: {
              kind: "compare",
              title: "Open stack vs closed stack",
              caption: "The same phone job, two different gates to walk through.",
              left: {
                heading: "Android (open)",
                items: [
                  "Free SDK, free emulator, free distribution",
                  "Java on any desktop OS - Windows, Linux, Mac",
                  "AOSP code is inspectable and forkable",
                  "Any OEM may build a device",
                ],
              },
              right: {
                heading: "Closed platform",
                items: [
                  "Paid developer program + approval gate",
                  "Vendor-specific hardware and IDE",
                  "Source is secret; only APIs are public",
                  "One vendor controls devices and store",
                ],
              },
            },
            table: {
              caption: "Milestones of the open platform.",
              headers: ["Year", "Milestone", "Why it matters"],
              rows: [
                ["2003-2005", "Android Inc. founded; Google acquires it", "The platform begins as a startup bet"],
                ["2007", "Open Handset Alliance announced; SDK preview", "An alliance, not one vendor, owns Android"],
                ["2008", "HTC Dream ships; Android Market opens", "Device + distribution together"],
                ["2009 onward", "Cupcake to today's releases", "Open yearly cadence; the fragmentation story begins"],
              ],
            },
            callout: {
              type: "exam",
              title: "Earn the definition mark",
              body: "Write: 'Android is an open-source software stack for mobile devices, led by Google and the Open Handset Alliance, consisting of a Linux kernel, native libraries, the ART/Dalvik runtime, a Java API framework and a set of core applications.' The word stack plus the layer names is what the marking scheme checks.",
            },
            examQuestions: [
              {
                q: "What is Android? Explain why it is called an open platform for mobile development.",
                marks: 7,
                outline: [
                  "Definition: open-source software stack - kernel, runtime, libraries, framework, apps",
                  "Led by Google; source released as AOSP",
                  "Open: no SDK or distribution fee; any OEM may ship a device",
                  "Contrast with a closed stack: paid program, approval gate, single vendor",
                  "First device HTC Dream (2008) proved the model",
                  "Result: a huge developer and device ecosystem",
                ],
              },
              {
                q: "Describe the components of the Android platform and explain how openness shaped its growth.",
                marks: 14,
                outline: [
                  "Linux kernel layer and what it provides (drivers, power, memory, IPC)",
                  "Native libraries + ART/Dalvik runtime (WebKit, OpenGL ES, SQLite)",
                  "Java API framework: activity manager, content providers, view system, notifications",
                  "Application layer: core apps + third-party apps, one process per app",
                  "Openness: AOSP, free SDK, the OHA consortium of rivals",
                  "Ecosystem effect: market share, OEM variety, developer adoption",
                  "Honest caveat: fragmentation across versions and skins",
                ],
              },
            ],
          },
          {
            number: "1.3",
            title: "The Open Handset Alliance",
            body: [
              "The Open Handset Alliance (OHA) is the consortium announced on 5 November 2007 with Android as its flagship project. Thirty-four companies signed at launch - Google, HTC, Intel, Motorola, Qualcomm, NVIDIA, Texas Instruments, Samsung, T-Mobile, Sprint, LG and eBay among them - committing to 'open standards for mobile devices'. Membership has since grown past eighty, spanning chipmakers, handset OEMs, carriers and software firms.",
              "The alliance works because each member ships a different layer. Google leads the platform: AOSP code, SDK, developer services. Chipmakers (Qualcomm, NVIDIA, TI) optimise the ARM boards, GPUs and drivers. Handset makers (HTC, Samsung, Motorola) build the devices. Carriers (T-Mobile, Sprint) provide the network and distribution. A release touches every member in sequence: silicon drivers first, then the platform, then the handsets, then the shops.",
              "As a 7-marker the question is usually 'Write a short note on the Open Handset Alliance' or the sharper 'Who develops Android - Google alone?'. The marking scheme wants the founding date, the phrase open standards for mobile devices, Android as the flagship project, and four member categories with one named company each.",
            ],
            keyTerms: [
              { term: "Open Handset Alliance", definition: "The 34-member (2007) consortium, now 80+, committed to open mobile standards; owner of the Android project." },
              { term: "Flagship project", definition: "The alliance's primary deliverable - the Android platform and its SDK." },
              { term: "Open standards", definition: "Publicly specified interfaces any vendor may implement - the alliance's founding commitment." },
            ],
            bullets: [
              "OHA: consortium of 34 firms at launch (5 Nov 2007), now 80+; Android is its flagship project.",
              "Founding members: Google, HTC, Intel, Motorola, Qualcomm, NVIDIA, TI, Samsung, T-Mobile.",
              "Commitment: open standards for mobile devices - the phrase is quotable in exams.",
              "Division of labour: Google (platform), chipmakers (silicon + drivers), OEMs (devices), carriers (distribution).",
              "Android is built by an alliance, not by Google alone - the exam's favourite correction.",
            ],
            diagram: {
              kind: "fork",
              title: "One alliance, four kinds of member",
              caption: "Each branch ships one layer of the same platform.",
              start: "Open Handset Alliance",
              branches: [
                { label: "Google", outcome: "leads AOSP, ships the SDK and developer services", good: true },
                { label: "Chip makers (Qualcomm, NVIDIA, TI)", outcome: "optimise ARM boards, GPUs and board-level drivers", good: true },
                { label: "Device makers (HTC, Samsung, Motorola)", outcome: "build and brand the handsets", good: true },
                { label: "Carriers (T-Mobile, Sprint)", outcome: "provide networks, subsidies and distribution", good: true },
              ],
            },
            table: {
              caption: "What each member category contributes.",
              headers: ["Member category", "Example firms", "Contribution"],
              rows: [
                ["Platform lead", "Google", "AOSP code, SDK, developer services"],
                ["Chipmakers", "Qualcomm, NVIDIA, TI", "ARM SoCs, GPU and radio drivers"],
                ["Handset OEMs", "HTC, Samsung, Motorola", "Devices, skins, camera stacks"],
                ["Carriers", "T-Mobile, Sprint", "Networks, subsidies, retail reach"],
              ],
            },
            callout: {
              type: "tip",
              title: "The correction examiners wait for",
              body: "'Google develops Android' scores half. Full marks name the alliance: Google leads, but silicon, devices and distribution come from member companies. When a device question mentions HTC or Qualcomm, connect it back to the OHA in one line.",
            },
            examQuestions: [
              {
                q: "Write a short note on the Open Handset Alliance and its role in Android's success.",
                marks: 7,
                outline: [
                  "Consortium announced 5 November 2007 with 34 members, now 80+",
                  "Founding commitment: open standards for mobile devices",
                  "Android is the flagship project; AOSP is the public source",
                  "Member categories: platform lead (Google), chipmakers, OEMs, carriers",
                  "Each member ships one layer: silicon, drivers, handsets, distribution",
                  "Result: devices across price ranges, one compatible SDK",
                ],
              },
              {
                q: "Why did Google choose a consortium model instead of building Android alone? Give two benefits and one risk.",
                marks: 7,
                outline: [
                  "Benefit: hardware variety across OEMs and price points",
                  "Benefit: carriers and OEMs share distribution and marketing cost",
                  "Benefit: open standards attract developers who target one SDK",
                  "Risk: fragmentation - skins and versions diverge from AOSP",
                  "Mitigation: compatibility (CTS) tests keep devices Android-compatible",
                ],
              },
            ],
          },
          {
            number: "1.4",
            title: "What does Android run on - Android internals",
            body: [
              "Android runs on ARM-based phones (and x86 boards) as a software stack. At the bottom is the Linux kernel - process management, memory, power, the display/camera/Wi-Fi drivers and the Binder IPC mechanism. Above it sit the hardware abstraction layer and the native C/C++ libraries: WebKit for the browser, OpenGL ES for graphics, SQLite for databases, SSL and libc. The next layer is the Android runtime - the ART/Dalvik virtual machine plus core Java libraries - and above it the Java API framework: Activity Manager, Window Manager, Content Providers, View System, Notification Manager, Telephony and Location Managers. Applications live on top.",
              "One tap traces the whole stack. A finger on the screen raises an interrupt that the kernel's touchscreen driver turns into input events; the framework's View System dispatches them to your Activity's onTouchEvent; your code calls framework APIs, which bind through Binder to system services running in separate processes; those services reach the hardware through the HAL. And the sandbox: every app is a separate Linux process under its own UID, so one app cannot read another's memory or files.",
              "'Explain the Android architecture with a neat diagram' is the subject's most reliable 14-marker. Draw the layers in order, name two services per framework layer, and mention Binder between app and services plus the per-app UID - those two details separate a 10 from a 14.",
            ],
            keyTerms: [
              { term: "Binder IPC", definition: "The kernel-backed inter-process communication that lets app code call system services." },
              { term: "Native libraries", definition: "C/C++ engines under the framework: WebKit, OpenGL ES, SQLite, SSL." },
              { term: "Sandbox", definition: "Each app runs as its own Linux process with a unique UID; it can touch only its own data." },
              { term: "HAL", definition: "Hardware Abstraction Layer - standard interfaces between the framework and vendor drivers." },
            ],
            bullets: [
              "Layer 1 (bottom): Linux kernel - drivers, power, memory, processes, Binder IPC.",
              "Layer 2: HAL + native libraries - WebKit, OpenGL ES, SQLite, SSL.",
              "Layer 3: Android runtime - ART/Dalvik VM + core libraries.",
              "Layer 4: Java API framework - Activity Manager, Window Manager, Content Providers, View System, Notification Manager.",
              "Layer 5 (top): Applications - core apps and third-party apps.",
              "Every app is its own Linux process with a unique UID - the sandbox Android security builds on.",
            ],
            diagram: {
              kind: "layers",
              title: "The Android software stack",
              caption: "Top to bottom: apps, framework, runtime and libraries, kernel. Every exam answer starts here.",
              layers: [
                { label: "Applications", note: "core apps + your activities, services, receivers, providers" },
                { label: "Java API framework", note: "Activity Manager, Window Manager, Content Providers, View System, Notifications, Telephony, Location" },
                { label: "Android runtime + native libraries", note: "ART/Dalvik + core Java libs; WebKit, OpenGL ES, SQLite, SSL" },
                { label: "HAL + Linux kernel", note: "display, camera, Wi-Fi, audio, power drivers; Binder IPC" },
              ],
            },
            table: {
              caption: "One manager to name per framework service.",
              headers: ["Framework component", "Job"],
              rows: [
                ["Activity Manager", "Lifecycle and back stack of every activity"],
                ["Content Providers", "Cross-app data sharing (Unit IV)"],
                ["View System", "Buttons, EditText, layouts - the UI toolbox (Unit III)"],
                ["Notification Manager", "Status-bar alerts and toasts"],
                ["Location Manager", "GPS and network fixes (Unit V)"],
              ],
            },
            callout: {
              type: "exam",
              title: "The guaranteed 14-marker",
              body: "Draw the stack top-down, label every layer, then add two one-liners under the diagram: 'Binder IPC connects apps to system services' and 'each app runs as a separate Linux UID'. Those sentences are written into the marking scheme and cost nothing to memorise.",
            },
            examQuestions: [
              {
                q: "Explain the Android software stack (architecture) with a neat diagram. Mention the role of each layer and one named service or library per layer.",
                marks: 14,
                outline: [
                  "Applications layer: core apps + third-party apps",
                  "Java API framework: Activity Manager, Content Providers, View System, Notification Manager",
                  "Android runtime: ART/Dalvik + core Java libraries",
                  "Native libraries: WebKit, OpenGL ES, SQLite, SSL",
                  "HAL + Linux kernel: drivers, power, memory, processes",
                  "Binder IPC joins apps to system services",
                  "Sandbox: one process + one UID per app",
                ],
              },
              {
                q: "What is the role of the Linux kernel in Android? Why did Android choose Linux?",
                marks: 7,
                outline: [
                  "Drivers for display, camera, Wi-Fi, audio, power",
                  "Process and memory management for app isolation",
                  "Binder IPC driver - the Android-specific addition",
                  "Proven, open source, portable across SoCs - the reasons for choosing it",
                  "The kernel enforces the per-app UID sandbox",
                ],
              },
            ],
          },
          {
            number: "1.5",
            title: "Why to use Android for mobile development",
            body: [
              "The case for Android is a list of concrete advantages. It is free and open source - the SDK, the emulator and distribution cost nothing. It is Java-based, so the language and OOP habits from earlier semesters transfer directly. It is a complete stack: OS, middleware and key applications with built-in support for SQLite, media, WebKit, graphics, camera, location and telephony, so a student builds a full product rather than glue code. And it has the largest installed base, so the audience - and the job market - is the biggest.",
              "Worked concretely: to ship a 'find my campus' app, the Android route is download the SDK, write two activities and a layout, test on a free AVD, publish - all on the laptop you own. The same app on a closed stack needs a paid developer account, specific hardware and an approval queue. That gap is why college labs and startups standardised on Android, and why RGPV made it a departmental course.",
              "Examiners want the advantages with justifications, not adjectives. Write four reasons - open source, Java tooling, built-in services, market reach - each with one supporting sentence, then the honest caveat: fragmentation across devices and versions. The caveat is the differentiator: it shows you know the platform's cost, not just its brochure.",
            ],
            keyTerms: [
              { term: "Fragmentation", definition: "The spread of Android versions, screens and skins across devices that developers must test against." },
              { term: "Low barrier to entry", definition: "Free SDK + free emulator + a known language = development starts on any laptop." },
              { term: "Middleware", definition: "The framework layer between OS and apps - Android ships it complete." },
            ],
            bullets: [
              "Free and open: SDK, emulator, AOSP and distribution carry no licence cost.",
              "Java-based tooling - existing language skills transfer; large talent pool.",
              "Complete stack: SQLite, media, WebKit, OpenGL, camera, location, telephony built in.",
              "Largest installed base: widest audience and strongest job market.",
              "Caveat: fragmentation - many devices, versions and skins to test against.",
            ],
            diagram: {
              kind: "matrix",
              title: "Platform choice: effort against reach",
              caption: "Android sits in the quadrant every course and startup wants: light effort, mass reach.",
              axes: { x: "Developer effort (heavy -> light)", y: "Device reach (niche -> mass market)" },
              quadrants: [
                { label: "Closed smartphone stacks", note: "mass reach, but paid tooling and approval gates" },
                { label: "Android sweet spot", note: "free tooling, Java, open distribution, mass reach" },
                { label: "Embedded / feature-phone stacks", note: "heavy effort, niche or closed audiences" },
                { label: "Hobby open OSes", note: "free and open, but tiny installed base" },
              ],
            },
            table: {
              caption: "Four reasons, each with its justification.",
              headers: ["Reason", "Justification"],
              rows: [
                ["Open source + free SDK", "No licence cost; code inspectable; labs can teach it"],
                ["Java development", "Language known from earlier semesters; huge community"],
                ["Built-in services", "SQLite, camera, location, media, telephony ready to call"],
                ["Market reach", "Largest device base; open distribution through the Market/Play"],
              ],
            },
            callout: {
              type: "tip",
              title: "Add the caveat, win the last mark",
              body: "Every 'why Android' answer is expected to end with fragmentation: many OEMs ship many versions, so you test on multiple AVDs. Pairing the advantage list with its cost shows evaluative understanding - usually one extra mark.",
            },
            examQuestions: [
              {
                q: "Why is Android a preferred platform for mobile application development? Give four reasons with justification and state one limitation.",
                marks: 7,
                outline: [
                  "Free, open source: SDK, emulator, AOSP - zero licence cost",
                  "Java-based: existing language skills, large community",
                  "Complete built-in stack: SQLite, media, WebKit, camera, location",
                  "Largest installed base: audience and job market",
                  "Open distribution through the Market/Play store",
                  "Limitation: fragmentation across devices and versions",
                ],
              },
              {
                q: "Compare Android development with development for a closed mobile platform.",
                marks: 7,
                outline: [
                  "Cost: free SDK vs paid developer program",
                  "Hardware: any machine vs vendor-specific devices",
                  "Approval: instant self-publishing vs store review queue",
                  "Source access: AOSP inspectable vs closed APIs only",
                  "Result: faster prototypes and wider testing on Android",
                ],
              },
            ],
          },
          {
            number: "1.6",
            title: "Dalvik, ART and the DEX pipeline",
            body: [
              "Android never runs standard JVM bytecode. The Java compiler produces .class files, and the dx (later d8) tool converts them into classes.dex - the Dalvik Executable, a compact, register-based format designed for memory-limited phones. On old devices the Dalvik virtual machine interpreted DEX with just-in-time compilation of hot paths. From Android 5.0 the runtime is ART (Android Runtime), which compiles apps ahead-of-time at install and, in later versions, blends AOT with profile-guided JIT.",
              "Follow one app through the cycle. MainActivity.java compiles to bytecode; d8 produces classes.dex; aapt packages dex + resources + manifest into the APK; at install ART verifies the DEX and compiles hot methods to native code; the app runs faster with each launch as profiles accumulate; an update triggers recompilation. The register-based DEX and the install-time compilation are the two facts every Dalvik-vs-ART answer turns on.",
              "'Differentiate Dalvik and ART' is a standard 7-marker; 'explain how source becomes a running app' pairs the DEX pipeline with it. Write the conversion chain - .java -> .class -> .dex -> APK -> native - and two differences (JIT vs AOT, install time vs run time) for full marks.",
            ],
            keyTerms: [
              { term: "DEX", definition: "Dalvik Executable - the compact register-based bytecode Android actually executes." },
              { term: "Dalvik", definition: "The original Android VM: interpreter with JIT compilation of hot paths." },
              { term: "ART", definition: "Android Runtime (since 5.0): ahead-of-time compilation at install, blended with JIT later." },
              { term: "APK", definition: "Android Package - the zip holding DEX code, resources and the manifest." },
            ],
            bullets: [
              ".java -> .class -> (dx/d8) -> .dex: DEX is register-based, the JVM is stack-based.",
              "Dalvik: interpreter + JIT on the fly; ART (Android 5.0+): ahead-of-time at install.",
              "ART trades a little install time and storage for faster, battery-friendlier execution.",
              "Later ART versions blend AOT with profile-guided JIT for the best of both.",
              "DEX + resources + manifest are packaged into the APK by aapt.",
            ],
            diagram: {
              kind: "cycle",
              title: "From source to running app",
              caption: "The build-install-run loop every Android toolchain repeats.",
              steps: [
                { label: "Write", note: "MainActivity.java" },
                { label: "Compile", note: "javac -> .class bytecode" },
                { label: "DEX", note: "dx/d8 -> classes.dex (register-based)" },
                { label: "Package", note: "aapt bundles dex + res + manifest into APK" },
                { label: "Install", note: "ART verifies + AOT-compiles hot code" },
                { label: "Run", note: "execute native/JIT paths; profiles feed the next build" },
              ],
            },
            table: {
              caption: "Dalvik vs ART - the two-column answer.",
              headers: ["Aspect", "Dalvik", "ART"],
              rows: [
                ["Execution", "Interprets DEX, JITs hot paths", "Ahead-of-time compile at install (+ JIT later)"],
                ["App launch", "Slower first runs", "Faster - native code ready"],
                ["Install / storage", "Fast install, small footprint", "Longer install, larger compiled cache"],
                ["Status", "Pre-Android 5.0 runtime", "Default runtime since Android 5.0"],
              ],
            },
            callout: {
              type: "warning",
              title: "The stack-based slip",
              body: "Students write 'Dalvik is the JVM of Android'. It is not: the JVM executes stack-based bytecode, DEX is register-based, and ART has replaced Dalvik entirely. One correcting sentence - 'DEX is register-based, compiled ahead-of-time by ART' - rescues the answer.",
            },
            examQuestions: [
              {
                q: "Differentiate the Dalvik virtual machine and the ART runtime.",
                marks: 7,
                outline: [
                  "Dalvik interprets DEX with JIT; ART compiles ahead-of-time at install",
                  "DEX is register-based, unlike stack-based JVM bytecode",
                  "ART: faster launches, better battery; costs install time and storage",
                  "Dalvik: pre-5.0 default; ART: default since Android 5.0",
                  "Later ART adds profile-guided JIT alongside AOT",
                ],
              },
              {
                q: "Explain how a Java source file becomes a running Android application. Name the toolchain tool responsible at each stage.",
                marks: 14,
                outline: [
                  "javac compiles .java to .class bytecode",
                  "dx/d8 converts bytecode to classes.dex (register-based DEX)",
                  "aapt packages DEX + resources + AndroidManifest into the APK",
                  "adb installs the APK; Package Manager verifies signatures and permissions",
                  "ART verifies DEX and AOT-compiles hot methods at install",
                  "Execution: Activity Manager launches the declared launcher activity",
                  "Update path: new APK -> re-verification -> recompilation",
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
      title: "Developing for Android",
      summary:
        "Unit II is the toolchain: setting up the environment, the Android SDK and its tools, Eclipse with ADT, emulators and AVDs, custom emulator profiles, the anatomy of an Android project, and the first application built and run.",
      chapter: {
        number: "02",
        title: "The Toolchain: SDK, Emulator and the First App",
        intro:
          "Unit II covers setting up the development environment, the Android SDK and its tools, Eclipse with the ADT plug-in, emulators and Android Virtual Devices, custom emulator profiles, the anatomy of an Android project, and My First Android Application.",
        inOneBreath:
          "The workstation is five pieces - JDK, IDE (Eclipse + ADT or Studio), SDK, system images, drivers - proven the moment adb lists a device. The SDK layers its tools: aapt packages resources, dx/d8 make DEX, adb installs, DDMS watches. An AVD is the emulator's configuration object - one per screen/API in your test matrix, customisable down to density and cameras. A project is manifest + java + res + generated R.java, and the first app is one Activity, one layout and one launcher filter away from 'Hello, Android!'.",
        sections: [
          {
            number: "2.1",
            title: "How to set up the Android development environment",
            body: [
              "Five components make the workstation: the JDK (javac and the Java libraries), an IDE - Eclipse plus the ADT plug-in in the syllabus era, Android Studio today - the Android SDK (SDK Manager, platform packages, platform-tools), system images for the emulator, and USB drivers for testing on real devices. Each has one job, and the setup fails loudly when one is missing: no JDK means no compilation; no platform package means no android.jar to compile against.",
              "The order matters. Install the JDK and verify java -version; install Eclipse and add ADT, or install Android Studio (which bundles everything); open SDK Manager and accept a platform (say Android 4.0, API 14 in the classic labs) plus platform-tools; create the first AVD; then File - New - Android Application Project and press Run. The environment is proven when the emulator boots and the default app shows its 'Hello' screen.",
              "As a 7-marker, 'Explain the steps to set up the Android development environment' wants the five components named and the install order with one-line purposes. Mention the SDK Manager as the single place packages are added - examiners look for it.",
            ],
            keyTerms: [
              { term: "ADT", definition: "Android Development Tools - the Eclipse plug-in set that added Android wizards, editors and Run targets." },
              { term: "SDK Manager", definition: "The tool that downloads platforms, platform-tools, build tools and system images." },
              { term: "adb", definition: "Android Debug Bridge - installs APKs, opens shells and forwards logs between machine and device/emulator." },
            ],
            bullets: [
              "JDK first: javac + core libraries; verify java -version before anything else.",
              "IDE: Eclipse + ADT plug-in (syllabus era) or Android Studio (bundles the SDK).",
              "SDK Manager: install a platform package (android.jar), platform-tools and system images.",
              "Create the first AVD before the first project so Run has a target.",
              "USB drivers only for real-device debugging (adb devices to verify).",
            ],
            diagram: {
              kind: "pipeline",
              title: "Environment setup, in order",
              caption: "Each stage depends on the one before it - skipping an order is the classic lab-hour sink.",
              stages: [
                { label: "Install JDK", note: "javac + Java libraries" },
                { label: "Install IDE", note: "Eclipse + ADT or Android Studio" },
                { label: "Add SDK packages", note: "platform, platform-tools, system images" },
                { label: "Create an AVD", note: "emulator target for Run" },
                { label: "Create project", note: "wizard generates activity + res + manifest" },
                { label: "Run", note: "adb installs to emulator; verify the boot" },
              ],
            },
            table: {
              caption: "The five components and their single jobs.",
              headers: ["Component", "Purpose"],
              rows: [
                ["JDK", "Compiler (javac) and Java class libraries"],
                ["Eclipse + ADT / Android Studio", "Project wizards, editors, logcat, one-click Run"],
                ["Android SDK", "SDK Manager, android.jar, build tools, adb"],
                ["System images", "The Android builds the emulator boots"],
                ["USB drivers", "Real-device debugging over adb"],
              ],
            },
            callout: {
              type: "tip",
              title: "The one-minute sanity check",
              body: "After install, run adb devices in a terminal. A device or emulator entry proves JDK, SDK and drivers agree; 'command not found' means platform-tools never reached PATH. Check before writing any code - it turns hour-long failures into one-minute fixes.",
            },
            examQuestions: [
              {
                q: "Explain the steps involved in setting up the Android development environment, naming each component and its purpose.",
                marks: 7,
                outline: [
                  "Install the JDK; verify with java -version",
                  "Install Eclipse and the ADT plug-in (or Android Studio)",
                  "Use SDK Manager to add a platform, platform-tools and system images",
                  "Create the first AVD as the Run target",
                  "Create a new Android application project from the wizard",
                  "Run: adb installs the APK to the emulator",
                ],
              },
              {
                q: "What is the Android SDK? List the tools it provides and what each does during one build-and-run cycle.",
                marks: 7,
                outline: [
                  "SDK = platforms (android.jar), platform-tools, build tools, emulator, docs, samples",
                  "aapt packages resources into the APK",
                  "javac + dx/d8 compile and dex the code",
                  "adb installs the APK and streams logcat",
                  "The emulator runs the system image as the test device",
                  "DDMS/monitor observes processes, threads and heap",
                ],
              },
            ],
          },
          {
            number: "2.2",
            title: "The Android development framework - inside the SDK",
            body: [
              "The SDK is organised in layers that a build touches in sequence. At the top sits the IDE experience (wizards, editors, logcat). Under it, platform-tools (adb, fastboot) talk to any device; build tools (aapt, dx/d8, apksigner) turn sources into APKs; each installed platform contributes android.jar - the framework API your code compiles against for that API level; and system images, samples and documentation fill out the rest.",
              "One build walks every layer. aapt compiles resources into R.java and packaged assets; javac compiles sources against android.jar; d8 dexes the classes; apksigner signs; adb installs to the emulator and streams logcat back; DDMS watches threads and heap while it runs. Knowing which tool failed (aapt on a bad XML, adb on a missing device) turns cryptic build errors into obvious fixes.",
              "Exam questions ask 'Explain the Android development framework' or 'List SDK tools with their functions'. Answer as layers plus one tool per layer with its single job - aapt, dx, adb, DDMS, emulator - and the android.jar/API-level relationship.",
            ],
            keyTerms: [
              { term: "android.jar", definition: "The framework API stubs for one API level; your code compiles against it." },
              { term: "API level", definition: "The integer version of the platform (e.g. 14 = Android 4.0) that pins android.jar and the system image." },
              { term: "DDMS", definition: "Dalvik Debug Monitor Server - thread, heap and emulator control inside Eclipse." },
            ],
            bullets: [
              "Platform-tools: adb (install, shell, logcat) and fastboot (bootloader-level).",
              "Build tools: aapt (resources), dx/d8 (DEX), apksigner (signing).",
              "One android.jar per platform/API level - code compiles against the level you target.",
              "System images: what the emulator boots; one per API level you test.",
              "Samples + documentation ship inside the SDK - the first offline reference.",
            ],
            diagram: {
              kind: "layers",
              title: "The SDK, layer by layer",
              caption: "Top: what you click. Bottom: what the machine runs.",
              layers: [
                { label: "IDE layer", note: "Eclipse/ADT or Android Studio - wizards, editors, logcat view" },
                { label: "Platform tools", note: "adb, fastboot - talk to devices and emulators" },
                { label: "Build tools", note: "aapt, dx/d8, apksigner - resources, DEX, signing" },
                { label: "Platform API (android.jar)", note: "framework classes for the targeted API level" },
                { label: "System images + samples + docs", note: "emulator firmware and offline learning material" },
              ],
            },
            table: {
              caption: "Five tools, five one-line jobs.",
              headers: ["Tool", "Job in one build"],
              rows: [
                ["aapt", "Compiles resources, generates R.java, packs the APK"],
                ["dx / d8", "Converts .class bytecode to classes.dex"],
                ["apksigner", "Signs the APK for install"],
                ["adb", "Installs to device/emulator, streams logcat, opens a shell"],
                ["DDMS", "Thread, heap and message inspection while running"],
              ],
            },
            callout: {
              type: "exam",
              title: "Tool-in-context answers",
              body: "Examiners reward tools described in action: 'aapt packages resources and generates R.java' beats 'aapt is a tool'. Learn each tool with the sentence it appears in during a build - the same sentence serves both the 2-mark tool questions and the 7-mark framework question.",
            },
            examQuestions: [
              {
                q: "Explain the Android development framework. Describe the roles of aapt, dx, adb and DDMS in building and testing one application.",
                marks: 7,
                outline: [
                  "SDK layers: IDE, platform-tools, build tools, android.jar, system images",
                  "aapt: compiles resources, generates R.java, packs the APK",
                  "dx/d8: bytecode -> classes.dex",
                  "adb: install, shell, logcat between host and emulator",
                  "DDMS: threads, heap, SMS/call simulation during testing",
                  "android.jar pins the API level the app compiles against",
                ],
              },
              {
                q: "Why does one SDK contain many android.jar versions and many system images?",
                marks: 7,
                outline: [
                  "Each API level ships its own framework stubs (android.jar) and firmware (system image)",
                  "Apps compile against the minimum API they support",
                  "Testing across API levels needs the matching system image",
                  "This is how developers handle fragmentation in the lab",
                  "A new platform is one SDK Manager download, not a new IDE",
                ],
              },
            ],
          },
          {
            number: "2.3",
            title: "Eclipse and the ADT plug-in",
            body: [
              "The syllabus names Eclipse: the classic setup was the Eclipse IDE plus the ADT (Android Development Tools) plug-in. ADT added the New Android Project wizard, XML and manifest editors, a graphical layout editor, the LogCat view, DDMS integration and Run configurations that knew about AVDs. It made a plain Java IDE Android-aware without replacing its editor, debugger or perspectives.",
              "Google later moved the official toolchain to Android Studio (an IntelliJ fork with Gradle builds). The concepts are identical - project, activity, res/, manifest, AVD, adb - so answers stay tool-agnostic: describe the workflow (create project, write activity, define layout, run on emulator), and name Eclipse/ADT when the question quotes them. In both IDEs the same four files drive the first app: MainActivity, activity_main.xml, AndroidManifest.xml and R.java.",
              "Short-note questions on ADT appear as 2-markers inside 7-markers. Define it precisely - 'the Eclipse plug-in set that adds Android project wizards, layout and manifest editors, LogCat and DDMS views, and AVD-aware run configurations' - and contrast one strength of Studio (Gradle builds) if asked about the successor.",
            ],
            keyTerms: [
              { term: "ADT", definition: "Android Development Tools - the Eclipse plug-in that made Eclipse Android-aware." },
              { term: "Gradle", definition: "Android Studio's build system - declarative build scripts replacing ADT-era Ant builds." },
              { term: "Perspective", definition: "An Eclipse window arrangement; the DDMS and Debug perspectives host the Android tools." },
            ],
            bullets: [
              "Eclipse + ADT: the syllabus-era IDE for Android - wizards, editors, LogCat, DDMS views.",
              "ADT is a plug-in set, not a fork - it extends the Java IDE you already use.",
              "Android Studio (IntelliJ + Gradle) is the official successor; workflow concepts are identical.",
              "The first app needs the same four files in either IDE: activity, layout XML, manifest, R.java.",
              "The Run configuration picks the AVD; adb does the install in both worlds.",
            ],
            diagram: {
              kind: "compare",
              title: "Eclipse + ADT vs Android Studio",
              caption: "Different shells, same workflow - exams accept either if the concepts are right.",
              left: {
                heading: "Eclipse + ADT",
                items: [
                  "Plug-in on the classic Java IDE",
                  "ADT wizards for projects and AVDs",
                  "Graphical layout editor + LogCat views",
                  "Ant/ADT build, manual SDK Manager",
                ],
              },
              right: {
                heading: "Android Studio",
                items: [
                  "IntelliJ platform, Gradle builds",
                  "Bundled SDK Manager and emulator",
                  "Same project anatomy (manifest, res, java)",
                  "Official toolchain since 2014",
                ],
              },
            },
            table: {
              caption: "Same task, two shells.",
              headers: ["Task", "Eclipse + ADT", "Android Studio"],
              rows: [
                ["New project", "File - New - Other - Android Project", "Start a new Android Studio project"],
                ["Edit layout", "Graphical Layout / XML tabs", "Design / Text tabs"],
                ["Watch logs", "LogCat view", "Logcat window"],
                ["Run", "Run As - Android Application", "Run with AVD target"],
              ],
            },
            callout: {
              type: "tip",
              title: "Answer the question's IDE",
              body: "If the paper says Eclipse, describe ADT and the LogCat view; if it says Android Studio, mention Gradle. The concepts (project, activity, res, manifest, AVD, adb) are identical, but naming the asked IDE signals that you read the question.",
            },
            examQuestions: [
              {
                q: "Write a short note on the Eclipse ADT plug-in and list the facilities it adds to the IDE.",
                marks: 7,
                outline: [
                  "ADT = Android Development Tools plug-in for Eclipse",
                  "New Android Project wizard with package, SDK and activity options",
                  "XML editors + graphical layout editor for res/ files",
                  "LogCat and DDMS perspectives for debugging",
                  "Run configurations bound to AVDs; adb install on Run",
                  "Successor: Android Studio with Gradle - same concepts",
                ],
              },
              {
                q: "Your college lab uses Eclipse + ADT. Describe the workflow to build and run a first application, naming the files involved.",
                marks: 7,
                outline: [
                  "File - New - Other - Android Application Project",
                  "The wizard generates MainActivity, activity_main.xml, manifest, R.java",
                  "Edit the layout XML; setContentView(R.layout.activity_main) binds it",
                  "Create/select an AVD in the AVD Manager",
                  "Run As - Android Application; adb installs to the emulator",
                  "The LogCat view confirms the lifecycle logs",
                ],
              },
            ],
          },
          {
            number: "2.4",
            title: "Emulators - what is an emulator / Android AVD",
            body: [
              "An emulator is a desktop program that imitates an Android device: a QEMU virtual machine boots a real Android system image with a virtual screen, radio, GPS and camera. An Android Virtual Device (AVD) is the configuration object that names the device: hardware profile (screen, density, RAM), the system image/API level, SD card size, skin and sensor emulation. The emulator runs the AVD; you can define many AVDs, each a different phone.",
              "Creating one: AVD Manager - New - pick a device definition (say 3.7 WVGA), target API, SD card 100 MB, enable snapshots - Start. The window boots Android exactly as a handset would. adb installs your APK; logcat streams; the home screen shows your icon. Testing a camera app? The AVD emulates a camera backed by your webcam or a static scene.",
              "The 7-marker is 'What is an emulator? What is an AVD? Explain their creation and use.' Define both, list the AVD's configurable properties, and end with the trade-off: fast and free, but slower than real hardware and lacking true sensors.",
            ],
            keyTerms: [
              { term: "Emulator", definition: "Desktop virtual machine that boots a full Android system image." },
              { term: "AVD", definition: "Android Virtual Device - the saved configuration (profile, image, storage) the emulator runs." },
              { term: "Skin", definition: "The emulator window's device-shaped frame and button layout." },
              { term: "Snapshot", definition: "Saved emulator state that resumes in seconds instead of a cold boot." },
            ],
            bullets: [
              "Emulator = QEMU virtual device running a real Android system image on your desktop.",
              "AVD = the named configuration: device profile, API level, SD card, skin, sensors.",
              "One SDK, many AVDs - each a different phone/API for testing.",
              "Emulated hardware includes camera (webcam-backed), GPS, battery, network speed/latency.",
              "Snapshots persist emulator state across sessions; hardware acceleration (HAXM) makes boots fast.",
            ],
            diagram: {
              kind: "flow",
              title: "Creating and using an AVD",
              caption: "Five steps from empty SDK to running app.",
              steps: [
                { label: "Open AVD Manager", note: "Eclipse/ADT or SDK tools" },
                { label: "New AVD", note: "pick device definition + API target" },
                { label: "Configure hardware", note: "SD card, density, camera, network" },
                { label: "Launch", note: "emulator boots the system image" },
                { label: "Install + test", note: "adb install; run; watch logcat" },
              ],
            },
            codeExample: {
              language: "bash",
              caption: "avd.sh - creating and launching a custom AVD from the command line",
              code: `# list installable targets (API levels)
android list targets

# create an AVD named "exam_phone" on API 14, WVGA800 skin, 100 MB SD card
android create avd -n exam_phone -t 3 -c 100M -s WVGA800

# boot it
emulator -avd exam_phone &

# from another terminal: install and watch
adb install bin/MyFirstApp.apk
adb logcat`,
            },
            callout: {
              type: "warning",
              title: "The slow-boot trap",
              body: "First-time students assume the PC froze while the emulator boots. Enable hardware acceleration (HAXM/KVM) and use snapshots; keep one AVD running during a lab session and redeploy with adb instead of rebooting it. Cold boots cost minutes; snapshots cost seconds.",
            },
            examQuestions: [
              {
                q: "What is an emulator? What is an Android Virtual Device (AVD)? Explain how an AVD is created and used for testing.",
                marks: 7,
                outline: [
                  "Emulator: QEMU-based desktop VM booting a real Android system image",
                  "AVD: named configuration - device profile, API target, SD card, skin, sensors",
                  "Creation: AVD Manager - New - choose definition, target, storage",
                  "Launch boots Android with emulated camera/GPS/network",
                  "adb install + logcat for testing",
                  "Benefit and cost: free and easy to vary vs slower than real hardware",
                ],
              },
              {
                q: "Compare testing on an emulator with testing on a real device.",
                marks: 7,
                outline: [
                  "Emulator: free, configurable, any API level instantly",
                  "Sensors and performance are emulated - not physically true",
                  "Real device: true GPS/camera/telephony, realistic speed",
                  "Device needs USB drivers + developer mode; emulator needs neither",
                  "Best practice: emulator for breadth of APIs, device for sensor/performance truth",
                ],
              },
            ],
          },
          {
            number: "2.5",
            title: "Creating and setting up a custom Android emulator",
            body: [
              "A custom AVD is a device definition tailored to your test matrix. Beyond picking a template you set: screen size and resolution, abstracted LCD density, RAM and heap, internal storage and SD card, camera front/back emulation, network speed and latency, battery behaviour, GPS support, and the skin. Cloning an existing definition and tweaking one field is the fast path; the AVD then lives in your .android/avd folder for reuse.",
              "The reason to build several: layouts and features behave differently across screens and APIs. Test a list app on a 3.7-inch mdpi phone and a 10.1-inch xhdpi tablet; test an old app on a Gingerbread-era image; test a camera app with webcam-backed front and back cameras. Each AVD is one checkbox of your compatibility matrix - and it is exactly how the density-independence topics of Unit III get verified.",
              "Exam framing: 'Explain how to create a custom Android emulator' wants the properties list and the steps; 'why multiple AVDs?' wants the screen/API-coverage argument. Pair both in one answer when the question is a 7-marker.",
            ],
            keyTerms: [
              { term: "Device definition", definition: "A reusable hardware template (screen, RAM, sensors) an AVD is based on." },
              { term: "Density emulation", definition: "The abstracted LCD density an AVD reports - drives dp scaling and drawable buckets." },
              { term: "Test matrix", definition: "The set of AVDs (and devices) chosen to cover your supported screens and APIs." },
            ],
            bullets: [
              "Custom AVD properties: screen/resolution, density, RAM/heap, storage, SD card, cameras, network, skin.",
              "Clone a device definition, tweak one property, save - the AVD persists in .android/avd.",
              "One AVD per supported API level catches version regressions.",
              "One AVD per screen class (small phone, tablet) catches layout breaks.",
              "Sensor-critical apps (camera, GPS) still need a real device for final truth.",
            ],
            diagram: {
              kind: "fork",
              title: "What should this AVD test?",
              caption: "Each testing goal maps to a different custom profile - and one goal leaves the emulator.",
              start: "Planning a custom AVD",
              branches: [
                { label: "Small-screen layout", outcome: "2.7-3.7 inch QVGA/WVGA profile, mdpi density", good: true },
                { label: "Tablet layout", outcome: "10.1 inch WXGA profile, xhdpi density", good: true },
                { label: "Legacy API support", outcome: "older system image (e.g. Gingerbread) as target", good: true },
                { label: "True camera/GPS behaviour", outcome: "emulation is approximate - test on a real device", good: false },
              ],
            },
            table: {
              caption: "AVD properties and what each controls.",
              headers: ["Property", "What it controls"],
              rows: [
                ["Device definition / resolution", "Screen size and pixel dimensions of the virtual phone"],
                ["LCD density", "mdpi/hdpi/xhdpi - drives dp scaling and drawable selection"],
                ["Internal + SD storage", "Space for app data and media files"],
                ["Camera emulation", "Front/back cameras backed by webcam or a static scene"],
                ["Network speed/latency", "Edge/3G profiles to test slow-path behaviour"],
              ],
            },
            callout: {
              type: "tip",
              title: "Name AVDs by their purpose",
              body: "Name AVDs like 'phone-2.7-mdpi-api14' or 'tablet-10.1-xhdpi-api14' instead of 'MyAVD1'. Six months later the test matrix reads itself - and in vivas, a named test matrix is an easy credibility mark.",
            },
            examQuestions: [
              {
                q: "Explain how to create and configure a custom Android emulator (AVD). List the properties you can set and why each matters for testing.",
                marks: 7,
                outline: [
                  "AVD Manager - New (or android create avd on the command line)",
                  "Choose the device definition: screen size, resolution",
                  "Set LCD density - drives dp scaling and drawable choice",
                  "Storage: internal + SD card sizes",
                  "Hardware extras: cameras, GPS, network speed/latency",
                  "Save: the AVD persists in .android/avd; launch with emulator -avd",
                  "Purpose: one AVD per API/screen in your compatibility matrix",
                ],
              },
              {
                q: "Why does a developer maintain several custom AVDs? Give three concrete scenarios.",
                marks: 7,
                outline: [
                  "Screen coverage: phone vs tablet layouts verified on matching profiles",
                  "API coverage: oldest supported version plus newest",
                  "Hardware variants: front/back camera emulation, density buckets",
                  "Network conditions: an Edge-speed profile for slow-path testing",
                  "Regression safety: a failing AVD names the broken configuration exactly",
                ],
              },
            ],
          },
          {
            number: "2.6",
            title: "The Android project framework and My First Android Application",
            body: [
              "Every Android project, however big, has the same skeleton. AndroidManifest.xml declares the components and permissions. src/ (or java/) holds the Activity classes. res/ holds resources by type: layout/ for XML UIs, drawable/ for images, values/ for strings, colours and styles. gen/ (ADT era) holds the auto-generated R.java that maps every resource to an int constant. Build files (Ant/Gradle) compile, dex and package it all into the APK.",
              "My First Android Application is then five minutes: the wizard creates MainActivity with onCreate() calling setContentView(R.layout.activity_main); activity_main.xml holds a TextView with android:text='@string/hello'; strings.xml defines it; the manifest declares the activity with the MAIN/LAUNCHER intent-filter. Run deploys to the AVD, and the emulator shows 'Hello, Android!'. Every later topic - intents, layouts, SQLite - is this skeleton plus one new file.",
              "The 7-marker 'Explain the structure of an Android project' wants the folder list with one-line purposes plus the R.java rule (generated, never edited). The 14-marker adds the first-app walkthrough with the code - both are covered by the answer below.",
            ],
            keyTerms: [
              { term: "R.java", definition: "Auto-generated class mapping every resource to an int constant used by findViewById and setContentView." },
              { term: "res/", definition: "Resources by type: layout (UI XML), drawable (images), values (strings, colours, styles)." },
              { term: "setContentView()", definition: "The Activity call that inflates an XML layout as the visible UI." },
            ],
            bullets: [
              "AndroidManifest.xml: declares activities, services, receivers, providers, permissions, SDK levels.",
              "src/java/: your Activity subclasses and logic.",
              "res/layout: XML UIs; res/drawable: images; res/values: strings, colours, styles.",
              "R.java (generated): int constants for every resource; edit the resource, never the R file.",
              "setContentView(R.layout.activity_main) is the bridge from code to layout.",
              "The MAIN/LAUNCHER intent-filter marks which activity the home screen opens.",
            ],
            diagram: {
              kind: "layers",
              title: "Project anatomy, top to bottom",
              caption: "One skeleton from manifest to build files - learn it once, read any project.",
              layers: [
                { label: "AndroidManifest.xml", note: "components, permissions, SDK levels, launcher filter" },
                { label: "src / java", note: "MainActivity and all code" },
                { label: "res/layout", note: "activity_main.xml - the UI in XML" },
                { label: "res/drawable + res/values", note: "images, strings, colours, styles" },
                { label: "gen/R.java + build files", note: "resource IDs and the APK packaging recipe" },
              ],
            },
            codeExample: {
              language: "java",
              caption: "MyFirstApp - the two files every first app needs",
              code: `// MainActivity.java
public class MainActivity extends Activity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);   // R links code to XML
    }
}

<!-- res/layout/activity_main.xml -->
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical">
    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="@string/hello" />
</LinearLayout>`,
            },
            callout: {
              type: "exam",
              title: "R.java is generated",
              body: "A recurring trap: R.java is produced by aapt at build time and maps each resource to an int constant. Editing it by hand is overwritten on the next build - fix resources in res/ instead. Also remember the launcher activity's MAIN/LAUNCHER filter: delete it and the app installs with no icon.",
            },
            examQuestions: [
              {
                q: "Explain the structure of an Android application project, describing the purpose of each folder and file.",
                marks: 7,
                outline: [
                  "AndroidManifest.xml: components, permissions, SDK levels, launcher filter",
                  "src/java/: activity and component classes",
                  "res/layout: XML layouts; res/drawable: images; res/values: strings, colours, styles",
                  "gen/R.java: generated int IDs for all resources - never hand-edit",
                  "assets/: raw files; build files (Ant/Gradle) package the APK",
                  "Naming rule: lowercase resource files, referenced via the R class",
                ],
              },
              {
                q: "Describe the creation of 'My First Android Application' from project wizard to emulator screen, with the code of the activity and its layout.",
                marks: 14,
                outline: [
                  "Wizard inputs: name, package, minimum SDK, activity template",
                  "MainActivity extends Activity; onCreate calls setContentView(R.layout.activity_main)",
                  "activity_main.xml: LinearLayout with a TextView bound to @string/hello",
                  "strings.xml defines the hello string (localisation-ready)",
                  "The manifest declares the activity with the MAIN/LAUNCHER intent-filter",
                  "Build: aapt + javac + dx produce the APK",
                  "Run: adb installs to the AVD; the launcher opens the activity",
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
      title: "Android Activities and UI Design",
      summary:
        "Unit III is the interface unit: intents, activities with their lifecycle and the manifest, building multi-activity apps, layouts and layout properties, drawables and density independence, and the XML GUI object set.",
      chapter: {
        number: "03",
        title: "Activities, Intents and the UI Toolbox",
        intro:
          "Unit III covers understanding intents, activities with their lifecycle and the manifest, creating applications and new activities with expressions and flow control, layouts and their properties, drawable resources with density independence, and the XML GUI objects from Button to weight and padding.",
        inOneBreath:
          "An Intent carries an action plus data - explicit for intra-app navigation, implicit for whatever app's filter matches. An activity lives onCreate to onDestroy; onPause is for quick saves, onStop for heavy release, and rotation destroys and rebuilds through the savedInstanceState Bundle. The manifest declares every component and permission before code runs. Layouts stack (Linear/Frame), grid (Table) or rule-position (Relative); dp scales with density, sp with fonts, and px = dp x (dpi/160) converts between them. Padding paints inside the view; margin pushes siblings apart.",
        sections: [
          {
            number: "3.1",
            title: "Understanding Intent",
            body: [
              "An Intent is the messaging object Android uses to ask for an action to happen: it carries an action (ACTION_VIEW, ACTION_SEND), optional data (a Uri), categories, and extras (a Bundle of key-value pairs). Intents come in two kinds. An explicit intent names the exact component class to run - used inside your own app. An implicit intent declares only the action and data, and the system finds a matching activity by reading the intent-filters every app published in its manifest.",
              "Code makes it concrete. Explicit: Intent i = new Intent(this, SecondActivity.class); i.putExtra(\"roll\", \"123\"); startActivity(i); - SecondActivity reads getIntent().getStringExtra(\"roll\"). Implicit: new Intent(Intent.ACTION_VIEW, Uri.parse(\"http://rgpv.ac.in\")) opens a browser chosen by the system. The same object is reused in Unit IV for broadcasts, which is why the syllabus teaches Intent before activities and receivers.",
              "'What is an Intent? Differentiate explicit and implicit intents with examples' is a guaranteed 7-marker; 14-markers add the resolution mechanism and code. The differentiation wants: component named vs action declared; compile-time safe vs resolved at runtime; intra-app vs cross-app.",
            ],
            keyTerms: [
              { term: "Intent", definition: "The message object describing an action to perform, with data and extras." },
              { term: "Explicit intent", definition: "Names the target component class directly - used within one app." },
              { term: "Implicit intent", definition: "Declares action + data only; the system resolves it against published intent-filters." },
              { term: "Extra", definition: "A key-value pair in the intent's Bundle, used to pass data to the target." },
            ],
            bullets: [
              "Intent = message object: action + data (Uri) + category + extras (Bundle).",
              "Explicit intent names the target class - the intra-app default.",
              "Implicit intent declares the action; the system matches intent-filters across apps.",
              "putExtra/getExtra carries values between activities; getIntent() reads them at the target.",
              "startActivity(i) launches; the same Intent object drives broadcasts (Unit IV).",
            ],
            diagram: {
              kind: "flow",
              title: "An intent's journey",
              caption: "From your button click to the target activity's getIntent().",
              steps: [
                { label: "Create Intent", note: "action + data + extras" },
                { label: "startActivity()", note: "hand it to the framework" },
                { label: "Resolve", note: "explicit class, or match against intent-filters" },
                { label: "Launch", note: "target activity enters onCreate()" },
                { label: "Read", note: "getIntent() pulls the extras" },
              ],
            },
            codeExample: {
              language: "java",
              caption: "Intents.java - explicit, implicit and extras",
              code: `// 1. Explicit intent: intra-app, class named
Intent i = new Intent(this, SecondActivity.class);
i.putExtra("roll", "20IT123");
startActivity(i);

// 2. Reading it in SecondActivity
String roll = getIntent().getStringExtra("roll");

// 3. Implicit intent: action + data, system resolves
Intent web = new Intent(Intent.ACTION_VIEW,
                        Uri.parse("http://rgpv.ac.in"));
startActivity(web);`,
            },
            callout: {
              type: "warning",
              title: "Implicit intents can fail silently",
              body: "If no activity matches an implicit intent, startActivity throws ActivityNotFoundException - users see a crash, not a message. Call resolveActivity(getPackageManager()) first, or catch the exception. Examiners award the safety line even when the question forgot to ask for it.",
            },
            examQuestions: [
              {
                q: "What is an Intent? Differentiate explicit and implicit intents with one example of each.",
                marks: 7,
                outline: [
                  "Intent: messaging object - action, data Uri, category, extras",
                  "Explicit: target class named; compile-time safe; intra-app navigation",
                  "Implicit: only action + data declared; resolved against intent-filters",
                  "Examples: SecondActivity.class vs ACTION_VIEW on a Uri",
                  "Resolution happens at runtime for implicit intents",
                  "The same object model powers broadcasts (Unit IV)",
                ],
              },
              {
                q: "Explain the intent mechanism in Android: its structure, the resolution of implicit intents, and the passing of data, with code for an explicit navigation and an implicit share.",
                marks: 14,
                outline: [
                  "Anatomy: action, data Uri, categories, flags, extras Bundle",
                  "Explicit intent: new Intent(context, Class); startActivity",
                  "putExtra / getIntent().getStringExtra for data hand-off",
                  "Implicit resolution: Package Manager scans all published intent-filters",
                  "Intent-filter: action + category + data scheme matching",
                  "No match: ActivityNotFoundException; the resolveActivity check",
                  "Example: ACTION_SEND with putExtra text launches a chooser",
                ],
              },
            ],
          },
          {
            number: "3.2",
            title: "Activity and the activity lifecycle",
            body: [
              "An Activity is a single, focused screen the user interacts with - a Java class plus an XML layout, managed by the system's Activity Manager on a back stack. Its life is a fixed callback sequence: onCreate() (inflate UI, bind views), onStart() (becoming visible), onResume() (foreground, interactive), onPause() (partially covered - pause animations, save light state), onStop() (no longer visible), onDestroy() (final teardown), with onRestart() bridging a return from stopped.",
              "Trace a call arriving mid-game: onResume -> onPause (the incoming-call dialog covers you) -> onStop (fully hidden) -> the call ends -> onRestart -> onStart -> onResume, and the game resumes without a re-create. Rotate the device instead and the activity is destroyed and re-created outright - which is why onCreate receives a Bundle savedInstanceState to restore state saved in onSaveInstanceState().",
              "The lifecycle diagram is the most-drawn diagram of the subject. For full marks: the six callbacks in order, onRestart as the return edge, one line of 'work that belongs here' per callback, and the rotation exception. Pair it with the manifest (3.4) - an undeclared activity never lives at all.",
            ],
            keyTerms: [
              { term: "Activity", definition: "A single screen with UI; the unit of navigation and back-stack entry." },
              { term: "Lifecycle callback", definition: "The fixed system-called sequence onCreate..onDestroy that frames an activity's life." },
              { term: "Back stack", definition: "The ordered stack of activities the Back button pops." },
              { term: "onSaveInstanceState", definition: "Callback delivering a Bundle of UI state into onCreate/onRestoreInstanceState." },
            ],
            bullets: [
              "Activity = one screen: a Java class + an XML layout, stacked and managed by the system.",
              "onCreate -> onStart -> onResume -> (running) -> onPause -> onStop -> onDestroy.",
              "onRestart -> onStart -> onResume is the return path from stopped (not destroyed).",
              "onPause: quick, light work only - it delays whatever covers you.",
              "onSaveInstanceState(Bundle) + onCreate(Bundle) survive rotation and process death.",
            ],
            diagram: {
              kind: "cycle",
              title: "The activity lifecycle",
              caption: "onRestart returns from stopped; only a destroyed activity starts from scratch.",
              steps: [
                { label: "onCreate", note: "inflate layout, bind views" },
                { label: "onStart", note: "visible, not yet interactive" },
                { label: "onResume", note: "foreground + interactive" },
                { label: "onPause", note: "partly covered - save light state fast" },
                { label: "onStop", note: "hidden - release heavy resources" },
                { label: "onDestroy", note: "final teardown; back stack pop or finish()" },
              ],
            },
            table: {
              caption: "Callback -> the work that belongs there.",
              headers: ["Callback", "Typical work"],
              rows: [
                ["onCreate", "setContentView, findViewById, initialise data"],
                ["onStart / onResume", "register listeners, start location updates (Unit V)"],
                ["onPause", "persist lightweight state; pause animations"],
                ["onStop", "release heavy resources, unregister receivers"],
                ["onDestroy", "final cleanup - last chance before the object dies"],
                ["onRestart", "re-query data that changed while you were away"],
              ],
            },
            callout: {
              type: "warning",
              title: "onPause is not a dumping ground",
              body: "onPause runs every time anything covers the activity - a dialog, a menu, a permission prompt. Heavy database writes there make the UI feel broken. Keep onPause quick; do heavy persistence in onStop, and put in onPause only what the next millisecond needs.",
            },
            examQuestions: [
              {
                q: "Draw and explain the activity lifecycle. State the purpose of each callback, what work belongs in it, and what happens when a phone call interrupts a running activity.",
                marks: 14,
                outline: [
                  "onCreate: inflate UI, bind views, initialise data",
                  "onStart/onResume: visible then interactive; start listeners",
                  "onPause: light saves only - the next thing must show fast",
                  "onStop: hidden; release heavy resources; unregister",
                  "onDestroy: teardown; onRestart bridges a return from stop",
                  "Call arrives: onResume -> onPause -> onStop -> back via onRestart -> onResume",
                  "Rotation: destroy + recreate; onSaveInstanceState restores UI state",
                ],
              },
              {
                q: "Explain the difference between onPause(), onStop() and onDestroy() with one use of each.",
                marks: 7,
                outline: [
                  "onPause: activity partly visible - quick state saves, pause media",
                  "onStop: fully hidden - release heavy resources, unregister receivers",
                  "onDestroy: final destruction - last cleanup before object death",
                  "Order: always onPause -> (onStop) -> (onDestroy)",
                  "onDestroy may be skipped if the process is killed outright",
                ],
              },
            ],
          },
          {
            number: "3.3",
            title: "Creating the application and new activities",
            body: [
              "A second activity needs two registrations, not one: the Java class extending Activity with its own layout, and an <activity> entry in the manifest - forget the second and navigation crashes with ActivityNotFoundException. From there, four launch patterns cover every navigation need: explicit intent to a known class, implicit intent to any willing handler, startActivityForResult when the first screen needs data back, and (Unit IV) a broadcast when everyone should hear.",
              "Worked example - a roll-number picker. FirstActivity has a button; its handler builds an explicit intent to PickActivity with startActivityForResult(i, REQ_CODE). PickActivity shows a list, calls setResult(RESULT_OK, resultIntent) and finish(). Back in FirstActivity, onActivityResult(REQ_CODE, RESULT_OK, data) reads the chosen roll from data.getExtras(). The request code routes the reply to the right caller - essential when one screen asks several others.",
              "Examiners frame this as 'create an application with two activities and pass data between them'. The full-mark shape: manifest entry, explicit intent with putExtra, setResult + finish on return, onActivityResult to receive - plus the slip an undeclared activity causes, the most common crash in student labs.",
            ],
            keyTerms: [
              { term: "<activity>", definition: "The manifest element that registers an activity class with the system." },
              { term: "startActivityForResult", definition: "Launches an activity expecting a reply routed to onActivityResult by request code." },
              { term: "setResult()", definition: "The child activity's reply - a result code plus an intent - before finish()." },
              { term: "ActivityNotFoundException", definition: "Runtime crash when the target of an (implicit) intent has no matching, declared activity." },
            ],
            bullets: [
              "New activity = class + layout + <activity> manifest entry - all three or it cannot launch.",
              "Explicit intent: navigation inside your app, target known.",
              "Implicit intent: any app whose filter matches may handle it.",
              "startActivityForResult + onActivityResult return data; request codes route replies.",
              "setResult(RESULT_OK, intent) + finish() hands control back to the caller.",
            ],
            diagram: {
              kind: "fork",
              title: "How should the next screen open?",
              caption: "Four launch patterns - pick by who the target is and who needs the result.",
              start: "Button pressed",
              branches: [
                { label: "Known class, same app", outcome: "explicit Intent(this, Second.class) + startActivity", good: true },
                { label: "Any capable handler", outcome: "implicit intent - the system picks from intent-filters", good: true },
                { label: "Need data back", outcome: "startActivityForResult + onActivityResult", good: true },
                { label: "Everyone should know", outcome: "not navigation - sendBroadcast (Unit IV)", good: true },
              ],
            },
            codeExample: {
              language: "java",
              caption: "TwoActivities.java - launching and receiving a result",
              code: `// FirstActivity - launch and expect a reply
static final int PICK_ROLL = 1;
Intent i = new Intent(this, PickActivity.class);
startActivityForResult(i, PICK_ROLL);

@Override
protected void onActivityResult(int req, int res, Intent data) {
    if (req == PICK_ROLL && res == RESULT_OK) {
        String roll = data.getStringExtra("roll");
        TextView tv = (TextView) findViewById(R.id.tvRoll);
        tv.setText(roll);
    }
}

// PickActivity - answer and die
Intent out = new Intent();
out.putExtra("roll", "20IT123");
setResult(RESULT_OK, out);
finish();`,
            },
            callout: {
              type: "exam",
              title: "The three-part answer",
              body: "'Pass data between two activities' is marked on three checkpoints: the <activity> declaration, the putExtra/startActivityForResult pair, and the setResult/onActivityResult pair. Write all three as labelled steps with the request-code logic - students lose marks by showing only the sending half.",
            },
            examQuestions: [
              {
                q: "Explain the steps to add a new activity to an existing application and to navigate to it with data.",
                marks: 7,
                outline: [
                  "Create the class extending Activity with its own layout",
                  "Declare it in AndroidManifest.xml with <activity>",
                  "Build an explicit intent; putExtra carries the payload",
                  "startActivity(i) launches; getIntent() reads at the target",
                  "Missing declaration: ActivityNotFoundException at runtime",
                ],
              },
              {
                q: "Design a two-activity application where the first screen asks the second to pick a value and displays the result. Give the manifest entry and the code on both sides.",
                marks: 14,
                outline: [
                  "Manifest: both activities declared; the first carries MAIN/LAUNCHER",
                  "FirstActivity: explicit intent + startActivityForResult(i, REQUEST)",
                  "SecondActivity: user picks; setResult(RESULT_OK, out) with putExtra",
                  "finish() returns control; the back stack pops",
                  "onActivityResult: match request code and RESULT_OK before reading",
                  "Data flow: caller -> child -> caller with request/result codes",
                  "Slip: reading the result without checking res == RESULT_OK",
                ],
              },
            ],
          },
          {
            number: "3.4",
            title: "The Android Manifest",
            body: [
              "AndroidManifest.xml is the app's declaration card, read at install and at launch. It names the package and SDK levels (uses-sdk: minSdkVersion, targetSdkVersion), declares every component - activities, services, broadcast receivers, content providers - requests permissions with <uses-permission>, declares hardware needs with <uses-feature>, and attaches intent-filters that say what each component answers to.",
              "One annotated fragment shows all of it: <uses-permission android:name='android.permission.INTERNET'/>; inside <application>, the launcher activity carries the filter with action MAIN and category LAUNCHER - exactly one per app, which is how the home screen knows which icon opens what. Remove the filter and the app installs silently with no icon; remove a permission and the feature crashes at the first call.",
              "'Explain the role of AndroidManifest.xml' is a 7-marker marked on four groups: components, permissions, SDK levels, intent-filters. For 14-markers, add the install-time story: Package Manager parses the manifest, grants permissions, registers components, and the Launcher resolves MAIN/LAUNCHER.",
            ],
            keyTerms: [
              { term: "uses-sdk", definition: "Declares minSdkVersion/targetSdkVersion - the API window the app supports." },
              { term: "uses-permission", definition: "Requests a protected capability (INTERNET, CAMERA) at install time." },
              { term: "intent-filter", definition: "Declares what a component answers to; MAIN/LAUNCHER marks the entry activity." },
              { term: "Package Manager", definition: "The system service that parses manifests, grants permissions and registers components." },
            ],
            bullets: [
              "Package name + uses-sdk (min/target): the app's identity and compatibility window.",
              "<activity>, <service>, <receiver>, <provider>: all four component types are declared here.",
              "<uses-permission>: the permission list the user consents to at install.",
              "MAIN/LAUNCHER intent-filter: exactly one, marking the entry activity.",
              "The manifest is read before any code runs - errors surface at install or first launch.",
            ],
            diagram: {
              kind: "pipeline",
              title: "What happens to the manifest",
              caption: "Parsed before your first line of code ever runs.",
              stages: [
                { label: "APK built", note: "manifest packaged inside" },
                { label: "Package Manager parses", note: "components + permissions read" },
                { label: "Permissions granted", note: "user consents at install" },
                { label: "Components registered", note: "activities/services/receivers/providers known" },
                { label: "Launcher resolves", note: "MAIN/LAUNCHER filter -> home-screen icon" },
              ],
            },
            codeExample: {
              language: "xml",
              caption: "AndroidManifest.xml - annotated skeleton",
              code: `<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.exam.firstapp"
    android:versionCode="1" android:versionName="1.0">

    <uses-sdk android:minSdkVersion="14" android:targetSdkVersion="17"/>
    <uses-permission android:name="android.permission.INTERNET"/>

    <application android:icon="@drawable/icon" android:label="FirstApp">
        <activity android:name=".MainActivity">
            <intent-filter>
                <action android:name="android.intent.action.MAIN"/>
                <category android:name="android.intent.category.LAUNCHER"/>
            </intent-filter>
        </activity>
        <activity android:name=".SecondActivity"/>
    </application>
</manifest>`,
            },
            callout: {
              type: "warning",
              title: "Install-time beats compile-time",
              body: "Manifest mistakes compile clean and fail at run: a missing <activity> crashes on navigation; a missing <uses-permission> throws SecurityException on first use of the protected API. After any new component or permission, re-check the manifest before blaming the code.",
            },
            examQuestions: [
              {
                q: "Explain the role of AndroidManifest.xml in an Android application. Group its declarations and give one element of each group.",
                marks: 7,
                outline: [
                  "Identity: package attribute, versionCode/versionName",
                  "Compatibility: uses-sdk with minSdkVersion and targetSdkVersion",
                  "Components: <activity>, <service>, <receiver>, <provider> declarations",
                  "Permissions: <uses-permission> requests (INTERNET example)",
                  "Hardware: <uses-feature> (camera example)",
                  "Intent-filters: MAIN/LAUNCHER marks the launcher activity",
                ],
              },
              {
                q: "Walk through what the system does with the manifest at install time and at launch time, and explain two failures caused by manifest omissions.",
                marks: 14,
                outline: [
                  "Install: APK presented; Package Manager parses the manifest",
                  "Permissions granted to the app's UID after user consent",
                  "Components registered: activities, services, receivers, providers",
                  "Launch: the Launcher queries activities with MAIN/LAUNCHER filters",
                  "A tap resolves the entry activity; Activity Manager starts it",
                  "Failure 1: missing <activity> -> ActivityNotFoundException on navigation",
                  "Failure 2: missing <uses-permission> -> SecurityException at the API call",
                ],
              },
            ],
          },
          {
            number: "3.5",
            title: "Simple UI - layouts and layout properties",
            body: [
              "A layout is a ViewGroup container holding child Views; Android ships five classics. LinearLayout stacks children in one direction (orientation vertical/horizontal). FrameLayout stacks them overlapping - the base of single-view holders. TableLayout arranges rows of cells. RelativeLayout positions children by rules against parent or siblings. Layout properties govern all of them: layout_width/height (match_parent, wrap_content or a dp value), padding, layout_margin, layout_gravity and layout_weight.",
              "A login form in one vertical LinearLayout: EditText (username), EditText (password), Button - wrap_content heights, match_parent width, 8dp margins. Add a row of two equal buttons by giving the row weightSum=2 and each button layout_weight=1: free space splits proportionally instead of by content size. That weight mechanism is LinearLayout's answer to 'fill the remaining space'.",
              "'Compare LinearLayout, RelativeLayout, FrameLayout and TableLayout' wants a property-per-layout table plus one XML snippet. The 14-marker asks you to write the login form's XML - practise it until the namespace line, match_parent and the weight syntax are automatic.",
            ],
            keyTerms: [
              { term: "ViewGroup", definition: "A container View that holds and positions children - every layout is one." },
              { term: "layout_weight", definition: "LinearLayout property distributing leftover space in proportion among weighted children." },
              { term: "match_parent / wrap_content", definition: "Fill the parent's space / take only the content's size." },
              { term: "gravity", definition: "How content sits inside its view; layout_gravity places the view inside its parent." },
            ],
            bullets: [
              "LinearLayout: single-direction stack; the default choice for forms.",
              "FrameLayout: overlapping stack - containers, image backdrops.",
              "TableLayout: rows and cells for grid-like data.",
              "RelativeLayout: rules (below, alignParentRight) - flat hierarchies without nesting.",
              "Common properties: layout_width/height, padding, layout_margin, gravity, layout_weight.",
              "layout_weight splits free space; weightSum declares the row's total.",
            ],
            diagram: {
              kind: "matrix",
              title: "Four layouts on two axes",
              caption: "Placement rules against overlap behaviour - pick by the shape of your UI.",
              axes: { x: "Child placement (sequential -> rule-based)", y: "Children (never overlap -> stack)" },
              quadrants: [
                { label: "FrameLayout", note: "sequential, always stacked - one surface" },
                { label: "RelativeLayout", note: "rule-based positioning, may overlap" },
                { label: "LinearLayout", note: "sequential rows/columns, never overlap" },
                { label: "TableLayout", note: "sequential grid of rows and cells" },
              ],
            },
            codeExample: {
              language: "xml",
              caption: "login.xml - LinearLayout with weight-split buttons",
              code: `<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:padding="8dp">

    <EditText android:id="@+id/etUser"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:hint="Username"/>

    <EditText android:id="@+id/etPass"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:inputType="textPassword"/>

    <LinearLayout android:orientation="horizontal"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:weightSum="2">
        <Button android:layout_width="0dp" android:layout_height="wrap_content"
            android:layout_weight="1" android:text="Login"/>
        <Button android:layout_width="0dp" android:layout_height="wrap_content"
            android:layout_weight="1" android:text="Cancel"/>
    </LinearLayout>
</LinearLayout>`,
            },
            callout: {
              type: "tip",
              title: "weight needs width=0dp",
              body: "In a horizontal LinearLayout, a weighted child's width must be 0dp - the weight then claims free space. Keeping wrap_content alongside weight makes the child's content size compete with the weight and the split becomes unpredictable. This one line fixes half of all 'why are my buttons unequal' questions.",
            },
            examQuestions: [
              {
                q: "Compare LinearLayout, FrameLayout, TableLayout and RelativeLayout with one suitable use each, and write the XML for a login screen with two EditTexts and two equally sized buttons.",
                marks: 14,
                outline: [
                  "LinearLayout: one-direction stack - forms and rows",
                  "FrameLayout: overlap stack - fragments, backdrops",
                  "TableLayout: rows x cells - tabular data",
                  "RelativeLayout: rules vs parent/siblings - flat, flexible screens",
                  "XML: LinearLayout vertical, two EditTexts (inputType on the password)",
                  "Button row: horizontal LinearLayout, weightSum=2, layout_weight=1, width=0dp",
                  "Common properties: layout_width/height, padding, margin",
                ],
              },
              {
                q: "Explain layout_weight and weightSum with an example, including the 0dp rule.",
                marks: 7,
                outline: [
                  "weight distributes remaining space proportionally among weighted children",
                  "weightSum declares the parent's total so proportions are explicit",
                  "Horizontal weighted child: layout_width=0dp or the split fights content size",
                  "Example: two buttons with weight=1 each split a row exactly in half",
                  "Weight is LinearLayout-specific; RelativeLayout positions by rules instead",
                ],
              },
            ],
          },
          {
            number: "3.6",
            title: "Drawable resources and density independence (px, dip/dp, sip/sp)",
            body: [
              "A drawable is anything Android can render: PNG/JPG bitmaps, XML shape and state files, or gradients - stored in res/drawable and referenced as @drawable/name. Density independence means the UI measures in abstract units, not device pixels: 1 dp (density-independent pixel, historically dip) equals 1 px on the 160-dpi baseline screen and scales elsewhere; 1 sp (scale-independent pixel; sip is its older synonym) is a dp that additionally follows the user's font-size setting. Raw px never scales - it is reserved for hairline art.",
              "The conversion: px = dp x (dpi / 160). A 16dp margin is 12 px on ldpi (120 dpi), 16 px on mdpi (160), 24 px on hdpi (240), 32 px on xhdpi (320). Android supplies drawable buckets ldpi/mdpi/hdpi/xhdpi so the loader picks the crispest bitmap for the screen; supply each size and the same button looks right everywhere. Text is always sp - an 18sp caption grows when the user sets large fonts, exactly as accessibility demands.",
              "The numerical is a guaranteed 7-marker: 'Convert 20dp to pixels on an hdpi device' - write the formula, substitute 240/160, answer 30 px. The definition question wants all four units with the one-line rule: dp for dimensions, sp for text, px almost never.",
            ],
            keyTerms: [
              { term: "dp (dip)", definition: "Density-independent pixel: 1dp = 1px on the 160-dpi baseline screen." },
              { term: "sp (sip)", definition: "Scale-independent pixel: dp plus the user's font-size setting." },
              { term: "Density bucket", definition: "Drawable folder qualifier (ldpi/mdpi/hdpi/xhdpi) matching the screen's dpi." },
              { term: "Drawable", definition: "Any renderable resource - bitmap, XML shape, gradient - in res/drawable." },
            ],
            bullets: [
              "dp (dip): density-independent pixel - 1dp = 1px at 160 dpi; use for all dimensions.",
              "sp (sip): scale-independent pixel - dp + the user's font-scale; use for all text.",
              "px: raw device pixels - never scale; avoid except for deliberate hairlines.",
              "Formula: px = dp x (dpi / 160); ldpi 120, mdpi 160, hdpi 240, xhdpi 320.",
              "Drawable buckets (ldpi..xhdpi) let the system pick the right bitmap per screen.",
            ],
            diagram: {
              kind: "fork",
              title: "Which unit for this value?",
              caption: "Two questions decide: does it scale with screen, and does it scale with the user's font choice?",
              start: "Declaring a UI measurement",
              branches: [
                { label: "Text size", outcome: "sp - follows the user's font-scale setting", good: true },
                { label: "Margins, padding, view sizes", outcome: "dp - scales with screen density", good: true },
                { label: "Bitmap art", outcome: "provide per-density drawables (ldpi..xhdpi)", good: true },
                { label: "Raw pixel values", outcome: "px - unscaled; only for deliberate hairlines", good: false },
              ],
            },
            table: {
              caption: "The four units, one line each.",
              headers: ["Unit", "Definition", "Use for"],
              rows: [
                ["px", "One physical device pixel", "Rarely - hairline separators"],
                ["dp / dip", "1px at the 160-dpi baseline; scales with density", "All layout dimensions and spacing"],
                ["sp / sip", "dp that also follows user font scale", "Text sizes only"],
                ["dpi bucket", "ldpi 120 / mdpi 160 / hdpi 240 / xhdpi 320", "Choosing drawable folders"],
              ],
            },
            callout: {
              type: "exam",
              title: "Show the substitution",
              body: "In the dp-to-px numerical, the mark is the formula line 'px = dp x (dpi / 160)' and the substitution, not just the final number. Write '20dp on hdpi: 20 x (240/160) = 30 px' - two marks earned by one visible line of algebra.",
            },
            examQuestions: [
              {
                q: "Explain px, dip/dp, sip/sp and density independence. How does Android choose between drawable folders?",
                marks: 7,
                outline: [
                  "dp: density-independent pixel, 1dp = 1px at the 160-dpi baseline",
                  "sp: dp + user font-scale - reserved for text",
                  "px: raw pixels, unscaled - avoid except hairlines",
                  "Formula: px = dp x (dpi / 160)",
                  "Buckets: ldpi/mdpi/hdpi/xhdpi folders per screen density",
                  "The loader picks the closest bucket - crisp art everywhere",
                ],
              },
              {
                q: "Convert: (a) 20dp to px on an hdpi screen; (b) 48px to dp on an xhdpi screen; (c) why must text be in sp?",
                marks: 7,
                outline: [
                  "(a) 20 x (240/160) = 30 px",
                  "(b) 48 / (320/160) = 24 dp",
                  "Formula direction: multiply by dpi/160 one way, divide the other",
                  "(c) sp additionally follows the user's font-size setting",
                  "Accessibility: large-font users keep readable text",
                ],
              },
            ],
          },
          {
            number: "3.7",
            title: "XML introduction to GUI objects - Button, EditText, ToggleButton, WeightSum, Padding, Layout Weight",
            body: [
              "GUI objects are declared in XML and inflated into live views by setContentView. The syllabus set: TextView (the label), EditText (input, shaped by inputType), Button (a clickable label wired with setOnClickListener), and ToggleButton (on/off state, read with isChecked()). Container-level properties shape them all: android:padding adds space inside a view's own background, android:layout_margin adds space outside it between siblings, weightSum and layout_weight split space, and android:id names each view for findViewById.",
              "A small form shows the family: an EditText with android:inputType='phone' and a hint; a ToggleButton 'WiFi' whose listener toasts isChecked(); a Button that reads the EditText with getText().toString(). Padding 8dp makes the EditText's touch target taller inside its background; a 12dp margin between it and the button keeps them visually separate - same number, opposite direction.",
              "The exam question is usually 'write XML for the given UI' (14 marks) or 'differentiate padding and margin' (7). The differentiation answer is direction plus background: padding grows the view's own background and touch area inward; margin pushes neighbours away and paints nothing.",
            ],
            keyTerms: [
              { term: "EditText", definition: "Editable text field; android:inputType shapes the keyboard and masking." },
              { term: "ToggleButton", definition: "Two-state button; isChecked() reports the state." },
              { term: "findViewById", definition: "Resolves an android:id to the inflated View object in Java." },
              { term: "weightSum", definition: "The total weight a LinearLayout distributes; children claim shares with layout_weight." },
            ],
            bullets: [
              "TextView = label; EditText = input (inputType: text, phone, number, textPassword).",
              "Button: clickable; wire with setOnClickListener + onClick(View v).",
              "ToggleButton: pressed state; isChecked() returns it.",
              "android:id + findViewById(R.id.x) links XML to Java.",
              "padding: space inside the view (background grows); margin: space outside (between siblings).",
              "weightSum + layout_weight split leftover space in a LinearLayout.",
            ],
            diagram: {
              kind: "compare",
              title: "Padding vs margin",
              caption: "Same 8dp, opposite directions - one paints background, the other pushes neighbours.",
              left: {
                heading: "android:padding",
                items: [
                  "Space inside the view's own bounds",
                  "Grows the background and touch target",
                  "Affects content-to-edge distance",
                  "Use to make a control feel larger",
                ],
              },
              right: {
                heading: "android:layout_margin",
                items: [
                  "Space outside the view, between siblings",
                  "Paints nothing - pure gap",
                  "Affects sibling-to-sibling distance",
                  "Use to separate controls",
                ],
              },
            },
            codeExample: {
              language: "xml",
              caption: "form.xml - the syllabus widget set in one file",
              code: `<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:orientation="vertical"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:weightSum="3"
    android:padding="8dp">

    <EditText android:id="@+id/etPhone"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:inputType="phone"
        android:hint="Enter phone"/>

    <ToggleButton android:id="@+id/tbWifi"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:textOn="WiFi ON" android:textOff="WiFi OFF"/>

    <Button android:id="@+id/btnSave"
        android:layout_width="match_parent"
        android:layout_height="0dp"
        android:layout_weight="1"
        android:layout_marginTop="12dp"
        android:padding="8dp"
        android:text="Save"/>
</LinearLayout>`,
            },
            callout: {
              type: "tip",
              title: "inputType is a free validator",
              body: "android:inputType='phone' turns the soft keyboard into a dial pad and restricts input; 'textPassword' masks characters. Examiners notice when the XML uses it - and in the lab it deletes a whole class of validation bugs.",
            },
            examQuestions: [
              {
                q: "Write the XML for a form containing a phone-number EditText, a WiFi ToggleButton and a Save Button occupying one-third of the screen height. Explain padding, margin and weightSum as used.",
                marks: 14,
                outline: [
                  "Root LinearLayout, vertical, padding=8dp, weightSum=3",
                  "EditText: inputType=phone, hint, wrap_content height",
                  "ToggleButton: textOn/textOff labels; state read via isChecked()",
                  "Button: height=0dp with layout_weight=1 - one third of the space",
                  "layout_marginTop separates it from the ToggleButton",
                  "padding=8dp inside the Button grows its touch target",
                  "ids bind each widget to findViewById in Java",
                ],
              },
              {
                q: "Differentiate android:padding and android:layout_margin with a diagram-grade explanation.",
                marks: 7,
                outline: [
                  "padding: space inside the view; background and touch target grow",
                  "margin: space outside; pushes siblings apart, paints nothing",
                  "padding affects content-to-edge; margin affects sibling-to-sibling",
                  "margin is a layout request honoured by the parent ViewGroup",
                  "Example: 8dp padding on a Button vs 12dp margin between two buttons",
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
      title: "Broadcasting Data, SQLite and Content Providers",
      summary:
        "Unit IV completes the data story: broadcast intents and receivers, broadcast kinds and registration modes, the embedded SQLite engine, database creation with SQLiteOpenHelper, full CRUD querying, and content providers for cross-app data.",
      chapter: {
        number: "04",
        title: "Broadcasting, Persistence and Shared Data",
        intro:
          "Unit IV covers intents for broadcasting data and the receivers that answer them, the kinds of broadcasts and registration modes, the embedded SQLite engine, the SQLiteOpenHelper contract for creating databases, full CRUD querying, and content providers that publish data across app boundaries.",
        inOneBreath:
          "A broadcast intent is a system-wide announcement - sendBroadcast routes it to every matching receiver's onReceive, which runs briefly on the main thread; registration is dynamic (registerReceiver) or static (manifest), delivery normal or ordered by priority. SQLite is Android's embedded, ACID, single-file engine; SQLiteOpenHelper owns creation (onCreate DDL) and migration (onUpgrade on version bump). CRUD is method-shaped - insert, query to Cursor, update, delete - with '?'-bound args as the injection defence. A content provider publishes the same CRUD behind a content:// URI via the ContentResolver: private by UID, shared by permission.",
        sections: [
          {
            number: "4.1",
            title: "Intents for broadcasting data - broadcast receivers",
            body: [
              "A broadcast intent is an intent fired to the whole system: sendBroadcast(i) delivers it to every registered receiver whose intent-filter matches - no single target, no result back. Receivers are components: a class extending BroadcastReceiver implementing onReceive(Context, Intent), registered either statically in the manifest or dynamically with registerReceiver(). The system broadcasts a vocabulary of events - BOOT_COMPLETED, SMS_RECEIVED (android.provider.Telephony.SMS_RECEIVED), BATTERY_LOW, CONNECTIVITY_CHANGE - and your app can invent its own actions.",
              "Worked example: an activity sends 'com.exam.SYNC_DONE'; a receiver toasts 'Sync finished'. Another classic: a BOOT_COMPLETED receiver starts a service after reboot - declared with the filter in the manifest plus the RECEIVE_BOOT_COMPLETED permission. onReceive runs on the main thread and must return within about ten seconds, or the system kills the app - heavy work goes to a service, not the receiver.",
              "The 7-marker 'Explain broadcast receivers with example' wants: the definition, the sendBroadcast -> onReceive path, both registration ways, and one system event by name. 14-markers add the code and the lifecycle caveat.",
            ],
            keyTerms: [
              { term: "Broadcast intent", definition: "An intent delivered to all matching receivers at once." },
              { term: "BroadcastReceiver", definition: "Component whose onReceive() answers a broadcast; transient, no result." },
              { term: "IntentFilter", definition: "The action (and data) pattern a receiver listens for." },
              { term: "BOOT_COMPLETED", definition: "System broadcast after reboot; needs the RECEIVE_BOOT_COMPLETED permission." },
            ],
            bullets: [
              "Broadcast intent: fired system-wide by sendBroadcast(); no single target, no return value.",
              "Receiver = BroadcastReceiver subclass implementing onReceive(Context, Intent).",
              "Registration: statically in the manifest or dynamically via registerReceiver().",
              "System events: BOOT_COMPLETED, SMS_RECEIVED, BATTERY_LOW, CONNECTIVITY_CHANGE.",
              "onReceive runs on the main thread - about 10 seconds, then the app is killed.",
            ],
            diagram: {
              kind: "flow",
              title: "The life of a broadcast",
              caption: "One send, many receivers, no reply.",
              steps: [
                { label: "Event occurs", note: "system event or your app's action" },
                { label: "sendBroadcast(Intent)", note: "action string + optional extras" },
                { label: "System routes", note: "matches receivers by intent-filter" },
                { label: "onReceive()", note: "each matching receiver runs, main thread" },
                { label: "Done", note: "receiver is transient - no result returned" },
              ],
            },
            codeExample: {
              language: "java",
              caption: "SyncReceiver.java - custom broadcast, both ends",
              code: `// Sender (inside an Activity)
Intent i = new Intent("com.exam.SYNC_DONE");
i.putExtra("rows", 42);
sendBroadcast(i);

// Receiver - registered in code
BroadcastReceiver br = new BroadcastReceiver() {
    @Override
    public void onReceive(Context c, Intent i) {
        int rows = i.getIntExtra("rows", 0);
        Toast.makeText(c, "Synced " + rows + " rows",
                       Toast.LENGTH_SHORT).show();
    }
};
registerReceiver(br, new IntentFilter("com.exam.SYNC_DONE"));
// unregisterReceiver(br) in onPause - dynamic receivers must be balanced`,
            },
            callout: {
              type: "warning",
              title: "onReceive is on a leash",
              body: "Ten seconds on the main thread, then the system considers your app misbehaving. A receiver that writes a database or hits the network belongs in a service hand-off. The examiner's follow-up - 'what if onReceive is slow?' - expects exactly this answer.",
            },
            examQuestions: [
              {
                q: "What is a broadcast intent? Explain how broadcast receivers are created and registered, with one system event example.",
                marks: 7,
                outline: [
                  "Broadcast: sendBroadcast() delivers to all matching receivers - no reply",
                  "Receiver: extends BroadcastReceiver, overrides onReceive(Context, Intent)",
                  "Static registration: manifest <receiver> + intent-filter",
                  "Dynamic: registerReceiver() in code, unregisterReceiver() to balance",
                  "System events: BOOT_COMPLETED, SMS_RECEIVED, BATTERY_LOW",
                  "onReceive is main-thread and time-limited",
                ],
              },
              {
                q: "Design an app component that shows a toast when a sync finishes, and starts a service after device reboot. Give the code and manifest entries.",
                marks: 14,
                outline: [
                  "Custom action 'com.exam.SYNC_DONE' sent via sendBroadcast with extras",
                  "Receiver class overriding onReceive; read extras; Toast",
                  "Dynamic registration with IntentFilter; unregister in onPause",
                  "Second receiver for BOOT_COMPLETED - manifest-declared",
                  "RECEIVE_BOOT_COMPLETED permission required",
                  "The boot receiver starts the service via startService()",
                  "Caveat: heavy work in onReceive -> service, never inline",
                ],
              },
            ],
          },
          {
            number: "4.2",
            title: "Kinds of broadcasts and registration modes",
            body: [
              "Two axes classify every broadcast. Registration: dynamic receivers live as long as the Context that registered them (register in onResume, unregister in onPause), while manifest-declared receivers survive their app's death - the system starts the app just to deliver. Delivery: a normal broadcast is asynchronous and unordered (receivers run in unspecified order, no one can consume it); an ordered broadcast walks receivers by priority (setPriority, with abortBroadcast() able to stop the chain); sticky broadcasts latch the last message for future registrants - deprecated since API 21.",
              "Worked example: a low-storage warning is normal - every interested app reacts independently. An ordered example: SMS delivery where a high-priority receiver can abort propagation. And a boot receiver must be static - a dynamic one dies with the app before the event it waits for ever fires. Matching the mode to the need is the whole design skill.",
              "The comparison is the exam: 'Differentiate normal and ordered broadcasts' and 'static vs dynamic registration' are two 7-markers from one syllabus line. Tables win these - four rows, one difference per row.",
            ],
            keyTerms: [
              { term: "Ordered broadcast", definition: "Delivered receiver-by-receiver in priority order; abortBroadcast() stops the chain." },
              { term: "Sticky broadcast", definition: "Broadcast whose last instance is retained for future receivers; deprecated." },
              { term: "LocalBroadcastManager", definition: "Support-library helper confining broadcasts to your own process." },
              { term: "setPriority()", definition: "Intent-filter attribute ordering receivers in an ordered broadcast." },
            ],
            bullets: [
              "Dynamic registration: registerReceiver() - lifetime bound to the registering context.",
              "Static registration: manifest <receiver> - the system starts the app to deliver.",
              "Normal broadcast: async, unordered, unstoppable; receivers run independently.",
              "Ordered broadcast: priority chain; a receiver may consume with abortBroadcast().",
              "Sticky broadcasts: last message cached for future receivers - deprecated (API 21).",
              "App-private alternative: LocalBroadcastManager keeps broadcasts inside your process.",
            ],
            diagram: {
              kind: "compare",
              title: "Static vs dynamic registration",
              caption: "Where the receiver lives decides when it can hear anything.",
              left: {
                heading: "Manifest (static)",
                items: [
                  "Survives the app being killed",
                  "System starts the app to deliver (BOOT_COMPLETED)",
                  "Declared with <receiver> + intent-filter",
                  "Always listening - battery/security cost",
                ],
              },
              right: {
                heading: "Code (dynamic)",
                items: [
                  "Lives only while the registering context lives",
                  "registerReceiver/unregisterReceiver pairs",
                  "Precise windows: onResume..onPause",
                  "The right default for UI updates",
                ],
              },
            },
            table: {
              caption: "Broadcast kinds at a glance.",
              headers: ["Kind", "Delivery rule", "Typical use"],
              rows: [
                ["Normal", "Async, unordered, unstoppable", "State-change notices (battery, connectivity)"],
                ["Ordered", "Priority chain; may be aborted", "SMS handling, intercept-then-pass flows"],
                ["Sticky", "Last value cached for later registrants", "Deprecated - avoid (API 21+)"],
                ["Local", "Confined to your app's process", "App-internal events without leak risk"],
              ],
            },
            callout: {
              type: "exam",
              title: "Pair the axes",
              body: "Questions mix the axes deliberately - 'a manifest-declared ordered broadcast'. Answer with both: registration decides the receiver's lifetime; delivery kind decides the order and stoppability. One sentence per axis scores the full comparison.",
            },
            examQuestions: [
              {
                q: "Differentiate normal and ordered broadcasts, and static vs dynamic receiver registration.",
                marks: 7,
                outline: [
                  "Normal: async, unordered, cannot be stopped",
                  "Ordered: priority chain; abortBroadcast() may consume it",
                  "Static (manifest): survives app death; system starts the app to deliver",
                  "Dynamic (code): bound to the registering context; precise listening window",
                  "Boot-style events need static; UI updates suit dynamic",
                ],
              },
              {
                q: "Why are sticky broadcasts deprecated, and what replaces them for app-internal events?",
                marks: 7,
                outline: [
                  "Sticky messages persist state globally - a security and memory smell",
                  "Receivers get stale data with no delivery guarantee",
                  "Replacement: normal broadcast + LocalBroadcastManager inside the app",
                  "Persistent state belongs in storage/prefs, not in the air",
                  "Modern alternative: explicit app-limited events",
                ],
              },
            ],
          },
          {
            number: "4.3",
            title: "Introduction to SQLite database",
            body: [
              "SQLite is the relational engine inside every Android device: serverless (no daemon - the library IS the database), zero-configuration, single-file, and transactional with full ACID semantics. Android ships it as a native library beneath the framework and gives each app a private databases/ directory, so an app's data is isolated by its Linux UID without any extra work. SQL support covers the everyday subset: CREATE TABLE, SELECT with joins, INSERT/UPDATE/DELETE, transactions.",
              "Choose storage by shape. SharedPreferences for key-value flags and settings; internal files for blobs and caches; SQLite for structured, queryable records - students, orders, messages; content providers when other apps must read it (4.6). A marks-list app is the textbook case: rows with columns, sorted queries, updates - that is SQLite's job, and the next section's SQLiteOpenHelper is its official front door.",
              "Short-note territory: 'Why is SQLite suited to mobile?' - embedded, tiny footprint, no setup, ACID transactions, private per app. Pair it with the storage-pyramid diagram and the choice is a 7-marker answered in four lines.",
            ],
            keyTerms: [
              { term: "SQLite", definition: "Embedded, serverless, single-file SQL engine bundled with Android." },
              { term: "ACID", definition: "Atomic, Consistent, Isolated, Durable - the transaction guarantees SQLite gives you." },
              { term: "SharedPreferences", definition: "Key-value XML storage for flags and settings - the lightest rung." },
            ],
            bullets: [
              "SQLite: embedded, serverless, single-file, ACID-transactional RDBMS bundled with Android.",
              "Each app's databases live in its private databases/ folder - isolated by UID.",
              "Everyday SQL subset supported: DDL, SELECT with joins, CRUD, transactions.",
              "Storage ladder: SharedPreferences (flags) -> files (blobs) -> SQLite (records) -> providers (sharing).",
              "Structured, queryable app data is always SQLite's job.",
            ],
            diagram: {
              kind: "pyramid",
              title: "The storage escalation",
              caption: "Start at the top; move down only when the data's shape demands it.",
              tiers: [
                { label: "SharedPreferences", note: "key-value flags and settings" },
                { label: "Internal / external files", note: "raw blobs, caches, documents" },
                { label: "SQLite database", note: "structured, queryable relational records" },
                { label: "Content providers", note: "the same data, shared across apps via URIs" },
              ],
            },
            table: {
              caption: "Choosing storage by data shape.",
              headers: ["Data", "Storage", "Why"],
              rows: [
                ["Login flag, theme choice", "SharedPreferences", "Tiny key-value pairs"],
                ["Downloaded images, logs", "Files (internal/external)", "Raw bytes, no query needed"],
                ["Students, orders, messages", "SQLite", "Columns, queries, transactions"],
                ["Contacts-like shared data", "Content provider", "Cross-app access by URI"],
              ],
            },
            callout: {
              type: "tip",
              title: "Private by default",
              body: "An SQLite file under databases/ is readable only by your app's UID - no permission needed, no exposure. The moment other apps must read it, you move to a content provider; until then, SQLite is the private end of the ladder. Examiners like the sentence 'private by UID, shared by provider'.",
            },
            examQuestions: [
              {
                q: "What is SQLite? Why is it the standard structured store inside Android apps?",
                marks: 7,
                outline: [
                  "Embedded, serverless RDBMS - the library is the database",
                  "Single-file storage inside the app's private databases/ folder",
                  "Zero configuration; standard SQL subset; ACID transactions",
                  "Small footprint fits mobile memory and flash storage",
                  "Privacy by UID - no permission needed to read its own data",
                ],
              },
              {
                q: "Compare SharedPreferences, files, SQLite and content providers as storage options, with one use each.",
                marks: 7,
                outline: [
                  "SharedPreferences: key-value flags (settings, tokens)",
                  "Files: raw blobs - images, caches, JSON dumps",
                  "SQLite: structured, queryable records with transactions",
                  "Content provider: exposes data across apps via content:// URIs",
                  "Escalation rule: move down the ladder only when the shape demands",
                ],
              },
            ],
          },
          {
            number: "4.4",
            title: "SQLiteOpenHelper and creating a database",
            body: [
              "SQLiteOpenHelper is the abstract class that manages an app's database lifecycle. You subclass it, call super(context, DATABASE_NAME, null, DATABASE_VERSION), and override onCreate(SQLiteDatabase db) - executed once, when the file does not yet exist, to run your CREATE TABLE statements - and onUpgrade(db, oldVersion, newVersion) - executed when the version constant grows, to migrate the schema. getWritableDatabase()/getReadableDatabase() then create, open, version-check and cache the handle.",
              "A full helper for a marks table: name 'college.db', version 1; onCreate executes CREATE TABLE students(_id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, roll TEXT UNIQUE, marks INTEGER); onUpgrade drops and recreates (lab-simple) or runs ALTER TABLE (production). The first getWritableDatabase() call does everything: creates the file, runs onCreate, returns the handle. Bump the version to 2 after adding a column, or onUpgrade never fires and the new column crashes every query.",
              "'Write a program to create a database in Android' is the classic 14-mark lab question: the helper class, both overrides, one insert and one query. The marking scheme checks the super() call with version, the execSQL DDL, and the version-bump rule.",
            ],
            keyTerms: [
              { term: "SQLiteOpenHelper", definition: "Abstract helper managing database creation, versioning and cached open handles." },
              { term: "onCreate(SQLiteDatabase)", definition: "First-use callback - run DDL (CREATE TABLE) here." },
              { term: "onUpgrade()", definition: "Version-bump callback - migrate the schema from oldVersion to newVersion." },
              { term: "getWritableDatabase()", definition: "Returns a read-write handle, creating and version-checking the database on the way." },
            ],
            bullets: [
              "Subclass SQLiteOpenHelper; super(context, name, factory, version) pins the file and version.",
              "onCreate(db): runs once on first use - your CREATE TABLE DDL via execSQL().",
              "onUpgrade(db, old, new): runs when DATABASE_VERSION increases - migrate or drop-recreate.",
              "getWritableDatabase() / getReadableDatabase(): create, open and cache the handle.",
              "Version-bump rule: schema changed -> version++ -> onUpgrade, or queries crash.",
            ],
            diagram: {
              kind: "pipeline",
              title: "One helper, four responsibilities",
              caption: "The lifecycle the superclass manages so you never touch raw file paths.",
              stages: [
                { label: "Subclass + super()", note: "name, version fixed in constructor" },
                { label: "First getWritableDatabase()", note: "file missing -> onCreate runs DDL" },
                { label: "Version check", note: "version grew -> onUpgrade migrates" },
                { label: "Handle cached", note: "subsequent calls reuse the open database" },
                { label: "CRUD", note: "insert/query/update/delete on SQLiteDatabase" },
              ],
            },
            codeExample: {
              language: "java",
              caption: "StudentsDBHelper.java - the exam-standard helper",
              code: `public class StudentsDBHelper extends SQLiteOpenHelper {
    static final String DB_NAME = "college.db";
    static final int DB_VERSION = 1;

    public StudentsDBHelper(Context c) {
        super(c, DB_NAME, null, DB_VERSION);
    }

    @Override
    public void onCreate(SQLiteDatabase db) {
        db.execSQL("CREATE TABLE students(" +
            "_id INTEGER PRIMARY KEY AUTOINCREMENT," +
            "name TEXT NOT NULL," +
            "roll TEXT UNIQUE," +
            "marks INTEGER)");
    }

    @Override
    public void onUpgrade(SQLiteDatabase db, int o, int n) {
        db.execSQL("DROP TABLE IF EXISTS students");
        onCreate(db);              // lab-simple migration
    }
}`,
            },
            callout: {
              type: "warning",
              title: "The version-bump crash",
              body: "Add a column to onCreate but leave DB_VERSION at 1 and existing installs never run the new DDL - every query on the new column crashes with 'no such column'. Change schema, change version. The examiner's favourite debugging question comes straight from this bug.",
            },
            examQuestions: [
              {
                q: "Write a program to create a database 'college.db' with a students table in Android. Explain the role of onCreate() and onUpgrade().",
                marks: 14,
                outline: [
                  "Class extends SQLiteOpenHelper; constructor calls super(context, name, null, version)",
                  "onCreate: execSQL with CREATE TABLE (PK, NOT NULL, UNIQUE constraints)",
                  "onUpgrade: version-change hook - drop-recreate or ALTER TABLE",
                  "getWritableDatabase() triggers creation on first use",
                  "Insert via ContentValues; query returns a Cursor",
                  "Version-bump rule: schema change without version++ = 'no such column' crash",
                  "The database file lives in the app's private databases/ folder",
                ],
              },
              {
                q: "Why is SQLiteOpenHelper preferred over opening SQLiteDatabase files manually?",
                marks: 7,
                outline: [
                  "It manages creation, versioning and caching of the handle",
                  "onCreate/onUpgrade give controlled schema lifecycle hooks",
                  "Thread-safe handle reuse - no double-open bugs",
                  "Private-path management without knowing file-system details",
                  "Matches the exam-standard pattern every CRUD method builds on",
                ],
              },
            ],
          },
          {
            number: "4.5",
            title: "Querying a database - inserting, searching, updating and deleting",
            body: [
              "SQLiteDatabase exposes CRUD as methods, not strings. insert(table, nullColumnHack, ContentValues) maps column names to values; query(table, columns, selection, selectionArgs, groupBy, having, orderBy) builds the SELECT and returns a Cursor - a movable row pointer; update(table, values, whereClause, whereArgs) and delete(table, whereClause, whereArgs) return the number of rows affected. rawQuery() takes raw SQL when joins or aggregates outgrow the helper arguments.",
              "The full cycle on students: insert with cv.put(\"name\", \"Asha\") / put(\"marks\", 88); search with db.query(\"students\", null, \"marks > ?\", new String[]{\"80\"}, null, null, \"marks DESC\") then loop while(cursor.moveToNext()) reading getString/getInt by column index; update db.update(\"students\", cv, \"roll = ?\", new String[]{\"20IT123\"}); delete db.delete(\"students\", \"marks < ?\", new String[]{\"40\"}). The '?' placeholders are the injection defence - never concatenate user input into SQL.",
              "The exam wants the method-to-SQL mapping table and the loop shape. The 14-marker is a complete CRUD program; the 7-marker is 'explain Cursor and selectionArgs'. Close the cursor after the loop - 'leaked Cursor' is both a logcat warning and a viva question.",
            ],
            keyTerms: [
              { term: "ContentValues", definition: "Key-value map of column names to values used by insert/update." },
              { term: "Cursor", definition: "Row-pointer over query results; moveToNext() walks it, close() releases it." },
              { term: "Selection args", definition: "The '?' bound values in WHERE clauses - injection-safe parameters." },
              { term: "rawQuery()", definition: "Runs raw SQL when the structured query() arguments cannot express it." },
            ],
            bullets: [
              "insert(table, nullColumnHack, ContentValues) - the INSERT.",
              "query(table, columns, selection, args, ...) -> Cursor - the SELECT.",
              "update(...) / delete(...) return rows affected; rawQuery() for raw SQL joins.",
              "Cursor: moveToNext() loop; getString/getInt by column index or name.",
              "Selection args ('?') bind values - the SQL-injection defence.",
              "close() the cursor and prefer transactions for bulk writes.",
            ],
            diagram: {
              kind: "cycle",
              title: "The CRUD cycle",
              caption: "Write, read, revise, remove - every app's data loop.",
              steps: [
                { label: "Insert", note: "ContentValues -> new row" },
                { label: "Query", note: "selection + args -> Cursor -> moveToNext loop" },
                { label: "Update", note: "values + WHERE -> rows affected" },
                { label: "Delete", note: "WHERE -> rows affected" },
              ],
            },
            table: {
              caption: "Method to SQL, one row each.",
              headers: ["Method", "SQL it builds", "Returns"],
              rows: [
                ["insert(table, null, cv)", "INSERT INTO table (...) VALUES (...)", "Row id (long)"],
                ["query(...)", "SELECT cols FROM table WHERE ... ORDER BY ...", "Cursor"],
                ["update(table, cv, where, args)", "UPDATE table SET ... WHERE ...", "Rows affected (int)"],
                ["delete(table, where, args)", "DELETE FROM table WHERE ...", "Rows affected (int)"],
                ["rawQuery(sql, args)", "Any SQL - joins, aggregates", "Cursor"],
              ],
            },
            callout: {
              type: "warning",
              title: "Leaked cursors and string-built SQL",
              body: "Two marks live here: close() every Cursor after the loop (the logcat warning names the leak), and never build WHERE strings by concatenation - 'roll = ?' with whereArgs binds safely; string concatenation is the injection hole the '?' design exists to close.",
            },
            examQuestions: [
              {
                q: "Write a program demonstrating insert, search, update and delete on a students table using SQLiteDatabase, and explain the role of Cursor and selection arguments.",
                marks: 14,
                outline: [
                  "Helper from 4.4; getWritableDatabase() for writes",
                  "insert: ContentValues put per column; returns the row id",
                  "query with selection 'marks > ?' and args; Cursor moveToNext loop",
                  "Read columns by index (getString/getInt); close the cursor",
                  "update with ContentValues + WHERE; delete with WHERE; rows-affected counts",
                  "rawQuery for joins/aggregates beyond query()'s arguments",
                  "'?' binding prevents SQL injection; concatenation is the vulnerability",
                ],
              },
              {
                q: "Explain the query() method's arguments and the Cursor lifecycle.",
                marks: 7,
                outline: [
                  "table, columns (projection), selection + selectionArgs, groupBy, having, orderBy",
                  "Returns a Cursor positioned before the first row",
                  "moveToNext() advances; getColumnIndex/OrThrow maps names to indices",
                  "getString/getInt read the current row",
                  "close() after the loop - 'leaked Cursor' otherwise",
                ],
              },
            ],
          },
          {
            number: "4.6",
            title: "Content providers - sharing data between applications",
            body: [
              "A content provider is the component that publishes an app's data to others behind a URI: content://authority/path. Clients never touch the provider's class - they call the ContentResolver, which routes by authority to the provider, whose insert/query/update/delete (the same names as SQLiteDatabase) do the work and return a Cursor. Android ships providers for contacts (ContactsContract.Contacts.CONTENT_URI), media (MediaStore), call log and settings; apps define custom ones backed by their own SQLite.",
              "Reading contacts in five lines: query the CONTENT_URI with a projection of _ID and DISPLAY_NAME, walk the Cursor, display. Writing your own: extend ContentProvider, register it in the manifest with an authority and exported flag, build a UriMatcher for the URI forms (table vs row), implement query() by delegating to your SQLiteOpenHelper. Permissions (readPermission/writePermission) gate who may call.",
              "'What is a content provider? Explain content:// URIs' is the 7-marker; the 14-marker designs one with UriMatcher and the resolver flow. The parallel to remember: the resolver is the postman, the provider is the post office, the URI is the address.",
            ],
            keyTerms: [
              { term: "Content URI", definition: "content://authority/path - the public address of a provider's data." },
              { term: "ContentResolver", definition: "The client API that routes calls to the provider owning the URI's authority." },
              { term: "UriMatcher", definition: "Helper matching incoming URIs to code paths (whole table vs single row)." },
              { term: "Authority", definition: "The unique string (usually the package) naming a provider." },
            ],
            bullets: [
              "Content URI: content://authority/path - the address of shared data.",
              "ContentResolver: client-side router that maps authority to provider and calls it.",
              "Provider API mirrors SQLiteDatabase: insert/query/update/delete returning a Cursor.",
              "Built-in providers: ContactsContract, MediaStore, CallLog, Settings.",
              "Custom provider: extend ContentProvider + UriMatcher + manifest authority + permissions.",
              "READ_CONTACTS etc. - the client needs the matching permission for protected providers.",
            ],
            diagram: {
              kind: "flow",
              title: "From client to provider and back",
              caption: "The resolver routes; the provider answers; a Cursor returns.",
              steps: [
                { label: "Client builds URI", note: "content://com.exam.marks/students" },
                { label: "ContentResolver", note: "resolves authority -> provider class" },
                { label: "UriMatcher", note: "provider matches the path form (table vs /id)" },
                { label: "Provider executes", note: "delegates to its SQLite database" },
                { label: "Cursor returned", note: "client iterates like any query result" },
              ],
            },
            table: {
              caption: "Providers Android ships.",
              headers: ["Provider", "URI constant", "Data"],
              rows: [
                ["Contacts", "ContactsContract.Contacts.CONTENT_URI", "People and their details"],
                ["MediaStore", "MediaStore.Images.Media.EXTERNAL_CONTENT_URI", "Images/audio/video on the device"],
                ["CallLog", "CallLog.Calls.CONTENT_URI", "Call history"],
                ["Settings", "Settings.System.CONTENT_URI", "System settings values"],
              ],
            },
            codeExample: {
              language: "java",
              caption: "ReadContacts.java - resolver query on the contacts provider",
              code: `String[] proj = { ContactsContract.Contacts._ID,
                  ContactsContract.Contacts.DISPLAY_NAME };
Cursor c = getContentResolver().query(
    ContactsContract.Contacts.CONTENT_URI, proj, null, null, null);

while (c.moveToNext()) {
    String name = c.getString(1);       // DISPLAY_NAME column
    tv.append(name + "\\n");
}
c.close();                              // same cursor discipline as SQLite`,
            },
            callout: {
              type: "exam",
              title: "Resolver vs provider",
              body: "The classic confusion: the ContentResolver is the client-facing API every app calls; the ContentProvider is the server side one app implements. Both expose insert/query/update/delete - which is why provider answers that mirror the SQLite CRUD table score naturally. Add the URI anatomy (scheme, authority, path) and the answer is complete.",
            },
            examQuestions: [
              {
                q: "What is a content provider? Explain the content:// URI structure and the role of ContentResolver, with one built-in provider example.",
                marks: 7,
                outline: [
                  "Provider: component exposing app data to other apps behind URIs",
                  "URI anatomy: content:// scheme, authority (unique provider name), path (table/row)",
                  "ContentResolver routes by authority - the client never touches the provider class",
                  "The same insert/query/update/delete vocabulary as SQLiteDatabase",
                  "Example: ContactsContract.Contacts.CONTENT_URI read with a Cursor",
                  "Permissions (READ_CONTACTS) gate protected providers",
                ],
              },
              {
                q: "Design a content provider for a marks app: manifest registration, UriMatcher, query() implementation backed by SQLite, and the client-side resolver call.",
                marks: 14,
                outline: [
                  "Extend ContentProvider; declare in the manifest with authority + exported/readPermission",
                  "The SQLiteOpenHelper (4.4) remains the storage engine beneath",
                  "UriMatcher matches content://com.exam.marks/students and /students/#",
                  "query(): match URI, build selection, delegate to db.query, return Cursor",
                  "insert/update/delete mirror the same delegation",
                  "Client: getContentResolver().query(uri, projection, ...) - identical shape",
                  "Permission gates decide which apps may read or write",
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
      title: "Camera, Location-Based Services and App Security",
      summary:
        "Unit V turns the app outward and ships it: camera via intent and API, location providers and listeners, geocoding and proximity alerts, the sandbox-permission-signing security model, developer-side hardening, and the minimum-permission release discipline.",
      chapter: {
        number: "05",
        title: "Camera, Location and the Security Model",
        intro:
          "Unit V covers camera access through intents and the Camera API, location-based services with LocationManager and its providers, geocoding and proximity alerts, the Android security model of sandbox, permissions and signing, developer-side component and data hardening, and the minimum-permission principle.",
        inOneBreath:
          "The camera is one intent away - ACTION_IMAGE_CAPTURE returns a thumbnail in 'data' or a full-size file via EXTRA_OUTPUT - while android.hardware.Camera serves custom preview and shutter logic. LocationManager fixes come from GPS (accurate, hungry), network (fast, coarse) and passive providers; Geocoder trades coordinates and addresses; proximity alerts fence a radius with a PendingIntent broadcast. Security stacks four defences: per-app UID sandbox, manifest permissions enforced with SecurityException, signed APKs, kernel isolation. Ship it with least privilege: exported='false', MODE_PRIVATE, HTTPS, and a two-permission manifest.",
        sections: [
          {
            number: "5.1",
            title: "The camera - capturing pictures",
            body: [
              "Two routes reach the camera. The intent route fires MediaStore.ACTION_IMAGE_CAPTURE with startActivityForResult: the default camera app captures, and onActivityResult receives either a small Bitmap thumbnail under the key 'data' or a full-size image written to the Uri you passed in EXTRA_OUTPUT. The API route drives android.hardware.Camera directly - open(), setPreviewDisplay(SurfaceView), startPreview(), takePicture() - for custom shutter logic. Both need the CAMERA permission and, ideally, a PackageManager.hasSystemFeature(FEATURE_CAMERA) check first.",
              "The exam-standard snippet: build the capture intent, startActivityForResult(i, REQ); in onActivityResult, Bitmap photo = (Bitmap) data.getExtras().get(\"data\"); imageView.setImageBitmap(photo). On the AVD the emulated camera (webcam or scene) stands in for hardware, which is why the Unit II custom-AVD work feeds directly into this section.",
              "'How do you capture a photo in Android? Compare intent and API approaches' - a 7-marker. Full marks: both routes, the EXTRA_OUTPUT distinction (thumbnail vs file), the permission, and the feature check.",
            ],
            keyTerms: [
              { term: "ACTION_IMAGE_CAPTURE", definition: "Standard camera intent - the stock camera app captures and returns the result." },
              { term: "EXTRA_OUTPUT", definition: "Intent extra carrying the Uri where the full-size photo is written." },
              { term: "Camera API", definition: "android.hardware.Camera - direct open/preview/takePicture control." },
              { term: "FEATURE_CAMERA", definition: "PackageManager feature string proving camera hardware exists." },
            ],
            bullets: [
              "Intent route: ACTION_IMAGE_CAPTURE - the stock camera app does the work; result in onActivityResult.",
              "The 'data' extra returns a thumbnail Bitmap; EXTRA_OUTPUT Uri saves the full-size file.",
              "API route: android.hardware.Camera - open, preview on SurfaceView, takePicture for control.",
              "CAMERA permission in the manifest; SecurityException without it.",
              "hasSystemFeature(PackageManager.FEATURE_CAMERA) before assuming hardware exists.",
            ],
            diagram: {
              kind: "flow",
              title: "Capturing a photo via the intent route",
              caption: "Five steps from button to ImageView.",
              steps: [
                { label: "Declare CAMERA permission", note: "manifest <uses-permission>" },
                { label: "Check feature", note: "hasSystemFeature(FEATURE_CAMERA)" },
                { label: "Fire intent", note: "ACTION_IMAGE_CAPTURE + startActivityForResult" },
                { label: "Camera app captures", note: "stock UI, or EXTRA_OUTPUT for full size" },
                { label: "onActivityResult", note: "Bitmap from 'data' -> ImageView" },
              ],
            },
            codeExample: {
              language: "java",
              caption: "SnapActivity.java - the intent-route capture",
              code: `static final int REQ_CAM = 2;

void openCamera(View v) {
    Intent i = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
    if (i.resolveActivity(getPackageManager()) != null) {
        startActivityForResult(i, REQ_CAM);
    }
}

@Override
protected void onActivityResult(int req, int res, Intent data) {
    if (req == REQ_CAM && res == RESULT_OK) {
        Bitmap thumb = (Bitmap) data.getExtras().get("data");
        ((ImageView) findViewById(R.id.ivPic)).setImageBitmap(thumb);
    }
}`,
            },
            callout: {
              type: "tip",
              title: "Thumbnail vs file",
              body: "Without EXTRA_OUTPUT the camera returns a low-resolution thumbnail in the 'data' extra - fine for avatars, useless for documents. Pass a Uri in EXTRA_OUTPUT and the full-resolution photo lands in your file while onActivityResult arrives empty-handed. One line decides which you get; exams ask for exactly this distinction.",
            },
            examQuestions: [
              {
                q: "Explain the two approaches to camera access in Android and when to prefer each.",
                marks: 7,
                outline: [
                  "Intent route: ACTION_IMAGE_CAPTURE + startActivityForResult - simplest, stock UI",
                  "onActivityResult receives the thumbnail ('data') or the EXTRA_OUTPUT file",
                  "API route: android.hardware.Camera open/preview/takePicture - full control",
                  "Prefer the intent for standard snapshots; the API for custom shutter/preview UX",
                  "CAMERA permission + hasSystemFeature check in both",
                ],
              },
              {
                q: "Write a program that captures a photo and displays it in an ImageView, explaining the manifest permission and the onActivityResult contract.",
                marks: 14,
                outline: [
                  "Manifest: <uses-permission android:name='android.permission.CAMERA'/>",
                  "Feature check: hasSystemFeature(FEATURE_CAMERA)",
                  "Intent MediaStore.ACTION_IMAGE_CAPTURE; startActivityForResult with a request code",
                  "EXTRA_OUTPUT Uri saves full size; omitting it returns the thumbnail",
                  "onActivityResult: match req + RESULT_OK before reading 'data'",
                  "Bitmap -> ImageView.setImageBitmap; resolveActivity guards no-camera devices",
                  "AVD: the emulated camera (webcam/scene) substitutes for hardware",
                ],
              },
            ],
          },
          {
            number: "5.2",
            title: "Location-Based Services - LocationManager and providers",
            body: [
              "A location-based service acts on the device's position. Android exposes it through LocationManager, obtained from getSystemService(Context.LOCATION_SERVICE). Providers supply fixes: GPS_PROVIDER (satellites - most accurate, battery-hungry, fails indoors), NETWORK_PROVIDER (cell and Wi-Fi triangulation - fast, coarser, low power) and PASSIVE_PROVIDER (piggybacks on other apps' fixes - free but possibly stale). requestLocationUpdates(provider, minTime, minDistance, listener) delivers onLocationChanged(Location) callbacks carrying latitude, longitude, accuracy and speed.",
              "A locate-me feature: request GPS updates every 30 seconds or 10 metres; in onLocationChanged read loc.getLatitude()/getLongitude() into a TextView; and in onPause call removeUpdates(listener) - the battery-safety pairing examiners look for. Permissions: ACCESS_FINE_LOCATION for GPS, ACCESS_COARSE_LOCATION for network-level fixes.",
              "'Compare location providers' wants source, accuracy, power and indoor behaviour per provider - a four-row table. The lifecycle pairing (request in onResume, remove in onPause) is the mark-winning extra.",
            ],
            keyTerms: [
              { term: "LocationManager", definition: "System service managing providers, update requests and proximity alerts." },
              { term: "LocationListener", definition: "Callback interface; onLocationChanged(Location) receives each fix." },
              { term: "GPS_PROVIDER", definition: "Satellite-based provider - accurate, power-hungry, indoor-blind." },
              { term: "removeUpdates()", definition: "Cancels a listener's updates - the battery-safety half of every request." },
            ],
            bullets: [
              "LocationManager: system service for fixes, providers and proximity alerts.",
              "GPS_PROVIDER: satellites; most accurate; slow lock, high battery, fails indoors.",
              "NETWORK_PROVIDER: cell/Wi-Fi triangulation; fast, coarse, low power.",
              "PASSIVE_PROVIDER: reuses other apps' fixes - zero cost, possibly stale.",
              "requestLocationUpdates(provider, minTime, minDistance, listener) -> onLocationChanged().",
              "Permissions: ACCESS_FINE_LOCATION (GPS), ACCESS_COARSE_LOCATION (network).",
            ],
            diagram: {
              kind: "compare",
              title: "GPS vs Network provider",
              caption: "Same interface, different physics - choose per accuracy and battery budget.",
              left: {
                heading: "GPS_PROVIDER",
                items: [
                  "Satellite trilateration",
                  "Metre-level accuracy",
                  "Slow first fix; heavy battery",
                  "Blind indoors",
                ],
              },
              right: {
                heading: "NETWORK_PROVIDER",
                items: [
                  "Cell towers + Wi-Fi triangulation",
                  "Hundreds of metres accuracy",
                  "Instant fix; light battery",
                  "Works indoors",
                ],
              },
            },
            table: {
              caption: "The three providers, one row each.",
              headers: ["Provider", "Source", "Character"],
              rows: [
                ["GPS_PROVIDER", "Satellites", "Accurate, slow to lock, battery-heavy, indoor-blind"],
                ["NETWORK_PROVIDER", "Cell + Wi-Fi", "Fast, coarse, cheap - the good default indoors"],
                ["PASSIVE_PROVIDER", "Other apps' fixes", "Zero extra cost; may be stale"],
              ],
            },
            callout: {
              type: "warning",
              title: "Updates outlive their screen",
              body: "requestLocationUpdates keeps firing after the user leaves - the classic battery-drain bug and a favourite exam follow-up. Always pair: request in onResume/onStart, removeUpdates in onPause/onStop. On the emulator, feed fake coordinates with the DDMS location controls or the geo fix command.",
            },
            examQuestions: [
              {
                q: "Explain the LocationManager API and compare the GPS, network and passive providers.",
                marks: 7,
                outline: [
                  "getSystemService(LOCATION_SERVICE) returns LocationManager",
                  "GPS_PROVIDER: satellites, metre-level accuracy, battery-heavy, indoor-blind",
                  "NETWORK_PROVIDER: cell/Wi-Fi triangulation, fast and coarse",
                  "PASSIVE_PROVIDER: piggybacks on other apps' fixes - free, stale",
                  "requestLocationUpdates(provider, minTime, minDistance, listener)",
                  "Permissions: ACCESS_FINE_LOCATION / ACCESS_COARSE_LOCATION",
                ],
              },
              {
                q: "Write a program that displays the device's current latitude and longitude, and explain the provider choice and battery lifecycle management.",
                marks: 14,
                outline: [
                  "Manifest permission: ACCESS_FINE_LOCATION",
                  "LocationManager from getSystemService; pick the provider (criteria or explicit)",
                  "LocationListener with onLocationChanged reading getLatitude/getLongitude",
                  "requestLocationUpdates with minTime/minDistance throttling",
                  "Display in a TextView; lastKnownLocation as the instant first value",
                  "removeUpdates in onPause - the battery pairing",
                  "Emulator testing: DDMS location controls / geo fix",
                ],
              },
            ],
          },
          {
            number: "5.3",
            title: "Geocoding, reverse geocoding and proximity alerts",
            body: [
              "Coordinates are for machines; humans want addresses - and vice versa. The Geocoder class does both: getFromLocationName(\"Bhopal\", 5) forward-geocodes a place name into a list of Address objects (latitude/longitude plus locality), and getFromLocation(lat, lng, 5) reverse-geocodes a fix into an address. It needs a backend network service, so results can be empty - always null/size-check.",
              "Proximity alerts complete the LBS toolkit: addProximityAlert(latitude, longitude, radius, expiration, pendingIntent) arms the LocationManager to fire the PendingIntent broadcast when the device enters - or, with the entry/exit flag, leaves - the circle. A campus-reminder app is the textbook case: arm an alert at the exam hall's coordinates, and a broadcast receiver raises the notification when the student walks in.",
              "'Differentiate geocoding and reverse geocoding' is the staple of a 7-marker; 'explain proximity alerts with steps' adds the addProximityAlert argument list and the receiver that catches the fired intent.",
            ],
            keyTerms: [
              { term: "Geocoder", definition: "Class translating between coordinates and addresses via a backend service." },
              { term: "Forward geocoding", definition: "Address text -> coordinates (getFromLocationName)." },
              { term: "Reverse geocoding", definition: "Coordinates -> address (getFromLocation)." },
              { term: "Proximity alert", definition: "LocationManager fence that fires a PendingIntent broadcast on entry/exit." },
            ],
            bullets: [
              "Forward geocoding: address text -> Address list with lat/long.",
              "Reverse geocoding: lat/long -> Address list with locality, thoroughfare.",
              "Geocoder needs a backend network service - always check for empty results.",
              "addProximityAlert(lat, lng, radius, expiration, PendingIntent) fires on entry/exit.",
              "The alert arrives as a broadcast - catch it in a receiver; arm permissions first.",
            ],
            diagram: {
              kind: "pipeline",
              title: "From fix to fenced reminder",
              caption: "The LBS chain from raw coordinates to a fired alert.",
              stages: [
                { label: "Location fix", note: "lat/long from a provider (5.2)" },
                { label: "Reverse geocode", note: "Geocoder.getFromLocation -> Address" },
                { label: "Choose a fence", note: "target coordinates + radius" },
                { label: "Arm the alert", note: "addProximityAlert with a PendingIntent" },
                { label: "Broadcast fires", note: "receiver raises the notification" },
              ],
            },
            codeExample: {
              language: "java",
              caption: "GeoTools.java - reverse geocode and arm a proximity alert",
              code: `Geocoder gc = new Geocoder(this, Locale.getDefault());
List<Address> adds = gc.getFromLocation(23.21, 77.43, 1);
if (adds != null && !adds.isEmpty()) {
    tv.setText(adds.get(0).getLocality());   // e.g. "Bhopal"
}

long expiry = -1;                            // no expiration
Intent i = new Intent("com.exam.NEAR_HALL");
PendingIntent pi = PendingIntent.getBroadcast(this, 0, i, 0);
lm.addProximityAlert(23.2114, 77.4320, 500f, expiry, pi);`,
            },
            callout: {
              type: "tip",
              title: "Geocoder is a service client",
              body: "getFromLocation returns null or an empty list whenever the backend is unreachable - offline devices included. Checking for empty is not defensive dressing; it is the difference between a crash and a graceful 'no address'. The same check earns marks in both the geocoding and proximity-alert answers.",
            },
            examQuestions: [
              {
                q: "Differentiate forward and reverse geocoding and explain the Geocoder API with one example each.",
                marks: 7,
                outline: [
                  "Forward: getFromLocationName('Bhopal', 5) -> Address list with coordinates",
                  "Reverse: getFromLocation(23.21, 77.43, 5) -> Address list with locality",
                  "Both return List<Address>; read getLatitude/getLongitude/getLocality",
                  "Geocoder needs a backend network service - null/empty possible",
                  "Always guard: null check + isEmpty before use",
                ],
              },
              {
                q: "Explain proximity alerts in Android: the addProximityAlert arguments, the receiver that handles the alert, and a use case built on geocoding.",
                marks: 14,
                outline: [
                  "addProximityAlert(lat, lng, radius, expiration, PendingIntent)",
                  "Fires on entry (and exit with the entry/exit flag)",
                  "The alert is a broadcast - PendingIntent.getBroadcast targets a receiver",
                  "The receiver checks Location.KEY_PROXIMITY_ENTERING",
                  "Use case: reverse geocode a landmark, arm a 500 m reminder fence",
                  "Permissions: ACCESS_FINE_LOCATION for the underlying monitoring",
                  "Battery note: alerts are one-shot fencing, lighter than continuous updates",
                ],
              },
            ],
          },
          {
            number: "5.4",
            title: "The Android security model - sandbox, permissions and signing",
            body: [
              "Android's security rests on four stacked defences. The Linux sandbox: every app runs as its own process under a unique Linux UID - it cannot read another app's memory, files or database. The permission system: manifest <uses-permission> declarations gate protected APIs (camera, location, contacts, internet); undeclared calls throw SecurityException. Code signing: every APK is signed at build; the signature is verified at install and at every update. Framework enforcement: system services re-check the caller's UID and permissions on each call.",
              "Trace one failure: an app calls camera.open() without declaring CAMERA - no compile error, but the framework throws SecurityException at the first run. The same app cannot read a rival's SQLite file: different UIDs, different private folders. And an unsigned or re-signed update is refused by Package Manager - signing is the update-integrity guarantee.",
              "'Explain the Android security architecture' is a 14-marker marked on the four layers plus one concrete failure example. Note the era-shift honestly: the install-time, all-or-nothing model remains the syllabus model; Android 6.0 moved dangerous permissions to runtime prompts.",
            ],
            keyTerms: [
              { term: "Sandbox", definition: "Per-app process + UID isolation enforced by the Linux kernel." },
              { term: "Permission group", definition: "NORMAL (auto-granted) vs DANGEROUS (user-visible) classification." },
              { term: "Code signing", definition: "APK signature verified at install and on every update." },
              { term: "SecurityException", definition: "Runtime exception thrown when an undeclared or denied API is called." },
            ],
            bullets: [
              "Sandbox: one Linux process + one UID per app; private storage, no cross-app reads.",
              "Permissions: declared in the manifest; enforced by the framework with SecurityException.",
              "Permission groups: NORMAL (auto-granted, e.g. INTERNET) vs DANGEROUS (camera, location, contacts).",
              "Code signing: APKs signed at build; install and updates verify the signature.",
              "Since Android 6.0, DANGEROUS permissions additionally ask at runtime.",
            ],
            diagram: {
              kind: "layers",
              title: "Four defences, top to bottom",
              caption: "Each layer assumes the one below it holds.",
              layers: [
                { label: "App under its own UID", note: "private process, memory and storage" },
                { label: "Permission gate", note: "manifest declarations checked per API call; SecurityException" },
                { label: "Signature verification", note: "APK signed; install and updates verify it" },
                { label: "Linux kernel isolation", note: "UID-based sandbox, file ownership, process separation" },
              ],
            },
            table: {
              caption: "Permissions this syllabus actually touches.",
              headers: ["Permission", "Protects", "Group"],
              rows: [
                ["INTERNET", "Network sockets", "NORMAL (install-time)"],
                ["CAMERA", "Camera hardware", "DANGEROUS"],
                ["ACCESS_FINE_LOCATION", "GPS fixes", "DANGEROUS"],
                ["READ_CONTACTS", "Contacts provider", "DANGEROUS"],
                ["RECEIVE_BOOT_COMPLETED", "BOOT_COMPLETED delivery", "NORMAL"],
              ],
            },
            callout: {
              type: "warning",
              title: "The silent INTERNET trap",
              body: "INTERNET is NORMAL - granted without a prompt - but it must still be declared. Students lose an hour to network failures that are really a missing <uses-permission>. The rule to recite in exams: every protected API needs its permission line, whatever its group.",
            },
            examQuestions: [
              {
                q: "Explain the Android security architecture: sandbox, permissions, signing and enforcement, with one concrete failure example for each.",
                marks: 14,
                outline: [
                  "Sandbox: per-app Linux UID and process; private files/DB; no cross-app reads",
                  "Permissions: <uses-permission> gates protected APIs",
                  "Enforcement: SecurityException on undeclared calls (camera example)",
                  "Signing: APK verified at install; re-signed updates refused",
                  "Groups: NORMAL auto-granted (INTERNET) vs DANGEROUS user-visible",
                  "Era note: Android 6.0+ asks at runtime for dangerous permissions",
                  "Manifest omissions fail at runtime, not compile time",
                ],
              },
              {
                q: "Why can two Android apps not read each other's databases? What mechanism allows controlled sharing?",
                marks: 7,
                outline: [
                  "Each app has a unique Linux UID and private storage directories",
                  "Kernel file permissions + process isolation enforce the boundary",
                  "No permission grants direct file access to another app's data",
                  "Controlled sharing: content provider with permissions (4.6)",
                  "Or explicit IPC through intents and services",
                ],
              },
            ],
          },
          {
            number: "5.5",
            title: "Securing components and data in your app",
            body: [
              "The platform gives defaults; the developer must not undo them. Components: activities, providers and receivers declared with android:exported='false' stay private to your app unless an intent-filter legitimately publishes them; a custom provider can add readPermission/writePermission so only holders may call it. Data: private-mode storage (MODE_PRIVATE; the world-readable modes are deprecated), SQLite under the app's UID, no secrets in logs. Network: HTTPS with certificate validation left on - disabling it for 'testing' is the classic leak.",
              "Worked example: the marks provider of 4.6 ships with android:readPermission='com.exam.permission.READ_MARKS' and exported='true' only for that permission's holders; a sibling app declares <uses-permission> for it and reads. Meanwhile the app's SharedPreferences use MODE_PRIVATE and its broadcast uses setPackage(getPackageName()) so the SYNC_DONE intent of 4.1 never leaves the process.",
              "The exam question is 'list security best practices for an Android app'. The marking shape is surface-then-mitigation: exported components, world-readable files, plain HTTP, logged secrets - four rows, each with its fix.",
            ],
            keyTerms: [
              { term: "exported", definition: "Manifest flag deciding whether other apps may invoke a component." },
              { term: "readPermission / writePermission", definition: "Provider-level permissions gating reads and writes separately." },
              { term: "MODE_PRIVATE", definition: "File/prefs mode visible only to the owning app's UID." },
              { term: "Certificate validation", definition: "HTTPS's default check that the server's certificate chain is trusted - never disable it." },
            ],
            bullets: [
              "exported='false' by default; publish only what intent-filters legitimately serve.",
              "Custom provider permissions: readPermission/writePermission gate cross-app access.",
              "Storage: MODE_PRIVATE; MODE_WORLD_READABLE/WRITABLE are deprecated holes.",
              "Never log secrets; logcat is readable by the user and other tools.",
              "HTTPS with default certificate validation; never ship a 'trust all' trust manager.",
              "Keep broadcasts app-local with setPackage() or LocalBroadcastManager.",
            ],
            diagram: {
              kind: "fork",
              title: "Where can your app leak?",
              caption: "Four surfaces, four fixes - the best-practice checklist as a decision tree.",
              start: "Auditing your app",
              branches: [
                { label: "Components reachable by others", outcome: "exported='false' or permission-protected filters", good: true },
                { label: "Files others can read", outcome: "MODE_PRIVATE storage; drop world-readable modes", good: true },
                { label: "Traffic in the clear", outcome: "HTTPS + default certificate validation", good: true },
                { label: "Secrets in logs", outcome: "sensitive logging shipped in release - the leak", good: false },
              ],
            },
            codeExample: {
              language: "xml",
              caption: "Hardened manifest and prefs - the two snippets to memorise",
              code: `<!-- provider: public only to permission holders -->
<provider android:name=".MarksProvider"
    android:authorities="com.exam.marks"
    android:exported="true"
    android:readPermission="com.exam.permission.READ_MARKS"/>

<!-- app-private preferences -->
getSharedPreferences("cfg", Context.MODE_PRIVATE)
    .edit().putString("token", t).apply();

<!-- app-local broadcast -->
Intent i = new Intent("com.exam.SYNC_DONE");
i.setPackage(getPackageName());   // never leaves this app
sendBroadcast(i);`,
            },
            callout: {
              type: "exam",
              title: "Surface + fix = full marks",
              body: "Generic answers ('use HTTPS, be careful') score half. Name the surface and its precise fix in one breath: exported components -> exported flag; shared files -> MODE_PRIVATE; plain HTTP -> HTTPS; noisy logs -> stripped release logging. Four paired rows, no essays.",
            },
            examQuestions: [
              {
                q: "List four security best practices for an Android application, naming the surface and the mitigation for each.",
                marks: 7,
                outline: [
                  "Exported components: exported='false' unless a filter serves others",
                  "Shared data: provider read/writePermission; MODE_PRIVATE files",
                  "Network: HTTPS with default certificate validation",
                  "Secrets: never logged; release builds strip sensitive logs",
                  "Broadcasts: setPackage/LocalBroadcastManager keep events app-local",
                ],
              },
              {
                q: "Your marks provider must be readable by a sibling grading app and nobody else. Explain the permission-protected provider design with manifest entries on both sides.",
                marks: 14,
                outline: [
                  "Custom <provider>: authority, exported='true', readPermission='com.exam.permission.READ_MARKS'",
                  "A <permission> element declares the custom permission with protectionLevel",
                  "Sibling app: <uses-permission android:name='com.exam.permission.READ_MARKS'/>",
                  "The resolver call succeeds only for holders; others get SecurityException",
                  "Storage beneath stays private SQLite (4.4)",
                  "Data at rest: MODE_PRIVATE prefs; no secret logging",
                  "Why not exported='false': the sibling needs cross-app access - permission, not isolation",
                ],
              },
            ],
          },
          {
            number: "5.6",
            title: "The minimum-permission principle and the release checklist",
            body: [
              "The minimum-permission principle: request only what the feature list requires, because every extra permission narrows the install base and widens the attack surface. Its companions are feature honesty - declare <uses-feature android:name='android.hardware.camera' android:required='false'/> when the camera is optional so non-camera devices still install - and testing breadth: run the release build on the AVD matrix of Unit II before shipping.",
              "Worked example: the campus-finder app needs ACCESS_FINE_LOCATION and INTERNET - exactly two lines. It does not need READ_CONTACTS 'just in case'; undeclared needs become crash reports, declared-but-unused needs become review complaints. The release checklist then runs: permissions minimised, components audited (5.5), logs stripped, signature applied, two AVDs and one device exercised.",
              "The 7-marker asks the principle with a concrete permission set and the <uses-feature> required='false' trick. Adding the checklist turns the same answer into a 14-marker on shipping a secure app.",
            ],
            keyTerms: [
              { term: "Least privilege", definition: "Request only the permissions the shipped features require." },
              { term: "uses-feature", definition: "Manifest hardware declaration; required='false' keeps optional devices installing." },
              { term: "Attack surface", definition: "The set of components, permissions and data paths an attacker could touch." },
            ],
            bullets: [
              "Request the least set: each permission is install friction and attack surface.",
              "<uses-feature required='false'> keeps optional hardware from blocking installs.",
              "Audit components: exported flags, provider permissions (5.5) before release.",
              "Strip logs and debug flags; sign the release APK.",
              "Exercise the AVD matrix: smallest screen, oldest API, one real device.",
            ],
            diagram: {
              kind: "matrix",
              title: "Permissions: the sweet spot",
              caption: "Fewer requests, smaller surface - the goal sits in one quadrant.",
              axes: { x: "Permissions requested (few -> many)", y: "Attack surface (small -> large)" },
              quadrants: [
                { label: "Minimum-permission sweet spot", note: "exactly the features' needs, nothing else" },
                { label: "Over-permissioned", note: "many requests, large surface - the review reject" },
                { label: "Under-protected", note: "few requests, but data exposed - a security hole" },
                { label: "Unused grants", note: "requests exceed need - friction without benefit" },
              ],
            },
            table: {
              caption: "The release checklist.",
              headers: ["Check", "Why it matters"],
              rows: [
                ["Permissions minimised", "Least privilege - smaller surface, fewer review flags"],
                ["Components audited", "exported flags and provider permissions confirmed (5.5)"],
                ["Logs stripped", "No secrets in readable logcat"],
                ["Release signed", "Update integrity; Package Manager verifies (5.4)"],
                ["AVD matrix exercised", "Smallest screen, oldest API, one real device"],
              ],
            },
            callout: {
              type: "exam",
              title: "Principle + set = the answer",
              body: "'Explain the minimum-permission principle' is half a question until you instantiate it: 'campus finder needs ACCESS_FINE_LOCATION + INTERNET, nothing else, plus uses-feature camera required=false'. The concrete two-permission set and the optional-hardware line are the marks.",
            },
            examQuestions: [
              {
                q: "Explain the minimum-permission principle with a concrete example, including the uses-feature required='false' declaration.",
                marks: 7,
                outline: [
                  "Principle: request only what the feature list requires",
                  "Each extra permission: install friction + attack surface",
                  "Example: campus finder -> ACCESS_FINE_LOCATION + INTERNET only",
                  "Optional camera: uses-feature required='false' so non-camera devices install",
                  "Unused grants draw review complaints and risk",
                ],
              },
              {
                q: "Prepare an Android app for release: list and justify the security and testing checklist, tying each item to the unit it came from.",
                marks: 14,
                outline: [
                  "Permissions minimised - least privilege (5.6)",
                  "Components audited: exported flags, provider permissions (5.5)",
                  "Permission model verified: install-time groups, runtime prompts (5.4)",
                  "Transport: HTTPS, no trust-all managers (5.5)",
                  "Logs stripped; release APK signed (5.4 signing)",
                  "Testing: AVD matrix (Unit II) - smallest screen, oldest API, real device",
                  "Data storage check: private SQLite, no world-readable files (Unit IV)",
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
        { topic: "Activity lifecycle + manifest registration", weight: "≈ 10 - 12 marks", note: "The lifecycle diagram is the subject's most-drawn figure; pair each callback with its work." },
        { topic: "Intents: explicit, implicit, broadcast", weight: "≈ 10 - 12 marks", note: "Differentiation + one snippet of each is the standard marking pair." },
        { topic: "SQLite: helper + CRUD program", weight: "≈ 12 - 14 marks", note: "A complete program (helper, insert, query loop) is a guaranteed lab-style question." },
        { topic: "Android architecture + internals", weight: "≈ 8 - 12 marks", note: "Five-layer diagram with Binder and the UID sandbox named." },
        { topic: "Layouts + density units (px/dp/sp)", weight: "≈ 8 - 10 marks", note: "One XML per layout plus the px = dp x (dpi/160) numerical." },
        { topic: "Content providers + URIs", weight: "≈ 6 - 10 marks", note: "URI anatomy and the resolver flow; a custom provider for 14-markers." },
        { topic: "SDK tools, emulator/AVD", weight: "≈ 6 - 8 marks", note: "Short notes: adb, aapt, dx, DDMS, AVD properties." },
        { topic: "Camera, location, security model", weight: "≈ 8 - 10 marks", note: "Provider comparison table + the four-layer security answer." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Two hours a day, five days a week; keep the weekend for running code on an AVD and attempting one full paper-style set. Type every snippet of this file once - the XML namespace line and the helper-class skeleton must come out of your fingers, not your memory.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - the platform", tasks: ["Mobile generations + the feature vs smartphone table", "OHA members by role; 'why Android' with the fragmentation caveat", "Draw the five-layer stack from memory, twice", "Dalvik vs ART table + the DEX pipeline chain"] },
        { week: "Week 2", focus: "Unit II - the toolchain", tasks: ["Environment setup steps; SDK tools one-line jobs", "Create a custom AVD (density + camera emulation)", "Project anatomy: manifest, res/, R.java", "First app end-to-end on your AVD"] },
        { week: "Week 3", focus: "Unit III part 1 - activities and intents", tasks: ["Explicit vs implicit intents with code", "Lifecycle cycle diagram + callback table", "Two-activity app with startActivityForResult", "Manifest skeleton written by hand"] },
        { week: "Week 4", focus: "Unit III part 2 - UI", tasks: ["Login form XML with weights", "Padding vs margin; the GUI objects XML", "Density numericals - three conversions", "Drawable buckets + the sp/dp rules"] },
        { week: "Week 5", focus: "Unit IV - broadcast + data", tasks: ["Broadcast receiver with a custom action, both registration modes", "SQLiteOpenHelper full program; the version-bump rule", "CRUD methods + Cursor loop; one injection-safe query", "Read contacts via ContentResolver; design one custom provider"] },
        { week: "Week 6", focus: "Unit V + revision", tasks: ["Camera intent program; the EXTRA_OUTPUT distinction", "Location providers table + locate-me program", "Geocoder + proximity alert steps", "Security: the four-layer answer + release checklist; two full papers"] },
      ],
    },
    {
      id: "exam-tips",
      heading: "Exam-hall strategy",
      examTips: [
        "Every Android answer earns its diagram: architecture layers, lifecycle cycle, intent flow, provider flow. Sketch first, prose second.",
        "For lifecycle questions write the callback, then the one line of work that belongs there - onCreate inflates, onResume registers, onPause releases.",
        "Differentiations (explicit vs implicit, Dalvik vs ART, GPS vs network, padding vs margin) want two-column tables, not paragraphs.",
        "For SQLite, a program skeleton (helper + onCreate + insert + Cursor loop) outscores three paragraphs of theory.",
        "Density numerical: write px = dp x (dpi / 160) and the substitution line - the formula is the mark.",
        "Any manifest question is answered in four groups: components, permissions, SDK levels, intent-filters.",
        "'Why Android' = four justified reasons + the fragmentation caveat; the caveat is the differentiator.",
        "Time-box: 7-mark in 10-12 minutes, 14-mark in 20-24 - and never skip the diagram inside a 14-marker.",
      ],
    },
    {
      id: "last-day",
      heading: "Last-day strategy and common slips",
      body: [
        "Tomorrow's paper is built from six figures and five skeletons: the five-layer stack, the lifecycle cycle, the intent flow, the helper + CRUD program and the provider URI flow. Redraw each once from memory tonight, then reread every callout and key-term block - they are the marking vocabulary. Sequence the evening: architecture + lifecycle, intents + manifest, SQLite + provider, layouts + density units, camera/location/security short notes last.",
        "Sleep on two formulas (px = dp x (dpi / 160); rows-affected = the update()/delete() return) and the three paired tables - Dalvik/ART, GPS/network, static/dynamic. Arrive with the XML namespace line written once by hand; the first layout question usually rewards it within the opening minutes.",
      ],
      bullets: [
        "Forgetting the <activity> manifest entry - the class exists but navigation crashes with ActivityNotFoundException.",
        "Writing px for text sizes - sp is the unit that follows the user's font setting.",
        "Heavy work in onReceive() or queries on the UI thread - ANR in both cases.",
        "Leaving a Cursor unclosed after the query loop - 'leaked Cursor' warnings and lock errors.",
        "Confusing padding (inside the view) with margin (between siblings).",
        "Schema changed but DATABASE_VERSION not bumped - 'no such column' on old installs.",
        "Saying Dalvik compiles Java - it executes register-based DEX; ART compiles ahead-of-time.",
        "requestLocationUpdates without the matching removeUpdates() - battery drain; always pair them.",
      ],
    },
  ],
};
