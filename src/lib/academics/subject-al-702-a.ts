/**
 * Academics - RGPV AIML 7th-semester subject: AL-702(A) AI in Gaming.
 *
 * Structure mirrors subject-cs-302.ts: units -> one chapter per unit ->
 * numbered sections.  Each section carries body paragraphs, bullets, a
 * diagram, key terms, a callout, a table or code sample, and three
 * exam-style questions (one 7-mark with outline + two shorts).
 */

import type { AcademicSubject } from "./types";

export const al702a: AcademicSubject = {
  id: "al-702-a",
  code: "AL-702(A)",
  title: "AI in Gaming",
  semester: "VII Semester",
  program: "RGPV · Artificial Intelligence & Machine Learning",
  tagline:
    "The complete visual guide to AL-702(A): game AI foundations, movement and pathfinding, decision making, learning and procedural generation, and strategy with production practice - every syllabus point paired with a worked example you can redraw in the exam hall.",
  description:
    "Five units walk from what game AI really is - believable agents inside a strict frame budget - through movement, from steering behaviors to A* on a grid you can trace by hand, into decision making with FSMs, behavior trees, utility systems and GOAP. The second half covers machine learning in games, from Q-learning with worked numbers to self-play, procedural content generation with Perlin noise, and adversarial search: minimax, alpha-beta pruning and Monte Carlo tree search. The journey ends where shipped games live - RTS strategic AI, debugging tools, Halo and F.E.A.R. case studies, and the production pipeline that turns AI techniques into careers.",
  accentColor: "#22d3ee",
  emoji: "AIG",
  unitCount: 5,
  totalSections: 31,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Introduction to Game AI",
      summary:
        "What game AI is and is not compared with academic AI, the perceive-think-act agent model, how AI plugs into the game loop under a millisecond-scale CPU budget, the AI roles demanded by different genres, the Pac-Man ghost system as the classic case study, and the craft of difficulty balancing and cheat-free design.",
      chapter: {
        number: "01",
        title: "Foundations: Agents, Loops and the Illusion of Intelligence",
        intro:
          "Unit I sets the vocabulary for the whole subject: game AI is engineering for believability, not research AI. You will meet the agent model that every later technique slots into, see how AI shares the 16.6 ms frame with rendering and physics, survey what FPS bots, RTS opponents and RPG companions each need, and dissect Pac-Man's four ghosts - still the most-cited game AI design 45 years on. The unit closes with difficulty balancing and the designer's contract that AI should win by skill, never by secretly reading the game state.",
        inOneBreath:
          "Game AI is the illusion of intelligence built from cheap, robust, tunable algorithms; it differs from academic AI because a plausible mistake in 20 ms beats a perfect answer in 2 seconds. Agents run a perceive-think-act loop each tick: sensors build a simplified world model, reasoning picks an action, actuators convert it into movement. AI lives inside the game loop with a budget of roughly 1-2 ms per frame, so techniques are staggered across frames and cached. Genres demand different AI: FPS bots aim and navigate, RTS opponents manage economies and armies, RPG companions follow rules and dialogue state. Pac-Man shows the blueprint - four ghosts with distinct target tiles, alternating scatter and chase waves, and a frightened mode. Balance means scheduling challenge in waves, and cheat-free design means the AI reads the same map the player does.",
        sections: [
          {
            number: "1.1",
            title: "What game AI is - and what it is not",
            body: [
              "Game AI is the collection of algorithms that makes non-player characters (NPCs) appear intelligent: they navigate the level, react to the player, coordinate with allies and present a challenge. The operative word is appear. Academic AI - the kind behind chess engines, self-driving research and large language models - tries to find genuinely optimal or general solutions. Game AI tries to find good-enough solutions that run in about a millisecond, never get stuck, never crash the game, and above all are fun to play against. An NPC that makes a believable mistake in 20 milliseconds is better game AI than one that plays perfectly but stalls the frame for two seconds.",
              "This difference in goal changes everything downstream. Academic AI measures success by benchmarks: win rate, accuracy, convergence. Game AI measures success by player experience: did the enemy feel clever, did the companion feel loyal, did the difficulty curve feel fair? As a result, game AI rarely uses deep search or neural networks at runtime; instead it uses layered, hand-tuned techniques - state machines for decisions, A* for paths, steering behaviors for motion - that designers can adjust with sliders and spreadsheets. Determinism matters too: a game AI that behaves wildly differently between two runs of the same level is a bug, whereas variance is expected in research systems.",
              "It helps to list what game AI is not. It is not the opponent's graphics animation, not the physics of ragdolls, and not scripted cutscene dialogue - although all three lie adjacent to it. It is also not necessarily learning: most shipped games ship zero learning at runtime, because a designer cannot patch a neural network that has learned to exploit a level geometry hole. Machine learning enters games mostly offline (as in Unit IV) or through carefully sandboxed systems. The exam-relevant distinction to memorise: academic AI optimises for correctness, game AI optimises for believability under real-time constraints.",
              "A concrete pair of examples fixes the contrast. Deep Blue evaluated 200 million chess positions per second; a real-time strategy bot gets perhaps 0.05 ms of CPU per unit per frame - a difference of nine orders of magnitude - yet the RTS bot must still feel like a general. Conversely, when a first-person shooter bot seems to 'know' you are behind the wall, that is usually a perception system fed extra information plus a tuned reaction delay, not cleverness. Both observations point the same way: game AI is constrained engineering aimed at an experience, and every technique in Units II through V is a tool for manufacturing that experience cheaply.",
            ],
            bullets: [
              "Game AI manufactures believable behavior with cheap, robust algorithms; academic AI searches for optimal or general solutions.",
              "Success metric: player experience and fun, not benchmark accuracy - a plausible mistake at 20 ms beats a perfect answer at 2 s.",
              "Runtime constraints: roughly 1-2 ms of CPU per frame for all AI, split across dozens of agents.",
              "Robustness requirements: never freeze, never get stuck in geometry, never behave nondeterministically without cause.",
              "Most shipped AI is hand-tuned (FSMs, A*, steering), not learned; learning is mostly offline or sandboxed.",
              "Adjacent systems that are NOT game AI: animation, ragdoll physics, scripted cutscenes.",
              "Designer tunability is a feature: parameters live in data files so difficulty can be re-balanced without recompiling.",
            ],
            table: {
              caption: "Game AI versus academic AI on the axes examiners ask about.",
              headers: ["Axis", "Academic AI", "Game AI"],
              rows: [
                ["Goal", "Optimal, general solutions", "Believable, fun behavior"],
                ["Time budget", "Seconds to hours of compute", "About 1-2 ms per frame"],
                ["Failure policy", "Return 'no solution' honestly", "Never fail visibly; fall back to defaults"],
                ["Main techniques", "Search, optimization, deep learning", "FSMs, behavior trees, A*, steering"],
                ["Adaptability", "Learns from data at runtime", "Hand-tuned by designers in data files"],
                ["Verification", "Benchmarks and statistics", "Playtesting and live tuning"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Two different jobs wearing the same name",
              caption:
                "Every technique in this subject is chosen for the right-hand column, not the left.",
              left: {
                heading: "Academic AI",
                items: [
                  "Optimises correctness on benchmarks",
                  "Unbounded or long compute budgets",
                  "Deep search and neural networks",
                  "Learning is central",
                  "Nondeterminism is acceptable",
                ],
              },
              right: {
                heading: "Game AI",
                items: [
                  "Optimises believability and fun",
                  "1-2 ms per frame, hard real-time",
                  "FSMs, behavior trees, A*, steering",
                  "Learning is rare and offline",
                  "Deterministic and endlessly replayable",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "The classic 7-mark question is 'Distinguish game AI from academic AI'. Answer with four axes - goal, time budget, technique, failure policy - and close with one sentence: game AI is optimised for believability under real-time constraints, not for optimality. Naming one shipped example per column (Deep Blue versus Pac-Man ghosts) adds the application mark.",
            },
            keyTerms: [
              { term: "Game AI", definition: "The algorithms giving NPCs the appearance of intelligence: navigation, decision making, reaction and coordination." },
              { term: "NPC", definition: "Non-player character: any agent controlled by the game rather than the player." },
              { term: "Believability", definition: "The quality that behavior looks purposeful and sensible to the player, even when it is not optimal." },
              { term: "Real-time constraint", definition: "The requirement that all AI processing finishes within the frame budget, typically about 1-2 ms." },
            ],
            examQuestions: [
              {
                q: "Define game AI and explain in detail how it differs from academic AI, covering goals, time constraints, techniques and failure behaviour. Illustrate with one example from each side.",
                marks: 7,
                outline: [
                  "Define game AI: algorithms producing believable NPC behavior (navigation, decision making, reaction).",
                  "State the core difference: optimises believability and fun, not optimality.",
                  "Time axis: game AI must finish within about 1-2 ms per frame; academic AI may run minutes or hours.",
                  "Technique axis: FSMs, behavior trees, A*, steering versus deep search and neural networks.",
                  "Failure axis: game AI must never visibly fail - fall back to simple defaults like idle or wander.",
                  "Determinism and tunability: designers re-balance AI from data files; research systems accept variance.",
                  "Examples: Deep Blue (200 million positions/second, optimality) versus Pac-Man ghosts (fixed rules, believability).",
                ],
              },
              {
                q: "Give two reasons why most shipped games avoid machine learning at runtime.",
                marks: 2,
              },
              {
                q: "List three systems adjacent to game AI that are not part of it.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.2",
            title: "The agent model: perceive, think, act",
            body: [
              "Every NPC in every game, from a Pac-Man ghost to a Horizon machine, runs the same abstract skeleton: the perceive-think-act agent loop. Perceive: sensors gather a simplified picture of the world - the agent's own position, health and ammo, plus what it can currently see, hear or be told about other entities. Think: a decision layer converts that picture into an intention, such as 'chase the player' or 'retreat and heal'. Act: actuators execute the intention through steering, pathfinding and animation triggers. The loop repeats every AI tick, typically 10 to 60 times per second depending on the agent's importance.",
              "The perceive stage is deliberately lossy. Games maintain a full world state internally, but the agent only receives what passes through its senses: a line-of-sight raycast, a hearing radius, a teammate's radio message. This sensory filtering is what makes stealth games possible - the guard in Metal Gear Solid misses you because the raycast is blocked, not because the designers scripted your hiding spot. It is also the honest alternative to cheating: if the AI 'knows' something the player cannot observe, it should know it through a simulated sense with a delay and an error model.",
              "The think stage is where the techniques of Unit III live: finite state machines, behavior trees, utility scoring or planners all consume the perception data and emit one intention. The essential property is that thinking produces a decision, not motion - 'move to cover' is a decision; the actual joint angles and wheel speeds are produced downstream. This separation lets designers change personality (which decisions get made) without touching movement code, and lets programmers optimise movement once for all characters.",
              "The act stage turns intentions into game-world changes, usually via steering behaviors and pathfinding (Unit II), plus animation hooks: the decision 'shoot' triggers an aim-and-fire animation state rather than direct physics. A worked trace makes the loop concrete: a guard at (5, 5) perceives a raycast hit on the player at (8, 6); its FSM thinks 'player visible, health high, switch to CHASE'; it acts by asking A* for a path to (8, 6) and applying seek steering toward the first waypoint. One perception event, one decision, one movement command - repeated ten times a second, this is all a believable NPC is.",
            ],
            bullets: [
              "Agent loop: perceive (senses build a world snapshot), think (decision layer picks an intention), act (steering, pathfinding, animation execute it).",
              "Perception is lossy by design: raycasts for vision, radius falloff for hearing, messages for communication.",
              "Sensory filtering enables stealth gameplay and honest AI - knowledge must pass through a simulated sense.",
              "Think emits intentions ('move to cover'), not raw motion; movement is produced downstream by steering and pathfinding.",
              "Decoupling decisions from motion lets designers tune personality and programmers optimise movement independently.",
              "AI tick rates: important enemies update every frame (60 Hz), crowds may update at 5-10 Hz or round-robin.",
              "Worked trace: raycast hit -> FSM enters CHASE -> A* path to player tile -> seek steering toward first waypoint.",
            ],
            codeExample: {
              language: "python",
              caption: "A minimal perceive-think-act agent tick, runnable as pseudocode.",
              code: `def agent_tick(agent, world):
    # PERCEIVE: build a small snapshot through simulated senses
    seen = []
    for target in world.enemies:
        if world.line_of_sight(agent.pos, target.pos):
            seen.append(target)
    # THINK: decision layer (here, a simple rule) picks an intention
    if seen:
        intention = ("chase", seen[0])
    elif agent.health < 30:
        intention = ("flee", agent.home)
    else:
        intention = ("patrol", agent.next_waypoint())
    # ACT: actuators turn the intention into motion
    goal = intention[1]
    path = world.a_star(agent.pos, goal.pos)
    agent.apply_steering(steer_towards(path[0]))
    return intention`,
            },
            diagram: {
              kind: "flow",
              title: "The perceive-think-act loop",
              caption:
                "One pass of this loop per AI tick; every technique in Units II and III slots into one stage.",
              steps: [
                { label: "PERCEIVE", note: "raycasts, hearing radius, messages -> world snapshot" },
                { label: "THINK", note: "FSM / behavior tree / utility picks an intention" },
                { label: "ACT", note: "A* path + steering + animation triggers" },
                { label: "World changes", note: "agents and player move; new state appears" },
                { label: "Loop repeats", note: "next AI tick (10-60 Hz)" },
              ],
            },
            callout: {
              type: "tip",
              title: "Design principle",
              body: "When an exam question describes any NPC behavior, first rewrite it as one perceive-think-act pass before choosing a technique. Markers reward this framing: 'perceives player via raycast, FSM decides CHASE, pathfinder steers to first waypoint' already structures the full answer.",
            },
            keyTerms: [
              { term: "Agent", definition: "An entity that senses its environment, decides and acts autonomously toward goals." },
              { term: "Perception", definition: "The filtered information an agent receives through simulated senses such as raycast vision and hearing radius." },
              { term: "Intention", definition: "The abstract decision produced by the think stage, e.g. 'chase player', independent of how motion is executed." },
              { term: "AI tick", definition: "One execution of the agent loop; important agents tick at frame rate, crowds at 5-10 Hz." },
            ],
            examQuestions: [
              {
                q: "Explain the perceive-think-act model of a game agent. For each stage, state its inputs, outputs and one concrete example, and trace the full loop for a guard that spots the player.",
                marks: 7,
                outline: [
                  "Draw the three-stage loop and state that it runs once per AI tick (10-60 Hz).",
                  "PERCEIVE: inputs are the world state; output is a filtered snapshot via raycast vision, hearing radius, messages.",
                  "Explain why perception is lossy: enables stealth and prevents cheating; knowledge needs a simulated sense.",
                  "THINK: decision layer (FSM/behavior tree/utility) maps snapshot to one intention such as 'move to cover'.",
                  "ACT: steering behaviors and pathfinding convert the intention into motion plus animation triggers.",
                  "Decoupling benefit: designers tune decisions, programmers optimise motion, both independently.",
                  "Worked trace: guard at (5,5) sees player at (8,6) -> FSM CHASE -> A* path -> seek toward first waypoint.",
                ],
              },
              {
                q: "Why should an NPC only 'know' what its simulated senses report?",
                marks: 2,
              },
              {
                q: "What is an AI tick, and why might a 200-agent crowd tick less often than a boss enemy?",
                marks: 3,
              },
            ],
          },
          {
            number: "1.3",
            title: "Integration with the game loop and the CPU budget",
            body: [
              "A game runs as a loop: read input, update simulation, render, repeat, ideally 60 times per second. That leaves about 16.6 milliseconds per frame for everything - rendering typically takes 10-12 ms, physics 2-3 ms, audio and scripting 1-2 ms - so all AI for every agent must fit in roughly 1-2 ms. The AI update is usually a distinct phase inside the simulation step: collect perceptions, run decision making for each agent, then queue movement commands. If AI overruns its slice, the frame rate drops, and dropped frames are felt by the player as the game 'stuttering' exactly when many enemies appear - the worst possible moment.",
              "Budgets force engineering habits that academic AI never needs. The first is load balancing across frames: not every agent needs to think every frame. A common scheme is round-robin or staggered ticking - with 100 agents and a 10 Hz decision rate, only 10 agents think per frame, cutting the cost tenfold. The second is level-of-detail AI: a boss visible on screen gets full perception and a fast tick, while an enemy two rooms away runs a cheap 'sleep' behavior. The third is caching: path plans are stored and reused until the world changes, rather than recomputed each frame.",
              "Timing also shapes algorithm choice. An anytime algorithm is one that can be stopped early and still return a usable answer; A* with a node limit is the standard example - if it cannot finish within the budget this frame, it returns the best partial path or moves greedily and resumes next frame. Decision systems are similarly designed to be interruptible: a behavior tree tick evaluates only a few nodes per frame. The exam phrasing to remember: game AI algorithms must be real-time, anytime and interruptible, because they share the frame with everything else.",
              "A worked budget makes the numbers tangible. Suppose a combat arena holds 20 active agents. Allocating 1.5 ms total gives 0.075 ms per agent per frame. At 60 Hz that is about 4.5 million simple operations per agent per second - plenty for a state machine tick, one steering update and an amortised path search, but hopeless for exhaustive search. This arithmetic explains the whole architecture of the subject: cheap incremental reasoning per frame, expensive planning amortised over frames, and why Unit II caches paths and Unit V's search trees belong to turn-based or heavily budgeted systems.",
            ],
            bullets: [
              "Frame budget: 60 fps gives 16.6 ms total; AI typically gets 1-2 ms shared by all agents.",
              "AI runs as a phase inside the game loop: perceive all agents, decide, queue movement commands.",
              "Staggered ticking: 100 agents at 10 Hz means only 10 think per frame - a tenfold cost cut.",
              "Level-of-detail AI: on-screen bosses tick every frame; off-screen enemies sleep or use cheap updates.",
              "Caching: paths and decisions are stored and reused until the world changes materially.",
              "Anytime algorithms: A* with node limits returns a usable partial path when stopped early.",
              "Worked arithmetic: 1.5 ms / 20 agents = 0.075 ms per agent per frame at 60 Hz.",
            ],
            table: {
              caption: "Where the 16.6 ms of a 60 fps frame goes.",
              headers: ["System", "Typical cost", "Share", "Notes"],
              rows: [
                ["Rendering", "10-12 ms", "about 65%", "Draw calls, shadows, post-processing"],
                ["Physics", "2-3 ms", "about 15%", "Collision and rigid-body simulation"],
                ["AI (all agents)", "1-2 ms", "about 10%", "Perception, decisions, path queries"],
                ["Audio + scripting", "1-2 ms", "about 10%", "Mixing, event scripts, UI logic"],
                ["Headroom", "0-2 ms", "about 5%", "Absorbs spikes; a missed budget drops to 30 fps"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "AI inside the game loop",
              caption:
                "AI is one station on the assembly line - overrun its slot and the whole frame slips.",
              steps: [
                { label: "Input", note: "player controls, network events" },
                { label: "AI update", note: "1-2 ms: perceive, decide, queue moves" },
                { label: "Physics", note: "integrate movement, resolve collisions" },
                { label: "Animation", note: "blend poses from AI states" },
                { label: "Render", note: "draw the frame" },
                { label: "Wait for vsync", note: "16.6 ms deadline" },
              ],
            },
            callout: {
              type: "warning",
              title: "The spike trap",
              body: "The classic AI bug is not slowness on average but a spike: one frame where 12 agents all request A* paths simultaneously and the frame misses its deadline. Real engines stagger path requests through a queue with a per-frame node budget. Mention request queues in any answer about AI performance for full marks.",
            },
            keyTerms: [
              { term: "Game loop", definition: "The repeating input -> update -> render cycle of a game, executed once per frame." },
              { term: "Frame budget", definition: "The milliseconds available per frame (16.6 ms at 60 fps) that all systems, including AI, must respect." },
              { term: "Anytime algorithm", definition: "An algorithm that can be interrupted and still return a usable answer, e.g. node-limited A*." },
              { term: "Level-of-detail AI", definition: "Spending computation proportional to an agent's importance and visibility to the player." },
            ],
            examQuestions: [
              {
                q: "Describe how AI is integrated into the game loop. Explain the CPU budget problem at 60 fps and three techniques used to keep AI within budget, with numbers for a 20-agent scenario.",
                marks: 7,
                outline: [
                  "Sketch the game loop: input, AI update, physics, animation, render, vsync at 16.6 ms.",
                  "Quantify the budget: rendering 10-12 ms, physics 2-3 ms leaves about 1-2 ms for all AI.",
                  "State the per-agent arithmetic: 1.5 ms / 20 agents = 0.075 ms per agent per frame.",
                  "Technique 1: staggered/round-robin ticking - 100 agents at 10 Hz means 10 think per frame.",
                  "Technique 2: level-of-detail AI - visible bosses tick every frame, off-screen enemies sleep.",
                  "Technique 3: caching and anytime algorithms - reuse paths; node-limited A* returns partial paths.",
                  "Warn about spikes: batched path requests are queued with a per-frame node budget.",
                ],
              },
              {
                q: "What is an anytime algorithm, and why does A* need to be one in a real-time game?",
                marks: 2,
              },
              {
                q: "Compute the per-agent AI time per frame for 40 agents sharing a 1.6 ms budget at 60 fps.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.4",
            title: "AI roles across genres",
            body: [
              "Different genres ask game AI to do different jobs, and the techniques of later units are deployed in different mixes per genre. In first-person shooters, bots must aim believably (deliberately imperfect aim with error models and reaction delays of 200-400 ms), navigate 3D levels, and use cover - the Halo series made squad-level behavior trees famous here. In real-time strategy games, the AI opponent is an economy manager: it balances workers, tech and army production while conducting attacks in timed waves, all under the same frame budget as 200 individual units fighting.",
              "Role-playing games contribute the companion problem: an AI ally must follow the player, fight competently, stay alive, and never block a corridor - all while expressing personality through dialogue and approval systems. Sports games simulate referees and athletes with physics-aware decision making; racing games drive opponents using rubber-banding (subtle speed adjustments to keep the race tense) and racing-line optimisation; survival and horror games, from Alien: Isolation onward, run director systems that pace tension by monitoring player stress. Each genre thus prioritises a different slice of the same toolbox.",
              "Comparing two genres sharply shows the split. An FPS bot spends most of its budget on tactical movement - steering, cover selection, aim curves - and its decisions are simple: engage, retreat, reposition. An RTS AI spends most of its budget on resource allocation and planning, and its individual units are nearly state machines. The shared skeleton is still perceive-think-act; what changes is what counts as a perception (a raycast versus an economy report) and what counts as an action (a strafe versus a build order).",
              "For the exam, organise genre AI by the questions each must answer. FPS bots: where is the threat, where is cover, when to shoot? RTS: what do I build, where do I attack, when? RPG companions: how do I help without stealing the player's fun? Racing: how do I drive fast but stay catchable? Horror directors: how scared should the player be right now? Every one of these reduces to perception, decision and actuation - the genre only changes the vocabulary - which is exactly why one subject can cover all of them with five units of techniques.",
            ],
            bullets: [
              "FPS bots: believable imperfect aim (200-400 ms reaction delay, error model), 3D navigation, cover usage, squad tactics (Halo).",
              "RTS opponents: economy management, build orders, timed attack waves, unit micro-control under frame budget.",
              "RPG companions: follow, fight, survive, never block the player - plus personality via dialogue and approval systems.",
              "Racing AI: racing lines plus rubber-banding that subtly adjusts speed to keep races tense but fair.",
              "Horror/survival directors (Alien: Isolation): pace tension by reading player stress signals and scheduling encounters.",
              "Same skeleton everywhere: perceive-think-act with genre-specific perceptions and actions.",
              "Budget split follows the genre: FPS spends on movement, RTS on planning and economy.",
            ],
            table: {
              caption: "Genre-by-genre AI priorities and representative techniques.",
              headers: ["Genre", "Main AI job", "Key techniques", "Shipped example"],
              rows: [
                ["FPS", "Believable combat bots", "Behavior trees, cover systems, aim error", "Halo 2, F.E.A.R."],
                ["RTS", "Opponent strategy and economy", "Build orders, planning, group control", "Civilization IV, StarCraft"],
                ["RPG", "Companions and crowds", "FSMs, companion rules, radiant systems", "The Elder Scrolls V, Baldur's Gate 3"],
                ["Racing", "Catchable fast drivers", "Racing lines, rubber-banding", "Mario Kart, Forza"],
                ["Horror", "Directed tension", "Director systems, sensory AI", "Alien: Isolation"],
                ["Arcade", "Iconic simple rules", "Finite state machines, patterns", "Pac-Man"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Where each genre spends its AI budget",
              caption:
                "Axes: how much AI effort goes to individual unit intelligence versus coordination and planning.",
              axes: { x: "unit-level intelligence ->", y: "^ planning and coordination" },
              quadrants: [
                { label: "RTS / 4X", note: "heavy planning, light per-unit brains" },
                { label: "Sports / team games", note: "both roles and coordination matter" },
                { label: "Arcade / Pac-Man", note: "tiny brains, no planning" },
                { label: "FPS / RPG companions", note: "rich per-agent behavior, little strategy" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Questions are usually phrased as 'Explain the role of AI in any two game genres'. Pick FPS and RTS, give two concrete jobs per genre (aiming and cover for FPS; build order and attack waves for RTS), and name one shipped game each. Two named examples typically carry the final two marks.",
            },
            keyTerms: [
              { term: "Bot", definition: "An AI-controlled participant in a multiplayer-style shooter, designed to read as human-like." },
              { term: "Rubber-banding", definition: "Subtly adjusting AI speed or difficulty relative to the player to keep outcomes close and exciting." },
              { term: "Director system", definition: "A meta-level AI that monitors player state and schedules encounters to control pacing and tension." },
              { term: "Build order", definition: "A scripted early-game production plan an RTS AI follows before switching to adaptive strategy." },
            ],
            examQuestions: [
              {
                q: "Explain the roles played by AI in FPS, RTS and RPG games. For each genre, identify two concrete AI jobs, the main technique used, and one shipped example.",
                marks: 7,
                outline: [
                  "FPS job 1: believable aiming - reaction delays of 200-400 ms and deliberate error models.",
                  "FPS job 2: navigation and cover usage with squad coordination (Halo behavior trees).",
                  "RTS job 1: economy management - worker allocation, build orders, tech choices.",
                  "RTS job 2: attack waves and unit micro-control under the shared frame budget.",
                  "RPG jobs: companions that follow, fight, survive and never block corridors; personality via dialogue.",
                  "Technique mapping: FPS -> behavior trees and steering; RTS -> planning and group AI; RPG -> FSMs and rules.",
                  "Name one shipped example per genre: Halo/F.E.A.R., Civilization IV, Baldur's Gate 3.",
                ],
              },
              {
                q: "What is rubber-banding in racing AI, and why is it tuned carefully?",
                marks: 2,
              },
              {
                q: "What does a director system do in a horror game such as Alien: Isolation?",
                marks: 3,
              },
            ],
          },
          {
            number: "1.5",
            title: "Case study: Pac-Man ghost AI",
            body: [
              "Pac-Man (Namco, 1980) remains the standard case study because it achieves personality with almost no computation. There are four ghosts, each defined by a single rule: a target tile that its greedy movement chases. Blinky (red) targets Pac-Man's current tile - pure pursuit. Pinky (pink) targets four tiles ahead of Pac-Man's facing direction - ambush. Inky (cyan) computes a vector from Blinky to a point two tiles ahead of Pac-Man and doubles it - flanking that depends on teamwork. Clyde (orange) chases like Blinky but switches his target to his scatter corner whenever he is within eight tiles of Pac-Man - the shy one. Four one-line rules, four distinct personalities.",
              "The system's second ingredient is mode scheduling. Ghosts alternate between SCATTER, where all four retreat to their home corners (top-left Blinky, top-right Pinky, bottom-left Clyde, bottom-right Inky), and CHASE, where they use their targeting rules. Early levels run waves of 7 seconds scatter then 20 seconds chase, alternating; later levels lengthen chase and shorten scatter, so difficulty rises by schedule, not by smarter ghosts. A third mode, FRIGHTENED, activates when Pac-Man eats a power pellet: ghosts turn dark blue, reverse direction, move slower, and can be eaten - timed at about 6 seconds that shrinks to 2 seconds and then disappears at high levels.",
              "Movement itself is deliberately simple. Ghosts can never reverse direction voluntarily; at each intersection they pick the legal direction whose next tile minimises Euclidean distance to their current target, with up-turn priority on ties. Because frightened ghosts simply pick randomly at intersections, and because each ghost's rule is public, skilled players can sketch ghost paths by hand - which is exactly why the game feels fair and learnable. This is a key design lesson: transparency of AI rules creates depth from simplicity, the same principle behind chess being deep despite tiny rules.",
              "The exam takeaways generalise beyond Pac-Man. First, personality can be manufactured from targeting variations of one shared movement algorithm - a pattern reappearing in Unit II steering and Unit III utility scoring. Second, difficulty lives in schedules and parameters (wave timings, frightened duration, ghost speed percentages of Pac-Man's speed), not in new code - the pattern behind Unit IV's dynamic difficulty adjustment. Third, mode switching (scatter/chase/frightened) is a finite state machine on a global timer, previewing Unit III. When asked for 'a case study of early game AI', this section is the full-model answer.",
            ],
            bullets: [
              "Four ghosts, four target-tile rules: Blinky pursues Pac-Man's tile; Pinky aims 4 tiles ahead (ambush); Inky doubles a Blinky-based vector (flank); Clyde flees when within 8 tiles (shy).",
              "SCATTER and CHASE alternate on a timer - early levels: 7 s scatter, 20 s chase, repeating.",
              "FRIGHTENED mode after a power pellet: ghosts reverse, slow down, turn edible; about 6 s shrinking to 2 s at high levels.",
              "Movement rule: never voluntarily reverse; at intersections choose the direction minimising Euclidean distance to target.",
              "Difficulty scales by schedule and speed parameters, never by new ghost logic.",
              "Transparent simple rules create learnable depth - players can predict ghosts, which feels fair.",
              "The global mode switcher is a finite state machine - the Unit III preview.",
            ],
            table: {
              caption: "The four ghosts as a specification table - memorise this for the case-study question.",
              headers: ["Ghost", "Colour", "Target rule", "Personality"],
              rows: [
                ["Blinky", "Red", "Pac-Man's current tile", "Direct pursuer, speeds up as pellets vanish"],
                ["Pinky", "Pink", "4 tiles ahead of Pac-Man's facing", "Ambusher, cuts off escape routes"],
                ["Inky", "Cyan", "Double the vector from Blinky to 2 tiles ahead of Pac-Man", "Flanker, teamwork-dependent"],
                ["Clyde", "Orange", "Pac-Man's tile, but his corner when within 8 tiles", "Shy, alternates chase and retreat"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "One ghost decision at an intersection",
              caption:
                "A single greedy rule repeated at every junction produces all four personalities.",
              steps: [
                { label: "Enter junction", note: "ghost reaches a tile with a choice" },
                { label: "Get current mode", note: "SCATTER / CHASE / FRIGHTENED from global timer" },
                { label: "Compute target tile", note: "ghost-specific rule (Blinky: Pac-Man tile)" },
                { label: "Score legal directions", note: "Euclidean distance to target; no reversing" },
                { label: "Take best direction", note: "ties prefer the upward turn" },
              ],
            },
            callout: {
              type: "tip",
              title: "Redraw this in the hall",
              body: "For any Pac-Man question, draw the maze corner sketch with Blinky targeting Pac-Man and Pinky targeting 4 tiles ahead, then annotate the scatter 7 s / chase 20 s cycle. Examiners reward the targeting rules plus one timing figure; the diagram is faster to draw than prose and harder to forget a detail in.",
            },
            keyTerms: [
              { term: "Target tile", definition: "The map tile a ghost steers toward; each ghost's rule computes a different target tile." },
              { term: "SCATTER mode", definition: "Global mode where all ghosts retreat to fixed home corners, giving the player breathing room." },
              { term: "FRIGHTENED mode", definition: "Post-power-pellet mode: ghosts slow, reverse, and can be eaten; duration shrinks with level." },
              { term: "Greedy movement", definition: "Choosing the next direction that minimises straight-line distance to the target, with no lookahead." },
            ],
            examQuestions: [
              {
                q: "Describe the AI of the four ghosts in Pac-Man. Explain each ghost's targeting rule, the scatter/chase/frightened modes with timings, and the movement rule at intersections. Why does this design feel fair?",
                marks: 7,
                outline: [
                  "State the architecture: one shared greedy movement algorithm, four target-tile rules.",
                  "Blinky: Pac-Man's current tile - direct pursuit.",
                  "Pinky: 4 tiles ahead of Pac-Man's facing - ambush; Inky: doubled Blinky-based vector - flank.",
                  "Clyde: Pac-Man's tile, but scatter corner when within 8 tiles - shy behavior.",
                  "Modes: SCATTER 7 s and CHASE 20 s waves early on; FRIGHTENED about 6 s shrinking to 2 s, ghosts reverse and slow.",
                  "Movement rule: no voluntary reversal; at intersections pick direction minimising Euclidean distance to target.",
                  "Fairness: rules are simple, public and predictable, so difficulty comes from timing and speed, not hidden cleverness.",
                ],
              },
              {
                q: "State Inky's targeting rule and the role Blinky's position plays in it.",
                marks: 2,
              },
              {
                q: "How does Pac-Man raise difficulty across levels without new ghost code?",
                marks: 3,
              },
            ],
          },
          {
            number: "1.6",
            title: "Difficulty balancing and cheat-free AI design",
            body: [
              "Difficulty balancing is the discipline of keeping the player at the edge of their ability - challenged but not crushed. The standard model is the flow channel: skill grows with play, and challenge must grow to match it; if challenge outpaces skill the player feels anxiety, if skill outpaces challenge they feel boredom. Game AI contributes through tunable parameters: enemy accuracy, reaction delay, aggression, health, spawn counts and mode timings. Because these are data, not code, a designer can retune a whole campaign in an afternoon - which is why the earlier sections insisted AI parameters live in spreadsheets.",
              "Two balancing strategies dominate. Static scaling ships fixed per-level parameters, cheap and predictable but blind to the actual player. Dynamic difficulty adjustment (DDA) measures player performance - deaths, accuracy, time-to-kill, health lost - and adjusts within guardrails. Resident Evil 4 famously ran a hidden director that lowered enemy accuracy and raised drop rates after repeated deaths, and raised pressure when the player cruised. The craft constraint is invisibility: players resent discovering the game is manipulating them, so DDA changes must be small, slow and masked behind plausible world events.",
              "Cheat-free design is the honesty contract: the AI should act on information a player could in principle obtain, through simulated senses, with human-plausible latency. Cheating takes familiar forms: perfect knowledge (the bot that tracks you through walls), input reading (reacting to your button press on the same frame), superhuman reaction (0 ms responses), or stat inflation dressed as intelligence. Each produces the same player verdict - 'the AI cheated' - because players reverse-engineer rules quickly, and unfairness destroys the believability that game AI exists to create.",
              "The working rule is asymmetric information by design, never by accident. Fighting games solve it with input buffering and reaction windows; RTS skirmish AI handicaps itself with build-order delays; racing AI uses rubber-banding bounded so it can never exceed physics. The exam-worthy summary: fair AI wins by better decisions made from the same information, and when designers want the AI to lose or win, they change explicit difficulty parameters openly tuned to the player segment - not hidden omniscience. Believability and fairness are the same requirement viewed from two angles.",
            ],
            bullets: [
              "Flow channel: keep challenge tracking the player's growing skill; anxiety when challenge dominates, boredom when skill dominates.",
              "Tunable parameters: accuracy, reaction delay, aggression, health, spawns, mode timings - all data, not code.",
              "Static scaling: fixed per-level values; cheap and predictable but blind to individual players.",
              "DDA: measure deaths, accuracy, time-to-kill and adjust within guardrails - Resident Evil 4's hidden director.",
              "Invisibility rule for DDA: small, slow adjustments masked as world events, or players feel manipulated.",
              "Cheat forms: wall-hack knowledge, input reading, zero-latency reactions, hidden stat inflation.",
              "Fair AI acts only on information a player could obtain, through simulated senses with plausible latency.",
            ],
            table: {
              caption: "A cheat-free difficulty parameter sheet for an FPS bot (typical values).",
              headers: ["Parameter", "Easy", "Normal", "Hard", "Cheat-free rationale"],
              rows: [
                ["Reaction delay", "500 ms", "300 ms", "180 ms", "Never below human plausible reaction"],
                ["Aim error (deg)", "6", "3", "1.2", "Error model, not perfect tracking"],
                ["Vision cone", "70 deg", "90 deg", "110 deg", "Simulated sight, never wall-hacks"],
                ["Aggression", "0.3", "0.5", "0.8", "Data-driven, designer-tuned"],
                ["Health multiplier", "0.7", "1.0", "1.3", "Open stat change, not hidden intelligence"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Two ways to make the AI 'better'",
              caption:
                "One branch builds skill from the same information; the other quietly breaks the fairness contract.",
              start: "Need a harder opponent",
              branches: [
                { label: "Tune decision quality", outcome: "Better target selection, positioning and timing from shared information - feels fair", good: true },
                { label: "Tune open parameters", outcome: "Accuracy, health and reaction delay changed openly per difficulty level", good: true },
                { label: "Grant hidden knowledge", outcome: "Wall-hacks and input reading - players detect it and call it cheating", good: false },
                { label: " Inflate stats silently", outcome: "Feels like cheating with extra steps; erodes believability", good: false },
              ],
            },
            callout: {
              type: "warning",
              title: "The DDA backlash rule",
              body: "Dynamic difficulty adjustment fails publicly when players discover it. Write answers that always pair DDA with the word guardrails: bounded adjustment ranges, slow time constants, and changes masked behind diegetic events (fewer patrols spawn, better loot drops). DDA without guardrails is the standard 'why DDA is risky' exam point.",
            },
            keyTerms: [
              { term: "Difficulty balancing", definition: "Tuning AI parameters so challenge continuously matches player skill within the flow channel." },
              { term: "DDA", definition: "Dynamic difficulty adjustment: runtime modification of AI challenge based on measured player performance." },
              { term: "Cheat", definition: "AI use of information or capabilities unavailable to the player, such as wall-hack vision or input reading." },
              { term: "Guardrails", definition: "Bounds placed on DDA so adjustments stay small, slow and invisible to the player." },
            ],
            examQuestions: [
              {
                q: "Explain difficulty balancing in games. Compare static scaling with dynamic difficulty adjustment, describe forms of AI cheating, and state the design contract for cheat-free AI.",
                marks: 7,
                outline: [
                  "Frame with the flow channel: challenge must track skill; anxiety and boredom are the two failure modes.",
                  "Static scaling: fixed per-level parameters - cheap, predictable, blind to individual players.",
                  "DDA: measure deaths, accuracy, time-to-kill; adjust parameters within guardrails at runtime.",
                  "Resident Evil 4 example: hidden director lowers accuracy and raises drops after repeated deaths.",
                  "Cheating forms: perfect knowledge through walls, input reading, superhuman reaction, silent stat inflation.",
                  "Cheat-free contract: AI acts only on player-obtainable information via simulated senses with plausible latency.",
                  "Close on invisibility: DDA must be small, slow and masked; open parameter changes are the honest alternative.",
                ],
              },
              {
                q: "List three forms of AI cheating players commonly detect.",
                marks: 2,
              },
              {
                q: "Why must DDA changes be small and slow? What happens otherwise?",
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
      title: "Movement and Pathfinding",
      summary:
        "How agents actually get around: the family of steering behaviors from seek and arrive through wander and obstacle avoidance, flocking built from separation, alignment and cohesion, waypoint graphs and navigation meshes as level representations, uninformed grid search with BFS and DFS, Dijkstra's guaranteed shortest path, A* with admissible heuristics traced on a real grid, and hierarchical pathfinding with smoothing and replanning.",
      chapter: {
        number: "02",
        title: "Getting There: Steering, Graphs and A*",
        intro:
          "Unit II answers the question players notice first: does the character move convincingly? You will build movement from force-based steering behaviors, compose them into flocking, then solve the discrete problem underneath - finding a path - with BFS, Dijkstra and A* on small grids you can trace by hand. The unit closes with the engineering that ships: hierarchical search for huge maps, path smoothing so agents stop walking like robots, and replanning when the world changes under the agent's feet.",
        inOneBreath:
          "Steering converts desired velocity minus current velocity into a steering force; seek aims straight at the target, arrive slows inside a radius to prevent orbiting, pursue leads the target by time-to-intercept, wander jitters an aimless circle, and obstacle avoidance probes ahead and pushes sideways. Flocking is three averaged rules - separation, alignment, cohesion - producing emergent crowds. Levels become graphs: waypoint nodes or navigation-mesh polygons; search then runs BFS (unweighted, level-order), DFS (no shortest-path guarantee) and Dijkstra (g cost relaxation, optimal for weighted edges). A* adds h to f = g + h; with an admissible h that never overestimates, A* is optimal and expands far fewer nodes - the worked 3x3 grid shows f values of 4 guiding every choice. Huge maps use hierarchical two-level search, paths are smoothed with line-of-sight string pulling, and dynamic obstacles trigger replanning.",
        sections: [
          {
            number: "2.1",
            title: "Steering behaviors: seek, flee and arrive",
            body: [
              "Steering behaviors produce movement by forces, not by paths. Each behavior computes a desired velocity - where the agent wants to be going right now - and returns a steering force equal to desired velocity minus current velocity, truncated to the agent's maximum force. The physics loop integrates this force into acceleration, so motion emerges smoothly: agents accelerate, drift, turn and overshoot like physical bodies instead of teleporting between keyframes. Because each behavior is one small function returning a force, they compose: sum (or weight) several behaviors and the agent juggles goals simultaneously, which is exactly how Unit 2.3 builds flocks.",
              "Seek is the simplest: desired velocity is the maximum speed pointed straight at the target. Its flaw appears near the goal - an agent under seek overshoots, turns back, overshoots again, and orbits the target forever, because nothing tells it to slow down. Flee is seek with the desired velocity negated: run directly away from the threat, which agents combine with others when low on health. Both are trivial to implement in three lines, which is why they anchor the whole family.",
              "Arrive fixes seek's orbiting defect with a deceleration radius. Outside the radius the agent seeks at full speed; inside it, desired speed scales linearly with remaining distance, so the agent glides to a stop at the target instead of oscillating. A worked pair of numbers shows the difference: with max speed 4 units/s and a deceleration radius of 2 units, an agent 5 units away desires 4 units/s toward the target, while an agent 1 unit away desires 2 units/s - and one 0.5 units away desires 1 unit/s, converging smoothly to zero. Every game where characters stop 'at' a spot - cover points, pickups, conversation markers - is arrive in disguise.",
              "The exam framing that scores: steering behaviors are local - each one looks only at its own target and nearby geometry, never at a global plan. That gives robustness (no behavior can fail catastrophically) and cheapness (microseconds per agent), but also means steering alone cannot route around a building: an agent seeking a target through a wall pushes into the wall forever. Local movement needs a global layer - which is precisely the gap waypoints, navmeshes and A* fill in the rest of this unit. State this division of labor explicitly and you have half the Unit II question answered.",
            ],
            bullets: [
              "Core equation: steering force = desired velocity - current velocity, clamped to max force; physics integrates it.",
              "Seek: desired velocity = max speed toward target; suffers orbiting/overshoot near the goal.",
              "Flee: negated seek; used alone or weighted in when health is low.",
              "Arrive: inside a deceleration radius, desired speed scales with distance - worked: agent 5 units away wants 4 units/s, 1 unit away wants 2 units/s.",
              "Steering is local: no behavior can route around a wall; global pathfinding supplies the route.",
              "Behaviors compose by weighted summation - one agent can arrive at cover while avoiding obstacles.",
              "Force-based motion gives natural acceleration, drift and overshoot for free.",
            ],
            codeExample: {
              language: "python",
              caption: "Seek, flee and arrive as three tiny force functions.",
              code: `def truncate(vec, max_len):
    n = (vec[0]**2 + vec[1]**2) ** 0.5
    if n <= max_len or n == 0:
        return vec
    k = max_len / n
    return (vec[0] * k, vec[1] * k)

def seek(pos, vel, target, max_speed, max_force):
    # desired: full speed straight at the target
    dx, dy = target[0] - pos[0], target[1] - pos[1]
    desired = truncate((dx, dy), max_speed)
    return truncate((desired[0] - vel[0], desired[1] - vel[1]), max_force)

def arrive(pos, vel, target, max_speed, max_force, radius=2.0):
    dx, dy = target[0] - pos[0], target[1] - pos[1]
    dist = (dx**2 + dy**2) ** 0.5
    speed = max_speed if dist > radius else max_speed * dist / radius
    desired = truncate((dx, dy), speed)   # slows as dist shrinks
    return truncate((desired[0] - vel[0], desired[1] - vel[1]), max_force)

def flee(pos, vel, threat, max_speed, max_force):
    s = seek(pos, vel, threat, max_speed, max_force)
    return (-s[0], -s[1])                  # negate seek`,
            },
            diagram: {
              kind: "compare",
              title: "Seek versus arrive near the goal",
              caption:
                "The deceleration radius is the only difference - and it removes the orbit entirely.",
              left: {
                heading: "Seek (orbits)",
                items: [
                  "Desired speed is always max_speed",
                  "Overshoots the target, turns back",
                  "Oscillates around the goal forever",
                  "Fine for chasing moving targets",
                  "Three lines of code",
                ],
              },
              right: {
                heading: "Arrive (settles)",
                items: [
                  "Speed scales with distance inside radius",
                  "5 units away -> full speed; 1 unit -> half",
                  "Glides to a stop at the goal",
                  "Used for cover, pickups, meeting points",
                  "One extra distance check",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "When asked to 'explain steering behaviors', always open with the master equation - steering force = desired velocity minus current velocity - then present seek, flee and arrive as three ways of computing the desired velocity. Writing the equation first structures the answer and is itself a mark.",
            },
            keyTerms: [
              { term: "Steering behavior", definition: "A local rule that computes a steering force from a desired velocity minus the agent's current velocity." },
              { term: "Seek", definition: "Desired velocity at maximum speed straight toward the target; prone to orbiting near the goal." },
              { term: "Arrive", definition: "Seek with a deceleration radius: speed scales with remaining distance so the agent stops at the target." },
              { term: "Flee", definition: "Seek with the desired velocity negated: maximum-speed movement directly away from a threat." },
            ],
            examQuestions: [
              {
                q: "Explain the steering behavior model with the force equation. Describe seek, flee and arrive, explain why seek orbits the goal and how arrive fixes it, with a worked speed example.",
                marks: 7,
                outline: [
                  "State the master equation: steering force = desired velocity - current velocity, clamped to max force.",
                  "Explain force integration: physics converts force to acceleration, producing natural motion.",
                  "Seek: desired = max speed toward target; show the orbiting overshoot failure near the goal.",
                  "Flee: negated seek, used when threatened or low on health.",
                  "Arrive: inside deceleration radius, desired speed = max_speed * distance / radius.",
                  "Worked numbers: radius 2, max speed 4 -> agent at 5 units wants 4 units/s, at 1 unit wants 2 units/s.",
                  "Note the local/global division: steering cannot route around walls; A* supplies global routes.",
                ],
              },
              {
                q: "Why does pure seek make an agent orbit its target?",
                marks: 2,
              },
              {
                q: "An agent uses arrive with max speed 6 and radius 3. What desired speed at distances 8, 3 and 1.5?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.2",
            title: "Pursue, wander and obstacle avoidance",
            body: [
              "Pursue targets moving agents correctly. Seek at a stationary snapshot always trails a fleeing victim; pursue instead predicts where the target will be. The prediction is time-to-intercept: t = distance / combined speed, and the agent seeks the point target_position + target_velocity * t. Worked example: target at (10, 0) moving at (0, 4) units/s, pursuer at (0, 0) with speed 5. Distance 10 gives first guess t = 2 s, predicted point (10, 8), new distance about 12.8, refined t = 2.56 s - the pursuer aims ahead of the victim rather than behind, which is why pursue reads as 'intent' to the player. Evade is its negation and shares the math.",
              "Wander manufactures believable idling. The classic implementation keeps a wander circle projected ahead of the agent; each frame a random displacement moves the target point on that circle's rim, and the agent steers toward it. Because the jitter is bounded, the agent meanders in smooth curves instead of twitching - the difference between a guard that 'patrols aimlessly but naturally' and one that vibrates. Wander is the default behavior for NPCs with nothing better to do, and its bounded randomness is the template for adding noise to any behavior.",
              "Obstacle avoidance is the behavior that keeps agents alive among geometry. The standard version casts a probe whisker ahead of the agent (typically 2-3 body-lengths). If the whisker hits an obstacle, the behavior computes a lateral push away from the hit point, scaled by how close the obstacle is - closer hits push harder. Worked numbers: agent moving at (4, 0) with a wall 1.5 units ahead; the avoidance force adds (0, 3), so the combined desired velocity turns the agent roughly 36 degrees off the wall while its forward speed carries it past. Collision cylinders in racing games and whisker raycasts in shooters are this same behavior.",
              "Real agents run several behaviors at once and blend their forces by weights: for example 0.6 pursue + 0.3 obstacle avoidance + 0.1 wall containment, all truncated to the max force so no single behavior dominates. The failure mode to know for exams is conflict: two behaviors pulling at 90 degrees can cancel and stall the agent, which engines solve with priority ordering (avoidance always overrides pursuit) or by summing only the top-k weighted behaviors. This composition mechanism is the bridge from single behaviors to the emergent flocks of the next section.",
            ],
            bullets: [
              "Pursue: predict target position at t = distance / combined speed and seek that point, not the current position.",
              "Worked pursue numbers: target (10,0) moving (0,4), pursuer speed 5 -> first guess t = 2 s, refined t = 2.56 s ahead of the victim.",
              "Evade = negated pursue; identical prediction math.",
              "Wander: jittered target point on a circle projected ahead of the agent; bounded jitter gives smooth meandering.",
              "Obstacle avoidance: forward whisker probe; on hit apply a lateral push scaled by proximity.",
              "Worked avoidance: forward (4, 0) plus push (0, 3) turns the agent about 36 degrees off the wall.",
              "Blending: weighted force sums with priority rules; conflicts can cancel, so avoidance outranks pursuit.",
            ],
            codeExample: {
              language: "python",
              caption: "Pursue with time-to-intercept prediction plus a whisker obstacle-avoidance force.",
              code: `def pursue(pos, vel, tpos, tvel, max_speed, max_force):
    dist = ((tpos[0]-pos[0])**2 + (tpos[1]-pos[1])**2) ** 0.5
    t = dist / max(max_speed + (tvel[0]**2+tvel[1]**2)**0.5, 0.001)
    predicted = (tpos[0] + tvel[0]*t, tpos[1] + tvel[1]*t)
    return seek(pos, vel, predicted, max_speed, max_force)

def avoid(pos, heading, obstacles, probe=3.0, push=3.0):
    # heading is a unit vector; whisker looks probe units ahead
    ahead = (pos[0] + heading[0]*probe, pos[1] + heading[1]*probe)
    for ob, radius in obstacles:
        d = ((ahead[0]-ob[0])**2 + (ahead[1]-ob[1])**2) ** 0.5
        if d < radius:
            # lateral push away from obstacle centre, scaled by closeness
            lat = (ahead[0]-ob[0], ahead[1]-ob[1])
            k = push * (1.0 - d / radius)
            return (lat[0]*k, lat[1]*k)
    return (0.0, 0.0)   # clear path: no correction needed`,
            },
            diagram: {
              kind: "flow",
              title: "One frame of blended steering",
              caption:
                "Pursuit aims at the future; avoidance vetoes the crash; the sum steers the body.",
              steps: [
                { label: "Predict intercept point", note: "t = distance / combined speed" },
                { label: "Compute pursue force", note: "seek the predicted point" },
                { label: "Cast avoidance whisker", note: "probe 2-3 body-lengths ahead" },
                { label: "Add avoidance push", note: "lateral, scaled by proximity" },
                { label: "Sum with weights", note: "avoidance priority; truncate to max force" },
              ],
            },
            callout: {
              type: "tip",
              title: "Redraw the whisker",
              body: "For obstacle avoidance, sketch the agent as a triangle, draw the whisker ray ahead, the obstacle circle, and the sideways arrow push. The sketch plus the sentence 'closer obstacles push harder' is a complete 3-mark answer; the proportionality to (1 - distance / radius) earns the final mark.",
            },
            keyTerms: [
              { term: "Pursue", definition: "Seek applied to a predicted intercept point: target position plus its velocity times time-to-intercept." },
              { term: "Wander", definition: "A behavior steering toward a randomly jittered point on a circle ahead of the agent, producing smooth aimless motion." },
              { term: "Obstacle avoidance", definition: "A whisker probe ahead of the agent that returns a lateral steering force scaled by obstacle proximity." },
              { term: "Behavior blending", definition: "Combining several steering forces by weights with priority rules, truncated to the agent's maximum force." },
            ],
            examQuestions: [
              {
                q: "Explain pursue, wander and obstacle avoidance steering behaviors. Give the time-to-intercept formula with a worked prediction and describe how obstacle avoidance computes its lateral force.",
                marks: 7,
                outline: [
                  "Pursue motivation: seeking a moving target's snapshot always trails; prediction reads as intent.",
                  "Formula: predicted point = target position + target velocity * t, with t = distance / combined speed.",
                  "Worked example: target (10,0) at velocity (0,4), pursuer speed 5 -> t = 2 s first guess, refined 2.56 s.",
                  "Evade is negated pursue.",
                  "Wander: jittered rim point on a forward-projected circle; bounded jitter keeps motion smooth.",
                  "Obstacle avoidance: whisker probe; on hit, lateral push proportional to (1 - distance / radius).",
                  "Blending: weighted sum with priority (avoidance over pursuit); note the cancellation failure mode.",
                ],
              },
              {
                q: "Why must the wander jitter be bounded?",
                marks: 2,
              },
              {
                q: "An agent moves at (3, 0) and receives an avoidance push (0, 4). Estimate the turn angle.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.3",
            title: "Flocking: separation, alignment and cohesion",
            body: [
              "Flocking (Reynolds' boids, 1987) is the classic demonstration that complex group motion needs no leader. Each bird follows three local rules computed against its neighbors within a perception radius, typically 2-4 body-lengths. Separation steers away from neighbors that are too close, preventing collisions. Alignment steers toward the average heading of nearby flockmates, synchronising direction. Cohesion steers toward the center of mass of nearby flockmates, keeping the group together. Each rule outputs an ordinary steering force; the three are summed with weights, and the flock emerges - swirling, splitting around obstacles and reforming - from purely local interactions.",
              "A worked micro-example fixes the mechanics. Bird B at (0, 0) sees three neighbors: at (1, 0) moving (0, 1), at (2, 1) moving (1, 0), and at (4, 0) moving (0, 1). Separation pushes B mostly in the -x direction, scaled hard against the nearest bird at distance 1. Alignment averages the neighbor velocities to (0.33, 0.67) and steers B's heading toward it. Cohesion aims at the centroid (7/3, 1/3) - about (2.33, 0.33) - pulling B right and slightly up. Summed and truncated, B turns right while keeping clear of its nearest neighbor; multiply by 500 birds and you get a murmuration.",
              "The weights are the design surface. High separation with low cohesion gives loose swarms that scatter when threatened; high alignment gives disciplined streams, the look of a fish school turning in unison; high cohesion produces tight clumps that can crush into obstacles unless avoidance is added. Game tuning also extends the rule set: predators add a flee-from-predator force, and crowd systems (Assassin's Creed style) swap cohesion for path-following along navmesh routes while keeping separation for collision safety. Understanding that flocking is just weighted steering composition - Section 2.2's mechanism - makes the whole system predictable.",
              "For exams, flocking carries two marks of theory. First, emergence: no bird knows the flock exists; group patterns are emergent properties of local rules, the same principle behind ant-colony and cellular-automata systems. Second, complexity: each bird costs only O(k) work for its k neighbors, but naive neighbor search is O(n^2) for n birds, so engines use spatial partitioning - grid buckets or quadtrees - to query nearby birds in roughly O(1) each. State both points and the standard 'explain flocking' question is fully covered from rule to shipped implementation.",
            ],
            bullets: [
              "Three rules, each a steering force summed with weights: separation, alignment, cohesion (Reynolds' boids, 1987).",
              "Separation: push away from neighbors inside a personal-space radius, strongest against the nearest.",
              "Alignment: steer toward the average heading of neighbors within the perception radius.",
              "Cohesion: steer toward the centroid of neighbors, keeping the group connected.",
              "Worked example: neighbors at (1,0), (2,1), (4,0) with velocities averaging (0.33, 0.67) turn the bird right while separation holds distance.",
              "Emergence: no leader and no flock-level code; group behavior emerges from local rules - O(k) per bird.",
              "Implementation detail: spatial partitioning (grid buckets, quadtrees) reduces naive O(n^2) neighbor lookup.",
            ],
            codeExample: {
              language: "python",
              caption: "The three boid rules for one bird, summed with weights.",
              code: `def flock_force(bird, neighbours, sep_w=1.5, ali_w=1.0, coh_w=1.0):
    if not neighbours:
        return (0.0, 0.0)
    sep = [0.0, 0.0]; ali = [0.0, 0.0]; cen = [0.0, 0.0]
    for other in neighbours:            # neighbours within perception radius
        dx = bird[0] - other.x; dy = bird[1] - other.y
        d2 = dx*dx + dy*dy
        sep[0] += dx / max(d2, 0.01)    # inverse-square: nearest dominates
        sep[1] += dy / max(d2, 0.01)
        ali[0] += other.vx; ali[1] += other.vy
        cen[0] += other.x;  cen[1] += other.y
    n = len(neighbours)
    ali = (ali[0]/n, ali[1]/n)          # average heading
    cohesion = seek_force(bird, (cen[0]/n, cen[1]/n))
    return (sep_w*sep[0] + ali_w*ali[0] + coh_w*cohesion[0],
            sep_w*sep[1] + ali_w*ali[1] + coh_w*cohesion[1])`,
            },
            diagram: {
              kind: "flow",
              title: "One boid's per-frame decision",
              caption:
                "Three local forces, one weighted sum - and the murmuration appears.",
              steps: [
                { label: "Query neighbours", note: "spatial grid lookup within radius" },
                { label: "Separation force", note: "push away, inverse-square with distance" },
                { label: "Alignment force", note: "toward average neighbour heading" },
                { label: "Cohesion force", note: "toward neighbour centroid" },
                { label: "Sum and apply", note: "weights + truncate to max force" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "The full-mark flocking answer names all three rules, gives one sentence each on what they prevent or produce (collision, direction, group integrity), states the emergent-behavior point, and includes one weight-tuning observation such as 'raise separation for scattering crowds'. The tuning sentence distinguishes a memorised answer from an understood one.",
            },
            keyTerms: [
              { term: "Boids", definition: "Reynolds' 1987 flocking model: each agent applies separation, alignment and cohesion steering forces." },
              { term: "Separation", definition: "Steering away from close neighbors to prevent collisions; scaled inversely with distance." },
              { term: "Alignment", definition: "Steering toward the average heading of nearby flockmates so the group moves in unison." },
              { term: "Cohesion", definition: "Steering toward the centroid of nearby flockmates to keep the flock connected." },
              { term: "Emergence", definition: "Group-level patterns arising from purely local rules with no leader or global coordination." },
            ],
            examQuestions: [
              {
                q: "Explain the flocking algorithm. Describe separation, alignment and cohesion with their formulas, show a worked example for one bird among three neighbours, and explain why flocking exhibits emergent behavior.",
                marks: 7,
                outline: [
                  "Origin: Reynolds' boids (1987); each rule outputs a steering force summed with weights.",
                  "Separation: inverse-distance push away from close neighbors; prevents collisions.",
                  "Alignment: steer toward average neighbor heading; synchronises the group.",
                  "Cohesion: steer toward neighbor centroid; keeps the flock together.",
                  "Worked example: bird at (0,0), neighbors at (1,0), (2,1), (4,0) - average heading (0.33, 0.67), centroid about (2.33, 0.33).",
                  "Emergence: no leader, O(k) per bird; group patterns arise purely from local rules.",
                  "Engineering note: spatial partitioning avoids the naive O(n^2) neighbor search.",
                ],
              },
              {
                q: "What happens to a flock if the separation weight is set near zero?",
                marks: 2,
              },
              {
                q: "How do engines find a boid's neighbours efficiently?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.4",
            title: "Waypoint graphs and navigation meshes",
            body: [
              "Pathfinding needs the continuous world reduced to a discrete graph. The oldest reduction is the waypoint graph: designers (or tools) place nodes at strategically meaningful positions - corridor middles, junctions, room centers, doorways - and connect them with edges an agent can walk. An agent pathfinds over the graph, then steers node to node. Waypoint graphs are tiny and fast - a level might hold 200 nodes - but they have a known failure: paths only exist where nodes were placed, so coverage gaps produce agents walking through walls' worth of 'no path found', and off-graph movement between nodes needs extra collision logic.",
              "The navigation mesh (navmesh) replaced waypoints as the industry standard. The walkable surface is triangulated into convex polygons; each polygon is a node, and adjacency between polygons forms the graph. Convexity is the magic property: any straight line between two points inside one convex polygon is guaranteed walkable, so an agent can cut corners inside a polygon instead of marching node to node, and a single doorway polygon handles crossing it. Modern engines (Unreal, Unity) generate and edit navmeshes automatically from level geometry, including slopes, stairs and dynamic obstacles like dropped doors.",
              "The comparison examiners want: waypoints are cheap, human-controllable and ideal for scripted or aerial movement (flying agents follow a rail of points perfectly), but fragile against level changes and prone to coverage gaps. Navmeshes are automatic, robust to geometry changes, and support smooth paths plus dynamic avoidance, at the cost of larger memory and more complex generation. A rule of thumb used in studios: navmesh for ground locomotion in open levels, waypoints for rails, scripted sequences and flying routes. Both feed the same search algorithms - only the node semantics differ.",
              "Both representations set up the same pipeline that the next sections formalise: build graph -> search for a polygon/node sequence -> convert the sequence to a string of positions (the funnel algorithm pulls the path tight through polygon corners) -> steer along it with Unit 2.1's behaviors. Holding this pipeline in mind makes later questions easy: when asked 'how does an agent walk from A to B', answer representation, search, then steering - three named stages with one technique each.",
            ],
            bullets: [
              "Waypoint graph: designer-placed nodes at junctions, doors and room centers with walkable edges - typically 100-500 nodes per level.",
              "Waypoint strengths: tiny memory, full designer control, perfect for flying and scripted rails.",
              "Waypoint weaknesses: coverage gaps cause 'no path', fragile to level edits, off-graph movement needs extra logic.",
              "Navmesh: walkable surface decomposed into convex polygons; polygons are nodes, adjacency is the graph.",
              "Convexity guarantee: any straight line inside one convex polygon is walkable - agents cut corners naturally.",
              "Engines auto-generate navmeshes from geometry (Unreal, Unity), including slopes, stairs and dynamic blockers.",
              "Pipeline: graph -> search (next sections) -> string-pulled positions -> steering behaviors execute it.",
            ],
            table: {
              caption: "Waypoint graphs versus navigation meshes on the axes exams ask for.",
              headers: ["Axis", "Waypoint graph", "Navigation mesh"],
              rows: [
                ["Nodes represent", "Designer-placed points", "Convex walkable polygons"],
                ["Coverage", "Only where nodes placed; gaps likely", "Full walkable surface by construction"],
                ["Path quality", "Corner-cutting manual; zigzag common", "Smooth; funnel algorithm pulls corners"],
                ["Robustness to edits", "Manual re-placement needed", "Regenerated automatically"],
                ["Memory and build cost", "Very small, hand-built", "Larger; generated by tooling"],
                ["Best use", "Flying agents, scripted rails", "Ground locomotion in open levels"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Two ways to discretise a level",
              caption:
                "Same search algorithms downstream - only the meaning of a node changes.",
              left: {
                heading: "Waypoint graph",
                items: [
                  "Nodes at doors, junctions, centers",
                  "Hand-placed and hand-connected",
                  "Gaps cause missing paths",
                  "Ideal for flying and rails",
                  "Tiny memory footprint",
                ],
              },
              right: {
                heading: "Navigation mesh",
                items: [
                  "Nodes are convex polygons",
                  "Generated from level geometry",
                  "Full surface coverage",
                  "Corner-cutting via funnel algorithm",
                  "Standard in Unreal and Unity",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "Coverage gap is the classic waypoint bug",
              body: "If an exam scenario says an agent 'gets stuck' or 'no path found' between two rooms, diagnose missing waypoint coverage or a disconnected graph component. Then state the navmesh fix: automatic polygon coverage of the entire walkable surface with adjacency checks. Diagnosis-then-fix is the marking structure.",
            },
            keyTerms: [
              { term: "Waypoint graph", definition: "A sparse graph of designer-placed positions connected by walkable edges, used for pathfinding." },
              { term: "Navigation mesh", definition: "A decomposition of the walkable surface into convex polygons; polygons act as graph nodes." },
              { term: "Convex polygon", definition: "A polygon in which every straight segment between interior points stays inside - guaranteeing walkable shortcuts." },
              { term: "Funnel algorithm", definition: "The string-pulling method that converts a polygon corridor into the shortest geometric path through its corners." },
            ],
            examQuestions: [
              {
                q: "Compare waypoint graphs and navigation meshes as level representations for pathfinding. Explain how a navmesh is built, why polygon convexity matters, and when each representation is preferred.",
                marks: 7,
                outline: [
                  "Define both: designer-placed node graph versus polygon decomposition of walkable surface.",
                  "Waypoint strengths: tiny, designer-controlled, perfect for flying/scripted rails.",
                  "Waypoint weaknesses: coverage gaps, fragile to edits, zigzag paths, off-graph logic needed.",
                  "Navmesh construction: triangulate walkable area into convex polygons; adjacency forms the graph.",
                  "Convexity property: any segment inside a polygon is walkable, enabling corner-cutting; funnel algorithm smooths.",
                  "Tooling: Unreal/Unity auto-generate navmeshes including slopes and dynamic blockers.",
                  "Preference rule: navmesh for ground locomotion, waypoints for rails and aerial paths.",
                ],
              },
              {
                q: "Why must navmesh polygons be convex?",
                marks: 2,
              },
              {
                q: "Name the algorithm that shortens a polygon-corridor path into a smooth geometric one.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.5",
            title: "Uninformed grid search: BFS, DFS and Dijkstra",
            body: [
              "Many games discretise levels into grids - tile maps, occupancy grids - and pathfinding becomes graph search from a start tile to a goal tile. Breadth-first search explores level by level: all tiles one step away, then two steps, and so on, using a FIFO queue. Because it reaches tiles in order of hop count, BFS is guaranteed to find the path with the fewest moves - optimal whenever every move costs the same. Its cost is breadth: on a grid with branching factor b and depth d it expands O(b^d) tiles, and it ignores terrain costs entirely.",
              "Depth-first search dives along one branch as far as possible before backtracking, using a stack (or recursion). It is memory-cheap - O(d) instead of O(b^d) - and useful for maze generation and connectivity checks, but the first path it finds is whatever branch it dove down: arbitrary length, often terrible. Exam rule: DFS finds a path fast and wrong-length; BFS finds the shortest path by moves; neither understands edge costs like 'road costs 1, mud costs 3'.",
              "Dijkstra's algorithm fixes the cost blindness. It maintains, for every reached tile, the cheapest known cost g to get there, and expands the frontier tile with smallest g using a priority queue. Each expansion relaxes neighbors: if g(current) + edge_cost < g(neighbor), update the neighbor's g and record the current tile as its parent. When the goal is expanded, walking parent pointers backwards reconstructs the optimal path. A worked step: start g = 0; its road neighbor becomes g = 1 and its mud neighbor g = 3; the queue pops the road neighbor first because 1 < 3; from there a goal at road distance 2 gets g = 2, so the algorithm finishes knowing the mud shortcut at cost 3 is worse.",
              "The trio's trade-offs are the exam answer. BFS: optimal for uniform costs, simple, but expands in all directions equally - wasteful when the goal is one compass point away. DFS: minimal memory, no optimality, best for generation and reachability. Dijkstra: optimal for any non-negative edge costs, but still radiates a circular search wave from the start with no sense of direction. That last weakness - exploring backward and sideways when the goal lies east - is exactly what A* repairs in the next section by adding a heuristic estimate pointing the search toward the goal.",
            ],
            bullets: [
              "BFS: FIFO queue, explores by hop count, guaranteed fewest-moves path when all moves cost the same.",
              "BFS cost: O(b^d) expansions; ignores terrain costs - road and mud tiles count identically.",
              "DFS: stack/recursion, dives one branch then backtracks; O(d) memory but path length is arbitrary.",
              "DFS uses: maze generation, connectivity/reachability checks - not shortest paths.",
              "Dijkstra: priority queue on g (cheapest known cost from start); relax g via g(current) + edge_cost.",
              "Dijkstra guarantees the optimal path for non-negative costs, with parent pointers reconstructing it.",
              "Shared weakness: no sense of direction - all three radiate blindly; A* adds the heuristic.",
            ],
            table: {
              caption: "The three uninformed searches side by side.",
              headers: ["Algorithm", "Frontier", "Optimal?", "Cost model", "Typical game use"],
              rows: [
                ["BFS", "FIFO queue", "Yes, fewest moves", "Uniform cost only", "Simple tile paths, flooding checks"],
                ["DFS", "Stack", "No", "Ignores costs", "Maze generation, reachability"],
                ["Dijkstra", "Priority queue on g", "Yes, cheapest cost", "Any non-negative costs", "Weighted terrain, multi-goal field"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Dijkstra's expansion loop",
              caption:
                "Pop the cheapest frontier tile, relax its neighbors, repeat until the goal pops - then read parents backwards.",
              stages: [
                { label: "Init", note: "g(start) = 0, all others infinite; frontier = priority queue" },
                { label: "Pop min-g tile", note: "cheapest reached-but-unexpanded tile" },
                { label: "Relax neighbors", note: "if g(cur) + cost < g(nb), update g and parent" },
                { label: "Goal popped?", note: "yes -> stop; no -> back to pop" },
                { label: "Reconstruct", note: "follow parent pointers from goal to start" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "The 'distinguish BFS, DFS and Dijkstra' question wants exactly three contrasts: queue type (FIFO / stack / priority queue), optimality (fewest moves / no guarantee / cheapest cost), and cost awareness (uniform / none / weighted). A one-line memory note - DFS for mazes, BFS for uniform, Dijkstra for weighted - lands the application mark.",
            },
            keyTerms: [
              { term: "BFS", definition: "Breadth-first search: level-order exploration with a FIFO queue; finds fewest-move paths under uniform costs." },
              { term: "DFS", definition: "Depth-first search: dives along a branch using a stack; memory-cheap but path length is arbitrary." },
              { term: "Dijkstra's algorithm", definition: "Expands the minimum-g frontier tile and relaxes neighbors; optimal for any non-negative edge costs." },
              { term: "Relaxation", definition: "Updating a neighbor's g to g(current) + edge cost whenever that route is cheaper, recording the parent." },
            ],
            examQuestions: [
              {
                q: "Compare breadth-first search, depth-first search and Dijkstra's algorithm for grid pathfinding. State the frontier structure, optimality guarantees and cost model of each, and trace Dijkstra's first two expansions on a small grid.",
                marks: 7,
                outline: [
                  "BFS: FIFO queue, level-order expansion, optimal fewest-move path for uniform costs, O(b^d) expansions.",
                  "DFS: stack, dives and backtracks, O(d) memory, arbitrary path length - used for mazes and reachability.",
                  "Dijkstra: priority queue on g, optimal for non-negative edge costs via relaxation.",
                  "Trace setup: start g = 0; road neighbor g = 1, mud neighbor g = 3.",
                  "Pop road neighbor (1 < 3); relax its neighbors; goal at road distance 2 reaches g = 2.",
                  "Conclude: mud route costs 3 so the road route wins; parent pointers rebuild the path.",
                  "Shared weakness: no goal direction - motivates A*'s heuristic in the next section.",
                ],
              },
              {
                q: "Why is DFS unsuitable for shortest-path queries?",
                marks: 2,
              },
              {
                q: "What does relaxation update, and when does it fire?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.6",
            title: "A* with admissible heuristics - worked grid",
            body: [
              "A* is Dijkstra plus a compass. Each tile carries f = g + h, where g is the exact cost from the start and h is a heuristic estimate of the remaining cost to the goal. The search always expands the frontier tile with the smallest f, so cheap-and-promising tiles pop first and the search wave leans toward the goal instead of radiating blindly. On a square grid the standard heuristic is Manhattan distance: h = |x_goal - x| + |y_goal - y| (Chebyshev or octile distance when diagonal moves are allowed).",
              "The optimality condition is admissibility: h never overestimates the true remaining cost. Manhattan distance is admissible on a 4-connected grid because every move changes one coordinate by one, so it counts at best exactly the moves remaining. If h ever overestimates - say a heuristic multiplied by 1.5 - the search may skip the true optimal path and A* loses its guarantee. Consistency (h(current) <= cost(current, next) + h(next)) is the stronger property guaranteeing that once a tile is expanded its g is final; admissible plus consistent is the safe pair to cite in exams.",
              "A worked 3x3 grid shows the whole algorithm. Tiles (0,0) start, (2,2) goal, (1,1) blocked, unit costs, Manhattan h. Expand (0,0): f = 0 + 4 = 4; neighbors (1,0) g = 1, h = 3, f = 4 and (0,1) g = 1, h = 3, f = 4. Expand (1,0): neighbor (2,0) g = 2, h = 2, f = 4; (1,1) is blocked. Expand (0,1): (0,2) g = 2, h = 2, f = 4; (1,1) blocked. Expand (2,0): (2,1) g = 3, h = 1, f = 4. Expand (0,2): (1,2) g = 3, h = 1, f = 4. Expand (2,1): goal (2,2) g = 4, h = 0, f = 4 - goal popped, path (0,0) -> (1,0) -> (2,0) -> (2,1) -> (2,2), length 4. Every tie had f = 4: an admissible heuristic packs the whole search onto the optimal contour.",
              "Two practical notes complete the picture. First, A*'s speedup over Dijkstra scales with heuristic quality: with a perfect h it walks straight to the goal; with h = 0 it degenerates exactly into Dijkstra. Second, in games A* is always budgeted - node caps per frame, path caches, and request queues (Section 1.3) - and variants like jump point search accelerate uniform grids by skipping straight runs. For exams, memorise the expansion trace above as a table; it is the single most reproducible 7-mark answer in this unit.",
            ],
            bullets: [
              "Evaluation function: f = g + h; expand the frontier tile with the smallest f - Dijkstra plus a goal-directed compass.",
              "Manhattan heuristic: h = |dx| + |dy| for 4-connected grids; octile/Chebyshev when diagonals are allowed.",
              "Admissible: h never overestimates true remaining cost; Manhattan is admissible because each move changes one axis by 1.",
              "Consistency: h(current) <= cost(current, next) + h(next); with it, expanded tiles never need re-expansion.",
              "Worked 3x3 trace: start (0,0), goal (2,2), (1,1) blocked - frontier f values all 4, path found of length 4.",
              "h = 0 degenerates A* into Dijkstra; a perfect h walks straight to the goal - quality controls speed.",
              "Production practice: node budgets, path caches, request queues; jump point search accelerates uniform grids.",
            ],
            codeExample: {
              language: "python",
              caption: "A* on a small grid with Manhattan heuristic - matches the worked trace.",
              code: `import heapq

def a_star(grid, start, goal):
    # grid: 2D list, 1 = blocked; 4-connected moves
    h = lambda p: abs(p[0]-goal[0]) + abs(p[1]-goal[1])
    frontier = [(h(start), 0, start)]       # (f, g, tile)
    g_best = {start: 0}
    parent = {start: None}
    while frontier:
        f, g, cur = heapq.heappop(frontier)
        if cur == goal:                     # reconstruct path
            path = []
            while cur: path.append(cur); cur = parent[cur]
            return path[::-1]
        for dx, dy in ((1,0),(-1,0),(0,1),(0,-1)):
            nxt = (cur[0]+dx, cur[1]+dy)
            if (0 <= nxt[0] < len(grid) and 0 <= nxt[1] < len(grid[0])
                    and grid[nxt[0]][nxt[1]] != 1):
                ng = g + 1                  # uniform edge cost
                if ng < g_best.get(nxt, 1e9):
                    g_best[nxt] = ng
                    parent[nxt] = cur
                    heapq.heappush(frontier, (ng + h(nxt), ng, nxt))
    return None                              # no path exists`,
            },
            diagram: {
              kind: "flow",
              title: "A* expansion on the worked 3x3 grid",
              caption:
                "Every expansion has f = 4 - an admissible heuristic keeps the search on the optimal contour.",
              steps: [
                { label: "Expand (0,0)", note: "g=0 h=4 f=4 -> add (1,0) and (0,1), both f=4" },
                { label: "Expand (1,0)", note: "g=1 h=3; adds (2,0) g=2 h=2 f=4" },
                { label: "Expand (0,1)", note: "adds (0,2) g=2 h=2 f=4; (1,1) blocked" },
                { label: "Expand (2,0) and (0,2)", note: "add (2,1) and (1,2), both g=3 h=1 f=4" },
                { label: "Expand (2,1)", note: "goal g=4 h=0 -> path of length 4" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Practise writing the 3x3 trace as a five-row table: tile, g, h, f. RGPV questions ask 'trace A* on the given grid' - the marks are for correct g accumulation, correct Manhattan h, and the tie-breaking order, not for speed. Always state admissibility in one sentence at the end.",
            },
            keyTerms: [
              { term: "A* search", definition: "Best-first search on f = g + h combining exact cost-so-far with a heuristic estimate-to-go." },
              { term: "Admissible heuristic", definition: "A heuristic that never overestimates the remaining cost, guaranteeing A* finds the optimal path." },
              { term: "Manhattan distance", definition: "h = |dx| + |dy|; the standard admissible heuristic on 4-connected grids." },
              { term: "Consistency", definition: "h(current) <= cost(current, next) + h(next); guarantees each tile is expanded at most once." },
            ],
            examQuestions: [
              {
                q: "Explain the A* algorithm. Define f, g and h, state the admissibility and consistency conditions, and trace A* on a 3x3 grid with start (0,0), goal (2,2) and blocked tile (1,1) using Manhattan distance.",
                marks: 7,
                outline: [
                  "Define g (exact cost from start), h (estimate to goal), f = g + h; expand min-f frontier tile.",
                  "Manhattan h = |dx| + |dy| on 4-connected grids; admissible since each move shifts one axis by 1.",
                  "Admissibility: never overestimate -> optimality; consistency: h(cur) <= cost + h(next) -> one expansion per tile.",
                  "Trace step 1: expand (0,0), f = 0+4 = 4; open (1,0) and (0,1) with g = 1, h = 3, f = 4.",
                  "Trace steps 2-3: expand (1,0) adds (2,0) f = 4; expand (0,1) adds (0,2) f = 4; (1,1) blocked.",
                  "Trace steps 4-5: add (2,1) and (1,2) with f = 4; expand (2,1), goal pops with g = 4.",
                  "Path: (0,0) -> (1,0) -> (2,0) -> (2,1) -> (2,2); note h = 0 reduces A* to Dijkstra.",
                ],
              },
              {
                q: "What breaks if a heuristic is multiplied by 1.5 on a unit-cost grid?",
                marks: 2,
              },
              {
                q: "Compute Manhattan h for tile (3, 5) toward goal (7, 2).",
                marks: 3,
              },
            ],
          },
          {
            number: "2.7",
            title: "Hierarchical pathfinding, smoothing and dynamic replanning",
            body: [
              "A modern open-world map holds millions of tiles; raw A* would expand thousands of nodes for one cross-city trip. Hierarchical pathfinding solves this by clustering. The map is chunked into regions (say 16x16 tiles), each region is abstracted into a node, and nodes connect where walkable transitions exist between chunks. Pathfinding runs top-down: first an A* search over the coarse region graph (a few hundred nodes), then the path inside each crossed chunk is solved locally. Two levels of abstraction cut the cost from millions of tile expansions to a few hundred node expansions plus small local searches - the same trick recursively builds three or more levels for truly vast worlds.",
              "Raw A* paths look robotic because the path hugs tile centers and turns at every corner. Path smoothing fixes this with string pulling: starting at the agent, test whether a straight line (a raycast on the navmesh) reaches a distant waypoint without crossing blocked space; if yes, skip every waypoint in between; if no, keep the last visible waypoint and repeat from there. The result is the funnel algorithm's output on navmeshes - the shortest geometric path through polygon corners - and visually natural diagonals on grids. Agents then follow the smoothed string of points with the steering behaviors of Section 2.1, arriving at each with the arrive behavior so corners look carved rather than pivoted.",
              "Dynamic worlds break static plans: a door closes, a crate drops, another agent blocks the corridor. The production answer is replanning triggered by events rather than by the frame clock. Local avoidance handles short-lived blockers: RVO (reciprocal velocity obstacles) lets each agent adjust velocity so that mutual predictions avoid collisions without any communication. Structural changes - the door, the crate - invalidate the cached path, and the agent re-queries A*, ideally resuming from its current chunk (incremental replanning, as in D* Lite style repairs) instead of recomputing from scratch. The rule examiners look for: replan on world-change events, not every frame; use local avoidance for other agents, full replanning for map changes.",
              "Putting the unit together: representation (waypoints or navmesh) feeds search (BFS/Dijkstra/A*), hierarchical abstraction scales search to world size, smoothing converts node chains into natural trajectories, and replanning keeps paths truthful as the world mutates. Each stage is a standard exam sub-question, and each has one memorable worked example - the 3x3 A* trace, the funnel pull, the RVO dodge. Being able to name and connect the five stages is the complete Unit II answer.",
            ],
            bullets: [
              "Hierarchical pathfinding: chunk the map (e.g. 16x16 tiles), abstract chunks to a region graph, search coarse-to-fine.",
              "Cost cut: millions of tile expansions become a few hundred region expansions plus small local searches.",
              "Path smoothing: raycast string pulling - skip any waypoint visible in a straight line from the agent.",
              "Funnel algorithm: string-pulls a navmesh polygon corridor into the shortest geometric path.",
              "Steering hand-off: follow smoothed points with arrive behavior so corners look natural.",
              "Local avoidance (RVO): reciprocal velocity obstacles solve agent-vs-agent dodges without communication.",
              "Replanning rule: on structural world-change events re-query A*; never replan every frame.",
            ],
            table: {
              caption: "The four pathfinding-quality problems and their standard fixes.",
              headers: ["Problem", "Symptom", "Fix", "Cost note"],
              rows: [
                ["Map too large", "A* expands thousands of tiles", "Hierarchical two-level search", "Coarse graph is 100-500 nodes"],
                ["Robotic paths", "Zigzag along tile centers", "String pulling / funnel algorithm", "One raycast per skipped waypoint"],
                ["Agent collisions", "Agents jam in doorways", "RVO local avoidance", "Per-agent velocity adjustment"],
                ["World changes", "Path crosses a closed door", "Event-triggered replanning", "Recompute only affected chunks"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "Hierarchical pathfinding as levels of abstraction",
              caption:
                "Search top-down: plan regions first, then solve tiles only inside crossed chunks.",
              tiers: [
                { label: "Region graph", note: "one node per 16x16 chunk; A* over a few hundred nodes" },
                { label: "Chunk corridors", note: "sequence of regions the path crosses" },
                { label: "Tile-level A*", note: "solved locally per crossed chunk" },
                { label: "Smoothed trajectory", note: "string-pulled points driven by steering" },
              ],
            },
            callout: {
              type: "tip",
              title: "Connect the stages in one sentence",
              body: "The 7-mark version of this section is a pipeline essay: 'hierarchical search makes it fast, string pulling makes it pretty, RVO prevents agent jams, and event-triggered replanning keeps it correct.' Memorise that sentence and expand each clause with its worked example.",
            },
            keyTerms: [
              { term: "Hierarchical pathfinding", definition: "Two-level search: plan over chunk/region abstractions, then solve tiles locally within each crossed region." },
              { term: "String pulling", definition: "Smoothing that skips every waypoint reachable by an unobstructed straight line from the agent." },
              { term: "Funnel algorithm", definition: "The string-pulling method producing the shortest path through a navmesh polygon corridor." },
              { term: "RVO", definition: "Reciprocal velocity obstacles: each agent adjusts velocity using mutual predictions to avoid collisions." },
              { term: "Replanning", definition: "Re-querying the pathfinder when the world changes structurally, ideally incrementally from the agent's current region." },
            ],
            examQuestions: [
              {
                q: "Explain hierarchical pathfinding, path smoothing and dynamic replanning. For each, state the problem it solves, the mechanism, and one worked detail.",
                marks: 7,
                outline: [
                  "Problem 1: open worlds with millions of tiles make flat A* too slow.",
                  "Hierarchy: chunk into 16x16 regions, build a region graph, search coarse then per-chunk locally.",
                  "Cost arithmetic: millions of tile expansions drop to a few hundred region expansions.",
                  "Problem 2: tile-centered paths look robotic; smoothing via raycast string pulling skips visible waypoints.",
                  "Funnel algorithm on navmeshes yields the shortest geometric path through corners.",
                  "Problem 3: dynamic worlds - RVO local avoidance for other agents; event-triggered A* replanning for map changes.",
                  "Close with the pipeline: representation -> search -> smoothing -> steering -> replan on events.",
                ],
              },
              {
                q: "Why should replanning be event-triggered rather than per-frame?",
                marks: 2,
              },
              {
                q: "What does RVO stand for and what problem does it solve?",
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
      title: "Decision Making",
      summary:
        "How agents choose: decision trees as nested if-chains, finite state machines with a fully worked enemy AI, behavior trees built from sequence, selector and decorator nodes, utility-based AI that scores every option, GOAP planning that assembles action chains toward goals, and the coordination layer - scripting versus data-driven design, squad AI and blackboards.",
      chapter: {
        number: "03",
        title: "Choosing: Trees, States, Utility and Planners",
        intro:
          "Unit III climbs the decision-making ladder. Decision trees and finite state machines are the classics: cheap, legible and everywhere. Behavior trees fix FSM scaling problems with composable nodes; utility AI replaces fixed transitions with scored preferences; GOAP lets agents invent their own action sequences to reach goals. The unit closes with the question every studio faces - where behavior lives: hard-coded scripts, data files, or coordination systems like squad AI and blackboards that make many agents act as one team.",
        inOneBreath:
          "A decision tree asks yes/no questions from the root to a leaf action; balanced trees cost O(log n) but hand-editing grows unwieldy. A finite state machine is a set of states plus guarded transitions - PATROL, ALERT, CHASE, SEARCH for the classic guard - cheap and predictable but transitions explode combinatorially as states grow. Behavior trees replace transitions with structure: selector nodes try children until one succeeds, sequence nodes run children in order until one fails, decorators filter or repeat, and the tree is ticked from the root every frame, recomposing behavior without spaghetti transitions. Utility AI scores every candidate action - e.g. attack = 0.5 x health + 0.3 x ammo - and picks the maximum, giving smooth emergent preference. GOAP backward-chains from a goal: kill player needs bowLoaded and inRange, bowLoaded needs hasArrow, so the planner emits draw arrow, load bow, shoot. Data-driven AI moves behavior into JSON/XML that designers edit; squads coordinate through blackboards and leader rules rather than omniscient group minds.",
        sections: [
          {
            number: "3.1",
            title: "Decision trees",
            body: [
              "A decision tree is the simplest decision structure: an internal node tests a condition, branches carry the outcomes, and leaf nodes are actions. Traversal starts at the root and walks one path downward - each test cuts the option space in half (or by branch count) - so a balanced tree with n tests reaches a decision in O(log n) checks. Example: root asks 'is health below 30 percent?'; if yes, leaf 'retreat to medic'; if no, a second node asks 'is enemy visible?'; if yes, 'attack', else 'patrol'. Three questions, one action, fully predictable - which is why trees were the first structure designers could read and edit without programmers.",
              "Trees differ from the if-else chains they formalise mainly in authoring: they are data, so tools can draw them, and designers can reorder tests to change priorities. Reordering is semantic: put the health test first and wounded agents always retreat even mid-firefight; put enemy-visible first and they fight to the death. This priority-by-order is both the strength (tuning is trivial) and the ceiling (behavior is still a fixed ladder of questions - nothing weighs alternatives). Exam answers should name both sides.",
              "The scaling problems are concrete. Deep trees become unreadable: a real NPC personality may need 50-200 tests, and a 20-level-deep chain is impossible to review. Duplication appears - 'enemy visible' is re-tested in five branches - and every new condition threads through many paths. These pressures drove the industry to behavior trees (Section 3.3), which factor tests into reusable nodes and re-tick from the root each frame instead of committing to one path. Decision trees survive today where decisions are genuinely binary and static: tutorial gating, difficulty gates, procedural rules.",
              "A worked trace for the exam: agent state - health 45 percent, enemy visible, ammo 12. Root test 'health < 30?' evaluates false, descend right child. Test 'enemy visible?' evaluates true, descend to leaf 'attack'. Total cost: two comparisons, one action. Now the designer swaps the tests and the same state yields 'retreat' - demonstrating in two lines that ordering is policy. When a question asks to 'construct a decision tree for an NPC', draw exactly this: two or three test nodes, three leaves, then trace one state through it and note the cost in comparisons.",
            ],
            bullets: [
              "Structure: internal nodes test conditions, edges carry outcomes, leaves are actions; one path traversed per tick.",
              "Cost: balanced tree with n tests decides in O(log n) comparisons - effectively free at game scale.",
              "Priority lives in ordering: the first test dominates - health-first means wounded agents always flee.",
              "Fully deterministic and designer-readable: the earliest structure designers could edit without code.",
              "Scaling ceiling: 50-200 tests make deep trees unreadable; conditions get duplicated across branches.",
              "Modern niche: binary, static decisions - tutorial gates, difficulty thresholds, procedural rules.",
              "Superseded for rich NPCs by behavior trees, which reuse condition nodes and re-tick from the root.",
            ],
            codeExample: {
              language: "python",
              caption: "A decision tree as nested data, traced at runtime.",
              code: `# tree: {"test": fn, "yes": subtree, "no": subtree} or {"action": name}
tree = {
    "test": lambda a: a.health < 30,      # highest priority: survival
    "yes":  {"action": "retreat_to_medic"},
    "no": {
        "test": lambda a: a.enemy_visible,
        "yes": {
            "test": lambda a: a.ammo > 0,
            "yes":  {"action": "attack"},
            "no":   {"action": "melee_or_flee"},
        },
        "no": {"action": "patrol"},
    },
}

def decide(node, agent):
    while "action" not in node:            # walk one root-to-leaf path
        node = node["yes"] if node["test"](agent) else node["no"]
    return node["action"]

# agent.health=45, enemy_visible=True, ammo=12 -> decide() returns "attack"`,
            },
            diagram: {
              kind: "fork",
              title: "One decision tree traversal",
              caption:
                "Each test halves the option space; the leaf is the action executed this tick.",
              start: "Agent tick: what do I do?",
              branches: [
                { label: "health < 30? -> yes", outcome: "Retreat to medic; no further tests evaluated", good: true },
                { label: "health < 30? -> no, enemy visible? -> yes", outcome: "Attack (or melee if ammo empty)", good: true },
                { label: "enemy visible? -> no", outcome: "Patrol waypoints until perception fires", good: true },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "When asked to 'construct and evaluate a decision tree', draw the tree, then trace ONE concrete agent state through it stating each comparison result. The trace is worth as many marks as the drawing - it proves the tree executes, and it lets you state the O(log n) cost concretely ('two comparisons to one action').",
            },
            keyTerms: [
              { term: "Decision tree", definition: "A tree whose internal nodes test conditions and whose leaves are actions; traversal follows one root-to-leaf path." },
              { term: "Leaf action", definition: "The behavior executed once traversal reaches a terminal node, e.g. 'attack' or 'patrol'." },
              { term: "Priority by order", definition: "The property that earlier tests in the tree override later ones, making test order the designer's policy knob." },
              { term: "Tree depth", definition: "The length of the longest root-to-leaf path; balanced depth gives O(log n) decision cost." },
            ],
            examQuestions: [
              {
                q: "Explain decision trees for game AI. Construct a tree for a combat NPC (health, enemy visibility, ammo), trace one state through it, and discuss the advantages and scaling limits that led to behavior trees.",
                marks: 7,
                outline: [
                  "Define structure: condition nodes, outcome edges, action leaves; one path per tick.",
                  "Construct: root 'health < 30?' -> retreat leaf; else 'enemy visible?' -> attack / patrol.",
                  "Trace: health 45 (false), enemy visible (true) -> action 'attack' in two comparisons.",
                  "State cost: balanced tree decides in O(log n) comparisons; deterministic output.",
                  "Explain priority-by-order: swapping the first test changes whether wounded agents fight or flee.",
                  "Scaling limits: 50-200 tests become unreadable; conditions duplicated across branches.",
                  "Conclude: behavior trees factor tests into reusable nodes and re-tick from the root each frame.",
                ],
              },
              {
                q: "Why does reordering tests in a decision tree change behavior?",
                marks: 2,
              },
              {
                q: "How many comparisons does a balanced decision tree with 64 leaves need in the worst case?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.2",
            title: "Finite state machines - worked enemy AI",
            body: [
              "A finite state machine (FSM) models an agent as a finite set of states, exactly one of which is current, plus transitions: (current state, event or condition) -> next state, with an optional action fired on entry. Each frame the FSM evaluates outgoing transitions of the current state and switches when one fires. FSMs are the workhorse of game AI because they are cheap (one state id, a handful of comparisons), predictable (same inputs, same state - ideal for testing), and map directly onto designer vocabulary: PATROL, ALERT, CHASE, SEARCH, DEAD are states a designer already thinks in.",
              "The worked guard example used across exams: states PATROL, ALERT, CHASE, SEARCH. In PATROL the guard walks waypoints; transition on 'player visible' (raycast true) to ALERT. ALERT fires a 0.5 s reaction delay then, if the player is still visible, enters CHASE; if visibility drops, it falls to SEARCH. CHASE pathfinds to the player's last position; on 'lost sight for 3 s' it transitions to SEARCH. SEARCH sweeps the last known position for 5 s; on 'player visible' back to CHASE, on timeout back to PATROL. Death enters DEAD from any state. Eight transitions, one diagram, a complete believable enemy - this is the canonical exam answer.",
              "Two implementation details earn marks. Entry actions: entering ALERT should play an exclamation animation and a sound - 'on enter' hooks are why transitions carry actions. Timers: SEARCH's 5-second sweep is a per-state timer that must reset on entry, or the guard will exit SEARCH instantly after the second visit - the most common FSM bug. Beyond guards, FSMs run animation layers (idle, walk, attack, hit), traffic lights, boss phases and UI screens; anywhere with discrete modes and clear triggers, an FSM is the right tool.",
              "The honest weakness is transition explosion. With 5 states you write perhaps 10 transitions; with 15 interacting states the matrix approaches n-squared, conditions overlap, and two transitions firing on the same tick create ordering bugs. Hierarchical FSMs (states containing sub-states - CHASE contains FLANK and DIRECT) and behavior trees (Section 3.3) are the standard escapes. The exam summary: FSMs excel when modes are few, discrete and event-driven; they fail when behavior needs continuous weighing of many goals - that is utility AI territory in Section 3.4.",
            ],
            bullets: [
              "Definition: finite states, one current, transitions (state, condition) -> state, optional entry actions.",
              "Worked guard FSM: PATROL -> (visible) -> ALERT -> (0.5 s delay, still visible) -> CHASE -> (lost 3 s) -> SEARCH -> (5 s timeout) -> PATROL.",
              "ALERT models human reaction delay - one state buys an entire layer of believability.",
              "Entry actions: exclamation animation and sound on entering ALERT; hooks attach presentation to transitions.",
              "Per-state timers must reset on entry - a SEARCH timer that survives re-entry is the classic FSM bug.",
              "Strengths: O(1) per tick, deterministic and testable, designer-legible modes.",
              "Weakness: transition count grows roughly with n^2; hierarchical FSMs and behavior trees are the escapes.",
            ],
            codeExample: {
              language: "python",
              caption: "The guard FSM: states, transitions and entry actions in runnable form.",
              code: `import time

class GuardFSM:
    def __init__(self):
        self.state = "PATROL"
        self.state_time = 0.0           # reset on every entry
        self.last_seen = None

    def update(self, dt, senses):
        self.state_time += dt
        s = self.state
        if s == "PATROL":
            if senses.player_visible:
                self.enter("ALERT")      # entry: play exclamation + sound
        elif s == "ALERT":
            if senses.player_visible:
                if self.state_time > 0.5:      # human reaction delay
                    self.enter("CHASE")
            else:
                self.enter("PATROL")
        elif s == "CHASE":
            self.last_seen = senses.player_pos  # keep memory fresh
            if not senses.player_visible and self.state_time > 3.0:
                self.enter("SEARCH")
        elif s == "SEARCH":
            if senses.player_visible:
                self.enter("CHASE")
            elif self.state_time > 5.0:     # sweep timer
                self.enter("PATROL")

    def enter(self, new_state):
        self.state = new_state
        self.state_time = 0.0               # reset timer on entry
        # entry actions (animation, sound) hook here`,
            },
            diagram: {
              kind: "flow",
              title: "Guard state machine with timings",
              caption:
                "Eight transitions cover patrol, alert, chase and search - a complete believable enemy.",
              steps: [
                { label: "PATROL", note: "walk waypoints; player visible -> ALERT" },
                { label: "ALERT", note: "0.5 s reaction delay; still visible -> CHASE, else PATROL" },
                { label: "CHASE", note: "path to last seen; lost 3 s -> SEARCH" },
                { label: "SEARCH", note: "sweep 5 s; found -> CHASE, timeout -> PATROL" },
                { label: "DEAD", note: "reachable from any state on lethal damage" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "The full-marks FSM answer has three artifacts: the state diagram, the transition table (state, condition, next, action), and one traced scenario ('guard on patrol, player appears, hides after 2 s - trace states ALERT, CHASE, SEARCH, PATROL with timestamps'). Any question about enemy AI can be answered with this template.",
            },
            keyTerms: [
              { term: "Finite state machine", definition: "A model with a finite set of states, one current state, and guarded transitions between them." },
              { term: "Transition", definition: "A rule (current state, condition or event) -> next state, optionally firing an entry action." },
              { term: "Entry action", definition: "An effect executed on entering a state, such as playing an alert animation or resetting a timer." },
              { term: "Hierarchical FSM", definition: "An FSM whose states contain sub-FSMs, controlling transition explosion in complex agents." },
            ],
            examQuestions: [
              {
                q: "Design a finite state machine for an enemy guard with PATROL, ALERT, CHASE and SEARCH states. Give the transition table with conditions and timings, explain entry actions and timer resets, and trace the FSM when the player appears for two seconds then hides.",
                marks: 7,
                outline: [
                  "Define FSM: finite states, one current, guarded transitions, optional entry actions.",
                  "Transition table: PATROL + visible -> ALERT; ALERT + 0.5 s still visible -> CHASE.",
                  "CHASE + lost sight 3 s -> SEARCH; SEARCH + seen -> CHASE; SEARCH + 5 s timeout -> PATROL.",
                  "Entry actions: alert animation and sound on ALERT; timer reset on every entry.",
                  "Explain the timer-reset bug: without reset, SEARCH exits instantly on re-entry.",
                  "Trace: t = 0 visible -> ALERT; t = 0.5 -> CHASE; t = 2 hidden; t = 5 -> SEARCH; t = 10 -> PATROL.",
                  "Strengths/limits: cheap, deterministic, legible; transitions grow roughly n^2, motivating behavior trees.",
                ],
              },
              {
                q: "What is a hierarchical FSM and which problem does it solve?",
                marks: 2,
              },
              {
                q: "Name two systems besides enemy AI that are naturally modelled as FSMs.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.3",
            title: "Behavior trees: sequence, selector and decorator nodes",
            body: [
              "A behavior tree (BT) is a rooted tree ticked every frame from the root, where every node returns SUCCESS, FAILURE or RUNNING and the structure itself is the decision logic. It emerged from Halo 2 (Damian Isla's behavior system) and became the industry default because it solves the FSM's transition explosion: instead of edges between states, nodes are composed, and each tick re-evaluates from the top, so behavior 'recomposes' automatically as conditions change - no transition spaghetti, and interruption is inherent (a higher-priority branch simply succeeds this tick).",
              "Two composite nodes do most of the work. A selector (fallback, OR) runs children left to right and succeeds at the first child that succeeds, failing only if all fail - it encodes priority ('try attack; if that fails, try move-to-cover; else idle'). A sequence (AND) runs children in order and succeeds only if all succeed, stopping at the first failure or RUNNING child - it encodes precondition chains ('if enemy visible AND in range AND loaded, then shoot'). Leaves are conditions (return SUCCESS/FAILURE) and actions (return RUNNING while working). A decorator wraps one child to modify it: invert the result, repeat n times, retry until success, force failure, or add a cooldown timer.",
              "A worked combat BT in JSON shows all three node kinds. Root selector: [sequence [enemy visible, ammo > 0, shoot], sequence [enemy visible, move into range], heal if hurt, idle]. Trace: enemy visible, ammo 12 - first sequence: enemy visible succeeds, ammo succeeds, shoot returns RUNNING (firing over 0.4 s) - the tick returns RUNNING and resumes mid-shoot next frame. Now the player breaks line of sight mid-burst: next tick, 'enemy visible' fails, the first sequence aborts, the selector walks on and the agent re-plans - interruption happened with zero transition logic written.",
              "The marks to hit in any BT answer: name the three return values; explain selector-as-priority and sequence-as-preconditions; give one decorator example (cooldown or invert); and state the tick model - evaluate from the root every frame, returning RUNNING across frames so long actions survive. The standard critique is also worth one line: naive BTs re-evaluate everything each tick, so engines add memory nodes or event-driven ticking to avoid re-running expensive perception; and very deep trees still need refactoring - BTs manage complexity, they do not abolish it.",
            ],
            bullets: [
              "Tick model: every frame the tree is evaluated from the root; nodes return SUCCESS, FAILURE or RUNNING.",
              "Selector (OR): try children left to right, succeed on first success - encodes priority order.",
              "Sequence (AND): run children in order, succeed only if all succeed - encodes precondition chains.",
              "Decorators: invert, repeat, retry-until-success, cooldown timers, forced results - wrap one child.",
              "Leaves: conditions return SUCCESS/FAILURE instantly; actions return RUNNING while in progress.",
              "Worked trace: visible + ammo -> shoot RUNNING; player breaks sight -> sequence aborts, selector falls through, agent re-plans.",
              "Origin and status: Halo 2 popularised BTs; now the default for NPC decision logic; costs are re-evaluation overhead (memory nodes fix it).",
            ],
            codeExample: {
              language: "json",
              caption: "A combat behavior tree: selector of sequences with one cooldown decorator.",
              code: `{
  "type": "selector", "name": "combat-root", "children": [
    { "type": "sequence", "name": "fight", "children": [
        { "type": "condition", "check": "enemy_visible" },
        { "type": "condition", "check": "ammo > 0" },
        { "type": "action", "do": "shoot", "duration": 0.4 } ] },
    { "type": "sequence", "name": "close-in", "children": [
        { "type": "condition", "check": "enemy_visible" },
        { "type": "action", "do": "move_into_range" } ] },
    { "type": "decorator", "kind": "cooldown", "seconds": 5.0,
      "child": { "type": "action", "do": "heal_self" } },
    { "type": "action", "do": "idle_wander" } ] }
// Tick semantics: selector tries children left to right;
// a RUNNING action resumes next tick and blocks later siblings.`,
            },
            diagram: {
              kind: "layers",
              title: "Behavior tree anatomy, top to bottom",
              caption:
                "One selector at the root, sequences as branches, decorators as filters, leaves doing the work.",
              layers: [
                { label: "Root selector", note: "priority list: fight, close-in, heal, idle" },
                { label: "Sequence nodes", note: "precondition chains like visible AND ammo" },
                { label: "Decorators", note: "cooldown, invert, retry - wrap single children" },
                { label: "Leaf conditions", note: "return SUCCESS or FAILURE instantly" },
                { label: "Leaf actions", note: "return RUNNING while executing" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "The classic question is 'compare FSM and behavior tree'. Answer in three contrasts: transitions versus structure (FSM edges explode, BT recomposes on re-tick), interruption (BT is interrupted automatically by a succeeding higher-priority branch), and authoring (BTs are data - designers edit trees in tools). Add the trace of an aborted action for the application mark.",
            },
            keyTerms: [
              { term: "Behavior tree", definition: "A tree ticked from the root each frame whose nodes return SUCCESS, FAILURE or RUNNING." },
              { term: "Selector node", definition: "Composite that tries children left to right and succeeds with the first success - priority fallback." },
              { term: "Sequence node", definition: "Composite that succeeds only when every child succeeds in order - a precondition chain." },
              { term: "Decorator node", definition: "A wrapper modifying one child's result or flow: invert, repeat, retry, cooldown." },
              { term: "RUNNING", definition: "The return value of an in-progress action, resumed on the next tick and blocking later siblings." },
            ],
            examQuestions: [
              {
                q: "Explain behavior trees. Describe the tick model and return values, the roles of selector, sequence and decorator nodes, and trace a combat tree when the player breaks line of sight mid-attack. Contrast with FSMs.",
                marks: 7,
                outline: [
                  "Tick model: evaluate from root each frame; nodes return SUCCESS, FAILURE or RUNNING.",
                  "Selector: left-to-right priority fallback - first successful child wins.",
                  "Sequence: ordered precondition chain - stops at first failure or RUNNING child.",
                  "Decorator example: cooldown(5 s) around heal, or invert around a condition.",
                  "Worked trace: shoot returns RUNNING (0.4 s); player hides -> 'enemy visible' fails, sequence aborts, selector falls to next branch.",
                  "Contrast FSM: no transition graph, interruption is free, trees are designer-editable data.",
                  "Cost note: full re-ticking re-runs perception; memory nodes or event-driven ticks mitigate.",
                ],
              },
              {
                q: "What does the RUNNING return value do across frames?",
                marks: 2,
              },
              {
                q: "Write the node type and role for: 'retry up to 3 times' - and name its category.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.4",
            title: "Utility-based AI: scoring every option",
            body: [
              "Trees and FSMs decide categorically - which branch fires - but many decisions are really about preference: how badly do I want to flee versus fight right now? Utility-based AI answers with numbers. Every candidate action gets a utility score in a normalised range (usually 0 to 1), computed from the agent's state through curves and weighted sums; the agent executes the highest scorer, often with a random tie-break among the top few to avoid robotic determinism. The result is smooth, gradual behavior change: an agent does not snap from CHASE to RETREAT at a threshold, it leans away as its health score sinks.",
              "A worked scoring function for a combat bot: utility(attack) = 0.5 x health_curve + 0.3 x ammo_curve + 0.2 x aggression, where health_curve maps health 0-100 to 0-1 (say linear or inverse), ammo_curve similarly, and aggression is a personality constant. With health 80, ammo 30, aggression 0.6: attack = 0.5 x 0.8 + 0.3 x 1.0 + 0.2 x 0.6 = 0.40 + 0.30 + 0.12 = 0.82. utility(retreat) = 1 - health_curve = 0.2. utility(reload) = 1 - ammo_curve = 0.0. Attack wins at 0.82. Drop health to 25 and attack falls to 0.125 + 0.30 + 0.12 = 0.545 while retreat rises to 0.75 - the bot switches when the curves say so, and every intermediate health value shifts the balance continuously.",
              "Response curves are the craft element. A linear curve maps input to output proportionally; a quadratic or exponential curve makes an option's appeal surge late (desperation); a step curve emulates a threshold - the bridge back to FSM thinking. Designers draw these curves in tools - The Sims popularised the approach with its autonomous object-selection utility, and GDC talks by Squirrel Eiserloh and Dave Mark formalised 'utility systems' as a discipline - and tune personality purely by editing curve shapes and weights, with no code change. That tunability is why utility systems dominate games with many soft competing motives: The Sims, RimWorld-style colony sims, and squad tactics.",
              "Two design traps deserve exam mention. Score scale mismatch: if one factor ranges 0-100 and another 0-1, the first dominates - always normalise factors into comparable ranges before weighting. Myopia: picking the single top action every tick causes dithering when two scores are close (attack 0.51, reload 0.49 flips 60 times a second); fixes include hysteresis (a switching margin), commitment timers, or randomised tie-breaks. Name both traps and their fixes and the utility answer is complete: definition, formula, worked numbers, curves, tunability, pitfalls.",
            ],
            bullets: [
              "Model: score every candidate action 0-1 from agent state; execute the maximum (with tie-breaks).",
              "Worked formula: attack = 0.5 x health + 0.3 x ammo + 0.2 x aggression -> (0.40 + 0.30 + 0.12) = 0.82 beats retreat 0.20.",
              "Health drop to 25 flips it: attack 0.545 versus retreat 0.75 - continuous, not threshold, switching.",
              "Response curves: linear, quadratic (late surge), step (threshold); designers edit curves, not code.",
              "Personality is data: weights and curve shapes encode aggression or caution per character.",
              "Provenance: The Sims' object-selection utility popularised the approach; now standard in sims and squads.",
              "Pitfalls: unnormalised scales let one factor dominate; near-ties dither - fix with hysteresis or commitment timers.",
            ],
            codeExample: {
              language: "python",
              caption: "Utility scoring with normalisation and a hysteresis guard.",
              code: `def clamp01(x): return max(0.0, min(1.0, x))

def score(agent):
    health = clamp01(agent.health / 100.0)
    ammo   = clamp01(agent.ammo / 30.0)
    aggr   = agent.aggression          # 0.6 for a bold bot
    return {
        "attack":  0.5*health + 0.3*ammo + 0.2*aggr,
        "retreat": 1.0 - health,
        "reload":  1.0 - ammo,
        "heal":    clamp01((100 - agent.health) / 100.0) * 0.9,
    }

def choose(agent, current):
    scores = score(agent)
    best = max(scores, key=scores.get)
    # hysteresis: keep the current action unless beaten by a margin
    if current and best != current:
        if scores[best] < scores[current] + 0.10:
            return current             # margin prevents dithering
    return best

# health 80, ammo 30 -> attack 0.82 wins; health 25 -> retreat 0.75 wins`,
            },
            diagram: {
              kind: "pipeline",
              title: "One utility decision pass",
              caption:
                "Gather, normalise, weight, pick - the whole system in five stages.",
              stages: [
                { label: "Gather state", note: "health, ammo, threats, goals" },
                { label: "Normalise factors", note: "each factor mapped to 0-1 by a curve" },
                { label: "Score every action", note: "weighted sum or curve product" },
                { label: "Apply hysteresis", note: "margin 0.10 stops dithering" },
                { label: "Execute max", note: "random tie-break among near-equal top scores" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Utility questions are arithmetic questions. Write the scoring formula, substitute concrete numbers (health 80, ammo 30), and show two agents with different personalities choosing differently. The worked numbers are the marks - a formula without substituted values scores half.",
            },
            keyTerms: [
              { term: "Utility", definition: "A 0-1 score expressing how desirable an action is given the agent's current state." },
              { term: "Response curve", definition: "A mapping from a raw input (health, distance) to utility contribution: linear, quadratic or step-shaped." },
              { term: "Normalisation", definition: "Rescaling every factor to a common range so weights, not units, decide behavior." },
              { term: "Hysteresis", definition: "A switching margin that prevents rapid dithering between two near-equal top actions." },
            ],
            examQuestions: [
              {
                q: "Explain utility-based AI. Give a scoring formula for attack, retreat and reload, evaluate it numerically for two different agent states, explain response curves and personality tuning, and describe the dithering problem with its fix.",
                marks: 7,
                outline: [
                  "Model: score all actions 0-1, execute the maximum with tie-breaks; smooth preference over thresholds.",
                  "Formula: attack = 0.5 x health + 0.3 x ammo + 0.2 x aggression.",
                  "State A (health 80, ammo 30, aggression 0.6): attack = 0.82, retreat = 0.20, reload = 0.0 -> attack.",
                  "State B (health 25): attack = 0.545, retreat = 0.75 -> retreat; switching is continuous.",
                  "Response curves: linear, quadratic late-surging, step thresholds; designers tune curves as data.",
                  "Personality: weights encode bold versus cautious bots with no code change (The Sims lineage).",
                  "Pitfalls: normalise scales; near-tie dithering fixed by hysteresis margin (e.g. 0.10) or commitment timers.",
                ],
              },
              {
                q: "Compute utility(attack) for health 60, ammo 15, aggression 0.4 with the formula 0.5h + 0.3a + 0.2g.",
                marks: 2,
              },
              {
                q: "Why does picking the top action every tick cause dithering, and how is it fixed?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.5",
            title: "GOAP: goal-oriented action planning",
            body: [
              "GOAP (goal-oriented action planning, popularised by Jeff Orkin's F.E.A.R. and Monolith) flips decision making from 'what do I do now' to 'what do I want, and what chain achieves it'. The agent declares a goal as a world-state condition (player dead, room secured), and a planner searches backward from the goal over actions. Each action declares preconditions (facts that must be true to perform it) and effects (facts it makes true). The planner composes a chain whose effects satisfy the goal and whose preconditions chain back to facts currently true - then the agent executes the plan step by step, re-planning when reality diverges.",
              "A worked plan makes it mechanical. World state: hasQuiver = true, hasArrow = false, bowLoaded = false, inRange = false. Goal: playerDead. Actions: shoot (pre: bowLoaded AND inRange; eff: playerDead), loadBow (pre: hasArrow; eff: bowLoaded), drawArrow (pre: hasQuiver; eff: hasArrow), moveIntoRange (pre: -; eff: inRange). Backward search: playerDead needs shoot; shoot needs bowLoaded and inRange; bowLoaded needs drawArrow. Plan emitted: drawArrow -> loadBow -> moveIntoRange -> shoot. Cost-based search (A* over world states, or simple depth-first for small sets) picks the cheapest chain when alternatives exist.",
              "The payoff is flexibility no scripted sequence matches. Give the archer a potion-healing action and, if an enemy interrupts while the plan is mid-execution, the agent re-plans around the new world state - maybe healing first, then resuming the kill. F.E.A.R.'s famous emergent moments - soldiers coordinating flanks, calling for backup, using doors - came from GOAP agents with overlapping goals (kill player, stay safe, support squadmate) planning independently but sharing squad facts through a blackboard. The technique's price is planner overhead and authoring discipline: every action needs correct preconditions and effects, and a single wrong precondition yields absurd plans (a guard planning 'open door' forever because its precondition check is inverted).",
              "GOAP sits in a family. STRIPS-style planning is its academic ancestor (precondition-effect operators, means-ends analysis); HTN planners (used by Halo 3) instead decompose tasks into subtasks along designer-authored recipes - more controllable, less emergent. Utility AI (Section 3.4) selects goals for GOAP agents in production: utility picks 'kill player' over 'patrol', GOAP builds the plan. Exam framing: define goal, precondition, effect; emit the worked archer plan; name re-planning on world change; position GOAP among STRIPS, HTN and utility goal selection. That four-part structure answers any GOAP question in the paper.",
            ],
            bullets: [
              "Model: goal = target world condition; actions = (preconditions, effects, cost); planner chains actions backward from the goal.",
              "Worked archer: goal playerDead -> plan drawArrow -> loadBow -> moveIntoRange -> shoot, each step's preconditions chaining correctly.",
              "Planning search: A* or Dijkstra over world states using action costs; depth-first suffices for small action sets.",
              "Re-planning: when execution diverges from prediction (enemy appears), re-run the planner from the new state.",
              "F.E.A.R. pedigree: Jeff Orkin's GOAP squad AI produced emergent flanking and door usage from independent planners plus a shared blackboard.",
              "Authoring discipline: every action needs accurate preconditions/effects; one wrong fact yields absurd or looping plans.",
              "Family: STRIPS ancestor; HTN (Halo 3) decomposes authored task recipes; utility systems often choose which goal GOAP pursues.",
            ],
            codeExample: {
              language: "python",
              caption: "A tiny backward-chaining GOAP planner reproducing the archer plan.",
              code: `ACTIONS = [
  {"name": "shoot",        "pre": {"bowLoaded", "inRange"}, "eff": {"playerDead"}, "cost": 1},
  {"name": "loadBow",      "pre": {"hasArrow"},  "eff": {"bowLoaded"},  "cost": 1},
  {"name": "drawArrow",    "pre": {"hasQuiver"}, "eff": {"hasArrow"},   "cost": 1},
  {"name": "moveIntoRange","pre": set(),         "eff": {"inRange"},    "cost": 2},
]

def plan(world, goal, depth=0):
    if goal <= world or depth > 6:      # goal already true (or depth cap)
        return []
    best = None
    for a in ACTIONS:                    # need an action whose effect helps
        if a["eff"] & goal:
            missing = a["pre"] - world   # facts still to satisfy
            sub = plan(world | a["eff"], missing, depth + 1)
            if sub is not None:
                cand = sub + [a["name"]]
                if best is None or len(cand) < len(best):
                    best = cand
    return best

world = {"hasQuiver"}
print(plan(world, {"playerDead"}))
# -> ["drawArrow", "loadBow", "moveIntoRange", "shoot"]`,
            },
            diagram: {
              kind: "flow",
              title: "Backward chaining to the archer plan",
              caption:
                "Each step names the action whose effects satisfy what the step above needs.",
              steps: [
                { label: "Goal: playerDead", note: "shoot has this effect" },
                { label: "shoot needs bowLoaded + inRange", note: "loadBow and moveIntoRange supply them" },
                { label: "loadBow needs hasArrow", note: "drawArrow supplies it" },
                { label: "drawArrow needs hasQuiver", note: "already true - chain complete" },
                { label: "Execute: draw -> load -> move -> shoot", note: "re-plan if the world diverges" },
              ],
            },
            callout: {
              type: "warning",
              title: "Wrong preconditions make absurd plans",
              body: "A GOAP agent is only as sane as its fact model. A single inverted precondition (openDoor requiring the door to be locked) produces loops or bizarre chains like open-door, close-door, open-door. In answers, always credit GOAP's flexibility AND name the authoring-cost weakness - examiners mark the balanced treatment.",
            },
            keyTerms: [
              { term: "GOAP", definition: "Goal-oriented action planning: the planner composes an action chain whose effects satisfy a declared goal." },
              { term: "Precondition", definition: "A world-state fact that must be true before an action can execute." },
              { term: "Effect", definition: "A world-state fact an action makes true when executed." },
              { term: "Re-planning", definition: "Re-running the planner from the current world state when execution diverges from prediction." },
              { term: "HTN planner", definition: "Hierarchical task network planner that decomposes authored task recipes; more controlled than GOAP." },
            ],
            examQuestions: [
              {
                q: "Explain GOAP. Define goal, precondition and effect, construct and trace a worked plan for an archer that must shoot the player, and discuss re-planning, the F.E.A.R. application and GOAP's weaknesses.",
                marks: 7,
                outline: [
                  "Model: goal = target world condition; actions carry preconditions, effects and costs.",
                  "Worked facts: hasQuiver true; goal playerDead; actions shoot, loadBow, drawArrow, moveIntoRange.",
                  "Backward chaining: playerDead <- shoot <- bowLoaded + inRange <- hasArrow <- hasQuiver.",
                  "Emit plan: drawArrow -> loadBow -> moveIntoRange -> shoot; cost-based search picks cheapest chains.",
                  "Re-planning: enemy interruption mid-plan re-runs the planner from the new world state.",
                  "Application: F.E.A.R. squad AI - independent planners plus shared squad facts gave emergent flanking.",
                  "Weaknesses: planner overhead, strict authoring discipline - wrong preconditions yield absurd or looping plans.",
                ],
              },
              {
                q: "How does an HTN planner differ from GOAP in plan authoring?",
                marks: 2,
              },
              {
                q: "List the preconditions and effects of the action 'loadBow' in the worked example.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.6",
            title: "Scripting versus data-driven AI, and squad coordination",
            body: [
              "Where does behavior live? The scripted extreme hard-codes logic in the engine language: a boss's phase-two attack pattern is 200 lines of C++ or Lua triggered by timers. Scripting gives total control and exotic bespoke moments - but every change is a code change, programmers own the content, and logic is invisible to designers. The data-driven extreme externalizes behavior: FSMs, behavior trees, utility curves and GOAP action sets live in JSON or XML files that designers edit in tools, with the engine supplying a generic interpreter. Civilization IV famously exposed unit and leader behavior in XML; Unreal's Behavior Tree editor is the modern standard-bearer.",
              "Real projects mix both, and the split follows ownership. Content that designers tune daily (detection radii, attack priorities, patrol routes, tree structure) goes in data; systems that must be fast or exotic (pathfinding internals, bespoke boss choreography, physics-integrated moves) stay in code. Data-driven design earns its exam points through three benefits - iteration speed (edit a JSON tree, hot-reload, no recompile), designer empowerment (behavior work no longer queues on programmers), and testability (data is diffable and version-controllable) - and three costs - interpreter overhead, weaker expressiveness for unusual logic, and schema validation burden so broken files fail loudly.",
              "Coordination is the other half of this section: making 20 agents behave as one team without an omniscient group mind. The dominant pattern is the blackboard: a shared key-value store (last known player position, sectors assigned, suppressions called) that individual agents read and write each tick; coordination emerges from conventions ('whoever sees the player writes playerSpotted; lowest-ID agent claims the flank slot'). Squad roles - leader, flanker, suppressor - are then ordinary states or BT branches gated on blackboard facts. F.E.A.R.'s squad AI and Halo's pack behavior are the canonical citations.",
              "The alternative coordination styles bracket the blackboard. Centralised: a squad-level brain plans for everyone (RTS group AI assigns targets) - coherent but a bottleneck and a single point of failure. Decentralised emergence: agents follow purely local rules (flocking, formation steering with slot offsets) - robust and cheap but inarticulate. The production compromise is hierarchical: a light squad brain assigns roles and slots on the blackboard; individual agents plan their own paths and shots. For exams: define blackboard, give one write/read convention example, name centralised versus emergent trade-offs, and cite F.E.A.R. or Halo - four points, complete answer.",
            ],
            bullets: [
              "Scripting: bespoke code (C++/Lua) per behavior - total control, but programmer-owned and un-tunable by designers.",
              "Data-driven: FSMs, BTs, utility curves and GOAP action sets in JSON/XML edited in tools (Civilization IV XML, Unreal BT editor).",
              "Benefits of data-driven: hot-reload iteration, designer empowerment, diffable and version-controllable content.",
              "Costs: interpreter overhead, limited expressiveness for exotic logic, schema validation needed.",
              "Ownership split: tuned content in data; fast or bespoke systems in code.",
              "Blackboard: shared key-value store - agent writes playerSpotted; another claims the flank slot; coordination by convention.",
              "Coordination spectrum: centralised squad brain (RTS) versus emergent local rules (formations); production uses a light squad brain plus autonomous agents (F.E.A.R., Halo).",
            ],
            table: {
              caption: "Scripted versus data-driven AI on the axes examiners probe.",
              headers: ["Axis", "Scripted (code)", "Data-driven (JSON/XML)"],
              rows: [
                ["Who authors", "Programmers", "Designers in tools"],
                ["Change cost", "Recompile, retest, redeploy", "Edit file, hot-reload"],
                ["Expressiveness", "Unlimited, bespoke logic", "Limited to interpreter's constructs"],
                ["Failure mode", "Compile or crash", "Broken schema - validate loudly"],
                ["Best content", "Boss choreography, engine systems", "Trees, curves, patrols, action sets"],
                ["Example", "Bespoke boss phases in Lua", "Civ IV XML, Unreal behavior trees"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Two philosophies of where behavior lives",
              caption:
                "Production mixes both: tuned content in data, fast or exotic systems in code.",
              left: {
                heading: "Scripted in code",
                items: [
                  "Programmer-authored, per-behavior code",
                  "Every tweak is a build",
                  "Unlimited expressiveness",
                  "Opaque to designers",
                  "Bespoke boss fights, physics moves",
                ],
              },
              right: {
                heading: "Data-driven files",
                items: [
                  "Designer-authored JSON/XML",
                  "Hot-reload iteration loop",
                  "Generic engine interpreter",
                  "Diffable and testable",
                  "Trees, curves, patrols, GOAP sets",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Name a shipped system",
              body: "Any scripting-versus-data answer doubles its credibility with one named artifact: Civilization IV exposed leader behavior as editable XML, and Unreal Engine's behavior tree editor is the reference data-driven tool. One sentence each is enough - the marker wants evidence you know these are real shipped systems.",
            },
            keyTerms: [
              { term: "Scripted AI", definition: "Behavior authored directly in engine code or scripting language, owned by programmers." },
              { term: "Data-driven AI", definition: "Behavior expressed as editable data files (JSON/XML) interpreted by generic engine systems." },
              { term: "Blackboard", definition: "A shared key-value store that agents read and write to coordinate without direct communication." },
              { term: "Squad AI", definition: "Coordination layer assigning roles and targets to group members, usually via blackboard conventions." },
            ],
            examQuestions: [
              {
                q: "Compare scripted and data-driven approaches to game AI authoring, with benefits and costs of each and shipped examples. Then explain blackboard-based squad coordination with a concrete write/read convention.",
                marks: 7,
                outline: [
                  "Scripted: bespoke code (C++/Lua); total control, programmer-owned, recompile per change.",
                  "Data-driven: JSON/XML behavior files edited in tools; hot-reload, designer empowerment.",
                  "Benefits of data: iteration speed, diffable content, ownership shift to designers (Civ IV XML, Unreal BT editor).",
                  "Costs of data: interpreter overhead, limited expressiveness, schema validation burden.",
                  "Ownership split: tuned content in data; fast or exotic logic stays in code.",
                  "Blackboard: shared key-value store; 'whoever sees the player writes playerSpotted' - coordination by convention.",
                  "Squad roles (leader, flanker, suppressor) as states gated on blackboard facts; F.E.A.R. and Halo citations.",
                ],
              },
              {
                q: "Give two benefits and two costs of data-driven AI.",
                marks: 2,
              },
              {
                q: "What is a blackboard and how do two agents coordinate through one?",
                marks: 3,
              },
            ],
          },
        ],
      },
    },
    {
      number: 4,
      roman: "IV",
      title: "Learning and Procedural Content Generation",
      summary:
        "The machine-learning half of the syllabus: where ML actually appears in games, reinforcement learning with a Q-learning update computed by hand, DQN and self-play through the AlphaGo and AlphaZero story, imitation learning and behavior cloning, procedural content generation - its taxonomy, terrain from Perlin noise, and item and quest generation - and the frontier of generative NPC dialogue, player modeling and dynamic difficulty adjustment.",
      chapter: {
        number: "04",
        title: "Learning and Generating: RL, Cloning and PCG",
        intro:
          "Unit IV moves from hand-authored behavior to systems that learn or generate. Reinforcement learning trains agents from reward signals - you will compute a Q-learning update with real numbers - and self-play scaled that idea to superhuman Go and chess. Imitation learning copies recorded expert play instead. Procedural content generation builds levels, terrain, items and quests from algorithms, with Perlin noise as the workhorse; the unit closes on generative AI for NPC dialogue, its risks, and the player models that drive dynamic difficulty adjustment.",
        inOneBreath:
          "ML enters games in three modes: offline training (upscaling, animation blending), sandboxed learning, and analysis of player data; shipped NPCs rarely learn at runtime because designers cannot patch a learned exploit. Q-learning maintains Q(s, a) - expected discounted return - updated by Q <- Q + alpha x (r + gamma x max Q(s') - Q); worked: Q = 2.0, alpha = 0.5, gamma = 0.9, r = 10, max Q(s') = 1.0 gives Q = 6.45. DQN adds a neural network plus experience replay and a target network; self-play with MCTS (AlphaGo Zero, AlphaZero) reached superhuman play purely from rules. Behavior cloning supervises a network on expert state-action logs - cheap but inherits covariate-shift drift that DAgger corrects. PCG is classified online/offline and necessary/optional; terrain stacks octaves of Perlin noise (fBm), and games like No Man's Sky generate content at runtime from seeds. LLM-driven NPC dialogue promises infinite variation but risks hallucination, cost and inconsistent lore; player models feeding DDA must stay inside guardrails.",
        sections: [
          {
            number: "4.1",
            title: "Machine learning in games - the landscape",
            body: [
              "Machine learning and game AI are not the same subject, and Unit I's distinction becomes operational here: almost no shipped NPC learns at runtime. The reasons are practical. A learned policy cannot be hot-fixed by editing a spreadsheet - when players find an exploit, the studio must retrain and re-certify the model. Training is expensive and nondeterministic, while games demand the budget discipline and reproducibility of Section 1.3. So classical techniques (Units II-III) run the show at runtime, and ML appears where it pays: offline pipelines, sandboxed experiments, and player analytics.",
              "The productive modes of ML in games are concrete. Offline content tools: neural upscaling (NVIDIA DLSS), AI-assisted animation blending and motion matching, texture synthesis. Sandboxed learning: racing-line optimisation and bot training in simulation before shipping fixed policies. Player analytics: churn prediction from telemetry, matchmaking ratings, and the player models of Section 4.6. Research showcases: OpenAI Five (Dota 2) and DeepMind's AlphaStar (StarCraft II) proved RL can master entire commercial games, but both trained for the equivalent of centuries of play on clusters - no shipping budget supports that per patch.",
              "Where learning does ship at runtime, it is constrained. Forza's Drivatars learn from player racing lines but are aggregated, moderated and capped; fighting-game AI in modern titles sometimes trains against player data offline then ships fixed weights; and roguelike directors still use hand-tuned curves rather than learned ones. The exam framing: learning is powerful but unaccountable - a designer cannot explain why a network does something, and unexplainable behavior breaks the believability and tunability contracts of Unit I. That trade-off sentence is the expected conclusion of any 'why don't shipped NPCs learn' question.",
              "For the exam, organise this section as a map. Axes: what learns (policy, content, player model), and when (offline pre-ship, runtime sandboxed, runtime live). Offline policy learning ships as fixed weights (Drivatar); runtime learning is rare and small (adaptive difficulty nudges); content learning is offline (upscale, texture); player models run live on telemetry. Every remaining section of this unit slots into exactly one cell of that map - Q-learning and DQN are offline policy learning, behavior cloning is offline policy learning from demonstration, PCG is content generation, and DDA is the live player-model cell.",
            ],
            bullets: [
              "Shipped NPCs almost never learn at runtime: unpatchable exploits, training cost, nondeterminism versus budget and reproducibility.",
              "Offline ML pipelines: DLSS upscaling, motion matching and animation blending, texture synthesis.",
              "Sandboxed learning: policies trained in simulation, then shipped as fixed weights (racing Drivatars, moderated and capped).",
              "Player analytics: churn prediction, matchmaking ratings, telemetry-driven player models.",
              "Research milestones: OpenAI Five (Dota 2) and AlphaStar (StarCraft II) mastered full commercial games via RL at cluster scale.",
              "Accountability trade-off: a network's behavior is unexplainable and un-tunable - it breaks the Unit I contracts.",
              "Map to remember: policy / content / player-model learning, each offline or at runtime - every section of this unit fills one cell.",
            ],
            table: {
              caption: "Where ML actually lives in shipped games.",
              headers: ["What learns", "When", "Shipped example", "Why constrained"],
              rows: [
                ["Policy (NPC behavior)", "Offline, shipped frozen", "Forza Drivatars", "Unpatchable exploits; tuning contracts"],
                ["Policy (research)", "Massive offline training", "OpenAI Five, AlphaStar", "Centuries of simulated play per run"],
                ["Content (visuals)", "Offline tooling", "DLSS upscaling, texture synthesis", "Deterministic output needed"],
                ["Player model", "Runtime on telemetry", "Matchmaking, churn models", "Statistical, not behavioral"],
                ["Difficulty director", "Runtime, small nudges", "Hand-tuned DDA curves", "Guardrails beat learned chaos"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Classical runtime AI versus learning-based AI",
              caption:
                "Learning is powerful but unaccountable - which is why shipping freezes it.",
              left: {
                heading: "Classical runtime AI",
                items: [
                  "FSMs, BTs, A* - hand-tuned",
                  "Designer-editable data",
                  "Deterministic and testable",
                  "Fixable by patching a spreadsheet",
                  "Millisecond budgets respected",
                ],
              },
              right: {
                heading: "Learning-based AI",
                items: [
                  "Networks trained from reward or data",
                  "Opaque: behavior unexplainable",
                  "Expensive training, cluster-scale",
                  "Exploits need retraining, not patches",
                  "Ships frozen, or stays in research",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "The question 'why is machine learning rarely used at runtime in commercial games' wants three reasons and one counterexample: unpatchable learned exploits, training cost and nondeterminism versus frame budgets, and unexplainability breaking tunability - with Forza Drivatars (learned offline, shipped frozen) as the counterexample showing the accepted compromise.",
            },
            keyTerms: [
              { term: "Runtime learning", definition: "An agent's policy changing during live gameplay - rare in shipping games because it is unpatchable and un-tunable." },
              { term: "Offline training", definition: "Learning performed before shipping (simulation or data logs), with the result frozen into the build." },
              { term: "Player analytics", definition: "Statistical models over telemetry - churn, matchmaking, skill estimation - running on player data." },
              { term: "Motion matching", definition: "An ML-flavoured animation technique that picks the best-matching pose from a motion-capture dataset each frame." },
            ],
            examQuestions: [
              {
                q: "Explain where machine learning is used in modern games. Distinguish offline, sandboxed and runtime learning, give shipped and research examples, and justify why most runtime NPC behavior remains hand-authored.",
                marks: 7,
                outline: [
                  "Recall the Unit I contract: believability, tunability, determinism, frame budgets.",
                  "Offline ML: DLSS upscaling, motion matching, texture synthesis - deterministic tools, frozen output.",
                  "Sandboxed learning: policies trained in simulation, shipped as fixed weights - Forza Drivatars example.",
                  "Runtime learning is rare: unpatchable exploits require retraining, breaking the patch-a-spreadsheet workflow.",
                  "Training cost: OpenAI Five and AlphaStar needed centuries of simulated play on clusters.",
                  "Player analytics as the live ML cell: matchmaking, churn prediction, player models.",
                  "Conclude with the accountability trade-off: learned behavior is opaque, so shipping freezes it.",
                ],
              },
              {
                q: "Name two shipped uses of ML that are not NPC behavior.",
                marks: 2,
              },
              {
                q: "What compromise does Forza's Drivatar system represent?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.2",
            title: "Reinforcement learning and Q-learning with worked numbers",
            body: [
              "Reinforcement learning (RL) trains an agent from reward, not from labels. The loop: the agent observes state s, picks action a under some policy, the environment returns reward r and next state s', and the agent updates its policy to collect more reward over time. The objective is the discounted return: the sum of future rewards weighted by gamma (typically 0.9-0.99), so immediate rewards count more than distant ones. Two forces shape learning: exploitation (pick the best-known action) and exploration (try alternatives to discover better ones) - balanced by epsilon-greedy, which picks a random action with probability epsilon, decaying as learning proceeds.",
              "Q-learning is the canonical tabular algorithm. It maintains Q(s, a): the expected discounted return from taking a in state s and behaving optimally thereafter. After each step it applies Q(s, a) <- Q(s, a) + alpha x (r + gamma x max_a' Q(s', a') - Q(s, a)), where alpha is the learning rate. The bracket is the temporal-difference error: how much better the observed outcome was than the stored estimate. Worked numbers: Q(s, a) = 2.0, alpha = 0.5, gamma = 0.9, reward r = 10, best next value max Q(s', a') = 1.0. Then Q <- 2.0 + 0.5 x (10 + 0.9 x 1.0 - 2.0) = 2.0 + 0.5 x 8.9 = 6.45. One step moved the estimate from 2.0 toward the observed 10+reward stream - that single computation is the most-asked numerical question in this unit.",
              "Convergence needs a few conditions worth citing: every state-action pair must be visited infinitely often (exploration), alpha must decay appropriately, and rewards should be finite. Q-learning is off-policy - it learns the optimal policy while following any exploratory policy - and its tabular form handles small state spaces perfectly: a gridworld maze, a simplified fighting-game state lattice. For a worked gridworld: a 4x4 maze, step reward -0.1, goal +10; after training, the agent's greedy walk of Q-values traces the shortest path, because the +10 goal value propagates backward one gamma-discounted step per update.",
              "The limits point forward. Tabular Q-learning dies when states explode: a 1080p screen has more states than atoms in the universe, so a table is impossible. Deep Q-networks (Section 4.3) replace the table with a neural network approximating Q(s, a) - the bridge to Atari, self-play and modern RL. Exam arithmetic to keep sharp: given Q, alpha, gamma, r and max Q(s'), compute the update in one line; given a gamma, explain why rewards far in the future matter less (gamma^k weighting); and explain epsilon-greedy in one sentence. Those three cover the standard short questions.",
            ],
            bullets: [
              "RL loop: state -> action -> reward + next state; objective is the discounted return with gamma typically 0.9-0.99.",
              "Exploration versus exploitation: epsilon-greedy picks random actions with probability epsilon, decaying over training.",
              "Q-learning update: Q(s, a) <- Q(s, a) + alpha x (r + gamma x max Q(s', a') - Q(s, a)).",
              "Worked update: Q = 2.0, alpha = 0.5, gamma = 0.9, r = 10, max Q(s') = 1.0 -> Q = 6.45.",
              "Off-policy: Q-learning learns optimal Q while following any exploratory behavior policy.",
              "Convergence needs infinite visitation of every state-action pair and a decaying alpha.",
              "Tabular scale limit: screen-sized state spaces are impossible - DQN's network approximation is the fix.",
            ],
            codeExample: {
              language: "python",
              caption: "Tabular Q-learning with epsilon-greedy - the worked update included.",
              code: `import random

Q = {}                      # Q[(state, action)] = expected return
def get(Q, s, a): return Q.get((s, a), 0.0)

def q_update(s, a, r, s2, actions, alpha=0.5, gamma=0.9):
    best_next = max(get(Q, s2, a2) for a2 in actions)
    old = get(Q, s, a)
    # Q <- Q + alpha * (r + gamma * max Q(s') - Q)
    Q[(s, a)] = old + alpha * (r + gamma * best_next - old)

# worked numbers: Q=2.0, r=10, max Q(s')=1.0
Q[("s", "a")] = 2.0
Q[("s2", "a1")] = 1.0
q_update("s", "a", 10, "s2", ["a1", "a2"])
print(Q[("s", "a")])        # -> 6.45

def choose(s, actions, eps=0.1):
    if random.random() < eps:               # explore
        return random.choice(actions)
    return max(actions, key=lambda a: get(Q, s, a))  # exploit`,
            },
            diagram: {
              kind: "cycle",
              title: "The reinforcement learning loop",
              caption:
                "Each lap updates Q toward the observed reward stream - the TD error is the steering wheel.",
              steps: [
                { label: "Observe state s", note: "grid cell, game features" },
                { label: "Choose action", note: "epsilon-greedy over Q(s, .)" },
                { label: "Environment responds", note: "reward r and next state s'" },
                { label: "TD update", note: "Q <- Q + alpha x (r + gamma max Q(s') - Q)" },
                { label: "Decay epsilon", note: "explore less as Q stabilises" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "The numerical Q-update is near-guaranteed marks. Memorise the template: Q_new = Q + alpha x (r + gamma x maxQ_next - Q), then substitute: 2.0 + 0.5 x (10 + 0.9 x 1.0 - 2.0) = 6.45. Write the formula first, substitute second, box the answer - and state that the bracket is called the temporal-difference error for the definition mark.",
            },
            keyTerms: [
              { term: "Q-value", definition: "Q(s, a): the expected discounted return from taking action a in state s, then acting optimally." },
              { term: "Temporal-difference error", definition: "The bracket (r + gamma x max Q(s') - Q): how much the observed outcome disagrees with the stored estimate." },
              { term: "Epsilon-greedy", definition: "Exploration strategy picking a random action with probability epsilon, otherwise the current best." },
              { term: "Discount factor gamma", definition: "Weight for future rewards; a reward k steps ahead counts as gamma^k." },
              { term: "Off-policy", definition: "Learning the optimal policy's values while following a possibly different exploratory policy." },
            ],
            examQuestions: [
              {
                q: "Explain reinforcement learning and the Q-learning algorithm. Give the update rule, compute the update for Q = 2.0, alpha = 0.5, gamma = 0.9, reward = 10 and max Q(s') = 1.0, and explain exploration-exploitation with epsilon-greedy.",
                marks: 7,
                outline: [
                  "RL loop: agent observes s, acts, receives r and s'; objective is discounted return.",
                  "Define Q(s, a) as expected discounted return; gamma weights future rewards by gamma^k.",
                  "Update rule: Q <- Q + alpha x (r + gamma x max Q(s') - Q); name the bracket the TD error.",
                  "Substitute: 2.0 + 0.5 x (10 + 0.9 x 1.0 - 2.0) = 2.0 + 0.5 x 8.9 = 6.45.",
                  "Interpretation: the estimate moved from 2.0 toward the observed high-reward outcome.",
                  "Exploration-exploitation: epsilon-greedy random action with probability epsilon, decaying over training.",
                  "Convergence conditions: infinite visitation, decaying alpha; tabular limits motivate DQN.",
                ],
              },
              {
                q: "What does gamma = 0.9 do to a reward received 3 steps later relative to one now?",
                marks: 2,
              },
              {
                q: "Recompute the worked update with alpha = 0.1. What value does Q take?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.3",
            title: "DQN and self-play: the AlphaGo and AlphaZero story",
            body: [
              "Deep Q-networks (DQN, DeepMind 2013-2015) dissolve Q-learning's table limit: a convolutional neural network takes the raw screen as input and outputs Q-values for every legal action. Two tricks made it stable. Experience replay stores transitions (s, a, r, s') in a large buffer and trains on random minibatches from it, breaking the correlation between consecutive frames. A separate target network - a frozen copy updated every few thousand steps - provides the max Q(s') target, preventing the network from chasing its own moving output. With these, one network learned 49 Atari games from pixels with a single hyperparameter set, scoring superhuman play on many.",
              "Self-play is the training regime that scaled RL to perfect-information giants. AlphaGo (2016) combined supervised learning on human expert games, then self-play refinement, with Monte Carlo tree search (Unit 5.4) guiding moves and a value network evaluating positions - beating Lee Sedol 4-1. AlphaGo Zero (2017) removed human data entirely: it learned Go purely by playing itself, starting from random moves, guided only by game rules and reward. AlphaZero (2018) generalised the same recipe to chess and shogi with no opening books, beating Stockfish's classical engine with strikingly 'human' sacrificial style. The recipe: policy network proposes moves, value network judges positions, MCTS acts as the search amplifier, and each self-play game generates training data for the next generation.",
              "The arc carries three lessons examiners like. First, human data is optional: AlphaGo Zero exceeded the human-data-trained AlphaGo - imitation is a warm start, not a requirement. Second, search plus learning beats either alone: MCTS turned the networks' raw judgments into principled lookahead, exactly the Unit 5.4 synergy. Third, compute is the currency: AlphaZero trained on 5000 TPUs generating games - the reason commercial RTS bots (OpenAI Five, AlphaStar) remain research showcases rather than shipping features. For a B.Tech answer, name the two DQN stabilisers, the self-play loop, and one date-and-result per system (Lee Sedol 4-1 in 2016; AlphaZero versus Stockfish 2018).",
              "Why did self-play work for Go and chess but not directly for commercial games? Perfect information and symmetric rules make the game its own teacher: opponent strength automatically scales with your own, generating a curriculum. Imperfect-information and multi-agent games (Dota, StarCraft) need league training, opponent modeling and enormous teams of tricks - which is why AlphaStar needed a league of agents with exploiter opponents, and why shipping games still prefer the frozen-policy compromise of Section 4.1. This contrast closes the section: DQN for single-agent control, self-play MCTS for two-player perfect-information mastery, and leagues for the messy middle.",
            ],
            bullets: [
              "DQN: CNN maps raw pixels to Q-values per action, solving Q-learning's state-space explosion.",
              "Stabiliser 1 - experience replay: random minibatches from a transition buffer break temporal correlation.",
              "Stabiliser 2 - target network: a frozen copy supplies max Q(s'), updated every few thousand steps.",
              "One network, 49 Atari games from pixels (2013-2015), superhuman on many titles.",
              "AlphaGo 2016: supervised on human games plus self-play plus MCTS - beat Lee Sedol 4-1.",
              "AlphaGo Zero 2017: no human data, rules only, surpassed AlphaGo; AlphaZero 2018 generalised to chess and shogi, beating classical Stockfish.",
              "Self-play recipe: policy net proposes, value net evaluates, MCTS amplifies; league training needed for imperfect-information games (AlphaStar).",
            ],
            table: {
              caption: "The DeepMind self-play timeline - memorise one row per milestone.",
              headers: ["System", "Year", "Human data?", "Games", "Landmark result"],
              rows: [
                ["DQN", "2013-2015", "No (reward from pixels)", "49 Atari titles", "Single network, superhuman on many"],
                ["AlphaGo", "2016", "Yes (expert games)", "Go", "Beat Lee Sedol 4-1"],
                ["AlphaGo Zero", "2017", "None - rules only", "Go", "Surpassed AlphaGo via pure self-play"],
                ["AlphaZero", "2018", "None", "Chess, shogi, Go", "Beat classical Stockfish engine"],
                ["AlphaStar", "2019", "League training", "StarCraft II", "Grandmaster league on ladder"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "One AlphaZero self-play generation",
              caption:
                "Play, learn, promote - each lap makes the next opponent a stronger version of yourself.",
              stages: [
                { label: "Self-play games", note: "current policy net + MCTS picks moves" },
                { label: "Collect training data", note: "positions, MCTS visit counts, game outcomes" },
                { label: "Train networks", note: "policy and value nets fit the new data" },
                { label: "Evaluate vs previous", note: "candidate must beat the incumbent" },
                { label: "Promote and repeat", note: "next generation is a stronger teacher" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "For 'explain DQN', the two stabilisers - experience replay and target network - are the entire second half of the answer; forgetting either caps the mark. For the self-play question, one line per system with a year and result (AlphaGo 4-1 over Lee Sedol, 2016; AlphaZero over Stockfish, 2018) demonstrates command of the case study.",
            },
            keyTerms: [
              { term: "DQN", definition: "Deep Q-network: a neural network approximating Q(s, a) from raw observations, stabilised by replay and a target network." },
              { term: "Experience replay", definition: "Training on random minibatches from a stored transition buffer to decorrelate learning samples." },
              { term: "Target network", definition: "A periodically frozen copy of the Q-network providing stable bootstrap targets." },
              { term: "Self-play", definition: "Training regime where an agent improves by playing against copies of itself - opponents scale automatically." },
              { term: "Value network", definition: "A network estimating the win probability of a position, guiding search in AlphaGo/AlphaZero." },
            ],
            examQuestions: [
              {
                q: "Explain the DQN architecture and its two stabilising mechanisms. Then describe the AlphaGo to AlphaZero progression with dates and results, and explain why self-play works for perfect-information games.",
                marks: 7,
                outline: [
                  "DQN replaces the Q-table with a CNN mapping pixels to action values.",
                  "Stabiliser 1: experience replay - random minibatches break consecutive-frame correlation.",
                  "Stabiliser 2: target network - frozen copy supplies max Q(s'), updated periodically.",
                  "Result: one network, 49 Atari games from pixels, superhuman on many.",
                  "AlphaGo (2016): human expert data + self-play + MCTS, beat Lee Sedol 4-1.",
                  "AlphaGo Zero (2017): no human data, surpassed AlphaGo; AlphaZero (2018) beat Stockfish at chess and shogi.",
                  "Why self-play works: perfect information and symmetry make the game its own curriculum; imperfect information needs leagues (AlphaStar).",
                ],
              },
              {
                q: "Why does experience replay improve DQN training stability?",
                marks: 2,
              },
              {
                q: "What changed between AlphaGo and AlphaGo Zero, and what was the surprising result?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.4",
            title: "Imitation learning and behavior cloning",
            body: [
              "Imitation learning learns a policy from expert demonstrations instead of from reward. The simplest form is behavior cloning: record (state, expert action) pairs - screen captures and controller inputs from a human player - and train a supervised classifier or regressor to map state to action. Training is ordinary supervised learning, cheap and stable, which is why cloning is the first technique studios reach for when they want 'AI that plays like our designers': bot movement styles, racing lines, and animation policies all trace to cloned data.",
              "The classic failure is covariate shift. The clone only sees states the expert visited; the moment it makes a small mistake, it drifts into states the expert never demonstrated, and its predictions there are garbage - mistakes compound. The driving analogy: a clone trained on a perfect driver's lane-centering data has no idea what to do half a metre off-center, because the expert never went there. F1 telemetry cloning fails exactly this way on corner exits. DAgger (dataset aggregation) fixes it: periodically let the cloned policy drive, have the expert label those drifted states, add them to the dataset, retrain - the distribution of training states converges to the policy's actual visitation.",
              "A second failure is multimodality: at a fork, two actions are both expert-good (turn left or right). Mean-squared regression averages them into a wrong action (drive straight into the median), so clones train with classification over discrete actions or with probabilistic/diffusion policies that can represent multiple modes. On top of these sit the modern hierarchy: inverse RL infers the expert's reward function from demonstrations, then applies ordinary RL; generative imitation with GAIL matches state-action distributions adversarially. For exams, cloning plus DAgger plus the multimodality note covers the expected depth.",
              "Where this lands in games: cloning seeds policies that RL later refines (the exact AlphaGo two-stage recipe), clones provide backup drivers for racing AI, and cloned animation policies drive motion matching. It is also the honest answer to 'why not just record the designer playing?' - recording gives data, cloning turns data into a policy, but without DAgger the policy only works inside the demo tape. State the pipeline - record, train, drift, aggregate, retrain - and you have drawn the entire section as one loop.",
            ],
            bullets: [
              "Behavior cloning: supervised learning on (state, expert action) pairs recorded from human play.",
              "Cheap and stable - no reward engineering - so it is the first 'AI like our designers' technique studios try.",
              "Covariate shift: the clone drifts into states absent from the demo data and fails there; mistakes compound.",
              "DAgger fix: expert labels the clone's own drifted states; aggregated dataset matches true visitation; retrain.",
              "Multimodality trap: averaging two valid actions at a fork yields a wrong one - use classification or probabilistic policies.",
              "Extensions: inverse RL infers the reward function; GAIL matches expert distributions adversarially.",
              "Game uses: seed for RL refinement (AlphaGo stage one), backup racing drivers, motion-matching animation policies.",
            ],
            table: {
              caption: "Reinforcement learning versus imitation learning on the axes exams ask for.",
              headers: ["Axis", "Reinforcement learning", "Imitation learning / cloning"],
              rows: [
                ["Supervision", "Reward signal from environment", "Expert (state, action) demonstrations"],
                ["Training cost", "Huge - millions of episodes", "Small - one supervised pass"],
                ["Stability", "Unstable; needs replay, targets", "Stable, ordinary supervised training"],
                ["Ceiling", "Can exceed the expert (AlphaGo Zero)", "Capped by expert, drifts off-distribution"],
                ["Main failure", "Sparse or deceptive rewards", "Covariate shift; multimodal actions"],
                ["Fixes", "Shaping, replay, target nets", "DAgger aggregation, classification heads"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Behavior cloning with DAgger correction",
              caption:
                "The loop closes when the training distribution matches what the policy actually visits.",
              stages: [
                { label: "Record expert", note: "states and actions from human play" },
                { label: "Train policy", note: "supervised mapping state -> action" },
                { label: "Roll out policy", note: "let the clone play; log its states" },
                { label: "Expert labels drift", note: "annotate states the clone visited" },
                { label: "Aggregate and retrain", note: "DAgger loop; repeat until stable" },
              ],
            },
            callout: {
              type: "warning",
              title: "The demo-tape trap",
              body: "A behavior clone is only as wide as its demonstration tape. Any answer that presents cloning as a complete solution loses the analysis mark - always add covariate shift and the DAgger correction. The one-line summary: cloning learns what the expert did, DAgger teaches it what to do when it errs.",
            },
            keyTerms: [
              { term: "Behavior cloning", definition: "Supervised training of a policy on (state, expert action) pairs from recorded demonstrations." },
              { term: "Covariate shift", definition: "The mismatch between demonstration states and the states a policy actually visits after small mistakes." },
              { term: "DAgger", definition: "Dataset aggregation: the expert labels the cloned policy's own rollout states, and the augmented dataset is retrained." },
              { term: "Inverse RL", definition: "Inferring the reward function that explains expert behavior, then running RL against it." },
            ],
            examQuestions: [
              {
                q: "Explain behavior cloning: its data pipeline, training objective, the covariate-shift failure with an example, and how DAgger corrects it. Contrast cloning with reinforcement learning.",
                marks: 7,
                outline: [
                  "Pipeline: record (state, expert action) pairs; train supervised state -> action mapping.",
                  "Advantages: cheap, stable, no reward engineering - first choice for designer-style bots.",
                  "Failure: covariate shift - small errors lead into states absent from demonstrations; errors compound.",
                  "Worked example: lane-centering clone has no data for being half a metre off-center.",
                  "DAgger: roll out the clone, expert labels its visited states, aggregate, retrain - loop until stable.",
                  "Multimodality: averaging two valid fork actions is wrong; classify or use probabilistic policies.",
                  "Contrast with RL: RL costs millions of episodes but can exceed the expert; cloning is cheap but capped and drifting.",
                ],
              },
              {
                q: "Why can mean-squared regression fail when two expert actions are both valid?",
                marks: 2,
              },
              {
                q: "In one sentence each, what do DAgger and inverse RL contribute?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.5",
            title: "Procedural content generation: taxonomy, terrain and quests",
            body: [
              "Procedural content generation (PCG) creates game content - levels, terrain, items, quests, music, textures - by algorithm, with a seed as the only input. The standard taxonomy crosses two axes. Online versus offline: does generation happen at runtime (roguelike dungeons each run, No Man's Sky's 18-quintillion-planet universe) or during development (a tool builds the level the artist then edits)? Necessary versus optional: is the generated content unplayable without (infinite terrain, No Man's Sky) or a labour-saver where hand-crafted alternatives exist (border foliage, loot affixes)? The 2x2 places every PCG system in a game: Diablo's dungeons are online-necessary, Spelunky's caves online-necessary, Skyrim's radiant quests online-optional, SpeedTree foliage offline-optional.",
              "Terrain generation is the flagship technique: fractal noise. Perlin noise (Ken Perlin, 1985) generates smooth, gradient-based pseudo-random values in any dimension - value noise hashed on a lattice, gradients interpolated with smoothstep so derivatives are continuous. One octave of noise is a smooth blob field; the art is fractal Brownian motion (fBm): sum several octaves, each at double the frequency and half the amplitude. A worked 1D case: octaves at frequencies 1, 2, 4, 8 with amplitudes 1, 0.5, 0.25, 0.125 sum to a mountain silhouette - big slow hills plus small fast detail, with persistence (amplitude ratio, typically 0.5) and lacunarity (frequency ratio, typically 2) as the two knobs. Add a height threshold for water and a moisture map for biomes, and Minecraft-style worlds fall out.",
              "Beyond terrain, the generator zoo. Dungeons: binary-space partitioning splits a rectangle recursively into rooms, then connects sibling rooms with corridors - the classic roguelike approach - while cellular automata produce cave systems by smoothing a random binary grid. Items: grammar and stat-table systems compose affixes - Diablo-style 'prefix + base + suffix' generation with rarity weights. Quests: template grammars instantiate patterns like 'rescue X from Y at Z' with entities drawn from world state (Skyrim's radiant system - flexible, but the reason radiant quests feel samey; the depth-versus-variety trade is the standard critique). Waves of enemies, name generators for No Man's Sky's species, and music segmentation complete the family.",
              "PCG carries two exam-level evaluations. Strengths: replayability from new content each run, content volume no team could hand-build (No Man's Sky's planets), and rapid prototyping of level layouts. Weaknesses: sameness beneath variety (radiant quests again), the '10,000 bowls of oatmeal' problem - Kate Compton's phrase for a million unique-but-uninteresting outputs - and quality risk, since generators cannot judge fun. The professional answer is mixed authorship: generate candidates offline, let designers curate and hand-polish the best, ship both. Every 'discuss PCG advantages and limitations' question is answered by replayability and volume against oatmeal and curation.",
            ],
            bullets: [
              "PCG taxonomy: online/offline (runtime versus tool-time) crossed with necessary/optional (unplayable-without versus labour-saver).",
              "Diablo/Spelunky dungeons: online-necessary; Skyrim radiant quests: online-optional; SpeedTree: offline-optional.",
              "Perlin noise (1985): lattice value/gradient noise with smoothstep interpolation giving continuous derivatives.",
              "fBm terrain: sum octaves at frequency ratio lacunarity (2) and amplitude ratio persistence (0.5) - hills plus detail.",
              "Worked octaves: frequencies 1, 2, 4, 8 with amplitudes 1, 0.5, 0.25, 0.125 build a mountain silhouette.",
              "Dungeon recipes: BSP room splits with sibling corridors; cellular automata caves; grammar-based loot affixes; template quests.",
              "Evaluations: replayability and content volume versus sameness, Kate Compton's '10,000 bowls of oatmeal', and mixed authorship as the fix.",
            ],
            codeExample: {
              language: "python",
              caption: "1D fBm terrain from value noise - the worked octaves as code.",
              code: `import random, math

def value_noise(seed, n):
    rng = random.Random(seed)
    lattice = [rng.uniform(-1, 1) for _ in range(n + 1)]
    out = []
    for x in range(n):
        i = int(x)                          # lattice cell
        t = x - i
        s = t * t * (3 - 2 * t)             # smoothstep interpolation
        out.append(lattice[i] * (1 - s) + lattice[i + 1] * s)
    return out

def fbm(seed, n=64, octaves=4, persistence=0.5, lacunarity=2):
    height, amp, freq = [0.0] * n, 1.0, 1.0
    for o in range(octaves):                # octaves: 1,2,4,8 freq
        layer = value_noise(seed + o, int(n * freq) or n)
        for x in range(n):
            idx = int(x * freq) % len(layer)
            height[x] += amp * layer[idx]   # amplitude halves per octave
        amp *= persistence
        freq *= lacunarity
    return height

terrain = fbm(7)
print("lowest", round(min(terrain), 2), "highest", round(max(terrain), 2))
# water where height < 0, mountains above 0.5 - a 1D Minecraft ridge`,
            },
            diagram: {
              kind: "matrix",
              title: "The PCG 2x2 taxonomy",
              caption:
                "Every procedural system in any game drops into one of these four cells.",
              axes: { x: "offline -> online", y: "^ optional -> necessary" },
              quadrants: [
                { label: "Offline + necessary", note: "tool-time generation of core levels, then curated" },
                { label: "Online + necessary", note: "No Man's Sky planets, Spelunky caves, Diablo dungeons" },
                { label: "Offline + optional", note: "SpeedTree foliage, texture synthesis, name lists" },
                { label: "Online + optional", note: "Skyrim radiant quests, random loot affixes" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "PCG questions usually ask for the taxonomy plus one technique. Draw the 2x2 with one game per cell (that alone is four marks), then present fBm terrain with the octave table - frequencies 1, 2, 4, 8 and amplitudes 1, 0.5, 0.25, 0.125 - and name persistence and lacunarity. The numbers make the technique answer concrete.",
            },
            keyTerms: [
              { term: "PCG", definition: "Procedural content generation: creating levels, terrain, items or quests algorithmically from seeds and rules." },
              { term: "Perlin noise", definition: "Gradient lattice noise (1985) with smooth interpolation, giving continuous natural-looking randomness." },
              { term: "fBm", definition: "Fractal Brownian motion: summing noise octaves at doubling frequency and (typically) halving amplitude to build terrain." },
              { term: "Persistence / lacunarity", definition: "The amplitude and frequency ratios between successive octaves - the two knobs of fractal terrain." },
              { term: "BSP dungeon", definition: "Recursive rectangle partitioning into rooms connected by sibling corridors - the classic roguelike generator." },
            ],
            examQuestions: [
              {
                q: "Explain the PCG taxonomy (online/offline, necessary/optional) with one game example per cell, and describe fractal terrain generation from Perlin noise with an octave table including persistence and lacunarity.",
                marks: 7,
                outline: [
                  "Define PCG: algorithmic content creation from seeds; state both taxonomy axes.",
                  "Online-necessary: No Man's Sky planets, Spelunky caves - unplayable without generation.",
                  "Online-optional: Skyrim radiant quests, Diablo loot affixes - hand-crafted alternatives exist.",
                  "Offline cells: tool-time level generation curated by artists; SpeedTree foliage.",
                  "Perlin noise: lattice values/gradients with smoothstep interpolation, continuous derivatives.",
                  "fBm octave table: frequencies 1, 2, 4, 8; amplitudes 1, 0.5, 0.25, 0.125; persistence 0.5, lacunarity 2.",
                  "Post-processing: height thresholds for water, moisture maps for biomes; note the oatmeal critique.",
                ],
              },
              {
                q: "What is the '10,000 bowls of oatmeal' problem and who coined it?",
                marks: 2,
              },
              {
                q: "Describe BSP dungeon generation in three steps.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.6",
            title: "Generative NPC dialogue, player modeling and DDA",
            body: [
              "Large language models (LLMs) promise the oldest NPC dream: dialogue that is not a dialogue tree. Instead of branching scripts, an NPC generates responses live from a character sheet, world state and conversation history. Shipped and announced systems sketch the design space: Inworld and Charisma provide NPC dialogue middleware; games like Vaudeville and mod projects hook local models into Skyrim and RimWorld; Ubisoft's Ghostwriter drafts barks (short contextual lines like 'reload now!') for writers to approve. The pattern in every serious design is the same: the model generates candidate lines, a validation layer filters them against lore and safety constraints, and writers curate - the LLM is a junior writer, not the director.",
              "The risks are as structural as the promise. Hallucination: an LLM happily invents a dead king being alive or reveals the murderer in act one - breaking narrative in ways a branching tree never could. Cost and latency: a cloud model costs fractions of a cent per line but adds 300 ms-2 s latency, unacceptable mid-combat; local models fit the frame budget only barely. Consistency: the same NPC must keep one personality across 40 hours. Safety: unfiltered generation in a shipped product is a moderation nightmare. And evaluation: how do you test infinite dialogue? These constraints explain the guardrail architecture - constrained decoding, retrieved world facts, persona prompts, writer approval loops.",
              "Player modeling is the quieter, older half of this section: build a statistical model of the player from telemetry - skill (accuracy, reaction time, APM), preferences (stealth versus combat ratios), and state (frustration signals like repeated deaths). Classical techniques cluster players into archetypes (Bartle types for MMOs: achievers, explorers, socialisers, killers), fit skill curves over time, and predict churn. The model feeds two consumers: matchmaking (pairing by predicted skill) and dynamic difficulty adjustment - the Unit I topic now grounded in measurement: DDA inputs are model outputs, its guardrails bounded, its adjustments slow.",
              "The exam synthesis ties the unit together: generation produces content (Section 4.5) and now language (this section); player models convert telemetry into parameters; DDA closes the loop by feeding those parameters back into the classical AI of Units II-III. A complete answer names the LLM guardrail architecture (generate, validate, curate), two risks (hallucination, latency), one player-model technique (Bartle clustering or skill curves), and the DDA loop with its invisibility rule. That is five marks of structure plus one for any shipped example - Ghostwriter or Inworld - landing the seventh.",
            ],
            bullets: [
              "LLM NPC dialogue: generate live responses from persona + world state + history, replacing static dialogue trees.",
              "Shipped pattern: generate candidates, validate against lore/safety, writer curation - the LLM is a junior writer (Ubisoft Ghostwriter barks).",
              "Risk 1 - hallucination: invented lore and plot spoilers break narrative deterministically authored games rely on.",
              "Risk 2 - cost and latency: cloud lines add 300 ms-2 s; local models strain frame budgets.",
              "Player modeling: cluster archetypes (Bartle: achiever, explorer, socialiser, killer), fit skill curves, predict churn.",
              "DDA loop: telemetry -> player model -> guarded parameter adjustments into classical Unit II-III AI.",
              "Invisibility rule stands: DDA adjustments stay small, slow and masked (Section 1.6 guardrails).",
            ],
            table: {
              caption: "Promise versus risk for LLM-driven NPC dialogue.",
              headers: ["Dimension", "Promise", "Risk", "Mitigation"],
              rows: [
                ["Variation", "Infinite non-repeating lines", "Inconsistent personality", "Persona prompts, history windows"],
                ["Lore safety", "Context-aware answers", "Hallucinated facts, spoilers", "Retrieved world facts, constrained decoding"],
                ["Cost/latency", "No voice-studio sessions", "300 ms-2 s per line, API cost", "Local models, pre-generation, caching"],
                ["Quality control", "Drafts at scale (barks)", "Unpredictable output", "Writer approval loops (Ghostwriter)"],
                ["Evaluation", "Covers long-tail queries", "Untestable open-ended space", "Scripted eval suites, human review"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Shipping LLM dialogue with or without guardrails",
              caption:
                "The validation layer is what separates a demo from a shippable system.",
              start: "NPC needs a line of dialogue",
              branches: [
                { label: "LLM + validation layer", outcome: "Generate, filter against lore and safety, writer curates - shippable", good: true },
                { label: "LLM + persona prompt only", outcome: "Risky: hallucinated lore, inconsistent persona over 40 hours", good: false },
                { label: "Classical dialogue tree", outcome: "Fully controlled, but combinatorial authoring cost", good: true },
                { label: "Free-form cloud LLM at runtime", outcome: "Latency 300 ms-2 s, cost per line, moderation exposure", good: false },
              ],
            },
            callout: {
              type: "tip",
              title: "Anchor with one shipped system",
              body: "Generative-dialogue questions reward grounding. Name Ubisoft's Ghostwriter (LLM drafts barks, writers approve) as the production-safe pattern, and Inworld or Skyrim mods as the experimental end. One sentence each shows you know the difference between a pipeline and a demo - typically the difference between a 5 and a 7.",
            },
            keyTerms: [
              { term: "Bark", definition: "A short contextual NPC utterance ('reloading!') triggered by game events; LLMs now draft these for writer approval." },
              { term: "Hallucination", definition: "LLM output inventing facts - lore errors or spoilers - unacceptable in deterministic narratives." },
              { term: "Player model", definition: "A statistical model of a player's skill, preferences and state built from telemetry." },
              { term: "Bartle types", definition: "MMO player archetypes - achiever, explorer, socialiser, killer - used for clustering and matchmaking." },
            ],
            examQuestions: [
              {
                q: "Discuss generative AI for NPC dialogue: the architecture that makes it shippable, two risks with mitigations, and one shipped example. Then explain player modeling and how it drives dynamic difficulty adjustment.",
                marks: 7,
                outline: [
                  "Promise: live dialogue from persona + world state + history replaces static trees.",
                  "Architecture: generate candidates -> validate against lore/safety -> writer curation.",
                  "Shipped example: Ubisoft Ghostwriter drafts barks for approval; Inworld middleware; Skyrim mods.",
                  "Risk 1: hallucination - invented lore or spoilers; mitigation: retrieved facts, constrained decoding.",
                  "Risk 2: cost and latency (300 ms-2 s per cloud line); mitigation: local models, caching, pre-generation.",
                  "Player modeling: telemetry to skill curves and Bartle clusters; feeds matchmaking and DDA.",
                  "DDA loop: model outputs become guarded, slow, invisible parameter adjustments in classical AI.",
                ],
              },
              {
                q: "Why is free-form cloud LLM dialogue risky at runtime in an action game?",
                marks: 2,
              },
              {
                q: "List the four Bartle player types.",
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
      title: "Strategy, Board Games and Production Practice",
      summary:
        "Adversarial search end to end: minimax on a worked tree, alpha-beta pruning with the exact pruned branches, heuristic evaluation functions for chess, Monte Carlo tree search with its four phases, tactical and strategic AI in real-time strategy games, and the production view - testing and debugging tools, shipped case studies from Halo to Rocket League, and the AI production pipeline and career paths.",
      chapter: {
        number: "05",
        title: "Adversaries and Shipped Games",
        intro:
          "Unit V handles opponents who think back. Minimax assumes optimal play; alpha-beta pruning makes it tractable by cutting branches that cannot matter; evaluation functions score positions search cannot reach; Monte Carlo tree search replaces exhaustive evaluation with statistics from random playouts. Then the lens widens to RTS games' tactical-versus-strategic split, and finally to practice: how game AI is tested and debugged, what Halo, F.E.A.R., Civilization and Rocket League actually shipped, and how a career in game AI is built.",
        inOneBreath:
          "Minimax alternates MAX and MIN plies: in the tree with MAX root over leaves 3, 5, 2, 9, MIN takes min(3,5)=3 and min(2,9)=2, so MAX picks 3 by moving left. Alpha-beta prunes when a line already proves the branch irrelevant: after alpha = 3 from the left subtree, exploring the right gives beta = 2 at its first leaf, and since beta <= alpha the 9 is never examined - same answer, half the work; with good move ordering pruning reaches near O(b^(d/2)), doubling search depth. Evaluation functions grade unreachable leaves: chess material (pawn 100, knight 320, bishop 330, rook 500, queen 900) plus pawn structure, mobility and king safety. MCTS iterates selection (UCB1 = Q/N + C sqrt(ln N_parent / n), C around 1.4), expansion, random simulation, backpropagation - no evaluation function needed, the secret of Go. RTS AI splits strategic build-order planning from tactical unit control; shipped games debug AI with logging, visualizers and fixtures; Halo 2 shipped behavior trees, F.E.A.R. shipped GOAP, Civilization IV shipped XML data-driven leaders, Rocket League ships utility-driven bots.",
        sections: [
          {
            number: "5.1",
            title: "Adversarial search and minimax - worked tree",
            body: [
              "Two-player, zero-sum, perfect-information games (chess, tic-tac-toe, Go) have a special structure: what is good for me is exactly bad for my opponent, and both players see everything. Adversarial search exploits this. The game tree has positions as nodes and moves as edges; MAX nodes are your turns (maximise outcome), MIN nodes are the opponent's (minimise your outcome). The value of a position is the game-theoretic value under optimal play by both sides - the minimax value - and minimax computes it recursively from terminal states outward.",
              "The algorithm: at terminal nodes return the utility (win +1, loss -1, draw 0, or an evaluation score); at MAX nodes return the maximum of children's values; at MIN nodes return the minimum. Worked tree: root MAX with two children A and B. A's leaves are 3 and 5, B's leaves are 2 and 9. A = min(3, 5) = 3; B = min(2, 9) = 2; root = max(3, 2) = 3 - the optimal move is A, guaranteeing value 3. Note what minimax assumes: the opponent plays optimally. Against a weak opponent the 9 under B might be reachable, but minimax guarantees the floor - never worse than 3 if the opponent is perfect.",
              "Complexity is the algorithm's enemy. With branching factor b and depth d, minimax is O(b^d): chess has b about 35 and a typical depth 80, so full expansion is impossible - roughly 35^80 positions. This forces two amendments covered in the next sections: cut the tree (alpha-beta pruning) and estimate the leaves (heuristic evaluation instead of playing to terminal states). Both amendments preserve the guarantee approximately: alpha-beta returns the same value as full minimax, and the horizon effect (evaluating just before a big swing) is the price of cutoffs - countered by quiescence search that extends unstable lines.",
              "The worked trace is the exam artifact. Draw the tree, compute min(3,5) = 3 and min(2,9) = 2 bottom-up, take max(3,2) = 3 at the root, and circle the chosen move. Then state the three properties: zero-sum (maximising mine minimises theirs), perfect information (no hidden state), and optimal-play assumption. Finally, give the complexity O(b^d) with the chess numbers - b approximately 35, d approximately 80 - and say why Section 5.2 exists. A question worth 7 marks is fully answered by that sequence, and the same skeleton answers tic-tac-toe variants by changing the leaf utilities.",
            ],
            bullets: [
              "Setting: two-player, zero-sum, perfect-information games; MAX and MIN plies alternate.",
              "Minimax recursion: terminals return utility; MAX nodes take the max of children, MIN nodes the min.",
              "Worked tree: leaves 3, 5 under A and 2, 9 under B -> A = 3, B = 2, root = 3; optimal move is A.",
              "Optimal-play assumption: minimax guarantees a floor of 3 even against perfect opposition.",
              "Zero-sum and perfect information are the two structural assumptions to state.",
              "Complexity O(b^d): chess b about 35, depth about 80 - full expansion impossible.",
              "Escape routes: alpha-beta pruning (Section 5.2) and heuristic evaluation with quiescence search.",
            ],
            codeExample: {
              language: "python",
              caption: "Minimax over the worked tree - values 3, 5, 2, 9.",
              code: `import math

# tree: ("max", [child, ...]) | ("min", [child, ...]) | ("leaf", value)
TREE = ("max", [
    ("min", [("leaf", 3), ("leaf", 5)]),   # child A -> 3
    ("min", [("leaf", 2), ("leaf", 9)]),   # child B -> 2
])

def minimax(node):
    kind, kids = node
    if kind == "leaf":
        return kids                        # kids holds the value
    vals = [minimax(k) for k in kids]
    return max(vals) if kind == "max" else min(vals)

def best_move(root):
    _, kids = root
    vals = [minimax(k) for k in kids]
    return vals.index(max(vals))           # 0 -> move A (value 3)

print(minimax(TREE), best_move(TREE))      # -> 3 0`,
            },
            diagram: {
              kind: "flow",
              title: "Minimax evaluation of the worked tree, bottom-up",
              caption:
                "MIN takes the pessimistic minimum at its plies; MAX picks the best surviving child.",
              steps: [
                { label: "Leaves under A", note: "3 and 5" },
                { label: "A = min(3, 5) = 3", note: "MIN ply - opponent picks worst for you" },
                { label: "Leaves under B", note: "2 and 9" },
                { label: "B = min(2, 9) = 2", note: "the 9 is unreachable against optimal play" },
                { label: "Root = max(3, 2) = 3", note: "MAX moves to A; guaranteed value 3" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Draw the worked tree before writing a word - then compute bottom-up in the margins: min(3,5)=3, min(2,9)=2, max(3,2)=3. State the optimal-play assumption in one sentence ('minimax guarantees a floor of 3 against perfect play') - examiners consistently award that interpretation sentence its own mark.",
            },
            keyTerms: [
              { term: "Minimax", definition: "Recursive adversarial search: MAX maximises, MIN minimises, computing the game value under optimal play." },
              { term: "Zero-sum game", definition: "A game where one player's gain is exactly the other's loss, so a single value can be maximised/minimised." },
              { term: "Game tree", definition: "Positions as nodes, moves as edges, terminal utilities at leaves; minimax evaluates it bottom-up." },
              { term: "Horizon effect", definition: "The error from evaluating just before a decisive swing the cutoff depth hides; countered by quiescence search." },
            ],
            examQuestions: [
              {
                q: "Explain minimax for adversarial search. Evaluate the tree whose MAX root has children with leaves 3, 5 and 2, 9; state the optimal move; and discuss the optimal-play assumption and the O(b^d) complexity with chess numbers.",
                marks: 7,
                outline: [
                  "Setting: two-player, zero-sum, perfect-information; MAX and MIN plies alternate.",
                  "Minimax recursion: terminals return utility; MAX takes max of children, MIN takes min.",
                  "Bottom-up: A = min(3, 5) = 3; B = min(2, 9) = 2.",
                  "Root: max(3, 2) = 3 - optimal move is A, guaranteed floor of 3.",
                  "Optimal-play assumption: the 9 under B assumes opponent error; minimax only guarantees 3.",
                  "Complexity: O(b^d); chess b about 35, depth about 80 - infeasible to expand fully.",
                  "Motivate the next sections: alpha-beta pruning and heuristic leaf evaluation with quiescence.",
                ],
              },
              {
                q: "What does the optimal-play assumption guarantee and what does it not?",
                marks: 2,
              },
              {
                q: "Evaluate a MAX root over three MIN children with leaves (4, 6), (7, 1), (5, 5).",
                marks: 3,
              },
            ],
          },
          {
            number: "5.2",
            title: "Alpha-beta pruning - worked pruning",
            body: [
              "Alpha-beta pruning returns exactly the same move as full minimax while examining far fewer nodes. It maintains two bounds while descending: alpha, the best value MAX has already secured on the path so far, and beta, the best value MIN has already secured. At a MAX node alpha rises; at a MIN node beta falls. The pruning condition is beta <= alpha at a MIN node (or alpha >= beta at a MAX node): the current branch can no longer influence the decision at an ancestor, so the rest of its subtree is discarded - the values there cannot change any choice already made.",
              "Worked pruning on the Unit 5.1 tree. Start at root MAX, alpha = -infinity, beta = +infinity. Descend into A (MIN node): first leaf 3 gives beta = 3; second leaf 5 leaves beta at 3; A returns 3, and the root raises alpha to 3. Descend into B (MIN node): its first leaf is 2, so beta becomes 2 - and now beta (2) <= alpha (3): prune. The second leaf 9 is never examined, because MIN under B can already hold MAX to at most 2 there, which is worse than the 3 MAX already has from A; B's exact value is irrelevant, only its bound matters. Final answer unchanged: 3 via A, with one leaf (the 9) never read.",
              "The efficiency story is the exam's quantitative payoff. Best-case pruning - when the best move is always examined first - visits about O(b^(d/2)) nodes instead of O(b^d), effectively doubling the searchable depth at equal cost: a chess program that searched 6 plies with raw minimax reaches roughly 12 with perfect ordering. Ordering matters enormously: heuristics like 'try captures first' (move ordering, killer moves, iterative deepening) approach that best case; worst-case ordering degenerates to no pruning at all. This is why move ordering is the most-tuned parameter in classical game engines.",
              "Details that earn the last marks. Alpha and beta are passed down and narrowed along a single path, not global values - state this to avoid the classic confusion. The algorithm is exact: pruned branches are provably unable to change the root decision, unlike heuristic cutoffs. And in practice engines run iterative deepening with alpha-beta: search depth 1, then 2, then 3, using previous iteration's best move to order the next - the combination powering Deep Blue through modern engines. Together with the evaluation function of Section 5.3, alpha-beta is the whole classical game-playing stack: cutoffs to fit the budget, evaluation to see past the horizon.",
            ],
            bullets: [
              "Bounds: alpha = best already secured for MAX on the path; beta = best secured for MIN; both narrow going down.",
              "Prune when beta <= alpha (MIN node) or alpha >= beta (MAX node): the branch cannot affect an ancestor's choice.",
              "Worked trace: A returns 3, alpha = 3; in B the first leaf 2 sets beta = 2 <= alpha = 3 -> prune the 9.",
              "Correctness: pruning is exact - the root decision is identical to full minimax.",
              "Best-case cost O(b^(d/2)) versus O(b^d): effectively doubles searchable depth.",
              "Move ordering drives efficiency: captures first, killer moves, iterative deepening approach the best case.",
              "Production stack: iterative deepening + alpha-beta + evaluation function - the Deep Blue lineage.",
            ],
            codeExample: {
              language: "python",
              caption: "Alpha-beta on the worked tree; the 9 is never evaluated.",
              code: `import math

LEAVES = {"A1": 3, "A2": 5, "B1": 2, "B2": 9}

def ab(depth, node, alpha, beta, log):
    if node in LEAVES:                    # leaf: record and return
        log.append(node)
        return LEAVES[node]
    if depth % 2 == 0:                    # MAX node
        best = -math.inf
        for child in children(node):
            best = max(best, ab(depth + 1, child, alpha, beta, log))
            alpha = max(alpha, best)
            if alpha >= beta: break       # cutoff at MAX
    else:                                 # MIN node
        best = math.inf
        for child in children(node):
            best = min(best, ab(depth + 1, child, alpha, beta, log))
            beta = min(beta, best)
            if beta <= alpha: break       # cutoff at MIN: B prunes after 2
        return best
    return best

def children(node):                       # A -> A1, A2 ; B -> B1, B2
    return ["A1", "A2"] if node == "A" else ["B1", "B2"]

log = []
print(ab(0, "root", -math.inf, math.inf, log))   # -> 3
print(log)   # ['A1', 'A2', 'B1'] - B2 (the 9) pruned`,
            },
            diagram: {
              kind: "flow",
              title: "Alpha-beta walkthrough of the worked tree",
              caption:
                "One pruned leaf, same answer: beta (2) <= alpha (3) kills the 9 before it is read.",
              steps: [
                { label: "Evaluate A", note: "leaves 3 then 5; A returns 3; alpha = 3" },
                { label: "Enter B with alpha = 3", note: "MIN node, beta = +infinity" },
                { label: "Read first leaf 2", note: "beta drops to 2" },
                { label: "beta (2) <= alpha (3)", note: "prune: leaf 9 never examined" },
                { label: "Root still picks A", note: "same value 3, less work" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Alpha-beta questions are trace questions. Annotate each node with (alpha, beta) as you descend, write the cutoff condition explicitly - 'beta = 2 <= alpha = 3, prune leaf 9' - and close with the O(b^(d/2)) best-case sentence including the 'doubles effective depth' interpretation. The annotated trace is worth more than the pseudocode.",
            },
            keyTerms: [
              { term: "Alpha", definition: "The best value MAX has secured so far along the current path; only rises." },
              { term: "Beta", definition: "The best value MIN has secured so far along the current path; only falls." },
              { term: "Cutoff", definition: "Discarding a subtree when beta <= alpha: its outcome cannot change any ancestor decision." },
              { term: "Move ordering", definition: "Examining likely-best moves first (captures, killers) so cutoffs fire early - the key to best-case pruning." },
              { term: "Iterative deepening", definition: "Searching depth 1, 2, 3... reusing each pass's best move to order the next; pairs with alpha-beta." },
            ],
            examQuestions: [
              {
                q: "Explain alpha-beta pruning. Trace it on the tree with MAX root, A = {3, 5}, B = {2, 9}, showing alpha and beta at each node and the pruned leaf. State the pruning condition and the best-case complexity with its depth interpretation.",
                marks: 7,
                outline: [
                  "Define alpha (MAX's secured best) and beta (MIN's secured best), narrowing down one path.",
                  "Trace A: leaves 3 then 5; A returns 3; root raises alpha to 3.",
                  "Trace B: first leaf 2 sets beta = 2; cutoff condition beta <= alpha (2 <= 3) fires.",
                  "Pruned leaf 9 is never evaluated; answer remains 3 via A - pruning is exact.",
                  "State both cutoff forms: beta <= alpha at MIN, alpha >= beta at MAX.",
                  "Best case O(b^(d/2)) versus O(b^d): doubles effective search depth at equal cost.",
                  "Efficiency depends on move ordering: captures first, killer moves, iterative deepening.",
                ],
              },
              {
                q: "Why does alpha-beta give the same answer as full minimax?",
                marks: 2,
              },
              {
                q: "A raw minimax engine searches 6 plies; with perfect ordering, roughly how deep can alpha-beta go in equal time?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.3",
            title: "Heuristic evaluation functions for chess",
            body: [
              "Search depth is finite - even alpha-beta stops around 10-14 plies - so leaves must be scored by an evaluation function that estimates who is winning from features of the position. The design contract: fast (called at every leaf, millions of times per search), correlated with winning probability, and efficient to update incrementally as moves are made. Evaluation replaces the unreachable horizon with an estimate, which is why classical engines are equal parts search and evaluation craft - Deep Blue's evaluation ran on dedicated hardware precisely because it dominated the time budget.",
              "The workhorse is material, with standard chess values: pawn 100, knight 320, bishop 330, rook 500, queen 900 (approximately - bishop pair often adds 30-50). A worked evaluation: White has rook + knight + 5 pawns versus Black's rook + bishop + 5 pawns: White = 500 + 320 + 500 = 1320; Black = 500 + 330 + 500 = 1330; material alone says Black is ahead by 10 centipawns - essentially equal, because the 10-point knight-bishop gap is within noise. Material dominates because it correlates strongly with outcome, but material-only play is shallow: it undervalues development, king safety and tactics.",
              "Positional terms refine the picture, each a weighted feature. Mobility: count of legal moves, often normalised per piece. Pawn structure: doubled, isolated and backward pawns cost 10-30 each; passed pawns gain value as they advance. King safety: shelter pawns present, open files near the king, enemy attackers within range. Center control, bishop pair, rooks on open files, piece-square tables (a knight on e5 outvalues one on e1 by design). The final score is a weighted sum: score = 100 x material + 15 x mobility + positional terms, often nonlinear (tempos, initiative bonuses). Tuning moved from handcrafting to automated optimisation over self-play games - the bridge from classical engines to the learned evaluations AlphaZero ultimately replaced them with.",
              "Exam framing: define the evaluation function's role (scoring leaves beyond the search horizon), give the material table, work one numeric comparison (the 1320 versus 1330 example), and list four positional terms with rough weights. Then state the design constraints - speed above all, incremental updates, correlation with outcome - and the horizon-effect caveat from Section 5.1 (quiescence search extends capture sequences before evaluating). That structure covers every 'explain evaluation functions' variant, and the same material table answers the frequent short question 'give the standard chess piece values'.",
            ],
            bullets: [
              "Role: estimate who is winning at search leaves the depth horizon cannot reach; called millions of times per move.",
              "Standard chess material: pawn 100, knight 320, bishop 330, rook 500, queen 900; bishop pair bonus about 30-50.",
              "Worked comparison: White R+N+5P = 1320 versus Black R+B+5P = 1330 - a 10-centipawn gap is statistical noise.",
              "Positional terms: mobility, pawn structure (doubled/isolated penalties, passed-pawn bonuses), king safety, center control.",
              "Piece-square tables encode positional knowledge - a knight on e5 outvalues one on e1.",
              "Design constraints: speed dominant, incremental updates per move, strong correlation with outcome.",
              "Horizon effect handled by quiescence search: extend capture sequences before scoring; tuning moved to automated self-play optimisation.",
            ],
            table: {
              caption: "Standard chess evaluation components with typical centipawn weights.",
              headers: ["Feature", "Typical weight", "Direction", "Example"],
              rows: [
                ["Pawn", "100", "more is better", "doubled pawns: -15 each"],
                ["Knight / Bishop", "320 / 330", "more is better", "bishop pair: +30 to +50"],
                ["Rook", "500", "more is better", "on open file: +10 to +20"],
                ["Queen", "900", "more is better", "exposed to attack: -20"],
                ["Mobility", "about 5 per extra move", "more is better", "normalised per piece"],
                ["King safety", "-50 to +50", "shelter good", "open file near king: -30"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Material versus positional evaluation terms",
              caption:
                "Material carries most of the signal; positional terms catch what material misses.",
              left: {
                heading: "Material terms",
                items: [
                  "P 100, N 320, B 330, R 500, Q 900",
                  "Strongest correlation with outcome",
                  "Trivially fast to compute",
                  "Worked: R+N+5P = 1320 vs R+B+5P = 1330",
                  "Blind to tactics and development",
                ],
              },
              right: {
                heading: "Positional terms",
                items: [
                  "Mobility per piece (about 5 per move)",
                  "Pawn structure: doubled -15, passed +20",
                  "King safety: shelter and open files",
                  "Piece-square tables: Ne5 > Ne1",
                  "Tempo and initiative bonuses",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Memorise the material table cold - it answers at least two standard short questions - and practise one numeric evaluation comparing two positions. The interpretation line 'a 10-centipawn difference is within noise, so the position is roughly equal' converts your arithmetic into analysis marks.",
            },
            keyTerms: [
              { term: "Evaluation function", definition: "A fast heuristic mapping a position to a score estimating the outcome under perfect play beyond the search horizon." },
              { term: "Centipawn", definition: "One hundredth of a pawn's value - the standard unit for evaluation scores (pawn = 100)." },
              { term: "Piece-square table", definition: "A per-square value bonus table encoding positional knowledge, e.g. centralized knights score higher." },
              { term: "Quiescence search", definition: "Extending the search through captures and checks until the position is stable, then evaluating - counters the horizon effect." },
            ],
            examQuestions: [
              {
                q: "Explain heuristic evaluation functions in game-tree search. Give the standard chess material values, evaluate a sample position numerically, list four positional terms, and state the design constraints including the horizon effect and quiescence search.",
                marks: 7,
                outline: [
                  "Role: score leaves beyond the horizon; called at millions of leaves, so speed dominates.",
                  "Material table: P 100, N 320, B 330, R 500, Q 900; bishop pair about +30-50.",
                  "Worked evaluation: White R+N+5P = 1320 versus Black R+B+5P = 1330; 10 centipawns is noise.",
                  "Positional terms: mobility, pawn structure, king safety, center control / piece-square tables.",
                  "Final score as weighted sum, e.g. material plus 5 per extra move plus safety terms.",
                  "Constraints: incremental updates, correlation with winning, tuning via automated self-play.",
                  "Horizon effect: quiescence search extends capture sequences before evaluating.",
                ],
              },
              {
                q: "Give the standard centipawn values of the five chess pieces.",
                marks: 2,
              },
              {
                q: "Score White (Q, R, 6 P) against Black (Q, R, B, 4 P) on material alone.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.4",
            title: "Monte Carlo tree search",
            body: [
              "Monte Carlo tree search (MCTS) replaced minimax for games where no good evaluation function exists - the defining example being Go, where 19x19 positions resisted every handcrafted feature set. MCTS builds its tree asymmetrically by playing out games: each iteration runs four phases. Selection: descend from the root choosing children by a bandit formula. Expansion: add one unexplored child at the reached leaf. Simulation: play the new position to terminal with a fast random or lightweight policy (the playout). Backpropagation: walk back up, incrementing each node's visit count N and total reward Q. After thousands of iterations, the root child with the most visits is the move played.",
              "The selection formula is UCB1, applied as UCB = Q/N + C x sqrt(ln(N_parent) / n), with C typically around 1.4 (sqrt(2)). The first term is exploitation (children that won more of their playouts), the second is exploration (children visited rarely get a bonus). Worked numbers: child A has Q/N = 8/10 = 0.8 with parent visits 20: UCB = 0.8 + 1.4 x sqrt(ln 20 / 10) = 0.8 + 1.4 x sqrt(3.0/10) = 0.8 + 1.4 x 0.548 = 0.8 + 0.767 = 1.567. Child B has Q/N = 18/20 = 0.9 but n = 20: UCB = 0.9 + 1.4 x sqrt(ln 20 / 20) = 0.9 + 1.4 x 0.387 = 1.442. Selection picks A despite its lower win rate - the exploration term pulls toward the less-sampled branch, exactly the bandit trade-off.",
              "Why MCTS beat minimax at Go: it needs no evaluation function - terminal playouts supply the ground truth - and it spends computation where it matters, growing deep lines near promising moves while leaving bad branches shallow. Its costs: playout quality dominates (random playouts are useless in chess, where tactics punish noise, but serviceable in Go), and it is anytime - stop anywhere for a best-so-far move, fitting the Unit I budget ethos. Modern strength came from replacing random playouts with policy/value networks (AlphaGo): the neural nets made playouts and leaf evaluations accurate, and MCTS became the search amplifier for learned judgments, closing the loop with Section 4.3.",
              "For the exam, the deliverables are: the four phases named and one sentence each; the UCB1 formula with both terms interpreted; one worked UCB comparison showing exploration beating exploitation; and the Go-versus-chess contrast (why playouts work in one and not the other). If the paper asks 'compare MCTS with minimax', add: no evaluation function versus mandatory one; asymmetric versus exhaustive trees; anytime versus fixed-depth; and statistics versus proofs - MCTS converges to optimal play only asymptotically.",
            ],
            bullets: [
              "Four phases per iteration: selection (UCB1), expansion (add one child), simulation (playout to terminal), backpropagation (update N and Q).",
              "UCB1: UCB = Q/N + C x sqrt(ln N_parent / n); C typically 1.4 = sqrt(2).",
              "Worked comparison: A = 0.8 win rate, n = 10 -> UCB 1.567; B = 0.9, n = 20 -> UCB 1.442; A is selected despite a lower win rate.",
              "Exploitation term (Q/N) vs exploration term (sqrt ln N_parent / n) - the multi-armed bandit trade-off.",
              "Go advantage: no evaluation function needed; terminal playouts are the ground truth.",
              "Anytime algorithm: stop mid-search for the best-so-far move - fits frame budgets.",
              "Modern form: policy/value networks replace random playouts (AlphaGo); playout quality dominates chess suitability.",
            ],
            codeExample: {
              language: "python",
              caption: "The MCTS selection step with UCB1, using the worked numbers.",
              code: `import math

def ucb1(q, n, n_parent, c=1.4):
    if n == 0:
        return math.inf          # unvisited child: always explore first
    return q / n + c * math.sqrt(math.log(n_parent) / n)

# parent has 20 visits
children = {
    "A": {"q": 8,  "n": 10},     # win rate 0.8, rarely tried
    "B": {"q": 18, "n": 20},     # win rate 0.9, well sampled
}
for name, s in children.items():
    print(name, round(ucb1(s["q"], s["n"], 20), 3))
# A -> 1.567   B -> 1.442   => select A (exploration wins)

def select(root_children):
    return max(root_children,
               key=lambda nm: ucb1(children[nm]["q"], children[nm]["n"], 20))
print("select:", select(["A", "B"]))            # -> A`,
            },
            diagram: {
              kind: "cycle",
              title: "One MCTS iteration",
              caption:
                "Repeat thousands of times; the most-visited root child becomes the move.",
              steps: [
                { label: "Selection", note: "descend by UCB1 = Q/N + C sqrt(ln Np / n)" },
                { label: "Expansion", note: "add one unexplored child node" },
                { label: "Simulation", note: "random/light playout to a terminal state" },
                { label: "Backpropagation", note: "update Q and N up the path" },
                { label: "Repeat", note: "thousands of iterations; pick max-N child" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "The UCB1 computation is this unit's second guaranteed-numerical question (after Q-learning). Memorise UCB = Q/N + 1.4 x sqrt(ln Np / n), practise the 0.8-at-10-visits versus 0.9-at-20-visits example, and state in one line which term caused the surprise pick - that interpretation sentence is the analysis mark.",
            },
            keyTerms: [
              { term: "MCTS", definition: "Monte Carlo tree search: grows a game tree using statistics from repeated random playouts instead of an evaluation function." },
              { term: "UCB1", definition: "Upper confidence bound selection rule: Q/N + C x sqrt(ln N_parent / n), balancing exploitation and exploration." },
              { term: "Playout", definition: "A fast simulation from a leaf to a terminal state, usually with random or lightweight-policy moves." },
              { term: "Backpropagation", definition: "Updating visit counts and rewards along the path from the expanded node back to the root." },
              { term: "Anytime", definition: "Able to return the best-so-far answer when stopped early; MCTS improves monotonically with more iterations." },
            ],
            examQuestions: [
              {
                q: "Explain MCTS: the four phases, the UCB1 formula with both terms interpreted, a worked selection comparing two children, and why MCTS succeeded at Go but needs networks for chess.",
                marks: 7,
                outline: [
                  "Phases: selection by UCB1, expansion of one child, simulation playout, backpropagation of N and Q.",
                  "Formula: UCB = Q/N + C x sqrt(ln N_parent / n); C about 1.4 = sqrt(2).",
                  "Worked: A (Q/N = 0.8, n = 10) gives 1.567; B (0.9, n = 20) gives 1.442 - A selected.",
                  "Interpretation: the exploration term outweighed B's higher win rate - bandit trade-off.",
                  "Asymmetric growth: promising branches deepen, bad ones stay shallow; anytime behavior.",
                  "Go: random playouts suffice, no evaluation function needed - the historic breakthrough (2006-2012 era).",
                  "Chess: tactical noise punishes random playouts; policy/value networks (AlphaGo) fixed playout quality.",
                ],
              },
              {
                q: "Which term of UCB1 drives exploration and how?",
                marks: 2,
              },
              {
                q: "Compute UCB1 for a child with Q = 6, N = 8, parent visits 20, C = 1.4.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.5",
            title: "Tactical and strategic AI in RTS games",
            body: [
              "Real-time strategy AI runs on two simultaneous timescales. The strategic layer operates in seconds and minutes: opening build orders (worker count, tech timing), economy management (worker-to-resource allocation), expansion timing, army composition against scouted threats, and attack scheduling. The tactical layer operates in milliseconds and seconds: individual unit micro - focus fire on the weakest enemy, kiting (attack-move retreats while reloading), formation keeping, ability usage. The layers communicate through the coordination tools of Section 3.6 - blackboards and group assignments - but they are separate systems with separate budgets, and exam answers that blend them lose the structure mark.",
              "The strategic brain is built from scripted-then-adaptive stages. Early game: a data-defined build order executes step by step (6 workers, supply depot at 8, barracks at 12 - StarCraft-style timings). Midgame: a state machine over strategic states (BOOM economy, TECH, AGGRESSION, DEFEND) chooses between plans based on scouted information - player expanded early means punish; player teching means pressure. Threat assessment converts unit counts into a force ratio: if enemy_army_value / my_army_value > 1.3 while defending, turtle and expand; below 0.8 while attacking, push. These thresholds are exactly the utility scoring of Section 3.4 wearing a strategy hat - RTS strategy AI is decision-making machinery applied to slower clocks.",
              "The tactical layer is where individual units shine. Formation control assigns slot offsets around a leader (wedge, box, column) using group steering; focus fire allocates targets to maximise damage-per-second on the lowest-effective-HP enemy; kiting is a two-state cycle (attack when off cooldown, retreat while reloading) that lets ranged units defeat stronger melee - every RTS player has lost to it. Squad-level behaviors reuse the Unit III stack: behavior trees for engagement decisions, group pathfinding over the navmesh, and blackboard claims ('I target that tank') preventing wasted overkill. Pathfinding itself is Section 2.7's hierarchical search plus local avoidance, because 200 units must not jam a bridge.",
              "The classic exam contrast: RTS AI plays openly with visible constraints (fog of war respected, build orders observable) whereas cheat-prone RTS AI of the 1990s read the map wholesale - a Unit I fairness lesson replayed. Modern RTS AI (StarCraft II's built-in AI, AlphaStar research) shows the ceiling: AlphaStar reached grandmaster play with league-trained neural agents, but shipping games keep interpretable strategic state machines precisely because designers must debug and tune them at 2 a.m. before launch. Name that maintainability trade - interpretable scripted strategy versus superhuman opaque agents - and the section is complete.",
            ],
            bullets: [
              "Two timescales: strategic (seconds-minutes: build orders, economy, army composition) and tactical (milliseconds-seconds: micro).",
              "Strategic stages: scripted opening build order, then adaptive state machine over BOOM / TECH / AGGRESSION / DEFEND.",
              "Force ratios drive strategy: enemy/my army value > 1.3 defending -> turtle; < 0.8 attacking -> push.",
              "Tactical micro: focus fire on lowest effective HP, kiting cycle (attack off cooldown, retreat while reloading), formations.",
              "Squad coordination reuses Unit III: behavior trees, group navmesh paths, blackboard target claims to avoid overkill.",
              "Pathfinding at scale: hierarchical search plus local avoidance so 200 units do not jam chokepoints.",
              "Fairness and maintainability: modern RTS AI respects fog of war; studios keep interpretable state machines over opaque superhuman agents.",
            ],
            table: {
              caption: "Strategic versus tactical AI responsibilities in an RTS.",
              headers: ["Axis", "Strategic layer", "Tactical layer"],
              rows: [
                ["Timescale", "Seconds to minutes", "Milliseconds to seconds"],
                ["Decisions", "Build order, expansions, attack timing", "Focus fire, kiting, formations, abilities"],
                ["Techniques", "Build-order scripts, strategic FSM, force ratios", "Behavior trees, group steering, slot formations"],
                ["Information", "Scouting reports on the blackboard", "Direct perception per unit"],
                ["Failure mode", "Wrong strategy loses slowly", "Bad micro loses winnable fights"],
                ["Example", "Supply depot at 8 workers", "Kite cycle: shoot 0.3 s, retreat 0.6 s"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "RTS AI architecture, top to bottom",
              caption:
                "Strategy sets goals, operations allocate forces, tactics executes unit-by-unit - blackboards connect the layers.",
              layers: [
                { label: "Strategic layer", note: "build orders, economy, attack timing via force ratios" },
                { label: "Operational layer", note: "squad composition, group goals, blackboard assignments" },
                { label: "Tactical layer", note: "behavior trees per squad: engage, kite, retreat" },
                { label: "Unit layer", note: "steering, hierarchical paths, local avoidance, micro" },
                { label: "Perception", note: "fog-of-war-filtered scouting feeding upward" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Any 'explain RTS AI' answer must separate strategic from tactical in two labelled halves with one technique and one example each (build order versus kiting), then connect them through a blackboard. Mentioning that AlphaStar exists but ships as research - while games keep debuggable state machines - lands the evaluation mark.",
            },
            keyTerms: [
              { term: "Build order", definition: "A scripted opening production sequence (worker counts, supply, tech timings) executed before adaptive play." },
              { term: "Force ratio", definition: "Enemy army value divided by own; threshold comparisons choose turtle, defend or push strategies." },
              { term: "Kiting", definition: "A micro cycle of attacking when off cooldown and retreating while reloading, letting ranged units defeat stronger melee." },
              { term: "Focus fire", definition: "Tactical target allocation concentrating squad damage on the lowest effective-HP enemy." },
            ],
            examQuestions: [
              {
                q: "Describe the architecture of RTS game AI, separating the strategic and tactical layers. Give techniques and examples for each, explain how the layers coordinate, and evaluate the trade-off between interpretable AI and superhuman learned agents.",
                marks: 7,
                outline: [
                  "Strategic layer: build orders (6 workers, depot at 8), economy allocation, expansion timing.",
                  "Strategic adaptation: FSM over BOOM/TECH/AGGRESSION/DEFEND driven by scouting and force ratios.",
                  "Force-ratio arithmetic: > 1.3 while defending -> turtle; < 0.8 while attacking -> push.",
                  "Tactical layer: focus fire on lowest effective HP, kiting cycle, formations, ability usage.",
                  "Coordination: blackboard target claims and squad behavior trees prevent overkill; hierarchical paths plus local avoidance scale to 200 units.",
                  "Fairness: fog-of-war-respecting perception versus 1990s map-reading cheats.",
                  "Evaluation: AlphaStar shows the learned ceiling; shipping favors debuggable, tunable state machines.",
                ],
              },
              {
                q: "What is kiting and why does it let ranged units beat stronger melee units?",
                marks: 2,
              },
              {
                q: "Give one strategic decision and one tactical decision for a StarCraft-style AI.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.6",
            title: "Testing, shipped case studies and the AI production pipeline",
            body: [
              "Game AI fails in ways that unit tests catch poorly: an NPC stuck behind a chair for two minutes is a bug no assertion found. The shipped toolkit has four instruments. Logging: per-agent decision traces with timestamps ('t = 3.2 s: ALERT -> CHASE, reason: raycast hit') filtered in-game. Visualizers: debug draws of perception cones, paths, navmesh polygons, behavior-tree ticks and utility scores overlaid on the live game - Unreal's AI debug tools and the classic CryEngine/Autodesk 'AI debug draw' tradition. Fixtures: recording a game moment (seed, positions, inputs) and replaying it deterministically against AI builds, so regressions in the guard FSM or pathfinder are caught by automated tests. And the playtest loop: scripted scenarios ('player hides for 30 s; guard must return to patrol within 10 s of losing sight') verified by QA.",
              "The case studies carry the unit's application marks. Halo 2 (2004, Bungie, Damian Isla): behavior trees powering squad AI - Damian Isla's 'the perception-action loop' and three-level squad/individual/movement architecture made enemies flank and coordinate; the BT design entered industry vocabulary. F.E.A.R. (2005, Monolith, Jeff Orkin): GOAP planners per soldier plus a squad blackboard produced the era's famous emergent moments - soldiers flanking, calling reinforcements, using doors. Civilization IV (2005): leader personalities and strategy as editable XML - the data-driven AI exhibit, community-modded for a decade. Rocket League (2015, Psyonix): bots tuned through utility-style scoring over ball prediction and boost management, difficulty as bounded skill parameters - believable not perfect. Each one maps to a unit: Halo to 3.3, F.E.A.R. to 3.5, Civ to 3.6, Rocket League to 3.4 plus 1.6.",
              "The production pipeline is the career map. Pre-production: an AI or gameplay programmer prototypes agent architecture in engine (Unreal BT editor, custom systems); a technical designer defines the parameter surfaces. Production: the AI team (typically 2-8 programmers on a mid-size project) implements perception, movement, decision, and tooling layers, while designers author behavior data and tune curves; QA builds fixtures and stress scenarios. Polish: tuning passes against playtest data, difficulty curves finalised, debug tooling handed to QA. Live: telemetry and exploit reports feed patches - usually data changes, rarely code. Roles on this ladder: AI programmer (movement, decision systems), technical designer (behavior authoring tools), and increasingly ML engineer for analytics and content pipelines - with GDC's AI Summit as the community's publication venue.",
              "For a 7-mark answer, structure as three parts: tools (logging, visualizers, fixtures, playtest scripts - one sentence each), case studies (four games, one technique and one sentence of consequence each), and pipeline (pre-production to live with roles). The connective insight to state explicitly: everything in Units I through IV exists inside this production context - budgets, tunability, debuggability and data-driven authoring were not academic preferences but pipeline necessities. That closing sentence converts a list answer into an understanding answer, which is what separates a 5 from a 7 in this subject's final question.",
            ],
            bullets: [
              "Logging: timestamped per-agent decision traces ('t = 3.2 s: ALERT -> CHASE, raycast hit') filterable in-game.",
              "Visualizers: live overlays of perception cones, paths, navmesh, BT ticks and utility scores (Unreal AI debug tools).",
              "Fixtures: recorded deterministic scenarios replayed against builds - automated regression tests for AI.",
              "Halo 2 (2004): behavior trees for squad AI (Damian Isla) - flanking and coordination entered industry vocabulary.",
              "F.E.A.R. (2005): GOAP plus squad blackboard - emergent flanking and door usage (Jeff Orkin).",
              "Civilization IV (2005): XML data-driven leader AI, community-modded; Rocket League (2015): utility-tuned bots with bounded skill parameters.",
              "Pipeline: pre-production prototypes -> 2-8 AI programmers plus designer-authored data -> QA fixtures -> live telemetry patches; roles: AI programmer, technical designer, ML engineer.",
            ],
            table: {
              caption: "Four shipped games, one sentence each - the case-study table to memorise.",
              headers: ["Game", "Year", "AI technique", "Why it mattered"],
              rows: [
                ["Halo 2", "2004", "Behavior trees for squad AI", "Popularised BTs; believable flanking squads"],
                ["F.E.A.R.", "2005", "GOAP + squad blackboard", "Emergent soldier coordination became the benchmark"],
                ["Civilization IV", "2005", "XML data-driven leader AI", "Community modded AI for a decade"],
                ["Rocket League", "2015", "Utility-style bot scoring", "Difficulty via bounded skill parameters, believable"],
                ["Alien: Isolation", "2014", "Director + sensory AI", "Tension pacing from player-state modeling"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "The AI production pipeline",
              caption:
                "AI ships through the same gates as everything else - tools and data carry the load.",
              stages: [
                { label: "Pre-production", note: "prototype agent architecture; define parameter surfaces" },
                { label: "Production", note: "2-8 AI programmers; designers author behavior data" },
                { label: "Tooling", note: "visualizers, logging, BT editors, fixture recorder" },
                { label: "QA and tuning", note: "fixtures, scripted scenarios, playtest curves" },
                { label: "Ship and live", note: "telemetry + exploit reports -> mostly data patches" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Case-study questions are marking-dense and memory-cheap: four rows of the table above, each with game, year, technique, consequence. If the question adds 'how would you debug the AI in one of these', answer with the fixture loop - record the moment, replay deterministically, diff the decision log against the previous build.",
            },
            keyTerms: [
              { term: "AI fixture", definition: "A recorded deterministic game scenario replayed against builds to regression-test AI behavior." },
              { term: "AI visualizer", definition: "Debug overlay drawing perception cones, paths, navmesh and decision state live over the game." },
              { term: "Behavior tree adoption", definition: "Halo 2's squad AI popularised behavior trees as the industry-standard decision structure." },
              { term: "AI programmer", definition: "The production role implementing perception, movement and decision systems plus their tooling." },
              { term: "Technical designer", definition: "The role authoring and maintaining AI behavior data and the tools designers use to edit it." },
            ],
            examQuestions: [
              {
                q: "Describe how game AI is tested and debugged (logging, visualizers, fixtures, playtest scripts). Then give four shipped case studies with technique and significance, and outline the AI production pipeline with roles.",
                marks: 7,
                outline: [
                  "Logging: timestamped decision traces per agent, filterable in-game and diffable between builds.",
                  "Visualizers: live perception cones, paths, navmesh, BT ticks, utility bars (Unreal debug tools).",
                  "Fixtures: recorded deterministic scenarios replayed for automated regression tests.",
                  "Case studies: Halo 2 BTs for squads; F.E.A.R. GOAP + blackboard; Civ IV XML leaders; Rocket League utility bots.",
                  "One sentence of significance each: BTs became industry standard; F.E.A.R. defined emergent AI; Civ IV proved data-driven modding; Rocket League proved bounded-skill believability.",
                  "Pipeline: pre-production prototype -> production (2-8 programmers + designer data) -> tooling -> QA fixtures -> live data patches.",
                  "Closing insight: budgets, tunability and debuggability from Units I-IV are pipeline necessities, not preferences.",
                ],
              },
              {
                q: "What is an AI fixture and what regression does it catch?",
                marks: 2,
              },
              {
                q: "Which shipped game popularised behavior trees and in what year?",
                marks: 3,
              },
            ],
          },
        ],
      },
    },
  ],
  studyPlan: [
    {
      id: "weights",
      heading: "Exam weight map",
      body: [
        "AL-702(A) papers typically draw the biggest blocks from movement/pathfinding, decision making and adversarial search, with learning and PCG supplying both a long question and most of the short numericals. Allocate revision time in roughly the same ratio, and never skip the worked traces - A*, Q-learning, minimax/alpha-beta and UCB1 are the four computations RGPV asks numerically.",
      ],
      weightedTopics: [
        { topic: "A* algorithm: f = g + h, admissibility, traced grid expansion", weight: "10-14 marks", note: "The trace on a small grid is near-guaranteed; practise the 3x3 blocked-corner example until automatic." },
        { topic: "Minimax and alpha-beta pruning with worked trees", weight: "10-12 marks", note: "One trace with annotated (alpha, beta) values and the exact pruned leaf earns full marks." },
        { topic: "Finite state machines and behavior trees for enemy AI", weight: "8-10 marks", note: "Draw the PATROL/ALERT/CHASE/SEARCH diagram and contrast with selector/sequence BTs." },
        { topic: "Reinforcement learning: Q-learning update with numbers", weight: "6-8 marks", note: "Memorise Q <- Q + alpha(r + gamma maxQ' - Q); the 6.45 worked update is the standard numerical." },
        { topic: "Steering behaviors: seek, arrive, pursue, wander, avoidance, flocking", weight: "6-8 marks", note: "Always open with the force equation; give one worked speed or turn-angle number." },
        { topic: "PCG: taxonomy, Perlin/fBm terrain, dungeon and quest generation", weight: "6-8 marks", note: "Draw the 2x2 with one game per cell; octave table with persistence 0.5 and lacunarity 2." },
        { topic: "Pac-Man ghost case study and early game AI", weight: "4-6 marks", note: "Four targeting rules plus scatter/chase 7 s/20 s timings and the frightened mode." },
        { topic: "MCTS: four phases and UCB1 computation", weight: "4-6 marks", note: "The 0.8-vs-0.9 selection example decides the analysis mark." },
        { topic: "Utility AI, GOAP and scripting vs data-driven authoring", weight: "4-6 marks", note: "Substitute numbers into a scoring formula; emit the archer plan draw -> load -> move -> shoot." },
        { topic: "Shipped case studies and AI testing tools", weight: "3-5 marks", note: "Four rows: Halo 2 BTs, F.E.A.R. GOAP, Civ IV XML, Rocket League utility bots; plus fixtures and visualizers." },
      ],
    },
    {
      id: "six-weeks",
      heading: "Six-week study plan",
      body: [
        "Assuming a five-day week with two hours a day, this schedule covers every unit twice - once for understanding with the worked traces, once for timed revision - and reserves the final week for full papers under exam conditions.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - foundations and Pac-Man", tasks: ["Game AI vs academic AI (write the four-axis comparison twice)", "Perceive-think-act trace and the 16.6 ms budget arithmetic", "Pac-Man ghost rules and timings; difficulty balancing and cheat-free contract"] },
        { week: "Week 2", focus: "Unit II - movement and pathfinding", tasks: ["Steering family with force equation; one worked arrive and one pursue prediction", "Flocking three rules; waypoint vs navmesh comparison table", "BFS/DFS/Dijkstra contrasts; trace A* on the 3x3 grid three times from memory"] },
        { week: "Week 3", focus: "Unit III - decision making", tasks: ["Guard FSM diagram, transition table and timed trace", "Behavior tree JSON trace including an aborted action", "Utility scoring with substituted numbers; GOAP archer plan; blackboard convention"] },
        { week: "Week 4", focus: "Unit IV - learning and PCG", tasks: ["Q-learning update arithmetic (three variants, different alphas)", "DQN stabilisers and the AlphaGo -> AlphaZero timeline table", "Behavior cloning + DAgger; PCG 2x2 and fBm octave table"] },
        { week: "Week 5", focus: "Unit V - adversarial search and RTS", tasks: ["Minimax trace; alpha-beta trace with pruned leaf annotated", "Chess material values and one positional evaluation", "MCTS four phases and UCB1 worked selection; RTS strategic vs tactical halves"] },
        { week: "Week 6", focus: "Full revision and papers", tasks: ["Redraw every diagram from memory: 8 kinds, one per core concept", "Two full mock papers under 3-hour timing", "Case-study table and study-plan weight map as final-night recall check"] },
      ],
    },
    {
      id: "last-day",
      heading: "Last-day strategy",
      bullets: [
        "Do not learn anything new today; cycle the four worked computations instead - A* trace, Q-update (6.45), alpha-beta prune, UCB1 (1.567 vs 1.442).",
        "Recite the master equations once per hour: steering force = desired - current; f = g + h; Q <- Q + alpha x TD-error.",
        "Redraw the five anchor diagrams from memory: agent loop, guard FSM, behavior tree anatomy, A* grid, PCG 2x2.",
        "Re-read the Pac-Man ghost table (Blinky, Pinky, Inky, Clyde rules plus 7 s/20 s and 6 s->2 s frightened timings).",
        "Rehearse the chess material table: 100 / 320 / 330 / 500 / 900 - it answers at least two short questions.",
        "Skim every 'in one breath' paragraph; they compress each unit into the recall net examiners fish from.",
        "Sleep seven hours; every numerical question in this subject rewards a fresh brain more than a fifth revision pass.",
      ],
    },
    {
      id: "exam-hall",
      heading: "Exam-hall playbook",
      bullets: [
        "Start with the numerical you know cold (usually the Q-update or minimax trace) - banking those marks early calms the rest of the paper.",
        "For any algorithm question, draw the diagram or trace table FIRST, then explain; examiners mark structure top-down.",
        "Quote definitions verbatim in one line before examples - definition lines are marked separately from working.",
        "In traces, annotate every state change with its reason ('beta = 2 <= alpha = 3 -> prune') - annotated traces score over silent ones.",
        "Where a question says 'explain with example', your example must contain numbers (timings, costs, scores), not adjectives.",
        "Budget roughly 1.7 minutes per mark; a 7-mark question earns 12 minutes including its diagram.",
        "Close long answers with one evaluation sentence (trade-off, limitation, or shipped example) - that sentence is the 7th mark.",
      ],
    },
    {
      id: "slips",
      heading: "Common mistakes",
      bullets: [
        "Calling the A* heuristic 'Manhattan distance' on a diagonal-moves grid - use Chebyshev/octile there, and always state admissibility.",
        "Forgetting the Q-learning bracket is a difference (TD error): writing Q + alpha x (r + gamma maxQ') without subtracting Q is the classic lost mark.",
        "Confusing alpha and beta: alpha belongs to MAX and only rises, beta belongs to MIN and only falls - mislabelled traces score zero.",
        "Presenting behavior cloning as complete - covariate shift and DAgger are mandatory for the analysis mark.",
        "Blending RTS strategic and tactical layers into one paragraph; examiners look for the two-timescale separation.",
        "Claiming DDA 'adjusts difficulty freely' without guardrails - small, slow, invisible is the marked phrase.",
        "Writing unnormalised utility factors (health 0-100 versus ammo 0-1) so one term dominates silently.",
        "Inventing RGPV year citations for questions - describe technique and example instead; fabricated citations cost credibility marks.",
      ],
    },
  ],
};
