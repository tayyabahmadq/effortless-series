import type { AcademicSubject } from "./types";

export const it701: AcademicSubject = {
  id: "it-701",
  code: "IT-701",
  title: "Soft Computing",
  semester: "VII Semester",
  program: "RGPV · Information Technology",
  tagline:
    "Five units trace one arc: how biological neurons inspire artificial ones, how networks learn with a teacher and without one, how fuzzy sets reason with degrees of truth, and how genetic algorithms breed near-optimal solutions.",
  description:
    "The journey starts with the biological neuron and its McCulloch-Pitts and Hebb ancestors, passes through the supervised family — perceptron, Adaline and Madaline, back propagation and RBFN — then into unsupervised territory with fixed-weight competitive nets, Kohonen maps, counter propagation and ART, closing with a first look at CNN and RNN. Fuzzy sets then replace yes/no logic with degrees of truth, from membership functions through relations, rules and inference systems to engineering applications, and genetic algorithms finish the course with encoding, selection, crossover, the schema theorem, TSP and network-design routing, plus the swarm cousins ACO and PSO. Every section pairs a definition, a worked numerical trace, one diagram, a table or code example, a callout, and exam questions transcribed from the real Nov 2023 - Dec 2025 RGPV papers.",
  accentColor: "#ef4444",
  emoji: "SC",
  unitCount: 5,
  totalSections: 37,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Introduction to Neural Network",
      summary:
        "Unit I builds the ground floor of the subject: what soft computing means, the biological neuron and the flow of information through it, the honest comparison of ANN with the brain, the evolution of neural networks, the basic models and types of learning, linear separability and the XOR problem, the McCulloch-Pitts neuron, and the Hebb rule.",
      chapter: {
        number: "01",
        title: "From Biological Neurons to Artificial Ones",
        intro:
          "Unit I covers the soft computing paradigm, the biological neural network and information flow inside a cell, ANN versus biological NN, the evolution of neural networks, basic models and types of learning, linear separability with the XOR problem, the McCulloch-Pitts neuron model, and Hebb rule learning.",
        inOneBreath:
          "Soft computing tolerates imprecision where hard computing demands exact models; the biological neuron receives on dendrites, sums in the soma, fires down the axon across weighted synapses; ANN copies the weights-not-wiring idea but is slower to train and faster to run; the MP neuron proves logic gates with fixed thresholds, XOR proves a single line is not enough, and Hebb shows that 'neurons that fire together wire together' needs no teacher.",
        sections: [
          {
            number: "1.1",
            title: "The soft computing paradigm",
            body: [
              "Soft computing is the family of techniques that tolerate imprecision, uncertainty and partial truth to produce robust, low-cost solutions — problems that hard computing cannot attack because no precise model exists. Lotfi Zadeh framed the idea: human reasoning is approximate yet effective, so machines should exploit it too. The family has three pillars: neural networks (learning from examples), fuzzy logic (reasoning with degrees of truth), and genetic algorithms (search by evolution). The pillars are complementary — a hybrid system may use a neural network to learn membership functions that a fuzzy inference system then applies, while a genetic algorithm tunes the whole arrangement.",
              "The contrast with hard computing is the organizing idea of the whole subject. Hard computing needs an exactly stated problem, a precise model, and a deterministic algorithm: sorting a list, solving a linear system. Soft computing is for problems where the model is unknown, noisy or combinatorial: recognising a handwritten digit, parking a car, routing a salesman through 20 cities. A thermostat shows both styles at once — a hard rule 'IF temperature > 25 THEN on' handles the exact case, while a fuzzy rule 'IF temperature is warm THEN cooling is moderate' handles the gradual case people actually live in.",
              "A small trace shows why approximation is not a weakness but a strategy. Optimising a delivery route by exhaustive search over 15 cities costs 14! ≈ 8.7 × 10¹⁰ tours — centuries of arithmetic; a genetic algorithm reaches a good tour in a few hundred evaluated candidates by breeding better ones. Similarly, no closed-form model of handwriting exists, yet a network trained on labelled samples classifies new samples it never saw. In both cases soft computing trades a guarantee of optimality for a useful answer in acceptable time.",
              "The exam frames this section two ways: define soft computing and contrast it with hard computing, or classify its techniques and attach application areas. The December 2024 paper asked exactly that — classify the various types of soft computing techniques and mention application areas for neural networks. The safe skeleton is definition, three pillars with one application each, the hybrid-system closing line, and the contrast table.",
            ],
            keyTerms: [
              { term: "Soft computing", definition: "Computation that tolerates imprecision and uncertainty (NN, fuzzy logic, GA) to get robust, tractable solutions." },
              { term: "Hard computing", definition: "Precise, deterministic computation on exactly modelled problems; fails when the model is unknown or noisy." },
              { term: "Hybrid system", definition: "A combination of soft computing pillars — e.g. a neuro-fuzzy system where a network learns the fuzzy membership functions." },
              { term: "Combinatorial search", definition: "Problems whose solution space explodes factorially or exponentially, such as TSP — GA territory." },
            ],
            diagram: {
              kind: "compare",
              title: "Hard computing vs soft computing",
              caption: "The division of labour: exact models go to hard computing, messy reality goes to soft computing.",
              left: {
                heading: "Hard computing",
                items: [
                  "Needs an exact problem statement and model",
                  "Deterministic algorithms — same input, same output",
                  "Binary logic: true or false, black or white",
                  "Example: sorting, linear algebra, compiler parsing",
                ],
              },
              right: {
                heading: "Soft computing",
                items: [
                  "Tolerates imprecision, uncertainty, partial truth",
                  "Learning- or evolution-driven, often stochastic",
                  "Degrees of membership and probabilistic outcomes",
                  "Examples: handwriting recognition, TSP, washing-machine control",
                ],
              },
            },
            table: {
              caption: "The three pillars of soft computing.",
              headers: ["Pillar", "Inspiration", "What it contributes", "Typical application"],
              rows: [
                ["Neural networks", "the biological brain", "learning a mapping from examples", "forecasting, data and image compression"],
                ["Fuzzy logic", "human language and reasoning", "control and inference with degrees of truth", "washing machines, air conditioners, ABS brakes"],
                ["Genetic algorithms", "natural evolution", "global search over huge solution spaces", "TSP, network design, job-shop scheduling"],
              ],
            },
            bullets: [
              "Soft computing exploits tolerance for imprecision, uncertainty, approximation and partial truth.",
              "Hard computing requires a precise model; soft computing works when no model can be written down.",
              "Three pillars: neural networks learn, fuzzy logic reasons, genetic algorithms search.",
              "The pillars combine into hybrid systems — neuro-fuzzy controllers, GA-tuned networks.",
              "Exhaustive search dies combinatorially (14! tours for 15 cities); evolution samples smartly.",
              "Application areas for NN: forecasting, data compression, image compression, pattern recognition.",
            ],
            callout: {
              type: "exam",
              title: "A favourite opener question",
              body: "Dec 2024 asked: classify the various types of soft computing techniques and mention some application areas for NN. Answer with the pillars table, one application each, and the hybrid-system sentence — it converts a vague essay into a 7-mark skeleton.",
            },
            examQuestions: [
              {
                q: "Classify the various types of soft computing techniques and mention some application areas for neural networks. Contrast soft computing with hard computing.",
                marks: 7,
                appearances: ["Dec 2024"],
                outline: [
                  "Definition: exploiting tolerance for imprecision, uncertainty and partial truth",
                  "Hard computing needs exact models and deterministic algorithms; soft computing does not",
                  "Pillar 1 — neural networks: learn mappings from examples (forecasting, compression)",
                  "Pillar 2 — fuzzy logic: reasoning with degrees of truth (washing machines, AC control)",
                  "Pillar 3 — genetic algorithms: evolution-based global search (TSP, scheduling)",
                  "Hybrid systems combine pillars: neuro-fuzzy controllers, GA-tuned networks",
                  "Close with the combinatorial argument: 14! tours vs a few hundred GA evaluations",
                ],
              },
              {
                q: "Why is the ability to tolerate imprecision a strength rather than a weakness of soft computing? Justify with one worked example.",
                marks: 7,
                outline: [
                  "Real problems lack precise models: handwriting, speech, temperature comfort",
                  "Exact search dies combinatorially — 15 cities means 14! tours",
                  "Worked case: GA reaches a good tour in a few hundred candidate evaluations",
                  "Fuzzy thermostat example: 'warm -> moderate cooling' beats one crisp threshold",
                  "Trade-off: guarantee of optimality exchanged for a useful answer in acceptable time",
                ],
              },
            ],
          },
          {
            number: "1.2",
            title: "The biological neural network and the flow of information",
            body: [
              "A neural network is a computing system whose units and weighted connections are inspired by the brain's neurons. The biological prototype is a single nerve cell: dendrites receive signals from other neurons, the soma (cell body) accumulates them, the axon carries the output spike, and synapses — the junctions where the axon meets another neuron's dendrites — transmit it using neurotransmitters. A human brain holds roughly 10¹¹ neurons, each connected to thousands of others through about 10¹⁵ synapses, so the wiring, not any single cell, carries the intelligence.",
              "The flow of information through one cell is a fixed sequence and a guaranteed exam sketch. Inputs arrive at the dendrites as small electrical potentials (post-synaptic potentials, excitatory or inhibitory); the soma performs a spatial and temporal summation of all of them at the axon hillock; when the accumulated potential crosses a threshold (about −55 mV, from a resting −65 mV), the neuron fires an action potential that travels undiminished down the axon; at the axon terminal the spike triggers release of neurotransmitters into the synaptic cleft, which excite or inhibit the next cell's dendrites. Learning is synaptic plasticity: repeated co-activation changes the strength of a synapse, which is precisely what an artificial weight stores.",
              "A numerical analogy makes the summation concrete. Suppose a neuron receives four synaptic inputs of strength +0.8, +0.5, −0.4 and −0.2; the soma sums them to +0.7, which is above the firing threshold, so the cell fires — exactly the weighted-sum-plus-threshold arithmetic the McCulloch-Pitts model of section 1.7 formalises. Excitatory inputs push the sum toward firing, inhibitory inputs drag it away, and the firing is all-or-none: the neuron either spikes fully or stays silent, never spikes half-way.",
              "Properties the brain exhibits — massive parallelism, fault tolerance (neurons die daily without system collapse), graceful degradation, and learning by adjusting synaptic weights rather than rewiring — are the design goals every artificial network imitates. When the exam asks you to 'discuss the flow of information in a neural cell' (Nov 2023) or to sketch the biological network, draw the five-part sketch, label the threshold, and end with the plasticity sentence that connects biology to weights.",
            ],
            keyTerms: [
              { term: "Dendrite", definition: "The receiving antenna of a neuron — collects post-synaptic potentials from other cells." },
              { term: "Soma", definition: "The cell body; spatially and temporally sums all inputs and decides whether to fire." },
              { term: "Axon", definition: "The output cable carrying the all-or-none action potential toward the terminals." },
              { term: "Synapse", definition: "The junction transmitting a spike to the next neuron chemically; its strength is the biological weight." },
              { term: "Synaptic plasticity", definition: "Activity-dependent change in synapse strength — the biological mechanism of learning." },
            ],
            diagram: {
              kind: "flow",
              title: "Flow of information through a neural cell",
              caption: "Receive, sum, decide, transmit — the sequence every ANN architecture imitates.",
              steps: [
                { label: "Dendrites", note: "receive excitatory + inhibitory potentials" },
                { label: "Soma", note: "spatial and temporal summation at the axon hillock" },
                { label: "Threshold check", note: "fire only if potential crosses about -55 mV" },
                { label: "Axon", note: "all-or-none action potential travels outward" },
                { label: "Synapse", note: "neurotransmitters excite or inhibit the next dendrite" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "psp.py — the soma's weighted sum as arithmetic",
              code: `inputs   = [0.8, 0.5, -0.4, -0.2]   # synaptic potentials (excitatory/inhibitory)
threshold = 0.6                       # firing threshold of the cell

accumulated = sum(inputs)             # soma sums every contribution
fires = accumulated > threshold       # all-or-none decision

print(f"accumulated = {accumulated:.2f}, fires = {fires}")
# accumulated = 0.70, fires = True  -> action potential travels down the axon`,
            },
            bullets: [
              "Dendrites receive, soma sums, axon transmits, synapses pass the signal on.",
              "Summation is weighted: excitatory inputs add, inhibitory inputs subtract.",
              "Firing is threshold-based and all-or-none — no half spikes.",
              "Learning changes synapse strength (plasticity), not the wiring pattern.",
              "The brain is massively parallel, fault tolerant and degrades gracefully — the design goals of ANN.",
              "The ANN weight is the artificial synapse; the weighted sum is the artificial soma.",
            ],
            callout: {
              type: "tip",
              title: "Draw the five-part sketch",
              body: "The biology question is a drawing question. Sketch dendrites -> soma -> axon hillock -> axon -> synapse, mark the threshold, and close with one sentence: 'synaptic strength changes with use — that is what an artificial weight stores.' The closing sentence earns the link between biology and the rest of the unit.",
            },
            examQuestions: [
              {
                q: "Define neural network. Explain with a neat sketch the biological neural network and discuss the flow of information in a neural cell.",
                marks: 7,
                appearances: ["Nov 2023"],
                outline: [
                  "Definition: computing system of units and weighted connections inspired by neurons",
                  "Sketch: dendrites -> soma -> axon -> synapse, with the axon hillock marked",
                  "Dendrites receive excitatory and inhibitory post-synaptic potentials",
                  "Soma performs spatial and temporal summation at the axon hillock",
                  "Threshold about -55 mV triggers the all-or-none action potential",
                  "Axon transmits; synapse releases neurotransmitters to the next dendrite",
                  "Learning = synaptic plasticity = the artificial weight",
                ],
              },
              {
                q: "Explain the structure of a neuron and its various components. Also discuss the Hebb rule in the context of neural networks.",
                marks: 7,
                appearances: ["Dec 2024"],
                outline: [
                  "Components: dendrites, soma, axon hillock, axon, synapse",
                  "Soma sums potentials; firing is threshold-based and all-or-none",
                  "Synapse strength is the biological counterpart of an ANN weight",
                  "Hebb rule: weight change is proportional to the product of input and output",
                  "'Neurons that fire together wire together' — no teacher required",
                  "w_new = w_old + x*y; positive correlation strengthens, negative weakens",
                  "Hebb is the ancestor of correlation-based unsupervised learning",
                ],
              },
            ],
          },
          {
            number: "1.3",
            title: "Comparing artificial and biological neural networks",
            body: [
              "An artificial neural network (ANN) is a directed graph of artificial neurons — each computing a weighted sum of its inputs passed through an activation function — trained by adjusting the weights. The mapping to biology is point-to-point: dendrites are inputs, the soma is the summation unit, the synapse is the weight, the firing threshold is the activation function, and synaptic plasticity is the learning rule. The imitation is at the level of principle, not of anatomy — an ANN is a mathematical abstraction, not a simulation of a cell.",
              "The differences are as important as the similarities, and the exam wants both columns. Speed: a biological neuron fires at most about 1000 times per second, yet the brain outperforms supercomputers on vision — because 10¹¹ units work in parallel; a desktop CPU simulates neurons sequentially, so ANN training is slow while trained inference is fast. Learning: the brain learns continuously, locally and without labels; most ANN training (Unit II) is offline, supervised and global. Size and energy: the brain runs on roughly 20 watts; training a large network consumes kilowatt-hours. Robustness: the brain degrades gracefully as neurons die; a single corrupted weight in a small ANN can destroy it. Knowledge storage is distributed in both, but the brain's is associative — recall one fragment and the whole memory returns.",
              "The similarities that survive the comparison are the load-bearing ones: both are composed of simple units whose collective behaviour is intelligent; both store knowledge in connection strengths rather than in a central address; both are fault tolerant at scale; both learn from experience by modifying weights. This is why the comparison is drawn as a table, not as prose — the examiner scans for the paired rows: processing elements, processing speed, learning ability, size, energy, fault tolerance.",
              "Worked reading of the table: when asked 'compare ANN with biological NN', quote four pairs and quantify where you can — a neuron fires ~1000 spikes/second while a CPU cycle is nanoseconds; the brain has ~10¹¹ neurons vs the thousands of units in a typical ANN; the brain learns online and locally while ANNs train offline in epochs. December 2025 asked precisely this — structure and functioning of the biological network compared with ANN — and the full-mark answer pairs every biological claim with its artificial counterpart before concluding.",
            ],
            keyTerms: [
              { term: "Artificial neuron", definition: "A unit computing a weighted sum of inputs through an activation function — the mathematical abstraction of a cell." },
              { term: "Weight", definition: "The artificial counterpart of synaptic strength; the adjustable parameter learning modifies." },
              { term: "Graceful degradation", definition: "Performance falls gradually as units fail, instead of collapsing — a property of both brains and large networks." },
              { term: "Distributed storage", definition: "Knowledge lives in the pattern of connection strengths, not in any single unit." },
            ],
            diagram: {
              kind: "compare",
              title: "Same principle, different physics",
              caption: "The imitation is at the level of principle — weights, sums, thresholds — not of anatomy.",
              left: {
                heading: "Biological neural network",
                items: [
                  "10^11 neurons, 10^15 synapses, fully parallel",
                  "Chemical-electrical signalling, ~1000 spikes/second ceiling",
                  "Learns continuously, locally, without labels",
                  "Runs on roughly 20 watts",
                ],
              },
              right: {
                heading: "Artificial neural network (ANN)",
                items: [
                  "Hundreds to millions of units, simulated (mostly serial)",
                  "Numerical arithmetic on silicon, nanosecond cycles",
                  "Trains offline, often supervised, in epochs",
                  "Inference fast after training; training is the slow phase",
                ],
              },
            },
            table: {
              caption: "Point-by-point comparison of biological NN and ANN.",
              headers: ["Aspect", "Biological NN", "Artificial NN"],
              rows: [
                ["Basic unit", "neuron (dendrite, soma, axon)", "artificial neuron (inputs, sum, activation)"],
                ["Signal", "electro-chemical spike, all-or-none", "real-valued number through an activation function"],
                ["Learning", "synaptic plasticity, continuous, local", "weight update rules, offline epochs (often supervised)"],
                ["Speed", "slow units (~10^3 spikes/s) but massively parallel", "fast units but usually simulated serially"],
                ["Size and energy", "~10^11 neurons on about 20 watts", "thousands of units, kilowatt-scale training"],
                ["Robustness", "graceful degradation, self-repair", "graceful at scale; small nets are fragile"],
              ],
            },
            bullets: [
              "Mapping: dendrites -> inputs, soma -> summation, synapse -> weight, threshold -> activation.",
              "Biology is slower per unit but wins by 10^11-way parallelism.",
              "The brain learns online and label-free; ANNs mostly train offline and supervised.",
              "Both store knowledge distributed in connection strengths, not in single units.",
              "Both are fault tolerant at scale; small ANNs are fragile, brains degrade gracefully.",
              "Answer the comparison as a paired table — aspect, biological side, artificial side.",
            ],
            callout: {
              type: "exam",
              title: "Pair every row",
              body: "A comparison answer earns marks per paired row, not per paragraph. Write the six-row table (unit, signal, learning, speed, energy, robustness) and quantify two rows — neuron firing rate and brain wattage — to show the comparison is understood, not memorised. Asked verbatim in Dec 2025.",
            },
            examQuestions: [
              {
                q: "Explain the structure and functioning of a biological neural network and compare it with an artificial neural network, giving the mapping between biological components and ANN components.",
                marks: 7,
                appearances: ["Dec 2025"],
                outline: [
                  "Biological: dendrites receive, soma sums, axon transmits, synapse weighs",
                  "ANN mapping: inputs, weighted sum, activation function, weight as synapse",
                  "Signal: all-or-none spike vs real-valued activation",
                  "Learning: continuous local plasticity vs offline epoch-based weight updates",
                  "Speed and scale: ~10^11 parallel slow units vs simulated serial units",
                  "Energy: ~20 watts vs kilowatt-scale training",
                  "Shared principles: distributed storage, parallelism, fault tolerance",
                ],
              },
              {
                q: "Why does the brain outperform computers on vision despite neurons firing only about 1000 times per second?",
                marks: 7,
                outline: [
                  "Single-unit speed is irrelevant; parallelism dominates",
                  "10^11 neurons and 10^15 synapses process a scene simultaneously",
                  "Distributed, fault-tolerant storage survives cell loss",
                  "Feature hierarchy (edges -> shapes -> objects) is learned, not programmed",
                  "ANN imitates the hierarchy (deep nets) but on serial hardware trains slowly",
                ],
              },
            ],
          },
          {
            number: "1.4",
            title: "Evolution of artificial neural networks",
            body: [
              "The evolution of neural networks is a story of five milestones, and the short-note question (Nov 2023) expects them in order with one contribution each. 1943 — McCulloch and Pitts propose the first mathematical neuron: binary inputs, fixed threshold, no learning; it proves networks of such units compute logic functions. 1949 — Hebb publishes the first learning rule: weights increase when pre- and post-synaptic units are simultaneously active ('fire together, wire together'). 1958 — Rosenblatt's perceptron adds learnable weights and a convergence theorem for linearly separable data, with hardware (the Mark I Perceptron) to match.",
              "1960 — Widrow and Hoff build ADALINE (Adaptive Linear Neuron), trained by the least-mean-squares (delta) rule on the linear output rather than a hard threshold; MADALINE stacks ADALINEs into the first practical commercial neural systems (adaptive filters, echo cancellation on phone lines). 1969 — Minsky and Papert's book 'Perceptrons' proves a single layer cannot compute XOR; funding collapses and the field enters its 'AI winter'. 1986 — Rumelhart, Hinton and Williams popularise the back propagation algorithm (derived earlier by Werbos in 1974), which trains multilayer networks by propagating error gradients backward — the XOR objection dissolves, and modern deep learning, from CNNs to transformers, is back propagation scaled up.",
              "Reading the timeline as engineering: each milestone added one capability. MP neuron gave the computing unit; Hebb gave the local learning rule; the perceptron gave supervised learning with a proof; ADALINE gave gradient-style least-squares training that works even when data is not separable; back propagation gave depth. The winter of 1969-1986 is the cautionary middle of the story — a single theoretical limitation (XOR) froze a whole field for seventeen years, which is why the XOR problem of section 1.6 is examined so heavily.",
              "For the exam, write the timeline as a labelled sequence with dates, names, the capability added, and one limitation each stage left unsolved — MP had no learning, Hebb had no teacher, the perceptron could not handle non-separable data, ADALINE was still linear, back propagation needed labelled data and was slow on deep stacks. That last unsolved problem is the bridge to the unsupervised unit and the neural-network applications of Unit II.",
            ],
            keyTerms: [
              { term: "McCulloch-Pitts neuron (1943)", definition: "The first mathematical neuron — binary inputs, fixed threshold, no learning." },
              { term: "Hebb rule (1949)", definition: "Weight increases when pre- and post-synaptic units are co-active; the first learning rule." },
              { term: "Perceptron (1958)", definition: "Rosenblatt's trainable neuron with a convergence guarantee for linearly separable data." },
              { term: "ADALINE (1960)", definition: "Widrow-Hoff adaptive linear neuron trained by least-mean-squares on the linear output." },
              { term: "Back propagation (1986)", definition: "Chain-rule gradient training of multilayer networks — the algorithm that ended the AI winter." },
            ],
            diagram: {
              kind: "pipeline",
              title: "Five milestones of neural network evolution",
              caption: "Each stage adds one capability — compute, learn, train, adapt, go deep.",
              stages: [
                { label: "1943 MP neuron", note: "compute logic with thresholds" },
                { label: "1949 Hebb rule", note: "learning without a teacher" },
                { label: "1958 Perceptron", note: "supervised learning + convergence proof" },
                { label: "1960 ADALINE / 1969 winter", note: "LMS training; XOR freezes the field" },
                { label: "1986 Back propagation", note: "multilayer training; deep learning begins" },
              ],
            },
            table: {
              caption: "Milestone, contribution and limitation.",
              headers: ["Year / model", "Author(s)", "Capability added", "Limitation left unsolved"],
              rows: [
                ["1943 MP neuron", "McCulloch, Pitts", "threshold logic computation", "no learning mechanism"],
                ["1949 Hebb rule", "Donald Hebb", "local correlation learning", "no supervision or error correction"],
                ["1958 Perceptron", "Frank Rosenblatt", "supervised training with convergence proof", "fails on non-separable data (XOR)"],
                ["1960 ADALINE", "Widrow, Hoff", "LMS gradient training, adaptive filters", "still a linear boundary"],
                ["1986 Back propagation", "Rumelhart, Hinton, Williams", "training multilayer (deep) networks", "needs labelled data; vanishing gradients at depth"],
              ],
            },
            bullets: [
              "1943 MP neuron: threshold logic, fixed weights, no learning.",
              "1949 Hebb: weights grow with co-activation — the first learning rule.",
              "1958 perceptron: learnable weights plus a convergence theorem (separable data only).",
              "1960 ADALINE/MADALINE: LMS delta rule; first commercial neural applications.",
              "1969 Minsky-Papert prove the XOR limitation; funding dies — the AI winter.",
              "1986 back propagation: chain-rule training of hidden layers; deep learning becomes possible.",
            ],
            callout: {
              type: "exam",
              title: "Short notes, one milestone each",
              body: "Nov 2023 asked 'short notes on evolution of neural networks'. The safe format is five dated entries, each with names, one capability, one limitation. The 1969 XOR winter and the 1986 recovery are the two sentences that show you understand why the timeline bends.",
            },
            examQuestions: [
              {
                q: "Write short notes on the evolution of neural networks, covering the MP neuron, Hebb rule, perceptron, ADALINE and back propagation in chronological order.",
                marks: 7,
                appearances: ["Nov 2023"],
                outline: [
                  "1943 MP neuron: binary threshold logic, fixed weights, no learning",
                  "1949 Hebb rule: co-activation increases synapse strength",
                  "1958 perceptron: supervised learning, convergence for separable data",
                  "1960 ADALINE: least-mean-squares training on the linear output",
                  "1969 Minsky-Papert XOR proof; the AI winter",
                  "1986 back propagation: gradient training of hidden layers",
                  "Each milestone added one capability; each left one unsolved problem",
                ],
              },
              {
                q: "Which single theoretical result froze neural network research between 1969 and 1986, and which algorithm revived it? Explain both.",
                marks: 7,
                outline: [
                  "Minsky-Papert proved single-layer perceptrons cannot compute XOR",
                  "XOR is not linearly separable — no single line can draw its boundary",
                  "Consequence: funding collapse, the 'AI winter'",
                  "Revival: back propagation (Rumelhart, Hinton, Williams, 1986; Werbos 1974)",
                  "Back propagation trains hidden layers by propagating error gradients backward",
                  "With hidden layers, any decision boundary becomes learnable",
                ],
              },
            ],
          },
          {
            number: "1.5",
            title: "Basic models and types of learning",
            body: [
              "A basic neural network model is defined by three choices: how units are arranged (architecture), what function each unit computes (activation), and how weights change (learning law). The architecture families are: single-layer feed-forward (input to output, no loops), multilayer feed-forward (hidden layers between input and output), recurrent or feedback networks (outputs loop back as inputs — Hopfield nets, RNNs), and competitive or lattice networks (units compete, as in the Kohonen map of Unit III). The activation functions are step (binary 0/1), bipolar sign (±1), sigmoid 1/(1 + e^-net) with values in (0, 1), and tanh with values in (−1, 1); the sigmoid and tanh are differentiable, which is exactly what back propagation needs.",
              "Types of learning are classified by the feedback signal. Supervised learning has a teacher: every input arrives with a target, and the weight update is driven by the error (target − output) — perceptron, ADALINE, back propagation all live here (Unit II). Unsupervised learning has no target: the network discovers structure by competition or correlation — Hebb rule, Kohonen SOM, ART (Unit III). Reinforcement learning sits between: a scalar reward, not a target, grades the action. A second axis divides gradient-based error-correction learning (delta rule, back propagation) from correlation learning (Hebb) from competitive learning (winner-take-all). The exam contrast: supervised reduces error against given answers; unsupervised self-organises toward structure the data already contains.",
              "A worked contrast of activations makes the choice visible. For net input 2.0: a step function outputs 1 (binary), a bipolar sign function outputs +1, a sigmoid outputs 1/(1 + e^-2) = 0.881, a tanh outputs (e^2 − e^-2)/(e^2 + e^-2) = 0.964. For net −2.0 the sigmoid outputs 0.119, the tanh −0.964. The step and sign functions are cheap and used in the MP neuron and perceptron; the sigmoid and tanh are smooth and saturating, so they compress large inputs and — crucially — are differentiable, letting error gradients flow through them during back propagation training.",
              "The December 2024 paper asked the difference between recurrent and non-recurrent networks, and the December 2024 paper also asked supervised versus unsupervised learning — both belong to this section. Draw the architecture families first (feed-forward, recurrent, competitive), then classify learning by feedback (supervised, unsupervised, reinforcement), then attach the representative algorithms of Units II and III to each family. That three-step answer covers every phrasing the examiner uses.",
            ],
            keyTerms: [
              { term: "Feed-forward network", definition: "Signals flow strictly from input to output with no loops; single-layer and multilayer are the two cases." },
              { term: "Recurrent (feedback) network", definition: "Outputs loop back as inputs, giving the network state and memory (Hopfield, RNN)." },
              { term: "Supervised learning", definition: "Every training input carries a target; weights update from the error between target and output." },
              { term: "Unsupervised learning", definition: "No targets; the network self-organises through competition or correlation (Hebb, SOM, ART)." },
              { term: "Activation function", definition: "The nonlinearity applied to net input — step, bipolar sign, sigmoid, tanh." },
            ],
            diagram: {
              kind: "fork",
              title: "Types of learning by feedback signal",
              caption: "The feedback decides the algorithm family — and which unit of this subject develops it.",
              start: "What feedback does the learner get?",
              branches: [
                { label: "Target for every input", outcome: "supervised learning — perceptron, ADALINE, back propagation (Unit II)", good: true },
                { label: "No feedback at all", outcome: "unsupervised learning — Hebb, Kohonen SOM, ART (Unit III)", good: true },
                { label: "Scalar reward, delayed", outcome: "reinforcement learning — outside this syllabus, named for completeness", good: false },
              ],
            },
            table: {
              caption: "Basic network models and their learning type.",
              headers: ["Model", "Architecture", "Learning type", "Representative algorithm"],
              rows: [
                ["Single-layer feed-forward", "input -> output, no hidden layer", "supervised", "perceptron, ADALINE"],
                ["Multilayer feed-forward", "input -> hidden -> output", "supervised", "back propagation, RBFN"],
                ["Recurrent / feedback", "outputs loop back as inputs", "supervised or unsupervised", "Hopfield network, RNN"],
                ["Competitive / lattice", "units compete for each input", "unsupervised", "Kohonen SOM, ART"],
              ],
            },
            bullets: [
              "Architecture choice: single-layer, multilayer feed-forward, recurrent, competitive.",
              "Activation functions: step (0/1), bipolar sign (+1/-1), sigmoid (0,1), tanh (-1,1).",
              "Sigmoid and tanh are differentiable — the property back propagation requires.",
              "Worked activation: net 2.0 -> step 1, sign +1, sigmoid 0.881, tanh 0.964.",
              "Supervised learning uses a teacher and an error signal; unsupervised uses none.",
              "Reinforcement learning grades actions with a scalar reward — between the two families.",
              "Recurrent networks have state and memory; non-recurrent (feed-forward) are stateless.",
            ],
            callout: {
              type: "exam",
              title: "Two contrasts in one question",
              body: "Dec 2024 asked supervised vs unsupervised learning AND recurrent vs non-recurrent networks as separate halves of different questions. Prepare both as tables: feedback signal, representative algorithms, applications for the first; presence of loops, state, memory, examples (Hopfield/RNN vs perceptron/MLP) for the second.",
            },
            examQuestions: [
              {
                q: "Explain the basic models of neural networks (single-layer, multilayer, recurrent, competitive) and classify the types of learning — supervised, unsupervised and reinforcement — with representative algorithms for each.",
                marks: 7,
                outline: [
                  "Model 1: single-layer feed-forward — perceptron, ADALINE (supervised)",
                  "Model 2: multilayer feed-forward — hidden layers, back propagation (supervised)",
                  "Model 3: recurrent/feedback — outputs loop back; Hopfield, RNN; state and memory",
                  "Model 4: competitive/lattice — winner-take-all; Kohonen SOM, ART (unsupervised)",
                  "Supervised: target per input, error-driven weight update",
                  "Unsupervised: no targets; self-organisation by competition or correlation",
                  "Reinforcement: scalar reward grades actions, no target vector",
                ],
              },
              {
                q: "State the difference between supervised learning and unsupervised learning with one example network of each.",
                marks: 7,
                appearances: ["Dec 2024"],
                outline: [
                  "Supervised: training pairs (input, target); update driven by error = target - output",
                  "Goal: learn the mapping so new inputs get correct predictions",
                  "Examples: perceptron, ADALINE, back propagation network",
                  "Unsupervised: inputs only; no targets; network discovers structure itself",
                  "Goal: clustering, feature mapping, self-organisation",
                  "Examples: Hebb rule, Kohonen SOM, ART, counter propagation",
                ],
              },
              {
                q: "Distinguish between recurrent and non-recurrent (feed-forward) networks with examples.",
                marks: 7,
                appearances: ["Dec 2024"],
                outline: [
                  "Recurrent: outputs feed back as inputs — the network has state",
                  "State gives memory: current output depends on past inputs (Hopfield, RNN)",
                  "Training must account for loops (feedback stability, unfolding in time)",
                  "Non-recurrent/feed-forward: strictly input -> output, no loops, stateless",
                  "Same input always yields the same output regardless of history",
                  "Examples: perceptron, ADALINE, multilayer back propagation networks",
                ],
              },
            ],
          },
          {
            number: "1.6",
            title: "Linear separability and the XOR problem",
            body: [
              "Linear separability is the property that two classes of input points can be separated by a single straight line (a hyperplane in higher dimensions): a perceptron can learn exactly those problems, and no others. Formally, inputs x = (x1, x2) are linearly separable with targets t when constants w1, w2, b exist with t = 1 whenever w1·x1 + w2·x2 + b > 0 and t = 0 otherwise. AND and OR are separable — a single line can put all 1-outputs on one side — so a single-layer perceptron learns them; the classic proof cases are drawn on the unit square.",
              "XOR is the canonical non-separable problem, and its impossibility is the most examined two-mark proof in the subject. XOR outputs 1 exactly when the inputs differ: (0,1) -> 1 and (1,0) -> 1, while (0,0) -> 0 and (1,1) -> 0. Suppose a line w1·x1 + w2·x2 + b = 0 separates them. The two 0-points (0,0) and (1,1) lie on the main diagonal and the two 1-points (0,1), (1,0) on the anti-diagonal; any line placing (0,0) and (1,1) on the same (negative) side must also place at least one of the anti-diagonal points on that side, because the negative half-plane is convex and contains the whole diagonal segment — whose midpoint (0.5, 0.5) lies between the two 1-points. Hence no single line works: the negative region would have to be two disconnected half-planes, which one hyperplane can never be.",
              "A numeric refusal makes it concrete. Try to satisfy the four inequalities for w1·x1 + w2·x2 + b: (0,0) needs b < 0; (1,1) needs w1 + w2 + b < 0; (1,0) needs w1 + b > 0; (0,1) needs w2 + b > 0. From the last two, w1 > −b and w2 > −b, so w1 + w2 > −2b > 0 (since b < 0), which contradicts w1 + w2 + b < 0. Four inequalities, one contradiction — the perceptron can never converge on XOR, and Minsky and Papert built the AI winter on this fact.",
              "The cure is depth, not a better single line: insert a hidden layer and the geometry changes. A hidden neuron can draw one line, a second hidden neuron another, and the output neuron combines the two half-planes with an AND — each hidden unit separates one of the two minterms of XOR and the output ORs them. Equivalently, map inputs to a higher dimension by the feature x3 = x1 XOR-ish transform and the classes become separable. December 2025 asked exactly this: define linear separability and explain why XOR defeats a single-layer perceptron — give the definition, the four-inequality contradiction, and the hidden-layer cure in that order.",
            ],
            keyTerms: [
              { term: "Linear separability", definition: "Classes separable by a single hyperplane; the exact condition under which a single-layer perceptron converges." },
              { term: "XOR problem", definition: "The smallest non-separable problem — outputs 1 only when inputs differ; provably unsolvable by one line." },
              { term: "Convex half-plane argument", definition: "A half-plane containing two diagonal points contains the segment between them, which crosses the anti-diagonal." },
              { term: "Hidden layer cure", definition: "Two hidden neurons draw two lines; an output neuron AND/ORs their half-planes to realise XOR." },
            ],
            diagram: {
              kind: "matrix",
              title: "The XOR map on the unit square",
              caption: "Two 1-points on the anti-diagonal, two 0-points on the main diagonal — no single line can split them.",
              axes: { x: "x1 (0 -> 1)", y: "x2 (0 -> 1)" },
              quadrants: [
                { label: "(0,1) -> 1", note: "top-left: one input high" },
                { label: "(1,1) -> 0", note: "top-right: both high" },
                { label: "(0,0) -> 0", note: "bottom-left: both low" },
                { label: "(1,0) -> 1", note: "bottom-right: one input high" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "xor_fail.py — watch the single-layer perceptron refuse to converge",
              code: `import itertools, random

X = [(0,0), (0,1), (1,0), (1,1)]
T = [0, 1, 1, 0]                       # XOR targets — not linearly separable

w = [random.uniform(-1, 1), random.uniform(-1, 1)]; b = 0.0
for epoch in range(100):
    errors = 0
    for (x1, x2), t in zip(X, T):
        y = 1 if w[0]*x1 + w[1]*x2 + b > 0 else 0
        e = t - y
        if e:
            w[0] += 0.5*e*x1; w[1] += 0.5*e*x2; b += 0.5*e
            errors += 1
    if errors == 0:
        print("converged at epoch", epoch); break
else:
    print("no convergence after 100 epochs — XOR is not separable")`,
            },
            bullets: [
              "Linearly separable = one hyperplane can put all class-1 points on one side, class-0 on the other.",
              "AND and OR are separable; a perceptron learns both in a few epochs.",
              "XOR: 1-points (0,1) and (1,0), 0-points (0,0) and (1,1) — diagonally opposed.",
              "Proof: the four inequalities w1x1 + w2x2 + b give b < 0, w1 + w2 + b < 0, w1 + b > 0, w2 + b > 0 — a contradiction.",
              "No single line suffices because the separating region would need two disconnected half-planes.",
              "Cure: a hidden layer — two hidden lines combined by an output neuron realise XOR.",
              "This limitation caused the 1969-1986 AI winter; back propagation dissolved it.",
            ],
            callout: {
              type: "exam",
              title: "The four-inequality proof",
              body: "Write the four inequalities from the XOR truth table and derive the contradiction — b < 0 forces w1 + w2 > −2b > 0, contradicting w1 + w2 + b < 0. That derivation, plus one sentence on the hidden-layer cure, is a complete 7-mark answer; asked in Dec 2025.",
            },
            examQuestions: [
              {
                q: "Define linear separability and explain why the XOR problem cannot be solved using a single-layer perceptron. How does adding a hidden layer solve it?",
                marks: 7,
                appearances: ["Dec 2025"],
                outline: [
                  "Definition: classes separable by one hyperplane; perceptron converges only then",
                  "XOR targets: (0,0)->0, (0,1)->1, (1,0)->1, (1,1)->0",
                  "Inequalities: b < 0; w1 + b > 0; w2 + b > 0; w1 + w2 + b < 0",
                  "Derive the contradiction: w1 + w2 > -2b > 0 contradicts w1 + w2 + b < 0",
                  "Geometric view: 1-points and 0-points sit on opposing diagonals",
                  "One line cannot isolate two disconnected half-planes",
                  "Hidden-layer cure: two hidden units draw two lines; the output neuron ANDs them",
                ],
              },
              {
                q: "Show with a truth table which of AND, OR, NAND and XOR are linearly separable, and justify each verdict in one line.",
                marks: 7,
                outline: [
                  "AND: 1-point (1,1) separated by x1 + x2 > 1.5 — separable",
                  "OR: 1-points (0,1),(1,0),(1,1) separated by x1 + x2 > 0.5 — separable",
                  "NAND: complement of AND — separable (same line, sides swapped)",
                  "XOR: 1-points on the anti-diagonal, 0-points on the main diagonal",
                  "No single line separates the diagonals — not separable",
                  "Hence perceptron learns AND/OR/NAND but diverges on XOR",
                ],
              },
            ],
          },
          {
            number: "1.7",
            title: "The McCulloch-Pitts neuron model",
            body: [
              "The McCulloch-Pitts (MP) neuron, proposed in 1943, is the first mathematical model of a nerve cell: binary inputs x1 … xn that are excitatory or inhibitory, a fixed threshold θ, and binary output y = 1 if the summed excitatory input reaches θ with no inhibitory input active, else y = 0. There are no weights and no learning — the only parameter is the threshold, chosen by hand. The model's job is to prove a point, and it did: networks of threshold units compute logical functions, giving the first formal bridge between neurons and computation.",
              "A worked gate construction shows the mechanism. OR with two excitatory inputs needs θ = 1: (0,0) sums to 0 < 1 -> output 0; (1,0), (0,1), (1,1) sum to 1 or 2 >= 1 -> output 1. AND needs θ = 2: only (1,1) reaches 2 -> output 1; all other pairs stay 0. NOT is realised with one inhibitory input and θ = 1: input 1 inhibits the always-on excitatory bias, output 0; input 0 leaves the bias unopposed, output 1. Combining these units, a network of MP neurons realises any Boolean function — each minterm can be built as an AND of literals and all minterms ORed together.",
              "The limits are equally instructive. XOR is impossible for one MP neuron for the same geometric reason as section 1.6 — the required separating region is not one half-plane. Inhibitory inputs must be absolute: a single active inhibitor vetoes the entire sum, matching the biological fact that inhibition can silence a cell. And because weights are absent, the model cannot adjust to data — it constructs functions but never learns them. June 2025 asked directly: what is the MP model, and does it have the ability to learn? The answer is no — learning arrived with Hebb (1949) and the perceptron (1958).",
              "December 2025 asked how the MP model helps in solving simple logic functions: the answer is the threshold-θ construction of AND, OR and NOT with the two-input truth tables written out. Attach the historical sentence — MP is the formal ancestor of every neuron in this subject, the fixed threshold θ being the prototype of the adaptive bias b — and the answer is complete.",
            ],
            keyTerms: [
              { term: "MP neuron", definition: "1943 model: binary excitatory/inhibitory inputs, fixed threshold, binary output, no learning." },
              { term: "Threshold (theta)", definition: "The firing level the summed excitatory input must reach; the prototype of the adaptive bias." },
              { term: "Inhibitory input", definition: "An input whose activation vetoes firing entirely — absolute inhibition, as in real synapses." },
              { term: "Threshold logic", definition: "Computing Boolean functions by threshold units; networks of MP neurons realise any logic circuit." },
            ],
            diagram: {
              kind: "flow",
              title: "One MP neuron computation",
              caption: "Binary inputs, a veto rule, a fixed threshold, a binary verdict — four steps, no learning.",
              steps: [
                { label: "Binary inputs", note: "x1..xn, excitatory or inhibitory" },
                { label: "Inhibition check", note: "any active inhibitor -> output 0 at once" },
                { label: "Sum excitatory inputs", note: "sigma = x1 + x2 + ... + xn" },
                { label: "Compare to theta", note: "y = 1 if sigma >= theta, else 0" },
              ],
            },
            table: {
              caption: "MP neuron realising OR (theta = 1) and AND (theta = 2).",
              headers: ["Inputs (x1, x2)", "Sum", "OR output (theta = 1)", "AND output (theta = 2)"],
              rows: [
                ["(0, 0)", "0", "0", "0"],
                ["(0, 1)", "1", "1", "0"],
                ["(1, 0)", "1", "1", "0"],
                ["(1, 1)", "2", "1", "1"],
              ],
            },
            bullets: [
              "MP neuron: binary inputs, fixed threshold theta, binary output, no weights, no learning.",
              "OR: theta = 1; AND: theta = 2; NOT: one inhibitory input with theta = 1.",
              "Any active inhibitory input vetoes the output — absolute inhibition.",
              "Networks of MP neurons compute any Boolean function via minterms (AND of literals, OR of minterms).",
              "XOR is impossible for a single MP neuron — same non-separability as section 1.6.",
              "MP cannot learn: the threshold is chosen by hand, not fitted to data.",
              "Historical role: first formal bridge between neurons and computation (1943).",
            ],
            callout: {
              type: "exam",
              title: "The learning question",
              body: "Jun 2025 asked: 'Does McCulloch-Pitts have ability of learning?' The answer is a flat no with the reason — weights are absent and theta is fixed by hand, so no data can change the function. Add that learning begins with Hebb (1949) and the perceptron (1958) to convert the no into a mini-history.",
            },
            examQuestions: [
              {
                q: "Describe the McCulloch-Pitts neuron model and explain how it helps in solving simple logic functions, with truth tables for AND and OR.",
                marks: 7,
                appearances: ["Dec 2025"],
                outline: [
                  "Structure: binary excitatory/inhibitory inputs, fixed threshold, binary output",
                  "Rule: any active inhibitor -> 0; else y = 1 iff sum of excitatory inputs >= theta",
                  "OR: theta = 1 — fires when at least one input is 1",
                  "AND: theta = 2 — fires only for (1,1)",
                  "NOT via inhibition: active input vetoes the internal bias",
                  "Networks of MP units build any Boolean function from minterms",
                  "Limitations: no learning, XOR unsolvable by one unit",
                ],
              },
              {
                q: "What is the McCulloch-Pitts perceptron model? Does McCulloch-Pitts have the ability of learning? Justify your answer.",
                marks: 7,
                appearances: ["Jun 2025"],
                outline: [
                  "Definition: 1943 first mathematical neuron — binary inputs, threshold, binary output",
                  "Computation: veto by inhibition, then threshold comparison of the excitatory sum",
                  "Realises OR (theta=1), AND (theta=2), NOT (inhibitory veto)",
                  "Learning ability: none — no weights exist and theta is fixed by hand",
                  "Nothing in the model changes with data; functions are constructed, not fitted",
                  "Learning starts with Hebb's correlation rule and Rosenblatt's perceptron",
                  "Legacy: the threshold is the ancestor of the adaptive bias weight",
                ],
              },
            ],
          },
          {
            number: "1.8",
            title: "Hebb rule learning",
            body: [
              "The Hebb rule (Donald Hebb, 1949) is the first and simplest learning law: adjust the weight in proportion to the product of the input and the output — w_new = w_old + x·y, vectorially Δw = η·x·y. Its slogan is 'neurons that fire together wire together': when an input and the neuron's response are simultaneously active, the connection between them strengthens; when they disagree (opposite signs), the connection weakens. No teacher, no error signal, no target — learning is pure correlation between what the unit receives and what it does, which makes Hebb the prototype of unsupervised learning.",
              "A worked two-pattern trace makes the arithmetic exact. Use bipolar inputs and targets and store two associations: x1 = (1, 1, −1) with t1 = 1, and x2 = (1, −1, 1) with t2 = −1. Starting from w = (0, 0, 0) with η = 1: pattern 1 gives Δw = x1·t1 = (1, 1, −1), so w = (1, 1, −1). Pattern 2 gives Δw = x2·t2 = (−1, 1, −1), so w = (0, 2, −2). Testing: for x1 the net input is 0 + 2 + 2 = 4 > 0 -> output 1 (correct); for x2 the net is 0 − 2 − 2 = −4 < 0 -> output −1 (correct). The rule stored both associations in the sign pattern of the weights — no error term was ever computed.",
              "Properties and limits follow from the same trace. Hebb is local — each weight uses only its own input and the unit's output — and incremental, so patterns can arrive one at a time. It stores associations, not classifications: if two stored patterns are too similar, their weight updates interfere and the net input drifts (crosstalk), which is why Hebb storage works best with orthogonal bipolar patterns. It also has no way to reduce a weight when the output is wrong — error-driven correction is precisely what the delta rule (ADALINE, Unit II) adds. In the exam, connect Hebb to its artificial descendant: the weight is the synapse, co-activation is the plasticity signal, and the rule is the biological intuition made into arithmetic.",
              "Hebb appears in the papers as a short-note favourite — Nov 2023 listed 'Hebb rule' among the short notes and Dec 2025 listed 'Hebb Learning Rule', while Dec 2024 embedded it in a neuron-structure question. Write the formula, the slogan, the worked two-pattern storage trace, and the three limits (no teacher, crosstalk on correlated patterns, association only) — that is the full note.",
            ],
            keyTerms: [
              { term: "Hebb rule", definition: "Weight update proportional to input × output (Δw = η·x·y) — correlation learning without a teacher." },
              { term: "Co-activation", definition: "Pre- and post-synaptic units firing simultaneously; the biological trigger for strengthening a synapse." },
              { term: "Association", definition: "An input-output pair stored in the weights by repeated Hebb application." },
              { term: "Crosstalk", definition: "Interference between stored patterns that are not orthogonal, corrupting the accumulated weights." },
            ],
            diagram: {
              kind: "cycle",
              title: "The Hebb learning loop",
              caption: "Present, respond, correlate, strengthen — a loop with no teacher anywhere in it.",
              steps: [
                { label: "Present input x", note: "a pattern arrives at the inputs" },
                { label: "Compute output y", note: "the unit responds through its activation" },
                { label: "Correlate", note: "delta w = eta * x * y" },
                { label: "Update weights", note: "w <- w + delta w" },
                { label: "Repeat", note: "co-active pairs keep strengthening" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "hebb.py — the two-pattern storage trace, computed",
              code: `import numpy as np

w = np.zeros(3)                                  # start with all-zero weights
X  = np.array([[ 1,  1, -1], [ 1, -1,  1]])      # two bipolar input patterns
T  = np.array([1, -1])                           # their target responses

for x, t in zip(X, T):
    w += x * t                                   # delta w = eta * x * y (eta = 1)
print("weights:", w)                             # [0, 2, -2]

for x, t in zip(X, T):
    y = 1 if np.dot(w, x) > 0 else -1            # recall through the threshold
    print(x, "->", y, "target", t)               # both recalled correctly`,
            },
            bullets: [
              "Hebb update: w_new = w_old + eta * x * y — input-output product, no error term.",
              "Slogan: neurons that fire together wire together; opposite signs weaken the weight.",
              "Worked storage: (1,1,-1)->1 and (1,-1,1)->-1 give weights (0,2,-2); both recall correctly.",
              "Local and incremental — each weight uses only its own input and the unit's output.",
              "Unsupervised: no target, no teacher — learning is correlation alone.",
              "Limits: crosstalk when patterns are not orthogonal; associations only, not classifications.",
              "Descendants: delta rule (ADALINE) adds error correction; competitive nets add competition.",
            ],
            callout: {
              type: "exam",
              title: "Three sessions, one short note",
              body: "Hebb rule was a short-note option in Nov 2023 (Q8) and Dec 2025 (Q8), and half of a structure question in Dec 2024 — a three-session regular. The full note is formula + slogan + the two-pattern worked trace + the no-teacher and crosstalk limitations.",
            },
            examQuestions: [
              {
                q: "Write short notes on the Hebb rule: the update formula, the biological intuition, a worked two-pattern storage trace, and the limitations.",
                marks: 7,
                appearances: ["Nov 2023", "Dec 2025"],
                outline: [
                  "Formula: w_new = w_old + eta * x * y (vector: delta w = eta * x * y)",
                  "Intuition: neurons that fire together wire together; correlation learning",
                  "Unsupervised: no teacher, no error signal",
                  "Worked trace: store (1,1,-1)->1 and (1,-1,1)->-1 giving w = (0,2,-2)",
                  "Recall: net inputs 4 and -4 reproduce both targets correctly",
                  "Local and incremental: weights update one pattern at a time",
                  "Limits: crosstalk on non-orthogonal patterns; stores associations, not classifications",
                ],
              },
              {
                q: "Show that the Hebb rule stores two bipolar associations correctly and explain what happens when the stored patterns are not orthogonal.",
                marks: 7,
                outline: [
                  "Patterns x1 = (1,1,-1) with t1 = 1; x2 = (1,-1,1) with t2 = -1",
                  "Update 1: w = (1,1,-1); update 2: w = (0,2,-2)",
                  "Recall x1: net = 4 > 0 -> 1 (correct); recall x2: net = -4 < 0 -> -1 (correct)",
                  "x1 · x2 = 1 - 1 - 1 = -1... orthogonal pairs give zero net interference",
                  "Non-orthogonal patterns add crosstalk terms to the weights",
                  "Accumulated interference shifts the net input and can flip a recall",
                  "Remedy: orthogonalise patterns, or move to error-correcting (delta) rules",
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
      title: "Supervised Learning",
      summary:
        "Unit II is learning with a teacher: the perceptron training algorithm, single-layer and multilayer feed-forward architectures, ADALINE and its delta rule, MADALINE, the back propagation network with its phases and flowchart, the radial basis function network, and the applications of neural networks in forecasting, data compression and image compression.",
      chapter: {
        number: "02",
        title: "Learning with a Teacher",
        intro:
          "Unit II covers perceptron learning and single-layer networks, multilayer feed-forward networks, ADALINE with the delta rule, MADALINE, back propagation architecture and training phases, RBF networks, and neural-network applications in forecasting and compression.",
        inOneBreath:
          "The perceptron steps a hard threshold by the signed error and converges only on separable data; ADALINE instead trains the linear output by least mean squares, so it works even when no line separates the classes; MADALINE wires many ADALINEs through a fixed output logic; back propagation trains hidden layers by chaining activation derivatives backward, and RBFN replaces the global sigmoid with local Gaussian bumps; forecasting and compression are the exam's named applications.",
        sections: [
          {
            number: "2.1",
            title: "Perceptron learning and the single-layer network",
            body: [
              "A single-layer perceptron is a set of parallel threshold neurons mapping an input vector x = (x1 … xn) to outputs; each output neuron computes net = w·x + b and fires y = 1 if net > 0 else 0. Its architecture is the reference drawing for the whole subject — inputs fan out to weighted summing junctions, one per output, with no hidden layer, so every decision boundary the network can express is a single hyperplane. With binary inputs and a step activation it is Rosenblatt's 1958 machine; with bipolar inputs and sign activation it becomes the bipolar perceptron; either way the geometry does not change — one line per output neuron.",
              "The perceptron training algorithm is an error-correction loop and a guaranteed exam procedure (Nov 2023 asked it for a single output class). Initialise all weights and the bias to 0 (or small randoms). For each training pair (x, t): compute y through the threshold; compute the error e = t − y; update w_i ← w_i + η·e·x_i and b ← b + η·e; continue over epochs until an entire epoch produces no error. The learning rate η (typically 1) only scales the step size; the theorem behind the loop is Rosenblatt's: if the data is linearly separable, the algorithm converges in finitely many updates, to some separating hyperplane — not a unique one.",
              "A worked trace on the AND function (η = 1, binary inputs, start w1 = w2 = b = 0) shows the loop's rhythm. Epoch 1: (1,1) t=1 — y = 0, e = 1, w = (1,1), b = 1; (1,0) t=0 — net = 2, y = 1, e = −1, w = (0,1), b = 0; (0,1) t=0 — net = 1, y = 1, e = −1, w = (0,0), b = −1; (0,0) t=0 — net = −1, y = 0, no change. Epoch 2: (1,1) — net = −1, e = 1, w = (1,1), b = 0; (1,0) — net = 1, e = −1, w = (0,1), b = −1; (0,1) — net = 0, y = 1 (boundary counts as firing), e = −1, w = (0,0), b = −2; (0,0) — net = −2, fine. Epoch 3 converges: the final boundary x1 + x2 = 1.5-ish separates AND, as promised.",
              "The limits frame the exam answer: the perceptron diverges on non-separable data (XOR, section 1.6), never converges to a unique hyperplane, and with the step activation gives no gradient to descend — the three weaknesses that ADALINE (train the linear output) and back propagation (add hidden layers) were invented to fix. Dec 2024 asked the single-layer architecture with suitable activation functions, Dec 2025 asked the learning rule with its convergence characteristics: give the algorithm, the trace, and the two-part convergence statement — finite convergence iff separable, no uniqueness of the solution hyperplane.",
            ],
            keyTerms: [
              { term: "Perceptron", definition: "Single-layer threshold network trained by error-correction; converges on linearly separable data." },
              { term: "Perceptron learning rule", definition: "w_i <- w_i + eta * e * x_i with e = t - y; the bias updates by eta * e." },
              { term: "Convergence theorem", definition: "If the training set is linearly separable, the perceptron converges in finitely many updates." },
              { term: "Epoch", definition: "One complete pass over the training set; training stops when a full epoch has zero errors." },
            ],
            diagram: {
              kind: "pipeline",
              title: "The perceptron training loop",
              caption: "Predict, measure the signed error, nudge the weights — repeat until an epoch is clean.",
              stages: [
                { label: "Initialise", note: "weights and bias to 0" },
                { label: "Compute output", note: "y = step(w.x + b)" },
                { label: "Error", note: "e = t - y" },
                { label: "Update", note: "w_i += eta*e*x_i; b += eta*e" },
                { label: "Next epoch", note: "stop when no input errors" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "perceptron.py — AND gate, the worked trace, runnable",
              code: `import numpy as np

X  = np.array([[0,0], [0,1], [1,0], [1,1]])   # binary inputs
T  = np.array([0, 0, 0, 1])                   # AND targets
w, b, eta = np.zeros(2), 0.0, 1.0

for epoch in range(10):
    errors = 0
    for x, t in zip(X, T):
        y = 1 if np.dot(w, x) + b > 0 else 0
        e = t - y                             # signed error drives the update
        if e:
            w += eta * e * x                  # w_i <- w_i + eta*e*x_i
            b += eta * e
            errors += 1
    if errors == 0:
        print("converged at epoch", epoch, "w =", w, "b =", b)
        break`,
            },
            bullets: [
              "Single-layer perceptron: inputs -> weighted sums -> step outputs; one hyperplane per output.",
              "Rule: w_i <- w_i + eta*e*x_i, b <- b + eta*e, with e = t - y.",
              "Worked AND trace: three epochs converge to a separating boundary.",
              "Converges in finitely many updates iff the data is linearly separable (Rosenblatt).",
              "Solution hyperplane is not unique — any separator the loop lands on is valid.",
              "Diverges on XOR; step activation gives no gradient — ADALINE and backprop fix these.",
            ],
            callout: {
              type: "exam",
              title: "Carry the trace four deep",
              body: "Examiners ask for the training algorithm AND its convergence characteristics (Dec 2025). Write the update rule, run the AND trace for two epochs in a table, then state the theorem in two parts — finite convergence iff separable, and no unique solution. That combination scored in Nov 2023 and Dec 2024 phrasings too.",
            },
            examQuestions: [
              {
                q: "Discuss in brief the perceptron training algorithm for a single output class, and state its convergence characteristics.",
                marks: 7,
                appearances: ["Nov 2023", "Dec 2025"],
                outline: [
                  "Architecture: inputs -> weighted sum + bias -> step activation -> binary output",
                  "Initialise weights and bias to zero; choose learning rate eta",
                  "For each pair: y = step(w.x + b); e = t - y",
                  "Update: w_i <- w_i + eta*e*x_i; b <- b + eta*e",
                  "Repeat over epochs until a full pass has zero errors",
                  "Convergence: finite number of updates iff data is linearly separable",
                  "The separating hyperplane found is not unique",
                ],
              },
              {
                q: "Explain single-layer neural network architecture using the perceptron model with suitable activation functions.",
                marks: 7,
                appearances: ["Dec 2024"],
                outline: [
                  "Architecture: n inputs, one layer of output neurons, no hidden layer",
                  "Each neuron: net = sum(w_i*x_i) + b; output through activation",
                  "Step activation for binary outputs (0/1); sign activation for bipolar (+1/-1)",
                  "Linear activation would reduce it to ADALINE (Unit 2.3)",
                  "Decision boundary: one hyperplane per output neuron",
                  "Learns AND, OR, NOT; cannot learn XOR (non-separable)",
                  "Training by the perceptron error-correction rule",
                ],
              },
              {
                q: "With the help of a diagram, discuss the architecture of a single-layer feed-forward network.",
                marks: 7,
                appearances: ["Jun 2025"],
                outline: [
                  "Diagram: input nodes, connection weights, summing junction, output nodes",
                  "Feed-forward: signals travel strictly input -> output, no feedback loops",
                  "Single layer: exactly one layer of adjustable weights between input and output",
                  "Each output unit computes net = w.x + b and applies its activation",
                  "One hyperplane of separation per output unit",
                  "Representative learning: perceptron rule; supervised targets required",
                  "Limit: linearly separable functions only (XOR fails)",
                ],
              },
            ],
          },
          {
            number: "2.2",
            title: "Multilayer feed-forward networks",
            body: [
              "A multilayer feed-forward network inserts one or more hidden layers between input and output: inputs fan to hidden units, hidden units fan to further hidden units or directly to outputs, and signals travel strictly forward. The hidden layer is the architectural invention that dissolves the XOR limitation — each hidden unit draws its own hyperplane, and the output layer combines those hyperplanes into arbitrarily curved boundaries. With a nonlinear, differentiable activation (sigmoid or tanh) and enough hidden units, the network is a universal approximator: it can represent any continuous function on a compact domain to arbitrary accuracy.",
              "The architecture is specified by four numbers and two matrices: input dimension n, hidden sizes h1, h2 …, output dimension m, and the weight matrices W(1) (n × h1) and W(2) (h × m) with their bias vectors. Forward computation is a chain of matrix multiplies and activations: a(1) = f(W(1)·x + b(1)), then y = f(W(2)·a(1) + b(2)). A 2-2-1 network for XOR: hidden unit 1 learns OR(x1, x2), hidden unit 2 learns AND(x1, x2), and an output unit computes OR − 2·AND — net 1 only on the two minterms, exactly XOR.",
              "Training such a network needs two things the single-layer perceptron never had: a differentiable activation (so gradients exist) and an algorithm that assigns blame to hidden units (back propagation, section 2.5). June 2025 asked for the architecture and training algorithm of the multilayer feed-forward network — the expected answer draws the layer diagram, names the activation choices, and then walks the three phases of back propagation: forward pass computing activations, backward pass propagating error gradients, and the weight update. The multilayer perceptron (MLP) is the same object with its historical name attached.",
              "The trade-offs frame the exam discussion: more hidden units mean more capacity but slower training and overfitting risk on small data; two hidden layers can approximate functions one layer struggles with but are harder to train (vanishing gradients in deep sigmoid stacks); the number of free weights in a 2-2-1 net is already (2·2 + 2) + (2·1 + 1) = 11, and it grows multiplicatively with width — which is why the applications of Unit II (forecasting, compression) spend effort on architecture selection rather than on inventing new rules.",
            ],
            keyTerms: [
              { term: "Hidden layer", definition: "A layer of units between input and output; the source of nonlinear decision boundaries." },
              { term: "Universal approximation", definition: "A multilayer network with enough nonlinear hidden units can approximate any continuous function." },
              { term: "MLP", definition: "Multilayer perceptron — the historical name for a feed-forward net trained by back propagation." },
              { term: "Forward pass", definition: "The chain of matrix-multiplies and activations from input to output that produces a prediction." },
            ],
            diagram: {
              kind: "layers",
              title: "A 2-2-1 multilayer feed-forward network",
              caption: "Signals flow downward through two weight matrices; the hidden layer bends the boundary.",
              layers: [
                { label: "Output layer (1 unit)", note: "y = f(W(2).a + b(2)) — combines hidden hyperplanes" },
                { label: "Hidden layer (2 units)", note: "a = sigmoid(W(1).x + b(1)) — one hyperplane each" },
                { label: "Input layer (2 units)", note: "x1, x2 — raw features" },
              ],
            },
            table: {
              caption: "Single-layer vs multilayer feed-forward networks.",
              headers: ["Aspect", "Single-layer", "Multilayer"],
              rows: [
                ["Layers of weights", "one", "two or more (hidden layers)"],
                ["Decision boundary", "single hyperplane", "arbitrarily curved surfaces"],
                ["XOR", "impossible", "solved by two hidden units"],
                ["Activation needed", "step or sign suffices", "differentiable (sigmoid, tanh) for training"],
                ["Training algorithm", "perceptron error-correction", "back propagation (gradient)"],
                ["Applications", "logic gates, simple filters", "forecasting, compression, pattern recognition"],
              ],
            },
            bullets: [
              "Hidden layers are the cure for linear-separability limits — curved boundaries become learnable.",
              "Forward pass: a(1) = f(W(1)x + b(1)); y = f(W(2)a(1) + b(2)).",
              "Universal approximation: enough nonlinear hidden units fit any continuous function.",
              "XOR construction: hidden OR minus twice hidden AND equals XOR.",
              "Training needs differentiable activations plus back propagation for hidden-layer blame.",
              "Capacity vs data trade-off: too many hidden units overfit; too few underfit.",
              "2-2-1 XOR net already holds 11 free weights — width grows cost multiplicatively.",
            ],
            callout: {
              type: "tip",
              title: "Name the architecture in numbers",
              body: "Examiners accept '2-2-1 network' as evidence of precise thinking. Say the input, hidden and output sizes, count the weights out loud (2*2+2 hidden, 2*1+1 output = 11), and attach each weight matrix to its layer — it makes the back propagation question in 2.5 mechanical rather than mysterious.",
            },
            examQuestions: [
              {
                q: "Discuss the architecture and training algorithm of a multilayer feed-forward network.",
                marks: 7,
                appearances: ["Jun 2025"],
                outline: [
                  "Architecture: input layer, one or more hidden layers, output layer; strictly feed-forward",
                  "Weight matrices W(1), W(2) with biases; activations sigmoid or tanh",
                  "Forward pass: a = f(W(1)x + b(1)); y = f(W(2)a + b(2))",
                  "Hidden layers give curved boundaries; XOR solved by two hidden units",
                  "Training: back propagation — forward pass, backward error gradient, weight update",
                  "Loss = 1/2*sum(t - y)^2; gradient descent on every weight",
                  "Universal approximation with sufficient hidden units",
                ],
              },
              {
                q: "Construct a multilayer network that computes XOR and show its computation for all four inputs.",
                marks: 7,
                outline: [
                  "2-2-1 architecture with hidden units H1 (OR) and H2 (AND)",
                  "H1 weights (1,1) bias -0.5; H2 weights (1,1) bias -1.5 (step units)",
                  "Output: y = 1*H1 - 2*H2 (linear combination)",
                  "(0,0): H1 = 0, H2 = 0 -> y = 0",
                  "(0,1),(1,0): H1 = 1, H2 = 0 -> y = 1",
                  "(1,1): H1 = 1, H2 = 1 -> y = 1 - 2 = -1 -> thresholded to 0",
                  "Truth table matches XOR exactly",
                ],
              },
            ],
          },
          {
            number: "2.3",
            title: "ADALINE and the delta rule",
            body: [
              "ADALINE (Adaptive Linear Neuron, Widrow and Hoff, 1960) looks like a perceptron with one decisive change: training is applied to the linear activation element — the raw net input y_in = w·x + b — not to the quantised output. The network output for classification is still a thresholded sign(y_in), but the learning rule measures the error against the unquantised value: e = t − y_in, and updates w_i ← w_i + η·e·x_i, b ← b + η·e. This is the least-mean-squares (LMS) or delta rule: it performs gradient descent on the mean squared error E = ½·Σ(t − y_in)², whose gradient is −(t − y_in)·x, so each step descends the error surface directly.",
              "Training on the linear output gives ADALINE two powers the perceptron lacks. First, it converges even when the data is not separable — it finds the best least-squares fit rather than hunting for a separating line that does not exist. Second, the delta rule is a true gradient method, so the learning rate has a stability condition: convergence to the minimum of E is guaranteed for 0 < η < 2/λmax, where λmax is the largest eigenvalue of the input autocorrelation matrix R = xᵀx; in practice η is chosen small (0.1 or less). The delta rule is the direct ancestor of the output-layer update inside back propagation.",
              "A worked update makes the arithmetic precise. Take a bipolar training pair x = (1, 1), t = 1, initial w = (0.2, −0.4), b = 0.2, η = 0.1. Forward: y_in = 0.2·1 + (−0.4)·1 + 0.2 = 0.0; e = t − y_in = 1.0. Update: Δw = η·e·x = (0.1, 0.1), Δb = 0.1, so w = (0.3, −0.3), b = 0.3. Second presentation: y_in = 0.3 − 0.3 + 0.3 = 0.3, e = 0.7, Δw = (0.07, 0.07) — the error shrinks each pass and y_in converges toward 1. Testing applies the quantiser: y = +1 when y_in ≥ 0, else −1.",
              "The exam asks ADALINE three ways: architecture with a neat sketch (Nov 2023), training and testing algorithms (Nov 2023, Jun 2025), and the Adaline/Madaline comparison (Jun 2025, Dec 2025 — section 2.4). The full-mark sketch labels the input, the weighted sum, the linear activation element (where learning happens), and the quantiser (where the output is read); the training answer includes the delta rule formula, the η stability bound, and one worked update; the testing answer is a single line — apply the trained weights, threshold the linear output.",
            ],
            keyTerms: [
              { term: "ADALINE", definition: "Adaptive Linear Neuron; trained by least mean squares on the linear output, quantised only at read-out." },
              { term: "Delta (LMS) rule", definition: "w <- w + eta*(t - y_in)*x; gradient descent on the mean squared error." },
              { term: "Linear activation element", definition: "The unquantised net input y_in = w.x + b — where ADALINE's learning happens." },
              { term: "Learning-rate stability bound", definition: "Convergence guaranteed for 0 < eta < 2/lambda_max of the input autocorrelation matrix." },
            ],
            diagram: {
              kind: "flow",
              title: "One ADALINE training step",
              caption: "Forward through the linear element, error against the raw value, update — the quantiser is read-only.",
              steps: [
                { label: "Inputs x", note: "binary or bipolar pattern" },
                { label: "Linear element", note: "y_in = w.x + b" },
                { label: "Error on y_in", note: "e = t - y_in (not on the thresholded output)" },
                { label: "Delta update", note: "w += eta*e*x; b += eta*e" },
                { label: "Quantise", note: "y = +1 if y_in >= 0 else -1" },
              ],
            },
            table: {
              caption: "Perceptron vs ADALINE — the two single-layer ancestors.",
              headers: ["Aspect", "Perceptron", "ADALINE"],
              rows: [
                ["Trained output", "thresholded output y", "linear output y_in (before quantisation)"],
                ["Learning law", "error-correction step", "delta rule — gradient descent on MSE"],
                ["Non-separable data", "diverges, never settles", "converges to best least-squares fit"],
                ["Activation for training", "step / sign (non-differentiable)", "linear (smooth error surface)"],
                ["Guarantee", "finite convergence iff separable", "converges for 0 < eta < 2/lambda_max"],
                ["Descendant", "back propagation (hidden layers)", "output-layer update inside back propagation"],
              ],
            },
            codeExample: {
              language: "python",
              caption: "adaline.py — the worked update, computed to convergence",
              code: `import numpy as np

w, b, eta = np.array([0.2, -0.4]), 0.2, 0.1
x, t = np.array([1.0, 1.0]), 1.0

for step in range(5):
    y_in = np.dot(w, x) + b          # linear activation element
    e = t - y_in                     # error measured on the RAW output
    w += eta * e * x                 # delta rule
    b += eta * e
    print(f"step {step}: y_in={y_in:.3f}  e={e:.3f}  w={w.round(3)}")
# y_in climbs toward 1.0; the quantiser only reads the sign at test time`,
            },
            bullets: [
              "ADALINE trains the linear output y_in = w.x + b; the threshold is read-only at test time.",
              "Delta rule: w_i <- w_i + eta*e*x_i with e = t - y_in — gradient descent on MSE.",
              "Worked update: x=(1,1), t=1, w=(0.2,-0.4), b=0.2, eta=0.1 -> y_in=0.0, e=1.0, w=(0.3,-0.3).",
              "Converges even on non-separable data — best least-squares fit, not a separator hunt.",
              "Stability: eta must lie in (0, 2/lambda_max) of the input autocorrelation matrix.",
              "Descendant of the delta rule: the output-layer update in back propagation.",
              "Commercial heritage: adaptive filters and echo cancellation on telephone lines.",
            ],
            callout: {
              type: "exam",
              title: "The one-line difference that scores",
              body: "The examiner's discriminator is: 'perceptron updates on the quantised output, ADALINE on the linear element'. Say it in the first sentence of every ADALINE answer, then run one delta-rule update with numbers — Nov 2023 asked architecture + training/testing, Jun 2025 asked architecture + training; both reward the same first sentence.",
            },
            examQuestions: [
              {
                q: "Explain with a neat sketch the architecture of the Adaptive Linear Neuron (ADALINE), and write and explain its training and testing algorithms.",
                marks: 7,
                appearances: ["Nov 2023"],
                outline: [
                  "Sketch: inputs -> weighted sum -> linear activation element -> quantiser",
                  "Learning happens on y_in = w.x + b, not on the quantised output",
                  "Training: e = t - y_in; w_i += eta*e*x_i; b += eta*e (delta / LMS rule)",
                  "Gradient descent on E = 1/2*sum(t - y_in)^2",
                  "Stability bound 0 < eta < 2/lambda_max; small eta in practice",
                  "Converges to best least-squares fit even for non-separable data",
                  "Testing: apply weights, compute y_in, output +1 if y_in >= 0 else -1",
                ],
              },
              {
                q: "Explain the architecture and training algorithm of ADALINE. How does it differ from the perceptron's training rule?",
                marks: 7,
                appearances: ["Jun 2025"],
                outline: [
                  "Same single-layer topology as the perceptron; difference is where the error is measured",
                  "Delta rule updates on the linear element: e = t - y_in",
                  "Perceptron updates on the thresholded output: e = t - y",
                  "ADALINE = gradient descent on MSE; perceptron = error-correction steps",
                  "Worked update: w=(0.2,-0.4), b=0.2, x=(1,1), t=1, eta=0.1 -> e=1.0, w=(0.3,-0.3)",
                  "ADALINE converges on non-separable data (least-squares fit)",
                  "Delta rule is the ancestor of back propagation's output-layer update",
                ],
              },
            ],
          },
          {
            number: "2.4",
            title: "MADALINE — many ADALINEs together",
            body: [
              "MADALINE (Many ADALINE) stacks several ADALINE units in a hidden layer and feeds their quantised outputs through a fixed logical output unit (typically an OR, AND, or majority element). It is historically the first multilayer machine: the hidden ADALINEs learn, but the output logic is hard-wired, so there is as yet no gradient flowing between layers — that step waited for back propagation. MADALINE was not a laboratory toy: adaptive filters built on it cancelled echoes on telephone lines and adapted telephone equalisers commercially in the 1960s.",
              "The architecture is drawn as input layer, a hidden layer of ADALINEs (each with its own weight vector and bias), and an output logic element. For the XOR function, a MADALINE with two hidden ADALINEs (each learning one minterm) and an OR output computes the function exactly — the same construction as section 2.2's 2-2-1 net, but with the output realised in fixed logic. The learning problem is the credit-assignment one: the output element is not trainable, so the rule must decide which hidden ADALINE to correct when the overall answer is wrong.",
              "The Madaline Rule I (MRI) answers that. When the network's output is wrong: for each hidden ADALINE whose output differs from what the fixed output element needs, compute the absolute value of its net input; adjust only the unit with the smallest |net| — the least confident one — by the delta rule toward flipping its output, and repeat within the pattern if needed. Intuition: flipping the least-committed unit costs the least disturbance to the rest of the network. Madaline Rule II (MR2, 1962) generalises this: try flipping combinations of hidden units in order of increasing |net|, accept a flip-pair if the overall error decreases.",
              "A worked MRI step: suppose hidden units give z = (+1, −1) with net inputs (+3, −0.2), and the output logic (OR) needs (1, 1) but receives (1, −1) — the answer is wrong. MRI picks the second unit, whose |net| = 0.2 is smallest, and delta-updates its weights until its output flips to +1. Jun 2025 asked to 'explain Adaline and Madaline briefly' and Dec 2025 asked to compare them on architecture and learning: the comparison is three lines — one ADALINE learns its own linear output; MADALINE is many ADALINEs plus fixed output logic; MADALINE learns by the MRI/MR2 least-confident-unit rules because the output layer cannot pass gradients.",
            ],
            keyTerms: [
              { term: "MADALINE", definition: "Many ADALINEs in a hidden layer feeding a fixed logic output element — the first multilayer network." },
              { term: "Madaline Rule I (MRI)", definition: "On error, delta-adjust only the hidden unit with the smallest |net| — the least confident one." },
              { term: "Madaline Rule II (MR2)", definition: "Try flipping combinations of hidden units in |net| order; keep flips that reduce the output error." },
              { term: "Credit assignment", definition: "Deciding which hidden unit caused an output error — the problem back propagation later solved with gradients." },
            ],
            diagram: {
              kind: "compare",
              title: "ADALINE vs MADALINE",
              caption: "One adaptive unit versus many adaptive units behind fixed logic — and the learning rule changes with it.",
              left: {
                heading: "ADALINE",
                items: [
                  "Single adaptive linear unit + quantiser",
                  "Delta rule on its own linear output",
                  "Converges to least-squares fit",
                  "Applications: adaptive filters, echo cancellation",
                ],
              },
              right: {
                heading: "MADALINE",
                items: [
                  "Hidden layer of ADALINEs + fixed output logic (OR/AND/majority)",
                  "Output element is not trainable — no gradient between layers",
                  "Learning by MRI/MR2: adjust the least confident hidden unit(s)",
                  "Applications: telephone echo cancellation, adaptive equalisers",
                ],
              },
            },
            table: {
              caption: "MADALINE training rules at a glance.",
              headers: ["Rule", "When applied", "Action taken"],
              rows: [
                ["MRI, one unit", "output wrong, one hidden unit disagrees", "delta-adjust the unit with smallest |net| toward flipping"],
                ["MRI, iteration", "output still wrong after first flip", "recompute, pick the new smallest-|net| unit, adjust again"],
                ["MR2", "single flips insufficient", "try pairs of flips in increasing |net| order; accept if error falls"],
                ["Output element", "never trained", "fixed OR / AND / majority logic — no weights to update"],
              ],
            },
            bullets: [
              "MADALINE = hidden layer of ADALINEs + fixed logic output; first practical multilayer network.",
              "Output logic is hard-wired, so learning cannot flow through it — credit assignment is manual.",
              "MRI: on error, adjust only the hidden unit with the smallest |net| — least disturbance.",
              "MR2: try combinations of flips in |net| order; accept those that reduce the error.",
              "Two hidden ADALINEs + OR output realise XOR.",
              "Worked step: z = (+1,-1), nets (+3,-0.2), OR wants (1,1) -> adjust the second unit.",
              "Commercial success: telephone echo cancellation and adaptive equalisation in the 1960s.",
            ],
            callout: {
              type: "exam",
              title: "Compare, then rule-name",
              body: "Dec 2025 asked Adaline vs Madaline on architecture AND learning algorithms — a two-column answer. The discriminator that earns the second mark: MADALINE cannot train its output logic, so MRI/MR2 pick the smallest-|net| hidden unit to correct. Quote both rule names; they are exactly the kind of proper noun examiners reward.",
            },
            examQuestions: [
              {
                q: "Explain the ADALINE and MADALINE networks briefly, including their architectures and learning rules.",
                marks: 7,
                appearances: ["Jun 2025"],
                outline: [
                  "ADALINE: one adaptive linear unit; delta rule on the linear output y_in",
                  "Converges to a least-squares fit; quantiser only at read-out",
                  "MADALINE: hidden layer of ADALINEs feeding a fixed OR/AND/majority output",
                  "Output logic is untrainable — learning must go through the hidden units",
                  "MRI: adjust the hidden unit with smallest |net| when the output errs",
                  "MR2: try flip combinations in |net| order; keep error-reducing ones",
                  "Applications: echo cancellation, adaptive filters; ancestor of multilayer training",
                ],
              },
              {
                q: "Compare Adaline and Madaline networks with respect to their architecture and learning algorithms.",
                marks: 7,
                appearances: ["Dec 2025"],
                outline: [
                  "Architecture: single unit + quantiser vs many hidden ADALINEs + fixed logic output",
                  "ADALINE trains by delta rule on its own linear output",
                  "MADALINE's output element has no weights — gradients cannot flow",
                  "Credit assignment solved manually: MRI adjusts the least confident hidden unit",
                  "MR2 extends MRI to combinations of flips, ordered by |net|",
                  "MADALINE realises XOR with two hidden units; ADALINE alone cannot",
                  "Both converge on non-separable data in the least-squares sense",
                ],
              },
            ],
          },
          {
            number: "2.5",
            title: "The back propagation network",
            body: [
              "A back propagation network (BPN) is a multilayer feed-forward network with sigmoid (or tanh) activations, trained by the back propagation algorithm: propagate the output error backward through the layers using the chain rule, computing each weight's share of the blame, then update every weight by gradient descent on the squared error. Its three phases make a fixed exam skeleton (Jun 2025 asked for the phases): phase 1 — the forward pass computes activations layer by layer and the output error; phase 2 — the backward pass propagates delta signals from output to input; phase 3 — the weight update applies w ← w + η·δ·input to every weight, then the next training pair or epoch begins.",
              "The two delta formulas are the heart of the algorithm and must be written exactly. Output layer: δ_o = (t − y)·y(1 − y) — the error times the sigmoid's derivative y(1 − y). Hidden layer: δ_h = (Σ over output units δ_o·w_ho)·h(1 − h) — the sum of downstream deltas scaled by the connecting weights, times the hidden unit's own sigmoid derivative. Updates then follow the same delta-rule shape as ADALINE: Δw = η·δ·(input to that weight), with an optional momentum term α·Δw_old added to smooth the descent. The y(1 − y) factors are why the activation must be differentiable, and also why deep sigmoid stacks train slowly — derivatives shrink multiplicatively (the vanishing-gradient problem).",
              "A worked 1-1-1 trace (x = 1, target t = 1, η = 0.5, all initial weights 0.5, biases 0) shows every phase in numbers. Forward: net_h = 0.5·1 = 0.5, h = σ(0.5) = 0.622; net_o = 0.5·0.622 = 0.311, y = σ(0.311) = 0.577; error E = ½(1 − 0.577)² = 0.089. Backward: δ_o = (1 − 0.577)·0.577·(1 − 0.577) = −0.103; δ_h = δ_o·0.5·0.622·(1 − 0.622) = −0.0121. Update: Δw2 = 0.5·(−0.103)·0.622 = −0.032 so w2 = 0.468; Δw1 = 0.5·(−0.0121)·1 = −0.006 so w1 = 0.494. Repeat over epochs and y climbs toward 1.",
              "Practical training decisions are the exam's closing marks. Learning rate η too large oscillates, too small crawls; momentum α (about 0.9) accelerates consistent descent; training is repeated over epochs until the error on a held-out validation set stops falling (early stopping) — not until training error reaches zero, which is memorisation. Dec 2024 asked the algorithm with a flowchart, Dec 2025 asked how it trains multilayer networks, and Nov 2023 listed 'back propagation network' as a short note — one answer serves all three: architecture, three phases, two delta formulas, one worked update, and the practical knobs.",
            ],
            keyTerms: [
              { term: "Back propagation network", definition: "A multilayer sigmoid network trained by backward-propagated error gradients." },
              { term: "Output delta", definition: "delta_o = (t - y)*y*(1 - y) — error times the sigmoid derivative at the output." },
              { term: "Hidden delta", definition: "delta_h = (sum of delta_o * w_ho) * h * (1 - h) — downstream blame scaled by weights and local derivative." },
              { term: "Momentum", definition: "A fraction alpha of the previous update added to the current one, smoothing and accelerating descent." },
              { term: "Vanishing gradient", definition: "Multiplying many small sigmoid derivatives shrinks deltas in deep stacks, stalling training." },
            ],
            diagram: {
              kind: "cycle",
              title: "The three phases of back propagation",
              caption: "Forward, backward, update — the loop that trains every hidden layer in existence.",
              steps: [
                { label: "Forward pass", note: "activations layer by layer; record the output error" },
                { label: "Backward pass", note: "delta_o at output; delta_h by chain rule through weights" },
                { label: "Weight update", note: "w += eta*delta*input (+ momentum)" },
                { label: "Next pattern / epoch", note: "repeat until validation error stops falling" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "backprop.py — the worked 1-1-1 trace, computed",
              code: `import numpy as np

sig  = lambda z: 1/(1 + np.exp(-z))
w1, w2, eta = 0.5, 0.5, 0.5
x, t = 1.0, 1.0

for epoch in range(3):
    h = sig(w1 * x)              # phase 1: forward
    y = sig(w2 * h)
    E = 0.5*(t - y)**2
    d_o = (y - t) * y * (1 - y)          # phase 2: output delta
    d_h = d_o * w2 * h * (1 - h)         # hidden delta by chain rule
    w2 -= eta * d_o * h                  # phase 3: weight updates
    w1 -= eta * d_h * x
    print(f"epoch {epoch}: y={y:.3f}  E={E:.4f}  w1={w1:.3f}  w2={w2:.3f}")`,
            },
            bullets: [
              "BPN = multilayer feed-forward + sigmoid activations + backward-propagated error gradients.",
              "Phase 1 forward: activations layer by layer; phase 2 backward: deltas by chain rule; phase 3 update.",
              "Output delta: (t - y)*y*(1 - y); hidden delta: (sum delta_o*w)*h*(1 - h).",
              "Updates: w += eta*delta*input, optionally + alpha*previous-delta (momentum).",
              "Worked trace: y goes 0.577 -> with w1 0.494, w2 0.468 after one update; error 0.089 falls each epoch.",
              "eta too large oscillates; momentum ~0.9 smooths; early stopping prevents memorisation.",
              "y(1-y) derivatives shrinking layer by layer cause the vanishing-gradient problem at depth.",
            ],
            callout: {
              type: "exam",
              title: "All four sessions ask this",
              body: "Back propagation appeared in every paper you can be examined on: a short-note option in Nov 2023, flowchart question in Dec 2024, phases question in Jun 2025, multilayer-training question in Dec 2025, and half of the RBFN question in Jun 2025. Prepare one master answer: diagram, three phases, two delta formulas, one numeric update — then adapt the framing to the phrasing.",
            },
            examQuestions: [
              {
                q: "Explain the error back propagation training algorithm with the help of a flowchart.",
                marks: 7,
                appearances: ["Dec 2024"],
                outline: [
                  "Flowchart: initialise weights -> forward pass -> output error -> backward deltas -> update -> epoch done?",
                  "Forward: a = sigmoid(W.x + b) layer by layer; y at the output",
                  "Error E = 1/2*sum(t - y)^2",
                  "Output delta: (t - y)*y*(1 - y); hidden delta: (sum delta_o*w)*h*(1 - h)",
                  "Update: w += eta*delta*input; optional momentum term",
                  "Repeat over epochs until validation error stops improving",
                  "Practical knobs: learning rate, momentum, early stopping",
                ],
              },
              {
                q: "Discuss the various phases of the back propagation algorithm.",
                marks: 7,
                appearances: ["Jun 2025"],
                outline: [
                  "Phase 1 — forward pass: compute activations layer by layer, record output and error",
                  "Phase 2 — backward pass: output delta (t - y)y(1 - y); hidden deltas via chain rule",
                  "Hidden delta formula sums downstream deltas weighted by connecting weights",
                  "Phase 3 — weight update: w += eta*delta*input on every layer",
                  "Epoch control: repeat until error target or early stopping",
                  "Worked 1-1-1 trace: y = 0.577, deltas -0.103 and -0.0121, weights move to 0.468/0.494",
                  "Requires differentiable activations — the sigmoid derivative is the workhorse",
                ],
              },
              {
                q: "Explain the back propagation algorithm and discuss how it is used for training multilayer neural networks.",
                marks: 7,
                appearances: ["Dec 2025"],
                outline: [
                  "Multilayer net: hidden layers cannot be trained by the perceptron rule — blame is hidden",
                  "Back propagation assigns blame: chain rule propagates output deltas backward",
                  "Output delta (t - y)y(1 - y); hidden delta (sum delta_o*w)h(1 - h)",
                  "Gradient descent updates every weight: w += eta*delta*input",
                  "Worked trace: one update moves w2 0.5 -> 0.468 and w1 0.5 -> 0.494",
                  "Hidden layers acquire nonlinear features; XOR-class boundaries become learnable",
                  "Cautions: local minima, vanishing gradients, early stopping on validation data",
                ],
              },
              {
                q: "Write short notes on: back propagation network.",
                marks: 7,
                appearances: ["Nov 2023"],
                outline: [
                  "Definition: multilayer sigmoid network trained by backward error gradients",
                  "Three phases: forward, backward, update — in one line each",
                  "Two delta formulas quoted exactly",
                  "One worked numeric update (1-1-1 net)",
                  "Momentum and learning rate as practical controls",
                  "Historical role: dissolved the XOR limitation, enabled deep learning (1986)",
                ],
              },
            ],
          },
          {
            number: "2.6",
            title: "Radial basis function networks (RBFN)",
            body: [
              "A radial basis function network is a three-layer feed-forward network whose hidden units respond locally: each hidden neuron computes φ_j(x) = exp(−‖x − c_j‖²/(2σ_j²)) — a Gaussian bump centred at c_j with spread σ_j — and the output layer takes a weighted linear sum of the bumps: y = Σ_j w_j·φ_j(x) + b. Where a sigmoid hidden unit responds to the whole input space with an S-curve, an RBF unit responds only inside its radius, so the network interpolates locally: changing one weight changes the fit near one centre and barely disturbs the rest. Only the output weights (and optionally the centres and spreads) are trained; the response shape is fixed.",
              "Training is a two-stage recipe. Stage 1 — choose the centres: either place them at random training points, at k-means cluster centres of the input data, or spread them on a grid; set each σ from the spacing (a common heuristic is σ = d_max/√K, twice the average centre distance divided by √K). Stage 2 — solve for the output weights in one linear least-squares pass: with H the matrix of hidden responses, w = (HᵀH + λI)⁻¹Hᵀt — no gradient descent, no epochs. This is why RBFN trains orders of magnitude faster than back propagation on the same problem, and why it is the tool for function interpolation and time-series prediction with limited data.",
              "A worked evaluation: one hidden unit centred at c = 2 with σ = 1, input x = 3: φ = exp(−(3 − 2)²/(2·1)) = exp(−0.5) = 0.607. With a second unit at c = 0, φ₂ = exp(−9/2) = 0.011. If the output weights are w = (1.2, 0.4) and bias 0.1, the network outputs y = 1.2·0.607 + 0.4·0.011 + 0.1 = 0.841. The far centre contributed almost nothing — local response is the design's whole point, and the arithmetic shows it.",
              "The exam contrast is RBFN vs back propagation network — Jun 2025 bundled both halves into one question. Answer: RBFN hidden units are local Gaussians vs global sigmoids; RBFN trains output weights by one linear solve vs iterative gradient descent; RBFN needs centre selection (k-means) vs architecture selection; RBFN suits interpolation, function approximation and prediction on moderate data, while BPN suits large-scale classification and feature learning. Draw the three layers with the Gaussian labelled inside the hidden layer and the comparison is complete.",
            ],
            keyTerms: [
              { term: "RBF unit", definition: "A hidden neuron computing a Gaussian bump exp(-||x - c||^2 / (2*sigma^2)) centred at c." },
              { term: "Centre selection", definition: "Choosing c_j by k-means clustering, random sampling, or a grid — RBFN's main design decision." },
              { term: "Linear least-squares solve", definition: "Output weights from w = (H^T H + lambda*I)^-1 H^T t — one pass, no epochs." },
              { term: "Local response", definition: "Each RBF unit influences only its neighbourhood, so interpolation stays local and stable." },
            ],
            diagram: {
              kind: "pipeline",
              title: "The RBFN two-stage training recipe",
              caption: "Place the bumps first, solve the weights second — no gradient descent anywhere.",
              stages: [
                { label: "Input layer", note: "raw feature vector x" },
                { label: "Place centres", note: "k-means / random / grid on the inputs" },
                { label: "Set spreads", note: "sigma from centre spacing (d_max / sqrt(K))" },
                { label: "Compute responses", note: "phi_j = exp(-||x - c_j||^2 / 2*sigma^2)" },
                { label: "Solve output weights", note: "one linear least-squares pass" },
              ],
            },
            table: {
              caption: "RBFN vs back propagation network.",
              headers: ["Aspect", "RBFN", "Back propagation network"],
              rows: [
                ["Hidden unit response", "local Gaussian bumps", "global sigmoid S-curves"],
                ["Training", "centres by k-means + one linear solve for output weights", "iterative gradient descent over epochs"],
                ["Speed", "very fast (closed-form stage)", "slow, many epochs"],
                ["What you tune", "centres, spreads, regularisation lambda", "architecture, learning rate, momentum"],
                ["Interference between weights", "local — one weight affects one region", "global — every weight affects every input"],
                ["Best suited to", "interpolation, function approximation, prediction", "large-scale classification, feature learning"],
              ],
            },
            bullets: [
              "RBFN: input layer -> Gaussian hidden layer -> linear weighted-sum output.",
              "Hidden response: phi = exp(-||x - c||^2 / (2*sigma^2)); worked: c=2, sigma=1, x=3 -> 0.607.",
              "Output y = sum w_j*phi_j + b; worked: 1.2*0.607 + 0.4*0.011 + 0.1 = 0.841.",
              "Stage 1 places centres (k-means typical); stage 2 solves output weights by least squares.",
              "No gradient descent — training is one closed-form pass, orders faster than BPN.",
              "Local response means changing one weight barely moves the fit elsewhere.",
              "vs BPN: local Gaussians vs global sigmoids; linear solve vs iterative epochs.",
            ],
            callout: {
              type: "exam",
              title: "The bundled question",
              body: "Jun 2025 asked 'What is the RBFN method? Also discuss the back propagation network' — a comparison in disguise. Prepare the contrast table (local vs global response, linear solve vs gradient descent, centre selection vs architecture selection) and lead with the one-line definition of each before comparing.",
            },
            examQuestions: [
              {
                q: "What is the RBFN method? Explain its architecture and training procedure, and compare it with the back propagation network.",
                marks: 7,
                appearances: ["Jun 2025"],
                outline: [
                  "Architecture: input -> Gaussian RBF hidden layer -> linear output sum",
                  "Hidden unit: phi_j = exp(-||x - c_j||^2 / (2*sigma_j^2)) — local response",
                  "Stage 1: choose centres (k-means / random / grid), set sigma from spacing",
                  "Stage 2: output weights by one linear least-squares solve",
                  "Worked evaluation: c=2, sigma=1, x=3 -> phi=0.607; y = 1.2*0.607 + 0.1 = 0.841",
                  "vs BPN: local bumps vs global sigmoids; closed-form vs iterative gradient",
                  "RBFN suits interpolation and prediction; BPN suits large-scale classification",
                ],
              },
              {
                q: "Why does an RBF network train faster than a back propagation network of similar size? Justify with the structure of its two training stages.",
                marks: 7,
                outline: [
                  "Stage 1 fixes the nonlinear part: centres and spreads chosen without gradient descent",
                  "Only the output weights remain linear in the training targets",
                  "Linear least squares has a closed-form solution — one matrix solve",
                  "Back propagation instead optimises every weight by iterative gradient steps",
                  "Each BPN epoch recomputes the full forward and backward pass",
                  "RBFN's local responses also decouple regions — fewer interacting parameters",
                  "Cost: centre selection quality determines RBFN accuracy",
                ],
              },
            ],
          },
          {
            number: "2.7",
            title: "Applications in forecasting, data and image compression",
            body: [
              "Forecasting is supervised learning on time-sequenced data: the network's input is a window of recent observations x_{t-n+1..t} and its target is the next value x_{t+1}, so a trained network is a one-step-ahead predictor. A typical setup uses a sliding window of 5-10 samples into a small MLP or RBFN trained with back propagation; the same weights then roll forward one step at a time to predict further. Domains: load forecasting in power systems, sales and demand forecasting, weather variables, network traffic, and stock series (with the honest caveat that financial series are close to a random walk). The evaluation metric is mean squared error or MAPE on data the network never saw — training-set error is meaningless for a forecaster.",
              "Data compression exploits redundancy: a network learns an identity mapping through a bottleneck — an autoencoder whose hidden layer is narrower than its input (e.g. 8 inputs -> 3 hidden units -> 8 outputs). Training on the data with targets equal to inputs forces the hidden layer to encode each input in far fewer numbers; the encoder half is the compressor, the decoder half the decompressor, and the reconstruction error is the distortion. Compression ratio equals input-size : hidden-size, e.g. 8:3. The same idea underlies vector quantisation, where a competitive network (Unit III) maps each input block to the index of the nearest codeword — transmitting the index instead of the block.",
              "Image compression applies the same machinery in 2-D: the image is cut into blocks (typically 4×4 or 8×8 pixels, flattened to 16 or 64 inputs), a bottleneck network is trained block-by-block to reproduce each block through a narrow hidden layer, and the compressed file stores the block indices or hidden codes plus the shared decoder weights. Worked arithmetic: a 256 × 256 image in 8 × 8 blocks yields 1024 blocks of 64 pixels = 65,536 raw values; compressing each block to 8 hidden values gives 8192 values plus the decoder, roughly an 8:1 ratio with modest distortion — comparable to classical transform coding, learned rather than designed.",
              "Dec 2024 asked exactly this trio — forecasting and data compression (and the syllabus adds image compression). The full-mark answer names the mechanism for each (sliding-window supervised prediction; bottleneck autoencoder; block-wise bottleneck on pixels), gives one numeric compression ratio, and closes with why neural versions beat classical ones: the transform is learned from the data instead of hand-designed (DCT, Huffman), adapting to the statistics of the actual signal.",
            ],
            keyTerms: [
              { term: "Sliding window", definition: "Forecasting input formed from the last n observations; the target is the next value in the series." },
              { term: "Bottleneck (autoencoder)", definition: "A network trained input -> narrow hidden -> input, forcing a compressed code in the hidden layer." },
              { term: "Compression ratio", definition: "Original values per block divided by stored code values — e.g. 64 pixels to 8 codes is 8:1." },
              { term: "Vector quantisation", definition: "Mapping input blocks to the index of the nearest codeword learned by a competitive network." },
              { term: "MAPE", definition: "Mean absolute percentage error — the standard forecasting metric on held-out data." },
            ],
            diagram: {
              kind: "fork",
              title: "Which application, which mechanism?",
              caption: "Three named syllabus applications and the network mechanism each one uses.",
              start: "Neural network application areas",
              branches: [
                { label: "Forecasting", outcome: "sliding-window MLP/RBFN predicts x(t+1) from x(t-n+1..t)", good: true },
                { label: "Data compression", outcome: "bottleneck autoencoder: 8 inputs -> 3 hidden -> 8 outputs", good: true },
                { label: "Image compression", outcome: "block the image (8x8), train a bottleneck on blocks, store codes", good: true },
                { label: "Training-set error as the metric", outcome: "forecaster judged on unseen data only — always a mistake", good: false },
              ],
            },
            table: {
              caption: "The three syllabus applications mapped to networks.",
              headers: ["Application", "Network", "Input / target", "Worked figure"],
              rows: [
                ["Forecasting", "MLP or RBFN, supervised", "window of n past values -> next value", "one-step-ahead MSE/MAPE on test data"],
                ["Data compression", "bottleneck autoencoder", "x -> hidden code -> x", "8 inputs -> 3 hidden = 8:3 ratio"],
                ["Image compression", "block-wise bottleneck net", "8x8 pixel block (64 inputs) -> 8 codes", "256x256 image: 65536 -> ~8192 values, 8:1"],
                ["Vector quantisation", "competitive (Kohonen) net", "block -> nearest codeword index", "transmit index, not the block"],
              ],
            },
            bullets: [
              "Forecasting: sliding window in, next value out; supervised training with back propagation.",
              "Judge a forecaster on unseen data — training error proves nothing.",
              "Data compression: bottleneck autoencoder; hidden layer is the compressed code.",
              "Compression ratio = input size : hidden size (8:3 in the worked example).",
              "Image compression: block the image (8x8 = 64 inputs), compress to 8 codes — 8:1 overall.",
              "Vector quantisation variant: competitive network maps blocks to codeword indices.",
              "Advantage over DCT/Huffman: the transform is learned from the signal's own statistics.",
            ],
            callout: {
              type: "exam",
              title: "Name all three, quantify one",
              body: "Dec 2024 asked forecasting and data compression in one question; the syllabus adds image compression. Cover all three with their mechanisms, then quantify one ratio (64 pixels -> 8 codes) — a single concrete number separates a full answer from a list.",
            },
            examQuestions: [
              {
                q: "Discuss the applications of neural networks in forecasting and data compression (and image compression), describing the network used and the mechanism in each case.",
                marks: 7,
                appearances: ["Dec 2024"],
                outline: [
                  "Forecasting: sliding window of n past values -> predict x(t+1); MLP or RBFN",
                  "Supervised training with back propagation; evaluate MAPE on unseen data",
                  "Data compression: bottleneck autoencoder, targets equal to inputs",
                  "Hidden layer is the code; ratio = input:hidden (8 -> 3)",
                  "Image compression: 8x8 blocks flattened to 64 inputs -> 8 codes; ~8:1",
                  "Vector quantisation: competitive network assigns block indices",
                  "Advantage: the transform is learned from the data, not hand-designed",
                ],
              },
              {
                q: "Explain how a bottleneck neural network performs data compression and decompression. Why must the hidden layer be narrower than the input?",
                marks: 7,
                outline: [
                  "Autoencoder: input -> narrow hidden -> output, trained to reproduce the input",
                  "Narrow hidden layer is the information bottleneck",
                  "Training forces the network to discard redundancy, keep the essentials",
                  "Encoder half compresses; decoder half reconstructs; error = distortion",
                  "If hidden >= input, identity copying is trivial — no compression",
                  "Worked: 8 inputs -> 3 hidden = 8:3 ratio; block version for images",
                  "Quality measured by reconstruction error on unseen data",
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
      title: "Unsupervised Learning",
      summary:
        "Unit III removes the teacher: the introduction to unsupervised learning and fixed-weight competitive nets, the Kohonen self-organizing map with its architecture and training algorithm, counter propagation networks, adaptive resonance theory, and introductions to convolutional and recurrent neural networks.",
      chapter: {
        number: "03",
        title: "Learning Without Labels",
        intro:
          "Unit III covers unsupervised learning and fixed-weight competitive nets (Hamming, Maxcon, instar/outstar), the Kohonen SOM architecture and algorithm, counter propagation networks, ART 1 with its vigilance test, CNN, and RNN.",
        inOneBreath:
          "Competitive nets let units fight for each input and only the winner learns; the SOM adds a neighbourhood so nearby winners co-adapt, preserving topology; counter propagation chains an instar (who won) to an outstar (what to output) for fast association; ART adds a vigilance test that decides whether to learn a new pattern or carve a new category; CNN convolves local kernels over grids for vision, RNN loops hidden state through time for sequences.",
        sections: [
          {
            number: "3.1",
            title: "Unsupervised learning and competitive networks",
            body: [
              "Unsupervised learning trains a network on inputs alone: no targets exist, so the network must discover structure — clusters, topology, associations — by self-organisation. The unit's core mechanism is competition: when an input x arrives, every output unit computes a similarity score (typically dot product x·w_j or distance ‖x − w_j‖), the best-matching unit wins, and only the winner (and, in SOM, its neighbours) updates its weights toward the input: w ← w + α·(x − w). This is winner-take-all (WTA) learning — each input strengthens one category and leaves the others untouched, so the weight vectors migrate to the data's cluster centres without any teacher naming the clusters.",
              "The contrast with supervised learning is the exam's framing question (Dec 2024). Supervised learning has targets and an error signal; unsupervised has neither, and quality is judged indirectly — by cluster compactness, by topological fidelity, or by usefulness downstream. Supervised networks learn mappings; unsupervised networks learn representations. In practice they chain: an unsupervised SOM first organises raw data into a grid of prototypes, and a supervised layer is then trained on top of the prototypes — exactly the counter propagation design of section 3.4.",
              "A worked competitive step: two units with weights w1 = (0.8, 0.2) and w2 = (0.1, 0.9), input x = (0.6, 0.5). Dot products: x·w1 = 0.48 + 0.10 = 0.58; x·w2 = 0.06 + 0.45 = 0.51 — unit 1 wins. Update with α = 0.5: w1 ← (0.8, 0.2) + 0.5·((0.6, 0.5) − (0.8, 0.2)) = (0.7, 0.35). Unit 2 is untouched. Repeated over a clustered dataset, the two weights settle on the two cluster centres — the algorithm finds structure nobody labelled.",
              "Fixed-weight competitive nets are the historical entry point: their weights are set by hand (not trained) and the competition does the work — the Hamming network computes the distance of an input to every stored exemplar and the WTA picks the nearest; Maxcon nets feed a layer of instars into a max-detector. They demonstrate that competition alone can classify, and set up the two trained architectures this unit develops: the Kohonen SOM (competition plus neighbourhood) and counter propagation (competition plus association).",
            ],
            keyTerms: [
              { term: "Winner-take-all (WTA)", definition: "Only the best-matching unit updates its weights for a given input; the rest are untouched." },
              { term: "Competitive learning", definition: "Unsupervised learning by competition — units migrate their weights toward cluster centres." },
              { term: "Similarity score", definition: "Dot product or negative distance by which units compete for an input." },
              { term: "Self-organisation", definition: "Structure emerging from the data alone, with no teacher or labels." },
            ],
            diagram: {
              kind: "flow",
              title: "One competitive learning step",
              caption: "Score, win, move — the three-step loop that self-organises clusters from unlabelled data.",
              steps: [
                { label: "Input x arrives", note: "no target attached" },
                { label: "Score every unit", note: "dot products x.w_j or distances" },
                { label: "Winner takes all", note: "best-scoring unit only" },
                { label: "Move the winner", note: "w += alpha*(x - w)" },
                { label: "Repeat", note: "weights settle on cluster centres" },
              ],
            },
            table: {
              caption: "Supervised vs unsupervised learning in this subject.",
              headers: ["Aspect", "Supervised (Unit II)", "Unsupervised (this unit)"],
              rows: [
                ["Training data", "inputs with targets", "inputs only"],
                ["Error signal", "target - output", "none — similarity drives updates"],
                ["Weight update", "gradient of an error function", "winner moves toward the input"],
                ["What is learned", "an input-output mapping", "clusters, topology, associations"],
                ["Representatives", "perceptron, ADALINE, BPN, RBFN", "Hebb, Hamming/Maxcon, SOM, CPN, ART"],
                ["Evaluation", "accuracy on held-out targets", "compactness, topology fidelity, downstream use"],
              ],
            },
            bullets: [
              "Unsupervised learning: inputs only; structure discovered by self-organisation.",
              "Competition: score every unit, winner takes all, winner moves toward the input.",
              "Worked step: w1=(0.8,0.2) beats w2=(0.1,0.9) on x=(0.6,0.5); w1 moves to (0.7,0.35).",
              "No error signal — quality judged by compactness and downstream usefulness.",
              "Fixed-weight nets (Hamming, Maxcon) classify by competition with hand-set weights.",
              "Trained competitors follow: SOM adds a neighbourhood; CPN adds an outstar association.",
            ],
            callout: {
              type: "exam",
              title: "The framing half-question",
              body: "Dec 2024 asked 'state the difference between supervised and unsupervised learning' as a standalone 7-mark half. Answer with the three-row contrast — data, error signal, what is learned — plus one representative network each. Keep it to a table; examiners mark rows, not essays.",
            },
            examQuestions: [
              {
                q: "State the difference between supervised learning and unsupervised learning, with one example network of each and the mechanism by which each updates its weights.",
                marks: 7,
                appearances: ["Dec 2024"],
                outline: [
                  "Supervised: inputs with targets; error e = t - y drives updates",
                  "Mechanism: gradient/error-correction (perceptron, delta rule, back propagation)",
                  "Learned object: an input-output mapping",
                  "Unsupervised: inputs only; no error signal",
                  "Mechanism: winner-take-all competition or correlation (Hebb)",
                  "Learned object: clusters, topology, associations (SOM, CPN, ART)",
                  "Chaining: unsupervised representation then supervised layer on top",
                ],
              },
              {
                q: "Explain competitive learning with a worked numerical step. Why is it called winner-take-all?",
                marks: 7,
                outline: [
                  "Units compete by dot product or distance to the input",
                  "Worked: w1=(0.8,0.2), w2=(0.1,0.9), x=(0.6,0.5) -> scores 0.58 vs 0.51",
                  "Unit 1 wins; update w1 += alpha*(x - w1) = (0.7,0.35) with alpha = 0.5",
                  "Losing unit untouched — hence winner-TAKE-ALL",
                  "Over the dataset, weights settle on cluster centres",
                  "No labels or teacher anywhere in the loop",
                  "Foundation of SOM, CPN and ART",
                ],
              },
            ],
          },
          {
            number: "3.2",
            title: "Fixed-weight competitive nets",
            body: [
              "Fixed-weight competitive nets have their weights set by hand before any input arrives; the architecture, not training, does the work. The two canonical examples are the Hamming network and the Maxcon (maximum component) network, both built from instar and outstar neurons — the two primal WTA primitives introduced by Grossberg. An instar is a neuron that learns to recognise a specific input pattern (many-to-one: many inputs converge on it); an outstar is a neuron that learns to emit a specific output pattern (one-to-many: it fans out to many outputs). Every competitive architecture in this unit is assembled from instars competing and outstars responding.",
              "The Hamming network classifies an input by its distance to each stored exemplar. A lower net computes the match scores: for bipolar input x and exemplar w_j, the score is (n − ‖x − w_j‖)/2 — implemented as a dot product with a bias of n/2; a WTA max-net (each unit inhibits all others, self-excitation 1) then selects the largest score. The output names the exemplar closest to the input — a nearest-neighbour classifier realised purely in fixed weights. Worked check: n = 4, x = (1, −1, 1, −1), exemplar w1 = (1, −1, 1, −1): match = (4 − 0)/2 = 2; exemplar w2 = (1, 1, −1, −1): differing positions are 2 and 3, distance 2, match = (4 − 2)/2 = 1 — the WTA selects exemplar 1.",
              "The Maxcon network chains an instar layer into a single maximum-detector: each instar computes its dot-product score, and the output is the identity of the maximum component — the minimal competitive machine. Its value in the exam is conceptual: it shows that recognition (instar) and selection (max) are separable stages, which the SOM then merges (competitive units that also learn) and counter propagation extends (winner then drives an outstar). Know both nets' purposes: Hamming = nearest-exemplar classification with fixed weights; Maxcon = the skeleton on which trained competitors are built.",
              "The syllabus phrase is 'fixed weight competitive nets', and the exam typically asks for the architecture and working of these nets as part of the unsupervised introduction. Answer with the instar/outstar definitions, the Hamming network's score formula and worked match computation, the max-net's lateral inhibition picture, and one line on why fixed weights suffice for exemplar matching but trained weights (SOM) are needed to organise continuous data.",
            ],
            keyTerms: [
              { term: "Instar", definition: "A many-to-one neuron that learns to recognise a specific input pattern." },
              { term: "Outstar", definition: "A one-to-many neuron that learns to emit a specific output pattern when activated." },
              { term: "Hamming network", definition: "Fixed-weight net computing each exemplar's match score, then WTA-selecting the nearest." },
              { term: "Max-net", definition: "A WTA network with self-excitation and mutual inhibition whose stable state is the single largest score." },
            ],
            diagram: {
              kind: "compare",
              title: "Hamming network vs Maxcon network",
              caption: "Both fixed-weight competitors; one measures distances, the other is the bare selection skeleton.",
              left: {
                heading: "Hamming network",
                items: [
                  "Lower net: match scores (n - ||x - w_j||)/2 per exemplar",
                  "Upper max-net: WTA by mutual inhibition",
                  "Output: nearest stored exemplar",
                  "Use: nearest-neighbour classification, fault-tolerant recall",
                ],
              },
              right: {
                heading: "Maxcon network",
                items: [
                  "Instar layer computes dot-product scores",
                  "Single maximum-detector selects the winner",
                  "Output: identity of the maximum component",
                  "Use: the primitive skeleton beneath SOM and CPN",
                ],
              },
            },
            table: {
              caption: "The fixed-weight competitive primitives.",
              headers: ["Net / neuron", "Weights", "Computation", "Role"],
              rows: [
                ["Instar", "trained or fixed", "score = w.x (recognition)", "many-to-one pattern detector"],
                ["Outstar", "trained or fixed", "emit stored pattern on activation", "one-to-many response generator"],
                ["Hamming lower net", "fixed exemplars + n/2 bias", "match = (n - distance)/2", "exemplar scoring"],
                ["Max-net", "fixed (self 1, others -epsilon)", "iterative inhibition to a single winner", "winner-take-all selection"],
              ],
            },
            bullets: [
              "Fixed-weight nets: weights set by hand; competition does the classification.",
              "Instar = recogniser (many-to-one); outstar = generator (one-to-many).",
              "Hamming score: (n - ||x - w||)/2; worked: n=4, distance 0 -> 2, distance 2 -> 1.",
              "Max-net: self-excitation plus mutual inhibition converges to one winner.",
              "Hamming = nearest-exemplar classifier in fixed hardware.",
              "Maxcon = the skeleton later filled by trained competitors (SOM, CPN).",
              "Fixed weights suffice for exemplar matching; continuous data needs trained weights.",
            ],
            callout: {
              type: "tip",
              title: "Name the primitives first",
              body: "Questions on fixed-weight nets are really questions about instar and outstar. Define both in one line each, place Hamming and Maxcon as their assemblies, and then any architecture diagram you draw for SOM or CPN has a labelled vocabulary the examiner recognises instantly.",
            },
            examQuestions: [
              {
                q: "Explain fixed-weight competitive networks. Describe the Hamming and Maxcon networks with their architectures and a worked match-score computation.",
                marks: 7,
                outline: [
                  "Fixed weights set before training; competition classifies",
                  "Instar: many-to-one recogniser; outstar: one-to-many generator",
                  "Hamming lower net: score = (n - ||x - w_j||)/2 for each stored exemplar",
                  "Worked: n = 4; distances 0 and 2 give scores 2 and 1",
                  "Max-net: mutual inhibition + self-excitation selects the largest score",
                  "Maxcon: instar scores feed a single maximum-detector",
                  "Role: nearest-exemplar classification; skeleton for trained competitors",
                ],
              },
              {
                q: "Compute the Hamming network scores for input x = (1, -1, 1, -1) against exemplars w1 = (1, -1, 1, -1) and w2 = (1, 1, -1, -1), and state the WTA result.",
                marks: 7,
                outline: [
                  "n = 4; score = (n - ||x - w||)/2",
                  "Distance to w1 = 0 -> score (4 - 0)/2 = 2",
                  "Distance to w2 = 2 (positions 2 and 3 differ) -> score (4 - 2)/2 = 1",
                  "Max-net selects the larger score: unit 1",
                  "Input classified as exemplar w1",
                  "Bipolar coding makes the dot-product implementation exact",
                ],
              },
            ],
          },
          {
            number: "3.3",
            title: "The Kohonen self-organizing map (SOM)",
            body: [
              "The Kohonen self-organizing map (SOM) is a competitive network whose output units are arranged in a 1-D or 2-D lattice, and whose decisive addition is the neighbourhood: when a unit wins, it and its lattice neighbours all move toward the input. Because neighbouring units respond to similar inputs, the map preserves topology — the geometry of the input space is reflected in the geometry of the lattice, which is why SOMs are used to visualise high-dimensional data (colour maps, document maps) as well as to cluster it. No targets exist anywhere in the algorithm: the map is a purely unsupervised projection onto a grid.",
              "The training algorithm has five steps (Jun 2025 asked for 'the various processes', Nov 2023 asked for architecture plus flowchart, Dec 2025 for the working process with a diagram). 1 — initialise all weight vectors with small random values and set the initial neighbourhood radius and learning rate. 2 — for each input x, compute distances ‖x − w_j‖ to every unit and select the best-matching unit (BMU). 3 — update the BMU and every unit inside the neighbourhood: w_j ← w_j + α(t)·h(j)·(x − w_j), where h(j) is a neighbourhood function (Gaussian in the lattice distance, 1 inside the radius). 4 — shrink the learning rate and the radius as epochs pass (exponential decay is standard). 5 — stop after the planned epochs; the lattice now mirrors the input distribution.",
              "A worked update: input x = (0.5, 0.2); BMU weight w = (0.4, 0.6); α = 0.5 with a Gaussian neighbour factor 1.0 for the BMU. New weight: w ← (0.4, 0.6) + 0.5·(1.0)·((0.5, 0.2) − (0.4, 0.6)) = (0.45, 0.40). A neighbour at lattice distance 1 with factor 0.5 moves half as much: (0.425, 0.50). Note the direction of motion — every updated unit is dragged toward x, and as α and the radius decay, the updates shrink from coarse organisation to fine tuning.",
              "The parameters and their schedule are the exam's depth marks. Learning rate α(t) = α0·e^(−t/T1) and radius σ(t) = σ0·e^(−t/T2): large early values organise the coarse map, small late values fine-tune it. The neighbourhood function is what makes a SOM more than clustering — a plain WTA net would snap each input to one unit with no spatial coupling. Dec 2024 asked for brief notes on Kohonen self-organizing networks; the answer is architecture (input layer, lattice output layer), the five-step algorithm, the BMU update with one worked number, the decay schedule, and the topology-preserving property stated explicitly.",
            ],
            keyTerms: [
              { term: "SOM (Kohonen map)", definition: "Competitive network on a lattice whose neighbourhood updates preserve input topology." },
              { term: "Best-matching unit (BMU)", definition: "The output unit whose weight vector is closest to the current input." },
              { term: "Neighbourhood function", definition: "Gaussian (or bubble) weighting of units by lattice distance from the BMU — the topology-preserving device." },
              { term: "Decay schedule", definition: "Learning rate and radius shrink exponentially, coarse organisation first, fine tuning last." },
            ],
            diagram: {
              kind: "pipeline",
              title: "The SOM training loop",
              caption: "Five steps per epoch; the radius and rate decay turn coarse ordering into fine mapping.",
              stages: [
                { label: "Initialise", note: "small random weights; set radius, rate" },
                { label: "Find BMU", note: "smallest ||x - w_j|| on the lattice" },
                { label: "Update neighbourhood", note: "w_j += alpha*h(j)*(x - w_j)" },
                { label: "Decay", note: "alpha and radius shrink each epoch" },
                { label: "Stop", note: "lattice mirrors the input distribution" },
              ],
            },
            table: {
              caption: "SOM training parameters and their roles.",
              headers: ["Parameter", "Typical form", "Role", "If set badly"],
              rows: [
                ["Learning rate alpha", "0.5 -> 0.01, exponential decay", "size of each weight step", "too large: oscillation; too small: frozen map"],
                ["Neighbourhood radius", "large -> 1 unit, decaying", "how many units co-adapt", "too small: no topology, plain clustering"],
                ["Neighbourhood h(j)", "Gaussian of lattice distance", "weights co-adaptation", "uniform: no spatial smoothing"],
                ["Lattice size", "e.g. 10x10 units", "map resolution", "too few: merges clusters; too many: fragmentation"],
                ["Epochs", "hundreds to thousands", "total organisation time", "too few: unfinished ordering"],
              ],
            },
            bullets: [
              "SOM = competitive learning + lattice neighbourhood = topology preservation.",
              "Algorithm: initialise -> find BMU -> update BMU and neighbours -> decay rate and radius -> stop.",
              "Update rule: w_j += alpha(t)*h(j)*(x - w_j) for j inside the neighbourhood.",
              "Worked: x=(0.5,0.2), w=(0.4,0.6), alpha=0.5 -> BMU moves to (0.45,0.40).",
              "Neighbour with factor 0.5 moves half as far — spatial coupling is the point.",
              "Decay: coarse ordering early (large alpha, wide radius), fine tuning late.",
              "Applications: visualising high-dimensional data, clustering, prototype maps.",
            ],
            callout: {
              type: "exam",
              title: "Four sessions, one algorithm",
              body: "The SOM is the most repeated unsupervised topic: architecture + flowchart (Nov 2023), brief notes (Dec 2024), algorithm processes (Jun 2025), working process with diagram (Dec 2025). One master answer — architecture, five steps, BMU update with a worked number, decay schedule, topology sentence — covers every phrasing.",
            },
            examQuestions: [
              {
                q: "Explain with a neat sketch the architecture of the Kohonen self-organizing map and draw its training flowchart.",
                marks: 7,
                appearances: ["Nov 2023"],
                outline: [
                  "Architecture: input layer fully connected to a 1-D/2-D lattice of output units",
                  "Each output unit holds a weight vector w_j of the input dimension",
                  "Competition: distance ||x - w_j|| decides the BMU",
                  "Flowchart: initialise -> present x -> find BMU -> update neighbourhood -> decay -> stop?",
                  "Update rule w_j += alpha*h(j)*(x - w_j) inside the neighbourhood",
                  "Only unsupervised data — no targets anywhere",
                  "Topology preservation as the defining property",
                ],
              },
              {
                q: "Describe the various processes of the self-organizing map algorithm, including the weight update with a worked numerical step.",
                marks: 7,
                appearances: ["Jun 2025"],
                outline: [
                  "Step 1: initialise weights randomly, set initial radius and rate",
                  "Step 2: for input x, compute distances and select the BMU",
                  "Step 3: update BMU and neighbourhood: w += alpha*h(j)*(x - w)",
                  "Worked: x=(0.5,0.2), BMU w=(0.4,0.6), alpha=0.5 -> new w=(0.45,0.40)",
                  "Neighbour with h=0.5 moves half as far: (0.425,0.50)",
                  "Step 4: decay alpha and radius exponentially",
                  "Step 5: stop; the lattice mirrors the input distribution",
                ],
              },
              {
                q: "Describe the Kohonen self-organizing map and explain its working process with a neat diagram. What makes it different from plain competitive learning?",
                marks: 7,
                appearances: ["Dec 2025"],
                outline: [
                  "Diagram: input vector -> lattice of output units with lateral neighbourhood",
                  "Working: BMU selection by distance; neighbourhood update; decaying schedule",
                  "Neighbourhood function h(j) couples lattice neighbours during updates",
                  "Plain WTA: one unit learns per input — clusters without geometry",
                  "SOM: neighbours co-adapt, so similar inputs map to nearby units",
                  "Result: topology preservation — the map is a visualisation of the data",
                  "Decay schedule: coarse ordering first, fine tuning last",
                ],
              },
              {
                q: "Write brief notes on Kohonen's self-organizing networks.",
                marks: 7,
                appearances: ["Dec 2024"],
                outline: [
                  "Definition: unsupervised competitive network on a lattice (Kohonen, 1982)",
                  "BMU = unit with minimum ||x - w||",
                  "Update: BMU plus neighbourhood move toward the input",
                  "Learning rate and radius decay over epochs",
                  "Topology-preserving: input geometry reflected in lattice geometry",
                  "Applications: clustering, visualisation of high-dimensional data",
                ],
              },
            ],
          },
          {
            number: "3.4",
            title: "Counter propagation networks (CPN)",
            body: [
              "A counter propagation network (Hecht-Nielsen, 1987) combines competitive and supervised learning in one architecture: a Kohonen (instar) layer self-organises the inputs, and a Grossberg (outstar) layer maps the winning unit to the network's output. The name describes the data flow — input statistics propagate forward through the instar layer while the desired output feeds the outstar layer from the other side, and the two 'counter-propagate' toward each other to form an association at the hidden layer. The network is a fast function-mapper: the instar layer does the unsupervised clustering, the outstar layer stores one output vector per cluster.",
              "The architecture has three layers and two training stages. Stage 1 — train the instar layer by pure competitive learning: for each input, the best-matching unit wins and moves toward the input (w ← w + α(x − w)); no output information is used. Stage 2 — freeze the instar layer (or keep updating with a small rate) and train the outstar layer: the winner j receives the desired output vector t, and its outgoing weights update as v ← v + β(t − v), so the weights from unit j learn the average output associated with cluster j. After training, presenting an input activates one hidden unit, and the outstar layer emits the stored output vector — recognition followed by recall.",
              "A worked association: inputs clustered around two patterns; hidden unit 1 wins for inputs near (1, 0) and has learned (via stage 2) the output vector (0.9, 0.1); hidden unit 2 wins near (0, 1) with output (0.2, 0.8). Presenting x = (0.9, 0.1): distances pick unit 1, and the network outputs (0.9, 0.1) instantly — one pass, no epochs, because both stages are local rules rather than global optimisation. This is why CPN is described as a fast approximator: training is orders quicker than back propagation at the cost of piecewise-constant accuracy within clusters.",
              "The syllabus lists theory, architecture, flow chart, training algorithm and applications — and the papers asked it as a detail question (Nov 2023 forward-only CPN), an architecture-plus-algorithm question (Dec 2024), and a short note (Dec 2025). The applications line closes the answer: CPN serves as a rapid prototype mapper for inverse models, pattern association, and data smoothing where speed matters more than fine accuracy. 'Forward-only' distinguishes the basic architecture from the full counter propagation design that also builds a reverse mapping (output back to input) for inverse problems.",
            ],
            keyTerms: [
              { term: "Counter propagation network", definition: "Three-layer net pairing a Kohonen instar layer (competition) with a Grossberg outstar layer (association)." },
              { term: "Instar layer", definition: "The competitive hidden layer that clusters inputs; one unit wins per input." },
              { term: "Outstar layer", definition: "The output layer whose weights learn the average output vector of each winning cluster." },
              { term: "Forward-only CPN", definition: "The basic input-to-output mapping architecture, without the reverse (inverse-model) mapping." },
            ],
            diagram: {
              kind: "layers",
              title: "Counter propagation architecture",
              caption: "Instar competes, outstar recalls — two training stages, one fast association machine.",
              layers: [
                { label: "Grossberg outstar layer", note: "v += beta*(t - v) for the winning unit's outgoing weights" },
                { label: "Kohonen instar layer (hidden)", note: "winner-take-all: w += alpha*(x - w)" },
                { label: "Input layer", note: "raw feature vector x" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "cpn.py — the two training stages in six lines",
              code: `import numpy as np

W = np.random.rand(2, 2)              # instar (hidden) weights: 2 units, 2 inputs
V = np.random.rand(2, 2)              # outstar weights: 2 units -> 2 outputs
x, t = np.array([0.9, 0.1]), np.array([1.0, 0.0])

# stage 1: instar competition (unsupervised)
j = int(np.argmax(W @ x))             # winning hidden unit
W[j] += 0.5 * (x - W[j])              # winner moves toward the input

# stage 2: outstar association (supervised on the winner only)
V[j] += 0.3 * (t - V[j])              # winner learns the target output
print("winner:", j, "output:", V[j].round(3))`,
            },
            bullets: [
              "CPN = Kohonen instar layer (clustering) + Grossberg outstar layer (association).",
              "Stage 1 unsupervised: winner moves toward the input; stage 2 supervised: winner's outstar learns the target.",
              "Name: input statistics and output targets counter-propagate toward each other.",
              "Worked: x = (0.9,0.1) -> unit 1 wins -> output (0.9,0.1) in one pass.",
              "Trains orders faster than back propagation; accuracy is piecewise-constant per cluster.",
              "Forward-only CPN maps input to output; the full design adds a reverse mapping for inverse models.",
              "Applications: pattern association, inverse modelling, rapid prototype mappers, smoothing.",
            ],
            callout: {
              type: "exam",
              title: "Three sessions, one architecture",
              body: "Nov 2023 asked forward-only CPN in detail, Dec 2024 asked architecture + algorithm with diagram, Dec 2025 listed CPN as a short-note option. The answer skeleton is fixed: three layers, two training stages (competition then association), one worked association, applications line. Draw the instar and outstar labels — they are the marks.",
            },
            examQuestions: [
              {
                q: "Discuss in detail the forward-only counter propagation network: architecture, training algorithm and applications.",
                marks: 7,
                appearances: ["Nov 2023"],
                outline: [
                  "Architecture: input -> Kohonen instar (hidden, competitive) -> Grossberg outstar (output)",
                  "Stage 1: instar layer trains by winner-take-all, unsupervised",
                  "Stage 2: outstar weights of the winner learn the desired output vector",
                  "Update rules: w += alpha*(x - w); v += beta*(t - v)",
                  "Worked: x = (0.9,0.1) wins unit 1 -> output (0.9,0.1) in one pass",
                  "Fast: two local rule stages, no global optimisation",
                  "Applications: pattern association, inverse models, prototype mapping",
                ],
              },
              {
                q: "Explain the architecture and algorithm of the counter propagation network with a diagram.",
                marks: 7,
                appearances: ["Dec 2024"],
                outline: [
                  "Three layers with instar (hidden) and outstar (output) roles labelled",
                  "Data flow: input forward, desired output fed to the outstar layer",
                  "Stage 1 training: competitive learning on the instar layer only",
                  "Stage 2 training: outstar layer learns per-cluster output vectors",
                  "Inference: one winning unit fires, outstar emits the stored vector",
                  "Why 'counter propagation': inputs and targets meet at the hidden layer",
                  "Trade-off: speed over within-cluster accuracy",
                ],
              },
              {
                q: "Write short notes on: counter propagation networks (CPN).",
                marks: 7,
                appearances: ["Dec 2025"],
                outline: [
                  "Definition: instar competition + outstar association (Hecht-Nielsen, 1987)",
                  "Two-stage training: unsupervised clustering, then supervised association",
                  "One winner per input; output read from the winner's outstar weights",
                  "Forward-only variant maps input -> output without a reverse model",
                  "Speed advantage over back propagation; piecewise-constant accuracy",
                  "Uses: pattern association, inverse modelling, smoothing",
                ],
              },
            ],
          },
          {
            number: "3.5",
            title: "Adaptive Resonance Theory (ART 1)",
            body: [
              "Adaptive Resonance Theory (Grossberg and Carpenter) solves the stability–plasticity dilemma: how can a network keep learning new patterns (plasticity) without erasing the ones already learned (stability)? A plain competitive net suffers catastrophic forgetting — a new input can drag a learned weight vector away from its cluster. ART 1 adds a vigilance test: before learning, the network compares the input with the best-matching category, and only if the match is close enough does 'resonance' occur and learning happen; otherwise the unit is reset and the search continues, ending (if no category matches) in the creation of a brand-new category.",
              "The ART 1 architecture has two halves connected bottom-up and top-down. The comparison layer holds the input x; the recognition layer holds category cells with bottom-up weights (recognition) and top-down weights (expectations). Processing cycle: (1) the input activates the best-matching category bottom-up; (2) the category sends its top-down expectation (prototype vector c) back to the comparison layer; (3) the vigilance test computes the match ratio ‖x ∧ c‖ / ‖x‖ (binary AND of the input and prototype, divided by input magnitude) and compares it with the vigilance parameter ρ (0 < ρ ≤ 1); (4) ratio ≥ ρ — resonance: update the category's weights toward the input; ratio < ρ — reset that unit, suppress it, and try the next best match; (5) no candidate passes — allocate a fresh category.",
              "A worked vigilance computation: input x = (1, 0, 1, 1, 0) with ‖x‖ = 3; candidate prototype c = (1, 0, 1, 0, 0) with c ∧ x = (1, 0, 1, 0, 0), norm 3; ratio = 3/3 = 1.0 ≥ ρ = 0.7 — resonance, the category absorbs the pattern (its prototype becomes the intersection (1,0,1,0,0)). Now try c = (1, 1, 0, 0, 1): c ∧ x = (1, 0, 0, 0, 0), norm 1; ratio = 1/3 = 0.33 < 0.7 — reset, search elsewhere. ρ is the network's strictness dial: high ρ (near 1) creates many fine categories, low ρ merges patterns coarsely.",
              "Jun 2025 asked for the advantages of ART and the gain control; Nov 2023 asked for short notes on ART 1. Advantages: stability of learned categories (nothing is overwritten without passing vigilance), online learning from a stream of patterns, self-scaling category granularity via ρ, and no separate training phase. Gain control is the mechanism that keeps the two-thirds rule honest — the comparison layer needs input from both the external pattern and the top-down expectation (two of three possible sources) before it will transmit a signal, preventing spurious updates from noise or expectations alone.",
            ],
            keyTerms: [
              { term: "ART 1", definition: "Competitive network with a vigilance test that learns new categories only on resonance — stability plus plasticity." },
              { term: "Vigilance (rho)", definition: "Match threshold 0 < rho <= 1: high values create fine categories, low values merge them." },
              { term: "Resonance", definition: "The state where the top-down expectation matches the input closely enough for learning to proceed." },
              { term: "Gain control", definition: "The two-thirds rule: the comparison layer transmits only when both input and expectation (or bias) are present." },
              { term: "Stability-plasticity dilemma", definition: "Learning new patterns without erasing old ones — the problem ART was designed to solve." },
            ],
            diagram: {
              kind: "cycle",
              title: "The ART 1 recognition cycle",
              caption: "Match, test vigilance, resonate or reset — the loop that protects old categories from new inputs.",
              steps: [
                { label: "Input x presented", note: "comparison layer holds the pattern" },
                { label: "Best category fires", note: "bottom-up competition in the recognition layer" },
                { label: "Expectation returns", note: "top-down prototype c sent to the comparison layer" },
                { label: "Vigilance test", note: "||x AND c|| / ||x|| >= rho ?" },
                { label: "Resonate -> learn", note: "update the category weights" },
                { label: "Fail -> reset", note: "suppress and try the next category; none fits -> new category" },
              ],
            },
            table: {
              caption: "ART 1 parameters and behaviours.",
              headers: ["Item", "Value / rule", "Effect"],
              rows: [
                ["Vigilance rho", "0.7 typical; range (0, 1]", "strictness of the match test"],
                ["Match ratio", "||x AND c|| / ||x||", "fraction of the input the prototype explains"],
                ["Ratio >= rho", "resonance", "category learns; prototype becomes x AND c"],
                ["Ratio < rho", "reset", "unit suppressed; next-best category tried"],
                ["No match anywhere", "uncommitted unit", "a new category is created"],
                ["High rho", "near 1.0", "many fine-grained categories"],
                ["Low rho", "near 0", "few coarse categories, more merging"],
              ],
            },
            bullets: [
              "ART solves stability-plasticity: learn new patterns without erasing old categories.",
              "Cycle: bottom-up match -> top-down expectation -> vigilance test -> resonate or reset.",
              "Vigilance ratio: ||x AND c|| / ||x||; worked: 3/3 = 1.0 passes rho = 0.7; 1/3 = 0.33 resets.",
              "rho is the granularity dial: high = many fine categories, low = coarse merging.",
              "On reset the unit is suppressed and the next-best category is tried; none fits -> new category.",
              "Gain control (two-thirds rule) blocks updates unless input AND expectation are both present.",
              "Advantages: online learning, stable categories, self-scaling granularity, no training phase.",
            ],
            callout: {
              type: "exam",
              title: "Vigilance is the marks",
              body: "Both asked questions (Nov 2023 note, Jun 2025 advantages + gain control) turn on the vigilance test. Write the ratio formula, run one passing and one failing number, and explain what the network does on failure (reset, search, then a new category). Gain control = two-thirds rule, one sentence.",
            },
            examQuestions: [
              {
                q: "Write short notes on Adaptive Resonance Theory 1: architecture, the vigilance test, and the resonance/reset decision with a worked example.",
                marks: 7,
                appearances: ["Nov 2023"],
                outline: [
                  "Purpose: stability-plasticity dilemma — learn without forgetting",
                  "Architecture: comparison layer + recognition layer, bottom-up and top-down weights",
                  "Cycle: input -> best category -> expectation -> vigilance test",
                  "Ratio ||x AND c|| / ||x|| compared with rho",
                  "Worked: x = (1,0,1,1,0); c = (1,0,1,0,0) -> ratio 1.0 >= 0.7: resonance",
                  "Counter-example c = (1,1,0,0,1) -> ratio 0.33: reset and search",
                  "No match -> a new category is created",
                ],
              },
              {
                q: "What are the advantages of the ART network? Discuss gain control in the ART network.",
                marks: 7,
                appearances: ["Jun 2025"],
                outline: [
                  "Stability: learned categories are never overwritten without passing vigilance",
                  "Plasticity: new categories created online for unmatched patterns",
                  "Continuous learning from data streams — no separate training phase",
                  "Self-scaling granularity through the vigilance parameter rho",
                  "Gain control: the two-thirds rule at the comparison layer",
                  "Signal passes only when input AND top-down expectation (or bias) are both active",
                  "Prevents spurious learning from noise or expectation alone",
                ],
              },
            ],
          },
          {
            number: "3.6",
            title: "Convolutional neural networks (CNN)",
            body: [
              "A convolutional neural network is a feed-forward network built for grid-shaped data (images, spectrograms) whose hidden layers apply small learnable filters (kernels) locally across the input. Three ideas replace the fully connected layer: local connectivity (each unit sees only a small receptive field), weight sharing (the same kernel slides over every position, so a pattern learned in one corner is recognised everywhere), and pooling (downsampling that keeps the strongest response in each window, giving translation tolerance). The result is drastically fewer weights than a dense net and built-in spatial priors — exactly what images reward.",
              "The canonical stack is convolution → activation → pooling, repeated, then flattening and dense layers for the decision. A worked convolution shows the mechanics: input 3×3 matrix [[1,2,3],[4,5,6],[7,8,9]], kernel 2×2 of all ones (a smoothing filter), stride 1. Four windows: top-left sums 1+2+4+5 = 12; top-right 2+3+5+6 = 16; bottom-left 4+5+7+8 = 24; bottom-right 5+6+8+9 = 28. Feature map: [[12,16],[24,28]] — one output per kernel position. Edge-detecting kernels (Sobel: [[-1,0,1],[-2,0,2],[-1,0,1]]) respond to intensity gradients; a CNN learns dozens of such kernels by back propagation instead of hand-coding them, early layers finding edges, deeper layers combining them into textures, parts and objects.",
              "A complete small architecture for digit recognition: input 28×28×1 → Conv 3×3, 8 filters → ReLU → pool 2×2 → Conv 3×3, 16 filters → ReLU → pool → flatten → dense 10-way softmax. Parameter count makes the efficiency visible: a dense layer from 784 pixels to 100 units needs 78,400 weights; a 3×3 convolution with 8 filters needs 8·9 = 72 weights, reused at every position. Weight sharing is the entire economy of the architecture, and it is why CNNs dominate vision benchmarks while dense networks drown.",
              "The papers ask CNN three ways: Nov 2023 short note, Dec 2024 'what is CNN and how does it work', Dec 2025 CNN vs RNN with applications. The full-mark answer defines local connectivity, weight sharing and pooling, runs one small convolution, names the stack, and closes with applications — image classification, object detection, medical imaging, face recognition. For the contrast half: CNN consumes grids with spatial locality; RNN consumes sequences with temporal dependence; CNN sees pictures, RNN reads sentences.",
            ],
            keyTerms: [
              { term: "Convolution", definition: "Sliding a small kernel over the input and computing a weighted sum at each position — the local feature detector." },
              { term: "Weight sharing", definition: "The same kernel is applied at every position, so learned features are translation-invariant." },
              { term: "Pooling", definition: "Downsampling (max or average over a window) that shrinks the map and tolerates small shifts." },
              { term: "Receptive field", definition: "The small input region one convolution unit sees — local connectivity." },
            ],
            diagram: {
              kind: "layers",
              title: "A CNN stack for image classification",
              caption: "Local kernels find edges, pooling tolerates shifts, dense layers decide — depth builds semantics.",
              layers: [
                { label: "Dense + softmax (10 classes)", note: "classification from flattened features" },
                { label: "Conv 3x3 (16 filters) + ReLU + pool", note: "parts and textures" },
                { label: "Conv 3x3 (8 filters) + ReLU + pool", note: "edges and gradients" },
                { label: "Input 28x28", note: "raw pixels" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "conv.py — one 2x2 kernel over a 3x3 input",
              code: `import numpy as np

X = np.array([[1,2,3],[4,5,6],[7,8,9]])
K = np.ones((2, 2))                      # smoothing kernel of all ones
H, W = X.shape[0]-1, X.shape[1]-1        # stride 1, valid positions

out = np.zeros((H, W))
for i in range(H):
    for j in range(W):
        out[i, j] = (X[i:i+2, j:j+2] * K).sum()   # one convolution output
print(out)                                # [[12 16] [24 28]]
# a CNN learns K by back propagation instead of hand-coding it`,
            },
            bullets: [
              "CNN ideas: local connectivity, weight sharing, pooling — built for grid data.",
              "Worked convolution: all-ones 2x2 kernel over [[1..9]] gives [[12,16],[24,28]].",
              "Stack: Conv -> ReLU -> Pool, repeated, then flatten -> dense -> softmax.",
              "Weight-sharing economics: 8 filters x 9 weights = 72 params vs 78,400 for a dense 784-100 layer.",
              "Early layers learn edges; deeper layers combine into textures, parts, objects.",
              "Applications: image classification, object detection, medical imaging, face recognition.",
              "vs RNN: grids and spatial locality vs sequences and temporal dependence.",
            ],
            callout: {
              type: "exam",
              title: "Three sessions, one mechanism",
              body: "Nov 2023 short note, Dec 2024 'what is CNN and how does it work', Dec 2025 CNN vs RNN. The mechanism trio (local connectivity, weight sharing, pooling) plus one small convolution is the core; the parameter-count comparison (72 vs 78,400) is the sentence that shows you understand why CNNs exist.",
            },
            examQuestions: [
              {
                q: "What is a Convolutional Neural Network (CNN) and how does it work? Explain local connectivity, weight sharing and pooling with a worked convolution.",
                marks: 7,
                appearances: ["Dec 2024"],
                outline: [
                  "Definition: feed-forward net for grid data using local learnable kernels",
                  "Local connectivity: each unit sees a small receptive field",
                  "Weight sharing: one kernel slides over all positions — translation invariance",
                  "Worked convolution: 2x2 all-ones kernel over [[1..9]] -> [[12,16],[24,28]]",
                  "Pooling: max/average downsampling tolerates small shifts",
                  "Stack: Conv-ReLU-Pool blocks then dense softmax",
                  "Applications: classification, detection, medical imaging",
                ],
              },
              {
                q: "Write short notes on: convolution neural networks (CNN).",
                marks: 7,
                appearances: ["Nov 2023"],
                outline: [
                  "Purpose: grid-shaped inputs (images, spectrograms)",
                  "Three mechanisms: local connectivity, weight sharing, pooling",
                  "Feature hierarchy: edges -> textures -> parts -> objects",
                  "Parameter economy: 3x3x8 = 72 weights vs tens of thousands dense",
                  "Trained end-to-end by back propagation",
                  "Applications: vision tasks, face recognition, medical image analysis",
                ],
              },
            ],
          },
          {
            number: "3.7",
            title: "Recurrent neural networks (RNN)",
            body: [
              "A recurrent neural network processes sequences by keeping a hidden state: at each time step the network consumes the current input x_t and its own previous state h_{t−1}, and emits the new state h_t = tanh(W_h·h_{t−1} + W_x·x_t + b). The loop back through h is what a feed-forward network lacks — state and memory — so the output at time t depends on everything the network has seen so far, not just the current input. The same weights are reused at every step (the temporal analogue of CNN weight sharing), which is what lets a short network process sequences of arbitrary length.",
              "A worked state trace shows memory forming. Take W_x = 0.5, W_h = 0.5, b = 0, h0 = 0, and inputs (1, 1, 0): h1 = tanh(0.5·0 + 0.5·1) = tanh(0.5) = 0.462; h2 = tanh(0.5·0.462 + 0.5·1) = tanh(0.731) = 0.625; h3 = tanh(0.5·0.625 + 0.5·0) = tanh(0.312) = 0.302. Each state blends the new input with a decayed trace of history — the network remembers, with forgetting built in. Variants extend the memory: vanilla RNNs struggle with long sequences (vanishing gradients through many tanh squashes), so gated cells — LSTM with input/forget/output gates, GRU with update/reset gates — learn what to keep and what to erase.",
              "Training unrolls the recurrence through time: the loop is drawn as a deep feed-forward network of T copies sharing weights, and back propagation through time (BPTT) applies the ordinary chain rule across the copies. The exam contrast (Dec 2025) is CNN vs RNN with applications: CNN = spatial grids, translation-invariant filters, vision applications; RNN = temporal sequences, shared state, applications in language modelling, speech, machine translation, time-series prediction. Dec 2024's recurrent vs non-recurrent networks belongs to the same answer: loops give state and memory; feed-forward is stateless — same input, same output, always.",
              "The syllabus phrasing is 'introduction to CNN and RNN', so the expected depth is architecture, one worked step, the training idea (BPTT), and applications — not the internal gate equations of LSTM. Draw the unrolled diagram with the three h-states and arrows labelled W_h; it makes the shared-weight structure visible and doubles as the feed-forward/recurrent contrast the papers keep asking.",
            ],
            keyTerms: [
              { term: "Hidden state h_t", definition: "The RNN's running memory — a function of all inputs seen so far." },
              { term: "Recurrent connection", definition: "The loop feeding h_{t-1} back into the computation of h_t." },
              { term: "BPTT", definition: "Back propagation through time — unrolling the loop and applying the chain rule across the copies." },
              { term: "LSTM / GRU", definition: "Gated RNN cells that learn what to remember and forget, curing the vanishing-gradient memory loss." },
            ],
            diagram: {
              kind: "compare",
              title: "CNN vs RNN",
              caption: "Grids versus sequences — the two architectures the syllabus introduces together.",
              left: {
                heading: "CNN",
                items: [
                  "Input: spatial grids (images, spectrograms)",
                  "Mechanism: local kernels + weight sharing + pooling",
                  "Strength: translation-invariant spatial features",
                  "Applications: classification, detection, medical imaging",
                ],
              },
              right: {
                heading: "RNN",
                items: [
                  "Input: sequences (text, speech, time series)",
                  "Mechanism: hidden state loop, weights shared across time",
                  "Strength: memory of context — output depends on history",
                  "Applications: language modelling, translation, forecasting",
                ],
              },
            },
            table: {
              caption: "Recurrent vs non-recurrent networks.",
              headers: ["Aspect", "Feed-forward (non-recurrent)", "Recurrent"],
              rows: [
                ["Connections", "strictly input -> output", "outputs/hidden loop back as inputs"],
                ["State", "stateless — same input, same output", "stateful — depends on history"],
                ["Memory", "none", "hidden state carries context"],
                ["Training", "back propagation", "back propagation through time (unrolled)"],
                ["Examples", "perceptron, ADALINE, MLP, CNN", "Hopfield network, RNN, LSTM"],
                ["Natural task", "static pattern classification", "sequences: text, speech, time series"],
              ],
            },
            bullets: [
              "RNN update: h_t = tanh(W_h*h_{t-1} + W_x*x_t + b) — input blended with memory.",
              "Worked trace (W = 0.5): inputs (1,1,0) give states 0.462, 0.625, 0.302.",
              "Weights shared across time steps — arbitrary-length sequences, fixed parameters.",
              "Trained by unrolling through time and applying back propagation (BPTT).",
              "Vanilla RNN forgets long context (vanishing gradients); LSTM/GRU gates fix it.",
              "CNN vs RNN: spatial grids with local kernels vs temporal sequences with state.",
              "Applications: language modelling, machine translation, speech, time-series prediction.",
            ],
            callout: {
              type: "exam",
              title: "The paired-contrast question",
              body: "Dec 2025 asked CNN vs RNN with application examples; Dec 2024 asked recurrent vs non-recurrent. Both are table answers: input type, mechanism, memory, examples. Run the three-step state trace — it is the only numeric content in the topic and instantly distinguishes a memorised list from understanding.",
            },
            examQuestions: [
              {
                q: "Differentiate between convolutional neural networks (CNN) and recurrent neural networks (RNN) with examples of their applications.",
                marks: 7,
                appearances: ["Dec 2025"],
                outline: [
                  "CNN: grid inputs; local kernels, weight sharing, pooling; spatial features",
                  "CNN applications: image classification, object detection, medical imaging",
                  "RNN: sequence inputs; hidden state loop, weights shared across time",
                  "Worked state trace: (1,1,0) with W=0.5 -> h = 0.462, 0.625, 0.302",
                  "RNN applications: language modelling, translation, speech, time series",
                  "Training: back propagation (CNN) vs back propagation through time (RNN)",
                  "Memory: CNN translation invariance; RNN context dependence",
                ],
              },
              {
                q: "Distinguish between recurrent and non-recurrent networks with one example of each and explain how a recurrent network is trained.",
                marks: 7,
                appearances: ["Dec 2024"],
                outline: [
                  "Non-recurrent: strictly feed-forward, stateless (perceptron, MLP)",
                  "Recurrent: loops return hidden/output values as inputs (Hopfield, RNN)",
                  "Recurrent networks have state: output depends on past inputs",
                  "Worked trace: h_t = tanh(0.5*h_{t-1} + 0.5*x_t) over inputs (1,1,0)",
                  "Training: unroll through T time steps into a shared-weight deep net",
                  "Back propagation through time applies the chain rule across the unroll",
                  "Gated cells (LSTM, GRU) extend usable memory length",
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
      title: "Fuzzy Set",
      summary:
        "Unit IV replaces true/false with degrees of truth: the introduction and basic definitions of fuzzy sets, properties and set-theoretic operations, membership functions and their assignment, fuzzy relations and composition, fuzzy rules and reasoning, fuzzy if-then rules, fuzzy inference systems with defuzzification, and applications of fuzzy logic in engineering.",
      chapter: {
        number: "04",
        title: "Computing with Degrees of Truth",
        intro:
          "Unit IV covers fuzzy set definitions and terminology, properties and set-theoretic operations with worked evaluations, membership functions and assignment methods, fuzzy relations and max-min composition, fuzzy rules and reasoning, fuzzy inference systems (Mamdani vs Sugeno) with defuzzification, and engineering applications including neuro-fuzzy hybrids.",
        inOneBreath:
          "A fuzzy set maps each element to a membership grade in [0,1]; union is max, intersection is min, complement is 1 - mu; relations compose by max-min; if-then rules fire partially and their clipped consequents aggregate before defuzzification (centroid is the default); Mamdani keeps fuzzy outputs, Sugeno collapses them to functions; engineering applications abound because real variables are gradual.",
        sections: [
          {
            number: "4.1",
            title: "Fuzzy sets: introduction, definitions and terminology",
            body: [
              "A fuzzy set is a set whose membership is a matter of degree: a universe of discourse X is paired with a membership function μ_A: X → [0, 1], and element x belongs to A with grade μ_A(x). A crisp (classical) set is the special case where μ is only 0 or 1 — 'tall' as 'height ≥ 180 cm' puts 179.9 cm outside and 180.1 inside; the fuzzy 'tall' ramps smoothly from 0 to 1 across 160-190 cm, so 175 cm might belong at 0.5. Fuzzy logic exists because human categories are gradual: warm, fast, heavy, risky have no natural cliff edge.",
              "The terminology is the exam's vocabulary section, and each term is one membership grade away from the diagram. Support: elements with μ > 0. Core: elements with μ = 1. Boundary: elements with 0 < μ < 1. Height: the maximum membership attained (a normal fuzzy set has height 1). Cardinality: the sum of membership grades — |A| = Σ μ_A(x). Crossover point: the element(s) at μ = 0.5. Alpha-cut (lambda-cut, Dec 2024 asked it as a short note): the crisp set A_α = {x | μ_A(x) ≥ α} — slicing the fuzzy set at level α recovers a crisp set, the standard bridge from fuzzy to classical mathematics.",
              "A worked example fixes the vocabulary. Universe X = {a, b, c, d, e}, μ_A = (0.1, 0.5, 1.0, 0.5, 0.0). Support = {a, b, c, d}; core = {c}; boundary = {a, b, d}; height = 1.0 (normal); cardinality = 0.1 + 0.5 + 1.0 + 0.5 = 2.1; crossover points = {b, d}; the 0.5-cut A_0.5 = {b, c, d}; the 0.6-cut = {c} only. Every term is now a number, which is how the examiner wants them — each definition anchored to the example.",
              "The notation matters as much as the terms: Zadeh's sum form A = 0.1/a + 0.5/b + 1.0/c + 0.5/d (where '+' is union, not addition) is how the papers write fuzzy sets — Dec 2024's numerical used exactly this form. Read the introduction question as: define fuzzy set and membership function, give the terminology list against one example, state the alpha-cut bridge, and contrast with the crisp case — then the operations section (4.2) becomes mechanical.",
            ],
            keyTerms: [
              { term: "Fuzzy set", definition: "A set defined by a membership function mu_A: X -> [0,1] assigning degrees of belonging." },
              { term: "Support / core / boundary", definition: "Elements with mu > 0 / mu = 1 / 0 < mu < 1 respectively." },
              { term: "Height and normality", definition: "Height = max mu_A; a fuzzy set is normal when its height is 1." },
              { term: "Alpha-cut (lambda-cut)", definition: "The crisp set A_alpha = {x | mu_A(x) >= alpha} — the bridge from fuzzy to crisp." },
              { term: "Cardinality", definition: "Sum of all membership grades |A| = sum_x mu_A(x)." },
            ],
            diagram: {
              kind: "pyramid",
              title: "Anatomy of a fuzzy set (top = full membership)",
              caption: "Core, boundary, support — three rings of decreasing membership around the universe.",
              tiers: [
                { label: "Core (mu = 1)", note: "fully inside: {c}" },
                { label: "Boundary (0 < mu < 1)", note: "partial: {a(0.1), b(0.5), d(0.5)}" },
                { label: "Support (mu > 0)", note: "everything above zero: {a, b, c, d}" },
                { label: "Universe (mu = 0)", note: "outside: {e}" },
              ],
            },
            table: {
              caption: "Terminology evaluated on mu = (0.1, 0.5, 1.0, 0.5, 0.0) over {a, b, c, d, e}.",
              headers: ["Term", "Definition", "Value in the example"],
              rows: [
                ["Support", "elements with mu > 0", "{a, b, c, d}"],
                ["Core", "elements with mu = 1", "{c}"],
                ["Boundary", "0 < mu < 1", "{a, b, d}"],
                ["Height", "maximum membership", "1.0 (normal set)"],
                ["Cardinality", "sum of grades", "2.1"],
                ["0.5-cut", "elements with mu >= 0.5", "{b, c, d}"],
              ],
            },
            bullets: [
              "Fuzzy set: membership in degrees — mu_A(x) in [0,1] — versus crisp 0/1 membership.",
              "Zadeh notation: A = 0.1/a + 0.5/b + 1.0/c (the '+' is union, not arithmetic).",
              "Worked vocabulary: support {a,b,c,d}, core {c}, height 1.0, cardinality 2.1.",
              "Alpha-cut slices the fuzzy set into a crisp one: A_0.5 = {b, c, d}.",
              "Lambda-cuts were a Dec 2024 short note — know the definition and one evaluation.",
              "'Tall' example: crisp 180 cm cliff vs fuzzy ramp — why fuzzy logic exists.",
            ],
            callout: {
              type: "exam",
              title: "Anchor every term to numbers",
              body: "Terminology questions are marked per term. Give the one-example table (support, core, boundary, height, cardinality, alpha-cut) and evaluate each line on the same five-element example — six definitions with six numbers beats six abstract sentences every time.",
            },
            examQuestions: [
              {
                q: "Write short notes on: lambda-cuts for fuzzy sets. Evaluate the 0.5-cut and 0.6-cut of A = 0.1/a + 0.5/b + 1.0/c + 0.5/d.",
                marks: 7,
                appearances: ["Dec 2024"],
                outline: [
                  "Definition: A_alpha = {x | mu_A(x) >= alpha} — a crisp set sliced at level alpha",
                  "Properties: (A_alpha)_' complement = A_(1-alpha)+; union of cuts = cut of the max",
                  "Alpha = 1 gives the core; alpha -> 0+ gives the support",
                  "0.5-cut of A: elements with mu >= 0.5 = {b, c, d}",
                  "0.6-cut: only {c}",
                  "Lambda-cuts convert fuzzy mathematics into crisp mathematics for computation",
                ],
              },
              {
                q: "Define a fuzzy set and its membership function. Explain support, core, boundary, height, cardinality and crossover points with a common worked example.",
                marks: 7,
                outline: [
                  "Fuzzy set: mu_A: X -> [0,1]; crisp sets are the 0/1 special case",
                  "Worked set: mu = (0.1, 0.5, 1.0, 0.5, 0.0) on {a,b,c,d,e}",
                  "Support {a,b,c,d}; core {c}; boundary {a,b,d}",
                  "Height 1.0 -> normal; cardinality 2.1",
                  "Crossover points: elements at mu = 0.5 -> {b, d}",
                  "Zadeh sum notation with '+' meaning union",
                  "'Tall' contrast: crisp cliff vs fuzzy ramp",
                ],
              },
            ],
          },
          {
            number: "4.2",
            title: "Properties and set-theoretic operations",
            body: [
              "Fuzzy set operations extend union, intersection and complement to grades, with the standard (Zadeh) definitions: union μ_{A∪B} = max(μ_A, μ_B); intersection μ_{A∩B} = min(μ_A, μ_B); complement μ_{A'} = 1 − μ_A; and difference A − B = A ∩ B′ = min(μ_A, 1 − μ_B). Algebraic variants exist (probabilistic sum a + b − ab; algebraic product ab) but the exam expects max-min-complement unless a question specifies otherwise. Membership-wise evaluation is the entire skill: apply the formula element by element, element by element.",
              "A worked pair on a common universe: A = 0.6/a + 0.4/b + 0.8/c, B = 0.9/a + 0.2/b + 0.3/c. Union: max element-wise = 0.9/a + 0.4/b + 0.8/c. Intersection: min = 0.6/a + 0.2/b + 0.3/c. Complement of A: 0.4/a + 0.6/b + 0.2/c. Difference A − B = min(μ_A, 1 − μ_B): a → min(0.6, 0.1) = 0.1; b → min(0.4, 0.8) = 0.4; c → min(0.8, 0.7) = 0.7, giving 0.1/a + 0.4/b + 0.7/c. Every answer is one line per element.",
              "The properties carry over mostly, and the exceptions are the exam's favourite subtleties. Fuzzy union/intersection are commutative, associative, distributive, idempotent, and satisfy De Morgan's laws — (A ∪ B)′ = A′ ∩ B′ and (A ∩ B)′ = A′ ∪ B′. Two laws fail: the law of excluded middle A ∪ A′ ≠ X (a element with μ = 0.6 gives max(0.6, 0.4) = 0.6, not 1) and the law of contradiction A ∩ A′ ≠ ∅ (min(0.6, 0.4) = 0.4, not 0). Fuzzy sets are only partially additive — an element can be 0.6 in A and 0.4 in A′ simultaneously, which is the entire philosophical point of degrees of truth.",
              "The December 2024 numerical asked to determine A₁ − A₂ for A₁ = 0.2/X₁ + 0.9/X₂ and A₂ = 0.3/Y₁ + 0.5/Y₂ + 1/Y₃ — sets on different universes. The method: take the common universe X ∪ Y = {X₁, X₂, Y₁, Y₂, Y₃}, extend each set with zeros outside its own universe, then apply the element-wise rule: A₁ − A₂ = min(μ_{A₁}, 1 − μ_{A₂}) gives 0.2/X₁ + 0.9/X₂ (the Y-side terms die since min(0, 1−μ) = 0), and A₁ + A₂ read as union gives 0.2/X₁ + 0.9/X₂ + 0.3/Y₁ + 0.5/Y₂ + 1/Y₃. Jun 2025 and Dec 2025 asked the general properties-and-operations essay; Nov 2023 listed properties as a short note — one worked example serves every phrasing.",
            ],
            keyTerms: [
              { term: "Fuzzy union", definition: "mu_AuB = max(mu_A, mu_B) element-wise (Zadeh standard)." },
              { term: "Fuzzy intersection", definition: "mu_AnB = min(mu_A, mu_B) element-wise." },
              { term: "Fuzzy complement", definition: "mu_A' = 1 - mu_A; involutive: (A')' = A." },
              { term: "Fuzzy difference", definition: "A - B = A INTERSECT B' = min(mu_A, 1 - mu_B)." },
              { term: "Failed classical laws", definition: "Excluded middle and contradiction fail: A u A' != X and A n A' != empty." },
            ],
            diagram: {
              kind: "compare",
              title: "Crisp vs fuzzy set operations",
              caption: "Same three operations, different arithmetic — 0/1 logic becomes max/min/complement.",
              left: {
                heading: "Crisp operations",
                items: [
                  "Union: membership 0 or 1 (OR)",
                  "Intersection: both conditions must hold (AND)",
                  "Complement: flip the bit (NOT)",
                  "A u A' = X and A n A' = empty hold exactly",
                ],
              },
              right: {
                heading: "Fuzzy operations (Zadeh)",
                items: [
                  "Union: max(mu_A, mu_B)",
                  "Intersection: min(mu_A, mu_B)",
                  "Complement: 1 - mu_A",
                  "A u A' != X and A n A' != empty — laws fail by design",
                ],
              },
            },
            codeExample: {
              language: "python",
              caption: "fuzzy_ops.py — the worked pair, computed",
              code: `import numpy as np

# universe {a, b, c}; Zadeh operations are element-wise
A = np.array([0.6, 0.4, 0.8])
B = np.array([0.9, 0.2, 0.3])

union        = np.maximum(A, B)            # [0.9 0.4 0.8]
intersection = np.minimum(A, B)            # [0.6 0.2 0.3]
complement_A = 1 - A                       # [0.4 0.6 0.2]
difference   = np.minimum(A, 1 - B)        # [0.1 0.4 0.7]

print("A u B:", union, "| A n B:", intersection)
print("A' :", complement_A, "| A - B:", difference)
print("A u A' (not X!):", np.maximum(A, 1 - A))`,
            },
            bullets: [
              "Zadeh operations: union = max, intersection = min, complement = 1 - mu.",
              "Difference: A - B = min(mu_A, 1 - mu_B), element-wise.",
              "Worked: A=(0.6,0.4,0.8), B=(0.9,0.2,0.3) -> union (0.9,0.4,0.8), intersection (0.6,0.2,0.3).",
              "Dec 2024 numerical: sets on different universes — extend with zeros, then apply the rule.",
              "Commutative, associative, distributive, idempotent, De Morgan all hold.",
              "Excluded middle and contradiction fail: max(0.6,0.4)=0.6 and min(0.6,0.4)=0.4.",
              "Partial membership in A and A' simultaneously is the philosophical point of fuzzy logic.",
            ],
            callout: {
              type: "exam",
              title: "The numerical appeared verbatim",
              body: "Dec 2025 asked properties + set-theoretic operations with examples; Dec 2024 gave the two-universe numerical (A1 on X, A2 on Y); Jun 2025 asked properties and operations; Nov 2023 listed properties as a short note. Prepare one worked example plus the two failing laws — they are asked as the 'difference from classical sets' kicker.",
            },
            examQuestions: [
              {
                q: "Explain the properties of fuzzy sets and their set-theoretic operations with examples, including the laws that fail for fuzzy sets.",
                marks: 7,
                appearances: ["Dec 2025", "Nov 2023"],
                outline: [
                  "Union = max, intersection = min, complement = 1 - mu (Zadeh)",
                  "Worked: A=(0.6,0.4,0.8), B=(0.9,0.2,0.3) -> all four operations element-wise",
                  "Difference A - B = min(mu_A, 1 - mu_B) = (0.1, 0.4, 0.7)",
                  "Commutative, associative, distributive, idempotent, De Morgan hold",
                  "Excluded middle fails: A u A' = (0.6, 0.6, 0.8) != X",
                  "Contradiction fails: A n A' = (0.4, 0.4, 0.2) != empty",
                  "Interpretation: partial membership in a set and its complement",
                ],
              },
              {
                q: "Consider two fuzzy sets A1 = 0.2/X1 + 0.9/X2 and A2 = 0.3/Y1 + 0.5/Y2 + 1/Y3. Determine A1 - A2 and A1 + A2.",
                marks: 7,
                appearances: ["Dec 2024"],
                outline: [
                  "Universes differ: take common universe {X1, X2, Y1, Y2, Y3}",
                  "Extend with zeros: A1 = (0.2, 0.9, 0, 0, 0); A2 = (0, 0, 0.3, 0.5, 1.0)",
                  "A1 - A2 = min(mu_A1, 1 - mu_A2) element-wise",
                  "X1: min(0.2, 1) = 0.2; X2: min(0.9, 1) = 0.9",
                  "Y-side: min(0, 0.7) = min(0, 0.5) = min(0, 0) = 0",
                  "A1 - A2 = 0.2/X1 + 0.9/X2",
                  "A1 + A2 (union) = 0.2/X1 + 0.9/X2 + 0.3/Y1 + 0.5/Y2 + 1/Y3",
                ],
              },
              {
                q: "Explain various properties and operations of fuzzy sets.",
                marks: 7,
                appearances: ["Jun 2025"],
                outline: [
                  "Definitions: union (max), intersection (min), complement (1 - mu)",
                  "Element-wise evaluation on one worked pair",
                  "Algebraic variants: probabilistic sum a + b - ab, algebraic product ab",
                  "Properties holding: commutativity, associativity, distributivity, idempotence, De Morgan",
                  "Properties failing: excluded middle, law of contradiction",
                  "Involution of complement: (A')' = A",
                  "Alpha-cut consistency: cuts of unions/intersections follow the same max/min pattern",
                ],
              },
            ],
          },
          {
            number: "4.3",
            title: "Membership functions and their assignment",
            body: [
              "A membership function (MF) is the curve μ_A(x) mapping each element of the universe to its degree of membership in A — the entire content of a fuzzy set, since everything else is derived from it. The standard shapes are triangular (three parameters a, b, c rising linearly to μ = 1 at b and falling to 0 at c), trapezoidal (four parameters with a flat top — the workhorse of control engineering), Gaussian (exp(−(x − c)²/2σ²) — smooth, differentiable, the natural choice when learning MFs by neural methods), and sigmoidal (for 'greater than'-type concepts). Piecewise-linear shapes dominate practice because they are cheap to evaluate and easy to specify by hand.",
              "A worked evaluation on the triangular MF μ(x; 10, 20, 40) (rise 10→20, fall 20→40): at x = 15, μ = (15 − 10)/(20 − 10) = 0.5; at x = 20, μ = 1; at x = 30, μ = (40 − 30)/(40 − 20) = 0.5; at x = 45, μ = 0. Two variables of the same concept ('warm') are then overlapped — cold, warm, hot as three triangles covering the range — so every real temperature belongs partially to two neighbouring sets, and the grades at each point sum to about 1. Overlap is not sloppiness; it is what makes fuzzy control smooth.",
              "Assignment methods are how a real MF is obtained, and the syllabus expects the list. Intuition: the expert's feel for the concept (temperature comfort zones) — the default for control problems. Inference: derive memberships from known facts and logical rules. Rank ordering: ask human judges to rank pairs of elements and convert the preference matrix into grades (the pairwise-comparison method). Neural networks: learn MFs from data by tuning their parameters with training examples (the neuro-fuzzy bridge — Dec 2024 and Jun 2025 asked its application areas). Genetic algorithms: tune MF parameters as chromosomes. Angle/counting methods for specific measurement contexts (e.g. membership of 'a group of n people' by statistical counts).",
              "The exam question is usually 'membership functions and their assignment' as one unit. Answer: the four shape formulas with a triangular evaluation, the intuition/inference/rank-ordering/neural/GA assignment list with one use case each, and the closing line that MF choice is the modeller's responsibility — fuzzy logic does not discover its own membership functions, it encodes the expert's (or the data's) view of gradualness.",
            ],
            keyTerms: [
              { term: "Membership function", definition: "The curve mu_A(x) in [0,1] defining a fuzzy set over its universe." },
              { term: "Triangular / trapezoidal MF", definition: "Piecewise-linear shapes specified by 3 or 4 breakpoints — the control-engineering defaults." },
              { term: "Gaussian MF", definition: "exp(-(x - c)^2 / (2*sigma^2)) — smooth and differentiable, suited to learning." },
              { term: "Rank ordering", definition: "Assigning memberships from human pairwise preference rankings." },
              { term: "Intuition", definition: "Membership assignment from expert feel — the default method in control design." },
            ],
            diagram: {
              kind: "pipeline",
              title: "Assigning a membership function",
              caption: "From concept to curve: pick the shape, then pick the assignment method that fits the data available.",
              stages: [
                { label: "Name the concept", note: "'warm', 'fast', 'risky' — a gradual predicate" },
                { label: "Choose a shape", note: "triangular / trapezoidal / Gaussian / sigmoidal" },
                { label: "Assign parameters", note: "intuition / inference / rank ordering / neural / GA" },
                { label: "Overlap the sets", note: "neighbouring MFs share the range for smooth control" },
                { label: "Validate", note: "check grades on real values; adjust breakpoints" },
              ],
            },
            table: {
              caption: "Membership function shapes and assignment methods.",
              headers: ["Item", "Formula / method", "Best used when"],
              rows: [
                ["Triangular MF", "rise to 1 at b, fall to 0 at c", "cheap hand-designed control rules"],
                ["Trapezoidal MF", "flat top between b and c", "a range is fully inside the concept"],
                ["Gaussian MF", "exp(-(x-c)^2 / 2*sigma^2)", "smooth learning (neuro-fuzzy systems)"],
                ["Intuition", "expert judgement of the ramp", "control problems with human knowledge"],
                ["Rank ordering", "pairwise human preferences -> grades", "no numeric scale exists"],
                ["Neural / GA", "learn or tune MF parameters from data", "data available; neuro-fuzzy hybrid systems"],
              ],
            },
            bullets: [
              "MF = the curve defining a fuzzy set; everything else derives from it.",
              "Triangular evaluation: mu(15) = 0.5, mu(20) = 1, mu(30) = 0.5 for (10, 20, 40).",
              "Trapezoidal adds a flat core; Gaussian is smooth and learnable; sigmoidal models thresholds.",
              "Assignment methods: intuition, inference, rank ordering, neural networks, GA.",
              "Neuro-fuzzy hybrids learn MF parameters from data — the syllabus's application-area question.",
              "Overlap neighbouring MFs deliberately so every input belongs partially to two sets.",
              "MF choice is the modeller's responsibility — fuzzy logic encodes gradualness, it does not invent it.",
            ],
            callout: {
              type: "tip",
              title: "Evaluate, do not draw only",
              body: "Membership questions earn marks with numbers. Pick one triangular MF, evaluate it at three points (0.5 / 1.0 / 0.5), and name two assignment methods with use cases. A sketched triangle alone reads as half an answer.",
            },
            examQuestions: [
              {
                q: "Explain membership functions and their assignment. Describe the standard shapes with formulas and the intuition, rank-ordering, neural and GA assignment methods.",
                marks: 7,
                outline: [
                  "MF: mu_A(x) in [0,1] — the definition of a fuzzy set",
                  "Triangular (a,b,c): worked mu(15)=0.5, mu(20)=1, mu(30)=0.5 for (10,20,40)",
                  "Trapezoidal: flat core; Gaussian: smooth exp form; sigmoidal: threshold concepts",
                  "Intuition: expert feel for the ramp (control engineering default)",
                  "Rank ordering: pairwise human preferences converted to grades",
                  "Neural/GA: learn or tune MF parameters from data (neuro-fuzzy bridge)",
                  "Overlapping MFs give smooth transitions between concepts",
                ],
              },
              {
                q: "For the triangular membership function mu(x; 10, 20, 40), evaluate mu at x = 15, 20, 30 and 45, and explain why neighbouring membership functions should overlap.",
                marks: 7,
                outline: [
                  "Rising edge: mu(15) = (15-10)/(20-10) = 0.5",
                  "Peak: mu(20) = 1.0",
                  "Falling edge: mu(30) = (40-30)/(40-20) = 0.5",
                  "Outside: mu(45) = 0",
                  "Overlap lets each real value belong partially to two neighbouring sets",
                  "Grades from both sets drive multiple rules — smooth, gradual control",
                  "No overlap would give crisp switching and jumpy outputs",
                ],
              },
            ],
          },
          {
            number: "4.4",
            title: "Fuzzy relations and composition",
            body: [
              "A fuzzy relation R on universes X × Y assigns a membership grade to every ordered pair: R = ∫ μ_R(x, y)/(x, y), written as a matrix when the universes are discrete — the fuzzy generalisation of a relation table. 'x is similar to y', 'x depends on y', 'x is much greater than y' are all fuzzy relations: grades replace the yes/no of classical relations. Operations carry over from fuzzy sets element-wise (union = max, intersection = min, complement = 1 − μ), and the new operation that relations uniquely own is composition — chaining R (X→Y) with S (Y→Z) to obtain R∘S (X→Z).",
              "Max-min composition is the standard chain: μ_{R∘S}(x, z) = max over y of min(μ_R(x, y), μ_S(y, z)) — 'there is some y connecting x to z through both relations, and the best such connection is the max of the weakest links'. Max-product composition replaces min with algebraic product and is used when grades multiply naturally. A worked computation: R (2×2) = [[0.6, 0.8], [0.2, 0.9]] on X×Y, S (2×2) = [[0.7, 0.5], [0.3, 1.0]] on Y×Z. Entry (1,1): max(min(0.6, 0.7), min(0.8, 0.3)) = max(0.6, 0.3) = 0.6. Entry (1,2): max(min(0.6, 0.5), min(0.8, 1.0)) = max(0.5, 0.8) = 0.8. Entry (2,1): max(min(0.2, 0.7), min(0.9, 0.3)) = max(0.2, 0.3) = 0.3. Entry (2,2): max(min(0.2, 0.5), min(0.9, 1.0)) = max(0.2, 0.9) = 0.9. Result: [[0.6, 0.8], [0.3, 0.9]].",
              "Properties of fuzzy relations that the exam lists: reflexivity (μ_R(x, x) = 1 — everything related to itself fully), symmetry (μ_R(x, y) = μ_R(y, x)), and transitivity in the fuzzy sense (R ⊇ R∘R — the relation contains its self-composition; classical transitivity's 'if xRy and yRz then xRz' becomes a graded condition). A similarity relation is reflexive, symmetric and transitive — the fuzzy equivalence relation, and max-min transitivity is defined exactly through the composition operation of the worked example.",
              "Jun 2025 asked 'what do you mean by fuzzy composition? Discuss its types' — the answer is the definition, the max-min formula with one full 2×2 computation (shown above), max-product as the second type, and the transitivity link. Keep the matrix arithmetic on the page: examiners mark the four min-max cells, not the prose around them.",
            ],
            keyTerms: [
              { term: "Fuzzy relation", definition: "A membership function mu_R: X x Y -> [0,1] assigning grades to ordered pairs." },
              { term: "Max-min composition", definition: "mu_RoS(x,z) = max_y min(mu_R(x,y), mu_S(y,z)) — chaining two relations." },
              { term: "Max-product composition", definition: "Composition using algebraic product instead of min as the linking operation." },
              { term: "Similarity relation", definition: "A fuzzy relation that is reflexive, symmetric and max-min transitive — fuzzy equivalence." },
            ],
            diagram: {
              kind: "flow",
              title: "One max-min composition cell",
              caption: "For each (x, z): take the weakest link along every path y, then keep the strongest path.",
              steps: [
                { label: "Pick the pair (x, z)", note: "the output cell to compute" },
                { label: "List paths via y", note: "every intermediate element of Y" },
                { label: "Weakest link per path", note: "min(mu_R(x,y), mu_S(y,z))" },
                { label: "Strongest path wins", note: "max over y of the minima" },
                { label: "Repeat for all cells", note: "fill the R o S matrix" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "composition.py — the worked max-min matrix",
              code: `import numpy as np

R = np.array([[0.6, 0.8], [0.2, 0.9]])   # relation on X x Y
S = np.array([[0.7, 0.5], [0.3, 1.0]])   # relation on Y x Z

# max-min composition: RoS[i,j] = max over k of min(R[i,k], S[k,j])
RoS = np.zeros_like(R)
for i in range(R.shape[0]):
    for j in range(S.shape[1]):
        RoS[i, j] = max(min(R[i, k], S[k, j]) for k in range(R.shape[1]))

print(RoS.round(1))    # [[0.6 0.8] [0.3 0.9]]`,
            },
            bullets: [
              "Fuzzy relation: grades on X x Y pairs, written as a matrix.",
              "Composition chains R (X->Y) with S (Y->Z) into R o S (X->Z).",
              "Max-min rule: for each (x,z), max over y of min(mu_R, mu_S).",
              "Worked: R = [[0.6,0.8],[0.2,0.9]], S = [[0.7,0.5],[0.3,1.0]] -> [[0.6,0.8],[0.3,0.9]].",
              "Max-product composition: replace min with algebraic product.",
              "Properties: reflexivity (mu(x,x)=1), symmetry, max-min transitivity (R >= R o R).",
              "Similarity relation = reflexive + symmetric + max-min transitive (fuzzy equivalence).",
            ],
            callout: {
              type: "exam",
              title: "Show all four cells",
              body: "Jun 2025 asked for composition and its types. Write the formula once, then compute every cell of a 2x2 example on the page — four min computations, four max choices. Partial answers that skip cells lose marks; the arithmetic is the answer.",
            },
            examQuestions: [
              {
                q: "What do you mean by fuzzy composition? Discuss its types with a worked max-min computation on 2x2 relations.",
                marks: 7,
                appearances: ["Jun 2025"],
                outline: [
                  "Composition: chaining R (X->Y) and S (Y->Z) into R o S (X->Z)",
                  "Max-min type: mu = max_y min(mu_R(x,y), mu_S(y,z))",
                  "Worked cells: (1,1) max(min(.6,.7), min(.8,.3)) = 0.6; (1,2) = 0.8",
                  "(2,1) = 0.3; (2,2) = 0.9 -> result [[0.6,0.8],[0.3,0.9]]",
                  "Max-product type: min replaced by algebraic product",
                  "Interpretation: strongest path where each path is as strong as its weakest link",
                  "Links to transitivity: R max-min transitive iff R >= R o R",
                ],
              },
              {
                q: "Define fuzzy relation and explain reflexivity, symmetry and transitivity in the fuzzy sense. What is a similarity relation?",
                marks: 7,
                outline: [
                  "Fuzzy relation: mu_R(x, y) grades on the product universe",
                  "Reflexive: mu_R(x, x) = 1 for every x",
                  "Symmetric: mu_R(x, y) = mu_R(y, x)",
                  "Transitive (max-min): R contains its self-composition R o R",
                  "Classical 'if xRy and yRz then xRz' becomes a graded condition",
                  "Similarity relation: reflexive + symmetric + max-min transitive",
                  "Similarity relations generalise equivalence relations and cluster data hierarchically",
                ],
              },
            ],
          },
          {
            number: "4.5",
            title: "Fuzzy rules, if-then rules and fuzzy reasoning",
            body: [
              "A fuzzy rule is an implication between linguistic variables: IF x is A THEN y is B, where A and B are fuzzy sets (antecedent and consequent). A fuzzy if-then rule is not a logical implication with a truth value — it is a partial mapping: when the antecedent holds with grade μ_A(x), the consequent B is activated with that same grade, producing a clipped or scaled fuzzy set rather than a crisp fact. A rule base is a set of such rules covering the combinations of the input variables; a two-input system with 3 MFs per input has 3 × 3 = 9 canonical rules, typically written as a table.",
              "Fuzzy reasoning (generalised modus ponens) is the inference mechanism: given the rule 'IF x is A THEN y is B' and the fact 'x is A′', the conclusion is 'y is B′' where B′ is A′'s match with A propagated through B. The classical case (A′ = A exactly) gives B′ = B; the fuzzy case gives graded conclusions — the rule fires partially. The two classical operations for applying a rule are Mamdani min implication (clip the consequent at μ_A(x): B′ = min(μ_B, μ_A(x))) and Larsen product implication (scale it: B′ = μ_A(x)·μ_B). Multiple rules then aggregate — usually by max (union of the clipped consequents) — into one combined output fuzzy set, which section 4.6 defuzzifies.",
              "A worked single-rule inference: rule 'IF temperature is hot THEN fan speed is fast', where hot = trapezoid over 25-35 °C and fast = triangle peaking at 9 on a 0-10 scale. At 30 °C, μ_hot = 1.0: fan consequent fires fully (triangle intact). At 27 °C, μ_hot = 0.6: the fast triangle is clipped at 0.6 — a trapezoid with flat top 0.6. At 20 °C, μ_hot = 0: the rule contributes nothing. With a second rule 'IF temperature is warm THEN fan is medium' also firing at 0.4, the aggregate output is max(min-medium-at-0.4, clipped-fast-at-0.6) — two bumps merged into one shape.",
              "The exam contrast (Dec 2025) is fuzzy vs conventional reasoning: conventional logic admits only true/false — a rule is applicable or not, and modus ponens is bivalent; fuzzy reasoning admits degrees — antecedents match partially, rules fire partially, and conclusions are fuzzy sets to be defuzzified. Nov 2023 asked 'fuzzy rules and reasoning' as a short note: give the rule form, the firing-grade idea, min vs Larsen implication, aggregation, and one numeric clip (0.6) — that is the full note.",
            ],
            keyTerms: [
              { term: "Fuzzy if-then rule", definition: "IF x is A THEN y is B, firing with the antecedent's grade rather than as a bivalent implication." },
              { term: "Generalised modus ponens", definition: "From rule IF A THEN B and fact A', conclude B' — a graded propagation of the match through B." },
              { term: "Mamdani (min) implication", definition: "Clip the consequent at the antecedent grade: B' = min(mu_B, mu_A(x))." },
              { term: "Larsen (product) implication", definition: "Scale the consequent: B' = mu_A(x) * mu_B." },
              { term: "Aggregation", definition: "Combining all fired rules' output sets (usually by max) into one fuzzy set for defuzzification." },
            ],
            diagram: {
              kind: "fork",
              title: "How hard does a rule fire?",
              caption: "The antecedent grade decides the consequent's fate — full, clipped, or silent.",
              start: "Evaluate IF x is A THEN y is B",
              branches: [
                { label: "Antecedent grade = 1", outcome: "consequent B fires fully — unclipped", good: true },
                { label: "Antecedent grade in (0, 1)", outcome: "B clipped/scaled to that grade — partial firing", good: true },
                { label: "Antecedent grade = 0", outcome: "rule contributes nothing to the aggregate", good: false },
              ],
            },
            table: {
              caption: "A canonical 2-input rule base (temperature x change).",
              headers: ["Rule", "IF temperature", "AND change", "THEN fan"],
              rows: [
                ["R1", "cold", "falling", "off"],
                ["R2", "warm", "steady", "medium"],
                ["R3", "hot", "rising", "fast"],
                ["R4", "hot", "steady", "medium"],
                ["R5", "warm", "rising", "medium"],
              ],
            },
            bullets: [
              "Fuzzy rule: IF x is A THEN y is B — fires with the antecedent's membership grade.",
              "Generalised modus ponens: fact A' propagates through B to a graded conclusion B'.",
              "Mamdani implication clips the consequent; Larsen scales it by the grade.",
              "Worked clip: mu_hot = 0.6 at 27 C -> fast triangle clipped at 0.6.",
              "Multiple fired rules aggregate by max into one output fuzzy set.",
              "Rule base size: 3 MFs per input on 2 inputs = 9 canonical rules.",
              "vs conventional reasoning: degrees instead of true/false; partial firing instead of all-or-none.",
            ],
            callout: {
              type: "exam",
              title: "Two sessions, same skeleton",
              body: "Nov 2023 asked fuzzy rules and reasoning; Dec 2025 asked if-then rules plus the contrast with conventional logic. One skeleton serves both: rule form, firing grade, min vs Larsen implication, aggregation by max, one numeric clip, and the bivalent-vs-graded closing contrast.",
            },
            examQuestions: [
              {
                q: "Explain fuzzy if-then rules with an example. How does fuzzy reasoning differ from conventional logic reasoning?",
                marks: 7,
                appearances: ["Dec 2025"],
                outline: [
                  "Rule form: IF x is A THEN y is B with fuzzy antecedent and consequent",
                  "Firing: the rule activates with grade mu_A(x) — partial, not bivalent",
                  "Worked: 'IF hot THEN fast' at 27 C clips the fast triangle at 0.6",
                  "Mamdani min implication vs Larsen product implication",
                  "Multiple rules aggregate by max into one output set",
                  "Conventional logic: true/false, modus ponens is bivalent, no partial firing",
                  "Fuzzy reasoning: graded match, graded conclusion, defuzzification needed",
                ],
              },
              {
                q: "Discuss in brief fuzzy rules and reasoning.",
                marks: 7,
                appearances: ["Nov 2023"],
                outline: [
                  "Linguistic variables and fuzzy sets as rule vocabulary",
                  "Canonical rule base: one rule per combination of input MFs (9 for 3x3)",
                  "Firing strength = antecedent membership grade",
                  "Implication: clip (Mamdani) or scale (Larsen) the consequent",
                  "Aggregation of fired rules by max",
                  "Numeric clip example: grade 0.6 flattens the triangle's top",
                  "Output is a fuzzy set — defuzzification turns it into a control action",
                ],
              },
            ],
          },
          {
            number: "4.6",
            title: "Fuzzy inference systems and defuzzification",
            body: [
              "A fuzzy inference system (FIS) is the complete mapping machine: crisp inputs → fuzzification (each input's grade in every input MF) → rule evaluation (each rule's antecedent grade, typically min over AND-ed antecedents) → implication (clip or scale each rule's consequent) → aggregation (max over fired rules' output sets) → defuzzification (collapse the aggregate fuzzy set into one crisp output). Nov 2023 asked for the block diagram; Dec 2025 asked to construct a temperature-control FIS with rules. The five blocks in order, each labelled with its operation, are the diagram — draw them left to right with the rule base feeding the inference engine.",
              "The two FIS families differ at the last stage. Mamdani FIS (the classical form) keeps outputs fuzzy: consequents are MFs, aggregated, then defuzzified — intuitive, matches expert rules, but defuzzification costs computation. Sugeno (TSK) FIS makes each consequent a function of the inputs (typically 'z = a·x + b·y' or a constant): the aggregate output is the weighted average Σ w_i·z_i / Σ w_i of the per-rule function values, where w_i is rule i's firing strength — no fuzzy output set, cheap and exact for control and ideal for neuro-fuzzy learning. Rule of thumb: expert-elicited rules → Mamdani; data-derived or optimised controllers → Sugeno.",
              "Defuzzification methods (Jun 2025 asked for 'various methods') map the aggregate fuzzy set to one number. Centroid (centre of gravity): z* = ∫μ(z)·z dz / ∫μ(z) dz — the default, smooth and balanced; bisector: the vertical line splitting the area in half; mean of maxima (MOM): average of all z with maximum membership; smallest of maxima (SOM) / largest of maxima (LOM): the extreme ends of the max-plateau; weighted average (Sugeno form): Σw_i·z_i/Σw_i. Worked centroid on a discrete aggregate μ = {0.2 at 2, 0.6 at 4, 0.8 at 6, 0.6 at 8, 0.2 at 10}: Σμ·z = 14.4, Σμ = 2.4, z* = 6.0 — the balance point of the merged bumps.",
              "Dec 2025's construction question wants a worked FIS, not a diagram alone: temperature control with inputs temperature (cold/warm/hot) and change (falling/steady/rising), output fan (off/medium/fast), five rules as in 4.5's table, evaluation at 27 °C rising — hot fires at 0.6 and rising at 0.7, so rule R3 fires at min(0.6, 0.7) = 0.6; R5 (warm ∧ rising) fires at min(0.5, 0.7) = 0.5; the two clipped triangles aggregate by max; the centroid lands near 6.5-7 on the fan scale. Write the min-firing computation and the centroid division — those two numbers are what the examiner checks.",
            ],
            keyTerms: [
              { term: "Fuzzy inference system", definition: "Fuzzification -> rule evaluation -> implication -> aggregation -> defuzzification mapping crisp inputs to crisp outputs." },
              { term: "Mamdani FIS", definition: "Fuzzy consequents aggregated then defuzzified — intuitive, expert-style." },
              { term: "Sugeno (TSK) FIS", definition: "Consequents are input functions; output = weighted average of per-rule values — cheap and optimisation-friendly." },
              { term: "Defuzzification", definition: "Collapsing the aggregate fuzzy set into one crisp number (centroid, bisector, MOM, SOM, LOM)." },
              { term: "Centroid", definition: "z* = integral of mu*z over integral of mu — the balance point; the default defuzzifier." },
            ],
            diagram: {
              kind: "pipeline",
              title: "The fuzzy inference system",
              caption: "Five blocks from crisp inputs to a crisp action — the diagram Nov 2023 asked for.",
              stages: [
                { label: "Crisp inputs", note: "temperature, change" },
                { label: "Fuzzification", note: "grades in every input MF" },
                { label: "Rule evaluation + implication", note: "min-firing; clip/scale consequents" },
                { label: "Aggregation", note: "max over fired rules' output sets" },
                { label: "Defuzzification", note: "centroid -> crisp control action" },
              ],
            },
            table: {
              caption: "Mamdani vs Sugeno, and the defuzzification menu.",
              headers: ["Item", "Definition / formula", "When used"],
              rows: [
                ["Mamdani FIS", "fuzzy consequents, aggregate, defuzzify", "expert-elicited rules; interpretability"],
                ["Sugeno FIS", "consequent z = f(x); output = sum(w_i*z_i)/sum(w_i)", "data-driven control; neuro-fuzzy tuning"],
                ["Centroid", "integral(mu*z)/integral(mu)", "default — balanced, smooth"],
                ["Bisector", "splits the area into equal halves", "similar to centroid, faster"],
                ["MOM / SOM / LOM", "mean / smallest / largest of maximum-membership points", "when only the peak matters"],
                ["Weighted average", "sum(w_i*z_i)/sum(w_i)", "Sugeno outputs; discrete speed"],
              ],
            },
            codeExample: {
              language: "python",
              caption: "defuzz.py — centroid of the worked aggregate",
              code: `import numpy as np

z  = np.array([2, 4, 6, 8, 10])          # output universe samples
mu = np.array([0.2, 0.6, 0.8, 0.6, 0.2]) # aggregated (max) membership

centroid = np.sum(mu * z) / np.sum(mu)   # balance point of the bumps
print(f"centroid z* = {centroid:.2f}")   # 6.00
# Mamdani keeps this fuzzy set; Sugeno would average the rule outputs instead`,
            },
            bullets: [
              "FIS pipeline: fuzzify -> evaluate rules -> imply -> aggregate -> defuzzify.",
              "Rule firing: min over AND-ed antecedents; worked R3 = min(0.6, 0.7) = 0.6.",
              "Mamdani keeps fuzzy outputs; Sugeno replaces them with input functions and a weighted average.",
              "Centroid worked example: sum(mu*z) = 14.4, sum(mu) = 2.4 -> z* = 6.0.",
              "Other defuzzifiers: bisector, MOM, SOM, LOM, weighted average.",
              "Expert rules -> Mamdani; data-optimised control -> Sugeno (neuro-fuzzy friendly).",
              "Dec 2025 construction: five rules, min-firing numbers, centroid division on the page.",
            ],
            callout: {
              type: "exam",
              title: "Diagram + two numbers",
              body: "Nov 2023 wanted the block diagram; Jun 2025 wanted defuzzification methods; Dec 2025 wanted a constructed FIS. The full-mark bundle is the five-block diagram, the Mamdani/Sugeno contrast, the defuzzifier list, and one numeric firing (min(0.6, 0.7) = 0.6) plus one centroid (14.4/2.4 = 6.0).",
            },
            examQuestions: [
              {
                q: "Explain in detail the block diagram of a fuzzy inference system, describing the operation of each block.",
                marks: 7,
                appearances: ["Nov 2023"],
                outline: [
                  "Block 1 fuzzification: crisp inputs -> membership grades in every input MF",
                  "Block 2 rule evaluation: antecedent grades combined by min (AND) / max (OR)",
                  "Block 3 implication: clip (Mamdani) or scale (Larsen) each consequent by firing strength",
                  "Block 4 aggregation: max over fired rules' output fuzzy sets",
                  "Block 5 defuzzification: centroid/bisector/MOM -> one crisp output",
                  "Rule base + database (MF definitions) feed the inference engine",
                  "Mamdani vs Sugeno differ in blocks 3-5",
                ],
              },
              {
                q: "Explain the various methods of defuzzification with formulas and one worked centroid computation.",
                marks: 7,
                appearances: ["Jun 2025"],
                outline: [
                  "Centroid: z* = integral(mu*z)/integral(mu) — balance point, the default",
                  "Worked: mu = (0.2,0.6,0.8,0.6,0.2) at z = (2,4,6,8,10) -> 14.4/2.4 = 6.0",
                  "Bisector: vertical line halving the area",
                  "MOM: mean of all maximum-membership points; SOM/LOM its extremes",
                  "Weighted average: sum(w_i*z_i)/sum(w_i) — the Sugeno defuzzifier",
                  "Trade-offs: centroid is smooth but costly; maxima methods are fast but jump",
                  "Choice affects controller smoothness and computation",
                ],
              },
              {
                q: "Construct a fuzzy inference system for temperature control using appropriate fuzzy rules, and evaluate it at a sample input.",
                marks: 7,
                appearances: ["Dec 2025"],
                outline: [
                  "Inputs: temperature (cold/warm/hot), change (falling/steady/rising)",
                  "Output: fan speed (off/medium/fast) as triangular MFs",
                  "Rule base: five canonical rules (e.g. IF hot AND rising THEN fast)",
                  "Fuzzify 27 C: hot = 0.6, warm = 0.5; change rising = 0.7",
                  "R3 fires at min(0.6, 0.7) = 0.6; R5 at min(0.5, 0.7) = 0.5",
                  "Aggregate the clipped fast and medium triangles by max",
                  "Centroid lands near 6.5-7 on the fan scale",
                ],
              },
            ],
          },
          {
            number: "4.7",
            title: "Applications of fuzzy logic and neuro-fuzzy systems",
            body: [
              "Fuzzy logic earns its place wherever a variable is gradual and a human rule exists: control engineering is the flagship — washing machines (load size and dirtiness → wash time and detergent), air conditioners and refrigerators (temperature comfort bands), automatic transmissions and traction control, camera autofocus and exposure, and anti-lock braking where wheel-slip tolerance matters. Beyond control: decision support (credit scoring, risk assessment), image processing (edge detection and contrast enhancement with fuzzy rules), signal processing, and pattern classification. Nov 2023 asked to 'list and explain the applications'; Dec 2025 asked for applications 'in solving engineering problems' — the answer is the list with one mechanism line each.",
              "Two engineering cases show why fuzzy beats crisp control. Case 1 — washing machine: inputs dirtiness (small/medium/large), load (light/medium/heavy); rules like 'IF dirt is large AND load is heavy THEN wash time is long'; a crisp controller would need hard thresholds that over-wash light-soiled heavy loads; the fuzzy rules grade the response, saving water, energy and fabric. Case 2 — air conditioner: comfort is a band, not a setpoint; fuzzy rules over temperature error and its rate of change (cooling harder when the room is both hot and heating up) produce smooth actuator motion without the on/off oscillation of thermostat control — the classic 'warm → moderate cooling' example of section 1.1 made operational.",
              "Neuro-fuzzy hybrid systems combine the pillars: a neural network learns or tunes the fuzzy system's parameters — membership function shapes, rule weights, or Sugeno consequent coefficients — from data, while the fuzzy layer keeps the knowledge interpretable. The standard pattern (ANFIS, Jang 1993) is a Sugeno FIS whose consequent parameters are learned by gradient descent and whose MF parameters by back propagation: fuzzy gives structure, neural gives calibration. Dec 2024 asked 'neuro hybrid system' as a short note; Jun 2025 asked for the application areas of neuro-fuzzy hybrids: control of nonlinear plants, function approximation with interpretable models, decision support with learned rule weights, and fault diagnosis where symptoms are gradual.",
              "The exam answer pattern is fixed: (1) list application domains with one mechanism line each — control, decision support, image processing, classification; (2) give one worked control case with its inputs, MFs and rules; (3) explain the hybrid idea — neural learning of fuzzy parameters — and name ANFIS; (4) close with why fuzzy suits engineering problems: no precise model needed, human knowledge encoded directly, smooth graded control around thresholds.",
            ],
            keyTerms: [
              { term: "Fuzzy control", definition: "Rule-based control with linguistic IF-THEN rules over membership functions — the flagship application." },
              { term: "Neuro-fuzzy system", definition: "A hybrid where a neural network learns or tunes the fuzzy system's parameters from data." },
              { term: "ANFIS", definition: "Adaptive Neuro-Fuzzy Inference System — a Sugeno FIS trained by back propagation and gradient descent." },
              { term: "Interpretability", definition: "The learned knowledge stays in readable rules and MFs — the hybrid's advantage over a black-box network." },
            ],
            diagram: {
              kind: "fork",
              title: "Where fuzzy logic solves engineering problems",
              caption: "Application domains and the mechanism each one exploits.",
              start: "A gradual variable plus human knowledge",
              branches: [
                { label: "Appliance and process control", outcome: "washing machines, AC, ABS — graded rules replace hard thresholds", good: true },
                { label: "Decision support", outcome: "credit scoring, risk assessment with linguistic rules", good: true },
                { label: "Image and signal processing", outcome: "fuzzy edge detection, contrast enhancement, smoothing", good: true },
                { label: "Crisp binary thresholds only", outcome: "plain Boolean logic is cheaper — do not use fuzzy", good: false },
              ],
            },
            table: {
              caption: "Application areas and their fuzzy mechanisms.",
              headers: ["Domain", "Inputs (linguistic)", "Output", "Why fuzzy helps"],
              rows: [
                ["Washing machine", "dirtiness, load size", "wash time, detergent", "gradual response saves water and fabric"],
                ["Air conditioner", "temperature error, rate of change", "cooling power", "smooth actuation, no on/off oscillation"],
                ["Automotive (ABS, transmission)", "wheel slip, speed, throttle", "brake force, gear", "tolerance bands beat crisp thresholds"],
                ["Decision support", "income stability, debt ratio", "credit risk", "human rules stay interpretable"],
                ["Image processing", "pixel contrast, gradient", "edge strength", "graded edges, robust to noise"],
                ["Neuro-fuzzy (ANFIS)", "any of the above", "tuned MFs and rules", "data calibrates the expert's structure"],
              ],
            },
            bullets: [
              "Control engineering is the flagship: washing machines, ACs, ABS, cameras, transmissions.",
              "Fuzzy wins where variables are gradual and human rules exist — no precise plant model needed.",
              "Worked case: AC rules over error and its rate produce smooth cooling without oscillation.",
              "Decision support: credit scoring and risk assessment keep interpretable linguistic rules.",
              "Image processing: fuzzy edge detection and contrast enhancement are noise-robust.",
              "Neuro-fuzzy hybrids: neural learning tunes MFs, rule weights, Sugeno consequents (ANFIS).",
              "Nov 2023 and Dec 2025 both asked the applications list — prepare the table.",
            ],
            callout: {
              type: "exam",
              title: "Two sessions, one list, one hybrid",
              body: "Nov 2023 asked to list and explain fuzzy applications; Dec 2025 asked applications in engineering problems; Dec 2024 had 'neuro hybrid system' as a short note and Jun 2025 asked neuro-fuzzy application areas. One table + the ANFIS paragraph covers all four phrasings — do not prepare them separately.",
            },
            examQuestions: [
              {
                q: "List and explain the applications of fuzzy logic, with one worked control example (inputs, membership functions, rules).",
                marks: 7,
                appearances: ["Nov 2023"],
                outline: [
                  "Control: washing machine (dirt, load -> wash time), AC, ABS, cameras",
                  "Worked AC case: error hot 0.6, rising 0.7 -> rule fires at 0.6, fan fast-ish",
                  "Decision support: credit scoring, risk assessment with linguistic rules",
                  "Image processing: fuzzy edge detection, contrast enhancement",
                  "Classification: gradual feature matching",
                  "Why fuzzy: no precise model needed; human knowledge encoded directly",
                  "Smooth graded control around thresholds instead of on/off switching",
                ],
              },
              {
                q: "Discuss the applications of fuzzy logic in solving engineering problems, including one detailed case and the advantages over crisp control.",
                marks: 7,
                appearances: ["Dec 2025"],
                outline: [
                  "Engineering domains: process control, automotive, appliances, power systems",
                  "Detailed case: air conditioner — inputs error and rate of change, output cooling",
                  "Rules: IF hot AND rising THEN strong cooling; IF warm THEN moderate",
                  "Firing grades blend rules; centroid defuzzification gives smooth actuation",
                  "vs crisp control: no threshold oscillation, no rule explosion at band edges",
                  "Advantages: tolerance of imprecision, interpretability, cheap computation",
                  "Hybrid note: neuro-fuzzy (ANFIS) tunes the rules and MFs from data",
                ],
              },
              {
                q: "Discuss the application areas of neuro-fuzzy hybrid systems.",
                marks: 7,
                appearances: ["Jun 2025"],
                outline: [
                  "Hybrid idea: fuzzy provides interpretable structure; neural learning calibrates it",
                  "ANFIS: Sugeno FIS trained by back propagation on MF and consequent parameters",
                  "Application 1: control of nonlinear plants without precise models",
                  "Application 2: function approximation with readable rules",
                  "Application 3: decision support with learned rule weights",
                  "Application 4: fault diagnosis where symptoms are gradual",
                  "Advantage over pure NN: interpretability; over pure fuzzy: data-calibrated accuracy",
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
      title: "Genetic Algorithm",
      summary:
        "Unit V optimizes by evolution: the introduction to GA and the simple genetic algorithm, terminology and operators — individual, gene, fitness, population, encoding, selection, crossover, mutation and convergence criteria — the schema theorem that explains why GAs work, GA applications to the travelling salesman problem and network design routing, and introductions to ant colony optimization and particle swarm optimization.",
      chapter: {
        number: "05",
        title: "Evolution as an Algorithm",
        intro:
          "Unit V covers GA introduction and simple GA, terminology and operators (encoding, selection, crossover, mutation, convergence), a worked population trace, the schema theorem and building blocks, TSP and network design routing applications, and swarm intelligence — ACO and PSO.",
        inOneBreath:
          "GA evolves a population of encoded candidates: fitness-proportionate selection, crossover recombines, mutation explores, generations repeat until convergence; the schema theorem says short low-order above-average schemata grow exponentially; TSP needs permutation encoding with order-based crossover; ACO marches pheromone trails, PSO glides particles toward personal and global bests.",
        sections: [
          {
            number: "5.1",
            title: "Introduction to genetic algorithms",
            body: [
              "A genetic algorithm (Holland, 1975) is a stochastic search method that mimics natural evolution: it maintains a population of candidate solutions (chromosomes), evaluates each by a fitness function, and breeds the next generation by selection, crossover and mutation. Nothing about the problem's shape is used — no gradient, no continuity, no derivative — only the fitness values. That is GA's defining advantage: it optimizes discrete, noisy, non-differentiable, multimodal search spaces where gradient methods have no footing, and it searches many points in parallel rather than walking a single trajectory.",
              "The contrast with classical optimization is the exam opener. Gradient descent needs a differentiable objective and follows one point downhill — trapped by the first local optimum. Exhaustive search needs a small space. GA samples stochastically across the space, recombines good partial solutions, and escapes local optima through mutation — it is a global search method with probabilistic guarantees rather than proofs. The price: no optimality certificate, tuning required (population size, rates), and fitness evaluations can be expensive — GA suits problems where evaluation is cheap relative to the search space's size.",
              "Two features make GA work, and Dec 2024 asked to state them. Feature 1 — population-based parallel search: many candidates explore simultaneously, and selection concentrates the search where fitness is high (exploitation) while mutation keeps sampling elsewhere (exploration). Feature 2 — recombination of building blocks: crossover splices partial solutions (schemata, section 5.6) from different parents, so good substrings propagate independently of where they first appeared. The parallel GA variant distributes the population over processors — island models evolving subpopulations with occasional migration — which Dec 2024's question also asked; parallelism is natural because all fitness evaluations are independent.",
              "The exam answer for 'introduction to GA' is definition, inspiration (survival of the fittest), the feature list, the contrast with gradient and exhaustive search, and one line on when GA is the right tool — discrete or black-box objectives, multimodal landscapes, and combinatorial spaces like the TSP that section 5.7 develops.",
            ],
            keyTerms: [
              { term: "Genetic algorithm", definition: "Population-based stochastic search using selection, crossover and mutation on encoded candidates." },
              { term: "Fitness function", definition: "The objective measure that ranks candidates; the only problem knowledge GA receives." },
              { term: "Exploitation vs exploration", definition: "Selection concentrates on good regions; mutation keeps sampling new ones — the balance GA must strike." },
              { term: "Parallel (island) GA", definition: "Subpopulations evolved separately with occasional migration — natural parallelism for GA." },
            ],
            diagram: {
              kind: "compare",
              title: "GA vs classical optimization",
              caption: "No gradients, no single trajectory — a population searches the space in parallel.",
              left: {
                heading: "Gradient / classical methods",
                items: [
                  "Need differentiable, well-modelled objectives",
                  "Single-point trajectory — one candidate at a time",
                  "Trapped by the first local optimum",
                  "Convergence proofs where they apply",
                ],
              },
              right: {
                heading: "Genetic algorithm",
                items: [
                  "Needs only fitness values — black-box friendly",
                  "Population of candidates searched in parallel",
                  "Mutation escapes local optima probabilistically",
                  "No optimality certificate; rates need tuning",
                ],
              },
            },
            table: {
              caption: "When GA is the right tool.",
              headers: ["Problem property", "GA suitability", "Reason"],
              rows: [
                ["Objective differentiable, unimodal", "poor fit", "gradient methods are faster and provable"],
                ["Discrete / combinatorial (TSP, scheduling)", "excellent", "no gradient exists; space is huge"],
                ["Black-box, noisy evaluation", "excellent", "only fitness values are used"],
                ["Multimodal landscape", "good", "population + mutation escape local optima"],
                ["Expensive fitness evaluation", "caution", "GA needs many evaluations per generation"],
                ["Near-exact optimum required", "caution", "GA gives no optimality certificate"],
              ],
            },
            bullets: [
              "GA = population + fitness + selection + crossover + mutation (Holland, 1975).",
              "Uses no gradients or derivatives — only fitness values; black-box and discrete friendly.",
              "Feature 1: parallel search — many candidates, exploitation plus exploration.",
              "Feature 2: crossover recombines building blocks from different parents.",
              "Parallel GA: island model with migration — evaluations are independent, so it scales.",
              "Weaknesses: no optimality proof, rate tuning, many fitness evaluations.",
              "Right tool: TSP, scheduling, network design — combinatorial and multimodal spaces.",
            ],
            callout: {
              type: "exam",
              title: "State the two features",
              body: "Dec 2024 asked for any two features of GA plus the parallel GA. The two safest features: population-based parallel search with exploitation/exploration balance, and recombination of building blocks through crossover. Then one paragraph on the island model — subpopulations, occasional migration, natural parallelism.",
            },
            examQuestions: [
              {
                q: "State any two features of the genetic algorithm. Also discuss the parallel genetic algorithm.",
                marks: 7,
                appearances: ["Dec 2024"],
                outline: [
                  "Feature 1: population-based parallel search — many candidates at once",
                  "Exploitation by selection, exploration by mutation",
                  "Feature 2: recombination of building blocks via crossover",
                  "No gradient or derivative knowledge used — black-box friendly",
                  "Parallel GA: island model — subpopulations evolve independently",
                  "Migration exchanges best individuals between islands periodically",
                  "Scales naturally: fitness evaluations are independent",
                ],
              },
              {
                q: "Why can a genetic algorithm escape a local optimum that traps gradient descent? Explain the roles of population, selection and mutation.",
                marks: 7,
                outline: [
                  "Gradient descent follows one trajectory downhill",
                  "GA holds many candidates — some already sit near better optima",
                  "Selection concentrates future search around above-average candidates",
                  "Crossover recombines partial solutions from different regions",
                  "Mutation randomly flips bits — a path out of any basin",
                  "Exploitation/exploration balance is the tuning dial",
                  "Cost: no optimality certificate; many evaluations needed",
                ],
              },
            ],
          },
          {
            number: "5.2",
            title: "Terminology, encoding and the fitness function",
            body: [
              "GA vocabulary is biology borrowed for algorithms, and the exam expects each term precisely. Population: the set of candidate solutions alive in the current generation. Individual (chromosome): one candidate, encoded as a string — the data structure GA manipulates. Gene: one position (allele) in the chromosome; for binary encoding each gene is a bit. Genotype: the encoded string; phenotype: the decoded solution it represents. Fitness: the scalar that ranks individuals — the objective function, possibly scaled or transformed, and the ONLY problem knowledge the GA uses. Generation: one cycle of selection, crossover, mutation and replacement.",
              "Encoding (Jun 2025 asked for the schemes) is the design decision that makes or breaks a GA. Binary encoding: the classic — a 5-bit string encodes integers 0-31; crossover and mutation are trivial; poor for continuous, multimodal problems (Hamming cliffs: 01111 and 10000 are numerically adjacent but far apart bitwise). Permutation encoding: a sequence of symbols each used exactly once — the only correct encoding for TSP and scheduling; needs specialised crossover (order-based) because naive crossover creates duplicates. Value encoding: real numbers or arbitrary objects as genes — neural weights, task lists. Tree encoding: expressions and programs as parse trees (genetic programming). The rule: choose the encoding that makes every valid chromosome a valid solution.",
              "The fitness function maps a decoded phenotype to one scalable number, and Dec 2024 asked its role and the requirements of GA. Role: it is the selection pressure — relative fitness decides who reproduces, so a badly scaled fitness (one candidate worth 10⁶, others worth 1) collapses selection to roulette-wheel noise. Requirements of a GA: an encoding covering all candidate solutions, a computable fitness function, a population large enough for diversity (typically 20-100), selection/crossover/mutation operators matched to the encoding, and convergence criteria (generations cap, fitness threshold, or stagnation). Worked scaling: raw values 169, 576, 64, 361 are divided by the total 1170 to give selection probabilities 0.14, 0.49, 0.05, 0.31 — fitness is only meaningful relatively.",
              "The exam answer assembles the table: term → meaning → example value on a 5-bit population; then the four encoding schemes with one 'when to use' line each; then the fitness role plus the requirements list. That three-part structure answers 'terminology and operators', 'encoding schemes' and 'fitness function' — three phrasings the papers have already used — from one preparation.",
            ],
            keyTerms: [
              { term: "Chromosome (individual)", definition: "One encoded candidate solution — the data structure GA evolves." },
              { term: "Gene / allele", definition: "One position in the chromosome and the value it carries." },
              { term: "Fitness function", definition: "The scalar ranking of decoded solutions — GA's only problem knowledge." },
              { term: "Binary encoding", definition: "Chromosomes as bit strings; classic, crossover-friendly, suffers Hamming cliffs." },
              { term: "Permutation encoding", definition: "Each symbol used exactly once — required for TSP and scheduling." },
            ],
            diagram: {
              kind: "pyramid",
              title: "GA terminology, nested from population to gene",
              caption: "Every exam term is one level of this pyramid.",
              tiers: [
                { label: "Population", note: "the set of individuals in one generation" },
                { label: "Individual (chromosome)", note: "one candidate, e.g. 01101" },
                { label: "Genes", note: "positions 0,1,1,0,1 — the string's bits" },
                { label: "Gene value (allele)", note: "one bit: 0 or 1" },
              ],
            },
            table: {
              caption: "Encoding schemes (Jun 2025 question).",
              headers: ["Scheme", "Chromosome form", "Typical use", "Caution"],
              rows: [
                ["Binary", "bit string, e.g. 01101", "knapsack, function optimisation", "Hamming cliffs at bit boundaries"],
                ["Permutation", "sequence, e.g. (A,B,C,D,E)", "TSP, job-shop scheduling", "needs order-based crossover, no duplicates"],
                ["Value", "real numbers / objects", "neural weight tuning, timetables", "custom operators per data type"],
                ["Tree", "parse tree of operations", "genetic programming (symbolic regression)", "crossover must respect tree structure"],
              ],
            },
            bullets: [
              "Population, individual, gene, allele, genotype, phenotype, fitness, generation — know all eight.",
              "Binary encoding: 5 bits cover integers 0-31; Hamming cliffs hurt continuous problems.",
              "Permutation encoding: every symbol once — mandatory for TSP; specialised crossover required.",
              "Value encoding for real parameters; tree encoding for programs (genetic programming).",
              "Fitness is the only problem knowledge; scale it or selection collapses.",
              "Worked: raw fitness 169/576/64/361 -> probabilities 0.14/0.49/0.05/0.31 over total 1170.",
              "GA requirements: encoding, computable fitness, adequate population, matched operators, convergence criteria.",
            ],
            callout: {
              type: "exam",
              title: "Three phrasings, one preparation",
              body: "Jun 2025 asked encoding schemes; Dec 2024 asked the fitness function's role and GA's requirements; both fold into the terminology question. Prepare the pyramid (population -> chromosome -> gene -> allele), the four-row encoding table, and the requirements list — every GA-opening question is answered by that bundle.",
            },
            examQuestions: [
              {
                q: "Explain the different encoding schemes used in genetic algorithms, with one example and one caution for each.",
                marks: 7,
                appearances: ["Jun 2025"],
                outline: [
                  "Binary: bit string 01101 encodes 13; caution: Hamming cliffs (01111 vs 10000)",
                  "Permutation: (A,B,C,D,E) each city once — mandatory for TSP",
                  "Permutation caution: naive crossover duplicates genes; use order-based operators",
                  "Value: real numbers or objects as genes (neural weights, timetables)",
                  "Tree: parse trees for symbolic regression / genetic programming",
                  "Design rule: every valid chromosome must decode to a valid solution",
                  "Encoding choice determines which operators are legal",
                ],
              },
              {
                q: "Mention the role of the fitness function in a genetic algorithm. What are the requirements of a genetic algorithm?",
                marks: 7,
                appearances: ["Dec 2024"],
                outline: [
                  "Fitness ranks candidates and drives selection pressure — the only problem knowledge",
                  "Relative fitness matters: normalise by the population total",
                  "Worked: values 169, 576, 64, 361 -> probabilities 0.14, 0.49, 0.05, 0.31",
                  "Bad scaling collapses selection; use scaling or ranking when ranges are extreme",
                  "Requirements: encoding covering all solutions",
                  "Computable fitness; population large enough for diversity (20-100)",
                  "Operators matched to encoding; explicit convergence criteria",
                ],
              },
              {
                q: "Define the GA terminology: population, individual, gene, fitness, generation, genotype and phenotype, with values from one 5-bit example.",
                marks: 7,
                outline: [
                  "Population: {01101, 11000, 01000, 10011}",
                  "Individual/chromosome: one string, e.g. 01101",
                  "Genes: its five bit positions; alleles: 0 or 1",
                  "Genotype = the string; phenotype = decoded value 13",
                  "Fitness: f(x) = x^2 -> 169 for 01101",
                  "Generation: one selection-crossover-mutation cycle",
                  "Data structure: the population as a list of fixed-length strings",
                ],
              },
            ],
          },
          {
            number: "5.3",
            title: "Selection operators",
            body: [
              "Selection decides which individuals become parents of the next generation, and its only input is fitness — this is where survival of the fittest is implemented. The classic operator is fitness-proportionate (roulette-wheel) selection: each individual i occupies a wheel slice proportional to f_i/Σf, and a spin (uniform random r in [0, 1]) lands on the individual whose cumulative slice covers r. Fitter individuals get proportionally more parent slots, but low-fitness individuals keep a chance — diversity survives, and with it the raw material crossover needs.",
              "A worked roulette spin: fitnesses 10, 20, 30, 40; total 100; probabilities 0.1, 0.2, 0.3, 0.4; cumulative boundaries 0.1, 0.3, 0.6, 1.0. A spin of r = 0.55 falls between 0.3 and 0.6 — individual 3 (fitness 30) is selected. Two practical defects follow from the arithmetic: super-fit individuals can dominate (premature convergence), and fitness must be non-negative with a sensible range. The standard repairs: stochastic universal sampling (one spin, n evenly spaced pointers — guarantees each individual's expected count ±1), rank selection (select by fitness rank, immune to scale), and tournament selection (pick k random individuals, the best wins — the modern default: simple, scale-free, adjustable pressure via k).",
              "Elitism is the operator that makes the arithmetic honest: copy the best individual(s) unchanged into the next generation, so the population's best fitness never decreases. Without elitism, roulette and crossover can destroy the current best — a GA that loses its champion wastes the generation. Typical setting: 1-2 elites per generation. Tournament selection with k = 3 or 4 plus elitism is the most common modern combination; fitness-proportionate selection remains the textbook answer and the exam's worked-arithmetic favourite.",
              "The exam question is usually embedded in the operator list (Dec 2025 asked selection, crossover and mutation together with the flowchart). Prepare: the roulette formula, one spin with cumulative boundaries, the two defects, the three repairs (SUS, rank, tournament), and the elitism sentence — then the same table serves the operator-comparison and short-note phrasings.",
            ],
            keyTerms: [
              { term: "Roulette-wheel selection", definition: "Parent slots proportional to fitness share f_i/sum(f); a random spin picks the parent." },
              { term: "Tournament selection", definition: "Pick k random individuals; the fittest wins a parent slot — scale-free and tunable via k." },
              { term: "Stochastic universal sampling", definition: "One spin with n evenly spaced pointers; each individual's expected count guaranteed within 1." },
              { term: "Elitism", definition: "Copying the best individual(s) unchanged to the next generation so the best fitness never falls." },
              { term: "Selection pressure", definition: "How strongly high fitness concentrates parent slots — the exploitation dial." },
            ],
            diagram: {
              kind: "fork",
              title: "Choosing a selection operator",
              caption: "All four implement survival of the fittest — the differences are scale-sensitivity and pressure control.",
              start: "Selecting parents from the population",
              branches: [
                { label: "Fitness-proportionate (roulette)", outcome: "worked spins; defect: super-fit domination, scale sensitivity", good: true },
                { label: "Rank selection", outcome: "select by rank, immune to fitness scaling", good: true },
                { label: "Tournament (k = 3-4)", outcome: "modern default; pressure tunable by k", good: true },
                { label: "No elitism anywhere", outcome: "the current best can be destroyed — add elites", good: false },
              ],
            },
            table: {
              caption: "Selection operators compared.",
              headers: ["Operator", "Mechanism", "Strength", "Weakness"],
              rows: [
                ["Roulette-wheel", "slices proportional to f_i/sum(f)", "classic, worked-arithmetic friendly", "scale-sensitive; super-fit domination"],
                ["Rank", "slices by fitness rank", "immune to scaling", "slower convergence early"],
                ["Tournament", "best of k random individuals wins", "simple, scale-free, tunable", "pressure depends on k"],
                ["SUS", "one spin, n spaced pointers", "zero sampling variance of counts", "still proportionate to raw fitness"],
                ["Elitism (add-on)", "best copied unchanged", "best fitness never decreases", "slight diversity loss"],
              ],
            },
            bullets: [
              "Roulette: probability p_i = f_i / sum(f); worked cumulative 0.1, 0.3, 0.6, 1.0.",
              "Spin r = 0.55 -> individual 3 selected (boundaries 0.3 to 0.6).",
              "Defects: scale sensitivity and super-fit domination (premature convergence).",
              "Repairs: SUS (evenly spaced pointers), rank selection, tournament with k = 3-4.",
              "Tournament + elitism is the modern default combination.",
              "Elitism guarantees the best fitness never decreases across generations.",
              "Selection is pure exploitation — crossover and mutation supply the exploration.",
            ],
            callout: {
              type: "exam",
              title: "One spin earns the marks",
              body: "Selection questions are arithmetic questions. Write p_i = f_i/sum(f), compute the four cumulative boundaries, resolve one spin r = 0.55, then name the two defects and three repairs. That sequence answers roulette, tournament, rank and SUS phrasings at once.",
            },
            examQuestions: [
              {
                q: "Explain selection in genetic algorithms. Compute one roulette-wheel spin for fitnesses 10, 20, 30, 40 and state the repairs for its weaknesses.",
                marks: 7,
                outline: [
                  "Selection = survival of the fittest applied to parent choice",
                  "Roulette: p_i = f_i/sum(f) = 0.1, 0.2, 0.3, 0.4",
                  "Cumulative boundaries: 0.1, 0.3, 0.6, 1.0",
                  "Spin r = 0.55 lands in (0.3, 0.6] -> individual 3 selected",
                  "Defects: scale sensitivity; super-fit domination -> premature convergence",
                  "Repairs: SUS, rank selection, tournament (k tunable pressure)",
                  "Elitism: copy the best unchanged so best fitness never decreases",
                ],
              },
              {
                q: "Why is elitism added to genetic algorithms, and what happens to the best solution without it?",
                marks: 7,
                outline: [
                  "Roulette and crossover can discard the current best individual",
                  "Without elitism the best fitness can drop between generations",
                  "Elitism copies the champion(s) unchanged into the next generation",
                  "Monotone best-fitness guarantee across generations",
                  "Typical setting: 1-2 elites; slight diversity cost",
                  "Combined with tournament selection in modern practice",
                ],
              },
            ],
          },
          {
            number: "5.4",
            title: "Crossover and mutation operators",
            body: [
              "Crossover recombines two parents into children — the operator that gives GA its power, because good partial solutions (building blocks) from different lineages are spliced together. For binary strings: one-point crossover picks a cut and swaps tails (11000 ⊗ 10011 at point 3 → 11011 and 10000); two-point picks two cuts and swaps the middle segment (fewer end-genes disrupted); uniform crossover flips each gene from either parent with probability 0.5 (maximum mixing, minimal structure preservation). Crossover probability p_c (typically 0.6-0.9) governs how many pairs actually cross; the rest copy through unchanged.",
              "Mutation is the diversity operator: random changes to genes — bit-flip for binary (each bit flips with probability p_m, typically 1/l or 0.01), swap/inversion/insertion for permutations, Gaussian perturbation for real-valued genes. Mutation's role is exploration and insurance: it reintroduces alleles the population lost, prevents premature convergence, and provides the only path to a value absent from the initial gene pool. Its rate is the exploration dial: too high and the search random-walks, destroying inherited structure; too low and diversity dies. Worked bit-flip: 01101 with its leftmost gene flipped (p_m hit) → 11101, fitness 169 → 841 — a single mutation improved the individual.",
              "The division of labour is the exam's conceptual line: crossover exploits by recombining existing structure (low disruption, high yield when the population holds good blocks); mutation explores by injecting novelty (high disruption, essential for escaping basins and restoring lost alleles). Dec 2025 asked both operators with the flowchart; the answer names each operator, gives one worked binary example each, states the probabilities (p_c 0.6-0.9, p_m ~0.01 = 1/l), and closes with the exploit/explore sentence.",
              "For permutation encodings (TSP, section 5.7) the operators change: naive one-point crossover duplicates cities and produces invalid tours, so order-based operators are used — order crossover (OX), partially mapped crossover (PMX), cycle crossover; and mutation becomes swap, inversion (reverse a segment) or insertion. State this in every GA answer that mentions TSP — the encoding-operator pairing is a favourite one-mark discriminator.",
            ],
            keyTerms: [
              { term: "One-point crossover", definition: "One cut; tails swapped between parents — the classic recombination operator." },
              { term: "Uniform crossover", definition: "Each gene taken from either parent with probability 0.5 — maximum mixing." },
              { term: "Bit-flip mutation", definition: "Each bit flips independently with probability p_m (about 1/l) — the diversity operator." },
              { term: "Crossover probability p_c", definition: "Fraction of pairs that cross; typically 0.6-0.9." },
              { term: "Order-based operators", definition: "OX/PMX crossover and swap/inversion mutation — the legal operators for permutation encodings." },
            ],
            diagram: {
              kind: "compare",
              title: "Crossover vs mutation",
              caption: "One operator recombines what exists; the other invents what does not.",
              left: {
                heading: "Crossover (exploitation)",
                items: [
                  "Two parents -> two children; structure spliced",
                  "One-point, two-point, uniform variants",
                  "p_c typically 0.6-0.9",
                  "Worked: 11000 x 10011 @3 -> 11011, 10000",
                ],
              },
              right: {
                heading: "Mutation (exploration)",
                items: [
                  "One individual; random gene changes",
                  "Bit-flip / swap / inversion / Gaussian",
                  "p_m about 1/l (0.01 for l = 100)",
                  "Worked: 01101 -> 11101 lifts fitness 169 -> 841",
                ],
              },
            },
            codeExample: {
              language: "python",
              caption: "operators.py — one-point crossover and bit-flip mutation",
              code: `import random

p1, p2 = [1,1,0,0,0], [1,0,0,1,1]

cut = 3                                        # one-point crossover at position 3
c1 = p1[:cut] + p2[cut:]                       # [1,1,0,1,1] = 27
c2 = p2[:cut] + p1[cut:]                       # [1,0,0,0,0] = 16

child = c1[:]                                  # bit-flip mutation on the child
gene = random.randrange(len(child))
child[gene] ^= 1                               # flip exactly one bit

print("children:", c1, c2, "| mutated:", child, "fitness:", sum(b << (4-i) for i, b in enumerate(child))**2)`,
            },
            bullets: [
              "Crossover recombines two parents; variants: one-point, two-point, uniform.",
              "Worked: 11000 x 10011 at cut 3 -> children 11011 (27) and 10000 (16).",
              "p_c governs how many pairs cross (0.6-0.9); non-crossing pairs copy through.",
              "Mutation: bit-flip for binary (p_m ~ 1/l), swap/inversion for permutations, Gaussian for reals.",
              "Worked mutation: 01101 -> 11101 lifts fitness 169 -> 841 in one flip.",
              "Roles: crossover exploits existing building blocks; mutation explores and restores lost alleles.",
              "Permutation encodings need order-based crossover (OX/PMX) and swap/inversion mutation.",
            ],
            callout: {
              type: "exam",
              title: "Probabilities and one flip",
              body: "Dec 2025 asked selection, crossover and mutation together. Quote p_c (0.6-0.9) and p_m (~1/l) with their roles, show one crossover producing two children and one bit-flip changing a fitness — four lines of arithmetic that turn a definition into evidence.",
            },
            examQuestions: [
              {
                q: "Explain the crossover and mutation operators of genetic algorithms with worked binary examples, and state their roles in exploration vs exploitation.",
                marks: 7,
                appearances: ["Dec 2025"],
                outline: [
                  "One-point crossover: 11000 x 10011 at cut 3 -> 11011 (27) and 10000 (16)",
                  "Two-point swaps the middle segment; uniform flips each gene 50/50",
                  "Crossover probability p_c = 0.6-0.9; role: recombine building blocks (exploitation)",
                  "Bit-flip mutation: 01101 -> 11101 raises fitness 169 -> 841",
                  "Mutation rate p_m ~ 1/l; role: exploration, restoring lost alleles",
                  "Too-high p_m random-walks; too-low p_m prematurely converges",
                  "Permutation encoding: OX/PMX crossover, swap/inversion mutation",
                ],
              },
              {
                q: "Why does naive one-point crossover fail on permutation encodings, and which operators replace it?",
                marks: 7,
                outline: [
                  "TSP chromosomes list each city exactly once",
                  "Cutting and swapping tails duplicates some cities and drops others",
                  "Result: invalid tours — not legal solutions",
                  "Order crossover (OX): copy a segment, fill the rest in the other parent's order",
                  "Partially mapped crossover (PMX): mapping repairs the swaps",
                  "Mutation becomes swap, inversion or insertion — always preserves validity",
                  "Encoding-operator pairing is the design rule",
                ],
              },
            ],
          },
          {
            number: "5.5",
            title: "The simple GA: a worked run and convergence criteria",
            body: [
              "The simple (canonical) genetic algorithm is one loop, and Dec 2025 asked for it as a flowchart with the operators named: initialise a random population → evaluate fitness of every individual → select parents (fitness-proportionate) → apply crossover with probability p_c → apply mutation with probability p_m → replace the population (with elitism) → repeat until a convergence criterion fires. Each pass is a generation; the fitness of the best individual is tracked across generations and is the quantity that must climb.",
              "A complete worked generation on the classic problem — maximize f(x) = x² over integers 0-31, binary encoding of length 5, population 4 — shows every operator with numbers. Initial population: 01101 (13), 11000 (24), 01000 (8), 10011 (19); fitnesses 169, 576, 64, 361; total 1170; selection probabilities 0.14, 0.49, 0.05, 0.31; expected copies 0.58, 1.97, 0.22, 1.22 — the mating pool fills roughly with one copy of 01101, two of 11000, two of 10011. Pair (11000, 10011), one-point crossover at cut 3: children 11011 (27) and 10000 (16). Mutation flips one bit in 01101 → 11101 (29, fitness 841; one more flip reaches 11111). New population's best: 11011 with fitness 729 — up from 576 in one generation. A few more generations reach 11111 (31, fitness 961).",
              "Convergence criteria (the syllabus lists them among the operators) are the loop's exit conditions, and the exam expects the list: maximum generations reached; fitness threshold achieved (best ≥ target); stagnation — best fitness unchanged for G consecutive generations (typical G = 20-50); population diversity collapse (average pairwise distance near zero — the search has converged, further runs are wasted compute). Practical GAs combine a stagnation test with a generations cap, since neither alone is safe: stagnation can fire during a plateau that mutation would eventually escape, and a generations cap alone wastes evaluations after convergence.",
              "Dec 2024's feature question and Jun 2025's operator questions are all served by this section's trace. In the exam, run the generation as a table — chromosome, decoded x, fitness, probability, expected copies — then the crossover and mutation lines with their arithmetic. The trace is short enough to fit in an answer booklet and demonstrates every operator at once, which is exactly why it has been the standard GA classroom example since Goldberg.",
            ],
            keyTerms: [
              { term: "Simple GA loop", definition: "Initialise -> evaluate -> select -> crossover -> mutate -> replace -> repeat." },
              { term: "Generation", definition: "One complete pass of the GA loop over the whole population." },
              { term: "Stagnation criterion", definition: "Stop when the best fitness is unchanged for G consecutive generations." },
              { term: "Diversity collapse", definition: "Population converging to near-identical strings — the signal that the search is over." },
            ],
            diagram: {
              kind: "flow",
              title: "The simple genetic algorithm flowchart",
              caption: "Six boxes and one loop — the diagram Dec 2025 asked for with operators named.",
              steps: [
                { label: "Initialise population", note: "random chromosomes, e.g. 4 x 5-bit strings" },
                { label: "Evaluate fitness", note: "f(x) = x^2 for each decoded individual" },
                { label: "Select parents", note: "roulette by fitness share; keep elites" },
                { label: "Crossover (p_c)", note: "recombine pairs; e.g. cut 3" },
                { label: "Mutate (p_m)", note: "bit-flips at about 1/l" },
                { label: "Converged?", note: "generations cap / threshold / stagnation -> else loop" },
              ],
            },
            table: {
              caption: "Generation 1 of the worked run: maximize f(x) = x^2 on 0-31.",
              headers: ["Chromosome", "x (decoded)", "Fitness x^2", "Selection probability"],
              rows: [
                ["01101", "13", "169", "169/1170 = 0.14"],
                ["11000", "24", "576", "576/1170 = 0.49"],
                ["01000", "8", "64", "64/1170 = 0.05"],
                ["10011", "19", "361", "361/1170 = 0.31"],
              ],
            },
            codeExample: {
              language: "python",
              caption: "ga.py — the worked run, runnable",
              code: `import random

pop = ["01101", "11000", "01000", "10011"]     # maximize x^2 on 0..31
fit = lambda s: int(s, 2) ** 2

for gen in range(5):
    scored = sorted(pop, key=fit, reverse=True)
    total = sum(fit(s) for s in pop)
    # fitness-proportionate parent pool (elitism: keep the best)
    pool = [scored[0]]
    while len(pool) < len(pop):
        r = random.random() * total
        acc = 0
        for s in pop:
            acc += fit(s)
            if acc >= r:
                pool.append(s); break
    pop = pool[:]
    # one-point crossover + one bit-flip mutation
    a, b = random.sample(range(len(pop)), 2)
    cut = random.randint(1, 4)
    pop[a] = pop[a][:cut] + pop[b][cut:]
    g = random.randrange(len(pop)); bit = random.randrange(5)
    pop[g] = pop[g][:bit] + str(1 - int(pop[g][bit])) + pop[g][bit+1:]
    print(gen + 1, "best:", max(pop, key=fit), fit(max(pop, key=fit)))`,
            },
            bullets: [
              "Loop: initialise -> evaluate -> select -> crossover (p_c) -> mutate (p_m) -> replace -> check convergence.",
              "Worked generation: fitnesses 169/576/64/361 -> probabilities 0.14/0.49/0.05/0.31.",
              "Crossover (11000, 10011) at cut 3 -> 11011 (fitness 729) beats 576 in one generation.",
              "Mutation 01101 -> 11101 (29) opens the path to 11111 (fitness 961).",
              "Convergence criteria: generations cap, fitness threshold, stagnation for G generations, diversity collapse.",
              "Combine stagnation with a cap — neither alone is safe.",
              "Track best-fitness-per-generation; it must climb or the parameters need tuning.",
            ],
            callout: {
              type: "exam",
              title: "The trace is the answer",
              body: "Dec 2025 asked the GA flowchart with its operators; the worked x^2 generation is the fastest way to prove you know them. Reproduce the four-row fitness table, the crossover at cut 3, and one mutation — every operator appears with numbers, and the 576 -> 729 climb demonstrates the loop works.",
            },
            examQuestions: [
              {
                q: "Explain the genetic algorithm with the help of a neat flowchart and discuss its main operators: selection, crossover and mutation.",
                marks: 7,
                appearances: ["Dec 2025"],
                outline: [
                  "Flowchart: initialise -> evaluate -> select -> crossover -> mutate -> replace -> converged?",
                  "Selection: fitness-proportionate; worked probabilities 0.14/0.49/0.05/0.31",
                  "Crossover: one-point at cut 3 -> 11011 and 10000; p_c 0.6-0.9",
                  "Mutation: bit-flip 01101 -> 11101 (fitness 169 -> 841); p_m ~ 1/l",
                  "Worked generation on f(x) = x^2: best climbs 576 -> 729",
                  "Elitism keeps the champion; convergence by cap/threshold/stagnation",
                  "Operators matched to the encoding (permutation needs OX/PMX)",
                ],
              },
              {
                q: "Run one complete generation of a simple GA maximizing f(x) = x^2 on 0-31 for the initial population {01101, 11000, 01000, 10011}, showing selection, crossover and mutation arithmetic.",
                marks: 7,
                outline: [
                  "Decode and evaluate: 13, 24, 8, 19 -> fitness 169, 576, 64, 361",
                  "Total 1170; probabilities 0.14, 0.49, 0.05, 0.31",
                  "Expected copies 0.58, 1.97, 0.22, 1.22 -> pool {01101, 11000 x2, 10011 x2}",
                  "Crossover (11000, 10011) cut 3: children 11011 (27, f = 729), 10000 (16)",
                  "Mutation: one bit-flip in 01101 -> 11101 (29, f = 841)",
                  "New best fitness 729 > 576 — generation improved",
                  "Repeat to 11111 (31, f = 961); stop on stagnation or cap",
                ],
              },
              {
                q: "List and explain the convergence criteria of a genetic algorithm. Why is stagnation alone unsafe as a stopping rule?",
                marks: 7,
                outline: [
                  "Maximum generations reached — the simple cap",
                  "Fitness threshold: best individual reaches the target value",
                  "Stagnation: best unchanged for G generations (20-50 typical)",
                  "Diversity collapse: population nearly identical — search finished",
                  "Stagnation unsafe alone: plateaus precede real improvements mutation would find",
                  "Cap unsafe alone: wasted evaluations after convergence",
                  "Practical: stagnation test AND generations cap, plus elite tracking",
                ],
              },
            ],
          },
          {
            number: "5.6",
            title: "Schema theorem and the building-block hypothesis",
            body: [
              "A schema H is a similarity template over chromosomes — a string over {0, 1, *}, where * is a wildcard: H = 1**1 matches every 5-bit string starting with 1 and ending with 1. Two numbers measure a schema's fragility: order o(H) — the number of fixed (non-wildcard) positions; and defining length δ(H) — the distance between the first and last fixed positions. H = 1**1 has order 2 and defining length 3; H = 1*** has order 1 and defining length 0. Schemata are GA's units of propagation: the theorem tracks how many individuals in the next generation contain a given schema.",
              "The Schema Theorem (Holland) bounds the expected count: m(H, t+1) ≥ m(H, t) · (f̄_H / f̄) · [1 − p_c·δ(H)/(l − 1) − o(H)·p_m], where f̄_H is the average fitness of individuals containing H and f̄ the population average. Reading the three factors: reproduction multiplies the schema by its relative fitness (above-average schemata grow); crossover disrupts in proportion to defining length (a cut between the fixed positions destroys the schema — probability p_c·δ/(l−1)); mutation disrupts in proportion to order (any fixed bit flipping kills it — probability o(H)·p_m). Worked: m = 4 individuals contain H = 1**1, f̄_H/f̄ = 2, l = 5, p_c = 0.6, p_m = 0.01 → 4 · 2 · (1 − 0.6·3/4 − 2·0.01) = 4 · 2 · 0.53 = 4.24 — the schema's presence more than doubles.",
              "The theorem's message is the building-block hypothesis: GAs work because short, low-order, above-average schemata (building blocks) receive exponentially increasing numbers of trials over generations, and crossover combines them into increasingly fit individuals. The design consequences are direct: keep schemata short (low δ survives crossover), keep the encoding such that related parameters sit close together (avoid Hamming cliffs that shred good blocks), and keep mutation low so low-order blocks survive. The theorem is a lower bound for one generation — the exponential-growth claim is the heuristic reading, but it is the accepted explanation of why GA search is more than random sampling.",
              "Dec 2025 asked the schema theorem and how it supports GA's working. The answer: define schema, order, defining length with one example each; state the bound with all three factors; run the worked 4·2·0.53 = 4.24 computation; interpret the three factors; close with the building-block hypothesis and the two design rules (short blocks, mutation low). That sequence is the complete 7-mark skeleton.",
            ],
            keyTerms: [
              { term: "Schema (H)", definition: "A similarity template over {0, 1, *} matched by all chromosomes agreeing on its fixed positions." },
              { term: "Order o(H)", definition: "The number of fixed positions in a schema; mutation disrupts in proportion to it." },
              { term: "Defining length delta(H)", definition: "Distance between first and last fixed positions; crossover disrupts in proportion to it." },
              { term: "Schema theorem", definition: "m(H,t+1) >= m(H,t)*(f_H/f)*[1 - pc*delta/(l-1) - o(H)*pm] — short above-average schemata grow." },
              { term: "Building-block hypothesis", definition: "GA works by combining short, low-order, above-average schemata into fitter individuals." },
            ],
            diagram: {
              kind: "pipeline",
              title: "What happens to one schema in one generation",
              caption: "Three multiplicative fates: reproduction grows it, crossover and mutation cut it down.",
              stages: [
                { label: "Count m(H, t)", note: "individuals currently containing H" },
                { label: "Reproduction", note: "multiply by relative fitness f_H / f" },
                { label: "Crossover loss", note: "multiply by 1 - pc * delta(H)/(l-1)" },
                { label: "Mutation loss", note: "multiply by 1 - o(H)*pm" },
                { label: "Count m(H, t+1)", note: "short, above-average H grows; long, average H dies" },
              ],
            },
            table: {
              caption: "Schema survival arithmetic (l = 5, p_c = 0.6, p_m = 0.01, fitness ratio 2).",
              headers: ["Schema", "o(H)", "delta(H)", "Survival factor", "Next-generation count"],
              rows: [
                ["1***", "1", "0", "1 - 0 - 0.01 = 0.99", "4 * 2 * 0.99 = 7.92"],
                ["1**1*", "2", "3", "1 - 0.45 - 0.02 = 0.53", "4 * 2 * 0.53 = 4.24"],
                ["11*01", "4", "4", "1 - 0.6 - 0.04 = 0.36", "4 * 2 * 0.36 = 2.88"],
                ["**1**", "1", "0", "0.99 (average schema, ratio 1)", "4 * 1 * 0.99 = 3.96 — no growth"],
              ],
            },
            bullets: [
              "Schema: a {0, 1, *} template; example 1**1 matches strings starting 1 and ending 1.",
              "Order o(H) = fixed positions; defining length delta(H) = spread of the fixed positions.",
              "Theorem: next count >= current * relative fitness * (1 - pc*delta/(l-1)) * (1 - o(H)*pm).",
              "Worked: 4 * 2 * (1 - 0.45 - 0.02) = 4.24 — schema 1**1 more than doubles.",
              "Reproduction rewards above-average schemata; crossover punishes length; mutation punishes order.",
              "Building-block hypothesis: short low-order above-average blocks combine into fitter individuals.",
              "Design rules: keep related bits adjacent; keep mutation low; avoid Hamming cliffs.",
            ],
            callout: {
              type: "exam",
              title: "State the bound, run one number",
              body: "Dec 2025 asked the schema theorem and how it supports GA. Write the inequality with all three factors named, compute one survival factor (4 * 2 * 0.53 = 4.24), and close with the building-block hypothesis. Skipping the worked number is the most common way this answer loses its depth marks.",
            },
            examQuestions: [
              {
                q: "Describe the schema theorem and explain how it supports the working of the genetic algorithm.",
                marks: 7,
                appearances: ["Dec 2025"],
                outline: [
                  "Schema: similarity template over {0, 1, *}; example 1**1",
                  "Order o(H) = fixed positions; defining length delta(H) = first-to-last fixed distance",
                  "Theorem: m(H,t+1) >= m(H,t)*(f_H/f)*[1 - pc*delta/(l-1) - o(H)*pm]",
                  "Worked: 4 individuals, ratio 2, pc 0.6, pm 0.01 -> 4 * 2 * 0.53 = 4.24",
                  "Reproduction grows above-average schemata exponentially",
                  "Short (low delta) low-order (low o) schemata survive and combine",
                  "Building-block hypothesis: crossover assembles blocks into fitter individuals",
                ],
              },
              {
                q: "Compute the survival factors of the schemata 1***, 1**1* and 11*01 for l = 5, p_c = 0.6, p_m = 0.01, and order them by expected growth.",
                marks: 7,
                outline: [
                  "1***: o = 1, delta = 0 -> factor 1 - 0 - 0.01 = 0.99",
                  "1**1*: o = 2, delta = 3 -> 1 - 0.6*3/4 - 0.02 = 0.53",
                  "11*01: o = 4, delta = 4 -> 1 - 0.6 - 0.04 = 0.36",
                  "Growth ranking: 1*** (0.99) > 1**1* (0.53) > 11*01 (0.36)",
                  "Interpretation: short, low-order schemata survive best",
                  "With equal fitness ratio 2: counts 7.92, 4.24, 2.88 from m = 4",
                  "Design lesson: keep building blocks short and low-order",
                ],
              },
            ],
          },
          {
            number: "5.7",
            title: "GA applications: TSP and network design routing",
            body: [
              "The travelling salesman problem asks for the shortest tour visiting n cities exactly once — (n−1)!/2 tours for symmetric distances, so 20 cities already exceed 10¹⁷ candidates. GA solves it with the machinery adjusted to permutation encoding: chromosome = an ordering of the cities; fitness = 1/total-tour-length (so shorter tours reproduce more); population 100-500; selection by tournament or roulette; crossover must preserve validity — order crossover (OX) or partially mapped crossover (PMX) — and mutation is swap, inversion or insertion, never bit-flip. Nov 2023 asked exactly this as a full half-question: 'the solution provided to TSP using genetic algorithm'.",
              "A worked order crossover: parents P1 = (A, B, C, D, E) and P2 = (B, E, D, A, C). Copy the segment at positions 2-4 of P1: child = (·, B, C, D, ·). Fill the two empty positions from P2's cyclic order starting after its own position of D, skipping genes already present — scanning P2 gives A, then C, B, E, D, of which only A and E are unused: position 5 takes A and position 1 takes E, so child = (E, B, C, D, A) — a valid tour, every city exactly once. A swap mutation then exchanges two positions; an inversion reverses a segment — both preserve validity. Fitness of the child: 1/(sum of its five leg distances) — computed from the distance matrix, no gradient anywhere.",
              "The GA pipeline for TSP in one paragraph: generate a random population of tours; evaluate each tour's length from the distance matrix; select parents; breed with OX/PMX and swap/inversion mutation; repeat with elitism (keep the best tour each generation) until stagnation. Reported behaviour: GA reaches near-optimal tours (within a few percent of the best known) for tens to hundreds of cities — not guaranteed optimal, but delivered in minutes where exact methods need hours.",
              "Network design routing applies the same template to a different chromosome: design a network topology or a routing path satisfying cost and capacity constraints. Encoding choices: a bit string over possible links (1 = link present) for topology design; a node-sequence chromosome for point-to-point routing. Fitness combines installation cost, link utilisation and constraint penalties (capacity violations subtract a large penalty, making infeasible designs unfit rather than illegal). GA's advantage here mirrors TSP: the space of topologies is combinatorial and the objective (cost + congestion) is non-differentiable, so population-based search with penalty-based fitness is a natural fit — and it scales by simply running more generations.",
            ],
            keyTerms: [
              { term: "TSP", definition: "Find the shortest tour visiting every city once — (n-1)!/2 candidates for symmetric distances." },
              { term: "Permutation chromosome", definition: "A city ordering; the only valid encoding for TSP — no duplicates allowed." },
              { term: "Fitness = 1/tour-length", definition: "Shorter tours get larger fitness, hence more parent slots." },
              { term: "Penalty fitness", definition: "Constraint violations subtract a large penalty from fitness, keeping infeasible designs unfit." },
            ],
            diagram: {
              kind: "pipeline",
              title: "GA for the travelling salesman problem",
              caption: "Same evolutionary loop — permutation chromosome, length-based fitness, order-preserving operators.",
              stages: [
                { label: "Encode tours", note: "permutation of cities, e.g. (A,B,C,D,E)" },
                { label: "Evaluate", note: "fitness = 1 / total tour length" },
                { label: "Select parents", note: "tournament or roulette; keep the best tour" },
                { label: "Breed", note: "OX / PMX crossover; swap / inversion mutation" },
                { label: "Repeat", note: "until stagnation or generation cap" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "tsp_ga.py — order crossover that always yields a valid tour",
              code: `P1 = ["A","B","C","D","E"]
P2 = ["B","E","D","A","C"]

seg = P1[1:4]                        # segment B,C,D copied from P1
child = [None, "B", "C", "D", None]

# fill the rest from P2's cyclic order, skipping used cities
fill = [g for g in P2[3:] + P2[:3] if g not in seg]   # -> ["A", "E"]
child[4] = fill[0]                   # position after the segment
child[0] = fill[1]                   # wrap to the front
print(child)                         # ['E','B','C','D','A'] - valid tour

# swap mutation keeps validity too
import random
i, j = random.sample(range(5), 2)
child[i], child[j] = child[j], child[i]`,
            },
            bullets: [
              "TSP scale: (n-1)!/2 tours — 20 cities exceed 10^17 candidates; GA samples it stochastically.",
              "Chromosome: permutation of cities; fitness = 1/total tour length.",
              "Operators must preserve validity: OX/PMX crossover, swap/inversion mutation.",
              "Worked OX: P1 segment (B,C,D) + P2 fill order -> valid child (E,B,C,D,A).",
              "Elitism keeps the best tour every generation; stop on stagnation.",
              "Network design routing: bit-string topology or node-sequence path chromosomes.",
              "Constraint handling by penalty fitness — infeasible designs simply do not reproduce.",
            ],
            callout: {
              type: "exam",
              title: "Nov 2023 asked this verbatim",
              body: "'Discuss the solution provided to the travelling salesman problem using genetic algorithm' — Nov 2023, 7 marks. The answer needs all four design choices: permutation chromosome, fitness = 1/length, order-based crossover, swap/inversion mutation, plus the pipeline in order. One worked OX child proves the operators are understood, not named.",
            },
            examQuestions: [
              {
                q: "Discuss the solution provided to the travelling salesman problem using a genetic algorithm: encoding, fitness, operators and the overall pipeline.",
                marks: 7,
                appearances: ["Nov 2023"],
                outline: [
                  "TSP: shortest tour through n cities; (n-1)!/2 candidates — exact search infeasible",
                  "Encoding: permutation of cities, each exactly once",
                  "Fitness = 1 / total tour length (shorter tours reproduce more)",
                  "Crossover must not duplicate cities: order crossover (OX) or PMX",
                  "Worked OX: P1 = (A,B,C,D,E), P2 = (B,E,D,A,C) -> child (E,B,C,D,A)",
                  "Mutation: swap, inversion or insertion — always valid",
                  "Pipeline: random tours -> evaluate -> select -> breed with elitism -> stagnation",
                ],
              },
              {
                q: "How would you apply a genetic algorithm to network design and routing? Discuss the chromosome design and the handling of capacity constraints.",
                marks: 7,
                outline: [
                  "Topology design: bit string over candidate links (1 = link present)",
                  "Routing: node-sequence chromosome for source-to-destination paths",
                  "Fitness: installation cost + utilisation, minus capacity-violation penalties",
                  "Penalty keeps infeasible designs unfit without rejecting them outright",
                  "Selection and operators as in the standard GA (tournament + crossover + mutation)",
                  "Multimodal, non-differentiable objective — GA's natural terrain",
                  "Scaling: more generations or a parallel island model",
                ],
              },
            ],
          },
          {
            number: "5.8",
            title: "Swarm intelligence: ACO and PSO",
            body: [
              "Swarm intelligence optimizes through many simple agents interacting locally — no chromosomes, no crossover. Ant Colony Optimization (Dorigo, 1992) imitates ants laying pheromone: artificial ants build solutions component by component (e.g. choosing the next city or the next network hop), each choice biased by pheromone trail τ on the component and by heuristic desirability η (typically 1/distance): probability of choosing edge ij ∝ τ_ij^α · η_ij^β. After all ants complete tours, pheromone evaporates (τ ← (1−ρ)τ — forgetting stale paths) and the ants' tours deposit pheromone proportionally to their quality (Δτ = Q/L). Good paths accumulate trail, bad paths fade — positive feedback converges the colony onto near-optimal routes. ACO is the natural method for routing problems: TSP, vehicle routing, network packet routing.",
              "Particle Swarm Optimization (Kennedy and Eberhart, 1995) imitates flocking: each particle is a candidate point with position x and velocity v in the search space; it remembers its personal best pbest, and the swarm shares a global best gbest. The velocity update v ← w·v + c₁·r₁·(pbest − x) + c₂·r₂·(gbest − x) blends inertia (w — keep flying the same way), cognitive pull (toward one's own best) and social pull (toward the swarm's best); then x ← x + v. Worked step: x = 2, v = 0, pbest = 4, gbest = 5, w = 0.5, c₁ = c₂ = 1, r₁ = r₂ = 0.5: v = 0 + 0.5·(4−2) + 0.5·(5−2) = 1.0 + 1.5 = 2.5; x = 2 + 2.5 = 4.5 — the particle glides toward the consensus of its own and the swarm's experience.",
              "The comparison table is the exam's favourite framing (Nov 2023 asked both as short notes, Dec 2024 asked ACO alone, Dec 2025 listed both as short-note options). ACO: discrete/graph problems, indirect communication through the environment (pheromone on edges), positive feedback with evaporation. PSO: continuous optimisation, direct communication through gbest/pbest, velocity memory with inertia. Both are population-based, derivative-free, and easy to parallelise — and both are introductions in this syllabus: know the update rules, one worked number each, and the application domains, not the convergence theory.",
              "The exam answer pattern: define swarm intelligence; for ACO give the transition rule, the evaporation and deposit updates, and the routing applications; for PSO give the velocity/position updates and the three-term interpretation; include one worked number for each (a pheromone update or a velocity computation); close with the ACO vs PSO contrast table. That bundle answers the short-note, the standalone, and the any-two phrasings the papers have used.",
            ],
            keyTerms: [
              { term: "Swarm intelligence", definition: "Optimisation by many simple agents with local interactions and no central controller." },
              { term: "Pheromone trail (tau)", definition: "ACO's shared memory on solution components; deposited by good tours, evaporated over time." },
              { term: "Transition rule", definition: "ACO chooses the next component with probability proportional to tau^alpha * eta^beta." },
              { term: "PSO velocity update", definition: "v <- w*v + c1*r1*(pbest - x) + c2*r2*(gbest - x): inertia + cognitive + social pulls." },
              { term: "gbest / pbest", definition: "The swarm's best position ever found, and each particle's own best — PSO's two memories." },
            ],
            diagram: {
              kind: "compare",
              title: "ACO vs PSO",
              caption: "Two swarm metaphors: ants communicating through the ground, birds communicating through the flock.",
              left: {
                heading: "Ant Colony Optimization",
                items: [
                  "Domain: discrete, graph problems (TSP, routing)",
                  "Memory: pheromone on edges tau_ij",
                  "Choice rule: probability ~ tau^alpha * eta^beta",
                  "Dynamics: evaporation (1-rho) + quality deposit Q/L",
                ],
              },
              right: {
                heading: "Particle Swarm Optimization",
                items: [
                  "Domain: continuous optimisation",
                  "Memory: pbest per particle, gbest for the swarm",
                  "Update: v = w*v + c1*r1*(pbest-x) + c2*r2*(gbest-x)",
                  "Worked: v = 0.5 + 1.5 = 2.5; x moves 2 -> 4.5",
                ],
              },
            },
            table: {
              caption: "ACO and PSO at a glance.",
              headers: ["Aspect", "ACO", "PSO"],
              rows: [
                ["Inspiration", "ant foraging with pheromone trails", "bird flocking / fish schooling"],
                ["Problem type", "discrete, combinatorial, graph paths", "continuous real-valued optimisation"],
                ["Candidate", "partial solution built step by step", "point with position and velocity"],
                ["Communication", "indirect — via the environment (stigmergy)", "direct — via shared gbest and pbest"],
                ["Key update", "tau <- (1-rho)*tau + deposits; choose ~ tau^a * eta^b", "v and x updates with inertia w"],
                ["Typical applications", "TSP, vehicle routing, network routing", "function optimisation, NN weight tuning"],
              ],
            },
            bullets: [
              "Swarm intelligence: many simple agents, local interactions, no central control.",
              "ACO: choose next hop ~ tau^alpha * eta^beta; evaporate (1-rho); deposit Q/L by tour quality.",
              "Positive feedback: short tours gain pheromone and attract more ants — convergence by reinforcement.",
              "PSO: v = w*v + c1*r1*(pbest - x) + c2*r2*(gbest - x); x = x + v.",
              "Worked PSO: x=2, v=0, pbest=4, gbest=5, w=0.5, c=1, r=0.5 -> v=2.5, x=4.5.",
              "Three PSO pulls: inertia (w), cognitive (own best), social (swarm best).",
              "Applications: ACO for TSP and network routing; PSO for continuous functions and tuning.",
            ],
            callout: {
              type: "exam",
              title: "Three sessions and counting",
              body: "ACO and PSO appeared as paired short notes in Nov 2023, as a standalone ACO question in Dec 2024, and as two of the four any-two options in Dec 2025. Prepare both as symmetric cards — metaphor, domain, update rule, one worked number, applications — and the any-two choice becomes free marks.",
            },
            examQuestions: [
              {
                q: "Write short notes on Ant Colony Optimization (ACO) and Particle Swarm Optimization (PSO), with one update rule and one application each.",
                marks: 7,
                appearances: ["Nov 2023", "Dec 2025"],
                outline: [
                  "Swarm intelligence: population of simple agents, local interactions",
                  "ACO: choose edge ~ tau^alpha * eta^beta; evaporate (1-rho)*tau; deposit Q/L",
                  "ACO applications: TSP, vehicle routing, network routing",
                  "PSO: v = w*v + c1*r1*(pbest-x) + c2*r2*(gbest-x); x = x + v",
                  "Worked PSO step: v = 2.5, x moves 2 -> 4.5",
                  "PSO applications: continuous optimisation, neural weight tuning",
                  "Contrast: stigmergy vs direct sharing; graphs vs continuous space",
                ],
              },
              {
                q: "Discuss the ant colony optimization method: pheromone model, transition rule, evaporation and deposit, and why it suits routing problems.",
                marks: 7,
                appearances: ["Dec 2024"],
                outline: [
                  "Ants build tours edge by edge; shorter tours return first",
                  "Pheromone tau_ij is the shared memory on each edge",
                  "Transition probability: p_ij ~ tau_ij^alpha * eta_ij^beta, eta = 1/d_ij",
                  "Evaporation tau <- (1-rho)*tau forgets stale, poor paths",
                  "Deposit: completed tours add Q/L proportional to quality",
                  "Positive feedback concentrates the colony on near-optimal routes",
                  "Natural fit: TSP, vehicle routing, network packet routing — graph problems",
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
      heading: "Exam weightage — where to spend the hours",
      weightedTopics: [
        { topic: "Back propagation network (phases, deltas, flowchart)", weight: "≈ 10–12 marks", note: "Asked in every session: Nov 2023 (short note), Dec 2024 (flowchart), Jun 2025 (phases), Dec 2025 (multilayer training)." },
        { topic: "Kohonen SOM architecture + algorithm", weight: "≈ 7–10 marks", note: "Four-session regular: Nov 2023, Dec 2024, Jun 2025, Dec 2025 — one master answer with the BMU update." },
        { topic: "Fuzzy properties, operations and the numerical", weight: "≈ 8–10 marks", note: "Nov 2023 short note, Dec 2024 numerical (A1 - A2), Jun 2025 essay, Dec 2025 essay — plus lambda-cuts." },
        { topic: "FIS block diagram, defuzzification, construction", weight: "≈ 8–10 marks", note: "Nov 2023 diagram, Jun 2025 defuzzification methods, Dec 2025 temperature-control construction." },
        { topic: "GA operators + worked generation + schema theorem", weight: "≈ 8–10 marks", note: "Dec 2024 (features, fitness), Jun 2025 (encoding), Dec 2025 (flowchart + schema). Run the x^2 trace." },
        { topic: "Adaline / Madaline and perceptron learning", weight: "≈ 7–10 marks", note: "Nov 2023 (Adaline x2), Dec 2024 (single layer), Jun 2025 (ADALINE + Madaline), Dec 2025 (comparison + rule)." },
        { topic: "Biological NN, ANN comparison, MP neuron, Hebb, XOR", weight: "≈ 7–10 marks", note: "Unit I short-note bank: Nov 2023, Dec 2024, Jun 2025 (MP), Dec 2025 (bio-vs-ANN, MP, XOR, Hebb)." },
        { topic: "ACO, PSO, CPN, ART, CNN/RNN", weight: "≈ 6–8 marks", note: "Short-note bank across units: ACO/PSO in Nov 2023 + Dec 2025, CPN in Nov 2023 + Dec 2024 + Dec 2025, ART in Nov 2023 + Jun 2025, CNN in Nov 2023 + Dec 2024 + Dec 2025." },
      ],
    },
    {
      id: "schedule",
      heading: "A five-week study schedule",
      body: [
        "Two hours a day, five days a week, weekends for past papers. Every algorithm gets a hand-run numeric trace — the papers reward arithmetic (delta-rule updates, fuzzy set operations, roulette spins, GA generations) far more than prose.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I — the neuron family", tasks: ["Soft vs hard computing + pillars table", "Biological neuron sketch + flow of information", "MP neuron: AND/OR truth tables with thresholds", "XOR four-inequality proof; Hebb two-pattern storage trace"] },
        { week: "Week 2", focus: "Unit II — supervised learning", tasks: ["Perceptron rule + AND trace to convergence", "ADALINE delta-rule worked update + stability bound", "MADALINE MRI rule; Adaline vs Madaline table", "Back propagation: three phases, two delta formulas, 1-1-1 numeric trace"] },
        { week: "Week 3", focus: "Unit III — unsupervised learning", tasks: ["Competitive learning worked step; Hamming match scores", "SOM: five steps, BMU update with numbers, decay schedule", "CPN two-stage training; ART 1 vigilance with passing/failing ratios", "CNN convolution arithmetic; RNN state trace; CNN vs RNN table"] },
        { week: "Week 4", focus: "Unit IV — fuzzy sets and inference", tasks: ["Terminology on one 5-element example; lambda-cuts", "Union/intersection/complement/difference element-wise; the Dec 2024 A1-A2 numerical", "Triangular MF evaluations; assignment methods list", "Max-min composition 2x2; FIS diagram; centroid worked division"] },
        { week: "Week 5", focus: "Unit V + full revision", tasks: ["GA terminology, encoding table, fitness scaling", "Roulette spin + full x^2 generation trace", "Schema theorem bound + one survival factor", "TSP OX crossover worked child; ACO/PSO cards; two full past papers timed"] },
      ],
    },
    {
      id: "exam-tips",
      heading: "Exam-hall strategy",
      examTips: [
        "Every architecture question wants a diagram: perceptron, ADALINE, BPN, SOM, CPN, ART, FIS, GA flowchart — the sketch earns a large share of the 7 marks.",
        "Pair every algorithm with one numeric trace: perceptron epoch, delta-rule update, backprop deltas, SOM BMU move, fuzzy element-wise operations, roulette spin, GA generation. Numbers are the difference between 4 and 7 marks.",
        "Back propagation: write the three phases by name, then delta_o = (t-y)y(1-y) and delta_h = (sum delta_o*w)h(1-h) exactly — the formulas are checked verbatim.",
        "For the fuzzy numerical on different universes (Dec 2024): first extend both sets with zeros onto the common universe, then apply min/max element by element.",
        "For Adaline vs perceptron, the one-line discriminator is 'perceptron trains the quantised output, Adaline trains the linear element' — say it first.",
        "GA answers: name the operators with their probabilities (p_c 0.6-0.9, p_m ~ 1/l), then run the fitness table with selection probabilities.",
        "SOM and CPN: label the instar/outstar and BMU/neighbourhood terms — proper nouns are what the mark scheme scans for.",
        "Time-box: 7-mark halves get about 12 minutes each; attempt any five of the eight questions — pick by topic confidence, not question order.",
      ],
    },
    {
      id: "last-day",
      heading: "Last-day strategy and common slips",
      body: [
        "Morning: one pass over the four master answers that cover most of the paper — back propagation (phases + deltas + trace), SOM (five steps + BMU numbers), FIS (five blocks + centroid), GA (flowchart + x^2 generation). Afternoon: the short-note bank — Hebb, CNN, CPN, ART, ACO, PSO, lambda-cuts, evolution of NN — each as a five-line card. Evening: one full paper timed (Nov 2023 or Dec 2025), then sleep. Do not learn any new topic on the last day; sharpen the eight numericals instead.",
      ],
      bullets: [
        "Applying crisp AND/OR to fuzzy sets instead of min/max — the Dec 2024 A1 - A2 numerical punishes it: difference is min(mu_A, 1 - mu_B), element-wise.",
        "Mixing up sets on different universes: extend with zeros onto the common universe BEFORE operating (A1 on X, A2 on Y in Dec 2024).",
        "Training the perceptron/Adaline on the wrong signal: perceptron updates on the quantised output, Adaline on the linear y_in — answers that swap them lose the discriminator mark.",
        "Writing the backprop delta without the sigmoid derivative: delta_o = (t - y)y(1 - y), not (t - y) alone; and hidden deltas must sum downstream deltas weighted by w.",
        "Forgetting the neighbourhood in SOM — a plain winner-take-all update is competitive learning, not a SOM; the topology-preservation sentence is the differentiator.",
        "Missing the vigilance test in ART: without ||x AND c||/||x|| vs rho and the reset/new-category branch, the answer is just competitive learning.",
        "TSP with one-point crossover or bit-flip mutation — duplicates cities and produces invalid tours; order-based crossover (OX/PMX) and swap/inversion are required.",
        "Quoting the schema theorem without order and defining length: o(H) and delta(H) must appear, and the worked survival factor (4 * 2 * 0.53 = 4.24) is the depth mark.",
        "Drawing the FIS without the defuzzification block, or 'computing' a centroid without the division sum(mu*z)/sum(mu) = 14.4/2.4 = 6.0.",
        "Saying the MP neuron can learn — it cannot; no weights exist and theta is fixed (Jun 2025 asked this directly).",
      ],
    },
  ],
};
