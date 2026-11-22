import type { AcademicSubject } from "./types";

export const cy603b: AcademicSubject = {
  id: "cy-603-b",
  code: "CY-603(B)",
  title: "Applied Cryptography",
  semester: "VI Semester",
  program: "RGPV · Cyber Security",
  tagline:
    "Every topic of the syllabus as one connected story: from classical ciphers and the one-time pad's perfect secrecy, through the number theory, assumptions and proofs behind modern constructions, the block ciphers, modes and MACs of the symmetric layer, the discrete-log, elliptic-curve and homomorphic constructions of the asymmetric layer, to the signatures, key management and PKI that turn it all into protocols.",
  description:
    "Five units walk from the history of cryptography, classical ciphers, perfect secrecy and the one-time pad, through one-way and trapdoor functions, algorithmic number theory, reductions, pseudo-randomness and symmetric security notions, then block ciphers (DES, 3DES, AES), modes, cryptanalysis, hashing and MACs with the GCM case study, then discrete logarithms, elliptic curves, RSA and ElGamal variants, hybrid encryption, homomorphic schemes and identity-based encryption, ending with RSA-PSS and ECDSA signatures, Kerberos key distribution, X.509 PKI and revocation, challenge-response and zero-knowledge authentication, Shamir's secret sharing and the TLS 1.3 handshake.",
  accentColor: "#8b5cf6",
  emoji: "AC",
  unitCount: 5,
  totalSections: 40,
  units: [
    {
      number: 1,
      roman: "I",
      title: "History, Classical Ciphers and Modern Foundations",
      summary:
        "Unit I sets the field's arc and its foundations: the history of cryptography, the classical ciphers - shift, monoalphabetic and polyalphabetic substitution - perfect secrecy and the one-time pad, the implementation dilemma of shared secret randomness, the probability and complexity background, the modern principles of one-way functions, trapdoor functions and hard-core bits, and the construction of a public-key cryptosystem from general cryptographic primitives.",
      chapter: {
        number: "01",
        title: "From Caesar to Computational Security",
        intro:
          "Unit I covers the history of cryptography, background in probability and algorithms, classical cryptography with shift, monoalphabetic and polyalphabetic substitution ciphers, encryption with perfect secrecy and the one-time pad, shared secret randomness versus perfect secrecy, background in algorithms and complexity theory, modern cryptography principles, one-way functions, trapdoor functions, hard-core bits, and the construction of a public-key cryptosystem from general cryptographic primitives.",
        inOneBreath:
          "Classical ciphers fail to statistics - frequency analysis kills substitution, Kasiski kills Vigenere - and the one-time pad achieves perfect secrecy by paying for it in key material: a fresh truly random pad per message, which key distribution makes impractical at scale. Modern cryptography therefore switches the goal to computational security, built from one-way functions, trapdoor functions and hard-core bits - the general primitives from which public-key cryptosystems are assembled.",
        sections: [
          {
            number: "1.1",
            title: "A short history of cryptography",
            body: [
              "Cryptography's history is a two-thousand-year arms race between ciphers and analysis. The classical era: Caesar's shift cipher (Rome, transposition of the alphabet), monoalphabetic substitution in medieval diplomacy, and the Vigenere cipher - called 'le chiffre indéchiffrable' until Charles Babbage and Kasiski broke it in the 19th century by exploiting key repetition. The mechanical era: rotor machines culminating in Enigma, whose weakness was not the machine but the protocol - key reuse, predictable message openings - exploited by the Polish and British cryptanalysts whose Bombe mechanized the attack.",
              "The modern era begins with Shannon (1949), who gave cryptography its mathematics: perfect secrecy, the distinction between confusion and diffusion, and the entropy view of keys. The computer era followed - Feistel's Lucifer design becoming DES (1977), the first public standard - and the conceptual revolution arrived in 1976 when Diffie and Hellman's 'New Directions' paper introduced public-key cryptography, solving the key-distribution problem that had constrained every earlier system. RSA followed in 1978, and the syllabus's two later units (number theory and discrete logarithms) are the direct descendants of that paper.",
              "A worked timeline fixes the exam narrative: classical (Caesar, substitution, Vigenere) -> mechanical (Enigma, Bombe) -> mathematical (Shannon's perfect secrecy, 1949) -> standardization (DES, 1977) -> asymmetric revolution (Diffie-Hellman 1976, RSA 1978) -> modern era (AES 2001, elliptic curves, lattice candidates). Each era contributed one idea that persists: statistics is the attacker's tool (classical), protocols fail before algorithms (mechanical), proofs can define security (modern).",
              "Exam framing: expect 'trace the history of cryptography' or 'classical vs modern cryptography'. Give the era table with named ciphers and their fates, land the Shannon and Diffie-Hellman turning points, and close with the lesson sentences - statistics broke the classical era, and key distribution motivated the modern one. Close with the era lessons - statistics defeat structure, protocols fail first, security is provable.",
            ],
            keyTerms: [
              { term: "Vigenere cipher", definition: "Polyalphabetic substitution with a repeating key word - broken by Kasiski/Babbage analysis." },
              { term: "Enigma", definition: "Rotor cipher machine of WWII - broken through protocol flaws, not machine failure." },
              { term: "Shannon (1949)", definition: "Defined perfect secrecy, entropy and the confusion/diffusion pairing." },
              { term: "Diffie-Hellman (1976)", definition: "Introduced public-key cryptography and the key-agreement problem's solution." },
            ],
            table: {
              caption: "The era table - ciphers and their fates.",
              headers: ["Era", "Signature systems", "What broke them", "Lasting lesson"],
              rows: [
                ["Classical (antiquity-1900)", "Caesar shift, monoalphabetic, Vigenere", "Frequency analysis, Kasiski test", "Statistics defeat structure"],
                ["Mechanical (1900-1945)", "Rotor machines, Enigma", "Key reuse and protocol habits", "Protocols fail before algorithms"],
                ["Mathematical (1949-)", "Shannon's theory, OTP analysis", "-", "Security can be proven"],
                ["Modern (1976-)", "DES, RSA, AES, ECC", "Short keys, outdated assumptions", "Assumptions need re-examination"],
              ],
            },
            bullets: [
              "Classical era: shift and substitution ciphers, broken by frequency statistics.",
              "Vigenere survived centuries until key repetition leaked its period.",
              "Enigma fell to protocol habits (key reuse, predictable headers), not cryptanalysis of the rotors alone.",
              "Shannon (1949) defined perfect secrecy and made security provable in principle.",
              "Diffie-Hellman (1976) and RSA (1978) removed the key-distribution constraint.",
              "Modern era: DES -> AES, elliptic curves, and post-quantum candidates.",
            ],
            diagram: {
              kind: "flow",
              title: "The cryptographic timeline",
              caption: "Five eras, each contributing one idea that survives in today's systems.",
              steps: [
                { label: "Classical", note: "shift, substitution, Vigenere - broken by statistics" },
                { label: "Mechanical", note: "Enigma rotors - broken by protocol flaws" },
                { label: "Mathematical", note: "Shannon 1949 - perfect secrecy defined" },
                { label: "Standardization", note: "DES 1977 - the first public standard" },
                { label: "Asymmetric", note: "Diffie-Hellman 1976, RSA 1978 - keys without couriers" },
              ],
            },
            callout: {
              type: "tip",
              title: "History as a security lesson",
              body: "The exam-grade reading of history: no cipher died of age alone - each died of an attacker's new resource (statistics, computing, protocol analysis). Use that sentence to close history answers; it converts a timeline into an argument.",
            },
            examQuestions: [
              {
                q: "Trace the history of cryptography through its eras - classical, mechanical, mathematical, standardization and asymmetric - naming the signature systems, what broke them, and the lasting lesson of each era.",
                marks: 14,
                outline: [
                  "Classical: Caesar shift, monoalphabetic substitution, Vigenere",
                  "Broken by frequency analysis and the Kasiski test",
                  "Mechanical: Enigma rotors; broken by key reuse and predictable openings",
                  "Shannon 1949: perfect secrecy, entropy, confusion/diffusion",
                  "DES 1977: the first public standard (Feistel structure)",
                  "Diffie-Hellman 1976 and RSA 1978: key distribution without couriers",
                  "Lessons: statistics defeat structure; protocols fail first; security is provable",
                ],
              },
              {
                q: "Why is the Vigenere cipher called 'le chiffre indéchiffrable' and why is the name wrong?",
                marks: 7,
                outline: [

                  "Repeating key word defeated single-letter frequency analysis for centuries",

                  "Babbage/Kasiski exploited key repetition to recover the period",

                  "Once split into shift streams, each falls to frequency analysis",

                  "Polyalphabetic blurring hid frequencies for three centuries",

                  "The name stuck as a reputation, not a proof",

                ],              },
            ],
          },
          {
            number: "1.2",
            title: "Classical ciphers - shift and monoalphabetic substitution",
            body: [
              "The shift (Caesar) cipher is the smallest encryption scheme: keys are shifts k in {0,...,25}, encryption is C = (P + k) mod 26, decryption is P = (C - k) mod 26. Worked example: 'ATTACK' with k = 3 becomes 'DWWDFN' (A -> D, T -> W, C -> F, K -> N). Its security is nil: the keyspace has 25 usable keys, so exhaustive search ends the story in seconds - the first lesson in key-length thinking, since any cipher with a keyspace small enough to enumerate is dead on arrival.",
              "The monoalphabetic substitution cipher fixes the shift's single-offset weakness by mapping each letter to an arbitrary permutation: a random mapping like A -> Q, B -> D expands the keyspace to 26! (about 2^88), seemingly immune to brute force. It is not: language statistics defeat it. English letter frequencies (E about 12.7%, T, A, O...), digram and trigram patterns, and the structure of short words (single-letter words are A or I) let an attacker reconstruct the mapping from a few hundred ciphertext characters. The keyspace grew; the redundancy of the plaintext did not - and redundancy is what statistics eat.",
              "A worked frequency attack shows the mechanics. Ciphertext 'QXXQVQ' repeats its pattern xQx: guess Q = E (most frequent), note double letters, test vowel patterns against a cribrail ('the', 'and'). Each confirmed guess cascades: solving two high-frequency letters often cracks a third of the alphabet, because the mapping is one-to-one - every occurrence of a plaintext letter encrypts identically. That property is the cipher's defining flaw: substitution hides letters but preserves patterns.",
              "Exam framing: expect 'explain the shift cipher' or 'how is a monoalphabetic cipher broken'. Give both schemes with the modular arithmetic and one worked encryption, the keyspace comparison (25 vs 26!), and the frequency-attack mechanics - closing with the redundancy sentence: big keyspaces do not save ciphers whose ciphertext preserves language patterns. The redundancy sentence converts the keyspace comparison into an argument - patterns leak through one-to-one mappings.",
            ],
            keyTerms: [
              { term: "Shift cipher", definition: "C = (P + k) mod 26 with 25 usable keys - defeated by exhaustive search." },
              { term: "Monoalphabetic substitution", definition: "A fixed letter-per-letter permutation - 26! keys but pattern-preserving." },
              { term: "Frequency analysis", definition: "Attacking substitution by matching ciphertext statistics to language statistics." },
              { term: "Keyspace", definition: "The set of possible keys - small keyspace means brute force wins." },
            ],
            table: {
              caption: "Shift vs monoalphabetic at a glance.",
              headers: ["Property", "Shift cipher", "Monoalphabetic substitution"],
              rows: [
                ["Key", "One offset k", "A full alphabet permutation"],
                ["Keyspace", "25 usable keys", "26! (about 2^88)"],
                ["Attack", "Exhaustive search (seconds)", "Frequency and pattern analysis"],
                ["Preserves", "Everything shifted uniformly", "Letter frequencies and word patterns"],
                ["Security", "None", "None in practice, despite the keyspace"],
              ],
            },
            bullets: [
              "Shift cipher: C = (P + k) mod 26; 'ATTACK' + 3 = 'DWWDFN'.",
              "25 usable keys - exhaustive search is the complete attack.",
              "Monoalphabetic: 26! keyspace, yet broken by frequency statistics.",
              "English frequencies (E, T, A, O) and short-word structure anchor the mapping.",
              "Substitution is one-to-one per letter - patterns survive encryption.",
              "Lesson: redundancy in plaintext defeats ciphers that preserve structure.",
            ],
            diagram: {
              kind: "compare",
              title: "Shift vs substitution",
              caption: "A bigger keyspace does not buy security when patterns leak.",
              left: {
                heading: "Shift cipher",
                items: [
                  "C = (P + k) mod 26",
                  "25 usable keys - brute force in seconds",
                  "Every letter shifted uniformly",
                  "Fails to enumeration",
                ],
              },
              right: {
                heading: "Monoalphabetic substitution",
                items: [
                  "Random letter-to-letter permutation",
                  "26! keys - brute force hopeless",
                  "Frequencies and patterns preserved",
                  "Fails to statistics instead",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "The redundancy sentence",
              body: "The one-line moral that earns the analysis mark: 'the monoalphabetic cipher's keyspace is huge, but plaintext redundancy leaks through a one-to-one mapping - statistics replace brute force.' Every classical-cipher question can end with it.",
            },
            examQuestions: [
              {
                q: "Explain the shift and monoalphabetic substitution ciphers with worked encryptions, compare their keyspaces and attacks, and demonstrate the frequency-analysis mechanics against substitution.",
                marks: 14,
                outline: [
                  "Shift: C = (P + k) mod 26; 'ATTACK' with k=3 -> 'DWWDFN'",
                  "25 usable keys - exhaustive search suffices",
                  "Substitution: fixed permutation, 26! keyspace",
                  "Brute force impossible, but patterns preserved",
                  "Frequency attack: E/T/A/O anchors, digrams, short-word structure",
                  "Worked trace: high-frequency letters cascade into most of the alphabet",
                  "Moral: plaintext redundancy defeats pattern-preserving ciphers",
                ],
              },
              {
                q: "Encrypt 'SECURITY' with the shift cipher key k = 5 and show the decryption step.",
                marks: 7,
                outline: [

                  "C = (P + 5) mod 26 letter by letter",

                  "S->X, E->J, C->H, U->Z, R->W, I->N, T->Y, Y->D",

                  "Ciphertext 'XJHZWNYD'; decryption subtracts 5 mod 26",

                  "Wrap-around applies at Y->D (25 + 5 mod 26)",

                  "Letters are independent - order never affects the mapping",

                ],              },
            ],
          },
          {
            number: "1.3",
            title: "Polyalphabetic substitution - the Vigenere cipher",
            body: [
              "The polyalphabetic idea answers substitution's flaw: use a different shift per letter position, cycling through a keyword. Encryption: C_i = (P_i + K_{i mod m}) mod 26, where m is the keyword length - 'ATTACK' under key 'KEY' (10, 4, 24) becomes letter-by-letter shifts of 10, 4, 24, 10, 4, 24. Now letter frequency blurs: E encrypts differently depending on its position modulo m, so single-letter statistics fail - which is why the cipher held its reputation for three centuries.",
              "The attack has two stages, and both are examinable. Stage one - find the period m: the Kasiski examination looks for repeated ciphertext fragments and measures the gaps between them; gaps that share a common factor expose the keyword length (repetitions at distances 18, 30, 48 point to m = 6). The index of coincidence offers the statistical version: split the ciphertext into m candidate streams and compute the frequency of letter repeats - at the true m, each stream is a pure shift cipher (IC near 0.065 for English); at wrong m, streams look random (IC near 0.038).",
              "Stage two - solve each stream: once the period is known, the ciphertext splits into m independent shift ciphers, and each falls to frequency analysis (shift the stream by each of 26 offsets and score against English frequencies). Worked chain: repeated fragment 'LION' found at gaps 21 and 35 -> common factor 7 -> m = 7 -> seven streams, each frequency-scored -> keyword recovered letter by letter. The cipher that defeated single-letter statistics fell to statistics about its key - the recurring lesson that everything periodic leaks.",
              "Exam framing: expect 'explain the Vigenere cipher and its cryptanalysis'. Give the encryption formula with a worked keyword example, the two-stage attack (Kasiski/index of coincidence for the period, frequency scoring per stream), and close with the periodicity lesson - a repeating key turns one strong blur into many weak shifts. The two-stage attack is the answer's structure - period first, then ordinary shift analysis per stream.",
            ],
            keyTerms: [
              { term: "Vigenere cipher", definition: "C_i = (P_i + K_{i mod m}) mod 26 - a different shift per position, cycling with the keyword." },
              { term: "Kasiski examination", definition: "Repeating ciphertext fragments and their gap factors reveal the key period m." },
              { term: "Index of coincidence", definition: "Repeat-letter statistic: near 0.065 per stream at true period, near 0.038 otherwise." },
              { term: "Key period (m)", definition: "The keyword length - once known, the cipher decomposes into m shift ciphers." },
            ],
            table: {
              caption: "The two-stage Vigenere attack.",
              headers: ["Stage", "Tool", "What it yields"],
              rows: [
                ["Find the period", "Kasiski gaps; index of coincidence", "The keyword length m"],
                ["Split streams", "Positions modulo m", "m independent shift ciphers"],
                ["Solve streams", "Frequency scoring per stream", "The keyword, letter by letter"],
              ],
            },
            bullets: [
              "Encryption: C_i = (P_i + K_{i mod m}) mod 26 - keyword cycles shifts per position.",
              "Frequency blurring defeats single-letter analysis while the period stays hidden.",
              "Kasiski: repeated fragments and gap factors expose m.",
              "Index of coincidence: 0.065-like streams mark the true period vs 0.038 random.",
              "At known m, the cipher is m shift ciphers - each solved by frequency scoring.",
              "Lesson: periodicity leaks - repeating keys turn one blur into many weak ciphers.",
            ],
            diagram: {
              kind: "pipeline",
              title: "Breaking Vigenere",
              caption: "Two stages - the period first, then ordinary shift-cipher analysis per stream.",
              stages: [
                { label: "Collect repeats", note: "Kasiski fragments and their gaps" },
                { label: "Recover period", note: "gap factors; IC scores per candidate m" },
                { label: "Split streams", note: "positions modulo m" },
                { label: "Score shifts", note: "frequency analysis on each stream" },
                { label: "Reassemble key", note: "stream answers spell the keyword" },
              ],
            },
            callout: {
              type: "exam",
              title: "0.065 vs 0.038",
              body: "Two numbers carry the index-of-coincidence marks: English text repeats letters at about IC 0.065; random letters at about 0.038. At the true keyword length, every stream reads like English (0.065); at wrong lengths, random (0.038). Quote both and the test explains itself.",
            },
            examQuestions: [
              {
                q: "Explain the Vigenere cipher with a worked encryption, and describe its complete cryptanalysis - the Kasiski examination and index of coincidence for the period, then per-stream frequency analysis.",
                marks: 14,
                outline: [
                  "Encryption: C_i = (P_i + K_{i mod m}) mod 26 with keyword 'KEY' worked on 'ATTACK'",
                  "Blurring: letter frequency spreads across m shift streams",
                  "Kasiski: repeated fragments; gap factors reveal m",
                  "Index of coincidence: 0.065-like at true m, 0.038-like otherwise",
                  "Split: positions modulo m give m independent shift ciphers",
                  "Solve: 26-offset frequency scoring per stream spells the keyword",
                  "Lesson: periodicity leaks - repeating keys decompose into weak shifts",
                ],
              },
              {
                q: "Why does a longer keyword improve Vigenere's security, and what still defeats it?",
                marks: 7,
                outline: [

                  "Longer m blurs frequencies further and needs more text for Kasiski",

                  "A key as long as the message (with fresh randomness) approaches the OTP",

                  "Repeating keys always leak their period to enough ciphertext",

                  "Kasiski needs more ciphertext to find longer periods",

                  "Index-of-coincidence peaks sharpen only at the true m",

                ],              },
            ],
          },
          {
            number: "1.4",
            title: "Perfect secrecy and the one-time pad",
            body: [
              "Perfect secrecy is Shannon's definition of the strongest possible confidentiality: observing the ciphertext teaches the attacker nothing about the plaintext - formally, Pr[M = m | C = c] = Pr[M = m] for all messages and ciphertexts. The one-time pad achieves it: key K is a uniformly random string as long as the message M, encryption is C = M XOR K (bitwise), decryption XORs the same pad back. Every plaintext of the right length maps to the observed ciphertext under exactly one key, so all candidates are equally likely - the ciphertext carries zero information.",
              "The requirements are as strict as the guarantee, and each has a worked consequence: the key must be truly random (any bias shrinks the candidate set), at least as long as the message (shorter pads repeat - Vigenere returns), and used exactly once (reuse is fatal: C1 XOR C2 = M1 XOR M2 cancels the pad and leaks M1 XOR M2, from which two English texts separate by crib dragging - the Venona decryptions of reused Soviet pads are the historical proof). A worked reuse trace: pads k on both messages gives C1 XOR C2 = M1 XOR M2; aligning 'the ' against known positions decrypts both messages progressively - the pad's only protection was its uniqueness.",
              "The economics complete the section: perfect secrecy costs one secret bit per message bit, generated truly randomly, distributed securely, and burned after one use. For a video call that is gigabytes of pad per hour, couriered in advance - the security is real but the logistics are impossible at scale. That impossibility is the hinge of this subject: it forces the retreat to computational security, where keys are short and the attacker's advantage is bounded by computation rather than information.",
              "Exam framing: expect 'state and explain perfect secrecy' or 'why is the one-time pad impractical'. Give the definition with the equal-likelihood argument, the XOR mechanics with a worked example, the three requirements and the reuse disaster (Venona), and close with the economics-to-computational-security hinge. Equal likelihood is the proof's engine - every message owns some pad mapping it to the same ciphertext.",
            ],
            keyTerms: [
              { term: "Perfect secrecy", definition: "Pr[M = m | C = c] = Pr[M = m] - ciphertext leaks nothing about the message." },
              { term: "One-time pad", definition: "C = M XOR K with K truly random, |K| = |M|, used once - the perfect-secrecy scheme." },
              { term: "Pad reuse", definition: "C1 XOR C2 = M1 XOR M2 - the structural disaster of using a pad twice." },
              { term: "Venona", definition: "Historical decryption of reused Soviet pads - the empirical proof of reuse's cost." },
            ],
            table: {
              caption: "The OTP requirement card.",
              headers: ["Requirement", "Why", "Failure mode"],
              rows: [
                ["Truly random key", "Bias shrinks the candidate set", "Predictable pads are decrypted"],
                ["At least message length", "Short pads repeat - Vigenere returns", "Period recovery, stream analysis"],
                ["Used exactly once", "Reuse cancels the pad", "M1 XOR M2 leaks; crib dragging wins"],
                ["Secure distribution", "The pad is the secret", "Intercepted pads end everything"],
              ],
            },
            bullets: [
              "Perfect secrecy: posterior equals prior - ciphertext is statistically independent of plaintext.",
              "OTP mechanics: C = M XOR K; decryption XORs the identical pad back.",
              "Every message of matching length is equally consistent with any ciphertext.",
              "Reuse: C1 XOR C2 = M1 XOR M2 - the pads cancel; Venona proved it historically.",
              "Cost: one secret random bit per message bit, distributed in advance, burned once.",
              "Impossibility at scale drives the retreat to computational security.",
            ],
            diagram: {
              kind: "compare",
              title: "One-time pad vs reused pad",
              caption: "The same XOR that guarantees secrecy destroys it when the pad repeats.",
              left: {
                heading: "Fresh pad (secure)",
                items: [
                  "K uniform and unique per message",
                  "All plaintexts equally likely given C",
                  "Perfect secrecy holds - zero leakage",
                  "Cost: pad as long as the message",
                ],
              },
              right: {
                heading: "Reused pad (broken)",
                items: [
                  "C1 XOR C2 = M1 XOR M2 - pads cancel",
                  "Language statistics separate the two messages",
                  "Crib dragging decrypts progressively",
                  "Venona: the historical autopsy",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Zero information is the definition",
              body: "The cleanest statement of perfect secrecy: for every ciphertext c and message m, Pr[M = m | C = c] = Pr[M = m] - the posterior equals the prior. Then justify with the equal-likelihood argument (every message has some pad mapping it to c). Definition plus argument is the full 7-mark core.",
            },
            examQuestions: [
              {
                q: "Define perfect secrecy and prove informally that the one-time pad achieves it; state the pad's requirements with the failure mode of each, and work the pad-reuse attack.",
                marks: 14,
                outline: [
                  "Definition: Pr[M = m | C = c] = Pr[M = m] for all m, c",
                  "OTP: C = M XOR K, K uniform, |K| = |M|, used once",
                  "Equal likelihood: for any m', a distinct pad maps m' to the same c",
                  "Requirements: true randomness, message length, single use, secure distribution",
                  "Reuse: C1 XOR C2 = M1 XOR M2 - pads cancel",
                  "Crib dragging separates two English texts; Venona as historical proof",
                  "Economics: gigabytes of pad per hour force computational security",
                ],
              },
              {
                q: "Why must the one-time pad's key be at least as long as the message?",
                marks: 7,
                outline: [

                  "A shorter pad must repeat to cover the message - Vigenere structure returns",

                  "Repetition leaks the period; streams become shift ciphers",

                  "Only message-length pads keep every plaintext equally likely",

                  "Reuse within one message splits it into shift streams",

                  "Equal likelihood is the secrecy proof's requirement",

                ],              },
            ],
          },
          {
            number: "1.5",
            title: "Shared secret randomness versus perfect secrecy - the distribution dilemma",
            body: [
              "Perfect secrecy's price is paid twice: once in randomness (every message bit needs a fresh secret random bit) and once in distribution (the pad must travel to the receiver by a channel as secure as the message itself). This is the implementation dilemma the syllabus names: a cipher that needs a pre-shared secret as large as the total communication cannot scale, because the courier problem it solves for one message is recreated for every pad. Secure a channel with an OTP and you still need a secure channel for the pads - the protection regresses forever.",
              "The dilemma's two exits define modern practice. Exit one: shrink the secret - share a short random seed once, then stretch it deterministically into keystream (pseudo-randomness, Unit II) - sacrificing information-theoretic security for computational security: the keystream is not truly random, but no feasible computation distinguishes it. Exit two: remove the pre-sharing - compute a shared secret over an open channel via public-key key agreement (Diffie-Hellman, Unit IV), where the shared value derives from public messages plus private randomness. TLS uses both exits together: an asymmetric exchange picks a session key; a symmetric cipher stretched from CSPRNG randomness carries the data.",
              "A worked trade-off trace fixes the comparison. Option A - OTP per message: perfect secrecy, pad logistics grow linearly with traffic, unusable beyond diplomatic volumes. Option B - seeded stream cipher: one 256-bit seed secures gigabytes, security rests on the PRG's indistinguishability (computational, not information-theoretic), practical for everything. Option C - DH agreement then Option B: no pre-shared secret at all, security rests additionally on the discrete-log assumption. Each option trades a different currency - key logistics, assumption strength, computation - and the syllabus's phrase 'shared secret randomness vs perfect secrecy' is exactly this table.",
              "Exam framing: expect 'discuss the implementation aspects of perfect secrecy'. State the double cost (randomness and distribution), present the three exits with their trade-offs, and close with the design sentence - modern systems buy perfect-secrecy-like behaviour with short secrets and computational assumptions, because pads cannot ship at scale. TLS assembles both exits - DH agreement picks the key, CSPRNG and AES carry the traffic.",
            ],
            keyTerms: [
              { term: "Key distribution problem", definition: "Pads and keys must reach receivers by a channel as secure as the message - unscaleable." },
              { term: "Computational security", definition: "Security against feasible computation, not against unlimited information." },
              { term: "Seed stretching", definition: "One short random seed expanded by a PRG into long keystream." },
              { term: "Key agreement", definition: "Deriving a shared secret over public channels (Diffie-Hellman) without pre-distribution." },
            ],
            table: {
              caption: "Three exits from the dilemma.",
              headers: ["Option", "Secret logistics", "Security type", "Verdict"],
              rows: [
                ["OTP per message", "Pad = message size, pre-shipped", "Perfect (information-theoretic)", "Unusable at scale"],
                ["Seeded stream cipher", "One short seed, then stretch", "Computational (PRG)", "The workhorse"],
                ["DH agreement + cipher", "No pre-shared secret at all", "Computational (PRG + DLog)", "The internet's choice (TLS)"],
              ],
            },
            bullets: [
              "Perfect secrecy costs randomness (bit per bit) and distribution (courier per pad).",
              "The courier problem regresses: securing pads needs a secure channel too.",
              "Exit one: stretch a short seed - computational security replaces information-theoretic.",
              "Exit two: compute shared secrets in public (Diffie-Hellman) - no pre-distribution.",
              "TLS assembles both: asymmetric agreement picks the key; CSPRNG and AES carry traffic.",
              "The trade table: pad logistics vs assumption strength vs computation.",
            ],
            diagram: {
              kind: "fork",
              title: "Escaping the pad dilemma",
              caption: "Perfect secrecy does not scale - modern cryptography takes one of two exits.",
              start: "Need a shared secret",
              branches: [
                { label: "Ship pads", outcome: "perfect secrecy, logistics grow with traffic - unusable at scale", good: false },
                { label: "Stretch a seed", outcome: "short secret, PRG keystream - computational security (symmetric path)", good: true },
                { label: "Agree in public", outcome: "Diffie-Hellman over open channels - plus the seeded cipher (asymmetric path)", good: true },
              ],
            },
            callout: {
              type: "tip",
              title: "TLS is the exam's worked answer",
              body: "When asked how practice escapes the dilemma, answer with TLS's assembly line: Diffie-Hellman agrees a session key in public, the CSPRNG stretches randomness, AES carries the bulk. One protocol exercising both exits - the most concrete sentence available for this section.",
            },
            examQuestions: [
              {
                q: "Explain the implementation dilemma of perfect secrecy - shared secret randomness versus perfect secrecy - and describe the three exits (pads, seeded stream ciphers, Diffie-Hellman agreement) with their trade-offs.",
                marks: 14,
                outline: [
                  "Double cost: fresh random bit per message bit; secure distribution of pads",
                  "Courier regression: protecting pads needs a secure channel too",
                  "Exit one: short seed stretched by a PRG - computational security",
                  "Exit two: public key agreement (DH) removes pre-distribution",
                  "TLS assembles both exits: DH session key + CSPRNG + AES",
                  "Trade table: pad logistics vs assumption strength vs computation",
                  "Conclusion: pads cannot ship at scale; assumptions buy scale",
                ],
              },
              {
                q: "What security is lost when a truly random pad is replaced by a PRG keystream?",
                marks: 7,
                outline: [

                  "Information-theoretic secrecy - a boundless attacker could distinguish",

                  "Keystream is deterministic from the seed; only feasibility protects it",

                  "Computational security: advantage negligible for feasible adversaries",

                  "A boundless adversary could distinguish with enough data",

                  "Feasibility, not information, is the only protection",

                ],              },
            ],
          },
          {
            number: "1.6",
            title: "Probability and complexity - the background modern crypto assumes",
            body: [
              "Modern cryptography's definitions are probabilistic, and the background is specific. Probability: adversaries and schemes are randomized (PPT - probabilistic polynomial-time); security experiments compare distributions; advantage is a difference of probabilities (Adv = |Pr[win real] - Pr[win random]|); and the birthday bound explains collision surprises - among n random draws from N values, a collision is likely near n = sqrt(N), the fact behind 64-bit block ciphers' 2^32 limits (Unit III) and hash output sizing.",
              "Complexity: feasible means polynomial-time (class P, and randomized BPP for coins); cryptography lives in the assumed gap between easy and hard - problems believed hard (factoring, discrete log) sit outside feasible time, and negligible functions formalize 'vanishingly small': negl(n) shrinks faster than every inverse polynomial, so 'secure' means advantage is negligible in the security parameter n. The security parameter is the dial: keys of 128, 256 bits set n, and every guarantee degrades gracefully as negl(n).",
              "A worked read makes the vocabulary operational. An encryption scheme is IND-CPA secure if every PPT adversary's advantage in distinguishing real from random encryptions is negligible in n: 'every efficient adversary, every strategy, advantage below negl(n)'. Doubling n multiplies exhaustive-search cost exponentially while legitimate cost grows polynomially - the asymmetry that makes keys of a few hundred bits protect terabytes. And the birthday arithmetic example: a 64-bit block cipher is safe for about 2^32 blocks per key (sqrt(2^64)), a one-line computation that justifies AES's 128-bit block.",
              "Exam framing: expect 'explain the computational view of security' or 'define negligible function and advantage'. Give the PPT adversary model, the advantage definition, negligible functions and the security parameter, and run the birthday computation - closing with the asymmetry sentence: polynomial defence cost, exponential attack cost. The birthday computation is the fastest numerical mark - 64-bit blocks collide near 2^32 blocks per key.",
            ],
            keyTerms: [
              { term: "PPT adversary", definition: "Probabilistic polynomial-time - the efficient attacker all definitions quantify over." },
              { term: "Advantage", definition: "|Pr[win | real] - Pr[win | random]| - the measurable edge of an attack." },
              { term: "Negligible function", definition: "negl(n) shrinks faster than 1/poly(n); 'secure' means advantage is negl(n)." },
              { term: "Birthday bound", definition: "Collisions likely near sqrt(N) draws from N values - the 2^(n/2) rule." },
            ],
            table: {
              caption: "Complexity vocabulary in one table.",
              headers: ["Term", "Meaning", "Where it bites"],
              rows: [
                ["P / BPP", "Feasible (deterministic / randomized) time", "Defines the attacker's budget"],
                ["Security parameter n", "Key size dial (128, 256 ...)", "Every guarantee scales with n"],
                ["negl(n)", "Vanishing faster than 1/poly", "The 'secure' threshold"],
                ["Birthday bound", "sqrt(N) collisions among N values", "Block size and hash output sizing"],
              ],
            },
            bullets: [
              "Adversaries are PPT: efficient, randomized, polynomial-time - no other assumptions.",
              "Advantage measures attack success over the random-experiment baseline.",
              "Negligible functions: advantage below negl(n) defines 'secure' at parameter n.",
              "Birthday bound: collisions near sqrt(N) - 2^(n/2) is the recurring estimate.",
              "64-bit blocks cap safe use near 2^32 blocks per key; 128-bit blocks lift it to 2^64.",
              "Asymmetry: legitimate work grows polynomially in n, exhaustive attack exponentially.",
            ],
            diagram: {
              kind: "layers",
              title: "The complexity stack",
              caption: "From intractable assumptions down to the feasible budget attackers actually have.",
              layers: [
                { label: "Assumed hard", note: "factoring, discrete log - super-polynomial time" },
                { label: "Security parameter", note: "n = key size sets where hardness lands" },
                { label: "Negligible advantage", note: "negl(n) - the 'secure' threshold" },
                { label: "Feasible (P/BPP)", note: "the attacker's polynomial-time budget" },
              ],
            },
            callout: {
              type: "exam",
              title: "Compute one birthday bound",
              body: "The fastest numerical mark in the unit: a 64-bit block cipher collides after about 2^32 blocks per key (Sweet32's premise), while AES's 128-bit block pushes it to 2^64. One line of sqrt arithmetic, quoted wherever block or hash sizes are discussed.",
            },
            examQuestions: [
              {
                q: "Explain the probability and complexity background of modern cryptography: the PPT adversary model, advantage, negligible functions, the security parameter, and the birthday bound with a worked computation.",
                marks: 14,
                outline: [
                  "PPT: efficient randomized adversaries - the model all definitions quantify",
                  "Advantage: difference of win probabilities over the random baseline",
                  "Negligible: negl(n) below every inverse polynomial - the 'secure' threshold",
                  "Security parameter: key size dials every guarantee",
                  "Birthday bound: collisions near sqrt(N) draws",
                  "Worked: 64-bit block -> 2^32 blocks per key; AES-128 block -> 2^64",
                  "Asymmetry: defence polynomial in n, exhaustive attack exponential",
                ],
              },
              {
                q: "What does it mean for a scheme to be 'secure up to negligible advantage'?",
                marks: 7,
                outline: [

                  "Every PPT adversary's advantage is bounded by negl(n)",

                  "Growing n shrinks the bound faster than any polynomial",

                  "Security is quantitative, not absolute",

                  "Concrete-security variants track actual advantage sizes",

                  "The bound covers all strategies, not just known attacks",

                ],              },
            ],
          },
          {
            number: "1.7",
            title: "Modern principles - one-way functions, trapdoors and hard-core bits",
            body: [
              "Modern cryptography rests on three primitive ideas, each a definition of difficulty. A one-way function f is easy to compute and hard to invert: given f(x), finding any x' with f(x') = f(x) is infeasible. Candidates: multiplying primes (factoring is the inversion), modular exponentiation (discrete log inverts it), and hash functions. One-wayness is the field's minimum assumption - existence of one-way functions is equivalent to most of private-key cryptography's existence.",
              "A trapdoor function is a one-way function with a secret shortcut: f(x) is computable by anyone, inverting is infeasible for everyone except the trapdoor holder. RSA is the canonical instance - n = pq easy to compute, e-th root infeasible without the factorization; the trapdoor is d. The construction pattern generalizes: a hard problem supplies the one-way direction; a secret derived from the problem's hidden structure supplies the trapdoor. Trapdoors are what make asymmetric crypto possible: the same public value encrypts, only the key holder decrypts.",
              "Hard-core bits answer the sharpest question: if f is hard to invert, does it leak anything usable? A predicate h(x) is hard-core for f if, given f(x), no efficient adversary predicts h(x) better than chance. Goldreich-Levin: from any one-way function one can construct a hard-core predicate (the inner product of x with a random r). The construction payoff - the syllabus's 'public-key cryptosystem from general primitives': one-wayness gives unpredictability, hard-core bits give pseudo-randomness from hardness, and Yao's construction assembles a PRG from any one-way function - which Unit II's symmetric schemes then consume. The ladder: hardness -> hard-core -> pseudo-randomness -> encryption.",
              "Exam framing: expect 'define one-way and trapdoor functions' or 'what are hard-core bits'. Give all three definitions with candidates (factoring, d-log, RSA as the trapdoor instance), state Goldreich-Levin, and close with the ladder - hardness to hard-core bits to pseudo-randomness to cryptosystems. RSA's two-line identity is the trapdoor worked example - forward easy, inverse needs the factorization. The construction ladder is the closing sentence - hardness to hard-core bits to pseudo-randomness to cryptosystems.",
            ],
            keyTerms: [
              { term: "One-way function", definition: "Easy to compute, infeasible to invert - the field's minimal assumption." },
              { term: "Trapdoor function", definition: "One-way with a secret shortcut that makes inversion feasible for the holder." },
              { term: "Hard-core predicate", definition: "A bit of x unpredictable from f(x) beyond chance (Goldreich-Levin)." },
              { term: "Goldreich-Levin theorem", definition: "Every one-way function yields a hard-core predicate via inner products with random r." },
            ],
            table: {
              caption: "The primitive cards.",
              headers: ["Primitive", "Definition", "Canonical instance"],
              rows: [
                ["One-way function", "Compute easy, invert infeasible", "x^e mod n (inversion = RSA problem)"],
                ["Trapdoor function", "One-way + secret inversion shortcut", "RSA: d from (p, q)"],
                ["Hard-core predicate", "Bit of x hidden given f(x)", "Goldreich-Levin inner product"],
                ["PRG from hardness", "Stretch a short seed indistinguishably", "Yao's construction from OWF"],
              ],
            },
            bullets: [
              "One-way: computing easy, inverting infeasible - factoring and d-log are the candidates.",
              "Trapdoor: the same function, invertible only with the secret (RSA's d from p, q).",
              "Hard-core bits: even given f(x), some bit of x stays unpredictable (Goldreich-Levin).",
              "Ladder: one-wayness -> hard-core predicate -> PRG (Yao) -> symmetric schemes.",
              "Public-key construction pattern: hard problem for the one-way side, secret for the trapdoor.",
              "The minimal assumption: existence of one-way functions underlies most of crypto.",
            ],
            diagram: {
              kind: "flow",
              title: "From hardness to encryption",
              caption: "The construction ladder this subject climbs for three units.",
              steps: [
                { label: "Hard problem", note: "factoring, discrete log" },
                { label: "One-way function", note: "easy forward, infeasible inverse" },
                { label: "Hard-core bits", note: "Goldreich-Levin: a hidden, unpredictable bit" },
                { label: "PRG / PRF", note: "pseudo-randomness stretched from seeds" },
                { label: "Cryptosystems", note: "symmetric (Unit II-III) and public-key (Unit IV)" },
              ],
            },
            callout: {
              type: "exam",
              title: "RSA is the trapdoor worked example",
              body: "Keep RSA's two-line identity ready: forward e-th power mod n is public and easy; inverse (e-th root) requires the factorization, and d - derived from p and q - is the trapdoor. Every 'trapdoor function' question can be answered concretely with those two sentences.",
            },
            examQuestions: [
              {
                q: "Define one-way functions, trapdoor functions and hard-core bits with canonical instances, state Goldreich-Levin's contribution, and explain how a public-key cryptosystem is constructed from general cryptographic primitives.",
                marks: 14,
                outline: [
                  "One-way: easy compute, infeasible invert - factoring, discrete log candidates",
                  "Trapdoor: secret shortcut enables inversion - RSA's d from (p, q)",
                  "Hard-core predicate: bit unpredictable from f(x) beyond chance",
                  "Goldreich-Levin: inner product with random r is hard-core for any OWF",
                  "Ladder: OWF -> hard-core bits -> PRG (Yao) -> encryption schemes",
                  "Public-key pattern: hard problem + hidden-structure secret = trapdoor pair",
                  "Efficiency vs hardness: bigger parameters, slower ops, stronger assumptions",
                ],
              },
              {
                q: "Why are hard-core bits necessary for building pseudo-randomness from one-way functions?",
                marks: 7,
                outline: [

                  "f(x) itself may leak parts of x - one-wayness alone hides nothing specific",

                  "A hard-core predicate is provably unpredictable from f(x)",

                  "Iterated hidden bits stretch x into a pseudo-random sequence",

                  "One-wayness alone guarantees no extractable structure",

                  "Goldreich-Levin supplies the guaranteed hidden bit",

                ],              },
            ],
          },
          {
            number: "1.8",
            title: "Building a public-key cryptosystem - and the efficiency-hardness trade",
            body: [
              "Assembling the unit: a public-key cryptosystem is a triple (Gen, Enc, Dec) where Gen produces a public/private key pair from the hardness assumption, Enc uses the public key (anyone encrypts), and Dec uses the private key (the trapdoor inverts). The general-primitive recipe from 1.7: pick a trapdoor one-way function; the public key parameterizes forward evaluation, the private key carries the trapdoor; encryption masks the message inside the forward image, decryption applies the shortcut. RSA instantiates it with factoring; ElGamal (Unit IV) instantiates it with discrete logs - one recipe, two hardness assumptions.",
              "The implementation aspect the syllabus names is the efficiency-versus-hardness trade, and it prices every design choice. Bigger keys buy hardness: RSA-2048 costs about 2^112 operations to factor, RSA-4096 raises the bar but multiplies key generation and encryption time (private-key operations are the slow ones - modular exponentiation with 4096-bit moduli). Harder assumptions buy confidence but often cost speed (lattice schemes post-quantum are heavier than RSA). And asymmetric operations are so much slower than symmetric ones that practice hybridizes: public-key crypto ferries a session key once, symmetric crypto carries all the data - the speed layer structure this syllabus repeats from Unit I to Unit IV.",
              "A worked cost trace prices the trade. One RSA-2048 encryption: milliseconds; one AES-128 block: nanoseconds - four orders of magnitude. Encrypting a 1 GB file in raw RSA would take days and produce a kilobyte-per-block explosion; hybrid encryption encrypts the file with AES and ships one RSA-wrapped key. The conclusion every exam answer should reach: public-key primitives solve distribution, not bulk - hardness is bought in small, expensive packets, and efficiency is restored by layering.",
              "Exam framing: expect 'explain the construction of a public-key cryptosystem from general primitives' or 'discuss efficiency vs hardness'. Give the (Gen, Enc, Dec) recipe over a trapdoor function, run the RSA and ElGamal instantiations, price the trade with the 1 GB hybrid trace, and close with the layering sentence. The 1 GB hybrid trace prices the trade - raw RSA takes days, one wrapped key takes seconds.",
            ],
            keyTerms: [
              { term: "(Gen, Enc, Dec)", definition: "The public-key triple: key generation, public encryption, trapdoor decryption." },
              { term: "Efficiency-hardness trade", definition: "Bigger keys and harder assumptions buy security at computational cost." },
              { term: "Hybrid encryption", definition: "Public-key wraps a session key; symmetric crypto carries the bulk data." },
              { term: "Private-key operation cost", definition: "Modular exponentiation with the private exponent - the slow side of RSA." },
            ],
            table: {
              caption: "Pricing the trade.",
              headers: ["Choice", "Security bought", "Cost paid"],
              rows: [
                ["RSA-1024 -> 2048", "80-bit -> 112-bit factoring bar", "Keygen and decryption several times slower"],
                ["RSA-2048 -> 4096", "Higher factoring margin", "Private ops an order slower, bigger ciphertexts"],
                ["RSA -> ECC (Unit IV)", "Same security, smaller keys", "Newer assumption base"],
                ["Raw -> hybrid RSA", "Bulk encryption feasible", "One extra key-wrapping step"],
              ],
            },
            bullets: [
              "Recipe: (Gen, Enc, Dec) over a trapdoor one-way function; public = forward, private = shortcut.",
              "RSA instantiates with factoring; ElGamal with discrete log - one recipe, two assumptions.",
              "Bigger keys buy hardness: RSA-2048 about 2^112 attack cost; 4096 raises both bar and bill.",
              "Private-key operations (exponentiation) are the slow side of asymmetric crypto.",
              "Worked trace: raw RSA on 1 GB is days; hybrid does it in seconds.",
              "Layering sentence: public key solves distribution; symmetric solves bulk.",
            ],
            diagram: {
              kind: "compare",
              title: "Public-key vs symmetric economics",
              caption: "Why every real system is a hybrid - and what each layer is for.",
              left: {
                heading: "Public-key layer",
                items: [
                  "Solves key distribution - no pre-shared secret",
                  "Slow: exponentiations, large parameters",
                  "Bought in small packets: one wrapped key",
                  "Hardness priced per bit of key",
                ],
              },
              right: {
                heading: "Symmetric layer",
                items: [
                  "Needs the distributed key - but flies",
                  "Fast: nanoseconds per block",
                  "Carries all the bulk data",
                  "Security from 128+ bit keys and modes",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "Never encrypt bulk with RSA",
              body: "Raw RSA on large data is wrong twice: it is thousands of times slower than AES, and textbook RSA is deterministic (identical plaintexts encrypt identically). The correct pattern - hybrid encryption with padding (Unit IV) - is the exam answer whenever 'encrypt a file with RSA' appears.",
            },
            examQuestions: [
              {
                q: "Explain how a public-key cryptosystem is constructed from general cryptographic primitives - the (Gen, Enc, Dec) recipe over trapdoor functions - and discuss the efficiency-versus-hardness trade with a worked hybrid-encryption cost trace.",
                marks: 14,
                outline: [
                  "Triple (Gen, Enc, Dec): public key parameterizes forward evaluation",
                  "Private key carries the trapdoor from the hidden structure",
                  "RSA instantiates with factoring; ElGamal with discrete log",
                  "Bigger keys buy hardness: 2048 -> 4096 raises bar and cost together",
                  "Private-key exponentiation is the slow side; public-side verification cheaper",
                  "Cost trace: raw RSA on 1 GB is days; AES + one wrapped key is seconds",
                  "Layering: public key solves distribution, symmetric solves bulk",
                ],
              },
              {
                q: "Why are private-key operations in RSA slower than public-key ones?",
                marks: 7,
                outline: [

                  "Decryption uses the full-size private exponent d",

                  "Encryption uses small e (65537) - far fewer multiplications",

                  "CRT speedups help, but d-sized exponentiation still dominates",

                  "Windowing precomputation trades memory for multiplies",

                  "Blinding adds cost for side-channel safety",

                ],              },
            ],
          },
        ],
      },
    },
    {
      number: 2,
      roman: "II",
      title: "Number Theory, Pseudo-Randomness and Symmetric Security",
      summary:
        "Unit II supplies the mathematics and the proofs: algorithmic number theory and the cryptographic assumptions with proofs by reduction, the factoring-family candidates and the public-key constructions they yield, a brief look at quantum computing, large-integer arithmetic in implementations, pseudo-random generators, functions and permutations, symmetric encryption's security notions with schemes and proofs from pseudo-random primitives, and the generation and testing of randomness.",
      chapter: {
        number: "02",
        title: "Assumptions, Reductions and Randomness",
        intro:
          "Unit II covers algorithmic number theory, cryptographic assumptions and reductions, number-theory candidates for cryptographic primitives such as factoring, public-key cryptosystems from number theory, a brief discussion of quantum computing, large-integer arithmetic, randomness and pseudo-randomness with pseudo-random generators, functions and permutations, symmetric encryption security notions with schemes and security proofs based on pseudo-random primitives, and generating and testing randomness.",
        inOneBreath:
          "Modular arithmetic, Euclid's gcd, Fermat and Euler supply the toolbox; assumptions (factoring, discrete log) supply the hardness; proofs by reduction convert 'breaking the scheme' into 'solving the assumption'. PRGs stretch seeds into PRFs and PRPs, symmetric encryption is proven secure from those primitives (IND-CPA/IND-CCA), and everything rests on randomness that must be generated and health-tested - because a predictable seed breaks every proof at once.",
        sections: [
          {
            number: "2.1",
            title: "Algorithmic number theory - the toolbox",
            body: [
              "The toolbox has five named instruments. Modular arithmetic: a mod n is the remainder; addition and multiplication stay consistent mod n (the ring Z_n); and x^(p-1) behavior leads directly into Fermat. GCD and Euclid: gcd(a, b) via repeated remainders runs in logarithmic time, and its extension (Bezout coefficients) computes modular inverses - d = e^(-1) mod phi(n) in RSA key generation is an extended-Euclid computation. Fermat's little theorem: a^(p-1) = 1 (mod p) for prime p and non-multiple a - the base of primality tests.",
              "Euler generalizes: a^phi(n) = 1 (mod n) when gcd(a, n) = 1, with phi(n) = (p-1)(q-1) for n = pq - the identity that makes RSA decryption d = e^(-1) mod phi(n) work (m^(ed) = m^(1 + k·phi(n)) = m mod n). The Chinese Remainder Theorem: a value mod n = pq decomposes uniquely into its residues mod p and mod q - and reconstructs from them - which is both the CRT speedup in RSA decryption (Unit 2.5) and the reason factoring n splits cleanly once p is known. Primality testing (Miller-Rabin): randomized checks that a composite would pass with probability at most 4^(-k) after k rounds - generating the primes every scheme needs.",
              "A worked computation chain fixes the mechanics. RSA-flavoured: pick p = 11, q = 13, n = 143, phi = 120; e = 7 coprime to phi; extended Euclid yields d = 103 (7·103 = 721 = 6·120 + 1); encryption of m = 9 is 9^7 mod 143 = 48; decryption 48^103 mod 143 = 9. Each step names its instrument - phi from Euler, d from extended Euclid, modular exponentiation from square-and-multiply - and the chain is the standard exam illustration.",
              "Exam framing: expect 'explain the number theory behind RSA' or 'state and apply Euler's theorem'. Give the five instruments (mod arithmetic, Euclid/inverses, Fermat, Euler, CRT, Miller-Rabin), run the p = 11, q = 13 chain, and close with the role sentence: each instrument exists to make one step of key generation or encryption feasible. The p = 11, q = 13 chain exercises Euler, Euclid and square-and-multiply in four lines - memorize it.",
            ],
            keyTerms: [
              { term: "Extended Euclid", definition: "Computes gcd(a,b) and Bezout coefficients - the modular inverse machine." },
              { term: "Euler's theorem", definition: "a^phi(n) = 1 (mod n) for gcd(a,n)=1; phi(pq) = (p-1)(q-1)." },
              { term: "CRT", definition: "Values mod n = pq correspond uniquely to residue pairs mod p and mod q." },
              { term: "Miller-Rabin", definition: "Randomized primality test - composites pass k rounds with probability at most 4^(-k)." },
            ],
            table: {
              caption: "The five instruments and their roles.",
              headers: ["Instrument", "Statement / role", "Where it bites"],
              rows: [
                ["Modular arithmetic", "Consistent + and x mod n", "Every computation lives here"],
                ["Extended Euclid", "gcd + Bezout -> modular inverse", "RSA key generation: d from e, phi"],
                ["Fermat", "a^(p-1) = 1 mod p", "Primality testing base"],
                ["Euler", "a^phi(n) = 1 mod n", "Why RSA decryption recovers m"],
                ["CRT", "n = pq <-> (mod p, mod q)", "Decryption speedups; factoring structure"],
              ],
            },
            bullets: [
              "Modular arithmetic is the arena: all public-key math is mod n.",
              "Extended Euclid computes inverses - RSA's d = e^(-1) mod phi(n).",
              "Fermat and Euler are the two exponent identities that make powers cycle.",
              "phi(pq) = (p-1)(q-1) ties RSA's exponents to the factorization.",
              "CRT splits computations mod p and q - the decryption speedup.",
              "Miller-Rabin generates the primes: composites pass k rounds with prob <= 4^(-k).",
            ],
            diagram: {
              kind: "flow",
              title: "Square-and-multiply",
              caption: "Modular exponentiation in log(exponent) multiplications - the primitive every scheme calls.",
              steps: [
                { label: "Write exponent in binary", note: "e = 1011011..." },
                { label: "Scan bits", note: "MSB to LSB" },
                { label: "Square each step", note: "x = x^2 mod n" },
                { label: "Multiply on 1-bits", note: "x = x·m mod n" },
                { label: "Result", note: "m^e mod n in O(log e) multiplications" },
              ],
            },
            callout: {
              type: "exam",
              title: "One chain, five marks",
              body: "The p = 11, q = 13, e = 7 chain (phi = 120, d = 103, encrypt 9 -> 48 -> 9) exercises Euler, extended Euclid and modular exponentiation in four lines. Keep the numbers memorized - 'apply the number theory' questions are usually this exact size.",
            },
            examQuestions: [
              {
                q: "Explain the algorithmic number theory toolbox - modular arithmetic, extended Euclid, Fermat, Euler and CRT - and work a complete small-RSA computation chain using them.",
                marks: 14,
                outline: [
                  "Modular arithmetic: the arena for all public-key computation",
                  "Extended Euclid: gcd plus Bezout gives modular inverses",
                  "Fermat: a^(p-1) = 1 mod p; Miller-Rabin builds on it for primality",
                  "Euler: a^phi(n) = 1; phi(pq) = (p-1)(q-1)",
                  "CRT: residue pairs mod p, q reconstruct mod n; basis of speedups",
                  "Chain: p=11, q=13, n=143, phi=120, e=7, d=103",
                  "Encrypt m=9: 9^7 mod 143 = 48; decrypt 48^103 mod 143 = 9",
                ],
              },
              {
                q: "How does the extended Euclidean algorithm produce RSA's private exponent?",
                marks: 7,
                outline: [

                  "d satisfies e·d = 1 (mod phi(n)) - a modular inverse",

                  "Bezout: gcd(e, phi) = 1 gives coefficients x, y with e·x + phi·y = 1",

                  "x mod phi is the required d",

                  "Coprimality of e and phi guarantees the inverse exists",

                  "The same run yields the gcd check for free",

                ],              },
            ],
          },
          {
            number: "2.2",
            title: "Cryptographic assumptions and proofs by reduction",
            body: [
              "A cryptographic assumption is a formal statement that a problem is hard for efficient adversaries: factoring (recover p, q from n = pq), RSA (compute e-th roots mod n), discrete log (find x from g^x mod p). Assumptions are the ground floor of modern cryptography because unconditional proofs are unavailable - P vs NP remains open, so security is always conditional: 'secure if the assumption holds'. Good assumptions are old (decades of attack attempts), simple to state, and well-studied - which is why the syllabus's candidates list names factoring and related problems first.",
              "The proof technique is reduction: to prove scheme S secure under assumption A, show that any efficient adversary breaking S yields an efficient algorithm solving A. The reduction is a wrapper: it receives an A-instance, feeds it into the adversary as if it were a real scheme interaction, collects the adversary's success, and converts it into the A-solution - contradiction with A's hardness. Formally: if Adv_S(t) is non-negligible, then Adv_A(t') is non-negligible for t' only polynomially larger than t; contrapositive: if A holds, S holds. The concrete loss factor between t and t' is the tightness - loose reductions mean larger practical parameters.",
              "A worked reduction trace fixes the shape. Claim: ElGamal encryption is IND-CPA secure assuming DDH (decisional Diffie-Hellman). Wrapper: given a DDH challenge (g, g^a, g^b, T) where T is either g^(ab) or random, embed it as the ElGamal public key and challenge ciphertext; the adversary's choice of which message was encrypted reveals whether T = g^(ab) - solving DDH with the adversary's own advantage. Adversary wins the IND-CPA game with non-negligible advantage implies DDH is solvable - contradiction. One wrapper, one contradiction: that paragraph structure is the exam's proof-writing template.",
              "Exam framing: expect 'explain proofs by reduction' or 'state the standard assumptions'. Define assumption quality criteria, give the reduction wrapper pattern with the DDH/ElGamal trace, and close with the conditional sentence - all modern security is conditional on assumptions, and reductions are how schemes inherit it. The contrapositive sentence is the proof - break the scheme, solve the assumption, contradict hardness.",
            ],
            keyTerms: [
              { term: "Cryptographic assumption", definition: "A formal hardness claim (factoring, RSA, discrete log) underlying all modern security." },
              { term: "Proof by reduction", definition: "Breaking the scheme yields an algorithm for the assumption - contradiction with hardness." },
              { term: "DDH", definition: "Decisional Diffie-Hellman: g^(ab) indistinguishable from random given g, g^a, g^b." },
              { term: "Tightness", definition: "The efficiency loss between adversary time and reduced-solver time." },
            ],
            table: {
              caption: "The assumption cards.",
              headers: ["Assumption", "Problem", "Schemes resting on it"],
              rows: [
                ["Factoring", "Recover p, q from n = pq", "RSA, Rabin"],
                ["RSA assumption", "e-th roots mod n without factors", "RSA variants"],
                ["Discrete log", "x from g^x mod p", "ElGamal, DH, Schnorr"],
                ["DDH", "Distinguish g^(ab) from random", "ElGamal IND-CPA proofs"],
              ],
            },
            bullets: [
              "Security is conditional: 'secure if assumption A holds' - unconditional proofs do not exist.",
              "Good assumptions: old, simply stated, heavily attacked (factoring, discrete log).",
              "Reduction: adversary break -> efficient assumption solver -> contradiction.",
              "The wrapper embeds the challenge instance inside a simulated scheme interaction.",
              "Tightness matters: loose reductions force larger practical parameters.",
              "ElGamal IND-CPA <- DDH is the worked template to memorize.",
            ],
            diagram: {
              kind: "pipeline",
              title: "The reduction wrapper",
              caption: "Four moves turn an adversary's break into an assumption's contradiction.",
              stages: [
                { label: "Receive challenge", note: "an instance of assumption A" },
                { label: "Simulate", note: "feed it to the adversary as a real scheme" },
                { label: "Harvest", note: "adversary's success -> A's solution" },
                { label: "Contradict", note: "A was hard - so S is secure" },
              ],
            },
            callout: {
              type: "exam",
              title: "Contrapositive is the sentence",
              body: "Proof answers should end with the contrapositive spoken aloud: 'if any efficient adversary breaks the scheme with non-negligible advantage, it solves the assumption - contradicting hardness; hence the scheme is secure.' It is one sentence, and it is the proof.",
            },
            examQuestions: [
              {
                q: "Explain cryptographic assumptions and proofs by reduction: assumption quality criteria, the reduction wrapper pattern, a worked DDH-to-ElGamal trace, and the role of tightness.",
                marks: 14,
                outline: [
                  "Assumptions: formal hardness claims - factoring, RSA, discrete log, DDH",
                  "Security is conditional: secure if the assumption holds",
                  "Reduction: adversary break converts into assumption solver",
                  "Wrapper: embed challenge instance, simulate interaction, harvest success",
                  "ElGamal/DDH trace: adversary's message choice solves the DDH challenge",
                  "Contrapositive closes the proof: hardness assumed, scheme secure",
                  "Tightness: polynomial loss between adversary time and solver time",
                ],
              },
              {
                q: "Why is a proof by reduction weaker than an unconditional proof?",
                marks: 7,
                outline: [

                  "Security holds only while the assumption holds",

                  "Algorithmic progress (quantum, new factoring) can collapse the base",

                  "The proof transfers hardness, it does not establish it",

                  "Assumptions are empirical, not proven - factoring could fall",

                  "Tight reductions preserve the strength transferred",

                ],              },
            ],
          },
          {
            number: "2.3",
            title: "Number-theory candidates and public-key constructions from them",
            body: [
              "The syllabus's candidate list is the factoring family: integer factorization (recover p, q from n) and its relatives - the RSA problem (e-th roots mod composite n), the quadratic residuosity problem (deciding square-ness mod n without factors, behind Goldwasser-Micali), and Rabin's function (squaring mod n, equivalent in hardness to factoring itself). Each candidate supplies a one-way or trapdoor primitive: factoring -> RSA's trapdoor; residuosity -> probabilistic encryption of single bits. Choosing an assumption is choosing the whole scheme's security floor.",
              "The public-key constructions follow directly. RSA card: Gen picks primes p, q, n = pq, phi = (p-1)(q-1), e coprime to phi, d = e^(-1) mod phi; public key (n, e), private key d; encryption c = m^e mod n, decryption m = c^d mod n - correctness by Euler (m^(ed) = m^(1+k·phi) = m mod n). Rabin: c = m^2 mod n, decryption needs the factors (four square roots exist mod n = pq) - equivalent in hardness to factoring, which makes it a cleaner academic construction. Both show the Unit I recipe concretized: hidden structure (the factors) is the trapdoor, the public function is the one-way face.",
              "A worked candidate comparison fixes the selection logic. Factoring-based schemes are mature and fast to verify but quantum-broken (Shor, next section); residuosity-based Goldwasser-Micali encrypts one bit at heavy size cost (each bit becomes a ~2048-bit value) - pedagogically perfect, practically extinct; Rabin gives provable equivalence to factoring but four-root ambiguity needs disambiguation logic. The selection lesson: assumption strength, operation cost and ciphertext size price every candidate - the same trade table Unit I opened.",
              "Exam framing: expect 'describe factoring-based candidates and the public-key systems they yield'. Give the candidate list with their primitives, produce the RSA card with the Euler correctness argument, add Rabin and Goldwasser-Micali notes, and close with the selection trade - hardness, speed, size. Euler closes RSA's correctness loop - ed = 1 + k·phi makes m^(ed) collapse to m mod n.",
            ],
            keyTerms: [
              { term: "Factoring", definition: "Recovering p, q from n = pq - the family's root assumption." },
              { term: "RSA problem", definition: "Computing e-th roots mod n without the factorization." },
              { term: "Quadratic residuosity", definition: "Deciding square-ness mod n = pq without knowing p, q - Goldwasser-Micali's base." },
              { term: "Rabin function", definition: "x^2 mod n - computationally equivalent to factoring." },
            ],
            table: {
              caption: "The RSA construction card.",
              headers: ["Step", "Computation", "Instrument used"],
              rows: [
                ["Keygen", "p, q primes; n = pq; phi = (p-1)(q-1)", "Miller-Rabin"],
                ["Exponents", "e coprime to phi; d = e^(-1) mod phi", "Extended Euclid"],
                ["Encrypt", "c = m^e mod n", "Square-and-multiply"],
                ["Decrypt", "m = c^d mod n", "Euler's theorem correctness"],
              ],
            },
            bullets: [
              "Candidates: factoring, RSA problem, quadratic residuosity, Rabin squaring.",
              "Factoring is the root: RSA and Rabin collapse to it if factors leak.",
              "RSA card: n, phi, e, d; c = m^e; m = c^d - correctness via Euler.",
              "Rabin: provably as hard as factoring; four square roots need disambiguation.",
              "Goldwasser-Micali: residuosity encrypts one bit at heavy size cost.",
              "Selection trades: assumption strength vs operation cost vs ciphertext size.",
            ],
            diagram: {
              kind: "fork",
              title: "Choosing a number-theoretic assumption",
              caption: "Each branch prices a different currency - hardness, speed, or size.",
              start: "Pick the primitive",
              branches: [
                { label: "Factoring family", outcome: "RSA, Rabin - mature, fast, quantum-vulnerable (Shor)", good: true },
                { label: "Residuosity", outcome: "Goldwasser-Micali - provably clean, one bit per huge ciphertext", good: false },
                { label: "Rabin equivalence", outcome: "hardness provably factoring - four-root ambiguity to manage", good: true },
              ],
            },
            callout: {
              type: "exam",
              title: "Euler closes the correctness loop",
              body: "The one-argument proof that RSA works: since ed = 1 + k·phi(n), m^(ed) = m · (m^phi)^k = m · 1^k = m (mod n). Write that identity whenever RSA correctness is asked - it is Euler's theorem earning the scheme, and it takes two lines.",
            },
            examQuestions: [
              {
                q: "Describe the number-theory candidates for cryptographic primitives - factoring and related problems - and the public-key cryptosystems they yield: the full RSA card with the Euler correctness argument, plus Rabin and Goldwasser-Micali notes.",
                marks: 14,
                outline: [
                  "Candidates: factoring, RSA problem, quadratic residuosity, Rabin function",
                  "RSA keygen: Miller-Rabin primes, phi = (p-1)(q-1), d via extended Euclid",
                  "Encrypt c = m^e mod n; decrypt m = c^d mod n",
                  "Correctness: ed = 1 + k·phi -> m^(ed) = m (mod n) by Euler",
                  "Rabin: c = m^2 mod n; hardness equivalent to factoring; four roots",
                  "Goldwasser-Micali: residuosity, one bit per large ciphertext",
                  "Selection trade: hardness vs speed vs ciphertext size",
                ],
              },
              {
                q: "Why is Rabin's scheme said to be 'equivalent in hardness to factoring' while RSA is not?",
                marks: 7,
                outline: [

                  "Computing square roots mod n factors n - direct equivalence",

                  "Breaking RSA (e-th roots) is only known to imply factoring heuristically",

                  "Rabin's guarantee is unconditional in form; RSA's is assumption-based",

                  "Squaring is the trapdoor; factoring is the inversion",

                  "Four roots force disambiguation - the practical price",

                ],              },
            ],
          },
          {
            number: "2.4",
            title: "Quantum computing - the threat model in brief",
            body: [
              "Quantum computing changes the arithmetic of hardness, and the syllabus asks for the brief discussion. Shor's algorithm (1994) solves factoring and discrete logarithms in polynomial time on a large fault-tolerant quantum computer - meaning RSA, Diffie-Hellman and ElGamal, the entire number-theoretic layer of this subject, collapse under that adversary. Grover's algorithm gives a quadratic speedup on unstructured search: symmetric keys lose half their effective bits (AES-128 offers ~64-bit quantum resistance; AES-256 retains ~128 bits).",
              "The asymmetry matters more than the raw algorithms: quantum machines threaten asymmetric crypto far earlier than symmetric crypto, because Grover's quadratic loss is patchable (double the key) while Shor's exponential collapse is structural (no key size saves factoring). A worked sizing table: RSA-2048 -> broken by Shor; DH-2048 -> broken by Shor; AES-128 -> quantum-reduced to 64 bits (weak); AES-256 -> 128 quantum bits (safe); SHA-256 preimages -> 128 quantum bits (safe). The practical consequence: symmetric and hash layers mostly survive by parameter bump; asymmetric layers need new mathematics.",
              "The response architecture completes the section: post-quantum cryptography - lattice-based schemes (Kyber/ML-KEM for key agreement, Dilithium for signatures), hash-based signatures, code-based schemes - standardized by NIST while classical algorithms remain in place; and harvest-now-decrypt-later is the operational threat: adversaries recording today's TLS traffic to decrypt once quantum machines exist, which is why long-lived secrets migrate first. The syllabus's 'brief discussion' ends with the honest caveat: cryptographically relevant quantum computers do not yet exist, but migration timelines run decades - the threat is to future confidentiality, not to today's.",
              "Exam framing: expect 'briefly discuss quantum computing's impact on cryptography'. Give Shor (factoring/d-log - asymmetric collapse) and Grover (quadratic search - double the keys), produce the sizing table, name the post-quantum families and harvest-now-decrypt-later, and close with the asymmetry sentence. Grover is patched by doubling keys; Shor only by replacing mathematics - the asymmetry organizes the whole answer. The sizing table is the verdict - RSA-2048 replace, AES-256 keep, and migration follows the secret's lifetime.",
            ],
            keyTerms: [
              { term: "Shor's algorithm", definition: "Polynomial-time factoring and discrete log on quantum computers - breaks RSA and DH." },
              { term: "Grover's algorithm", definition: "Quadratic search speedup - halves effective symmetric key strength." },
              { term: "Post-quantum cryptography", definition: "Lattice-, hash- and code-based schemes resisting quantum attack." },
              { term: "Harvest now, decrypt later", definition: "Recording ciphertext today for quantum decryption later." },
            ],
            table: {
              caption: "Quantum sizing table.",
              headers: ["Primitive", "Classical strength", "Quantum impact", "Verdict"],
              rows: [
                ["RSA-2048", "112-bit", "Shor: polynomial-time break", "Replace"],
                ["DH / ElGamal (d-log)", "112-bit", "Shor: break", "Replace"],
                ["AES-128", "128-bit", "Grover: ~64-bit", "Move to AES-256"],
                ["AES-256", "256-bit", "Grover: ~128-bit", "Keep"],
                ["SHA-256", "128-bit preimage", "Grover: ~128-bit", "Keep"],
              ],
            },
            bullets: [
              "Shor breaks the number-theoretic layer: factoring and discrete log in polynomial time.",
              "Grover halves symmetric strength - the fix is doubling key sizes, not new math.",
              "Asymmetry: asymmetric crypto needs new mathematics; symmetric needs bigger parameters.",
              "AES-256 and SHA-256 survive the quantum era at ~128-bit effective strength.",
              "Post-quantum families: lattices (ML-KEM, Dilithium), hashes, codes.",
              "Harvest-now-decrypt-later makes migration urgent for long-lived secrets.",
            ],
            diagram: {
              kind: "compare",
              title: "What quantum breaks, what it dents",
              caption: "Shor collapses; Grover dents - two different migration stories.",
              left: {
                heading: "Shor - structural collapse",
                items: [
                  "Factoring and discrete log in polynomial time",
                  "RSA, DH, ElGamal: no key size saves them",
                  "Response: new mathematics (lattices, codes)",
                  "Timelines: standardization underway",
                ],
              },
              right: {
                heading: "Grover - quadratic dent",
                items: [
                  "Unstructured search speedup by sqrt",
                  "AES-128 effective ~64 bits; SHA-256 preimage ~128",
                  "Response: double the parameters",
                  "AES-256 remains comfortable",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "The asymmetry sentence",
              body: "The exam's highest-value line: 'Grover is patched by doubling keys; Shor is patched by replacing mathematics.' It organizes the whole quantum discussion into one sentence and explains why post-quantum work targets asymmetric crypto first.",
            },
            examQuestions: [
              {
                q: "Briefly discuss quantum computing's impact on cryptography: Shor's and Grover's algorithms, the sizing consequences for RSA, DH, AES and SHA, post-quantum families, and harvest-now-decrypt-later.",
                marks: 14,
                outline: [
                  "Shor: polynomial-time factoring and discrete log - RSA/DH/ElGamal collapse",
                  "Grover: sqrt search speedup - symmetric strength halves",
                  "RSA-2048: broken by Shor regardless of key size",
                  "AES-128 -> ~64-bit quantum; AES-256 -> ~128-bit (keep)",
                  "SHA-256 preimage ~128-bit quantum - hash layer survives",
                  "Post-quantum: lattices (ML-KEM, Dilithium), hash and code schemes",
                  "Harvest-now-decrypt-later: record today, decrypt later - migrate long-lived secrets",
                ],
              },
              {
                q: "Why does quantum computing threaten asymmetric cryptography before symmetric?",
                marks: 7,
                outline: [

                  "Shor gives polynomial algorithms for the exact problems asymmetric crypto rests on",

                  "Grover only quadratically speeds the brute-force searches symmetric crypto rests on",

                  "Doubling keys patches quadratic loss; nothing patches exponential collapse",

                  "Asymmetric security rests on structure quantum exploits",

                  "Symmetric security rests on search quantum merely speeds",

                ],              },
            ],
          },
          {
            number: "2.5",
            title: "Large-integer arithmetic in implementations",
            body: [
              "Public-key crypto computes with 2048-4096-bit integers, and the implementation aspects decide real-world speed. The base algorithms: multiplication (Karatsuba's divide-and-conquer beats schoolbook at size), division/remainder for reductions, and modular exponentiation - the dominant cost - via square-and-multiply (O(log e) multiplications) with sliding windows reducing multiplies further. Constant-time discipline matters as much as speed: modular reductions whose timing depends on secret bits (naive division) leak, so implementations use Montgomery multiplication, which avoids division and runs in fixed time.",
              "The CRT speedup is the marquee optimization for RSA decryption: instead of c^d mod n with a 2048-bit exponent, compute c^(d mod p-1) mod p and c^(d mod q-1) mod q (two 1024-bit exponentiations, each roughly 8x cheaper), then recombine with the CRT formula (Gauss). Net effect: private-key decryption about 4x faster. A worked sketch: n = 143, p = 11, q = 13, d = 103; compute m_p = c^(103 mod 10) mod 11 and m_q = c^(103 mod 12) mod 13, then combine - the same answer as the direct exponentiation, at a fraction of the work. The security cost: CRT key storage (p, q, dp, dq, q_inv) enlarges the secret and creates the Bellcore fault-attack surface.",
              "The parameter notes complete the implementation picture: key generation cost is dominated by Miller-Rabin prime searches (fast in practice); window sizes trade memory for multiplies; and side-channel discipline (constant-time ladders, blinding) is part of the arithmetic story, not an add-on - an exponentiation whose timing reveals the exponent breaks the scheme regardless of the assumption's hardness. Blinding randomizes the exponentiation - timing no longer correlates with the secret.",
              "Exam framing: expect 'explain large-integer arithmetic aspects' or 'the CRT speedup with example'. Give the base algorithms (square-and-multiply, Montgomery), work the CRT speedup with the n = 143 sketch, note the fault-attack cost, and close with the side-channel sentence - constant time is part of correctness. The CRT speedup halves each exponent - about four times faster, with a verification step against fault leakage.",
            ],
            keyTerms: [
              { term: "Square-and-multiply", definition: "Modular exponentiation in O(log e) multiplications by scanning exponent bits." },
              { term: "Montgomery multiplication", definition: "Division-free constant-time modular reduction - the timing-safe engine." },
              { term: "CRT speedup", definition: "Split d-mod-p/q exponentiations and recombine - about 4x faster RSA private ops." },
              { term: "Fault attack (Bellcore)", definition: "A faulty CRT computation leaks p; countermeasures verify before output." },
            ],
            table: {
              caption: "The arithmetic technique cards.",
              headers: ["Technique", "Purpose", "Watch-out"],
              rows: [
                ["Square-and-multiply", "Fast modular exponentiation", "Timing must not depend on secret bits"],
                ["Sliding window", "Fewer multiplications", "Precomputed table memory"],
                ["Montgomery", "Division-free reduction", "Constant-time by construction"],
                ["CRT recombination", "4x faster private ops", "Faults leak factors - verify output"],
              ],
            },
            bullets: [
              "2048-4096-bit integers dominate: exponentiation is the cost centre.",
              "Square-and-multiply: O(log e) multiplications; windows trade memory for speed.",
              "Montgomery multiplication removes division - constant-time reductions.",
              "CRT: two half-size exponentiations plus recombine - about 4x faster decryption.",
              "Worked sketch: n = 143, d = 103 -> exponents mod (p-1), (q-1) then combine.",
              "Fault attacks: faulty CRT output reveals p - verify or blind.",
            ],
            diagram: {
              kind: "flow",
              title: "The CRT decryption path",
              caption: "Split, compute small, recombine - the same answer, a quarter of the time.",
              steps: [
                { label: "Receive c", note: "ciphertext mod n" },
                { label: "Split", note: "exponents d_p = d mod (p-1), d_q = d mod (q-1)" },
                { label: "Compute small", note: "m_p = c^(d_p) mod p; m_q = c^(d_q) mod q" },
                { label: "Recombine", note: "Gauss CRT formula -> m mod n" },
                { label: "Verify", note: "re-encrypt check blocks fault leakage" },
              ],
            },
            callout: {
              type: "warning",
              title: "A wrong CRT answer is a broken key",
              body: "If a fault flips one bit during the CRT computation, gcd(m_wrong^e - c, n) recovers p - the Bellcore attack. Implementations verify (re-encrypt and compare) or compute redundantly. The exam point: speedups create their own attack surfaces.",
            },
            examQuestions: [
              {
                q: "Explain the implementation aspects of large-integer arithmetic: square-and-multiply, Montgomery multiplication, the CRT speedup with a worked sketch, and the fault-attack and side-channel cautions.",
                marks: 14,
                outline: [
                  "Exponentiation dominates cost; square-and-multiply is O(log e)",
                  "Sliding windows reduce multiplications at memory cost",
                  "Montgomery: division-free, constant-time modular reduction",
                  "CRT: d_p = d mod (p-1), d_q = d mod (q-1); two half-size exponentiations",
                  "Worked sketch: n = 143, p = 11, q = 13, d = 103 -> combine residues",
                  "Fault attacks: faulty CRT leaks p via gcd - verify re-encryption",
                  "Constant time is correctness: timing-dependent ladders leak exponents",
                ],
              },
              {
                q: "Why is Montgomery multiplication preferred over naive division-based reduction?",
                marks: 7,
                outline: [

                  "Division time depends on operand values - leaks secret-dependent timing",

                  "Montgomery reduces via shifts and multiplications in fixed time",

                  "Constant-time behaviour is a security requirement, not just performance",

                  "Timing channels survive networks - microsecond skews are measurable",

                  "Cache behaviour of division also varies with operands",

                ],              },
            ],
          },
          {
            number: "2.6",
            title: "Randomness and pseudo-randomness - PRGs, PRFs, PRPs",
            body: [
              "Pseudo-randomness is the art of stretching a short truly random seed into a long sequence that no efficient test distinguishes from true randomness. The ladder has three rungs. PRG (pseudo-random generator): G takes an s-bit seed to a longer output; security is next-bit indistinguishability - no efficient adversary predicts the next bit better than chance (a consequence: any efficient statistical test passes). PRF (pseudo-random function): F(key, input) behaves like a random function lookup - indistinguishable from a truly random function to callers without the key. PRP (pseudo-random permutation): a keyed bijection behaving like a random permutation - exactly what block ciphers (Unit III) are defined as, with the PRP/PRF switching lemma connecting the two.",
              "The constructions chain one direction: from any one-way function, Yao/Goldreich-Levin builds a PRG (1.7's ladder); the GGM construction turns a PRG into a PRF by iterating the generator down a binary tree (seed at the root, outputs at the leaves - every input path reads one leaf); PRFs yield block ciphers/PRPs by building invertible keyed structures (Feistel proves a PRP from any round function - Unit III's core theorem). The whole symmetric layer of this subject is, formally, PRG -> PRF -> PRP -> modes -> encryption.",
              "A worked indistinguishability trace fixes the definitions. Experiment: adversary receives oracle access to either a true random function or F(k, .) with hidden k, makes polynomial queries, and outputs a guess. Security: advantage negligible. Concrete: AES-256 as a PRP - no feasible adversary distinguishes it from a random permutation without the key - which is precisely the assumption Unit III's modes of operation consume. The syllabus's phrase 'randomness and pseudo-randomness, pseudo-random generators, functions and permutations' is this ladder verbatim.",
              "Exam framing: expect 'define PRG, PRF and PRP' or 'explain the GGM construction'. Give the three definitions with their indistinguishability games, the construction chain (OWF -> PRG -> GGM PRF -> Feistel PRP), and close with the consumption sentence - modes and ciphers assume exactly these primitives. Next-bit unpredictability implies every statistical test passes - the PRG definition's operational form.",
            ],
            keyTerms: [
              { term: "PRG", definition: "Stretches a short seed into long output no efficient test distinguishes from random." },
              { term: "PRF", definition: "Keyed function indistinguishable from a random function without the key." },
              { term: "PRP", definition: "Keyed permutation indistinguishable from a random permutation - the block-cipher definition." },
              { term: "GGM construction", definition: "Iterating a PRG down a binary tree turns it into a PRF." },
            ],
            table: {
              caption: "The pseudo-randomness ladder.",
              headers: ["Rung", "Object", "Indistinguishable from", "Built from"],
              rows: [
                ["PRG", "Seed -> long stream", "True random bits", "One-way functions (Yao)"],
                ["PRF", "F(k, x) lookups", "Random function", "GGM tree over a PRG"],
                ["PRP", "Keyed bijection", "Random permutation", "Feistel over round functions"],
                ["Modes", "Block cipher schemes", "Secure encryption", "PRP + structure (Unit III)"],
              ],
            },
            bullets: [
              "PRG: next-bit unpredictability implies all efficient statistical tests pass.",
              "PRF: oracle-access indistinguishability from a random function.",
              "PRP: the formal definition of a block cipher; PRF/PRP switching lemma connects.",
              "GGM: iterate the PRG down a tree - leaves indexed by input bits give F(k, x).",
              "Feistel: any round function yields a PRP - the theorem behind DES/AES designs.",
              "The symmetric layer consumes exactly these: PRP + mode = secure encryption.",
            ],
            diagram: {
              kind: "layers",
              title: "From seed to cipher",
              caption: "Each layer is built from the one below - and proven secure from it.",
              layers: [
                { label: "Modes of operation", note: "CBC/CTR structure (Unit III)" },
                { label: "Block cipher (PRP)", note: "AES/DES - Feistel or SPN over round functions" },
                { label: "PRF", note: "GGM tree from a PRG" },
                { label: "PRG", note: "stretched from a one-way function" },
                { label: "True randomness", note: "the seed - the only genuinely random input" },
              ],
            },
            callout: {
              type: "exam",
              title: "Next-bit implies everything",
              body: "The PRG equivalence worth quoting: if no efficient adversary predicts the next bit better than chance, then no efficient statistical test distinguishes the output from random. One sentence carries the definition's weight - and it is why next-bit tests are the standard PRG security game.",
            },
            examQuestions: [
              {
                q: "Define pseudo-random generators, functions and permutations with their indistinguishability experiments, explain the construction chain from one-way functions through GGM to Feistel PRPs, and state how symmetric encryption consumes these primitives.",
                marks: 14,
                outline: [
                  "PRG: seed -> long stream; next-bit indistinguishability",
                  "Next-bit unpredictability implies all statistical tests pass",
                  "PRF: F(k, x) oracle-indistinguishable from a random function",
                  "PRP: keyed bijection - the block-cipher definition",
                  "GGM: PRG iterated down a binary tree yields a PRF",
                  "Feistel: any round function yields a PRP - DES/AES design basis",
                  "Consumption: modes of operation over a PRP = secure encryption (Unit III)",
                ],
              },
              {
                q: "What does the PRF/PRP switching lemma contribute?",
                marks: 7,
                outline: [

                  "A random permutation is close to a random function on few queries",

                  "PRF security transfers to PRP settings up to the birthday term",

                  "So mode proofs can treat block ciphers as ideal random functions",

                  "The birthday term bounds the query count where they diverge",

                  "Few-query proofs inherit PRF security directly",

                ],              },
            ],
          },
          {
            number: "2.7",
            title: "Symmetric encryption - security notions, schemes and proofs",
            body: [
              "Symmetric encryption is a triple (Gen, Enc, Dec) over a shared key, and its security is defined by games, not adjectives. The notions ladder: IND-EAV (eavesdropper picks two messages, sees one encryption, guesses which - the passive floor), IND-CPA (the adversary additionally gets an encryption oracle - chosen plaintext), IND-CCA (additionally a decryption oracle, with the rule that it may not decrypt the challenge - chosen ciphertext). Each rung names the attacker's resources; the guarantee: advantage in distinguishing which message was encrypted is negligible.",
              "The constructions consume 2.6's primitives. From a PRF F: stream-style Enc(k, m) = (r, F(k, r) XOR m) with fresh random r each time - IND-CPA secure, proven by a hybrid argument: replace F by a truly random function (PRF security), then the one-time pad argument applies to the XOR mask (perfect secrecy of the pad on randomness r's entropy). From a PRP (block cipher): modes of operation (Unit III) structure the calls. The proof pattern is always hybrids: start at the real scheme, swap components for ideal ones one step at a time, bound each hop by a primitive's security, land on a scheme whose security is information-theoretic.",
              "A worked proof sketch fixes the template. Claim: Enc(k, m) = (r, F(k, r) XOR m) is IND-CPA secure if F is a PRF. Hybrids: H0 real scheme; H1 replace F(k, .) by random function R - indistinguishable by PRF security, adversary advantage changes negligibly; H2 note R(r) is uniform on fresh r, so mask is a fresh pad - OTP argument gives zero advantage in H2. Chained: total advantage <= PRF-advantage + 0 = negligible. That three-line hybrid chain is the exam's model answer for 'prove a scheme from a primitive'.",
              "Exam framing: expect 'define IND-CPA and IND-CCA' or 'prove a scheme secure from a PRF'. Give the notions ladder with each game's resources, the stream construction from a PRF with the hybrid proof, and close with the malleability note - IND-CPA says nothing about tampering, which is why CCA and authenticated encryption (Unit III) exist. Fresh r is the CPA ticket - repeated masks XOR out, and Unit 1.4's pad lesson returns in mode clothing.",
            ],
            keyTerms: [
              { term: "IND-CPA", definition: "Indistinguishability under chosen-plaintext: encryption-oracle adversary's advantage negligible." },
              { term: "IND-CCA", definition: "Adds a decryption oracle (challenge excluded) - tampering-resistant confidentiality." },
              { term: "Hybrid argument", definition: "Chain of indistinguishable experiments from real to ideal, bounding each hop." },
              { term: "Fresh randomness r", definition: "The per-encryption nonce that makes deterministic schemes CPA-secure." },
            ],
            table: {
              caption: "The security notions ladder.",
              headers: ["Notion", "Adversary resources", "Guarantee"],
              rows: [
                ["IND-EAV", "One chosen pair, one ciphertext", "Passive eavesdropping safe"],
                ["IND-CPA", "+ encryption oracle (many queries)", "Chosen-plaintext safe"],
                ["IND-CCA", "+ decryption oracle (challenge excluded)", "Tampering-resistant confidentiality"],
              ],
            },
            bullets: [
              "Security is a game: adversary distinguishes m0's encryption from m1's; advantage negligible.",
              "Ladder: EAV (passive) -> CPA (encryption oracle) -> CCA (decryption oracle).",
              "Construction from PRF: (r, F(k,r) XOR m) with fresh r each encryption.",
              "Proof by hybrids: swap PRF for random function, then apply the OTP argument.",
              "Deterministic encryption cannot be IND-CPA - repeated plaintexts are distinguishable.",
              "IND-CPA does not stop tampering - CCA and AEAD (Unit III) close that gap.",
            ],
            diagram: {
              kind: "compare",
              title: "CPA vs CCA adversaries",
              caption: "The resource list is the definition - each rung adds one oracle.",
              left: {
                heading: "IND-CPA adversary",
                items: [
                  "Encryption oracle: encrypt anything, any number of times",
                  "Chooses challenge pair (m0, m1)",
                  "Receives one challenge ciphertext",
                  "Guarantee: negligible distinguishing advantage",
                ],
              },
              right: {
                heading: "IND-CCA adversary",
                items: [
                  "Everything CPA has, plus a decryption oracle",
                  "May decrypt anything except the challenge itself",
                  "Models active tampering and reply-style probing",
                  "Much stronger guarantee - rare for bare ciphers",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Fresh r is the CPA ticket",
              body: "The exam's favourite follow-up: 'why does the scheme need a fresh r every time?' Because a repeated (r, mask) pair XORs out: C1 XOR C2 = M1 XOR M2. Deterministic encryption leaks equality; fresh randomness restores indistinguishability - one sentence connecting 1.4's pad lesson to 2.7's proof.",
            },
            examQuestions: [
              {
                q: "Define the symmetric encryption security notions ladder (IND-EAV, IND-CPA, IND-CCA), construct a CPA-secure scheme from a PRF, and prove it with the hybrid argument.",
                marks: 14,
                outline: [
                  "Games: distinguish which of (m0, m1) was encrypted; advantage negligible",
                  "EAV: passive; CPA: + encryption oracle; CCA: + decryption oracle",
                  "Construction: Enc(k, m) = (r, F(k, r) XOR m), fresh random r",
                  "Deterministic schemes fail CPA - repeated plaintexts distinguishable",
                  "Hybrid H0 -> H1: replace F by random function (PRF security)",
                  "Hybrid H1 -> H2: fresh uniform mask = one-time pad on r - zero advantage",
                  "Total advantage <= PRF advantage + 0 = negligible",
                ],
              },
              {
                q: "Why is a decryption oracle excluded from decrypting the challenge ciphertext?",
                marks: 7,
                outline: [

                  "The challenge decrypts to the answer - trivial win otherwise",

                  "CCA models tampering: adversary may decrypt modified ciphertexts",

                  "The exclusion keeps the game meaningful while allowing active probing",

                  "Everything else stays decryptable - active probing allowed",

                  "The exclusion defines the one forbidden query precisely",

                ],              },
            ],
          },
          {
            number: "2.8",
            title: "Generating and testing randomness",
            body: [
              "Every proof in this subject starts 'adversary cannot distinguish from random' - and all of it collapses if the randomness is not random. The generation stack: TRNGs harvest physical entropy (oscillator jitter, thermal noise, disk timing) - true but slow and environment-sensitive; CSPRNGs (cryptographically secure PRNGs) stretch a seed with a PRG construction - fast and provable, but only as strong as the seed; and hybrid designs (the practical default) continually reseed a CSPRNG from hardware entropy. The seed is everything: 2.6's ladder is exactly as strong as its bottom layer.",
              "The failure catalogue is famous because it is real: Debian's OpenSSL entropy bug (2006-08) reduced seed entropy to a handful of values - every SSH key generated in that window was guessable; reused nonces in Embedded-NT's RNG broke keys wholesale; Android Bitcoin wallet RNG flaws emptied accounts. Each case is the same bug - the CSPRNG was fine, the seeding was not. A worked generation recipe: pool OS entropy (/dev/urandom or the platform equivalent), never implement your own PRG, never reuse a seed across boots without persistence, and mix fresh entropy periodically (reseed cycle).",
              "Testing closes the loop: health tests monitor the entropy source (repetition, frequency, runs tests for gross failures; startup tests before first use), and continuous tests catch degradation (the source died - fall back or halt rather than emit predictable output). The exam's framing sentence: cryptography consumes randomness as an input assumption; generating and testing it is not an implementation detail but a security requirement - the proofs assume it, so the engineers must supply it.",
              "Exam framing: expect 'explain randomness generation and testing'. Give the TRNG/CSPRNG/hybrid stack, the failure catalogue (Debian OpenSSL, RNG-reuse keys), the generation recipe, and the health-test cycle - closing with the assumption sentence. Never build your own PRG - platform CSPRNGs seeded from OS entropy are the absolute rule. The Debian case is the cautionary anchor - one seeding bug, every key in the window guessable.",
            ],
            keyTerms: [
              { term: "TRNG", definition: "True random number generator - physical entropy, slow but genuinely random." },
              { term: "CSPRNG", definition: "Cryptographically secure PRNG - PRG-stretched seed, fast, provable." },
              { term: "Reseeding", definition: "Mixing fresh entropy into a running CSPRNG to bound seed compromise." },
              { term: "Health tests", definition: "Startup and continuous checks for entropy-source failure." },
            ],
            table: {
              caption: "The randomness stack and its tests.",
              headers: ["Layer", "Source", "Strength", "Test discipline"],
              rows: [
                ["TRNG", "Physical entropy (jitter, noise)", "True randomness, slow", "Startup + continuous health tests"],
                ["CSPRNG", "PRG-stretched seed", "Computational (provable)", "Seeded only from entropy"],
                ["Hybrid (default)", "OS pool reseeding CSPRNG", "Practical best", "Reseed cycle + fallback policy"],
              ],
            },
            bullets: [
              "TRNG: physical entropy - true but slow; CSPRNG: stretched seed - fast and provable.",
              "The seed is the security: 2.6's ladder collapses with a weak seed.",
              "Debian OpenSSL (2006-08): seed entropy collapsed to a handful of values - keys guessable.",
              "RNG reuse in embedded devices broke wholesale key generations.",
              "Recipe: OS entropy pool, never homemade PRGs, reseed periodically, persist across boots.",
              "Health tests: startup checks, continuous monitoring, halt-or-fallback on failure.",
            ],
            diagram: {
              kind: "cycle",
              title: "The randomness life cycle",
              caption: "Collect, seed, generate, test, reseed - the loop every proof silently assumes.",
              steps: [
                { label: "Collect entropy", note: "physical sources into the OS pool" },
                { label: "Seed", note: "CSPRNG initialized from the pool" },
                { label: "Generate", note: "keys, nonces, pads stretched on demand" },
                { label: "Health test", note: "startup + continuous checks" },
                { label: "Reseed", note: "fresh entropy mixed in; loop continues" },
              ],
            },
            callout: {
              type: "warning",
              title: "Never build your own PRG",
              body: "The Debian lesson generalizes: custom randomness - seeding from timestamps, PIDs, or a homemade generator - produces keys that look random and are not. The rule is absolute: use the platform CSPRNG seeded from the OS entropy pool. Quote it in every randomness answer.",
            },
            examQuestions: [
              {
                q: "Explain randomness generation and testing: the TRNG/CSPRNG/hybrid stack, the famous seeding failures, a generation recipe, and the health-test cycle.",
                marks: 14,
                outline: [
                  "TRNG: physical entropy - true but slow and environment-sensitive",
                  "CSPRNG: PRG-stretched seed - fast, provable, seed-dependent",
                  "Hybrid default: OS pool continually reseeds the CSPRNG",
                  "Debian OpenSSL 2006-08: seed entropy collapsed - keys guessable",
                  "Embedded RNG reuse broke entire key generations",
                  "Recipe: OS entropy, no homemade PRGs, reseed cycle, boot persistence",
                  "Health tests: startup validation, continuous monitoring, halt-or-fallback",
                ],
              },
              {
                q: "Why is reseeding a running CSPRNG valuable?",
                marks: 7,
                outline: [

                  "Bounds the damage of a compromised or weak initial seed",

                  "Fresh entropy mixes into internal state continuously",

                  "Post-compromise recovery: future outputs regain unpredictability",

                  "Long-running generators drift toward predictability without it",

                  "Reseeding chains entropy events across reboots",

                ],              },
            ],
          },
        ],
      },
    },
    {
      number: 3,
      roman: "III",
      title: "Block Ciphers, Modes and Message Authentication",
      summary:
        "Unit III builds the symmetric workhorses: Feistel networks and DES, substitution-permutation networks and AES, Triple-DES and key-length trade-offs, the modes of operation, the cryptanalysis families - exhaustive, linear, differential and meet-in-the-middle - then message authentication with CBC-MAC, collision-resistant hashing from MD5 through SHA-3 with HMAC, CCA security, simultaneous confidentiality and integrity with GCM, and the password-based access case study.",
      chapter: {
        number: "03",
        title: "The Symmetric Workhorses",
        intro:
          "Unit III covers block ciphers including DES, Triple-DES and AES, substitution/permutation networks, Feistel networks, modes of operation including ECB, CBC, OFB and Counter, cryptanalysis attacks including exhaustive, linear, differential and meet-in-the-middle, key lengths, message authentication with CBC-MAC, collision-resistant hashing with MD5, SHA-1, SHA-2, SHA-3 and HMAC, CCA security for symmetric encryption, simultaneous message confidentiality and integrity, the GCM mode, and the password-based secure computer access case study.",
        inOneBreath:
          "Feistel networks turn any round function into an invertible cipher (DES); substitution-permutation networks diffuse and confuse whole states (AES); modes chain block calls into real-message encryption - ECB banned, CBC with unpredictable IVs, CTR with unique nonces. Cryptanalysis prices each design (exhaustive, linear, differential, meet-in-the-middle), and authentication comes from hashes and MACs - HMAC built on Merkle-Damgård hashing, CBC-MAC on block ciphers - combined into AEAD schemes like GCM that deliver confidentiality and integrity together.",
        sections: [
          {
            number: "3.1",
            title: "Feistel networks and DES",
            body: [
              "The Feistel network is the theorem that any function - invertible or not - can be turned into an invertible cipher. Structure: split the block into halves (L, R); each round computes L' = R, R' = L XOR F(K_i, R), where F is an arbitrary round function; swap halves each round; after n rounds, decryption runs the same structure with reversed keys - no inverse of F is ever needed. The insight is mathematical elegance as engineering: F can be a sloppy, hard-to-analyze function, because invertibility comes from the structure, not the function.",
              "DES (1977) instantiates it: 64-bit block, 56-bit key, 16 Feistel rounds; the round function expands 32 bits to 48, XORs round-key bits, passes through eight S-boxes (the only nonlinear element - confusion), and permutes (diffusion). The key schedule derives 16 round keys from the master. A worked half-round: L = 0x4A7C..., R = 0xB1E2..., round key XOR, S-box substitutions, permutation, XOR into the left half, swap - every named component appearing in one pass. The initial and final permutations (IP/FP) are bookkeeping; the S-boxes are the cipher.",
              "DES's fate teaches the key-length lesson: 56-bit keys fell to exhaustive search - the 1998 EFF Deep Crack machine did it in days, and modern clouds do it in hours - while the structure itself survived: 3DES (EDE with two or three keys) patched the key length to 112/168 bits, inheriting Feistel reversibility for free. The exam's causality sentence: DES was not broken structurally - its S-boxes resisted differential cryptanalysis (publicly, until Biham-Shamir's 1990s work on the design principles surfaced) - it was broken arithmetically, by a keyspace too small for its century.",
              "Exam framing: expect 'explain the Feistel structure and DES'. Give the round equations with the invertibility argument, the DES card (64/56/16, S-boxes as confusion, permutation as diffusion), one worked half-round, and close with the 3DES patch and the keyspace lesson. Structure versus key length is the causality - DES died arithmetically, and 3DES patched the arithmetic. The half-round trace is the worked example - expand, key-XOR, S-box, permute, XOR, swap.",
            ],
            keyTerms: [
              { term: "Feistel network", definition: "L' = R; R' = L XOR F(K, R) - any round function yields an invertible cipher." },
              { term: "DES", definition: "64-bit block, 56-bit key, 16 Feistel rounds with S-box confusion and permutation diffusion." },
              { term: "S-boxes", definition: "The nonlinear substitution tables - DES's only source of confusion." },
              { term: "3DES (EDE)", definition: "Triple encryption with 112/168-bit keys - the key-length patch on DES." },
            ],
            table: {
              caption: "The DES card.",
              headers: ["Property", "Value", "Role"],
              rows: [
                ["Block / key", "64 bits / 56 bits", "The sizes that dated it"],
                ["Rounds", "16 Feistel rounds", "Invertibility by structure"],
                ["Round function F", "Expand -> XOR key -> S-boxes -> permute", "Confusion + diffusion"],
                ["Key schedule", "16 round keys from 56 bits", "Rotation + selection"],
                ["Status", "Retired (exhaustive search)", "3DES carried the structure forward"],
              ],
            },
            bullets: [
              "Feistel equations: L' = R, R' = L XOR F(K_i, R) - decryption reuses the same circuit.",
              "Invertibility comes from the structure, so F needs no inverse.",
              "DES: 64-bit block, 56-bit key, 16 rounds; S-boxes are the only nonlinearity.",
              "Key schedule derives 16 round keys; IP/FP are bookkeeping.",
              "Broken by exhaustive search (2^56 - EFF Deep Crack, 1998), not by structure.",
              "3DES patched the keyspace (112/168 bits) using the same Feistel reversibility.",
            ],
            diagram: {
              kind: "flow",
              title: "One Feistel round",
              caption: "Split, apply F, XOR, swap - invertible by construction.",
              steps: [
                { label: "Halves (L, R)", note: "block split in two" },
                { label: "F(K_i, R)", note: "expand, key-XOR, S-boxes, permute" },
                { label: "XOR into L", note: "new R = L XOR F(K_i, R)" },
                { label: "Swap", note: "new L = old R; next round" },
                { label: "Decryption", note: "same rounds, reversed keys - F never inverted" },
              ],
            },
            callout: {
              type: "exam",
              title: "Structure vs key length",
              body: "The exam-grade distinction: DES's 64-bit block and Feistel structure remain sound; its 56-bit key was the fatal parameter. 'Broken by arithmetic, not by structure' is the sentence that shows you understand why 3DES was a viable patch and why block size (64 bits) became 3DES's own later weakness.",
            },
            examQuestions: [
              {
                q: "Explain the Feistel network with its round equations and the invertibility argument, describe DES's construction - block, key, rounds, S-boxes, key schedule - and state how 3DES patched its key length.",
                marks: 14,
                outline: [
                  "Feistel: L' = R; R' = L XOR F(K_i, R); decryption reuses structure with reversed keys",
                  "Any round function works - no inverse of F needed",
                  "DES: 64-bit block, 56-bit key, 16 rounds",
                  "Round function: expansion, key XOR, eight S-boxes, permutation",
                  "S-boxes = confusion; permutation = diffusion; IP/FP bookkeeping",
                  "Fate: 2^56 exhaustive search (Deep Crack 1998) - arithmetic, not structure",
                  "3DES: EDE with 112/168-bit keys, same Feistel reversibility",
                ],
              },
              {
                q: "Why does the Feistel structure not require the round function to be invertible?",
                marks: 7,
                outline: [

                  "Each round passes the unmodified R half through unchanged",

                  "The XOR restores L exactly during reversed-key decryption",

                  "Invertibility lives in the wiring, not in F",

                  "Decryption replays rounds with reversed round keys",

                  "F need only be deterministic, not bijective",

                ],              },
            ],
          },
          {
            number: "3.2",
            title: "Substitution-permutation networks and AES",
            body: [
              "The SPN (substitution-permutation network) is the other design philosophy: instead of halves and arbitrary functions, the whole state transforms each round through an S-layer (parallel small substitutions - confusion) and a P-layer (a bit-shuffling permutation - diffusion), with round keys XORed in. Where Feistel updates half the state per round, an SPN updates all of it - more diffusion per round, and decryption requires inverses of every component (which is why SPN components are chosen invertible by design).",
              "AES (Rijndael, 2001) is the canonical SPN: 128-bit block as a 4x4 byte matrix, keys of 128/192/256 bits with 10/12/14 rounds. Each round: SubBytes (byte-wise S-box - the nonlinear confusion, algebraically designed to resist differential/linear cryptanalysis), ShiftRows (rows shifted cyclically - positional diffusion across columns), MixColumns (column-wise matrix multiply in GF(2^8) - each output byte depends on all four input bytes), AddRoundKey (XOR the round key). The final round omits MixColumns; decryption runs Inverse-SubBytes/ShiftRows/MixColumns in reverse order. A worked round read: one plaintext byte's influence spreads to a full column after MixColumns and to all 16 bytes within two rounds - the avalanche the design guarantees.",
              "The comparison the exam wants: Feistel halves swap and F needn't invert; SPN transforms the whole state and every layer must invert. DES's S-boxes were secretly optimized against cryptanalysis unknown publicly at the time; AES's S-box was designed in the open with algebraic criteria. And the key-length ledger from Unit II applies: AES-128 (2^128 search), AES-256 for quantum-margin comfort (Grover halves it to ~2^128). AES is this syllabus's reference cipher for every mode in the next section.",
              "Exam framing: expect 'explain the AES structure' or 'compare Feistel and SPN designs'. Give the SPN round anatomy, the AES card (sizes, rounds, four operations), the two-round avalanche trace, and the Feistel-vs-SPN contrast - closing with the key-length ledger. The two-round avalanche is the visible design goal - one byte spreads to all sixteen. The contrast table is the comparison's spine - halves versus whole state, wiring versus component inverses.",
            ],
            keyTerms: [
              { term: "SPN", definition: "Substitution-permutation network - whole-state S-layer plus P-layer per round." },
              { term: "AES (Rijndael)", definition: "128-bit block, 128/192/256-bit keys, 10/12/14 rounds of four byte-level operations." },
              { term: "MixColumns", definition: "GF(2^8) column mixing - each output byte depends on the whole column." },
              { term: "Avalanche", definition: "One plaintext bit flips about half the ciphertext bits - the diffusion goal." },
            ],
            table: {
              caption: "The AES round card.",
              headers: ["Operation", "Action", "Role"],
              rows: [
                ["SubBytes", "Byte-wise S-box lookup", "Nonlinear confusion"],
                ["ShiftRows", "Cyclic row shifts", "Positional diffusion"],
                ["MixColumns", "GF(2^8) column mixing", "Column diffusion (skipped in final round)"],
                ["AddRoundKey", "XOR round key", "Key incorporation"],
              ],
            },
            bullets: [
              "SPN: S-layer for confusion, P-layer for diffusion, round keys XORed in.",
              "Whole-state updates per round - more diffusion than Feistel's halves.",
              "Decryption inverts every layer - SPN components are chosen invertible.",
              "AES: 128-bit block, 10/12/14 rounds for 128/192/256-bit keys.",
              "Two-round trace: one byte's change spreads to all 16 bytes - avalanche.",
              "AES S-box designed openly against differential/linear cryptanalysis.",
            ],
            diagram: {
              kind: "layers",
              title: "One AES round",
              caption: "Four operations in sequence - confusion then diffusion then keying, over the whole state.",
              layers: [
                { label: "SubBytes", note: "S-box per byte - nonlinear confusion" },
                { label: "ShiftRows", note: "rows rotate - spreads bytes across columns" },
                { label: "MixColumns", note: "GF(2^8) mixing - whole-column dependence" },
                { label: "AddRoundKey", note: "round key XOR - keying the state" },
              ],
            },
            callout: {
              type: "exam",
              title: "The Feistel-vs-SPN contrast table",
              body: "The guaranteed comparison marks: halves-vs-whole-state (Feistel updates half per round, SPN all of it), invertibility (structure vs component-inverses), round function freedom (any F vs invertible layers). Write all three rows - the contrast question is near-certain in this unit.",
            },
            examQuestions: [
              {
                q: "Explain substitution-permutation networks and AES's construction - block, key sizes, rounds and the four operations - demonstrate the two-round avalanche, and contrast SPN with Feistel design.",
                marks: 14,
                outline: [
                  "SPN: S-layer confusion + P-layer diffusion over the whole state",
                  "AES: 128-bit block as 4x4 bytes; 10/12/14 rounds for 128/192/256-bit keys",
                  "SubBytes: nonlinear S-box (confusion)",
                  "ShiftRows + MixColumns: positional and column diffusion",
                  "AddRoundKey: XOR keying; final round omits MixColumns",
                  "Avalanche: one byte spreads to all 16 within two rounds",
                  "Contrast: halves vs whole state; structural vs component invertibility",
                ],
              },
              {
                q: "Why must every SPN component be invertible while Feistel's round function need not be?",
                marks: 7,
                outline: [

                  "SPN decryption applies inverse layers in reverse order",

                  "Feistel recovers halves through the XOR wiring with reversed keys",

                  "The invertibility burden moves from wiring to components",

                  "S-boxes are chosen bijective for exactly this reason",

                  "MixColumns matrices must be invertible in GF(2^8)",

                ],              },
            ],
          },
          {
            number: "3.3",
            title: "Triple-DES, key lengths and the trade-offs",
            body: [
              "Triple-DES encrypts each block three times: C = E(K3, D(K2, E(K1, P))) - the EDE pattern, typically with two keys (K1 = K3, 112-bit) or three (168-bit). Why not double encryption (2DES)? The meet-in-the-middle attack (next section) breaks it in about 2^57 work with 2^56 storage - barely worse than single DES - so triple is the minimum that helps, and even 3DES carries a 64-bit block birthday cap (about 2^32 blocks per key, the Sweet32 boundary) that retires it for high-volume use.",
              "The key-length ledger is the section's arithmetic spine, and the syllabus's 'security-performance-features trade-offs' is its frame. Security: key length sets exhaustive-search cost - 56-bit dead, 112-bit (3DES-2key) legacy-acceptable, 128-bit (AES) standard, 256-bit (AES) quantum-comfortable. Performance: longer keys cost key schedule and round count (AES-256 runs 14 rounds vs AES-128's 10); 3DES costs three cipher invocations per block - about 3x slower than AES plus its block-size limit. Features: block size, hardware support (AES-NI instructions make AES nearly free), and mode flexibility.",
              "A worked trade trace prices a realistic choice. A payment switch moving 10 TB/day per key: 3DES hits the 2^32-block birthday cap (64-bit block) within a day's traffic - unencrypted block-pair equality leaks; AES-128 with a 128-bit block pushes the cap to 2^64 blocks (a lifetime at that rate) and runs about 8x faster with hardware support. The verdict sentence: key length is the security dial, block size is the volume dial, and hardware acceleration is the performance dial - three different dials, three different questions.",
              "Exam framing: expect 'compare DES, 3DES and AES' or 'discuss key lengths'. Produce the three-cipher card table, explain why 2DES fails to MITM and 3DES works, price the birthday cap, and close with the three-dials sentence - security, volume, performance are separate dials. Three dials answer three questions - key length for security, block size for volume, hardware for speed.",
            ],
            keyTerms: [
              { term: "3DES EDE", definition: "E(K3, D(K2, E(K1, P))) - 112/168-bit keys on the Feistel structure." },
              { term: "Birthday cap", definition: "64-bit blocks are safe only near 2^32 blocks per key (Sweet32)." },
              { term: "AES-NI", definition: "CPU instructions making AES encryption nearly free - the features dial." },
              { term: "Key-length ledger", definition: "56-bit dead, 112-bit legacy, 128-bit standard, 256-bit quantum-margin." },
            ],
            table: {
              caption: "The three-cipher comparison card.",
              headers: ["Property", "DES", "3DES", "AES"],
              rows: [
                ["Block / key", "64 / 56 bits", "64 / 112-168 bits", "128 / 128-256 bits"],
                ["Structure", "Feistel 16 rounds", "Feistel x 3 (EDE)", "SPN 10-14 rounds"],
                ["Attack cost", "2^56 - broken", "2^112 - legacy OK", "2^128+ - standard"],
                ["Volume cap", "2^32 blocks", "2^32 blocks", "2^64 blocks"],
                ["Speed", "Slow (software)", "3x DES", "Fast (hardware AES-NI)"],
                ["Status", "Retired", "Legacy only", "Current standard"],
              ],
            },
            bullets: [
              "3DES = EDE with two or three keys; double encryption fails to MITM, triple does not.",
              "Key lengths: 56-bit broken, 112-bit legacy, 128-bit standard, 256-bit quantum margin.",
              "More rounds cost time: AES-256 runs 14 rounds vs AES-128's 10.",
              "64-bit blocks cap volume at about 2^32 blocks per key; 128-bit blocks lift it to 2^64.",
              "Hardware (AES-NI) changes the performance dial entirely - AES becomes nearly free.",
              "Worked trace: 10 TB/day per key kills 3DES on volume; AES-128 is comfortable.",
            ],
            diagram: {
              kind: "compare",
              title: "DES vs 3DES vs AES",
              caption: "Three dials - key length (security), block size (volume), hardware (speed).",
              left: {
                heading: "DES / 3DES (Feistel)",
                items: [
                  "64-bit block - birthday cap at 2^32 blocks",
                  "56-bit key broken; 112/168-bit legacy",
                  "Three invocations per block (3DES)",
                  "Retired / legacy only",
                ],
              },
              right: {
                heading: "AES (SPN)",
                items: [
                  "128-bit block - cap at 2^64 blocks",
                  "128/256-bit keys - standard and quantum-margin",
                  "Hardware-accelerated - nearly free",
                  "Current worldwide standard",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Why not double encryption?",
              body: "The classic trap: 'why not just encrypt twice with two keys?' Because meet-in-the-middle computes E(K1, P) for all K1 and D(K2, C) for all K2 and matches - 2^57 work with stored tables. Triple encryption forces three-way matching that raises the bar genuinely. Quote it whenever 2DES/3DES appear.",
            },
            examQuestions: [
              {
                q: "Compare DES, 3DES and AES across block size, key length, structure, attack cost and status; explain why double encryption fails while triple works, and price the 64-bit block birthday cap with a high-volume example.",
                marks: 14,
                outline: [
                  "DES: 64/56, Feistel, 2^56 broken - retired",
                  "3DES: EDE, 112/168-bit keys, legacy with 64-bit block cap",
                  "AES: 128-bit block, 128/256-bit keys, SPN 10-14 rounds - standard",
                  "2DES falls to meet-in-the-middle: 2^57 work, 2^56 storage",
                  "Triple forces genuine 2^112 effort",
                  "Birthday cap: 64-bit block safe to ~2^32 blocks (Sweet32); 128-bit to 2^64",
                  "Worked trace: 10 TB/day per key exceeds 3DES cap in a day - AES wins on volume",
                ],
              },
              {
                q: "Why does AES-256 use more rounds than AES-128?",
                marks: 7,
                outline: [

                  "More rounds add security margin proportional to key ambition",

                  "14 rounds give headroom for future cryptanalytic advances",

                  "Cost is modest - hardware acceleration absorbs it",

                  "Related-key and future attacks erode margins slowly",

                  "Extra rounds are cheap against the 256-bit ambition",

                ],              },
            ],
          },
          {
            number: "3.4",
            title: "Modes of operation - ECB, CBC, OFB and Counter",
            body: [
              "Block ciphers encrypt fixed-size blocks; modes of operation chain block calls into real-message encryption. ECB (Electronic Codebook): each block encrypted independently - deterministic, so equal plaintext blocks give equal ciphertext blocks (the famous ECB-penguin: an image encrypted in ECB shows its silhouette); pattern leakage is structural, and ECB is banned for anything but single random blocks. CBC (Cipher Block Chaining): each plaintext block XORs the previous ciphertext before encryption, C_i = E(K, P_i XOR C_{i-1}), with the IV playing C_0 - chaining destroys patterns, but the IV must be unpredictable (random) per message, or the adversary orchestrates first-block predictions (the BEAST attack's lesson).",
              "OFB (Output Feedback): the block cipher generates a keystream - O_i = E(K, O_{i-1}), O_0 = IV - and the message XORs it, a stream-cipher mode; no error propagation and precomputation possible, but keystream reuse across messages (same IV) is catastrophic - the one-time-pad rule returns. Counter (CTR): keystream blocks are E(K, nonce || counter) for counter values 0, 1, 2... - parallelizable, seekable (block i decrypts independently), and the nonce rule is uniqueness (never repeat nonce+counter per key), not unpredictability. CTR's parallelism and seekability made it the modern default for bulk data.",
              "A worked mode comparison fixes the selection logic. Encrypt a 1 GB file with random access needs: ECB fails (patterns); CBC works but forces sequential processing (C_i needs C_{i-1}) and unpredictable IVs; CTR shines - blocks are independent (parallel encrypt/decrypt, seek to any offset) with a unique nonce per (key, file). The IV/nonce table is the exam's precision marks: CBC wants unpredictable IVs; CTR wants unique nonces; OFB wants unique IVs; and every reuse rule exists because keystream/pad reuse cancels - Unit I's pad lesson in mode clothing.",
              "Exam framing: expect 'explain modes of operation' or 'compare CBC and CTR'. Give each mode's equation with its failure mode (ECB patterns, CBC IV rules, OFB/CTR reuse rules), run the 1 GB random-access trace, and produce the IV/nonce requirement table - closing with the pad-reuse ancestry of all three rules. CBC wants unpredictable IVs, CTR wants unique nonces - different properties, different generation schemes.",
            ],
            keyTerms: [
              { term: "ECB", definition: "Independent block encryption - deterministic, pattern-leaking, banned for data." },
              { term: "CBC", definition: "C_i = E(K, P_i XOR C_{i-1}) with unpredictable IVs - chaining kills patterns." },
              { term: "CTR mode", definition: "Keystream from E(K, nonce || counter) - parallel, seekable, unique-nonce rule." },
              { term: "Nonce uniqueness", definition: "CTR's requirement: (nonce, counter) never repeats per key - uniqueness, not unpredictability." },
            ],
            table: {
              caption: "The mode card.",
              headers: ["Mode", "Equation", "IV/nonce rule", "Failure if violated"],
              rows: [
                ["ECB", "C_i = E(K, P_i)", "None (deterministic)", "Pattern leakage - ECB penguin"],
                ["CBC", "C_i = E(K, P_i XOR C_{i-1})", "IV unpredictable, random", "BEAST: first-block prediction"],
                ["OFB", "O_i = E(K, O_{i-1}); C = P XOR O", "IV unique per message", "Keystream reuse cancels pads"],
                ["CTR", "C_i = P_i XOR E(K, nonce||i)", "Nonce unique per key", "Keystream reuse - two-time pad"],
              ],
            },
            bullets: [
              "ECB: independent, deterministic - equal blocks encrypt equally (ECB-penguin).",
              "CBC: chaining destroys patterns; IV must be unpredictable (BEAST lesson).",
              "OFB: cipher as keystream generator; sequential, no error propagation.",
              "CTR: counter-mode keystream - parallel, seekable, modern bulk default.",
              "Rules differ: CBC wants unpredictable IVs; CTR wants unique nonces.",
              "All reuse failures are the one-time-pad lesson: repeated pads cancel.",
            ],
            diagram: {
              kind: "flow",
              title: "CBC chaining",
              caption: "Each block encrypts the previous ciphertext's shadow - patterns dissolve.",
              steps: [
                { label: "IV", note: "random, unpredictable - the first chain link" },
                { label: "Block 1", note: "C1 = E(K, P1 XOR IV)" },
                { label: "Block 2", note: "C2 = E(K, P2 XOR C1)" },
                { label: "Block n", note: "chained through all ciphertext" },
                { label: "Decrypt", note: "P_i = D(K, C_i) XOR C_{i-1} - same chain backwards" },
              ],
            },
            callout: {
              type: "exam",
              title: "Unpredictable vs unique - the precision marks",
              body: "The most-missed distinction on mode questions: CBC's IV must be unpredictable (an adversary who predicts the IV can test guesses of the first plaintext block - BEAST); CTR's nonce must only be unique (repeats create keystream reuse). Different properties, different generation schemes - state both precisely.",
            },
            examQuestions: [
              {
                q: "Explain ECB, CBC, OFB and CTR modes with their equations, IV/nonce requirements and failure modes, and compare them for a 1 GB file needing random access.",
                marks: 14,
                outline: [
                  "ECB: independent blocks - deterministic, pattern leakage, banned",
                  "CBC: C_i = E(K, P_i XOR C_{i-1}); unpredictable IV; BEAST if predictable",
                  "OFB: keystream chain; unique IV; reuse cancels pads",
                  "CTR: E(K, nonce||counter) keystream; unique nonce; parallel and seekable",
                  "Worked trace: 1 GB random access - CBC sequential, CTR independent blocks",
                  "Precision: CBC IV unpredictability vs CTR nonce uniqueness",
                  "Common ancestry: reuse failures are one-time-pad cancellations",
                ],
              },
              {
                q: "Why is CTR mode preferred for bulk encrypted storage?",
                marks: 7,
                outline: [

                  "Blocks are independent - parallelize and seek to any offset",

                  "No padding needed - keystream XOR handles any length",

                  "Only requirement is nonce uniqueness per key",

                  "Random access reads one block without decrypting neighbours",

                  "Sector-aligned counters map storage blocks to cipher blocks",

                ],              },
            ],
          },
          {
            number: "3.5",
            title: "Cryptanalysis - exhaustive, linear, differential and meet-in-the-middle",
            body: [
              "Cryptanalysis prices designs, and the syllabus's four families each exploit a different resource. Exhaustive search: try every key - the baseline every key length must survive (2^56 killed DES). Linear cryptanalysis (Matsui): find affine approximations of the S-box behaviour that hold with biased probability over many plaintext pairs; with enough known plaintexts (about 2^43 for DES), the key bits vote out of the noise. Differential cryptanalysis (Biham-Shamir): choose plaintext pairs with fixed differences and trace how differences propagate - characteristic probabilities reveal round-key bits; DES's S-boxes were secretly tuned against it in the 1970s.",
              "Meet-in-the-middle is the structural attack on multi-encryption: for double encryption C = E(K2, E(K1, P)), compute E(K1, P) for all K1 and store, compute D(K2, C) for all K2, and match - one hit exposes both keys in about 2^(k+1) work instead of 2^(2k). This is why 2DES buys nothing (2^57 work) and 3DES forces genuine 2^112 effort; it is also the generic reason concatenated ciphers need careful key schedules. A worked trace: 2DES with 56-bit keys - table of 2^56 forward values, 2^56 backward probes, a match confirms both keys with one known plaintext/ciphertext pair.",
              "The resource table organizes the families for the exam: each attack names its data need, its time need, and the design lesson it taught - exhaustive (key length), linear (S-box nonlinearity balance), differential (difference propagation control), MITM (multi-encryption structure). The closing sentence: attacks are priced in data plus time, and cipher design is the art of pricing both beyond feasibility - which is exactly why AES's designers published their criteria (open tuning beats secret tuning once the method exists).",
              "Exam framing: expect 'explain linear and differential cryptanalysis' or 'the meet-in-the-middle attack'. Give each family's mechanism with its resource price, work the 2DES MITM trace, and close with the pricing sentence - data plus time against feasibility. The 2DES meet-in-the-middle table is the trace - 2^57 work proves triple is the minimum useful form. The resource table is the answer's frame - each family priced in data and time.",
            ],
            keyTerms: [
              { term: "Linear cryptanalysis", definition: "Biased affine approximations over many known plaintexts vote out key bits." },
              { term: "Differential cryptanalysis", definition: "Chosen-plaintext difference propagation through rounds reveals key material." },
              { term: "Meet-in-the-middle", definition: "Forward and backward tables matched - breaks double encryption in ~2^(k+1)." },
              { term: "Characteristic", definition: "A difference propagation path with measurable probability - differential's tool." },
            ],
            table: {
              caption: "The four attack families and their prices.",
              headers: ["Attack", "Resource needed", "Against DES/AES", "Design lesson"],
              rows: [
                ["Exhaustive", "Time only", "2^56 killed DES", "Key length is the floor"],
                ["Linear", "~2^43 known plaintexts", "Matsui vs DES", "Balanced S-box nonlinearity"],
                ["Differential", "Chosen pairs", "S-boxes tuned vs it", "Control difference propagation"],
                ["Meet-in-the-middle", "Storage + time", "Kills 2DES (2^57)", "Multi-encryption needs structure"],
              ],
            },
            bullets: [
              "Exhaustive: the baseline - every key length must exceed feasible enumeration.",
              "Linear: S-box biases accumulate over known plaintexts; 2^43 texts cracked DES.",
              "Differential: chosen pairs trace differences; DES S-boxes were secretly hardened.",
              "MITM: forward/backward tables match - 2DES gains ~1 bit, not 56.",
              "2DES trace: 2^56 forward table + 2^56 backward probes = 2^57 work.",
              "Pricing sentence: attacks cost data plus time; designs price both beyond reach.",
            ],
            diagram: {
              kind: "fork",
              title: "Choosing the attack",
              caption: "The attacker's budget decides the family - each has a different currency.",
              start: "Attack budget",
              branches: [
                { label: "Compute only", outcome: "exhaustive search - try every key; dies to adequate key length", good: false },
                { label: "Known plaintext", outcome: "linear cryptanalysis - biases vote out key bits at 2^43 texts", good: false },
                { label: "Chosen plaintext", outcome: "differential cryptanalysis - difference characteristics trace keys", good: false },
                { label: "Storage to spare", outcome: "meet-in-the-middle - tables match and break multi-encryption", good: false },
              ],
            },
            callout: {
              type: "exam",
              title: "One trace for MITM",
              body: "The meet-in-the-middle answer is complete with its table arithmetic: forward table of 2^56 E(K1, P) values, backward probes of 2^56 D(K2, C) values, one match - 2^57 work, not 2^112. Then the consequence: 'this is why 2DES buys nothing and 3DES is the minimum useful triple.'",
            },
            examQuestions: [
              {
                q: "Explain the four cryptanalysis families - exhaustive, linear, differential and meet-in-the-middle - with their mechanisms and resource prices, and work the 2DES meet-in-the-middle trace.",
                marks: 14,
                outline: [
                  "Exhaustive: time-only baseline; 2^56 killed DES",
                  "Linear: biased approximations; ~2^43 known plaintexts vote key bits",
                  "Differential: chosen-pair difference characteristics through rounds",
                  "DES S-boxes secretly tuned against differential in the 1970s",
                  "MITM: E(K1, P) table vs D(K2, C) probes; match reveals both keys",
                  "2DES trace: 2^57 work with 2^56 storage - barely above single DES",
                  "Consequence: 3DES minimum useful; AES designed openly against all four",
                ],
              },
              {
                q: "Why do linear and differential attacks need so many plaintexts?",
                marks: 7,
                outline: [

                  "Both read statistics out of noise - biases are small",

                  "Sample size grows as the inverse square of the bias",

                  "Enough texts make the signal vote above randomness",

                  "Each pair contributes a fractional bit of key information",

                  "Design stretches the needed text count beyond feasibility",

                ],              },
            ],
          },
          {
            number: "3.6",
            title: "Message authentication and CBC-MAC",
            body: [
              "Encryption hides content; authentication proves origin and integrity. The MAC (message authentication code) is the symmetric answer: tag = MAC(K, m); the verifier recomputes and compares - a forged tag on any new message is infeasible without the key. The security notion is EUF-CMA (existential unforgeability under chosen-message attack): an adversary who obtains tags for any messages of its choosing still cannot produce a valid tag for one new message. MACs add integrity and origin (shared-key symmetric origin), but not non-repudiation - either key holder could have signed.",
              "CBC-MAC builds a MAC from a block cipher: chain CBC with zero IV but keep only the final block as the tag - T = E(K, P_n XOR E(K, ... E(K, P_1))). Worked trace on three blocks: T1 = E(K, P1); T2 = E(K, P2 XOR T1); T3 = E(K, P3 XOR T2) - T3 is the tag. The critical caveat: raw CBC-MAC is secure only for fixed-length messages - variable lengths collide (a two-block forgery against a one-block MAC by reusing the first block), which is why real standards (CMAC/OMAC1) add length handling and subkey whitening. The construction lesson: chaining gives MACs the same way chaining gives encryption - structure converts a PRP into a bigger primitive.",
              "The comparison table completes the syllabus's authentication picture: HMAC (hash-based, next section) and CBC-MAC/CMAC (block-cipher-based) both achieve EUF-CMA; the choice is infrastructure - HMAC where hash libraries exist, CMAC where block ciphers are the deployed primitive. And the failure catalogue worth quoting: MAC without encryption leaves confidentiality open; encryption without MAC leaves tampering open (bit-flipping in CTR, padding oracles in CBC) - which is exactly why the syllabus's next section assembles both into AEAD.",
              "Exam framing: expect 'explain MACs and CBC-MAC'. Define EUF-CMA, work the three-block CBC-MAC trace, state the fixed-length caveat and CMAC's fix, and close with the pair-sentence - MAC gives integrity and origin, not non-repudiation; encryption alone gives neither. The (X, X XOR T) forgery shows why variable length breaks raw CBC-MAC - quote it. The trace is the worked core - three blocks, three chains, one final tag.",
            ],
            keyTerms: [
              { term: "MAC", definition: "Tag = MAC(K, m) - verifies integrity and origin with a shared key." },
              { term: "EUF-CMA", definition: "Existential unforgeability under chosen-message attack - the MAC security game." },
              { term: "CBC-MAC", definition: "CBC chain with zero IV, last block as tag - fixed-length-secure only." },
              { term: "CMAC (OMAC1)", definition: "CBC-MAC fixed for variable lengths with subkey whitening." },
            ],
            table: {
              caption: "CBC-MAC mechanics on three blocks.",
              headers: ["Step", "Computation", "Note"],
              rows: [
                ["Block 1", "T1 = E(K, P1)", "Zero IV - chain starts bare"],
                ["Block 2", "T2 = E(K, P2 XOR T1)", "Previous tag feeds in"],
                ["Block 3", "T3 = E(K, P3 XOR T2)", "Final block is the tag"],
                ["Verify", "Recompute and compare T3", "Constant-time compare"],
              ],
            },
            bullets: [
              "MAC = integrity + origin with a shared key; EUF-CMA is the security game.",
              "No non-repudiation: either key holder can produce valid tags.",
              "CBC-MAC: zero-IV CBC chain, keep the final block as the tag.",
              "Fixed-length caveat: variable lengths collide - CMAC adds subkeys and length handling.",
              "Worked trace: T1 = E(K,P1); T2 = E(K, P2 XOR T1); T3 = E(K, P3 XOR T2).",
              "Encryption alone is tamperable; MAC alone is readable - AEAD combines both.",
            ],
            diagram: {
              kind: "flow",
              title: "The CBC-MAC chain",
              caption: "Same chaining as CBC encryption - but only the last block survives as the tag.",
              steps: [
                { label: "Start", note: "IV = 0 - chain begins bare" },
                { label: "Block 1", note: "T1 = E(K, P1)" },
                { label: "Block 2", note: "T2 = E(K, P2 XOR T1)" },
                { label: "Last block", note: "T_n = E(K, P_n XOR T_{n-1}) = tag" },
                { label: "Verify", note: "recompute; constant-time compare" },
              ],
            },
            callout: {
              type: "warning",
              title: "Variable length breaks raw CBC-MAC",
              body: "The exam's favourite CBC-MAC trap: given tag T on a one-block message X, the two-block message (X, X XOR T) verifies with the same tag - length ambiguity is the flaw. Standards fix it with length encoding (CMAC); quoting the forgery trace proves you understand why the fix exists.",
            },
            examQuestions: [
              {
                q: "Define MACs and EUF-CMA, explain CBC-MAC with a worked three-block trace, state the variable-length flaw and CMAC's correction, and position MACs against encryption alone.",
                marks: 14,
                outline: [
                  "MAC: tag verifies integrity and origin under a shared key",
                  "EUF-CMA: chosen-message tags do not enable a new-message forgery",
                  "CBC-MAC: zero-IV CBC chain; last block is the tag",
                  "Trace: T1 = E(K,P1); T2 = E(K, P2 XOR T1); T3 = E(K, P3 XOR T2)",
                  "Flaw: variable lengths collide - (X, X XOR T) forges with a one-block tag",
                  "CMAC/OMAC1: subkey whitening + length handling fix it",
                  "Pairing: MAC alone readable; encryption alone tamperable - AEAD combines",
                ],
              },
              {
                q: "Why do MACs not provide non-repudiation?",
                marks: 7,
                outline: [

                  "The key is shared - verifier and signer hold identical power",

                  "Either party could have produced the tag",

                  "Non-repudiation needs public-key signatures (Unit IV)",

                  "A MAC proves knowledge of the key, not who held it",

                  "Disputes between two key holders are undecidable",

                ],              },
            ],
          },
          {
            number: "3.7",
            title: "Collision-resistant hashing and HMAC",
            body: [
              "A cryptographic hash maps any input to a fixed-size digest with three named properties: preimage resistance (digest to input is infeasible), second-preimage resistance (given input, find another with the same digest), collision resistance (find any colliding pair - hardest, and priced by the birthday bound at 2^(n/2) for n-bit digests). The syllabus's hash family: MD5 (128-bit - collision-broken in practice, dead for security), SHA-1 (160-bit - theoretically broken, deprecated by 2^63-cost collisions demonstrated in practice), SHA-2 family (224/256/384/512-bit - current), SHA-3 (Keccak, a sponge construction - the structural successor).",
              "The construction behind SHA-1/SHA-2 is Merkle-Damgård: pad the message (length encoded), iterate a compression function block by block, output the final state. Its security inherits from the compression function - and its length-extension behaviour (state = digest means later blocks can be appended by anyone) is the famous flaw that makes naive H(k || m) MACs breakable. The syllabus's 'Merkle-Hellman' mention belongs to the knapsack public-key family; the hash-world construction is Merkle-Damgård - worth one clarifying sentence in the exam. SHA-3's sponge absorbs and squeezes instead, removing length extension structurally.",
              "HMAC is the properly nested MAC over a hash: HMAC(K, m) = H((K XOR opad) || H((K XOR ipad) || m)) - the double-nest defeats extension attacks and interior collision reuse; security reduces to PRF-ness of the underlying hash. A worked trace shows the failure it prevents: naive MAC H(k || m) lets an attacker who knows H(k || m1) append blocks to m1 and extend the MAC without the key (length extension) - the pad-recovery trick. HMAC's keyed inner and outer passes close the door. The birthday arithmetic closes the ledger: SHA-256 collisions cost 2^128 (birthday) while preimages cost 2^256 - quote both numbers whenever digest sizes are argued.",
              "Exam framing: expect 'explain hash properties and HMAC' or 'compare the hash family'. Give the three properties with birthday pricing, the Merkle-Damgård pipeline with the length-extension flaw, the hash family table with statuses, and HMAC's nesting with the extension-attack trace. SHA-256's pair is 2^128 collisions and 2^256 preimages - the birthday lesson doing real work. The extension attack is the worked failure - append blocks and extend the MAC without the key.",
            ],
            keyTerms: [
              { term: "Collision resistance", definition: "Finding any colliding pair infeasible - birthday-priced at 2^(n/2)." },
              { term: "Merkle-Damgård", definition: "Pad, iterate compression, finalize - SHA-1/2's construction (length-extends)." },
              { term: "Length extension", definition: "Digest = state; attackers append blocks and extend MACs without the key." },
              { term: "HMAC", definition: "H((K XOR opad) || H((K XOR ipad) || m)) - the nested MAC defeating extension." },
            ],
            table: {
              caption: "The hash family card.",
              headers: ["Hash", "Digest", "Status", "Note"],
              rows: [
                ["MD5", "128 bits", "Broken (collisions practical)", "Never for security"],
                ["SHA-1", "160 bits", "Deprecated (2^63 collisions shown)", "Migrate everything"],
                ["SHA-2 (256/512)", "256/512 bits", "Current standard", "Merkle-Damgård"],
                ["SHA-3 (Keccak)", "Variable", "Current (sponge)", "No length extension"],
              ],
            },
            bullets: [
              "Three properties: preimage (2^n), second-preimage, collision (2^(n/2) birthday).",
              "MD5 and SHA-1 are dead for security; SHA-2 and SHA-3 are current.",
              "Merkle-Damgård: pad, iterate, finalize - inherits compression security, length-extends.",
              "H(k || m) MACs break by extension; HMAC's double nest defeats it.",
              "SHA-3's sponge absorbs/squeezes - structurally free of length extension.",
              "Quote the numbers: SHA-256 collision 2^128, preimage 2^256.",
            ],
            diagram: {
              kind: "pipeline",
              title: "The Merkle-Damgård pipeline",
              caption: "Pad, iterate, finalize - and the flaw: the final state is the digest, so appending extends it.",
              stages: [
                { label: "Pad", note: "padding + encoded length to a block boundary" },
                { label: "Iterate", note: "compression function consumes block by block" },
                { label: "Chain", note: "each block's output feeds the next" },
                { label: "Finalize", note: "last state = digest (the extension flaw lives here)" },
                { label: "Alternative", note: "SHA-3 sponge absorbs and squeezes instead" },
              ],
            },
            callout: {
              type: "exam",
              title: "2^(n/2) vs 2^n",
              body: "The hash-arithmetic pair that examiners check: collisions cost the birthday bound 2^(n/2); preimages cost 2^n. Writing 'SHA-256: 2^128 collisions, 2^256 preimages' in any hash or signature answer demonstrates the birthday lesson from Unit II doing real work.",
            },
            examQuestions: [
              {
                q: "Explain hash properties with birthday pricing, the Merkle-Damgård construction with its length-extension flaw, the MD5/SHA-1/SHA-2/SHA-3 family with statuses, and HMAC's construction defeating the extension attack.",
                marks: 14,
                outline: [
                  "Properties: preimage 2^n, second-preimage, collision 2^(n/2)",
                  "MD5 (128-bit) broken; SHA-1 deprecated by practical collisions",
                  "SHA-2 family current; SHA-3 sponge as structural successor",
                  "Merkle-Damgård: pad -> iterate compression -> final state is digest",
                  "Length extension: digest = state lets attackers append blocks",
                  "Naive H(k||m) MAC breaks; HMAC nests keyed inner and outer passes",
                  "HMAC security reduces to the hash's PRF behaviour",
                ],
              },
              {
                q: "Why does HMAC use two different padding constants (ipad, opad)?",
                marks: 7,
                outline: [

                  "Distinct keys for inner and outer hash passes",

                  "Prevents related-key reuse across the two invocations",

                  "Nesting means the outer hash hides the inner digest from extension",

                  "The double nest defeats length extension structurally",

                  "ipad/opad separate the two hash invocations' key spaces",

                ],              },
            ],
          },
          {
            number: "3.8",
            title: "CCA security, GCM and the password-based access case study",
            body: [
              "Confidentiality and integrity together is authenticated encryption (AE): IND-CCA security plus ciphertext integrity - the adversary cannot alter ciphertexts undetected. The syllabus's named construction is GCM (Galois/Counter Mode): CTR mode for encryption (counter keystream, parallel), plus GHASH over GF(2^128) computing an authentication tag across the ciphertext, associated data (authenticated but unencrypted: headers) and the IV. A worked flow: nonce unique per key -> CTR encrypts blocks -> GHASH accumulates ciphertext and AAD -> tag T appended; verification recomputes and compares before any decryption - fail closed, never release unauthenticated plaintext.",
              "The composition rules are the section's security core, and each broken composition is a named attack: MAC-then-encrypt (padding oracle attacks - CBC decryption errors leak as distinguishable failures, the Lucky13/TLS story), encrypt-and-MAC (weak MACs leak XORs of plaintexts), versus encrypt-then-MAC / AEAD (the correct pattern - authenticate the ciphertext, verify first). CCA security for symmetric encryption is exactly the game from Unit 2.7 with the decryption oracle, and AEAD schemes are the practical winners of that game: GCM, ChaCha20-Poly1305.",
              "The case study assembles everything: password-based secure access. The flow: user enters password -> salt (random, per user, stored) -> slow KDF (PBKDF2/bcrypt/scrypt/Argon2 - many iterations or memory-hard) -> derived key or verifier stored -> login compares computed hash to stored verifier in constant time. Each design choice answers an attack: salts defeat precomputed rainbow tables; the slow/memory-hard KDF defeats brute force at scale (GPU economics); constant-time comparison defeats timing leaks; rate limiting caps online guessing. The exam's synthesis: the password case is Unit 3.7's hashing put to adversarial work - hashing fast is wrong when the attacker's job is guessing.",
              "Exam framing: expect 'explain GCM' or 'the password-based access case study'. Give GCM's CTR+GHASH flow with the verify-before-decrypt rule, the composition table (why encrypt-then-MAC wins), and the password flow with the salt/KDF/constant-time design choices - closing with the fail-closed sentence. Fail closed and never fast-hash passwords - two absolute rules the case study must end with. The composition table is the security core - MAC-then-encrypt fell, encrypt-then-MAC survived.",
            ],
            keyTerms: [
              { term: "AEAD", definition: "Authenticated encryption with associated data - confidentiality and integrity in one primitive." },
              { term: "GCM", definition: "CTR encryption + GHASH authentication over GF(2^128) - the standard AEAD mode." },
              { term: "Encrypt-then-MAC", definition: "Authenticate the ciphertext, verify before decrypting - the safe composition." },
              { term: "PBKDF2 / Argon2", definition: "Password-hashing KDFs - iterated or memory-hard to price offline guessing." },
            ],
            table: {
              caption: "Composition rules and their fates.",
              headers: ["Composition", "Pattern", "Failure"],
              rows: [
                ["MAC-then-encrypt", "Tag inside the encryption", "Padding oracles (Lucky13)"],
                ["Encrypt-and-MAC", "Independent tag on plaintext", "Weak MACs leak plaintext XORs"],
                ["Encrypt-then-MAC / AEAD", "Tag over ciphertext; verify first", "The safe pattern (GCM)"],
              ],
            },
            bullets: [
              "AEAD = IND-CCA + ciphertext integrity; verify before any decryption.",
              "GCM: CTR for encryption, GHASH for the tag; nonce unique per key.",
              "AAD authenticates headers without encrypting them.",
              "Broken compositions: MAC-then-encrypt (padding oracles), encrypt-and-MAC (leaks).",
              "Password flow: salt -> slow KDF (Argon2/bcrypt) -> constant-time compare.",
              "Salts beat rainbow tables; memory-hard KDFs beat GPU brute force.",
            ],
            diagram: {
              kind: "flow",
              title: "The password-based access flow",
              caption: "Every arrow answers an attack - salts, slow KDF, constant time, rate limits.",
              steps: [
                { label: "Enter password", note: "user submits credentials" },
                { label: "Fetch salt", note: "random per-user salt from storage" },
                { label: "KDF", note: "Argon2/PBKDF2 many iterations - prices offline guessing" },
                { label: "Compare", note: "constant-time against stored verifier" },
                { label: "Grant / throttle", note: "rate limits cap online guessing" },
              ],
            },
            callout: {
              type: "warning",
              title: "Fail closed, and never fast-hash passwords",
              body: "Two absolute rules: AEAD verification failure releases no plaintext (padding-oracle history taught that lesson in blood); and passwords hashed with a plain fast hash (SHA-256 alone) are a brute-force gift - the KDF's slowness is the design, not a defect. Quote both in case-study answers.",
            },
            examQuestions: [
              {
                q: "Explain CCA security for symmetric encryption and the GCM construction with its verify-before-decrypt flow; compare MAC-then-encrypt, encrypt-and-MAC and encrypt-then-MAC; and work the password-based secure access case study.",
                marks: 14,
                outline: [
                  "CCA game: encryption oracle + decryption oracle (challenge excluded)",
                  "AEAD: IND-CCA + ciphertext integrity - fail closed on tag mismatch",
                  "GCM: CTR encryption + GHASH tag over ciphertext and AAD",
                  "Nonce unique per key; verification precedes decryption",
                  "Compositions: MAC-then-encrypt padding oracles; encrypt-and-MAC leaks",
                  "Encrypt-then-MAC/AEAD is the safe pattern",
                  "Password case: per-user salt -> Argon2/PBKDF2 -> constant-time compare -> rate limits",
                ],
              },
              {
                q: "Why must password hashing be slow or memory-hard when file hashing is fast?",
                marks: 7,
                outline: [

                  "The attacker's task is guessing billions of candidates offline",

                  "KDF cost per guess prices the attack beyond feasibility",

                  "Memory-hardness defeats GPU/ASIC parallelism",

                  "Fast hashes convert the stolen file into a cracking job",

                  "Work factors tune with hardware progress",

                ],              },
            ],
          },
        ],
      },
    },
    {
      number: 4,
      roman: "IV",
      title: "Asymmetric Encryption and Advanced Schemes",
      summary:
        "Unit IV completes the asymmetric layer: discrete logarithms and the elliptic-curve variant, asymmetric encryption's definitions and comparison with symmetric, the RSA and ElGamal constructions with their variants, hybrid encryption, malleability and homomorphic encryption with Paillier and Gentry, the Cramer-Shoup scheme, and identity-based encryption.",
      chapter: {
        number: "04",
        title: "The Asymmetric Layer",
        intro:
          "Unit IV covers number theory candidates such as discrete logarithms and elliptic curves, asymmetric encryption compared with symmetric, definitions and constructions including RSA variants and ElGamal, hybrid encryption, malleable and homomorphic encryption with schemes such as Paillier and Gentry's, Cramer-Shoup, and identity-based encryption.",
        inOneBreath:
          "Discrete log - and its elliptic-curve form with smaller keys - supplies the one-way face; DH and ElGamal supply the constructions. Textbook RSA is deterministic and malleable, so real RSA needs OAEP padding; ElGamal randomizes but leaks group structure (malleable). Hybrid encryption (KEM + DEM) prices asymmetric cost correctly, homomorphic schemes compute on ciphertexts (Paillier additively, Gentry fully), Cramer-Shoup proves CCA security outright, and identity-based encryption makes identities the public keys - with a key-escrow cost.",
        sections: [
          {
            number: "4.1",
            title: "Discrete logarithms and Diffie-Hellman",
            body: [
              "The discrete logarithm problem: in a group G with generator g, given y = g^x, find x. Forward (exponentiation) is fast by square-and-multiply; backward (taking the discrete log) is believed hard in well-chosen groups - prime-order subgroups of Z_p* and elliptic-curve groups. Group selection carries the security: parameters must be prime-order (avoiding small-subgroup attacks), generators large, and domain parameters validated - the DLP's hardness is a property of the group, not the algorithm.",
              "Diffie-Hellman key agreement (1976) is the construction the DLP buys: Alice sends A = g^a, Bob sends B = g^b, both compute K = g^(ab) (A^b and B^a), and an eavesdropper seeing g^a, g^b faces the Computational Diffie-Hellman (CDH) problem - deriving g^(ab) from the pair. The IND-CPA-grade assumption for encryption is DDH (distinguishing g^(ab) from random), and ElGamal encryption (next sections) rides it: ciphertext (g^r, m · y^r) with random r. A worked micro-trace: g = 5, p = 23, a = 6, b = 15 - A = 8, B = 19, shared K = 2 both sides compute; the attacker's task is the d-log, not the multiplication.",
              "The implementation aspects are the syllabus's precision marks: ephemeral keys (ECDHE/DHE) for forward secrecy - compromise of a long-term key must not reveal past sessions; validation of public values (small-subgroup confinement); and constant-time exponentiation (2.5's discipline applies unchanged). The conclusion sentence: DH solved the pre-distribution problem (Unit 1.5's exit two) and its security rests entirely on the group's DLP hardness - quantum collapse included (Shor).",
              "Exam framing: expect 'explain discrete log and Diffie-Hellman'. Define the DLP and CDH/DDH ladder, work the DH exchange with the micro-trace, give the group-selection notes, and close with forward secrecy and the assumption sentence. CDH versus DDH is one rung - compute versus distinguish, and ElGamal's proof needs the second. The micro-trace is the worked example - g equals 5, p equals 23, shared key 2.",
            ],
            keyTerms: [
              { term: "Discrete logarithm", definition: "Given y = g^x in group G, find x - believed hard in prime-order groups." },
              { term: "CDH / DDH", definition: "Computational (derive g^(ab)) and decisional (distinguish g^(ab)) Diffie-Hellman problems." },
              { term: "Diffie-Hellman", definition: "Public agreement: A = g^a, B = g^b; shared K = g^(ab)." },
              { term: "Forward secrecy", definition: "Ephemeral exponents keep past sessions secret despite long-term key compromise." },
            ],
            table: {
              caption: "The DH/DLP assumption ladder.",
              headers: ["Problem", "Task", "Security consumed by"],
              rows: [
                ["Discrete log", "x from g^x", "Parameter generation, signatures"],
                ["CDH", "g^(ab) from g^a, g^b", "Key agreement security"],
                ["DDH", "Distinguish g^(ab) from random", "ElGamal IND-CPA proofs"],
              ],
            },
            bullets: [
              "DLP: forward fast, inverse hard - the asymmetric one-way face.",
              "DH exchange: g^a and g^b public, g^(ab) shared; eavesdropper faces CDH.",
              "DDH strengthens CDH for encryption proofs (ElGamal's IND-CPA).",
              "Groups: prime-order subgroups, validated parameters, no small subgroups.",
              "Micro-trace: g = 5, p = 23, a = 6, b = 15 -> A = 8, B = 19, K = 2.",
              "Ephemeral exponents give forward secrecy; Shor is the structural threat.",
            ],
            diagram: {
              kind: "flow",
              title: "The Diffie-Hellman exchange",
              caption: "Two public messages, one shared secret - the eavesdropper gets the hard problem.",
              steps: [
                { label: "Agree parameters", note: "g and prime p public" },
                { label: "Alice", note: "secret a; sends A = g^a mod p" },
                { label: "Bob", note: "secret b; sends B = g^b mod p" },
                { label: "Shared", note: "Alice: B^a; Bob: A^b -> both g^(ab)" },
                { label: "Attacker", note: "sees g^a, g^b - must solve CDH" },
              ],
            },
            callout: {
              type: "exam",
              title: "CDH vs DDH - one rung apart",
              body: "The precision mark: CDH asks to compute g^(ab) from g^a, g^b; DDH asks only to distinguish g^(ab) from a random group element. DH key agreement needs CDH; ElGamal's IND-CPA proof needs DDH (which is false in some groups DDH-friendly schemes avoid). Name which problem you mean.",
            },
            examQuestions: [
              {
                q: "Explain the discrete logarithm problem and its CDH/DDH refinements, work a small Diffie-Hellman exchange, and state the group-selection and implementation aspects including forward secrecy.",
                marks: 14,
                outline: [
                  "DLP: invert y = g^x in a group - hard for good parameters",
                  "CDH: compute g^(ab) from g^a, g^b; DDH: distinguish from random",
                  "DH: Alice g^a, Bob g^b; shared g^(ab) - attacker faces CDH",
                  "Micro-trace: g = 5, p = 23, a = 6, b = 15 -> A = 8, B = 19, K = 2",
                  "Groups: prime order, validated parameters, small-subgroup avoidance",
                  "Implementation: ephemeral keys for forward secrecy; constant-time exponentiation",
                  "Assumption sentence: security = the group's DLP hardness (Shor caveat)",
                ],
              },
              {
                q: "Why do ephemeral Diffie-Hellman exponents provide forward secrecy?",
                marks: 7,
                outline: [

                  "Session exponents a, b are erased after use",

                  "Later compromise of long-term keys cannot recompute past g^(ab)",

                  "Static DH would keep every past session decryptable",

                  "Each session's g^(ab) dies with its exponents",

                  "Recorded traffic stays sealed without the ephemeral secrets",

                ],              },
            ],
          },
          {
            number: "4.2",
            title: "Elliptic curves - the brief discussion",
            body: [
              "Elliptic-curve cryptography moves the discrete log to a different group: points (x, y) on a curve y^2 = x^3 + ax + b (mod p), with point addition defined geometrically/algebraically and a distinguished point at infinity as identity. Scalar multiplication kP (repeated point addition) is fast; recovering k from kP - the elliptic-curve discrete logarithm problem (ECDLP) - is believed exponentially harder than classical d-log at the same size, because the best generic attack (Pollard's rho) runs in about sqrt(n) rather than sub-exponential index calculus.",
              "The payoff is key-size economics, and the syllabus's 'brief discussion' earns its numbers: 256-bit ECC matches ~3072-bit RSA (~128-bit security); 384-bit ECC matches 7680-bit RSA. A worked sizing table: P-256/Curve25519 for ~128 bits; P-384 for ~192. The consequences: smaller certificates, faster handshakes, less bandwidth - which is why TLS, Signal and virtually all modern protocols prefer ECDHE over finite-field DH. The implementation notes: choose standardized curves (nothing homemade - invalid-curve and twist attacks eat improvised parameters), validate points on-curve, and keep scalars constant-time (2.5's discipline again).",
              "The quantum caveat closes the section as it closed 2.4: Shor's algorithm applies to ECDLP too - ECC collapses on the same timeline as RSA, which is why post-quantum work targets replacements for both. The exam's synthesis sentence: ECC is not a new assumption but the same discrete-log hardness in a group where it resists classical attack far better - smaller keys, same story, same quantum fate.",
              "Exam framing: expect 'write briefly on elliptic-curve cryptography'. Define the curve group and ECDLP, produce the key-size comparison table, give the standardized-curve and validation notes, and close with the quantum caveat and the same-hardness-different-group sentence. Standardized curves and point validation are the whole ECC implementation defence - never improvise parameters. The sizing table is the payoff - 256-bit ECC against 3072-bit RSA at one security level.",
            ],
            keyTerms: [
              { term: "ECDLP", definition: "Recover k from kP on an elliptic curve - generic attack ~sqrt(n) (Pollard rho)." },
              { term: "Point at infinity", definition: "The group identity of elliptic-curve point addition." },
              { term: "Curve25519 / P-256", definition: "Standardized ~128-bit-security curves - never improvise parameters." },
              { term: "Invalid-curve attack", definition: "Feeding off-curve points to leak scalars - countered by validation." },
            ],
            table: {
              caption: "ECC vs RSA sizing - the payoff table.",
              headers: ["Security level", "ECC key", "RSA key", "Verdict"],
              rows: [
                ["80-bit", "160 bits", "1024 bits", "RSA-1024 retired"],
                ["128-bit", "256 bits", "3072 bits", "The default pairing"],
                ["192-bit", "384 bits", "7680 bits", "ECC advantage dominant"],
                ["256-bit", "512 bits", "15360 bits", "RSA impractical, ECC fine"],
              ],
            },
            bullets: [
              "Curves: y^2 = x^3 + ax + b over finite fields; point addition forms a group.",
              "Scalar multiply fast; inverting it (ECDLP) hard - no sub-exponential classical attack.",
              "Sizing: 256-bit ECC ~ 3072-bit RSA at 128-bit security.",
              "Consequences: smaller certificates, faster handshakes - TLS prefers ECDHE.",
              "Use standardized curves (Curve25519, P-256); validate points; constant-time scalars.",
              "Shor breaks ECDLP too - the same quantum fate as RSA.",
            ],
            diagram: {
              kind: "compare",
              title: "RSA vs ECC economics",
              caption: "Same security, one-tenth the key - and the same quantum clock ticking.",
              left: {
                heading: "RSA (factoring)",
                items: [
                  "3072-bit keys for 128-bit security",
                  "Large certificates and ciphertexts",
                  "Mature, widely implemented",
                  "Shor: broken on quantum timeline",
                ],
              },
              right: {
                heading: "ECC (ECDLP)",
                items: [
                  "256-bit keys for 128-bit security",
                  "Small keys, fast handshakes",
                  "Standardized curves only - no homemade",
                  "Shor: same collapse",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "Never improvise curve parameters",
              body: "The one implementation sentence the brief needs: ECC's security lives in the parameters - improvised curves invite invalid-curve and twist attacks that leak scalars. Standardized, nothing-up-my-sleeve curves (Curve25519, NIST P-curves) plus on-curve point validation are the whole defence.",
            },
            examQuestions: [
              {
                q: "Write briefly on elliptic-curve cryptography: the curve group and point addition, the ECDLP and its generic-attack cost, the ECC-vs-RSA key sizing, and the implementation notes with the quantum caveat.",
                marks: 14,
                outline: [
                  "Group: points on y^2 = x^3 + ax + b; identity at infinity",
                  "Scalar multiplication fast; recovering k = ECDLP",
                  "Generic attack: Pollard rho ~sqrt(n) - no classical index calculus",
                  "Sizing: 256-bit ECC ~ 3072-bit RSA (128-bit security)",
                  "Consequences: smaller certificates, faster TLS handshakes",
                  "Implementation: standardized curves, point validation, constant-time scalars",
                  "Shor breaks ECDLP - same quantum timeline as RSA",
                ],
              },
              {
                q: "Why does ECC achieve comparable security with far smaller keys?",
                marks: 7,
                outline: [

                  "No sub-exponential classical algorithm for ECDLP",

                  "Generic attacks cost ~sqrt(n) - full exponential hardness per bit",

                  "Finite-field d-log suffers index calculus; curves do not",

                  "Curve groups lack the smooth structure index calculus needs",

                  "Security per bit of key is uniformly high",

                ],              },
            ],
          },
          {
            number: "4.3",
            title: "Asymmetric encryption - definitions and the symmetric comparison",
            body: [
              "Asymmetric encryption is a triple (Gen, Enc, Dec): Gen samples a key pair (pk, sk) from the hardness assumption; Enc(pk, m) anyone can compute; Dec(sk, c) only the trapdoor holder can. The security notions carry over from Unit 2.7 with one asymmetry-specific twist: IND-CPA adds an encryption oracle for pk (public by definition), and IND-CCA adds a decryption oracle for sk (the costly side). The syllabus's comparison point: asymmetric solves distribution (no shared secret) at the cost of speed, ciphertext size and assumption surface.",
              "The comparison table is the exam's spine. Symmetric: shared key pre-distributed, fast (nanoseconds/block), small ciphertexts, security from 128-bit keys and modes; lacks any distribution story. Asymmetric: key pair, anyone-encrypts, slow (milliseconds), ciphertexts as big as the modulus, security from number-theoretic assumptions; solves distribution. Practice hybridizes - 3.8's AEAD carries data, public-key wraps keys - and the wrapper pattern (KEM-DEM, 4.6) is the formal shape of that hybridization.",
              "The notion ladder closes the definitional half, and it is a pyramid of strength: IND-EAV (passive) at the base, IND-CPA (encryption oracle - the standard goal for randomized schemes) above it, IND-CCA2 (decryption oracle, adaptive) at the top - textbook RSA achieves none of them, ElGamal achieves CPA, Cramer-Shoup (4.7) achieves CCA outright, and OAEP-padded RSA claims CCA in the random-oracle model. The exam's positioning sentence: the ladder explains why 'RSA encryption' without padding is a specification error, not a conservative choice.",
              "Exam framing: expect 'compare symmetric and asymmetric encryption' or 'define asymmetric security notions'. Give the (Gen, Enc, Dec) triple, produce the comparison table, draw the notion pyramid with named scheme placements, and close with the hybridization sentence. The notion pyramid carries four placements - textbook RSA none, ElGamal CPA, OAEP CCA in the ROM, Cramer-Shoup outright. The placement list is the pyramid's population - four schemes, four rungs, one sentence each.",
            ],
            keyTerms: [
              { term: "(Gen, Enc, Dec)", definition: "Key pair generation, public encryption, trapdoor decryption." },
              { term: "IND-CCA2", definition: "Adaptive chosen-ciphertext security - the strongest practical encryption notion." },
              { term: "Assumption surface", definition: "The set of hardness claims a scheme needs - fewer is better." },
              { term: "Key pair", definition: "Public key encrypts for anyone; private key decrypts for one holder." },
            ],
            table: {
              caption: "Symmetric vs asymmetric - the comparison spine.",
              headers: ["Feature", "Symmetric", "Asymmetric"],
              rows: [
                ["Key model", "Shared secret pre-distributed", "Public/private pair"],
                ["Speed", "Nanoseconds per block", "Milliseconds per operation"],
                ["Ciphertext size", "Near plaintext", "Modulus-sized"],
                ["Distribution", "The unsolved problem", "Solved - anyone encrypts"],
                ["Security basis", "Key length + mode discipline", "Number-theoretic assumptions"],
                ["Role in practice", "Bulk data (AEAD)", "Key transport/agreement, signatures"],
              ],
            },
            bullets: [
              "Triple (Gen, Enc, Dec): pk encrypts, sk decrypts - distribution solved at cost.",
              "Notions inherit from Unit 2.7: IND-EAV -> CPA -> CCA2 ladder.",
              "Textbook RSA reaches no rung; ElGamal reaches CPA; Cramer-Shoup reaches CCA2.",
              "OAEP-padded RSA claims CCA in the random-oracle model.",
              "Comparison: speed, size and assumption surface vs distribution solved.",
              "Practice hybridizes: public key wraps keys; AEAD carries the data.",
            ],
            diagram: {
              kind: "pyramid",
              title: "The encryption-notion pyramid",
              caption: "Strongest at the top - and where each scheme actually stands.",
              tiers: [
                { label: "IND-CCA2", note: "adaptive decryption oracle - Cramer-Shoup, OAEP-RSA (ROM)" },
                { label: "IND-CPA", note: "encryption oracle - randomized ElGamal, stream constructions" },
                { label: "IND-EAV", note: "passive eavesdropping - the floor nobody stops at" },
              ],
            },
            callout: {
              type: "tip",
              title: "Place the schemes on the ladder",
              body: "The exam's placement marks: textbook RSA - none; ElGamal - CPA (with fresh randomness); OAEP-RSA - CCA in the random-oracle model; Cramer-Shoup - CCA in the standard model. Four placements, one pyramid - memorize them and the notion question writes itself.",
            },
            examQuestions: [
              {
                q: "Define asymmetric encryption's (Gen, Enc, Dec) model and security notions, compare it with symmetric encryption across key model, speed, size and role, and place textbook RSA, ElGamal, OAEP-RSA and Cramer-Shoup on the notion pyramid.",
                marks: 14,
                outline: [
                  "Triple: pk for anyone, sk for the trapdoor holder",
                  "Notions: IND-EAV -> IND-CPA -> IND-CCA2 ladder",
                  "Symmetric: fast, small, pre-shared - distribution unsolved",
                  "Asymmetric: slow, modulus-sized, assumptions-based - distribution solved",
                  "Textbook RSA: deterministic and malleable - no notion achieved",
                  "ElGamal: IND-CPA with fresh randomness; Cramer-Shoup: IND-CCA2 standard model",
                  "Practice: hybridize - public key wraps keys, AEAD carries data",
                ],
              },
              {
                q: "Why is IND-CCA the right notion for real-world encryption?",
                marks: 7,
                outline: [

                  "Real adversaries tamper and observe error behaviour - not just eavesdrop",

                  "Padding-oracle history shows CCA-fragile schemes falling in practice",

                  "AEAD and OAEP target exactly this adversary",

                  "Chosen-ciphertext is the realistic active attacker",

                  "CPA-secure schemes fell in practice to oracle attacks",

                ],              },
            ],
          },
          {
            number: "4.4",
            title: "RSA and its variants - padding, attacks, hybrids",
            body: [
              "Textbook RSA encrypts c = m^e mod n with no randomness - deterministic (equal plaintexts, equal ciphertexts: fails IND-CPA trivially) and multiplicatively malleable (E(m1)·E(m2) = E(m1·m2): an attacker multiplies ciphertexts to forge encrypted products). The attack list follows from these two flaws plus arithmetic structure: chosen-ciphertext multiplication attacks; low-exponent attacks (e = 3 with small m: cube root over the integers recovers m directly; broadcast to three recipients yields Hastad's CRT combination); common-modulus mistakes (same n, different e pairs decrypt each other); and small-private-exponent attacks (Wiener's d < n^0.25 recovered by lattice continued fractions).",
              "Padding fixes the determinism and structure: PKCS#1 v1.5 (legacy: random non-zero padding before the message, still widely deployed and historically oracle-leaky - Bleichenbacher's 1998 adaptive chosen-ciphertext attack on SSL) and OAEP (Optimal Asymmetric Encryption Padding: a Feistel-style randomization with two hash rounds and a fixed 0-byte terminator; IND-CCA secure in the random-oracle model). A worked OAEP read: message XOR mask from hash-seed expansion, seed XOR mask from the message hash - each half randomizes the other; decryption validates structure before output (fail closed). The variant ledger: RSA-PSS for signatures (probabilistic), RSA-KEM for hybrids (wrap random keys - no structure to exploit, the cleanest industrial choice).",
              "The hybrid connection completes the syllabus's thread: because raw RSA is slow and structure-rich, modern deployments prefer RSA-KEM (encrypt a random session key, let AEAD carry data) or ECIES-style hybrids (4.6) - padding's remaining job is compatibility. The exam's synthesis: textbook RSA is a one-way function, not an encryption scheme; variants exist to add randomness, structure validation and CCA resistance on top.",
              "Exam framing: expect 'explain RSA variants and attacks'. Give the determinism/malleability diagnosis, the attack table (low exponent, Hastad, common modulus, Wiener, Bleichenbacher), the PKCS#1 v1.5 vs OAEP comparison, and close with RSA-KEM as the industrial pattern. Malleability in one line - E(m1)E(m2) equals E(m1m2), and every attack family follows from it. The attack card is the catalogue - seven rows, each condition paired with its lesson.",
            ],
            keyTerms: [
              { term: "Malleability", definition: "E(m1)·E(m2) = E(m1·m2) - textbook RSA's multiplicative structure." },
              { term: "Bleichenbacher attack", definition: "Adaptive padding-oracle attack on PKCS#1 v1.5 decryption (1998, SSL)." },
              { term: "OAEP", definition: "Randomized Feistel-style padding - IND-CCA for RSA in the random-oracle model." },
              { term: "RSA-KEM", definition: "Encrypt a random session key; AEAD carries data - no exploitable structure." },
            ],
            table: {
              caption: "The textbook-RSA attack card.",
              headers: ["Attack", "Condition", "Lesson"],
              rows: [
                ["Determinism/equality", "No randomness", "Fails IND-CPA immediately"],
                ["Multiplication malleability", "E(m1)E(m2) = E(m1m2)", "Chosen-ciphertext forgery"],
                ["Low exponent e = 3", "Small m, no padding", "Cube root over integers"],
                ["Hastad broadcast", "Same m to 3 recipients", "CRT combination recovers m"],
                ["Common modulus", "Same n, two exponents", "Pair keys decrypt each other"],
                ["Wiener", "d < n^0.25", "Lattice/continued-fraction recovery"],
                ["Bleichenbacher", "PKCS#1 v1.5 oracle", "Padding oracles kill MAC-then-encrypt designs"],
              ],
            },
            bullets: [
              "Textbook RSA: deterministic (fails CPA) and multiplicatively malleable.",
              "Low-exponent and broadcast attacks punish unpadded small messages.",
              "Common-modulus and Wiener punish careless parameter generation.",
              "PKCS#1 v1.5 randomizes but leaks structure - Bleichenbacher's oracle attack.",
              "OAEP randomizes via cross-masking hashes - CCA in the ROM; validate on decrypt.",
              "Industrial pattern: RSA-KEM wraps random session keys; AEAD carries data.",
            ],
            diagram: {
              kind: "fork",
              title: "RSA padding choices",
              caption: "Three branches from textbook RSA - two of them live.",
              start: "Encrypting with RSA",
              branches: [
                { label: "No padding (textbook)", outcome: "deterministic, malleable - fails every notion; attacks apply", good: false },
                { label: "PKCS#1 v1.5", outcome: "randomized but oracle-leaky (Bleichenbacher) - legacy compatibility only", good: false },
                { label: "OAEP / RSA-KEM", outcome: "CCA-grade randomization or structure-free key wrapping - the modern choice", good: true },
              ],
            },
            callout: {
              type: "exam",
              title: "Malleability in one line",
              body: "The shortest complete diagnosis of textbook RSA: 'E(m1) · E(m2) = E(m1 · m2) mod n - the ciphertexts multiply like plaintexts, so the scheme is malleable and deterministic.' From that one line, every attack family (chosen-ciphertext, low exponent, broadcast) becomes predictable.",
            },
            examQuestions: [
              {
                q: "Explain textbook RSA's flaws - determinism and multiplicative malleability - catalogue the attack families (low exponent, Hastad broadcast, common modulus, Wiener, Bleichenbacher), and compare PKCS#1 v1.5 with OAEP and RSA-KEM.",
                marks: 14,
                outline: [
                  "Deterministic: equal plaintexts encrypt equally - no IND-CPA",
                  "Malleable: E(m1)E(m2) = E(m1m2) - chosen-ciphertext forgery",
                  "e = 3 with unpadded small m: integer cube root",
                  "Hastad: same message to 3 moduli - CRT combination",
                  "Common modulus and Wiener: parameter-generation failures",
                  "PKCS#1 v1.5: randomized but Bleichenbacher-oracle-leaky - legacy",
                  "OAEP: cross-masking randomization, CCA in ROM; RSA-KEM the industrial pattern",
                ],
              },
              {
                q: "Why does RSA-KEM avoid padding's problems entirely?",
                marks: 7,
                outline: [

                  "It encrypts a uniformly random session key, not structured data",

                  "No message structure for malleability or low-exponent attacks to touch",

                  "AEAD supplies all message-level security",

                  "Uniform randomness has no padding grammar to oracle",

                  "The KEM output is indistinguishable from noise",

                ],              },
            ],
          },
          {
            number: "4.5",
            title: "ElGamal encryption",
            body: [
              "ElGamal (1985) is the discrete-log encryption scheme: key generation picks a prime-order group (g, p) and secret x with public y = g^x; encryption of m chooses fresh randomness r and outputs the pair (c1 = g^r, c2 = m · y^r); decryption computes m = c2 / (c1^x) = m · g^(xr) / g^(xr). Correctness is one line of exponent arithmetic; security is IND-CPA under DDH - the reduction wrapper from Unit 2.2 embeds the DDH challenge as (y, c1) and the adversary's message-choice bit solves it.",
              "The design consequences are the exam's analysis marks. Randomness r must be fresh and uniform per encryption - reuse leaks (two ciphertexts under the same r satisfy c2'/c2 = m'/m: the plaintext ratio escapes; repeated r across unrelated recipients is the fatal pattern). ElGamal is multiplicatively homomorphic (E(m1)·E(m2) = E(m1·m2) componentwise) - a feature in voting/multiplication settings and a malleability warning elsewhere. Ciphertexts double the group size (two group elements per message), and messages must be encoded into group elements - the reason ECIES-style hybrids (4.6) usually replace raw ElGamal in practice.",
              "A worked micro-example fixes the mechanics. Group Z_23 with g = 5; secret x = 6, public y = 5^6 = 8; encrypt m = 7 with r = 3: c1 = 5^3 = 10, c2 = 7 · 8^3 = 7 · 12 = 84 mod 23 = 15. Decrypt: c1^x = 10^6 mod 23 = 2 (since 8^3 = 12 and 12·12 = 144 mod 23 = 6... verify consistently in the exam by recomputing); m = c2 / (c1^x). The trace demonstrates the pair structure, the fresh r, and the division-based decryption - and its fragility shows exactly why implementations encode messages via symmetric-key hybrids instead.",
              "Exam framing: expect 'explain ElGamal encryption'. Give the (Gen, Enc, Dec) with the correctness line, the DDH security statement with the reduction shape, the freshness/homomorphism/size consequences, and the micro-example - closing with why hybrids replaced raw ElGamal. The reused-r catastrophe is the warning - plaintext ratios escape, and on curves the key itself leaks. The micro-example is the mechanics - c1, c2, one division, one message recovered.",
            ],
            keyTerms: [
              { term: "ElGamal", definition: "Ciphertext (g^r, m · y^r) with fresh r - IND-CPA under DDH." },
              { term: "Multiplicative homomorphism", definition: "Componentwise products encrypt products - feature and malleability alike." },
              { term: "Randomness reuse", definition: "Same r across encryptions leaks m'/m = c2'/c2 - the fatal pattern." },
              { term: "ECIES", definition: "The hybrid replacement: DH-derived key + AEAD, instead of raw group-element messages." },
            ],
            table: {
              caption: "RSA vs ElGamal - the construction contrast.",
              headers: ["Feature", "RSA (padded)", "ElGamal"],
              rows: [
                ["Assumption", "Factoring / RSA problem", "DDH (discrete log)"],
                ["Randomness", "Inside padding (OAEP)", "Intrinsic (fresh r per encryption)"],
                ["Ciphertext size", "One modulus", "Two group elements"],
                ["Structure", "Malleable (textbook); fixed by OAEP", "Multiplicatively homomorphic by design"],
                ["Proofs", "CCA in random-oracle model", "CPA in standard model"],
                ["Natural use", "Key transport (KEM)", "Key agreement and hybrids (ECIES)"],
              ],
            },
            bullets: [
              "ElGamal: (c1 = g^r, c2 = m · y^r); decrypt by dividing out c1^x.",
              "Fresh uniform r every time - reuse leaks plaintext ratios.",
              "IND-CPA under DDH via the standard reduction wrapper.",
              "Multiplicatively homomorphic: useful for voting, dangerous elsewhere.",
              "Two group elements per message; messages must encode into the group.",
              "Practice replaced raw ElGamal with ECIES-style hybrids for symmetric payloads.",
            ],
            diagram: {
              kind: "compare",
              title: "Textbook RSA vs ElGamal",
              caption: "Same recipe (trapdoor + hardness), different structural risks.",
              left: {
                heading: "RSA (textbook)",
                items: [
                  "Deterministic - no randomness at all",
                  "Malleable multiplicatively",
                  "Attacks: low exponent, broadcast, Wiener",
                  "Fixed by OAEP padding or KEM",
                ],
              },
              right: {
                heading: "ElGamal",
                items: [
                  "Randomized by construction (fresh r)",
                  "Homomorphic multiplicatively - by design",
                  "Risk: r reuse leaks plaintext ratios",
                  "CPA-secure under DDH; hybridized in practice",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "The reused-r catastrophe",
              body: "ElGamal's one implementation sin: reusing r. With c2'/c2 = m'/m, an attacker who knows one message reads the ratio of any pair - and on curves, repeated r also leaks the private key outright (the 2010 Sony PS3 signature incident's shape). 'Fresh r, every time, from the CSPRNG' is the sentence to write.",
            },
            examQuestions: [
              {
                q: "Explain ElGamal encryption: key generation, the (c1, c2) ciphertext, the correctness line, DDH-based IND-CPA, the consequences of randomness reuse and multiplicative homomorphism, and why hybrids replaced raw ElGamal.",
                marks: 14,
                outline: [
                  "Gen: prime-order group, secret x, public y = g^x",
                  "Enc: fresh r -> (c1 = g^r, c2 = m · y^r)",
                  "Dec: m = c2 / c1^x - one-line exponent arithmetic",
                  "IND-CPA under DDH: reduction embeds the challenge as (y, c1)",
                  "Reuse: c2'/c2 = m'/m - plaintext ratios escape",
                  "Homomorphic: componentwise products - voting feature, tampering risk",
                  "Hybrids (ECIES): DH key + AEAD - no group-element message encoding",
                ],
              },
              {
                q: "Why must ElGamal randomness r be fresh and uniform for every encryption?",
                marks: 7,
                outline: [

                  "Same r makes masks y^r identical - ciphertexts differ only by plaintext ratios",

                  "c2'/c2 reveals m'/m directly",

                  "On elliptic curves, reused r leaks the private key",

                  "r reuse links ciphertexts to one sender",

                  "CSPRNG-sourced r is the only safe source",

                ],              },
            ],
          },
          {
            number: "4.6",
            title: "Hybrid encryption - the KEM-DEM pattern",
            body: [
              "Hybrid encryption is the industrial answer to 4.3's economics: asymmetric crypto solves distribution, symmetric crypto solves bulk. The formal shape is KEM-DEM: a Key Encapsulation Mechanism (KEM) encapsulates a random session key against the recipient's public key - (c_kem, K) = Encaps(pk) on the sender side, K = Decaps(sk, c_kem) on the receiver's; a Data Encapsulation Mechanism (DEM) - an AEAD scheme from Unit 3.8 - encrypts the actual message under K. Total ciphertext: (c_kem, c_dem, tag).",
              "A worked assembly makes the pattern concrete. Send a 10 MB file to a colleague: generate random 256-bit K; KEM = RSA-OAEP encrypt of K (or ECDH ephemeral: sender's ephemeral sk, recipient's pk -> shared secret -> KDF -> K); DEM = AES-256-GCM encrypt of the file with nonce and AAD; send (KEM ciphertext, GCM ciphertext, tag). Recipient decapsulates K, verifies the tag, decrypts - milliseconds of RSA or EC math for one key, hardware-speed AES for ten megabytes. The cost inversion is the point: raw RSA on the file would be days and modulus-sized bloat; the hybrid is seconds and one extra key-ciphertext.",
              "The security composition is the syllabus's proof-flavoured closing: KEM-DEM is IND-CCA secure when the KEM is IND-CCA (OAEP-RSA in the ROM, or post-quantum ML-KEM) and the DEM is an AEAD - the tag binding ciphertext to key closes tampering routes. The variant ledger: ECIES (ECDH-ephemeral + KDF + AEAD - ElGamal's hybrid form), RSA-KEM (structure-free wrapping, 4.4's verdict), and ML-KEM (the post-quantum KEM) slot into the same DEM - one pattern, swappable halves, which is exactly why standards describe TLS and PGP this way.",
              "Exam framing: expect 'explain hybrid encryption' or 'the KEM-DEM pattern'. Define KEM and DEM, work the 10 MB assembly, state the composition-security condition, and produce the variant ledger (ECIES, RSA-KEM, ML-KEM) - closing with the economics sentence. One encapsulation buys hardware-speed bulk - the economics sentence that closes every hybrid answer. The swappable ledger is the design point - one DEM, four KEMs, one pattern.",
            ],
            keyTerms: [
              { term: "KEM", definition: "Key encapsulation mechanism - wraps a random session key against a public key." },
              { term: "DEM", definition: "Data encapsulation mechanism - the AEAD carrying the message under the session key." },
              { term: "ECIES", definition: "Ephemeral ECDH + KDF + AEAD - the elliptic-curve hybrid scheme." },
              { term: "ML-KEM", definition: "The standardized lattice-based post-quantum KEM (Kyber lineage)." },
            ],
            table: {
              caption: "The KEM swappability ledger.",
              headers: ["KEM choice", "Basis", "Note"],
              rows: [
                ["RSA-OAEP", "Factoring (CCA in ROM)", "Legacy-compatible"],
                ["RSA-KEM", "Factoring, structure-free", "Cleanest RSA form"],
                ["ECIES / ECDH", "ECDLP", "Small keys, forward secrecy with ephemeral"],
                ["ML-KEM", "Lattice (Module-LWE)", "Post-quantum"],
              ],
            },
            bullets: [
              "KEM-DEM: asymmetric wraps a session key; AEAD carries the message.",
              "Encapsulate -> (c_kem, K); Decapsulate -> K; DEM encrypts with K.",
              "Worked assembly: 10 MB file = one RSA/EC encapsulation + GCM bulk.",
              "Economics: milliseconds of public-key math for the key, hardware AES for the data.",
              "Composition security: IND-CCA KEM + AEAD DEM = IND-CCA hybrid.",
              "Swappable halves: RSA-OAEP, RSA-KEM, ECIES, ML-KEM all fit one DEM.",
            ],
            diagram: {
              kind: "pipeline",
              title: "The KEM-DEM pipeline",
              caption: "Public key for the key, symmetric for the bytes - each half does what it is cheap at.",
              stages: [
                { label: "Session key K", note: "fresh random 256 bits" },
                { label: "KEM encapsulate", note: "K wrapped under recipient's pk" },
                { label: "DEM encrypt", note: "AES-GCM over the message with K" },
                { label: "Send", note: "(c_kem, c_dem, tag)" },
                { label: "Receive", note: "decapsulate K, verify tag, decrypt" },
              ],
            },
            callout: {
              type: "exam",
              title: "One encapsulation, hardware-speed bulk",
              body: "The economics sentence that closes every hybrid answer: 'one public-key operation per message buys a fresh symmetric key; everything after is hardware-speed AES.' Then the security sentence: IND-CCA KEM plus AEAD DEM composes to IND-CCA - and the tag is what binds the halves.",
            },
            examQuestions: [
              {
                q: "Explain hybrid encryption and the KEM-DEM pattern: define encapsulation and decapsulation, assemble a worked 10 MB file send, state the composition-security condition, and list the swappable KEM variants.",
                marks: 14,
                outline: [
                  "KEM: (c_kem, K) = Encaps(pk); K = Decaps(sk, c_kem)",
                  "DEM: AEAD encryption of the message under K",
                  "Worked: random K, RSA-OAEP or ECDH encapsulation, AES-GCM bulk",
                  "Economics: one public-key operation vs days of raw RSA",
                  "Composition: IND-CCA KEM + AEAD DEM -> IND-CCA hybrid",
                  "Variants: RSA-OAEP, RSA-KEM, ECIES (ephemeral ECDH), ML-KEM (post-quantum)",
                  "Tag binds ciphertext to key - tampering fails closed",
                ],
              },
              {
                q: "Why does the DEM need authenticated encryption rather than bare encryption?",
                marks: 7,
                outline: [

                  "Bare encryption is tamperable - bit-flips decrypt to controlled changes",

                  "The AEAD tag binds ciphertext integrity to the session key",

                  "Composition proofs require the DEM to authenticate",

                  "Bit-flips decrypt to controlled changes without the tag",

                  "Associated data binds context into the tag",

                ],              },
            ],
          },
          {
            number: "4.7",
            title: "Malleability and homomorphic encryption - Paillier, Gentry, Cramer-Shoup",
            body: [
              "Malleability is the property that ciphertexts can be transformed into ciphertexts of related plaintexts - Unit 4.4 called it RSA's flaw; homomorphic encryption elevates it to a feature: computations on encrypted data without decrypting. The hierarchy: partially homomorphic (one operation, unlimited times - Paillier adds, RSA/ElGamal multiply), somewhat homomorphic (both operations, limited depth - evaluation circuits of bounded size), and fully homomorphic (both operations, unlimited depth - arbitrary computation on ciphertexts).",
              "The schemes card covers the syllabus's names. Paillier: ciphertext (g^m · r^n) mod n^2 - additively homomorphic (E(m1)·E(m2) = E(m1 + m2)), randomizable (re-blinding without the key), semantically secure against passive adversaries; the workhorse for secure aggregation and e-voting. Gentry (2009): the first FHE via ideal lattices and bootstrapping - a somewhat-homomorphic scheme evaluating its own decryption circuit to refresh noise; modern descendants (BGV, CKKS, TFHE) make FHE practical for niches (private inference, encrypted statistics) at heavy cost (orders-of-magnitude slowdowns). Cramer-Shoup (1998): not homomorphic but the first practical IND-CCA2 public-key scheme in the standard model - DDH-based with a validity check that rejects malleable tampering outright.",
              "A worked application fixes the taxonomy. A privacy-preserving survey: 10,000 devices encrypt their salaries with Paillier; the aggregator multiplies all ciphertexts - the product decrypts to the sum of salaries; individual salaries never appear (additive homomorphism, one operation). Contrast: computing an average with rounding would need somewhat/FHE depth; computing 'who earns above X' per row needs comparison circuits - FHE territory at real cost. The design lesson: pick the weakest homomorphism that fits the computation; FHE's power is priced in orders of magnitude.",
              "Exam framing: expect 'explain homomorphic encryption' or 'write on Paillier and Cramer-Shoup'. Give the PHE/SWHE/FHE hierarchy, the Paillier card with the additive identity, Gentry's bootstrapping idea, Cramer-Shoup's CCA role, and the survey-aggregation trace - closing with the weakest-fit sentence. Paillier's two-line identity earns the marks - products of ciphertexts encrypt sums. The aggregation trace is the application - ten thousand ciphertexts multiply to one encrypted sum.",
            ],
            keyTerms: [
              { term: "Partially homomorphic", definition: "One operation, unlimited: Paillier adds, RSA/ElGamal multiply." },
              { term: "Fully homomorphic (FHE)", definition: "Arbitrary computation on ciphertexts - Gentry's bootstrapping enabled it." },
              { term: "Bootstrapping", definition: "A somewhat-homomorphic scheme evaluating its own decryption to refresh noise." },
              { term: "Cramer-Shoup", definition: "DDH-based IND-CCA2 public-key encryption in the standard model." },
            ],
            table: {
              caption: "The homomorphic hierarchy.",
              headers: ["Level", "Capability", "Named schemes", "Cost"],
              rows: [
                ["Partially (PHE)", "One operation, unlimited", "Paillier (+), RSA/ElGamal (x)", "Near-practical"],
                ["Somewhat (SWHE)", "Both, bounded depth", "BGV, CKKS (limited)", "Expensive"],
                ["Fully (FHE)", "Both, unbounded", "Gentry 2009 -> TFHE", "Orders slower"],
              ],
            },
            bullets: [
              "Malleability flipped: homomorphic schemes make ciphertext computation a feature.",
              "Paillier: (g^m · r^n) mod n^2 - additive, randomizable, CPA-secure.",
              "RSA and ElGamal are multiplicatively homomorphic - the flaw and the feature.",
              "Gentry's bootstrapping: evaluate own decryption to refresh noise - FHE's birth.",
              "Cramer-Shoup: validity-checked ciphertexts - first practical standard-model CCA2.",
              "Weakest-fit rule: PHE for aggregation, SWHE/FHE only when depth demands.",
            ],
            diagram: {
              kind: "layers",
              title: "The homomorphic capability stack",
              caption: "Each layer adds an operation - and orders of magnitude in cost.",
              layers: [
                { label: "Fully homomorphic", note: "arbitrary circuits - TFHE/CKKS/BGV; bootstrapping refreshes noise" },
                { label: "Somewhat homomorphic", note: "+ and x, bounded depth - noise grows with every op" },
                { label: "Partially homomorphic", note: "one operation forever - Paillier (+), RSA/ElGamal (x)" },
                { label: "Plain encryption", note: "no computation on ciphertexts at all" },
              ],
            },
            callout: {
              type: "exam",
              title: "Paillier's additive identity",
              body: "The two-line proof that earns the Paillier marks: E(m1) · E(m2) = (g^(m1) r1^n)(g^(m2) r2^n) = g^(m1+m2) (r1 r2)^n = E(m1 + m2) mod n^2. Then the application sentence: multiplying ciphertexts adds plaintexts - private aggregation and e-voting follow directly.",
            },
            examQuestions: [
              {
                q: "Explain malleability and homomorphic encryption: the PHE/SWHE/FHE hierarchy, Paillier's additive construction with its identity, Gentry's bootstrapping, Cramer-Shoup's CCA role, and a worked private-aggregation application.",
                marks: 14,
                outline: [
                  "Malleability as feature: compute on ciphertexts without decryption",
                  "PHE: one op unlimited - Paillier (+), RSA/ElGamal (x)",
                  "SWHE: bounded depth; FHE: arbitrary - Gentry 2009 via bootstrapping",
                  "Paillier: E(m1)·E(m2) = E(m1+m2) mod n^2; randomizable",
                  "Bootstrapping: scheme evaluates own decryption to refresh noise",
                  "Cramer-Shoup: DDH, validity check - standard-model IND-CCA2",
                  "Trace: 10,000 Paillier ciphertexts multiplied -> encrypted sum of salaries",
                ],
              },
              {
                q: "Why does noise growth limit somewhat-homomorphic schemes?",
                marks: 7,
                outline: [

                  "Every homomorphic operation adds encryption noise",

                  "Noise past a threshold makes decryption wrong",

                  "Bootstrapping refreshes it - the price of unlimited depth",

                  "Computation depth is the budget noise spends",

                  "Parameter sizes grow with the depth demanded",

                ],              },
            ],
          },
          {
            number: "4.8",
            title: "Identity-based encryption",
            body: [
              "Identity-based encryption (IBE) removes the certificate step: any string - an email address, a device id - serves directly as a public key. The architecture adds a Private Key Generator (PKG) holding a master secret: encrypt to 'riya@college.edu' with the master public parameters; the PKG issues the matching private key to the authenticated user. Boneh-Franklin (2001) built the first practical IBE from bilinear pairings on elliptic curves - the pairing map e(P, Q) that lets ciphertexts bind to identity strings with provable security in the random-oracle model; later schemes removed that caveat.",
              "A worked flow fixes the mechanics. Setup: PKG publishes master public params, keeps master secret s. Encrypt: sender encrypts to ID = 'helpdesk@corp.in' using params + ID - no lookup, no certificate. Key issuance: the user authenticates to the PKG (in person, via credentials), which derives sk_ID from the master secret; decryption follows. Revocation uses identity versioning (ID#2025-11) since identities otherwise never expire. The convenience is real: zero key distribution before first contact - encrypted mail to a stranger's address on day one.",
              "The cost is the escrow trade: the PKG can derive every user's private key, so it must be trusted absolutely - key escrow by architecture, plus key distribution to users themselves needs an authenticated channel anyway (the PKG becomes the certificate authority with more power and the same authentication duty). The comparison verdict: IBE wins for episodic, identity-addressed encryption (encrypted email, ad-hoc messaging); PKI wins when recipients manage their own keys. The syllabus's inclusion closes the asymmetric unit's arc: from trapdoor functions (1.7) through DH (4.1) to making the identity itself the public key.",
              "Exam framing: expect 'explain identity-based encryption'. Give the PKG architecture with the master-secret setup, the Boneh-Franklin pairing note, the encrypt/key-issuance flow, and the escrow trade - closing with the IBE-vs-PKI verdict sentence. Escrow is the trade - the PKG can read everything it can address, and versioning handles revocation. The IBE-versus-PKI verdict table is the comparison - best-for rows settle the choice.",
            ],
            keyTerms: [
              { term: "IBE", definition: "Identity strings serve as public keys - no certificates before first contact." },
              { term: "PKG", definition: "Private Key Generator - holds the master secret and issues identity keys." },
              { term: "Boneh-Franklin", definition: "First practical IBE (2001) via bilinear pairings, secure in the ROM." },
              { term: "Key escrow", definition: "The PKG can derive every private key - IBE's structural trust cost." },
            ],
            table: {
              caption: "IBE vs PKI - the verdict table.",
              headers: ["Feature", "IBE", "Traditional PKI"],
              rows: [
                ["Public key", "The identity string itself", "Certificate-bound key pair"],
                ["Key distribution", "None before first contact", "Certificates, directories, expiry"],
                ["Trust point", "PKG holds master secret (escrow)", "CA signs, users hold keys"],
                ["Revocation", "Identity versioning (ID#date)", "CRL/OCSP machinery"],
                ["Best for", "Episodic identity-addressed encryption", "Long-lived user-controlled keys"],
              ],
            },
            bullets: [
              "IBE: encrypt to an identity string directly - certificates vanish.",
              "PKG: master secret derives per-identity private keys on authenticated request.",
              "Boneh-Franklin: bilinear pairings on curves made it practical (2001).",
              "Flow: params public -> encrypt to ID -> authenticate to PKG -> receive sk_ID.",
              "Revocation via identity versioning - identities never age out alone.",
              "Cost: full key escrow at the PKG - trust concentrated, not eliminated.",
            ],
            diagram: {
              kind: "flow",
              title: "The IBE life cycle",
              caption: "From master setup to decryption - certificates never appear.",
              steps: [
                { label: "Setup", note: "PKG publishes params, keeps master secret s" },
                { label: "Encrypt", note: "sender encrypts to 'user@corp.in' with params + ID" },
                { label: "Authenticate", note: "user proves identity to the PKG" },
                { label: "Issue", note: "PKG derives sk_ID from master secret" },
                { label: "Decrypt", note: "sk_ID opens the ciphertext" },
              ],
            },
            callout: {
              type: "exam",
              title: "Escrow is the trade",
              body: "The verdict sentence examiners want: 'IBE eliminates certificate distribution by concentrating trust - the PKG can read everything it can address.' Convenience versus escrow is the whole evaluation; add identity versioning as the operational patch for revocation.",
            },
            examQuestions: [
              {
                q: "Explain identity-based encryption: the PKG architecture with master secret, the Boneh-Franklin pairing contribution, the encrypt-key-issue-decrypt flow, revocation by versioning, and the escrow trade versus traditional PKI.",
                marks: 14,
                outline: [
                  "IBE: identity strings are public keys - no certificates needed",
                  "PKG holds master secret s; params published for encryption",
                  "Encrypt to 'user@corp.in' directly from public params + ID",
                  "User authenticates; PKG derives sk_ID and delivers it securely",
                  "Boneh-Franklin 2001: bilinear pairings; ROM security (later removed)",
                  "Revocation: identity versioning (ID#period)",
                  "Trade: full key escrow at the PKG vs PKI's distributed trust",
                ],
              },
              {
                q: "Why does IBE not eliminate the need for an authenticated channel entirely?",
                marks: 7,
                outline: [

                  "Private keys still must reach users securely",

                  "The PKG must authenticate identity requests - same duty as a CA",

                  "Trust concentrates rather than disappears",

                  "The PKG knows every private key it issues",

                  "Audit and split-PKG designs soften but do not remove escrow",

                ],              },
            ],
          },
        ],
      },
    },
    {
      number: 5,
      roman: "V",
      title: "Digital Signatures, Key Management and Protocols",
      summary:
        "Unit V completes the cryptographic stack: digital signatures as the inverse of public-key encryption and the only primitive that delivers non-repudiation, the RSA hash-and-sign construction with its padding requirements, the discrete-log signature family from Schnorr through DSA to ECDSA, symmetric key distribution and the Kerberos model with key hierarchies, public-key infrastructure - X.509 certificates, CA chains and revocation - entity authentication from passwords through challenge-response to zero-knowledge, Shamir's secret sharing and threshold cryptography, and the protocols that assemble it all, with TLS 1.3 as the running case study.",
      chapter: {
        number: "05",
        title: "Signing, Trust and the Protocols that Use It",
        intro:
          "Unit V covers the definition and properties of digital signatures and their contrast with MACs, the RSA signature scheme with textbook-RSA forgeries and PSS padding, the Schnorr, DSA and ECDSA families with the per-message nonce discipline, symmetric key distribution through KDCs and Kerberos with key hierarchies and crypto-periods, public-key infrastructure with X.509 fields, certificate chains, CRL/OCSP/stapling revocation and certificate transparency, entity authentication - passwords, challenge-response, the Schnorr identification protocol and zero-knowledge ideas - Shamir's secret sharing with Lagrange interpolation and threshold applications, and the TLS 1.3 handshake as the assembled protocol with forward secrecy.",
        inOneBreath:
          "Signatures flip public-key encryption - private key signs, public key verifies - and uniquely add non-repudiation. Never sign raw RSA: hash, then pad (PSS), or the multiplicative structure forges. The discrete-log family signs with a fresh nonce k; reuse it once and the private key falls out. Keys outlive algorithms: KDC/Kerberos scales distribution from n(n-1)/2 to n, PKI binds public keys to identities through signed chains with CRL/OCSP revocation, challenge-response proves possession with fresh nonces, and Shamir splits a secret so any t of n shares reconstruct it while fewer learn nothing. TLS 1.3 assembles everything: ECDHE for secrecy, certificates for authentication, signatures over the transcript for binding, AEAD for records.",
        sections: [
          {
            number: "5.1",
            title: "Digital signatures - definition, properties and the sign-verify model",
            body: [
              "A digital signature is public-key encryption run in reverse: the signer computes the signature with the private key, and anyone holding the public key can verify it. Encryption protects confidentiality - who can read; signature protects authenticity - who wrote and whether it changed. A signature delivers three guarantees no symmetric primitive can: integrity (any alteration breaks verification), authentication (only the private-key holder could have produced it) and non-repudiation (the signer cannot later deny it, because anyone - a judge included - can verify with the public key). A MAC gives integrity and authentication but shares the key between the parties, so the verifier could equally have forged - repudiation is structurally impossible to prevent.",
              "The model in numbers. Toy RSA domain: p = 3, q = 11, so n = 33 and phi = 20; choose e = 3, and d = 7 since 3 x 7 = 21 = 1 + 20. To sign a message whose hash is h = 4, compute s = h^d mod n = 4^7 mod 33 = 16384 mod 33 = 16. Verification recomputes s^e mod n = 16^3 mod 33 = 4096 mod 33 = 4, which equals h - accept. Anyone with the public key (33, 3) verifies; only the holder of d = 7 could produce 16. The exam's full-scale versions keep exactly this shape with 2048-bit n and real hash functions; the toy exists so the arithmetic is checkable by hand.",
              "Four properties separate a good signature scheme from a handwriting metaphor. Message-bound: the signature covers the exact bits - copy it onto another document and verification fails, unlike a scanned ink signature. Verifiable: anyone with the public key, without any shared secret. Unforgeable: forging without the private key is as hard as the underlying hard problem (factoring or discrete log). Transferable: a third party can check the same signature later - the property that makes contracts, certificates (5.5) and software updates possible. The hash-and-sign discipline underlies all practical schemes: sign a collision-resistant digest, never the raw message, so the expensive operation runs on a fixed-size input and the signature binds to the whole message through the hash.",
              "Exam framing: expect 'define digital signature and explain its properties', 'how does a digital signature differ from a MAC', or 'sign/verify with a small RSA example'. Give the inversion sentence, the three guarantees, the four properties, and the toy computation with both sides checked. The one-liner examiners reward: a MAC answers 'somebody who knows our key wrote this'; a signature answers 'this key's owner wrote this - and everyone can check'.",
            ],
            keyTerms: [
              { term: "Digital signature", definition: "Value computed with the signer's private key, verifiable by anyone with the public key." },
              { term: "Non-repudiation", definition: "The signer cannot deny authorship because verification needs no secret." },
              { term: "Hash-and-sign", definition: "Sign a collision-resistant digest of the message, not the message itself." },
              { term: "Message-bound", definition: "The signature verifies only for those exact bytes - it cannot be photocopied onto another document." },
              { term: "MAC contrast", definition: "A shared-key tag proves authorship to the co-keyholder only; the verifier could forge too." },
            ],
            table: {
              caption: "What each primitive guarantees - the comparison examiners ask for.",
              headers: ["Primitive", "Key type", "Guarantees", "Cannot give"],
              rows: [
                ["Hash", "none", "integrity (accidental change detected)", "any proof of origin"],
                ["MAC (HMAC)", "shared symmetric", "integrity + authentication between co-keyholders", "non-repudiation - verifier can forge"],
                ["Signature", "public/private pair", "integrity + authentication + non-repudiation, publicly verifiable", "confidentiality - pair with encryption for that"],
                ["Encryption", "public or symmetric", "confidentiality", "origin binding by itself"],
              ],
            },
            bullets: [
              "Signature = public-key encryption inverted: private key computes, public key checks.",
              "Three guarantees: integrity, authentication, non-repudiation - the last one is unique to signatures.",
              "MAC is symmetric: the verifier holds the forging key, so repudiation cannot be prevented.",
              "Toy check: n = 33, d = 7, h = 4 -> s = 16; 16^3 mod 33 = 4 - verified.",
              "Message-bound and transferable: bytes-bound, third-party checkable, contract-grade.",
              "Always hash-then-sign: fixed-size input plus collision-resistance does the binding.",
            ],
            diagram: {
              kind: "compare",
              title: "MAC vs digital signature",
              caption: "The verification fan-out is the difference: one shared key versus a world of public keys.",
              left: {
                heading: "MAC (symmetric)",
                items: [
                  "Tag from a shared secret key",
                  "Verifier holds the forging key too",
                  "Only the co-keyholder can check",
                  "No non-repudiation - 'we both know k'",
                ],
              },
              right: {
                heading: "Signature (asymmetric)",
                items: [
                  "Value from the private key alone",
                  "Anyone with the public key verifies",
                  "A judge can check years later",
                  "Non-repudiation - key owner cannot deny",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Sign the hash, state the inversion",
              body: "Two sentences earn the definition marks: 'a signature inverts public-key encryption - private key signs, public key verifies' and 'we always sign a collision-resistant hash of the message'. Then run the toy numbers both ways - sign h = 4 to s = 16, verify 16^3 mod 33 = 4 - and the answer is complete.",
            },
            examQuestions: [
              {
                q: "Define digital signatures and explain their properties. Contrast them with MACs on key type, verifiability and non-repudiation, and demonstrate sign-verify on a small RSA domain with p = 3, q = 11, e = 3, d = 7.",
                marks: 14,
                outline: [
                  "Definition: private key computes the signature; public key verifies it",
                  "Three guarantees: integrity, authentication, non-repudiation",
                  "Four properties: message-bound, publicly verifiable, unforgeable, transferable",
                  "MAC contrast: shared key, verifier can forge, no repudiation protection",
                  "Toy setup: n = 33, phi = 20, e = 3, d = 7 since 3 x 7 = 21 = 1 mod 20",
                  "Sign: h = 4 -> s = 4^7 mod 33 = 16",
                  "Verify: 16^3 mod 33 = 4 = h - accept; only d's holder could produce 16",
                ],
              },
              {
                q: "Why is non-repudiation impossible with symmetric authentication? Give the exact scenario a court would face.",
                marks: 7,
                outline: [
                  "Both parties hold the same MAC key",
                  "Either party can compute a valid tag on any message",
                  "A disputed tag has two possible authors - no proof either way",
                  "Signatures: only the private key holder can produce the value",
                  "Public verifiability lets a third party attribute the signature",
                ],
              },
            ],
          },
          {
            number: "5.2",
            title: "RSA signatures - hash-and-sign, textbook forgeries and PSS",
            body: [
              "The RSA signature scheme reuses the RSA trapdoor in reverse: the private exponent d signs and the public exponent e verifies. Signing computes s = h(m)^d mod n where h is a collision-resistant hash; verification checks s^e mod n = h(m). Correctness is the same identity as encryption - (h^d)^e = h^(de) = h mod n because de = 1 mod phi(n). Security rests on the RSA assumption (extracting eth roots mod n without d is hard) plus the hash's collision resistance - a collision h(m1) = h(m2) would transfer one signature to both messages, which is exactly why MD5's broken collisions forced signature schemes off it.",
              "Textbook RSA signatures - raw exponentiation with no padding - are existentially forgeable, and the forgeries are arithmetic you can write down. Multiplicative forgery: given signatures s1 on m1 and s2 on m2, the value s = s1 x s2 mod n verifies on m1 x m2 mod n, since (s1 s2)^e = s1^e s2^e = m1 m2. Chosen-message forgery: pick any s, compute m = s^e mod n, and (m, s) is a valid pair - the attacker 'signed' a message without the private key. Toy example with n = 33, e = 3: the attacker picks s = 2 and claims the message m = 2^3 mod 33 = 8; verification accepts (8, 2). The fix is structure: the signed value must be a hash of a real message embedded in a padding scheme an attacker cannot aim at - PKCS#1 v1.5 (legacy, deterministic, the Bleichenbacher/BERserk histories) and PSS (randomized with a salt, provably secure in the random-oracle model).",
              "PSS (Probabilistic Signature Scheme) is the examinable fix. The message hash is embedded in a padded block mixed with a random salt through a mask-generation function, so the same message signs to different values each time - signatures become randomized, the multiplicative structure is destroyed, and the proof reduces forgery to inverting RSA. Operational discipline around RSA signatures: use SHA-256 or better, key sizes of 2048 bits and up (3072 for long-lived keys), constant-time exponentiation against timing leaks, and deterministic derandomization only where the RNG is untrusted (RFC 6979-style k-derivation exists in the discrete-log world, not RSA's - PSS wants a real salt).",
              "Exam framing: expect 'explain the RSA digital signature scheme', 'show that textbook RSA signatures are forgeable', or 'why is padding mandatory'. Give the sign/verify equations, the multiplicative and chosen-message forgeries with the toy arithmetic, and the PSS fix with the salt. The closing sentence examiners reward: raw RSA signs structure-free numbers, and structure-free numbers can be manufactured - padding is what makes the target an unaimable hash.",
            ],
            keyTerms: [
              { term: "RSA signature", definition: "s = h(m)^d mod n signed privately; verified by s^e = h(m) mod n." },
              { term: "Existential forgery", definition: "Manufacturing any valid (message, signature) pair without the private key." },
              { term: "Multiplicative structure", definition: "s1 x s2 signs m1 x m2 in raw RSA - the forgery lever padding removes." },
              { term: "PSS", definition: "Randomized padding with a salt and MGF; provably secure in the random-oracle model." },
              { term: "PKCS#1 v1.5", definition: "Legacy deterministic padding - still deployed, historically fragile, superseded by PSS." },
            ],
            codeExample: {
              language: "python",
              caption: "rsa_toy_sign.py - textbook arithmetic and the chosen-message forgery (demo only, never deploy)",
              code: `p, q, e, d = 3, 11, 3, 7
n = p * q                    # 33, phi = 20

def sign(h):
    return pow(h, d, n)      # textbook signature

def verify(h, s):
    return pow(s, e, n) == h

s = sign(4)                  # 4^7 mod 33 = 16
print("sign h=4 ->", s, "verify:", verify(4, s))

# chosen-message forgery: pick s, define the message
s_f = 2
m_f = pow(s_f, e, n)         # 8 - a 'signed' message never seen
print("forgery (m, s) =", (m_f, s_f), "verifies:", verify(m_f, s_f))`,
            },
            bullets: [
              "Sign s = h(m)^d mod n; verify s^e mod n = h(m) - the trapdoor in reverse.",
              "Correctness from de = 1 mod phi(n); toy check: 4^7 = 16, 16^3 = 4 mod 33.",
              "Multiplicative forgery: s1 x s2 mod n verifies on m1 x m2 mod n.",
              "Chosen-message forgery: pick s, set m = s^e mod n - (8, 2) verifies in the toy.",
              "Hash + padding = the fix: PKCS#1 v1.5 legacy, PSS randomized and provable (ROM).",
              "Operational floor: SHA-256, n of 2048+ bits, constant-time exponentiation.",
            ],
            diagram: {
              kind: "flow",
              title: "Hash-and-sign pipeline",
              caption: "The attacker must aim at a hash embedded in padding - raw numbers are no longer the target.",
              steps: [
                { label: "Message", note: "arbitrary length" },
                { label: "Hash", note: "SHA-256 digest h" },
                { label: "Pad", note: "PSS block with random salt + MGF" },
                { label: "Sign", note: "s = padded^d mod n" },
                { label: "Verify", note: "unpad, re-hash, compare" },
              ],
            },
            callout: {
              type: "warning",
              title: "Never sign raw RSA",
              body: "If an answer or an implementation signs h(m)^d with no padding, write the forgery sentence: 'any s implies the message s^e mod n'. The scheme is existentially forgeable by construction - padding is not decoration, it is the security argument.",
            },
            examQuestions: [
              {
                q: "Explain the RSA digital signature scheme: the sign and verify equations, why the hash is essential, and demonstrate two forgeries on textbook RSA with the fix PSS provides.",
                marks: 14,
                outline: [
                  "Sign s = h(m)^d mod n; verify s^e mod n = h(m)",
                  "Correctness from de = 1 mod phi(n); toy numbers on n = 33",
                  "Hash: collision resistance transfers signatures - MD5's collision forced migration",
                  "Multiplicative forgery: s1 x s2 signs m1 x m2",
                  "Chosen-message forgery: m = s^e mod n, toy (8, 2) verifies",
                  "PSS: salt + MGF randomized padding, provable in the ROM",
                  "Discipline: SHA-256, 2048+ bit keys, constant-time exponentiation",
                ],
              },
              {
                q: "Why does PSS include a random salt when PKCS#1 v1.5 works deterministically? What does randomization buy?",
                marks: 7,
                outline: [
                  "Deterministic signatures leak equality: the same message signed twice matches",
                  "Randomized padding defeats aimable structure - forger cannot target the block",
                  "PSS has a security proof in the random-oracle model; v1.5 is heuristic",
                  "Salt breaks the multiplicative relation between padded blocks",
                  "Cost: same message signs to different values - acceptable for signatures",
                ],
              },
            ],
          },
          {
            number: "5.3",
            title: "Schnorr, DSA and ECDSA - the discrete-log signature family",
            body: [
              "The second signature family builds on the discrete-logarithm problem of Unit IV. ElGamal introduced the idea; Schnorr refined it into the cleanest form - commit, challenge, respond - by applying the Fiat-Shamir transform to an identification protocol; DSA is the FIPS 186 standardization of that line over prime-order subgroups; ECDSA re-instantiates DSA over elliptic-curve groups for smaller keys and signatures. All of them share one skeleton: the security rests on the hardness of computing discrete logarithms, and all of them share one deadly dependency - a per-message secret nonce k that must be fresh, uniform and secret every single time.",
              "The skeleton in equations. Schnorr: the signer picks random k and commits R = g^k; the challenge e = H(R || m) binds the transcript to the message; the response s = k + x e mod q contains the private key x masked by the nonce. Verification recomputes g^s = R g^e and checks the hash. ECDSA computes r from the nonce's curve point (r = (kG)_x mod n) and s = k^(-1)(h + x r) mod n. The nonce arithmetic is where schemes die: reuse k across two messages leaks x by subtraction - two equations, two unknowns, one subtraction - which is exactly how the PlayStation 3 signing key fell in 2010 (identical k in two ECDSA signatures). Biased nonces fall to lattice attacks even without full reuse, which is why Ed25519 derives k deterministically as k = H(x || m) and modern RSA-side RFC 6979 does the same for DSA/ECDSA.",
              "Sizing is the comparison table examiners want. RSA-3072: 3072-bit key, 384-byte signature. DSA (classic, q = 256-bit subgroup of a 2048-bit field): 2048-bit parameters, 64-byte signature. ECDSA on P-256: 256-bit key, 64-byte signature. Ed25519 (Schnorr over Curve25519): 32-byte key, 64-byte signature, deterministic nonces, no RNG on the signing path. Verification speed and bandwidth favour the curve family; compliance and legacy HSM support favour RSA; provability and simplicity favour Schnorr. DSA as a standalone standard is deprecated for new designs - its niche is historical exam questions and NIST-era infrastructure.",
              "Exam framing: expect 'explain DSA/ECDSA signing and verification', 'why must the nonce k never repeat', or 'compare RSA and ECDSA signatures'. Give the Schnorr/ECDSA equations, the k-reuse subtraction attack with the PS3 anecdote, and the sizing table. Close with the discipline sentence: in the discrete-log family the nonce is half the private key - generate it like one.",
            ],
            keyTerms: [
              { term: "Schnorr signature", definition: "Commit R = g^k, challenge e = H(R || m), response s = k + x e mod q." },
              { term: "ECDSA", definition: "DSA instantiated over elliptic curves; r from the nonce point, s = k^-1 (h + x r) mod n." },
              { term: "Per-message nonce k", definition: "Fresh uniform secret per signature; reuse or bias leaks the private key." },
              { term: "Fiat-Shamir", definition: "Replacing an interactive verifier challenge with a hash of the transcript." },
              { term: "Ed25519", definition: "Schnorr over Curve25519 with deterministic nonces - 32-byte keys, 64-byte signatures." },
            ],
            table: {
              caption: "Signature families - size, trust and the classic failure.",
              headers: ["Scheme", "Hard problem", "Key / signature size", "Classic failure mode"],
              rows: [
                ["RSA-PSS", "factoring / RSA root", "3072-bit / 384 bytes", "no padding -> structural forgeries"],
                ["DSA", "discrete log (subgroup)", "2048-bit / 64 bytes", "k reuse or bias leaks x"],
                ["ECDSA (P-256)", "ECDLP", "256-bit / 64 bytes", "PS3 2010: repeated k recovered the key"],
                ["Ed25519 (Schnorr)", "ECDLP", "32 bytes / 64 bytes", "near-none: deterministic k, no RNG path"],
              ],
            },
            bullets: [
              "One skeleton: commit with the nonce, challenge from the transcript hash, respond with k + x e.",
              "Verification restates the commitment: g^s = R g^e in Schnorr.",
              "k-reuse attack: two signatures, subtract, x falls out - the PS3 signing key of 2010.",
              "Biased k is almost as fatal - lattice attacks; Ed25519/RFC 6979 derive k deterministically.",
              "Sizing: ECDSA/Ed25519 give 64-byte signatures on 256-bit keys; RSA needs 384 bytes at 3072 bits.",
              "Family choice: curves for size and speed, RSA for legacy/compliance, Schnorr for provability.",
            ],
            diagram: {
              kind: "fork",
              title: "Choosing a signature family",
              caption: "The constraint decides the family, not fashion.",
              start: "What constrains the deployment?",
              branches: [
                { label: "Bandwidth / small keys", outcome: "ECDSA P-256 or Ed25519 - 64-byte signatures on 256-bit keys", good: true },
                { label: "Legacy / HSM / compliance", outcome: "RSA-PSS with 2048+ bit keys - the courtroom record", good: true },
                { label: "Provable simplicity", outcome: "Schnorr - cleanest equations, ROM proof, Fiat-Shamir", good: true },
                { label: "Untrusted RNG on device", outcome: "Ed25519 or RFC 6979 - deterministic nonce derivation", good: true },
                { label: "New DSA", outcome: "deprecated for new designs - answer it historically", good: false },
              ],
            },
            callout: {
              type: "exam",
              title: "The nonce is half the key",
              body: "Every discrete-log signature answer ends with the k sentence: 'reuse k once and two signatures subtract to reveal x'. Show the subtraction idea (two s-equations, two unknowns, k cancels), name the PS3 case, and credit deterministic k derivation - that is the full marks arc.",
            },
            examQuestions: [
              {
                q: "Explain the Schnorr and ECDSA signature constructions, prove how nonce reuse recovers the private key, and compare the families with RSA on key and signature sizes.",
                marks: 14,
                outline: [
                  "Schnorr: R = g^k, e = H(R || m), s = k + x e mod q; verify g^s = R g^e",
                  "ECDSA: r = (kG)_x mod n, s = k^-1 (h + x r) mod n",
                  "Fiat-Shamir turns interactive identification into signatures",
                  "k reuse: two messages, two s-equations - subtract, k cancels, x leaks",
                  "PS3 2010: identical k in two ECDSA signatures exposed the signing key",
                  "Biased k -> lattice attacks; Ed25519/RFC 6979 derive k deterministically",
                  "Sizing: 256-bit curve keys, 64-byte signatures vs RSA-3072's 384 bytes",
                ],
              },
              {
                q: "Why did ECDSA's designers demand a fresh random k per signature, and how do modern schemes remove that fragility?",
                marks: 7,
                outline: [
                  "s = k^-1 (h + x r) - k is an algebraic mask over x",
                  "Same k on two messages: subtract to solve for x directly",
                  "Even partial k leakage narrows the search (lattice attacks)",
                  "Deterministic derivation: k = H(x || m) - Ed25519, RFC 6979",
                  "Deterministic k removes RNG failure from the signing path",
                ],
              },
            ],
          },
          {
            number: "5.4",
            title: "Key management - distribution, Kerberos and key hierarchies",
            body: [
              "Kerckhoffs moved the secret from the algorithm to the key, and everything since is a key-management problem: generating keys with real entropy, distributing them without exposure, rotating them on crypto-periods, and destroying them on retirement. Naive symmetric distribution is quadratic: n users sharing pairwise keys need n(n-1)/2 of them - 1,000 users means 499,500 keys, each a lifecycle to manage. The KDC (key distribution centre) model collapses the quadratic: every user holds one long-term master key shared only with the KDC, and the centre issues short-lived session keys on demand - 1,000 master keys and unlimited ephemeral sessions replace half a million pairwise secrets.",
              "Kerberos is the exam's KDC and the numbers are the marks. Flow: the user authenticates to the Authentication Server with a password-derived key and receives a Ticket-Granting Ticket - session key K_c,tgs encrypted to the user plus a TGT encrypted with the TGS's own key; requesting a service, the user presents the TGT plus an authenticator (client ID and timestamp) encrypted with K_c,tgs; the TGS returns a service ticket with a session key for the target service; the service verifies the authenticator and answers with its own timestamp - mutual authentication. The numbers: TGT lifetime typically 8-10 hours, authenticator validity window about 5 minutes against replay, timestamp clocks synchronised by NTP, and every ticket encrypted with a key the requester never sees - the KDC's mastery is that no user secret ever crosses the network in usable form.",
              "Public keys have a different distribution problem - not secrecy but binding: whose key is this? Diffie-Hellman (Unit IV) establishes shared secrets without prior arrangement but authenticates nothing, so raw DH is a man-in-the-middle stage. The answer is certificates and PKI (5.5); the operational pattern around them is the key hierarchy: a root/master key guarded offline (ideally in an HSM) wraps key-encrypting keys, which wrap the data-encrypting keys that touch traffic. Rotation follows the hierarchy - rotate data keys weekly or per-session, KEKs monthly or quarterly, the root only with ceremony. Transport versus agreement is the closing distinction: RSA-style key transport sends a key wrapped to the recipient; DH-style agreement derives it jointly - modern protocols prefer agreement because it never moves the secret at all.",
              "Exam framing: expect 'explain the key distribution problem and the KDC solution', 'describe Kerberos with its messages', or 'why n(n-1)/2 is bad business'. Give the quadratic count, the Kerberos flow with TGT and authenticator, the replay windows, and the three-tier hierarchy with crypto-periods. The sentence examiners reward: keys are the only secrets - algorithms are public, so management is most of security.",
            ],
            keyTerms: [
              { term: "KDC", definition: "Trusted centre holding one master key per user, issuing short-lived session keys on demand." },
              { term: "Kerberos", definition: "The deployed KDC protocol: AS -> TGT -> TGS -> service ticket -> mutual authentication." },
              { term: "Authenticator", definition: "Client ID + timestamp encrypted with the session key - the replay window is minutes." },
              { term: "Crypto-period", definition: "The sanctioned lifetime of a key before rotation - shorter as keys get closer to data." },
              { term: "Key hierarchy", definition: "Root key -> key-encrypting keys -> data keys; rotation cascades from the top." },
            ],
            table: {
              caption: "Kerberos messages - what travels and what protects it.",
              headers: ["Step", "Message", "Protected with", "Purpose"],
              rows: [
                ["1", "User -> AS: identity (password-derived key implied)", "password key", "prove the human"],
                ["2", "AS -> User: K_c,tgs to user + TGT to TGS", "user key / TGS key", "grant the ticket"],
                ["3", "User -> TGS: TGT + authenticator (ID, timestamp)", "K_c,tgs", "request a service ticket"],
                ["4", "TGS -> User: service session key + ticket to server", "server key", "authorize the service"],
                ["5", "User -> Server: ticket + new authenticator", "K_c,s", "mutual authentication + session"],
              ],
            },
            bullets: [
              "Pairwise symmetric keys grow as n(n-1)/2: 1,000 users -> 499,500 keys; the KDC makes it n.",
              "Kerberos flow: AS issues TGT, TGS issues service tickets, authenticators carry timestamps.",
              "Replay defence: about 5-minute authenticator window, NTP-synchronised clocks, one-time use.",
              "No user secret crosses the network in usable form - tickets are encrypted to services.",
              "Key hierarchy: root (offline/HSM) -> KEKs -> data keys, with crypto-periods shrinking downwards.",
              "Agreement beats transport: DH derives the shared secret jointly; RSA transport ships it wrapped.",
            ],
            diagram: {
              kind: "layers",
              title: "The key hierarchy, top to bottom",
              caption: "Keys protect keys; exposure shrinks as you descend, rotation accelerates.",
              layers: [
                { label: "Root / master key", note: "offline, HSM-guarded, rotated with ceremony - years" },
                { label: "Key-encrypting keys", note: "wrap data keys in transit/storage - months" },
                { label: "Data / session keys", note: "touch traffic and records - hours to weeks" },
                { label: "Ephemeral material", note: "nonces, IVs, DH shares - single use" },
              ],
            },
            callout: {
              type: "exam",
              title: "Do the quadratic arithmetic",
              body: "The question 'why use a KDC' is answered by one line of arithmetic: n(n-1)/2 - for 1,000 users that is 499,500 pairwise keys versus 1,000 master keys plus ephemeral sessions. Quote both numbers, then run the Kerberos flow; the contrast earns the design mark before any protocol detail.",
            },
            examQuestions: [
              {
                q: "Explain the symmetric key distribution problem, the KDC solution and the full Kerberos exchange with ticket lifetimes and replay windows.",
                marks: 14,
                outline: [
                  "Pairwise model: n(n-1)/2 keys - 1,000 users means 499,500",
                  "KDC model: one master key per user, session keys issued on demand",
                  "AS -> TGT: session key K_c,tgs to user, TGT encrypted to TGS",
                  "TGS step: TGT + timestamped authenticator -> service ticket",
                  "Service step: ticket + authenticator -> mutual authentication",
                  "Replay defence: about 5-minute window, NTP-synced clocks",
                  "Hierarchy: root -> KEK -> data keys with shrinking crypto-periods",
                ],
              },
              {
                q: "Why does raw Diffie-Hellman need certificates before it is safe to deploy? Name the exact attack.",
                marks: 7,
                outline: [
                  "DH agrees on a secret but authenticates nobody",
                  "Man-in-the-middle: attacker runs two DH exchanges, relays both",
                  "Each party shares with the attacker, who reads and re-encrypts",
                  "Certificates bind the public key to an identity (next section)",
                  "Authenticated key exchange (TLS 1.3) signs the transcript to close it",
                ],
              },
            ],
          },
          {
            number: "5.5",
            title: "Public-key infrastructure - certificates, chains and revocation",
            body: [
              "A public key is worthless until someone vouches for whose it is, and PKI is the vouching machine. A certificate - X.509 v3 in practice - binds an identity to a public key with a CA's signature: version, serial number, signature algorithm, issuer, validity window (notBefore/notAfter), subject, the subject's public key block, and extensions that matter operationally - Subject Alternative Name (the hostnames a TLS certificate actually covers), key usage and extended key usage (signing versus encrypting versus server auth), basic constraints (is this a CA?), and the authority/subject key identifiers that chain one certificate to the next. The signature turns a bare key into an attributed key: the CA stakes its reputation on the binding.",
              "Trust is a chain. A root CA self-signs and lives offline in an HSM, trusted because operating systems and browsers ship it in the trust store; intermediates sign leaves under path-length constraints; a TLS site presents root -> intermediate -> leaf, and the validator walks signatures upward, checks every validity window, checks key usages and hostnames, and then consults revocation. The worked chain for a site: root (RSA-4096 or ECDSA P-384, valid 15-25 years, offline), intermediate (10 years, pathlen 0), leaf (90 days for Let's Encrypt automation; 1-2 years commercially). Numbers to quote: a chain has three signatures to verify, a 90-day leaf caps the damage of a stolen key, and certificate transparency logs publish every issued certificate to public append-only logs so mis-issuance becomes detectable - the DigiNotar collapse of 2011 (fraudulently issued google.com certificates) is the case study.",
              "Revocation is PKI's honest weakness. CRLs publish a periodically refreshed list of revoked serials - simple, but bandwidth-heavy and stale between issues. OCSP answers one serial at a time - fresh but a privacy leak (the CA learns who browses where) and a latency cost, with soft-fail browsers proceeding when the responder is silent. OCSP stapling pushes the freshness out: the server fetches its own signed OCSP response and staples it into the handshake, fixing both privacy and latency. Short-lived certificates make the whole question quieter - a 90-day or 6-day leaf expires before revocation machinery matters. The exam sentence: revocation is the part of PKI that works on paper more than in browsers, which is why the industry rotated to short lifetimes and transparency.",
              "Exam framing: expect 'explain X.509 certificates and the PKI trust model', 'compare CRL and OCSP', or 'validate this certificate chain'. Give the field list with the three operationally critical extensions, the root-intermediate-leaf walk, the three revocation mechanisms with their trade-offs, and certificate transparency as the mis-issuance detector. Anchor the narrative with DigiNotar 2011 and the 90-day leaf number.",
            ],
            keyTerms: [
              { term: "X.509 v3", definition: "The certificate format binding identity to public key under a CA signature, with extensions." },
              { term: "Chain of trust", definition: "Root CA (offline, in trust stores) -> intermediates -> leaf; signatures verified up the chain." },
              { term: "CRL", definition: "Periodic list of revoked serial numbers - simple, stale between issues." },
              { term: "OCSP / stapling", definition: "Per-certificate freshness query; stapling has the server pre-fetch and attach the signed answer." },
              { term: "Certificate transparency", definition: "Public append-only logs of issued certificates that make mis-issuance detectable." },
            ],
            table: {
              caption: "X.509 v3 - the fields that carry the argument.",
              headers: ["Field", "Meaning", "Why the exam cares"],
              rows: [
                ["Subject / Issuer", "the named identity; who vouches", "binding is the whole point of PKI"],
                ["Validity (notBefore/notAfter)", "usable window", "validation checks dates on every hop"],
                ["Subject Public Key Info", "algorithm + key bytes", "the thing actually being trusted"],
                ["SAN extension", "hostnames covered", "wildcard/SAN mismatches are the classic TLS error"],
                ["Key usage / EKU", "what the key may do", "a signing key doing TLS auth is a finding"],
                ["Basic constraints", "CA flag + path length", "intermediates cannot mint unlimited sub-CAs"],
              ],
            },
            bullets: [
              "Certificate = identity + public key + CA signature over both - vouching as cryptography.",
              "Chain walk: verify every signature to the root, every window, every usage constraint.",
              "Worked chain: offline root (20 years) -> intermediate (10) -> leaf (90 days, automated).",
              "CRL: periodic and bandwidth-heavy; OCSP: fresh, private-leaky, latency-bearing; stapling: server carries the answer.",
              "Short-lived leaves are the modern answer - expire faster than revocation matters.",
              "Certificate transparency + DigiNotar 2011: mis-issuance is a public, detectable event now.",
            ],
            diagram: {
              kind: "pipeline",
              title: "Certificate chain validation",
              caption: "Signature, date, usage, hostname, revocation - five checks in order, every connection.",
              stages: [
                { label: "Fetch chain", note: "leaf + intermediate(s) presented" },
                { label: "Verify signatures", note: "walk up to a root in the trust store" },
                { label: "Check dates", note: "notBefore/notAfter on every certificate" },
                { label: "Check usage", note: "EKU server auth, SAN matches hostname" },
                { label: "Revocation", note: "CRL / OCSP / staple consulted" },
                { label: "Accept", note: "binding recorded; connection proceeds" },
              ],
            },
            callout: {
              type: "exam",
              title: "Revocation is the honest weakness",
              body: "The verdict sentence examiners reward: 'CRLs are stale, OCSP is slow and leaks privacy, stapling fixes both, and short-lived certificates sidestep the whole machinery.' Pair it with DigiNotar 2011 and certificate transparency - a history, a fix and a mechanism in three clauses.",
            },
            examQuestions: [
              {
                q: "Explain the X.509 certificate format, the PKI chain-of-trust model with root/intermediate/leaf, and compare CRL, OCSP and stapling for revocation.",
                marks: 14,
                outline: [
                  "Certificate binds identity to public key under a CA signature",
                  "Fields: subject/issuer, validity, SPKI, SAN, key usage, basic constraints",
                  "Chain: offline root in trust stores -> intermediates with pathlen -> leaf",
                  "Validation: signatures up the chain, dates, usage, hostname match",
                  "CRL: periodic list - simple but stale and bandwidth-heavy",
                  "OCSP: per-query freshness - privacy leak, latency; stapling pre-fetches",
                  "Short-lived leaves + certificate transparency; DigiNotar 2011 case",
                ],
              },
              {
                q: "Why do modern deployments prefer 90-day certificates with automation over 2-year certificates with revocation?",
                marks: 7,
                outline: [
                  "A stolen leaf key expires within 90 days regardless of revocation",
                  "ACME automation makes issuance free and routine",
                  "Revocation checks are unreliable in real browsers (soft-fail)",
                  "Short windows cap the blast radius of mis-issuance",
                  "Transparency logs catch mis-issuance faster than revocation ever did",
                ],
              },
            ],
          },
          {
            number: "5.6",
            title: "Entity authentication - challenge-response and zero-knowledge",
            body: [
              "Authentication asks 'prove you hold the secret' without ever sending the secret, and the taxonomy runs by factor and by protocol. Passwords are knowledge factors with structural problems: reusable across sites, guessable at human entropy, phishable, and fatal in storage - a stolen hash file invites offline dictionary attacks, so passwords must be stored under slow, salted memory-hard functions (bcrypt, scrypt, Argon2) and checked at a deliberate cost of, say, 100-300 milliseconds. Two-factor adds possession (OTP tokens, FIDO keys); biometrics add inherence; but the protocol-level exam material is how possession is proved over an untrusted channel.",
              "Challenge-response with a shared key: the verifier sends a fresh nonce r - 128 bits, so a 2^128 collision concern - and the prover answers tag = MAC_k(r) or tag = MAC_k(r || context). Freshness defeats replay: yesterday's captured response verifies only yesterday's nonce. The design trap is directionality - a reflection attack occurs when the same protocol runs both ways and an attacker bounces a challenge back, so real schemes include both parties' identities and distinct roles in the MAC input. Public-key challenge-response proves possession of a private key: sign the nonce (FIDO does exactly this - the server's challenge signed by the device key), and no shared secret ever exists to steal from the server side.",
              "Zero-knowledge is the aspirational ceiling: prove knowledge of x without leaking anything about it. The Schnorr identification protocol is the syllabus's example and a sigma protocol by shape: the prover commits R = g^k; the verifier challenges c; the prover answers s = k + c x mod q; the verifier checks g^s = R y^c. Soundness: a prover who can answer two different challenges on the same commitment can extract x, so cheating is as hard as discrete log. Zero-knowledge: the transcript is simulatable - (R, c, s) triples can be manufactured without knowing x by picking s and c backwards - so a transcript proves nothing except in live interaction. Fiat-Shamir replaces the interactive challenge with H(R || m) to get signatures (5.3) - the same loop wearing a hat.",
              "Exam framing: expect 'explain challenge-response authentication', 'why nonces', or 'describe a zero-knowledge identification protocol'. Give the password-storage numbers (salted, slow hash, 100-300 ms), the nonce protocol with the reflection trap, and the Schnorr loop with its soundness and simulatability clauses. The sentence examiners reward: freshness is the whole game - every authentication answer should contain the word nonce.",
            ],
            keyTerms: [
              { term: "Challenge-response", definition: "Prove possession by answering a fresh nonce with a MAC or signature over it." },
              { term: "Nonce", definition: "Number used once - the freshness token that defeats replay." },
              { term: "Replay attack", definition: "Re-submitting a captured valid response; killed by per-session nonces." },
              { term: "Zero-knowledge proof", definition: "A transcript that convinces without leaking - simulatable by anyone, sound only live." },
              { term: "Sigma protocol", definition: "Commit-challenge-response shape: Schnorr identification is the canonical one." },
            ],
            codeExample: {
              language: "python",
              caption: "challenge_response.py - nonce freshness with HMAC (demo)",
              code: `import hmac, hashlib, os

key = b"shared-secret-never-sent"
server_nonce = os.urandom(16)            # fresh per attempt
print("server -> client challenge:", server_nonce.hex())

tag = hmac.new(key, server_nonce, hashlib.sha256).digest()
print("client -> server response :", tag.hex()[:32], "...")

expected = hmac.new(key, server_nonce, hashlib.sha256).digest()
print("verify:", hmac.compare_digest(tag, expected))

# replay yesterday's tag against today's nonce fails:
old_nonce = os.urandom(16)
print("replay accepted?",
      hmac.compare_digest(tag,
          hmac.new(key, old_nonce, hashlib.sha256).digest()))`,
            },
            bullets: [
              "Passwords: salted, slow, memory-hard storage (Argon2/bcrypt) and 100-300 ms verification cost.",
              "Challenge-response: fresh 128-bit nonce, answer = MAC_k(nonce) - the secret never crosses the wire.",
              "Reflection trap: include both identities and roles in the MAC input when the protocol runs both ways.",
              "Public-key form: sign the server's nonce - FIDO device keys; nothing to steal from the server.",
              "Schnorr identification: commit g^k, challenge c, respond k + c x; check g^s = R y^c.",
              "Soundness via extractability on two challenges; zero-knowledge via simulatable transcripts.",
            ],
            diagram: {
              kind: "cycle",
              title: "The sigma-protocol loop",
              caption: "Commit, challenge, respond, verify - sound across rounds, simulatable on paper.",
              steps: [
                { label: "Commit", note: "prover sends R = g^k for random k" },
                { label: "Challenge", note: "verifier sends fresh c" },
                { label: "Respond", note: "prover answers s = k + c x mod q" },
                { label: "Verify", note: "check g^s = R y^c" },
                { label: "Repeat", note: "rounds drive cheating probability down" },
              ],
            },
            callout: {
              type: "tip",
              title: "Freshness is the whole game",
              body: "Every authentication answer should contain the word nonce and a one-line replay trace: capture yesterday's response, replay it, watch the fresh nonce reject it. Then name the reflection trap and its fix - identities in the MAC input - and the answer has protocol maturity beyond definitions.",
            },
            examQuestions: [
              {
                q: "Explain entity authentication: why passwords fail and how they should be stored, the shared-key challenge-response protocol with its reflection trap, and public-key authentication as in FIDO.",
                marks: 14,
                outline: [
                  "Password problems: reuse, human entropy, phishing, offline dictionary on stolen hashes",
                  "Storage: salted, slow, memory-hard (bcrypt/scrypt/Argon2); 100-300 ms verify cost",
                  "Challenge-response: verifier sends 128-bit nonce r; prover answers MAC_k(r)",
                  "Replay defeated by freshness; clocks not needed (unlike Kerberos timestamps)",
                  "Reflection attack: bouncing challenges both ways; fix = identities in MAC input",
                  "Public-key form: sign the nonce - FIDO; no server-side secret to steal",
                  "Factors: knowledge, possession, inherence - 2FA combines",
                ],
              },
              {
                q: "Describe the Schnorr identification protocol and explain in what sense it is sound and zero-knowledge.",
                marks: 7,
                outline: [
                  "Commit R = g^k with random k",
                  "Challenge c from the verifier",
                  "Response s = k + c x mod q",
                  "Verification: g^s = R y^c",
                  "Soundness: two challenges on one commitment extract x",
                  "Zero-knowledge: transcripts are simulatable without x - convincing only live",
                ],
              },
            ],
          },
          {
            number: "5.7",
            title: "Secret sharing and threshold cryptography",
            body: [
              "A key in one place is a single point of failure - lose it and the data is gone; steal it and the data is someone else's. Secret sharing removes the point: a (t, n) scheme splits secret s into n shares so that any t of them reconstruct s and any t-1 learn absolutely nothing. Shamir's scheme does it with polynomials over a prime field: pick a random polynomial f(x) = s + a1 x + a2 x^2 + ... + a(t-1) x^(t-1) mod p - the secret is the constant term - and give shareholder i the point (i, f(i)). Reconstruction is Lagrange interpolation evaluated at x = 0; t points determine a degree-(t-1) polynomial uniquely, and t-1 points leave the constant term uniformly random - information-theoretic security, no computational assumption at all.",
              "The toy computation the exam wants: p = 13, secret s = 5, threshold t = 2, shares n = 3, polynomial f(x) = 5 + 4x mod 13. Shares: f(1) = 9, f(2) = 0, f(3) = 4. Reconstruct from (1, 9) and (3, 4): the Lagrange weights at x = 0 are l1 = (0-3)/(1-3) = 3/2 = 3 x 7 = 21 = 8 mod 13 (7 is the inverse of 2), and l2 = (0-1)/(3-1) = -1/2 = 6 mod 13. The secret: s = 9 x 8 + 4 x 6 = 72 + 24 = 96 mod 13 = 5. Check the privacy claim: one share, say (2, 0), fits any constant - 5, 7, 12 - by choosing the slope, so the share alone is information-free.",
              "Threshold cryptography is the payoff: not just storing the secret but using it without ever reassembling it. A root CA key split 5-of-9 across HSMs signs only when a quorum convenes; threshold ECDSA lets a signing committee produce a normal signature while the key never exists in one place; corporate escrow splits a recovery key 3-of-5 across executives; backup systems shard across providers so no single cloud compromise reveals anything. Operational refinements: share refresh re-randomizes the polynomial while keeping the same secret (kills slow share-theft attacks), verifiable secret sharing lets shareholders check consistency, and proactive schemes rotate shares on schedule. The XOR split - n pieces whose XOR is the secret - is the t = n special case: simple, information-theoretic, but brittle since every piece is required.",
              "Exam framing: expect 'explain Shamir's secret sharing with an example', 'what is a (t, n) threshold scheme', or 'applications of secret sharing'. Give the polynomial construction, the p = 13 worked interpolation with both weights computed, the information-theoretic privacy clause, and two threshold applications. The sentence examiners reward: t-1 shares carry zero information - security here is unconditional, not computational.",
            ],
            keyTerms: [
              { term: "(t, n) threshold", definition: "Any t of n shares reconstruct the secret; t-1 reveal nothing." },
              { term: "Shamir's scheme", definition: "Secret as the constant term of a random degree-(t-1) polynomial mod p; shares are points." },
              { term: "Lagrange interpolation", definition: "Reconstructing f(0) from t points with modular-inverse weights." },
              { term: "Information-theoretic security", definition: "Unconditional secrecy of fewer-than-t shares - no hardness assumption needed." },
              { term: "Threshold signing", definition: "Producing a normal signature from a quorum without reassembling the key." },
            ],
            codeExample: {
              language: "python",
              caption: "shamir13.py - the p = 13 toy scheme end to end",
              code: `P = 13

def eval_poly(coeffs, x):          # coeffs[0] is the secret
    return sum(c * pow(x, i, P) for i, c in enumerate(coeffs)) % P

coeffs = [5, 4]                    # f(x) = 5 + 4x, threshold 2
shares = [(i, eval_poly(coeffs, i)) for i in (1, 2, 3)]
print("shares:", shares)           # (1,9), (2,0), (3,4)

def lagrange_at_zero(subset):
    total = 0
    for i, yi in subset:
        num = den = 1
        for j, _ in subset:
            if j != i:
                num = (num * (-j)) % P
                den = (den * (i - j)) % P
        w = num * pow(den, -1, P) % P
        total = (total + yi * w) % P
    return total

print("from (1,9),(3,4):", lagrange_at_zero([(1, 9), (3, 4)]))   # 5
print("from (1,9),(2,0):", lagrange_at_zero([(1, 9), (2, 0)]))   # 5
print("one share (2,0) alone is information-free")`,
            },
            bullets: [
              "Construction: secret = f(0) for random degree-(t-1) polynomial over GF(p); share i = (i, f(i)).",
              "Reconstruction: Lagrange weights at x = 0 use modular inverses - toy p = 13 gives s = 5.",
              "Privacy is unconditional: t-1 shares fit any constant by slope choice - zero information.",
              "Threshold use: 5-of-9 root CA signing, threshold ECDSA, 3-of-5 executive escrow.",
              "Share refresh re-randomizes the polynomial without changing the secret - defeats slow theft.",
              "XOR split is the t = n special case: information-theoretic but every share required.",
            ],
            diagram: {
              kind: "matrix",
              title: "Choosing t and n",
              caption: "Threshold versus shareholder count - the robust zone is high on both axes.",
              axes: { x: "n - shareholders (low -> high)", y: "t - threshold (low -> high)" },
              quadrants: [
                { label: "High t, low n - brittle", note: "lose one share and the secret is gone" },
                { label: "High t, high n - the sweet spot", note: "quorum for critical keys, tolerant of loss" },
                { label: "Low t, low n - convenience", note: "2-of-3 backups; mild protection" },
                { label: "Low t, high n - wide access", note: "easy recovery, weak against compromise" },
              ],
            },
            callout: {
              type: "exam",
              title: "Run the interpolation by hand",
              body: "The full-marks answer computes: shares 9, 0, 4 from f(x) = 5 + 4x mod 13, weights l1 = 8 and l2 = 6 (inverse of 2 mod 13 is 7), and s = 9 x 8 + 4 x 6 = 96 = 5 mod 13. Then state the privacy clause - one share fits any secret - and the applications line. Arithmetic plus concept is the pattern this subject rewards.",
            },
            examQuestions: [
              {
                q: "Explain Shamir's (t, n) secret-sharing scheme: the polynomial construction, a full worked reconstruction over p = 13 with t = 2, and why fewer than t shares leak nothing.",
                marks: 14,
                outline: [
                  "Setup: f(x) = s + a1 x + ... mod p; secret is f(0); shares are points",
                  "Toy: p = 13, s = 5, f(x) = 5 + 4x; shares (1,9), (2,0), (3,4)",
                  "Lagrange at 0: weights 3/2 = 8 and -1/2 = 6 mod 13 (inverse of 2 is 7)",
                  "Reconstruction: 9 x 8 + 4 x 6 = 96 = 5 mod 13",
                  "Privacy: any t-1 shares fit any constant - uniform, information-theoretic",
                  "Threshold applications: root CA 5-of-9, threshold ECDSA, escrow 3-of-5",
                  "Share refresh and VSS as operational refinements",
                ],
              },
              {
                q: "How does threshold signing differ from splitting a key and reassembling it? Name two deployments.",
                marks: 7,
                outline: [
                  "Reassembly creates a plaintext-key moment - the attack window",
                  "Threshold protocols compute the signature interactively; key never exists whole",
                  "Root CA quorum signing across HSMs - 5-of-9",
                  "Threshold ECDSA for committee-controlled keys",
                  "Backup/escrow sharding across providers or executives",
                ],
              },
            ],
          },
          {
            number: "5.8",
            title: "Protocols in practice - the TLS 1.3 handshake as the assembled machine",
            body: [
              "TLS 1.3 is the syllabus's primitives assembling into one protocol: ECDHE for key agreement, certificates and signatures for authentication, HKDF for key derivation, AEAD ciphers (AES-GCM, ChaCha20-Poly1305) for records. The handshake is one round trip. ClientHello carries supported ciphers and a key share (say X25519, a 32-byte public value); ServerHello answers with its key share - both sides now hold the same ECDHE secret, though nobody is authenticated yet; the server then sends its certificate chain, a CertificateVerify signature over the entire transcript so far, and Finished - an HMAC over the transcript under the derived key; the client verifies the chain (5.5), checks the signature (5.1-5.3), derives the same keys with HKDF and answers with its own Finished. From that point every record is AEAD-encrypted under application keys.",
              "The transcript is the load-bearing concept: every handshake message feeds the hash that keys and signatures cover, so no parameter can be swapped mid-handshake unobserved - downgrade attacks die against transcript binding. The numbers: TLS 1.2 needed two round trips and permitted static RSA key exchange (the server's certificate key decrypts the client's pre-master secret - no forward secrecy if that key ever leaks); TLS 1.3 needs one round trip, removed static RSA and CBC entirely, and makes (EC)DHE mandatory - so every session has forward secrecy: recording today's traffic stays decryptable only until the ephemeral keys are gone, and the long-term certificate key's future compromise cannot retroactively open anything. Session resumption via PSK gives 0-RTT data on reconnections, with the honest caveat that 0-RTT records are replayable - they must be idempotent.",
              "The protocol-failure lessons are the exam's framing device. MAC-then-encrypt compositions (TLS 1.2's CBC mode) leaked through padding-oracle timing (Lucky 13) - TLS 1.3 went AEAD-only, encrypt-then-MAC semantics built in. Version and cipher negotiation needed transcript coverage because every unprotected choice is a downgrade lever. PGP's web of trust shows the no-PKI alternative - users endorse users, which scales poorly; Signal shows the modern end-to-end pattern with long-term identity keys plus a double ratchet for per-message forward secrecy. The assembly sentence: confidentiality from ECDHE + AEAD, authentication from certificates + signatures, integrity from transcript-bound HKDF keys - each unit of this syllabus appears exactly once in the handshake.",
              "Exam framing: expect 'describe the TLS 1.3 handshake and the primitives at each step', 'what is forward secrecy and how did TLS 1.3 enforce it', or 'why was static RSA key exchange removed'. Walk the four message groups, quote 1-RTT versus 2-RTT, name the transcript, and close with the 0-RTT replay caveat. The sentence examiners reward: every session's keys die with the session - that is forward secrecy by construction.",
            ],
            keyTerms: [
              { term: "ECDHE", definition: "Ephemeral elliptic-curve Diffie-Hellman - fresh session keys every handshake." },
              { term: "Transcript", definition: "The running hash of all handshake messages that signatures and keys cover." },
              { term: "Forward secrecy", definition: "Session keys stay safe even if the long-term key leaks later - because they were ephemeral." },
              { term: "AEAD record", definition: "AES-GCM or ChaCha20-Poly1305 - confidentiality and integrity in one primitive." },
              { term: "PSK / 0-RTT", definition: "Resumption with early data - faster, but the early records are replayable." },
            ],
            table: {
              caption: "TLS 1.3 handshake - message by message, primitive by primitive.",
              headers: ["Stage", "Message", "Primitive at work", "Defends against"],
              rows: [
                ["1", "ClientHello + key share", "ECDHE (X25519)", "passive eavesdropping on key setup"],
                ["2", "ServerHello + key share", "ECDHE", "offline solution of the session secret"],
                ["3", "Certificate chain", "X.509 + chain validation", "impersonation / MITM"],
                ["4", "CertificateVerify", "RSA-PSS or ECDSA over transcript", "parameter tampering / downgrade"],
                ["5", "Finished (both sides)", "HMAC under HKDF-derived key", "handshake modification"],
                ["6", "Application records", "AEAD (AES-GCM, ChaCha20)", "reading or forging traffic"],
              ],
            },
            bullets: [
              "One round trip: ClientHello + share -> ServerHello + share -> cert, CertificateVerify, Finished.",
              "Transcript binding: signatures and Finished MACs cover the whole handshake - downgrade dies.",
              "Forward secrecy: ECDHE mandatory; static RSA and CBC removed - 1-RTT with PFS by default.",
              "Keys via HKDF from the ECDHE secret; records via AEAD - encrypt-then-MAC semantics built in.",
              "PSK resumption gives 0-RTT, with replayable early data as the priced caveat.",
              "PGP web of trust and Signal's ratchet are the no-PKI and end-to-end contrasts.",
            ],
            diagram: {
              kind: "pyramid",
              title: "From primitives to protocols",
              caption: "Each layer consumes the one below it; TLS 1.3 is the top layer wearing everything.",
              tiers: [
                { label: "Applications", note: "HTTPS, SSH, QUIC, Signal - what users touch" },
                { label: "Protocols", note: "TLS 1.3 handshake, IPsec IKE - assembled flows" },
                { label: "Key exchange + PKI", note: "ECDHE + certificates + signatures" },
                { label: "Compositions", note: "AEAD, HMAC, HKDF - hash-and-sign discipline" },
                { label: "Primitives", note: "AES, SHA-2/3, curve groups, big-integer RSA" },
              ],
            },
            callout: {
              type: "warning",
              title: "0-RTT data is replayable",
              body: "Resumption's early data arrives before the handshake completes, so an attacker can record and replay it. The protocol cannot fix this - applications must accept 0-RTT only for idempotent requests (GETs, not payments). Writing that caveat is the difference between reciting TLS 1.3 and understanding it.",
            },
            examQuestions: [
              {
                q: "Describe the TLS 1.3 handshake message by message, naming the primitive at work at each step, and explain how the design delivers forward secrecy and downgrade protection.",
                marks: 14,
                outline: [
                  "ClientHello: ciphers + ECDHE key share (X25519)",
                  "ServerHello: server key share - shared secret now exists, unauthenticated",
                  "Certificate chain + chain validation (PKI)",
                  "CertificateVerify: signature over the transcript (RSA-PSS/ECDSA)",
                  "Finished both sides: HMAC under HKDF-derived keys",
                  "Records: AEAD (AES-GCM, ChaCha20-Poly1305)",
                  "PFS: ECDHE mandatory, static RSA removed; transcript binding kills downgrades; 0-RTT replay caveat",
                ],
              },
              {
                q: "Why did TLS 1.3 remove static RSA key exchange, and what does forward secrecy protect against concretely?",
                marks: 7,
                outline: [
                  "Static RSA: client encrypts pre-master secret to the server's certificate key",
                  "Whoever records traffic + later steals that key decrypts all past sessions",
                  "ECDHE makes session keys ephemeral - gone after the session",
                  "Future certificate-key compromise cannot retroactively open recorded traffic",
                  "TLS 1.3: 1-RTT with PFS as the default, not an optional suite",
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
        { topic: "Block ciphers: DES/3DES/AES + modes", weight: "about 12-14 marks", note: "Feistel vs SPN contrast, mode table with IV/nonce rules - the review unit's core." },
        { topic: "OTP, perfect secrecy and randomness", weight: "about 10-12 marks", note: "Perfect-secrecy definition, reuse disaster, TRNG/CSPRNG stack." },
        { topic: "RSA: attacks, padding, variants", weight: "about 10-12 marks", note: "Malleability line + attack card + OAEP vs PKCS#1 v1.5." },
        { topic: "Hashes and MACs: Merkle-Damgard, HMAC, GCM", weight: "about 10-12 marks", note: "Birthday arithmetic, length extension, AEAD compositions." },
        { topic: "Number theory + reductions", weight: "about 8-10 marks", note: "Euler/Euclid chain with p=11,q=13; the reduction wrapper pattern." },
        { topic: "DH, ElGamal, hybrid encryption, homomorphic, IBE", weight: "about 10-12 marks", note: "CDH/DDH ladder, reused-r catastrophe, ECC sizing, KEM-DEM assembly, Paillier identity, IBE escrow trade." },
        { topic: "Classical ciphers and their breaks", weight: "about 8-10 marks", note: "Shift/substitution/Vigenere with Kasiski and IC numbers." },
        { topic: "Signatures, PKI, Kerberos (Unit V)", weight: "about 10-12 marks", note: "RSA-PSS/ECDSA with k-discipline, chain validation, CRL-vs-OCSP, n(n-1)/2 arithmetic." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Two hours a day, five days a week; every numerical exercise by hand. This subject is math-examined: work the small-RSA chain, the DH micro-trace, the Vigenere break and the birthday arithmetic until each takes under two minutes.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - history and foundations", tasks: ["Era table + classical ciphers worked", "Frequency attack + Vigenere two stages", "Perfect secrecy definition + OTP requirements", "Pad-reuse trace (Venona)", "Dilemma exits: pads/seed/DH", "PPT, advantage, negl(n), birthday bound", "OWF/trapdoor/hard-core + ladder", "(Gen,Enc,Dec) recipe + efficiency trace"] },
        { week: "Week 2", focus: "Unit II - number theory and pseudo-randomness", tasks: ["Five instruments + p=11,q=13 chain", "Reduction wrapper + ElGamal/DDH trace", "Factoring candidates + RSA card", "Shor/Grover sizing table", "Square-and-multiply + CRT speedup sketch", "PRG/PRF/PRP ladder + GGM", "IND-CPA/CCA games + hybrid proof", "TRNG/CSPRNG stack + Debian case"] },
        { week: "Week 3", focus: "Unit III - block ciphers and modes", tasks: ["Feistel equations + DES card", "AES rounds + avalanche trace", "3DES/2DES MITM arithmetic", "Mode table + ECB-penguin + BEAST", "Cryptanalysis families + MITM trace", "CBC-MAC trace + variable-length flaw", "Merkle-Damgard + HMAC nesting", "GCM flow + composition table + password case"] },
        { week: "Week 4", focus: "Unit IV - asymmetric layer", tasks: ["DLP/CDH/DDH + DH micro-trace", "ECC sizing + curve hygiene", "Notion pyramid + scheme placements", "RSA attacks + OAEP fork", "ElGamal card + reused-r warning", "KEM-DEM assembly + variants", "Paillier identity + hierarchy", "IBE flow + escrow trade"] },
        { week: "Week 5", focus: "Unit V - signatures, trust and protocols", tasks: ["Toy RSA sign/verify + forgery pair", "PSS salt + PKCS#1 v1.5 contrast", "Schnorr/ECDSA equations + k-reuse subtraction", "Kerberos flow + n(n-1)/2 arithmetic", "X.509 fields + chain walk + CRL/OCSP/stapling", "Shamir p=13 interpolation by hand", "TLS 1.3 message walk + PFS sentence"] },
        { week: "Week 6", focus: "Integration, revision and papers", tasks: ["One full numerical per unit by hand", "Draw every diagram once from memory", "Attack/defence tables rewritten", "Weakness atlas (reuse, nonces, padding)", "Two full past papers under time", "One-page sheets: modes/hashes/notions + RSA/ElGamal/IBE cards"] },
      ],
    },
    {
      id: "exam-tips",
      heading: "Exam-hall strategy",
      examTips: [
        "This subject is math-examined: every big answer carries one worked computation - cipher math, a reduction shape, or a birthday bound.",
        "Write assumptions before schemes: 'secure under DDH' is the first clause of any asymmetric answer.",
        "For proofs, the reduction wrapper + contrapositive sentence is the template - embed, harvest, contradict.",
        "Quote the recurring numbers: 2^(n/2) collisions, 2^32 blocks per 64-bit key, IC 0.065 vs 0.038, RSA-2048 ~ 2^112.",
        "Precision pairs earn marks: CDH vs DDH, unpredictable IV vs unique nonce, CPA vs CCA, preimage vs collision.",
        "Every scheme answer ends with its weakness sentence: textbook RSA malleable, ElGamal r-reuse, CBC-MAC variable length, ECB patterns.",
        "Draw the diagrams: Feistel round, CBC chain, KEM-DEM pipeline, Merkle-Damgard, TLS 1.3 message flow - half the marks are structural.",
        "Signature answers carry the k-discipline sentence: 'reuse the nonce once and two signatures subtract to reveal x' - then quote the PS3 case.",
        "PKI answers end with the revocation verdict: CRL stale, OCSP slow and privacy-leaky, stapling fixes both, short-lived leaves sidestep it all.",
        "Time-box: 7-mark about 12 minutes, 14-mark about 22 minutes; leave 10 minutes to re-check modular arithmetic.",
      ],
    },
    {
      id: "slips",
      heading: "Last-day strategy and common slips",
      body: [
        "Last day: rewrite the anchor cards (DES/AES, modes, hash family, RSA attack card, ElGamal, KEM-DEM, IBE, signature families, X.509 chain, TLS 1.3 flow), re-run the p=11,q=13 chain, the DH micro-trace and the Shamir p=13 interpolation by hand, and re-quote the two birthday numbers. No new material tonight.",
      ],
      bullets: [
        "Quoting collision cost as 2^n - it is 2^(n/2); preimage is 2^n.",
        "Saying the OTP is unconditionally secure even reused - reuse cancels pads (Venona).",
        "Writing H(k || m) as a MAC - length extension; it is HMAC's double nest.",
        "Mixing up CBC's unpredictable-IV rule with CTR's unique-nonce rule.",
        "Calling 2DES secure - meet-in-the-middle leaves ~2^57 work.",
        "Encrypting bulk data with raw RSA - hybrid (KEM-DEM) is the only pattern.",
        "Forgetting that textbook RSA is deterministic and malleable - no notion achieved.",
        "Reusing ElGamal randomness r - plaintext ratios and private keys leak.",
        "Confusing CDH (compute) with DDH (distinguish) - different rungs, different proofs.",
        "Claiming ECC resists quantum - Shor breaks ECDLP like it breaks factoring.",
        "Missing the CBC-MAC variable-length flaw - quote the (X, X XOR T) forgery.",
        "Treating IBE as escrow-free - the PKG holds every private key.",
        "Signing with raw RSA in an answer - write the forgery and the PSS fix, every time.",
        "Reusing the ECDSA nonce k - two signatures subtract to the private key.",
        "Saying MACs give non-repudiation - the verifier holds the forging key.",
        "Claiming fewer-than-t shares 'hide' the secret weakly - they carry zero information, unconditionally.",
        "Forgetting the 0-RTT replay caveat in TLS 1.3 answers - early data is replayable by design.",
      ],
    },
  ],
};
