import type { AcademicSubject } from "./types";

export const cy302: AcademicSubject = {
  "id": "cy-302",
  "code": "CY-302",
  "title": "Fundamentals of Cryptography",
  "semester": "III Semester",
  "program": "RGPV · Cyber Security",
  "tagline": "Every topic of the syllabus as one connected story: why historical ciphers fall, what perfect secrecy costs, how PRGs and block ciphers buy computational security, how hashes and MACs prove integrity, and how hard number-theory problems carry public-key encryption, signatures and TLS.",
  "description": "Five units walk from symmetric encryption and the one-time pad, through PRF-based CPA security, DES/AES, modes and MACs, into the ideal-cipher model, Merkle-Damgard and birthday attacks, authenticated encryption, then the discrete-logarithm family, elliptic curves, ElGamal, CCA-secure hybrids, digital signatures and the TLS handshake.",
  "accentColor": "#8b5cf6",
  "emoji": "FC",
  "unitCount": 5,
  "totalSections": 35,
  "units": [
    {
      "number": 1,
      "roman": "I",
      "title": "Introduction to Cryptography and Perfect Secrecy",
      "summary": "Unit I builds the vocabulary of the whole subject: the symmetric-key scheme and Kerckhoffs' principle, the historical ciphers and the cryptanalysis that killed them, computational security as the practical replacement, semantic security as the first rigorous definition, pseudorandom generators as its engine, and Shannon's perfect secrecy with the one-time pad and its limitations.",
      "chapter": {
        "number": "01",
        "title": "From Caesar to the One-Time Pad",
        "intro": "Unit I covers the syntax of symmetric encryption, historical ciphers with their cryptanalysis, computational and semantic security, pseudorandom generators, perfect secrecy and its characterization, the one-time pad, and the limitations that force computational security.",
        "inOneBreath": "A cipher is a triple (Gen, Enc, Dec) with the key, not the algorithm, kept secret. Historical ciphers fall to frequency analysis and Kasiski testing; perfect secrecy is achievable but only with a key as long as the message, used once. The one-time pad is that impossibility result made useful; semantic security plus a PRG is the practical compromise every modern cipher builds on.",
        "sections": [
          {
            "number": "1.1",
            "title": "What cryptography is - the symmetric-key scheme",
            "body": [
              "Cryptography is the discipline of protecting data so that only authorized parties can read it or vouch for it, even when the channel and often the machines are hostile. A symmetric-key encryption scheme is a triple of algorithms (Gen, Enc, Dec): Gen outputs a random key k from a key space K, Enc takes k and a plaintext m and returns a ciphertext c, and Dec takes k and c and returns m. Correctness demands Dec(k, Enc(k, m)) = m for every key and message. The attacker sees the ciphertext and everything public, but not the key.",
              "A worked example fixes the idea: the Caesar cipher with key k = 3 maps each letter forward by three positions, so the plaintext 'attack' encrypts to 'dwwdfn', and shifting back by three decrypts. The scheme is correct, yet hopelessly insecure - there are only 26 keys, so an attacker tries them all in seconds. The lesson generalizes: correctness is trivial, security is everything, and security is always defined against a specific attacker with specific powers.",
              "Kerckhoffs' principle is the governing rule of the field: assume the enemy knows the system - the algorithm, the ciphertext, the protocol - and the only secret is the key. Publishing the design and surviving public review is what makes a cipher trustworthy; secrecy of the algorithm (security by obscurity) has failed every time it was tried, from rogue ciphers to proprietary DRM. RGPV questions frame this as 'why must we assume the algorithm is public?' and expect the answer in terms of review, standardization and the impossibility of keeping large systems secret.",
              "The subject now has two halves. Symmetric cryptography (Units I to III) makes one shared key do confidentiality and integrity; public-key cryptography (Units IV and V) makes key distribution possible over open channels. Both halves are judged by the same modern method: give the attacker a precisely defined game, prove that winning it implies solving a problem believed hard. That proof style, introduced informally here, is the connective tissue of the entire course."
            ],
            "keyTerms": [
              {
                "term": "Symmetric-key scheme",
                "definition": "A triple (Gen, Enc, Dec) where one shared secret key both encrypts and decrypts."
              },
              {
                "term": "Kerckhoffs' principle",
                "definition": "The system must remain secure even if everything except the key is public knowledge."
              },
              {
                "term": "Ciphertext-only attacker",
                "definition": "The weakest adversary: sees ciphertexts only, must learn something about the plaintext."
              },
              {
                "term": "Key space",
                "definition": "The set of possible keys; small key spaces fall to exhaustive search."
              }
            ],
            "table": {
              "caption": "The three algorithms of a symmetric scheme and what each guarantees.",
              "headers": [
                "Algorithm",
                "Input",
                "Output",
                "Guarantee"
              ],
              "rows": [
                [
                  "Gen",
                  "security parameter 1^n",
                  "key k in K",
                  "k uniform over the key space"
                ],
                [
                  "Enc",
                  "key k, message m",
                  "ciphertext c",
                  "hides m from attackers without k"
                ],
                [
                  "Dec",
                  "key k, ciphertext c",
                  "message m",
                  "correctness: Dec(k, Enc(k, m)) = m"
                ]
              ]
            },
            "bullets": [
              "Symmetric scheme = (Gen, Enc, Dec) with correctness Dec(k, Enc(k, m)) = m.",
              "Caesar with k = 3: 'attack' -> 'dwwdfn' - correct but only 26 keys.",
              "Small key spaces die by exhaustive search; 26 keys fall instantly.",
              "Kerckhoffs: the algorithm is public, the key is the only secret.",
              "Security is a definition against a specific attacker, not a property of obscurity."
            ],
            "diagram": {
              "kind": "compare",
              "title": "Security by obscurity vs Kerckhoffs' principle",
              "caption": "Two theories of cipher design - only one survived the twentieth century.",
              "left": {
                "heading": "Obscurity (failed)",
                "items": [
                  "Hopes the algorithm stays secret",
                  "No review, so design flaws persist",
                  "One leak destroys the system",
                  "Examples: proprietary ciphers broken after reverse engineering"
                ]
              },
              "right": {
                "heading": "Kerckhoffs (adopted)",
                "items": [
                  "Assumes the enemy knows the system",
                  "Open review hardens the design",
                  "Only the key needs protection",
                  "Examples: DES and AES survived decades of public attack"
                ]
              }
            },
            "callout": {
              "type": "tip",
              "title": "The 26-key skeleton",
              "body": "Keep the Caesar example as your mental skeleton: every security notion in this course is a stronger attacker added to the same picture - first ciphertext-only, then chosen-plaintext (Unit II), then chosen-ciphertext (Unit V). Name the attacker and the game, and half the definition question is already answered."
            },
            "examQuestions": [
              {
                "q": "Define a symmetric-key encryption scheme with its three algorithms and the correctness requirement. State Kerckhoffs' principle and explain, with the Caesar cipher as an example, why a small key space defeats any cipher however clever its design.",
                "marks": 14,
                "outline": [
                  "Scheme = (Gen, Enc, Dec); Gen samples k uniformly from the key space",
                  "Enc(k, m) -> c; Dec(k, c) -> m; correctness: Dec(k, Enc(k, m)) = m",
                  "Caesar walkthrough: 'attack' with k = 3 becomes 'dwwdfn' and back",
                  "Only 26 keys - exhaustive search recovers the key in seconds",
                  "Kerckhoffs' principle: assume the algorithm is public; only the key is secret",
                  "Why obscurity fails: no public review, one leak destroys everything",
                  "Modern consequence: publish (DES, AES), survive attack, protect keys"
                ]
              },
              {
                "q": "Distinguish between security by obscurity and Kerckhoffs' principle, giving one historical reason why the first is rejected.",
                "marks": 7,
                "outline": [
                  "Obscurity: secrecy of the design is the protection",
                  "Kerckhoffs: the design is public; secrecy lives in the key alone",
                  "Reverse-engineered proprietary ciphers broke once leaked - no review had hardened them",
                  "Reverse-engineered ciphers broke once leaked - no review had hardened them",
                  "Modern practice: publish (DES, AES), survive review, protect keys only"
                ]
              }
            ]
          },
          {
            "number": "1.2",
            "title": "Historical ciphers I - shift and monoalphabetic substitution",
            "body": [
              "Historical ciphers are the syllabus's cast of doomed characters, each killed by a specific attack. The shift cipher generalizes Caesar: choose k in {0..25} and add it to every letter, so decryption is subtraction. Its key space is 26, and exhaustive search finishes it - but even before trying keys, the attacker notices that the ciphertext preserves the letter-frequency profile of English, with 'e' (about 12.7% of text) always appearing as the same shifted letter.",
              "The monoalphabetic substitution cipher fixes that leak by using an arbitrary permutation of the alphabet - 26! keys, about 2^88, far beyond brute force. Yet it still preserves the position-wise frequency structure: the most frequent ciphertext letter is almost surely 'e', the least frequent almost surely 'z', doubled letters map to doubled letters, and short words like 'a' and 'the' betray themselves. Frequency analysis plus digram guessing recovers most of the key from a paragraph of ciphertext; the remaining letters fall to contextual guessing. The lesson: a large key space is necessary but nowhere near sufficient.",
              "A compact worked example shows the leak concretely. Encrypt 'meet me at the corner' under a fixed substitution: every 'e' lands on the same ciphertext symbol, so a 5-letter word appearing twice at the start is immediately 'meet me' or 'see us' - and the attacker has two crib pairs before doing any counting. This is why the syllabus pairs each cipher with its attack: cipher, attack, repair, new attack is the historical engine that produced modern cryptography's demand for formal definitions.",
              "For the exam, present each cipher as a triple: construction (what the key is), key-space size (2^6 for shift, 2^88 for substitution), and the attack that breaks it (exhaustive search or frequency analysis). Examiners consistently reward the observation that frequency analysis works because these ciphers are deterministic and letter-preserving - two properties modern ciphers deliberately destroy with randomness and diffusion."
            ],
            "keyTerms": [
              {
                "term": "Shift cipher",
                "definition": "Adds a fixed k mod 26 to every letter; 26 keys; broken by exhaustive search and frequency analysis."
              },
              {
                "term": "Monoalphabetic substitution",
                "definition": "A fixed random permutation of the alphabet; 26! keys yet still letter-frequency preserving."
              },
              {
                "term": "Frequency analysis",
                "definition": "Matching ciphertext letter frequencies to language statistics to recover the key."
              },
              {
                "term": "Crib",
                "definition": "A guessed plaintext fragment used to anchor key recovery."
              }
            ],
            "codeExample": {
              "language": "python",
              "caption": "caesar.py - the shift cipher and its undoing",
              "code": "ALPHA = \"abcdefghijklmnopqrstuvwxyz\"\n\ndef encrypt(pt: str, k: int) -> str:\n    out = \"\"\n    for ch in pt.lower():\n        out += ALPHA[(ALPHA.index(ch) + k) % 26] if ch.isalpha() else ch\n    return out\n\ndef decrypt(ct: str, k: int) -> str:\n    return encrypt(ct, 26 - k)\n\nprint(encrypt(\"attack\", 3))    # dwwdfn\nprint(decrypt(\"dwwdfn\", 3))    # attack\n# exhaustive search: 26 candidate keys recover any message instantly\nfor k in range(26):\n    if \"attack\" in decrypt(\"dwwdfn\", k):\n        print(\"key found:\", k)  # 3"
            },
            "bullets": [
              "Shift cipher: same k on every letter; 26 keys; exhaustive search kills it.",
              "Monoalphabetic substitution: 26! keys but the frequency profile survives.",
              "'e' at 12.7% of English text anchors frequency analysis immediately.",
              "Doubled letters and short words ('the', 'a') are cribs that finish the job.",
              "Large key space is necessary, not sufficient - structure is the real leak."
            ],
            "diagram": {
              "kind": "flow",
              "title": "How frequency analysis breaks a substitution cipher",
              "caption": "Four steps from raw ciphertext to a recovered key - no brute force needed.",
              "steps": [
                {
                  "label": "Count symbols",
                  "note": "frequency profile of the ciphertext"
                },
                {
                  "label": "Match to language",
                  "note": "most frequent -> 'e', rare -> 'z'"
                },
                {
                  "label": "Plant cribs",
                  "note": "short words and doubles fix more letters"
                },
                {
                  "label": "Complete by context",
                  "note": "remaining letters read out of guesses"
                }
              ]
            },
            "callout": {
              "type": "exam",
              "title": "The cipher-attack pair",
              "body": "Never name a historical cipher without naming its attack: shift - exhaustive search; substitution - frequency analysis; Vigenere - Kasiski test then per-column analysis. The pairing is what the question is really asking, and the key-space number (2^6, 2^88, 2^n) is the free mark inside it."
            },
            "examQuestions": [
              {
                "q": "Describe the shift cipher and the monoalphabetic substitution cipher. For each, state the size of the key space, demonstrate encryption of a short word, and explain the attack that defeats it despite the key-space size.",
                "marks": 14,
                "outline": [
                  "Shift cipher: add fixed k mod 26; key space 26",
                  "Example: 'attack' with k = 3 -> 'dwwdfn'",
                  "Shift falls to exhaustive search - 26 trials",
                  "Substitution: arbitrary permutation; key space 26! (about 2^88)",
                  "Frequency analysis: 'e' -> most common ciphertext symbol",
                  "Cribs: doubled letters, short words anchor more of the key",
                  "Moral: key-space size is necessary, not sufficient; structure leaks"
                ]
              },
              {
                "q": "Why does a large key space fail to save the monoalphabetic substitution cipher? Illustrate with one frequency-analysis observation.",
                "marks": 7,
                "outline": [
                  "26! keys exceed brute force, yet the cipher is letter-preserving",
                  "English 'e' is about 12.7% of text and maps to one fixed symbol",
                  "Matching profiles plus cribs recovers the key from a paragraph",
                  "Positional letter identity is preserved by the cipher",
                  "Short words and doubled letters act as cribs",
                  "Conclusion: structure leaks regardless of key-space size"
                ]
              }
            ]
          },
          {
            "number": "1.3",
            "title": "Historical ciphers II - the Vigenere cipher and its cryptanalysis",
            "body": [
              "The Vigenere cipher was 'le chiffre indechiffrable' for three centuries: it applies a different shift to each letter, cycling through a keyword. Plaintext letter is added to key letter mod 26, so the same plaintext letter encrypts differently at different positions and single-letter frequency analysis collapses. With key 'CAT', plaintext 'hello' becomes 'jeeno' - h+c=J, e+a=E, l+t=E, l+c=N, o+a=O. The key space grows to 26^L for keyword length L, and the cipher was declared unbreakable in the 19th century.",
              "The Kasiski test destroyed that reputation. Repeated plaintext segments at distances that are multiples of the key length produce repeated ciphertext segments; the greatest common divisor of the observed distances reveals (or shortlists) L. Once L is known, the ciphertext splits into L columns, and each column is a simple shift cipher that falls to per-column frequency analysis. A 6-letter key reduces to six Caesar problems - roughly 26 x 6 trials guided by statistics, not 26^6 blind ones.",
              "The deeper lesson is the periodicity leak: any cipher that reuses key material in a fixed pattern leaks the pattern's period through the ciphertext. This exact weakness returns in modern dress twice in this course - reusing an IV in CBC mode (Unit II) and reusing a one-time pad (section 1.6) both convert 'perfectly random-looking' ciphertext into xor-differences that leak plaintext structure. History is not decorative here; it is the intuition pump for every randomness rule that follows.",
              "Exam answers should walk one full round trip: key, encryption table, ciphertext, Kasiski observation, column split, per-column shifts recovered, plaintext restored. RGPV papers frequently ask 'explain the cryptanalysis of the Vigenere cipher' precisely to test whether the student can connect the period-finding step to the divide-and-conquer that follows it - the Kasiski test is the marks, the frequency analysis is the follow-through."
            ],
            "keyTerms": [
              {
                "term": "Vigenere cipher",
                "definition": "Polyalphabetic shift cipher keyed by a cycling keyword; shifts per position mod 26."
              },
              {
                "term": "Kasiski test",
                "definition": "GCD of distances between repeated ciphertext segments reveals the keyword length."
              },
              {
                "term": "Periodicity leak",
                "definition": "Fixed-pattern key reuse shows the pattern's period in the ciphertext."
              },
              {
                "term": "Column-wise frequency analysis",
                "definition": "Once L is known, each of the L columns is an independent shift cipher."
              }
            ],
            "codeExample": {
              "language": "python",
              "caption": "vigenere.py - key 'CAT' on 'hello'",
              "code": "ALPHA = \"abcdefghijklmnopqrstuvwxyz\"\n\ndef vigenere(pt: str, key: str) -> str:\n    out, j = \"\", 0\n    for ch in pt.lower():\n        if ch.isalpha():\n            shift = ALPHA.index(key[j % len(key)])\n            out += ALPHA[(ALPHA.index(ch) + shift) % 26]\n            j += 1\n        else:\n            out += ch\n    return out\n\nprint(vigenere(\"hello\", \"cat\"))   # jeeno\n# Kasiski: gcd of gaps between repeated segments suggests len(key)"
            },
            "bullets": [
              "Vigenere: shift each letter by the cycling keyword letter mod 26.",
              "'hello' under key 'CAT' -> 'jeeno' - per-position shifts vary.",
              "Single-letter frequency analysis fails; the key space is 26^L.",
              "Kasiski test: repeated segments' distance GCD reveals L.",
              "With L known, each column is a plain shift cipher - six Caesar problems.",
              "The periodicity leak returns as IV reuse in CBC and pad reuse in OTP."
            ],
            "diagram": {
              "kind": "fork",
              "title": "Attacking the Vigenere cipher",
              "caption": "The attacker's decision tree: find the period first, then divide and conquer.",
              "start": "Ciphertext of unknown key",
              "branches": [
                {
                  "label": "Kasiski test succeeds",
                  "outcome": "GCD of repeat gaps gives L; split columns and shift-solve each",
                  "good": true
                },
                {
                  "label": "No visible repeats",
                  "outcome": "try index-of-coincidence per candidate L; pick the peak",
                  "good": true
                },
                {
                  "label": "Assume huge L and give up",
                  "outcome": "wrong - short keys are the norm and period-finding is cheap",
                  "good": false
                }
              ]
            },
            "callout": {
              "type": "tip",
              "title": "Connect history to modern rules",
              "body": "The strongest exam answers close the loop: Vigenere's flaw is key reuse in a periodic pattern, and modern ciphers ban exactly that - CBC demands a fresh random IV, CTR a fresh nonce, and the one-time pad forbids using a pad twice. Same disease, three centuries apart."
            },
            "examQuestions": [
              {
                "q": "Explain the Vigenere cipher with a worked example, and describe its complete cryptanalysis: the Kasiski test for the keyword length followed by column-wise frequency analysis.",
                "marks": 14,
                "outline": [
                  "Construction: shift each letter by the cycling keyword letter mod 26",
                  "Worked example: 'hello' with key 'CAT' -> 'jeeno' (show the additions)",
                  "Key space 26^L; single-letter frequency analysis fails",
                  "Kasiski test: repeated segments at multiples of L; GCD reveals L",
                  "Split ciphertext into L columns",
                  "Each column is a shift cipher - solve by per-column frequency",
                  "Moral: periodic key reuse leaks the period; links to IV/OTP reuse rules"
                ]
              },
              {
                "q": "State the Kasiski test and explain why knowing only the keyword length reduces the Vigenere cipher to L shift ciphers.",
                "marks": 7,
                "outline": [
                  "Measure gaps between repeated ciphertext segments; take the GCD",
                  "The GCD is (a divisor of) the keyword length L",
                  "Position i belongs to column i mod L - one fixed shift per column",
                  "Each column is a Caesar cipher; 26 candidates each, statistics-guided",
                  "Index of coincidence confirms the period statistically",
                  "Column i holds positions i mod L - one fixed shift each"
                ]
              }
            ]
          },
          {
            "number": "1.4",
            "title": "Computational security",
            "body": [
              "Perfect secrecy (section 1.6) demands keys as long as messages - unusable at scale. Computational security is the practical settlement: a scheme is secure if every efficient attacker succeeds with only negligible probability within a feasible number of steps. Two dials define it precisely: a statistical security parameter n (say 128), and the requirement that any attack succeeding with probability better than negligible (roughly 2^-n) must run in time infeasible - conventionally beyond 2^80 to 2^128 operations.",
              "The measurement is concrete. A 56-bit key needs at most 2^56 trials - DES fell to a purpose-built machine (EFF 'Deep Crack', 1998) in days. An 80-bit key is about 2^80 trials, already beyond any publicly known budget; 128 bits exceeds the energy-limited bound of computing - literally every computer on Earth running for longer than the age of the universe would not enumerate 2^128 states with the energy available. That is why AES-128 is the default and 256-bit keys are the paranoid margin, not because 128 is 'twice' 64 but because the exponential doubles the work with every single bit added.",
              "Worked example: an attacker against a 128-bit key testing one trillion (2^40) keys per second needs 2^88 seconds - about 10 trillion years. Halving the key to 64 bits cuts the work to 2^24 seconds at that rate - under 200 days. Every bit of key length multiplies the attacker's cost by 2, which is why the exam's standard numerical is 'how long to brute-force an n-bit key at rate r per second' - answer: 2^n / r seconds, then convert units and compare against a human-meaningful anchor.",
              "Computational security is also the first appearance of the modern proof style: rather than 'no attacker ever', the claim is 'no efficient attacker wins the defined game except with negligible probability'. The definition is relative - secure against today's computers and today's algorithms - which is why key sizes creep upward (56 -> 80 -> 128) and why quantum computing, by giving Grover's algorithm a quadratic speed-up on search, effectively halves the security level of symmetric keys (128-bit key -> about 64-bit post-quantum security)."
            ],
            "keyTerms": [
              {
                "term": "Computational security",
                "definition": "Every efficient attacker succeeds with at most negligible probability in feasible time."
              },
              {
                "term": "Security parameter n",
                "definition": "The dial that scales the scheme; security statements are made as functions of n."
              },
              {
                "term": "Negligible probability",
                "definition": "A probability smaller than the inverse of any polynomial in n - effectively zero in practice."
              },
              {
                "term": "Bit security",
                "definition": "An attack needing 2^k operations grants the scheme k bits of security."
              },
              {
                "term": "Grover's algorithm",
                "definition": "Quantum search giving a quadratic speed-up - effectively halving symmetric key strength."
              }
            ],
            "table": {
              "caption": "Key length vs brute-force cost - the numbers behind 'secure'.",
              "headers": [
                "Key length",
                "Trials needed",
                "At 2^40 keys/second",
                "Verdict"
              ],
              "rows": [
                [
                  "56 bits (DES)",
                  "2^56",
                  "about 78 days",
                  "broken - Deep Crack, 1998"
                ],
                [
                  "80 bits (legacy)",
                  "2^80",
                  "about 30 million years",
                  "retired, below modern margin"
                ],
                [
                  "128 bits (AES-128)",
                  "2^128",
                  "about 10^22 years",
                  "standard default"
                ],
                [
                  "256 bits (AES-256)",
                  "2^256",
                  "beyond physical energy limits",
                  "long-term / paranoid margin"
                ]
              ]
            },
            "bullets": [
              "Computational security trades 'impossible' for 'infeasible for efficient attackers'.",
              "Two dials: security parameter n and the negligible-success bound.",
              "Attack cost for an n-bit key: 2^n / rate seconds - every bit doubles the work.",
              "DES's 56 bits fell in days in 1998; 128 bits is the modern default.",
              "Quantum search (Grover) halves effective symmetric key strength."
            ],
            "diagram": {
              "kind": "pyramid",
              "title": "Security levels by key length",
              "caption": "The exponential ladder: each tier doubles the work per added bit.",
              "tiers": [
                {
                  "label": "2^40 - toy",
                  "note": "minutes to break; teaching examples only"
                },
                {
                  "label": "2^80 - legacy",
                  "note": "retired; below the modern margin"
                },
                {
                  "label": "2^128 - standard",
                  "note": "AES-128, the default everywhere"
                },
                {
                  "label": "2^256 - long-term",
                  "note": "beyond energy limits; future-proof margin"
                }
              ]
            },
            "callout": {
              "type": "exam",
              "title": "The numerical they always set",
              "body": "'How long to brute-force a 64-bit key at 10^12 keys per second?' Write 2^64 / 10^12 = about 18,400 seconds - roughly 5 hours - and conclude 64 bits is not enough today. Show the division and one unit conversion; the arithmetic is the marks, the conclusion sentence is the bonus."
            },
            "examQuestions": [
              {
                "q": "Define computational security, distinguishing it from perfect secrecy. Explain the role of the security parameter and negligible success probability, and compute the brute-force time for a 128-bit key at 2^40 trials per second.",
                "marks": 14,
                "outline": [
                  "Definition: efficient attackers fail except with negligible probability",
                  "Contrast with perfect secrecy: information-theoretic, no time bound needed",
                  "Security parameter n scales the scheme; negligible means below 1/poly(n)",
                  "Brute force: 2^128 / 2^40 = 2^88 seconds",
                  "2^88 seconds is about 10^19 years - infeasible",
                  "Every key bit doubles the attacker's work - the exponential ladder",
                  "Quantum caveat: Grover halves effective key strength"
                ]
              },
              {
                "q": "A system uses 64-bit keys and an attacker tests 2^40 keys per second. Estimate the exhaustive-search time and state whether the key length is acceptable today.",
                "marks": 7,
                "outline": [
                  "Work = 2^64 / 2^40 = 2^24 seconds",
                  "2^24 seconds is about 194 days of continuous search",
                  "Parallel hardware and botnets shrink it further - unacceptable",
                  "Modern minimum: 128 bits",
                  "2^64 / 2^40 = 2^24 seconds - about 194 days",
                  "Parallel hardware and botnets shrink it further",
                  "Modern minimum is 128 bits - every bit doubles the work"
                ]
              }
            ]
          },
          {
            "number": "1.5",
            "title": "Semantic security and pseudorandom generators",
            "body": [
              "Semantic security (equivalently, ciphertext indistinguishability) is the first rigorous confidentiality definition: no efficient attacker, given two messages m0 and m1 of its own choosing and one ciphertext Enc(k, mb) for a secret random bit b, can guess b with probability better than 1/2 plus negligible. 'Semantic' says the attacker learns nothing about the plaintext beyond its length; 'indistinguishable' says the two possible ciphertexts look identical to any test. Length is explicitly allowed to leak - no encryption scheme can hide it.",
              "The engine that achieves it is the pseudorandom generator. A PRG G stretches a short truly-random seed s into a long string G(s) that no efficient test can distinguish from uniform randomness. The PRG-based stream cipher then encrypts by XOR: c = m XOR G(s) for a fresh random seed s sent alongside (or a nonce paired with the key). Decryption is identical - XOR with the same keystream - because XOR is its own inverse: (m XOR t) XOR t = m.",
              "A worked example at bit level: message 1011, keystream 0110, ciphertext 1101; XOR again with 0110 and 1011 returns. Security reduces cleanly: if the keystream were truly random and never reused, this is a one-time pad (perfect secrecy); since G(s) is only pseudorandom, the scheme is exactly as secure as G is unpredictable - semantic security holds if and only if G is a secure PRG. One seed stretched to gigabytes of keystream is why stream ciphers are fast enough for Wi-Fi and disk encryption.",
              "The lethal rule, already met in section 1.3's periodicity leak: never reuse a keystream. Reusing seed s on two messages gives c1 XOR c2 = m1 XOR m2 - the pads cancel, and XOR of two English texts is famously easy to separate into both. The exam standard question states this identity and asks why it breaks semantic security: the attacker now holds structure about the plaintexts without ever holding the key. Fresh randomness per message is not an optimization detail; it is the security definition made operational."
            ],
            "keyTerms": [
              {
                "term": "Semantic security",
                "definition": "No efficient attacker distinguishes Enc(k, m0) from Enc(k, m1) for its chosen messages."
              },
              {
                "term": "Pseudorandom generator (PRG)",
                "definition": "Deterministically stretches a short seed into a long string indistinguishable from random."
              },
              {
                "term": "Keystream",
                "definition": "The PRG output XORed with the plaintext; must be fresh for every message."
              },
              {
                "term": "Seed reuse attack",
                "definition": "Two ciphertexts under one keystream XOR to m1 XOR m2, leaking both."
              }
            ],
            "codeExample": {
              "language": "python",
              "caption": "stream.py - XOR encryption with a fresh key",
              "code": "import os\n\ndef xor(a: bytes, b: bytes) -> bytes:\n    return bytes(x ^ y for x, y in zip(a, b))\n\nkey = os.urandom(16)             # fresh random keystream - used ONCE\nmsg = b\"meet at midnight\"\n\nct = xor(msg, key)               # attacker sees ct only\npt = xor(ct, key)                # receiver XORs the same stream back\nprint(pt.decode())               # meet at midnight\n\n# reuse the key and the pads cancel:\nleak = xor(b\"msg one.........\", key)\nprint(xor(ct, leak)[:5])         # plaintext-difference, no key needed"
            },
            "bullets": [
              "Semantic security = ciphertext indistinguishability for chosen message pairs.",
              "Length leakage is unavoidable and allowed by the definition.",
              "PRG: short seed -> long pseudorandom keystream; XOR does the encryption.",
              "Security claim: PRG-based cipher is semantically secure iff G is a secure PRG.",
              "Keystream reuse gives c1 XOR c2 = m1 XOR m2 - both plaintexts exposed.",
              "Fresh randomness per message is the definition made operational."
            ],
            "diagram": {
              "kind": "pipeline",
              "title": "A PRG-based stream cipher",
              "caption": "Seed to keystream to ciphertext - the same pipeline decrypts by re-XOR.",
              "stages": [
                {
                  "label": "Seed s",
                  "note": "truly random, k bits"
                },
                {
                  "label": "PRG G",
                  "note": "stretch to n >> k bits"
                },
                {
                  "label": "Keystream t",
                  "note": "pseudorandom, never reused"
                },
                {
                  "label": "XOR",
                  "note": "c = m XOR t"
                },
                {
                  "label": "Decrypt",
                  "note": "m = c XOR t"
                }
              ]
            },
            "callout": {
              "type": "warning",
              "title": "Reuse is not a corner case - it is the break",
              "body": "The famous WEP failure was IV reuse producing repeated keystreams. When asked about stream ciphers, always state c1 XOR c2 = m1 XOR m2 and add that the keystream must be derived from a fresh nonce per message. Examiners look for that identity as proof you understand why randomness is load-bearing."
            },
            "examQuestions": [
              {
                "q": "Define semantic security. Explain how a pseudorandom generator yields a symmetric cipher, prove correctness of the XOR construction, and show why keystream reuse destroys security.",
                "marks": 14,
                "outline": [
                  "Semantic security: attacker picks m0, m1; cannot identify which was encrypted",
                  "Equivalent formulation: ciphertexts computationally indistinguishable",
                  "PRG stretches seed s into keystream t = G(s)",
                  "Enc: c = m XOR t; Dec: m = c XOR t since XOR is self-inverse",
                  "Bit walkthrough: 1011 XOR 0110 = 1101; 1101 XOR 0110 = 1011",
                  "Security iff G is a secure PRG - reduction argument",
                  "Reuse: c1 XOR c2 = m1 XOR m2; pads cancel, structure leaks (WEP)"
                ]
              },
              {
                "q": "Messages m1 and m2 are encrypted with the same keystream. Derive what the attacker obtains from the two ciphertexts and explain the consequence.",
                "marks": 7,
                "outline": [
                  "c1 XOR c2 = (m1 XOR t) XOR (m2 XOR t) = m1 XOR m2",
                  "The key material cancels completely",
                  "XOR of two structured texts is easy to separate into both",
                  "Conclusion: keystreams/IVs/nonce pairs must be fresh per message",
                  "c1 XOR c2 = (m1 XOR t) XOR (m2 XOR t) = m1 XOR m2",
                  "The mask cancels - plaintext structure leaks without the key",
                  "WEP's IV reuse is the historical case"
                ]
              }
            ]
          },
          {
            "number": "1.6",
            "title": "Perfect secrecy, its characterization and the one-time pad",
            "body": [
              "Perfect secrecy is the strongest confidentiality definition that can be stated: the ciphertext reveals nothing whatsoever about the plaintext, even to an attacker with unlimited computing power. Formally, for every pair of messages m0, m1 of equal length and every ciphertext c, Pr[M = m0 | C = c] = Pr[M = m0] - the posterior equals the prior. Shannon proved the characterization: perfect secrecy is possible only when the key space is at least as large as the message space, because the ciphertext must be able to mask every possible plaintext equally.",
              "The one-time pad achieves the bound. Key k is a uniformly random string as long as the message; encryption is c = m XOR k; decryption is m = c XOR k. Worked example in nibbles: m = 1011, k = 0110 gives c = 1101; the receiver XORs 0110 back and recovers 1011. Perfect secrecy holds because for any ciphertext c and any plaintext m there is exactly one key (k = m XOR c) producing that pair, so all plaintexts remain equally likely given c - the uniform key washes out every clue.",
              "The word 'one-time' carries the whole limitation. Reusing k on m1 and m2 gives c1 XOR c2 = m1 XOR m2 - the mask cancels itself, and the attacker holds plaintext structure without ever learning k. Two-time pads have been broken in practice: the VENONA decryptions of reused Soviet pads are the standard historical citation. Combined with the distribution burden - the key is as long as all traffic and must be delivered by a channel as secure as the message itself - the OTP is an impossibility result in utility: it proves how expensive information-theoretic secrecy is.",
              "Shannon's other characterization worth quoting in exams: perfect secrecy requires the key to be used once, be uniformly random, and be at least as long as the message; equivalently H(M) = H(M | C) - the entropy of the message is unchanged by seeing the ciphertext. The exam favourite asks 'why is the one-time pad impractical?' - answer with the three costs: key length equals message length, single use only, secure key distribution required - and then pivot to computational security as the settlement (section 1.7)."
            ],
            "keyTerms": [
              {
                "term": "Perfect secrecy",
                "definition": "Pr[M = m | C = c] = Pr[M = m] - ciphertext leaks nothing, even to unbounded attackers."
              },
              {
                "term": "One-time pad",
                "definition": "c = m XOR k with k uniform, as long as m, used once; achieves perfect secrecy."
              },
              {
                "term": "Shannon's theorem",
                "definition": "Perfect secrecy requires |K| >= |M|; the OTP meets the bound exactly."
              },
              {
                "term": "Two-time pad",
                "definition": "Pad reuse leaking m1 XOR m2; broken historically in the VENONA project."
              }
            ],
            "table": {
              "caption": "What pad reuse costs - the mask cancels itself.",
              "headers": [
                "Quantity",
                "Expression",
                "What the attacker learns"
              ],
              "rows": [
                [
                  "Ciphertext 1",
                  "c1 = m1 XOR k",
                  "looks perfectly random"
                ],
                [
                  "Ciphertext 2",
                  "c2 = m2 XOR k",
                  "looks perfectly random"
                ],
                [
                  "XOR the two",
                  "c1 XOR c2 = m1 XOR m2",
                  "the key is gone - plaintext structure leaks"
                ]
              ]
            },
            "bullets": [
              "Perfect secrecy: posterior Pr[M = m | C = c] equals the prior Pr[M = m].",
              "Shannon's bound: perfect secrecy needs |K| >= |M|.",
              "OTP: c = m XOR k; each (m, c) pair maps to exactly one k - no leak.",
              "Nibble walkthrough: 1011 XOR 0110 = 1101; XOR back restores 1011.",
              "Reuse leaks m1 XOR m2 - VENONA is the historical case.",
              "Costs: key as long as the message, single use, secure distribution."
            ],
            "diagram": {
              "kind": "flow",
              "title": "One-time pad round trip",
              "caption": "The same XOR both hides and reveals - but only with a fresh, uniform key.",
              "steps": [
                {
                  "label": "Key k",
                  "note": "uniform random, length = message"
                },
                {
                  "label": "Encrypt",
                  "note": "c = m XOR k"
                },
                {
                  "label": "Transmit",
                  "note": "attacker sees only c"
                },
                {
                  "label": "Decrypt",
                  "note": "m = c XOR k - exact recovery"
                },
                {
                  "label": "Discard k",
                  "note": "never reuse - reuse cancels the mask"
                }
              ]
            },
            "callout": {
              "type": "exam",
              "title": "Quote the entropy identity",
              "body": "For full marks on the characterization, write H(M) = H(M | C) - seeing the ciphertext leaves the message entropy untouched - and Shannon's size condition |K| >= |M|. These two lines are the 'characterizations of perfect secrecy' named verbatim in the syllabus."
            },
            "examQuestions": [
              {
                "q": "Define perfect secrecy and state its Shannon characterization. Explain how the one-time pad achieves it with a bit-level walkthrough, and list the limitations that make it impractical.",
                "marks": 14,
                "outline": [
                  "Definition: Pr[M = m | C = c] = Pr[M = m] for all m, c",
                  "Shannon: requires |K| >= |M|; equivalently H(M) = H(M | C)",
                  "OTP: c = m XOR k with uniform k of message length",
                  "Walkthrough: m = 1011, k = 0110, c = 1101; XOR back restores m",
                  "Uniqueness: k = m XOR c is the only key producing (m, c) - no leak",
                  "Limitation 1: key as long as the message; limitation 2: one use only",
                  "Limitation 3: distribution needs a channel as secure as the message"
                ]
              },
              {
                "q": "Why must the one-time pad never be reused? Support your answer with the XOR identity and one historical example.",
                "marks": 7,
                "outline": [
                  "Reuse: c1 XOR c2 = m1 XOR m2",
                  "The uniform mask cancels; plaintext structure leaks without the key",
                  "VENONA: reused Soviet pads broken by US/UK cryptanalysts",
                  "Rule generalized: any keystream/IV reuse breaks confidentiality",
                  "VENONA: reused Soviet pads broken by cryptanalysts",
                  "Generalize: any keystream or IV reuse breaks confidentiality"
                ]
              }
            ]
          },
          {
            "number": "1.7",
            "title": "Limitations of perfect secrecy - the case for computational security",
            "body": [
              "Perfect secrecy's limitations are structural, not engineering details. Shannon's bound forces the key space to be at least the message space, so the key is as long as all traffic ever encrypted. The pad is single-use - reuse converts perfect secrecy into plaintext leakage - so key management scales linearly with traffic volume. And distribution is circular: delivering the pad requires a channel already as secure as what the pad protects. No practical system - banking, messaging, the web - can meet these three costs simultaneously.",
              "The settlement is computational security, adopted in section 1.4: relax 'no attacker with infinite time' to 'no efficient attacker with negligible advantage'. The gain is enormous - a 128-bit key protects terabytes of traffic, is reused safely inside well-designed modes, and fits in hardware security modules. The price is conditional truth: security holds only while the underlying hardness assumption (PRG unpredictability, discrete logarithms, factoring) resists algorithmic and hardware progress. History prices this honestly - DES's 56 bits were 'secure' for two decades and then fell in days.",
              "A worked comparison makes the trade tangible. The OTP protecting a 1 GB backup needs a 1 GB key, delivered and stored securely, used once, then destroyed - the 'encrypted' backup is now twice as big and the key has all the same protection problems as the data. AES-128 protecting the same backup needs a 16-byte key and an authenticated mode; the entire security burden moves to key management of 16 bytes plus confidence in the algorithm. That asymmetry - terabytes protected by 16 bytes - is the entire value proposition of modern cryptography.",
              "For the exam, this section is the bridge sentence of the whole unit: perfect secrecy is achievable but unaffordable; computational security is affordable and provable against explicit hardness assumptions; everything from Unit II onward lives on the computational side. State the three limitations in one line each, then the settlement in one line, and the question is fully answered - examiners set it as a 7-marker exactly to test whether students can connect Shannon's impossibility pricing to why AES exists."
            ],
            "keyTerms": [
              {
                "term": "Shannon bound",
                "definition": "|K| >= |M| - perfect secrecy cannot compress the key below the message."
              },
              {
                "term": "Single-use constraint",
                "definition": "Perfect secrecy collapses on key reuse; volume of traffic scales key volume."
              },
              {
                "term": "Distribution circularity",
                "definition": "Delivering the pad needs a channel already as secure as the pad protects."
              },
              {
                "term": "Hardness assumption",
                "definition": "The computational problem (PRG, DLP, factoring) whose difficulty the scheme's security rests on."
              }
            ],
            "table": {
              "caption": "Perfect secrecy vs computational security - the pricing.",
              "headers": [
                "Dimension",
                "Perfect secrecy (OTP)",
                "Computational security (AES)"
              ],
              "rows": [
                [
                  "Key length",
                  "as long as the message",
                  "128 or 256 bits, fixed"
                ],
                [
                  "Reuse",
                  "never - single use only",
                  "safe inside proper modes with IVs"
                ],
                [
                  "Assumption",
                  "none - unconditional",
                  "PRG / block cipher hardness"
                ],
                [
                  "Scalability",
                  "key volume grows with traffic",
                  "one key protects terabytes"
                ]
              ]
            },
            "bullets": [
              "Limitation 1: Shannon's bound makes the key as long as the message.",
              "Limitation 2: single use - reuse leaks m1 XOR m2.",
              "Limitation 3: distribution is circular - the pad needs a secure channel.",
              "Settlement: efficient attackers with negligible advantage - not infinite ones.",
              "Price of the settlement: conditional security under hardness assumptions.",
              "The bridge: Units II-V all live on the computational side of this line."
            ],
            "diagram": {
              "kind": "compare",
              "title": "What you buy, what you pay",
              "caption": "Unconditional secrecy at impossible cost vs conditional secrecy at practical cost.",
              "left": {
                "heading": "Perfect secrecy",
                "items": [
                  "Unconditional - no hardness assumption",
                  "Key as long as the message, used once",
                  "Distribution circularity",
                  "Verdict: a theorem, not a product"
                ]
              },
              "right": {
                "heading": "Computational security",
                "items": [
                  "Security under explicit hardness assumptions",
                  "Fixed 128/256-bit keys, reusable",
                  "Scales to terabytes with one key",
                  "Verdict: every deployed cipher since DES"
                ]
              }
            },
            "callout": {
              "type": "tip",
              "title": "The unit's bridge sentence",
              "body": "Memorize one line and use it to close Unit I answers: 'Perfect secrecy is achievable but unaffordable; computational security is affordable, conditional, and the foundation of every cipher that follows.' It converts a definition question into a narrative conclusion - exactly what examiners reward."
            },
            "examQuestions": [
              {
                "q": "State the three structural limitations of perfect secrecy and explain how computational security resolves them. What new risk does the settlement introduce?",
                "marks": 7,
                "outline": [
                  "Limitation 1: |K| >= |M| - key as long as all traffic",
                  "Limitation 2: single use - reuse leaks m1 XOR m2",
                  "Limitation 3: distribution needs an already-secure channel",
                  "Resolution: efficient-attacker model with negligible advantage",
                  "Gain: fixed 128/256-bit keys, reusable, scalable",
                  "New risk: security is conditional on hardness assumptions",
                  "Evidence: DES secure for two decades, then broken in days"
                ]
              },
              {
                "q": "Compare encrypting a 1 GB backup with a one-time pad versus AES-128. Which costs dominate each?",
                "marks": 7,
                "outline": [
                  "OTP: 1 GB key, delivered securely, used once, then destroyed",
                  "The key has exactly the protection problems of the data itself",
                  "AES-128: a 16-byte key plus an authenticated mode",
                  "Cost shifts to key management and trust in the algorithm",
                  "OTP: 1 GB key carrying the data's own protection problems",
                  "AES-128: a 16-byte key plus an authenticated mode"
                ]
              }
            ]
          }
        ]
      }
    },
    {
      "number": 2,
      "roman": "II",
      "title": "CPA-Secure Ciphers, Block Ciphers, Modes and MACs",
      "summary": "Unit II upgrades the attacker to chosen-plaintext and pays for it: PRFs yield CPA-secure ciphers, DES and AES give the block primitive, modes of operation compose blocks into message encryption, message authentication codes add integrity with CBC-MAC and information-theoretic MACs, and cryptographic hash functions close the unit.",
      "chapter": {
        "number": "02",
        "title": "Building Secure Primitives",
        "intro": "Unit II covers CPA security from pseudorandom functions, the DES and AES block ciphers, the standard modes of operation, message authentication codes including the information-theoretic construction, and cryptographic hash functions.",
        "inOneBreath": "A PRF turns a PRG's unpredictability into a keyed family that defeats chosen-plaintext attackers; DES and AES are its industrial form. Modes compose block calls per message - ECB leaks, CBC needs a random IV, CTR is parallelizable. MACs add integrity: CBC-MAC for fixed lengths, (m*k1 + k2) mod p for information-theoretic security; hashes compress with collision resistance.",
        "sections": [
          {
            "number": "2.1",
            "title": "Pseudorandom functions and CPA security",
            "body": [
              "Unit I's attacker only watched ciphertexts; the chosen-plaintext attacker (CPA) is stronger - it may request encryptions of any messages of its choice before guessing which of two fresh messages was encrypted. A scheme is CPA-secure if no efficient attacker wins this game with probability better than 1/2 plus negligible. The upgrade matters because real attackers often can inject chosen data (form fields, protocol headers), so CPA is the minimum honest standard for encryption in use.",
              "The tool that meets the standard is the pseudorandom function: a keyed family F(k, .) where an efficient attacker with oracle access to F(k, x) cannot distinguish it from a truly random function. A PRF is what a PRG looks like when the seed indexes an entire function rather than one long string - evaluate F(k, i) to get the i-th keystream block on demand. The gold-standard construction is the block cipher: a PRF whose input and output lengths are equal (typically 128 bits), invertible under the key.",
              "The CPA-secure construction composes them: to encrypt message m with key k and nonce n, output (n, F(k, n) XOR m) - a fresh nonce selects a fresh keystream block, the XOR does the masking, and the nonce travels in the clear. Correctness is immediate since the receiver recomputes F(k, n). Security follows the reduction pattern of Unit I: if an attacker distinguishes this cipher's ciphertexts, the same attacker distinguishes F from random - so CPA security holds as long as F is a secure PRF and nonces never repeat with the same key.",
              "The exam framing to remember: EAV-security (Unit I) vs CPA-security (Unit II) differ only in the attacker's oracle access, and PRF security implies CPA security of the derived cipher while a mere PRG only bought EAV security. State both sentences and you have the question's entire grading scheme - one line for the game, one line for the reduction, one line for the nonce rule."
            ],
            "keyTerms": [
              {
                "term": "CPA security",
                "definition": "Indistinguishability of encryptions even when the attacker may request encryptions of chosen messages."
              },
              {
                "term": "Pseudorandom function (PRF)",
                "definition": "A keyed function family indistinguishable from random by any efficient oracle-access attacker."
              },
              {
                "term": "Block cipher",
                "definition": "A PRF with equal input/output block length, invertible under the key - DES (64-bit) and AES (128-bit)."
              },
              {
                "term": "Nonce",
                "definition": "A number used once per key; selects a fresh keystream block for every message."
              }
            ],
            "table": {
              "caption": "The ladder of confidentiality notions - attacker powers grow downward.",
              "headers": [
                "Notion",
                "Attacker power",
                "Guarantee"
              ],
              "rows": [
                [
                  "EAV / ciphertext-only",
                  "sees one or more ciphertexts",
                  "learns nothing about plaintexts"
                ],
                [
                  "CPA security",
                  "may encrypt chosen messages first",
                  "encryptions remain indistinguishable"
                ],
                [
                  "CCA security (Unit V)",
                  "may also decrypt chosen ciphertexts",
                  "tampering is detected, not exploited"
                ]
              ]
            },
            "bullets": [
              "CPA attacker: encrypts chosen plaintexts before guessing m0 vs m1.",
              "PRF: keyed family indistinguishable from a random function under oracle access.",
              "Block cipher = invertible PRF with equal input/output length (128-bit AES).",
              "CPA-secure cipher: (n, F(k, n) XOR m) - fresh nonce each time.",
              "PRF security reduces to CPA security of the derived cipher.",
              "Nonce reuse collapses security exactly like keystream reuse in Unit I."
            ],
            "diagram": {
              "kind": "flow",
              "title": "The CPA indistinguishability game",
              "caption": "Five moves - the attacker's oracle access is what makes it the honest standard.",
              "steps": [
                {
                  "label": "Attacker queries",
                  "note": "Enc(k, m) for chosen messages"
                },
                {
                  "label": "Challenge",
                  "note": "attacker submits m0, m1 of equal length"
                },
                {
                  "label": "Coin flip",
                  "note": "b is secret; c* = Enc(k, mb)"
                },
                {
                  "label": "More queries",
                  "note": "attacker may encrypt again (not c*)"
                },
                {
                  "label": "Guess b'",
                  "note": "wins if b' = b; secure if advantage negligible"
                }
              ]
            },
            "callout": {
              "type": "exam",
              "title": "One line per mark",
              "body": "When asked 'what is CPA security and how is it achieved?', write: (1) the game with oracle access, (2) the construction (n, F(k, n) XOR m), (3) the reduction - distinguishing the cipher implies distinguishing the PRF. Three sentences, full marks; students who skip the reduction lose the technical half."
            },
            "examQuestions": [
              {
                "q": "Define CPA security and contrast it with ciphertext-only security. Describe how a pseudorandom function yields a CPA-secure encryption scheme, and explain the role of the nonce.",
                "marks": 14,
                "outline": [
                  "CPA game: chosen-plaintext oracle access, then m0/m1 challenge",
                  "EAV only sees ciphertexts; CPA may inject chosen data first",
                  "PRF: keyed family indistinguishable from random under oracle queries",
                  "Construction: c = (n, F(k, n) XOR m)",
                  "Correctness: receiver recomputes F(k, n) and XORs back",
                  "Reduction: cipher-distinguisher implies PRF-distinguisher",
                  "Nonce must be fresh per key - reuse repeats the keystream block"
                ]
              },
              {
                "q": "Why is a PRG alone insufficient for CPA security while a PRF suffices?",
                "marks": 7,
                "outline": [
                  "A PRG gives one long stream per seed - attacker-influenced queries reuse it",
                  "A PRF produces an independent block per input point",
                  "Fresh nonce n selects an independent F(k, n) for every message",
                  "Oracle answers never correlate across chosen queries",
                  "Oracle answers must not correlate across chosen queries",
                  "A PRF yields an independent block per input point",
                  "Fresh nonce selects an independent keystream block"
                ]
              }
            ]
          },
          {
            "number": "2.2",
            "title": "DES - the Feistel blueprint",
            "body": [
              "The Data Encryption Standard (1977) is the historical block cipher of the syllabus: 64-bit blocks, a 56-bit effective key, and 16 rounds of a Feistel network. A Feistel round splits the block into halves (L, R) and computes L' = R, R' = L XOR F(roundkey, R) - the round function F need not be invertible, because XORing with the old half undoes it during decryption. That asymmetry is DES's deepest gift: one circuit both encrypts and decrypts, running the key schedule in reverse.",
              "Each round key is 48 bits, derived from the 56-bit master by the key schedule; the round function expands R to 48 bits, mixes with the round key, passes through eight S-boxes (the nonlinear heart - 6 bits in, 4 bits out), and permutes. The S-boxes are where confusion lives; the half-swap between rounds provides diffusion across the block. After 16 rounds plus initial and final permutations, any 64-bit plaintext maps to a pseudorandom-looking 64-bit ciphertext block.",
              "The worked example is the autopsy: DES's block and design were fine, but its 56-bit key is 2^56 trials, and in 1998 the EFF's 'Deep Crack' machine brute-forced a key in 56 hours - under 2^40 keys per second of sustained hardware search. 3DES (encrypt-decrypt-encrypt with two or three keys) stretched the key to 112/168 bits and stayed in banking (EMV cards) for decades, though its 64-bit block limits it to about 2^32 blocks per key before birthday collisions (Sweet32, 2016).",
              "Exam answers should give the round equation L' = R, R' = L XOR F(k_i, R), the parameters (64-bit block, 56-bit key, 16 rounds, 48-bit subkeys), and the two historical verdicts: exhaustive key search killed the key length, and the 64-bit block size caps safe data volume per key. DES survives in the syllabus as the Feistel template - Feistel networks are still how exam questions ask you to demonstrate you understand invertible round construction."
            ],
            "keyTerms": [
              {
                "term": "Feistel network",
                "definition": "Round structure L' = R, R' = L XOR F(k, R) - decryption reuses the same circuit in reverse."
              },
              {
                "term": "S-box",
                "definition": "Substitution box providing nonlinearity; DES has eight 6-in/4-out S-boxes."
              },
              {
                "term": "Key schedule",
                "definition": "Derives 16 round keys from the 56-bit master key."
              },
              {
                "term": "3DES",
                "definition": "EDE with two or three DES keys - 112/168-bit key, still 64-bit blocks."
              },
              {
                "term": "Sweet32",
                "definition": "2016 birthday-bound attack on 64-bit block ciphers after about 2^32 blocks per key."
              }
            ],
            "table": {
              "caption": "DES parameters - the numbers every answer quotes.",
              "headers": [
                "Parameter",
                "Value",
                "Consequence"
              ],
              "rows": [
                [
                  "Block size",
                  "64 bits",
                  "birthday cap at 2^32 blocks per key (Sweet32)"
                ],
                [
                  "Key size",
                  "56 bits (64 with parity)",
                  "exhaustive search feasible - broken 1998"
                ],
                [
                  "Rounds",
                  "16 Feistel rounds",
                  "full diffusion across the block"
                ],
                [
                  "Round function",
                  "48-bit subkey, 8 S-boxes, permutation",
                  "nonlinear confusion core"
                ]
              ]
            },
            "bullets": [
              "Feistel round: L' = R and R' = L XOR F(k_i, R) - F need not be invertible.",
              "Decryption is encryption with round keys applied in reverse order.",
              "S-boxes supply the only nonlinearity; half-swaps supply diffusion.",
              "64-bit block, 56-bit key, 16 rounds, 48-bit subkeys - quote all four.",
              "Deep Crack (1998) exhausted 2^56 in 56 hours - key length, not design, killed DES.",
              "3DES stretched the key but kept the 64-bit block birthday cap."
            ],
            "diagram": {
              "kind": "layers",
              "title": "One Feistel round (top of a 16-round stack)",
              "caption": "Each layer XORs a round-function output with the left half and swaps - invertible by construction.",
              "layers": [
                {
                  "label": "Round input (L, R)",
                  "note": "64-bit block as two 32-bit halves"
                },
                {
                  "label": "Expand R",
                  "note": "32 -> 48 bits to meet the subkey"
                },
                {
                  "label": "XOR round key + S-boxes",
                  "note": "nonlinear confusion, 48 -> 32 bits"
                },
                {
                  "label": "XOR with L, swap halves",
                  "note": "L' = R, R' = L XOR F(k_i, R)"
                }
              ]
            },
            "callout": {
              "type": "exam",
              "title": "Write the round equation",
              "body": "The Feistel round equation is the single most quotable line of Unit II: L' = R, R' = L XOR F(k_i, R). Write it, say 'F need not be invertible - XOR with the stored half undoes it', and you have answered both 'how does DES work' and 'why is decryption free' in one stroke."
            },
            "examQuestions": [
              {
                "q": "Explain the Feistel structure of DES: the round equation, the role of S-boxes and the key schedule, why decryption needs no separate circuit, and why DES was deprecated.",
                "marks": 14,
                "outline": [
                  "Round equation: L' = R, R' = L XOR F(k_i, R)",
                  "F need not be invertible - the stored half undoes it on decryption",
                  "Key schedule: 56-bit master -> 16 x 48-bit round keys",
                  "S-boxes: eight 6-in/4-out tables - the only nonlinear element",
                  "Parameters: 64-bit block, 56-bit key, 16 rounds",
                  "Deprecated: 2^56 exhaustive search feasible (Deep Crack, 1998)",
                  "64-bit block caps data per key (Sweet32); 3DES extended life, not block size"
                ]
              },
              {
                "q": "Why does a Feistel round remain invertible even when its round function is not?",
                "marks": 7,
                "outline": [
                  "The round stores the old R unchanged as the new L",
                  "Given (L', R'), R = L' and L = R' XOR F(k_i, R)",
                  "F is recomputed during decryption with the same round key",
                  "No inversion of F itself is ever required",
                  "R = L' and L = R' XOR F(k_i, R) - recomputed during decryption",
                  "No inversion of F itself is ever required"
                ]
              }
            ]
          },
          {
            "number": "2.3",
            "title": "AES - the substitution-permutation network",
            "body": [
              "The Advanced Encryption Standard (2001) replaced DES after an open competition: a 128-bit block, keys of 128/192/256 bits, and 10/12/14 rounds respectively. AES is a substitution-permutation network (SPN), not a Feistel network - the round transforms the whole state at once, and each round applies four operations: SubBytes, ShiftRows, MixColumns and AddRoundKey. The round key is expanded from the master key by the key schedule into round keys of the same 128-bit width.",
              "SubBytes is the nonlinearity: every byte passes through a fixed 8x8-bit S-box built on inversion in GF(2^8), so the algebraic structure resists differential and linear cryptanalysis. ShiftRows rotates rows of the 4x4 byte state by offsets, MixColumns multiplies columns by a fixed MDS matrix so one input byte change spreads to a whole column, and AddRoundKey XORs the round key. Decryption runs the inverses in reverse order - the S-box, shift and mix are each individually invertible, which is the SPN's contract.",
              "A worked security accounting: after 10 rounds, AES-128 offers 2^128 key-search resistance; the best public key-recovery attacks reach only a few rounds reduced variants, and no practical attack on full AES exists despite two decades of analysis. Its real-world fragility is elsewhere - in how it is composed (section 2.4's modes) and in side channels (cache-timing on table-based implementations), which is why hardware AES-NI with constant-time logic is the standard deployment.",
              "The exam contrast with DES is the guaranteed question: Feistel halves and swaps vs SPN whole-state transformation; 64-bit vs 128-bit block; 56-bit vs 128/192/256-bit keys; S-boxes on halves vs SubBytes on every byte; decryption by reversed key schedule vs decryption by inverse operations. Write the comparison as a two-column table in the answer and cite Rijdael's GF(2^8) algebra as the design difference that let AES reach more security with fewer rounds."
            ],
            "keyTerms": [
              {
                "term": "SPN (substitution-permutation network)",
                "definition": "Round design transforming the whole state via invertible S-boxes, shifts, mixing and key XOR."
              },
              {
                "term": "SubBytes",
                "definition": "AES's byte-wise S-box based on GF(2^8) inversion - the nonlinearity core."
              },
              {
                "term": "MixColumns",
                "definition": "Multiplies each column by a fixed MDS matrix, spreading byte changes across the column."
              },
              {
                "term": "Key schedule",
                "definition": "Expands the 128/192/256-bit master key into round keys."
              },
              {
                "term": "AES-NI",
                "definition": "CPU instructions implementing AES in constant time, defeating timing side channels."
              }
            ],
            "table": {
              "caption": "AES vs DES - the guaranteed contrast.",
              "headers": [
                "Feature",
                "DES",
                "AES"
              ],
              "rows": [
                [
                  "Design",
                  "Feistel (halves, swaps)",
                  "SPN (whole-state rounds)"
                ],
                [
                  "Block size",
                  "64 bits",
                  "128 bits"
                ],
                [
                  "Key size",
                  "56 bits",
                  "128 / 192 / 256 bits"
                ],
                [
                  "Rounds",
                  "16",
                  "10 / 12 / 14"
                ],
                [
                  "Nonlinearity",
                  "8 S-boxes on half the block",
                  "SubBytes on every byte, GF(2^8)"
                ],
                [
                  "Status",
                  "deprecated (3DES legacy only)",
                  "current worldwide standard"
                ]
              ]
            },
            "bullets": [
              "AES: 128-bit block, 10/12/14 rounds for 128/192/256-bit keys.",
              "Round: SubBytes -> ShiftRows -> MixColumns -> AddRoundKey.",
              "SubBytes is the nonlinearity; ShiftRows + MixColumns give diffusion.",
              "SPN vs Feistel: whole-state invertible transforms vs half-swaps.",
              "No practical attack on full AES - attacks target modes and side channels.",
              "Constant-time hardware (AES-NI) is the deployment requirement."
            ],
            "diagram": {
              "kind": "cycle",
              "title": "One AES round",
              "caption": "The four steps repeat 10-14 times around the state - the final round drops MixColumns.",
              "steps": [
                {
                  "label": "SubBytes",
                  "note": "S-box every byte - nonlinearity"
                },
                {
                  "label": "ShiftRows",
                  "note": "rotate rows - spread bytes"
                },
                {
                  "label": "MixColumns",
                  "note": "MDS matrix per column - diffusion"
                },
                {
                  "label": "AddRoundKey",
                  "note": "XOR round key - key involvement"
                }
              ]
            },
            "callout": {
              "type": "tip",
              "title": "The side-channel pivot",
              "body": "When asked 'is AES breakable?', the technically complete answer is: no practical key-recovery attack on full AES exists, but implementations leak - cache-timing on table lookups, power analysis on embedded chips. The fix is constant-time hardware (AES-NI). That three-part answer separates the algorithm from its use, which is the examiner's real target."
            },
            "examQuestions": [
              {
                "q": "Describe the AES round structure and key sizes. Contrast AES with DES as substitution-permutation network versus Feistel network, and state why AES displaced DES.",
                "marks": 14,
                "outline": [
                  "AES: 128-bit block, 10/12/14 rounds for 128/192/256-bit keys",
                  "Round: SubBytes, ShiftRows, MixColumns, AddRoundKey",
                  "SubBytes: GF(2^8) S-box - the nonlinearity on every byte",
                  "ShiftRows + MixColumns: byte-level diffusion across the state",
                  "DES Feistel: half-swaps, F on one half only",
                  "AES SPN: whole-state invertible transform per round",
                  "Displacement: 56-bit key broken (1998), 64-bit block birthday cap"
                ]
              },
              {
                "q": "Which AES operations are nonlinear, and why are ShiftRows and MixColumns still essential?",
                "marks": 7,
                "outline": [
                  "Only SubBytes is nonlinear",
                  "ShiftRows moves bytes across columns; MixColumns mixes within columns",
                  "Together they give full diffusion over 2 rounds",
                  "Without diffusion, S-boxes stay local and differential attacks apply",
                  "SubBytes is the only nonlinear step",
                  "ShiftRows spreads bytes across columns; MixColumns mixes within",
                  "Two rounds give full diffusion - without it, differential attacks apply"
                ]
              }
            ]
          },
          {
            "number": "2.4",
            "title": "Modes of operation of block ciphers",
            "body": [
              "A block cipher encrypts exactly one fixed-size block; modes of operation stretch it to messages of arbitrary length. ECB (Electronic Codebook) encrypts each block independently: c_i = E(k, m_i) - and leaks structure catastrophically, because identical plaintext blocks produce identical ciphertext blocks; the famous ECB-penguin image shows a penguin surviving encryption. ECB is deterministic, parallelizable and semantically insecure - it fails the CPA game of section 2.1 outright.",
              "CBC (Cipher Block Chaining) fixes the leak by XORing each plaintext with the previous ciphertext before encrypting: c_i = E(k, m_i XOR c_{i-1}), seeded by a random IV for the first block. With a fresh random IV per message, CBC is CPA-secure; the IV must be unpredictable, not merely unused. Decryption runs in reverse: m_i = D(k, c_i) XOR c_{i-1}. The chained structure serializes encryption but parallelizes decryption - and CBC's padding (PKCS#7) is the substrate of the padding-oracle attacks that motivate CCA security in Unit V.",
              "CTR (Counter) mode turns the block cipher into a stream cipher: keystream block i is E(k, nonce || i), and c_i = m_i XOR E(k, nonce || i). Nonce and counter must be unique per key; parallelism is full both ways, decryption needs only the encryption direction, and random access suits disks and packets. But CTR's security is exactly stream-cipher security: nonce reuse repeats the keystream and leaks m1 XOR m2 - the Unit I identity returns with a block cipher inside it.",
              "The exam's comparison table is the deliverable: per mode, state the chaining formula, the IV/nonce requirement, parallelism, and the failure when the requirement is violated. The two sentence-level lessons: randomness (ECB has none, CBC has an unpredictable IV, CTR has a unique nonce) is what buys CPA security; and the requirement is on the implementation, not the algorithm - every real-world mode failure (WEP, sslv3 CBC issues) was a violated IV/nonce rule, not a broken cipher core."
            ],
            "keyTerms": [
              {
                "term": "ECB mode",
                "definition": "Independent per-block encryption - deterministic, leaks plaintext structure, semantically insecure."
              },
              {
                "term": "CBC mode",
                "definition": "c_i = E(k, m_i XOR c_{i-1}) with random unpredictable IV - CPA-secure with fresh IVs."
              },
              {
                "term": "CTR mode",
                "definition": "Keystream blocks E(k, nonce || i) XORed with plaintext - parallel, needs unique nonces."
              },
              {
                "term": "IV (initialization vector)",
                "definition": "Public random value starting a chain; must be unpredictable per message in CBC."
              },
              {
                "term": "Padding oracle",
                "definition": "Decryption error differences letting attackers recover CBC plaintexts byte by byte."
              }
            ],
            "table": {
              "caption": "The three modes the syllabus requires, side by side.",
              "headers": [
                "Mode",
                "Formula",
                "IV/nonce rule",
                "Parallelism",
                "Failure mode"
              ],
              "rows": [
                [
                  "ECB",
                  "c_i = E(k, m_i)",
                  "none - deterministic",
                  "both ways",
                  "identical blocks leak structure"
                ],
                [
                  "CBC",
                  "c_i = E(k, m_i XOR c_{i-1})",
                  "fresh unpredictable IV",
                  "decrypt only",
                  "padding oracle attacks"
                ],
                [
                  "CTR",
                  "c_i = m_i XOR E(k, nonce || i)",
                  "unique nonce-counter per key",
                  "both ways",
                  "nonce reuse repeats keystream"
                ]
              ]
            },
            "bullets": [
              "ECB: identical plaintext blocks -> identical ciphertext blocks (ECB-penguin).",
              "CBC: chain with previous ciphertext; random unpredictable IV buys CPA security.",
              "CBC decryption: m_i = D(k, c_i) XOR c_{i-1} - parallel decryption.",
              "CTR: block cipher as stream cipher; full parallelism; only encrypt direction needed.",
              "CTR nonce reuse = keystream reuse = m1 XOR m2 leak.",
              "Every famous mode failure was a violated IV/nonce rule, not a broken cipher."
            ],
            "diagram": {
              "kind": "compare",
              "title": "ECB vs CBC on the same image",
              "caption": "The penguin test: independence leaks, chaining randomizes.",
              "left": {
                "heading": "ECB - leaks",
                "items": [
                  "Each block encrypted independently",
                  "Identical blocks -> identical ciphertext",
                  "Image structure survives encryption",
                  "Deterministic: fails the CPA game"
                ]
              },
              "right": {
                "heading": "CBC - hides",
                "items": [
                  "Each block XORed with previous ciphertext",
                  "Random IV randomizes the whole chain",
                  "Structure destroyed - noise out",
                  "CPA-secure with fresh unpredictable IVs"
                ]
              }
            },
            "callout": {
              "type": "warning",
              "title": "Unpredictable IV, not just unused IV",
              "body": "CBC's IV must be unpredictable - if the attacker can predict the next IV before submitting plaintexts, the CPA game is won by pre-computing the XOR. TLS 1.0's chained IVs (record n's IV = record n-1's last block) were predictable and exploitable (BEAST, 2011). 'Unique' and 'unpredictable' are different requirements - quote both."
            },
            "examQuestions": [
              {
                "q": "Explain ECB, CBC and CTR modes with their formulas, IV/nonce requirements and parallelism. Why is ECB insecure and how do CBC and CTR fix it?",
                "marks": 14,
                "outline": [
                  "ECB: c_i = E(k, m_i) independently - deterministic",
                  "Identical blocks map to identical ciphertext (ECB-penguin)",
                  "CBC: c_i = E(k, m_i XOR c_{i-1}), random unpredictable IV",
                  "CBC decryption m_i = D(k, c_i) XOR c_{i-1}; parallel decrypt",
                  "CTR: c_i = m_i XOR E(k, nonce || i) - stream style",
                  "CTR needs unique nonce-counter; reuse repeats keystream",
                  "Moral: freshness/randomness rules buy CPA security"
                ]
              },
              {
                "q": "State and justify the IV requirement of CBC mode.",
                "marks": 7,
                "outline": [
                  "IV must be fresh and unpredictable per message",
                  "Predictable IV lets the attacker pre-compute XORs for chosen plaintexts",
                  "That wins the CPA indistinguishability game",
                  "BEAST exploited chained predictable IVs in TLS 1.0",
                  "Predictable IVs let the attacker pre-compute XORs for chosen plaintexts",
                  "That wins the CPA indistinguishability game",
                  "BEAST exploited TLS 1.0's chained predictable IVs"
                ]
              }
            ]
          },
          {
            "number": "2.5",
            "title": "Message authentication codes",
            "body": [
              "Encryption alone proves nothing: anyone can flip ciphertext bits, and in CBC/CTR the flip corrupts the decrypted plaintext predictably (bit-flipping in CTR changes m_i directly). A message authentication code restores integrity: a deterministic algorithm Tag = MAC(k, m) produces a tag that Verify(k, m, t) checks, such that no efficient attacker without the key can produce a (m, t) pair that verifies for a message m never previously tagged - the existential unforgeability under chosen-message attack (EUF-CMA) game.",
              "The ECU-CMA game mirrors CPA: the attacker requests tags on chosen messages, then must forge a fresh valid pair. Security requires that a 128-bit tag make forgery cost about 2^128 tries. The workhorse construction is HMAC: H((k XOR opad) || H((k XOR ipad) || m)) - the double-nesting defeats length-extension attacks that break naive H(k || m). CBC-MAC is the block-cipher alternative: MAC the message by running CBC with zero IV and taking the final block as the tag.",
              "A worked failure teaches CBC-MAC's rule: it is secure only for fixed-length messages. Tag two different one-block messages m1, m2 under the same key, XOR them - t1 XOR t2 - and construct a third message m3 = m2 XOR (m1 XOR t1)... concretely, with tags t1 = E(m1) and t2 = E(m2), the two-block message (m1, m2 XOR t1 XOR t2) verifies under t2. Variable-length CBC-MAC requires prepending the length or switching keys per block (CMAC with subkeys) - exactly the fix standards adopted.",
              "For the exam, structure answers as: definition (deterministic, keyed, EUF-CMA), the two constructions (HMAC from hashes, CBC-MAC from block ciphers), and each construction's canonical mistake - HMAC's is single-nesting (length extension), CBC-MAC's is variable length without length-prepending. The bit-flipping opener is worth one line: 'encryption without authentication is confidentiality without integrity - ciphertexts are freely malleable', which frames why every secure protocol does MAC-then-encrypt or Encrypt-then-MAC (Unit III)."
            ],
            "keyTerms": [
              {
                "term": "MAC",
                "definition": "Deterministic keyed tag MAC(k, m) verified with the same key - integrity and authenticity."
              },
              {
                "term": "EUF-CMA",
                "definition": "Unforgeability game: tag chosen messages, then forge a fresh valid (m, t) pair."
              },
              {
                "term": "HMAC",
                "definition": "H((k XOR opad) || H((k XOR ipad) || m)) - nested hash MAC resisting length extension."
              },
              {
                "term": "CBC-MAC",
                "definition": "CBC with zero IV, final block as tag - secure only for fixed-length messages."
              },
              {
                "term": "Length-extension attack",
                "definition": "Given H(k || m), append data without knowing k - defeats naive hash-then-key MACs."
              }
            ],
            "codeExample": {
              "language": "python",
              "caption": "hmac_demo.py - tag and verify with constant-time compare",
              "code": "import hmac, hashlib, os\n\nkey = os.urandom(32)\nmsg = b\"pay 5000 to account 42\"\n\ntag = hmac.new(key, msg, hashlib.sha256).hexdigest()\n\nok = hmac.compare_digest(\n        tag, hmac.new(key, msg, hashlib.sha256).hexdigest())\nprint(ok)   # True - compare_digest avoids timing leaks\n\ntampered = msg.replace(b\"5000\", b\"9000\")\nprint(hmac.compare_digest(\n        tag, hmac.new(key, tampered, hashlib.sha256).hexdigest()))  # False"
            },
            "bullets": [
              "Encryption without authentication: ciphertext bits are freely malleable.",
              "MAC = deterministic keyed tag; security notion is EUF-CMA.",
              "HMAC double-nesting defeats length extension; single-nesting H(k || m) fails.",
              "CBC-MAC = CBC with zero IV, last block as tag - fixed lengths only.",
              "Variable-length CBC-MAC needs length-prepending or CMAC subkeys.",
              "128-bit tags price forgery at about 2^128 chosen tries."
            ],
            "diagram": {
              "kind": "flow",
              "title": "MAC sign and verify",
              "caption": "One key, two directions: the sender tags, the receiver recomputes and compares.",
              "steps": [
                {
                  "label": "Sender: tag",
                  "note": "t = MAC(k, m)"
                },
                {
                  "label": "Send (m, t)",
                  "note": "tag travels with the message"
                },
                {
                  "label": "Receiver: recompute",
                  "note": "t' = MAC(k, m)"
                },
                {
                  "label": "Compare",
                  "note": "constant-time t == t' - accept or reject"
                }
              ]
            },
            "callout": {
              "type": "exam",
              "title": "Name the failure of each MAC",
              "body": "Examiners reward paired knowledge: HMAC fails if you single-nest it (length extension); CBC-MAC fails if messages vary in length (tag algebra over two messages). Quote the CBC-MAC forgery idea - XOR the two tags to shift the chain - and the answer reads like a cryptanalyst wrote it."
            },
            "examQuestions": [
              {
                "q": "Define a message authentication code and the EUF-CMA security game. Describe HMAC and CBC-MAC, and explain one concrete failure of each when used incorrectly.",
                "marks": 14,
                "outline": [
                  "MAC: deterministic keyed tag; verify by recomputation",
                  "EUF-CMA: tag chosen messages, forge a fresh valid (m, t)",
                  "Encryption alone allows bit-flipping attacks (CTR flips m_i directly)",
                  "HMAC = H((k XOR opad) || H((k XOR ipad) || m))",
                  "Naive H(k || m) falls to length-extension attacks",
                  "CBC-MAC: zero IV, final block as tag",
                  "Variable-length CBC-MAC is forgeable; fix = length prepending / CMAC"
                ]
              },
              {
                "q": "Why is plain CBC-MAC insecure when message lengths vary?",
                "marks": 7,
                "outline": [
                  "Tags t1 = E(m1), t2 = E(m2) for one-block messages",
                  "The chain shift lets a two-block message verify under t2",
                  "The chain start is attacker-controllable without a length field",
                  "Fixes: prepend the length, or use CMAC with per-block subkeys",
                  "Chain-start controllability is the root cause",
                  "Fixes: length prepending or CMAC subkeys"
                ]
              }
            ]
          },
          {
            "number": "2.6",
            "title": "Information-theoretic secure MAC",
            "body": [
              "HMAC and CBC-MAC are computational - secure if the underlying primitive resists efficient attacks. An information-theoretic MAC needs no such assumption: even an attacker with infinite computing power cannot forge. The classic one-time MAC works over a prime field: key k = (k1, k2) uniformly random in F_p x F_p, and the tag is t = m * k1 + k2 mod p. Verification recomputes the same linear function; correctness is immediate and the tag is one field element.",
              "The unforgeability accounting is exact. After seeing one legitimate (m, t) pair, the attacker has one linear equation in two unknowns - (k1, k2) still has p candidate solutions, and each candidate key gives a different 'correct' tag for any forged message m'. The probability that the attacker's guessed tag for a fresh m' matches is exactly 1/p - independent of computing power, because the uncertainty is information, not time. With p about 2^127, forgery succeeds with probability 2^-127 per attempt.",
              "Worked toy example: p = 23, message m = 7, key k1 = 5, k2 = 11; tag t = 35 + 11 = 46 mod 23 = 0. An attacker who sees (7, 0) and wants to forge m' = 15 guesses a tag t' - the system of equations 5*7 + k2 = 0 and 5'*15 + k2 = t' has p consistent (k1, k2, t') combinations, so any t' succeeds with probability 1/23. Scaling p to cryptographic size prices the attack at 2^-127. The 'one-time' name is exact: each (k1, k2) pair authenticates one message securely; reuse leaks linear relations between messages.",
              "The exam comparison is the deliverable: computational MACs (HMAC, CBC-MAC) use one reusable key, price forgery at 2^n operations, and inherit assumptions from the primitive; information-theoretic MACs use one-time keys as long as needed, price forgery at a fixed 1/p probability, and assume nothing. Cartoons of where each is used: HMAC everywhere in TLS; one-time MACs in quantum-key-distribution follow-ups and theoretical constructions where assumptions must be zero. Quote the equation t = m*k1 + k2 mod p and the 1/p bound - they are the entire answer's spine."
            ],
            "keyTerms": [
              {
                "term": "Information-theoretic MAC",
                "definition": "Forgery bounded at a fixed probability (1/p) even against unbounded attackers."
              },
              {
                "term": "One-time MAC",
                "definition": "t = m*k1 + k2 mod p with k1, k2 uniform in F_p; one message per key."
              },
              {
                "term": "Pairwise-independent keys",
                "definition": "Key property ensuring every forged tag is equally likely - no computation helps."
              },
              {
                "term": "F_p",
                "definition": "The field of integers mod a prime p - where the arithmetic lives."
              }
            ],
            "table": {
              "caption": "Computational vs information-theoretic MAC.",
              "headers": [
                "Property",
                "HMAC / CBC-MAC",
                "One-time MAC (m*k1 + k2)"
              ],
              "rows": [
                [
                  "Attacker model",
                  "efficient (polynomial time)",
                  "unbounded - even infinite computing"
                ],
                [
                  "Forgery cost",
                  "about 2^n operations",
                  "fixed probability 1/p per attempt"
                ],
                [
                  "Key reuse",
                  "yes - one key, many messages",
                  "no - one message per key"
                ],
                [
                  "Assumptions",
                  "hash/cipher hardness",
                  "none - unconditional"
                ]
              ]
            },
            "bullets": [
              "Scheme: key (k1, k2) uniform in F_p; tag t = m*k1 + k2 mod p.",
              "One observed (m, t) leaves p candidate keys - each gives a different tag.",
              "Forgery probability exactly 1/p, independent of computing power.",
              "Toy walkthrough: p = 23, m = 7, k = (5, 11) -> t = 0.",
              "One-time: reuse leaks linear relations; each key authenticates one message.",
              "HMAC keeps one reusable key; the one-time MAC trades reuse for unconditionality."
            ],
            "diagram": {
              "kind": "fork",
              "title": "Two attacks the 1/p bound covers",
              "caption": "Whether the attacker substitutes or impersonates, the unknown key keeps every tag equally likely.",
              "start": "Attacker without the key",
              "branches": [
                {
                  "label": "Impersonation",
                  "outcome": "no message seen - guess t' for any m'; success 1/p",
                  "good": false
                },
                {
                  "label": "Substitution after one pair",
                  "outcome": "one equation, p candidate keys - every forged tag equally likely, 1/p",
                  "good": false
                },
                {
                  "label": "Reuse the key on a second message",
                  "outcome": "two equations - the system starts leaking (why keys are one-time)",
                  "good": false
                }
              ]
            },
            "callout": {
              "type": "tip",
              "title": "Why computing power does not help",
              "body": "The unbounded attacker can enumerate all p candidate keys after seeing (m, t) - but each candidate implies a different valid tag for the forgery target, and all are equally likely. The uncertainty is information-theoretic, not computational. That one sentence is what distinguishes a 7-mark answer from a 14-mark one."
            },
            "examQuestions": [
              {
                "q": "Describe the information-theoretic one-time MAC with tag t = m*k1 + k2 mod p. Prove the 1/p forgery bound with a worked toy example, and contrast this scheme with HMAC.",
                "marks": 14,
                "outline": [
                  "Key (k1, k2) uniform in F_p x F_p; tag t = m*k1 + k2 mod p",
                  "Correctness: verifier recomputes the same linear function",
                  "After one pair, one linear equation in two unknowns remains",
                  "p candidate keys survive; each gives a different tag on m'",
                  "Forgery probability exactly 1/p - unbounded attackers included",
                  "Toy: p = 23, m = 7, k = (5, 11) -> t = 46 mod 23 = 0",
                  "HMAC: reusable key, computational security, assumes hash hardness"
                ]
              },
              {
                "q": "Why is the one-time MAC's key used for only one message?",
                "marks": 7,
                "outline": [
                  "Each (m, t) pair adds one linear equation over F_p",
                  "Two equations in two unknowns determine (k1, k2) completely",
                  "The key is recovered - every future tag is forgeable",
                  "Hence 'one-time'; same spirit as the one-time pad",
                  "Each (m, t) pair adds one linear equation over F_p",
                  "Two equations determine (k1, k2) completely - every future tag forgeable"
                ]
              }
            ]
          },
          {
            "number": "2.7",
            "title": "Cryptographic hash functions",
            "body": [
              "A cryptographic hash function H maps arbitrary-length input to a fixed-length digest (SHA-256: 256 bits) with three working properties: compression (any input, fixed output), efficiency (fast to compute), and the security trio - pre-image resistance (given h, finding m with H(m) = h costs about 2^n), second-preimage resistance (given m, finding m' != m with the same hash costs about 2^n), and collision resistance (finding any pair m != m' with H(m) = H(m') costs about 2^(n/2) - the birthday bound of section 3.3).",
              "The trio is strictly ordered by attacker difficulty: collisions are the cheapest (square-root cost), pre-images the most expensive. That ordering drives migration history: MD5 (128-bit digest) fell to collision attacks (2^18 practical work in 2004) and was retired; SHA-1 (160 bits) collisions were demonstrated in 2017 (SHAttered); SHA-2 (224/256/384/512) and SHA-3 (Keccak, a sponge construction) are current. Note the asymmetry: a collision attack breaks signatures and certificates but not HMAC or password hashing, which need pre-image resistance - explaining why HMAC-SHA256 remains safe even in MD5-flavoured discussions.",
              "A worked application set fixes intuition: file integrity (download the ISO and its SHA-256 digest from an authenticated channel, recompute locally), password storage (store H(salt || pw) with a per-user random salt and a slow KDF like PBKDF2/bcrypt so per-guess cost rises), and digital signatures (sign the digest, not the document - any digest match certifies the document). Each application leans on a different member of the trio, which is why exam answers must name the property, not just the hash.",
              "The unit closes with the formal requirement the syllabus lists: hash functions are deterministic public algorithms with no key - 'authentication' comes from the secret key around them (HMAC), never from the hash itself. The naive H(m) as a MAC is forgeable exactly because it is public; the naive H(password) as storage is crackable by rainbow tables because it is unsalted. Hash, key and salt are three different ingredients - exam questions live in the gaps between them."
            ],
            "keyTerms": [
              {
                "term": "Pre-image resistance",
                "definition": "Given digest h, finding any m with H(m) = h costs about 2^n."
              },
              {
                "term": "Second-preimage resistance",
                "definition": "Given m, finding m' != m with H(m') = H(m) costs about 2^n."
              },
              {
                "term": "Collision resistance",
                "definition": "Finding any colliding pair costs about 2^(n/2) - the birthday bound."
              },
              {
                "term": "Salting",
                "definition": "Per-user random data hashed with the password to defeat rainbow tables."
              },
              {
                "term": "KDF (key derivation function)",
                "definition": "A deliberately slow hash (PBKDF2, bcrypt, scrypt) for password storage."
              }
            ],
            "table": {
              "caption": "The security trio - attacker cost decides which applications break.",
              "headers": [
                "Property",
                "Cost for n-bit digest",
                "Application that leans on it"
              ],
              "rows": [
                [
                  "Collision resistance",
                  "about 2^(n/2)",
                  "signatures, certificates"
                ],
                [
                  "Second-preimage",
                  "about 2^n",
                  "file integrity of specific files"
                ],
                [
                  "Pre-image",
                  "about 2^n",
                  "password storage, commitments"
                ]
              ]
            },
            "bullets": [
              "Hash: deterministic, public, keyless; fixed-length digest from any input.",
              "Three resistances with three costs: 2^(n/2) collisions, 2^n pre-images.",
              "MD5 broken by collisions (2004); SHA-1 collisions shown (SHAttered, 2017).",
              "Collision breaks signatures; HMAC/password use survives on pre-image strength.",
              "Password storage: salt + slow KDF (PBKDF2/bcrypt), never bare H(pw).",
              "Sign the digest, not the document - hash-then-sign is the signature substrate."
            ],
            "diagram": {
              "kind": "fork",
              "title": "Which property does each application need?",
              "caption": "Naming the property - not the algorithm - is what the examiner is grading.",
              "start": "Application",
              "branches": [
                {
                  "label": "Sign a document",
                  "outcome": "collision resistance - a forged pair would transfer the signature",
                  "good": true
                },
                {
                  "label": "Verify a download",
                  "outcome": "second-preimage against targeted file substitution",
                  "good": true
                },
                {
                  "label": "Store passwords",
                  "outcome": "pre-image + salting + slow KDF against offline guessing",
                  "good": true
                },
                {
                  "label": "Use bare H(m) as a MAC",
                  "outcome": "wrong - the hash is public and keyless; use HMAC",
                  "good": false
                }
              ]
            },
            "callout": {
              "type": "warning",
              "title": "MD5 is not one broken thing",
              "body": "MD5's collision break (2^18 work) kills signature uses but not HMAC-MD5's pre-image safety - which is why legacy systems kept HMAC-MD5 for years. Saying 'MD5 is broken, therefore everything with MD5 fails' is the classic overreach examiners mark down. Name the property that actually broke."
            },
            "examQuestions": [
              {
                "q": "Define the three security properties of cryptographic hash functions with their attack costs. Explain why MD5's collision break did not immediately break HMAC-MD5, and why bare password hashing is unsafe.",
                "marks": 14,
                "outline": [
                  "Compression, efficiency, and the security trio",
                  "Pre-image: 2^n; second-preimage: 2^n; collision: 2^(n/2)",
                  "MD5 collisions found at practical cost (2004)",
                  "HMAC needs pre-image/second-preimage - those held, so HMAC-MD5 survived",
                  "Signature uses died - collision transfers a signature to a new document",
                  "Bare H(pw): no salt, fast - rainbow tables and GPU cracking",
                  "Fix: per-user salt + slow KDF (PBKDF2/bcrypt/scrypt)"
                ]
              },
              {
                "q": "Why do digital signatures hash the document before signing?",
                "marks": 7,
                "outline": [
                  "Sign the n-bit digest, not the arbitrary-length document",
                  "Signature security reduces to the hash's collision resistance",
                  "Cost drops from signing large data to one block operation",
                  "A colliding pair would let one signature certify two documents",
                  "The signature binds to the digest, not the document",
                  "A colliding pair would transfer one signature to two documents",
                  "Collision resistance is the binding's real security"
                ]
              }
            ]
          }
        ]
      }
    },
    {
      "number": 3,
      "roman": "III",
      "title": "Hash Theory, Authenticated Encryption and the Road to Public Keys",
      "summary": "Unit III turns hashes from tools into theory: the ideal-cipher model and Davies-Meyer, the Merkle-Damgard paradigm, birthday attacks with their square-root arithmetic, hash applications, the random oracle model, authenticated encryption and its generic compositions, and the key-exchange problem with trapdoor functions and cyclic groups that launch public-key cryptography.",
      "chapter": {
        "number": "03",
        "title": "Merkle-Damgard, Birthday Attacks and Authenticated Encryption",
        "intro": "Unit III covers the ideal-cipher model, the Davies-Meyer construction, the Merkle-Damgard paradigm, birthday attacks on hash functions, applications of hashes, the random oracle model, authenticated encryption and its generic constructions, and the key-exchange problem with one-way trapdoor functions and cyclic groups.",
        "inOneBreath": "Davies-Meyer builds compression from an ideal block cipher; Merkle-Damgard chains it into arbitrary-length hashing; birthday attacks price collisions at 2^(n/2). Authenticated encryption is Encrypt-then-MAC or an AEAD mode - other compositions leak. Cyclic groups and trapdoor functions are the launchpad: g^x is easy forward, hard to reverse, and that asymmetry is Unit IV.",
        "sections": [
          {
            "number": "3.1",
            "title": "The ideal-cipher model and the Davies-Meyer construction",
            "body": [
              "The ideal-cipher model treats a block cipher E as a public random permutation per key - an idealization like the random oracle model, where the proof assumes perfect randomness and implementation then substitutes a real cipher. Within this model the syllabus's central construction lives: Davies-Meyer builds a compression function from the ideal cipher as h_i = E(m_i, h_{i-1}) XOR h_{i-1} - encrypt the chaining value under the message block as key, then XOR the chaining value back into the output.",
              "The XOR-back is not decoration - it is the security. Without it, h_i = E(m_i, h_{i-1}) alone is invertible: given any target h_i and block m_i, compute h_{i-1} = E^{-1}(m_i, h_i) and you can build colliding chains backwards for free. XORing the input chaining value breaks that backward walk, making finding a compression collision cost about 2^n work in the ideal-cipher model - the proof shows an attacker's collision yields either an E-encounter contradiction or an impossible distinguishing event.",
              "A worked microscopic view: chaining value h = 0x1F2E, message block m = 0xA7, and ideal cipher output E(m, h) = 0x3C - Davies-Meyer outputs 0x3C XOR 0x1F2E... concretely the XOR glues the random output to the previous state so the function 'absorbs' the block while remaining non-invertible as a map. The construction is the heart of SHA-256's compression step (with SHA-2's own round function playing the cipher role) and of Merkle-Damgard implementations generally.",
              "The exam's chain of logic: ideal-cipher assumption -> Davies-Meyer is collision-resistant (about 2^n) -> Merkle-Damgard (next section) extends it to arbitrary length -> real hash (SHA-256) inherits the argument heuristically. Name all four stations in order and the 14-marker's structure is complete; students who only state the formula without the invertibility argument lose the 'why XOR back' sub-question that examiners reliably attach."
            ],
            "keyTerms": [
              {
                "term": "Ideal-cipher model",
                "definition": "Models the block cipher as a public random permutation per key - the hash-proof idealization."
              },
              {
                "term": "Davies-Meyer",
                "definition": "h_i = E(m_i, h_{i-1}) XOR h_{i-1} - compression function from an ideal cipher."
              },
              {
                "term": "Chaining value",
                "definition": "The running n-bit state fed between compression calls."
              },
              {
                "term": "Compression function",
                "definition": "Fixed-length-input hash step from which arbitrary-length hashes are built."
              }
            ],
            "table": {
              "caption": "With and without the XOR-back - why the term is load-bearing.",
              "headers": [
                "Construction",
                "Formula",
                "Consequence"
              ],
              "rows": [
                [
                  "Naive",
                  "h_i = E(m_i, h_{i-1})",
                  "invertible - collisions built backwards for free"
                ],
                [
                  "Davies-Meyer",
                  "h_i = E(m_i, h_{i-1}) XOR h_{i-1}",
                  "collision resistance about 2^n in the ideal-cipher model"
                ]
              ]
            },
            "bullets": [
              "Ideal cipher: a public random permutation per key - the proof's idealization.",
              "Davies-Meyer: h_i = E(m_i, h_{i-1}) XOR h_{i-1}.",
              "XOR-back blocks the backward inversion that free collisions need.",
              "Collision resistance about 2^n proven in the ideal-cipher model.",
              "SHA-2's round function plays the cipher role in production."
            ],
            "diagram": {
              "kind": "flow",
              "title": "One Davies-Meyer compression step",
              "caption": "Encrypt the chaining value under the message block, then XOR the chaining value back.",
              "steps": [
                {
                  "label": "h_{i-1}",
                  "note": "n-bit chaining value in"
                },
                {
                  "label": "E(m_i, h_{i-1})",
                  "note": "block cipher, message block as key"
                },
                {
                  "label": "XOR h_{i-1}",
                  "note": "feed-forward breaks invertibility"
                },
                {
                  "label": "h_i",
                  "note": "new n-bit chaining value out"
                }
              ]
            },
            "callout": {
              "type": "exam",
              "title": "The 'why XOR back' sub-question",
              "body": "Every Davies-Meyer question hides a follow-up: 'what goes wrong without the XOR?'. Answer: the bare E(m, h) is invertible, so collisions are constructed backwards from any target at no cost. The feed-forward XOR is the entire security argument - one sentence that examiners look for explicitly."
            },
            "examQuestions": [
              {
                "q": "Explain the ideal-cipher model and the Davies-Meyer construction. Show the compression formula, argue why the XOR-back is essential for collision resistance, and connect the construction to Merkle-Damgard hashing.",
                "marks": 14,
                "outline": [
                  "Ideal cipher: public random permutation per key - proof idealization",
                  "Davies-Meyer: h_i = E(m_i, h_{i-1}) XOR h_{i-1}",
                  "Without XOR: h_{i-1} = E^{-1}(m_i, h_i) - free backward collisions",
                  "With XOR: collisions cost about 2^n in the ideal-cipher model",
                  "Merkle-Damgard chains the compression over padded blocks",
                  "Real hashes (SHA-256) inherit the argument heuristically"
                ]
              },
              {
                "q": "What is the role of the feed-forward XOR in Davies-Meyer?",
                "marks": 7,
                "outline": [
                  "Bare E(m, h) is invertible - targets yield pre-images directly",
                  "XOR with h destroys the backward reconstruction path",
                  "Collision search must now brute-force the chaining space",
                  "Bare E(m, h) is invertible - targets yield pre-images directly",
                  "The XOR destroys the backward reconstruction path",
                  "Collision search must brute-force the chaining space"
                ]
              }
            ]
          },
          {
            "number": "3.2",
            "title": "The Merkle-Damgard paradigm",
            "body": [
              "Merkle-Damgard is the paradigm that turns a fixed-length compression function into a hash for arbitrary-length messages: pad the message to a multiple of the block size (explicitly encoding the length), split into blocks m_1..m_r, and chain h_i = f(h_{i-1}, m_i) from a fixed IV, outputting the final h_r as the digest. The length encoding is the security-critical half of the padding - without it, 'abc' and 'abc' plus trailing zeros hash identically, and the domain collapses.",
              "The paradigm's theorem is the reason it is everywhere: if the compression function f is collision-resistant, then the full Merkle-Damgard hash is collision-resistant. The proof is constructive and quotable: a collision in the final digests h_r = h'_r for two different padded messages forces a walk backwards through the chain, and at the first differing block the two chaining values differ while producing the same output - that pair is a collision for f. One compression-function collision yields one full-hash collision; contrapositive: full-hash collisions imply compression collisions.",
              "A worked padding example (SHA-2 style, toy width): message 'abc' (24 bits), append bit '1', pad zeros to 56 bits, append the 64-bit length 24 - total 64 bits, one block. Two messages of different lengths thus never share a padding, and the length field makes every chain unique to its exact input. The digest h_r is the state after absorbing all blocks - which is exactly the internal state, and that fact is the length-extension weakness the next section's HMAC fixes.",
              "Exam structure: state the padding rule (1-bit, zeros, length field), the chaining recurrence with fixed IV, and the reduction theorem with its one-line proof sketch. The syllabus pairs Merkle-Damgard with Davies-Meyer because together they answer 'how do we build arbitrary-length collision-resistant hashes from one primitive' - ideal cipher -> Davies-Meyer compression -> Merkle-Damgard extension -> SHA-256. Draw the chain diagram; examiners consistently award the diagram's marks."
            ],
            "keyTerms": [
              {
                "term": "Merkle-Damgard",
                "definition": "Chain a compression function over padded message blocks; final state is the digest."
              },
              {
                "term": "Length padding",
                "definition": "Append the message length so distinct messages never produce identical padded input."
              },
              {
                "term": "Chaining IV",
                "definition": "The fixed public initial state h_0 of the chain."
              },
              {
                "term": "Extension property",
                "definition": "Given H(m), one can compute H(m || pad(m) || x) without knowing m - HMAC's motivation."
              }
            ],
            "codeExample": {
              "language": "python",
              "caption": "md_pad.py - SHA-2 style padding, toy width",
              "code": "def md_pad(msg: bytes, block: int = 8) -> bytes:\n    # toy: 64-bit blocks, 64-bit length field (SHA-2 uses 512-bit blocks)\n    padded = msg + b\"\\x80\"                    # append the 1-bit\n    while len(padded) % block != block - 8:   # zeros to length field\n        padded += b\"\\x00\"\n    return padded + len(msg).to_bytes(8, \"big\")\n\nprint(md_pad(b\"abc\"))   # 61626380 ... 0000000000000018  (len 24 bits)\n# distinct messages -> distinct padding -> distinct chains"
            },
            "bullets": [
              "Pad (1-bit + zeros + length), split into blocks, chain f from a fixed IV.",
              "Digest = final chaining value h_r.",
              "Length field guarantees distinct messages never share a chain.",
              "Theorem: collision-resistant f implies collision-resistant full hash.",
              "Proof sketch: a final collision walks back to a compression collision.",
              "The exposed final state motivates HMAC's nested construction."
            ],
            "diagram": {
              "kind": "pipeline",
              "title": "Merkle-Damgard over three blocks",
              "caption": "Pad -> split -> chain -> emit; one compression function does all the work.",
              "stages": [
                {
                  "label": "Message m",
                  "note": "arbitrary length"
                },
                {
                  "label": "Pad",
                  "note": "1-bit, zeros, 64-bit length"
                },
                {
                  "label": "Chain",
                  "note": "h_i = f(h_{i-1}, m_i) from IV"
                },
                {
                  "label": "Digest",
                  "note": "final h_r, n bits"
                }
              ]
            },
            "callout": {
              "type": "exam",
              "title": "Quote the reduction in one line",
              "body": "'A collision in the full hash yields, by walking back to the first differing block, a collision in the compression function - so collision-resistant f implies collision-resistant H.' That single contrapositive sentence is the theorem's grading scheme; recite it, then draw the chain."
            },
            "examQuestions": [
              {
                "q": "Explain the Merkle-Damgard paradigm: padding, chaining, digest extraction, and the theorem that collision resistance of the compression function implies collision resistance of the full hash. Give a padding example.",
                "marks": 14,
                "outline": [
                  "Pad: append 1-bit, zeros, explicit 64-bit length field",
                  "Example: 'abc' -> 61626380, zeros, length 24",
                  "Chain h_i = f(h_{i-1}, m_i) from fixed public IV",
                  "Digest = final chaining value",
                  "Theorem: full-hash collision -> walk back to first differing block",
                  "At that block, differing inputs produce equal outputs - collision for f",
                  "Contrapositive: collision-resistant f implies collision-resistant H"
                ]
              },
              {
                "q": "Why must the padding encode the message length?",
                "marks": 7,
                "outline": [
                  "Without it, messages differing only in trailing zeros collide",
                  "The chain would not distinguish them - domain collapses",
                  "Length field makes every chain unique to its exact input",
                  "Messages differing only in trailing zeros would collide",
                  "The length field makes every chain unique to its input"
                ]
              }
            ]
          },
          {
            "number": "3.3",
            "title": "Birthday attacks on cryptographic hash functions",
            "body": [
              "The birthday attack is the only generic attack on hash functions, and it prices collision resistance at the square root of the digest space: for an n-bit digest, a collision costs about 2^(n/2) evaluations. The mathematics is the birthday paradox in disguise - with q samples from a space of size N, the collision probability approaches 1 - exp(-q(q-1)/2N), which passes 1/2 near q = sqrt(N) (about 1.18 sqrt(N) + 1). For hashes, N = 2^n, so q = 2^(n/2).",
              "The attack in hash form: generate q = 2^(n/2) variants of a legitimate document (whitespace, timestamps, invisible unicode) storing all digests; generate q variants of a malicious document; find a variant pair sharing a digest - with 2^(n/2) documents on each side, a match is likely. The victim signs the benign variant; the signature transfers to the malicious variant. This is exactly how the SHAttered SHA-1 collision (2017) was weaponized - chosen-prefix collisions on PDFs, computationally about 2^63 work against a 160-bit digest.",
              "A worked numerical: SHA-256's 256-bit digest prices collisions at 2^128 - securely beyond reach; MD5's 128-bit digest prices them at 2^64 - reduced to about 2^18 by real cryptanalysis (2004). The defender's countermeasure is simply digest width: 256 bits and above make even the square-root cost infeasible. The attacker's countermeasure, when only a specific pair must collide (second preimage), is no discount - that costs the full 2^n, which is why birthday attacks need the freedom to choose both documents.",
              "The exam's numerical is predictable: 'how many hashes to find a collision in an n-bit digest?' - answer 2^(n/2), justify with the birthday paradox formula 1 - exp(-q^2 / 2N) and solve q = sqrt(N) for the 50% crossover. Then apply the number: 128-bit digest -> 2^64 (marginal today), 160-bit -> 2^80 (broken only by structural attacks like SHA-1's), 256-bit -> 2^128 (safe). Table + formula + application is the full-mark shape."
            ],
            "keyTerms": [
              {
                "term": "Birthday paradox",
                "definition": "q samples from N-space collide with probability near 1 - exp(-q^2/2N); crossover at q = sqrt(N)."
              },
              {
                "term": "Birthday attack",
                "definition": "Collision search at about 2^(n/2) hash evaluations using two document variant sets."
              },
              {
                "term": "Chosen-prefix collision",
                "definition": "Two chosen prefixes extended to collide - the SHAttered weaponization."
              },
              {
                "term": "Second preimage",
                "definition": "Collision on one fixed target message - costs the full 2^n, no birthday discount."
              }
            ],
            "table": {
              "caption": "Digest width vs collision cost - the defender's dial.",
              "headers": [
                "Digest",
                "n bits",
                "Collision cost 2^(n/2)",
                "Status"
              ],
              "rows": [
                [
                  "MD5",
                  "128",
                  "2^64 (broken further: 2^18 structural)",
                  "retired"
                ],
                [
                  "SHA-1",
                  "160",
                  "2^80 (SHAttered: about 2^63)",
                  "retired"
                ],
                [
                  "SHA-256",
                  "256",
                  "2^128",
                  "current standard"
                ],
                [
                  "SHA-512",
                  "512",
                  "2^256",
                  "long-term margin"
                ]
              ]
            },
            "bullets": [
              "Collision cost is 2^(n/2) - the square root of the digest space.",
              "Birthday paradox: 50% crossover at q = about 1.18 sqrt(N) + 1 samples.",
              "Attack shape: 2^(n/2) variants of a benign and a malicious document.",
              "Matched digests transfer one signature to the other document (SHAttered).",
              "Second preimages get no birthday discount - full 2^n.",
              "Defence is digest width: 256 bits prices collisions at 2^128."
            ],
            "diagram": {
              "kind": "flow",
              "title": "The birthday attack on a signature",
              "caption": "Two variant clouds, one matching digest - the signature transfers.",
              "steps": [
                {
                  "label": "Build variants A",
                  "note": "2^(n/2) benign documents, store digests"
                },
                {
                  "label": "Build variants B",
                  "note": "2^(n/2) malicious documents"
                },
                {
                  "label": "Find a match",
                  "note": "same digest in both clouds - likely at sqrt cost"
                },
                {
                  "label": "Get A signed",
                  "note": "victim approves the benign variant"
                },
                {
                  "label": "Transfer",
                  "note": "signature verifies on the malicious variant"
                }
              ]
            },
            "callout": {
              "type": "exam",
              "title": "Do the sqrt arithmetic out loud",
              "body": "For any n-bit digest question, write N = 2^n, q = sqrt(N) = 2^(n/2), then instantiate: 128-bit -> 2^64, 256-bit -> 2^128. Then add the defender's line: 'hence 256-bit digests for signatures'. The formula-to-number-to-conclusion chain is what the marks are attached to."
            },
            "examQuestions": [
              {
                "q": "Explain the birthday paradox and how it yields a 2^(n/2) collision attack on n-bit hashes. Describe the two-variant attack against digital signatures and compute the collision cost for MD5, SHA-1 and SHA-256.",
                "marks": 14,
                "outline": [
                  "Paradox: collision probability 1 - exp(-q(q-1)/2N), N = 2^n",
                  "Crossover near q = sqrt(N) -> 2^(n/2) evaluations",
                  "Attack: 2^(n/2) benign variants + 2^(n/2) malicious variants",
                  "Matched digest transfers the signature (SHAttered on SHA-1)",
                  "MD5: 2^64 generic, 2^18 structural - retired",
                  "SHA-1: 2^80 generic, about 2^63 demonstrated - retired",
                  "SHA-256: 2^128 - infeasible; defence is digest width"
                ]
              },
              {
                "q": "Why does the birthday attack not apply to finding the preimage of one fixed hash value?",
                "marks": 7,
                "outline": [
                  "The attack needs freedom to choose both colliding inputs",
                  "A fixed target pins one side - no variant cloud to build",
                  "Preimage cost stays 2^n with no square-root discount",
                  "The attack needs freedom to choose both colliding inputs",
                  "A fixed target pins one side - no variant cloud",
                  "Preimage cost stays 2^n with no square-root discount"
                ]
              }
            ]
          },
          {
            "number": "3.4",
            "title": "Applications of hash functions",
            "body": [
              "Hash functions earn their place in four applications, each leaning on a different resistance property. File integrity: publish a digest over an authenticated channel, recompute locally - any corruption or targeted substitution is caught because finding a second file with the same digest costs 2^n. Digital signatures: sign the digest, so the signature covers arbitrary-length documents at one block-cipher cost, with collision resistance certifying the binding (section 3.3's attack is the counterexample budget).",
              "Password storage: store H(salt || password) with a per-user random salt, never the bare hash. The salt defeats rainbow tables (precomputed hash-to-password dictionaries no longer match any stored value), forces per-user recomputation, and its publicity is fine - the salt is not a secret, only unique. The extra ingredient is slowness: PBKDF2, bcrypt or scrypt run thousands-to-millions of iterations so GPU-driven offline guessing prices each guess in milliseconds, not nanoseconds.",
              "Key derivation and HMAC close the set: KDFs stretch a shared secret (or master key) into multiple independent-looking subkeys with context labels - TLS 1.3's HKDF is the deployed example, deriving separate keys for encryption and MAC from one handshake secret. HMAC (section 2.5) is the hash wrapped in a keyed nest for authentication. A worked hierarchy: one Diffie-Hellman secret -> HKDF -> four derived keys (client-to-server encryption, server-to-client encryption, two MAC keys) - one entropy source, four independent keys.",
              "Exam framing: for each application, name the property and the failure it prevents - integrity leans on second-preimage; signatures on collision resistance; passwords on pre-image plus salting plus slowness; KDFs/HMAC on pseudorandomness of the underlying hash. The discriminating sub-question examiners love: 'why salt passwords if the salt is public?' - because uniqueness forces per-user work and kills precomputation; secrecy is not the salt's job, uniqueness is."
            ],
            "keyTerms": [
              {
                "term": "Digest",
                "definition": "The fixed-length hash output used as a compact stand-in for the data."
              },
              {
                "term": "Salt",
                "definition": "Public per-user random value hashed with the password to defeat precomputation."
              },
              {
                "term": "PBKDF2 / bcrypt / scrypt",
                "definition": "Deliberately slow key-derivation functions for password storage."
              },
              {
                "term": "HKDF",
                "definition": "HMAC-based KDF deriving multiple independent subkeys from one secret with context labels."
              }
            ],
            "codeExample": {
              "language": "python",
              "caption": "pwstore.py - salted, slow password verification",
              "code": "import hashlib, os\n\ndef store(pw: bytes):\n    salt = os.urandom(16)                     # public, unique per user\n    dk = hashlib.pbkdf2_hmac(\"sha256\", pw, salt, 200_000, dklen=32)\n    return salt, dk                           # store both, never the password\n\ndef verify(pw: bytes, salt: bytes, dk: bytes) -> bool:\n    return hmac.compare_digest(\n        hashlib.pbkdf2_hmac(\"sha256\", pw, salt, 200_000, dklen=32), dk)\n\nsalt, dk = store(b\"s3cret!\")\nprint(verify(b\"s3cret!\", salt, dk))     # True\nprint(verify(b\"hunter2\", salt, dk))     # False"
            },
            "bullets": [
              "File integrity: second-preimage resistance catches targeted substitution.",
              "Signatures: hash-then-sign; collision resistance certifies the binding.",
              "Passwords: salt (unique, public) + slow KDF - uniqueness beats precomputation.",
              "Rainbow tables die against per-user salts even with the salt published.",
              "KDF/HKDF: one secret -> many independent subkeys with context labels.",
              "Name the property per application - that naming is the exam's target."
            ],
            "diagram": {
              "kind": "pyramid",
              "title": "Password storage defences, weakest to strongest",
              "caption": "Each tier multiplies the attacker's per-guess cost.",
              "tiers": [
                {
                  "label": "Bare hash",
                  "note": "rainbow-table instant death"
                },
                {
                  "label": "Salted hash",
                  "note": "precomputation dead; guess speed unchanged"
                },
                {
                  "label": "Salted slow KDF",
                  "note": "per-guess milliseconds - GPU farms priced out"
                },
                {
                  "label": "+ memory-hardness (scrypt/argon2)",
                  "note": "ASIC parity restored"
                }
              ]
            },
            "callout": {
              "type": "tip",
              "title": "The salt is public - say so",
              "body": "The salt's job is uniqueness, not secrecy: per-user salts make every rainbow table and every precomputation useless, even stored in the clear alongside the hash. Confusing salt with secret key is the classic conceptual slip; the KDF's slowness, not salt secrecy, is the offline-defence mechanism."
            },
            "examQuestions": [
              {
                "q": "Describe four applications of cryptographic hash functions, naming for each the security property it relies on and the attack it prevents.",
                "marks": 14,
                "outline": [
                  "File integrity: second-preimage - catches substitution of specific files",
                  "Digital signatures: collision resistance - hash-then-sign binding",
                  "Password storage: pre-image + salt + slow KDF - offline guessing priced",
                  "Key derivation (HKDF): pseudorandomness - one secret, many subkeys",
                  "Explain rainbow tables and why per-user salts defeat them",
                  "Explain why KDF slowness (PBKDF2/bcrypt) prices GPU guessing",
                  "Name the property, not just the algorithm - the grading target"
                ]
              },
              {
                "q": "Why are password salts stored publicly, and what exactly do they defend against?",
                "marks": 7,
                "outline": [
                  "Salt's job is uniqueness, not secrecy",
                  "Per-user salts invalidate shared precomputed tables",
                  "Each hash must be recomputed per user - precomputation dies",
                  "Offline-guessing speed is limited by the KDF, not the salt",
                  "Uniqueness forces per-user recomputation",
                  "Rainbow tables and precomputed dictionaries die",
                  "Offline-guessing speed is limited by the KDF, not salt secrecy"
                ]
              }
            ]
          },
          {
            "number": "3.5",
            "title": "The random oracle model",
            "body": [
              "The random oracle model (ROM) is a proof technique: model the hash function as a public truly-random function RO that every party - attacker included - can query, answering each new input with a fresh uniform output and repeating answers for repeats. Protocols are then proven secure where RO is perfectly random; in deployment, RO is instantiated by a real hash like SHA-256. The assumption 'the real hash behaves like RO' is the heuristic bridge - powerful, productive, and formally unprovable.",
              "The model's power shows in its flagship results: OAEP padding for RSA (Unit V) and PSS for signatures are proven CCA-secure / unforgeable in the ROM and are the deployed standards. The proof style is the game-plus-bookkeeping the whole course uses: track the attacker's RO queries, show that a win forces either an RO-query contradiction or a break of the underlying problem. Because RO answers are uniform and unpredictable until queried, the attacker's advantage is bounded by its query budget.",
              "The model's caveat is the exam's favourite sub-question: there exist artificial schemes secure in the ROM but insecure under every real instantiation - the 'uninstantiability' results. The practical hygiene rules follow: never make RO queries attacker-predictable in aggregate, never hash into a fixed small domain without widening (the natural-collision issue), and treat ROM proofs as strong engineering evidence, not unconditional guarantees. A worked intuition: ROM security of a password protocol bounds the attacker to guessing passwords one RO query at a time - offline precomputation is impossible when the RO answers nothing until queried.",
              "For the exam, define the ROM in one sentence, give its two flagship constructions (OAEP, PSS) and the one-line proof style, then state the caveat with the word 'uninstantiable'. RGPV questions usually ask 'what is the random oracle model and why is it used?' - the expected answer is the idealization-with-instantiation pattern plus the honest caveat, not a debate; students who only say 'hashes are random' without the query-accounting mechanism miss the technical content."
            ],
            "keyTerms": [
              {
                "term": "Random oracle (RO)",
                "definition": "A public truly-random function every party may query; new inputs get fresh uniform outputs."
              },
              {
                "term": "ROM proof",
                "definition": "Security proven where the hash is RO; deployment instantiates a real hash."
              },
              {
                "term": "Uninstantiability",
                "definition": "Existence of schemes secure in ROM but insecure under every real hash."
              },
              {
                "term": "Query budget",
                "definition": "The attacker's RO-query count - the resource ROM proofs bound."
              }
            ],
            "table": {
              "caption": "ROM - the power and the caveat, one row each.",
              "headers": [
                "Aspect",
                "Content",
                "Consequence"
              ],
              "rows": [
                [
                  "Idealization",
                  "hash = public random function, query access",
                  "clean, strong proofs possible"
                ],
                [
                  "Flagship results",
                  "RSA-OAEP (CCA), RSA-PSS (signatures)",
                  "the deployed standards"
                ],
                [
                  "Proof style",
                  "bound attacker by its RO-query budget",
                  "wins force query contradictions"
                ],
                [
                  "Caveat",
                  "uninstantiable schemes exist",
                  "ROM security is evidence, not a guarantee"
                ]
              ]
            },
            "bullets": [
              "RO: new inputs get fresh uniform answers; repeats are answered consistently.",
              "Proofs bound the attacker by its query budget - wins force contradictions.",
              "OAEP and PSS are ROM-proven and deployed as the RSA standards.",
              "Deployment substitutes SHA-256 - the heuristic bridge.",
              "Uninstantiability results: ROM security can fail for every real hash.",
              "Hygiene: avoid attacker-predictable query patterns and tiny hash domains."
            ],
            "diagram": {
              "kind": "compare",
              "title": "The ROM idealization vs the real hash",
              "caption": "Proofs live on the left; deployment lives on the right - the bridge is a heuristic.",
              "left": {
                "heading": "Random oracle",
                "items": [
                  "Truly random answers to new queries",
                  "No structure to exploit",
                  "Security proofs are clean",
                  "Attacker bounded by query count"
                ]
              },
              "right": {
                "heading": "Real hash (SHA-256)",
                "items": [
                  "Deterministic, structured internally",
                  "Possible (rare) structural weaknesses",
                  "ROM proofs transfer heuristically",
                  "Standards mitigate: OAEP, PSS, HKDF"
                ]
              }
            },
            "callout": {
              "type": "exam",
              "title": "Name the caveat to name the marks",
              "body": "The one-word differentiator in ROM answers is 'uninstantiability' - schemes provable in ROM but broken under every real hash. Dropping that word makes the answer read as naive; including it, with OAEP/PSS as flagship examples, signals the syllabus-level understanding the question was written to find."
            },
            "examQuestions": [
              {
                "q": "Explain the random oracle model: the idealization, the proof style based on query accounting, two flagship constructions proven in it, and the model's formal limitation.",
                "marks": 14,
                "outline": [
                  "RO: public truly-random function; new inputs -> fresh uniform outputs",
                  "Every party, attacker included, gets query access",
                  "Proofs bound the attacker by its RO-query budget",
                  "Wins force RO-query contradictions or underlying-problem breaks",
                  "Flagships: RSA-OAEP (CCA-secure), RSA-PSS (unforgeable signatures)",
                  "Deployment instantiates SHA-256 - heuristic bridge",
                  "Caveat: uninstantiable schemes exist - ROM security is not unconditional"
                ]
              },
              {
                "q": "Why does the random oracle model make offline password precomputation useless?",
                "marks": 7,
                "outline": [
                  "RO answers nothing until queried with the exact input",
                  "Precomputed tables would require queries on every candidate",
                  "Query budget - not time - becomes the attacker's constraint",
                  "RO answers nothing until queried with the exact input",
                  "Precomputation would require a query per candidate",
                  "Query budget, not time, becomes the constraint"
                ]
              }
            ]
          },
          {
            "number": "3.6",
            "title": "Authenticated encryption and generic constructions",
            "body": [
              "Authenticated encryption (AE) delivers confidentiality and integrity together: the adversary cannot read the plaintext nor alter ciphertexts undetected. The security game (privacy + authenticity): the attacker chooses messages, sees encryptions, then submits a fresh ciphertext - it wins if that ciphertext decrypts without rejection. Plain CPA-secure encryption fails the authenticity half (bit-flipping works); plain MACs fail the confidentiality half (tags leak equality patterns). AE needs both primitives composed correctly.",
              "The three generic compositions, in syllabus order: Encrypt-and-MAC (c = Enc(k1, m), t = MAC(k2, m)) - the tag authenticates plaintext, but both travel; MAC leakage patterns can assist plaintext recovery, and the construction is not secure in general. MAC-then-encrypt (t computed on m, both encrypted together) - used by TLS 1.0-1.2's CBC suites; decryption must parse and verify in order, and padding-oracle side channels (Lucky 13) leak through timing. Encrypt-then-MAC (c = Enc(k1, m), t = MAC(k2, c)) - the tag authenticates the ciphertext; decryption rejects before touching Enc, so no oracle exists. EtM is provably secure and the standard.",
              "The worked attack that motivates the ordering: against MAC-then-encrypt with CBC, an attacker submits modified ciphertexts and watches accept/reject (or timing); each valid-looking padding leaks one byte of information, and Lucky 13 recovered cookies over many millions of queries. Against EtM the same tampering dies at the MAC check before any decryption runs - there is no oracle to consult. The lesson: compose so that verification precedes decryption, and the oracle disappears.",
              "Modern practice folds the composition into one primitive: AEAD modes (GCM, ChaCha20-Poly1305) take (key, nonce, plaintext, associated data) and produce ciphertext + tag in one pass, with nonce-uniqueness as the single hard rule (GCM nonce reuse is catastrophic - it leaks the authentication subkey). Exam answers should give the three compositions with one-line security verdicts, the EtM argument (no decryption oracle), and the AEAD + nonce rule as the modern conclusion."
            ],
            "keyTerms": [
              {
                "term": "Authenticated encryption (AE)",
                "definition": "Confidentiality + ciphertext integrity in one scheme; tampering is rejected."
              },
              {
                "term": "Encrypt-then-MAC",
                "definition": "Encrypt, then MAC the ciphertext - verification precedes decryption; provably secure."
              },
              {
                "term": "MAC-then-encrypt",
                "definition": "MAC the plaintext, encrypt both - TLS's legacy order; padding-oracle exposure."
              },
              {
                "term": "AEAD",
                "definition": "AE with associated data - GCM, ChaCha20-Poly1305; one pass, nonce-uniqueness rule."
              },
              {
                "term": "Lucky 13",
                "definition": "2013 timing attack on MAC-then-encrypt CBC padding in TLS."
              }
            ],
            "table": {
              "caption": "The three generic AE compositions - verdicts included.",
              "headers": [
                "Composition",
                "Order",
                "Security verdict"
              ],
              "rows": [
                [
                  "Encrypt-and-MAC",
                  "c = Enc(k1, m); t = MAC(k2, m)",
                  "not secure in general - tag leaks plaintext patterns"
                ],
                [
                  "MAC-then-encrypt",
                  "encrypt (m, MAC(k2, m)) together",
                  "exposes padding/timing oracles (Lucky 13)"
                ],
                [
                  "Encrypt-then-MAC",
                  "c = Enc(k1, m); t = MAC(k2, c)",
                  "provably secure - rejects before decrypting"
                ]
              ]
            },
            "bullets": [
              "AE goal: attacker cannot read plaintext nor forge a fresh valid ciphertext.",
              "Encryption alone: malleable (CTR bit-flips); MAC alone: no confidentiality.",
              "EtM authenticates the ciphertext - no decryption oracle ever runs.",
              "MtE is TLS's legacy CBC order - Lucky 13 timing leaks plaintext bytes.",
              "E&M leaks tag patterns; not generally secure.",
              "AEAD (GCM, ChaCha20-Poly1305) folds it in one pass; nonce reuse is fatal."
            ],
            "diagram": {
              "kind": "matrix",
              "title": "The four corners of message protection",
              "caption": "Authenticated encryption is exactly the one corner with both guarantees.",
              "axes": {
                "x": "Integrity (no -> yes)",
                "y": "Confidentiality (no -> yes)"
              },
              "quadrants": [
                {
                  "label": "MAC only",
                  "note": "integrity, plaintext visible"
                },
                {
                  "label": "Authenticated encryption",
                  "note": "both guarantees - EtM / AEAD"
                },
                {
                  "label": "Neither (ECB alone)",
                  "note": "readable structure, freely malleable"
                },
                {
                  "label": "Encryption only",
                  "note": "confidential but bit-flippable"
                }
              ]
            },
            "callout": {
              "type": "warning",
              "title": "Verification must precede decryption",
              "body": "The design rule that kills padding oracles: never decrypt-then-parse-then-verify. Encrypt-then-MAC checks the tag on the ciphertext and rejects before any decryption runs. TLS's 20-year pain (CBC padding oracles, Lucky 13) is the case study; TLS 1.3 removed CBC entirely and mandated AEAD."
            },
            "examQuestions": [
              {
                "q": "Define authenticated encryption. Compare the three generic compositions (encrypt-and-MAC, MAC-then-encrypt, encrypt-then-MAC) with their security verdicts, and explain why EtM is the safe choice.",
                "marks": 14,
                "outline": [
                  "AE: confidentiality + ciphertext integrity in one scheme",
                  "Encryption alone is malleable; MACs alone leak patterns",
                  "Encrypt-and-MAC: tag on plaintext travels with it - leaks in general",
                  "MAC-then-encrypt: TLS legacy - padding/timing oracles (Lucky 13)",
                  "Encrypt-then-MAC: tag over ciphertext",
                  "Verification precedes decryption - no oracle exists",
                  "Modern conclusion: AEAD modes (GCM, ChaCha20-Poly1305) + nonce rule"
                ]
              },
              {
                "q": "Explain the padding-oracle attack against MAC-then-encrypt with CBC in one paragraph.",
                "marks": 7,
                "outline": [
                  "Attacker submits modified ciphertexts",
                  "Padding validity leaks via error/timing differences",
                  "Each valid padding reveals plaintext bytes progressively",
                  "EtM removes the oracle - the MAC rejects before decryption",
                  "Modified ciphertexts probe padding validity via errors or timing",
                  "Each valid padding reveals plaintext bytes progressively",
                  "EtM removes the oracle - the MAC rejects before decryption"
                ]
              }
            ]
          },
          {
            "number": "3.7",
            "title": "The key-exchange problem, trapdoor functions and cyclic groups",
            "body": [
              "Everything so far assumed a shared secret key - but how do two parties who have never met create one over a channel an eavesdropper reads? That is the key-exchange problem, and it is unsolvable with the tools of Units I-III: any function of the public channel contents that both parties can compute, the eavesdropper can compute too. The resolution needs a new mathematical shape: operations easy to compute forward, infeasible to reverse - one-way functions with a trapdoor.",
              "A one-way function is easy to evaluate, hard to invert: multiplying two large primes is milliseconds; factoring the product is infeasible (this is RSA's assumption, formalized in Unit V). A trapdoor function adds a secret that inverts it: with the private exponent, decryption is easy. Public-key cryptography is exactly the exploitation of such asymmetries - publish the forward direction, keep the trapdoor.",
              "Cyclic groups are the second launchpad ingredient: a finite group G generated by one element g, so every member is g^x for some exponent x. Worked example: in Z_23* (multiplicative group mod 23, order 22), generator g = 5 produces every non-zero residue - 5^1 = 5, 5^2 = 2, 5^4 = 4, 5^8 = 16, 5^11 = 22 (=-1), 5^22 = 1. Exponentiation is fast (square-and-multiply, about log q multiplications); recovering x from h = g^x is the discrete logarithm problem - believed infeasible for proper groups. That asymmetry powers Diffie-Hellman (Unit IV).",
              "The exam bridge: state the key-exchange problem, define one-way and trapdoor functions with factoring as the running example, and define a cyclic group with the mod-23 walkthrough - then the sentence 'Diffie-Hellman security rests on the gap between easy exponentiation and hard discrete logarithms' connects Unit III to Unit IV. Examiners set this section as the conceptual hinge; the group-theory vocabulary (generator, order, group operation) is the vocabulary they check first."
            ],
            "keyTerms": [
              {
                "term": "Key-exchange problem",
                "definition": "Creating a shared secret over a public channel that an eavesdropper cannot compute."
              },
              {
                "term": "One-way function",
                "definition": "Easy to evaluate, infeasible to invert - e.g. multiplying large primes."
              },
              {
                "term": "Trapdoor function",
                "definition": "A one-way function invertible only with a secret trapdoor - the shape of public-key crypto."
              },
              {
                "term": "Cyclic group",
                "definition": "A group generated by one element g; every member is g^x for some exponent x."
              },
              {
                "term": "Order",
                "definition": "The number of elements in the group (or the smallest e with g^e = identity)."
              }
            ],
            "table": {
              "caption": "The asymmetries public-key cryptography is built on.",
              "headers": [
                "Asymmetry",
                "Easy direction",
                "Hard direction",
                "Used by"
              ],
              "rows": [
                [
                  "Multiplication / factoring",
                  "n = p * q",
                  "factor n",
                  "RSA (Unit V)"
                ],
                [
                  "Exponentiation / discrete log",
                  "h = g^x mod p",
                  "find x from (g, h)",
                  "Diffie-Hellman, ElGamal (Unit IV)"
                ],
                [
                  "Curve-point multiply / ECDLP",
                  "Q = xP on the curve",
                  "find x from (P, Q)",
                  "ECC (Unit IV)"
                ]
              ]
            },
            "bullets": [
              "Key exchange over a public channel needs more than symmetric tools.",
              "One-way: multiply primes easily; factoring the product is infeasible.",
              "Trapdoor: a secret that inverts - the private key's defining role.",
              "Cyclic group: every element is g^x; Z_23* with g = 5 demonstrates it.",
              "Square-and-multiply makes exponentiation about log q steps.",
              "The DLP gap (easy forward, hard reverse) powers Unit IV entirely."
            ],
            "diagram": {
              "kind": "flow",
              "title": "From shared-key problem to group-theory solution",
              "caption": "The hinge between the two halves of the course.",
              "steps": [
                {
                  "label": "Problem",
                  "note": "share a secret over a public channel"
                },
                {
                  "label": "Need",
                  "note": "easy-forward, hard-reverse math"
                },
                {
                  "label": "Tool 1",
                  "note": "trapdoor one-way functions (factoring)"
                },
                {
                  "label": "Tool 2",
                  "note": "cyclic groups + hard DLP"
                },
                {
                  "label": "Unit IV",
                  "note": "Diffie-Hellman, ElGamal, ECC"
                }
              ]
            },
            "callout": {
              "type": "tip",
              "title": "Memorize one group cold",
              "body": "Keep Z_23* with generator 5 ready: 5^2 = 2, 5^4 = 4, 5^8 = 16, 5^11 = -1, 5^22 = 1. Every Unit IV numerical in this syllabus (DLP, CDH, DH exchange, ElGamal) can be walked on it, and examiners accept small primes as worked examples by convention."
            },
            "examQuestions": [
              {
                "q": "State the key-exchange problem and explain why symmetric-key tools cannot solve it. Define one-way and trapdoor functions and cyclic groups, and explain how these concepts launch public-key cryptography.",
                "marks": 14,
                "outline": [
                  "Problem: two strangers need a shared secret over a watched channel",
                  "Symmetric limitation: anything both compute from public data, the watcher computes too",
                  "One-way function: easy forward (multiply primes), infeasible reverse (factor)",
                  "Trapdoor: secret inverter - the private key's role",
                  "Cyclic group: one generator g; every element is g^x",
                  "Walkthrough: Z_23*, g = 5 - powers 5, 2, 4, 16, ... cycle of length 22",
                  "Bridge: easy g^x vs hard x recovery = DLP - Diffie-Hellman's fuel"
                ]
              },
              {
                "q": "Show that 5 is a generator of Z_23* by listing enough powers, and state the order of the group.",
                "marks": 7,
                "outline": [
                  "Z_23* has 22 elements (1..22)",
                  "5^2 = 2, 5^4 = 4, 5^8 = 16, 5^11 = 22 = -1 mod 23",
                  "5^22 = 1 and no smaller positive exponent gives 1 with full coverage",
                  "Order of 5 is 22 = group order - hence a generator",
                  "Z_23* has 22 elements - the residues 1 through 22",
                  "No smaller positive exponent gives 1 with full coverage",
                  "Order of 5 = 22 = group order - hence a generator"
                ]
              }
            ]
          }
        ]
      }
    },
    {
      "number": 4,
      "roman": "IV",
      "title": "Hardness Problems and Public-Key Encryption",
      "summary": "Unit IV is the number-theoretic core: the discrete-logarithm problem, the computational and decisional Diffie-Hellman problems and their hierarchy, Diffie-Hellman key exchange, elliptic-curve groups and the ECDLP, and public-key encryption - ElGamal under DDH and the trapdoor-RSA sketch that Unit V completes.",
      "chapter": {
        "number": "04",
        "title": "Discrete Logarithms, Diffie-Hellman and Curves",
        "intro": "Unit IV covers the discrete-logarithm problem, the computational and decisional Diffie-Hellman problems, Diffie-Hellman key exchange, elliptic-curve cryptography and the ECDLP, and public-key encryption schemes including ElGamal.",
        "inOneBreath": "DLP: recovering x from g^x is infeasible in proper groups; CDH: computing g^xy from g^x and g^y; DDH: even distinguishing g^xy from random is infeasible - a strictly strengthening ladder. DH exchange works the CDH asymmetry; curves shrink key sizes by 10x. ElGamal encrypts by masking with g^xy - semantic security exactly under DDH.",
        "sections": [
          {
            "number": "4.1",
            "title": "The discrete-logarithm problem",
            "body": [
              "The discrete-logarithm problem (DLP) is the syllabus's first formal hardness assumption: given a cyclic group G with generator g and a target h in G, find x such that g^x = h. Exponentiation is cheap - square-and-multiply computes g^x in about log2(x) group operations - while x-recovery is believed exponentially expensive in properly chosen groups. The whole of Diffie-Hellman cryptography lives in that one-way gap.",
              "The known attack landscape prices the gap. Generic attacks (using only group structure): baby-step giant-step and Pollard's rho both run in O(sqrt(q)) for a group of prime order q - matching the birthday bound; for q about 2^256 that is 2^128 work, safe. Non-generic attacks exploit the ambient representation: index calculus runs sub-exponentially in Z_p* (about 2^(1.9 n^(1/3))), which is why DH mod primes needs 2048+ bit moduli, while elliptic-curve groups (no known sub-exponential attack) achieve comparable security at 256 bits.",
              "A worked toy example: in Z_23* with generator g = 5, given h = 17, find x. Trial: 5^1 = 5, 5^2 = 2, 5^3 = 10, 5^4 = 4, 5^5 = 20, 5^6 = 8, 5^7 = 17 - so x = 7. At toy size trial search is trivial; at cryptographic size (q about 2^256) the same trial needs 2^255 average steps. Baby-step giant-step splits the search into sqrt(q) stored baby steps and sqrt(q) giant steps - 2^128 for q = 2^256: feasible to state, infeasible to run.",
              "Parameter selection is the operational exam point: choose a large prime-order subgroup (not just a large prime modulus - small-subgroup attacks exploit composite orders), validate received group elements, and match the group size to the target security level (2048-3072-bit finite-field DH, 256-bit curves). The syllabus's phrase 'Discrete-Logarithm Problem' is the anchor for all of it - define it, price it, parameterize it, and the section is complete."
            ],
            "keyTerms": [
              {
                "term": "Discrete logarithm problem",
                "definition": "Given (G, g, h), find x with g^x = h - believed infeasible in proper groups."
              },
              {
                "term": "Square-and-multiply",
                "definition": "Fast exponentiation in about log2(x) multiplications."
              },
              {
                "term": "Baby-step giant-step",
                "definition": "Generic DLP attack in O(sqrt(q)) time and space."
              },
              {
                "term": "Index calculus",
                "definition": "Sub-exponential DLP attack exploiting Z_p* structure - why finite-field groups need large moduli."
              },
              {
                "term": "Small-subgroup attack",
                "definition": "Exploiting composite group order to leak exponents; fixed by prime-order subgroups."
              }
            ],
            "table": {
              "caption": "DLP attack landscape and the parameter consequences.",
              "headers": [
                "Attack",
                "Cost",
                "Applies to",
                "Parameter consequence"
              ],
              "rows": [
                [
                  "Trial search",
                  "O(q)",
                  "any group",
                  "never sufficient alone - baseline"
                ],
                [
                  "Baby-step giant-step",
                  "O(sqrt(q))",
                  "any group (generic)",
                  "256-bit order -> 2^128 work"
                ],
                [
                  "Pollard's rho",
                  "O(sqrt(q))",
                  "any group (generic)",
                  "same bound, low memory"
                ],
                [
                  "Index calculus",
                  "sub-exponential",
                  "Z_p* only",
                  "finite-field DH needs 2048+ bit moduli"
                ]
              ]
            },
            "bullets": [
              "DLP: given (G, g, h = g^x), recover x - easy forward, hard reverse.",
              "Generic attacks cost O(sqrt(q)) - BSGS and Pollard's rho.",
              "Index calculus is sub-exponential but only in Z_p*.",
              "Toy walkthrough: mod 23, g = 5, h = 17 -> x = 7 by trial.",
              "Choose prime-order subgroups to kill small-subgroup attacks.",
              "Group size sets security: 2048-3072-bit field DH, 256-bit curves."
            ],
            "diagram": {
              "kind": "flow",
              "title": "Baby-step giant-step at a glance",
              "caption": "Trade memory for time: sqrt(q) baby steps stored, sqrt(q) giant steps searched.",
              "steps": [
                {
                  "label": "Split x = i*m + j",
                  "note": "m = ceil(sqrt(q))"
                },
                {
                  "label": "Baby steps",
                  "note": "store g^j for j = 0..m-1 in a table"
                },
                {
                  "label": "Giant steps",
                  "note": "compute h * (g^-m)^i for i = 0..m-1"
                },
                {
                  "label": "Table hit",
                  "note": "match reveals j and i - x = i*m + j"
                }
              ]
            },
            "callout": {
              "type": "tip",
              "title": "One walkthrough, reused four times",
              "body": "The mod-23 group with g = 5 services every Unit IV numerical: DLP (17 -> x = 7), the DH exchange (shared secret 2 with x = 6, y = 15), and ElGamal toy encryptions. Prepare it once as a table of powers - examiners allow small primes, and the arithmetic stays checkable by hand."
            },
            "examQuestions": [
              {
                "q": "Define the discrete-logarithm problem. Survey the attack landscape (trial, baby-step giant-step, Pollard rho, index calculus) with costs, and derive the parameter guidance for finite-field and elliptic-curve groups.",
                "marks": 14,
                "outline": [
                  "DLP: given (G, g, h), find x with g^x = h",
                  "Easy direction: square-and-multiply in about log q steps",
                  "Generic attacks: BSGS and Pollard rho at O(sqrt(q))",
                  "Index calculus: sub-exponential but Z_p*-specific",
                  "Toy walkthrough: mod 23, g = 5, h = 17 -> x = 7",
                  "Consequence: finite-field DH needs 2048+ bit moduli",
                  "Curves lack sub-exponential attacks - 256-bit keys suffice"
                ]
              },
              {
                "q": "Recover the discrete logarithm x with base g = 5 for h = 17 modulo 23, showing your trial steps.",
                "marks": 7,
                "outline": [
                  "Powers of 5 mod 23: 5, 2, 10, 4, 20, 8, 17",
                  "5^7 = 17 mod 23 - so x = 7",
                  "Verify: 5^7 = 5^4 * 5^2 * 5 = 4 * 2 * 5 = 40 = 17 mod 23",
                  "Powers of 5 mod 23: 5, 2, 10, 4, 20, 8, 17",
                  "5^7 = 17 - so x = 7",
                  "Verify: 5^4 * 5^2 * 5 = 4 * 2 * 5 = 40 = 17 mod 23"
                ]
              }
            ]
          },
          {
            "number": "4.2",
            "title": "The computational Diffie-Hellman problem and key exchange",
            "body": [
              "The computational Diffie-Hellman problem (CDH) is DLP's family form: given (g, g^x, g^y) in a cyclic group, compute g^xy. Knowing x or y individually would solve it (raise the other party's value to your exponent), but neither is recoverable in feasible time - DLP is the harder problem, and CDH is what key exchange actually needs. The hierarchy matters for proofs: solving CDH is no harder than solving DLP, and DDH (next section) is no harder than CDH - hardness flows upward in strength.",
              "Diffie-Hellman key exchange exploits CDH directly. Alice picks secret x, sends A = g^x; Bob picks secret y, sends B = g^y; both compute s = g^xy - Alice as B^x, Bob as A^y. The eavesdropper sees (g, g^x, g^y) and faces CDH exactly. Worked example in Z_23*, g = 5: Alice x = 6 sends A = 5^6 = 8; Bob y = 15 sends B = 5^15 = 19; Alice computes 19^6 mod 23 = 2, Bob computes 8^15 mod 23 = 2 - shared secret 2, and the observer holding 8 and 19 cannot get it without solving CDH.",
              "Two properties fix the deployment picture. Ephemeral DH (DHE/ECDHE) uses fresh (x, y) per session, giving forward secrecy: later key compromise cannot decrypt past traffic, because each session's g^xy is gone. Static DH (one long-term exponent) lacks it - one leak exposes all history. And raw DH is unauthenticated: an active attacker can run two independent exchanges (man-in-the-middle), sharing s1 with Alice and s2 with Bob while relaying - authentication via signatures/certificates is what converts DH into TLS's handshake (Unit V).",
              "Exam framing: define CDH with its input/output tuple, walk the toy exchange with all four computed values (8, 19, 2, 2), and close with the two deployment properties - forward secrecy from ephemeral exponents, MITM vulnerability from missing authentication. The MITM point is the highest-yield sentence in the section: examiners reliably attach 'is DH secure against active attackers?' and the answer is 'not alone - it needs authentication'."
            ],
            "keyTerms": [
              {
                "term": "CDH problem",
                "definition": "Given (g, g^x, g^y), compute g^xy - the problem DH key exchange rests on."
              },
              {
                "term": "Diffie-Hellman exchange",
                "definition": "Alice sends g^x, Bob sends g^y; both derive g^xy as the shared secret."
              },
              {
                "term": "Forward secrecy",
                "definition": "Ephemeral exponents per session - future key compromise cannot decrypt past traffic."
              },
              {
                "term": "Man-in-the-middle",
                "definition": "Active attacker relaying two separate DH exchanges - DH alone authenticates nothing."
              }
            ],
            "table": {
              "caption": "The toy DH exchange, value by value.",
              "headers": [
                "Step",
                "Alice",
                "Bob",
                "Value"
              ],
              "rows": [
                [
                  "Pick secret",
                  "x = 6",
                  "y = 15",
                  "both private"
                ],
                [
                  "Send public",
                  "A = 5^6 mod 23 = 8",
                  "B = 5^15 mod 23 = 19",
                  "over the channel"
                ],
                [
                  "Derive shared",
                  "B^x = 19^6 mod 23 = 2",
                  "A^y = 8^15 mod 23 = 2",
                  "s = g^xy = 2"
                ]
              ]
            },
            "bullets": [
              "CDH: from (g, g^x, g^y) compute g^xy - no DLP-solving required by the protocol.",
              "Toy exchange: 8 and 19 public; both parties compute 2.",
              "Eavesdropper faces CDH; with x or y leaked, the secret falls trivially.",
              "Ephemeral exponents give forward secrecy - DHE/ECDHE in TLS.",
              "Raw DH is unauthenticated: MITM runs two parallel exchanges.",
              "Authentication (signatures, certificates) completes the handshake in Unit V."
            ],
            "diagram": {
              "kind": "flow",
              "title": "Diffie-Hellman key exchange",
              "caption": "Two public values cross the wire; the product of secrets never does.",
              "steps": [
                {
                  "label": "Agree (G, g)",
                  "note": "public parameters"
                },
                {
                  "label": "Alice: x secret",
                  "note": "sends A = g^x"
                },
                {
                  "label": "Bob: y secret",
                  "note": "sends B = g^y"
                },
                {
                  "label": "Alice computes",
                  "note": "s = B^x = g^xy"
                },
                {
                  "label": "Bob computes",
                  "note": "s = A^y = g^xy"
                },
                {
                  "label": "Eavesdropper",
                  "note": "holds g, g^x, g^y - faces CDH"
                }
              ]
            },
            "callout": {
              "type": "warning",
              "title": "DH alone is a conversation, not a handshake",
              "body": "Raw Diffie-Hellman authenticates nobody: an active attacker relays A' = g^u to Bob and B' = g^v to Alice, sharing two different secrets and reading everything decrypted. Every exam answer must add the sentence 'DH requires authentication - signatures or certificates - to resist man-in-the-middle'. TLS's certificate check is exactly that patch."
            },
            "examQuestions": [
              {
                "q": "Define the computational Diffie-Hellman problem. Walk through a complete Diffie-Hellman exchange in Z_23* with g = 5, x = 6, y = 15, computing all public and shared values, and explain forward secrecy and the MITM limitation.",
                "marks": 14,
                "outline": [
                  "CDH: given (g, g^x, g^y), compute g^xy",
                  "Alice: x = 6, A = 5^6 mod 23 = 8",
                  "Bob: y = 15, B = 5^15 mod 23 = 19",
                  "Shared: 19^6 mod 23 = 2 = 8^15 mod 23",
                  "Eavesdropper holds (5, 8, 19) - faces CDH",
                  "Forward secrecy: fresh ephemeral x, y per session (DHE/ECDHE)",
                  "MITM: raw DH authenticates nobody - signatures needed"
                ]
              },
              {
                "q": "Why do ephemeral Diffie-Hellman exponents provide forward secrecy, and why does static DH not?",
                "marks": 7,
                "outline": [
                  "Ephemeral: each session's x, y are erased after use",
                  "Compromising the long-term key later cannot reconstruct old g^xy",
                  "Static DH: one exponent protects all sessions - one leak opens history",
                  "Ephemeral x, y are erased after each session",
                  "Later long-term-key compromise cannot reconstruct old g^xy",
                  "Static DH: one exponent protects all sessions - one leak opens history"
                ]
              }
            ]
          },
          {
            "number": "4.3",
            "title": "The decisional Diffie-Hellman problem",
            "body": [
              "The decisional Diffie-Hellman problem (DDH) asks not to compute but to distinguish: given (g, g^x, g^y, T), decide whether T = g^xy or T = g^z for random z. It is a strictly stronger assumption than CDH - a CDH solver breaks DDH trivially (compute g^xy and compare), but a DDH solver need not extract x or y. DDH's role in this syllabus is precise: it is the assumption under which ElGamal encryption is proven semantically secure - the mask g^xy is indistinguishable from a random pad exactly when DDH holds.",
              "The hierarchy, stated cleanly: DLP hardest, CDH intermediate, DDH weakest - each implies the next in hardness direction (a DLP algorithm solves CDH; a CDH algorithm solves DDH). For proofs, weaker assumptions are better science: proving ElGamal under DDH is a stronger result than proving it under CDH. But DDH does not hold in every plausible group - in Z_p* with index-calculus-visible structure, Legendre-symbol leakage lets attackers distinguish some DDH tuples; this is one reason cryptography moved to elliptic-curve groups and to prime-order subgroups where no such bias is known.",
              "A worked distinguishing attempt shows the subtlety: given (g = 5, A = 8 = 5^6, B = 19 = 5^15, T), decide if T = 5^90 = 2 (mod 23, since 90 mod 22 = 2) or random. A toy attacker just computes 5^6*5^15 - the group is small. At cryptographic scale the computation is CDH itself; the question is whether any shortcut exists that avoids it - for well-chosen groups, none is known, which is the assumption. The exam-level statement: 'DDH asserts the triples (g^x, g^y, g^xy) and (g^x, g^y, g^z) are computationally indistinguishable'.",
              "The exam structure: define DDH as a decision problem, place it in the DLP/CDH/DDH hierarchy with implication directions, connect it to ElGamal's security (next sections), and note the group-selection caveat (quadratic-residue leakage in Z_p*; prime-order subgroups and curves as the fix). This ladder - DLP, CDH, DDH - is exactly the syllabus's three named problems; answer questions by placing the asked problem on the ladder and stating which direction the implications run."
            ],
            "keyTerms": [
              {
                "term": "DDH problem",
                "definition": "Distinguish (g^x, g^y, g^xy) from (g^x, g^y, g^z) with z random."
              },
              {
                "term": "Assumption hierarchy",
                "definition": "DLP -> CDH -> DDH: solving a stronger problem solves all weaker ones."
              },
              {
                "term": "Semantic security under DDH",
                "definition": "ElGamal's ciphertext mask is pseudorandom exactly when DDH holds."
              },
              {
                "term": "Quadratic-residue leakage",
                "definition": "Legendre-symbol structure in Z_p* that can break DDH there - the curve motivation."
              }
            ],
            "table": {
              "caption": "The three problems on one ladder.",
              "headers": [
                "Problem",
                "Task",
                "If solved, breaks",
                "Hardness"
              ],
              "rows": [
                [
                  "DLP",
                  "find x from g^x",
                  "CDH and DDH",
                  "strongest"
                ],
                [
                  "CDH",
                  "compute g^xy from g^x, g^y",
                  "DDH",
                  "intermediate"
                ],
                [
                  "DDH",
                  "distinguish g^xy from random",
                  "ElGamal confidentiality",
                  "weakest - preferred for proofs"
                ]
              ]
            },
            "bullets": [
              "DDH: a decision problem - distinguish the DH tuple from a random one.",
              "Hierarchy: DLP solves CDH solves DDH; hardness weakens down the ladder.",
              "ElGamal is proven semantically secure under DDH.",
              "DDH fails in some Z_p* settings via quadratic-residue leakage.",
              "Prime-order subgroups and elliptic-curve groups are the DDH-safe habitats.",
              "Toy check: mod 23, (8, 19, T) - T = 2 iff T = 5^90; tiny groups give no hiding."
            ],
            "diagram": {
              "kind": "fork",
              "title": "Testing a DDH tuple",
              "caption": "The distinguisher's two worlds - identical except for the last element's origin.",
              "start": "Tuple (g, g^x, g^y, T)",
              "branches": [
                {
                  "label": "DH world",
                  "outcome": "T = g^xy - correlated with both public values",
                  "good": true
                },
                {
                  "label": "Random world",
                  "outcome": "T = g^z - independent of x and y",
                  "good": true
                },
                {
                  "label": "DDH assumption",
                  "outcome": "no efficient test separates the worlds - ElGamal's security follows",
                  "good": true
                }
              ]
            },
            "callout": {
              "type": "exam",
              "title": "Implications run one way",
              "body": "The standard trick question: 'does breaking DDH break DLP?' No - the implications run downward: DLP solver breaks CDH and DDH; a DDH solver need not recover any exponent. Draw the ladder with arrows from hard to easy and state 'weaker assumptions are preferred for proofs' - that line earns the conceptual mark."
            },
            "examQuestions": [
              {
                "q": "Define the decisional Diffie-Hellman problem and place it in the hierarchy with DLP and CDH, stating which problems imply which. Explain why DDH is the assumption ElGamal's semantic security is proven under.",
                "marks": 14,
                "outline": [
                  "DDH: distinguish (g^x, g^y, g^xy) from (g^x, g^y, g^z)",
                  "DLP solver -> CDH solver -> DDH solver; implications flow downward",
                  "Weakest assumption - preferred base for proofs",
                  "ElGamal masks m by h^y = g^xy",
                  "DDH makes g^xy look random -> ciphertext hides m",
                  "CDH alone is insufficient - computing power is not distinguishing power",
                  "Caveat: DDH fails in some Z_p* settings; curves/subgroups are the fix"
                ]
              },
              {
                "q": "Does an algorithm for the discrete logarithm break DDH? Does a DDH algorithm break DLP? Justify both answers.",
                "marks": 7,
                "outline": [
                  "DLP -> yes: recover x, compute g^xy, compare with T",
                  "DDH -> no: distinguishing needs no exponent recovery",
                  "The ladder is one-directional - hardness weakens downward",
                  "DLP -> yes: recover x, compute g^xy, compare with T",
                  "DDH -> no: distinguishing needs no exponent recovery",
                  "The ladder is one-directional - hardness weakens downward"
                ]
              }
            ]
          },
          {
            "number": "4.4",
            "title": "Elliptic curves - the group law",
            "body": [
              "An elliptic curve over a prime field is the set of points (x, y) satisfying y^2 = x^3 + ax + b (mod p), with a distinguished point at infinity O acting as identity. The magic is that these points form an abelian group under a geometric addition rule: to add P + Q, draw the chord through both points (or the tangent if P = Q), find its third intersection with the curve, and reflect it in the x-axis. P + O = P, and P + (-P) = O - the group axioms all hold.",
              "The group law's algebra: for P = (x1, y1), Q = (x2, y2), the chord slope is lambda = (y2 - y1)/(x2 - y1) mod p (or (3x1^2 + a)/(2y1) for doubling), giving x3 = lambda^2 - x1 - x2 and y3 = lambda(x1 - x3) - y1. Worked toy on y^2 = x^3 + 2x + 2 mod 17, P = (5, 1): doubling needs lambda = (3*25 + 2)/(2*1) = 77 * 9 mod 17 (2^-1 = 9) = 693 mod 17 = 13; x3 = 169 - 10 = 159 mod 17 = 6; y3 = 13*(5 - 6) - 1 = -14 mod 17 = 3. So 2P = (6, 3).",
              "Scalar multiplication Q = kP is the curve's 'exponentiation': compute it by double-and-add in about log2(k) additions - cheap. The elliptic-curve discrete-logarithm problem (ECDLP) is its reverse: given P and Q = kP, find k. No sub-exponential algorithm is known for well-chosen curves - no index-calculus analogue - so generic O(sqrt(q)) attacks (Pollard rho) are the best known, pricing a 256-bit-order curve at 2^128 work.",
              "The exam's deliverables: the curve equation and the role of O, the geometric addition rule (chord, third intersection, reflect), one doubling walkthrough with the formulas, and the punchline - the ECDLP gap lets curves deliver 128-bit security with 256-bit keys where finite fields need 3072-bit moduli. State the size comparison numerically (256-bit EC ≈ 3072-bit RSA ≈ 128-bit security) and the answer covers both the mathematics and the deployment reason curves dominate modern TLS."
            ],
            "keyTerms": [
              {
                "term": "Elliptic curve",
                "definition": "Points on y^2 = x^3 + ax + b mod p plus the point at infinity O."
              },
              {
                "term": "Point at infinity (O)",
                "definition": "The group identity - the vertical-line 'third intersection' reflected."
              },
              {
                "term": "Chord-and-reflect addition",
                "definition": "Line through P, Q meets the curve at a third point; its reflection is P + Q."
              },
              {
                "term": "ECDLP",
                "definition": "Given P and Q = kP, find k - no sub-exponential attack known."
              },
              {
                "term": "Double-and-add",
                "definition": "Scalar multiplication in about log2(k) doublings and additions."
              }
            ],
            "table": {
              "caption": "Security at equal strength - the curve dividend.",
              "headers": [
                "Target security",
                "Symmetric key",
                "Finite-field DH modulus",
                "Elliptic-curve key"
              ],
              "rows": [
                [
                  "112-bit",
                  "3DES-ish",
                  "2048 bits",
                  "224-256 bits"
                ],
                [
                  "128-bit",
                  "AES-128",
                  "3072 bits",
                  "256 bits"
                ],
                [
                  "256-bit",
                  "AES-256",
                  "about 15360 bits",
                  "512 bits"
                ]
              ]
            },
            "bullets": [
              "Curve: y^2 = x^3 + ax + b mod p with identity point O.",
              "Addition: chord through P, Q -> third intersection -> reflect in x-axis.",
              "Doubling: tangent slope (3x^2 + a)/(2y); P + (-P) = O.",
              "Toy: y^2 = x^3 + 2x + 2 mod 17, P = (5, 1) -> 2P = (6, 3).",
              "Scalar multiply is cheap (double-and-add); recovering k is ECDLP-hard.",
              "No index calculus on curves: 256-bit EC key ≈ 3072-bit finite field."
            ],
            "diagram": {
              "kind": "flow",
              "title": "Adding two curve points",
              "caption": "Chord, intersect, reflect - geometry doing group algebra.",
              "steps": [
                {
                  "label": "Draw chord P-Q",
                  "note": "or tangent at P if P = Q"
                },
                {
                  "label": "Third intersection R",
                  "note": "the line meets the curve once more"
                },
                {
                  "label": "Reflect",
                  "note": "P + Q = -R (negate the y-coordinate)"
                },
                {
                  "label": "Identity check",
                  "note": "vertical line: P + (-P) = O"
                }
              ]
            },
            "callout": {
              "type": "exam",
              "title": "The doubling formula set",
              "body": "Memorize the three formulas for doubling: lambda = (3x^2 + a)/(2y), x3 = lambda^2 - 2x, y3 = lambda(x - x3) - y. One worked toy doubling (mod 17 example) plus these formulas is the complete answer to any 'explain elliptic-curve arithmetic' question - examiners check the slope, the inverse, and the reflection sign."
            },
            "examQuestions": [
              {
                "q": "Describe the elliptic-curve group: the curve equation, the point at infinity, and the chord-tangent addition rule. Carry out one point doubling with formulas on a small curve, and explain why ECDLP supports smaller keys than finite-field DLP.",
                "marks": 14,
                "outline": [
                  "Curve: y^2 = x^3 + ax + b mod p; identity O",
                  "Addition: chord through P, Q; third intersection; reflect",
                  "Doubling: tangent slope lambda = (3x^2 + a)/(2y)",
                  "Worked: y^2 = x^3 + 2x + 2 mod 17, P = (5, 1)",
                  "lambda = 77 * 9 mod 17 = 13; x3 = 6; y3 = 3 -> 2P = (6, 3)",
                  "Scalar multiply cheap; reverse (ECDLP) hard - no index calculus",
                  "256-bit EC ≈ 3072-bit finite field ≈ 128-bit security"
                ]
              },
              {
                "q": "Why is there no index-calculus attack on elliptic curves comparable to the one on Z_p*?",
                "marks": 7,
                "outline": [
                  "Index calculus needs a smooth-number relation structure",
                  "Curve points offer no such factor-base representation",
                  "Generic sqrt(q) attacks remain the best known",
                  "Hence 256-bit curve orders price ECDLP at 2^128",
                  "Index calculus needs smooth-number relation structure",
                  "Curve points offer no factor-base representation",
                  "Generic sqrt(q) attacks remain the best known"
                ]
              }
            ]
          },
          {
            "number": "4.5",
            "title": "ElGamal public-key encryption",
            "body": [
              "ElGamal is the syllabus's canonical public-key encryption scheme from Diffie-Hellman problems. Key generation: pick a cyclic group G of order q with generator g and a secret x; publish the public key h = g^x. Encryption of m (encoded as a group element): pick fresh randomness y, output the pair (c1 = g^y, c2 = m * h^y). Decryption: compute m = c2 / c1^x - since c1^x = g^yx = h^y, the mask divides out exactly.",
              "Worked toy example in Z_23* with g = 5, x = 6: public key h = 5^6 = 8. Encrypt m = 7 with randomness y = 3: c1 = 5^3 = 10, mask h^y = 8^3 = 512 mod 23 = 6, c2 = 7 * 6 = 42 mod 23 = 19. Decrypt: c1^x = 10^6 mod 23 = 6, inverse of 6 mod 23 is 4, m = 19 * 4 mod 23 = 76 mod 23 = 7 - recovered. Security follows from DDH: the mask h^y = g^xy is pseudorandom, so the ciphertext pair leaks nothing about m - semantic security holds precisely when DDH does.",
              "Two structural properties are the standard follow-ups. Randomized encryption: every message has about q valid ciphertexts (one per y), so ElGamal is never deterministic - it passes the CPA game's repeat-test trivially. Malleability: ciphertexts multiply componentwise - (c1, c2) for m transforms to (c1, u*c2) decrypting to u*m - which breaks CCA security (Unit V's fix is the KEM/DEM hybrid with authentication) and is precisely why ElGamal is a confidentiality tool, not an integrity tool.",
              "Exam framing: give keygen/enc/dec as formulas, run the mod-23 walkthrough with all five numbers (8, 10, 19, 6, 7), state 'semantic security under DDH' with the one-line reason (mask = g^xy is DDH-pseudorandom), and close with malleability as the CCA gap. The syllabus phrase 'Elliptic-Curve Based Cryptography and Public-Key Encryption' is satisfied by noting ElGamal ports verbatim to curves: exponentiation becomes scalar multiplication, and ECDH/EC-ElGamal inherit the same proofs under the ECDLP/DDH analogues."
            ],
            "keyTerms": [
              {
                "term": "ElGamal encryption",
                "definition": "Public-key scheme: (c1 = g^y, c2 = m * h^y); decrypt by dividing out c1^x."
              },
              {
                "term": "Semantic security under DDH",
                "definition": "ElGamal's mask g^xy is pseudorandom exactly when DDH holds."
              },
              {
                "term": "Randomized encryption",
                "definition": "Fresh y per message - about q valid ciphertexts per plaintext."
              },
              {
                "term": "Malleability",
                "definition": "(c1, u*c2) decrypts to u*m - breaks CCA security; confidentiality only."
              }
            ],
            "table": {
              "caption": "The toy ElGamal run, number by number.",
              "headers": [
                "Step",
                "Computation",
                "Value"
              ],
              "rows": [
                [
                  "Public key",
                  "h = 5^6 mod 23",
                  "8"
                ],
                [
                  "Fresh randomness",
                  "y = 3",
                  "per-message"
                ],
                [
                  "c1",
                  "g^y = 5^3 mod 23",
                  "10"
                ],
                [
                  "Mask",
                  "h^y = 8^3 mod 23",
                  "6"
                ],
                [
                  "c2",
                  "m * mask = 7 * 6 mod 23",
                  "19"
                ],
                [
                  "Decrypt",
                  "c2 * (c1^x)^-1 = 19 * 4 mod 23",
                  "7 = m"
                ]
              ]
            },
            "bullets": [
              "Keygen: secret x; public h = g^x in a cyclic group G.",
              "Encrypt with fresh y: (c1 = g^y, c2 = m * h^y).",
              "Decrypt: m = c2 / c1^x since c1^x = h^y.",
              "Toy run: h = 8; (c1, c2) = (10, 19) for m = 7; decryption restores 7.",
              "Semantic security iff DDH - the mask is g^xy.",
              "Malleable: (c1, u*c2) -> u*m - the CCA gap Unit V closes."
            ],
            "diagram": {
              "kind": "pipeline",
              "title": "ElGamal end to end",
              "caption": "One exponentiation chain carries the mask from public key to plaintext recovery.",
              "stages": [
                {
                  "label": "Keygen",
                  "note": "x secret, h = g^x public"
                },
                {
                  "label": "Encrypt",
                  "note": "y fresh; c1 = g^y, c2 = m * h^y"
                },
                {
                  "label": "Transmit",
                  "note": "pair (c1, c2) - about twice the message size"
                },
                {
                  "label": "Decrypt",
                  "note": "m = c2 / c1^x"
                },
                {
                  "label": "Security anchor",
                  "note": "mask = g^xy, pseudorandom under DDH"
                }
              ]
            },
            "callout": {
              "type": "tip",
              "title": "One walkthrough, three sections",
              "body": "The mod-23 ElGamal run (h = 8, c = (10, 19), m = 7) doubles as your answer for 'explain ElGamal', 'show the DDH connection', and 'demonstrate malleability' (multiply c2 by u and decrypt). Prepare the inverses too: 6^-1 = 4 and 10^-1 = 16 mod 23 - the division step is where most hand-worked answers slip."
            },
            "examQuestions": [
              {
                "q": "Describe the ElGamal public-key encryption scheme: key generation, encryption, decryption. Work a complete toy example modulo 23, and state the security assumption with the reason it yields semantic security. Note the malleability weakness.",
                "marks": 14,
                "outline": [
                  "Keygen: secret x, public h = g^x",
                  "Encrypt: fresh y; c1 = g^y, c2 = m * h^y",
                  "Decrypt: m = c2 / c1^x",
                  "Toy: h = 8; y = 3; (c1, c2) = (10, 19) for m = 7",
                  "Decryption: 19 * (10^6)^-1 = 19 * 4 = 7 mod 23",
                  "Semantic security under DDH: mask h^y = g^xy is pseudorandom",
                  "Malleable: (c1, u*c2) decrypts to u*m - CCA gap, no integrity"
                ]
              },
              {
                "q": "Why is ElGamal encryption randomized, and what does randomization buy in the CPA game?",
                "marks": 7,
                "outline": [
                  "Fresh y per message - about q valid ciphertexts per plaintext",
                  "Re-encrypting a challenge cannot be matched to it",
                  "Deterministic schemes fail CPA by repeat-encryption",
                  "Randomness is the CPA game's price of admission",
                  "Fresh y per message - about q valid ciphertexts per plaintext",
                  "Re-encrypting a challenge cannot be matched to it",
                  "Deterministic schemes fail CPA by repeat-encryption"
                ]
              }
            ]
          },
          {
            "number": "4.6",
            "title": "Public-key encryption from trapdoor functions - the RSA sketch",
            "body": [
              "The second launchpad to public-key encryption is the trapdoor route: RSA. Key generation picks primes p, q and publishes n = pq with exponent e (coprime to phi(n) = (p-1)(q-1)); the trapdoor d is the inverse of e mod phi(n) - computable only with the factorization. Encryption is c = m^e mod n; decryption is m = c^d mod n, correct by Euler's theorem since c^d = m^(ed) = m^(1 + k*phi) = m mod n (for m coprime to n; the general case needs CRT care).",
              "A complete toy walkthrough: p = 3, q = 11, n = 33, phi = 20, e = 3, d = 7 (3*7 = 21 = 1 mod 20). Encrypt m = 4: c = 4^3 = 64 mod 33 = 31. Decrypt: 31^7 mod 33 = 4 - recovered. Textbook RSA is thus a clean trapdoor construction - but as an encryption scheme it fails immediately: it is deterministic (same m, same c), so it loses the CPA game by repeat-encryption; and it is multiplicatively malleable: c' = c * s^e mod n decrypts to m * s, so anyone can transform ciphertexts without the key.",
              "The malleability worked example: from c = 31 (m = 4), an attacker multiplies by s = 2's encryption, 2^3 = 8, getting c' = 31 * 8 mod 33 = 17 - and 17^7 mod 33 = 8 = m * 2. The decryption oracle of a CCA game would confirm it: textbook RSA is neither CPA- nor CCA-secure. The fixes are structural, not parametric: padding with randomness and verifiability - OAEP (proven in the random oracle model, section 3.5) turns RSA into a CCA-secure KEM that Unit V composes into hybrid encryption.",
              "Exam framing: give keygen/enc/dec formulas, run the toy (n = 33, e = 3, d = 7, m = 4 -> c = 31 -> m = 4), then the two failures - deterministic (CPA) and malleable (CCA) - with the numeric malleability trace. Close the section with the bridge sentence: 'raw RSA is a trapdoor permutation, not an encryption scheme; OAEP padding is what makes it one' - the exact role RSA plays in Unit V's hybrid constructions."
            ],
            "keyTerms": [
              {
                "term": "RSA key generation",
                "definition": "n = pq, e coprime to phi(n), d = e^-1 mod phi(n) - the trapdoor."
              },
              {
                "term": "RSA encryption",
                "definition": "c = m^e mod n; decryption m = c^d mod n via Euler's theorem."
              },
              {
                "term": "Multiplicative malleability",
                "definition": "c' = c * s^e decrypts to m*s - no integrity without padding."
              },
              {
                "term": "OAEP",
                "definition": "Randomized, checkable padding making RSA CCA-secure in the random oracle model."
              },
              {
                "term": "Trapdoor permutation",
                "definition": "RSA's true identity: easy forward, hard reverse, invertible with d."
              }
            ],
            "codeExample": {
              "language": "python",
              "caption": "rsa_toy.py - textbook RSA and its malleability",
              "code": "p, q, e = 3, 11, 3\nn, phi = p * q, (p - 1) * (q - 1)   # 33, 20\nd = pow(e, -1, phi)                 # 7 - the trapdoor\n\nm = 4\nc = pow(m, e, n)                    # 31 - deterministic!\nprint(pow(c, d, n))                 # 4\n\n# malleability: c' = c * s^e decrypts to m * s\ns = 2\nc2 = (c * pow(s, e, n)) % n\nprint(pow(c2, d, n))                # 8 = m * s - tampered, no key needed"
            },
            "bullets": [
              "Keygen: n = pq; e public; d = e^-1 mod phi(n) secret.",
              "Enc: c = m^e mod n; Dec: m = c^d mod n (Euler's theorem).",
              "Toy: n = 33, e = 3, d = 7; m = 4 -> c = 31 -> back to 4.",
              "Deterministic - fails CPA by repeat-encryption of the challenge.",
              "Malleable: c * s^e -> m * s (worked: 31 -> 17 -> 8).",
              "Fix: OAEP padding - RSA as CCA-secure KEM in Unit V."
            ],
            "diagram": {
              "kind": "fork",
              "title": "Why textbook RSA fails as encryption",
              "caption": "Two independent kills - both fixed by padding, neither by longer keys.",
              "start": "Textbook RSA c = m^e mod n",
              "branches": [
                {
                  "label": "Deterministic",
                  "outcome": "repeat-encryption wins the CPA game - no randomness to hide m",
                  "good": false
                },
                {
                  "label": "Multiplicatively malleable",
                  "outcome": "c' = c * s^e -> m * s - CCA attacks and blinding-free tampering",
                  "good": false
                },
                {
                  "label": "OAEP-padded RSA",
                  "outcome": "randomized + checkable - CCA-secure in the ROM (Unit V)",
                  "good": true
                }
              ]
            },
            "callout": {
              "type": "exam",
              "title": "RSA is a permutation, not a cipher",
              "body": "The distinction examiners probe: RSA defines a trapdoor permutation - perfect as a signature engine (with hashing, Unit V) and as a KEM after padding, but fatally flawed as a direct encryption of messages. Write that sentence; then the toy numbers are decoration on a correct argument."
            },
            "examQuestions": [
              {
                "q": "Describe RSA key generation, encryption and decryption with formulas. Work the toy example n = 33, e = 3, d = 7 on m = 4, and demonstrate both the CPA failure (determinism) and the CCA failure (multiplicative malleability).",
                "marks": 14,
                "outline": [
                  "Keygen: n = pq = 33; phi = 20; e = 3; d = 7 (ed = 1 mod 20)",
                  "Enc: c = m^e mod n = 4^3 = 64 mod 33 = 31",
                  "Dec: 31^7 mod 33 = 4 - Euler's theorem correctness",
                  "Deterministic: same m always -> same c - CPA game lost",
                  "Malleability: c' = c * s^e = 31 * 8 mod 33 = 17",
                  "Decrypt c' -> 8 = m * s - tampering without the key",
                  "Fix: OAEP - randomized, checkable, CCA-secure in ROM"
                ]
              },
              {
                "q": "State Euler's theorem and show how it guarantees correctness of RSA decryption.",
                "marks": 7,
                "outline": [
                  "Euler: a^phi(n) = 1 mod n for gcd(a, n) = 1",
                  "ed = 1 + k*phi(n) by construction of d",
                  "c^d = m^(ed) = m^(1 + k*phi) = m * (m^phi)^k = m mod n",
                  "Edge cases handled via CRT on p and q",
                  "Euler: a^phi(n) = 1 mod n for gcd(a, n) = 1",
                  "ed = 1 + k*phi(n) by construction of d",
                  "c^d = m^(1 + k*phi) = m * (m^phi)^k = m mod n"
                ]
              }
            ]
          },
          {
            "number": "4.7",
            "title": "Parameter selection and scheme security in discrete-log cryptography",
            "body": [
              "Discrete-log schemes are only as secure as their parameters. The group must be a prime-order subgroup (or a curve of prime order) - composite orders invite small-subgroup attacks in which an attacker confines a victim's exponent to a weak subgroup and recovers it modulo the small factor. Validation of received group elements (checking h^q = 1, or that curve points lie on the curve) closes the remaining small-subgroup doors; skipping validation was a real vulnerability class in deployed libraries.",
              "A worked parameter ladder fixes the sizes: 128-bit security needs a 256-bit curve or a 3072-bit finite-field modulus; 192-bit needs 384-bit curves or 7680-bit fields; 256-bit needs 512-bit curves or about 15360-bit fields. The divergence is the index-calculus asymmetry of section 4.1 - finite fields lose to sub-exponential attacks, curves only to generic square-root search. Static long-term DH keys additionally demand constant-time exponentiation to resist timing side channels.",
              "The deployment guidance assembles the unit: choose groups from published standards (RFC 7919 finite-field groups; named curves P-256, Curve25519), never invent parameters (nothing-up-my-sleeve discipline), validate every peer value, match key sizes to the data's lifetime, and compose with authenticated encryption for CCA security (section 5.2's hybrids). Examiners frame this as 'how would you deploy DH securely?' - the answer is the parameter checklist plus the MITM/authentication note of section 4.2."
            ],
            "keyTerms": [
              {
                "term": "Prime-order subgroup",
                "definition": "A group whose order is prime - eliminating small-subgroup attack surfaces."
              },
              {
                "term": "Subgroup confinement",
                "definition": "Forcing a victim's exponent into a small subgroup to recover it modulo the factor."
              },
              {
                "term": "Nothing-up-my-sleeve",
                "definition": "Parameters derived verifiably from public constants - no hidden trapdoors."
              },
              {
                "term": "Constant-time exponentiation",
                "definition": "Powering logic whose timing is data-independent - the side-channel defence."
              }
            ],
            "table": {
              "caption": "Discrete-log parameter ladder by security level.",
              "headers": [
                "Security level",
                "Curve size",
                "Finite-field modulus",
                "Symmetric anchor"
              ],
              "rows": [
                [
                  "112-bit",
                  "224-256 bits",
                  "2048 bits",
                  "3DES-era"
                ],
                [
                  "128-bit",
                  "256 bits",
                  "3072 bits",
                  "AES-128"
                ],
                [
                  "192-bit",
                  "384 bits",
                  "7680 bits",
                  "AES-192"
                ],
                [
                  "256-bit",
                  "512 bits",
                  "about 15360 bits",
                  "AES-256"
                ]
              ]
            },
            "bullets": [
              "Prime-order subgroups only - composite orders invite confinement attacks.",
              "Validate every received group element or curve point.",
              "Named standard parameters - never custom curves or moduli.",
              "Size ladder: 256-bit curve = 3072-bit field = 128-bit security.",
              "Constant-time exponentiation for long-term keys.",
              "Authentication (signatures/certificates) closes the MITM gap of 4.2."
            ],
            "diagram": {
              "kind": "fork",
              "title": "Deploying a discrete-log scheme safely",
              "caption": "Five checks - each closes one named attack class.",
              "start": "A DH/ElGamal deployment",
              "branches": [
                {
                  "label": "Composite-order group used",
                  "outcome": "small-subgroup confinement - switch to prime-order subgroups",
                  "good": false
                },
                {
                  "label": "Peer values unvalidated",
                  "outcome": "invalid-curve/small-subgroup injection - validate inputs",
                  "good": false
                },
                {
                  "label": "Custom parameters",
                  "outcome": "hidden-trapdoor suspicion - use named standards",
                  "good": false
                },
                {
                  "label": "All checks in place + authentication",
                  "outcome": "sound base for the hybrid schemes of Unit V",
                  "good": true
                }
              ]
            },
            "callout": {
              "type": "warning",
              "title": "Parameters are part of the algorithm",
              "body": "The deployment sentence: 'a discrete-log scheme is its mathematics plus its parameters - prime-order subgroups, validated inputs, named constants, and sized keys; a perfect algorithm on bad parameters is a broken system'. Curve25519 and RFC 7919 groups exist precisely to make the right parameters the default."
            },
            "examQuestions": [
              {
                "q": "Explain the parameter-selection discipline for discrete-log cryptography: subgroup choice, input validation, parameter provenance, and the key-size ladder with its index-calculus reasoning.",
                "marks": 14,
                "outline": [
                  "Prime-order subgroups eliminate small-subgroup confinement",
                  "Validate received elements: h^q = 1; on-curve checks",
                  "Small-subgroup attack mechanics: exponent recovery modulo small factors",
                  "Named parameters (RFC 7919, P-256, Curve25519) - nothing-up-my-sleeve",
                  "Size ladder: 256-bit curve = 3072-bit field = 128-bit security",
                  "The divergence comes from index calculus on finite fields",
                  "Constant-time exponentiation for long-term keys"
                ]
              },
              {
                "q": "Why must received Diffie-Hellman public values be validated before use?",
                "marks": 7,
                "outline": [
                  "Unvalidated values may lie in small subgroups",
                  "h^q = 1 fails for such elements - rejected cheaply",
                  "Confinement leaks the secret exponent modulo the small factor",
                  "Curve variants: invalid-curve points leak similarly",
                  "Libraries made this mistake - CVE history exists",
                  "Validation cost is trivial against the attack it closes"
                ]
              }
            ]
          }
        ]
      }
    },
    {
      "number": 5,
      "roman": "V",
      "title": "CCA-Secure Hybrids, Digital Signatures and TLS",
      "summary": "Unit V completes the arc: chosen-ciphertext security and why CPA is not enough, CCA-secure hybrid ciphers from Diffie-Hellman problems and the RSA assumption, digital signatures with RSA-FDH and hash-and-sign, the number-theoretic toolkit, and the TLS/SSL protocol that assembles the entire course into the web's security layer.",
      "chapter": {
        "number": "05",
        "title": "From Hybrid Ciphers to the TLS Handshake",
        "intro": "Unit V covers CCA security and padding-oracle motivation, CCA-secure hybrid encryption from DH problems and the RSA assumption, digital signatures, the underlying number theory, and an overview of TLS/SSL with interactive protocols.",
        "inOneBreath": "CCA attackers decrypt chosen ciphertexts - only authenticated encryption survives. Hybrids combine a KEM (DH or RSA-OAEP) with a KDF and AEAD; signatures are the private-key direction of public-key crypto, RSA-FDH style. Number theory (Fermat, Euler, CRT) is the toolkit; TLS is the assembly - ECDHE for keys, certificates for authentication, AEAD for records.",
        "sections": [
          {
            "number": "5.1",
            "title": "Chosen-ciphertext security - why CPA is not enough",
            "body": [
              "The chosen-ciphertext attacker (CCA) is the strongest confidentiality adversary: it may request decryptions of chosen ciphertexts before and (in CCA2, the standard) after receiving the challenge ciphertext - the only rule is that it may not submit the challenge ciphertext itself. A scheme is CCA-secure if no efficient attacker distinguishes Enc(k, m0) from Enc(k, m1) even with this decryption oracle. CCA security is the real-world standard: any protocol that ever decrypts attacker-supplied data is a CCA attacker's playground.",
              "CPA-secure schemes die against CCA by concrete attacks, not abstractions. CBC with padding: flipping the last block corrupts padding predictably, and the decryptor's accept/reject (or timing) response is an oracle leaking plaintext bytes (padding oracle / POODLE lineage - section 3.6's Lucky 13). CTR mode: the attacker XORs a guess g into the challenge ciphertext, submits (c XOR g); if the decryption reply's behaviour distinguishes, the guess is confirmed byte by byte. ElGamal's malleability ((c1, u*c2) -> u*m) and textbook RSA's (c * s^e -> m * s) both hand the CCA attacker direct decryption powers.",
              "A worked CCA game trace against textbook RSA: challenge c = m^e; the attacker picks s = 2, submits c' = c * 2^e mod n; the oracle dutifully returns m * 2; the attacker divides by 2 and reads m - never having submitted c itself. Every component obeyed the rules; the scheme still fell. The defence pattern is uniform across all fixes: make decryption verify before it decrypts - authentication (a MAC or AEAD tag) must gate the decryption path, so tampered ciphertexts are rejected before any information escapes.",
              "The exam framing: define CCA/CCA2 with the oracle rules and the one forbidden query, give one concrete attack per family (padding oracle, CTR guess-trick, RSA malleability), and state the design principle 'authenticate first, decrypt second'. The one-forbidden-query subtlety is a favourite trap question - the attacker may not submit the exact challenge, but transformed challenges (c * s^e) are legal, which is exactly the hole the attacks walk through."
            ],
            "keyTerms": [
              {
                "term": "CCA security",
                "definition": "Indistinguishability even with a decryption oracle - except on the challenge ciphertext itself."
              },
              {
                "term": "Padding oracle",
                "definition": "Accept/reject or timing differences on corrupted CBC padding leaking plaintext bytes."
              },
              {
                "term": "Malleability",
                "definition": "Transformation of ciphertexts inducing predictable plaintext transforms - the CCA killer."
              },
              {
                "term": "Authenticate-then-decrypt",
                "definition": "The design rule: verify a tag before any decryption runs (Encrypt-then-MAC / AEAD)."
              }
            ],
            "table": {
              "caption": "CCA attacks against CPA-secure schemes - one per family.",
              "headers": [
                "Target",
                "Attack",
                "Oracle used"
              ],
              "rows": [
                [
                  "CBC + padding",
                  "flip last block, read padding validity",
                  "accept/reject or timing"
                ],
                [
                  "CTR mode",
                  "submit c XOR guess, observe reply",
                  "decryption difference"
                ],
                [
                  "ElGamal",
                  "submit (c1, u*c2), get u*m",
                  "malleability"
                ],
                [
                  "Textbook RSA",
                  "submit c * s^e, get m * s",
                  "malleability"
                ]
              ]
            },
            "bullets": [
              "CCA attacker: decryption oracle before and after the challenge; only c* forbidden.",
              "Transformed challenges (c * s^e) are legal - the hole every attack walks through.",
              "CBC padding oracles leak byte by byte (POODLE / Lucky 13 lineage).",
              "CTR: XOR-guess the challenge and read the reply's behaviour.",
              "ElGamal and textbook RSA are malleable - direct CCA kills.",
              "Uniform fix: verify a tag before decryption - AEAD everywhere."
            ],
            "diagram": {
              "kind": "flow",
              "title": "The CCA2 game against textbook RSA",
              "caption": "Every move is legal; the scheme still falls - malleability is the hole.",
              "steps": [
                {
                  "label": "Challenge",
                  "note": "c* = m^e mod n, b unknown"
                },
                {
                  "label": "Transform",
                  "note": "c' = c* * s^e mod n (s = 2) - legal, not c*"
                },
                {
                  "label": "Oracle decrypts",
                  "note": "returns m * s"
                },
                {
                  "label": "Unblind",
                  "note": "m = (m * s) / s - challenge read"
                },
                {
                  "label": "Verdict",
                  "note": "textbook RSA is CCA-insecure by construction"
                }
              ]
            },
            "callout": {
              "type": "exam",
              "title": "The one-forbidden-query trap",
              "body": "Examiners love asking 'the attacker cannot decrypt the challenge, so how does it win?' Answer with the transformed-query trick: c' = c* * s^e is a different ciphertext, legally submittable, and its decryption unblinds to m. Write the RSA trace with s = 2 - it is three lines and the entire conceptual answer."
            },
            "examQuestions": [
              {
                "q": "Define CCA (CCA2) security and contrast it with CPA security. Give one concrete attack each against CBC-with-padding, CTR mode and textbook RSA, and state the design principle that defeats all of them.",
                "marks": 14,
                "outline": [
                  "CCA game: decryption oracle except on the challenge itself",
                  "Transformed queries (c * s^e) are legal - the escape hatch",
                  "CBC padding oracle: validity/timing leaks bytes (POODLE, Lucky 13)",
                  "CTR: XOR-guess into the challenge, observe the reply",
                  "Textbook RSA: c * s^e -> m * s - direct unblinding",
                  "ElGamal malleability: (c1, u*c2) -> u*m",
                  "Principle: authenticate before decrypting - EtM / AEAD"
                ]
              },
              {
                "q": "Walk the CCA attack on textbook RSA with s = 2 and n = 33 for challenge c = 31.",
                "marks": 7,
                "outline": [
                  "c' = 31 * 2^3 mod 33 = 31 * 8 = 248 mod 33 = 17",
                  "Oracle returns 17^7 mod 33 = 8",
                  "Unblind: 8 / 2 = 4 = m - challenge plaintext recovered",
                  "No rule violated; scheme is CCA-insecure",
                  "c' = 31 * 2^3 mod 33 = 31 * 8 = 248 mod 33 = 17",
                  "Oracle returns 17^7 mod 33 = 8",
                  "Unblind: 8 / 2 = 4 = m - challenge read, no rule violated"
                ]
              }
            ]
          },
          {
            "number": "5.2",
            "title": "CCA-secure hybrid ciphers from Diffie-Hellman problems",
            "body": [
              "Public-key operations are slow and message-size-limited (ElGamal doubles message size; RSA caps messages below n); symmetric operations are fast and unbounded. Hybrid encryption gets both: a public-key key-encapsulation mechanism (KEM) transports a fresh session key, and a symmetric authenticated-encryption scheme (DEM) does the bulk work. The syllabus's construction - 'CCA-secure public-key hybrid ciphers based on Diffie-Hellman problems' - is the DH-KEM route: DHIES/ECIES and their modern KEM-DEM descendants.",
              "The DHIES recipe, step by step: (1) receiver's static key x with public h = g^x; (2) sender picks fresh r, computes u = g^r and the shared secret g^xr = h^r; (3) a key-derivation function H turns g^xr into symmetric keys (k_enc, k_mac); (4) the sender encrypts m under k_enc and MACs (or AEADs) under k_mac; (5) the receiver recomputes u^x = g^xr, re-derives, and decrypts - verifying the tag before accepting. On curves, the identical construction with scalar multiplication is ECIES, the deployed standard for EC encryption.",
              "The security logic is the section's exam spine: confidentiality reduces to the CDH/DDH hardness of g^xr plus PRF security of the KDF; integrity/CCA security comes from the authenticated DEM - a tampered ciphertext fails the tag check before any key-dependent information escapes, closing the malleability hole that killed raw ElGamal. The KEM/DEM composition theorem makes it formal: a secure KEM + a CCA-secure DEM yields a CCA-secure public-key scheme. Fresh r per message restores the randomized-encryption property raw static DH lacked.",
              "The exam deliverables: define KEM and DEM, list the DHIES/ECIES five steps, state the two-part security reduction (DDH/CDH + AEAD), and note the modern packaging - TLS 1.3 and HPKE (RFC 9180) use exactly this KEM-KDF-AEAD shape. One worked toy on mod 23 (x = 6, r = 3: u = 10, shared = 10^6 = 2... concretely h^r = 8^3 = 6, KDF fudge noted as conceptual) ties the numbers to sections 4.2 and 4.5 without new mathematics."
            ],
            "keyTerms": [
              {
                "term": "KEM (key encapsulation)",
                "definition": "Public-key mechanism that transports a fresh session key - DH-based here."
              },
              {
                "term": "DEM (data encapsulation)",
                "definition": "Symmetric AEAD doing the bulk encryption under the encapsulated key."
              },
              {
                "term": "DHIES / ECIES",
                "definition": "DH-KEM + KDF + MAC/AEAD hybrid - CCA-secure under DH problems."
              },
              {
                "term": "KEM/DEM theorem",
                "definition": "Secure KEM composed with CCA-secure DEM yields a CCA-secure public-key scheme."
              },
              {
                "term": "HPKE",
                "definition": "RFC 9180 - the modern standard packaging of the KEM-KDF-AEAD hybrid."
              }
            ],
            "table": {
              "caption": "DHIES components and the assumption each leans on.",
              "headers": [
                "Component",
                "Role",
                "Assumption"
              ],
              "rows": [
                [
                  "DH key agreement",
                  "sender and receiver derive g^xr",
                  "CDH / DDH hardness"
                ],
                [
                  "KDF (HKDF-style)",
                  "stretch g^xr into k_enc, k_mac",
                  "PRF security of the KDF"
                ],
                [
                  "AEAD / MAC",
                  "bulk encryption + tag",
                  "CCA-secure DEM"
                ],
                [
                  "Fresh r per message",
                  "randomized encapsulation",
                  "nonce/key uniqueness discipline"
                ]
              ]
            },
            "bullets": [
              "Hybrid: public-key KEM carries a session key; symmetric DEM encrypts the data.",
              "DHIES: u = g^r, shared = h^r = g^xr; KDF splits it into k_enc, k_mac.",
              "Receiver recomputes u^x and verifies the AEAD tag before decrypting.",
              "CCA security = DDH/CDH (confidentiality) + authenticated DEM (integrity).",
              "Fresh r per message - randomized encapsulation, no static-DH staleness.",
              "ECIES ports it to curves; TLS 1.3 and HPKE use the same shape."
            ],
            "diagram": {
              "kind": "pipeline",
              "title": "The DHIES / KEM-DEM hybrid",
              "caption": "Public key moves one small secret; symmetric crypto moves the message.",
              "stages": [
                {
                  "label": "KEM encapsulate",
                  "note": "u = g^r, shared = h^r"
                },
                {
                  "label": "KDF",
                  "note": "shared -> k_enc, k_mac"
                },
                {
                  "label": "AEAD encrypt",
                  "note": "c, t under session keys"
                },
                {
                  "label": "Send (u, c, t)",
                  "note": "small KEM output + bulk ciphertext"
                },
                {
                  "label": "Receive",
                  "note": "u^x -> shared -> keys -> verify -> decrypt"
                }
              ]
            },
            "callout": {
              "type": "tip",
              "title": "Name the theorem, not just the recipe",
              "body": "The composition theorem is the difference between a recipe answer and a proof answer: 'a secure KEM plus a CCA-secure DEM is a CCA-secure public-key scheme'. Then attribute each half - DH problems for the KEM, AEAD for the DEM. Examiners grade the attribution as heavily as the steps."
            },
            "examQuestions": [
              {
                "q": "Explain CCA-secure hybrid encryption from Diffie-Hellman problems: define KEM and DEM, give the DHIES/ECIES construction step by step, and state the security reduction.",
                "marks": 14,
                "outline": [
                  "Motivation: public-key slow/size-limited; symmetric fast/unbounded",
                  "KEM: transports a fresh session key (u = g^r, shared = h^r)",
                  "KDF: shared -> k_enc and k_mac",
                  "DEM: AEAD under session keys",
                  "Receiver: u^x = g^xr, re-derive, verify tag, decrypt",
                  "Confidentiality: DDH/CDH + KDF pseudorandomness",
                  "CCA security: authenticated DEM rejects tampering before decrypting"
                ]
              },
              {
                "q": "Why does wrapping ElGamal's mask in a KDF and an AEAD close the malleability hole of section 4.5?",
                "marks": 7,
                "outline": [
                  "Raw ElGamal: (c1, u*c2) -> u*m - tampering silently decrypts",
                  "Hybrid: mask feeds a KDF, not the plaintext",
                  "Tampered u changes the derived key, not the message",
                  "The AEAD tag then fails - ciphertext rejected before decryption",
                  "Raw ElGamal: (c1, u*c2) -> u*m - tampering decrypts silently",
                  "In the hybrid, the mask feeds a KDF, not the plaintext",
                  "Tampered u changes the derived key; the AEAD tag then fails"
                ]
              }
            ]
          },
          {
            "number": "5.3",
            "title": "CCA-secure hybrids from the RSA assumption",
            "body": [
              "The RSA-assumption route to CCA security parallels section 5.2 with a different trapdoor: the assumption that inverting RSA - recovering m from (c = m^e, n, e) - is infeasible without the factorization of n. Raw RSA is a trapdoor permutation, which makes it a natural KEM: encapsulate by encrypting a random session key k under (n, e); the holder of d decapsulates by raising to d. But textbook-RSA-as-KEM inherits the CCA holes - determinism and malleability - so the padding is the whole game.",
              "OAEP (Optimal Asymmetric Encryption Padding) is the fix, proven CCA-secure in the random oracle model (section 3.5). Encoding before encryption: pad the message with randomness and a redundancy check through two Feistel-style rounds of the hash G and H - m' = (m XOR G(r)) || (r XOR H(m XOR G(r))); then c = m'^e mod n. Decryption inverts, re-derives the redundancy, and rejects on mismatch - so any tampering fails a check before the plaintext is emitted, and the malleability attack (c * s^e -> m * s) produces garbage that fails the redundancy test rather than a related plaintext.",
              "A worked contrast makes the fix visible. Textbook RSA: challenge c = 4^3 = 31 (n = 33 toy); the attack c' = 31 * 2^3 = 17 decrypts to a meaningful 8 - information escaped. OAEP-RSA: the attacker's c' decrypts to a scrambled m'' whose redundancy check fails - the decryptor returns 'invalid padding', not a related message; the oracle returns only accept/reject, and with OAEP's proof even that channel yields nothing. This is why deployed standards (RSAES-OAEP in TLS certificates-era handshakes, PKCS#1 v2) specify OAEP and forbid raw RSA encryption.",
              "The exam framing: state the RSA assumption, show why raw RSA fails CCA (the section 5.1 trace), describe OAEP's two-hash Feistel padding and its rejection rule, and close with the hybrid composition - RSA-OAEP as KEM + AEAD as DEM, the same KEM/DEM theorem as the DH route. The comparison sentence examiners reward: 'DH-KEM needs group hardness and freshness; RSA-KEM needs factoring hardness and OAEP - the AEAD half is identical'."
            ],
            "keyTerms": [
              {
                "term": "RSA assumption",
                "definition": "Inverting RSA (recovering m from m^e mod n) is infeasible without factoring n."
              },
              {
                "term": "OAEP",
                "definition": "Randomized Feistel-style padding with redundancy check - CCA-secure in the ROM."
              },
              {
                "term": "RSA-KEM",
                "definition": "Encapsulate a random session key under (n, e); decapsulate with d."
              },
              {
                "term": "Redundancy check",
                "definition": "The encoded padding's verifiable structure - tampered decryptions reject instead of leaking."
              }
            ],
            "table": {
              "caption": "Raw RSA vs RSA-OAEP as a KEM.",
              "headers": [
                "Property",
                "Textbook RSA",
                "RSA-OAEP"
              ],
              "rows": [
                [
                  "Randomness",
                  "none - deterministic",
                  "fresh r inside the padding"
                ],
                [
                  "Tampering c * s^e",
                  "decrypts to m * s - leaks",
                  "fails the redundancy check - rejected"
                ],
                [
                  "Security notion",
                  "none (not even CPA)",
                  "CCA-secure in the random oracle model"
                ],
                [
                  "Role",
                  "trapdoor permutation only",
                  "CCA-secure KEM for hybrid encryption"
                ]
              ]
            },
            "bullets": [
              "RSA assumption: inverting m^e mod n requires factoring n.",
              "Raw RSA as KEM: deterministic and malleable - CCA-fatal.",
              "OAEP pads with randomness through two hash rounds (G, H) before encrypting.",
              "Decryption verifies redundancy first; tampering yields rejection, not leakage.",
              "OAEP's proof lives in the random oracle model - flagship ROM result.",
              "Hybrid: RSA-OAEP KEM + AEAD DEM - same theorem as the DH route."
            ],
            "diagram": {
              "kind": "flow",
              "title": "OAEP padding before RSA",
              "caption": "Two hash rounds weave the message and the randomness into a checkable block.",
              "steps": [
                {
                  "label": "Message m + random r",
                  "note": "fresh per encryption"
                },
                {
                  "label": "XOR G(r)",
                  "note": "first Feistel round masks m"
                },
                {
                  "label": "XOR H(...)",
                  "note": "second round masks r - redundancy woven in"
                },
                {
                  "label": "RSA encrypt",
                  "note": "c = m'^e mod n"
                },
                {
                  "label": "Decrypt + check",
                  "note": "verify redundancy; reject on mismatch"
                }
              ]
            },
            "callout": {
              "type": "exam",
              "title": "Padding is the security, not key length",
              "body": "The question 'why not just use longer RSA keys without padding?' has a precise answer: determinism and malleability are structural - no key length fixes them; OAEP's randomness and redundancy check are what convert the permutation into an encryption scheme. Length buys brute-force margin; padding buys security notions."
            },
            "examQuestions": [
              {
                "q": "State the RSA assumption and explain why textbook RSA is not CCA-secure. Describe OAEP padding and its rejection rule, and explain how RSA-OAEP composes into a CCA-secure hybrid cipher.",
                "marks": 14,
                "outline": [
                  "Assumption: inverting RSA requires factoring n",
                  "Textbook RSA: deterministic (CPA) and malleable (CCA) - section 5.1 trace",
                  "OAEP: randomness r, two Feistel rounds with hashes G and H",
                  "Encrypted only after padding: c = m'^e mod n",
                  "Decryption checks redundancy - tampering rejects, does not leak",
                  "ROM proof - flagship random-oracle result",
                  "Hybrid: RSA-OAEP KEM + CCA-secure AEAD DEM"
                ]
              },
              {
                "q": "How does OAEP's redundancy check neutralize the malleability attack c' = c * s^e?",
                "marks": 7,
                "outline": [
                  "c' decrypts to a scrambled padded block",
                  "The woven redundancy no longer matches",
                  "Decryptor returns invalid - no related plaintext escapes",
                  "The oracle leaks nothing usable",
                  "c' decrypts to a scrambled padded block",
                  "The woven redundancy no longer matches",
                  "The decryptor returns invalid - no related plaintext escapes"
                ]
              }
            ]
          },
          {
            "number": "5.4",
            "title": "Digital signatures - the private-key direction",
            "body": [
              "A digital signature is public-key crypto turned around: the signer holds the private key and produces a tag on a message; anyone with the public key verifies. The security notion is existential unforgeability under chosen-message attack (EUF-CMA) - exactly the MAC game but with a public verification key: the attacker requests signatures on chosen messages, then must produce a valid (m, sig) on a message never signed. Signatures add what MACs cannot: non-repudiation - the signer cannot later deny, because anyone can verify with the public key.",
              "The RSA route is hash-then-sign with a full-domain hash: signature s = H(m)^d mod n, verified by checking s^e mod n == H(m). The hash must be full-domain (mapped onto the whole range) to make finding a message matching a chosen signature infeasible. The canonical failure to quote: textbook RSA signatures without hashing are trivially forgeable - pick any s, compute m = s^e mod n, and (m, s) is a valid pair; the forger never needed d because it chose the message to fit the signature. Hashing first breaks that inversion: the forger must now hit a specific H(m), costing 2^n.",
              "A worked forgery and its repair, toy numbers (n = 33, e = 3, d = 7): pick s = 5; m = 5^3 mod 33 = 26 - a valid textbook signature on the 'message' 26 that nobody wrote; the forger authored nothing, only inverted. With full-domain hashing, the forger needs m' with H(m') = 26 - a pre-image problem at 2^n. The same hash-then-sign structure serves DSA and ECDSA: sign the digest with the group-based algorithm; the digest's collision resistance (section 3.3) is what a transferred signature would exploit.",
              "Exam framing: define signatures vs MACs (public verifiability, non-repudiation), state EUF-CMA, give the RSA-FDH construction, run the toy forgery and the hashing repair, and name the modern instantiations (RSA-PSS - randomized, ROM-proven; ECDSA - curve-based, standardized in TLS). The non-repudiation sentence is the section's differentiator: it is the one property that separates signatures from symmetric MACs and the reason contracts, certificates and software updates are signed, not MACed."
            ],
            "keyTerms": [
              {
                "term": "Digital signature",
                "definition": "Private-key tag verified by anyone with the public key - integrity, authenticity, non-repudiation."
              },
              {
                "term": "EUF-CMA",
                "definition": "Unforgeability after signing chosen messages - the standard signature game."
              },
              {
                "term": "RSA full-domain hash",
                "definition": "s = H(m)^d mod n with H mapped onto the full range; verify s^e == H(m)."
              },
              {
                "term": "RSA-PSS",
                "definition": "Randomized padding for signatures - provably secure in the ROM; the modern standard."
              },
              {
                "term": "Non-repudiation",
                "definition": "The signer cannot deny a signature - possible only with public verification."
              }
            ],
            "codeExample": {
              "language": "python",
              "caption": "rsa_sig.py - toy signing, verification, and the forgery",
              "code": "n, e, d = 33, 3, 7          # toy keys (p = 3, q = 11)\n\nm = 4\nsig = pow(m, d, n)          # sign: s = m^d\nprint(pow(sig, e, n) == m)  # verify: s^e == m -> True\n\n# forgery without the private key: choose s first\ns = 5\nforged_m = pow(s, e, n)     # 26 - 'message' nobody wrote\nprint(pow(forged_m, d, n) == s)   # True - valid pair!\n# hash-then-sign kills this: forger needs H(m') = s (pre-image, 2^n)"
            },
            "bullets": [
              "Signatures: private key signs, public key verifies - reverse of encryption.",
              "EUF-CMA: forge a fresh valid (m, sig) after chosen-message queries.",
              "Non-repudiation: public verification makes denial impossible - MACs cannot.",
              "RSA-FDH: s = H(m)^d; verify s^e == H(m); full-domain hash required.",
              "Textbook forgery: pick s, set m = s^e - valid pair, no private key.",
              "Hashing first turns forgery into a 2^n pre-image problem; PSS/ECDSA are modern."
            ],
            "diagram": {
              "kind": "compare",
              "title": "MAC vs digital signature",
              "caption": "The same integrity goal - different trust geometry.",
              "left": {
                "heading": "MAC (symmetric)",
                "items": [
                  "One shared key signs and verifies",
                  "Verifier must also hold the key",
                  "Verifier could forge - no non-repudiation",
                  "Fast; per-pair keys to manage"
                ]
              },
              "right": {
                "heading": "Signature (public-key)",
                "items": [
                  "Private key signs; public key verifies",
                  "Anyone can verify - public auditability",
                  "Signer cannot deny - non-repudiation",
                  "Slower; supports certificates and contracts"
                ]
              }
            },
            "callout": {
              "type": "exam",
              "title": "The pick-s-first forgery",
              "body": "The single most-quoted signature attack: without the key, choose s and define m = s^e mod n - verification passes because the algebra is symmetric. One line fixes it: hash the message first, so the forger must invert H. Present both halves and the answer demonstrates the whole design logic of hash-then-sign."
            },
            "examQuestions": [
              {
                "q": "Define digital signatures and EUF-CMA security. Give the RSA full-domain-hash construction, demonstrate the textbook forgery (pick s, set m = s^e), and explain how hash-then-sign defeats it. Contrast signatures with MACs on non-repudiation.",
                "marks": 14,
                "outline": [
                  "Signature: private signs, public verifies; EUF-CMA game",
                  "MAC comparison: shared key - verifier can also forge",
                  "Non-repudiation only with public verification",
                  "RSA-FDH: s = H(m)^d mod n; verify s^e == H(m)",
                  "Forgery: s = 5 -> m = 125 mod 33 = 26; (26, 5) verifies",
                  "With hashing: forger needs H(m') = s - a 2^n pre-image",
                  "Modern: RSA-PSS (randomized, ROM) and ECDSA (curves)"
                ]
              },
              {
                "q": "Why can a MAC never provide non-repudiation?",
                "marks": 7,
                "outline": [
                  "Both parties hold the same key",
                  "Either can produce valid tags on any message",
                  "A court cannot attribute authorship to one party",
                  "Public-key verification confines signing to the private-key holder",
                  "Both parties hold the same key",
                  "Either can produce valid tags on any message",
                  "Courts cannot attribute authorship to one party"
                ]
              }
            ]
          },
          {
            "number": "5.5",
            "title": "Signature schemes beyond RSA - hash-and-sign and group-based schemes",
            "body": [
              "The hash-and-sign paradigm is signature design's master template: hash the arbitrary-length message to a fixed digest, then apply a signature algorithm to the digest. Every modern scheme is an instance - RSA-PSS and RSA-FDH hash into the RSA permutation, DSA and ECDSA hash into a field element the group algorithm consumes, Ed25519 hashes internally (SHA-512) into its Edwards-curve arithmetic. The paradigm's security contract: the signature algorithm's unforgeability proof holds for the digest, and the hash's collision resistance is what ties digests to documents (section 3.3's birthday budget is the attack surface).",
              "ECDSA, the deployed curve scheme: signer has secret x with public Q = xG; to sign digest h, pick fresh k, compute R = kG and r = R.x mod n, then s = k^-1 (h + x*r) mod n; verify by checking that r matches the reconstruction from Q, h, r, s. Freshness of k is existential: a repeated or predictable k leaks x directly - s1 - s2 = k^-1 (h1 - h2) with the same k solves k, then x. The Sony PS3 firmware signing key (2010) fell to exactly this - one reused k across two signatures.",
              "DSA/ECDSA vs RSA signatures, in one comparison: RSA signatures are deterministic (PSS adds randomness for provability), verification is one exponentiation, and security rests on factoring/RSA-inversion; ECDSA signatures are randomized per-se and verification is curve arithmetic, security rests on the ECDLP, and key/signature sizes are dramatically smaller (256-bit curve vs 3072-bit RSA at equal security). Both are hash-and-sign instances; the syllabus's 'Digital Signatures' heading is satisfied by the paradigm plus one scheme each way.",
              "Exam framing: state the hash-and-sign template and why hashing is not optional (the forgery of section 5.4; size reduction to one block), give ECDSA's signing equations with the k-reuse attack worked as a formula, and close with the RSA-vs-ECDSA comparison table. The k-reuse derivation is the highest-yield technical detail: s1 - s2 = k^-1(h1 - h2) -> k = (h1 - h2)/(s1 - s2) -> x = (k*s1 - h1)/r - three formulas, one famous compromise."
            ],
            "keyTerms": [
              {
                "term": "Hash-and-sign",
                "definition": "Sign the digest, not the message - every modern signature scheme's template."
              },
              {
                "term": "ECDSA",
                "definition": "Curve-based signatures: r = (kG).x, s = k^-1(h + x*r) mod n; verify via public Q."
              },
              {
                "term": "Nonce k reuse",
                "definition": "Repeating the signing randomness leaks the private key algebraically."
              },
              {
                "term": "Ed25519",
                "definition": "Modern Edwards-curve signature scheme - deterministic nonce derivation, fast, misuse-resistant."
              }
            ],
            "table": {
              "caption": "RSA signatures vs ECDSA at 128-bit security.",
              "headers": [
                "Property",
                "RSA (PSS/FDH)",
                "ECDSA (P-256)"
              ],
              "rows": [
                [
                  "Hardness",
                  "RSA inversion / factoring",
                  "ECDLP"
                ],
                [
                  "Signature size",
                  "3072 bits",
                  "512 bits (two 256-bit scalars)"
                ],
                [
                  "Randomness",
                  "PSS adds it; FDH deterministic",
                  "mandatory fresh k per signature"
                ],
                [
                  "Failure mode",
                  "no padding -> forgeable",
                  "k reuse -> key extracted"
                ],
                [
                  "Verification cost",
                  "one modexp",
                  "curve scalar multiplications"
                ]
              ]
            },
            "bullets": [
              "Hash-and-sign: digest first - binding, size, and the anti-forgery fix in one.",
              "Collision resistance is the paradigm's attack surface (birthday budget).",
              "ECDSA: r = (kG).x; s = k^-1(h + x*r) mod n; verify via Q = xG.",
              "Fresh k existential: s1 - s2 = k^-1(h1 - h2) leaks k, then x.",
              "PS3 (2010): one reused k extracted Sony's firmware signing key.",
              "Ed25519 derives k deterministically from the message - reuse impossible."
            ],
            "diagram": {
              "kind": "cycle",
              "title": "The ECDSA signing loop",
              "caption": "Each signature needs a fresh k - the loop's discipline is the scheme's security.",
              "steps": [
                {
                  "label": "Digest h",
                  "note": "H(m) reduced mod n"
                },
                {
                  "label": "Fresh k",
                  "note": "uniform, never reused"
                },
                {
                  "label": "R = kG",
                  "note": "r = R.x mod n"
                },
                {
                  "label": "s = k^-1(h + x*r)",
                  "note": "mod n"
                },
                {
                  "label": "Publish (r, s)",
                  "note": "with the message"
                },
                {
                  "label": "Verify",
                  "note": "reconstruct from Q, h, r, s"
                }
              ]
            },
            "callout": {
              "type": "warning",
              "title": "One reused k is a key leak",
              "body": "The algebra is unforgiving: with the same k in two signatures, k = (h1 - h2)/(s1 - s2) mod n and then x = (k*s1 - h1)/r mod n - the private key falls out of public data. Quote the PS3 incident as the consequence and Ed25519's deterministic nonce as the engineering fix."
            },
            "examQuestions": [
              {
                "q": "Explain the hash-and-sign paradigm and why hashing is essential. Describe ECDSA signing and verification, derive the private-key leak when the nonce k is reused, and compare RSA-PSS with ECDSA.",
                "marks": 14,
                "outline": [
                  "Template: digest first; collision resistance binds digest to document",
                  "Hashing also fixes the pick-s-first forgery and shrinks input to one block",
                  "ECDSA: r = (kG).x; s = k^-1(h + x*r) mod n",
                  "Verification reconstructs r from Q, h, r, s",
                  "k reuse: k = (h1 - h2)/(s1 - s2), then x = (k*s1 - h1)/r",
                  "PS3 firmware key extracted via reused k (2010)",
                  "RSA-PSS: factoring-based, larger sizes; ECDSA: ECDLP, compact"
                ]
              },
              {
                "q": "Why must the ECDSA nonce be fresh and unpredictable for every signature?",
                "marks": 7,
                "outline": [
                  "s = k^-1(h + x*r) contains x masked by k",
                  "Same k twice: two equations solve k, then x",
                  "Predictable k is equivalent to publishing x",
                  "Ed25519 derives k deterministically to remove the failure mode",
                  "s = k^-1 (h + x*r) contains x masked by k",
                  "Same k twice: two equations solve k, then x",
                  "Ed25519 derives k deterministically to remove the failure mode"
                ]
              }
            ]
          },
          {
            "number": "5.6",
            "title": "Number theory for cryptography",
            "body": [
              "The unit's toolkit is four number-theoretic facts, each feeding a scheme already met. Fermat's little theorem: a^(p-1) = 1 mod p for prime p and a not divisible by p - the correctness backbone of DH exponent cycling and primality's Fermat test. Euler's generalization: a^phi(n) = 1 mod n when gcd(a, n) = 1, with phi(pq) = (p-1)(q-1) - the theorem that makes RSA decryption work (section 4.6's ed = 1 mod phi).",
              "The Chinese Remainder Theorem (CRT): a system x = a1 mod m1, x = a2 mod m2 with coprime moduli has a unique solution mod m1*m2. Worked toy: x = 2 mod 3 and x = 3 mod 5 gives x = 8 (8 mod 3 = 2, 8 mod 5 = 3). In RSA, CRT speeds decryption fourfold: compute m mod p and m mod q separately with small exponents, then recombine - the standard optimization in every RSA library. CRT also explains why knowing p and q breaks RSA utterly: the trapdoor is the factorization, full stop.",
              "Modular inverses are the daily arithmetic: a^-1 mod n exists iff gcd(a, n) = 1, computable by the extended Euclidean algorithm - or, in Python 3.8+, literally pow(a, -1, n). Worked: the inverse of 3 mod 20 is 7 (3*7 = 21 = 1 mod 20), which is exactly how d was found from e in every RSA toy of Units IV and V; ElGamal's decryption division used 6^-1 = 4 mod 23. Primality testing closes the kit: Miller-Rabin's randomized rounds give error probability at most 4^-k per test - how 2048-bit primes are actually found for key generation.",
              "Exam framing: state each theorem precisely with its precondition, give one deployment consequence each (Fermat -> exponent cycling and primality testing; Euler -> RSA correctness; CRT -> fast RSA decryption and the p,q trapdoor; inverses -> key generation and ElGamal division), and be ready to run one hand computation (CRT toy, an inverse, a Fermat check). These are the marks underneath every formula-based answer in the unit - examiners set them as standalone 7-markers as often as they embed them."
            ],
            "keyTerms": [
              {
                "term": "Fermat's little theorem",
                "definition": "a^(p-1) = 1 mod p for prime p, gcd(a, p) = 1."
              },
              {
                "term": "Euler's theorem and phi",
                "definition": "a^phi(n) = 1 mod n for gcd(a, n) = 1; phi(pq) = (p-1)(q-1)."
              },
              {
                "term": "Chinese Remainder Theorem",
                "definition": "Coprime-moduli congruences combine to a unique solution mod the product."
              },
              {
                "term": "Extended Euclid",
                "definition": "Computes gcd and modular inverses - the engine of key generation."
              },
              {
                "term": "Miller-Rabin",
                "definition": "Randomized primality test with error at most 4^-k after k rounds."
              }
            ],
            "codeExample": {
              "language": "python",
              "caption": "nt_toolkit.py - the four facts in four lines",
              "code": "# Fermat: a^(p-1) = 1 (mod p)\np, a = 23, 5\nprint(pow(a, p - 1, p))            # 1\n\n# Euler phi for n = p*q feeds RSA: phi = (p-1)(q-1)\nprint((3 - 1) * (11 - 1))          # 20\n\n# CRT: x = 2 (mod 3), x = 3 (mod 5) -> x = 8\nprint(8 % 3, 8 % 5)                # 2 3\n\n# modular inverse: e = 3 -> d = 7 mod 20 (RSA keygen step)\nprint(pow(3, -1, 20))              # 7"
            },
            "bullets": [
              "Fermat: a^(p-1) = 1 mod p - exponent cycling, primality tests.",
              "Euler: a^phi(n) = 1 mod n; phi(pq) = (p-1)(q-1) - RSA correctness.",
              "CRT: unique recombination mod pq - 4x faster RSA decryption.",
              "CRT cuts both ways: knowing p and q is the whole trapdoor.",
              "Inverses via extended Euclid (pow(a, -1, n)) - keygen and ElGamal division.",
              "Miller-Rabin: how 2048-bit primes are actually generated."
            ],
            "diagram": {
              "kind": "layers",
              "title": "The number-theory stack beneath public-key crypto",
              "caption": "Each layer is used by the layer above it.",
              "layers": [
                {
                  "label": "Schemes",
                  "note": "RSA, DH, ElGamal, ECDSA"
                },
                {
                  "label": "Theorems",
                  "note": "Fermat, Euler, CRT"
                },
                {
                  "label": "Algorithms",
                  "note": "extended Euclid, square-and-multiply, Miller-Rabin"
                },
                {
                  "label": "Arithmetic",
                  "note": "modular addition, multiplication, inverse"
                }
              ]
            },
            "callout": {
              "type": "tip",
              "title": "Four facts, four deployments",
              "body": "Anchor each theorem to its deployment sentence: Fermat -> exponent cycling mod p and Fermat primality tests; Euler -> why RSA decryption recovers m; CRT -> the 4x RSA speedup and the p,q trapdoor; inverses -> every d = e^-1 mod phi and ElGamal division. Four anchors turn a memorization question into a systems answer."
            },
            "examQuestions": [
              {
                "q": "State Fermat's little theorem, Euler's theorem and the Chinese Remainder Theorem with their preconditions, and give one cryptographic deployment consequence of each. Illustrate CRT with x = 2 mod 3, x = 3 mod 5.",
                "marks": 14,
                "outline": [
                  "Fermat: a^(p-1) = 1 mod p, gcd(a, p) = 1 - DH cycling, primality",
                  "Euler: a^phi(n) = 1 mod n; phi(pq) = (p-1)(q-1) - RSA correctness",
                  "CRT: unique x mod m1*m2 for coprime moduli",
                  "Toy: x = 2 mod 3, x = 3 mod 5 -> x = 8",
                  "CRT deployment: fast RSA decryption; also the p,q trapdoor",
                  "Inverses: extended Euclid -> d = e^-1 mod phi, ElGamal division",
                  "Miller-Rabin: generating 2048-bit primes"
                ]
              },
              {
                "q": "Compute the modular inverse of 6 modulo 23 and explain where such inverses appear in ElGamal decryption.",
                "marks": 7,
                "outline": [
                  "Extended Euclid or trial: 6*4 = 24 = 1 mod 23 - inverse is 4",
                  "ElGamal decrypts m = c2 * (c1^x)^-1 mod p",
                  "The inverse turns group division into multiplication",
                  "Extended Euclid or trial: 6*4 = 24 = 1 mod 23",
                  "ElGamal decrypts m = c2 * (c1^x)^-1 mod p",
                  "The inverse turns group division into multiplication"
                ]
              }
            ]
          },
          {
            "number": "5.7",
            "title": "Overview of TLS/SSL and interactive protocols",
            "body": [
              "TLS (successor to SSL) is the course's capstone assembly: every primitive from Units I-V appears in one protocol. Its two layers: the record protocol fragments data, encrypts it with negotiated AEAD keys and appends authentication tags; the handshake protocol negotiates parameters, authenticates the server (and optionally the client), and establishes the session keys. 'Interactive protocols' is the syllabus's name for this two-party choreography - messages alternating under an adversary that sees and may modify everything.",
              "The TLS 1.3 handshake, step by step: (1) ClientHello - client's random, supported ciphersuites, and an ECDHE key share (fresh x, g^x - section 4.2); (2) ServerHello - server's key share (g^y), from which both sides compute the shared secret g^xy; (3) server certificate - the public key binding the server's identity, signed by a CA (hash-then-sign, section 5.4); (4) server Finished - a MAC over the whole transcript, proving possession of the private key and detecting tampering; (5) client Finished - the client's transcript MAC. Both sides then run HKDF (section 3.4) on the shared secret plus transcript hashes to derive the record keys.",
              "The design decisions map one-to-one onto the course's lessons: ECDHE gives forward secrecy (ephemeral exponents, section 4.2); the certificate chain converts DH's MITM weakness (section 4.2) into authenticated key exchange; AEAD-only cipher suites encode Encrypt-then-MAC thinking (section 3.6 - TLS 1.3 removed CBC entirely); HKDF's context labels derive independent keys for each direction and purpose (key separation); the transcript MAC binds every negotiated value so downgrade attacks alter a byte and fail the Finished check. One round trip (1-RTT), and 0-RTT resumption trades a replay window for latency - an explicit, documented exception.",
              "Exam framing: draw the handshake as a five-step sequence diagram, attach the course concept each step uses, and close with the two-layer split (record vs handshake). The highest-yield details: forward secrecy from ECDHE, MITM killed by the certificate + Finished MAC, and 'why did TLS 1.3 remove CBC?' - because CBC's padding and MAC-then-encrypt order produced the oracle attacks of sections 3.6 and 5.1. TLS is where the syllabus proves it was never a list of algorithms - it is one design language."
            ],
            "keyTerms": [
              {
                "term": "TLS record protocol",
                "definition": "Fragments, AEAD-encrypts and authenticates application data."
              },
              {
                "term": "TLS handshake",
                "definition": "Negotiates ciphersuites, authenticates via certificates, derives session keys."
              },
              {
                "term": "Transcript MAC (Finished)",
                "definition": "MAC over all handshake messages - detects tampering and downgrade attempts."
              },
              {
                "term": "Key separation",
                "definition": "HKDF derives independent keys per direction and purpose from one secret."
              },
              {
                "term": "0-RTT",
                "definition": "TLS 1.3 early data on resumption - faster, but replayable by design tradeoff."
              }
            ],
            "table": {
              "caption": "Each handshake step and the course concept it deploys.",
              "headers": [
                "Handshake step",
                "What happens",
                "Course concept"
              ],
              "rows": [
                [
                  "ClientHello",
                  "random, suites, ECDHE share g^x",
                  "ephemeral DH (Unit IV)"
                ],
                [
                  "ServerHello",
                  "server share g^y; shared g^xy",
                  "CDH (Unit IV)"
                ],
                [
                  "Certificate",
                  "server identity, CA-signed",
                  "hash-and-sign (Unit V)"
                ],
                [
                  "Finished (server)",
                  "transcript MAC",
                  "MACs / key separation (Unit II)"
                ],
                [
                  "Record layer",
                  "AEAD-encrypted application data",
                  "authenticated encryption (Unit III)"
                ]
              ]
            },
            "bullets": [
              "Two layers: handshake establishes keys; record protocol protects data.",
              "ECDHE per connection - forward secrecy by construction.",
              "Certificate + Finished MAC kill the MITM that raw DH permits.",
              "HKDF derives separate keys per direction and purpose (key separation).",
              "TLS 1.3: AEAD-only - CBC and MAC-then-encrypt removed after the oracle era.",
              "Transcript MAC makes every downgrade attempt fail loudly."
            ],
            "diagram": {
              "kind": "flow",
              "title": "The TLS 1.3 handshake",
              "caption": "Five messages assemble the whole course into one secure channel.",
              "steps": [
                {
                  "label": "ClientHello",
                  "note": "random + ECDHE share"
                },
                {
                  "label": "ServerHello",
                  "note": "share -> shared secret g^xy"
                },
                {
                  "label": "Certificate",
                  "note": "CA-signed server identity"
                },
                {
                  "label": "Finished (server)",
                  "note": "transcript MAC - authentication"
                },
                {
                  "label": "Finished (client) + records",
                  "note": "AEAD-protected application data"
                }
              ]
            },
            "callout": {
              "type": "exam",
              "title": "Map every step to a unit",
              "body": "The full-mark TLS answer is a mapping exercise: ClientHello/ServerHello -> Unit IV (ECDHE, forward secrecy); Certificate -> Unit V (hash-and-sign, PKI); Finished -> Unit II (MACs, transcript binding); records -> Unit III (AEAD, Encrypt-then-MAC). Examiners grade the mapping, not the packet-order trivia - it proves the course cohered."
            },
            "examQuestions": [
              {
                "q": "Describe the TLS 1.3 handshake step by step, attaching the cryptographic concept each step deploys. Explain how the design achieves forward secrecy, resists man-in-the-middle attacks, and why TLS 1.3 removed CBC cipher suites.",
                "marks": 14,
                "outline": [
                  "ClientHello: random, suites, ECDHE share (Unit IV)",
                  "ServerHello: server share -> g^xy via CDH",
                  "Certificate: CA-signed identity - hash-and-sign (Unit V)",
                  "Finished MACs bind the transcript - MITM and downgrade detection",
                  "HKDF derives separated keys per direction (Unit II/III)",
                  "Forward secrecy: ephemeral exponents erased per connection",
                  "CBC removed: padding/MAC-then-encrypt oracles (Units III, V) - AEAD only"
                ]
              },
              {
                "q": "Why does TLS use ephemeral Diffie-Hellman (ECDHE) rather than static DH or pure RSA key transport?",
                "marks": 7,
                "outline": [
                  "Ephemeral exponents: fresh per session, erased after use",
                  "Later server-key compromise cannot decrypt past traffic",
                  "Static DH: one leak exposes all history",
                  "RSA key transport (legacy): no forward secrecy at all",
                  "Ephemeral exponents are fresh per session and erased",
                  "Later server-key compromise cannot decrypt past traffic",
                  "Static DH: one leak opens history; RSA transport: none"
                ]
              }
            ]
          }
        ]
      }
    }
  ],
  "studyPlan": [
    {
      "id": "weightage",
      "heading": "Exam weightage - where to spend the hours",
      "weightedTopics": [
        {
          "topic": "Perfect secrecy, one-time pad, Shannon characterization",
          "weight": "about 8-10 marks",
          "note": "Definition + XOR walkthrough + the three limitations - near-guaranteed."
        },
        {
          "topic": "Historical ciphers and their cryptanalysis",
          "weight": "about 7-8 marks",
          "note": "Shift/substitution/Vigenere each paired with its attack."
        },
        {
          "topic": "DES vs AES and modes of operation",
          "weight": "about 10-12 marks",
          "note": "Feistel equation, AES round, mode table with IV rules."
        },
        {
          "topic": "MACs, hash properties, Merkle-Damgard and birthday attacks",
          "weight": "about 10-12 marks",
          "note": "EUF-CMA, the trio of resistances, 2^(n/2) arithmetic."
        },
        {
          "topic": "Authenticated encryption compositions",
          "weight": "about 7-8 marks",
          "note": "EtM vs MtE vs E&M with the padding-oracle story."
        },
        {
          "topic": "DLP, CDH, DDH ladder and DH exchange",
          "weight": "about 10-12 marks",
          "note": "Mod-23 walkthrough ready; implications direction."
        },
        {
          "topic": "ElGamal and RSA toy computations",
          "weight": "about 8-10 marks",
          "note": "Hand-worked numbers are the marks - practise both."
        },
        {
          "topic": "Signatures (RSA-FDH, ECDSA k-reuse) and TLS 1.3",
          "weight": "about 8-10 marks",
          "note": "Pick-s forgery, k-reuse algebra, handshake-to-unit mapping."
        }
      ]
    },
    {
      "id": "schedule",
      "heading": "A six-week study schedule",
      "body": [
        "Two hours a day, five days a week, with weekends for hand computations and past-paper drills. Every cryptosystem in this course rewards a hand-worked example - do each once on paper, twice from memory."
      ],
      "weeks": [
        {
          "week": "Week 1",
          "focus": "Unit I - foundations",
          "tasks": [
            "Scheme syntax + Kerckhoffs; Caesar and substitution walkthroughs",
            "Vigenere encryption + Kasiski test on a short text",
            "Computational security numerals (2^n / rate)",
            "Semantic security definition; PRG cipher; OTP bit walkthrough",
            "Shannon characterization + three limitations - one written answer"
          ]
        },
        {
          "week": "Week 2",
          "focus": "Unit II - primitives",
          "tasks": [
            "CPA game + PRF construction from memory",
            "Feistel round equation; DES parameters table",
            "AES round cycle; DES-vs-AES table",
            "ECB/CBC/CTR comparison table with IV rules",
            "HMAC code + CBC-MAC failure; one-time MAC 1/p proof",
            "Hash trio with costs"
          ]
        },
        {
          "week": "Week 3",
          "focus": "Unit III - hash theory and AE",
          "tasks": [
            "Davies-Meyer formula + why XOR back",
            "Merkle-Damgard chain + reduction sentence",
            "Birthday arithmetic: 2^(n/2) for MD5/SHA-1/SHA-256",
            "Four hash applications with properties",
            "ROM + OAEP/PSS flagship line",
            "AE compositions: EtM vs MtE vs E&M verdicts"
          ]
        },
        {
          "week": "Week 4",
          "focus": "Unit IV - hardness and public key",
          "tasks": [
            "DLP definition + attack cost table",
            "Mod-23 powers table (g = 5) memorized",
            "DH exchange walkthrough (8, 19, 2)",
            "DDH definition + hierarchy directions",
            "Curve addition formulas + one doubling mod 17",
            "ElGamal toy run (8, 10, 19, 6, 7) from memory"
          ]
        },
        {
          "week": "Week 5",
          "focus": "Unit V - CCA, signatures, TLS",
          "tasks": [
            "CCA game + RSA malleability trace (c * 2^e)",
            "DHIES/KEM-DEM five steps + composition theorem",
            "OAEP padding idea + rejection rule",
            "RSA-FDH forgery (pick s first) + hashing repair",
            "ECDSA equations + k-reuse algebra",
            "TLS 1.3 handshake mapped to units"
          ]
        },
        {
          "week": "Week 6",
          "focus": "Number theory + full revision",
          "tasks": [
            "Fermat, Euler, CRT, inverses - one hand computation each",
            "Redo every toy computation from memory (Caesar to ElGamal)",
            "Two full past papers under time",
            "Error log: every slipped formula rewritten three times",
            "Last-day sheet: one diagram + one table per unit"
          ]
        }
      ]
    },
    {
      "id": "exam-tips",
      "heading": "Exam-hall strategy",
      "examTips": [
        "Every cryptosystem answer has three parts: definition/formula, hand-worked example, security statement. Write all three even when the question names only one.",
        "Keep one mod-23 walkthrough alive (g = 5, powers 5/2/10/4/20/8/17) - it services DLP, DH, DDH and ElGamal questions.",
        "For hash questions, always write the cost numbers: pre-image 2^n, second-preimage 2^n, collision 2^(n/2).",
        "For mode questions, draw the chaining formula per mode and state the IV/nonce rule - the rule is the marks.",
        "Name the attacker model before defining any security notion: ciphertext-only, CPA (chosen plaintext), CCA (plus decryption oracle).",
        "For composition questions (AE, hybrids), state which primitive supplies confidentiality and which supplies integrity - the attribution is graded.",
        "Draw the TLS handshake as five boxes with the unit each box uses; the mapping is the answer.",
        "Time-box: 7-mark questions about 12 minutes, 14-mark about 22 minutes; leave 10 minutes to re-check every arithmetic step."
      ]
    },
    {
      "id": "slips",
      "heading": "Last-day strategy and common slips",
      "body": [
        "Last day: do not learn new material. Re-run every hand computation (Caesar, Vigenere, OTP, DH mod 23, ElGamal mod 23, RSA n = 33, CRT toy) once each, re-read the mode table and the AE-composition verdicts, and re-draw five diagrams: Feistel round, AES cycle, Merkle-Damgard chain, DH exchange, TLS handshake. Sleep before the paper - arithmetic errors, not concepts, lose the most marks here."
      ],
      "bullets": [
        "Saying the one-time pad is 'unbreakable so we use it' - it is unbreakable and unusable; the limitations are the question.",
        "Forgetting the XOR-back in Davies-Meyer - the feed-forward is the entire collision-resistance argument.",
        "Quoting collision cost as 2^n - it is 2^(n/2); pre-image is the 2^n one.",
        "Calling ECB 'secure with a good cipher' - independence leaks regardless of cipher strength.",
        "Saying CBC's IV merely needs to be unique - it must be unpredictable (BEAST).",
        "Claiming textbook RSA is encryption - it is a trapdoor permutation; OAEP makes it one.",
        "Mixing the implication direction in the DLP/CDH/DDH ladder - hard problems solve easy ones, not the reverse.",
        "Omitting authentication when describing DH - raw DH is MITM-vulnerable; certificates close it.",
        "Writing H(k || m) as a MAC - length extension; it is HMAC's double nest.",
        "Forgetting that ECDSA's nonce k must be fresh - reuse is a key leak (PS3)."
      ]
    }
  ]
};
