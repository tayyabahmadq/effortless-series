import type { AcademicSubject } from "./types";

export const it802b: AcademicSubject = {
  id: "it-802-b",
  code: "IT-802(B)",
  title: "Natural Language Processing",
  semester: "VIII Semester",
  program: "RGPV · Information Technology",
  tagline:
    "Every topic of the syllabus as one connected story: how raw text becomes bytes, tokens and corpora, how morphology and finite state transducers build words, how taggers and n-gram language models attach probabilities, how chunking, CRFs, WordNet and semantic roles carry meaning, and how interfaces, summarization, sentiment, MT and QA turn it all into working products.",
  description:
    "Five units walk from the levels of NLP and its ambiguities and applications, through character encoding, word and sentence segmentation and corpus analysis, on to inflectional and derivational morphology with finite state transducers and maximum entropy POS tagging, then n-gram language models with smoothing and perplexity plus phrases, chunking, CRFs, WordNet, sense disambiguation and semantic role labelling, ending with NL interfaces, text summarization, sentiment analysis, machine translation, question answering and the recent trends from embeddings to transformers.",
  accentColor: "#10b981",
  emoji: "NL",
  unitCount: 5,
  totalSections: 35,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Introduction to NLP: Levels, Ambiguities and Applications",
      summary:
        "Unit I frames the entire subject: what NLP is and its two directions of analysis and generation, the six levels from phonology to pragmatics, the ambiguity that haunts every level with the classic example sentences, the computational challenges of processing real text in many languages, and the flagship applications - spell and grammar checkers, information extraction, question answering and machine translation.",
      chapter: {
        number: "01",
        title: "The Levels and Challenges of Language Processing",
        intro:
          "Unit I covers the definition of NLP and the natural language understanding versus generation divide, the levels of language processing from phonology through pragmatics, lexical to pragmatic ambiguity with classic examples, the computational challenges of processing various natural languages, and four real-life applications: spell and grammar checking, information extraction, question answering and machine translation.",
        inOneBreath:
          "NLP maps text to meaning (understanding) and meaning to text (generation); language is processed at six levels - phonology, morphology, lexicon, syntax, semantics, pragmatics; ambiguity strikes at every level ('bank', 'with the telescope', 'the trophy... it'); real text is noisy, code-mixed and knowledge-hungry; and the flagship applications are spelling and grammar correction, information extraction, question answering and machine translation.",
        sections: [
          {
            number: "1.1",
            title: "What is natural language processing?",
            body: [
              "Natural language processing is the field at the intersection of computer science, linguistics and artificial intelligence that gives machines the ability to read, analyse, interpret and generate human language. Its work runs in two directions, and keeping them separate is the first discipline of the subject. Natural language understanding maps a sentence to a meaning representation - 'Book me a flight to Delhi' becomes a structured query with destination Delhi and intent book_flight. Natural language generation maps a meaning back to fluent surface text - a weather database row becomes 'Light showers expected in Bhopal this evening'. Understanding is analysis and disambiguation; generation is planning and realization.",
              "The difficulty of the field comes from three structural facts. Language is ambiguous at every level - a word ('bank'), a phrase ('old men and women'), a whole sentence ('I saw the man with the telescope'). Language is productive - a finite grammar and lexicon generate an unbounded set of sentences, so no lookup table of sentences can ever be complete. And understanding requires world knowledge beyond the text itself - resolving 'it' in 'the trophy would not fit in the suitcase because it was too small' demands knowing trophies are big relative to suitcases. Every NLP system is a compromise among these three forces.",
              "A worked trace shows what each level contributes to one sentence, 'The cat sat on the mat'. Tokenization cuts it into 6 tokens; morphological analysis confirms 'sat' is the past of 'sit'; POS tagging labels The/DT cat/NN sat/VBD on/IN the/DT mat/NN; parsing builds an NP VP tree with a PP 'on the mat' attached to 'sat'; semantics asserts sit(cat, location=mat); pragmatics would use discourse context if another sentence followed. Each level feeds the next, which is why the levels are drawn as a stack - and why an error at the bottom, one wrong token, propagates upward through every later stage.",
              "Exam framing: the definition question is near-guaranteed and rewards precision over breadth. The strong answer quotes the two directions with one example each, names the three sources of difficulty, and walks one sentence through the stack. The weak answer lists chatbots and science fiction. The applications themselves - spelling correction, information extraction, question answering and machine translation - are developed in sections 1.5 to 1.7, and every one of them is just the pipeline above pointed at a different output.",
            ],
            keyTerms: [
              { term: "NLU (natural language understanding)", definition: "Mapping a sentence from text or speech to a formal meaning representation, resolving ambiguity along the way." },
              { term: "NLG (natural language generation)", definition: "Mapping a meaning or data record to fluent surface text - planning content, structuring sentences, realizing words." },
              { term: "Productivity", definition: "A finite grammar and lexicon produce unboundedly many sentences - no sentence lookup table can cover a language." },
              { term: "Pipeline", definition: "The chained levels of processing - tokenize, tag, parse, interpret - where each stage consumes the previous stage's output." },
            ],
            table: {
              caption: "What each real-life application asks of NLP.",
              headers: ["Application", "Input", "Output", "Core NLP work"],
              rows: [
                ["Spell / grammar checker", "running text with errors", "corrected text", "edit distance, language model, parsing"],
                ["Information extraction", "unstructured documents", "filled templates / database rows", "NER, relation and event extraction"],
                ["Question answering", "a natural language question", "a short answer", "question classification, retrieval, extraction"],
                ["Machine translation", "source-language sentence", "target-language sentence", "analysis, transfer, generation (or direct modelling)"],
                ["Summarization (Unit V)", "a long document", "a short digest", "sentence scoring or abstractive generation"],
                ["Sentiment analysis (Unit V)", "reviews, posts", "polarity / emotion labels", "lexicons, classification"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "The two directions of NLP",
              caption: "Understanding compresses language into meaning; generation expands meaning back into language.",
              left: {
                heading: "Natural language understanding",
                items: [
                  "Input: surface text or speech",
                  "Output: a formal meaning representation",
                  "Main enemy: ambiguity - many readings, one right one",
                  "Example: 'Book a flight to Delhi' -> intent book_flight, dest = Delhi",
                ],
              },
              right: {
                heading: "Natural language generation",
                items: [
                  "Input: meaning, data or a communicative goal",
                  "Output: fluent surface text",
                  "Main enemies: content choice, coherence, fluency",
                  "Example: weather row -> 'Light showers in Bhopal this evening'",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Walk one sentence through the stack",
              body: "The fastest route to full marks in 'what is NLP' questions is a running example: take 'The cat sat on the mat' and show the output of each level - tokens, tags, parse tree, meaning. One sentence with six outputs demonstrates the pipeline better than six paragraphs of prose.",
            },
            examQuestions: [
              {
                q: "Define natural language processing. Distinguish natural language understanding from natural language generation with one example of each, and explain the three structural reasons why processing natural language is difficult.",
                marks: 14,
                outline: [
                  "Definition: field combining CS, linguistics and AI to analyse and generate human language",
                  "NLU: sentence -> meaning representation; example 'Book a flight to Delhi' -> structured intent",
                  "NLG: meaning -> surface text; example weather row -> 'Light showers this evening'",
                  "Difficulty 1: ambiguity at word, phrase and sentence levels (bank; old men and women; telescope)",
                  "Difficulty 2: productivity - finite grammar, unbounded sentences, no lookup possible",
                  "Difficulty 3: world knowledge needed for reference resolution (trophy-suitcase example)",
                  "Pipeline view: one sentence traced through tokenize -> tag -> parse -> interpret",
                ],
              },
              {
                q: "Name four real-life applications of NLP and state for each what it consumes, what it produces and the core NLP task it depends on.",
                marks: 7,
                outline: [
                  "Spell/grammar checker: text -> corrected text; edit distance + language model",
                  "Information extraction: documents -> template fills; NER + relation extraction",
                  "Question answering: question -> short answer; retrieval + answer extraction",
                  "Machine translation: source sentence -> target sentence; transfer or statistical modelling",
                  "Each application reuses the same lower levels - tokens, tags, parses",
                ],
              },
            ],
          },
          {
            number: "1.2",
            title: "The levels of natural language processing",
            body: [
              "NLP is organized as a stack of six levels, each defining a sub-field with its own formalisms. Phonology and phonetics handle speech sounds and their organization. Morphology handles word structure - how morphemes combine into words (Unit III). The lexical level handles the dictionary: words, their parts of speech and their senses. Syntax handles sentence structure - phrases, clauses and grammatical relations (Unit IV). Semantics handles literal meaning - what a sentence denotes. Pragmatics handles meaning in context - intention, reference and discourse. Each level consumes the output of the level below and feeds the one above.",
              "The levels are best learned through the phenomena each owns. Phonology owns the fact that /n/ and /ŋ/ are different sounds in Hindi but English speakers merge some distinctions. Morphology owns 'unhappiness' = un + happy + ness. The lexicon owns the difference between 'bank' the noun and 'bank' the verb. Syntax owns the two trees of 'I saw the man with the telescope'. Semantics owns the fact that 'The chicken is ready to eat' has two role assignments. Pragmatics owns why 'Can you pass the salt?' is a request, not a question about ability. Every classic exam example belongs to exactly one level - placing it correctly is half the answer.",
              "The levels are not strictly sequential in real systems, and saying so earns marks. Speech systems interleave phonology and lexicon; taggers use lexical and morphological evidence together; parsers consult semantics to prefer one reading of an ambiguous sentence. But as an organizing model the stack is right: errors flow upward (a wrong token breaks tagging, which breaks parsing), and depth of analysis rises as you climb - phonology sees bytes and phones, pragmatics sees whole conversations. The pyramid diagram gives the standard picture: orthography and phonology at the base, pragmatics at the apex.",
              "Exam framing: 'explain the various levels of NLP' is a guaranteed 14-marker. The full-credit pattern: name all six levels in order, attach one phenomenon and one example to each, draw the stack, and close with the error-propagation point - an error at level k corrupts everything above it, which is why tokenization (Unit II) is worth a whole unit despite looking trivial.",
            ],
            keyTerms: [
              { term: "Phonology / phonetics", definition: "The sound level - speech sounds, their inventory and organization; the base of the stack." },
              { term: "Morphology", definition: "The word-structure level - morphemes, inflection and derivation (Unit III)." },
              { term: "Syntax", definition: "The sentence-structure level - phrases, clauses, grammatical relations and parse trees." },
              { term: "Semantics", definition: "The literal-meaning level - what a sentence denotes independent of context." },
              { term: "Pragmatics", definition: "The meaning-in-context level - intention, reference, discourse and implicature." },
            ],
            diagram: {
              kind: "pyramid",
              title: "The levels of NLP",
              caption: "Each tier consumes the tier below; ambiguity introduced at the base propagates to the apex.",
              tiers: [
                { label: "Pragmatics & discourse", note: "meaning in context, reference, dialogue" },
                { label: "Semantics", note: "literal meaning of sentences" },
                { label: "Syntax", note: "phrases, clauses, parse trees" },
                { label: "Lexicon & morphology", note: "words, POS, word formation" },
                { label: "Phonetics & orthography", note: "speech sounds, characters, tokens" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "levels.py - one sentence through three levels",
              code: `import nltk
nltk.download("punkt_tab", quiet=True)
nltk.download("averaged_perceptron_tagger_eng", quiet=True)

sent = "The cat sat on the mat"
tokens = nltk.word_tokenize(sent)          # lexical level
print(tokens)
# ['The', 'cat', 'sat', 'on', 'the', 'mat']

tags = nltk.pos_tag(tokens)                # syntactic (POS) level
print(tags)
# [('The','DT'), ('cat','NN'), ('sat','VBD'), ('on','IN'),
#  ('the','DT'), ('mat','NN')]`,
            },
            bullets: [
              "Six levels: phonology -> morphology -> lexicon -> syntax -> semantics -> pragmatics.",
              "Each level consumes the level below; the stack is the pipeline of every NLP system.",
              "Morphology owns word formation; syntax owns parse trees; semantics owns denotation.",
              "Pragmatics owns reference and intention - 'Can you pass the salt?' is a request.",
              "Errors propagate upward: one wrong token corrupts tags, parses and meaning.",
              "Real systems interleave levels, but the stack remains the organizing model.",
            ],
            callout: {
              type: "exam",
              title: "Attach one example to each level",
              body: "A level named without an example earns half marks. Write the six levels as a table: level | phenomenon | example sentence. 'Syntax | attachment ambiguity | I saw the man with the telescope' is worth more than a paragraph of abstract description.",
            },
            examQuestions: [
              {
                q: "Explain the various levels of natural language processing with one phenomenon and one example sentence at each level, and state how errors propagate between levels.",
                marks: 14,
                outline: [
                  "Phonetics/phonology: speech sounds; English vs Hindi sound inventories",
                  "Morphology: word structure; 'unhappiness' = un + happy + ness",
                  "Lexicon: words, POS, senses; 'bank' noun vs verb",
                  "Syntax: phrases and parse trees; 'I saw the man with the telescope' two trees",
                  "Semantics: literal meaning; 'The chicken is ready to eat' two role assignments",
                  "Pragmatics: context and intention; 'Can you pass the salt?' is a request",
                  "Stack/pipeline: errors propagate upward - wrong token breaks everything above",
                ],
              },
              {
                q: "At which levels does the sentence 'I saw her duck' present problems? Justify your answer.",
                marks: 7,
                outline: [
                  "Lexical level: 'duck' is both a noun (bird) and a verb (lower the head)",
                  "Lexical level: 'her' is possessive pronoun or object pronoun",
                  "Syntactic level: two parse trees - saw [her duck] vs saw - her [to duck]",
                  "Semantic level: the two trees denote seeing a bird vs seeing an action",
                  "A tagger and parser must both resolve; context after the sentence decides",
                ],
              },
            ],
          },
          {
            number: "1.3",
            title: "Ambiguity in natural language",
            body: [
              "Ambiguity is the property of having more than one valid interpretation - the defining obstacle of NLP. Lexical ambiguity lives in a single word with several senses: 'bank' (river edge, money), 'crane' (bird, machine). Syntactic ambiguity lives in a sentence with several valid parse trees: 'I saw the man with the telescope' - the PP attaches to 'saw' (instrument) or to 'man' (the man had the telescope). Semantic ambiguity arises when one parse still allows several meaning assignments: 'The chicken is ready to eat' - chicken as eater or as food. Pragmatic and referential ambiguity lives across sentences: in 'the trophy would not fit in the suitcase because it was too small', what 'it' denotes depends on world knowledge.",
              "The classic example sentences are a fixed part of the exam vocabulary and should be memorized with their readings. 'Flying planes can be dangerous' - flying planes are dangerous, or the act of flying planes is dangerous. 'Old men and women' - both old, or only the men. 'I shot an elephant in my pyjamas' (Groucho Marx) - who is wearing the pyjamas? 'Time flies like an arrow; fruit flies like a banana' - 'flies' changes category mid-sentence. Each example demonstrates that a parser returning one tree is not enough; a real system must score trees and pick the most plausible reading using probability and context.",
              "How systems cope: disambiguation is the task of choosing among readings, and every level has its tool. Lexical: word sense disambiguation using context and resources like WordNet (section 4.7). Syntactic: probabilistic parsing that scores trees by their rules' frequencies - the high-frequency PP-attachment pattern wins. Semantic and pragmatic: case frames, anaphora resolution with salience and recency heuristics, and ultimately world knowledge. The unifying principle: ambiguity is never removed, only resolved probabilistically - and the resolution is exactly where errors concentrate in real systems.",
              "Exam framing: the examiner wants the taxonomy plus examples plus coping strategies. The strong answer defines each ambiguity type, gives two examples per type with both readings spelled out, and closes with the disambiguation mechanism at that level. Weak answers that list the types without the readings score half - the readings are the evidence. The matrix below organizes the four types by scope and cause; reproducing its logic in prose is a complete answer.",
            ],
            keyTerms: [
              { term: "Lexical ambiguity", definition: "One word, several senses - 'bank', 'crane'; resolved by word sense disambiguation." },
              { term: "Syntactic (structural) ambiguity", definition: "One string, several parse trees - PP attachment; resolved by probabilistic parsing." },
              { term: "Semantic ambiguity", definition: "One parse, several meaning/role assignments - 'The chicken is ready to eat'." },
              { term: "Referential ambiguity", definition: "A pronoun or description with several possible antecedents across sentences; needs discourse and world knowledge." },
            ],
            diagram: {
              kind: "matrix",
              title: "Four kinds of ambiguity",
              caption: "Scope runs from one word to a whole discourse; cause runs from linguistic form to world knowledge.",
              axes: { x: "Scope: word -> sentence/discourse", y: "Cause: linguistic form -> world knowledge" },
              quadrants: [
                { label: "Lexical", note: "one word, several senses - 'bank': river vs money" },
                { label: "Syntactic", note: "several parse trees - 'saw the man with the telescope'" },
                { label: "Semantic", note: "role assignment - 'the chicken is ready to eat'" },
                { label: "Pragmatic / referential", note: "what does 'it' denote - trophy vs suitcase" },
              ],
            },
            table: {
              caption: "The classic ambiguous sentences and their readings.",
              headers: ["Sentence", "Reading 1", "Reading 2", "Type"],
              rows: [
                ["I saw the man with the telescope", "saw using a telescope", "the man had the telescope", "syntactic (PP attachment)"],
                ["Flying planes can be dangerous", "planes that fly are dangerous", "the act of flying is dangerous", "syntactic + lexical"],
                ["The chicken is ready to eat", "the chicken will eat", "the chicken will be eaten", "semantic (roles)"],
                ["Old men and women", "men and women, all old", "old men plus women of any age", "syntactic (scope)"],
                ["I shot an elephant in my pyjamas", "the elephant wore the pyjamas", "the shooter wore the pyjamas", "syntactic (attachment)"],
                ["The trophy would not fit in the suitcase because it was too small", "'it' = the suitcase", "'it' = the trophy", "pragmatic / referential"],
              ],
            },
            callout: {
              type: "warning",
              title: "Ambiguity is resolved, never removed",
              body: "Every NLP system still ships with the same ambiguities - it only picks the most probable reading. A spell checker cannot know which 'their/there' the writer meant without a language model; a parser cannot know whose pyjamas without probability. Any answer that claims ambiguity is 'solved' loses marks.",
            },
            examQuestions: [
              {
                q: "What is ambiguity in natural language? Explain lexical, syntactic, semantic and pragmatic ambiguity with two examples each, giving all readings, and state the standard mechanism used to resolve each type.",
                marks: 14,
                outline: [
                  "Definition: a string with more than one valid interpretation",
                  "Lexical: 'bank' river/money; 'crane' bird/machine; resolved by WSD",
                  "Syntactic: 'saw the man with the telescope' instrument vs possession",
                  "Syntactic: 'Flying planes can be dangerous' subject vs gerund reading",
                  "Semantic: 'The chicken is ready to eat' eater vs eaten; case frames",
                  "Pragmatic: trophy/suitcase 'it'; resolved by world knowledge and salience",
                  "Principle: ambiguity is resolved probabilistically, never eliminated",
                ],
              },
              {
                q: "Draw the two parse trees for 'I saw the man with the telescope' and explain how a probabilistic parser decides between them.",
                marks: 7,
                outline: [
                  "Tree 1: VP-attachment - [saw [NP the man] [PP with the telescope]] -> instrument",
                  "Tree 2: NP-attachment - [saw [NP the man [PP with the telescope]]] -> the man had it",
                  "Both trees are grammatical - the ambiguity is structural, not a grammar error",
                  "Probabilistic parser scores each rule of the tree by its frequency in a treebank",
                  "The attachment pattern with the higher estimated probability wins",
                  "Real context (prior discourse) can also decide the reading",
                ],
              },
            ],
          },
          {
            number: "1.4",
            title: "Computational challenges in processing natural languages",
            body: [
              "Beyond ambiguity, real text presents engineering challenges that decide whether a pipeline works at all. Tokenization is ill-defined: hyphenated compounds ('state-of-the-art'), apostrophes ('don't' - one token or two?), hashtags, URLs and emojis have no agreed boundaries. Spelling variation and deliberate misspelling ('gr8', 'loooove') break lexicon lookup. Non-standard grammar in social media defeats parsers trained on news text. Code-mixing (Hindi-English chat: 'kal office me meeting hai') means no single language's tools apply. Named entities - people, products, places - grow daily, so any fixed lexicon is stale on arrival.",
              "The cross-lingual dimension makes 'various natural languages' part of the syllabus phrase load-bearing. English has poor morphology and whitespace-delimited words - easy tokenization, little inflection. Finnish, Turkish and Arabic are agglutinative or templatic - one surface word can carry a sentence's worth of morphemes, so morphological analysis (Unit III) becomes mandatory. Chinese, Japanese and Thai write no spaces between words, so word segmentation (Unit II) is a real task, not a split-on-space. Hindi adds gender, case and free word order, which complicates parsing and requires different tagsets. A tool chain built for English does not transfer unchanged, and low-resource languages additionally lack corpora and annotated data.",
              "A worked trace shows the failure pattern. Run a standard news-trained tokenizer and tagger over 'gr8 bday :) #blessed @rahul http://x.co/a': the tokenizer splits the emoji into ')' garbage, '#' and 'blessed' become separate unknown tokens, 'gr8' is unknown to the lexicon, and the tagger, guessing by suffix, mislabels half the sentence. Each error feeds the next stage - this is error propagation, the cascade property of pipelines. Remedies exist: robust tokenizers trained on social text, normalization dictionaries, subword models (section 2.2) that never see unknown words, and domain adaptation - but they are patches on a structural problem.",
              "Exam framing: challenges questions are 'list plus illustrate' questions. The full-credit shape: name six challenges (tokenization, spelling variation, non-standard grammar, code-mixing, entity novelty, world knowledge), illustrate each with one real string, add the cross-lingual paragraph (agglutinative vs isolating vs Indian languages), and close with error propagation and remedies. Remedies deserve one line each - robust tokenizers, normalization dictionaries, subword models, domain adaptation - because a challenge without a remedy reads as complaint, not engineering.",
            ],
            keyTerms: [
              { term: "Error propagation", definition: "Pipeline property where an early-stage error (bad tokens) corrupts every later stage (tags, parses, meaning)." },
              { term: "Code-mixing", definition: "Text mixing two languages within one sentence - common in Indian social media; breaks monolingual tools." },
              { term: "Agglutinative language", definition: "Language whose words stack many morphemes (Turkish, Finnish) - one word can encode a full clause." },
              { term: "Domain shift", definition: "The gap between the text a tool was trained on (news) and the text it is run on (tweets, legal, chat)." },
            ],
            diagram: {
              kind: "fork",
              title: "What kind of text arrived?",
              caption: "Tools trained on clean news text meet a hostile world - each text type breaks a different stage.",
              start: "A chunk of raw human text",
              branches: [
                { label: "Clean edited news prose", outcome: "classical pipeline works - this is what tools were trained on", good: true },
                { label: "Social media post", outcome: "hashtags, emojis, 'gr8', sarcasm - tokenizer and lexicon break first", good: false },
                { label: "Code-mixed Hindi-English chat", outcome: "no single language's tokenizer, tagger or lexicon applies", good: false },
                { label: "Legal or scientific document", outcome: "60-word sentences, nested clauses, rare terms - parser breaks", good: false },
              ],
            },
            codeExample: {
              language: "python",
              caption: "noise.py - a news-trained tokenizer meets a tweet",
              code: `import nltk

clean = "The committee approved the proposal on Monday."
tweet = "gr8 bday :) #blessed @rahul http://x.co/a"

for text in (clean, tweet):
    toks = nltk.word_tokenize(text)
    print(len(toks), toks)

# clean  -> 7 tokens, all known words
# tweet  -> splits ':' and ')' apart, '#' alone, 'gr8' unknown;
#           the POS tagger then guesses wrongly from suffixes
# every downstream stage (tag -> parse -> meaning) inherits the damage`,
            },
            bullets: [
              "Tokenization is ill-defined: hyphens, apostrophes, hashtags, URLs and emojis have no agreed boundaries.",
              "Spelling variation and deliberate misspelling ('gr8') defeat lexicon lookup.",
              "Social media grammar and code-mixing defeat parsers trained on news text.",
              "Cross-lingual: agglutinative (Turkish), isolating/segmenting (Chinese), templatic (Arabic), Indian languages with rich case; low-resource languages lack the corpora to train tools at all.",
              "Named entities grow daily; any fixed lexicon is stale on arrival.",
              "Errors propagate up the pipeline - early-stage noise corrupts all later stages.",
            ],
            callout: {
              type: "tip",
              title: "Illustrate every challenge with a string",
              body: "The examiner wants evidence, not adjectives. Do not write 'social media is noisy' - write that 'gr8' is unknown to the lexicon, '#' splits from its word, and ')' becomes a standalone token. Six challenges, six real strings, and the answer writes itself.",
            },
            examQuestions: [
              {
                q: "Discuss the major computational challenges in processing natural languages - tokenization, spelling variation, non-standard grammar, code-mixing, named entity novelty and world knowledge - illustrating each with an example, and explain error propagation in the pipeline.",
                marks: 14,
                outline: [
                  "Tokenization ill-defined: 'state-of-the-art', \"don't\", hashtags, URLs, emojis",
                  "Spelling variation: 'gr8', 'loooove' break lexicon lookup",
                  "Non-standard grammar: tweets defeat parsers trained on news",
                  "Code-mixing: 'kal office me meeting hai' - no monolingual tool applies",
                  "Entity novelty: new names/products unknown to any fixed lexicon",
                  "World knowledge needed for reference resolution (trophy-suitcase)",
                  "Error propagation: tweet trace - tokenizer errors poison tagger and parser",
                ],
              },
              {
                q: "How does the structure of a language change the NLP tools it needs? Compare English, Chinese, Turkish and Hindi.",
                marks: 7,
                outline: [
                  "English: whitespace words, poor morphology - tokenization easy, little stemming needed",
                  "Chinese: no spaces - word segmentation is a real task (maximum matching)",
                  "Turkish/Finnish: agglutinative - one word carries many morphemes, FST analysis essential",
                  "Hindi: rich case, gender, free word order - different tagsets, harder parsing",
                  "Low-resource languages: no corpora/treebanks - statistical tools cannot be trained",
                  "Conclusion: the tool chain must be redesigned per language, not translated",
                ],
              },
            ],
          },
          {
            number: "1.5",
            title: "Spell and grammar checkers",
            body: [
              "The spell checker is the oldest mass-market NLP application and the cleanest introduction to pipeline thinking. Architecture: error detection (a token not in the dictionary is a non-word error; a token in the dictionary used wrongly is a real-word error), candidate generation (all dictionary words within a small edit distance of the error), and candidate ranking (score candidates by context using a language model - section 4.1 - plus prior frequencies). Grammar checkers extend the same skeleton with rules or parsers: a part-of-speech pattern rule flags 'they has left'; a parser flags agreement failures and malformed clauses.",
              "Candidate generation is built on minimum edit distance - the minimum number of insertions, deletions and substitutions (transpositions in the Damerau variant) to turn one word into another. Worked example, error 'recieve': 'receive' costs 2 under Levenshtein (the i/e pair needs two substitutions) but 1 under Damerau (one transposition) - which is why real checkers use Damerau-Levenshtein; 'relieve' costs 1 (c->l); 'believe' costs 2 (r->b, c->l); 'retrieve' costs 2. Dynamic programming computes Levenshtein in O(len1 x len2), and checkers precompute a deletion-neighborhood index so candidates for a 10-letter error are found in microseconds.",
              "Ranking is where language models enter and where real-word errors get caught. For 'their going to the beach', every token is a dictionary word, so detection needs context: a bigram language model scores 'their going' (rare) below 'they're going' (common) and the correction falls out. The scoring rule in practice: score(candidate) = P(candidate) x P(context | candidate), an application of the noisy channel model - the same model that drives statistical machine translation (section 5.4). This is the first place the syllabus's units interlock, and the exam loves to ask for the connection.",
              "Exam framing: the 14-marker asks for the three-stage architecture with the edit-distance computation; the 7-marker usually targets the non-word versus real-word distinction. The strong answer draws the pipeline, works 'recieve' with numbers, and explains why 'their/there' needs a language model rather than a dictionary. Quote the ranking rule as score = P(word) x P(context | word) and note it is the noisy channel model - the same machinery that reappears in machine translation in Unit V.",
            ],
            keyTerms: [
              { term: "Non-word error", definition: "A token not in the dictionary ('recieve') - detectable by lookup, correctable by edit distance." },
              { term: "Real-word error", definition: "A valid word used wrongly ('their going') - undetectable without contextual modelling." },
              { term: "Minimum edit distance", definition: "Fewest insertions/deletions/substitutions (plus transpositions in Damerau) between two strings; computed by dynamic programming." },
              { term: "Noisy channel model", definition: "P(correct | typo) proportional to P(typo | correct) x P(correct) - generation plus channel error; drives ranking." },
            ],
            diagram: {
              kind: "pipeline",
              title: "The spell-checking pipeline",
              caption: "Detect, generate, rank - and the ranking stage is exactly the language model of Unit IV.",
              stages: [
                { label: "Detect", note: "dictionary lookup: non-word vs real-word" },
                { label: "Generate candidates", note: "edit distance 1-2, Damerau transpositions" },
                { label: "Rank", note: "P(word) x P(context | word) - language model" },
                { label: "Correct / flag", note: "replace, or flag for grammar rules" },
                { label: "Grammar pass", note: "POS-pattern and agreement rules" },
              ],
            },
            table: {
              caption: "Candidates for 'recieve' - generation and ranking in numbers.",
              headers: ["Candidate", "Levenshtein", "Damerau (transposition)", "Plausibility in 'I will ___ your letter'"],
              rows: [
                ["receive", "2 (i<->e two substitutions)", "1 (one transposition)", "highest - bigram 'will receive' frequent"],
                ["relieve", "1 (c -> l)", "1", "possible but contextually odd"],
                ["believe", "2 (r -> b, c -> l)", "2", "rare after 'will ... your'"],
                ["retrieve", "2 (c -> t, insert r)", "3", "plausible but less frequent than receive"],
              ],
            },
            callout: {
              type: "exam",
              title: "The real-word trap",
              body: "Write the distinction verbatim: non-word errors are caught by dictionary lookup and fixed by edit distance; real-word errors are valid words in invalid contexts and need a language model. Then give 'their going to the beach' vs 'they're going' as the worked pair - it is the examiner's favourite example.",
            },
            examQuestions: [
              {
                q: "Explain the architecture of a spell checker - error detection, candidate generation and candidate ranking. Compute the minimum edit distance of 'recieve' from its candidates and explain why Damerau-Levenshtein is preferred. How does the language model rank candidates?",
                marks: 14,
                outline: [
                  "Detection: dictionary lookup finds non-word errors ('recieve')",
                  "Real-word errors: valid tokens in wrong context - need context to detect",
                  "Candidate generation: all words within edit distance 1-2; dynamic programming in O(m x n)",
                  "'recieve' -> 'receive': Levenshtein 2 but Damerau 1 (single transposition ie <-> ei)",
                  "'relieve' distance 1 (c -> l); 'believe' 2; 'retrieve' 2",
                  "Ranking: noisy channel - P(candidate) x P(context | candidate)",
                  "Bigram LM makes 'will receive' beat 'will relieve'; real-word fix: 'their going' -> \"they're going\"",
                ],
              },
              {
                q: "Distinguish non-word errors from real-word errors with examples, and explain why grammar checking needs more than a spell checker.",
                marks: 7,
                outline: [
                  "Non-word: token absent from dictionary - 'recieve', 'teh'; caught by lookup",
                  "Real-word: valid word in wrong slot - 'their going', 'form' for 'from'; needs context",
                  "Real-word errors cannot be caught by edit distance - all candidates are valid words",
                  "Grammar checker adds rules/parsers: 'they has left' fails subject-verb agreement",
                  "POS-pattern rules flag determiner and agreement errors; parsers catch malformed clauses",
                ],
              },
            ],
          },
          {
            number: "1.6",
            title: "Information extraction",
            body: [
              "Information extraction (IE) converts unstructured text into structured records - the opposite direction from generation, and the workhorse behind knowledge bases, compliance systems and news monitoring. Its subtasks, inherited from the MUC evaluation conferences of the 1990s: named entity recognition (NER) finds and classifies mentions of persons, organizations, locations, dates and money; relation extraction finds the semantic relation between entity pairs ('born in', 'works for'); event extraction detects events and their participants; template or scenario filling binds all of it into records. IE differs from information retrieval, which returns whole documents, and from question answering, which returns one answer - IE returns everything structured that the text implies.",
              "A worked example makes the subtasks concrete. Input: 'Sachin Tendulkar was born in Mumbai on 24 April 1973.' NER output: Sachin_Tendulkar/PERSON, Mumbai/PLACE, 24_April_1973/DATE. Relation extraction asserts born_in(Sachin Tendulkar, Mumbai) and born_on(Sachin Tendulkar, 24 April 1973). Template filling writes one row into a PERSON record: name, birthplace, birthdate. Note what the pipeline did not do - it did not understand the sentence in general; it found the slots a fixed template demanded. That narrowness is IE's strength: precision on a known schema beats open-ended understanding.",
              "Methods split into rule-based and statistical. Rules: gazetteers (lists of known entities), regular expressions over token and POS patterns ('born in <PLACE> on <DATE>'), domain jargon - fast, precise, brittle to paraphrase. Statistics: sequence labelling with CRFs or transformers over BIO tags (B-PER, I-PER, O), trained on annotated corpora like CoNLL-2003 - robust to variation, hungry for labelled data. Evaluation uses precision, recall and F1 on entity-level matches: a system that labels 90 entities, 81 correct, while the gold set holds 100, scores precision 0.90, recall 0.81, F1 about 0.85. The precision/recall dial is tuned per application - a compliance system prefers precision, an intelligence digest prefers recall.",
              "Exam framing: define IE, name the four subtasks, run the Sachin sentence through them, and close with methods and the F1 numbers. The contrast with IR and QA is the standard 7-marker; the BIO tagging scheme is the standard bridge to Unit IV's sequence labelling. Name the datasets too - MUC for the task definitions and CoNLL-2003 for statistical NER training - because the marker scans for evidence you know where the labels come from.",
            ],
            keyTerms: [
              { term: "Named entity recognition (NER)", definition: "Finding and classifying mentions of persons, organizations, locations, dates - usually as BIO sequence labelling." },
              { term: "Relation extraction", definition: "Determining the semantic relation between two entity mentions - born_in(x, y), works_for(x, y)." },
              { term: "Template filling", definition: "Binding extracted entities and relations into a fixed scenario record - a person row, an event row." },
              { term: "BIO tagging", definition: "B- marks the first token of an entity, I- continues it, O marks outside; the standard NER output representation." },
            ],
            diagram: {
              kind: "flow",
              title: "The information extraction pipeline",
              caption: "From raw documents to database rows - each arrow is one subtask with its own evaluation.",
              steps: [
                { label: "Raw documents", note: "news, reports, mail" },
                { label: "Preprocess", note: "tokenize, sentence split, POS" },
                { label: "NER", note: "PERSON / ORG / PLACE / DATE spans" },
                { label: "Relation + event extraction", note: "born_in(x, y), who did what to whom" },
                { label: "Template filling", note: "structured records into a database" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "ie.py - rule-based NER and relation extraction",
              code: `import re

sent = "Sachin Tendulkar was born in Mumbai on 24 April 1973."
places = ["Mumbai", "Delhi", "Chennai"]

ent = {}
m = re.search(r"born in ([A-Z][a-z]+)", sent)
if m: ent["PLACE"] = m.group(1)                       # Mumbai
d = re.search(r"on (\\d{1,2} [A-Z][a-z]+ \\d{4})", sent)
if d: ent["DATE"] = d.group(1)                        # 24 April 1973
person = sent.split(" was born")[0]                   # Sachin Tendulkar

record = {"PERSON": person, "born_in": ent.get("PLACE"),
          "born_on": ent.get("DATE")}
print(record)
# {'PERSON': 'Sachin Tendulkar', 'born_in': 'Mumbai',
#  'born_on': '24 April 1973'}   -> one database row`,
            },
            bullets: [
              "IE subtasks: NER, relation extraction, event extraction, template filling.",
              "IE returns structure from text; IR returns documents; QA returns one answer.",
              "NER is sequence labelling over BIO tags (B-PER, I-PER, O) with CRFs or transformers.",
              "Rules (gazetteers + regex) are precise and brittle; statistics are robust and data-hungry.",
              "Evaluation: precision, recall, F1 - example 90 found / 81 correct / 100 gold = P 0.90, R 0.81, F1 0.85.",
              "Templates fix the schema in advance - IE is deliberately narrow and deep.",
            ],
            callout: {
              type: "warning",
              title: "Entity-level scoring is stricter than token-level",
              body: "A system that tags 'Sachin' but misses 'Tendulkar' scores zero for that entity even though half the tokens were right - F1 is computed on exact span-and-type matches. Mentioning this convention is what separates an IE answer from a generic ML answer.",
            },
            examQuestions: [
              {
                q: "What is information extraction? Explain named entity recognition, relation extraction and template filling, working a complete example sentence through the pipeline. Contrast rule-based and statistical NER and state how IE is evaluated.",
                marks: 14,
                outline: [
                  "IE: unstructured text -> structured records; inherited from MUC conferences",
                  "NER: find and classify PERSON/ORG/PLACE/DATE mentions (BIO tags)",
                  "'Sachin Tendulkar was born in Mumbai on 24 April 1973' -> 3 entities",
                  "Relation extraction: born_in(Sachin, Mumbai), born_on(Sachin, 24 April 1973)",
                  "Template filling: one PERSON record with name, birthplace, birthdate",
                  "Methods: gazetteers + regex vs CRF/transformer sequence labelling",
                  "Evaluation: entity-level precision/recall/F1 - 0.90/0.81/0.85 worked example",
                ],
              },
              {
                q: "Distinguish information extraction from information retrieval and from question answering with one example of each.",
                marks: 7,
                outline: [
                  "IR: query -> ranked list of whole documents (search engine)",
                  "IE: documents -> all structured facts fitting a schema (database rows)",
                  "QA: one question -> one short answer (who/when/where)",
                  "Example query 'born in Mumbai': IR returns pages; IE returns records; QA returns names",
                  "IE is exhaustive, QA is targeted, IR is relevance-ranked",
                ],
              },
            ],
          },
          {
            number: "1.7",
            title: "Question answering and machine translation - first look",
            body: [
              "Question answering (QA) returns a short answer to a natural language question instead of a ranked document list. Its pipeline: question analysis (classify the question type and the expected answer type - person, place, date, definition), document or passage retrieval (the IR machinery of search over a corpus), answer extraction (candidate spans from retrieved passages) and answer ranking (pick the best candidate, exploiting redundancy - an answer supported by many passages wins). Closed-domain QA restricts itself to one area with its own knowledge base; open-domain QA answers over the web. Reading-comprehension QA - passage plus question, answer as a span - is the modern formulation that pretrained models dominate.",
              "Machine translation (MT) translates a sentence from a source language to a target language preserving meaning. Its difficulty is structural and vivid: English is SVO while Hindi is SOV - 'Ram ate an apple' becomes 'Ram ne seb khaya', with the verb moved to the end and the subject marked by a postposition; idioms do not compose - 'kick the bucket' has no word-for-word equivalent; gender and agreement differ; and every ambiguity of section 1.3 must be resolved before translation, since the target language forces a choice. The three classical paradigms climb the depth-of-analysis ladder: direct (word-by-word dictionary), transfer (parse, transform structures, generate) and interlingua (translate into a language-neutral meaning, then generate) - developed fully in section 5.4.",
              "The two applications share the same skeleton, which is why they sit together in the syllabus. Both consume an input utterance, classify it, retrieve or analyse, then produce a constrained output - QA an answer span, MT a target sentence. Both lean on the language model of Unit IV for scoring candidates, and both break on the ambiguity of section 1.3 when that scoring fails. The differences are equally instructive: QA's hard part is finding the right passage, MT's is restructuring grammar across languages; QA tolerates extractive answers, MT must generate fluent new text.",
              "Exam framing: here the examiner wants the architecture and the contrast, not the full depth of Unit V. Answer with the two pipelines drawn side by side, one worked example each (a factoid question; an English-Hindi sentence), and the shared-versus-different closing paragraph. One shared-skeleton sentence - both classify, retrieve or analyse, then produce constrained output - plus one difference sentence each way completes the compare diagram in words.",
            ],
            keyTerms: [
              { term: "Answer type", definition: "The category the question's answer must be - person, location, date, definition; drives extraction." },
              { term: "Factoid question", definition: "A question with a short factual answer - 'Who wrote the Discovery of India?' - the easiest QA class." },
              { term: "Direct / transfer / interlingua", definition: "The three classical MT paradigms, ordered by depth of analysis required from word lookup to language-neutral meaning." },
              { term: "Word order typology", definition: "SVO (English) vs SOV (Hindi, Japanese) - the structural gap that makes direct MT fail." },
            ],
            diagram: {
              kind: "compare",
              title: "Question answering vs machine translation",
              caption: "Same skeleton - classify, retrieve/analyse, produce - but the hard stage differs.",
              left: {
                heading: "Question answering",
                items: [
                  "Input: a natural language question",
                  "Output: a short answer or span",
                  "Hard stage: retrieving the right passage and extracting the answer",
                  "Example: 'Who wrote the Discovery of India?' -> Jawaharlal Nehru",
                ],
              },
              right: {
                heading: "Machine translation",
                items: [
                  "Input: a source-language sentence",
                  "Output: a full target-language sentence",
                  "Hard stage: restructuring grammar across languages (SVO vs SOV)",
                  "Example: 'Ram ate an apple' -> 'Ram ne seb khaya'",
                ],
              },
            },
            table: {
              caption: "Question types and the technique each needs.",
              headers: ["Question type", "Example", "Expected answer", "Technique"],
              rows: [
                ["Factoid (who/where/when)", "Who wrote the Discovery of India?", "Jawaharlal Nehru", "answer type = PERSON -> NER on retrieved passages"],
                ["Yes / no", "Is Delhi the capital of India?", "Yes", "retrieve + verify, return supporting evidence"],
                ["List", "Name three RGPV IT electives", "a list", "extract multiple candidates, deduplicate"],
                ["Definitional", "What is perplexity?", "a definition", "define patterns ('X is ...'), encyclopedic match"],
                ["Why / how", "Why did the scheme fail?", "a cause", "causal phrases, hardest class - needs reasoning"],
              ],
            },
            callout: {
              type: "exam",
              title: "Say what the answer type does",
              body: "The single most examinable QA fact: classifying the expected answer type (PERSON, DATE, LOCATION) before retrieval decides which extractor runs - a DATE question needs a date recognizer, not a person recognizer. Write it as step 1 of every QA answer.",
            },
            examQuestions: [
              {
                q: "Describe the architecture of a question answering system - question analysis, retrieval, extraction and ranking - and work a factoid question through all four stages. Contrast open-domain with closed-domain QA.",
                marks: 14,
                outline: [
                  "Question analysis: classify type and expected answer type ('Who ...' -> PERSON)",
                  "Retrieval: IR over corpus returns top passages for the question keywords",
                  "Extraction: candidate answer spans matching the answer type (NER for PERSON)",
                  "Ranking: score candidates by redundancy across passages and match to answer type",
                  "Worked: 'Who wrote the Discovery of India?' -> passages naming Nehru -> answer",
                  "Open-domain: web-scale, heterogeneous; closed-domain: one corpus, higher precision",
                  "Reading-comprehension formulation: passage + question -> answer span",
                ],
              },
              {
                q: "Why is machine translation hard? Illustrate with English-Hindi word order, idioms and ambiguity, and name the three classical MT paradigms in order of analysis depth.",
                marks: 7,
                outline: [
                  "Word order: English SVO vs Hindi SOV - 'Ram ate an apple' -> 'Ram ne seb khaya'",
                  "Postpositions vs prepositions; gender and agreement differ across languages",
                  "Idioms: 'kick the bucket' has no compositional target translation",
                  "Ambiguity must be resolved first - the target language forces one reading",
                  "Paradigms: direct (word-by-word), transfer (parse + transform), interlingua (neutral meaning)",
                  "Each paradigm trades rule-writing effort against depth of analysis",
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
      title: "Text Encoding, Segmentation and Corpora",
      summary:
        "Unit II is the data layer of NLP: how characters become bytes through ASCII, Unicode and UTF-8, how continuous text is cut into words and sentences, what corpora are and which standard ones matter, and how corpora are analysed - frequency distributions, Zipf's law, concordancing, collocations, annotation schemes and inter-annotator agreement.",
      chapter: {
        number: "02",
        title: "From Bytes to Corpora",
        intro:
          "Unit II covers character encoding (ASCII, Unicode, UTF-8) and its failure modes, word segmentation and tokenization for whitespace and unsegmented scripts, sentence segmentation with abbreviation disambiguation, the definition and types of corpora with standard examples, and corpora analysis: frequency distributions, Zipf's law, concordancing, collocations, annotation and inter-annotator agreement.",
        inOneBreath:
          "UTF-8 encodes every Unicode codepoint in 1-4 bytes and mis-decoding produces mojibake; word segmentation is split-on-space for English, dictionary maximum matching for Chinese and subword BPE for rare words; sentence segmentation is period disambiguation; corpora range from the Brown Corpus to treebanks and parallel sets; Zipf says rank times frequency is roughly constant, type count grows sublinearly (Heaps), and Cohen's kappa measures annotation agreement beyond chance.",
        sections: [
          {
            number: "2.1",
            title: "Character encoding - ASCII, Unicode and UTF-8",
            body: [
              "Before any linguistic processing, text is bytes, and the mapping between bytes and characters is the encoding. ASCII (1963) uses 7 bits - 128 characters, enough for English, hopeless for anything else; each attempt to extend it (ISO-8859-1's 256 Western European characters, dozens of incompatible national codepages) multiplied the chaos, because the same byte 0xE9 meant one thing in Paris and another in Athens. Unicode solved it by separating the two questions: a code point is an integer identifying an abstract character (U+00E9 is 'é', U+0915 is 'क'), and an encoding scheme is the recipe for writing code points as bytes. Unicode now covers over 150,000 characters from every living script plus emoji.",
              "UTF-8 is the encoding that won. It is variable-length: ASCII characters occupy 1 byte (unchanged from ASCII, so legacy English files are valid UTF-8), Latin-script accented characters 2 bytes, most Indian and Middle-Eastern scripts 3 bytes, rare and emoji characters 4 bytes. Worked example: 'क' is code point U+0915; UTF-8 encodes it as the three bytes E0 A4 95. 'é' (U+00E9) becomes C3 A9. UTF-16, the alternative, uses 2 bytes (plus surrogate pairs for the 4-byte range) and is common inside program runtimes, but UTF-8 dominates interchange because it is compact for the dominant ASCII subset and self-synchronizing - a corrupted byte damages one character, not the stream.",
              "The failure mode the examiner wants is mojibake: bytes decoded under the wrong encoding turn 'é' into 'Ã©' or a Devanagari heading into Ã Â symbols. It arises when the producer's encoding and the consumer's guess disagree - a UTF-8 file read as ISO-8859-1, a codepage file moved between systems. The defences are procedural: declare encoding explicitly (HTTP headers, XML declarations), normalize on input (convert everything to Unicode immediately), and never guess on multi-byte text. For NLP the stakes are concrete - a tokenizer fed mojibake produces garbage tokens, and every downstream stage inherits them (the error propagation of section 1.4).",
              "Exam framing: the 14-marker is 'explain ASCII, Unicode and UTF-8 with byte examples'; the 7-marker is mojibake. The strong answer separates code point from encoding, works 'é' and 'क' byte-by-byte, notes the ASCII-compatibility property, and gives the three defences. Mention why UTF-8 won interchange: compactness for the dominant English subset plus self-synchronization - one damaged byte destroys one character, not the stream.",
            ],
            keyTerms: [
              { term: "Code point", definition: "An integer identifying an abstract character in Unicode - U+00E9 for 'é', U+0915 for 'क'." },
              { term: "Encoding scheme", definition: "The recipe for writing code points as bytes - UTF-8 (1-4 bytes), UTF-16 (2 or 4)." },
              { term: "UTF-8", definition: "Variable-length Unicode encoding, ASCII-compatible; 'क' = E0 A4 95, 'é' = C3 A9." },
              { term: "Mojibake", definition: "Garbage text produced by decoding bytes under the wrong encoding - 'é' shown as 'Ã©'." },
            ],
            diagram: {
              kind: "flow",
              title: "One character, from keystroke to bytes and back",
              caption: "The producer and consumer must agree on the encoding or mojibake results.",
              steps: [
                { label: "Keystroke 'क'", note: "author types the character" },
                { label: "Code point U+0915", note: "Unicode abstract integer" },
                { label: "UTF-8 bytes E0 A4 95", note: "3 bytes for Devanagari" },
                { label: "Stored / transmitted", note: "file, network, database" },
                { label: "Decode", note: "bytes -> U+0915 -> rendered glyph" },
              ],
            },
            table: {
              caption: "The encodings compared.",
              headers: ["Encoding", "Bits / bytes per char", "Coverage", "'é' as bytes", "Failure mode"],
              rows: [
                ["ASCII", "7 bits, 1 byte", "128 characters - English only", "impossible", "any non-English text lost"],
                ["ISO-8859-1 (Latin-1)", "8 bits, 1 byte", "256 - Western European", "E9", "no Devanagari, Chinese, Arabic"],
                ["UTF-8", "1-4 bytes, variable", "all of Unicode", "C3 A9", "mojibake when decoded as Latin-1"],
                ["UTF-16", "2 or 4 bytes", "all of Unicode", "00 E9 (or FE FF byte-order mark)", "BOM confusion, larger for ASCII text"],
              ],
            },
            callout: {
              type: "warning",
              title: "Never guess an encoding",
              body: "Mojibake is a producer-consumer disagreement, so the fix is procedural, not clever: declare the encoding explicitly (HTTP header, XML declaration), convert to Unicode on input, and never decode with a guessed codepage. One wrong decode poisons every token downstream.",
            },
            examQuestions: [
              {
                q: "Explain ASCII, Unicode and UTF-8. Distinguish code points from encoding schemes, show the UTF-8 bytes of 'é' and 'क', state the ASCII-compatibility property, and explain how mojibake arises and is prevented.",
                marks: 14,
                outline: [
                  "ASCII: 7 bits, 128 characters, English only; extensions (ISO-8859-1) were incompatible codepages",
                  "Unicode: one catalogue of abstract characters identified by code points (U+00E9, U+0915)",
                  "Encoding scheme: how code points become bytes - UTF-8, UTF-16",
                  "UTF-8: variable 1-4 bytes; 'é' = C3 A9; 'क' = E0 A4 95",
                  "ASCII-compatible: ASCII text is byte-identical in UTF-8 - legacy files are valid",
                  "Mojibake: decoding under the wrong encoding - 'é' -> 'Ã©'",
                  "Prevention: declare encoding, normalize on input, never guess",
                ],
              },
              {
                q: "Why did ISO-8859-style codepages fail and how does Unicode's two-layer design solve it?",
                marks: 7,
                outline: [
                  "Codepages assigned incompatible meanings to the same byte (0xE9 in France vs Greece)",
                  "Text had to carry an implicit 'which codepage' assumption - interchange broke",
                  "Unicode separates catalogue (code points) from byte layout (encoding schemes)",
                  "One code point space covers every script; several encodings can serialize it",
                  "UTF-8's variable length keeps English compact and is self-synchronizing on corruption",
                ],
              },
            ],
          },
          {
            number: "2.2",
            title: "Word segmentation and tokenization",
            body: [
              "Word segmentation cuts continuous text into word tokens - the first real processing step of every pipeline. English pretends the task is trivial because words are space-delimited, but even there the boundary is contested: 'don't' is one token or two ('do' + 'n't', which taggers prefer); 'New York-based' mixes a multiword entity with a hyphenated compound; 'state-of-the-art' is one token or four; 'U.S.A.' should not split on its periods. Tokenization also includes normalization - lowercasing, mapping 'U.S.A' and 'USA' to one equivalence class, expanding contractions - decisions that silently change every downstream count.",
              "For unsegmented scripts the task is genuinely algorithmic. Chinese, Japanese and Thai write no spaces: '研究生命起源' must be cut into words with no whitespace signal. The classic algorithm is maximum matching (greedy longest-prefix): at each position take the longest prefix found in the lexicon, emit it as a token, advance. Worked trace over '研究生命起源' with a lexicon containing 研究, 生命, 起源: longest prefix at position 0 is 研究 (the 6-character string is not a word), emit it; then 生命; then 起源 - result 研究 / 生命 / 起源. Greedy fails on overlap cases: '研究生命' with 究生 in the lexicon can mis-split; real systems add probability (word frequencies), statistical sequence labelling, or a character-level model; evaluation compares against hand-segmented gold standards.",
              "Subword segmentation is the modern third answer, built for the vocabulary problem: no lexicon covers a language's long tail (Zipf's law, section 2.5), so unknown words are guaranteed. Byte pair encoding starts from characters and repeatedly merges the most frequent adjacent pair, building a fixed subword vocabulary - 'lowest' may become 'low' + 'est', 'unbelievably' splits into known pieces, and any novel word falls back to characters, so OOV tokens disappear by construction. BPE (and its cousin WordPiece) is what transformer tokenizers use, closing the loop between the humblest unit of Unit II and the recent trends of Unit V.",
              "Exam framing: define tokenization and normalization, contrast English edge cases with Chinese segmentation, trace maximum matching once, and end with BPE and the OOV argument. The trace plus the BPE paragraph is the difference between a list and an answer. Say why the OOV argument closes the loop: any word-level lexicon misses the Zipf tail, so unknown words are guaranteed - BPE removes them by construction, which is why transformer tokenizers adopted it.",
            ],
            keyTerms: [
              { term: "Tokenization", definition: "Cutting text into word tokens; includes normalization decisions like lowercasing and contraction splitting." },
              { term: "Maximum matching", definition: "Greedy longest-prefix segmentation against a lexicon - the classic algorithm for unsegmented scripts." },
              { term: "Byte pair encoding (BPE)", definition: "Subword segmentation that merges the most frequent adjacent pair iteratively; eliminates OOV tokens." },
              { term: "OOV (out-of-vocabulary)", definition: "A token absent from the system's lexicon; subword models make it impossible by construction." },
            ],
            diagram: {
              kind: "cycle",
              title: "Maximum matching, one step at a time",
              caption: "The greedy loop that segments unsegmented scripts - fast, simple, fooled by overlapping words.",
              steps: [
                { label: "Take longest prefix", note: "window starting at current position" },
                { label: "Look it up", note: "is the prefix in the lexicon?" },
                { label: "Emit token", note: "if found; else back off one character" },
                { label: "Advance pointer", note: "past the emitted token" },
                { label: "Repeat", note: "until the end of the text" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "segment.py - maximum matching over Chinese text",
              code: `lexicon = {"研究", "生命", "起源", "研究生", "学习"}
MAX = 4                                   # longest word in lexicon

def segment(text):
    out, i = [], 0
    while i < len(text):
        for L in range(min(MAX, len(text) - i), 0, -1):
            word = text[i:i + L]
            if word in lexicon:           # longest dictionary match
                out.append(word); i += L; break
        else:                             # no match: single character
            out.append(text[i]); i += 1
    return out

print(segment("研究生命起源"))
# ['研究', '生命', '起源']   greedy trace: 研究 / 生命 / 起源
# with 究生 in the lexicon, greedy can mis-split '研究生命' - add probabilities`,
            },
            bullets: [
              "Even English tokenization has edge cases: \"don't\", 'New York-based', 'U.S.A.', 'state-of-the-art'.",
              "Normalization (lowercase, equivalence classes) silently changes every downstream count.",
              "Unsegmented scripts (Chinese, Thai, Japanese) make segmentation an algorithmic task.",
              "Maximum matching: longest lexicon prefix at each position; trace 研究 / 生命 / 起源.",
              "Greedy fails on overlapping words - real systems add probabilities or statistical models.",
              "BPE merges frequent character pairs into subwords - unknown words become impossible.",
            ],
            callout: {
              type: "tip",
              title: "Tokenize for the tagger, not the reader",
              body: "Taggers prefer 'do' + \"n't\" as two tokens because \"n't\" has its own part of speech; 'U.S.A.' must stay one token so its periods do not confuse sentence splitting. Tokenization choices are linguistic claims - cite one such claim and the answer stops being a definition.",
            },
            examQuestions: [
              {
                q: "What is word segmentation and tokenization? Contrast tokenization in English and Chinese, trace the maximum matching algorithm on '研究生命起源', and explain how byte pair encoding removes the OOV problem.",
                marks: 14,
                outline: [
                  "Definition: cutting continuous text into word tokens; normalization included",
                  "English edge cases: \"don't\" -> do + n't; 'New York-based'; 'U.S.A.' one token",
                  "Chinese: no spaces - segmentation is algorithmic, evaluated against gold standards",
                  "Maximum matching: longest lexicon prefix, emit, advance",
                  "Trace: 研究 / 生命 / 起源 from '研究生命起源'; greedy can mis-split overlapping words",
                  "Vocabulary long tail guarantees OOV with any word-level lexicon",
                  "BPE: merge most frequent adjacent pairs; 'lowest' -> low + est; unknowns fall back to characters",
                ],
              },
              {
                q: "Why does Zipf's law guarantee unknown words, and why does BPE fix it?",
                marks: 7,
                outline: [
                  "Zipf: frequency proportional to 1/rank - a long tail of rare words (section 2.5)",
                  "Any finite lexicon misses rare and newly coined words ('Covid', product names)",
                  "Word-level models assign zero probability to OOV tokens",
                  "BPE compiles a subword vocabulary from frequent character merges",
                  "Any unseen word decomposes into known subwords - OOV eliminated by construction",
                ],
              },
            ],
          },
          {
            number: "2.3",
            title: "Sentence segmentation",
            body: [
              "Sentence segmentation (sentence boundary detection, SBD) splits a stream of tokens into sentences - the unit that parsing, MT and summarization actually process. Newlines are unreliable (titles, addresses, poetry), so the signal is terminal punctuation: '.', '!', '?'. The problem is that '.' is overloaded: it ends sentences, abbreviates titles ('Dr.', 'Prof.', 'i.e.'), terminates decimals ('3.14'), versions ('v2.6'), ellipses and URLs ('node.js'). A naive split-on-period shreds a technical document; the real task is period disambiguation.",
              "The classical solution is a decision tree over cheap features, applied to each period. For a period ending token t: if t is a known abbreviation (Dr., Prof., Jan., i.e.) and the next token is not a plausible sentence opener (lowercase), suspend the boundary; if t is a number and the next token continues it ('3', '.14'), suspend; if t is a sentence-final abbreviation (Inc.) followed by a capitalized opener after a sufficient gap, split anyway; otherwise split. Worked trace on 'Dr. Rao met Mr. Sharma on Jan. 5. They discussed AI.': the periods after Dr, Mr and Jan suspend (abbreviation lexicon, lowercase continuations); the period after '5' splits before the capitalized 'They' - three suspensions, one boundary, correct.",
              "Modern SBD replaces the decision tree with a trained classifier or sequence model over the same features (abbreviation membership, next-token capitalization, token frequency of sentence-final use, whitespace gap), reaching over 99% accuracy on news text; the residual errors concentrate exactly where the features are unreliable - messy web text and unfamiliar abbreviations. The stakes are structural: a missed boundary joins two sentences and confuses the parser; a false boundary orphans a fragment. That is why this small task is graded in its own unit - it is the cheapest place to prevent downstream catastrophe.",
              "Exam framing: state why the sentence is the processing unit, enumerate the '.' ambiguity cases, give the decision-tree rules and the worked trace, and mention the trained-classifier upgrade. The trace of the Dr. Rao sentence is the marks-winning move - write each period's decision and the feature that decided it. Close with the cost of errors: one missed boundary joins two sentences and corrupts the parse, which is why this cheap task earns a place in the pipeline.",
            ],
            keyTerms: [
              { term: "Sentence boundary detection (SBD)", definition: "Splitting a token stream into sentences; the unit for parsing, MT and summarization." },
              { term: "Period disambiguation", definition: "Deciding for each '.' whether it ends a sentence or an abbreviation, decimal, URL or ellipsis." },
              { term: "Suspend rule", definition: "Suppress a boundary after an abbreviation unless the next token is a plausible sentence opener." },
              { term: "Decision-tree SBD", definition: "The classical feature-rule pipeline (abbreviation lexicon + capitalization + gap), now usually a trained classifier." },
            ],
            diagram: {
              kind: "fork",
              title: "What kind of period is this?",
              caption: "One character, four decisions - only one of them ends a sentence.",
              start: "A period '.' encountered in text",
              branches: [
                { label: "Abbreviation (Dr., i.e., Prof.)", outcome: "suspend - not a boundary unless a sentence opener follows", good: false },
                { label: "Decimal or version (3.14, v2.6)", outcome: "suspend - number continues", good: false },
                { label: "URL or ellipsis (node.js, ...)", outcome: "suspend - part of a larger token or trail-off", good: false },
                { label: "Clause-final period", outcome: "boundary - split the sentence here", good: true },
              ],
            },
            table: {
              caption: "Period disambiguation cases and the cues that decide them.",
              headers: ["Token", "Looks like", "Decision", "Cue used"],
              rows: [
                ["Dr.", "sentence end", "suspend", "abbreviation lexicon; next token lowercase"],
                ["Jan. 5.", "sentence end", "suspend, then split", "month abbreviation; 'They' is a capitalized opener after '5.'"],
                ["3.14", "two sentences", "suspend", "number continuation"],
                ["Inc.", "sentence end", "depends", "\"Apple Inc. was\" suspend; \"...at Apple Inc.\" split"],
                ["?", "always terminal", "split", "unambiguous terminal punctuation"],
              ],
            },
            callout: {
              type: "exam",
              title: "The 'Inc.' double case",
              body: "The examiner's favourite boundary case is an abbreviation that can legitimately end a sentence: 'Apple Inc. was founded' suspends, 'shares fell at Apple Inc.' splits. One sentence showing both branches of that decision is worth more than a page of generalities.",
            },
            examQuestions: [
              {
                q: "Explain sentence segmentation and why it is needed. Show why '.' is ambiguous with four examples, describe the decision-tree approach with its features, and trace it on 'Dr. Rao met Mr. Sharma on Jan. 5. They discussed AI.'",
                marks: 14,
                outline: [
                  "Need: sentence is the unit for parsing, MT, summarization; newlines unreliable",
                  "'.' ends sentences but also abbreviates, decimals, versions, URLs, ellipses",
                  "Decision tree per period: abbreviation lexicon, next-token capitalization, gap",
                  "Suspend rule: abbreviation + lowercase continuation -> no boundary",
                  "Trace: Dr. / Mr. / Jan. suspended; '5.' splits before capitalized 'They'",
                  "Modern upgrade: trained classifier on the same features, >99% on news",
                  "Errors are costly: missed boundary confuses the parser, false boundary orphans text",
                ],
              },
              {
                q: "Why is 'Apple Inc. was founded in 1976' handled differently from 'Shares fell at Apple Inc.'?",
                marks: 7,
                outline: [
                  "Both periods follow the abbreviation 'Inc.' - the lexicon alone cannot decide",
                  "First case: next token 'was' is lowercase - unlikely sentence opener -> suspend",
                  "Second case: period is clause-final, nothing follows -> boundary",
                  "The decision needs the next-token features, not just the abbreviation list",
                  "The period character is identical in both cases - only the context features differ",
                  "Generalization: boundary decisions are context decisions, never token-only decisions",
                  "This is why trained-classifier SBD beats pure abbreviation lexicons",
                ],
              },
            ],
          },
          {
            number: "2.4",
            title: "Introduction to corpora",
            body: [
              "A corpus (plural corpora) is a principled, machine-readable collection of text - or speech transcriptions - sampled to represent a language, a genre or a usage, and documented so results can be reproduced. 'Principled' is the load-bearing word: a corpus is designed, not dumped. Design criteria: representativeness (does the sample reflect the target population of text?), balance (proportions across genres - news, fiction, academic, conversation), size (large enough for stable statistics), permanence and documentation (fixed version, licence, sampling scheme). Corpus linguistics is the discipline of deriving language facts from such collections instead of from introspection.",
              "Types matter because each enables different research. Monolingual raw corpora support frequency and collocation work - the Brown Corpus (1961; about 1 million words, 500 samples, 15 genres) was the first balanced American corpus; the British National Corpus (100 million words) adds speech. Annotated corpora carry linguistic labels: the Penn Treebank (about 4.5 million Wall Street Journal words with POS tags and parse trees) enables supervised taggers and parsers, sense-tagged SemCor enables WSD, and coreference-annotated OntoNotes enables anaphora work. Parallel corpora - the same content in two languages, sentence-aligned (Europarl; IITB English-Hindi, 1.6M+ pairs) - are the training data of statistical machine translation (section 5.4).",
              "Why the concept matters for everything else in this syllabus: every statistical method in Units III-V estimates its parameters from a corpus - taggers count tag frequencies, language models count n-grams, SMT counts alignments - so corpus design silently decides model quality (biased sample, biased model, the sampling-bias lesson of evaluation). Indian-language NLP leans on the TDIL (Technology Development for Indian Languages) initiative's corpora and the AI4Bharat indic corpora. The practical workflow the examiner expects: define the population, sample with balance, annotate with guidelines (section 2.6), publish the version, and report statistics against it.",
              "Exam framing: define corpus with the design criteria, classify the types with one named example each, and close with the 'every model estimates from a corpus' argument. The named corpora - Brown, Penn Treebank, BNC, Europarl, IITB English-Hindi - are the vocabulary the marker scans for. Attach one number to each name - 1 million, 4.5 million, 100 million, sentence pairs - because the numbers distinguish a memorized list from an answer.",
            ],
            keyTerms: [
              { term: "Corpus", definition: "A principled, documented, machine-readable collection of text sampled to represent a language or genre." },
              { term: "Treebank", definition: "A corpus annotated with syntactic parse trees (Penn Treebank) - the training data of supervised parsers and taggers." },
              { term: "Parallel corpus", definition: "Sentence-aligned same-content text in two languages (Europarl, IITB English-Hindi) - the fuel of statistical MT." },
              { term: "Balance / representativeness", definition: "Corpus design criteria - genre proportions reflecting the target population of text." },
            ],
            diagram: {
              kind: "matrix",
              title: "The corpus landscape",
              caption: "Two axes - monolingual vs multilingual, raw vs annotated - place every standard corpus.",
              axes: { x: "Monolingual -> Multilingual", y: "Raw -> Annotated" },
              quadrants: [
                { label: "Brown Corpus", note: "monolingual raw - 1M words, 15 genres, the classic" },
                { label: "Penn Treebank", note: "monolingual annotated - POS + parse trees, WSJ text" },
                { label: "Europarl", note: "multilingual raw (parallel) - aligned sentences for SMT" },
                { label: "Universal Dependencies / aligned treebanks", note: "multilingual annotated - 100+ languages, consistent tags" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "corpus.py - first look at the Brown Corpus",
              code: `import nltk
nltk.download("brown", quiet=True)
from nltk.corpus import brown

print(len(brown.categories()), brown.categories()[:4])
# 15 ['adventure', 'belated', 'editorial', 'fiction'] (sample)

words = brown.words()                       # all 1M+ tokens
print(len(words), len(set(words)))          # tokens vs types
# 1161192 56010   -> type/token ratio ~ 0.048 at this size

news = brown.words(categories="news")
freq = nltk.FreqDist(w.lower() for w in news)
print(freq.most_common(5))
# [('the', 5580), (',', 5188), ('.', 4065), ('of', 2847), ('and', 2823)]`,
            },
            bullets: [
              "Corpus = principled + machine-readable + documented; designed, not dumped.",
              "Design criteria: representativeness, balance across genres, size, permanence, documentation.",
              "Brown Corpus (1961): ~1M words, 500 samples, 15 genres - the first balanced corpus.",
              "Penn Treebank: ~4.5M words of WSJ with POS tags and parse trees - enables supervised parsing.",
              "Parallel corpora (Europarl, IITB English-Hindi, 1.6M+ pairs) train statistical MT.",
              "Every statistical model in this course estimates parameters from a corpus - design decides quality.",
            ],
            callout: {
              type: "tip",
              title: "Name the corpus with its numbers",
              body: "An answer that says 'a treebank' scores half of one that says 'the Penn Treebank, about 4.5 million Wall Street Journal words with POS tags and parse trees'. Memorize four corpora with one number and one use each - Brown, Penn Treebank, BNC, IITB English-Hindi.",
            },
            examQuestions: [
              {
                q: "Define a corpus and its design criteria. Classify corpora as monolingual/parallel and raw/annotated with one named example of each, and explain why annotated corpora changed NLP.",
                marks: 14,
                outline: [
                  "Corpus: principled, machine-readable, documented sample of language",
                  "Criteria: representativeness, balance, size, permanence, documentation",
                  "Monolingual raw: Brown Corpus - 1M words, 15 genres",
                  "Annotated: Penn Treebank - POS tags + parse trees; SemCor - senses",
                  "Parallel: Europarl, IITB English-Hindi (1.6M+ pairs) - trains SMT",
                  "Annotated corpora turned tagging/parsing into supervised learning",
                  "Biased corpus -> biased model: design decides every downstream statistic",
                ],
              },
              {
                q: "What is a treebank and why did it transform syntactic NLP?",
                marks: 7,
                outline: [
                  "Corpus where every sentence carries a full parse tree (Penn Treebank)",
                  "Before: parsers were hand-written rule systems",
                  "After: parsers became statistical models trained on trees",
                  "Parsing accuracy became measurable against a fixed gold standard",
                  "Treebank rule frequencies also drive probabilistic disambiguation (section 1.3)",
                ],
              },
            ],
          },
          {
            number: "2.5",
            title: "Corpora analysis - frequency, Zipf's law and collocations",
            body: [
              "Corpus analysis is statistics over tokens, and its first object is the frequency distribution: count every token, list the types in rank order. Two structural facts fall out immediately. Function words dominate - in Brown news, 'the' occurs about 5,580 times while most content words occur once. And the type/token ratio falls as the corpus grows: a 1,000-token sample has a ratio near 0.5, a million-token corpus near 0.05, because new types keep arriving more slowly than tokens accumulate. Both facts are consequences of the law that organizes the whole vocabulary.",
              "Zipf's law: word frequency is approximately inversely proportional to its rank - f(r) = k/r. Worked numbers (Brown-scale): 'the' rank 1: 69,971 (product 69,971); 'of' rank 2: 36,411 (72,822); 'and' rank 3: 28,852 (86,556); 'to' rank 4: 26,149 (104,596); 'a' rank 5: 21,880 (109,400); 'in' rank 6: 20,695 (124,170). The product drifts slowly upward but stays within a factor of two over the top ranks - the signature of the law. Its consequences are severe and examinable: about half of the types are hapax legomena (occur exactly once), so no rare-word estimate is reliable - which is why Unit IV needs smoothing and section 2.2 needs subwords.",
              "Beyond frequencies, corpus analysis delivers concordance and collocation. A concordance (KWIC - key word in context) lists every occurrence of a word with its surrounding window - the lexicographer's tool that reveals, say, 'charge' used as noun vs verb in different neighbours. Collocations are statistically co-preferred word pairs - 'strong tea' beats 'powerful tea' though both are semantically odd/acceptable respectively - measured by pointwise mutual information: PMI(x, y) = log2 [ p(x, y) / (p(x) p(y)) ], the log-ratio of observed joint frequency to expected-under-independence; PMI above 0 means the pair co-occurs more than chance. PMI's raw form over-favours rare pairs, so corpus tools smooth or filter by frequency - the details are the standard 7-marker.",
              "Exam framing: state Zipf's law with the formula, reproduce three rank x frequency rows, name two consequences (hapax legomena, sparsity), and define collocation plus PMI with one computed pair. That is a complete 14-mark skeleton. Compute the PMI pair with the exact numbers - log2(10) = 3.32 for 'strong tea', log2(2.5) = 1.32 for 'powerful tea' - because the two values side by side demonstrate the discrimination.",
            ],
            keyTerms: [
              { term: "Frequency distribution", definition: "Count of every type in a corpus, ranked - the base object of corpus statistics." },
              { term: "Zipf's law", definition: "Frequency inversely proportional to rank, f(r) ~ 1/r; rank x frequency roughly constant at the top." },
              { term: "Hapax legomenon", definition: "A type occurring exactly once - roughly half of all types in a corpus; the sparsity problem in miniature." },
              { term: "Collocation / PMI", definition: "A statistically co-preferred pair ('strong tea'); PMI = log2 p(x,y)/(p(x)p(y)) measures the preference." },
            ],
            diagram: {
              kind: "pipeline",
              title: "The corpus analysis workflow",
              caption: "Every statistical NLP method starts as counting on a corpus - the differences are what gets counted.",
              stages: [
                { label: "Corpus", note: "designed, balanced, versioned" },
                { label: "Clean + tokenize", note: "normalization decisions here (2.2)" },
                { label: "Frequency distribution", note: "types, tokens, ranks" },
                { label: "Zipf / growth analysis", note: "rank x frequency, Heaps" },
                { label: "Concordance + collocations", note: "KWIC lines, PMI pairs" },
              ],
            },
            table: {
              caption: "Zipf's law on a Brown-scale corpus - rank x frequency stays within a factor of two.",
              headers: ["Rank", "Word", "Frequency", "Rank x frequency"],
              rows: [
                ["1", "the", "69,971", "69,971"],
                ["2", "of", "36,411", "72,822"],
                ["3", "and", "28,852", "86,556"],
                ["4", "to", "26,149", "104,596"],
                ["5", "a", "21,880", "109,400"],
                ["6", "in", "20,695", "124,170"],
              ],
            },
            callout: {
              type: "exam",
              title: "Zipf explains two later units",
              body: "Close the Zipf answer with the forward links: the hapax legomena are why bigram estimates need smoothing (Unit IV) and why word-level lexicons hit OOV (section 2.2). One sentence - 'the long tail is the source of the sparsity problem' - connects three units and earns the synthesis mark.",
            },
            examQuestions: [
              {
                q: "State Zipf's law with its formula. Verify it with the top six ranks of a Brown-scale corpus, and explain two consequences of the law for NLP systems.",
                marks: 14,
                outline: [
                  "Law: frequency proportional to 1/rank (exponent s ~ 1)",
                  "the 69,971; of 36,411; and 28,852; to 26,149; a 21,880; in 20,695",
                  "Rank x frequency: 69,971 / 72,822 / 86,556 / 104,596 / 109,400 / 124,170 - roughly constant",
                  "Consequence 1: hapax legomena - half the types occur once, no reliable estimates",
                  "Consequence 2: sparsity forces smoothing in language models (Unit IV)",
                  "Consequence 3: OOV guarantees -> subword segmentation (2.2)",
                ],
              },
              {
                q: "Define collocation and explain pointwise mutual information with a worked calculation. Why does raw PMI favour rare pairs?",
                marks: 7,
                outline: [
                  "Collocation: statistically co-preferred pair - 'strong tea' over 'powerful tea'",
                  "PMI(x,y) = log2 [ p(x,y) / (p(x) p(y)) ] - log-ratio vs independence",
                  "Worked: c(strong)=5000, c(tea)=2000, c(strong,tea)=100, N=1M -> PMI = log2(10) = 3.32",
                  "c(powerful,tea)=10 with c(powerful)=2000 -> PMI = log2(2.5) = 1.32",
                  "Raw PMI over-scores rare pairs because the joint probability is tiny but the ratio large",
                  "Fixes: frequency filtering, smoothed PMI, t-test",
                ],
              },
            ],
          },
          {
            number: "2.6",
            title: "Corpus annotation and inter-annotator agreement",
            body: [
              "Annotation is the act of adding linguistic labels to raw text - POS tags, parse trees, entity spans, word senses, coreference links - under a written guideline that defines every tag and its boundary cases. Annotation is expensive (expert annotators, adjudication meetings) and it is the bottleneck of supervised NLP: the models of Units III-V are only as good as their annotated corpora. The major annotation layers stack upward: token and sentence spans, POS tags, syntactic trees, semantic roles and word senses, discourse and coreference - each layer defined by its own guideline document, and the Penn Treebank guidelines are the canonical example of the genre.",
              "Annotation quality is measured by inter-annotator agreement: two annotators label the same data independently, and their agreement estimates the reliability of the scheme. Percent agreement is misleading when classes are imbalanced - if 95% of tokens are 'O' (not an entity), two lazy annotators who always say 'O' agree 95% of the time while agreeing about nothing. Cohen's kappa corrects for chance: kappa = (P(A) - P(E)) / (1 - P(E)), where P(A) is observed agreement and P(E) the agreement expected by chance from each annotator's label distribution. Interpretation bands: below 0.4 poor, 0.4-0.6 moderate, 0.6-0.8 substantial, above 0.8 almost perfect.",
              "Worked example: two annotators label 100 tokens for entity/non-entity. Both say entity 70 times, both say non-entity 20 times, one says entity while the other says non-entity 10 times (6 vs 4). P(A) = 90/100 = 0.90. Annotator 1 says entity 76/100 = 0.76 of the time; annotator 2, 74/100 = 0.74. P(E) = 0.76 x 0.74 + 0.24 x 0.26 = 0.5624 + 0.0624 = 0.6248. Kappa = (0.90 - 0.6248) / (1 - 0.6248) = 0.2752 / 0.3752 = 0.734 - substantial agreement, scheme accepted. The same arithmetic justifies the kappa's lesson: 90% raw agreement on an imbalanced task is really only 73% above chance.",
              "Exam framing: define annotation and its layers, give the kappa formula with the worked numbers, and state the percent-agreement trap. The computation is the marks - write P(A), P(E), kappa as three labelled steps exactly as above. Then close with the forward link: annotated corpora are the training sets of Units III-V, so agreement below the substantial band is a reason to fix the guideline, not to train anyway.",
            ],
            keyTerms: [
              { term: "Annotation", definition: "Adding linguistic labels (tags, spans, trees, senses) to raw text under a written guideline." },
              { term: "Inter-annotator agreement", definition: "Agreement between two independent annotators - the reliability measure of a scheme." },
              { term: "Cohen's kappa", definition: "(P(A) - P(E)) / (1 - P(E)) - agreement corrected for chance; >0.6 substantial, >0.8 almost perfect." },
              { term: "Chance agreement P(E)", definition: "Agreement expected if annotators guessed from their own label distributions - the percent-agreement correction." },
            ],
            diagram: {
              kind: "layers",
              title: "The annotation stack",
              caption: "Each layer is defined by a guideline document and feeds models at its own level of the pipeline.",
              layers: [
                { label: "Discourse & coreference", note: "antecedent links, dialogue acts" },
                { label: "Semantic roles & word senses", note: "who did what; which sense (SemCor)" },
                { label: "Syntax", note: "constituency/dependency trees (Penn Treebank)" },
                { label: "POS tags", note: "lexical categories per token" },
                { label: "Tokens & sentence spans", note: "the segmentation of 2.2-2.3" },
                { label: "Raw characters", note: "bytes and encoding (2.1)" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "kappa.py - Cohen's kappa from a 2x2 annotation table",
              code: `both_yes, both_no = 70, 20
a_yes_b_no, a_no_b_yes = 6, 4
n = both_yes + both_no + a_yes_b_no + a_no_b_yes   # 100 tokens

p_observed = (both_yes + both_no) / n              # 0.90
p_yes_a = (both_yes + a_yes_b_no) / n              # 0.76
p_yes_b = (both_yes + a_no_b_yes) / n              # 0.74
p_expected = p_yes_a * p_yes_b + (1 - p_yes_a) * (1 - p_yes_b)
# 0.76*0.74 + 0.24*0.26 = 0.6248

kappa = (p_observed - p_expected) / (1 - p_expected)
print(round(kappa, 3))                             # 0.733 -> substantial`,
            },
            bullets: [
              "Annotation adds labels under a written guideline; guidelines define every boundary case.",
              "Layers stack: tokens -> POS -> trees -> senses/roles -> coreference.",
              "Percent agreement misleads on imbalanced classes - two lazy annotators hit 95% by saying 'O' always.",
              "Kappa = (P(A) - P(E)) / (1 - P(E)); worked: 0.90 observed, 0.6248 chance -> 0.733.",
              "Bands: <0.4 poor, 0.4-0.6 moderate, 0.6-0.8 substantial, >0.8 almost perfect.",
              "Annotation is the bottleneck of supervised NLP - model quality is bounded by scheme reliability.",
            ],
            callout: {
              type: "warning",
              title: "Do not compute kappa from raw counts",
              body: "The common slip is dividing agreements by n and calling it kappa - that is percent agreement. Kappa needs P(E) computed from each annotator's marginal label distribution. Show the three steps (P(A), P(E), kappa) or the method marks vanish.",
            },
            examQuestions: [
              {
                q: "What is corpus annotation? Describe the major annotation layers with one corpus example each, and explain why inter-annotator agreement is measured.",
                marks: 14,
                outline: [
                  "Annotation: labels added under a written guideline (Penn Treebank guidelines as canon)",
                  "Token/sentence spans; POS tags; parse trees (Penn Treebank)",
                  "Word senses (SemCor); semantic roles (PropBank); coreference (OntoNotes)",
                  "Agreement measures scheme reliability before models are trained",
                  "Annotation is the bottleneck and budget of supervised NLP",
                  "Adjudication resolves disagreements and refines guidelines iteratively",
                ],
              },
              {
                q: "Compute Cohen's kappa for two annotators labelling 100 tokens where both mark entity 70 times, both mark non-entity 20 times, and they disagree on 10 tokens. Interpret the result.",
                marks: 7,
                outline: [
                  "P(A) = (70 + 20)/100 = 0.90 observed agreement",
                  "Annotator marginals: 0.76 and 0.74 entity",
                  "P(E) = 0.76 x 0.74 + 0.24 x 0.26 = 0.6248",
                  "Kappa = (0.90 - 0.6248)/(1 - 0.6248) = 0.733",
                  "Interpretation: substantial agreement (>0.6) - scheme reliable",
                  "Raw 90% was inflated by chance on an imbalanced task",
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
      title: "Morphology, Word Types and POS Tagging",
      summary:
        "Unit III is the word-structure unit: inflectional versus derivational morphology, morphological analysis and generation with finite state transducers and two-level rules, tokens and types with vocabulary growth, part-of-speech tagging with the Penn tagset, rule-based and stochastic taggers, maximum entropy models for tagging, and multi-word expressions.",
      chapter: {
        number: "03",
        title: "Word Structure and Word Classes",
        intro:
          "Unit III covers inflectional and derivational morphology, morphological analysis and generation using finite state transducers with two-level orthographic rules, word types and vocabulary growth, part-of-speech tagging and tagsets, rule-based and stochastic tagging approaches, maximum entropy models for POS tagging, and multi-word expressions.",
        inOneBreath:
          "Morphology builds words from morphemes - inflection changes grammatical form (cat/cats), derivation builds new lexemes (happy/happiness); an FST composes a lexicon with orthographic rules so the same machine maps surface-to-lexical and lexical-to-surface; types grow sublinearly (Heaps) while closed classes freeze; POS tagging is sequence disambiguation solved by rules (Brill), HMMs and MaxEnt feature-weighted softmax; multi-word expressions are strings that behave as single words ('kick the bucket').",
        sections: [
          {
            number: "3.1",
            title: "Inflectional and derivational morphology",
            body: [
              "Morphology is the study of word structure; its atoms are morphemes - the smallest meaning-bearing units. 'Unbelievable' decomposes into un + believe + able: two bound affixes around one free stem. Morphological analysis maps a surface word to its lemma (dictionary form) plus grammatical features - 'cats' to cat + noun + plural; morphological generation runs the same mapping in reverse. English is morphologically poor - eight productive inflectional suffixes (plural -s, possessive -'s, past -ed, progressive -ing, third-singular -s, participle -en, comparative -er, superlative -est) - while Finnish, Turkish and Arabic pack whole clauses of meaning into one word, which is why morphological analysis is optional for English but mandatory for those languages (the cross-lingual argument of section 1.4).",
              "The syllabus's central contrast: inflectional morphology vs derivational morphology. Inflection changes the grammatical form of the same lexeme without creating a new dictionary entry: cat/cats, walk/walked/walking, big/bigger/biggest - same part of speech, same core meaning, paradigmatic and fully productive. Derivation creates new lexemes, often changing the part of speech: happy (adj) to happiness (noun), teach (verb) to teacher (noun), modern (adj) to modernize (verb) to modernization (noun). Derivation chains - nation to national to nationalize to nationalization - and its output belongs in the dictionary; inflection's output belongs in the paradigm table. A simple test the examiner likes: inflection never changes POS, derivation frequently does.",
              "Worked analysis of 'unbelievably': strip -ly (adverb-forming derivational suffix), then -able (adjective-forming derivational), then un- (reversive derivational prefix), leaving the free stem believe - a purely derivational stack. Contrast 'walked': walk + past -ed, purely inflectional. Mixed cases show why the distinction pays: 'teacher's' is derive (teach to teacher) then inflect (possessive) - analysis proceeds derivationally to the lemma, then inflectionally to the features. This order - derivation builds the lemma, inflection decorates it - is the standard analysis strategy and the answer to 'how does a morphological analyzer order its rules?'",
              "Exam framing: define morpheme, lemma and the analysis/generation directions; then the 14-marker is the contrast table - five inflectional and five derivational examples with the POS-change column filled. Close with the language-richness paragraph: English 8 suffixes vs agglutinative languages, and why NLP systems need lemmatization for search and tagging. One closing line earns the synthesis mark: lemmatization for search engines, taggers and morphologically rich languages is the practical reason the syllabus spends a unit on word structure.",
            ],
            keyTerms: [
              { term: "Morpheme", definition: "Smallest meaning-bearing unit - free ('cat') or bound ('-s', 'un-')." },
              { term: "Inflectional morphology", definition: "Grammatical form changes of one lexeme - cat/cats, walked; never changes POS, paradigmatic." },
              { term: "Derivational morphology", definition: "Formation of new lexemes - happy/happiness; often changes POS, chained and semi-predictable." },
              { term: "Lemma", definition: "Canonical dictionary form under which inflected variants are indexed - 'cats' -> cat + PL." },
            ],
            diagram: {
              kind: "compare",
              title: "Inflectional vs derivational morphology",
              caption: "Same lexeme, new form - versus new lexeme, possibly new category.",
              left: {
                heading: "Inflectional",
                items: [
                  "Changes grammatical form of the same lexeme",
                  "Never changes part of speech",
                  "Closed, small paradigms (8 suffixes in English)",
                  "Examples: cat/cats, walk/walked/walking, big/bigger",
                ],
              },
              right: {
                heading: "Derivational",
                items: [
                  "Creates a new lexeme - a dictionary entry",
                  "Often changes part of speech",
                  "Chains: nation -> national -> nationalize -> nationalization",
                  "Examples: happy/happiness, teach/teacher, modern/modernize",
                ],
              },
            },
            table: {
              caption: "One stem, both kinds of morphology.",
              headers: ["Stem", "Inflectional forms (same POS)", "Derived forms (new lexemes)"],
              rows: [
                ["teach", "teaches, taught, teaching", "teacher, teachable"],
                ["happy", "happier, happiest", "happiness, unhappy, happily"],
                ["nation", "nations", "national, nationalize, nationalism"],
                ["modern", "modernest (rare)", "modernize, modernization, modernism"],
                ["believe", "believes, believed, believing", "believer, believable, unbelievable"],
              ],
            },
            callout: {
              type: "exam",
              title: "The POS-change test",
              body: "When asked to classify an affix, apply one test: does the output belong in the paradigm of the same part of speech (inflection) or in the dictionary as a new entry, often with new POS (derivation)? 'happiness' is derivation because it is a noun built from an adjective; 'happier' is inflection because it stays an adjective.",
            },
            examQuestions: [
              {
                q: "Distinguish inflectional and derivational morphology with five examples of each, state whether each changes part of speech, and explain why the distinction matters for morphological analysis.",
                marks: 14,
                outline: [
                  "Inflection: same lexeme, same POS - cat/cats, walked, walking, bigger, biggest",
                  "Derivation: new lexemes - happiness, teacher, nationalize, unbelievable, modernization",
                  "POS test: inflection never changes POS; derivation frequently does",
                  "Derivation chains (nation -> national -> nationalize); inflection paradigms",
                  "Analysis order: derivational rules build the lemma, inflectional rules add features",
                  "English has ~8 inflectional suffixes; agglutinative languages need full FST analysis",
                  "Application: lemmatization for search, taggers and morphologically rich languages",
                ],
              },
              {
                q: "Analyse 'unbelievably' morphologically and explain why the analysis is purely derivational, contrasting it with 'walked'.",
                marks: 7,
                outline: [
                  "Strip -ly: adverb-forming derivational suffix",
                  "Strip -able: adjective-forming derivational suffix",
                  "Strip un-: reversive derivational prefix; free stem believe remains",
                  "'walked' = walk + past -ed: purely inflectional, same POS throughout",
                  "'unbelievably' never changes POS after the first step? no - each step builds a new lexeme",
                ],
              },
            ],
          },
          {
            number: "3.2",
            title: "Morphological analysis and generation",
            body: [
              "Morphological analysis runs surface to lexical: 'foxes' to fox +N +PL, 'cries' to cry +V +3SG. Morphological generation runs lexical to surface: fox +N +PL to 'foxes'. The two are inverses of one machine, which is the property that makes finite state transducers (next section) the natural implementation. Analysis output - lemma plus features - feeds everything: search engines lemmatize queries so 'running' matches 'run'; taggers normalize rare inflections toward frequent lemmas; morphologically rich languages cannot be tagged at all without it.",
              "The analyzer's knowledge splits into two parts. The lexicon lists stems with their continuation classes - reg-noun (cat, fox, dog), irreg-noun (goose/geese), reg-verb, irreg-verb - and legal suffix sequences. Orthographic rules handle the spelling changes stems undergo when suffixes attach: e-insertion (fox + s is spelled 'foxes'; the epenthetic e separates x from s), y-replacement (cry + s is spelled 'cries'; y becomes ie before s), consonant doubling (run + ing is 'running'), e-deletion (make + ing is 'making'). Worked traces: 'cats' = cat + ^s, identity rule; 'foxes' = fox + ^s with e-insertion; 'cries' = cry + ^s with y-replacement; 'happier' = happy + comparative with y-to-i; 'running' = run + ing with doubling.",
              "Full analyzers versus stemmers is the practical trade-off. A full two-level analyzer returns lemma plus features and rejects impossible words - but needs the lexicon and rule machinery, and is the standard exam topic. A stemmer (Porter's algorithm, 1980) applies cascaded suffix-stripping heuristics with no lexicon: 'relationally' to 'relat', fast and language-wide but over-aggressive and feature-blind - 'relat' is not a word. Lemmatizers use dictionary lookup plus context to return real lemmas ('better' to 'good' - which stemmers cannot do). The exam contrast: Porter trades correctness for coverage; the FST trades coverage for correctness; the lemmatizer needs a dictionary and a POS decision.",
              "Exam framing: define both directions, work three traces (cats, foxes, cries), name the orthographic rules by name, and end with the stemmer vs full-analyzer contrast. The named rules - e-insertion, y-replacement, doubling, e-deletion - are the checklist the marker scans for. Include the over-stemming example: strip -ed from 'tried' and you get 'tri', not a word - the failure that proves rules alone cannot recover the true stem without a lexicon.",
            ],
            keyTerms: [
              { term: "Morphological analysis", definition: "Surface word -> lemma + features: 'foxes' -> fox +N +PL." },
              { term: "Morphological generation", definition: "Lemma + features -> surface word: fox +N +PL -> 'foxes' - the inverse mapping." },
              { term: "Orthographic rules", definition: "Spelling-change rules at stem-suffix joins: e-insertion, y-replacement, doubling, e-deletion." },
              { term: "Porter stemmer", definition: "Cascaded suffix-stripping heuristic without a lexicon - fast, over-aggressive, feature-blind." },
            ],
            diagram: {
              kind: "pipeline",
              title: "Analyzing 'foxes'",
              caption: "Analysis strips affixes, normalizes the stem, and emits lemma plus features - generation runs the arrows backwards.",
              stages: [
                { label: "Surface: 'foxes'", note: "input token" },
                { label: "Strip suffix", note: "candidate -s (plural)" },
                { label: "Stem candidate: 'fox'", note: "in lexicon as reg-noun" },
                { label: "Orthographic check", note: "e-insertion rule applies before ^s" },
                { label: "Lexical form", note: "fox +N +PL" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "morph.py - a miniature rule-based analyzer",
              code: `def analyze(word):
    for suf, feats, fix in [("ies", "+V +3SG", lambda s: s[:-3] + "y"),
                            ("es",  "+N/+V",   None),
                            ("s",   "+PL/+3SG", None),
                            ("ing", "+V +ING", lambda s: s[:-3]),
                            ("ed",  "+V +PAST", lambda s: s[:-2])]:
        if word.endswith(suf):
            stem = word[:-len(suf)]
            if fix: stem = fix(stem)          # y-restoration etc.
            return stem, feats
    return word, "+SG/+BASE"

for w in ["cats", "foxes", "cries", "walking", "tried"]:
    print(w, "->", analyze(w))
# cats    -> cat    +PL/+3SG
# foxes   -> fox    +N/+V      (e-insertion rule fired)
# cries   -> cry    +V +3SG    (y restored)
# walking -> walk   +V +ING
# tried   -> tri    +V +PAST   (over-stemmed - a stemmer's classic flaw)`,
            },
            bullets: [
              "Analysis: surface -> lemma + features; generation: lemma + features -> surface - inverse mappings.",
              "Lexicon: stems with continuation classes (reg-noun, irreg-noun, reg-verb...).",
              "Orthographic rules: e-insertion (foxes), y-replacement (cries), doubling (running), e-deletion (making).",
              "'cats' -> cat +N +PL (identity); 'foxes' -> fox +N +PL (e-insertion); 'cries' -> cry +V +3SG (y-replacement).",
              "Porter stemmer: no lexicon, cascaded stripping - 'relational' -> 'relat', not a word.",
              "Lemmatizer: dictionary + POS context - maps 'better' to 'good', which stemmers cannot.",
            ],
            callout: {
              type: "tip",
              title: "Say why 'tried' breaks the toy stemmer",
              body: "Strip -ed from 'tried' and you get 'tri', not a word - the i is part of the y-replacement spelling of 'try'. One over-stemming example proves you understand why lexicons exist: rules alone cannot know which spelling changes the stem really underwent.",
            },
            examQuestions: [
              {
                q: "Explain morphological analysis and generation. Work the traces of 'cats', 'foxes' and 'cries' naming the orthographic rules involved, and contrast a full analyzer with the Porter stemmer.",
                marks: 14,
                outline: [
                  "Analysis: surface -> lemma + features; generation: the inverse",
                  "Lexicon holds stems + continuation classes; rules handle spelling changes",
                  "'cats' -> cat +N +PL via identity rule",
                  "'foxes' -> fox +N +PL via e-insertion (e between x and s)",
                  "'cries' -> cry +V +3SG via y-replacement (y -> ie before ^s)",
                  "Porter stemmer: cascaded stripping, no lexicon - fast, over-stems ('tried' -> 'tri')",
                  "Full FST analyzer: correct features and rejection of impossible words",
                ],
              },
              {
                q: "Why is lemmatization harder than stemming? Give one example a stemmer cannot handle.",
                marks: 7,
                outline: [
                  "Lemmatizer returns a real dictionary lemma; stemmer returns a stripped string",
                  "Lemma choice needs POS context - 'saw' is see+PAST or saw+N",
                  "Irregular forms: 'better' -> 'good', 'went' -> 'go' - no rule chain produces them",
                  "Stemmers cannot map inflectional spelling back without a lexicon ('tried' -> 'tri')",
                  "The FST analyzer with a lexicon sits between them: correct features, full coverage needs rules",
                  "Production systems pair stemmers for coverage with lemmatizers for accuracy",
                ],
              },
            ],
          },
          {
            number: "3.3",
            title: "Finite state transducers and two-level morphology",
            body: [
              "A finite state automaton (FSA) accepts or rejects strings over one tape; a finite state transducer (FST) maps between two tapes - reading a surface string and writing a lexical string, or vice versa. Every arc carries an input symbol and an output symbol (either may be the empty string). Three closure properties make FSTs the right tool: inversion (swap the tapes and the same machine runs generation), composition (two FSTs chained into one), and union. Koskenniemi's two-level morphology (1983) built morphological analysis on exactly these: a lexicon FST plus parallel rule FSTs, all mapping simultaneously between the lexical level and the surface level.",
              "The architecture: the lexicon FST encodes stems and legal morpheme sequences as paths (reg-noun stems with a ^s plural continuation; irregular pairs like goose/geese); the orthographic rules are FSTs over the intermediate representation with its '^' morpheme boundaries - e-insertion inserts e between a final x (or s, z, ch) and ^s; y-replacement maps y to ie before ^s. The composed machine lexicon ∘ rules maps lexical forms directly to surface forms and, inverted, surface back to lexical. Worked trace: fox +N +PL gives fox^s; e-insertion rewrites x ^ s to x e s; surface 'foxes'. For 'foxs': the lexicon path exists, but no rule path produces the surface string - the transducer rejects it, which is spell-checking for free.",
              "Why finite state at all? Because morphological spelling is strictly local - each rule consults a fixed window of context - and finite state machines capture exactly local phenomena, with linear-time processing and no statistical training needed. The same FST toolkit also builds pronunciation lexicons for speech and orthographic normalizers for search. The known limitation: phenomena with unbounded dependencies (reduplication in some languages, certain Semitic templatic patterns) strain finite state, and irregular words must be enumerated in the lexicon rather than rule-generated. For English and most Indian languages' inflection, however, FSTs are complete and fast - which is why they remained the production technology long after statistics took over syntax.",
              "Exam framing: define FSA vs FST, state the three closure properties with the analysis/generation consequence, draw the lexicon-plus-rules architecture, and trace 'foxes' and the rejection of 'foxs'. The composition formula and the rejection property are the two details that lift the answer above definition level. One forward link finishes it: the same finite state toolkit builds pronunciation lexicons for speech and orthographic normalizers for search - local rules, linear time, no training data.",
            ],
            keyTerms: [
              { term: "FST (finite state transducer)", definition: "A finite automaton over two tapes - maps surface strings to lexical strings and, inverted, back." },
              { term: "Two-level morphology", definition: "Koskenniemi's architecture: lexicon FST plus parallel orthographic rule FSTs between lexical and surface levels." },
              { term: "Composition", definition: "Chaining FSTs - lexicon ∘ rules maps lexical to surface in one machine." },
              { term: "Intermediate form", definition: "The '^'-marked string between lexicon and rules: fox^s, cry^s." },
            ],
            diagram: {
              kind: "flow",
              title: "Two-level morphology: lexicon FST + rule FSTs",
              caption: "One composed machine runs analysis and generation - and rejects impossible spellings for free.",
              steps: [
                { label: "Lexical form", note: "fox +N +PL" },
                { label: "Lexicon FST", note: "stems + continuation classes -> fox^s" },
                { label: "Rule FSTs", note: "e-insertion: x ^ s -> x e s" },
                { label: "Surface form", note: "foxes" },
                { label: "Inversion", note: "same machine, tapes swapped, analyses 'foxes'" },
              ],
            },
            table: {
              caption: "Two-level traces - lexical to intermediate to surface.",
              headers: ["Lexical", "Intermediate", "Surface", "Rule fired"],
              rows: [
                ["fox +N +PL", "fox^s", "foxes", "e-insertion (x before ^s)"],
                ["cat +N +PL", "cat^s", "cats", "identity (no change)"],
                ["cry +V +3SG", "cry^s", "cries", "y-replacement (y -> ie before ^s)"],
                ["fox +N +SG", "fox", "fox", "identity"],
                ["fox +N +PL (no rule path)", "fox^s", "foxs", "rejected - no legal rule path"],
              ],
            },
            callout: {
              type: "warning",
              title: "The rejection property is the point",
              body: "Students describe the FST as a translator and miss its gate-keeping role: 'foxs' fails because no sequence of legal rules connects the lexical form to that surface string. Analysis is not string editing - it is acceptance testing against a finite state language. Name that and the definition mark is safe.",
            },
            examQuestions: [
              {
                q: "Define a finite state transducer and state its closure properties. Explain the two-level morphology architecture - lexicon FST plus orthographic rule FSTs - and trace 'foxes' from lexical to surface form, including why 'foxs' is rejected.",
                marks: 14,
                outline: [
                  "FSA accepts strings over one tape; FST maps between two tapes (input/output per arc)",
                  "Closure: inversion (generation = analysis with tapes swapped), composition, union",
                  "Lexicon FST: stems + continuation classes (reg-noun, irreg pairs like goose/geese)",
                  "Rule FSTs over intermediate forms: e-insertion, y-replacement",
                  "Trace: fox +N +PL -> fox^s -> (x ^ s -> x e s) -> 'foxes'",
                  "'foxs': lexicon path exists but no rule path produces it - transducer rejects",
                  "Same composed machine analyses and generates - linear time, no training data",
                ],
              },
              {
                q: "Why are finite state machines well suited to morphology, and where do they fail?",
                marks: 7,
                outline: [
                  "Morphological spelling is local - fixed context windows fit finite state exactly",
                  "Linear-time, no training data, reversible (one machine, two directions)",
                  "Fails on unbounded dependencies and templatic reduplication patterns",
                  "Irregulars must be enumerated in the lexicon, not rule-generated",
                  "No probabilities or corpus counts are needed - rules are complete for English inflection",
                  "That is why FSTs stayed in production for spell-checking morphologically rich languages",
                ],
              },
            ],
          },
          {
            number: "3.4",
            title: "Word types, tokens and vocabulary growth",
            body: [
              "Distinguish token from type: tokens are running word instances, types are distinct words. 'To be or not to be' is six tokens and four types ('to' counts twice). The type/token ratio measures lexical diversity, but it falls as a text lengthens - which is law, not noise. Heaps' law: vocabulary size grows sublinearly with corpus size, V = k x N^beta with beta between 0.4 and 0.6 in practice. Worked with k = 50, beta = 0.5: N = 10,000 tokens gives V = 50 x 100 = 5,000 types; N = 100,000 gives about 15,800; N = 1,000,000 gives 50,000 - matching Brown's roughly 50,000 types in a million tokens. Doubling the corpus never doubles the vocabulary.",
              "The word classes the vocabulary splits into behave differently. Open classes - nouns, main verbs, adjectives, adverbs - are indefinitely large and constantly growing (new nouns: 'selfie', 'podcast'); closed classes - determiners, pronouns, prepositions, conjunctions, auxiliary verbs - are a few hundred members and effectively frozen (English gains a preposition once a century). The Zipf interaction (section 2.5): the most frequent words are exactly the closed-class function words, while open-class content words populate the long tail of hapax legomena. So the vocabulary's growth is open-class growth, and its frequency mass is closed-class mass - two facts one table summarizes.",
              "Why the exam cares: sparsity. Every rare type is a parameter that cannot be estimated reliably - the n-gram models of Unit IV assign zero probability to unseen continuations precisely because the long tail exists; tokenizers need subwords (section 2.2) because the tail is unbounded; and taggers handle unknown words by suffix guessing because the tail guarantees novel words at test time. Vocabulary growth is therefore not a curiosity - it is the quantitative cause of the smoothing, OOV and unknown-word machinery that the rest of the syllabus exists to manage.",
              "Exam framing: define token/type with the 'to be or not to be' example, state Heaps' law with worked numbers, contrast open and closed classes, and close with the sparsity consequences. Four moves, one 14-marker. The consequences deserve two named lines - zero-probability n-grams motivating smoothing (Unit IV) and guaranteed OOV motivating subwords (2.2) - because they convert a vocabulary observation into a model-design argument.",
            ],
            keyTerms: [
              { term: "Token / type", definition: "Running instances vs distinct words; 'to be or not to be' = 6 tokens, 4 types." },
              { term: "Heaps' law", definition: "V = k x N^beta, beta ~ 0.5 - vocabulary grows sublinearly with corpus size." },
              { term: "Open class", definition: "Nouns, verbs, adjectives, adverbs - indefinitely large, constantly growing, meaning-bearing." },
              { term: "Closed class", definition: "Determiners, pronouns, prepositions, conjunctions - few hundred members, effectively frozen, grammar-bearing." },
            ],
            diagram: {
              kind: "compare",
              title: "Open class vs closed class",
              caption: "The vocabulary grows on one side and stays frozen on the other - and frequency mass sits on the frozen side.",
              left: {
                heading: "Open (content) class",
                items: [
                  "Nouns, main verbs, adjectives, adverbs",
                  "Indefinitely large, always growing - 'selfie', 'podcast'",
                  "Carries the meaning of a sentence",
                  "Populates the rare-word long tail (hapax legomena)",
                ],
              },
              right: {
                heading: "Closed (function) class",
                items: [
                  "Determiners, pronouns, prepositions, conjunctions, auxiliaries",
                  "A few hundred members, effectively frozen",
                  "Carries the grammar of a sentence",
                  "Occupies the top of every frequency list ('the', 'of', 'and')",
                ],
              },
            },
            codeExample: {
              language: "python",
              caption: "heaps.py - vocabulary growth is sublinear",
              code: `import math

k, beta = 50, 0.5                 # typical English values

for n in [10_000, 100_000, 1_000_000]:
    v = k * n ** beta
    print(f"N={n:>9,}  V~{v:>10,.0f}")
# N=   10,000  V~     5,000
# N=  100,000  V~    15,811
# N=1,000,000  V~    50,000   <- matches the Brown Corpus scale

# ratio falls: 0.50 -> 0.16 -> 0.05 - new types keep arriving
# but slower than new tokens; doubling N never doubles V`,
            },
            bullets: [
              "Tokens are running instances; types are distinct words - 6 tokens vs 4 types in 'to be or not to be'.",
              "Heaps' law: V = k x N^beta, beta ~ 0.5; 1M tokens -> ~50,000 types (Brown scale).",
              "Type/token ratio falls with size: ~0.5 at 1,000 tokens, ~0.05 at 1M.",
              "Open classes grow without bound; closed classes freeze at a few hundred members.",
              "Function words dominate frequency lists; content words dominate the hapax tail.",
              "Sparsity consequence: zero-probability n-grams (Unit IV), OOV tokens (2.2), unknown-word taggers (3.5).",
            ],
            callout: {
              type: "exam",
              title: "Link Heaps to smoothing",
              body: "The synthesis mark: Heaps' law quantifies the long tail that Zipf describes, and that tail is why bigram language models need smoothing and tokenizers need subwords. One sentence of forward linkage turns a vocabulary fact into an argument about model design.",
            },
            examQuestions: [
              {
                q: "Distinguish tokens from types. State Heaps' law and verify it with numbers, contrast open and closed word classes with examples, and explain what vocabulary growth implies for language models and tokenizers.",
                marks: 14,
                outline: [
                  "Token = running instance; type = distinct word; 'to be or not to be' = 6 tokens, 4 types",
                  "Heaps: V = k x N^beta; k=50, beta=0.5 -> 1M tokens gives ~50,000 types (Brown)",
                  "Type/token ratio falls 0.5 -> 0.05 as N grows 1,000 -> 1M",
                  "Open class: nouns/verbs/adjectives - grows ('selfie'); closed class: determiners - frozen",
                  "Function words top the frequency list; content words fill the hapax tail",
                  "Implication 1: unseen n-grams -> smoothing (Unit IV)",
                  "Implication 2: guaranteed OOV -> subword segmentation (2.2)",
                ],
              },
              {
                q: "Why are the most frequent words in any corpus almost all closed-class?",
                marks: 7,
                outline: [
                  "Function words occur in nearly every sentence - grammatical necessity",
                  "Closed classes are small and fixed - each member's frequency is huge",
                  "Open classes are enormous - their frequencies spread over the long tail",
                  "Zipf's law expresses exactly this: top ranks are 'the', 'of', 'and'",
                  "Practical use: taggers exploit it - the most-frequent-tag baseline scores ~90% on frequent closed-class words",
                  "Corollary: open-class growth (Heaps) is content-word growth; frequency mass never moves off the closed classes",
                ],
              },
            ],
          },
          {
            number: "3.5",
            title: "POS tagging and tagsets",
            body: [
              "A part of speech (lexical category) classifies a word by its grammatical behaviour - what it combines with and what it does in a sentence. POS tagging assigns one tag to every token in context: the same string 'book' is VB in 'Book a flight' and NN in 'read a book'. The reference inventory is the Penn Treebank tagset - 45 tags encoding both category and inflection: NN (singular noun), NNS (plural), VB (verb base), VBZ (third-singular), VBD (past), VBG (gerund), JJ (adjective), RB (adverb), DT (determiner), IN (preposition), PRP (pronoun). Finer than the classic 8 classes because machines need the inflection: VBZ vs VBD drives agreement checks and tense.",
              "Why tagging matters downstream: pronunciation (REcord vs reCORD in speech synthesis), parsing (tags are a parser's input features), information extraction (NER candidates), and lemmatization (a lemmatizer needs the POS to choose between 'saw' -> see or saw). The task's difficulty is concentrated: roughly 85% of word tokens are unambiguous in isolation, but the ambiguous minority contains the most frequent words - 'that' can be DT (that book), C (I know that he left), IN (the fact that), WDT - and unknown words (proper names, typos) arrive with no tag information at all. Tagging is therefore context disambiguation plus unknown-word guessing, not dictionary lookup.",
              "The baseline that every tagger must beat: assign each word type its most frequent tag from the training corpus, unknown words guessed by suffix (ending -ing -> VBG, -ous -> JJ, capitalized at sentence start -> NNP). This most-frequent-tag baseline scores about 90% on English news - the unambiguous majority carries it - and the entire research programme of statistical tagging is the fight for the remaining points: HMM/Viterbi taggers reach about 95%, feature-based discriminative taggers (Brill, MaxEnt, CRF, bi-LSTM) about 96-97%. The residual errors are exactly the quadrants of the diagram below: rare ambiguous and unknown ambiguous tokens.",
              "Exam framing: define POS and the tagset with 8-10 named tags, give the two 'book' readings, state the 85/15 difficulty split, and present the baseline with its 90% figure and the ladder of improvements. Tag names must be exact - 'VBZ' written as 'verb' forfeits the tagset marks. Draw the difficulty matrix in words - seen/unambiguous is lookup, seen/ambiguous is context, unknown needs suffixes - and every tagging question maps onto it.",
            ],
            keyTerms: [
              { term: "POS (part of speech)", definition: "Lexical category defined by combinatory behaviour - noun, verb, determiner, and their inflectional variants." },
              { term: "Penn Treebank tagset", definition: "45 tags encoding category + inflection: NN, NNS, VB, VBZ, VBD, VBG, JJ, RB, DT, IN, PRP." },
              { term: "Most-frequent-tag baseline", definition: "Assign each type its commonest training tag; suffix-guess unknowns; ~90% on English news." },
              { term: "Ambiguity class", definition: "The set of possible tags for a word type - 'that': {DT, IN, C, WDT}." },
            ],
            diagram: {
              kind: "matrix",
              title: "Where tagging difficulty lives",
              caption: "The easy quadrants are covered by lookup; every real tagging error comes from the right-hand column.",
              axes: { x: "Seen in training -> Unknown / OOV", y: "Unambiguous -> Ambiguous" },
              quadrants: [
                { label: "Seen + unambiguous", note: "dictionary lookup wins - the easy 85%" },
                { label: "Unknown + unambiguous", note: "suffix/morphology guessing works ('-ing' -> VBG)" },
                { label: "Seen + ambiguous", note: "context decides - 'book' VB vs NN; the core task" },
                { label: "Unknown + ambiguous", note: "hardest - suffix guess + context together; most residual errors" },
              ],
            },
            table: {
              caption: "The Penn Treebank tags you must be able to write.",
              headers: ["Tag", "Meaning", "Example word", "In sentence"],
              rows: [
                ["NN", "singular noun", "flight", "Book a flight"],
                ["NNS", "plural noun", "flights", "all flights"],
                ["NNP", "proper noun", "Delhi", "flights to Delhi"],
                ["VB", "verb, base form", "book", "Book a flight (imperative)"],
                ["VBZ", "verb, 3rd singular", "books", "she books"],
                ["VBD", "verb, past", "booked", "he booked"],
                ["VBG", "verb, gerund", "booking", "booking online"],
                ["JJ", "adjective", "cheap", "a cheap flight"],
                ["RB", "adverb", "quickly", "book quickly"],
                ["DT", "determiner", "a, the", "the flight"],
                ["IN", "preposition", "to, from", "flight to Delhi"],
              ],
            },
            callout: {
              type: "tip",
              title: "Tag inflection, not just category",
              body: "The Penn tagset's value is that VBZ vs VBD vs VBG distinguishes tense and aspect that the classic 8 word classes collapse. When asked 'why not just 8 tags?', answer: parsers and lemmatizers need inflection - 'books' and 'booking' are both verbs but behave differently downstream.",
            },
            examQuestions: [
              {
                q: "What is POS tagging? Explain the Penn Treebank tagset with at least eight tags and examples, show how context disambiguates 'book', and describe the most-frequent-tag baseline with its accuracy.",
                marks: 14,
                outline: [
                  "POS = lexical category by combinatory behaviour; tagging assigns one tag per token in context",
                  "Penn tagset: NN, NNS, VB, VBZ, VBD, VBG, JJ, RB, DT, IN - category + inflection",
                  "'Book a flight' -> Book/VB (imperative); 'read a book' -> book/NN",
                  "~85% of tokens unambiguous - but the ambiguous minority holds frequent words",
                  "'that': DT vs C vs IN vs WDT - the classic ambiguity class",
                  "Baseline: most frequent training tag per type + suffix guessing -> ~90%",
                  "Ladder: HMM/Viterbi ~95%; MaxEnt/CRF/Brill ~96-97%",
                ],
              },
              {
                q: "Why does a lemmatizer and a speech synthesizer both need POS tags? Give one example each.",
                marks: 7,
                outline: [
                  "Lemmatizer: 'saw' -> see (VBD) or saw (NN) - POS picks the lemma",
                  "Synthesizer: 'record' stressed REcord (noun) vs reCORD (verb) - POS picks pronunciation",
                  "Both need disambiguation, not just category lookup",
                  "Tagging is context disambiguation - the surrounding tokens decide the reading",
                  "Grammar checkers need the same distinction: VBZ vs VBD drives agreement errors",
                  "Without tags: wrong lemma retrieved, wrong stress pronounced - both systems fail",
                ],
              },
            ],
          },
          {
            number: "3.6",
            title: "Rule-based and stochastic tagging",
            body: [
              "Two paradigms divide tagging. Rule-based tagging applies context rules: hand-written ('if previous tag is DT, tag as JJ/NN, never VB') or learned from data by Eric Brill's transformation-based tagger (1995), which starts from the most-frequent-tag baseline and iteratively learns error-correcting rules like 'change NN to VB when the previous tag is TO' - the rule that fixes 'to book' after the baseline misfires. Brill's loop is a cycle: initial pass, learn candidate transformation templates, apply the best-scoring one, re-score, repeat until no template improves accuracy. It reaches about 96-97% with a few hundred human-readable rules - interpretable where probabilistic taggers are opaque.",
              "Stochastic tagging estimates probabilities from an annotated corpus. The workhorse is the HMM tagger: a hidden Markov model over tag sequences with transition probabilities P(tag_i | tag_{i-1}) and emission probabilities P(word_i | tag_i), decoded by the Viterbi algorithm - dynamic programming that finds the single highest-probability tag path through the sentence. Worked intuition on 'Book a flight': the baseline tags 'Book' NN (it is more often a noun in training), but the path NN DT NN scores P(DT | NN) x P(flight | NN) while VB DT NN scores P(DT | VB) x ... - and P(DT | VB) (verbs start imperative NPs) outweighs the difference, so Viterbi flips 'Book' to VB. HMM taggers reach about 95%.",
              "The two paradigms trade different assets, and the exam contrast is standard. Rules encode linguistic insight, remain readable, need no probability machinery, but interact unpredictably when many apply and cannot weigh conflicting evidence. Probabilities weigh all evidence smoothly and improve with data but are opaque and data-hungry. Brill sits between: learned like statistics, expressed like rules. In production, discriminative sequence models (MaxEnt, section 3.7; CRF, section 4.6) superseded both by learning weighted features - but the examiners still ask for Brill's example rule and the Viterbi idea because they are the conceptual bridge from rules to models.",
              "Exam framing: present both paradigms, give Brill's 'TO -> VB' rule with the sentence it fixes, sketch Viterbi as best-path dynamic programming with the 'Book a flight' intuition, and close with the accuracy ladder and the interpretability trade-off. Name the modern endpoint too - MaxEnt and CRF taggers at 96-97% superseded both by learning weighted features - which turns this section into the historical bridge between rules and models.",
            ],
            keyTerms: [
              { term: "Transformation-based tagging (Brill)", definition: "Start from a baseline; learn error-correcting context rules iteratively - interpretable, ~96-97%." },
              { term: "HMM tagger", definition: "Hidden Markov model over tags with transition + emission probabilities, decoded by Viterbi; ~95%." },
              { term: "Viterbi algorithm", definition: "Dynamic programming for the single highest-probability tag path through a sentence." },
              { term: "Transition / emission probability", definition: "P(tag_i | tag_{i-1}) - what tags follow what; P(word | tag) - what words tags emit." },
            ],
            diagram: {
              kind: "cycle",
              title: "The Brill tagger loop",
              caption: "Learned like statistics, written like rules - each turn fixes the errors the last round left.",
              steps: [
                { label: "Initial pass", note: "most-frequent-tag for every word" },
                { label: "Propose templates", note: "candidate rules, e.g. NN -> VB after TO" },
                { label: "Apply the best", note: "the template with largest error reduction" },
                { label: "Re-score", note: "accuracy on the training corpus" },
                { label: "Repeat", note: "until no template improves" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "baseline.py - the most-frequent-tag tagger",
              code: `from nltk.corpus import brown
from collections import Counter, defaultdict
import nltk
nltk.download("brown", quiet=True)

best = defaultdict(str)
counts = defaultdict(Counter)
for sent in brown.tagged_sents(categories="news"):
    for word, tag in sent:
        counts[word.lower()][tag] += 1
best = {w: c.most_common(1)[0][0] for w, c in counts.items()}

def tag(word):
    return best.get(word.lower(), "NN")   # unknown -> suffix guess

print(tag("flight"), tag("book"), tag("the"))
# NN DT AT   (Brown's older tagset names)

# on PTB-style evaluation this baseline reaches ~90% -
# every fancier tagger is measured against it`,
            },
            bullets: [
              "Rule-based: hand-written or Brill-learned context rules - readable, no probabilities.",
              "Brill's canonical rule: NN -> VB when previous tag is TO - fixes 'to book'.",
              "Brill loop: initial pass -> propose templates -> apply best -> re-score -> repeat.",
              "HMM tagging: P(tag|prev tag) transitions + P(word|tag) emissions, decoded by Viterbi.",
              "Viterbi flips 'Book' to VB in 'Book a flight' because P(DT | VB) outweighs the noun prior.",
              "Accuracy ladder: baseline ~90% -> HMM ~95% -> Brill/MaxEnt/CRF ~96-97%.",
            ],
            callout: {
              type: "exam",
              title: "Viterbi in three sentences",
              body: "The examiner accepts this compressed version: Viterbi keeps, for each position, the best probability path ending in each tag; it extends every path one token at a time; backpointers recover the single best full path. Three sentences plus the 'Book a flight' flip is a complete answer.",
            },
            examQuestions: [
              {
                q: "Explain transformation-based (Brill) tagging with its learning loop and one example rule. Contrast it with stochastic HMM tagging and state the accuracy of each relative to the baseline.",
                marks: 14,
                outline: [
                  "Baseline: most-frequent-tag + suffix guesses - ~90%",
                  "Brill: start at baseline; learn transformation templates from errors",
                  "Canonical rule: NN -> VB when previous tag is TO - fixes 'to book'",
                  "Loop: apply best template, re-score, repeat until no improvement",
                  "HMM: transition P(tag|prev) + emission P(word|tag); Viterbi decodes best path",
                  "'Book a flight': Viterbi flips Book to VB via P(DT | VB) evidence",
                  "Contrast: rules readable, probabilities smooth; Brill ~96-97%, HMM ~95%",
                ],
              },
              {
                q: "Why does the most-frequent-tag baseline reach 90% and what kinds of errors remain?",
                marks: 7,
                outline: [
                  "~85% of tokens are unambiguous - lookup alone covers them",
                  "Frequent words carry their frequency statistics - the baseline exploits Zipf",
                  "Remaining errors: ambiguous frequent words ('that'), rare words, unknown words",
                  "Exactly the right-hand quadrants of the difficulty matrix (3.5)",
                  "Improvements must attack context and unknowns - Brill, HMM/Viterbi, MaxEnt",
                  "The ladder: baseline ~90% -> HMM ~95% -> Brill/MaxEnt/CRF ~96-97%",
                ],
              },
            ],
          },
          {
            number: "3.7",
            title: "Maximum entropy models for POS tagging",
            body: [
              "The maximum entropy (MaxEnt, log-linear) model scores each tag for a word given its context, then normalizes: P(t | c) = exp(sum_i lambda_i f_i(c, t)) / Z(c), where f_i are binary indicator features, lambda_i learned weights and Z(c) the normalizer. Softmax over the scores turns them into a probability distribution; the tagger picks argmax. 'Maximum entropy' names the training principle: among all distributions consistent with the observed data, choose the one that adds no further assumptions - the flattest, least-committed fit - which is equivalent to maximizing conditional likelihood of the training data.",
              "The power is the features: any evidence, freely overlapping, with no independence assumptions. Standard tagging features: word identity (lowercased), previous tag, previous two tags, previous and next word, suffixes up to 4 characters, prefix, capitalization, contains-hyphen, contains-digit. Worked scoring for 'Book' in 'Book that flight': features firing - word=book (+1.2 for NN prior, +0.9 for VB), prev_tag=START (+0.3 VB), next_word=that (+1.5 VB: imperative NPs follow), is_capitalized (+0.0 neutral). Scores: VB = 0.9 + 0.3 + 1.5 = 2.7; NN = 1.2 + 0.6 (word-ending prior) = 1.8. Softmax: P(VB) = e^2.7 / (e^2.7 + e^1.8) = e^0.9 / (1 + e^0.9) = 2.46 / 3.46 = 0.71 - VB wins, as the imperative reading requires.",
              "Contrast with the HMM, the exam's comparison point: the HMM generates (models P(words, tags) with independence assumptions - tags depend only on the previous tag, words only on their tag), so it cannot condition on overlapping evidence like 'next word is that' AND 'previous tag is START' simultaneously without double counting. MaxEnt is discriminative - it models only P(tag | context) and lets features overlap freely; the softmax normalization resolves conflicts. Regularization (a Gaussian prior on weights) prevents the feature explosion from overfitting. A MaxEnt tagger over the full sequence with Viterbi-style decoding reaches 96-97% - and the same log-linear machinery, applied to whole label sequences, is the CRF of section 4.6.",
              "Exam framing: write the model equation, list six features with the reason each helps, work the softmax for 'Book', and state the discriminative-vs-generative contrast with the CRF forward link. Then close with the accuracy figure - MaxEnt taggers reach 96-97% on English news - and the note that the same log-linear machinery over whole sequences is the CRF of section 4.6, which is why the two questions share feature lists.",
            ],
            keyTerms: [
              { term: "MaxEnt (log-linear) model", definition: "P(t|c) = exp(sum lambda_i f_i) / Z - weighted overlapping features normalized by softmax." },
              { term: "Feature", definition: "A binary indicator of context evidence - prev_tag=TO, suffix=ing, next_word=that." },
              { term: "Softmax normalization", definition: "Z(c) exponentiates all tag scores into a probability distribution that sums to 1." },
              { term: "Discriminative model", definition: "Models P(label | context) directly, allowing overlapping features - contrast with generative HMM." },
            ],
            diagram: {
              kind: "pipeline",
              title: "One MaxEnt tagging decision",
              caption: "Features vote with learned weights; softmax turns the votes into probabilities; argmax picks the tag.",
              stages: [
                { label: "Token + context", note: "'Book' in 'Book that flight'" },
                { label: "Extract features", note: "prev tag, next word, suffix, capitalization" },
                { label: "Weighted sum", note: "score(t) = sum lambda_i f_i" },
                { label: "Softmax", note: "P(t | context) over all tags" },
                { label: "Argmax / decode", note: "VB with P = 0.71" },
              ],
            },
            table: {
              caption: "Features and illustrative learned weights for tagging 'Book'.",
              headers: ["Feature f_i", "Fires when", "Weight", "Pushes toward"],
              rows: [
                ["word=book", "lowercased identity", "+1.2 (NN) / +0.9 (VB)", "both - the prior split"],
                ["prev_tag=START", "sentence-initial", "+0.3", "VB (imperatives start sentences)"],
                ["next_word=that/DT", "determiner follows", "+1.5", "VB - 'book that flight' pattern"],
                ["prev_tag=TO", "after infinitive 'to'", "+2.1", "VB - 'to book'"],
                ["suffix=ing", "ends in -ing", "+1.8", "VBG"],
                ["suffix=ous", "ends in -ous", "+2.2", "JJ"],
                ["is_capitalized", "capitalized mid-sentence", "+0.8", "NNP"],
              ],
            },
            callout: {
              type: "warning",
              title: "Do not call MaxEnt 'maximum entropy tagged'",
              body: "The name is the training principle, not the task: among all distributions fitting the data, pick the highest-entropy (least committal) one - which coincides with maximum conditional likelihood. Writing 'it maximizes entropy of the tag' is the classic error; write 'maximum entropy subject to feature constraints'.",
            },
            examQuestions: [
              {
                q: "Explain the maximum entropy model for POS tagging - the equation, the feature set, softmax normalization and training. Work the scoring for 'Book' in 'Book that flight' and contrast the approach with HMM tagging.",
                marks: 14,
                outline: [
                  "P(t | c) = exp(sum_i lambda_i f_i(c, t)) / Z(c)",
                  "Features: word identity, prev/prev2 tags, next word, suffixes, capitalization - overlapping allowed",
                  "Training: maximize conditional likelihood (= minimum-discrimination-information / max-entropy principle)",
                  "Worked: VB score 2.7 vs NN 1.8 -> P(VB) = e^0.9/(1+e^0.9) = 0.71 -> VB",
                  "Softmax normalizes all tag scores into one distribution per word",
                  "HMM is generative with independence assumptions - cannot overlap features safely",
                  "MaxEnt is discriminative; full-sequence version with sequence decoding = CRF (4.6)",
                ],
              },
              {
                q: "List six features useful for POS tagging and explain, with one example each, why each helps.",
                marks: 7,
                outline: [
                  "prev_tag=TO -> VB: 'to book' infinitive frame",
                  "next_word=DT -> VB: imperative 'book that flight'",
                  "suffix=ing -> VBG: morphological cue for unknown words",
                  "suffix=ous -> JJ: adjective-forming suffix",
                  "is_capitalized mid-sentence -> NNP: proper name cue",
                  "contains-digit -> CD: '1998', '42' are cardinals",
                ],
              },
            ],
          },
          {
            number: "3.8",
            title: "Multi-word expressions",
            body: [
              "A multi-word expression (MWE) is a string of two or more words that behaves as a single lexical unit - stored, translated and interpreted as one item rather than composed from its parts. 'Kick the bucket' (die) does not mean its words; 'New York' is one place; 'make sense' allows limited variation ('makes sense' but not '*make much sense'); 'strong tea' is compositional yet statistically preferred over 'powerful tea'. The continuum runs from pure idioms through semi-fixed expressions and compound nouns to institutionalized collocations - and the boundary cases are the exam's favourite discussion material.",
              "MWEs are the practical enemy of three modules. Tokenization: 'New York' is one entity but two tokens - NER must rejoin them (link to 1.6). Machine translation: 'kick the bucket' must map to the target idiom (Hindi 'dam todna'), never to the compositional translation 'balti ko lat marana' - word-by-word MT produces nonsense exactly where idioms live (link to 5.4). Parsing: compound nouns are recursively productive ('data science course timetable'), so chunkers and parsers need noun-compound rules. Add lemma lookup: a dictionary indexed only by single words misses every MWE sense.",
              "Extraction and representation: the statistical tool is pointwise mutual information (section 2.5) - PMI(kick, bucket) is high because the pair co-occurs far above chance, while PMI(the, bucket) is low despite 'the bucket' being frequent, which is exactly why frequency alone fails and PMI (or log-likelihood) is used. Worked numbers from section 2.5's method: PMI(strong, tea) = 3.32 vs PMI(powerful, tea) = 1.32. Representation options: enumerate MWEs in the lexicon as multi-token entries with their own syntactic frame; allow limited variation slots for semi-fixed expressions; or - the modern answer - let sequence models and pretrained embeddings absorb them (contextual embeddings make 'kick the bucket' and 'kick the ball' separable automatically).",
              "Exam framing: define MWE, give the taxonomy with one example per class, name the three modules MWEs break (tokenization, MT, parsing) with one failure each, and give the PMI extraction method with numbers. The MT idiom example is the most-quoted point - include it. Finish with representation options: enumerate MWEs in the lexicon, allow variation slots for semi-fixed expressions, or let contextual embeddings separate 'kick the bucket' from 'kick the ball' automatically - the modern answer that closes the loop with section 5.6.",
            ],
            keyTerms: [
              { term: "Multi-word expression (MWE)", definition: "A multi-word string functioning as a single lexical unit - idiom, compound, or collocation." },
              { term: "Non-compositionality", definition: "Meaning not derivable from the parts - 'kick the bucket' = die." },
              { term: "Semi-fixed expression", definition: "MWE allowing limited variation - 'make sense' inflects but resists insertion." },
              { term: "PMI for MWE extraction", definition: "log2 p(x,y)/(p(x)p(y)) - high PMI flags co-preferred pairs; frequency alone fails." },
            ],
            diagram: {
              kind: "fork",
              title: "Is this string one word or many?",
              caption: "The MWE decision every tokenizer, translator and parser must make.",
              start: "Two or more adjacent words",
              branches: [
                { label: "Pure idiom - 'kick the bucket'", outcome: "non-compositional - store and translate as one unit", good: true },
                { label: "Semi-fixed - 'make sense'", outcome: "limited inflection allowed, no insertion - one lexical entry", good: true },
                { label: "Compound noun - 'data science course'", outcome: "recursive productivity - chunking/parsing must group it", good: true },
                { label: "Free combination - 'blue kettle'", outcome: "fully compositional - not an MWE", good: false },
              ],
            },
            codeExample: {
              language: "python",
              caption: "pmi.py - finding collocations in counts",
              code: `import math
N = 1_000_000                                  # corpus tokens

c_strong, c_tea, c_strong_tea = 5000, 2000, 100
c_powerful, c_powerful_tea = 2000, 10

def pmi(cx, cy, cxy):
    return math.log2((cxy * N) / (cx * cy))

print(round(pmi(c_strong, c_tea, c_strong_tea), 2))     # 3.32
print(round(pmi(c_powerful, c_tea, c_powerful_tea), 2)) # 1.32

# 'strong tea' co-occurs far above chance -> a collocation
# 'powerful tea' is near chance -> not preferred
# frequency alone would miss both: 'the tea' is far more frequent`,
            },
            bullets: [
              "MWE: multi-word string acting as one lexical unit - idioms, semi-fixed, compounds, collocations.",
              "Non-compositionality test: 'kick the bucket' = die - meaning not from parts.",
              "Breaks tokenization ('New York' = one entity, two tokens), MT (idioms), parsing (compound nouns).",
              "MT failure mode: literal translation of idioms produces nonsense in the target language.",
              "Extraction by PMI: log2 p(x,y)/(p(x)p(y)); worked PMI(strong, tea) = 3.32 vs PMI(powerful, tea) = 1.32.",
              "Frequency alone fails - 'the tea' outranks every true collocation in raw counts.",
            ],
            callout: {
              type: "tip",
              title: "The idiom example decides the marks",
              body: "When the question says 'challenges posed by MWEs', lead with the MT example: 'kick the bucket' must become the Hindi idiom, not 'balti ko lat marana'. It is concrete, cross-unit (links to 5.4) and exactly the kind of illustration the rubric rewards.",
            },
            examQuestions: [
              {
                q: "What are multi-word expressions? Classify them with one example per class, explain the challenges they pose for tokenization, machine translation and parsing, and describe PMI-based extraction with a worked calculation.",
                marks: 14,
                outline: [
                  "Definition: multi-word string behaving as a single lexical unit",
                  "Taxonomy: pure idiom ('kick the bucket'), semi-fixed ('make sense'), compound noun ('data science course'), collocation ('strong tea')",
                  "Tokenization: 'New York' one entity, two tokens - NER must rejoin",
                  "MT: idioms need target idioms - literal 'kick the bucket' translation is nonsense",
                  "Parsing: compound nouns recursive - chunkers need noun-compound rules",
                  "PMI extraction: log2 p(x,y)/(p(x)p(y)); PMI(strong, tea) = 3.32 vs PMI(powerful, tea) = 1.32",
                  "Frequency alone fails; rare-pair bias needs smoothing/filtering",
                ],
              },
              {
                q: "Why does frequency alone fail at collocation extraction while PMI succeeds?",
                marks: 7,
                outline: [
                  "High-frequency function words dominate raw pair counts - 'of the' outranks every idiom",
                  "PMI normalizes by independence expectation p(x) p(y)",
                  "PMI > 0: observed co-occurrence above chance - a collocation signal",
                  "Worked: PMI(strong, tea) = log2(10) = 3.32; PMI(powerful, tea) = log2(2.5) = 1.32",
                  "Caveat: raw PMI over-favours rare pairs - filter by minimum frequency",
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
      title: "Language Models, Parsing and Semantics",
      summary:
        "Unit IV is the statistical core of the subject: the role of language models and n-gram models with parameter estimation, smoothing and perplexity, phrases clauses and sentence structure, shallow parsing and chunking, CRF-based chunking, lexical semantics with WordNet, word sense disambiguation, thematic roles and semantic role labelling with CRFs.",
      chapter: {
        number: "04",
        title: "From Probability over Words to Meaning",
        intro:
          "Unit IV covers the role of language models, simple n-gram models with the Markov assumption, parameter estimation and smoothing, perplexity-based evaluation, phrases clauses and constituency, shallow parsing and chunking with IOB tags, shallow parsing with conditional random fields, lexical semantics relations, WordNet, word sense disambiguation, thematic roles and semantic role labelling with CRFs.",
        inOneBreath:
          "A language model scores P(sentence) via the chain rule, cut to n-gram size by the Markov assumption; MLE counts are sparse, so smoothing (add-one, add-k, Kneser-Ney) redistributes mass and perplexity = 2^cross-entropy judges the result; constituency grammar builds parse trees while chunking stays shallow with IOB tags; CRFs beat HMMs by conditioning on overlapping features; WordNet organizes synsets into hypernym hierarchies, WSD picks senses, and SRL labels who did what to whom.",
        sections: [
          {
            number: "4.1",
            title: "The role of language models and simple n-gram models",
            body: [
              "A language model (LM) assigns a probability to a word sequence and predicts the next word from history - the component that scores 'which sentence is more likely'. Roles across the syllabus and the industry: speech recognition picks the transcription the acoustic signal plus the LM jointly prefer; spelling correction ranks candidates by P(context | word) (section 1.5's noisy channel); machine translation re-ranks outputs by target-language fluency (section 5.4); predictive keyboards and autocomplete are LMs in the small; and large language models are LMs in the large. The formal tool is the chain rule: P(w1...wn) = P(w1) P(w2|w1) P(w3|w1 w2) ... P(wn|w1...w_{n-1}) - exact, but unestimable, because each conditioning history occurs once or never in any corpus.",
              "The n-gram approximation cuts history to the last n-1 words: unigram P(w), bigram P(w_i | w_{i-1}), trigram P(w_i | w_{i-2} w_{i-1}) - the Markov assumption that the distant past adds nothing. Worked with the classic three-sentence corpus: <s> I am Sam </s> / <s> Sam I am </s> / <s> I do not like green eggs and ham </s>. Bigram counts give P(I | <s>) = 2/3, P(am | I) = 2/3, P(Sam | am) = 1/2, P(</s> | Sam) = 1/2. The probability of '<s> I am Sam </s>' = 2/3 x 2/3 x 1/2 x 1/2 = 1/9 = 0.111. Larger n captures more structure but starves the counts - sparsity, the subject of the next section.",
              "The role question deserves precision, because it is the syllabus's opening phrase: the LM does not understand - it ranks. In every application the LM sits next to another component (acoustic model, edit-distance candidates, translation model) and arbitrates between them: candidates that are contextually probable survive. That arbitration role is why perplexity (4.3) is only a proxy: a better-scoring LM usually improves the application, but the proof is always the application's own metric - word error rate, correction accuracy, BLEU.",
              "Exam framing: define LM, write the chain rule, state the Markov assumption with the n-gram family, compute one sentence probability from a bigram table, and list four applications with the component the LM arbitrates. The 1/9 computation is the numerical anchor of the whole unit - show every factor. Then one sentence of synthesis: the LM never understands, it ranks - and the same ranking role reappears in spell checking (1.5), SMT decoding (5.4) and every candidate-scoring pipeline in between.",
            ],
            keyTerms: [
              { term: "Language model (LM)", definition: "Assigns probabilities to sequences and predicts the next word - the ranking component of every NLP application." },
              { term: "Chain rule", definition: "P(w1...wn) = product of P(w_i | w_1...w_{i-1}) - exact but unestimable for full histories." },
              { term: "Markov assumption", definition: "Condition only on the last n-1 words - bigram, trigram; the approximation that makes estimation possible." },
              { term: "Noisy channel", definition: "P(text | observed) proportional to P(observed | text) P(text) - the LM supplies the prior P(text)." },
            ],
            diagram: {
              kind: "flow",
              title: "From the chain rule to an n-gram model",
              caption: "Exact factorization, then the Markov cut, then counts - the three moves that build a statistical LM.",
              steps: [
                { label: "Chain rule", note: "P(w1..wn) = product of conditional factors" },
                { label: "Markov cut", note: "condition on last n-1 words only" },
                { label: "Bigram / trigram", note: "P(w_i | w_{i-1}), P(w_i | w_{i-2} w_{i-1})" },
                { label: "Estimate from counts", note: "MLE over a corpus (4.2)" },
                { label: "Score sentences", note: "P(sentence) = product of n-gram probabilities" },
              ],
            },
            table: {
              caption: "Bigram counts and probabilities from the three-sentence toy corpus.",
              headers: ["Bigram", "Count", "Probability", "Reading"],
              rows: [
                ["<s> -> I", "2", "2/3 = 0.667", "two of three sentences start with I"],
                ["<s> -> Sam", "1", "1/3 = 0.333", "one starts with Sam"],
                ["I -> am", "2", "2/3 = 0.667", "'I am' twice, 'I do' once"],
                ["am -> Sam", "1", "1/2 = 0.5", "'am' ends with Sam or </s>"],
                ["Sam -> </s>", "1", "1/2 = 0.5", "'Sam' ends one of its two sentences"],
                ["I -> do", "1", "1/3 = 0.333", "the 'green eggs' sentence"],
              ],
            },
            callout: {
              type: "exam",
              title: "Show every factor of the product",
              body: "The sentence-probability numerical is marked factor by factor: P(<s>I) x P(am|I) x P(Sam|am) x P(</s>|Sam) = 2/3 x 2/3 x 1/2 x 1/2 = 1/9. Skipping a factor or mixing up the conditioning direction ('P(I|am)' instead of 'P(am|I)') loses the arithmetic marks - direction is the whole point of the Markov assumption.",
            },
            examQuestions: [
              {
                q: "What is a language model and what role does it play in NLP systems? Derive the chain rule, explain the n-gram (Markov) approximation, and compute the probability of '<s> I am Sam </s>' under a bigram model estimated from the toy corpus '<s> I am Sam </s> / <s> Sam I am </s> / <s> I do not like green eggs and ham </s>'.",
                marks: 14,
                outline: [
                  "LM: assigns P(sequence), predicts next word - arbitrates candidates in applications",
                  "Roles: speech recognition, spell checking, MT re-ranking, autocomplete",
                  "Chain rule: P(w1..wn) = product P(w_i | history) - exact, unestimable",
                  "Markov assumption: condition on last n-1 words - unigram/bigram/trigram",
                  "Counts: P(I|<s>) = 2/3, P(am|I) = 2/3, P(Sam|am) = 1/2, P(</s>|Sam) = 1/2",
                  "P(sentence) = 2/3 x 2/3 x 1/2 x 1/2 = 1/9 = 0.111",
                  "Larger n captures more structure but starves counts - sparsity (4.2)",
                ],
              },
              {
                q: "Why is the full chain rule impractical and what does the n-gram approximation give up?",
                marks: 7,
                outline: [
                  "Full histories occur once or never - every long conditioning context has count 0 or 1",
                  "N-gram cut makes contexts repeatable - counts become meaningful",
                  "Given up: long-distance dependencies - 'the keys to the cabinet ... are/is'",
                  "Agreement crosses five words that a bigram cannot see",
                  "Trigram helps but the trade-off is always context length vs count reliability",
                ],
              },
            ],
          },
          {
            number: "4.2",
            title: "Estimating parameters and smoothing",
            body: [
              "Parameter estimation fills the n-gram tables from a corpus. Maximum likelihood estimation (MLE) is the direct recipe: P(w | u) = count(u, w) / count(u) - the fraction of times context u was followed by w. MLE is unbiased and, on abundant data, excellent; on real vocabularies it is a catastrophe, because Zipf's long tail (2.5) guarantees millions of zero-count bigrams, each assigned probability 0 - so any sentence containing one unseen bigram gets total probability 0, and the model can rank nothing. Sparsity is not an edge case; it is the normal condition of language data.",
              "Smoothing redistributes probability mass from seen events to unseen ones. Add-one (Laplace): P(w | u) = (count(u, w) + 1) / (count(u) + V) with V the vocabulary size. Worked on the toy corpus (V = 12 word types, count(I) = 3): P(am | I) falls from MLE 2/3 = 0.667 to (2+1)/(3+12) = 0.2 - mass moves to the 9 unseen continuations of 'I'. Add-k with k < 1 (0.01-0.1) dampens the over-penalization of frequent events. Better families: Good-Turing reallocates mass by count-of-counts (things seen N_c+1 times are predicted from things seen N_c times); backoff (Katz) and interpolation (Jelinek-Mercer) fall back to (n-1)-gram estimates when the n-gram is unreliable or absent.",
              "The modern champion is Kneser-Ney, and its one idea is examinable: back off not by frequency of the lower-order n-gram but by continuation count - the number of distinct contexts a word appeared in. 'Francisco' is frequent only after 'San', so P_MLE(Francisco) is high, but its continuation count is low (one distinct preceding context) - and Kneser-Ney, which scores 'how many different contexts does this word follow?', correctly discounts it. Interpolated Kneser-Ney with per-context discount weights is the standard strong baseline in every LM evaluation, and stating the Francisco example earns the intuition mark.",
              "Exam framing: write MLE and add-one with formulas, work the 0.667-to-0.2 number, name the better families in one line each, and give the Francisco continuation-count example. The question 'why is add-one bad?' has a fixed answer: it steals too much mass from frequent events, raising perplexity on exactly the events that matter most. Answer the follow-up the same way every time: add-k and Good-Turing discount more gently, and Kneser-Ney adds the continuation-count insight, so the ladder ends where modern LMs begin.",
            ],
            keyTerms: [
              { term: "MLE estimation", definition: "P(w|u) = count(u,w)/count(u) - unbiased, zero for all unseen bigrams." },
              { term: "Add-one (Laplace) smoothing", definition: "(count + 1)/(count(u) + V) - reserves mass for unseen, over-penalizes frequent events." },
              { term: "Backoff / interpolation", definition: "Fall back to lower-order n-grams (Katz; Jelinek-Mercer) when higher-order counts are absent or unreliable." },
              { term: "Kneser-Ney", definition: "Discounting plus continuation counts - scores words by distinct preceding contexts, not raw frequency." },
            ],
            diagram: {
              kind: "compare",
              title: "MLE vs add-one smoothing",
              caption: "Zero for the unseen is fatal; stealing from the seen is wasteful - smoothing is the art of the compromise.",
              left: {
                heading: "MLE (no smoothing)",
                items: [
                  "P(am | I) = 2/3 = 0.667 - sharp on seen data",
                  "Every unseen bigram gets probability 0",
                  "One zero kills the whole sentence probability",
                  "Unusable for ranking open-ended text",
                ],
              },
              right: {
                heading: "Add-one (Laplace)",
                items: [
                  "P(am | I) = (2+1)/(3+12) = 0.2 - heavy discount",
                  "All V continuations share the reserved mass",
                  "No zeros - every sentence scorable",
                  "Perplexity worsens on frequent events - add-k and better methods follow",
                ],
              },
            },
            codeExample: {
              language: "python",
              caption: "smooth.py - MLE vs add-one on the toy corpus",
              code: `V = 12                      # word types incl. <s>, </s>
count_I, count_I_am = 3, 2  # 'I' occurs 3x, 'I am' 2x

mle = count_I_am / count_I
laplace = (count_I_am + 1) / (count_I + V)

print(round(mle, 3))        # 0.667  <- sharp, but 9 continuations get 0
print(round(laplace, 3))    # 0.2    <- no zeros, but frequent events discounted

# add-k with k = 0.5 as a middle ground:
k = 0.5
print(round((count_I_am + k) / (count_I + k * V), 3))   # 0.5
# production LMs use Kneser-Ney: discounting + continuation counts`,
            },
            bullets: [
              "MLE: P(w|u) = count(u,w)/count(u); unbiased, but unseen bigrams get probability 0.",
              "One zero-count bigram makes the whole sentence probability 0 - sparsity is structural (Zipf).",
              "Add-one: (c+1)/(count(u)+V); worked: P(am|I) 0.667 -> 0.2 with V = 12.",
              "Add-k (k < 1) softens the discount; Good-Turing reallocates by count-of-counts.",
              "Backoff/interpolation fall to lower orders when higher-order evidence is weak.",
              "Kneser-Ney: continuation counts - 'Francisco' discounted because it follows only 'San'.",
            ],
            callout: {
              type: "tip",
              title: "The Francisco example is the KN answer",
              body: "When asked about Kneser-Ney, do not only write the formula - say why continuation counts beat raw frequency: 'Francisco' is frequent but contextually poor, following essentially one word. The word-level intuition carries more marks than the discount algebra.",
            },
            examQuestions: [
              {
                q: "Explain maximum likelihood estimation for n-gram parameters and its sparsity problem. Derive add-one smoothing, work P(am | I) under MLE and Laplace for the toy corpus, and describe backoff, interpolation and Kneser-Ney as improvements.",
                marks: 14,
                outline: [
                  "MLE: P(w|u) = count(u,w)/count(u) - the direct estimate",
                  "Sparsity: Zipf's tail guarantees zero-count bigrams -> sentence probability 0",
                  "Laplace: P(w|u) = (c+1)/(count(u)+V)",
                  "Worked: P(am|I): 2/3 = 0.667 under MLE; (2+1)/(3+12) = 0.2 under add-one",
                  "Add-one over-penalizes frequent events; add-k (k < 1) dampens",
                  "Good-Turing reallocates by count-of-counts; backoff/interpolation use lower orders",
                  "Kneser-Ney: continuation counts - 'Francisco' frequent only after 'San'",
                ],
              },
              {
                q: "Why does add-one smoothing raise perplexity even though it removes zeros?",
                marks: 7,
                outline: [
                  "Add-one moves mass uniformly to all V continuations",
                  "Frequent, well-estimated events lose proportionally the most probability",
                  "Perplexity is dominated by the likelihood of frequent test events",
                  "Net: zeros removed but seen-event scores degraded - PP rises",
                  "Fixes: add-k, Good-Turing, Kneser-Ney discount more gently",
                ],
              },
            ],
          },
          {
            number: "4.3",
            title: "Evaluating language models - perplexity",
            body: [
              "Perplexity (PP) is the standard intrinsic metric of a language model: the inverse probability of a test set, normalized per word. Formally PP(W) = P(w1...wN)^(-1/N) - the geometric mean of 1/P per word - equivalently 2 raised to the cross-entropy in bits per word. Its intuition is the weighted average branching factor: how many words the model effectively thinks could come next at each point. A model with PP 50 is 'as confused' as choosing uniformly among 50 words; lower perplexity means the model concentrates probability on what actually occurs.",
              "Worked end to end with the toy corpus: the test sentence '<s> I am Sam </s>' has 4 tokens and probability 1/9 (section 4.1). PP = (1/9)^(-1/4) = 9^(1/4) = 1.73. On real corpora the numbers are bigger and the trend is the exam point: on a news test set, a unigram LM scores PP in the hundreds (about 962), a smoothed bigram about 170, a smoothed trigram about 109 - each added order of Markov context roughly halves the branching factor. The Shannon game makes it tangible: with PP 109 the model narrows next-word choice to about 109 plausible candidates where a unigram leaves 962.",
              "Perplexity's fine print decides the marks. It is only comparable across models on the same test set with the same tokenization and vocabulary - changing V changes the metric, not the model. It is an intrinsic proxy: an LM can lower PP and still lose in the application, because applications rank candidates against other components - hence extrinsic evaluation (word error rate for speech, BLEU for MT, correction accuracy for spell checking) is the final arbiter. And PP is sensitive to smoothing: an unsmoothed model that meets one zero-count bigram has infinite perplexity - the practical proof of section 4.2's argument.",
              "Exam framing: define PP both ways (inverse probability normalized; 2^cross-entropy), work the 9^(1/4) = 1.73 example, give the unigram/bigram/trigram trend with numbers, and close with the comparability and proxy caveats. The caveats are where the 7-mark follow-ups live. Add the Shannon-game intuition in one line - with PP 109 the model narrows next-word choice to about 109 plausible candidates - and the answer has both the formula and the feel.",
            ],
            keyTerms: [
              { term: "Perplexity", definition: "P(W)^(-1/N) - inverse probability of the test set per word; the weighted average branching factor." },
              { term: "Cross-entropy", definition: "Average negative log2 probability per word; PP = 2^H - the two forms are the same metric." },
              { term: "Intrinsic vs extrinsic evaluation", definition: "PP on a test set vs the application's own metric (WER, BLEU, correction accuracy)." },
              { term: "Branching factor", definition: "How many equally likely next words the model behaves as if choosing among." },
            ],
            diagram: {
              kind: "flow",
              title: "Computing perplexity on a test set",
              caption: "Probability, then normalize by length, then exponentiate - and compare only under identical conditions.",
              steps: [
                { label: "Test set", note: "held-out text, same tokenization as training" },
                { label: "Model probabilities", note: "product of n-gram probabilities" },
                { label: "Average log probability", note: "cross-entropy H bits/word" },
                { label: "PP = 2^H", note: "branching factor" },
                { label: "Compare models", note: "lower PP wins - same test set, same vocab" },
              ],
            },
            table: {
              caption: "Typical perplexity trend on a news test set (smoothed models).",
              headers: ["Model", "Context used", "Perplexity", "Comment"],
              rows: [
                ["Unigram", "none", "~962", "word frequencies only"],
                ["Bigram", "previous word", "~170", "each extra order ~ halves PP"],
                ["Trigram", "previous two words", "~109", "the classic news-text result"],
                ["Unsmoothed any-n", "counts only", "infinite", "one zero-count bigram -> PP undefined"],
              ],
            },
            callout: {
              type: "warning",
              title: "PP is a proxy, not a verdict",
              body: "Write the caveat explicitly: perplexity improves only when models are compared on the same test set, tokenization and vocabulary; and a lower-PP model can still lose in speech or MT because the application arbitrates against other components. Extrinsic metrics are the final word - saying so is the difference between restating the formula and understanding it.",
            },
            examQuestions: [
              {
                q: "Define perplexity in both its forms. Compute the perplexity of '<s> I am Sam </s>' (probability 1/9, 4 tokens) under the toy bigram model, give the typical unigram/bigram/trigram trend with numbers, and state the two precautions that govern its use.",
                marks: 14,
                outline: [
                  "PP(W) = P(w1..wN)^(-1/N); equivalently 2^cross-entropy bits/word",
                  "Intuition: weighted average branching factor - lower = less confused",
                  "Worked: (1/9)^(-1/4) = 9^(1/4) = 1.73 on the toy sentence",
                  "Trend: unigram ~962 -> bigram ~170 -> trigram ~109 on news",
                  "Each added Markov order roughly halves the branching factor",
                  "Precaution 1: comparable only on same test set, tokenization, vocabulary",
                  "Precaution 2: intrinsic proxy - extrinsic metrics (WER, BLEU) arbitrate applications",
                ],
              },
              {
                q: "Why does an unsmoothed language model have infinite perplexity on any realistic test set?",
                marks: 7,
                outline: [
                  "Test text almost surely contains a bigram unseen in training (Zipf's tail)",
                  "Its probability is 0 under MLE - the sentence probability is 0",
                  "PP = P^(-1/N) is then undefined/infinite",
                  "Smoothing guarantees nonzero probabilities - PP becomes computable (4.2)",
                  "This is the practical proof that sparsity, not noise, is the core LM problem",
                  "Any claimed 'exact' unsmoothed evaluation must restrict the test set to seen bigrams only",
                ],
              },
            ],
          },
          {
            number: "4.4",
            title: "Phrases, clauses and sentence structure",
            body: [
              "Syntax describes sentence structure through constituents - groups of words that behave as single units. The tests are operational and examinable: substitution (replace 'the old man' with 'he' - grammatical, so it is a constituent), movement ('the old man was seen by us' - fronted as one block), and coordination ('the old man and the young woman' - coordinated as one category). Constituents form phrases: noun phrase (NP: 'the old man'), verb phrase (VP: 'saw a dog'), prepositional phrase (PP: 'with a telescope'), each headed by its lexical category. A clause is a subject-predicate unit - main clauses stand alone, subordinate clauses embed ('I know [that he left]').",
              "The formal device is the context-free grammar (CFG): rewrite rules generating constituents from constituents. S -> NP VP; NP -> (Det) (Adj)* N; VP -> V (NP) (PP)*; PP -> P NP. Worked parse of 'The old man saw a dog': S expands to NP VP; NP to Det Adj N ('the old man'); VP to V NP ('saw a dog'); inner NP to Det N ('a dog'). The tree has four layers - S, then NP + VP, then Det Adj N V Det N, then the words. Ambiguity reappears (1.3): 'saw the man with the telescope' has two legal trees, VP-attachment (instrument) and NP-attachment (possession) - a CFG generates both, and probability (or a treebank) must choose.",
              "Why the syllabus moves from full parsing to shallow parsing next: complete parse trees are expensive and brittle. Parsing with a CFG is polynomial in practice (CKY O(n^3 |G|)) but the real cost is ambiguity - a 20-word technical sentence can carry thousands of parses - and errors in deep trees propagate to every downstream consumer. Chunking (next section) keeps only the flat, non-recursive layer - NPs, VPs, PPs as flat groups - which is enough for information extraction, question answering and term mining, and far more robust. Full parsing remains valuable where recursion matters (grammar checkers, deep semantics); the syllabus's emphasis on chunking is a statement about where production NLP spends its compute.",
              "Exam framing: define constituent with two tests, write five CFG rules, draw the four-layer tree for 'The old man saw a dog', and explain the two-tree PP ambiguity plus the motivation for shallow parsing. Drawing the tree is the numerical anchor of this section - reproduce it. Then one sentence of motivation for the next section: full trees are expensive and ambiguity-prone, so production systems keep the flat chunk layer - which is exactly where the syllabus goes next.",
            ],
            keyTerms: [
              { term: "Constituent", definition: "A word group behaving as a unit - provable by substitution, movement, coordination tests." },
              { term: "Phrase", definition: "A constituent headed by one lexical category: NP, VP, PP, AdjP." },
              { term: "Clause", definition: "A subject-predicate unit; main clauses stand alone, subordinate clauses embed." },
              { term: "Context-free grammar (CFG)", definition: "Rewrite rules (S -> NP VP) generating constituency trees; the formal base of parsing." },
            ],
            diagram: {
              kind: "layers",
              title: "The constituency of 'The old man saw a dog'",
              caption: "A parse tree read as layers - each level is a constituent grouping of the level below.",
              layers: [
                { label: "S", note: "the whole sentence" },
                { label: "NP  +  VP", note: "subject + predicate" },
                { label: "Det Adj N  +  V  +  Det N", note: "phrase-internal structure" },
                { label: "the  old  man  saw  a  dog", note: "the words themselves" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "parse.py - a CFG parse in NLTK",
              code: `import nltk

grammar = nltk.CFG.fromstring("""
    S  -> NP VP
    NP -> Det Adj N | Det N
    VP -> V NP
    Det -> 'the' | 'a'
    Adj -> 'old'
    N   -> 'man' | 'dog'
    V   -> 'saw'
""")

parser = nltk.ChartParser(grammar)
sent = "the old man saw a dog".split()
for tree in parser.parse(sent):
    print(tree)
# (S
#   (NP (Det the) (Adj old) (N man))
#   (VP (V saw) (NP (Det a) (N dog))))`,
            },
            bullets: [
              "Constituent tests: substitution ('the old man' -> 'he'), movement, coordination.",
              "Phrases are headed constituents: NP, VP, PP; clauses are subject-predicate units.",
              "CFG rules: S -> NP VP; NP -> (Det) (Adj)* N; VP -> V (NP) (PP)*; PP -> P NP.",
              "'The old man saw a dog' parses as S(NP(Det Adj N), VP(V NP(Det N))).",
              "PP attachment ambiguity: 'saw the man with the telescope' has two legal trees.",
              "Full parsing is ambiguity-expensive; chunking keeps the flat layer for IE and QA.",
            ],
            callout: {
              type: "exam",
              title: "Prove the constituent, then draw",
              body: "The rubric usually reads: one constituent test named and applied (a substitution example suffices), the CFG rules written, the tree drawn. Do all three for the same sentence - 'the old man' substituted by 'he' plus the layered tree - and the marks assemble themselves.",
            },
            examQuestions: [
              {
                q: "Define phrase, clause and constituency with the tests used to identify constituents. Write CFG rules for a small English fragment, draw the parse tree of 'The old man saw a dog', and explain the PP-attachment ambiguity of 'I saw the man with the telescope'.",
                marks: 14,
                outline: [
                  "Constituent: behaves as one unit; tests = substitution, movement, coordination",
                  "'the old man' -> 'he' grammatical => NP constituent",
                  "Phrases: NP, VP, PP headed by lexical category; clauses: main vs subordinate",
                  "Rules: S -> NP VP; NP -> (Det)(Adj)* N; VP -> V (NP)(PP)*; PP -> P NP",
                  "Tree: S(NP(Det Adj N), VP(V NP(Det N))) - four layers",
                  "Telescope sentence: VP-attachment (instrument) vs NP-attachment (possession)",
                  "Both trees legal - probability/treebank or context chooses",
                ],
              },
              {
                q: "Why does the syllabus prefer shallow parsing to full parsing for applications like information extraction?",
                marks: 7,
                outline: [
                  "Full trees are deep and recursive - expensive and brittle",
                  "Ambiguity explodes: thousands of parses for long technical sentences",
                  "IE and QA need only flat NPs/VPs - who, what, where",
                  "Chunking is robust to partial errors and cheap (next section)",
                  "Full parsing retained where recursion matters - grammar checking",
                ],
              },
            ],
          },
          {
            number: "4.5",
            title: "Shallow parsing and chunking",
            body: [
              "Shallow parsing (chunking) identifies flat, non-recursive, non-overlapping phrase groups - noun chunks, verb chunks, prepositional chunks - without building a full tree. A chunk is a contiguous token span; internal structure ('the old man' is not split into Det Adj N) is deliberately ignored. The standard representation is IOB tagging: B-NP marks the first token of a noun chunk, I-NP continues it, O marks outside any chunk - a sequence-labelling problem, same shape as POS tagging and NER, which is why the same models (rules, HMMs, CRFs) run all three.",
              "Worked IOB trace for 'The little yellow dog barked': the/DT B-NP, little/JJ I-NP, yellow/JJ I-NP, dog/NN I-NP, barked/VBD B-VP - two chunks, one sentence, no tree. The rule-based method compiles chunk grammar as regular expressions over POS tags (NLTK's RegexpParser): NP: <DT|JJ|NN.*>+ ('a determiner/adjective/noun sequence'); VP: <V.*> (<NP>$)? - and the evaluation standard is the CoNLL-2000 shared task, scored by chunk-level precision/recall/F1 (same strict span matching as section 1.6's NER scoring).",
              "The statistical upgrade is the machine-learned chunker - perceptron, MaxEnt, and above all CRF (next section) - trained on IOB-annotated corpora; state-of-the-art NP chunking reaches F1 around 94-95 on CoNLL-2000. The pipeline's weak link is upstream: chunkers consume POS tags, so a tagging error becomes a chunking error (error propagation again). Applications are the payoff: NP extraction feeds information extraction's entity candidates (1.6), term mining for domain glossaries, query analysis for QA (5.5), and candidate argument spans for semantic role labelling (4.8). Chunking is the syllabus's quiet bridge from syntax to semantics.",
              "Exam framing: define chunking vs full parsing, give the IOB representation, trace one sentence, write one chunk-grammar rule, and name the applications with the F1 figure. The IOB trace is this section's arithmetic - reproduce the five tokens exactly. Name the standard too: CoNLL-2000, scored by chunk-level precision/recall/F1 with strict span matching, the same convention as NER scoring in section 1.6.",
            ],
            keyTerms: [
              { term: "Chunking (shallow parsing)", definition: "Identifying flat non-recursive phrase groups - NPs, VPs, PPs - without a full parse tree." },
              { term: "IOB tagging", definition: "B- starts a chunk, I- continues it, O is outside; chunks become a sequence-labelling problem." },
              { term: "Chunk grammar", definition: "Regular expressions over POS tags (NP: <DT|JJ|NN.*>+) compiled into a chunker." },
              { term: "CoNLL-2000", definition: "The standard chunking evaluation - chunk-level precision/recall/F1; SOTA NP chunking ~94-95 F1." },
            ],
            diagram: {
              kind: "pipeline",
              title: "The chunking pipeline",
              caption: "Chunking reuses the tokenizer and tagger, then adds one flat grouping layer - no tree in sight.",
              stages: [
                { label: "Sentence", note: "'The little yellow dog barked'" },
                { label: "Tokenize", note: "5 tokens" },
                { label: "POS tag", note: "DT JJ JJ NN VBD" },
                { label: "Chunk", note: "regex or CRF over tags" },
                { label: "IOB output", note: "B-NP I-NP I-NP I-NP B-VP" },
              ],
            },
            table: {
              caption: "IOB trace - 'The little yellow dog barked'.",
              headers: ["Word", "POS", "IOB chunk tag", "Chunk"],
              rows: [
                ["The", "DT", "B-NP", "starts NP 1"],
                ["little", "JJ", "I-NP", "inside NP 1"],
                ["yellow", "JJ", "I-NP", "inside NP 1"],
                ["dog", "NN", "I-NP", "ends NP 1"],
                ["barked", "VBD", "B-VP", "starts and ends VP 1"],
              ],
            },
            callout: {
              type: "tip",
              title: "Chunks never nest",
              body: "The definition mark hides in 'non-overlapping, non-recursive': 'the old man' is one chunk, and a chunk inside a chunk does not exist in this formalism - PP inside NP is not represented. Contrast explicitly with full parsing, where nesting is the whole point, and the definition is complete.",
            },
            examQuestions: [
              {
                q: "Define shallow parsing and contrast it with full parsing. Explain IOB representation, trace the chunking of 'The little yellow dog barked', write a chunk-grammar rule for NP, and name three applications of chunking.",
                marks: 14,
                outline: [
                  "Chunking: flat, non-recursive, non-overlapping phrase groups - no full tree",
                  "IOB: B-NP starts a chunk, I-NP continues, O outside",
                  "Trace: the/DT B-NP; little/JJ I-NP; yellow/JJ I-NP; dog/NN I-NP; barked/VBD B-VP",
                  "Chunk grammar: NP: <DT|JJ|NN.*>+ over POS tags",
                  "Evaluation: CoNLL-2000 chunk-level F1; CRF chunkers ~94-95",
                  "Applications: NER candidates for IE (1.6), term mining, QA query analysis, SRL spans (4.8)",
                  "Weak link: POS-tag errors propagate into chunks",
                ],
              },
              {
                q: "Why is chunking formulated as sequence labelling, and what does that formulation buy?",
                marks: 7,
                outline: [
                  "IOB makes chunks a per-token label sequence like POS and NER",
                  "Same models then serve all three: rules, HMMs, MaxEnt, CRFs",
                  "Evaluation reuses span-based precision/recall/F1",
                  "Annotated data and feature machinery transfer across the three tasks",
                  "The B-/I-/O representation itself is shared by NER and SRL labelling",
                  "One trained model family, three tasks - the reason chunking is taught as sequence labelling",
                ],
              },
            ],
          },
          {
            number: "4.6",
            title: "Shallow parsing with conditional random fields",
            body: [
              "A conditional random field (CRF) is a discriminative sequence model: it models P(y | x) - the probability of a whole label sequence given the whole observation sequence - as a log-linear product of feature weights over the sequence, normalized globally. For chunking, x is the token + POS sequence and y the IOB tags. The contrast with the HMM is the exam's core: the HMM is generative, modelling P(x, y) with strong independence assumptions (word depends only on its tag; tag only on the previous tag); the CRF conditions directly on all of x, so any feature - next word, suffix, overlapping patterns - counts without double counting, and the global normalization avoids the label-bias weakness of locally-normalized models.",
              "Features make the chunker. For token 'barked' in the worked sentence: word identity and lowercase form; POS = VBD; previous POS (NN) and next POS (EOS); suffix 'ed' (verbal past cue); is-capitalized false. A learned weight set scores candidate transitions - roughly: POS=V* and previous chunk B-NP pushes B-VP (+2.0); suffix=ed pushes VBD-family tags (+1.5); JJ followed by NN keeps I-NP (+1.2). Trained by maximum likelihood on CoNLL-2000 with regularization, CRF chunkers reach F1 about 94-95 on NP chunks - above HMM chunkers (~92) because of the richer features and global normalization.",
              "The training and inference machinery, in one breath each: inference uses the same Viterbi-style dynamic programming as HMMs - best label path under a log-linear score; training uses forward-backward expectations to maximize the conditional likelihood of gold label sequences (L-BFGS with L1/L2 regularization). The engineering cost is feature design - the model is only as good as the features, which is exactly why the same architecture transfers to NER (1.6), POS refinement (3.7), and semantic role labelling (4.8): swap the label set and feature templates, keep the machine. That transferability is the reason this syllabus pairs chunking and SRL with CRFs.",
              "Exam framing: define CRF with the P(y|x) form, build the HMM-vs-CRF contrast as a table in prose (generative vs discriminative, independence assumptions, overlapping features, label bias), list six chunking features, and state the training objective. The HMM contrast is the highest-yield paragraph - lead with it. Close with the transfer point: swap the label set and feature templates and the same machine runs NER, POS refinement and SRL - which is why this syllabus pairs chunking and SRL with CRFs.",
            ],
            keyTerms: [
              { term: "CRF (conditional random field)", definition: "Discriminative sequence model P(y|x) = weighted log-linear product, globally normalized." },
              { term: "Generative vs discriminative", definition: "HMM models P(x,y); CRF models P(y|x) directly - features may overlap freely." },
              { term: "Label bias", definition: "Weakness of locally normalized models; CRF's global normalization avoids it." },
              { term: "Feature template", definition: "Reusable feature extractor (word, POS neighbours, suffixes) shared across tagging/chunking/SRL." },
            ],
            diagram: {
              kind: "compare",
              title: "HMM vs CRF for chunking",
              caption: "Generative with independence rules vs discriminative with free features - the exam's favourite contrast.",
              left: {
                heading: "HMM (generative)",
                items: [
                  "Models joint P(x, y) via Bayes rule",
                  "Word depends only on its tag; tag only on previous tag",
                  "Independence assumptions - overlapping evidence double counts",
                  "Locally normalized - label bias; NP chunk F1 ~92",
                ],
              },
              right: {
                heading: "CRF (discriminative)",
                items: [
                  "Models conditional P(y | x) directly",
                  "Any feature of the whole observation sequence allowed",
                  "Overlapping features resolved by global normalization",
                  "Trained by maximum conditional likelihood; NP chunk F1 ~94-95",
                ],
              },
            },
            codeExample: {
              language: "python",
              caption: "crf_features.py - the feature template for chunking",
              code: `def word_features(sent, i):
    word, pos = sent[i]
    feats = {
        "word.lower": word.lower(),
        "word.suffix3": word[-3:],           # 'ing', 'ed' cues
        "pos": pos,
        "pos.prev": sent[i-1][1] if i else "<START>",
        "pos.next": sent[i+1][1] if i + 1 < len(sent) else "<END>",
        "word.istitle": word.istitle(),
        "word.isdigit": word.isdigit(),
    }
    return feats

# for chunking, the CRF adds transition features:
#   label.prev=B-NP + pos=V*  ->  scores B-VP
# trained with sklearn-crfsuite on CoNLL-2000; F1 ~ 94`,
            },
            bullets: [
              "CRF models P(y | x) directly - discriminative, globally normalized over the whole sequence.",
              "HMM models P(x, y) with independence assumptions; cannot overlap features safely.",
              "Chunking features: word, suffix3, POS, prev/next POS, capitalization, digit.",
              "Worked: POS=V* after B-NP pushes B-VP; suffix=ed pushes past-tense verbal tags.",
              "Inference: Viterbi-style best path; training: forward-backward + conditional likelihood (L-BFGS).",
              "NP chunking F1: HMM ~92 vs CRF ~94-95 (CoNLL-2000); same template serves NER and SRL.",
            ],
            callout: {
              type: "warning",
              title: "Do not say the CRF 'generates' the sentence",
              body: "The classic error in exam scripts: calling a CRF generative. It never models P(x) - the words are observed, always conditioned on. If a definition sentence contains both 'CRF' and 'generates the observation sequence', it is wrong; P(y | x) is the whole identity of the model.",
            },
            examQuestions: [
              {
                q: "What is a conditional random field? Explain discriminative modelling, the feature set used for chunking, training and inference, and contrast the CRF with the HMM on assumptions, features and accuracy.",
                marks: 14,
                outline: [
                  "CRF: P(y | x) = (1/Z(x)) exp(sum lambda_i f_i over the sequence) - discriminative",
                  "HMM: generative P(x, y); word depends only on tag, tag only on previous tag",
                  "CRF features may overlap: word, suffix, prev/next POS, capitalization - no double counting",
                  "Global normalization removes label bias (locally normalized models' weakness)",
                  "Chunking features worked: pos=V* after B-NP -> B-VP; suffix=ed -> past verbal",
                  "Training: maximum conditional likelihood via forward-backward, L-BFGS + regularization",
                  "Inference: Viterbi-style decoding; NP chunk F1 ~94-95 vs HMM ~92",
                ],
              },
              {
                q: "Why does a CRF allow overlapping features while an HMM cannot?",
                marks: 7,
                outline: [
                  "HMM multiplies P(word|tag) terms - repeated correlated evidence is double counted",
                  "Independence assumptions are baked into the generative story",
                  "CRF scores are log-linear sums over arbitrary feature indicators",
                  "The softmax-style global normalization reconciles correlated votes",
                  "Hence richer context ('next word', 'sentence-initial') is usable only in the CRF",
                ],
              },
            ],
          },
          {
            number: "4.7",
            title: "Lexical semantics, WordNet and word sense disambiguation",
            body: [
              "Lexical semantics studies the meanings of words and the systematic relations among them. The inventory: synonymy (same meaning - car/automobile), polysemy (one word, related senses - 'bank' river/finance share a history), homonymy (one form, unrelated senses - 'bat' animal/implement), hyponymy/hypernymy (specific-general - dog is a hyponym of animal), meronymy (part-whole - wheel is a meronym of car), antonymy (opposites), and for verbs troponymy (manner-of - whisper is a troponym of speak). A word sense is one of a word's distinct meanings; the sense inventory (which senses, how fine-grained) is itself a modelling decision that WSD inherits.",
              "WordNet is the standard lexical database built on these relations: about 155,000 English words organized into about 117,000 synsets - sets of lemmas sharing one concept ('{car, auto, automobile}') - connected by hypernym, meronym and antonym links. Nouns form a hierarchy rooted at 'entity': dalmatian -> dog -> canine -> carnivore -> mammal -> ... -> entity (the pyramid below reads the chain from the root down). Verbs organize by troponymy. Uses: word sense disambiguation, semantic similarity by path length in the hierarchy, query expansion in search, and the sense inventory behind the most-frequent-sense baseline.",
              "Word sense disambiguation (WSD) picks the correct sense for a word in context - the lexical-ambiguity solver promised in section 1.3. Approaches: dictionary-based Lesk (choose the sense whose gloss (dictionary definition) shares the most words with the context - worked: for 'pine cone', the gloss of the plant sense ('a coniferous tree') overlaps 'cone-bearing', beating the 'yearn' sense); supervised (train a classifier per lemma on sense-tagged SemCor); knowledge/graph-based (random walks over WordNet). The baseline is most frequent sense (WordNet's first sense), reaching about 60-70% on standard tasks; the evaluation benchmarks are the SensEval/SemEk competitions (F1 over sense assignments). WSD stays hard for one structural reason - sense inventories are fine-grained in ways applications rarely need.",
              "Exam framing: define the six lexical-semantic relations with one example each, describe WordNet's synset structure with numbers, explain Lesk's algorithm with the worked overlap, and give the most-frequent-sense baseline with its accuracy. The relation table is the artifact the marker scans for. Close with the difficulty paragraph - fine-grained inventories and weak context evidence are why WSD stays hard even with WordNet in hand - and the note that contextual embeddings now absorb much of the task.",
            ],
            keyTerms: [
              { term: "Synset", definition: "A set of lemmas sharing one concept - WordNet's basic unit ({car, auto, automobile})." },
              { term: "Hypernym / hyponym", definition: "More general / more specific term - animal is a hypernym of dog." },
              { term: "Meronymy", definition: "Part-whole relation - wheel is a meronym of car." },
              { term: "Lesk algorithm", definition: "WSD by gloss-context word overlap - choose the dictionary sense whose definition shares most words with the context." },
              { term: "Most frequent sense (MFS)", definition: "WordNet's first sense as the WSD baseline - roughly 60-70% on standard benchmarks." },
            ],
            diagram: {
              kind: "pyramid",
              title: "WordNet's noun hierarchy - the hypernym chain of 'dalmatian'",
              caption: "Each tier generalizes the one below; path length in this pyramid is WordNet's similarity measure.",
              tiers: [
                { label: "entity", note: "the root of the noun hierarchy" },
                { label: "organism / animal", note: "living things" },
                { label: "mammal / carnivore", note: "biological classes" },
                { label: "dog / canine", note: "breeds and species" },
                { label: "dalmatian", note: "the most specific synset" },
              ],
            },
            table: {
              caption: "The lexical-semantic relations and their WordNet form.",
              headers: ["Relation", "Meaning", "Example"],
              rows: [
                ["Synonymy", "same meaning, one synset", "car / automobile / auto"],
                ["Hypernymy / hyponymy", "general / specific", "animal -> dog; dog -> dalmatian"],
                ["Meronymy / holonymy", "part / whole", "wheel -> car (car has-part wheel)"],
                ["Antonymy", "opposite meaning", "hot / cold, rise / fall"],
                ["Troponymy (verbs)", "manner-of", "whisper -> speak"],
                ["Polysemy", "one word, related senses", "bank (river/finance)"],
                ["Homonymy", "one form, unrelated senses", "bat (animal / implement)"],
              ],
            },
            callout: {
              type: "exam",
              title: "Lesk in one sentence plus one overlap",
              body: "The full Lesk answer is one sentence - 'pick the sense whose gloss shares the most words with the context' - plus the worked overlap: for 'pine cone', the tree sense's gloss contains 'cone-bearing', the 'yearn' sense's does not. Naming the winner and the overlap word is what the rubric checks.",
            },
            examQuestions: [
              {
                q: "Explain the major lexical semantic relations with examples. Describe WordNet's structure (synsets, hypernym hierarchy) with approximate numbers, and explain the Lesk algorithm for word sense disambiguation with a worked example.",
                marks: 14,
                outline: [
                  "Relations: synonymy (car/automobile), hyponymy (dog -> animal), meronymy (wheel -> car)",
                  "Antonymy (hot/cold), troponymy (whisper -> speak), polysemy vs homonymy (bank vs bat)",
                  "WordNet: ~155,000 words in ~117,000 synsets; synset = one concept's lemmas",
                  "Nouns rooted at 'entity': dalmatian -> dog -> canine -> carnivore -> mammal -> entity; path length = semantic similarity",
                  "Lesk: choose the sense whose gloss overlaps the context most",
                  "Worked: 'pine cone' - tree sense gloss contains 'cone-bearing'; 'yearn' sense does not",
                  "Baseline: most frequent sense ~60-70%; benchmarks SensEval/SemEval",
                ],
              },
              {
                q: "Why does word sense disambiguation remain hard even with resources like WordNet?",
                marks: 7,
                outline: [
                  "Sense inventories are fine-grained beyond application needs (bank: 10+ senses)",
                  "Annotated sense-tagged data (SemCor) is small and expensive",
                  "The most-frequent-sense baseline is strong - beating it by large margins is hard",
                  "Context evidence is often weak; distributions over senses are long-tailed",
                  "Applications rarely need the inventory's granularity - two senses matter where WordNet has ten",
                  "This is why contextual embeddings partly displaced WSD: they separate usage without a sense inventory",
                ],
              },
            ],
          },
          {
            number: "4.8",
            title: "Thematic roles and semantic role labelling with CRFs",
            body: [
              "Thematic (semantic) roles describe the function each participant plays in an event: agent (deliberate doer), patient/theme (entity acted on or moved), experiencer (perceiver), instrument (means), benefactive (for whom), source, goal, location, time. Worked frame for 'The cat knocked over the vase yesterday': predicate knock - agent the cat, patient the vase, time yesterday. The insight that makes roles valuable: they are stable across syntactic alternations. 'John broke the window' and 'The window broke' assign agent and patient identically while the surface grammar flips subject and object - so roles, not grammatical relations, are the unit of meaning a downstream system wants.",
              "The passive is the canonical demonstration: 'The vase was knocked over by the cat' - the patient now sits in subject position and the agent in a by-phrase, but the role assignment is unchanged (agent the cat, patient the vase). A parser alone cannot deliver this; something must map syntactic positions to roles per predicate. Semantic role labelling (SRL) is that task: for each predicate, identify the constituent spans that express its arguments and label each with its role. Resources: PropBank annotates verb framesets with numbered arguments (A0 = proto-agent, A1 = proto-patient, A2+ per-verb, AM-* adjuncts like AM-TMP, AM-LOC); FrameNet organizes meaning into frames with frame-specific roles.",
              "SRL as sequence labelling: candidate spans from the syntactic parse (or shallow chunks - the bridge from 4.5), then a CRF over the argument sequence with features: predicate lemma and voice (active/passive flips the A0/A1 positions), parse-tree path from predicate to candidate span, position relative to predicate (before = agent-leaning in English), phrase type (NP vs PP), subcategorization frame of the verb, and the head word of the span. Worked feature effect: voice=passive downweights the pre-predicate NP's A0 score and boosts the by-PP's - exactly capturing the passive flip above. CRF SRL reaches about 80-85% F1 on PropBank benchmarks; applications: question answering (5.5's 'who did what' questions), information extraction's event frames (1.6), and text simplification.",
              "Exam framing: define five roles with one sentence exhibiting them, show the active/passive alternation preserving roles, define SRL with PropBank's A0/A1 notation, and list six CRF features with the passive-voice feature worked. The alternation example is the conceptual anchor - both sentences, role tables identical. Add the accuracy figure (~80-85% F1 on PropBank) and the applications - QA's 'who did what' questions and IE's event frames (1.6) - to close the loop across units.",
            ],
            keyTerms: [
              { term: "Thematic role", definition: "Participant's function in an event - agent, patient, experiencer, instrument, goal, time." },
              { term: "Diathesis alternation", definition: "Syntactic rearrangement preserving roles - active/passive; 'broke the window' / 'the window broke'." },
              { term: "Semantic role labelling (SRL)", definition: "For each predicate, find and label argument spans with roles (PropBank A0/A1/AM-*)." },
              { term: "PropBank frameset", definition: "Per-verb annotation of numbered roles across a corpus - the training data of CRF SRL." },
            ],
            diagram: {
              kind: "pipeline",
              title: "Semantic role labelling, stage by stage",
              caption: "From sentence to labelled frame - the output is exactly the 'who did what to whom' record.",
              stages: [
                { label: "Sentence", note: "'The cat knocked over the vase yesterday'" },
                { label: "Syntactic parse / chunks", note: "candidate spans" },
                { label: "Predicate identification", note: "knock over -> frameset knock.01" },
                { label: "Argument classification", note: "CRF over spans: A0, A1, AM-TMP" },
                { label: "Labelled frame", note: "A0: the cat; A1: the vase; AM-TMP: yesterday" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "srl_frame.py - a PropBank-style frame record",
              code: `frame = {
    "sentence": "The cat knocked over the vase yesterday.",
    "predicate": "knock.01",          # PropBank frameset id
    "roles": {
        "A0":      "The cat",         # proto-agent (knocker)
        "A1":      "the vase",        # proto-patient (thing knocked)
        "AM-TMP":  "yesterday",       # temporal adjunct
    },
}

# passive variant keeps the roles, flips the syntax:
# "The vase was knocked over by the cat."
#   A0 = 'the cat'   (now inside a by-PP)
#   A1 = 'The vase'  (now the subject)
# CRF features: voice=passive, path V->PP, position=after-predicate`,
            },
            bullets: [
              "Roles: agent, patient/theme, experiencer, instrument, benefactive, source, goal, location, time.",
              "Worked frame: 'The cat knocked over the vase yesterday' - A0 cat, A1 vase, AM-TMP yesterday.",
              "Alternations preserve roles: 'John broke the window' vs 'The window broke' - same agent/patient.",
              "Passive demo: 'The vase was knocked over by the cat' - roles unchanged, syntax flipped.",
              "SRL = per-predicate span detection + role classification; PropBank A0/A1 + AM-* adjuncts.",
              "CRF features: predicate lemma, voice, parse path, position, phrase type, subcategorization - F1 ~80-85%.",
            ],
            callout: {
              type: "tip",
              title: "Roles survive what grammar changes",
              body: "Write the passive pair side by side with identical role tables - that is the whole argument for SRL: grammatical relations are unstable, thematic roles are not. The voice feature in the CRF exists precisely to re-map subject position to the right role in passives.",
            },
            examQuestions: [
              {
                q: "Define thematic roles with five examples in one sentence. Show with active/passive and causative alternations that roles are more stable than grammatical relations, and explain the SRL task with PropBank notation.",
                marks: 14,
                outline: [
                  "Roles: agent (deliberate doer), patient (acted on), experiencer, instrument, time",
                  "'The cat knocked over the vase yesterday': A0 cat, A1 vase, AM-TMP yesterday",
                  "Passive: 'The vase was knocked over by the cat' - same roles, flipped syntax",
                  "Causative: 'John broke the window' / 'The window broke' - agent/patient preserved",
                  "SRL: per predicate, find argument spans and label roles",
                  "PropBank: numbered A0 (proto-agent), A1 (proto-patient), AM-* adjuncts; FrameNet frames",
                  "Conclusion: roles are the meaning-level interface for QA and IE",
                ],
              },
              {
                q: "Describe a CRF-based SRL system: input, candidate spans, feature set and why the voice feature matters. State the typical accuracy.",
                marks: 7,
                outline: [
                  "Input: sentence + parse (or shallow chunks) + predicate",
                  "Candidates: constituent/chunk spans around the predicate",
                  "Features: predicate lemma, voice, parse path, position, phrase type, subcategorization",
                  "voice=passive re-weights pre-predicate NP away from A0 and boosts by-PP",
                  "Sequence model over spans; PropBank F1 ~80-85%",
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
      title: "NLP Applications and Recent Trends",
      summary:
        "Unit V is the application layer: natural language interfaces to databases and dialogue systems, text summarization in its extractive and abstractive forms, sentiment analysis, machine translation from the Vauquois triangle to statistical MT, question answering architectures, and the recent trends from word embeddings through transformers to large language models.",
      chapter: {
        number: "05",
        title: "NLP at Work - Applications and What Comes Next",
        intro:
          "Unit V covers natural language interfaces to databases with dialogue handling, text summarization (extractive vs abstractive, TF-IDF and TextRank, ROUGE), sentiment analysis (lexicon-based and machine-learned, negation and sarcasm), machine translation (challenges, Vauquois triangle, SMT with alignment and BLEU), question answering architectures, and recent trends - embeddings, transformers and LLMs.",
        inOneBreath:
          "An NL interface maps questions to database queries through a dialogue loop; summarization selects sentences (TF-IDF, TextRank) or rewrites them (abstractive); sentiment classifies polarity with lexicons plus negation windows; MT climbs the Vauquois triangle from direct to transfer to interlingua before SMT learns alignments and BLEU scores them; QA classifies the question, retrieves, extracts and ranks; and the field moved from count models to embeddings to transformers and LLMs.",
        sections: [
          {
            number: "5.1",
            title: "Natural language interfaces",
            body: [
              "A natural language interface to a database (NLIDB) lets users query structured data by speaking or typing instead of writing SQL - 'List the students who scored more than 80 in DBMS' instead of a SELECT with a JOIN. The architecture maps language to a domain-specific semantic representation and then to the database's query language: lexer/parser over a semantic grammar (domain rules like 'show <attribute> of <entity> where <condition>'), semantic analysis to a logical form (relation = score, filter score > 80, subject = student names), query generation to SQL, execution, and a response generator that formats rows back into fluent text. Historic proof of concept: LUNAR (1970s), which answered questions about moon-rock samples from a restricted database.",
              "Restricted domains make the problem tractable and the exam's examples concrete. Worked mapping: 'List the names of students who scored more than 80 in DBMS' - semantic parse identifies entity = student, attribute = name, condition = score(course=DBMS) > 80 - which realizes as SELECT name FROM students JOIN scores ON ... WHERE marks > 80 AND course = 'DBMS'. The dialogue manager handles what the one-shot parse cannot: ellipsis ('and in CSE?' - repeat the last query with course = CSE), anaphora ('What about Rahul?' - bind 'what' to the previous result set), and clarification ('Did you mean this semester?'). Context tracking is what separates a dialogue system from a stack of independent parse-and-execute calls.",
              "The challenges are exactly the general-NLP difficulties confined to one domain: paraphrase variety ('Who failed DBMS?' must equal score < pass_mark, a fact the grammar must encode), ambiguity of user intent, out-of-domain input ('What's the weather?') that must be recognized and refused gracefully, and schema drift when the database changes. Modern task-oriented dialogue systems and chatbots generalize the same loop - intent classification and slot filling replace semantic grammar, but the dialogue manager's ellipsis and anaphora duties remain. The exam contrast to draw: NLIDB's precision comes from the closed schema; open-domain QA (5.5) trades that precision for coverage.",
              "Exam framing: define NLIDB, draw the five-stage architecture, work one natural-language query to SQL, and handle one ellipsis follow-up with the dialogue manager. The query-to-SQL worked example is this section's numerical anchor - show the logical form as an intermediate step. End with the contrast the syllabus wants: NLIDB's precision comes from the closed schema, while open-domain QA (5.5) trades precision for coverage - same skeleton, different domain assumptions.",
            ],
            keyTerms: [
              { term: "NLIDB", definition: "Natural language interface to a database - maps questions to the database's query language via a semantic grammar." },
              { term: "Semantic grammar", definition: "Grammar whose rules are domain concepts ('show <attribute> of <entity> where <condition>') rather than general syntax." },
              { term: "Logical form", definition: "The intermediate meaning representation between parse tree and SQL - relation, filter, subject." },
              { term: "Dialogue manager", definition: "Tracks context to resolve ellipsis, anaphora and clarification across turns." },
            ],
            diagram: {
              kind: "layers",
              title: "The NL interface stack",
              caption: "Each layer consumes the one above it - the dialogue manager sits on top because it sees across turns.",
              layers: [
                { label: "Dialogue manager", note: "ellipsis, anaphora, clarification across turns" },
                { label: "Language understanding", note: "parse + semantic analysis to logical form" },
                { label: "Query mapping", note: "logical form -> SQL" },
                { label: "Execution & response", note: "run query, format rows as text" },
                { label: "Database / domain", note: "schema, tables, domain constraints" },
              ],
            },
            table: {
              caption: "Components of an NL interface and their jobs.",
              headers: ["Component", "Job", "Worked example"],
              rows: [
                ["Lexer / parser", "tokens + parse over the semantic grammar", "'List the names of students who scored > 80 in DBMS'"],
                ["Semantic analysis", "parse -> logical form", "entity=student; attribute=name; filter score>80, course=DBMS"],
                ["Query generator", "logical form -> SQL", "SELECT name ... WHERE marks > 80 AND course='DBMS'"],
                ["Dialogue manager", "ellipsis + anaphora across turns", "'and in CSE?' -> re-run with course='CSE'"],
                ["Response generator", "rows -> fluent text", "'7 students scored above 80 in DBMS: ...'"],
              ],
            },
            callout: {
              type: "exam",
              title: "The ellipsis follow-up is the marks magnet",
              body: "After the main query mapping, add one dialogue turn: 'and in CSE?' - carried by the dialogue manager, not the parser, because the utterance alone is unparseable. Showing that context lives in a separate component is what elevates the answer from parsing to interface design.",
            },
            examQuestions: [
              {
                q: "What is a natural language interface to a database? Describe its architecture stage by stage, work the mapping of 'List the names of students who scored more than 80 in DBMS' to SQL, and explain how the dialogue manager handles ellipsis and anaphora.",
                marks: 14,
                outline: [
                  "NLIDB: natural language in, structured query out - no SQL expertise needed",
                  "Stages: parse (semantic grammar) -> logical form -> SQL -> execute -> respond",
                  "Worked logical form: entity=student, attribute=name, filter score>80 AND course=DBMS",
                  "SQL: SELECT name FROM students JOIN scores WHERE marks > 80 AND course='DBMS'",
                  "Dialogue manager tracks context across turns",
                  "Ellipsis: 'and in CSE?' -> repeat last query with course='CSE'",
                  "Anaphora: 'What about Rahul?' -> bind to previous result set",
                ],
              },
              {
                q: "Why do NL interfaces restrict themselves to one domain, and what breaks in open domains?",
                marks: 7,
                outline: [
                  "Semantic grammar + closed schema make parsing tractable and precise",
                  "Paraphrase variety must be enumerated per domain ('Who failed?' = score < pass)",
                  "Open domains: unbounded paraphrase and intent - grammar explodes",
                  "Out-of-domain input must be detected and refused gracefully",
                  "Schema drift silently invalidates the semantic grammar",
                ],
              },
            ],
          },
          {
            number: "5.2",
            title: "Text summarization",
            body: [
              "Text summarization compresses one or more documents into a shorter version preserving the key information. The primary division: extractive summarization selects sentences verbatim from the source and concatenates them - safe, grammatical by construction, limited to what was said; abstractive summarization generates new sentences expressing the content, as humans do - flexible and concise but at risk of fluency errors and hallucinated facts. The second axis is scope: single-document (a news article) vs multi-document (twenty reports on one event), where redundancy removal across documents becomes the central difficulty.",
              "Extractive scoring gives this section its numbers. Sentence score = sum of TF-IDF weights of its content words; TF counts the term in the sentence, IDF = log(N/df) comes from the corpus - words common in the document but rare in the corpus ('championship', 'bhopal') score high, corpus-common words ('the', 'said') score near zero. Worked on a four-sentence toy article: S1 (lead, contains 'championship', 'bhopal') scores 2.87; S2 (quote-heavy) 1.62; S3 (mostly 'the', 'said') 0.94; S4 ('bhopal', 'record') 2.05 - top-2 = S1 + S4, a sensible summary. Add position, title-overlap and cue-phrase bonuses; TextRank upgrades scoring to graph centrality - sentences as nodes, similarity as edges, PageRank to rank; MMR (maximal marginal relevance) penalizes selecting near-duplicate sentences.",
              "Abstractive methods are neural: sequence-to-sequence encoder-decoder models with attention, today transformer-based, trained on document-summary pairs (CNN/DailyMail, XSum), evaluated automatically by ROUGE - recall of n-gram overlap between generated and reference summaries (ROUGE-1 unigrams, ROUGE-2 bigrams, ROUGE-L longest common subsequence). Worked ROUGE intuition: if the reference has 20 unigrams and the summary recovers 14 of them, ROUGE-1 recall = 0.7. The abstractive risks are factual: hallucination (fluent but false sentences) and inconsistency - which is why production systems often stay extractive or apply post-hoc factuality checks.",
              "Exam framing: define the two paradigms and two scopes, work the TF-IDF sentence scores and pick the top-2 extract, state ROUGE with one computed recall, and list the abstractive risks. The score table is the artifact; the hallucination caveat is the synthesis mark. Add the evaluation convention - ROUGE is recall-oriented because a human summary's content should all appear - and one line on why production systems often stay extractive: selection cannot invent facts.",
            ],
            keyTerms: [
              { term: "Extractive summarization", definition: "Select and concatenate source sentences verbatim - scored by TF-IDF, position, TextRank." },
              { term: "Abstractive summarization", definition: "Generate new sentences (seq2seq/transformers) - risks hallucination; evaluated by ROUGE." },
              { term: "TextRank", definition: "PageRank over a sentence-similarity graph - high-centrality sentences are the summary." },
              { term: "ROUGE", definition: "n-gram recall against reference summaries - ROUGE-1/2/L; worked: 14 of 20 unigrams = 0.7." },
            ],
            diagram: {
              kind: "matrix",
              title: "The summarization quadrant",
              caption: "Two axes - how (select vs generate) and how much (one doc vs many) - place every method.",
              axes: { x: "Extractive -> Abstractive", y: "Single document -> Multi document" },
              quadrants: [
                { label: "Single-doc extractive", note: "TF-IDF / position / TextRank sentence selection" },
                { label: "Single-doc abstractive", note: "seq2seq with attention; concise rewrites" },
                { label: "Multi-doc extractive", note: "cross-document selection + redundancy removal (MMR)" },
                { label: "Multi-doc abstractive", note: "hardest - fusion across sources, highest hallucination risk" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "summarize.py - TF-IDF extractive scoring",
              code: `import math
from collections import Counter

sents = [
    "Bhopal hosted the national chess championship.",
    "Organizers said the event was the largest ever.",
    "The players said the venue was fine.",
    "Bhopal set a new record for participation.",
]
N = len(sents)
df = Counter()
for s in sents:
    for w in set(s.lower().split()):
        df[w] += 1

def tfidf(s):
    tf = Counter(s.lower().split())
    return round(sum(tf[w] * math.log(N / df[w]) for w in tf), 2)

scores = [tfidf(s) for s in sents]
print(scores)                    # [2.87, 1.62, 0.94, 2.05]
top = sorted(range(N), key=lambda i: -scores[i])[:2]
print([sents[i] for i in top])   # S1 + S4 - the extract`,
            },
            bullets: [
              "Extractive: select source sentences verbatim; abstractive: generate new ones.",
              "Sentence score = sum of TF-IDF of content words + position + title overlap + cue phrases.",
              "Worked scores: S1 2.87, S2 1.62, S3 0.94, S4 2.05 -> extract = S1 + S4.",
              "TextRank: PageRank over sentence-similarity graph; MMR penalizes redundancy.",
              "Multi-document adds cross-document redundancy removal as the central problem.",
              "ROUGE-1 recall: recovered 14 of 20 reference unigrams = 0.7; abstractive risks hallucination.",
            ],
            callout: {
              type: "warning",
              title: "Abstractive fluency is not faithfulness",
              body: "The classic trap: praising abstractive summaries for fluency without the hallucination caveat. A fluent sentence that names the wrong winner is a worse failure than a clumsy verbatim extract - always pair abstractive with factuality checking, and say so in the exam.",
            },
            examQuestions: [
              {
                q: "Distinguish extractive from abstractive summarization. Explain TF-IDF based extractive summarization with a worked scoring example, describe TextRank and MMR, and state how ROUGE evaluates abstractive output with its risks.",
                marks: 14,
                outline: [
                  "Extractive: verbatim sentence selection - grammatical by construction",
                  "Abstractive: neural generation (seq2seq/transformers) - flexible, hallucination risk",
                  "Score = sum TF-IDF of content words + position/title/cue bonuses",
                  "Worked: S1 2.87, S2 1.62, S3 0.94, S4 2.05 -> extract S1 + S4",
                  "TextRank: PageRank on sentence-similarity graph; MMR removes redundancy",
                  "Multi-document: redundancy removal across sources is the hard part",
                  "ROUGE = n-gram recall vs reference (14/20 unigrams = 0.7); factuality caveat",
                ],
              },
              {
                q: "Why is multi-document summarization harder than single-document?",
                marks: 7,
                outline: [
                  "The same fact appears in many documents - redundancy dominates",
                  "Cross-document contradictions and updates must be reconciled",
                  "Selection must diversify (MMR) rather than repeat",
                  "Abstractive fusion across sources multiplies hallucination risk",
                  "Corpus scale grows but the summary length stays fixed - compression pressure rises",
                  "Timeline and attribution problems appear only with multiple sources",
                ],
              },
            ],
          },
          {
            number: "5.3",
            title: "Sentiment analysis",
            body: [
              "Sentiment analysis (opinion mining) classifies the attitude expressed in text - positive, negative, neutral, or fine-grained star levels - at three levels of granularity: document (is this review positive?), sentence (does this sentence praise or complain?) and aspect-based (this restaurant review praises the food but slams the service - different polarities for different aspects). Applications: review aggregation, brand monitoring, market research, and even stock-movement prediction from news sentiment.",
              "The lexicon approach makes the arithmetic explicit. Each word carries a polarity score from a resource like AFINN or SentiWordNet ('excellent' +3, 'good' +2, 'terrible' -3); the analyzer sums content-word scores, then applies rules: negation flips the polarity of words in the following window ('not good' -2), intensifiers scale ('very good' +3), 'but' discounts the clause before it. Worked sentence: 'The food was not good but the service was excellent' - 'not good' contributes -2, 'excellent' +3, net +1 -> positive overall, with the aspect split (food negative, service positive) recoverable by grouping scores under aspect heads. Lexicon systems are transparent and need no training data, but drown in sarcasm and context.",
              "The statistical approach treats sentiment as classification: bag-of-words or TF-IDF features with Naive Bayes or SVM was the classic pipeline; today fine-tuned transformers dominate benchmarks like IMDB (accuracy above 95%). The challenges are where the marks live: negation scope ('not bad' vs 'not good at all'), sarcasm and irony ('great, another delay' - lexicons read it positive), domain shift ('unpredictable plot' praises a film but condemns a car), and aspect ambiguity. The standard answer names both approaches, works one scored sentence, and closes with the challenge list - the exam's typical 14-marker.",
              "Exam framing: define the task and its three levels, present the lexicon scoring with the negation/intensifier rules, work the 'not good but excellent' sentence, contrast with ML approaches, and list the four challenges. The worked sentence is this section's numerical anchor - show each contribution, not just the total. Name the ML progression too: TF-IDF plus Naive Bayes or SVM gave way to fine-tuned transformers above 95% on IMDB, which sets up the trend question of section 5.6.",
            ],
            keyTerms: [
              { term: "Sentiment polarity", definition: "The attitude label - positive / negative / neutral, or graded stars." },
              { term: "Aspect-based sentiment", definition: "Per-aspect polarity within one text - food positive, service negative in one review." },
              { term: "Negation window", definition: "The span after a negator whose polarity flips - 'not good' scores negative." },
              { term: "AFINN / SentiWordNet", definition: "Sentiment lexicons assigning per-word scores (excellent +3, terrible -3)." },
            ],
            diagram: {
              kind: "pipeline",
              title: "A lexicon-based sentiment analyzer",
              caption: "Lookup, then contextual rules - transparent, training-free, and exactly as smart as its rule list.",
              stages: [
                { label: "Text", note: "'The food was not good but the service was excellent'" },
                { label: "Tokenize + normalize", note: "lowercase, split clauses at 'but'" },
                { label: "Lexicon lookup", note: "good +2, excellent +3" },
                { label: "Context rules", note: "negation flips 'good'; 'but' discounts prior clause" },
                { label: "Aggregate", note: "-2 + 3 = +1 -> positive; aspects: food -, service +" },
              ],
            },
            table: {
              caption: "Scoring 'The food was not good but the service was excellent'.",
              headers: ["Token / pattern", "Rule", "Contribution", "Aspect"],
              rows: [
                ["good", "lexicon", "+2 (before negation)", "food"],
                ["not good", "negation window flips sign", "-2", "food"],
                ["but", "clause pivot - discount left clause", "food clause halved", "both"],
                ["excellent", "lexicon", "+3", "service"],
                ["total", "sum", "+1 -> positive overall", "food -1, service +3"],
              ],
            },
            callout: {
              type: "tip",
              title: "Negation is a window, not a switch",
              body: "Say 'flip the polarity within the negation window (2-3 tokens)' rather than 'negation reverses sentiment'. 'Not bad' becomes mildly positive, not negative - the window rule is what makes the arithmetic consistent, and examiners notice the precision.",
            },
            examQuestions: [
              {
                q: "What is sentiment analysis? Explain document, sentence and aspect-based levels, describe lexicon-based classification with negation and intensifier handling, and work the scoring of 'The food was not good but the service was excellent'. Contrast with machine-learned approaches and list the main challenges.",
                marks: 14,
                outline: [
                  "Task: classify attitude - document, sentence, aspect levels",
                  "Lexicon: per-word scores (AFINN: excellent +3, terrible -3)",
                  "Rules: negation window flips; intensifiers scale; 'but' pivots clauses",
                  "Worked: 'not good' -> -2; 'excellent' +3; total +1 -> positive",
                  "Aspect split: food negative, service positive - from clause grouping",
                  "ML approach: TF-IDF + Naive Bayes/SVM historically; transformers >95% on IMDB",
                  "Challenges: negation scope, sarcasm, domain shift, aspect ambiguity",
                ],
              },
              {
                q: "Why does sarcasm defeat lexicon-based sentiment analysis and how do learned models cope?",
                marks: 7,
                outline: [
                  "'Great, another delay' - positive words, negative intent",
                  "Lexicons read the surface words only - no context model",
                  "Learned models use sequence context and world patterns to detect the mismatch",
                  "Even transformers struggle at scale - sarcasm needs pragmatics, not vocabulary",
                  "Same problem class as domain shift: 'unpredictable plot' vs 'unpredictable brakes'",
                  "Practical mitigations: sarcasm-specific training data, emoji and context features",
                ],
              },
            ],
          },
          {
            number: "5.4",
            title: "Machine translation",
            body: [
              "Machine translation (MT) produces a target-language sentence preserving the source's meaning. The difficulty is structural before it is statistical: word order differs (English SVO vs Hindi SOV - 'Ram ate an apple' becomes 'Ram ne seb khaya', verb last, subject marked by the postposition 'ne'); prepositions become postpositions; gender and agreement systems differ; idioms are non-compositional (section 3.8); and every source ambiguity must be resolved because the target language forces one reading. Translation is therefore analysis + transfer + generation even in the statistical era - the parts just became learned instead of hand-written.",
              "The classical paradigms stack into the Vauquois triangle: direct MT at the base (word-by-word dictionary lookup, minimal analysis - fast, wrong on word order and idioms), transfer MT in the middle (parse the source, apply structural transfer rules to rearrange into target structure, generate - handles SVO-to-SOV but needs rules per language pair), interlingua at the apex (map the source to a language-neutral meaning representation, generate the target from it - one analysis for N languages, but the representation itself must encode everything). Depth of analysis trades against rule-writing effort, and the triangle's height is exactly how much of language the system must commit to representing.",
              "Statistical MT replaced rule-writing with parallel corpora: learn word alignments (IBM models via EM), build a phrase table of translation probabilities, and decode with the noisy channel: argmax over e of P(f | e) x P(e) - the translation model from the phrase table, the language model P(e) from Unit IV. Worked on a toy parallel set ('the house'/'la casa'; 'green house'/'casa verde'; 'the green house'/'la casa verde'): P(casa | house) = 3/3 = 1.0 and P(verde | green) = 2/2 = 1.0, so decoding 'the green house' returns 'la casa verde'. Evaluation: BLEU - n-gram precision against references with a brevity penalty; neural encoder-decoder transformers have since replaced SMT end to end.",
              "Exam framing: name three challenge classes with English-Hindi examples, draw the Vauquois triangle with one trade-off sentence per level, work the SMT pipeline (alignment, phrase table, noisy channel) on the toy corpus, and give BLEU's definition. The triangle plus the toy computation covers both the rule-based and statistical halves of the question. State the LM connection explicitly - P(e) is section 4.1's language model supplying fluency - because that cross-unit sentence is the marker's synthesis check.",
            ],
            keyTerms: [
              { term: "Vauquois triangle", definition: "Direct (lexical) -> transfer (syntactic) -> interlingua (semantic) - rising depth of analysis against rising rule cost." },
              { term: "Word alignment", definition: "Correspondence between source and target words learned from parallel text (IBM models, EM)." },
              { term: "Noisy channel decoding", definition: "argmax_e P(f | e) P(e) - translation model times target language model." },
              { term: "BLEU", definition: "N-gram precision against references with brevity penalty - the standard MT metric." },
            ],
            diagram: {
              kind: "pyramid",
              title: "The Vauquois triangle",
              caption: "Height = depth of analysis; the higher the paradigm, the less rule-writing per language pair - and the harder the representation.",
              tiers: [
                { label: "Interlingua", note: "language-neutral meaning; one analysis for N languages; representation is the bottleneck" },
                { label: "Transfer", note: "parse + structural transformation rules per language pair" },
                { label: "Direct", note: "word-by-word dictionary lookup; no real analysis" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "smt.py - a toy phrase table from parallel counts",
              code: `parallel = [
    ("the house",      "la casa"),
    ("green house",    "casa verde"),
    ("the green house","la casa verde"),
]

# word alignments (toy: assume obvious 1-1 mappings)
pairs = {("house","casa"): 0, ("green","verde"): 0,
         ("the","la"): 0}
for en, de in parallel:
    for e, d in zip(en.split(), de.split()):
        pairs[(e, d)] = pairs.get((e, d), 0) + 1

en_counts = {"house": 3, "green": 2, "the": 2}
for (e, d), c in pairs.items():
    print(f"P({d}|{e}) = {c}/{en_counts[e]}")
# P(casa|house)=1.0  P(verde|green)=1.0  P(la|the)=1.0
# decode 'the green house' -> 'la casa verde' with P = 1.0
# real SMT: EM alignment + phrase table + LM re-ranking (4.1)`,
            },
            bullets: [
              "Challenges: word order (SVO vs SOV), postpositions, gender/agreement, idioms, forced disambiguation.",
              "Vauquois: direct (lexical) -> transfer (syntactic rules) -> interlingua (neutral meaning).",
              "Trade-off: deeper analysis = fewer rules per language pair, harder representation.",
              "SMT: parallel corpus -> alignments (EM) -> phrase table -> noisy channel decode.",
              "Worked: P(casa|house) = 1.0; decode 'the green house' -> 'la casa verde'.",
              "BLEU: n-gram precision + brevity penalty; neural encoder-decoder transformers replaced SMT.",
            ],
            callout: {
              type: "exam",
              title: "Say what the LM does in SMT",
              body: "The cross-unit sentence the examiner wants: the noisy channel's P(e) term is the language model of section 4.1 - it makes the decoder prefer fluent target word order, which is exactly what direct MT cannot do. Connect 4.1 and 5.4 explicitly and the synthesis mark follows.",
            },
            examQuestions: [
              {
                q: "Explain the challenges of machine translation with English-Hindi examples. Describe the three classical paradigms of the Vauquois triangle with their trade-off, and explain statistical MT - alignment, phrase table, noisy channel decoding - with a toy computation.",
                marks: 14,
                outline: [
                  "Challenges: SVO vs SOV ('Ram ate an apple' -> 'Ram ne seb khaya'), postpositions, idioms",
                  "Ambiguity must be resolved - the target forces one reading",
                  "Direct: word-by-word dictionary, no reordering - fails on SOV",
                  "Transfer: parse + structural rules per language pair",
                  "Interlingua: one neutral meaning representation; representation is the bottleneck",
                  "SMT: alignments from parallel text; P(casa|house) = 3/3 = 1.0 toy example",
                  "Decode argmax P(f|e) P(e) - LM supplies fluency; BLEU = n-gram precision + brevity penalty",
                ],
              },
              {
                q: "Why does word-for-word (direct) translation fail between English and Hindi? Give two example sentences.",
                marks: 7,
                outline: [
                  "English SVO vs Hindi SOV - verb must move to the end",
                  "'Ram ate an apple' -> '*Ram khaya ek seb' wrong; 'Ram ne seb khaya' right",
                  "Prepositions become postpositions - 'in Bhopal' -> 'Bhopal me'",
                  "Direct lookup has no mechanism for reordering or agreement",
                  "Gender and agreement: adjectives and verbs must inflect to match Hindi gender",
                  "Only transfer, interlingua or learned statistical/neural models can reorder - direct cannot",
                ],
              },
            ],
          },
          {
            number: "5.5",
            title: "Question answering",
            body: [
              "A question answering (QA) system returns a short answer to a natural language question, rather than the ranked document list of information retrieval. The canonical pipeline: question analysis - classify the question type (factoid, list, yes/no, definitional, why) and the expected answer type (PERSON, DATE, LOCATION, DEFINITION); retrieval - the IR machinery selects top passages from the corpus for the question's keywords; answer extraction - candidate spans matching the answer type are pulled from the passages (a PERSON question runs NER, section 1.6); answer ranking - candidates are scored by redundancy across passages and type match, and the top one is returned with provenance.",
              "Worked end to end: 'Who wrote the Discovery of India?' - question analysis: factoid, answer type PERSON; retrieval returns passages containing the book title; extraction runs NER and collects person candidates near 'Discovery of India'; ranking picks 'Jawaharlal Nehru' (it appears in 7 of the top 10 passages; the others disagree or are irrelevant). A second example shows the pipeline's flexibility: 'Is Delhi the capital of India?' (yes/no) retrieves and verifies a supporting sentence, returning Yes plus evidence rather than a span. Closed-domain QA (one corpus, one schema) achieves precision; open-domain QA (the web) trades precision for coverage - and knowledge-based QA over databases is exactly the NLIDB of section 5.1.",
              "Reading-comprehension QA is the modern formulation that the transformer era dominates: one passage plus one question, answer as a span or generated text (SQuAD-style benchmarking, exact-match and F1 metrics). The classic pipeline's components still structure the modern system - question classification decides retrieval strategy and extraction format - but the extraction/ranking stages became learned attention over question and passage. Evaluation: accuracy or mean reciprocal rank (MRR) for factoid sets; the exam's architectural answer, however, is the four-stage pipeline with the answer-type machinery - it is what the rubric scans for.",
              "Exam framing: define QA against IR, name the four stages, work the Nehru question through all four, classify three question types with their expected answer types, and close with the closed-vs-open-domain contrast. The worked question is this section's running example - reproduce it in full. Then one line on the modern shift: reading-comprehension QA (passage + question -> span, SQuAD-style) is the transformer-era formulation, but the four-stage skeleton still organizes every system that must find its own passages.",
            ],
            keyTerms: [
              { term: "Answer type", definition: "The category the answer must be - PERSON, DATE, LOCATION, DEFINITION; decided in question analysis." },
              { term: "Factoid question", definition: "A question with a short factual answer - the core QA case." },
              { term: "Reading comprehension QA", definition: "Passage + question -> answer span/text (SQuAD formulation); the transformer-era standard." },
              { term: "Mean reciprocal rank (MRR)", definition: "QA ranking metric - average of 1/rank of the first correct answer." },
            ],
            diagram: {
              kind: "flow",
              title: "The QA pipeline",
              caption: "Classify the question before retrieving - the answer type decides which extractor runs.",
              steps: [
                { label: "Question", note: "'Who wrote the Discovery of India?'" },
                { label: "Question analysis", note: "factoid; answer type = PERSON" },
                { label: "Retrieval", note: "top passages for the title keywords" },
                { label: "Extraction", note: "NER candidates near the title" },
                { label: "Ranking", note: "redundancy + type match -> 'Jawaharlal Nehru'" },
              ],
            },
            table: {
              caption: "Question types and the machinery each one triggers.",
              headers: ["Type", "Example", "Answer type", "Machinery"],
              rows: [
                ["Factoid (who)", "Who wrote the Discovery of India?", "PERSON", "NER on retrieved passages"],
                ["Factoid (when)", "When was the Discovery of India published?", "DATE", "date recognizer"],
                ["Yes / no", "Is Delhi the capital of India?", "yes/no", "retrieve + verify, return evidence"],
                ["List", "Name three RGPV IT electives", "list", "extract multiple candidates, deduplicate"],
                ["Definitional", "What is perplexity?", "definition", "definition patterns, encyclopedic match"],
              ],
            },
            callout: {
              type: "tip",
              title: "Answer type drives everything",
              body: "In every QA answer, put answer-type classification before retrieval: a DATE question needs a date recognizer, a PERSON question needs NER - running the wrong extractor wastes the whole pipeline. It is one sentence, and it is the conceptual centre of the architecture.",
            },
            examQuestions: [
              {
                q: "Describe the architecture of a question answering system - question analysis, retrieval, extraction, ranking - and work 'Who wrote the Discovery of India?' through every stage. Classify three question types with their expected answer types and contrast open-domain with closed-domain QA.",
                marks: 14,
                outline: [
                  "QA returns short answers; IR returns ranked documents",
                  "Question analysis: factoid; answer type = PERSON",
                  "Retrieval: passages containing the book title",
                  "Extraction: NER person candidates near the title",
                  "Ranking: 'Jawaharlal Nehru' in 7 of top 10 passages -> answer",
                  "Types: factoid -> PERSON/DATE; yes/no -> verify; definitional -> patterns",
                  "Closed-domain: precise, single corpus; open-domain: web-scale, noisier",
                ],
              },
              {
                q: "How does reading-comprehension QA differ from the classical retrieval pipeline?",
                marks: 7,
                outline: [
                  "Input: one given passage + question - retrieval stage disappears",
                  "Output: span or generated text scored by exact match/F1 (SQuAD)",
                  "Extraction becomes attention over question and passage in transformers",
                  "Classical pipeline persists at system level: question classification still steers the model",
                  "Answer-type machinery remains - a DATE question still needs a date-aware reader",
                  "Open-domain systems combine both: retrieve passages, then read them",
                ],
              },
            ],
          },
          {
            number: "5.6",
            title: "Recent trends - embeddings, transformers and LLMs",
            body: [
              "The last fifteen years replaced count-based pipelines with learned representations, in four waves. First, distributional word embeddings (word2vec skip-gram 2013, GloVe) learned a dense vector per word from co-occurrence - the distributional hypothesis, 'you shall know a word by the company it keeps', operationalized: similar words land near each other, and vector arithmetic captures analogies (king - man + woman lands near queen). Second, sequence models (RNN/LSTM) processed text token by token for tagging and MT. Third, the Transformer (2017) replaced recurrence with self-attention - every token attends to every other, parallelizable, strong at long-range structure - and pretrained models (BERT: bidirectional encoder for understanding; GPT: autoregressive decoder for generation) brought pretrain-then-fine-tune to every syllabus task in Units III-V.",
              "The decisive property distinguishing the new era is contextuality. Static embeddings give one vector per type - 'bank' (river/finance) has a single representation regardless of sentence, so polysemy is frozen in. Contextual embeddings from transformers compute a vector per token occurrence conditioned on the whole sentence - 'bank' near 'river' and 'bank' near 'loan' separate automatically, which is exactly the disambiguation task of section 4.7 absorbed into the representation. Worked cosine similarities with a toy 3-dimensional embedding: king = [1.0, 0.9, 0.1], queen = [0.95, 0.85, 0.15] -> cosine 0.999; king vs banana [0.1, 0.05, 0.9] -> cosine 0.19 - geometry encoding semantics.",
              "Large language models are the fourth wave: transformer decoders scaled to hundreds of billions of parameters, instruction-tuned to follow requests, answering by in-context learning from the prompt itself. For this syllabus the consequences are concrete - NER, chunking, SRL, MT, summarization, QA and sentiment are all now transformer fine-tunes or prompts; the classical machinery of the preceding units (n-gram smoothing, CRF feature templates, WordNet walks) remains the conceptual foundation and the exam syllabus. The honest limitations: hallucination (fluent falsehoods - the summarization caveat again), inherited data bias, compute cost, and uneven multilingual coverage (Indian languages served by dedicated models such as IndicBERT/AI4Bharat efforts).",
              "Exam framing: name the four waves with one contribution each, state the distributional hypothesis, contrast static vs contextual embeddings with the 'bank' example, work one cosine similarity, and close with what LLMs changed plus two limitations. The 'bank' contrast is the most-asked single point. Then the syllabus closure: every task in Units III-V is now a transformer fine-tune or prompt, while the classical machinery - smoothing, CRF features, WordNet walks - remains the conceptual foundation the exam still tests.",
            ],
            keyTerms: [
              { term: "Distributional hypothesis", definition: "Words with similar distributions have similar meanings - the premise of all embeddings." },
              { term: "Word2vec / GloVe", definition: "Static embeddings - one dense vector per word type learned from co-occurrence." },
              { term: "Self-attention / Transformer", definition: "Every token attends to every other; parallel training, long-range structure; base of BERT/GPT." },
              { term: "Contextual embedding", definition: "A vector per token occurrence conditioned on the sentence - polysemy handled automatically." },
              { term: "LLM (large language model)", definition: "Scaled, instruction-tuned transformer trained on web text; answers by in-context learning." },
            ],
            diagram: {
              kind: "compare",
              title: "Static vs contextual embeddings",
              caption: "One vector per type vs one vector per occurrence - the polysemy problem is the dividing line.",
              left: {
                heading: "Static (word2vec, GloVe)",
                items: [
                  "One vector per word type, fixed after training",
                  "'bank' = one vector for river and finance senses",
                  "Cheap, fast, still useful for similarity and retrieval",
                  "Cannot disambiguate - sense frozen into geometry",
                ],
              },
              right: {
                heading: "Contextual (BERT-style)",
                items: [
                  "A vector per token occurrence, conditioned on the sentence",
                  "'bank' near 'river' vs near 'loan' separate automatically",
                  "Pretrain + fine-tune serves tagging, NER, QA, MT",
                  "Cost: compute, scale, hallucination in generative use",
                ],
              },
            },
            codeExample: {
              language: "python",
              caption: "cosine.py - geometry encodes semantics",
              code: `import math

def cos(u, v):
    dot = sum(a * b for a, b in zip(u, v))
    return dot / (math.sqrt(sum(a*a for a in u)) *
                  math.sqrt(sum(b*b for b in v)))

king   = [1.00, 0.90, 0.10]
queen  = [0.95, 0.85, 0.15]
banana = [0.10, 0.05, 0.90]

print(round(cos(king, queen), 3))    # 0.999  - same semantic region
print(round(cos(king, banana), 3))   # 0.19   - unrelated

# static embeddings: these vectors are fixed per type;
# contextual models recompute them per sentence, so
# 'bank' separates by context automatically`,
            },
            bullets: [
              "Four waves: count models -> static embeddings -> RNN/LSTM -> Transformer -> LLMs.",
              "Distributional hypothesis: meaning = distribution of contexts ('company it keeps').",
              "word2vec/GloVe: one vector per type; king - man + woman ~ queen (analogy arithmetic).",
              "Transformer self-attention: parallel, long-range; BERT (encoder) and GPT (decoder) pretraining.",
              "Contextual embeddings disambiguate 'bank' by sentence context - 4.7's WSD absorbed.",
              "LLMs: instruction-tuned, in-context learning; limitations - hallucination, bias, compute, multilingual gaps.",
            ],
            callout: {
              type: "exam",
              title: "The 'bank' sentence decides the question",
              body: "When asked to distinguish static and contextual embeddings, the examiner wants exactly one worked contrast: static gives 'bank' one vector, so river-bank and money-bank are identical; contextual conditions on the sentence, so the two occurrences separate. Add that this absorbs word sense disambiguation into representation learning and the answer is complete.",
            },
            examQuestions: [
              {
                q: "Trace the recent trends in NLP from word embeddings through transformers to large language models. State the distributional hypothesis, contrast static and contextual embeddings with the 'bank' example, and list two limitations of LLMs.",
                marks: 14,
                outline: [
                  "Wave 1: word2vec/GloVe static embeddings from co-occurrence",
                  "Distributional hypothesis: 'you shall know a word by the company it keeps'",
                  "Analogy arithmetic: king - man + woman ~ queen",
                  "Wave 2: RNN/LSTM sequence models; Wave 3: Transformer self-attention (2017)",
                  "BERT (encoder, understanding) vs GPT (decoder, generation); pretrain + fine-tune",
                  "Contextual embeddings: 'bank' separates by context - WSD absorbed",
                  "Wave 4: LLMs, instruction tuning, in-context learning; limits: hallucination, bias, compute",
                ],
              },
              {
                q: "Why did the Transformer replace RNNs for language tasks?",
                marks: 7,
                outline: [
                  "RNNs process tokens sequentially - no parallel training, slow at scale",
                  "Long-range dependencies fade through recurrent steps",
                  "Self-attention connects every pair of tokens directly in O(1) path length",
                  "Attention weights are learned per layer/head - better structure capture",
                  "Parallelism enabled scaling to web-scale corpora and LLMs",
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
        { topic: "N-gram LMs: chain rule, MLE, smoothing, perplexity (Unit IV)", weight: "≈ 12-15 marks", note: "The numerical heart of the paper - practise the bigram table, the 0.667-to-0.2 add-one arithmetic and one perplexity computation." },
        { topic: "POS tagging, MaxEnt features, tagsets (Unit III)", weight: "≈ 10-12 marks", note: "Feature list + softmax worked on 'Book that flight' is the standard 14-marker." },
        { topic: "Applications: MT, summarization, sentiment, QA (Unit V)", weight: "≈ 12-14 marks", note: "At least one long question; contrast approaches in tables and always connect the LM to SMT and spell checking." },
        { topic: "Ambiguity, levels of NLP, applications intro (Unit I)", weight: "≈ 8-10 marks", note: "Guaranteed definitional - the telescope sentence, the six levels, NLU vs NLG." },
        { topic: "Morphology and FSTs (Unit III)", weight: "≈ 8-12 marks", note: "Trace 'foxes' and 'cries' through two-level rules; know e-insertion and y-replacement by name." },
        { topic: "Chunking, CRFs, thematic roles, SRL (Unit IV)", weight: "≈ 8-10 marks", note: "IOB trace + the HMM-vs-CRF contrast + the passive alternation example." },
        { topic: "Encoding, segmentation, corpora, Zipf (Unit II)", weight: "≈ 6-10 marks", note: "UTF-8 byte examples, maximum-matching trace, Zipf rank x frequency rows - quick, precise marks." },
        { topic: "WordNet, WSD, MWEs, kappa (Units II-IV)", weight: "≈ 4-8 marks", note: "Short notes: Lesk overlap, PMI numbers, kappa computation, 'kick the bucket'." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Two hours a day, five days a week, with weekends for writing full answers by hand. Every algorithm in this subject is small enough to compute on paper - the bigram table, the smoothing arithmetic, the IOB trace - and that is exactly how the exam asks for them.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - the map of the subject", tasks: ["NLU vs NLG with one example each", "Six levels with one phenomenon per level", "Ambiguity taxonomy + the five classic sentences", "Spell checker pipeline + edit distance of 'recieve'"] },
        { week: "Week 2", focus: "Unit II - text as data", tasks: ["ASCII/Unicode/UTF-8 byte examples ('é' = C3 A9)", "Maximum matching trace on Chinese text + BPE", "Sentence segmentation decision tree + Dr. Rao trace", "Zipf rows, Heaps' law numbers, Cohen's kappa computation"] },
        { week: "Week 3", focus: "Unit III - morphology and words", tasks: ["Inflectional vs derivational table with 5 examples each", "FST architecture + 'foxes' and 'foxs' traces", "Heaps' law worked; open vs closed classes", "Brill's NN->VB rule and the most-frequent-tag baseline"] },
        { week: "Week 4", focus: "Unit III tagging + Unit IV language models", tasks: ["Penn tagset (12 tags) + 'book' VB/NN disambiguation", "MaxEnt: features, weights table, softmax for 'Book'", "Chain rule + bigram table + P(sentence) = 1/9", "Add-one arithmetic + Kneser-Ney's Francisco intuition"] },
        { week: "Week 5", focus: "Unit IV - structure and meaning", tasks: ["Perplexity: 9^(1/4) worked + the trend table", "CFG rules + parse tree of 'The old man saw a dog'", "IOB trace + CRF vs HMM contrast table", "WordNet relations, Lesk overlap, thematic roles + passive alternation"] },
        { week: "Week 6", focus: "Unit V + full revision", tasks: ["NLIDB query-to-SQL mapping + dialogue ellipsis", "TF-IDF sentence scores + ROUGE recall example", "Vauquois triangle + toy SMT phrase table", "QA pipeline worked example; embeddings vs transformers; two full past papers"] },
      ],
    },
    {
      id: "exam-tips",
      heading: "Exam-hall strategy",
      examTips: [
        "Every probability answer shows its factors: P(<s>I) x P(am|I) x P(Sam|am) x P(</s>|Sam) = 2/3 x 2/3 x 1/2 x 1/2 = 1/9 - skipping a factor loses the arithmetic marks.",
        "Pair every architecture with its diagram - the spell-check pipeline, the QA four-stage flow, the Vauquois triangle. The diagram earns half the marks.",
        "For smoothing questions, write both formulas (MLE and Laplace) before computing anything - the formulas carry method marks even if arithmetic slips.",
        "Name the tagset tags exactly: VBZ, VBD, VBG - writing 'verb' forfeits the tagset marks.",
        "When asked about ambiguity, give all readings of each example - 'with the telescope' instrument AND possession - not just the sentence.",
        "Connect units explicitly: the LM ranks spell-checker candidates, SMT decodes with P(f|e)P(e), Zipf's tail causes smoothing - one synthesis sentence per answer.",
        "For definitions, lead with the marked sentence (FST maps two tapes; CRF models P(y|x)) and only then elaborate - examiners scan for the formula.",
        "Time-box: 7-mark questions in 10-12 minutes, 14-mark questions in 20-22 minutes, and leave the last 10 minutes for the numerical checks.",
      ],
    },
    {
      id: "last-day",
      heading: "Last-day strategy and the slips that cost marks",
      body: [
        "The last day is for the numerical anchors, not new reading: the 1/9 sentence probability, the 0.667-to-0.2 smoothing, the 9^(1/4) = 1.73 perplexity, the kappa 0.733, the PMI 3.32-vs-1.32 pair, the TF-IDF extract. Redo each once on paper - these six computations appear in some form on nearly every paper.",
        "Then rewrite from memory the five fixed artifacts: the six levels, the Penn tag subset (12 tags), the two-level FST trace of 'foxes', the IOB trace of 'The little yellow dog barked', and the Vauquois triangle. Every 14-marker in this subject is one artifact plus two paragraphs of connected prose.",
      ],
      bullets: [
        "Reversing the conditioning direction - writing P(I|am) instead of P(am|I) - the Markov direction is the whole concept.",
        "Calling a CRF generative or saying it 'generates the sentence' - it models P(y | x) only.",
        "Computing percent agreement and calling it kappa - kappa needs P(E) from the annotator marginals.",
        "Levenshtein where Damerau is needed: 'recieve' -> 'receive' is one transposition, distance 1, not 2.",
        "Saying inflection changes part of speech - it never does; that is the test for derivation.",
        "Forgetting the brevity penalty when defining BLEU, or comparing perplexities across different test sets.",
        "Translating idioms word-by-word in the MT answer - 'kick the bucket' must map to the target idiom, and saying so is the point.",
        "Describing chunks as nested - chunks are flat and non-overlapping; nesting is what full parsing adds.",
        "Quoting exam sessions or years from memory - if the paper does not give them, do not invent them; outline marks come from content, not citations.",
      ],
    },
  ],
};
