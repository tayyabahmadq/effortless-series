/**
 * Academics - RGPV 7th-semester subject: AL-702(D) Machine Learning for Data Science.
 *
 * Structure mirrors subject-cs-302.ts: units -> one chapter per unit ->
 * numbered sections.  Each section carries body paragraphs, bullets, a
 * diagram, key terms, a callout, a table or Python code sample, and three
 * exam-style questions (one 7-mark with outline + two shorts).
 *
 * Unit themes: data science workflow, supervised learning, unsupervised
 * learning, time series / text / recommenders, deployment and ethics.
 */

import type { AcademicSubject } from "./types";

export const al702d: AcademicSubject = {
  id: "al-702-d",
  code: "AL-702(D)",
  title: "Machine Learning for Data Science",
  semester: "VII Semester",
  program: "RGPV · Artificial Intelligence & Machine Learning",
  tagline:
    "The complete visual guide to AL-702(D): the data science workflow, supervised learning, unsupervised learning, time series / text / recommenders, and deployment with ethics - every syllabus point paired with a worked example you can redraw in the exam hall.",
  description:
    "Five units trace the full journey of a data science project. Unit I builds the workflow: the CRISP-DM lifecycle, data cleaning, transformation, feature engineering and the splits and cross-validation that keep evaluation honest. Unit II turns labelled data into predictions with linear and logistic regression, decision trees, random forests, boosting, kNN, Naive Bayes and SVM, then scores them with confusion matrices and ROC curves. Unit III discovers structure without labels through k-means, hierarchical clustering, DBSCAN, PCA and association rules. Unit IV extends the toolkit to time series smoothing and ARIMA, TF-IDF text mining, sentiment analysis and recommenders. Unit V closes the loop with pipelines, deployment patterns, drift monitoring, honest visualisation, reproducibility, fairness and two capstone case studies.",
  accentColor: "#34d399",
  emoji: "MLD",
  unitCount: 5,
  totalSections: 31,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Data Science Workflow and Data Preparation",
      summary:
        "The lifecycle every project follows: CRISP-DM from business understanding to deployment, data sources and types, cleaning with missing-value and outlier strategies, transformation and scaling, feature engineering, and the splits, cross-validation and leakage discipline that make evaluation trustworthy.",
      chapter: {
        number: "01",
        title: "The Data Science Workflow",
        intro:
          "Unit I sets the professional frame for the whole subject. It walks the CRISP-DM lifecycle with a running churn example, classifies data sources and variable types, then spends three sections on the work that consumes most project hours: cleaning, transformation and feature engineering. It closes with the evaluation contract - train, validation and test splits, k-fold cross-validation, and the leakages that silently inflate reported accuracy.",
        inOneBreath:
          "CRISP-DM cycles through business understanding, data understanding, preparation, modelling, evaluation and deployment; 60-80 percent of effort lands in preparation. Know your variable types before choosing encodings and statistics. Handle missing values according to the missingness mechanism and cap or log outliers found by IQR fences or z-scores beyond 3. Scale features with min-max or z-score standardization, fitted on training data only. Engineer features by encoding categoricals, binning continuous values and building interactions. Evaluate with holdout splits plus 5-fold cross-validation, and keep every preprocessing step inside the training fold to avoid the leakage that turns an honest 0.84 accuracy into a fake 0.97.",
        sections: [
          {
            number: "1.1",
            title: "The data science lifecycle and CRISP-DM",
            body: [
              "CRISP-DM - the Cross-Industry Standard Process for Data Mining - organises any data science project into six phases: business understanding, data understanding, data preparation, modelling, evaluation and deployment. The phases are drawn as a cycle, not a waterfall, because every phase routinely sends you backwards: a model that will not evaluate may reveal bad preparation, and preparation may reveal that the business question was badly framed. In exams, always present CRISP-DM as a loop with arrows back from evaluation to preparation and from business understanding forward into every later phase.",
              "A worked example fixes the phases. A telecom wants to cut churn by 10 percent. Business understanding defines success as catching at least 70 percent of churners with fewer than 20 percent false alarms, because every retention call costs money. Data understanding profiles 70,000 customers across 21 fields and finds 26 percent churn with 11 percent missing values in the tenure column. Preparation builds tenure bands, encodes contract type, and imputes missing tenure with the median. Modelling trains logistic regression and gradient boosting. Evaluation compares both against the business metric, and deployment scores the customer base monthly so the retention team receives a ranked call list.",
              "Two distinctions examiners probe repeatedly. First, evaluation is not the same as deployment: evaluation checks whether the model meets the success criteria agreed in phase one, while deployment integrates the model into the business process - here, a monthly batch scoring job feeding the call centre. Second, business understanding is the phase students skip and projects die from: a technically excellent model that predicts the wrong quantity, or optimises accuracy when the business needs recall, is a failed project. Writing the success metric in phase one is what makes phase five a measurement rather than an opinion.",
              "The lifecycle also explains where the hours actually go. Industry surveys consistently report that 60-80 percent of project time goes to data understanding and preparation, not to modelling - the models themselves are often minutes of compute. This is why Units I devotes four of its six sections to data work, and why an examiner rewards answers that describe concrete preparation decisions (which imputation, which encoding, which outlier rule) rather than answers that jump straight to naming algorithms.",
            ],
            bullets: [
              "Six CRISP-DM phases: business understanding, data understanding, data preparation, modelling, evaluation, deployment.",
              "The process is a cycle: evaluation loops back to preparation, and business understanding constrains every later decision.",
              "Worked churn project: success = catch 70 percent of churners under 20 percent false alarms, 70k customers, 26 percent churn rate.",
              "Evaluation phase checks the model against the phase-one success metric; deployment phase integrates it into a business process (here, monthly batch scoring).",
              "60-80 percent of project effort is data understanding and preparation - modelling is the short end of the timeline.",
              "Deliverables per phase: project plan, data audit report, cleaned feature dataset, candidate models, evaluation report, deployed scoring pipeline.",
            ],
            table: {
              caption: "The six CRISP-DM phases for the telecom churn project.",
              headers: ["Phase", "Key question", "Output"],
              rows: [
                ["Business understanding", "What does success mean in money and recall?", "Success metric: catch 70 percent of churners, < 20 percent false alarms"],
                ["Data understanding", "What data exists and how dirty is it?", "Profile: 70k rows, 21 fields, 26 percent churn, 11 percent missing tenure"],
                ["Data preparation", "What features can the model consume?", "Encoded contract type, tenure bands, median-imputed tenure"],
                ["Modelling", "Which algorithm fits the metric?", "Logistic regression and gradient boosting candidates"],
                ["Evaluation", "Does the model meet the business metric?", "Recall 0.74 at precision 0.81 - criteria met"],
                ["Deployment", "How does the business consume predictions?", "Monthly batch job writing a ranked retention call list"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "The CRISP-DM cycle",
              caption:
                "Six phases in a loop - arrows back from evaluation are where real projects live.",
              steps: [
                { label: "Business understanding", note: "define the success metric" },
                { label: "Data understanding", note: "profile, visualise, audit quality" },
                { label: "Data preparation", note: "clean, transform, engineer features" },
                { label: "Modelling", note: "train candidate models" },
                { label: "Evaluation", note: "check against the success metric" },
                { label: "Deployment", note: "integrate, monitor, revisit" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "When asked to explain CRISP-DM, draw the six-phase cycle and attach one concrete decision to each phase from a single running example (churn, credit, demand - any one). Generic phase names alone earn half marks; a phase-by-phase example earns full marks.",
            },
            keyTerms: [
              { term: "CRISP-DM", definition: "The Cross-Industry Standard Process for Data Mining: six iterative phases from business understanding to deployment." },
              { term: "Business understanding", definition: "The phase that converts a business goal into a measurable success criterion for the model." },
              { term: "Data preparation", definition: "Cleaning, transformation and feature engineering that turn raw data into a model-ready dataset; usually the largest phase." },
              { term: "Deployment", definition: "Integrating the validated model into the business process, e.g. a batch scoring job or a real-time API." },
              { term: "Iterative lifecycle", definition: "The practice of looping back to earlier phases when evaluation or new data invalidates later assumptions." },
            ],
            examQuestions: [
              {
                q: "Explain all six phases of CRISP-DM and illustrate each phase with a concrete decision from a churn-prediction project. Why is the process drawn as a cycle rather than a sequence?",
                marks: 7,
                outline: [
                  "Name the six phases in order: business understanding, data understanding, data preparation, modelling, evaluation, deployment.",
                  "Business understanding: state a measurable success metric, e.g. catch 70 percent of churners with < 20 percent false alarms.",
                  "Data understanding: profile the data - 70k customers, 21 fields, 26 percent churn, 11 percent missing tenure.",
                  "Data preparation: give two concrete steps, e.g. median imputation of tenure and one-hot encoding of contract type.",
                  "Modelling and evaluation: train two candidates and check them against the phase-one metric, not raw accuracy.",
                  "Deployment: describe integration, e.g. monthly batch scoring that feeds a ranked retention call list.",
                  "Cycle argument: evaluation failures loop back to preparation, and preparation can expose a badly framed business question.",
                ],
              },
              {
                q: "Which CRISP-DM phase typically consumes the most project time, and why?",
                marks: 2,
              },
              {
                q: "Distinguish between the evaluation phase and the deployment phase of CRISP-DM.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.2",
            title: "Data sources, data types and exploratory data analysis",
            body: [
              "Data arrives from four broad families: operational systems (transactional databases recording orders, payments, admissions), machine-generated sources (application logs, sensor and IoT feeds, clickstreams), human-generated sources (surveys, reviews, support tickets, spreadsheets), and external sources (government open-data portals, financial APIs, scraped web pages). Each source also has a structure: relational tables are structured, JSON logs and XML feeds are semi-structured, and free text, images and audio are unstructured. The structure dictates the first tool: SQL for tables, a parser for JSON, and a text pipeline (Unit IV) for documents.",
              "Within structured data, the measurement scale of every column decides which mathematics is legal. Nominal variables are unordered labels (city, product category); ordinal variables are ordered ranks (rating: poor < good < excellent); interval variables have equal spacing but no true zero (temperature in Celsius); ratio variables have a true zero (income, age, weight). Computing a mean of nominal codes is meaningless, and a linear regression treats an arbitrary label ordering as real - which is exactly why encoding choices in Section 1.5 depend on the scale declared here.",
              "Exploratory data analysis (EDA) is the systematic profiling of a dataset before any modelling. In pandas, df.describe() gives per-column counts, mean, standard deviation and quartiles; df.isnull().sum() maps missingness; df['segment'].value_counts() exposes category imbalance. Visual summaries add shape: histograms and box plots reveal skew and outliers, scatter plots reveal relationships, and a correlation matrix over numeric columns flags collinearity - for example, tenure correlating at -0.72 with the churn flag immediately suggests tenure will carry predictive weight.",
              "EDA is not busywork; every finding converts directly into a preparation decision. A right-skewed income column suggests a log transform in Section 1.4; a category with 5,000 distinct values suggests frequency or target encoding rather than one-hot; missingness concentrated in one segment suggests a missing-indicator feature; a bimodal histogram suggests binning. Writing 'performed EDA using describe, value_counts, histograms and a correlation heatmap, and identified three preparation actions' is a full-mark sentence in any workflow question.",
            ],
            bullets: [
              "Four source families: operational databases, machine-generated logs and sensors, human-generated surveys and tickets, external open data and APIs.",
              "Structure ladder: structured tables -> semi-structured JSON/XML -> unstructured text, images, audio.",
              "Nominal: unordered labels; ordinal: ordered ranks; interval: equal spacing, no true zero; ratio: true zero exists.",
              "Scale legality: means of nominal codes are meaningless; regressions silently impose order on nominal labels.",
              "EDA toolkit: df.describe(), df.isnull().sum(), value_counts(), histograms, box plots, scatter plots, correlation heatmap.",
              "Worked finding: correlation of -0.72 between tenure and churn flags tenure as a key predictor before any model is trained.",
              "Every EDA finding should end in a preparation decision: skew -> log transform, high cardinality -> frequency encoding, gaps -> missing indicators.",
            ],
            table: {
              caption: "Measurement scales and what each allows.",
              headers: ["Scale", "Example", "Legal summaries", "Typical encoding"],
              rows: [
                ["Nominal", "city, contract type", "mode, counts", "one-hot"],
                ["Ordinal", "rating poor/good/excellent", "median, percentiles", "ordinal integers"],
                ["Interval", "temperature in Celsius", "mean, standard deviation", "raw numeric"],
                ["Ratio", "income, tenure in months", "mean, ratios, logs", "raw numeric, log, bins"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "An exploratory data analysis pass",
              caption:
                "Each stage ends in a decision that feeds the preparation sections that follow.",
              stages: [
                { label: "Collect and load", note: "database, API, CSV into pandas" },
                { label: "Profile numerically", note: "describe, isnull, value_counts" },
                { label: "Visualise", note: "histograms, box plots, scatter, heatmap" },
                { label: "Note findings", note: "skew, outliers, imbalance, collinearity" },
                { label: "Decide actions", note: "transforms, encodings, imputations" },
              ],
            },
            callout: {
              type: "tip",
              title: "Profile before you model",
              body: "Examiners and interviewers both use the same trap: describe a dataset and ask what you would do first. The winning answer is always a profiling pass - describe(), isnull(), value_counts(), two plots - not a model. Models trained on unprofiled data inherit every surprise the profile would have caught.",
            },
            keyTerms: [
              { term: "Structured data", definition: "Data fixed into rows and typed columns, e.g. relational tables; directly loadable into pandas or SQL." },
              { term: "Nominal variable", definition: "A categorical variable with no inherent order, such as city or colour." },
              { term: "Ratio variable", definition: "A numeric variable with a meaningful zero, so ratios and logs are valid - income, age, counts." },
              { term: "Exploratory data analysis", definition: "Systematic profiling of distributions, missingness and relationships before modelling, using summaries and plots." },
            ],
            examQuestions: [
              {
                q: "Explain the four measurement scales with examples, and show with one worked example how the scale of a variable decides its encoding and the statistics you may compute on it.",
                marks: 7,
                outline: [
                  "Define nominal, ordinal, interval and ratio scales with one example each.",
                  "State which summaries are legal per scale: mode for nominal, median for ordinal, mean for interval and ratio.",
                  "Show the failure case: computing the mean of nominal city codes 1, 2, 3 produces a meaningless number.",
                  "Explain why linear regression on a nominal label silently imposes a fake ordering.",
                  "Give the correct encodings: one-hot for nominal, ordinal integers for ordered ranks.",
                  "Contrast interval vs ratio with temperature in Celsius vs income in rupees (true zero enables ratios and logs).",
                  "Close with the EDA step where scales are detected: df.dtypes and value_counts inspection.",
                ],
              },
              {
                q: "List four pandas operations you would run in the first hour of exploring a new dataset.",
                marks: 2,
              },
              {
                q: "Classify the following as structured, semi-structured or unstructured: a MySQL orders table, a JSON application log, a folder of scanned complaints.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.3",
            title: "Missing values and outlier detection",
            body: [
              "Missing values are classified by mechanism, and the mechanism decides the fix. Missing completely at random (MCAR) means the gaps share no cause with any variable - a sensor randomly dropping 2 percent of readings. Missing at random (MAR) means the gap is explainable by other observed columns - younger customers skip the income field more often. Missing not at random (MNAR) means the missingness itself carries information - customers about to churn stop answering surveys. Deleting rows is safe only under MCAR; under MNAR, deletion biases the sample exactly where the business question lives.",
              "The imputation toolbox runs from simple to model-based. Mean imputation suits symmetric numeric columns; median imputation suits skewed ones - for a salary column with mean 61,000 and median 45,000, the median resists the pull of a few executives. Mode fills categorical gaps; forward fill suits time series where the last observation is the best guess; a group-wise median (median income within each city) beats a global median. Adding a Boolean missing-indicator column lets the model learn from the fact of missingness, and sklearn's KNNImputer fills each gap from the k most similar complete rows.",
              "Outliers are found by two standard rules. The IQR rule: with Q1 = 22,000 and Q3 = 58,000, IQR = 36,000, so the lower fence is 22,000 - 1.5 x 36,000 = -32,000 and the upper fence is 58,000 + 54,000 = 112,000; a 250,000 salary is an outlier. The z-score rule flags values with |z| > 3, where z = (x - mean) / standard deviation; for a column with mean 50 and standard deviation 8, the value 80 has z = 3.75 and is flagged. The z-score rule assumes roughly normal data; the IQR rule does not, which makes it the default for skewed columns.",
              "Detection is not deletion. An outlier may be a data-entry error (an age of 220 - fix or drop), a genuine extreme (a legitimate crorepati customer - keep, perhaps capped or log-transformed), or the signal itself (in fraud detection, the outliers are the entire point). Standard responses are: winsorizing (capping at the fences), a log or square-root transform to compress the tail, or a robust model choice - trees ignore outliers entirely, while linear regression and k-means absorb them into coefficients and centroids. Document every choice; an undocumented cap is invisible to the next auditor.",
            ],
            bullets: [
              "MCAR: gaps have no cause; safe to drop rows. MAR: gaps explained by other columns; impute with a model. MNAR: missingness is informative; add missing indicators.",
              "Median imputation for skewed columns: with mean 61,000 and median 45,000, the median resists executive salaries.",
              "Group-wise imputation beats global: median income per city, not per dataset.",
              "Missing-indicator columns let tree and linear models learn from the fact of a gap.",
              "IQR fences: lower = Q1 - 1.5 x IQR, upper = Q3 + 1.5 x IQR; worked example flags 250,000 against an upper fence of 112,000.",
              "Z-score rule: flag |z| > 3; for mean 50 and sigma 8, the value 80 gives z = 3.75.",
              "Responses to a confirmed outlier: fix (error), cap at fences (winsorize), log transform, or keep with a robust model such as a tree.",
            ],
            codeExample: {
              language: "python",
              caption: "Missing-value audit and IQR outlier filter in pandas.",
              code: `import pandas as pd
import numpy as np

df = pd.read_csv("customers.csv")

# 1. Missingness map - which columns, how many gaps
print(df.isnull().sum())

# 2. Missing indicator BEFORE filling - let the model see the gap itself
df["income_was_missing"] = df["income"].isna().astype(int)

# 3. Median imputation for a skewed numeric column
df["income"] = df["income"].fillna(df["income"].median())

# 4. IQR outlier detection on salary
q1, q3 = df["salary"].quantile([0.25, 0.75])
iqr = q3 - q1
low, high = q1 - 1.5 * iqr, q3 + 1.5 * iqr
outliers = df[(df["salary"] < low) | (df["salary"] > high)]
print("outliers found:", len(outliers))

# 5. Winsorize: cap instead of delete
df["salary"] = df["salary"].clip(low, high)`,
            },
            diagram: {
              kind: "fork",
              title: "Choosing a missing-value strategy",
              caption:
                "Diagnose the mechanism first - the same gap needs different fixes under MCAR, MAR and MNAR.",
              start: "Why is this value missing?",
              branches: [
                { label: "MCAR - random sensor drop", outcome: "Drop rows or mean/median impute; no bias introduced", good: true },
                { label: "MAR - gap explained by other columns", outcome: "Group-wise or KNN imputation using the observed columns", good: true },
                { label: "MNAR - churners stop answering", outcome: "Keep the signal: add a missing-indicator feature", good: true },
                { label: "Blind row deletion under MNAR", outcome: "Sample biased exactly where the question lives - wrong answers", good: false },
              ],
            },
            callout: {
              type: "warning",
              title: "Impute after the split, not before",
              body: "Fitting an imputation value on the full dataset lets test-set statistics leak into training. Compute the median on the training fold only, then apply it to validation and test. In sklearn, put the imputer inside a Pipeline so cross-validation refits it on every fold - Section 1.6 makes this rule exact.",
            },
            keyTerms: [
              { term: "MCAR", definition: "Missing completely at random: the probability of a gap is independent of all variables, observed or not." },
              { term: "MNAR", definition: "Missing not at random: the missingness depends on the unobserved value itself, so the gaps carry information." },
              { term: "Imputation", definition: "Filling missing entries with estimated values - mean, median, mode, group-wise, forward fill or model-based." },
              { term: "IQR rule", definition: "Flag values outside [Q1 - 1.5 x IQR, Q3 + 1.5 x IQR]; distribution-free, so it suits skewed columns." },
              { term: "Winsorizing", definition: "Capping extreme values at the fence values instead of deleting them, preserving row count while limiting influence." },
            ],
            examQuestions: [
              {
                q: "Explain the three missing-data mechanisms, and for each give an appropriate handling strategy. Then detect outliers in a column with Q1 = 22,000 and Q3 = 58,000 using the IQR rule.",
                marks: 7,
                outline: [
                  "Define MCAR, MAR and MNAR with one example each (sensor drop, age-dependent income field, churners stopping surveys).",
                  "MCAR -> row deletion or simple imputation is unbiased.",
                  "MAR -> group-wise or KNN imputation that conditions on observed columns.",
                  "MNAR -> add missing-indicator features; plain deletion biases the sample.",
                  "Compute IQR = 58,000 - 22,000 = 36,000.",
                  "Fences: lower = 22,000 - 54,000 = -32,000; upper = 58,000 + 54,000 = 112,000.",
                  "Conclude: 250,000 exceeds the upper fence and is flagged; discuss cap vs log transform vs robust model.",
                ],
              },
              {
                q: "Why is median imputation preferred over mean imputation for a right-skewed column?",
                marks: 2,
              },
              {
                q: "A column has mean 50 and standard deviation 8. Which of the values 62, 76 and 80 are flagged by the z-score rule with threshold 3?",
                marks: 3,
              },
            ],
          },
          {
            number: "1.4",
            title: "Transformation and normalization",
            body: [
              "Many algorithms measure distances or follow gradients, and both break when features live on different scales. In a kNN classifier over income (20,000 to 90,000) and age (18 to 70), a one-year age difference contributes 1 squared unit of distance while a one-rupee income difference contributes 1 - so income differences of thousands completely dominate the neighbourhood and age becomes invisible. Gradient descent on unsealed features takes tiny wobbly steps along the steep income direction and glacial steps along age. Scaling is therefore not cosmetic; it changes which model a dataset can train at all.",
              "The two standard scalers make different trade-offs. Min-max normalization maps each column to [0, 1] with x' = (x - min) / (max - min): compact and bounded, but one extreme value stretches the whole scale - a single 1,00,00,000 income drags every ordinary salary below 0.01. Z-score standardization maps to mean 0 and standard deviation 1 with x' = (x - mean) / sigma: unbounded but outlier-tolerant, and it is the default for linear models, logistic regression, SVMs and PCA. The robust scaler subtracts the median and divides by the IQR, surviving even heavy outliers.",
              "Beyond scaling, transform the shape of a column. Log transforms tame right-skew: annual incomes spanning 20,000 to 1,00,00,000 typically drop from a skewness of about 2.1 to below 0.4 after log10, and multiplicative processes (counts, prices, populations) become additive and closer to normal. Square-root transforms moderate count variables; Box-Cox generalises both with a fitted power parameter. Binning (covered with feature engineering) and rank-based transforms are further options when even transformed linearity fails.",
              "The one non-negotiable rule: fit the scaler on training data only, then apply the same stored min/max or mean/sigma to validation and test data. Fitting on the full dataset lets test statistics flow into training - a data leak that inflates scores (Section 1.6 quantifies it). In sklearn this is mechanical: scaler.fit(X_train) followed by scaler.transform(X_test), or simply place the scaler inside a Pipeline. A value of 105 arriving from the test set against a training max of 100 is normal - the transform extrapolates; it must not refit.",
            ],
            bullets: [
              "Why scale: distance-based (kNN, SVM, k-means) and gradient-based models are dominated by the largest-scale feature.",
              "Min-max: x' = (x - min) / (max - min), bounded in [0, 1], but a single outlier compresses everything else.",
              "Z-score: x' = (x - mean) / sigma, mean 0 and standard deviation 1; the default for linear models, SVM and PCA.",
              "Robust scaler: centre on the median, scale by the IQR - survives heavy outliers.",
              "Log transform compresses right skew: income skewness about 2.1 falls below 0.4 after log10.",
              "Fit on train, transform test: scaler.fit(X_train) then scaler.transform(X_test); never fit on the full dataset.",
              "Trees and random forests do not need scaling - splits compare one feature at a time - but kNN, PCA and gradient methods do.",
            ],
            codeExample: {
              language: "python",
              caption: "Scaling with sklearn - fit on train, transform test.",
              code: `from sklearn.preprocessing import StandardScaler, MinMaxScaler
from sklearn.model_selection import train_test_split

X_train, X_test = train_test_split(X, test_size=0.2, random_state=42)

# Z-score standardization: fit on TRAIN only
sc = StandardScaler()
X_train_s = sc.fit_transform(X_train)
X_test_s = sc.transform(X_test)          # reuses train mean / sigma

print("train mean ~ 0:", X_train_s.mean(axis=0).round(2))
print("train std  ~ 1:", X_train_s.std(axis=0).round(2))

# Min-max alternative, bounded to [0, 1]
mm = MinMaxScaler()
X_train_mm = mm.fit_transform(X_train)`,
            },
            diagram: {
              kind: "compare",
              title: "Min-max normalization vs z-score standardization",
              caption:
                "Both rescale a column; they differ in bounds, outlier sensitivity and typical partners.",
              left: {
                heading: "Min-max scaling",
                items: [
                  "Formula: x' = (x - min) / (max - min)",
                  "Bounded in [0, 1] - convenient for neural nets and image pixels",
                  "One extreme value compresses all other values into a sliver",
                  "Keeps the original shape of the distribution",
                ],
              },
              right: {
                heading: "Z-score standardization",
                items: [
                  "Formula: x' = (x - mean) / sigma",
                  "Unbounded, centred at 0 with unit variance",
                  "Outlier-tolerant; the default for SVM, PCA, logistic regression",
                  "Required by regularised models so penalties treat features equally",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "A frequent 2-mark question: 'Differentiate normalization and standardization.' Answer in one line each - normalization rescales to a fixed range such as [0, 1] using min and max; standardization rescales to mean 0 and standard deviation 1 - then add the practical note that standardization is preferred when outliers are present. One worked number for each formula usually earns the second mark.",
            },
            keyTerms: [
              { term: "Min-max normalization", definition: "Rescaling a column to a fixed range, usually [0, 1], using its minimum and maximum." },
              { term: "Standardization (z-score)", definition: "Rescaling a column to mean 0 and standard deviation 1 by subtracting the mean and dividing by sigma." },
              { term: "Robust scaling", definition: "Subtracting the median and dividing by the IQR so extreme outliers barely move the scale." },
              { term: "Log transform", definition: "Replacing x by log(x) to compress right-skewed, multiplicative columns toward symmetry." },
            ],
            examQuestions: [
              {
                q: "Explain why feature scaling is required for kNN but not for decision trees, and compute the min-max scaled value of x = 45 for a column with min = 20 and max = 70.",
                marks: 7,
                outline: [
                  "kNN classifies by Euclidean distance, so large-scale features dominate the neighbourhood computation.",
                  "Give the domination example: income range 20,000-90,000 vs age 18-70 swamps age.",
                  "Decision trees compare one feature per split with thresholds, so scale is irrelevant.",
                  "Note gradient-based models (linear/logistic regression with gradient descent) also need scaling for fast convergence.",
                  "Write the min-max formula x' = (x - min) / (max - min).",
                  "Substitute: (45 - 20) / (70 - 20) = 25 / 50 = 0.5.",
                  "Close with the leakage rule: fit the scaler on training data only.",
                ],
              },
              {
                q: "State the z-score standardization formula and the resulting mean and standard deviation of the transformed column.",
                marks: 2,
              },
              {
                q: "A column has mean 100 and standard deviation 20. What is the standardized value of 140, and is it unusual?",
                marks: 3,
              },
            ],
          },
          {
            number: "1.5",
            title: "Feature engineering: encoding, binning and interactions",
            body: [
              "Features set the ceiling on what any model can learn; algorithms only decide how close to that ceiling you get. Feature engineering converts raw columns into informative numbers, and it is where the 60-80 percent preparation budget of Section 1.1 is actually spent. The three canonical moves are encoding categoricals, binning or transforming continuous values, and constructing interaction or domain features. Each move trades information for learnability: a good feature makes the pattern linear or monotonic in some column so that even a simple model can find it.",
              "Encoding categorical columns has three standard options with sharp edges. One-hot encoding creates one indicator column per category - City = {Bhopal, Indore, Jabalpur} becomes three 0/1 columns - and is the safe default for nominal variables; with many categories it explodes width, so drop one column or use regularization to absorb the redundancy. Ordinal encoding maps ordered ranks to integers (poor = 0, good = 1, excellent = 2) and is only legal when a real order exists. Label-encoding a nominal column with arbitrary integers injects a fake order that linear models and kNN will believe; target encoding (replacing a category by the mean label of its training rows) is powerful but must be computed inside cross-validation folds or it leaks the target directly.",
              "Binning converts a continuous column into ordered bands: age into 18-25, 26-40, 41-60, 61+ with pd.cut, or income into quantile buckets with pd.qcut so each band holds equal counts. Binning captures non-linear effects that a linear model cannot express, resists outliers, and produces interpretable segments - but it discards within-band detail and can create unstable bands in sparse regions. Interaction features multiply or combine columns to express joint effects: price_per_sqft = price / area separates a costly small flat from a cheap large one, and tenure_months x monthly_charges estimates customer lifetime revenue; datetime columns decompose into hour, weekday and month, which is the whole feature set many demand-forecasting models need.",
              "A worked decision ties the moves together. For the churn dataset: contract_type (3 nominal values) -> one-hot with drop-first; tenure_months (ratio, skewed) -> keep raw plus a tenure_band; monthly_charges (ratio) -> keep raw plus charge_per_service = charges / n_services; complaints_count (counts, heavy tail) -> log1p transform; last_complaint_date -> days_since_complaint plus a no_complaint flag. Six raw columns became nine model-ready features, each justified by a scale or a shape - this one paragraph is a complete 7-mark answer to most feature-engineering questions.",
            ],
            bullets: [
              "One-hot encoding: one 0/1 column per category; safe for nominal data; drop one column or regularise to avoid collinearity; explodes with high-cardinality columns.",
              "Ordinal encoding only for genuinely ordered categories; label-encoding nominal data creates a fake order that linear and distance models believe.",
              "Target encoding replaces a category with its training-fold mean label - powerful for high cardinality, but must be computed inside CV folds to avoid leakage.",
              "Binning with pd.cut (fixed edges) or pd.qcut (equal counts) captures non-linear effects and resists outliers at the cost of within-band detail.",
              "Interaction features: price_per_sqft = price / area; lifetime_revenue = tenure_months x monthly_charges.",
              "Datetime decomposition: split timestamps into hour, weekday, month - often the entire feature set for demand forecasting.",
              "Count columns with heavy tails benefit from log1p before entering linear or distance-based models.",
            ],
            codeExample: {
              language: "python",
              caption: "Encoding, binning and interaction features in pandas.",
              code: `import pandas as pd
import numpy as np

df = pd.read_csv("churn.csv")

# 1. One-hot encode a nominal column (drop first to avoid collinearity)
dummies = pd.get_dummies(df["contract_type"], drop_first=True)
df = pd.concat([df, dummies], axis=1)

# 2. Ordinal encode a genuinely ordered column
df["satisfaction_code"] = df["satisfaction"].map(
    {"poor": 0, "average": 1, "good": 2, "excellent": 3})

# 3. Bin tenure into ordered bands
df["tenure_band"] = pd.cut(df["tenure_months"],
                           bins=[0, 12, 36, 60, 999],
                           labels=["0-1y", "1-3y", "3-5y", "5y+"])

# 4. Interaction and domain features
df["price_per_service"] = df["monthly_charges"] / df["n_services"]
df["lifetime_revenue"] = df["tenure_months"] * df["monthly_charges"]

# 5. Log-transform a heavy-tailed count
df["log_complaints"] = np.log1p(df["complaints_count"])`,
            },
            diagram: {
              kind: "pipeline",
              title: "From raw columns to a model-ready feature matrix",
              caption:
                "Every stage is a decision an examiner can ask you to justify.",
              stages: [
                { label: "Audit scales", note: "nominal, ordinal, ratio - from EDA" },
                { label: "Encode categoricals", note: "one-hot / ordinal / target" },
                { label: "Shape numerics", note: "log, bins, ratios" },
                { label: "Build interactions", note: "products and domain ratios" },
                { label: "Assemble matrix", note: "X with n rows x m features" },
              ],
            },
            callout: {
              type: "warning",
              title: "Target encoding is a leakage magnet",
              body: "Target encoding computes each category's mean label from the data - so computing it on the full dataset copies the answer into the feature. Always compute target encodings inside the training fold (or with smoothed, out-of-fold schemes). If an exam answer mentions target encoding, adding 'computed within CV folds to prevent target leakage' is the sentence that separates a good answer from a great one.",
            },
            keyTerms: [
              { term: "One-hot encoding", definition: "Representing a nominal category as a set of 0/1 indicator columns, one per category." },
              { term: "Binning", definition: "Grouping a continuous variable into ordered bands, either with fixed edges (pd.cut) or equal-frequency edges (pd.qcut)." },
              { term: "Interaction feature", definition: "A feature built from a combination of others, such as a product or ratio, to express a joint effect." },
              { term: "Target encoding", definition: "Replacing a category by the mean of the target over its training rows; must be computed out-of-fold." },
              { term: "High cardinality", definition: "A categorical column with very many distinct values, such as PIN code, where one-hot encoding explodes in width." },
            ],
            examQuestions: [
              {
                q: "Explain one-hot, ordinal and target encoding of categorical variables. Which is appropriate for a nominal column with 5,000 distinct values, and what leakage risk does target encoding carry?",
                marks: 7,
                outline: [
                  "Define one-hot encoding with a small worked example (3 cities -> 3 indicator columns).",
                  "Note the width explosion for high cardinality and the drop-first fix for collinearity.",
                  "Define ordinal encoding and state it is legal only for ordered categories.",
                  "Show the failure of label-encoding nominal data: fake order believed by linear/kNN models.",
                  "Define target encoding: category replaced by training-fold mean of the target.",
                  "Explain the leakage: computing it on all data copies label information into features; fix with out-of-fold computation.",
                  "Recommend for 5,000 values: frequency/target encoding (out-of-fold) or hashing, not plain one-hot.",
                ],
              },
              {
                q: "Why does binning a continuous feature help a linear model, and what information does it lose?",
                marks: 3,
              },
              {
                q: "Give two examples of interaction features useful for a churn model and state what each captures.",
                marks: 2,
              },
            ],
          },
          {
            number: "1.6",
            title: "Train/validation/test splits, cross-validation and data leakage",
            body: [
              "The evaluation contract is simple: a model must be judged on data it has never seen. The holdout method partitions the dataset into a training set (fit the model), a validation set (tune hyperparameters and pick the model) and a test set (the final, untouched measurement). Common splits are 70/15/15 or 80/20 with a separate final test. Stratified sampling preserves class proportions in each part - with a 26 percent churn rate, random splits can wobble that rate by several points, while stratification holds it fixed. Once the test set has been used to make any decision, it is no longer a test set.",
              "A single split wastes data and gives a noisy estimate, so k-fold cross-validation divides the training data into k = 5 folds: train on four folds, validate on the fifth, rotate five times, and average. Worked numbers: fold accuracies 0.84, 0.81, 0.86, 0.83, 0.85 give mean 0.838 with standard deviation 0.017 - and that standard deviation is information, since a model whose scores jump between folds is unstable. Use stratified k-fold for classification with imbalance, leave-one-out only for tiny datasets, and for time series a forward-chaining split (train on months 1-12, validate on 13-14, roll forward) because random folds would train on the future to predict the past.",
              "Data leakage is any path by which information from the evaluation data influences training. The three classic channels: preprocessing leakage - fitting a scaler, imputer or feature selector on the full dataset before splitting; target leakage - a feature that contains the label in disguise, such as account_closed_date when predicting churn, or total_refunded when predicting complaints; and identity leakage - duplicate or grouped rows appearing in both train and test, e.g. the same patient contributing multiple records. Leakage symptoms are characteristic: validation accuracy near 0.97 while production performance is 0.80, or a feature that alone scores impossibly well.",
              "The defence is structural, not vigilant: put every preprocessing step inside the pipeline so each CV fold refits its own scaler and imputer on its training part. In sklearn, Pipeline(steps=[('scale', StandardScaler()), ('clf', LogisticRegression())]) passed to cross_val_score does this automatically - the fit/transform boundary enforces the information boundary. Add a duplicate check (df.duplicated()), a group-aware splitter (GroupKFold) when rows cluster by entity, and a leakage audit that asks of every feature: would this column still exist at prediction time, with the same values, in production?",
            ],
            bullets: [
              "Holdout roles: train (fit), validation (tune and select), test (final untouched measurement).",
              "Typical splits: 70/15/15 or 80/20; stratify to preserve class proportions such as a 26 percent churn rate.",
              "5-fold CV: five rotates of train-on-four; worked mean 0.838 with standard deviation 0.017 across folds 0.84, 0.81, 0.86, 0.83, 0.85.",
              "Stratified k-fold for imbalanced classification; forward-chaining splits for time series; GroupKFold when rows cluster by entity.",
              "Preprocessing leakage: fit scalers, imputers and selectors on training folds only.",
              "Target leakage: drop features that would not exist at prediction time with the same values (account_closed_date for churn).",
              "sklearn Pipeline makes the defence automatic: cross_val_score refits preprocessing inside every fold.",
            ],
            table: {
              caption: "One 5-fold cross-validation run, fold by fold.",
              headers: ["Fold", "Rows trained", "Rows validated", "Accuracy"],
              rows: [
                ["1", "800", "200", "0.84"],
                ["2", "800", "200", "0.81"],
                ["3", "800", "200", "0.86"],
                ["4", "800", "200", "0.83"],
                ["5", "800", "200", "0.85"],
                ["Summary", "4000 (with reuse)", "1000 (with reuse)", "mean 0.838, std 0.017"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Is information leaking from evaluation into training?",
              caption:
                "Three audit questions that catch almost every leak before the metrics lie to you.",
              start: "Audit the pipeline for leakage",
              branches: [
                { label: "Scaler fit on train fold only", outcome: "Clean: test statistics never touch training", good: true },
                { label: "Scaler fit on the full dataset", outcome: "Leak: optimistic CV scores, production disappointment", good: false },
                { label: "Feature exists only after the outcome", outcome: "Target leak: e.g. account_closed_date predicting churn", good: false },
                { label: "Same entity in train and test", outcome: "Identity leak: use GroupKFold for grouped records", good: false },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "A 7-mark leakage question wants three things: define leakage, give two concrete channels with named examples (preprocessing before split; target-disguised feature), and give the structural fix (preprocessing inside the CV pipeline). Adding one symptom - 'validation 0.97 but production 0.80' - signals real understanding and is worth the last mark.",
            },
            keyTerms: [
              { term: "Holdout split", definition: "Partitioning data into training, validation and test parts so the final measurement uses unseen rows." },
              { term: "k-fold cross-validation", definition: "Rotating k held-out folds through the training data and averaging the k scores for a stable estimate." },
              { term: "Stratified sampling", definition: "Splitting that preserves class proportions in every fold or split." },
              { term: "Data leakage", definition: "Any flow of evaluation-set information into training - preprocessing fitted on all data, target-disguised features, or duplicated entities across splits." },
              { term: "Forward chaining", definition: "Time-series validation that trains on the past and validates on the next window, rolling forward - never random folds." },
            ],
            examQuestions: [
              {
                q: "Explain k-fold cross-validation with a worked 5-fold example, and explain why random k-fold is inappropriate for time series data.",
                marks: 7,
                outline: [
                  "Define k-fold CV: split training data into k folds, hold out one, train on the rest, rotate k times.",
                  "Present worked folds 0.84, 0.81, 0.86, 0.83, 0.85 with mean 0.838 and standard deviation 0.017.",
                  "Interpret the standard deviation as a stability signal across folds.",
                  "Contrast with a single holdout: CV reuses all rows for validation and lowers estimate variance.",
                  "Time series argument: random folds place future rows in training, so the model learns from what it must predict.",
                  "Give the fix: forward chaining - train months 1-12, validate 13-14, roll the window forward.",
                  "Mention stratified k-fold for imbalanced classes as the classification companion.",
                ],
              },
              {
                q: "Define data leakage and give one example of preprocessing leakage.",
                marks: 2,
              },
              {
                q: "A feature named days_since_account_closed is highly predictive for a churn model. Should you use it? Justify.",
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
      title: "Supervised Learning for Prediction",
      summary:
        "Learning from labelled data: linear and logistic regression, decision trees grown by information gain, the bias-variance tradeoff, bagging with random forests, boosting with XGBoost, the classic trio of kNN, Naive Bayes and SVM, and the metric toolkit - confusion matrix, precision, recall, F1, ROC-AUC, RMSE - together with class-imbalance handling.",
      chapter: {
        number: "02",
        title: "Supervised Learning",
        intro:
          "Unit II is the algorithmic core of the paper. Each section pairs an algorithm with a worked computation: a least-squares fit with R^2, a sigmoid probability with log-loss, an entropy split whose information gain is computed to three decimals, a Naive Bayes posterior updated word by word, and a full confusion matrix scored into accuracy, precision, recall and F1. The unit closes with the imbalance tactics that decide whether those metrics mean anything.",
        inOneBreath:
          "Linear regression fits y = b0 + b1x by minimizing squared residuals; R^2 = 1 - SSres/SStot measures explained variance. Logistic regression passes a linear score through the sigmoid 1/(1 + e^(-z)) and trains by log-loss. Decision trees split where information gain is maximal: entropy of a 6/8 node is 0.985, a good split can harvest gain of 0.52. Bagging averages bootstrap trees to cut variance; random forests add random feature subsets; boosting fits residuals sequentially with a shrinkage learning rate, and XGBoost adds regularization and second-order updates. kNN votes among k neighbours, Naive Bayes multiplies conditionally independent likelihoods, SVM maximizes the margin. Score everything with a confusion matrix - precision, recall, F1, ROC-AUC - and under imbalance, accuracy lies: use class weights, SMOTE or threshold moves.",
        sections: [
          {
            number: "2.1",
            title: "Linear regression: least squares and R^2",
            body: [
              "Linear regression predicts a continuous target as a weighted sum of features: y = b0 + b1 x1 + ... + bn xn. Each coefficient has a direct reading: in a house-price model, b1 = 4.2 (thousand rupees per square foot) means each extra square foot adds 4,200 rupees to the predicted price, holding other features fixed. The intercept b0 is the prediction when all features are zero - often meaningless on its own but necessary for calibration. Multiple linear regression is the same idea in higher dimensions, and the fitted plane is the best linear approximation the data allows.",
              "Least squares chooses the coefficients that minimize the sum of squared residuals, where a residual is the vertical gap between an observed y and the predicted value. For one feature the solution is closed-form: b1 = Sxy / Sxx and b0 = mean(y) - b1 mean(x), where Sxy and Sxx are the summed cross-deviations. Worked micro-example on three points (1,2), (2,4), (3,5): mean x = 2, mean y = 3.667; Sxy = (1-2)(2-3.667) + 0 + (3-2)(5-3.667) = 1.667 + 1.333 = 3.0; Sxx = 2. So b1 = 1.5, b0 = 3.667 - 3 = 0.667, giving y = 0.667 + 1.5x.",
              "Quality is scored with R^2 and RMSE. R^2 = 1 - SSres / SStot, the fraction of target variance the model explains. Continuing the example: predictions are 2.167, 3.667, 5.167; residuals are -0.167, 0.333, -0.167; SSres = 0.0278 + 0.1111 + 0.0278 = 0.1667. SStot, the variance around the mean, is 2.778 + 0.111 + 1.778 = 4.667. So R^2 = 1 - 0.1667/4.667 = 0.964 - the line explains 96.4 percent of the variance. RMSE = sqrt(SSres / n) = sqrt(0.0556) = 0.236, expressed in the same units as y, which is why managers can read it and R-squares they cannot.",
              "The model rests on four assumptions an examiner expects you to list: linearity of the relationship, constant error variance (homoscedasticity), independence of errors, and approximately normal residuals for inference. Each is checked on the residuals, not the data: a funnel-shaped residual plot violates homoscedasticity and invites a log transform of the target; a curved pattern suggests missing non-linearity, fixable by adding polynomial or interaction terms. High-leverage outliers drag the least-squares line disproportionately because their residuals are squared, which is exactly why robust regression or tree models appear in Section 2.4 as alternatives.",
            ],
            bullets: [
              "Model: y = b0 + b1 x1 + ... + bn xn; coefficients read as per-unit effects holding others fixed.",
              "Least squares minimizes the sum of squared residuals; closed form b1 = Sxy / Sxx, b0 = mean(y) - b1 mean(x).",
              "Worked fit on (1,2), (2,4), (3,5): b1 = 1.5, b0 = 0.667, line y = 0.667 + 1.5x.",
              "R^2 = 1 - SSres / SStot = 1 - 0.1667 / 4.667 = 0.964 - share of variance explained.",
              "RMSE = sqrt(mean squared residuals) = 0.236 here; same units as the target, so it is directly interpretable.",
              "Assumptions: linearity, homoscedasticity, independent errors, normal residuals - all diagnosed on residual plots.",
              "Squared residuals make least squares outlier-sensitive; a single high-leverage point can rotate the whole line.",
            ],
            codeExample: {
              language: "python",
              caption: "Reproducing the worked three-point least-squares fit.",
              code: `import numpy as np

x = np.array([1, 2, 3])
y = np.array([2, 4, 5])

# Closed-form least squares for one feature
b1 = ((x - x.mean()) * (y - y.mean())).sum() / ((x - x.mean()) ** 2).sum()
b0 = y.mean() - b1 * x.mean()
print("slope:", b1, "intercept:", round(b0, 3))   # 1.5, 0.667

pred = b0 + b1 * x
ss_res = ((y - pred) ** 2).sum()
ss_tot = ((y - y.mean()) ** 2).sum()
r2 = 1 - ss_res / ss_tot
print("R^2:", round(r2, 3))                       # 0.964
print("RMSE:", round(np.sqrt(ss_res / len(y)), 3))  # 0.236`,
            },
            diagram: {
              kind: "pipeline",
              title: "How least squares finds the line",
              caption:
                "The same five steps appear in every regression exam answer.",
              stages: [
                { label: "Plot the scatter", note: "eyeball linearity first" },
                { label: "Propose a line", note: "any starting b0, b1" },
                { label: "Measure residuals", note: "vertical gaps y - y_pred" },
                { label: "Square and sum", note: "one penalty number" },
                { label: "Adjust to minimize", note: "closed form or gradient descent" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Whenever a regression question supplies a small table of points, compute the fit rather than describing it: b1 = Sxy/Sxx, b0, one R^2. Three lines of arithmetic with correct numbers outscore a page of prose, and examiners set tables small (3-5 points) precisely so the arithmetic is doable in the hall.",
            },
            keyTerms: [
              { term: "Residual", definition: "The signed gap between an observed target value and the value the model predicts for it." },
              { term: "Least squares", definition: "The criterion of choosing coefficients to minimize the sum of squared residuals." },
              { term: "R^2", definition: "The fraction of target variance explained by the model: 1 - SSres / SStot; 1.0 is a perfect fit, 0 is no better than predicting the mean." },
              { term: "RMSE", definition: "Root mean squared error: sqrt of the mean squared residual, in the same units as the target." },
              { term: "Homoscedasticity", definition: "The assumption that residual variance is constant across the range of the predictors." },
            ],
            examQuestions: [
              {
                q: "Fit a least-squares line to the points (1,2), (2,4), (3,5) and compute its R^2. State the least-squares criterion and two assumptions of linear regression.",
                marks: 7,
                outline: [
                  "State the criterion: minimize the sum of squared residuals.",
                  "Compute means: mean x = 2, mean y = 3.667.",
                  "Compute Sxy = 3.0 and Sxx = 2, hence b1 = 1.5.",
                  "Compute b0 = 3.667 - 1.5 x 2 = 0.667; line y = 0.667 + 1.5x.",
                  "Predictions 2.167, 3.667, 5.167; SSres = 0.1667.",
                  "SStot = 4.667, so R^2 = 1 - 0.1667/4.667 = 0.964.",
                  "Assumptions: linearity and constant error variance (plus independence and normal residuals for full marks).",
                ],
              },
              {
                q: "Interpret b1 = -0.35 in a regression predicting monthly churn probability from tenure in months.",
                marks: 2,
              },
              {
                q: "Why can a single outlier rotate a least-squares line, and which models are immune?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.2",
            title: "Logistic regression: the sigmoid and log-loss",
            body: [
              "Logistic regression is the workhorse of binary classification: it outputs a probability of class 1 rather than a raw number. A linear score z = b0 + b1 x1 + ... + bn xn is passed through the sigmoid sigma(z) = 1 / (1 + e^(-z)), which squashes any real number into (0, 1). Worked value: z = 1.1 gives e^(-1.1) = 0.333, so sigma = 1 / 1.333 = 0.75 - the model claims a 75 percent chance of class 1. The decision rule defaults to threshold 0.5, and moving the threshold trades precision against recall exactly as Section 2.7 formalises.",
              "The link between the score and the probability is logarithmic: log(p / (1 - p)) = z, so the model is linear in log-odds. A coefficient b1 = 0.7 means each unit increase in x multiplies the odds of class 1 by e^0.7 = 2.01. This reading makes logistic regression the interpretable baseline for credit scoring and medical screening: 'every extra late payment doubles the odds of default' is a sentence a risk committee can act on, whereas a black-box score would need a separate explanation engine.",
              "Training minimizes the log-loss (binary cross-entropy): L = -[y log(p) + (1 - y) log(1 - p)] averaged over the data. The numbers show why it is the right loss: for a true y = 1, a confident correct p = 0.9 costs -log(0.9) = 0.105, while a confident wrong p = 0.1 costs -log(0.1) = 2.303 - twenty-two times worse. Squared error would plateau here because the sigmoid flattens at its tails, giving tiny gradients exactly when the model is most wrong; log-loss keeps gradients alive and makes the optimization surface convex, so a single well-behaved minimum exists.",
              "Thresholds, weights and extension complete the picture. Moving the decision threshold from 0.5 to 0.3 raises recall (more positives flagged) and lowers precision - a fraud team chooses 0.3, a spam filter chooses 0.7. class_weight='balanced' reweights the loss so minority-class errors cost more, the principled answer to imbalance. For multiple classes, multinomial logistic regression replaces the sigmoid with the softmax over per-class scores. Regularization (L1 or L2 on the coefficients) shrinks weights to control variance, and L1 doubles as feature selection by zeroing weak features outright.",
            ],
            bullets: [
              "Sigmoid: sigma(z) = 1 / (1 + e^(-z)); worked z = 1.1 -> probability 0.75.",
              "Linear in log-odds: log(p / (1 - p)) = z; coefficient b1 = 0.7 multiplies odds by e^0.7 = 2.01 per unit of x.",
              "Log-loss: L = -[y log p + (1 - y) log(1 - p)]; y = 1 with p = 0.9 costs 0.105, with p = 0.1 costs 2.303.",
              "Why not squared error: sigmoid tails flatten, gradients vanish, surface becomes non-convex; log-loss is convex with healthy gradients.",
              "Threshold tuning: lower threshold -> higher recall, lower precision; choose by business cost, not by default 0.5.",
              "class_weight='balanced' reweights minority errors - the principled imbalance response.",
              "Multiclass via softmax; L1 regularization shrinks weak coefficients to zero (embedded feature selection).",
            ],
            table: {
              caption: "Log-loss for a true label y = 1 at several predicted probabilities.",
              headers: ["Predicted p", "-log(p) loss", "Reading"],
              rows: [
                ["0.99", "0.010", "confident and correct - almost free"],
                ["0.90", "0.105", "good confident prediction"],
                ["0.50", "0.693", "maximum uncertainty"],
                ["0.10", "2.303", "confident and wrong - heavily punished"],
                ["0.01", "4.605", "catastrophic miss"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "From features to a class decision",
              caption:
                "The full path of one row through logistic regression.",
              steps: [
                { label: "Features x", note: "scaled for regularization fairness" },
                { label: "Linear score z", note: "z = b0 + b1 x1 + ... + bn xn" },
                { label: "Sigmoid", note: "p = 1 / (1 + e^(-z))" },
                { label: "Compare to threshold", note: "default 0.5, business-tunable" },
                { label: "Class label", note: "p >= threshold -> class 1" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "The three most-asked logistic regression items: write the sigmoid, compute sigma(1.1) = 0.75 style arithmetic, and explain why log-loss beats squared error. Practise the sigma arithmetic until it takes thirty seconds - e^(-1.1) = 0.333, e^(-2) = 0.135, e^(-0.5) = 0.607 cover most paper values.",
            },
            keyTerms: [
              { term: "Sigmoid function", definition: "sigma(z) = 1 / (1 + e^(-z)); maps any real score into the open interval (0, 1) as a probability." },
              { term: "Log-odds", definition: "log(p / (1 - p)); logistic regression is linear in this quantity, so coefficients read as odds multipliers." },
              { term: "Log-loss", definition: "Binary cross-entropy: -[y log p + (1 - y) log(1 - p)]; the convex training loss for probabilistic classifiers." },
              { term: "Decision threshold", definition: "The probability cut-off that converts a predicted probability into a class label; moving it trades precision for recall." },
              { term: "Softmax", definition: "The multi-class generalisation of the sigmoid that converts per-class scores into a probability distribution." },
            ],
            examQuestions: [
              {
                q: "Explain logistic regression: define the sigmoid, compute the output for z = 1.1, derive the log-loss, and explain why squared error is not used for training.",
                marks: 7,
                outline: [
                  "Define the model: linear score z passed through the sigmoid to yield P(y = 1).",
                  "Write sigma(z) = 1 / (1 + e^(-z)).",
                  "Compute sigma(1.1): e^(-1.1) = 0.333, so p = 1/1.333 = 0.75.",
                  "State log-odds linearity: log(p/(1-p)) = z, and interpret one coefficient as an odds multiplier.",
                  "Write log-loss L = -[y log p + (1 - y) log(1 - p)] with the worked pair 0.105 vs 2.303.",
                  "Explain the squared-error failure: vanishing gradients in the sigmoid tails, non-convex surface.",
                  "Close with threshold tuning and class weights as the deployment knobs.",
                ],
              },
              {
                q: "A logistic model outputs p = 0.62. What class is predicted at the default threshold, and what changes if the threshold moves to 0.7?",
                marks: 2,
              },
              {
                q: "Interpret the coefficient b1 = 0.7 on the feature 'number of late payments' in a default-prediction model.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.3",
            title: "Decision trees: entropy, information gain and a worked split",
            body: [
              "A decision tree classifies by asking a sequence of yes/no questions, each one splitting the data into purer subsets. Training is greedy: at every node, try candidate splits, score each by how much it reduces impurity, and take the best. The two standard impurity measures are entropy, H = -sum over classes of p log2(p), and the Gini index, 1 - sum of p^2; both are zero for a pure node and maximal for an even split. The reduction achieved by a split is the information gain: Gain = H(parent) - weighted average of child entropies, weighted by the fraction of rows each child receives.",
              "Worked example - 14 emails, 6 spam and 8 ham. Parent entropy: H = -(6/14) log2(6/14) - (8/14) log2(8/14). Now (6/14) log2(6/14) = 0.4286 x 1.2224 = 0.524 and (8/14) log2(8/14) = 0.5714 x 0.8074 = 0.461, so H = 0.985. Candidate split A - 'subject contains FREE': the yes branch holds 8 emails (6 spam, 2 ham) with entropy -(0.75 log2 0.75 + 0.25 log2 0.25) = 0.311 + 0.500 = 0.811; the no branch holds 6 emails, all ham, entropy 0. Weighted child entropy = (8/14) x 0.811 + (6/14) x 0 = 0.464. Gain = 0.985 - 0.464 = 0.521.",
              "Contrast with candidate split B - 'body contains a link': yes branch 10 emails (5 spam, 5 ham), entropy 1.0; no branch 4 emails (1 spam, 3 ham), entropy - (0.25 log2 0.25 + 0.75 log2 0.75) = 0.811. Weighted entropy = (10/14)(1.0) + (4/14)(0.811) = 0.714 + 0.232 = 0.946, so gain = 0.985 - 0.946 = 0.039. The FREE split wins decisively: 0.521 versus 0.039. This is the entire exam skill - compute parent entropy, compute both children, weight, subtract, compare - and it generalises to Gini by swapping the impurity formula.",
              "Growing must be stopped or the tree will memorise the training set - a fully grown tree reaches entropy 0 on every leaf and overfits perfectly. Standard stops are a maximum depth, a minimum number of samples per leaf, or a minimum impurity decrease; alternatively grow fully and prune back (cost-complexity pruning with the ccp_alpha parameter). Trees need no scaling, handle mixed types, and expose their logic as readable rules - but a single deep tree has the worst variance in the unit, which is the exact motivation for averaging many of them in Sections 2.4 and 2.5.",
            ],
            bullets: [
              "Entropy H = -sum p log2(p): 0 for a pure node, 1.0 for a 50/50 binary node.",
              "Gini index 1 - sum p^2 is the cheaper impurity alternative; sklearn's default criterion.",
              "Information gain = parent entropy minus the child entropies weighted by branch row fractions.",
              "Worked parent: 14 emails, 6 spam / 8 ham -> H = 0.524 + 0.461 = 0.985.",
              "Worked split 'contains FREE': children 6 spam/2 ham (H = 0.811) and 0 spam/6 ham (H = 0); gain = 0.985 - 0.464 = 0.521.",
              "Competing split 'contains link': gain only 0.039 - same data, wrong question.",
              "Overfitting control: max_depth, min_samples_leaf, or grow-then-prune with ccp_alpha.",
            ],
            table: {
              caption: "Two candidate splits scored on the 14-email node.",
              headers: ["Split", "Yes branch", "No branch", "Weighted entropy", "Gain"],
              rows: [
                ["contains FREE", "8 rows: 6 spam, 2 ham (H = 0.811)", "6 rows: all ham (H = 0)", "0.464", "0.521"],
                ["contains link", "10 rows: 5 spam, 5 ham (H = 1.0)", "4 rows: 1 spam, 3 ham (H = 0.811)", "0.946", "0.039"],
                ["Parent node", "14 rows: 6 spam, 8 ham", "H = 0.985", "-", "-"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "The winning split at the root",
              caption:
                "One question nearly halves the entropy - and the no branch is already pure.",
              start: "Subject line contains 'FREE'? (14 rows: 6 spam, 8 ham, H = 0.985)",
              branches: [
                { label: "Yes - 8 rows", outcome: "6 spam, 2 ham: entropy 0.811, still mixed", good: true },
                { label: "No - 6 rows", outcome: "All ham: entropy 0, pure leaf", good: true },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Show the entropy arithmetic line by line: parent, each child, the weighted average, then the subtraction. Examiners allocate method marks per step, and a rounding slip hurts far less when every step is visible than a bare final gain. Memorise log2(0.25) = 2, log2(0.5) = 1, log2(0.75) = 0.415 and log2(3/7-style fractions) via log2 p = log p / log 2.",
            },
            keyTerms: [
              { term: "Entropy", definition: "Impurity H = -sum p log2(p); zero for a pure node, maximal when classes are evenly mixed." },
              { term: "Information gain", definition: "The parent entropy minus the row-weighted average of child entropies - the score a split must maximise." },
              { term: "Gini index", definition: "Impurity 1 - sum p^2; computationally cheaper than entropy and sklearn's default criterion." },
              { term: "Greedy splitting", definition: "Choosing the locally best split at each node without lookahead; fast, but not globally optimal." },
              { term: "Pruning", definition: "Removing weak subtrees after growth (cost-complexity pruning) to trade training accuracy for generalisation." },
            ],
            examQuestions: [
              {
                q: "For a node of 14 rows (6 spam, 8 ham), compute the entropy, evaluate the split 'subject contains FREE' (yes: 6 spam, 2 ham; no: 0 spam, 6 ham) by information gain, and compare it against a poor split of your choice.",
                marks: 7,
                outline: [
                  "Parent entropy: -(6/14) log2(6/14) - (8/14) log2(8/14) = 0.524 + 0.461 = 0.985.",
                  "Yes-branch entropy: -(0.75 log2 0.75 + 0.25 log2 0.25) = 0.311 + 0.5 = 0.811.",
                  "No-branch entropy: pure node, 0.",
                  "Weighted child entropy: (8/14)(0.811) + (6/14)(0) = 0.464.",
                  "Gain = 0.985 - 0.464 = 0.521.",
                  "Contrast split: e.g. 'contains link' with children 50/50 and 1/3 - gain about 0.039.",
                  "Conclusion: the tree picks the maximum-gain split; mention Gini as the alternative impurity.",
                ],
              },
              {
                q: "State the entropy of a node with 5 positive and 5 negative rows, and of a node with 10 positive and 0 negative rows.",
                marks: 2,
              },
              {
                q: "Why does a fully grown decision tree overfit, and name two stopping controls.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.4",
            title: "Bias, variance, bagging and random forests",
            body: [
              "Every model's error decomposes into bias, variance and irreducible noise. Bias is systematic error from wrong assumptions: a depth-1 tree (a stump) cannot express any interaction, so it underfits with high bias. Variance is sensitivity to the particular training sample: a depth-20 tree reshapes itself around every quirk, so it overfits with high variance. The craft of supervised learning is trading these against each other - more depth lowers bias and raises variance, more data lowers variance, and ensembles attack variance directly by averaging.",
              "Bagging (bootstrap aggregating) is the averaging recipe. Draw B bootstrap samples of the training set - sampling n rows with replacement, so each sample keeps about 63.2 percent of unique rows and repeats the rest - train one deep tree per sample, and classify by majority vote (or average for regression). Because the B trees make roughly independent errors, their average has variance about 1/B of a single tree's while bias stays put. The OOB (out-of-bag) score is a free validation: each tree never saw about 36.8 percent of rows, so every row collects predictions only from the trees that excluded it.",
              "Random forests sharpen bagging with one twist: at every split, each tree may consider only a random subset of m features - m = sqrt(p) for classification and about p/3 for regression. Without this, a dominant feature would head every tree's root and the B trees would be near-copies, averaging away nothing. The forced randomness decorrelates the trees, which is exactly the condition the variance-reduction arithmetic needs. A forest of 500 trees on 20 features therefore considers about 4 random features per split - and routinely beats a single tuned tree by 5-10 points of accuracy on tabular data.",
              "Forests shift, not remove, the tuning burden. More trees reduce variance monotonically but cost training time - 100 to 500 is the usual range, and accuracy plateaus. Overfitting controls move to the tree shape: max_depth, min_samples_leaf, and max_features. The OOB score substitutes for a validation split, and permutation feature importance (drop a column's values randomly, measure the accuracy fall) gives model-based interpretability. Forests inherit the tree virtues - no scaling, mixed types, robust to outliers - and the tree vice of being less interpretable than a single small tree.",
            ],
            bullets: [
              "Error decomposition: bias (systematic underfit), variance (sample sensitivity), irreducible noise.",
              "Deep tree: low bias, high variance. Stump: high bias, low variance. Depth is the primary bias-variance dial.",
              "Bagging: B bootstrap samples (n rows with replacement, about 63.2 percent unique), majority vote across trees.",
              "Averaging B independent error sources cuts variance roughly 1/B while leaving bias unchanged.",
              "Random forest twist: m = sqrt(p) candidate features per split decorrelates the trees - the fix bagging needs.",
              "OOB score: each row is validated only by the trees that did not sample it - a free cross-validation.",
              "Permutation importance measures each feature by the accuracy drop when its values are shuffled.",
            ],
            codeExample: {
              language: "python",
              caption: "Training a random forest with an out-of-bag score.",
              code: `from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, stratify=y, random_state=42)

rf = RandomForestClassifier(
    n_estimators=500,        # more trees -> less variance, plateau after ~200
    max_features="sqrt",     # m = sqrt(p) candidates per split
    max_depth=12,            # keep trees deep but bounded
    oob_score=True,          # free validation from unsampled rows
    random_state=42)

rf.fit(X_train, y_train)
print("OOB accuracy:", round(rf.oob_score_, 3))
print("Test accuracy:", round(rf.score(X_test, y_test), 3))

# Permutation-style importance from the forest itself
for name, imp in sorted(zip(X.columns, rf.feature_importances_),
                        key=lambda t: -t[1])[:3]:
    print(name, round(imp, 3))`,
            },
            diagram: {
              kind: "compare",
              title: "One deep tree vs a random forest of 500",
              caption:
                "The forest trades a little interpretability for a large variance reduction.",
              left: {
                heading: "Single deep tree",
                items: [
                  "High variance: reshapes around every training quirk",
                  "Fully interpretable as printed rules",
                  "No averaging - one bad split propagates",
                  "Unstable: new data can rebuild it completely",
                ],
              },
              right: {
                heading: "Random forest",
                items: [
                  "Variance cut roughly 1/B by averaging 500 trees",
                  "Bootstrap + random feature subsets decorrelate trees",
                  "OOB score gives validation without a held-out set",
                  "Permutation importance restores some interpretability",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "The classic 3-mark question is 'why do random forests add random feature subsets when bagging already samples rows?' Answer: without it, a dominant feature heads every tree and the trees stay correlated, so averaging removes almost no variance; restricting each split to about sqrt(p) features decorrelates the trees, which is the condition under which averaging actually pays.",
            },
            keyTerms: [
              { term: "Bagging", definition: "Training many models on bootstrap resamples and averaging or voting over their predictions." },
              { term: "Bootstrap sample", definition: "n rows drawn with replacement; about 63.2 percent of unique rows appear, the rest are out-of-bag." },
              { term: "Random forest", definition: "Bagged deep trees that also consider a random sqrt(p) subset of features at each split." },
              { term: "OOB score", definition: "Accuracy estimated from out-of-bag predictions - each row scored only by trees that never trained on it." },
              { term: "Permutation importance", definition: "A feature's importance measured as the accuracy drop caused by randomly shuffling its values." },
            ],
            examQuestions: [
              {
                q: "Explain the bias-variance tradeoff and show how bagging and random forests reduce variance. Include the role of bootstrap sampling and random feature subsets.",
                marks: 7,
                outline: [
                  "Define bias and variance with the stump vs deep-tree contrast.",
                  "State the decomposition: expected error = bias^2 + variance + noise.",
                  "Describe bootstrap sampling: n rows with replacement, about 63.2 percent unique.",
                  "Explain vote/average aggregation and the roughly 1/B variance cut for independent errors.",
                  "Identify the flaw: correlated trees from a dominant feature limit the gain.",
                  "Give the random-forest fix: m = sqrt(p) candidate features per split decorrelates trees.",
                  "Mention OOB scoring as validation without a held-out fold.",
                ],
              },
              {
                q: "What fraction of unique rows does a bootstrap sample of 1,000 rows typically contain?",
                marks: 2,
              },
              {
                q: "For 36 features, how many candidate features does each random-forest split consider in classification?",
                marks: 2,
              },
            ],
          },
          {
            number: "2.5",
            title: "Gradient boosting and XGBoost",
            body: [
              "Boosting builds the ensemble sequentially instead of in parallel. Each new tree is trained to fix what the current ensemble still gets wrong: for squared-error regression, that literally means fitting the residuals. The update is additive with a shrinkage factor: F_m(x) = F_(m-1)(x) + learning_rate x h_m(x), where h_m is the new small tree. The general 'gradient' boosting view is that residuals are the negative gradient of the loss, so the procedure is gradient descent in function space - the same three ingredients (gradient, step size, additive update) as ordinary gradient descent, with a tree standing in for the step direction.",
              "A worked micro-example makes the mechanics tangible. House prices with a mean of 50 (lakh): F0 = 50 everywhere. One unusually large home sold at 70 leaves a residual of +20, so tree 1 learns 'large homes: +20'. With learning rate 0.1, the ensemble moves only to F1 = 50 + 0.1 x 20 = 51 for that home. The next tree fits the still-remaining residual of 18, the ensemble creeps to 51.8, and so on for M rounds. The small learning rate is deliberate: each tree corrects only a fraction of the remaining error, which averages out noise instead of chasing it - boosting's variance control.",
              "XGBoost industrialises this recipe. It uses second-order (Newton) updates, fitting trees to gradient and Hessian statistics so each step is better conditioned than plain first-order boosting. It regularises: L2 penalties on leaf weights and a gamma cost per leaf shrink predictions toward safer values. It adds column and row subsampling (borrowed from random forests), finds split points with a weighted quantile sketch, handles missing values by learning a default branch direction, and parallelises split finding across features. These are exactly the details an examiner probes when the question says 'explain XGBoost improvements over gradient boosting'.",
              "Practical training discipline: keep trees shallow (depth 3-6) since boosting wants many weak learners, not few deep ones; set the learning rate between 0.01 and 0.3 and raise n_estimators to compensate; and use early stopping - train with a validation set and halt when its loss stops improving for, say, 50 rounds. XGBoost dominates tabular competitions and production tabular systems, typically edging random forests by a point or two of accuracy at the price of more tuning; the sequential structure means it cannot be parallelised across trees, only across features within a tree.",
            ],
            bullets: [
              "Sequential ensemble: each tree fits the current residuals (the negative gradient of the loss).",
              "Update rule: F_m = F_(m-1) + learning_rate x h_m; worked: 50 -> 51 -> 51.8 with rate 0.1 on a residual of 20.",
              "Small learning rates average out noise instead of chasing it - boosting's variance control.",
              "XGBoost additions: second-order Newton updates, L2 leaf-weight regularisation, per-leaf gamma cost.",
              "Also: column/row subsampling, weighted quantile sketch for split finding, learned default direction for missing values.",
              "Tuning pattern: shallow trees (depth 3-6), rate 0.01-0.3, early stopping on a validation set.",
              "Contrast with random forest: boosting is sequential and bias-focused, forests are parallel and variance-focused.",
            ],
            codeExample: {
              language: "python",
              caption: "Gradient boosting with early stopping in sklearn.",
              code: `from sklearn.ensemble import GradientBoostingClassifier
from sklearn.model_selection import train_test_split

X_tr, X_val, y_tr, y_val = train_test_split(
    X, y, test_size=0.2, stratify=y, random_state=42)

gb = GradientBoostingClassifier(
    n_estimators=500,       # upper bound; early stopping may halt sooner
    learning_rate=0.05,     # shrinkage: each tree moves a little
    max_depth=3,            # shallow weak learners
    subsample=0.8,          # row subsampling, forest-style
    random_state=42)

gb.fit(X_tr, y_tr)
print("validation accuracy:", round(gb.score(X_val, y_val), 3))

# Stage-wise scores show the plateau where early stopping would trigger
import numpy as np
for m in [50, 100, 200, 300]:
    pred = gb.staged_predict(X_val)
    # consume generators up to stage m in a real loop; shown for brevity
print("staged_predict yields one prediction set per stage")`,
            },
            diagram: {
              kind: "pipeline",
              title: "One boosting round",
              caption:
                "Each round shrinks the remaining error by learning_rate times the new tree.",
              stages: [
                { label: "Current ensemble F", note: "starts as the mean prediction" },
                { label: "Compute residuals", note: "negative gradient of the loss" },
                { label: "Fit shallow tree h", note: "depth 3-6, learns the residuals" },
                { label: "Shrunk update", note: "F <- F + learning_rate x h" },
                { label: "Repeat M rounds", note: "early stopping on validation loss" },
              ],
            },
            callout: {
              type: "warning",
              title: "Boosting overfits when you let it run",
              body: "Unlike a random forest, where more trees are almost always safer, boosting keeps fitting residuals forever and will eventually model noise. Always train with a validation set and early stopping, keep depth at 3-6, and remember the two dials move together: lowering the learning rate demands more estimators.",
            },
            keyTerms: [
              { term: "Boosting", definition: "Building an ensemble sequentially, each model correcting the residual errors of the ensemble so far." },
              { term: "Learning rate (shrinkage)", definition: "The fraction of each new tree's correction that is added to the ensemble; small rates need more trees but generalise better." },
              { term: "Gradient boosting", definition: "Framing boosting as gradient descent in function space: each tree fits the negative gradient of the loss." },
              { term: "XGBoost", definition: "A regularised, second-order, parallelised gradient-boosting implementation with native missing-value handling." },
              { term: "Early stopping", definition: "Halting training when validation loss stops improving, preventing the ensemble from fitting noise." },
            ],
            examQuestions: [
              {
                q: "Explain gradient boosting as residual fitting, illustrate with a worked two-round example, and list four improvements XGBoost adds over plain gradient boosting.",
                marks: 7,
                outline: [
                  "Frame boosting as gradient descent in function space: trees fit negative gradients (residuals).",
                  "Write the update F_m = F_(m-1) + learning_rate x h_m.",
                  "Worked example: F0 = 50, residual +20, rate 0.1 -> F1 = 51; next residual 18 -> F2 = 51.8.",
                  "Explain why the small rate averages noise rather than chasing it.",
                  "XGBoost improvement 1: second-order Newton updates using gradient and Hessian.",
                  "Improvements 2-4: L2/gamma regularisation on leaves, column subsampling, learned missing-value direction.",
                  "Close with the shallow-tree and early-stopping discipline.",
                ],
              },
              {
                q: "Why are boosted trees kept shallow (depth 3-6) while random-forest trees are deep?",
                marks: 3,
              },
              {
                q: "State the difference in how bagging and boosting reduce error (variance vs bias).",
                marks: 2,
              },
            ],
          },
          {
            number: "2.6",
            title: "kNN, Naive Bayes and SVM: three classic classifiers",
            body: [
              "k-nearest neighbours is the laziest learner in machine learning: it stores the training set and, at prediction time, finds the k rows closest to the query under a distance such as Euclidean, and outputs the majority class among them. With k = 1 the decision boundary flexes around every training point (high variance); with large k the vote smooths into nearly region-wide labels (high bias). k = 3, 5 or 7 - odd, to avoid tie votes - is standard. Two requirements follow from the arithmetic: features must be scaled (Section 1.4's income-versus-age domination) and prediction is O(n) distance computations, so kNN is cheap to train and expensive to serve at scale.",
              "Naive Bayes inverts the question with Bayes' theorem: P(spam | words) is proportional to P(spam) times the product of P(word | spam) over the words, with the 'naive' assumption that words are conditionally independent given the class. Worked example: base rates P(spam) = 0.4, P(ham) = 0.6; likelihoods P(FREE | spam) = 0.5, P(FREE | ham) = 0.05. Seeing 'FREE': score spam = 0.4 x 0.5 = 0.20, ham = 0.6 x 0.05 = 0.03; posterior = 0.20 / 0.23 = 0.87. Adding 'meeting' with P(meeting | spam) = 0.1, P(meeting | ham) = 0.4: scores 0.02 vs 0.012, posterior = 0.02 / 0.032 = 0.625 - one legitimate word pulled the probability back down. Laplace (add-one) smoothing replaces any zero count with (count + 1) / (total + vocabulary), so an unseen word cannot zero out the whole product.",
              "Support vector machines find the separating hyperplane with the largest margin - the widest street between the two classes - and classify by which side a point falls on. Only the points touching the margin, the support vectors, define the boundary; everything else could be deleted without moving it. The C parameter prices margin violations: large C squeezes the margin to fit every point (overfit risk), small C accepts a wider margin with some training errors. For data that is not linearly separable, the kernel trick implicitly maps points to a higher-dimensional space where a linear boundary exists - the RBF kernel turns the humble hyperplane into smooth closed curves without ever computing the mapping explicitly.",
              "Choosing among the three is a rule-of-thumb exam favourite. kNN suits small, low-dimensional, locally structured data where no training budget exists but prediction latency does not matter. Naive Bayes is the text baseline: it trains in one pass over word counts, works with tiny datasets, and its independence assumption, though false, is remarkably harmless for classification decisions. SVM is the choice for medium-sized, high-dimensional problems with a clear margin - text included - but scales poorly beyond tens of thousands of rows and needs scaling and C/gamma tuning. All three are the baselines any gradient-boosting model must beat to justify its complexity.",
            ],
            bullets: [
              "kNN: majority vote among the k closest rows; k odd (3, 5, 7); k small = flexible, k large = smooth.",
              "kNN needs feature scaling - unscaled income swamps age in the distance - and costs O(n) per prediction.",
              "Naive Bayes: posterior proportional to prior x product of per-word likelihoods, assuming conditional independence.",
              "Worked spam posterior: 0.4 x 0.5 vs 0.6 x 0.05 gives 0.87; adding 'meeting' drops it to 0.625.",
              "Laplace smoothing: (count + 1) / (total + vocabulary) stops one unseen word from zeroing the product.",
              "SVM: maximum-margin hyperplane defined only by support vectors; C prices violations; RBF kernel for non-linear boundaries.",
              "Selection heuristic: kNN for small local data, Naive Bayes for fast text baselines, SVM for medium high-dimensional margins.",
            ],
            codeExample: {
              language: "python",
              caption: "Manual Naive Bayes posterior - the worked spam example.",
              code: `# Priors and likelihoods
p_spam, p_ham = 0.4, 0.6
p_free = {"spam": 0.5, "ham": 0.05}
p_meet = {"spam": 0.1, "ham": 0.4}

def posterior(words):
    s = p_spam
    h = p_ham
    for w in words:
        s *= {"FREE": p_free, "meeting": p_meet}[w]["spam"]
        h *= {"FREE": p_free, "meeting": p_meet}[w]["ham"]
    return s / (s + h)

print("after FREE:", round(posterior(["FREE"]), 3))          # 0.867
print("after both:", round(posterior(["FREE", "meeting"]), 3))  # 0.625

# Laplace smoothing for a word never seen in spam (count 0 of 10 spam words)
p_word_given_spam = (0 + 1) / (10 + 2)
print("smoothed likelihood:", round(p_word_given_spam, 3))`,
            },
            diagram: {
              kind: "compare",
              title: "kNN vs Naive Bayes - two opposite philosophies",
              caption:
                "One memorises geometry, the other multiplies statistics; SVM adds geometry with margins.",
              left: {
                heading: "kNN (instance-based)",
                items: [
                  "No training: stores every row verbatim",
                  "Predicts by a local majority vote",
                  "Needs scaling; O(n) per prediction",
                  "k controls the bias-variance dial",
                ],
              },
              right: {
                heading: "Naive Bayes (probabilistic)",
                items: [
                  "One-pass training: counts into probabilities",
                  "Predicts by Bayes' theorem with independence assumption",
                  "Fast, robust on text, works with little data",
                  "Laplace smoothing handles unseen words",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Naive Bayes questions are free marks if you keep the arithmetic tidy: write the two score products, sum them, divide. Always finish with the Laplace sentence - 'add-one smoothing prevents an unseen word from annihilating the posterior' - because examiners almost always append a zero-count word to test exactly that.",
            },
            keyTerms: [
              { term: "kNN (k-nearest neighbours)", definition: "A lazy classifier that predicts the majority class among the k closest training rows under a chosen distance." },
              { term: "Naive Bayes", definition: "A Bayesian classifier applying Bayes' theorem with the assumption that features are conditionally independent given the class." },
              { term: "Laplace smoothing", definition: "Adding 1 to every word-class count so unseen words get a small nonzero likelihood instead of zero." },
              { term: "Support vector", definition: "A training point lying on the margin boundary; the SVM hyperplane is defined only by these points." },
              { term: "Kernel trick", definition: "Computing inner products in a higher-dimensional space implicitly, letting SVMs draw non-linear boundaries." },
            ],
            examQuestions: [
              {
                q: "Explain Naive Bayes classification and compute the spam posterior for the message 'FREE meeting' given P(spam) = 0.4, P(FREE|spam) = 0.5, P(FREE|ham) = 0.05, P(meeting|spam) = 0.1, P(meeting|ham) = 0.4, P(ham) = 0.6. Explain Laplace smoothing.",
                marks: 7,
                outline: [
                  "State Bayes' theorem and the conditional-independence assumption.",
                  "Score spam: 0.4 x 0.5 x 0.1 = 0.020.",
                  "Score ham: 0.6 x 0.05 x 0.4 = 0.012.",
                  "Posterior = 0.020 / (0.020 + 0.012) = 0.625 -> classify spam.",
                  "Show the single-word step first (0.87) to illustrate the update logic.",
                  "Explain the zero-count catastrophe: one unseen word zeroes the whole product.",
                  "Give Laplace smoothing: (count + 1) / (total + vocabulary size).",
                ],
              },
              {
                q: "Why must features be scaled before kNN, and which parameter controls its flexibility?",
                marks: 2,
              },
              {
                q: "In an SVM, what are support vectors and what does a large C do to the margin?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.7",
            title: "Evaluation metrics, the confusion matrix and class imbalance",
            body: [
              "Every classification metric is bookkeeping over the 2 x 2 confusion matrix. Worked example: a spam filter tested on 100 emails where 50 are truly spam. The model flags 45 as spam: 40 correctly (true positives), 5 wrongly (false positives - good mail sent to the junk folder); it misses 10 spam (false negatives) and correctly passes 45 ham (true negatives). Accuracy = (40 + 45) / 100 = 0.85. Precision = TP / (TP + FP) = 40 / 45 = 0.889 - of everything flagged, 88.9 percent really was spam. Recall = TP / (TP + FN) = 40 / 50 = 0.80 - of all real spam, 80 percent was caught. F1 = 2PR / (P + R) = 2 x 0.889 x 0.80 / 1.689 = 0.842, the harmonic mean that punishes lopsided pairs.",
              "Accuracy lies under imbalance, and the lie is computable. If 95 of the 100 emails are ham, a model that predicts 'ham' for everything scores 0.95 accuracy while catching zero spam - precision and recall are both undefined or zero. The fix is metric selection matched to error cost: fraud and disease screening live on recall (a missed fraud costs lakhs; a false alarm costs a phone call), spam filtering and search ranking live on precision (a false positive trashes user trust), and F1 or the F-beta variant arbitrates when both matter. The confusion matrix should be reported raw, not just summarised, because the four cells are the actual business events.",
              "ROC-AUC generalises across thresholds. The ROC curve plots true positive rate (recall) against false positive rate FP / (FP + TN) as the decision threshold slides from 1 down to 0; AUC is the area under it - 0.5 for coin-flip ranking, 1.0 for a perfect ranker, and the probability interpretation is that a random positive row scores above a random negative row with that probability. For regression the companion metrics are MAE (mean absolute error, robust), MSE and RMSE (square-penalised, target units), and R^2 from Section 2.1; RMSE is the default report because one number carries both magnitude and units.",
              "Class imbalance demands remedies, applied in strict order of preference. First, fix the metric - report precision, recall, F1 and PR-AUC, never bare accuracy. Second, reweight the loss with class_weight='balanced', which costs nothing and keeps the dataset intact. Third, resample inside the training folds only: oversample the minority (SMOTE synthesises new minority rows by interpolating between neighbours in feature space) or undersample the majority. Fourth, move the decision threshold using the precision-recall curve. Resampling before the CV split is itself leakage - synthetic rows built from validation neighbours inflate the score - so imbalance handling belongs inside the pipeline, never before it.",
            ],
            bullets: [
              "Confusion matrix cells: TP, FP, FN, TN - the four business events behind every metric.",
              "Worked: accuracy 0.85, precision 40/45 = 0.889, recall 40/50 = 0.80, F1 = 0.842.",
              "Imbalance trap: 95 percent majority -> always-majority model scores 0.95 accuracy and catches nothing.",
              "Cost matching: fraud/disease -> recall; spam/search -> precision; both -> F1 (harmonic mean punishes imbalance between P and R).",
              "ROC-AUC: area under TPR-vs-FPR as the threshold slides; 0.5 = random ranking, 1.0 = perfect; threshold-free.",
              "Regression set: MAE (robust), MSE, RMSE (target units), R^2 (variance explained).",
              "Imbalance ladder: fix metric -> class weights -> fold-internal SMOTE/undersampling -> threshold moving.",
            ],
            table: {
              caption: "The worked spam confusion matrix, scored.",
              headers: ["Metric", "Formula", "Values", "Result"],
              rows: [
                ["Accuracy", "(TP + TN) / total", "(40 + 45) / 100", "0.85"],
                ["Precision", "TP / (TP + FP)", "40 / 45", "0.889"],
                ["Recall", "TP / (TP + FN)", "40 / 50", "0.80"],
                ["F1", "2PR / (P + R)", "2 x 0.889 x 0.80 / 1.689", "0.842"],
                ["FPR", "FP / (FP + TN)", "5 / 50", "0.10"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Precision-recall operating map",
              caption:
                "Where a threshold choice lands on the two axes every classifier trades between.",
              axes: { x: "Recall ->", y: "Precision ->" },
              quadrants: [
                { label: "Conservative: high precision, low recall", note: "spam filter default - few false alarms, many misses" },
                { label: "Ideal: high precision, high recall", note: "rare; usually needs more data or features" },
                { label: "Broken: low precision, low recall", note: "model worse than base rates - investigate" },
                { label: "Aggressive: low precision, high recall", note: "fraud/disease screening - catch everything, triage later" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Confusion-matrix questions are arithmetic, so build a 2x2 grid first, fill the four cells from the prose, and only then compute. Quote formulas with cell names (TP / (TP + FP)) before numbers - the formula line is a marked point even when arithmetic slips. If the question mentions imbalance anywhere, accuracy alone is the wrong headline metric; say so explicitly.",
            },
            keyTerms: [
              { term: "Confusion matrix", definition: "The 2 x 2 table of true positives, false positives, false negatives and true negatives from which all classification metrics derive." },
              { term: "Precision", definition: "TP / (TP + FP): of the rows the model flagged, the fraction that was correct." },
              { term: "Recall (sensitivity, TPR)", definition: "TP / (TP + FN): of the true positives, the fraction the model caught." },
              { term: "F1 score", definition: "The harmonic mean of precision and recall, 2PR / (P + R); low only when both are high." },
              { term: "ROC-AUC", definition: "Area under the true-positive-rate versus false-positive-rate curve across all thresholds; the probability a random positive outranks a random negative." },
            ],
            examQuestions: [
              {
                q: "Construct and evaluate the confusion matrix for a spam filter on 100 emails (50 true spam) that flags 45, of which 5 are ham. Compute accuracy, precision, recall and F1, and explain why accuracy alone is insufficient on an imbalanced dataset.",
                marks: 7,
                outline: [
                  "Fill the grid: TP = 40, FP = 5, FN = 10, TN = 45.",
                  "Accuracy = (40 + 45) / 100 = 0.85.",
                  "Precision = 40 / (40 + 5) = 0.889.",
                  "Recall = 40 / (40 + 10) = 0.80.",
                  "F1 = 2 x 0.889 x 0.80 / (0.889 + 0.80) = 0.842.",
                  "Imbalance argument: on 95 percent ham, predicting all-ham scores 0.95 accuracy with zero recall.",
                  "Metric-cost matching: recall for fraud/disease, precision for spam, F1 when both matter.",
                ],
              },
              {
                q: "A fraud model must never miss a fraudulent transaction but can tolerate false alarms. Which metric should be maximised, and which threshold direction helps?",
                marks: 3,
              },
              {
                q: "Define ROC-AUC and state its values for a random classifier and a perfect classifier.",
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
      title: "Unsupervised Learning and Pattern Discovery",
      summary:
        "Finding structure without labels: k-means with a worked 2D iteration and the elbow and silhouette tests for choosing k, hierarchical clustering with linkages and dendrograms, DBSCAN's density logic, PCA and t-SNE for dimensionality reduction and visualisation, association rules with Apriori, and anomaly detection.",
      chapter: {
        number: "03",
        title: "Unsupervised Learning",
        intro:
          "Unit III works without a target column. It opens with k-means and a full two-centroid iteration computed point by point, then the two standard answers to 'how many clusters?'. Hierarchical clustering and DBSCAN cover the shapes k-means cannot express, PCA and t-SNE handle the dimensions no plot can show, association rules mine baskets for co-purchase patterns with a full support-confidence-lift computation, and anomaly detection closes the unit with the methods production systems actually run.",
        inOneBreath:
          "k-means minimizes within-cluster sum of squares: init k centroids, assign by nearest, recompute means, repeat; scale first, run several seeds, and choose k by the elbow in inertia or by silhouette s = (b - a) / max(a, b). Hierarchical clustering merges closest clusters - single linkage chains, complete keeps clusters compact, Ward balances variance - and the dendrogram cut gives k for free. DBSCAN defines clusters by density: core points hold minPts neighbours within eps, border points lean on cores, everything else is noise, which finds moons and rings that break k-means. PCA rotates onto variance-maximising directions - two components can hold 83 percent of ten features' variance - while t-SNE preserves local neighbourhoods for 2D pictures only. Association rules score co-occurrence: bread->butter with support 0.20, confidence 0.50, lift 1.67; Apriori prunes using the fact that every subset of a frequent set is frequent. Anomalies hide from labels: IQR fences, DBSCAN noise, LOF density ratios and isolation forests by path length.",
        sections: [
          {
            number: "3.1",
            title: "k-means: the algorithm, a worked iteration and choosing k",
            body: [
              "k-means partitions n points into k clusters so that within-cluster spread - measured as the sum of squared distances to each cluster's centroid, called inertia - is as small as possible. The algorithm is four moves repeated: initialise k centroids (k-means++ spreads them far apart instead of clustering them together), assign every point to its nearest centroid, recompute each centroid as the mean of its assigned points, and stop when assignments stop changing. Each move never increases inertia, so the loop always converges - though possibly to a local minimum, which is why sklearn runs n_init = 10 random restarts and keeps the best.",
              "A worked 2D iteration with four points: A(1,1), B(2,1), C(4,5), D(5,4), and k = 2 with initial centroids c1 = (1,1) and c2 = (4,5). Assignment: A sits on c1 (distance 0 vs sqrt(9 + 16) = 5 to c2) -> cluster 1; B is 1 from c1 but sqrt(4 + 16) = 4.47 from c2 -> cluster 1; C sits on c2 -> cluster 2; D is sqrt(1 + 1) = 1.41 from c2 but sqrt(16 + 9) = 5 from c1 -> cluster 2. Update: c1 = mean of A and B = (1.5, 1); c2 = mean of C and D = (4.5, 4.5). Reassigning with the new centroids leaves all four assignments unchanged - converged in one round, with the natural left pair and right pair recovered.",
              "Choosing k is a modelling decision, not a parameter the data hands over. The elbow method plots inertia against k from 1 to, say, 10: inertia always falls as k grows, but beyond the true cluster count the falls shrink - the plot bends like an arm and the elbow is the candidate k. The silhouette score is sharper: for each point, a = mean distance to points in its own cluster and b = mean distance to the nearest other cluster, and s = (b - a) / max(a, b) in [-1, 1]. Worked value: a = 2.0, b = 5.0 gives s = 3.0 / 5.0 = 0.6 - a comfortably cohesive cluster; average s over all points and compare candidate k values, taking the highest.",
              "Three practical disciplines complete the section. Scale features first - k-means sums squared distances, so unscaled income swamps age exactly as in kNN. Run multiple initialisations because a bad seed (two centroids dropped inside one true cluster) converges to a poor local minimum; k-means++ initialisation, which picks subsequent centroids proportionally to squared distance from those already placed, makes bad seeds rare. Know the failure shapes: k-means assumes roughly spherical, equal-sized clusters, so it slices two moons or a ring and an island into pie wedges - the moment Section 3.3 enters.",
            ],
            bullets: [
              "Objective: minimize inertia, the sum of squared distances from points to their centroid.",
              "Loop: k-means++ init -> assign to nearest -> recompute means -> stop when assignments stabilise.",
              "Worked iteration: A(1,1), B(2,1) -> c1 = (1.5, 1); C(4,5), D(5,4) -> c2 = (4.5, 4.5); converged after one reassignment.",
              "Elbow method: plot inertia vs k and take the bend where extra clusters stop paying.",
              "Silhouette: s = (b - a) / max(a, b); worked a = 2.0, b = 5.0 gives s = 0.6; pick k with the highest mean s.",
              "Scale features and use k-means++ with n_init restarts - bad seeds converge to bad local minima.",
              "Failure shapes: non-spherical clusters, rings, moons and unequal sizes defeat k-means; reach for DBSCAN.",
            ],
            codeExample: {
              language: "python",
              caption: "k-means with elbow and silhouette diagnostics in sklearn.",
              code: `from sklearn.preprocessing import StandardScaler
from sklearn.cluster import KMeans
from sklearn.metrics import silhouette_score

Xs = StandardScaler().fit_transform(X)   # scale before distances

for k in [2, 3, 4, 5]:
    km = KMeans(n_clusters=k, n_init=10, random_state=42).fit(Xs)
    sil = silhouette_score(Xs, km.labels_)
    print(f"k={k}  inertia={km.inertia_:.1f}  silhouette={sil:.3f}")

# Final model at the chosen k
km = KMeans(n_clusters=3, n_init=10, random_state=42).fit(Xs)
print("cluster sizes:", {c: int((km.labels_ == c).sum()) for c in set(km.labels_)})`,
            },
            diagram: {
              kind: "cycle",
              title: "The k-means loop",
              caption:
                "Every pass can only lower inertia, so the loop always converges.",
              steps: [
                { label: "Initialise k centroids", note: "k-means++ spreads them out" },
                { label: "Assign points", note: "nearest centroid wins" },
                { label: "Recompute centroids", note: "mean of assigned points" },
                { label: "Check movement", note: "centroids shifted?" },
                { label: "Repeat or stop", note: "stop when assignments freeze" },
              ],
            },
            callout: {
              type: "warning",
              title: "Scale before you cluster",
              body: "k-means and silhouette both work on raw Euclidean distances. On unscaled data a single wide-range column (income in tens of thousands against age in tens) decides every assignment and every other feature is decorative. StandardScaler before KMeans is one line and turns many 'clustering failed' stories into 'clustering worked'.",
            },
            keyTerms: [
              { term: "Inertia", definition: "k-means' objective: the sum of squared distances between each point and its assigned centroid." },
              { term: "Centroid", definition: "The mean of the points assigned to a cluster; recomputed on every pass of the algorithm." },
              { term: "Elbow method", definition: "Choosing k at the bend of the inertia-versus-k curve, where extra clusters stop reducing inertia much." },
              { term: "Silhouette score", definition: "Per-point cohesion vs separation, s = (b - a) / max(a, b) in [-1, 1]; average it to compare candidate k values." },
              { term: "k-means++", definition: "An initialisation scheme placing early centroids far apart, avoiding the converges-to-half-a-cluster failure." },
            ],
            examQuestions: [
              {
                q: "Explain the k-means algorithm and trace one full iteration on A(1,1), B(2,1), C(4,5), D(5,4) with initial centroids c1 = (1,1), c2 = (4,5). Then explain how the elbow and silhouette methods choose k.",
                marks: 7,
                outline: [
                  "State the objective (minimize inertia) and the four-step loop.",
                  "Assignment step: A and B nearest c1 (B: 1 vs 4.47); C and D nearest c2 (D: 1.41 vs 5).",
                  "Update step: c1 = (1.5, 1), c2 = (4.5, 4.5).",
                  "Reassignment leaves clusters unchanged - algorithm converged.",
                  "Elbow: inertia falls for every larger k; pick the bend where gains flatten.",
                  "Silhouette: s = (b - a) / max(a, b); worked a = 2.0, b = 5.0 -> s = 0.6.",
                  "Practical notes: scale features, k-means++ init, n_init restarts.",
                ],
              },
              {
                q: "Compute the silhouette score of a point with a = 2.0 (own cluster) and b = 5.0 (nearest other cluster).",
                marks: 2,
              },
              {
                q: "Why does k-means fail on two interleaving moon shapes, and which algorithm handles them?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.2",
            title: "Hierarchical clustering: linkage and dendrograms",
            body: [
              "Agglomerative hierarchical clustering starts with every point as its own cluster and repeatedly merges the two closest clusters until a single cluster remains - the exact mirror of divisive clustering, which splits from the top down. No k is needed up front: the full merge history is recorded in a dendrogram, a tree whose leaves are points and whose branch heights are the distances at which merges happened. Cutting the dendrogram horizontally at any height yields the clustering at that granularity, so one run answers every k simultaneously - the property that makes it the method of choice for exploratory work and for taxonomy-style outputs like customer segments nested within segments.",
              "The algorithm's only degree of freedom is the linkage rule that defines 'distance between two clusters'. Single linkage takes the minimum pairwise distance: it merges through chains of near neighbours and can produce long straggly clusters. Complete linkage takes the maximum: clusters stay compact but growth is conservative. Average linkage averages all cross pairs, and Ward's linkage merges the pair that increases total within-cluster variance least, producing the balanced, even-sized clusters that look most like k-means output. Worked micro-example on a line: points at 1, 2, 3 and 8. Distances 1-2 = 1 and 2-3 = 1, 3-8 = 5. Single linkage merges {1,2} then {1,2,3} at height 1 (the min distance to 3 is 1), giving two clusters cut at height 2. Complete linkage merges {1,2} but the merge with 3 waits for height 2 (the max distance from {1,2} to 3 is 2), so the geometry looks tighter and 8 joins later at height 5-6.",
              "Reading a dendrogram is a skill examiners test directly. Look for where merge heights jump sharply - a big vertical gap means merging beyond it would fuse genuinely distinct groups. In the line example the last merge (to 8) happens at height 5 while everything else happened at 1-2, so the natural cut leaves {1,2,3} and {8}: two clusters. More points give richer trees; the cophenetic correlation between the dendrogram's implied distances and the actual distances measures how faithfully the tree preserved the geometry, and low values warn that the linkage distorted the data.",
              "Costs and habits: agglomerative clustering computes all pairwise distances (O(n^2) memory), so it suits datasets up to a few tens of thousands of rows, not millions. It is deterministic - no random initialisation, no restarts - which makes runs reproducible and comparisons honest. Standardise features first for the same domination reasons as k-means, choose the linkage to match the cluster shape you believe exists (Ward for compact, single for elongated), and always present the dendrogram with the cut line drawn - the picture plus the stated k is the complete exam answer.",
            ],
            bullets: [
              "Agglomerative flow: each point starts alone; repeatedly merge the two closest clusters until one remains.",
              "Dendrogram: branch heights are merge distances; a horizontal cut yields the clustering at that level.",
              "Single linkage = min pairwise distance: chains through neighbours, finds elongated clusters.",
              "Complete linkage = max pairwise distance: compact, conservative clusters.",
              "Ward's linkage merges the pair that adds least within-cluster variance - balanced, k-means-like clusters.",
              "Worked line example (1, 2, 3, 8): single linkage merges {1,2,3} at height 1; the jump to height 5 says cut there.",
              "O(n^2) memory and deterministic runs: fine below tens of thousands of rows, standardise first, draw the cut line.",
            ],
            table: {
              caption: "Linkage rules and their personalities.",
              headers: ["Linkage", "Cluster distance", "Cluster shape", "Failure mode"],
              rows: [
                ["Single", "min pairwise", "elongated, follows chains", "one bridge point joins two real clusters"],
                ["Complete", "max pairwise", "compact spheres", "grows too slowly, splits true clusters"],
                ["Average", "mean pairwise", "compromise", "diluted by many far pairs"],
                ["Ward", "variance increase", "balanced, even-sized", "assumes roughly spherical clusters"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Agglomerative merging on points 1, 2, 3 and 8",
              caption:
                "Merge heights - 1, 1, then a jump to 5 - are exactly what the dendrogram records.",
              steps: [
                { label: "Start: four singleton clusters", note: "points on a line" },
                { label: "Merge {1,2}", note: "distance 1" },
                { label: "Merge with 3", note: "single linkage: height 1; complete: height 2" },
                { label: "Everything meets 8", note: "big jump to height 5" },
                { label: "Cut below the jump", note: "clusters {1,2,3} and {8}" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Linkage definitions are one-mark gold: single = minimum, complete = maximum, average = mean, Ward = least variance increase. When a paper gives small numeric points, sketch the merge sequence with heights and then the dendrogram - the two together are the expected answer, and the cut line drawn at the largest height gap is the sentence that converts a drawing into a clustering.",
            },
            keyTerms: [
              { term: "Agglomerative clustering", definition: "Bottom-up hierarchical clustering that starts from singletons and merges the closest pair of clusters repeatedly." },
              { term: "Dendrogram", definition: "The tree recording every merge and the distance at which it happened; cutting it at a height selects a clustering." },
              { term: "Linkage", definition: "The rule defining the distance between clusters: single (min), complete (max), average (mean) or Ward (variance)." },
              { term: "Chaining", definition: "The single-linkage failure where a trail of near neighbours gradually bridges two genuinely distinct groups." },
            ],
            examQuestions: [
              {
                q: "Explain agglomerative hierarchical clustering, compare single, complete, average and Ward linkage, and trace the merges for points at 1, 2, 3 and 8 on a line under single linkage, stating where you would cut the dendrogram.",
                marks: 7,
                outline: [
                  "Describe the bottom-up flow: singletons, closest-pair merges, one cluster at the top.",
                  "Define each linkage rule with its personality (chain vs compact vs balanced).",
                  "Compute pairwise distances: 1-2 = 1, 2-3 = 1, 3-8 = 5.",
                  "Merge {1,2} at height 1; merge {1,2,3} at height 1 (single linkage uses the min).",
                  "The final merge to 8 happens at height 5 - the large jump.",
                  "Cut below the jump: clusters {1,2,3} and {8}.",
                  "Note standardisation, determinism and the O(n^2) cost ceiling.",
                ],
              },
              {
                q: "Which linkage rule produces compact, k-means-like balanced clusters?",
                marks: 2,
              },
              {
                q: "What is chaining, and which linkage causes it?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.3",
            title: "DBSCAN: density-based clustering",
            body: [
              "DBSCAN - Density-Based Spatial Clustering of Applications with Noise - replaces 'distance to a centroid' with 'density of the neighbourhood'. Two parameters define density: eps, the neighbourhood radius, and minPts, the number of points required inside that radius for the point to count as dense. A point with at least minPts neighbours (counting itself, in sklearn's convention) within eps is a core point; clusters grow by chaining core points that lie within eps of each other. Everything else is either a border point - not dense itself, but within eps of some core point - or noise, belonging to no cluster at all.",
              "A worked classification: minPts = 4, eps = 1.5. Point P has 5 points within distance 1.5, so P is core. Point Q has only 2 neighbours within eps, but one of them is the core point P, so Q joins P's cluster as a border point. Point R has 1 neighbour within eps and none of them are core, so R is labelled noise (-1 in sklearn). Clusters are the connected components of the core-point graph, with borders attached to whichever core they can reach. Two consequences follow immediately: cluster count is discovered, not specified, and noise detection is built into the algorithm rather than bolted on afterwards.",
              "Choosing eps has a standard recipe: the k-distance graph. For each point compute the distance to its minPts-th nearest neighbour, sort these distances descending, and plot them - the elbow of that curve is the eps where density changes regime. minPts follows the rule of thumb minPts >= dimensionality + 1, commonly 2 x dimensionality, and larger minPts in noisy data suppresses spurious clusters. Both parameters assume sensible scales, so standardise features first exactly as for k-means.",
              "DBSCAN's strengths and weaknesses are the mirror image of k-means. It finds arbitrarily shaped clusters - two moons, a ring with an island, a snake along a river - where k-means would cut pie wedges, and it flags outliers as an explicit class, which is why it doubles as an anomaly detector in Section 3.6. It needs no k, and unlike k-means its result is mostly deterministic (only border points reachable from two clusters can differ by visit order). Its weaknesses: clusters of strongly varying density defeat a single global eps, and it struggles in high dimensions where distances concentrate and 'density' loses meaning beyond roughly 10-20 features.",
            ],
            bullets: [
              "Parameters: eps = neighbourhood radius, minPts = density threshold; a point is core if >= minPts neighbours within eps.",
              "Point taxonomy: core (dense), border (within eps of a core but not dense itself), noise (neither).",
              "Worked: minPts = 4, eps = 1.5; P with 5 neighbours is core, Q with 2 neighbours near P is border, R with 1 is noise.",
              "Clusters are connected components of core points - the count emerges from the data.",
              "eps via the k-distance graph: plot sorted distances to the minPts-th neighbour, take the elbow.",
              "minPts rule of thumb: at least dimensionality + 1, often 2 x dimensionality.",
              "Strengths: arbitrary shapes, explicit noise label, no k. Weaknesses: varying densities, parameter sensitivity, degrades beyond 10-20 dimensions.",
            ],
            codeExample: {
              language: "python",
              caption: "DBSCAN with a k-distance guide for choosing eps.",
              code: `from sklearn.preprocessing import StandardScaler
from sklearn.cluster import DBSCAN
from sklearn.neighbors import NearestNeighbors
import numpy as np

Xs = StandardScaler().fit_transform(X)

# k-distance curve: distance to the 5th neighbour, sorted
nn = NearestNeighbors(n_neighbors=5).fit(Xs)
dists = np.sort(nn.kneighbors(Xs)[0][:, -1])
print("eps candidates around the elbow:", dists[len(dists)//2:].round(2)[:5])

db = DBSCAN(eps=0.8, min_samples=5).fit(Xs)
labels = db.labels_
print("clusters found:", len(set(labels)) - (1 if -1 in labels else 0))
print("noise points:", int((labels == -1).sum()))   # outliers, by design`,
            },
            diagram: {
              kind: "fork",
              title: "Classifying one point in DBSCAN",
              caption:
                "Every point lands in exactly one of three roles - and the third one is the free anomaly detector.",
              start: "Count neighbours within eps (minPts = 4)",
              branches: [
                { label: "5 neighbours within eps", outcome: "Core point: grows the cluster by chaining to other cores", good: true },
                { label: "2 neighbours, but near a core", outcome: "Border point: joins that cluster without extending it", good: true },
                { label: "1 neighbour, no core nearby", outcome: "Noise: labelled -1 - a built-in outlier detector", good: false },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Draw the three-point taxonomy whenever DBSCAN appears: one core point with its eps circle, one border point inside a core's circle but sparse itself, one noise point alone. The diagram plus the two definitions (eps, minPts) and the k-distance recipe for eps is a complete 7-mark answer.",
            },
            keyTerms: [
              { term: "eps", definition: "The radius of the neighbourhood DBSCAN examines around every point." },
              { term: "minPts", definition: "The minimum number of points (including the point itself in sklearn) required within eps for a point to be a core point." },
              { term: "Core point", definition: "A point with at least minPts neighbours within eps; core points chain together to form clusters." },
              { term: "Border point", definition: "A point that is not dense itself but lies within eps of a core point, so it joins that core's cluster." },
              { term: "Noise (label -1)", definition: "A point that is neither core nor border - DBSCAN's built-in anomaly class." },
            ],
            examQuestions: [
              {
                q: "Explain DBSCAN: define eps and minPts, classify core, border and noise points with a worked example (minPts = 4, eps = 1.5), and describe how to choose eps with the k-distance graph.",
                marks: 7,
                outline: [
                  "State the density idea: clusters are dense regions separated by sparse space.",
                  "Define eps (neighbourhood radius) and minPts (density threshold).",
                  "Core point: at least minPts neighbours within eps - worked P with 5 neighbours.",
                  "Border point: fewer than minPts neighbours but within eps of a core - worked Q with 2.",
                  "Noise: neither dense nor near a core - worked R with 1, labelled -1.",
                  "k-distance recipe: sorted distances to the minPts-th neighbour, take the elbow as eps.",
                  "Contrast with k-means: arbitrary shapes, no k, explicit noise; weakness is varying density.",
                ],
              },
              {
                q: "How many clusters does DBSCAN require you to specify, and what label do noise points receive in sklearn?",
                marks: 2,
              },
              {
                q: "Why does a single global eps struggle when clusters have very different densities?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.4",
            title: "PCA and t-SNE: dimensionality reduction and visualisation",
            body: [
              "High-dimensional data brings the curse of dimensionality: distances concentrate, models overfit, and nothing can be plotted. Principal Component Analysis (PCA) attacks it by rotating the feature axes onto the directions of greatest variance. The first principal component is the unit direction along which the data's variance is maximal; each subsequent component is orthogonal to the previous ones and captures the most remaining variance. Mechanically, PCA standardises the data, computes the covariance matrix, and takes its eigenvectors (the components) sorted by eigenvalues (the variance each carries); the transformed data is the projection onto the top components.",
              "The variance-explained ratio tells you how many components to keep. Worked example: PCA on 10 correlated features yields PC1 = 62 percent, PC2 = 21 percent, PC3 = 8 percent, and the rest in single digits. Keeping 2 components retains 83 percent of the information while compressing 10 columns into 2 - a 5 x compression that denoises the data (discarded directions are dominated by noise if their eigenvalues are flat), speeds up downstream models, and produces a 2D scatter for inspection. Loadings - the component weights - name what each axis means: a PC1 loaded heavily on tenure, contract and charges is interpretable as 'customer loyalty'.",
              "Choose PCA when features are numerically correlated and you need compression, decorrelation, speed or a linear 2D view - it is deterministic, fast, and its output can safely feed supervised models (a legitimate preprocessing step inside the pipeline). Know its limits: PCA is linear, so curved manifolds (swiss rolls, moons) get flattened, and it is variance-driven, so the most varying direction is not always the most informative for the task. Standardise first; running PCA on unscaled data makes the wide-range feature own PC1 by scale alone.",
              "t-SNE solves a narrower problem: making a 2D picture that respects local neighbourhoods. It converts distances in high-dimensional space into similarity probabilities and finds a low-dimensional embedding whose probabilities match, using a perplexity parameter (typical 5-50) that sets how many neighbours each point tries to stay close to. The result reveals cluster structure beautifully - separate islands, substructure within blobs - but the rules of reading are strict: inter-cluster distances and cluster sizes in the plot are meaningless, runs differ with different seeds and perplexities, and t-SNE output is for visualisation only, never as features for a model. PCA compresses; t-SNE illustrates.",
            ],
            bullets: [
              "PCA finds orthogonal directions of maximal variance: eigenvectors of the covariance matrix, sorted by eigenvalue.",
              "Worked ratios: PC1 = 62 percent, PC2 = 21 percent -> 2 of 10 components keep 83 percent of the information.",
              "Benefits: compression, decorrelation, denoising, faster downstream models, an honest 2D scatter.",
              "Loadings name the components: heavy weights on tenure and charges read as a 'loyalty' axis.",
              "Standardise before PCA - unscaled variance lets one wide-range feature own PC1.",
              "PCA is linear and variance-driven; curved manifolds need non-linear methods.",
              "t-SNE: preserves local neighbourhoods for 2D plots (perplexity 5-50); cluster distances and sizes in the plot are meaningless, and output is never used as features.",
            ],
            table: {
              caption: "PCA vs t-SNE - two different jobs.",
              headers: ["Aspect", "PCA", "t-SNE"],
              rows: [
                ["Purpose", "compression and decorrelation", "visualisation of local structure"],
                ["Type", "linear projection", "non-linear embedding"],
                ["Determinism", "deterministic, unique solution", "stochastic; varies with seed and perplexity"],
                ["Key parameter", "number of components k", "perplexity (5-50)"],
                ["As model features", "yes - standard preprocessing", "no - plots only"],
                ["Interpretation", "loadings name axes", "distances and sizes not meaningful"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "The PCA workflow",
              caption:
                "The variance-explained curve decides k; the loadings give the axes meaning.",
              stages: [
                { label: "Standardise features", note: "equal footing for all columns" },
                { label: "Covariance matrix", note: "captures feature correlations" },
                { label: "Eigenvectors + eigenvalues", note: "directions and their variance" },
                { label: "Sort and project", note: "onto top-k components" },
                { label: "Check variance ratio", note: "keep 80-95 percent; read the loadings" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Two sentences earn recurring marks: 'PC1 is the direction of maximum variance, and components are orthogonal' and 'keep enough components to cover 80-95 percent of variance'. Then add the t-SNE caution - 'cluster sizes and distances in a t-SNE plot are not meaningful' - which examiners love to test because it separates students who used t-SNE from students who understood it.",
            },
            keyTerms: [
              { term: "Principal component", definition: "An orthogonal direction of maximal remaining variance; PC1 captures the most variance of all." },
              { term: "Variance explained ratio", definition: "The share of total variance a component carries, equal to its eigenvalue divided by the sum of all eigenvalues." },
              { term: "Loadings", definition: "The weights of original features in a component; they give the component a human-readable meaning." },
              { term: "Curse of dimensionality", definition: "The degradation of distance-based methods as dimensions grow: distances concentrate, data becomes sparse." },
              { term: "Perplexity", definition: "t-SNE's smooth neighbour count, typically 5-50; it controls the scale of structure the plot preserves." },
            ],
            examQuestions: [
              {
                q: "Explain PCA: what the principal components are, how they are computed, and how the variance-explained ratio chooses the number of components. Illustrate with components capturing 62 and 21 percent of a 10-feature dataset.",
                marks: 7,
                outline: [
                  "Motivate: correlation, overfitting and the impossibility of plotting 10 dimensions.",
                  "Define PC1 as the maximum-variance direction; subsequent components orthogonal.",
                  "Give the mechanics: standardise -> covariance matrix -> eigenvectors/eigenvalues -> project.",
                  "Compute kept variance: 62 + 21 = 83 percent with 2 of 10 components - a 5x compression.",
                  "Explain the 80-95 percent retention rule and denoising of low-eigenvalue directions.",
                  "Mention loadings for interpretability and the standardisation prerequisite.",
                  "Contrast PCA (linear, deterministic, usable as features) with t-SNE (non-linear, visual only).",
                ],
              },
              {
                q: "Why must features be standardised before PCA?",
                marks: 2,
              },
              {
                q: "A colleague feeds t-SNE's 2D output into a classifier as features. What is wrong with this?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.5",
            title: "Association rules: support, confidence, lift and Apriori",
            body: [
              "Association rule mining - market basket analysis - finds products that co-occur: rules of the form X -> Y read 'customers who buy X tend to buy Y'. Three metrics score every rule. Support(X -> Y) is the fraction of transactions containing X and Y together. Confidence(X -> Y) is support(X and Y) / support(X): among baskets with X, the fraction that also holds Y. Lift(X -> Y) is confidence(X -> Y) / support(Y): how many times more likely Y is, given X, than its base rate - lift above 1 means a genuine positive association, 1 means independence, below 1 a negative one.",
              "Worked example over 100 baskets: bread appears in 40, butter in 30, and both together in 20. Rule bread -> butter: support = 20/100 = 0.20; confidence = 20/40 = 0.50 - half the bread buyers also buy butter; lift = 0.50 / 0.30 = 1.67 - butter is 1.67 times more likely in a bread basket than at random. The reverse rule butter -> bread: confidence = 20/30 = 0.67, lift unchanged at 1.67 (lift is symmetric; confidence is not). A trivial rule shows why lift matters: milk appears in 80 baskets and bread-and-milk in 35, so confidence(bread -> milk) = 35/40 = 0.875 looks impressive, but lift = 0.875 / 0.80 = 1.09 - milk is in everything; the rule is nearly worthless despite its confidence.",
              "Apriori makes the search tractable with one observation: every subset of a frequent itemset must itself be frequent (removing an item can only shrink an itemset's support). The algorithm proceeds level-wise: find frequent 1-itemsets above min_support; generate candidate 2-itemsets only from frequent 1-itemsets; count and prune; continue to 3-itemsets and beyond. The pruning is the win - with 1,000 products there are about 500,000 candidate pairs, but if only 200 single items are frequent, Apriori considers at most 19,900 pairs. From the surviving frequent itemsets, rules are generated and filtered by min_confidence, then ranked by lift.",
              "Reading results is the applied half. High-support, high-lift rules drive shelf layout (put butter beside bread), cross-sell prompts and bundle pricing; confidence ranks the actions, lift validates they are not trivial. Beware three traps: support-heavy rules are usually staples (the milk effect), rules on rare items can have spectacular confidence from a handful of baskets, and correlation is not causation - the bread-butter lift may be driven by a third habit (weekend shopping) rather than any transferable preference. min_support around 0.01-0.05 and min_confidence around 0.5-0.7 are typical starting thresholds for retail data.",
            ],
            bullets: [
              "Support(X -> Y) = fraction of all transactions containing both X and Y.",
              "Confidence(X -> Y) = support(X and Y) / support(X): conditional probability of Y given X.",
              "Lift = confidence / support(Y): above 1 is a real association; symmetric across the arrow, unlike confidence.",
              "Worked: bread in 40, butter in 30, both in 20 -> support 0.20, confidence 0.50, lift 0.50/0.30 = 1.67.",
              "Trivial-rule trap: bread -> milk has confidence 0.875 but lift 1.09 - high support dilutes meaning.",
              "Apriori principle: every subset of a frequent itemset is frequent - prune candidates level-wise.",
              "Typical thresholds: min_support 0.01-0.05, min_confidence 0.5-0.7; rank surviving rules by lift.",
            ],
            table: {
              caption: "Scored rules from 100 baskets (bread 40, butter 30, milk 80, bread+butter 20, bread+milk 35).",
              headers: ["Rule", "Support", "Confidence", "Lift", "Verdict"],
              rows: [
                ["bread -> butter", "0.20", "20/40 = 0.50", "0.50 / 0.30 = 1.67", "genuine cross-sell"],
                ["butter -> bread", "0.20", "20/30 = 0.67", "1.67", "same association, stronger confidence"],
                ["bread -> milk", "0.35", "35/40 = 0.875", "0.875 / 0.80 = 1.09", "trivial - milk is everywhere"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Apriori's level-wise search",
              caption:
                "Each level inherits the pruning of the last - the whole speed of Apriori is the Apriori property.",
              stages: [
                { label: "Count 1-itemsets", note: "keep those above min_support" },
                { label: "Build candidate pairs", note: "only from frequent singles (pruned)" },
                { label: "Count and prune pairs", note: "Apriori property kills the rest" },
                { label: "Repeat to k-itemsets", note: "until no candidate survives" },
                { label: "Generate and rank rules", note: "filter by confidence, order by lift" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Basket questions are pure arithmetic: write the three definitions once, then plug numbers. The bonus mark almost always hides in the interpretation sentence - 'lift = 1.67 means butter buyers are 67 percent more likely than the base rate' - and in naming the Apriori property: every subset of a frequent itemset is frequent.",
            },
            keyTerms: [
              { term: "Support", definition: "The fraction of transactions containing all items of the rule (X and Y together)." },
              { term: "Confidence", definition: "support(X and Y) / support(X): the conditional probability of Y in baskets that contain X." },
              { term: "Lift", definition: "confidence divided by support(Y); the multiplier over Y's base rate, above 1 indicating a real association." },
              { term: "Apriori property", definition: "Every subset of a frequent itemset is frequent - the pruning fact that makes level-wise search tractable." },
              { term: "Frequent itemset", definition: "A set of items whose support exceeds min_support." },
            ],
            examQuestions: [
              {
                q: "Define support, confidence and lift. For 100 baskets with bread in 40, butter in 30 and both in 20, evaluate bread -> butter fully, and explain why a high-confidence rule on milk (support 80, together 35) is nevertheless weak.",
                marks: 7,
                outline: [
                  "Write the three definitions.",
                  "Support = 20/100 = 0.20.",
                  "Confidence = 20/40 = 0.50.",
                  "Lift = 0.50 / 0.30 = 1.67 and interpret: 67 percent above base rate.",
                  "Note lift is symmetric while confidence is not (butter -> bread: 0.67).",
                  "Milk check: confidence 0.875 but lift 0.875/0.80 = 1.09 - near independence.",
                  "Conclusion: judge rules by lift (and support), not confidence alone; state the Apriori property for tractability.",
                ],
              },
              {
                q: "State the Apriori property and explain in one sentence how it speeds up frequent-itemset mining.",
                marks: 2,
              },
              {
                q: "A rule has support 0.003 and confidence 0.95. Give one reason to distrust it.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.6",
            title: "Anomaly detection approaches",
            body: [
              "Anomaly detection finds the rare rows that do not fit the pattern - the fraudulent transaction, the failing sensor, the intruding session - and it must usually work without labels, because anomalies are exactly the events nobody collected examples of. The framing is the inverse of supervised learning: instead of learning what each class looks like, you learn what normal looks like and score deviations from it. Three families dominate: statistical rules, density and distance methods, and isolation-based models.",
              "Statistical methods are the univariate baselines from Section 1.3 restated as detectors: flag values with |z| > 3 (three standard deviations from the mean) or outside the IQR fences Q1 - 1.5 x IQR and Q3 + 1.5 x IQR. They are transparent and instant but per-column - an amount of 2,00,000 is unremarkable alone and alarming combined with a 3 a.m. login from a new device, which univariate rules cannot see. Multivariate extensions use the Mahalanobis distance, which measures distance from the mean in units of the covariance matrix so correlated features are handled; its weakness is that the mean and covariance themselves are distorted by the very anomalies being hunted.",
              "Density and distance methods fix that by scoring against local neighbourhoods. DBSCAN's noise label (Section 3.3) is a free anomaly detector - points in no cluster are outliers by construction. The Local Outlier Factor (LOF) compares each point's local density with that of its k nearest neighbours: a point whose neighbours are dense while it sits in a sparse pocket gets LOF well above 1 and is flagged, which catches anomalies in datasets with multiple density regimes where one global threshold fails. The Isolation Forest is the production favourite: it builds random trees that split on random features at random values, and anomalies - being few and different - are isolated in far fewer splits than normal points. The anomaly score is the average path length: a fraudulent row might be isolated at depth 3 while ordinary rows need 12.",
              "Deployment realities complete the section. Without labels, evaluation is indirect: eyeball the top-ranked anomalies (are they actionable?), watch precision at the operating k, and track contamination - sklearn's contamination parameter sets the expected anomaly fraction (0.01-0.05 is typical) and calibrates the threshold. In production, the anomaly rate itself is a monitored metric: a sudden jump means either new fraud patterns or, just as often, data drift or a broken upstream feed (Unit V's monitoring section closes this loop). Autoencoders extend the family to complex data - train a network to reconstruct normal rows and score reconstruction error - but the isolation forest remains the first tool to reach for on tabular data.",
            ],
            bullets: [
              "Framing: learn what normal looks like and score deviations - labels for anomalies rarely exist.",
              "Statistical rules: |z| > 3 or outside IQR fences; univariate, transparent, blind to feature combinations.",
              "Mahalanobis distance: multivariate distance from the mean in covariance units; distorted when anomalies contaminate the estimates.",
              "DBSCAN noise label doubles as an anomaly detector - points in no cluster are outliers by construction.",
              "LOF: flags points whose local density is far below their neighbours' - handles multiple density regimes.",
              "Isolation forest: random splits isolate anomalies in fewer cuts; score = average path length (fraud at depth 3 vs normal at 12).",
              "Operation: set contamination (1-5 percent typical), inspect top-ranked anomalies, and monitor the anomaly rate itself for drift.",
            ],
            codeExample: {
              language: "python",
              caption: "Isolation forest anomaly scoring with sklearn.",
              code: `from sklearn.ensemble import IsolationForest

iso = IsolationForest(
    n_estimators=200,
    contamination=0.02,     # expected anomaly fraction: about 2 percent
    random_state=42)

iso.fit(X)
scores = iso.score_samples(X)   # higher = more normal; anomalies = short paths
flags = iso.predict(X)          # -1 anomaly, 1 normal

import numpy as np
top = np.argsort(scores)[:10]   # the 10 most anomalous rows
print("most anomalous row indices:", top)
print("flagged anomalies:", int((flags == -1).sum()),
      "of", len(flags), "rows")`,
            },
            diagram: {
              kind: "compare",
              title: "Rule-based vs model-based anomaly detection",
              caption:
                "Start with the transparent rules; graduate to LOF or isolation forest when combinations matter.",
              left: {
                heading: "Statistical / rule-based",
                items: [
                  "Z-score > 3 or IQR fences per column",
                  "Instant, transparent, auditable",
                  "Blind to feature combinations",
                  "Distorted when anomalies shift mean or sigma",
                ],
              },
              right: {
                heading: "Model-based (LOF, isolation forest)",
                items: [
                  "Score against local neighbours or random-split depth",
                  "Catch multivariate anomalies rules miss",
                  "Handle varying density (LOF) and scale (forest)",
                  "Need contamination setting and spot-checking",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Watch the anomaly rate itself",
              body: "In production, an anomaly detector that suddenly flags 15 percent of traffic is usually telling you the data changed - a new fraud pattern, a schema change upstream, or a broken sensor - not that fraud exploded. Monitoring the anomaly rate over time is the cheapest early-warning system in the whole pipeline.",
            },
            keyTerms: [
              { term: "Anomaly detection", definition: "Identifying rare rows that deviate strongly from the learned notion of normal, typically without labels." },
              { term: "Local Outlier Factor (LOF)", definition: "A score comparing a point's local density to its neighbours'; values well above 1 mark points in sparse pockets." },
              { term: "Isolation forest", definition: "An ensemble of random split trees; anomalies are isolated in fewer splits, and path length is the anomaly score." },
              { term: "Contamination", definition: "The expected fraction of anomalies, used to calibrate the detection threshold (sklearn parameter, commonly 0.01-0.05)." },
              { term: "Mahalanobis distance", definition: "Distance from the mean measured in units of the feature covariance, so correlated, differently scaled features are handled fairly." },
            ],
            examQuestions: [
              {
                q: "Explain three families of anomaly detection - statistical rules, density methods and isolation forests - with one worked number for each, and state how you would operate a detector in production without labels.",
                marks: 7,
                outline: [
                  "Frame the problem: no labels, learn normal, score deviations.",
                  "Statistical: flag |z| > 3; example - value 80 with mean 50, sigma 8 gives z = 3.75.",
                  "Density: DBSCAN noise points and LOF scores above 1; explain local density comparison.",
                  "Isolation forest: random splits; anomalies isolated at depth 3 vs 12 for normal rows; score = path length.",
                  "Note the multivariate advantage over per-column rules.",
                  "Production: set contamination (1-5 percent), inspect top anomalies, monitor the anomaly rate over time.",
                  "Mention a sudden rate jump signals drift or upstream breakage, not necessarily more fraud.",
                ],
              },
              {
                q: "Why does the isolation forest isolate anomalies faster than normal points?",
                marks: 2,
              },
              {
                q: "Give one weakness of using per-column z-score rules for fraud detection.",
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
      title: "Time Series, Text and Recommenders",
      summary:
        "Three applied toolkits: time series with trend-seasonality-noise decomposition, moving-average and exponential smoothing, ARIMA and rolling backtests; the text mining pipeline from tokenisation to a worked TF-IDF computation and sentiment analysis; and recommender systems from collaborative filtering to cold-start strategy and evaluation.",
      chapter: {
        number: "04",
        title: "Time Series, Text and Recommenders",
        intro:
          "Unit IV applies the earlier machinery to three data shapes that dominate industry work. Time series demand components, smoothing and honest rolling forecasts; text demands a pipeline from tokenisation to TF-IDF weights, computed here digit by digit, and a sentiment layer on top; recommender systems demand similarity over sparse rating matrices with a full user-user prediction calculation and a cold-start plan.",
        inOneBreath:
          "A series decomposes into trend + seasonality + noise, additively or multiplicatively; differencing and log transforms push it toward stationarity. Smooth noise with a moving average (window w trades smoothness for lag) or exponential smoothing s_t = alpha x_t + (1 - alpha) s_(t-1); worked: alpha 0.2 over sales 10, 12, 9 gives 10, 10.4, 10.12. ARIMA(p, d, q) adds autoregression on past values, d differencings and a moving average of past errors; evaluate by rolling-origin backtests, never random splits. Text flows raw -> tokenise -> normalise -> stopword removal -> TF-IDF: a word twice in 8 terms has TF 0.25, and appearing in 100 of 1,000 documents gives IDF log10(10) = 1, so the weight is 0.25; 'the' barely survives. Sentiment runs lexicon or model scoring with negation and 'but' handling. Recommenders: user-user collaborative filtering predicts by similarity-weighted neighbour ratings - (0.95 x 3 + 0.40 x 5) / 1.35 = 3.59 - content-based covers cold start, and Precision@K plus online A/B tests decide what works.",
        sections: [
          {
            number: "4.1",
            title: "Time series components and decomposition",
            body: [
              "A time series is data indexed by time, and its shape is explained by three superimposed components. Trend is the long-run direction - sales rising about 200 units per year as the market grows. Seasonality is a repeating pattern with fixed period - ice-cream sales peaking every June, website traffic dipping every weekend. Noise (or residual) is the leftover randomness no component explains. A fourth term, the cycle, describes multi-year swings without fixed period (business cycles); exam answers usually fold it into trend or list it separately with the note that, unlike seasonality, its spacing is irregular.",
              "Two composition models decide how the components combine. Additive: y = Trend + Seasonality + Noise, appropriate when seasonal swings stay the same size as the level grows. Multiplicative: y = Trend x Seasonality x Noise, appropriate when swings grow with the level - a series at 100 units varying by 10 and the same series at 1,000 units varying by 100 is multiplicative seasonality, and the fix is a log transform that turns multiplication into addition. Classical decomposition estimates the trend with a centred moving average, averages the detrended values by season to get seasonal indices, and subtracts both to expose the noise; STL is the modern robust alternative.",
              "Stationarity is the property ARIMA will demand in Section 4.3: a series whose mean, variance and autocorrelation do not change over time. Real series are rarely stationary - trends shift the mean, seasonality makes autocorrelation depend on the lag period, heteroscedasticity grows the variance. The two standard repairs are differencing (replace y_t with y_t - y_(t-1); a linear trend becomes a constant) and the log transform (stabilises multiplicative variance). The Augmented Dickey-Fuller test tests stationarity formally: a small p-value rejects the presence of a unit root, i.e. accepts stationarity.",
              "Diagnosis is visual before it is statistical. The line plot shows trend and rough seasonality at a glance; the seasonal subseries plot (one mini-series per month) exposes whether each month behaves consistently across years; the autocorrelation function (ACF) confirms periodicity - significant spikes at lags 12, 24, 36 in monthly data is seasonality with period 12 shouting. Worked reading: monthly ice-cream sales with a June index of 1.40 and a January index of 0.60 means June runs 40 percent above the annual average and January 40 percent below - exactly the numbers a seasonal index table reports.",
            ],
            bullets: [
              "Three components: trend (long-run direction), seasonality (fixed-period pattern), noise (leftover randomness); cycles are long but irregular.",
              "Additive model y = T + S + R when seasonal swings are constant; multiplicative y = T x S x R when swings scale with the level.",
              "Multiplicative fix: log transform converts multiplication to addition before decomposition or ARIMA.",
              "Classical decomposition: centred moving average for trend, seasonal indices from detrended averages, residual = what remains.",
              "Stationarity: constant mean, variance and autocorrelation; achieved by differencing (y_t - y_(t-1)) and log transforms.",
              "Augmented Dickey-Fuller test: small p-value supports stationarity.",
              "Worked seasonal indices: June 1.40 and January 0.60 on monthly ice-cream sales - plus 40 percent and minus 40 percent against the annual average.",
            ],
            table: {
              caption: "Additive vs multiplicative composition.",
              headers: ["Aspect", "Additive", "Multiplicative"],
              rows: [
                ["Model", "y = T + S + R", "y = T x S x R"],
                ["Seasonal swing vs level", "constant size", "grows with the level"],
                ["Typical example", "steady weekday traffic", "sales that boom in absolute terms"],
                ["Usual repair", "decompose directly", "log transform first, then decompose"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Additive decomposition - the observed series is the sum of the layers",
              caption:
                "Read from the bottom up: trend plus seasonal plus noise rebuilds the observed line.",
              layers: [
                { label: "Observed series", note: "what you plot first" },
                { label: "Trend", note: "long-run direction, from a centred moving average" },
                { label: "Seasonality", note: "fixed-period pattern, from seasonal indices" },
                { label: "Noise", note: "residual after removing both" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "The recurring 2-mark question is additive vs multiplicative. Anchor both answers in the same test: are the seasonal swings the same size at low and high levels of the series? Constant -> additive; growing proportionally -> multiplicative, and log-transform before modelling. Adding the equation pair y = T + S + R and y = T x S x R completes the marks.",
            },
            keyTerms: [
              { term: "Trend", definition: "The long-run level direction of a series, free of seasonal wiggles." },
              { term: "Seasonality", definition: "A pattern that repeats with a fixed period, such as daily, weekly or yearly." },
              { term: "Stationarity", definition: "Constant mean, variance and autocorrelation over time - the precondition ARIMA requires." },
              { term: "Differencing", definition: "Replacing y_t by y_t - y_(t-1); one differencing removes a linear trend." },
              { term: "Seasonal index", definition: "A per-season multiplier or offset describing how far that season sits from the annual average." },
            ],
            examQuestions: [
              {
                q: "Explain the components of a time series, distinguish the additive and multiplicative models with one identifying test, and describe how classical decomposition estimates each component.",
                marks: 7,
                outline: [
                  "Define trend, seasonality, noise (and cycle as the irregular long wave).",
                  "Write the additive model y = T + S + R and the multiplicative y = T x S x R.",
                  "Give the identifying test: constant swing size -> additive; swings scaling with level -> multiplicative.",
                  "Multiplicative repair: log transform makes components additive.",
                  "Decomposition steps: centred moving average for trend; seasonal indices from detrended averages; residual last.",
                  "Worked indices: June 1.40, January 0.60 interpretation.",
                  "Close with stationarity, differencing and the ADF test as the bridge to ARIMA.",
                ],
              },
              {
                q: "What is stationarity, and which two transformations push a series toward it?",
                marks: 2,
              },
              {
                q: "Monthly sales show seasonal swings of about 10 units whether the level is 100 or 1,000. Which composition model fits, and why?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.2",
            title: "Smoothing: moving average and exponential smoothing",
            body: [
              "Smoothing trades responsiveness for stability: by averaging away noise, the underlying trend becomes visible. The simple moving average (SMA) with window w replaces each point by the mean of the last w observations. Worked computation on daily sales 10, 12, 9, 11, 13, 15, 12 with w = 3: the first 3-point average is (10 + 12 + 9)/3 = 10.33, then (12 + 9 + 11)/3 = 10.67, then 11.0, then 13.0, then 13.33 - five smoothed values replacing seven raw ones, with the noise flattened and the rise clearly visible. The window is a dial: w = 7 suits data with weekly rhythm (and removes it, which may or may not be wanted), w = 30 shows the monthly shape.",
              "Every moving average pays a lag tax: a smoothed series turns later than the raw one, and wider windows smooth more but lag more - a w = 3 average responds to a level shift after roughly (w - 1)/2 = 1 extra period, a w = 7 average after 3. Centred moving averages halve this lag but cannot be computed for the most recent points, which is exactly the points a forecaster cares about. Weighted moving averages soften the trade-off by giving recent observations larger weights while keeping the averaging form.",
              "Exponential smoothing solves the lag-and-window awkwardness with one recursive formula: s_t = alpha x_t + (1 - alpha) s_(t-1), where alpha in (0, 1) is the smoothing constant - each new value is a blend of the newest observation and everything remembered so far. Worked run with alpha = 0.2 over sales 10, 12, 9, 11: s1 = 10; s2 = 0.2 x 12 + 0.8 x 10 = 10.4; s3 = 0.2 x 9 + 0.8 x 10.4 = 10.12; s4 = 0.2 x 11 + 0.8 x 10.12 = 10.30. A small alpha produces a heavy, stable line; a large alpha tracks the data closely. Holt's method adds a trend equation and Holt-Winters adds a seasonal one - the classic production forecaster before ARIMA and ML models.",
              "Know what smoothing is not: a smoothed line is a description of the past, not a forecast model. The naive forecast 'tomorrow equals the last smoothed value' works only when the level itself is flat; a trending series will be systematically under-predicted because the average trails the trend. Smoothing earns its place in preparation and presentation - cleaned inputs to models, trend lines on dashboards - while genuine forecasting needs the models of Section 4.3, or at minimum Holt-Winters, which forecasts by extrapolating its fitted trend and seasonal components.",
            ],
            bullets: [
              "SMA(w): each point becomes the mean of the last w observations; worked w = 3 on 10, 12, 9, 11, 13, 15, 12 gives 10.33, 10.67, 11.0, 13.0, 13.33.",
              "Window dial: w = 7 for weekly rhythm, w = 30 for monthly shape; wider = smoother but laggier.",
              "Lag tax: a w = 3 average trails a level shift by about 1 period, w = 7 by about 3.",
              "Exponential smoothing: s_t = alpha x_t + (1 - alpha) s_(t-1); worked alpha = 0.2 gives 10, 10.4, 10.12, 10.30.",
              "alpha dial: small alpha = heavy smoothing and slow response; large alpha = close tracking.",
              "Holt adds trend; Holt-Winters adds trend + seasonality - the classic production forecaster.",
              "A smoothed line describes the past; forecasting a trending series from its last smoothed value under-predicts systematically.",
            ],
            codeExample: {
              language: "python",
              caption: "Both smoothers in pandas - the worked numbers reproduced.",
              code: `import pandas as pd

s = pd.Series([10, 12, 9, 11, 13, 15, 12])

# Simple moving average, window 3
sma = s.rolling(window=3).mean()
print(sma.round(2).tolist())      # [nan, nan, 10.33, 10.67, 11.0, 13.0, 13.33]

# Exponential smoothing with alpha = 0.2
# (pandas' span = 2/alpha - 1 -> alpha 0.2 is span 9)
ema = s.ewm(alpha=0.2, adjust=False).mean()
print(ema.round(2).tolist())      # [10.0, 10.4, 10.12, 10.3, ...]

# Rolling + EMA side by side on a plot reveals the lag difference`,
            },
            diagram: {
              kind: "flow",
              title: "Choosing and applying a smoother",
              caption:
                "The lag check is the step most students forget - and the one examiners ask about.",
              steps: [
                { label: "Plot the raw series", note: "noise level and rhythm visible" },
                { label: "Pick window or alpha", note: "w = 7 weekly, alpha 0.1-0.3 typical" },
                { label: "Compute the smoothed line", note: "rolling mean or recursive EMA" },
                { label: "Overlay on the raw plot", note: "check smoothness vs lag" },
                { label: "Adjust and re-plot", note: "smoother line, acceptable lag" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Examiners give short series precisely so you can compute by hand. Practise the recursive EMA until three steps take a minute: multiply the new observation by alpha, the previous smoothed value by (1 - alpha), add. Show every substitution - s2 = 0.2 x 12 + 0.8 x 10 = 10.4 - because the method mark lives in the substitution, not the answer.",
            },
            keyTerms: [
              { term: "Moving average", definition: "Replacing each observation by the mean of the last w observations to suppress noise." },
              { term: "Smoothing constant (alpha)", definition: "The weight on the newest observation in exponential smoothing, between 0 and 1." },
              { term: "Exponential smoothing", definition: "The recursion s_t = alpha x_t + (1 - alpha) s_(t-1), blending new data with accumulated memory." },
              { term: "Holt-Winters", definition: "Exponential smoothing extended with trend and seasonality equations - a complete forecasting method." },
              { term: "Lag", definition: "The delay with which a smoothed series registers a genuine level shift; grows with the window width." },
            ],
            examQuestions: [
              {
                q: "Compute the 3-point moving average and the exponential smoothing (alpha = 0.2) of the series 10, 12, 9, 11, and compare the two smoothers' responsiveness.",
                marks: 7,
                outline: [
                  "SMA values: (10+12+9)/3 = 10.33; (12+9+11)/3 = 10.67; (9+11+13)/3 if extended = 11.0.",
                  "EMA initialisation: s1 = 10.",
                  "s2 = 0.2 x 12 + 0.8 x 10 = 10.4.",
                  "s3 = 0.2 x 9 + 0.8 x 10.4 = 10.12.",
                  "s4 = 0.2 x 11 + 0.8 x 10.12 = 10.30.",
                  "Compare: SMA averages a fixed window and jumps stepwise; EMA forgets gradually.",
                  "Lag note: wider window or smaller alpha = smoother but laggier; neither is a forecast for a trending series.",
                ],
              },
              {
                q: "What does a larger alpha do to an exponential-smoothing line?",
                marks: 2,
              },
              {
                q: "Why is forecasting a strongly trending series with its last moving-average value a mistake?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.3",
            title: "ARIMA basics and honest backtesting",
            body: [
              "ARIMA(p, d, q) - AutoRegressive Integrated Moving Average - models a series from its own past. The three letters: AR(p) regresses the current value on the previous p values (an AR(1) is y_t = c + phi y_(t-1) + e_t, and phi = 0.8 means 80 percent of each value carries into the next - strong persistence); I(d) is the number of differencings needed to reach stationarity (d = 1 removes a linear trend); MA(q) models the current value as a mix of the previous q forecast errors, correcting systematic recent misses. ARIMA(1, 1, 1) - differenced once, one autoregressive term, one error-correction term - is the most-cited starting specification in textbooks.",
              "Order selection has two standard routes. The ACF/PACF route reads diagnostic plots: a slowly decaying ACF with a PACF cut off after lag p suggests AR(p); the reverse suggests MA(q). The information-criterion route fits a small grid of candidate orders and picks the combination minimising AIC or BIC, which balances fit against parameter count. For seasonality, SARIMA adds seasonal AR, I and MA terms with a seasonal period (P, D, Q, s) - monthly data with period 12 is SARIMA(1,1,1)(1,1,1,12) territory. Exogenous variables extend the family to ARIMAX/Regression-with-ARIMA-errors when drivers like promotions or weather are available.",
              "Backtesting is the honest evaluation of a forecast, and it inverts the usual cross-validation: time moves forward only. The rolling-origin scheme: train on observations 1-100, forecast 101-110, record errors; then train on 1-110, forecast 111-120; roll forward until the data ends. Score the pooled errors with MAE, RMSE and MAPE (mean absolute percentage error - scale-free, so 8 percent MAPE reads directly as 'typically off by 8 percent'). Never use random k-fold on a time series: folds would train on the future to predict the past, and the resulting scores are fiction. Also report against baselines - the naive forecast (tomorrow = today) and the seasonal naive (this month = same month last year) - because a complex model that loses to the naive baseline is a liability, not an achievement.",
              "The workflow in practice: plot and decompose; difference and log-transform until the ADF test accepts stationarity; read ACF/PACF or grid-search orders; fit and check residuals (an ARIMA that did its job leaves white-noise residuals - a Ljung-Box test with a large p-value confirms it); backtest with rolling origin against the naive baselines; retrain on a schedule because parameters decay as the world moves. When strong exogenous drivers exist or non-linear interactions matter, gradient-boosted models with lag and rolling-window features often beat pure ARIMA - the classic production upgrade path.",
            ],
            bullets: [
              "ARIMA(p, d, q): AR on the past p values, I for d differencings, MA on the past q errors.",
              "AR(1) with phi = 0.8: each value carries 80 percent of the previous one - persistent series.",
              "Order selection: ACF/PACF shapes, or a grid search minimising AIC/BIC.",
              "SARIMA adds seasonal (P, D, Q, s) terms; monthly data uses s = 12.",
              "Backtesting: rolling origin - train to t, forecast the next window, slide forward; never random k-fold.",
              "Metrics: MAE, RMSE, MAPE; worked reading - MAPE 8 percent means typical error 8 percent of the level.",
              "Always beat the naive and seasonal-naive baselines, and check residuals for white noise (Ljung-Box).",
            ],
            table: {
              caption: "A rolling-origin backtest of a monthly sales forecast.",
              headers: ["Fold", "Train window", "Forecast window", "MAPE"],
              rows: [
                ["1", "months 1-36", "months 37-39", "0.07"],
                ["2", "months 1-39", "months 40-42", "0.09"],
                ["3", "months 1-42", "months 43-45", "0.08"],
                ["4", "months 1-45", "months 46-48", "0.10"],
                ["Pooled", "-", "-", "0.085"],
                ["Naive baseline", "yesterday = today", "same windows", "0.13"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "The ARIMA workflow",
              caption:
                "Residual diagnosis closes the loop - leftover structure means the orders are wrong.",
              steps: [
                { label: "Plot and decompose", note: "trend, seasonality, variance" },
                { label: "Difference / log transform", note: "until ADF accepts stationarity" },
                { label: "Identify orders", note: "ACF/PACF or AIC grid search" },
                { label: "Fit the model", note: "ARIMA(p, d, q) or SARIMA" },
                { label: "Diagnose residuals", note: "white noise? Ljung-Box p large" },
                { label: "Backtest and deploy", note: "rolling origin vs naive baseline" },
              ],
            },
            callout: {
              type: "warning",
              title: "Random folds on time series are fiction",
              body: "If a question involves time-ordered data, any evaluation that shuffles rows into random folds trains on the future and predicts the past. The full-credit answer names rolling-origin backtesting (walk-forward validation), reports MAPE against the naive baseline, and states explicitly why random k-fold is invalid here - that last sentence is the mark most answers lose.",
            },
            keyTerms: [
              { term: "AR(p)", definition: "The autoregressive part: the current value regressed on the previous p values of the series." },
              { term: "MA(q)", definition: "The moving-average part: the current value modelled partly from the previous q forecast errors." },
              { term: "Integration (d)", definition: "The number of differencings applied to reach stationarity before fitting the AR and MA parts." },
              { term: "Rolling-origin backtest", definition: "Walk-forward evaluation: train to a cut, forecast the next window, slide the origin forward, pool the errors." },
              { term: "MAPE", definition: "Mean absolute percentage error; scale-free, so 0.08 reads as typically 8 percent off the true level." },
            ],
            examQuestions: [
              {
                q: "Explain the three components of ARIMA(p, d, q), describe how to select the orders, and outline a rolling-origin backtest for a monthly series including the metrics and the baselines you must beat.",
                marks: 7,
                outline: [
                  "Define AR(p) with the AR(1) equation y_t = c + phi y_(t-1) + e_t and phi = 0.8 persistence reading.",
                  "Define I(d): differencing count for stationarity; d = 1 removes a linear trend.",
                  "Define MA(q): error correction from the previous q forecast errors.",
                  "Order selection: ACF/PACF shapes and AIC/BIC grid search; SARIMA for seasonality.",
                  "Backtest scheme: train 1-100, forecast 101-110, slide the origin forward.",
                  "Metrics: MAE, RMSE, MAPE (8 percent = typically 8 percent off).",
                  "Baselines and diagnostics: beat naive/seasonal-naive; residuals should be white noise (Ljung-Box).",
                ],
              },
              {
                q: "Why is random k-fold cross-validation invalid for time series data?",
                marks: 2,
              },
              {
                q: "An ARIMA model's residuals show significant autocorrelation at lag 3. What does this indicate?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.4",
            title: "The text mining pipeline and TF-IDF",
            body: [
              "Text cannot enter a model as characters; it must become numbers, and the pipeline that converts it is fixed enough to be an exam staple. The stages: collect and clean (strip HTML, fix encoding, remove punctuation where it carries no signal); tokenise (split into words or sub-words - 'good service' becomes ['good', 'service']); normalise (lowercase; stemming chops suffixes - 'running', 'runs' both become 'run' - while lemmatisation maps to dictionary forms, 'better' to 'good', more slowly but more cleanly); remove stopwords (the, is, and - high-frequency words with no topic content); and finally vectorise into a document-term matrix.",
              "The weighting scheme that made text mining practical is TF-IDF, which scores each word-document pair by Term Frequency times Inverse Document Frequency. Worked computation: a document of 8 words contains 'data' twice, so TF = 2/8 = 0.25. The corpus holds N = 1,000 documents and 'data' appears in 100 of them, so IDF = log10(1000/100) = log10(10) = 1.0, and the TF-IDF weight is 0.25 x 1.0 = 0.25. Now the contrast word: 'the' appears in 990 of 1,000 documents, so IDF = log10(1000/990) = 0.0044 - even if 'the' occurs five times in the document (TF = 0.625), its weight is 0.0028, effectively zero. IDF is the mechanism that automatically demotes stopwords without a hand-built list.",
              "Bag-of-words and TF-IDF both discard word order - 'dog bites man' and 'man bites dog' weigh identically - which is the standard criticism and the standard fix: n-grams restore local order ('not good' as a bigram is worth a hundred unigrams), and dense embeddings (word2vec, and later transformer encodings) capture semantics, so 'excellent' and 'fantastic' land near each other instead of being two unrelated columns. For a 7-mark answer, present the pipeline, compute one TF-IDF weight, and close with the n-gram/embedding extension - that is the full arc examiners expect.",
              "In code, sklearn's TfidfVectorizer performs tokenisation, normalisation, stopword removal and TF-IDF weighting in one call: TfidfVectorizer(max_features=5000, stop_words='english', ngram_range=(1, 2)) builds unigram-and-bigram features capped at 5,000 columns by corpus frequency. The output is a sparse matrix - a 50,000-document corpus with 5,000 features would hold 250 million cells, of which typically fewer than 1 percent are nonzero, so density is wasteful and sparse storage is the norm. Fit the vectoriser on training documents only and transform the test set, exactly like a scaler: a vectoriser fitted on all data lets test-set vocabulary leak into training columns.",
            ],
            bullets: [
              "Pipeline: clean -> tokenise -> normalise (stem/lemmatise) -> stopword removal -> vectorise.",
              "Stemming chops suffixes ('running' -> 'run'); lemmatisation maps to dictionary forms ('better' -> 'good') - cleaner but slower.",
              "TF = term count / document length; worked 'data': 2/8 = 0.25.",
              "IDF = log10(N / df); worked: 1,000 documents, 'data' in 100 -> log10(10) = 1.0; 'the' in 990 -> 0.0044.",
              "TF-IDF = TF x IDF; worked weights 0.25 for 'data' vs 0.0028 for 'the' - stopwords fall out automatically.",
              "Bag-of-words loses order; n-grams restore local order ('not good'), embeddings restore semantics.",
              "Fit the vectoriser on training documents only; store the result sparse (typically < 1 percent nonzero cells).",
            ],
            codeExample: {
              language: "python",
              caption: "TF-IDF by hand and with sklearn.",
              code: `import math

# Worked TF-IDF by hand
tf = 2 / 8                                  # 'data' twice in 8 words
idf = math.log10(1000 / 100)                # 100 of 1000 docs contain it
print("TF-IDF('data') =", round(tf * idf, 4))    # 0.25

tf_the = 5 / 8
idf_the = math.log10(1000 / 990)
print("TF-IDF('the') =", round(tf_the * idf_the, 4))  # 0.0028

# The production one-liner
from sklearn.feature_extraction.text import TfidfVectorizer
vec = TfidfVectorizer(max_features=5000,
                      stop_words="english",
                      ngram_range=(1, 2))
X_docs = vec.fit_transform(train_documents)   # fit on TRAIN only
X_test_docs = vec.transform(test_documents)`,
            },
            diagram: {
              kind: "pipeline",
              title: "From raw text to a weighted matrix",
              caption:
                "Every stage discards information - each one is a decision you can be asked to justify.",
              stages: [
                { label: "Clean", note: "HTML, encoding, punctuation" },
                { label: "Tokenise", note: "text -> word list" },
                { label: "Normalise", note: "lowercase, stem or lemmatise" },
                { label: "Stopword removal", note: "or let IDF demote them" },
                { label: "TF-IDF vectorise", note: "sparse document-term matrix" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "TF-IDF questions are arithmetic: state TF = count/length and IDF = log(N/df), then compute one weight. Use log base 10 by default and say so - examiners accept ln or log10 when you declare it. The distinguishing sentence is the interpretation: IDF downweights words that appear everywhere, which is why 'the' scores almost nothing without any stopword list.",
            },
            keyTerms: [
              { term: "Tokenisation", definition: "Splitting text into words or sub-word units - the atoms every later stage consumes." },
              { term: "Stemming / lemmatisation", definition: "Reducing word forms to a common base: stemming by suffix-chopping, lemmatisation by dictionary lookup." },
              { term: "TF-IDF", definition: "Term frequency times inverse document frequency; weights words that matter in a document and demotes words common everywhere." },
              { term: "Bag of words", definition: "Representing a document as an unordered set of word counts; word order is lost." },
              { term: "Sparse matrix", definition: "A matrix stored by its few nonzero entries; document-term matrices are typically under 1 percent dense." },
            ],
            examQuestions: [
              {
                q: "Explain the text mining pipeline stage by stage, and compute the TF-IDF weight of 'data' (2 occurrences in 8 words, present in 100 of 1,000 documents) and of 'the' (5 occurrences, present in 990 documents). Interpret the difference.",
                marks: 7,
                outline: [
                  "List the stages: clean, tokenise, normalise, stopword removal, vectorise.",
                  "State TF = count / document length: 'data' -> 2/8 = 0.25.",
                  "State IDF = log10(N/df): 'data' -> log10(1000/100) = 1.0.",
                  "TF-IDF('data') = 0.25 x 1.0 = 0.25.",
                  "Compute 'the': TF = 0.625, IDF = log10(1000/990) = 0.0044, weight 0.0028.",
                  "Interpret: IDF demotes corpus-common words; stopwords fall out without a list.",
                  "Extensions: n-grams for order, embeddings for semantics; fit the vectoriser on train only.",
                ],
              },
              {
                q: "Why does bag-of-words representation treat 'dog bites man' and 'man bites dog' identically, and what is the standard fix?",
                marks: 2,
              },
              {
                q: "Distinguish stemming from lemmatisation with one example each.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.5",
            title: "Sentiment analysis",
            body: [
              "Sentiment analysis classifies the polarity of text - positive, negative or neutral, sometimes graded on a scale - and it is the most commercially deployed text task: brands score millions of reviews, tweets and tickets daily. Three technical generations coexist. Lexicon methods (VADER, SentiWordNet) score each word from a curated dictionary and combine with rules; classical ML trains logistic regression or Naive Bayes over TF-IDF features (Section 4.4's pipeline feeds directly in); transformer models fine-tune BERT-class encoders and hold the current accuracy ceiling at the price of compute and interpretability.",
              "The rule-based layer is worth mastering because it is examinable arithmetic and because every production system keeps a lexicon component. Worked scoring of 'Great battery life, but poor camera': the lexicon gives great +2, poor -2; the adversative 'but' shifts weight to the clause after it (a common rule weights the post-'but' clause 2-3x); the pre-'but' positive clause gets discounted, so the net score lands mildly negative or mixed despite one glowing phrase. Negation flips polarity within a window: 'not good' scores the good as negative. Emojis carry signal (thumbs-up ≈ +1.5 in VADER's dictionary) and should not be stripped in social-media text.",
              "Domain fit is where naive deployments fail. 'Unpredictable' is negative for a car's steering and positive for a film's plot; 'long' praises battery life and condemns wait times; 'works like a charm' in a technical review means nothing to a general lexicon. The remedies: domain lexicons (add or reweight terms from your own labelled data), aspect-based sentiment analysis (score battery, camera and price separately rather than one verdict per review - 'great phone, terrible battery' is not a neutral review), and quantifying class balance - review corpora are typically 5-star skewed, so macro-F1 across classes, not accuracy, is the honest headline metric.",
              "The evaluation and deployment discipline mirrors the rest of the unit: split by time or product, not randomly, so the model is tested on future text it has never seen; report per-class precision and recall because a model that nails the dominant class and misses every complaint hides inside a flattering accuracy; and monitor drift - slang, sarcasm and new product names degrade lexicon and model alike, so the confusion matrix needs a scheduled refresh. Sarcasm ('oh great, another update that broke everything') remains the standing weakness of every generation and the honest answer to 'what are the limitations?' in any exam or interview.",
            ],
            bullets: [
              "Three generations: lexicon rules (VADER), TF-IDF + classical ML, fine-tuned transformers - rising accuracy, falling interpretability.",
              "Lexicon arithmetic: 'Great battery life, but poor camera' - great +2, poor -2, with 'but' shifting weight to the post-clause.",
              "Negation handling flips polarity inside a window: 'not good' scores negative.",
              "Keep emojis in social text - they carry measured polarity in lexicons like VADER.",
              "Domain shift: 'unpredictable' praises plots and damns steering; build domain lexicons from labelled data.",
              "Aspect-based sentiment scores battery, camera and price separately - 'great phone, terrible battery' is not neutral.",
              "Evaluate with macro-F1 on skewed review data, split by time, and monitor drift (slang, sarcasm, new products).",
            ],
            codeExample: {
              language: "python",
              caption: "A minimal lexicon sentiment scorer with negation and 'but'.",
              code: `LEXICON = {"great": 2, "good": 1, "poor": -2, "bad": -2, "terrible": -3}
NEGATIONS = {"not", "never", "no"}

def sentiment(text):
    words = text.lower().replace(",", "").split()
    score, negate, but_seen = 0, False, False
    for w in words:
        if w in NEGATIONS:
            negate = True
            continue
        if w == "but":            # weight shifts to what follows
            but_seen, negate = True, False
            continue
        v = LEXICON.get(w, 0)
        if negate:
            v, negate = -v, False
        if but_seen:
            v *= 2                # post-'but' clause counts double
        score += v
    return score

print(sentiment("Great battery life, but poor camera"))  # -2 (mixed, leaning negative)
print(sentiment("not good at all"))                      # -1 (negation flips)`,
            },
            diagram: {
              kind: "flow",
              title: "Lexicon sentiment scoring of one review",
              caption:
                "The negation and adversative steps are what separate a toy scorer from a useful one.",
              steps: [
                { label: "Tokenise and lower-case", note: "keep emojis for social text" },
                { label: "Look up word scores", note: "lexicon values per term" },
                { label: "Apply negation flips", note: "'not good' -> negative" },
                { label: "Apply 'but' weighting", note: "post-clause counts more" },
                { label: "Sum to a polarity", note: "positive / mixed / negative" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Sentiment questions reward the two rule mechanisms: negation flipping and adversative ('but') weighting. Score a given sentence term by term, show the flip or the weight shift explicitly, and end with the domain-shift caveat ('unpredictable' changes sign by domain) - that caveat is the sentence that turns a 3-mark answer into a 5-mark one.",
            },
            keyTerms: [
              { term: "Sentiment analysis", definition: "Classifying text polarity (positive/negative/neutral) or intensity, usually per review, tweet or ticket." },
              { term: "Lexicon method", definition: "Scoring text by summing dictionary values of its words, adjusted by negation and adversative rules." },
              { term: "Aspect-based sentiment", definition: "Scoring sentiment per product aspect (battery, camera, price) instead of one verdict per document." },
              { term: "Negation handling", definition: "Flipping polarity when a negation word appears within a small window before a scored term." },
              { term: "Macro-F1", definition: "The unweighted mean of per-class F1 scores; the honest metric when sentiment classes are skewed." },
            ],
            examQuestions: [
              {
                q: "Explain the three approaches to sentiment analysis, then score 'Great battery life, but poor camera' with a lexicon method, showing negation and 'but' handling. State one domain-shift risk.",
                marks: 7,
                outline: [
                  "Contrast lexicon rules, TF-IDF + classical ML, and transformer fine-tuning.",
                  "Assign lexicon values: great +2, poor -2.",
                  "Explain adversative weighting: the post-'but' clause counts more (say 2x).",
                  "Compute: pre-but great contributes +2 (discounted), poor contributes -4 (weighted) -> net negative.",
                  "Show a negation example: 'not good' flips +1 to -1.",
                  "Note emojis as signal in social text.",
                  "Domain-shift caveat: 'unpredictable' is positive for films, negative for steering; propose domain lexicons or aspect-based scoring.",
                ],
              },
              {
                q: "Why is accuracy a poor headline metric for a review corpus that is 80 percent positive?",
                marks: 2,
              },
              {
                q: "What is aspect-based sentiment analysis, and what one review would it score differently from plain sentiment analysis?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.6",
            title: "Recommender systems: collaborative filtering, content and cold start",
            body: [
              "Recommenders predict what a user will value from the items they have not touched. Two paradigms split the field. Collaborative filtering uses only the interaction matrix - who rated, bought or watched what - and recommends from the behaviour of similar users or items; it needs no item metadata at all. Content-based filtering recommends items whose features resemble what a user already liked - a user who watched three war documentaries gets war documentaries - which works from day one for new items but can only ever echo the user's existing taste. Hybrid systems blend both, exactly how production recommenders are built.",
              "User-user collaborative filtering, worked: predict A's rating for item 4 from neighbours B and C. Similarities from overlapping ratings: sim(A, B) = 0.95 and sim(A, C) = 0.40 (cosine or Pearson over the co-rated items). B rated item 4 as 3, C rated it 5. The similarity-weighted prediction is (0.95 x 3 + 0.40 x 5) / (0.95 + 0.40) = (2.85 + 2.0) / 1.35 = 4.85 / 1.35 = 3.59. Two refinements make it production-grade: mean-centre each neighbour's ratings before weighting (B is a harsh grader overall, so his 3 means more than it reads), and keep only the top-N most similar neighbours to suppress noisy long tails.",
              "Item-item collaborative filtering flips the axis: 'customers who bought this also bought' - Amazon's original engine. Item-item similarity is computed over the users who interacted with both items, is more stable than user similarity (item tastes change slower than user moods), and precomputed item-item tables scale to millions of users. Matrix factorisation generalises both: factorise the rating matrix R into user factors U and item factors V such that R is approx U V^T, learning latent taste dimensions (a factor might mean 'art-film preference'); SVD and ALS are the standard solvers, and the dot product U_u . V_i is the predicted rating - the technique behind the Netflix Prize era.",
              "Cold start and evaluation close the loop. New users have no history: fall back to popularity ranking, demographic defaults, or onboarding questions ('pick five shows you like'). New items have no interactions: content-based features recommend them immediately, which is the strongest argument for hybrids. Evaluation has two layers: offline metrics - RMSE for rating prediction, Precision@K and Recall@K for top-K recommendation, plus coverage and diversity so the system is not recommending the same hit to everyone - and online A/B tests, because offline gains routinely fail to translate into clicks; the deployed winner is decided by the experiment, not the notebook.",
            ],
            bullets: [
              "Collaborative filtering: recommendations from the interaction matrix alone - user-user, item-item, or matrix factorisation.",
              "Content-based: matches item features to a user profile; works for brand-new items, risks taste echo chambers.",
              "Worked user-user prediction: (0.95 x 3 + 0.40 x 5) / (0.95 + 0.40) = 3.59 - similarity-weighted neighbour average.",
              "Refinements: mean-centre neighbour ratings, keep top-N neighbours, use cosine or Pearson similarity.",
              "Item-item is Amazon's engine: more stable than user-user, precomputable tables, scales to millions.",
              "Matrix factorisation learns latent factors: R is approx U V^T; predict U_u . V_i (SVD/ALS, Netflix-Prise era).",
              "Cold start: popularity/onboarding for new users, content features for new items; evaluate offline with Precision@K and online with A/B tests.",
            ],
            table: {
              caption: "Collaborative vs content-based filtering.",
              headers: ["Aspect", "Collaborative filtering", "Content-based"],
              rows: [
                ["Input", "user-item interaction matrix", "item features + user profile"],
                ["New users", "cold start problem", "works with a profile or defaults"],
                ["New items", "no interactions -> invisible", "recommended immediately"],
                ["Taste breadth", "finds unexpected matches", "echoes existing taste"],
                ["Scaling trick", "item-item tables, matrix factorisation", "feature vectors are cheap"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Choosing a recommendation strategy",
              caption:
                "The interaction matrix's shape decides the paradigm - hybrids end up covering all four corners.",
              start: "What does the data look like?",
              branches: [
                { label: "Rich interaction history", outcome: "Collaborative filtering: user-user or item-item", good: true },
                { label: "New items, no interactions", outcome: "Content-based features recommend from day one", good: true },
                { label: "Sparse matrix but rich metadata", outcome: "Hybrid: CF core plus content backfill", good: true },
                { label: "Nothing but popularity counts", outcome: "Popularity ranking - honest fallback, zero personalisation", good: false },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "The worked user-user prediction is the exam's favourite recommender computation: write the weighted-average formula, substitute similarities and ratings, divide by the similarity sum. Then volunteer the mean-centring refinement - 'harsh graders' ratings are mean-centred before weighting' - because that single sentence distinguishes a formula recall from a genuine understanding.",
            },
            keyTerms: [
              { term: "Collaborative filtering", definition: "Recommending from patterns in the user-item interaction matrix, without item metadata." },
              { term: "Content-based filtering", definition: "Recommending items whose features match a user's profile of previously liked items." },
              { term: "Cold start", definition: "The cold-start problem: no interaction history for a new user or item, blocking pure collaborative methods." },
              { term: "Matrix factorisation", definition: "Approximating the rating matrix as a product of user and item factor matrices; the dot product predicts a rating." },
              { term: "Precision@K", definition: "Of the K items recommended, the fraction the user actually engaged with - the core offline metric for top-K systems." },
            ],
            examQuestions: [
              {
                q: "Explain collaborative and content-based filtering, and compute user A's predicted rating for item 4 given sim(A,B) = 0.95 with B's rating 3, and sim(A,C) = 0.40 with C's rating 5. State how cold start is handled for new users and new items.",
                marks: 7,
                outline: [
                  "Define collaborative filtering: interaction matrix only; content-based: item features vs user profile.",
                  "Write the prediction: (sim_B x r_B + sim_C x r_C) / (sim_B + sim_C).",
                  "Substitute: (0.95 x 3 + 0.40 x 5) / 1.35 = 4.85 / 1.35 = 3.59.",
                  "Refinement: mean-centre each neighbour's ratings before weighting.",
                  "Cold start, new users: popularity, demographics or onboarding questions.",
                  "Cold start, new items: content-based features recommend immediately - the hybrid argument.",
                  "Evaluation: Precision@K offline, A/B tests online; mention matrix factorisation as the scaled generalisation.",
                ],
              },
              {
                q: "Why does a purely collaborative recommender never surface a brand-new item?",
                marks: 2,
              },
              {
                q: "Distinguish user-user from item-item collaborative filtering, and state which is more stable in production.",
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
      title: "Deployment, Storytelling and Ethics",
      summary:
        "Getting models out of notebooks and keeping them honest: pipelines and model selection with reproducibility, batch versus real-time deployment, monitoring and drift with a PSI computation, honest visualisation and storytelling with data, fairness, bias and privacy with k-anonymity, and two capstone case studies.",
      chapter: {
        number: "05",
        title: "Deployment, Storytelling and Ethics",
        intro:
          "Unit V is the professional close: the parts of a data science job that decide whether a model matters. It packages the modelling work into reproducible pipelines, chooses between batch scoring and real-time APIs, watches deployed models for drift with a worked PSI calculation, presents results with charts that do not lie and stories that move decisions, audits fairness and privacy with concrete definitions like k-anonymity, and rehearses two end-to-end capstone cases that unify every earlier unit.",
        inOneBreath:
          "Wrap preprocessing and model in one Pipeline so cross-validation refits every step; compare candidates on identical folds and metrics; fix seeds, pin versions and track data - reproducibility is trust. Deploy as nightly batch scoring when staleness of hours is fine, or a real-time API with a p99 latency budget when decisions are immediate. Monitor inputs, predictions and outcomes: PSI = sum (actual - expected) x ln(actual/expected) above 0.25 means major drift; data drift shifts inputs, concept drift shifts P(y|x). Charts: line for time, bar for comparisons, no truncated axes, one message per chart titled with the finding. Fairness names its definitions - demographic parity, equalized odds - which cannot all hold at once; privacy uses anonymisation and k-anonymity (each record indistinguishable from k-1 others). The capstones - churn prediction and demand forecasting - are the template for any case question: problem, data, method, metric, deployment, risk.",
        sections: [
          {
            number: "5.1",
            title: "ML pipelines, model selection and reproducibility",
            body: [
              "A machine learning pipeline is the end-to-end chain from raw data to scored prediction, wired so it runs identically every time: load, validate, preprocess, model, output. The engineering reason to care is the leakage rule from Section 1.6 made structural - sklearn's Pipeline and ColumnTransformer bind preprocessing to the model, so cross-validation refits scalers, imputers and encoders inside each fold automatically. The organisational reason is parity: the same pipeline object trained in the notebook is the one serialised to production, so the features a model sees in serving are guaranteed identical to the ones it learned from - a guarantee that ad-hoc scripts silently violate.",
              "Model selection is a controlled experiment, not a leaderboard habit. Compare candidates on identical folds, identical metrics and identical preprocessing, and report the mean and spread across folds rather than the best run - a model averaging 0.84 with a standard deviation of 0.01 beats one touching 0.87 once with a spread of 0.04. Hyperparameter search (GridSearchCV or a random search) must sit inside cross-validation; tuning on the test set converts the test set into a training set. For honest final numbers, nested cross-validation tunes in an inner loop and evaluates in an outer one, at the cost of compute that is usually worth paying once.",
              "Reproducibility is the discipline that makes results trustworthy. Set every seed: numpy, sklearn, and the train/test splitter (random_state=42 appears in every section of this subject for exactly this reason). Pin library versions - a pandas or sklearn upgrade can silently change defaults - with an environment file. Version the data alongside the code (git for code, DVC or snapshots for data) and log every experiment with its configuration, metrics and artifacts in a tracker such as MLflow. Worked illustration: the same logistic regression run with different shuffle seeds gives 0.84 and 0.87 - neither number is 'the' accuracy; only the mean across folds is a claim you can defend.",
              "Notebooks deserve a specific warning: they are excellent for exploration and terrible for state - cells run out of order, variables linger from deleted code, and a notebook that 'worked yesterday' often cannot be replayed. The production pattern is notebooks for analysis, refactored into modules and scripts for anything that runs twice, with the pipeline (not the notebook) as the unit of deployment. A model card - one page stating data sources, intended use, metrics by subgroup, known limitations - closes the section and previews the fairness work of Section 5.5.",
            ],
            bullets: [
              "Pipeline = load -> validate -> preprocess -> model -> output, bound in one object (sklearn Pipeline + ColumnTransformer).",
              "Leakage defence is structural: CV refits every preprocessing step inside each fold automatically.",
              "Model selection: identical folds and metrics for all candidates; report mean and spread, never the best single run.",
              "Hyperparameter search sits inside CV; nested CV gives unbiased final estimates.",
              "Reproducibility kit: fixed seeds (numpy, sklearn, splitter), pinned versions, versioned data, experiment tracking (MLflow).",
              "Worked seed effect: the same model scores 0.84 and 0.87 under different shuffles - only the fold mean is defensible.",
              "Notebooks for exploration, scripts for production; ship a model card with data, metrics by subgroup and limitations.",
            ],
            codeExample: {
              language: "python",
              caption: "One Pipeline object doing leakage-safe tuning and reproducible scoring.",
              code: `import numpy as np
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.impute import SimpleImputer
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import GridSearchCV, StratifiedKFold

pipe = Pipeline([
    ("impute", SimpleImputer(strategy="median")),
    ("scale", StandardScaler()),
    ("clf", LogisticRegression(max_iter=1000)),
])

param_grid = {"clf__C": [0.1, 1, 10]}   # tuning INSIDE the pipeline
cv = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)

search = GridSearchCV(pipe, param_grid, cv=cv, scoring="f1")
np.random.seed(42)                       # seed everything, always
search.fit(X_train, y_train)
print("best C:", search.best_params_, "CV F1:", round(search.best_score_, 3))`,
            },
            diagram: {
              kind: "pipeline",
              title: "A deployment-grade ML pipeline",
              caption:
                "The fit/transform boundary inside the pipeline is exactly the information boundary against leakage.",
              stages: [
                { label: "Raw data + schema check", note: "fail fast on surprises" },
                { label: "Preprocessing (train-fit)", note: "impute, scale, encode inside CV" },
                { label: "Model fit", note: "same pipeline object as production" },
                { label: "Evaluation on untouched test", note: "mean over folds, not best run" },
                { label: "Versioned artifact", note: "model card, seeds, data hash" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Pipeline questions are usually 'why' questions. Three sentences cover 90 percent of answers: preprocessing must be refit inside each CV fold to prevent leakage; the same pipeline object guarantees train-serve feature parity; and seeds plus versioned dependencies make results reproducible. Name Pipeline and ColumnTransformer to show you know the tools, not just the principles.",
            },
            keyTerms: [
              { term: "ML pipeline", definition: "A single bound object chaining preprocessing and model so every run and fold applies identical steps." },
              { term: "Nested cross-validation", definition: "An inner CV loop for hyperparameter tuning inside an outer CV loop for unbiased evaluation." },
              { term: "Model card", definition: "A short document stating a model's data, intended use, metrics by subgroup and known limitations." },
              { term: "Reproducibility", definition: "The property that rerunning with the same seeds, versions and data reproduces the same metrics." },
              { term: "Experiment tracking", definition: "Logging every run's configuration, data version and metrics (e.g. MLflow) so results can be compared and audited." },
            ],
            examQuestions: [
              {
                q: "Explain why preprocessing must live inside the cross-validation pipeline, describe a fair model-selection protocol for three candidate models, and list four practices that make results reproducible.",
                marks: 7,
                outline: [
                  "Leakage argument: fitting scalers/imputers on all data lets test statistics into training.",
                  "Structural fix: Pipeline + cross_val_score refits preprocessing per fold.",
                  "Protocol: identical folds, identical metrics, mean and spread reported.",
                  "Hyperparameter search inside CV; nested CV for unbiased final numbers.",
                  "Reproducibility 1-2: fixed seeds (numpy, sklearn, splitter), pinned versions.",
                  "Reproducibility 3-4: versioned data (DVC/git-lfs), experiment tracking of configs and metrics.",
                  "Worked seed example: 0.84 vs 0.87 across shuffles - defend only the fold mean.",
                ],
              },
              {
                q: "Why is the best single cross-validation run a misleading headline?",
                marks: 2,
              },
              {
                q: "What is a model card, and which three things does it state?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.2",
            title: "Deployment patterns: batch scoring vs real-time APIs",
            body: [
              "Deployment is where models earn money, and the first decision is temporal: when must the prediction exist? Batch scoring answers scores entire tables on a schedule - nightly churn scores for the retention team, hourly demand forecasts, weekly credit re-scores. It is simple and cheap: one big job, a warehouse of rows, results written back to a table the business already reads. Latency is measured in hours, which is perfectly fine when the decision that consumes the score (tomorrow's call list) is itself daily. Most enterprise ML is batch, and a student who says 'deploy = API' has already lost marks.",
              "Real-time serving wraps the model in an API - typically a REST endpoint backed by a FastAPI or Flask service in a container. The requirements harden immediately: a latency budget (fraud checks need p99 under 100 ms), an online feature store so the model's inputs are computed with the same definitions as training, input validation against a schema, horizontal scaling for traffic spikes, and authentication. Worked sizing: a model that scores in 15 ms of compute still spends 40 ms on feature lookups and serialisation - the endpoint budget is dominated by everything around the model, which is why feature stores and efficient serialisation (joblib, ONNX) matter more than model micro-optimisation.",
              "Between and beyond the two poles sit the intermediate patterns. Micro-batching scores small groups every few seconds - near-real-time at batch economics. Streaming deployments attach models to event queues (Kafka) for continuous scoring. Edge deployment runs compressed models on devices - a phone's on-device keyboard model - trading model size for latency and privacy. Shadow deployment runs the new model silently alongside the old one, logging what it would have predicted, so its live quality can be measured before any decision trusts it; canary releases then route a small percentage of real traffic (5 percent, then 25) with instant rollback available.",
              "Choosing is a checklist, not a fashion. Ask: what latency does the decision need (fraud blocks a payment in milliseconds; churn offers wait for tomorrow's list)? How fresh must features be? What throughput and budget apply? What is the blast radius if the model is wrong? Document the answers, then pick batch, API, or a hybrid - fraud scores in real time and churn scores overnight from the same trained pipeline. Whatever the pattern, version the artifact, keep the preprocessing code identical to training, and always keep a rollback route to the previous model version.",
            ],
            bullets: [
              "Batch scoring: scheduled jobs over whole tables - nightly churn scores, hourly forecasts; simple, cheap, stale by up to one cycle.",
              "Real-time API: model behind a REST endpoint with a p99 latency budget (fraud: under 100 ms) and online feature lookup.",
              "Worked latency split: 15 ms model compute vs 40 ms feature lookup and serialisation - the surroundings dominate the budget.",
              "Intermediate patterns: micro-batching every few seconds, streaming on event queues, edge models on devices.",
              "Shadow deployment: run the new model silently, log its would-be predictions, compare before trusting it.",
              "Canary release: route 5 percent of traffic first, expand gradually, keep instant rollback.",
              "Same trained pipeline for both patterns: fraud in real time, churn overnight - choice is per decision, not per model.",
            ],
            codeExample: {
              language: "python",
              caption: "A minimal real-time scoring API with FastAPI.",
              code: `from fastapi import FastAPI
from pydantic import BaseModel
import joblib

app = FastAPI()
model = joblib.load("churn_pipeline.joblib")   # pipeline, not bare model

class Customer(BaseModel):
    tenure_months: int
    monthly_charges: float
    contract_type: str

@app.post("/score")
def score(c: Customer):
    row = [[c.tenure_months, c.monthly_charges, c.contract_type]]
    p = float(model.predict_proba(row)[0][1])
    return {"churn_probability": round(p, 3),
            "decision": "offer" if p >= 0.6 else "none"}`,
            },
            diagram: {
              kind: "compare",
              title: "Batch scoring vs real-time API",
              caption:
                "Same model, opposite engineering - the decision latency decides the pattern.",
              left: {
                heading: "Batch scoring",
                items: [
                  "Scheduled job over a whole table",
                  "Latency: hours - fine for daily decisions",
                  "Cheap compute, warehouse-friendly",
                  "Failure mode: stale scores after a market shift",
                ],
              },
              right: {
                heading: "Real-time API",
                items: [
                  "REST endpoint per request",
                  "Latency budget: p99 under 100 ms for fraud",
                  "Online feature store, schema validation, autoscaling",
                  "Failure mode: traffic spikes and cold-start latency",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Ship the pipeline, not the model",
              body: "Serialise the entire fitted Pipeline - imputer, scaler, encoder, model - not just the estimator. A bare model loaded into an API must have its preprocessing rebuilt by hand, and any drift between that copy and training is a silent bug that produces plausible-looking wrong predictions. joblib.dump(pipe) is one line and deletes the whole class of bugs.",
            },
            keyTerms: [
              { term: "Batch scoring", definition: "Scoring all rows on a schedule and writing results to storage; suitable when decisions tolerate hours of staleness." },
              { term: "Real-time serving", definition: "A model behind an API answering single requests within a latency budget." },
              { term: "p99 latency", definition: "The response time the slowest 1 percent of requests exceed - the number SLAs are written against." },
              { term: "Shadow deployment", definition: "Running a candidate model silently alongside production and logging its predictions before trusting it." },
              { term: "Canary release", definition: "Routing a small, growing share of live traffic to a new model with rollback available at every step." },
            ],
            examQuestions: [
              {
                q: "Compare batch scoring and real-time API deployment across latency, cost, infrastructure and typical use cases. Which suits nightly churn scoring and which suits card-fraud checks, and why?",
                marks: 7,
                outline: [
                  "Batch: scheduled scoring of whole tables; latency in hours; cheap and simple.",
                  "Real-time: model behind an API; p99 latency budget; online features, validation, autoscaling.",
                  "Cost contrast: one batch job vs always-on service capacity.",
                  "Use-case mapping: churn call list is a daily decision -> batch; fraud must block a payment in milliseconds -> API.",
                  "Mention intermediate patterns: micro-batching, streaming, edge.",
                  "Safety patterns: shadow deployment, canary traffic, rollback.",
                  "Engineering note: ship the fitted pipeline; feature lookup often costs more than model compute (15 ms vs 40 ms).",
                ],
              },
              {
                q: "What is a shadow deployment and what problem does it solve?",
                marks: 2,
              },
              {
                q: "In a real-time scoring service, why can feature lookup cost more than model inference?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.3",
            title: "Monitoring, drift and model maintenance",
            body: [
              "A deployed model decays, not because its code changes but because the world does: customer behaviour shifts, fraud tactics rotate, a pandemic rewrites every demand curve. Monitoring is the practice of watching a model's inputs, outputs and outcomes so decay is detected before it costs money. Three watch-faces matter: input distributions (are features still arriving in familiar ranges?), prediction distributions (is the model suddenly flagging 15 percent instead of 3?), and outcome metrics (precision and recall against labels that arrive late - churn outcomes confirm weeks after the prediction).",
              "Two drift types must be named precisely, because they have different causes and fixes. Data drift (covariate shift) changes the input distribution while the input-output relationship stays fixed: the model was trained on customers aged 25-45 and marketing now attracts 18-24s. Concept drift changes the relationship itself: the features that predicted churn last year predict something else this year because a competitor changed the market. Data drift is fixable by retraining on fresher data; concept drift requires new labels and often new features - detecting which one you have is the diagnostic step most answers skip.",
              "The Population Stability Index makes drift measurable. PSI = sum over bins of (actual_percent - expected_percent) x ln(actual_percent / expected_percent). Worked two-bin example: a feature's training distribution was 60/40 and this month's is 50/50. Bin 1: (0.50 - 0.60) x ln(0.50/0.60) = (-0.10) x (-0.182) = 0.0182. Bin 2: (0.50 - 0.40) x ln(0.50/0.40) = 0.10 x 0.223 = 0.0223. PSI = 0.041 - negligible. Convention: PSI under 0.1 means stable, 0.1-0.25 means investigate, above 0.25 means major shift and triggers retraining. The same arithmetic runs per feature, with the worst features named in the alert.",
              "The maintenance loop closes the chapter's cycle: log inputs and predictions; compute drift statistics and rolling metrics on schedule; alert on thresholds (PSI > 0.25, anomaly rate jump, precision drop); respond by retraining on fresh data with the same reproducible pipeline, validate the challenger against the champion, and redeploy with the canary pattern of Section 5.2. Feedback loops need care - labels arrive late (churn confirms weeks later), and in systems that act on predictions (declining loans), the model changes the data it later sees, which is selection bias by construction. Document retraining triggers in advance; an unmonitored model is a hypothesis wearing a production badge.",
            ],
            bullets: [
              "Watch three faces: input distributions, prediction distributions, and outcome metrics once labels arrive.",
              "Data drift = input distribution shifts, relationship unchanged (new age cohort arrives); fix by retraining on fresh data.",
              "Concept drift = P(y|x) changes (competitor rewrites the market); needs new labels and often new features.",
              "PSI = sum (actual - expected) x ln(actual / expected); worked two-bin example gives 0.041 - stable.",
              "PSI thresholds: under 0.1 stable, 0.1-0.25 investigate, above 0.25 major shift and retrain.",
              "Maintenance loop: log -> compute drift and rolling metrics -> alert -> retrain with the same pipeline -> validate challenger -> canary redeploy.",
              "Watch feedback loops: acting on predictions changes future data (declined loans never reveal their true outcome) - selection bias by construction.",
            ],
            codeExample: {
              language: "python",
              caption: "Computing PSI for one feature - the worked numbers reproduced.",
              code: `import numpy as np

expected = np.array([0.60, 0.40])   # training distribution per bin
actual   = np.array([0.50, 0.50])   # this month's distribution

psi = np.sum((actual - expected) * np.log(actual / expected))
print("PSI:", round(psi, 4))        # 0.041 - stable

def verdict(psi):
    if psi < 0.1:  return "stable"
    if psi < 0.25: return "investigate"
    return "major shift - retrain"

print(verdict(psi))
# Run per feature; alert on the worst few each week`,
            },
            diagram: {
              kind: "cycle",
              title: "The deployed-model maintenance loop",
              caption:
                "Monitoring turns a model from a one-off artifact into a maintained system.",
              steps: [
                { label: "Log inputs and predictions", note: "schema-checked, sampled" },
                { label: "Compute drift and metrics", note: "PSI per feature, rolling precision" },
                { label: "Compare to thresholds", note: "PSI > 0.25, accuracy drop" },
                { label: "Alert and diagnose", note: "data drift vs concept drift" },
                { label: "Retrain challenger", note: "same pipeline, fresh data" },
                { label: "Canary redeploy", note: "champion vs challenger, rollback ready" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "The PSI computation is this section's examinable arithmetic: memorise the formula, the two thresholds (0.1 and 0.25), and one interpretation sentence. The distinction question - data drift vs concept drift - is the other recurring item; answer with the definition pair and the different fixes (fresh data vs new labels and features).",
            },
            keyTerms: [
              { term: "Data drift", definition: "A shift in the input feature distribution while the input-output relationship stays the same." },
              { term: "Concept drift", definition: "A change in the relationship between inputs and targets, P(y|x), so the learned mapping itself goes stale." },
              { term: "PSI", definition: "Population Stability Index: sum over bins of (actual - expected) x ln(actual/expected); above 0.25 signals major drift." },
              { term: "Champion/challenger", definition: "Keeping the current production model while a retrained challenger is validated head-to-head before promotion." },
              { term: "Feedback loop", definition: "The effect of a model's own decisions on the data it later trains on - a source of selection bias in deployed systems." },
            ],
            examQuestions: [
              {
                q: "Explain data drift and concept drift with one example each, compute PSI for a feature whose training distribution was 60/40 across two bins and now runs 50/50, and state the standard PSI thresholds.",
                marks: 7,
                outline: [
                  "Define data drift: inputs shift, relationship fixed; example - new younger customer cohort.",
                  "Define concept drift: P(y|x) changes; example - competitor action rewrites churn drivers.",
                  "Write PSI = sum (actual - expected) x ln(actual / expected).",
                  "Bin 1: (0.50 - 0.60) x ln(0.50/0.60) = 0.0182.",
                  "Bin 2: (0.50 - 0.40) x ln(0.50/0.40) = 0.0223.",
                  "PSI = 0.041 -> stable (under 0.1).",
                  "Thresholds: under 0.1 stable, 0.1-0.25 investigate, above 0.25 retrain; fixes differ by drift type.",
                ],
              },
              {
                q: "Name the three things a production monitoring dashboard should watch for a deployed model.",
                marks: 2,
              },
              {
                q: "A bank declines loans using a model. Why do future training labels for declined applicants not exist, and what is this bias called?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.4",
            title: "Dashboards, honest visualisation and storytelling with data",
            body: [
              "Chart choice is a mapping from question to geometry, and most exam and workplace chart failures are mismappings. Line charts for change over time (one line per series, few enough to distinguish). Bar charts for comparing categories, always sorted by value and with the baseline at zero - a sorted bar chart of segment churn rates makes the worst segment jump out of the corner of the eye. Scatter plots for relationships between two numerics; histograms for distributions; heatmaps for correlation matrices. Pie charts survive only for 3-5 slices summing to a whole - beyond that, angles defeat human perception and a bar chart says the same thing honestly.",
              "Honesty rules are short and absolute. Never truncate the y-axis on a bar chart: bars encode value by length, and a zero-suppressed axis turns a 5 percent difference into a visual cliff. Do not stack unlike things, do not use dual axes to fake a correlation, label directly on the data instead of forcing legend lookups, and keep colour accessible (red-green pairs fail for colour-blind readers; use blue-orange or vary lightness). Show uncertainty where it exists - a shaded confidence band on a forecast says more than the point line. The test for any chart: could a hostile reader reconstruct the actual numbers from what is drawn?",
              "Dashboards are decision instruments, so design starts from the decision, not the data. A good dashboard holds 5-9 KPIs at the top (the ten-second answer: churn is up from 24 to 27 percent), trend and breakdown charts in the middle (which segment, since when), and drill-down detail below or behind filters. The refresh rate matches the decision cadence - hourly for operations, weekly for management - and every number carries its comparison: a churn rate alone is trivia; churn versus last quarter and versus target is information.",
              "Storytelling with data is the skill of moving an audience from observation to action. The classic arc: context (what the business believes today), conflict (the data shows churn doubled in the prepaid segment in three months), resolution (the recommended action and its expected effect). Craft rules: state the finding in the title ('Churn doubled in prepaid - three months, +9 points'), not the chart type ('Churn by segment over time'); one message per chart; lead with the recommendation, then show the evidence, then the caveats. Numbers persuade analysts; a clear tension plus a named decision persuades the meeting - and the exam answer that names an audience, a finding and an action mirrors this exactly.",
            ],
            bullets: [
              "Mapping: line for time, sorted bar for category comparison, scatter for relationships, histogram for distributions, heatmap for correlations.",
              "Bars need a zero baseline; a truncated axis inflates differences and is the classic dishonest chart.",
              "Pie charts: only 3-5 slices summing to a whole; otherwise switch to bars.",
              "Label directly on the data, keep colour-blind-safe palettes, and shade uncertainty on forecasts.",
              "Dashboard hierarchy: 5-9 KPIs on top, trends and breakdowns in the middle, drill-down below; refresh rate = decision cadence.",
              "Every KPI needs its comparison: churn 27 percent means something only against last quarter (24) and target (25).",
              "Story arc: context -> conflict ('churn doubled in prepaid') -> resolution (action + expected effect); the title states the finding, not the chart type.",
            ],
            table: {
              caption: "The chart-chooser: question to geometry.",
              headers: ["Question", "Chart", "Why"],
              rows: [
                ["How did churn move month to month?", "line chart", "time on x-axis shows trend and turning points"],
                ["Which segment has the worst churn?", "sorted bar chart", "ranking by length is instantly read"],
                ["Does tenure relate to spending?", "scatter plot", "shows shape and strength of relationship"],
                ["How is income distributed?", "histogram", "shows skew and modality of one variable"],
                ["Which features move together?", "correlation heatmap", "many pairwise strengths in one view"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "Dashboard information hierarchy",
              caption:
                "Ten seconds for the headline, one minute for the trend, drill-down for the argument.",
              tiers: [
                { label: "Headline KPIs", note: "5-9 numbers with comparisons - the ten-second answer" },
                { label: "Trends and breakdowns", note: "where and when the movement happened" },
                { label: "Detail charts", note: "segments, cohorts, drivers" },
                { label: "Drill-down / raw data", note: "filters and exports for the skeptics" },
              ],
            },
            callout: {
              type: "warning",
              title: "A chart can lie without a single false number",
              body: "Truncated y-axes, dual axes and unsorted bars all distort while quoting true data. In exams, when asked to critique a visualisation, name one of these three plus the fix (zero baseline, single axis, sort by value). In projects, apply the hostile-reader test: could someone reconstruct the real numbers from the picture alone?",
            },
            keyTerms: [
              { term: "Zero baseline", definition: "The rule that bar lengths encode value, so the value axis must start at zero." },
              { term: "KPI", definition: "A key performance indicator shown with its comparison baseline and target - the top layer of any dashboard." },
              { term: "Drill-down", definition: "Navigation from a summary number to the underlying detail rows behind it." },
              { term: "Context-conflict-resolution", definition: "The storytelling arc: what the audience believes, what the data shows, what to do about it." },
              { term: "Dual-axis chart", definition: "Two unrelated scales on one plot; a common way to manufacture fake correlations and best avoided." },
            ],
            examQuestions: [
              {
                q: "Explain how to choose a chart for four different analytical questions, list three honesty rules for visualisation, and outline the structure of a data story that moves a business audience to act.",
                marks: 7,
                outline: [
                  "Map questions to charts: time -> line, comparison -> sorted bar, relationship -> scatter, distribution -> histogram.",
                  "Justify the sorted bar with the baseline-at-zero rule.",
                  "Honesty rule 1: never truncate the y-axis on bars.",
                  "Honesty rule 2: no dual axes or stacked unlike quantities.",
                  "Honesty rule 3: accessible colour and direct labelling; shade uncertainty.",
                  "Story arc: context, conflict (finding stated in the title), resolution with an action.",
                  "Dashboard note: 5-9 KPIs with comparisons, refresh rate matched to decision cadence.",
                ],
              },
              {
                q: "Why must a bar chart's value axis start at zero?",
                marks: 2,
              },
              {
                q: "Rewrite the chart title 'Churn by segment over time' so the title states the finding.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.5",
            title: "Fairness, bias and privacy",
            body: [
              "Bias enters models through the data, not through malice. Historical bias: labels record past decisions, so a hiring model trained on ten years of a biased process learns the bias with high fidelity. Sampling bias: the training data under-represents a group - rural customers in an urban-skewed credit dataset. Measurement bias: a feature means different things across groups - a pulse sensor calibrated on one skin tone. Proxy variables are the sneakiest channel: postcode correlates with community and income, so a model denied the protected attribute can still discriminate through its proxies. The audit question is always 'could this feature stand in for the protected one?'",
              "Fairness definitions make the audit measurable, and the exam expects three. Demographic parity: the positive-prediction rate is equal across groups - a loan model approving 60 percent of group A and 30 percent of group B violates it, whatever its accuracy. Equalized odds: true-positive and false-positive rates are equal across groups - the model is equally accurate for everyone. Individual fairness: similar individuals are treated similarly. The deep fact examiners love: the definitions conflict mathematically - when base rates differ between groups, demographic parity and equalized odds cannot both hold - so choosing a fairness criterion is a policy decision about the domain, not a technical tweak. Fairness-aware training reweights, post-processes thresholds per group, or removes proxies, and each choice trades accuracy somewhere.",
              "Privacy protections start with data minimisation - collect and keep only what the model needs - and proceed through anonymisation, the removal or generalisation of direct identifiers (name, phone, exact address, full birth date). k-anonymity generalises quasi-identifiers (age, PIN code, gender) so every record becomes indistinguishable from at least k - 1 others on those columns: with k = 5, any combination of age band, PIN and gender matches at least 5 people, so re-identification through cross-referencing public datasets fails. Complementary tools: pseudonymisation (keys held separately), aggregation for reporting, and differential privacy, which adds calibrated noise so the output of an analysis barely depends on any single person's row. Regulations (GDPR-style) add consent, purpose limitation, and the right to deletion - which, note, a model trained on deleted data cannot fully honour, an honest limitation worth stating.",
              "The practical audit ties the unit together. For any deployed model: list protected and proxy features; compute the fairness metrics per group on a held-out set (approval rates, TPR/FPR); test robustness by removing proxy columns and measuring metric movement; document the chosen fairness criterion and why, in the model card from Section 5.1; and schedule periodic re-audits, because drift applies to fairness too - a model that was fair at launch can drift into unfairness as the population shifts. Fairness work is therefore not a launch checklist item but a monitoring discipline, exactly like Section 5.3's drift watch.",
            ],
            bullets: [
              "Bias channels: historical labels, sampling under-representation, measurement differences, and proxy variables (postcode for community).",
              "Demographic parity: equal positive-prediction rates across groups - 60 percent vs 30 percent approval violates it.",
              "Equalized odds: equal TPR and FPR across groups; individual fairness: similar people treated similarly.",
              "Key fact: when base rates differ, demographic parity and equalized odds cannot both hold - the choice is a policy decision.",
              "Anonymisation removes direct identifiers; k-anonymity generalises quasi-identifiers so each record matches at least k - 1 others.",
              "Worked k = 5: any (age band, PIN, gender) combination matches at least 5 records, defeating cross-reference re-identification.",
              "Differential privacy adds calibrated noise so outputs barely depend on any single row; audit fairness metrics per group on a schedule, like drift.",
            ],
            codeExample: {
              language: "python",
              caption: "A group fairness audit - approval rates and k-anonymity check.",
              code: `import pandas as pd

# 1. Demographic parity check on a held-out set
audit = test_df.groupby("group")["approved"].mean()
print(audit.round(3))
# group
# A    0.60
# B    0.30   -> parity violated; investigate proxies

# 2. k-anonymity check on quasi-identifiers
qi = ["age_band", "pin_prefix", "gender"]
sizes = df.groupby(qi).size()
print("smallest equivalence class:", sizes.min())
print("k-anonymous at k=5:", bool(sizes.min() >= 5))

# 3. Proxy test: drop postcode-like column, re-measure parity
#    parity gap shrinking -> postcode was carrying the proxy signal`,
            },
            diagram: {
              kind: "fork",
              title: "Auditing one feature for fairness risk",
              caption:
                "Three branches cover the audit - and none of them ends with 'ignore it'.",
              start: "Does this feature encode a protected attribute?",
              branches: [
                { label: "Directly (gender, community)", outcome: "Remove from features; still audit for proxies", good: true },
                { label: "By proxy (postcode, surname)", outcome: "Test parity with and without it; drop or transform if it carries the signal", good: true },
                { label: "Legitimate signal only (tenure, income)", outcome: "Keep, but document in the model card and monitor parity over time", good: true },
                { label: "Unknown / unaudited", outcome: "Treat as risk: audit before deployment - unaudited features are how bias ships", good: false },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Two facts separate strong answers. First, name two fairness definitions and give the worked violation (60 percent vs 30 percent approval = demographic parity failure). Second, state the impossibility result: with different base rates, parity and equalized odds cannot both hold, so the criterion is a domain policy choice. Adding one privacy tool with its number (k-anonymity at k = 5) rounds out the answer.",
            },
            keyTerms: [
              { term: "Demographic parity", definition: "A fairness criterion requiring equal positive-prediction rates across protected groups." },
              { term: "Equalized odds", definition: "A fairness criterion requiring equal true-positive and false-positive rates across groups." },
              { term: "Proxy variable", definition: "A feature that correlates with a protected attribute (postcode, surname) and lets a model discriminate indirectly." },
              { term: "k-anonymity", definition: "A privacy property: every record is indistinguishable from at least k - 1 others on the quasi-identifier columns." },
              { term: "Differential privacy", definition: "Adding calibrated noise to analysis outputs so results barely change whether any one person's data is included." },
            ],
            examQuestions: [
              {
                q: "Explain three sources of bias in training data, define demographic parity and equalized odds with a worked violation, and state why the two definitions can conflict.",
                marks: 7,
                outline: [
                  "Historical bias: labels encode past decisions (biased hiring records).",
                  "Sampling bias: groups under-represented (rural customers missing from credit data).",
                  "Measurement and proxy bias: sensors calibrated per skin tone; postcode standing in for community.",
                  "Demographic parity: equal approval rates - 60 percent (A) vs 30 percent (B) violates it.",
                  "Equalized odds: equal TPR and FPR across groups.",
                  "Conflict: with different base rates, both cannot hold simultaneously - a policy choice.",
                  "Close with the audit workflow: proxy tests, per-group metrics, model-card documentation, scheduled re-audits.",
                ],
              },
              {
                q: "What does k = 5 anonymity guarantee about each record?",
                marks: 2,
              },
              {
                q: "A model never sees gender yet shows different approval rates by gender. What is the likely cause?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.6",
            title: "Capstone case studies: churn prediction and demand forecasting",
            body: [
              "The churn capstone runs the whole subject in one project. Business understanding: cut churn 10 percent among 70,000 telecom customers; success metric - catch 70 percent of churners with under 20 percent false alarms, because retention calls cost money (Unit I). Data understanding and preparation: 26 percent churn rate, 11 percent missing tenure (median imputed plus missing indicator), contract type one-hot encoded, charge-per-service and lifetime-revenue interactions engineered, stratified 80/20 split with 5-fold CV (Units I and II). Modelling: logistic regression as the interpretable baseline (AUC 0.79), gradient boosting as the champion (AUC 0.86, recall 0.74 at precision 0.81), with class weights handling the imbalance.",
              "Churn deployment and monitoring: monthly batch scoring writes a ranked call list (Section 5.2's pattern - a daily decision needs no API); drift monitoring runs PSI on usage features monthly (0.041 in the worked example - stable), with retraining triggered above 0.25 (Section 5.3). Fairness audit: approval-style parity check on retention offers across customer segments (Section 5.5), documented in the model card. Every earlier unit appears once - which is exactly why examiners set case questions: they test integration, and the answer structure is fixed: problem, data, method, metric, deployment, risk.",
              "The demand-forecasting capstone swaps the target type but keeps the discipline. A retail chain forecasts daily sales for 400 stores: decomposition reveals yearly seasonality plus a rising trend (Unit IV), log transform stabilises multiplicative swings, and the model is gradient boosting with lag features (sales 1, 7 and 28 days back), rolling means, day-of-week and promotion flags - beating SARIMA's MAPE of 11 percent with 8 percent. Evaluation is rolling-origin backtesting (Section 4.3), never random folds, reported against the seasonal-naive baseline. Deployment is hourly micro-batch forecasts into the replenishment system, monitored with PSI on promotion features because promotional calendars change.",
              "The forecasting case also shows asymmetric error costing: over-forecasting fills warehouses with unsold stock; under-forecasting empties shelves and loses sales - so the loss function and the reported metric weight the two directions differently, a one-sentence insight that elevates any answer. Both capstones teach the same closing lesson: the model is one-tenth of the project, and the workflow - metric choice, leakage discipline, honest evaluation, deployment pattern, monitoring, fairness - is the other nine-tenths. Rehearse each case until you can write its six-part skeleton in five minutes; that skeleton is worth more marks than any individual algorithm detail.",
            ],
            bullets: [
              "Churn capstone: 70k customers, 26 percent churn; success = recall 0.70 at precision >= 0.80; champion gradient boosting AUC 0.86 over logistic baseline 0.79.",
              "Churn preparation: median-imputed tenure with indicator, one-hot contract, charge-per-service interaction, stratified splits with CV.",
              "Churn deployment: monthly batch scoring into a ranked call list; PSI drift watch on usage features; fairness audit on offers by segment.",
              "Demand capstone: 400 stores, daily sales; yearly seasonality plus trend, log transform for multiplicative swings.",
              "Demand model: gradient boosting with lag features (1, 7, 28 days), rolling means, day-of-week and promotion flags; MAPE 8 percent vs SARIMA 11 percent.",
              "Demand evaluation: rolling-origin backtest against seasonal-naive; deployment hourly micro-batch into replenishment.",
              "Asymmetric error: over-forecast = dead stock, under-forecast = lost sales; weight the loss and report both directions.",
            ],
            table: {
              caption: "The two capstones side by side - one skeleton, two domains.",
              headers: ["Aspect", "Churn prediction", "Demand forecasting"],
              rows: [
                ["Target", "binary churn within 90 days", "daily units sold per store"],
                ["Data shape", "70k customer snapshots", "4 years x 400 stores, time-indexed"],
                ["Champion model", "gradient boosting, class weights", "GBM with lag + calendar features"],
                ["Headline metric", "recall 0.74 at precision 0.81, AUC 0.86", "MAPE 8 percent vs SARIMA 11 percent"],
                ["Deployment", "monthly batch scoring", "hourly micro-batch forecasts"],
                ["Monitoring", "PSI on usage features, parity audit", "PSI on promotion features, forecast error"],
                ["Key risk", "target leakage from post-churn fields", "concept drift when promotions change"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "The six-part case-study skeleton",
              caption:
                "Any capstone question - churn, demand, fraud, credit - is answered in these six moves.",
              stages: [
                { label: "Problem", note: "business goal + success metric" },
                { label: "Data", note: "sources, size, quality, splits" },
                { label: "Method", note: "baseline -> champion, with features" },
                { label: "Metric", note: "matched to cost; vs baseline" },
                { label: "Deployment", note: "batch or API; how consumed" },
                { label: "Risk", note: "drift, fairness, feedback loops" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Memorise the six-part skeleton - problem, data, method, metric, deployment, risk - and rehearse filling it for both capstones in under five minutes each. Case questions in the paper are open-ended precisely so that structure scores: a candidate who writes six labelled parts with one concrete number in each outperforms a candidate who writes unstructured prose about the same material.",
            },
            keyTerms: [
              { term: "Churn prediction", definition: "Classifying which customers will leave within a horizon, scored by recall-precision tradeoffs matched to retention cost." },
              { term: "Demand forecasting", definition: "Predicting future sales per store and day, typically with lag/calendar features and rolling-origin evaluation." },
              { term: "Lag features", definition: "Model inputs built from past target values (1, 7, 28 days back) - the core feature family of forecasting." },
              { term: "Model card", definition: "The one-page documentation of data, metrics by group, intended use and limitations that ships with every deployed model." },
              { term: "Asymmetric error cost", definition: "When over-prediction and under-prediction cost different amounts, the loss and reporting must weight them differently." },
            ],
            examQuestions: [
              {
                q: "Design an end-to-end churn prediction system: state the business metric, the preparation steps, the candidate models with their headline metrics, the deployment pattern, and two risks with mitigations.",
                marks: 7,
                outline: [
                  "Problem: cut churn 10 percent; metric = recall 0.70 at precision >= 0.80 (retention calls cost money).",
                  "Data: 70k customers, 26 percent churn, stratified splits; CV not holdout alone.",
                  "Preparation: median-imputed tenure with indicator, one-hot contract, interaction features; preprocessing inside the pipeline.",
                  "Method: logistic baseline (AUC 0.79) vs gradient boosting champion (AUC 0.86, recall 0.74, precision 0.81) with class weights.",
                  "Deployment: monthly batch scoring into a ranked retention call list.",
                  "Risk 1: data drift - PSI monitoring above 0.25 triggers retraining.",
                  "Risk 2: unfair offers across segments - parity audit documented in the model card.",
                ],
              },
              {
                q: "Why does a churn model's feature 'days_since_account_closed' leak the target, while 'days_since_last_complaint' does not?",
                marks: 2,
              },
              {
                q: "In demand forecasting, why must evaluation use rolling-origin backtests rather than random k-fold?",
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
        "AL-702(D) papers typically distribute marks across five units with supervised learning carrying the heaviest block, data preparation supplying the definitional short questions, and deployment/ethics appearing as both shorts and one long applied question. Weights below are planning estimates - allocate revision time roughly in this ratio and keep one practice slot per unit regardless of weight.",
      ],
      weightedTopics: [
        { topic: "Decision trees, random forests and boosting (entropy split, bagging, XGBoost)", weight: "10-12 marks", note: "Almost guaranteed: one 7-mark on trees/ensembles plus shorts. Practise the entropy-gain computation to three decimals." },
        { topic: "Metrics and the confusion matrix (precision, recall, F1, ROC-AUC, RMSE)", weight: "6-8 marks", note: "One worked matrix per paper is the norm; fill the 2x2 grid first, then compute with formulas quoted." },
        { topic: "Data preparation: cleaning, imputation, outliers, scaling, encoding", weight: "8-10 marks", note: "IQR fences and z-score arithmetic are favourite 2-3 mark items; know one-hot vs ordinal vs target encoding cold." },
        { topic: "Cross-validation, splits and data leakage", weight: "5-7 marks", note: "Define leakage, give two channels, state the Pipeline fix; time-series folds often appear as a twist." },
        { topic: "Clustering: k-means, hierarchical, DBSCAN", weight: "8-10 marks", note: "The 2D k-means iteration and the linkage definitions are the scoring core; silhouette formula appears as a short." },
        { topic: "PCA, t-SNE and association rules (support/confidence/lift, Apriori)", weight: "6-8 marks", note: "One variance-explained computation and one basket-rule computation are the expected two items." },
        { topic: "Regression and logistic regression (least squares, R^2, sigmoid, log-loss)", weight: "6-8 marks", note: "Practise the 3-point least-squares fit and sigma(1.1) arithmetic; assumption lists earn easy method marks." },
        { topic: "Time series: components, smoothing, ARIMA, backtesting", weight: "6-8 marks", note: "Additive vs multiplicative and the EMA recursion are short-question staples; rolling-origin backtesting is the long-question angle." },
        { topic: "TF-IDF and text mining; sentiment analysis", weight: "4-6 marks", note: "One TF-IDF computation (declare your log base) and one negation/'but' scoring example cover the block." },
        { topic: "Recommenders, deployment, drift, fairness, privacy", weight: "4-6 marks", note: "User-user weighted prediction, batch vs API, PSI thresholds and two fairness definitions are the recurring items." },
      ],
    },
    {
      id: "six-weeks",
      heading: "Six-week study plan",
      body: [
        "Assuming a five-day week at two hours a day, this schedule covers every unit twice - once for understanding with the worked computations, once for revision with past-style questions - and reserves the final week for full papers under exam timing.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - workflow and data preparation", tasks: ["CRISP-DM cycle with the churn example, phase by phase", "Missing-value mechanisms and IQR/z-score outlier arithmetic (3 each)", "Scaling, encoding, binning: write the feature-engineering decision list for the churn dataset", "Splits, 5-fold CV, and the three leakage channels with fixes"] },
        { week: "Week 2", focus: "Unit II - regression, logistic regression, trees", tasks: ["3-point least-squares fit with R^2 (twice, from scratch)", "Sigmoid and log-loss computations; the 0.105 vs 2.303 contrast", "Entropy/information-gain split on the 14-email node (twice)", "kNN vs Naive Bayes vs SVM selection logic; Laplace smoothing"] },
        { week: "Week 3", focus: "Unit II - ensembles, metrics, imbalance", tasks: ["Bias-variance framing; bagging vs boosting contrast table", "XGBoost improvements list (5 items) and early stopping", "Confusion-matrix scoring drill: 5 different matrices, full metric set", "Class-imbalance ladder: metric -> weights -> SMOTE -> threshold"] },
        { week: "Week 4", focus: "Unit III - unsupervised learning", tasks: ["2D k-means iteration and choosing k (elbow + silhouette, 2 each)", "Linkage definitions and the 1-2-3-8 dendrogram trace", "DBSCAN taxonomy diagram and k-distance recipe", "PCA variance-explained computation; basket rules with lift (2 baskets)"] },
        { week: "Week 5", focus: "Unit IV - time series, text, recommenders", tasks: ["Additive vs multiplicative; EMA recursion by hand (3 runs)", "ARIMA components and rolling-origin backtest sketch", "TF-IDF computation twice; sentiment scoring with negation and 'but'", "User-user weighted prediction with mean-centring note"] },
        { week: "Week 6", focus: "Unit V + full revision", tasks: ["Pipeline/leakage, batch vs API, PSI computation, drift types", "Two fairness definitions with the impossibility note; k-anonymity at k = 5", "Both capstone skeletons (problem -> data -> method -> metric -> deployment -> risk) in 5 minutes each", "Two full papers under exam timing; log every lost mark by topic"] },
      ],
    },
    {
      id: "last-day",
      heading: "Last-day strategy",
      bullets: [
        "Rewrite the five worked computations from memory: least squares + R^2, entropy gain on the 14-email node, confusion-matrix metric set, TF-IDF weight, PSI. These five cover the arithmetic this paper asks.",
        "Recite the definition pairs that appear as shorts: additive vs multiplicative, data vs concept drift, demographic parity vs equalized odds, data drift vs concept drift, stemming vs lemmatisation, single vs complete linkage.",
        "Redraw the four anchor diagrams: CRISP-DM cycle, k-means loop, DBSCAN point taxonomy, the six-part capstone skeleton.",
        "Re-read every callout in Units I-V - each one is a distilled examiner expectation.",
        "Skim the code examples for the API names (Pipeline, KMeans, DBSCAN, TfidfVectorizer, IsolationForest) - one-mark items often ask for tool names.",
        "Rehearse both capstone skeletons aloud in five minutes each; if you can fill them cold, any case question is yours.",
        "Sleep before the paper: this subject's answers are computations and structures, and both degrade sharply without rest.",
      ],
    },
    {
      id: "exam-hall",
      heading: "Exam-hall playbook",
      bullets: [
        "Read all questions first and allocate minutes by marks: roughly 1.5 minutes per mark, leaving 10 for review.",
        "Start with the computation you know cold (usually the confusion matrix or the entropy split) to bank marks and calm nerves.",
        "Write the formula line before substituting numbers - the formula is a marked point even when arithmetic slips.",
        "For every algorithm question, pair definition + worked example + one practical caution; that trio is the 7-mark shape.",
        "Declare assumptions and log bases (log10 vs ln) explicitly; undeclared conventions cost the last mark.",
        "Draw the requested diagram even when the prose is complete - cycle, fork, dendrogram or matrix sketches earn separate marks.",
        "In the last 10 minutes, verify arithmetic: recompute sums, check that every matrix cell reconciles to the stated totals.",
      ],
    },
    {
      id: "slips",
      heading: "Common mistakes",
      bullets: [
        "Quoting invented past-paper years or citations - describe question types generically; examiners reward content, not fake provenance.",
        "Computing precision and recall from the wrong matrix cells - precision divides by predictions, recall by true positives; draw the 2x2 first.",
        "Fitting scalers, imputers or vectorisers on the full dataset before splitting - preprocessing leakage that inflates every score you report.",
        "Using random k-fold on time series data - train on the future is fiction; name rolling-origin backtesting instead.",
        "Reading high confidence in an association rule as a strong rule - lift is the check (bread -> milk: 0.875 confidence, 1.09 lift).",
        "Reporting t-SNE cluster distances or feeding its 2D output into a model as features - it is a visualisation, not a representation.",
        "Conflating data drift with concept drift - the fixes differ (fresh data vs new labels), and the distinction is itself the mark.",
        "Answering 'accuracy' for an imbalanced dataset - say which metric the cost structure demands and why.",
        "Describing boosting as a variance-reduction ensemble - bagging cuts variance, boosting attacks bias sequentially.",
        "Leaving the test set as a working set - any decision made on it (thresholds, features, model choice) invalidates the final number.",
      ],
    },
  ],
};
