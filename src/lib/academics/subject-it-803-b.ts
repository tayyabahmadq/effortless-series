import type { AcademicSubject } from "./types";

export const it803b: AcademicSubject = {
  id: "it-803-b",
  code: "IT-803(B)",
  title: "Human Computer Interaction",
  semester: "VIII Semester",
  program: "RGPV · Information Technology",
  tagline:
    "Every topic of the syllabus as one connected story: how humans take in and store information, how design teams walk from discovery to interface, how performance models predict the seconds an expert needs, how golden rules and heuristics police the design, and how groupware, reality interfaces and three kinds of testing keep the result honest.",
  description:
    "Five units walk from human input-output channels, memory, reasoning and the devices we touch, through the interaction design process from discovery to stakeholder profiles, the predictive models from the Model Human Processor and the KLM to GOMS, state networks and Fitts' law, the guidelines of Shneiderman, Norman and Nielsen with dialog notations, ending with groupware, mixed and virtual reality, and the validation stack of usability, interface and acceptance testing.",
  accentColor: "#f97316",
  emoji: "HC",
  unitCount: 5,
  totalSections: 34,
  units: [
    {
      number: 1,
      roman: "I",
      title: "HCI Foundations",
      summary:
        "Unit I builds the human side of HCI: the input-output channels and their capacities, the three-stage memory model, reasoning and problem solving, emotion and individual differences, the psychology behind interactive systems, and the hardware of interaction - text entry, pointing and drawing, display devices, virtual reality and 3D interaction, physical controls and sensors, and paper.",
      chapter: {
        number: "01",
        title: "Understanding Humans, Understanding Machines",
        intro:
          "Unit I covers input-output channels, human memory, thinking: reasoning and problem solving, emotion and individual differences, psychology and the design of interactive systems, text entry devices, positioning, pointing and drawing, display devices, devices for virtual reality and 3D interaction, physical controls, sensors and special devices, and paper: printing and scanning.",
        inOneBreath:
          "Humans see, hear and touch through bounded channels; memory holds 7±2 chunks for seconds before rehearsal writes it into long-term store; reasoning runs deductive, inductive or abductive; emotion and individual differences set the design envelope; entry, pointing and display devices are the first design surface, and even paper survives as a medium.",
        sections: [
          {
            number: "1.1",
            title: "Input-output channels",
            body: [
              "Human-computer interaction is a conversation across two very different machines, and its raw material is the set of input-output channels connecting them. On the human side, input channels are the senses - vision, hearing, touch, taste and smell - and output channels are the effectors: fingers, hands, limbs, voice and gaze. Vision dominates: the fovea covers only about 2 degrees of visual angle yet carries most detailed perception, and reading runs at 200-300 words per minute. Hearing spans 20 Hz to 20 kHz, loudness is perceived logarithmically (decibels), and touch distinguishes points roughly 2-3 mm apart at the fingertip.",
              "The computer side presents its own channels - screens, speakers, keyboards, mice - and the designer's job is matching message to channel capacity. Vision carries structure and text; hearing carries alarms and confirmation without demanding eye contact; touch carries confirmation through vibration and force feedback. Because every channel has limits, important information must be redundant across channels: never encode meaning in colour alone, since about 8 per cent of men have red-green colour vision deficiency. A form that relies only on hue silently fails one user in twelve.",
              "These capacities set hard design rules, and examiners test them. Text must respect reading speed - dense screen paragraphs are skipped, so structure and highlights matter. Alarms must use sound plus visual flash, because a silent visual cue is missed whenever the user looks away. The classic exam framing is 'explain the human input-output channels and derive two interface design rules from their limitations' - answer with the fovea, the decibel scale, the colour-deficiency figure and redundancy, and the marks follow.",
            ],
            keyTerms: [
              { term: "Input channel", definition: "A human sense carrying information inward - vision, hearing, touch, taste, smell." },
              { term: "Output channel", definition: "A human effector carrying responses outward - fingers, limbs, voice, gaze." },
              { term: "Fovea", definition: "The ~2° central region of the retina carrying detailed vision; the periphery handles motion and search." },
              { term: "Decibel scale", definition: "Loudness is perceived logarithmically - equal ratios of sound pressure feel like equal steps." },
              { term: "Redundant coding", definition: "Presenting information through more than one channel or attribute so a sensory limit cannot erase the message." },
            ],
            diagram: {
              kind: "compare",
              title: "The human side of the channel",
              caption: "What comes in through the senses and what goes out through the body - each with its design consequence.",
              left: {
                heading: "Input channels (the senses)",
                items: [
                  "Vision - dominant; fovea ~2°; reading 200-300 wpm",
                  "Hearing - 20 Hz to 20 kHz; loudness is logarithmic (dB)",
                  "Touch - two-point discrimination ~2-3 mm at the fingertip",
                  "Smell and taste - background monitoring, rarely interface-grade",
                ],
              },
              right: {
                heading: "Output channels (the effectors)",
                items: [
                  "Fingers - fine motor control: typing, pointing, gestures",
                  "Voice - speech output at roughly 150 wpm",
                  "Gaze - eye pointing; fixations of ~200-300 ms",
                  "Limbs - gross control: reaching, pressing, moving",
                ],
              },
            },
            bullets: [
              "Input channels: vision, hearing, touch, taste, smell; output channels: fingers, limbs, voice, gaze.",
              "Vision dominates: ~2° fovea, 200-300 wpm reading, colour deficiency in ~8% of men.",
              "Hearing: 20 Hz-20 kHz, logarithmic loudness - ideal for alarms heard while looking away.",
              "Touch: ~2-3 mm two-point threshold at the fingertip - vibration confirms actions.",
              "Never encode information in colour alone - pair hue with shape, position or label.",
              "Match message to channel: structure through vision, urgency through sound, confirmation through touch.",
            ],
            table: {
              caption: "Channel - capacity - design implication.",
              headers: ["Channel", "Rough capacity", "Design implication"],
              rows: [
                ["Vision", "fovea ~2°; 200-300 wpm", "scannable text; no colour-only coding"],
                ["Hearing", "20 Hz-20 kHz; dB logarithmic", "alarms: sound + visual flash together"],
                ["Touch", "~2-3 mm two-point threshold", "haptic confirmation on small controls"],
                ["Voice (output)", "~150 wpm", "speech input suits hands-busy contexts"],
              ],
            },
            callout: {
              type: "tip",
              title: "The redundancy rule",
              body: "Whenever a message matters, send it through two channels: a tone plus a flash, a colour plus a label, a vibration plus an icon. The 8 per cent colour-deficiency figure and the 'never colour alone' rule are quotable exam facts - and good engineering.",
            },
            examQuestions: [
              {
                q: "Explain the human input and output channels used in interaction, and derive two interface design rules from their limitations.",
                marks: 7,
                outline: [
                  "Input channels: vision (fovea ~2°, 200-300 wpm), hearing (20 Hz-20 kHz), touch (~2-3 mm threshold)",
                  "Output channels: fingers, limbs, voice (~150 wpm), gaze",
                  "Rule 1: never encode information in colour alone - ~8% of men are red-green colour deficient",
                  "Rule 2: pair sound with visual flash for alarms - vision cannot watch everywhere at once",
                  "Redundant coding across channels protects the message from sensory limits",
                ],
              },
              {
                q: "Describe the structure and capacities of the human visual and auditory channels, and explain with examples how their limitations shape the design of displays and warnings.",
                marks: 14,
                outline: [
                  "Vision: fovea ~2° of visual angle; peripheral vision handles motion and search",
                  "Reading 200-300 wpm and scanning patterns - screens need structure and highlights",
                  "Colour: hue discrimination vs ~8% male red-green deficiency; redundant coding",
                  "Hearing: frequency range 20 Hz-20 kHz; loudness perceived logarithmically (decibels)",
                  "Auditory alarms reach users whose eyes are busy; sound relieves visual overload",
                  "Design rules: contrast and legibility, sound-plus-flash warnings, haptic confirmation",
                  "Worked example: form errors flagged by red text alone fail colour-blind users - add icon and label",
                ],
              },
            ],
          },
          {
            number: "1.2",
            title: "Human memory",
            body: [
              "Memory is the model behind almost every interface decision, and the standard account has three stages: sensory buffer, working memory, long-term memory. The sensory buffer holds raw sights and sounds for under a second (the iconic buffer roughly 0.5 s), from which attention selects a fragment to pass on. Working memory is the desk of the mind: about 7 ± 2 chunks, decaying in 10-30 seconds without rehearsal, and easily corrupted by interruption. Long-term memory is effectively unlimited, written through rehearsal and meaning, organised as a semantic network and retrieved by cues.",
              "The numbers turn into design rules directly. Chunking is the designer's tool: a phone number written 07912 345 678 survives working memory only because grouping turns eleven digits into three chunks; menus and forms should group the same way. Recognition beats recall: menus, icons with labels and sensible defaults let users recognise instead of remember, which is why GUIs displaced command lines for most users. Interruptions destroy working memory - a checkout that empties the cart when a validation error appears is a memory bug, not just a usability bug.",
              "Long-term memory explains learning curves, passwords and vocabulary: consistent interfaces build on what users already know, inconsistent ones force fresh storage. Forgetting has two standard accounts - decay and interference (new memories confusingly similar to old) - and both argue for familiar conventions. The exam framing: 'draw the three-stage memory model with capacities and durations, and state three design implications' - the 7 ± 2 chunk figure, recognition over recall and consistency are the three marks.",
            ],
            keyTerms: [
              { term: "Sensory buffer", definition: "The fraction-of-a-second store holding raw sensory input until attention selects from it." },
              { term: "Working memory", definition: "About 7 ± 2 chunks held for 10-30 seconds; rehearsal sustains it, interruption destroys it." },
              { term: "Chunking", definition: "Grouping information into meaningful units so more of it fits working memory." },
              { term: "Long-term memory", definition: "The effectively unlimited store written through rehearsal and meaning; retrieved by cues." },
              { term: "Interference", definition: "Forgetting caused by new memories confusingly similar to old ones - the case against inconsistent conventions." },
            ],
            diagram: {
              kind: "flow",
              title: "The three-stage memory model",
              caption: "Attention filters the flood; rehearsal and meaning carry chunks into the permanent store.",
              steps: [
                { label: "Sensory buffer", note: "iconic ~0.5 s; attention filters" },
                { label: "Working memory", note: "7±2 chunks; 10-30 s without rehearsal" },
                { label: "Long-term memory", note: "unlimited; needs meaning and cues" },
              ],
            },
            bullets: [
              "Sensory buffer: raw input for under a second; attention selects what survives.",
              "Working memory: 7±2 chunks, seconds of life, destroyed by interruption.",
              "Chunking groups information - 07912 345 678 is three chunks, not eleven digits.",
              "Long-term memory: unlimited, semantic, retrieved by cues; forgetting = decay + interference.",
              "Recognition beats recall: menus, labels and defaults over memorised commands.",
              "Consistency banks on existing long-term memory; inconsistency forces new storage.",
            ],
            table: {
              caption: "The three stores - capacity, duration and design consequence.",
              headers: ["Store", "Capacity", "Duration", "Design consequence"],
              rows: [
                ["Sensory buffer", "raw senses", "~0.5 s", "transitions must last long enough to be seen"],
                ["Working memory", "7±2 chunks", "10-30 s", "group fields; never force mid-task recall"],
                ["Long-term memory", "very large", "years", "consistency and familiar conventions"],
              ],
            },
            callout: {
              type: "exam",
              title: "7±2 is chunks, not items",
              body: "The mark scheme rewards the word 'chunk': working memory holds roughly seven chunks, and chunk size is under the designer's control through grouping, mnemonics and defaults. Saying 'seven items' and stopping loses the application mark; add the phone-number example.",
            },
            examQuestions: [
              {
                q: "Describe the three-stage model of human memory, giving capacity and duration for each store, and state three interface design implications.",
                marks: 7,
                outline: [
                  "Sensory buffer: raw input, ~0.5 s, filtered by attention",
                  "Working memory: 7±2 chunks, 10-30 s decay, rehearsal sustains it",
                  "Long-term memory: unlimited, semantic network, cued retrieval",
                  "Design 1: chunk and group information (phone numbers, menus, forms)",
                  "Design 2: recognition over recall - labels, defaults, visible options",
                  "Design 3: consistency builds on existing long-term memory",
                ],
              },
              {
                q: "Explain working memory and long-term memory in detail. With worked examples, show how chunking, recognition versus recall and interference shape interface design, and relate forgetting to interface conventions.",
                marks: 14,
                outline: [
                  "Working memory as the interface's budget: 7±2 chunks, 10-30 s of life",
                  "Chunking worked example: 07912 345 678 - grouping turns 11 digits into 3 chunks",
                  "Interruption destroys working memory: lost carts, cleared forms, abandoned wizards",
                  "Recognition vs recall: GUI menus vs command lines; icons with labels",
                  "Long-term memory: rehearsal and meaning; episodic, semantic and procedural kinds",
                  "Interference: similar new memories confuse old ones - inconsistent icon meanings",
                  "Forgetting justifies standard conventions: Ctrl+C, red errors, breadcrumb trails",
                ],
              },
            ],
          },
          {
            number: "1.3",
            title: "Thinking: reasoning and problem solving",
            body: [
              "Reasoning is moving from what is known to what follows, and HCI separates three kinds. Deduction derives what must be true from general premises - logically airtight if the premises hold. Induction generalises from instances to a probable rule - the everyday mode by which users learn an interface. Abduction infers the best explanation for an observation - the mode users run when something fails: 'the save failed, so the disk must be full'. Interfaces that show causes instead of raw codes support abduction directly.",
              "Problem solving is the search from an initial state to a goal through a problem space (Newell and Simon): states, operators and constraints. Humans do not search exhaustively; they satisfice with heuristics - means-ends analysis (reduce the biggest difference between current and goal state: 'I need the report printed, the printer is off, so turn it on') and hill climbing (take the step that looks closest). Both fail systematically: functional fixedness - Duncker's candle problem - blocks using an object in an unusual role, and framing changes which solutions people even see.",
              "The design implications are examinable. Present the problem space: wizards, progress indicators and visible options reduce the search users must do. Support means-ends analysis: error messages should name the gap ('file locked by another user') rather than the internal state ('error 0x8007'). And respect satisficing: users stop at the first acceptable option, so put the recommended choice first. The exam framing: 'distinguish deductive, inductive and abductive reasoning with examples, and explain how interfaces support problem solving.'",
            ],
            keyTerms: [
              { term: "Deduction", definition: "Reasoning from general premises to a logically certain conclusion." },
              { term: "Induction", definition: "Generalising from instances to a probable rule - how users learn an interface." },
              { term: "Abduction", definition: "Inferring the best explanation for observed evidence - the everyday mode behind error recovery." },
              { term: "Problem space", definition: "The set of states, operators and constraints between the initial state and the goal." },
              { term: "Means-ends analysis", definition: "The heuristic of reducing the largest difference between the current state and the goal." },
            ],
            diagram: {
              kind: "fork",
              title: "Three kinds of reasoning",
              caption: "The same observation can be concluded three ways - each with a different guarantee.",
              start: "How does the conclusion follow?",
              branches: [
                { label: "Deductive", outcome: "logically certain if the premises are true - all men are mortal...", good: true },
                { label: "Inductive", outcome: "probable generalisation from instances - the sun rose every day so far", good: true },
                { label: "Abductive", outcome: "best explanation of the evidence - the error means the disk is full", good: true },
              ],
            },
            bullets: [
              "Deduction: general to specific, logically valid - the basis of formal dialog analysis.",
              "Induction: specific to general, plausible not certain - how users learn your interface.",
              "Abduction: inference to the best explanation - the everyday mode behind error recovery.",
              "Problem solving = search through a problem space: states, operators, constraints.",
              "Heuristics: means-ends analysis and hill climbing; both mislead near plateaus.",
              "Users satisfice (Simon) - they stop at the first acceptable option, not the best.",
            ],
            table: {
              caption: "Reasoning type - direction - guarantee - interface support.",
              headers: ["Type", "Direction", "Guarantee", "Interface support"],
              rows: [
                ["Deductive", "general -> specific", "certain if premises true", "visible rules; consistent dialog logic"],
                ["Inductive", "specific -> general", "probable", "predictable patterns; feedback that teaches"],
                ["Abductive", "evidence -> cause", "best explanation", "error messages that name causes"],
              ],
            },
            callout: {
              type: "tip",
              title: "Errors are abductions",
              body: "When a dialog fails, users run abduction on whatever evidence the screen offers. Show the cause ('the file is locked by Asha') and the correct explanation is cheap; show a raw code (0x80070020) and the user's best explanation will be wrong.",
            },
            examQuestions: [
              {
                q: "Distinguish deductive, inductive and abductive reasoning with one example of each, and explain which kind supports error recovery.",
                marks: 7,
                outline: [
                  "Deduction: general premises to a certain conclusion",
                  "Induction: instances to a probable rule",
                  "Abduction: observation to the best explanation",
                  "Error recovery is abduction: users infer causes from displayed evidence",
                  "Design support: messages that state causes, not raw codes",
                ],
              },
              {
                q: "Explain the problem-space account of problem solving. Describe means-ends analysis and hill climbing with examples, and derive three interface design rules from the way users actually solve problems.",
                marks: 14,
                outline: [
                  "Problem space: initial state, operators, constraints, goal test",
                  "Search is heuristic, not exhaustive; satisficing stops at acceptable solutions",
                  "Means-ends analysis: reduce the largest difference - the printer-off example",
                  "Hill climbing: take the locally best step; fails on plateaus and detours",
                  "Functional fixedness: familiar roles block unusual uses (Duncker's candle)",
                  "Framing changes which solutions users see",
                  "Rules: show the problem space (wizards, progress), name the gap in errors, put the recommended option first",
                ],
              },
            ],
          },
          {
            number: "1.4",
            title: "Emotion, individual differences and the psychology of design",
            body: [
              "Emotion is not decoration; it changes cognition. Arousal and performance follow an inverted U (the Yerkes-Dodson curve): moderate arousal sharpens attention, while panic and boredom both degrade it. Positive affect widens thinking and aids creative problem solving; frustration from unreliable, slow or condescending interfaces narrows it into error-chasing. Aesthetics matter measurably - users rate attractive interfaces as easier to use (Kurosu and Kashimura's 'beautiful is usable' effect) - but the effect sets expectations; it does not replace measured task performance.",
              "Individual differences form the second envelope: physical (age, strength, handedness, motor impairment - roughly 10-15 per cent of users live with a disability), perceptual (colour vision, acuity), cognitive (spatial ability, working-memory span) and experience (novice to expert). Two design responses follow: design for the middle while providing adjustability - font scaling, keyboard alternatives, left-handed layouts - and treat accessibility as a requirement, not a retrofit: keyboard navigation, screen-reader semantics, contrast ratios.",
              "The psychology of interactive systems rests on Norman's triangle: the designer's model (the intent), the user's mental model (the belief built from the interface) and the system image (what actually shows on screen). Only the system image speaks to the user, so a correct mental model is earned through consistent, visible behaviour; where image and intent diverge, users build error models and act on them. The exam framing: 'explain the role of emotion and individual differences in design, and describe the designer-user-system image triangle.'",
            ],
            keyTerms: [
              { term: "Yerkes-Dodson curve", definition: "The inverted-U relation between arousal and performance - panic and boredom both cost accuracy." },
              { term: "'Beautiful is usable' effect", definition: "Attractive interfaces are rated easier to use (Kurosu and Kashimura) - an expectation effect, not proof." },
              { term: "Accessibility", definition: "Design so users with disabilities can operate the system - keyboard paths, screen-reader semantics, contrast." },
              { term: "Mental model", definition: "The user's belief about how the system works, built from the interface's visible behaviour." },
              { term: "System image", definition: "Everything the user actually sees and hears - the only channel through which intent reaches the user." },
            ],
            diagram: {
              kind: "matrix",
              title: "Arousal and valence together",
              caption: "Performance lives in the calm-positive quadrant; both axes are design-controlled.",
              axes: { x: "Valence (negative -> positive)", y: "Arousal (low -> high)" },
              quadrants: [
                { label: "Anxious - high arousal, negative", note: "panic narrows attention; errors multiply" },
                { label: "Excited - high arousal, positive", note: "fast but jumpy; good for short bursts" },
                { label: "Bored - low arousal, negative", note: "attention drifts; vigilance fails" },
                { label: "Calm-positive - the working zone", note: "steady attention; the design target" },
              ],
            },
            bullets: [
              "Arousal-performance is an inverted U: panic and boredom both cost accuracy.",
              "Positive affect widens problem solving; frustration narrows it into error-chasing.",
              "Attractive interfaces are rated easier (Kurosu and Kashimura) - expectation, not evidence.",
              "Differences: physical, perceptual, cognitive, experience - design for the middle, allow adjustment.",
              "Accessibility: keyboard paths, screen-reader semantics, contrast ratios - a requirement.",
              "Norman's triangle: only the system image reaches the user; consistency earns the right mental model.",
            ],
            table: {
              caption: "Difference - design response.",
              headers: ["Difference", "Example", "Design response"],
              rows: [
                ["Colour vision", "~8% of men red-green deficient", "never colour alone; add icon + label"],
                ["Motor impairment", "tremor, one-handed use", "large targets, keyboard paths, no hover-only actions"],
                ["Age / vision", "reduced acuity, slower scanning", "font scaling, high contrast"],
                ["Experience", "novice vs expert", "visible defaults plus shortcuts for experts"],
              ],
            },
            callout: {
              type: "warning",
              title: "Preference is not performance",
              body: "In an evaluation write-up, separate what users say they like (preference, biased by beauty) from what they can do (performance, measured in tasks). The 'beautiful is usable' effect inflates satisfaction scores; completion rates and error counts stay honest.",
            },
            examQuestions: [
              {
                q: "How do emotion and individual differences influence the design of interactive systems? Give two concrete design rules that follow.",
                marks: 7,
                outline: [
                  "Inverted-U arousal: panic and boredom both degrade performance",
                  "Aesthetics bias usability ratings ('beautiful is usable')",
                  "Differences: physical, perceptual, cognitive, experience",
                  "Rule 1: design for the middle with adjustability (fonts, keyboard paths)",
                  "Rule 2: accessibility as a requirement - contrast, screen-reader semantics",
                ],
              },
              {
                q: "Describe Norman's designer-user-system image triangle and explain how mental models are formed. Discuss emotion (arousal, affect) and individual differences as design constraints, with examples for each.",
                marks: 14,
                outline: [
                  "Triangle: designer's model, user's mental model, system image",
                  "Only the system image communicates - consistency makes mental models match intent",
                  "Mental models are built from visible behaviour, not from manuals",
                  "Arousal: inverted U; anxiety from fear of damage blocks exploration",
                  "Positive affect aids creativity; frustration narrows attention",
                  "Individual differences: colour vision, motor control, spatial ability, expertise",
                  "Examples: font scaling, keyboard alternatives, large targets, layered interfaces",
                ],
              },
            ],
          },
          {
            number: "1.5",
            title: "Text entry devices",
            body: [
              "The QWERTY keyboard is the default text entry device: around 105 keys, two-hand touch typing at 40-60 words per minute for skilled users, with modifier layers multiplying its reach. Its layout is a historical artefact of mechanical typewriters, but muscle memory keeps it dominant. Variants push ergonomics: split and angled keyboards, Dvorak's frequency-matched layout, dedicated function keys, and chord keyboards where combinations of five keys cover a full alphabet for one-handed use.",
              "Small and mobile contexts changed the trade-offs. The 12-key telephone pad forced multi-tap - about 2.1 presses per letter - and predictive T9 cut that to roughly one press plus dictionary disambiguation: multi-tap enters SMS text at about 7 wpm, T9 at about 10. On-screen keyboards reach 25-30 wpm, handwriting recognition 10-15, and speech input nominally 150 wpm but pays for it in correction cost and social exposure. Numeric keypads remain fastest for pure digits.",
              "Choosing an entry device means matching speed, error rate and context: moving vehicles, gloved hands, noisy rooms and accessibility needs all reorder the ranking. Error correction is part of the speed - a device whose errors are cheap to fix beats one whose raw rate is higher. The exam framing: 'compare text entry devices with typical speeds and state the criteria for choosing among them' - quote the wpm figures and the correction-cost argument.",
            ],
            keyTerms: [
              { term: "QWERTY", definition: "The standard physical keyboard layout; 40-60 wpm skilled two-handed typing." },
              { term: "Chord keyboard", definition: "Five keys whose combinations cover the alphabet - one-handed, compact, needs learning." },
              { term: "Multi-tap", definition: "Repeated key presses to cycle a 12-key pad through its letters; ~2.1 presses per letter." },
              { term: "T9 predictive text", definition: "One press per letter plus dictionary disambiguation; ~10 wpm on phone pads." },
              { term: "Handwriting recognition", definition: "Stylus or finger input interpreted as text; natural but slow (~10-15 wpm)." },
            ],
            diagram: {
              kind: "compare",
              title: "The keyboard and its challengers",
              caption: "Speed, error cost and context - not raw wpm - decide the winner.",
              left: {
                heading: "The physical keyboard",
                items: [
                  "40-60 wpm touch typing; muscle memory",
                  "Modifier layers: shift, ctrl, alt multiply the key set",
                  "Best for long text at a desk",
                  "Blind operable - no look-down needed",
                ],
              },
              right: {
                heading: "The alternatives",
                items: [
                  "12-key multi-tap ~7 wpm; T9 ~10 wpm - pockets",
                  "Touchscreen keyboard ~25-30 wpm - no tactile feedback",
                  "Handwriting / stylus ~10-15 wpm - natural but slow",
                  "Speech ~150 wpm - fast, but noisy rooms and correction cost",
                ],
              },
            },
            bullets: [
              "QWERTY: 40-60 wpm skilled; layout is history, muscle memory keeps it.",
              "Chord keyboards: five keys, combinations cover the alphabet - one-handed use.",
              "Multi-tap needs ~2.1 presses per letter; T9 cuts it to ~1 press plus dictionary.",
              "Typical rates: touchscreen 25-30 wpm, handwriting 10-15, speech 150 nominal.",
              "Numeric keypads beat everything for pure digit entry.",
              "Count correction cost, not raw speed - a fast device with costly errors loses.",
            ],
            table: {
              caption: "Entry device - typical rate - best context.",
              headers: ["Device", "Typical rate", "Best context"],
              rows: [
                ["Physical QWERTY", "40-60 wpm", "desk, long text"],
                ["Touchscreen keyboard", "25-30 wpm", "mobile, short text"],
                ["12-key + T9", "~10 wpm", "one-handed pocket use"],
                ["Handwriting / stylus", "10-15 wpm", "signatures, forms, tablets"],
                ["Speech", "~150 wpm nominal", "hands-busy, private, quiet rooms"],
              ],
            },
            callout: {
              type: "tip",
              title: "Speech's hidden bill",
              body: "150 wpm of speech input sounds unbeatable until recognition errors arrive in a noisy room: each correction costs a glance, a tap and a re-listen. Rate entry devices by corrected words per minute and by social context - dictation in an open office fails socially before it fails technically.",
            },
            examQuestions: [
              {
                q: "Compare four text entry devices with their typical entry rates and the contexts in which each is preferred.",
                marks: 7,
                outline: [
                  "QWERTY: 40-60 wpm, desk, two-handed",
                  "Touchscreen keyboard: 25-30 wpm, mobile, no tactile feedback",
                  "Multi-tap / T9 on 12 keys: 7-10 wpm, one-handed pocket use",
                  "Speech: ~150 wpm nominal, but correction and social cost",
                  "Selection criterion: corrected speed plus context, not raw rate",
                ],
              },
              {
                q: "Explain the design of text entry devices from the physical keyboard to predictive and speech input. Discuss chord keyboards, multi-tap versus T9 with a worked example, and derive criteria for selecting an entry device for a given application.",
                marks: 14,
                outline: [
                  "QWERTY mechanics and modifier layers; ergonomic variants (split, Dvorak)",
                  "Chord keyboards: combinations of few keys, one-handed, learning cost",
                  "Multi-tap: ~2.1 presses per letter; worked example spelling a word with press counts",
                  "T9: one press plus dictionary disambiguation; ~10 wpm vs multi-tap ~7 wpm",
                  "Handwriting recognition: natural and personal, slow, needs adaptation",
                  "Speech: fast nominal rate, noisy-room and correction penalties",
                  "Selection criteria: corrected wpm, error recovery, environment, accessibility",
                ],
              },
            ],
          },
          {
            number: "1.6",
            title: "Positioning, pointing and drawing",
            body: [
              "Pointing devices translate hand movement into cursor movement, and the mapping matters. The mouse is indirect and relative - the hand moves on a pad, the cursor follows scaled by the control-display gain. The trackball is a mouse upside down, good for cramped panels; the joystick gives absolute or isometric control; the touchpad trades speed for stillness; the touchscreen is direct - the finger is the cursor, fast at selection, clumsy at fine targeting because it occludes; the graphics tablet and stylus add pressure and tilt for drawing.",
              "All pointing obeys Fitts's law: movement time grows with distance and shrinks with target size, MT = a + b·log2(2D/W). The design consequence is geometric: put frequent targets close and make them large - and screen edges are the best targets on the display, because the edge clips the pointer and gives an effectively infinite target width. This is why a menu bar pinned to the screen top beats a floating palette. Fitts's law returns formally in Unit III; here it drives placement decisions.",
              "Drawing needs what pointing devices cannot serve: pressure-sensitive tablets capture stroke force, tilt and angle for natural ink, and direct ink on a tablet beats translating mouse drags. Selection itself is a micro-cycle - locate, move, home in, click - and feedback (highlighting on hover) closes it. The exam framing: 'compare pointing devices using direct versus indirect mapping and state the Fitts's law design consequences for target placement.'",
            ],
            keyTerms: [
              { term: "Direct vs indirect pointing", definition: "Direct: the finger or stylus is the cursor (touchscreen, tablet). Indirect: the hand moves, the cursor follows (mouse, trackball)." },
              { term: "Control-display gain", definition: "The scale factor mapping hand movement to cursor movement on indirect devices." },
              { term: "Graphics tablet", definition: "Absolute-position stylus input with pressure and tilt - the drawing device." },
              { term: "Pressure sensitivity", definition: "Stroke force captured by tablets to modulate ink width and opacity." },
              { term: "Fitts preview", definition: "Pointing time rises with distance and falls with target width - the geometry of target placement." },
            ],
            diagram: {
              kind: "cycle",
              title: "The pointing micro-cycle",
              caption: "Locate, move, home in, select - feedback restarts the loop for the next target.",
              steps: [
                { label: "Locate target", note: "peripheral vision + display search" },
                { label: "Ballistic move", note: "fast, coarse cursor travel" },
                { label: "Homing in", note: "slow fine adjustment onto the target" },
                { label: "Select + feedback", note: "click; hover highlight confirms" },
              ],
            },
            bullets: [
              "Mouse: indirect, relative, gain-scaled - the desktop default.",
              "Trackball for cramped panels; joystick for absolute or isometric control.",
              "Touchscreen: direct pointing - fast selection, poor fine targeting (finger occludes).",
              "Tablet + stylus: pressure and tilt for drawing; direct ink beats mouse drags.",
              "Fitts preview: MT = a + b·log2(2D/W) - close and large wins.",
              "Screen edges are effectively infinite targets - pin frequent controls to edges.",
            ],
            table: {
              caption: "Pointing device - mapping - strength - weakness.",
              headers: ["Device", "Mapping", "Strength", "Weakness"],
              rows: [
                ["Mouse", "indirect, relative", "fast, precise, cheap", "needs desk space; gain tuning"],
                ["Trackball", "indirect, absolute", "no surface movement needed", "slower fine work"],
                ["Touchscreen", "direct", "intuitive selection", "finger occludes; no hover"],
                ["Touchpad", "indirect, relative", "integrated, hands stay still", "small surface, slow"],
                ["Tablet + stylus", "direct, absolute", "precision plus pressure", "slower than mouse for pointing"],
              ],
            },
            callout: {
              type: "exam",
              title: "Edge targets are free speed",
              body: "A menu bar glued to the screen edge has target width approaching infinity, so Fitts's law makes it the fastest target on the display. Quoting 'infinite target width at screen edges' in a pointing-devices answer is an easy application mark.",
            },
            examQuestions: [
              {
                q: "Compare mouse, touchscreen, trackball and graphics tablet as pointing devices, distinguishing direct from indirect mapping.",
                marks: 7,
                outline: [
                  "Direct: finger or stylus is the cursor (touchscreen, tablet)",
                  "Indirect: hand moves, cursor follows scaled (mouse, trackball)",
                  "Touchscreen: intuitive, but occlusion and no hover",
                  "Tablet: absolute position, pressure and tilt for drawing",
                  "Gain and relative/absolute positioning separate mouse from trackball",
                ],
              },
              {
                q: "Explain positioning and pointing devices in detail. State Fitts's law and derive target-placement rules from it; discuss drawing devices and the selection micro-cycle.",
                marks: 14,
                outline: [
                  "Device families: mouse, trackball, joystick, touchpad, touchscreen, tablet",
                  "Direct vs indirect mapping; control-display gain",
                  "Fitts's law MT = a + b·log2(2D/W): distance up, width down slows pointing",
                  "Rule 1: frequent targets close and large",
                  "Rule 2: screen edges give infinite target width - pin menus",
                  "Drawing: pressure, tilt, ink models; direct ink on tablets",
                  "Selection micro-cycle: locate, ballistic move, home in, click + feedback",
                ],
              },
            ],
          },
          {
            number: "1.7",
            title: "Display devices, VR and 3D interaction, physical controls and paper",
            body: [
              "Displays are the computer's principal output channel. Bitmap screens - CRT historically, LCD/TFT now - present a matrix of pixels whose resolution, refresh rate and colour depth bound everything shown; touchscreens fold input into the same glass; e-ink trades refresh for readability in sunlight; projection scales to rooms. The design-relevant numbers: resolution sets text legibility, refresh (60 Hz and up) sets animation smoothness, and colour depth sets how safely colour can carry meaning.",
              "Virtual reality replaces the world: head-mounted displays give stereoscopic depth with 60-100 degree fields of view, CAVEs surround the user with projected walls, boom-mounted displays trade immersion for comfort. Input goes 3D: six-degree-of-freedom trackers, data gloves and wands. The governing rule is latency - motion-to-photon delay beyond roughly 20 ms breaks the illusion and induces cybersickness ('latency kills presence'). Navigating true 3D is cognitively hard, so VR interfaces borrow 2D structures wherever possible.",
              "Physical controls and sensors serve the hands and the environment: knobs, dials and sliders give tactile, glance-free adjustment; dedicated keys serve repetitive expert actions; special devices include eye-gaze systems for users who cannot move their limbs and environmental sensors feeding ambient displays. Paper persists: laser printing at 600+ dpi, scanning with OCR converting paper back to text, and paper's unmatched properties - readable at any angle, cheap to annotate, portable, permanent - explain why screens have complemented rather than replaced it.",
              "The exam framing is a list question with depth: 'describe display devices, devices for virtual reality and 3D interaction, physical controls, sensors and special devices, and paper'. Answer in that syllabus order, attach one number to each item (dpi, field of view, latency threshold, print resolution) and close with paper's persistence - the structure itself is half the marks.",
            ],
            keyTerms: [
              { term: "Bitmap display", definition: "A screen as a matrix of pixels; resolution, refresh and colour depth bound what can be shown." },
              { term: "Head-mounted display (HMD)", definition: "Stereoscopic display worn on the head; 60-100° field of view; the core VR output device." },
              { term: "6-DOF tracking", definition: "Tracking position and orientation in three axes each - the input backbone of 3D interaction." },
              { term: "Cybersickness", definition: "Nausea and disorientation caused by display latency mismatching vestibular expectation." },
              { term: "OCR", definition: "Optical character recognition - software that converts scanned paper images back into editable text." },
            ],
            diagram: {
              kind: "layers",
              title: "The output and special-device stack",
              caption: "From the pixel grid on the desk to the paper on the table - each layer with its key number.",
              layers: [
                { label: "Display surface", note: "bitmap LCD / e-ink; resolution, 60 Hz refresh, colour depth" },
                { label: "3D and VR output", note: "HMD, CAVE, boom; stereoscopy, 60-100° field of view" },
                { label: "3D input and tracking", note: "wands, data gloves, 6-DOF trackers; latency < ~20 ms" },
                { label: "Physical controls and sensors", note: "knobs, dials, sliders, eye-gaze; tactile and glance-free" },
                { label: "Paper", note: "print at 600+ dpi; scan + OCR; readable, annotatable, permanent" },
              ],
            },
            bullets: [
              "Bitmap displays: resolution bounds legibility; refresh bounds animation smoothness.",
              "HMDs: stereoscopic, 60-100° field of view; CAVEs surround; booms trade immersion for comfort.",
              "VR input: 6-DOF trackers and gloves; motion-to-photon latency must stay ~20 ms.",
              "Physical controls: knobs and sliders give tactile, glance-free adjustment.",
              "Special devices: eye-gaze input for users with severe motor impairment.",
              "Paper survives: 600+ dpi printing, scan + OCR, annotation and permanence.",
            ],
            table: {
              caption: "Medium - key number - typical use.",
              headers: ["Medium", "Key number", "Typical use"],
              rows: [
                ["LCD / e-ink display", "60 Hz refresh; resolution in dpi", "desktop and mobile screens"],
                ["HMD / CAVE", "60-100° FOV; < ~20 ms latency", "VR training, design review"],
                ["Physical controls", "tactile detents per notch", "cockpits, mixers, kiosks"],
                ["Paper (print / scan)", "600+ dpi print; OCR accuracy", "contracts, forms, archiving"],
              ],
            },
            callout: {
              type: "tip",
              title: "Latency kills presence",
              body: "The phrase is Raskin's and the number is the standard exam answer for 'why do VR interfaces feel broken?': if what the user sees lags the head by more than roughly 20 ms, the vestibular system notices and cybersickness follows.",
            },
            examQuestions: [
              {
                q: "Describe devices for virtual reality and 3D interaction, and explain the role of latency in VR system design.",
                marks: 7,
                outline: [
                  "Output: HMD (stereoscopic, 60-100° FOV), CAVE, boom display",
                  "Input: 6-DOF trackers, data gloves, wands",
                  "Latency: motion-to-photon must stay around 20 ms",
                  "Beyond ~20 ms: breaks presence and causes cybersickness",
                  "3D navigation is hard - borrow 2D structures where possible",
                ],
              },
              {
                q: "Explain display devices, devices for virtual reality and 3D interaction, physical controls, sensors and special devices, and paper (printing and scanning) as interaction media. Give one key parameter and one application for each.",
                marks: 14,
                outline: [
                  "Bitmap displays: resolution, refresh, colour depth - legibility and animation",
                  "Touchscreens and e-ink as display variants with different trade-offs",
                  "VR output: HMD, CAVE, boom with stereoscopy and field of view",
                  "VR / 3D input: trackers and gloves; ~20 ms latency limit and cybersickness",
                  "Physical controls: knobs, dials, sliders - tactile, glance-free adjustment",
                  "Special devices: eye-gaze input, environmental sensors",
                  "Paper: 600+ dpi printing, scanning + OCR, annotation and permanence",
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
      title: "Designing Interaction",
      summary:
        "Unit II walks the interaction design process end to end: the lifecycle models that organise it, the discovery phase that frames stakeholders and usability goals, collection through observation and elicitation, interpretation into task analyses, storyboards and use cases, and the stakeholder profiles and project management document that freeze discovery into a plan.",
      chapter: {
        number: "02",
        title: "From Discovery to Design",
        intro:
          "Unit II covers the overview of interaction design models, the discovery framework, collection by observation and elicitation, interpretation by task analysis, storyboarding and use cases, primary stakeholder profiles and the project management document.",
        inOneBreath:
          "Interaction design iterates discovery -> design -> prototype -> evaluate; discovery fixes stakeholders and measurable usability goals; collection observes what people do and elicits what they say; interpretation turns data into HTA task models; storyboards and use cases freeze scenarios; stakeholder profiles and the project management document close discovery.",
        sections: [
          {
            number: "2.1",
            title: "Overview of interaction design models",
            body: [
              "Interaction design is designing interactive products to support people's activities, and every process model answers the same question in a different order: what happens between first contact with users and a shipped interface? The waterfall runs requirements -> design -> implementation -> evaluation once, in sequence - cheap to manage, brutal when evaluation arrives last. The spiral model wraps risk-driven iteration around that sequence: prototype, evaluate the risk, decide, repeat. Rapid application development shortens the loop with throwaway prototypes built in days.",
              "The star lifecycle (Hix and Hartson) is the syllabus's favourite because it removes the order entirely: discovery, design specification, conceptual design, physical design, prototyping and implementation are satellites, and evaluation sits at the hub - every activity can be followed by evaluation, and every evaluation can send work back to any activity. Iteration is the engine in all modern models: paper prototypes catch conceptual errors for the cost of a meeting; working code catches them for the cost of a sprint.",
              "Conceptual design (what the product does - the concepts, metaphors and task support users hold in mind) precedes physical design (how it appears - widgets, layout, dialog flows); confusing the two is the classic early-design failure, locking screen details before the concepts stabilise. The exam framing: 'compare waterfall, spiral, RAD and the star lifecycle and explain why evaluation is central' - draw the star with evaluation at the hub and half the marks are already earned.",
            ],
            keyTerms: [
              { term: "Waterfall model", definition: "A strict one-pass sequence - requirements, design, implementation, evaluation - with no built-in iteration." },
              { term: "Spiral model", definition: "Risk-driven cycles of prototyping and evaluation, each loop narrowing uncertainty." },
              { term: "Star lifecycle", definition: "Hix and Hartson's model: activities as satellites around evaluation at the hub, no fixed order." },
              { term: "Conceptual design", definition: "Deciding what the product does - concepts, metaphors, task support - before any screen exists." },
              { term: "Physical design", definition: "Deciding how the product appears - widgets, layout, dialog flow, interaction detail." },
            ],
            diagram: {
              kind: "flow",
              title: "The interaction design loop",
              caption: "Discovery feeds design; prototyping feeds evaluation; evaluation feeds everything.",
              steps: [
                { label: "Discovery", note: "users, tasks, constraints" },
                { label: "Conceptual design", note: "what it does - concepts, metaphors" },
                { label: "Physical design", note: "how it appears - widgets, dialog flow" },
                { label: "Prototype", note: "paper first, then interactive" },
                { label: "Evaluate", note: "any activity, any time - send work back" },
              ],
            },
            bullets: [
              "Waterfall: one pass, evaluation last - brittle when reality disagrees.",
              "Spiral: risk-driven iteration - prototype, evaluate, decide, repeat.",
              "RAD: short loops and throwaway prototypes for fast feedback.",
              "Star lifecycle: no fixed order; evaluation is the hub every activity revisits.",
              "Conceptual design (what) precedes physical design (how) - never the reverse.",
              "Iteration is the engine: paper catches conceptual errors cheaply.",
            ],
            table: {
              caption: "Model - order - iteration - best use.",
              headers: ["Model", "Order", "Iteration", "Best use"],
              rows: [
                ["Waterfall", "strict sequence", "none", "fixed, well-understood requirements"],
                ["Spiral", "risk-driven cycles", "planned", "high-risk, novel systems"],
                ["RAD", "compressed cycles", "rapid", "time-boxed delivery"],
                ["Star lifecycle", "no fixed order", "continuous", "HCI-centred projects - evaluation first-class"],
              ],
            },
            callout: {
              type: "exam",
              title: "Evaluation is a hub, not a phase",
              body: "The star lifecycle's defining sentence: every development activity can be followed by evaluation, and evaluation can send the work back to any earlier activity. Draw evaluation as the hub with the other activities as spokes and the examiner can see you know the model, not just its name.",
            },
            examQuestions: [
              {
                q: "Compare the waterfall, spiral and RAD lifecycle models for interaction design, identifying one strength and one weakness of each.",
                marks: 7,
                outline: [
                  "Waterfall: strict sequence; predictable, but evaluation arrives last",
                  "Spiral: risk-driven iteration; heavy process overhead",
                  "RAD: compressed loops and throwaway prototypes; scope risk",
                  "All three differ in where evaluation sits",
                  "HCI needs evaluation throughout - the deciding criterion",
                ],
              },
              {
                q: "Explain the star lifecycle of interaction design. Draw it, explain why evaluation sits at the hub, distinguish conceptual from physical design, and describe the role of prototyping in the loop.",
                marks: 14,
                outline: [
                  "Star: activities as satellites, evaluation at the hub, no fixed order",
                  "Every activity may be followed by evaluation; results route back anywhere",
                  "Contrast with waterfall's single pass and last-minute evaluation",
                  "Conceptual design: what the product does - concepts, metaphors, task support",
                  "Physical design: how it appears - widgets, layout, dialog flow",
                  "Prototyping: paper first for cheap conceptual checks, then interactive",
                  "Iteration: each pass removes uncertainty at increasing fidelity",
                ],
              },
            ],
          },
          {
            number: "2.2",
            title: "Discovery - the framework",
            body: [
              "Discovery is the phase that turns 'build an app' into a bounded, evidence-based problem. Its framework asks four deliverable-shaped questions: who are the stakeholders (primary, secondary, tertiary); what will they try to accomplish (goals and tasks); where will the work happen (the environment - desks, wards, factories, pockets); and what constrains the design (platform, privacy, safety, budget, deadlines)? The phase closes with a discovery document recording all four, so later arguments are settled by evidence rather than opinion.",
              "Stakeholder classification drives everything downstream. Primary stakeholders operate the product directly - the nurse dosing medication. Secondary stakeholders feed it or consume its output - the pharmacist checking stock, the laboratory receiving results. Tertiary stakeholders are affected without touching it - the hospital administrator reading dashboards, the regulator auditing. Missing a class is expensive: a scheduling system that satisfies nurses but ignores the ward manager's staffing reports will be undermined in practice.",
              "Usability goals are set in discovery too, so they can be tested later: learnability (a new nurse doses correctly within an hour), efficiency (an expert completes the task in under 20 seconds), safety (no wrong-dose selections) and satisfaction. Writing them as measurable targets now is what makes Unit V's validation possible. The exam framing: 'define primary, secondary and tertiary stakeholders with an example of each, and list the outputs of the discovery phase.'",
            ],
            keyTerms: [
              { term: "Discovery document", definition: "The deliverable recording stakeholders, goals and tasks, environment and constraints." },
              { term: "Primary stakeholder", definition: "A person who operates the product directly and routinely - design for them first." },
              { term: "Secondary stakeholder", definition: "A person who supplies input to or receives output from the product without operating it." },
              { term: "Tertiary stakeholder", definition: "A person affected by the product who never touches it - administrators, regulators." },
              { term: "Usability goals", definition: "Measurable targets for learnability, efficiency, safety and satisfaction set before design." },
            ],
            diagram: {
              kind: "fork",
              title: "Who counts as a stakeholder?",
              caption: "Three classes - and a design that misses one inherits its objections late.",
              start: "How does this person touch the product?",
              branches: [
                { label: "Operates it directly", outcome: "primary stakeholder - the nurse dosing medication; full profile required", good: true },
                { label: "Feeds it or consumes output", outcome: "secondary stakeholder - the pharmacist, the lab; summary profile", good: true },
                { label: "Affected but never touches it", outcome: "tertiary stakeholder - administrator, regulator; interests recorded", good: true },
              ],
            },
            bullets: [
              "Discovery answers: who, what goals, where, and under what constraints.",
              "Primary stakeholders: hands on the interface daily - design for them first.",
              "Secondary: supply inputs or receive outputs - profiles in summary.",
              "Tertiary: affected without use - record interests, avoid late objections.",
              "Usability goals set here must be measurable - they become Unit V's test criteria.",
              "Deliverable: the discovery document - evidence to settle later arguments.",
            ],
            table: {
              caption: "Stakeholder class - definition - hospital example.",
              headers: ["Class", "Definition", "Example"],
              rows: [
                ["Primary", "uses the product directly, routinely", "nurse dosing medication"],
                ["Secondary", "provides input or receives output", "pharmacist, laboratory"],
                ["Tertiary", "affected but never operates it", "administrator, regulator"],
              ],
            },
            callout: {
              type: "tip",
              title: "Write goals as numbers",
              body: "'Easy to use' is not a goal; 'a new nurse completes a correct dose entry within one hour of training' is. Measurable usability goals written during discovery are exactly what usability testing in Unit V will verify - the two phases are one contract.",
            },
            examQuestions: [
              {
                q: "Define primary, secondary and tertiary stakeholders with one example of each, and explain the risk of missing a stakeholder class during discovery.",
                marks: 7,
                outline: [
                  "Primary: direct routine use - the nurse",
                  "Secondary: inputs or outputs - pharmacist, lab",
                  "Tertiary: affected, no direct use - administrator, regulator",
                  "Risk: late objections, workarounds, undermined adoption",
                  "Deliverable: the discovery document recording all classes",
                ],
              },
              {
                q: "Describe the discovery phase of interaction design: its questions, its stakeholder framework, its usability goals and its deliverables. Illustrate throughout with a hospital medication system.",
                marks: 14,
                outline: [
                  "Four questions: stakeholders, goals and tasks, environment, constraints",
                  "Primary stakeholders: nurses - the daily operators; full profiles",
                  "Secondary: pharmacists and labs - summary profiles",
                  "Tertiary: administrators and regulators - interests recorded",
                  "Usability goals made measurable: learnability, efficiency, safety, satisfaction",
                  "Constraints: platform, privacy, safety regulation, budget",
                  "Deliverables: discovery document + stakeholder profiles + project plan",
                ],
              },
            ],
          },
          {
            number: "2.3",
            title: "Collection - observation and elicitation",
            body: [
              "Collection gathers the evidence discovery promised, through two families. Observation watches users in their real context: fly-on-the-wall studies record without interfering, contextual inquiry pairs observation with questions in the master-apprentice stance, and think-aloud sessions ask users to narrate their decisions. Observation's strength is behavioural truth - people cannot fully report their own procedures, workarounds and interruptions - and its costs are effort, small samples and the Hawthorne effect (people change behaviour when watched).",
              "Elicitation asks instead: structured and unstructured interviews surface goals, vocabulary and pain points; questionnaires scale to hundreds of respondents with Likert-scale attitude items; focus groups trade depth for interaction and group dynamics; card sorting reveals how users structure information for menus and navigation. Elicitation's strength is cheap scale and access to attitudes, intentions and language; its weakness is self-report bias - users predict their behaviour rather than recall it, and recall is edited.",
              "The professional answer is triangulation: observe what people do, elicit what they say, and treat disagreement as the finding - the spreadsheet users who claim they 'mainly write formulas' while the logs show they mainly copy-paste are telling you about aspiration, not workflow. The exam framing: 'compare observation and elicitation as collection techniques with two methods of each, and explain triangulation.'",
            ],
            keyTerms: [
              { term: "Contextual inquiry", definition: "Observation plus interviewing in the workplace, with the evaluator as the user's apprentice." },
              { term: "Think-aloud protocol", definition: "Users narrate their decisions while working - the window into cognitive process." },
              { term: "Hawthorne effect", definition: "People change their behaviour because they are being watched." },
              { term: "Card sorting", definition: "Users group content items their own way; the clusters become menus and navigation." },
              { term: "Triangulation", definition: "Cross-checking observation against elicitation; disagreement between them is data." },
            ],
            diagram: {
              kind: "compare",
              title: "Two ways to collect",
              caption: "Watch what they do, ask what they think - disagreement between the two is data.",
              left: {
                heading: "Observation - watch them work",
                items: [
                  "Fly-on-the-wall: silent recording in context",
                  "Contextual inquiry: observe + question, master-apprentice",
                  "Think-aloud: users narrate decisions",
                  "Reveals real behaviour, workarounds, interruptions",
                ],
              },
              right: {
                heading: "Elicitation - ask them",
                items: [
                  "Interviews: structured to open-ended",
                  "Questionnaires: Likert items at scale",
                  "Focus groups: interaction, group dynamics",
                  "Card sorts: how users structure information",
                ],
              },
            },
            bullets: [
              "Observation: fly-on-the-wall, contextual inquiry, think-aloud, video.",
              "Observation truths: workarounds, interruptions, real sequences - costly to gather, hard to fake.",
              "Elicitation: interviews, questionnaires, focus groups, card sorting.",
              "Hawthorne effect: being watched changes behaviour - expect it, design around it.",
              "Self-report bias: users predict and edit; logs and observation correct them.",
              "Triangulate: where doing and saying disagree, the gap is the finding.",
            ],
            table: {
              caption: "Method - family - cost - best for.",
              headers: ["Method", "Family", "Cost", "Best for"],
              rows: [
                ["Contextual inquiry", "observation", "high", "workflow and context truths"],
                ["Think-aloud", "observation", "medium", "cognitive process at the interface"],
                ["Interviews", "elicitation", "medium", "goals, vocabulary, pain points"],
                ["Questionnaire", "elicitation", "low", "attitudes at scale"],
                ["Card sort", "elicitation", "low", "menu and navigation structure"],
              ],
            },
            callout: {
              type: "warning",
              title: "People misreport themselves",
              body: "The classic collection error is building requirements purely from interviews: users predict their behaviour instead of recalling it. Pair every elicitation round with observation - when the two disagree, trust the observation about what happens and the elicitation about why it annoys them.",
            },
            examQuestions: [
              {
                q: "Distinguish observation from elicitation as data collection techniques, giving two methods of each with one strength and one weakness.",
                marks: 7,
                outline: [
                  "Observation: fly-on-the-wall, contextual inquiry; reveals real behaviour",
                  "Weaknesses: cost, small samples, Hawthorne effect",
                  "Elicitation: interviews, questionnaires, card sorts; scale and attitudes",
                  "Weaknesses: self-report bias and edited recall",
                  "Triangulation combines the two",
                ],
              },
              {
                q: "Explain the collection phase of interaction design in detail. Describe contextual inquiry, think-aloud, questionnaires and card sorting, and show with an example how disagreement between observed and reported behaviour is interpreted.",
                marks: 14,
                outline: [
                  "Two families: observation (watch) and elicitation (ask)",
                  "Contextual inquiry: master-apprentice stance, in the workplace",
                  "Think-aloud: narrated decisions reveal cognitive process",
                  "Questionnaires: Likert scales, large samples, attitude data",
                  "Card sorting: users group content - menus follow the clusters",
                  "Hawthorne effect and self-report bias as the method limits",
                  "Worked example: users say 'formula-first', logs show copy-paste - aspiration vs workflow",
                ],
              },
            ],
          },
          {
            number: "2.4",
            title: "Interpretation - task analysis",
            body: [
              "Interpretation converts collected data into models, and the workhorse is hierarchical task analysis (HTA): the task is written as goal 0, decomposed into numbered subtasks 1..n, each decomposed again as needed, and plans state the ordering - plan 0: 'do 1, then 2, then 3'; plan 1: '1.1 and 1.2 in any order'. The notation is deliberately simple: a page of numbers captures a workflow that paragraphs of prose only blur.",
              "A worked example fixes the notation. Task: send an email (0). Subtasks: 1 compose message (1.1 enter recipients, 1.2 enter subject, 1.3 write body), 2 send message. Plan 0: do 1 then 2. Plan 1: 1.1-1.3 in any order, all before 2. From this fragment, interface requirements fall out directly: recipients, subject and body need no fixed sequence (a free-form composition area), but sending must be gated on all three (validation before send).",
              "Knowledge-based task analysis complements HTA: list the objects people work with (message, address book, attachment) against the actions performed on them (create, edit, send, forward) - the object-action table seeds the interface's nouns and verbs. Task analysis also feeds later models: GOMS methods in Unit III are HTA fragments with times attached. The exam framing: 'apply HTA to a familiar task, writing subtasks and plans, and explain how the analysis drives interface requirements.'",
            ],
            keyTerms: [
              { term: "Hierarchical task analysis (HTA)", definition: "Decomposing a task into numbered subtasks with plans stating the order of execution." },
              { term: "Plan (HTA)", definition: "The ordering rule for subtasks: 'do 1 then 2', 'any order', 'if X then 3'." },
              { term: "Subtask numbering", definition: "The 0 / 1..n / n.m notation that makes the hierarchy explicit and referenceable." },
              { term: "Knowledge-based analysis", definition: "Listing task objects against the actions performed on them - the interface's nouns and verbs." },
              { term: "Object-action table", definition: "The matrix of objects x actions that seeds interface elements and commands." },
            ],
            diagram: {
              kind: "pyramid",
              title: "An HTA in four tiers",
              caption: "Goal on top, subtasks below, plans as the glue that states the order.",
              tiers: [
                { label: "Task 0 - the goal", note: "'send an email'" },
                { label: "Subtasks 1..n", note: "1 compose, 2 send" },
                { label: "Sub-subtasks 1.1..", note: "1.1 recipients, 1.2 subject, 1.3 body" },
                { label: "Plans 0..n", note: "plan 0: do 1 then 2; plan 1: 1.1-1.3 any order" },
              ],
            },
            bullets: [
              "HTA: goal 0, subtasks 1..n, sub-subtasks n.m, plans for ordering.",
              "Plans can be strict ('do 1 then 2'), free ('any order') or conditional ('if X then 3').",
              "Worked example: send an email - compose (recipients, subject, body) then send.",
              "Each plan becomes an interface rule: free plans need no sequence, gated plans need validation.",
              "Knowledge-based analysis: objects x actions - the nouns and verbs of the interface.",
              "HTA feeds GOMS: Unit III's methods are HTA fragments with times attached.",
            ],
            table: {
              caption: "HTA fragment - 'send an email'.",
              headers: ["Number", "Task / subtask", "Plan note"],
              rows: [
                ["0", "Send an email", "plan 0: do 1 then 2"],
                ["1", "Compose message", "plan 1: 1.1-1.3 in any order"],
                ["1.1", "Enter recipients", "-"],
                ["1.2", "Enter subject", "-"],
                ["1.3", "Write body", "-"],
                ["2", "Send message", "gated: only after 1.1-1.3"],
              ],
            },
            callout: {
              type: "exam",
              title: "Plans are where the marks live",
              body: "Most students decompose correctly and then forget the plans - but the ordering rules are the analysis: 'do 1 then 2', 'any order', 'if address unknown then look up'. In any HTA answer, write plan 0 explicitly before touching the subtasks.",
            },
            examQuestions: [
              {
                q: "Explain hierarchical task analysis with its notation, and apply it to the task of withdrawing cash from an ATM (subtasks and plans).",
                marks: 7,
                outline: [
                  "Notation: goal 0, subtasks 1..n, sub-subtasks n.m, plans 0..n",
                  "0 withdraw cash; 1 authenticate (1.1 card, 1.2 PIN)",
                  "2 select amount; 3 take card; 4 take cash",
                  "Plan 0: do 1, then 2, then 3, then 4",
                  "The plan shows the gating the interface must enforce",
                ],
              },
              {
                q: "Describe the interpretation phase of interaction design. Explain hierarchical task analysis and knowledge-based task analysis, work through the 'send an email' example with plans, and show how each plan becomes an interface requirement.",
                marks: 14,
                outline: [
                  "Interpretation: data -> models (HTA, object-action tables)",
                  "HTA notation: 0, 1..n, n.m, plans 0..n",
                  "Worked HTA: compose (recipients, subject, body) then send",
                  "Plan 1 'any order' -> a free-form composition area",
                  "Gated send -> validation before sending",
                  "Knowledge-based: objects (message, attachment) x actions (create, edit, send)",
                  "The object-action table seeds the interface's nouns and verbs",
                ],
              },
            ],
          },
          {
            number: "2.5",
            title: "Storyboarding and use cases",
            body: [
              "A storyboard is the scenario made visual: a sequence of sketched frames - paper screens, sticky notes on a whiteboard - depicting one path through the task. Its virtues are speed and disposability: a frame costs minutes, so disagreement is settled by redrawing rather than defending; stakeholders who cannot read specifications can read pictures; and gaps show themselves - a frame that cannot be drawn is a scenario step nobody understands.",
              "A use case formalises the same path: actors (the roles that interact), preconditions, a main success scenario as numbered actor-system steps, and extensions that branch for exceptions. The ATM withdrawal use case: actor = customer; main flow: insert card -> enter PIN -> choose amount -> receive cash; extensions: wrong PIN (retry, then confiscate), insufficient balance (offer a smaller amount), customer takes no cash (timeout and return). Extensions are requirements in disguise - each one is an interface state somebody must design.",
              "The three artefacts stack: scenario (prose story of one user path) -> storyboard (visual frames of that path) -> use case (formal steps and extensions). Each adds rigour; none adds fiction. The exam framing: 'compare storyboards and use cases as design representations, and write a use case with main flow and two extensions for a familiar task.'",
            ],
            keyTerms: [
              { term: "Scenario", definition: "A prose story of one user path through the task - the raw narrative." },
              { term: "Storyboard", definition: "A sequence of sketched frames depicting one path - cheap, disposable, readable by anyone." },
              { term: "Use case", definition: "A formal description: actor, precondition, main success scenario and extensions." },
              { term: "Actor", definition: "A role that interacts with the system - customer, clerk, administrator." },
              { term: "Extension", definition: "A use-case branch for an exception - each one is an interface state to design." },
            ],
            diagram: {
              kind: "pipeline",
              title: "From story to specification",
              caption: "The same user path, told three ways with increasing rigour.",
              stages: [
                { label: "Scenario", note: "prose story of one path" },
                { label: "Storyboard", note: "visual frames of that path" },
                { label: "Use case", note: "formal actor-system steps + extensions" },
                { label: "Requirements", note: "extensions become interface states" },
              ],
            },
            bullets: [
              "Scenario: prose, one user, one path - the raw narrative.",
              "Storyboard: sketched frames - cheap, disposable, readable by non-technical stakeholders.",
              "A frame that cannot be drawn marks a step nobody understands.",
              "Use case: actor, precondition, main success scenario, extensions.",
              "Extensions are requirements: each branch is an interface state to design.",
              "Stack: scenario -> storyboard -> use case, same path, rising rigour.",
            ],
            table: {
              caption: "Use case skeleton - ATM withdrawal.",
              headers: ["Element", "Meaning", "Example"],
              rows: [
                ["Actor", "role interacting with the system", "customer"],
                ["Precondition", "state before the flow starts", "card valid, account accessible"],
                ["Main flow", "numbered success steps", "card -> PIN -> amount -> cash"],
                ["Extension", "exception branch", "wrong PIN: retry, then confiscate"],
              ],
            },
            callout: {
              type: "tip",
              title: "Extensions are the design brief",
              body: "The main flow is the happy path every competitor already ships; the extensions - wrong PIN, empty cart, lost connection - are where usability is won. When asked for a use case, two well-chosen extensions earn more marks than a longer main flow.",
            },
            examQuestions: [
              {
                q: "What is a storyboard in interaction design? Explain its advantages and limitations, and contrast it with a written scenario.",
                marks: 7,
                outline: [
                  "Storyboard: a sketched frame sequence of one path",
                  "Advantages: cheap, disposable, readable by non-technical stakeholders",
                  "Gaps surface as frames that cannot be drawn",
                  "Scenario: prose narrative - faster to write, harder to review",
                  "Limitation: a single path; many storyboards are needed for coverage",
                ],
              },
              {
                q: "Write a use case for withdrawing cash from an ATM with actor, preconditions, main success scenario and at least three extensions. Explain how storyboards and use cases complement each other in moving from discovery to design.",
                marks: 14,
                outline: [
                  "Use case structure: actor, precondition, main flow, extensions",
                  "Main flow: insert card -> PIN -> amount -> cash -> card",
                  "Extension 1: wrong PIN - retry, then confiscate",
                  "Extension 2: insufficient balance - offer a smaller amount",
                  "Extension 3: cash not taken - timeout and return",
                  "Storyboard: visual frames of the same path; cheap iteration",
                  "Together: scenario -> storyboard -> use case -> requirements",
                ],
              },
            ],
          },
          {
            number: "2.6",
            title: "Primary stakeholder profiles and the project management document",
            body: [
              "A primary stakeholder profile is a one-page identity of the person being designed for: role and background, goals, representative tasks, skills and experience, working environment, and the usability priorities that matter most to them. Profiles are personas grounded in collected data rather than invented: 'Asha, senior nurse, 12 years on the ward, doses medication during rounds, works standing, gloves on, needs a correct dose entry in under 30 seconds and zero ambiguity between look-alike drugs.'",
              "The profile earns its keep by turning abstract requirements into checkable ones: 'large touch targets' is vague, but 'gloved hands must select from a 12 mm target' is testable - and it rules out designs silently. Profiles also arbitrate conflicts: when the expert's shortcut and the novice's wizard disagree, the profiles record whose efficiency the product promises first.",
              "The project management document closes discovery: scope (what is and is not being built), schedule and milestones, resources and roles, risks with mitigations, and the deliverables list tying the discovery document and profiles to the design phases. Together they convert user-centred intent into a plan a manager can run. The exam framing: 'state the contents of a primary stakeholder profile and a project management document, and explain how profiles guide design decisions.'",
            ],
            keyTerms: [
              { term: "Stakeholder profile", definition: "A data-grounded one-page identity: role, goals, tasks, skills, environment, priorities." },
              { term: "Persona", definition: "A named, concrete user character used to keep design decisions anchored to real needs." },
              { term: "Scope", definition: "The statement of what is and is not being built - the first defence against drift." },
              { term: "Risk register", definition: "The list of project risks with likelihood, impact and mitigation." },
              { term: "Discovery deliverables", definition: "Discovery document, stakeholder profiles and the project management document together." },
            ],
            diagram: {
              kind: "matrix",
              title: "The stakeholder power-interest grid",
              caption: "Attention is finite - spend it where power and interest intersect.",
              axes: { x: "Interest in the project (low -> high)", y: "Power over the project (low -> high)" },
              quadrants: [
                { label: "Keep satisfied", note: "high power, low interest - sponsors, regulators" },
                { label: "Manage closely", note: "high power, high interest - primary stakeholders and owners" },
                { label: "Monitor", note: "low power, low interest - peripheral groups" },
                { label: "Keep informed", note: "low power, high interest - secondary stakeholders" },
              ],
            },
            bullets: [
              "Profile fields: role, goals, tasks, skills, environment, usability priorities.",
              "Profiles are personas grounded in collection data, not invented characters.",
              "Worked profile: gloved nurse, 12 mm targets, sub-30-second dose entry.",
              "Profiles make requirements checkable and arbitrate design conflicts.",
              "Project management document: scope, schedule, resources, risks, deliverables.",
              "Full profiles for primary stakeholders only; others get summaries.",
            ],
            table: {
              caption: "Profile field - question answered - example value.",
              headers: ["Field", "Question", "Example"],
              rows: [
                ["Role and background", "who is the user?", "senior nurse, 12 years"],
                ["Goals and tasks", "what must they achieve?", "correct dose during rounds"],
                ["Skills", "what can be assumed?", "phone-fluent, not desktop-fluent"],
                ["Environment", "where does work happen?", "standing, gloves, interruptions"],
                ["Usability priorities", "what matters most?", "safety and speed over aesthetics"],
              ],
            },
            callout: {
              type: "tip",
              title: "Profile only the primaries",
              body: "Writing full profiles for every stakeholder dilutes the document and the team's attention. Give primary stakeholders full profiles, secondary stakeholders half-page summaries, tertiary stakeholders a paragraph of interests - the depth should follow the design's dependency.",
            },
            examQuestions: [
              {
                q: "What is a primary stakeholder profile? State its typical fields and explain, with an example, how a profile changes a design decision.",
                marks: 7,
                outline: [
                  "Fields: role, goals, tasks, skills, environment, priorities",
                  "Grounded in collection data - a persona with evidence",
                  "Example: gloved nurse -> 12 mm targets, no hover-only actions",
                  "Vague requirements become testable ones",
                  "Profiles arbitrate conflicting design claims",
                ],
              },
              {
                q: "Describe the closing deliverables of the discovery phase: primary stakeholder profiles and the project management document. Explain the contents and purpose of each and how together they hand over to design.",
                marks: 14,
                outline: [
                  "Profile fields: role, goals, tasks, skills, environment, priorities",
                  "Worked example: the nurse profile driving target size and speed targets",
                  "Secondary and tertiary stakeholders get summaries, not full profiles",
                  "Project management document: scope, schedule, resources, risks",
                  "The deliverables list ties discovery to the design phases",
                  "Purpose: an evidence-based plan a manager can run",
                  "Handover: usability goals + profiles -> design constraints",
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
      title: "Interaction Design Models",
      summary:
        "Unit III is the quantitative heart of the subject: the Model Human Processor and its processor timings, the Keystroke-Level Model with its operators, encoding methods and M-placement heuristics, its limits and applications, GOMS with CMN-GOMS analysis and modeling structure, state transition networks with the three-state model, the Glimpse model and physical models, and Fitts' law.",
      chapter: {
        number: "03",
        title: "Models That Predict Performance",
        intro:
          "Unit III covers the Model Human Processor (working memory, long-term memory, processor timing), the Keystroke-Level Model (operators, encoding methods, heuristics for M-operator placement, what it does not model, its applications), GOMS (CMN-GOMS analysis, modeling structure), state transition networks (the three-state model), the Glimpse model, physical models and Fitts' law.",
        inOneBreath:
          "The Model Human Processor gives the cycle times; the KLM adds operators to predict expert seconds; the M-placement rules decide where thinking goes; GOMS wraps structure around the arithmetic; state transition networks map dialog states; the three-state model splits pointing, dragging and typing; the glimpse model prices looking; and Fitts' law prices reaching.",
        sections: [
          {
            number: "3.1",
            title: "The Model Human Processor",
            body: [
              "The Model Human Processor (Card, Moran and Newell, 1983) is the quantitative skeleton of the human: three coupled processors, each with a cycle time, wrapped around three memories. The perceptual processor samples the senses every tau_p ≈ 100 ms and passes images to working memory; the cognitive processor decides every tau_c ≈ 70 ms, drawing on working and long-term memory; the motor processor executes every tau_m ≈ 70 ms. Working memory holds a few chunks for seconds; long-term memory stores with practice and retrieves by cues.",
              "The numbers do real work. Simple reaction time - see the light, press the button - is roughly the sum of the three cycles: 100 + 70 + 70 ≈ 240 ms. Perceptual fusion: two events less than about 100 ms apart are perceived as simultaneous, which is why 60 Hz animation looks continuous and why progress bars that jump feel broken. Reading and rapid typing rates are likewise derived from the same constants, and the model's estimates land close to measured times.",
              "As a design tool, the MHP grounds every later model: KLM operator times and Fitts' law constants are calibrated against it, and any interface question of the form 'how fast must the system respond?' is answered in MHP currency - respond within one perceptual cycle (~100 ms) to feel instantaneous, within about a second to keep the flow of thought; longer, and the user's attention leaves. The exam framing: 'describe the Model Human Processor with its memories and processor timings and use the parameters to estimate a response time.'",
            ],
            keyTerms: [
              { term: "Model Human Processor (MHP)", definition: "Card, Moran and Newell's engineering approximation of the human as processors and memories." },
              { term: "Perceptual processor", definition: "Samples the senses each cycle, tau_p ≈ 100 ms; feeds working memory." },
              { term: "Cognitive processor", definition: "Decides each cycle, tau_c ≈ 70 ms; draws on working and long-term memory." },
              { term: "Motor processor", definition: "Executes actions each cycle, tau_m ≈ 70 ms." },
              { term: "Perceptual fusion", definition: "Events less than ~100 ms apart appear simultaneous - the basis of animation smoothness." },
            ],
            diagram: {
              kind: "flow",
              title: "The Model Human Processor",
              caption: "Stimulus to response through three processors - each with its cycle time.",
              steps: [
                { label: "Stimulus", note: "light, sound, pressure" },
                { label: "Perceptual processor", note: "tau_p ≈ 100 ms; feeds working memory" },
                { label: "Cognitive processor", note: "tau_c ≈ 70 ms; decides, with LTM" },
                { label: "Motor processor", note: "tau_m ≈ 70 ms; executes the action" },
                { label: "Response", note: "keystroke, speech, movement" },
              ],
            },
            bullets: [
              "Three processors: perceptual ~100 ms, cognitive ~70 ms, motor ~70 ms.",
              "Three memories: sensory buffer, working memory, long-term memory.",
              "Simple reaction time ≈ 100 + 70 + 70 ≈ 240 ms.",
              "Perceptual fusion: events < ~100 ms apart feel simultaneous - 60 Hz looks continuous.",
              "Response budget: ~100 ms feels instant, ~1 s keeps thought flowing.",
              "The MHP calibrates the KLM and Fitts' law - the constants come from here.",
            ],
            table: {
              caption: "MHP parameters - symbol - typical value.",
              headers: ["Component", "Symbol", "Typical value"],
              rows: [
                ["Perceptual processor cycle", "tau_p", "~100 ms (50-200)"],
                ["Cognitive processor cycle", "tau_c", "~70 ms (25-170)"],
                ["Motor processor cycle", "tau_m", "~70 ms (30-100)"],
                ["Simple reaction time", "tau_p + tau_c + tau_m", "~240 ms"],
                ["Working memory decay", "-", "seconds without rehearsal"],
              ],
            },
            callout: {
              type: "exam",
              title: "Quote the constants, then compute",
              body: "Examiners set numericals directly from these constants: 'estimate the reaction time of a user to a warning tone' expects 100 + 70 + 70 ≈ 240 ms. Write the three cycle times first, then the sum - the numbers are the answer's spine.",
            },
            examQuestions: [
              {
                q: "Describe the Model Human Processor: its processors, their cycle times and its memories. Estimate a simple reaction time from the parameters.",
                marks: 7,
                outline: [
                  "Perceptual processor tau_p ≈ 100 ms; feeds working memory",
                  "Cognitive processor tau_c ≈ 70 ms; decides using long-term memory",
                  "Motor processor tau_m ≈ 70 ms; executes",
                  "Memories: sensory buffer, working memory (chunks), long-term memory",
                  "Simple reaction time ≈ 100 + 70 + 70 ≈ 240 ms",
                ],
              },
              {
                q: "Explain the Model Human Processor in detail. Using its parameters, explain perceptual fusion, derive response-time budgets for interface feedback, and show how the model grounds later performance models such as the KLM and Fitts' law.",
                marks: 14,
                outline: [
                  "Architecture: three processors plus three memories with cycle times",
                  "Simple reaction time arithmetic: ~240 ms from the three cycles",
                  "Perceptual fusion: <100 ms events appear simultaneous; 60 Hz continuity",
                  "Feedback budgets: ~100 ms instant, ~1 s flow, longer loses attention",
                  "Working memory and long-term memory roles in the cognitive processor's decisions",
                  "KLM operator times and Fitts' law constants are calibrated on the MHP",
                  "Worked estimate: a warning-tone response takes ~240 ms before action begins",
                ],
              },
            ],
          },
          {
            number: "3.2",
            title: "The Keystroke-Level Model: operators and encoding methods",
            body: [
              "The Keystroke-Level Model predicts the time an expert, error-free user needs for a routine task. Execution time is the sum of operators: T = K + P + H + M + R - K for each keystroke (K ≈ 0.2 s for the average skilled typist, 0.08-0.28 s depending on skill), P for pointing with the mouse to a target (P ≈ 1.1 s), H for homing the hand between keyboard and mouse (H ≈ 0.4 s), M for mental preparation (M ≈ 1.35 s), and R for system response time, counted only when the user cannot proceed meanwhile.",
              "Encoding methods compress repeated operators into shorthand: a typed word of n characters is n·K; a mouse selection is P (point) then BB (button press and release, about 0.2 s total); a drag inserts a second pointing segment between press and release. The encoding is the model's grammar - writing 'H M P BB' for a menu selection says everything an examiner needs before any arithmetic begins.",
              "Worked trace - delete a file two ways. Command line with the hand already on the keyboard: M (recall command) + 7K ('rm' plus the filename) ≈ 1.35 + 1.4 ≈ 2.75 s. Mouse path: H (0.4) + M (1.35) + P (1.1) + BB (0.2) ≈ 3.05 s - the keyboard wins for a known command, and the KLM makes the comparison numeric instead of anecdotal. The exam framing is a computation: 'compute the execution time using KLM operators' - write the operator string first, then substitute the constants and add.",
            ],
            keyTerms: [
              { term: "Keystroke-Level Model (KLM)", definition: "Predicts expert, error-free routine task time as a sum of primitive operators." },
              { term: "Operator K", definition: "One keystroke, ~0.2 s (0.08-0.28 s by typing skill)." },
              { term: "Operator P", definition: "Pointing the mouse to a target, ~1.1 s." },
              { term: "Operator H", definition: "Homing the hand between keyboard and mouse, ~0.4 s." },
              { term: "Operator M", definition: "Mental preparation, ~1.35 s; R is system response counted when blocking." },
            ],
            diagram: {
              kind: "pipeline",
              title: "The KLM operator sequence",
              caption: "Homing, thinking, acting: an expert's seconds decomposed into five operators.",
              stages: [
                { label: "H - home", note: "hand to keyboard/mouse, ~0.4 s" },
                { label: "M - mental", note: "preparation, ~1.35 s" },
                { label: "K - keystroke", note: "~0.2 s each; strings = n·K" },
                { label: "P - point", note: "mouse to target, ~1.1 s" },
                { label: "R - response", note: "system time, counted when blocking" },
              ],
            },
            bullets: [
              "T = K + P + H + M + R: keystroke, point, home, mental, response.",
              "Constants: K ≈ 0.2 s (0.08-0.28 by skill), P ≈ 1.1 s, H ≈ 0.4 s, M ≈ 1.35 s.",
              "R counts only when the user is blocked - overlapping response is free.",
              "Encoding: typed word = n·K; mouse selection = P + BB; drag adds a pointing segment.",
              "Assumes expert, error-free, routine performance - no learning, no errors.",
              "Worked trace: keyboard delete ≈ 2.75 s vs mouse delete ≈ 3.05 s.",
            ],
            codeExample: {
              language: "python",
              caption: "klm.py - two ways to delete a file",
              code: `K, P, H, M, BB = 0.20, 1.10, 0.40, 1.35, 0.20

# path 1: type the command, hand already on keyboard (no H)
cli = M + 7 * K                    # M  K K K K K K K
# path 2: move hand, think, point at icon, click
gui = H + M + P + BB

print(f"keyboard path: {cli:.2f} s")   # 2.75 s
print(f"mouse path:    {gui:.2f} s")   # 3.05 s
# the operator string is the model; the arithmetic is bookkeeping`,
            },
            callout: {
              type: "exam",
              title: "Write the operator string first",
              body: "In every KLM numerical, the marks sit in the operator string - H M K K or H M P BB - not in the multiplication. Substitute the constants only after the string is on paper; a correct sum with a wrong string scores almost nothing.",
            },
            examQuestions: [
              {
                q: "State the operators of the Keystroke-Level Model with their typical times, and compute the execution time of entering a six-character command from the keyboard.",
                marks: 7,
                outline: [
                  "K ≈ 0.2 s per keystroke; P ≈ 1.1 s; H ≈ 0.4 s; M ≈ 1.35 s; R when blocking",
                  "Encoding: a string of n characters = n·K",
                  "Six characters: 6 × 0.2 = 1.2 s",
                  "Plus initial M for mental preparation: 1.35 + 1.2 ≈ 2.55 s",
                  "H omitted - the hand is already at the keyboard",
                ],
              },
              {
                q: "Explain the Keystroke-Level Model in full: its operators, encoding methods and assumptions. Work through a task executed by keyboard and by mouse, compare the times, and state what the comparison means for interface design.",
                marks: 14,
                outline: [
                  "Purpose: expert, error-free routine task time",
                  "Operators and constants: K 0.2, P 1.1, H 0.4, M 1.35, R variable",
                  "Encoding methods: n·K strings; P + BB selection; drag encoding",
                  "Keyboard path: M + 7K ≈ 2.75 s",
                  "Mouse path: H + M + P + BB ≈ 3.05 s",
                  "Interpretation: known commands favour the keyboard; discovery favours the mouse",
                  "Design meaning: shortcuts pay when commands are frequent and known",
                ],
              },
            ],
          },
          {
            number: "3.3",
            title: "Heuristics for M-operator placement",
            body: [
              "Where does thinking happen inside an operator string? The M-placement heuristics (Card, Moran and Newell) answer it. Rule 0: insert an M in front of every K and P - the initial, over-cautious encoding. Rule 1: remove an M that fully follows an R - the system response itself is the cue, so no separate preparation is needed. Rule 2: remove Ms inside strings typed rapidly by skilled users - a fluent word is one cognitive chunk, not one decision per letter.",
              "Rules 3 and 4 trim the ends of strings. Rule 3: remove an M before a second consecutive terminator - once Ctrl has been pressed, pressing S needs no fresh preparation. Rule 4: remove an M before a terminator that is a constant part of a frequently used string - the Enter that ends a beloved command is chunked with it, not a separate thought. The result of applying 0-4 is a string where Ms mark genuine cognitive units: task beginnings, decisions between alternatives, retrievals from memory.",
              "A worked trace shows the machinery. 'Save a file with Ctrl+S' starts as M K M K (Rule 0); Rule 3 removes the second M (consecutive terminators), giving M K K ≈ 1.35 + 0.4 ≈ 1.75 s. The menu route - home to the mouse, open the File menu, then Save - runs H M P BB M P BB ≈ 5.7 s: the shortcut saves about four seconds per save, which is the arithmetic behind every expert shortcut. The exam framing: 'state the M-placement rules and apply them to a command sequence' - write Rule 0's string first, then apply the removal rules in order, showing the string after each rule.",
            ],
            keyTerms: [
              { term: "Rule 0", definition: "Insert an M before every K and P - the over-cautious starting encoding." },
              { term: "Rule 1", definition: "Remove an M that fully follows an R - the system response is the cue." },
              { term: "Rule 2", definition: "Remove Ms inside rapidly typed strings - fluent words are single chunks." },
              { term: "Rule 3", definition: "Remove an M before a second consecutive terminator (Ctrl, then S)." },
              { term: "Rule 4", definition: "Remove an M before a terminator that is a constant of a frequently used string." },
            ],
            diagram: {
              kind: "fork",
              title: "Does an M belong here?",
              caption: "Start from Rule 0's over-cautious string and prune with Rules 1-4.",
              start: "Where does mental preparation occur?",
              branches: [
                { label: "Start of task, before each K or P", outcome: "Rule 0 - insert: the cautious first encoding", good: true },
                { label: "Directly after an R", outcome: "Rule 1 - remove: the response is the cue", good: true },
                { label: "Inside a rapidly typed string", outcome: "Rule 2 - remove: fluent words are one chunk", good: true },
                { label: "Before a chunked trailing terminator", outcome: "Rules 3-4 - remove: it travels with the string", good: true },
              ],
            },
            bullets: [
              "Rule 0: insert M before every K and P - the starting encoding.",
              "Rule 1: remove M fully following R - the response is the cue.",
              "Rule 2: remove M inside rapid strings - fluent text is one chunk.",
              "Rule 3: remove M before consecutive terminators (Ctrl, then S).",
              "Rule 4: remove M before constant terminators of familiar commands.",
              "Worked: Ctrl+S: M K K ≈ 1.75 s; File > Save by mouse ≈ 5.7 s.",
            ],
            table: {
              caption: "The five M-placement rules.",
              headers: ["Rule", "Statement", "Effect"],
              rows: [
                ["0", "insert M before all K and P", "over-cautious baseline"],
                ["1", "remove M fully following R", "the response already cues the user"],
                ["2", "remove M inside rapid strings", "fluent words are single chunks"],
                ["3", "remove M before consecutive terminators", "no fresh preparation mid-combination"],
                ["4", "remove M before constant terminators", "familiar endings are chunked"],
              ],
            },
            callout: {
              type: "exam",
              title: "Show the transformation, not just the total",
              body: "Apply the rules visibly: write the Rule 0 string (M K M K), then each rule's edited string. An answer that jumps to M K K ≈ 1.75 s without the intermediate strings looks like a guess; the transformation chain is the proof.",
            },
            examQuestions: [
              {
                q: "State the heuristics for placing M operators in a KLM sequence and illustrate Rules 1-4 with examples.",
                marks: 7,
                outline: [
                  "Rule 0: insert M before every K and P",
                  "Rule 1: remove M fully following R (the response cues the user)",
                  "Rule 2: remove M inside rapidly typed strings",
                  "Rule 3: remove M before consecutive terminators (Ctrl, then S)",
                  "Rule 4: remove M before constant terminators of familiar commands",
                ],
              },
              {
                q: "Apply the M-placement heuristics to compute the execution time of saving a file using (a) Ctrl+S and (b) the File > Save menu path, showing the operator string after each rule, and interpret the difference for interface design.",
                marks: 14,
                outline: [
                  "Rule 0: insert M before each K and P in both paths",
                  "(a) Rules 3-4 remove the second M: M K K ≈ 1.35 + 0.4 ≈ 1.75 s",
                  "(b) homing plus two point-select rounds: H M P BB M P BB ≈ 5.7 s",
                  "Difference ≈ 4 s per save - the shortcut pays when the action is frequent",
                  "Interpretation: expert shortcuts exist because the arithmetic says so",
                  "Caveat: the KLM assumes expert, error-free execution",
                  "Novices pay an M every time - shortcuts are learned investments",
                ],
              },
            ],
          },
          {
            number: "3.4",
            title: "What the KLM does not model - and applying it",
            body: [
              "The KLM's scope is exactly one point in skill space: the expert performing a routine, procedural task correctly the first time. It does not model learning (novices searching menus pay none of the predicted time), errors and recovery, problem solving or judgment (the M covers preparation, not deliberation), fatigue, motivation or individual differences (one K per keystroke, not one per user), and it ignores what the user does between operations - reading, deciding, waiting by choice. Treat its numbers as a floor for experts, not an average over users.",
              "Its applications are exactly where that scope fits: predicting expert performance to compare systems for routine work (the classic Xerox-era evaluations of text editors and CAD stations), benchmarking alternative designs of a fixed task flow, sizing the payoff of shortcuts and macros (the four seconds saved per Ctrl+S multiplies by a day's saves), and estimating whether a response time will dominate or hide inside the operators.",
              "Choosing the right tool completes the answer: the KLM for 'how fast can an expert do it?', usability testing for 'can users learn it?', interviews for 'will they like it?', GOMS when task structure needs modeling (next section). The exam framing: 'state the assumptions and limitations of the KLM and discuss its applications' - pair each limitation with the method that covers it.",
            ],
            keyTerms: [
              { term: "Expert-performance assumption", definition: "The KLM models a skilled user executing a routine task correctly the first time." },
              { term: "Error-free assumption", definition: "No errors, slips or recovery time are priced by the model." },
              { term: "Floor estimate", definition: "KLM times are lower bounds for experts, not population averages." },
              { term: "Benchmark prediction", definition: "Using KLM numbers to compare systems or designs on fixed routine tasks." },
              { term: "Shortcut payoff", definition: "KLM arithmetic sizing the seconds saved per use by a shortcut or macro." },
            ],
            diagram: {
              kind: "compare",
              title: "Inside and outside the KLM",
              caption: "The model prices expert routine seconds; everything human beyond that needs another method.",
              left: {
                heading: "The KLM models",
                items: [
                  "Expert, error-free, routine execution",
                  "Keystrokes, pointing, homing, mental preparation",
                  "Blocking system response (R)",
                  "Comparison of fixed task flows",
                ],
              },
              right: {
                heading: "The KLM misses",
                items: [
                  "Learning curves and novice search",
                  "Errors, slips and recovery time",
                  "Problem solving and judgment",
                  "Fatigue, motivation, individual differences",
                ],
              },
            },
            bullets: [
              "Assumption: expert, error-free, first-time-correct routine performance.",
              "No learning, no errors, no problem solving - M covers preparation only.",
              "One constant per operator: no individual differences, no fatigue.",
              "Applications: system comparison (text editors, CAD), benchmarking, shortcut payoff.",
              "The KLM answers 'how fast can an expert do it?' - not 'can users learn it?'",
              "Pair with usability testing (learning) and interviews (preference).",
            ],
            table: {
              caption: "Question - right tool.",
              headers: ["Question", "Right tool"],
              rows: [
                ["How fast can an expert execute it?", "KLM / Fitts' law"],
                ["Can users learn it?", "usability test with think-aloud"],
                ["Will they like it?", "interviews, satisfaction scales"],
                ["What is the task structure?", "GOMS / HTA"],
              ],
            },
            callout: {
              type: "tip",
              title: "A floor, not an average",
              body: "KLM times are lower bounds for experts: real populations land above them because of learning, error and variance. Saying 'the KLM gives a floor estimate for skilled users' in the limitations answer shows you know both the model and its boundary.",
            },
            examQuestions: [
              {
                q: "State the assumptions of the Keystroke-Level Model and discuss four things it does not model.",
                marks: 7,
                outline: [
                  "Assumes expert, error-free, routine task execution",
                  "No learning: novices' search time is invisible",
                  "No errors or recovery; no problem solving beyond M",
                  "No fatigue, motivation or individual differences",
                  "Ignores inter-operation reading and voluntary waiting",
                ],
              },
              {
                q: "Discuss the applications of the KLM and the methods that complement it. Explain how KLM sizing justifies shortcuts, and match each KLM limitation to the evaluation method that covers it.",
                marks: 14,
                outline: [
                  "Applications: expert benchmarking, system comparison (editors, CAD)",
                  "Shortcut payoff: ~4 s per save multiplied by daily frequency",
                  "Response sizing: R hides inside operators or dominates",
                  "Limitation: learning -> covered by usability testing",
                  "Limitation: preference -> interviews and satisfaction scales",
                  "Limitation: task structure -> GOMS and HTA",
                  "The KLM as a floor estimate for skilled users, not a population average",
                ],
              },
            ],
          },
          {
            number: "3.5",
            title: "GOMS: CMN-GOMS analysis and modeling structure",
            body: [
              "GOMS - Goals, Operators, Methods, Selection rules - generalises the KLM from a flat operator string to a structure. Goals are what the user wants ('delete the file'); Operators are the atomic actions with times (K, P, M, H); Methods are learned sequences of operators and subgoals that achieve a goal; Selection rules are the conditions that choose among alternative methods. CMN-GOMS, the original variant, arranges all of this as a strict goal hierarchy - each goal expands into a method, each method into subgoals and operators.",
              "A worked analysis: GOAL: DELETE-FILE. Method 1 (command known): recall filename [M], type 'rm' [2K], type name [n·K], press Enter [K]. Method 2 (browse): locate icon [M P], select [BB], choose Delete [M P BB]. Selection rule: IF the filename is known THEN use Method 1 ELSE use Method 2. Below the structure sits KLM arithmetic - Method 1 ≈ M + 2K + nK + K; Method 2 ≈ H + M P BB M P BB - so the hierarchy decides and the operators price.",
              "Modeling structure is GOMS's real contribution: the hierarchy mirrors HTA (Unit II), so interface requirements fall out of the decomposition - every selection rule is a design fork the interface must support, every method a path the UI must make learnable. Later variants (NGOMSL with natural-language methods, CPM-GOMS with parallel cognitive-perceptual-motor threads) extend the family, but the syllabus's core is CMN-GOMS. The exam framing: 'explain GOMS, write a CMN-GOMS analysis with methods and selection rules, and relate the hierarchy to KLM timing.'",
            ],
            keyTerms: [
              { term: "GOMS", definition: "Goals, Operators, Methods, Selection rules - a family of models of skilled computer activity." },
              { term: "Goal", definition: "What the user wants to achieve; goals decompose into subgoals in a hierarchy." },
              { term: "Method", definition: "A learned sequence of operators and subgoals that accomplishes a goal." },
              { term: "Selection rule", definition: "A condition choosing among alternative methods ('IF filename known THEN ...')." },
              { term: "CMN-GOMS", definition: "The original strict-hierarchy GOMS variant; the KLM is its flat special case." },
            ],
            diagram: {
              kind: "pyramid",
              title: "The CMN-GOMS hierarchy",
              caption: "Goals decompose into methods, methods into operators; selection rules choose among methods.",
              tiers: [
                { label: "GOAL", note: "what the user wants - 'delete the file'" },
                { label: "METHOD", note: "a learned sequence of subgoals and operators" },
                { label: "OPERATOR", note: "atomic timed actions - K, P, M, H" },
                { label: "SELECTION RULE", note: "condition choosing among methods - 'IF name known...'" },
              ],
            },
            bullets: [
              "GOMS = Goals, Operators, Methods, Selection rules.",
              "CMN-GOMS: strict goal hierarchy; each goal expands into a method.",
              "Selection rules choose methods: 'IF filename known THEN command ELSE browse'.",
              "Structure on top, KLM arithmetic underneath - methods are priced by operators.",
              "Worked: Method 1 (command) ≈ M + 2K + nK + K; Method 2 (browse) ≈ H + M P BB M P BB.",
              "Every selection rule is a design fork the interface must support.",
            ],
            codeExample: {
              language: "text",
              caption: "CMN-GOMS for 'delete file' (operator times in brackets)",
              code: `GOAL: DELETE-FILE
  * Method 1: command known
    M (1.35)   recall command
    K K (0.4)  type "rm"
    n*K        type filename
    K          press Enter
  * Method 2: browse
    H (0.4)    hand to mouse
    M P BB     locate + select icon
    M P BB     locate + click Delete
  * Selection rule:
    IF filename is known
       THEN use Method 1
       ELSE use Method 2`,
            },
            callout: {
              type: "tip",
              title: "Structure decides, operators price",
              body: "The one-line relationship that ties Unit III together: GOMS supplies the structure, the KLM supplies the arithmetic. In an analysis answer, present the hierarchy first, then attach times - examiners look for the decomposition before the numbers.",
            },
            examQuestions: [
              {
                q: "Explain the GOMS model and its four components. Write selection rules for a task with two alternative methods.",
                marks: 7,
                outline: [
                  "Goals: what the user wants, arranged hierarchically",
                  "Operators: atomic timed actions (K, P, M, H)",
                  "Methods: learned operator/subgoal sequences per goal",
                  "Selection rules: conditions choosing among methods",
                  "Example: IF filename known THEN command method ELSE browse method",
                ],
              },
              {
                q: "Perform a CMN-GOMS analysis for deleting a file, giving the full goal hierarchy, two methods with operators and the selection rule. Explain how the structure relates to HTA and how operator times turn the analysis into a prediction.",
                marks: 14,
                outline: [
                  "GOAL: DELETE-FILE at the hierarchy root",
                  "Method 1: recall + type 'rm' + filename + Enter (M, K's)",
                  "Method 2: homing + two point-select rounds (H, M P BB)",
                  "Selection rule: IF filename known THEN Method 1 ELSE Method 2",
                  "The hierarchy mirrors HTA - each decomposition is an interface requirement",
                  "Operator times price each method: about 2.75 s vs about 5.7 s",
                  "Variants: NGOMSL and CPM-GOMS extend the family",
                ],
              },
            ],
          },
          {
            number: "3.6",
            title: "State transition networks and the three-state model",
            body: [
              "A state transition network describes a dialog as states (screens, modes, waiting conditions) and arcs (user actions that move between them). Each state names what the system is prepared to accept; each arc names the action and the resulting state. Hierarchical STNs nest sub-dialogs inside states so a full system fits on a page. The notation's strength is testability: every dialog path is walkable, unreachable states and dead ends are visible, and the diagram doubles as documentation.",
              "The three-state model (Raskin) applies the same idea to the humble mouse. State 0 is tracking - the pointer moves freely over the screen; State 1 is creep - a button is held, so dragging is precise and slow; State 2 is keyboard - attention is in text entry and the pointer is irrelevant. Transitions: a held-button press enters State 1, release returns to State 0; any keystroke enters State 2; a click in the text region returns to State 0. Point-and-drag interfaces live entirely in States 0-1; a mouse-only user may never enter State 2.",
              "STN analysis also exposes the classic dialog diseases: mode errors (one action, two meanings depending on state), unreachable states, and dialogs that trap the user with no exit arc. The exam framing: 'draw a state transition network for a login or ATM dialog and explain Raskin's three-state model' - draw states as boxes with labelled arcs, then map mouse behaviour onto States 0, 1 and 2.",
            ],
            keyTerms: [
              { term: "State transition network (STN)", definition: "A dialog represented as states connected by arcs labelled with user actions." },
              { term: "State", definition: "A condition of the dialog naming what the system will accept next." },
              { term: "Transition arc", definition: "A labelled user action that moves the dialog from one state to another." },
              { term: "Three-state model", definition: "Raskin's model of mouse interaction: State 0 tracking, State 1 creep, State 2 keyboard." },
              { term: "Mode error", definition: "The same action meaning different things in different states - the STN hazard." },
            ],
            diagram: {
              kind: "flow",
              title: "Raskin's three states of the mouse",
              caption: "Tracking, creep, keyboard - and the transitions between them.",
              steps: [
                { label: "State 0 - Tracking", note: "pointer moves freely; the resting state" },
                { label: "State 1 - Creep", note: "button held - drag; slow, precise" },
                { label: "State 2 - Keyboard", note: "text entry; pointer ignored" },
              ],
            },
            bullets: [
              "STN: states = what the system accepts; arcs = user actions between them.",
              "Hierarchical STNs nest sub-dialogs so a full system fits on one page.",
              "Analysis finds: unreachable states, dead ends, mode errors.",
              "State 0 tracking (free pointer), State 1 creep (button held, dragging), State 2 keyboard.",
              "Transitions: held press enters creep; release returns; a keystroke enters keyboard; a click leaves it.",
              "Point-and-drag interfaces need only States 0-1 - mouse-only users may never reach State 2.",
            ],
            table: {
              caption: "State - meaning - entered by - left by.",
              headers: ["State", "Meaning", "Entered by", "Left by"],
              rows: [
                ["0 - Tracking", "free pointer movement", "start-up; button release; click", "held-button press; key press"],
                ["1 - Creep", "drag with button held", "held-button press", "button release"],
                ["2 - Keyboard", "text entry focus", "any keystroke", "click or pointer action"],
              ],
            },
            callout: {
              type: "warning",
              title: "One action, two meanings",
              body: "A mode error happens when the same action means different things in different states - Delete sorts a list in one mode and erases a file in another. STNs make modes visible; the design cure is fewer states, or state indicators the user cannot miss.",
            },
            examQuestions: [
              {
                q: "What is a state transition network? Draw an STN for an ATM PIN-entry dialog and state two strengths and two weaknesses of the notation.",
                marks: 7,
                outline: [
                  "States: what the system accepts; arcs: user actions",
                  "Example: start -> card in -> PIN prompt -> (ok -> services | wrong PIN -> retry / confiscate)",
                  "Strengths: walkable paths, visible dead ends, documentation",
                  "Weaknesses: state explosion, ignores user goals and timing",
                  "Hierarchical STNs tame the explosion",
                ],
              },
              {
                q: "Explain state transition networks and Raskin's three-state model. Describe each mouse state, its transitions, and how STN analysis reveals dialog defects such as mode errors and unreachable states.",
                marks: 14,
                outline: [
                  "STN definition: states, arcs, hierarchical nesting",
                  "State 0 tracking: pointer free - the resting state",
                  "State 1 creep: button held - precise dragging",
                  "State 2 keyboard: text entry; pointer irrelevant",
                  "Transitions: press/release, keystroke in, click out",
                  "Analysis: unreachable states, dead ends, mode errors",
                  "Design cure: fewer states, unmistakable state indicators",
                ],
              },
            ],
          },
          {
            number: "3.7",
            title: "The Glimpse model and physical models",
            body: [
              "The Glimpse model prices looking. Raskin adds the operator G to GOMS: the time to extract a piece of information from the display at a glance. Its magnitude comes from reading rates - 150-300 words per minute means a short label or status read costs roughly 0.3 s - so a dashboard whose interpretation needs three glances spends nearly a second per check, while a single glanceable indicator spends 0.3. G formalises why reducing the number of things a user must read is a performance intervention.",
              "Physical models are the mathematical end of the spectrum: closed-form predictions from measurable geometry. Fitts' law predicts pointing time from target distance and width (the next section). Hick's law predicts decision time from the number of choices: RT = a + b·log2(n + 1) - eight menu options cost about log2(9) ≈ 3.2 bits of decision. The steering law predicts the time to trace a tunnel of width W(s): T = a ∫ ds/W(s) - narrow paths are disproportionately expensive.",
              "Together they answer different questions: glimpse - how costly is verifying the state? Hick - how costly is choosing among options? Fitts - how costly is reaching the target? Steering - how costly is following the path? The exam framing: 'explain the Glimpse operator and state the physical models with their formulas and design implications' - one formula and one implication each is the expected shape.",
            ],
            keyTerms: [
              { term: "Glimpse operator (G)", definition: "Raskin's GOMS operator: the time to read one displayed chunk at a glance, ~0.3 s." },
              { term: "Physical model", definition: "A closed-form prediction of interaction time from measurable geometry." },
              { term: "Hick's law", definition: "RT = a + b·log2(n + 1) - decision time grows logarithmically with the number of options." },
              { term: "Steering law", definition: "T = a ∫ ds/W(s) - the time to trace a tunnel grows as its width shrinks." },
              { term: "Reading rate", definition: "150-300 wpm - the empirical basis for the glimpse estimate." },
            ],
            diagram: {
              kind: "compare",
              title: "The cost of looking and the cost of moving",
              caption: "Glimpse prices verification; Fitts, Hick and steering price motion and choice.",
              left: {
                heading: "Glimpse - the cost of looking",
                items: [
                  "G = time to read one displayed chunk",
                  "Derived from 150-300 wpm reading - ~0.3 s per label",
                  "Fewer glances = faster dashboards",
                  "Fits GOMS as an operator alongside K, P, M",
                ],
              },
              right: {
                heading: "Physical models - the cost of moving",
                items: [
                  "Fitts: MT = a + b·log2(2D/W) - pointing",
                  "Hick: RT = a + b·log2(n + 1) - choosing among n options",
                  "Steering: T = a ∫ ds/W(s) - tracing tunnels",
                  "All closed-form: geometry in, seconds out",
                ],
              },
            },
            bullets: [
              "Glimpse G: the time to extract information at a glance - ~0.3 s per short label.",
              "G is a GOMS operator: reading costs count like keystrokes.",
              "Hick's law: RT = a + b·log2(n + 1) - more options, logarithmically slower decisions.",
              "Steering law: narrow tunnels are disproportionately expensive to trace.",
              "Physical models are closed-form: measurable geometry in, seconds out.",
              "Design implications: glanceable status, fewer options, wide paths.",
            ],
            codeExample: {
              language: "python",
              caption: "hick.py - decision and verification costs, computed",
              code: `import math

A, B = 0.20, 0.15                      # Hick's law constants (s, s/bit)

def hick(n):
    return A + B * math.log2(n + 1)    # choice reaction time

print(hick(4))    # 0.53 s for 4 options
print(hick(12))   # 0.74 s for 12 options

G = 0.3                                # one glimpse of a short label
print(3 * G, 1 * G)                    # 3-glance dashboard 0.9 s vs 1-glance 0.3 s`,
            },
            callout: {
              type: "exam",
              title: "Four models, four questions",
              body: "The examiner's shorthand: glance (G), choose (Hick), reach (Fitts), trace (steering). Naming which model answers which question - with one formula each - is the full answer to almost any 'physical models' short note.",
            },
            examQuestions: [
              {
                q: "Explain the Glimpse model. How is the G operator derived from reading rates, and how does it change the predicted cost of a dashboard check?",
                marks: 7,
                outline: [
                  "G = time to extract one piece of displayed information",
                  "Reading 150-300 wpm -> ~0.3 s per short label",
                  "G is added to GOMS as an operator alongside K, P, M",
                  "A dashboard needing three glances costs ~0.9 s per check; one indicator ~0.3 s",
                  "Design: reduce the number of things the user must read",
                ],
              },
              {
                q: "Describe physical and performance models in HCI: the Glimpse operator, Hick's law, the steering law and Fitts' law. Give each formula, a worked number and one interface design implication.",
                marks: 14,
                outline: [
                  "Glimpse: G ≈ 0.3 s per label, from reading rates",
                  "Hick: RT = a + b·log2(n + 1); 8 options ≈ 3.2 bits of decision",
                  "Steering: T = a ∫ ds/W(s); narrow tunnels cost disproportionately",
                  "Fitts: MT = a + b·log2(2D/W); distance up / width down slows pointing",
                  "Worked numbers for each (dashboard, 8-item menu, target example)",
                  "Implications: glanceable status, short menus, large near targets, wide paths",
                  "All are closed-form: measurable geometry predicts time",
                ],
              },
            ],
          },
          {
            number: "3.8",
            title: "Fitts' law",
            body: [
              "Fitts' law is the most quoted physical model in HCI: movement time to a target grows with distance and shrinks with target width, MT = a + b·log2(2D/W), where D is the amplitude (distance to target centre), W the target width along the movement axis, and the logarithmic term is the index of difficulty ID in bits. The intercept a is the start/stop overhead and the slope b - whose reciprocal 1/b is the index of performance - captures the human rate of information transfer, roughly 10 bits per second for pointing.",
              "A worked trace: D = 200 mm, W = 20 mm gives ID = log2(2 × 200 / 20) = log2(20) ≈ 4.3 bits; with a = 0.1 s, b = 0.1 s/bit, MT ≈ 0.1 + 0.43 ≈ 0.53 s. Halve the distance or double the width and ID falls by one bit - about 0.1 s. Double D and halve W together: ID rises from 4.3 to log2(80) ≈ 6.3, MT ≈ 0.73 s - roughly a 40 per cent penalty for one careless dialog placement.",
              "The design corollaries are geometric: make frequent targets large and near; place destructive actions away from frequent ones (distance is the error brake); exploit screen edges, where target width is effectively infinite; and prefer pie or radial menus, whose items sit at large W and equal D. The exam framing: 'state Fitts' law, define ID, and compute movement times for two targets' - the numerical is near-certain and the corollaries are its interpretation.",
            ],
            keyTerms: [
              { term: "Fitts' law", definition: "MT = a + b·log2(2D/W) - movement time from target distance and width." },
              { term: "Amplitude (D)", definition: "The distance from the start point to the target centre." },
              { term: "Target width (W)", definition: "The target's size measured along the direction of movement." },
              { term: "Index of difficulty (ID)", definition: "ID = log2(2D/W) in bits - the informational difficulty of the movement." },
              { term: "Index of performance", definition: "IP = 1/b, the human information-transfer rate, roughly 10 bits/s for pointing." },
            ],
            diagram: {
              kind: "matrix",
              title: "The Fitts quadrants",
              caption: "Distance and width trade against each other; design lives in the large-and-near corner.",
              axes: { x: "Distance to target (near -> far)", y: "Target width (small -> large)" },
              quadrants: [
                { label: "Small + near", note: "reachable quickly, easy to miss - the danger zone" },
                { label: "Small + far", note: "worst case: slow and error-prone" },
                { label: "Large + near", note: "the design sweet spot - fast and safe" },
                { label: "Large + far", note: "acceptable; screen edges make W effectively infinite" },
              ],
            },
            bullets: [
              "MT = a + b·log2(2D/W); the log term is the index of difficulty in bits.",
              "a = start/stop overhead; 1/b = index of performance (~10 bits/s).",
              "Worked: D = 200, W = 20 -> ID ≈ 4.3 bits, MT ≈ 0.53 s.",
              "Careless placement (D doubled, W halved): ID ≈ 6.3, MT ≈ 0.73 s.",
              "Design: frequent targets large and near; destructive targets far.",
              "Screen edges give infinite width; pie menus keep W large at fixed D.",
            ],
            codeExample: {
              language: "python",
              caption: "fitts.py - two targets, one law",
              code: `import math

A, B = 0.10, 0.10                  # seconds; s/bit (IP = 10 bits/s)

def fitts(D_mm, W_mm):
    id_bits = math.log2(2 * D_mm / W_mm)
    return id_bits, A + B * id_bits

print(fitts(200, 20))   # (4.32, 0.53)  - near, wide: fast
print(fitts(400, 10))   # (6.32, 0.73)  - far, narrow: ~40% slower
# halve D or double W -> ID drops one bit (~0.1 s)`,
            },
            callout: {
              type: "exam",
              title: "One bit is one tenth",
              body: "With b = 0.1 s/bit, each halving of distance or doubling of width buys about 0.1 s - a unit conversion examiners love. In numericals, compute ID first, then MT; and remember W is measured along the direction of movement.",
            },
            examQuestions: [
              {
                q: "State Fitts' law, define the index of difficulty and the index of performance, and compute the movement time for D = 200 mm and W = 20 mm with a = 0.1 s, b = 0.1 s/bit.",
                marks: 7,
                outline: [
                  "MT = a + b·log2(2D/W); D amplitude, W target width",
                  "ID = log2(2D/W) in bits; IP = 1/b",
                  "ID = log2(2 × 200 / 20) = log2(20) ≈ 4.32 bits",
                  "MT ≈ 0.1 + 0.1 × 4.32 ≈ 0.53 s",
                  "W is measured along the movement direction",
                ],
              },
              {
                q: "Derive the design implications of Fitts' law for menu and button placement. Support each implication with the formula and a worked calculation, and explain why screen edges and pie menus are fast targets.",
                marks: 14,
                outline: [
                  "MT = a + b·log2(2D/W); difficulty grows with D, shrinks with W",
                  "Worked: (200, 20) -> ID 4.3, MT 0.53 s; (400, 10) -> ID 6.3, MT 0.73 s",
                  "Implication 1: frequent targets large and near",
                  "Implication 2: destructive targets far from frequent ones - distance as the error brake",
                  "Screen edges: W effectively infinite -> the fastest targets on screen",
                  "Pie menus: large W and equal D per item -> faster than linear menus",
                  "One bit of difficulty costs about b ≈ 0.1 s at typical performance",
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
      title: "Guidelines in HCI and Collaboration",
      summary:
        "Unit IV collects the rules and the machinery: Shneiderman's eight golden rules, Norman's seven principles and his execution-evaluation model of interaction, Nielsen's ten heuristics with the three evaluation methods that operationalise them, face-to-face and text-based communication with group working, and dialog design - notations, semantics and analysis.",
      chapter: {
        number: "04",
        title: "Rules, Gulfs and Dialogs",
        intro:
          "Unit IV covers Shneiderman's eight golden rules, Norman's seven principles, Norman's model of interaction, Nielsen's ten heuristics, heuristic evaluation, contextual evaluation and cognitive walkthrough, face-to-face communication and conversation, text-based communication and group working, dialog design notations (diagrammatic and textual), dialog semantics, and dialog analysis and design.",
        inOneBreath:
          "Shneiderman's eight golden rules and Norman's seven principles are the design checklist; Norman's model locates the two gulfs through seven stages of action; Nielsen's ten heuristics power heuristic evaluation alongside cognitive walkthroughs and contextual inquiry; conversation runs on grounding and turn-taking; and dialogs are written in STNs, BNF and production rules before being analysed for reachability and mode errors.",
        sections: [
          {
            number: "4.1",
            title: "Shneiderman's eight golden rules",
            body: [
              "Shneiderman's eight golden rules are the design checklist distilled in Designing the User Interface: strive for consistency; enable frequent users to use shortcuts; offer informative feedback; design dialogs to yield closure; offer error prevention and simple error handling; permit easy reversal of actions; support internal locus of control; reduce short-term memory load. Each rule is one sentence long and a lifetime to keep - which is precisely why examiners ask for the list with an example attached to every rule.",
              "Worked instances make the rules concrete: consistency - the same delete gesture everywhere, the same vocabulary; shortcuts - Ctrl+S for the expert while the novice uses the menu; informative feedback - a progress bar and a confirmation toast, not silence; closure - the three-step checkout with visible steps; error prevention - a date picker instead of a free date field; easy reversal - undo and confirm-destructive dialogs; locus of control - the user initiates, the system never hijacks; memory load - visible options instead of remembered codes.",
              "The rules earn their 'golden' by being checkable in review: a design review can walk each rule against each screen and record pass or fail, which is why they pair naturally with heuristic evaluation. The exam framing: 'state Shneiderman's eight golden rules and illustrate each with an example' - the full list, no abbreviation, is the question's first half; the examples are its second.",
            ],
            keyTerms: [
              { term: "Golden rules", definition: "Shneiderman's eight principles for interface design - the field's standard checklist." },
              { term: "Closure", definition: "Dialogs with visible beginnings, middles and ends, so users know an action is complete." },
              { term: "Internal locus of control", definition: "The user initiates and steers; the system never hijacks the interaction." },
              { term: "Informative feedback", definition: "Every action answered promptly and meaningfully - progress, confirmation, outcome." },
              { term: "Easy reversal", definition: "Actions can be undone; destructive ones are guarded by confirmation." },
            ],
            diagram: {
              kind: "layers",
              title: "The eight rules, grouped",
              caption: "A grammar, a conversation, a safety net and a stance of respect.",
              layers: [
                { label: "The grammar", note: "strive for consistency · enable shortcuts" },
                { label: "The conversation", note: "informative feedback · dialogs that yield closure" },
                { label: "The safety net", note: "error prevention + simple handling · easy reversal" },
                { label: "The respect", note: "internal locus of control · reduced short-term memory load" },
              ],
            },
            bullets: [
              "1 Consistency: same gesture, same vocabulary, everywhere.",
              "2 Shortcuts: Ctrl+S for experts, menus for novices.",
              "3 Informative feedback: progress and confirmation - never silence.",
              "4 Closure: visible steps that end clearly (three-step checkout).",
              "5-6 Prevention and reversal: date pickers not free dates; undo everywhere.",
              "7-8 Locus of control and memory load: the user initiates; options visible, not memorised.",
            ],
            table: {
              caption: "Rule - meaning - interface instance.",
              headers: ["Rule", "Meaning", "Instance"],
              rows: [
                ["Strive for consistency", "same action, same look, same words", "one delete gesture app-wide"],
                ["Enable shortcuts", "experts bypass the novice path", "Ctrl+S beside File > Save"],
                ["Offer informative feedback", "every action answered promptly", "progress bar + toast"],
                ["Design dialogs to yield closure", "beginnings, middles and clear ends", "stepped checkout"],
                ["Error prevention + simple handling", "stop errors before they happen", "date picker, greyed invalid options"],
                ["Permit easy reversal", "actions are undoable", "undo; confirm before delete"],
                ["Support internal locus of control", "the user initiates and steers", "no forced animations or hijacks"],
                ["Reduce short-term memory load", "show, do not make recall", "visible options, defaults"],
              ],
            },
            callout: {
              type: "exam",
              title: "Eight, in order, with examples",
              body: "The list question fails on abbreviation: seven rules out of eight is half marks. Memorise the eight in order and carry one five-word example each - the example is what converts the list from recall into understanding.",
            },
            examQuestions: [
              {
                q: "State Shneiderman's eight golden rules of interface design.",
                marks: 7,
                outline: [
                  "Strive for consistency; enable frequent users to use shortcuts",
                  "Offer informative feedback; design dialogs to yield closure",
                  "Offer error prevention and simple error handling",
                  "Permit easy reversal of actions",
                  "Support internal locus of control; reduce short-term memory load",
                ],
              },
              {
                q: "Explain Shneiderman's eight golden rules, illustrating each rule with a concrete interface example, and show how the rules support a design review of a web checkout flow.",
                marks: 14,
                outline: [
                  "Consistency: one gesture and vocabulary across the flow",
                  "Shortcuts: express checkout for returning users",
                  "Informative feedback: progress indicators at each step",
                  "Closure: visible beginning, middle and confirmation end",
                  "Error prevention + handling: card validation before submit; clear error text",
                  "Easy reversal: edit-cart and back steps; undo removals",
                  "Locus of control + memory load: user-driven steps; summary visible, not remembered",
                ],
              },
            ],
          },
          {
            number: "4.2",
            title: "Norman's seven principles",
            body: [
              "Norman's principles (as collected in Dix et al.) are the cognitive toolkit behind everyday usability: use both knowledge in the world and knowledge in the head; simplify the structure of tasks; make things visible - bridge the gulfs of execution and evaluation; get the mappings right; exploit the powers of constraint; design for error; when all else fails, standardise. Each answers a predictable failure: not knowing what to do, tasks too complex, states hidden, controls that do not line up with effects, impossible actions allowed, errors punished, and unfamiliarity with no convention to lean on.",
              "Worked instances: knowledge in the world - labelled keys instead of memorised codes; simplification - a wizard splits a terrifying form into five steps; visibility - a status bar and progress indicator bridge both gulfs; mapping - stove knobs arranged like the burners they control; constraint - greyed-out menu items make invalid choices impossible rather than punishable; design for error - undo converts mistakes into cheap experiments; standardisation - Ctrl+C means copy because the world agreed.",
              "The principles are diagnostic as much as prescriptive: when a design fails, name the violated principle and the repair follows. Confusion about what can be clicked is visibility; surprise at what a control did is mapping; an unrecoverable mistake is design-for-error; users forced to memorise codes is knowledge in the head with none in the world. The exam framing: 'state Norman's seven principles with an example of each' - the same shape as the golden-rules question.",
            ],
            keyTerms: [
              { term: "Knowledge in the head / world", definition: "What the user must remember vs what the interface displays - label, do not make memorise." },
              { term: "Simplification", definition: "Restructuring tasks into steps, defaults and automation (wizards)." },
              { term: "Natural mapping", definition: "Controls arranged so their layout mirrors the effects they produce." },
              { term: "Constraint", definition: "Making wrong actions impossible or difficult - greyed items, input masks." },
              { term: "Standardisation", definition: "Adopting conventions when design freedom has failed - Ctrl+C is copy everywhere." },
            ],
            diagram: {
              kind: "fork",
              title: "Which principle fixes this failure?",
              caption: "Norman's principles are diagnostic: name the failure, the principle names the repair.",
              start: "What exactly went wrong?",
              branches: [
                { label: "User cannot see what to do", outcome: "make things visible - status, options, feedback", good: true },
                { label: "Control and effect do not line up", outcome: "get the mappings right - layout mirrors function", good: true },
                { label: "An impossible action was allowed", outcome: "exploit constraint - grey out, structure input", good: true },
                { label: "An error happened anyway", outcome: "design for error - undo, forgiving dialogs", good: true },
              ],
            },
            bullets: [
              "1 Use knowledge in the world and in the head - label, do not make memorise.",
              "2 Simplify the structure of tasks - wizards, defaults, automation.",
              "3 Make things visible - bridge the execution and evaluation gulfs.",
              "4 Get the mappings right - controls arranged like their effects.",
              "5 Exploit constraint - greyed options make errors impossible.",
              "6-7 Design for error, then standardise - undo for mistakes, conventions when design freedom fails.",
            ],
            table: {
              caption: "Principle - question - example.",
              headers: ["Principle", "Question it answers", "Example"],
              rows: [
                ["Knowledge in world + head", "must the user memorise?", "labelled keys, visible codes"],
                ["Simplify structure", "is the task too complex?", "five-step wizard"],
                ["Visibility", "is state perceivable?", "status bar, progress"],
                ["Mappings", "do controls line up with effects?", "stove knob layout"],
                ["Constraint", "can impossible acts happen?", "greyed menu items"],
                ["Design for error", "is error punished or cheap?", "undo, confirm delete"],
                ["Standardise", "is there a convention?", "Ctrl+C = copy"],
              ],
            },
            callout: {
              type: "tip",
              title: "Diagnose, then prescribe",
              body: "The principles double as a failure taxonomy. In an evaluation answer, do not just list them - take one broken screen and name the violated principle plus the repair. One diagnosed failure earns more than seven memorised definitions.",
            },
            examQuestions: [
              {
                q: "State Norman's seven principles of interface design with one example of each.",
                marks: 7,
                outline: [
                  "Use both knowledge in the world and knowledge in the head",
                  "Simplify the structure of tasks; make things visible",
                  "Get the mappings right; exploit the powers of constraint",
                  "Design for error",
                  "When all else fails, standardise",
                ],
              },
              {
                q: "Explain Norman's seven principles in detail. For each, describe the failure it prevents and a worked interface example, and show how the principles diagnose a given broken design.",
                marks: 14,
                outline: [
                  "Knowledge in world + head: labels vs memorised codes",
                  "Simplification: wizards split complex forms",
                  "Visibility: status bars bridge both gulfs",
                  "Mapping: stove knobs mirror burners; slider directions",
                  "Constraint: greyed invalid choices; input masks",
                  "Design for error: undo converts mistakes into experiments",
                  "Standardisation: Ctrl+C; diagnosis example - surprise = mapping violation",
                ],
              },
            ],
          },
          {
            number: "4.3",
            title: "Norman's model of interaction",
            body: [
              "Norman's model of interaction describes the cycle every action follows and the two gulfs that break it. The user forms a goal, forms an intention, specifies the action, executes it; the system shows a state, the user perceives it, interprets it, and evaluates the outcome against the goal. The gulf of execution sits between intention and execution: the distance between what the user means to do and what the system makes possible. The gulf of evaluation sits between the system's presentation and the user's understanding: how far the display is from the answer the user needs.",
              "A worked example: an old VCR's clock. Setting it demands a hidden button sequence over a blinking 12:00 - an enormous execution gulf (the actions are unknowable) and an evaluation gulf (did it take? the display says nothing). Compare a microwave: numbers you type, a countdown you watch - both gulfs nearly zero. The model's diagnostic power is pointing at the stage where a task failed: a user who pressed the wrong control failed at specify (execution gulf); a user who could not tell whether the save happened failed at evaluate (evaluation gulf).",
              "The model also organises error theory: slips happen at the execution stages - the intention was right, the action wrong (lapses are memory slips); mistakes happen earlier - the intention itself was wrong. Design responses differ: slips call for constraint and confirmation; mistakes call for better information and previews. The exam framing: 'draw Norman's seven stages of action, label the two gulfs, and use the model to analyse a failed interaction.'",
            ],
            keyTerms: [
              { term: "Gulf of execution", definition: "The distance between the user's intentions and the actions the system allows." },
              { term: "Gulf of evaluation", definition: "The distance between the system's presentation and the user's understanding of it." },
              { term: "Seven stages of action", definition: "Goal, intention, specify, execute, perceive, interpret, evaluate - Norman's action cycle." },
              { term: "Slip vs mistake", definition: "Slip: right intention, wrong action (execution side). Mistake: wrong intention itself." },
              { term: "System image", definition: "What the user actually sees and hears - the material from which mental models are built." },
            ],
            diagram: {
              kind: "cycle",
              title: "Norman's seven stages of action",
              caption: "Goals to outcomes and back - with the two gulfs where understanding breaks.",
              steps: [
                { label: "Goal", note: "what I want" },
                { label: "Intention", note: "what I will do about it" },
                { label: "Specify + Execute", note: "gulf of execution: meaning -> allowed actions" },
                { label: "Perceive", note: "the system shows its state" },
                { label: "Interpret", note: "gulf of evaluation: display -> understanding" },
                { label: "Evaluate", note: "did the outcome meet the goal?" },
              ],
            },
            bullets: [
              "Seven stages: goal, intention, specify, execute, perceive, interpret, evaluate.",
              "Gulf of execution: between the user's meaning and the system's allowed actions.",
              "Gulf of evaluation: between the system's display and the user's understanding.",
              "VCR clock: huge gulfs on both sides; microwave: nearly zero.",
              "Slips: wrong action, right intention (execution side); mistakes: wrong intention.",
              "Repairs: execution gulfs need constraints and affordances; evaluation gulfs need visible feedback.",
            ],
            table: {
              caption: "Stage cluster - user question - failure mode.",
              headers: ["Stage cluster", "User question", "Failure mode"],
              rows: [
                ["Goal / intention", "what do I want?", "mistake: wrong intention"],
                ["Specify / execute", "how do I do it here?", "slip: wrong control"],
                ["Perceive / interpret", "what happened?", "unreadable state"],
                ["Evaluate", "did it work?", "silent systems, ambiguous feedback"],
              ],
            },
            callout: {
              type: "exam",
              title: "Name the gulf, then the fix",
              body: "Any 'analyse this interface with Norman's model' question wants the stage located first ('the user failed at specify'), then the gulf named ('execution gulf'), then the repair ('constraint or clearer affordance'). Stage -> gulf -> repair is the full three-mark pattern.",
            },
            examQuestions: [
              {
                q: "Draw Norman's model of interaction with the seven stages of action. Label the gulf of execution and the gulf of evaluation.",
                marks: 7,
                outline: [
                  "Stages: goal, intention, specify, execute, perceive, interpret, evaluate",
                  "Execution gulf: between intention/specify and the system's actions",
                  "Evaluation gulf: between the system's display and interpretation",
                  "The cycle closes: evaluation updates the goal",
                  "The system image is what the user actually sees",
                ],
              },
              {
                q: "Use Norman's model to analyse a failed interaction (for example, a user unable to confirm whether a document was saved). Identify the stage, the gulf, the error type and the design repair; distinguish slips from mistakes.",
                marks: 14,
                outline: [
                  "Walk the seven stages for the save action",
                  "Failure: perceive/interpret - no visible confirmation",
                  "Gulf: evaluation - the display is far from the answer 'did it save?'",
                  "Error type: evaluation-side confusion; slips vs mistakes defined",
                  "Slips: right intention, wrong action - constraint and confirmation help",
                  "Mistakes: wrong intention - better information and previews help",
                  "Repair: explicit status ('Saved 12:41') and undo for wrong saves",
                ],
              },
            ],
          },
          {
            number: "4.4",
            title: "Nielsen's ten heuristics",
            body: [
              "Nielsen's ten usability heuristics are the most-cited checklist in the field: visibility of system status; match between system and the real world; user control and freedom; consistency and standards; error prevention; recognition rather than recall; flexibility and efficiency of use; aesthetic and minimalist design; help users recognise, diagnose and recover from errors; help and documentation. They are heuristics, not rules - broad principles applied with judgment, which is what makes them usable as an evaluation instrument rather than a conformance standard.",
              "Worked instances: visibility - a progress bar during upload, a 'saved' timestamp; match - shopping 'cart', files in 'trash', not 'database record repository'; control and freedom - undo and a clearly marked escape from any state; error prevention - a date picker, greyed invalid options; recognition - icons with labels rather than command memorisation; flexibility - shortcuts and macros for experts; minimalist design - every element earns its pixels or leaves; error messages that say what happened and what to do; help written for real tasks.",
              "The heuristics pair with evaluation: inspectors walk an interface and flag violations with severity ratings (section 4.5), which turns the ten principles into a repeatable audit. The exam framing: 'list Nielsen's ten heuristics and illustrate any five with interface examples' - the full list first, then examples; that two-part shape is how the question is always asked.",
            ],
            keyTerms: [
              { term: "Usability heuristic", definition: "A broad design principle applied with judgment - Nielsen's ten are the standard set." },
              { term: "Visibility of system status", definition: "The system keeps the user informed through timely, visible feedback." },
              { term: "Recognition vs recall", definition: "Show options and meanings rather than forcing the user to remember them." },
              { term: "Error prevention", definition: "Design so errors cannot happen, ahead of designing good error messages." },
              { term: "Minimalist design", definition: "Every element earns its pixels; decorative noise is removed." },
            ],
            diagram: {
              kind: "compare",
              title: "Ten heuristics, two audiences",
              caption: "Half speak to what the system shows, half to what the user must do.",
              left: {
                heading: "What the system shows",
                items: [
                  "Visibility of system status",
                  "Match between system and the real world",
                  "Consistency and standards",
                  "Error messages: recognise, diagnose, recover",
                  "Help and documentation",
                ],
              },
              right: {
                heading: "What the user must do",
                items: [
                  "User control and freedom (undo, escape)",
                  "Error prevention over error messages",
                  "Recognition rather than recall",
                  "Flexibility and efficiency: shortcuts",
                  "Aesthetic and minimalist design",
                ],
              },
            },
            bullets: [
              "1 Visibility of status; 2 match with the real world; 3 user control and freedom.",
              "4 Consistency and standards; 5 error prevention.",
              "6 Recognition over recall; 7 flexibility and efficiency of use.",
              "8 Aesthetic and minimalist design.",
              "9 Errors: recognise, diagnose, recover; 10 help and documentation.",
              "Heuristics, not rules: applied with judgment as an audit instrument.",
            ],
            table: {
              caption: "Heuristic - typical violation.",
              headers: ["#", "Heuristic", "Typical violation"],
              rows: [
                ["1", "Visibility of system status", "silent uploads; no saved confirmation"],
                ["2", "Match with the real world", "jargon: 'abort', 'execute macro'"],
                ["3", "User control and freedom", "no undo; dead-end dialogs"],
                ["4", "Consistency and standards", "two delete gestures; custom Ctrl keys"],
                ["5", "Error prevention", "free-text dates; no input masks"],
                ["6", "Recognition rather than recall", "icon-only toolbars; memorised codes"],
                ["7", "Flexibility and efficiency", "no shortcuts; novices-only paths"],
                ["8", "Aesthetic and minimalist design", "decorative noise; 40-field forms"],
                ["9", "Recognise, diagnose, recover errors", "'Error 500' with no remedy"],
                ["10", "Help and documentation", "no search; help about features not tasks"],
              ],
            },
            callout: {
              type: "exam",
              title: "Ten, then five examples",
              body: "The question shape is fixed: full list of ten, then illustrate five. Write the ten first, numbered, in Nielsen's own order - the order itself signals memorisation - and attach the five examples to heuristics you can instantiate fastest.",
            },
            examQuestions: [
              {
                q: "List Nielsen's ten usability heuristics and illustrate any five with concrete interface examples.",
                marks: 7,
                outline: [
                  "The ten, in order: visibility, match, control, consistency, prevention",
                  "Recognition, flexibility, minimalism, error recovery, help",
                  "Examples: progress bar; cart and trash; undo; date picker; icon + label",
                  "Heuristics are judgment principles, not conformance rules",
                  "They anchor heuristic evaluation (section 4.5)",
                ],
              },
              {
                q: "Explain Nielsen's ten heuristics in detail with examples for each, and show how three of them would be used to evaluate a web registration form.",
                marks: 14,
                outline: [
                  "All ten stated with a one-line meaning each",
                  "Visibility: live validation states on the form",
                  "Error prevention: input masks, password strength feedback",
                  "Recognition: labels beside fields; visible requirements",
                  "Error recovery: messages naming the field and the fix",
                  "Minimalism: only necessary fields; progressive disclosure",
                  "Help: task-oriented guidance beside the form",
                ],
              },
            ],
          },
          {
            number: "4.5",
            title: "Heuristic evaluation, contextual evaluation and cognitive walkthrough",
            body: [
              "Heuristic evaluation is expert inspection: three to five evaluators check an interface against Nielsen's heuristics independently, then aggregate findings with severity ratings (0 = not a problem to 4 = catastrophic). Its power is cost: no users, no lab, results in days. Its mathematics is Nielsen's: one inspector finds roughly 35 per cent of usability problems, five evaluators together about 75 per cent - so a single reviewer is a false economy, and the marginal evaluator pays until about five.",
              "The cognitive walkthrough simulates a first-time user on one task: an expert walks each action answering four questions - will the user know what to do (have the right goal)? will they see the control? will they associate the control with the action they need? after acting, will they understand the feedback they get? - recording success, partial success or failure per step. It targets learnability of walk-up-and-use systems and finds where a newcomer's goals and the interface's affordances part company.",
              "Contextual evaluation leaves the lab entirely: contextual inquiry observes and interviews users in their own workplace as apprentices to their mastery, capturing the work practice - interruptions, artefacts, collaboration - that no test bench reproduces. It is slow and rich, best early in design. The exam framing: 'compare heuristic evaluation, cognitive walkthrough and contextual inquiry with respect to who evaluates, when, and what each finds' - the who/when/what table is the answer.",
            ],
            keyTerms: [
              { term: "Heuristic evaluation", definition: "3-5 experts inspect an interface against Nielsen's heuristics and aggregate severity ratings." },
              { term: "Severity rating", definition: "A 0-4 scale ranking usability problems from cosmetic to catastrophic." },
              { term: "Cognitive walkthrough", definition: "An expert simulates a first-time user through one task, asking four questions per step." },
              { term: "Contextual inquiry", definition: "Observation plus interview in the user's workplace, apprentice-style - contextual evaluation." },
              { term: "Inspector coverage", definition: "One evaluator finds ~35% of problems; five together ~75% (Nielsen)." },
            ],
            diagram: {
              kind: "matrix",
              title: "Choosing an evaluation method",
              caption: "Who judges, and when - every method lives in one quadrant.",
              axes: { x: "Stage (early design -> finished product)", y: "Judges (experts -> real users)" },
              quadrants: [
                { label: "Expert inspection of designs", note: "heuristic evaluation, cognitive walkthrough" },
                { label: "Expert review of live systems", note: "guideline conformance audits" },
                { label: "Users on prototypes", note: "think-aloud usability tests" },
                { label: "Users in the field", note: "contextual inquiry, field studies" },
              ],
            },
            bullets: [
              "Heuristic evaluation: 3-5 experts, Nielsen's heuristics, severity 0-4.",
              "Coverage: 1 inspector ~35% of problems; 5 inspectors ~75% (Nielsen).",
              "Cognitive walkthrough: four questions per step, first-time user, one task.",
              "Walkthrough targets learnability; heuristics target the whole interface.",
              "Contextual inquiry: observe + interview in the workplace, apprenticeship stance.",
              "Triangulate: cheap expert pass first, user tests second, field studies for context.",
            ],
            table: {
              caption: "Method - who - when - finds.",
              headers: ["Method", "Who", "When", "What it finds"],
              rows: [
                ["Heuristic evaluation", "3-5 expert inspectors", "any design stage", "violations of the ten heuristics"],
                ["Cognitive walkthrough", "expert simulating a novice", "early prototypes", "learnability gaps on one task"],
                ["Contextual inquiry", "evaluator + real users at work", "early discovery", "work practice, interruptions, artefacts"],
              ],
            },
            callout: {
              type: "warning",
              title: "One inspector is not an evaluation",
              body: "Nielsen's coverage curve is the quotable fact: one evaluator finds about 35 per cent of usability problems, five together about 75 per cent. Budget for the fifth inspector before buying laboratory equipment - the marginal expert is the cheapest problem-finder in HCI.",
            },
            examQuestions: [
              {
                q: "Explain heuristic evaluation: the procedure, the severity rating scale, and the number of inspectors recommended with justification.",
                marks: 7,
                outline: [
                  "Experts inspect independently against Nielsen's ten heuristics",
                  "Findings aggregated; severity 0-4 per problem",
                  "One inspector ≈ 35% of problems; five ≈ 75%",
                  "Cheap, fast, no users needed",
                  "Best combined with user testing",
                ],
              },
              {
                q: "Compare heuristic evaluation, cognitive walkthrough and contextual inquiry as evaluation methods. Describe the cognitive walkthrough's four questions, and state for each method who performs it, at which design stage, and what it finds best.",
                marks: 14,
                outline: [
                  "Heuristic evaluation: experts + ten heuristics + severity 0-4",
                  "Coverage numbers: 35% for one inspector, 75% for five",
                  "Walkthrough: an expert simulates a first-time user on one task",
                  "Four questions: goal, control visible, control-action link, feedback understood",
                  "Contextual inquiry: apprentice observation in the workplace",
                  "Stage mapping: contextual earliest, walkthrough/heuristics early, user tests later",
                  "Complementarity: expert passes are cheap and broad; user and field data are deep",
                ],
              },
            ],
          },
          {
            number: "4.6",
            title: "Communication and group working",
            body: [
              "Face-to-face conversation is the richest channel humans use: speech plus tone, gesture, gaze and posture, coordinated by turn-taking rules - one speaker at a time, adjacency pairs (question -> answer, greeting -> greeting) - and repair, the immediate joint fixing of misunderstandings. Clark's grounding is the engine: participants signal and acknowledge until they share common ground, spending effort proportional to the cost of the channel - on a bad phone line, people speak in shorter turns and confirm more.",
              "Text-based communication strips the non-verbal channel and pays for it: emoticons and emoji re-import tone, explicit markers replace gaze and pause, typing delay becomes a visible signal, and grounding gets more expensive - more confirmation turns per idea. Synchronous chat behaves like conversation with slower turns; asynchronous email abandons turn-taking altogether: no shared time, a permanent record, and threads that must carry their own context because the recipient cannot ask while you speak.",
              "Group working compounds the problems: meetings serialise contributions (production blocking - waiting to speak, ideas die), dominant members skew decisions, and shared artefacts need awareness - who is doing what, where. Groupware (Unit V) exists precisely to restore parallelism, anonymity where useful and awareness where missing. The exam framing: 'compare face-to-face and text-based communication with respect to grounding, and explain how group processes shape system design.'",
            ],
            keyTerms: [
              { term: "Grounding", definition: "Clark's process of acknowledging contributions until understanding is shared - common ground." },
              { term: "Turn-taking", definition: "The rules organising who speaks when - one speaker at a time, orderly transitions." },
              { term: "Adjacency pair", definition: "A paired utterance: question -> answer, greeting -> greeting." },
              { term: "Repair", definition: "The immediate joint fixing of a misunderstanding in conversation." },
              { term: "Production blocking", definition: "Ideas lost while group members wait for their turn to speak." },
            ],
            diagram: {
              kind: "cycle",
              title: "The grounding cycle",
              caption: "Each contribution needs evidence of understanding before the next builds on it.",
              steps: [
                { label: "A contributes", note: "signal: speech, text, gesture" },
                { label: "B evidences", note: "back-channel: 'mm-hm', nod, reply" },
                { label: "Repair if needed", note: "misunderstanding fixed immediately" },
                { label: "Common ground", note: "shared understanding confirmed - continue" },
              ],
            },
            bullets: [
              "Face-to-face: speech + gesture + gaze; turn-taking and adjacency pairs organise it.",
              "Grounding (Clark): contributions acknowledged until understanding is shared.",
              "Repair: misunderstandings fixed immediately by joint effort.",
              "Text-based: non-verbal cues stripped - emoji and explicit markers re-import tone.",
              "Chat = slow conversation; email = no turn-taking, permanent record, self-carrying context.",
              "Group processes: production blocking, dominant speakers, awareness needs.",
            ],
            table: {
              caption: "Channel - cues available - grounding cost - best use.",
              headers: ["Channel", "Cues", "Grounding cost", "Best use"],
              rows: [
                ["Face-to-face", "speech, gesture, gaze", "lowest", "negotiation, rich decisions"],
                ["Video", "speech + partial gaze", "low", "distributed meetings"],
                ["Phone", "speech only", "medium", "quick coordination"],
                ["Chat", "text, emoji, typing status", "high", "parallel quick questions"],
                ["Email", "text, permanent record", "highest", "asynchronous, formal"],
              ],
            },
            callout: {
              type: "tip",
              title: "Grounding explains interface choices",
              body: "Why read receipts, typing indicators and emoji exist: each is a grounding device restoring acknowledgement the channel destroyed. Using 'grounding cost' as the comparison axis between communication channels is the analytical answer examiners reward.",
            },
            examQuestions: [
              {
                q: "Explain grounding in conversation. How do text-based channels compensate for the loss of non-verbal cues?",
                marks: 7,
                outline: [
                  "Grounding: acknowledging contributions until understanding is shared",
                  "Face-to-face grounding is cheap: nods, 'mm-hm', gaze",
                  "Text strips tone and gesture - grounding gets expensive",
                  "Compensations: emoji, explicit markers, typing indicators, read receipts",
                  "More confirmation turns per idea in text channels",
                ],
              },
              {
                q: "Describe face-to-face communication and conversation mechanics (turn-taking, adjacency pairs, repair), contrast them with text-based communication, and relate group working phenomena such as production blocking to the design of group support systems.",
                marks: 14,
                outline: [
                  "Face-to-face: the richest channel; turn-taking organises contributions",
                  "Adjacency pairs: question -> answer, greeting -> greeting",
                  "Repair: immediate joint fixing of misunderstandings",
                  "Grounding (Clark) as the underlying process",
                  "Text-based: emoji and markers restore tone; chat vs email timing",
                  "Email: no turns, permanent record, self-carrying context",
                  "Group processes: production blocking, dominance, awareness -> groupware design (Unit V)",
                ],
              },
            ],
          },
          {
            number: "4.7",
            title: "Dialog design notations, semantics and analysis",
            body: [
              "A dialog notation is a formal description of the permitted interaction sequences, and the field offers two families. Diagrammatic notations draw structure: state transition networks (states and arcs, section 3.6), state charts (hierarchical, concurrent states), flow charts, and Petri nets for concurrent dialogs. Textual notations write structure: BNF grammars describe the dialog as a language of user-system events; production rules encode it as IF condition THEN response pairs; CSP describes interacting processes algebraically.",
              "Dialog semantics pins down what the dialog means, not just its shape: pre- and post-conditions on states (this action is legal only when a document is open) and algebraic equations relating commands to their effects. Analysis then interrogates the notation: is every state reachable? does every dialog end in a sane state? can the user always escape? are there mode errors (section 3.6)? HTA (Unit II) supplies the tasks the dialog must support, closing the loop from analysis to design.",
              "A worked fragment: a login dialog in BNF - <session> ::= <login> <commands> <logout>; <login> ::= <name> <password> ( <welcome> | <error> <login> ) - one line of grammar makes the retry loop and the error path explicit. The exam framing: 'compare diagrammatic and textual dialog notations with examples, and explain dialog analysis' - give one notation of each family, one analysis property and one semantic statement.",
            ],
            keyTerms: [
              { term: "Dialog notation", definition: "A formal description of the permitted interaction sequences between user and system." },
              { term: "BNF grammar", definition: "A textual notation describing the dialog as a language of user-system events." },
              { term: "Production rule", definition: "An IF condition THEN response pair encoding dialog behaviour." },
              { term: "CSP", definition: "Communicating Sequential Processes - an algebraic notation for concurrent dialog components." },
              { term: "Dialog semantics", definition: "The meaning of the dialog: pre/post-conditions and the effects of commands." },
            ],
            diagram: {
              kind: "layers",
              title: "The dialog specification stack",
              caption: "Meaning on top, drawn and written notations in the middle, analysis underneath.",
              layers: [
                { label: "Semantics", note: "pre/post-conditions; algebraic command effects" },
                { label: "Diagrammatic notations", note: "STNs, state charts, flow charts, Petri nets" },
                { label: "Textual notations", note: "BNF grammars, production rules, CSP" },
                { label: "Analysis", note: "reachability, dead ends, escape, mode errors" },
              ],
            },
            bullets: [
              "Diagrammatic: STNs, state charts, flow charts, Petri nets - structure you can see.",
              "Textual: BNF grammars, production rules, CSP - structure you can parse.",
              "BNF worked fragment: <login> ::= <name> <password> ( <welcome> | <error> <login> ).",
              "Production rules: IF document open THEN Ctrl+S saves - conditions made explicit.",
              "Semantics: pre/post-conditions state what each step requires and means.",
              "Analysis questions: reachability, dead ends, always-escapable, mode errors.",
            ],
            codeExample: {
              language: "text",
              caption: "One dialog, two notations",
              code: `# BNF grammar of a login dialog
<session> ::= <login> <commands> <logout>
<login>   ::= <name> <password> ( <welcome> | <error> <login> )

# equivalent production rules
IF no session        THEN show login form
IF credentials valid THEN start session; show workspace
IF credentials wrong THEN show error; remain on login form
IF session active    THEN allow <commands> and <logout>`,
            },
            callout: {
              type: "exam",
              title: "Notation families, one example each",
              body: "The compare question wants exactly one diagrammatic and one textual notation, each with a two-line example. STN plus BNF is the safest pair: you can draw the STN for any task you can write the grammar for.",
            },
            examQuestions: [
              {
                q: "Compare diagrammatic and textual dialog design notations, giving one example of each family with a short fragment.",
                marks: 7,
                outline: [
                  "Diagrammatic: STN / state charts - states and arcs, drawable",
                  "Textual: BNF / production rules / CSP - parseable, formal",
                  "BNF fragment for login with the retry loop",
                  "Production rule: IF credentials wrong THEN show error",
                  "Trade-offs: diagrams read easily; grammars suit tool analysis",
                ],
              },
              {
                q: "Explain dialog semantics and dialog analysis. Using a login dialog, show a BNF grammar, state one pre-condition and one post-condition, and list the analysis properties every dialog design should be checked for.",
                marks: 14,
                outline: [
                  "Notations recap: diagrammatic vs textual, one of each",
                  "BNF: <session> ::= <login> <commands> <logout> with retry",
                  "Pre-condition: login legal only when no session is active",
                  "Post-condition: valid login -> session active, workspace shown",
                  "Analysis: every state reachable; every path ends sanely",
                  "Always escapable: logout/cancel reachable from every state",
                  "Mode errors: same action, different meaning per state - detect and remove",
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
      title: "Human Factors and Security",
      summary:
        "Unit V scales the human factors up to teams and proves the result: groupware and its frameworks, meeting and decision support systems, shared applications and artifacts, the realities of implementing synchronous groupware, mixed, augmented and virtual reality, and the validation stack - usability testing, interface testing and user acceptance testing.",
      chapter: {
        number: "05",
        title: "Working Together and Proving It Works",
        intro:
          "Unit V covers groupware, meeting and decision support systems, shared applications and artifacts, frameworks for groupware, implementing synchronous groupware, mixed, augmented and virtual reality, and validation: usability testing, interface testing and user acceptance testing.",
        inOneBreath:
          "Groupware adds communication, collaboration and coordination over a shared environment - and Grudin's challenges explain why it fails; the time/space matrix classifies it while feedback, latency, undo and concurrency complicate the synchronous row; WYSIWIS and floor control govern shared artifacts; the reality-virtuality continuum spans AR to VR; and usability, interface and acceptance testing validate the result.",
        sections: [
          {
            number: "5.1",
            title: "Groupware",
            body: [
              "Groupware is computer-based systems that support groups of people engaged in a common task (or goal) and that provide an interface to a shared environment (Ellis, Gibbs and Rein). Both halves of the definition carry weight: the group works toward a shared goal, and the environment - the document, calendar, workspace - is shared, not merely accessible. Groupware delivers three capabilities: communication (exchanging information), collaboration (working on shared objects) and coordination (keeping actions aligned).",
              "The design problem is social before it is technical. Grudin's challenges explain why technically sound systems fail: the disparity challenge - the person who does the work is not the person who gets the benefit (the secretary maintains the calendar everyone else reads); critical mass - a calendar is worthless until enough colleagues adopt it; disruption of social processes - a tracking system that feels like surveillance; and the difficulty of evaluating groupware, because its value shows in group outcomes, not individual clicks.",
              "Worked example: a shared team calendar. Communication: meeting requests. Collaboration: jointly finding a slot. Coordination: conflicts detected, rooms booked. Failure mode: maintenance cost falls on one role while benefit spreads across the team - exactly Grudin's disparity - so adoption stalls unless the workflow compensates the maintainer. The exam framing: 'define groupware, explain its three dimensions, and discuss Grudin's challenges with examples.'",
            ],
            keyTerms: [
              { term: "Groupware", definition: "Ellis, Gibbs and Rein: computer-based systems supporting groups with a common task and a shared environment." },
              { term: "Communication / collaboration / coordination", definition: "Groupware's three capabilities: exchanging information, working on shared objects, keeping actions aligned." },
              { term: "Grudin's eight challenges", definition: "The social reasons groupware fails - disparity of work and benefit, critical mass, social disruption, evaluation difficulty." },
              { term: "Critical mass", definition: "The adoption threshold below which a group tool gives no value." },
              { term: "Disparity of work and benefit", definition: "The adoption killer: one role maintains, everyone benefits." },
            ],
            diagram: {
              kind: "fork",
              title: "Why does groupware fail?",
              caption: "The social mechanics, not the code, decide adoption.",
              start: "Why do technically sound groupware systems stall?",
              branches: [
                { label: "Work and benefit land on different people", outcome: "Grudin's disparity - the calendar keeper serves everyone else", good: false },
                { label: "Nobody's colleagues are on it yet", outcome: "critical mass missing - one user gets no value", good: false },
                { label: "The tool disrupts social process", outcome: "tracking feels like surveillance - quiet sabotage", good: false },
                { label: "Value shows only in group outcomes", outcome: "evaluation difficulty - benefits invisible in pilots", good: false },
              ],
            },
            bullets: [
              "Definition (Ellis, Gibbs, Rein): systems supporting groups with a shared goal and a shared environment.",
              "Three capabilities: communication, collaboration, coordination.",
              "Grudin's disparity: work and benefit on different people - the adoption killer.",
              "Critical mass: value arrives only with many adopters.",
              "Social disruption: tools perceived as monitoring get quietly resisted.",
              "Worked example: shared calendar - the keeper maintains, everyone benefits.",
            ],
            table: {
              caption: "Dimension - question - example feature.",
              headers: ["Dimension", "Question", "Example"],
              rows: [
                ["Communication", "do members exchange information?", "meeting requests, chat"],
                ["Collaboration", "do they work on shared objects?", "joint calendar, shared document"],
                ["Coordination", "are actions aligned?", "conflict detection, room booking"],
              ],
            },
            callout: {
              type: "exam",
              title: "Quote the definition, then the challenge",
              body: "The full-mark groupware answer has two halves: Ellis's definition with the shared-environment clause intact, and one Grudin challenge worked through a real tool. 'Shared environment' is the clause most answers drop - and the one the mark scheme checks.",
            },
            examQuestions: [
              {
                q: "Define groupware and explain its three dimensions - communication, collaboration and coordination - with one example feature for each.",
                marks: 7,
                outline: [
                  "Ellis definition: support for groups with a common goal and a shared environment",
                  "Communication: exchanging information (requests, chat)",
                  "Collaboration: shared objects (joint calendar, documents)",
                  "Coordination: aligned actions (conflict detection)",
                  "'Shared environment' is the defining clause",
                ],
              },
              {
                q: "Discuss Grudin's challenges of groupware adoption. Work through the shared calendar example showing where each challenge appears, and suggest design or organisational responses.",
                marks: 14,
                outline: [
                  "Disparity: who does the work vs who benefits - the calendar keeper",
                  "Critical mass: value needs many adopters",
                  "Disruption of social processes: tracking perceived as surveillance",
                  "Exception handling: real meetings break the tool's model",
                  "Evaluation difficulty: benefits are group-level, not individual",
                  "Responses: compensate maintainers, seed critical mass, visible individual benefit",
                  "Design implication: align cost and benefit inside the workflow",
                ],
              },
            ],
          },
          {
            number: "5.2",
            title: "Meeting and decision support systems",
            body: [
              "Meetings are where groups think out loud, and their pathologies are documented: production blocking (waiting to speak, ideas die), evaluation apprehension (junior members withhold), and dominance effects (the loudest voice steers). Meeting and decision support systems attack these directly: electronic meeting rooms give every participant a keyboard and a public screen, so contributions are parallel and - crucially - optional anonymity removes fear of judgment; facilitation tools structure the process: electronic brainstorming, idea organisers, weighted voting.",
              "A worked comparison: ten people, one hour, 'reduce support costs'. A serial physical meeting yields perhaps 30 ideas, dominated by three voices. An electronic meeting room lets ten typists produce ideas in parallel (on the order of 120 raw ideas), anonymity lifts junior contributions, the voting tool ranks in minutes, and the facilitator parks tangents in an organiser. The costs are real too - typing outpaces talking only for structured input, and the facilitator's skill decides whether the tooling structures or bureaucratizes the discussion.",
              "Decision support beyond meetings: shared criteria matrices, prioritisation tools, and 'what-if' models the group manipulates together. The design lesson generalises: the system's job is process, not just storage - structure contributions, protect minority voices, and make the group's state visible. The exam framing: 'explain meeting and decision support systems, their tools, and the group process problems they solve' - name the pathology, then the tool that fixes it.",
            ],
            keyTerms: [
              { term: "Electronic meeting room", definition: "A room where every participant has input to a shared public display - parallel, optionally anonymous contribution." },
              { term: "Production blocking", definition: "Ideas lost while members wait for their turn to speak." },
              { term: "Evaluation apprehension", definition: "Withholding contributions for fear of judgment; cured by anonymity." },
              { term: "Anonymous voting", definition: "Simultaneous private ranking of options - dominance removed from decisions." },
              { term: "Facilitation", definition: "The skill of steering the meeting process and its tools rather than the people." },
            ],
            diagram: {
              kind: "compare",
              title: "The same meeting, twice",
              caption: "Parallelism, anonymity and visible process are the electronic room's three levers.",
              left: {
                heading: "The physical meeting room",
                items: [
                  "One voice at a time - production blocking",
                  "Dominant speakers steer the outcome",
                  "Juniors withhold (evaluation apprehension)",
                  "Minutes written afterwards, lossy",
                ],
              },
              right: {
                heading: "The electronic meeting room",
                items: [
                  "Parallel anonymous input from every seat",
                  "Voting ranks ideas live on the public screen",
                  "Facilitator steers tools, not people",
                  "Full record captured during the session",
                ],
              },
            },
            bullets: [
              "Pathologies: production blocking, evaluation apprehension, dominance effects.",
              "Electronic meeting rooms: parallel input, public screen, optional anonymity.",
              "Toolset: electronic brainstorming, idea organiser, weighted voting.",
              "Worked: 10 people, 1 hour - ~30 serial ideas vs ~120 parallel, ranked by vote.",
              "Anonymity lifts junior and dissenting contributions.",
              "Facilitation decides whether tooling structures or bureaucratizes.",
            ],
            table: {
              caption: "Tool - purpose - pathology solved.",
              headers: ["Tool", "Purpose", "Pathology solved"],
              rows: [
                ["Electronic brainstorming", "parallel idea entry", "production blocking"],
                ["Anonymous voting", "rank options fast", "dominance effects"],
                ["Idea organiser", "cluster and park topics", "tangent drift"],
                ["Public shared display", "one visible group state", "fragmented attention"],
              ],
            },
            callout: {
              type: "tip",
              title: "Process, not just storage",
              body: "Meeting support fails when it stores the meeting but ignores its process. The exam-worthy insight: the tools exist to restructure group behaviour - parallelism against blocking, anonymity against apprehension, visible state against fragmentation.",
            },
            examQuestions: [
              {
                q: "What is an electronic meeting room? Explain its main tools and the group process problems each addresses.",
                marks: 7,
                outline: [
                  "Pathologies: production blocking, apprehension, dominance",
                  "Electronic brainstorming -> parallel entry vs blocking",
                  "Anonymous voting -> dominance removed",
                  "Idea organiser -> tangent drift parked",
                  "Public display -> shared visible state",
                ],
              },
              {
                q: "Compare a physical meeting with an electronically supported meeting for generating and selecting ideas. Discuss anonymity, facilitation and the limits of electronic support, with a worked size-and-time comparison.",
                marks: 14,
                outline: [
                  "Physical: serial speech, ~30 ideas/hour, dominated by few voices",
                  "Electronic: parallel anonymous entry, ~120 ideas, voting ranks live",
                  "Anonymity lifts junior contributions (evaluation apprehension)",
                  "Facilitator steers the process; skill decides tool vs bureaucracy",
                  "Limits: typing suits structured input; free discussion still needs voice",
                  "Decision support: shared criteria, what-if models",
                  "Design lesson: restructure the process, do not just record it",
                ],
              },
            ],
          },
          {
            number: "5.3",
            title: "Shared applications and artifacts",
            body: [
              "A shared artifact is an object that several people manipulate at once - a whiteboard's canvas, a document under joint edit, a design model - and shared applications are the programs that host them. The founding protocol is WYSIWIS (what you see is what I see, Stefik et al.): every participant sees the same view of the same object in the same place. Strict WYSIWIS makes pointing and discussion trivial - 'that node there' means the same thing to everyone - but forces one zoom, one scroll, one focus for all.",
              "Relaxed WYSIWIS loosens the lockstep: private scroll positions, personal zoom, selective hiding - better for mixed roles (the reviewer sees comments, the author sees text) at the cost of grounding, since views diverge and 'there' stops referring. Supporting mechanisms fill the gap: telepointers (each participant's cursor visible to all), role-based views, and floor control - the protocol deciding who may act on the shared object now (moderator grants the floor, or a token circulates, or locks guard regions).",
              "Worked example: a joint document edit. Strict WYSIWIS with paragraph locks: one author per paragraph, everyone sees identical text - safe, but serial. Relaxed: two authors in different sections, private navigation, changes broadcast with author-coloured telepointers - parallel, but it needs awareness widgets so nobody edits blind. The exam framing: 'define shared artifacts, explain WYSIWIS and its relaxed form, and describe floor control and telepointers with examples.'",
            ],
            keyTerms: [
              { term: "Shared artifact", definition: "An object manipulated by several people at once - canvas, document, model." },
              { term: "WYSIWIS", definition: "What You See Is What I See - all participants share an identical view (Stefik et al.)." },
              { term: "Relaxed WYSIWIS", definition: "Per-user scroll, zoom and hiding - parallel work with divergent views." },
              { term: "Floor control", definition: "The protocol deciding who may act on the shared object now." },
              { term: "Telepointer", definition: "A per-user cursor visible to everyone - cheap awareness in relaxed views." },
            ],
            diagram: {
              kind: "fork",
              title: "How much sharing is enough?",
              caption: "From whole-screen mirroring to loosely coupled objects - each level buys parallelism and pays in grounding.",
              start: "What exactly is shared?",
              branches: [
                { label: "The whole screen", outcome: "screen sharing - simplest, fully serial, one driver", good: true },
                { label: "One artifact, one view", outcome: "strict WYSIWIS - pointing and talk align perfectly", good: true },
                { label: "One artifact, per-user views", outcome: "relaxed WYSIWIS - parallel work, needs telepointers + floor control", good: true },
              ],
            },
            bullets: [
              "Shared artifact: an object manipulated by several people at once.",
              "WYSIWIS: identical views make 'that thing there' unambiguous.",
              "Strict WYSIWIS: one zoom, one scroll - safe but serial.",
              "Relaxed WYSIWIS: private scroll/zoom - parallel but grounding gets harder.",
              "Telepointers: everyone's cursor visible - cheap awareness in relaxed views.",
              "Floor control: moderator-granted, token-passing, or region locks - who may act now.",
            ],
            table: {
              caption: "Mechanism - what it controls - example.",
              headers: ["Mechanism", "Controls", "Example"],
              rows: [
                ["Strict WYSIWIS", "view identity", "presentation whiteboard"],
                ["Relaxed WYSIWIS", "private scroll / zoom", "joint code review"],
                ["Telepointer", "presence + attention", "coloured cursors per author"],
                ["Floor control", "write access now", "paragraph locks, moderator pass"],
              ],
            },
            callout: {
              type: "exam",
              title: "WYSIWIS trades grounding for parallelism",
              body: "The exam's favourite contrast in one line: strict WYSIWIS maximises grounding (identical views) and minimises parallelism; relaxed WYSIWIS maximises parallelism and must buy back grounding with telepointers, roles and floor control.",
            },
            examQuestions: [
              {
                q: "Define shared artifacts and WYSIWIS. Explain the difference between strict and relaxed WYSIWIS with an example of each.",
                marks: 7,
                outline: [
                  "Shared artifact: an object jointly manipulated (whiteboard, document)",
                  "WYSIWIS: all participants see the same view in the same place",
                  "Strict: one scroll/zoom - unambiguous reference, serial work",
                  "Relaxed: private views - parallel work, divergent reference",
                  "Examples: teaching whiteboard vs joint code review",
                ],
              },
              {
                q: "Explain the mechanisms supporting shared applications: WYSIWIS and its relaxation, telepointers, role-based views and floor control. Work through a joint document-editing scenario showing which mechanisms apply and why.",
                marks: 14,
                outline: [
                  "Shared artifacts and the grounding problem of divergent views",
                  "Strict WYSIWIS: identical views, safe but serial",
                  "Relaxed WYSIWIS: private scroll/zoom, parallel but needs support",
                  "Telepointers: per-user cursors as awareness",
                  "Role-based views: reviewer sees comments, author sees text",
                  "Floor control: locks or a moderator decide write access",
                  "Scenario mapping: section locks + telepointers + broadcast edits",
                ],
              },
            ],
          },
          {
            number: "5.4",
            title: "Frameworks for groupware and implementing synchronous groupware",
            body: [
              "Frameworks organise the groupware design space so nothing is forgotten. The time/space matrix classifies tools by whether participants share time and place: same place, same time (face-to-face with a shared display); same time, different place (chat, shared editors, teleconferencing); different place, different time (email, wikis, version control); different time, same place (shift handover logs, shared kiosks, sticky notes). A second framework stacks three tiers: a communication infrastructure (network, transport), a shared workspace (objects, roles, access), and awareness/coordination on top (who is doing what).",
              "Implementing synchronous groupware - the same-time row - meets four classic problems. Feedback: the local user's interface must respond instantly, but the action must also travel - users read their own typing latency as system health, so local echo cannot wait for the network. Network latency: distributed updates arrive late and out of order; optimistic local application with later reconciliation keeps interaction alive. Undo: undoing a shared action must propagate to everyone and handle the edits that happened meanwhile. Concurrency control: two people editing the same paragraph need locking (safe, serial) or optimistic merging (parallel, conflict-prone).",
              "Worked example: a shared editor. Local echo makes typing feel instant; every keystroke broadcasts with a timestamp; a late update is transformed against intervening edits rather than rejected; undo reverses one author's last edit without reverting others'; region locks prevent simultaneous edits, with merge support when locks are declined. The exam framing: 'present the time/space framework and the tier framework, and explain the four implementation problems of synchronous groupware with a response to each.'",
            ],
            keyTerms: [
              { term: "Time/space matrix", definition: "The classification of groupware by same/different time and same/different place." },
              { term: "Tier framework", definition: "Communication infrastructure -> shared workspace -> awareness and coordination." },
              { term: "Local echo", definition: "Immediate local rendering of the user's own actions, before network confirmation." },
              { term: "Optimistic update", definition: "Applying an action locally at once and reconciling with remote state later." },
              { term: "Concurrency control", definition: "Locking or optimistic merging that keeps simultaneous edits from corrupting shared state." },
            ],
            diagram: {
              kind: "matrix",
              title: "The time/space matrix",
              caption: "Every groupware tool lives in one quadrant; synchronous groupware is the same-time row.",
              axes: { x: "Place (same -> different)", y: "Time (same -> different)" },
              quadrants: [
                { label: "Same place, same time", note: "meeting rooms, shared displays, wall-sized touchscreens" },
                { label: "Different place, same time", note: "chat, shared editors, teleconferencing - the synchronous row" },
                { label: "Same place, different time", note: "shift handover logs, shared kiosks, sticky notes" },
                { label: "Different place, different time", note: "email, wikis, version control" },
              ],
            },
            bullets: [
              "Time/space matrix: same/different time x same/different place - four quadrants.",
              "Tier framework: communication infrastructure -> shared workspace -> awareness.",
              "Feedback: local echo first - users read their own latency as system health.",
              "Latency: optimistic local application, later reconciliation.",
              "Undo: propagate to all; handle edits that arrived meanwhile.",
              "Concurrency: locking (safe, serial) vs optimistic merging (parallel, conflicts).",
            ],
            table: {
              caption: "Problem - cause - response.",
              headers: ["Problem", "Cause", "Response"],
              rows: [
                ["Feedback", "shared action travels the network", "local echo; instant local rendering"],
                ["Network latency", "distance and congestion", "optimistic updates + reconciliation"],
                ["Undo", "shared state already changed", "distributed undo; transform against newer edits"],
                ["Concurrency", "simultaneous edits", "region locks or optimistic merge"],
              ],
            },
            callout: {
              type: "warning",
              title: "Latency is a usability number",
              body: "In synchronous groupware, network delay is experienced as sluggishness, not as a network statistic. Users blame the interface, not the cable - so local echo and optimistic updates are usability features, not performance tuning. Quote this in any implementation answer.",
            },
            examQuestions: [
              {
                q: "Explain the time/space framework for groupware, placing one example tool in each quadrant.",
                marks: 7,
                outline: [
                  "Same place, same time: shared-display meeting room",
                  "Different place, same time: chat, shared editors",
                  "Same place, different time: shift handover log",
                  "Different place, different time: email, wiki",
                  "Synchronous groupware = the same-time row",
                ],
              },
              {
                q: "Discuss the frameworks for groupware and the problems of implementing synchronous groupware. For feedback, latency, undo and concurrency control, state the cause and a standard response, illustrating with a shared editor.",
                marks: 14,
                outline: [
                  "Time/space matrix with quadrant examples",
                  "Tier framework: infrastructure, shared workspace, awareness",
                  "Feedback: local echo - own latency read as system health",
                  "Latency: optimistic application + reconciliation",
                  "Undo: propagate; transform against intervening edits",
                  "Concurrency: region locks vs optimistic merging",
                  "Shared-editor walkthrough tying all four responses together",
                ],
              },
            ],
          },
          {
            number: "5.5",
            title: "Mixed, augmented and virtual reality",
            body: [
              "The reality-virtuality continuum (Milgram and Kishino) orders the spectrum: at one end the real environment with no computer content; then augmented reality - virtual objects overlaid on the real world (head-up displays, phone AR); then augmented virtuality - real objects inserted into a virtual world; and at the far end virtual reality, a fully synthetic environment. Mixed reality is the middle of that spectrum, where real and virtual objects coexist and interact - a virtual knob sits on a real machine and turns it.",
              "The enabling technologies: head-mounted displays or passthrough headsets for seeing the merged world, head and hand tracking for perspective, and registration - anchoring virtual objects to real coordinates so they stay put when the user moves. Registration quality and latency decide believability: motion-to-photon latency beyond roughly 20 ms breaks the illusion and induces cybersickness; misregistered overlays drift visibly off the objects they annotate.",
              "Applications justify the spectrum: AR overlays assembly instructions directly onto the machine part being worked on (no glance between manual and work); VR provides safe rehearsal for surgery, firefighting and evacuation drills - dangerous or expensive to stage physically; mixed-reality design reviews let teams walk inside a building that does not exist. The exam framing: 'distinguish VR, AR and MR with examples, describe the reality-virtuality continuum, and discuss applications and their human-factor constraints.'",
            ],
            keyTerms: [
              { term: "Virtual reality (VR)", definition: "A fully synthetic environment rendered and tracked by computer." },
              { term: "Augmented reality (AR)", definition: "Virtual objects overlaid on the real world - HUDs, phone AR." },
              { term: "Mixed reality (MR)", definition: "The middle of the continuum: real and virtual objects coexist and interact." },
              { term: "Reality-virtuality continuum", definition: "Milgram and Kishino's spectrum from real environment to fully virtual." },
              { term: "Registration", definition: "Anchoring virtual objects to real-world coordinates so they stay put as the user moves." },
            ],
            diagram: {
              kind: "pipeline",
              title: "The reality-virtuality continuum",
              caption: "From the untouched world to the fully synthetic - mixed reality is the interactive middle.",
              stages: [
                { label: "Real environment", note: "no computer content" },
                { label: "Augmented reality", note: "virtual overlays on the real world" },
                { label: "Augmented virtuality", note: "real objects inside a virtual world" },
                { label: "Virtual environment", note: "fully synthetic; HMD immersion" },
              ],
            },
            bullets: [
              "Continuum (Milgram): real -> AR -> augmented virtuality -> VR.",
              "AR: virtual overlays on the real world - HUDs, phone AR, guided assembly.",
              "VR: fully synthetic environments - training, rehearsal, design review.",
              "MR: the interactive middle - real and virtual objects coexist and respond.",
              "Registration anchors virtual objects to real coordinates; drift destroys believability.",
              "Latency rule: motion-to-photon ~20 ms or cybersickness follows.",
            ],
            table: {
              caption: "Technology - what the user sees - example.",
              headers: ["Technology", "User sees", "Example"],
              rows: [
                ["AR (phone / HUD)", "virtual overlays on camera or glass", "assembly instructions pinned to parts"],
                ["MR headset (passthrough)", "real world + interactive virtual objects", "design review inside a mock-up"],
                ["VR HMD", "fully synthetic stereoscopic world", "surgery and fire-drill rehearsal"],
              ],
            },
            callout: {
              type: "tip",
              title: "Presence is a latency number",
              body: "Believability in VR/AR is quantified by motion-to-photon latency: about 20 ms keeps presence, more invites cybersickness - and registration drift is judged even more harshly, because an annotation that slides off its machine part is visibly wrong. Two numbers, two failure modes: quote both.",
            },
            examQuestions: [
              {
                q: "Distinguish virtual reality, augmented reality and mixed reality with one example application of each.",
                marks: 7,
                outline: [
                  "VR: fully synthetic environment - surgery rehearsal",
                  "AR: virtual overlays on the real world - guided assembly",
                  "MR: real and virtual objects interact - a virtual knob on a real machine",
                  "Continuum: real -> AR -> augmented virtuality -> VR (Milgram)",
                  "Each point on the continuum is a design choice, not a gadget",
                ],
              },
              {
                q: "Describe the reality-virtuality continuum and the technologies behind it (HMDs, tracking, registration). Discuss applications across AR, MR and VR with their human-factor constraints, especially latency and cybersickness.",
                marks: 14,
                outline: [
                  "Continuum: real -> AR -> augmented virtuality -> VR",
                  "Technologies: HMD / passthrough, head and hand tracking, stereoscopy",
                  "Registration: anchoring virtual objects to real coordinates",
                  "AR application: instructions pinned to machine parts",
                  "VR application: safe rehearsal for surgery and fire drills",
                  "MR application: design reviews inside non-existent buildings",
                  "Constraints: ~20 ms motion-to-photon; drift breaks believability; cybersickness",
                ],
              },
            ],
          },
          {
            number: "5.6",
            title: "Validation - usability testing, interface testing and user acceptance testing",
            body: [
              "Usability testing measures real users doing representative tasks, and its design is a discipline: recruit 5-8 representative participants (Nielsen and Landauer's arithmetic - each user finds about a third of the problems, so five users uncover roughly 85 per cent), write tasks as goals not instructions ('buy a peak ticket before 9 am', never 'click the green button'), run with think-aloud in a lab or the field, and measure: task completion rate, time on task, error and help counts, and satisfaction (SUS, where about 68 is the industry average). Formative tests improve a design; summative tests verify one against targets.",
              "Interface testing is technical verification that the interface does what its specification says: every link and button works, validation and error paths behave, layout holds across devices and browsers, accessibility conformance (contrast, keyboard paths, screen-reader semantics) is checked, and guideline consistency (Unit IV's golden rules) is audited. Much of it automates - scripted GUI tests and accessibility linters run per build - catching the regressions that human testers stop noticing after the hundredth pass.",
              "User acceptance testing is the final gate and a different creature: real users or business owners exercise the system against acceptance criteria in a realistic environment, and their sign-off - not a metric - releases the product. Alpha and beta testing are its staged cousins (internal, then invited external users). The three must never be confused: usability testing asks 'can people use it?', interface testing asks 'does it behave as specified?', UAT asks 'does the business accept it?'. The exam framing: 'distinguish usability testing, interface testing and UAT, and design a small usability test with tasks and metrics.'",
            ],
            keyTerms: [
              { term: "Usability testing", definition: "Measuring real users on representative tasks: completion, time, errors, satisfaction." },
              { term: "SUS", definition: "The System Usability Scale - a ten-item satisfaction questionnaire; ~68 is the industry average." },
              { term: "Formative vs summative", definition: "Formative tests improve a design; summative tests verify it against targets." },
              { term: "Acceptance criteria", definition: "The business-level conditions UAT checks before sign-off." },
              { term: "User acceptance testing (UAT)", definition: "The final gate: real users verify acceptance criteria; sign-off releases the product." },
            ],
            diagram: {
              kind: "flow",
              title: "Designing a usability test",
              caption: "Five steps from plan to prioritised fixes.",
              steps: [
                { label: "Plan", note: "goals, tasks, metrics, targets" },
                { label: "Recruit", note: "5-8 representative users" },
                { label: "Run", note: "tasks + think-aloud; record everything" },
                { label: "Measure", note: "completion, time, errors, SUS" },
                { label: "Report", note: "problems ranked by severity" },
              ],
            },
            bullets: [
              "5-8 users find ~85% of usability problems (Nielsen-Landauer).",
              "Tasks are goals, not instructions: 'buy a peak ticket', never 'click green'.",
              "Metrics: completion rate, time on task, errors, help requests, SUS (~68 average).",
              "Formative tests improve; summative tests verify against targets.",
              "Interface testing: function, validation paths, accessibility, guideline conformance - largely automatable.",
              "UAT: acceptance criteria + business sign-off; alpha/beta are its staged forms.",
            ],
            codeExample: {
              language: "python",
              caption: "usability.py - session metrics from a test log",
              code: `sessions = [
    {"task": "buy ticket", "done": True,  "seconds": 148, "errors": 1},
    {"task": "buy ticket", "done": True,  "seconds": 95,  "errors": 0},
    {"task": "buy ticket", "done": False, "seconds": 300, "errors": 4},
    {"task": "buy ticket", "done": True,  "seconds": 120, "errors": 2},
    {"task": "buy ticket", "done": True,  "seconds": 102, "errors": 0},
]

n = len(sessions)
completion = sum(s["done"] for s in sessions) / n
mean_time  = sum(s["seconds"] for s in sessions) / n
mean_errs  = sum(s["errors"] for s in sessions) / n

print(f"completion {completion:.0%}, mean time {mean_time:.0f} s, "
      f"mean errors {mean_errs:.1f}")
# completion 80%, mean time 153 s, mean errors 1.4 -> investigate session 3`,
            },
            callout: {
              type: "exam",
              title: "Three tests, three questions",
              body: "The distinction that earns the marks: usability testing - 'can people use it?' (metrics from tasks); interface testing - 'does it match the specification?' (function, accessibility, conformance); UAT - 'does the business accept it?' (acceptance criteria, sign-off). Mixing them up is the classic slip.",
            },
            examQuestions: [
              {
                q: "Distinguish usability testing, interface testing and user acceptance testing with respect to purpose, participants and outcome.",
                marks: 7,
                outline: [
                  "Usability testing: real users, representative tasks, metrics (completion, time, SUS)",
                  "Interface testing: technical conformance to specification, largely automated",
                  "UAT: business owners, acceptance criteria, sign-off releases the product",
                  "Questions: can people use it? / does it match spec? / does business accept it?",
                  "Alpha and beta testing are staged acceptance testing",
                ],
              },
              {
                q: "Design a usability test for a railway ticket-purchasing web page: participants, tasks, procedure, metrics and reporting. Justify the number of participants with the Nielsen-Landauer result and distinguish formative from summative testing.",
                marks: 14,
                outline: [
                  "Participants: 5-8 representative travellers",
                  "Justification: about a third of problems per user; 5 users ≈ 85% coverage",
                  "Tasks as goals: 'buy a peak ticket before 9 am' - never button-level instructions",
                  "Procedure: think-aloud, recorded, moderator neutral",
                  "Metrics: completion rate, time on task, errors, help requests, SUS",
                  "Formative vs summative: improve the design vs verify targets",
                  "Report: problems ranked by severity with fixes prioritised",
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
        { topic: "Nielsen's ten heuristics + Shneiderman's eight golden rules", weight: "≈ 12-14 marks", note: "List-with-examples questions - the most repeated items on the paper." },
        { topic: "KLM operators, M-placement rules, GOMS", weight: "≈ 10-12 marks", note: "Numerical - practise writing operator strings and applying Rules 0-4." },
        { topic: "Fitts' law + Model Human Processor", weight: "≈ 8-10 marks", note: "Formulas and one worked calculation each (ID, MT, reaction time)." },
        { topic: "Norman's model + seven principles", weight: "≈ 8-10 marks", note: "Draw the seven-stage cycle, label the two gulfs, name the violated principle." },
        { topic: "Groupware: definition, frameworks, synchronous implementation", weight: "≈ 8-10 marks", note: "Ellis definition + time/space matrix + the four implementation problems." },
        { topic: "Validation: usability testing, interface testing, UAT", weight: "≈ 6-8 marks", note: "Distinguish the three; design a small usability test with metrics." },
        { topic: "Memory, channels, reasoning (Unit I theory)", weight: "≈ 6-8 marks", note: "Three-stage memory with numbers; deductive / inductive / abductive." },
        { topic: "Dialog notations + evaluation methods", weight: "≈ 6-8 marks", note: "STN and BNF examples; heuristic evaluation vs walkthrough vs contextual inquiry." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Two hours a day, five days a week, with the weekend for writing answers against time. Every model in this subject comes with a diagram and a number - practise both, because the examiner marks the diagram and checks the arithmetic.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - the human", tasks: ["Input-output channels: capacities + two design rules", "Three-stage memory model with 7±2 and the chunking example", "Deductive / inductive / abductive reasoning with examples", "Emotion, individual differences, Norman's triangle"] },
        { week: "Week 2", focus: "Unit I devices + Unit II start", tasks: ["Text entry and pointing devices with speed figures", "Displays, VR latency rule, physical controls, paper", "Discovery framework: stakeholder classes + usability goals", "Observation vs elicitation with two methods each"] },
        { week: "Week 3", focus: "Unit II - the process", tasks: ["HTA: write one full analysis with plans", "Storyboard vs use case; write one use case with extensions", "Stakeholder profile fields + the power/interest grid", "Project management document contents"] },
        { week: "Week 4", focus: "Unit III - the models", tasks: ["MHP parameters + the simple reaction-time estimate", "KLM: operator constants, two full worked traces", "M-placement Rules 0-4 applied visibly", "GOMS analysis + STN / three-state + Fitts numericals"] },
        { week: "Week 5", focus: "Unit IV - the rules", tasks: ["Eight golden rules + Norman's seven, each with an example", "Norman's seven stages + the two gulfs", "Nielsen's ten, in order; heuristic evaluation numbers", "Communication and grounding + STN and BNF dialog notations"] },
        { week: "Week 6", focus: "Unit V + revision", tasks: ["Groupware definition + Grudin + the time/space matrix", "Synchronous implementation problems + WYSIWIS and floor control", "Reality-virtuality continuum + the validation stack", "Two timed past-style papers; rewrite your weakest two answers"] },
      ],
    },
    {
      id: "exam-tips",
      heading: "Exam-hall strategy",
      examTips: [
        "Pair every model with its diagram: the seven-stage cycle, the HTA pyramid, the time/space matrix, the three-state boxes. The diagram is half the marks.",
        "Quote the numbers: 7±2 chunks, tau_p ≈ 100 ms, K 0.2 / P 1.1 / H 0.4 / M 1.35 s, ID = log2(2D/W), 5 users ≈ 85% of problems.",
        "For compare questions, build a table: rows = items, columns = definition / example / strength / weakness.",
        "State assumptions before computing: 'KLM assumes expert, error-free performance'; 'W in Fitts' law is measured along the movement direction'.",
        "Name the authors: Shneiderman, Norman, Nielsen, Card-Moran-Newell, Raskin, Ellis-Gibbs-Rein, Grudin, Milgram, Stefik (WYSIWIS), Clark (grounding).",
        "In KLM numericals, write the operator string first (H M P BB) - the string carries the marks, not the arithmetic.",
        "For 'explain with examples' questions, one concrete interface example per point beats two extra theory sentences.",
        "Time-box: 7-mark ≈ 12 minutes, 14-mark ≈ 22 minutes; leave 5 minutes to attach examples to any list you wrote fast.",
      ],
    },
    {
      id: "slips",
      heading: "The last day - strategy and common slips that cost easy marks",
      body: [
        "The last day is for lists and numbers, not new reading: write out the eight golden rules, Norman's seven, Nielsen's ten, the KLM constants and the Fitts formula from memory, then check against these pages. Sleep before drawing the two guaranteed diagrams once more - the seven-stage cycle and the time/space matrix.",
      ],
      bullets: [
        "Saying the KLM applies to novices or learning - it models expert, error-free routine execution only.",
        "Swapping the gulfs: execution is doing (intention -> action), evaluation is perceiving (display -> understanding).",
        "Quoting 7±2 as items instead of chunks - and forgetting the design implication (grouping).",
        "Listing five Nielsen heuristics and hoping: ten, in order, then examples.",
        "Calling Fitts' law a choice-time model - choice is Hick's law; reaching is Fitts.",
        "Defining groupware without Ellis's shared-environment clause.",
        "Confusing heuristic evaluation (experts) with usability testing (real users) - or UAT with either; UAT checks acceptance criteria and signs off.",
        "Reciting the three-state model in the wrong order: State 0 tracking, State 1 creep, State 2 keyboard.",
      ],
    },
  ],
};
