/**
 * Academics - RGPV Mechanical Engineering 6th-semester subject: ME-606 RDBMS Lab.
 *
 * Structure mirrors subject-cs-302.ts: units -> one chapter per unit ->
 * numbered sections.  Each section carries body paragraphs, bullets, a
 * diagram, key terms, a callout, a table or a runnable SQL/Python sample, and
 * three exam-style questions (one 7-mark with outline + two shorts).
 */

import type { AcademicSubject } from "./types";

export const me606: AcademicSubject = {
  id: "me-606",
  code: "ME-606",
  title: "RDBMS Lab",
  semester: "VI Semester",
  program: "RGPV · Mechanical Engineering",
  tagline:
    "The complete lab companion to relational databases for mechanical engineers: SQL from CREATE TABLE to correlated subqueries, ER modeling and normalization with a worked inventory case, PL/SQL blocks, cursors and triggers, and a Python-powered workshop management mini project.",
  description:
    "Five units walk from the relational model and core SQL - keys, DDL/DML, WHERE, GROUP BY - through joins, subqueries, views and indexes, into ER modeling, mapping and normalization from 1NF to BCNF with a full inventory case study, then PL/SQL blocks, control flow, cursors, stored procedures and triggers with transactions, and finally ODBC/JDBC connectivity, Python-MySQL programming, the workshop management mini project, backup and recovery, query optimization and security. Every section pairs runnable SQL with the reasoning RGPV examiners actually ask for.",
  accentColor: "#10b981",
  emoji: "DB",
  unitCount: 5,
  totalSections: 25,
  units: [
    {
      number: 1,
      roman: "I",
      title: "RDBMS and SQL",
      summary:
        "The foundation unit: the relational model with its tables, tuples and domains, the key system that keeps rows identifiable, the five SQL command families, row filtering with WHERE, and aggregation with GROUP BY and HAVING.",
      chapter: {
        number: "01",
        title: "RDBMS and SQL Foundations",
        intro:
          "Unit I builds the base every later unit stands on: what a relation is and the structural rules it obeys, how keys and foreign keys identify and connect rows, how SQL commands divide into DDL, DML, DQL, TCL and DCL, how the WHERE clause filters raw rows, and how GROUP BY with HAVING turns raw workshop data into management reports.",
        inOneBreath:
          "A relation is a table of tuples whose atomic values come from defined domains; candidate keys are minimal superkeys, one is chosen as primary, and foreign keys enforce referential integrity with RESTRICT, CASCADE or SET NULL; SQL divides into DDL, DML, DQL, TCL and DCL; WHERE filters raw rows with comparisons, ranges, lists, patterns and IS NULL under three-valued logic; GROUP BY forms buckets for COUNT, SUM, AVG, MIN and MAX; and HAVING - not WHERE - filters those buckets after aggregation, in the logical order FROM, WHERE, GROUP BY, HAVING, SELECT, ORDER BY.",
        sections: [
          {
            number: "1.1",
            title: "The relational model: tables, tuples and domains",
            body: [
              "The relational model, proposed by E. F. Codd in 1970, stores all data in relations, which we meet every day as tables. A relation is made of tuples (rows) and attributes (columns); each attribute draws its values from a domain, the set of permitted values for that column. A machine_id column whose domain is positive integers can never legally hold the text ABC, and the domain rule rejects the attempt before any query runs. The degree of a relation is its number of attributes and the cardinality is its number of tuples at a given moment. Because both theory and products use this vocabulary, exam answers should name the formal term first and the SQL nickname second.",
              "A true relation obeys structural rules that a mere spreadsheet does not. Tuples are unordered, so there is no first row or last row with special meaning, and duplicate tuples are forbidden, which is why every well-designed table declares a primary key. Every attribute value is atomic - a single value from its domain, never a comma-separated list. A cell may hold the special marker NULL, meaning value unknown or not applicable, which is not the same as zero or an empty string. These rules give the relational model its mathematical cleanliness: set operations and predicate logic apply directly to tables, and every query result is itself a relation that can be queried again.",
              "Databases are viewed through a three-level architecture proposed with the ANSI/SPARC standard. The external level gives each user a tailored view - a stores clerk sees stock screens, an accountant sees cost reports. The conceptual level holds the community view: entities, relationships and constraints of the whole workshop database. The internal level describes physical storage - files, indexes and pages. Physical data independence means the internal level can change without touching the conceptual schema; logical data independence protects external views from conceptual changes. Products such as MySQL, Oracle and PostgreSQL implement this separation through the catalog, and an exam answer on architecture should name the three levels, the two mappings between them, and the two independences.",
            ],
            bullets: [
              "Relation: a table; tuple: a row; attribute: a column - the formal terms exam papers expect before the SQL nicknames.",
              "Domain: the set of legal values for an attribute; degree = number of attributes; cardinality = number of rows right now.",
              "No duplicate tuples, no ordered rows, atomic cell values - three structural properties that separate relations from spreadsheets.",
              "NULL means unknown or not applicable - it is neither zero nor blank, and comparisons with NULL need IS NULL.",
              "Three-level architecture: external views, conceptual schema, internal storage; the two mappings give physical and logical data independence.",
            ],
            table: {
              caption: "Relational vocabulary mapped to everyday SQL.",
              headers: ["Formal term", "SQL term", "Workshop example", "Rule enforced"],
              rows: [
                ["Relation", "Table", "machine", "no duplicate rows"],
                ["Tuple", "Row", "(101, lathe, Workshop-1)", "unordered, unique"],
                ["Attribute", "Column", "machine_name", "value drawn from a domain"],
                ["Domain", "Data type + constraint", "positive integers for machine_id", "rejects out-of-range values"],
                ["Degree / Cardinality", "Columns / Rows", "5 columns, 40 machines", "cardinality changes as rows come and go"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "The ANSI/SPARC three-level architecture",
              caption:
                "Index 0 renders on top: users look down through views to storage.",
              layers: [
                { label: "External level", note: "per-user views: clerk screen, cost report" },
                { label: "Conceptual level", note: "community schema: tables, keys, constraints" },
                { label: "Internal level", note: "files, indexes, pages on disk" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "When a question says 'explain the three-level architecture', draw the three boxes, name both mappings (external-conceptual and conceptual-internal) and define physical and logical data independence in one line each. The definitions carry the marks; the picture organizes them.",
            },
            keyTerms: [
              { term: "Relation", definition: "A table in the relational model: a set of tuples sharing the same attributes." },
              { term: "Domain", definition: "The set of permitted values for one attribute; enforced by data types and CHECK constraints." },
              { term: "Data independence", definition: "Immunity of higher schema levels to changes at lower levels - physical (storage) and logical (conceptual)." },
            ],
            examQuestions: [
              {
                q: "Explain the three-level DBMS architecture with a neat diagram. Distinguish physical data independence from logical data independence, and state the structural properties a relation must satisfy.",
                marks: 7,
                outline: [
                  "Draw external, conceptual and internal levels with the two mappings labelled.",
                  "External level: individual user views, each a tailored window on the data.",
                  "Conceptual level: the community view - entities, relationships, constraints.",
                  "Internal level: physical storage - files, indexes, access paths.",
                  "Physical data independence: change storage without changing the conceptual schema.",
                  "Logical data independence: change the conceptual schema without breaking external views.",
                  "Structural properties: no duplicate tuples, unordered rows, atomic values, NULL allowed.",
                ],
              },
              {
                q: "Define degree and cardinality of a relation with one example each.",
                marks: 2,
              },
              {
                q: "Why is NULL not the same as zero or an empty string? Show how COUNT(*) and COUNT(column) differ on a table that contains NULLs.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.2",
            title: "Keys: candidate, primary, foreign and referential integrity",
            body: [
              "A key is an attribute or set of attributes that identifies tuples. A superkey is any set that uniquely identifies a row, but it may carry extra baggage; a candidate key is a minimal superkey - remove any attribute from it and uniqueness breaks. One candidate key is promoted to the primary key, and the rest become alternate keys. A composite key spans two or more columns, as when (item_id, store_id) together identify one stock row. Candidate keys are the model's honest identifiers: examiners expect you to list all of them for a small table, then justify which one deserves primary status.",
              "A foreign key in one table references the primary key of another, gluing the two into a relationship. Referential integrity forbids a maintenance row citing machine 999 when no machine 999 exists, and it governs what happens on delete or update: RESTRICT refuses the parent change, CASCADE ripples it to the children, SET NULL orphans children by blanking the foreign key, and SET DEFAULT restores a default value. Declaring the foreign key moves the checking burden from every application program to the engine itself, so no forgotten IF statement can ever corrupt the link. In the lab, ON DELETE CASCADE on maintenance rows keeps history consistent when a machine record is retired.",
              "Choosing a primary key is a design decision with long shadows. A natural key such as a chassis number is meaningful but may change or leak private data; a surrogate key - an auto-increment integer with no business meaning - never changes and reveals nothing. Composite natural keys keep related tables compact but make every join longer to write. What is never acceptable is having no key at all: without uniqueness, duplicates creep in, updates hit the wrong row, and the relational guarantees collapse. The practical recipe: prefer a short surrogate primary key, keep natural identifiers as UNIQUE columns, and put indexes on every foreign key because joins will hammer them.",
            ],
            bullets: [
              "Superkey: any attribute set that uniquely identifies tuples; a candidate key is a minimal superkey.",
              "Primary key: the chosen candidate key - unique, non-NULL, ideally short and stable; the rest are alternate keys.",
              "Foreign key: column(s) referencing another table's primary key; enforces referential integrity at the engine level.",
              "Referential actions: RESTRICT blocks the parent change, CASCADE propagates it, SET NULL / SET DEFAULT neutralize children.",
              "Surrogate vs natural key: auto-increment surrogates are stable and meaningless; natural keys carry business meaning but can change.",
            ],
            codeExample: {
              language: "sql",
              caption: "Declaring keys on the workshop schema - the lab's first script.",
              code: `-- machines: surrogate primary key, natural key kept UNIQUE
CREATE TABLE machine (
  machine_id    INT AUTO_INCREMENT PRIMARY KEY,
  serial_no     VARCHAR(20) NOT NULL UNIQUE,
  machine_name  VARCHAR(50) NOT NULL,
  location      VARCHAR(30)
);

-- maintenance: composite natural key + foreign keys with actions
CREATE TABLE maintenance (
  machine_id    INT NOT NULL,
  service_date  DATE NOT NULL,
  cost          DECIMAL(9,2) CHECK (cost >= 0),
  technician_id INT NOT NULL,
  PRIMARY KEY (machine_id, service_date),
  FOREIGN KEY (machine_id)    REFERENCES machine(machine_id)
    ON DELETE CASCADE,
  FOREIGN KEY (technician_id) REFERENCES employee(emp_id)
    ON DELETE RESTRICT
);`,
            },
            diagram: {
              kind: "fork",
              title: "Choosing the primary key for a new table",
              caption:
                "One start, four strategies - the last one silently corrupts data.",
              start: "A new table needs an identifier",
              branches: [
                { label: "Auto-increment surrogate", outcome: "stable, meaningless, joins stay short", good: true },
                { label: "Natural single-column key", outcome: "meaningful but may change - keep it UNIQUE", good: true },
                { label: "Composite natural key", outcome: "correct when no smaller key exists", good: true },
                { label: "No key declared", outcome: "duplicates creep in; updates hit wrong rows", good: false },
              ],
            },
            callout: {
              type: "warning",
              title: "Primary key is not the same as candidate key",
              body: "A table may have several candidate keys; exactly one is chosen as primary and the others serve as alternate keys. Writing 'primary key and candidate key are identical' is the single most common lost mark in keys questions - one sentence fixes it.",
            },
            keyTerms: [
              { term: "Candidate key", definition: "A minimal set of attributes that uniquely identifies every tuple; primary keys are chosen from these." },
              { term: "Foreign key", definition: "An attribute set in one table referencing the primary key of another, enforcing referential integrity." },
              { term: "Composite key", definition: "A key made of two or more attributes used together, such as (item_id, store_id)." },
            ],
            examQuestions: [
              {
                q: "Define superkey, candidate key, primary key, alternate key and foreign key. Explain how referential integrity is maintained when a parent row is deleted, covering RESTRICT, CASCADE and SET NULL.",
                marks: 7,
                outline: [
                  "Define superkey and show why minimality turns it into a candidate key.",
                  "Primary key: the selected candidate key; uniqueness and non-NULL enforced by the engine.",
                  "Alternate keys: the remaining candidate keys, usually declared UNIQUE.",
                  "Foreign key definition with a maintenance-machine example.",
                  "DELETE RESTRICT: refuse deletion while child rows exist.",
                  "DELETE CASCADE: remove child rows together with the parent.",
                  "SET NULL / SET DEFAULT: keep children, neutralize the reference; close with when each action is appropriate.",
                ],
              },
              {
                q: "What is a surrogate key? Give one advantage and one disadvantage over a natural key.",
                marks: 2,
              },
              {
                q: "A stock table uses (item_id, store_id) as its primary key. Name the key type and explain why item_id alone is insufficient.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.3",
            title: "SQL command families: DDL, DML, DQL, TCL and DCL",
            body: [
              "SQL began as SEQUEL at IBM in the 1970s and became the ANSI and ISO standard language for relational databases. It is declarative: you state which rows and columns you want, and the engine decides how to find them, choosing indexes and join order on your behalf. That division of labor is why the same SELECT runs unchanged on MySQL, Oracle and PostgreSQL even though their internals differ. For a mechanical engineer, SQL is the interface language of every inventory, MES and ERP package in a plant: reading it means you can answer questions the packaged screens never anticipated.",
              "Commands fall into five families. Data Definition Language (DDL) shapes structure: CREATE, ALTER, DROP and TRUNCATE. Data Manipulation Language (DML) moves rows: INSERT, UPDATE and DELETE. Data Query Language (DQL) is essentially SELECT - reading data without changing it. Transaction Control Language (TCL) - COMMIT, ROLLBACK, SAVEPOINT - decides whether DML sticks or vanishes. Data Control Language (DCL) - GRANT and REVOKE - decides who may do what. The families matter because tools treat them differently: many drivers auto-commit DDL immediately, so a CREATE TABLE inside your transaction can silently seal half-finished DML.",
              "Whatever the family, every statement travels the same processing pipeline. The parser checks syntax and builds a parse tree; validation confirms that the named tables and columns exist in the catalog; the optimizer compares candidate plans and picks the cheapest; execution reads and writes pages; and the result set flows back to the client. The catalog - the data dictionary - is itself a set of tables, so you can query metadata with SQL: information_schema in MySQL or USER_TABLES in Oracle reveal the schema you built. Understanding the pipeline explains lab mysteries, such as why a typo in a column name fails instantly while a slow query fails nothing but your patience.",
            ],
            bullets: [
              "DDL - CREATE, ALTER, DROP, TRUNCATE: defines and destroys structure; TRUNCATE empties a table but keeps it.",
              "DML - INSERT, UPDATE, DELETE: changes rows and participates in transactions.",
              "DQL - SELECT reads data; TCL - COMMIT, ROLLBACK, SAVEPOINT - seals or cancels DML.",
              "DCL - GRANT, REVOKE: assigns and removes privileges; the backbone of Unit V security.",
              "Every statement is parsed, validated against the catalog, optimized, then executed - the four stages to name in exams.",
            ],
            table: {
              caption: "The five SQL command families at a glance.",
              headers: ["Family", "Expansion", "Commands", "Acts on"],
              rows: [
                ["DDL", "Data Definition Language", "CREATE, ALTER, DROP, TRUNCATE", "structure (schema objects)"],
                ["DML", "Data Manipulation Language", "INSERT, UPDATE, DELETE", "rows inside tables"],
                ["DQL", "Data Query Language", "SELECT", "rows, read-only"],
                ["TCL", "Transaction Control Language", "COMMIT, ROLLBACK, SAVEPOINT", "pending DML changes"],
                ["DCL", "Data Control Language", "GRANT, REVOKE", "privileges of users and roles"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "How the engine digests one SQL statement",
              caption:
                "The same five stages for SELECT or CREATE - name them in order.",
              stages: [
                { label: "Parse", note: "syntax check, parse tree" },
                { label: "Validate", note: "tables and columns vs the catalog" },
                { label: "Optimize", note: "compare plans, pick the cheapest" },
                { label: "Execute", note: "read/write pages, use indexes" },
                { label: "Fetch", note: "result set streams to the client" },
              ],
            },
            callout: {
              type: "tip",
              title: "Classify commands instantly",
              body: "A favourite short question lists ten commands and asks you to classify them by family. Instant classification is free marks, and mixing up TRUNCATE (DDL, instant, implicitly committed) with DELETE (DML, logged, rollbackable) is the classic trap to avoid.",
            },
            keyTerms: [
              { term: "DDL", definition: "Data Definition Language - CREATE, ALTER, DROP, TRUNCATE; changes schema and usually auto-commits." },
              { term: "TCL", definition: "Transaction Control Language - COMMIT, ROLLBACK, SAVEPOINT; governs durability of DML changes." },
              { term: "Catalog", definition: "The data dictionary: system tables describing every table, column, index and privilege in the database." },
            ],
            examQuestions: [
              {
                q: "Classify SQL commands into DDL, DML, DQL, TCL and DCL with two commands each. Trace the stages an SQL statement passes through inside the engine, from client to result set.",
                marks: 7,
                outline: [
                  "Define the five families and their scope of effect.",
                  "DDL: CREATE, ALTER, DROP, TRUNCATE - structure.",
                  "DML: INSERT, UPDATE, DELETE - rows; DQL: SELECT - reads.",
                  "TCL: COMMIT, ROLLBACK, SAVEPOINT; DCL: GRANT, REVOKE.",
                  "Pipeline stages 1-2: parse the syntax, then validate names against the catalog.",
                  "Stage 3: the optimizer picks among candidate access plans.",
                  "Stages 4-5: execution touches pages; rows stream back to the client.",
                ],
              },
              {
                q: "Differentiate DELETE and TRUNCATE with one example each.",
                marks: 2,
              },
              {
                q: "What is the catalog? Name two catalog queries you ran in the lab and what they revealed.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.4",
            title: "Filtering rows with WHERE",
            body: [
              "The WHERE clause is the gatekeeper of every query: each candidate row is evaluated against its predicate and only rows for which the predicate is TRUE survive. Predicates are built from comparison operators (=, <>, <, >, <=, >=), combined with AND, OR and NOT, and refined with special forms: BETWEEN for inclusive ranges, IN for membership in a list, LIKE for pattern matching, and IS NULL for the missing-value marker. A WHERE clause on the machine table might read WHERE location = 'Workshop-1' AND cost BETWEEN 500 AND 5000 - two conditions that must hold together because AND demands both.",
              "LIKE patterns use two wildcards: percent matches any run of characters, including none, and underscore matches exactly one character. The pattern 'PUMP%' catches 'PUMP-101' and 'PUMPSET'; 'R__' matches only three-letter codes beginning with R. NULL deserves special fear: every comparison with NULL evaluates to UNKNOWN, which is neither TRUE nor FALSE, so WHERE cost > 0 silently drops rows whose cost is NULL. SQL therefore uses three-valued logic - TRUE, FALSE, UNKNOWN - and the only safe NULL test is IS NULL or IS NOT NULL. Assuming NULL behaves like zero is the fastest way to a wrong report total.",
              "Operator precedence bites careless writers: NOT binds tighter than AND, which binds tighter than OR, so a OR b AND c means a OR (b AND c). Parentheses cost nothing and document intent, so a professional query wraps the OR-list explicitly. In the lab, WHERE is where query tuning begins: a predicate written on an indexed column lets the engine seek, while wrapping that column in a function - WHERE YEAR(service_date) = 2024 - forces a full scan because the index stores raw dates, not years. Keep functions off indexed columns, keep ranges open-ended where honest, and the gatekeeper works at index speed.",
            ],
            bullets: [
              "WHERE keeps only rows whose predicate is TRUE; AND, OR, NOT combine predicates with NOT > AND > OR precedence.",
              "BETWEEN is inclusive at both ends; IN replaces a chain of equality ORs.",
              "LIKE wildcards: % = any string (even empty), _ = exactly one character.",
              "Comparisons with NULL yield UNKNOWN - three-valued logic - so test with IS NULL / IS NOT NULL.",
              "Keep functions off indexed columns in WHERE (avoid YEAR(col) = 2024) or the index is wasted and a scan begins.",
            ],
            codeExample: {
              language: "sql",
              caption: "One WHERE clause, every operator family - run it on the maintenance table.",
              code: `SELECT machine_id, service_date, cost, remarks
FROM   maintenance
WHERE  cost BETWEEN 500 AND 5000          -- range (inclusive)
  AND  remarks LIKE '%bearing%'           -- pattern: % any string
  AND  machine_id IN (101, 102, 205)      -- membership list
  AND  technician_id IS NOT NULL          -- safe NULL test
  AND  NOT (service_date < '2024-01-01'); -- parentheses document intent`,
            },
            diagram: {
              kind: "flow",
              title: "Row-by-row evaluation of a WHERE clause",
              caption:
                "The same loop whether the table holds ten rows or ten million.",
              steps: [
                { label: "Take next candidate row", note: "produced by the FROM clause" },
                { label: "Evaluate the predicate", note: "TRUE, FALSE or UNKNOWN" },
                { label: "TRUE: keep the row", note: "anything else is discarded silently" },
                { label: "Rows left? loop", note: "until the source is exhausted" },
                { label: "Result set ready", note: "GROUP BY / ORDER BY see survivors only" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "When asked to 'explain the WHERE clause with examples', write the syntax line first, then show one example each of comparison, range, list, pattern and NULL test. Five tiny examples earn the full spread of marks faster than one long paragraph ever will.",
            },
            keyTerms: [
              { term: "Predicate", definition: "A condition that evaluates to TRUE, FALSE or UNKNOWN for each row; TRUE rows survive the WHERE." },
              { term: "Wildcard", definition: "LIKE placeholder: % matches any string, _ matches exactly one character." },
              { term: "Three-valued logic", definition: "SQL's TRUE / FALSE / UNKNOWN system; every comparison with NULL yields UNKNOWN." },
            ],
            examQuestions: [
              {
                q: "Explain the WHERE clause and its operator families - comparison, logical, range, membership, pattern and NULL tests - with one example each on a maintenance table. Why does SQL need three-valued logic?",
                marks: 7,
                outline: [
                  "State WHERE's position in the SELECT template and its TRUE-only semantics.",
                  "Comparison operators with a one-line example.",
                  "AND / OR / NOT plus precedence: NOT > AND > OR; parenthesize.",
                  "BETWEEN (inclusive) and IN (membership) examples.",
                  "LIKE with % and _ examples on machine names.",
                  "NULL: comparisons yield UNKNOWN, hence IS NULL / IS NOT NULL.",
                  "Conclude: three-valued logic exists because NULL means unknown, not zero.",
                ],
              },
              {
                q: "Write the predicate: machines in Workshop-1 whose names start with LATHE.",
                marks: 2,
              },
              {
                q: "Why does WHERE cost > 500 exclude rows whose cost is NULL? How would you include them?",
                marks: 3,
              },
            ],
          },
          {
            number: "1.5",
            title: "Aggregation: GROUP BY and HAVING",
            body: [
              "Aggregate functions collapse many rows into one number: COUNT counts, SUM adds, AVG averages, MIN and MAX find the extremes. Applied to a whole table, COUNT(*) returns the total stock count in one scalar; applied per group, it returns one figure per group. The GROUP BY clause draws the group boundaries: GROUP BY location forms one bucket per workshop bay, and the engine computes the aggregates separately inside each bucket. Every column in the SELECT list must then be either inside an aggregate or named in GROUP BY, because the engine needs to know which single value to print for a whole group.",
              "HAVING filters groups after aggregation, where WHERE filtered raw rows before it. The question 'which locations average more than 2000 per service?' needs the average computed first, so it must be asked with HAVING AVG(cost) > 2000; writing WHERE AVG(cost) > 2000 is a syntax error because WHERE runs before any group exists. The clauses execute in a fixed logical order: FROM assembles the source, WHERE prunes rows, GROUP BY forms buckets, HAVING prunes buckets, SELECT projects columns, and ORDER BY sorts what survives. Knowing that order explains most GROUP BY mysteries, including why a column alias invented in SELECT cannot be referenced inside HAVING.",
              "Practical reports combine both filters. A monthly consumption report might read: SELECT item_id, MONTH(issue_date) AS mon, SUM(qty) FROM issue WHERE issue_date >= '2024-01-01' GROUP BY item_id, mon HAVING SUM(qty) > 50 ORDER BY mon. WHERE throws out last year's rows early - cheaper for the engine - HAVING then keeps only fast-moving items, and ORDER BY presents the survivors in calendar order. COUNT(*) counts rows including NULL-carrying ones while COUNT(column) skips NULLs, a distinction that quietly changes totals. In the lab, GROUP BY reports are the payoff queries: the first moment raw workshop data turns into management information.",
            ],
            bullets: [
              "Aggregates: COUNT, SUM, AVG, MIN, MAX - collapse many rows into one scalar per group.",
              "GROUP BY forms the buckets; every selected column must be aggregated or grouped.",
              "HAVING filters groups after aggregation; WHERE filters rows before - aggregates are illegal in WHERE.",
              "Logical order: FROM, WHERE, GROUP BY, HAVING, SELECT, ORDER BY - SELECT aliases are invisible to HAVING.",
              "COUNT(*) counts all rows; COUNT(col) skips NULLs - pick deliberately in reports.",
            ],
            codeExample: {
              language: "sql",
              caption: "A monthly consumption report using WHERE, GROUP BY, HAVING and ORDER BY together.",
              code: `SELECT item_id,
       MONTH(issue_date)    AS mon,
       SUM(qty)             AS total_qty,
       ROUND(AVG(qty), 1)   AS avg_qty
FROM   issue
WHERE  issue_date >= '2024-01-01'     -- filter rows first
GROUP  BY item_id, mon                -- form the buckets
HAVING SUM(qty) > 50                  -- filter groups only
ORDER  BY mon, total_qty DESC;`,
            },
            diagram: {
              kind: "matrix",
              title: "WHERE vs HAVING - which filter, which level",
              caption: "Rows are filtered before grouping; groups are filtered after it.",
              axes: {
                x: "Clause: WHERE (left) vs HAVING (right)",
                y: "Level: raw rows (top) vs formed groups (bottom)",
              },
              quadrants: [
                { label: "WHERE on raw rows", note: "issue_date >= '2024-01-01' - correct" },
                { label: "WHERE on aggregate", note: "WHERE SUM(qty) > 50 - rejected: no groups exist yet" },
                { label: "HAVING on plain column", note: "only grouped columns; nonstandard elsewhere - avoid" },
                { label: "HAVING on groups", note: "HAVING SUM(qty) > 50 - correct" },
              ],
            },
            callout: {
              type: "tip",
              title: "Say the question out loud first",
              body: "If the question mentions an aggregate - total, average, count - the filter belongs in HAVING; if it mentions a raw fact - a date, a location - it belongs in WHERE. This one habit fixes the most common lab and exam error in this unit.",
            },
            keyTerms: [
              { term: "Aggregate function", definition: "A function (COUNT, SUM, AVG, MIN, MAX) that reduces a set of values to a single scalar." },
              { term: "GROUP BY", definition: "The clause that partitions rows into buckets so aggregates can be computed per bucket." },
              { term: "HAVING", definition: "A filter applied to groups after aggregation; the only legal place to test aggregate values." },
            ],
            examQuestions: [
              {
                q: "Differentiate WHERE and HAVING with a query that uses both. Explain the logical order in which SQL processes the clauses of a SELECT statement.",
                marks: 7,
                outline: [
                  "WHERE filters individual rows before grouping; HAVING filters whole groups after.",
                  "Aggregates are illegal in WHERE because groups do not exist yet.",
                  "Give one combined query: WHERE on date, GROUP BY, HAVING on SUM.",
                  "Walk the logical order: FROM, WHERE, GROUP BY, HAVING, SELECT, ORDER BY.",
                  "Consequence: SELECT aliases cannot appear in HAVING.",
                  "Show COUNT(*) vs COUNT(col) treatment of NULLs.",
                  "Close with the guideline: raw facts in WHERE, aggregate facts in HAVING.",
                ],
              },
              {
                q: "Write a query listing the number of machines at each location.",
                marks: 2,
              },
              {
                q: "Find the departments whose average service cost exceeds 5000, listing department and average cost.",
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
      title: "Advanced SQL",
      summary:
        "The querying workhorse: inner, outer and self joins, set operations, scalar and correlated subqueries, and the two performance tools every schema needs - views for abstraction and indexes for speed.",
      chapter: {
        number: "02",
        title: "Joins, Subqueries, Views and Indexes",
        intro:
          "Unit II turns single-table queries into answers over the whole schema: inner joins that pair rows, outer joins that preserve them, self joins that pair a table with itself, set operations that stack results, subqueries that nest questions inside questions, views that store queries as virtual tables, and indexes that make the difference between a seek and a scan.",
        inOneBreath:
          "Inner joins keep only matched pairs; left, right and full outer joins preserve one or both sides with NULL padding, and LEFT JOIN plus WHERE child.key IS NULL is the anti-join; self joins alias one table twice to pair rows with each other; UNION, UNION ALL, INTERSECT and EXCEPT stack result sets vertically; subqueries nest SELECTs as scalars, lists or derived tables, correlated ones re-running per outer row; views are stored queries used for simplicity and security; and indexes are B-trees that trade write speed for seek speed under the left-prefix rule.",
        sections: [
          {
            number: "2.1",
            title: "Inner joins",
            body: [
              "Normalization scatters one fact across many tables, and joins reassemble it. The inner join of two tables pairs rows that satisfy a join predicate - usually equality between a foreign key and the key it references. Conceptually the engine forms the Cartesian product (every left row against every right row) and keeps the pairs whose predicate is TRUE; real engines use smarter loops and hashes, but the result is identical. Columns from both sides merge horizontally into one wide result. A machine row joined to its maintenance rows yields one output row per service, each carrying machine details plus service details.",
              "The syntax is FROM machine m INNER JOIN maintenance t ON m.machine_id = t.machine_id; the INNER keyword is optional and usually omitted. An equi-join is any join whose predicate is equality; a natural join is an equi-join on all same-named columns with those columns printed once - MySQL supports NATURAL JOIN, but the implicit matching makes it fragile in real schemas. Three or more tables chain naturally: FROM machine JOIN maintenance ON ... JOIN employee ON ... walks machine to service to technician. Table aliases (m, t, e) are not decoration - qualified column names keep the query readable once two tables share a column name such as machine_id.",
              "An inner join is a strict match-maker: rows on either side without a partner disappear. A machine that has never been serviced shows up in no inner-join report - a silent bias that misleads management summaries, and the reason outer joins exist (next section). In the nested-loop picture, the engine reads a left row, scans the right table for matches, emits the pairs, and repeats; with an index on the right key, that scan becomes a seek and large joins stay fast. In the lab, joins are the heart of almost every report: machine-wise cost, technician-wise job count, item-wise consumption - every one of them an inner join in disguise.",
            ],
            bullets: [
              "Inner join: pairs rows whose join predicate (usually FK = PK equality) is TRUE; unmatched rows vanish.",
              "Equi-join: predicate is equality; natural join: implicit equality on all shared column names.",
              "Aliases (m, t) plus qualified columns (m.machine_id) keep multi-table queries unambiguous.",
              "Chain joins: machine JOIN maintenance JOIN employee - each ON links exactly one pair of tables.",
              "Index the join columns (usually the FK) so the nested loop's inner scan becomes a seek.",
            ],
            codeExample: {
              language: "sql",
              caption: "Two-table and three-table inner joins over the workshop schema.",
              code: `-- machine-wise service spend
SELECT m.machine_name, COUNT(t.service_date) AS services,
       SUM(t.cost) AS total_cost
FROM   machine m
JOIN   maintenance t ON t.machine_id = m.machine_id
GROUP  BY m.machine_name;

-- three tables: which technician serviced which machine
SELECT m.machine_name, e.emp_name, t.service_date, t.cost
FROM   machine m
JOIN   maintenance t ON t.machine_id = m.machine_id
JOIN   employee e    ON e.emp_id = t.technician_id
ORDER  BY t.service_date DESC;`,
            },
            diagram: {
              kind: "flow",
              title: "Nested-loop execution of an inner join",
              caption:
                "The textbook mental model - engines optimize it, but the result is the same.",
              steps: [
                { label: "Read next left row", note: "from machine" },
                { label: "Scan the right table", note: "maintenance via index on machine_id" },
                { label: "Predicate TRUE?", note: "ON m.machine_id = t.machine_id" },
                { label: "Emit the combined row", note: "columns of both tables" },
                { label: "Repeat / advance", note: "unmatched rows never appear" },
              ],
            },
            callout: {
              type: "warning",
              title: "The missing ON clause",
              body: "FROM machine, maintenance with no WHERE is a Cartesian product: every machine paired with every service, row counts explode, and averages become nonsense. If a joined result suddenly shows thousands of rows, check the ON clause before blaming the data.",
            },
            keyTerms: [
              { term: "Join", definition: "An operation that combines rows of two tables where a predicate between their columns holds." },
              { term: "Equi-join", definition: "A join whose predicate is equality between columns of the two tables." },
              { term: "Cartesian product", definition: "All possible row pairs of two tables; the default when no join condition is given." },
            ],
            examQuestions: [
              {
                q: "What is a join? Explain the inner join with syntax, a two-table and a three-table example, and describe how a nested-loop join executes it.",
                marks: 7,
                outline: [
                  "Define join and its purpose after normalization split the data.",
                  "Syntax: FROM a JOIN b ON a.x = b.x; INNER is optional.",
                  "Two-table example: machine with maintenance.",
                  "Three-table chain: machine - maintenance - employee.",
                  "Nested loop: for each left row, scan the right for matches; emit the pairs.",
                  "An index on the inner column turns scans into seeks.",
                  "Note: unmatched rows disappear - motivates outer joins.",
                ],
              },
              {
                q: "Write the join that lists machine names with each machine's service dates.",
                marks: 2,
              },
              {
                q: "Distinguish equi-join and natural join. Why is NATURAL JOIN risky in production schemas?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.2",
            title: "Outer joins: left, right and full",
            body: [
              "A left outer join keeps every row of the left table and, where no partner matches on the right, pads the missing right columns with NULLs. List every machine with its services and a lathe that has never been serviced still appears once, its service columns blank. That completeness is exactly what audits and stocktaking demand: the absence of a match is information. A right outer join is the mirror image - every right row survives - and because any RIGHT JOIN can be rewritten by swapping the tables, teams standardize on LEFT JOIN and swap table order instead.",
              "A full outer join keeps unmatched rows from both sides, NULL-padding whichever side lacks a partner. MySQL has no FULL OUTER JOIN keyword: it is emulated as a LEFT JOIN UNION a RIGHT JOIN. The most valuable outer-join idiom is the anti-join: LEFT JOIN the child table, then test WHERE child.key IS NULL - the surviving left rows are precisely those with no match. 'Which machines have never been serviced?' becomes a single query: LEFT JOIN maintenance ... WHERE t.machine_id IS NULL. Counting needs equal care: COUNT(*) counts padded rows too, so COUNT(child.key) is the honest match count.",
              "Choose the join by the question. If only confirmed pairs matter - invoice lines with their items - inner join. If one side is the subject - all machines, with their services if any - left outer join keyed from the subject side. If either side may be unmatched - merging two directories - full outer join. Right joins appear mostly in legacy queries, but you must read them fluently. In the lab logbook, every outer-join report should state which table is the preserved side and why, because that one sentence is what the examiner checks when the NULLs start appearing in your output.",
            ],
            bullets: [
              "LEFT JOIN preserves all left rows; unmatched right columns arrive as NULL.",
              "RIGHT JOIN is the mirror; full outer join preserves both sides (MySQL: LEFT JOIN UNION RIGHT JOIN).",
              "Anti-join pattern: LEFT JOIN + WHERE child.key IS NULL finds rows with no match at all.",
              "Count with COUNT(child.key), not COUNT(*), when NULL-padding must not inflate totals.",
              "Pick the preserved side by asking which table the report is actually about.",
            ],
            codeExample: {
              language: "sql",
              caption: "Completeness reports: the anti-join and the honest count.",
              code: `-- machines that have NEVER been serviced (anti-join)
SELECT m.machine_id, m.machine_name
FROM   machine m
LEFT   JOIN maintenance t ON t.machine_id = m.machine_id
WHERE  t.machine_id IS NULL;

-- every machine with its service count (0 if none)
SELECT m.machine_name,
       COUNT(t.service_date) AS services,   -- 0, not 1, when padded
       COALESCE(SUM(t.cost), 0) AS spend
FROM   machine m
LEFT   JOIN maintenance t ON t.machine_id = m.machine_id
GROUP  BY m.machine_name;`,
            },
            diagram: {
              kind: "fork",
              title: "Choosing the join that answers the question",
              caption:
                "The subject of the report decides which side is preserved.",
              start: "Two tables must be combined",
              branches: [
                { label: "Only matched pairs matter", outcome: "INNER JOIN - invoice lines with items", good: true },
                { label: "Left table is the subject", outcome: "LEFT JOIN - all machines, services if any", good: true },
                { label: "Unmatched rows on both sides matter", outcome: "FULL OUTER JOIN - directory merge", good: true },
                { label: "Join with no ON condition", outcome: "Cartesian product - row explosion, wrong totals", good: false },
              ],
            },
            callout: {
              type: "exam",
              title: "The anti-join is a favourite",
              body: "Almost every paper asks a 'find the ... with no ...' question: employees with no dependent, machines with no service. The answer shape is always LEFT JOIN then WHERE right-side key IS NULL. Practice writing it in one breath - it is worth full marks in two lines.",
            },
            keyTerms: [
              { term: "Left outer join", definition: "A join preserving every left-table row, NULL-padding right columns when no match exists." },
              { term: "Anti-join", definition: "The LEFT JOIN ... WHERE right.key IS NULL pattern that lists rows with no partner." },
              { term: "NULL padding", definition: "Filling unmatched columns with NULLs so the row shape stays uniform in the result." },
            ],
            examQuestions: [
              {
                q: "Explain left, right and full outer joins with one example each. Show how the anti-join pattern finds machines that have never been serviced, and why COUNT(*) would overcount there.",
                marks: 7,
                outline: [
                  "Define outer join vs inner: unmatched rows survive via NULL padding.",
                  "LEFT JOIN example: all machines with their services.",
                  "RIGHT JOIN: mirror image; rewrite by swapping sides.",
                  "FULL OUTER JOIN: both sides preserved; MySQL emulation with UNION.",
                  "Anti-join: LEFT JOIN maintenance + WHERE t.machine_id IS NULL.",
                  "COUNT(*) counts padded rows; COUNT(t.service_date) counts real matches.",
                  "Conclude with which join answers which management question.",
                ],
              },
              {
                q: "Write a LEFT JOIN listing every employee and the machines they serviced (if any).",
                marks: 2,
              },
              {
                q: "How is FULL OUTER JOIN emulated in MySQL? Write the template.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.3",
            title: "Self joins and set operations",
            body: [
              "A self join uses one table twice by giving it two aliases, letting rows of the same table meet each other. The classic exercise pairs each employee with their manager: FROM employee w JOIN employee m ON w.manager_id = m.emp_id - the worker alias and the manager alias are two views of one table. In a workshop, the same pattern links a machine to the machine that replaced it, or a spare item to its preferred substitute. Without aliases a self join is impossible - the engine could not tell which copy of a column you mean - so aliasing here is a necessity, not a style choice.",
              "Set operations stack results vertically instead of joining horizontally. UNION concatenates two result sets and removes duplicates; UNION ALL keeps them and is cheaper because no deduplication pass runs. INTERSECT returns rows present in both sets; EXCEPT (MINUS in Oracle) returns rows of the first set absent from the second. Both operands must have the same number of columns with compatible types - only the first set's column names survive - and a single ORDER BY at the very end sorts the combined result. MySQL 8 ships INTERSECT and EXCEPT; on older versions, IN subqueries emulate them.",
              "The two families answer different questions: joins add columns (wider rows), set operations add rows (longer results). A monthly report might UNION this month's issues with last month's to compare, or stack the consumables list above the spares list into one screen. A duplicate-hunting trick uses INTERSECT to find technicians appearing on two different rosters. In the exam, remember the shape rule: same column count, compatible types, ORDER BY once at the end. And when a UNION query feels slow, ask whether the duplicates it removes were ever there - UNION ALL is often the honest and faster choice.",
            ],
            bullets: [
              "Self join: one table, two aliases; the employee-manager pattern w JOIN m ON w.manager_id = m.emp_id.",
              "UNION deduplicates; UNION ALL keeps duplicates and skips the dedup cost.",
              "INTERSECT: rows in both sets; EXCEPT / MINUS: rows of set 1 missing from set 2.",
              "Shape rule: equal column count, compatible types; the final ORDER BY sorts the whole stack.",
              "Joins widen (more columns), set operations lengthen (more rows) - choose by the question.",
            ],
            codeExample: {
              language: "sql",
              caption: "One table meeting itself, then two queries stacked with UNION.",
              code: `-- self join: each technician and their mentor
SELECT w.emp_name AS technician,
       m.emp_name AS mentor
FROM   employee w
JOIN   employee m ON w.manager_id = m.emp_id;

-- set operation: machines serviced in January OR February, deduplicated
SELECT machine_id, 'Jan' AS mon FROM maintenance
WHERE  MONTH(service_date) = 1
UNION                          -- deduplicates across both sets
SELECT machine_id, 'Feb' AS mon FROM maintenance
WHERE  MONTH(service_date) = 2
ORDER  BY machine_id;`,
            },
            diagram: {
              kind: "compare",
              title: "Join vs set operation - two different combiners",
              caption:
                "Joins grow rows wider; set operations grow results longer.",
              left: {
                heading: "JOIN (horizontal)",
                items: [
                  "Combines columns of two tables",
                  "Needs an ON predicate",
                  "Result width = sum of both sides",
                  "Matched pairs only (inner case)",
                  "One shared key column drives it",
                ],
              },
              right: {
                heading: "Set operation (vertical)",
                items: [
                  "Stacks rows of two queries",
                  "No ON clause - shape must match",
                  "Result length = rows of both sets",
                  "UNION removes duplicates",
                  "ORDER BY once, at the very end",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Draw self joins as two copies",
              body: "In self-join questions, draw the two aliases as if they were two physical copies of the table, then draw the connecting arrow for the ON condition. The picture converts a confusing query into an obvious one, and examiners count it as a proper diagram.",
            },
            keyTerms: [
              { term: "Self join", definition: "A join of a table with itself using two aliases, relating rows within one table." },
              { term: "UNION ALL", definition: "Set operation concatenating result sets while keeping duplicates; cheaper than UNION." },
              { term: "INTERSECT", definition: "Set operation returning rows that appear in both operand result sets." },
            ],
            examQuestions: [
              {
                q: "What is a self join? Explain with the employee-manager example, then differentiate UNION and UNION ALL, and state the compatibility rules for set operations.",
                marks: 7,
                outline: [
                  "Define self join: one table, two aliases, one ON predicate.",
                  "Employee-manager query with w and m aliases written out.",
                  "Second example: machine replaced_by machine.",
                  "UNION concatenates and deduplicates; UNION ALL keeps duplicates and is faster.",
                  "INTERSECT and EXCEPT / MINUS in one line each.",
                  "Compatibility: same column count, compatible types, names from the first set.",
                  "ORDER BY applies once, to the combined result.",
                ],
              },
              {
                q: "Write a self join listing each item and its substitute item.",
                marks: 2,
              },
              {
                q: "When is UNION ALL preferred to UNION? Give a report example where duplicates are legitimate.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.4",
            title: "Subqueries: scalar, list and correlated",
            body: [
              "A subquery is a SELECT nested inside another statement, evaluated to feed its parent. A scalar subquery returns exactly one row and one column and can sit anywhere a value can: WHERE cost > (SELECT AVG(cost) FROM maintenance). A row subquery returns one row of several columns; a table subquery returns many rows and belongs after IN, ANY, ALL, EXISTS, or in a FROM clause. When it appears in FROM it is called a derived table and must be aliased: FROM (SELECT ...) AS monthly. Nesting reads like a story: the inner question is answered first, then the outer question uses its answer.",
              "IN tests membership against a multi-row result: WHERE machine_id IN (SELECT machine_id FROM maintenance WHERE cost > 10000) lists machines that had expensive services. ANY and ALL compare against every row of the result - cost > ALL (...) means beating the maximum. EXISTS stops at the first matching row and is the engine-friendly way to ask 'is there at least one': WHERE EXISTS (SELECT 1 FROM maintenance t WHERE t.machine_id = m.machine_id). A correlated subquery references the outer query's columns, so it cannot be evaluated once - it re-runs for each outer row, a fact that explains both its power and its cost.",
              "Correlation is the concept examiners probe. In the correlated average query - machines whose last service cost exceeds their own average - the inner SELECT mentions m.machine_id from the outer row, so the engine loops: fetch a machine, compute its average, test it, keep or drop, next. In the lab, subqueries power the reports joins cannot phrase directly: greater than average, items not issued in ninety days (the NOT EXISTS anti-join form). The rewriting rule of thumb: when a subquery reads clearer, use it; when it re-runs per row over a big table, try a join or an index - and verify both with EXPLAIN.",
            ],
            bullets: [
              "Scalar subquery: one row, one column - usable anywhere a value is expected.",
              "Table subquery: many rows - pair with IN, ANY/SOME, ALL, EXISTS, or use as a derived table in FROM.",
              "Correlated subquery: references outer columns and re-evaluates per outer row - powerful but costly.",
              "EXISTS stops at the first match - the efficient 'at least one' test; NOT EXISTS is the anti-join.",
              "Derived table: a subquery in FROM; must be aliased, behaves like a temporary view.",
            ],
            codeExample: {
              language: "sql",
              caption: "Four subquery shapes every lab report eventually needs.",
              code: `-- 1. scalar: services costlier than the workshop average
SELECT machine_id, cost
FROM   maintenance
WHERE  cost > (SELECT AVG(cost) FROM maintenance);

-- 2. membership: machines with any costly service
SELECT machine_name
FROM   machine
WHERE  machine_id IN (SELECT machine_id
                      FROM maintenance
                      WHERE cost > 10000);

-- 3. correlated: services above their OWN machine average
SELECT m.machine_name, t.cost
FROM   machine m
JOIN   maintenance t ON t.machine_id = m.machine_id
WHERE  t.cost > (SELECT AVG(cost)
                 FROM maintenance t2
                 WHERE t2.machine_id = m.machine_id);

-- 4. existence: machines with no service ever
SELECT machine_name
FROM   machine m
WHERE  NOT EXISTS (SELECT 1 FROM maintenance t
                   WHERE t.machine_id = m.machine_id);`,
            },
            diagram: {
              kind: "cycle",
              title: "Correlated subquery - the loop that costs",
              caption:
                "The inner query cannot run once; it re-runs for every outer row.",
              steps: [
                { label: "Fetch next outer row", note: "current machine m" },
                { label: "Bind outer value", note: "t2.machine_id = m.machine_id" },
                { label: "Run inner query", note: "AVG for this machine only" },
                { label: "Compare and keep/drop", note: "outer predicate evaluated" },
                { label: "Outer rows left? loop", note: "repeat until the outer set ends" },
              ],
            },
            callout: {
              type: "warning",
              title: "Scalar expectation broken",
              body: "The commonest subquery error: using = where the inner query returns several rows fails with 'subquery returns more than one row'. Either you meant IN, or the inner query needs a MAX or AVG to collapse to one value. Say this explicitly when a question asks you to debug subqueries.",
            },
            keyTerms: [
              { term: "Scalar subquery", definition: "A subquery returning a single value; legal wherever an expression is legal." },
              { term: "Correlated subquery", definition: "A subquery referencing outer-query columns, re-evaluated once per outer row." },
              { term: "Derived table", definition: "A subquery in the FROM clause, aliased, treated as a table by the outer query." },
            ],
            examQuestions: [
              {
                q: "Define subqueries and their types - scalar, row and table. Explain correlated vs non-correlated subqueries with one example each, and compare IN with EXISTS.",
                marks: 7,
                outline: [
                  "Define subquery; nesting inside WHERE / FROM / SELECT.",
                  "Scalar, row and table subqueries with one-line examples.",
                  "Non-correlated: evaluated once; example with AVG.",
                  "Correlated: references an outer column; per-row evaluation loop.",
                  "IN: membership against the whole result set.",
                  "EXISTS: semi-join, stops at first match; NOT EXISTS is the anti-join.",
                  "Note performance: indexes and EXPLAIN keep correlated forms honest.",
                ],
              },
              {
                q: "Write a query listing items whose unit price exceeds the average unit price.",
                marks: 2,
              },
              {
                q: "Rewrite 'machines with no service' using NOT EXISTS instead of a LEFT JOIN.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.5",
            title: "Views and indexes",
            body: [
              "A view is a stored query with a table-like face: CREATE VIEW emp_public AS SELECT ... saves the SELECT text in the catalog, not the data. Query the view and the engine expands its definition, runs the query against the base tables, and returns rows. Views earn their keep three ways: they simplify - a six-line join becomes a one-word 'table'; they secure - a clerk sees emp_public without the salary columns; they stabilize - applications keep querying the same view while the base schema evolves underneath. A view is virtual: it stores no rows of its own (materialized views, which cache rows, are an optional extra some engines offer).",
              "A view built on a single base table without aggregates or DISTINCT is updatable: INSERT through it and the row lands in the base table. Add GROUP BY or aggregation and updating becomes logically impossible - which row would change? WITH CHECK OPTION forbids inserts or updates that would make rows fall outside the view's WHERE clause, closing a sneaky hole where a row you just inserted is invisible the moment you query for it. Indexes are the other half of this section: a B-tree over one or more columns lets the engine seek matching entries instead of scanning the table - the difference between a millisecond and a minute on a million rows.",
              "Indexes trade write speed for read speed: every INSERT, UPDATE and DELETE must also maintain each index, so a table with six indexes pays six maintenance costs. Index what queries actually seek: primary keys get one automatically, foreign keys deserve one because joins hammer them, and the WHERE columns of hot reports come next. Composite indexes obey the left-prefix rule - an index on (location, machine_name) serves location filters and location+name filters but never name-only filters. Unique indexes enforce business keys such as serial_no. The lab discipline: add an index, re-run EXPLAIN, and record the before and after - that comparison is the mini-project's tuning story.",
            ],
            bullets: [
              "View: a stored query acting as a virtual table - simplification, column-level security, schema stability.",
              "Updatable views: single table, no aggregates/DISTINCT; WITH CHECK OPTION keeps inserts inside the view's WHERE.",
              "Index: a B-tree enabling seeks instead of full scans; speeds SELECT, slows every INSERT/UPDATE/DELETE.",
              "Index priorities: primary key (automatic), then foreign keys, then hot WHERE and JOIN columns.",
              "Left-prefix rule: a composite index on (a, b) serves a and a+b filters, never b alone.",
            ],
            codeExample: {
              language: "sql",
              caption: "Creating and using a view, then indexing the join column it hides.",
              code: `-- 1. a security view: technician details without salary
CREATE VIEW emp_public AS
SELECT emp_id, emp_name, dept, phone
FROM   employee;

-- 2. query it like any table
SELECT * FROM emp_public WHERE dept = 'Maintenance';

-- 3. index the foreign key the reports join on
CREATE INDEX idx_maint_machine ON maintenance(machine_id);

-- 4. prove the index is used
EXPLAIN SELECT COUNT(*) FROM maintenance
WHERE  machine_id = 101;`,
            },
            diagram: {
              kind: "flow",
              title: "Answering a query that names a view",
              caption:
                "The view's definition is merged with the user query - then everything is normal.",
              steps: [
                { label: "User queries the view", note: "SELECT * FROM emp_public" },
                { label: "Catalog lookup", note: "fetch the stored definition" },
                { label: "Merge definitions", note: "expand the view into base-table terms" },
                { label: "Optimize as one query", note: "indexes chosen normally" },
                { label: "Execute on base tables", note: "the view stores no rows itself" },
              ],
            },
            callout: {
              type: "exam",
              title: "Can we insert through a view?",
              body: "A two-mark regular. The full-marks answer has three clauses: yes when the view maps to one table without aggregation, no when GROUP BY or DISTINCT appears, and WITH CHECK OPTION prevents inserting rows the view itself cannot show. Quote all three.",
            },
            keyTerms: [
              { term: "View", definition: "A stored SELECT presented as a virtual table; queries against it expand into base-table queries." },
              { term: "Index", definition: "A B-tree structure over column(s) that turns full scans into seeks at the cost of write maintenance." },
              { term: "Left-prefix rule", definition: "A composite index is usable only when its leading columns appear in the filter." },
            ],
            examQuestions: [
              {
                q: "What is a view? Explain its advantages, updatability rules and WITH CHECK OPTION. Then define an index, explain B-tree seeks, and list the costs indexes impose on DML.",
                marks: 7,
                outline: [
                  "Define view as a stored query / virtual table.",
                  "Advantages: simplification, security via hidden columns, schema stability.",
                  "Updatability: single base table, no aggregates, no DISTINCT.",
                  "WITH CHECK OPTION: inserts/updates must remain visible through the view.",
                  "Index: one B-tree entry per key, ordered for seeks.",
                  "Reads speed up; INSERT/UPDATE/DELETE pay maintenance per index.",
                  "Guideline: index keys, foreign keys and hot filter columns.",
                ],
              },
              {
                q: "Write the statement creating a view of machines located in Workshop-1.",
                marks: 2,
              },
              {
                q: "Why can a grouped view not be updated? Explain with a SUM view example.",
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
      title: "Database Design and Normalization",
      summary:
        "The design discipline: ER modeling with entities, attributes, relationships and cardinality, the mapping rules that convert diagrams into tables, functional dependencies with Armstrong's axioms, normalization from 1NF to BCNF, and a complete inventory case study.",
      chapter: {
        number: "03",
        title: "ER Modeling, Mapping and Normal Forms",
        intro:
          "Unit III moves from querying to designing: how to draw an ER diagram before a single table exists, how to map that diagram into a relational schema by fixed rules, how functional dependencies encode business facts and generate keys through closures, how the normal forms from 1NF to BCNF remove anomalies, and how one real inventory ledger walks the entire ladder in a worked case study.",
        inOneBreath:
          "Entities, attributes and relationships with cardinality and participation make the ER diagram; mapping turns each entity into a table, each 1:N into a foreign key on the N side, each M:N into a junction table, and each multi-valued attribute into its own table; functional dependencies X -> Y state that equal X forces equal Y, Armstrong's axioms generate the rest, and closures find the keys; 1NF demands atomic values, 2NF removes partial dependencies, 3NF removes transitive ones, and BCNF requires every determinant to be a superkey - and the inventory ledger case walks the whole ladder step by step.",
        sections: [
          {
            number: "3.1",
            title: "Entity-Relationship modeling",
            body: [
              "An ER diagram is the drawing you make before a single CREATE TABLE: entities are the things the workshop tracks (MACHINE, EMPLOYEE, ITEM), drawn as rectangles; attributes are their properties, drawn as ellipses; relationships connect entities, drawn as diamonds. Each entity owns a key attribute - the underlined identifier such as machine_id - and attributes may be composite (address split into street and city), multi-valued (a list of skills, drawn as a double ellipse), or derived (age, computed from date of birth). A strong entity exists on its own; a weak entity, drawn with a double rectangle, depends on its owner and borrows the owner's key plus its own partial key.",
              "Relationships carry cardinality: one-to-one (one employee holds one identity card), one-to-many (one department employs many technicians), many-to-many (many technicians maintain many machines over time). Participation is total when every instance must join the relationship - every machine is located somewhere - and partial when some may stay out - some employees hold no certification. The M:N relationship itself can own attributes: REPAIRS between EMPLOYEE and MACHINE carries repair_date and hours, which are attributes of the pair, not of either participant. Cardinality plus participation fully documents the business rule, and both are exactly what the mapping step of the next section consumes.",
              "The modeling discipline is a checklist: read the requirements, circle the nouns - candidate entities; circle the verbs - candidate relationships; strip out nouns that are merely attributes (a machine's location is a column, not an entity, unless the workshop tracks bays as objects); mark keys; set cardinality and participation for every relationship. Two passes help: the first catches the obvious entities, the second catches multi-valued attributes and hidden M:N relationships, such as 'an item is supplied by many vendors'. The exam favourite asks you to draw an ER diagram from a paragraph - the checklist, applied honestly, converts the paragraph into the diagram line by line.",
            ],
            bullets: [
              "Entity: rectangle; weak entity: double rectangle with a double-diamond identifying relationship.",
              "Attribute: ellipse; key attribute underlined; multi-valued: double ellipse; derived: computed, dashed.",
              "Relationship: diamond, with cardinality 1:1, 1:N or M:N and total or partial participation.",
              "M:N relationships may own attributes (repair_date) that belong to the pair, not to either entity.",
              "Method: nouns become entities, verbs become relationships, then mark keys, cardinality and participation.",
            ],
            table: {
              caption: "ER notation - what each shape asserts.",
              headers: ["Shape", "Meaning", "Workshop example"],
              rows: [
                ["Rectangle", "Entity (strong)", "MACHINE, EMPLOYEE"],
                ["Double rectangle", "Weak entity, owner-dependent", "DEPENDENT of an employee"],
                ["Ellipse", "Simple attribute", "machine_name"],
                ["Double ellipse", "Multi-valued attribute", "skills of a technician"],
                ["Diamond", "Relationship with cardinality", "EMPLOYEE repairs MACHINE (M:N)"],
                ["Underlined attribute", "Key attribute", "machine_id"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Building an ER diagram from a requirements paragraph",
              caption:
                "Five passes - each pass answers one question.",
              stages: [
                { label: "Find entities", note: "nouns that own data: MACHINE" },
                { label: "List attributes", note: "properties; flag composite and multi-valued" },
                { label: "Mark keys", note: "underline the identifier of each entity" },
                { label: "Add relationships", note: "verbs: repairs, works_in, supplies" },
                { label: "Set cardinality + participation", note: "1:N, M:N; total or partial" },
              ],
            },
            callout: {
              type: "exam",
              title: "Marks sit in the details",
              body: "In 'draw the ER diagram' questions the marks live in specifics: every key underlined, every diamond labelled with a verb, both ends of every relationship annotated 1 / N / M, and participation noted where total. A beautiful diagram missing cardinality labels loses half the marks.",
            },
            keyTerms: [
              { term: "Entity", definition: "A real-world object about which data is stored, drawn as a rectangle and identified by a key attribute." },
              { term: "Cardinality", definition: "The number of instances of one entity that may pair with one instance of another: 1:1, 1:N, M:N." },
              { term: "Weak entity", definition: "An entity without a sufficient key of its own; identified by its owner's key plus a partial key." },
            ],
            examQuestions: [
              {
                q: "Explain entities, attributes and relationships in ER modeling. Describe attribute classification and relationship cardinality with participation, using a workshop example.",
                marks: 7,
                outline: [
                  "Define entity, attribute and relationship with their shapes.",
                  "Attribute types: simple, composite, multi-valued (double ellipse), derived, key (underlined).",
                  "Strong vs weak entities; a weak entity needs owner key + partial key.",
                  "Cardinalities 1:1, 1:N, M:N with workshop examples.",
                  "Participation: total (every machine located) vs partial (some certified).",
                  "M:N relationships may own attributes (repair_date on REPAIRS).",
                  "Draw the workshop fragment: EMPLOYEE - REPAIRS - MACHINE fully labelled.",
                ],
              },
              {
                q: "Distinguish a strong entity from a weak entity with one example each.",
                marks: 2,
              },
              {
                q: "Why is repair_date an attribute of the REPAIRS relationship and not of EMPLOYEE or MACHINE?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.2",
            title: "Mapping ER diagrams to relational tables",
            body: [
              "Mapping converts the drawing into CREATE TABLE statements by fixed rules. A strong entity becomes a table; its simple attributes become columns; its key attribute becomes PRIMARY KEY; composite attributes flatten (address becomes street and city). Multi-valued attributes are special: they cannot stay as columns because cells must be atomic, so each becomes its own table - skill(emp_id, skill) - with a foreign key back to the owner and a composite primary key. Weak entities become tables whose primary key is the owner's key plus the partial key: dependent(emp_id, dep_name, relation), with emp_id also a foreign key to employee.",
              "Relationships map by cardinality. A 1:1 relationship becomes a foreign key on either side - choose the side with total participation to avoid NULLs. A 1:N relationship becomes a foreign key on the N side: dept_id in the employee table, never emp_id in the department table, because the department would need many columns for its many members. An M:N relationship becomes a new junction table whose primary key is the pair of foreign keys and whose extra columns are the relationship's own attributes: repair(machine_id, emp_id, repair_date, hours) with PRIMARY KEY (machine_id, emp_id, repair_date). Junction tables are why 'many-to-many' never survives into the relational schema.",
              "The final pass polishes: name tables consistently, choose data types deliberately (DECIMAL for money, DATE for dates), add NOT NULL where participation is total, and index every foreign key. Then verify by tracing two sample rows through the schema - one machine, one repair - and checking that every fact is stored exactly once. In the lab, this trace doubles as the test data plan. Mapping questions are generous: they hand you the ER diagram and ask for the schema, and the rules above convert it mechanically into CREATE TABLE statements, each rule worth its own marks.",
            ],
            bullets: [
              "Entity to table: attributes to columns, key attribute to PRIMARY KEY, composite attributes flattened.",
              "Multi-valued attribute to its own table with owner FK + composite PK; never a comma-list column.",
              "1:1 relationship: FK on either side - prefer the total-participation side.",
              "1:N relationship: FK always on the N side; M:N relationship: new junction table keyed by both FKs.",
              "After mapping: NOT NULL for total participation, indexes on FKs, and a sample-row trace to verify.",
            ],
            codeExample: {
              language: "sql",
              caption: "The workshop ER fragment mapped to tables.",
              code: `-- strong entities
CREATE TABLE employee (
  emp_id    INT PRIMARY KEY,
  emp_name  VARCHAR(50) NOT NULL,
  dept_id   INT NOT NULL
);

CREATE TABLE machine (
  machine_id   INT PRIMARY KEY,
  machine_name VARCHAR(50) NOT NULL
);

-- M:N relationship REPAIRS -> junction table
CREATE TABLE repair (
  machine_id  INT NOT NULL,
  emp_id      INT NOT NULL,
  repair_date DATE NOT NULL,
  hours       DECIMAL(4,1),
  PRIMARY KEY (machine_id, emp_id, repair_date),
  FOREIGN KEY (machine_id) REFERENCES machine(machine_id),
  FOREIGN KEY (emp_id)    REFERENCES employee(emp_id)
);

-- multi-valued attribute skills -> own table
CREATE TABLE skill (
  emp_id INT NOT NULL,
  skill  VARCHAR(30) NOT NULL,
  PRIMARY KEY (emp_id, skill),
  FOREIGN KEY (emp_id) REFERENCES employee(emp_id)
);`,
            },
            diagram: {
              kind: "flow",
              title: "ER construct to relational construct - the decision chain",
              caption:
                "Each shape type has exactly one correct destination.",
              steps: [
                { label: "Strong entity", note: "becomes a table; key becomes PK" },
                { label: "Weak entity", note: "table with owner PK + partial key" },
                { label: "1:N relationship", note: "FK on the N side" },
                { label: "M:N relationship", note: "junction table, composite PK of both FKs" },
                { label: "Multi-valued attribute", note: "own table with owner FK" },
              ],
            },
            callout: {
              type: "tip",
              title: "The two rules students flip",
              body: "1:N puts the foreign key on the N side (the many), and M:N creates a brand-new table rather than a foreign key. Write both rules on the first page of your lab file - together they settle every mapping exercise in this unit.",
            },
            keyTerms: [
              { term: "Junction table", definition: "A table representing an M:N relationship, keyed by the foreign keys of both participants." },
              { term: "Mapping", definition: "The rule-based conversion of an ER diagram into relational tables, columns and keys." },
              { term: "Partial key", definition: "The discriminator that, combined with the owner's key, identifies a weak entity's rows." },
            ],
            examQuestions: [
              {
                q: "State the rules for mapping an ER diagram to a relational schema. Cover entities, weak entities, 1:1, 1:N and M:N relationships, and multi-valued attributes with examples.",
                marks: 7,
                outline: [
                  "Strong entity -> table; attributes -> columns; key -> PRIMARY KEY.",
                  "Composite attributes flatten; derived attributes are dropped.",
                  "Weak entity -> table keyed by owner PK + partial key, with an FK to the owner.",
                  "1:1 -> FK on either side; prefer the total-participation side.",
                  "1:N -> FK on the N side, with the department-employee example.",
                  "M:N -> junction table with composite PK; relationship attributes become columns.",
                  "Multi-valued attribute -> separate table with owner FK.",
                ],
              },
              {
                q: "Why does an M:N relationship become a separate table? Answer with REPAIRS.",
                marks: 2,
              },
              {
                q: "Map 'a machine has many inspection records; each inspection names one inspector' to two CREATE TABLE statements.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.3",
            title: "Functional dependencies and Armstrong's axioms",
            body: [
              "A functional dependency X -> Y (read 'X determines Y') says: whenever two rows agree on X, they must agree on Y - know the item number and the item name is fixed. In the inventory relation Stock(item_no, store, qty, item_name, store_city), item_no -> item_name holds because each item number has exactly one name, while (item_no, store) -> qty holds because quantity is fixed per item-store pair. FDs are facts about the business, not observations about today's data: a table that accidentally has one item name today can still hide a violated dependency that fires tomorrow. They are the raw material of normalization.",
              "Armstrong's axioms generate every dependency the given set implies. Reflexivity: if Y is a subset of X then X -> Y. Augmentation: if X -> Y then XZ -> YZ. Transitivity: if X -> Y and Y -> Z then X -> Z. From these, derived rules speed up reasoning: union (X -> Y and X -> Z give X -> YZ), decomposition (X -> YZ gives X -> Y and X -> Z), and pseudo-transitivity (X -> Y and YW -> Z give XW -> Z). The closure X+ of an attribute set is everything derivable from X; computing it by repeated application of the axioms is the standard exam exercise and the algorithmic heart of key finding.",
              "Closure answers the key question mechanically: a set K is a candidate key exactly when K+ contains every attribute of the relation. For Stock with item_no -> item_name, store -> store_city and (item_no, store) -> qty, the closure of (item_no, store) is the full attribute set, so the pair is the candidate key; item_no alone closes to {item_no, item_name} and store alone to {store, store_city}, so neither qualifies. Dependencies of a part of the key (item_no -> item_name) are partial and drive 2NF; dependencies reaching non-key attributes through other non-key attributes (the key -> store -> store_city pattern) are transitive and drive 3NF. FD fluency is the price of entry to the next section.",
            ],
            bullets: [
              "Functional dependency X -> Y: same X forces same Y; a business fact, not an observation from today's rows.",
              "Trivial FD: Y is a subset of X; nontrivial FDs are the ones that shape designs.",
              "Armstrong's axioms: reflexivity, augmentation, transitivity - sound and complete for FD inference.",
              "Derived rules: union, decomposition, pseudo-transitivity - shortcuts built from the axioms.",
              "Candidate key test: K is a key iff its closure K+ equals the full attribute set.",
            ],
            table: {
              caption: "Dependencies of Stock(item_no, store, qty, item_name, store_city).",
              headers: ["FD", "Type", "Normalization role"],
              rows: [
                ["item_no -> item_name", "nontrivial, partial", "violates 2NF - part of the key determines"],
                ["store -> store_city", "nontrivial, transitive", "violates 3NF - non-key to non-key"],
                ["(item_no, store) -> qty", "nontrivial, full-key", "perfectly fine - the whole key determines"],
                ["item_no -> item_no", "trivial", "always true, ignored in design"],
                ["(item_no, store) -> item_no", "trivial", "reflexivity; carries no information"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Armstrong's axioms vs the derived rules",
              caption:
                "Three axioms generate everything; the derived rules are convenience shortcuts.",
              left: {
                heading: "The three axioms",
                items: [
                  "Reflexivity: Y subset of X implies X -> Y",
                  "Augmentation: X -> Y implies XZ -> YZ",
                  "Transitivity: X -> Y and Y -> Z implies X -> Z",
                  "Sound: nothing false is derived",
                  "Complete: everything true is derivable",
                ],
              },
              right: {
                heading: "Derived rules",
                items: [
                  "Union: X -> Y, X -> Z implies X -> YZ",
                  "Decomposition: X -> YZ implies X -> Y and X -> Z",
                  "Pseudo-transitivity: X -> Y, YW -> Z implies XW -> Z",
                  "Each provable from the axioms",
                  "Used to compute closures faster",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Show your closure rounds",
              body: "The closure computation is pure procedure and pure marks: start with the seed set, apply every given FD whose left side is inside the set, add the right sides, repeat until nothing changes. Show each round on a separate line - examiners award the iterations, not just the final answer.",
            },
            keyTerms: [
              { term: "Functional dependency", definition: "A constraint X -> Y: whenever two tuples agree on X they must agree on Y." },
              { term: "Armstrong's axioms", definition: "Reflexivity, augmentation and transitivity - the sound and complete inference rules for FDs." },
              { term: "Attribute closure", definition: "The set X+ of all attributes functionally determined by X; full closure means X is a key." },
            ],
            examQuestions: [
              {
                q: "Define functional dependency with examples. State Armstrong's axioms, prove the union rule, and compute the closure of (item_no, store) for a given FD set.",
                marks: 7,
                outline: [
                  "Define X -> Y with the Stock relation example.",
                  "Trivial vs nontrivial dependencies.",
                  "Armstrong's axioms: reflexivity, augmentation, transitivity, each with a one-line example.",
                  "Prove union from the axioms: X -> Y and X -> Z imply X -> YZ.",
                  "Closure algorithm: seed the set, expand, repeat until stable.",
                  "Trace (item_no, store)+ round by round to the full attribute set.",
                  "Conclude: closure equals all attributes, so the pair is a candidate key.",
                ],
              },
              {
                q: "Define a trivial functional dependency and give one example.",
                marks: 2,
              },
              {
                q: "Given item_no -> item_name and store -> store_city, why is store_city a transitive dependency from the key (item_no, store)?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.4",
            title: "Normalization: 1NF to BCNF",
            body: [
              "Badly structured tables breed anomalies. Insert anomaly: you cannot record a new item until some store stocks it. Update anomaly: an item name repeated in 500 rows must be changed 500 times, and one miss creates two names for one item. Delete anomaly: deleting the last row of a store also destroys that store's city. The cause is redundancy - the same fact stored many times - and the cure is decomposition guided by functional dependencies. Each normal form forbids one more class of dependency, and the slogan to remember is: every non-key attribute must depend on the key, the whole key, and nothing but the key.",
              "First normal form demands atomic values and no repeating groups - one fact per cell, no comma-lists of skills, no jan_qty and feb_qty columns. Second normal form, relevant only when the key is composite, removes partial dependencies: attributes depending on part of the key move to their own table, so item_name leaves Stock to live in Item. Third normal form removes transitive dependencies: store_city depends on store, not on the stock key, so it moves to Store. BCNF tightens 3NF's clause: for every nontrivial FD X -> Y, X must be a superkey - the determinant itself must be a key, not merely contain or overlap key attributes.",
              "A classic BCNF counterexample: Teaching(student, course, instructor) with the policy that each course has exactly one instructor, so course -> instructor, while (student, course) is the key. The FD course -> instructor has a left side that is not a superkey, so BCNF is violated even though 3NF is satisfied. Decompose into (course, instructor) and (student, course) - and the anomalies are gone. Normalization is not dogma: heavily decomposed schemas force many joins, so data-warehouse designers sometimes denormalize deliberately for read speed. For the exam, however, the sequence 1NF to BCNF with the anomaly names, the dependency each form kills, and one worked decomposition is the full-marks recipe.",
            ],
            bullets: [
              "Anomalies: insert (cannot record a fact alone), update (change it many times), delete (lose a fact by accident).",
              "1NF: atomic values, no repeating groups - no comma lists, no month-by-month columns.",
              "2NF: 1NF plus no partial dependency - nothing depends on part of a composite key.",
              "3NF: 2NF plus no transitive dependency - no non-key attribute depends on another non-key attribute.",
              "BCNF: every nontrivial FD's left side is a superkey; the (student, course, instructor) example shows 3NF is not enough.",
            ],
            table: {
              caption: "Normal forms - what each one removes.",
              headers: ["Form", "Removes", "Rule to test", "Escapee example"],
              rows: [
                ["1NF", "repeating groups, multi-valued cells", "every cell holds one atomic value", "skills column holding 'welding, wiring'"],
                ["2NF", "partial dependencies", "non-key attrs depend on the whole key", "item_name keyed by item_no alone"],
                ["3NF", "transitive dependencies", "non-key attrs depend on nothing but the key", "store_city via store"],
                ["BCNF", "non-superkey determinants", "every determinant is a superkey", "course -> instructor"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "The normalization ladder",
              caption:
                "Each tier assumes the ones below it; BCNF sits at the top.",
              tiers: [
                { label: "BCNF", note: "every determinant is a superkey" },
                { label: "3NF", note: "no transitive dependencies" },
                { label: "2NF", note: "no partial dependencies" },
                { label: "1NF", note: "atomic values only" },
              ],
            },
            callout: {
              type: "exam",
              title: "The mnemonic worth quoting",
              body: "The key, the whole key, and nothing but the key, so help me Codd - maps to 2NF (whole key) and 3NF (nothing but the key). Quote it, then name the anomaly each violation causes; pairing form with anomaly is what fetches full marks.",
            },
            keyTerms: [
              { term: "Insert anomaly", definition: "Inability to store one fact because another unrelated fact is missing; caused by redundancy." },
              { term: "Partial dependency", definition: "A non-key attribute depending on only part of a composite primary key; removed by 2NF." },
              { term: "BCNF", definition: "Boyce-Codd normal form: every nontrivial functional dependency has a superkey as its left side." },
            ],
            examQuestions: [
              {
                q: "Explain insert, update and delete anomalies with one example each. Define 1NF, 2NF, 3NF and BCNF, and show a table that is in 3NF but not in BCNF.",
                marks: 7,
                outline: [
                  "Define the three anomalies on a redundant Stock-like table.",
                  "Blame redundancy; decomposition guided by FDs is the cure.",
                  "1NF: atomic cells, no repeating groups.",
                  "2NF: no partial dependency - attributes keyed by part of the composite key move out.",
                  "3NF: no transitive dependency - non-key to non-key moves out.",
                  "BCNF: every nontrivial FD's left side is a superkey.",
                  "Give (student, course, instructor) with course -> instructor: 3NF yes, BCNF no; decompose.",
                ],
              },
              {
                q: "State the condition for a relation to be in 2NF.",
                marks: 2,
              },
              {
                q: "Identify the normal form of R(a, b, c) with key (a, b) and FD b -> c. Justify your answer.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.5",
            title: "Case study: normalizing the inventory ledger",
            body: [
              "Start from the clerk's reality: one flat register table Issues(issue_no, issue_date, item_no, item_name, unit_price, supplier_name, supplier_city, store, qty). It is not even 1NF: the item details repeat in every row, supplier facts ride along with each issue, and one issue holding several items crams them into one row as comma-lists. Unfold those lists into one row per item and the table reaches 1NF - at the price of massive redundancy: the item name and supplier city repeat once per issue line. The FDs are now visible: item_no -> item_name, unit_price; supplier_name -> supplier_city; (issue_no, item_no) -> qty; issue_no -> issue_date, supplier_name, store.",
              "Second normal form: the key is (issue_no, item_no), but item_name and unit_price depend on item_no alone - partial dependencies. Move them out to Item(item_no, item_name, unit_price) and leave IssueLine(issue_no, item_no, qty) behind. Third normal form: issue_no -> supplier_name and supplier_name -> supplier_city form a chain, so supplier_city depends on the key only through the supplier - a transitive dependency. Extract Supplier(supplier_name, supplier_city) and keep supplier_name as the foreign key. Each extraction is mechanical: find the FD whose left side is not a key, create a table keyed by that left side, and replace the attributes in the original by a reference.",
              "The final schema is Issue(issue_no, issue_date, supplier_name, store), IssueLine(issue_no, item_no, qty), Item(item_no, item_name, unit_price), Supplier(supplier_name, supplier_city) - four small tables replacing one monster, with every fact stored exactly once. Test the victory with the anomalies: a new item can be inserted before any issue exists; a price change touches one row; deleting the last issue of a supplier keeps the supplier. Reassembling the original view is now a two-join query, which is the honest price of cleanliness. This case study is the exact workflow your mini-project logbook documents: flat register, FDs, decomposition steps, final schema, and the anomaly test.",
            ],
            bullets: [
              "Step 0: unfold comma-list item columns into one row per line - that alone earns 1NF.",
              "Step to 2NF: split attributes keyed by part of the composite key (item details) into Item.",
              "Step to 3NF: break the supplier chain (issue -> supplier -> city) into Supplier.",
              "Final schema: Issue, IssueLine, Item, Supplier - each fact stored exactly once.",
              "Verify by re-running the three anomalies; reassemble the flat view with a two-join query.",
            ],
            codeExample: {
              language: "sql",
              caption: "The normalized inventory schema - the destination of the case study.",
              code: `CREATE TABLE item (
  item_no    INT PRIMARY KEY,
  item_name  VARCHAR(50) NOT NULL,
  unit_price DECIMAL(9,2) NOT NULL
);

CREATE TABLE supplier (
  supplier_name VARCHAR(50) PRIMARY KEY,
  supplier_city VARCHAR(30) NOT NULL
);

CREATE TABLE issue (
  issue_no      INT PRIMARY KEY,
  issue_date    DATE NOT NULL,
  supplier_name VARCHAR(50),
  store         VARCHAR(20),
  FOREIGN KEY (supplier_name) REFERENCES supplier(supplier_name)
);

CREATE TABLE issue_line (
  issue_no INT,
  item_no  INT,
  qty      INT NOT NULL CHECK (qty > 0),
  PRIMARY KEY (issue_no, item_no),
  FOREIGN KEY (issue_no) REFERENCES issue(issue_no),
  FOREIGN KEY (item_no)  REFERENCES item(item_no)
);`,
            },
            diagram: {
              kind: "flow",
              title: "The ledger's journey to 3NF",
              caption:
                "Each arrow removes one dependency class - annotate the arrows in the exam.",
              steps: [
                { label: "Flat register", note: "repeated item and supplier facts" },
                { label: "1NF: unfold lists", note: "one row per issue line" },
                { label: "2NF: extract Item", note: "kills partial dependencies" },
                { label: "3NF: extract Supplier", note: "kills the transitive dependency" },
                { label: "Four clean tables", note: "every fact exactly once" },
              ],
            },
            callout: {
              type: "exam",
              title: "Process marks first",
              body: "Case-study questions award process marks: show the FD list at each stage, name the dependency you are removing, and draw the arrow diagram of the decomposition. Jumping straight to the final schema without the intermediate steps surrenders half the marks even when the answer is correct.",
            },
            keyTerms: [
              { term: "Decomposition", definition: "Splitting a relation into smaller relations to remove redundancy, guided by functional dependencies." },
              { term: "Redundancy", definition: "Storing the same fact in multiple rows; the root cause of all three anomalies." },
              { term: "Line item", definition: "A detail row of a transaction; in normalized form, one row per issue-item pair in IssueLine." },
            ],
            examQuestions: [
              {
                q: "Normalize the flat Issues register (issue details, item details, supplier details, quantities) to 3NF. Show every intermediate stage, the FDs, and the final schema.",
                marks: 7,
                outline: [
                  "Present the unnormalized register and unfold the lists to reach 1NF.",
                  "List the FDs: item_no -> item_name, unit_price; supplier_name -> supplier_city; (issue_no, item_no) -> qty.",
                  "Identify the composite key (issue_no, item_no).",
                  "Remove partial dependencies: extract Item keyed by item_no (2NF).",
                  "Remove the transitive dependency: extract Supplier keyed by supplier_name (3NF).",
                  "Write the final four tables with keys and foreign keys.",
                  "Verify with the insert, update and delete anomaly tests.",
                ],
              },
              {
                q: "Which dependency made supplier_city a 3NF violation? Name its type.",
                marks: 2,
              },
              {
                q: "Write the two-join query that rebuilds the clerk's flat view from the normalized tables.",
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
      title: "PL/SQL Programming",
      summary:
        "Procedural SQL inside the database: the four-zone block structure, IF/CASE decision-making and the three loop forms, cursors that walk result sets, stored procedures and functions, triggers that fire automatically, and the transaction guarantees of ACID.",
      chapter: {
        number: "04",
        title: "Blocks, Control Flow, Cursors and Stored Programs",
        intro:
          "Unit IV gives SQL memory and decisions: the PL/SQL block with its DECLARE, BEGIN, EXCEPTION and END zones, variables anchored to columns, control flow with IF, CASE and three loop types, cursors that process many rows one at a time, procedures and functions stored in the catalog, triggers that react to table events, and the transaction discipline of COMMIT, ROLLBACK and SAVEPOINT.",
        inOneBreath:
          "A PL/SQL block runs DECLARE, BEGIN, EXCEPTION and END top to bottom, anchoring variables with %TYPE and %ROWTYPE and reading single rows with SELECT INTO; IF ladders, CASE expressions and LOOP, WHILE and FOR loops control execution; explicit cursors walk result sets through DECLARE, OPEN, FETCH and CLOSE, with %NOTFOUND ending the loop; procedures take IN, OUT and IN OUT parameters while functions return one value usable inside SQL; triggers fire automatically BEFORE or AFTER row events with :OLD and :NEW; and transactions guarantee ACID through COMMIT, ROLLBACK and SAVEPOINT.",
        sections: [
          {
            number: "4.1",
            title: "PL/SQL block structure",
            body: [
              "SQL is declarative and cannot remember a variable, repeat a loop or branch on a condition; PL/SQL adds exactly that procedural layer inside the database. Every program is a block with up to four zones, executed top to bottom: DECLARE (optional) introduces variables; BEGIN starts the executable zone; EXCEPTION (optional) catches runtime errors; END closes the block. An anonymous block typed at the SQL*Plus or SQL Developer prompt runs immediately and is not stored - perfect for lab scripts. Named blocks - procedures, functions and triggers, covered later in this unit - store the same skeleton in the catalog for reuse.",
              "Variables are declared one per line as name TYPE := value. The anchoring trick removes guesswork: v_name machine.machine_name%TYPE inherits the column's type, so a schema change never breaks the block; a whole row fits in one machine%ROWTYPE record with dotted access to its columns. Constants use CONSTANT: tax CONSTANT NUMBER(5,2) := 18.00. To read a single row into variables, SELECT ... INTO is the PL/SQL way - but it is strict: zero rows raise NO_DATA_FOUND and two or more rows raise TOO_MANY_ROWS, which is precisely why the exception section exists and why every SELECT INTO deserves a handler.",
              "The EXCEPTION section pairs named errors with handlers: WHEN NO_DATA_FOUND THEN print a friendly message, WHEN DUP_VAL_ON_INDEX THEN report the duplicate, WHEN OTHERS THEN capture SQLERRM as the last resort. Unhandled exceptions roll back the block's work. Blocks nest - an inner block can carry its own handlers - and DBMS_OUTPUT.PUT_LINE is the lab's printing workhorse (enable it with SET SERVEROUTPUT ON). In the exam, the block skeleton drawn with its four labelled zones plus one working example - read a machine, print its status, handle absence - demonstrates every structural concept at once.",
            ],
            bullets: [
              "Four zones: DECLARE (variables), BEGIN (action), EXCEPTION (handlers), END - memorize the skeleton.",
              "Anchoring: %TYPE copies a column's type, %ROWTYPE copies a whole row's shape - schema-proof code.",
              "SELECT INTO is single-row only: zero rows raises NO_DATA_FOUND, many rows raises TOO_MANY_ROWS.",
              "Handlers: WHEN NO_DATA_FOUND, WHEN DUP_VAL_ON_INDEX, WHEN OTHERS THEN ... SQLERRM.",
              "DBMS_OUTPUT.PUT_LINE prints; SET SERVEROUTPUT ON makes the output visible in SQL*Plus.",
            ],
            codeExample: {
              language: "sql",
              caption: "A complete anonymous block: declare, read, print, handle.",
              code: `SET SERVEROUTPUT ON

DECLARE
  v_name   machine.machine_name%TYPE;   -- anchored to the column
  v_cost   maintenance.cost%TYPE;
BEGIN
  SELECT m.machine_name, t.cost
  INTO   v_name, v_cost
  FROM   machine m
  JOIN   maintenance t ON t.machine_id = m.machine_id
  WHERE  t.service_date = DATE '2024-06-01'
    AND  ROWNUM = 1;

  DBMS_OUTPUT.PUT_LINE('Machine: ' || v_name ||
                       ', cost: '  || v_cost);
EXCEPTION
  WHEN NO_DATA_FOUND THEN
    DBMS_OUTPUT.PUT_LINE('No service on that date.');
  WHEN TOO_MANY_ROWS THEN
    DBMS_OUTPUT.PUT_LINE('Refine the query - many rows.');
  WHEN OTHERS THEN
    DBMS_OUTPUT.PUT_LINE('Error: ' || SQLERRM);
END;
/`,
            },
            diagram: {
              kind: "layers",
              title: "Anatomy of a PL/SQL block",
              caption:
                "Top to bottom is execution order; only BEGIN and END are mandatory.",
              layers: [
                { label: "DECLARE", note: "variables, constants, cursors - optional" },
                { label: "BEGIN", note: "executable statements - mandatory" },
                { label: "EXCEPTION", note: "named handlers - optional" },
                { label: "END;", note: "closes the block; / runs it in SQL*Plus" },
              ],
            },
            callout: {
              type: "tip",
              title: "Skeleton first, logic second",
              body: "In lab exams, write the block skeleton first - DECLARE, BEGIN, EXCEPTION, END - then fill the zones in order. Graders scan for the skeleton before reading logic: a syntactically framed block with a small bug outscores an unframed correct idea.",
            },
            keyTerms: [
              { term: "Anonymous block", definition: "An unnamed PL/SQL block executed immediately and not stored in the database." },
              { term: "%TYPE anchoring", definition: "Declaring a variable with the data type of an existing column, keeping code schema-proof." },
              { term: "Exception handler", definition: "An EXCEPTION-section clause that catches a named runtime error and responds." },
            ],
            examQuestions: [
              {
                q: "Explain the structure of a PL/SQL block with a labelled diagram. Write an anonymous block that reads one machine's details, prints them, and handles NO_DATA_FOUND and TOO_MANY_ROWS.",
                marks: 7,
                outline: [
                  "Draw the four zones: DECLARE, BEGIN, EXCEPTION, END; mark the mandatory two.",
                  "Declare anchored variables with %TYPE.",
                  "SELECT INTO reads a single row into variables.",
                  "Print with DBMS_OUTPUT.PUT_LINE (mention SERVEROUTPUT ON).",
                  "Handler for NO_DATA_FOUND: the zero-row case.",
                  "Handler for TOO_MANY_ROWS: the multi-row case; WHEN OTHERS with SQLERRM.",
                  "Close with END; and the / executor in SQL*Plus.",
                ],
              },
              {
                q: "What do %TYPE and %ROWTYPE do? One line each.",
                marks: 2,
              },
              {
                q: "Why does SELECT INTO fail when the query returns five rows? How is the situation handled?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.2",
            title: "Control flow: IF, CASE and loops",
            body: [
              "PL/SQL branches with IF-THEN-ELSIF-ELSE, evaluated top to bottom until one condition is TRUE; only that branch runs. The classic slip is NULL: a condition evaluating to UNKNOWN selects no branch, so an IF without a final ELSE silently does nothing - always close the ladder. CASE comes in two flavours: a simple CASE on a selector value and a searched CASE with independent conditions; both are cleaner than deep ELSIF ladders, and inside SQL statements CASE becomes an inline value transformer: SELECT ..., CASE WHEN hours > 500 THEN 'OVERHAUL' ELSE 'OK' END AS status.",
              "Loops repeat. The basic LOOP runs forever until EXIT WHEN fires - the condition is checked each time around. WHILE checks before entering, so its body may run zero times. The numeric FOR loop declares its counter implicitly: FOR i IN 1..12 loops twelve times, and REVERSE counts down; the counter cannot be assigned inside the loop. Loops nest - a maintenance checker might loop machines in an outer loop and services in an inner one - and labelled loops (<<outer>>) let EXIT outer leave several levels at once, which is far cleaner than flag variables.",
              "A worked example ties the family together: classify each machine by hours since its last overhaul. The IF ladder assigns a tag - GREEN under 100 hours, AMBER up to 499, RED at 500 and above; a searched CASE reads identically inside SQL; and a cursor FOR loop (next section) walks every machine row so the classification runs over the whole table. In the lab, control flow is where PL/SQL starts earning its keep over plain SQL: same logic, no spreadsheet, no manual steps. Exam answers should show one IF ladder, one CASE expression and one loop of each kind - four small snippets, each with its output predicted.",
            ],
            bullets: [
              "IF-THEN-ELSIF-ELSE: the first TRUE branch wins; an unconditional ELSE guards against NULL conditions.",
              "Simple CASE matches a selector; searched CASE tests independent conditions; both usable inside SQL SELECTs.",
              "LOOP + EXIT WHEN: checked each pass; WHILE may run zero times; FOR i IN 1..n declares its own counter.",
              "REVERSE steps a FOR loop downward; the loop counter is read-only inside the loop.",
              "Labelled loops <<outer>> ... EXIT outer WHEN ... leave nested loops cleanly.",
            ],
            codeExample: {
              language: "sql",
              caption: "The same classification written as an IF ladder, a CASE and a loop.",
              code: `DECLARE
  v_hours NUMBER := 0;
  v_tag   VARCHAR2(10);
BEGIN
  -- IF ladder
  IF v_hours < 100 THEN        v_tag := 'GREEN';
  ELSIF v_hours < 500 THEN     v_tag := 'AMBER';
  ELSE                         v_tag := 'RED';
  END IF;

  -- searched CASE: same logic, SQL-friendly
  v_tag := CASE WHEN v_hours < 100 THEN 'GREEN'
                WHEN v_hours < 500 THEN 'AMBER'
                ELSE 'RED' END;

  -- loop: countdown for overhaul planning
  FOR i IN REVERSE 1..5 LOOP
    DBMS_OUTPUT.PUT_LINE('Check in ' || i || ' days');
  END LOOP;
END;
/`,
            },
            diagram: {
              kind: "fork",
              title: "Classifying a machine by hours since overhaul",
              caption:
                "One ladder, four exits - and the data-error exit students forget.",
              start: "Machine hours since last overhaul",
              branches: [
                { label: "Under 100 hours", outcome: "GREEN tag - routine monitoring", good: true },
                { label: "100 to 499 hours", outcome: "AMBER tag - schedule an inspection", good: true },
                { label: "500 hours or more", outcome: "RED tag - overhaul immediately", good: true },
                { label: "Hours is NULL", outcome: "no branch runs - fix the data first", good: false },
              ],
            },
            callout: {
              type: "warning",
              title: "The NULL trap",
              body: "A favourite viva question: if the driving condition evaluates to UNKNOWN, no ELSIF branch fires and the block continues with an unset variable. Close every ladder with a final ELSE - even one that only raises an alert - so every path assigns a value.",
            },
            keyTerms: [
              { term: "ELSIF ladder", definition: "A chain of IF conditions evaluated top to bottom; the first TRUE branch executes." },
              { term: "EXIT WHEN", definition: "The loop-leaving statement of the basic LOOP; checked once per pass." },
              { term: "Labelled loop", definition: "A named nesting level (<<outer>>) that EXIT can target to leave several loops at once." },
            ],
            examQuestions: [
              {
                q: "Explain decision-making and iteration in PL/SQL: IF-THEN-ELSIF-ELSE, simple and searched CASE, and the three loop forms, with one example each.",
                marks: 7,
                outline: [
                  "IF syntax and the first-TRUE-wins rule.",
                  "NULL condition pitfall; the unconditional ELSE as the guard.",
                  "Simple CASE on a selector vs searched CASE on conditions.",
                  "CASE expression inside a SELECT for inline tagging.",
                  "Basic LOOP with EXIT WHEN; WHILE pre-test semantics.",
                  "Numeric FOR with IN and REVERSE; the counter is read-only.",
                  "Labelled loops and EXIT label for nested cases.",
                ],
              },
              {
                q: "Rewrite 'marks >= 33 pass else fail' as a CASE expression.",
                marks: 2,
              },
              {
                q: "What happens when the condition of a WHILE loop is FALSE at entry? Contrast with the basic LOOP.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.3",
            title: "Cursors",
            body: [
              "SELECT INTO collapses when the query returns many rows - and many rows are the normal case. A cursor is a named handle to a result set that the program walks one row at a time. Implicit cursors are opened by the engine for every DML statement and single-row SELECT; you never declare them, reading only their attributes SQL%ROWCOUNT and SQL%FOUND. Explicit cursors are declared for multi-row work: give the query a name, then control its life cycle yourself. The cursor is PL/SQL's bridge between set-oriented SQL and row-oriented processing - exactly what a report printing one line per machine needs.",
              "An explicit cursor has four stages. DECLARE names the query; OPEN parses and executes it, positioning before the first row; FETCH moves to the next row into variables or a %ROWTYPE record; CLOSE releases the work area. Between fetches, the attributes steer the loop: cursor%FOUND is TRUE if the last fetch got a row, %NOTFOUND signals the end, %ROWCOUNT counts rows fetched so far, and %ISOPEN reports the state. The loop idiom is fetch-process-fetch until %NOTFOUND. The cursor FOR loop compresses all four stages into one line: FOR rec IN c LOOP ... END LOOP opens, fetches and closes automatically, with rec bound to each row.",
              "Two power-ups complete the picture. A parameterized cursor takes arguments at OPEN time, so one declaration serves many filters: CURSOR c_by_loc(p_loc VARCHAR2) IS SELECT ... WHERE location = p_loc. And WHERE CURRENT OF cursor inside a FOR UPDATE cursor lets an UPDATE or DELETE target the row just fetched without re-stating its key - the clean pattern for read-then-fix maintenance sweeps. Performance-minded labs mention BULK COLLECT, which fetches arrays of rows per round trip. The exam classic asks for the four stages, the four attributes and one working cursor FOR loop printing a machine list - all three fit on half a page.",
            ],
            bullets: [
              "Implicit cursors: engine-managed, attributes SQL%ROWCOUNT / SQL%FOUND / SQL%NOTFOUND.",
              "Explicit cursor stages: DECLARE, OPEN, FETCH, CLOSE - name all four in order.",
              "Attributes: c%FOUND, c%NOTFOUND (the loop stopper), c%ROWCOUNT, c%ISOPEN.",
              "Cursor FOR loop: implicit open, fetch and close; rec is auto-declared %ROWTYPE.",
              "WHERE CURRENT OF updates the just-fetched row of a FOR UPDATE cursor.",
            ],
            codeExample: {
              language: "sql",
              caption: "Walking the machine table: the classic loop, then the compact FOR loop.",
              code: `DECLARE
  CURSOR c_machine IS
    SELECT machine_id, machine_name, location
    FROM   machine
    ORDER  BY machine_id;
  v_rec c_machine%ROWTYPE;
BEGIN
  OPEN c_machine;
  LOOP
    FETCH c_machine INTO v_rec;
    EXIT WHEN c_machine%NOTFOUND;
    DBMS_OUTPUT.PUT_LINE(v_rec.machine_id || ' - ' ||
                         v_rec.machine_name || ' @ ' ||
                         v_rec.location);
  END LOOP;
  CLOSE c_machine;

  -- same job in three lines: cursor FOR loop
  FOR rec IN (SELECT machine_id, machine_name
              FROM machine WHERE location = 'Workshop-1') LOOP
    DBMS_OUTPUT.PUT_LINE(rec.machine_id || ': ' || rec.machine_name);
  END LOOP;
END;
/`,
            },
            diagram: {
              kind: "cycle",
              title: "The explicit cursor life cycle",
              caption:
                "FETCH repeats until %NOTFOUND - the heart of every report program.",
              steps: [
                { label: "DECLARE", note: "name the query" },
                { label: "OPEN", note: "parse, execute, position before row 1" },
                { label: "FETCH INTO", note: "advance one row into variables" },
                { label: "c%NOTFOUND?", note: "TRUE means exit; else process and loop" },
                { label: "CLOSE", note: "release the work area" },
              ],
            },
            callout: {
              type: "exam",
              title: "The five-headed cursor answer",
              body: "Answer shape for 'explain cursors': define cursor, distinguish implicit vs explicit, list the four stages, name the four attributes, then write one cursor FOR loop. Five headed lines plus a ten-line program reliably collects the full seven marks.",
            },
            keyTerms: [
              { term: "Cursor", definition: "A named handle to a result set, fetched row by row from PL/SQL." },
              { term: "%NOTFOUND", definition: "Cursor attribute TRUE when the last FETCH read no row; the standard loop-exit signal." },
              { term: "Cursor FOR loop", definition: "A shorthand loop that opens, fetches and closes a cursor automatically." },
            ],
            examQuestions: [
              {
                q: "What are cursors? Differentiate implicit and explicit cursors, explain the four stages of explicit cursor processing with attributes, and write a cursor program that prints all machines with their locations.",
                marks: 7,
                outline: [
                  "Define cursor; why SELECT INTO cannot serve multi-row logic.",
                  "Implicit cursors: engine-opened for DML and single-row SELECT; SQL%ROWCOUNT.",
                  "Explicit stages: DECLARE, OPEN, FETCH, CLOSE in order.",
                  "Attributes: %FOUND, %NOTFOUND, %ROWCOUNT, %ISOPEN.",
                  "Program: declare a cursor over the machine table.",
                  "Loop with FETCH and EXIT WHEN %NOTFOUND; print each row.",
                  "Mention the cursor FOR loop as the compact alternative.",
                ],
              },
              {
                q: "Name the four stages of explicit cursor handling in order.",
                marks: 2,
              },
              {
                q: "What advantage does a cursor FOR loop have over an explicit OPEN/FETCH/CLOSE loop?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.4",
            title: "Procedures and functions",
            body: [
              "Named blocks turn a one-off script into a reusable asset. CREATE OR REPLACE PROCEDURE log_service(p_machine INT, p_cost NUMBER, p_status OUT VARCHAR2) AS ... END; compiles the block into the catalog once; every later call - CALL log_service(101, 2500, s) or EXECUTE from SQL*Plus - reuses the parsed form. Parameters flow three ways: IN (the default) carries values in, OUT carries results back, IN OUT does both. Procedures are the database's API: applications call stable procedure names while the SQL inside evolves, and the DBA can grant EXECUTE on a procedure without granting any table rights at all.",
              "Functions must return exactly one value through RETURN, and because they return values they can live inside SQL: SELECT machine_name, depreciation(machine_id) FROM machine works once depreciation is a stored function. Keep functions pure for SQL use - no OUT parameters, no DML inside (read-consistency rules), and mark DETERMINISTIC when the same input always yields the same output so the optimizer may cache results. Variables inside named blocks behave exactly as in anonymous blocks; the only new machinery is the parameter list and the RETURN. The exam contrast is short: procedures do things, functions compute things.",
              "Choose by the question the block answers. Recording a service (writes rows, writes a log, returns a status string) is a procedure: it performs several actions whose success is not a single value. Computing annual depreciation (one number from purchase cost, salvage value and life) is a function: one input set, one answer, usable everywhere an expression is. Benefits to quote: single point of change - fix the depreciation rule once; reduced network traffic - one call instead of a hundred statements; and security - privilege on the routine, not on the tables. In the mini-project, every menu action is one procedure call.",
            ],
            bullets: [
              "CREATE OR REPLACE PROCEDURE: stored, callable by name; recompiles only when replaced.",
              "Parameter modes: IN (default) reads, OUT writes back, IN OUT does both; functions may not use OUT.",
              "Functions return exactly one value via RETURN and may be called inside SQL statements.",
              "DETERMINISTIC asserts that equal inputs give equal outputs, letting the optimizer cache results.",
              "Benefits: reuse, one point of change, less network traffic, EXECUTE-only privilege without table access.",
            ],
            codeExample: {
              language: "sql",
              caption: "A procedure that logs a service and a function that computes depreciation.",
              code: `CREATE OR REPLACE PROCEDURE log_service(
  p_machine IN  INT,
  p_cost    IN  NUMBER,
  p_status  OUT VARCHAR2)
AS
BEGIN
  INSERT INTO maintenance(machine_id, service_date, cost)
  VALUES (p_machine, SYSDATE, p_cost);
  p_status := 'LOGGED';
EXCEPTION
  WHEN OTHERS THEN
    p_status := 'FAILED: ' || SQLERRM;
END log_service;
/

CREATE OR REPLACE FUNCTION depreciation(
  p_cost    IN NUMBER,
  p_salvage IN NUMBER,
  p_life    IN NUMBER)
  RETURN NUMBER DETERMINISTIC
IS
BEGIN
  RETURN (p_cost - p_salvage) / p_life;  -- straight-line
END depreciation;
/

-- the function called inside SQL
SELECT machine_name,
       depreciation(purchase_cost, salvage_value, useful_life)
       AS yearly_dep
FROM   machine;`,
            },
            diagram: {
              kind: "compare",
              title: "Procedure vs function - the exam contrast",
              caption:
                "Does the block DO something, or COMPUTE something?",
              left: {
                heading: "Procedure",
                items: [
                  "May return nothing, or values via OUT",
                  "Called with CALL / EXECUTE",
                  "Cannot be embedded in SQL statements",
                  "Ideal for multi-step actions",
                  "Example: log_service writes rows",
                ],
              },
              right: {
                heading: "Function",
                items: [
                  "Must return exactly one value",
                  "Callable inside SELECT / WHERE",
                  "RETURN statement is mandatory",
                  "Ideal for computing a value",
                  "Example: depreciation(cost, salvage, life)",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "One sentence to memorize",
              body: "A procedure performs an action; a function computes and returns a value, and can therefore appear inside SQL. Examiners ask the difference in some form almost every year - the OUT-parameter and SQL-embedding points are what separate a two-mark answer from a full one.",
            },
            keyTerms: [
              { term: "Stored procedure", definition: "A named PL/SQL block stored in the database, callable with parameters via CALL or EXECUTE." },
              { term: "OUT parameter", definition: "A procedure parameter that passes a value back to the caller." },
              { term: "DETERMINISTIC", definition: "Function attribute asserting that identical inputs always produce the identical output." },
            ],
            examQuestions: [
              {
                q: "Differentiate procedures and functions in PL/SQL. Write one procedure with an OUT parameter and one function, and show the function being called inside a SELECT.",
                marks: 7,
                outline: [
                  "Named blocks: stored once in the catalog, reused by many callers.",
                  "Procedure: optional return, OUT parameters, invoked with CALL/EXECUTE.",
                  "Parameter modes IN, OUT, IN OUT with the log_service example.",
                  "Function: mandatory single RETURN; callable inside SQL.",
                  "Write depreciation(cost, salvage, life) returning a NUMBER.",
                  "Embed it: SELECT machine_name, depreciation(...) FROM machine.",
                  "Benefits: reuse, less network traffic, EXECUTE-only security.",
                ],
              },
              {
                q: "Name the three parameter modes and which one is the default.",
                marks: 2,
              },
              {
                q: "Why can a function be used inside a SELECT while a procedure cannot?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.5",
            title: "Triggers and transactions",
            body: [
              "A trigger is a block the database fires by itself when a specified event occurs on a specified table: CREATE TRIGGER ... BEFORE UPDATE OF cost ON maintenance FOR EACH ROW. Three choices define every trigger: timing - BEFORE, AFTER or (on views) INSTEAD OF; event - INSERT, UPDATE or DELETE, combinable with OR; and level - the default statement level fires once per statement, while FOR EACH ROW fires once per affected row. Inside a row-level trigger, :OLD holds the row's values before the change and :NEW the values after, so an audit trigger can log both the old and new price with the user and timestamp, without any application code knowing it happened.",
              "Classic uses: an audit trail (AFTER UPDATE ON item FOR EACH ROW writes item, old price, new price, user, timestamp into item_audit); derived columns kept in sync; complex constraints no CHECK can phrase ('a machine under overhaul may not be issued'); and INSTEAD OF triggers that make views updatable by routing writes to base tables. The dangers are real: triggers nest and cascade - one trigger's UPDATE can fire another - and a slow trigger turns one statement into a row-by-row crawl. Auditing heavy tables at statement level or in bulk, and documenting every trigger, is the professional habit.",
              "Transactions give the surrounding safety net. A transaction is a unit of work that is all-or-nothing: ACID - atomicity (all or nothing), consistency (constraints hold), isolation (concurrent users never read half-done work), durability (committed work survives crashes). TCL commands steer it: SAVEPOINT marks a partial checkpoint, ROLLBACK undoes work to that mark or to the start, COMMIT makes everything permanent. DDL statements implicitly commit - a CREATE inside your work seals it, a favorite exam trap. A stock transfer shows the pattern: UPDATE stock, UPDATE issue_line, SAVEPOINT after the first, ROLLBACK TO SAVEPOINT if the second fails, else COMMIT.",
            ],
            bullets: [
              "Trigger = timing (BEFORE / AFTER / INSTEAD OF) + event (INSERT / UPDATE / DELETE) + level (statement or row).",
              "Row-level triggers read :OLD and :NEW values - the raw material of audit trails.",
              "Triggers fire automatically; cascading triggers are the hazard to name in vivas.",
              "ACID: atomicity, consistency, isolation, durability - the four guarantees of a transaction.",
              "TCL: SAVEPOINT marks, ROLLBACK undoes to a mark, COMMIT seals; DDL auto-commits.",
            ],
            codeExample: {
              language: "sql",
              caption: "An audit trigger plus a transaction with a savepoint.",
              code: `CREATE TABLE item_audit (
  item_no    INT,
  old_price  NUMBER,
  new_price  NUMBER,
  changed_by VARCHAR2(30),
  changed_at DATE
);

CREATE OR REPLACE TRIGGER trg_price_audit
AFTER UPDATE OF unit_price ON item
FOR EACH ROW
BEGIN
  INSERT INTO item_audit VALUES
    (:OLD.item_no, :OLD.unit_price, :NEW.unit_price,
     USER, SYSDATE);
END trg_price_audit;
/

-- transaction discipline around a stock issue
UPDATE stock SET qty = qty - 5 WHERE item_no = 101;
SAVEPOINT after_deduct;
UPDATE issue_line SET qty = qty + 5
WHERE  issue_no = 9 AND item_no = 101;
-- if the second update fails:
ROLLBACK TO after_deduct;
COMMIT;`,
            },
            diagram: {
              kind: "fork",
              title: "Choosing trigger timing and level",
              caption:
                "The rule the trigger enforces decides where it hooks.",
              start: "A business rule must fire automatically",
              branches: [
                { label: "Validate or fix incoming values", outcome: "BEFORE ... FOR EACH ROW - modify :NEW", good: true },
                { label: "Keep an audit trail", outcome: "AFTER ... FOR EACH ROW - log :OLD vs :NEW", good: true },
                { label: "Make a view updatable", outcome: "INSTEAD OF trigger routes the writes", good: true },
                { label: "Slow remote call inside the trigger", outcome: "cascades and lock waits - move it to a job", good: false },
              ],
            },
            callout: {
              type: "warning",
              title: "DDL implicitly commits",
              body: "The trap to quote in exams: DDL statements issue an implicit COMMIT. If a trigger or script runs CREATE TABLE mid-transaction, every earlier uncommitted change is sealed instantly. Keep DDL out of transactional code, and say why when asked.",
            },
            keyTerms: [
              { term: "Trigger", definition: "A stored block fired automatically on a table event, defined by timing, event and level." },
              { term: ":NEW / :OLD", definition: "Row-level trigger records holding the incoming and previous values of the changing row." },
              { term: "ACID", definition: "Atomicity, consistency, isolation, durability - the four properties of a reliable transaction." },
            ],
            examQuestions: [
              {
                q: "Explain triggers with their timing, event and level options, and write an audit trigger for price changes. Define a transaction, state the ACID properties, and explain COMMIT, ROLLBACK and SAVEPOINT.",
                marks: 7,
                outline: [
                  "Define trigger; fired automatically, never called directly.",
                  "Timing BEFORE / AFTER / INSTEAD OF; event INSERT / UPDATE / DELETE; statement vs row level.",
                  "Row-level :OLD and :NEW values.",
                  "Write trg_price_audit: AFTER UPDATE ... FOR EACH ROW inserting into item_audit.",
                  "Transaction: a unit of work; expand all four ACID properties.",
                  "COMMIT seals, ROLLBACK undoes, SAVEPOINT marks a partial checkpoint.",
                  "Warn: DDL implicitly commits; cascading triggers are a hazard.",
                ],
              },
              {
                q: "What do :OLD and :NEW contain in an UPDATE row trigger?",
                marks: 2,
              },
              {
                q: "A script deducts stock, then fails on the issue line. Show SAVEPOINT and ROLLBACK usage to protect the first update.",
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
      title: "Project and Administration",
      summary:
        "The capstone unit: ODBC and JDBC connectivity, Python sessions with MySQL, the workshop management mini project, backup types and restore discipline, and the twin closers - query optimization with EXPLAIN and security through least privilege.",
      chapter: {
        number: "05",
        title: "Connectivity, Mini Project and Database Care",
        intro:
          "Unit V connects the database to the world and keeps it alive: the ODBC and JDBC driver stacks, the Python connector's five-call session, the workshop management mini project that recycles every earlier unit, the backup and recovery plan made before disaster, and the optimization-with-EXPLAIN and least-privilege habits that close the syllabus.",
        inOneBreath:
          "ODBC and JDBC connect applications to servers through driver layers, with DSNs and URLs naming the targets and PreparedStatement closing the injection door; Python's connector runs the five-call skeleton connect, cursor, execute with %s parameters, fetch and commit; the workshop management mini project chains requirements, ER diagram, normalized schema, seeded SQL and a menu-driven Python front end; backups come in full, differential and incremental flavours, restored in order and tested quarterly; and query optimization reads EXPLAIN plans and adds indexes while security grants least privilege to every role.",
        sections: [
          {
            number: "5.1",
            title: "Connecting applications: ODBC and JDBC",
            body: [
              "Applications never open database files directly; they speak through a driver. ODBC (Open Database Connectivity) is Microsoft's C-based standard from the early 1990s: an application calls one API, an ODBC driver translates to the database's native protocol, and swapping MySQL for Oracle means swapping a driver, not rewriting code. Configuration lives in a DSN (data source name) - a named bundle of server, database, user and driver registered with the operating system, so applications connect by naming the DSN. ODBC remains the universal adapter: spreadsheets, reporting tools and legacy plant software all speak it.",
              "JDBC (Java Database Connectivity) is the same idea for Java: the JDBC API - Connection, Statement, PreparedStatement, ResultSet - sits in every JDK, and vendor drivers implement it. Driver types range from the Type 1 JDBC-ODBC bridge (deprecated) through native-API and network-protocol drivers to Type 4 pure-Java thin drivers, the modern choice. The URL jdbc:mysql://host:3306/workshop names the sub-protocol, host, port and database. PreparedStatement pre-compiles the SQL and carries values in placeholders, which both speeds repeated execution and closes the SQL injection door that string concatenation leaves wide open.",
              "Both stacks share one architecture: the application holds the API, a driver manager routes calls, a vendor driver speaks the wire protocol, and the server does the work. Connection setup is expensive, so real systems pool connections - opening a configurable set once and lending them out. Choose by language: Java shops use JDBC, everything else reaches for ODBC or a native connector (next section's Python). For the exam, draw the four layers, define DSN, list the JDBC object chain from Connection to Statement to ResultSet, and state two PreparedStatement advantages. That is the complete syllabus sentence for this topic.",
            ],
            bullets: [
              "ODBC: C-language API + driver manager + DSN; swap the driver, keep the application.",
              "DSN: a named connection bundle (driver, server, database, credentials) registered with the OS.",
              "JDBC: Java API with Connection, Statement, PreparedStatement, ResultSet; the Type 4 thin driver is standard.",
              "PreparedStatement: pre-compiled SQL with parameter placeholders - faster repeats, injection-safe.",
              "Connection pooling reuses expensive connections; both stacks share the app-driver-server layering.",
            ],
            table: {
              caption: "ODBC vs JDBC at a glance.",
              headers: ["Aspect", "ODBC", "JDBC"],
              rows: [
                ["Born for", "C / C++ / any language via drivers", "Java applications"],
                ["Config unit", "DSN registered with the OS", "URL: jdbc:mysql://host:3306/db"],
                ["Core objects", "Environment, connection, statement handles", "Connection, Statement, ResultSet"],
                ["Parameter queries", "SQLBindParameter (C-level)", "PreparedStatement with ? placeholders"],
                ["Typical use", "spreadsheets, BI tools, legacy plant software", "enterprise Java, app servers"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "The connectivity stack",
              caption:
                "The same four layers for ODBC and JDBC - swap drivers, not applications.",
              layers: [
                { label: "Application", note: "SQL written against the standard API" },
                { label: "Driver manager", note: "ODBC manager / JDBC DriverManager routes calls" },
                { label: "Vendor driver", note: "translates API calls to the DB wire protocol" },
                { label: "Database server", note: "parses, optimizes, executes" },
              ],
            },
            callout: {
              type: "exam",
              title: "A table, not an essay",
              body: "The question 'compare ODBC and JDBC' wants a table: origin and language, configuration unit (DSN vs URL), core objects, and one use case each. Drawing the four-layer stack once and pointing at where each standard sits earns the diagram mark as well.",
            },
            keyTerms: [
              { term: "ODBC", definition: "Open Database Connectivity - a C-based standard API letting applications reach any database through a swappable driver." },
              { term: "DSN", definition: "Data Source Name - a registered bundle of driver, server and credentials an ODBC application connects by." },
              { term: "PreparedStatement", definition: "A pre-compiled JDBC statement with parameter placeholders; the injection-safe way to run SQL." },
            ],
            examQuestions: [
              {
                q: "Explain the architecture of ODBC and JDBC. Define DSN, list the core JDBC objects, and state the advantages of PreparedStatement over plain Statement.",
                marks: 7,
                outline: [
                  "Draw the four layers: application, driver manager, driver, server.",
                  "ODBC: C API, driver manager, DSN configuration; swap drivers, not code.",
                  "DSN definition and what it bundles.",
                  "JDBC: the Connection, Statement, PreparedStatement, ResultSet chain.",
                  "Driver types: bridge, native, network, Type 4 thin - prefer Type 4.",
                  "PreparedStatement: pre-compilation with ? placeholders.",
                  "Two advantages: speed on repeats, SQL injection safety.",
                ],
              },
              {
                q: "What is a DSN? What does it store?",
                marks: 2,
              },
              {
                q: "Why is PreparedStatement preferred over concatenating user input into SQL? Show the risk it removes.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.2",
            title: "Python with MySQL",
            body: [
              "Python reaches MySQL through connector packages such as mysql-connector-python (official) and PyMySQL (pure Python). The workflow is five calls: mysql.connector.connect(host=..., user=..., password=..., database=...) opens the session and returns a connection; conn.cursor() creates the cursor object that carries SQL; cur.execute(sql, params) runs a statement; cur.fetchone(), fetchmany(n) or fetchall() collects the results; and conn.commit() seals DML before close() on cursor and connection releases everything. Every program in the lab follows this skeleton; only the SQL string and the parameters change.",
              "Parameterization is the safety rule. Pass values as a tuple to execute and let the driver quote and escape them: cur.execute('SELECT * FROM machine WHERE location = %s', (loc,)) - never build the SQL string with concatenation, because a user-typed value can then smuggle extra SQL, the classic injection attack. DML is not visible to others until commit(), so every INSERT, UPDATE and DELETE ends with conn.commit() or the changes vanish when the connection closes. Reading uses the three fetches, each returning tuples (or dictionaries with dictionary=True), and cursor.rowcount reports how many rows the DML touched.",
              "A small workshop front end assembles the pieces: a connect() helper in one module; one function per report - machines by location, monthly consumption, machines never serviced - each opening a cursor and returning fetched rows; and a menu loop that calls the function, prints a header and formats the rows. Wrap database calls in try/except so a dead server produces a message instead of a traceback, and close resources in finally blocks or use context managers. This structure is exactly what the mini-project's Python layer is: thin functions over parameterized SQL, nothing more - which is why two lab sessions are enough to build it.",
            ],
            bullets: [
              "Five-call skeleton: connect(), cursor(), execute(sql, params), fetch(), commit() then close().",
              "Always parameterize: %s placeholders with a values tuple - never string concatenation (injection).",
              "DML needs conn.commit() or it evaporates when the connection closes.",
              "Fetch family: fetchone(), fetchmany(n), fetchall(); rowcount reports the DML impact.",
              "Structure the app: a connect helper + one function per report + a menu loop; try/except around DB calls.",
            ],
            codeExample: {
              language: "python",
              caption: "A complete Python session: parameterized query, safe insert, commit.",
              code: `import mysql.connector as mc

conn = mc.connect(host="localhost", user="lab",
                  password="lab123", database="workshop")
cur = conn.cursor()

# parameterized query - never concatenate user input
loc = "Workshop-1"
cur.execute("SELECT machine_id, machine_name FROM machine "
            "WHERE location = %s", (loc,))
for mid, name in cur.fetchall():
    print(f"{mid:>5}  {name}")

# safe insert, then commit
cur.execute("INSERT INTO maintenance "
            "(machine_id, service_date, cost) VALUES (%s, %s, %s)",
            (101, "2024-07-01", 2400.00))
conn.commit()
print("rows affected:", cur.rowcount)

cur.close()
conn.close()`,
            },
            diagram: {
              kind: "flow",
              title: "The Python database session, start to finish",
              caption:
                "Every lab program is this skeleton with different SQL.",
              steps: [
                { label: "connect(...)", note: "host, user, password, database" },
                { label: "cursor()", note: "the SQL carrier object" },
                { label: "execute(sql, params)", note: "%s placeholders, values tuple" },
                { label: "fetch / commit", note: "fetchone/all for queries; commit for DML" },
                { label: "close()", note: "cursor first, then the connection" },
              ],
            },
            callout: {
              type: "warning",
              title: "The two classic lab bugs",
              body: "First: forgetting conn.commit() after INSERT and wondering why the row is missing next session. Second: building SQL with string concatenation and inviting injection. Write both facts on the first page of the logbook - they cost more marks than any syntax error.",
            },
            keyTerms: [
              { term: "Parameterized query", definition: "A statement with %s placeholders whose values are passed separately and escaped by the driver." },
              { term: "Cursor object", definition: "The connector object that executes SQL and from which results are fetched." },
              { term: "commit", definition: "The connection method that makes pending DML permanent for other users." },
            ],
            examQuestions: [
              {
                q: "Explain the steps of connecting Python to MySQL with mysql-connector-python. Write a program that runs a parameterized query, inserts a row safely, commits, and closes all resources.",
                marks: 7,
                outline: [
                  "Import the connector; connect() with the four parameters.",
                  "cursor() creates the SQL carrier.",
                  "execute(sql, params) with %s placeholders and a tuple.",
                  "fetchone / fetchall to read query results.",
                  "Parameterization vs concatenation: injection safety.",
                  "conn.commit() after DML; rowcount for feedback.",
                  "close cursor and connection; try/except for robustness.",
                ],
              },
              {
                q: "Write the two Python lines that connect to the workshop database and create a cursor.",
                marks: 2,
              },
              {
                q: "A program builds its SQL by concatenation: SELECT * FROM item WHERE item_name = ' + name. Name the security risk and write the safe, parameterized version.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.3",
            title: "Workshop management mini project",
            body: [
              "The mini project consolidates the syllabus into one system: a workshop management database with a menu-driven Python front end. Scope it tightly around five entities - MACHINE, EMPLOYEE (technicians), ITEM (spares), MAINTENANCE_JOB and ISSUE (spare parts consumed by jobs) - because a tight scope that fully works outscores a grand scope that half-works. From the requirement list ('record machines, assign technicians, log services, track spares, print monthly consumption'), the nouns are the tables and the verbs are the foreign keys, exactly as the ER method of Unit III prescribes.",
              "The design path is the lab's spine: draw the ER diagram; map it to tables with the Unit III rules (the M:N between JOB and ITEM becomes the ISSUE junction carrying qty); normalize to 3NF and prove it with the anomaly tests; write the CREATE TABLE script with keys and foreign keys; then seed realistic data - at least ten machines, five technicians, twenty items and two months of activity. Build the reports next as parameterized SQL inside Python functions: pending jobs, machine-wise cost, technician workload, and the GROUP BY monthly consumption report. Each report is one exercise from Units I and II wearing a business title.",
              "Execute the project as a schedule: week one requirements and ER; week two schema and seed data; week three reports; week four the Python menu with add-edit-delete screens and input validation; week five testing with edge cases - a machine with no services, an item never issued, a delete that must RESTRICT. Document as you go: schema listing, ER diagram, sample outputs, and a viva sheet mapping each feature to a syllabus unit. The viva question is always 'why did you design it this way?' - and the honest answer is the normalization and mapping reasoning you can now recite.",
            ],
            bullets: [
              "Scope: five core tables (machine, employee, item, maintenance_job, issue) - tight and complete.",
              "Design path: ER diagram -> mapping rules -> 3NF check -> CREATE script -> seeded sample data.",
              "ISSUE is the junction table: M:N between jobs and items, carrying qty as its own attribute.",
              "Reports are parameterized SQL in Python functions; a menu loop dispatches them.",
              "Test edge cases: never-serviced machines, never-issued items, RESTRICTed deletes; document for the viva.",
            ],
            table: {
              caption: "Mini-project modules mapped to syllabus units.",
              headers: ["Module", "Tables touched", "Key query pattern", "Unit used"],
              rows: [
                ["Machines and staff", "machine, employee", "SELECT with WHERE, LIKE", "I"],
                ["Service logging", "maintenance_job", "INSERT + FK checks", "I, IV"],
                ["Spare consumption", "issue, item", "JOIN + SUM + GROUP BY", "II"],
                ["Monthly reports", "all tables", "LEFT JOIN, HAVING, subquery", "II"],
                ["Menu application", "whole schema", "Python connector, parameterized SQL", "V"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "The mini-project pipeline, week by week",
              caption:
                "Each stage feeds the next; the viva traces it backwards.",
              steps: [
                { label: "Requirements", note: "nouns become entities, verbs become relationships" },
                { label: "ER diagram", note: "keys, cardinality, participation" },
                { label: "Normalized schema", note: "mapping rules + 3NF check" },
                { label: "SQL + seed data", note: "CREATE script, realistic rows" },
                { label: "Python menu app", note: "parameterized functions + testing" },
              ],
            },
            callout: {
              type: "tip",
              title: "Rehearse the design answer",
              body: "Viva panels ask 'why is ISSUE a separate table?' - answer: many jobs consume many items, so the M:N relationship maps to a junction table keyed by both foreign keys with qty as the relationship attribute. Rehearse that sentence; it is the design question the panel always reaches for.",
            },
            keyTerms: [
              { term: "Mini project", definition: "The capstone lab exercise: a small end-to-end database application built with the whole syllabus's techniques." },
              { term: "Menu-driven app", definition: "A front end that dispatches user choices to functions wrapping parameterized SQL." },
              { term: "Seed data", definition: "Realistic starter rows inserted to make reports and testing meaningful." },
            ],
            examQuestions: [
              {
                q: "Design a workshop management database: list the entities with attributes, draw the ER diagram, map it to normalized tables, and name four reports the system must produce.",
                marks: 7,
                outline: [
                  "Entities: MACHINE, EMPLOYEE, ITEM, MAINTENANCE_JOB with key attributes.",
                  "Relationships: employees repair machines (M:N via jobs), jobs consume items (M:N via issue).",
                  "ER diagram: keys underlined, cardinalities labelled.",
                  "Mapping: junction tables for both M:N relationships with qty and dates.",
                  "Normalize to 3NF; state the dependency checks made.",
                  "Reports: pending jobs, machine-wise cost, technician workload, monthly consumption.",
                  "Mention the Python menu layer calling parameterized queries.",
                ],
              },
              {
                q: "Why does the ISSUE table exist? Which relationship does it implement?",
                marks: 2,
              },
              {
                q: "Write the monthly spare-consumption report query for the system.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.4",
            title: "Backup, recovery and administration",
            body: [
              "Data loss has three familiar causes - hardware failure, human error (the UPDATE without a WHERE) and malware - and the only defense made in advance is a backup. Plan with two numbers: RPO (recovery point objective), how much data you can afford to lose, sets backup frequency; RTO (recovery time objective), how long the business can wait, sets how backups are stored. The three types build on each other: a full backup copies everything; a differential backup copies everything changed since the last full; an incremental copies changes since the last backup of any type. Restore equals the last full plus the latest differential, or the last full plus the chain of incrementals.",
              "Every engine ships its tools. SQL Server: BACKUP DATABASE workshop TO DISK = 'D:/backups/workshop.bak' and RESTORE DATABASE workshop FROM DISK = ...; MySQL: mysqldump writes a script of CREATE and INSERT statements, reloaded with the mysql client, while the binary log enables point-in-time recovery between dumps. Whatever the tool, the disciplines are identical: automate with cron or Task Scheduler, keep copies off the machine (and off site), retain several generations, and - the step everyone skips - test the restore quarterly, because an untested backup is a hope, not a plan.",
              "Recovery is the practiced reverse: restore the last full backup, apply the differential or the incrementals, replay the transaction log to the minute of failure, and verify with row counts and a spot-check report. Administration rounds out the daily care: monitor slow queries, check disk space, rotate and audit users, apply security patches, and keep a change log of schema edits so the schema itself can be reconstructed. In the exam, the expected answer names the three backup types, one tool command per engine, the restore order, and the sentence 'a backup strategy is incomplete until a restore has been rehearsed' - the line that demonstrates real understanding.",
            ],
            bullets: [
              "RPO = tolerable data loss (sets frequency); RTO = tolerable downtime (sets storage and process).",
              "Full copies everything; differential since the last full; incremental since the last backup of any kind.",
              "SQL Server: BACKUP DATABASE ... TO DISK; MySQL: mysqldump plus the binary log for point-in-time work.",
              "Automate (cron / Task Scheduler), keep off-site generations, test the restore quarterly.",
              "Restore order: full -> differential or incrementals -> log replay -> verify counts.",
            ],
            codeExample: {
              language: "sql",
              caption: "Native backup and restore commands, plus the MySQL equivalents as comments.",
              code: `-- SQL Server: full backup with checksum
BACKUP DATABASE workshop
TO   DISK = 'D:/backups/workshop_full.bak'
WITH CHECKSUM, INIT;

-- SQL Server: restore sequence
RESTORE DATABASE workshop
FROM  DISK = 'D:/backups/workshop_full.bak'
WITH  RECOVERY;

-- MySQL equivalents (run at the shell, not the SQL prompt):
--   mysqldump -u root -p workshop > workshop_full.sql
--   mysql     -u root -p workshop < workshop_full.sql
--   point-in-time recovery replays the binary log:
--   mysqlbinlog binlog.000123 | mysql -u root -p`,
            },
            diagram: {
              kind: "cycle",
              title: "The backup cycle that runs forever",
              caption:
                "Schedule -> take -> store -> test -> repeat; rehearse restores quarterly.",
              steps: [
                { label: "Schedule", note: "RPO decides the frequency" },
                { label: "Full backup", note: "weekly, with checksum" },
                { label: "Incrementals", note: "daily, since the last backup" },
                { label: "Store off-site", note: "rotate the generations" },
                { label: "Test restore", note: "quarterly rehearsal" },
              ],
            },
            callout: {
              type: "exam",
              title: "The line examiners love",
              body: "A backup is only as good as the last successful restore test. Quote it after describing the three types and the restore order - it shows you understand that backups exist for recovery, not for ceremony.",
            },
            keyTerms: [
              { term: "Differential backup", definition: "A copy of all changes made since the last full backup; restored as full plus one differential." },
              { term: "RPO", definition: "Recovery point objective - the maximum data loss, in time, the business tolerates; it sets backup frequency." },
              { term: "Point-in-time recovery", definition: "Replaying the transaction or binary log after a restore to reach the exact minute of failure." },
            ],
            examQuestions: [
              {
                q: "Explain full, differential and incremental backups with the restore sequence for each. Name the backup commands of SQL Server and MySQL, and state the role of the transaction or binary log.",
                marks: 7,
                outline: [
                  "Motivation: hardware failure, human error, malware; backups are made in advance.",
                  "Full backup: everything; restore is a single step.",
                  "Differential: changes since the last full; restore = full + latest differential.",
                  "Incremental: changes since any last backup; restore = full + chain in order.",
                  "SQL Server: BACKUP DATABASE TO DISK / RESTORE DATABASE.",
                  "MySQL: mysqldump; binary log replay for point-in-time recovery.",
                  "Disciplines: automation, off-site copies, quarterly restore tests.",
                ],
              },
              {
                q: "Differentiate differential and incremental backup in two sentences.",
                marks: 2,
              },
              {
                q: "Why must a restore test be rehearsed? Describe one rehearsal checklist.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.5",
            title: "Query optimization and security",
            body: [
              "Optimization starts with evidence, and the evidence is the execution plan: EXPLAIN before any SELECT (EXPLAIN ANALYZE to actually run it) shows whether the engine seeks an index or scans the whole table, which tables it reads first, and the estimated rows at each step. A full table scan on a ten-row lab table is harmless; the same scan on ten million issue lines is a report killer. Read plans top-down, hunt the words 'full scan' and 'rows examined', and change one thing at a time - index here, rewrite there - re-running EXPLAIN to confirm the fix. The before-and-after EXPLAIN pair is the artifact your logbook should staple.",
              "The classic techniques are few and reliable. Add indexes on the columns your hot queries filter and join on - and measure that writes did not slow too much. Never write SELECT * in production code: name the columns and save the network. Do not wrap indexed columns in functions (WHERE YEAR(d) = 2024 blocks the index; use a date range instead). Prefer EXISTS over IN for correlated membership tests where the engine agrees, paginate with LIMIT instead of shipping whole tables, and let UNION ALL stand when duplicates are legitimate. ANALYZE TABLE refreshes the statistics the optimizer reasons with - stale statistics produce stupid plans.",
              "Security is least privilege all the way down. GRANT SELECT, INSERT ON maintenance TO clerk_role - never blanket ALL to everyone; REVOKE on role change; strong passwords; each application gets its own limited account. SQL injection is defeated before optimization: parameterized queries only, in every connector, exactly as the Python section prescribed. Encrypt connections with TLS and sensitive columns where required; audit critical tables with triggers or native auditing; keep the server patched. The exam pairing is deliberate: a fast database that leaks data is a failure, and a safe database nobody can use is a failure too - optimize for speed, secure by privilege, and quote both halves in the answer.",
            ],
            bullets: [
              "EXPLAIN / EXPLAIN ANALYZE: read the plan, hunt full scans and inflated row estimates.",
              "Index the hot filter and join columns; measure the write cost before and after.",
              "No SELECT * in production; no functions on indexed columns in WHERE; prefer ranges over YEAR().",
              "Prefer EXISTS for correlated membership, UNION ALL when duplicates are fine, LIMIT for pagination.",
              "Security: GRANT least privilege, parameterized queries, TLS, auditing, patched server.",
            ],
            codeExample: {
              language: "sql",
              caption: "The before/after EXPLAIN ritual with the index that fixes it.",
              code: `-- BEFORE: full scan - the function wraps the indexed column
EXPLAIN SELECT machine_id, cost
FROM   maintenance
WHERE  YEAR(service_date) = 2024;

-- fix: rewrite as a range the index can serve, and index the column
CREATE INDEX idx_maint_date ON maintenance(service_date);

EXPLAIN SELECT machine_id, cost
FROM   maintenance
WHERE  service_date >= '2024-01-01'
  AND  service_date <  '2025-01-01';

-- least privilege, in the same script's spirit
CREATE ROLE clerk_role;
GRANT SELECT, INSERT ON maintenance TO clerk_role;
REVOKE DELETE ON maintenance FROM clerk_role;`,
            },
            diagram: {
              kind: "pipeline",
              title: "The optimization loop",
              caption:
                "Evidence, change, re-measure - one variable at a time.",
              stages: [
                { label: "EXPLAIN the query", note: "spot full scans and row estimates" },
                { label: "Diagnose", note: "missing index? function on a column? SELECT *?" },
                { label: "Change one thing", note: "index or rewrite - never both at once" },
                { label: "Re-run EXPLAIN", note: "compare rows examined and cost" },
                { label: "Record before/after", note: "the logbook artifact" },
              ],
            },
            callout: {
              type: "tip",
              title: "The three-step slow-query template",
              body: "The 3-mark optimization question usually shows a slow query and asks why. Answer in three parts: (1) EXPLAIN reveals a full scan, (2) the WHERE wraps the indexed column in a function or the index is missing, (3) rewrite as a range or add the index and re-check. Memorize the template; it fits almost every case.",
            },
            keyTerms: [
              { term: "Execution plan", definition: "The engine's chosen recipe for a query, shown by EXPLAIN: access paths, join order, row estimates." },
              { term: "Least privilege", definition: "Granting each user or role only the rights their tasks require - the core security principle." },
              { term: "SQL injection", definition: "Smuggling SQL through unsanitized input; prevented by parameterized queries, never by escaping." },
            ],
            examQuestions: [
              {
                q: "Explain query optimization with EXPLAIN and five optimization techniques. Then state the principles of database security, covering privileges, SQL injection and encryption.",
                marks: 7,
                outline: [
                  "EXPLAIN shows the plan: access path, join order, estimated rows.",
                  "Full scans on large tables are the symptom to hunt.",
                  "Index hot filter and join columns; measure the write-side cost.",
                  "Avoid SELECT *; avoid functions on indexed columns; use ranges.",
                  "EXISTS vs IN, UNION ALL, LIMIT - one line each.",
                  "Security: least-privilege GRANT/REVOKE, strong passwords.",
                  "Parameterized queries kill SQL injection; TLS and auditing complete the picture.",
                ],
              },
              {
                q: "Why does WHERE YEAR(col) = 2024 ignore an index on col?",
                marks: 2,
              },
              {
                q: "Write GRANT statements giving a clerk read and insert rights on issue_line but no delete.",
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
      heading: "Exam weightage - where to spend the hours",
      body: [
        "RGPV ME-606 papers and practicals concentrate marks on joins, normalization and PL/SQL, with connectivity and Python work carrying the lab-and-viva share. Weight your hours the same way: query practice first, design second, administration last - and let the mini project recycle all five units at once.",
      ],
      weightedTopics: [
        { topic: "Joins: inner, outer, self", weight: "10-12 marks", note: "The guaranteed big question - practise 2-table, 3-table and anti-join patterns until they are automatic." },
        { topic: "Normalization 1NF to BCNF with a case study", weight: "10-12 marks", note: "Full-marks format: anomalies, each form's rule, one worked decomposition with FDs shown." },
        { topic: "PL/SQL: blocks, cursors, procedures, triggers", weight: "10-12 marks", note: "One complete block with exception handling plus one trigger is the standard ask." },
        { topic: "GROUP BY / HAVING aggregation reports", weight: "8-10 marks", note: "Combined WHERE + GROUP BY + HAVING + ORDER BY query with the logical order explained." },
        { topic: "ER modeling and ER-to-table mapping", weight: "8-10 marks", note: "Keys underlined and cardinalities labelled, then the mapping rules applied mechanically." },
        { topic: "Subqueries and views", weight: "6-8 marks", note: "Correlated vs non-correlated plus view advantages and updatability rules." },
        { topic: "Keys and referential integrity", weight: "6-8 marks", note: "Candidate vs primary vs foreign, and the ON DELETE actions with a maintenance example." },
        { topic: "Python-MySQL connectivity", weight: "6-8 marks", note: "The five-call skeleton with parameterized queries; the viva favourite of the lab exam." },
        { topic: "Indexes and query optimization", weight: "4-6 marks", note: "EXPLAIN reading plus the three-step 'why is this query slow' template." },
        { topic: "Backup, transactions, security", weight: "4-6 marks", note: "Three backup types, ACID, and least-privilege GRANT statements." },
      ],
    },
    {
      id: "six-weeks",
      heading: "A six-week study schedule",
      body: [
        "Assuming four sessions a week, this schedule touches every unit twice: once to learn the commands, once to build with them. The final week rebuilds the mini project from memory - the single best rehearsal for both the practical and the viva.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - SQL foundations", tasks: ["Install the engine; build the workshop schema with keys and FKs", "INSERT realistic seed data; drill WHERE operator families", "Write five GROUP BY + HAVING reports and note the logical order"] },
        { week: "Week 2", focus: "Unit II - joins and subqueries", tasks: ["Inner, left, full and self joins on the workshop tables", "Anti-join reports; UNION vs UNION ALL stacking", "Scalar, IN, EXISTS and correlated subqueries; create a view and index"] },
        { week: "Week 3", focus: "Unit III - design and normalization", tasks: ["Draw the inventory ER diagram with cardinality and participation", "Map it to tables; compute attribute closures to find keys", "Walk the ledger case from 1NF to BCNF and test the anomalies"] },
        { week: "Week 4", focus: "Unit IV - PL/SQL", tasks: ["Anonymous blocks with %TYPE, SELECT INTO and handlers", "Cursors: explicit loop plus cursor FOR loop", "Build log_service, depreciation and the price-audit trigger"] },
        { week: "Week 5", focus: "Unit V - Python and the mini project", tasks: ["Five-call Python session; parameterized queries only", "Assemble the mini project: schema, seed data, reports, menu loop", "Test edge cases: no-service machines, RESTRICTed deletes"] },
        { week: "Week 6", focus: "Revision + practical rehearsal", tasks: ["Rebuild the whole schema from memory in one sitting", "Timed query drills: one join, one group report, one subquery", "Viva rehearsal with the unit map; backup and EXPLAIN one-liners"] },
      ],
    },
    {
      id: "last-day",
      heading: "The last day before the practical",
      body: [
        "The night before, work with your hands, not your eyes: typing the core artifacts once more stores them in muscle memory, which is what a practical exam actually tests. Six artifacts cover the paper.",
      ],
      bullets: [
        "Rebuild the workshop schema from memory: five CREATE TABLE statements with keys and foreign keys - it is the spine of every practical.",
        "Write from muscle memory: one join report, one GROUP BY + HAVING report, one anti-join, one correlated subquery.",
        "Redraw the normalization ladder and the inventory decomposition flow; annotate each arrow with the dependency it removes.",
        "Recite the PL/SQL skeleton (DECLARE-BEGIN-EXCEPTION-END) and write the audit trigger once without notes.",
        "Sketch the Python five-call session and say why %s parameters and commit() are non-negotiable.",
        "Skim your own logbook outputs, not the textbook: your own working examples are the fastest revision there is.",
      ],
    },
    {
      id: "exam-hall",
      heading: "Exam-hall strategy",
      examTips: [
        "Answer 'define + example' questions with the definition sentence first, then one concrete workshop-table example - definitions and examples are marked separately.",
        "For every query question, write the table list, then the SELECT, then the ORDER BY; a wrong result with a correct shape still earns method steps.",
        "Draw the diagram first when the question says 'explain': architecture layers, join-choice fork, or the normalization pyramid - the picture organizes the prose.",
        "In PL/SQL questions, write the four-zone skeleton before the logic; graders award structure before correctness.",
        "Keep the anomaly names (insert, update, delete) ready - one line each converts any normalization question into full marks.",
      ],
    },
    {
      id: "slips",
      heading: "Common slips that cost marks",
      body: [
        "Six slips account for most lost marks in this subject. Each has a one-line fix - write the fixes on the last page of your logbook.",
      ],
      bullets: [
        "Comma-lists in cells: 'welding, wiring' in one column violates 1NF - one atomic value per cell, always.",
        "WHERE AVG(...) - aggregates are illegal in WHERE; the group filter belongs in HAVING.",
        "JOIN without ON - the Cartesian explosion; check the ON clause the moment row counts look absurd.",
        "COUNT(*) after a LEFT JOIN counts padded rows; COUNT(child_col) is the honest match count.",
        "Missing conn.commit() in Python - the INSERT vanishes when the connection closes.",
        "Mixing up DELETE (DML, row by row, rollbackable) and TRUNCATE (DDL, instant, implicitly committed).",
      ],
    },
  ],
};
