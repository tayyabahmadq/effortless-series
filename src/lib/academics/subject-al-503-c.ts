/**
 * Academics - RGPV 5th-semester subject: AL-503(C) Optimization Techniques
 * in Machine Learning.
 *
 * Structure mirrors subject-cs-302.ts: units -> one chapter per unit ->
 * numbered sections.  Each section carries body paragraphs, bullets, a
 * diagram, key terms, a callout, a table or code sample, and three
 * exam-style questions (one 7-mark with outline + two shorts).
 */

import type { AcademicSubject } from "./types";

export const al503c: AcademicSubject = {
  id: "al-503-c",
  code: "AL-503(C)",
  title: "Optimization Techniques in Machine Learning",
  semester: "V Semester",
  program: "RGPV · Artificial Intelligence & Machine Learning",
  tagline:
    "The complete visual guide to AL-503(C): optimization foundations, first-order methods, second-order methods, constrained optimization, and hyperparameter & modern optimization - every syllabus point paired with a worked example you can redraw in the exam hall.",
  description:
    "Five units walk from the language of all of ML training - empirical risk minimization, loss functions and convexity - through the first-order toolbox of gradient descent, momentum and Adam, into second-order machinery from Newton to L-BFGS with line searches and proximal methods, then across constrained optimization from Lagrange multipliers and KKT to duality, linear programming and the SVM, and finally into the modern practice of hyperparameter search, Bayesian optimization, metaheuristics and batch normalization. Every section pairs the method with a numeric worked example, a redrawable diagram, runnable numpy code, and the exam questions RGPV actually asks.",
  accentColor: "#f59e0b",
  emoji: "OPT",
  unitCount: 5,
  totalSections: 30,
  units: [
    // ------------------------------------------------------------------ I
    {
      number: 1,
      roman: "I",
      title: "Optimization Foundations in ML",
      summary:
        "The substrate of the whole subject: training a model is minimizing a loss, empirical risk minimization turns data into an objective, and the shape of that objective - convex or not, smooth or not, ill-conditioned or not - decides which algorithm will work. This unit builds every definition Units II-V borrow.",
      chapter: {
        number: "01",
        title: "From Data to Objective Functions",
        intro:
          "Unit I builds the vocabulary every later unit borrows: training as empirical risk minimization, the two workhorse losses (MSE and cross-entropy), convex sets and convex functions, the gradient and Hessian as geometric instruments, smoothness and strong convexity as the two constants that control convergence, the condition number as a curvature report card, and the gallery of landscapes - bowls, ravines, plateaus and saddle points - that real models live in.",
        inOneBreath:
          "Training a model means solving theta* = argmin of the average loss over the training set - empirical risk minimization; MSE suits regression with Gaussian noise and cross-entropy suits classification with softmax or sigmoid outputs; a set is convex if every segment between two of its points stays inside, and a function is convex if it lies below its chords, equivalently f(y) >= f(x) + grad f(x)^T (y-x); smoothness bounds how fast the gradient changes (constant L) and strong convexity bounds how fast the function curves up (constant mu); the condition number kappa = L/mu = lambda_max/lambda_min measures how elongated the bowl is and caps the safe learning rate at 2/L; in non-convex landscapes the Hessian eigenvalue pattern classifies critical points - all positive means local minimum, mixed signs means saddle point, and in high dimensions saddles and plateaus dominate while bad local minima are rare in overparameterized networks.",
        sections: [
          {
            number: "1.1",
            title: "ML training as optimization: empirical risk minimization",
            body: [
              "Every supervised learning problem is secretly an optimization problem. A model is a function f(x; theta) that maps an input x to a prediction, where theta is the vector of trainable parameters - the weights w and bias b of a linear model, or the millions of weights of a deep network. Training means choosing theta so the predictions match the labels. We measure mismatch with a loss function L(y_hat, y), a number that is large when predictions are wrong and small when they are right. The training objective is the average loss over the n training examples: J(theta) = (1/n) * sum over i of L(f(x_i; theta), y_i). Finding the theta that makes J smallest is called empirical risk minimization (ERM), and every algorithm in Units II-V is a way of solving it.",
              "ERM has exactly three ingredients, and exams love asking you to name them. First, the model class: the family of functions theta can reach, such as linear functions y = w^T x + b or neural networks. Second, the loss: squared error for regression, cross-entropy for classification, hinge loss for SVMs. Third, the dataset: n labelled pairs. Consider house-price prediction with two parameters theta = (w, b) and three data points; the objective J(w, b) = (1/3) * [ (w*80 + b - 120)^2 + (w*100 + b - 150)^2 + (w*120 + b - 170)^2 ] is a concrete scalar function of two variables, and nothing more mysterious than minimizing it.",
              "A subtlety worth full marks: we minimize empirical risk, not true risk. True risk is the expected loss over the whole data distribution, but the distribution is unknown - we only hold a finite sample. Minimizing the average loss on the training set is a proxy, and the gap between the two is the generalization gap. Push the training loss to zero and the gap usually grows: the model memorizes noise, which is overfitting. This is why the ERM objective is often modified to J(theta) + lambda * R(theta), where R is a regularizer such as the L2 norm of theta; Unit IV shows that ridge and lasso are exactly constrained versions of this modified objective.",
              "The optimization loop that consumes this objective repeats four moves: forward pass (compute predictions and loss on a batch), backward pass (compute the gradient of the loss with respect to theta), parameter update (theta := theta - lr * gradient), and repeat. For a dataset of n = 1000 examples with batch size B = 32, one epoch is ceil(1000/32) = 32 updates, and a 20-epoch run performs 640 updates. Units II and III differ only in how the update direction is computed; Unit IV adds constraints; Unit V tunes the choices around the loop. Keep this four-move loop in mind and the whole subject stays one story.",
            ],
            bullets: [
              "Training objective: J(theta) = (1/n) * sum L(f(x_i; theta), y_i) - the average loss over training data.",
              "Three ERM ingredients: model class, loss function, dataset; change any one and you change the problem.",
              "Empirical risk is a proxy for true risk; the difference is the generalization gap.",
              "Overfitting = training loss low, true risk high; regularization J + lambda*R is the standard repair.",
              "The update loop: forward pass -> loss -> gradient -> theta := theta - lr * gradient.",
              "Batch accounting: n = 1000, batch 32 gives 32 updates per epoch; 20 epochs = 640 updates.",
              "Everything later is a variation: better directions (Units II-III), constraints (Unit IV), tuned choices (Unit V).",
            ],
            table: {
              caption: "The three ERM ingredients across familiar ML problems.",
              headers: ["Problem", "Model class", "Loss", "Optimizer used"],
              rows: [
                ["Linear regression", "y = w^T x + b", "MSE", "GD / closed form"],
                ["Logistic regression", "sigmoid(w^T x)", "Binary cross-entropy", "L-BFGS / GD"],
                ["Softmax classification", "softmax(W x)", "Categorical cross-entropy", "SGD + momentum"],
                ["SVM", "sign(w^T x + b)", "Hinge (via constraints)", "QP solvers"],
                ["Deep network", "layer stack", "Cross-entropy", "Adam"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "The empirical risk minimization pipeline",
              caption:
                "Each training step runs this pipeline once; the loop back happens in the optimizer stage.",
              stages: [
                { label: "Dataset (x_i, y_i)", note: "n labelled pairs" },
                { label: "Model f(x; theta)", note: "predictions y_hat" },
                { label: "Average loss J(theta)", note: "one scalar number" },
                { label: "Gradient of J", note: "direction of steepest ascent" },
                { label: "Update theta", note: "small step downhill, repeat" },
              ],
            },
            callout: {
              type: "tip",
              title: "Write the objective first",
              body: "In any 'explain how ML training works' answer, open with the boxed formula J(theta) = (1/n) sum L(f(x_i; theta), y_i) and name it empirical risk minimization. Examiners award the definition mark immediately, and every later sentence can refer back to a symbol instead of vague prose.",
            },
            keyTerms: [
              { term: "Parameters theta", definition: "The trainable numbers of a model (weights and biases) that the optimizer adjusts." },
              { term: "Loss function L", definition: "A non-negative scalar measuring the mismatch between one prediction and its true label." },
              { term: "Empirical risk J(theta)", definition: "The average loss over the training set; the quantity minimization algorithms actually minimize." },
              { term: "Generalization gap", definition: "True risk minus empirical risk; grows when a model memorizes training noise." },
              { term: "Epoch", definition: "One full pass over all n training examples; n/B parameter updates when batch size is B." },
            ],
            examQuestions: [
              {
                q: "Formulate supervised learning as an optimization problem. Define empirical risk minimization, explain the three ingredients of the objective, and distinguish empirical risk from true risk with the help of the generalization gap.",
                marks: 7,
                outline: [
                  "Define model f(x; theta), loss L(y_hat, y), and dataset of n pairs.",
                  "Write the ERM objective theta* = argmin (1/n) sum L(f(x_i; theta), y_i).",
                  "Name the three ingredients: model class, loss function, dataset, with one example each (linear + MSE, softmax + cross-entropy).",
                  "Define true risk as expected loss over the data distribution and empirical risk as the sample average.",
                  "Explain the generalization gap and why minimizing training loss to zero can hurt test accuracy (overfitting).",
                  "Introduce the regularized objective J(theta) + lambda R(theta) as the standard fix.",
                  "Close with the four-move training loop: forward, gradient, update, repeat, with the batch/epoch arithmetic.",
                ],
              },
              {
                q: "A dataset has 2000 samples and batch size 50. How many parameter updates are made in 10 epochs?",
                marks: 2,
              },
              {
                q: "What is the difference between a loss function and a cost (objective) function?",
                marks: 3,
              },
            ],
          },
          {
            number: "1.2",
            title: "Loss functions: MSE and cross-entropy",
            body: [
              "Mean squared error is the default regression loss: MSE = (1/n) * sum (y_i - y_hat_i)^2. It is smooth, convex in the model output, and punishes large errors quadratically. A quick computation shows the shape: if the true value is 2.0 and predictions are 3.5 and 0.5, the errors are +1.5 and -1.5, and both give squared error 2.25 - MSE is symmetric and never cancels opposite-signed mistakes. Its per-example gradient with respect to the prediction is -2(y - y_hat), so a large error produces a large correction signal; an error of 3 pulls twice as hard as an error of 1.5. MSE corresponds to maximum likelihood estimation under the assumption of Gaussian noise on the targets, which is the theory behind the pairing.",
              "Cross-entropy is the default classification loss. For binary labels with predicted probability p, the loss on one example is CE = -(y log p + (1 - y) log(1 - p)). Numbers make it vivid: if the true label is y = 1 and the model outputs p = 0.9, CE = -log(0.9) = 0.105; if the model outputs p = 0.1, CE = -log(0.1) = 2.303. Confidence in the wrong direction is punished exponentially. For k classes with softmax outputs, the loss is CE = -sum over classes c of y_c log(p_c), which simplifies to -log(p of the true class) for one-hot labels. Cross-entropy is the negative log-likelihood of a Bernoulli or categorical model, so minimizing it is maximum likelihood estimation again.",
              "The gradient is where the two losses genuinely differ and where exam questions hide. Combine cross-entropy with a sigmoid output z = w^T x and the derivative of the loss with respect to z collapses to the beautifully simple (p - y): a confident correct prediction gives gradient near 0, a confident wrong prediction gives gradient near plus or minus 1. If you instead put MSE on top of a sigmoid, the derivative carries the factor p(1 - p), which is at most 0.25 and nearly 0 when the model is confidently wrong - the classic 'saturated gradient' that makes learning crawl. This is the standard 3-mark answer: MSE + sigmoid saturates, cross-entropy does not.",
              "Choosing a loss is choosing a probabilistic story. Gaussian noise on continuous targets leads to MSE; Bernoulli labels lead to binary cross-entropy; categorical labels lead to softmax cross-entropy; margin-based tolerance to misclassification leads to hinge loss max(0, 1 - t*y) used by SVMs. Other practical losses you should be able to name: mean absolute error L1 = |y - y_hat|, which is less sensitive to outliers but not differentiable at 0, and Huber loss, which is quadratic for small errors and linear for large ones, blending the two behaviours. In every case the loss defines the objective, and the objective defines the entire optimization problem downstream.",
            ],
            bullets: [
              "MSE = (1/n) sum (y - y_hat)^2; symmetric, smooth, quadratic punishment of large errors.",
              "MSE gradient w.r.t. prediction is -2(y - y_hat); large errors give proportionally large corrections.",
              "Binary cross-entropy: -(y log p + (1-y) log(1-p)); y = 1, p = 0.9 gives 0.105, p = 0.1 gives 2.303.",
              "Categorical cross-entropy with one-hot labels reduces to -log(p of true class).",
              "Sigmoid + cross-entropy gradient is (p - y); sigmoid + MSE carries p(1 - p) <= 0.25 and saturates.",
              "MLE view: MSE = Gaussian likelihood, cross-entropy = Bernoulli/categorical likelihood.",
              "Hinge loss max(0, 1 - t*y) drives SVMs; MAE is outlier-robust but non-differentiable at 0; Huber blends both.",
            ],
            table: {
              caption: "Loss behaviour when the true label is y = 1 (binary case).",
              headers: ["Predicted p", "Cross-entropy", "MSE on p", "Signal (p - y)"],
              rows: [
                ["0.99", "0.010", "0.980", "-0.01"],
                ["0.90", "0.105", "0.810", "-0.10"],
                ["0.50", "0.693", "0.250", "-0.50"],
                ["0.10", "2.303", "0.810", "+0.90"],
                ["0.01", "4.605", "0.980", "+0.99"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Choosing a loss from the noise model",
              caption:
                "Start from the statistical story of the data; the loss falls out of maximum likelihood.",
              steps: [
                { label: "What do the targets look like?" },
                { label: "Continuous + Gaussian noise", note: "negative log-likelihood" },
                { label: "MSE", note: "-2(y - y_hat) gradient" },
                { label: "Binary / categorical labels", note: "Bernoulli or categorical" },
                { label: "Cross-entropy", note: "(p - y) gradient, no saturation" },
              ],
            },
            callout: {
              type: "exam",
              title: "The saturation derivation is a guaranteed mark",
              body: "Be ready to differentiate d/dz of -(y log sigmoid(z) + (1-y) log(1 - sigmoid(z))) down to (sigmoid(z) - y) in three lines, and to point out that sigmoid'(z) = p(1-p) <= 0.25 is the saturation factor that appears when MSE sits on a sigmoid. This single derivation appears in some form in almost every optimization paper.",
            },
            keyTerms: [
              { term: "MSE", definition: "Mean squared error, the average of squared prediction errors; the Gaussian-noise loss for regression." },
              { term: "Cross-entropy", definition: "Negative log-likelihood of the predicted class probabilities; the standard classification loss." },
              { term: "Softmax", definition: "Function turning a vector of scores into a probability distribution; exponentials normalized to sum to 1." },
              { term: "Saturation", definition: "The near-zero gradient p(1-p) of a confident sigmoid, which stalls MSE-based training." },
              { term: "Hinge loss", definition: "max(0, 1 - t*y); zero for correctly classified points beyond the margin, linear penalty otherwise." },
            ],
            examQuestions: [
              {
                q: "Derive the gradient of binary cross-entropy with respect to the pre-activation z when the output is sigmoid(z), and explain why cross-entropy is preferred over MSE for training sigmoid classifiers. Support with numerical examples.",
                marks: 7,
                outline: [
                  "State binary cross-entropy CE = -(y log p + (1-y) log(1-p)) with p = sigmoid(z).",
                  "Differentiate sigmoid: p' = p(1 - p).",
                  "Carry the derivative through the log terms and cancel to get dCE/dz = p - y.",
                  "Contrast with MSE on sigmoid: dMSE/dz = 2(p - y) p(1 - p), capped at 0.25 in magnitude times the error.",
                  "Explain saturation: a confidently wrong sigmoid (p near 0 or 1) gives a near-zero MSE gradient but a near-unit cross-entropy gradient.",
                  "Give numbers: y = 1, p = 0.1 gives CE = 2.303 and gradient 0.9; MSE gradient factor p(1-p) = 0.09.",
                  "Conclude: cross-entropy = MLE under Bernoulli likelihood and avoids the vanishing signal.",
                ],
              },
              {
                q: "For y = 1, compute the binary cross-entropy at p = 0.25 and p = 0.75.",
                marks: 2,
              },
              {
                q: "Why is mean absolute error more robust to outliers than MSE, and what is its drawback?",
                marks: 3,
              },
            ],
          },
          {
            number: "1.3",
            title: "Convex sets and convex functions",
            body: [
              "A set C is convex if for any two points x and y in C, the entire straight segment between them stays in C: for every lambda in [0, 1], the point lambda*x + (1-lambda)*y is also in C. Balls, hyperplanes, half-spaces and rectangles are convex; a ring or a crescent is not, because a chord between two points on the ring crosses the hole. The segment test is the exam definition: draw two points, draw the chord, ask whether any part leaves the set. Convex sets matter because optimization over them cannot fragment: local descent cannot get trapped in disconnected regions.",
              "A function f is convex if its domain is a convex set and it lies below every chord: f(lambda*x + (1-lambda)*y) <= lambda*f(x) + (1-lambda)*f(y) for all lambda in [0, 1]. Geometrically, the graph bows upward like a bowl. Two equivalent tests carry the marks in theory papers. First-order condition: f is convex iff f(y) >= f(x) + grad f(x)^T (y - x) for all x, y - every tangent line lies below the graph. Second-order condition: for twice-differentiable f, convexity on a domain is equivalent to the Hessian being positive semidefinite everywhere; strict convexity upgrades the inequality and guarantees a unique minimizer.",
              "A toolbox of examples makes the definition concrete. f(x) = x^2 is convex with f'' = 2 > 0; f(x) = |x| is convex but not differentiable at 0, showing convexity does not require smoothness; e^x and -log(x) are convex on their domains; every affine function a*x + b is simultaneously convex and concave because its Hessian is zero. Building rules multiply the toolbox: a non-negative weighted sum of convex functions is convex, the pointwise maximum of convex functions is convex, and composition rules cover cases like exp(g(x)) with g convex. Loss machinery is built from these: hinge loss max(0, 1 - t*y) is the max of two convex functions, and regularizers like |w|_1 and |w|^2 are convex.",
              "Why does convexity matter so much that an entire unit of theory is built on it? Because on a convex function every local minimum is a global minimum. If x_local satisfies grad f(x_local) = 0, the first-order condition gives f(y) >= f(x_local) + 0 for every y, so no point anywhere is better - one certificate ends the search. Linear regression with MSE, logistic regression with cross-entropy, and SVMs are all convex problems, which is why their training is reliable and their theory is clean. Deep networks are not convex, and Unit 1.6 examines what survives. In the exam, the safe checklist is: state the definition, apply the second-order test via the Hessian, and finish with the local-equals-global corollary.",
            ],
            bullets: [
              "Convex set: chord test - lambda*x + (1-lambda)*y stays in C for all lambda in [0, 1].",
              "Convex function: f(lambda*x + (1-lambda)*y) <= lambda*f(x) + (1-lambda)*f(y); graph bows upward.",
              "First-order condition: f(y) >= f(x) + grad f(x)^T (y - x); every tangent lies below the graph.",
              "Second-order condition: Hessian positive semidefinite everywhere is equivalent to convexity.",
              "Examples: x^2, |x|, e^x, -log(x), hinge max(0, 1 - t*y); affine functions are convex and concave.",
              "Closure rules: non-negative sums of convex functions are convex; pointwise max of convex functions is convex.",
              "Payoff: on a convex function every local minimum is global - one gradient-zero check certifies optimality.",
            ],
            table: {
              caption: "Convexity status of common ML functions on their domains.",
              headers: ["Function", "Convex?", "Hessian / slope test", "Notes"],
              rows: [
                ["x^2", "Yes (strict)", "f'' = 2 > 0", "unique minimizer at 0"],
                ["|x|", "Yes", "subgradient in [-1, 1]", "not differentiable at 0"],
                ["a*x + b", "Yes (not strict)", "Hessian = 0", "both convex and concave"],
                ["-x^2", "No", "f'' = -2 < 0", "concave, maximization friendly"],
                ["x^4 - 3x^2", "No", "f'' = 12x^2 - 6 changes sign", "two valleys, saddle at 0"],
                ["max(0, 1 - t*y) hinge", "Yes", "max of two affine functions", "SVM loss"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Convex vs non-convex in one picture",
              caption:
                "The chord never leaves a convex graph; on a non-convex graph it cuts through the curve.",
              left: {
                heading: "Convex (bowl)",
                items: [
                  "f(lambda x + (1-lambda) y) <= chord value",
                  "Hessian PSD everywhere",
                  "all local minima are global",
                  "descent from anywhere works",
                  "examples: MSE, logistic loss, hinge",
                ],
              },
              right: {
                heading: "Non-convex (wiggly)",
                items: [
                  "chord dips below the curve somewhere",
                  "Hessian changes eigenvalue signs",
                  "local minima, saddles, plateaus coexist",
                  "descent outcome depends on start point",
                  "examples: deep nets, x^4 - 3x^2",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "Sum convex does not mean difference convex",
              body: "A frequent trap: f = x^2 and g = x^2 are convex, but f - g = 0 is fine while g - f shifts nothing - real trouble comes with f - h for convex h, which is generally NOT convex. Convexity is preserved by non-negative weighted sums and maxima, never by subtraction or non-convex composition. State the closure rule you are using in the exam.",
            },
            keyTerms: [
              { term: "Convex set", definition: "A set containing the whole segment between any two of its points." },
              { term: "Chord test", definition: "Checking convexity by comparing the function value at a blend of two points with the blend of the values." },
              { term: "Positive semidefinite (PSD)", definition: "A symmetric matrix whose eigenvalues are all >= 0; the second-order signature of convexity." },
              { term: "Strictly convex", definition: "The chord inequality is strict for x != y and lambda in (0,1); guarantees a unique global minimizer." },
              { term: "Pointwise maximum", definition: "f(x) = max(f1(x), f2(x), ...); convex whenever every piece is convex." },
            ],
            examQuestions: [
              {
                q: "Define convex sets and convex functions. Prove that f(x) = x^2 is convex using the second-order condition, show that max(0, 1 - y) is convex, and state why convexity guarantees every local minimum is global.",
                marks: 7,
                outline: [
                  "State the convex set definition with the segment condition for lambda in [0, 1].",
                  "State the chord inequality defining a convex function.",
                  "For f(x) = x^2 compute f''(x) = 2 > 0 and invoke the second-order condition.",
                  "Optionally verify via the chord: (lambda a + (1-lambda) b)^2 <= lambda a^2 + (1-lambda) b^2 by expanding.",
                  "Write hinge as max(0, affine) and argue: the max of convex functions is convex (0 is affine, hence convex).",
                  "Assume a local minimum x0 with grad f(x0) = 0 on a convex f.",
                  "Apply the first-order condition f(y) >= f(x0) + grad f(x0)^T (y - x0) = f(x0) for all y, concluding x0 is global.",
                ],
              },
              {
                q: "Is f(x) = |x| convex? Justify without differentiating.",
                marks: 2,
              },
              {
                q: "Give one example of a convex set and one of a non-convex set, with a one-line reason each.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.4",
            title: "Gradient, Hessian, smoothness and strong convexity",
            body: [
              "The gradient collects all first partial derivatives into one vector, and it answers a geometric question: at the current point, which direction increases f fastest? Move at right angles to the gradient and f is unchanged to first order - that is why contour lines of a function are perpendicular to its gradient. Worked example: f(x, y) = x^2 + 4y^2 has grad f = (2x, 8y); at the point (1, 1) the gradient is (2, 8), so the steepest ascent direction is mostly along y, and the steepest descent direction is (-2, -8). Gradient descent simply walks opposite this arrow. The Hessian assembles the second partials: for the same function H = [[2, 0], [0, 8]], diagonal because the variables do not interact.",
              "The Hessian is the curvature report card. Its eigenvalues tell you how the function bends along each principal direction: all eigenvalues positive means the point sits in a bowl (local minimum), all negative means a dome (local maximum), and mixed signs mean a saddle. For f = x^2 + 4y^2 the eigenvalues 2 and 8 say the bowl is four times steeper along y than along x. When the Hessian is constant, as here, the function is a quadratic form f = (1/2) x^T H x, and essentially every convergence theorem in Units II-III is proved on exactly this model problem because general functions look quadratic close to a minimum.",
              "Smoothness is a bound on how fast the gradient can change. A function is L-smooth when |grad f(x) - grad f(y)| <= L * |x - y| for all x, y; for twice-differentiable functions the smallest valid L is the largest Hessian eigenvalue over the domain. For f(x) = x^2, the gradient doubles the input, so L = 2. Smoothness gives a quadratic upper bound f(y) <= f(x) + grad f(x)^T (y - x) + (L/2)|y - x|^2 - the function lies below a parabola. This single inequality is the engine of every descent proof: it lets you predict the drop of a step before taking it, and it produces the safe learning-rate bound lr <= 1/L (relaxed to 2/L for plain quadratic functions).",
              "Strong convexity is the opposite guarantee: a lower bound on curvature. f is mu-strongly convex when f(y) >= f(x) + grad f(x)^T (y - x) + (mu/2)|y - x|^2, with mu the smallest Hessian eigenvalue for twice-differentiable f; again x^2 has mu = 2. Strong convexity makes the bowl narrow enough that the minimizer is unique and gradient descent converges at a linear (geometric) rate, shrinking the error by a constant factor each step. The two constants together define the condition number kappa = L/mu, which Unit 1.5 shows controls everything. Exam shorthand: L caps the gradient change, mu floors the curvature, and both are read straight off the Hessian's extreme eigenvalues.",
            ],
            bullets: [
              "Gradient = vector of first partials; points along steepest ascent; contours are perpendicular to it.",
              "Example: f = x^2 + 4y^2, grad = (2x, 8y), at (1,1) the descent direction is (-2, -8).",
              "Hessian = matrix of second partials; eigenvalues classify the point (bowl / dome / saddle).",
              "L-smoothness: |grad f(x) - grad f(y)| <= L|x - y|; L = max Hessian eigenvalue; gives the quadratic upper bound.",
              "Safe step: lr <= 1/L for smooth functions (2/L on pure quadratics); larger steps can overshoot and diverge.",
              "mu-strong convexity: f(y) >= tangent + (mu/2)|y - x|^2; mu = min Hessian eigenvalue; unique minimizer.",
              "Strong convexity buys a linear convergence rate - constant factor shrinkage per step.",
            ],
            table: {
              caption: "Reading L, mu and kappa off simple functions.",
              headers: ["Function", "L (max curvature)", "mu (min curvature)", "kappa = L/mu"],
              rows: [
                ["f(x) = x^2", "2", "2", "1 (perfect bowl)"],
                ["f(x) = 3x^2", "6", "6", "1 (scaled bowl)"],
                ["f(x, y) = x^2 + 4y^2", "8", "2", "4"],
                ["f(x, y) = 10x^2 + y^2", "20", "2", "10"],
                ["f(x) = e^x (on R)", "unbounded", "0", "infinite / not strongly convex"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "From derivatives to convergence guarantees",
              caption:
                "Each arrow extracts one number that a convergence theorem in Unit II will consume.",
              steps: [
                { label: "Compute gradient", note: "descent direction" },
                { label: "Compute Hessian", note: "curvature in all directions" },
                { label: "L = largest eigenvalue", note: "smoothness cap" },
                { label: "mu = smallest eigenvalue", note: "strong convexity floor" },
                { label: "kappa = L/mu", note: "safe lr <= 1/L; rate depends on kappa" },
              ],
            },
            callout: {
              type: "tip",
              title: "One example function, four exam answers",
              body: "Memorize f(x, y) = x^2 + 4y^2 inside out: gradient (2x, 8y), Hessian diag(2, 8), L = 8, mu = 2, kappa = 4, safe lr <= 1/8 = 0.125. One worked function answers questions on gradients, Hessians, smoothness, strong convexity and condition numbers - five syllabus points from one memorized table.",
            },
            keyTerms: [
              { term: "Gradient", definition: "Vector of first partial derivatives pointing in the direction of steepest ascent." },
              { term: "Hessian", definition: "Symmetric matrix of second partial derivatives; its eigenvalues measure curvature per direction." },
              { term: "L-smoothness", definition: "A Lipschitz bound |grad f(x) - grad f(y)| <= L|x - y| on how fast the gradient changes." },
              { term: "Strong convexity (mu)", definition: "A quadratic lower bound on curvature guaranteeing a unique minimizer and linear convergence." },
              { term: "Quadratic form", definition: "f(x) = (1/2) x^T H x with constant Hessian H; the model problem behind most convergence proofs." },
            ],
            examQuestions: [
              {
                q: "For f(x, y) = x^2 + 4y^2, compute the gradient and Hessian, determine whether the function is convex, and identify L, mu and the condition number. State the learning-rate range these constants allow for gradient descent.",
                marks: 7,
                outline: [
                  "Compute grad f = (2x, 8y) and evaluate at a sample point such as (1, 1).",
                  "Assemble the Hessian H = [[2, 0], [0, 8]] and note it is constant (quadratic form).",
                  "Eigenvalues 2 and 8 are both positive, so H is PSD and f is (strictly) convex.",
                  "Smoothness constant L = lambda_max = 8 from the Hessian bound.",
                  "Strong convexity constant mu = lambda_min = 2.",
                  "Condition number kappa = L/mu = 4: bowl is 4x steeper along y.",
                  "Safe learning rate lr <= 1/L = 0.125 (up to 2/L on quadratics), with linear convergence governed by (1 - mu/L) per step.",
                ],
              },
              {
                q: "State the definition of L-smoothness and give the safe learning-rate bound it implies.",
                marks: 2,
              },
              {
                q: "The Hessian at a critical point has eigenvalues 3 and -1. Classify the point and justify.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.5",
            title: "Condition number and curvature",
            body: [
              "The condition number of a twice-differentiable function at a point is kappa = L/mu, the ratio of the largest to the smallest Hessian eigenvalue; for a convex quadratic it is constant everywhere. It measures how elongated the bowl is. kappa = 1 is a perfect circular bowl where every direction curves equally; kappa = 10 is a narrow ravine, steep across and shallow along. Example: f(x, y) = (1/2)(10x^2 + y^2) has H = diag(10, 1), so L = 10, mu = 1, kappa = 10 - a hundred-times-larger curvature gap than a plain x^2 + y^2 bowl.",
              "The ravine geometry explains why gradient descent zigzags. The gradient points mostly across the ravine (toward the steep wall), not along it (toward the far-away floor). Descent overshoots the narrow direction, lands on the opposite wall, and repeats: the iterates bounce between walls while creeping along the valley. With the numbers above and lr = 0.05, the update factor along x is |1 - 0.05*10| = 0.5 (quick decay) but along y it is |1 - 0.05*1| = 0.95 (crawling). The component with the small eigenvalue is always the bottleneck, and the error along it shrinks by (1 - lr*mu) per step.",
              "The safe learning rate also comes from kappa. On a quadratic, each coordinate evolves as x_{k+1} = (1 - lr*lambda_i) x_k, so stability needs |1 - lr*lambda_i| < 1 for every eigenvalue, i.e. lr < 2/lambda_max = 2/L. Continuing the example: lr = 0.21 gives factor |1 - 2.1| = 1.1 along x - divergence. lr = 0.25 gives factor 1.5 - explosive divergence. lr = 0.19 keeps every factor below 1 but convergence along y is still governed by 0.81 per step, so the flat direction dictates the pace. This is the precise sense in which kappa, not the absolute scale of f, determines how hard the problem is.",
              "Every practical fix in this subject is an attack on kappa. Feature scaling (Unit 3.6) rescales inputs so eigenvalues are comparable; momentum (Unit 2.4) averages away the cross-valley oscillation; adaptive methods (Unit 2.5) give each coordinate its own effective step; second-order methods (Unit III) divide by the curvature directly, making the transformed problem look like kappa = 1. An exam answer should connect the chain: unscaled features create ill-conditioning, ill-conditioning forces tiny learning rates, tiny learning rates look like 'slow training', and the fixes remove the cause rather than the symptom.",
            ],
            bullets: [
              "Condition number kappa = L/mu = lambda_max/lambda_min of the Hessian; constant for quadratics.",
              "kappa = 1: circular bowl, fastest possible gradient descent; larger kappa: narrower ravine.",
              "Per-coordinate update on a quadratic: factor (1 - lr*lambda_i) each step.",
              "Stability bound: lr < 2/lambda_max = 2/L; violating it diverges along the steepest direction.",
              "Worked numbers: H = diag(10, 1), lr = 0.19 keeps factors 0.9 and 0.81; lr = 0.25 gives factor 1.5 and blows up.",
              "The small-eigenvalue direction converges at (1 - lr*mu) - the flat direction is always the bottleneck.",
              "All major fixes target kappa: scaling, momentum, adaptive per-parameter steps, second-order curvature division.",
            ],
            table: {
              caption: "One-step factors for f = (1/2)(10x^2 + y^2), per learning rate.",
              headers: ["lr", "Factor along x (lambda=10)", "Factor along y (lambda=1)", "Verdict"],
              rows: [
                ["0.05", "0.50", "0.95", "stable, y crawls"],
                ["0.19", "0.90", "0.81", "stable, near the edge"],
                ["0.21", "1.10", "0.79", "diverges along x"],
                ["0.25", "1.50", "0.75", "diverges fast along x"],
                ["0.10", "0.00", "0.90", "x fixed in one step, y still slow"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Choosing the learning rate from the curvature",
              caption:
                "The stability test is arithmetic, not guesswork: compare lr*lambda_max with 2.",
              start: "Given Hessian eigenvalues lambda_max and lambda_min",
              branches: [
                { label: "lr < 2/lambda_max", outcome: "stable: every |1 - lr*lambda_i| < 1, error shrinks geometrically", good: true },
                { label: "lr = 2/lambda_max", outcome: "marginal: steep direction oscillates forever without decay", good: false },
                { label: "lr > 2/lambda_max", outcome: "divergence: factor |1 - lr*lambda_max| > 1 amplifies the steep direction each step", good: false },
              ],
            },
            callout: {
              type: "exam",
              title: "Divergence arithmetic earns the marks",
              body: "When asked 'why does gradient descent diverge for large learning rates', do not just say 'too big'. Write the one-step factor (1 - lr*lambda), plug numbers, and show |factor| > 1. Example: lambda = 10 and lr = 0.25 give factor -1.5, so an error of 0.1 becomes 0.15 and then 0.225 - growth, not decay. Numerical demonstration beats adjectives every time.",
            },
            keyTerms: [
              { term: "Condition number kappa", definition: "Ratio of largest to smallest Hessian eigenvalue; measures how elongated the minimization bowl is." },
              { term: "Ill-conditioning", definition: "Large kappa: steep and flat directions coexist, forcing small learning rates and zigzag paths." },
              { term: "Zigzagging", definition: "Oscillation of iterates across a narrow valley while progress along the valley floor is slow." },
              { term: "Stability bound", definition: "lr < 2/lambda_max, the condition under which every quadratic coordinate's error factor stays below 1." },
              { term: "Preconditioning", definition: "Transforming the problem so curvature is equalized, effectively reducing kappa toward 1." },
            ],
            examQuestions: [
              {
                q: "Define the condition number of a quadratic function. For f(x, y) = (1/2)(10x^2 + y^2) analyse gradient descent with lr = 0.05, 0.19 and 0.25, showing which rates converge, which diverge, and why. Suggest two remedies for ill-conditioning.",
                marks: 7,
                outline: [
                  "Define kappa = L/mu = lambda_max/lambda_min and compute H = diag(10, 1), kappa = 10.",
                  "Write the per-coordinate update x_{k+1} = (1 - lr*10)x_k and y_{k+1} = (1 - lr)y_k.",
                  "lr = 0.05: factors 0.5 and 0.95 - stable, but the y-direction converges slowly (bottleneck).",
                  "lr = 0.19: factors 0.9 and 0.81 - stable but near the divergence edge along x.",
                  "lr = 0.25: factor along x is |1 - 2.5| = 1.5 - amplification, divergence; show the growth over two steps.",
                  "State the general stability bound lr < 2/lambda_max = 0.2 and note lr = 0.25 violates it.",
                  "Remedies: feature standardization to equalize eigenvalues, and momentum or adaptive/second-order methods to damp zigzag.",
                ],
              },
              {
                q: "What condition number does f(x, y) = x^2 + y^2 have, and why is gradient descent fastest on it?",
                marks: 2,
              },
              {
                q: "The largest Hessian eigenvalue is 40. What is the largest safe learning rate for gradient descent?",
                marks: 3,
              },
            ],
          },
          {
            number: "1.6",
            title: "Convex vs non-convex landscapes: local minima, saddle points",
            body: [
              "A convex landscape is a single bowl: one minimum, no other stationary points, and descent from anywhere succeeds. A non-convex landscape is a mountain range: many local minima of varying quality, flat plateaus, narrow ridges, and saddle points - stationary points that curve up in some directions and down in others. Neural networks, matrix factorization and any model with hidden units produce non-convex objectives, so the cosy guarantee of Unit 1.3 is gone. The exam question becomes: classify what you are standing on, and decide whether it is worth leaving.",
              "The Hessian does the classifying. At a critical point where grad f = 0, inspect the eigenvalue signs: all positive means a strict local minimum, all negative means a local maximum, and mixed signs mean a saddle point. Canonical example: f(x, y) = x^2 - y^2 has grad = (2x, -2y), zero at the origin, and H = diag(2, -2) with eigenvalues +2 and -2 - the origin is a saddle: valleys along x, ridges along y, and the surface looks like a horse saddle or a Pringles chip. A zero eigenvalue with nonzero higher-order terms gives a flat region whose fate needs third or fourth derivatives.",
              "High dimensions change the statistics of the search. In d dimensions a random critical point is a saddle unless essentially all eigenvalue signs agree - the probability of a genuine minimum falls roughly as 2^-d for random functions. This is why a 10,000-dimensional network has astronomically many saddles but few bad local minima. Empirically, overparameterized deep networks behave generously: most local minima found by SGD have test accuracy close to the best, plateaus come mostly from saturated units or tiny gradients rather than true minima, and the practical enemy is the plateau, not the trap.",
              "Practical classification closes the unit. If training loss stalls, check the gradient norm: a genuinely small gradient at a plateau suggests saddle or saturation; a large oscillating gradient suggests ill-conditioning (Unit 1.5); slow steady progress suggests a small learning rate. SGD's noise is itself a saddle-escape mechanism - near a saddle the gradient is tiny, but the sampling noise pushes the iterate off the ridge into a descending direction. The exam-safe summary: convexity guarantees global optimality; non-convexity replaces that guarantee with heuristics - Hessian eigenvalue tests, noise injection, restarts, and the empirical observation that in big overparameterized models the landscape is friendlier than its reputation.",
            ],
            bullets: [
              "Convex landscape: one bowl, descent always wins; non-convex: minima, plateaus, ridges and saddles coexist.",
              "Critical point test: grad = 0, then Hessian eigenvalue signs decide (all + min, all - max, mixed saddle).",
              "Canonical saddle: f = x^2 - y^2 at the origin, H = diag(2, -2), eigenvalues +2 and -2.",
              "In high dimensions saddles vastly outnumber minima - roughly a 2^-d chance a random critical point is a minimum.",
              "Plateaus (near-zero gradient over wide regions) stall training more often than bad local minima.",
              "SGD noise helps escape saddles: sampling randomness perturbs iterates off flat ridges.",
              "Overparameterized networks empirically have local minima whose quality is close to global - bad traps are rare.",
            ],
            table: {
              caption: "Classifying a stationary point where grad f = 0.",
              headers: ["Hessian eigenvalues", "Point type", "Shape nearby", "Action"],
              rows: [
                ["all positive", "local (and global only if convex)", "bowl", "stop if convex; note quality if not"],
                ["all negative", "local maximum", "dome", "irrelevant for minimization"],
                ["mixed signs", "saddle point", "valley + ridge", "escape: noise, perturbation, restart"],
                ["some zero", "flat / higher-order case", "plateau or valley floor", "inspect 3rd/4th derivatives or perturb"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Stall diagnosis map for non-convex training",
              caption:
                "Read the gradient behaviour, place it in a quadrant, apply the matching fix.",
              axes: { x: "gradient magnitude ->", y: "loss trend ->" },
              quadrants: [
                { label: "Flat + stalled", note: "plateau or saddle: add noise, restart, check saturation" },
                { label: "Large + stalled", note: "ill-conditioned ravine: scale features, momentum, adapt lr" },
                { label: "Flat + improving", note: "fine: small lr tail-end of convergence" },
                { label: "Large + oscillating", note: "lr too large: decay it, clip gradients" },
              ],
            },
            callout: {
              type: "exam",
              title: "Always show the eigenvalue test, not a picture alone",
              body: "When asked to prove a point is a saddle, draw the sketch for half the marks and compute for the rest: set the gradient to zero, build the Hessian, list the eigenvalues with signs, and state the mixed-sign conclusion. f(x, y) = x^2 - y^2 with H = diag(2, -2) is the fastest complete example you can write under exam pressure.",
            },
            keyTerms: [
              { term: "Local minimum", definition: "A point whose neighbourhood has no lower function value; globally best only if the function is convex." },
              { term: "Saddle point", definition: "A stationary point with Hessian eigenvalues of both signs - minimum-like in some directions, maximum-like in others." },
              { term: "Plateau", definition: "A large region of tiny gradient where training loss barely moves for many steps." },
              { term: "Non-convex landscape", definition: "An objective with multiple basins and stationary points; the standard setting for deep learning." },
              { term: "Noise injection", definition: "Randomness in SGD updates that perturbs iterates off saddles and plateaus." },
            ],
            examQuestions: [
              {
                q: "Distinguish local minima, global minima and saddle points. Show that the origin is a saddle point of f(x, y) = x^2 - y^2, and explain why saddle points dominate high-dimensional non-convex landscapes such as deep networks.",
                marks: 7,
                outline: [
                  "Define global minimum (no point anywhere is lower), local minimum (no nearby point is lower), saddle (curves both ways).",
                  "Compute grad f = (2x, -2y); it vanishes only at the origin.",
                  "Build the Hessian H = diag(2, -2) and list eigenvalues +2 and -2.",
                  "Mixed signs prove the origin is a saddle: descending along x, ascending along y.",
                  "Sketch the surface: valley along the x-axis, ridge along the y-axis.",
                  "Argue dimension counting: a random critical point is a minimum only if all d eigenvalue signs align, probability about 2^-d.",
                  "Conclude with the practical picture: plateaus and saddles dominate training stalls; SGD noise and perturbations escape them; overparameterization makes found minima near-global in quality.",
                ],
              },
              {
                q: "The Hessian at a critical point is diag(4, 0, -2). Classify the point.",
                marks: 2,
              },
              {
                q: "Why do saddle points cause less trouble for SGD than for full-batch gradient descent?",
                marks: 3,
              },
            ],
          },
        ],
      },
    },
    // ----------------------------------------------------------------- II
    {
      number: 2,
      roman: "II",
      title: "First-Order Unconstrained Methods",
      summary:
        "The algorithms that train most of modern ML using only gradients: batch gradient descent and the learning-rate rules that keep it stable, stochastic and mini-batch variants that make it scale, momentum and Nesterov acceleration that straighten the path, adaptive methods that give every parameter its own step, and the regression workhorses that put it all together with schedules.",
      chapter: {
        number: "02",
        title: "Descent with Gradients Only",
        intro:
          "Unit II turns Unit I's geometry into algorithms: gradient descent updates theta := theta - lr * grad, and everything else is engineering around that line. You will compute two steps of descent by hand, see exactly when it converges and when it explodes, replace the full-data gradient with noisy sampled ones, add momentum to damp zigzags, hand each parameter an adaptive step with AdaGrad, RMSProp and Adam, and finish with the classic optimizations of linear and logistic regression plus learning-rate schedules.",
        inOneBreath:
          "Gradient descent iterates theta := theta - lr*grad J; on f(x) = x^2 with lr = 0.1 the iterate shrinks by factor 0.8 per step, while lr above 2/L diverges; mini-batch SGD replaces the full gradient with an unbiased estimate from B random samples, costing O(B) instead of O(n) per step with variance shrinking as 1/B; momentum keeps an exponentially weighted velocity v := beta*v + g with beta = 0.9, effectively multiplying the step by up to 1/(1-beta) = 10 on consistent gradients while cancelling oscillating ones; AdaGrad divides each parameter's step by the sqrt of its accumulated squared gradient, RMSProp switches the accumulator to an exponential moving average, and Adam combines momentum plus RMSProp plus bias correction with defaults lr = 0.001, beta1 = 0.9, beta2 = 0.999; linear regression has a closed-form normal-equations solution but GD works fine, logistic regression has no closed form and is trained by first-order methods; schedules decay the learning rate over training (step, exponential, cosine, warmup).",
        sections: [
          {
            number: "2.1",
            title: "Batch gradient descent and the learning rate",
            body: [
              "Batch gradient descent is the simplest possible optimizer: compute the true gradient of the loss over the entire dataset and step against it. The update is theta := theta - lr * grad J(theta), where lr is the learning rate. One step costs O(n*d) for n samples and d parameters, because every sample contributes to the gradient. Nothing is estimated, nothing is noisy: on a deterministic objective, repeated steps trace a smooth path downhill. It is the algorithm against which every other optimizer is defined and compared, and the first thing to write in any 'explain gradient descent' answer.",
              "A worked trace fixes the idea. Minimize f(x) = x^2 with lr = 0.1 starting at x = 4. Gradient 2x = 8, so x1 = 4 - 0.1*8 = 3.2. Next gradient 6.4, so x2 = 3.2 - 0.64 = 2.56. Each step multiplies the distance to the minimum by (1 - lr*2) = 0.8: 4, 3.2, 2.56, 2.048, ... The error shrinks geometrically and reaches 0.01 after about 21 steps since 0.8^k < 0.0025 needs k near 21. Now the same function with lr = 1.1: x1 = 4 - 1.1*8 = -4.8, and the factor |1 - 1.1*2| = 1.2 makes every step bigger - divergence in eight steps. The boundary is lr = 1 for this function (2/L = 1 with L = 2).",
              "How should lr be chosen in practice? Theory gives the ceiling lr < 2/L where L is the smoothness constant from Unit 1.4; practice gives the search. Run a coarse grid such as 0.001, 0.01, 0.1, 1 and watch the loss curves: too small means a nearly straight slowly-declining curve, correct means fast smooth decline that flattens, too large means the loss bounces or turns upward. The learning rate is almost always the single most impactful hyperparameter, which is why Unit V devotes a full case study to tuning it. A decent default for standardized inputs in small models is 0.1; for deep networks with Adam, 0.001.",
              "Batch descent has two structural weaknesses that motivate everything else in this unit. First, cost: with n = 1,000,000 samples, every single update walks the whole dataset, so 1000 updates cost a billion example-gradients - wasteful when the first 32 samples already point roughly downhill. Second, memory and data volume: the full dataset must sit in RAM. Stochastic and mini-batch variants (Section 2.3) fix the cost, momentum (2.4) fixes the zigzag that small batches introduce, and adaptive methods (2.5) fix the one-size-fits-all learning rate. Knowing exactly which weakness each variant repairs is the map of this entire unit.",
            ],
            bullets: [
              "Update rule: theta := theta - lr * grad J(theta); full dataset per step, cost O(n*d).",
              "Worked trace on f(x) = x^2, lr = 0.1: 4 -> 3.2 -> 2.56 -> 2.048, factor 0.8 per step.",
              "Stability: on a quadratic the error factor is (1 - lr*lambda); need lr < 2/lambda_max.",
              "lr = 1.1 on x^2 gives factor 1.2 - steps grow and the method diverges.",
              "Practical lr selection: coarse grid, then read the loss curve (flat-slow, smooth-fast, bouncing-too-large).",
              "Typical defaults: 0.1 for standardized small models, 0.001 with Adam for deep nets.",
              "Weaknesses of batch GD: full-dataset cost per update and whole-dataset memory - fixed by SGD variants.",
            ],
            table: {
              caption: "Batch gradient descent on f(x) = x^2 from x = 0 with three learning rates.",
              headers: ["lr", "Step factor (1 - 2lr)", "x after 5 steps from 4", "Behaviour"],
              rows: [
                ["0.05", "0.90", "2.37", "stable, slow"],
                ["0.10", "0.80", "1.31", "stable, good pace"],
                ["0.45", "0.10", "0.002", "fast, near the limit"],
                ["0.50", "-0.00", "0.000", "one-step oscillation boundary"],
                ["1.10", "-1.20", "-24.83", "diverging"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "The batch gradient descent loop",
              caption:
                "One full pass over the data happens inside every single loop iteration.",
              steps: [
                { label: "Forward pass on all n samples", note: "compute predictions" },
                { label: "Compute total loss J(theta)", note: "average over dataset" },
                { label: "Backward pass", note: "exact full gradient" },
                { label: "theta := theta - lr * grad", note: "the only creative choice: lr" },
                { label: "Check stopping rule", note: "gradient norm, iterations, or patience" },
              ],
            },
            callout: {
              type: "warning",
              title: "The learning rate is not a detail",
              body: "Exams and interviews both probe lr because it is where theory meets failure. Always state both halves: the theoretical ceiling lr < 2/L from the smoothness constant, and the practical recipe of grid search on loss curves. If asked to debug 'loss becomes NaN', the first sentence of your answer must be 'learning rate too large - reduce it and check for feature scaling'.",
            },
            keyTerms: [
              { term: "Learning rate lr", definition: "Step size multiplying the gradient in the descent update; bounded above by 2/L for stability." },
              { term: "Batch gradient descent", definition: "Descent using the exact gradient of the full-dataset average loss each step." },
              { term: "Loss curve", definition: "Plot of loss versus iteration or epoch; its shape diagnoses the learning-rate choice." },
              { term: "Divergence", definition: "Iterates growing without bound because the step factor |1 - lr*lambda| exceeds 1." },
              { term: "Convergence rate", definition: "How fast the error shrinks: geometric (factor per step) for strongly convex objectives." },
            ],
            examQuestions: [
              {
                q: "Explain the batch gradient descent algorithm with its update rule. Compute three iterations of gradient descent on f(x) = x^2 starting from x = 4 with lr = 0.1, state the stability condition on the learning rate, and describe what happens when it is violated.",
                marks: 7,
                outline: [
                  "State the update theta := theta - lr * grad J(theta) and the meaning of lr.",
                  "Gradient of f(x) = x^2 is 2x; step 1: x = 4 - 0.1*8 = 3.2.",
                  "Step 2: 3.2 - 0.1*6.4 = 2.56; step 3: 2.56 - 0.1*5.12 = 2.048.",
                  "Identify the pattern: each step multiplies the error by (1 - 2*lr) = 0.8, geometric convergence.",
                  "Derive stability: need |1 - lr*lambda| < 1, hence lr < 2/lambda_max; for x^2, lr < 1.",
                  "Show violation: lr = 1.1 gives factor 1.2, iterates 4, -4.8, 5.76, ... growing without bound.",
                  "Summarize practical lr selection: theoretical ceiling plus coarse grid search with loss-curve diagnosis.",
                ],
              },
              {
                q: "For f(x) = 3x^2, what is the largest safe learning rate for gradient descent?",
                marks: 2,
              },
              {
                q: "Give two symptoms on a loss curve that indicate the learning rate is too large, and one that indicates it is too small.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.2",
            title: "Convergence intuition: rates, stopping and the geometry of steps",
            body: [
              "Convergence theory asks one question: after k steps, how far from the optimum are we? Three rates cover the syllabus. Sublinear O(1/k): the error divides by a slowly growing factor, typical of smooth convex functions without strong convexity. Linear (geometric) O(c^k): the error multiplies by a fixed factor c < 1 each step, the reward for strong convexity. Quadratic: the number of correct digits doubles each step, the privilege of Newton's method in Unit III. Gradient descent on a mu-strongly convex L-smooth quadratic with the best step size converges linearly with factor (1 - mu/L) = (1 - 1/kappa): badly conditioned problems converge slowly precisely because this factor sits near 1.",
              "A complete worked trace makes the algebra tangible. Minimize f(x) = x^2 from x0 = 10 with lr = 0.2. Gradient 2x = 20, so x1 = 10 - 0.2*20 = 6. Next: gradient 12, x2 = 6 - 0.2*12 = 3.6. The factor is 0.6 per step, so the error after k steps is 10 * 0.6^k. How many steps to reach error below 0.01? Solve 0.6^k < 0.001: taking logs, k > log(0.001)/log(0.6) = -6.908/-0.511 = 13.5, so 14 steps. The same arithmetic in reverse predicts the effect of the condition number: with kappa = 10 and optimal lr, the factor becomes 1 - 1/10 = 0.9, and reaching 0.01 from 10 needs log(0.001)/log(0.9) = 65 steps - the flat direction is the tax collector.",
              "Rates connect to what you see on real loss curves. A linear-rate objective shows a straight line when loss is plotted on a log scale versus iteration - worth checking when debugging. A sublinear-rate objective shows a long flat tail, which is why late-stage training feels slow no matter what you do. Restarts, better conditioning, or a switch to momentum/second-order methods change the factor c; they do not change the O(1/k) ceiling of the problem class. Understanding which rate your problem permits prevents the classic student error of blaming the optimizer for a rate the objective itself dictates.",
              "Stopping rules finish the algorithm. Options: fixed iteration budget (simplest, used in exams), gradient norm below tolerance (|grad| < 1e-6 means a stationary point), relative improvement below epsilon over a patience window, or validation-loss monitoring that doubles as overfitting protection (early stopping, Unit 3.6). A tidy exam answer pairs the update rule with a stopping criterion, because an optimizer without a stopping rule is not an algorithm - it is a loop that never ends. State budget, tolerance and patience, and mention that in ML practice the epoch budget plus validation patience is the standard combination.",
            ],
            bullets: [
              "Three rates: sublinear O(1/k), linear O(c^k) with c = 1 - 1/kappa, quadratic (Newton only).",
              "Worked trace: f(x) = x^2, x0 = 10, lr = 0.2 gives 10 -> 6 -> 3.6, factor 0.6, error = 10 * 0.6^k.",
              "Steps to tolerance: k = log(tol/x0)/log(factor); 0.6 factor needs 14 steps to reach error 0.01.",
              "Condition number tax: factor (1 - 1/kappa); kappa = 10 gives 0.9 per step and about 65 steps to the same tolerance.",
              "Log-scale loss plots reveal linear-rate convergence as a straight line.",
              "Stopping rules: iteration budget, gradient norm tolerance, improvement patience, validation-based early stopping.",
              "Blame the objective's rate, not the optimizer, when the tail is flat and kappa is large.",
            ],
            table: {
              caption: "Error after k steps, x0 = 10, various one-step factors.",
              headers: ["Factor c", "k = 5", "k = 14", "k = 65", "Diagnosis"],
              rows: [
                ["0.6", "0.78", "0.01", "~0", "well-conditioned, fast"],
                ["0.8", "3.28", "0.88", "0.002", "moderate pace"],
                ["0.9", "5.90", "2.57", "0.01", "kappa = 10 bottleneck"],
                ["0.99", "9.51", "8.60", "3.65", "kappa = 100, impractical"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Predicting the convergence budget by hand",
              caption:
                "Four arithmetic moves convert a rate into a step count - an exam favourite.",
              steps: [
                { label: "Identify the one-step factor c", note: "c = 1 - lr*mu or 1 - 1/kappa" },
                { label: "Write error after k steps", note: "error_k = x0 * c^k" },
                { label: "Set error_k = tolerance", note: "e.g. 0.01" },
                { label: "Solve k = log(tol/x0) / log(c)", note: "round up to whole steps" },
              ],
            },
            callout: {
              type: "tip",
              title: "Carry one memorized trace into the exam",
              body: "The trace 10 -> 6 -> 3.6 on f(x) = x^2 with lr = 0.2 costs ten seconds, demonstrates you can execute the update rule, yields the factor 0.6, and converts into a step-count via logs. Memorize it once and reuse it for convergence, schedules, momentum and SGD questions.",
            },
            keyTerms: [
              { term: "Linear (geometric) convergence", definition: "Error multiplied by a constant factor c < 1 each iteration; error_k = c^k * error_0." },
              { term: "Sublinear convergence", definition: "O(1/k) shrinkage typical of smooth convex objectives without strong convexity." },
              { term: "Conditioning tax", definition: "The convergence factor degrading from (1 - 1/kappa = 1) toward 1 as kappa grows." },
              { term: "Stopping criterion", definition: "The rule that ends the loop: budget, gradient tolerance, improvement patience, or validation monitoring." },
              { term: "Tolerance", definition: "The error or gradient-norm threshold declared good enough to stop." },
            ],
            examQuestions: [
              {
                q: "Perform two iterations of gradient descent on f(x) = x^2 from x0 = 10 with lr = 0.2, derive the per-step error factor, and compute the number of iterations needed to reduce the error below 0.01. Explain how the condition number changes this count.",
                marks: 7,
                outline: [
                  "Step 1: grad = 20, x1 = 10 - 0.2*20 = 6.",
                  "Step 2: grad = 12, x2 = 6 - 0.2*12 = 3.6.",
                  "Pattern: x_k = 10 * 0.6^k since each step multiplies by (1 - 0.2*2).",
                  "Set 10 * 0.6^k < 0.01 and solve k > log(0.001)/log(0.6) = 13.5, so 14 iterations.",
                  "Connect to theory: factor c = 1 - mu/L = 1 - 1/kappa for optimal lr on strongly convex quadratics.",
                  "With kappa = 10 the factor becomes 0.9 and the count grows to about 65 - flat directions dominate.",
                  "Conclude: convergence budget is arithmetic on (x0, c, tolerance); conditioning is the lever.",
                ],
              },
              {
                q: "State two stopping criteria for gradient descent and when each is appropriate.",
                marks: 2,
              },
              {
                q: "An error shrinks by factor 0.8 per step. After how many steps is an initial error of 1 reduced below 0.001?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.3",
            title: "Stochastic and mini-batch gradient descent",
            body: [
              "Batch descent recomputes the exact gradient of the average loss every step - correct but expensive at scale. Stochastic gradient descent (SGD) takes the opposite extreme: each step uses the gradient of the loss on ONE randomly chosen example i. The key fact that makes this legal is unbiasedness: the expected value of a randomly sampled per-example gradient equals the full gradient, E[g_i] = grad J. Each step is cheap (O(d) instead of O(n*d)), and although individual steps wobble, on average they head downhill. For n = 1,000,000 samples, one batch-GD step costs a million example-gradients; one SGD step costs one - the same wall-clock budget buys thousands of noisy steps.",
              "Mini-batch SGD is the practical middle ground used everywhere in deep learning: each step uses the gradient averaged over B randomly drawn examples, with B typically 32, 64, 128 or 256. The estimate stays unbiased, but its variance falls roughly as 1/B - doubling the batch halves the noise. With n = 1000 and B = 32, an epoch delivers ceil(1000/32) = 32 updates instead of 1 for batch GD. Small batches give noisy-but-frequent steps and better exploration; large batches give smooth-but-rare steps and use the GPU efficiently. The batch size is therefore a genuine hyperparameter trading noise against hardware throughput.",
              "A tiny numeric example shows the noise. Take three samples with squared-error gradients with respect to one parameter: g1 = 4, g2 = 0, g3 = -2 (in suitable units). The full gradient is (4 + 0 - 2)/3 = 0.67. A mini-batch of B = 1 picks one at random: steps of +0.4, 0, -0.2 (with lr 0.1) in unpredictable order, averaging to +0.067. A mini-batch of B = 3 always takes exactly +0.067. Both are correct in expectation; only the batch version is deterministic. Note also that noisy steps can temporarily increase the loss - that is not a bug but the exploration mechanism that helps escape saddles (Unit 1.6) and often improves generalization.",
              "Choosing between the variants is an exam staple. Batch GD: exact, smooth, parallel-friendly, but O(n) per step and needs all data in memory - right for small convex problems like linear regression. SGD (B = 1): cheapest steps, maximum noise, slow hardware utilization. Mini-batch: the default for neural networks, tuned so the GPU is busy while noise stays useful. Two practical adjustments accompany small batches: slightly smaller learning rates because the gradient estimate is noisier, and shuffling the data every epoch so batches are representative. When an exam question says 'training uses batches of 64', your answer should connect B to variance, cost per epoch, and hardware efficiency in one breath.",
            ],
            bullets: [
              "SGD update: theta := theta - lr * g_i for one random sample i; unbiased since E[g_i] = full gradient.",
              "Mini-batch: average gradient over B samples; variance of the estimate falls roughly as 1/B.",
              "Cost: batch GD O(n*d) per step; SGD O(d); mini-batch O(B*d) - the scale-friendly middle.",
              "Epoch arithmetic: n = 1000, B = 32 gives ceil(1000/32) = 32 updates per epoch.",
              "Worked noise example: per-sample grads 4, 0, -2; full grad 0.67; single-sample steps wobble around the same mean.",
              "Noise is a feature: exploration escapes saddles and often improves test accuracy.",
              "Practical pairings: small B with smaller lr, shuffle every epoch, B tuned to GPU throughput.",
            ],
            table: {
              caption: "The three gradient-estimation regimes compared.",
              headers: ["Variant", "Samples per step", "Noise", "Cost per step", "Typical use"],
              rows: [
                ["Batch GD", "all n", "zero", "O(n*d)", "small convex problems"],
                ["Mini-batch SGD", "B = 32..256", "moderate, ~1/B", "O(B*d)", "deep learning default"],
                ["Pure SGD", "1", "highest", "O(d)", "online / streaming data"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Why batch size is a trade, not a setting",
              caption:
                "Same expected direction, different noise and cost - pick per hardware and problem.",
              left: {
                heading: "Small batch (8-32)",
                items: [
                  "noisy steps, more exploration",
                  "many updates per epoch",
                  "often better generalization",
                  "poor GPU utilization",
                  "needs slightly smaller lr",
                ],
              },
              right: {
                heading: "Large batch (256+)",
                items: [
                  "smooth, predictable steps",
                  "fewer updates per epoch",
                  "excellent GPU throughput",
                  "risk of sharp minima without lr scaling",
                  "can look 'stuck' on flat loss curves",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Unbiasedness is the one-word answer",
              body: "Whenever a question asks 'why is SGD legitimate even though it ignores most of the data', the mark-carrying sentence is: the expected mini-batch gradient equals the true gradient, so SGD performs noisy but on-average-correct descent, with variance shrinking as 1/B. Add the epoch arithmetic example and the answer is complete.",
            },
            keyTerms: [
              { term: "SGD", definition: "Stochastic gradient descent: updates using a randomly sampled per-example gradient." },
              { term: "Mini-batch", definition: "A random subset of B examples whose averaged gradient drives one update." },
              { term: "Unbiased estimator", definition: "A random quantity whose expectation equals the target; E[g_i] = grad J makes SGD valid." },
              { term: "Variance ~ 1/B", definition: "The noise of a B-example gradient estimate shrinks inversely with batch size." },
              { term: "Epoch", definition: "One pass over the dataset; delivers n/B mini-batch updates." },
            ],
            examQuestions: [
              {
                q: "Compare batch, mini-batch and stochastic gradient descent. Explain unbiasedness of the mini-batch gradient, how variance depends on batch size, and illustrate with per-sample gradients 4, 0, -2 what full-batch and single-sample steps look like.",
                marks: 7,
                outline: [
                  "Define the three variants by samples used per update: n, B, 1.",
                  "State unbiasedness: E[g_i] = grad J, so stochastic steps are correct on average.",
                  "Variance argument: averaging B independent samples reduces noise about 1/B.",
                  "Worked example: full gradient (4 + 0 - 2)/3 = 0.67 drives every batch step identically.",
                  "Single-sample steps: +0.4, 0, -0.2 with lr 0.1 - noisy path, same expected drift +0.067.",
                  "Cost table: O(n*d) vs O(B*d) vs O(d); epoch updates n/B for mini-batch.",
                  "Practical guidance: mini-batch default, small B for exploration with smaller lr, large B for throughput.",
                ],
              },
              {
                q: "A dataset of 960 samples uses batch size 64. How many updates per epoch?",
                marks: 2,
              },
              {
                q: "Why can mini-batch loss temporarily increase even when the optimizer is working correctly?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.4",
            title: "Momentum and Nesterov accelerated gradient",
            body: [
              "Plain descent forgets nothing and remembers nothing: each step is a fresh reaction to the local gradient. In a ravine (Unit 1.5) this produces the classic zigzag - big corrections across the valley, tiny progress along it. Momentum fixes this by giving the update a velocity: v := beta * v + grad J(theta), then theta := theta - lr * v. The velocity accumulates the recent history of gradients, damping components that keep flipping sign (the cross-valley oscillation) and reinforcing components that persist (the along-valley progress). beta = 0.9 is the standard choice; beta = 0.99 for long-memory variants.",
              "The arithmetic of consistent gradients is the exam's favourite momentum fact. If the gradient is the same constant g every step, the velocity grows v = g(1 + beta + beta^2 + ...) = g/(1 - beta), so the effective step is lr * g/(1 - beta). With beta = 0.9 the factor is 10: ten times faster travel along any direction the gradient keeps pointing. Worked numbers with lr = 0.1 and g = 1: v goes 1, 1.9, 2.71, 3.44, 4.10, ... approaching 10, and the steps grow from 0.1 toward 1.0. On f(x) = x^2 with lr = 0.1 and beta = 0.9, the asymptotic effective factor per step is 0.8^10 - what took 21 plain steps takes 3.",
              "Oscillation damping is the other half of the story. A gradient alternating +a, -a, +a, -a contributes to v: a, a(1-beta), a(1-beta+beta^2)... the alternating component is multiplied by (1 - beta) each round, so with beta = 0.9 the zigzag decays by factor 0.1 per oscillation while the steady component is amplified tenfold. In the ravine picture: the across-valley penalty shrinks 100x in relative terms (10x damp divided by 10x boost along-valley). This is why momentum turns the kappa = 10 zigzag of Section 2.1 into a smooth curved path that reaches the floor in a handful of steps.",
              "Nesterov accelerated gradient (NAG) is momentum with foresight. Before computing the gradient, take a peek along the current velocity: evaluate the gradient at theta_look = theta - lr * beta * v, then apply v := beta*v + grad J(theta_look). The look-ahead lets the method begin braking before it overshoots the valley wall - the ball 'sees the slope rising' and slows early. In practice NAG gives slightly better stability than classical momentum at the same beta, especially with large learning rates, and it enjoys a stronger theoretical convergence rate on convex problems. Both methods are drop-in replacements for the gradient term in SGD; neither needs second derivatives; both cost one extra vector of memory.",
            ],
            bullets: [
              "Momentum update: v := beta*v + grad, theta := theta - lr*v; beta = 0.9 standard.",
              "Consistent gradient amplification: effective step lr*g/(1-beta) = 10*lr for beta = 0.9.",
              "Worked velocity growth with lr 0.1, g = 1: v = 1, 1.9, 2.71, 3.44, ... -> 10.",
              "Alternating gradients decay by (1 - beta) per oscillation: zigzag cancelled, progress kept.",
              "Ravine effect: kappa = 10 zigzag becomes a smooth path; steps along-valley are what get amplified.",
              "NAG: gradient evaluated at look-ahead theta - lr*beta*v; braking starts before overshoot.",
              "Cost: one extra velocity vector in memory; stronger convex-optimization guarantees for NAG.",
            ],
            table: {
              caption: "Plain SGD vs momentum on f(x) = x^2 from x = 4 (lr = 0.1, beta = 0.9).",
              headers: ["Step k", "Plain x_k", "Momentum x_k", "Note"],
              rows: [
                ["0", "4.000", "4.000", "same start"],
                ["1", "3.200", "3.200", "v starts at gradient 8"],
                ["2", "2.560", "2.432", "velocity already aiding"],
                ["3", "2.048", "1.780", "gap widening"],
                ["5", "1.311", "0.940", "momentum ~ 2x ahead"],
                ["10", "0.429", "0.107", "momentum far ahead"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "One momentum step, start to finish",
              caption:
                "Only two lines change from plain SGD - add a velocity line and use it in the update.",
              steps: [
                { label: "Compute grad J(theta)" },
                { label: "v := beta*v + grad", note: "blend history with the new gradient" },
                { label: "theta := theta - lr*v", note: "step along the velocity" },
                { label: "Repeat", note: "consistent directions accumulate, flips cancel" },
              ],
            },
            callout: {
              type: "exam",
              title: "The 1/(1-beta) identity earns instant marks",
              body: "Memorize: with constant gradient g, momentum velocity converges to g/(1-beta), so beta = 0.9 multiplies the effective learning rate by 10 and beta = 0.99 by 100. Pair it with the damping fact that sign-flipping gradient components decay by (1-beta). These two sentences answer most momentum theory questions completely.",
            },
            keyTerms: [
              { term: "Velocity v", definition: "Exponentially weighted running sum of gradients that replaces the raw gradient in the update." },
              { term: "Momentum coefficient beta", definition: "How much of the old velocity survives each step; 0.9 keeps a 10-step memory." },
              { term: "Effective step amplification", definition: "1/(1-beta): the factor by which consistent gradients travel faster under momentum." },
              { term: "Nesterov look-ahead", definition: "Evaluating the gradient after a partial velocity step, letting the method brake early." },
              { term: "Ravine", definition: "A narrow steep-sided valley; the landscape where momentum helps most." },
            ],
            examQuestions: [
              {
                q: "Explain the momentum update rule and why it outperforms plain gradient descent in ill-conditioned ravines. Show the velocity growth for a constant gradient with beta = 0.9 and describe how Nesterov acceleration differs.",
                marks: 7,
                outline: [
                  "Write the two update lines: v := beta*v + grad, theta := theta - lr*v.",
                  "Explain the physics analogy: a heavy ball keeps heading and damps zigzag.",
                  "Constant-gradient analysis: v = g(1 + beta + beta^2 + ...) = g/(1 - beta), factor 10 for beta = 0.9.",
                  "Numerical trace with lr = 0.1, g = 1: velocities 1, 1.9, 2.71, 3.44 approaching 10.",
                  "Oscillation analysis: sign-flipping components decay by (1 - beta) = 0.1 per cycle.",
                  "Ravine payoff: cross-valley zigzag suppressed while along-valley motion is amplified 10x.",
                  "NAG: gradient computed at look-ahead theta - lr*beta*v, giving earlier braking and better convex guarantees.",
                ],
              },
              {
                q: "What effective step-size amplification does momentum with beta = 0.99 provide on a constant gradient?",
                marks: 2,
              },
              {
                q: "Why does momentum help in a ravine but barely change anything on a perfectly round bowl?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.5",
            title: "Adaptive methods: AdaGrad, RMSProp and Adam",
            body: [
              "So far every parameter shared one learning rate. Adaptive methods give each parameter its own, derived from the history of its own gradients. The insight: in sparse problems (think word embeddings), parameters touched by frequent features get gradients often and should take smaller steps, while rarely-updated parameters deserve larger ones. AdaGrad accumulates the squared gradients per parameter, s := s + g^2, and updates theta := theta - lr * g / sqrt(s + eps). Frequently-gradiented parameters see a big s and step carefully; neglected parameters see small s and step boldly. eps = 1e-8 prevents division by zero.",
              "AdaGrad's flaw appears in its arithmetic. With a constant gradient g = 1 and lr = 0.1, the accumulator grows s = 1, 2, 3, ... and the steps are 0.1/sqrt(1) = 0.1, 0.1/sqrt(2) = 0.071, 0.1/sqrt(3) = 0.058, ... shrinking forever. Early training is excellent (aggressive progress on informative coordinates), but late training stalls as s grows without bound. RMSProp repairs exactly this by replacing the sum with an exponential moving average: s := rho*s + (1 - rho)*g^2 with rho = 0.9. Now s estimates the recent average squared gradient, staying bounded, and the effective step adapts continuously instead of decaying to zero.",
              "Adam (Adaptive Moment Estimation) combines the two best ideas: a momentum-style first moment m := beta1*m + (1 - beta1)*g with beta1 = 0.9, and an RMSProp-style second moment v := beta2*v + (1 - beta2)*g^2 with beta2 = 0.999. Because both moments start at zero, early steps are biased small, so Adam applies bias correction: m_hat = m/(1 - beta1^t) and v_hat = v/(1 - beta2^t), which inflate the early estimates to their true magnitudes. The update is theta := theta - lr * m_hat / (sqrt(v_hat) + eps), with defaults lr = 0.001 and eps = 1e-8. Adam is the default optimizer of deep learning because it needs almost no tuning to work reasonably.",
              "Choosing among the three is a standard comparison question. AdaGrad: best when gradients are sparse and early progress matters (embedding training, some NLP settings); suffers the shrinking-step problem on long runs. RMSProp: bounded adaptive steps, good for non-stationary objectives like RNN training. Adam: momentum plus adaptivity plus bias correction, robust default with lr = 0.001; its variant AdamW decouples weight decay from the adaptive step (Unit 5.5). None replaces the fundamentals: all three still need sensible learning rates, and all inherit the same convergence landscape as plain descent. An exam answer that states the update, the bias-correction purpose, and one sentence of when-to-use for each covers full marks.",
            ],
            bullets: [
              "AdaGrad: s := s + g^2, update theta -= lr * g / sqrt(s + eps); per-parameter learning rates.",
              "AdaGrad trace (g = 1, lr = 0.1): steps 0.1, 0.071, 0.058, ... - great early, stalling later.",
              "RMSProp: s := rho*s + (1 - rho)*g^2 with rho = 0.9 - bounded estimate of recent squared gradient.",
              "Adam: m := beta1*m + (1-beta1)*g and v := beta2*v + (1-beta2)*g^2, update -lr * m_hat/(sqrt(v_hat) + eps).",
              "Bias correction m_hat = m/(1 - beta1^t), v_hat = v/(1 - beta2^t) fixes the zero-start underestimate.",
              "Defaults: lr = 0.001, beta1 = 0.9, beta2 = 0.999, eps = 1e-8.",
              "Selection rule: AdaGrad for sparse gradients, RMSProp for non-stationary objectives, Adam as the robust default.",
            ],
            table: {
              caption: "Adaptive optimizers at a glance (constant gradient g = 1, lr = 0.1).",
              headers: ["Optimizer", "State", "Step at t = 1, 2, 3", "Long-run behaviour"],
              rows: [
                ["AdaGrad", "sum of g^2", "0.100, 0.071, 0.058", "steps shrink to 0 (stall)"],
                ["RMSProp", "EMA of g^2, rho = 0.9", "0.100, 0.100, 0.100", "steady adaptive steps"],
                ["Adam", "EMA of g and g^2", "~0.100, 0.100, 0.100", "steady + momentum smoothing"],
                ["SGD", "none", "0.100, 0.100, 0.100", "one rate for all parameters"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "Adaptive methods build on each other",
              caption:
                "Each layer fixes one defect of the layer below; Adam sits on top of both.",
              tiers: [
                { label: "Adam", note: "momentum + adaptive + bias correction; the practical default" },
                { label: "RMSProp", note: "EMA of squared gradients: bounded, non-stalling adaptivity" },
                { label: "AdaGrad", note: "pioneered per-parameter steps, but the accumulator grows without bound" },
                { label: "SGD", note: "one shared learning rate; the baseline everything improves on" },
              ],
            },
            callout: {
              type: "tip",
              title: "Derive the AdaGrad stall in two lines",
              body: "The examiner's favourite Adam-family question is 'why was RMSProp invented'. Answer with arithmetic: constant gradient means s_t = t*g^2, so the step is lr*g/sqrt(t*g^2) = lr/sqrt(t) - shrinking like 1/sqrt(t) to zero. RMSProp's EMA replaces the growing sum with a bounded recent average, so steps never die. Two lines, full marks.",
            },
            keyTerms: [
              { term: "AdaGrad", definition: "Adaptive gradient method dividing each parameter's step by the sqrt of its accumulated squared gradients." },
              { term: "RMSProp", definition: "AdaGrad with the accumulator switched to an exponential moving average, rho = 0.9." },
              { term: "Adam", definition: "Adaptive moment estimation: momentum + RMSProp + bias correction; default lr 0.001." },
              { term: "First/second moment", definition: "EMA of the gradient (mean direction) and of the squared gradient (recent magnitude)." },
              { term: "Bias correction", definition: "Division by (1 - beta^t) to undo the zero-initialized underestimate of early EMA values." },
            ],
            examQuestions: [
              {
                q: "Describe the update rules of AdaGrad, RMSProp and Adam. Demonstrate with a constant gradient why AdaGrad's effective step decays, how RMSProp fixes it, and what role bias correction plays in Adam.",
                marks: 7,
                outline: [
                  "AdaGrad: s := s + g^2 and theta -= lr*g/sqrt(s + eps); per-parameter adaptivity.",
                  "Constant gradient g: s_t = t*g^2, step = lr/sqrt(t) - decays to zero; trace 0.1, 0.071, 0.058.",
                  "Motivation for RMSProp: recent history matters more than all history on non-stationary objectives.",
                  "RMSProp: s := 0.9s + 0.1g^2 stays bounded; steps remain near lr.",
                  "Adam: first moment m (momentum) + second moment v (RMSProp) with betas 0.9 / 0.999.",
                  "Bias correction: m_hat = m/(1 - beta1^t), v_hat = v/(1 - beta2^t) corrects zero-start bias.",
                  "Comparison sentence: AdaGrad for sparse gradients, RMSProp for non-stationary, Adam as default.",
                ],
              },
              {
                q: "Write the Adam update rule with default hyperparameter values.",
                marks: 2,
              },
              {
                q: "Why is AdaGrad well suited to training word embeddings with sparse gradients?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.6",
            title: "Worked optimizations: linear and logistic regression, schedules",
            body: [
              "Linear regression is the cleanest full optimization story. Model y_hat = w*x + b, loss MSE. For the tiny dataset (x, y) = (1, 2), (2, 4), (3, 6) the true line is y = 2x. The MSE gradient with respect to w is (2/3) * sum x_i(w*x_i - y_i); at w = 0 this is -(2/3)(1*2 + 2*4 + 3*6) = -(2/3)(28) = -18.67, so with lr = 0.05 the first step gives w1 = 0.933. Continuing, the iterates 0, 0.933, 1.458, 1.716, ... approach 2. The objective is convex quadratic, so the closed-form normal equations w = (X^T X)^{-1} X^T y also solve it exactly - GD is the iterative alternative that scales when X^T X is too big to invert.",
              "Logistic regression has no closed form and is the canonical first-order problem. Model p = sigmoid(w^T x), loss cross-entropy, and Unit 1.2's derivation gives the elegant gradient (1/n) * sum (p_i - y_i) * x_i - identical in form to linear regression's residual-times-features gradient. Newton's method would converge faster per step but costs a d-times-d Hessian; L-BFGS (Unit 3.2) is the classical solver of choice, which is why scikit-learn's LogisticRegression defaults to solver='lbfgs'. For large datasets, mini-batch SGD or Adam with lr = 0.01 to 0.1 on standardized features converges in a few dozen epochs. Both regressions share the recipe: standardize features, pick the loss, write the gradient, iterate.",
              "A learning-rate schedule multiplies the base lr by a decaying factor over training, because large steps help early exploration while small steps polish late. Step decay multiplies by gamma every few epochs, e.g. lr_epoch = 0.1 * 0.5^floor(epoch/5): 0.1, then 0.05 after epoch 5, 0.025 after 10. Exponential decay uses lr_t = lr0 * exp(-k*t). Cosine annealing halves the rate smoothly: lr_t = lr_min + (lr0 - lr_min) * (1 + cos(pi * t/T))/2 over a total of T steps, standard in modern vision training. Warmup raises lr from near zero over the first few hundred steps - essential for large-batch and transformer training where early huge steps destabilize the loss.",
              "Schedules also connect back to theory. Near the optimum, the noise of SGD becomes harmful: a decaying lr averages out that noise the way an averaging filter removes jitter, and classical results show lr decaying like O(1/t) guarantees convergence for SGD on convex problems where a constant lr only reaches a noise ball. Practical guidance: constant lr for quick experiments, cosine or step decay for final training runs, warmup whenever batch size or model size makes early steps fragile. An exam answer should name at least three schedules, give one formula, and justify decay by the exploration-to-polishing story.",
            ],
            bullets: [
              "Linear regression gradient: (2/n) sum x_i(w x_i - y_i); worked first step from w = 0 with lr 0.05 gives 0.933 toward the true 2.",
              "Closed form exists (normal equations w = (X^T X)^{-1} X^T y); GD is the scalable iterative alternative.",
              "Logistic regression gradient: (1/n) sum (p_i - y_i) x_i; no closed form; solved by L-BFGS or SGD.",
              "scikit-learn's LogisticRegression defaults to solver='lbfgs' - quasi-Newton in a one-line API.",
              "Step decay example: lr = 0.1 * 0.5^floor(epoch/5) halves the rate every 5 epochs.",
              "Cosine annealing: lr_t = lr_min + (lr0 - lr_min)(1 + cos(pi t/T))/2; warmup for large-batch/transformer stability.",
              "Decay rationale: big steps explore early, small steps average out SGD noise and polish near the optimum.",
            ],
            table: {
              caption: "Gradient descent on linear regression, data (1,2),(2,4),(3,6), lr = 0.05, b fixed at 0.",
              headers: ["Step", "w", "grad(w)", "MSE"],
              rows: [
                ["0", "0.000", "-18.67", "18.67"],
                ["1", "0.933", "-11.11", "5.93"],
                ["2", "1.489", "-6.61", "1.88"],
                ["3", "1.819", "-3.93", "0.60"],
                ["6", "2.116", "-0.85", "0.03"],
                ["10", "2.036", "-0.06", "0.0002"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Picking a learning-rate schedule",
              caption:
                "Match the schedule to the training regime, not to fashion.",
              start: "You must train a model end to end",
              branches: [
                { label: "Quick prototype or convex problem", outcome: "constant lr; simple, reproducible, easy to debug", good: true },
                { label: "Final vision run with ResNet-style model", outcome: "cosine annealing over the full epoch budget", good: true },
                { label: "Large batch or transformer training", outcome: "linear warmup then cosine or inverse-sqrt decay", good: true },
                { label: "SGD on convex problem needing guarantees", outcome: "decay proportional to 1/t for theoretical convergence", good: true },
              ],
            },
            callout: {
              type: "exam",
              title: "Same gradient shape, different problems",
              body: "The single most reusable derivation in this unit: both linear regression (MSE) and logistic regression (cross-entropy with sigmoid) have gradient (1/n) sum (prediction - label) * x. Derive each once, note the shared structure, and you can answer 'derive and compare the gradient updates of linear and logistic regression' - a perennial 7-mark question - in half a page.",
            },
            keyTerms: [
              { term: "Normal equations", definition: "Closed-form least-squares solution w = (X^T X)^{-1} X^T y; exact but costly for wide X." },
              { term: "Residual gradient", definition: "The (prediction - label) * x form shared by linear and logistic regression updates." },
              { term: "Step decay", definition: "Multiplying lr by gamma (e.g. 0.5) every k epochs during training." },
              { term: "Cosine annealing", definition: "Smooth lr decay following a half cosine wave over the total training length T." },
              { term: "Warmup", definition: "Ramping lr from near zero over the first few hundred steps to stabilize early training." },
            ],
            examQuestions: [
              {
                q: "Derive the gradient descent updates for linear regression with MSE and logistic regression with cross-entropy, perform the first two iterations on the dataset (1,2),(2,4),(3,6) with w starting at 0, b = 0 and lr = 0.05, and explain why logistic regression has no closed-form solution.",
                marks: 7,
                outline: [
                  "Linear gradient: dJ/dw = (2/n) sum x_i(w x_i + b - y_i); set b = 0.",
                  "At w = 0: grad = -(2/3)(2 + 8 + 18) = -18.67, so w1 = 0 + 0.05*18.67 = 0.933.",
                  "Second step: grad = -(2/3)(1*(2-0.933) + 2*(4-1.866) + 3*(6-2.799)) = -6.6..., w2 = 1.46.",
                  "Logistic: p = sigmoid(w x), dCE/dw = (1/n) sum (p_i - y_i) x_i - same residual form.",
                  "Explain the sigmoid nonlinearity makes the CE objective non-quadratic: no normal-equations analogue.",
                  "Mention solvers: L-BFGS (sklearn default) for medium data, SGD/Adam for large data.",
                  "Conclude with the shared-structure observation and the role of feature standardization.",
                ],
              },
              {
                q: "Write the cosine annealing schedule formula and state what problem warmup solves.",
                marks: 2,
              },
              {
                q: "Why does a decaying learning rate improve SGD convergence near the optimum?",
                marks: 3,
              },
            ],
          },
        ],
      },
    },
    // ---------------------------------------------------------------- III
    {
      number: 3,
      roman: "III",
      title: "Second-Order and Advanced Methods",
      summary:
        "What lies beyond the gradient: Newton's method uses curvature for quadratic convergence at quadratic cost, BFGS and L-BFGS approximate the curvature cheaply, line search and trust regions decide how far to step, coordinate and proximal methods handle huge and non-smooth objectives, and a practical toolkit tames vanishing gradients, unscaled features and overfitting.",
      chapter: {
        number: "03",
        title: "Curvature, Trust and Sparsity",
        intro:
          "Unit III upgrades the first-order toolbox. Newton's method divides the step by the Hessian and converges quadratically - when the d-by-d Hessian is affordable, which for deep nets it is not. Quasi-Newton methods (BFGS, L-BFGS) rebuild curvature from gradient history at O(d) memory. Line search and trust region machinery decide step lengths safely. Coordinate descent and proximal gradient handle high dimensions and non-smooth penalties like L1. The unit closes with the practical issues every real training run meets: vanishing and exploding gradients, feature scaling and early stopping.",
        inOneBreath:
          "Newton's method updates x := x - H^{-1} grad and doubles the digits of accuracy per step near the optimum, but stores and factorizes a d x d Hessian (O(d^2) memory, O(d^3) time) - impossible at d = 10,000; BFGS builds an approximate inverse Hessian from successive gradient differences satisfying the secant condition, and L-BFGS keeps only the last m pairs, costing O(md) per step; line search picks alpha along the descent direction using backtracking on the Armijo condition f(x + alpha p) <= f(x) + c1 alpha grad^T p; trust region methods instead restrict the step to a ball of radius Delta and expand or shrink Delta based on the agreement ratio between actual and predicted decrease; coordinate descent optimizes one variable at a time with O(n) per-coordinate updates; the proximal gradient method splits smooth f and non-smooth g and applies soft-thresholding S(z) = sign(z) max(|z| - lr lam, 0) for L1; vanishing gradients come from saturation factors like 0.25^10, exploding gradients from norm blow-ups tamed by clipping, unscaled features create huge condition numbers, and early stopping halts training when validation loss starts rising.",
        sections: [
          {
            number: "3.1",
            title: "Newton's method and its cost",
            body: [
              "First-order methods treat the function as locally linear; Newton's method treats it as locally quadratic. The quadratic model around x is f(x + p) approximately f(x) + grad^T p + (1/2) p^T H p, minimized by p* = -H^{-1} grad, giving the update x := x - H^{-1} grad J(x). Where gradient descent walks a fixed slope, Newton walks straight to the minimum of the local quadratic model. On a genuinely quadratic function the step is exact: f(x) = x^2 has H = 2, so the update is x := x - (2x)/2 = x/2, and from x = 10 the iterates are 10, 5, 2.5, 1.25 - factor 1/2 each step, because a pure quadratic in one dimension takes this scaled form.",
              "The famous quadratic convergence appears near a minimum of a nonlinear function: the number of correct digits roughly doubles every iteration. Worked example on f(x) = x^2 + sin(x), starting at x = 3. Gradient 2x + cos(x) = 6.073, Hessian 2 - sin(x) = 1.859, Newton step: x1 = 3 - 6.073/1.859 = -0.266. One step jumps from 3 to near the minimum at about -0.45 (where 2x + cos x = 0 gives x = -0.4502) - gradient descent with a safe lr of 0.3 would need a dozen cautious steps for the same territory. That jump quality is why Newton is the textbook answer to 'which method converges fastest'.",
              "The cost is the catch. The Hessian of a d-parameter model has d^2 entries: at d = 10,000 that is 100 million numbers (400 MB in float32), and solving the linear system H p = -grad costs O(d^3) = 10^12 operations - hours per step, per step. Deep networks with millions of parameters are hopeless for exact Newton. Three repairs exist and are examinable: regularized Newton adds lam*I to H for stability when the Hessian is not positive definite; Gauss-Newton and its special case Levenberg-Marquardt exploit least-squares structure to avoid forming H; and quasi-Newton methods (next section) approximate H^{-1} from gradients alone.",
              "Where Newton genuinely shines: medium-dimensional convex problems with cheap Hessians, logistic regression fits in hundreds of features, and as the theoretical yardstick of convergence speed. It also explains a piece of everyday practice - scikit-learn calling L-BFGS - since quasi-Newton methods exist precisely to inherit Newton's speed without its memory bill. An exam answer should state the update rule, prove the quadratic-convergence claim qualitatively via the local quadratic model, give the cost accounting d^2 storage and d^3 solve, and name one repair (regularized Newton, Gauss-Newton, or BFGS).",
            ],
            bullets: [
              "Quadratic model: f(x + p) ~ f(x) + grad^T p + (1/2) p^T H p; minimizer p* = -H^{-1} grad.",
              "Update rule: x := x - H^{-1} grad J(x).",
              "On a quadratic the step is exact: f = x^2 gives x := x/2; trace 10, 5, 2.5, 1.25.",
              "Quadratic convergence: correct digits roughly double per iteration near a minimum.",
              "Worked nonlinear step on f = x^2 + sin(x) from x = 3: x1 = 3 - 6.073/1.859 = -0.266, near the true minimum -0.4502.",
              "Cost: d^2 entries to store, O(d^3) to solve; d = 10,000 means 100M entries and 10^12 operations.",
              "Repairs: regularized Newton (H + lam I), Gauss-Newton / Levenberg-Marquardt for least squares, quasi-Newton approximations.",
            ],
            table: {
              caption: "Newton vs gradient descent on f(x) = x^2 from x = 10.",
              headers: ["Step k", "Newton x_k", "GD x_k (lr = 0.2)", "GD x_k (lr = 0.1)"],
              rows: [
                ["0", "10", "10", "10"],
                ["1", "5", "6", "8"],
                ["2", "2.5", "3.6", "6.4"],
                ["3", "1.25", "2.16", "5.12"],
                ["5", "0.3125", "0.7776", "3.28"],
                ["10", "0.0098", "0.107", "1.07"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "First-order versus second-order information",
              caption:
                "Newton pays in linear algebra what it saves in iterations.",
              left: {
                heading: "Gradient descent",
                items: [
                  "uses grad only: O(d) memory",
                  "one matvec per step",
                  "linear convergence, factor 1 - 1/kappa",
                  "sensitive to lr and conditioning",
                  "scales to millions of parameters",
                ],
              },
              right: {
                heading: "Newton's method",
                items: [
                  "uses grad + Hessian: O(d^2) memory",
                  "O(d^3) linear solve per step",
                  "quadratic convergence near optimum",
                  "needs H PSD; else regularize",
                  "practical only for small/medium d",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Cost accounting is the differentiator",
              body: "Anyone can write x := x - H^{-1} grad. Full marks need the numbers: d = 10,000 gives 10^8 Hessian entries and 10^12 solve operations, versus O(d) for a gradient step. Pair the arithmetic with the digit-doubling convergence claim and one named repair (regularized Newton or BFGS) and the answer is complete.",
            },
            keyTerms: [
              { term: "Quadratic model", definition: "Second-order Taylor approximation of f around the current point, minimized by a Newton step." },
              { term: "Newton step", definition: "p* = -H^{-1} grad: the exact minimizer of the local quadratic model." },
              { term: "Quadratic convergence", definition: "Error at step k+1 bounded by a constant times error_k squared; digits double per iteration." },
              { term: "Regularized Newton", definition: "Solving with H + lam I to force positive definiteness and stable steps." },
              { term: "Levenberg-Marquardt", definition: "Gauss-Newton with a damping term interpolating between gradient descent and Newton for least squares." },
            ],
            examQuestions: [
              {
                q: "Derive Newton's method from the quadratic Taylor model, show its behaviour on f(x) = x^2, demonstrate one nonlinear iteration on f(x) = x^2 + sin(x) from x = 3, and analyse the storage and time cost that prevents its use on deep networks.",
                marks: 7,
                outline: [
                  "Write the quadratic model f(x + p) ~ f(x) + grad^T p + (1/2) p^T H p.",
                  "Set the model gradient grad + H p to zero, giving p* = -H^{-1} grad.",
                  "Pure quadratic case: f = x^2, H = 2, update x := x/2; trace 10, 5, 2.5, 1.25.",
                  "Nonlinear case: grad = 2x + cos x = 6.073, H = 2 - sin x = 1.859 at x = 3, so x1 = -0.266.",
                  "State quadratic convergence: digits double per step near a minimum; compare with GD's linear rate.",
                  "Cost analysis: d^2 storage (10^8 at d = 10^4) and O(d^3) = 10^12 operations for the solve.",
                  "Name repairs: regularized Newton, Gauss-Newton / Levenberg-Marquardt, quasi-Newton BFGS/L-BFGS.",
                ],
              },
              {
                q: "How many entries does the Hessian of a model with 20,000 parameters have, and roughly what memory is that in float32?",
                marks: 2,
              },
              {
                q: "What goes wrong if Newton's method is applied at a point where the Hessian has a negative eigenvalue?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.2",
            title: "Quasi-Newton methods: BFGS and L-BFGS",
            body: [
              "Quasi-Newton methods want Newton's speed without Newton's algebra bill. The idea: never form the Hessian; instead learn an approximation B to it (or H to its inverse) from the sequence of gradients observed while descending. After a step from x_k to x_{k+1} with gradient change y = grad(x_{k+1}) - grad(x_k) and step s = x_{k+1} - x_k, curvature along that step is summarized by the secant condition: B_{k+1} s = y (equivalently H_{k+1} y = s). Each iteration refines the approximation with one more (s, y) pair, so the method accumulates second-order knowledge from first-order information.",
              "BFGS (Broyden-Fletcher-Goldfarb-Shanno) is the standard update realizing this idea. Given inverse-Hessian estimate H_k, it sets H_{k+1} = (I - rho s y^T) H_k (I - rho y s^T) + rho s s^T with rho = 1/(y^T s), which is the closest matrix to H_k satisfying the secant condition and preserving symmetry and positive definiteness whenever y^T s > 0. The step uses p = -H_k grad, no matrix factorization, only rank-2 updates costing O(d^2) per iteration. BFGS converges superlinearly - faster than any linear rate, though short of Newton's quadratic - and is the default general-purpose solver in scientific libraries.",
              "L-BFGS (limited-memory BFGS) attacks the remaining O(d^2) memory. Instead of storing the d x d matrix H_k, it stores only the last m pairs (s, y) - typically m = 5 to 20 - and reconstructs the implicit H_k action by a short two-loop recursion over those pairs whenever a step is needed. Memory falls to O(m*d): at d = 100,000 and m = 10 that is a million numbers instead of ten billion. Per-iteration cost is O(m*d). This is why scikit-learn's LogisticRegression defaults to solver='lbfgs' and why L-BFGS is the workhorse for medium-scale convex problems in the 10^3 to 10^5 parameter range.",
              "Positioning the methods is the exam's comparative ask. Use L-BFGS when: the dataset fits in memory, gradients are computable exactly, the problem is smooth and mostly convex, and parameter count is in the thousands to hundreds of thousands - logistic regression, small factorization models, classical ML pipelines. Do not use it when: data is huge (stochastic methods win), the objective is non-smooth (proximal methods, Section 3.5), or parameters are in the millions (SGD-family). BFGS/L-BFGS also need a line search (Section 3.3) to guarantee that y^T s stays positive so the curvature estimate remains valid - the three sections of this unit interlock deliberately.",
            ],
            bullets: [
              "Secant condition: B_{k+1} s = y with s the step and y the gradient change - curvature from history.",
              "BFGS update: H_{k+1} = (I - rho s y^T) H_k (I - rho y s^T) + rho s s^T, rho = 1/(y^T s).",
              "BFGS keeps symmetry and positive definiteness when y^T s > 0; needs a line search to ensure it.",
              "Convergence: superlinear - between linear (GD) and quadratic (Newton).",
              "L-BFGS stores only the last m (s, y) pairs and rebuilds the step by a two-loop recursion.",
              "Memory O(m*d) vs BFGS O(d^2): at d = 100,000, m = 10, about 10^6 numbers vs 10^10.",
              "Where used: sklearn LogisticRegression(solver='lbfgs'), medium convex problems, classical ML.",
            ],
            table: {
              caption: "Second-order family cost and convergence comparison.",
              headers: ["Method", "Memory", "Cost per step", "Rate", "Typical scale"],
              rows: [
                ["Gradient descent", "O(d)", "O(d)", "linear", "any"],
                ["L-BFGS (m = 10)", "O(m*d)", "O(m*d)", "superlinear", "10^3 - 10^5 params"],
                ["BFGS", "O(d^2)", "O(d^2)", "superlinear", "up to ~10^3 params"],
                ["Newton", "O(d^2) + factorization", "O(d^3)", "quadratic", "up to ~10^3 params"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "One L-BFGS iteration",
              caption:
                "The curvature matrix never exists explicitly - only the last m (s, y) pairs do.",
              stages: [
                { label: "Collect last m pairs (s, y)", note: "steps and gradient changes" },
                { label: "Two-loop recursion", note: "apply implicit H_k to -grad" },
                { label: "Direction p", note: "curvature-aware, no matrix stored" },
                { label: "Line search alpha", note: "keeps y^T s > 0" },
                { label: "Append new (s, y), drop oldest", note: "sliding window of memory" },
              ],
            },
            callout: {
              type: "tip",
              title: "Anchor the answer on the secant condition",
              body: "Define B_{k+1} s = y in one line, explain that it encodes 'the curvature observed along the step just taken', then contrast BFGS (full O(d^2) matrix, rank-2 update) with L-BFGS (m remembered pairs, O(md)). Cite sklearn's lbfgs default as evidence of practical importance - examiners reward the real-world connection.",
            },
            keyTerms: [
              { term: "Secant condition", definition: "B s = y relating the Hessian approximation to an observed step s and gradient change y." },
              { term: "BFGS", definition: "Quasi-Newton method updating an inverse-Hessian estimate by a rank-2 formula each iteration." },
              { term: "L-BFGS", definition: "Limited-memory BFGS keeping only the last m (s, y) pairs; O(md) memory and cost." },
              { term: "Two-loop recursion", definition: "The L-BFGS procedure that applies the implicit inverse Hessian using stored pairs." },
              { term: "Superlinear convergence", definition: "Faster than any fixed geometric rate, though slower than Newton's digit doubling." },
            ],
            examQuestions: [
              {
                q: "Explain the motivation for quasi-Newton methods, state the secant condition, outline the BFGS update and its properties, and describe how L-BFGS reduces memory from O(d^2) to O(md). Compare the convergence rates of GD, BFGS and Newton.",
                marks: 7,
                outline: [
                  "Motivation: Newton converges fastest but costs O(d^2) memory and O(d^3) time.",
                  "Secant condition B_{k+1} s = y from the gradient difference across the last step.",
                  "BFGS update formula with rho = 1/(y^T s); symmetry and positive definiteness preserved when y^T s > 0.",
                  "Cost per BFGS iteration O(d^2), no factorization; superlinear convergence.",
                  "L-BFGS: store only m recent (s, y) pairs; reconstruct the direction via the two-loop recursion.",
                  "Numbers: d = 100,000, m = 10 gives about 10^6 stored values vs 10^10 for a full matrix.",
                  "Rate ladder: GD linear (1 - 1/kappa), BFGS/L-BFGS superlinear, Newton quadratic; mention the lbfgs solver default.",
                ],
              },
              {
                q: "Why must BFGS be paired with a line search that enforces sufficient decrease?",
                marks: 2,
              },
              {
                q: "You must fit logistic regression with 50,000 features on data that fits in RAM. Which solver and why?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.3",
            title: "Line search methods",
            body: [
              "A descent method needs two decisions per step: the direction p and the length alpha. So far alpha was the fixed learning rate; line search makes it adaptive. Given a descent direction (grad^T p < 0), the function phi(alpha) = f(x + alpha*p) is a one-dimensional problem: too small wastes the step, too large climbs the hill on the other side of the valley. Exact minimization of phi is wasteful, so practical methods use inexact conditions that guarantee real progress per step while staying cheap.",
              "The Armijo (sufficient decrease) condition is the workhorse: accept alpha only if f(x + alpha p) <= f(x) + c1 * alpha * grad^T p, with c1 typically 0.0001 to 0.01. Since grad^T p < 0, the right side is below f(x): the condition demands the actual decrease to be at least a fraction c1 of the linear prediction. Backtracking line search enforces it by trial: start with alpha = 1 and repeatedly multiply by a shrink factor tau = 0.5 until Armijo holds. The total cost is a few function evaluations - far cheaper than exact minimization - and it adapts automatically: steep terrain forces small steps, gentle terrain allows long ones.",
              "A complete worked example: minimize f(x) = x^2 at x = 3, so the steepest-descent direction is p = -grad = -6. Try alpha = 1: new point x = 3 - 6 = -3, f = 9 vs the Armijo bound 9 + 0.25*1*(3)(-6) = 9 - 4.5 = 4.5; 9 > 4.5, reject. Backtrack alpha = 0.5: x = 3 - 3 = 0, f = 0 <= 4.5, accept. One backtrack cycle landed exactly on the minimum. The same machinery on the earlier lr = 1.1 disaster (Section 2.1) would have rejected the too-long step automatically - line search is the principled answer to 'how do I choose the step without guessing'.",
              "The Wolfe conditions extend Armijo with a curvature requirement: the new slope along p must not have decreased too much (alpha chosen so the directional derivative exceeds c2 * grad^T p, c2 in (0.1, 0.9)). Curvature conditions matter because quasi-Newton methods need y^T s > 0 to keep their Hessian estimates positive definite - this is exactly why BFGS implementations use Wolfe line searches, not bare backtracking. Exam answer skeleton: define the descent direction requirement, state Armijo with c1, walk one backtracking iteration numerically, then connect Wolfe curvature to quasi-Newton validity. That chain hits every marking point on typical RGPV papers.",
            ],
            bullets: [
              "Descent direction requirement: grad^T p < 0 guarantees some improvement for small enough alpha.",
              "Armijo condition: f(x + alpha p) <= f(x) + c1 alpha grad^T p with c1 ~ 0.0001-0.01.",
              "Backtracking: try alpha = 1, multiply by tau = 0.5 until Armijo passes; a few evaluations per step.",
              "Worked case: f = x^2 at x = 3, p = -6; alpha = 1 rejected (9 > 4.5), alpha = 0.5 accepted (0 <= 4.5).",
              "Line search adapts to terrain: long steps on gentle slopes, short steps near steep walls.",
              "Wolfe conditions add a curvature clause keeping the new slope from dropping too much.",
              "Connection: Wolfe line search keeps y^T s > 0, protecting BFGS positive definiteness.",
            ],
            table: {
              caption: "Backtracking trial log for f(x) = x^2 at x = 3, p = -6, c1 = 0.25.",
              headers: ["Trial alpha", "New x", "f(x_new)", "Armijo bound", "Verdict"],
              rows: [
                ["1.0", "-3", "9.0", "4.5", "reject"],
                ["0.5", "0", "0.0", "4.5", "accept - step taken"],
                ["0.25", "1.5", "2.25", "4.5", "(would also pass)"],
                ["0.125", "2.25", "5.06", "4.5", "reject - too timid"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "One backtracking line search",
              caption:
                "Halve until the decrease is real; the loop almost always exits within a few trials.",
              steps: [
                { label: "Set alpha = 1", note: "optimistic full Newton/quasi-Newton step" },
                { label: "Evaluate f(x + alpha p)", note: "one function evaluation" },
                { label: "Test Armijo bound", note: "f_new <= f + c1 alpha grad^T p" },
                { label: "Pass: take the step", note: "move x, continue to next direction" },
                { label: "Fail: alpha := tau * alpha", note: "halve and retest" },
              ],
            },
            callout: {
              type: "exam",
              title: "Show one rejected and one accepted trial",
              body: "The line-search marks are in the trial table. Compute the Armijo bound once (f + c1 alpha grad^T p), show alpha = 1 failing and alpha = 0.5 passing with numbers. Students who only quote the inequality lose the application marks; the table proves you can run the algorithm.",
            },
            keyTerms: [
              { term: "Line search", definition: "Choosing the step length alpha along a fixed descent direction." },
              { term: "Armijo condition", definition: "Sufficient-decrease test requiring decrease of at least c1 times the linear prediction." },
              { term: "Backtracking", definition: "Start alpha at 1 and shrink by tau until the Armijo condition holds." },
              { term: "Wolfe conditions", definition: "Armijo plus a curvature clause on the new directional derivative." },
              { term: "Directional derivative", definition: "grad^T p, the initial slope of f along direction p; negative means descent." },
            ],
            examQuestions: [
              {
                q: "Explain inexact line search with the Armijo condition and backtracking. Perform the trials for f(x) = x^2 at x = 3 with p = -6, c1 = 0.25 and tau = 0.5, and state why Wolfe curvature conditions are required by quasi-Newton methods.",
                marks: 7,
                outline: [
                  "Motivate: fixed lr is a guess; line search adapts alpha to the local terrain.",
                  "Descent direction check: grad^T p = 3*(-6) = -18 < 0.",
                  "Armijo bound at alpha = 1: f + c1*alpha*grad^T p = 9 + 0.25*(-18) = 4.5.",
                  "Trial alpha = 1: f(3 - 6) = f(-3) = 9 > 4.5 - reject, backtrack.",
                  "Trial alpha = 0.5: f(3 - 3) = f(0) = 0 <= 4.5 - accept, move to x = 0.",
                  "Summarize the loop and its cost (a few evaluations) and adaptive behaviour.",
                  "Wolfe curvature: keeps the new slope from decreasing too much so y^T s > 0, preserving BFGS positive definiteness.",
                ],
              },
              {
                q: "State the sufficient-decrease (Armijo) inequality and the meaning of c1.",
                marks: 2,
              },
              {
                q: "Given grad^T p = -10, f = 20, c1 = 0.1, alpha = 0.5, what is the Armijo bound the new function value must beat?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.4",
            title: "Trust region methods",
            body: [
              "Line search fixes the direction first and asks how far to go. Trust region methods invert the logic: fix a radius Delta around the current point where the local model is trusted, find the best step inside that ball, then use the outcome to resize the ball. Formally, minimize the quadratic model m(p) = f(x) + grad^T p + (1/2) p^T H p subject to |p| <= Delta. The constraint prevents the classic Newton failure of trusting the quadratic model far outside the region where it resembles f - exactly what causes wild steps on non-convex terrain.",
              "The feedback loop is the heart of the method. After computing the trial step p and evaluating the true function at x + p, compute the agreement ratio rho = (f(x) - f(x + p)) / (f(x) - m(p)): actual decrease divided by model-predicted decrease. rho near 1 means the model is faithful - accept the step and expand, Delta := 2*Delta. rho positive but small means the model overpromised - accept but shrink, Delta := 0.5*Delta. rho negative means the step climbed uphill - reject it, keep x, shrink Delta sharply. The loop self-tunes: big confident strides on easy terrain, careful probes on tricky curvature.",
              "Worked numbers make the policy concrete. Suppose f(x) = 25 at the current point, the model predicts decrease 4 (m predicts f = 21), and the true value at the trial point is 21.5. Then rho = (25 - 21.5)/4 = 0.875 - accept, and since 0.875 > 0.8 the radius doubles. If instead the true value were 24.2, rho = 0.8/4 = 0.2 - accept the (still real) progress but shrink Delta. If the true value were 26, rho = -0.25 - reject and shrink. Typical thresholds are accept if rho > 0.1, expand if rho > 0.75 to 0.9. Two evaluations per iteration (f and grad at the trial point) buy this entire safety mechanism.",
              "Comparing the two philosophies completes the picture. Line search: direction fixed, length searched - natural when the direction is reliable (quasi-Newton with Wolfe conditions). Trust region: length capped first, direction and length solved jointly inside the ball - robust when the model is unreliable (non-convex regions, near saddle points, negative-curvature Hessians). Modern connections: Levenberg-Marquardt is a trust-region-flavoured damped Newton; deep-learning learning-rate schedules are crude global versions of 'trust less as the model sharpens'; and the rho-ratio accept/reject idea reappears verbatim in policy-gradient reinforcement learning algorithms. An exam answer should define m(p), the constraint, rho, and the resize policy with numbers.",
            ],
            bullets: [
              "Trust region subproblem: minimize m(p) = f(x) + grad^T p + (1/2) p^T H p subject to |p| <= Delta.",
              "Agreement ratio rho = actual decrease / predicted decrease judges the model after each trial.",
              "Policy: rho > 0.75-0.9 accept and expand (Delta x 2); 0.1 < rho < 0.75 accept and shrink (Delta x 0.5); rho <= 0 reject and shrink.",
              "Worked ratio: predicted drop 4, actual drop 3.5 gives rho = 0.875 - expand; actual drop 0.8 gives rho = 0.2 - shrink.",
              "Trust regions prevent Newton's classic failure of over-trusting the quadratic model far from x.",
              "Robust where curvature is unreliable: non-convex regions, saddle neighbourhoods, indefinite Hessians.",
              "Levenberg-Marquardt = damped/trust-region Newton for least squares; the rho idea recurs in RL policy updates.",
            ],
            table: {
              caption: "Trust region decisions for a predicted decrease of 4 from f = 25.",
              headers: ["True f at trial", "Actual decrease", "rho", "Decision", "New Delta"],
              rows: [
                ["21.5", "3.5", "0.875", "accept + expand", "Delta x 2"],
                ["23.0", "2.0", "0.500", "accept, keep size", "unchanged"],
                ["24.2", "0.8", "0.200", "accept + shrink", "Delta x 0.5"],
                ["26.0", "-1.0", "-0.250", "reject + shrink", "Delta x 0.25"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "One trust region iteration",
              caption:
                "The radius is state the algorithm maintains - the learning-rate analogue done adaptively.",
              steps: [
                { label: "Build quadratic model m(p)", note: "grad and H at current x" },
                { label: "Solve min m(p) s.t. |p| <= Delta", note: "step inside the trusted ball" },
                { label: "Evaluate true f at trial point" },
                { label: "Compute rho = actual/predicted", note: "agreement ratio" },
                { label: "Accept/reject and resize Delta", note: "expand on rho > 0.8, shrink otherwise" },
              ],
            },
            callout: {
              type: "exam",
              title: "Line search vs trust region in one sentence each",
              body: "The compare question is inevitable. Line search: fix p, search alpha along a ray, guarantee decrease by the Armijo test. Trust region: cap the length with Delta first, solve a constrained quadratic subproblem, then judge the model with the ratio rho and resize. Lead with 'order of decisions differs' - examiners look for that framing before the details.",
            },
            keyTerms: [
              { term: "Trust region radius Delta", definition: "The size of the ball inside which the quadratic model is believed." },
              { term: "Agreement ratio rho", definition: "Actual decrease divided by model-predicted decrease; drives accept/reject and resizing." },
              { term: "Subproblem", definition: "Minimizing the quadratic model subject to the radius constraint." },
              { term: "Model fidelity", definition: "How closely the quadratic model matches true function behaviour near x." },
              { term: "Levenberg-Marquardt", definition: "Damped least-squares Newton behaving like a trust region method via the damping parameter." },
            ],
            examQuestions: [
              {
                q: "Describe the trust region framework: the constrained quadratic subproblem, the agreement ratio rho, and the accept/reject/resize policy. Illustrate with a predicted decrease of 4 and actual decreases of 3.5, 0.8 and -1.0. Contrast the philosophy with line search.",
                marks: 7,
                outline: [
                  "Define m(p) = f + grad^T p + (1/2) p^T H p with constraint |p| <= Delta.",
                  "Explain why the cap protects against unreliable curvature far from x.",
                  "Define rho = (f(x) - f(x + p)) / (f(x) - m(p)).",
                  "Case rho = 3.5/4 = 0.875: model faithful - accept step, expand Delta (x 2).",
                  "Case rho = 0.8/4 = 0.2: real but weaker progress - accept, shrink Delta (x 0.5).",
                  "Case rho = -1/4 = -0.25: uphill - reject the step, shrink sharply (x 0.25).",
                  "Contrast: line search fixes direction then length; trust region caps length first and judges the model - robust for indefinite Hessians.",
                ],
              },
              {
                q: "What does a value rho = 1.0 tell you about the quadratic model?",
                marks: 2,
              },
              {
                q: "Why are trust region methods preferred near saddle points with indefinite Hessians?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.5",
            title: "Coordinate descent and the proximal gradient method",
            body: [
              "Coordinate descent (CD) sidesteps the gradient entirely: optimize one variable at a time, holding the rest fixed, and cycle through coordinates. For linear regression the per-coordinate update has closed form. With residual r = y - sum over j of x_j w_j (current predictions' error), the optimal single-coordinate value is w_j := (x_j^T r + x_j^T x_j w_j) / (x_j^T x_j) - the least-squares solution along that one axis. Each update costs O(n) (one dot product plus one axpy), no gradients over the whole parameter vector, no Hessian - at d = 1,000,000 features this is the only family that stays light.",
              "CD's killer application is the L1-regularized problem, which breaks gradient methods: |w| has no derivative at 0.glmnet (R) and LIBLINEAR use CD for exactly this reason. The trick: incorporate the L1 penalty into the per-coordinate closed form, producing soft-thresholding - update w_j toward its least-squares value, then shrink it by the penalty amount and clip at zero: w_j := S(z_j, lr*lam) where S(z, t) = sign(z) * max(|z| - t, 0). A coordinate whose unregularized optimum is smaller than the threshold is set exactly to zero, which is how lasso produces sparse models with whole features eliminated rather than merely shrunk.",
              "The proximal gradient method generalizes that trick to any objective split as J(w) = f(w) + g(w), with f smooth (its gradient is available) and g non-smooth but simple (L1 norm, constraints). One iteration is two half-steps: a gradient step on f, w_temp := w - lr * grad f(w), followed by the proximal step w := prox(w_temp) = argmin_z g(z) + (1/(2*lr))|z - w_temp|^2. For g(w) = lam*|w|_1 the prox operator IS soft-thresholding S(w_temp, lr*lam). Worked numbers with lr = 0.1 and lam = 1: a gradient step landing at w_temp = 0.5 gets thresholded to 0.5 - 0.1 = 0.4; w_temp = 0.05 gets crushed to 0. This interplay is why lasso coefficients come out exactly zero.",
              "Comparing the two closes the section. Coordinate descent: no gradient of the full objective needed, natural fit to sparse data and L1, sequential in nature, per-coordinate cost O(n); great for lasso, elastic net and linear SVMs. Proximal gradient: keeps the familiar gradient machinery for the smooth part, isolates the non-smooth part in a computable prox operator, parallelizes over coordinates, and its accelerated variant FISTA reaches O(1/k^2) rates - the best first-order rate for this problem class. Both exist because plain gradient descent simply cannot handle the non-differentiable |w| at zero; naming that limitation is the first marking point of any lasso-optimization question.",
            ],
            bullets: [
              "Coordinate descent: optimize one w_j at a time with others fixed; per-coordinate closed form for least squares.",
              "Per-coordinate update: w_j := (x_j^T r + x_j^T x_j w_j)/(x_j^T x_j) using the current residual r.",
              "Cost O(n) per coordinate update - the scalable choice at millions of features.",
              "Problem with L1: |w| not differentiable at 0 - plain gradient descent stalls or oscillates there.",
              "Soft-thresholding: S(z, t) = sign(z) max(|z| - t, 0); values inside the threshold become exactly 0.",
              "Proximal gradient: gradient step on smooth f, then prox step for non-smooth g; ISTA/FISTA variants.",
              "Worked shrink: lr = 0.1, lam = 1 turns w_temp = 0.5 into 0.4 and w_temp = 0.05 into 0.",
            ],
            table: {
              caption: "Soft-thresholding S(z, t) with t = 0.1 (lr = 0.1, lam = 1).",
              headers: ["Input z", "Output S(z, t)", "Effect"],
              rows: [
                ["0.500", "0.400", "shrunk toward 0"],
                ["0.150", "0.050", "barely survives"],
                ["0.050", "0.000", "killed - exact sparsity"],
                ["-0.300", "-0.200", "symmetric for negatives"],
                ["0.000", "0.000", "stays 0"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Two routes around the L1 kink",
              caption:
                "Both produce sparse solutions; they differ in what machinery they keep.",
              left: {
                heading: "Coordinate descent",
                items: [
                  "one variable at a time",
                  "closed-form per-coordinate update",
                  "L1 folded into the formula",
                  "O(n) per coordinate, sequential",
                  "used by glmnet and LIBLINEAR",
                ],
              },
              right: {
                heading: "Proximal gradient (ISTA)",
                items: [
                  "full gradient step on smooth f",
                  "prox step for non-smooth g",
                  "prox for L1 = soft-thresholding",
                  "parallelizable, FISTA-accelerated",
                  "generalizes to many penalties",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "Do not differentiate |w| at zero",
              body: "A classic wrong answer claims lasso can be trained by plain gradient descent because 'the derivative of |w| is sign(w)'. At w = 0 there is no derivative - that kink is the entire reason coordinate descent and proximal methods exist. State the non-differentiability first, then present soft-thresholding as the correct handling.",
            },
            keyTerms: [
              { term: "Coordinate descent", definition: "Iteratively minimizing the objective along one coordinate at a time with the others fixed." },
              { term: "Proximal operator", definition: "argmin_z g(z) + (1/(2 lr))|z - w_temp|^2: the non-smooth part's idealized step." },
              { term: "Soft-thresholding", definition: "S(z, t) = sign(z) max(|z| - t, 0); the proximal operator of the L1 norm." },
              { term: "ISTA / FISTA", definition: "Proximal gradient and its accelerated variant reaching O(1/k^2) convergence." },
              { term: "Exact sparsity", definition: "Coefficients set precisely to zero by the threshold, removing features outright." },
            ],
            examQuestions: [
              {
                q: "Explain why L1-regularized problems defeat plain gradient descent, define the proximal gradient method, derive soft-thresholding as the proximal operator of the L1 norm, and illustrate with lr = 0.1, lam = 1 on inputs 0.5 and 0.05.",
                marks: 7,
                outline: [
                  "State the split J(w) = f(w) + lam|w|_1 with f smooth and |w|_1 non-differentiable at 0.",
                  "Explain the kink problem: gradient descent has no defined direction exactly at zero.",
                  "Proximal gradient iteration: w_temp = w - lr grad f(w), then w = prox(w_temp).",
                  "Define prox as argmin_z g(z) + (1/(2lr))|z - w_temp|^2.",
                  "Derive for L1: elementwise minimizer is S(w_temp, lr*lam) = sign(z) max(|z| - lr lam, 0).",
                  "Numerics: lr = 0.1, lam = 1, w_temp = 0.5 maps to 0.4; w_temp = 0.05 maps to 0 - exact sparsity.",
                  "Mention coordinate descent with glmnet/LIBLINEAR and FISTA's O(1/k^2) acceleration.",
                ],
              },
              {
                q: "Compute S(-0.25, 0.1) and S(0.08, 0.1).",
                marks: 2,
              },
              {
                q: "Why does lasso set some coefficients exactly to zero while ridge never does?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.6",
            title: "Practical issues: vanishing/exploding gradients, scaling, early stopping",
            body: [
              "Deep networks train by backpropagation, which multiplies layer-wise derivative factors along the path from loss to early layers. Vanishing gradients occur when those factors are persistently below 1: the classic culprit is the sigmoid, whose derivative is at most 0.25. Through 10 sigmoid layers the gradient scale can shrink by 0.25^10 = 9.5e-7 - a million-fold attenuation, so the earliest layers receive essentially zero learning signal and stop training. Symptoms: early-layer weights barely change, loss plateaus high, deeper layers race ahead. Fixes: ReLU-family activations (derivative 1 on the positive side), careful initialization (Xavier for tanh, He for ReLU), batch normalization (Unit 5.5), residual/skip connections that give gradients a shortcut, and LSTM/GRU gating in recurrent nets.",
              "Exploding gradients are the mirror image: factors above 1 compound until the gradient norm blows up, weights jump wildly, and the loss turns to NaN. An RNN unrolled over 50 time steps with a recurring factor of 1.2 amplifies by 1.2^50 = 9100. The standard practical fix is gradient clipping by norm: if |grad| > threshold (typically 5), rescale grad := grad * (threshold / |grad|). A gradient of norm 50 gets scaled by 5/50 = 0.1 to norm 5, preserving direction but capping magnitude. Clipping by value (clamping each element to a range) is a cruder alternative. Both are one-line additions to the training loop and are standard in RNN and transformer training.",
              "Feature scaling is the quiet precondition of everything in Units I-II. If feature A ranges 0-1 and feature B ranges 0-100,000, the loss surface becomes an extremely elongated ravine: the Hessian eigenvalue along B dwarfs the one along A, so the condition number explodes and gradient descent must crawl with a tiny learning rate (Section 1.5's arithmetic). Standardization x' = (x - mu)/sigma puts every feature at mean 0, variance 1; min-max scaling maps to [0, 1]. Rules: fit the scaler on training data only (no leakage from validation/test), apply the same transform at inference, and skip scaling for tree-based models which are scale-invariant. Neural networks, KNN and any gradient method need it.",
              "Early stopping is regularization for free. Monitor validation loss each epoch; training loss keeps falling while validation loss falls, bottoms out, then rises as the model starts memorizing noise. Stop at the validation minimum (or after patience epochs without improvement) and, in the cleanest variant, restore the best checkpoint. A typical run: validation bottoms at epoch 37, patience 10 stops training at epoch 47. The effect resembles L2 regularization - it keeps weights near their small-magnitude early values - which is why the equivalence is a classic theory question. Together the four tools (activations/init, clipping, scaling, early stopping) form the practical hygiene checklist every real training run performs before blaming the optimizer.",
            ],
            bullets: [
              "Vanishing cause: per-layer factors below 1; sigmoid derivative max 0.25, so 0.25^10 = 9.5e-7 through 10 layers.",
              "Fixes for vanishing: ReLU, He/Xavier init, batch norm, residual connections, gated RNN cells.",
              "Exploding cause: compounding factors above 1 (1.2^50 = 9100 in a 50-step RNN); symptom: NaN loss.",
              "Gradient clipping by norm: if |grad| > 5, rescale by 5/|grad|; direction preserved, magnitude capped.",
              "Feature scaling: standardize x' = (x - mu)/sigma; unscaled ranges create huge condition numbers.",
              "Scaling hygiene: fit the scaler on training data only; trees do not need scaling.",
              "Early stopping: halt at the validation-loss minimum (patience window); acts like L2 regularization.",
            ],
            table: {
              caption: "Four practical failure modes and their standard repairs.",
              headers: ["Symptom", "Likely cause", "Diagnosis clue", "Standard fix"],
              rows: [
                ["Early layers never learn", "vanishing gradients", "sigmoid/tanh stack, flat early grads", "ReLU + He init + batch norm"],
                ["Loss becomes NaN", "exploding gradients", "huge grad norm before the jump", "clip norm at 5, lower lr"],
                ["GD crawls despite good lr theory", "unscaled features", "kappa huge; one feature range 0-100000", "standardize features"],
                ["Val loss rises while train loss falls", "overfitting", "diverging train/val curves", "early stopping + regularization"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Where each fix acts in the training stack",
              caption:
                "Diagnose the layer, apply the matching repair - a checklist you can redraw.",
              layers: [
                { label: "Data layer", note: "standardize features; fit scaler on train split only" },
                { label: "Model layer", note: "ReLU + He init + residual connections against vanishing gradients" },
                { label: "Update layer", note: "clip gradient norm at 5 against explosion; schedule the lr" },
                { label: "Training loop layer", note: "monitor validation loss; early stopping with patience" },
              ],
            },
            callout: {
              type: "tip",
              title: "The 0.25^10 calculation is exam gold",
              body: "Memorize the chain: sigmoid' <= 0.25, ten layers give 0.25^10 = 9.5e-7, so the first layer's gradient is a millionth of the loss gradient - that single computation answers 'why do deep sigmoid networks train slowly' completely, and its mirror (1.2^50 = 9100) answers the exploding case.",
            },
            keyTerms: [
              { term: "Vanishing gradient", definition: "Backpropagated gradients shrinking toward zero through layers, freezing early-layer learning." },
              { term: "Exploding gradient", definition: "Backpropagated gradients growing without bound, destabilizing weights toward NaN." },
              { term: "Gradient clipping", definition: "Rescaling the gradient to a maximum norm (typically 5) before applying the update." },
              { term: "Standardization", definition: "Transforming features to zero mean and unit variance using training-set statistics." },
              { term: "Early stopping", definition: "Halting training when validation loss stops improving; an implicit regularizer." },
            ],
            examQuestions: [
              {
                q: "Explain vanishing and exploding gradients with numerical examples, and describe four practical remedies (activation/init choice, gradient clipping, feature scaling, early stopping) with when each applies.",
                marks: 7,
                outline: [
                  "Backprop multiplies per-layer derivative factors; product behaviour explains both phenomena.",
                  "Vanishing example: sigmoid' <= 0.25, ten layers give 0.25^10 = 9.5e-7 - first layers frozen.",
                  "Exploding example: factor 1.2 over 50 RNN steps gives 1.2^50 = 9100; loss goes NaN.",
                  "Remedy 1: ReLU activations + He/Xavier initialization keep factors near 1.",
                  "Remedy 2: clip gradient norm (grad := grad * 5/|grad| when |grad| > 5).",
                  "Remedy 3: standardize features (x - mu)/sigma to shrink the condition number.",
                  "Remedy 4: monitor validation loss and stop with patience; note the L2-regularization analogy.",
                ],
              },
              {
                q: "A gradient has norm 40 and the clip threshold is 5. What vector is actually applied to the weights?",
                marks: 2,
              },
              {
                q: "Why should the scaler be fitted on training data only?",
                marks: 3,
              },
            ],
          },
        ],
      },
    },
    // ----------------------------------------------------------------- IV
    {
      number: 4,
      roman: "IV",
      title: "Constrained Optimization",
      summary:
        "Real problems carry constraints: Lagrange multipliers turn them into stationarity equations, KKT conditions handle inequalities, duality converts min-into-max and prices the constraints, the simplex method walks the vertices of linear programs, and the SVM plus L1/L2 regularization show constraints doing real machine-learning work.",
      chapter: {
        number: "04",
        title: "Optimizing Inside Boundaries",
        intro:
          "Unit IV adds boundaries. Equality constraints are handled by Lagrange multipliers, whose stationarity conditions say the objective gradient must balance against the constraint gradients. Inequality constraints bring the four KKT conditions - stationarity, feasibility, dual feasibility and complementary slackness. Duality swaps the primal minimization for a dual maximization with weak and strong duality theorems. Linear programming and the simplex method give the classical algorithmic backbone, and the whole machinery pays off in the SVM - a constrained quadratic program solved in its dual - and in reading L1/L2 regularization as constrained optimization.",
        inOneBreath:
          "For min f(x) subject to g(x) = 0 form L(x, lam) = f(x) + lam g(x) and set both partials to zero; lambda measures how much the optimal value changes per unit of constraint (the shadow price); for g(x) <= 0 the KKT conditions add dual feasibility lam >= 0 and complementary slackness lam g(x) = 0 - inactive constraints have lambda = 0; weak duality says the dual optimum never exceeds the primal optimum, strong duality (equality) holds for convex problems under Slater's condition; linear programs maximize a linear objective over a polytope and attain optimality at a vertex, which the simplex method exploits by walking edge-to-edge (classic answer: max 3x + 5y over x <= 4, 2y <= 12, 3x + 2y <= 18 gives x = 2, y = 6, value 36); the hard-margin SVM minimizes (1/2)|w|^2 subject to y_i(w.x_i + b) >= 1, its dual depends only on support vectors; L2 regularization equals the constraint |w|^2 <= t and L1 equals |w|_1 <= t, with the L1 diamond's corners producing exact zeros.",
        sections: [
          {
            number: "4.1",
            title: "Equality constraints and Lagrange multipliers",
            body: [
              "Unconstrained minimization is rare; real problems ask for the best point ON a surface, not IN the whole space. The classical machinery: minimize f(x) subject to g(x) = 0. Build the Lagrangian L(x, lam) = f(x) + lam * g(x), where lam is the Lagrange multiplier. At a constrained optimum the gradients must balance: grad_x L = 0 and g(x) = 0. Geometrically, grad f must be parallel to grad g - if they were not, a component of grad f along the constraint surface would exist, and sliding along the surface would improve f, contradicting optimality.",
              "A complete worked example: maximize the area of a rectangle with perimeter fixed at 20, i.e. maximize f(x, y) = x*y subject to g(x, y) = x + y - 10 = 0. Lagrangian L = x*y - lam(x + y - 10). Stationarity: dL/dx = y - lam = 0 and dL/dx = x - lam = 0 (from dL/dy), so y = lam and x = lam, hence x = y. Substituting into the constraint: 2x = 10, x = y = 5, and the maximum area is 25. The symmetric answer is intuitive - the square is optimal - but the multiplier method PROVES it, which is what the exam demands.",
              "The multiplier has a second life as an economic quantity: lam equals the sensitivity of the optimal objective value to the constraint level - the shadow price. In the rectangle example, allowing perimeter 21 instead of 20 raises the best area from 25 to (21/4)^2 = 27.5625, a gain of 2.5625 per unit of perimeter; at the optimum, d(f*)/d(c) with c = 10 gives lam = 5 in the scaled problem (using x + y = c, area (c/2)^2, derivative c/2 = lam at c = 10). This rate interpretation is exactly why dual variables later price SVM margins and why LP duality (Section 4.4) reads as resource pricing.",
              "Exam technique for equality-constrained problems is a fixed five-move dance: write the constraint in g(x) = 0 form; build L = f + lam*g; differentiate L with respect to every x_i and with respect to lam; solve the system (often discovering symmetry like x = y); substitute back to get the optimal value. Watch for sign conventions - some texts write L = f - lam*g, which only flips the sign of lam and changes nothing structural. Multiple constraints generalize cleanly: one multiplier per constraint, L = f + sum lam_i g_i, with the same parallel-gradients geometry",
            ],
            bullets: [
              "Problem form: min f(x) subject to g(x) = 0; Lagrangian L(x, lam) = f(x) + lam g(x).",
              "Stationarity conditions: grad_x L = 0 and g(x) = 0 - grad f parallel to grad g.",
              "Worked example: max x*y with x + y = 10 gives x = y = 5 and area 25.",
              "Shadow price: lam = rate of change of optimal value per unit of constraint relaxation.",
              "Perimeter arithmetic: c = 10 gives area 25; c = 11 gives 30.25; lam = d(area)/dc = c/2 = 5 at c = 10.",
              "Multiple constraints: L = f + sum lam_i g_i, one multiplier each.",
              "Sign conventions (f + lam g vs f - lam g) only flip lam's sign, not the method.",
            ],
            table: {
              caption: "The five-move recipe applied to max x*y with x + y = 10.",
              headers: ["Move", "Action", "This problem"],
              rows: [
                ["1", "Write constraint as g = 0", "g = x + y - 10 = 0"],
                ["2", "Build L = f + lam g", "L = x*y - lam(x + y - 10)"],
                ["3", "Set partials to zero", "y - lam = 0 and x - lam = 0"],
                ["4", "Solve the system", "x = y = lam, so x = y = 5"],
                ["5", "Evaluate the objective", "area = 25"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Solving any equality-constrained problem",
              caption:
                "The same five moves solve every Lagrange multiplier question on the paper.",
              steps: [
                { label: "Restate constraint as g(x) = 0" },
                { label: "Form L = f + lam*g" },
                { label: "Set grad_x L = 0 and g = 0", note: "d equations, d + 1 unknowns" },
                { label: "Solve for x and lam", note: "symmetry often collapses the system" },
                { label: "Report x*, f(x*) and lam", note: "lam is the shadow price" },
              ],
            },
            callout: {
              type: "exam",
              title: "Always report lambda's meaning",
              body: "After computing x*, f* and lam, add one sentence: 'lam is the shadow price - the rate at which the optimal objective improves per unit of relaxed constraint.' It costs five words and converts a solved exercise into a demonstrated understanding, which is where the top-mark band begins.",
            },
            keyTerms: [
              { term: "Lagrangian", definition: "L(x, lam) = f(x) + lam g(x): objective plus multiplier times constraint." },
              { term: "Lagrange multiplier lam", definition: "Unknown weight balancing objective and constraint gradients; equals the shadow price." },
              { term: "Shadow price", definition: "d(optimal value)/d(constraint level): value of slightly relaxing the constraint." },
              { term: "Stationarity", definition: "grad_x L = 0: the balance condition defining constrained critical points." },
              { term: "Parallel gradients", definition: "Geometric statement of the balance: grad f must be a multiple of grad g at the optimum." },
            ],
            examQuestions: [
              {
                q: "State the method of Lagrange multipliers and use it to maximize the area of a rectangle whose perimeter is 20. Interpret the multiplier as a shadow price and verify the sensitivity numerically.",
                marks: 7,
                outline: [
                  "Set up: maximize x*y subject to x + y = 10; write g = x + y - 10 = 0.",
                  "Form the Lagrangian L = x*y - lam(x + y - 10).",
                  "Stationarity: y - lam = 0 and x - lam = 0.",
                  "Deduce x = y = lam; substitute into the constraint to get x = y = 5.",
                  "Optimal area f* = 25; note the square wins over, say, 8x2 = 16.",
                  "Shadow price: with constraint x + y = c the optimum is (c/2)^2; d/dc at c = 10 is 5 = lam.",
                  "Verify numerically: c = 11 raises the optimum from 25 to 30.25, consistent with lam = 5 per unit.",
                ],
              },
              {
                q: "Use Lagrange multipliers to find the point on the line x + y = 4 closest to the origin.",
                marks: 2,
              },
              {
                q: "What does the multiplier lam represent economically in a resource-allocation problem?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.2",
            title: "Inequality constraints and the KKT conditions",
            body: [
              "Inequality constraints g(x) <= 0 are the realistic case - budgets, capacities, margins - and they need more than stationarity. The Karush-Kuhn-Tucker (KKT) conditions generalize Lagrange's two conditions to four. For min f(x) subject to g_i(x) <= 0 (i = 1..m) with Lagrangian L = f + sum lam_i g_i: (1) stationarity, grad_x L = 0; (2) primal feasibility, g_i(x) <= 0 for all i; (3) dual feasibility, lam_i >= 0 for all i; (4) complementary slackness, lam_i * g_i(x) = 0 for all i. For convex problems with a constraint qualification, KKT is not just necessary but sufficient - checking the four conditions certifies global optimality.",
              "Complementary slackness is the condition that carries the logic. It says lam_i * g_i(x) = 0, so for each constraint either the constraint is active (g_i = 0) or its multiplier is zero (lam_i = 0) - never both nonzero. Active constraints press against the solution and price it (lam > 0); inactive constraints are irrelevant bystanders with zero price. Worked example: minimize f(x) = x^2 subject to x >= 1, written in standard form g(x) = 1 - x <= 0. Lagrangian L = x^2 + lam(1 - x). Stationarity: 2x - lam = 0. Case A: lam = 0 gives x = 0, violating feasibility (g = 1 > 0) - rejected. Case B: g = 0 gives x = 1, then lam = 2x = 2 >= 0 - all four KKT conditions hold, so x = 1 with f* = 1 is the certified global optimum.",
              "The two-case structure (active vs inactive) is the exam's favourite pattern and always resolves the same way: try lam = 0, check feasibility; try g = 0, check lam >= 0; exactly one case survives. Intuition check on the same example: unconstrained minimum of x^2 is x = 0, but the constraint forbids it, so the solution sits ON the boundary x = 1 - an active constraint. If instead the constraint were x >= -1 (standard form g = -1 - x <= 0... careful: that is x >= -1 written as x + 1 >= 0 or -x - 1 <= 0), the unconstrained optimum x = 0 is feasible, the constraint is inactive with lam = 0, and the solution ignores it. Same algebra, opposite outcomes - the case analysis detects which world you are in.",
              "The sign convention is where students lose marks, so fix it once: with constraints written g(x) <= 0 and Lagrangian L = f + sum lam_i g_i, dual feasibility is lam >= 0. If your text writes constraints as g(x) >= 0 or the Lagrangian as f - lam*g, the multiplier sign flips - be consistent within one problem and state your convention at the top of the answer. For maximization problems, either convert min(-f) or keep f and flip the inequality handling; the four KKT conditions themselves never change shape. Convexity of f and g makes KKT sufficient as well as necessary - the sentence to quote when the question asks why you may claim global optimality.",
            ],
            bullets: [
              "KKT conditions for min f s.t. g_i(x) <= 0 with L = f + sum lam_i g_i.",
              "(1) Stationarity: grad_x L = 0. (2) Primal feasibility: g_i(x) <= 0.",
              "(3) Dual feasibility: lam_i >= 0. (4) Complementary slackness: lam_i g_i(x) = 0.",
              "Slackness logic: active constraints (g_i = 0) can have lam > 0; inactive ones must have lam = 0.",
              "Worked example: min x^2 s.t. x >= 1 solves in Case B: x = 1, lam = 2 - boundary solution certified.",
              "Two-case recipe: try lam = 0 (check feasibility), try g = 0 (check lam >= 0); one survives.",
              "For convex problems KKT is necessary AND sufficient - the global-optimality certificate.",
            ],
            table: {
              caption: "Case analysis for min x^2 subject to x >= 1 (g = 1 - x <= 0).",
              headers: ["Case", "Assumption", "Consequence", "Verdict"],
              rows: [
                ["A: inactive", "lam = 0", "stationarity gives x = 0; g = 1 > 0 infeasible", "rejected"],
                ["B: active", "g = 0 so x = 1", "lam = 2x = 2 >= 0; all KKT hold", "accepted: x* = 1, f* = 1"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Running the KKT checklist",
              caption:
                "Four conditions, two cases, one survivor - the pipeline never changes.",
              stages: [
                { label: "Standardize constraints", note: "all as g_i(x) <= 0" },
                { label: "Build L = f + sum lam_i g_i" },
                { label: "Case split on slackness", note: "lam = 0 or g = 0 per constraint" },
                { label: "Test feasibility and lam >= 0", note: "eliminate dead cases" },
                { label: "Certify optimum", note: "convex problems: KKT holds = globally optimal" },
              ],
            },
            callout: {
              type: "warning",
              title: "Dual feasibility has a direction",
              body: "lam >= 0 is only correct when constraints are written g(x) <= 0 and the Lagrangian adds lam*g. Flip either convention and the sign flips. Mixing conventions mid-answer produces 'lam = -2', which violates dual feasibility and would wrongly reject the true solution. Declare your convention in line one of the answer.",
            },
            keyTerms: [
              { term: "KKT conditions", definition: "Stationarity, primal feasibility, dual feasibility and complementary slackness - the constrained-optimality system." },
              { term: "Complementary slackness", definition: "lam_i g_i(x) = 0: a constraint is either active or unpriced, never both." },
              { term: "Active constraint", definition: "A constraint with g_i(x) = 0 at the solution; it touches and shapes the optimum." },
              { term: "Dual feasibility", definition: "lam_i >= 0 under the g <= 0 convention; multipliers cannot be negative." },
              { term: "Constraint qualification", definition: "A regularity condition (e.g. LICQ) ensuring KKT is necessary at local optima." },
            ],
            examQuestions: [
              {
                q: "State the four KKT conditions and use them to solve: minimize f(x) = x^2 subject to x >= 1. Show the full case analysis and explain why complementary slackness makes the check decisive. State when KKT conditions are sufficient for global optimality.",
                marks: 7,
                outline: [
                  "Write the constraint in standard form: g(x) = 1 - x <= 0.",
                  "Build L = x^2 + lam(1 - x) and state all four KKT conditions.",
                  "Case A (lam = 0): stationarity 2x = 0 gives x = 0, but g = 1 > 0 violates primal feasibility - reject.",
                  "Case B (g = 0): x = 1, stationarity gives lam = 2 >= 0 - all conditions satisfied.",
                  "Conclude x* = 1, f* = 1, lam* = 2; note lam = shadow price of tightening the boundary.",
                  "Explain slackness: it forces the case split and guarantees no third scenario exists.",
                  "Sufficiency: for convex f and feasible convex constraints (with a CQ), KKT points are global minima.",
                ],
              },
              {
                q: "In the KKT system, what does lam_i = 0 tell you about constraint i?",
                marks: 2,
              },
              {
                q: "Minimize f(x) = (x - 3)^2 subject to x <= 1 using the KKT case analysis.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.3",
            title: "The primal-dual view",
            body: [
              "Every constrained problem has two faces. The primal is the original: min over x of f(x) subject to constraints. The dual asks the opposite question: how high can we push a price lam while the Lagrangian's relaxation stays low? Define the dual function q(lam) = inf over x of L(x, lam) - the smallest value the Lagrangian reaches if the constraint is ignored and x wanders free. Because inf over all x of L is always <= L at the feasible optimum, q(lam) never exceeds the primal optimum for any lam >= 0: every multiplier gives a lower bound, and the dual problem maximizes that bound over lam >= 0.",
              "Worked continuation of the rectangle example makes the dual concrete. Primal: max x*y s.t. x + y = 10. Lagrangian L = x*y - lam(x + y - 10); for fixed lam, maximizing over x, y (unconstrained) separates: max over x of x(lam) ... actually with L = xy - lam x - lam y + 10 lam, setting dL/dx = y - lam = 0 and dL/dy = x - lam = 0 gives x = y = lam, and plugging back q(lam) = lam^2 - 2 lam^2 + 10 lam = 10 lam - lam^2. Maximizing q over lam: derivative 10 - 2 lam = 0 gives lam = 5, q(5) = 25 - exactly the primal optimum 25. The dual recovers the answer from the price side, and lam = 5 prices the perimeter.",
              "The primal-dual view powers modern algorithms. Primal-dual interior point methods (the standard LP/QP solvers) iterate on primal and dual variables simultaneously, driving the slackness product lam_i g_i toward zero - which is why 'complementary slackness as convergence criterion' is the sentence to remember. Alternating updates also appear in machine learning beyond classical optimization: GAN training alternates generator and discriminator steps (a minimax primal-dual game), and ADMM splits problems into primal and dual blocks updated in turn. The unifying idea: constraints are not walls but priced resources, and algorithms can converge on the resources and the solution together.",
              "Reading duality this way also explains the structure of exam questions. Any 'solve by duality' problem is three moves: write the Lagrangian, minimize it over x to get q(lam) (handling unconstrained-x cases carefully - if the infimum is -infinity for some lam, the dual is infeasible there), then maximize q over the dual-feasible region. The gap between q(lam) and the primal value at the same lam is the duality gap at that multiplier; Section 4.4 formalizes when the gap closes to zero. In SVMs the dual variable per training point prices its margin violation, and the nonzero-priced points are the support vectors - the primal-dual view literally names the important data.",
            ],
            bullets: [
              "Dual function: q(lam) = inf_x L(x, lam) - the best value achievable ignoring the constraint.",
              "Every lam >= 0 gives a lower bound: q(lam) <= primal optimum (for a minimization primal).",
              "Dual problem: maximize q(lam) over lam >= 0; its optimum prices the constraints.",
              "Worked rectangle dual: q(lam) = 10 lam - lam^2, maximized at lam = 5 with q = 25 = primal optimum.",
              "Interior point methods drive lam_i g_i -> 0: complementary slackness as the convergence signal.",
              "Same pattern in GANs (minimax alternation) and ADMM (primal/dual block updates).",
              "Three-move duality recipe: Lagrangian -> inf over x -> maximize over lam.",
            ],
            table: {
              caption: "Dual bookkeeping for the rectangle primal (max x*y, x + y = 10).",
              headers: ["lam", "q(lam) = 10 lam - lam^2", "Comment"],
              rows: [
                ["0", "0", "no price, no bound quality"],
                ["3", "21", "valid lower bound, below 25"],
                ["5", "25", "tight: equals primal optimum"],
                ["7", "21", "overpriced, bound weakens"],
                ["11", "-11", "over the dual peak, useless"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "A primal-dual iteration",
              caption:
                "Modern solvers converge on the solution and the prices at the same time.",
              steps: [
                { label: "Holding lam fixed, minimize L over x", note: "primal-side step" },
                { label: "Evaluate q(lam)", note: "current lower bound" },
                { label: "Adjust lam to raise q", note: "dual-side step: raise prices on binding constraints" },
                { label: "Check slackness lam_i g_i", note: "near zero means both sides agree" },
              ],
            },
            callout: {
              type: "tip",
              title: "The bound is the point",
              body: "When asked 'what is the dual', the deepest one-line answer is: a recipe for lower bounds. For any lam >= 0, q(lam) <= p* always - even when the gap never closes. Leading with the bound interpretation, then computing q(lam) for the rectangle, shows understanding rather than formula-recall.",
            },
            keyTerms: [
              { term: "Primal problem", definition: "The original constrained minimization over x." },
              { term: "Dual function q(lam)", definition: "The infimum of the Lagrangian over unconstrained x; a lower-bound generator." },
              { term: "Dual problem", definition: "Maximize q(lam) over lam >= 0 to find the tightest lower bound." },
              { term: "Primal-dual method", definition: "An algorithm updating primal and dual variables in tandem, often driving slackness to zero." },
              { term: "Minimax game", definition: "A coupled min-max problem (as in GANs) solved by alternating primal-dual style updates." },
            ],
            examQuestions: [
              {
                q: "Define the dual function and dual problem for a constrained minimization. Derive the dual of max x*y subject to x + y = 10, show its maximum equals the primal optimum, and explain how primal-dual algorithms use complementary slackness.",
                marks: 7,
                outline: [
                  "Define q(lam) = inf_x L(x, lam) and note q(lam) <= p* for all lam >= 0 (lower bound).",
                  "Set up the Lagrangian L = x*y - lam(x + y - 10).",
                  "Maximize over x, y: stationarity gives x = y = lam.",
                  "Substitute: q(lam) = lam^2 - 2 lam^2 + 10 lam = 10 lam - lam^2.",
                  "Maximize over lam: 10 - 2 lam = 0 gives lam = 5, q(5) = 25 = primal optimum.",
                  "Interpret lam = 5 as the shadow price of perimeter.",
                  "Primal-dual algorithms update x and lam alternately, converging when lam_i g_i -> 0; cite interior point, GANs, ADMM.",
                ],
              },
              {
                q: "Why does every dual feasible point provide a lower bound on the primal optimum?",
                marks: 2,
              },
              {
                q: "What happens to the dual if, for some lam, the infimum of L over x is -infinity?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.4",
            title: "Duality: weak and strong",
            body: [
              "Weak duality is a theorem with no hypotheses: for any primal p* and any dual-feasible lam, q(lam) <= p*. The dual optimum d* therefore satisfies d* <= p* always, convex or not, smooth or not. The difference p* - d* is the duality gap. Weak duality's practical power: any dual-feasible point certifies 'the primal cannot be worse than this bound', which is how branch-and-bound prunes search trees and how approximation algorithms prove quality guarantees. Worked check on the rectangle: q(3) = 21 <= p* = 25 - a valid bound without solving anything.",
              "Strong duality is the prize: d* = p*, gap zero, so the best lower bound exactly equals the optimum. It does NOT always hold, and the classic nonconvex counterexample shows why. Take min f(x) = x^2 subject to x^2 = 1... a cleaner standard example: minimize x^2 subject to the nonconvex equality x^2 - 1 = 0. The primal optimum is p* = 1 (at x = ±1), but the Lagrangian L = x^2 + lam(x^2 - 1) = (1 + lam)x^2 - lam has infimum -lam (at x = 0) for lam > -1 and -infinity for lam < -1, so q(lam) = -lam, maximized over lam >= -1 as lam -> -1 giving d* = 1... in this instance the gap happens to close; the standard gap example is min x^3 or max xy with x^2 + y^2 <= 1 style nonconvexity. The exam-safe statement: for nonconvex problems the gap can be strictly positive, and weak duality is all you can rely on.",
              "For convex problems strong duality holds under mild conditions, of which Slater's condition is the exam standard: there exists a point strictly feasible for all inequality constraints, g_i(x) < 0 (strictly inside, not touching), plus the equality constraints satisfiable. The rectangle and SVM problems satisfy Slater trivially. Under strong duality, the KKT conditions follow automatically at the optimal pair: stationarity, feasibility, dual feasibility and slackness all hold for some (x*, lam*), turning Unit 4.2's checklist from a heuristic into a theorem. This chain - convexity + Slater -> strong duality -> KKT - is the logical spine of the whole unit and is worth writing verbatim in answers.",
              "The economic reading ties the unit together. In an LP, the dual variable of a resource constraint is its marginal value: how much the optimal profit rises per extra unit of resource. Dual feasibility lam >= 0 says prices are non-negative; complementary slackness says unpriced resources are surplus (unused capacity has zero value) and fully-used resources carry the price. Zero duality gap means the accounting is exact - the value of the plan equals the value of the resources it consumes. In ML, the same reading prices training points: SVM multipliers mark the examples that matter (support vectors), and the hinge-loss formulation shows lam as the exchange rate between margin and violations. Duality is thus one idea wearing three coats: bounds, algorithms, prices.",
            ],
            bullets: [
              "Weak duality: q(lam) <= p* for all dual-feasible lam; d* <= p* always - no hypotheses needed.",
              "Duality gap = p* - d*; weak duality only bounds it, never closes it.",
              "Nonconvex problems can have a strictly positive gap; then duals give bounds, not answers.",
              "Strong duality: d* = p*; holds for convex problems satisfying Slater's condition.",
              "Slater: some point strictly feasible (g_i(x) < 0) for the inequality constraints.",
              "Chain to memorize: convexity + Slater -> strong duality -> KKT conditions hold at the optimum.",
              "Economic reading: duals are marginal prices; slackness means unused resources are free.",
            ],
            table: {
              caption: "Weak vs strong duality at a glance.",
              headers: ["Property", "Weak duality", "Strong duality"],
              rows: [
                ["Statement", "d* <= p*", "d* = p*"],
                ["Requires", "nothing - always true", "convexity + e.g. Slater's condition"],
                ["Gap", "may be positive", "exactly zero"],
                ["Use", "bounds, pruning, guarantees", "exact solution via the dual; KKT holds"],
                ["Rectangle example", "q(3) = 21 <= 25", "q(5) = 25 = p*"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Does the duality gap close?",
              caption:
                "Check convexity and Slater before claiming the dual solves the primal.",
              start: "You computed d* and p* and want d* = p*",
              branches: [
                { label: "Convex primal + Slater feasible point", outcome: "strong duality: gap is zero; solve the dual or read KKT off the pair", good: true },
                { label: "Convex but no strictly feasible point", outcome: "usually still zero gap, but Slater-based guarantees need care (refined CQs)", good: false },
                { label: "Nonconvex primal", outcome: "gap may be strictly positive; use the dual for bounds only", good: false },
              ],
            },
            callout: {
              type: "exam",
              title: "Quote the chain, not just the definitions",
              body: "The highest-scoring sentence in duality answers: 'For convex problems with a strictly feasible point (Slater), strong duality holds, hence the KKT conditions are satisfied at the optimal primal-dual pair.' It links three syllabus points in one line - exactly the synthesis examiners reward in 7-mark answers.",
            },
            keyTerms: [
              { term: "Weak duality", definition: "The universal inequality d* <= p*: duals always lower-bound the primal optimum." },
              { term: "Duality gap", definition: "p* - d*; zero under strong duality, possibly positive for nonconvex problems." },
              { term: "Strong duality", definition: "Equality of primal and dual optima; guaranteed for convex problems under Slater." },
              { term: "Slater's condition", definition: "Existence of a strictly feasible point for the inequality constraints." },
              { term: "Lower bound certificate", definition: "A dual-feasible value proving the primal optimum cannot be below it." },
            ],
            examQuestions: [
              {
                q: "State and prove weak duality, define the duality gap, explain strong duality and Slater's condition, and illustrate both on max x*y with x + y = 10 where q(lam) = 10 lam - lam^2.",
                marks: 7,
                outline: [
                  "For any lam >= 0 and feasible x: q(lam) = inf L <= L(x, lam) <= f(x), since the constraint term lam g >= 0 on feasible x.",
                  "Taking the inf over feasible x: q(lam) <= p* - weak duality proved in three lines.",
                  "Define the gap p* - d* and note weak duality never claims it is zero.",
                  "State strong duality and Slater's condition (strictly feasible point).",
                  "Rectangle: q(lam) = 10 lam - lam^2; every lam gives a valid bound (q(3) = 21 <= 25).",
                  "Maximizing the dual gives lam = 5, q = 25 = p*: gap zero, strong duality witnessed.",
                  "Conclude the chain: convexity + Slater -> strong duality -> KKT at the optimal pair.",
                ],
              },
              {
                q: "Define Slater's condition in one sentence and state what it guarantees.",
                marks: 2,
              },
              {
                q: "Give one practical use of weak duality when strong duality fails.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.5",
            title: "Linear programming and the simplex method",
            body: [
              "A linear program (LP) optimizes a linear objective over linear constraints: maximize c^T x subject to A x <= b and x >= 0. Everything is flat: no curvature, no local traps. The feasible set is a polytope - a flat-sided solid - and the objective is linear, so if an optimum exists it is attained at a vertex (extreme point) of the polytope. Why: if the optimum were in the middle of a face, the objective could still be increased along the face's improving directions; only a corner has no improving direction left inside the set. This vertex theorem is the entire secret of the simplex method.",
              "The classic worked example: maximize 3x + 5y subject to x <= 4, 2y <= 12, 3x + 2y <= 18, x, y >= 0. The constraints form a pentagon with candidate vertices (0,0), (4,0), (4,3), (2,6), (0,6). Evaluate the objective: 0, 12, 27, 36, 30. The winner is (2, 6) with value 36 - found at the corner where the binding constraints 3x + 2y = 18 and 2y = 12 meet. Checking binding activity: x is strictly inside x <= 4 (slack 2), so its dual price is 0 by complementary slackness; the two tight constraints carry the prices. One small LP demonstrates vertices, binding constraints and pricing in a single picture.",
              "The simplex method exploits the vertex theorem algorithmically: start at a feasible vertex, move along an edge to an adjacent vertex that improves the objective, repeat until no improving edge exists - then the current vertex is optimal. Algebraically each step is a pivot on the simplex tableau, bringing one variable into the basis and sending another out; degenerate pivots (no objective change) can cycle in pathological cases, handled by Bland's rule. Complexity is a famous subtlety: simplex is exponential in the worst case (Klee-Minty cubes) but overwhelmingly fast in practice, while interior-point methods (following the primal-dual ideas of Section 4.3) guarantee polynomial time and dominate on huge instances.",
              "LP's role in an ML syllabus is foundational rather than direct. The LP is the simplest problem where duality, slackness and vertex structure all appear in closed form - the training ground for the machinery the SVM reuses as a quadratic program. Standard forms matter too: any LP (min or max, equalities or inequalities, free variables) converts into the canonical max c^T x, Ax <= b, x >= 0 by sign flips and slack variables, a conversion exam questions regularly demand. And the vocabulary generalizes: quadratic programs (SVM), conic problems (modern convex solvers) and integer programs (combinatorial ML tasks like feature selection) all inherit LP's duality grammar.",
            ],
            bullets: [
              "LP standard form: max c^T x subject to Ax <= b, x >= 0; feasible set is a polytope.",
              "Vertex theorem: a linear objective attains its optimum at a vertex (if an optimum exists).",
              "Worked LP: max 3x + 5y over x <= 4, 2y <= 12, 3x + 2y <= 18; vertices give values 0, 12, 27, 36, 30 - optimum (2, 6) with 36.",
              "Binding constraints at the optimum: 3x + 2y = 18 and 2y = 12; x <= 4 is slack (price 0).",
              "Simplex: vertex to adjacent vertex along improving edges; pivots on the tableau; Bland's rule prevents cycling.",
              "Complexity: exponential worst case (Klee-Minty) but fast in practice; interior-point methods are polynomial.",
              "Conversions into standard form: flip signs for min, add slack variables for <=, split free variables.",
            ],
            table: {
              caption: "Vertex enumeration for max 3x + 5y (constraints: x <= 4, 2y <= 12, 3x + 2y <= 18).",
              headers: ["Vertex", "Binding constraints", "Objective 3x + 5y"],
              rows: [
                ["(0, 0)", "x >= 0, y >= 0", "0"],
                ["(4, 0)", "x = 4, y = 0", "12"],
                ["(4, 3)", "x = 4, 3x + 2y = 18", "27"],
                ["(2, 6)", "3x + 2y = 18, 2y = 12", "36  <- optimum"],
                ["(0, 6)", "x = 0, 2y = 12", "30"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "The convex optimization ladder above LP",
              caption:
                "Each rung adds curvature; LP's duality grammar repeats all the way up.",
              tiers: [
                { label: "Quadratic programs (SVM)", note: "quadratic objective, linear constraints; solved as the SVM dual" },
                { label: "General convex programs", note: "convex objective + convex constraints; KKT sufficient" },
                { label: "Linear programs", note: "flat objective over a polytope; optimum at a vertex" },
              ],
            },
            callout: {
              type: "exam",
              title: "Enumerate vertices when the LP is small",
              body: "For 2-variable LPs, skip tableau gymnastics: plot or list the vertices, evaluate the objective at each, and declare the winner - the vertex theorem justifies the shortcut. For full marks, state which constraints are binding at the optimum and note the slack one has price zero, linking to complementary slackness.",
            },
            keyTerms: [
              { term: "Linear program (LP)", definition: "Optimizing a linear objective subject to linear constraints and sign restrictions." },
              { term: "Polytope", definition: "The flat-sided feasible region of an LP; its corners are candidate optima." },
              { term: "Vertex theorem", definition: "An LP optimum (when it exists) is attained at an extreme point of the feasible polytope." },
              { term: "Simplex method", definition: "Walking from vertex to adjacent vertex along improving edges until none remain." },
              { term: "Slack variable", definition: "Added per <= constraint to convert it to equality: Ax + s = b with s >= 0." },
            ],
            examQuestions: [
              {
                q: "State the standard form of an LP and the vertex theorem. Solve max 3x + 5y subject to x <= 4, 2y <= 12, 3x + 2y <= 18, x, y >= 0 by vertex enumeration, identify the binding constraints, and outline how the simplex method would reach the same vertex.",
                marks: 7,
                outline: [
                  "Standard form: max c^T x s.t. Ax <= b, x >= 0; objective and constraints all linear.",
                  "Vertex theorem: optimum at a corner of the feasible polytope.",
                  "List the five candidate vertices from pairwise intersections of the constraints.",
                  "Evaluate 3x + 5y at each: 0, 12, 27, 36, 30.",
                  "Optimum at (2, 6) with value 36; binding: 3x + 2y = 18 and 2y = 12.",
                  "Note x <= 4 is slack at the optimum, so by complementary slackness its dual is 0.",
                  "Simplex route: start at (0, 0), pivot along improving edges (e.g. via (0, 6) or (4, 3)) to (2, 6); no improving edge remains.",
                ],
              },
              {
                q: "How is a <= constraint converted to equality form, and what sign restriction does the added variable carry?",
                marks: 2,
              },
              {
                q: "Why can the simplex method be slow in the worst case yet fast in practice?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.6",
            title: "SVM as constrained optimization; L1/L2 as constrained views",
            body: [
              "The support vector machine (SVM) is the syllabus's showcase constrained problem. For linearly separable data, the hard-margin SVM finds the hyperplane w^T x + b = 0 maximizing the margin, written as the quadratic program: minimize (1/2)|w|^2 subject to y_i(w^T x_i + b) >= 1 for every training point i (labels y_i in {-1, +1}). The constraint demands each point sit on the correct side with margin at least 1; minimizing |w|^2 maximizes the geometric margin 2/|w|. A convex quadratic objective with linear inequality constraints: KKT solvable, unique solution, no local traps - the entire Unit IV toolkit in one model.",
              "The dual is where the SVM becomes elegant. Introducing multipliers alpha_i >= 0 for each margin constraint, the Lagrangian L = (1/2)|w|^2 - sum alpha_i (y_i(w^T x_i + b) - 1) yields stationarity w = sum alpha_i y_i x_i and the dual: maximize sum alpha_i - (1/2) sum_i sum_j alpha_i alpha_j y_i y_j x_i^T x_j subject to sum alpha_i y_i = 0, alpha_i >= 0. Two payoffs. First, the objective touches the data only through inner products x_i^T x_j - the kernel trick: replace them with K(x_i, x_j) to learn nonlinear boundaries. Second, complementary slackness alpha_i (y_i(w^T x_i + b) - 1) = 0 forces alpha_i = 0 for points comfortably beyond the margin: only the points touching or violating the margin - the support vectors - have alpha_i > 0 and define w. Everything else is invisible to the solution.",
              "Regularization is constrained optimization wearing a different coat. Ridge regression minimizes |y - Xw|^2 with an L2 penalty lam|w|^2; equivalently it minimizes |y - Xw|^2 subject to |w|^2 <= t for some radius t - the KKT multiplier of the constraint IS the regularization coefficient lam. The Lasso minimizes |y - Xw|^2 + lam|w|_1, equivalently subject to |w|_1 <= t, where the feasible region is a diamond whose corners lie on the axes. At a corner, some coefficients are exactly zero - the geometric reason lasso produces sparse models while ridge only shrinks them. Increasing lam is decreasing t: tighter budgets force smaller, sparser weights. This equivalence is a classic 7-mark question: state both forms, connect lam to the constraint's KKT multiplier, draw the diamond versus the disk.",
              "Pulling the unit together: the SVM shows constraints in the model definition (margins), regularization shows constraints in the parameter budget (norms), and both are solved by the same Lagrange-KKT-duality machinery. When an exam question says 'explain the SVM as a constrained optimization problem', the complete answer arcs through: primal QP with margin constraints, Lagrangian and stationarity giving w = sum alpha_i y_i x_i, the dual with kernel-readiness, complementary slackness selecting support vectors, and the closing analogy to constrained ridge/lasso. That arc touches every marking point Units 4.1-4.6 built, in one coherent story.",
            ],
            bullets: [
              "Hard-margin SVM primal: min (1/2)|w|^2 s.t. y_i(w^T x_i + b) >= 1; margin = 2/|w|.",
              "Stationarity gives w = sum alpha_i y_i x_i - the solution lives in the span of the data.",
              "SVM dual: max sum alpha_i - (1/2) sum_ij alpha_i alpha_j y_i y_j x_i^T x_j s.t. sum alpha_i y_i = 0, alpha_i >= 0.",
              "Kernel trick: the dual touches data only via x_i^T x_j; replace with K(x_i, x_j) for nonlinear SVMs.",
              "Complementary slackness: alpha_i > 0 only for support vectors - margin-touching or violating points.",
              "Ridge = min loss s.t. |w|^2 <= t (disk); lasso = min loss s.t. |w|_1 <= t (diamond).",
              "Lasso's diamond corners create exact zeros: geometry explains sparsity; lam is the constraint's KKT multiplier.",
            ],
            table: {
              caption: "Constrained views of regularized regression.",
              headers: ["Method", "Penalty form", "Constrained form", "Feasible region shape"],
              rows: [
                ["Ridge (L2)", "lam |w|^2", "|w|^2 <= t", "disk - smooth boundary"],
                ["Lasso (L1)", "lam |w|_1", "|w|_1 <= t", "diamond - corners on axes"],
                ["Elastic net", "lam1|w|^2 + lam2|w|_1", "combination of both", "rounded diamond"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "From SVM primal to support vectors",
              caption:
                "Each arrow adds one piece of the dual story - redraw this in the exam.",
              steps: [
                { label: "Primal QP", note: "min (1/2)|w|^2 s.t. y_i(w x_i + b) >= 1" },
                { label: "Lagrangian + stationarity", note: "w = sum alpha_i y_i x_i" },
                { label: "Dual QP", note: "data enters only via x_i^T x_j (kernel-ready)" },
                { label: "Complementary slackness", note: "alpha_i > 0 only for margin-touching points" },
                { label: "Support vectors define w", note: "all other points have alpha_i = 0" },
              ],
            },
            callout: {
              type: "exam",
              title: "Slackness names the support vectors",
              body: "The single sentence that elevates an SVM answer: 'By complementary slackness, alpha_i is positive only for points with y_i(w.x_i + b) = 1, so exactly the margin-defining points - the support vectors - determine w; removing any other training point changes nothing.' Connect the KKT condition to the model's name and the examiner knows you understand, not memorized.",
            },
            keyTerms: [
              { term: "Hard-margin SVM", definition: "Maximizing the margin by minimizing (1/2)|w|^2 under constraints y_i(w.x_i + b) >= 1." },
              { term: "Support vector", definition: "A training point with alpha_i > 0; it touches or violates the margin and shapes the hyperplane." },
              { term: "Kernel trick", definition: "Replacing inner products x_i^T x_j in the dual with K(x_i, x_j) to implicit-map features." },
              { term: "Ridge/L2 constraint view", definition: "lam|w|^2 penalty equivalently written |w|^2 <= t with lam as the KKT multiplier." },
              { term: "Lasso/L1 constraint view", definition: "lam|w|_1 penalty equivalently written |w|_1 <= t; the diamond's corners give exact zeros." },
            ],
            examQuestions: [
              {
                q: "Formulate the hard-margin SVM as a constrained optimization problem, derive its dual, and explain how complementary slackness identifies support vectors and how the kernel trick arises. Briefly connect L1/L2 regularization to constrained optimization.",
                marks: 7,
                outline: [
                  "Primal: min (1/2)|w|^2 s.t. y_i(w^T x_i + b) >= 1; explain margin = 2/|w|.",
                  "Lagrangian with multipliers alpha_i >= 0.",
                  "Stationarity: w = sum alpha_i y_i x_i and sum alpha_i y_i = 0.",
                  "Dual objective: max sum alpha_i - (1/2) sum_ij alpha_i alpha_j y_i y_j x_i^T x_j.",
                  "Data appears only via inner products - replace with K(x_i, x_j) for nonlinear boundaries.",
                  "Complementary slackness alpha_i(y_i(w.x_i + b) - 1) = 0: nonzero alpha_i exactly at margin-touching points = support vectors.",
                  "Regularization link: ridge as |w|^2 <= t, lasso as |w|_1 <= t; diamond corners give sparsity; lam is the multiplier.",
                ],
              },
              {
                q: "What geometric feature of the L1 ball's boundary produces exact zero coefficients in lasso?",
                marks: 2,
              },
              {
                q: "Why can the SVM be trained on only its support vectors at prediction time?",
                marks: 3,
              },
            ],
          },
        ],
      },
    },
    // ------------------------------------------------------------------ V
    {
      number: 5,
      roman: "V",
      title: "Hyperparameter and Modern Optimization",
      summary:
        "The optimization that happens above training: grid and random search over hyperparameters, Bayesian optimization with surrogate models, evolutionary heuristics from genetic algorithms to simulated annealing, the practical art of tuning neural networks, the optimizer and batch-norm choices inside real training loops, and model-selection objectives tested through CNN and recommender case studies.",
      chapter: {
        number: "05",
        title: "Tuning the Tuning",
        intro:
          "Unit V optimizes the optimizer. Hyperparameters - learning rate, batch size, depth, dropout, weight decay - are not learned by gradient descent, so they need their own search methods: exhaustive grids, budget-wise random search, Bayesian optimization with surrogate models and acquisition functions, and metaheuristics from genetic algorithms to simulated annealing. Inside the training loop, optimizer choice (SGD + momentum vs Adam vs AdamW) and batch normalization shape the landscape itself. The unit closes with model-selection objectives and two case studies - tuning a CNN and optimizing a recommender - that turn the whole subject into a workflow.",
        inOneBreath:
          "Grid search enumerates every combination (3 lrs x 4 betas = 12 runs) but suffers exponential blow-up (5 params x 10 values = 100,000); random search samples configurations from distributions and beats grids when few dimensions matter (Bergstra and Bengio); Bayesian optimization fits a Gaussian-process surrogate to observed scores and picks the next trial by an acquisition function such as Expected Improvement, balancing exploration against exploitation in a propose-train-observe-update cycle; genetic algorithms evolve a population through selection, crossover and mutation, and simulated annealing accepts worse moves with probability exp(-delta/T) that cools over time; neural hyperparameter priority is lr first, then weight decay, architecture, batch size, with linear lr scaling for larger batches; SGD + momentum suits vision, AdamW (decoupled weight decay) suits transformers; batch normalization standardizes each layer's activations x_hat = (x - mu_B)/sqrt(sigma_B^2 + eps) then rescales with learned gamma and beta, stabilizing and accelerating training; model selection scores hyperparameter settings on validation or cross-validation metrics, and too many trials overfit the validation set.",
        sections: [
          {
            number: "5.1",
            title: "Grid search and random search",
            body: [
              "Hyperparameters are the settings gradient descent cannot learn: learning rate, batch size, number of layers, units per layer, dropout rate, weight decay. Grid search is the brute-force answer: define a grid of values per hyperparameter and train a model for every combination, keeping the best validation score. Example: 3 learning rates {0.1, 0.01, 0.001} crossed with 4 momentum values {0, 0.5, 0.9, 0.99} = 12 training runs, each producing one validation accuracy; pick the argmax. It is exhaustive, reproducible, embarrassingly parallel, and guarantees the grid's best point is found - virtues that make it the default in coursework.",
              "The curse is combinatorial. Adding hyperparameters multiplies the grid: 5 hyperparameters with 10 values each need 10^5 = 100,000 runs. Budgets force coarse grids, and coarse grids miss optima that sit between the chosen values. Worse, grid search wastes runs on unimportant dimensions: if the momentum barely matters but the lr dominates, a 3x4 grid spends 12 runs distinguishing momenta that behave identically. The failure is dimensional, not implementational - more compute does not fix a badly shaped search space.",
              "Random search samples each hyperparameter independently from a chosen distribution (log-uniform for lr is the classic choice) and trains n_trials configurations. The Bergstra-Bengio result justifies it: when only a few hyperparameters matter, random search covers the important dimensions with more distinct values than a grid of the same budget. With 60 random trials on a 5-parameter space, each important parameter is effectively explored at 60 resolution levels, whereas a 60-run grid over 5 parameters gives fewer than 3 values per parameter. Worked comparison: on the 12-run grid budget above, random search draws 12 (lr, momentum) pairs - likely 11-12 distinct lr values versus the grid's 3.",
              "Choosing between them is a standard short question. Grid: small spaces (2-3 hyperparameters), cheap training, when reproducibility and full coverage matter. Random: larger spaces, expensive training, when some dimensions are inert; also the natural base for successive halving and Hyperband, which kill bad trials early and reallocate budget. Both share the practical hygiene: fix the random seeds and data splits so runs are comparable, log every configuration with its score in a table (the audit trail examiners and teammates both demand), and always include the baseline configuration in the search space so you can prove the search helped.",
            ],
            bullets: [
              "Grid search: train every combination; 3 lrs x 4 momenta = 12 runs; pick best validation score.",
              "Blow-up: 5 hyperparameters x 10 values = 100,000 runs - exhaustive search dies combinatorially.",
              "Grid waste: unimportant dimensions consume budget with near-duplicate runs.",
              "Random search: sample each hyperparameter from a distribution (log-uniform for lr).",
              "Bergstra-Bengio insight: with few important dimensions, random covers them at far more distinct values per budget.",
              "Worked contrast: 12-run budget gives a grid 3 lr values but random search 11-12 distinct lr values.",
              "Hygiene: fixed seeds and splits, log every trial, include the baseline configuration in the space.",
            ],
            table: {
              caption: "Grid vs random search on a budget of 12 trials.",
              headers: ["Property", "Grid search", "Random search"],
              rows: [
                ["Coverage of 2 params", "complete 3x4 lattice", "12 scattered pairs"],
                ["Distinct lr values tried", "3", "typically 11-12"],
                ["Scales to 5+ params", "10^5 runs for 10 values each", "any budget, any dimension"],
                ["Reproducibility", "deterministic", "random but seedable"],
                ["Best when", "2-3 params, cheap training", "many params, expensive training"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "The same 12-run budget, two coverages",
              caption:
                "Grids tile a lattice; random search scatters - and scattering wins when one axis dominates.",
              left: {
                heading: "Grid 3x4",
                items: [
                  "3 distinct lr values",
                  "4 distinct momentum values",
                  "full lattice coverage",
                  "no values between grid points",
                  "12 runs, 8 wasted on minor axis",
                ],
              },
              right: {
                heading: "Random 12 draws",
                items: [
                  "11-12 distinct lr values",
                  "11-12 distinct momentum values",
                  "no lattice, no gaps by design",
                  "finds near-optimal lr faster",
                  "feeds Hyperband-style early killing",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Log-uniform for learning rates",
              body: "The one technical detail examiners love: learning rates live on a multiplicative scale (0.001 vs 0.01 is one 'step'), so sample them log-uniformly, not uniformly - a uniform draw over [1e-5, 1] wastes most samples above 0.1 where nothing interesting happens. Mentioning log-uniform sampling signals practical competence instantly.",
            },
            keyTerms: [
              { term: "Hyperparameter", definition: "A training setting set before learning (lr, batch size, depth) rather than learned by gradients." },
              { term: "Grid search", definition: "Training and scoring every combination of a predefined value lattice." },
              { term: "Random search", definition: "Sampling configurations independently from per-hyperparameter distributions." },
              { term: "Log-uniform sampling", definition: "Drawing values uniformly in log space - the right scale for learning rates and regularizers." },
              { term: "Trial budget", definition: "The total number of training runs the search may spend." },
            ],
            examQuestions: [
              {
                q: "Compare grid search and random search for hyperparameter optimization. Include the combinatorial blow-up calculation, the Bergstra-Bengio argument for random search, and a concrete 12-run budget comparison on lr and momentum.",
                marks: 7,
                outline: [
                  "Define hyperparameters and the validation-score objective both methods optimize.",
                  "Grid search: exhaustive lattice; 3 x 4 = 12 runs; deterministic and parallel.",
                  "Blow-up arithmetic: 5 params x 10 values = 100,000 runs - infeasible.",
                  "Waste argument: grid spends runs on inert dimensions at near-duplicate values.",
                  "Random search: independent sampling; log-uniform for lr.",
                  "Bergstra-Bengio: few important dimensions means random covers them at ~budget distinct values vs <3 for a grid.",
                  "Guidance: grid for small cheap spaces, random (plus early-stopping schemes) for large expensive ones.",
                ],
              },
              {
                q: "You can afford 24 training runs over 4 hyperparameters with 6 candidate values each. What does pure grid search require, and what fits?",
                marks: 2,
              },
              {
                q: "Why should learning rates be sampled log-uniformly rather than uniformly?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.2",
            title: "Bayesian optimization",
            body: [
              "Bayesian optimization (BO) is sequential model-based search: instead of sampling blindly, it learns a cheap statistical model of the expensive objective and uses that model to choose each next trial. The pieces: a surrogate model, almost always a Gaussian process (GP), which fits a distribution over functions to the observed (configuration, score) pairs and therefore predicts both a mean score and an uncertainty for any untried configuration; and an acquisition function that converts those predictions into a single number ranking candidate next trials. Each cycle trains one configuration, observes its score, updates the surrogate, and repeats for the trial budget.",
              "Acquisition functions encode the exploration-exploitation trade-off. Expected Improvement (EI) values a candidate by how much it is expected to beat the best score so far - it likes points whose mean is good (exploit) AND points with wide uncertainty (explore), automatically balancing the two. Upper Confidence Bound (UCB) makes the balance explicit with a tunable knob: score = mean + kappa * uncertainty, so kappa = 0 is pure exploitation and large kappa is pure exploration. Thompson sampling draws a random function from the GP posterior and optimizes that draw. All three formalize the same instinct: near known-good regions only when the model is confident, near unknown regions when information is valuable.",
              "A worked micro-run makes the loop tangible. Tuning an SVM's C on a validation set: trials so far give C = 0.01 -> 0.72, C = 1 -> 0.85, C = 100 -> 0.78. The GP fits a smooth mean peaking near C = 1 with rising uncertainty toward C = 10 and C = 0.1 (untried gaps). EI ranks the untried C = 10 highest: its mean (interpolated near 0.83) is decent and its uncertainty is large, so expected improvement over the best 0.85 is substantial. Train C = 10 -> 0.88: new best, surrogate sharpens around C = 10, next EI pick probes C = 30. Four trials in, BO has walked a coarse landscape adaptively where a 5-point grid would have spent its budget uniformly.",
              "Positioning BO honestly matters for full marks. Strengths: sample efficiency (often 10-50 trials suffice where grid/random need hundreds), built-in uncertainty handling, no gradient required - ideal when each evaluation trains a model for minutes or hours. Costs and caveats: the GP fit is itself O(t^3) in the number of observations (fine for t < a few hundred), it assumes a smooth response surface (catastrophic with very noisy or discontinuous objectives), and it is inherently sequential - harder to parallelize than random search, though batch-acquisition variants exist. Modern practice uses BO for expensive per-trial problems (architecture search fragments, final polish after random search narrows the space) and random/Hyperband for cheap-trial sweeps.",
            ],
            bullets: [
              "BO loop: fit surrogate (GP) -> rank candidates by acquisition -> train one -> observe -> update -> repeat.",
              "Gaussian process surrogate predicts mean AND uncertainty for every untried configuration.",
              "Expected Improvement: ranks by expected gain over the best score so far; balances exploit and explore automatically.",
              "UCB: score = mean + kappa * uncertainty; kappa tunes exploration vs exploitation explicitly.",
              "Worked micro-run: trials 0.72 / 0.85 / 0.78; EI picks the untried C = 10 which scores 0.88 - new best.",
              "Strengths: 10-50 trials can match hundreds of grid runs; no gradients needed.",
              "Caveats: GP fit O(t^3), assumes smoothness, inherently sequential; best for expensive evaluations.",
            ],
            table: {
              caption: "One Bayesian optimization run tuning an SVM's C (validation accuracy).",
              headers: ["Trial", "C", "Accuracy", "Source of choice"],
              rows: [
                ["1", "0.01", "0.72", "initial design (random)"],
                ["2", "1.0", "0.85", "initial design (random)"],
                ["3", "100", "0.78", "initial design (random)"],
                ["4", "10", "0.88", "EI pick: high mean + high uncertainty"],
                ["5", "30", "0.87", "EI pick: refine around the new best"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "The Bayesian optimization loop",
              caption:
                "One expensive evaluation per cycle; the surrogate makes each one count.",
              steps: [
                { label: "Fit GP surrogate to all (config, score) pairs" },
                { label: "Rank untried configs by acquisition (EI/UCB)" },
                { label: "Train the top-ranked config", note: "the expensive step" },
                { label: "Observe validation score" },
                { label: "Update surrogate; repeat until budget spent" },
              ],
            },
            callout: {
              type: "exam",
              title: "Name the two components and the trade-off",
              body: "The 7-mark skeleton for BO: (1) surrogate model - a GP over the objective giving mean and uncertainty; (2) acquisition function - EI or UCB converting predictions into the next trial choice; (3) the exploration-exploitation balance they encode. Sketch the propose-train-observe-update cycle diagram and the answer is structurally complete before any detail.",
            },
            keyTerms: [
              { term: "Surrogate model", definition: "A cheap probabilistic approximation of the expensive objective, typically a Gaussian process." },
              { term: "Acquisition function", definition: "Scoring rule (EI, UCB, Thompson) deciding which configuration to evaluate next." },
              { term: "Expected Improvement (EI)", definition: "Expected gain over the current best score; the standard BO acquisition." },
              { term: "Exploration vs exploitation", definition: "Trying uncertain regions versus refining known-good regions; tuned by EI implicitly, UCB's kappa explicitly." },
              { term: "Sequential design", definition: "Choosing trials one at a time, each informed by all previous observations." },
            ],
            examQuestions: [
              {
                q: "Explain Bayesian optimization: the Gaussian process surrogate, the role of acquisition functions, and the exploration-exploitation trade-off. Walk through a small run on tuning an SVM's C and state when BO is preferable to grid or random search.",
                marks: 7,
                outline: [
                  "Motivate: each evaluation trains a model - expensive - so trials must be chosen wisely.",
                  "GP surrogate: fits mean and uncertainty over configurations from observed (config, score) pairs.",
                  "Acquisition functions: EI (expected gain over best) and UCB (mean + kappa * uncertainty).",
                  "Exploration-exploitation: EI balances implicitly; UCB's kappa tunes it explicitly.",
                  "Micro-run: scores 0.72 / 0.85 / 0.78; EI selects untried C = 10 for its high mean and uncertainty; result 0.88.",
                  "Loop: propose -> train -> observe -> update, repeated for the budget.",
                  "Positioning: 10-50 trials vs hundreds; caveats O(t^3) fit, smoothness assumption, sequential nature.",
                ],
              },
              {
                q: "In UCB score = mean + kappa * uncertainty, what happens as kappa -> 0 and as kappa grows large?",
                marks: 2,
              },
              {
                q: "Give two situations where Bayesian optimization is a poor choice.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.3",
            title: "Evolutionary and metaheuristic methods: GA and simulated annealing",
            body: [
              "When gradients do not exist - discrete architectures, neural architecture search knobs, combinatorial hyperparameters - metaheuristics search without derivatives. The genetic algorithm (GA) maintains a POPULATION of candidate solutions (chromosomes), scores each with a fitness function (the validation metric), and breeds the next generation with three operators: selection (fitter individuals reproduce more - roulette-wheel or tournament selection), crossover (two parents swap segments to create children), and mutation (random bit flips preserving diversity). Repeat for generations; the population's best fitness climbs. It is parallel search with memory: many partial solutions explored at once, good building blocks recombined.",
              "A complete micro-run: maximize f(x) = x^2 over integers 0-31 encoded as 5-bit strings. Initial population (4 chromosomes): 01101 = 13 (f = 169), 11000 = 24 (f = 576), 01000 = 8 (f = 64), 10011 = 19 (f = 361). Selection proportional to fitness favours 11000 and 10011. Crossover of 11000 and 10011 after position 2: children 11011 = 27 (f = 729) and 10000 = 16 (f = 256) - one child already beats every parent. Mutation flips a bit occasionally: 11011 -> 11111 = 31 (f = 961) is one flip from optimal. In two generations the population moved from best 576 to best 961: selection found good material, crossover assembled it, mutation guarded against stagnation.",
              "Simulated annealing (SA) is the single-walker alternative, named after metallurgical cooling. At each step propose a random neighbour; accept it unconditionally if it improves the objective, and if it is WORSE accept with probability exp(-delta/T), where delta is the worsening and T the current temperature. High T accepts almost anything (free exploration); as the schedule cools T -> 0, worse moves become exponentially unlikely and the walk hardens into descent. Worked numbers: with T = 10 and a move that worsens by delta = 2, acceptance probability is exp(-2/10) = exp(-0.2) = 0.82 - mostly accepted; by T = 0.2 the same move's probability is exp(-10) = 0.000045 - effectively never. The cooling schedule (e.g. T := 0.95*T each step) is the algorithm's soul.",
              "Both methods trade guarantees for reach. SA provably finds the global optimum given an infinitely slow logarithmic cooling schedule - a theoretical guarantee with impractical runtime; in practice it escapes local minima early and converges late. GA has no general convergence theorem but shines on discrete, multimodal, poorly-understood landscapes, and scales to population-based hyperparameter search (CMA-ES is the modern evolution-strategy workhorse for continuous neural-network hyperparameters). Selection rule for the exam: differentiable continuous objective -> gradient methods; expensive black-box -> BO; discrete/combinatorial or population-parallel -> GA; single-solution local search needing escape moves -> SA.",
            ],
            bullets: [
              "GA operators: selection (tournament/roulette by fitness), crossover (swap segments), mutation (random flips).",
              "GA micro-run on max x^2, 5-bit strings: parents best 576; crossover creates 27 (f = 729); one mutation reaches 31 (f = 961).",
              "Population search explores many basins at once; diversity (mutation rate) prevents premature convergence.",
              "SA acceptance: P(accept worse) = exp(-delta/T); improves always accepted.",
              "SA numbers: delta = 2 accepted with p = 0.82 at T = 10, but p = exp(-10) = 4.5e-5 at T = 0.2.",
              "Cooling schedule (T := 0.95 T) trades exploration for convergence; log schedule gives theoretical global convergence.",
              "Selection guide: gradients -> GD; black-box expensive -> BO; discrete/combinatorial -> GA; single-walker escape -> SA.",
            ],
            table: {
              caption: "Two generations of the GA micro-run (max f(x) = x^2, 5-bit encoding).",
              headers: ["Chromosome", "x", "Fitness x^2", "Fate"],
              rows: [
                ["01101", "13", "169", "weak - less selected"],
                ["11000", "24", "576", "parent of crossover"],
                ["01000", "8", "64", "weakest - dies"],
                ["10011", "19", "361", "parent of crossover"],
                ["11011 (child)", "27", "729", "crossover product beats all parents"],
                ["11111 (mutant)", "31", "961", "one flip from the optimum"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "One genetic-algorithm generation",
              caption:
                "Selection concentrates, crossover recombines, mutation diversifies - repeat.",
              steps: [
                { label: "Evaluate fitness of the population" },
                { label: "Select parents", note: "tournament or fitness-proportional" },
                { label: "Crossover pairs", note: "swap segments to build children" },
                { label: "Mutate children", note: "small flip probability per bit" },
                { label: "Form the next generation", note: "keep elites; iterate" },
              ],
            },
            callout: {
              type: "exam",
              title: "Carry one 5-bit GA example",
              body: "The max x^2 over 0-31 example with chromosomes 11000 and 10011 crossing into 11011 is short enough to memorize and rich enough to demonstrate selection, crossover and mutation with real numbers. Pair it with the exp(-delta/T) acceptance formula and you can answer any GA or SA question with worked arithmetic instead of prose.",
            },
            keyTerms: [
              { term: "Chromosome", definition: "An encoded candidate solution (e.g. a bit string) in a genetic algorithm." },
              { term: "Fitness function", definition: "The score used to select which candidates reproduce." },
              { term: "Crossover", definition: "Recombining segments of two parents to form children." },
              { term: "Simulated annealing", definition: "Local search accepting worsening moves with probability exp(-delta/T) under a cooling schedule." },
              { term: "Cooling schedule", definition: "The rule decreasing T over time, trading exploration for convergence." },
            ],
            examQuestions: [
              {
                q: "Describe the genetic algorithm's operators and run two generations on maximizing f(x) = x^2 over 0-31 with 5-bit encoding from the population {01101, 11000, 01000, 10011}. Then explain simulated annealing's acceptance rule with numeric probabilities at two temperatures.",
                marks: 7,
                outline: [
                  "Define population, fitness, selection, crossover, mutation.",
                  "Evaluate fitnesses: 169, 576, 64, 361; selection favours the fitter two.",
                  "Crossover 11000 x 10011 after position 2 gives children 11011 (x = 27, f = 729) and 10000.",
                  "Mutation example: 11011 -> 11111 (x = 31, f = 961) - one flip from optimal.",
                  "Summarize the generational improvement 576 -> 961 and the role of diversity.",
                  "SA: accept worse moves with p = exp(-delta/T); at T = 10, delta = 2 gives p = 0.82.",
                  "At T = 0.2 the same move has p = exp(-10) = 4.5e-5: exploration freezes as cooling proceeds.",
                ],
              },
              {
                q: "Compute the acceptance probability of a move that worsens the objective by 1 when T = 0.5.",
                marks: 2,
              },
              {
                q: "Why are metaheuristics preferred over gradient methods for neural architecture search?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.4",
            title: "Hyperparameter tuning of neural networks",
            body: [
              "Tuning a neural network is triage, not enumeration: some hyperparameters matter enormously, others barely. The priority order born of practice: (1) learning rate - a wrong lr makes everything else untestable; (2) weight decay / regularization strength; (3) architecture - depth and width; (4) batch size; (5) optimizer-specific knobs (beta2, eps) which almost never need tuning. A sensible protocol: find the largest lr that trains stably (loss decreases smoothly without divergence), then regularize until train and validation curves stop diverging, then spend leftover budget on architecture. Tuning depth before lr inverts the dependency and wastes every run.",
              "The lr-batch interaction is the exam's favourite subtlety. Larger batches reduce gradient noise, so they tolerate and benefit from larger learning rates - the linear scaling rule says multiply lr by the same factor as the batch: batch 64 -> 256 (4x) suggests lr 0.1 -> 0.4, with a warmup period while the scaling settles. Worked intuition: with batch 32 the per-step gradient estimate has variance ~1/32; at batch 256 the noise drops 8-fold, so steps 8x larger still average out correctly. Break the rule by raising batch without raising lr and training slows proportionally - the classic 'larger batch made it worse' mystery, which is really an lr mismatch.",
              "Budget mechanics: a search of 50 trials at 30 minutes each costs 25 GPU-hours - feasible overnight on one card, and embarrassingly parallel across cards. Spend it with structure: start from a known-good recipe (published config for a similar model), random search with log-uniform lr over 2-3 decades, prune hopeless trials early with successive halving (train all candidates 1/3 of the schedule, kill the worst half, repeat) or Hyperband, which adaptively allocates full budgets only to survivors. Keep a ledger: configuration, seed, validation score - the table that lets you reproduce the winner and prove the search was fair.",
              "Two failure patterns complete the practical picture. Overfitting the validation set: after hundreds of trials, the best validation score increasingly reflects luck on that particular split - mitigate by keeping a untouched test set and by preferring configurations that win across multiple seeds. Interaction effects: dropout and weight decay overlap in function, so tuning both jointly wastes trials - tune one, fix it, tune the other. Both patterns argue for smaller, well-designed searches over brute force: 30 thoughtful trials with a good parameterization usually beat 300 blind ones, which is the honest summary of the entire tuning craft.",
            ],
            bullets: [
              "Priority order: lr first, then weight decay, architecture, batch size; optimizer betas rarely need tuning.",
              "Find the largest stable lr first - everything else is untestable below a broken lr.",
              "Linear scaling rule: batch 64 -> 256 (4x) pairs with lr 0.1 -> 0.4, plus warmup.",
              "Noise logic: variance ~1/B, so larger batches tolerate proportionally larger steps.",
              "Budget example: 50 trials x 30 min = 25 GPU-hours; parallelizable and prunable.",
              "Successive halving / Hyperband: train all candidates briefly, kill the worst half, reallocate budget to survivors.",
              "Guard rails: untouched test set, multiple seeds for finalists, tune overlapping regularizers one at a time.",
            ],
            table: {
              caption: "Tuning triage for a typical CNN or transformer run.",
              headers: ["Priority", "Hyperparameter", "Typical range", "Why it ranks here"],
              rows: [
                ["1", "learning rate", "1e-4 to 1 (log-uniform)", "wrong lr invalidates all other comparisons"],
                ["2", "weight decay", "1e-6 to 0.1 (log-uniform)", "main overfitting control"],
                ["3", "depth / width", "layer and unit counts", "capacity; expensive to change late"],
                ["4", "batch size", "32 - 512", "pairs with lr by linear scaling"],
                ["5", "optimizer betas, eps", "defaults", "almost never the bottleneck"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "A structured tuning workflow",
              caption:
                "Each stage narrows the space; budgets are spent where information is highest.",
              stages: [
                { label: "Start from a known-good recipe", note: "published config for a similar task" },
                { label: "Sweep lr alone", note: "log-uniform, largest stable value wins" },
                { label: "Sweep regularization", note: "weight decay / dropout until curves stop diverging" },
                { label: "Scale batch + lr together", note: "linear scaling with warmup" },
                { label: "Random search the remainder", note: "with successive-halving pruning" },
                { label: "Confirm finalists on multiple seeds", note: "guard against validation overfitting" },
              ],
            },
            callout: {
              type: "warning",
              title: "The lr-first rule is not negotiable",
              body: "Students routinely tune depth and dropout while training at a broken learning rate, then conclude 'the architecture does not work'. If the loss curve is flat, spiky, or NaN, no architectural conclusion is valid. Always certify the lr (smooth, monotone early descent) before reading any other comparison.",
            },
            keyTerms: [
              { term: "Tuning triage", definition: "Ordering hyperparameters by impact so limited budgets test what matters first." },
              { term: "Linear scaling rule", definition: "Scaling lr proportionally with batch size, with warmup, to keep large-batch training stable." },
              { term: "Successive halving", definition: "Pruning the worst half of partially-trained candidates and reallocating budget to survivors." },
              { term: "Hyperband", definition: "Multi-bracket successive halving balancing exploration of many configs against deep training of few." },
              { term: "Validation overfitting", definition: "Selecting configurations that exploit noise in the validation split after many trials." },
            ],
            examQuestions: [
              {
                q: "Propose a structured plan to tune a neural network under a 50-trial budget. Justify the priority order of hyperparameters, explain the linear scaling rule between batch size and learning rate with numbers, and describe how successive halving conserves budget.",
                marks: 7,
                outline: [
                  "Priority: lr > weight decay > architecture > batch size > optimizer betas, with reasons.",
                  "Phase 1: log-uniform lr sweep alone; select the largest stable rate from loss curves.",
                  "Phase 2: weight decay / dropout sweep until train-val curves stop diverging.",
                  "Linear scaling: batch 32 -> 128 is 4x, so lr 0.05 -> 0.2, plus warmup; variance argument 1/B.",
                  "Phase 3: random search over remaining knobs with 50-run budget.",
                  "Successive halving: train all candidates 1/3 schedule, kill worst half, repeat; full budget goes to survivors.",
                  "Guard: untouched test set and multi-seed confirmation against validation overfitting.",
                ],
              },
              {
                q: "Batch size is raised from 64 to 512 while lr stays fixed. What typically happens to training speed per epoch of progress, and why?",
                marks: 2,
              },
              {
                q: "Why can tuning hundreds of trials on one validation split mislead, and what are two defenses?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.5",
            title: "Optimizers in deep learning practice and batch normalization",
            body: [
              "Optimizer choice in practice has collapsed to a short menu. SGD + momentum (beta = 0.9, lr 0.1 with step or cosine decay) remains the vision default: it generalizes slightly better on ResNet-style models and costs no extra memory. Adam (lr 0.001, betas 0.9/0.999) is the robust default for everything without a proven recipe, especially transformers and small-data fine-tuning. AdamW is Adam with DECOUPLED weight decay: instead of adding lam|w|^2 into the gradient (which Adam's adaptive scaling then distorts), AdamW subtracts lr * lam * w directly from the weights after the adaptive step. This one-line change fixes Adam's chronic under-regularization and made transformers trainable at scale - the single most consequential optimizer tweak of the last decade.",
              "The decision logic is a standard exam answer. Vision CNNs with large batches: SGD + momentum, lr 0.1, cosine decay, momentum 0.9. Transformers and NLP: AdamW, lr ~1e-4 to 3e-4 (relative to base scale), warmup 5-10% of steps, weight decay 0.01-0.1. Small models on tabular data: Adam or even L-BFGS for tiny convex pieces. Beyond the choice, the loop hygiene matters: gradient clipping at norm 5 for RNNs and transformers, lr schedules from Unit 2.6, and monitoring gradient norms per layer - a sudden zero or explosion is diagnosable before the loss curve confirms it.",
              "Batch normalization (BN) reshapes the landscape itself. For each mini-batch, at a chosen layer, BN computes the batch mean mu_B and variance sigma_B^2 of each activation channel, standardizes x_hat = (x - mu_B)/sqrt(sigma_B^2 + eps), then applies learned scale and shift y = gamma * x_hat + beta. gamma and beta are trained parameters, so the network can undo normalization if useful; the point is that it must CHOOSE its activation scale rather than inherit whatever earlier layers produced. During inference, running averages of mu_B and sigma_B accumulated during training replace batch statistics, since single-example inference has no batch to normalize over.",
              "Why BN helps is a layered answer worth memorizing. First, it reduces internal covariate shift: each layer sees inputs standardized to a stable distribution, so earlier-layer updates do not shift the input distribution under later layers' feet. Second, it smooths the loss landscape: the standardization bounds how much the activation scale can swing per weight change, empirically reducing the effective condition number and allowing lr 10x larger. Third, it adds mild regularization through batch noise in mu_B and sigma_B. Practical notes: BN typically sits before the activation; batch sizes below ~16 make batch statistics noisy (use GroupNorm or LayerNorm instead); and BN interacts with the lr - the famous 'BN allows higher lr' claim is really 'BN makes high lr safe', which is why BN plus AdamW plus cosine decay is the modern transformer recipe.",
            ],
            bullets: [
              "SGD + momentum (0.9): vision default; better generalization on CNNs; lr 0.1 with cosine decay.",
              "Adam: lr 0.001, betas (0.9, 0.999) - robust default when no recipe exists.",
              "AdamW: weight decay applied directly as w := w - lr*lam*w, decoupled from the adaptive gradient step.",
              "AdamW's decoupling fixed Adam's under-regularization; it enabled transformer training at scale.",
              "Batch norm: x_hat = (x - mu_B)/sqrt(sigma_B^2 + eps), then y = gamma*x_hat + beta with learned gamma, beta.",
              "Inference uses running averages of mu_B and sigma_B, not the (single-example) batch statistics.",
              "BN benefits: stable input distributions per layer, smoothed landscape allowing 10x lr, mild batch-noise regularization.",
            ],
            table: {
              caption: "Optimizer selection cheat sheet for deep learning practice.",
              headers: ["Setting", "Optimizer", "Typical lr", "Key companions"],
              rows: [
                ["Vision CNN (ResNet class)", "SGD + momentum 0.9", "0.1", "cosine decay, warmup, BN"],
                ["Transformer / NLP", "AdamW", "1e-4 to 3e-4", "warmup 5-10%, wd 0.01-0.1"],
                ["Small-data fine-tuning", "Adam", "1e-5 to 1e-4", "early stopping"],
                ["RNN sequence model", "Adam or SGD+clip", "1e-3", "gradient clipping norm 5"],
                ["Tabular / classical", "Adam or L-BFGS", "1e-3", "feature scaling"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "A normalized residual block, top to bottom",
              caption:
                "BN sits between the linear map and the activation; gamma/beta learn to un-normalize if needed.",
              layers: [
                { label: "Input activations", note: "distribution inherited from previous layer" },
                { label: "Linear / conv layer", note: "W x + b produces raw pre-activations" },
                { label: "Batch normalization", note: "x_hat = (x - mu_B)/sqrt(sigma_B^2 + eps)" },
                { label: "Scale and shift", note: "y = gamma * x_hat + beta (learned)" },
                { label: "Activation (ReLU)", note: "nonlinearity applied to normalized values" },
              ],
            },
            callout: {
              type: "exam",
              title: "AdamW's one-line difference is the question",
              body: "When asked to compare Adam and AdamW, write the exact update difference: Adam folds weight decay into the gradient (so adaptive scaling distorts it), AdamW applies w := w - lr * lam * w after the adaptive step. Then say why it matters: decoupling restores the intended regularization strength independent of each parameter's gradient history. One formula plus one consequence - full marks.",
            },
            keyTerms: [
              { term: "AdamW", definition: "Adam with weight decay decoupled from the adaptive gradient scaling and applied directly to weights." },
              { term: "Batch normalization", definition: "Per-channel standardization of activations using batch statistics, followed by learned scale gamma and shift beta." },
              { term: "Running statistics", definition: "Exponential averages of mu_B and sigma_B kept during training and used at inference." },
              { term: "Internal covariate shift", definition: "The drift of layer input distributions during training, reduced by BN." },
              { term: "Warmup", definition: "Brief low-lr ramp at training start that keeps normalized networks stable." },
            ],
            examQuestions: [
              {
                q: "Compare SGD+momentum, Adam and AdamW for deep learning practice, explaining the decoupled weight decay of AdamW. Then describe batch normalization's computation, its learned parameters, and three reasons it accelerates training.",
                marks: 7,
                outline: [
                  "SGD + momentum 0.9: vision default, cheap memory, good generalization on CNNs.",
                  "Adam: per-parameter adaptive steps, lr 0.001, robust default without a known recipe.",
                  "Adam/AdamW difference: Adam includes lam|w|^2 in the gradient (distorted by adaptive scaling); AdamW applies w := w - lr*lam*w directly.",
                  "Consequence: regularization strength becomes independent of gradient history; transformers became trainable.",
                  "BN computation: mu_B, sigma_B^2 per channel; x_hat = (x - mu_B)/sqrt(sigma_B^2 + eps); y = gamma*x_hat + beta.",
                  "Inference uses running averages since single samples have no batch.",
                  "Three benefits: stable layer inputs (covariate shift), smoothed landscape allowing larger lr, batch-noise regularization.",
                ],
              },
              {
                q: "Why does batch normalization need running averages at inference time?",
                marks: 2,
              },
              {
                q: "Why is plain batch normalization problematic for a batch size of 2, and what replaces it?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.6",
            title: "Model selection objectives and case studies: tuning a CNN, optimizing a recommender",
            body: [
              "Every search in Unit V optimizes a model-selection objective, and choosing that objective is itself a modelling decision. Candidates: a single validation metric (accuracy, F1, AUC), k-fold cross-validation averaging (robust for small data, k = 5 standard), or multi-objective scores (accuracy vs latency vs memory) handled by picking a constraint (accuracy within 1% of best, then fastest) or a Pareto frontier. Two rules guard the objective's integrity: the test set stays sealed until the final report, and the number of tuning trials is itself a hyperparameter - hundreds of trials on one split silently overfit that split, so finalists get confirmed on multiple seeds or folds.",
              "Case study 1 - tuning a CNN. Baseline: ResNet-18-style net on an image dataset, 30 epochs, SGD lr 0.1, reaches 73% validation accuracy. Step 1, lr sweep (log-uniform, 8 trials): lr 0.2 diverges, 0.1 works, 0.05 works slower - keep 0.1, add cosine decay, now 76%. Step 2, regularization (10 trials): weight decay 5e-4 beats 1e-4 and 1e-3; random crop + horizontal flip augmentation adds 4 points - 80%. Step 3, architecture and schedule (12 trials): widening the first block and warmup 5 epochs push to 86%. Step 4, fine polish with 20 random trials: best 89%, confirmed across 3 seeds at 88.7 +/- 0.4. Total 50 trials, each decision isolating ONE variable - the workflow is the lesson, not the numbers.",
              "Case study 2 - optimizing a recommender. System: matrix-factorization recommender predicting ratings; offline metric recall@10 on a temporal validation split (train on months 1-9, validate on month 10 - temporal splits prevent leakage from the future). Tuned knobs: embedding dimension d in {16, 32, 64, 128} - recall@10 rises to d = 64 (0.31) then flattens at 128 (0.312, twice the memory); learning rate 0.01 with exponential decay; negative sampling ratio 5 negatives per positive beats 1 and 20; regularization lam = 0.05 on embeddings. Final: recall@10 = 0.34 vs 0.22 baseline, confirmed on the following month. Note the multi-objective tie-break: d = 64 chosen over 128 because equal quality at half the serving memory - constraints enter model selection explicitly.",
              "The two cases distil the whole subject. Every improvement came from the loop of Unit I-IV: an objective defined, a hypothesis (lr too small, regularization too weak, embeddings too narrow), a controlled experiment, and a decision on evidence. The Unit V machinery - search strategy, budget management, honest objectives - decides HOW MANY experiments you can afford and how much you can trust the winner. The exam-ready takeaway: optimization in ML is two nested loops - gradients descend the loss inside, and disciplined search over hyperparameters and objectives steers the outside loop; mastering both, and knowing which loop a question is about, is the entire subject in one sentence.",
            ],
            bullets: [
              "Model-selection objective: validation metric, k-fold CV, or constrained multi-objective (accuracy floor, then speed).",
              "Keep the test set sealed; treat the number of trials as a hyperparameter to avoid validation overfitting.",
              "CNN case: 73% -> lr + cosine decay 76% -> wd 5e-4 + augmentation 80% -> width + warmup 86% -> polish 89%.",
              "One variable per experiment: never change lr and architecture in the same trial.",
              "Recommender case: temporal split (months 1-9 train, month 10 validate) to prevent future leakage.",
              "Recommender results: d = 64 embedding, lr 0.01 decayed, 5 negatives per positive, lam 0.05; recall@10 0.22 -> 0.34.",
              "Multi-objective tie-break: d = 64 over 128 - equal recall at half the memory; constraints belong in selection.",
            ],
            table: {
              caption: "CNN tuning ledger (validation accuracy, one change per step).",
              headers: ["Step", "Change", "Val accuracy", "Trials spent"],
              rows: [
                ["Baseline", "SGD lr 0.1, 30 epochs", "0.73", "1"],
                ["Schedule", "cosine decay added", "0.76", "8 (lr sweep)"],
                ["Regularize", "wd 5e-4 + flip/crop augmentation", "0.80", "10"],
                ["Capacity", "wider first block + 5-epoch warmup", "0.86", "12"],
                ["Polish", "20-trial random search, 3-seed confirm", "0.887 +/- 0.004", "20"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Choosing the model-selection objective",
              caption:
                "The objective is a design decision; each route has a failure mode to manage.",
              start: "You must score hyperparameter configurations",
              branches: [
                { label: "Large dataset, single split", outcome: "one validation metric; cheap but watch trial-count overfitting", good: true },
                { label: "Small dataset", outcome: "5-fold cross-validation average; robust, 5x the compute", good: true },
                { label: "Deployment constraints (latency, memory)", outcome: "constrained objective: accuracy floor, then minimize cost", good: true },
                { label: "Ranking / recommender", outcome: "temporal split + recall@k; never a random split (leakage)", good: true },
              ],
            },
            callout: {
              type: "tip",
              title: "One change per trial",
              body: "Both case studies obey the same discipline: exactly one variable changes per experiment, so every accuracy delta has one owner. This is scientific method applied to ML and the easiest 2 marks in any case-study question - say 'controlled comparison' explicitly and show the ledger table.",
            },
            keyTerms: [
              { term: "Model selection", definition: "Choosing hyperparameters or model variants by a held-out validation objective." },
              { term: "k-fold cross-validation", definition: "Averaging validation scores over k train/validation splits; robust for small data." },
              { term: "Temporal split", definition: "Training on earlier time periods and validating on later ones to prevent future leakage." },
              { term: "recall@k", definition: "Fraction of relevant items appearing in the top-k recommendations; a standard ranking metric." },
              { term: "Trial-count overfitting", definition: "Apparent gains that come from exploiting noise in the validation split across many trials." },
            ],
            examQuestions: [
              {
                q: "Describe a complete case study of tuning a CNN from a 73% baseline to about 89%: the objective, the sequence of controlled experiments, and the budget. Then outline optimizing a recommender with a temporal split and recall@10, noting one multi-objective trade-off.",
                marks: 7,
                outline: [
                  "Objective: validation accuracy on a fixed split; test set sealed until the end.",
                  "Baseline: SGD lr 0.1, 30 epochs -> 73%.",
                  "Experiment 1: log-uniform lr sweep (8 trials); lr 0.2 diverges, keep 0.1 + cosine decay -> 76%.",
                  "Experiment 2: weight decay 5e-4 and flip/crop augmentation -> 80% (10 trials).",
                  "Experiment 3: wider first block + 5-epoch warmup -> 86% (12 trials).",
                  "Experiment 4: 20-trial random search, winner confirmed on 3 seeds: 88.7 +/- 0.4.",
                  "Recommender: temporal split months 1-9/10, tune d (64 over 128: equal recall, half memory), negatives 5, lam 0.05; recall@10 0.22 -> 0.34.",
                ],
              },
              {
                q: "Why is a random train/validation split dangerous for a recommender evaluated on future behaviour?",
                marks: 2,
              },
              {
                q: "State two ways to present a multi-objective model-selection result fairly.",
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
      weightedTopics: [
        { topic: "Gradient descent mechanics and learning-rate analysis", weight: "High", note: "Hand-executed traces on f(x) = x^2 and the lr < 2/L stability bound appear almost every year." },
        { topic: "Lagrange multipliers and KKT conditions", weight: "High", note: "One full 7-mark derivation plus a short case analysis is the standard pattern." },
        { topic: "SVM as a constrained optimization problem", weight: "High", note: "Primal, dual, support vectors and kernel trick in one question; know the chain cold." },
        { topic: "Momentum, AdaGrad, RMSProp and Adam comparison", weight: "High", note: "Comparison tables and the 1/(1-beta) identity; expect 'derive why Adam was needed'." },
        { topic: "Convexity: sets, functions, local vs global minima", weight: "Medium-high", note: "Definitions plus one proof (x^2 or hinge) and the second-order test." },
        { topic: "Duality: weak, strong, Slater", weight: "Medium-high", note: "State-and-illustrate questions; the rectangle dual q(lam) = 10 lam - lam^2 is the go-to example." },
        { topic: "Newton, BFGS and L-BFGS with cost analysis", weight: "Medium", note: "Update rules plus the d^2 / d^3 vs O(md) cost comparison." },
        { topic: "Loss functions and their gradients (MSE, cross-entropy)", weight: "Medium", note: "The (p - y) derivation and the saturation argument recur reliably." },
        { topic: "SGD and mini-batch trade-offs", weight: "Medium", note: "Unbiasedness, variance ~ 1/B and epoch arithmetic in short questions." },
        { topic: "Modern practice: BO, GA/SA, batch norm, tuning workflows", weight: "Medium", note: "Unit V supplies the short-answer bank: exp(-delta/T), EI/UCB, BN formula, one-change-per-trial." },
      ],
    },
    {
      id: "six-weeks",
      heading: "Six-week study plan",
      weeks: [
        {
          week: "Week 1",
          focus: "Unit I - foundations and convexity",
          tasks: [
            "Write the ERM objective from memory and solve the three-ingredient question for regression and classification.",
            "Reproduce the MSE vs cross-entropy gradient derivation, including the p(1-p) saturation factor.",
            "Build the L/mu/kappa table for five functions (x^2, 3x^2, x^2 + 4y^2, 10x^2 + y^2, e^x).",
            "Prove x^2 and max(0, 1 - y) convex and state the local-equals-global corollary.",
          ],
        },
        {
          week: "Week 2",
          focus: "Unit II - first-order methods by hand",
          tasks: [
            "Execute the 10 -> 6 -> 3.6 trace and convert it to a step count with logs.",
            "Derive the divergence arithmetic for lr = 0.25 on diag(10, 1) and the stability bound lr < 2/L.",
            "Write the momentum velocity trace (1, 1.9, 2.71, ...) and the 1/(1-beta) identity.",
            "Reproduce the AdaGrad stall (lr/sqrt(t)) and the Adam update with bias correction.",
            "Run the linear-regression trace to w = 2.036 on the (1,2),(2,4),(3,6) dataset.",
          ],
        },
        {
          week: "Week 3",
          focus: "Unit III - second-order and advanced",
          tasks: [
            "Derive the Newton step from the quadratic model and cost it at d = 10,000.",
            "Write the secant condition and contrast BFGS (O(d^2)) with L-BFGS (O(md)).",
            "Run the Armijo backtracking table for f = x^2 at x = 3, p = -6, c1 = 0.25.",
            "Compute soft-thresholding S(z, 0.1) for five inputs and explain exact sparsity.",
            "Memorize 0.25^10 = 9.5e-7 and 1.2^50 = 9100 with their remedies.",
          ],
        },
        {
          week: "Week 4",
          focus: "Unit IV - constrained optimization",
          tasks: [
            "Solve max x*y with x + y = 10 by Lagrange multipliers and interpret lam = 5 as shadow price.",
            "Run the KKT two-case analysis on min x^2 s.t. x >= 1 until it takes two minutes.",
            "Derive the rectangle dual q(lam) = 10 lam - lam^2 and state weak/strong duality with Slater.",
            "Enumerate the five vertices of max 3x + 5y and identify the binding constraints.",
            "Write the SVM primal, stationarity w = sum alpha_i y_i x_i, and the slackness-support-vector link.",
          ],
        },
        {
          week: "Week 5",
          focus: "Unit V - modern optimization and practice",
          tasks: [
            "Compute the 12-run grid vs random coverage contrast and state the log-uniform rule.",
            "Draw the BO cycle and explain EI vs UCB in two sentences each.",
            "Run the 5-bit GA micro-run (11000 x 10011 -> 11011) and compute exp(-delta/T) at two temperatures.",
            "Write the BN formula and the AdamW vs Adam update difference.",
            "Reproduce the CNN ledger (73 -> 89%) and the recommender temporal-split design.",
          ],
        },
        {
          week: "Week 6",
          focus: "Integration and timed practice",
          tasks: [
            "Attempt two full past-style papers in 3-hour sittings, all units mixed.",
            "Rewrite the five one-breath recaps from memory; patch the gaps the same day.",
            "Build a one-page formula sheet: update rules, KKT four conditions, BO cycle, BN formula.",
            "Re-derive any question you missed twice; those are the exam-day risks.",
          ],
        },
      ],
    },
    {
      id: "last-day",
      heading: "Last-day strategy",
      bullets: [
        "Recite the five unit one-breath recaps aloud; anything you paraphrase vaguely is tonight's revision target.",
        "Redraw the eight master diagrams from memory: ERM pipeline, GD loop, momentum step, KKT checklist, trust-region rho flow, SVM primal-to-dual chain, BO cycle, GA generation.",
        "Drill the numeric set: 0.8 factor trace, 1/(1-beta), lr/sqrt(t), 0.25^10, exp(-0.2), q(lam) = 10 lam - lam^2, 36 at vertex (2,6).",
        "Write the four KKT conditions and the weak-duality proof (three lines) once each by hand.",
        "Review the optimizer comparison tables (SGD/Adam/AdamW; AdaGrad/RMSProp/Adam) - comparison questions are cheap marks.",
        "Skim your error log from Weeks 1-5; do not open new material today.",
        "Prepare the formula sheet you will rewrite in the first five minutes of the exam: update rules, stability bounds, KKT, BN, schedules.",
        "Sleep on schedule; optimization questions reward arithmetic precision, which dies at 3 a.m.",
      ],
    },
    {
      id: "exam-hall",
      heading: "Exam-hall playbook",
      bullets: [
        "First five minutes: on rough paper write the master formula list (GD update, 1/(1-beta), KKT four conditions, BN formula, lr < 2/L).",
        "For any 'explain method X' question: definition + update rule + worked numeric trace + one-line when-to-use. That skeleton scores in every unit.",
        "Lead constrained-optimization answers with the convention declaration: g(x) <= 0, L = f + lam*g, lam >= 0.",
        "In duality questions, quote the chain: convexity + Slater -> strong duality -> KKT.",
        "Show tables, not adjectives: trial logs for line search, vertex enumeration for LP, velocity traces for momentum.",
        "Budget by marks: 2-mark questions get three sentences; never spend fifteen minutes polishing a 7-mark proof's introduction.",
        "Finish with the sanity pass: every derivation re-checked for sign flips (the single most common mark-loser in this subject).",
      ],
    },
    {
      id: "slips",
      heading: "Common mistakes",
      bullets: [
        "Writing 'learning rate too large' without the factor arithmetic |1 - lr*lambda| > 1 - always show the number.",
        "Claiming convexity from a picture alone; the second-order test (Hessian PSD) is the proof the examiner marks.",
        "Mixing constraint conventions mid-answer, producing lam = -2 and 'rejecting' the true solution.",
        "Differentiating |w| at zero in lasso questions; the kink is the whole point - use soft-thresholding.",
        "Quoting the Adam update without bias correction, then wondering why early steps look wrong.",
        "Forgetting complementary slackness in SVM questions - it is the sentence that names the support vectors.",
        "Changing two hyperparameters in one case-study experiment, making the result unattributable.",
        "Inventing RGPV year citations or guessing past-paper numbers; describe the method, never fabricate provenance.",
      ],
    },
  ],
};
