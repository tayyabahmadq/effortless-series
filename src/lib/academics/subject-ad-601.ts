/**
 * Academics — AD-601 Deep Learning (RGPV AI&DS, Semester VI).
 *
 * Follows the shared academics schema: 5 units, one chapter each, 41 numbered
 * sections. Every section carries body paragraphs, bullets, exactly one
 * diagram, a callout, key terms, three exam questions, and a code sample or
 * table — so any single section can back a full 7-mark answer.
 */

import type { AcademicSubject } from "./types";

export const ad601: AcademicSubject = {
  id: "ad-601",
  code: "AD-601",
  title: "Deep Learning",
  semester: "VI Semester",
  program: "RGPV · Artificial Intelligence & Data Science",
  tagline:
    "The complete visual guide to deep learning: perceptrons and backpropagation, CNNs from LeNet to ResNet, RNNs and attention, autoencoders, VAEs and GANs, and the frameworks that run it all.",
  description:
    "Five units walk from a single artificial neuron to full generative models. Unit I builds the mathematics of learning — perceptron, MLP, activation functions, gradient descent and backpropagation. Unit II turns to vision with convolutions, pooling and the LeNet-AlexNet-VGG-ResNet lineage. Unit III handles sequences with RNNs, LSTM, GRU, seq2seq and attention. Unit IV opens the generative world of autoencoders, VAEs, GANs and RBMs. Unit V closes with detection, segmentation, transformers, BERT and the TensorFlow/PyTorch workflows. Every section pairs formulas with a dimension trace, a redrawable diagram and exam-ready questions.",
  accentColor: "#e879f9",
  emoji: "DL",
  unitCount: 5,
  totalSections: 41,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Neural Network Foundations",
      summary:
        "From the biological neuron to the perceptron, multilayer networks, activation functions, gradient descent and the backpropagation algorithm — plus the hyperparameters, initialization schemes and training dynamics that decide whether a network actually learns.",
      chapter: {
        number: "01",
        title: "Perceptrons, Backpropagation and the Art of Training",
        intro:
          "Unit I builds the machine that every later unit reuses. We start with one artificial neuron and its learning rule, stack neurons into a multilayer perceptron, choose activation functions that keep gradients alive, minimize a loss by gradient descent, and compute the gradients themselves by backpropagation. The unit closes with the practical craft: hyperparameters, weight initialization, vanishing and exploding gradients, and reading learning curves.",
        inOneBreath:
          "Neuron computes z = Wx + b and a = sigma(z); a perceptron with a step function cannot solve XOR, so we stack layers with nonlinear activations; training = minimize loss L by repeatedly stepping weights against the gradient w := w - eta * dL/dw; backprop computes every dL/dw with one forward and one backward pass using the chain rule; good initialization (Xavier/He), a sensible learning rate and regularization keep the gradients alive and the validation curve honest.",
        sections: [
          {
            number: "1.1",
            title: "The biological neuron and the perceptron",
            body: [
              "A biological neuron receives electrical signals through branching dendrites, sums them in the cell body, and fires a pulse down the axon when the summed signal crosses a threshold. The 1943 McCulloch-Pitts model captured this as a binary threshold unit, and in 1958 Rosenblatt turned it into the perceptron: the first artificial neuron that learns its own weights from data. Deep learning is, at its core, the industrialization of this simple idea — millions of such units arranged in layers and trained by a single algorithm.",
              "The artificial neuron computes in two steps. First a net input, the weighted sum of inputs plus a bias: z = w1*x1 + w2*x2 + ... + wn*xn + b, written compactly as z = Wx + b. Second, an activation function applied to z, typically a step function in the perceptron: output y = 1 if z >= 0, else 0. Geometrically, the perceptron computes the signed distance of the point x from the hyperplane w.x + b = 0; it is a linear classifier that cuts the input space into two half-planes, one for each output.",
              "Learning is the perceptron convergence procedure. For each training sample with target t and prediction y, update the weights: w := w + eta*(t - y)*x and b := b + eta*(t - y), where eta is the learning rate. If the prediction was correct, t - y = 0 and nothing changes; if the neuron fired when it should not have, the weights move away from x; if it stayed silent when it should have fired, they move toward x. Rosenblatt proved that if the data are linearly separable, this loop reaches zero error in finitely many updates — the perceptron convergence theorem.",
              "A worked example shows both the power and the limit. The OR function on inputs (0,0), (0,1), (1,0), (1,1) with targets (0,1,1,1) is separable: starting from w = (0,0), b = 0 and eta = 0.2, the update rule converges in a few epochs to roughly w = (0.2, 0.2), b = -0.2, which classifies all four points correctly. Now try XOR with targets (0,1,1,0): no single straight line can put the two 1-points on one side and the two 0-points on the other, so the perceptron cycles forever. This single counterexample in Minsky and Papert's 1969 book stalled neural network research for over a decade.",
              "The limitations of the perceptron define the rest of the unit. A step function has zero derivative almost everywhere, so gradient-based learning cannot pass through it; we replace it with smooth activations such as sigmoid and ReLU. A single linear boundary cannot express XOR; we stack neurons in layers so that layer one forms several lines and layer two combines them into nonlinear regions. And a hand-crafted update rule does not scale; we replace it with gradient descent computed by backpropagation. Every component of Sections 1.2 through 1.8 exists to fix one of these three walls.",
            ],
            bullets: [
              "Artificial neuron: compute net input z = Wx + b, then output a = activation(z).",
              "The perceptron is a linear binary classifier; its decision surface is the hyperplane w.x + b = 0.",
              "Learning rule: w := w + eta*(t - y)*x — move toward x on a miss, away on a false alarm, stay put when correct.",
              "Perceptron convergence theorem: if the data are linearly separable, the rule finds a separator in finitely many updates.",
              "OR gate: converges quickly; XOR gate: provably impossible for a single perceptron.",
              "Two fixes set up deep learning: smooth nonlinear activations, and multiple layers of neurons.",
              "Minsky and Papert (1969) highlighted the XOR limit, causing the first 'AI winter' for neural nets.",
            ],
            keyTerms: [
              { term: "Net input z", definition: "The weighted sum of inputs plus bias: z = Wx + b, the pre-activation value." },
              { term: "Perceptron", definition: "Rosenblatt's binary threshold neuron trained by the error-driven rule w := w + eta*(t - y)*x." },
              { term: "Linearly separable", definition: "A dataset that a single hyperplane can split perfectly into the two classes." },
              { term: "Learning rate eta", definition: "The step size multiplier in every weight update; the single most important hyperparameter." },
            ],
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "The XOR argument is the single most asked Unit-I short question. Be ready to draw the four XOR points on a 2D grid, show that no line separates them, and state the fix: a hidden layer with a nonlinear activation turns XOR into a two-layer problem.",
            },
            diagram: {
              kind: "flow",
              title: "One perceptron training iteration",
              caption:
                "Present, predict, compare, correct - the loop that repeats for every sample until the error stops.",
              steps: [
                { label: "Present sample x", note: "inputs x1..xn with target t" },
                { label: "Compute z = Wx + b" },
                { label: "Predict y = step(z)" },
                { label: "Error e = t - y" },
                { label: "Update w += eta * e * x", note: "zero change when e = 0" },
                { label: "Repeat until no errors", note: "guaranteed only for separable data" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "A perceptron learning the OR function from scratch.",
              code: `import numpy as np

X = np.array([[0, 0], [0, 1], [1, 0], [1, 1]])
t = np.array([0, 1, 1, 1])              # OR targets
w = np.zeros(2); b = 0.0; eta = 0.2

for epoch in range(10):
    errors = 0
    for x, target in zip(X, t):
        z = np.dot(w, x) + b
        y = 1 if z > 0 else 0            # step activation
        e = target - y
        w = w + eta * e * x              # perceptron update
        b = b + eta * e
        errors += abs(e)
    if errors == 0:
        break
print("w =", w, "b =", b, "epochs:", epoch + 1)`,
            },
            examQuestions: [
              {
                q: "Describe the structure and working of an artificial neuron / perceptron. State its learning rule, prove it learns the OR function, and explain with a diagram why it cannot learn XOR.",
                marks: 7,
                outline: [
                  "Draw the neuron: inputs x1..xn, weights, summer, threshold block, output.",
                  "Give the two-step computation: z = Wx + b, y = step(z).",
                  "State the geometric view: a hyperplane dividing the input space into two half-planes.",
                  "Derive the update rule w := w + eta*(t - y)*x and explain each case of t - y.",
                  "Trace OR for all four inputs from w = (0,0), b = 0 until zero error.",
                  "Plot the four XOR points and show no single line separates classes 0 and 1.",
                  "Conclude with the fix: add a hidden layer with a nonlinear activation.",
                ],
              },
              {
                q: "Write the perceptron convergence theorem and state its one precondition.",
                marks: 2,
                outline: [
                  "If the training set is linearly separable, the perceptron algorithm makes only finitely many weight updates.",
                  "Precondition: a separating hyperplane (a finite margin) must exist.",
                ],
              },
              {
                q: "How many inputs does a perceptron need to separate the AND function, and what inequality must its weights satisfy? Give one valid (w, b).",
                marks: 3,
                outline: [
                  "Two inputs x1, x2; output 1 exactly when x1 = 1 and x2 = 1.",
                  "Need w1*x1 + w2*x2 + b >= 0 only at (1,1) and < 0 elsewhere.",
                  "Example: w1 = w2 = 1, b = -1.5 works for all four cases.",
                ],
              },
            ],
          },
          {
            number: "1.2",
            title: "Multilayer perceptron (MLP) architecture",
            body: [
              "A multilayer perceptron (MLP), also called a feedforward neural network or fully connected network, chains the single neuron of Section 1.1 into layers. An input layer holds the raw features (it does no computation), one or more hidden layers transform them, and an output layer produces the predictions. Every neuron in one layer connects to every neuron in the next — hence 'fully connected' or 'dense' — and information flows strictly forward, from input to output, with no loops.",
              "The forward pass is a sequence of matrix multiplications. For a network with one hidden layer of H units: a1 = sigma(W1*x + b1) at the hidden layer, then y = W2*a1 + b2 at the output layer (plus an output activation such as softmax for classification). Each layer's weight matrix has shape (units_out x units_in). A dimension trace makes the parameter count concrete: input x has 3 features, hidden layer 1 has 4 units (W1 is 4x3 = 12 weights + 4 biases), hidden layer 2 has 5 units (5x4 = 20 + 5), output has 3 units (3x5 = 15 + 3) — 62 parameters in total. Modern networks repeat this counting to millions.",
              "Why do layers add power? Each hidden neuron draws one hyperplane; a hidden layer of H neurons draws H hyperplanes, and the next layer votes over the regions they create. Two hidden layers with enough units can carve the input space into essentially arbitrary-shaped regions. This is the content of the universal approximation theorem (Cybenko 1989, Hornik 1991): a feedforward network with a single hidden layer of sufficiently many nonlinear units can approximate any continuous function on a compact set to arbitrary accuracy. The theorem guarantees existence, not learnability — 'sufficiently many' may be astronomically large, and gradient descent is not promised to find those weights.",
              "Depth versus width is the practical trade-off. Universal approximation says one wide layer suffices in theory, but experience shows deep narrow networks need exponentially fewer units than shallow wide ones for the same function, because each level composes the previous level's features into more abstract ones (edges -> motifs -> parts -> objects in vision). Depth costs training difficulty: the deeper the chain of computations, the more the gradient can shrink or explode on its way back — the vanishing gradient problem of Section 1.7, which motivates ReLU activations, careful initialization and skip connections (ResNet, Unit II).",
              "Choosing an architecture is a design decision with rules of thumb. Input size equals feature count (or pixels). Output size equals the number of classes for classification, or 1 with a linear activation for regression. Widths between 32 and 1024 per hidden layer cover most course-sized problems; 1-3 hidden layers handle tabular data, and MLPs with many layers are reserved for problems where locality does not help (if it does, CNNs of Unit II are the right tool). The number of trainable parameters P for layer i is ni*ni+1 + ni+1 — always able to state this formula earns the first marks in any architecture question.",
            ],
            bullets: [
              "MLP = input layer (no computation) + hidden layer(s) + output layer; connections are dense, flow is strictly forward.",
              "Forward pass per layer: a(l) = sigma(W(l) * a(l-1) + b(l)).",
              "Parameter count for layer i: ni * ni+1 weights + ni+1 biases; total across all layers gives model size.",
              "Universal approximation theorem: one hidden layer with enough nonlinear units approximates any continuous function on a compact set.",
              "Depth composes features hierarchically and often needs far fewer units than a single wide layer.",
              "Deep stacks make gradients unstable in return — the motivation for ReLU, good init and ResNets.",
              "Output sizing: #classes neurons + softmax for classification; 1 neuron + linear for regression.",
            ],
            keyTerms: [
              { term: "Hidden layer", definition: "A layer between input and output whose values are computed by the network and never observed directly." },
              { term: "Fully connected (dense)", definition: "Every neuron of one layer connects to every neuron of the next; layer params = ni*ni+1 + ni+1." },
              { term: "Universal approximation theorem", definition: "A single hidden layer with enough nonlinear units can approximate any continuous function on a compact domain." },
              { term: "Forward pass", definition: "Evaluating the network input-to-output through successive a = sigma(Wx + b) computations." },
            ],
            callout: {
              type: "warning",
              title: "Common mistake",
              body: "Students often count biases as part of the weight matrix or forget them entirely. Write the count as (units_in * units_out) + units_out per layer and show the arithmetic — examiners award method marks for the trace even if a number slips.",
            },
            diagram: {
              kind: "layers",
              title: "An MLP with two hidden layers (top = output)",
              caption:
                "Each arrow in the real network is a full weight matrix; shapes shown for the 3-4-5-3 example.",
              layers: [
                { label: "Output layer: 3 units", note: "softmax or linear, predicts the answer" },
                { label: "Hidden layer 2: 5 units", note: "W2: 5x4, 25 weights + 5 biases" },
                { label: "Hidden layer 1: 4 units", note: "W1: 4x3, 12 weights + 4 biases" },
                { label: "Input layer: 3 features", note: "raw values, no weights" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "Forward pass of a 3-4-2 MLP in raw numpy.",
              code: `import numpy as np

x  = np.array([0.5, -1.0, 0.25])         # input vector: 3 features
W1 = np.random.randn(4, 3) * 0.5          # hidden 1: 3 -> 4
b1 = np.zeros(4)
W2 = np.random.randn(2, 4) * 0.5          # hidden 2 / output: 4 -> 2
b2 = np.zeros(2)

h = np.tanh(W1 @ x + b1)                  # hidden activations
y = W2 @ h + b2                           # linear head

print("h:", h.shape, " y:", y.shape)      # (4,) (2,)
print("params:", W1.size + b1.size + W2.size + b2.size)  # 12+4+8+2 = 26`,
            },
            examQuestions: [
              {
                q: "Define a multilayer perceptron. Draw the architecture for a network with a 4-dimensional input, two hidden layers of 8 and 6 units, and a 3-class output, and compute the total number of trainable parameters. State the universal approximation theorem.",
                marks: 7,
                outline: [
                  "Define MLP, hidden layers, dense connectivity, forward-only flow.",
                  "Draw 4 -> 8 -> 6 -> 3 with labelled edges.",
                  "Layer 1: 4*8 + 8 = 40 parameters.",
                  "Layer 2: 8*6 + 6 = 54 parameters.",
                  "Layer 3: 6*3 + 3 = 21 parameters; total 115.",
                  "State the universal approximation theorem precisely (continuous function, compact set, single hidden layer, enough units).",
                  "Note the theorem says nothing about learnability by gradient descent.",
                ],
              },
              {
                q: "What is the difference between the input layer and a hidden layer of an MLP?",
                marks: 2,
                outline: [
                  "The input layer only holds the raw feature vector and performs no computation.",
                  "A hidden layer computes a = sigma(Wx + b) and learns its weights from data.",
                ],
              },
              {
                q: "Why might a deep narrow network be preferable to one very wide hidden layer, even though one hidden layer suffices by universal approximation?",
                marks: 3,
                outline: [
                  "Depth composes features hierarchically; each level builds on the previous.",
                  "Deep nets often need exponentially fewer units for the same function.",
                  "Trade-off: deeper chains make gradients harder to train (vanishing gradients).",
                ],
              },
            ],
          },
          {
            number: "1.3",
            title: "Activation functions",
            body: [
              "An activation function is a fixed nonlinear function applied to each neuron's net input z before it is passed on. Without nonlinearity, a stack of layers collapses algebraically: if every layer computed only a linear map, then y = W3*(W2*(W1*x)) = (W3*W2*W1)*x — one giant linear layer, no more expressive than a single perceptron. The activation is what makes depth meaningful; choosing it is one of the most consequential design decisions in a network.",
              "The classical activations. Sigmoid: sigma(z) = 1 / (1 + e^-z), squashes z into (0, 1) with derivative sigma'(z) = sigma(z)(1 - sigma(z)), which peaks at just 0.25 at z = 0 and dies toward 0 in the tails. Tanh: tanh(z) = (e^z - e^-z)/(e^z + e^-z), range (-1, 1), zero-centered, derivative 1 - tanh^2(z) peaking at 1 — friendlier for optimization than sigmoid but still saturating. Softmax, for classification outputs, turns a vector of scores into a probability distribution: softmax(z)_i = e^zi / sum_j e^zj.",
              "The modern default is the ReLU family. ReLU: a = max(0, z) — derivative 1 for z > 0 and 0 for z < 0. It computes in one comparison, does not saturate for positive inputs, and induces sparse activations (many units output exactly 0). Its weakness is the dead ReLU problem: a unit whose weights push all inputs negative has zero gradient everywhere and never recovers. Two repairs are standard: Leaky ReLU, a = max(0.01*z, z), which keeps a small slope on the negative side, and ELU, a = z if z > 0 else alpha*(e^z - 1), which smooths the negative branch. Parametric ReLU (PReLU) simply learns the negative slope.",
              "A dimension-traced example compares gradients through depth. Consider ten stacked layers of sigmoid units: even in the best case each derivative contributes at most 0.25, so the product of derivatives across the stack is at most 0.25^10 = 9.5e-7 — the gradient arriving at the first layer is a million times smaller than at the last. The same stack with ReLU keeps a derivative of exactly 1 wherever units are active, so gradients pass through unattenuated. This single calculation is why sigmoid hidden layers vanished from practice and ReLU became the default (sigmoid survives only at output layers, where its (0,1) range is exactly what probabilities need).",
              "Selection rules cover every exam case. Hidden layers: ReLU first (fast, non-saturating), Leaky ReLU or ELU if dead units appear. Binary classification output: sigmoid with binary cross-entropy loss. Multi-class output: softmax with categorical cross-entropy. Regression output: linear (no activation). If asked to compare, organize by four properties: range, zero-centered or not, derivative range, and saturation behaviour — a small table with those columns earns full marks for 'compare sigmoid, tanh and ReLU'.",
            ],
            bullets: [
              "Purpose: without nonlinear activations, any depth of network collapses to one linear map.",
              "Sigmoid: range (0,1), derivative sigma(1 - sigma) max 0.25, saturates in both tails.",
              "Tanh: range (-1,1), zero-centered, derivative 1 - tanh^2 max 1, still saturating.",
              "ReLU: max(0, z), derivative 0 or 1, non-saturating for z > 0, cheap, sparse; risk is dead units.",
              "Leaky ReLU / ELU / PReLU keep a nonzero negative branch to avoid dead units.",
              "Softmax converts output scores into a probability distribution for multi-class classification.",
              "Ten sigmoid layers can shrink a gradient by 0.25^10 ~ 1e-6; ReLU keeps it at 1 where active.",
            ],
            keyTerms: [
              { term: "Saturating activation", definition: "An activation whose derivative tends to 0 in the tails (sigmoid, tanh), starving deep networks of gradient." },
              { term: "ReLU", definition: "Rectified Linear Unit, a = max(0, z); the default hidden-layer activation." },
              { term: "Dead ReLU", definition: "A unit stuck on the negative side for every input, with zero gradient and no learning." },
              { term: "Softmax", definition: "Output activation mapping a score vector to probabilities: e^zi / sum e^zj." },
            ],
            callout: {
              type: "tip",
              title: "Remember",
              body: "Derivative of sigmoid is sigma'(z) = sigma(z) * (1 - sigma(z)) and of tanh is 1 - tanh^2(z). These two identities are asked verbatim in short questions and are needed inside every backprop derivation.",
            },
            diagram: {
              kind: "compare",
              title: "Saturating vs non-saturating activations",
              caption:
                "The left column is classical; the right column is what modern hidden layers actually use.",
              left: {
                heading: "Saturating (sigmoid, tanh)",
                items: [
                  "Derivative dies toward 0 in both tails",
                  "Sigmoid derivative peaks at only 0.25",
                  "Products across depth shrink fast (vanishing gradients)",
                  "Sigmoid is not zero-centered; tanh is",
                  "Still used at output layers for probabilities",
                ],
              },
              right: {
                heading: "Non-saturating (ReLU family)",
                items: [
                  "Derivative is exactly 1 for z > 0 — gradients pass intact",
                  "One comparison to compute; fastest option",
                  "Sparse activations: many units output exactly 0",
                  "Risk: dead ReLUs; fix with Leaky ReLU / ELU",
                  "Default choice for all hidden layers today",
                ],
              },
            },
            codeExample: {
              language: "python",
              caption: "Activation functions and their derivatives in numpy.",
              code: `import numpy as np

def sigmoid(z): return 1.0 / (1.0 + np.exp(-z))
def relu(z):    return np.maximum(0.0, z)
def leaky(z, a=0.01): return np.where(z > 0, z, a * z)

z = np.array([-2.0, -0.5, 0.0, 0.5, 2.0])
print(sigmoid(z).round(3))                # [0.119 0.378 0.5 0.622 0.881]
print(relu(z))                            # [0. 0. 0. 0.5 2. ]
print(leaky(z))                           # [-0.02 -0.005 0. 0.5 2. ]
s = sigmoid(0.0)
print("sigma'(0) =", s * (1 - s))         # 0.25 - the max sigmoid derivative
print("relu'     =", (z > 0).astype(float))  # 1 where active, else 0`,
            },
            examQuestions: [
              {
                q: "Define and compare sigmoid, tanh and ReLU with their formulas, ranges and derivatives. Why has ReLU replaced sigmoid in hidden layers? Explain the dead ReLU problem and its remedies.",
                marks: 7,
                outline: [
                  "Give each formula: sigma(z) = 1/(1+e^-z), tanh, ReLU = max(0, z).",
                  "State ranges (0,1), (-1,1), [0, inf) and derivative identities.",
                  "Note saturation: derivative -> 0 in tails for sigmoid and tanh.",
                  "Compute 0.25^10 ~ 1e-6 to show gradient decay through 10 sigmoid layers.",
                  "ReLU advantages: non-saturating, cheap, sparse, derivative 1 when active.",
                  "Dead ReLU: unit always on the negative side, zero gradient, never learns.",
                  "Remedies: Leaky ReLU (small negative slope), ELU, PReLU, careful init.",
                ],
              },
              {
                q: "Write the derivative of the sigmoid function in terms of sigma(z) itself.",
                marks: 2,
                outline: [
                  "sigma'(z) = sigma(z) * (1 - sigma(z)).",
                  "Maximum value 0.25 at z = 0.",
                ],
              },
              {
                q: "What activation should the output layer use for (a) binary classification, (b) 10-class classification, (c) regression on unbounded values? Justify in one line each.",
                marks: 3,
                outline: [
                  "(a) sigmoid - gives one probability in (0,1).",
                  "(b) softmax - turns 10 scores into a distribution summing to 1.",
                  "(c) linear / none - the target range is unbounded.",
                ],
              },
            ],
          },
          {
            number: "1.4",
            title: "Loss functions and gradient descent",
            body: [
              "Training a network means finding weights that minimize a loss function L(w) measuring the mismatch between predictions and targets. For each sample the network contributes a per-sample loss, and the total loss is the average over the training set. The two workhorses: mean squared error (MSE), L = (1/N) * sum (y_i - t_i)^2, used for regression; and cross-entropy, L = -(1/N) * sum [t_i * log(y_i)], used for classification, where y_i are softmax or sigmoid probabilities. Cross-entropy pairs naturally with softmax because the pair's gradient simplifies to y - t — one clean expression instead of a product of derivatives.",
              "Gradient descent minimizes L by walking downhill. The gradient dL/dw is the vector of partial derivatives; it points in the direction of steepest increase, so the update steps the opposite way: w := w - eta * dL/dw, where eta is the learning rate. Repeating this from some initialization traces a path to a (local) minimum. On the squared-error bowl L(w) = (w - 3)^2 with gradient 2(w - 3) and eta = 0.1, starting at w = 0: updates give w = 0.6, 1.08, 1.464, ... converging to 3.0 — each step covers a fraction (1 - 2*eta) of the remaining distance.",
              "Three regimes of eta are worth memorizing, because examiners love the sketch. Too small: convergence is correct but painfully slow — thousands of tiny steps. Too large: each step overshoots the valley floor, the loss oscillates and can diverge to infinity. Just right: smooth, monotone descent, often with a brief initial drop. In practice eta is the first hyperparameter to tune, typical values 1e-4 to 1e-1, and schedules (decay by 10x at plateaus, cosine decay, warmup) often beat any constant value.",
              "Which data the gradient is computed on defines the three descent variants. Batch gradient descent uses the whole training set per update — exact gradient, but one update per pass and far too slow for big data. Stochastic gradient descent (SGD) uses one sample per update — noisy but cheap, and the noise helps escape shallow minima. Mini-batch gradient descent, the universal compromise, uses batches of 32-512 samples: gradient noise is small enough to converge smoothly but large enough to regularize, and a batch is exactly what a GPU processes in parallel. Momentum improves all three by accumulating a velocity v := gamma*v + eta*grad and stepping by v, damping oscillations across ravines and accelerating along consistent directions.",
              "Limitations to state honestly: gradient descent finds local minima and saddle points in non-convex loss surfaces (though in over-parameterized deep nets most local minima are near-global in practice); it is sensitive to feature scaling (always normalize inputs); and plain descent uses the same step size for every coordinate, unlike adaptive optimizers such as Adam which keep per-parameter learning rates — the standard default in modern code.",
            ],
            bullets: [
              "Loss = average per-sample mismatch; MSE for regression, cross-entropy for classification.",
              "Update rule: w := w - eta * dL/dw; eta is the learning rate.",
              "Too-small eta: slow convergence; too-large eta: oscillation and divergence; tuned eta: smooth descent.",
              "Batch GD: full dataset per step, exact but slow; SGD: one sample, noisy; mini-batch: 32-512 samples, the standard.",
              "Momentum: v := gamma*v + eta*grad, step by v — damps oscillation, accelerates consistent descent.",
              "Adam adapts per-parameter learning rates from first and second moment estimates; the modern default.",
              "Softmax + cross-entropy gives the clean gradient y - t; always scale input features.",
            ],
            keyTerms: [
              { term: "Cross-entropy loss", definition: "L = -sum t*log(y); the standard classification loss, paired with softmax/sigmoid outputs." },
              { term: "Learning rate eta", definition: "Step size of gradient descent; controls convergence speed and stability." },
              { term: "Mini-batch SGD", definition: "Gradient descent over batches of 32-512 samples; balances gradient accuracy, noise and GPU efficiency." },
              { term: "Momentum", definition: "Accumulate velocity v := gamma*v + eta*grad and move by v; gamma typically 0.9." },
            ],
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "When asked to 'explain gradient descent with an example', always include the one-dimensional worked trace. Three or four numeric updates of L(w) = (w-3)^2 showing w -> 3.0 demonstrate the mechanics concretely and usually carry half the marks.",
            },
            diagram: {
              kind: "fork",
              title: "Choosing the learning rate",
              caption:
                "The loss surface is the valley; eta decides whether you roll down it, crawl, or fly out.",
              start: "Gradient descent step w := w - eta * dL/dw",
              branches: [
                { label: "eta too small", outcome: "tiny steps, loss barely moves, training stalls for thousands of epochs", good: false },
                { label: "eta too large", outcome: "each step overshoots the minimum, loss oscillates or diverges", good: false },
                { label: "eta tuned (with decay)", outcome: "smooth monotone descent to a good minimum", good: true },
              ],
            },
            codeExample: {
              language: "python",
              caption: "Gradient descent on L(w) = (w - 3)^2 with trace.",
              code: `import numpy as np
# L(w) = (w - 3)^2,  gradient dL/dw = 2*(w - 3)

w, eta = 0.0, 0.1
for i in range(60):
    grad = 2 * (w - 3)
    w = w - eta * grad                # the descent step
    if i % 10 == 0:
        print(f"step {i:2d}   w = {w:.4f}   L = {(w-3)**2:.4f}")
print("final w =", round(w, 4))        # -> 3.0, the minimum`,
            },
            examQuestions: [
              {
                q: "Explain gradient descent with its update rule. Describe the effect of a too-small, too-large and well-tuned learning rate, and differentiate batch, stochastic and mini-batch gradient descent.",
                marks: 7,
                outline: [
                  "Define loss and the goal of minimizing it.",
                  "Derive the update w := w - eta * dL/dw from the direction of steepest descent.",
                  "Worked trace on L(w) = (w-3)^2: w = 0, 0.6, 1.08, ... -> 3.",
                  "Too-small eta: slow but safe; sketch the crawling path.",
                  "Too-large eta: overshoot, oscillation, possible divergence.",
                  "Batch vs stochastic vs mini-batch: data per update, gradient noise, cost.",
                  "Mention momentum/Adam as improvements over plain descent.",
                ],
              },
              {
                q: "Why is cross-entropy preferred over mean squared error for classification with softmax outputs?",
                marks: 3,
                outline: [
                  "With softmax + MSE the error gradient factors through softmax derivatives and vanishes when outputs saturate.",
                  "With cross-entropy the combined gradient simplifies to y - t.",
                  "Result: faster learning and no flat-spot stall when the model is confidently wrong.",
                ],
              },
              {
                q: "Write the momentum update equations and explain in one line why momentum helps.",
                marks: 2,
                outline: [
                  "v := gamma*v + eta*grad; then w := w - v.",
                  "It averages recent gradients, damping oscillations across steep ravines and speeding up consistent directions.",
                ],
              },
            ],
          },
          {
            number: "1.5",
            title: "Backpropagation algorithm",
            body: [
              "Backpropagation is the algorithm that computes the gradient of the loss with respect to every weight in the network, using one forward pass and one backward pass. Its engine is the chain rule of calculus applied over the network's computational graph: because the loss is a composition of matrix multiplications and activations, its derivative factorizes into a product of local derivatives. Backpropagation is not a learning algorithm by itself — gradient descent (Section 1.4) does the learning; backpropagation is the efficient method for evaluating the gradient that descent consumes.",
              "The forward pass stores everything it will need. For a two-layer example with a single scalar path: input x, first layer computes a = tanh(w1*x), output layer computes y = w2*a, and loss L = 0.5*(y - t)^2. Each intermediate value (a, y) is cached because the backward pass will differentiate with respect to it. The backward pass then walks the graph in reverse, computing dL/dy = y - t, dL/dw2 = dL/dy * a, dL/da = dL/dy * w2, and finally dL/dw1 = dL/da * (1 - a^2) * x, where (1 - a^2) is the tanh derivative. Each factor is a local derivative of one node; the chain rule multiplies them along the path.",
              "In matrix form the same idea becomes compact layer equations. Define the error delta at the output layer as delta_L = (y - t) (for softmax + cross-entropy) or delta_L = (y - t) * output-derivative. Then propagate backward layer by layer: delta_l = (W_{l+1}^T * delta_{l+1}) * sigma'(z_l), and each weight gradient is dL/dW_l = delta_l * a_{l-1}^T with dL/db_l = sum of delta_l over the batch. Two properties make this efficient: reusing the forward-pass activations (no recomputation), and sharing computation across all weights in a layer (the same delta serves every weight in that layer). The cost of a full gradient is roughly the cost of two forward passes — dramatically cheaper than the naive approach of perturbing each weight individually, which would cost one forward pass per weight.",
              "A complete numeric trace is the highest-yield exam artefact. Take x = 1.5, t = 1.0, w1 = 0.8, w2 = 0.6, eta = 0.5. Forward: a = tanh(1.2) = 0.8337, y = 0.6 * 0.8337 = 0.5002, L = 0.5*(0.5002 - 1)^2 = 0.1249. Backward: dL/dy = -0.4998; dL/dw2 = -0.4998 * 0.8337 = -0.4167; dL/da = -0.4998 * 0.6 = -0.2999; dL/dw1 = -0.2999 * (1 - 0.8337^2) * 1.5 = -0.2999 * 0.3050 * 1.5 = -0.1372. Update: w1 = 0.8 + 0.5*0.1372 = 0.8686, w2 = 0.6 + 0.5*0.4167 = 0.8084. One iteration of training, entirely by hand — repeat three or four times and L visibly falls.",
              "Advantages and limits, stated as examiners expect. Advantages: computes all weight gradients in one forward-plus-backward sweep (cost proportional to network size, not weight count); works for arbitrary differentiable architectures, which is why modern frameworks autodiff every model; is exact, not an approximation. Limits: requires differentiable activations; the chain of products is what produces vanishing or exploding gradients in deep stacks (Section 1.7); and it needs the full forward activation memory, which is why training uses far more memory than inference.",
            ],
            bullets: [
              "Backprop = chain rule applied over the computational graph, backward from the loss.",
              "Forward pass caches activations; backward pass reuses them — no recomputation.",
              "Output delta for softmax + cross-entropy is simply delta = y - t.",
              "Layer recurrence: delta_l = (W_{l+1}^T * delta_{l+1}) * sigma'(z_l); dL/dW_l = delta_l * a_{l-1}^T.",
              "Cost is ~2x a forward pass, independent of the number of weights — vs one pass per weight naively.",
              "Requirements: differentiable activations; deep chains risk vanishing/exploding gradients.",
              "Frameworks (TensorFlow, PyTorch) automate backprop with automatic differentiation.",
            ],
            keyTerms: [
              { term: "Chain rule", definition: "dL/dw = dL/dy * dy/da * da/dw — derivatives multiply along the computation path." },
              { term: "Delta (error signal)", definition: "The gradient of the loss w.r.t. a layer's net input; propagated backward layer by layer." },
              { term: "Computational graph", definition: "The directed graph of operations from weights to loss that backprop traverses in reverse." },
              { term: "Automatic differentiation", definition: "Framework machinery that builds the graph and applies backpropagation for any model code." },
            ],
            callout: {
              type: "warning",
              title: "Common mistake",
              body: "Backpropagation and gradient descent are NOT the same thing. Backprop computes the gradients; gradient descent uses them to update weights. Write 'backprop + gradient descent = training' — conflating the two is a classic lost mark.",
            },
            diagram: {
              kind: "pipeline",
              title: "One training iteration = forward pass + backward pass",
              caption:
                "Every stage feeds the next; the backward stages mirror the forward ones in reverse order.",
              stages: [
                { label: "Forward pass", note: "cache z and a for every layer" },
                { label: "Compute loss L", note: "compare prediction with target" },
                { label: "Output delta", note: "delta = y - t for softmax + cross-entropy" },
                { label: "Backward through layers", note: "delta_l = (W^T delta) * sigma'(z)" },
                { label: "Weight gradients", note: "dL/dW = delta * a^T for each layer" },
                { label: "Update w := w - eta * dL/dW", note: "repeat over the dataset" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "Hand-rolled backprop for a two-layer scalar network.",
              code: `import numpy as np

x, t = 1.5, 1.0
w1, w2, eta = 0.8, 0.6, 0.5      # y = w2 * tanh(w1 * x)

for step in range(20):
    a  = np.tanh(w1 * x)          # forward: cache activations
    y  = w2 * a
    L  = 0.5 * (y - t) ** 2
    dL_dy  = y - t                # output delta
    dL_dw2 = dL_dy * a            # chain rule, outer weight
    dL_da  = dL_dy * w2
    dL_dw1 = dL_da * (1 - a**2) * x   # tanh'(z) = 1 - tanh^2
    w1 -= eta * dL_dw1
    w2 -= eta * dL_dw2
print("loss:", round(L, 4))       # 0.1249 -> falls every step`,
            },
            examQuestions: [
              {
                q: "Derive the backpropagation equations for a 2-2-1 network with sigmoid activations and MSE loss, and carry out one full numeric iteration (forward and backward) with given weights.",
                marks: 7,
                outline: [
                  "Draw the network and label z, a for each layer.",
                  "Forward: a1 = sigma(W1 x), y = sigma(W2 a1), L = 0.5 (y - t)^2.",
                  "Output delta: dL/dy = y - t; dL/dz2 = (y - t) * y (1 - y).",
                  "Hidden delta: dL/dz1 = W2^T delta2 * a1 (1 - a1).",
                  "Weight gradients: dL/dW = delta * a_prev^T for both layers.",
                  "Insert the numbers, compute both weight updates with eta.",
                  "State the computational advantage: one pass gives all gradients.",
                ],
              },
              {
                q: "What is the difference between backpropagation and gradient descent?",
                marks: 2,
                outline: [
                  "Backpropagation computes the gradients dL/dw efficiently via the chain rule.",
                  "Gradient descent uses those gradients to update weights: w := w - eta * dL/dw.",
                ],
              },
              {
                q: "Why is backpropagation more efficient than numerical (finite-difference) differentiation for a network with millions of weights?",
                marks: 3,
                outline: [
                  "Finite differences need one forward pass (plus epsilon perturbation) per weight — millions of passes.",
                  "Backprop gets ALL gradients in one forward + one backward pass.",
                  "It reuses cached activations and shares deltas across each layer's weights.",
                ],
              },
            ],
          },
          {
            number: "1.6",
            title: "Hyperparameters: learning rate, batch size and beyond",
            body: [
              "Hyperparameters are the training configuration values set by the engineer before training, as opposed to parameters (the weights), which the training procedure itself learns. The core set: learning rate eta, batch size, number of epochs, momentum, network shape (depth and width per layer), and regularization strengths (dropout rate, L2 weight decay). Nothing in the gradient equations fixes these values — they come from theory of thumb, published defaults, and systematic search.",
              "The learning rate dominates everything else. It multiplies the gradient in every update, so it sets the scale of every step: too large and training diverges (loss becomes NaN), too small and training crawls or stops at a poor plateau. A standard search order of magnitude: try 1e-2, 1e-3, 1e-4 with the same short run, pick the fastest stable one, then refine. Learning-rate schedules refine the constant: step decay (divide by 10 at fixed epochs), cosine annealing, and warmup (ramp up from near-zero at the start of large-batch training) all reliably beat a flat rate.",
              "Batch size trades gradient accuracy against throughput. Small batches (8-64) give noisy gradients — which acts as implicit regularization and often generalizes better — but waste GPU parallelism. Large batches (256+) use hardware efficiently and give smoother curves, but pure large-batch training can converge to sharp minima that generalize worse, and it usually demands a higher learning rate (the linear scaling rule: multiply eta roughly in proportion to batch size). The practical sweet spot for coursework and Kaggle-scale data is 32 to 128. Epochs (full passes over the training set) are less a choice than a stopping condition — monitored by validation loss with early stopping rather than fixed in advance.",
              "How to search: grid search evaluates every combination on a small grid (fine for 2-3 hyperparameters), random search samples configurations randomly and finds good regions faster in high dimensions (Bergstra and Bengio 2012), and Bayesian optimization models which regions of the space look promising. Whatever the method, the protocol is fixed: split off a validation set, tune on validation performance only, and touch the test set once at the end. Tuning against the test set is leakage and inflates every reported number.",
              "A compact table of the working ranges covers the exam ask. Values below are for a mid-sized MLP or CNN; scale up only with evidence from learning curves.",
            ],
            bullets: [
              "Hyperparameters are chosen before training; parameters (weights) are learned during it.",
              "Learning rate is the first knob to tune; search in powers of 10 (1e-2, 1e-3, 1e-4).",
              "Schedules beat constants: step decay, cosine annealing, warmup for large batches.",
              "Batch size: small = noisy + regularizing, large = efficient but may need eta scaling; 32-128 is the default zone.",
              "Epochs: stop on validation loss (early stopping), not on a fixed count.",
              "Search methods: grid for few knobs, random for many, Bayesian to model the space.",
              "Tune only on the validation split; the test set is evaluated exactly once.",
            ],
            keyTerms: [
              { term: "Hyperparameter", definition: "A training-configuration value (learning rate, batch size, width) fixed before training." },
              { term: "Epoch", definition: "One complete pass of the training set through the network." },
              { term: "Learning-rate schedule", definition: "A predetermined plan for changing eta during training (decay, cosine, warmup)." },
              { term: "Early stopping", definition: "Halting training when validation loss stops improving, keeping the best weights." },
            ],
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "'Differentiate parameters and hyperparameters' is a perennial 2-marker. One line each: parameters are learned by the optimizer (weights, biases); hyperparameters are set by the engineer to control the learning process (learning rate, batch size, layers).",
            },
            diagram: {
              kind: "matrix",
              title: "The learning-rate x batch-size plane",
              caption:
                "Four training regimes - most practical runs live in the bottom-left to top-left band.",
              axes: { x: "learning rate (small -> large)", y: "batch size (large -> small)" },
              quadrants: [
                { label: "Large batch + small lr", note: "stable but slow; often underfit within the budget" },
                { label: "Small batch + small lr", note: "noisy but cautious; safe, sometimes crawls" },
                { label: "Large batch + large lr", note: "smooth-looking loss, sharp minima, poor generalization risk" },
                { label: "Small batch + large lr", note: "chaotic updates; divergence or lucky escapes" },
              ],
            },
            table: {
              caption: "Working ranges of the core hyperparameters.",
              headers: ["Hyperparameter", "Typical range", "Too large / too small"],
              rows: [
                ["Learning rate", "1e-4 to 1e-1", "diverges (NaN) / crawls or stalls at a plateau"],
                ["Batch size", "16 to 512", "wastes GPU, noisy / sharp minima, memory blow-up"],
                ["Epochs", "10 to 200", "wasted compute / underfit — use early stopping"],
                ["Momentum", "0.0 to 0.99", "oscillation / slow ravine crossing"],
                ["Hidden width", "32 to 1024", "overfit + slow / underfit"],
                ["Dropout rate", "0.2 to 0.5", "underfit / barely regularizes"],
                ["L2 weight decay", "1e-6 to 1e-3", "underfit / no effect"],
              ],
            },
            examQuestions: [
              {
                q: "List the important hyperparameters of a neural network, give typical ranges, and explain how you would systematically tune the learning rate and batch size.",
                marks: 7,
                outline: [
                  "Define hyperparameter vs parameter.",
                  "List: learning rate, batch size, epochs, momentum, width/depth, dropout, weight decay.",
                  "Learning-rate search in powers of 10 with short runs; pick fastest stable.",
                  "Explain decay schedules (step, cosine) as the refinement.",
                  "Batch-size trade-off: noise/regularization vs GPU efficiency.",
                  "Mention the linear scaling rule connecting batch size and eta.",
                  "Protocol: validation set for tuning, test set only once at the end.",
                ],
              },
              {
                q: "What is early stopping and which curve does it monitor?",
                marks: 2,
                outline: [
                  "Stop training when validation loss stops improving for a patience window.",
                  "Keep the best-validation weights; it is a regularization method.",
                ],
              },
              {
                q: "Why does random search often beat grid search when many hyperparameters matter?",
                marks: 3,
                outline: [
                  "Grid spends equal effort on every dimension, including irrelevant ones.",
                  "Random search samples more distinct values of the important dimensions.",
                  "Bergstra and Bengio (2012): fewer runs to find a good region.",
                ],
              },
            ],
          },
          {
            number: "1.7",
            title: "Weight initialization and vanishing/exploding gradients",
            body: [
              "Initialization decides whether training starts alive. If every weight is zero, every neuron in a layer receives the same gradient and receives the same update — the network is stuck in a perfectly symmetric state and never differentiates its units. Small random weights break symmetry, but the scale matters as much as the randomness: too small and activations shrink layer by layer toward zero; too large and they saturate tanh/sigmoid or blow up ReLU stacks. The fix is variance-controlled random initialization.",
              "Two formulas rule the field. Xavier (Glorot) initialization draws weights from a distribution with variance 2/(fan_in + fan_out) (uniform: limit sqrt(6/(fan_in+fan_out))); it is designed for sigmoid/tanh layers, keeping activation variance stable across layers. He (Kaiming) initialization uses variance 2/fan_in (uniform: sqrt(6/fan_in)); it is designed for ReLU, whose zeroing of half the inputs halves the variance a forward pass preserves. Rule of thumb: He for ReLU-family hidden layers, Xavier for tanh/sigmoid — writing both formulas earns the marks.",
              "Vanishing gradients are the deep-stack disease. During backprop, the gradient at layer l contains the product of derivatives of every layer between l and the loss. Sigmoid contributes at most 0.25 per layer, so through 10 layers the signal can shrink to 0.25^10 ~ 9.5e-7: early layers receive essentially no learning signal and stop training, so the network's front end stays random. Symptoms: loss decreases but slowly, early-layer weight histograms never move. Remedies: ReLU activations (derivative 1 where active), He initialization, batch normalization, residual/skip connections (Unit II), and gating (LSTM, Unit III).",
              "Exploding gradients are the mirror disease: when successive Jacobians have norm greater than 1, the product grows exponentially and the update becomes NaN. It is most common in recurrent networks (Section 3.3) and deep untrained stacks. The cheap, universal remedy is gradient clipping: if the global norm g of the gradient exceeds a threshold (typically 1-5), rescale the whole gradient vector by threshold/g — direction preserved, magnitude capped. Other levers: smaller learning rate, better initialization, batch normalization.",
              "Diagnostics are quick and worth citing. Watch the gradient norms per layer during the first hundred steps: healthy training shows similar magnitudes across layers; a 1000x drop from output to input layer signals vanishing; NaN within a few steps signals exploding. Standard Keras/Torch training logs plus a one-line norm check catch both diseases before they waste a GPU-week.",
            ],
            bullets: [
              "Zero init keeps all neurons identical (symmetry problem) — never initialize to zero (except biases).",
              "Xavier init: variance 2/(fan_in + fan_out); suited to sigmoid/tanh layers.",
              "He init: variance 2/fan_in; suited to ReLU layers.",
              "Vanishing gradients: product of derivatives < 1 across depth; sigmoid's 0.25 max makes it worst.",
              "Exploding gradients: product of norms > 1; shows up as NaN; fix with gradient clipping.",
              "Structural remedies: ReLU, batch norm, skip connections (ResNet), gated cells (LSTM).",
              "Diagnose by printing per-layer gradient norms; healthy nets have similar norms everywhere.",
            ],
            keyTerms: [
              { term: "Xavier (Glorot) init", definition: "Weight variance 2/(fan_in + fan_out); default for tanh/sigmoid layers." },
              { term: "He init", definition: "Weight variance 2/fan_in; default for ReLU layers." },
              { term: "Vanishing gradient", definition: "Backpropagated gradients shrink exponentially with depth, freezing early layers." },
              { term: "Gradient clipping", definition: "Rescale the gradient when its norm exceeds a threshold; the standard exploding-gradient fix." },
            ],
            callout: {
              type: "tip",
              title: "Remember",
              body: "Pair the formula to the activation: He goes with ReLU (2/fan_in), Xavier goes with tanh/sigmoid (2/(fan_in + fan_out)). Mixing them up is the most common slip in this topic.",
            },
            diagram: {
              kind: "pyramid",
              title: "Gradient magnitude through a 10-layer sigmoid stack (top = output)",
              caption:
                "Each tier multiplies by at most 0.25 - by the bottom tier the learning signal has evaporated.",
              tiers: [
                { label: "Layer 10 (near loss): grad ~ 1", note: "healthy learning signal" },
                { label: "Layer 7: grad ~ 0.25^3", note: "already ~ 100x smaller" },
                { label: "Layer 4: grad ~ 0.25^6", note: "~ 4000x smaller" },
                { label: "Layer 1 (input side): grad ~ 0.25^10 ~ 1e-6", note: "effectively frozen" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "Xavier vs He initialization, and the vanishing product.",
              code: `import numpy as np

fan_in, fan_out = 784, 128
w_xavier = np.random.randn(fan_in, fan_out) * np.sqrt(1.0 / fan_in)
w_he     = np.random.randn(fan_in, fan_out) * np.sqrt(2.0 / fan_in)
print("xavier std:", w_xavier.std().round(4), " he std:", w_he.std().round(4))

# why scale matters: product of sigmoid derivatives through 10 layers
g = 1.0
for _ in range(10):
    g *= 0.25                    # max derivative of sigmoid
print("gradient factor after 10 sigmoid layers:", g)   # ~ 9.5e-07`,
            },
            examQuestions: [
              {
                q: "What is the vanishing gradient problem? Explain its cause mathematically, describe its symptoms, and list four remedies.",
                marks: 7,
                outline: [
                  "Definition: gradients shrink exponentially as they propagate toward early layers.",
                  "Cause: chain rule multiplies one derivative per layer; sigmoid max derivative 0.25.",
                  "Numeric: 0.25^10 ~ 1e-6 through a 10-layer stack.",
                  "Symptoms: early-layer weights barely change; slow or stalled loss.",
                  "Remedy 1: ReLU activations (derivative 1 where active).",
                  "Remedy 2: He initialization; Remedy 3: batch normalization.",
                  "Remedy 4: skip connections (ResNet) / gating (LSTM); mention clipping for the exploding case.",
                ],
              },
              {
                q: "Write the He initialization rule. Why is its variance larger than Xavier's?",
                marks: 3,
                outline: [
                  "He: variance 2/fan_in (or uniform limit sqrt(6/fan_in)).",
                  "ReLU zeroes about half the activations, halving the variance a forward pass carries.",
                  "The extra factor of 2 compensates for that loss.",
                ],
              },
              {
                q: "Why can all-zero weight initialization prevent a network from learning at all?",
                marks: 2,
                outline: [
                  "All neurons in a layer compute identical outputs and receive identical gradients.",
                  "Updates stay symmetric forever, so the network never differentiates its units.",
                ],
              },
            ],
          },
          {
            number: "1.8",
            title: "Training dynamics: epochs, overfitting and learning curves",
            body: [
              "One epoch is one full pass over the training set; one training step is one mini-batch update, so a dataset of 1000 samples with batch size 100 gives 10 steps per epoch. Training runs for many epochs, and the craft is knowing when to stop. The monitoring instrument is the learning curve: loss (and accuracy) plotted per epoch for both the training set and a held-out validation set. Reading that pair of curves correctly is arguably the single most valuable practical skill in the whole subject.",
              "Underfitting: both training and validation loss are high and fall together but plateau above acceptable. The model has too little capacity (too few layers/units, over-regularized) or training is too short (learning rate too small, too few epochs). Fixes: add capacity, train longer, raise the learning rate slightly, reduce regularization. Underfitting is diagnosed before anything else because its remedy is the cheapest.",
              "Overfitting: training loss keeps falling while validation loss falls, flattens, and then turns upward — the network has begun memorizing training examples (including their noise) instead of learning generalizable structure. The gap between train and validation accuracy is the measurement. The remedy toolkit, in order of preference: more data or data augmentation (Unit V); regularization (dropout, L2 weight decay); reduced capacity; early stopping at the validation-loss minimum. The bias-variance framing: underfitting = high bias, overfitting = high variance; deep nets are typically variance-limited.",
              "The data split protocol underlies every honest measurement. Train set (typically 70-80%) fits the weights; validation set (10-15%) tunes hyperparameters and decides when to stop; test set (10-15%) is evaluated once, after all decisions, to estimate real-world performance. Violations to name in an exam: tuning on the test set (leakage), normalizing using test-set statistics, and data augmentation applied to validation/test splits. For small datasets, k-fold cross-validation rotates the validation role across folds and averages the results.",
              "A practical training recipe ties the unit together: normalize inputs; start with ReLU hidden layers + He init; Adam at 1e-3 with batch 32-128; watch train/val curves; on overfit add augmentation, dropout 0.2-0.5, weight decay 1e-4; on underfit add width or depth; stop on validation loss with patience 3-5 epochs. This recipe is exactly what a lab examiner expects to see justified line by line.",
            ],
            bullets: [
              "Epoch = one pass over all training data; steps per epoch = ceil(N / batch size).",
              "Learning curves: plot training AND validation loss per epoch — the pair is the diagnostic.",
              "Underfitting: both curves high and stuck; fix capacity, training length, regularization.",
              "Overfitting: train loss falls while validation rises; the gap measures memorization.",
              "Anti-overfit order: more/augmented data -> dropout + weight decay -> smaller model -> early stopping.",
              "Split protocol: train (fit), validation (tune/stop), test (evaluate once); no leakage.",
              "Small datasets: k-fold cross-validation averages out the split luck.",
            ],
            keyTerms: [
              { term: "Epoch", definition: "One complete pass of the entire training set through the network." },
              { term: "Overfitting", definition: "The model memorizes training data (including noise); training loss falls while validation loss rises." },
              { term: "Underfitting", definition: "The model lacks capacity or training; both training and validation losses stay high." },
              { term: "Validation set", definition: "Held-out data used to tune hyperparameters and decide when to stop training." },
            ],
            callout: {
              type: "warning",
              title: "Common mistake",
              body: "Never report the training accuracy as the model's performance. Examiners specifically look for the validation/test number; quoting the training curve as evidence of a good model is the classic red flag.",
            },
            diagram: {
              kind: "cycle",
              title: "The supervised training loop",
              caption:
                "Each lap is a few epochs; the validation checkpoint decides whether to continue, adjust, or stop.",
              steps: [
                { label: "Sample mini-batch", note: "shuffle indices each epoch" },
                { label: "Forward pass + loss", note: "train batch" },
                { label: "Backward pass + update", note: "backprop + optimizer step" },
                { label: "Validate", note: "loss/accuracy on held-out split" },
                { label: "Compare curves", note: "underfit? overfit? plateau?" },
                { label: "Adjust or stop", note: "lr, capacity, regularization, early stop" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "A monitored Keras training run with early stopping.",
              code: `from tensorflow import keras
from tensorflow.keras import layers

model = keras.Sequential([
    layers.Dense(64, activation="relu", input_shape=(20,)),
    layers.Dropout(0.3),                       # regularization
    layers.Dense(1, activation="sigmoid"),
])
model.compile(optimizer="adam", loss="binary_crossentropy", metrics=["accuracy"])

early = keras.callbacks.EarlyStopping(monitor="val_loss", patience=3,
                                      restore_best_weights=True)
model.fit(X_train, y_train, epochs=100, batch_size=32,
          validation_split=0.2, callbacks=[early], verbose=0)
# training halts when val_loss stops improving for 3 epochs`,
            },
            examQuestions: [
              {
                q: "Explain overfitting and underfitting with labelled learning curves. Give two remedies for each and describe the correct use of training, validation and test sets.",
                marks: 7,
                outline: [
                  "Sketch train vs val loss: overfit = widening gap; underfit = both high.",
                  "Overfit remedy 1: more data / augmentation.",
                  "Overfit remedy 2: dropout, L2 weight decay, smaller model, early stopping.",
                  "Underfit remedy 1: more capacity (width/depth).",
                  "Underfit remedy 2: train longer / raise lr / reduce regularization.",
                  "Splits: train fits weights, validation tunes and stops, test evaluates once.",
                  "Name leakage examples: tuning on test, test statistics in normalization.",
                ],
              },
              {
                q: "A dataset has 10,000 samples and batch size is 200. How many weight updates happen in 5 epochs?",
                marks: 2,
                outline: [
                  "Steps per epoch = 10000 / 200 = 50.",
                  "Total updates = 5 * 50 = 250.",
                ],
              },
              {
                q: "Why is the validation set necessary if we already have a test set?",
                marks: 3,
                outline: [
                  "Hyperparameters and stopping decisions must be made on data not used for fitting.",
                  "If those decisions use the test set, its score becomes optimistically biased (leakage).",
                  "Validation absorbs the selection; test stays untouched for the final estimate.",
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
      title: "Convolutional Neural Networks",
      summary:
        "Why dense layers fail on images, and what fixes them: the convolution operation with stride and padding, pooling, the arithmetic of feature-map sizes and parameter counts, the classic architectures LeNet-5, AlexNet, VGG and ResNet, and transfer learning as the standard way to reuse them.",
      chapter: {
        number: "02",
        title: "Kernels, Architectures and the Vision Pipeline",
        intro:
          "Unit II converts Unit I's generic MLP into a machine built for images. Three structural ideas — local connectivity, weight sharing and translation equivariance — turn millions of dense parameters into a handful of small kernels. We master the convolution and pooling operations with exact size arithmetic, walk the historical architecture lineage from LeNet-5 to ResNet, and finish with transfer learning, the way every real vision project begins.",
        inOneBreath:
          "Conv layer: out = (N + 2P - K)/S + 1 per side, params = K*K*C_in*C_out + C_out; pooling downsamples with no parameters; LeNet proved digits, AlexNet proved ImageNet (ReLU + dropout + GPU), VGG showed depth with uniform 3x3 stacks, ResNet showed 100+ layers need identity skip connections; transfer learning = pretrained backbone + new head, fine-tuned at a small learning rate.",
        sections: [
          {
            number: "2.1",
            title: "From dense layers to convolutions: locality, weight sharing, equivariance",
            body: [
              "Feed a 224x224 RGB image to a dense layer with 1000 outputs and the weight matrix alone has 224*224*3*1000 = 150,528,000 weights — for one layer. Worse, the design ignores what images actually are: the meaning of a pixel depends on its neighbours (locality), and a cat in the top-left corner is detected by the same pattern as a cat in the bottom-right (translation). Dense layers learn independent weights for every input-output pair, so they must re-learn the same edge detector at every position — statistically wasteful and biologically implausible.",
              "Convolutional layers encode the two priors structurally. Local connectivity: each output neuron looks only at a small spatial window (a K x K patch, typically 3x3 or 5x5) of the input, through a small filter called a kernel. Weight sharing: the SAME kernel is slid across every position of the input, so the layer has K*K*C_in*C_out + C_out parameters regardless of image size — a 3x3 conv with 3 input channels and 16 outputs has 3*3*3*16 + 16 = 448 parameters versus 307 million for the dense alternative on a 32x32 image. The output of one kernel over all positions is a feature map; a conv layer produces one feature map per kernel, stacked along the channel axis.",
              "The third property is free. Convolution is equivariant to translation: shift the input, and the feature map shifts by the same amount. This is exactly what vision wants — features should be detected wherever they appear — while classification finally needs invariance (the answer must not move with the object), delivered by pooling layers and global aggregation. The chain equivariance (conv) -> invariance (pool) -> single prediction (softmax) is the canonical CNN template.",
              "The classic hierarchy falls out of stacking: early layers learn edges and colour blobs (small receptive fields), middle layers learn motifs and corners, deeper layers learn object parts and whole objects — the receptive field grows with depth even though every kernel stays 3x3. Parameter counting makes the win concrete: VGG-16 fits in 138M parameters and would need billions as a dense network. Sparse connectivity and weight sharing are also a regularizer: the network can only express functions that respect locality, which happens to match images.",
              "Limits to mention for balance: convolutions assume translation is the only variation that matters (rotation and scale are not handled without augmentation or special layers); the kernel is linear per channel, so nonlinearity (ReLU) between layers is essential; and CNNs lose global spatial precision — pooling discards position, which is why segmentation networks (Unit V) build decoder paths to recover it.",
            ],
            bullets: [
              "Dense layer on a 32x32x3 image with 1000 outputs: ~307M weights; equivalent conv layer: a few hundred.",
              "Local connectivity: each output sees a K x K window; weight sharing: one kernel reused at every position.",
              "Feature map = one kernel's response over the whole image; C_out kernels give C_out feature maps.",
              "Convolution is translation-EQUIVARIANT; pooling + global readout give invariance for classification.",
              "Receptive field grows with depth: edges -> motifs -> parts -> objects.",
              "The locality prior doubles as regularization — the hypothesis space matches image statistics.",
              "What convolutions do NOT give: rotation/scale invariance for free; need augmentation or multi-scale tricks.",
            ],
            keyTerms: [
              { term: "Kernel (filter)", definition: "A small K x K x C_in weight block convolved across the input to produce one feature map." },
              { term: "Weight sharing", definition: "The same kernel weights are used at every spatial position, slashing parameter count." },
              { term: "Feature map", definition: "The spatial response of one kernel over the input; channels of a conv layer = its feature maps." },
              { term: "Receptive field", definition: "The input region that can influence one output neuron; grows with depth and kernel size." },
            ],
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "The parameter-count comparison is the fastest way to answer 'why CNNs for images'. Memorize one pair of numbers: dense 32x32x3 -> 1000 = 30.7M weights; conv 3x3, 16 filters = 448 weights.",
            },
            diagram: {
              kind: "compare",
              title: "Dense layer vs convolutional layer",
              caption:
                "Same input, radically different assumptions about what images are.",
              left: {
                heading: "Dense (fully connected)",
                items: [
                  "Every input connects to every output",
                  "Separate weights for each position",
                  "307M params for one 32x32x3 layer at width 1000",
                  "No notion of spatial locality",
                  "Must relearn the same pattern at each location",
                ],
              },
              right: {
                heading: "Convolutional",
                items: [
                  "Each output sees a small K x K window",
                  "One kernel shared across all positions",
                  "448 params for 3x3, 3-in, 16-out",
                  "Local by design, translation-equivariant",
                  "Detects a pattern wherever it appears",
                ],
              },
            },
            codeExample: {
              language: "python",
              caption: "The parameter-count argument, computed.",
              code: `import numpy as np

H, W, C_in, C_out, K = 32, 32, 3, 16, 3

dense_params = H * W * C_in * 1000            # dense layer, 1000 outputs
conv_params  = K * K * C_in * C_out + C_out   # 3x3 conv, 16 filters
print(dense_params / 1e6, "M vs", conv_params, "weights")

out_side = (H - K) // 1 + 1                   # valid conv, stride 1
print("feature map:", out_side, "x", out_side, "x", C_out)`,
            },
            examQuestions: [
              {
                q: "Explain the three ideas (local connectivity, weight sharing, translation equivariance) that make convolutional layers suitable for images. Support with a parameter-count comparison against a dense layer.",
                marks: 7,
                outline: [
                  "Define locality: pixel meaning comes from its neighbourhood.",
                  "Local connectivity: K x K window per output neuron.",
                  "Weight sharing: one kernel for all positions; give the param formula K*K*C_in*C_out + C_out.",
                  "Numeric: 3x3x3x16 + 16 = 448 vs 30.7M dense on 32x32x3.",
                  "Equivariance: shifting input shifts the feature map identically.",
                  "Invariance for classification via pooling + global readout.",
                  "Feature hierarchy: receptive field grows with depth.",
                ],
              },
              {
                q: "Define a feature map in a CNN.",
                marks: 2,
                outline: [
                  "The spatial response of a single kernel slid over the whole input.",
                  "A conv layer outputs one feature map per filter; maps stack as channels.",
                ],
              },
              {
                q: "Compute the number of parameters in a 5x5 convolutional layer with 3 input channels and 8 filters, including biases.",
                marks: 3,
                outline: [
                  "Weights: 5*5*3*8 = 600.",
                  "Biases: 8.",
                  "Total: 608.",
                ],
              },
            ],
          },
          {
            number: "2.2",
            title: "The convolution operation: kernels, stride and padding",
            body: [
              "The discrete 2D convolution (strictly, cross-correlation — deep learning libraries do not flip the kernel) places a K x K kernel at each position of the input and computes the sum of elementwise products under it. For output pixel (i, j): out[i][j] = sum over (u, v) of X[i+u][j+v] * K[u][v] + b. The kernel acts as a template matcher: a 3x3 kernel with weights [[1,0,-1],[1,0,-1],[1,0,-1]] responds strongly to vertical edges (bright left, dark right) and weakly to flat regions. Learning replaces hand-crafted kernels (Sobel, Laplace) with kernels discovered from data.",
              "The output size formula is the most-used arithmetic in the unit. With input side N, kernel K, padding P, stride S: out = floor((N + 2P - K) / S) + 1. Worked values: 32x32 input, K = 5, P = 0, S = 1 gives 28x28 (LeNet's first layer); the same input with P = 2 gives 32x32 ('same' padding); with S = 2 it halves roughly every step. 'Valid' padding means P = 0 (output shrinks); 'same' padding means output side equals input side for S = 1 (choose P = (K-1)/2, possible for odd K — one reason kernels are odd-sized).",
              "Strides and padding are levers with distinct roles. Stride S > 1 skips positions, shrinking the output and enlarging the per-step receptive field — a cheap downsampling alternative to pooling. Padding P > 0 frames the input with zeros so borders are processed properly and spatial size is preserved, letting deep stacks keep resolutions manageable; without padding, a 32-layer stack of 3x3 convs would erode 64 pixels from each side of a 224x224 image. In multi-channel operation each kernel is actually K x K x C_in (a kernel per input channel), outputs are summed across channels, and C_out separate kernels give C_out output channels.",
              "A full dimension trace cements the mechanics. Input 32x32x3 -> conv with 16 kernels of 5x5x3, stride 1, pad 0 -> output 28x28x16. Parameters: 16 * (5*5*3 + 1) = 1216. Multiply-accumulate count per output pixel: 5*5*3 = 75 MACs, so the layer costs 28*28*16*75 = 940,800 MACs for one image — the FLOP budget that motivates strides, pooling and GPU hardware (Unit V). The trace pattern 'in channels -> kernel depth -> out channels' is the single most common source of exam confusion: kernel depth ALWAYS equals input channel count.",
              "Advantages and limitations to close with. Convolutions give parameter efficiency, equivariance and parallel-friendly computation, but: they are linear operators (need ReLU between layers), they are local (stacking needed for long-range context), they lose precise spatial layout when pooling is aggressive, and transposed/inverse problems (upsampling in decoders) need separate machinery. Variants worth naming: 1x1 convolution (channel mixing / dimension reduction), dilated convolution (larger receptive field without parameters), depthwise-separable convolution (MobileNet's efficiency trick).",
            ],
            bullets: [
              "Convolution: slide kernel, compute sum of elementwise products + bias at every position.",
              "Output size: out = floor((N + 2P - K)/S) + 1 per spatial side.",
              "Valid padding (P = 0) shrinks; 'same' padding (P = (K-1)/2, odd K) preserves size at S = 1.",
              "Stride shrinks output and grows receptive field cheaply; odd kernel sizes dominate because of symmetric padding.",
              "Kernel shape is K x K x C_in; kernel depth always equals the input channel count.",
              "Params = K*K*C_in*C_out + C_out; MAC cost = out_H * out_W * C_out * K*K*C_in.",
              "Named variants: 1x1 conv (channel mixing), dilated conv (wider field), depthwise-separable (efficiency).",
            ],
            keyTerms: [
              { term: "Stride", definition: "Step size S with which the kernel moves; output side = (N + 2P - K)/S + 1." },
              { term: "Padding", definition: "Zero-border added to the input; 'valid' = none, 'same' = enough to preserve size." },
              { term: "'Same' convolution", definition: "Padding chosen so output spatial size equals input size (for S = 1, odd K)." },
              { term: "1x1 convolution", definition: "A per-pixel linear mix of channels; used for dimension reduction and cross-channel fusion." },
            ],
            callout: {
              type: "warning",
              title: "Common mistake",
              body: "The kernel depth always equals the number of INPUT channels, and the number of filters equals the number of OUTPUT channels. Writing a 3x3x16 kernel for a 3-channel input is the classic error — the correct kernel is 5x5x3 when the input has 3 channels.",
            },
            diagram: {
              kind: "flow",
              title: "Computing one conv layer",
              caption:
                "Follow the arithmetic once and every conv question becomes bookkeeping.",
              steps: [
                { label: "Pad input", note: "P zeros per side (valid = 0)" },
                { label: "Place K x K x C_in kernel", note: "top-left corner" },
                { label: "Sum elementwise products", note: "+ bias -> one output value" },
                { label: "Move by stride S", note: "repeat across rows and columns" },
                { label: "Feature map complete", note: "one per filter; stack as channels" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "2D convolution from scratch plus the size formula.",
              code: `import numpy as np

def conv2d(X, K):
    kh, kw = K.shape
    H, W = X.shape
    out = np.zeros((H - kh + 1, W - kw + 1))
    for i in range(out.shape[0]):
        for j in range(out.shape[1]):
            out[i, j] = np.sum(X[i:i+kh, j:j+kw] * K)
    return out

X = np.random.rand(5, 5)
K = np.array([[1, 0, -1]] * 3)          # vertical edge detector
print(conv2d(X, K).shape)               # (3, 3)

def out_size(N, K, P, S):
    return (N + 2 * P - K) // S + 1     # the formula to memorize
print(out_size(32, 5, 0, 1), out_size(32, 3, 1, 1), out_size(32, 3, 1, 2))`,
            },
            examQuestions: [
              {
                q: "Define the 2D convolution operation. Derive the output-size formula involving stride and padding, and compute the output dimensions when a 32x32x3 input passes through a 5x5 convolution with 16 filters, stride 1, no padding. Also give the layer's parameter count.",
                marks: 7,
                outline: [
                  "Define: out[i][j] = sum X[i+u][j+v] * K[u][v] + b over the kernel window.",
                  "Geometry: input side N, kernel K, padding P, stride S; count positions.",
                  "Derive out = (N + 2P - K)/S + 1.",
                  "Substitute: (32 + 0 - 5)/1 + 1 = 28 -> output 28x28x16.",
                  "Kernel depth = input channels: each filter is 5x5x3.",
                  "Params: 16 * (75 + 1) = 1216.",
                  "State the role of padding ('same' vs 'valid') and stride as downsampling.",
                ],
              },
              {
                q: "An input of 64x64 goes through a 3x3 convolution with stride 2 and padding 1. What is the output size?",
                marks: 2,
                outline: [
                  "(64 + 2 - 3)/2 + 1 = 32.5 -> 32 (floor).",
                  "Output 32x32 — stride 2 halved the map.",
                ],
              },
              {
                q: "What is a 1x1 convolution and why is it useful?",
                marks: 3,
                outline: [
                  "A per-pixel linear combination across channels.",
                  "Reduces/increases channel count cheaply (bottleneck layers).",
                  "Adds nonlinearity and cross-channel mixing without touching spatial layout.",
                ],
              },
            ],
          },
          {
            number: "2.3",
            title: "Pooling layers",
            body: [
              "Pooling downsamples each feature map independently, replacing each small window (typically 2x2, stride 2) with a single summary value. Max pooling takes the window maximum; average pooling takes the mean; global pooling (global max or global average) collapses an entire feature map to one number. Pooling has NO learnable parameters — it is pure geometry — and it cuts each spatial dimension by its stride, so a 2x2/stride-2 pool quarters the area of every map.",
              "Why downsample at all? Three reasons, each worth a mark. Translation invariance: max pooling keeps the strongest response in a neighbourhood regardless of its exact position, so small shifts of the feature no longer change the output — this is how the equivariance of convolution is converted into the invariance classification needs. Efficiency: halving H and W reduces the computation of every subsequent conv layer by roughly 4x. Wider context: after pooling, the same 3x3 kernel covers a twice-as-large region of the original image, growing the effective receptive field without new parameters.",
              "Max versus average is a design choice with clear rules. Max pooling preserves the strongest activation — edges, textures, the presence of a part — making it the default in classification backbones (LeNet's average pooling is the historical exception, VGG onward it is max). Average pooling smooths and blurs, retaining more overall layout information; it survives in specific roles: LeNet-5's subsampling, and global average pooling (GAP) before the classifier, which replaced huge flatten-to-dense stages (Network-in-Network, then ResNet: 7x7x512 -> GAP -> 512 -> 1000 costs just 512*1000 weights instead of 7*7*512*1000 = 25M).",
              "A worked trace: feature map 4x4 = [[1,3,2,4],[5,6,7,8],[4,2,1,0],[8,9,3,5]], 2x2 max pooling with stride 2 gives [[6,8],[9,5]] — each quadrant contributes its maximum. Dimension note: pooling with window P and stride S follows the same formula as convolution, out = (N - P)/S + 1, so 2x2 stride-2 on a 28x28 map gives 14x14. Pooling also acts as a light regularizer: the network cannot rely on exact pixel positions, only on feature presence.",
              "Limitations and the modern alternative. Pooling discards spatial information permanently and blinds the network to precise localization — which segmentation and detection architectures must reconstruct (Unit V). Modern networks increasingly replace pooling with strided convolutions (learnable downsampling, e.g. stride-2 conv in ResNet's transition blocks) because they both shrink and transform. But pooling remains universal in exam syllabi and in classification heads, so both the operation and its arithmetic must be fluent.",
            ],
            bullets: [
              "Pooling summarizes each window with one value: max (default), average, or global (whole map).",
              "No learnable parameters — geometry only; output side = (N - P)/S + 1.",
              "Purpose 1: translation invariance for classification; purpose 2: ~4x compute cut; purpose 3: larger receptive field.",
              "2x2 stride-2 max pool quarters the map area: 28x28 -> 14x14.",
              "Max keeps strongest activations (features); average keeps layout (LeNet, some heads).",
              "Global average pooling replaces giant flatten+dense classifiers (ResNet: 512-vector from 7x7x512).",
              "Modern alternative: strided convolution — learnable downsampling used in ResNet transitions.",
            ],
            keyTerms: [
              { term: "Max pooling", definition: "Replace each window by its maximum; the standard pooling in classification CNNs." },
              { term: "Global average pooling", definition: "Average each feature map over all spatial positions into a single value per channel." },
              { term: "Subsampling", definition: "Any downsampling operation; pooling and strided convolution are the two CNN forms." },
              { term: "Translation invariance", definition: "The output does not change when the input feature shifts slightly — pooling's gift to classifiers." },
            ],
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "'Pooling has zero parameters' is a one-mark gimme — but only if you also say WHY: pooling applies a fixed max or average, with no weights to learn. Pair it with the 28->14 size example for the full short answer.",
            },
            diagram: {
              kind: "fork",
              title: "Which pooling to use?",
              caption:
                "Three branches cover every pooling question on the paper.",
              start: "Need to downsample feature maps",
              branches: [
                { label: "Max pool 2x2", outcome: "keep strongest activations; default inside classification backbones", good: true },
                { label: "Average pool", outcome: "smooth the map; historical use (LeNet) and layout-sensitive heads", good: true },
                { label: "Global average pool", outcome: "one vector before the classifier; replaces flatten+dense (ResNet head)", good: true },
              ],
            },
            codeExample: {
              language: "python",
              caption: "2x2 max pooling implemented with reshape.",
              code: `import numpy as np

def max_pool2x2(X):
    H, W = X.shape
    return (X[:H//2*2, :W//2*2]
            .reshape(H//2, 2, W//2, 2)
            .max(axis=(1, 3)))

X = np.array([[1, 3, 2, 4],
              [5, 6, 7, 8],
              [4, 2, 1, 0],
              [8, 9, 3, 5]])
print(max_pool2x2(X))     # [[6 8] [9 5]] - each 2x2 block -> its max`,
            },
            examQuestions: [
              {
                q: "Explain pooling in CNNs. Compare max and average pooling, show a 2x2 max-pooling example on a 4x4 map, and list three purposes pooling serves.",
                marks: 7,
                outline: [
                  "Definition: per-window downsample of each feature map, no parameters.",
                  "Max pooling: window maximum, preserves strongest activation.",
                  "Average pooling: window mean, smoother, retains layout (LeNet).",
                  "Worked 4x4 example: [[1,3],[5,6]] -> 6, etc., giving [[6,8],[9,5]].",
                  "Purpose 1: translation invariance; Purpose 2: ~4x compute reduction.",
                  "Purpose 3: grows effective receptive field for later layers.",
                  "Mention global average pooling and the strided-conv alternative.",
                ],
              },
              {
                q: "How many parameters does a 2x2 max-pooling layer add to a network?",
                marks: 2,
                outline: [
                  "Zero — pooling is a fixed operation.",
                  "It has no weights or biases.",
                ],
              },
              {
                q: "A 28x28 feature map goes through 2x2 pooling with stride 2. Give the output size, and the size after a second identical pooling.",
                marks: 3,
                outline: [
                  "(28 - 2)/2 + 1 = 14 -> 14x14.",
                  "Second pool: (14 - 2)/2 + 1 = 7 -> 7x7.",
                  "Area shrank 16x over two pools.",
                ],
              },
            ],
          },
          {
            number: "2.4",
            title: "Dimension bookkeeping: tracing sizes and parameters through a CNN",
            body: [
              "Every CNN question reduces to bookkeeping: given the input and the layer stack, produce the output shape and the parameter count. The two formulas carry everything: spatial size out = (N + 2P - K)/S + 1 per side (identical for conv and pooling), and conv parameters = K*K*C_in*C_out + C_out. Flatten layers convert (H, W, C) to H*W*C values; dense layers use in*out + out. Fluency means chaining these across a whole network without a calculator — the skill this section drills.",
              "Worked trace on the classic LeNet-style stack for 32x32x1 digits. Conv1: 6 filters, 5x5, stride 1, pad 0 -> (32-5)+1 = 28, so 28x28x6; parameters 6*(5*5*1 + 1) = 156. Pool1: 2x2 stride 2 -> 14x14x6. Conv2: 16 filters, 5x5 -> (14-5)+1 = 10, so 10x10x16; parameters 16*(5*5*6 + 1) = 2416. Pool2: -> 5x5x16. Flatten: 5*5*16 = 400 values. Dense1: 400 -> 120 = 48,120 parameters; Dense2: 120 -> 84 = 10,164; Output: 84 -> 10 = 850. Total: about 61,706 parameters — LeNet's famous size, and the trace an examiner wants to see line by line.",
              "Two patterns deserve emphasis because they dominate modern nets. First, the funnel: spatial resolution falls (32 -> 28 -> 14 -> 10 -> 5) while channel count rises (1 -> 6 -> 16) — information moves from space into channels. Second, parameter concentration: the conv layers above cost under 3K parameters while the dense layers cost over 59K — in MLP-flavoured CNNs the classifier, not the feature extractor, holds the weights; architectures from Network-in-Network onward (GAP heads, Unit II) deliberately move that weight budget back into convolutions.",
              "Receptive fields grow even when kernels stay 3x3. After conv1 (3x3), each unit sees 3 pixels; after pool (2x2), its kernel now spans 6; conv2 makes it 8; conv3 makes 16 after another pool. Tracking receptive fields matters for design questions ('can this layer see the whole object?') and explains why deep stacks of small kernels replace single large ones: three 3x3 convs give a 7x7 field with fewer parameters and more nonlinearities (the VGG argument, Section 2.7).",
              "Verification habits catch most errors: spatial sizes must never go negative (if (N + 2P - K) < 0 the padding is wrong); channel count changes ONLY at conv layers (pooling never touches channels); flatten always multiplies, never shrinks; and the final dense input must equal the last feature map's H*W*C product — a mismatch here is the most common Keras shape error, and being able to predict it on paper is exactly what makes the error easy to fix in code.",
            ],
            bullets: [
              "Two formulas: size out = (N + 2P - K)/S + 1; conv params = K*K*C_in*C_out + C_out.",
              "Dense params: in*out + out; flatten output = H*W*C.",
              "LeNet trace: 32x32x1 -> 28x28x6 -> 14x14x6 -> 10x10x16 -> 5x5x16 -> 400 -> 120 -> 84 -> 10; ~61,706 params.",
              "Funnel pattern: spatial resolution falls while channels rise.",
              "Parameter concentration lives in dense heads of classic CNNs; GAP heads move it into convs.",
              "Receptive field grows through pooling even with fixed 3x3 kernels.",
              "Sanity checks: channels change only at convs; final dense input = last map's H*W*C.",
            ],
            keyTerms: [
              { term: "Flatten", definition: "Reshape (H, W, C) into a vector of H*W*C values before dense layers." },
              { term: "Funnel architecture", definition: "The CNN pattern of shrinking spatial size and growing channel count with depth." },
              { term: "Parameter budget", definition: "The total trainable weight count of a network, distributed across its layers." },
              { term: "Receptive field growth", definition: "How far back in the input one deep neuron can see; expands with every conv and pool." },
            ],
            callout: {
              type: "tip",
              title: "Remember",
              body: "Write every trace as a table: columns = layer, output shape, parameters. The shape column proves you applied the size formula; the parameter column proves you applied the weight formula. Half the marks live in the table's discipline.",
            },
            diagram: {
              kind: "pipeline",
              title: "LeNet-style dimension trace for 32x32x1 input",
              caption:
                "Spatial size shrinks, channels grow, and parameters pile up in the dense tail.",
              stages: [
                { label: "Input 32x32x1", note: "grayscale digit" },
                { label: "Conv 5x5, 6 filters -> 28x28x6", note: "156 params" },
                { label: "Pool 2x2 -> 14x14x6", note: "0 params" },
                { label: "Conv 5x5, 16 filters -> 10x10x16", note: "2,416 params" },
                { label: "Pool 2x2 -> 5x5x16, flatten -> 400", note: "0 params" },
                { label: "Dense 400-120-84-10", note: "59,134 params" },
              ],
            },
            table: {
              caption: "Layer-by-layer trace of the LeNet-style stack (32x32x1 input).",
              headers: ["Layer", "Output shape", "Parameters"],
              rows: [
                ["Conv 5x5, 6 filters, s=1, p=0", "28x28x6", "156"],
                ["Max/avg pool 2x2, s=2", "14x14x6", "0"],
                ["Conv 5x5, 16 filters, s=1, p=0", "10x10x16", "2,416"],
                ["Pool 2x2, s=2", "5x5x16", "0"],
                ["Flatten", "400", "0"],
                ["Dense 120", "120", "48,120"],
                ["Dense 84", "84", "10,164"],
                ["Dense 10 (softmax)", "10", "850"],
                ["Total", "-", "61,706"],
              ],
            },
            examQuestions: [
              {
                q: "For a CNN taking 32x32x1 inputs with layers Conv(6, 5x5) - Pool(2x2, s2) - Conv(16, 5x5) - Pool(2x2, s2) - Flatten - Dense(120) - Dense(84) - Dense(10): give every output shape and the total parameter count, showing the formulas used.",
                marks: 7,
                outline: [
                  "State the size formula (N + 2P - K)/S + 1 and param formula K*K*C_in*C_out + C_out.",
                  "Conv1: 28x28x6, 156 params. Pool1: 14x14x6, 0 params.",
                  "Conv2: 10x10x16, 2,416 params. Pool2: 5x5x16, 0 params.",
                  "Flatten: 400. Dense1: 48,120; Dense2: 10,164; Output: 850.",
                  "Total 61,706 parameters.",
                  "Comment on the funnel and parameter concentration patterns.",
                  "Note where shape errors would appear if padding were misconfigured.",
                ],
              },
              {
                q: "After three 3x3 convolutions (stride 1, same padding) and two 2x2 pools, what input field does the last unit see?",
                marks: 3,
                outline: [
                  "conv1: 3; pool: 6; conv2: 8; pool: 16; conv3: 24.",
                  "Answer: a 24x24 region of the original input.",
                ],
              },
              {
                q: "Why do odd kernel sizes (3x3, 5x5) dominate over even sizes?",
                marks: 2,
                outline: [
                  "Odd sizes have a central pixel and symmetric 'same' padding P = (K-1)/2.",
                  "Even kernels have no centre, so padding is asymmetric and borders distort.",
                ],
              },
            ],
          },
          {
            number: "2.5",
            title: "LeNet-5: the first working CNN",
            body: [
              "LeNet-5 (LeCun et al., 1998) is the architecture that proved convolutional networks work. Built at Bell Labs to read handwritten digits on cheques and ZIP codes for the US Postal Service, it achieved error rates near 1% on MNIST-class data and ran in production ATMs. Every later architecture — AlexNet, VGG, ResNet — is a scaled version of its template: alternating convolution and subsampling, then dense layers and a softmax head.",
              "The architecture, input 32x32 grayscale: C1 conv with 6 filters of 5x5 -> 28x28x6; S2 average-pool 2x2 -> 14x14x6; C3 conv with 16 filters of 5x5 -> 10x10x16; S4 average-pool 2x2 -> 5x5x16; C5 conv 5x5 with 120 filters (fully connected in effect) -> 120; F6 dense 120 -> 84; output 10 with RBF/softmax. About 61,706 parameters total (Section 2.4 traces the arithmetic). The average pooling of the era included a learned scale and bias — modern max pooling is simpler — and activations were tanh/sigmoid, chosen decades before ReLU.",
              "Design choices reveal the principles. Small 5x5 kernels exploit locality — digits are made of strokes, not global patterns. Subsampling builds gradual invariance to small shifts and slants of handwriting. Sixteen filters at C3 grow capacity while C3's partial connectivity table (not every S2 map connected to every C3 map in the original paper) encoded hand-crafted symmetry assumptions — an early precursor of parameter-efficiency thinking. The 84-unit F6 pairs with a 7x12 bitmap of ASCII characters, a delightfully concrete 1998 constraint.",
              "Why LeNet earns a full exam answer: it is small enough to trace completely (Section 2.4), it demonstrates every conv concept (padding-less shrinkage, pooling, flatten, dense tail), and it anchors the historical narrative — LeNet showed convolutions beat dense nets on images in 1998, but the data and compute of the time kept the idea dormant until 2012. When asked 'explain CNN with an example architecture', LeNet is the safest choice: the numbers are small, the trace is clean, and the significance sentence writes itself.",
              "Limitations, honestly stated: LeNet handles 32x32 grayscale inputs — it does not scale to ImageNet's 224x224x3 without more capacity and depth; average pooling plus tanh trains slowly by modern standards; and its single-scale pipeline offers no multi-resolution analysis. Those gaps define exactly what AlexNet fixed in Section 2.6: depth, ReLU, dropout, GPUs and data.",
            ],
            bullets: [
              "LeNet-5 (1998): digit recognition for cheques/ZIP codes; ~61,706 parameters.",
              "Stack: conv 6@28x28 -> pool -> conv 16@10x10 -> pool -> 120 -> 84 -> 10 (softmax).",
              "Template established: [conv -> pool] x n -> flatten/dense -> softmax.",
              "Era details: tanh/sigmoid activations, average pooling (with learned scale), no padding.",
              "Design logic: small kernels for stroke locality, subsampling for shift tolerance.",
              "Traced completely by hand (Section 2.4) — the safest architecture to reproduce in an exam.",
              "Limits: small grayscale inputs only; no depth/regularization machinery for ImageNet scale.",
            ],
            keyTerms: [
              { term: "LeNet-5", definition: "LeCun's 1998 CNN for digit recognition; the template for all later conv architectures." },
              { term: "Subsampling layer", definition: "LeNet's average pooling with learned scale/bias; the historical ancestor of pooling." },
              { term: "MNIST-class task", definition: "32x32 grayscale digit classification; the benchmark that validated CNNs." },
              { term: "Feature extractor / classifier head", definition: "The conv-pool part learns features; the dense tail maps them to classes." },
            ],
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Reproduce LeNet as a labelled stack with shapes: 32x32x1 -> 6@28x28 -> 6@14x14 -> 16@10x10 -> 16@5x5 -> 120 -> 84 -> 10. The shape chain plus the ~61k parameter total is a complete 7-mark answer skeleton.",
            },
            diagram: {
              kind: "layers",
              title: "LeNet-5 architecture (top = output)",
              caption:
                "Alternating conv and subsampling, then the dense tail - the template every later CNN follows.",
              layers: [
                { label: "Output: 10 units, softmax", note: "digit classes 0-9" },
                { label: "Dense 84 (F6)", note: "tanh; paired with ASCII bitmaps in the original" },
                { label: "Dense 120 (C5)", note: "conv 5x5 acting as fully connected" },
                { label: "Conv 16 @ 10x10 (C3)", note: "5x5 kernels over pooled maps" },
                { label: "Pool 16 @ 5x5 (S4) -> Pool 6 @ 14x14 (S2)", note: "average pooling, 2x2" },
                { label: "Input 32x32x1 -> Conv 6 @ 28x28 (C1)", note: "5x5 kernels, tanh" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "LeNet-5 in Keras, faithful to the original stack.",
              code: `from tensorflow import keras
from tensorflow.keras import layers

lenet = keras.Sequential([
    layers.Conv2D(6, 5, activation="tanh", input_shape=(32, 32, 1)),
    layers.AveragePooling2D(2),
    layers.Conv2D(16, 5, activation="tanh"),
    layers.AveragePooling2D(2),
    layers.Flatten(),
    layers.Dense(120, activation="tanh"),
    layers.Dense(84, activation="tanh"),
    layers.Dense(10, activation="softmax"),
])
lenet.summary()      # ~61,706 params - tiny by modern standards`,
            },
            examQuestions: [
              {
                q: "Describe the LeNet-5 architecture layer by layer with output shapes, state its parameter count, and explain its significance in the history of deep learning.",
                marks: 7,
                outline: [
                  "Input 32x32x1 grayscale; purpose: digit recognition (cheques, ZIP codes).",
                  "C1: conv 5x5, 6 filters -> 28x28x6; S2: avg pool -> 14x14x6.",
                  "C3: conv 5x5, 16 filters -> 10x10x16; S4: avg pool -> 5x5x16.",
                  "C5: 120 units; F6: 84 units; output: 10 with softmax.",
                  "Parameter total ~61,706 (cite Section 2.4 trace).",
                  "Significance: first production CNN; proved conv > dense on images in 1998.",
                  "Era limitations that AlexNet later fixed: depth, ReLU, dropout, GPUs.",
                ],
              },
              {
                q: "What is the 'template' LeNet-5 established for CNNs?",
                marks: 2,
                outline: [
                  "Repeat [convolution -> nonlinear activation -> pooling] blocks for feature extraction.",
                  "Finish with flatten/dense layers and a softmax classifier.",
                ],
              },
              {
                q: "Why did LeNet-5 use 5x5 kernels and subsampling rather than one large dense network on pixels?",
                marks: 3,
                outline: [
                  "Digits are stroke-local: small kernels capture local structure with few parameters.",
                  "Weight sharing detects the stroke anywhere in the image.",
                  "Subsampling adds shift tolerance and cuts computation.",
                ],
              },
            ],
          },
          {
            number: "2.6",
            title: "AlexNet: deep learning goes mainstream",
            body: [
              "AlexNet (Krizhevsky, Sutskever and Hinton, 2012) won the ImageNet ILSVRC-2012 competition with a top-5 error of 15.3% against 26.2% for the runner-up — a gap so large it ended the feature-engineering era of computer vision within two years. Its formula: the LeNet template scaled up by orders of magnitude — 8 learned layers (5 conv + 3 dense), 650,000 neurons, 60 million parameters — trained on 1.2 million labelled images, on two GTX 580 GPUs for about a week.",
              "The architectural shape: input 224x224x3 (usually quoted 227x227); conv1 96 filters of 11x11 stride 4 -> 55x55x96; max-pool 3x3 stride 2 -> 27x27x96; conv2 256 filters 5x5 (same padding) -> pool -> 13x13x256; conv3 and conv4, 384 and 384 filters of 3x3; conv5 256 filters -> pool -> 6x6x256; then dense 4096, dense 4096, softmax 1000. The original implementation split layers across two GPUs with limited cross-talk — an engineering constraint (GTX 580s had 3GB) that also became an early experiment in model parallelism.",
              "Four innovations, each now universal. ReLU activations replaced tanh: six times faster convergence on ImageNet, and the birth of the non-saturating era (Section 1.3). Dropout (Section 5.7) in the dense layers: randomly zeroing half the units during training combatted overfitting where weight decay alone failed. Data augmentation on the fly: random crops, horizontal flips and colour (PCA) jitter multiplied effective dataset size cheaply. Local response normalization (LRN) — now obsolete, replaced by batch normalization — encouraged competition between adjacent filter maps.",
              "Training details that made it work: mini-batch SGD with momentum 0.9, learning rate 0.01 decayed by 10 at plateaus, weight decay 5e-4, batch size 128. The engineering lesson generalizes: AlexNet succeeded not by inventing convolutions but by removing the obstacles that had stopped them scaling — saturating activations, overfitting on limited labels, and hardware limits. 'What did AlexNet change?' has the crisp three-part answer: activations (ReLU), regularization (dropout + augmentation), and compute (GPUs).",
              "Legacy and limits. AlexNet legitimised deep learning as a field; its 2013-2015 successors are all ablations of it. Its costs: 60M parameters (mostly in the two 4096-dense layers: 227M weights if computed naively from 6x6x256 — hence the later shift to GAP heads), 11x11 and 5x5 kernels that VGG would replace with stacked 3x3s, and LRN, which batch normalization made redundant. Modern re-implementations of AlexNet reach similar accuracy in a fraction of the training time — the architecture's ideas, not its hyperparameters, are what survived.",
            ],
            bullets: [
              "AlexNet (2012): ImageNet winner, 15.3% top-5 error vs 26.2% runner-up — the deep learning turning point.",
              "Scale: 8 layers, 60M parameters, 1.2M training images, 2 GPUs, ~1 week of training.",
              "Stack: conv 11x11 s4 (96) -> pool -> conv 5x5 (256) -> pool -> 3x3 convs (384/384/256) -> pool -> 4096-4096-1000.",
              "Innovation 1: ReLU — ~6x faster convergence than tanh.",
              "Innovation 2: dropout (0.5) in dense layers against overfitting.",
              "Innovation 3: on-the-fly augmentation (crops, flips, colour jitter); Innovation 4: GPU training.",
              "LRN is obsolete (replaced by batch norm); the giant dense layers were later replaced by GAP heads.",
            ],
            keyTerms: [
              { term: "AlexNet", definition: "The 2012 ImageNet-winning 8-layer CNN that launched the modern deep learning era." },
              { term: "ImageNet ILSVRC", definition: "The 1.2M-image, 1000-class competition benchmark whose 2012 edition AlexNet won decisively." },
              { term: "Top-5 error", definition: "Fraction of images where the true class is not among the model's 5 highest-scoring predictions." },
              { term: "Local response normalization (LRN)", definition: "AlexNet's inter-channel competition layer; later superseded by batch normalization." },
            ],
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "The one-sentence significance: 'AlexNet did not invent CNNs — it removed the three obstacles (saturating activations, overfitting, compute) that had stopped them scaling.' Memorize the ReLU/dropout/GPU triad; it answers half the AlexNet questions ever set.",
            },
            diagram: {
              kind: "layers",
              title: "AlexNet architecture (top = output)",
              caption:
                "LeNet's template at 60M parameters: bigger kernels early, dense tail, ReLU throughout.",
              layers: [
                { label: "Softmax: 1000 classes", note: "ImageNet output" },
                { label: "Dense 4096 -> Dense 4096", note: "ReLU + dropout 0.5" },
                { label: "Conv5: 256 @ 13x13 -> max-pool -> 6x6x256", note: "3x3 kernels" },
                { label: "Conv3, Conv4: 384 @ 13x13", note: "3x3 kernels, ReLU" },
                { label: "Conv2: 256 -> pool -> 13x13", note: "5x5 kernels, 'same' padding" },
                { label: "Input 227x227x3 -> Conv1: 96 @ 55x55 -> pool", note: "11x11 kernel, stride 4, ReLU" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "AlexNet's skeleton in Keras (one-GPU variant).",
              code: `from tensorflow.keras import layers, models, optimizers

alexnet = models.Sequential([
    layers.Conv2D(96, 11, strides=4, activation="relu",
                  input_shape=(227, 227, 3)),
    layers.MaxPooling2D(3, strides=2),
    layers.Conv2D(256, 5, padding="same", activation="relu"),
    layers.MaxPooling2D(3, strides=2),
    layers.Conv2D(384, 3, padding="same", activation="relu"),
    layers.Flatten(),
    layers.Dense(4096, activation="relu"),
    layers.Dropout(0.5),                     # AlexNet's overfitting fix
    layers.Dense(1000, activation="softmax"),
])
alexnet.compile(optimizers.SGD(learning_rate=0.01, momentum=0.9),
                loss="categorical_crossentropy")`,
            },
            examQuestions: [
              {
                q: "Describe the AlexNet architecture and explain the innovations that made its ImageNet victory possible.",
                marks: 7,
                outline: [
                  "Context: ILSVRC-2012, 15.3% top-5 vs 26.2% runner-up.",
                  "Scale: 8 layers, 60M params, 227x227x3 input, 2 GPUs.",
                  "Layer stack: conv 11x11 s4 (96) -> pool -> conv 5x5 (256) -> pool -> 3x3 convs (384/384/256) -> pool -> 4096-4096-1000.",
                  "ReLU: non-saturating, ~6x faster convergence.",
                  "Dropout 0.5 + data augmentation vs overfitting.",
                  "GPU training enabling the scale.",
                  "Legacy: template for VGG/ResNet; LRN later replaced by batch norm.",
                ],
              },
              {
                q: "Why did ReLU make training AlexNet dramatically faster than tanh?",
                marks: 3,
                outline: [
                  "ReLU's derivative is 1 for positive inputs, so gradients do not shrink through layers.",
                  "tanh saturates, stalling learning in deep stacks.",
                  "ReLU is also far cheaper to compute.",
                ],
              },
              {
                q: "State AlexNet's top-5 error and its closest competitor's, and name the competition.",
                marks: 2,
                outline: [
                  "ILSVRC 2012 (ImageNet Large Scale Visual Recognition Challenge).",
                  "AlexNet 15.3% vs 26.2% for the second place entry.",
                ],
              },
            ],
          },
          {
            number: "2.7",
            title: "VGG and the power of uniform 3x3 stacks",
            body: [
              "VGG (Simonyan and Zisserman, 2014) asked the simplest possible architecture question: does depth alone, with minimal design variation, improve CNN accuracy? Its answer is a uniform ladder of 3x3 convolutions — VGG-16 and VGG-19 have 13/16 conv layers in five blocks (64, 128, 256, 512, 512 channels), each block followed by 2x2 max pooling, ending in two 4096-dense layers and a 1000-way softmax. 138 million parameters for VGG-16, all earned by one repeated pattern.",
              "The key mathematical insight is receptive-field composition: two stacked 3x3 convolutions have a 5x5 receptive field (each layer sees one more pixel ring), and three stacked 3x3s have a 7x7 field. But three 3x3 layers cost 3*(3*3*C*C) = 27C^2 weights against 49C^2 for one 7x7 — 45% fewer parameters — and insert three ReLUs instead of one, adding nonlinearity at every step. Small kernels + depth beat large kernels + shallowness on both parameter efficiency and expressiveness; this argument, written out, is the heart of any VGG question.",
              "The channel schedule follows the funnel: spatial resolution halves at each of the five pools (224 -> 112 -> 56 -> 28 -> 14 -> 7) while channels double after each pool (64 -> 128 -> 256 -> 512 -> 512). Compute concentrates early (large maps) and parameters concentrate late (the first dense layer alone is 7*7*512*4096 = 102.7M of the 138M). VGG's uniformity made it the era's standard feature extractor and, decades later, a backbone for detection and segmentation networks — its simplicity is its durability.",
              "Contemporary GoogLeNet/Inception (2014) took the opposite design philosophy: instead of uniform stacks, Inception modules run 1x1, 3x3, 5x5 convolutions and 3x3 pooling in parallel and concatenate their outputs, with 1x1 bottleneck convolutions cutting cost before each expensive conv. The result: 22 layers with only 4M parameters (VGG-class accuracy at 3% of VGG's size) plus auxiliary classifiers against vanishing gradients. Together they answered 'how should depth be organized' two ways: VGG vertically (deeper uniform stacks), Inception horizontally (wider multi-scale modules).",
              "VGG's limitations are the exact agenda of the next section: its 138M parameters are heavy to store and slow to run; and beyond about 19-20 plain layers, accuracy saturates then DEGRADES — not from overfitting (training error rises too) but from optimization difficulty. This 'degradation problem' is what Residual connections were invented to fix; VGG is thus simultaneously the deepest successful plain CNN and the clearest motivation for ResNet.",
            ],
            bullets: [
              "VGG-16/19: five blocks of 3x3 convs (64-128-256-512-512), each block ending in 2x2 max pool.",
              "Two 3x3 convs = 5x5 receptive field; three 3x3s = 7x7 with 27C^2 vs 49C^2 weights (45% fewer) and extra ReLUs.",
              "Funnel: 224 -> 7 spatially, 64 -> 512 channels; 138M params, 102.7M in dense layer 1.",
              "Uniformity made VGG the standard backbone for detection/segmentation for years.",
              "GoogLeNet contrast: Inception modules (parallel 1x1/3x3/5x5 + pool, 1x1 bottlenecks), 22 layers, 4M params.",
              "Plain stacks degrade beyond ~20 layers: training error rises too — an optimization problem, not overfitting.",
              "That degradation problem is ResNet's motivation (Section 2.8).",
            ],
            keyTerms: [
              { term: "VGG-16", definition: "The 16-layer 2014 CNN of uniform 3x3 conv stacks; 138M parameters." },
              { term: "Receptive-field composition", definition: "Stacked small kernels cover the same field as one large kernel with fewer parameters and more nonlinearities." },
              { term: "Inception module", definition: "Parallel 1x1/3x3/5x5 convs + pooling concatenated; GoogLeNet's multi-scale building block." },
              { term: "Degradation problem", definition: "Deeper plain networks train WORSE (even on training data), motivating residual connections." },
            ],
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "The 3x3-composition calculation is the highest-yield VGG fact: 3*(3*3) = 27C^2 weights for three 3x3 layers vs 7*7 = 49C^2 for one 7x7 layer, same 7x7 field, two extra ReLUs. Write it in the margin of any VGG/depth question.",
            },
            diagram: {
              kind: "pyramid",
              title: "The VGG funnel (top = classifier, bottom = input)",
              caption:
                "Resolution halves and channels double at every pool; parameters pool at the dense top.",
              tiers: [
                { label: "Dense 4096-4096-1000", note: "102.7M + 16.8M params - most of the 138M" },
                { label: "Conv block 5: 512 channels @ 7x7", note: "after 4 pools" },
                { label: "Conv block 3: 256 channels @ 14x14", note: "3x3 stacks, 2 pools done" },
                { label: "Conv block 1: 64 channels @ 224x224", note: "input 224x224x3, most compute lives here" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "Receptive-field and parameter arithmetic for 3x3 stacks.",
              code: `import numpy as np

def receptive_field(kernels):
    rf, jump = 1, 1
    for k in kernels:
        rf += (k - 1) * jump
        jump *= k
    return rf

print(receptive_field([3, 3]))       # 5  - two 3x3 convs span 5x5
print(receptive_field([3, 3, 3]))    # 7  - three 3x3 convs span 7x7

C = 256
print("three 3x3 layers:", 3 * 3 * 3 * C * C, "weights")
print("one 7x7 layer:   ", 7 * 7 * C * C, "weights")   # 45% more, same field`,
            },
            table: {
              caption: "The classic CNN lineage at a glance.",
              headers: ["Architecture", "Year", "Depth", "Params", "Signature idea"],
              rows: [
                ["LeNet-5", "1998", "5 conv", "~61k", "conv + subsampling template on digits"],
                ["AlexNet", "2012", "8", "60M", "ReLU + dropout + GPU training on ImageNet"],
                ["VGG-16", "2014", "16", "138M", "uniform 3x3 stacks; depth with small kernels"],
                ["GoogLeNet", "2014", "22", "4M", "Inception multi-scale modules, 1x1 bottlenecks"],
                ["ResNet-152", "2015", "152", "60M", "identity skip connections fix degradation"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the VGG architecture. Show mathematically why stacking three 3x3 convolutions is better than one 7x7 convolution, and describe the degradation problem that limits plain stacks.",
                marks: 7,
                outline: [
                  "VGG-16: five 3x3 conv blocks (64..512), pools between, dense 4096-4096-1000; 138M params.",
                  "Field composition: two 3x3s -> 5x5 field; three -> 7x7.",
                  "Params: 27C^2 for three 3x3s vs 49C^2 for 7x7 - 45% fewer.",
                  "Three ReLUs vs one: more nonlinearity, more discriminative power.",
                  "Funnel: resolution 224 -> 7, channels 64 -> 512.",
                  "Degradation: beyond ~20 plain layers, training error itself rises.",
                  "Not overfitting (train error rises) - an optimization failure; sets up ResNet.",
                ],
              },
              {
                q: "How do Inception modules differ philosophically from VGG blocks?",
                marks: 3,
                outline: [
                  "VGG grows depth vertically with one uniform kernel size.",
                  "Inception widens horizontally: parallel 1x1, 3x3, 5x5 + pooling concatenated per module.",
                  "1x1 bottlenecks cut cost; result is 22 layers at 4M params.",
                ],
              },
              {
                q: "What fraction of VGG-16's parameters sit in its first dense layer, and why?",
                marks: 2,
                outline: [
                  "7*7*512*4096 + 4096 = 102.7M of 138M (~74%).",
                  "Because a flatten of the last 7x7x512 map feeds a 4096-wide layer.",
                ],
              },
            ],
          },
          {
            number: "2.8",
            title: "ResNet and skip connections",
            body: [
              "ResNet (He et al., 2015) answered the degradation problem: plain networks stop improving — and actively get worse — beyond about 20 layers, with training error itself rising, so the failure is optimization, not overfitting. Counterintuitively, a 56-layer plain CNN trains worse than its 20-layer counterpart even though the extra layers could, in principle, learn identity mappings. ResNet's insight: make identity the DEFAULT so that extra layers only need to learn a correction on top of it.",
              "The residual block reformulates what a layer stack learns. Instead of forcing layers to fit a desired mapping H(x), a skip (shortcut) connection routes the input x around the layers and the stack fits the residual F(x) = H(x) - x; the block output is y = F(x) + x. If the best a deeper block can do is copy its input, F(x) -> 0 — an easy target reachable by driving weights toward zero — rather than manufacturing an identity through a stack of nonlinear layers. In practice, if x and H(x) have different channel counts, a 1x1 projection on the shortcut path matches shapes.",
              "Why this fixes gradients: during backpropagation the gradient through the block is dL/dx = dL/dy * (dF/dx + 1). That additive +1 gives every gradient an unattenuated direct path from any layer to the loss, no matter how deep the stack — vanishing gradients through the weights can no longer strangle the signal because the identity route always survives. This is also why ResNet scales: 34, 50, 101, 152 layers, and even 1000+ layer experiments, all train stably. The bottleneck block (1x1 reduce -> 3x3 -> 1x1 expand) keeps 50+ layer variants affordable.",
              "Numbers that anchor the exam answer: ResNet-152 has 152 layers with about 60M parameters — fewer than VGG-16's 138M — and won ILSVRC-2015 with 3.57% top-5 error, surpassing reported human-level performance (~5%) on the benchmark. ResNet-50 became the default vision backbone of the following decade: detection (Faster R-CNN), segmentation (Mask R-CNN), and countless transfer-learning tasks all start from ImageNet-pretrained ResNet weights (Section 2.9).",
              "The idea's reach extends past vision: skip connections appear in U-Net's encoder-decoder (Unit V), in DenseNet (which concatenates rather than adds), in highway networks, and conceptually inside transformers (the residual stream around every attention/FFN block, Section 5.3). 'Adding identity pathways to deep networks' is arguably the single most reused architectural trick in deep learning — a strong closing sentence for any ResNet answer.",
            ],
            bullets: [
              "Degradation problem: plain deep nets train worse with depth, even on training data.",
              "Residual block: y = F(x) + x — layers learn the residual F(x) = H(x) - x, identity is the default.",
              "Gradient path: dL/dx = dL/dy * (dF/dx + 1); the +1 keeps an unattenuated route to the loss.",
              "Shape mismatch on the shortcut is fixed with a 1x1 projection conv.",
              "ResNet-152: 152 layers, ~60M params (fewer than VGG-16), 3.57% top-5 on ILSVRC-2015.",
              "Bottleneck block (1x1 -> 3x3 -> 1x1) keeps deep variants efficient.",
              "Skip connections spread everywhere: U-Net, DenseNet, highway nets, transformer residual streams.",
            ],
            keyTerms: [
              { term: "Residual block", definition: "y = F(x) + x: a weight stack learning the correction F, with input x added back by a skip connection." },
              { term: "Skip (shortcut) connection", definition: "The identity path carrying x (and its gradient) around a block of layers." },
              { term: "Degradation problem", definition: "Plain deep networks underperform shallower ones during training, even without overfitting." },
              { term: "Bottleneck block", definition: "ResNet variant: 1x1 reduce, 3x3 conv, 1x1 expand; cuts parameters in deep variants." },
            ],
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Write the gradient equation dL/dx = dL/dy * (dF/dx + 1) and point at the +1. One symbol explains why a 152-layer network trains at all — it is the fastest path to full marks on 'why do skip connections work?'.",
            },
            diagram: {
              kind: "fork",
              title: "Where does the gradient at a deep layer come from?",
              caption:
                "With a skip connection the identity route always delivers; without it, deep chains can starve.",
              start: "Gradient arriving at a deep residual block",
              branches: [
                { label: "Through the weight layers F(x)", outcome: "product of many Jacobians - may shrink or explode", good: false },
                { label: "Through the identity skip", outcome: "passes unchanged: dL/dx carries the raw +1 term", good: true },
                { label: "Sum of both paths", outcome: "dL/dx = dL/dy * (dF/dx + 1) - the healthy regime ResNet trains in", good: true },
              ],
            },
            codeExample: {
              language: "python",
              caption: "A residual block in Keras functional style.",
              code: `from tensorflow.keras import layers, models

def residual_block(x, filters):
    shortcut = x
    y = layers.Conv2D(filters, 3, padding="same",
                      activation="relu")(x)
    y = layers.Conv2D(filters, 3, padding="same")(y)
    if shortcut.shape[-1] != filters:          # projection shortcut
        shortcut = layers.Conv2D(filters, 1)(shortcut)
    return layers.Activation("relu")(y + shortcut)   # y = F(x) + x

inp = layers.Input((32, 32, 16))
out = residual_block(inp, 16)
models.Model(inp, out).summary()   # identity path carries gradient intact`,
            },
            examQuestions: [
              {
                q: "Explain the degradation problem in deep plain networks and how residual learning solves it. Give the residual block equation, the gradient expression showing why skip connections help, and ResNet's headline results.",
                marks: 7,
                outline: [
                  "Degradation: 56-layer plain net trains worse than 20-layer; training error rises - optimization failure.",
                  "Hypothetical: extra layers should at least learn identity - but plain nonlinear stacks cannot easily do so.",
                  "Reformulate: fit residual F(x) = H(x) - x; output y = F(x) + x.",
                  "Identity is now the easy default (F -> 0); 1x1 projection handles shape mismatch.",
                  "Backprop: dL/dx = dL/dy * (dF/dx + 1) - the +1 is an unattenuated gradient highway.",
                  "Results: ResNet-152 (60M params) wins ILSVRC-2015 at 3.57% top-5 error.",
                  "Legacy: skip connections in U-Net, DenseNet, transformers.",
                ],
              },
              {
                q: "Write the residual block equation and state what the block learns when the optimal mapping is the identity.",
                marks: 2,
                outline: [
                  "y = F(x) + x.",
                  "For identity, F(x) -> 0: the weights simply decay toward zero.",
                ],
              },
              {
                q: "Why does ResNet-152 have FEWER parameters than VGG-16 despite being 10x deeper?",
                marks: 3,
                outline: [
                  "ResNet uses 3x3 kernels throughout plus bottleneck 1x1-3x3-1x1 blocks.",
                  "VGG's two 4096-dense layers hold ~119M of its 138M params.",
                  "ResNet-152 ends with global average pooling, avoiding giant dense layers.",
                ],
              },
            ],
          },
          {
            number: "2.9",
            title: "Transfer learning and fine-tuning",
            body: [
              "Training a CNN from scratch needs millions of labelled images and GPU-weeks. Transfer learning sidesteps both: start from a network pretrained on a large source task (ImageNet's 1.2M images, 1000 classes) and adapt it to a small target task (say 2,000 images of 5 local flower species). The justification is layer generality: early conv layers learn edges, colours and textures useful for almost any vision task, while late layers encode source-task specifics (ImageNet's 1000 categories). Keep the general layers, retrain the specific ones.",
              "The standard workflow has four steps. (1) Feature extraction: load the pretrained backbone WITHOUT its classifier head (include_top = False), freeze all backbone weights (trainable = False), attach a new head sized to the target task, and train only the head — the backbone acts as a fixed feature extractor. This alone usually beats training from scratch on small datasets. (2) Evaluate: if validation accuracy is short of target, (3) fine-tune: unfreeze the top convolution block (or two) and continue training with a much smaller learning rate (typically 1e-5 vs 1e-3) so the pretrained weights are nudged, not destroyed. (4) Deploy: re-normalize inputs exactly as the source model did (each pretrained model documents its expected preprocessing).",
              "When to fine-tune versus when to freeze is a dataset-size and domain-distance decision. Small dataset + similar domain (flowers, pets): freeze backbone, train head only — the highest-value, lowest-risk recipe. Small dataset + distant domain (medical scans, satellite imagery): still start frozen, but fine-tune more layers; lower-level features may need adaptation. Large dataset + any domain: fine-tune the whole network, possibly from scratch if the domain is very distant. The freezing gradient: more target data or more domain shift means unfreeze more, with smaller learning rates for earlier layers.",
              "A dimension-conscious example: VGG16 without its top ends at a 7x7x512 block for 224x224 inputs. Attaching Flatten -> Dense(256) -> Dense(5, softmax) adds 7*7*512*256 + 256 = 6.42M trainable head parameters while 134M backbone weights stay frozen. Two further tricks earn marks: freezing BatchNorm layers during fine-tuning (their running statistics belong to the source domain) and discriminative learning rates (1e-5 for unfrozen backbone layers, 1e-3 for the new head) implemented by per-group optimizer settings in PyTorch.",
              "Advantages and limits. Advantages: order-of-magnitude less data and compute; better generalization on small datasets (the pretrained prior acts as a strong regularizer); the de facto starting point for the majority of real projects and of every detection/segmentation architecture in Unit V. Limits: source-task bias (ImageNet's photo-centred categories may mislead on X-ray or radar data); negative transfer is possible when domains clash badly; licensing and documentation of the pretrained weights matter in production; and for very novel modalities (e.g., protein structures) purpose-built pretraining replaces ImageNet.",
            ],
            bullets: [
              "Transfer learning = pretrained source weights (ImageNet) + small target adaptation.",
              "Layer generality: early convs are near-universal features; late layers are task-specific.",
              "Workflow: load backbone without head -> freeze -> train new head -> optionally unfreeze top blocks -> fine-tune at lr ~1e-5.",
              "Small + similar domain: freeze only; small + distant domain: fine-tune deeper; large dataset: full fine-tune.",
              "VGG16 example: frozen backbone 134M, trainable head from 7x7x512 -> 5 classes = 6.4M params.",
              "Details that earn marks: keep source preprocessing, freeze BatchNorm statistics, discriminative learning rates.",
              "Risks: negative transfer under large domain shift; ImageNet bias on non-photo modalities.",
            ],
            keyTerms: [
              { term: "Transfer learning", definition: "Reusing weights learned on a large source task as the starting point for a smaller target task." },
              { term: "Feature extraction", definition: "Freezing the pretrained backbone and training only a new head on its outputs." },
              { term: "Fine-tuning", definition: "Unfreezing part (or all) of the backbone and continuing training at a small learning rate." },
              { term: "Negative transfer", definition: "A case where source pretraining hurts target performance because the domains clash." },
            ],
            callout: {
              type: "tip",
              title: "Remember",
              body: "The fine-tuning learning rate is 10-100x SMALLER than the head's (1e-5 vs 1e-3). Skipping that drop destroys pretrained features in the first few steps — the most common transfer-learning bug in labs and the most common follow-up question in vivas.",
            },
            diagram: {
              kind: "pipeline",
              title: "The transfer-learning workflow",
              caption:
                "From frozen feature extractor to fully fine-tuned model, in order of increasing data hunger.",
              stages: [
                { label: "Load pretrained backbone", note: "ImageNet weights, include_top = False" },
                { label: "Freeze backbone", note: "trainable = False for all layers" },
                { label: "Attach + train new head", note: "feature extraction; head only" },
                { label: "Unfreeze top block(s)", note: "if validation accuracy falls short" },
                { label: "Fine-tune at lr ~1e-5", note: "nudge, do not destroy, pretrained features" },
                { label: "Evaluate on test set", note: "with source-style preprocessing" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "Frozen-backbone transfer learning in Keras.",
              code: `from tensorflow.keras.applications import VGG16
from tensorflow.keras import layers, models

base = VGG16(weights="imagenet", include_top=False,
             input_shape=(224, 224, 3))
base.trainable = False                     # freeze 134M backbone weights

model = models.Sequential([
    base,
    layers.Flatten(),                      # 7x7x512 -> 25088
    layers.Dense(256, activation="relu"),
    layers.Dense(5, activation="softmax"), # 5 new flower classes
])
# later: base.trainable = True on last block; rerun compile with lr = 1e-5`,
            },
            examQuestions: [
              {
                q: "Explain transfer learning for CNNs. Describe the freeze-then-fine-tune workflow, justify why early layers transfer well, and state when you would fine-tune the entire network versus only the head.",
                marks: 7,
                outline: [
                  "Definition: reuse ImageNet-scale pretrained weights for a small target task.",
                  "Layer generality: edges/textures early (universal), categories late (task-specific).",
                  "Step 1: load backbone without head; freeze; train new head only.",
                  "Step 2: if short of target accuracy, unfreeze top block(s).",
                  "Step 3: fine-tune at lr ~1e-5, 10-100x smaller than the head's.",
                  "Decision rule: data size and domain distance control how much to unfreeze.",
                  "Benefits: less data/compute, strong regularization; risks: negative transfer.",
                ],
              },
              {
                q: "Why should fine-tuning use a much smaller learning rate than head-only training?",
                marks: 2,
                outline: [
                  "Large steps overwrite useful pretrained features in the first epochs.",
                  "Small steps nudge the backbone toward the target domain without destroying it.",
                ],
              },
              {
                q: "A VGG16 backbone (top removed) ends at 7x7x512. How many trainable parameters does the head Flatten -> Dense(256) -> Dense(5) add?",
                marks: 3,
                outline: [
                  "Flatten outputs 25088 values.",
                  "Dense: 25088*256 + 256 = 6,422,784.",
                  "Output: 256*5 + 5 = 1,285; total 6,424,069.",
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
      title: "Sequence Models: RNNs and Attention",
      summary:
        "Data that arrives in time — text, speech, sensor streams — needs networks with memory. This unit builds the recurrent neuron and its training through time (BPTT), confronts the vanishing/exploding gradient problem specific to recurrence, and fixes it with gated cells (LSTM, GRU) and bidirectional stacks, then scales to sequence-to-sequence translation and the attention mechanism that superseded it.",
      chapter: {
        number: "03",
        title: "Memory in Networks: Recurrence, Gates and Attention",
        intro:
          "Unit III adds a state. A recurrent network feeds its own output back as input, so the same weights process every timestep and context accumulates. Training unrolls the recurrence and backpropagates through time; the repeated multiplication across steps creates vanishing and exploding gradients that plain RNNs cannot survive past a few dozen timesteps. LSTM and GRU add learned gates that protect a cell state, seq2seq frames translation as encode-then-decode, and attention lets the decoder look directly back at every encoder state — the idea that grew into the transformer (Unit V).",
        inOneBreath:
          "RNN: h_t = tanh(Wh*h_{t-1} + Wx*x_t + b); training unrolls over T steps and backpropagates through time (BPTT); gradients multiply by Wh^T each step, so |Wh| < 1 vanishes and > 1 explodes; LSTM guards the cell state with forget/input/output gates, C_t = f*C_{t-1} + i*g; GRU merges gates (update, reset) with fewer parameters; seq2seq = encoder context -> decoder; attention computes softmax scores over encoder states and builds a per-step context, removing the fixed-vector bottleneck.",
        sections: [
          {
            number: "3.1",
            title: "The recurrent neuron and unrolled RNNs",
            body: [
              "Feedforward networks accept fixed-size inputs and forget everything between samples; language, speech and sensor data are neither fixed-size nor memoryless. A recurrent neural network (RNN) adds a hidden state that persists across timesteps: at each step t it consumes the current input x_t and its previous state h_{t-1}, and produces a new state h_t = tanh(Wh * h_{t-1} + Wx * x_t + b). The same three weight tensors are reused at EVERY timestep — that sharing is what lets a variable-length sequence map to a fixed-size state.",
              "The unrolled view makes the structure concrete. Writing the recurrence for steps 1..T produces a chain: h_1 depends on x_1, h_2 on h_1 and x_2, and so on — a deep feedforward network whose depth equals sequence length, with weights tied across layers. Outputs can attach at every step (y_t = g(Wy * h_t): per-frame tagging such as POS labels) or only at the end (h_T summarizes the sequence: sentiment, the encoder of Section 3.7). Unrolling is not just a picture — it is the definition of how gradients will flow in Section 3.2.",
              "A worked dimension trace: word embeddings of size 300, hidden state of size 512. At step t: Wx is 512x300, Wh is 512x512, b is 512; h_t = tanh(Wx*x_t + Wh*h_{t-1} + b) is a 512-vector. Parameters total (512*300 + 512*512 + 512) = 411,136 for the cell — independent of sequence length T, which is the point: a 5-word sentence and a 500-word document use identical weights. If an output layer maps 512 -> 10,000 (vocabulary), add 5.12M weights attached per step but shared.",
              "Applications organize by output pattern. One-to-many: image captioning (one image -> a sentence). Many-to-one: sentiment classification (a review -> one score). Many-to-many aligned: POS tagging, video frame labelling (input and output step together). Many-to-many delayed (seq2seq): machine translation, where output length differs from input length. This taxonomy is a standard 4-mark exam item and doubles as the design checklist when choosing where to read the state.",
              "Limitations set up the whole unit. Plain tanh RNNs in practice remember only a handful of steps — the repeated multiplication through Wh (Section 3.3) either shrinks the gradient to nothing (long-term dependencies forgotten) or explodes (training NaNs). They are also strictly sequential at training time (step t+1 needs step t's state), which wastes the parallel hardware that CNNs exploit — a cost only the transformer (Unit V) ultimately removed. Everything between Sections 3.2 and 3.8 manages or routes around these two walls.",
            ],
            bullets: [
              "Recurrence: h_t = tanh(Wh*h_{t-1} + Wx*x_t + b); the same weights act at every timestep.",
              "Unrolling turns the loop into a depth-T feedforward chain with tied weights.",
              "Parameter count is independent of sequence length (e.g. 512x300 + 512x512 + 512 ~ 411k).",
              "Output patterns: one-to-many (captioning), many-to-one (sentiment), aligned many-to-many (tagging), delayed many-to-many (translation).",
              "Per-step outputs read y_t = g(Wy*h_t); end-of-sequence tasks read the final state h_T.",
              "Plain RNNs remember only a few dozen steps: vanishing/exploding gradients through Wh.",
              "Sequential training limits parallelism — the eventual motivation for attention/transformers.",
            ],
            keyTerms: [
              { term: "Hidden state h_t", definition: "The running summary the RNN carries from step to step; updated at every timestep." },
              { term: "Unrolling", definition: "Writing the recurrence out over T steps as a deep tied-weight network." },
              { term: "Many-to-one", definition: "Sequence input, single output at the end (e.g. sentiment from a review)." },
              { term: "Weight sharing across time", definition: "Wh, Wx, b are identical at every timestep — one cell processes any length." },
            ],
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Draw the unrolled RNN (three or four steps) for every RNN question. The roll is one box with a self-loop; the unroll is a chain with shared-weight annotations. The examiner's rubric almost always includes the unrolled diagram.",
            },
            diagram: {
              kind: "cycle",
              title: "One RNN step (the rolled view)",
              caption:
                "Unrolled, this loop becomes a chain of depth T with the same weights at every node.",
              steps: [
                { label: "Receive x_t", note: "current token or frame" },
                { label: "Combine h_{t-1} + x_t", note: "Wh*h_{t-1} + Wx*x_t + b" },
                { label: "tanh -> new state h_t", note: "bounded, non-saturating centre" },
                { label: "Emit y_t (optional)", note: "y_t = g(Wy*h_t)" },
                { label: "Pass h_t to step t+1", note: "state carries the memory" },
                { label: "Repeat until T", note: "same weights every step" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "An RNN cell stepped over a sequence in numpy.",
              code: `import numpy as np

def rnn_step(x_t, h_prev, Wx, Wh, b):
    return np.tanh(Wx @ x_t + Wh @ h_prev + b)

d, H = 300, 512                          # embedding size, hidden size
Wx = np.random.randn(H, d) * 0.1
Wh = np.random.randn(H, H) * 0.1
b  = np.zeros(H)

h = np.zeros(H)
for t in range(20):                      # process 20 tokens
    x_t = np.random.randn(d)
    h = rnn_step(x_t, h, Wx, Wh, b)
print("state after sequence:", h.shape)  # (512,) - the summary`,
            },
            examQuestions: [
              {
                q: "Define a recurrent neural network, give its update equation, draw the unrolled network for 4 timesteps, and classify RNN applications by their input-output pattern.",
                marks: 7,
                outline: [
                  "Definition: network with persistent hidden state processing sequences step by step.",
                  "Equation: h_t = tanh(Wh*h_{t-1} + Wx*x_t + b); output y_t = g(Wy*h_t).",
                  "Unrolled diagram: x1..x4 -> h1..h4, weights Wh/Wx shared, annotated.",
                  "One-to-many: image captioning.",
                  "Many-to-one: sentiment analysis.",
                  "Many-to-many aligned: POS tagging / frame labelling.",
                  "Many-to-many delayed: machine translation (seq2seq preview).",
                ],
              },
              {
                q: "Why does an RNN's parameter count not depend on sequence length?",
                marks: 2,
                outline: [
                  "The same Wh, Wx, b are reused at every timestep.",
                  "Longer sequences mean more applications of the same cell, not more weights.",
                ],
              },
              {
                q: "An RNN has 300-d inputs and a 512-d hidden state. Compute the recurrent cell's parameter count.",
                marks: 3,
                outline: [
                  "Wx: 512*300 = 153,600.",
                  "Wh: 512*512 = 262,144; b: 512.",
                  "Total 416,256.",
                ],
              },
            ],
          },
          {
            number: "3.2",
            title: "Training through time: backpropagation through time (BPTT)",
            body: [
              "Backpropagation through time (BPTT) is ordinary backpropagation applied to the unrolled network. The forward pass runs the recurrence for T steps, caching every state h_t and output y_t. The loss is assembled per step: for per-step targets L = sum_t L(y_t, target_t); for a single end-of-sequence target only L(y_T) contributes. The backward pass then walks the unrolled chain in reverse, propagating deltas from every loss term back through the shared weights.",
              "The key equation is the state-to-state gradient. Because h_{t+1} = tanh(Wh*h_t + ...), the gradient arriving at h_t must pass through step t+1's Jacobian: dh_t contribution = (Wh^T * dh_{t+1}) * (1 - h_{t+1}^2) — the tanh derivative as the local factor, Wh^T carrying the delta back one step. When loss occurs at many steps, deltas are SUMMED at each state: dL/dW accumulates contributions from all t. Each weight's gradient is then dL/dWx = sum_t delta_t * x_t^T and dL/dWh = sum_t delta_t * h_{t-1}^T — sums over time of outer products, exactly like the layer equations of Section 1.5 with time replacing depth.",
              "A scalar trace makes the mechanics visible. Take h_t = tanh(w*h_{t-1}) with loss only at step T: L = 0.5*(h_T - target)^2. Forward stores h_0..h_T. Backward: dh_T = h_T - target; then for t = T..1: dL/dw += dh_t * (1 - h_{t-1}^2) * h_{t-1} and dh_{t-1} = dh_t * (1 - h_t^2) * w. Two accumulators run in opposite directions: dL/dw gathers the total gradient, dh carries the state delta back one more step. With w = 0.5 and T = 8, w^7 ~ 0.008 already shows the shrinkage that Section 3.3 formalizes.",
              "Cost and truncation. Full BPTT stores all T states and their activations and backpropagates through all of them — memory grows linearly with sequence length, which for documents of thousands of tokens is prohibitive. Truncated BPTT (TBPTT) splits the sequence into chunks of k steps (e.g. k = 20-50): forward carries the hidden state across chunk boundaries, but gradients flow back only k steps. The state still transports information forward; only the learning signal is local. TBPTT is the standard training regime for language models over long corpora and is the honest answer to 'how are long sequences actually trained?'.",
              "Advantages and practical notes. BPTT is exact for the unrolled graph, requires no new mathematics beyond Section 1.5, and frameworks implement it automatically (call model.fit on padded sequences; the framework unrolls). Its costs: sequential dependency prevents parallelization across time (the transformer's later motivation); memory scales with T unless truncated; and gradients through long spans are exactly as unstable as Section 3.3 describes — clipping (Section 3.3) is applied on every BPTT update in practice.",
            ],
            bullets: [
              "BPTT = backprop on the unrolled network; forward caches all states, backward walks in reverse.",
              "State gradient passes through one Jacobian per step: (Wh^T * delta) * (1 - h^2).",
              "Multiple loss terms: deltas from every step SUM into each shared weight's gradient.",
              "dL/dWx = sum_t delta_t * x_t^T; dL/dWh = sum_t delta_t * h_{t-1}^T — outer-product sums over time.",
              "Scalar trace: dh_{t-1} = dh_t * (1 - h_t^2) * w — the factor that shrinks or blows up.",
              "Truncated BPTT: carry state across chunks, backprop only k = 20-50 steps; standard for long corpora.",
              "Memory grows with T (full BPTT) or k (truncated); time steps cannot train in parallel.",
            ],
            keyTerms: [
              { term: "BPTT", definition: "Backpropagation through time: backprop applied to the unrolled recurrent network." },
              { term: "Jacobian (state-to-state)", definition: "The derivative matrix of h_{t+1} w.r.t. h_t; its powers control gradient flow." },
              { term: "Truncated BPTT", definition: "Limit backpropagation to the last k steps while carrying the state forward across chunks." },
              { term: "Teacher forcing", definition: "Feeding the true previous target (not the model's own output) as input during seq2seq training." },
            ],
            callout: {
              type: "warning",
              title: "Common mistake",
              body: "BPTT is not a different algorithm from backpropagation — it is backprop on the unrolled graph. State that sentence and draw the unroll; answers that treat BPTT as mysterious new mathematics lose the definition mark.",
            },
            diagram: {
              kind: "flow",
              title: "One BPTT iteration",
              caption:
                "Forward in time to compute and cache; backward in time to accumulate shared-weight gradients.",
              steps: [
                { label: "Forward h_1 -> h_T", note: "cache every state and output" },
                { label: "Loss L = sum_t L(y_t)", note: "per-step or end-of-sequence" },
                { label: "Delta at each loss point", note: "dL/dy_t" },
                { label: "Walk backward: dh_{t-1} = Wh^T dh_t * (1 - h_t^2)", note: "one Jacobian per step" },
                { label: "Accumulate dL/dW = sum_t delta_t * input^T", note: "shared weights, summed over t" },
                { label: "Optimizer step", note: "optionally truncated to last k steps" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "BPTT on a scalar RNN: h_t = tanh(w * h_{t-1}).",
              code: `import numpy as np

T, w, eta, target = 8, 0.5, 0.1, 1.0
hs = [0.0]
for t in range(T):
    hs.append(np.tanh(w * hs[-1]))        # forward, store states

dL_dw = 0.0
dh = hs[T] - target                       # delta at the loss point
for t in range(T, 0, -1):                 # walk backwards through time
    dL_dw += dh * (1 - hs[t-1]**2) * hs[t-1]
    dh = dh * (1 - hs[t-1]**2) * w        # state delta, one step back
w -= eta * dL_dw
print("gradient:", round(dL_dw, 6), " new w:", round(w, 5))`,
            },
            examQuestions: [
              {
                q: "Explain backpropagation through time for a simple RNN. Give the forward and backward equations, illustrate with a scalar trace, and explain why truncated BPTT is used for long sequences.",
                marks: 7,
                outline: [
                  "Unroll the recurrence h_t = tanh(Wh h_{t-1} + Wx x_t + b) over T steps.",
                  "Forward: compute and cache h_1..h_T and outputs y_t.",
                  "Loss: sum of per-step losses (or final-step loss).",
                  "Backward: dh_{t-1} = Wh^T dh_t * (1 - h_t^2) through each step.",
                  "Weight gradients: dL/dWh = sum_t delta_t h_{t-1}^T (and dL/dWx analogously).",
                  "Scalar trace with w = 0.5, T = 8: w^7 ~ 0.008 shows shrinkage.",
                  "Truncated BPTT: state carried forward, gradients limited to k steps; memory savings.",
                ],
              },
              {
                q: "What is truncated BPTT and what does it trade away?",
                marks: 2,
                outline: [
                  "Backpropagate only the last k steps of each chunk while carrying the state forward.",
                  "Trades long-range credit assignment for bounded memory and compute.",
                ],
              },
              {
                q: "In the scalar model h_t = tanh(w h_{t-1}), what factor multiplies the gradient per timestep, and when does it cause vanishing or explosion?",
                marks: 3,
                outline: [
                  "The factor is w * (1 - h_t^2).",
                  "Its magnitude is bounded by |w|; |w| < 1 shrinks the gradient exponentially.",
                  "|w| > 1 can grow it exponentially (explosion).",
                ],
              },
            ],
          },
          {
            number: "3.3",
            title: "Vanishing and exploding gradients in RNNs",
            body: [
              "The RNN's defining strength — shared weights applied at every step — is also its failure mode. Backpropagating through T steps multiplies the state gradient by the state-to-state Jacobian T times. For h_t = tanh(Wh h_{t-1} + Wx x_t), each factor is J_t = diag(1 - h_t^2) * Wh^T with spectral norm at most ||Wh||. If ||Wh|| < 1, the product decays like ||Wh||^T: gradients from step 100 arrive at step 1 scaled by something like 0.9^100 ~ 2.7e-5 — the network cannot learn dependencies spanning more than a few dozen steps. If ||Wh|| > 1, the product grows without bound and training produces NaNs within a few updates.",
              "The two diseases need different medicine, and confusing them is a classic exam slip. Exploding gradients are a STABILITY problem with a cheap fix: gradient clipping rescales the whole gradient vector when its norm exceeds a threshold (typical 1-5): g := g * (clip / ||g||) if ||g|| > clip. Direction is preserved, magnitude is capped; one line of code, applied on every update, and the problem is essentially solved. Vanishing gradients are a CAPACITY problem: no rescale can recover information that was multiplied away — long-range credit assignment is simply lost, and the fix must be architectural.",
              "Architectural remedies for vanishing gradients, in increasing sophistication. Careful initialization and identity-style recurrent weights (keep ||Wh|| near 1) extend the usable memory span modestly. ReLU-style activations in recurrence help but trade explosion risk. Gated cells are the decisive fix: the LSTM (Section 3.4) maintains a cell state updated ADDITIVELY (C_t = f_t * C_{t-1} + i_t * g_t) instead of multiplicatively, so gradients can flow across hundreds of steps through the constant-error-carousel path. GRU (Section 3.5) achieves similar behaviour with fewer gates. Both are the standard answer to 'how do RNNs learn long-term dependencies?'.",
              "A diagnostic sketch ties the mathematics to practice: plot per-timestep gradient norms during training of a plain RNN on a synthetic long-dependency task. Healthy early steps show norms roughly constant across t; vanishing shows an exponential decay curve from late to early steps; exploding shows a few norms spiking past 1e3 before NaN. The three curves and their causes — product of Jacobians below, near, or above 1 in norm — are the complete conceptual answer to any vanishing/exploding question.",
              "Why this matters beyond RNNs: the same product-of-Jacobians analysis explained depth problems in feedforward nets (Section 1.7), the same clipping trick protects every deep training run (including transformers), and the gating idea (multiplicative units controlling information flow) reappears in attention and modern state-space models. The unit's arc — identify the disease, gate the state — is one of the cleanest cause-and-cure stories in deep learning and structures many RGPV long answers.",
            ],
            bullets: [
              "Gradient across T steps multiplies T state Jacobians: bounded by ||Wh||^T.",
              "||Wh|| < 1: vanishing — dependencies beyond ~20-50 steps are unlearnable in plain RNNs.",
              "||Wh|| > 1: exploding — NaNs within a few updates.",
              "Exploding fix: gradient clipping g := g * clip/||g|| when ||g|| > clip; cheap and universal.",
              "Vanishing fix must be architectural: careful init, and decisively gated cells (LSTM/GRU).",
              "LSTM's additive cell update C_t = f*C_{t-1} + i*g lets gradients bypass repeated multiplication.",
              "Same analysis recurs in deep feedforward nets (1.7) and protects transformer training today.",
            ],
            keyTerms: [
              { term: "Vanishing gradient (RNN)", definition: "Exponential decay of the temporal gradient when the recurrent Jacobian norm is below 1." },
              { term: "Exploding gradient", definition: "Exponential growth of the temporal gradient, ending in NaNs; fixed by clipping." },
              { term: "Gradient clipping", definition: "Rescale the gradient to a maximum norm: g := g * (clip / ||g||)." },
              { term: "Long-term dependency", definition: "A relationship between sequence elements far apart in time (hundreds of steps) that the model must learn." },
            ],
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Keep the two fixes separate: CLIPPING for exploding, GATES (LSTM/GRU) for vanishing. Answers that prescribe clipping for vanishing gradients reveal a missing distinction that examiners probe deliberately.",
            },
            diagram: {
              kind: "compare",
              title: "Vanishing vs exploding gradients",
              caption:
                "Same root cause - repeated Jacobian multiplication - opposite symptoms and opposite cures.",
              left: {
                heading: "Vanishing (||J|| < 1)",
                items: [
                  "Gradient decays like ||Wh||^T toward early steps",
                  "Long-range dependencies never learn",
                  "Training looks healthy but slowly stalls",
                  "Early layers' weights barely change",
                  "Fix: LSTM/GRU gating, careful init, skip paths",
                ],
              },
              right: {
                heading: "Exploding (||J|| > 1)",
                items: [
                  "Gradient grows exponentially across steps",
                  "Loss spikes, then NaN within a few updates",
                  "Caused by large weights/curvature regions",
                  "Diagnosed by gradient-norm spikes",
                  "Fix: gradient clipping (norm threshold 1-5)",
                ],
              },
            },
            codeExample: {
              language: "python",
              caption: "Global-norm gradient clipping in numpy.",
              code: `import numpy as np

grads = {"Wx": np.array([5.0]), "Wh": np.array([-12.0])}  # exploding norms
total_norm = np.sqrt(sum(np.sum(g**2) for g in grads.values()))

clip = 1.0
if total_norm > clip:                 # rescale, preserve direction
    for k in grads:
        grads[k] *= clip / total_norm

new_norm = np.sqrt(sum(np.sum(g**2) for g in grads.values()))
print("before:", total_norm.round(2), " after:", new_norm.round(2))  # 1.0`,
            },
            examQuestions: [
              {
                q: "Explain why plain RNNs suffer vanishing and exploding gradients. Give the mathematical cause, one symptom of each, and the standard remedy for each.",
                marks: 7,
                outline: [
                  "Unrolled chain multiplies the state Jacobian once per timestep.",
                  "Norm bound: gradient ~ ||Wh||^T (times tanh derivatives).",
                  "Vanishing: ||Wh|| < 1 -> decay like 0.9^100 ~ 1e-5; symptom: long dependencies unlearned.",
                  "Exploding: ||Wh|| > 1 -> growth; symptom: loss spike, NaN.",
                  "Exploding remedy: gradient clipping g := g * clip/||g||.",
                  "Vanishing remedy: architectural - gated cells (LSTM: additive cell state).",
                  "Supporting remedies: careful recurrent init, ReLU variants, truncated BPTT for cost.",
                ],
              },
              {
                q: "Write the gradient-clipping rule and state what it preserves.",
                marks: 2,
                outline: [
                  "If ||g|| > clip: g := g * (clip / ||g||).",
                  "It preserves the gradient's direction while capping its magnitude.",
                ],
              },
              {
                q: "Why can clipping NOT fix vanishing gradients?",
                marks: 3,
                outline: [
                  "Vanishing loses information multiplicatively before the gradient is assembled.",
                  "Rescaling a tiny gradient restores its size but not the lost credit assignment.",
                  "The cure must change the computation (gates/additive paths), not the update size.",
                ],
              },
            ],
          },
          {
            number: "3.4",
            title: "Long Short-Term Memory (LSTM)",
            body: [
              "The LSTM (Hochreiter and Schmidhuber, 1997) is a gated cell that lets gradients survive hundreds of steps. Its central object is the cell state C_t — a memory conveyor belt updated ADDITIVELY: C_t = f_t * C_{t-1} + i_t * g_t. Compare with the plain RNN's h_t = tanh(...) where each step recomputes and squashes the entire state: in the LSTM, old memory persists untouched unless the forget gate chooses to erase it, and gradients flowing back through the C path meet only multiplications by f_t (near 1 when remembering) instead of a fresh Jacobian per step. Hochreiter named this the constant error carousel.",
              "The three gates, each a sigmoid of the current input and previous hidden state. Forget gate: f_t = sigmoid(Wf*[h_{t-1}, x_t] + bf) — decides what fraction of each old memory component to keep (0 = erase, 1 = keep). Input gate: i_t = sigmoid(Wi*[h_{t-1}, x_t] + bi) — decides how much of the new candidate g_t = tanh(Wg*[h_{t-1}, x_t] + bg) to write. Output gate: o_t = sigmoid(Wo*[h_{t-1}, x_t] + bo) — decides how much of tanh(C_t) leaves the cell as the visible state h_t = o_t * tanh(C_t). The cell state stays protected behind the output gate; hidden state is what downstream layers and the next step actually see.",
              "A dimension trace for the standard configuration: input embedding 300, hidden size 512. Each gate weight is 512x(512 + 300) = 512x812, plus a 512 bias — four of them (f, i, g, o). Parameters per LSTM layer: 4 * (512*812 + 512) = 4 * 416,256 = 1,665,024 — exactly four times a plain RNN cell's 411k, the standard check question ('how many parameters does an LSTM layer have relative to a plain RNN? Answer: 4x'). Implementations concatenate the four gates into one 2048x812 matrix for speed; the mathematics is unchanged.",
              "Why the gates defeat vanishing gradients, stated precisely. The backward path through the cell state is dC_{t-1} = dC_t * f_t (plus a term through i_t, g_t): no tanh derivative, no weight matrix — just the forget gate's scalar per dimension. When the network learns to hold f_t near 1 along relevant dimensions, gradient magnitude is preserved across arbitrarily many steps (a linear, non-saturating highway). When it learns f_t near 0, memory is deliberately cleared. The cell thus learns WHEN to remember and WHEN to forget, which is why LSTMs capture dependencies spanning hundreds of timesteps where plain RNNs manage tens.",
              "Practice notes and limits. Layer normalization or recurrent dropout variants are used for regularization (naive dropout inside the recurrence harms the memory path). Peephole connections (gates also reading C) and coupled forget/input gates are historical refinements. Costs: 4x parameters and strictly sequential computation; a bidirectional LSTM doubles that again (Section 3.6). These costs are why the transformer (Unit V) eventually displaced LSTMs at scale — but LSTMs remain the right tool for small-data, streaming and low-latency sequential tasks, and they remain the syllabus's canonical 'long-term memory' answer.",
            ],
            bullets: [
              "Cell state updated additively: C_t = f_t * C_{t-1} + i_t * g_t — the constant error carousel.",
              "Forget gate f_t: how much old memory to keep; input gate i_t: how much candidate g_t = tanh(...) to write.",
              "Output gate o_t: how much of tanh(C_t) becomes the visible state h_t = o_t * tanh(C_t).",
              "All gates are sigmoids of [h_{t-1}, x_t]; cell state never passes through a tanh on the backward C path.",
              "Backward through memory: dC_{t-1} = dC_t * f_t — near-1 gates preserve gradient indefinitely.",
              "Parameters: 4x a plain RNN cell (four gate matrices of (H x (H + d))).",
              "Learned behaviour: when to remember, when to forget, when to expose - dependencies over hundreds of steps.",
            ],
            keyTerms: [
              { term: "Cell state C_t", definition: "The LSTM's protected memory vector, updated additively by the forget and input gates." },
              { term: "Forget gate", definition: "f_t = sigmoid(...): per-dimension fraction of the old cell state to retain." },
              { term: "Constant error carousel", definition: "Hochreiter's name for the nearly unattenuated gradient path through the cell state." },
              { term: "Gate", definition: "A sigmoid-controlled multiplier (0 to 1) regulating information flow into or out of a component." },
            ],
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Draw the LSTM cell with the cell state as a horizontal conveyor belt and the three gates as valves. Label each valve with its equation. The diagram plus the update C_t = f*C_{t-1} + i*g and h_t = o*tanh(C_t) is the complete core of a 7-mark LSTM answer.",
            },
            diagram: {
              kind: "pipeline",
              title: "Inside one LSTM step (data flow)",
              caption:
                "Gates decide erasure, writing and exposure; the cell state carries memory across steps unchanged.",
              stages: [
                { label: "Forget gate f_t = sigmoid(...)", note: "how much of C_{t-1} survives" },
                { label: "Input gate i_t = sigmoid(...)", note: "how much new memory to admit" },
                { label: "Candidate g_t = tanh(...)", note: "the proposed new content" },
                { label: "Cell update C_t = f_t*C_{t-1} + i_t*g_t", note: "additive - the gradient highway" },
                { label: "Output gate o_t = sigmoid(...)", note: "h_t = o_t * tanh(C_t)" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "An LSTM cell step in numpy.",
              code: `import numpy as np

def sigmoid(z): return 1 / (1 + np.exp(-z))

def lstm_step(x, h, c, W, b):
    z = np.concatenate([h, x])
    f = sigmoid(W["f"] @ z + b["f"])     # forget gate
    i = sigmoid(W["i"] @ z + b["i"])     # input gate
    g = np.tanh(W["g"] @ z + b["g"])     # candidate content
    o = sigmoid(W["o"] @ z + b["o"])     # output gate
    c = f * c + i * g                    # additive cell update
    h = o * np.tanh(c)
    return h, c

d, H = 4, 8
W = {k: np.random.randn(H, H + d) * 0.1 for k in ["f", "i", "g", "o"]}
b = {k: np.zeros(H) for k in ["f", "i", "g", "o"]}
h, c = lstm_step(np.random.randn(d), np.zeros(H), np.zeros(H), W, b)
print(h.shape, c.shape)                  # (8,) (8,)`,
            },
            examQuestions: [
              {
                q: "Explain the LSTM architecture. Give the equations of all three gates and the cell-state update, explain how the additive update overcomes vanishing gradients, and compare the parameter count with a plain RNN.",
                marks: 7,
                outline: [
                  "Motivation: plain RNNs forget beyond tens of steps (Section 3.3).",
                  "Gates: f_t, i_t, o_t = sigmoid(W[h_{t-1}, x_t] + b) each.",
                  "Candidate: g_t = tanh(W[h_{t-1}, x_t] + b).",
                  "Cell update: C_t = f_t * C_{t-1} + i_t * g_t (additive memory).",
                  "Output: h_t = o_t * tanh(C_t).",
                  "Gradient path: dC_{t-1} = dC_t * f_t - no Jacobian, near-1 gates preserve signal.",
                  "Params: 4 gate matrices of H x (H + d) = 4x a plain RNN cell.",
                ],
              },
              {
                q: "What does the forget gate learn to do, and what value indicates full retention?",
                marks: 2,
                outline: [
                  "It learns per-dimension erasure of the cell state: 0 = erase, 1 = keep.",
                  "f_t = 1 means the old memory passes through unchanged.",
                ],
              },
              {
                q: "An LSTM layer has hidden size 256 and input size 128. Compute its total parameter count.",
                marks: 3,
                outline: [
                  "Each gate: 256*(256 + 128) + 256 = 98,560.",
                  "Four gates: 4 * 98,560.",
                  "Total 394,240.",
                ],
              },
            ],
          },
          {
            number: "3.5",
            title: "Gated Recurrent Unit (GRU)",
            body: [
              "The GRU (Cho et al., 2014) is the LSTM's leaner sibling: the same gating philosophy with two gates instead of three and no separate cell state. Introduced during seq2seq's early machine-translation experiments, it matched LSTM accuracy on many benchmarks while training faster and using about 25% fewer parameters — and it became the default 'simpler recurrent unit' across syllabi and practice.",
              "The equations, with hidden state h carrying memory directly. Reset gate: r_t = sigmoid(Wr*[h_{t-1}, x_t] + br) — controls how much past state the candidate may see; r_t near 0 lets the candidate be written from the current input alone (short-term, relevant when the past is stale). Update gate: z_t = sigmoid(Wz*[h_{t-1}, x_t] + bz) — the linear interpolation knob: h_t = (1 - z_t) * h_{t-1} + z_t * h~_t, where the candidate h~_t = tanh(Wh*[r_t * h_{t-1}, x_t] + bh). One glance shows the family resemblance: z_t plays the roles of LSTM's forget AND input gates as complementary halves of a single split (they always sum to 1), and the cell state C is merged with the hidden state h.",
              "The gradient argument survives the simplification. Along dimensions where z_t is near 0, h_t = h_{t-1} passes the state through unchanged with derivative 1 — exactly the additive highway that protects long-range gradients, achieved with one gate instead of a separate cell. Where z_t is near 1, the state is fully replaced by the candidate. Memory length is therefore learned per-dimension through z, just as in LSTM through f — the GRU trades expressiveness (no independent erase and write) for economy (2 gate matrices + 1 candidate vs 3 gates + 1 candidate).",
              "Parameter accounting, the standard numeric question. Per GRU layer: two gates and one candidate, each a matrix of H x (H + d) plus H biases: 3 * (H*(H + d) + H). For H = 512, d = 300: 3 * 416,256 = 1,248,768 parameters against the LSTM's 1,665,024 — 75% of the LSTM's count. Inference is correspondingly cheaper; on small datasets the reduced capacity also overfits less, which is part of why GRUs often tie LSTMs on modest-sized tasks.",
              "Choosing between them, as exam answers require. Empirically the two are close (larger comparative studies find task-dependent, small differences): LSTM retains a small edge on tasks needing fine-grained memory control (longer sequences, handwriting synthesis); GRU wins on training speed, memory footprint and simplicity. Both have largely been superseded by attention-based transformers on large-scale NLP, but for streaming, low-latency or small-data sequence tasks both remain competitive — and in an exam, 'GRU = LSTM with merged gates, 3/4 the parameters, similar accuracy' is the sentence that scores.",
            ],
            bullets: [
              "GRU: two gates (update z, reset r) operating directly on the hidden state; no separate cell state.",
              "Update gate interpolates: h_t = (1 - z_t) * h_{t-1} + z_t * h~_t — erase and write in one split.",
              "Reset gate r_t gates the PAST inside the candidate: h~_t = tanh(W[r_t * h_{t-1}, x_t] + b).",
              "z_t near 0 passes state through with derivative 1 — the same gradient highway as LSTM's cell.",
              "Parameters: 3 * (H*(H + d) + H) = 75% of an LSTM layer's count.",
              "Accuracy typically comparable to LSTM; GRU faster to train, better on small data.",
              "Both are the canonical fixes for vanishing gradients; transformers later superseded them at scale.",
            ],
            keyTerms: [
              { term: "Update gate z_t", definition: "GRU gate interpolating between the previous state and the new candidate: h_t = (1 - z) h_{t-1} + z h~." },
              { term: "Reset gate r_t", definition: "GRU gate controlling how much of the past state the candidate can see." },
              { term: "Candidate state h~_t", definition: "The tanh-proposed new content, computed from gated past state plus input." },
              { term: "GRU", definition: "Gated Recurrent Unit: a 2-gate, single-state simplification of the LSTM (Cho et al., 2014)." },
            ],
            callout: {
              type: "tip",
              title: "Remember",
              body: "Compare them in one line: LSTM = 3 gates + separate cell state, 4 parameter blocks; GRU = 2 gates on the hidden state itself, 3 parameter blocks (75% of LSTM), similar accuracy. Examiners reward the parameter ratio with the reasoning.",
            },
            diagram: {
              kind: "compare",
              title: "LSTM vs GRU",
              caption:
                "Same goal - protect long-range memory with gates - different machinery budgets.",
              left: {
                heading: "LSTM",
                items: [
                  "Separate cell state C_t and hidden state h_t",
                  "Three gates: forget, input, output",
                  "Cell update C_t = f*C_{t-1} + i*g",
                  "4 parameter blocks: H x (H + d) each",
                  "Finer control of memory (erase/write/expose separately)",
                ],
              },
              right: {
                heading: "GRU",
                items: [
                  "Single state h_t; no separate cell",
                  "Two gates: update, reset",
                  "Interpolation h_t = (1 - z) h_{t-1} + z h~_t",
                  "3 parameter blocks - 75% of LSTM's count",
                  "Faster training; comparable accuracy on most tasks",
                ],
              },
            },
            codeExample: {
              language: "python",
              caption: "A GRU cell step in numpy.",
              code: `import numpy as np

def sigmoid(z): return 1 / (1 + np.exp(-z))

def gru_step(x, h, W, b):
    z = np.concatenate([h, x])
    u = sigmoid(W["u"] @ z + b["u"])                 # update gate
    r = sigmoid(W["r"] @ z + b["r"])                 # reset gate
    h_hat = np.tanh(W["h"] @ np.concatenate([r * h, x]) + b["h"])
    return (1 - u) * h + u * h_hat                   # blend old and new

d, H = 4, 8
W = {k: np.random.randn(H, H + d) * 0.1 for k in ["u", "r", "h"]}
b = {k: np.zeros(H) for k in ["u", "r", "h"]}
h = gru_step(np.random.randn(d), np.zeros(H), W, b)
print(h.shape)                                       # (8,)`,
            },
            examQuestions: [
              {
                q: "Explain the GRU architecture with its gate equations, show how it reduces the LSTM's parameters, and discuss when GRU is preferable to LSTM.",
                marks: 7,
                outline: [
                  "Motivation: LSTM's power with less machinery.",
                  "Reset gate: r_t = sigmoid(Wr[h_{t-1}, x_t] + br) - gates the past in the candidate.",
                  "Candidate: h~_t = tanh(Wh[r_t * h_{t-1}, x_t] + bh).",
                  "Update gate: z_t = sigmoid(Wz[h_{t-1}, x_t] + bz).",
                  "State blend: h_t = (1 - z_t) h_{t-1} + z_t h~_t (erase and write as one split).",
                  "Gradient highway when z_t ~ 0 - same long-memory argument as LSTM.",
                  "Params 3(H(H+d)+H) = 75% of LSTM; prefer GRU for speed/small data, LSTM for fine memory control.",
                ],
              },
              {
                q: "Which GRU gate plays the combined role of LSTM's forget and input gates?",
                marks: 2,
                outline: [
                  "The update gate z_t.",
                  "(1 - z_t) retains old state (forget role), z_t admits the candidate (input role).",
                ],
              },
              {
                q: "Compute a GRU layer's parameters for hidden size 128 and input size 64.",
                marks: 3,
                outline: [
                  "Each block: 128*(128 + 64) + 128 = 24,704.",
                  "Three blocks (u, r, candidate).",
                  "Total 74,112.",
                ],
              },
            ],
          },
          {
            number: "3.6",
            title: "Bidirectional and deep (stacked) RNNs",
            body: [
              "A unidirectional RNN reads the sequence left to right, so its state at step t knows only the past — but many tasks need the future too. In POS tagging, deciding whether 'bank' is a noun depends on words AFTER it; in speech recognition, phoneme identity depends on what follows. The bidirectional RNN (Schuster and Paliwal, 1997) runs TWO RNNs over the same input, one forward and one backward, and concatenates their states at each step: h_t = [h_t^fw ; h_t^bw]. Every position now sees the entire sequence — past via the forward pass, future via the backward one.",
              "Dimension consequences are the exam staple. With hidden size H per direction, the output at each step has size 2H (concatenation). A Keras Bidirectional(LSTM(64)) therefore emits 128-dim vectors per step. Parameters double (two complete RNNs), and the backward pass doubles compute as well. Concatenation is the standard merge; summation or averaging are variants. Crucially, bidirectionality is a TRAINING-TIME structure: at inference on streaming data the future does not exist, so bidirectional models suit offline tasks (transcription of recorded speech, tagging of complete sentences), not real-time decoding.",
              "Deep (stacked) RNNs apply the same idea networks always use for abstraction: layer them. Layer 1's output sequence feeds layer 2 as input, layer 2 feeds layer 3: each level extracts progressively more abstract temporal features — phonemes from frames, words from phonemes, phrases from words, in the classic speech hierarchy. Stacking L layers multiplies parameters by roughly L and deepens the gradient path, so stacked recurrent nets need the same care as deep feedforward ones: gated cells (LSTM/GRU) at every level, residual connections between layers in large models, and layer normalization for stability.",
              "The full modern recipe combines both: a stacked bidirectional gated RNN — for example 2 layers of bidirectional 256-unit LSTMs emitting 512-dim states — was the state of the art for speech recognition and sequence tagging before transformers took over, and remains a strong, small model for modest datasets. Typical design: embedding layer -> BiLSTM(H1) -> BiLSTM(H2) -> per-step dense head (tagging) or last-state head (classification). Dimensons: with d = 300 embeddings and H1 = H2 = 256, each step's representation is 512-dim, and per-step classification heads see the full-sequence context.",
              "Limitations worth one honest paragraph: compute is strictly sequential within each direction, so stacking multiplies latency; bidirectionality doubles it; and gradient depth still exercises the gated cells' protection. The transformer removed the sequential constraint by attending over all positions at once (Section 5.3) — but stacked bidirectional RNNs remain the cheapest way to give every position full-sequence context when data or latency budgets are small.",
            ],
            bullets: [
              "Bidirectional RNN: forward and backward RNNs over the same input; h_t = [h_fw ; h_bw] concatenated.",
              "Every position sees the full sequence: past + future context (needed for tagging, transcription).",
              "Output size doubles to 2H; parameters and compute roughly double.",
              "It is an offline structure: streaming/real-time inference cannot use the future.",
              "Deep RNNs stack layers: each level extracts more abstract temporal features.",
              "Stack L layers: ~L x parameters, deeper gradient paths; use gated cells + residual/layer-norm.",
              "Standard recipe: embedding -> BiLSTM -> BiLSTM -> dense head; pre-transformer state of the art.",
            ],
            keyTerms: [
              { term: "Bidirectional RNN", definition: "Two RNNs (forward and backward) whose per-step states are concatenated, giving full-sequence context." },
              { term: "Stacked RNN", definition: "Recurrent layers composed on top of each other, each consuming the previous layer's output sequence." },
              { term: "Concatenation merge", definition: "Joining forward and backward states into one 2H-dim vector at each timestep." },
              { term: "Temporal feature hierarchy", definition: "The abstraction ladder stacked RNNs learn: frames -> phonemes -> words -> phrases." },
            ],
            callout: {
              type: "warning",
              title: "Common mistake",
              body: "A Bidirectional(LSTM(64)) layer outputs 128 units per step, not 64. Forgetting to double the dimension when wiring the next layer is the most common shape error in sequence labs — and a favourite quiz question.",
            },
            diagram: {
              kind: "layers",
              title: "A stacked bidirectional RNN (top = output)",
              caption:
                "Each block processes the whole sequence; arrows inside blocks run both ways.",
              layers: [
                { label: "Per-step output head", note: "dense over 512-dim concatenated states" },
                { label: "BiRNN layer 2 (fw + bw, 256 each)", note: "consumes layer 1's sequence" },
                { label: "BiRNN layer 1 (fw + bw, 256 each)", note: "consumes embeddings; outputs 512-dim per step" },
                { label: "Input embeddings (300-d tokens)", note: "one vector per timestep" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "A two-layer bidirectional sequence tagger in Keras.",
              code: `from tensorflow.keras import layers, models

inp = layers.Input(shape=(20, 32))           # 20 steps, 32-d tokens
x = layers.Bidirectional(layers.LSTM(64, return_sequences=True))(inp)
x = layers.Bidirectional(layers.LSTM(64, return_sequences=True))(x)
out = layers.Dense(3, activation="softmax")(x)   # per-step 3-class tag
models.Model(inp, out).summary()
# each BiLSTM emits 128 dims per step; the head tags every position`,
            },
            examQuestions: [
              {
                q: "Explain bidirectional RNNs and deep (stacked) RNNs. Draw a two-layer bidirectional architecture, state the output dimensionality, and discuss why bidirectionality is unsuitable for real-time streaming.",
                marks: 7,
                outline: [
                  "Motivation: unidirectional state sees only the past; tagging needs the future.",
                  "Bidirectional: forward + backward RNNs; h_t = [h_fw ; h_bw].",
                  "Diagram: input -> BiRNN layer 1 -> BiRNN layer 2 -> per-step head.",
                  "Output dims: 2H per step (e.g. BiLSTM(64) -> 128).",
                  "Parameters/compute roughly double (two RNNs).",
                  "Stacked layers: increasing temporal abstraction, ~L x params, need gated cells.",
                  "Streaming limitation: future unavailable at inference; suits offline tasks.",
                ],
              },
              {
                q: "What is the per-step output size of a Bidirectional(GRU(32)) layer?",
                marks: 2,
                outline: [
                  "Each direction emits 32 dims.",
                  "Concatenated output: 64 dims per timestep.",
                ],
              },
              {
                q: "Why do stacked RNNs need gated cells (LSTM/GRU) at every level?",
                marks: 3,
                outline: [
                  "Stacking deepens the gradient path just like depth in feedforward nets.",
                  "Plain cells' Jacobians compound vanishing/exploding across layers AND time.",
                  "Gates keep each level's memory path healthy.",
                ],
              },
            ],
          },
          {
            number: "3.7",
            title: "Sequence-to-sequence models (encoder-decoder)",
            body: [
              "Translation, summarization and question answering map one sequence to ANOTHER sequence of different length and structure — 'How are you?' (3 tokens) -> 'Comment allez-vous?' (3 French tokens, different order). The seq2seq framework (Sutskever et al., 2014) handles this with two coupled RNNs: an ENCODER reads the source and compresses it into a context representation, and a DECODER generates the target from that context, one token at a time.",
              "The encoder is a many-to-one RNN: it consumes x_1..x_Tx and its final state (h_Tx, c_Tx for LSTM) becomes the context vector — a fixed-size summary of the entire source. The decoder is conditionally initialized from that context and generates autoregressively: at each step it receives the previous target token (during training, the TRUE previous token — teacher forcing; during inference, its OWN previous output), updates its state, and emits a softmax over the target vocabulary. Generation stops at an end-of-sequence token. Training minimizes cross-entropy summed over target steps.",
              "The architecture's celebrated weakness is the information bottleneck. Everything the decoder knows about the source must pass through one fixed-size vector — a 512-dim summary of a 50-word sentence, or worse, a 200-word paragraph. Long sources lose detail: early words are compressed hardest (the same gradient-shrinkage of Section 3.3 acts through the encoder), and translation quality measurably degrades as sentence length grows beyond ~20-30 words. This exact observation motivates attention (Section 3.8), which gives the decoder direct access to ALL encoder states.",
              "A concrete dimension trace for a toy translator: source vocabulary 5,000, embeddings 64, latent 256, target vocabulary 5,000. Encoder: LSTM(256) over embedded source, outputs final states (256, 256) — the context. Decoder: LSTM(256) initialized from those states, input at each step is the previous target token's 64-d embedding, output a 5,000-way softmax. Parameters: encoder 4*(256*(256+64) + 256) = 328,448; decoder the same 328,448 plus the 64x256 input projection and the 256x5,000 output layer (1,280,256). Beam search at inference keeps the k best partial hypotheses instead of greedy argmax, usually adding 1-2 BLEU.",
              "Assessment and legacy. Seq2seq's achievements: end-to-end neural machine translation replacing rule-based and phrase-based pipelines (Google's 2016 production switch), plus the general encode-decode template reused for summarization, dialogue, speech and image captioning. Its limits: the bottleneck (fixed by attention), exposure bias (trained on true tokens, tested on its own), and slow autoregressive decoding. Every one of those limitations is a named exam discussion point, and each found its remedy in the attention era — but the encoder-decoder SHAPE survived into transformers, where attention simply replaced the recurrence.",
            ],
            bullets: [
              "Seq2seq: encoder RNN compresses the source into a context vector; decoder RNN generates the target autoregressively.",
              "Context = encoder's final state (h_T, c_T for LSTM); fixed size regardless of source length.",
              "Teacher forcing: feed the TRUE previous target token during training; the model's own output at inference.",
              "Bottleneck: all source information must fit one vector; quality degrades on long inputs.",
              "Inference: greedy decoding or beam search over the top-k partial hypotheses.",
              "Toy trace: 5k vocab, 64-d embeddings, 256 latent -> encoder and decoder ~328k params each + 1.28M output layer.",
              "Legacy: the encode-decode template persists inside transformers; recurrence did not.",
            ],
            keyTerms: [
              { term: "Context vector", definition: "The encoder's final hidden state serving as the fixed-size summary passed to the decoder." },
              { term: "Teacher forcing", definition: "Training the decoder on true previous tokens instead of its own predictions." },
              { term: "Autoregressive decoding", definition: "Generating one token at a time, each conditioned on the tokens generated so far." },
              { term: "Beam search", definition: "Inference that tracks the k most probable partial sequences rather than committing greedily." },
            ],
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "The bottleneck sentence wins marks: 'all source information must pass through a single fixed-size vector, so long sentences lose detail — attention fixes this by letting the decoder consult every encoder state.' Link 3.7 to 3.8 explicitly; the pairing is what the rubric checks.",
            },
            diagram: {
              kind: "pipeline",
              title: "The seq2seq (encoder-decoder) architecture",
              caption:
                "One vector carries everything the decoder knows about the source - the bottleneck attention later removes.",
              stages: [
                { label: "Source tokens", note: "embedded one at a time" },
                { label: "Encoder RNN", note: "reads x_1..x_T, final state = context" },
                { label: "Context vector (h_T, c_T)", note: "fixed size - the bottleneck" },
                { label: "Decoder RNN", note: "initialized from context, teacher forcing in training" },
                { label: "Target tokens", note: "softmax over vocabulary, stop at EOS" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "Encoder-decoder wiring in Keras (toy translator).",
              code: `from tensorflow.keras import layers, models

latent = 256
enc_in = layers.Input(shape=(None, 64))          # variable-length source
_, state_h, state_c = layers.LSTM(latent,
    return_state=True)(enc_in)                   # final state = context
encoder = models.Model(enc_in, [state_h, state_c])

dec_in = layers.Input(shape=(None, 64))          # shifted target
dec_out = layers.LSTM(latent, return_sequences=True)(
    dec_in, initial_state=[state_h, state_c])
probs = layers.Dense(5000, activation="softmax")(dec_out)
models.Model([enc_in, dec_in], probs).summary()  # train with teacher forcing`,
            },
            examQuestions: [
              {
                q: "Explain the seq2seq (encoder-decoder) architecture for machine translation. Describe the role of the context vector, teacher forcing, and the information bottleneck, and why attention was introduced.",
                marks: 7,
                outline: [
                  "Problem: source and target sequences differ in length and order.",
                  "Encoder: RNN consumes source; final state = context vector (fixed size).",
                  "Decoder: initialized from context; emits softmax per target token; stops at EOS.",
                  "Teacher forcing: true previous token fed during training; own output at inference.",
                  "Bottleneck: all source detail through one vector; long sentences degrade.",
                  "Attention preview: decoder scores ALL encoder states and builds a per-step context.",
                  "Mention beam search and exposure bias as inference-time issues.",
                ],
              },
              {
                q: "What is teacher forcing and why is it used?",
                marks: 2,
                outline: [
                  "Feeding the ground-truth previous token to the decoder during training.",
                  "It stabilizes and speeds learning compared to conditioning on the model's own errors.",
                ],
              },
              {
                q: "Why does seq2seq translation quality drop on long input sentences?",
                marks: 3,
                outline: [
                  "The entire source must compress into one fixed-size context vector.",
                  "Encoder gradients also shrink toward early tokens (Section 3.3 effect).",
                  "Attention replaces the bottleneck with per-step access to all encoder states.",
                ],
              },
            ],
          },
          {
            number: "3.8",
            title: "Attention mechanism",
            body: [
              "Attention (Bahdanau et al., 2014) removes the seq2seq bottleneck by letting the decoder look directly at every encoder state. Instead of one summary vector, the encoder passes along ALL its per-step states h_1..h_Tx (called annotations). At each decoding step t, the decoder computes a relevance score between its current state s_t and every encoder state, converts the scores into weights with a softmax, and forms a context vector as the weighted sum: c_t = sum_i alpha_{t,i} * h_i, with alpha_{t,i} = softmax(score(s_t, h_i)). The decoder then conditions on (s_t, c_t) instead of s_t alone.",
              "Scoring functions, the two classics. Additive (Bahdanau): score(s, h) = v^T * tanh(W_s s + W_h h) — a small learned MLP over the pair. Multiplicative/dot (Luong): score(s, h) = s^T h (optionally with a learned projection or a scaling factor) — cheaper, and the direct ancestor of the transformer's scaled dot-product attention. The softmax guarantees the weights sum to 1, so c_t is a convex combination of encoder states: attention weights are interpretable as a soft alignment — for French 'comment', weight concentrates on 'how'; visualization of the alpha matrix is the standard figure in every attention paper and exam answer.",
              "The mechanism's two gifts. Expressiveness: the decoder can pull different source positions at different output steps — translating a reordered sentence no longer requires one vector to encode everything at once. Interpretability: the alignment matrix doubles as a diagnostic; mis-aligned weights expose translation errors, and in tasks like summarization they show which sentences the model read. Attention also FIXED the length degradation of Section 3.7: since every encoder state is one hop from the decoder, gradient distance no longer grows with sentence length.",
              "A dimension trace: encoder states H is a Tx x d matrix (say 10 x 512), decoder state s_t is 512. Scores: s_t^T h_i for each i gives a Tx-vector; softmax over Tx gives alpha_{t,*}; context c_t = alpha^T H is 512-dim. Cost per decoding step: Tx * d multiply-adds for the scores — negligible — and the whole alignment matrix is Tx x Ty, computed in one matmul in practice. Self-attention (Section 5.3) generalizes this: when the decoder state is replaced by the sequence attending to ITSELF, the mechanism becomes the transformer's core operation; Q, K, V are the learned projections of that generalization.",
              "Assessment. Advantages: removes the bottleneck, parallelizable scoring (unlike recurrence's sequential state), interpretable alignments, and the foundation of all modern NLP architectures. Limits: attention is O(Tx * Ty) memory for the alignment matrix (quadratic in sequence length — the transformer's own scaling wall), and attention weights are softer explanations than they first appear (they highlight inputs, but do not certify causality). For the exam: define, give score + softmax + weighted-sum equations, draw the alignment diagram, and close with 'attention generalized into the transformer' — the full arc in five sentences.",
            ],
            bullets: [
              "Attention: decoder scores ALL encoder states, softmaxes, and builds a per-step context c_t = sum alpha_i h_i.",
              "Additive score (Bahdanau): v^T tanh(W_s s + W_h h); dot-product score (Luong): s^T h.",
              "Weights alpha sum to 1: a soft alignment interpretable as word-to-word correspondence.",
              "Fixed the seq2seq bottleneck and length degradation; different steps attend to different positions.",
              "Trace: Tx x d encoder states, 512-d decoder state -> Tx scores -> softmax -> 512-d context.",
              "Cost: O(Tx * Ty) for the full alignment matrix - quadratic, the transformer's scaling wall.",
              "Self-attention generalizes it (sequence attends to itself) - the doorway to Unit V's transformer.",
            ],
            keyTerms: [
              { term: "Attention weights alpha", definition: "Softmax-normalized relevance scores over encoder states; they sum to 1 per decoding step." },
              { term: "Context vector c_t", definition: "The weighted sum of encoder states used by the decoder at step t." },
              { term: "Soft alignment", definition: "Attention's probabilistic word correspondence, visualized as a Tx x Ty heat map." },
              { term: "Scaled dot-product attention", definition: "softmax(QK^T / sqrt(d))V - the transformer's direct generalization of Luong attention." },
            ],
            callout: {
              type: "tip",
              title: "Remember",
              body: "Three equations carry the whole topic: score(s_t, h_i), alpha_{t,i} = softmax over i, c_t = sum_i alpha_{t,i} h_i. Then one sentence: 'the decoder receives (s_t, c_t) instead of s_t alone.' Every attention question is answered inside those four lines.",
            },
            diagram: {
              kind: "flow",
              title: "Computing one step of attention",
              caption:
                "Scores -> softmax -> weighted sum - the loop that became the transformer's core operation.",
              steps: [
                { label: "Decoder state s_t", note: "current target position" },
                { label: "Score vs every h_i", note: "s_t^T h_i (dot) or v^T tanh(...) (additive)" },
                { label: "Softmax over scores", note: "alpha_{t,i} sum to 1" },
                { label: "Weighted sum c_t = sum alpha_i h_i", note: "512-d context" },
                { label: "Decode from (s_t, c_t)", note: "next token + next state" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "Dot-product attention weights in numpy.",
              code: `import numpy as np

def softmax(z):
    e = np.exp(z - z.max(axis=-1, keepdims=True))
    return e / e.sum(axis=-1, keepdims=True)

Tx, d = 10, 512
H = np.random.randn(Tx, d)          # encoder annotations
s = np.random.randn(d)              # decoder state at step t

scores = H @ s                      # (Tx,) raw relevance
alpha = softmax(scores)             # weights, sum = 1
context = alpha @ H                 # (d,) attended summary
print("weights sum:", alpha.sum().round(3))
print("top source index:", int(alpha.argmax()))`,
            },
            examQuestions: [
              {
                q: "Explain the attention mechanism for seq2seq models. Give the scoring, softmax and context equations, draw the alignment idea, and explain how attention solves the information bottleneck.",
                marks: 7,
                outline: [
                  "Problem: one context vector cannot hold long sources (Section 3.7).",
                  "Encoder passes ALL states h_1..h_Tx as annotations.",
                  "Scores: additive v^T tanh(W_s s + W_h h) or dot s^T h.",
                  "Softmax: alpha_{t,i} = exp(score_i)/sum_j exp(score_j); weights sum to 1.",
                  "Context: c_t = sum_i alpha_{t,i} h_i; decoder uses (s_t, c_t).",
                  "Alignment interpretation: soft word correspondence, visualizable matrix.",
                  "Effect: no length degradation; groundwork for transformer self-attention.",
                ],
              },
              {
                q: "State the scaled dot-product attention formula and the purpose of the sqrt(d) factor.",
                marks: 2,
                outline: [
                  "Attention(Q, K, V) = softmax(QK^T / sqrt(d)) V.",
                  "sqrt(d) keeps dot products from growing with dimension, preventing softmax saturation.",
                ],
              },
              {
                q: "Why are attention weights called a 'soft alignment'?",
                marks: 3,
                outline: [
                  "They distribute probability over source positions instead of hard-picking one.",
                  "Sum to 1, so they behave like a correspondence distribution.",
                  "Visualized as a heat map between source and target words.",
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
      title: "Generative and Unsupervised Deep Learning",
      summary:
        "Learning without labels: what unsupervised representation learning means, autoencoders in their plain, sparse and denoising forms, the probabilistic upgrade to variational autoencoders with the reparameterization trick, the adversarial game of GANs with their training loop and famous failure modes, and Restricted Boltzmann Machines as the historical energy-based ancestor.",
      chapter: {
        number: "04",
        title: "Autoencoders, VAEs, GANs and Energy Models",
        intro:
          "Unit IV changes the objective. Instead of predicting labels, the network must model the data itself: compress it (autoencoder), give it a probability distribution (VAE), or synthesize new samples indistinguishable from it (GAN). Each model is a different answer to the same question — what does a good internal representation of the data look like? — and each carries a distinct training trick that examiners test: reconstruction loss, the ELBO, the minimax game, and contrastive divergence.",
        inOneBreath:
          "Autoencoder: bottleneck z = f_enc(x), reconstruct with decoder, MSE loss; sparse AEs add an activation penalty, denoising AEs corrupt the input and reconstruct the clean one; VAE encodes to a distribution (mu, sigma), samples z = mu + sigma*eps (reparameterization), and maximizes ELBO = reconstruction - KL(q(z|x) || p(z)); GAN: generator G(z) fakes, discriminator D judges, trained by a minimax game that fails into mode collapse; RBM: bipartite energy model trained by contrastive divergence, stacked into deep belief networks.",
        sections: [
          {
            number: "4.1",
            title: "Unsupervised learning and representation learning",
            body: [
              "Supervised learning needs labels — and labels are expensive, often costing more than the data itself. Unsupervised learning extracts structure from unlabelled data alone. Its four canonical objectives: dimensionality reduction (compress data to its essential axes), density estimation (learn p(x) so we can score how likely new data are), clustering (discover groups, e.g. k-means on learned features), and generation (synthesize new samples resembling the training data). Deep learning's contribution is to make all four run on learned non-linear FEATURES rather than raw pixels.",
              "Representation learning is the unifying idea. Raw inputs (a million pixels, a thousand tokens) are enormous and entangled; a good representation makes the underlying factors explicit and disentangled — for an image of a face: pose, expression, lighting, identity. Deep networks learn such representations hierarchically because each layer composes the previous: pixels -> edges -> textures -> motifs -> parts -> objects. This pyramid is why unsupervised pretraining was historically valuable (layer-wise training of RBMs, Section 4.8) and why modern self-supervised methods (contrastive learning, masked modelling) produce features that transfer with only a small labelled set on top.",
              "The classical baseline every deep method is compared with is PCA: find the orthogonal directions of maximum variance and project. PCA is exactly a LINEAR autoencoder — fitting a linear encoder-decoder with squared reconstruction error recovers the principal subspace (Bourlard and Kamp, 1988). The gain from depth is nonlinearity: a deep autoencoder's curved manifold traces data PCA cannot fold — a 'swiss roll' dataset unrolls under a deep decoder but only flattens under PCA. Stating this PCA-is-a-linear-AE identity is a reliable exam differentiator.",
              "The evaluation problem is distinctive to unsupervised learning: with no labels, what is 'good'? Proxies include reconstruction error (for compression-oriented models), likelihood or its bound (ELBO for VAEs), sample quality scores for generators (Inception Score, FID for GANs), and downstream task performance (train features unsupervised, test them on a small labelled probe — the standard 'linear probe' protocol). Each metric has blind spots; reconstruction error in particular rewards blurry memorizers over sharp generators, which is why generative model comparison moved to likelihood and FID.",
              "The unit's map: autoencoders (Sections 4.2-4.3) learn representations by reconstruction; VAEs (4.4) turn the latent space into a probability distribution; GANs (4.5-4.7) replace likelihood with an adversarial judge; RBMs (4.8) supply the energy-based ancestry. All four appear on RGPV papers, and all four are variations on one sentence: learn what the data ARE before learning what they MEAN.",
            ],
            bullets: [
              "Unsupervised objectives: dimensionality reduction, density estimation, clustering, generation.",
              "Representation learning: transform raw inputs into explicit, disentangled factors.",
              "Feature hierarchy: pixels -> edges -> textures -> motifs -> parts -> objects.",
              "PCA = a linear autoencoder with squared reconstruction error; deep AEs add nonlinearity.",
              "Evaluation without labels: reconstruction error, likelihood/ELBO, FID/IS, downstream linear probes.",
              "Reconstruction error rewards blurry outputs - never the sole metric for generative models.",
              "Unit roadmap: AE -> VAE -> GAN -> RBM, all learning 'what data are' before 'what they mean'.",
            ],
            keyTerms: [
              { term: "Representation learning", definition: "Learning a transformation of raw data into features that make underlying factors explicit." },
              { term: "Density estimation", definition: "Modelling p(x) so that new points can be scored by likelihood." },
              { term: "Linear probe", definition: "Evaluating learned features by training only a linear classifier on top of them." },
              { term: "PCA", definition: "Principal component analysis: linear projection onto maximum-variance directions; a linear autoencoder." },
            ],
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "'Differentiate supervised and unsupervised learning' at 7 marks needs: definitions, labelled/unlabelled data, loss signal (targets vs internal objectives), four example tasks each, and the evaluation problem (accuracy vs likelihood/reconstruction). Five paragraphs, one diagram, done.",
            },
            diagram: {
              kind: "pyramid",
              title: "The learned feature hierarchy (top = most abstract)",
              caption:
                "Deep unsupervised models build this ladder layer by layer; each level composes the one below.",
              tiers: [
                { label: "Object-level concepts", note: "faces, digits, scenes - downstream-task ready" },
                { label: "Parts and motifs", note: "eyes, corners, word shapes" },
                { label: "Edges and textures", note: "first-layer detectors, nearly universal" },
                { label: "Raw pixels / tokens", note: "high-dimensional, entangled input" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "PCA - the linear autoencoder baseline.",
              code: `import numpy as np

X = np.random.randn(500, 20)          # 500 samples, 20 features
X = X - X.mean(axis=0)                # centre the data

C = np.cov(X, rowvar=False)
eigvals, eigvecs = np.linalg.eigh(C)  # principal directions
Z = X @ eigvecs[:, ::-1][:, :3]       # project onto top 3 PCs

print(X.shape, "->", Z.shape)         # (500, 20) -> (500, 3)
print("variance kept:", (eigvals[::-1][:3].sum() / eigvals.sum()).round(3))`,
            },
            examQuestions: [
              {
                q: "What is unsupervised learning? Describe its main objectives, explain representation learning and the feature hierarchy, and discuss how unsupervised models are evaluated without labels.",
                marks: 7,
                outline: [
                  "Definition: learning structure from unlabelled data; contrast with supervision.",
                  "Four objectives: dimensionality reduction, density estimation, clustering, generation.",
                  "Representation learning: disentangle underlying factors (pose, lighting, identity).",
                  "Hierarchy: pixels -> edges -> textures -> parts -> objects.",
                  "PCA as the linear baseline; deep models add nonlinearity (swiss-roll argument).",
                  "Evaluation: reconstruction error, ELBO/likelihood, FID/IS, downstream linear probes.",
                  "Blind spots of each metric; reconstruction favours blurry memorization.",
                ],
              },
              {
                q: "In what sense is PCA a linear autoencoder?",
                marks: 2,
                outline: [
                  "A linear encoder-decoder minimizing squared reconstruction error recovers the principal subspace.",
                  "Encoder weights span the top eigenvectors of the covariance matrix.",
                ],
              },
              {
                q: "Why is reconstruction error alone a poor metric for generative image models?",
                marks: 3,
                outline: [
                  "Pixel-wise error is minimized by blurry average-like outputs.",
                  "A sharp realistic sample can score worse than a blurry memorized one.",
                  "Hence likelihood bounds (ELBO) or perceptual scores (FID) are used.",
                ],
              },
            ],
          },
          {
            number: "4.2",
            title: "Autoencoders",
            body: [
              "An autoencoder is a neural network trained to reconstruct its own input. It splits into an encoder h = f(x) mapping the input to a latent code, and a decoder r = g(h) mapping the code back to input space, trained to minimize reconstruction loss L(x, g(f(x))) — MSE for continuous data, binary cross-entropy for binarized data like MNIST pixels. With no labels involved, it is the purest unsupervised deep model, and it is the template the rest of the unit modifies.",
              "The bottleneck is the entire point. If the latent code has as many dimensions as the input, the network can learn the identity mapping and learn nothing. Constraining the code (a 784-pixel image squeezed into 32 latent units) FORCES the encoder to discard noise and redundancy and keep only structure: the network cannot pass everything through, so it must decide what matters. This is the undercomplete autoencoder — capacity starvation as a learning signal, directly analogous to the role of locality in CNNs.",
              "A dimension trace: MNIST 784 -> Dense(128, ReLU) -> Dense(32, ReLU) [the code] -> Dense(128, ReLU) -> Dense(784, sigmoid). Parameters: 100,480 + 4,128 + 4,224 + 100,944 = about 209,776. After training, the 32-dim code clusters digits by class even though no label was ever shown — plot the codes coloured by digit and clusters appear. That emergent clustering is the classic demonstration that reconstruction pressure alone learns semantically useful features.",
              "Uses and the reading of the latent space. Dimensionality reduction and visualization: the code is a compressed, nonlinear version of PCA. Denoising and anomaly detection: train on normal data; reconstruction error spikes on inputs the encoder never learned to represent (novel/faulty patterns) — the basis of industrial anomaly detection. Pretraining: the encoder's weights initialize a downstream classifier. Generative sampling, with a caveat: sampling random codes from an AE's latent space and decoding them produces poor samples because the code space is unregularized — it has holes where no training data mapped, and those holes decode to garbage. THIS is precisely the gap the VAE (Section 4.4) closes by giving the latent space an explicit probability distribution.",
              "Variants preview the unit: sparse autoencoders add a sparsity penalty instead of a narrow bottleneck (4.3); denoising autoencoders corrupt the input and reconstruct the clean original (4.3); contractive autoencoders penalize encoder Jacobians; VAEs probabilize the code (4.4). Every variant shares the same skeleton — encode, constrain, decode, reconstruct — differing only in what the constraint is.",
            ],
            bullets: [
              "Autoencoder = encoder f(x) -> code -> decoder g(h) -> reconstruction; trained with reconstruction loss only.",
              "The bottleneck forces compression: without it the model learns a useless identity.",
              "Undercomplete AE: code dimension < input dimension (e.g. 784 -> 32 -> 784).",
              "Trained codes cluster by class without labels - evidence of semantic features.",
              "Applications: compression/visualization, denoising, anomaly detection via reconstruction error, pretraining.",
              "Latent space is unregularized: random codes often decode to garbage - the VAE motivation.",
              "Family tree: sparse, denoising, contractive, variational - same skeleton, different constraint.",
            ],
            keyTerms: [
              { term: "Autoencoder", definition: "A network trained to reconstruct its input through a constrained latent code." },
              { term: "Bottleneck (latent code)", definition: "The reduced-dimension middle layer whose narrowness forces structure learning." },
              { term: "Undercomplete", definition: "An autoencoder whose code dimension is smaller than the input dimension." },
              { term: "Reconstruction error", definition: "The loss ||x - g(f(x))|| (MSE) or binary cross-entropy between input and output." },
            ],
            callout: {
              type: "warning",
              title: "Common mistake",
              body: "An autoencoder is NOT a classifier and its code is NOT a guaranteed disentangled representation. It is a compression-reconstruction model; any clustering in the code is emergent, not enforced. Answers claiming 'the AE learns the label' lose the conceptual mark.",
            },
            diagram: {
              kind: "pipeline",
              title: "The autoencoder architecture",
              caption:
                "Narrow in the middle by design: the bottleneck is what forces the code to be meaningful.",
              stages: [
                { label: "Input x (784 px)", note: "the target is x itself - no labels" },
                { label: "Encoder Dense 128 -> 32", note: "ReLU; compresses to the code" },
                { label: "Latent code z (32-d)", note: "the bottleneck - structure survives, noise does not" },
                { label: "Decoder Dense 128 -> 784", note: "ReLUs then sigmoid" },
                { label: "Reconstruction x' ", note: "loss = MSE(x, x'); minimize" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "A minimal Keras autoencoder for MNIST-shaped data.",
              code: `from tensorflow.keras import layers, models

inp = layers.Input(shape=(784,))
z = layers.Dense(32, activation="relu")(inp)      # bottleneck 784 -> 32
out = layers.Dense(784, activation="sigmoid")(z)

ae = models.Model(inp, out)
ae.compile(optimizer="adam", loss="mse")
# ae.fit(X_train, X_train, epochs=20, batch_size=256)  # input = target
# encoder = models.Model(inp, z)  # extract the 32-dim codes`,
            },
            examQuestions: [
              {
                q: "Explain the architecture and training of an autoencoder. Why is the bottleneck essential, what happens without it, and list three applications. Trace dimensions for a 784-128-32-128-784 network.",
                marks: 7,
                outline: [
                  "Definition: reconstruct x through code z = f(x), output g(z).",
                  "Loss: MSE or BCE between x and reconstruction; no labels.",
                  "Bottleneck forces compression - the code must keep structure, drop noise.",
                  "Without it: identity mapping, nothing learned.",
                  "Dimension trace: 784 -> 128 -> 32 -> 128 -> 784; ~210k params.",
                  "Applications: compression/visualization, denoising, anomaly detection, pretraining.",
                  "Latent space unregularized - random sampling fails; motivates the VAE.",
                ],
              },
              {
                q: "Why can sampling random latent codes from a plain autoencoder produce garbage images?",
                marks: 2,
                outline: [
                  "The code space is unregularized; only regions near training codes are meaningful.",
                  "Codes in 'holes' decode to arbitrary outputs the decoder never learned.",
                ],
              },
              {
                q: "How can an autoencoder be used for anomaly detection on industrial sensor data?",
                marks: 3,
                outline: [
                  "Train only on normal operating data.",
                  "Normal samples reconstruct with low error.",
                  "Anomalies (faults) lie off the learned manifold -> high reconstruction error flags them.",
                ],
              },
            ],
          },
          {
            number: "4.3",
            title: "Sparse and denoising autoencoders",
            body: [
              "The bottleneck is not the only way to force an autoencoder to learn. A SPARSE autoencoder keeps the code as wide as (or wider than) the input but penalizes activity: most units must output (near) zero for any given input. The standard penalty is the KL divergence between a target sparsity rho (say 0.05) and the actual mean activation rho_hat of each unit: penalty = sum_j [rho * log(rho/rho_hat_j) + (1 - rho) * log((1 - rho)/(1 - rho_hat_j))], added to reconstruction loss. An L1 penalty on activations (lambda * sum |z_j|) is the simpler alternative. The result: each latent unit becomes a specialized feature detector, and the code as a whole is a sparse, interpretable combination — the direct ancestor of today's sparse dictionary learning and of sparse-activation ideas inside transformers.",
              "A DENOISING autoencoder (DAE, Vincent et al., 2008) forces learning through corruption: deliberately damage the input (zero out a random fraction of pixels — the masking noise — or add Gaussian noise) and train the network to reconstruct the CLEAN original from the damaged one: loss L(x, g(f(x_tilde))). The network can no longer copy; it must recover structure, which means it must learn how the data's features co-occur — precisely the manifold-learning objective. Denoising is also literally useful: the same model super-resolves and removes artefacts on images and audio.",
              "The two constraints embody different philosophies and are a natural compare question. Sparsity constrains the CODE (what is represented: few active features per input); denoising constrains the TASK (what must be recovered: structure from damage). Both can be combined, and both achieve the same end — preventing the identity solution — through different regularizers. Stacked versions (SDA, stacked denoising AE) train layers greedily, one at a time, then fine-tune: the historical unsupervised pretraining pipeline of 2006-2012 (Section 4.8 completes this story with RBMs).",
              "A dimension trace for a masking denoiser: MNIST 784 pixels; corrupt with mask rate 0.3 (about 235 pixels zeroed); encoder 784 -> 128 -> 32; decoder 32 -> 128 -> 784; target is the UNCORRUPTED image. Note the input and target are different tensors — in Keras, fit(X_noisy, X_clean). The learned filters at the first layer resemble stroke detectors: they are exactly the features needed to fill in missing ink, evidence that denoising pressure extracts the generative structure of the data, not just a compressed copy.",
              "Why this matters beyond the syllabus: the denoising objective is the core of modern self-supervised learning — BERT's masked language modelling (Section 5.3) IS a denoising autoencoder over tokens (corrupt 15% of words, reconstruct them), and MAE-style vision models mask image patches for the same reason. A student who understands Section 4.3 understands the training objective of the largest models in existence; drawing that line explicitly in an answer is a reliable way to stand out.",
            ],
            bullets: [
              "Sparse AE: wide code + penalty forcing few active units (KL to target rho, or L1 on activations).",
              "Each sparse unit becomes a specialized detector; code is interpretable and modular.",
              "Denoising AE: corrupt input x_tilde, reconstruct clean x; loss L(x, g(f(x_tilde))).",
              "Masking noise (zero fraction of inputs) is the standard corruption for images/tokens.",
              "Denoising pressure learns feature co-occurrence - the generative structure of the data.",
              "Sparse constrains the code, denoising constrains the task - both block the identity solution.",
              "BERT's masked language modelling and MAE are denoising autoencoders over tokens/patches.",
            ],
            keyTerms: [
              { term: "Sparsity penalty", definition: "Loss term pushing mean unit activations toward a target rho, e.g. KL(rho || rho_hat) or L1." },
              { term: "Denoising autoencoder", definition: "AE trained to map a corrupted input back to its clean version." },
              { term: "Masking noise", definition: "Corruption that zeros a random fraction of input components." },
              { term: "Stacked denoising AE", definition: "Layer-wise greedily trained DAEs, later fine-tuned end to end." },
            ],
            callout: {
              type: "tip",
              title: "Remember",
              body: "One sentence separates the two variants: sparse AE constrains WHAT the code may represent (few active units), denoising AE constrains WHAT the task demands (recover clean structure from damage). Both exist to prevent the trivial identity mapping.",
            },
            diagram: {
              kind: "compare",
              title: "Sparse vs denoising autoencoders",
              caption:
                "Two different constraints, one shared goal - a code that cannot just copy.",
              left: {
                heading: "Sparse autoencoder",
                items: [
                  "Code as wide as input, but mostly silent",
                  "KL(rho || rho_hat) or L1 penalty on activations",
                  "Units become specialized feature detectors",
                  "Interpretable, modular codes",
                  "Constraint on the representation itself",
                ],
              },
              right: {
                heading: "Denoising autoencoder",
                items: [
                  "Input corrupted (masking or Gaussian noise)",
                  "Target is the CLEAN original x",
                  "Must learn feature co-occurrence to repair",
                  "Directly usable for restoration tasks",
                  "Constraint on the task; ancestor of BERT's MLM",
                ],
              },
            },
            codeExample: {
              language: "python",
              caption: "Denoising autoencoder: corrupt in, clean target.",
              code: `import numpy as np
from tensorflow.keras import layers, models

def corrupt(X, rate=0.3):
    mask = np.random.rand(*X.shape) < rate
    return np.where(mask, 0.0, X)          # masking noise

Xn = corrupt(X_train)                      # damaged copy
inp = layers.Input(shape=(784,))
z = layers.Dense(64, activation="relu")(inp)
out = layers.Dense(784, activation="sigmoid")(z)
dae = models.Model(inp, out)
dae.compile("adam", "mse")
# fit(Xn, X_train): reconstruct the CLEAN image from the noisy one`,
            },
            examQuestions: [
              {
                q: "Compare sparse and denoising autoencoders. Give the sparsity penalty formula and the denoising training setup, and explain how each prevents the trivial identity solution.",
                marks: 7,
                outline: [
                  "Shared skeleton: encode, decode, reconstruct - both add a constraint.",
                  "Sparse: wide code + KL(rho || rho_hat) per unit or L1 on activations.",
                  "Effect: few active units, specialized detectors, interpretable code.",
                  "Denoising: corrupt x to x_tilde (mask or Gaussian), target clean x.",
                  "Loss L(x, g(f(x_tilde))) - copying is impossible; structure must be learned.",
                  "Identity prevention: sparsity bans dense codes; denoising breaks the copy path.",
                  "Modern echo: BERT masked LM and MAE are denoising AEs.",
                ],
              },
              {
                q: "Write the KL-based sparsity penalty for one hidden unit with target sparsity rho and mean activation rho_hat.",
                marks: 2,
                outline: [
                  "rho log(rho/rho_hat) + (1 - rho) log((1 - rho)/(1 - rho_hat)).",
                  "Zero exactly when rho_hat = rho.",
                ],
              },
              {
                q: "In a denoising autoencoder trained with masking noise rate 0.25 on 784-pixel MNIST, roughly how many input pixels are zeroed per sample?",
                marks: 3,
                outline: [
                  "0.25 * 784 = 196 pixels.",
                  "The target remains the full clean 784-pixel image.",
                  "The network must infer the missing 25% from context.",
                ],
              },
            ],
          },
          {
            number: "4.4",
            title: "Variational autoencoder (VAE)",
            body: [
              "The VAE (Kingma and Welling, 2013) upgrades the autoencoder from a point code to a PROBABILITY DISTRIBUTION. The encoder no longer outputs a single z; it outputs the parameters of a distribution q(z|x) — a mean mu and variance sigma^2 per latent dimension (usually Gaussian). The decoder models p(x|z). Training maximizes the evidence lower bound (ELBO): ELBO = E_q[log p(x|z)] - KL(q(z|x) || p(z)) — reconstruction quality minus a regularizer that pulls every encoded distribution toward the standard normal prior N(0, I). The negative ELBO is the training loss; the two terms trade off reconstruction sharpness against latent-space orderliness.",
              "The KL term is what the plain AE lacked. It packs ALL codes into one continuous, overlapping blob shaped like N(0, I): nearby codes decode to similar outputs, and the space between training codes decodes to sensible interpolations. Sampling generation therefore works: draw z ~ N(0, I), decode, and get a plausible new sample. This is the mathematical fix for the unregularized-latent weakness of Section 4.2, and the reason VAEs are called generative models — they define (an approximation of) p(x).",
              "The reparameterization trick is the technical heart. The training loss requires sampling z from q(z|x) — a random operation whose gradient cannot flow through. Reparameterize: z = mu + sigma * eps with eps ~ N(0, I). The randomness moves OUTSIDE the computation path into eps (which needs no gradient), while mu and sigma remain deterministic differentiable functions of the encoder. Gradients now reach the encoder through the identity-plus-scale path. Writing z = mu + sigma*eps and stating why it is needed is the most-tested VAE fact.",
              "A dimension trace: MNIST 784 -> encoder Dense(128) -> Dense(mu: 16) and Dense(log sigma^2: 16) [predict log-variance for numerical stability] -> sample z = mu + exp(0.5 * log_var) * eps -> decoder Dense(128) -> Dense(784, sigmoid). Loss per sample: reconstruction (BCE summed over 784) + KL = -0.5 * sum(1 + log_var - mu^2 - exp(log_var)). Train, then generate: sample 16 standard-normal vectors, decode, and see new handwritten-style digits. Interpolation: walk z between two codes and faces/digits morph continuously — the signature evidence of a smooth latent space.",
              "Trade-offs and assessment. VAEs give: principled probabilistic foundation, stable training (an ELBO objective, no adversarial dynamics), explicit latent structure, and easy interpolation. They cost: blurry samples — the Gaussian likelihood (pixel-independent MSE/BCE) makes the optimal reconstruction an average over plausible outputs, and averaging photographs produces blur. Sharper variants (beta-VAE for disentangling, VQ-VAE with discrete codes, NVAE with hierarchical latents) trade different terms of the ELBO. Against GANs (Section 4.5): VAEs are stable but blurry; GANs are sharp but unstable — the classic one-line comparison examiners want.",
            ],
            bullets: [
              "Encoder outputs a distribution q(z|x) = N(mu, sigma^2); decoder models p(x|z).",
              "ELBO = reconstruction term - KL(q(z|x) || N(0, I)); maximize ELBO (minimize negative ELBO).",
              "KL term packs codes into one smooth blob: interpolation and sampling work.",
              "Reparameterization: z = mu + sigma * eps, eps ~ N(0, I) - randomness out of the gradient path.",
              "Predict log sigma^2 for stability; KL = -0.5 * sum(1 + log_var - mu^2 - exp(log_var)).",
              "Weakness: blurry samples from pixel-wise Gaussian likelihood; beta/VQ-VAE variants sharpen or disentangle.",
              "VAE vs GAN in one line: stable but blurry vs sharp but unstable.",
            ],
            keyTerms: [
              { term: "ELBO", definition: "Evidence lower bound: expected reconstruction log-likelihood minus KL(q(z|x) || p(z)); the VAE's objective." },
              { term: "Reparameterization trick", definition: "Sample z = mu + sigma*eps so gradients flow through mu and sigma while eps carries the randomness." },
              { term: "KL divergence", definition: "Asymmetric measure of how one distribution differs from another; here pulls q(z|x) toward N(0, I)." },
              { term: "Latent prior p(z)", definition: "The distribution codes are pulled toward (standard normal), from which new samples are drawn." },
            ],
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "The VAE question is always three parts: (1) write the ELBO and name its two terms, (2) explain the reparameterization trick and why sampling breaks backprop without it, (3) contrast with the plain AE (probabilistic latent, generative sampling, smooth interpolation). Cover all three and the 7 marks are yours.",
            },
            diagram: {
              kind: "flow",
              title: "One VAE forward pass",
              caption:
                "Randomness enters only through eps; the ELBO scores both reconstruction and latent orderliness.",
              steps: [
                { label: "Input x", note: "encoder sees the sample" },
                { label: "Encoder -> mu, log sigma^2", note: "distribution parameters, 16-d each" },
                { label: "Sample z = mu + sigma * eps", note: "reparameterization trick" },
                { label: "Decoder p(x|z)", note: "reconstruction from the sampled code" },
                { label: "Loss = -recon + KL(q || N(0,I))", note: "minimize negative ELBO" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "Reparameterization and the VAE loss terms.",
              code: `import numpy as np

mu, log_var = np.random.randn(16), np.random.randn(16)  # encoder outputs
eps = np.random.randn(16)                     # unit normal noise
z = mu + np.exp(0.5 * log_var) * eps          # reparameterized sample

# KL(q(z|x) || N(0, I)) for diagonal Gaussians
kl = -0.5 * np.sum(1 + log_var - mu**2 - np.exp(log_var))
recon = np.random.rand()                      # stand-in for BCE(x, x_hat)
loss = recon + kl                             # negative ELBO to minimize
print("z:", z.shape, " KL:", round(kl, 3))`,
            },
            examQuestions: [
              {
                q: "Explain the variational autoencoder. State the ELBO and its two terms, derive why the reparameterization trick is required, and compare the VAE with a plain autoencoder.",
                marks: 7,
                outline: [
                  "Plain AE's latent is unregularized - no sampling, holes in code space.",
                  "VAE encoder outputs mu, sigma^2 of q(z|x); decoder p(x|z).",
                  "ELBO = E[log p(x|z)] - KL(q(z|x) || N(0,I)); maximize it.",
                  "Reconstruction term drives fidelity; KL term organizes the latent space.",
                  "Problem: sampling z from q blocks gradients; solution z = mu + sigma*eps.",
                  "Gradients flow through mu, sigma; eps carries randomness.",
                  "Outcomes: generative sampling, smooth interpolation; cost: blurry samples.",
                ],
              },
              {
                q: "Write the reparameterized sampling equation for z given mu and sigma.",
                marks: 2,
                outline: [
                  "z = mu + sigma * eps with eps ~ N(0, I).",
                  "Equivalently z = mu + exp(0.5 log_var) * eps.",
                ],
              },
              {
                q: "Why do VAE samples tend to be blurry, and name one remedy.",
                marks: 3,
                outline: [
                  "Pixel-independent Gaussian likelihood rewards the average of plausible outputs.",
                  "Averaging sharp variations yields blur.",
                  "Remedies: beta-VAE weighting, VQ-VAE discrete codes, adversarial or perceptual losses.",
                ],
              },
            ],
          },
          {
            number: "4.5",
            title: "Generative adversarial networks: the idea",
            body: [
              "GANs (Goodfellow et al., 2014) replaced likelihood modelling with a game. Two networks train against each other: the GENERATOR G maps random noise z ~ N(0, I) to synthetic samples G(z), and the DISCRIMINATOR D maps any sample to a probability that it came from the real dataset. G's goal is to fool D; D's goal is to tell real from fake. Neither is trained to match a likelihood — they are trained to win a contest, and the contest itself is the learning signal.",
              "The intuition is the counterfeit analogy: a forger produces banknotes, an inspector learns to detect them, and each round of detection forces better forgeries and finer inspection. Formally, D is a binary classifier trained on a mixed batch (real images labelled 1, generated images labelled 0) with binary cross-entropy. G is trained through D: generate a batch, ask D to classify it, and update G so that D's verdicts move toward 'real'. Note the asymmetry: G never sees real data directly — the ONLY signal about what real data look like arrives through D's gradients.",
              "Why adversarial training produces sharp images: the discriminator learns exactly the statistics that distinguish real from fake — textures, high-frequency detail, local structure — and penalizes G precisely where its samples are statistically wrong. Likelihood-based models (VAEs) average over uncertainty and blur; the adversarial judge rewards samples that pass as individual, concrete instances. This is why GAN samples dominated image generation quality from 2014 to the diffusion era.",
              "The theoretical anchor is the minimax objective: min_G max_D V(D, G) = E_{x~data}[log D(x)] + E_{z~noise}[log(1 - D(G(z)))]. At the global optimum for fixed G, the optimal discriminator is D*(x) = p_data(x) / (p_data(x) + p_g(x)); substituting back, the generator's minimization is equivalent to minimizing the Jensen-Shannon divergence between the real and generated distributions, and equilibrium is reached when p_g = p_data and D outputs 0.5 everywhere. Stating the optimal-discriminator result is the standard 'theory' component of any GAN question.",
              "Practical framing for the exam: name the two players and their losses, write the minimax objective, give the counterfeit analogy, and state the equilibrium condition. Then flag the caveat that Section 4.6 develops: the theoretical game is easy to state and notoriously hard to train — the non-saturating loss, alternating updates and balance conditions are what make GANs work in practice, and mode collapse is their signature failure.",
            ],
            bullets: [
              "Two players: generator G(z) -> fake samples; discriminator D(x) -> real-vs-fake probability.",
              "Trained as a zero-sum game, not a likelihood fit: each improves against the other.",
              "G's only knowledge of the data arrives through D's gradients - G never sees real samples.",
              "Counterfeit analogy: forger vs inspector, both improving every round.",
              "Minimax: min_G max_D E[log D(x)] + E[log(1 - D(G(z)))].",
              "Optimal D for fixed G: D*(x) = p_data/(p_data + p_g); at equilibrium p_g = p_data, D = 0.5.",
              "Sharp samples: D penalizes exactly the statistics fakes lack; VAEs average, GANs impersonate.",
            ],
            keyTerms: [
              { term: "Generator", definition: "Network G mapping noise z to synthetic samples intended to match the data distribution." },
              { term: "Discriminator", definition: "Network D outputting the probability that a sample is real; the adversarial judge." },
              { term: "Minimax game", definition: "min_G max_D of the adversarial objective; G minimizes, D maximizes the same value." },
              { term: "Nash equilibrium (GAN)", definition: "p_g = p_data with D(x) = 0.5 everywhere - the theoretical training target." },
            ],
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Always attribute GANs correctly: 'Goodfellow et al., 2014'. The question 'why can G never see the training data directly?' is a favourite — answer that its only learning signal is the discriminator's gradient, and that this is exactly why the two networks must stay balanced.",
            },
            diagram: {
              kind: "fork",
              title: "How does the discriminator judge a new sample?",
              caption:
                "Each verdict trains both sides: D gets a labelled example, G gets gradient feedback.",
              start: "A sample x arrives at D",
              branches: [
                { label: "x from the real dataset", outcome: "D should output 1; miss = D's loss, and G learns nothing from it", good: true },
                { label: "x = G(z), detected as fake", outcome: "D wins this round; G receives gradients pushing G(z) toward real-looking", good: true },
                { label: "x = G(z), accepted as real", outcome: "G wins the round - D must sharpen; healthy GAN progress", good: false },
              ],
            },
            codeExample: {
              language: "python",
              caption: "The two GAN players as Keras models.",
              code: `import numpy as np
from tensorflow.keras import layers, models

G = models.Sequential([                    # generator: 100-d noise -> image
    layers.Dense(128, activation="relu", input_shape=(100,)),
    layers.Dense(784, activation="sigmoid"),
])
D = models.Sequential([                    # discriminator: image -> real?
    layers.Dense(128, activation="relu", input_shape=(784,)),
    layers.Dense(1, activation="sigmoid"),
])
z = np.random.randn(4, 100)
fake = G.predict(z, verbose=0)
print(D.predict(fake, verbose=0).ravel())  # D's verdicts on fakes`,
            },
            examQuestions: [
              {
                q: "Explain the GAN framework. Describe the roles of G and D, write the minimax objective, give the optimal discriminator for fixed G, and state the equilibrium condition.",
                marks: 7,
                outline: [
                  "Two networks: generator from noise, discriminator real-vs-fake.",
                  "D trained with binary cross-entropy on mixed real/fake batches.",
                  "G trained through D's gradients; never sees real data.",
                  "Objective: min_G max_D E[log D(x)] + E[log(1 - D(G(z)))].",
                  "Optimal D*: p_data / (p_data + p_g).",
                  "Substitution: G minimizes Jensen-Shannon divergence.",
                  "Equilibrium: p_g = p_data, D(x) = 0.5 everywhere.",
                ],
              },
              {
                q: "What input does the generator take and what distribution does it follow?",
                marks: 2,
                outline: [
                  "A latent noise vector z, typically 100-dim.",
                  "Drawn from a simple prior such as N(0, I) or uniform.",
                ],
              },
              {
                q: "Why do GAN samples look sharper than VAE samples?",
                marks: 3,
                outline: [
                  "VAE's pixel-wise likelihood averages over uncertainty -> blur.",
                  "The discriminator penalizes exactly the statistics fakes lack (high-frequency detail).",
                  "GANs are rewarded for passing as concrete instances, not for covering the distribution on average.",
                ],
              },
            ],
          },
          {
            number: "4.6",
            title: "GAN training: losses, alternating updates and instability",
            body: [
              "GAN training is a two-step dance repeated thousands of times. Step 1 (discriminator update): freeze G, sample a real batch and a generated batch, and take one gradient ascent step on D's objective (maximize E[log D(x_real)] + E[log(1 - D(G(z)))]). Step 2 (generator update): freeze D, generate a batch, and take one gradient descent step on G's loss. The alternation is essential — updating both simultaneously would chase a moving target; updating D too much crushes G's signal (gradient vanishes when D is near-perfect), too little and G drifts unpenalized. The standard heuristic is one D step per G step.",
              "The non-saturating loss is the first practical fix. The original objective log(1 - D(G(z))) has vanishing gradients exactly when G is doing badly (D confidently rejects fakes), so early training stalls. The fix flips G's goal to MAXIMIZE log D(G(z)) — 'maximize the chance of fooling D' — whose gradient is strongest exactly when G is worst. Same equilibrium, radically better early dynamics; every modern GAN implementation uses the non-saturating form, and being able to explain WHY it flips the gradient is a standard 3-marker.",
              "Instability has named causes and named countermeasures. Imbalance (D too strong) starves G of gradient — fix with weaker D, label smoothing (use 0.9 instead of 1.0 for real labels), or fewer D steps. Imbalance the other way (D too weak) lets G drift — more D steps. Mode collapse (Section 4.7) — fix with minibatch discrimination, unrolled GANs, or Wasserstein loss. Noisy optimization — fix with Adam (beta1 = 0.5, deliberately lower than the default 0.9, to damp momentum in the adversarial setting), spectral normalization on D's weights to bound its Lipschitz constant, and learning-rate symmetry (both sides at 1e-4 or 2e-4).",
              "A training-loop trace, the code-level answer examiners like: for each iteration — (1) z = randn(64, 100); fake = G(z); (2) d_loss = BCE(D(real), 1) + BCE(D(fake), 0); update D; (3) z = randn(64, 100); misleading = G(z); g_loss = BCE(D(misleading), 1) [non-saturating: ask D to say real]; update G through the frozen D. Monitoring: track both losses (they should oscillate, not converge monotonically — a falling D loss to 0 is a collapse warning), and inspect sample grids per epoch, since loss values alone famously fail to predict sample quality.",
              "Why GAN training is fundamentally harder than supervised training: the loss surface CHANGES as the opponent learns (non-stationary), the objective is a game value, not a cost to minimize (no single 'downhill'), and success is a balance, not a minimum. Every heuristic above is a patch on one of these three structural facts. This framing — 'GANs fail not because the math is wrong but because two-player non-convex optimization is fragile' — is the sentence that elevates a GAN-training answer from recitation to understanding.",
            ],
            bullets: [
              "Alternating updates: one D step (real + fake batch), one G step (through frozen D).",
              "Non-saturating generator loss: maximize log D(G(z)) instead of minimizing log(1 - D(G(z))).",
              "Rationale: original loss has vanishing G gradients early; flipped form has the strongest gradients when G is worst.",
              "D too strong -> starved G; fix: label smoothing, fewer D steps. D too weak -> more D steps.",
              "Adam with beta1 = 0.5, symmetric learning rates ~2e-4, spectral norm on D - standard stability kit.",
              "Track both losses AND sample grids; D loss crashing to 0 is a collapse warning.",
              "Root difficulty: non-stationary two-player objective - a balance, not a minimum.",
            ],
            keyTerms: [
              { term: "Non-saturating loss", definition: "Generator loss -log D(G(z)) (equivalently maximize log D(G(z))); keeps gradients flowing early in training." },
              { term: "Label smoothing", definition: "Using soft real labels (e.g. 0.9) to keep the discriminator from becoming overconfident." },
              { term: "Spectral normalization", definition: "Rescaling D's weight matrices by their spectral norm to bound the Lipschitz constant and stabilize D." },
              { term: "Alternating updates", definition: "Freezing one player while stepping the other; the standard GAN training schedule." },
            ],
            callout: {
              type: "warning",
              title: "Common mistake",
              body: "Writing that modern GANs minimize log(1 - D(G(z))) for the generator. Since the original paper's own Section, practice uses the NON-SATURATING form -log D(G(z)); examiners who know their Goodfellow deliberately probe this distinction.",
            },
            diagram: {
              kind: "cycle",
              title: "The GAN training loop",
              caption:
                "Alternating steps with the opponent frozen - the dance that makes two networks improve together.",
              steps: [
                { label: "Sample z + real batch", note: "noise from N(0, I), images from data" },
                { label: "Update D", note: "BCE on real->1, fake->0; G frozen" },
                { label: "Sample fresh z", note: "new fakes for the generator step" },
                { label: "Update G via frozen D", note: "non-saturating: -log D(G(z))" },
                { label: "Monitor losses + samples", note: "oscillation is healthy; D -> 0 is not" },
                { label: "Repeat", note: "thousands of iterations" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "GAN losses in numpy form.",
              code: `import numpy as np

def sigmoid(z): return 1 / (1 + np.exp(-z))

def d_loss(Dr, Df):     # D wants Dr -> 1, Df -> 0
    return -(np.log(Dr + 1e-8) + np.log(1 - Df + 1e-8)).mean()

def g_loss(Df):         # non-saturating: G wants Df -> 1
    return -np.log(Df + 1e-8).mean()

Dr = sigmoid(np.random.randn(64)); Df = sigmoid(np.random.randn(64))
print("D step loss:", d_loss(Dr, Df).round(3))
print("G step loss:", g_loss(Df).round(3))`,
            },
            examQuestions: [
              {
                q: "Describe GAN training. Give the discriminator and generator losses, explain the non-saturating generator loss and why it is needed, and list three stabilization techniques.",
                marks: 7,
                outline: [
                  "Alternating updates: D step (real/fake BCE), then G step through frozen D.",
                  "D loss: -E[log D(x)] - E[log(1 - D(G(z)))] (ascent).",
                  "Original G loss: minimize log(1 - D(G(z))) - gradients vanish early.",
                  "Non-saturating fix: maximize log D(G(z)); strongest gradient when G is worst.",
                  "Stability 1: label smoothing on real labels.",
                  "Stability 2: Adam with beta1 = 0.5, symmetric lr ~2e-4.",
                  "Stability 3: spectral normalization / one D step per G step balance.",
                ],
              },
              {
                q: "Why do GAN losses oscillate rather than decrease monotonically?",
                marks: 2,
                outline: [
                  "The objective is a two-player game value, not a single cost.",
                  "Each player's improvement changes the other's loss surface (non-stationary).",
                ],
              },
              {
                q: "What happens if the discriminator becomes near-perfect early in training, and how is it mitigated?",
                marks: 3,
                outline: [
                  "D(G(z)) ~ 0 makes log(1 - D(G(z))) gradient vanish - G receives no signal.",
                  "Mitigations: label smoothing, fewer D steps, weaker D, non-saturating loss.",
                ],
              },
            ],
          },
          {
            number: "4.7",
            title: "GAN variants and failure modes",
            body: [
              "The original GAN spawned a family of architectural and objective variants, each fixing a specific weakness. DCGAN (2015) made convolutional GANs trainable: transposed convolutions to upsample in G, strided convolutions to downsample in D, batch normalization in both (except G's output and D's input layers), ReLU in G, Leaky ReLU in D, and no fully connected hidden layers. Its guidelines remain the default recipe for image GANs. Conditional GAN (cGAN) conditions both players on extra information y (a class label, a caption): G(z, y) generates a sample of class y, D(x, y) judges the PAIR — the basis of class-conditional synthesis and image-to-image translation (pix2pix).",
              "The Wasserstein GAN (WGAN, 2017) replaced the Jensen-Shannon objective with the Wasserstein-1 (earth-mover) distance, estimated by a CRITIC trained to be 1-Lipschitz (via weight clipping, later gradient penalty). Its dividends: a meaningful loss curve (W-distance decreases as quality rises — GAN loss finally correlates with sample quality), and gradients that keep flowing when D is far better than G, easing the balance problem. WGAN-GP is the standard form. StyleGAN (2018-2019) added style-based generation from learned latent styles plus progressive or architectural resolution growth, producing the photorealistic faces of the 'this-person-does-not-exist' era.",
              "Mode collapse is THE failure mode to know. Definition: the generator maps many different z to the same few outputs — it covers one or a few modes of the data distribution (say, only the digit '1' from MNIST's ten) instead of all of them. Cause: from G's perspective, producing one mode that always fools the CURRENT D is a safe local optimum; the non-stationary game lets it park there. Symptoms: sample grids where variety dies across epochs, and low diversity metrics. Fixes, in one breath: minibatch discrimination (D compares samples within a batch), unrolled GAN (G anticipates D's next steps), WGAN (smoother landscape), VAE-GAN hybrids, and multiple generators.",
              "Evaluation metrics complete the toolkit. The Inception Score (IS) measures per-sample confidence and across-sample diversity of InNet classifications — now mostly superseded. The Frechet Inception Distance (FID) compares Gaussian approximations of real and generated feature distributions in Inception-v3's penultimate layer: lower is better, it correlates better with human judgement, and it is today's default. Both need stating in any 'how do you evaluate a GAN?' answer, along with the honest caveat that all automatic metrics are imperfect proxies for human evaluation.",
              "The overall assessment question — 'GANs vs VAEs vs autoregressive/diffusion models' — resolves into trade-offs. GANs: sharpest samples, fast one-shot generation, but unstable training, mode collapse risk, no explicit likelihood. VAEs: stable training, explicit (approximate) likelihood, smooth latents, but blurry. Autoregressive models (PixelRNN/CNN): exact likelihood, stable, but slow sequential sampling. Diffusion models: current quality leader, stable, but many sampling steps. For the exam, two sentences of this comparison plus the variant table earn the closing marks of any Unit IV long answer.",
            ],
            bullets: [
              "DCGAN: transposed-conv generator, strided-conv critic, batch norm, ReLU/Leaky ReLU - the base recipe.",
              "Conditional GAN: both players see side information y; enables class-conditional and paired translation.",
              "WGAN(-GP): Wasserstein-1 objective via a Lipschitz critic; meaningful loss, easier balance.",
              "StyleGAN: style-based synthesis, progressive growth; the photorealistic face lineage.",
              "Mode collapse: G covers few modes of p_data; diagnosed by dying diversity, fixed by minibatch discrimination/unrolled/WGAN.",
              "Metrics: FID (default, lower better), Inception Score (legacy); human eval remains gold standard.",
              "Model comparison: GAN sharp but unstable; VAE stable but blurry; autoregressive exact but slow; diffusion strongest today.",
            ],
            keyTerms: [
              { term: "DCGAN", definition: "The conv-architecture GAN recipe (transposed convs, batch norm, Leaky ReLU) that made image GANs reliable." },
              { term: "Mode collapse", definition: "Generator output covers only a few modes of the data distribution, sacrificing diversity." },
              { term: "Wasserstein distance", definition: "Earth-mover distance between distributions; WGAN's objective, correlated with sample quality." },
              { term: "FID", definition: "Frechet Inception Distance: distributional distance between real and fake features; lower = better." },
            ],
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Define mode collapse with the MNIST example: 'the generator produces only the digit 1 regardless of z'. Then give TWO fixes (minibatch discrimination, WGAN). A named failure + named fixes is the full pattern for GAN short questions.",
            },
            diagram: {
              kind: "matrix",
              title: "GAN quality landscape",
              caption:
                "The ideal generator sits top-right; mode collapse parks it top-left; undertraining leaves it bottom-left.",
              axes: { x: "diversity (mode coverage) ->", y: "fidelity (sample quality) ->" },
              quadrants: [
                { label: "High fidelity, low diversity", note: "MODE COLLAPSE: sharp samples, few modes" },
                { label: "High fidelity, high diversity", note: "the healthy equilibrium - the goal" },
                { label: "Low fidelity, low diversity", note: "undertrained or diverged" },
                { label: "Low fidelity, high diversity", note: "blurry averages - VAE-like behaviour" },
              ],
            },
            table: {
              caption: "GAN variants and what each contributed.",
              headers: ["Variant", "Key idea", "Contribution"],
              rows: [
                ["DCGAN", "All-conv G and D, transposed convs, batch norm", "Reliable image GAN recipe"],
                ["Conditional GAN", "Condition G and D on labels/captions y", "Class-conditional synthesis, pix2pix"],
                ["WGAN-GP", "Wasserstein-1 objective, gradient-penalized critic", "Meaningful loss, stabler training"],
                ["CycleGAN", "Paired-free domain transfer with cycle consistency", "Style transfer without alignments"],
                ["StyleGAN", "Style-based latent injection, progressive growth", "Photorealistic high-res faces"],
              ],
            },
            examQuestions: [
              {
                q: "What is mode collapse in GANs? Explain its cause, how to detect it, and two remedies. Briefly describe the DCGAN and WGAN improvements.",
                marks: 7,
                outline: [
                  "Definition: G maps diverse z to few outputs - covers some modes of p_data only.",
                  "MNIST example: only digit 1 generated.",
                  "Cause: one-mode parking is locally safe against the current D (non-stationary game).",
                  "Detection: sample grids losing variety; low diversity metrics.",
                  "Fix 1: minibatch discrimination - D judges sample-to-sample diversity.",
                  "Fix 2: WGAN - smoother landscape; also unrolled GAN, VAE-GAN hybrids.",
                  "DCGAN: conv recipe + batch norm; WGAN: Wasserstein loss via Lipschitz critic.",
                ],
              },
              {
                q: "What does FID measure and which direction is better?",
                marks: 2,
                outline: [
                  "Distance between Gaussian fits of real vs generated features (Inception-v3 layer).",
                  "Lower FID means closer distributions - better samples.",
                ],
              },
              {
                q: "How does a conditional GAN differ from an unconditional one?",
                marks: 3,
                outline: [
                  "Both players receive side information y (label or caption).",
                  "G(z, y) generates a sample of the requested class; D(x, y) judges the pair.",
                  "Enables controlled synthesis and paired image-to-image translation.",
                ],
              },
            ],
          },
          {
            number: "4.8",
            title: "Restricted Boltzmann Machines (RBM)",
            body: [
              "The RBM is an energy-based generative model that predates deep learning's revival and taught the field unsupervised pretraining. Structure: a layer of visible units v (the data, typically binary) fully connected to a layer of hidden units h (also binary), with SYMMETRIC weights W — and crucially NO connections within a layer (no visible-visible, no hidden-hidden): that restriction is the 'restricted' in RBM. The model defines an energy E(v, h) = -b^T v - c^T h - v^T W h; probability is Boltzmann: P(v, h) = exp(-E(v, h)) / Z, with Z the partition function.",
              "The bipartite structure is what makes RBMs tractable. Because units are conditionally independent within each layer given the other: P(h_j = 1 | v) = sigmoid(c_j + sum_i v_i W_ij) and P(v_i = 1 | h) = sigmoid(b_i + sum_j h_j W_ij) — alternating sigmoid sweeps instead of intractable joint inference. The likelihood itself P(v) = sum_h exp(-E)/Z is still intractable (Z sums over all configurations), so training uses the contrastive divergence (CD) approximation of maximum likelihood.",
              "Contrastive divergence (Hinton, 2002), the exam's algorithmic core: compute the POSITIVE phase — data-driven statistics, E[v h^T] with h sampled from P(h|v_data); run ONE reconstruction step (sample h from P(h|v), then v' from P(v|h), optionally h' from P(h|v')) for the NEGATIVE phase — model-driven statistics E[v' h'^T]; update W += eta * (positive - negative). Intuition: the positive statistics push weights toward what data co-activate; the negative statistics push away from what the MODEL currently imagines; their difference is the gradient direction. One step of reconstruction (CD-1) is astonishingly sufficient in practice.",
              "A worked trace: 784 visible MNIST pixels, 64 hidden units, mini-batch of 32. W is 784x64. Positive: h0 = (sigmoid(v @ W) > 0.5); negative: v1 = (sigmoid(h0 @ W.T) > 0.5); h1 = sigmoid(v1 @ W); gradient contribution = v0^T h0 / 32 - v1^T h1 / 32, scaled by eta. After training, hidden units' weight columns visualize as stroke-like filters, and P(v|h) sampling reconstructs digits — evidence the RBM learned a generative model of handwriting with zero labels.",
              "Historical significance and limits. Stacked RBMs trained greedily layer by layer formed Deep Belief Networks (Hinton, Osindero and Teh, 2006) — the 2006 paper whose layer-wise unsupervised pretraining restarted deep learning, solving the deep-training problem years before ReLU and batch norm. RBMs also powered collaborative filtering (the Netflix Prize winner's ingredient). Limits: binary units and expensive sampling, superseded by autoencoders (deterministic, cheaper) and later by VAEs/GANs; CD's gradient is biased; and no method exists to evaluate Z for large models. In an exam, RBM questions reward precisely three things: the energy function, the bipartite conditional independence, and CD-1 — plus one sentence on DBN pretraining history.",
            ],
            bullets: [
              "Energy model: E(v, h) = -b'v - c'h - v'Wh; P(v, h) proportional to exp(-E).",
              "Bipartite, no intra-layer connections: 'restricted'; enables conditional independence.",
              "Conditionals: P(h=1|v) = sigmoid(c + v'W); P(v=1|h) = sigmoid(b + h'W').",
              "CD-1 update: W += eta * (E_data[v h'] - E_model[v' h']); positive minus negative phase.",
              "One reconstruction step (CD-1) suffices in practice; full ML gradient is intractable (Z).",
              "Stacked RBMs = Deep Belief Networks - the 2006 layer-wise pretraining that revived deep learning.",
              "Limits: binary units, biased CD gradient, intractable Z; superseded by AEs/VAEs/GANs.",
            ],
            keyTerms: [
              { term: "Energy function", definition: "E(v, h) = -b'v - c'h - v'Wh; lower energy means higher probability under the Boltzmann distribution." },
              { term: "Restricted (bipartite)", definition: "No visible-visible or hidden-hidden connections; only cross-layer symmetric weights." },
              { term: "Contrastive divergence (CD-1)", definition: "Learning rule: weight change proportional to data-driven minus one-step-reconstruction statistics." },
              { term: "Deep Belief Network", definition: "Stack of RBMs trained greedily layer by layer, then fine-tuned; the 2006 pretraining breakthrough." },
            ],
            callout: {
              type: "tip",
              title: "Remember",
              body: "CD in one line: 'move W toward what the data imply (positive phase), away from what the model dreams (negative phase).' If you can also write P(h|v) = sigmoid(c + v'W), the RBM question is fully covered.",
            },
            diagram: {
              kind: "layers",
              title: "RBM structure (top = hidden)",
              caption:
                "Symmetric cross-layer weights only - the restriction that makes inference alternate and tractable.",
              layers: [
                { label: "Hidden units h (binary)", note: "sampled from P(h|v) = sigmoid(c + v'W)" },
                { label: "Symmetric weights W (no intra-layer links)", note: "the 'restricted' condition" },
                { label: "Visible units v (binary data)", note: "sampled from P(v|h) = sigmoid(b + h'W')" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "One CD-1 update on a batch.",
              code: `import numpy as np

def sigmoid(z): return 1 / (1 + np.exp(-z))

W = np.random.randn(784, 64) * 0.1       # visible x hidden weights

def cd1(v0, W, eta=0.1):
    h0 = (sigmoid(v0 @ W) > 0.5).astype(float)       # sample hidden
    v1 = (sigmoid(h0 @ W.T) > 0.5).astype(float)     # reconstruct visible
    h1 = sigmoid(v1 @ W)                             # model statistics
    return eta * (v0.T @ h0 - v1.T @ h1) / v0.shape[0]

v = (np.random.rand(32, 784) > 0.5).astype(float)    # binary data batch
W += cd1(v, W)                                        # one update`,
            },
            examQuestions: [
              {
                q: "Describe the RBM: its architecture, energy function, conditional distributions, and the contrastive divergence (CD-1) training rule with the positive and negative phases.",
                marks: 7,
                outline: [
                  "Bipartite graph: binary visible and hidden layers, symmetric W, no intra-layer links.",
                  "Energy: E(v, h) = -b'v - c'h - v'Wh; Boltzmann probability.",
                  "Conditional independence: P(h|v) = sigmoid(c + v'W), P(v|h) = sigmoid(b + h'W').",
                  "Why restriction matters: makes conditionals factorized, inference tractable.",
                  "Positive phase: data statistics E[v h] from real v.",
                  "Negative phase: one-step reconstruction statistics E[v' h'].",
                  "Update W += eta (positive - negative); mention stacking into DBNs.",
                ],
              },
              {
                q: "Why does the 'restricted' condition make RBM inference tractable?",
                marks: 2,
                outline: [
                  "No intra-layer connections means units are conditionally independent given the other layer.",
                  "So P(h|v) and P(v|h) factorize into single sigmoid sweeps instead of joint inference.",
                ],
              },
              {
                q: "State the CD-1 weight update in words and identify which statistics come from data and which from the model.",
                marks: 3,
                outline: [
                  "W changes by eta times (positive - negative) statistics.",
                  "Positive: co-activations from real data v with sampled h.",
                  "Negative: co-activations from one-step reconstructed v', h'.",
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
      title: "Applications and Frameworks",
      summary:
        "Deep learning in the field: object detection and semantic segmentation beyond classification, transformers and BERT as the attention era's architecture, the TensorFlow and PyTorch workflows every lab exam demands, the hardware and scaling realities behind training, the regularization toolkit, and deployment from quantization to monitoring.",
      chapter: {
        number: "05",
        title: "Detection, Transformers, Frameworks and Deployment",
        intro:
          "Unit V connects the models of Units I-IV to what practitioners actually build. Classification is only the start: detection localizes objects, segmentation labels every pixel. The transformer replaces recurrence with attention and BERT turns pretraining into a reusable commodity. TensorFlow and PyTorch express all of this in two idiomatic workflows. Hardware decides what trains in a night versus a month; regularization decides what generalizes; and deployment decides whether any of it ships.",
        inOneBreath:
          "Detection: two-stage (R-CNN family: proposals then classify) vs one-stage (YOLO/SSD: predict boxes directly), scored by IoU and mAP; segmentation: FCN/U-Net encode-decode with skip connections, pixel-wise loss; transformers: multi-head scaled dot-product attention softmax(QK'/sqrt(d))V + FFN per block, BERT = bidirectional encoder pretrained by masked LM; TensorFlow: model.compile().fit(); PyTorch: explicit loop with loss.backward() and optimizer.step(); train on GPUs with mixed precision; regularize with dropout/weight decay/augmentation/early stopping; deploy via quantization and monitoring.",
        sections: [
          {
            number: "5.1",
            title: "Object detection",
            body: [
              "Classification answers 'what is in this image'; detection answers 'what, and WHERE'. A detector outputs a set of (class, bounding box, confidence) predictions, so its architecture must handle a variable number of objects per image — the first conceptual jump beyond Unit II. The vocabulary: bounding box (x, y, width, height or corner coordinates), IoU (intersection over union) as the overlap score between predicted and ground-truth boxes, confidence threshold, non-maximum suppression (NMS) to merge duplicate detections of the same object, and mAP (mean average precision) as the headline metric averaging precision across recall levels and classes at IoU 0.5.",
              "Two-stage detectors localize first, classify second. R-CNN (2014) ran a selective-search proposal algorithm (~2000 candidate regions per image) and classified each with a CNN — accurate but hours per image. Fast R-CNN shared one full-image CNN pass and pooled each proposal (RoI pooling) from the shared feature map. Faster R-CNN (2015) replaced selective search with a learned Region Proposal Network (RPN) — a small conv head that proposes boxes from anchors at each feature-map position, making proposals differentiable and fast. The two-stage recipe remains the accuracy reference (Faster R-CNN + ResNet/F PN backbones).",
              "One-stage detectors predict everything in a single pass. YOLO ('You Only Look Once', 2016) divides the image into an S x S grid; each cell predicts B boxes with confidences plus class probabilities, and all predictions land in ONE network evaluation — real-time speeds (45+ FPS), at some cost in small-object accuracy (early versions). SSD runs boxes at MULTIPLE feature-map scales (each scale responsible for objects of its size range), recovering small objects better than YOLO v1. RetinaNet (2017) showed one-stage could match two-stage accuracy by fixing extreme foreground-background imbalance with focal loss (down-weighting easy negatives). The compare table 'two-stage vs one-stage' is the exam's standard ask.",
              "A numeric exercise cements the metrics: predicted box [10, 10, 50, 50], ground truth [12, 12, 52, 52]. Intersection: [12, 12, 50, 50] -> 38x38 = 1444. Union: 40x40 + 40x40 - 1444 = 1756. IoU = 1444/1756 = 0.822 — above the 0.5 threshold, so the detection counts as a true positive for mAP at IoU 0.5. Then NMS: given overlapping detections of the same class, keep the highest-confidence box and suppress all others with IoU above ~0.5 with it — a deterministic post-process every detector runs before reporting.",
              "Assessment. Two-stage: highest accuracy, slower, complex pipeline (proposals + head). One-stage: real-time, simpler, needs focal loss or anchor design to match accuracy. Backbone choice transfers directly from Unit II (ResNet + FPN is the default). Modern descendants worth one sentence: DETR casts detection as set prediction with transformers, and YOLO's successors iterate on the grid idea — but the two-stage/one-stage taxonomy, IoU/mAP/NMS toolkit, is the syllabus's stable core.",
            ],
            bullets: [
              "Detection output: (class, box, confidence) per object; variable count per image.",
              "IoU = intersection area / union area; 0.5 is the standard true-positive threshold.",
              "Two-stage: proposals first (RPN in Faster R-CNN), then classify/refine per RoI.",
              "One-stage: YOLO grid cells + SSD multi-scale heads predict boxes in a single pass.",
              "Focal loss (RetinaNet) fixes extreme class imbalance, letting one-stage match two-stage accuracy.",
              "NMS merges duplicate detections: keep best-confidence box, suppress IoU-overlapping peers.",
              "mAP: mean over classes of average precision across the precision-recall curve.",
            ],
            keyTerms: [
              { term: "IoU", definition: "Intersection over union of predicted and ground-truth boxes; the overlap score." },
              { term: "Region Proposal Network (RPN)", definition: "Faster R-CNN's learned head proposing candidate boxes from anchors." },
              { term: "Non-maximum suppression", definition: "Post-process keeping the best-confidence box per object and suppressing overlapping duplicates." },
              { term: "mAP", definition: "Mean average precision across classes at a given IoU threshold; the standard detection metric." },
            ],
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Compute one IoU by hand in the answer: intersection 38x38 = 1444, union 1756, IoU = 0.82. A numeric demonstration of the metric converts a definition question into a 7-mark answer.",
            },
            diagram: {
              kind: "compare",
              title: "Two-stage vs one-stage detection",
              caption:
                "Accuracy-first versus speed-first - the fundamental detection trade-off.",
              left: {
                heading: "Two-stage (R-CNN family)",
                items: [
                  "Stage 1: Region Proposal Network proposes candidate boxes",
                  "Stage 2: classify and refine each proposal (RoI pooling)",
                  "Highest accuracy (Faster R-CNN + FPN)",
                  "Slower, more complex pipeline",
                  "Backbone: ResNet + Feature Pyramid Network",
                ],
              },
              right: {
                heading: "One-stage (YOLO, SSD)",
                items: [
                  "Boxes + classes predicted in a single pass",
                  "YOLO: S x S grid, each cell predicts boxes",
                  "SSD: multi-scale feature maps for small objects",
                  "Real-time speeds (tens of FPS)",
                  "Focal loss needed to close the accuracy gap",
                ],
              },
            },
            codeExample: {
              language: "python",
              caption: "IoU and the NMS intuition in numpy.",
              code: `import numpy as np

def iou(a, b):                       # boxes [x1, y1, x2, y2]
    ix1, iy1 = max(a[0], b[0]), max(a[1], b[1])
    ix2, iy2 = min(a[2], b[2]), min(a[3], b[3])
    inter = max(0, ix2 - ix1) * max(0, iy2 - iy1)
    area = lambda r: (r[2]-r[0]) * (r[3]-r[1])
    return inter / (area(a) + area(b) - inter)

print(iou([10, 10, 50, 50], [12, 12, 52, 52]).round(3))  # 0.822
print(iou([0, 0, 10, 10], [20, 20, 30, 30]))             # 0.0 no overlap`,
            },
            examQuestions: [
              {
                q: "Explain object detection. Compare two-stage (R-CNN family) and one-stage (YOLO/SSD) approaches, define IoU, mAP and NMS, and compute IoU for two given boxes.",
                marks: 7,
                outline: [
                  "Task: per-object class + bounding box + confidence; variable outputs.",
                  "Two-stage: RPN proposals then per-RoI classification (Faster R-CNN); accurate, slower.",
                  "One-stage: YOLO grid or SSD multi-scale heads; one pass, real-time.",
                  "Focal loss closes the one-stage accuracy gap (RetinaNet).",
                  "IoU definition + numeric example (38x38 / 1756 = 0.82).",
                  "mAP: mean average precision across classes/recall levels.",
                  "NMS: keep best box, suppress IoU-overlapping duplicates.",
                ],
              },
              {
                q: "What replaced selective search in Faster R-CNN, and why was it an improvement?",
                marks: 2,
                outline: [
                  "The learned Region Proposal Network (RPN).",
                  "Faster, differentiable, trained jointly with the detector.",
                ],
              },
              {
                q: "Predicted box [0, 0, 10, 10], ground truth [0, 0, 20, 10]. Compute IoU.",
                marks: 3,
                outline: [
                  "Intersection: 10x10 = 100.",
                  "Union: 100 + 200 - 100 = 200.",
                  "IoU = 0.5.",
                ],
              },
            ],
          },
          {
            number: "5.2",
            title: "Semantic segmentation",
            body: [
              "Semantic segmentation labels EVERY pixel with a class: output is a mask with the same width and height as the input, one class per pixel — a dense prediction, in contrast to detection's sparse boxes. (Instance segmentation further separates object occurrences of the same class — two pedestrians get distinct masks — and panoptic segmentation unifies both with 'stuff' classes like sky.) The metric is pixel accuracy or, better, mean IoU (mIoU) per class, which is robust to class imbalance; Dice coefficient (2|A n B| / (|A| + |B|)) dominates in medical imaging.",
              "The naive CNN approach fails structurally: Unit II's classifiers repeatedly POOL, ending at 7x7 feature maps — spatial resolution is exactly what segmentation needs, and pooling destroys it. The fix has two families. FCN (Fully Convolutional Network, 2015): replace all dense layers with convolutions, then UPsample the coarse maps back to input size with transposed convolutions (learnable upsampling); coarse-but-semantic maps become pixel-wise predictions. The second family adds what FCN lacks: skip connections carrying high-resolution detail from the encoder to the decoder.",
              "U-Net (Ronneberger et al., 2015) is the canonical architecture: a symmetric encoder-decoder where each decoder stage upsamples (2x2 transposed conv), CONCATENATES the matching encoder-stage feature map (the skip), and processes the fusion with two 3x3 convs. The skips restore precise edges (encoder detail) while the decoder path restores semantics (classification context) — the division of labour that made U-Net the default for medical imaging and, with modifications, everywhere. The original trained on 30 biomedical images with heavy augmentation, proving small-data segmentation was feasible.",
              "A dimension trace for a compact U-Net on 128x128x3 input: encoder Conv 32 -> pool -> Conv 64 -> pool (down to 32x32x64); bottleneck Conv 128; decoder upsample to 64x64, concatenate with the 64-channel encoder features (64 + 64 = 128 channels), conv to 64; upsample to 128x128, concatenate with the 32-channel encoder features, conv to 32; final 1x1 conv to 1 channel with sigmoid (binary mask) or C channels with softmax. Output is 128x128 — full resolution restored, with the concatenation channels visibly mixing 'where' (encoder) and 'what' (decoder).",
              "Practical notes: losses are per-pixel cross-entropy or Dice/focal combinations (segmentation masks are extremely class-imbalanced — a tumour may be 1% of pixels, so plain accuracy is meaningless and weighted or Dice losses are standard); augmentation (flips, rotations, elastic deformations) carries disproportionate weight on small datasets; and post-processing (CRFs, morphological cleanup) historically sharpened boundaries. Assessment: FCN = the idea (fully conv + upsample); U-Net = the architecture (encoder-decoder + skips); DeepLab = dilated convolutions for context. Three names, three contributions — the complete short answer.",
            ],
            bullets: [
              "Segmentation: per-pixel class labels; metric mIoU or Dice, not raw accuracy.",
              "Pooling destroys the spatial detail segmentation needs - the core architectural problem.",
              "FCN: dense -> conv, transposed convolutions to upsample back to input resolution.",
              "U-Net: symmetric encoder-decoder; each decoder stage concatenates the matching encoder map.",
              "Skips restore edges (detail) while the decoder restores semantics (context).",
              "Losses: per-pixel cross-entropy, Dice, or focal - class imbalance is extreme (small lesions).",
              "Also name DeepLab (dilated convs) and instance vs semantic vs panoptic distinctions.",
            ],
            keyTerms: [
              { term: "Semantic segmentation", definition: "Assigning a class label to every pixel of an image." },
              { term: "Transposed convolution", definition: "Learnable upsampling layer that expands spatial resolution (the decoder's engine)." },
              { term: "Skip connection (U-Net)", definition: "Concatenation of encoder feature maps into decoder stages to restore fine detail." },
              { term: "Dice coefficient", definition: "2|A n B| / (|A| + |B|); overlap metric standard in medical segmentation." },
            ],
            callout: {
              type: "warning",
              title: "Common mistake",
              body: "U-Net's skip connections CONCATENATE encoder features into decoder stages (channels add up), unlike ResNet's skips which ADD projections. Writing 'ResNet-style addition' in a U-Net answer is the classic slip.",
            },
            diagram: {
              kind: "layers",
              title: "U-Net encoder-decoder (top = output mask)",
              caption:
                "Down for semantics, back up for resolution; horizontal skips pass detail across the U.",
              layers: [
                { label: "Output mask 1x128x128", note: "1x1 conv + sigmoid/softmax" },
                { label: "Decoder stage 2: upsample + concat encoder ch32 -> conv 32", note: "full resolution restored" },
                { label: "Decoder stage 1: upsample + concat encoder ch64 -> conv 64", note: "skip from encoder stage 2" },
                { label: "Bottleneck Conv 128 @ 32x32", note: "most semantic, least spatial detail" },
                { label: "Encoder: Conv 32 -> pool -> Conv 64 -> pool", note: "detail captured before pooling" },
                { label: "Input image 3x128x128", note: "pixel-wise target: class per pixel" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "A compact U-Net block structure in Keras.",
              code: `from tensorflow.keras import layers, models

inp = layers.Input((128, 128, 3))
c1 = layers.Conv2D(32, 3, padding="same", activation="relu")(inp)
p1 = layers.MaxPooling2D(2)(c1)                    # down to 64x64
c2 = layers.Conv2D(64, 3, padding="same", activation="relu")(p1)
u = layers.Conv2DTranspose(32, 2, strides=2)(c2)   # up to 128x128
cat = layers.Concatenate()([u, c1])                # skip: concat, not add
out = layers.Conv2D(1, 1, activation="sigmoid")(cat)
models.Model(inp, out).summary()`,
            },
            examQuestions: [
              {
                q: "Explain semantic segmentation. Describe why plain CNN classifiers are unsuitable, how FCN solves it, and draw/describe the U-Net architecture with its skip connections. Name the standard metrics.",
                marks: 7,
                outline: [
                  "Task: per-pixel class labels; output mask at input resolution.",
                  "Problem: pooling shrinks maps to 7x7 - spatial detail destroyed.",
                  "FCN: fully convolutional, transposed convolutions to upsample.",
                  "U-Net: symmetric encoder-decoder with per-stage concatenation skips.",
                  "Skips restore edges/detail; decoder restores semantics.",
                  "Dimension trace: 128x128 in -> pools down -> upsamples back with concats.",
                  "Metrics: mIoU, Dice; note extreme class imbalance and weighted losses.",
                ],
              },
              {
                q: "What is the difference between semantic and instance segmentation?",
                marks: 2,
                outline: [
                  "Semantic: every pixel gets a class, instances not separated.",
                  "Instance: each object occurrence gets its own mask (two pedestrians distinct).",
                ],
              },
              {
                q: "A decoder stage upsamples 32x32x128 to 64x64x64 and concatenates the matching 64-channel encoder map. What are the output channels before the next conv?",
                marks: 3,
                outline: [
                  "Upsampled map: 64 channels; encoder map: 64 channels.",
                  "Concatenation sums channels: 64 + 64 = 128.",
                  "Output: 64x64x128.",
                ],
              },
            ],
          },
          {
            number: "5.3",
            title: "Transformers and BERT",
            body: [
              "The transformer ('Attention Is All You Need', Vaswani et al., 2017) removed recurrence entirely: every token attends to every other token in ONE parallel operation. Each transformer block has two sub-layers — multi-head self-attention and a position-wise feedforward network — each wrapped with a residual connection and layer normalization. Stacking N blocks (12 in BERT-base) with residual streams throughout gives the architecture that now underlies essentially all large language and vision models (ViT).",
              "Self-attention mechanics: project each token's embedding x into three vectors via learned matrices — query q = xW_Q, key k = xW_K, value v = xW_V. Every token's query is dot-producted with every token's key, scaled by sqrt(d_k) (preventing large-dimension dot products from saturating the softmax), softmaxed into attention weights, and used to compute a weighted sum of all values: Attention(Q, K, V) = softmax(QK^T / sqrt(d_k)) V. The output for each position is a context-aware mixture of the whole sequence — the RNN's sequential state replaced by one parallel lookup table.",
              "Multi-head attention runs h parallel attention heads (BERT-base: 12 heads of d_k = 64) with separate projections, concatenates their outputs and projects once. Rationale: different heads learn different relations — one may track syntax (subject-verb), another coreference (pronoun-antecedent), another positional patterns; a single softmax averages these away. Positional encodings (sinusoids in the original, learned vectors in BERT) are added to token embeddings because attention itself is permutation-invariant — order must be injected explicitly.",
              "BERT (Devlin et al., 2018) is the encoder-only transformer turned into a pretraining commodity. Pretraining tasks: masked language modelling (mask ~15% of input tokens — 80% replaced by [MASK], 10% random, 10% unchanged — and predict them) and next sentence prediction (binary: do these two sentences follow each other?). The result is a bidirectional contextual encoder: each token's representation has seen its whole sentence. Downstream use: add a small head (one dense layer) and fine-tune on sentiment, NER, QA — BERT-base is 12 layers, 768 hidden, 12 heads, 110M parameters; BERT-large is 24/1024/16, 340M. The pretrain-then-fine-tune recipe (transfer learning, Section 2.9's logic in language) is BERT's real invention.",
              "Assessment. Advantages over RNNs: full parallelism over the sequence (GPU-friendly — training transforms from weeks to days), direct long-range connections (any token reaches any other in one hop, no vanishing chain), and interpretability via attention maps (with caveats). Costs: O(T^2) memory and compute in sequence length (the scaling wall), heavy data appetite (pretraining needs billions of tokens), and autoregressive generation remains sequential on the decoding side. For the exam: the attention equation, the Q/K/V roles, multi-head rationale, positional encoding necessity, and BERT's two pretraining tasks are the five canonical components.",
            ],
            bullets: [
              "Transformer block: multi-head self-attention + position-wise FFN, each with residual + layer norm.",
              "Q/K/V: queries match keys to score relevance; the softmax-weighted values form the output.",
              "Scaled dot-product: softmax(QK^T / sqrt(d_k)) V; sqrt(d_k) prevents softmax saturation.",
              "Multi-head: h parallel attentions with separate projections, concatenated and projected - different heads learn different relations.",
              "Positional encodings inject order - attention alone is permutation-invariant.",
              "BERT: encoder-only, pretrained by masked LM (15% masking) + next sentence prediction; fine-tuned per task.",
              "BERT-base: 12 layers, 768 hidden, 12 heads, 110M params; advantage: parallel training, one-hop long-range links.",
            ],
            keyTerms: [
              { term: "Self-attention", definition: "Each token attends to all tokens of the same sequence via Q/K/V projections and softmax-weighted values." },
              { term: "Multi-head attention", definition: "Several parallel attention functions with separate projections, concatenated - heads specialize in different relations." },
              { term: "Masked language modelling", definition: "BERT's pretraining task: corrupt ~15% of tokens and predict them from bidirectional context." },
              { term: "Positional encoding", definition: "Vectors added to embeddings to give attention sequence-order information." },
            ],
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Assign the three roles crisply: Query = what I am looking for, Key = what I contain for matching, Value = what I contribute if matched. Then the one-line formula softmax(QK'/sqrt(d))V. This QKV sentence plus formula answers half of every transformer question.",
            },
            diagram: {
              kind: "flow",
              title: "Scaled dot-product attention, one head",
              caption:
                "Every token's query matches every key in one matrix product - parallelism the RNN never had.",
              steps: [
                { label: "Token embeddings X", note: "+ positional encodings" },
                { label: "Project Q, K, V", note: "XW_Q, XW_K, XW_V" },
                { label: "Scores = Q K^T / sqrt(d_k)", note: "T x T relevance matrix" },
                { label: "Softmax rows -> weights", note: "each row sums to 1" },
                { label: "Weighted sum of V", note: "context-aware outputs, all positions at once" },
                { label: "Concat heads + project", note: "multi-head fusion into the residual stream" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "Scaled dot-product self-attention in numpy.",
              code: `import numpy as np

def softmax(z):
    e = np.exp(z - z.max(-1, keepdims=True))
    return e / e.sum(-1, keepdims=True)

T, d = 5, 16
X = np.random.randn(T, d)                    # token embeddings
Wq, Wk, Wv = (np.random.randn(d, d) * 0.2 for _ in range(3))
Q, K, V = X @ Wq, X @ Wk, X @ Wv

A = softmax(Q @ K.T / np.sqrt(d)) @ V        # scaled dot-product
print("attention matrix:", (Q @ K.T / np.sqrt(d)).shape)   # (5, 5)
print("output:", A.shape)                    # (5, 16) - all tokens at once`,
            },
            examQuestions: [
              {
                q: "Explain the transformer's self-attention. Give the Q/K/V roles and the scaled dot-product formula, explain multi-head attention and positional encodings, and state why transformers replaced RNNs.",
                marks: 7,
                outline: [
                  "Projections: q = xW_Q, k = xW_K, v = xW_V per token.",
                  "Roles: query seeks, key advertises, value contributes.",
                  "Formula: softmax(QK^T / sqrt(d_k)) V; explain the sqrt scaling.",
                  "Multi-head: h parallel attentions, concatenated, projected; heads specialize.",
                  "Positional encodings: attention is permutation-invariant; order must be injected.",
                  "Residual + layer norm around attention and FFN sub-layers.",
                  "Why over RNN: full parallelism, one-hop long-range paths, no vanishing chain.",
                ],
              },
              {
                q: "What are BERT's two pretraining tasks?",
                marks: 2,
                outline: [
                  "Masked language modelling: predict ~15% corrupted tokens from bidirectional context.",
                  "Next sentence prediction: binary classification of sentence pairs.",
                ],
              },
              {
                q: "Why must transformers add positional encodings when RNNs do not?",
                marks: 3,
                outline: [
                  "RNNs process tokens sequentially, so order is implicit in the recurrence.",
                  "Attention treats the input as an unordered set (permutation-invariant).",
                  "Position encodings added to embeddings restore sequence order.",
                ],
              },
            ],
          },
          {
            number: "5.4",
            title: "The TensorFlow/Keras workflow",
            body: [
              "TensorFlow 2.x with Keras expresses the standard deep-learning pipeline in five moves: build, compile, fit, evaluate, save. Build: assemble layers in keras.Sequential (for linear stacks) or the functional API (for graphs with branches — ResNet blocks, U-Net skips, multiple inputs/outputs). Compile: attach optimizer (SGD/momentum, Adam), loss (sparse_categorical_crossentropy for integer labels, binary_crossentropy for sigmoid heads, mse for regression) and metrics (accuracy, AUC) — compile defines HOW learning happens before any data arrives.",
              "Fit: model.fit(X, y, epochs=..., batch_size=..., validation_split=0.2, callbacks=[...]) runs the full training loop — batching, shuffling, forward, loss, backprop, update, validation each epoch — all automated. Callbacks customize the loop without rewriting it: EarlyStopping (patience on val_loss, restore best weights), ModelCheckpoint, ReduceLROnPlateau, TensorBoard for curves. Evaluate/predict: model.evaluate on the test set, model.predict for inference. Save: model.save('model.keras') (full Keras format), or TF SavedModel / TFLite for deployment (Section 5.8).",
              "A complete dimension-traced example, the shape mental model every Keras error message assumes: layers.Dense(64, input_shape=(30,)) expects batches of 30-d vectors, output (batch, 64); layers.Dense(1, activation='sigmoid') outputs (batch, 1) for binary classification; Conv2D(32, 3, input_shape=(28, 28, 1)) expects (batch, 28, 28, 1) and outputs (batch, 26, 26, 32) with valid padding. The 'batch' axis is implicit everywhere — the single most important fact for reading Keras errors: 'expected shape (None, 30), found (30,)' means a missing batch dimension.",
              "Beyond Sequential, the pieces that appear in labs: tf.data pipelines (dataset = tf.data.Dataset.from_tensor_slices(...).shuffle(10000).batch(32).prefetch(1)) replace numpy arrays for large data and GPU feed efficiency; custom training loops use tf.GradientTape() with tape.gradient(loss, model.trainable_variables) and optimizer.apply_gradients — the explicit version of what fit automates, and the answer to 'how does Keras actually train?'; subclassed models and custom layers cover research needs. Custom loss/metric functions are one-liners: def my_loss(y_true, y_pred): return tf.reduce_mean((y_true - y_pred)**2).",
              "Assessment: strengths — the cleanest high-level API in the field, callbacks ecosystem, deployment story (SavedModel, TFLite, TF Serving); weaknesses — less flexible than PyTorch for exotic research control flow (TF2 eager mode narrowed this gap), debugging inside fit requires callbacks rather than print statements. For exams, the workflow sentence 'define -> compile -> fit -> evaluate -> save' plus one traced model is the complete answer skeleton.",
            ],
            bullets: [
              "Five moves: build (Sequential/functional) -> compile (optimizer, loss, metrics) -> fit -> evaluate -> save.",
              "Loss pairing: sigmoid head + binary_crossentropy; softmax + categorical/sparse CE; linear + mse.",
              "Callbacks customize fit: EarlyStopping, ModelCheckpoint, ReduceLROnPlateau, TensorBoard.",
              "Implicit batch axis in every shape: Dense(64, input_shape=(30,)) sees (batch, 30) -> (batch, 64).",
              "tf.data pipelines: from_tensor_slices -> shuffle -> batch -> prefetch for efficient GPU feeding.",
              "tf.GradientTape is the explicit loop under fit: tape.gradient + optimizer.apply_gradients.",
              "Deployment formats: .keras/SavedModel for reload, TFLite for mobile (Section 5.8).",
            ],
            keyTerms: [
              { term: "model.compile", definition: "Attach optimizer, loss and metrics to a built Keras model before training." },
              { term: "model.fit", definition: "The automated training loop: batching, backprop, validation per epoch, callback hooks." },
              { term: "Callback", definition: "A hook object (early stopping, checkpointing) invoked at epoch/batch boundaries during fit." },
              { term: "tf.GradientTape", definition: "TensorFlow's eager-mode recorder enabling explicit custom training loops with automatic differentiation." },
            ],
            callout: {
              type: "tip",
              title: "Remember",
              body: "Every Keras shape error is a batch-axis story: layers always see (batch, ...). When 'expected (None, 30), got (30,)' appears, add a batch dimension. This one fact resolves most lab-exam debugging in seconds.",
            },
            diagram: {
              kind: "pipeline",
              title: "The Keras training pipeline",
              caption:
                "Five declarations replace hundreds of lines - fit runs the whole loop of Section 1.8 for you.",
              stages: [
                { label: "tf.data / numpy input", note: "shuffle -> batch -> prefetch" },
                { label: "Build model", note: "Sequential or functional API" },
                { label: "compile(optimizer, loss, metrics)", note: "defines the learning procedure" },
                { label: "fit(..., callbacks=[...])", note: "full training loop + validation" },
                { label: "evaluate on test set", note: "final honest numbers" },
                { label: "save / export", note: ".keras, SavedModel, TFLite" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "End-to-end Keras training with early stopping.",
              code: `from tensorflow import keras
from tensorflow.keras import layers

model = keras.Sequential([
    layers.Dense(64, activation="relu", input_shape=(30,)),
    layers.Dense(1, activation="sigmoid"),
])
model.compile(optimizer="adam", loss="binary_crossentropy",
              metrics=["accuracy"])

early = keras.callbacks.EarlyStopping(monitor="val_loss",
                                      patience=3,
                                      restore_best_weights=True)
model.fit(X, y, epochs=50, batch_size=32, validation_split=0.2,
          callbacks=[early], verbose=0)
loss, acc = model.evaluate(X_test, y_test, verbose=0)
model.save("model.keras")`,
            },
            examQuestions: [
              {
                q: "Describe the TensorFlow/Keras workflow for training a classifier: model building, compile arguments, fit with validation and callbacks, and evaluation/saving. Include a small code sketch and explain what fit automates.",
                marks: 7,
                outline: [
                  "Build: Sequential or functional; layer shapes with implicit batch axis.",
                  "compile: optimizer (Adam), loss matched to output activation, metrics.",
                  "fit: epochs, batch_size, validation_split; shuffling and backprop automated.",
                  "Callbacks: EarlyStopping(patience) and ModelCheckpoint explained.",
                  "evaluate on a test set; predict for inference.",
                  "save to .keras/SavedModel; mention TFLite for deployment.",
                  "Note tf.GradientTape as the explicit loop underneath fit.",
                ],
              },
              {
                q: "Which loss pairs with a Dense(1, activation='sigmoid') output, and which with Dense(10, activation='softmax')?",
                marks: 2,
                outline: [
                  "sigmoid head: binary_crossentropy.",
                  "softmax head: categorical_crossentropy (one-hot) or sparse_categorical_crossentropy (integer labels).",
                ],
              },
              {
                q: "What does EarlyStopping with monitor='val_loss', patience=3, restore_best_weights=True do?",
                marks: 3,
                outline: [
                  "Tracks validation loss each epoch.",
                  "Stops when it has not improved for 3 consecutive epochs.",
                  "Restores the weights of the best epoch rather than the last.",
                ],
              },
            ],
          },
          {
            number: "5.5",
            title: "The PyTorch workflow",
            body: [
              "PyTorch expresses the SAME pipeline explicitly — nothing is automated away, which is why researchers prefer it and why exams love comparing it with Keras. Components: Dataset + DataLoader handle data (batching, shuffling, workers, pin_memory for GPU feeds); nn.Module defines models (each module declares its layers in __init__ and its forward pass in forward()); torch.optim holds optimizers (SGD, Adam) parameterized by model.parameters(); and losses live in torch.nn (MSELoss, CrossEntropyLoss — which expects raw logits and applies softmax internally, a classic gotcha).",
              "The training loop, five canonical lines repeated per batch: optimizer.zero_grad() (clear gradients from the previous step — PyTorch ACCUMULATES gradients by default, and forgetting zero_grad is the most famous silent bug in the field); outputs = model(xb); loss = loss_fn(outputs, yb); loss.backward() (Section 1.5's backpropagation, automatic over any Python control flow); optimizer.step() (the gradient descent update). Validation runs under torch.no_grad() (or inference_mode) to skip gradient construction, with model.eval() to disable dropout and switch batch norm to running statistics — the train/eval distinction examiners probe.",
              "A dimension-traced sketch for a tabular binary classifier: DataLoader yields (batch=64, features=30) tensors; nn.Sequential(nn.Linear(30, 64), nn.ReLU(), nn.Linear(64, 1)) outputs (64, 1); loss_fn = nn.BCEWithLogitsLoss applies the sigmoid + BCE numerically stably against targets shaped (64,). For classification with N classes, nn.CrossEntropyLoss pairs with a RAW-LOGIT head of width N and integer targets (64,) — no softmax layer in the model, because the loss applies it. These two pairings account for most shape/loss mismatches in student code.",
              "The flexibility that defines PyTorch: forward() is ordinary Python — loops, conditionals, even data-dependent recursion — and autodiff records every operation, so research architectures (dynamic graphs, custom losses, reinforcement learning) need no framework extensions. model.train()/model.eval() toggles behave differently per module type (dropout active only in train; batch norm updating running stats only in train). Saving: torch.save(model.state_dict(), 'model.pt') with load_state_dict for reload — state_dict (parameters only) is preferred over pickling the whole model.",
              "Assessment and the comparison sentence: PyTorch = explicit, Pythonic, research-first (you write the loop; every step is visible and debuggable); TensorFlow/Keras = automated, deployment-first (fit does the loop; SavedModel/TFLite ecosystem). Both implement the identical mathematics of Units I-IV; the choice is ergonomics and ecosystem. In an exam, writing both loops side by side — fit vs the five-line loop — is the highest-scoring form of the frameworks question.",
            ],
            bullets: [
              "Data: Dataset + DataLoader (batch, shuffle, workers, pin_memory).",
              "Model: nn.Module with __init__ (layers) and forward() (plain Python control flow).",
              "Loop per batch: zero_grad -> forward -> loss -> backward -> step; gradients ACCUMULATE without zero_grad.",
              "nn.CrossEntropyLoss expects raw logits + integer labels (softmax inside); BCEWithLogitsLoss likewise for binary.",
              "Validation: model.eval() + torch.no_grad() - disables dropout, freezes batch-norm statistics.",
              "Save/load: torch.save(model.state_dict()) + load_state_dict.",
              "Compare: PyTorch explicit and research-first; Keras automated and deployment-first - same math underneath.",
            ],
            keyTerms: [
              { term: "nn.Module", definition: "PyTorch's model base class; declares layers in __init__ and computation in forward()." },
              { term: "zero_grad()", definition: "Clears accumulated gradients before each backward pass; omitting it silently sums old gradients in." },
              { term: "Autograd", definition: "PyTorch's automatic differentiation engine recording every operation for loss.backward()." },
              { term: "state_dict", definition: "The parameter tensor dictionary saved/loaded for model persistence." },
            ],
            callout: {
              type: "warning",
              title: "Common mistake",
              body: "Two classic PyTorch bugs: forgetting optimizer.zero_grad() (gradients accumulate across batches, training quietly diverges) and applying a softmax layer before nn.CrossEntropyLoss (double softmax flattens learning). Both are favourite viva questions.",
            },
            diagram: {
              kind: "cycle",
              title: "The PyTorch training loop (one epoch)",
              caption:
                "Every arrow is a line of code you write - the explicit counterpart of Keras's fit.",
              steps: [
                { label: "for xb, yb in train_loader", note: "DataLoader yields batches" },
                { label: "optimizer.zero_grad()", note: "clear accumulated gradients" },
                { label: "pred = model(xb)", note: "forward pass" },
                { label: "loss = loss_fn(pred, yb)", note: "compare with targets" },
                { label: "loss.backward()", note: "autograd backpropagation" },
                { label: "optimizer.step()", note: "the gradient descent update" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "The canonical PyTorch training loop.",
              code: `import torch
import torch.nn as nn

model = nn.Sequential(nn.Linear(30, 64), nn.ReLU(), nn.Linear(64, 1))
opt = torch.optim.Adam(model.parameters(), lr=1e-3)
loss_fn = nn.BCEWithLogitsLoss()

for epoch in range(20):
    for xb, yb in train_loader:          # one epoch over batches
        opt.zero_grad()                  # clear old gradients
        loss = loss_fn(model(xb).squeeze(1), yb.float())
        loss.backward()                  # backpropagation
        opt.step()                       # optimizer update
    # validation under torch.no_grad() with model.eval()`,
            },
            examQuestions: [
              {
                q: "Write and explain the PyTorch training loop. Cover Dataset/DataLoader, nn.Module, the five canonical loop lines, why zero_grad is required, and the model.eval()/no_grad validation pattern.",
                marks: 7,
                outline: [
                  "DataLoader batches and shuffles the Dataset.",
                  "Model: nn.Module with __init__ and forward().",
                  "Loop: zero_grad -> forward -> loss -> backward -> step.",
                  "zero_grad: PyTorch accumulates gradients; omitting sums old batches in.",
                  "loss.backward(): autograd computes all gradients (Section 1.5).",
                  "optimizer.step(): gradient descent update on parameters.",
                  "Validation: model.eval() + torch.no_grad() - dropout off, batch-norm stats frozen.",
                ],
              },
              {
                q: "Why does nn.CrossEntropyLoss expect raw logits rather than softmax outputs?",
                marks: 2,
                outline: [
                  "It applies log-softmax internally for numerical stability.",
                  "A manual softmax first would double-apply and flatten gradients.",
                ],
              },
              {
                q: "What is the difference between model.train() and model.eval() in PyTorch?",
                marks: 3,
                outline: [
                  "train(): dropout active, batch norm updates running statistics.",
                  "eval(): dropout disabled, batch norm uses frozen running statistics.",
                  "Forgetting eval() at inference silently degrades accuracy.",
                ],
              },
            ],
          },
          {
            number: "5.6",
            title: "Hardware and training at scale",
            body: [
              "Deep learning's renaissance is a hardware story: GPUs turned week-long trainings into overnight ones. A GPU executes thousands of threads in parallel (SIMD-style), and every core deep-learning operation — matrix multiply, convolution (expressed as matrix multiplies via im2col), elementwise activation — is exactly such a parallel workload. Rule of thumb: a modern consumer GPU delivers 10-100x the effective training throughput of a CPU core. Batch size is the bridge: one batch = one large matrix product = one full utilization sweep of the device, which is why GPUs prefer batches of 32+ (batch size 1 starves them).",
              "Memory is the binding constraint, and the activation cache is the reason. Training stores every layer's activations for backpropagation (Section 1.5) — memory scales with batch size x sequence length x width x depth. Practical arithmetic worth citing: ResNet-50 at batch 32, 224x224 needs ~8-10 GB; batch 128 needs 4x that. Remedies in order of preference: smaller batch + more gradient accumulation steps (mathematically equivalent to a large batch), mixed precision (Section below), activation checkpointing (recompute activations instead of storing them, ~30% extra compute for large memory savings), and gradient compression.",
              "Mixed-precision training (AMP) is the standard modern speedup: keep weights and most computation in FP16/BF16 (half the memory, 2-8x faster on tensor cores), keep FP32 master weights and sensitive accumulations (softmax, loss reductions) for stability, and scale losses dynamically to avoid FP16 underflow. Two lines in PyTorch (autocast + GradScaler), one argument in TensorFlow (mixed_float16 policy). Typical result: ~2x throughput and ~half the memory at negligible accuracy cost — the default for anything serious since Volta-generation GPUs.",
              "Scaling out: data parallelism replicates the model on N GPUs, splits each batch across them, computes gradients locally and averages (all-reduce) before the step — near-linear speedup for most models, the default multi-GPU strategy (DDP in PyTorch, MirroredStrategy in TF). Model/pipeline parallelism splits the MODEL itself when it exceeds one device's memory (transformers: layers across GPUs, attention heads split). TPU pods push the same idea further with dedicated matrix hardware. Multi-node clusters add communication overhead — the all-reduce bandwidth and the batch-size/learning-rate interaction (Section 1.6's linear scaling rule) become the real design constraints.",
              "Practical checklist worth memorizing for labs: prefer GPU when batches are 32+; move data with pin_memory + non_blocking transfers; monitor GPU utilization (nvidia-smi — if it sits at 20%, the bottleneck is data loading, not compute: add DataLoader workers/prefetch); use AMP by default; gradient accumulation to simulate large batches; profile before optimizing. Assessment sentence: hardware does not change the mathematics, but it dictates the FEASIBLE batch size, model size and experiment count — and experiment count is what actually drives model quality.",
            ],
            bullets: [
              "GPUs: thousands of parallel threads; matrix multiplies and convs are ideal SIMD workloads; 10-100x CPU throughput.",
              "Batch size bridges software and hardware: one batch = one full parallel sweep of the device.",
              "Training memory is dominated by cached activations: scales with batch x sequence x width x depth.",
              "Mixed precision (FP16/BF16 compute + FP32 master weights): ~2x speed, ~half memory, loss scaling for stability.",
              "Gradient accumulation: many small batches summed = one large batch without the memory.",
              "Data parallelism: replicate model, split batch, all-reduce gradients - the default multi-GPU recipe (DDP/MirroredStrategy).",
              "Bottleneck discipline: nvidia-smi at 20% means data loading is the problem - add workers/prefetch.",
            ],
            keyTerms: [
              { term: "Mixed precision (AMP)", definition: "FP16/BF16 compute with FP32 master weights and dynamic loss scaling for speed and memory." },
              { term: "Data parallelism", definition: "Replicate the model per GPU, split each batch, average gradients across replicas." },
              { term: "Activation checkpointing", definition: "Recompute stored activations during backprop instead of caching them, trading compute for memory." },
              { term: "All-reduce", definition: "The collective communication averaging gradients across GPUs before the optimizer step." },
            ],
            callout: {
              type: "tip",
              title: "Remember",
              body: "The two numeric facts examiners accept: mixed precision gives roughly 2x throughput at half the memory, and GPU utilization below ~30% means the data pipeline (not the model) is the bottleneck. Both are one-line answers with big credibility.",
            },
            diagram: {
              kind: "fork",
              title: "Where should this model train?",
              caption:
                "Match the hardware to the experiment's size - over- and under-provisioning both waste time.",
              start: "Model + dataset size assessment",
              branches: [
                { label: "Tiny model, small data", outcome: "CPU/laptop is fine; GPU adds startup overhead for nothing", good: true },
                { label: "Standard CNN/transformer fine-tune", outcome: "single GPU + AMP + batch 32-128 - the sweet spot", good: true },
                { label: "Pretraining or very large model", outcome: "multi-GPU data parallel or TPU; plan memory and all-reduce bandwidth", good: true },
              ],
            },
            codeExample: {
              language: "python",
              caption: "Batch memory arithmetic and AMP in PyTorch.",
              code: `import torch

params = 25e6                      # model parameters
bytes_per = 4                      # FP32
print("weights:", params * bytes_per / 1e9, "GB")
# activations dominate: batch x layers x tokens x hidden x ~10x overhead

scaler = torch.cuda.amp.GradScaler()
# with torch.cuda.amp.autocast():        # mixed-precision forward
#     loss = loss_fn(model(xb), yb)
# scaler.scale(loss).backward(); scaler.step(opt); scaler.update()`,
            },
            examQuestions: [
              {
                q: "Explain why GPUs accelerate deep learning. Discuss training memory (activation caching), mixed-precision training, and data parallelism with all-reduce.",
                marks: 7,
                outline: [
                  "GPU: thousands of SIMD threads; matrix multiply/conv are parallel workloads.",
                  "Batch size = one full utilization sweep; small batches starve the device.",
                  "Training memory: cached activations for backprop dominate; scales with batch/depth/width.",
                  "Remedies: gradient accumulation, activation checkpointing, mixed precision.",
                  "AMP: FP16/BF16 compute + FP32 master weights + loss scaling; ~2x speed.",
                  "Data parallelism: replicate, split batch, all-reduce average gradients (DDP).",
                  "Model parallelism when the model exceeds one device.",
                ],
              },
              {
                q: "Why do activations, not weights, dominate training memory for moderate models?",
                marks: 2,
                outline: [
                  "Backprop needs every layer's activations cached per sample in the batch.",
                  "Cache scales with batch size x depth x width; weights are stored once.",
                ],
              },
              {
                q: "nvidia-smi shows 20% GPU utilization during training. What is the likely bottleneck and the fix?",
                marks: 3,
                outline: [
                  "The data pipeline is starving the GPU (loading/augmentation too slow).",
                  "Fix: more DataLoader workers, prefetching, pin_memory, lighter augmentation.",
                  "Verify by watching utilization rise after the change.",
                ],
              },
            ],
          },
          {
            number: "5.7",
            title: "The regularization toolkit",
            body: [
              "Deep networks memorize by default — a sufficiently large net can fit random labels (Zhang et al., 2017), so generalization must be engineered. Regularization is any mechanism that constrains training toward solutions that generalize; the toolkit falls into four shelves: data-side (augmentation), model-side (dropout, weight decay, batch norm, architectural priors), optimization-side (early stopping, label smoothing), and ensembling. The exam question is always 'explain X and say WHY it works' — mechanism plus rationale, not just the API call.",
              "Dropout (Srivastava et al., 2014): during training, zero each unit with probability p (typically 0.5 in dense layers, 0.1-0.3 in conv) and scale survivors by 1/(1-p) ('inverted dropout' — so test time needs no scaling). Mechanisms: it prevents co-adaptation (no unit can rely on a specific partner being present), trains an implicit ensemble of exponentially many subnetworks sharing weights, and injects noise that regularizes activations. Test time: dropout off. Placement: dense layers and transformer FFN blocks; NOT usually inside recurrent memory paths (hurts the cell state).",
              "L2 regularization (weight decay): add lambda * sum w^2 to the loss, so gradients pull weights toward zero: w := w(1 - eta*lambda) - eta*grad. Effect: smaller weights mean the function is smoother — small perturbations of inputs cause smaller output changes — and no single weight can dominate. AdamW (Loshchilov and Hutter, 2019) is the modern correction: decoupling weight decay from Adam's adaptive gradient scaling, since plain L2-in-Adam under-penalizes weights with large adaptive moments. Data augmentation is the strongest and cheapest: label-preserving transforms (flips, crops, rotations, colour jitter; MixUp/CutMix for stronger mixing) multiply effective dataset size and encode invariances directly into the training distribution.",
              "Early stopping needs no formula: monitor validation loss, keep the best weights, stop after a patience window — it caps the model exactly at the point where memorization begins (a regularizer on TRAINING TIME, conceptually the bias-variance dial). Batch normalization contributes regularization as a side effect: batch-statistics noise during training acts like a mild shaker, and (with high momentum) it also smooths the optimization landscape. Label smoothing (0.9 instead of 1.0 targets) stops the network from pushing logits toward infinity on confident predictions — better calibration, mild robustness to label noise.",
              "Choosing among them, the practical recipe: augmentation first (free capacity, no hyperparameter risk); weight decay 1e-4 by default (AdamW in transformers); dropout 0.1-0.3 in conv/transformer blocks, 0.5 in dense heads; early stopping always on; batch norm for depth (its regularization is a bonus, its optimization benefit is the point). Over-regularizing shows the underfitting signature of Section 1.8 (both curves high) — reduce one knob at a time. The one-sentence summary for exams: 'regularization trades training fit for generalization, and the toolkit implements that trade through data, weights, units or time.'",
            ],
            bullets: [
              "Dropout: zero units with prob p, scale by 1/(1-p) at train time; test time unscaled; prevents co-adaptation.",
              "Implicit ensemble view: each training step trains a different random subnetwork; test averages them.",
              "L2/weight decay: w := w(1 - eta*lambda) - eta*grad; smoother functions, bounded weight magnitudes.",
              "AdamW decouples weight decay from Adam's adaptive scaling - the transformer-era default.",
              "Augmentation: flips/crops/colour jitter (vision), MixUp/CutMix; encodes invariance directly.",
              "Early stopping: stop on validation loss plateau; regularization via training duration.",
              "Batch norm and label smoothing contribute regularization as side effects of stability.",
            ],
            keyTerms: [
              { term: "Dropout", definition: "Randomly zeroing units during training with probability p; an implicit weight-sharing ensemble." },
              { term: "Inverted dropout", definition: "Scaling surviving activations by 1/(1-p) during training so inference needs no change." },
              { term: "AdamW", definition: "Adam with decoupled weight decay; fixes L2's interaction with adaptive moment scaling." },
              { term: "Label smoothing", definition: "Soft targets (e.g. 0.9 instead of 1.0) that prevent overconfident logits and improve calibration." },
            ],
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "For 'explain dropout', the two-part answer that scores: mechanism (random zeroing + inverted scaling, off at test) and rationale (prevents co-adaptation, implicit ensemble). Adding the 1/(1-p) scaling detail is what separates a 7-mark from a 5-mark response.",
            },
            diagram: {
              kind: "pipeline",
              title: "The regularization stack in training order",
              caption:
                "Every stage bleeds a little variance out of the final model - applied together, they compound.",
              stages: [
                { label: "Data augmentation", note: "label-preserving transforms; multiplies data" },
                { label: "Weight decay (AdamW)", note: "pulls weights toward zero; smooths the function" },
                { label: "Dropout in blocks", note: "breaks co-adaptation; implicit ensemble" },
                { label: "Early stopping", note: "halt at the validation-loss minimum" },
                { label: "Evaluate once on test", note: "the only number that matters" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "Dropout + weight decay + early stopping together in Keras.",
              code: `from tensorflow.keras import layers, models, regularizers

model = models.Sequential([
    layers.Dense(256, activation="relu",
                 kernel_regularizer=regularizers.l2(1e-4),
                 input_shape=(100,)),
    layers.Dropout(0.5),                    # train-time only
    layers.Dense(10, activation="softmax"),
])
# callbacks: EarlyStopping(monitor='val_loss', patience=3)
# plus augmentation before the DataLoader, e.g. random flips/crops`,
            },
            examQuestions: [
              {
                q: "Explain dropout and L2 weight decay as regularization methods. Give the mechanisms, the scaling rule at test time, and why AdamW corrects plain L2 in Adam. Mention augmentation and early stopping briefly.",
                marks: 7,
                outline: [
                  "Dropout: zero each unit with prob p during training; inverted scaling 1/(1-p).",
                  "Test time: dropout off, no scaling needed (inverted form).",
                  "Rationale: prevents co-adaptation; implicit ensemble of subnetworks.",
                  "L2: loss += lambda sum w^2; update includes w(1 - eta*lambda) shrinkage.",
                  "Effect: smoother functions, no single dominant weight.",
                  "AdamW: decouples decay from Adam's adaptive moments; transformer default.",
                  "Augmentation (data-side) and early stopping (time-side) complete the toolkit.",
                ],
              },
              {
                q: "Why is dropout disabled at inference?",
                marks: 2,
                outline: [
                  "Training noise was a regularizer; inference wants the deterministic full network.",
                  "Inverted dropout already compensated the activations during training.",
                ],
              },
              {
                q: "Give two augmentation strategies for CIFAR-10 images and explain why they help.",
                marks: 3,
                outline: [
                  "Random horizontal flips and random crops with padding (also colour jitter).",
                  "They multiply effective dataset size and teach label-preserving invariances.",
                  "The model sees each object under new conditions every epoch.",
                ],
              },
            ],
          },
          {
            number: "5.8",
            title: "Applications, deployment and model lifecycle",
            body: [
              "Where does deep learning actually run? The application map by modality: vision (classification, detection, segmentation; face recognition; medical imaging — diabetic retinopathy grading now matches ophthalmologists on benchmarks); language (translation, summarization, chat assistants, code generation — all transformer-based post-2018); speech (automatic speech recognition end-to-end, text-to-speech synthesis, speaker verification); recommendation and ads (embedding-based retrieval, two-tower models); and science (AlphaFold's protein structures, weather models). Every item is one sentence of context plus the underlying Unit — the skeleton of a 'applications of deep learning' short note.",
              "Deployment is a different discipline from training, with different constraints: latency budgets (milliseconds for real-time inference), memory footprints (a 100M-parameter FP32 model is 400MB — too big for a phone), energy, and no training infrastructure on the client. The optimization ladder: quantization (FP32 -> INT8, 4x smaller and faster with ~negligible accuracy loss via calibration; post-training quantization needs no retraining, quantization-aware training recovers more), pruning (remove near-zero weights, then fine-tune; structured pruning removes whole channels for real hardware speedups), knowledge distillation (train a small student to mimic a large teacher's soft outputs — DistilBERT keeps 97% of BERT's quality at 60% size and 2x speed), and export formats (ONNX for cross-runtime, TFLite/Core ML for mobile, TensorRT for GPU serving).",
              "The deployment loop's overlooked half is monitoring and drift. Models degrade in production not because weights change but because the WORLD does: data drift (input distribution shifts — new dialects, new camera sensors), concept drift (the input-output relation itself moves — fraud patterns evolve), and pipeline bugs (preprocessing mismatch between training and serving, the most common silent killer). Monitoring tracks input distributions, prediction confidence histograms, and downstream business metrics; scheduled retraining on fresh data closes the loop. The MLOps framing: training is a few percent of a model's lifetime; the other 95% is serving, monitoring and retraining.",
              "Ethics and robustness close the unit, one sentence each in an exam: adversarial examples (imperceptible perturbations flip predictions — security implications for vision systems), bias (models inherit dataset skews — facial recognition accuracy gaps across demographics), privacy (training data leakage through memorization; membership-inference attacks; differential privacy as mitigation), and interpretability (attention maps and saliency are suggestive, not explanatory). Assessment: the lifecycle answer — data -> train -> validate -> deploy -> monitor -> retrain — with quantization/distillation named as the deployment levers and drift named as the reason deployment is never 'done'.",
            ],
            bullets: [
              "Application map: vision, language, speech, recommendation, science - each maps to a prior unit's model.",
              "Deployment constraints: latency, memory, energy; FP32 weights are ~4 bytes each (100M params = 400MB).",
              "Quantization: FP32 -> INT8, 4x smaller/faster; post-training (calibration) or quantization-aware training.",
              "Knowledge distillation: small student mimics teacher soft outputs; DistilBERT = 97% quality, 60% size.",
              "Pruning removes low-magnitude weights; structured pruning yields real hardware speedups.",
              "Monitoring: data drift, concept drift, preprocessing mismatch; retraining closes the loop.",
              "Ethics: adversarial fragility, dataset bias, privacy/memorization, interpretability limits.",
            ],
            keyTerms: [
              { term: "Quantization", definition: "Representing weights/activations in INT8 (or lower) instead of FP32 for size and speed." },
              { term: "Knowledge distillation", definition: "Training a compact student model to mimic a larger teacher's soft output distribution." },
              { term: "Data drift", definition: "Production input distribution shifting away from training data, silently degrading the model." },
              { term: "ONNX", definition: "Open Neural Network Exchange: a cross-framework export format for portable inference." },
            ],
            callout: {
              type: "warning",
              title: "Common mistake",
              body: "Deployment questions fail when students only name 'quantization'. Give the constraint it solves (INT8 = 4x smaller/faster for edge memory budgets) and one companion technique (distillation or pruning) - constraint plus solution is the marking pattern.",
            },
            diagram: {
              kind: "flow",
              title: "The model lifecycle in production",
              caption:
                "Deployment is not the finish line - monitoring feeds the next training run.",
              steps: [
                { label: "Collect + label data", note: "the ongoing cost centre" },
                { label: "Train + validate", note: "units I-IV's mathematics" },
                { label: "Compress + export", note: "quantize, distil, ONNX/TFLite" },
                { label: "Serve", note: "latency/memory/energy budgets" },
                { label: "Monitor", note: "drift, confidence, business metrics" },
                { label: "Retrain on fresh data", note: "loop back to step 1" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "Post-training INT8 quantization with TFLite.",
              code: `import tensorflow as tf

model = tf.keras.models.load_model("model.keras")
converter = tf.lite.TFLiteConverter.from_keras_model(model)
converter.optimizations = [tf.lite.Optimize.DEFAULT]   # INT8 quantization
tflite_model = converter.convert()

open("model.tflite", "wb").write(tflite_model)
# ~4x smaller and faster on mobile CPUs, minimal accuracy loss`,
            },
            examQuestions: [
              {
                q: "Discuss the deployment of deep models: the constraints of production inference, quantization and knowledge distillation, and why monitoring/retraining is required after deployment.",
                marks: 7,
                outline: [
                  "Constraints: latency, memory (400MB per 100M FP32 params), energy.",
                  "Quantization: FP32 -> INT8, 4x compression; post-training vs quantization-aware.",
                  "Distillation: student mimics teacher soft outputs; DistilBERT example.",
                  "Pruning as the third lever; export formats ONNX/TFLite/TensorRT.",
                  "Deployment drift: data drift, concept drift, preprocessing mismatch.",
                  "Monitor inputs, confidences, business metrics; schedule retraining.",
                  "Lifecycle loop: data -> train -> deploy -> monitor -> retrain.",
                ],
              },
              {
                q: "What is knowledge distillation and what does the student learn from?",
                marks: 2,
                outline: [
                  "A small model trained to mimic a large teacher's outputs.",
                  "From the teacher's soft probability distribution (dark knowledge), not just hard labels.",
                ],
              },
              {
                q: "Distinguish data drift from concept drift with one example each.",
                marks: 3,
                outline: [
                  "Data drift: input distribution shifts (new camera sensor changes image statistics).",
                  "Concept drift: the input-output relation moves (fraud tactics evolve).",
                  "Both require monitoring and retraining; neither changes the code.",
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
      body: [
        "RGPV papers spread questions across all five units, but the money topics are predictable: backpropagation and its cousins in Unit I, the CNN architecture lineage in Unit II, LSTM/GRU and attention in Unit III, GANs and autoencoders in Unit IV, and the frameworks plus transformers in Unit V. Allocate revision time roughly in that order, keeping one worked example per topic ready to reproduce.",
      ],
      weightedTopics: [
        { topic: "Backpropagation derivation + numeric trace", weight: "≈ 10-12 marks", note: "Almost guaranteed; practise one full 2-2-1 trace by hand." },
        { topic: "CNN architecture lineage (LeNet -> ResNet)", weight: "≈ 10-12 marks", note: "Know layer stacks, param counts, and what problem each fixed." },
        { topic: "LSTM / GRU gates and vanishing gradients", weight: "≈ 8-10 marks", note: "Draw the cell, name the gates, give the cell-state update." },
        { topic: "GANs: adversarial loss and training loop", weight: "≈ 8-10 marks", note: "Minimax formula + why it is a two-player game." },
        { topic: "Autoencoders and VAE (reparameterization)", weight: "≈ 6-8 marks", note: "Undercomplete AE vs VAE is a classic compare question." },
        { topic: "Convolution, pooling and output-size arithmetic", weight: "≈ 6-8 marks", note: "out = (N + 2P - K)/S + 1 — one numeric question always." },
        { topic: "Transformers, self-attention, BERT basics", weight: "≈ 6-8 marks", note: "Scaled dot-product formula; why attention beat recurrence." },
        { topic: "TensorFlow / PyTorch workflow + regularization", weight: "≈ 6-8 marks", note: "Know compile/fit and the loss.backward/step loop cold." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Assuming a five-day week with two hours a day, this schedule covers every section twice — once for understanding, once for revision — and reserves the final week for full papers and hand-traced algorithms.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I — foundations", tasks: ["Perceptron, XOR argument, MLP parameter counting", "Activation functions + gradient descent traces", "Backpropagation: derive equations, run one numeric iteration"] },
        { week: "Week 2", focus: "Unit I craft + Unit II start", tasks: ["Hyperparameters, initialization, learning curves", "Convolution + pooling with output-size arithmetic (3 examples)", "LeNet-5 and AlexNet layer stacks"] },
        { week: "Week 3", focus: "Unit II — vision", tasks: ["VGG/ResNet: 3x3 stacks, receptive fields, skip connections", "Transfer learning workflow (freeze, head, fine-tune)", "Redraw all four architecture diagrams from memory"] },
        { week: "Week 4", focus: "Unit III — sequences", tasks: ["RNN forward pass + BPTT on a scalar example", "LSTM/GRU gate equations + why they fix vanishing gradients", "Seq2seq bottleneck argument and attention scoring"] },
        { week: "Week 5", focus: "Unit IV + V — generative and applied", tasks: ["Autoencoders (plain, sparse, denoising) and VAE loss", "GAN minimax loss, training loop, mode collapse", "Object detection vs segmentation; transformer attention; TF/PyTorch loops"] },
        { week: "Week 6", focus: "Revision + papers", tasks: ["Redraw every diagram kind once (flow, cell, architecture)", "Two full past-style papers under time", "Re-derive backprop and the conv output-size formula cold"] },
      ],
    },
    {
      id: "exam-tips",
      heading: "Exam-hall strategy",
      examTips: [
        "Open every 7-mark answer with a one-line definition and a small labelled diagram — the definition plus figure usually secures the first 2-3 marks.",
        "For backprop, write the general layer equations first, THEN insert numbers; examiners award the setup marks even if arithmetic slips.",
        "For conv layers, always show the size formula out = (N + 2P - K)/S + 1 with values substituted — never just the final dimension.",
        "For LSTM/GRU, name every gate, give its equation, and state what would happen without it (that contrast is the examiner's rubric).",
        "For GANs, write the minimax objective and say explicitly who minimizes and who maximizes which term.",
        "For framework questions, show the five calls that matter (data, model, loss/compile, training loop, eval/save) — syntax detail matters less than the loop structure.",
        "Keep units consistent: state shapes like (batch, 28, 28, 1) when tracing dimensions through a CNN.",
        "Time-box: 2-3 mark questions under 5 minutes, 7-mark questions under 15, and never leave the diagram out to save time.",
      ],
    },
    {
      id: "slips",
      heading: "Common slips that cost easy marks",
      bullets: [
        "Saying backpropagation IS gradient descent — backprop computes gradients, descent applies them.",
        "Forgetting the bias term in parameter counts: params = in*out + out per dense layer.",
        "Using the wrong pooling direction: pooling SHRINKS maps (2x2 pool halves each side); it never adds parameters.",
        "Writing the conv output size without padding/stride: it is (N + 2P - K)/S + 1, not N - K.",
        "Claiming ReLU can saturate — it saturates only on the negative side (dead units); sigmoid saturates on both sides.",
        "Mixing up LSTM gates: forget gates the OLD cell state, input scales the NEW candidate, output gates what leaves the cell.",
        "Saying the generator minimizes log(1 - D(G(z))) is the loss used in modern practice — the non-saturating form maximizes log D(G(z)).",
        "Treating dropout as active at test time — dropout must be disabled (scaled) at inference; batch norm uses running statistics.",
      ],
    },
  ],
};
