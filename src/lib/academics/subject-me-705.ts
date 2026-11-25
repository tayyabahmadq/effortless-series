/**
 * Academics - RGPV 7th-semester Mechanical Engineering subject:
 * ME-705 MATLAB and R Programming.
 *
 * Structure mirrors subject-cs-302.ts: units -> one chapter per unit ->
 * numbered sections.  Each section carries body paragraphs, bullets, a
 * diagram, key terms, a callout, a table or code sample, and three
 * exam-style questions (one 7-mark with outline + two shorts).
 */

import type { AcademicSubject } from "./types";

export const me705: AcademicSubject = {
  id: "me-705",
  code: "ME-705",
  title: "MATLAB and R Programming",
  semester: "VII Semester",
  program: "RGPV · Mechanical Engineering",
  tagline:
    "The complete visual guide to computational tooling for mechanical engineers: MATLAB arrays, programming and toolboxes, R fundamentals and data analysis, and full mechanical applications from ODEs and Bode plots to Weibull reliability and vibration analysis.",
  description:
    "Five units walk from the MATLAB desktop through arrays, matrix algebra and plotting; into control flow, file I/O, symbolic math, optimization and Simulink; across to R with data frames, indexing, import and packages; through dplyr, ggplot2, t-tests, ANOVA, regression and the hypothesis-testing framework; and finish with mechanical applications - ode45 vibration runs, transfer functions and Bode analysis, curve fitting, Weibull reliability, vibration analysis and a complete MATLAB-plus-R mini project. Every section pairs working code with a redrawable diagram and the exam questions RGPV actually asks.",
  accentColor: "#f472b6",
  emoji: "MR",
  unitCount: 5,
  totalSections: 25,
  units: [
    {
      number: 1,
      roman: "I",
      title: "MATLAB Fundamentals",
      summary:
        "The MATLAB reflexes everything later depends on: the desktop and its panes, scripts versus functions, building and slicing arrays, matrix operations centred on the backslash solver, and plotting good enough for a lab report.",
      chapter: {
        number: "01",
        title: "MATLAB Fundamentals",
        intro:
          "Unit I installs the working habits of MATLAB: the desktop and its five panes, the difference between a script and a function, building and indexing arrays, matrix operations with the backslash solver at their centre, and annotated plotting from format strings to surfaces.",
        inOneBreath:
          "MATLAB treats every datum as a matrix; the desktop arranges Command Window, History, Workspace, Current Folder and Editor; scripts share the base workspace while functions keep a private one; brackets, the colon operator and constructors build arrays that are indexed with A(i, j); A\\b solves linear systems; and plot with hold on, labels and a format string turns results into engineering figures.",
        sections: [
          {
            number: "1.1",
            title: "The MATLAB desktop and interactive environment",
            body: [
              "MATLAB - the name contracts MATrix LABoratory - is an interactive numerical computing environment in which every quantity, from a single sensor reading to a full finite-element stiffness matrix, is stored as a matrix. The desktop arranges the work in five panes: the Command Window where commands are typed and answered immediately, the Command History that records every line ever entered, the Workspace browser listing live variables with their sizes and classes, the Current Folder panel showing files on the search path, and the Editor where programs are written. Knowing what belongs in each pane is the first step to working quickly rather than fighting the tool.",
              "Interaction happens by typing an expression and pressing Enter: MATLAB evaluates it, prints the result unless the line ends in a semicolon, and stores any unassigned answer in the variable ans. The commands who and whos list what the workspace holds, clc clears the Command Window, and clear wipes the variables themselves - a pair students routinely swap. Help comes three ways: help sqrt prints a short synopsis in the window, doc sqrt opens the full browser, and lookfor integration searches help text by keyword when the function name has been forgotten. The workspace persists with save and returns with load as a .mat file.",
              "The professional workflow moves from exploration to reuse. Rough calculations are tried in the Command Window, corrected, and recalled from the Command History; the sequence that works is promoted to a script in the Editor, commented, and rerun end-to-end on fresh data. Managing the Current Folder and the search path keeps scripts findable, and saving the workspace at the end of a session lets an experiment resume the next morning. In the exam, expect questions on pane roles, the effect of the semicolon, and the save/load cycle - each is a short, precisely markable fact.",
            ],
            bullets: [
              "MATLAB = MATrix LABoratory: every datum lives in a matrix; a scalar is the 1x1 case.",
              "Five panes: Command Window, Command History, Workspace, Current Folder and Editor.",
              "A trailing semicolon suppresses the echo; the result is still computed and stored.",
              "ans receives the last unassigned result; who lists variables and whos adds sizes and classes.",
              "help, doc and lookfor answer known-function, full-documentation and keyword questions; save/load persist the workspace as a .mat file.",
            ],
            codeExample: {
              language: "matlab",
              caption: "A first session: matrices, suppression, help and persistence.",
              code: `% First MATLAB session - everything is a matrix
A = [1 2 3; 4 5 6]        % 2x3 matrix, echoed to the window
b = [7; 8; 9];            % semicolon builds a column, echo suppressed
x = A * b                 % 2x1 result: matrix times vector
who                       % names of live variables
whos                      % ... with sizes and classes
save first_session.mat    % persist the whole workspace
help mtimes               % short synopsis for matrix multiply
doc plot                  % full documentation page
lookfor damping           % keyword search when the name is lost`,
            },
            diagram: {
              kind: "flow",
              title: "From typed commands to a reusable program",
              caption:
                "The standard MATLAB workflow: experiment, recall, promote, verify.",
              steps: [
                { label: "Experiment in the Command Window", note: "try operations on small matrices" },
                { label: "Recall the winning lines", note: "Command History re-executes any past line" },
                { label: "Save the sequence as a script", note: "New Script opens the Editor" },
                { label: "Add comments and a clean start", note: "clc, clear, close all at the top" },
                { label: "Run end-to-end and verify", note: "F5 - one click, one reproducible answer" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "'Describe the MATLAB desktop' is a standard opener. Name all five panes with one role each, then volunteer the semicolon rule and the ans variable - two extra facts that convert a four-mark sketch into a full-marks answer.",
            },
            keyTerms: [
              { term: "Command Window", definition: "The pane where MATLAB evaluates typed expressions immediately and prints results." },
              { term: "Workspace", definition: "The set of live variables; the browser lists their names, sizes and classes." },
              { term: ".mat file", definition: "The binary format MATLAB uses to save and reload a workspace." },
            ],
            examQuestions: [
              {
                q: "Describe the MATLAB desktop environment in detail: name each pane, explain its role, show how help is obtained in three ways, and explain how an interactive session is converted into a reusable program.",
                marks: 7,
                outline: [
                  "Define MATLAB and its matrix-first design.",
                  "Command Window: immediate evaluation, semicolon suppression, ans.",
                  "Command History: recall and re-execution of past lines.",
                  "Workspace and Current Folder: live variables, files and the search path.",
                  "Editor: writing, commenting and running scripts.",
                  "help, doc and lookfor - the three documentation routes.",
                  "save/load of the workspace; promoting a working command sequence into a script.",
                ],
              },
              {
                q: "What is the difference between the commands clc and clear?",
                marks: 2,
              },
              {
                q: "Where does MATLAB store the result of an expression that is not assigned to a variable, and what does a trailing semicolon change?",
                marks: 2,
              },
            ],
          },
          {
            number: "1.2",
            title: "Scripts versus functions",
            body: [
              "Both scripts and functions live in .m files, and the difference is scope. A script is a recorded sequence of commands: it runs in the base workspace, reads whatever variables are already there, and overwrites them freely - perfect for a one-off analysis, risky for anything reusable. A function is a self-contained program with its own private workspace: it receives inputs through arguments, returns outputs through the declared return list, and touches nothing else. The first executable line must be the declaration function [outputs] = name(inputs), and the file must be saved under the same name.",
              "Function anatomy earns marks. Immediately after the declaration come comment lines: the H1 line - the first one - is what lookfor searches and help displays, so it should state the purpose compactly, and the block that follows documents inputs, outputs and an example. Inside, nargin and nargout report how many arguments the caller actually supplied, enabling defaults and validation. Local variables vanish when the function returns, which is exactly why functions can be trusted: calling a routine twice with different data can never corrupt unrelated variables, unlike a script that overwrites a shared name.",
              "The practical rule is to explore in scripts and to formalize anything used twice as a function. A stress computation shows both: the script computes sigma = F/A for a vector of forces in the base workspace, while a function principal_stress(sx, sy, txy) returns the two principal stresses from any 2-D state. Test functions from the Command Window exactly as you would call a built-in, check the nargin paths, and keep one function per file unless using subfunctions. The examiner's favourite contrast is workspace isolation - state it explicitly for full marks.",
            ],
            bullets: [
              "Script: a recorded command sequence running in the shared base workspace - no arguments, no return values.",
              "Function: own private workspace; inputs arrive as arguments, outputs leave through the return list.",
              "Declaration: function [s1, s2] = name(a, b) must be the first executable line; the file name must match.",
              "The H1 comment line is displayed by help and searched by lookfor; document inputs, outputs and one example.",
              "nargin and nargout count the arguments actually supplied, enabling optional-argument defaults.",
            ],
            codeExample: {
              language: "matlab",
              caption: "The same physics as a script and as a reusable function.",
              code: `% --- script file: stress_check.m - runs in the base workspace ---
forces = [1000 1500 2000];        % N
area   = 78.5e-6;                 % m^2 cross-section
sigma  = forces / area            % element-wise over a scalar (Pa)

% --- function file: principal_stress.m - own workspace ---
function [s1, s2] = principal_stress(sx, sy, txy)
% PRINCIPAL_STRESS Principal stresses of a 2-D stress state.
%   [S1, S2] = PRINCIPAL_STRESS(SX, SY, TXY) returns s1 >= s2.
avg = (sx + sy) / 2;
r   = sqrt(((sx - sy) / 2)^2 + txy^2);
s1  = avg + r;
s2  = avg - r;
end

% --- calling the function exactly like a built-in ---
[s1, s2] = principal_stress(120, 40, -30)   % returns 130 and 30
help principal_stress                       % shows the H1 comment block`,
            },
            diagram: {
              kind: "compare",
              title: "Script versus function",
              caption:
                "One file format, two scopes - the distinction examiners probe first.",
              left: {
                heading: "Script (.m)",
                items: [
                  "Runs in the base workspace",
                  "No input or output arguments",
                  "A recorded command sequence",
                  "Reads and overwrites shared variables",
                  "Best for one-off exploration",
                ],
              },
              right: {
                heading: "Function (.m)",
                items: [
                  "Private local workspace",
                  "Declared inputs and outputs",
                  "Header: function [out] = name(in)",
                  "Cannot see base-workspace variables",
                  "Best for reusable, testable logic",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Name and document like the built-ins",
              body: "Save the file under the function's exact name - a mismatch makes MATLAB ignore it. Keep the H1 line terse ('PRINCIPAL_STRESS Principal stresses of a 2-D stress state.') because help prints the block up to the first blank line, and lookfor indexes the H1 line only.",
            },
            keyTerms: [
              { term: "Script", definition: "An .m file of commands executed in the base workspace with no arguments." },
              { term: "Function", definition: "An .m file with its own workspace, declared inputs and a return list." },
              { term: "H1 line", definition: "The first comment line after the declaration; displayed by help and searched by lookfor." },
            ],
            examQuestions: [
              {
                q: "Differentiate between a script file and a function file in MATLAB. Write the complete anatomy of a function including its help comments, explain nargin, and demonstrate with a worked function of your choice.",
                marks: 7,
                outline: [
                  "Define script: base workspace, no arguments, linear command sequence.",
                  "Define function: private workspace, declared inputs and outputs.",
                  "Write the declaration line function [s1, s2] = name(a, b).",
                  "Show the H1 line and help block, and state what help displays.",
                  "Explain nargin/nargout for optional arguments and validation.",
                  "Give a worked function (principal stress) and a command-line call.",
                  "Close with the workspace-isolation contrast as the decisive difference.",
                ],
              },
              {
                q: "What does the command help principal_stress display, and which line does lookfor search?",
                marks: 2,
              },
              {
                q: "A variable named testdata exists in the base workspace. Explain why a function cannot see it unless it is passed as an argument.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.3",
            title: "Creating and indexing arrays",
            body: [
              "Arrays are built with square brackets: spaces or commas separate elements across a row, semicolons or newlines separate rows, so [1 2 3; 4 5 6] is a 2x3 matrix in one line. Regular sequences come from the colon operator start:step:stop - 0:0.5:2 gives five values - and from linspace(a, b, n), which always hits both endpoints in exactly n points. Constructor functions make structured blocks: zeros(m,n), ones(m,n), eye(n) for the identity, diag to build from or extract a diagonal, rand for noise, magic for a magic square. The interrogators are size for rows-and-columns, length for the larger dimension and numel for the total count.",
              "Indexing reads and rewrites: A(i, j) is one element, A(2, :) the whole second row, A(:, 3) the third column, and the keyword end means the last index in its position, so A(end, end) is the bottom-right entry. Ranges work directly: A(1:2, 2:3) extracts the leading 2x2 block. Assignment with empty brackets deletes - A(2, :) = [] removes row two. MATLAB stores matrices column-major, so a single subscript A(5) counts down the columns, a fact worth one mark in the paper. The transpose operator A' swaps rows and columns, and reshape rearranges entries without moving data.",
              "A stiffness matrix makes it concrete. Three springs on a chain assemble into a 3x3 symmetric matrix K with diagonal stiffness values and negative off-diagonal couplings; diag(K) pulls the stiffness of each degree of freedom, K(1:2, 1:2) isolates the leading block, and K' confirms symmetry. The same vocabulary serves a data table: a column of measured loads is a vector, a month of readings is a matrix, and every later unit - plotting, solving, the R data frame - assumes fluency here. Practise building matrices in a single expression; exams ask for it.",
            ],
            bullets: [
              "Brackets build arrays: spaces (or commas) across a row, semicolons down the columns.",
              "Colon operator start:step:stop and linspace(a, b, n) generate uniform sequences; linspace fixes the count.",
              "Constructors: zeros, ones, eye, diag, rand, magic; size, length and numel interrogate the shape.",
              "A(i, j), A(2, :), A(:, 3), A(end, end) and range blocks A(1:2, 2:3) read any part of a matrix.",
              "A(2, :) = [] deletes a row; A' transposes; storage is column-major, so A(5) counts down columns.",
            ],
            codeExample: {
              language: "matlab",
              caption: "Construction, slicing and deletion on a spring stiffness matrix.",
              code: `% Building and slicing arrays
v  = 0:0.5:2               % [0 0.5 1 1.5 2] - step defaults to 1
w  = linspace(0, 2, 5)     % exactly 5 points, endpoints included
K  = [ 4 -2  0;
      -2  8 -2;
       0 -2  4 ];          % 3x3 spring stiffness matrix
I3 = eye(3);               % 3x3 identity
d  = diag(K)               % main diagonal [4 8 4]
K23  = K(2, 3)             % single element: -2
row1 = K(1, :)             % first row, all columns
sub  = K(1:2, 1:2)         % leading 2x2 block
Kcopy = K;
Kcopy(2, :) = []           % delete second row -> 2x3
Kt  = K'                   % transpose (equal here: K is symmetric)
sz  = [size(K) numel(K)]   % [3 3 9]`,
            },
            diagram: {
              kind: "pipeline",
              title: "Assembling a matrix in five moves",
              caption:
                "Every matrix problem in this course uses this same sequence.",
              stages: [
                { label: "Lay out rows with brackets", note: "spaces across, semicolons down" },
                { label: "Generate ranges", note: "colon operator and linspace" },
                { label: "Call a constructor", note: "zeros, ones, eye, diag, rand" },
                { label: "Index and slice", note: "A(i, j), A(:, k), A(end, end)" },
                { label: "Reshape or transpose", note: "reshape, repmat, A'" },
              ],
            },
            callout: {
              type: "warning",
              title: "Indexing starts at one",
              body: "MATLAB indices begin at 1, not 0 - A(0) is an error. And because storage is column-major, A(5) on a 3x3 matrix walks down the first two columns, not along the first row. Say both facts explicitly when a question asks about linear indexing.",
            },
            keyTerms: [
              { term: "Colon operator", definition: "start:step:stop - generates an evenly spaced row vector." },
              { term: "linspace", definition: "linspace(a, b, n) - exactly n points from a to b, endpoints included." },
              { term: "Column-major order", definition: "MATLAB stores matrices column by column, so a single subscript counts down the columns." },
            ],
            examQuestions: [
              {
                q: "Explain the methods of creating and manipulating arrays in MATLAB with syntax and one example each: literal construction, the colon operator, linspace, constructor functions, indexing and deletion.",
                marks: 7,
                outline: [
                  "Brackets with spaces and semicolons; state the row/column roles.",
                  "Colon operator start:step:stop with an example such as 0:0.5:2.",
                  "linspace(a, b, n) and when its fixed-count behaviour beats the colon.",
                  "Constructors zeros, ones, eye, diag, rand with the shape each returns.",
                  "Indexing: A(i, j), A(2, :), A(:, 3), A(end, end), blocks A(1:2, 2:3).",
                  "Deletion with A(2, :) = [] and transpose with A'.",
                  "Mention column-major linear indexing and size/length/numel as interrogators.",
                ],
              },
              {
                q: "Distinguish between 0:2:10 and linspace(0, 10, 6).",
                marks: 2,
              },
              {
                q: "For A = [1 2 3; 4 5 6], state what A(:, 2), A(end, 1) and A(:) return.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.4",
            title: "Matrix operations and linear algebra",
            body: [
              "Matrix arithmetic follows linear algebra, not calculator rules. Addition and subtraction need identical shapes; the matrix product A*B needs the inner dimensions to agree - an (m x n) times an (n x p) yields (m x p) - and division is replaced by the backslash: x = A\\b solves A*x = b by Gaussian elimination, faster and more stable than computing inv(A) first. The supporting cast: det for the determinant, rank for independence, trace for the diagonal sum, and eig for eigenvalues and eigenvectors - the pair that returns natural frequencies and mode shapes in Unit V.",
              "Element-wise operators put a dot before the symbol: .*, ./ and .^ apply the operation entry by entry, so [1 2; 3 4].^2 is [1 4; 9 16], whereas squaring that matrix is a genuine matrix product. The distinction is the single most common run-time error in MATLAB: evaluating a formula such as exp(-zeta*wn*t) .* cos(wd*t) over a vector of times needs dots throughout, or the dimensions refuse to match. Vector mechanics has dedicated helpers - dot(a, b), cross(a, b) and norm(a) - which appear throughout statics and dynamics problems.",
              "The worked system is a three-spring chain: K is symmetric positive-definite, F carries a single load, and u = K\\F returns the displacements in one line. Verify every solve with the residual norm(K*u - F) - machine precision confirms correctness, a habit worth stating in the exam. Then eig(K) previews vibration analysis: each eigenvalue is a squared natural frequency waiting for a mass matrix. Write conformability explicitly - state the dimensions of each factor - whenever you multiply; examiners award the check itself as a method mark.",
            ],
            bullets: [
              "A*B multiplies matrices when inner dimensions agree: (m x n)(n x p) -> (m x p).",
              "x = A\\b solves A*x = b directly - preferred over inv(A)*b, which is slower and less stable.",
              "A dot before an operator - .* ./ .^ - makes it element-wise; forgetting it triggers dimension mismatch.",
              "det, rank, trace and eig interrogate a matrix; eig returns eigenvalues and eigenvectors.",
              "Verify every solve with the residual norm(K*u - F); dot, cross and norm handle vector mechanics.",
            ],
            codeExample: {
              language: "matlab",
              caption: "Solving K*u = F the recommended way, with verification and eig.",
              code: `% Solving a linear system the right way
K = [ 4 -2  0;
     -2  8 -2;
      0 -2  4 ];           % N/mm
F = [0; 10; 0];            % kN
u = K \\ F                  % displacements - backslash, NOT inv(K)*F
residual = norm(K*u - F)   % machine-precision check
det(K)                    % non-zero -> non-singular
rank(K)                   % 3 -> full rank
[evec, lam] = eig(K)      % eigen-pairs (vibration preview)

% Element-wise vs matrix product
a = [1 2; 3 4];
b = a * a                 % matrix product
c = a .* a                % element-wise: [1 4; 9 16]`,
            },
            diagram: {
              kind: "fork",
              title: "Solving A*x = b for x",
              caption:
                "Three ways students write it - only one earns the method mark.",
              start: "You need x from A*x = b",
              branches: [
                { label: "x = A \\ b", outcome: "Backslash: one line, numerically stable, the recommended answer everywhere", good: true },
                { label: "x = inv(A) * b", outcome: "Explicit inverse: slower and amplifies rounding error - marked down", good: false },
                { label: "x = A / b", outcome: "Slash solves x*A = b - the wrong equation, the wrong answer", good: false },
              ],
            },
            callout: {
              type: "exam",
              title: "State the dimensions, then multiply",
              body: "Before writing A*B, state the shapes: 'A is 2x3, B is 3x1, so the product is 2x1'. The inner-dimension check is itself a marking point, and quoting A\\b over inv(A)*b is treated as evidence of professional practice.",
            },
            keyTerms: [
              { term: "Backslash operator", definition: "A\\b solves A*x = b by elimination - the recommended linear solver." },
              { term: "Element-wise operation", definition: "The dotted forms .*, ./ and .^ apply an operator entry by entry." },
              { term: "Eigenvalue pair", definition: "eig returns eigenvalues and eigenvectors - squared natural frequencies and mode shapes when mass is added." },
            ],
            examQuestions: [
              {
                q: "Explain matrix operations in MATLAB: the conformability rule for A*B, the element-wise family .* ./ .^, and the solution of linear systems. Solve the 3x3 system K*u = F for K = [4 -2 0; -2 8 -2; 0 -2 4] and F = [0; 10; 0] using the recommended operator, and state how you would verify the answer.",
                marks: 7,
                outline: [
                  "State the inner-dimension rule (m x n)(n x p) -> (m x p) with an example.",
                  "Differentiate A*B from A.*B on a 2x2 example, giving both results.",
                  "Introduce the backslash: u = K\\b solves K*u = F by elimination.",
                  "Explain why backslash beats inv(K)*F (speed and numerical stability).",
                  "Write u = K\\F for the given matrices and compute u.",
                  "Verify with the residual norm(K*u - F) at machine precision.",
                  "Note det, rank and eig as supporting diagnostics; eig previews Unit V.",
                ],
              },
              {
                q: "For A = [1 2; 3 4], give the results of A*A and A.*A and explain the difference.",
                marks: 3,
              },
              {
                q: "Why is A\\b preferred to inv(A)*b in MATLAB?",
                marks: 2,
              },
            ],
          },
          {
            number: "1.5",
            title: "Two- and three-dimensional plotting",
            body: [
              "plot(x, y) joins data points with a line, and plot(x, y, 'ro--') controls marker, colour and line style through one format string - here red circles on a dashed line. Annotations carry the marks: xlabel, ylabel and title, legend for multiple series, grid on, and axis([xmin xmax ymin ymax]) or xlim/ylim for limits. A second curve on the same axes needs hold on first - the most forgotten line in student code - and hold off closes the sequence. Every figure lives in its own window, and figure(n) targets a specific one.",
              "The wider family maps to engineering needs: semilogx, semilogy and loglog for data spanning decades - Bode plots in Unit V live on them - bar and histogram for distributions, pie for shares, polar for direction data, errorbar for measurement uncertainty, and subplot(m, n, p), which tiles several axes into one figure - the standard lab-report layout. Three dimensions start with plot3 for a space curve and mature with meshgrid, which builds the coordinate arrays X and Y that mesh, surf and contour need to draw a surface z = f(x, y).",
              "The classic mechanical plot is the damped free response x(t) = exp(-zeta*wn*t) .* cos(wd*t): the element-wise operators from section 1.4 generate the vector, plot draws the response, and a second pair of curves draws the decaying envelope - after hold on. Export closes the workflow: saveas(gcf, 'file.png') or print for publication resolution. In the exam, write the complete annotated sequence - generate data, plot with a format string, label, legend, grid - because partial plots leak marks at every missing line.",
            ],
            bullets: [
              "plot(x, y, 'ro--'): one format string sets colour, marker and line style.",
              "hold on stacks further curves on the same axes; hold off closes the sequence.",
              "xlabel, ylabel, title, legend and grid on are the annotation set every answer needs.",
              "semilogx / semilogy / loglog for decade-spanning data; subplot(m, n, p) tiles one figure with many axes.",
              "meshgrid plus mesh, surf or contour draws surfaces; saveas(gcf, ...) exports the figure.",
            ],
            codeExample: {
              language: "matlab",
              caption: "The damped vibration plot with envelope, plus a 3-D surface.",
              code: `% Damped free vibration - the classic first mechanical plot
zeta = 0.05;  wn = 20;                 % damping ratio, natural freq (rad/s)
wd   = wn * sqrt(1 - zeta^2);
t    = 0:0.01:3;                       % time vector
env  = exp(-zeta*wn*t);
x    = env .* cos(wd*t);               % dots required - vectors everywhere
figure; plot(t, x, 'b-', 'LineWidth', 1.5); hold on;
plot(t, env, 'r--', t, -env, 'r--'); hold off;
xlabel('time (s)'); ylabel('displacement x(t) (m)');
title('Damped SDOF free vibration');
legend('response', 'envelope'); grid on;
saveas(gcf, 'damped.png');

% 3-D surface: f(x, y) = x*exp(-x^2 - y^2)
[X, Y] = meshgrid(linspace(-2, 2, 60), linspace(-2, 2, 60));
figure; surf(X, Y, X .* exp(-X.^2 - Y.^2));
xlabel('x'); ylabel('y'); title('surface plot');`,
            },
            diagram: {
              kind: "flow",
              title: "Anatomy of a publishable plot",
              caption:
                "The six-step sequence that turns a vector into a report figure.",
              steps: [
                { label: "Prepare the data vectors", note: "element-wise operators if formulas are involved" },
                { label: "Choose the plot type", note: "plot, loglog, bar, surf - match the physics" },
                { label: "Draw with a format string", note: "colour, marker, line style in one argument" },
                { label: "Annotate", note: "xlabel, ylabel, title, legend, grid on" },
                { label: "Stack or tile", note: "hold on for more curves; subplot for panels" },
                { label: "Export", note: "saveas(gcf, 'fig.png')" },
              ],
            },
            callout: {
              type: "tip",
              title: "Two leaks in every plot answer",
              body: "First: forgetting hold on, so the second curve erases the first. Second: writing exp(-zeta*wn*t) * cos(wd*t) without the dot and meeting a dimension error. Write hold on immediately after the first plot and audit every operator for its dot before moving on.",
            },
            keyTerms: [
              { term: "hold on", definition: "Keeps the current axes so the next plot command adds to it instead of replacing it." },
              { term: "subplot", definition: "subplot(m, n, p) tiles a figure into an m-by-n grid of axes and selects panel p." },
              { term: "meshgrid", definition: "Builds the X and Y coordinate arrays that mesh, surf and contour need for surfaces." },
            ],
            examQuestions: [
              {
                q: "Write and explain a complete MATLAB sequence that plots the damped free vibration response x(t) = exp(-zeta*wn*t)*cos(wd*t) together with its decaying envelope on one labelled figure, and explain how subplot and meshgrid extend plotting to panels and surfaces.",
                marks: 7,
                outline: [
                  "Define zeta and wn; compute wd = wn*sqrt(1 - zeta^2).",
                  "Create the time vector t = 0:0.01:3.",
                  "Compute x with element-wise .* and .^ - explain why the dots are required.",
                  "plot(t, x) then hold on and add the two envelope curves.",
                  "Add xlabel, ylabel, title, legend and grid on.",
                  "Explain subplot(m, n, p) for tiling several axes in one figure.",
                  "Explain meshgrid with mesh/surf for z = f(x, y) and saveas for export.",
                ],
              },
              {
                q: "State the difference between plot, semilogy and loglog, naming one engineering use of each.",
                marks: 3,
              },
              {
                q: "What does meshgrid do, and which plotting functions require it?",
                marks: 2,
              },
            ],
          },
        ],
      },
    },
    {
      number: 2,
      roman: "II",
      title: "MATLAB Programming and Toolboxes",
      summary:
        "Programming MATLAB properly: branching and looping with the vectorization habit, file input and output from CSV to formatted reports, the Symbolic Math Toolbox, the optimization tools from fminbnd to fmincon, and Simulink block-diagram simulation.",
      chapter: {
        number: "02",
        title: "MATLAB Programming and Toolboxes",
        intro:
          "Unit II turns commands into programs: control flow with if, switch, for and while plus the vectorization habit; file I/O from .mat files to fprintf reports; the Symbolic Math Toolbox for exact mathematics; the Optimization Toolbox from fminbnd to fmincon; and Simulink, where differential equations become block diagrams.",
        inOneBreath:
          "if/switch decide, for/while repeat, break and continue redirect, and preallocation plus vectorization make loops fast; save/load, readtable/writetable and fopen/fprintf move data in and out; syms keeps mathematics exact with diff, int, solve and dsolve bridged to numbers by subs, double and matlabFunction; fminbnd, fminsearch and fmincon minimize objectives; and Simulink draws dynamic systems as blocks - two integrators and a feedback loop simulate m*x'' + c*x' + k*x = F.",
        sections: [
          {
            number: "2.1",
            title: "Control flow: branching and looping",
            body: [
              "Decisions begin with comparison operators: ==, ~=, <, >, <= and >= - note that ~= is MATLAB's not-equal, because = alone is assignment, a classic slip. The results are logical true/false values that if, elseif and else consume; switch compares one expression against a list of case values with otherwise as the fallback, and every construct closes with end. Compound conditions combine with && and || for scalars or & and | for arrays; the doubled forms short-circuit - the second operand is not evaluated when the first already decides - which makes them both faster and safer inside conditions.",
              "Loops repeat: for k = 1:n runs the body once per element of any loop expression, and while cond repeats until the condition turns false - which the body must eventually cause, or the loop runs forever. break leaves the innermost loop immediately, continue skips to the next pass, and nested loops iterate over the rows and columns of a matrix. Two habits separate professionals from beginners: preallocate the result with zeros before the loop instead of growing it, and prefer vectorization - writing y = sin(t) instead of a loop over t - which is shorter and typically an order of magnitude faster.",
              "A bisection loop shows every construct cooperating: the bracket [a, b] contains a sign change of f, a bounded loop halves it, an if tests which half survives, and a tolerance check triggers break. Around it, an if/elseif ladder classifies values into pass/fail bands. In the exam, trace one pass of every loop you write - index value, condition, action - because tracing is exactly what the marker does; and justify vectorization by naming the loop it replaces.",
            ],
            bullets: [
              "if / elseif / else / end evaluate logical conditions; switch matches one expression against case values.",
              "== compares, = assigns; ~= is not-equal - writing = inside a condition is the classic error.",
              "&& and || short-circuit scalar tests; & and | operate element-wise on logical arrays.",
              "for runs once per element of the loop expression; while repeats until its condition turns false.",
              "Preallocate results with zeros before looping, and prefer vectorized expressions - both speed and clarity.",
            ],
            codeExample: {
              language: "matlab",
              caption: "A classification ladder and a bisection loop with break.",
              code: `% Control flow: classify, accumulate, iterate
marks    = [72 88 45 96 61];
n        = numel(marks);
classes  = zeros(1, n);        % PREALLOCATE the result
for k = 1:n
    if marks(k) >= 75
        classes(k) = 3;        % distinction
    elseif marks(k) >= 60
        classes(k) = 2;        % first class
    else
        classes(k) = 1;        % repeat
    end
end

% Bounded loop with break: bisection on f(x) = x^3 - 2x - 5
f = @(x) x.^3 - 2*x - 5;
a = 2;  b = 3;                 % sign change brackets the root
for iter = 1:40
    m = (a + b) / 2;
    if f(a) * f(m) < 0
        b = m;
    else
        a = m;
    end
    if abs(b - a) < 1e-10
        break                  % tolerance reached - leave the loop
    end
end
fprintf('root = %.10f after %d bisections\\n', m, iter);`,
            },
            diagram: {
              kind: "flow",
              title: "How MATLAB walks a loop",
              caption:
                "Trace one pass exactly like this in the exam - index, body, update, test.",
              steps: [
                { label: "for k = 1:n - index takes 1", note: "the body sees k = 1" },
                { label: "Body executes once", note: "use k; never edit the range mid-loop" },
                { label: "Index advances automatically", note: "MATLAB moves k to the next element" },
                { label: "k beyond n - loop ends", note: "control passes past the closing end" },
                { label: "while re-tests every pass", note: "the body must change the condition - or it never stops" },
              ],
            },
            callout: {
              type: "warning",
              title: "Infinite loops are written, not found",
              body: "Every while body must move its own condition toward false - halve the bracket, increment a counter, tighten the tolerance. And initialize accumulators with zeros(1, n) before the loop: growing an array each pass forces a reallocation every iteration and quietly costs a factor of ten.",
            },
            keyTerms: [
              { term: "Short-circuit evaluation", definition: "&& and || skip the second operand when the first already decides the result." },
              { term: "Preallocation", definition: "Reserving the result array (e.g. with zeros) before a loop instead of growing it inside." },
              { term: "Vectorization", definition: "Replacing loops with whole-array operations such as y = sin(t) - shorter and far faster." },
            ],
            examQuestions: [
              {
                q: "Explain the control-flow constructs of MATLAB - if/elseif/else, switch, for, while, break and continue - with syntax, and write a program that classifies a vector of marks into three bands and finds a root of f(x) = x^3 - 2x - 5 on [2, 3] by bisection.",
                marks: 7,
                outline: [
                  "if/elseif/else syntax with end; note == versus = and ~=.",
                  "switch/case/otherwise as the readable multi-value alternative.",
                  "for k = 1:n with preallocated classes = zeros(1, n).",
                  "The classification ladder over the marks vector.",
                  "Bisection: bracket [2, 3], midpoint, sign test with if, halving.",
                  "Tolerance check abs(b - a) < 1e-10 with break; bounded for loop.",
                  "Contrast with the while form; mention vectorization as the loop-free habit.",
                ],
              },
              {
                q: "Differentiate between & and && in MATLAB.",
                marks: 2,
              },
              {
                q: "Why should the output of a loop be preallocated? Write the line that does it for a 1x100 result.",
                marks: 2,
              },
            ],
          },
          {
            number: "2.2",
            title: "File input and output",
            body: [
              "MATLAB reads its own .mat format with save and load - compact, type-preserving and the right choice for intermediate results. For text and spreadsheet data, readtable imports a CSV into a table object whose columns carry the header names, readmatrix returns plain numbers, and writetable exports a table back to CSV; the Import Tool does the same interactively and even generates reusable code. Excel files work through readtable directly. The table object is the modern entry point: T.load_N is a named column, height(T) counts rows, and summary(T) scans every column statistically.",
              "Low-level control belongs to fopen, fprintf and fclose: fopen returns a file identifier, fprintf(fid, format, data) writes with a format string of specifiers - %d for integers, %f fixed-point, %g compact, %s strings - decorated with field widths like %10.2f and escapes like \\n for a newline, and fclose always closes the handle. The same format string read by fscanf pulls formatted text back in, sprintf builds strings without any file, and diary records an entire console session to disk for a lab log. Forgetting fclose truncates output; examiners look for it.",
              "A lab-data round trip assembles everything. A data-acquisition CSV arrives; readtable imports it; a derived column - stress computed element-wise from load and diameter - is added; summary checks ranges for sensor glitches; writetable shares the cleaned table; and a small fprintf loop writes a formatted text report with aligned columns. Keep raw data files immutable, write processed results under new names, and close every handle. In the exam, the format-specifier table and the load-versus-readtable distinction are the reliable marks.",
            ],
            bullets: [
              "save/load move the whole workspace or named variables in .mat format - fast and type-preserving.",
              "readtable imports CSV/Excel into a table with named columns; writetable exports it back.",
              "fprintf(fid, fmt, ...) writes with specifiers %d, %f, %g, %s plus widths like %10.2f.",
              "fscanf reads formatted text; sprintf builds a string in memory; diary logs the console session.",
              "Every fopen needs its fclose - unclosed handles truncate the file.",
            ],
            codeExample: {
              language: "matlab",
              caption: "CSV in, derived column, formatted report out.",
              code: `% Lab-data workflow: CSV in, report out
T = readtable('tensile_tests.csv');          % headers become names
T.stress_MPa = T.load_N ./ (pi*(T.d_mm/2).^2);   % N/mm^2 = MPa
summary(T)                                   % statistical scan

writetable(T, 'tensile_processed.csv');      % share as CSV

% Formatted text report with aligned columns
fid = fopen('report.txt', 'w');
fprintf(fid, 'Tensile test summary - %d specimens\\n\\n', height(T));
fprintf(fid, '%-12s %10s %10s\\n', 'specimen', 'load_N', 'MPa');
for k = 1:height(T)
    fprintf(fid, '%-12s %10.1f %10.2f\\n', ...
            T.specimen{k}, T.load_N(k), T.stress_MPa(k));
end
fclose(fid);                                 % never forget this line`,
            },
            table: {
              caption: "Choosing the right I/O function.",
              headers: ["Task", "Function", "Notes"],
              rows: [
                ["Persist variables or a workspace", "save / load", "Binary .mat, types preserved"],
                ["Import CSV with headers", "readtable", "Table object, named columns"],
                ["Import numbers only", "readmatrix", "Plain numeric matrix"],
                ["Export a table", "writetable", "CSV or text"],
                ["Formatted text write", "fopen / fprintf / fclose", "Full control of layout"],
                ["Console transcript", "diary on / diary off", "Records every command and result"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "A measurement-data round trip",
              caption:
                "The laboratory workflow every Unit V application reuses.",
              stages: [
                { label: "Capture", note: "CSV written by the data logger" },
                { label: "Import", note: "readtable - headers become names" },
                { label: "Check", note: "summary and height for ranges and size" },
                { label: "Process", note: "derive columns element-wise" },
                { label: "Export", note: "writetable + fprintf report" },
              ],
            },
            callout: {
              type: "tip",
              title: "Raw data is read-only",
              body: "Never overwrite the file that came off the instrument. Read it, clean a copy, and write processed results under a new name; the audit trail from raw CSV to report is what makes an analysis defensible months later - and it is a one-line habit.",
            },
            keyTerms: [
              { term: "Table object", definition: "A container of named, typed columns; height(T) counts rows and T.col accesses one." },
              { term: "Format specifier", definition: "The %d, %f, %g and %s codes, with widths, that drive fprintf and fscanf." },
              { term: "diary", definition: "Records the entire console session - commands and output - to a text file." },
            ],
            examQuestions: [
              {
                q: "Describe MATLAB's file input/output facilities: native .mat files, table import and export, and low-level formatted I/O. Write the statements that import a CSV of tensile data, compute a stress column, and produce a formatted text report.",
                marks: 7,
                outline: [
                  "save/load for .mat - type-preserving persistence.",
                  "readtable to import; headers become column names; height and summary to check.",
                  "Derive stress = load ./ area element-wise in N/mm^2 = MPa.",
                  "writetable to export the processed table.",
                  "fopen with 'w', fprintf with %-12s and %10.2f specifiers.",
                  "Loop rows with fprintf; explain each specifier.",
                  "fclose to flush and close - and diary as the session log.",
                ],
              },
              {
                q: "Explain the format specifiers %d, %10.2f and %s with one use each.",
                marks: 3,
              },
              {
                q: "What is the difference between save/load and readtable/writetable?",
                marks: 2,
              },
            ],
          },
          {
            number: "2.3",
            title: "Symbolic Math Toolbox",
            body: [
              "The Symbolic Math Toolbox keeps mathematics exact instead of rounded. syms x w L E I real declares symbols; arithmetic on them builds symbolic expressions, and diff, int, limit and taylor differentiate, integrate, take limits and expand into series. simplify, expand and factor rewrite expressions algebraically, and solve finds roots of equations and systems symbolically - exact answers where numeric routines would return fifteen digits. The cost is speed: symbolic evaluation is orders of magnitude slower, which is why it belongs in derivations, not in simulation loops.",
              "The bridge back to numbers is subs plus double: subs(y, x, L/2) substitutes a value - or a whole list of variables - symbolically, and double evaluates the exact result to floating point. matlabFunction converts an expression into a fast anonymous function handle ready for plotting or ode45. dsolve solves ordinary differential equations analytically - the damped oscillator yields its exponentials and sines - while laplace and ilaplace transform to and from the s-domain that Unit V's transfer functions live in. assume restricts a symbol's domain and cleans up results.",
              "The mechanical showcase is beam deflection: given y(x) for a simply supported beam under a uniform load, diff(y, x) gives the slope, and E*I*diff(y, x, 2) recovers the bending moment - one derivative chain replacing a page of hand calculus, with simplify confirming the familiar w*x*(x - L)/2 shape. Verify the same beam numerically by substituting values, and cross-check a dsolve vibration result against ode45 from Unit V. The exam pattern is fixed: declare symbols, derive, then evaluate numerically with double(subs(...)) - show both forms.",
            ],
            bullets: [
              "syms declares symbols; arithmetic on them stays exact - no rounding, no floating point.",
              "diff, int, limit and taylor are the calculus verbs; simplify, expand and factor restructure results.",
              "solve returns exact roots of equations and systems; dsolve solves ODEs analytically.",
              "subs plus double moves symbolic to numeric; matlabFunction builds a fast function handle.",
              "laplace / ilaplace reach the s-domain used by transfer functions in control analysis.",
            ],
            codeExample: {
              language: "matlab",
              caption: "From beam deflection to bending moment, then to a number.",
              code: `% Symbolic verification of beam-deflection relations
syms x w L E I real
y  = w*x*(L^3 - 2*L*x^2 + x^3) / (24*E*I);   % simply supported, UDL
dy = diff(y, x);          % slope
M  = E*I*diff(y, x, 2);   % bending moment
V  = E*I*diff(y, x, 3);   % shear force
simplify(M)               % the familiar w*x*(x - L)/2 form
yMid = subs(y, x, L/2);   % exact mid-span deflection
double(subs(yMid, [w L E I], [5000 6 200e9 1e-4]))
                           % about 0.0042 m (4.2 mm)

% Symbolic ODE: the damped oscillator of Unit V
syms t m c k x(t)
eqn  = m*diff(x, t, 2) + c*diff(x, t) + k*x == 0;
dsolve(eqn)               % general solution: C1*exp(r1*t) + C2*exp(r2*t)`,
            },
            diagram: {
              kind: "fork",
              title: "Symbolic or numeric?",
              caption:
                "Both are correct tools - the error is using them in the wrong place.",
              start: "You need a mathematical result in MATLAB",
              branches: [
                { label: "Go symbolic (syms, diff, solve)", outcome: "Exact closed form - ideal for derivations, verification and algebra", good: true },
                { label: "Go numeric (fzero, ode45, interp1)", outcome: "Fast approximate answers for real data and simulation", good: true },
                { label: "Symbolic calls inside a big loop", outcome: "The symbolic engine is slow - convert once with matlabFunction instead", good: false },
              ],
            },
            callout: {
              type: "exam",
              title: "Show both forms",
              body: "Questions on the Symbolic Toolbox almost always end with 'hence evaluate for...'. Give the exact expression first, then double(subs(...)) with the numbers - the marker awards the exact form and the numeric one separately. Skipping either halves the marks.",
            },
            keyTerms: [
              { term: "Symbolic variable", definition: "A symbol declared with syms; arithmetic on it stays exact." },
              { term: "dsolve", definition: "Solves ordinary differential equations analytically, returning the general solution." },
              { term: "matlabFunction", definition: "Converts a symbolic expression into a fast anonymous function handle." },
            ],
            examQuestions: [
              {
                q: "What does the Symbolic Math Toolbox add to MATLAB? Using the deflection y(x) = w*x*(L^3 - 2*L*x^2 + x^3)/(24*E*I) of a simply supported beam under a uniform load, show how diff, simplify, subs and double extract the bending moment and a numeric mid-span deflection.",
                marks: 7,
                outline: [
                  "Explain exact versus numeric computation and where each belongs.",
                  "Declare syms x w L E I real and define y(x).",
                  "diff(y, x) for slope; E*I*diff(y, x, 2) for bending moment.",
                  "simplify(M) to recover the w*x*(x - L)/2 form.",
                  "subs(y, x, L/2) for the exact mid-span deflection.",
                  "double(subs(...)) with w = 5000, L = 6, E = 200e9, I = 1e-4 gives about 0.0042 m.",
                  "Note dsolve as the ODE counterpart and matlabFunction for fast reuse.",
                ],
              },
              {
                q: "State the difference between solve and roots.",
                marks: 2,
              },
              {
                q: "Write the single command that converts a symbolic expression Y into an anonymous function handle.",
                marks: 2,
              },
            ],
          },
          {
            number: "2.4",
            title: "Optimization Toolbox",
            body: [
              "Engineering design is optimization in disguise: minimum weight at fixed stiffness, minimum cost at fixed strength. MATLAB frames every such problem the same three ways - an objective function to minimize, design variables, and constraints. fminbnd minimizes a one-variable function on a bounded interval; fminsearch minimizes an unconstrained multivariable function by the Nelder-Mead simplex, needing only an initial guess; fmincon adds inequality, equality and bound constraints; and linprog handles fully linear objectives and constraints. The toolbox also contributes ga, the genetic algorithm, for surfaces riddled with local minima.",
              "Every call shares an anatomy: the objective as a function handle or file, an initial guess, and options. optimoptions tunes the display - 'iter' prints each iteration, the fastest way to watch a descent - plus tolerances and algorithms; the return carries the optimum and, critically, an exit flag describing why the search stopped. Optimizers are local: they walk downhill from wherever they start, so a different x0 can land in a different valley. The professional answer is multi-start - several initial guesses - plus a sanity check of the constraints at the answer.",
              "A spring design makes it concrete: wire diameter and coil count trade weight against stiffness and stress; the objective is weight, the constraints are a stress limit and a deflection window, and fmincon returns the cheapest feasible design. Even the toy case f = (x1 - 2)^2 + (x2 + 1)^2 + 10 teaches the pattern: define the handle, guess [0 0], call fminsearch, read [xopt, fopt], and check the exit flag. In the exam, name the tool for each problem class - bounded 1-D, unconstrained, constrained, linear - before writing any code.",
            ],
            bullets: [
              "Every optimization = objective + design variables + constraints; all solvers minimize.",
              "fminbnd: bounded one-variable; fminsearch: unconstrained multivariable (Nelder-Mead simplex).",
              "fmincon adds inequality, equality and bound constraints; linprog solves linear programs.",
              "optimoptions controls display, tolerances and algorithms; check the exit flag, not just the answer.",
              "Optimizers are local - vary the initial guess (multi-start) when the surface has many valleys.",
            ],
            codeExample: {
              language: "matlab",
              caption: "One- and two-variable minimization with the standard call anatomy.",
              code: `% 1-D bounded: cheapest spring wire in a window
obj  = @(d) d.^2 * 10;            % weight proxy
dOpt = fminbnd(obj, 2, 20)        % optimum diameter (mm) in [2, 20]

% Unconstrained multivariable: Nelder-Mead simplex
obj2 = @(x) (x(1) - 2)^2 + (x(2) + 1)^2 + 10;
x0   = [0, 0];                    % initial guess - optimizers are local
[xopt, fopt] = fminsearch(obj2, x0)   % expect [2, -1] and f = 10

% Constrained and linear (Optimization Toolbox):
% [x, fval] = fmincon(@cost, x0, A, b, Aeq, beq, lb, ub)
% [x, fval] = linprog(c, A, b)

opts = optimoptions('fmincon', 'Display', 'iter');
% 'iter' prints every step - watch the objective descend`,
            },
            diagram: {
              kind: "cycle",
              title: "Every optimizer runs the same loop",
              caption:
                "Descent methods differ only in how they pick the direction and the step.",
              steps: [
                { label: "Start from an initial guess x0", note: "optimizers are local" },
                { label: "Evaluate f and constraints", note: "the objective at the current point" },
                { label: "Pick a search direction", note: "gradient or simplex reflection" },
                { label: "Move to a better point", note: "line search or step rule" },
                { label: "Converged?", note: "step or gradient below tolerance - else loop back" },
              ],
            },
            callout: {
              type: "warning",
              title: "Local minima fool single runs",
              body: "A solver that reports success has only found a valley - maybe the valley. Run two or three initial guesses on any real design problem, compare the returned objectives, and quote the exit flag in your answer; reporting one run of fminsearch as 'the optimum' is the marking-scheme definition of overclaiming.",
            },
            keyTerms: [
              { term: "Objective function", definition: "The scalar function a solver minimizes, supplied as a handle or file." },
              { term: "fmincon", definition: "The constrained multivariable minimizer handling inequality, equality and bound constraints." },
              { term: "Local minimum", definition: "A point better than all nearby points; descent methods find one, not necessarily the global best." },
            ],
            examQuestions: [
              {
                q: "Outline the classification of optimizers in MATLAB - fminbnd, fminsearch, fmincon and linprog - and the anatomy of an optimization call. Minimize f(x) = (x1 - 2)^2 + (x2 + 1)^2 + 10 from x0 = [0, 0] and describe how you would decide the result is trustworthy.",
                marks: 7,
                outline: [
                  "Frame optimization: objective, variables, constraints - solvers minimize.",
                  "fminbnd for bounded 1-D; fminsearch for unconstrained multivariable (Nelder-Mead).",
                  "fmincon when constraints exist; linprog for linear problems.",
                  "Write the anonymous function handle and the call [xopt, fopt] = fminsearch(obj2, [0 0]).",
                  "State the expected answer [2, -1] with f = 10.",
                  "Trust: check the exit flag, verify constraints, retry other initial guesses (multi-start).",
                  "Note ga for surfaces with many local minima.",
                ],
              },
              {
                q: "Why can fminsearch return a different answer for a different initial guess?",
                marks: 2,
              },
              {
                q: "State one situation that demands fmincon rather than fminsearch.",
                marks: 2,
              },
            ],
          },
          {
            number: "2.5",
            title: "Simulink block-diagram simulation",
            body: [
              "Simulink is MATLAB's graphical twin for dynamic systems: instead of writing differential equations, you draw them. The Library Browser supplies blocks grouped by category - Sources (Step, Sine Wave, Constant), Sinks (Scope, To Workspace, Display), Continuous (Integrator, Transfer Fcn), Math Operations (Gain, Sum, Product) and Signal Routing (Mux, Switch) - and each block carries a parameter dialog. Signals flow along directed lines from output ports to input ports; the diagram, read as integrations and gains, is the differential equation.",
              "The workflow is fixed: drag blocks, double-click to set parameters - a Gain of k/m, an Integrator with an initial condition - wire them, then open Model Settings to choose the solver and stop time; ode45 with a ten-second horizon is the default posture. Run, and the Scope shows the response; a To Workspace block exports the trajectory to MATLAB variables for plotting and analysis. Subsystems collapse a tangle into one labelled block, exactly the way a function hides its body in Unit I.",
              "The canonical model is the mass-spring-damper: acceleration a = (F - k*x - c*v)/m enters one Integrator to give velocity, a second Integrator gives displacement, and feedback loops through Gain blocks close the equation. Compare the Scope with the ode45 solution of the same ODE - identical curves, two philosophies. sim() drives the model from a script and set_param changes parameters programmatically, which is how design studies sweep stiffness values. The exam asks for exactly this diagram: two integrators in series, feedback through gains, into a scope.",
            ],
            bullets: [
              "Simulink draws dynamic systems: blocks plus signals equal differential equations without syntax.",
              "Core libraries: Sources, Sinks, Continuous (Integrator, Transfer Fcn), Math Operations, Signal Routing.",
              "Parameters live in each block's dialog; Model Settings fixes solver and stop time (ode45 by default).",
              "Scope displays the run; To Workspace exports trajectories to MATLAB for further analysis.",
              "A second-order ODE is two Integrators in series with Gain feedback; sim() runs models from scripts.",
            ],
            codeExample: {
              language: "matlab",
              caption: "Driving a Simulink model from MATLAB and cross-checking with ode45.",
              code: `% Drive a Simulink model from MATLAB
open_system('msd_model');                    % mass-spring-damper diagram
set_param('msd_model', 'StopTime', '10');    % simulation horizon (s)
out = sim('msd_model');                      % SimulationOutput object
plot(out.t, out.x);                          % To Workspace signals
xlabel('t (s)'); ylabel('x (m)'); grid on;

% Cross-check: the same ODE through ode45
m = 2; c = 10; k = 50;                       % kg, N.s/m, N/m
msd = @(t, y) [y(2); -(k*y(1) + c*y(2)) / m];
[t2, y2] = ode45(msd, [0 10], [0.05; 0]);
figure; plot(t2, y2(:, 1)); title('ode45 cross-check'); grid on;`,
            },
            table: {
              caption: "The five libraries every model starts from.",
              headers: ["Library", "Typical blocks", "Used for"],
              rows: [
                ["Sources", "Step, Sine Wave, Constant", "Inputs and disturbances"],
                ["Sinks", "Scope, To Workspace, Display", "Viewing and exporting"],
                ["Continuous", "Integrator, Transfer Fcn", "Dynamics and states"],
                ["Math Operations", "Gain, Sum, Product", "Combining signals"],
                ["Signal Routing", "Mux, Switch", "Routing and multiplexing"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "From diagram to response curve",
              caption:
                "The five-stage Simulink workflow, identical for every model.",
              stages: [
                { label: "Drag blocks", note: "sources, math, integrators, sinks" },
                { label: "Set parameters", note: "double-click: gain = k/m, initial conditions" },
                { label: "Wire the signals", note: "output port to input port" },
                { label: "Configure solver and stop time", note: "ode45, 10 s horizon" },
                { label: "Run and read", note: "Scope to view; To Workspace to export" },
              ],
            },
            callout: {
              type: "exam",
              title: "The two-integrator diagram is a guaranteed question",
              body: "Draw m*x'' + c*x' + k*x = F as: Step/force into a Sum, output through Gain 1/m to Integrator (velocity) to Integrator (displacement), with feedback lines through Gain c and Gain k back into the Sum with minus signs, and a Scope on displacement. Label every block - unlabelled diagrams lose a mark each.",
            },
            keyTerms: [
              { term: "Block", definition: "A Simulink component with parameters and ports; the diagram's operator." },
              { term: "Solver", definition: "The numerical integrator (default ode45) and stop time set in Model Settings." },
              { term: "To Workspace", definition: "A sink block that exports a signal as a MATLAB variable for analysis." },
            ],
            examQuestions: [
              {
                q: "Explain the Simulink modelling environment and draw the block diagram that simulates m*x'' + c*x' + k*x = F(t). Describe how the result is exported to MATLAB and verified against an ode45 solution of the same equation.",
                marks: 7,
                outline: [
                  "Purpose: graphical simulation of dynamic systems; libraries and blocks.",
                  "Draw: force source -> Sum -> Gain 1/m -> Integrator (velocity) -> Integrator (displacement).",
                  "Feedback: displacement through Gain k, velocity through Gain c, into the Sum with minus signs.",
                  "Set m, c, k in the block dialogs; Scope on the displacement signal.",
                  "Model Settings: solver ode45 and stop time; run and read the Scope.",
                  "To Workspace block (or sim()) exports the trajectory to MATLAB variables.",
                  "Verification: the same ODE through ode45 yields the identical curve.",
                ],
              },
              {
                q: "Name the two Simulink blocks that turn acceleration into displacement, and state their order in the diagram.",
                marks: 2,
              },
              {
                q: "What does a To Workspace block do?",
                marks: 2,
              },
            ],
          },
        ],
      },
    },
    {
      number: 3,
      roman: "III",
      title: "R Fundamentals",
      summary:
        "The R side of the course: the RStudio environment, the data-structure ladder from atomic vector to data frame, the four ways to index and subset, importing and exporting real files, and the package system anchored by the tidyverse.",
      chapter: {
        number: "03",
        title: "R Fundamentals",
        intro:
          "Unit III crosses to R: the RStudio layout and its four panes, vectors, factors, matrices, lists and data frames, indexing by position, name and logical mask, the import-export round trip for laboratory files, and the package ecosystem with the pipe at its centre.",
        inOneBreath:
          "R assigns with the arrow and auto-prints in the console; c() builds atomic vectors, factor() stores categories, matrix() is 2-D and single-type, lists hold anything, and a data frame is a list of equal-length vectors; subsetting works by position, negative position, name and logical mask, with [[ ]] opening lists and NA arriving silently from out-of-range indices; read.csv plus str/head/summary imports and verifies; and packages install once with install.packages but attach every session with library, the tidyverse piping frames through filter, mutate, group_by and summarise.",
        sections: [
          {
            number: "3.1",
            title: "The R environment and RStudio",
            body: [
              "R is a language and environment built for statistics: every operation from mean() to ANOVA is a function call on data, and the language is free, open-source and extended through thousands of packages on CRAN, the Comprehensive R Archive Network. Commands are interpreted immediately in the console - the same read-evaluate-print loop as MATLAB - and everything that exists is an object: a vector of measurements, a fitted model, a plot. Base R ships the core statistics; packages add the rest, which is what makes R grow with its field.",
              "RStudio is the standard front end, and its four panes organize the work. Top-left, the Source editor where scripts are written and sent to the console line by line with Ctrl+Enter; bottom-left, the Console itself. Top-right, Environment and History: the objects currently in memory and the commands that built them. Bottom-right, a tabbed panel for Files, Plots, Packages and Help. A Project binds a working directory, scripts, history and settings into one folder - the single habit that prevents every 'file not found' problem.",
              "The first session establishes the idiom: assignment with the arrow force <- c(120, 135, 150) creates a vector, typing its name auto-prints it, and mean, sd and summary answer immediately. Help comes with ?sd for a known function and ??regression to search all help pages by keyword - R's lookfor. Scripts are saved as .R files, and installing R plus RStudio is the only setup this subject needs. In the exam, the pane layout, the arrow assignment, and the ?/?? pair are the standard short questions - learn them as facts.",
            ],
            bullets: [
              "R: open-source language for statistical computing; CRAN distributes R and its packages.",
              "RStudio panes: Source, Console, Environment/History, and Files/Plots/Packages/Help.",
              "<- is the assignment arrow; typing an object's name auto-prints it in the console.",
              "?function opens one help page; ??keyword searches every help page - R's lookfor.",
              "A Project fixes the working directory and keeps scripts, data and history together.",
            ],
            codeExample: {
              language: "text",
              caption: "A first R session, sent line by line with Ctrl+Enter.",
              code: `# First steps in the R console
force <- c(120, 135, 150, 142, 128)   # concatenate into a vector
force                                 # auto-prints at the console
mean(force)                           # average
sd(force)                             # sample standard deviation
summary(force)                        # five-number summary plus mean

?sd                                   # help for a known function
??regression                          # search all help pages

# RStudio: Ctrl+Enter sends the current line from Source to Console
# An RStudio Project keeps scripts, data and history in one folder`,
            },
            diagram: {
              kind: "layers",
              title: "The RStudio screen, top to bottom",
              caption:
                "Four panes, four jobs - name them in this order in the exam.",
              layers: [
                { label: "Source (top-left)", note: "write scripts, send lines with Ctrl+Enter" },
                { label: "Console (bottom-left)", note: "immediate commands and their output" },
                { label: "Environment / History (top-right)", note: "objects in memory, past commands" },
                { label: "Files / Plots / Packages / Help (bottom-right)", note: "data folder, graphs, add-ons, docs" },
              ],
            },
            callout: {
              type: "tip",
              title: "Projects end path problems",
              body: "Create one RStudio Project per assignment: it pins the working directory, so read.csv('tensile_log.csv') just works from any machine. Pair it with the arrow assignment and Ctrl+Enter, and the environment disappears as an obstacle - the exam's short questions on panes and help are then free marks.",
            },
            keyTerms: [
              { term: "Console", definition: "The pane where R evaluates typed expressions immediately (the read-evaluate-print loop)." },
              { term: "CRAN", definition: "The Comprehensive R Archive Network - the repository distributing R and its packages." },
              { term: "Project", definition: "An RStudio container binding a working directory, scripts, history and settings." },
            ],
            examQuestions: [
              {
                q: "Describe the R environment and the RStudio IDE: the language's purpose, the four panes and their roles, the assignment idiom, and the help system, with a short first-session example.",
                marks: 7,
                outline: [
                  "Define R: open-source language for statistical computing; CRAN distributes it.",
                  "Source editor: scripts sent line by line with Ctrl+Enter.",
                  "Console: immediate evaluation and auto-printing.",
                  "Environment/History: live objects and past commands.",
                  "Files/Plots/Packages/Help panel.",
                  "Assignment with <- ; example force <- c(120, 135, 150).",
                  "?function and ??keyword as the two help routes; Projects fix the working directory.",
                ],
              },
              {
                q: "Distinguish between ?mean and ??regression in R.",
                marks: 2,
              },
              {
                q: "Write the R line that stores 120, 135 and 150 in a vector named force and then prints its standard deviation.",
                marks: 2,
              },
            ],
          },
          {
            number: "3.2",
            title: "Vectors, matrices, data frames and lists",
            body: [
              "The atom of R is the atomic vector, built with c(): one dimension, one type - numeric, character, logical or integer - and if types mix, coercion silently promotes everything to the most flexible type present, which is why c(1, 'a') becomes characters. Arithmetic is vectorized with recycling: load * 2 doubles every element, and shorter operands wrap around - convenient, and a bug when lengths are not multiples. A factor is a categorical vector that stores levels instead of raw text - 'steel' and 'Al' become integer codes with a lookup table - which is how grouping variables reach the statistics of Unit IV.",
              "A matrix is a 2-D vector of one type, created with matrix(1:6, nrow = 2, ncol = 3), filling column-first unless byrow = TRUE; cbind and rbind glue vectors by column or row. A list drops the type restriction: its elements can be anything, including other lists. The workhorse is the data frame - technically a list of equal-length vectors - so each column has its own type: numeric loads, factor materials, logical pass flags. str() exposes the structure, head() previews rows, and summary() scans every column.",
              "A test log shows the payoff: four specimens with number, material, load and a pass flag live in one data frame; str() confirms material is a factor and load is numeric; summary() returns counts per material and a five-number summary for each numeric column. Matrices serve pure numeric work - a stiffness matrix from Unit I ports directly - while data frames carry real experimental data to dplyr and ggplot2 in Unit IV. The exam wants the definition chain: vector, factor, matrix, list, data frame, each with one example.",
            ],
            bullets: [
              "c() builds atomic vectors - one dimension, one type; mixing types coerces upward.",
              "Vectorized arithmetic recycles the shorter operand - convenient, and a bug when lengths mismatch.",
              "factor() stores categories as levels - the grouping variable every Unit IV test needs.",
              "matrix(): 2-D and single-type, filled column-first; cbind/rbind assemble; lists hold mixed elements.",
              "data.frame: a list of equal-length vectors, one type per column - inspect with str(), head(), summary().",
            ],
            codeExample: {
              language: "text",
              caption: "The workhorse structures in one script.",
              code: `# The three workhorse structures
load  <- c(10.2, 12.5, 9.8, 11.1)               # numeric vector
mat   <- factor(c("steel", "Al", "steel", "Al"))
frame <- data.frame(specimen = 1:4,
                    material = mat,
                    load_kN  = load,
                    passed   = load > 10)
str(frame)          # structure: the type of every column
head(frame, 2)      # first two rows
summary(frame)      # per-column statistics

M <- matrix(1:6, nrow = 2, ncol = 3)   # fills column-first by default
M
lst <- list(name = "test-01", data = frame, ok = TRUE)  # mixed list
lst$data                               # list access with $`,
            },
            diagram: {
              kind: "pyramid",
              title: "R data structures from simple to rich",
              caption:
                "Everything is a vector at heart; the data frame is where analysis happens.",
              tiers: [
                { label: "Atomic vector", note: "one type: numeric, character, logical" },
                { label: "Factor", note: "categorical vector with levels" },
                { label: "Matrix", note: "2-D, still one type" },
                { label: "List", note: "1-D, elements of any type" },
                { label: "Data frame", note: "list of equal-length vectors - the analysis workhorse" },
              ],
            },
            callout: {
              type: "exam",
              title: "The one-line definition they want",
              body: "A data frame is a list of equal-length vectors, one type per column. Write exactly that sentence, then prove it with str(frame) - the examiner's definition line and the demonstration line are marked separately. Add that matrices are single-type and lists unrestricted, and the whole structure question is banked.",
            },
            keyTerms: [
              { term: "Data frame", definition: "A list of equal-length vectors giving one type per column - R's table structure." },
              { term: "Factor", definition: "A categorical vector storing integer codes with a levels lookup." },
              { term: "Coercion", definition: "Silent type promotion when c() receives mixed types, e.g. numeric becoming character." },
            ],
            examQuestions: [
              {
                q: "Explain R's data structures - vector, factor, matrix, list and data frame - with the creation syntax, one example each and the relations among them. Illustrate with a four-row test log containing a material and a load column.",
                marks: 7,
                outline: [
                  "Atomic vector with c(); single type; coercion rule when types mix.",
                  "Factor: categorical storage with levels; why tests need it for grouping.",
                  "Matrix: matrix(1:6, nrow = 2, ncol = 3); single type; column-first fill; cbind/rbind.",
                  "List: heterogeneous elements, built with list().",
                  "Data frame: equal-length columns of possibly different types.",
                  "Build the test log: specimen, material (factor), load_kN, passed (logical).",
                  "Inspect with str(), head(), summary() and state what each prints.",
                ],
              },
              {
                q: "What does str(frame) display, and why run it immediately after importing data?",
                marks: 3,
              },
              {
                q: "State the coercion rule when c() receives both numbers and strings.",
                marks: 2,
              },
            ],
          },
          {
            number: "3.3",
            title: "Indexing and subsetting",
            body: [
              "R selects data four complementary ways. Positive positions: v[c(1, 3)] picks elements one and three. Negative positions: v[-2] drops the second. Names: v['b'] or df$load_kN. And the workhorse, logical masks: v[v > 15] keeps every position where the comparison is TRUE, and masks combine with & and | - frame[frame$material == 'steel' & frame$load_kN > 10, ] is the daily idiom of data analysis. which() converts a mask back into positions, and %in% tests membership against a set of allowed values.",
              "Matrices and data frames extend the pattern with two indices: M[rows, cols], where a blank side means everything - frame[1:3, ] is the first three rows of all columns. subset(frame, condition, select = columns) wraps the same operation in readable words. Lists carry the classic trap: lst[1] returns a one-element list, while lst[[1]] or lst$x returns the element itself - single brackets keep the container, double brackets open it. Out-of-range positions do not error: v[10] on a three-element vector returns NA, which then propagates silently through arithmetic.",
              "A quality-control pass shows the full toolkit on a six-specimen log: select steel rows with a mask, add a condition on load, extract one column by name with $, then reproduce the result with subset() for readability. Check every filter with nrow() before and after - a mask that is accidentally all FALSE deletes the dataset quietly. The exam pattern is predictable: given a small frame, write one line for a stated selection - practise masks until the comma between rows and columns is reflex.",
            ],
            bullets: [
              "Four selectors: positions v[c(1, 3)], negative v[-2], names v['b'] / df$col, and logical masks v[v > 15].",
              "Two-index form M[rows, cols]; a blank side means all - frame[1:3, ] takes rows, every column.",
              "Masks combine with & and |; which() returns positions; %in% tests membership in a set.",
              "Lists: [ returns a list, [[ (or $) returns the element - the most common indexing error.",
              "Out-of-range indexing returns NA without warning - check filters with nrow() before and after.",
            ],
            codeExample: {
              language: "text",
              caption: "Every selection style on one test log.",
              code: `# Subsetting a test log
frame <- data.frame(specimen = 1:6,
                    material = c("steel", "steel", "Al", "Al", "steel", "Al"),
                    load_kN  = c(12, 9, 11, 8, 13, 10),
                    passed   = c(TRUE, FALSE, TRUE, FALSE, TRUE, TRUE))

frame$load_kN                          # one column as a vector
frame[1:3, ]                           # first three rows, all columns
frame[frame$material == "steel", ]     # rows where material is steel
frame[frame$load_kN >= 10 & frame$passed, "specimen"]
subset(frame, load_kN > 9, select = c(specimen, load_kN))

# Vectors: positive, negative, logical, named
v <- c(a = 10, b = 20, c = 30)
v[c(1, 3)]; v[-2]; v[v > 15]; v["b"]

# Lists: [ returns a list, [[ returns the element
lst <- list(x = 1:5, label = "run-1")
lst[1]; lst[[1]]; lst$x`,
            },
            diagram: {
              kind: "fork",
              title: "You need part of an R object",
              caption:
                "Four correct selectors and the one silent failure mode.",
              start: "You need part of an object",
              branches: [
                { label: "Logical mask: v[v > 15]", outcome: "Selects by condition - the idiom every analysis is built on", good: true },
                { label: "Position: v[c(1, 3)] / v[-2]", outcome: "Keeps or drops by position - quick and explicit", good: true },
                { label: "Name: df$col, v['b']", outcome: "Readable column access on data frames", good: true },
                { label: "Out of range: v[10] on 3 elements", outcome: "Silent NA - R never errors, so the value poisons later arithmetic", good: false },
              ],
            },
            callout: {
              type: "warning",
              title: "NA is silent",
              body: "R returns NA for out-of-range indices instead of erroring, and NA propagates through every later calculation. After any filter, run nrow() (or sum(is.na(x))) before trusting the result - and remember lst[1] versus lst[[1]]: the first is still a list, the second is the thing inside.",
            },
            keyTerms: [
              { term: "Logical mask", definition: "A boolean vector used as an index to keep the positions where it is TRUE." },
              { term: "subset()", definition: "A readable wrapper for row-condition and column-selection indexing." },
              { term: "NA", definition: "R's missing-value marker; returned silently by out-of-range indexing and propagated by arithmetic." },
            ],
            examQuestions: [
              {
                q: "Explain the indexing and subsetting mechanisms of R for vectors, matrices, data frames and lists, including the difference between [ and [[. Given a test log with material, load and passed columns, write one line for each of: steel rows only; rows with load at least 10 that passed; and the specimen column by name.",
                marks: 7,
                outline: [
                  "Four vector selectors: positive, negative, name, logical mask.",
                  "Two-index form M[rows, cols]; blank means all; frame[1:3, ].",
                  "Masks combine with & and |; give the steel-rows line.",
                  "Give the load-and-passed line with a column name in the second slot.",
                  "subset() as the readable equivalent.",
                  "$ column access and which() / %in% helpers.",
                  "Lists: [ returns a list, [[ (or $) returns the element - the classic trap.",
                ],
              },
              {
                q: "What is the difference between lst[1] and lst[[1]]?",
                marks: 2,
              },
              {
                q: "What does v[10] return when v has three elements, and how does is.na() help?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.4",
            title: "Importing and exporting data",
            body: [
              "read.csv() is the front door: it reads a comma-separated file with header = TRUE by default, turns column names into legal R names, and guesses every column's type - a guess you must verify. read.table() generalizes with sep for the field separator and dec for European decimal marks; readxl::read_excel() pulls sheets from .xlsx files after install.packages('readxl'). The working directory decides where paths resolve - getwd() queries it, setwd() moves it, or better, an RStudio Project fixes it for the whole analysis so 'tensile_log.csv' just works.",
              "Import is not done until it is checked. str() confirms every column type - numbers that arrived as text are the classic failure; head() eyeballs the first rows; summary() exposes ranges and NA counts; any(is.na(x)) asks directly. Fixes follow: as.numeric() and as.factor() repair types, and rows with missing measurements leave with raw[!is.na(raw$load_kN), ]. Export mirrors import: write.csv(clean, file, row.names = FALSE) avoids the junk index column, and saveRDS()/readRDS() round-trip a single object with types preserved exactly.",
              "The lab round trip is the complete discipline. A data logger writes tensile_log.csv; read.csv imports it; the three checks run; a factor is fixed and incomplete rows dropped; the cleaned frame is shared as CSV for colleagues and archived as RDS with types intact. Keep raw data immutable - never overwrite the file that came off the instrument - and record the import parameters (header, separator, decimal mark) in the script header, because they are the analysis's first assumptions. Exams ask for exactly this sequence with correct argument names.",
            ],
            bullets: [
              "read.csv(header = TRUE) is the default import; read.table adds sep and dec control.",
              "readxl::read_excel() reads Excel sheets - install.packages() once, library() every session.",
              "Verify every import: str() for types, head() for a preview, summary() for ranges and NAs.",
              "write.csv(..., row.names = FALSE) exports; saveRDS/readRDS preserve types exactly.",
              "Keep raw files immutable; a Project (or setwd()) fixes the working directory.",
            ],
            codeExample: {
              language: "text",
              caption: "The import-check-clean-export round trip.",
              code: `# Round trip for lab data
raw <- read.csv("tensile_log.csv", header = TRUE)  # headers become names
str(raw)          # confirm column types - the essential first check
head(raw)         # eyeball the first rows
summary(raw)      # distributions and NA counts

raw$specimen <- as.factor(raw$specimen)     # fix a categorical column
clean <- raw[!is.na(raw$load_kN), ]         # drop rows with missing load

write.csv(clean, "tensile_clean.csv", row.names = FALSE)
saveRDS(clean, "tensile_clean.rds")         # preserves types exactly
clean2 <- readRDS("tensile_clean.rds")      # faithful reload

# Excel needs one extra package
# install.packages("readxl")                # once per machine
# xl <- readxl::read_excel("results.xlsx", sheet = 2)`,
            },
            diagram: {
              kind: "flow",
              title: "Import, check, clean, export",
              caption:
                "The five-step discipline applied to every laboratory file.",
              steps: [
                { label: "Fix the location", note: "Project or setwd() - know where files live" },
                { label: "Read the file", note: "read.csv / read_excel with header = TRUE" },
                { label: "Check immediately", note: "str + head + summary for types and NAs" },
                { label: "Repair", note: "as.factor, as.numeric, drop NA rows" },
                { label: "Export two ways", note: "CSV to share; RDS to preserve types" },
              ],
            },
            callout: {
              type: "tip",
              title: "str() before anything else",
              body: "The single most valuable line after any import is str(raw): it prints every column's type in one shot, catching text-as-numbers and factors-as-characters before they corrupt an analysis. And always pass row.names = FALSE to write.csv - the phantom index column has ruined more merged reports than any other default.",
            },
            keyTerms: [
              { term: "read.csv", definition: "Reads a comma-separated file into a data frame, headers on by default." },
              { term: "RDS", definition: "R's single-object serialized format; saveRDS/readRDS preserve types exactly." },
              { term: "Working directory", definition: "The folder R resolves relative paths against; getwd()/setwd() or a Project controls it." },
            ],
            examQuestions: [
              {
                q: "Explain data import and export in R. Write the sequence that imports tensile_log.csv, verifies and repairs column types, removes rows with missing loads, and exports the cleaned data as CSV and as an RDS file, explaining each argument used.",
                marks: 7,
                outline: [
                  "read.csv('tensile_log.csv', header = TRUE) - headers become column names.",
                  "Verification: str() for types, head() for preview, summary() for ranges and NA counts.",
                  "Repairs: as.factor() for categories; as.numeric() for text-become-number columns.",
                  "Row removal: raw[!is.na(raw$load_kN), ].",
                  "Export: write.csv(clean, file, row.names = FALSE) - explain the argument.",
                  "saveRDS(clean, 'clean.rds') - types preserved; readRDS to reload.",
                  "Note readxl::read_excel for Excel and the Project/setwd() location discipline.",
                ],
              },
              {
                q: "Why does write.csv need row.names = FALSE?",
                marks: 2,
              },
              {
                q: "Name the two RStudio-friendly ways to control where read.csv looks for a file.",
                marks: 2,
              },
            ],
          },
          {
            number: "3.5",
            title: "Packages and the tidyverse",
            body: [
              "A package is a bundled, documented extension: functions, help pages, sometimes data. The lifecycle has two distinct verbs that students conflate: install.packages('dplyr') downloads from CRAN once per machine, while library(dplyr) attaches an installed package into the current session - once per script, at the top, every time. Names live in namespaces, so dplyr::filter always means dplyr's filter even when another package masks it; conflicts are printed at attach time and resolved with the double-colon.",
              "The tidyverse is a meta-package installing a coherent set: dplyr for manipulation, ggplot2 for graphics, tidyr for reshaping, readr for fast typed import, tibble for modern frames and purrr for iteration - a dozen packages sharing one design philosophy, so the verbs compose without surprises. Its signature is the pipe: x |> f() sends the left side into f's first argument, so a multi-step analysis reads top-to-bottom as a recipe - frame |> filter() |> group_by() |> summarise() - instead of nested inside-out calls that must be read backwards. readr's read_csv() returns tibbles that print tidily, never partially convert types, and fail loudly on malformed files.",
              "The discipline is reproducibility: every script begins with library() lines for exactly the packages it uses, installed once on the machine and updated with update.packages(). Attach order matters when two packages export the same name - dplyr's filter masks stats::filter - and the honest habit is explicit pkg::fun in any line where masking could bite. Version notes in the header close the loop. In the exam, the install-versus-library distinction, the pipe's direction of flow, and tidyverse membership are reliable short-question material.",
            ],
            bullets: [
              "install.packages('pkg') once per machine; library(pkg) every session - the classic 2-mark distinction.",
              "Packages live in namespaces: pkg::fun is unambiguous even when names are masked.",
              "The tidyverse bundles dplyr, ggplot2, tidyr, readr, tibble and purrr around one design philosophy.",
              "The pipe |> passes the left side as the first argument: frame |> filter() |> summarise().",
              "Start every script with its library() calls; update.packages() keeps them current.",
            ],
            codeExample: {
              language: "text",
              caption: "Install once, attach always, pipe everything.",
              code: `# Packages: install once, load every session
# install.packages("tidyverse")     # run once per machine
library(dplyr)                      # attach at the top of every script

frame <- data.frame(material = c("steel", "Al", "steel", "Al"),
                    load_kN  = c(12, 9, 13, 11))

# The pipe |> sends the left side into the first argument
frame |> filter(load_kN > 10) |> arrange(desc(load_kN))

# Equivalent nested form - harder to read inside-out
arrange(filter(frame, load_kN > 10), desc(load_kN))

# Masked names: be explicit when two packages clash
stats::filter   # the time-series filter, not dplyr's row filter`,
            },
            diagram: {
              kind: "cycle",
              title: "Life of a package",
              caption:
                "One installation, thousands of sessions - library() is the per-session step.",
              steps: [
                { label: "install.packages('pkg')", note: "once per machine, from CRAN" },
                { label: "library(pkg)", note: "every session - attaches the functions" },
                { label: "Call the functions", note: "or pkg::fun for precision" },
                { label: "Resolve masked names", note: "dplyr::filter vs stats::filter" },
                { label: "update.packages()", note: "stay current; restart R after big updates" },
              ],
            },
            callout: {
              type: "exam",
              title: "The two-mark question you can bank",
              body: "install.packages() downloads and installs once per machine; library() attaches an installed package to the current session and appears at the top of every script. Add that masked names are resolved with the double colon (dplyr::filter) and this entire topic is two guaranteed marks in every paper.",
            },
            keyTerms: [
              { term: "Package", definition: "A bundled, documented extension of R distributed through CRAN." },
              { term: "Pipe", definition: "The |> operator: passes its left side as the first argument of the right-side call." },
              { term: "Namespace", definition: "The per-package naming context; pkg::fun disambiguates masked names." },
            ],
            examQuestions: [
              {
                q: "What is an R package? Explain installation versus attaching, namespaces and masking, the tidyverse collection and the pipe operator, and rewrite a nested call as a piped one.",
                marks: 7,
                outline: [
                  "Define package: bundled functions, help and data from CRAN.",
                  "install.packages('pkg') once per machine versus library(pkg) every session.",
                  "Namespaces: pkg::fun is unambiguous; masking printed at attach time.",
                  "The tidyverse: dplyr, ggplot2, tidyr, readr, tibble, purrr.",
                  "The pipe |> - left side becomes the first argument.",
                  "Rewrite arrange(filter(frame, load > 10), load) as frame |> filter(load > 10) |> arrange(load).",
                  "Reproducibility: library() lines at the top of every script; update.packages().",
                ],
              },
              {
                q: "State the difference between install.packages() and library().",
                marks: 2,
              },
              {
                q: "What does dplyr::filter mean, and when is the double-colon form necessary?",
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
      title: "R Data Analysis",
      summary:
        "Statistics in practice: dplyr's verb grammar piped into pipelines, ggplot2's grammar of graphics, the comparison machinery of t-tests and ANOVA, linear regression with honest diagnostics, and the hypothesis-testing framework that keeps all of it honest.",
      chapter: {
        number: "04",
        title: "R Data Analysis",
        intro:
          "Unit IV puts R to work on data: dplyr's six verbs chained with the pipe, ggplot2's layered grammar of graphics, the comparison machinery of t-tests, ANOVA and TukeyHSD, linear regression from lm to prediction intervals, and the hypothesis-testing framework - hypotheses, p-values, error types and power - behind them all.",
        inOneBreath:
          "dplyr's filter, select, mutate, arrange, summarise and group_by chain into pipelines that implement split-apply-combine; ggplot2 builds figures from data plus aes mappings plus geoms, refined by scales, facets, labels and themes; two group means compare with t.test, three or more with aov followed by TukeyHSD once F proves significance; lm fits least squares, read through coefficients, R-squared, residual plots and prediction intervals; and every test runs the same cycle - state H0 and H1, fix alpha, check assumptions, compute the statistic, compare p with alpha, conclude in context - rejecting or failing to reject, never accepting.",
        sections: [
          {
            number: "4.1",
            title: "Data manipulation with dplyr",
            body: [
              "dplyr turns data manipulation into a grammar of six verbs, each taking a data frame and returning one: filter() keeps rows meeting a logical condition; select() keeps named columns; mutate() adds new variables computed from existing ones; arrange() sorts; summarise() collapses many rows into one statistic; and group_by() declares the grouping that summarise() respects. Chained with the pipe, they read as a recipe in execution order - the analysis becomes a sentence, and each intermediate result stays inspectable by breaking the chain at any verb.",
              "group_by() plus summarise() implements split-apply-combine: split the frame by material, apply mean and sd to each group's cycles column, and combine one row per group back into a frame. n() counts rows per group; min, max and median drop in identically; count() is the shortcut for the commonest case; across() applies the same summary to several columns at once. After grouped work, ungroup() removes the grouping so later verbs treat the frame flat again - a silent source of surprise when forgotten.",
              "On a fatigue dataset - twelve specimens across steel, aluminium and titanium - one pipeline answers the engineering question: filter out the aborted run, group by material, summarise mean and standard deviation of cycles to failure, arrange in descending order, and the ranking reads off directly - titanium roughly doubles steel, aluminium halves it. mutate() adds a derived life-in-millions column and a high/standard band before the group step. Every verb name is also an exam keyword: questions ask for a stated result, and the verb sequence is the answer.",
            ],
            bullets: [
              "Six verbs: filter rows, select columns, mutate new variables, arrange order, summarise collapse, group_by split.",
              "Every verb takes a frame and returns a frame - chains never change type.",
              "group_by() + summarise() = split-apply-combine; n() counts rows per group.",
              "count() is the shortcut for group tallies; across() summarises several columns at once.",
              "The pipe |> makes the chain read in execution order; break it anywhere to inspect that stage.",
            ],
            codeExample: {
              language: "text",
              caption: "A complete analysis pipeline on a fatigue dataset.",
              code: `library(dplyr)
fatigue <- data.frame(material = rep(c("steel", "Al", "Ti"), each = 4),
                      cycles = c(1.2e6, 1.4e6, 0.9e6, 1.1e6,
                                 0.6e6, 0.7e6, 0.5e6, 0.8e6,
                                 2.1e6, 2.5e6, 1.9e6, 2.3e6))

fatigue |>
  filter(cycles > 0.55e6) |>                 # drop the aborted run
  group_by(material) |>
  summarise(n = n(), mean_cycles = mean(cycles),
            sd_cycles = sd(cycles)) |>
  arrange(desc(mean_cycles))

# New variables, then a count per band
fatigue |>
  mutate(life_M = cycles / 1e6,
         band = ifelse(life_M > 1.5, "high", "standard")) |>
  count(band)`,
            },
            diagram: {
              kind: "pipeline",
              title: "A complete dplyr pipeline",
              caption:
                "Six stages, each a verb - the analysis reads left to right.",
              stages: [
                { label: "Import", note: "read_csv or data.frame" },
                { label: "filter + select", note: "keep the rows and columns you need" },
                { label: "mutate", note: "derive new variables" },
                { label: "group_by", note: "declare the split" },
                { label: "summarise", note: "one row per group" },
                { label: "arrange", note: "order the result for reading" },
              ],
            },
            callout: {
              type: "tip",
              title: "Break the chain to debug it",
              body: "Because every verb returns a data frame, you can end the pipe at any stage and inspect what that stage produced. When a pipeline misbehaves, run it one verb shorter until the surprise appears - the debugging technique that makes six-verb chains safe, and worth mentioning in any 'how would you verify' sub-question.",
            },
            keyTerms: [
              { term: "filter", definition: "The dplyr verb keeping rows whose condition evaluates to TRUE." },
              { term: "mutate", definition: "The dplyr verb adding new columns computed from existing ones." },
              { term: "Split-apply-combine", definition: "The group_by + summarise pattern: split by a factor, apply a statistic, combine one row per group." },
            ],
            examQuestions: [
              {
                q: "Explain the dplyr verb grammar with syntax, then write a complete piped pipeline on a fatigue dataset that filters out early failures, groups by material, summarises the mean and standard deviation of cycles to failure, and arranges the result in descending order of mean.",
                marks: 7,
                outline: [
                  "Name the six verbs with one line each: filter, select, mutate, arrange, summarise, group_by.",
                  "Note the frame-in, frame-out contract that makes pipes safe.",
                  "Write the pipe chain: fatigue |> filter(cycles > 0.55e6) |> group_by(material).",
                  "Continue: summarise(n = n(), mean_cycles = mean(cycles), sd_cycles = sd(cycles)).",
                  "Finish with arrange(desc(mean_cycles)).",
                  "Explain split-apply-combine as what group_by + summarise implements.",
                  "Add mutate() for a derived column and mention ungroup() after grouped work.",
                ],
              },
              {
                q: "What does n() do inside summarise()?",
                marks: 2,
              },
              {
                q: "State what group_by() changes about a data frame.",
                marks: 2,
              },
            ],
          },
          {
            number: "4.2",
            title: "Visualization with ggplot2",
            body: [
              "ggplot2 builds plots from a grammar rather than a menu. The call ggplot(data, aes(x = stress, y = cycles)) declares the data and the aesthetic mappings - which variables drive position, colour, size - and adds layers with +: geom_point() for scatter, geom_line() for series, geom_smooth(method = 'lm') for a fitted trend, geom_histogram() and geom_boxplot() for distributions. The critical distinction is mapping versus setting: colour = material inside aes() colours by a variable, while colour = 'red' as a plain geom argument sets one fixed colour for every point.",
              "Beyond geoms, scales and facets refine the figure: scale_y_log10() moves to a log axis - where S-N curves live - scale_colour_brewer() picks a disciplined palette, and facet_wrap(~material) splits into small multiples, one panel per group for instant comparison. labs() adds titles and axis labels, theme_minimal() styles away the chart junk, and ggsave('plot.png', width = 7, height = 4) exports at report size. Each layer is independent, so a figure grows by adding lines of code - the reproducible alternative to redrawing by hand in a spreadsheet, and the reason journals prefer scripts over screenshots.",
              "The S-N fatigue curve is the canonical mechanical figure: points of cycles against stress amplitude, coloured by material, log-scaled on cycles, with a smooth trend and labelled axes - six lines of code that a lab report would otherwise assemble manually and lose. Build it incrementally: data and aes first, geoms next, scales and facets last, inspecting after each addition. The exam asks for exactly this sequence and for the mapping-versus-setting distinction - one is worth two marks on its own.",
            ],
            bullets: [
              "ggplot(data, aes(x, y)) declares data and mappings; + adds layers - geoms, scales, facets.",
              "Inside aes() a variable maps; outside, a value sets - colour = material vs colour = 'red'.",
              "Geoms: point, line, smooth(method = 'lm'), histogram, boxplot - layers stack independently.",
              "scale_y_log10() and facet_wrap(~var) handle decade data and small multiples.",
              "labs() labels, theme_minimal() styles, ggsave() exports at a chosen size.",
            ],
            codeExample: {
              language: "text",
              caption: "An S-N fatigue figure built layer by layer.",
              code: `library(ggplot2)
sn <- data.frame(stress = rep(c(300, 350, 400, 450), 3),
                 cycles = c(2.2e6, 1.1e6, 4.5e5, 1.8e5,
                            1.6e6, 7.0e5, 3.0e5, 9.0e4,
                            3.0e6, 1.9e6, 9.0e5, 4.0e5),
                 material = rep(c("steel", "Al", "Ti"), each = 4))

ggplot(sn, aes(x = stress, y = cycles, color = material)) +
  geom_point(size = 2.5) +
  geom_smooth(se = FALSE, method = "loess") +
  scale_y_log10() +                    # S-N curves live on log axes
  facet_wrap(~ material) +
  labs(title = "S-N fatigue curves",
       x = "stress amplitude (MPa)", y = "cycles to failure") +
  theme_minimal()
ggsave("sn_curves.png", width = 7, height = 4)`,
            },
            diagram: {
              kind: "layers",
              title: "The grammar of graphics, stacked",
              caption:
                "A ggplot is data plus mappings plus layers - read it bottom to top.",
              layers: [
                { label: "Data", note: "a tidy data frame - one row per observation" },
                { label: "Aesthetic mappings (aes)", note: "x, y, color, size map data to visuals" },
                { label: "Geoms", note: "points, lines, bars, boxplots" },
                { label: "Scales", note: "log axes, colour palettes" },
                { label: "Facets", note: "small multiples split by a variable" },
                { label: "Labels + theme", note: "titles, axis text, styling" },
              ],
            },
            callout: {
              type: "exam",
              title: "Mapping versus setting",
              body: "The most-asked ggplot distinction: aes(colour = material) maps a variable to colour and produces a legend; geom_point(colour = 'red') sets one fixed colour for all points and produces none. Write both forms with their effects in any ggplot2 answer - it is a standing two-mark point.",
            },
            keyTerms: [
              { term: "Aesthetic mapping", definition: "An aes() link between a variable and a visual property such as x, y or colour." },
              { term: "Geom", definition: "A layer that draws: points, lines, bars, boxplots, smooths." },
              { term: "Facet", definition: "facet_wrap(~var) splits the plot into small multiples, one panel per level." },
            ],
            examQuestions: [
              {
                q: "Explain the grammar of graphics as implemented in ggplot2 - data, aesthetics, geoms, scales, facets and labels - and write the complete code for an S-N fatigue scatter plot with a log cycles axis, colour by material and a fitted smooth, exported to a file.",
                marks: 7,
                outline: [
                  "State the grammar: data + aes mappings + layers added with +.",
                  "ggplot(sn, aes(x = stress, y = cycles, color = material)).",
                  "geom_point() and geom_smooth(se = FALSE) as stacked layers.",
                  "scale_y_log10() - explain why S-N data needs it.",
                  "facet_wrap(~ material) for small multiples.",
                  "labs() for title and axis labels; theme_minimal().",
                  "ggsave('sn_curves.png', width = 7, height = 4); note mapping vs setting.",
                ],
              },
              {
                q: "Distinguish colour = material inside aes() from colour = 'red' outside it.",
                marks: 2,
              },
              {
                q: "What does facet_wrap(~material) produce?",
                marks: 2,
              },
            ],
          },
          {
            number: "4.3",
            title: "Comparing groups: t-tests and ANOVA",
            body: [
              "The t-test compares means. One-sample t.test(x, mu = 50) tests whether the mean of x differs from a stated value; the two-sample form t.test(y ~ group, data) compares two independent groups - Welch's version by default, with corrected degrees of freedom that does not assume equal variances - and paired = TRUE compares the same specimens measured twice. Every flavour returns the same reading: a t statistic, degrees of freedom, a p-value and a confidence interval for the difference, each printed with the alternative hypothesis stated in plain words.",
              "Three or more groups need ANOVA: fit <- aov(hardness ~ treatment, data) followed by summary(fit) partitions variance into between-group and within-group, reporting an F statistic and p-value for the null hypothesis that all group means are equal. The assumptions - roughly normal residuals and comparable spreads - are checkable with shapiro.test() per group and an eye on the spreads. A significant F says at least one mean differs, never which: TukeyHSD(fit) performs the pairwise comparisons with adjusted confidence intervals and names the pairs.",
              "The worked case compares hardness across annealed, quenched-and-tempered and normalized treatments, five specimens each: ANOVA's F lands far beyond the critical value, TukeyHSD separates the pairs, and the report line - F, degrees of freedom, p-value, conclusion in hardness units - is what full marks look like. If only two treatments existed, the t-test subset call would do the same job. In the exam, state the hypotheses before the test and the conclusion after it; the arithmetic itself is one function call.",
            ],
            bullets: [
              "t.test flavours: one-sample (mu =), two-sample Welch (the default), and paired = TRUE.",
              "Output: t, degrees of freedom, p-value and a CI for the difference - quote all four.",
              "aov(y ~ group) + summary(): the F test of 'all group means are equal'.",
              "Assumptions: near-normal groups (shapiro.test) and comparable spreads - check before trusting F.",
              "A significant F only says 'at least one differs'; TukeyHSD(fit) names the pairs.",
            ],
            codeExample: {
              language: "text",
              caption: "Three heat treatments: ANOVA with a post-hoc pass.",
              code: `hard <- data.frame(
  treatment = rep(c("annealed", "Q&T", "normalized"), each = 5),
  hardness  = c(180, 175, 190, 185, 182,
                320, 335, 310, 328, 330,
                240, 255, 248, 262, 250))

# Two groups would use t.test; three need ANOVA
t.test(hardness ~ treatment, data = hard,
       subset = treatment %in% c("annealed", "normalized"))

fit <- aov(hardness ~ treatment, data = hard)
summary(fit)            # F and p-value: are any means different?
TukeyHSD(fit)           # which pairs differ, with confidence intervals

shapiro.test(hard$hardness[hard$treatment == "annealed"])  # normality`,
            },
            table: {
              caption: "Choosing the comparison test.",
              headers: ["Question", "Test", "R call"],
              rows: [
                ["Mean of one group vs a value", "One-sample t-test", "t.test(x, mu = 50)"],
                ["Two independent group means", "Welch two-sample t-test", "t.test(y ~ g, data)"],
                ["Same specimens twice", "Paired t-test", "t.test(x, y, paired = TRUE)"],
                ["Three or more group means", "One-way ANOVA", "summary(aov(y ~ g, data))"],
                ["Which pairs differ after ANOVA", "Tukey HSD", "TukeyHSD(fit)"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "From question to test",
              caption:
                "Group count decides the tool; significance decides the follow-up.",
              steps: [
                { label: "How many groups?", note: "one, two, or three and up" },
                { label: "Two: choose the t flavour", note: "independent versus paired" },
                { label: "Three+: one-way ANOVA", note: "aov + summary" },
                { label: "Significant? Run TukeyHSD", note: "name the differing pairs" },
                { label: "Report and conclude", note: "statistic, df, p-value, units" },
              ],
            },
            callout: {
              type: "exam",
              title: "ANOVA never names the pair",
              body: "A significant F statistic proves only that at least one group mean differs from the rest. The marking scheme always reserves a point for saying so - and another for the fix: TukeyHSD performs all pairwise comparisons with adjusted intervals. Write 'at least one differs; TukeyHSD identifies which' and both marks are yours.",
            },
            keyTerms: [
              { term: "t-statistic", definition: "The standardized difference of a sample mean from its hypothesis, in standard-error units." },
              { term: "F-statistic", definition: "The ratio of between-group to within-group variance tested by ANOVA." },
              { term: "Post-hoc test", definition: "A pairwise comparison (TukeyHSD) run after a significant ANOVA to locate the difference." },
            ],
            examQuestions: [
              {
                q: "When is a t-test inadequate and ANOVA required? Explain the one-way ANOVA model, its assumptions, the meaning of the F statistic, and the role of post-hoc testing, using hardness data from three heat treatments with five specimens each.",
                marks: 7,
                outline: [
                  "t-tests compare two groups; three or more pairwise t-tests inflate Type I risk.",
                  "Model: hardness ~ treatment; aov() partitions variance between and within groups.",
                  "Assumptions: near-normal residuals (shapiro.test) and comparable spreads.",
                  "F = between-group variance / within-group variance; large F rejects equal means.",
                  "A significant F means at least one mean differs - not which.",
                  "TukeyHSD(fit) runs adjusted pairwise comparisons and names the pairs.",
                  "Report F, df, p-value and a conclusion in hardness units.",
                ],
              },
              {
                q: "What changes in the t.test() call when the same specimens are measured twice?",
                marks: 2,
              },
              {
                q: "What question does TukeyHSD answer that summary(aov(...)) cannot?",
                marks: 2,
              },
            ],
          },
          {
            number: "4.4",
            title: "Linear regression",
            body: [
              "Linear regression fits y = a + b*x by least squares: lm(defl_mm ~ load_N, data = springs) returns a fitted object whose summary() prints the coefficient table - intercept and slope with standard errors and p-values - plus R-squared and the residual standard error. The slope is the estimate of the physical parameter: in a spring calibration, load per deflection is the stiffness; in Hooke's-law tension, stress per strain is Young's modulus. coef() extracts the numbers; fitted() and resid() expose the fit and its leftovers.",
              "The same call scales: lm(y ~ x1 + x2) regresses on several predictors, and predict(fit, newdata, interval = 'confidence') returns fitted values with bands for the mean response - interval = 'prediction' widens to cover individual observations. Diagnostics come from plot(fit): residuals versus fitted should show patternless scatter (curvature means a missing term or a transform), the normal Q-Q plot should hug the diagonal, and the remaining panels flag uneven spread and influential points. cor(x, y) measures association but fits nothing - correlation is not regression.",
              "The spring calibration makes the full workflow: six load-deflection points, lm, a slope of about 20 N/mm with a near-perfect R-squared, abline(fit) overlaying the line on the scatter, and predictions with intervals at untested loads. The standing warnings are three: a high R-squared proves nothing without clean residuals; extrapolating beyond the tested range - predicting deflection at 5000 N from data ending at 600 N - is unsupported; and a fitted line describes association, leaving causation to the engineer. Exams test exactly these judgment calls.",
            ],
            bullets: [
              "lm(y ~ x, data): least squares; summary() prints coefficients, p-values, R-squared and RSE.",
              "The slope estimates the physical constant - stiffness in a spring test, E in stress-strain.",
              "predict(fit, newdata, interval = 'confidence' or 'prediction') for means or individuals.",
              "plot(fit): residuals-vs-fitted for pattern, Q-Q for normality, plus leverage panels.",
              "Never extrapolate beyond the data range; R-squared without residual checks proves little.",
            ],
            codeExample: {
              language: "text",
              caption: "A spring calibration: fit, read, plot, predict, diagnose.",
              code: `springs <- data.frame(load_N  = seq(100, 600, by = 100),
                           defl_mm = c(2.1, 3.9, 6.2, 8.1, 9.8, 12.2))

fit <- lm(defl_mm ~ load_N, data = springs)
summary(fit)          # slope = stiffness (N/mm), R-squared, p-values
coef(fit)             # intercept and slope

predict(fit, data.frame(load_N = c(350, 450)),
        interval = "confidence")   # mean deflection with a band

plot(defl_mm ~ load_N, data = springs)
abline(fit)           # overlay the fitted line

par(mfrow = c(2, 2)); plot(fit)    # the four diagnostic plots`,
            },
            diagram: {
              kind: "fork",
              title: "lm() has run - now what?",
              caption:
                "The one habit that validates a regression, and the two that don't.",
              start: "Before quoting the fitted model",
              branches: [
                { label: "Inspect plot(fit) diagnostics", outcome: "Patternless residuals and a straight Q-Q - the fit is trustworthy", good: true },
                { label: "Quote only R-squared", outcome: "A high R-squared can hide curved residuals - never sufficient evidence", good: false },
                { label: "Predict far outside the data", outcome: "Extrapolation beyond tested loads is unsupported by the model", good: false },
              ],
            },
            callout: {
              type: "warning",
              title: "R-squared is not a verdict",
              body: "R-squared rises with every added predictor and says nothing about curvature, outliers or physical validity. The regression answer that scores is: coefficients, their p-values, a residual check with plot(fit), and an explicit statement of the valid load range. Anything less is curve-fitting, not engineering.",
            },
            keyTerms: [
              { term: "Least squares", definition: "Estimation by minimizing the sum of squared residuals - what lm() does." },
              { term: "R-squared", definition: "The fraction of response variance explained by the model; 1 is a perfect fit." },
              { term: "Residual", definition: "Observed minus fitted value; the raw material of all regression diagnostics." },
            ],
            examQuestions: [
              {
                q: "Explain simple linear regression in R: the model, least-squares estimation, reading summary(lm(...)) and prediction with intervals. Fit a spring calibration from load-deflection data, state what the slope means physically, and list the checks you would run before trusting the fit.",
                marks: 7,
                outline: [
                  "Model y = a + b*x; lm(defl_mm ~ load_N, data = springs).",
                  "Least squares minimizes the sum of squared residuals.",
                  "summary(fit): coefficient table, standard errors, p-values, R-squared, RSE.",
                  "Slope interpretation: load per deflection = stiffness in N/mm.",
                  "predict(fit, newdata, interval = 'confidence') versus 'prediction'.",
                  "Diagnostics with plot(fit): residuals-vs-fitted, Q-Q, leverage.",
                  "Warnings: no extrapolation beyond the tested range; R-squared is not sufficient.",
                ],
              },
              {
                q: "Distinguish interval = 'confidence' from interval = 'prediction' in predict().",
                marks: 3,
              },
              {
                q: "Why can a high R-squared still accompany an invalid model?",
                marks: 2,
              },
            ],
          },
          {
            number: "4.5",
            title: "The hypothesis-testing framework",
            body: [
              "Every test shares one logic. The null hypothesis H0 states no effect - equal means, independence, a fair die; H1 states the effect of interest. A test statistic measures how far the sample falls from H0's prediction; the p-value is the probability, computed under H0, of data at least this extreme; and the decision rule compares p with the pre-chosen significance level alpha, usually 0.05: a smaller p rejects H0. The vocabulary matters for marks - we 'reject' or 'fail to reject' H0, never 'accept' it, because absence of evidence is not evidence of absence.",
              "Two errors frame the risk: Type I rejects a true H0 (a false alarm) at rate alpha; Type II keeps a false H0 (a missed effect); power equals one minus the Type II rate and grows with sample size and effect size. The machinery is a menu keyed to the question: shapiro.test() checks normality first; means use t.test or aov; ranks use wilcox.test or kruskal.test when normality fails; counted categories use chisq.test; association strength uses cor(). One-sided versus two-sided alternatives change the p-value and must be declared before seeing the data.",
              "Reporting closes the loop with a fixed format: statistic, degrees of freedom, p-value, and a conclusion in the problem's units - 't = 3.4, df = 12, p = 0.005; the coating raises mean life by 21%' - which is what an engineering report actually needs. The discipline against p-hacking - testing until something turns significant - is to fix alpha and the test before touching the data and to report every test run. The exam gives a scenario and asks for the test, the hypotheses and the conclusion: this section's table is the answer key.",
            ],
            bullets: [
              "H0 = no effect, H1 = the effect sought; fix alpha (usually 0.05) before the test.",
              "p-value: probability of data this extreme if H0 were true; p < alpha rejects H0.",
              "Type I = false rejection (rate alpha); Type II = missed effect; power = 1 - P(Type II).",
              "Choose by data type and assumptions: shapiro.test gate, then t/aov or wilcox/kruskal; chisq.test for counts.",
              "Report statistic, df, p and a conclusion in engineering units - and never 'accept' H0.",
            ],
            table: {
              caption: "Selecting the right test.",
              headers: ["Situation", "Check first", "Test"],
              rows: [
                ["Compare one mean to a value", "shapiro.test(x) for normality", "t.test(x, mu = ...)"],
                ["Compare two group means", "normality and spread", "t.test / wilcox.test"],
                ["Compare three or more means", "normality and spread", "aov / kruskal.test"],
                ["Counts across categories", "expected counts ≥ 5", "chisq.test"],
                ["Strength of a linear relation", "scatter plot first", "cor(x, y)"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "Every hypothesis test runs the same cycle",
              caption:
                "Learn the cycle once; every test in this course is an instance of it.",
              steps: [
                { label: "State H0 and H1", note: "H0 = no difference, no effect" },
                { label: "Fix alpha", note: "usually 0.05 - the Type I risk accepted" },
                { label: "Choose the test", note: "data type + assumptions (normality, spread)" },
                { label: "Compute the statistic", note: "t, F or chi-square from the sample" },
                { label: "Compare p with alpha", note: "p < alpha: reject H0" },
                { label: "Conclude in context", note: "plain language, engineering units" },
              ],
            },
            callout: {
              type: "exam",
              title: "One phrase, one mark",
              body: "The result 'p > alpha' is reported as 'we fail to reject H0' - writing 'we accept H0' forfeits a mark in most schemes, because a non-significant test never proves the null. Memorize the phrase, use it verbatim, and pair every conclusion with its p-value and engineering units.",
            },
            keyTerms: [
              { term: "Null hypothesis", definition: "H0 - the no-effect claim a test attempts to reject." },
              { term: "p-value", definition: "Probability of data at least as extreme as observed, assuming H0 is true." },
              { term: "Type I error", definition: "Rejecting a true H0 - a false alarm, at rate alpha." },
            ],
            examQuestions: [
              {
                q: "State the full logic of hypothesis testing: hypotheses, significance level, test statistic, p-value, decision rule, and the two error types with their consequences. Explain how the choice among t-test, ANOVA, Wilcoxon and chi-square is made.",
                marks: 7,
                outline: [
                  "H0 (no effect) versus H1 (the effect sought); state both for a given scenario.",
                  "Fix alpha in advance, usually 0.05.",
                  "Test statistic measures deviation from H0's prediction.",
                  "p-value = P(data this extreme | H0); reject H0 when p < alpha.",
                  "Type I (false alarm, rate alpha) versus Type II (missed effect); power = 1 - P(Type II).",
                  "Selection: normality via shapiro.test; t/aov if satisfied, wilcox/kruskal otherwise; chisq.test for counts.",
                  "Conclude in context - 'fail to reject' phrasing, never 'accept'.",
                ],
              },
              {
                q: "Why is the phrase 'accept H0' wrong?",
                marks: 2,
              },
              {
                q: "What is the power of a test, and name two ways to increase it.",
                marks: 2,
              },
            ],
          },
        ],
      },
    },
    {
      number: 5,
      roman: "V",
      title: "Mechanical Applications",
      summary:
        "The payoff: root finding and ODE solving with fzero and ode45, transfer functions with step and Bode analysis, curve fitting and interpolation, Weibull reliability for maintenance decisions, vibration analysis by eigenvalues and FFT, and a mini project that chains MATLAB into R.",
      chapter: {
        number: "05",
        title: "Mechanical Applications",
        intro:
          "Unit V is where both tools answer mechanical questions: roots and ODEs with fzero and ode45, transfer-function construction and step/Bode analysis, fitting versus interpolation with residual discipline, Weibull reliability with its maintenance regimes, modal and spectral vibration analysis, and a mini project that runs a MATLAB model into an R statistical verdict.",
        inOneBreath:
          "fzero brackets a sign change; ode45 marches a converted first-order system of m*x'' + c*x' + k*x = 0 through [t, y] = ode45(@f, tspan, y0); tf builds G(s) whose poles decide stability, stepinfo measures the transient and bode with margin measures robustness; polyfit and interp1 fit and interpolate with residuals as referee; the Weibull R(t) = exp(-(t/eta)^beta) turns its shape beta into a maintenance policy; eig(K, M) yields natural frequencies and mode shapes while fft exposes a signal's spectrum; and the mini project chains MATLAB modelling into R statistics into a reproducible report.",
        sections: [
          {
            number: "5.1",
            title: "Numerical methods: root finding and ODE solvers",
            body: [
              "Two numerical questions dominate mechanical simulation: where does a function cross zero, and how does a state evolve in time. fzero(f, [a, b]) answers the first, given a bracket where f changes sign - it combines bisection, secant and inverse quadratic interpolation and returns one root; a bracket without a sign change fails, a fact worth two marks. Polynomials hand their roots to roots([1, -3, 2]) directly, and systems of nonlinear equations go to fsolve. Tolerances control when an iteration stops.",
              "ode45 answers the second. The ODE must be first-order - or made first-order by state-space conversion: m*x'' + c*x' + k*x = 0 becomes y1' = y2 and y2' = -(k*y1 + c*y2)/m with y = [x; v], written as one anonymous function returning a column. The call [t, y] = ode45(@f, tspan, y0) returns times and states; odeset('RelTol', 1e-8) tightens accuracy; and stiff problems - widely separated timescales - switch to ode15s. The conversion step is the exam: any second-order ODE must be rewritten before ode45 applies.",
              "The damped single-degree-of-freedom oscillator is the standard run: m = 2 kg, c = 10 N.s/m, k = 50 N/m, released from 50 mm; ode45 returns the decaying oscillation, and plotting y(:, 1) against t reproduces the envelope plot of Unit I. Cross-checks close the loop: roots([1, 2*zeta*wn, wn^2]) gives the characteristic roots, whose imaginary part is the damped natural frequency, and dsolve from Unit II returns the same solution symbolically. Numeric and symbolic answers agreeing is the professional standard of correctness - and a satisfying exam flourish.",
            ],
            bullets: [
              "fzero(f, [a, b]) needs a sign-change bracket; roots(p) hands polynomial roots over directly.",
              "Second-order ODEs convert to two first-order equations: y = [x; v], y' = [y2; f/m].",
              "[t, y] = ode45(@f, tspan, y0): adaptive Runge-Kutta 4/5; odeset tightens tolerances.",
              "Stiff systems - fast and slow timescales together - switch to ode15s.",
              "Verify numerics symbolically: characteristic roots versus dsolve, plot versus plot.",
            ],
            codeExample: {
              language: "matlab",
              caption: "The damped SDOF oscillator by ode45, cross-checked by roots.",
              code: `% Damped SDOF vibration by ode45
m = 2; c = 10; k = 50;                      % kg, N.s/m, N/m
msd = @(t, y) [y(2); -(k*y(1) + c*y(2))/m]; % y = [x; v]
[t, y] = ode45(msd, [0 6], [0.05; 0]);      % x(0) = 50 mm, v(0) = 0
plot(t, y(:, 1), 'LineWidth', 1.5); grid on
xlabel('t (s)'); ylabel('x (m)'); title('ode45: damped SDOF')

opts = odeset('RelTol', 1e-8, 'AbsTol', 1e-10);
[t2, y2] = ode45(msd, [0 6], [0.05; 0], opts);

% Cross-check with the characteristic equation
wn   = sqrt(k/m);  zeta = c / (2*sqrt(k*m));
lam  = roots([1, 2*zeta*wn, wn^2])   % roots of s^2 + 2*zeta*wn*s + wn^2 = 0
wd   = abs(imag(lam(1)))             % damped natural frequency (rad/s)`,
            },
            diagram: {
              kind: "compare",
              title: "Root finding versus ODE solving",
              caption:
                "Two different questions - two different contracts with the solver.",
              left: {
                heading: "fzero (root finding)",
                items: [
                  "Question: where is f(x) = 0?",
                  "Needs a bracket [a, b] with a sign change",
                  "Iterates bisection, secant, inverse quadratic",
                  "Returns a single x at a time",
                  "Uses: equilibria, characteristic roots",
                ],
              },
              right: {
                heading: "ode45 (ODE solving)",
                items: [
                  "Question: how does y(t) evolve?",
                  "Needs initial conditions and a time span",
                  "Marches with adaptive Runge-Kutta 4/5 steps",
                  "Returns the whole trajectory",
                  "Uses: vibration, dynamics, heat transfer",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "The conversion is the unlock",
              body: "Every second-order ODE becomes two first-order ones: define y = [x; v], write y1' = y2 and y2' = f(t, y)/m, and ode45 applies. Write this conversion explicitly in the exam before any solver call - it is the step the outline allocates the method marks to, and forgetting it caps the whole answer.",
            },
            keyTerms: [
              { term: "fzero", definition: "Finds a root of a one-variable function inside a sign-changing bracket." },
              { term: "ode45", definition: "Adaptive Runge-Kutta 4/5 solver for first-order initial-value ODE systems." },
              { term: "State vector", definition: "The stacked unknowns y = [x; v] that turn an nth-order ODE into a first-order system." },
            ],
            examQuestions: [
              {
                q: "Explain how MATLAB solves (i) the root of a nonlinear function and (ii) an initial-value ODE problem. Convert m*x'' + c*x' + k*x = 0 to first-order form and write the complete ode45 solution for m = 2, c = 10, k = 50, x(0) = 0.05, x'(0) = 0, including a verification step.",
                marks: 7,
                outline: [
                  "fzero with a sign-changing bracket; mention bisection/secant and roots() for polynomials.",
                  "State-space conversion: y = [x; v]; y1' = y2, y2' = -(k*y1 + c*y2)/m.",
                  "Anonymous function msd = @(t, y) [y(2); ...] returning a column.",
                  "Call [t, y] = ode45(msd, [0 6], [0.05; 0]).",
                  "Plot t against y(:, 1) with labels.",
                  "odeset('RelTol', ...) for accuracy; ode15s for stiffness.",
                  "Verification: roots([1, 2*zeta*wn, wn^2]) and comparison with dsolve.",
                ],
              },
              {
                q: "Why must a bracket for fzero contain a sign change?",
                marks: 2,
              },
              {
                q: "Name the solver you would switch to for a stiff ODE, and describe when stiffness appears.",
                marks: 2,
              },
            ],
          },
          {
            number: "5.2",
            title: "Control systems: transfer functions and Bode analysis",
            body: [
              "Classical control lives in the transfer function: G(s) = b(s)/a(s), entered in MATLAB as sys = tf(num, den) with coefficient vectors in descending powers of s - tf(100, [1, 4, 100]) is a second-order plant with natural frequency 10 rad/s and damping ratio 0.2. Systems combine: series(G1, G2) cascades, parallel adds, and feedback(G, 1) closes the unity loop. pole(G) and zero(G) expose the dynamics immediately. Stability reads straight off the poles: every pole strictly in the open left half of the s-plane means bounded output for bounded input.",
              "Time-domain quality comes from step(G) and stepinfo(G), which returns RiseTime, SettlingTime and Overshoot as numbers - the specification sheet of a servo. Frequency-domain robustness comes from bode(G) and margin(G): the gain margin is the factor by which the loop gain can grow before instability, the phase margin is the additional lag tolerable at the gain crossover, and [Gm, Pm] = margin(G) returns both. nyquist(G) plots the loop around the critical point, and pzmap(G) draws poles and zeros in the plane.",
              "The standard analysis sequence on G(s) = wn^2/(s^2 + 2*zeta*wn*s + wn^2): build with tf, check pole(G) - both negative real parts, so stable; stepinfo quantifies the transient (a damping ratio of 0.2 overshoots about 53%); bode shows the resonant peak near the natural frequency and margin reports the robustness margins; feedback(G, 1) then closes the loop and the sequence repeats on the closed-loop transfer function. In the exam, this exact pipeline - tf, pole, step/stepinfo, bode/margin, feedback - is a reliable seven marks, so rehearse it as one block.",
            ],
            bullets: [
              "tf(num, den) builds LTI models from descending-power coefficient vectors.",
              "pole(G) and zero(G) expose the dynamics; stability = all poles in the open left half-plane.",
              "stepinfo(G): RiseTime, SettlingTime, Overshoot - the transient specification numbers.",
              "bode(G) with margin(G): gain and phase margins quantify robustness.",
              "feedback(G, 1) closes the unity loop; series/parallel compose cascades.",
            ],
            codeExample: {
              language: "matlab",
              caption: "The five-command analysis block on a second-order plant.",
              code: `% Second-order plant: the standard analysis block
wn = 10; zeta = 0.2;
G  = tf(wn^2, [1, 2*zeta*wn, wn^2]);  % G(s) = wn^2/(s^2 + 2*zeta*wn*s + wn^2)
pole(G)                               % both real parts negative -> stable
S = stepinfo(G)                       % RiseTime, SettlingTime, Overshoot
step(G); grid on                      % transient response
bode(G); grid on                      % frequency response
[Gm, Pm] = margin(G)                  % gain and phase margins

% Close the loop and re-check
T = feedback(G, 1);
step(T); grid on`,
            },
            diagram: {
              kind: "pipeline",
              title: "Analysing a control system in MATLAB",
              caption:
                "Five stages, one block of marks - rehearse them in this order.",
              stages: [
                { label: "Define G(s) with tf", note: "numerator and denominator coefficients" },
                { label: "Check the poles", note: "all real parts negative means stable" },
                { label: "Step response + stepinfo", note: "time-domain quality numbers" },
                { label: "Bode + margin", note: "frequency-domain robustness" },
                { label: "Close the loop", note: "feedback(G, 1), then re-check" },
              ],
            },
            callout: {
              type: "exam",
              title: "Quote the criterion, then the numbers",
              body: "Stability questions want the criterion first - all poles in the open left half-plane - and then the evidence: the actual pole values from pole(G). Similarly, quote stepinfo's RiseTime, SettlingTime and Overshoot by name. Numbers without the named criterion, or the criterion without numbers, each lose a mark.",
            },
            keyTerms: [
              { term: "Transfer function", definition: "The Laplace-domain ratio Y(s)/U(s) built in MATLAB with tf(num, den)." },
              { term: "Gain margin", definition: "The factor by which loop gain can increase before instability; reported by margin(G)." },
              { term: "Poles", definition: "Roots of the denominator polynomial; their positions decide stability." },
            ],
            examQuestions: [
              {
                q: "Describe the construction and analysis of LTI systems in MATLAB. For G(s) = 100/(s^2 + 4s + 100), write the complete sequence - tf, stability check, step response characteristics, Bode analysis with margins, and unity-feedback closure - stating what each output means.",
                marks: 7,
                outline: [
                  "tf(100, [1, 4, 100]) - coefficients in descending powers of s.",
                  "pole(G): both poles have negative real parts, so the system is stable - state the criterion.",
                  "step(G) and stepinfo(G): RiseTime, SettlingTime, Overshoot.",
                  "bode(G): magnitude and phase versus frequency.",
                  "[Gm, Pm] = margin(G): gain and phase margins - define both.",
                  "feedback(G, 1) closes the unity loop; re-check the closed-loop poles.",
                  "Note series/parallel for cascades and pzmap/nyquist as supporting views.",
                ],
              },
              {
                q: "State the pole-based stability criterion for a transfer function.",
                marks: 2,
              },
              {
                q: "What quantities does stepinfo(G) return?",
                marks: 2,
              },
            ],
          },
          {
            number: "5.3",
            title: "Curve fitting and interpolation",
            body: [
              "Fitting and interpolation answer different questions. A fit is a model whose parameters minimize squared error: p = polyfit(x, y, 1) returns the slope and intercept of the best straight line, polyval(p, xi) evaluates it anywhere, and the fit need not pass through any data point. Interpolation, by contrast, passes exactly through the points: interp1(x, y, xi, 'linear') joins neighbours, 'spline' fits a smooth cubic through every knot, and 'pchip' stays monotone between them - the safe choice when a wiggly spline would imply unphysical behaviour.",
              "Choosing a model is an engineering act. A straight line through the elastic region of a tensile test estimates Young's modulus as its slope; beyond the yield point the model must change - offset-yield or a nonlinear hardening form - because no single polynomial serves both regimes. High-degree polyfits are a trap: every extra degree bends the curve toward individual noise points and guarantees oscillation between them, while R-squared rises monotonically regardless. The Curve Fitting Toolbox's fit() and cftool expose exponential, Fourier and custom equations with SSE, R-square and RMSE to compare candidates honestly.",
              "The discipline is the residual plot: stress minus fitted stress against strain should scatter without pattern; curvature in the residuals means the linear model has left its valid region. Then interpolate within the data - stress at a strain between readings - but never extrapolate: the fitted line says nothing about behaviour past the last measured point, and the honest report says so. The exam pattern is a small dataset, a requested fit, a residual check and one interpolation, so practise writing the four-line core: polyfit, polyval, residual, interp1.",
            ],
            bullets: [
              "A fit minimizes squared error and need not touch the data; interpolation passes through every point.",
              "p = polyfit(x, y, n) + polyval(p, xi): polynomial least squares and evaluation.",
              "interp1 methods: 'linear', 'spline' (smooth, can overshoot), 'pchip' (monotone-safe).",
              "Model choice is physical: linear in the elastic region; nonlinear forms beyond yield.",
              "Inspect residuals for pattern; interpolate within range, never extrapolate beyond it.",
            ],
            codeExample: {
              language: "matlab",
              caption: "Young's modulus from the elastic region, then one interpolation.",
              code: `% Young's modulus from the elastic region of a tensile test
strain = [0 0.0005 0.0010 0.0015 0.0020 0.0025];
stress = [0 105 210 318 415 520];        % MPa
p    = polyfit(strain, stress, 1);       % slope and intercept
E    = p(1)                              % about 208000 MPa = 208 GPa
yfit = polyval(p, strain);
resid = stress - yfit;                   % residuals expose curvature
plot(strain, stress, 'o', strain, yfit, '-'); grid on
xlabel('strain'); ylabel('stress (MPa)');
legend('data', 'least-squares fit');

% Interpolation: stress at a strain we did not sample
s_at = interp1(strain, stress, 0.0012, 'pchip')

% Curve Fitting Toolbox: nonlinear models with fit() or interactively
% f = fit(x, y, 'exp2')   % compare SSE, R-square, RMSE honestly`,
            },
            diagram: {
              kind: "flow",
              title: "Fit with your eyes open",
              caption:
                "The five checks that separate a defensible fit from a curve through points.",
              steps: [
                { label: "Plot the raw data", note: "see the shape before choosing a model" },
                { label: "Choose model and degree", note: "physical reasoning beats R-squared chasing" },
                { label: "Fit", note: "polyfit or fit - least squares by default" },
                { label: "Inspect residuals", note: "patternless scatter is the healthy sign" },
                { label: "Interpolate, never extrapolate", note: "interp1 inside the data range only" },
              ],
            },
            callout: {
              type: "warning",
              title: "Overfitting hides behind R-squared",
              body: "R-squared rises with every added degree, so a ninth-degree polynomial through ten noisy points can score 0.99 while oscillating wildly between them. In any fitting answer, name the model's physical justification, show the residuals, and state the valid range - that trio is what the marking scheme rewards.",
            },
            keyTerms: [
              { term: "Least-squares fit", definition: "A model whose parameters minimize the sum of squared residuals; polyfit is the polynomial case." },
              { term: "Interpolation", definition: "Estimating values between data points by passing exactly through them (interp1)." },
              { term: "Residual plot", definition: "Residuals versus fitted values; patternless scatter validates the model form." },
            ],
            examQuestions: [
              {
                q: "Differentiate curve fitting from interpolation. Given tensile stress-strain data in the elastic region, fit a straight line with polyfit to extract Young's modulus, verify the fit with residuals, and obtain the stress at an unsampled strain - explaining every command and the limits of the model.",
                marks: 7,
                outline: [
                  "Fit: model with parameters minimizing squared error - need not touch the points.",
                  "Interpolation: passes exactly through the points, valid only inside the range.",
                  "p = polyfit(strain, stress, 1); the slope p(1) is Young's modulus in MPa.",
                  "yfit = polyval(p, strain); overlay the line on the scatter.",
                  "resid = stress - yfit; patternless residuals validate the linear region.",
                  "s_at = interp1(strain, stress, 0.0012, 'pchip').",
                  "Limits: no extrapolation beyond the last measured strain; note degree-choice dangers.",
                ],
              },
              {
                q: "Why can a spline interpolation be worse than pchip near sharp changes in data?",
                marks: 3,
              },
              {
                q: "A ninth-degree polynomial fit to ten noisy points has R-squared 0.99. Give two reasons to distrust it.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.4",
            title: "Weibull reliability analysis",
            body: [
              "Reliability engineering asks how long components survive. The reliability function R(t) = P(T > t) is the survival probability; its complement is the cumulative failure distribution; and the hazard rate - failure probability per surviving component per unit time - traces the bathtub curve: infant mortality early, a roughly constant useful life, and wear-out at the end. The Weibull distribution shapes to all three regimes with two parameters: R(t) = exp(-(t/eta)^beta), where beta is the shape and eta the scale.",
              "The shape parameter carries the engineering meaning: beta < 1 gives a decreasing hazard (early-life failures dominate - screen or burn in), beta = 1 is the exponential case of pure chance (a constant failure rate of 1/eta, so replacement on age buys nothing), and beta > 1 gives an increasing hazard (wear-out - schedule replacement before the population ages past eta). eta itself is the characteristic life: R(eta) = exp(-1) ≈ 0.368, so 63.2% of units have failed at that age. Estimation is by maximum likelihood - MASS::fitdistr(hours, 'weibull') - or by median-rank regression on Weibull probability paper.",
              "Ten bearing failures show the workflow: fitdistr returns beta and eta; R(3) computes the reliability at 3000 hours; and the B10 life - the age at which 10% have failed, eta*(-log(0.9))^(1/beta) - is the maintenance trigger. The interpretation drives policy: a fitted beta well above 1 means wear-out, so time-based replacement before B10 is rational; beta near 1 means random failures, so a spares strategy is the answer instead. Report both parameters with their meaning - quoting eta alone is half an answer.",
            ],
            bullets: [
              "R(t) = P(T > t); the hazard rate traces the bathtub curve - infant mortality, useful life, wear-out.",
              "Weibull: R(t) = exp(-(t/eta)^beta) - two parameters cover the whole bathtub.",
              "beta < 1 early-life failures (screen), = 1 random (spares, not schedules), > 1 wear-out (replace on age).",
              "eta = characteristic life: R(eta) = exp(-1) ≈ 0.368, so 63.2% have failed at eta.",
              "fitdistr(hours, 'weibull') gives MLE estimates; B10 = eta*(-log(0.9))^(1/beta) is the service trigger.",
            ],
            codeExample: {
              language: "text",
              caption: "Weibull fit of bearing failures with R(t) and B10 life.",
              code: `# Weibull analysis of bearing failure times (thousand hours)
hours <- c(1.9, 2.3, 3.1, 3.4, 3.6, 4.0, 4.5, 5.2, 6.1, 8.0)

# MLE fit: MASS must be installed
# install.packages("MASS")           # once per machine
library(MASS)
fit <- fitdistr(hours, densfun = "weibull")
fit                                 # shape and scale estimates

beta <- fit$estimate["shape"]
eta  <- fit$estimate["scale"]
R <- function(t) exp(-(t / eta)^beta)   # reliability function

R(3)                                   # reliability at 3000 h
eta * (-log(1 - 0.10))^(1 / beta)      # B10 life: age of 10% failures`,
            },
            diagram: {
              kind: "fork",
              title: "Your Weibull fit returned shape beta",
              caption:
                "The shape parameter is the maintenance policy - read it before quoting eta.",
              start: "Interpret the fitted beta",
              branches: [
                { label: "beta < 1", outcome: "Decreasing hazard - early-life failures dominate: screen at burn-in, fix quality", good: true },
                { label: "beta = 1", outcome: "Constant hazard - random failures; age-based replacement buys nothing, hold spares", good: true },
                { label: "beta > 1", outcome: "Increasing hazard - wear-out: schedule time-based replacement before eta", good: true },
                { label: "Report only eta, ignore beta", outcome: "Half the answer - the shape decides the maintenance action", good: false },
              ],
            },
            callout: {
              type: "exam",
              title: "The 63.2% derivation",
              body: "Why 63.2%? Because R(eta) = exp(-(eta/eta)^beta) = exp(-1) ≈ 0.368 survive, so 1 - 0.368 = 0.632 have failed at the characteristic life. Derive it in one line whenever eta appears - it is the single most-asked Weibull short question and takes ten seconds.",
            },
            keyTerms: [
              { term: "Reliability function", definition: "R(t) = P(T > t); for Weibull, exp(-(t/eta)^beta)." },
              { term: "Shape parameter", definition: "The Weibull beta: below 1 infant mortality, 1 random, above 1 wear-out." },
              { term: "Characteristic life", definition: "The scale eta; the age by which 63.2% of units have failed (R(eta) = exp(-1))." },
            ],
            examQuestions: [
              {
                q: "Derive the reliability function of the Weibull distribution, explain the physical meaning of beta and eta, and describe the maintenance policy implied by beta < 1, beta = 1 and beta > 1. Fit ten bearing failure times in R and compute R(t) and the B10 life.",
                marks: 7,
                outline: [
                  "Define R(t), F(t) and the hazard rate; sketch the bathtub curve.",
                  "State the Weibull density and derive R(t) = exp(-(t/eta)^beta).",
                  "Show R(eta) = exp(-1) ≈ 0.368 - the 63.2% characteristic life.",
                  "Interpret the three beta regimes with their maintenance actions.",
                  "fitdistr(hours, 'weibull') for MLE estimates of both parameters.",
                  "Compute R(3) and B10 = eta*(-log(0.9))^(1/beta).",
                  "Conclude with the policy for a fitted beta above 1: time-based replacement before B10.",
                ],
              },
              {
                q: "What is the B10 life of a component?",
                marks: 2,
              },
              {
                q: "What does the Weibull model reduce to when beta = 1, and what does that mean for maintenance?",
                marks: 2,
              },
            ],
          },
          {
            number: "5.5",
            title: "Vibration analysis and the mini project",
            body: [
              "Multi-degree-of-freedom vibration becomes an eigenvalue problem: [K]{phi} = w^2[M]{phi}. MATLAB solves the generalized form directly with [phi, lam] = eig(K, M): each diagonal entry of lam is a squared natural frequency - fn = sqrt(lambda)/(2*pi) in hertz - and the matching column of phi is the mode shape, the deformation pattern the structure prefers at that frequency. Mass-normalized mode shapes are orthogonal, which is what lets engineers decouple a coupled system into independent single-DOF oscillators.",
              "Measured vibration becomes a spectrum with the FFT: sample the acceleration at fs hertz, compute X = fft(x)/length(x), build the frequency axis f = (0:N-1)*fs/N, and plot magnitude against frequency - two sinusoids buried in noise at 35 and 90 Hz appear as two clean peaks. The Nyquist rule governs sampling: frequencies above fs/2 alias into the band and corrupt everything, so sample at more than twice the highest frequency of interest - the quiet decision that makes or breaks the measurement.",
              "The mini project binds the whole subject: define a monitoring problem (a bearing rig), simulate or acquire signals in MATLAB - ode45 for the model, fft for the features - tabulate the feature data, and hand it to R: dplyr to summarize by machine state, a t-test or ANOVA to decide whether healthy and faulty vibration levels genuinely differ, ggplot2 for the report figure. Deliverables: a script per stage, one figure per claim, the statistical verdict, and a report a classmate could rerun unchanged. That reproducibility standard - not any single command - is the real exam of this course.",
            ],
            bullets: [
              "eig(K, M) solves [K]{phi} = w^2[M]{phi}; fn = sqrt(diag(lam))/(2*pi); columns of phi are mode shapes.",
              "fft(x)/N with f = (0:N-1)*fs/N turns time histories into amplitude spectra.",
              "Nyquist: sample above twice the highest frequency of interest, or it aliases into the band.",
              "The mini project chains MATLAB (model, fft features) into R (dplyr, tests, ggplot2) into a report.",
              "One script per stage and one figure per claim make the project reproducible and defensible.",
            ],
            codeExample: {
              language: "matlab",
              caption: "Modal analysis of a 2-DOF system, then a spectrum by FFT.",
              code: `% Two-DOF system: natural frequencies and mode shapes
M = [2 0; 0 1];              % kg
K = [600 -200; -200 300];    % N/m
[phi, lam] = eig(K, M);      % generalized eigenvalue problem
fn = sqrt(diag(lam)) / (2*pi)   % natural frequencies (Hz)
% columns of phi are the mode shapes

% Spectrum of a sampled acceleration signal
fs = 1000;                              % sampling rate (Hz)
t  = 0:1/fs:1-1/fs;
x  = 0.8*sin(2*pi*35*t) + 0.3*sin(2*pi*90*t) + 0.05*randn(size(t));
X  = fft(x) / length(x);                % scale the DFT
f  = (0:length(x)-1) * fs / length(x);  % frequency bins (Hz)
figure; plot(f(1:200), abs(X(1:200))); grid on   % peaks near 35 and 90 Hz
xlabel('frequency (Hz)'); ylabel('|X(f)|');`,
            },
            diagram: {
              kind: "matrix",
              title: "The mini project on one page",
              caption:
                "MATLAB computes, R concludes - theory feeds practice at every step.",
              axes: { x: "MATLAB (modelling) -> R (statistics)", y: "Theory -> Practice" },
              quadrants: [
                { label: "Model and simulate", note: "ode45 runs, eig(K, M), Simulink diagrams" },
                { label: "Test and compare", note: "t.test / aov on the feature table" },
                { label: "Signals and features", note: "fft spectra, feature extraction" },
                { label: "Visualize and report", note: "ggplot2 figures, one figure per claim" },
              ],
            },
            callout: {
              type: "tip",
              title: "Structure beats cleverness in the project",
              body: "Organize the mini project as: data in, MATLAB model and features, R statistics, figures, verdict - one script per stage, each runnable from scratch. Markers (and supervisors) grade reproducibility first: if a classmate can rerun your folder unchanged and get your figures, the project passes on structure alone.",
            },
            keyTerms: [
              { term: "Natural frequency", definition: "A frequency at which a system oscillates freely; sqrt(eigenvalue)/(2*pi) from eig(K, M)." },
              { term: "Mode shape", definition: "The deformation pattern associated with one natural frequency - a column of phi from eig(K, M)." },
              { term: "Aliasing", definition: "Frequencies above fs/2 folding into the measured band; prevented by sampling above twice the highest frequency." },
            ],
            examQuestions: [
              {
                q: "Explain the role of the generalized eigenvalue problem in multi-DOF vibration analysis and the role of the FFT in signal analysis. Outline a mini project that combines MATLAB simulation, FFT feature extraction and R-based statistical comparison for bearing condition monitoring.",
                marks: 7,
                outline: [
                  "State [K]{phi} = w^2[M]{phi} from m*x'' + K*x = 0 with harmonic motion.",
                  "eig(K, M): lam holds squared natural frequencies, phi the mode shapes; fn = sqrt(lam)/(2*pi).",
                  "Sampling and the Nyquist rule: fs above twice the highest frequency, or aliasing.",
                  "fft(x)/N and the frequency vector f = (0:N-1)*fs/N; peaks identify components.",
                  "MATLAB stage: ode45 model or measured data, feature extraction into a table.",
                  "R stage: dplyr summaries, t.test/aov healthy versus faulty, ggplot2 figure.",
                  "Report: one figure per claim, scripts reproducible end to end.",
                ],
              },
              {
                q: "State the Nyquist sampling criterion.",
                marks: 2,
              },
              {
                q: "For eig(K, M) returning lam and phi, where do you read the natural frequencies and the mode shapes?",
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
        "ME-705 papers lean heavily on MATLAB's core computation - matrix algebra, programming and ODE solving - with R statistics supplying a reliable second block and the mechanical applications of Unit V appearing as long, structured questions. Allocate revision in roughly the ratios below and keep one full practice pass per unit regardless of weight.",
      ],
      weightedTopics: [
        { topic: "Matrix operations and the backslash solver (A\\b vs inv, element-wise dots)", weight: "8-10 marks", note: "Almost guaranteed; trace dimensions and verify with the residual norm." },
        { topic: "Scripts vs functions, M-file anatomy, nargin", weight: "7-9 marks", note: "Write both files side by side; workspace isolation is the marking point." },
        { topic: "Control flow: if/switch/for/while with a traced program", weight: "7-9 marks", note: "Practise one bisection loop and one classification ladder end to end." },
        { topic: "ode45 and second-order ODE conversion (vibration runs)", weight: "7-9 marks", note: "The state-space conversion step carries the method marks - drill it." },
        { topic: "Transfer functions: tf, stability, stepinfo, bode, margin", weight: "7-9 marks", note: "Asked as one five-command block; rehearse it as a unit." },
        { topic: "t-tests, ANOVA and TukeyHSD in R", weight: "7-9 marks", note: "Hypotheses and assumptions first, then the R call, then the conclusion." },
        { topic: "R data structures, indexing and import/export", weight: "6-8 marks", note: "Expect one 'write one line that selects...' question and one on read.csv." },
        { topic: "dplyr verbs and ggplot2 grammar", weight: "6-8 marks", note: "One piped pipeline and one layered plot with aes explained." },
        { topic: "Linear regression: lm, summary, prediction, diagnostics", weight: "5-7 marks", note: "Slope interpretation plus the extrapolation warning earn the marks." },
        { topic: "fzero, interpolation, polyfit and Weibull reliability", weight: "5-7 marks", note: "Short numerical parts - know B10 and the beta regimes cold." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Assuming five days a week with two hours a day, this schedule touches every section twice - once to understand, once to revise - and reserves the last week for the Unit V applications plus two full practice papers.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - MATLAB reflexes", tasks: ["Desktop panes, scripts vs functions; write and call one function", "Array construction and indexing drills on a 3x3 stiffness matrix", "Backslash solve with residual check; element-wise family; damped-vibration plot"] },
        { week: "Week 2", focus: "Unit II - programming", tasks: ["Bisection loop and classification ladder, traced by hand", "File I/O: readtable/writetable round trip plus a fprintf report", "Symbolic: beam deflection chain, solve, subs/double, dsolve"] },
        { week: "Week 3", focus: "Unit II - toolboxes", tasks: ["fminbnd, fminsearch, fmincon: one small design problem each", "Simulink: mass-spring-damper diagram, Scope, To Workspace, sim()", "Cross-check the Simulink run against ode45 on the same ODE"] },
        { week: "Week 4", focus: "Unit III - R fundamentals", tasks: ["RStudio plus the structure ladder; str() drill on a test log", "Indexing: masks, negative, names, subset() on a six-row frame", "Import/export round trip; packages, masking and the pipe"] },
        { week: "Week 5", focus: "Unit IV - R analysis", tasks: ["dplyr: six verbs into one grouped pipeline on fatigue data", "ggplot2: S-N curve with log scale, colour and facets", "t-test/ANOVA/Tukey plus lm with diagnostics, reported properly"] },
        { week: "Week 6", focus: "Unit V + full revision", tasks: ["ode45 vibration run with roots cross-check; tf/step/bode block", "polyfit Young's modulus; Weibull fit, R(t), B10; FFT spectrum", "Assemble the mini project; two full practice papers under time"] },
      ],
    },
    {
      id: "last-day",
      heading: "The last 24 hours",
      body: [
        "The final day is for recall, not new material. Rebuild the flagship artifacts from memory, then re-run the code examples once so syntax stays in your fingers.",
      ],
      bullets: [
        "Redraw from memory: the script-vs-function table, the A\\b fork, and the dplyr verb pipeline - three diagrams that carry the paper.",
        "Hand-write the ode45 block once: state conversion, function handle, [t, y] call, plot - four lines, seven marks.",
        "Recite the R reporting format: statistic, degrees of freedom, p-value, conclusion in engineering units.",
        "Run every code example in this guide one final time; syntax recall is the short-question bank.",
        "Recite the Weibull regimes: beta < 1 screen, beta = 1 spares, beta > 1 replace on age - with B10's formula.",
        "Finish with the callouts: .* vs *, A\\b vs inv, extrapolation, 'fail to reject' - the slips examiners hunt first.",
      ],
    },
    {
      id: "exam-hall",
      heading: "Exam-hall strategy",
      examTips: [
        "Write runnable syntax, not prose: correct function names, brackets and end statements are what earn the marks.",
        "After every command, add one comment on what it returns - markers check understanding, not typing.",
        "In R questions, build the pipeline line by line; a chain that stops midway still earns step marks.",
        "State assumptions before any test (normality, spread, independence) and hypotheses before the call.",
        "Time-box: 2-3 mark questions in 4-6 minutes, 7-mark questions in 15, and keep the last 10 minutes to re-read every * for a missing dot.",
      ],
    },
    {
      id: "slips",
      heading: "Common slips that cost easy marks",
      bullets: [
        "Using * where .* belongs when evaluating formulas over vectors - the classic dimension-mismatch error.",
        "Calling inv(A)*b instead of A\\b - flagged in every marking scheme as the inferior solver.",
        "Confusing install.packages (once per machine) with library (every session) in R.",
        "Reading p > alpha as 'H0 is true' - the correct phrase is 'fail to reject H0'.",
        "Extrapolating a polyfit or lm() fit beyond the measured range and quoting the number.",
        "Reporting a Weibull eta without its beta - the shape parameter decides the maintenance policy.",
      ],
    },
  ],
};
