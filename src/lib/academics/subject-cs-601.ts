import type { AcademicSubject } from "./types";

export const cs601: AcademicSubject = {
  id: "cs-601",
  code: "CS-601",
  title: "Machine Learning",
  semester: "VI Semester",
  program: "RGPV · Computer Science & Engineering",
  tagline:
    "Every topic of the syllabus as one connected story: how learning systems are born, how clusters find structure, how classifiers make decisions, how ensembles vote, and how dimensionality reduction and learning theory keep it all honest.",
  description:
    "Five units walk from the learning problem and the bias-variance tradeoff, through clustering and the EM algorithm, the six classical classifiers and their confusion-matrix metrics, the ensemble family from bagging to boosting, ending with PCA variants and the PAC/VC learning theory that bounds it all.",
  accentColor: "#f97316",
  emoji: "ML",
  unitCount: 5,
  totalSections: 49,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Foundations of Machine Learning",
      summary:
        "Unit I frames the entire subject: what learning means for a machine, the lifecycle of an ML project, the taxonomy of learning systems, the honest list of challenges, the preprocessing and visualization of data, the bias-variance tradeoff, and how AI, ML, DL and DS fit inside one another.",
      chapter: {
        number: "01",
        title: "The Learning Problem",
        intro:
          "Unit I covers Mitchell's definition of learning, the ML lifecycle, types of ML systems, scope and limitations, Géron's challenges, data visualization, hypothesis testing, preprocessing, augmentation, normalization, the bias-variance tradeoff, and the AI/ML/DL/DS nesting.",
        inOneBreath:
          "ML fits a function to data; supervised vs unsupervised by label presence; batch vs online by update timing; instance-based vs model-based by memory; data quality dominates algorithm choice; bias² + variance + noise decomposes error; AI ⊃ ML ⊃ DL with DS as the cross-cutting sibling.",
        sections: [
          {
            number: "1.1",
            title: "What is machine learning?",
            body: [
              "Machine learning is the field of study that gives computers the ability to learn from data and experience instead of being explicitly programmed for every case. Tom Mitchell's classic definition makes it precise: a program learns from experience E with respect to task T and performance measure P, if its performance at T, as measured by P, improves with E. A spam filter is the canonical example: task T is 'flag incoming mail as spam or not', experience E is the corpus of mails already labelled by users, and performance P is the fraction of new mails correctly classified — the filter's accuracy genuinely rises as more labelled mail accumulates. The pattern generalizes: every ML system is a function fitted to data, an inductive leap from seen examples to unseen future ones.",
              "The contrast with traditional programming captures the essence of ML. In ordinary software, a human writes rules (the program) that act on data to produce answers: data + rules → answers. In machine learning, the human supplies data together with the answers, and the machine infers the rules: data + answers → rules. The learned rules can then be applied to fresh, unseen data to produce new answers. This inversion is why ML shines where rules are too numerous, too fragile, or too subtle to hand-write — recognizing a cat in a photo, translating Hindi to English, or flagging a fraudulent transaction all resist clean if-then code but yield to patterns learned from millions of examples.",
              "The subject organizes itself around three families of learning, distinguished by what kind of feedback the learner receives. Supervised learning (Unit III) trains on labelled pairs (x, y) and learns the mapping; its tasks are classification when y is a category and regression when y is a number. Unsupervised learning (Unit II) receives inputs only and discovers structure — clusters, low-dimensional embeddings, density. Reinforcement learning, an honourable mention outside this syllabus, trains an agent to act in an environment by maximizing cumulative reward. Each family is the right tool for a different kind of feedback signal, and a surprising amount of practical wisdom is simply matching the family to the signal.",
              "Equally important is what ML is not. It is not Artificial General Intelligence — today's ML systems are narrow, each mastering one task and useless outside it. It is not a magic oracle that excuses the practitioner from understanding the domain: a model trained on biased data will faithfully reproduce that bias, and a model trained on the wrong target optimizes the wrong thing brilliantly. And it is not a substitute for clean experimental design — without held-out evaluation, any reported accuracy is meaningless. The rest of this unit builds the discipline that turns ML from a buzzword into a trustworthy engineering practice.",
            ],
            keyTerms: [
              { term: "Mitchell definition", definition: "A program learns from experience E w.r.t. task T and performance P if its performance on T, measured by P, improves with E." },
              { term: "Task (T)", definition: "The job the system improves at — classify spam, predict price, cluster customers." },
              { term: "Experience (E)", definition: "The data (and labels, if any) the system learns from." },
              { term: "Performance measure (P)", definition: "The metric that quantifies how well T is being done — accuracy, MSE, silhouette." },
              { term: "Inductive learning", definition: "Generalizing from specific seen examples to a rule that applies to unseen future inputs." },
            ],
            callout: {
              type: "tip",
              title: "Why data quality dominates",
              body: "Because every ML system is an inductive leap, the quality and representativeness of the training data decide success more than the algorithm choice. This is why preprocessing and honest evaluation dominate the whole course.",
            },
            bullets: [
              "ML learns from experience E to improve at task T, measured by performance P (Mitchell).",
              "Traditional programming: data + rules -> answers. Machine learning: data + answers -> rules.",
              "Supervised learning trains on labelled (x, y) pairs: classification and regression.",
              "Unsupervised learning finds structure in unlabelled inputs: clusters, low-d embeddings.",
              "Reinforcement learning trains an agent from reward signals, not labels.",
              "ML systems are narrow; they inherit data bias and are only as honest as their evaluation.",
            ],
            diagram: {
              kind: "compare",
              title: "Traditional programming vs machine learning",
              caption: "The inversion that defines the field: who supplies the rules.",
              left: {
                heading: "Traditional programming",
                items: [
                  "A human writes the rules by hand",
                  "data + rules -> answers",
                  "Brittle where patterns are subtle or numerous",
                  "Example: if-then logic on a tax form",
                ],
              },
              right: {
                heading: "Machine learning",
                items: [
                  "The machine infers rules from examples",
                  "data + answers -> rules",
                  "Learned rules generalize to unseen data",
                  "Example: a spam filter trained on labelled mail",
                ],
              },
            },
            examQuestions: [
              {
                q: "Define machine learning using Tom Mitchell's formulation (T, E, P). Contrast traditional programming with machine learning and briefly describe the three families of learning with one example each.",
                marks: 7,
                outline: [
                  "Mitchell's definition: performance at task T, measured by P, improves with experience E",
                  "Spam filter example: T = flag spam, E = labelled mail, P = accuracy",
                  "Traditional: data + rules -> answers; ML: data + answers -> rules",
                  "Supervised learning: labelled pairs; classification vs regression tasks",
                  "Unsupervised learning: inputs only; clustering and dimensionality reduction",
                  "Reinforcement learning: agent maximizes cumulative reward in an environment",
                  "Limits: narrow systems, inherited bias, honest held-out evaluation required",
                ],
              },
              {
                q: "Distinguish classification from regression with one example of each.",
                marks: 3,
                outline: [
                  "Classification predicts a category (spam vs not spam)",
                  "Regression predicts a number (house price)",
                  "Different metrics: accuracy/F1 for classification, MSE for regression",
                ],
              },
              {
                q: "State the task T, experience E and performance measure P for a house-price prediction system.",
                marks: 2,
                outline: [
                  "T: predict the sale price of a house from its features",
                  "E: historical sales records with final prices",
                  "P: mean squared error (or R^2) on held-out sales",
                ],
              },
            ],
          },
          {
            number: "1.2",
            title: "The machine learning life cycle",
            body: [
              "Real ML projects move through a repeatable cycle, and knowing it in order is a guaranteed exam question. The stages: problem framing (translate a business goal into a learning task), data collection (acquire, join and license the raw material), data preparation (cleaning, preprocessing, augmentation, normalization), feature engineering and selection, model training (choose an algorithm, fit parameters), evaluation (test on held-out data with the metrics of Unit III), deployment (serve predictions to users), and monitoring and maintenance (watch for drift, retrain). The cycle is a loop, not a line: production feedback and fresh data feed the next round of framing — a model is never 'finished', only 'currently deployed'.",
              "Each stage has its own failure mode, and the exam asks for both the stage and the failure. Problem framing fails when the business goal is vague — 'predict churn' is not enough; 'predict which customers will cancel in the next 30 days so retention can call them' is. Data collection fails on licensing, on joins that silently drop rows, on sampling that misses a whole segment. Data preparation fails when leakage corrupts the test set — fitting scalers or imputers on the whole dataset instead of train only is the canonical beginner slip. Feature engineering fails when irrelevant or redundant features drown the signal, and training fails when the wrong algorithm family is picked for the data shape.",
              "Evaluation is the stage that earns or loses the most marks, because it is where honesty enters the pipeline. The held-out test set is the only unbiased judge; cross-validation makes the judgement robust on small data; and the metrics chosen must match the business cost of errors (Unit III's confusion-matrix discussion). Deployment is no longer just 'serve the model' — modern MLOps wraps models in versioning, A/B testing, and shadow mode, so a new model can be observed against the old before it carries real traffic. Monitoring watches for data drift (the input distribution shifts) and concept drift (the input→output relationship itself shifts), both of which silently degrade accuracy without raising any error.",
              "The lifecycle rewards iteration over perfection. A minimum viable model deployed in weeks beats a perfect model promised in months, because production data reveals what the model is actually missing — and that data is the next round's training material. The diagram below shows the loop; in practice each turn is a sprint, and a mature ML team measures its velocity in deployed iterations per quarter, not in models-perfectly-tuned.",
            ],
            keyTerms: [
              { term: "Problem framing", definition: "Translating a business goal into a precise learning task with a defined target and metric." },
              { term: "Data drift", definition: "Shift in the input feature distribution between training and production." },
              { term: "Concept drift", definition: "Shift in the input→output relationship, so the same x now maps to a different y." },
              { term: "MLOps", definition: "The engineering discipline of deploying, versioning, monitoring and retraining ML models in production." },
            ],
            diagram: {
              kind: "cycle",
              title: "The ML life cycle as a loop",
              caption:
                "Deployment is not the end — monitoring feeds new data back into framing, and the wheel turns again.",
              steps: [
                { label: "Frame", note: "define the task" },
                { label: "Collect", note: "gather raw data" },
                { label: "Prepare", note: "clean · augment · normalize" },
                { label: "Train", note: "fit the model" },
                { label: "Evaluate", note: "held-out metrics" },
                { label: "Deploy", note: "serve + monitor" },
              ],
            },
            bullets: [
              "Framing -> collection -> preparation -> features -> training -> evaluation -> deployment -> monitoring.",
              "The cycle is a loop: monitoring and fresh data feed the next round of framing.",
              "Framing failure: a vague goal ('predict churn') instead of a measurable target.",
              "Collection failures: licensing, silent row loss in joins, non-representative sampling.",
              "Preparation failure: leakage — fitting imputers/scalers on the whole dataset.",
              "Evaluation must use held-out data and metrics matched to the cost of errors.",
              "Monitoring watches data drift (inputs shift) and concept drift (x -> y shifts).",
              "A model is never 'finished', only 'currently deployed'.",
            ],
            callout: {
              type: "exam",
              title: "Writing the lifecycle answer",
              body: "Name all eight stages in order, attach one failure mode and one defence to each, then close with the loop: production feedback generates new data, monitoring detects drift, and the wheel turns again. The diagram plus the failure modes is what separates a 7-mark answer from a 4-mark one.",
            },
            examQuestions: [
              {
                q: "Explain each stage of the machine learning life cycle and describe one typical failure mode at each stage.",
                marks: 7,
                outline: [
                  "Problem framing: business goal -> precise task, target and metric; failure = vague goals",
                  "Data collection: acquire, join, license; failure = sampling bias and silent row loss",
                  "Data preparation: clean, impute, encode, scale; failure = leakage via fitting on all data",
                  "Feature engineering and selection; failure = irrelevant/redundant features",
                  "Training: choose algorithm family, fit parameters; failure = wrong family for data shape",
                  "Evaluation: held-out test set, cross-validation, cost-matched metrics",
                  "Deployment + monitoring: A/B or shadow mode; watch data drift and concept drift; retrain",
                ],
              },
              {
                q: "What is concept drift and how is it detected and corrected?",
                marks: 3,
                outline: [
                  "The input -> output relationship shifts over time (same x now maps to a different y)",
                  "Detected by monitoring live performance and input distributions",
                  "Corrected by retraining on fresh labelled data",
                ],
              },
              {
                q: "Why is the machine learning life cycle called a cycle rather than a pipeline?",
                marks: 2,
                outline: [
                  "Production feedback generates new data and drift signals",
                  "Monitoring results feed reframing, retraining and redeployment",
                ],
              },
            ],
          },
          {
            number: "1.3",
            title: "Types of machine learning systems",
            body: [
              "Supervised learning trains on pairs — inputs with the correct answers (features X and labels y) — and learns a mapping X → y: classification when y is a category (spam or not), regression when y is a number (house price). Unsupervised learning receives inputs only, no labels, and must discover structure on its own: clustering (Unit II), dimensionality reduction (Unit V) and association rules. The split that matters for evaluation: supervised can be graded against ground truth on held-out data; unsupervised is judged by usefulness and stability of the structure it finds.",
              "Batch versus online learning is the second divide. Batch (offline) trains once on the full dataset and then freezes: new behaviour requires retraining, which is simple and safe but slow to adapt. Online (incremental) feeds data sequentially — in mini-batches or single instances — and updates parameters continuously as new data arrives, adapting cheaply to changing patterns (stock feeds, click streams), at the cost of vigilance: one bad batch of data can degrade an online model. Instance-based versus model-based learning is the third divide — how the system remembers. Instance-based (the K-NN of Unit III) stores the training examples themselves and generalizes by comparing a new point to its nearest stored neighbours — the 'learning' is just remembering well. Model-based builds a compact model with parameters fitted to the data — a linear model, a tree, a network — and then throws the data away.",
              "A third, broader axis is reinforcement learning, where the learner is an agent acting in an environment and receiving rewards rather than labels. The agent's job is to learn a policy mapping states to actions that maximizes long-term cumulative reward — chess engines, robot locomotion, ad placement. Reinforcement learning is outside this syllabus's scope but is named for completeness, because students often confuse 'no labels' with 'unsupervised': reinforcement has feedback (the reward), just delayed and graded rather than supervised.",
              "Choosing the family is the first design decision in any project, and the choice is dictated by what data is available. If labelled examples exist for the target, supervised is almost always right. If only inputs exist and the goal is to discover structure, unsupervised. If a simulation or environment provides reward signals, reinforcement. Within supervised, classification vs regression is decided by whether the target is a category or a number — a distinction small in form but enormous in choice of algorithm and metric.",
            ],
            keyTerms: [
              { term: "Supervised learning", definition: "Learning from labelled (x, y) pairs to predict y for new x; split into classification and regression." },
              { term: "Unsupervised learning", definition: "Learning from x only, discovering clusters, low-dimensional structure or density." },
              { term: "Online learning", definition: "Sequentially updating a model as new data arrives, instead of retraining from scratch." },
              { term: "Instance-based learning", definition: "Storing training examples and generalizing by similarity (K-NN is the archetype)." },
              { term: "Model-based learning", definition: "Fitting a parametric model to the data and discarding the data at inference time." },
            ],
            diagram: {
              kind: "compare",
              title: "Supervised vs unsupervised",
              caption:
                "The first great divide: whether the training data carries the answers (supervised) or the model must find structure alone (unsupervised).",
              left: {
                heading: "Supervised — learn with a teacher",
                items: [
                  "Labelled data (x, y), goal: predict y for new x",
                  "classification · regression",
                  "Graded on held-out labels — accuracy, F1, error rate",
                ],
              },
              right: {
                heading: "Unsupervised — learn without a teacher",
                items: [
                  "Unlabelled data (x only), goal: reveal hidden structure",
                  "clustering · dimensionality reduction",
                  "Judged by usefulness, stability, silhouette-style scores",
                ],
              },
            },
            bullets: [
              "Three axes classify any ML system: feedback signal, update timing, and memory style.",
              "Supervised (labels) / unsupervised (no labels) / reinforcement (reward).",
              "Batch learns once and freezes; online updates continuously as data arrives.",
              "Instance-based stores the examples (K-NN); model-based fits parameters and discards data.",
              "Classification vs regression: category target vs numeric target.",
              "The data available dictates the family — no labels means no supervised learning.",
            ],
            callout: {
              type: "tip",
              title: "The first design decision",
              body: "Choosing the learning family comes before choosing the algorithm. Ask in order: are there labels (supervised) or not (unsupervised)? Is there a reward signal (reinforcement)? Must the model adapt continuously (online) or can it retrain periodically (batch)? Only then pick the algorithm family within the answer.",
            },
            examQuestions: [
              {
                q: "Compare supervised, unsupervised and reinforcement learning, and explain the batch vs online and instance-based vs model-based distinctions with examples.",
                marks: 7,
                outline: [
                  "Supervised: learns from labelled (x, y); classification and regression examples",
                  "Unsupervised: structure from unlabelled inputs; clustering, PCA",
                  "Reinforcement: agent + environment + reward; chess engine example",
                  "Batch: train once, retrain for new behaviour; online: continuous updates",
                  "Online risks: a bad batch of data degrades the model",
                  "Instance-based: K-NN stores examples and compares neighbours",
                  "Model-based: linear model/tree fits parameters and discards the data",
                ],
              },
              {
                q: "Differentiate instance-based and model-based learning with one example of each.",
                marks: 3,
                outline: [
                  "Instance-based stores training examples and generalizes by similarity (K-NN)",
                  "Model-based fits a parametric function and discards the data (linear regression)",
                  "Instance-based inference is slow per query; model-based is fast once fitted",
                ],
              },
              {
                q: "What is online learning? Name one scenario where it is essential.",
                marks: 2,
                outline: [
                  "Sequentially updating the model as new data arrives (mini-batches or instances)",
                  "Essential for fast-changing streams: stock prices, click streams, fraud patterns",
                ],
              },
            ],
          },
          {
            number: "1.4",
            title: "Scope and limitations of machine learning",
            body: [
              "ML shines wherever a problem needs pattern recognition at scale with rules too complex to write by hand: vision, speech, translation, recommendation, fraud detection, predictive maintenance and demand forecasting. Its limits are equally structural. It cannot create data — a fleet of one thousand examples teaches nothing robust about a million-class problem. It extrapolates poorly beyond the distribution it was trained on: a house-price model that has seen only city apartments knows nothing about farmhouses. It offers correlation, not causation — a model may learn that umbrella sales predict rain without understanding either. And it inherits every bias its data carries, silently and at scale. A problem is right for ML only when a pattern genuinely exists, data representing it exists, and the pattern cannot be captured cheaply as fixed rules.",
              "The scope of ML is best understood by mapping problem shapes to algorithm families. Pattern recognition at scale (vision, speech) calls for deep learning's universal approximation. Predictive modelling on tabular data (churn, credit risk, demand) is the domain of gradient boosting and random forests. Discovering structure without labels (customer segments, anomaly flags) is clustering's job. Compression and visualization of high-dimensional data is PCA and its cousins (Unit V). Recommendation is collaborative filtering. Each of these is a solved industrial pattern — the practitioner's job is recognizing which shape a new problem has, not inventing a new algorithm.",
              "The honest list of limitations reads as a checklist before any project. ML needs data at scale — small datasets reward simple statistics over deep models. ML cannot extrapolate beyond its training distribution — a self-driving car trained only in clear weather will fail in rain. ML finds correlation, never causation — a hospital length-of-stay model may learn that long stays predict death without understanding that severe illness causes both. ML inherits bias — if historical loan approvals discriminated, a model trained on them will discriminate too, just faster and at scale. And ML is expensive: data labelling, compute, and the engineering of deployment all cost real money.",
              "The decision rule for 'should this be ML?' has three positive conditions and one negative. Yes, when (a) a pattern genuinely exists in the data, (b) data representing that pattern is available at sufficient volume, and (c) the pattern is too complex or too numerous to encode as fixed rules. No, when the task can be solved with a lookup table, a spreadsheet formula, or a few if-then rules — those are cheaper, faster, auditable and debuggable in ways ML is not. The art is resisting the urge to apply ML where simpler engineering would do.",
            ],
            keyTerms: [
              { term: "Distribution shift", definition: "The gap between the data distribution the model was trained on and the one it sees in production." },
              { term: "Correlation vs causation", definition: "ML captures statistical association; only controlled experiments establish cause and effect." },
              { term: "Algorithmic bias", definition: "Systematic unfairness in a model's outputs, usually inherited from biased training data." },
              { term: "Tabular data", definition: "Row-and-column structured data (CSV, SQL tables) — the native home of gradient boosting and forests." },
            ],
            callout: {
              type: "warning",
              title: "When ML is the wrong answer",
              body: "If a problem is solvable with a lookup table, a few business rules, or a spreadsheet formula, do not use ML. ML earns its complexity only when the pattern is real, present in data, and too complex to hand-code. Anything simpler is cheaper, auditable, and debuggable.",
            },
            bullets: [
              "Pattern recognition at scale (vision, speech, translation) is ML's strongest scope.",
              "Predictive modelling on tabular data: forests and gradient boosting dominate.",
              "Structure discovery without labels: clustering; compression/visualization: PCA.",
              "ML cannot create data, extrapolate beyond its training distribution, or infer causation.",
              "ML inherits every bias its data carries — silently and at scale.",
              "Use ML only when a pattern exists, data represents it, and rules are too complex to write.",
              "If a lookup table or spreadsheet formula works, simpler engineering wins.",
            ],
            diagram: {
              kind: "matrix",
              title: "Should this problem use ML?",
              caption: "Plot the problem by pattern complexity and data availability; ML wins only one quadrant.",
              axes: { x: "Pattern complexity (low -> high)", y: "Data availability (low -> high)" },
              quadrants: [
                { label: "Use BI dashboards / statistics", note: "simple pattern, plenty of data" },
                { label: "Machine learning sweet spot", note: "complex pattern, plenty of data" },
                { label: "Hand-written rules / lookup table", note: "simple pattern, little data" },
                { label: "Collect more data first", note: "complex pattern, little data — ML starves" },
              ],
            },
            examQuestions: [
              {
                q: "Discuss the scope and the major limitations of machine learning with suitable examples, and state the conditions under which a problem is right for ML.",
                marks: 7,
                outline: [
                  "Scope: vision, speech, recommendation, fraud, forecasting, clustering, compression",
                  "Limit: needs data at scale; small data rewards simple statistics",
                  "Limit: no extrapolation beyond the training distribution (weather-trained car)",
                  "Limit: correlation, not causation (hospital length-of-stay example)",
                  "Limit: inherits data bias at scale (loan approvals example)",
                  "Limit: labelling, compute and deployment costs are real",
                  "Right for ML when pattern exists + data exists + rules too complex to hand-write",
                ],
              },
              {
                q: "Why does a machine learning model fail outside its training distribution? Give one example.",
                marks: 3,
                outline: [
                  "ML interpolates within the data it saw; it has no model of unseen regions",
                  "A price model trained on city apartments mispredicts farmhouses",
                  "Defence: collect representative data, monitor drift, retrain",
                ],
              },
              {
                q: "Give two situations where machine learning is the wrong choice.",
                marks: 2,
                outline: [
                  "A lookup table or a few business rules already solve the task",
                  "No representative training data exists for the pattern",
                ],
              },
            ],
          },
          {
            number: "1.5",
            title: "Challenges of machine learning",
            body: [
              "Géron's famous list of 'main challenges' is the syllabus's own list, and each item is a way a project silently fails. Insufficient quantity of training data: even brilliant algorithms starve — it takes thousands of examples before simple word-sense disambiguation beats a table of hand-written rules. Non-representative training data: a churn model trained only on urban customers will mispredict rural ones — sampling bias becomes model bias. Poor-quality data: errors, outliers and noise force the model to learn garbage. Irrelevant features: 'garbage in, garbage out' — feature selection and engineering decide much of the outcome. Overfitting: the model memorizes training noise, performing perfectly on seen data and badly on new data. Underfitting: the model is too simple to capture even the underlying pattern. The two fitting failures are treated fully in the bias-variance section.",
              "The data-side challenges form a family: each is a way the input fails to represent the world. Insufficient quantity starves the algorithm — the rule of thumb is that complex models need exponentially more data as dimensionality grows, which is exactly the curse of Unit V. Non-representative data skews the learned function: a loan model trained only on approved applicants never learns what a rejection looks like, and so it cannot honestly score new applicants. Poor-quality data — typos, missing fields, wrong units, duplicate rows — turns the cost function into a measure of noise rather than signal. Irrelevant or redundant features dilute the signal, raise dimensionality, and slow training; feature selection and engineering are not optional polish but a core defence.",
              "The model-side challenges are the two fitting failures. Overfitting happens when the model has enough capacity to memorize the training set, including its noise: training accuracy approaches 100% while test accuracy collapses — the model has learned the particular sample, not the underlying distribution. Underfitting is the opposite failure: the model is too simple to capture even the true pattern, and both training and test accuracy stay low. Both are symptoms of mismatched model capacity — the dial that the bias-variance section (1.11) formalizes. The cures are symmetric: reduce capacity (regularize, prune, lower degree) for overfitting; raise capacity (more features, deeper model, weaker regularization) for underfitting.",
              "The system-side challenges arrive after deployment and are the hardest to debug. Concept drift means the true relationship between features and target shifts over time — a fraud model trained on 2022 patterns misses 2024 fraud techniques. Data leakage is the subtle bug where information from the test set sneaks into training (fitting the scaler on the whole dataset, including a future-derived feature), inflating validation scores and collapsing in production. Infrastructure and reproducibility challenges — random seeds not fixed, library versions drifting, training data not versioned — make models that cannot be retrained honestly. Each challenge has a known defence: monitoring for drift, strict train/test separation for leakage, and MLOps hygiene for reproducibility.",
            ],
            keyTerms: [
              { term: "Overfitting", definition: "Model memorizes training noise; high train accuracy, low test accuracy — cure is regularization or simpler model." },
              { term: "Underfitting", definition: "Model too simple to capture the true pattern; both train and test accuracy stay low — cure is more capacity." },
              { term: "Sampling bias", definition: "Training data is not representative of the production population, so the model mispredicts on under-represented groups." },
              { term: "Data leakage", definition: "Information from the test/validation set accidentally enters training, inflating scores and breaking in production." },
              { term: "Feature selection", definition: "Choosing the most informative subset of features to reduce dimensionality and noise." },
            ],
            diagram: {
              kind: "fork",
              title: "Where ML projects fail",
              caption: "Three families of challenge — data, model, system — each with its own defence.",
              start: "ML project",
              branches: [
                { label: "Data side", outcome: "too little, biased, noisy, or irrelevant — fix with collection and preprocessing", good: false },
                { label: "Model side", outcome: "over- or under-fit — fix with capacity tuning and regularization", good: false },
                { label: "System side", outcome: "drift, leakage, reproducibility — fix with MLOps and monitoring", good: false },
              ],
            },
            bullets: [
              "Insufficient quantity: even great algorithms starve without enough examples.",
              "Non-representative data: sampling bias becomes model bias.",
              "Poor-quality data: errors, outliers and duplicates turn the cost function into a noise meter.",
              "Irrelevant features: garbage in, garbage out — selection and engineering are core defence.",
              "Overfitting: memorizes training noise; low train error, high test error.",
              "Underfitting: too simple to capture even the true pattern; both errors high.",
              "System side: concept drift, data leakage, reproducibility gaps after deployment.",
            ],
            callout: {
              type: "exam",
              title: "The Geron list, with defences",
              body: "Write each challenge paired with its defence: more/better data for quantity and quality, representative sampling for bias, feature selection for irrelevant features, regularization/augmentation/ensembles for overfitting, more capacity for underfitting, monitoring for drift, strict train/test separation for leakage.",
            },
            examQuestions: [
              {
                q: "Explain the main challenges of machine learning — insufficient data, non-representative data, poor-quality data, irrelevant features, overfitting and underfitting — and give the standard defence for each.",
                marks: 7,
                outline: [
                  "Insufficient quantity: complex models need exponentially more data; defence = more/synthetic data",
                  "Non-representative data: sampling bias; defence = proper sampling, stratification",
                  "Poor quality: noise, outliers, duplicates; defence = cleaning and validation",
                  "Irrelevant features: dilute signal; defence = feature selection and engineering",
                  "Overfitting: memorized noise; defence = regularization, pruning, augmentation, ensembles",
                  "Underfitting: capacity too low; defence = richer model, more features, less regularization",
                  "System side: drift and leakage; defence = monitoring and train/test discipline",
                ],
              },
              {
                q: "Define data leakage with one example and state how to prevent it.",
                marks: 3,
                outline: [
                  "Test/validation information accidentally enters training",
                  "Example: fitting the scaler or imputer on the full dataset instead of train only",
                  "Prevention: fit every preprocessing step on X_train, transform X_test",
                ],
              },
              {
                q: "What is sampling bias in training data?",
                marks: 2,
                outline: [
                  "The training sample does not represent the production population",
                  "A churn model trained only on urban customers mispredicts rural ones",
                ],
              },
            ],
          },
          {
            number: "1.6",
            title: "Data visualization",
            body: [
              "Before any model is trained, the data itself must be seen. Visualization is the first analysis tool: scatter plots expose relationships between pairs of features and make clusters visible before clustering runs; histograms show each feature's distribution, skew and outliers; box plots summarize medians and spreads for quick comparisons; correlation heatmaps show which features move together (and which are redundant); pair plots combine these into a matrix of small charts per feature pair. Two rules of practice: always plot the target variable against the most promising features — the shape of the cloud often suggests the model (linear? curved? clustered?) — and always visualize the training and test sets separately, because a model is judged by data it never saw.",
              "Each chart type answers a different question, and choosing the right one is half the skill. Scatter plots reveal bivariate relationships and clusters — the right chart for suspecting a correlation between two features or for visualizing K-Means before it runs. Histograms reveal a single feature's distribution — is it Gaussian, skewed, bimodal, full of outliers? Box plots compress that distribution into five numbers (min, Q1, median, Q3, max) and flag outliers beyond the 1.5·IQR fences, ideal for comparing many features at a glance. Correlation heatmaps reveal redundancy: two features with correlation 0.99 are carrying the same information, and one can often be dropped. Pair plots (a matrix of scatter plots, with histograms on the diagonal) give a 360° view of a small feature set in one image.",
              "Visualization differs between supervised and unsupervised work. In supervised learning the target y is a colour or a separating axis — every plot is coloured by class or sized by regression target, so the eye looks for separability. In unsupervised learning there is no target; the eye looks for natural groupings, density ridges, or low-dimensional structure that clustering or PCA could exploit. In both cases the visualization step often suggests the algorithm: a clear linear separation suggests logistic regression; nested curved boundaries suggest a tree or kernel SVM; visible blobs suggest K-Means; an elongated manifold suggests manifold learning.",
              "The discipline of honest visualization is the same as honest evaluation: never trust a plot drawn on the test set to choose a model. Plot the training data to choose features and algorithm families; reserve the test set purely for final scoring, untouched by the modelling eye. Visualize residuals (prediction minus truth) after fitting a regressor — patterns in residuals reveal systematic errors that a single accuracy number hides. And visualize class balance before training: a 99%-negative binary problem needs precision-recall thinking from the start, not after the model naively predicts 'negative' everywhere and scores 99%.",
            ],
            keyTerms: [
              { term: "Scatter plot", definition: "Two features on x and y axes; reveals bivariate relationships, clusters and outliers." },
              { term: "Histogram", definition: "Bins a single feature's values to show its distribution — shape, skew, modes." },
              { term: "Box plot", definition: "Summarizes a feature by min, Q1, median, Q3, max and flags outliers beyond the 1.5·IQR fences." },
              { term: "Correlation heatmap", definition: "A coloured matrix of pairwise feature correlations, revealing redundancy and co-movement." },
              { term: "Pair plot", definition: "Matrix of scatter plots with histograms on the diagonal, giving a 360° view of a small feature set." },
            ],
            bullets: [
              "Scatter plot: relationship between two features; also reveals clusters and outliers.",
              "Histogram: one feature's distribution — shape, skew, modes, gaps.",
              "Box plot: min, Q1, median, Q3, max; flags outliers beyond the 1.5*IQR fences.",
              "Correlation heatmap: which features move together and which are redundant.",
              "Pair plot: scatter matrix with histograms on the diagonal for a small feature set.",
              "Colour plots by the target in supervised work; look for separability.",
              "Plot training data only to choose features/models; never peek at the test set.",
            ],
            diagram: {
              kind: "fork",
              title: "Which chart answers which question?",
              caption: "Visualization is a question-driven choice — and one path is forbidden.",
              start: "What do you want to see?",
              branches: [
                { label: "Relationship between two features", outcome: "scatter plot — shape suggests the model family", good: true },
                { label: "One feature's distribution", outcome: "histogram for shape; box plot for outlier flags", good: true },
                { label: "Feature redundancy", outcome: "correlation heatmap — drop one of a 0.99 pair", good: true },
                { label: "Plot chosen using the test set", outcome: "leaks test information into modelling decisions", good: false },
              ],
            },
            callout: {
              type: "warning",
              title: "The test set is not for looking at",
              body: "Visualization on the test set is data leakage with a GUI. Explore and choose features on the training split; reserve the test set for the final untouched score. Also plot residuals after fitting a regressor — patterns there reveal systematic errors an accuracy number hides.",
            },
            codeExample: {
              language: "python",
              caption: "visualize.py — first look at the data",
              code: `import matplotlib.pyplot as plt
import pandas as pd

df = pd.read_csv("housing.csv")

df.hist(bins=30, figsize=(10, 6))     # distribution of every feature
plt.show()

df.plot.scatter(x="area", y="price", alpha=0.3)  # bivariate relationship

corr = df.corr(numeric_only=True)
print(corr["price"].sort_values(ascending=False))  # rank features by correlation`,
            },
            examQuestions: [
              {
                q: "Explain the role of data visualization in the machine learning workflow. Describe scatter plots, histograms, box plots, correlation heatmaps and pair plots, and state which question each answers.",
                marks: 7,
                outline: [
                  "Visualization precedes modelling: exposes relationships, skew, outliers, clusters",
                  "Scatter plot: bivariate relationship; suggests linear vs curved vs clustered",
                  "Histogram: single-feature distribution, modes and skew",
                  "Box plot: five-number summary and 1.5*IQR outlier fences",
                  "Heatmap: pairwise correlations reveal redundant features",
                  "Pair plot: all pairs at once for small feature sets",
                  "Discipline: explore on training data only; visualize residuals after fitting",
                ],
              },
              {
                q: "When would you prefer a box plot to a histogram?",
                marks: 3,
                outline: [
                  "Comparing many features side by side at a glance",
                  "Quick outlier detection via the 1.5*IQR fences",
                  "Histograms show shape better; box plots compress to five numbers",
                ],
              },
              {
                q: "Which chart reveals redundant features, and what action does it suggest?",
                marks: 2,
                outline: [
                  "The correlation heatmap",
                  "Two features with correlation near 1 carry the same information; drop one",
                ],
              },
            ],
          },
          {
            number: "1.7",
            title: "Hypothesis function and testing",
            body: [
              "In model-based learning, the fitted model is called the hypothesis h — a candidate function from features to target, drawn from a hypothesis space. Training selects the hypothesis that minimizes a cost function such as mean squared error for regression or log-loss for classification: for linear regression, h(x) = θ₀ + θ₁x₁ + ⋯ + θₙxₙ, and the cost J(θ) averages the squared gap between h(x) and the true y. The phrase 'hypothesis testing' carries a second, statistical meaning: framing model comparison as a test of hypotheses — null hypothesis 'model A and model B perform the same' — and rejecting it only when the observed performance gap on held-out data would be too unlikely under the null (a t-test or McNemar's test). The practical discipline: never judge a hypothesis on the data that produced it — hence the train/test split.",
              "The hypothesis space H is the set of all functions an algorithm can possibly express — the linear model's H is the set of all hyperplanes, the degree-3 polynomial's H is the set of all cubic curves, the deep network's H is enormous. The choice of H is the algorithm's inductive bias: the assumptions baked in before any data is seen. A small H (linear model) learns fast and generalizes well if the true relationship is linear, but underfits if it is curved; a large H (deep network) fits anything but needs vast data to avoid overfitting. Choosing the algorithm is choosing the inductive bias — there is no free lunch, no algorithm that beats all others on all problems.",
              "Honest evaluation of a hypothesis needs three splits, not two. The training set fits the parameters; the validation set tunes hyperparameters (the model family, the regularization strength, the tree depth) by providing an unbiased signal during development; the test set is locked away until the very end and touched exactly once, to report final performance. On small data, k-fold cross-validation squeezes every row: split the training set into k folds, train on k−1 and validate on the held fold, rotate, and average — getting k unbiased validation scores from k training runs. The output is a robust estimate of generalization with confidence intervals.",
              "Statistical hypothesis testing formalizes model comparison. The null hypothesis H₀ states 'no real difference between models A and B'; the alternative H₁ states 'A is better'. The test computes a p-value — the probability of observing a performance gap at least as large as the one measured, assuming H₀ is true. If p < 0.05 we reject H₀ and call the difference significant; otherwise we cannot distinguish the gap from chance. For paired classifications on the same test set, McNemar's test compares the discordant cells; for regression residuals, a t-test on the per-sample losses. The discipline prevents declaring victory over noise — a 1% accuracy gain on 50 test examples is statistically indistinguishable from luck.",
            ],
            keyTerms: [
              { term: "Hypothesis (h)", definition: "A candidate function from features to target, drawn from the hypothesis space and scored by the cost." },
              { term: "Hypothesis space (H)", definition: "The set of all functions the algorithm can express; its size and shape are the inductive bias." },
              { term: "Inductive bias", definition: "The assumptions the algorithm brings to learning beyond the data — linear, smooth, tree-structured, etc." },
              { term: "Cost function (J)", definition: "The quantity training minimizes — MSE for regression, log-loss for classification." },
              { term: "Cross-validation", definition: "k-fold rotation that gives k unbiased validation scores from one training set, robust on small data." },
            ],
            codeExample: {
              language: "python",
              caption: "train_test_split.py — scikit-learn",
              code: `from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression

# hold out 20% of rows for honest evaluation — the unseen judge
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42)

model = LinearRegression().fit(X_train, y_train)  # fit h(x)
print(model.score(X_test, y_test))                # R^2 on unseen data`,
            },
            bullets: [
              "Hypothesis h: the fitted candidate function from features to target.",
              "Hypothesis space H: everything the algorithm can express — its inductive bias.",
              "Small H (linear) generalizes well when the truth is linear but underfits curves.",
              "Large H (deep nets) fits anything but needs vast data to avoid memorizing noise.",
              "Cost functions: MSE for regression, log-loss for classification.",
              "Three splits: train fits parameters, validation tunes hyperparameters, test scores once.",
              "k-fold cross-validation gives k unbiased scores from one training set.",
              "Statistical testing: null H0 'models equal'; reject only if p < alpha (e.g. 0.05).",
            ],
            diagram: {
              kind: "flow",
              title: "A statistical hypothesis test for model comparison",
              caption: "The five steps that keep a performance gap from being luck.",
              steps: [
                { label: "State H0 and H1", note: "H0: models A and B perform the same" },
                { label: "Choose significance", note: "alpha = 0.05 is conventional" },
                { label: "Compute the statistic", note: "per-sample loss gap, or McNemar discordant cells" },
                { label: "Compare to critical value", note: "or read the p-value" },
                { label: "Reject or fail to reject", note: "p < alpha: the gap is real" },
              ],
            },
            callout: {
              type: "exam",
              title: "Two meanings, one exam",
              body: "'Hypothesis' in ML means the fitted function h; 'hypothesis testing' in statistics means deciding between H0 and H1 via a p-value. A 7-mark question may want both: define h and H, then describe the train/validation/test discipline and the p-value procedure for comparing two models.",
            },
            examQuestions: [
              {
                q: "Explain the hypothesis function h and the hypothesis space H in model-based learning. Describe the role of inductive bias and the train/validation/test discipline for honest evaluation.",
                marks: 7,
                outline: [
                  "h(x) = theta0 + theta1*x1 + ... + thetan*xn for the linear model",
                  "Training minimizes a cost J: MSE for regression, log-loss for classification",
                  "H = all functions the algorithm can express; its size/shape is the inductive bias",
                  "Small H underfits curved truths; large H overfits without enough data",
                  "Training set fits parameters; validation tunes hyperparameters",
                  "Test set is locked away and touched exactly once",
                  "k-fold cross-validation: rotate folds, average k unbiased scores",
                ],
              },
              {
                q: "In model comparison, what are the null hypothesis and the p-value?",
                marks: 3,
                outline: [
                  "H0: models A and B have equal true performance",
                  "p-value: probability of a gap at least as large as observed, assuming H0",
                  "p < 0.05: reject H0 and call the difference significant",
                ],
              },
              {
                q: "Why must the test set be touched only once?",
                marks: 2,
                outline: [
                  "Repeated tuning against the test set leaks test information into choices",
                  "The final score would no longer be an unbiased estimate",
                ],
              },
            ],
          },
          {
            number: "1.8",
            title: "Data pre-processing",
            body: [
              "Raw data is not model-ready, and pre-processing is the umbrella term for everything between collection and training. Missing values are handled by dropping rows or columns (when sparse), or imputing — with the mean, median, most-frequent value, or a model's prediction (KNNImputer). Categorical variables must become numbers: ordinal encoding for ordered categories (small < medium < large), one-hot encoding for unordered ones (colour → one binary column per value). Outliers are detected by boxplot/IQR fences or z-scores and then clipped, transformed (log), or removed. Duplicates and inconsistent labels are scrubbed. The pre-processing rules themselves are fitted on the training split only — computing an imputation mean from the full dataset leaks test information into training, the subtlest bug in beginner pipelines and the reason scikit-learn wraps preprocessing in fit_transform(X_train) / transform(X_test) pairs.",
              "Missing values are the most common preprocessing task and the strategy depends on why the value is missing. If missing completely at random (MCAR), simple mean or median imputation is unbiased. If missing conditional on another observed feature (MAR), a model-based imputer like KNNImputer or IterativeImputer uses the other features to predict the missing one. If missing not at random (MNAR) — the value itself caused its absence — the missingness is signal, and a 'missing' indicator column should accompany the imputation. Dropping rows is fine when fewer than 5% are affected and the data is large; dropping columns is fine when most of a feature is missing. Imputation is always preferred when data is scarce.",
              "Categorical encoding converts text labels into numbers in a way that respects their meaning. Ordinal encoding maps each category to an integer (small=0, medium=1, large=2) and is correct only when the categories have a true order — otherwise the integer gaps invent false relationships. One-hot encoding creates one binary column per category (colour_red, colour_green, colour_blue) and is the safe default for unordered categories, at the cost of widening the feature matrix. Target encoding replaces each category with the mean of the target for that category — powerful for high-cardinality features like zip code, but it must be cross-validated to avoid leaking the target into the feature (a form of data leakage). For tree models, even ordinal encoding of unordered categories works because trees split on thresholds and never assume linearity.",
              "Outlier handling and the leakage rule close out preprocessing. Outliers detected by z-score (|z| > 3) or IQR fences (outside Q1 − 1.5·IQR to Q3 + 1.5·IQR) can be clipped to the fence, transformed (log or Box-Cox for skewed features), or removed if they are measurement errors. Removing genuine extreme values is dangerous — they may be the signal (the rare fraud case, the high-value customer). The leakage rule binds all preprocessing together: every estimator — imputer, scaler, encoder, PCA — is fitted on the training split only, then applied to both train and test via transform. Fitting on the whole dataset lets test statistics leak into training parameters; fitting on train only is the discipline that keeps evaluation honest.",
            ],
            keyTerms: [
              { term: "Imputation", definition: "Filling missing values with mean, median, mode, or a model's prediction instead of dropping the row." },
              { term: "One-hot encoding", definition: "Creating one binary column per unordered category, avoiding false ordinal relationships." },
              { term: "Ordinal encoding", definition: "Mapping ordered categories to integers (small=0, medium=1, large=2)." },
              { term: "Outlier", definition: "A point lying far from the rest, detected by z-score or IQR fences — clipped, transformed, or removed." },
              { term: "Data leakage", definition: "Test information entering training through preprocessing fitted on the full dataset — the silent score inflator." },
            ],
            diagram: {
              kind: "pipeline",
              title: "Preprocessing pipeline",
              caption: "Raw → clean → encode → scale — each step fitted on train only, applied to both.",
              stages: [
                { label: "Raw data", note: "missing · categorical · outliers" },
                { label: "Impute", note: "mean / median / model" },
                { label: "Encode", note: "one-hot / ordinal" },
                { label: "Scale", note: "min-max / z-score" },
                { label: "Model-ready", note: "fit on train, transform on test" },
              ],
            },
            bullets: [
              "Imputation: mean/median/mode, or a model-based imputer (KNNImputer) for MAR data.",
              "MNAR missingness is signal: add a 'missing' indicator column alongside imputation.",
              "Ordinal encoding only for truly ordered categories; one-hot for unordered ones.",
              "Target encoding for high-cardinality features must be cross-validated to avoid leakage.",
              "Outliers: detect by z-score (|z| > 3) or IQR fences; clip, transform, or remove carefully.",
              "Extreme values may be the signal — never delete them blindly.",
              "The leakage rule: fit every transformer on train only, transform both splits.",
            ],
            callout: {
              type: "warning",
              title: "The subtlest beginner bug",
              body: "Fitting preprocessing on the full dataset computes means, categories and scales from the test set too — inflating validation scores that collapse in production. scikit-learn's fit_transform(X_train) / transform(X_test) pattern, ideally inside a Pipeline, is the discipline that keeps evaluation honest.",
            },
            codeExample: {
              language: "python",
              caption: "preprocess.py — a leakage-safe pipeline",
              code: `from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.impute import SimpleImputer
from sklearn.preprocessing import OneHotEncoder, StandardScaler

num = Pipeline([("impute", SimpleImputer(strategy="median")),
                ("scale", StandardScaler())])
cat = Pipeline([("impute", SimpleImputer(strategy="most_frequent")),
                ("onehot", OneHotEncoder(handle_unknown="ignore"))])

prep = ColumnTransformer([("num", num, num_cols),
                          ("cat", cat, cat_cols)])
X_train_p = prep.fit_transform(X_train)   # fit on TRAIN only
X_test_p = prep.transform(X_test)         # reuse the same fitted rules`,
            },
            examQuestions: [
              {
                q: "Explain the major data preprocessing steps — handling missing values, categorical encoding and outlier treatment — and state the leakage rule that governs all of them.",
                marks: 7,
                outline: [
                  "Missing values: MCAR -> mean/median; MAR -> model-based imputer; MNAR -> indicator column",
                  "Drop rows only if few affected and data is large; drop columns if mostly missing",
                  "Ordinal encoding for ordered categories; one-hot for unordered",
                  "Target encoding needs cross-validation to avoid leaking the target",
                  "Outliers: z-score or IQR detection; clip, log-transform, or remove measurement errors",
                  "Genuine extreme values may be signal (fraud, high-value customers)",
                  "Leakage rule: fit on train only, transform both train and test",
                ],
              },
              {
                q: "When is ordinal encoding correct and when must you use one-hot encoding?",
                marks: 3,
                outline: [
                  "Ordinal: categories have a true order (small < medium < large)",
                  "One-hot: unordered categories, so integer gaps do not invent false relationships",
                  "Trees tolerate ordinal encoding of unordered categories anyway (threshold splits)",
                ],
              },
              {
                q: "List three strategies for handling missing values.",
                marks: 2,
                outline: [
                  "Impute with mean/median/mode or a model-based imputer",
                  "Add a missing-indicator column and impute",
                  "Drop rows or columns when sparsity justifies it",
                ],
              },
            ],
          },
          {
            number: "1.9",
            title: "Data augmentation",
            body: [
              "When data is scarce, augmentation manufactures new, realistic variants of existing examples, expanding the dataset without new collection. For images: rotations, crops, flips, brightness and noise — a cat photo flipped is still a cat, but a new training point. For text: synonym replacement, back-translation, random insertion and deletion. For audio: pitch and speed shifting, background noise. For tabular data: SMOTE-style interpolation of minority-class rows to fight class imbalance. The unifying principle: transformations must preserve the label while changing the input enough to teach invariance — a '9' rotated 180° becomes a '6', so augmentation always needs domain sense. Augmentation is regularization by other means: it confronts the model with variety, directly attacking the overfitting end of the bias-variance dial.",
              "Each data type has its own augmentation toolkit because the invariances differ. Images are the richest case: horizontal flips, small rotations, random crops, brightness and contrast jitter, and even CutMix (pasting patches between images) all teach the model that a cat is still a cat when shifted, rotated, or partially occluded. Text is trickier because word order carries meaning: synonym replacement preserves semantics but back-translation (English→French→English) generates paraphrases, and random deletion of low-information words teaches robustness. Audio uses pitch shifting, time stretching, and adding background noise (street, café) so a speech model trained on clean audio still recognizes noisy production audio. Time-series augmentation adds jitter, scales magnitudes, or windows the series at different offsets.",
              "Tabular data is the hardest to augment because rows are not composed of spatially or semantically invariant parts. The standard tabular technique is SMOTE (Synthetic Minority Over-sampling Technique): for a minority-class row, find its k nearest minority-class neighbours and synthesize a new row by interpolating between the row and a randomly chosen neighbour — a point along the segment. This creates plausible new minority examples that lie on the minority manifold rather than as exact duplicates, balancing the class distribution for the classifier. Variants like SMOTE-NC handle categorical features by taking the majority category in the neighbourhood. Augmentation is also the standard cure for class imbalance: instead of duplicating minority rows (which a tree treats as one row with higher weight), SMOTE synthesizes genuinely new ones.",
              "The invariance principle is the rule that keeps augmentation honest: a transformation is valid only if the label is invariant under it. For digit recognition, a small rotation is fine but 180° flips '9' into '6'. For medical imaging, a horizontal flip of a chest X-ray is fine but a vertical flip is not — anatomy is not vertically symmetric. For sentiment classification, synonym replacement of adjectives can change sentiment (good → bad). The augmentation pipeline is part of the model's inductive bias, and a wrong augmentation is worse than none: it teaches the model false invariances that cost real accuracy on the test set. Always validate augmentation by measuring held-out accuracy with and without it.",
            ],
            keyTerms: [
              { term: "Data augmentation", definition: "Generating realistic label-preserving variants of existing examples to expand the dataset without new collection." },
              { term: "Invariance", definition: "A label property unaffected by a transformation — the requirement that makes an augmentation valid." },
              { term: "SMOTE", definition: "Synthetic Minority Over-sampling Technique — interpolates between minority-class neighbours to synthesize new rows." },
              { term: "Back-translation", definition: "Translating text to another language and back to generate paraphrases for text augmentation." },
              { term: "Class imbalance", definition: "One class far outnumbers others in the training data — augmentation and re-weighting are the standard cures." },
            ],
            bullets: [
              "Augmentation manufactures label-preserving variants: new data without new collection.",
              "Images: flips, crops, rotations, brightness/contrast jitter, CutMix.",
              "Text: synonym replacement, back-translation, random insertion/deletion.",
              "Audio: pitch shifting, time stretching, background noise.",
              "Tabular: SMOTE interpolates between minority-class neighbours.",
              "The invariance principle: a transformation is valid only if the label is invariant.",
              "Augmentation is regularization — variety attacks the overfitting end of the dial.",
            ],
            diagram: {
              kind: "fork",
              title: "One training image, four augmentations",
              caption: "Every branch is a new training point — as long as the label survives the transformation.",
              start: "One labelled image (cat)",
              branches: [
                { label: "Horizontal flip", outcome: "still a cat — new invariance learned", good: true },
                { label: "Small rotation / random crop", outcome: "still a cat — position invariance", good: true },
                { label: "Brightness / noise jitter", outcome: "still a cat — lighting robustness", good: true },
                { label: "180-degree rotation", outcome: "a '9' becomes a '6' — false invariance", good: false },
              ],
            },
            callout: {
              type: "tip",
              title: "A wrong augmentation is worse than none",
              body: "Augmentation is part of the model's inductive bias. A vertical flip of chest X-rays or 180-degree rotation of digits teaches false invariances that cost real test accuracy. Always measure held-out accuracy with and without a new augmentation before adopting it.",
            },
            codeExample: {
              language: "python",
              caption: "augment.py — numpy variants of one image",
              code: `import numpy as np

img = np.random.rand(28, 28)                     # a 28x28 grayscale image

flipped  = img[:, ::-1]                           # horizontal flip
rot90    = np.rot90(img, k=1)                     # 90-degree rotation
brighter = np.clip(img * 1.3, 0, 1)               # brightness jitter
noisy    = np.clip(img + np.random.normal(0, 0.05, img.shape), 0, 1)

# each variant keeps the label 'cat' — the invariance principle at work
print(flipped.shape, rot90.shape, round(brighter.mean(), 3), round(noisy.std(), 3))`,
            },
            examQuestions: [
              {
                q: "What is data augmentation? Explain augmentation techniques for images, text, audio and tabular data, and state the invariance principle with one counterexample.",
                marks: 7,
                outline: [
                  "Definition: generate realistic label-preserving variants to expand the dataset",
                  "Images: flips, crops, rotations, brightness, CutMix teach spatial invariances",
                  "Text: synonym replacement, back-translation paraphrases",
                  "Audio: pitch/speed shift, added background noise",
                  "Tabular: SMOTE interpolates between minority-class neighbours",
                  "Invariance principle: transformation must preserve the label",
                  "Counterexample: rotating a '9' by 180 degrees makes a '6' — label destroyed",
                ],
              },
              {
                q: "Explain SMOTE with a small example.",
                marks: 3,
                outline: [
                  "Synthetic Minority Over-sampling Technique for imbalanced tabular data",
                  "For a minority row, find k nearest minority neighbours",
                  "Synthesize a new row by interpolating along the segment to a random neighbour",
                ],
              },
              {
                q: "Give one valid and one invalid augmentation for digit recognition, with reasons.",
                marks: 2,
                outline: [
                  "Valid: small rotation/shift — the digit's identity is invariant",
                  "Invalid: 180-degree rotation — '9' becomes '6', label changes",
                ],
              },
            ],
          },
          {
            number: "1.10",
            title: "Normalizing data sets",
            body: [
              "Many algorithms are scale-sensitive: distance-based methods (K-NN, K-Means, SVM with RBF) and gradient-descent-trained models learn badly when one feature ranges 0–100000 and another 0–1 — the large feature dominates every distance and every gradient step. Normalization puts features on a common scale. Min-max scaling maps each feature to [0, 1]: x′ = (x − min)/(max − min) — preserves shape, but the min and max of future data may fall outside, and outliers squash everything else. Standardization (z-score) centres each feature at mean 0 with unit variance: x′ = (x − μ)/σ — less sensitive to outliers and the safer default. Robust scaling uses median and IQR for heavily outlier-laden data. Trees and forests split one feature at a time on thresholds, so they need no scaling at all — a favourite exam contrast.",
              "The reason scaling matters is geometric and arithmetic at once. Distance-based algorithms like K-NN, K-Means and SVM compute ‖x − z‖ across all features; if one feature has range 0–100000 and another 0–1, the first dominates every distance and the second is effectively invisible. Gradient descent converges faster on scaled features because the cost surface becomes more spherical — on unscaled features the surface is a long narrow valley, and gradient descent bounces back and forth across the valley instead of descending its long axis. Tree-based models split one feature at a time on a threshold; the scale of that feature is irrelevant because the algorithm searches over all thresholds. This single contrast — trees need no scaling, distances and gradients do — is a guaranteed exam question.",
              "The three main scalars differ in robustness. Min-max scaling maps each feature to [0, 1] by x′ = (x − min)/(max − min): it preserves the original shape, guarantees a bounded range (useful for neural networks with sigmoid activations), but a single outlier squashes all other values into a tiny sub-range. Standardization (z-score) centers each feature at mean 0 with unit variance by x′ = (x − μ)/σ: the resulting values have no bounded range but are roughly Gaussian-shaped, and a single outlier shifts the mean and inflates σ without destroying resolution for the rest. Robust scaling uses median and IQR: x′ = (x − median)/IQR — almost immune to outliers, used when the data has extreme tails. The default in most code is standardization; min-max is chosen for neural nets and image pixel scaling; robust is the outlier-heavy fallback.",
              "The leakage rule applies to scaling exactly as to imputation. The scaler is fitted on the training split only — its min, max, mean and σ are computed from X_train — and then applied to both train and test via transform. Fitting on the whole dataset computes σ from the test set too, leaking test statistics into training and inflating the validation score. The code example below shows the pattern: fit on X_train, transform both. Scaling is also applied after splitting, after encoding, and before PCA — the order matters, because PCA is itself variance-based and will be misled by unscaled features.",
            ],
            keyTerms: [
              { term: "Min-max scaling", definition: "Maps each feature to [0, 1] via (x − min)/(max − min); bounded range, outlier-sensitive." },
              { term: "Standardization (z-score)", definition: "Centers each feature at mean 0, unit variance via (x − μ)/σ; the safer default." },
              { term: "Robust scaling", definition: "Uses median and IQR — almost immune to outliers, the outlier-heavy fallback." },
              { term: "Scale-sensitivity", definition: "Distance- and gradient-based algorithms are scale-sensitive; tree-based ones are not." },
            ],
            codeExample: {
              language: "python",
              caption: "scaling.py — two normalizers",
              code: `from sklearn.preprocessing import MinMaxScaler, StandardScaler

mm  = MinMaxScaler().fit(X_train)     # min-max  → [0, 1]
std = StandardScaler().fit(X_train)   # z-score  → mean 0, var 1

X_train_mm  = mm.transform(X_train);  X_test_mm  = mm.transform(X_test)
X_train_std = std.transform(X_train); X_test_std = std.transform(X_test)
# scalers are fitted on TRAIN only — the test set is transformed, never fitted`,
            },
            bullets: [
              "Min-max: x' = (x - min)/(max - min); bounded [0,1], outlier-sensitive.",
              "Standardization: x' = (x - mean)/std; mean 0, variance 1, the safe default.",
              "Robust scaling: (x - median)/IQR — for outlier-heavy features.",
              "Distance-based methods (K-NN, K-Means, RBF-SVM) are meaningless on unscaled data.",
              "Gradient descent converges faster on scaled features (rounder cost surface).",
              "Trees and forests split one feature at a time — no scaling needed.",
              "Fit the scaler on X_train only; transform X_test with the same parameters.",
            ],
            diagram: {
              kind: "compare",
              title: "Min-max scaling vs standardization",
              caption: "Two ways to put features on one scale — the choice is about outliers and boundedness.",
              left: {
                heading: "Min-max scaling",
                items: [
                  "x' = (x - min)/(max - min)",
                  "Maps to a bounded [0, 1] range",
                  "One outlier squashes all other values into a tiny sub-range",
                  "Chosen for neural nets and image pixel data",
                ],
              },
              right: {
                heading: "Standardization (z-score)",
                items: [
                  "x' = (x - mean)/std",
                  "Mean 0, variance 1 — unbounded, roughly Gaussian shape",
                  "Outlier shifts mean/std without destroying resolution",
                  "The safe default; required before K-NN, SVM, PCA",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "The guaranteed contrast",
              body: "'Which models need scaling and which do not?' is a favourite question. Answer in one line: distance-based (K-NN, K-Means, SVM) and gradient-based (logistic, neural nets, PCA) need scaling; tree-based (decision tree, forest, boosting) do not, because they split one feature at a time on thresholds.",
            },
            examQuestions: [
              {
                q: "Explain min-max scaling, standardization and robust scaling with their formulas. Why are distance-based and gradient-based models scale-sensitive while tree-based models are not?",
                marks: 7,
                outline: [
                  "Min-max: (x - min)/(max - min) -> [0,1]; shape-preserving, outlier-sensitive",
                  "Standardization: (x - mean)/std -> mean 0, variance 1; the default",
                  "Robust: (x - median)/IQR; nearly immune to outliers",
                  "Distances: a 0-100000 feature dominates every ||x - z|| computation",
                  "Gradients: unscaled features make the cost surface a long narrow valley",
                  "Trees split one feature at a time on thresholds — scale is irrelevant",
                  "Leakage rule: fit the scaler on X_train, transform X_test with it",
                ],
              },
              {
                q: "Why must the scaler be fitted on the training set only?",
                marks: 3,
                outline: [
                  "Fitting on all data computes mean/std from test rows too",
                  "That leaks test statistics into training and inflates validation scores",
                  "Correct pattern: fit(X_train), then transform(X_train) and transform(X_test)",
                ],
              },
              {
                q: "Which scaler is the outlier-heavy fallback and why?",
                marks: 2,
                outline: [
                  "Robust scaling using median and IQR",
                  "Median and IQR are resistant statistics — extreme values barely move them",
                ],
              },
            ],
          },
          {
            number: "1.11",
            title: "The bias-variance tradeoff",
            body: [
              "A model's total error decomposes into three parts: bias² + variance + irreducible noise. Bias is error from wrong assumptions — a straight line fitted to curved data is wrong everywhere in the same way; high bias means underfitting. Variance is error from sensitivity to the particular training sample — a high-degree polynomial through every training point changes wildly when one point moves; high variance means overfitting. Irreducible noise is the data's own floor, untouched by any model. The tradeoff: increasing model complexity lowers bias but raises variance; reducing complexity does the reverse; total error is U-shaped, and the goal is the bottom of the U — reached by choosing the right capacity, or by regularizing a flexible model. Diagnosis without formulas: high training error and high test error → underfitting; low training error, high test error → overfitting.",
              "The U-curve is the picture that earns exam marks. On the x-axis plot model complexity (a degree-1 line, degree-3 cubic, degree-15 polynomial, …); on the y-axis plot error. The bias² curve falls as complexity grows — more capacity means less chance of underfitting. The variance curve rises as complexity grows — more capacity means more sensitivity to the particular training sample. The total error is the sum of these two plus a flat line of irreducible noise, and it traces a U: high on the left (underfitting regime), high on the right (overfitting regime), minimum in the middle (the sweet spot). Reading the U aloud with the three regimes labelled is the standard answer to the bias-variance question.",
              "A worked example makes the regimes concrete. Fit polynomials of increasing degree to a noisy sine wave on 20 training points. Degree 1 (a straight line) underfits: training MSE 0.30, test MSE 0.32 — high bias, low variance, both errors large. Degree 3 captures the wave shape well: training MSE 0.04, test MSE 0.06 — balanced, the bottom of the U. Degree 15 passes through almost every training point: training MSE 0.001, test MSE 0.40 — low bias, exploding variance, the model has memorized the noise. The diagnostic triplet (train MSE, test MSE, gap) tells you which regime you are in: large both = underfit, large gap = overfit, small both = balanced.",
              "The cures for each regime are symmetric. For underfitting (high bias): increase model complexity (higher polynomial degree, deeper tree, more neurons), add informative features, reduce regularization. For overfitting (high variance): decrease model complexity, add regularization (L1/L2, dropout), collect more training data, use augmentation (section 1.9), or use an ensemble that averages many high-variance models (Unit IV's bagging). Cross-validation finds the complexity at the bottom of the U: train models at several complexities, plot validation MSE, and pick the minimum. Regularization is the dial that lets a flexible model behave as if it were simpler, smoothing the variance curve without rebuilding the architecture.",
            ],
            keyTerms: [
              { term: "Bias", definition: "Error from wrong assumptions; high bias means underfitting — a too-simple model is wrong everywhere in the same way." },
              { term: "Variance", definition: "Error from sensitivity to the training sample; high variance means overfitting — predictions swing wildly across samples." },
              { term: "Irreducible noise", definition: "The data's own floor of error that no model can reduce, however complex." },
              { term: "U-curve", definition: "Total error vs complexity: high on the left (underfit), high on the right (overfit), minimum in the middle." },
              { term: "Regularization", definition: "A penalty on model complexity that lets a flexible model behave as if simpler — L1, L2, dropout, pruning." },
            ],
            diagram: {
              kind: "flow",
              title: "The bias-variance dial",
              caption:
                "Complexity trades bias against variance; the art is stopping at the bottom of the U.",
              steps: [
                { label: "Underfit", note: "high bias, too simple" },
                { label: "Good fit", note: "balanced — sweet spot" },
                { label: "Overfit", note: "high variance, memorizes noise" },
              ],
            },
            bullets: [
              "Total error = bias^2 + variance + irreducible noise.",
              "Bias: wrong assumptions — underfitting; the model is wrong everywhere the same way.",
              "Variance: sensitivity to the training sample — overfitting; predictions swing wildly.",
              "Irreducible noise: the data's own floor; no model can go below it.",
              "Complexity up -> bias down, variance up; total error is U-shaped.",
              "Diagnose: high train + high test = underfit; low train + high test = overfit.",
              "Cures: capacity/regularization/data/augmentation/ensembles, chosen by cross-validation.",
              "Worked trace: sine data — degree 1: train 0.30/test 0.32; degree 3: 0.04/0.06; degree 15: 0.001/0.40.",
            ],
            callout: {
              type: "exam",
              title: "Write the decomposition, draw the U",
              body: "The full-mark answer writes error = bias^2 + variance + noise, draws the U-curve with model complexity on x and error on y, labels the three regimes (underfit left, sweet spot middle, overfit right), and closes with the cures for each regime and how cross-validation finds the bottom of the U.",
            },
            codeExample: {
              language: "python",
              caption: "uv_curve.py — watch overfitting happen",
              code: `import numpy as np
from sklearn.preprocessing import PolynomialFeatures
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error

rng = np.random.default_rng(0)
x = rng.uniform(-3, 3, 20);  y = np.sin(x) + rng.normal(0, 0.2, 20)
xt = rng.uniform(-3, 3, 60); yt = np.sin(xt) + rng.normal(0, 0.2, 60)

for deg in [1, 3, 15]:
    Xp = PolynomialFeatures(deg).fit_transform(x[:, None])
    Xq = PolynomialFeatures(deg).fit_transform(xt[:, None])
    m = LinearRegression().fit(Xp, y)
    tr = mean_squared_error(y, m.predict(Xp))
    te = mean_squared_error(yt, m.predict(Xq))
    print(f"degree {deg}: train MSE {tr:.3f}  test MSE {te:.3f}")`,
            },
            examQuestions: [
              {
                q: "State the bias-variance decomposition of a model's total error. Draw the U-curve with the three regimes labelled and explain the cures for underfitting and overfitting.",
                marks: 7,
                outline: [
                  "Error = bias^2 + variance + irreducible noise",
                  "Bias: error from wrong assumptions; high bias = underfitting",
                  "Variance: error from sample sensitivity; high variance = overfitting",
                  "U-curve: complexity on x; bias^2 falls, variance rises, total is U-shaped",
                  "Underfit regime: raise capacity, add features, reduce regularization",
                  "Overfit regime: regularize, prune, augment data, ensemble (bagging)",
                  "Cross-validation locates the bottom of the U",
                ],
              },
              {
                q: "A model scores 99% on training data and 62% on test data. Diagnose the problem and prescribe a fix.",
                marks: 3,
                outline: [
                  "Low train error + high test error = overfitting (high variance)",
                  "Fixes: regularization (L1/L2), simpler model or pruning, more data, augmentation",
                  "Verify with cross-validation after the fix",
                ],
              },
              {
                q: "Define irreducible noise in the bias-variance decomposition.",
                marks: 2,
                outline: [
                  "The error floor from randomness in the data-generating process itself",
                  "No model, however complex, can reduce it",
                ],
              },
            ],
          },
          {
            number: "1.12",
            title: "AI, ML, DL and DS — how they nest",
            body: [
              "The four buzzwords are one set of nested dolls. Artificial Intelligence is the outermost discipline: making machines perform tasks that need intelligence — including rule-based expert systems with no learning at all. Machine learning is a subset of AI: the part that learns behaviour from data rather than from hand-written rules. Deep learning is a subset of ML: multi-layer neural networks that learn their own features from raw, high-dimensional inputs like pixels and audio. Data science is a sibling discipline rather than a subset: the end-to-end practice of extracting insight and decisions from data — statistics, visualization, domain expertise, communication — which uses ML as one tool among many.",
              "AI is the broadest umbrella and predates ML by decades. Early AI was symbolic — expert systems, rule engines, search algorithms, logic programming — all hand-crafted by encoding human knowledge as if-then rules. These systems solved bounded problems well (chess endgames, medical diagnosis in narrow domains) but failed on perception and language, where the rules are too numerous and too subtle to write. ML arose as the data-driven alternative: instead of writing rules, learn them from examples. The shift from symbolic AI to statistical ML is the central story of the field's modern history, and it explains why an AI course today is mostly an ML course.",
              "Deep learning is the subset of ML that uses multi-layer neural networks, and its distinctive power is representation learning — the network discovers its own features from raw data. Where classical ML needs hand-engineered features (edge detectors for vision, n-grams for text), deep networks learn the right low-level features in their early layers and combine them into higher-level concepts in deeper layers. This is why DL dominates perception tasks — vision, speech, raw text — where feature engineering is the bottleneck. DL needs vast data and compute to avoid overfitting, which is why it bloomed after 2012 when GPUs and ImageNet arrived. For tabular business data, classical ML (gradient boosting, forests) still usually wins on speed and interpretability.",
              "Data science is not a subset of ML but a parallel discipline that uses ML as one tool. A data scientist's workflow is end-to-end insight extraction: frame the business question, acquire and clean the data, explore it visually, build models (often starting with simple statistics before ML), communicate findings to stakeholders, and support decision-making. Statistics, visualization, SQL, communication and domain expertise matter as much as ML itself. The diagram below summarizes the nesting: AI ⊃ ML ⊃ DL, with DS as a sibling ellipse that overlaps all three. In industry, 'AI engineer', 'ML engineer' and 'data scientist' often describe the same person at different stages of a project — the boundaries are softer than the Venn diagram suggests.",
            ],
            keyTerms: [
              { term: "Artificial Intelligence (AI)", definition: "The outermost discipline — making machines perform intelligent tasks, by any method including symbolic rules." },
              { term: "Machine Learning (ML)", definition: "The subset of AI that learns behaviour from data rather than hand-written rules." },
              { term: "Deep Learning (DL)", definition: "The subset of ML using multi-layer neural networks that learn their own feature representations." },
              { term: "Data Science (DS)", definition: "The end-to-end discipline of extracting insight from data — uses ML, statistics, visualization and domain expertise." },
              { term: "Representation learning", definition: "DL's distinctive power — learning features automatically from raw data instead of hand-engineering them." },
            ],
            table: {
              caption: "Term · definition · example.",
              headers: ["Term", "One-line definition", "Example in this course"],
              rows: [
                ["AI", "machines performing intelligent tasks", "expert systems (MIS course, Unit IV)"],
                ["ML", "behaviour learned from data", "spam filter, house-price model"],
                ["DL", "ML with deep neural networks", "neural network classifier (Unit III)"],
                ["DS", "insight from data, end to end", "Unit I's visualization-first workflow"],
              ],
            },
            bullets: [
              "AI: any technique making machines act intelligently — including symbolic rules.",
              "ML: the subset of AI that learns behaviour from data instead of hand-written rules.",
              "DL: the subset of ML using multi-layer neural networks on raw data.",
              "Representation learning: DL discovers its own features from pixels/audio/text.",
              "Early AI was symbolic (expert systems); ML replaced rules with learned patterns.",
              "DS is a sibling discipline, not a subset: statistics + visualization + communication + ML.",
              "For tabular business data, classical ML still usually beats deep learning.",
            ],
            diagram: {
              kind: "layers",
              title: "AI, ML and DL nest inside one another",
              caption: "Each layer is a subset of the one above it; data science is a sibling that overlaps all three.",
              layers: [
                { label: "Artificial Intelligence (AI)", note: "any technique that makes machines act intelligently" },
                { label: "Machine Learning (ML)", note: "behaviour learned from data, not hand-written rules" },
                { label: "Deep Learning (DL)", note: "multi-layer neural networks on raw data" },
                { label: "Representation learning", note: "DL's edge: learns its own features from pixels/audio/text" },
              ],
            },
            callout: {
              type: "tip",
              title: "The one-line nesting",
              body: "AI includes ML includes DL; data science is a sibling that uses all three plus statistics and domain expertise. If a question asks where a chatbot, a spam filter and a digit recognizer sit: chatbot at AI level, spam filter at ML level, digit recognizer on raw pixels at DL level.",
            },
            examQuestions: [
              {
                q: "Explain how Artificial Intelligence, Machine Learning, Deep Learning and Data Science relate to one another. Give one example task that belongs to each.",
                marks: 7,
                outline: [
                  "AI: the outermost discipline — machines performing intelligent tasks by any method",
                  "Symbolic AI example: rule-based expert systems with no learning",
                  "ML: subset of AI learning from data; example: spam filter, house-price model",
                  "DL: subset of ML; multi-layer networks; example: image or speech recognition",
                  "Representation learning: DL learns its own features from raw inputs",
                  "DS: sibling discipline — statistics, visualization, communication, uses ML as a tool",
                  "Shift from symbolic AI to statistical ML is the field's central modern story",
                ],
              },
              {
                q: "What is representation learning and why does it give deep learning its edge?",
                marks: 3,
                outline: [
                  "Hidden layers discover features automatically from raw data",
                  "Classical ML needs hand-engineered features (edge detectors, n-grams)",
                  "This is why DL dominates perception: vision, speech, raw text",
                ],
              },
              {
                q: "Is data science a subset of machine learning? Justify your answer.",
                marks: 2,
                outline: [
                  "No — it is a parallel, end-to-end discipline",
                  "It uses ML plus statistics, visualization, SQL, domain expertise and communication",
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
      title: "Clustering",
      summary:
        "Unit II is unsupervised learning's centrepiece: the families of clustering methods, the special algorithms BIRCH and CURE, Gaussian mixture models with expectation maximization, the parameter estimation styles MLE and MAP, and where clustering earns its keep in industry.",
      chapter: {
        number: "02",
        title: "Finding Structure Without Labels",
        intro:
          "Unit II covers what clustering is, the four families of methods, distribution-model and fuzzy clustering, hierarchical clustering, GMM with EM, BIRCH, CURE, MLE vs MAP, and applications.",
        inOneBreath:
          "Clustering groups similar points without labels; K-Means alternates assign-and-move; hierarchical builds a dendrogram; GMM/EM gives soft memberships; BIRCH summarizes huge data in CF-trees; CURE uses shrunk representatives for non-spherical clusters; MAP is MLE plus a prior.",
        sections: [
          {
            number: "2.1",
            title: "What clustering is",
            body: [
              "Clustering is unsupervised learning's core task: given unlabelled examples, group them so that points in the same group (cluster) are similar to each other and points in different groups are dissimilar. Similarity is measured by distance — usually Euclidean, sometimes Manhattan or cosine — after the normalization discipline of Unit I, because an unscaled salary column would dominate every distance. Clustering differs from classification exactly as unsupervised differs from supervised: no labels exist, no 'correct' grouping is given, and quality is judged by internal criteria (compactness, separation, silhouette score) or by downstream usefulness. Because 'cluster' is not defined by any single formula, a whole family of methods exists — each encoding a different belief about what a natural group looks like.",
              "The choice of similarity measure changes what the clusters mean. Euclidean distance ‖x−z‖₂ is the default for continuous features in low dimension; it corresponds to straight-line geometry and pairs naturally with K-Means and Ward linkage. Manhattan distance ‖x−z‖₁ sums absolute differences and is more robust to outliers; it suits grid-like or high-dimensional sparse data (text vectors). Cosine similarity measures the angle between vectors and ignores magnitude — the right choice for text embeddings where long and short documents on the same topic should cluster together. Whichever distance is chosen, features must be scaled first, because distance is dominated by the largest-scale feature otherwise — the discipline of section 1.10.",
              "Without ground-truth labels, clustering quality is judged by internal criteria that measure compactness and separation. Inertia (within-cluster sum of squares) measures compactness: the sum of squared distances from each point to its cluster's centroid — lower is better, but it falls monotonically as K grows, so it cannot alone choose K. The silhouette score combines compactness and separation into one number in [−1, +1]: for each point, (b − a)/max(a, b) where a is its mean distance to other points in its own cluster and b is its mean distance to points in the nearest other cluster — high silhouette means tight and well-separated. The Davies-Bouldin index and Calinski-Harabasz score are alternative internal criteria. Because each metric encodes a different preference, the practitioner reports several and looks for agreement.",
              "Choosing a clustering family is the first design decision and is dictated by what the data looks like and what 'cluster' means for the task. If clusters are expected to be spherical and roughly equal-sized, K-Means is fast and good. If clusters may have arbitrary shape and noise, density-based DBSCAN. If a hierarchy of groupings is wanted (for exploration or unknown K), hierarchical clustering. If clusters overlap and soft memberships matter, GMM or fuzzy C-Means. If the data is too large for memory, BIRCH. If clusters are non-spherical but compact, CURE. The rest of this unit develops each family in turn.",
            ],
            keyTerms: [
              { term: "Cluster", definition: "A group of points similar to each other and dissimilar from points in other groups." },
              { term: "Similarity / distance", definition: "The measure (Euclidean, Manhattan, cosine) by which 'similar' is judged — must be on scaled features." },
              { term: "Silhouette score", definition: "Compactness+separation metric in [−1,+1]; high means tight, well-separated clusters." },
              { term: "Inertia", definition: "Within-cluster sum of squared distances to centroids — compactness only, falls with K." },
              { term: "Centroid", definition: "The centre of a cluster — usually the mean of its members (K-Means) or a chosen medoid (K-Medoids)." },
            ],
            diagram: {
              kind: "compare",
              title: "Clustering vs classification",
              caption: "The same scatter of points, but only the classifier ever sees the colours.",
              left: {
                heading: "Classification (Unit III)",
                items: ["labels known in training", "predict the label of new points", "accuracy · precision · recall", "a teacher grades every answer"],
              },
              right: {
                heading: "Clustering (this unit)",
                items: ["no labels at all", "discover the groups themselves", "silhouette · inertia · stability", "structure must emerge from geometry alone"],
              },
            },
            bullets: [
              "Clustering groups unlabelled points so intra-group similarity is high, inter-group low.",
              "Distance choices: Euclidean (default), Manhattan (robust), cosine (text embeddings).",
              "Features must be scaled first — an unscaled salary column dominates every distance.",
              "Inertia: within-cluster sum of squares — compactness only, falls as K grows.",
              "Silhouette = (b - a)/max(a, b) in [-1, +1]: tight and well-separated is high.",
              "No ground truth: judge by internal criteria, stability, or downstream usefulness.",
              "Family choice follows cluster shape: spherical -> K-Means, arbitrary -> DBSCAN, overlap -> GMM.",
            ],
            callout: {
              type: "exam",
              title: "There is no single definition of cluster",
              body: "The examiner loves this line: because 'cluster' has no universal formula, each algorithm encodes a different belief about what a natural group looks like — K-Means believes in spherical equal blobs, DBSCAN in dense regions, GMM in Gaussian components. Naming the belief earns the marks.",
            },
            codeExample: {
              language: "python",
              caption: "distance.py — similarity as geometry",
              code: `import numpy as np
from sklearn.metrics import pairwise_distances

X = np.array([[1, 2], [2, 1], [8, 9], [9, 8]])
D = pairwise_distances(X)                # Euclidean distance matrix
print(np.round(D, 2))
# distances inside {points 0,1} and {points 2,3} are small,
# distances across the two pairs are large -> two natural clusters`,
            },
            examQuestions: [
              {
                q: "Define clustering. Explain how the choice of similarity measure changes the resulting clusters, and how clustering quality is judged in the absence of labels.",
                marks: 7,
                outline: [
                  "Clustering: group unlabelled points by similarity; no teacher, no correct answer",
                  "Euclidean for continuous low-d data; Manhattan for outlier robustness",
                  "Cosine for text embeddings where magnitude should not matter",
                  "Scaling is mandatory — largest-scale feature dominates distance otherwise",
                  "Inertia: within-cluster sum of squares; compactness only, monotone in K",
                  "Silhouette: (b - a)/max(a, b); combines compactness and separation",
                  "Report several internal criteria and check agreement",
                ],
              },
              {
                q: "Explain the silhouette score with its formula and interpretation.",
                marks: 3,
                outline: [
                  "For each point: a = mean distance to own cluster, b = mean distance to nearest other cluster",
                  "s = (b - a)/max(a, b), in [-1, +1]",
                  "Near +1: tight and well separated; near 0: on a boundary; negative: misassigned",
                ],
              },
              {
                q: "Why must features be scaled before clustering?",
                marks: 2,
                outline: [
                  "Distance is dominated by the largest-scale feature",
                  "Unscaled salary (0-100000) makes every other feature invisible",
                ],
              },
            ],
          },
          {
            number: "2.2",
            title: "Types of clustering methods — the four families",
            body: [
              "Partitioning methods (K-Means, K-Medoids) cut the dataset into K groups by minimizing within-cluster distance to a centre. K-Means alternates two steps until they stop changing: assign every point to its nearest mean, then move each mean to the centre of its assigned points. It is fast (O(n) per iteration) and scales hugely, but assumes spherical, equally sized clusters, needs K chosen in advance, and is sensitive to initial centres — K-Means++ fixes the seeding. K-Medoids (PAM) uses an actual data point as each cluster's centre, making it robust to outliers at higher cost. Hierarchical methods build a tree of clusters instead of choosing K. Density-based methods grow clusters from dense regions and find arbitrary shapes, labelling sparse points as noise. Distribution-model-based and fuzzy methods are the probabilistic view: clusters as overlapping distributions (GMM) or soft memberships (fuzzy).",
              "K-Means is the syllabus's favourite algorithm and earns its own worked trace. The objective is to minimize inertia, the sum of squared distances from each point to its assigned centroid: J = Σ Σ ‖x − μₖ‖². The algorithm alternates two steps until assignments stop changing. E-step (assignment): for each point x, assign it to the cluster k whose centroid μₖ is closest under Euclidean distance. M-step (update): for each cluster k, recompute μₖ as the mean of all points assigned to it. Each step can only lower J, so the loop converges — to a local minimum, hence the K-Means++ seeding and multiple restarts.",
              "A concrete one-iteration trace makes the algorithm visible. Take four 1-D points x = {1, 2, 5, 6} and K = 2, with initial centroids μ₁ = 1, μ₂ = 2. Assignment step: point 1 is closest to μ₁=1 (dist 0 vs 1); point 2 is closest to μ₂=2 (dist 0 vs 1); point 5 is closest to μ₂=2 (dist 3 vs 4); point 6 is closest to μ₂=2 (dist 4 vs 5). So cluster 1 = {1}, cluster 2 = {2, 5, 6}. Update step: μ₁ = mean{1} = 1, μ₂ = mean{2, 5, 6} = 13/3 ≈ 4.33. Next iteration: point 1 → μ₁ (dist 0 vs 3.33); point 2 → μ₁ (dist 1 vs 2.33); point 5 → μ₂ (dist 0.67 vs 4); point 6 → μ₂ (dist 1.67 vs 5). Now cluster 1 = {1, 2}, cluster 2 = {5, 6}; μ₁ = 1.5, μ₂ = 5.5. A third iteration changes nothing — the algorithm has converged to the natural split.",
              "K-Means's strengths and weaknesses are the standard exam contrast. Strengths: O(n) per iteration, scales to millions of points, simple to implement, gives a compact centroid useful as a representative. Weaknesses: needs K chosen in advance (use the elbow method or silhouette); sensitive to initial centroids (use K-Means++ and several restarts); assumes spherical, equally sized clusters — fails on elongated, nested, or unequal-density shapes; sensitive to outliers (K-Medoids is the robust alternative); and the local-minimum convergence means restarts are mandatory. K-Means++ fixes the seeding by choosing the first centroid at random, then each next centroid from a distribution weighted by squared distance to the nearest already-chosen centroid — diversifying the seeds and giving a provable approximation guarantee.",
            ],
            keyTerms: [
              { term: "K-Means", definition: "Partitioning clustering that alternates assign-to-nearest-mean and move-mean-to-cluster-mean until convergence." },
              { term: "Centroid", definition: "The mean of a cluster's points — K-Means's centre; not necessarily an actual data point." },
              { term: "Inertia", definition: "Within-cluster sum of squared distances to centroids; the objective K-Means minimizes." },
              { term: "K-Means++", definition: "Smarter seeding that spreads initial centroids by squared-distance weighting, avoiding bad local minima." },
              { term: "K-Medoids (PAM)", definition: "K-Means variant using an actual data point as each cluster's centre — robust to outliers." },
            ],
            diagram: {
              kind: "pipeline",
              title: "The K-Means two-step",
              caption:
                "Assign, move, repeat. Each pass can only lower within-cluster error, so the loop converges — possibly to a local optimum.",
              stages: [
                { label: "Seed", note: "K centres picked (K-Means++)" },
                { label: "Assign", note: "each point → nearest mean" },
                { label: "Move", note: "each mean → its points' centre" },
                { label: "Repeat", note: "until nothing moves" },
                { label: "Output", note: "K clusters + inertia" },
              ],
            },
            bullets: [
              "Partitioning (K-Means, K-Medoids): cut data into K groups by distance to a centre.",
              "Hierarchical: build a dendrogram of nested merges; choose K after seeing the tree.",
              "Density-based (DBSCAN): grow clusters from dense regions; arbitrary shapes; noise label.",
              "Distribution-based (GMM): overlapping probabilistic components with soft membership.",
              "K-Means objective: J = sum over clusters of sum ||x - mu_k||^2 (inertia).",
              "K-Means++ seeds centroids by squared-distance weighting; multiple restarts still needed.",
              "K-Medoids uses a real point as centre — robust to outliers, costlier.",
              "Worked trace: x = {1, 2, 5, 6}, K = 2 converges to clusters {1,2} and {5,6} with centres 1.5 and 5.5.",
            ],
            callout: {
              type: "exam",
              title: "Match the family to the shape",
              body: "Spherical, equal-sized clusters -> K-Means. Arbitrary shapes with noise -> DBSCAN. Unknown K or a hierarchy wanted -> hierarchical. Overlapping clusters with soft membership -> GMM or fuzzy C-Means. Huge data beyond RAM -> BIRCH. Non-spherical but compact -> CURE. One line each is a complete 7-mark skeleton.",
            },
            codeExample: {
              language: "python",
              caption: "kmeans_trace.py — the worked example, runnable",
              code: `import numpy as np
from sklearn.cluster import KMeans

X = np.array([[1], [2], [5], [6]])
km = KMeans(n_clusters=2, n_init=10, random_state=42).fit(X)
print(km.labels_)                     # [0 0 1 1]
print(km.cluster_centers_.ravel())    # [1.5 5.5]
print(km.inertia_)                    # within-cluster sum of squares`,
            },
            examQuestions: [
              {
                q: "Describe the four families of clustering methods — partitioning, hierarchical, density-based and distribution-based — giving one algorithm, one strength and one weakness for each.",
                marks: 7,
                outline: [
                  "Partitioning: K-Means; fast, scalable; needs K, spherical assumption, seed sensitivity",
                  "Hierarchical: agglomerative dendrogram; no upfront K; O(n^2) memory, irreversible merges",
                  "Density-based: DBSCAN; arbitrary shapes, noise handling; struggles with varying density",
                  "Distribution-based: GMM via EM; soft memberships, elliptical; distributional assumptions",
                  "K-Means trace on {1, 2, 5, 6} illustrates the assign-move loop",
                  "K-Means++ seeding reduces bad local minima",
                  "Elbow/silhouette methods choose K",
                ],
              },
              {
                q: "State the K-Means objective function and explain K-Means++ seeding.",
                marks: 3,
                outline: [
                  "J = sum_k sum_{x in cluster k} ||x - mu_k||^2 (inertia)",
                  "K-Means++: first centroid random; next centroid sampled by squared distance to nearest chosen",
                  "Spreads seeds, gives a provable approximation guarantee",
                ],
              },
              {
                q: "What does the elbow method choose, and why does inertia alone fail?",
                marks: 2,
                outline: [
                  "It chooses the number of clusters K",
                  "Inertia falls monotonically with K, so its bend — not its value — is the signal",
                ],
              },
            ],
          },
          {
            number: "2.3",
            title: "Distribution model-based clustering",
            body: [
              "Distribution-based clustering assumes the data was generated by a mixture of probability distributions — typically Gaussians — and recovers the clusters by fitting the mixture: each cluster is a distribution with its own mean and covariance, and each point belongs softly, with probability, to every component. This view explains clusters that overlap: a point between two Gaussians is simply 60% one cluster and 40% the other, a statement K-Means cannot make. The fitting engine is Expectation Maximization (section 2.6), and the model itself is the Gaussian Mixture Model. The family's strengths: soft assignments, elliptical clusters of different sizes (covariance shapes), and a principled likelihood to compare models — including choosing the number of components by information criteria (BIC/AIC) instead of by eye. Its price: strong distributional assumptions, and cost that grows with dimensionality.",
              "A mixture model is the sum of K component distributions weighted by mixing coefficients. Formally, p(x) = Σ πₖ · p(x | θₖ) where πₖ is the prior probability of component k (with Σ πₖ = 1) and θₖ are that component's parameters. For a Gaussian mixture, θₖ = (μₖ, Σₖ) — the mean vector and covariance matrix of the k-th Gaussian. Each point x has a responsibility γ(zₖ) = πₖ · N(x | μₖ, Σₖ) / Σ_j π_j · N(x | μ_j, Σ_j) — the posterior probability that component k generated point x. The hard cluster assignment is argmax_k γ(zₖ); the soft assignment is the full responsibility vector. This is exactly the framework GMM uses, and the same model class supports other distributions (Poisson for counts, Bernoulli for binary).",
              "Choosing K in a mixture model uses information criteria instead of the elbow method, because the likelihood alone rises monotonically with K (more parameters fit better) and would always pick the largest K. The Bayesian Information Criterion (BIC) penalizes likelihood by (ln n)·p where p is the parameter count: BIC = −2 ln L + p ln n — lower is better. The Akaike Information Criterion (AIC) penalizes by 2p instead: AIC = −2 ln L + 2p. BIC's heavier penalty prefers simpler models; AIC is more permissive. In scikit-learn, fitting GaussianMixture for several K and picking the K with the lowest BIC is the standard, principled way to choose the number of clusters without an arbitrary elbow.",
              "Distribution-based clustering trades assumptions for power. Strengths: soft memberships that quantify uncertainty; elliptical clusters of different sizes and orientations via full covariance; a generative model that can synthesize new points; principled K selection via BIC/AIC; and a natural fit to downstream probabilistic modelling. Weaknesses: the Gaussian assumption is wrong for many real datasets (heavy-tailed, multimodal); covariance estimation is unstable in high dimensions (the curse of Unit V again); EM converges to a local maximum, needing restarts; and the per-iteration cost is O(n·K·d²) for full covariance, more expensive than K-Means's O(n·K·d). The right use case is overlapping, elliptical clusters where soft membership and a likelihood-based comparison matter.",
            ],
            keyTerms: [
              { term: "Mixture model", definition: "A weighted sum of K component distributions, p(x) = Σ πₖ · p(x | θₖ)." },
              { term: "Gaussian Mixture Model", definition: "A mixture of K Gaussians, each with its own mean and covariance." },
              { term: "Responsibility", definition: "The posterior probability γ(zₖ) that component k generated a given point — the soft assignment." },
              { term: "BIC", definition: "Bayesian Information Criterion; −2 ln L + p ln n — penalizes likelihood by parameter count, prefers simpler models." },
              { term: "AIC", definition: "Akaike Information Criterion; −2 ln L + 2p — lighter penalty than BIC." },
            ],
            callout: {
              type: "exam",
              title: "K-Means vs GMM in one breath",
              body: "K-Means: hard, spherical, equal-variance, distance-based. GMM: soft, elliptical, full covariance, probability-based. The upgrade from K-Means to GMM is the upgrade from distance to probability — at the cost of distributional assumptions and EM's local maxima.",
            },
            bullets: [
              "Data modelled as a mixture: p(x) = sum_k pi_k * p(x | theta_k), with sum pi_k = 1.",
              "Gaussian components: theta_k = (mu_k, Sigma_k) — own mean and covariance each.",
              "Responsibility gamma(z_k) = posterior probability component k generated the point.",
              "Hard assignment = argmax_k gamma; soft assignment = the full responsibility vector.",
              "BIC = -2 ln L + p ln n; AIC = -2 ln L + 2p — lower is better, BIC prefers simpler.",
              "Likelihood alone rises with K, so information criteria — not the elbow — choose K.",
              "Strengths: soft membership, elliptical clusters, generative model; costs O(n*K*d^2) for full covariance.",
            ],
            diagram: {
              kind: "flow",
              title: "Fitting a mixture model",
              caption: "Assume the generative story, then climb the likelihood with soft assignments.",
              steps: [
                { label: "Assume K distributions", note: "usually Gaussians with weights pi_k" },
                { label: "Initialize parameters", note: "means, covariances, mixing weights" },
                { label: "Compute responsibilities", note: "posterior membership of every point in every component" },
                { label: "Re-fit parameters", note: "responsibility-weighted maximum likelihood" },
                { label: "Repeat", note: "until likelihood stops rising; pick K by BIC/AIC" },
              ],
            },
            examQuestions: [
              {
                q: "Explain distribution model-based clustering. Define the mixture model, responsibilities, and how BIC/AIC choose the number of components.",
                marks: 7,
                outline: [
                  "Mixture: p(x) = sum_k pi_k * p(x | theta_k), pi_k are mixing weights summing to 1",
                  "Gaussian case: each theta_k = (mu_k, Sigma_k)",
                  "Responsibility gamma(z_k) = pi_k*N(x|mu_k,Sigma_k) / sum_j pi_j*N(x|mu_j,Sigma_j)",
                  "Soft membership explains overlapping clusters (60%/40% statements)",
                  "Fitting engine is EM (section 2.6)",
                  "Likelihood rises monotonically with K; BIC = -2 ln L + p ln n penalizes parameters",
                  "AIC uses 2p — lighter penalty; pick the K with the lowest criterion",
                ],
              },
              {
                q: "Compare the BIC and AIC penalties.",
                marks: 3,
                outline: [
                  "BIC = -2 ln L + p*ln(n); AIC = -2 ln L + 2p",
                  "BIC's penalty grows with sample size — prefers simpler models",
                  "AIC is more permissive; both lower-is-better",
                ],
              },
              {
                q: "What is a responsibility in a mixture model?",
                marks: 2,
                outline: [
                  "The posterior probability that component k generated point x",
                  "Normalized across components; the soft cluster assignment",
                ],
              },
            ],
          },
          {
            number: "2.4",
            title: "Hierarchical clustering",
            body: [
              "Hierarchical clustering builds a dendrogram — a tree of nested clusterings — instead of one flat answer. Agglomerative (bottom-up) starts with every point as its own cluster and repeatedly merges the two closest clusters until one remains; divisive (top-down) starts with one cluster and recursively splits. What 'closest clusters' means is the linkage criterion: single linkage (nearest pair across clusters) chains along elongated shapes but suffers chaining noise; complete linkage (farthest pair) prefers compact, tight clusters; average linkage averages all cross pairs; Ward's linkage merges the pair that least increases total within-cluster variance — the default that usually behaves best on Euclidean data. To get flat clusters, cut the dendrogram at a chosen height — the number of clusters is decided after seeing the tree, which is precisely hierarchical clustering's advantage over K-Means.",
              "Each linkage encodes a different belief about cluster shape, and the choice changes the result dramatically. Single linkage defines cluster distance as the minimum distance between any point of one and any point of the other: it finds elongated, chained shapes well, but a single noisy bridge between two clusters causes 'chaining' — they merge prematurely. Complete linkage uses the maximum cross-pair distance: it prefers compact, tight, spherical clusters and is robust to noise bridges, but it cannot find elongated shapes. Average linkage averages all cross-pair distances, a middle ground. Ward's linkage, the default in scikit-learn, merges the pair that minimizes the increase in total within-cluster variance — equivalent to a greedy optimization of K-Means's inertia objective, and usually the best choice on Euclidean data.",
              "Cutting the dendrogram yields flat clusters, and the cut height is the second decision after linkage. A horizontal cut at a low height gives many small clusters (tight, pure); a cut at a high height gives few large clusters (coarse, mixed). The dendrogram's shape suggests the cut: a long stretch with no merges (a tall vertical gap between merges) is a natural cut point, because the algorithm resisted merging across that gap — clusters above and below the gap are genuinely far apart. This is the visual 'elbow' for hierarchical clustering, and it is more principled than K-Means's elbow on inertia because it reflects the structure of the data, not a single number's bend.",
              "Hierarchical clustering's strengths and weaknesses close out the method. Strengths: no need to choose K upfront — the dendrogram reveals the natural cluster count; the tree itself is a visualization, useful for exploration and presentation; any distance metric and any linkage can be combined for flexibility; deterministic (no random seeding, no local minima). Weaknesses: O(n²) or O(n³) time and O(n²) memory, limiting it to a few thousand points; agglomerative decisions are irreversible (an early merge cannot be undone even if later evidence contradicts it); sensitive to noise and outliers, especially with single linkage. For large datasets, BIRCH (section 2.7) pre-clusters into a CF-tree and then runs hierarchical clustering on the leaf entries, getting the best of both.",
            ],
            keyTerms: [
              { term: "Dendrogram", definition: "A tree diagram showing the sequence and distance of cluster merges; cutting it at a height yields flat clusters." },
              { term: "Agglomerative", definition: "Bottom-up hierarchical clustering — start with singletons, merge closest pairs until one cluster remains." },
              { term: "Divisive", definition: "Top-down hierarchical clustering — start with one cluster, recursively split. (DIANA is the classic algorithm.)" },
              { term: "Single linkage", definition: "Cluster distance = nearest cross-pair; finds elongated shapes but suffers chaining noise." },
              { term: "Ward's linkage", definition: "Merges the pair that least increases total within-cluster variance — the default for Euclidean data." },
            ],
            diagram: {
              kind: "layers",
              title: "A dendrogram",
              caption:
                "Each node is a merge, each height a distance. Cutting at different heights yields different cluster counts from one tree.",
              layers: [
                { label: "Single root", note: "all points in one cluster" },
                { label: "{p₁,p₂} {p₃,p₄} {p₅}", note: "tight families merge first" },
                { label: "leaves = individual points", note: "early (low) merges are tight, late (high) merges reluctant" },
              ],
            },
            bullets: [
              "Agglomerative: start from singletons, merge closest pairs; divisive: split top-down.",
              "Single linkage = nearest cross-pair: finds elongated shapes, suffers chaining.",
              "Complete linkage = farthest cross-pair: compact clusters, robust to noise bridges.",
              "Average linkage: middle ground; Ward: merge that least raises within-cluster variance.",
              "Cut height decides K after the tree is built — hierarchical's advantage over K-Means.",
              "A long vertical gap in the dendrogram is the natural cut point.",
              "Costs O(n^2)-O(n^3) time and O(n^2) memory — a few thousand points at most.",
              "Agglomerative merges are irreversible — an early bad merge cannot be undone.",
            ],
            callout: {
              type: "tip",
              title: "Ward is the usual default",
              body: "On Euclidean data Ward's linkage usually behaves best — it greedily optimizes the same within-cluster variance that K-Means minimizes. Switch to single linkage only when clusters are visibly elongated, and to complete linkage when noise bridges cause premature merges.",
            },
            codeExample: {
              language: "python",
              caption: "hierarchical.py — dendrogram and cut",
              code: `import numpy as np
import matplotlib.pyplot as plt
from scipy.cluster.hierarchy import dendrogram, linkage, fcluster

X = np.random.default_rng(0).normal(size=(10, 2))
Z = linkage(X, method="ward")        # Ward's linkage on Euclidean data
dendrogram(Z)                         # the merge tree with merge heights
plt.show()

labels = fcluster(Z, t=2, criterion="maxclust")   # cut into 2 clusters
print(labels)`,
            },
            examQuestions: [
              {
                q: "Explain agglomerative hierarchical clustering, the four linkage criteria, and how a dendrogram is cut into flat clusters. Give the method's strengths and weaknesses.",
                marks: 7,
                outline: [
                  "Bottom-up: every point a cluster; repeatedly merge the closest pair",
                  "Single linkage: nearest cross-pair; chains elongated shapes, chaining noise",
                  "Complete: farthest cross-pair; compact clusters, resists noise bridges",
                  "Average: mean of cross-pairs; Ward: least increase in within-cluster variance",
                  "Cutting the dendrogram at height h yields flat clusters; K decided post hoc",
                  "Long vertical gap = natural cut point",
                  "Strengths: no upfront K, tree is a visualization, deterministic; weaknesses: O(n^2) memory, irreversible merges",
                ],
              },
              {
                q: "Compare single and complete linkage.",
                marks: 3,
                outline: [
                  "Single: minimum cross-pair distance — finds elongated/chained clusters",
                  "Complete: maximum cross-pair distance — prefers compact, tight clusters",
                  "Single suffers chaining from noise bridges; complete misses elongated shapes",
                ],
              },
              {
                q: "What does a dendrogram's long vertical gap suggest?",
                marks: 2,
                outline: [
                  "The algorithm resisted merging across that distance",
                  "Clusters above and below the gap are genuinely far apart — a natural cut height",
                ],
              },
            ],
          },
          {
            number: "2.5",
            title: "Fuzzy clustering",
            body: [
              "Fuzzy clustering (Fuzzy C-Means, FCM) abandons the rule that a point belongs to exactly one cluster. Instead each point i holds a membership coefficient uᵢⱼ ∈ [0, 1] for every cluster j, with the coefficients summing to 1 across clusters — a point sitting between two centres may be 0.55 red and 0.45 blue. The algorithm minimizes a weighted objective: distances to centres, each weighted by the m-th power of the membership (m > 1 is the fuzzifier; m = 1 collapses to hard K-Means), alternating between updating memberships from distances and updating centres as membership-weighted means. Fuzzy clustering matters wherever boundaries are genuinely gradual: medical images (a pixel is 70% tumour, 30% healthy tissue), soil and land-cover classification, and customer segments that blend. Its output is also the perfect warm-up for GMM's probabilistic memberships.",
              "The FCM objective is a weighted version of K-Means's inertia: J = Σ_i Σ_k u_ik^m · ‖x_i − μ_k‖², where u_ik is point i's membership in cluster k and m > 1 is the fuzzifier that controls how soft the memberships are. The algorithm alternates two update rules. Membership update: u_ik = 1 / Σ_j (‖x_i − μ_k‖ / ‖x_i − μ_j‖)^(2/(m−1)) — points close to a centre get high membership in it, far ones get low, normalized so Σ_k u_ik = 1. Centroid update: μ_k = Σ_i u_ik^m · x_i / Σ_i u_ik^m — a membership-weighted mean. Each step lowers J, so the loop converges; like K-Means, to a local minimum, hence multiple restarts.",
              "The fuzzifier m is the dial that controls how soft the assignments are. m = 1 collapses FCM to hard K-Means (each u_ik is 0 or 1). m → ∞ makes all memberships equal across clusters (every point is uniformly in every cluster). The usual default is m = 2, which gives soft but still decisive memberships. Choosing m is task-dependent: medical imaging with genuinely gradual boundaries favours a larger m (softer); customer segmentation with sharper boundaries favours a smaller m (closer to hard). Cross-validating downstream task performance across m values is the practical approach when a downstream task exists.",
              "Fuzzy clustering sits between K-Means and GMM on the probabilistic spectrum. Like K-Means, FCM uses a distance-based objective and a centre-update rule; like GMM, it produces soft memberships that quantify uncertainty. Unlike GMM, FCM is not a generative model — it cannot synthesize new points or compute a likelihood, so BIC/AIC cannot choose K. FCM's strengths: simple objective, fast convergence, soft memberships without distributional assumptions. Weaknesses: needs K chosen in advance (like K-Means); sensitive to initial memberships and to noise; the fuzzifier m is an extra hyperparameter to tune. The right use case is overlapping clusters where soft membership matters but the Gaussian assumption of GMM is wrong.",
            ],
            keyTerms: [
              { term: "Fuzzy C-Means (FCM)", definition: "Clustering where each point has a membership coefficient in [0,1] for every cluster, summing to 1." },
              { term: "Membership coefficient (u_ik)", definition: "Point i's degree of belonging to cluster k; soft assignment, replaces hard cluster labels." },
              { term: "Fuzzifier (m)", definition: "Exponent > 1 controlling softness; m=1 collapses to K-Means, m→∞ makes memberships uniform." },
              { term: "Soft clustering", definition: "Any method giving fractional memberships (FCM, GMM) instead of one hard label." },
            ],
            callout: {
              type: "tip",
              title: "When to choose fuzzy over GMM",
              body: "If you need soft memberships but cannot assume Gaussian clusters (heavy-tailed, multimodal per cluster), FCM gives you the softness without the distributional assumption. If you can assume Gaussians, GMM gives you the same softness plus a likelihood for principled K selection via BIC.",
            },
            bullets: [
              "Each point i holds memberships u_ik in [0,1] for every cluster k, summing to 1.",
              "FCM objective: J = sum_i sum_k u_ik^m * ||x_i - mu_k||^2.",
              "Membership update: u_ik = 1 / sum_j (||x_i - mu_k|| / ||x_i - mu_j||)^(2/(m-1)).",
              "Centroid update: mu_k = membership-weighted mean of the points.",
              "Fuzzifier m > 1 controls softness: m = 1 collapses to hard K-Means; default m = 2.",
              "Use cases: medical images (70% tumour pixel), soil/land-cover maps, blended segments.",
              "Unlike GMM, FCM is not generative — no likelihood, so BIC/AIC cannot choose K.",
            ],
            diagram: {
              kind: "compare",
              title: "Hard vs fuzzy clustering",
              caption: "The boundary point that breaks K-Means is exactly the case fuzzy clustering handles.",
              left: {
                heading: "Hard clustering (K-Means)",
                items: [
                  "Each point in exactly one cluster",
                  "Membership is 0 or 1",
                  "Boundary points forced into an arbitrary side",
                  "Output: one label per point",
                ],
              },
              right: {
                heading: "Fuzzy clustering (FCM)",
                items: [
                  "Memberships u_ik in [0,1] summing to 1 per point",
                  "A point can be 0.55 red and 0.45 blue",
                  "Centres are membership-weighted means",
                  "Used in medical imaging, soil maps, blended segments",
                ],
              },
            },
            examQuestions: [
              {
                q: "Explain fuzzy C-Means: the membership coefficients, the fuzzifier m, the two update rules, and where fuzzy clustering beats hard clustering.",
                marks: 7,
                outline: [
                  "Memberships u_ik in [0,1] with sum_k u_ik = 1 for every point",
                  "Objective J = sum_i sum_k u_ik^m * ||x_i - mu_k||^2",
                  "Membership update from relative distances, normalized per point",
                  "Centroid update as membership-weighted mean",
                  "m = 1 collapses to hard K-Means; m -> infinity makes memberships uniform; default m = 2",
                  "Converges like K-Means to a local minimum — restarts advised",
                  "Applications: medical imaging, land-cover maps; sits between K-Means and GMM",
                ],
              },
              {
                q: "State the FCM objective function and the role of the fuzzifier m.",
                marks: 3,
                outline: [
                  "J = sum_i sum_k u_ik^m * ||x_i - mu_k||^2",
                  "m > 1 controls softness of memberships",
                  "m = 1 gives hard assignment; larger m gives softer, more gradual membership",
                ],
              },
              {
                q: "What happens to FCM memberships as m approaches 1?",
                marks: 2,
                outline: [
                  "The weighting u^m flattens toward binary",
                  "FCM collapses to hard K-Means behaviour",
                ],
              },
            ],
          },
          {
            number: "2.6",
            title: "Gaussian Mixture Models and Expectation Maximization",
            body: [
              "A Gaussian Mixture Model models the data as the weighted sum of K multivariate Gaussians: p(x) = Σ πₖ N(x | μₖ, Σₖ), with mixing weights πₖ summing to 1. Fitting all parameters by directly maximizing the likelihood has no closed form, so the Expectation Maximization (EM) algorithm alternates two steps until convergence. E-step: with parameters fixed, compute each point's responsibility — the posterior probability γ(zᵢₖ) that component k generated point i (Bayes' theorem inside the model). M-step: with responsibilities fixed, re-estimate each component's π, μ and Σ as responsibility-weighted averages. Each EM round never decreases the likelihood, so the climb is monotone — to a local maximum, hence multiple restarts. Compared with K-Means: GMM keeps soft memberships, allows elliptical covariances and unequal cluster sizes, and gives a generative model you can sample from; it costs more and can overfit with too many components — the BIC/AIC penalty keeps K honest.",
              "The E-step and M-step have explicit forms that earn marks when written. E-step: γ(z_ik) = πₖ · N(x_i | μₖ, Σₖ) / Σ_j π_j · N(x_i | μ_j, Σ_j). For each point i and component k, this is the relative likelihood that component k generated point i, normalized across components — pure Bayes' theorem with the mixture weights as priors. M-step updates re-weight statistics by these responsibilities: πₖ = (1/n) Σ_i γ(z_ik); μₖ = Σ_i γ(z_ik) x_i / Σ_i γ(z_ik); Σₖ = Σ_i γ(z_ik) (x_i − μₖ)(x_i − μₖ)ᵀ / Σ_i γ(z_ik). The new parameters are the responsibility-weighted mean and covariance, plus a responsibility-weighted fraction for the mixing weight. Both steps are simple arithmetic once responsibilities are computed.",
              "A one-iteration worked example makes EM tangible. Consider 1-D data x = {0, 1, 5, 6}, K = 2 components, initial parameters π₁ = π₂ = 0.5, μ₁ = 0, μ₂ = 5, σ₁ = σ₂ = 1. E-step for point x = 1: N(1 | 0, 1) = 0.242, N(1 | 5, 1) ≈ 0.000134; γ₁ = 0.5·0.242 / (0.5·0.242 + 0.5·0.000134) ≈ 0.9994, γ₂ ≈ 0.0006. So point 1 is almost certainly from component 1. For point x = 5: N(5 | 0, 1) ≈ 0.000134, N(5 | 5, 1) = 0.242; γ₁ ≈ 0.0006, γ₂ ≈ 0.9994. For points 0 and 6 the responsibilities are even more extreme. M-step: μ₁ ≈ (0.999·0 + 0.9994·1 + 0.0006·5 + tiny·6) / 2 ≈ 0.5, μ₂ ≈ 5.5. After a few iterations the parameters converge to μ₁ ≈ 0.5, μ₂ ≈ 5.5, matching the natural split.",
              "EM's convergence and model-selection properties are the closing notes. The log-likelihood is guaranteed to be non-decreasing across iterations — each E and M step either raises it or leaves it flat, never lowers it — so EM converges, but to a local maximum whose quality depends on initialization. The standard practice is multiple random restarts, keeping the parameters with the highest final log-likelihood. K is chosen by fitting GMMs for K = 1, 2, … and selecting the K with the lowest BIC or AIC. GMM's strength over K-Means — soft memberships, elliptical covariances, a generative model — comes at the cost of stronger assumptions, more parameters per component (the covariance matrix), and the local-maxima fragility. The right use case is overlapping, elliptical clusters where soft membership and a likelihood matter.",
            ],
            keyTerms: [
              { term: "Gaussian Mixture Model (GMM)", definition: "A mixture of K Gaussians p(x) = Σ πₖ N(x | μₖ, Σₖ); each component has its own mean and covariance." },
              { term: "EM algorithm", definition: "Expectation Maximization — alternates computing responsibilities (E) and re-estimating parameters (M) until convergence." },
              { term: "E-step", definition: "Computes γ(z_ik) = πₖ·N(x_i|μₖ,Σₖ) / Σ_j π_j·N(x_i|μ_j,Σ_j) — the posterior probability component k generated point i." },
              { term: "M-step", definition: "Updates πₖ, μₖ, Σₖ as responsibility-weighted averages of the data." },
              { term: "Responsibility (γ)", definition: "The soft membership of point i in component k; the E-step output." },
            ],
            diagram: {
              kind: "cycle",
              title: "Expectation Maximization",
              caption: "Guess the hidden memberships, refit the distributions, repeat — the engine inside every GMM.",
              steps: [
                { label: "Initialize", note: "π, μ, Σ for K components" },
                { label: "E-step", note: "responsibilities γ(zᵢₖ) from Bayes" },
                { label: "M-step", note: "weighted update of π, μ, Σ" },
                { label: "Check", note: "log-likelihood rising?" },
              ],
            },
            bullets: [
              "GMM: p(x) = sum_k pi_k * N(x | mu_k, Sigma_k); each component has own mean/covariance.",
              "E-step: gamma(z_ik) = pi_k*N(x_i|mu_k,Sigma_k) / sum_j pi_j*N(x_i|mu_j,Sigma_j).",
              "M-step: pi_k, mu_k, Sigma_k as responsibility-weighted averages.",
              "Each EM round never decreases the log-likelihood — monotone climb to a local maximum.",
              "Multiple random restarts; keep the parameters with the highest final likelihood.",
              "K chosen by lowest BIC/AIC across candidate component counts.",
              "vs K-Means: soft memberships, elliptical covariances, generative; costlier and assumption-bound.",
            ],
            callout: {
              type: "exam",
              title: "Why EM is guaranteed to climb",
              body: "The E-step is the best possible guess of the hidden memberships given current parameters, and the M-step is maximum likelihood given those guesses — each step can only raise (or hold) the likelihood the E-step just optimized. That is the standard one-line proof sketch; quote it, then note local maxima and restarts.",
            },
            codeExample: {
              language: "python",
              caption: "em_demo.py — EM on the worked example",
              code: `import numpy as np
from sklearn.mixture import GaussianMixture

X = np.array([[0.0], [1.0], [5.0], [6.0]])
gmm = GaussianMixture(n_components=2, random_state=42).fit(X)
print(gmm.means_.ravel())            # about [0.5 5.5]
print(gmm.predict_proba([[1.0]]))    # responsibilities for x = 1
print(gmm.bic(X))                    # criterion for choosing K`,
            },
            examQuestions: [
              {
                q: "Derive the E-step and M-step update rules of the EM algorithm for a Gaussian mixture model, and explain why the likelihood never decreases across iterations.",
                marks: 7,
                outline: [
                  "Model: p(x) = sum_k pi_k N(x | mu_k, Sigma_k), pi_k sum to 1",
                  "E-step: gamma(z_ik) = pi_k*N(x_i|mu_k,Sigma_k) / sum_j pi_j*N(x_i|mu_j,Sigma_j)",
                  "M-step: pi_k = (1/n) sum_i gamma(z_ik); mu_k = weighted mean; Sigma_k = weighted covariance",
                  "Worked trace on {0, 1, 5, 6}: point 1 gets gamma_1 = 0.9994; means move to 0.5 and 5.5",
                  "Each step maximizes a lower bound on the likelihood -> monotone non-decreasing",
                  "Converges to a local maximum; use multiple restarts",
                  "K by BIC/AIC; soft memberships and elliptical clusters are the payoff",
                ],
              },
              {
                q: "Why does EM converge only to a local maximum, and what is the standard remedy?",
                marks: 3,
                outline: [
                  "The likelihood surface is multi-modal; EM climbs the nearest peak",
                  "Result depends on initialization of pi, mu, Sigma",
                  "Remedy: several random restarts, keep the best final likelihood",
                ],
              },
              {
                q: "Write the E-step formula for the responsibilities of a Gaussian mixture.",
                marks: 2,
                outline: [
                  "gamma(z_ik) = pi_k*N(x_i|mu_k,Sigma_k) / sum_j pi_j*N(x_i|mu_j,Sigma_j)",
                  "It is Bayes' theorem with the mixing weights as priors",
                ],
              },
            ],
          },
          {
            number: "2.7",
            title: "The BIRCH algorithm",
            body: [
              "BIRCH (Balanced Iterative Reducing and Clustering using Hierarchies) is built for huge datasets that do not fit in memory. Its invention is the Clustering Feature (CF) — a tiny triple summarizing a sub-cluster: N (number of points), LS (linear sum) and SS (sum of squared points). From these three numbers alone one can compute the sub-cluster's centroid, radius and diameter without ever revisiting the raw points, and two CFs merge by adding their triples — (N, LS, SS) + (N′, LS′, SS′) = (N+N′, LS+LS′, SS+SS′). BIRCH builds a CF-tree in one pass: new points walk down the tree into the closest leaf entry, entries split when they exceed a radius threshold, so the tree is a compressed memory-resident sketch of the whole dataset. Phase 2 optionally condenses the tree, phase 3 runs global clustering on the leaf CFs, and phase 4 redistributes points. BIRCH's strengths — one linear scan, O(1) memory per insertion — make it a pre-clustering tool; its weakness is a bias toward spherical clusters and trouble in very high dimensions.",
              "The Clustering Feature triple is BIRCH's core data structure and the source of its efficiency. For a sub-cluster of N points, the CF is (N, LS, SS) where LS = Σ x_i is the linear sum and SS = Σ x_i x_iᵀ is the sum of outer products. From these three numbers alone the centroid is LS/N, the radius is √(SS/N − (LS/N)²), and the diameter is computable too — all without revisiting the raw points. Two CFs add component-wise, so merging sub-clusters is a single triple addition. The CF-tree compresses millions of rows into thousands of triples, each carrying the statistics needed for clustering decisions. The trade-off is information loss: the CF summarizes, it does not preserve, so BIRCH cannot answer questions about individual points after the tree is built.",
              "The CF-tree construction is BIRCH's phase 1, and its structure is the picture. The tree has three levels: root, internal nodes, and leaves. Each non-leaf node holds up to B entries, each a (CF, child pointer) pair; each leaf holds up to L entries, each a CF for a sub-cluster whose radius is below a threshold T. A new point walks down from the root, at each node following the closest CF's child pointer, until it reaches a leaf. If the closest leaf CF still has radius below T after absorbing the point, the CF is updated (triple addition); otherwise a new CF is created in the leaf, and if the leaf is full it splits. Phase 2 condenses outliers and merges near-duplicate leaf entries. Phase 3 runs a global clustering algorithm (typically agglomerative) on the leaf CFs, treating each as a weighted point. Phase 4 optionally refines by re-reading the data and assigning each point to its closest phase-3 cluster centre.",
              "BIRCH's strengths and weaknesses make it a pre-clustering tool, not a final answer. Strengths: one linear scan of the data; O(B·L) memory regardless of n, so datasets larger than RAM fit; incremental — new points can be inserted without rebuilding the tree; deterministic and order-stable for small T. Weaknesses: biased toward spherical clusters (the CF radius is Euclidean and assumes a compact shape); sensitive to the threshold T and to data ordering (an early outlier can carve a leaf entry that later points avoid); struggles in very high dimensions where the radius threshold becomes meaningless (the curse of Unit V). The standard pattern is to use BIRCH to compress huge data into leaf CFs, then run a better-shaped algorithm (K-Means, GMM, hierarchical) on the leaf CFs as if they were the dataset.",
            ],
            keyTerms: [
              { term: "Clustering Feature (CF)", definition: "The triple (N, LS, SS) summarizing a sub-cluster; enables centroid, radius, diameter without raw points." },
              { term: "CF-tree", definition: "BIRCH's memory-resident tree of CFs; root, internal nodes, leaves with radius-thresholded entries." },
              { term: "Threshold T", definition: "The maximum radius a leaf CF may have after absorbing a point; controls tree granularity." },
              { term: "Phase 1–4", definition: "BIRCH's stages: build CF-tree → condense → global-cluster leaf CFs → redistribute points." },
            ],
            diagram: {
              kind: "layers",
              title: "The BIRCH CF-tree",
              caption:
                "Each node stores Clustering Feature triples instead of points, so millions of rows compress into a memory-sized sketch.",
              layers: [
                { label: "CF-tree root", note: "non-leaf nodes route by nearest child CF" },
                { label: "Leaf: CF₁", note: "(N₁, LS₁, SS₁)" },
                { label: "Leaf: CF₂", note: "(N₂, LS₂, SS₂)" },
                { label: "Leaf: CF₃", note: "(N₃, LS₃, SS₃)" },
              ],
            },
            bullets: [
              "CF triple (N, LS, SS): count, linear sum, sum of squares of a sub-cluster.",
              "Centroid = LS/N; radius = sqrt(SS/N - (LS/N)^2) — all without raw points.",
              "CFs merge by component-wise addition of their triples.",
              "CF-tree: root, internal nodes (B entries), leaves (L entries, radius threshold T).",
              "New points walk down by closest CF; leaves split when the radius exceeds T.",
              "Phases: build tree -> condense -> global clustering on leaf CFs -> redistribute points.",
              "One linear scan, memory O(B*L) — datasets larger than RAM fit.",
              "Biased toward spherical clusters; struggles in very high dimensions.",
            ],
            callout: {
              type: "warning",
              title: "Tuning the threshold T",
              body: "T controls the granularity of the whole tree: too small produces thousands of tiny leaf CFs (no compression), too large merges genuinely distinct groups. Also remember BIRCH is order-sensitive — an early outlier can carve a leaf entry that later points avoid, so a condensing pass (phase 2) matters.",
            },
            codeExample: {
              language: "python",
              caption: "birch.py — clustering beyond RAM",
              code: `from sklearn.cluster import Birch

b = Birch(n_clusters=3, threshold=0.5).fit(X)  # CF-tree in one pass
print(b.subcluster_centers_.shape)             # compact CF summaries
print(b.labels_[:10])                          # cluster id per point
# pattern: BIRCH compresses, then a finer algorithm runs on leaf CFs`,
            },
            examQuestions: [
              {
                q: "Explain the BIRCH algorithm: the Clustering Feature triple, the CF-tree structure, the four phases, and why BIRCH suits data larger than memory.",
                marks: 7,
                outline: [
                  "CF = (N, LS, SS); centroid LS/N, radius sqrt(SS/N - (LS/N)^2) from the triple alone",
                  "Two CFs merge by adding triples component-wise",
                  "CF-tree: non-leaf nodes route by nearest child CF; leaves hold radius-thresholded entries",
                  "Insertion: walk down by closest CF, absorb or split",
                  "Phases: build tree, condense, global clustering on leaf CFs, redistribute points",
                  "One linear scan; memory O(B*L) regardless of n — larger-than-RAM data fits",
                  "Weaknesses: spherical bias, order sensitivity, high-d radius meaninglessness",
                ],
              },
              {
                q: "What three numbers form a Clustering Feature, and what can be computed from them alone?",
                marks: 3,
                outline: [
                  "N (count), LS (linear sum), SS (sum of squared points)",
                  "Centroid = LS/N; radius and diameter follow from N, LS, SS",
                  "Merging two sub-clusters = adding the two triples",
                ],
              },
              {
                q: "Why is BIRCH called a pre-clustering algorithm?",
                marks: 2,
                outline: [
                  "It compresses data into leaf CF summaries in one pass",
                  "A better-shaped algorithm (K-Means, hierarchical) then runs on the leaf CFs",
                ],
              },
            ],
          },
          {
            number: "2.8",
            title: "The CURE algorithm",
            body: [
              "CURE (Clustering Using REpresentatives) fixes K-Means' spherical blind spot and single-linkage's chaining fragility at once. Its trick: represent each cluster not by one centre but by a scatter of c well-chosen representative points — first the point farthest from the centre, then each next point farthest from all chosen so far (a max-min spread), then pulled a fraction α toward the cluster mean (typically α = 0.2–0.5). The shrinking damps outliers, while the multiple representatives preserve the cluster's true elongated shape. Cluster merging uses the closest pair of representatives across clusters, so CURE finds non-spherical, unequal-sized clusters that defeat K-Means. For large n, CURE samples the data first and partitions the sample, then assigns the remainder to the nearest representative. The mental picture: K-Means hugs the middle, CURE posts sentries around the territory.",
              "The representative selection is CURE's signature step and the source of its shape-awareness. For a cluster, choose c representatives by a max-min spread: pick the first point at random or as the centroid, the second as the point farthest from the first, the third as the point farthest from both, and so on — each new representative maximizes the minimum distance to all already-chosen ones. This spreads the representatives across the cluster's extent, including its tails, capturing the true shape. Then shrink each representative toward the cluster mean by a fraction α: rep' = rep + α·(mean − rep). The shrinking pulls outliers in (they were far from the mean, so α shrinks them most) while keeping the spread of representatives, so the cluster's gross shape survives without being distorted by a single noisy point.",
              "The merge step uses representatives, not centroids. Two clusters are merged when the closest pair of representatives (one from each cluster) is closer than any other cross-cluster pair. This means CURE's notion of 'closest clusters' depends on the actual shape of each cluster's territory, not on a single central point — so two elongated clusters pointing at each other are merged by their nearby tips, while K-Means would merge them only if their centroids happened to be close. The result: CURE finds clusters of arbitrary shape and very different sizes, where K-Means assumes spherical, equal-sized ones and would split an elongated cluster into pieces.",
              "CURE's design handles scale through sampling. For large n, CURE takes a random sample large enough to capture the cluster structure (typically 0.3·n or more, with a Chernoff-bound-based guarantee), partitions the sample into p equal parts, pre-clusters each part into a few clusters, removes outliers, and then runs the merge algorithm on the union. Finally, every non-sampled point is assigned to the cluster whose closest representative is nearest. Strengths: finds non-spherical clusters of unequal size; robust to outliers via shrinking; handles large n via sampling. Weaknesses: more parameters than K-Means (c, α, sample size); the sampling step loses guarantees on very rare clusters; slower than K-Means because of the merge step's representative-to-representative distance computations.",
            ],
            keyTerms: [
              { term: "CURE", definition: "Clustering Using REpresentatives; represents each cluster by c shrunk representative points, finds non-spherical clusters." },
              { term: "Representative point", definition: "One of c points chosen per cluster by max-min spread, then shrunk toward the mean." },
              { term: "Shrinking factor (α)", definition: "Fraction (0.2–0.5) by which each representative is pulled toward the cluster mean; damps outliers." },
              { term: "Max-min spread", definition: "Selection rule: each new representative maximizes the minimum distance to all already-chosen ones." },
            ],
            callout: {
              type: "exam",
              title: "K-Means vs CURE in one line",
              body: "K-Means: one centre per cluster, spherical assumption, fails on elongated shapes. CURE: many shrunk representatives per cluster, shape-aware, finds non-spherical clusters. CURE is the right pick when K-Means's spherical assumption is visibly wrong.",
            },
            bullets: [
              "Each cluster is represented by c representative points, not one centre.",
              "Max-min spread: each new representative is farthest from all chosen so far.",
              "Shrinking: rep' = rep + alpha*(mean - rep), alpha typically 0.2-0.5, damps outliers.",
              "Merge rule: closest pair of representatives across clusters.",
              "Preserves elongated, unequal-sized, non-spherical clusters that defeat K-Means.",
              "Sampling (about 0.3*n) plus partitioning handles large n.",
              "More parameters than K-Means: c, alpha, sample size; slower due to rep-to-rep distances.",
            ],
            diagram: {
              kind: "compare",
              title: "BIRCH vs CURE",
              caption: "Both beat plain K-Means at scale, but they fix different blind spots.",
              left: {
                heading: "BIRCH",
                items: [
                  "One CF triple per sub-cluster",
                  "Memory-resident CF-tree, one linear scan",
                  "Spherical bias via the radius threshold",
                  "Best for huge n with compact cluster shapes",
                ],
              },
              right: {
                heading: "CURE",
                items: [
                  "c shrunk representative points per cluster",
                  "Shape-aware: elongated, unequal-sized clusters",
                  "Sampling plus partitioning handles large n",
                  "More parameters: c, alpha, sample size",
                ],
              },
            },
            examQuestions: [
              {
                q: "Explain the CURE algorithm: representative selection by max-min spread, the shrinking factor, merging by representatives, and how sampling makes it scale.",
                marks: 7,
                outline: [
                  "Motivation: K-Means hugs the middle; CURE posts sentries around the territory",
                  "Choose c representatives by max-min spread across the cluster's extent",
                  "Shrink each toward the mean: rep' = rep + alpha*(mean - rep), alpha = 0.2-0.5",
                  "Shrinking damps outliers while preserving the cluster's gross shape",
                  "Merge clusters whose closest pair of representatives is nearest",
                  "Finds non-spherical, unequal-sized clusters",
                  "Sampling ~0.3*n, partitioning, pre-clustering, then assigning the remainder",
                ],
              },
              {
                q: "Why does shrinking representatives toward the mean make CURE robust to outliers?",
                marks: 3,
                outline: [
                  "Outliers sit far from the mean, so shrinking pulls them in the most",
                  "The representatives' spread survives, but extreme positions are tamed",
                  "Merges are then decided by the true cluster territory, not noise",
                ],
              },
              {
                q: "How does CURE decide to merge two clusters?",
                marks: 2,
                outline: [
                  "By the closest pair of representatives, one from each cluster",
                  "Not by centroids — shape matters, so nearby tips of elongated clusters merge",
                ],
              },
            ],
          },
          {
            number: "2.9",
            title: "Parameter estimation: MLE and MAP",
            body: [
              "Maximum Likelihood Estimation (MLE) picks the parameters that make the observed data most probable: θ̂_ML = argmax P(data | θ). For a Gaussian it yields the familiar sample mean and (biased-by-one) sample variance; for a Bernoulli coin, the observed heads fraction. MLE is pure data — but with few observations it can be extreme: three coin flips, three heads, and MLE swears the coin never shows tails. Maximum A Posteriori (MAP) estimation adds a prior belief about θ and picks the mode of the posterior: θ̂_MAP = argmax P(data | θ) · P(θ) — by Bayes' theorem, the most probable parameter given both data and prior. With a uniform prior, MAP reduces to MLE; with a Beta(2,2) prior on the coin, three heads yield a MAP of 4/6, not 3/3 — the prior gently pulls the estimate back toward fairness. MLE and MAP differ only by the prior term; that single difference is the standard two-mark comparison, and MAP is the philosophical seed of regularization.",
              "MLE's mechanics are visible in the canonical examples. For a Gaussian N(μ, σ²), the likelihood of n i.i.d. samples is L(μ, σ²) = Π (1/√(2πσ²)) exp(−(x_i − μ)²/(2σ²)); maximizing its log gives μ̂ = (1/n) Σ x_i (the sample mean) and σ̂² = (1/n) Σ (x_i − μ̂)² (the biased sample variance — the unbiased one divides by n−1, a separate adjustment). For a Bernoulli coin with k heads in n flips, the likelihood is L(p) = p^k (1−p)^(n−k); setting dL/dp = 0 gives p̂ = k/n, the observed heads fraction. These closed forms are why MLE is the default: it is computable, intuitive, and asymptotically unbiased (the estimate converges to the true θ as n → ∞).",
              "MAP's mechanics are best seen in the coin-flip worked example that earns exam marks. We flip a coin 3 times and get 3 heads. MLE says p̂_ML = 3/3 = 1.0 — the coin never shows tails, which is absurd. MAP adds a Beta(α, β) prior on p (a flexible distribution on [0, 1] modelling our prior belief about the coin's fairness); α = β = 2 says 'I expect roughly fair'. The posterior is Beta(α + k, β + n − k) = Beta(5, 2); its mode (the MAP estimate) is (α + k − 1) / (α + β + n − 2) = (2 + 3 − 1) / (2 + 2 + 3 − 2) = 4/6 ≈ 0.67. The prior gently pulled the estimate from the absurd 1.0 toward a more plausible 0.67 — that pull is regularization in its purest form. With a uniform prior (Beta(1,1)), MAP reduces to MLE: 3/3.",
              "MLE and MAP differ only in the prior term, but that difference carries the whole Bayesian-versus-frequentist philosophical divide. MLE is frequentist: parameters are fixed unknown constants, the data alone speaks, and the estimate is the one that maximizes the probability of observing the data seen. MAP is Bayesian-flavoured: parameters are random variables with prior distributions encoding prior belief, and the estimate is the mode of the posterior combining data and prior. Practically, MAP is the foundation of L2 regularization (a Gaussian prior on weights → ridge regression) and L1 regularization (a Laplacian prior → LASSO). When data is plentiful the prior washes out and MLE ≈ MAP; when data is scarce the prior dominates and MAP is the safer estimate. The trade-off is bias for variance: MAP introduces bias (toward the prior) to reduce variance (the estimate is less sample-sensitive).",
            ],
            keyTerms: [
              { term: "MLE", definition: "Maximum Likelihood Estimation: θ̂ = argmax P(data | θ); pure data, no prior." },
              { term: "MAP", definition: "Maximum A Posteriori: θ̂ = argmax P(data | θ) · P(θ); data plus a prior belief about θ." },
              { term: "Prior P(θ)", definition: "The belief distribution over parameters before seeing data; the regularizer in MAP." },
              { term: "Posterior", definition: "P(θ | data) ∝ P(data | θ) · P(θ); the updated belief after data, by Bayes' theorem." },
              { term: "Beta distribution", definition: "A flexible prior on [0, 1] for binary parameters like a coin's heads probability." },
            ],
            table: {
              caption: "MLE vs MAP.",
              headers: ["Aspect", "MLE", "MAP"],
              rows: [
                ["Objective", "max P(data | θ)", "max P(data | θ) · P(θ)"],
                ["Uses a prior?", "no — data only", "yes — belief about θ before data"],
                ["Few data points", "can be extreme (3/3 heads → 1.0)", "prior pulls toward plausible (→ 4/6)"],
                ["Special case", "—", "uniform prior ⇒ equals MLE"],
                ["Character", "frequentist", "Bayesian flavour"],
              ],
            },
            bullets: [
              "MLE: theta = argmax P(data | theta); pure data, no prior.",
              "Gaussian MLE gives the sample mean and the (biased) sample variance.",
              "Bernoulli MLE: p = k/n — three heads in three flips give p = 1.0, absurd.",
              "MAP: theta = argmax P(data | theta) * P(theta); the prior pulls the estimate.",
              "Beta(alpha, beta) prior on a coin: posterior Beta(alpha + k, beta + n - k).",
              "Beta(2,2) prior, 3 heads: posterior Beta(5, 2), MAP = 4/6 = 0.67, not 1.0.",
              "Uniform prior makes MAP equal MLE; plentiful data washes the prior out.",
              "MAP is regularization: Gaussian prior -> L2, Laplacian prior -> L1.",
            ],
            diagram: {
              kind: "fork",
              title: "Estimating a coin's heads probability from 3 flips (3 heads)",
              caption: "Same data, three estimators — the prior is the only difference.",
              start: "Estimate p after 3 heads in 3 flips",
              branches: [
                { label: "MLE", outcome: "p = 3/3 = 1.0 — the coin never shows tails, absurd", good: false },
                { label: "MAP with Beta(2,2) prior", outcome: "posterior Beta(5,2); mode = 4/6 = 0.67 — plausible", good: true },
                { label: "MAP with uniform Beta(1,1)", outcome: "reduces to MLE: p = 1.0", good: false },
              ],
            },
            callout: {
              type: "exam",
              title: "MAP = MLE + prior = regularization",
              body: "The standard three marks: (1) write both objectives, (2) show MAP with a uniform prior reduces to MLE, (3) note that a Gaussian prior on weights gives L2/ridge and a Laplacian prior gives L1/LASSO. The 3-heads coin example with Beta(2,2) turning 1.0 into 4/6 is the worked trace examiners expect.",
            },
            codeExample: {
              language: "python",
              caption: "mle_map.py — the coin example, computed",
              code: `k, n = 3, 3                            # 3 heads in 3 flips
mle = k / n                            # 1.0 — extreme

# MAP with a Beta(alpha, beta) prior: posterior is Beta(alpha+k, beta+n-k)
alpha, beta = 2, 2                     # 'roughly fair' prior belief
map_est = (alpha + k - 1) / (alpha + beta + n - 2)   # mode of posterior
print("MLE:", mle, " MAP:", map_est)   # 1.0  0.667 — prior regularizes`,
            },
            examQuestions: [
              {
                q: "Derive the MLE for a Bernoulli coin and for a Gaussian mean. Explain MAP estimation, the Beta prior, and show with the 3-heads example how the prior changes the estimate.",
                marks: 7,
                outline: [
                  "MLE: maximize L(p) = p^k (1-p)^(n-k); setting dL/dp = 0 gives p = k/n",
                  "Gaussian MLE: mu = sample mean; sigma^2 = (1/n) sum (x_i - mu)^2 (biased)",
                  "MAP: argmax P(data | theta) * P(theta); by Bayes, the posterior mode",
                  "Beta(alpha, beta) prior -> posterior Beta(alpha + k, beta + n - k)",
                  "Beta(2,2) prior, k = 3, n = 3: posterior Beta(5, 2), mode = 4/6 = 0.67",
                  "MLE gives 3/3 = 1.0 — the prior pulls the estimate toward plausibility",
                  "Uniform prior reduces MAP to MLE; MAP = the seed of regularization",
                ],
              },
              {
                q: "Show that MAP with a uniform prior is identical to MLE.",
                marks: 3,
                outline: [
                  "Uniform prior P(theta) is constant over the parameter space",
                  "Multiplying the likelihood by a constant does not move the argmax",
                  "Hence theta_MAP = theta_MLE under Beta(1,1)",
                ],
              },
              {
                q: "Which regularizer corresponds to a Gaussian prior on the weights?",
                marks: 2,
                outline: [
                  "A Gaussian (normal) prior corresponds to L2 regularization",
                  "Known as ridge regression; Laplacian prior gives L1/LASSO",
                ],
              },
            ],
          },
          {
            number: "2.10",
            title: "Applications of clustering",
            body: [
              "Clustering earns its keep wherever groups exist but no one labelled them. Customer segmentation: group shoppers by recency, frequency and monetary value for targeted campaigns — the classic marketing use. Document clustering: organize news articles or support tickets into themes for search and triage. Image segmentation: pixels clustered by colour and texture become regions — medical imaging, object detection pipelines. Anomaly detection: points far from every cluster flag fraud, network intrusion or faulty sensors. Bioinformatics: genes with similar expression profiles cluster into functional families. Preprocessing and compression: K-Means as vector quantization shrinks embeddings (the RAG pipeline uses exactly this), and clustered data often feeds a classifier with the cluster ID as a new feature. In every case the workflow is the same: normalize, choose a family, validate with silhouette or domain judgement, then act on the groups.",
              "Marketing and customer analytics are clustering's richest industrial home. Customer segmentation groups shoppers by recency, frequency and monetary value (the RFM score) so campaigns can target high-value, at-risk, or new-customer segments with different offers. Market-basket analysis clusters products that are bought together, informing shelf layout and bundle pricing. Churn prediction uses clusters of behaviour (usage drop, support tickets) to flag at-risk customers before they leave. The output is rarely the end — clusters feed downstream classifiers and recommender systems, with the cluster ID itself becoming a feature. The discipline is the same: normalize the behavioural features, choose K by silhouette or business interpretability, and validate that segments differ on holdout business metrics (revenue, retention).",
              "Document and image clustering drive search and vision pipelines. Document clustering organizes news articles, support tickets, or research papers into themes — K-Means on TF-IDF or embedding vectors is the classic first pass, with HDBSCAN finding variable-shaped themes when K is unknown. Topic modelling (LDA) is a probabilistic cousin. Image segmentation clusters pixels by colour, texture, or deep-feature similarity to produce regions for object detection, medical imaging (tumour vs healthy tissue), and autonomous driving (road vs sky vs pedestrian). Anomaly detection treats outliers as a 'noise cluster': points far from every cluster centre flag fraud, network intrusion, or faulty sensors — the distance to the nearest cluster centre is the anomaly score, and a threshold separates normal from anomalous.",
              "Bioinformatics and compression close the application tour. In bioinformatics, genes with similar expression profiles across experiments cluster into co-regulated functional families, suggesting shared biological roles. Protein sequences cluster by structural similarity for drug discovery. In compression, K-Means acts as vector quantization: cluster a large set of vectors (image patches, audio frames, embeddings) into K centres, then replace each vector with the index of its nearest centre — a lossy compression that shrinks storage by orders of magnitude. Modern retrieval-augmented generation (RAG) pipelines cluster document embeddings to build a fast index over a huge corpus. In every application the workflow is identical: normalize, choose a family by cluster shape, validate with silhouette or domain judgement, then act on the groups — and always visualize the clusters before trusting them.",
            ],
            keyTerms: [
              { term: "Customer segmentation", definition: "Grouping customers by behaviour (RFM scores) for targeted marketing and churn prediction." },
              { term: "Image segmentation", definition: "Clustering pixels by colour/texture/features to produce regions for vision and medical imaging." },
              { term: "Anomaly detection", definition: "Flagging points far from every cluster as outliers — fraud, intrusion, sensor faults." },
              { term: "Vector quantization", definition: "K-Means as compression: replace each vector with its nearest cluster index, shrinking storage." },
              { term: "Topic modelling", definition: "Soft document clustering (LDA, HDBSCAN) that assigns documents to themes without labels." },
            ],
            codeExample: {
              language: "python",
              caption: "clustering.py — K-Means + GMM",
              code: `from sklearn.cluster import KMeans
from sklearn.mixture import GaussianMixture
from sklearn.metrics import silhouette_score

km = KMeans(n_clusters=3, n_init=10, random_state=42).fit(X_scaled)
print(silhouette_score(X_scaled, km.labels_))   # -1 … +1, higher better

gmm = GaussianMixture(n_components=3, covariance_type='full').fit(X_scaled)
print(gmm.predict_proba(X_scaled[:2]))           # soft memberships — rows sum to 1`,
            },
            bullets: [
              "Customer segmentation: RFM features -> targeted campaigns and churn flags.",
              "Document clustering: K-Means on TF-IDF or embeddings; HDBSCAN when K is unknown.",
              "Image segmentation: cluster pixels by colour/texture into regions for vision pipelines.",
              "Anomaly detection: distance to nearest cluster centre is the anomaly score.",
              "Bioinformatics: co-expressed genes cluster into functional families.",
              "Vector quantization: replace each vector with its nearest centre index — compression.",
              "Cluster IDs often become downstream features for classifiers and recommenders.",
              "Standard workflow: normalize -> choose family -> validate (silhouette/domain) -> act.",
            ],
            diagram: {
              kind: "fork",
              title: "Which clustering tool for which job?",
              caption: "Applications map to algorithms through the shape of the data and the decision needed.",
              start: "A clustering problem in the wild",
              branches: [
                { label: "Customers described by RFM scores", outcome: "K-Means segmentation -> targeted campaigns", good: true },
                { label: "Pixels described by colour/texture", outcome: "GMM or spatial clustering -> image segmentation", good: true },
                { label: "Points far from every cluster", outcome: "distance-based anomaly score -> fraud/sensor flags", good: true },
                { label: "Dataset larger than RAM", outcome: "BIRCH compresses first, finer clustering on leaf CFs", good: true },
              ],
            },
            callout: {
              type: "tip",
              title: "Clusters are rarely the end product",
              body: "In industry the clusters feed something else: the cluster ID becomes a feature in a churn classifier, the segments drive different marketing offers, the quantization indexes a retrieval pipeline. Saying this in the exam shows you understand deployment, not just algorithms.",
            },
            examQuestions: [
              {
                q: "Discuss five applications of clustering across marketing, vision, text mining, bioinformatics and compression, describing the data, the algorithm choice and the action taken in each.",
                marks: 7,
                outline: [
                  "Customer segmentation: RFM features, K-Means, targeted offers and churn flags",
                  "Document clustering: TF-IDF/embeddings, K-Means or HDBSCAN, search and triage",
                  "Image segmentation: pixel colour/texture, GMM or spatial clustering, medical imaging",
                  "Anomaly detection: distance to nearest centre as score; fraud, intrusion, sensor faults",
                  "Bioinformatics: expression profiles, co-regulated gene families",
                  "Vector quantization: K-Means codes replace vectors; storage shrinks by orders of magnitude",
                  "Common workflow: normalize, choose family, validate with silhouette/domain judgement",
                ],
              },
              {
                q: "How does K-Means act as vector quantization for compression?",
                marks: 3,
                outline: [
                  "Cluster the vectors (image patches, embeddings) into K centres",
                  "Store each vector's nearest-centre index instead of the vector itself",
                  "Lossy but orders-of-magnitude storage saving; basis of RAG-style indexes",
                ],
              },
              {
                q: "How can clustering detect anomalies?",
                marks: 2,
                outline: [
                  "Compute each point's distance to its nearest cluster centre",
                  "Points far from every cluster score high — threshold flags fraud or sensor faults",
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
      title: "Classification Algorithms",
      summary:
        "Unit III meets the six classical classifiers — logistic regression, decision trees, neural networks, K-NN, SVM and the Naive Bayes family — and then the measurement kit that makes their comparison honest: the confusion matrix, accuracy, precision, recall, F1 and support.",
      chapter: {
        number: "03",
        title: "Classifiers & How to Judge Them",
        intro:
          "Unit III covers the classification problem, six classical classifiers, and the confusion-matrix-based measurement kit.",
        inOneBreath:
          "Classifiers differ by their geometric belief about decision boundaries; logistic = linear boundary, tree = axis-aligned boxes, NN = universal approximator, K-NN = nearest-neighbour vote, SVM = maximum margin, NB = independence-assuming probabilities; the confusion matrix generates every metric.",
        sections: [
          {
            number: "3.1",
            title: "The classification problem",
            body: [
              "Classification is supervised learning with a categorical target: given labelled examples (x, y), learn h(x) that predicts the class y of new points. Binary classification has two classes (spam / not spam), multiclass has several (digit 0–9), and multilabel assigns multiple tags at once. Every classifier in this unit is a different geometrical belief about where decision boundaries belong — a straight line, a box tree, a distance vote, a maximal margin, a probability cascade — and the honest way to choose among them is the metrics of section 3.8 on held-out data, never training accuracy.",
              "The three problem shapes — binary, multiclass, multilabel — differ in their output and in the algorithms that suit them. Binary classification has one positive and one negative class; the model outputs a single score (a probability) thresholded at 0.5 by default, and every metric in section 3.8 is defined for this case. Multiclass classification has three or more mutually exclusive classes; one-vs-rest (train K binary classifiers, pick the highest score) and softmax regression (a single multiclass model outputting a probability distribution over K classes) are the two standard approaches. Multilabel classification assigns any subset of K labels to each instance (a photo may be both 'beach' and 'sunset'); it is K independent binary classifications, evaluated per-label and macro-averaged.",
              "Each classifier in this unit encodes a different inductive bias about decision boundaries. Logistic regression draws a single straight hyperplane — fast, interpretable, calibrated, but only linear. Decision trees draw axis-aligned boxes — handle mixed features, no scaling, but overfit unpruned. Neural networks compose nonlinearities into arbitrarily curved boundaries — universal approximators, but data-hungry and opaque. K-NN draws boundaries implicitly via the nearest stored neighbours — no training, flexible, but slow at inference and scale-dependent. SVM draws the maximum-margin hyperplane, optionally lifted by a kernel into a higher-dimensional space — strong on small high-dimensional data. Naive Bayes applies Bayes' theorem with a conditional-independence assumption — fast, tiny, works on small data, especially text.",
              "The honest way to choose among classifiers is empirical: train several, evaluate each on held-out data with the metrics matched to the task's error costs (section 3.8), and pick the winner. Training accuracy is a trap — it rewards overfit models that memorize the training set. Cross-validation gives a robust estimate on small data; a single train/test split is enough on large data. The No-Free-Lunch theorem reminds us that no classifier dominates all others on all problems — the practitioner's skill is matching the classifier's inductive bias to the data's true structure. The rest of this unit develops each classifier in turn, ending with the measurement kit that makes the comparison honest.",
            ],
            keyTerms: [
              { term: "Binary classification", definition: "Two mutually exclusive classes; model outputs a probability thresholded at 0.5." },
              { term: "Multiclass classification", definition: "Three or more mutually exclusive classes; one-vs-rest or softmax." },
              { term: "Multilabel classification", definition: "K labels assignable independently; one photo can be 'beach' and 'sunset' at once." },
              { term: "Decision boundary", definition: "The surface in feature space where the classifier switches from one class to another." },
              { term: "Inductive bias", definition: "The assumption a classifier bakes in about boundary shape — linear, box-tree, curved, etc." },
            ],
            diagram: {
              kind: "compare",
              title: "Classifiers by boundary shape",
              caption: "Each classifier draws a different kind of decision surface; the data's true shape chooses the right one.",
              left: {
                heading: "Linear / parametric",
                items: ["logistic regression — straight hyperplane", "Naive Bayes — linear (under independence)", "linear SVM — maximum-margin hyperplane"],
              },
              right: {
                heading: "Non-linear / non-parametric",
                items: ["decision tree — axis-aligned boxes", "K-NN — nearest-neighbour vote", "RBF-SVM — kernel-lifted margin", "neural network — universal approximator"],
              },
            },
            bullets: [
              "Classification: supervised learning with a categorical target; learn h(x) -> class.",
              "Binary: two classes, one probability thresholded at 0.5.",
              "Multiclass: K mutually exclusive classes; one-vs-rest or softmax.",
              "Multilabel: any subset of K labels per instance (photo = beach AND sunset).",
              "Every classifier is a geometric belief about the decision boundary.",
              "Logistic = straight line; tree = axis-aligned boxes; K-NN = local vote; SVM = max margin.",
              "Judge classifiers on held-out data with cost-matched metrics — never training accuracy.",
            ],
            callout: {
              type: "exam",
              title: "Boundary shape is the organizing table",
              body: "When asked to compare classifiers, structure the answer as a table: rows = the six classifiers, columns = boundary shape, scaling needed, strengths, weakness. It turns a rambling essay into a full-marks comparison and is exactly how the unit is organized.",
            },
            examQuestions: [
              {
                q: "Explain the classification problem and distinguish binary, multiclass and multilabel classification with examples. Describe one-vs-rest and softmax for multiclass problems.",
                marks: 7,
                outline: [
                  "Classification: learn h from labelled (x, y) with categorical y",
                  "Binary: two classes; score thresholded at 0.5; spam example",
                  "Multiclass: K exclusive classes; digit 0-9 example",
                  "One-vs-rest: train K binary classifiers, pick the highest score",
                  "Softmax: one model outputs a probability distribution over K classes",
                  "Multilabel: K independent binary decisions; photo tagged beach AND sunset",
                  "Choice among classifiers is empirical: held-out metrics matched to error costs",
                ],
              },
              {
                q: "Differentiate multiclass from multilabel classification with one example each.",
                marks: 3,
                outline: [
                  "Multiclass: exactly one of K classes (a digit is one of 0-9)",
                  "Multilabel: any subset of K labels simultaneously (photo is beach and sunset)",
                  "Multilabel = K independent binary problems, evaluated per label",
                ],
              },
              {
                q: "What is a decision boundary?",
                marks: 2,
                outline: [
                  "The surface in feature space where the classifier switches class",
                  "Its shape (line, boxes, curve) is the classifier's inductive bias",
                ],
              },
            ],
          },
          {
            number: "3.2",
            title: "Logistic regression",
            body: [
              "Despite the name, logistic regression is a classifier. It models the probability of the positive class by passing a linear score through the sigmoid σ(z) = 1/(1 + e⁻ᶻ), which squashes any real number into (0, 1): p = σ(w·x + b). Points are predicted positive when p ≥ 0.5, which is exactly the decision boundary w·x + b = 0 — a linear boundary drawn where the model is 50-50 uncertain. Parameters are fitted by minimizing log-loss (binary cross-entropy): the penalty is huge when a confidently predicted probability is wrong, tiny when it is right, which makes training maximum-likelihood. Strengths: calibrated probabilities, interpretability (each weight is a direction of influence), speed, L1/L2 regularization built in. Weakness: the boundary itself is a straight line — curved boundaries need engineered features or the kernel trick.",
              "The sigmoid is the engine and earns a numerical trace. σ(0) = 0.5 (the 50-50 boundary); σ(2) ≈ 0.88 (confident positive); σ(−2) ≈ 0.12 (confident negative); σ(10) ≈ 0.99995 (saturated). The boundary p = 0.5 is exactly where w·x + b = 0, and the steepness of the sigmoid near 0 is controlled by ‖w‖ — large weights give a sharp boundary, small weights a soft one. Logistic regression is maximum-likelihood: it picks w to maximize Π p_i^{y_i} (1−p_i)^{1−y_i}, equivalently to minimize the log-loss L = −Σ [y_i log p_i + (1−y_i) log(1−p_i)]. The log-loss is huge when a confident prediction is wrong (log 0.001 ≈ −7) and tiny when it is right (log 0.99 ≈ −0.01), so the optimizer pushes hard on confidently-wrong points and gently on confidently-right ones.",
              "Training is by gradient descent on the log-loss, which is convex for logistic regression — guaranteeing a single global minimum reachable from any starting point. The gradient of the log-loss with respect to w is (1/n) Σ (p_i − y_i) x_i — the prediction error weighted by the feature vector, averaged over the training set. Gradient descent updates w ← w − η · ∇L with learning rate η; stochastic gradient descent uses mini-batches for scalability. L2 regularization (ridge) adds λ‖w‖² to the loss, shrinking weights toward zero; L1 regularization (LASSO) adds λ‖w‖₁, driving some weights exactly to zero (feature selection). Regularization strength λ is the dial against overfitting — large λ underfits, small λ risks overfitting, cross-validation chooses the right value.",
              "Strengths and weaknesses close out the method. Strengths: calibrated probabilities (a 0.8 really means 80% chance of positive, unlike an SVM score); each weight has a direct interpretation as the log-odds change per unit feature change; training is convex and fast; L1/L2 regularization is built in; multiclass extension via softmax is straightforward. Weaknesses: the linear boundary cannot capture curved or interactive relationships without feature engineering (adding x₁·x₂ or x² as new features); performance lags tree ensembles and neural networks on most non-trivial problems; assumes features are not wildly collinear. The right use case is when interpretability and calibrated probabilities matter more than raw accuracy, or as a fast baseline before trying fancier models.",
            ],
            keyTerms: [
              { term: "Sigmoid σ(z)", definition: "σ(z) = 1/(1+e⁻ᶻ); squashes any real score into a (0,1) probability." },
              { term: "Log-loss (cross-entropy)", definition: "−Σ [y log p + (1−y) log(1−p)]; convex loss minimized in maximum-likelihood logistic training." },
              { term: "Decision boundary", definition: "Where p = 0.5, i.e. w·x + b = 0 — a linear hyperplane." },
              { term: "L1 / L2 regularization", definition: "Penalties λ‖w‖₁ (drives weights to zero) or λ‖w‖² (shrinks weights) that prevent overfitting." },
              { term: "Convex loss", definition: "A loss with a single global minimum; logistic regression's log-loss is convex, guaranteeing convergence." },
            ],
            codeExample: {
              language: "python",
              caption: "logistic.py — scikit-learn",
              code: `from sklearn.linear_model import LogisticRegression

clf = LogisticRegression().fit(X_train, y_train)
print(clf.predict_proba(X_test[:3]))  # calibrated P(class = 1)
print(clf.score(X_test, y_test))      # accuracy on unseen rows`,
            },
            bullets: [
              "Logistic regression is a classifier: p = sigma(w.x + b), sigma(z) = 1/(1 + e^-z).",
              "sigma(0) = 0.5; sigma(2) = 0.88; sigma(-2) = 0.12; large |z| saturates.",
              "Decision boundary: p = 0.5 is exactly w.x + b = 0 — a linear hyperplane.",
              "Loss: log-loss L = -sum [y log p + (1-y) log(1-p)] — convex, global minimum.",
              "Gradient: (1/n) sum (p_i - y_i) x_i — error weighted by features.",
              "L2 shrinks weights; L1 drives some to zero (feature selection).",
              "Strengths: calibrated probabilities, interpretable weights, fast.",
              "Weakness: linear boundary — curved data needs engineered features or kernels.",
            ],
            diagram: {
              kind: "flow",
              title: "From features to class probability",
              caption: "A linear score passed through the sigmoid becomes a calibrated probability.",
              steps: [
                { label: "Linear score", note: "z = w.x + b" },
                { label: "Sigmoid", note: "sigma(z) = 1/(1 + e^-z)" },
                { label: "Probability", note: "p in (0, 1)" },
                { label: "Threshold at 0.5", note: "boundary is w.x + b = 0" },
                { label: "Class label", note: "positive if p >= 0.5" },
              ],
            },
            callout: {
              type: "exam",
              title: "It is named regression but it classifies",
              body: "The name survives for history: it regresses the probability of the positive class, then thresholds it. Say that sentence, give sigma(z) = 1/(1 + e^-z), write the log-loss, and note the convexity guarantee — four instant marks in the first four lines of the answer.",
            },
            examQuestions: [
              {
                q: "Explain logistic regression: the sigmoid function, the decision boundary, the log-loss, and gradient descent training. Why is it called 'regression' although it is a classifier?",
                marks: 7,
                outline: [
                  "It models P(y = 1 | x) = sigma(w.x + b); regression of a probability, then thresholded",
                  "sigma(z) = 1/(1 + e^-z); sigma(0) = 0.5, saturates for large |z|",
                  "Boundary: p = 0.5 iff w.x + b = 0 — a linear hyperplane",
                  "Log-loss L = -sum [y log p + (1-y) log(1-p)]; convex, single global minimum",
                  "Gradient (1/n) sum (p_i - y_i)x_i; update w <- w - eta * gradient",
                  "L2/L1 regularization shrink or zero weights; lambda by cross-validation",
                  "Strengths: calibrated probabilities, interpretability; weakness: linear boundary only",
                ],
              },
              {
                q: "Show that the p = 0.5 decision threshold corresponds to w.x + b = 0.",
                marks: 3,
                outline: [
                  "p = sigma(z) = 0.5 implies z = 0 since sigma(z) = 0.5 iff z = 0",
                  "So w.x + b = 0",
                  "That equation is a hyperplane — the linear decision boundary",
                ],
              },
              {
                q: "Why is log-loss preferred over MSE for logistic regression?",
                marks: 2,
                outline: [
                  "Log-loss is convex in w — a single global minimum",
                  "It heavily penalizes confidently-wrong predictions, gently rewards confident-right ones",
                ],
              },
            ],
          },
          {
            number: "3.3",
            title: "Decision tree classification",
            body: [
              "A decision tree asks a sequence of yes/no questions about single features — 'income > 50k?', 'age < 30?' — partitioning the data into ever-purer boxes. Trees are built top-down by greedy recursive splitting: at each node, choose the feature and threshold that most reduce impurity. Impurity is measured by Gini G = 1 − Σ pₖ² (probability-weighted chance of mislabeling a random node sample) or by entropy H = −Σ pₖ log₂ pₖ, with the resulting gain called 'information gain'. Splitting stops at pure nodes, at max depth, or when too few samples remain. Strengths: no scaling needed, handles mixed feature types, and the tree is human-readable. The fatal weakness: overfitting — an unpruned tree happily carves a private box around every noisy point. Cures: pre-pruning (max_depth, min_samples_leaf) or post-pruning (cost-complexity), or — the next unit's whole story — many trees voting together.",
              "The impurity measures are the heart of the algorithm and earn a worked trace. Gini G = 1 − Σ pₖ² is the probability that a random pair from the node are different classes — 0 means pure (one class), 0.5 means a balanced binary node (maximum impurity). Entropy H = −Σ pₖ log₂ pₖ measures the average bits needed to encode a class label — 0 for pure, 1 for balanced binary. Information gain is the parent impurity minus the weighted-average child impurity after the split. For a binary node with 4 positive and 2 negative examples (p₊ = 4/6, p₋ = 2/6): Gini = 1 − (16/36 + 4/36) = 16/36 ≈ 0.44; entropy = −(4/6 log 4/6 + 2/6 log 2/6) ≈ 0.92 bits. Splitting on a feature that perfectly separates the classes yields two pure children (Gini = 0, entropy = 0), so the gain is the full parent impurity — the best possible split.",
              "The greedy recursive splitting is the algorithm in one paragraph. Start at the root with all training data. At each node, scan every feature and every possible threshold (for continuous features, midpoints between sorted unique values); compute the impurity gain for each candidate split; pick the one with the highest gain; partition the data into the left and right children; recurse on each child until a stopping criterion is met. Stopping criteria: pure node (impurity 0); max_depth reached; min_samples_leaf not met (e.g. fewer than 5 samples); or zero gain. The result is a tree where every internal node is a yes/no question and every leaf is a class prediction (majority class of the leaf's training points). For regression trees, the same algorithm minimizes MSE instead of Gini, and leaves predict the mean of their training points.",
              "Trees' strengths and weaknesses make them the foundation of Unit IV's ensembles. Strengths: no scaling or distributional assumptions; handles mixed feature types (numeric + categorical) naturally; missing values can be routed to surrogate splits; human-readable, auditable, debuggable; multiclass for free; non-linear boundaries via deep trees. Weaknesses: high variance — a single tree's structure can change drastically if one training point moves; overfits unpruned (deep trees carve private boxes around noise); greedy splits are not globally optimal; biased toward features with many possible split points (high-cardinality). The cures: pre-pruning (limit max_depth, min_samples_leaf, min_impurity_decrease), post-pruning (cost-complexity pruning as in CART), or — the next unit's whole story — averaging many trees with bagging and random feature subsets to slash the variance.",
            ],
            keyTerms: [
              { term: "Gini impurity", definition: "G = 1 − Σ pₖ²; probability that a random pair from the node are different classes." },
              { term: "Entropy", definition: "H = −Σ pₖ log₂ pₖ; average bits needed to encode a node's class label." },
              { term: "Information gain", definition: "Parent impurity minus weighted-average child impurity after a split." },
              { term: "Pruning", definition: "Removing tree branches (pre- or post-construction) to reduce overfitting." },
              { term: "Leaf node", definition: "A terminal node predicting the majority class (classification) or mean (regression) of its samples." },
            ],
            diagram: {
              kind: "flow",
              title: "A decision tree",
              caption: "Internal nodes ask single-feature questions chosen to maximize purity gain; leaves answer.",
              steps: [
                { label: "Income > 50k?", note: "root — most informative first" },
                { label: "Age < 30?", note: "yes branch" },
                { label: "Credit > 700?", note: "no branch" },
                { label: "Leaf: decline", note: "pure-ish" },
                { label: "Leaf: approve", note: "pure" },
              ],
            },
            bullets: [
              "Gini: G = 1 - sum p_k^2 — 0 pure, 0.5 for a balanced binary node.",
              "Entropy: H = -sum p_k log2 p_k — average bits to encode the node's label.",
              "Information gain = parent impurity - weighted child impurity.",
              "Worked node (4 positive, 2 negative): Gini = 16/36 = 0.44; entropy = 0.92 bits.",
              "Greedy splitting: scan every feature and threshold, take the best gain, recurse.",
              "Stop at pure nodes, max_depth, min_samples_leaf, or zero gain.",
              "No scaling needed; mixed feature types; human-readable.",
              "Fatal weakness: unpruned trees memorize noise — pre-prune, post-prune, or ensemble.",
            ],
            callout: {
              type: "warning",
              title: "An unpruned tree is a lookup table",
              body: "Given enough depth, a tree carves a private box around every training point and scores 100% on training data while collapsing on test data. Always set max_depth or min_samples_leaf, and tune them by cross-validation — or move to the forests of Unit IV.",
            },
            codeExample: {
              language: "python",
              caption: "tree.py — readable rules from sklearn",
              code: `from sklearn.tree import DecisionTreeClassifier, export_text

tree = DecisionTreeClassifier(criterion="gini", max_depth=3,
                              random_state=42).fit(X_train, y_train)
print(export_text(tree, feature_names=feature_names))  # readable rules
print(tree.score(X_test, y_test))
# unpruned trees overfit: tune max_depth / min_samples_leaf by cross-validation`,
            },
            examQuestions: [
              {
                q: "Explain decision tree construction: Gini and entropy, information gain, recursive splitting and stopping criteria. Compute the Gini of a node containing 4 positive and 2 negative samples.",
                marks: 7,
                outline: [
                  "Top-down greedy splitting on the feature/threshold with highest impurity reduction",
                  "Gini G = 1 - sum p_k^2; entropy H = -sum p_k log2 p_k",
                  "Information gain = parent impurity - weighted average child impurity",
                  "Worked node: p+ = 4/6, p- = 2/6; Gini = 1 - (16/36 + 4/36) = 0.44",
                  "Same node entropy = -(4/6 log2 4/6 + 2/6 log2 2/6) = 0.92 bits",
                  "Stopping: purity, max_depth, min_samples_leaf, or zero gain",
                  "Strengths and weakness: readable and unscaled, but overfits unpruned",
                ],
              },
              {
                q: "Compute the entropy of a node with 8 positive and 8 negative examples.",
                marks: 3,
                outline: [
                  "p+ = p- = 0.5",
                  "H = -(0.5 log2 0.5 + 0.5 log2 0.5)",
                  "H = 1 bit — maximum impurity for binary classification",
                ],
              },
              {
                q: "Why do decision trees need no feature scaling?",
                marks: 2,
                outline: [
                  "Trees test one feature at a time against a threshold",
                  "The optimal threshold is found per feature, so units/scale are irrelevant",
                ],
              },
            ],
          },
          {
            number: "3.4",
            title: "Neural networks",
            body: [
              "A neural network is layers of neurons, each computing a weighted sum of its inputs plus a bias, passed through a nonlinear activation function — ReLU(z) = max(0, z) in hidden layers, sigmoid or softmax at the output. The simplest ancestor is the perceptron (single neuron, hard threshold) which can only draw straight lines; stacking hidden layers breaks that ceiling: any composition of nonlinearities can approximate arbitrary continuous decision boundaries (the universal approximation idea). Training is by backpropagation: forward-pass the data, measure the loss, propagate the error backwards layer by layer with the chain rule, and nudge every weight a small learning-rate step downhill — gradient descent, the same engine as Unit I's cost minimization. Deep learning is this machinery scaled to many layers on raw data. For tabular problems the classic classifiers often win on speed and interpretability; networks win when inputs are raw signals — pixels, audio, text embeddings — and data is plentiful.",
              "A single neuron is a linear model wrapped in a nonlinearity. Its output is a = f(w·x + b) where f is the activation function. The choice of f defines the neuron's behaviour: linear (no nonlinearity) collapses a stack of neurons to a single linear model; sigmoid σ maps to (0,1) for binary output; softmax generalizes sigmoid to multiclass, outputting a probability distribution over K classes; ReLU(z) = max(0, z) is the default hidden-layer activation — cheap, non-saturating for positive inputs, and gradient-friendly; tanh maps to (−1, 1), useful in RNNs. The perceptron is the historical ancestor — a single neuron with a hard threshold (output 1 if w·x + b > 0, else 0) — and the perceptron convergence theorem guarantees learning only for linearly separable data. Stacking hidden layers with nonlinearities breaks that ceiling.",
              "Backpropagation is the algorithm that trains deep networks, and the chain rule is its engine. The forward pass computes activations layer by layer: a⁽¹⁾ = f(W⁽¹⁾x + b⁽¹⁾), a⁽²⁾ = f(W⁽²⁾a⁽¹⁾ + b⁽²⁾), …, a⁽ᴸ⁾ = output. The loss L(a⁽ᴸ⁾, y) measures the gap between prediction and truth (cross-entropy for classification, MSE for regression). Backpropagation computes ∂L/∂W⁽ˡ⁾ for every layer l by the chain rule: the gradient at layer l is the gradient at layer l+1 multiplied by the local derivative of the activation — error signals flow backward from output to input. Gradient descent updates each weight W⁽ˡ⁾ ← W⁽ˡ⁾ − η · ∂L/∂W⁽ˡ⁾ with learning rate η; modern optimizers (Adam, RMSProp) adapt η per parameter for faster convergence. Mini-batch stochastic gradient descent trades exact gradients for cheap, noisy ones that generalize better.",
              "Neural networks trade opacity and data hunger for universal approximation. Strengths: universal approximator — any continuous decision boundary can be learned with enough neurons and data; representation learning — hidden layers discover their own features, no hand-engineering; state-of-the-art on perception tasks (vision, speech, raw text); naturally multiclass via softmax; transfer learning — pre-trained backbones adapt to new tasks with little data. Weaknesses: enormous data and compute requirements; black-box opacity — hard to interpret or audit; many hyperparameters (architecture, learning rate, regularization, batch size, epochs) needing tuning; overfitting on small data even with regularization (dropout, weight decay, early stopping, data augmentation). For tabular business data, gradient boosting and random forests (Unit IV) usually win on speed, interpretability, and accuracy.",
            ],
            keyTerms: [
              { term: "Neuron", definition: "A weighted sum of inputs plus a bias, passed through a nonlinear activation: a = f(w·x + b)." },
              { term: "Activation function", definition: "The nonlinearity (ReLU, sigmoid, tanh, softmax) that lets a network learn non-linear boundaries." },
              { term: "Backpropagation", definition: "The chain-rule algorithm that propagates output error backward to compute gradients on every weight." },
              { term: "Universal approximation", definition: "A network with enough hidden neurons can approximate any continuous function." },
              { term: "ReLU", definition: "Rectified Linear Unit, max(0, z); the default hidden-layer activation — cheap, non-saturating." },
            ],
            bullets: [
              "Neuron: a = f(w.x + b) — weighted sum passed through a nonlinearity.",
              "ReLU(z) = max(0, z) is the default hidden activation; softmax at multiclass output.",
              "Without nonlinear activations, any stack of layers collapses to one linear model.",
              "Universal approximation: enough hidden neurons approximate any continuous boundary.",
              "Backpropagation: forward pass, loss, chain rule backward, gradient step on every weight.",
              "W <- W - eta * dL/dW; Adam/RMSProp adapt the learning rate per parameter.",
              "Mini-batch SGD trades exact gradients for cheap noisy ones that generalize well.",
              "Data- and compute-hungry; opaque; overfits small tabular data.",
            ],
            diagram: {
              kind: "layers",
              title: "A multilayer perceptron",
              caption: "Signals flow downward through learned weights; errors flow back up for training.",
              layers: [
                { label: "Output layer", note: "softmax over K classes; sigmoid for binary" },
                { label: "Hidden layer 2", note: "a = ReLU(W.a + b) — high-level combinations" },
                { label: "Hidden layer 1", note: "a = ReLU(W.x + b) — low-level features" },
                { label: "Input layer", note: "raw feature vector x" },
              ],
            },
            callout: {
              type: "exam",
              title: "Backprop in one breath",
              body: "Write the forward pass a(l) = f(W(l)a(l-1) + b(l)), state the loss, then say: the chain rule propagates the output error backward, each layer's gradient is the next layer's gradient times the local activation derivative, and gradient descent nudges every weight. Add ReLU as the default activation and the answer is complete.",
            },
            codeExample: {
              language: "python",
              caption: "mlp.py — a neural classifier in sklearn",
              code: `from sklearn.neural_network import MLPClassifier
from sklearn.preprocessing import StandardScaler

scaler = StandardScaler().fit(X_train)
Xtr, Xte = scaler.transform(X_train), scaler.transform(X_test)

net = MLPClassifier(hidden_layer_sizes=(64, 32), activation="relu",
                    max_iter=300, random_state=42).fit(Xtr, y_train)
print(net.score(Xte, y_test))          # accuracy on unseen data`,
            },
            examQuestions: [
              {
                q: "Explain the architecture of a multilayer neural network, the role of activation functions, and the backpropagation training algorithm.",
                marks: 7,
                outline: [
                  "Layers of neurons: a = f(w.x + b) with f a nonlinearity",
                  "ReLU hidden default; sigmoid binary output; softmax multiclass output",
                  "No nonlinearity collapses the stack to a single linear model",
                  "Universal approximation: enough hidden units fit any continuous boundary",
                  "Forward pass computes activations layer by layer",
                  "Backprop: chain rule propagates dL/dW backward through the layers",
                  "Gradient descent W <- W - eta*dL/dW; mini-batches; Adam-style adaptive rates",
                ],
              },
              {
                q: "Why does a network with no nonlinear activations collapse to a linear model?",
                marks: 3,
                outline: [
                  "Composing linear functions yields another linear function",
                  "W2(W1x) = (W2W1)x — any depth equals one weight matrix",
                  "Nonlinear activations are what buy universal approximation",
                ],
              },
              {
                q: "What is the perceptron and its key limitation?",
                marks: 2,
                outline: [
                  "A single neuron with a hard threshold: output 1 if w.x + b > 0",
                  "Converges only for linearly separable data — it can only draw straight lines",
                ],
              },
            ],
          },
          {
            number: "3.5",
            title: "K-Nearest Neighbors (K-NN)",
            body: [
              "K-NN is the purest instance-based learner: it stores the entire training set and, for a new point, finds its K nearest neighbours by distance (Euclidean after scaling, or Manhattan/cosine), then votes — majority class for classification, average for regression. There is no training phase at all ('lazy learning'), only a fast index for neighbour lookups. Its whole behaviour hides in one dial: small K follows the data closely, carving flexible islands — low bias, high variance, noisy on outliers; large K smooths toward the global majority — high bias, low variance; K = 1 memorizes noise, K = n predicts the most common class everywhere. K is chosen by cross-validation, usually odd to avoid ties, with √n as a folk starting point. K-NN's costs are its storage (the dataset is the model), slow queries in high dimensions (the curse that Unit V attacks), and total dependence on scaling.",
              "The K dial controls the bias-variance tradeoff for K-NN, and the tradeoff is direct. With K = 1, every training point is its own prototype — the boundary is a Voronoi diagram, infinitely flexible, zero training error, maximum variance (one noisy point carves a private island). With K = n, the prediction is always the global majority class — zero flexibility, maximum bias, no information from the features. The sweet spot is somewhere in between: small enough to capture local structure, large enough to smooth out noise. The √n rule of thumb is a starting point; cross-validation on a held-out set chooses the optimal K. Always pick K odd for binary classification to avoid ties.",
              "A worked K=3 example makes the algorithm visible. Training set: {(1, A), (2, A), (5, B), (6, B), (7, B)}, all 1-D. Query point: x = 3. Distances: |3−1|=2 (A), |3−2|=1 (A), |3−5|=2 (B), |3−6|=3 (B), |3−7|=4 (B). The 3 nearest are points 2 (A, dist 1), 1 (A, dist 2), 5 (B, dist 2). Vote: A=2, B=1 → predicted class A. If K=5, all points vote: A=2, B=3 → predicted class B. Smaller K respects the local majority (A is closer overall); larger K respects the global majority (B has more points overall). The choice of K changes the prediction — exactly the dial's effect.",
              "K-NN's strengths and weaknesses define its niche. Strengths: no training phase — instant to 'deploy'; simple and intuitive; naturally multiclass; flexible boundaries (small K); the dataset is the model, so adding new data updates it instantly. Weaknesses: slow inference — every query scans the whole training set (a KD-tree or ball-tree index helps in low dimensions, but the curse of dimensionality defeats it); huge storage — the entire dataset must be in memory; total dependence on scaling — unscaled features make distance meaningless (section 1.10); high-dimensional failure — in high d, all distances concentrate, and the nearest neighbour is barely nearer than the farthest (the curse of Unit V). The right use case is small- to medium-sized, low-dimensional, well-scaled tabular data where training cost should be zero and inference latency is acceptable.",
            ],
            keyTerms: [
              { term: "K-NN", definition: "K-Nearest Neighbours; instance-based learner that votes among the K nearest stored points." },
              { term: "Lazy learning", definition: "No training phase — the dataset is stored as-is and queried at inference time." },
              { term: "K (number of neighbours)", definition: "The dial trading bias against variance; small=flexible, large=smooth." },
              { term: "Distance metric", definition: "Euclidean (default), Manhattan, or cosine — must be on scaled features." },
              { term: "Curse of dimensionality", definition: "In high d, distances concentrate and K-NN fails — the motivation for Unit V." },
            ],
            callout: {
              type: "warning",
              title: "Always scale before K-NN",
              body: "K-NN is pure distance. An unscaled feature with range 0–100000 dominates every distance and makes every other feature invisible. Apply StandardScaler (fitted on train only) before fitting KNeighborsClassifier — every time.",
            },
            bullets: [
              "K-NN stores the training set and votes among the K nearest neighbours of a query.",
              "No training phase — lazy learning; the dataset is the model.",
              "Worked example: points {1:A, 2:A, 5:B, 6:B, 7:B}, query 3, K = 3 -> vote A (2 vs 1).",
              "K = 1: Voronoi boundary, zero bias, maximum variance; K = n: global majority, maximum bias.",
              "Choose K by cross-validation; odd K avoids ties; sqrt(n) is a folk starting point.",
              "Scale features first — distance is meaningless on raw units.",
              "Slow inference (full scan), heavy storage, breaks in high dimensions.",
            ],
            diagram: {
              kind: "flow",
              title: "One K-NN prediction",
              caption: "Five steps from query to vote — none of them is training.",
              steps: [
                { label: "Choose K", note: "odd; tuned by cross-validation" },
                { label: "Scale features", note: "distance is meaningless unscaled" },
                { label: "Compute distances", note: "query vs every stored point" },
                { label: "Take the K nearest" },
                { label: "Vote", note: "majority class / mean for regression" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "knn.py — choosing K by cross-validation",
              code: `from sklearn.neighbors import KNeighborsClassifier
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import make_pipeline
from sklearn.model_selection import cross_val_score

for k in [1, 3, 5, 9]:
    knn = make_pipeline(StandardScaler(),
                        KNeighborsClassifier(n_neighbors=k))
    score = cross_val_score(knn, X, y, cv=5).mean()
    print(k, round(score, 3))       # pick the K with the best CV accuracy`,
            },
            examQuestions: [
              {
                q: "Explain the K-NN algorithm with a worked example (K = 3 on 1-D points). Discuss the effect of K on the bias-variance tradeoff and the algorithm's strengths and weaknesses.",
                marks: 7,
                outline: [
                  "Instance-based lazy learner: store examples, vote among K nearest",
                  "Worked trace: {1:A, 2:A, 5:B, 6:B, 7:B}, query 3; distances 2,1,2,3,4",
                  "K = 3 neighbours are 2(A), 1(A), 5(B) -> vote A",
                  "K = 5 votes all points -> B; the dial changed the prediction",
                  "Small K: flexible, low bias, high variance; large K: smooth, high bias",
                  "Strengths: zero training, naturally multiclass, flexible boundaries",
                  "Weaknesses: slow inference, full storage, scaling dependence, curse of dimensionality",
                ],
              },
              {
                q: "Why is K-NN called a lazy learner?",
                marks: 3,
                outline: [
                  "There is no training phase — no parameters are fitted",
                  "All computation is deferred to prediction time",
                  "Contrast with eager learners that build a compact model (logistic regression)",
                ],
              },
              {
                q: "Why is K usually chosen odd for binary classification?",
                marks: 2,
                outline: [
                  "An even K can produce a tied vote",
                  "Odd K guarantees a strict majority",
                ],
              },
            ],
          },
          {
            number: "3.6",
            title: "Support Vector Machine (SVM)",
            body: [
              "An SVM draws the decision boundary with maximum margin: among all hyperplanes separating the two classes, it picks the one whose distance to the nearest points of either class — the support vectors — is largest. A wide margin is the best insurance against overfitting. When data is not linearly separable, the soft margin (parameter C) allows a few points inside the street — small C = wide street, more tolerance; large C = narrow street, fewer violations. When no straight line works at all, the kernel trick maps the data into a higher-dimensional space where a linear separator exists, without ever computing the coordinates: the polynomial kernel K(x, z) = (x·z + 1)ᵈ and the RBF (Gaussian) kernel K(x, z) = e⁻ᵞ‖x−z‖² compute inner products in that space directly. SVMs are strong on medium-sized, high-dimensional data; they scale poorly to millions of samples and demand the normalization of Unit I.",
              "The maximum-margin intuition is the geometric core. Among all hyperplanes w·x + b = 0 that correctly separate the two classes, the SVM picks the one whose 'street' (the slab between the parallel boundary lines w·x + b = ±1) is widest — that width is 2/‖w‖, so maximizing the margin is equivalent to minimizing ‖w‖ subject to y_i(w·x_i + b) ≥ 1 for every training point. The points that satisfy y_i(w·x_i + b) = 1 — the ones the street's curbs touch — are the support vectors; they alone define the boundary, and removing any non-support vector leaves the SVM unchanged. This is the source of SVM's sparsity and memory efficiency: only the support vectors need to be stored, not the whole training set.",
              "Soft margin and the kernel trick extend SVM to real data. Real data is rarely perfectly separable, so the soft-margin formulation adds slack variables ξ_i ≥ 0 allowing each point to violate the margin, and minimizes (1/2)‖w‖² + C Σ ξ_i. The hyperparameter C controls the trade-off: large C penalizes violations heavily (narrow street, fewer violations, risk of overfitting); small C tolerates violations (wide street, more violations, more robust to noise). For non-linearly separable data, the kernel trick replaces every inner product x·z in the algorithm with a kernel function K(x, z) that computes the inner product in a higher-dimensional feature space without ever forming the coordinates: the polynomial kernel K(x, z) = (x·z + 1)ᵈ adds interaction features; the RBF (Gaussian) kernel K(x, z) = e⁻ᵞ‖x−z‖² lifts to an infinite-dimensional space where local similarity dominates. Cross-validation chooses the kernel and its hyperparameters (γ for RBF, d for polynomial, C for the margin).",
              "SVM's strengths and weaknesses define its niche. Strengths: maximum-margin boundary gives strong generalization on small high-dimensional data; the kernel trick handles non-linear boundaries without explicit feature engineering; only support vectors are stored, so inference is efficient; convex optimization guarantees a global optimum. Weaknesses: scales poorly beyond ~100,000 training samples (the kernel matrix is O(n²) in memory and the dual QP is O(n³) in time); many hyperparameters to tune (C, kernel, γ, degree); opaque predictions — no calibrated probabilities without Platt scaling; binary by default, with one-vs-one or one-vs-rest extensions for multiclass. The right use case is medium-sized, high-dimensional data with a clear margin — text classification with TF-IDF, bioinformatics with thousands of gene features, or any small-n high-p problem.",
            ],
            keyTerms: [
              { term: "Margin", definition: "The width of the 'street' between the SVM's separating hyperplane and the nearest points of either class." },
              { term: "Support vectors", definition: "The training points the margin's curbs touch — they alone define the boundary; removing others changes nothing." },
              { term: "Soft margin (C)", definition: "Hyperparameter allowing margin violations; large C = narrow street, small C = wide street." },
              { term: "Kernel trick", definition: "Computing inner products in a high-dimensional feature space via a kernel function, without forming the coordinates." },
              { term: "RBF kernel", definition: "K(x,z) = e⁻ᵞ‖x−z‖²; Gaussian kernel lifting to infinite dimensions, the default for non-linear SVM." },
            ],
            diagram: {
              kind: "compare",
              title: "The SVM idea",
              caption: "The best boundary is the one with the widest street — support vectors are the points the street's curbs touch.",
              left: {
                heading: "Small margin",
                items: ["boundary close to points", "one noisy point bends it", "thin street — fragile to new data"],
              },
              right: {
                heading: "Maximum margin (SVM)",
                items: ["widest street between classes", "only support vectors matter", "removing non-support vectors changes nothing"],
              },
            },
            bullets: [
              "SVM picks the separating hyperplane with maximum margin — width 2/||w||.",
              "Support vectors: the points the margin's curbs touch; they alone define the boundary.",
              "Soft margin: minimize (1/2)||w||^2 + C*sum(xi_i); C tunes tolerance for violations.",
              "Large C: narrow street, fewer violations, overfit risk; small C: wide, robust.",
              "Kernel trick: replace x.z with K(x, z) — implicit high-dimensional inner products.",
              "Polynomial kernel (x.z + 1)^d; RBF kernel exp(-gamma*||x-z||^2).",
              "Strengths: strong on small high-d data; convex training; sparse solution.",
              "Weaknesses: O(n^2)-O(n^3) scaling, hyperparameter tuning, uncalibrated scores.",
            ],
            callout: {
              type: "tip",
              title: "Tuning C and gamma together",
              body: "For the RBF kernel, C and gamma must be tuned jointly by grid search with cross-validation: gamma sets how far one point's influence reaches, C sets how strictly violations are punished. High C + high gamma overfits to islands around individual points; low + low underfits to one smooth blob.",
            },
            codeExample: {
              language: "python",
              caption: "svm.py — three kernels, one loop",
              code: `from sklearn.svm import SVC
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import make_pipeline

configs = [("linear", {}), ("poly", {"degree": 3}), ("rbf", {"gamma": 0.1})]
for kernel, kw in configs:
    svm = make_pipeline(StandardScaler(),
                        SVC(kernel=kernel, C=1.0, **kw))
    svm.fit(X_train, y_train)
    print(kernel, round(svm.score(X_test, y_test), 3))`,
            },
            examQuestions: [
              {
                q: "Explain the SVM: maximum margin, support vectors, the soft-margin formulation with parameter C, and the kernel trick with polynomial and RBF kernels.",
                marks: 7,
                outline: [
                  "Among all separating hyperplanes, pick the one with widest street",
                  "Margin width = 2/||w||; maximize margin = minimize ||w||",
                  "Constraint y_i(w.x_i + b) >= 1; points with equality are support vectors",
                  "Removing non-support vectors changes nothing — sparse solution",
                  "Soft margin: minimize (1/2)||w||^2 + C*sum(xi_i); slack allows violations",
                  "Kernel trick: K(x,z) = (x.z + 1)^d or exp(-gamma*||x-z||^2) — implicit feature spaces",
                  "Strengths/weaknesses: great on small high-d data; poor scaling, opaque scores",
                ],
              },
              {
                q: "Why does a wider margin generalize better?",
                marks: 3,
                outline: [
                  "A wide street keeps the boundary far from either class's points",
                  "Small data perturbations cannot flip the decision of points near the boundary",
                  "Maximum margin = the most conservative separator consistent with the data",
                ],
              },
              {
                q: "Which training points define the SVM decision boundary?",
                marks: 2,
                outline: [
                  "The support vectors only",
                  "They satisfy y_i(w.x_i + b) = 1; deleting others leaves the boundary unchanged",
                ],
              },
            ],
          },
          {
            number: "3.7",
            title: "Naive Bayes",
            body: [
              "Naive Bayes is a probabilistic classifier built directly on Bayes' theorem: P(y | x) ∝ P(y) Π P(xⱼ | y). The 'naive' assumption is conditional independence of features given the class — each feature contributes its evidence separately — which is usually false in reality and yet works startlingly well, especially on text. Training is just counting: class priors from label frequencies, likelihoods from per-feature frequency tables. The three standard variants match three kinds of features. Gaussian NB for continuous features, modelling each P(xⱼ | y) as a normal distribution. Multinomial NB for counts — word frequencies in documents — the classic spam filter. Bernoulli NB for binary presence/absence features. Strengths: extremely fast, tiny memory, works with small training data, naturally multiclass, outputs probabilities. Weaknesses: the independence assumption skews probability estimates, and unseen feature values need Laplace smoothing (add-one).",
              "Bayes' theorem is the engine and earns a worked trace. For a feature vector x = (x₁, …, x_p) and class y, Bayes' theorem gives P(y | x) = P(y) · P(x | y) / P(x). The denominator P(x) is the same for all classes, so we compare P(y) · P(x | y) across classes and pick the argmax. The 'naive' assumption factorizes P(x | y) = Π_j P(x_j | y) — each feature contributes its likelihood independently. For a spam filter with features 'free' and 'money': if P(spam) = 0.4, P(free | spam) = 0.3, P(money | spam) = 0.2, P(free | not spam) = 0.01, P(money | not spam) = 0.005, then for an email containing both words: P(spam | x) ∝ 0.4·0.3·0.2 = 0.024; P(not spam | x) ∝ 0.6·0.01·0.005 = 0.00003. The email is spam (0.024 ≫ 0.00003). The naive factorization is the only reason this is computable — for a vocabulary of 10,000 words, full joint P(x | y) would need 2^10000 entries; the naive factorization needs 10,000.",
              "The three variants match three feature types, and choosing the right one is the only modelling decision. Gaussian NB fits each P(xⱼ | y) as a normal distribution N(μ_yj, σ²_yj) estimated from the mean and variance of feature j among class-y training points — used for continuous tabular features. Multinomial NB models each P(xⱼ | y) as θ_yj, the fraction of all word-count tokens in class-y documents that are word j — used for text classification with TF or TF-IDF counts (the classic spam filter and topic classifier). Bernoulli NB models each P(xⱼ | y) as a Bernoulli p_yj — the probability that word j appears at least once in a class-y document — used for short text with binary presence features. All three use Laplace (add-one) smoothing for unseen feature values: P̂(xⱼ | y) = (count_yj + α) / (count_y + α·p), with α = 1 the default, preventing zero-probability estimates that would zero out the whole product.",
              "Naive Bayes's strengths and weaknesses define its niche. Strengths: training is a single pass of counting (O(n·p)); prediction is a single pass of multiplication (O(K·p)); tiny memory — only the prior, likelihood tables, and smoothing parameter; works with very small training data (the smoothing prevents zero estimates); naturally multiclass (just compute K posteriors); outputs calibrated-ish probabilities; the baseline for every text classification task. Weaknesses: the independence assumption is usually wrong (words in a sentence are correlated) and skews probability estimates (the argmax class is usually right, the probability is overconfident); cannot learn feature interactions (a single feature's effect is independent of all others); linear decision boundary (under the naive assumption). The right use case is text classification, spam filtering, sentiment analysis, and any small-data baseline — Multinomial NB is the standard first try for document classification.",
            ],
            keyTerms: [
              { term: "Bayes' theorem", definition: "P(y | x) = P(y)·P(x | y) / P(x); the engine of Naive Bayes." },
              { term: "Conditional independence", definition: "The 'naive' assumption that features are independent given the class, allowing factorization of P(x | y)." },
              { term: "Gaussian NB", definition: "Variant for continuous features; models P(xⱼ | y) as a Gaussian." },
              { term: "Multinomial NB", definition: "Variant for count/frequency features (word counts); the classic text and spam classifier." },
              { term: "Laplace smoothing", definition: "Add-α to all counts to prevent zero-probability estimates for unseen feature values." },
            ],
            table: {
              caption: "The three Naive Bayes variants.",
              headers: ["Variant", "Feature type", "Likelihood model", "Typical use"],
              rows: [
                ["Gaussian NB", "continuous", "N(μ_y, σ²_y)", "tabular data, sensor readings"],
                ["Multinomial NB", "counts / frequencies", "θ_y per feature", "spam filter, topic classification"],
                ["Bernoulli NB", "binary presence", "Bernoulli(p_y)", "short text, yes/no features"],
              ],
            },
            bullets: [
              "Bayes' theorem: P(y | x) = P(y) * P(x | y) / P(x); drop the shared denominator.",
              "Naive factorization: P(x | y) = product_j P(x_j | y) — independence given the class.",
              "Spam trace: 0.4*0.3*0.2 = 0.024 vs 0.6*0.01*0.005 = 0.00003 -> spam.",
              "Vocabulary of 10000 words: naive needs 10000 parameters, full joint needs 2^10000.",
              "Gaussian NB: continuous features; Multinomial NB: counts; Bernoulli NB: presence/absence.",
              "Laplace smoothing: (count + alpha)/(total + alpha*p) stops zero probabilities.",
              "Training is one pass of counting; prediction one pass of multiplying.",
              "Probabilities are overconfident, but the argmax class is usually right.",
            ],
            diagram: {
              kind: "fork",
              title: "Which Naive Bayes variant?",
              caption: "The only modelling decision is matching the likelihood to the feature type.",
              start: "What kind of features do you have?",
              branches: [
                { label: "Continuous measurements", outcome: "Gaussian NB — fit N(mu_y, sigma^2_y) per feature", good: true },
                { label: "Word counts / frequencies", outcome: "Multinomial NB — the classic spam and topic classifier", good: true },
                { label: "Binary presence/absence", outcome: "Bernoulli NB — short text, yes/no features", good: true },
              ],
            },
            callout: {
              type: "exam",
              title: "Why 'naive' does not kill it",
              body: "The independence assumption is almost always false, yet the classifier wins because classification needs only the argmax to be right, not the probability. Add: counting training, tiny memory, small-data robustness, and Laplace smoothing — that is the full strengths-and-weaknesses answer.",
            },
            codeExample: {
              language: "python",
              caption: "spam.py — Multinomial NB on four documents",
              code: `from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.pipeline import make_pipeline

docs = ["free money now", "cheap pills online",
        "meeting at noon", "project report attached"]
labels = [1, 1, 0, 0]                # 1 = spam, 0 = not spam

model = make_pipeline(CountVectorizer(), MultinomialNB())
model.fit(docs, labels)
print(model.predict(["money free report"]))   # evidence per word, multiplied`,
            },
            examQuestions: [
              {
                q: "Derive the Naive Bayes classifier from Bayes' theorem. Work through the spam example with 'free' and 'money' likelihoods, and explain Laplace smoothing.",
                marks: 7,
                outline: [
                  "P(y | x) proportional to P(y) * product_j P(x_j | y); pick the argmax class",
                  "Naive assumption: features independent given the class",
                  "Spam trace: P(spam|x) = 0.4*0.3*0.2 = 0.024 vs P(not|x) = 0.6*0.01*0.005 = 0.00003",
                  "Email classified spam; factorization is what makes it computable",
                  "Full joint for 10000-word vocabulary needs 2^10000 entries; naive needs 10000",
                  "Laplace smoothing: (count_yj + alpha)/(count_y + alpha*p) avoids zero likelihoods",
                  "Variants: Gaussian (continuous), Multinomial (counts), Bernoulli (binary presence)",
                ],
              },
              {
                q: "Why is the independence assumption called naive, and why does NB still work well?",
                marks: 3,
                outline: [
                  "Real features are correlated (words co-occur), so the assumption is false",
                  "Classification needs the right argmax, not accurate probabilities",
                  "Counting training is fast, tiny-memory, and robust on small data",
                ],
              },
              {
                q: "What problem does Laplace smoothing fix?",
                marks: 2,
                outline: [
                  "An unseen word would get probability 0 and zero out the whole product",
                  "Add-one (add-alpha) counts keep every likelihood strictly positive",
                ],
              },
            ],
          },
          {
            number: "3.8",
            title: "Performance measures",
            body: [
              "Every classifier's raw material of judgement is the confusion matrix: a square table of predicted versus actual classes. For binary problems its four cells are TP (positive, predicted positive), FP (negative, wrongly predicted positive), FN (positive, wrongly predicted negative) and TN (negative, correctly predicted negative). Every metric is a different ratio of those four numbers.",
              "Accuracy = (TP + TN)/(TP + TN + FP + FN): the fraction of all predictions that were right. It is the first number everyone wants and the first number that lies: at a 99% negative base rate, a classifier that never predicts positive scores 99% accuracy while catching zero cases of the disease. Precision = TP/(TP + FP): 'of everything I flagged, how much was really positive?' — the metric of spam folders. Recall (sensitivity, TPR) = TP/(TP + FN): 'of everything really positive, how much did I catch?' — the metric of cancer screens and fraud detection. The two trade off along the model's threshold; the Precision-Recall curve draws that tradeoff. F1 score = 2PR/(P + R) is the harmonic mean — punishing imbalance, the right single number when you must have one. Support is the count of true instances of each class in the evaluation set.",
              "A worked numerical example makes every metric tangible. Suppose a cancer screen on 1000 patients yields TP = 80, FP = 120, FN = 20, TN = 780 (so 100 actual positives and 900 actual negatives). Accuracy = (80 + 780) / 1000 = 0.86 — looks great, but 86% is barely above the 90% negative base rate, so a 'predict negative always' baseline would score 90%. Precision = 80 / (80 + 120) = 0.40 — of the 200 flagged, only 40% really have cancer (a lot of false alarms, costly in biopsy and anxiety). Recall = 80 / (80 + 20) = 0.80 — of the 100 actual cases, 80% were caught (20 missed, dangerous). F1 = 2·0.40·0.80 / (0.40 + 0.80) = 0.53 — the harmonic mean punishes the precision-recall imbalance, the right single number. The pattern: high accuracy hides a poor F1 because the classes are imbalanced.",
              "The metric-matching discipline closes the section. Spam filtering favours precision — losing a real email to the spam folder is expensive, so we tolerate some spam in the inbox (low recall) to keep precision high. Cancer screening favours recall — missing a case is fatal, so we tolerate false alarms (low precision) to keep recall high. Balanced, similar-cost classes (digit recognition) use accuracy. Imbalanced problems or one-number-needed reporting use F1 — and glance at support to know which classes the numbers actually rest on. The Precision-Recall curve plots the trade-off across all thresholds; the area under it (AUC-PR) is the model's overall quality on imbalanced data. The ROC curve plots TPR vs FPR; AUC-ROC is the quality on balanced data. Match the metric to the cost of errors, draw the 2×2 first, and the exam answer writes itself.",
            ],
            keyTerms: [
              { term: "Confusion matrix", definition: "The 2×2 (or K×K) table of predicted vs actual classes; the source of every metric." },
              { term: "Accuracy", definition: "(TP+TN)/all; right for balanced classes, lies under imbalance." },
              { term: "Precision", definition: "TP/(TP+FP); 'of everything I flagged, how much was really positive?'" },
              { term: "Recall (sensitivity, TPR)", definition: "TP/(TP+FN); 'of everything really positive, how much did I catch?'" },
              { term: "F1 score", definition: "2PR/(P+R); harmonic mean of precision and recall — the right single number for imbalanced problems." },
            ],
            diagram: {
              kind: "matrix",
              title: "The confusion matrix",
              caption: "One table, four cells, every classification metric in this book.",
              axes: { x: "Predicted →", y: "Actual ↓" },
              quadrants: [
                { label: "TP — hit", note: "actually positive, predicted positive" },
                { label: "FN — miss (Type II)", note: "actually positive, predicted negative" },
                { label: "FP — false alarm (Type I)", note: "actually negative, predicted positive" },
                { label: "TN — correct reject", note: "actually negative, predicted negative" },
              ],
            },
            table: {
              caption: "Metric · formula · question · punished by.",
              headers: ["Metric", "Formula", "Answers the question", "Punished by"],
              rows: [
                ["Accuracy", "(TP+TN)/all", "how often is it right overall?", "class imbalance"],
                ["Precision", "TP/(TP+FP)", "are the alarms real?", "false positives"],
                ["Recall", "TP/(TP+FN)", "how many cases were caught?", "false negatives"],
                ["F1", "2PR/(P+R)", "balanced single number", "imbalance between P and R"],
                ["Support", "count per class", "how big was each class?", "— (it is a count)"],
              ],
            },
            callout: {
              type: "exam",
              title: "Choosing the metric",
              body: "Match the metric to the cost of errors. Spam filtering: precision (losing real mail is expensive). Cancer screening: recall (missing a case is fatal). Balanced, similar-cost classes: accuracy. One number for an imbalanced problem: F1 — and glance at support to know which classes the numbers actually rest on.",
            },
            codeExample: {
              language: "python",
              caption: "report.py — the measurement kit",
              code: `from sklearn.metrics import (confusion_matrix, accuracy_score,
                                   classification_report)

y_pred = clf.predict(X_test)
print(confusion_matrix(y_test, y_pred))     # the four cells
print(accuracy_score(y_test, y_pred))       # (TP+TN)/all
print(classification_report(y_test, y_pred))
#               precision  recall  f1-score  support
# 0                 0.95     0.98     0.96      980
# 1                 0.92     0.85     0.88      120`,
            },
            bullets: [
              "Confusion matrix cells: TP, FP, FN, TN — every metric is a ratio of these four.",
              "Accuracy = (TP+TN)/all; lies under class imbalance (99% negative base rate).",
              "Precision = TP/(TP+FP): of everything flagged, how much was really positive.",
              "Recall = TP/(TP+FN): of everything really positive, how much was caught.",
              "F1 = 2PR/(P+R): harmonic mean, punishes imbalance between P and R.",
              "Support: true count per class — tells you what the numbers rest on.",
              "Worked screen: TP=80, FP=120, FN=20, TN=780 -> accuracy 0.86, precision 0.40, recall 0.80, F1 0.53.",
              "Match metric to cost: spam wants precision, cancer screening wants recall.",
            ],
            examQuestions: [
              {
                q: "Define TP, FP, FN and TN, and derive accuracy, precision, recall and F1 from them. For TP = 80, FP = 120, FN = 20, TN = 780, compute all four metrics and interpret them for a cancer screening test.",
                marks: 7,
                outline: [
                  "Cells: TP hit, FP false alarm (Type I), FN miss (Type II), TN correct reject",
                  "Accuracy = (TP+TN)/all = 860/1000 = 0.86",
                  "Precision = TP/(TP+FP) = 80/200 = 0.40 — many false alarms",
                  "Recall = TP/(TP+FN) = 80/100 = 0.80 — 20 cases missed, dangerous",
                  "F1 = 2PR/(P+R) = 2*0.4*0.8/1.2 = 0.53 — imbalance punished",
                  "Interpretation: 90% negative base rate makes 0.86 accuracy nearly useless",
                  "Screening favours recall; spam filtering favours precision; ROC vs PR curves",
                ],
              },
              {
                q: "Why is accuracy misleading under class imbalance?",
                marks: 3,
                outline: [
                  "A 'always negative' classifier scores 99% when 99% of rows are negative",
                  "It catches zero positive cases while looking excellent",
                  "Precision, recall or F1 expose what accuracy hides",
                ],
              },
              {
                q: "Write the formula for the F1 score.",
                marks: 2,
                outline: [
                  "F1 = 2 * P * R / (P + R)",
                  "The harmonic mean of precision and recall",
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
      title: "Ensemble Learning & Random Forest",
      summary:
        "Unit IV combines many weak learners into one strong one: voting and averaging, bagging and pasting, out-of-bag evaluation, random patches, random forests and extra-trees, feature importance, the boosting family from AdaBoost to gradient boosting, and stacked ensembles.",
      chapter: {
        number: "04",
        title: "Wisdom of the Crowd",
        intro:
          "Unit IV covers ensemble intuition, basic techniques, voting classifiers, bagging/pasting, OOB evaluation, random patches and subspaces, random forests and extra-trees, boosting (AdaBoost + gradient boosting), and stacking.",
        inOneBreath:
          "An ensemble is many different-enough models whose errors don't correlate; bagging randomizes rows, forests randomize rows+columns, boosting focuses sequentially on mistakes, stacking learns a combiner; bagging cuts variance, boosting cuts bias.",
        sections: [
          {
            number: "4.1",
            title: "Introduction to ensemble learning",
            body: [
              "An ensemble is a committee of models whose combined verdict outperforms any single member. The mathematical intuition is Condorcet's jury theorem: if each voter is right with probability p > 0.5 and votes independently, a majority is right with a probability that rockets toward 1 as the committee grows. The operative word is independently: identical models make identical mistakes, so the entire unit is a toolkit for manufacturing useful diversity — different training samples (bagging), different feature subsets (random subspaces, forests), different weights on hard examples (boosting), or different model families (voting, stacking). A great ensemble is not many excellent models; it is many different-enough models whose errors do not correlate.",
              "The mathematics of ensemble power is visible in variance reduction. If T independent models each have variance σ², their average has variance σ²/T — averaging T models shrinks variance by a factor of T. This is why bagging deep trees works: each tree has high variance, but averaging many decorrelated trees slashes the variance without raising bias. The catch is the word 'independent' — correlated models (three trees on the same data, same features) average to almost no variance reduction. The whole art of ensemble design is manufacturing decorrelation: bagging via bootstrap samples, random forests via random feature subsets at each split, extra-trees via random thresholds.",
              "Ensembles attack different ends of the bias-variance dial. Bagging and random forests reduce variance — they average many high-variance, low-bias members (deep trees), keeping the low bias and slashing the variance. Boosting reduces bias — it stacks many high-bias, low-variance members (shallow stumps), each one correcting the previous's errors, building a flexible combined model out of weak learners. Stacking combines diverse members with a learned referee, often reducing both. Voting is the simplest form — different model families combined by majority or averaged probability, with diversity coming from algorithmic difference rather than data or feature randomness.",
              "The unit's roadmap follows the diversity toolkit. Section 4.2 covers the three primitives (max voting, averaging, weighted average) that every ensemble combination rule reduces to. Section 4.3 covers voting classifiers — combining different model families by vote. Sections 4.4–4.5 cover bagging and its free OOB evaluation. Section 4.6 covers random patches and subspaces — column-randomization. Section 4.7 covers random forests, extra-trees, and feature importance — the tabular workhorse. Section 4.8 covers boosting (AdaBoost and gradient boosting) — the bias-reduction family. Section 4.9 closes with stacking — the learned combiner. Together these are the toolkit that wins Kaggle and powers industrial tabular ML.",
            ],
            keyTerms: [
              { term: "Ensemble", definition: "A committee of models whose combined prediction outperforms any single member." },
              { term: "Condorcet jury theorem", definition: "If independent voters each have p > 0.5 of being right, majority accuracy rockets toward 1 as the committee grows." },
              { term: "Diversity", definition: "The property that members make different errors; the operative word for ensemble power." },
              { term: "Decorrelation", definition: "Reducing the error correlation between members — the whole art of ensemble design." },
              { term: "Variance reduction", definition: "Averaging T independent models shrinks variance by T — bagging's mathematical basis." },
            ],
            callout: {
              type: "exam",
              title: "Bias-variance role of each ensemble family",
              body: "Bagging reduces variance (averages high-variance deep trees). Boosting reduces bias (stacks high-bias shallow stumps). Stacking reduces both (a learned combiner over diverse members). Voting combines different families. Write the four families and the dial they attack — guaranteed marks.",
            },
            bullets: [
              "An ensemble is a committee whose combined verdict beats any single member.",
              "Condorcet's jury theorem: independent voters with p > 0.5 push majority accuracy toward 1.",
              "Averaging T independent models of variance sigma^2 gives variance sigma^2/T.",
              "Correlated members waste the ensemble — diversity is manufactured, not hoped for.",
              "Diversity sources: bootstrap rows (bagging), random features (forests), reweighting (boosting), different families (voting/stacking).",
              "Bagging and forests cut variance; boosting cuts bias; stacking learns the combiner.",
              "Members should be different-enough, not individually perfect.",
            ],
            diagram: {
              kind: "fork",
              title: "Four ways to build a committee",
              caption: "Each family manufactures diversity differently and attacks a different end of the bias-variance dial.",
              start: "Combine many models",
              branches: [
                { label: "Parallel members on bootstrap rows", outcome: "bagging family — cuts variance", good: true },
                { label: "Sequential members fixing earlier errors", outcome: "boosting family — cuts bias", good: true },
                { label: "Different model families, one vote", outcome: "voting classifier — diversity by algorithm", good: true },
                { label: "Base predictions + learned blender", outcome: "stacking — a referee that learns whom to trust", good: true },
              ],
            },
            examQuestions: [
              {
                q: "What is ensemble learning? Explain the Condorcet jury theorem intuition, why decorrelation is essential, and which end of the bias-variance dial each ensemble family attacks.",
                marks: 7,
                outline: [
                  "Ensemble: many models combined to outperform any single member",
                  "Condorcet: independent voters each right with p > 0.5 -> majority accuracy rockets to 1",
                  "Independence is the operative word — identical models make identical mistakes",
                  "Variance arithmetic: average of T independent sigma^2 models has variance sigma^2/T",
                  "Diversity sources: bootstrap samples, feature subsets, reweighting, model families",
                  "Bagging/forests reduce variance (average deep trees); boosting reduces bias (stack stumps)",
                  "Stacking learns the combination; voting combines different families by vote",
                ],
              },
              {
                q: "Why do three copies of the same tree make a useless ensemble?",
                marks: 3,
                outline: [
                  "Identical training data + identical features + identical algorithm = identical model",
                  "Their errors are perfectly correlated, so the vote equals one tree",
                  "Diversity must be manufactured: different samples, features, or algorithms",
                ],
              },
              {
                q: "Does bagging reduce bias or variance?",
                marks: 2,
                outline: [
                  "Variance — averaging decorrelated high-variance members",
                  "Boosting is the bias-reducing family",
                ],
              },
            ],
          },
          {
            number: "4.2",
            title: "Basic ensemble techniques",
            body: [
              "The three primitives appear in every ensemble. Max voting: each model casts one class vote; the majority wins — for classification, the mode of the predictions. Averaging: for regression, take the mean of the members' numeric predictions — the classic variance-reduction move. Weighted average: same, but each member carries a learned or tuned weight, so stronger models count more: ŷ = Σ wᵢ ŷᵢ with Σ wᵢ = 1. Every fancier method in this unit is one of these three primitives applied over deliberately diversified members.",
              "Max voting is the classification primitive, and it shines when members are diverse algorithms. Each model predicts a hard class label, and the ensemble's prediction is the mode (most frequent class) across the members. For three models predicting {A, A, B}, max voting returns A. The weakness is that hard labels throw away confidence: two members at 0.51 and one at 0.99 are counted as equal voices, even though the 0.99 is far more certain. Max voting is simple, robust, and works without predict_proba, but soft voting (next paragraph's averaging) is usually better when probabilities are available.",
              "Averaging is the regression primitive and the variance-reduction engine. Each model predicts a numeric value, and the ensemble's prediction is the mean across the members. If T independent regressors each have variance σ², the average has variance σ²/T — the mathematical basis for bagging's power. For classification, the same idea applied to predicted probabilities is 'soft voting': average each class's probability across members and pick the argmax. Soft voting dominates max voting because probabilities carry confidence: two members at 0.55 and one at 0.99 average to (0.55 + 0.55 + 0.99) / 3 ≈ 0.70, contributing the third member's high confidence to the final score.",
              "Weighted average is averaging with member-specific weights ŷ = Σ wᵢ ŷᵢ (Σ wᵢ = 1), letting stronger members count more. Weights are typically set by validation performance: fit each member on training, score on validation, normalize the validation scores to weights. Negative-weighting is rare and dangerous (a worse-than-chance member actively hurts). The sklearn VotingClassifier and VotingRegressor support both 'hard' (max voting) and 'soft' (averaging or weighted averaging) combinations. Every fancier method in the rest of the unit reduces to one of these three primitives applied over members diversified by bagging (4.4), feature randomness (4.6–4.7), boosting (4.8), or learned blending (4.9).",
            ],
            keyTerms: [
              { term: "Max voting", definition: "Classification primitive — each member votes a hard class; the majority wins." },
              { term: "Averaging", definition: "Regression primitive — mean of members' numeric predictions; shrinks variance by T." },
              { term: "Soft voting", definition: "Averaging predicted probabilities instead of hard labels — usually better than max voting." },
              { term: "Weighted average", definition: "Mean with member-specific weights wᵢ (Σwᵢ=1); stronger members count more." },
            ],
            table: {
              caption: "The three primitives.",
              headers: ["Technique", "Task", "Combination rule", "Example members"],
              rows: [
                ["Max voting", "classification", "majority class (mode)", "K-NN + tree + NB"],
                ["Averaging", "regression", "mean of predictions", "three regressors"],
                ["Weighted average", "both", "mean with weights wᵢ", "weights by validation score"],
              ],
            },
            bullets: [
              "Max voting: each member casts one class label; the mode wins.",
              "Averaging: mean of members' numeric predictions — variance sigma^2/T for independent members.",
              "Weighted average: y = sum w_i*y_i with sum w_i = 1; weights from validation scores.",
              "Hard labels discard confidence: 0.51 counts the same as 0.99.",
              "Soft voting averages probabilities — usually better when predict_proba exists.",
              "Example: two members at 0.55 and one at 0.99 average to 0.70.",
              "Every fancier ensemble reduces to one of these primitives over diversified members.",
            ],
            diagram: {
              kind: "compare",
              title: "Hard combination vs soft combination",
              caption: "The difference is whether confidence survives the combination.",
              left: {
                heading: "Max voting (hard)",
                items: [
                  "Each member outputs one class label",
                  "Majority label wins",
                  "A 0.51 vote equals a 0.99 vote",
                  "Works without predict_proba",
                ],
              },
              right: {
                heading: "Averaging / weighted (soft)",
                items: [
                  "Average predicted probabilities or values",
                  "Confident members pull the result harder",
                  "Independent members: variance drops by factor T",
                  "Weights set by validation performance",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "The variance line",
              body: "The sentence that earns the theory marks: if T independent models each have variance sigma^2, their average has variance sigma^2/T. Then immediately note the catch — 'independent' — because correlated members keep the rho*sigma^2 term.",
            },
            examQuestions: [
              {
                q: "Explain max voting, averaging and weighted averaging as ensemble combination rules, including the variance-reduction arithmetic of averaging.",
                marks: 7,
                outline: [
                  "Max voting: mode of hard class labels; simple, no probabilities needed",
                  "Weakness: hard labels discard confidence (0.51 counts as 0.99)",
                  "Averaging: mean of predictions; for T independent members variance = sigma^2/T",
                  "Soft voting = averaging class probabilities, argmax after",
                  "Worked numbers: (0.55 + 0.55 + 0.99)/3 = 0.70",
                  "Weighted average y = sum w_i y_i, sum w_i = 1, weights from validation scores",
                  "Negative weights are dangerous; sklearn supports hard and soft voting",
                ],
              },
              {
                q: "Why is soft voting usually better than hard voting?",
                marks: 3,
                outline: [
                  "Probabilities carry confidence information that labels discard",
                  "One confident member can outweigh two uncertain ones",
                  "Cost: all members must support predict_proba",
                ],
              },
              {
                q: "How are the weights of a weighted average chosen?",
                marks: 2,
                outline: [
                  "Score each member on a validation set",
                  "Normalize the scores to weights that sum to 1",
                ],
              },
            ],
          },
          {
            number: "4.3",
            title: "Voting classifiers",
            body: [
              "A voting classifier trains several diverse models on the same data and combines them by vote. Hard voting uses the max-voting primitive: predicted class labels are tallied and the majority wins. Soft voting averages each member's predicted class probabilities and picks the argmax — usually better, because probabilities carry confidence: two members at 0.55 and one at 0.99 are counted at their strength, not as equal voices. The members should be genuinely different algorithms (logistic regression + K-NN + random forest is a classic trio) and all must support predict_proba for soft voting. The ensemble typically beats each member on held-out data — provided their errors disagree often enough; three copies of the same tree vote as one tree.",
              "Hard voting is the simplest combination. Each member outputs a hard class label, and the ensemble returns the mode of those labels. For three classifiers predicting {spam, not spam, spam}, hard voting returns spam. The strength is simplicity and that no probability is needed — K-NN, SVM with hard prediction, and trees all work. The weakness is the loss of confidence information: a member that predicts spam at probability 0.51 contributes the same vote as one at 0.99, even though the second is far more certain. For two-of-three votes, hard voting is robust; for many members, soft voting's confidence-weighting wins.",
              "Soft voting averages the predicted probability distributions and picks the argmax. For three members each outputting a probability vector [P(spam), P(not spam)], soft voting averages element-wise: P_ensemble(spam) = (P₁(spam) + P₂(spam) + P₃(spam)) / 3, and predicts spam if P_ensemble(spam) > 0.5. The strength is confidence-awareness: two members at 0.55 and one at 0.99 average to 0.70, reflecting the third member's strong evidence. The requirement is that all members support predict_proba — SVMs need Platt scaling, and pure hard classifiers cannot join. Weighted soft voting assigns each member a weight wᵢ (Σwᵢ = 1) set by validation accuracy, so stronger members dominate.",
              "The diversity requirement is the whole game. Voting ensembles work only if members make different errors — three logistic regressions on the same features vote as one logistic regression. Diversity comes from algorithmic difference (different inductive biases), from hyperparameter variation (different K in K-NN, different depth in trees), and from training-data variation (different folds or bootstraps — which is bagging, section 4.4). A classic diverse trio is logistic regression (linear), K-NN (instance-based), and random forest (tree ensemble) — three genuinely different decision-boundary shapes whose errors disagree. The ensemble typically beats each member by 1–3 percentage points on held-out accuracy, provided diversity holds; the gain vanishes for correlated members.",
            ],
            keyTerms: [
              { term: "Hard voting", definition: "Each member casts a class vote; the majority wins. Simple, no probabilities needed." },
              { term: "Soft voting", definition: "Averages predicted class probabilities and picks the argmax — confidence-aware, usually better than hard." },
              { term: "predict_proba", definition: "Scikit-learn method returning class probabilities; required for soft voting." },
              { term: "Diversity requirement", definition: "Voting works only if members make different errors; three copies of one model vote as one." },
            ],
            bullets: [
              "A voting classifier trains diverse models and combines them by vote.",
              "Hard voting: tally class labels, majority wins.",
              "Soft voting: average predict_proba per class, argmax wins — usually better.",
              "Classic diverse trio: logistic regression (linear) + K-NN (instance) + forest (trees).",
              "All members must support predict_proba for soft voting (SVM needs Platt scaling).",
              "Diversity requirement: three copies of one model vote as one model.",
              "Typical gain: 1-3 percentage points over the best single member, if errors disagree.",
            ],
            diagram: {
              kind: "flow",
              title: "The voting classifier",
              caption: "One pipeline, two combination modes — the members differ, the vote is the glue.",
              steps: [
                { label: "Train diverse members", note: "logistic + K-NN + random forest" },
                { label: "Hard path", note: "tally class labels; majority wins" },
                { label: "Soft path", note: "average predict_proba per class" },
                { label: "Argmax", note: "final ensemble class" },
              ],
            },
            callout: {
              type: "exam",
              title: "The diversity check",
              body: "The one-line answer to 'when does a voting ensemble help?' is: when members' errors disagree. Pair it with the concrete trio (logistic + K-NN + forest) and the caveat that soft voting needs predict_proba from every member — SVMs must be wrapped with Platt scaling first.",
            },
            codeExample: {
              language: "python",
              caption: "voting.py — a diverse trio",
              code: `from sklearn.linear_model import LogisticRegression
from sklearn.neighbors import KNeighborsClassifier
from sklearn.ensemble import RandomForestClassifier, VotingClassifier

vote = VotingClassifier(estimators=[
    ("lr", LogisticRegression()),
    ("knn", KNeighborsClassifier(n_neighbors=5)),
    ("rf", RandomForestClassifier(n_estimators=200, random_state=42)),
], voting="soft")                    # soft = average probabilities
vote.fit(X_train, y_train)
print(vote.score(X_test, y_test))`,
            },
            examQuestions: [
              {
                q: "Compare hard voting and soft voting with a numerical example. Explain the diversity requirement and how to build a good voting ensemble.",
                marks: 7,
                outline: [
                  "Hard voting: each member one class vote; mode wins; example {spam, not, spam} -> spam",
                  "Soft voting: average P(class) element-wise, argmax after",
                  "Numerical example: (0.55 + 0.55 + 0.99)/3 = 0.70 — confidence preserved",
                  "Soft usually better but needs predict_proba from all members",
                  "Diversity requirement: members must make different errors",
                  "Good trio: logistic (linear), K-NN (instance-based), random forest (trees)",
                  "Typical 1-3 point gain over best member when diversity holds",
                ],
              },
              {
                q: "Give a numerical example where soft voting flips the hard-vote result.",
                marks: 3,
                outline: [
                  "Hard votes A, B, B -> B wins by labels",
                  "But probabilities A: 0.9, B: 0.6, B: 0.55 average to A: 0.9, B: 0.575",
                  "Soft voting returns A — the confident member wins",
                ],
              },
              {
                q: "Which sklearn parameter selects soft voting?",
                marks: 2,
                outline: [
                  "voting='soft' on VotingClassifier",
                  "Default is 'hard' (majority of labels)",
                ],
              },
            ],
          },
          {
            number: "4.4",
            title: "Bagging and pasting",
            body: [
              "Bagging (Bootstrap AGGregatING) diversifies by data: train the same model type on many different bootstrap samples — random samples drawn with replacement from the training set, each the same size as the original — then aggregate by voting or averaging. A bootstrap sample misses about 36.8% of the rows (each row is skipped with probability (1 − 1/n)ⁿ → e⁻¹), so every member sees a different overlapping majority. Pasting is the same idea without replacement: members train on disjoint random subsets. Both attack the variance end of Unit I's dial — the natural cure for the deep decision tree's overfitting — and both train members in parallel (unlike boosting), since no member depends on another.",
              "The bootstrap is the mathematical engine and the 36.8% number earns its explanation. A bootstrap sample of size n is drawn from n training rows with replacement; each row has probability 1/n of being picked on each draw, so the probability of never being picked across n draws is (1 − 1/n)ⁿ → e⁻¹ ≈ 0.368 as n → ∞. So roughly 37% of training rows are out-of-bag for any given member — those rows form a free validation set (section 4.5). The same row can appear multiple times in a bootstrap sample (a row picked twice has weight 2), which is why bagging is sampling with replacement; pasting samples without replacement, so each row appears at most once and the subsets are disjoint.",
              "Bagging's variance-reduction arithmetic is direct. If T trees each have variance σ² and pairwise correlation ρ, the variance of their average is ρσ² + (1−ρ)σ²/T — the first term is the irreducible correlated variance, the second is the diversity-driven shrinkage. Bagging drives the second term to zero as T grows, leaving only ρσ². Random forests (section 4.7) drive down ρ too by randomizing feature subsets at each split, getting variance reduction that bagging alone cannot. This is the mathematical reason random forests beat bagged trees: forests decorrelate as well as diversify.",
              "Bagging versus pasting is a small choice with practical consequences. Bagging (with replacement) generates more diverse samples (some rows duplicated, some omitted) and gives the free OOB evaluation (section 4.5), so it is the default. Pasting (without replacement) generates less diverse samples but trains on truly disjoint subsets, useful when the dataset is so large that each member should see a different chunk in memory. Both train members in parallel, since no member depends on another — unlike boosting's sequential dependence. Both reduce variance without raising bias, so they suit high-variance members (deep trees, high-degree polynomials); on low-variance members (linear regression) they add nothing.",
            ],
            keyTerms: [
              { term: "Bagging", definition: "Bootstrap AGGregatING — train members on bootstrap samples (with replacement), aggregate by vote or average." },
              { term: "Bootstrap sample", definition: "Size-n sample drawn with replacement from n training rows; ~37% of rows are skipped, ~37% appear twice." },
              { term: "Pasting", definition: "Bagging without replacement — members train on disjoint random subsets." },
              { term: "Out-of-bag (OOB)", definition: "The ~37% of rows a bagging member never saw; a free per-member validation set." },
              { term: "Parallel training", definition: "Bagging members are independent, so they train in parallel (unlike boosting's sequential chain)." },
            ],
            diagram: {
              kind: "compare",
              title: "Bagging vs pasting",
              caption: "The only difference is the coin flip of replacement, but bagging's leftovers become a free validation set.",
              left: {
                heading: "Bagging — with replacement",
                items: ["bootstrap 1: rows 3,3,7,1…", "bootstrap 2: rows 2,5,5,9…", "bootstrap 3: rows 8,1,4,4…", "~37% of rows out-of-bag per member"],
              },
              right: {
                heading: "Pasting — without replacement",
                items: ["subset 1: rows 1–4", "subset 2: rows 5–8", "subset 3: rows 9–12", "every row used exactly once"],
              },
            },
            bullets: [
              "Bagging: train members on bootstrap samples (with replacement); aggregate by vote/average.",
              "Bootstrap fact: each row is skipped with probability (1 - 1/n)^n -> e^-1 = 0.368.",
              "So ~37% of rows are out-of-bag for every member — a free validation set.",
              "Pasting: same idea without replacement — disjoint subsets, less diversity.",
              "Variance of the average: rho*sigma^2 + (1-rho)*sigma^2/T; bagging kills the second term.",
              "Members train in parallel (unlike boosting's sequential chain).",
              "Best on high-variance members (deep trees); useless on low-variance linear models.",
            ],
            callout: {
              type: "exam",
              title: "Derive the 36.8%",
              body: "The derivation is two lines and guaranteed marks: a given row survives one draw with probability 1 - 1/n, so it survives all n draws with probability (1 - 1/n)^n, which tends to e^-1 = 0.368. Hence about 63% of rows appear in each bootstrap and 37% are out-of-bag.",
            },
            codeExample: {
              language: "python",
              caption: "bagging.py — bagged trees with OOB",
              code: `from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import BaggingClassifier

bag = BaggingClassifier(
    DecisionTreeClassifier(random_state=42),
    n_estimators=500, max_samples=1.0, bootstrap=True,
    oob_score=True, random_state=42).fit(X_train, y_train)
print(bag.oob_score_)               # free validation estimate
print(bag.score(X_test, y_test))    # usually close to the OOB score`,
            },
            examQuestions: [
              {
                q: "Explain bagging and pasting. Show that a bootstrap sample of size n leaves out about 36.8% of the rows, and explain why bagging reduces variance.",
                marks: 7,
                outline: [
                  "Bagging: bootstrap AGGregatING — members train on with-replacement samples",
                  "Pasting: without replacement — disjoint subsets, less diverse members",
                  "Row skipped across n draws with probability (1 - 1/n)^n -> e^-1 = 0.368",
                  "~37% out-of-bag rows per member; ~63% unique rows in each sample",
                  "Average of T independent members: variance sigma^2/T",
                  "With correlation rho: rho*sigma^2 + (1-rho)*sigma^2/T — bagging removes the second term",
                  "Parallel training; ideal for deep trees; useless for linear models",
                ],
              },
              {
                q: "Why does bagging work best with high-variance members like deep trees?",
                marks: 3,
                outline: [
                  "Averaging only pays off when member variance is large",
                  "Deep trees: high variance, low bias — bagging keeps bias, slashes variance",
                  "On low-variance members (linear regression) bagging adds nothing",
                ],
              },
              {
                q: "What is pasting?",
                marks: 2,
                outline: [
                  "Ensemble training on disjoint random subsets (no replacement)",
                  "Less diverse than bagging; useful when data is too large for memory",
                ],
              },
            ],
          },
          {
            number: "4.5",
            title: "Out-of-bag (OOB) evaluation",
            body: [
              "Bagging's leftovers are a gift. Each member never saw roughly 37% of the training rows during its own training — those rows are out-of-bag for it. To evaluate the whole ensemble without a separate validation set: for every training row x, collect the predictions only of the members for which x was out-of-bag (on average about 37% of them), aggregate those predictions, and compare with the true label. The resulting OOB score is an honest estimate of generalization performance — each row is judged only by models that never trained on it — obtained for free from data already in hand. In scikit-learn it is one flag: BaggingClassifier(oob_score=True), then read oob_score_.",
              "The 37% number is the mathematical basis for OOB evaluation. Each member's bootstrap sample of size n is drawn with replacement from n training rows; a given row's probability of being skipped on any single draw is 1 − 1/n, so its probability of being skipped across all n draws is (1 − 1/n)ⁿ, which tends to e⁻¹ ≈ 0.368 as n grows. So about 37% of training rows are out-of-bag for any given member, and across many members each row is out-of-bag for roughly 37% of them — enough to form a reliable validation prediction for every row, on average. The exact fraction varies per row, but the expectation is 37%, and the variance shrinks as the number of members T grows.",
              "The OOB evaluation procedure mirrors cross-validation in spirit. For each training row x_i, identify the subset of members for which x_i was out-of-bag (call it S_i, on average 0.37·T members). Aggregate the predictions of the members in S_i (majority vote for classification, mean for regression) to produce ŷ_i. Compare ŷ_i with the true y_i across all training rows, and compute the chosen metric (accuracy, F1, MSE). The result is an unbiased estimate of generalization performance — every row is judged only by members that never saw it during training. With T = 100 members, each row has on average 37 out-of-bag judges — a robust ensemble prediction for every training row.",
              "OOB's practical value is huge: it gives a free, unbiased generalization estimate without carving off a validation set, which matters when data is scarce. Compared to k-fold cross-validation, OOB is cheaper (no extra training rounds — the bagging members train once) and unbiased (the out-of-bag rows are genuinely held out from their respective members). The OOB score is typically within 1–2 percentage points of the test-set score on tabular problems. The sklearn pattern is one flag: set oob_score=True on BaggingClassifier or RandomForestClassifier, fit the model, then read .oob_score_ for the estimate and .oob_decision_function_ for per-row OOB predictions. For tabular models where you'd otherwise need a validation set, OOB saves both data and time.",
            ],
            keyTerms: [
              { term: "Out-of-bag (OOB)", definition: "Training rows a bagging member never saw; ~37% per member, a free validation set." },
              { term: "OOB score", definition: "Generalization estimate from aggregating OOB predictions across all training rows." },
              { term: "e⁻¹ ≈ 0.368", definition: "The asymptotic fraction of rows skipped by a size-n bootstrap; the source of the 37% rule." },
              { term: "oob_score=True", definition: "The scikit-learn flag that turns on OOB evaluation in BaggingClassifier / RandomForestClassifier." },
            ],
            bullets: [
              "Each bagging member never saw ~37% of rows — those are its out-of-bag rows.",
              "OOB evaluation: each training row is predicted only by members that held it out.",
              "Aggregate those predictions and compare with the true label — an honest score.",
              "With T = 100 members, each row has on average ~37 out-of-bag judges.",
              "Cheaper than k-fold CV: no extra training rounds; unbiased like a real held-out set.",
              "Typically within 1-2 points of the test-set score on tabular problems.",
              "One flag in sklearn: oob_score=True, then read .oob_score_.",
            ],
            diagram: {
              kind: "flow",
              title: "Out-of-bag evaluation",
              caption: "The rows each member skipped become the free validation set for the ensemble.",
              steps: [
                { label: "Bootstrap sample", note: "~63% unique rows per member" },
                { label: "Train member", note: "only on its own sample" },
                { label: "OOB rows", note: "~37% the member never saw" },
                { label: "Aggregate OOB votes", note: "per training row, over members holding it out" },
                { label: "OOB score", note: "unbiased generalization estimate" },
              ],
            },
            callout: {
              type: "tip",
              title: "Skip the validation split",
              body: "When data is scarce, OOB evaluation saves the ~20% you would otherwise carve off as a validation set. Turn it on for BaggingClassifier or RandomForestClassifier, fit once, and read oob_score_ — the estimate is unbiased because every row is judged only by members that never trained on it.",
            },
            codeExample: {
              language: "python",
              caption: "oob.py — validation without a validation set",
              code: `from sklearn.ensemble import RandomForestClassifier

rf = RandomForestClassifier(n_estimators=400, oob_score=True,
                            random_state=42).fit(X_train, y_train)
print(rf.oob_score_)                    # honest estimate, no val split
print(rf.oob_decision_function_[:2])    # per-row OOB probabilities`,
            },
            examQuestions: [
              {
                q: "Explain out-of-bag evaluation: the 36.8% derivation, the per-row aggregation procedure, and how OOB compares with k-fold cross-validation.",
                marks: 7,
                outline: [
                  "Bootstrap leaves out (1 - 1/n)^n -> e^-1 = 0.368 of rows per member",
                  "For each training row, collect predictions of members for which it was OOB",
                  "Aggregate (majority vote / mean) and compare with the true label",
                  "Unbiased: every row is judged only by models that never saw it",
                  "With T = 100 members, ~37 OOB judges per row on average",
                  "Cheaper than k-fold CV: the members train once, no extra rounds",
                  "sklearn: oob_score=True; read oob_score_ and oob_decision_function_",
                ],
              },
              {
                q: "Why is the OOB score an unbiased estimate of generalization?",
                marks: 3,
                outline: [
                  "Each row's prediction comes only from members that never trained on it",
                  "Those members treat the row exactly as they would unseen data",
                  "Aggregating over all rows reproduces a held-out evaluation",
                ],
              },
              {
                q: "Which sklearn flag enables OOB evaluation?",
                marks: 2,
                outline: [
                  "oob_score=True on BaggingClassifier / RandomForestClassifier",
                  "The estimate is then available as .oob_score_",
                ],
              },
            ],
          },
          {
            number: "4.6",
            title: "Random patches and random subspaces",
            body: [
              "Bagging randomizes rows; random subspaces randomize columns: each member trains on a random subset of the features, forcing diversity when features are many and correlated (high-dimensional data, the exact terrain of Unit V). Combine both randomizations — random rows and random columns per member — and you have random patches. The name is the picture: each model sees a random rectangular patch of the rows × columns data matrix. Feature randomness is what turns bagged trees into a random forest in the next section; the subspaces idea is its purest, smallest form.",
              "Random subspaces attack the curse of dimensionality from the ensemble side. In high-dimensional data, many features are correlated or redundant, so bagged trees on all features tend to split on the same dominant feature at the root — they correlate, and bagging's variance reduction stalls. Random subspaces force each member to train on a different random subset of features (say, √p or log₂ p features), so no two members can split on the same root feature; the trees decorrelate, and averaging decorrelated trees slashes variance beyond what bagging alone achieves. The method shines when p ≫ n (high-dimensional, low-sample problems — bioinformatics, text with thousands of features).",
              "Random patches combine row and column randomization, and the picture is a random rectangle of the data matrix. Each member sees a random sample of rows (a bootstrap, like bagging) and a random subset of features (like subspaces) — a random patch of the rows × columns grid. The two randomizations stack: row randomness generates diverse training samples, feature randomness decorrelates the resulting trees, and the combination gives stronger variance reduction than either alone. In scikit-learn, BaggingClassifier with max_samples < 1.0 and max_features < 1.0 implements random patches directly; setting max_samples=1.0 with bootstrap=False and max_features < 1.0 gives pure random subspaces; max_samples < 1.0 with max_features=1.0 gives pure bagging.",
              "The practical guidance is short. Use pure bagging when features are few and not correlated. Use random subspaces when features are many and correlated (p ≫ n). Use random patches when both rows and features are plentiful but you want maximum decorrelation — the most variance reduction per member. The feature-randomness idea is precisely what turns bagged trees into a random forest (section 4.7), where at every split each tree sees only a random subset of candidate features. Random forests push the subspace idea to the per-split level, getting even more decorrelation than per-tree subspaces.",
            ],
            keyTerms: [
              { term: "Random subspace", definition: "Each member trains on a random subset of features; decorrelates trees when features are correlated." },
              { term: "Random patch", definition: "Random rows AND random features per member — a random rectangle of the data matrix." },
              { term: "max_features", definition: "The scikit-learn hyperparameter controlling feature subsampling per member or per split." },
              { term: "Per-split subspace", definition: "Random forests sample a new feature subset at every split, not once per tree — maximum decorrelation." },
            ],
            callout: {
              type: "tip",
              title: "The default feature budget for forests",
              body: "For classification, each split considers √p random features; for regression, p/3. These defaults come from Breiman's original random forest paper and are the right starting point for almost every tabular problem.",
            },
            bullets: [
              "Random subspaces: every member sees all rows but a random feature subset.",
              "Random patches: random rows AND random columns — a random rectangle of the data matrix.",
              "Feature randomization decorrelates members that would all split on the same root feature.",
              "Shines when features are many and correlated (p >> n: text, bioinformatics).",
              "Per-tree subspaces here; random forests push it to per-split subspaces (4.7).",
              "sklearn: max_features < 1.0 gives subspaces; add max_samples < 1.0 for patches.",
              "Default feature budgets: sqrt(p) for classification, p/3 for regression.",
            ],
            diagram: {
              kind: "compare",
              title: "Random subspaces vs random patches",
              caption: "Row randomization diversifies the samples; column randomization decorrelates the members.",
              left: {
                heading: "Random subspaces",
                items: [
                  "All rows, random feature subset per member",
                  "Decorrelates members on correlated features",
                  "Shines when p >> n",
                  "max_features < 1.0, bootstrap=False",
                ],
              },
              right: {
                heading: "Random patches",
                items: [
                  "Random rows AND random features per member",
                  "Bagging + subspace variance reduction stacked",
                  "Maximum decorrelation per member",
                  "max_samples < 1.0 and max_features < 1.0",
                ],
              },
            },
            examQuestions: [
              {
                q: "Explain random patches and random subspaces. How does feature randomization decorrelate bagged trees, and how does this idea become the random forest?",
                marks: 7,
                outline: [
                  "Subspaces: members train on random feature subsets — column randomization",
                  "Patches: random rows and random columns per member — a random rectangle",
                  "On correlated features, bagged trees all latch onto the same dominant root feature",
                  "Feature randomization forbids that; members decorrelate; averaging shrinks variance further",
                  "Best case p >> n: text, bioinformatics",
                  "sklearn mapping: max_features, max_samples, bootstrap flags",
                  "Forests take the idea per split: a fresh subset of sqrt(p) features at every node",
                ],
              },
              {
                q: "When would you choose random subspaces over plain bagging?",
                marks: 3,
                outline: [
                  "When there are many correlated or redundant features",
                  "Bagging alone then fails to decorrelate — members pick the same dominant feature",
                  "Subspaces force different views of the columns",
                ],
              },
              {
                q: "Which sklearn hyperparameters implement random patches?",
                marks: 2,
                outline: [
                  "max_samples < 1.0 (row subsampling) plus max_features < 1.0 (column subsampling)",
                  "On BaggingClassifier",
                ],
              },
            ],
          },
          {
            number: "4.7",
            title: "Random forests, extra-trees and feature importance",
            body: [
              "A random forest is bagging of decision trees with one extra dose of randomness: at every split, the tree considers only a random subset of features (for classification, √p of them). With every split offered different candidates, trees decorrelate — they stop all latching onto the same dominant feature — and averaging decorrelated trees slashes variance far beyond bagged trees alone. Forests inherit trees' virtues (no scaling, mixed features, multiclass) and shed the single tree's overfitting, making them the strongest out-of-the-box tabular classifier. Extra-Trees (Extremely Randomized Trees) push further: random thresholds for the chosen features too, skipping the search for the best split — faster to train, more biased, even more diverse members. Feature importance is the forest's X-ray: each feature's importance is the (weighted) average impurity reduction its splits delivered across all trees, normalized to sum to 1.",
              "The random-split rule is what makes a forest a forest. At every split in every tree, instead of scanning all p features for the best threshold, the forest scans only a random subset of size m ≤ p (m = √p for classification, m = p/3 for regression by default). The best split within that subset is chosen, but with a different subset at every split, trees cannot all grab the same dominant feature at the root. The trees in the forest become decorrelated — their errors disagree — and averaging decorrelated trees gives variance reduction that bagged trees (which always consider all features) cannot reach. The forest's predictive power comes from this decorrelation, not from any single tree being better.",
              "Extra-Trees (Extremely Randomized Trees) push randomization further. Where the random forest picks the best threshold for each randomly-chosen feature, Extra-Trees picks a random threshold for each chosen feature too — skipping the search for the optimal split entirely. The result: each tree is more biased (splits are random, not optimal) but the ensemble is more diverse (the randomization is doubled), and the variance reduction from averaging often wins. Extra-Trees are also faster to train, because the threshold search is the expensive part of tree-building. In practice, random forests and Extra-Trees are close on accuracy; Extra-Trees win on training speed, random forests win on interpretability of individual trees. Both are wrapped in sklearn's ExtraTreesClassifier and ExtraTreesRegressor.",
              "Feature importance is the forest's interpretability tool and a major reason for its industrial popularity. Each feature's importance is computed as the weighted average impurity reduction across all splits on that feature, in all trees of the forest, weighted by the fraction of samples reaching each split. The result is normalized to sum to 1, giving a relative ranking of features. Importance reveals which features actually drive predictions — often surprising (a feature you thought mattered is unimportant; a feature you ignored is crucial). It also enables feature selection: drop the bottom-quartile-importance features and retrain. Strengths of forests: strong out-of-the-box tabular accuracy; no scaling or distributional assumptions; mixed feature types; multiclass for free; OOB evaluation built in; feature importance as a free X-ray. Weaknesses: less interpretable than a single tree; slower inference than logistic regression; the importance can be biased toward high-cardinality features (permutation importance is the fix).",
            ],
            keyTerms: [
              { term: "Random forest", definition: "Bagging of decision trees with per-split random feature subsets; decorrelates trees to slash variance." },
              { term: "Per-split feature subset", definition: "At each split, scan only m random features (m=√p for classification); the source of forest decorrelation." },
              { term: "Extra-Trees", definition: "Extremely Randomized Trees; random thresholds too — faster, more biased, more diverse." },
              { term: "Feature importance", definition: "Weighted average impurity reduction per feature across all trees; normalized to sum to 1." },
              { term: "Permutation importance", definition: "Model-agnostic importance by shuffling a feature and measuring accuracy drop; fixes high-cardinality bias." },
            ],
            codeExample: {
              language: "python",
              caption: "forest.py — forest + importance",
              code: `from sklearn.ensemble import RandomForestClassifier

rf = RandomForestClassifier(n_estimators=500, oob_score=True,
                            random_state=42).fit(X_train, y_train)
print(rf.oob_score_)                      # free validation estimate
for name, imp in zip(feature_names, rf.feature_importances_):
    print(f"{name:12} {imp:.3f}")         # importances sum to 1`,
            },
            bullets: [
              "Forest = bagged trees + a random feature subset at every split (m = sqrt(p) for classification).",
              "Per-split subsets stop trees all grabbing the same dominant root feature.",
              "Decorrelated trees: variance of the average = rho*sigma^2 + (1-rho)*sigma^2/T — both terms shrink.",
              "Extra-Trees: random thresholds too — faster training, more biased, more diverse members.",
              "Feature importance: weighted average impurity reduction per feature, normalized to 1.",
              "Importance can favour high-cardinality features — permutation importance is the fix.",
              "Inherits tree virtues: no scaling, mixed features, multiclass — plus OOB evaluation.",
              "The strongest out-of-the-box classifier for tabular data.",
            ],
            diagram: {
              kind: "layers",
              title: "Anatomy of a random forest",
              caption: "Three stacked sources of randomness turn one overfitting tree into a stable committee.",
              layers: [
                { label: "Final prediction", note: "majority vote / mean over trees" },
                { label: "T decorrelated trees", note: "each on its own bootstrap sample" },
                { label: "Per-split feature subset", note: "m = sqrt(p) candidates at every node" },
                { label: "Bootstrap rows", note: "bagging input per tree" },
              ],
            },
            callout: {
              type: "exam",
              title: "Forest vs bagged trees in one line",
              body: "Bagged trees consider all p features at every split, so they stay correlated; forests offer each split only sqrt(p) random features, so trees cannot repeat each other's choices — decorrelation drives the rho in rho*sigma^2 down, and variance falls further than bagging alone can achieve.",
            },
            examQuestions: [
              {
                q: "Explain random forests: per-split feature sampling, why forests beat bagged trees, Extra-Trees, and how feature importance is computed.",
                marks: 7,
                outline: [
                  "Bagging of trees plus a random subset of m features at every split",
                  "m = sqrt(p) for classification, p/3 for regression (Breiman defaults)",
                  "Per-split subsets decorrelate trees; variance rho*sigma^2 + (1-rho)*sigma^2/T",
                  "Forests beat bagged trees because rho itself is reduced",
                  "Extra-Trees: random thresholds too — faster, more biased, more diverse",
                  "Feature importance: weighted average impurity reduction, normalized to sum 1",
                  "Caveat: importance biased toward high-cardinality features; permutation importance fixes it",
                ],
              },
              {
                q: "Compare random forests and Extra-Trees.",
                marks: 3,
                outline: [
                  "Forests: random features, best threshold searched per split",
                  "Extra-Trees: random features AND random thresholds — no threshold search",
                  "Extra-Trees train faster and are more diverse but more biased per tree",
                ],
              },
              {
                q: "How is feature importance computed in a forest?",
                marks: 2,
                outline: [
                  "Average the impurity reduction of every split on that feature, weighted by samples reaching it",
                  "Normalize across features to sum to 1",
                ],
              },
            ],
          },
          {
            number: "4.8",
            title: "Boosting — AdaBoost and gradient boosting",
            body: [
              "Boosting builds the committee sequentially, each new member concentrating on what the ensemble still gets wrong — the opposite of bagging's parallel independents, and an attack on bias rather than variance. AdaBoost (Adaptive Boosting) works by weights: train a weak learner (usually a shallow tree, a 'stump'), then raise the weight of the misclassified rows and lower the rest; the next learner trains on the reweighted data and naturally focuses on the hard cases. Each member also receives a say proportional to its weighted accuracy, and the final prediction is the weight-summed vote. The famous theory: weak learners barely better than chance can be boosted into a strong one.",
              "Gradient Boosting works by residuals: each new tree is fitted to the errors of the current ensemble (more precisely, to the negative gradient of the loss with respect to the current predictions), and its prediction is added with a small learning rate — gradient descent in function space. Small steps, many trees, shrinkage: the recipe behind XGBoost, LightGBM and CatBoost, the tabular champions of industry. Boosting's risk: it will chase noise if allowed too many rounds — tune the learning rate and early-stop on a validation set; and unlike bagging, it cannot be parallelized round-to-round.",
              "AdaBoost's mechanics are visible in a worked trace. Start with equal sample weights w_i = 1/n. Train a weak learner (a depth-1 stump). Compute its weighted error ε = Σ w_i · 1[wrong]. Compute its committee weight α = (1/2) ln((1−ε)/ε) — high accuracy (low ε) gives large α, near-chance (ε ≈ 0.5) gives α ≈ 0. Update sample weights: w_i ← w_i · exp(±α) (up for misclassified, down for correct), then renormalize so Σ w_i = 1. The next stump trains on the reweighted data, naturally focusing on the up-weighted hard rows. After T rounds, the final prediction is sign(Σ_t α_t h_t(x)) — a weight-summed vote where accurate members dominate. The theoretical guarantee: training error falls exponentially in T for weak learners with ε < 0.5.",
              "Gradient boosting reframes boosting as gradient descent in function space. The ensemble is a function F(x) = Σ_t η · h_t(x); each new tree h_t is fitted to the negative gradient of the loss with respect to F at the current prediction: r_it = −∂L(y_i, F(x_i)) / ∂F(x_i) evaluated at F = F_{t−1}. For MSE loss, the gradient is just the residual (y_i − F(x_i)), so each tree fits the residuals. For log-loss, the gradient is the prediction error in a transformed space. The learning rate η (shrinkage) scales each tree's contribution — small η (0.01–0.1) with many trees (100–1000) is the recipe that wins. XGBoost, LightGBM and CatBoost engineer this recipe with regularization, second-order gradients, and fast histogram splits, dominating industrial tabular ML. The tuning discipline: small learning rate, many trees, early-stop on validation, regularize the trees (max_depth, subsample) — and watch for noise-chasing.",
            ],
            keyTerms: [
              { term: "Boosting", definition: "Sequential ensemble where each member focuses on the previous's errors; reduces bias." },
              { term: "AdaBoost", definition: "Adaptive Boosting — reweights misclassified rows; final vote is weight-summed by member accuracy α." },
              { term: "Gradient boosting", definition: "Each new tree fits the negative gradient of the loss — gradient descent in function space." },
              { term: "Shrinkage (learning rate η)", definition: "Small scaling factor on each tree's contribution; small η + many trees = the winning recipe." },
              { term: "Weak learner", definition: "A model barely better than chance (a depth-1 stump); boosting's building block." },
            ],
            diagram: {
              kind: "cycle",
              title: "Boosting's loop",
              caption: "Learn, find the mistakes, focus the next learner there — sequential specialization instead of parallel diversity.",
              steps: [
                { label: "Round 1", note: "weak learner 1, equal weights" },
                { label: "Reweight", note: "errors up-weighted" },
                { label: "Round 2", note: "focuses on hard rows" },
                { label: "Repeat T rounds", note: "weighted vote Σ αₜ hₜ(x)" },
              ],
            },
            bullets: [
              "Boosting builds members sequentially; each focuses on what the ensemble still gets wrong.",
              "AdaBoost: misclassified rows get weight exp(+alpha); next learner sees them amplified.",
              "Member weight alpha = 0.5*ln((1-err)/err); err near 0.5 gives alpha near 0.",
              "Final prediction: sign of sum alpha_t * h_t(x) — a weight-summed vote.",
              "Gradient boosting: each tree fits the negative gradient of the loss (residuals for MSE).",
              "Learning rate eta (0.01-0.1) with many trees (100-1000) is the winning recipe.",
              "XGBoost/LightGBM/CatBoost engineer this recipe with regularization and fast splits.",
              "Risk: boosting chases noise — early-stop on a validation set.",
            ],
            callout: {
              type: "warning",
              title: "Boosting will chase noise",
              body: "Unlike bagging, boosting's sequential focus means later rounds concentrate on the hardest rows — including mislabelled ones. Cap the rounds, keep the learning rate small, use early stopping on a validation set, and subsample rows/columns (stochastic gradient boosting) to stay honest.",
            },
            codeExample: {
              language: "python",
              caption: "boosting.py — AdaBoost and gradient boosting",
              code: `from sklearn.ensemble import AdaBoostClassifier, GradientBoostingClassifier

ada = AdaBoostClassifier(n_estimators=200, learning_rate=0.5,
                         random_state=42).fit(X_train, y_train)
gb = GradientBoostingClassifier(n_estimators=300, learning_rate=0.05,
                                max_depth=2, random_state=42).fit(X_train, y_train)
print(ada.score(X_test, y_test), gb.score(X_test, y_test))
# small learning rate + many trees + early stopping = the winning recipe`,
            },
            examQuestions: [
              {
                q: "Explain AdaBoost: sample weights, the member weight alpha, the reweighting step, and the final weighted vote. Contrast it with gradient boosting fitted on residuals.",
                marks: 7,
                outline: [
                  "Start with equal weights w_i = 1/n; train a weak learner (stump)",
                  "Weighted error err = sum w_i*[wrong]; member weight alpha = 0.5*ln((1-err)/err)",
                  "Reweight: w_i <- w_i * exp(+/- alpha); renormalize; next stump focuses on hard rows",
                  "Final prediction: sign(sum alpha_t h_t(x)) — accurate members dominate",
                  "Theory: weak learners barely above chance boosted into a strong one",
                  "Gradient boosting: tree t fits negative gradient of the loss (residuals for MSE)",
                  "Small eta + many trees + early stopping; XGBoost/LightGBM are industrial versions",
                ],
              },
              {
                q: "Explain the role of alpha = 0.5*ln((1-err)/err) in AdaBoost.",
                marks: 3,
                outline: [
                  "It is the committee weight of the member",
                  "Low error -> large alpha (loud voice); err = 0.5 -> alpha = 0 (silenced)",
                  "The same alpha scales the up/down reweighting of the training rows",
                ],
              },
              {
                q: "What does each new gradient-boosting tree fit?",
                marks: 2,
                outline: [
                  "The negative gradient of the loss w.r.t. current predictions",
                  "For MSE loss this is simply the residual y - F(x)",
                ],
              },
            ],
          },
          {
            number: "4.9",
            title: "Stacking (stacked generalization)",
            body: [
              "Stacking replaces the fixed combination rule (vote, average, weight-sum) with a learned combiner. Base predictors of different families — say K-NN, random forest and naive Bayes — each make predictions; those predictions become the features of a final blender model (often logistic regression or a small tree) that learns when to trust whom. The fatal trap is training the blender on the same data the base models saw: base models that overfit their training rows would look falsely brilliant to the blender. The standard cure is hold-out stacking (split training data; base models train on one part, blender on their out-of-fold predictions) or full out-of-fold (cross-validated) stacking, which produces clean, unbiased blender features for every training row. Stacking is the last step of nearly every Kaggle-winning pipeline: diverse strong models below, a learned referee above.",
              "The base layer is a diverse set of strong predictors. The diversity requirement is the same as for voting (section 4.3): members must make different errors, or the blender has nothing to learn. A classic base layer combines a random forest (tree ensemble), gradient boosting (sequential trees), K-NN (instance-based), and logistic regression (linear) — four genuinely different inductive biases whose errors disagree. Each base model is trained on the full training set (or, for hold-out stacking, on a split) and outputs predictions for the blender's input. The choice of base models is the main design decision; the blender is usually a simple model so it does not overfit the stacked features.",
              "The blender (meta-model) is the learned combiner. It takes the base models' predictions as input features and learns to weight them optimally per instance. For classification, the blender inputs are typically the base models' predicted probabilities (not hard labels), giving it confidence information; for regression, the base models' numeric predictions. A logistic regression or a small decision tree is the usual blender — simple enough to avoid overfitting the small stacked feature set, expressive enough to learn which base model to trust in which region of feature space. The blender's output is the final prediction. Advanced stacking uses multiple blender layers (a deep stack), but a single blender layer is the syllabus's standard form.",
              "The leakage trap is the make-or-break detail. If the blender trains on the same predictions the base models produced on their own training data, those predictions are optimistically biased — the base models have seen those rows, so their predictions are over-confident, and the blender learns to trust them too much. The cure is out-of-fold stacking: split the training data into k folds; for each fold, train each base model on the other k−1 folds and predict on the held fold. The result is, for every training row, an unbiased prediction from each base model — predictions from models that never saw that row. These out-of-fold predictions are the blender's clean training features. At inference time, the base models (now trained on the full training set) predict on the new instance, and the blender combines them. Stacking's payoff: 1–3 percentage points of accuracy beyond the best single model, which is why it ends every Kaggle pipeline.",
            ],
            keyTerms: [
              { term: "Stacking", definition: "Ensemble with a learned blender combining base models' predictions, replacing fixed vote/average rules." },
              { term: "Base predictor", definition: "A diverse strong model in the stacking base layer (forest, boosting, K-NN, logistic)." },
              { term: "Blender (meta-model)", definition: "The learned combiner — usually logistic regression or a small tree — on top of base predictions." },
              { term: "Out-of-fold stacking", definition: "k-fold split producing unbiased base predictions for the blender; prevents the leakage trap." },
              { term: "Leakage trap", definition: "Training the blender on base models' training-set predictions; inflates scores, breaks in production." },
            ],
            diagram: {
              kind: "flow",
              title: "Stacking",
              caption: "Base predictions become features for a learned blender — the committee elects a referee.",
              steps: [
                { label: "Input x" },
                { label: "K-NN → class 1" },
                { label: "Forest → class 0" },
                { label: "NB → class 1" },
                { label: "Blender (meta-model)", note: "trained on out-of-fold base predictions" },
                { label: "Final prediction" },
              ],
            },
            bullets: [
              "Stacking replaces the fixed vote with a learned blender over base predictions.",
              "Base layer: diverse strong models — forest, boosting, K-NN, logistic.",
              "Blender: usually logistic regression or a small tree on base probabilities.",
              "Leakage trap: training the blender on base models' own training predictions inflates scores.",
              "Cure: out-of-fold stacking — k folds, each base model predicts its held-out fold.",
              "At inference: base models (trained on all data) predict, blender combines.",
              "Payoff: 1-3 points beyond the best single model — the Kaggle finisher.",
            ],
            callout: {
              type: "warning",
              title: "The leakage trap ends pipelines",
              body: "If the blender sees base predictions made on rows the base models trained on, those predictions are over-confident and the blender learns false trust — validation scores look great and production collapses. Out-of-fold stacking is not optional; it is the definition of correct stacking.",
            },
            codeExample: {
              language: "python",
              caption: "stacking.py — out-of-fold by default",
              code: `from sklearn.ensemble import StackingClassifier, RandomForestClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.neighbors import KNeighborsClassifier

stack = StackingClassifier(estimators=[
    ("rf", RandomForestClassifier(random_state=42)),
    ("knn", KNeighborsClassifier(n_neighbors=7)),
], final_estimator=LogisticRegression(), cv=5)   # cv builds OOF features
stack.fit(X_train, y_train)
print(stack.score(X_test, y_test))`,
            },
            examQuestions: [
              {
                q: "Explain stacking (stacked generalization): the base layer, the blender, and the out-of-fold procedure that avoids the leakage trap.",
                marks: 7,
                outline: [
                  "Base predictors of different families each predict; predictions become features",
                  "A learned blender (logistic regression / small tree) learns whom to trust where",
                  "Trap: blender trained on base models' training-set predictions is optimistically biased",
                  "Out-of-fold stacking: k folds; each base model predicts its held-out fold",
                  "Every training row then has unbiased predictions from every base model",
                  "Blender trains on those clean features; inference uses full-data base models",
                  "Base layer must be diverse (forest + boosting + K-NN + logistic); payoff 1-3 points",
                ],
              },
              {
                q: "Why must the blender be trained on out-of-fold predictions?",
                marks: 3,
                outline: [
                  "Base models are over-confident on rows they trained on",
                  "Those optimistic predictions teach the blender false trust",
                  "Out-of-fold predictions come from models that never saw the row — unbiased",
                ],
              },
              {
                q: "What is the usual choice of blender model?",
                marks: 2,
                outline: [
                  "Logistic regression or a small decision tree",
                  "Simple enough not to overfit the small stacked feature set",
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
      title: "Dimensionality Reduction & Learning Theory",
      summary:
        "Unit V attacks the curse of dimensionality from two directions — projection and manifold learning — through PCA and its many variants, kernel PCA with hyperparameter tuning, and closes with the theory that bounds it all: the PAC model and VC dimension.",
      chapter: {
        number: "05",
        title: "Fewer Dimensions, Deeper Theory",
        intro:
          "Unit V covers the curse of dimensionality, projection vs manifold learning, PCA, choosing d by explained variance, PCA compression, randomized and incremental PCA, kernel PCA, the PAC model, and VC dimension.",
        inOneBreath:
          "High dimensions starve distance-based models; project flat clouds with PCA, unroll curved ones with kernels; choose d by explained variance; PAC bounds say when enough examples guarantee learning; VC dimension measures a class's capacity.",
        sections: [
          {
            number: "5.1",
            title: "The curse of dimensionality",
            body: [
              "High-dimensional space is mostly emptiness. As dimensions d grow, volume explodes exponentially: to keep the same point density at d = 100 that a unit cube has at d = 2, you need 2⁵⁰ times as many points. Consequences pile up: distances concentrate — in high d, the nearest and farthest neighbours of a point become almost equidistant, gutting K-NN and K-Means, which live on distance contrasts; every model needs exponentially more data to fill the space; and overfitting flourishes because a high-dimensional model has endless room to carve private boxes around noise. The practical symptoms: models that train well and predict badly, features that are mostly redundant or irrelevant, and training times that balloon. The cure is to compress the feature space while keeping its information.",
              "The volume explosion is the mathematical core. The unit cube in d dimensions has volume 1, but to fill it with the same point density as in 2 dimensions, you need exponentially more points — at d = 10 you need 2¹⁰ = 1024 times as many, at d = 30 you need 2³⁰ ≈ a billion. Equivalently, to keep just 100 points per unit volume at d = 30 requires 100 billion total points, far beyond most datasets. The practical consequence: at moderate d (say 50 features) almost every cell of feature space is empty, so a model has no neighbours to average over — distance-based methods (K-NN, K-Means, SVM with RBF) starve, and gradient-based methods overfit the sparse structure they can see.",
              "Distance concentration is the second effect and it breaks the algorithms. In high d, the ratio of the nearest-neighbour distance to the farthest-neighbour distance tends to 1 — every point is roughly equidistant from every other. K-NN's vote becomes meaningless because the 'nearest' K neighbours are no nearer than the rest; K-Means's assignment becomes unstable because the closest centroid is barely closer than the others; SVM's RBF kernel produces uniform similarities because e⁻ᵞ‖x−z‖² is near-constant for all z. The mathematical statement: for random points in d-dimensional space, max distance / min distance → 1 as d → ∞, with convergence rate depending on the distribution. This is why distance-based methods that work beautifully at d ≤ 10 degrade badly at d ≥ 100.",
              "The cures for the curse are the rest of Unit V. Feature selection drops irrelevant or redundant features, reducing d before modelling. Dimensionality reduction (PCA, kernel PCA) projects the data onto a lower-dimensional subspace while preserving most of the variance. Regularization (L1, L2) constrains the model so it cannot carve private boxes around noise even in high d. And ensembles (Unit IV) reduce variance by averaging, partially compensating for the overfitting that high d enables. The discipline is universal: in high d, prefer regularized or ensemble models, reduce dimensionality before distance-based methods, and validate obsessively on held-out data because training accuracy is meaningless when the model has the capacity to memorize every training point.",
            ],
            keyTerms: [
              { term: "Curse of dimensionality", definition: "The exponential growth of volume with d that starves models of data and breaks distance-based methods." },
              { term: "Volume explosion", definition: "To keep point density fixed, needed data grows exponentially in d — 2ᵈ at minimum." },
              { term: "Distance concentration", definition: "In high d, nearest and farthest distances converge — K-NN, K-Means, RBF-SVM break." },
              { term: "Feature selection", definition: "Dropping irrelevant or redundant features to reduce d before modelling." },
              { term: "Dimensionality reduction", definition: "Projecting data onto a lower-d subspace (PCA, kernel PCA) while preserving variance." },
            ],
            bullets: [
              "To keep density fixed as d grows, needed points grow exponentially — about 2^d.",
              "At d = 30, matching 2-D density needs roughly a billion points per cell scale.",
              "Distance concentration: nearest and farthest neighbour distances converge to 1.",
              "K-NN votes become meaningless; K-Means assignments unstable; RBF similarities uniform.",
              "Overfitting flourishes — endless room to carve private boxes around noise.",
              "Cures: feature selection, dimensionality reduction (PCA), regularization, ensembles.",
              "In high d, prefer regularized/ensemble models and reduce d before distance methods.",
            ],
            diagram: {
              kind: "compare",
              title: "Low-dimensional intuition vs high-dimensional reality",
              caption: "The same algorithm, two different worlds — geometry stops behaving in high d.",
              left: {
                heading: "Low d (10 or fewer)",
                items: [
                  "Data fills the space; neighbours are genuinely near",
                  "Near vs far is a real contrast",
                  "K-NN, K-Means and RBF-SVM work well",
                  "Modest data suffices",
                ],
              },
              right: {
                heading: "High d (100+)",
                items: [
                  "Volume explodes; almost every cell of feature space is empty",
                  "Nearest and farthest distances nearly equal",
                  "Distance-based methods starve and break",
                  "Reduce d, regularize, or ensemble — and validate obsessively",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Quote the number",
              body: "The two quotable facts: (1) keeping point density fixed needs data growing about 2^d, so d = 30 needs ~10^9 times the data; (2) max distance / min distance between random points tends to 1 as d grows. Attach each to its victim — K-NN and K-Means — and the question is fully answered.",
            },
            codeExample: {
              language: "python",
              caption: "curse.py — watch distances concentrate",
              code: `import numpy as np

rng = np.random.default_rng(0)
for d in [2, 10, 100, 1000]:
    X = rng.uniform(0, 1, size=(50, d))
    D = np.sqrt(((X[:, None] - X[None]) ** 2).sum(-1))
    np.fill_diagonal(D, np.inf)
    ratio = D.min(axis=1) / D.max(axis=1)   # nearest / farthest
    print(f"d={d:5}  mean nearest/farthest ratio = {ratio.mean():.3f}")`,
            },
            examQuestions: [
              {
                q: "What is the curse of dimensionality? Explain the volume explosion and distance concentration with their consequences for K-NN and K-Means, and list the cures.",
                marks: 7,
                outline: [
                  "Volume grows exponentially with d: fixed density needs about 2^d as many points",
                  "At d = 30, ~10^9 points per original scale — real datasets cannot fill the space",
                  "Distance concentration: max/min neighbour distance ratio tends to 1",
                  "K-NN: the 'nearest' neighbours are no nearer than the rest — votes become noise",
                  "K-Means: closest centroid barely closer than the rest — unstable assignments",
                  "RBF-SVM: exp(-gamma*||x-z||^2) near-constant for all z",
                  "Cures: feature selection, PCA/kernel PCA, L1/L2 regularization, ensembles",
                ],
              },
              {
                q: "Why does distance concentration break the RBF-kernel SVM?",
                marks: 3,
                outline: [
                  "RBF similarity is exp(-gamma*||x-z||^2) — a pure distance function",
                  "When all distances concentrate, all similarities become nearly equal",
                  "The kernel can no longer distinguish near from far points",
                ],
              },
              {
                q: "Quote the data-growth rule needed to keep point density fixed as d grows.",
                marks: 2,
                outline: [
                  "The required number of points grows exponentially in d",
                  "Roughly 2^d times the 2-dimensional requirement",
                ],
              },
            ],
          },
          {
            number: "5.2",
            title: "Main approaches: projection and manifold learning",
            body: [
              "Projection exploits a simple observation: high-dimensional data is rarely uniformly spread — it often hugs a lower-dimensional subspace. If a 3-D cloud is really a tilted flat pancake, projecting onto that plane loses almost nothing and saves a dimension. Projection methods (PCA below, and LDA for supervised separation) find the best flat subspace and squash the data onto it. Manifold learning handles the case where the data lies on a curved lower-dimensional surface — a rolled-up sheet, the famous Swiss roll — where any straight projection would tear neighbours apart. Manifold methods (Kernel PCA with a suitable kernel, LLE, Isomap, t-SNE, UMAP) unroll the surface, preserving local neighbour relationships rather than global straight-line distances. The distinction is the syllabus's organizing diagram: flat subspace → project; curved surface → unroll.",
              "Projection is the simpler case and covers PCA and LDA. The key assumption is that the data, despite having p features, genuinely varies along only d < p linear directions — the rest are noise or redundancy. PCA finds the d orthogonal directions of maximum variance and projects the data onto them, yielding d new features that capture most of the signal. Linear Discriminant Analysis (LDA) is the supervised cousin: it finds the d directions that maximize between-class variance relative to within-class variance, projecting onto the most class-separating subspace. Both are linear — the projection is a single matrix multiplication Z = X·W — so they are fast, interpretable, and reversible (the projection can be undone to reconstruct an approximation of the original).",
              "Manifold learning is the non-linear case, needed when the data's low-dimensional structure is curved. The classic example is the Swiss roll: a flat 2-D sheet rolled into a spiral in 3-D, where two points far apart on the sheet can be close in 3-D space and vice versa. Linear PCA would project the roll onto a flat plane, tearing neighbours apart and mixing distant points. Manifold methods preserve local neighbour relationships instead: Isomap builds a graph of nearest neighbours and uses geodesic distances (shortest paths on the graph) to find the unrolling; Locally Linear Embedding (LLE) reconstructs each point as a weighted combination of its neighbours and preserves those weights in low d; t-SNE and UMAP minimize a probabilistic measure of neighbourhood-preservation divergence, producing 2-D or 3-D maps for visualization. Kernel PCA bridges the two: by lifting the data into a high-dimensional feature space via a kernel, linear PCA in that space corresponds to non-linear projection in the original space.",
              "Choosing between projection and manifold methods is the first design decision in dimensionality reduction. Use projection (PCA, LDA) when the data's low-dimensional structure is roughly flat — fast, reversible, interpretable, and the default for compression and feature engineering. Use manifold methods (Kernel PCA with RBF, t-SNE, UMAP, Isomap) when the data is genuinely curved — needed for visualization of complex data and for unrolling curved structure before linear methods. The trade-off: manifold methods are typically non-reversible (you cannot reconstruct the original from the low-d embedding), slower, and harder to interpret, but they capture non-linear structure that projection misses. For most tabular ML, PCA is the right starting point; manifold methods are reserved for visualization and for data known to have curved structure.",
            ],
            keyTerms: [
              { term: "Projection", definition: "Linear reduction — squash data onto the best flat lower-d subspace (PCA, LDA)." },
              { term: "Manifold learning", definition: "Non-linear reduction — unroll data from a curved lower-d surface (Kernel PCA, t-SNE, UMAP)." },
              { term: "Swiss roll", definition: "The canonical curved-manifold example — a flat sheet rolled into a spiral, defeats linear projection." },
              { term: "LDA", definition: "Linear Discriminant Analysis — supervised projection maximizing between-class vs within-class variance." },
              { term: "Locality preservation", definition: "Manifold methods keep nearest-neighbour relationships rather than global straight-line distances." },
            ],
            diagram: {
              kind: "compare",
              title: "The two roads to fewer dimensions",
              caption: "Project a flat cloud, or unroll a curved one — the shape of the data chooses the road.",
              left: {
                heading: "Projection",
                items: ["data hugs a flat subspace", "squash onto the best plane", "PCA · LDA", "linear — preserves global structure"],
              },
              right: {
                heading: "Manifold learning",
                items: ["data lies on a curved surface", "unroll while keeping neighbours", "Kernel PCA · t-SNE · UMAP", "nonlinear — preserves local structure"],
              },
            },
            bullets: [
              "Projection: high-d data often hugs a flat subspace — squash onto it (PCA, LDA).",
              "Manifold learning: data lies on a curved surface — unroll it (Kernel PCA, Isomap, LLE, t-SNE, UMAP).",
              "Swiss roll: two points far apart in 3-D can be neighbours on the rolled sheet.",
              "Linear projection of a rolled sheet tears neighbours apart.",
              "Isomap: geodesic distances on a neighbour graph; LLE: preserve local reconstruction weights.",
              "t-SNE / UMAP: probabilistic neighbourhood preservation for 2-D visualization maps.",
              "Projection is fast, reversible, interpretable; manifold methods capture curvature but are one-way.",
            ],
            callout: {
              type: "exam",
              title: "Flat -> project, curved -> unroll",
              body: "One sentence decides the whole question: if the data's low-dimensional structure is roughly flat, use PCA/LDA projection; if it is curved (the Swiss roll), use manifold methods that preserve local neighbours. Name one algorithm from each family and the Swiss roll failure case for linear PCA.",
            },
            examQuestions: [
              {
                q: "Distinguish the projection and manifold learning approaches to dimensionality reduction. Explain PCA, LDA, the Swiss roll problem, and Isomap/LLE/t-SNE.",
                marks: 7,
                outline: [
                  "Projection: squash onto the best flat subspace; PCA (unsupervised variance), LDA (supervised separation)",
                  "Assumption: data varies along d < p linear directions; the rest is noise",
                  "Manifold learning: data on a curved lower-d surface; unroll, preserving neighbours",
                  "Swiss roll: straight projection mixes distant points and tears neighbours",
                  "Isomap: geodesic distances on a nearest-neighbour graph",
                  "LLE: preserve local linear reconstruction weights; t-SNE/UMAP: probabilistic maps for visualization",
                  "Trade-offs: projection reversible and fast; manifold methods nonlinear but one-way and slower",
                ],
              },
              {
                q: "Why does linear PCA fail on the Swiss roll?",
                marks: 3,
                outline: [
                  "The sheet is curved; no flat plane preserves its geometry",
                  "Projecting tears apart points that are neighbours on the sheet",
                  "Manifold methods unroll using local neighbour relationships",
                ],
              },
              {
                q: "Name two manifold-learning algorithms.",
                marks: 2,
                outline: [
                  "Isomap, LLE (also acceptable: t-SNE, UMAP, Kernel PCA)",
                  "They preserve local neighbour structure, not global distances",
                ],
              },
            ],
          },
          {
            number: "5.3",
            title: "PCA — preserving the variance",
            body: [
              "Principal Component Analysis is the workhorse linear projection. Its goal: find the lower-dimensional subspace that preserves the maximum variance of the data — because variance carries the signal, and directions along which the data barely varies are mostly noise or redundancy. Geometrically, PCA finds the axis on which the projection of the data has the largest spread — the first principal component — then the orthogonal axis with the largest remaining spread, and so on. Algebraically, these axes are the eigenvectors of the data's covariance matrix, and each eigenvalue is the variance along that axis. Workflow: centre the data (subtract each feature's mean — PCA is variance based, so scaling matters), compute the covariance matrix, take its eigendecomposition (or the SVD of the centred data), and sort components by eigenvalue.",
              "A worked 2-feature example makes PCA tangible. Suppose 4 points in 2-D: x₁ = (1, 1), x₂ = (2, 1), x₂ = (3, 3), x₄ = (4, 3). Step 1 — centre: mean = (2.5, 2); centred points are (−1.5, −1), (−0.5, −1), (0.5, 1), (1.5, 1). Step 2 — covariance matrix: Σ = (1/n) X_centredᵀ X_centred = [[1.667, 1.333], [1.333, 1.333]] (variance of feature 1 = 1.667, variance of feature 2 = 1.333, covariance = 1.333). Step 3 — eigendecomposition: eigenvalues λ₁ ≈ 2.77, λ₂ ≈ 0.22; eigenvectors v₁ ≈ (0.83, 0.55) (the dominant direction — roughly the data's long axis), v₂ ≈ (−0.55, 0.83) (orthogonal to v₁). Step 4 — project onto top d=1: Z = X_centred · v₁ gives each point a single coordinate along the long axis, capturing 2.77/(2.77+0.22) ≈ 93% of the variance.",
              "PCA's mathematical structure is the source of its power. The covariance matrix Σ is symmetric positive semi-definite, so its eigendecomposition yields orthogonal eigenvectors with non-negative eigenvalues — the eigenvectors form an orthonormal basis for the feature space, and the eigenvalues measure the variance along each basis direction. Sorting eigenvectors by descending eigenvalue gives the principal components in priority order. Equivalently, the SVD of the centred data X_centred = U·S·Vᵀ gives the principal components as the columns of V and the variances as (singular values)²/n — the same answer, computed more stably. The top d eigenvectors form the projection matrix Wd, and the reduced data is Z = X_centred · Wd — a single matrix multiplication.",
              "PCA's assumptions and limitations define its niche. Strengths: linear, so fast and reversible (inverse_transform reconstructs an approximation); the components are uncorrelated by construction (orthogonality), which helps downstream linear models; principled variance maximization; no hyperparameters except d (chosen by explained variance, section 5.5); works well when the data's structure is roughly linear. Limitations: assumes linear structure — curved manifolds are torn; sensitive to feature scale (variance is dominated by large-scale features, so scaling is mandatory); sensitive to outliers (a single outlier shifts the covariance); the components are linear combinations of all original features, so they are not directly interpretable by name. The right use case is roughly-linear, well-scaled, moderate-d data where compression and decorrelation matter.",
            ],
            keyTerms: [
              { term: "PCA", definition: "Principal Component Analysis — project onto the orthogonal axes of maximum variance." },
              { term: "Covariance matrix", definition: "Σ = (1/n) X_centredᵀ X_centred; PCA's input, eigendecomposed to find the principal axes." },
              { term: "Eigenvectors", definition: "The principal components — orthogonal directions of variance, sorted by eigenvalue." },
              { term: "Eigenvalue", definition: "The variance along the corresponding eigenvector; the explained variance." },
              { term: "SVD", definition: "Singular Value Decomposition; a numerically stable way to compute PCA without forming the covariance matrix." },
            ],
            diagram: {
              kind: "pipeline",
              title: "PCA as a pipeline",
              caption: "Centre, covariance, eigenvectors, project — the first component inherits the most variance.",
              stages: [
                { label: "Centre data", note: "subtract feature means" },
                { label: "Covariance matrix", note: "feature co-movement" },
                { label: "Eigenvectors", note: "principal axes, sorted by eigenvalue" },
                { label: "Project", note: "keep top d components" },
              ],
            },
            bullets: [
              "PCA finds the orthogonal axes of maximum variance; variance carries the signal.",
              "Workflow: centre -> covariance matrix -> eigendecomposition (or SVD) -> sort by eigenvalue.",
              "Eigenvectors = principal axes; eigenvalues = variance along each axis.",
              "Worked 2-D example: eigenvalues 2.77 and 0.22; PC1 captures 93% of variance.",
              "SVD of centred data gives the same components more stably.",
              "Scale features first — PCA is variance-based and large-scale features hijack it.",
              "Limitations: linear only, outlier-sensitive, components hard to interpret by name.",
            ],
            callout: {
              type: "warning",
              title: "Scale before PCA — always",
              body: "PCA maximizes variance, and variance carries units. A salary column in rupees will dominate a height column in metres and the first component will just be the rupee direction. Standardize (fit on train only) before fitting PCA — the exam loves this slip.",
            },
            codeExample: {
              language: "python",
              caption: "pca.py — fit, project, inspect",
              code: `import numpy as np
from sklearn.decomposition import PCA
from sklearn.preprocessing import StandardScaler

Xs = StandardScaler().fit_transform(X)        # PCA is variance-based
pca = PCA(n_components=2).fit(Xs)
Z = pca.transform(Xs)                          # n x 2 scores
print(pca.explained_variance_ratio_)           # variance per component
print(pca.components_)                         # principal axes (loadings)`,
            },
            examQuestions: [
              {
                q: "Explain PCA: centering, the covariance matrix, eigendecomposition and projection. Work through the 4-point 2-D example and state what the eigenvalues represent.",
                marks: 7,
                outline: [
                  "Goal: the subspace preserving maximum variance; variance carries signal",
                  "Step 1: centre by subtracting feature means",
                  "Step 2: covariance Sigma = (1/n) X_c^T X_c",
                  "Step 3: eigendecomposition; eigenvectors are the principal axes",
                  "Worked points: mean (2.5, 2); eigenvalues 2.77 and 0.22; PC1 direction (0.83, 0.55)",
                  "Step 4: project Z = X_c * Wd; top component keeps 2.77/(2.77+0.22) = 93%",
                  "SVD alternative X = U S V^T gives the same components more stably",
                ],
              },
              {
                q: "Why is PCA called an unsupervised method?",
                marks: 3,
                outline: [
                  "It uses only the feature matrix X — no labels",
                  "Components maximize variance, not class separation",
                  "LDA is the supervised cousin that uses class labels",
                ],
              },
              {
                q: "What do the eigenvalues of the covariance matrix represent?",
                marks: 2,
                outline: [
                  "The variance of the data along each principal axis",
                  "Explained variance ratio = eigenvalue / sum of all eigenvalues",
                ],
              },
            ],
          },
          {
            number: "5.4",
            title: "Projecting down to d dimensions",
            body: [
              "Once components are sorted, reducing to d dimensions is matrix multiplication: take the matrix W whose columns are the top d eigenvectors — the retained principal components — and compute Z = X · Wd. Each row's d new coordinates are its scores on the chosen components. The choice of d is a decision, not a default, and the next two sections give the two standard rules: the explained-variance ratio threshold, and (for supervised work) cross-validation of downstream performance. Note what the projection costs: the new axes are combinations of all original features, so a principal component is interpretable only by inspecting its weights (loadings), not by name — the price of compression.",
              "The projection mechanics are a single matrix multiplication, and the d new features are the scores. Given the centred data X_centred (n × p) and the projection matrix Wd (p × d) whose columns are the top d eigenvectors, the reduced data is Z = X_centred · Wd, an n × d matrix. Each row of Z is a point's coordinates in the new d-dimensional principal-component space — its scores on the d retained components. The first column of Z is the score on PC1 (the highest-variance direction), the second on PC2, and so on. The projection is linear and fast — O(n·p·d) — and is the same operation regardless of how d was chosen. In scikit-learn, pca.transform(X) applies exactly this multiplication after the pca has been fitted.",
              "The choice of d is the central decision and has two standard answers. The unsupervised rule (section 5.5) picks the smallest d such that the top d components explain a threshold fraction (typically 95%) of the total variance — preserving the signal while dropping the noise tail. The supervised rule picks d by cross-validation: for each candidate d, project the training data, train the downstream classifier, and measure validation accuracy; pick the d with the best score. The supervised rule is more expensive but more honest — it optimizes the actual task, not a proxy. A third practical rule: for visualization, always use d = 2 or d = 3 so the data can be plotted.",
              "The interpretability cost is the price of compression and should not be ignored. Each principal component is a linear combination of all p original features: PC₁ = w₁₁·x₁ + w₁₂·x₂ + … + w₁p·x_p. The weights w₁j (loadings) tell you how much each original feature contributes to PC₁ — inspecting them is the only way to interpret a component. A component dominated by a few large loadings is interpretable ('this is mostly the income and education direction'); a component with many small loadings is a diffuse mix ('this is everything combined'). When interpretability matters more than variance preservation, feature selection (dropping features entirely) is preferred to PCA — the kept features keep their names and meanings, at the cost of dropping correlated features' shared signal.",
            ],
            keyTerms: [
              { term: "Projection matrix (Wd)", definition: "The p × d matrix whose columns are the top d eigenvectors; Z = X_centred · Wd is the projection." },
              { term: "Scores (Z)", definition: "A point's coordinates in the d-dimensional principal-component space." },
              { term: "Loadings", definition: "The weights w_ij showing how much each original feature contributes to a principal component." },
              { term: "d (target dimension)", definition: "The number of components retained; chosen by explained variance or by supervised cross-validation." },
            ],
            bullets: [
              "Projection is one matrix multiplication: Z = X_centred * Wd.",
              "Wd: the p x d matrix whose columns are the top-d eigenvectors.",
              "Z's columns are the scores on PC1, PC2, ... — d coordinates per point.",
              "Choose d by explained-variance threshold (5.5) or by cross-validated downstream performance.",
              "For visualization, d = 2 or 3 so the data can be plotted.",
              "Loadings w_ij show each original feature's contribution to a component.",
              "Interpretability is the price of compression — components are mixtures of all features.",
            ],
            diagram: {
              kind: "flow",
              title: "Projecting down to d dimensions",
              caption: "From centred data to scores in six steps — the last one is a single matrix multiplication.",
              steps: [
                { label: "Centre the data", note: "subtract feature means" },
                { label: "Covariance matrix", note: "Sigma = (1/n) X_c^T X_c" },
                { label: "Eigendecompose" },
                { label: "Sort eigenvalues", note: "descending; variance priority" },
                { label: "Keep top d, form Wd" },
                { label: "Project", note: "Z = X_centred * Wd" },
              ],
            },
            callout: {
              type: "tip",
              title: "Read the loadings",
              body: "A component dominated by a few large loadings is interpretable ('mostly income and education'); a diffuse mix of many small loadings is not. When interpretability matters more than variance, prefer feature selection — kept features keep their names.",
            },
            codeExample: {
              language: "python",
              caption: "project.py — PCA by hand with numpy",
              code: `import numpy as np

Xc = X - X.mean(axis=0)                    # centre the data
C = np.cov(Xc, rowvar=False)               # covariance matrix
vals, vecs = np.linalg.eigh(C)             # eigen-decomposition
order = np.argsort(vals)[::-1]             # descending eigenvalues
Wd = vecs[:, order[:2]]                    # top-2 eigenvectors
Z = Xc @ Wd                                # the n x d projection`,
            },
            examQuestions: [
              {
                q: "Explain how PCA projects data down to d dimensions. Define the projection matrix Wd and the scores Z, and discuss the two standard rules for choosing d.",
                marks: 7,
                outline: [
                  "Sort eigenvectors by descending eigenvalue; take the top d",
                  "Wd = p x d matrix of retained eigenvectors",
                  "Z = X_centred * Wd — each row is a point's scores on the d components",
                  "Projection cost O(n*p*d); scikit-learn's transform does exactly this",
                  "Rule 1 (unsupervised): smallest d with cumulative explained variance >= 95%",
                  "Rule 2 (supervised): cross-validate downstream accuracy across candidate d",
                  "Visualization: d = 2 or 3; interpretability via loadings w_ij",
                ],
              },
              {
                q: "What are loadings and how do you interpret a component?",
                marks: 3,
                outline: [
                  "Loadings = the weights w_ij of a principal component on the original features",
                  "Large few loadings: interpretable direction",
                  "Many small loadings: a diffuse mix; feature selection may serve better",
                ],
              },
              {
                q: "Write the PCA projection formula.",
                marks: 2,
                outline: [
                  "Z = X_centred * Wd",
                  "X_centred is n x p; Wd is p x d; Z is n x d",
                ],
              },
            ],
          },
          {
            number: "5.5",
            title: "Explained variance ratio and choosing d",
            body: [
              "The explained variance ratio of component k is its eigenvalue divided by the sum of all eigenvalues: the fraction of the dataset's total variance that lives along that one axis. Read in order, the ratios form a decreasing profile — a few components usually carry most of the signal, and the rest trail off into noise. Two selection rules follow. The cumulative threshold rule: choose the smallest d such that the top d components together explain, say, 95% of the variance. The elbow / scree rule: plot the ratios (or cumulative curve) and cut where the curve bends — where marginal components stop adding real variance. In scikit-learn, pca.explained_variance_ratio_ delivers the per-component numbers, and np.cumsum turns them into the cumulative curve that decides d.",
              "The explained variance ratio is the metric that makes d a principled choice. For each component k, EVR_k = λ_k / Σ λ_j — the fraction of total variance captured by that component alone. Read in order, EVR_1 is the largest (often 30–60% of total), EVR_2 is the next, and the series decreases toward zero. The cumulative explained variance C(d) = Σ_{k=1..d} EVR_k is a non-decreasing curve from EVR_1 to 1.0; it rises steeply at first (each new component adds real signal) and then flattens (each new component adds only noise). The curve's shape is the picture that decides d — a few components carry the signal, the rest are noise.",
              "The cumulative threshold rule is the standard automated choice. Pick a threshold τ (typically 0.95, sometimes 0.90 for aggressive compression or 0.99 for high fidelity), and choose the smallest d such that C(d) ≥ τ. The reasoning: the first d components capture τ of the signal; the remaining p−d components capture only (1−τ) of the variance and are mostly noise, so dropping them is a clean compression with negligible signal loss. In scikit-learn, PCA(n_components=0.95) directly implements this rule — fit returns a pca whose n_components_ is the chosen d. The threshold is a dial: 0.90 aggressive (smaller d, more compression, more signal loss), 0.99 conservative (larger d, less compression, less signal loss).",
              "The scree plot and elbow rule are the visual alternative, useful when the threshold rule feels arbitrary. Plot EVR_k (or C(d)) against k; the curve typically falls steeply then bends into a flat tail — the 'elbow'. The d just past the elbow is the natural cut, because beyond it each additional component adds only noise. The elbow rule is more art than science (the bend is not always sharp), but it reveals the data's natural dimensionality independent of an arbitrary threshold. Combined practice: look at the scree plot to confirm an elbow exists, then apply the 95% threshold rule to pick d automatically. Always report both the chosen d and the captured variance — 'we reduced from 50 features to 12, retaining 96% of variance' is the exam-style summary.",
            ],
            keyTerms: [
              { term: "Explained variance ratio (EVR)", definition: "EVR_k = λ_k / Σ λ_j — the fraction of total variance captured by component k." },
              { term: "Cumulative explained variance", definition: "C(d) = Σ_{k≤d} EVR_k; the total variance retained by the top d components." },
              { term: "Threshold rule", definition: "Pick the smallest d with C(d) ≥ τ (typically 0.95) — scikit-learn's PCA(n_components=0.95)." },
              { term: "Scree plot", definition: "Plot of EVR_k vs k; the elbow where the curve flattens suggests the natural d." },
            ],
            diagram: {
              kind: "pipeline",
              title: "Choosing d with the explained-variance staircase",
              caption: "Keep climbing while components add signal; the flat tail is noise you were happy to lose.",
              stages: [
                { label: "PC 1", note: "~62% — largest spread" },
                { label: "PC 1–2", note: "~87% — second axis adds contrast" },
                { label: "PC 1–3", note: "~95% — threshold reached" },
                { label: "All p", note: "100% — remaining axes are noise" },
              ],
            },
            bullets: [
              "EVR_k = lambda_k / sum(lambda_j) — the fraction of total variance on component k.",
              "Cumulative curve C(d) rises steeply then flattens — signal first, noise tail after.",
              "Threshold rule: smallest d with C(d) >= 0.95 (aggressive 0.90, conservative 0.99).",
              "sklearn implements the rule directly: PCA(n_components=0.95).",
              "Scree plot: EVR vs k; the elbow where the curve bends suggests the natural d.",
              "Threshold and elbow confirm each other in practice.",
              "Report both d and captured variance: '50 features to 12, retaining 96%'.",
            ],
            callout: {
              type: "exam",
              title: "The exam-style summary sentence",
              body: "Close every PCA answer with the report line: 'we reduced from 50 features to 12, retaining 96% of the variance.' It shows you chose d by a rule, not by habit — exactly what the examiner's mark scheme rewards.",
            },
            codeExample: {
              language: "python",
              caption: "choose_d.py — the 95% rule, computed",
              code: `import numpy as np
from sklearn.decomposition import PCA

pca = PCA().fit(X_scaled)
evr = pca.explained_variance_ratio_
cum = np.cumsum(evr)
d = int(np.searchsorted(cum, 0.95) + 1)   # smallest d with >= 95%
print(d, round(cum[d - 1], 3))

pca95 = PCA(n_components=0.95).fit(X_scaled)  # sklearn does the same rule
print(pca95.n_components_)`,
            },
            examQuestions: [
              {
                q: "Define explained variance ratio and cumulative explained variance. Explain the 95% threshold rule and the scree-plot elbow rule for choosing d, with a worked example.",
                marks: 7,
                outline: [
                  "EVR_k = lambda_k / sum of all eigenvalues — variance fraction of component k",
                  "C(d) = sum of the first d EVRs; non-decreasing from EVR_1 to 1.0",
                  "Rises steeply (signal), flattens (noise tail)",
                  "Threshold rule: smallest d with C(d) >= 0.95; sklearn PCA(n_components=0.95)",
                  "Dial: 0.90 aggressive compression, 0.99 high fidelity",
                  "Scree plot: EVR vs k; elbow marks where components stop adding signal",
                  "Worked report: 50 features -> 12 components, 96% variance retained",
                ],
              },
              {
                q: "How does PCA(n_components=0.95) choose d internally?",
                marks: 3,
                outline: [
                  "It fits all components and computes the explained variance ratios",
                  "Finds the smallest count whose cumulative sum reaches 0.95",
                  "The fitted model keeps exactly that many components",
                ],
              },
              {
                q: "What is a scree plot?",
                marks: 2,
                outline: [
                  "A plot of explained variance ratio against component index",
                  "Its elbow suggests the natural number of components to keep",
                ],
              },
            ],
          },
          {
            number: "5.6",
            title: "PCA for compression",
            body: [
              "Because projection keeps most of the variance in far fewer numbers, PCA is a compression scheme: p features stored as d ≪ p coordinates, plus the shared matrix Wd. The classic demonstration is images: a 28 × 28 digit photo (784 features) is often reconstructable recognizably from 150 or so components — a 5× shrink. The quality check is reconstruction error: project to d dimensions, then map back (inverse_transform) and measure the mean squared difference from the original. The compression view also explains PCA's denoising use: the components you dropped were mostly noise, so the reconstruction is often cleaner than the input.",
              "The compression arithmetic is direct. Storing n data points of p features costs n·p numbers; storing the same n points in d-dimensional PCA space costs n·d (the scores) + p·d (the shared projection matrix Wd). When n·d + p·d ≪ n·p, compression wins — which is true whenever d ≪ p and n is not tiny. For a 10000 × 784 image dataset reduced to d = 50: raw storage is 7.84M numbers; PCA storage is 0.5M (scores) + 39.2K (Wd) ≈ 0.54M — a 14× compression. The compression is lossy: reconstruction X̂ = Z · Wdᵀ + mean is not exactly X, but the squared error equals the sum of the dropped eigenvalues — exactly the variance you chose to discard.",
              "Image compression is the canonical demonstration and earns the marks. A 28 × 28 grayscale digit photo has 784 pixel features. PCA on a corpus of such photos finds that the top 50 components typically explain ~80% of variance, the top 150 explain ~95%. Reconstructing a digit from 150 components gives a recognizable image at 5× compression (from 784 to 150 numbers per image, plus the shared Wd). At 50 components the digit is blurry but identifiable; at 5 components it is barely recognizable. The reconstruction error (mean squared difference between original and reconstruction) decreases monotonically with d, and the curve mirrors the explained-variance staircase — a clean way to visualize the signal-vs-noise split.",
              "Denoising is compression's sibling application. If the original data has additive noise, the noise spreads its variance across many small components (because noise is uncorrelated across features), while the signal concentrates in the top few components. Projecting to d dimensions and reconstructing drops the noise-dominated tail, giving a reconstruction cleaner than the input — PCA denoising. The discipline: choose d large enough to capture the signal (95% threshold) but small enough to drop the noise tail, then measure the reconstruction's signal-to-noise ratio on a held-out set. This is the basis of PCA-based denoising for images, audio, and sensor data, and of robust PCA for separating sparse noise from low-rank signal in video backgrounds.",
            ],
            keyTerms: [
              { term: "PCA compression", definition: "Store d ≪ p coordinates per point plus the shared projection matrix Wd; lossy but high-fidelity." },
              { term: "Reconstruction error", definition: "‖X − X̂‖² where X̂ = Z·Wdᵀ + mean; equals the sum of dropped eigenvalues." },
              { term: "inverse_transform", definition: "Map the d-dimensional scores back to p-dimensional space — the decompression step." },
              { term: "Denoising", definition: "Drop noise-dominated components and reconstruct — the signal is cleaner than the input." },
              { term: "Lossy compression", definition: "Compression that discards some information; PCA's loss is exactly the dropped variance." },
            ],
            bullets: [
              "Store n*d scores plus the shared p*d matrix Wd instead of n*p numbers.",
              "Worked arithmetic: 10000 x 784 images at d = 50 -> 0.54M vs 7.84M numbers, a 14x saving.",
              "28 x 28 digits are recognizable from ~150 components (5x compression).",
              "Reconstruction: X_hat = Z * Wd^T + mean via inverse_transform.",
              "Reconstruction error equals the sum of the dropped eigenvalues — exactly the variance discarded.",
              "Denoising: noise spreads across small components; dropping the tail cleans the signal.",
              "Choose d to capture the signal (95%) but drop the noise-dominated tail.",
            ],
            diagram: {
              kind: "flow",
              title: "PCA compression and decompression",
              caption: "Four steps from raw features to a smaller, denoised copy of the dataset.",
              steps: [
                { label: "Fit PCA, keep d", note: "e.g. 150 of 784 pixels" },
                { label: "Store scores", note: "n x d instead of n x p" },
                { label: "Decompress", note: "X_hat = Z * Wd^T + mean (inverse_transform)" },
                { label: "Measure error", note: "equals the sum of dropped eigenvalues" },
              ],
            },
            callout: {
              type: "tip",
              title: "Compression is the quality dial",
              body: "At 150 components the digit is sharp; at 50 blurry but identifiable; at 5 barely recognizable. Reconstruction error falls monotonically with d and mirrors the explained-variance staircase — the same curve read from the compression side.",
            },
            codeExample: {
              language: "python",
              caption: "compress.py — 784 pixels to 150 numbers",
              code: `import numpy as np
from sklearn.decomposition import PCA
from sklearn.metrics import mean_squared_error

pca = PCA(n_components=150).fit(X_digits)   # 784 -> 150 numbers
Z = pca.transform(X_digits)
X_hat = pca.inverse_transform(Z)             # decompression
err = mean_squared_error(X_digits, X_hat)
print("compression:", round(X_digits.shape[1] / 150, 1), "x",
      "reconstruction MSE:", round(err, 5))`,
            },
            examQuestions: [
              {
                q: "Explain PCA as a compression scheme: the storage arithmetic, reconstruction, the meaning of reconstruction error, and the denoising application.",
                marks: 7,
                outline: [
                  "Raw storage n*p; PCA storage n*d + p*d (scores + shared Wd)",
                  "Worked case: 10000 x 784 at d = 50 -> 0.54M vs 7.84M numbers, 14x saving",
                  "Digit images: recognizable from ~150 of 784 components (5x)",
                  "Reconstruction X_hat = Z * Wd^T + mean (inverse_transform)",
                  "Reconstruction error = sum of dropped eigenvalues — exactly the discarded variance",
                  "Denoising: noise spreads over small components; dropping the tail cleans the signal",
                  "Curve of error vs d mirrors the explained-variance staircase",
                ],
              },
              {
                q: "Why is PCA denoising effective when noise is uncorrelated across features?",
                marks: 3,
                outline: [
                  "Uncorrelated noise spreads its variance thinly across many small components",
                  "The signal concentrates in the top few components",
                  "Projecting to d and reconstructing drops the noise-dominated tail",
                ],
              },
              {
                q: "State the PCA reconstruction formula.",
                marks: 2,
                outline: [
                  "X_hat = Z * Wd^T + mean",
                  "Z are the d-dimensional scores; Wd^T maps back to p dimensions",
                ],
              },
            ],
          },
          {
            number: "5.7",
            title: "Randomized PCA and Incremental PCA",
            body: [
              "Full SVD on an n × p matrix costs O(n · p²) — painful when both n and p are large. Randomized PCA approximates the top d components in O(n · p · d) by projecting the data onto a random d-dimensional sketch and running exact SVD in the small space — with a couple of power iterations the approximation is superb, and it is the default in scikit-learn (svd_solver='randomized') whenever d is much smaller than p. Incremental PCA (IPCA) solves the other bottleneck — memory: it fits PCA in mini-batches, updating a running estimate of the components without ever holding the full dataset (out-of-core learning over disk files). The rule of thumb: full SVD for small data, randomized when only the top components matter, incremental when data does not fit in RAM.",
              "Randomized PCA's algorithm is the trick that scales to large p. To approximate the top d eigenvectors of an n × p matrix: (1) generate a random Gaussian matrix Ω of shape p × (d + oversampling); (2) form the sketch Y = X · Ω, an n × (d + oversampling) matrix that captures the dominant directions; (3) optionally apply q power iterations Y = (X · Xᵀ)^q · Y to sharpen the singular-value gap; (4) orthonormalize Y via QR; (5) project the data onto the orthonormal basis B = Qᵀ · X, a small (d+oversampling) × p matrix; (6) compute exact SVD of B and back out the top d singular vectors of X. The cost is O(n · p · d) instead of O(n · p²), a huge saving when d ≪ p, and the approximation error falls exponentially in the oversampling and power iterations.",
              "Incremental PCA solves the memory bottleneck and the streaming-data case. Standard PCA loads the full dataset into RAM to form the covariance matrix — impossible for datasets larger than RAM. IPCA instead processes the data in mini-batches: for each batch, it updates a running estimate of the principal components using the partial SVD of the batch and the previous components, eventually converging to the same components as full PCA (up to mini-batch noise). The memory cost is O(batch_size · p) instead of O(n · p), and the data can stream from disk or network. The trade-off: IPCA's components are slightly noisier than full PCA's (mini-batch variance), and choosing the batch size is a tuning dial (larger batches = more stable but more memory). In scikit-learn, IncrementalPCA(n_components=d, batch_size=b) implements it, and partial_fit allows incremental updates as new data arrives.",
              "The three PCA variants serve three regimes and the choice is dictated by data size. Full SVD (svd_solver='full') for small data where exactness matters and O(n·p²) is affordable. Randomized PCA (svd_solver='randomized') for medium-to-large data where only the top d components matter and d ≪ p — the scikit-learn default when n_components < min(n, p). Incremental PCA (IncrementalPCA) for data larger than RAM, streaming data, or online learning where components must update as new data arrives. A fourth variant, sparse PCA (SparsePCA), trades variance preservation for interpretability by adding an L1 penalty on the loadings — yielding components with few non-zero weights, interpretable as 'this component is mostly features 3, 7, and 12'. The right variant depends on the bottleneck: compute, memory, or interpretability.",
            ],
            keyTerms: [
              { term: "Randomized PCA", definition: "Approximates top d components in O(n·p·d) via random sketch + power iterations + exact SVD on the small sketch." },
              { term: "Incremental PCA (IPCA)", definition: "Fits PCA in mini-batches; memory O(batch·p) instead of O(n·p); out-of-core for larger-than-RAM data." },
              { term: "Power iteration", definition: "Repeated multiplication by X·Xᵀ that sharpens the singular-value gap, improving randomized PCA accuracy." },
              { term: "Sparse PCA", definition: "Adds L1 penalty on loadings to yield components with few non-zero weights — interpretable but slightly less variance-preserving." },
              { term: "Out-of-core learning", definition: "Training on data larger than RAM by streaming mini-batches from disk; IPCA's defining capability." },
            ],
            codeExample: {
              language: "python",
              caption: "pca_variants.py — three flavours",
              code: `from sklearn.decomposition import PCA, KernelPCA, IncrementalPCA
import numpy as np

pca = PCA(n_components=0.95).fit(X_scaled)        # keep 95% variance
print(pca.n_components_)                          # → chosen d
print(np.cumsum(pca.explained_variance_ratio_))   # staircase numbers

kpca = KernelPCA(n_components=2, kernel='rbf', gamma=0.04)  # nonlinear
ipca = IncrementalPCA(n_components=50, batch_size=500)      # out-of-core`,
            },
            bullets: [
              "Full SVD costs O(n*p^2) — painful when n and p are both large.",
              "Randomized PCA: top d components in O(n*p*d) via a random sketch + power iterations.",
              "scikit-learn default when d << min(n, p) (svd_solver='randomized').",
              "Incremental PCA: mini-batch partial_fit; memory O(batch*p) instead of O(n*p).",
              "IPCA handles larger-than-RAM data and streams (out-of-core learning).",
              "IPCA components slightly noisier than full PCA; batch size is the tuning dial.",
              "Sparse PCA: L1 penalty on loadings for interpretable, few-feature components.",
            ],
            diagram: {
              kind: "compare",
              title: "Randomized PCA vs Incremental PCA",
              caption: "One attacks compute, the other attacks memory — pick by bottleneck.",
              left: {
                heading: "Randomized PCA",
                items: [
                  "Approximates the top d components",
                  "O(n*p*d) instead of O(n*p^2)",
                  "Random sketch + power iterations sharpen the gap",
                  "Default when d << p",
                ],
              },
              right: {
                heading: "Incremental PCA",
                items: [
                  "Fits in mini-batches via partial_fit",
                  "Memory O(batch*p), not O(n*p)",
                  "Larger-than-RAM and streaming data",
                  "Slightly noisier components; batch size is the dial",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Which variant when?",
              body: "One sentence each: full SVD for small data where exactness matters; randomized PCA when only the top components matter and d << p; incremental PCA when the data does not fit in RAM or streams; sparse PCA when interpretable components matter more than variance.",
            },
            examQuestions: [
              {
                q: "Compare full SVD, randomized PCA and incremental PCA. Explain the randomized sketch algorithm and why IPCA enables out-of-core learning.",
                marks: 7,
                outline: [
                  "Full SVD: exact but O(n*p^2) time and O(n*p) memory",
                  "Randomized PCA: random p x (d+oversampling) matrix Omega; sketch Y = X*Omega",
                  "Power iterations Y = (X X^T)^q Y sharpen the singular-value gap",
                  "QR-orthonormalize, project, exact SVD of the small matrix; O(n*p*d) total",
                  "Approximation error falls exponentially in oversampling and power iterations",
                  "Incremental PCA: partial_fit per mini-batch; memory O(batch*p); streams from disk",
                  "Choice by bottleneck: compute -> randomized, memory -> incremental, interpretability -> sparse",
                ],
              },
              {
                q: "What are power iterations for in randomized PCA?",
                marks: 3,
                outline: [
                  "Repeated multiplication by X*X^T before the sketch is orthonormalized",
                  "Sharpens the singular-value gap so the sketch captures the true top directions",
                  "A couple of iterations make the approximation superb",
                ],
              },
              {
                q: "When must you use incremental PCA?",
                marks: 2,
                outline: [
                  "When the dataset is larger than RAM or arrives as a stream",
                  "partial_fit processes mini-batches without holding all data in memory",
                ],
              },
            ],
          },
          {
            number: "5.8",
            title: "Kernel PCA",
            body: [
              "Kernel PCA runs PCA in a feature space — the same kernel trick as SVM. Map the data implicitly through φ into a high-dimensional space, perform linear PCA there, and the components back home are nonlinear — the Swiss roll unrolls, curved clusters separate. The kernel is a hyperparameter: linear (plain PCA), polynomial (interaction-shaped), RBF / Gaussian (local distance similarity, the usual first choice), sigmoid (tanh similarity). Tuning is unsupervised: run kernel PCA for candidate kernels and parameters (γ, degree, coef0), train a downstream classifier on the reduced data, and pick the combination with the best cross-validated score — reduction is only as good as the task it feeds.",
              "The kernel trick is the same as SVM's, applied to PCA. The covariance matrix in feature space is Σ_φ = (1/n) Σ φ(x_i) φ(x_i)ᵀ, but φ(x) is never computed explicitly — instead, every inner product φ(x_i)·φ(x_j) is replaced by the kernel K(x_i, x_j). The principal components in feature space are eigenvectors of the centralized kernel matrix K (the n × n matrix of kernel evaluations between training points), and a point's score on a component is Σ_i α_i K(x_i, x) — a kernel-weighted combination of training-point kernels. The result: PCA in feature space, computed in the original space via the kernel, capturing non-linear structure that linear PCA cannot. The cost is O(n²) memory for the kernel matrix and O(n³) time for its eigendecomposition — prohibitive for large n.",
              "The kernel choice encodes the prior belief about the data's structure, and the options mirror SVM's. The linear kernel K(x, z) = x·z reduces kernel PCA to plain PCA — fast, O(n²) memory, the right choice for roughly-linear data. The polynomial kernel K(x, z) = (x·z + 1)ᵈ captures polynomial-interaction structure — useful when features combine multiplicatively (e.g., x·y matters as much as x and y separately). The RBF (Gaussian) kernel K(x, z) = e⁻ᵞ‖x−z‖² is the usual first choice for non-linear data — local similarity, the Swiss-roll unroller, with γ controlling the locality (small γ = broad similarity, large γ = sharp local). The sigmoid kernel K(x, z) = tanh(γ x·z + c) is a neural-network-flavoured alternative. Each kernel has hyperparameters (γ, d, c) that need cross-validation.",
              "Tuning kernel PCA is unsupervised in form but supervised in practice, because reduction is only as good as the downstream task it feeds. The standard procedure: for each candidate (kernel, hyperparameters), run kernel PCA to d dimensions, train a downstream classifier on the reduced data, and measure cross-validated accuracy; pick the combination with the best score. Without a downstream task, tuning is hard — visualize the 2-D embedding and inspect it for clean separation, or use a reconstruction-error proxy (kernel PCA's pre-image problem is hard, so reconstruction is approximate). Kernel PCA's strengths: captures non-linear structure linear PCA misses; the kernel trick avoids explicit feature computation; useful for unrolling manifolds before linear methods. Weaknesses: O(n²) memory and O(n³) time, prohibitive for large n; the pre-image problem makes reconstruction hard; many hyperparameters to tune; non-reversible, so it is a one-way projection, not a compression scheme.",
            ],
            keyTerms: [
              { term: "Kernel PCA", definition: "PCA in a high-dimensional feature space via the kernel trick; components are non-linear in the original space." },
              { term: "Kernel matrix", definition: "The n × n matrix K_ij = K(x_i, x_j); kernel PCA eigendecomposes its centralized form." },
              { term: "RBF kernel", definition: "K(x,z) = e⁻ᵞ‖x−z‖²; Gaussian kernel, the default for non-linear PCA — local similarity." },
              { term: "Pre-image problem", definition: "Mapping a kernel-PCA score back to the original space is ill-posed; kernel PCA is non-reversible." },
              { term: "Hyperparameter tuning (kernel PCA)", definition: "Cross-validate (kernel, γ, d, coef0) on the downstream task — reduction is only as good as the task it feeds." },
            ],
            bullets: [
              "Kernel PCA = PCA in a high-dimensional feature space via the kernel trick.",
              "Every inner product phi(x_i).phi(x_j) replaced by K(x_i, x_j); phi never computed.",
              "Components are eigenvectors of the centred n x n kernel matrix.",
              "Score of a point: sum_i alpha_i * K(x_i, x) — kernel-weighted combination.",
              "Kernels: linear (= plain PCA), polynomial, RBF (default for non-linear), sigmoid.",
              "RBF gamma controls locality: small gamma broad similarity, large gamma sharp local.",
              "Tuning is by cross-validated downstream score — reduction serves the task.",
              "Costs O(n^2) memory and O(n^3) time; pre-image problem makes it non-reversible.",
            ],
            diagram: {
              kind: "flow",
              title: "Kernel PCA",
              caption: "The same eigendecomposition, performed on similarities instead of coordinates.",
              steps: [
                { label: "Choose a kernel", note: "RBF, polynomial, sigmoid" },
                { label: "Kernel matrix K", note: "n x n evaluations K(x_i, x_j)" },
                { label: "Centre K in feature space" },
                { label: "Eigendecompose K", note: "components live in feature space" },
                { label: "Project", note: "score = sum_i alpha_i K(x_i, x)" },
              ],
            },
            callout: {
              type: "warning",
              title: "The n x n wall",
              body: "Kernel PCA eigendecomposes an n x n matrix: O(n^2) memory and O(n^3) time make it prohibitive beyond a few thousand points. It is also non-reversible — the pre-image problem has no exact solution — so use it for projection and visualization, not compression.",
            },
            codeExample: {
              language: "python",
              caption: "kpca.py — tuning by downstream score",
              code: `from sklearn.decomposition import KernelPCA
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import GridSearchCV
from sklearn.pipeline import make_pipeline

clf = make_pipeline(
    KernelPCA(n_components=2, kernel="rbf"),
    LogisticRegression())
# unsupervised in form, supervised in practice: tune gamma by CV
grid = GridSearchCV(clf, {"kernelpca__gamma": [0.01, 0.04, 0.1]})
grid.fit(X_train, y_train)
print(grid.best_params_, round(grid.best_score_, 3))`,
            },
            examQuestions: [
              {
                q: "Explain kernel PCA: the kernel trick applied to PCA, the kernel matrix, the choice and tuning of kernels, and the method's strengths and weaknesses including the pre-image problem.",
                marks: 7,
                outline: [
                  "Map implicitly via phi; perform linear PCA in the feature space",
                  "Every phi(x_i).phi(x_j) replaced by K(x_i, x_j) — coordinates never computed",
                  "Components: eigenvectors of the centred n x n kernel matrix",
                  "Score of a new point: sum_i alpha_i K(x_i, x)",
                  "Kernels mirror SVM: linear, polynomial (interactions), RBF (locality, the default), sigmoid",
                  "Tuning: cross-validate (kernel, gamma, d) on the downstream task",
                  "Costs O(n^2)/O(n^3); non-reversible (pre-image problem); not a compression scheme",
                ],
              },
              {
                q: "Why is kernel PCA non-reversible?",
                marks: 3,
                outline: [
                  "The feature-space mapping phi is never computed explicitly",
                  "Mapping a feature-space score back to an original-space point is the pre-image problem",
                  "No exact solution exists — only approximations",
                ],
              },
              {
                q: "Which kernel usually unrolls a Swiss roll?",
                marks: 2,
                outline: [
                  "The RBF (Gaussian) kernel",
                  "Its locality parameter gamma controls how local the similarity is",
                ],
              },
            ],
          },
          {
            number: "5.9",
            title: "Learning theory: the PAC model",
            body: [
              "PAC — Probably Approximately Correct — is the theory that answers: when can data guarantee that a learned model is good? The setting: examples are drawn independently from a fixed unknown distribution D; a concept class C is learnable if there is an algorithm that, for any target concept in C, any error tolerance ε and any confidence δ, uses m examples and returns a hypothesis h with probability ≥ 1 − δ having error ≤ ε on future data drawn from D. 'Approximately' is the ε, 'probably' is the δ, and the punchline: sample complexity bounds like m ≥ (1/ε)(ln|H| + ln(1/δ)) — enough examples make learning guaranteed, with the number needed growing only logarithmically in the hypothesis space size. PAC theory is the bridge from 'my model scored 0.93 on the test set' to 'with confidence 95%, its true error on this distribution is below 0.07'.",
              "The PAC framework's formal statement is the heart of the theory. A concept class C is PAC-learnable if there exists an algorithm L such that, for any target concept c ∈ C, any distribution D over inputs, any error tolerance 0 < ε < 1/2, and any confidence 0 < δ < 1/2, given m examples drawn i.i.d. from D and labelled by c, L outputs a hypothesis h with Pr[error_D(h) ≤ ε] ≥ 1 − δ. The 'probably' is the 1 − δ confidence, the 'approximately correct' is the ε error bound, and the i.i.d. assumption plus the quantification over all D and all c ∈ C make the guarantee distribution-free and concept-class-specific. The framework's power is that it abstracts away the algorithm and the distribution, asking only when learning is possible at all.",
              "The sample-complexity bound is the practical takeaway and earns exam marks. For a finite hypothesis class H, the number of examples needed to guarantee PAC learning is m ≥ (1/ε)(ln|H| + ln(1/δ)). Reading it: the sample size grows linearly in 1/ε (halving the error doubles the data needed), logarithmically in |H| (doubling the hypothesis space adds a constant to the data needed — surprisingly cheap), and logarithmically in 1/δ (a more confident guarantee costs only a constant more). Concretely: for |H| = 1000 hypotheses, ε = 0.05, δ = 0.05, the bound gives m ≥ (1/0.05)(ln 1000 + ln 20) ≈ 20·(6.9 + 3) ≈ 198 examples. The bound is conservative but it is the right order of magnitude — and it certifies that learning is possible, not just empirically observed.",
              "PAC theory's philosophical contribution is the bridge from empirical test scores to distribution-level guarantees. A 93% test accuracy is an empirical observation on one sample; PAC theory says: if the hypothesis class is finite, the test sample is i.i.d. from D, and m is large enough, then with confidence 1 − δ the true error on D is bounded. The bound's looseness is real — the constant factors are bad, and finite hypothesis classes exclude neural networks (whose |H| is infinite) — but the form is the contribution. The VC dimension (section 5.10) extends PAC to infinite hypothesis classes by replacing ln|H| with a continuous measure of capacity, giving the modern generalization theory that underlies deep-learning's sample-complexity arguments. PAC is the syllabus's bridge from 'works on the test set' to 'provably generalizes'.",
            ],
            keyTerms: [
              { term: "PAC learning", definition: "Probably Approximately Correct — learnable if m examples give 1−δ confidence of ε error, for any D and any target in C." },
              { term: "ε (error tolerance)", definition: "The 'approximately correct' — the hypothesis's true error must be ≤ ε." },
              { term: "δ (confidence)", definition: "The 'probably' — the guarantee holds with probability ≥ 1 − δ." },
              { term: "Sample complexity", definition: "m ≥ (1/ε)(ln|H| + ln(1/δ)); the data needed for PAC learning of a finite hypothesis class H." },
              { term: "Distribution-free", definition: "PAC bounds hold for any input distribution D — the framework's strength." },
            ],
            bullets: [
              "PAC: Probably Approximately Correct — when data alone can guarantee a good model.",
              "Examples drawn i.i.d. from an unknown distribution D; target concept from class C.",
              "Guarantee: Pr[error_D(h) <= eps] >= 1 - delta — 'approximately' is eps, 'probably' is delta.",
              "Distribution-free: the bound holds for any input distribution D.",
              "Sample complexity (finite H): m >= (1/eps)*(ln|H| + ln(1/delta)).",
              "Grows linearly in 1/eps, logarithmically in |H| and in 1/delta.",
              "Worked bound: |H| = 1000, eps = 0.05, delta = 0.05 -> m >= 198 examples.",
              "PAC bridges 'scored 0.93 on the test set' to 'true error below 0.07 with 95% confidence'.",
            ],
            diagram: {
              kind: "flow",
              title: "The PAC learning setting",
              caption: "Four moves from a concept class to a confidence-bounded guarantee.",
              steps: [
                { label: "Fix the concept class C", note: "and tolerances eps, delta" },
                { label: "Draw m i.i.d. examples", note: "labelled by the target concept" },
                { label: "Learn hypothesis h", note: "consistent with the sample" },
                { label: "Guarantee", note: "Pr[error(h) <= eps] >= 1 - delta" },
              ],
            },
            callout: {
              type: "exam",
              title: "Name the two parameters",
              body: "The fastest two marks on the paper: 'probably' is the confidence parameter delta, 'approximately correct' is the error tolerance eps. Then write the bound m >= (1/eps)*(ln|H| + ln(1/delta)) and note what grows linearly (1/eps) and logarithmically (|H|, 1/delta).",
            },
            codeExample: {
              language: "python",
              caption: "pac.py — the sample-complexity bound, computed",
              code: `import math

H, eps, delta = 1000, 0.05, 0.05   # |H|, error tolerance, confidence
m = (1 / eps) * (math.log(H) + math.log(1 / delta))
print(math.ceil(m))                 # 198 examples guarantee PAC learning

for H2 in [100, 10000, 1000000]:    # growth is only logarithmic in |H|
    print(H2, math.ceil((math.log(H2) + math.log(20)) / eps))`,
            },
            examQuestions: [
              {
                q: "Define PAC learnability formally. Explain eps, delta, distribution-free learning, and use the sample-complexity bound m >= (1/eps)(ln|H| + ln(1/delta)) with a numeric example.",
                marks: 7,
                outline: [
                  "Setting: i.i.d. examples from unknown D, target concept c in class C",
                  "Learnable if some algorithm returns h with Pr[error_D(h) <= eps] >= 1 - delta",
                  "'Probably' = 1 - delta confidence; 'approximately correct' = eps error",
                  "Distribution-free: the guarantee holds for any D",
                  "Finite H bound: m >= (1/eps)*(ln|H| + ln(1/delta))",
                  "Worked: |H| = 1000, eps = delta = 0.05 -> m >= 20*(6.9 + 3.0) = 198",
                  "Interpretation: linear in 1/eps, logarithmic in |H| and 1/delta; conservative but certifying",
                ],
              },
              {
                q: "In the PAC sample-complexity bound, what grows linearly and what grows logarithmically?",
                marks: 3,
                outline: [
                  "Linearly: the demanded accuracy, as 1/eps — halving the error doubles the data",
                  "Logarithmically: hypothesis-space size |H| and confidence 1/delta",
                  "That logarithmic slowness is what makes PAC learning feasible",
                ],
              },
              {
                q: "Expand PAC and name its two parameters.",
                marks: 2,
                outline: [
                  "Probably Approximately Correct",
                  "delta = confidence, eps = error tolerance",
                ],
              },
            ],
          },
          {
            number: "5.10",
            title: "The VC model and VC dimension",
            body: [
              "The VC (Vapnik–Chervonenkis) dimension measures the raw complexity of a hypothesis class H — its capacity to fit — and refines PAC bounds from 'log of the number of hypotheses' to a measure that works for infinite classes too. Definition: H shatters a set of points if, for every possible labelling of those points, some hypothesis in H classifies them all correctly; the VC dimension is the size of the largest set H can shatter. Canonical numbers: a line in the plane has VC dimension 3 (it can shatter 3 points, never 4); an axis-aligned rectangle, 4; a halfspace in Rᵈ, d + 1. The learning consequence is Vapnik's fundamental theorem: uniform convergence — and hence learnability — holds when the ratio of VC dimension to sample size is small, giving generalization bounds of the form: with probability 1 − δ, true error ≤ training error + O(√((VC · log n)/m)). Reading it as an engineer: capacity needs examples — a model class richer than your data is wide will memorize; the bounds certify when it cannot.",
              "The shattering definition is VC's core and earns a worked trace. A hypothesis class H shatters a set S of n points if, for every one of the 2ⁿ possible labellings of S (each point positive or negative), some hypothesis in H classifies all n correctly. The VC dimension is the largest n for which some set of n points can be shattered. Worked example — lines in the plane: any 3 non-collinear points can be shattered, because for each of the 2³ = 8 labellings a line exists that separates positives from negatives (one point on one side, two on the other, or all three on one side, or all on the other). But 4 points cannot be shattered: consider the 'XOR' labelling where diagonally-opposite points are positive and the other two are negative — no single straight line separates them. So VC(line in R²) = 3.",
              "The canonical VC numbers form the syllabus's table. Lines in the plane: VC = 3 (shatter 3 non-collinear, never 4). Axis-aligned rectangles in the plane: VC = 4 (shatter 4 points placed at the compass points, never 5 — a fifth point inside cannot be excluded). Halfspaces in Rᵈ (linear classifiers in d dimensions): VC = d + 1. Sine functions sin(θx) on R: VC = ∞ (for any n points, a high-frequency sine can shatter them by oscillating enough times). The numbers tell a story: capacity grows with dimensionality and with the family's flexibility — linear classifiers are modest, sine functions are unbounded. The VC dimension quantifies what 'capacity' means in a way that connects directly to learnability.",
              "Vapnik's fundamental theorem connects VC dimension to generalization, and is the modern form of PAC for infinite hypothesis classes. The theorem: a hypothesis class H is learnable if and only if its VC dimension is finite, and the sample complexity scales as m = Θ((VC + log(1/δ)) / ε). The generalization bound has the form: with probability 1 − δ, true error ≤ training error + O(√((VC · log(n/VC) + log(1/δ)) / m)). Reading it: true error is bounded by training error plus a capacity penalty that shrinks as m grows and rises as VC grows. The practical takeaway: a model class with VC dimension much smaller than m generalizes well; a model class with VC dimension approaching or exceeding m can memorize the training set and generalize badly. This is the theoretical foundation of the bias-variance tradeoff (Unit I) and the regularization discipline — capacity must be matched to data, or generalization fails.",
            ],
            keyTerms: [
              { term: "VC dimension", definition: "The size of the largest point set H can shatter; measures hypothesis-class capacity." },
              { term: "Shattering", definition: "H shatters S if every labelling of S is realizable by some hypothesis in H." },
              { term: "VC(line in R²) = 3", definition: "3 non-collinear points can be shattered; 4 cannot (the XOR labelling defeats every line)." },
              { term: "Vapnik's theorem", definition: "H is learnable iff VC(H) is finite; sample complexity m = Θ((VC + log(1/δ))/ε)." },
              { term: "Generalization bound", definition: "true error ≤ training error + O(√((VC·log(n/VC)+log(1/δ))/m)) — capacity must be matched to data." },
            ],
            diagram: {
              kind: "flow",
              title: "VC dimension by example",
              caption: "Lines in the plane shatter 3 points but never 4 — the class's capacity is exactly 3.",
              steps: [
                { label: "3 points", note: "any labelling — a line can fit them all" },
                { label: "Shattered", note: "all 2³ labelings realizable" },
                { label: "4 points", note: "XOR-style labelling defeats every line" },
                { label: "VC(line) = 3", note: "capacity quantified" },
              ],
            },
            bullets: [
              "H shatters a set S if every labelling of S is realizable by some hypothesis in H.",
              "VC dimension: the size of the largest set H can shatter — capacity made precise.",
              "Line in the plane: VC = 3 (never 4 — the XOR labelling defeats every line).",
              "Axis-aligned rectangle: VC = 4; halfspace in R^d: VC = d + 1; sin(theta*x): VC = infinity.",
              "Vapnik's theorem: H learnable iff VC(H) finite; m = Theta((VC + log(1/delta))/eps).",
              "Generalization bound: true error <= training error + O(sqrt((VC*log(n/VC) + log(1/delta))/m)).",
              "Capacity must be matched to data — the theory behind the bias-variance tradeoff.",
              "VC extends PAC to infinite hypothesis classes (replacing ln|H| with VC dimension).",
            ],
            callout: {
              type: "exam",
              title: "The four canonical numbers",
              body: "Memorize the table: line in the plane VC = 3; axis-aligned rectangle VC = 4; halfspace in R^d VC = d + 1; sin(theta*x) on the real line VC = infinity. Being able to justify just the line case (3 shatter, XOR defeats 4) is the standard 3-mark follow-up.",
            },
            examQuestions: [
              {
                q: "Define shattering and VC dimension. Give the VC dimension of lines in the plane, axis-aligned rectangles and halfspaces in R^d, and state Vapnik's fundamental theorem with the generalization bound.",
                marks: 7,
                outline: [
                  "Shattering: every one of the 2^n labellings of S realizable by some h in H",
                  "VC(H) = size of the largest shatterable set",
                  "Line in the plane: 3 non-collinear points shatter; XOR labelling defeats 4 -> VC = 3",
                  "Axis-aligned rectangle: VC = 4 (compass points, never 5); halfspace in R^d: d + 1",
                  "sin(theta*x): VC = infinity — any n points shattered by high frequency",
                  "Vapnik: H learnable iff VC(H) finite; m = Theta((VC + log(1/delta))/eps)",
                  "Bound: true error <= training error + O(sqrt((VC*log(n/VC) + log(1/delta))/m))",
                ],
              },
              {
                q: "Show that 4 points cannot be shattered by lines in the plane.",
                marks: 3,
                outline: [
                  "Place the 4 points as a quadrilateral",
                  "Consider the XOR labelling: diagonally opposite points positive",
                  "No single straight line separates the two diagonals — so not all labellings are realizable",
                ],
              },
              {
                q: "What does VC(H) = infinity imply about learnability?",
                marks: 2,
                outline: [
                  "The class has unbounded capacity",
                  "By Vapnik's theorem it is not PAC-learnable — no finite-sample guarantee",
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
        { topic: "Bias-variance tradeoff, over/underfitting, ML lifecycle", weight: "≈ 10–12 marks", note: "Conceptual and almost guaranteed — write the U-curve." },
        { topic: "K-Means, hierarchical, GMM/EM", weight: "≈ 10–12 marks", note: "One algorithm in depth with the diagram." },
        { topic: "Classifiers (logistic, tree, K-NN, SVM, NB)", weight: "≈ 12–15 marks", note: "Pick two; contrast strengths and decision-boundary shape." },
        { topic: "Confusion matrix, precision/recall/F1", weight: "≈ 8–10 marks", note: "Numerical — practise with a small confusion matrix." },
        { topic: "Bagging, random forests, boosting, stacking", weight: "≈ 10–12 marks", note: "Compare table is the exam favourite." },
        { topic: "PCA, kernel PCA, choosing d", weight: "≈ 8–10 marks", note: "Pipeline + explained variance staircase." },
        { topic: "PAC, VC dimension", weight: "≈ 6–8 marks", note: "Definitions + one bound statement." },
        { topic: "MLE vs MAP, BIRCH, CURE", weight: "≈ 4–6 marks", note: "Short notes; quick wins." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Two hours a day, five days a week, with weekends for past papers. Code every algorithm at least once in scikit-learn — the muscle memory pays off in viva too.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I foundations", tasks: ["ML definition, lifecycle, types", "Preprocessing: missing values, encoding, outliers", "Normalization (min-max, z-score) with code", "Bias-variance tradeoff — draw the U-curve"] },
        { week: "Week 2", focus: "Unit II — clustering", tasks: ["K-Means by hand on a 10-point dataset", "Hierarchical clustering + dendrogram reading", "GMM + EM steps with a worked example", "MLE vs MAP — the coin-flip example"] },
        { week: "Week 3", focus: "Unit III — classifiers (part 1)", tasks: ["Logistic regression — sigmoid + log-loss", "Decision trees — Gini vs entropy", "K-NN — K dial, scaling dependence"] },
        { week: "Week 4", focus: "Unit III — classifiers (part 2) + metrics", tasks: ["SVM — margin, kernel trick", "Naive Bayes — three variants", "Confusion matrix + every metric from it", "One full classification_report output"] },
        { week: "Week 5", focus: "Unit IV — ensembles", tasks: ["Voting, bagging vs pasting, OOB", "Random forests + feature importance", "AdaBoost + gradient boosting loops", "Stacking with out-of-fold blender"] },
        { week: "Week 6", focus: "Unit V + revision", tasks: ["Curse of dimensionality", "PCA pipeline + explained variance", "Kernel PCA, randomized/incremental PCA", "PAC + VC dimension; two full past papers"] },
      ],
    },
    {
      id: "exam-tips",
      heading: "Exam-hall strategy",
      examTips: [
        "Always pair an algorithm with its diagram — K-Means two-step, EM cycle, boosting loop, PCA pipeline. The diagram earns half the marks.",
        "For the bias-variance question, write bias² + variance + noise = total error and draw the U-curve with the three regimes labelled.",
        "When asked to compare classifiers, use a table with rows = classifiers and columns = boundary shape / scaling needed / strengths / weakness.",
        "For confusion-matrix numericals, draw the 2×2 with TP/FP/FN/TN in the cells before computing any metric.",
        "State assumptions before solving: 'K-Means assumes spherical clusters'; 'NB assumes conditional independence'; 'PCA assumes linearity'.",
        "For PCA, write covariance → eigenvectors → project as three labelled steps — examiners look for the pipeline.",
        "Quote Mitchell's definition verbatim when asked 'what is ML?' — it earns the definition mark.",
        "Time-box: 1-mark ≤ 3 min, 5-mark ≤ 12 min, 10-mark ≤ 22 min.",
      ],
    },
    {
      id: "slips",
      heading: "Common slips that cost easy marks",
      bullets: [
        "Fitting the scaler on the full dataset instead of train only — leaks test information.",
        "Saying logistic regression is for regression — it is a classifier with a sigmoid output.",
        "Confusing precision (TP/(TP+FP)) with recall (TP/(TP+FN)) — write the formula each time.",
        "Forgetting that trees and forests need no scaling — a standard contrast question.",
        "Saying bagging reduces bias — it reduces variance; boosting reduces bias.",
        "Choosing d in PCA by 'round number' instead of explained-variance ratio.",
        "Conflating VC dimension with number of parameters — they relate but are not the same.",
        "Forgetting that K-Means converges to a local optimum — mention restarts / K-Means++.",
      ],
    },
  ],
};
