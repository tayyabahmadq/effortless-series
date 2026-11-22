/**
 * Academics - RGPV Cyber Security 8th-semester subject: CY-801
 * Hardware Security.
 *
 * Structure mirrors subject-ad-502.ts: units -> one chapter per unit ->
 * numbered sections.  Each section carries body paragraphs, bullets, one
 * diagram, a table or code sample, a callout, key terms, and examiner-style
 * exam questions (7- or 14-mark, each with a 5-7 point outline).
 */

import type { AcademicSubject } from "./types";

export const cy801: AcademicSubject = {
  id: "cy-801",
  code: "CY-801",
  title: "Hardware Security",
  semester: "VIII Semester",
  program: "RGPV · Cyber Security",
  tagline:
    "Security below the software line as one connected subject: the finite-field and public-key mathematics that crypto hardware computes, the FPGA implementation flow, PUFs as silicon fingerprints, side-channel and fault attacks on running ciphers, verification and the IC supply chain, and the piracy war - logic locking, PUF-based defence, and the machine-learning attacks that model PUFs from their own responses.",
  description:
    "Five units walk from the foundations - the hardware security threat landscape, the algebra of finite fields, the mathematical theory of public-key cryptography, FPGA digital design, and support-vector-machine classification - into the useful primitives: cryptographic hardware and its FPGA optimization, physically unclonable functions with their implementations, quality metrics and response-improvement techniques. Unit III attacks running hardware: the side-channel idea, Kocher's power analysis on DES, masking and hiding defences, template attacks, and cache attacks. Unit IV covers testability and verification: fault tolerance, the fault-attack family from Bellcore to DFA, finite-field arithmetic verification, and the modern IC design flow with its trust implications. Unit V closes the piracy war: IP and IC piracy classes, watermarking and logic locking, PUF-based hardware locking, and the model-building attacks - SVM modelling of arbiter PUFs and genetic-programming modelling of ring-oscillator PUFs - with the defences that raise their cost.",
  accentColor: "#8b5cf6",
  emoji: "HS",
  unitCount: 5,
  totalSections: 35,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Foundations: Fields, Public Keys, FPGAs and Classification",
      summary:
        "Unit I lays the mathematical and engineering base: the hardware security threat landscape, the algebra of finite fields, the basics of public-key cryptography's number theory, digital design on FPGAs, FPGA security considerations, and support-vector-machine classification - the tool that returns in Unit V to attack PUFs.",
      chapter: {
        number: "01",
        title: "The Mathematics and the Silicon",
        intro:
          "Unit I covers the overview of hardware security issues, the algebra of finite fields, the basics of the mathematical theory of public-key cryptography, the basics of digital design on FPGAs, FPGA security considerations, classification using support vector machines, and the threat landscape that organizes the subject.",
        inOneBreath:
          "Hardware security attacks the implementation, not the algorithm: side channels leak, faults inject, Trojans hide, pirates copy. Finite fields are crypto's arithmetic substrate - AES works in GF(2^8) modulo x^8+x^4+x^3+x+1; public keys rest on trapdoors (RSA on factoring, ECC on the discrete log). The FPGA flow runs HDL -> synthesis -> place-and-route -> bitstream, with LUTs as the reconfigurable fabric and bitstream encryption as the board-level defence. SVMs classify by maximum-margin hyperplanes over support vectors and kernel tricks - the same mathematics that Unit V turns into a PUF model-building weapon. The threat landscape maps actor, access and technique: the chip's own silicon becomes both the attack surface and the defence.",
        sections: [
          {
            number: "1.1",
            title: "Overview of hardware security issues",
            body: [
              "Hardware security is the protection of computing systems at and below the chip boundary - and its premise is that software security's assumptions stop holding there. The issues the syllabus names: implementation leakage (a mathematically perfect cipher whose power consumption betrays its key - Unit III), physical fault injection (a glitched voltage that breaks RSA - Unit IV), malicious circuitry (hardware Trojans inserted in the supply chain), IP theft (a design cloned from a stolen netlist - Unit V), and physical access (the attacker with the board, the probe and the time). The subject's organizing sentence: hardware security studies the gap between the algorithm as specified and the circuit as manufactured - every attack in this course lives in that gap.",
              "The hardware-versus-software contrast fixes the vocabulary. Software attacks exploit code the attacker can read and patch; hardware attacks exploit physics the attacker can measure and the fabrication the attacker can intercept. The worked contrast: AES-128 as an algorithm is unbroken (the best known attack needs 2^126 operations); the same AES on a smart card falls to differential power analysis in hours with an oscilloscope - the algorithm's security claim is intact while the implementation's is void. The reverse also holds: a hardware rootkit below the OS is invisible to every software scanner - the trust boundary moves down, and so must the defences.",
              "The threat landscape maps the field: by actor (the foundry insider, the supply-chain interceptor, the lab adversary with the probe station, the remote attacker who never touches the device), by access (invasive - decapsulation and probing; semi-invasive - fault injection and EM emanation; non-invasive - power, timing, cache), and by layer (circuit, architecture, protocol, system). The exam's closing sentence: the hardware attacker's advantage is physical presence or supply-chain position, and the hardware defender's job is making leakage, faults, Trojans and piracy expensive enough to be pointless.",
              "Exam framing: 'Give an overview of hardware security issues' is a 7-14 mark opener. Define the field with the specification-versus-manufacture gap, work the AES contrast (2^126 unbroken vs DPA hours), present the three-axis threat landscape, and close with the attacker-advantage sentence.",
            ],
            keyTerms: [
              { term: "Hardware security", definition: "Protection at and below the chip boundary - the gap between specified algorithm and manufactured circuit." },
              { term: "Invasive / semi-invasive / non-invasive", definition: "The attacker-access ladder from decapsulation to remote observation." },
              { term: "Implementation leakage", definition: "Physical emanations (power, EM, time, cache) betraying secret-dependent computation." },
              { term: "Hardware Trojan", definition: "Malicious circuitry inserted during design or fabrication." },
            ],
            diagram: {
              kind: "matrix",
              title: "The hardware threat landscape",
              caption: "Actor access against technique class - each quadrant is one of this subject's units.",
              axes: { x: "Attacker access (remote -> physical/supply-chain)", y: "Technique (observe -> modify)" },
              quadrants: [
                { label: "Non-invasive observe", note: "power, timing, cache - Unit III side channels" },
                { label: "Non-invasive modify", note: "voltage/clock glitches - Unit IV fault attacks" },
                { label: "Physical observe", note: "probing, reverse engineering - Units IV-V" },
                { label: "Supply-chain modify", note: "Trojans, overbuilding, cloning - Units IV-V" },
              ],
            },
            bullets: [
              "Premise: the gap between the algorithm as specified and the circuit as manufactured is the attack surface.",
              "AES-128 unbroken as math (2^126) yet broken on-card by DPA in hours - implementation voids the claim.",
              "Hardware rootkits below the OS are invisible to software scanners - the trust boundary moves down.",
              "Actors: foundry insider, supply-chain interceptor, lab adversary, remote attacker.",
              "Access ladder: invasive (probe), semi-invasive (glitch/EM), non-invasive (power/timing/cache).",
              "Closing: make leakage, faults, Trojans and piracy expensive enough to be pointless.",
            ],
            callout: {
              type: "exam",
              title: "The gap is the syllabus",
              body: "The organizing sentence: 'hardware security studies the gap between the algorithm as specified and the circuit as manufactured.' Map each unit onto one quadrant of the landscape matrix and the overview answer writes itself.",
            },
            table: {
              caption: "The AES contrast - algorithm vs implementation.",
              headers: ["Claim", "Algorithm view", "Implementation view"],
              rows: [
                ["Key search", "2^126 operations - secure", "Unchanged"],
                ["Power side channel", "Not applicable", "DPA recovers key in hours"],
                ["Fault injection", "Not applicable", "One glitched RSA signature leaks p"],
                ["Supply chain", "Not applicable", "Trojan inserted at untrusted fab"],
              ],
            },
            examQuestions: [
              {
                q: "Give an overview of the issues in hardware security: the specification-versus-manufacture gap, the AES algorithm-versus-implementation contrast, the three-axis threat landscape, and the attacker-advantage closing.",
                marks: 14,
                outline: [
                  "Definition: protection at/below the chip boundary",
                  "The gap: specified algorithm vs manufactured circuit",
                  "Worked contrast: AES 2^126 vs DPA-in-hours on a card",
                  "Reverse case: rootkit below OS invisible to software tools",
                  "Actors and the access ladder: invasive/semi/non-invasive",
                  "Landscape matrix: observe/modify x remote/physical",
                  "Closing: raise attacker cost across leakage, faults, Trojans, piracy",
                ],
              },
              {
                q: "Why does a mathematically secure cipher still fail on real hardware?",
                marks: 7,
                outline: [
                  "Security proofs assume ideal, constant-time computation",
                  "Real circuits leak secret-dependent power, EM, timing",
                  "Physical access enables fault injection",
                  "The proof's threat model excludes the physical attacker",
                  "Hence implementation security is a separate discipline",
                ],
              },
            ],
          },
          {
            number: "1.2",
            title: "The algebra of finite fields",
            body: [
              "Finite fields are cryptography's arithmetic substrate, and the syllabus starts here because every crypto circuit computes in one. The definition: a field is a set with addition and multiplication where every element (except zero) has an inverse; a finite field exists only when the number of elements is a prime power p^n - written GF(p^n). The two families: GF(p) is arithmetic modulo the prime p (the field RSA hashes and signatures reduce into), and GF(2^n) is the engineer's field - elements are n-bit vectors, addition is XOR (no carries), multiplication is polynomial multiplication modulo an irreducible degree-n polynomial. The canonical case: AES's S-box and MixColumns live in GF(2^8) modulo the AES polynomial x^8 + x^4 + x^3 + x + 1 (0x11B) - the byte 0x57 multiplied by 0x83 works out to 0xC1 through the shift-and-reduce loop.",
              "The worked multiplication is the exam's computation: 0x57 x 0x83 in GF(2^8) - xtime-style doubling gives 0x57<<1 = 0xAE (no reduction), 0xAE<<1 = 0x15C -> reduce (XOR 0x11B) = 0x45, 0x45<<1 = 0x8A, 0x8A<<1 = 0x114 -> reduce = 0x05, 0x05<<1 = 0x0A, 0x0A<<1 = 0x14, 0x14<<1 = 0x28 - reading 0x83 = 1000_0011 as 0x80 + 0x02 + 0x01, the sum is 0x05 XOR 0xAE XOR 0x57 = 0xC1. Every step is XOR and conditional reduction - exactly the operations a circuit computes in one clock, and exactly why hardware implements GF(2^n) arithmetic as shift registers and XOR trees.",
              "The structural properties are the exam's theory marks: the field's elements form a group under multiplication (order 2^n - 1), every non-zero element is a generator's power (the discrete log returns in Unit III's context), addition is its own inverse (XOR twice = identity - the masking defence of Unit III), and squaring is linear in GF(2^n) (the property inversion circuits exploit via Itoh-Tsujii chains). The closing sentence: finite fields are where cryptography's algebra and hardware's gates meet - the S-box is a field-inversion circuit wearing a lookup table's clothes.",
              "Exam framing: 'Explain finite fields and their role in cryptography' is a 7-14 mark staple. Define GF(p^n) with the two families, work the 0x57 x 0x83 multiplication, and close with the structural properties and the S-box sentence.",
            ],
            keyTerms: [
              { term: "GF(2^8)", definition: "The 256-element field of AES - bytes as polynomials modulo 0x11B." },
              { term: "Irreducible polynomial", definition: "The modulus making polynomial arithmetic a field (AES: x^8+x^4+x^3+x+1)." },
              { term: "xtime", definition: "The double-and-reduce step - hardware's multiply-by-x primitive." },
              { term: "Additive inverse", definition: "In GF(2^n) every element is its own additive inverse - XOR twice is identity." },
            ],
            diagram: {
              kind: "flow",
              title: "0x57 x 0x83 in GF(2^8), step by step",
              caption: "Doubling with conditional reduction - seven xtime steps and three XORs.",
              steps: [
                { label: "Decode 0x83", note: "1000_0011 = 0x80 + 0x02 + 0x01" },
                { label: "xtime chain", note: "0xAE, 0x45, 0x8A, 0x05, 0x0A, 0x14, 0x28" },
                { label: "Collect", note: "0x28 (x64) + 0xAE (x2) + 0x57 (x1)" },
                { label: "XOR sum", note: "0x28 ^ 0xAE ^ 0x57 = 0xC1" },
                { label: "Hardware", note: "one clock: shift register + XOR tree" },
              ],
            },
            bullets: [
              "Fields exist only at prime-power sizes: GF(p) = modular arithmetic, GF(2^n) = XOR-plus-reduce.",
              "AES polynomial: x^8 + x^4 + x^3 + x + 1 = 0x11B; MixColumns and S-box live in this field.",
              "Worked: 0x57 x 0x83 = 0xC1 via seven xtime steps and three XORs.",
              "Hardware realization: shift register + XOR tree in one clock cycle.",
              "Structural facts: multiplicative group order 2^n - 1, self-inverse addition, linear squaring (Itoh-Tsujii).",
              "Closing: the S-box is a field-inversion circuit wearing a LUT's clothes.",
            ],
            callout: {
              type: "exam",
              title: "XOR twice is identity - remember it",
              body: "The property examiners test: 'in GF(2^n), addition is XOR and every element is its own additive inverse.' It is also Unit III's masking defence - one fact, two marks in two units.",
            },
            codeExample: {
              language: "python",
              caption: "gf28.py - the worked multiplication as a circuit would run it",
              code: `AES_POLY = 0x11B

def xtime(a):                    # multiply by x (double + reduce)
    a <<= 1
    if a & 0x100:
        a ^= AES_POLY
    return a & 0xFF

def gf_mul(a, b):                # russian-peasant in GF(2^8)
    r = 0
    while b:
        if b & 1:
            r ^= a
        a = xtime(a)
        b >>= 1
    return r

print(hex(gf_mul(0x57, 0x83)))   # 0xc1`,
            },
            examQuestions: [
              {
                q: "Explain the algebra of finite fields: the GF(p^n) definition and two families, the AES polynomial, the worked 0x57 x 0x83 multiplication, and the structural properties hardware exploits.",
                marks: 14,
                outline: [
                  "Field definition and prime-power existence",
                  "GF(p) modular vs GF(2^n) XOR-plus-reduce",
                  "AES polynomial 0x11B and its role in S-box/MixColumns",
                  "Worked multiplication: xtime chain, collect, XOR = 0xC1",
                  "Hardware: shift register + XOR tree, one clock",
                  "Group order 2^n - 1; self-inverse addition; linear squaring",
                  "S-box as field inversion closing",
                ],
              },
              {
                q: "Why does GF(2^n) arithmetic suit hardware better than GF(p)?",
                marks: 7,
                outline: [
                  "Addition is XOR - no carry propagation",
                  "Multiplication is shift-and-reduce - regular, unrolled easily",
                  "No modular reduction with big integers",
                  "Constant-time by construction",
                  "GF(p) needs carry-logic and expensive reduction",
                ],
              },
            ],
          },
          {
            number: "1.3",
            title: "Basics of the mathematical theory of public-key cryptography",
            body: [
              "Public-key cryptography rests on trapdoor one-way functions: operations easy to compute, hard to invert without a secret - and the syllabus's 'basics of the mathematical theory' means the two families. RSA: keys from primes (n = p·q, e = 65537, d = e^-1 mod phi(n) with phi = (p-1)(q-1)); encryption c = m^e mod n, decryption m = c^d mod n; security rests on factoring n - the worked mini-example p = 61, q = 53, n = 3233, phi = 3120, d = 2753 encrypts m = 65 to c = 2790 and back. ECC: keys from elliptic curves over finite fields - y^2 = x^3 + ax + b with point addition as the group operation; the trapdoor is the elliptic-curve discrete logarithm (given P and Q = kP, find k); the worked strength anchor: a 256-bit ECC key offers comparable security to a 3072-bit RSA key.",
              "The worked RSA toy is the exam's computation: p = 61, q = 53 -> n = 3233; phi(3233) = 60 x 52 = 3120; e = 65537 mod 3120 = 17; d = 17^-1 mod 3120 = 2753 (the extended Euclid step); encrypt m = 65: c = 65^17 mod 3233 = 2790; decrypt: 2790^2753 mod 3233 = 65. Every step is the number theory a hardware implementation accelerates - modular exponentiation via square-and-multiply (the circuit whose power leak Unit III attacks), CRT decryption (the path Unit IV's Bellcore fault breaks), and the Chinese-remainder structure that doubles throughput.",
              "The hardware relevance completes the section: public-key operations are arithmetic on big numbers - modular multiplication is the primitive (Montgomery multiplication avoiding division), exponentiation is its repetition (the square-and-multiply sequence is secret-dependent - the SPA/DPA surface), and key generation needs primality tests (Miller-Rabin) and randomness (the RNG that Unit II's PUFs and TRNGs feed). The closing sentence: public-key security is number theory running on arithmetic circuits - and every attack in this subject targets the circuit's implementation of the theory, never the theory.",
              "Exam framing: 'Explain the mathematical basis of public-key cryptography' is a 7-14 mark staple. Define trapdoor functions, work the RSA toy example end to end, contrast ECC with the 256/3072 anchor, and close with the hardware-relevance sentence.",
            ],
            keyTerms: [
              { term: "Trapdoor function", definition: "Easy forward, hard inverse without the secret - factoring and discrete log." },
              { term: "phi(n)", definition: "Euler's totient; (p-1)(q-1) for RSA moduli - the private key's material." },
              { term: "Square-and-multiply", definition: "The exponentiation algorithm whose key-dependent pattern leaks (SPA/DPA)." },
              { term: "ECDLP", definition: "The elliptic-curve discrete logarithm - ECC's trapdoor." },
            ],
            diagram: {
              kind: "flow",
              title: "The RSA toy example, end to end",
              caption: "p=61, q=53 - every step is a circuit primitive hardware accelerates.",
              steps: [
                { label: "Primes", note: "p = 61, q = 53 -> n = 3233" },
                { label: "Totient", note: "phi = 60 x 52 = 3120" },
                { label: "Exponents", note: "e = 17 (65537 mod 3120); d = 2753" },
                { label: "Encrypt", note: "65^17 mod 3233 = 2790" },
                { label: "Decrypt", note: "2790^2753 mod 3233 = 65" },
              ],
            },
            bullets: [
              "Trapdoor families: factoring (RSA), discrete log (DH/ECC) - easy forward, hard inverse.",
              "RSA keys: n = p·q, e = 65537, d = e^-1 mod phi(n); worked toy 3233/3120/2753.",
              "Worked encryption: 65^17 = 2790; decryption 2790^2753 = 65.",
              "ECC: y^2 = x^3 + ax + b over GF(p) or GF(2^n); kP trapdoor; 256-bit ECC ~ 3072-bit RSA.",
              "Hardware primitives: Montgomery multiplication, square-and-multiply, CRT, Miller-Rabin, TRNG.",
              "Closing: attacks target the circuit, never the theory.",
            ],
            callout: {
              type: "exam",
              title: "Run the toy once by hand",
              body: "The numerical mark lives in the toy: compute n, phi, e, d, encrypt 65, decrypt 2790 - once by hand in revision. The square-and-multiply pattern inside 65^17 is Unit III's SPA target; connect them and the theory section earns its hardware keep.",
            },
            table: {
              caption: "RSA vs ECC at a glance.",
              headers: ["Property", "RSA", "ECC"],
              rows: [
                ["Trapdoor", "Integer factorization", "Elliptic-curve discrete log"],
                ["Key sizes (128-bit security)", "3072 bits", "256 bits"],
                ["Primitive", "Modular exponentiation", "Point multiplication"],
                ["Hardware cost", "Big-integer multipliers", "Field adders + point logic"],
                ["Signature speed", "Slow sign, fast verify", "Balanced both ways"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the mathematical basis of public-key cryptography: trapdoor functions, the worked RSA toy example, ECC contrast with key-size anchors, and the hardware primitives involved.",
                marks: 14,
                outline: [
                  "Trapdoor definition and the two families",
                  "RSA key generation: n, phi, e, d - toy numbers",
                  "Worked encrypt 65 -> 2790 and decrypt back",
                  "ECC curve equation, point groups, ECDLP",
                  "256-bit ECC vs 3072-bit RSA anchor",
                  "Hardware: Montgomery, square-and-multiply, CRT, primality, TRNG",
                  "Circuit-not-theory closing",
                ],
              },
              {
                q: "Why is square-and-multiply a side-channel liability?",
                marks: 7,
                outline: [
                  "Each exponent bit selects multiply-or-skip",
                  "Power traces show the key-dependent pattern",
                  "SPA reads the sequence directly",
                  "DPA correlates over many traces",
                  "Defences: constant-time ladders, blinding (Unit III)",
                ],
              },
            ],
          },
          {
            number: "1.4",
            title: "Basics of digital design on FPGAs",
            body: [
              "The FPGA (field-programmable gate array) is this subject's reconfigurable substrate: a fabric of lookup tables (LUTs - each a small truth table computing any function of its inputs), flip-flops (the registers), DSP slices (fast multipliers), block RAM, and a routing network - all configured by a bitstream. The design flow: HDL description (Verilog/VHDL - behaviour, not wiring), synthesis (HDL to netlist of LUTs/FFs), place-and-route (netlist to physical fabric resources), timing closure (meeting the clock), and bitstream generation (the configuration file that programs the fabric). The worked flow numbers: an AES-128 round mapped to a mid-range FPGA consumes roughly 2,000-3,000 LUTs and runs at 150-250 MHz; a fully unrolled 10-round pipeline multiplies the area by ~10 and lifts throughput from ~2 Gbps (iterated) to ~20 Gbps (pipelined).",
              "The worked resource accounting is the exam's arithmetic: the fabric of a Xilinx Artix-class device offers ~33,000 LUTs and 50 DSP slices; an iterated AES needs 2 LUT-k + memory; an unrolled AES-10-round needs ~20 LUT-k (the round function replicated) but no loop control; a pipelined variant interleaves blocks for throughput. The design verbs: serialize (area for latency), unroll (latency for area), pipeline (throughput for registers) - the three levers Unit 2.2 optimizes.",
              "FPGA security considerations close the section and preview the board-level threat model: the bitstream is the design's crown jewels (bitstream encryption and authentication - the SHA/HMAC-encrypted configuration), readback ports must be disabled (the JTAG/readback exfiltration path), and the fabric itself becomes an attack surface (power monitoring for side channels - Unit III, Trojan insertion in third-party IP - Unit IV). The closing sentence: the FPGA flow is the hardware engineer's compiler-and-silicon in one afternoon - and every stage from HDL to bitstream carries a security decision this subject tracks.",
              "Exam framing: 'Explain the basics of digital design on FPGAs' is a 7-14 mark staple. Give the fabric resources and the five-step flow, work the AES resource/throughput accounting, state the serialize-unroll-pipeline levers, and close with the security considerations.",
            ],
            keyTerms: [
              { term: "LUT", definition: "Lookup table - the FPGA's universal small logic block." },
              { term: "Bitstream", definition: "The configuration file programming the fabric - encrypted in secure designs." },
              { term: "Place-and-route", definition: "Mapping the synthesized netlist onto physical fabric resources." },
              { term: "Unrolling", definition: "Replicating round logic for throughput at area cost." },
            ],
            diagram: {
              kind: "pipeline",
              title: "The FPGA design flow",
              caption: "HDL to bitstream - every stage is a security decision point.",
              stages: [
                { label: "HDL (Verilog/VHDL)", note: "behavioural description" },
                { label: "Synthesis", note: "to LUT/FF netlist" },
                { label: "Place-and-route", note: "onto fabric resources" },
                { label: "Timing closure", note: "meet the clock (150-250 MHz)" },
                { label: "Bitstream", note: "encrypt + authenticate before load" },
              ],
            },
            bullets: [
              "Fabric: LUTs, flip-flops, DSP slices, block RAM, routing - configured by bitstream.",
              "Flow: HDL -> synthesis -> place-and-route -> timing closure -> bitstream.",
              "Worked AES: ~2-3k LUTs iterated at 2 Gbps; ~20k LUTs unrolled at ~20 Gbps.",
              "Levers: serialize (area), unroll (latency), pipeline (throughput).",
              "Security: bitstream encryption/authentication, readback disable, JTAG control.",
              "The fabric is also the attack surface - power leaks, IP embeds.",
            ],
            callout: {
              type: "exam",
              title: "The three levers of crypto-hardware design",
              body: "The design sentence: 'serialize buys area, unrolling buys latency, pipelining buys throughput - and the round count is the exchange rate.' Quote the 2 Gbps vs 20 Gbps worked numbers and Unit 2.2 inherits the vocabulary.",
            },
            table: {
              caption: "AES-128 on a mid-range FPGA - the worked accounting.",
              headers: ["Architecture", "LUTs", "Throughput", "Trade"],
              rows: [
                ["Iterated (1 round)", "~2-3k", "~2 Gbps", "Area-minimal"],
                ["Unrolled (10 rounds)", "~20k", "~20 Gbps", "Area-heavy, no loop logic"],
                ["Pipelined", "~20k + registers", "~20 Gbps sustained", "Interleaved blocks"],
                ["Serialized (1 S-box)", "<1k", "~50 Mbps", "Extreme area saving"],
              ],
            },
            examQuestions: [
              {
                q: "Explain FPGA-based digital design: the fabric resources, the five-step flow, the worked AES resource/throughput accounting, and the security considerations.",
                marks: 14,
                outline: [
                  "Fabric: LUTs, FFs, DSP, BRAM, routing; bitstream configures",
                  "Flow: HDL -> synthesis -> P&R -> timing -> bitstream",
                  "Worked: 2-3k LUTs @ 2 Gbps iterated vs 20k @ 20 Gbps unrolled",
                  "Levers: serialize/unroll/pipeline",
                  "Bitstream encryption and authentication",
                  "Readback and JTAG disablement",
                  "Fabric-as-attack-surface closing",
                ],
              },
              {
                q: "Why is bitstream encryption the FPGA's first security control?",
                marks: 7,
                outline: [
                  "The bitstream IS the design - netlist, keys, IP",
                  "Unencrypted bitstreams are readable off the wire",
                  "Cloning = load the captured bitstream elsewhere",
                  "Encrypted boot ties configuration to on-chip keys",
                  "Authentication prevents tampered bitstreams",
                ],
              },
            ],
          },
          {
            number: "1.5",
            title: "FPGA security considerations",
            body: [
              "FPGAs blur the hardware-software line - the design is code until the bitstream makes it silicon - and their security considerations run across that line. The configuration chain: bitstream confidentiality (encrypted configuration with battery-backed or eFUSE keys - the stolen bitstream that cannot be loaded elsewhere), bitstream authentication (HMAC over the stream - the tampered-bitstream rejection), and partial reconfiguration security (the dynamic regions that must not overwrite the secure monitor). The IP-protection chain: third-party IP trust (the purchased core that could embed a Trojan - Unit IV's supply chain), netlist-level protection (logic locking of Unit V), and readback/JTAG lockdown (the debug interfaces that are exfiltration paths). The side-channel chain: FPGA power analysis is cheaper than ASIC (the oscilloscope on the board - Unit III), and the clock glitching entry points (Unit IV).",
              "The worked threat walk shows the chains colliding: a competitor clones an FPGA product - the unencrypted bitstream is captured from the configuration flash (confidentiality failure), loaded into a same-family device (authentication failure), and the design ships; the counter-case with eFUSE-keyed encrypted bitstreams: the captured stream is useless without the on-chip key (burned, read-protected), and the HMAC rejects the modified stream - two controls, one clone prevented. The numbers: encrypted-configuration designs add ~5-8% boot-time overhead and one key-storage element; the clone economics flip from free to infeasible.",
              "The design-for-security checklist completes the section: encrypt and authenticate the bitstream, disable readback and constrain JTAG, trust no third-party IP without review or isolation, partition sensitive logic into secure regions, and treat the board's power/clock as attack surface (filtering, sensors). The closing sentence: FPGA security is configuration-chain security - the design's value lives in the bitstream, and every defence is about who can read, modify or clone it.",
              "Exam framing: 'Explain FPGA security considerations' is a 7-14 mark staple. Give the three chains (configuration, IP protection, side-channel), work the cloning threat walk with its eFUSE counter-case, and close with the checklist.",
            ],
            keyTerms: [
              { term: "eFUSE key", definition: "One-time-programmable on-chip key storage for bitstream decryption." },
              { term: "Partial reconfiguration", definition: "Runtime-reconfigurable fabric regions - with their own security scope." },
              { term: "Readback attack", definition: "Reading configuration/state through debug ports - the exfiltration path." },
              { term: "Bitstream authentication", definition: "HMAC over configuration rejecting modified streams." },
            ],
            diagram: {
              kind: "compare",
              title: "Cloning an FPGA design: with and without controls",
              caption: "Two failures versus two controls - the clone economics flip.",
              left: {
                heading: "Unprotected design",
                items: [
                  "Bitstream read from configuration flash",
                  "No authentication - modified streams load",
                  "Clone ships in days",
                  "Readback/JTAG open for state extraction",
                ],
              },
              right: {
                heading: "Protected design (eFUSE + HMAC)",
                items: [
                  "Encrypted stream useless without on-chip key",
                  "HMAC rejects any tampered stream",
                  "Clone economics: infeasible",
                  "Readback disabled; JTAG constrained",
                ],
              },
            },
            bullets: [
              "Configuration chain: encryption (eFUSE/battery keys), authentication (HMAC), partial-reconfig scoping.",
              "IP-protection chain: third-party IP trust, logic locking (Unit V), debug-port lockdown.",
              "Side-channel chain: board-level power/clock as attack surface (Units III-IV).",
              "Worked walk: flash-captured bitstream vs eFUSE-keyed failure; 5-8% boot overhead for the controls.",
              "Checklist: encrypt+authenticate, disable readback, isolate IP, partition regions, filter power/clock.",
              "Closing: FPGA security = configuration-chain security.",
            ],
            callout: {
              type: "exam",
              title: "The bitstream is the design",
              body: "The FPGA sentence: 'the design's value lives in the bitstream - every FPGA defence answers who can read, modify or clone it.' The eFUSE counter-case is the worked demonstration examiners ask for.",
            },
            table: {
              caption: "FPGA security controls and their threats.",
              headers: ["Control", "Threat answered", "Cost"],
              rows: [
                ["Encrypted configuration", "Bitstream capture/clone", "Boot-time +5-8%, key storage"],
                ["HMAC authentication", "Tampered bitstream", "Boot-time verification"],
                ["Readback/JTAG lockdown", "State and netlist exfiltration", "Debug inconvenience"],
                ["Third-party IP review", "Embedded Trojan", "Audit effort"],
                ["Power/clock filtering", "Glitch and DPA entry points", "Board components"],
              ],
            },
            examQuestions: [
              {
                q: "Explain FPGA security considerations: the three chains, the worked cloning walk with the eFUSE counter-case, and the design-for-security checklist.",
                marks: 14,
                outline: [
                  "Configuration chain: encryption, authentication, partial-reconfig scoping",
                  "IP chain: third-party trust, logic locking, debug lockdown",
                  "Side-channel chain: board power/clock surface",
                  "Worked walk: flash capture vs eFUSE + HMAC failure",
                  "Overhead: 5-8% boot, one key element",
                  "Checklist of five controls",
                  "Configuration-chain closing",
                ],
              },
              {
                q: "Why are JTAG and readback ports security liabilities?",
                marks: 7,
                outline: [
                  "They exist to inspect internal state by design",
                  "Readback can dump configuration and register state",
                  "JTAG enables boundary-scan probing of nets",
                  "Unfused devices trust whoever holds the cable",
                  "Lockdown + authenticated debug is the fix",
                ],
              },
            ],
          },
          {
            number: "1.6",
            title: "Classification using support vector machines (SVMs)",
            body: [
              "The support vector machine is the syllabus's classification tool - and its placement here is deliberate: Unit V uses SVMs to model PUFs from their challenge-response pairs, so the mathematics lands now. The setup: training points (x_i, y_i) with labels y_i = +/-1; the linear SVM finds the hyperplane w·x + b = 0 maximizing the margin - the distance to the nearest points of each class; the support vectors are exactly those nearest points - every other training point could be deleted without moving the hyperplane. The optimization: minimize (1/2)||w||^2 subject to y_i(w·x_i + b) >= 1 - a convex quadratic program whose solution is w = sum alpha_i y_i x_i with non-zero alpha only on support vectors.",
              "The worked example shows the geometry: four 2-D points, class + at (2,2) and (4,4), class - at (2,4) and (4,2); the maximal-margin hyperplane is x1 = x2 (the diagonal), support vectors are all four points, the margin is sqrt(2) wide; a new point (3,3.5) classifies + (above the diagonal). The kernel trick extends the geometry: K(x, z) = <phi(x), phi(z)> computes inner products in higher-dimensional spaces without visiting them - the polynomial kernel K = (1 + x·z)^2 for feature interactions, the RBF kernel K = exp(-gamma||x-z||^2) for local structure; the PUF-modelling attack of Unit V is a linear SVM over a delay-model feature map (the additive delay model of the arbiter PUF is linear in engineered features - which is precisely why it falls).",
              "The hardware-relevance framing completes the section: classification appears twice in this subject - offensively (Unit V's model-building: collect ~10^4-10^5 challenge-response pairs, train, predict unseen challenges) and defensively (hardware Trojan detection: side-channel feature vectors classified as Trojan-free/Trojaned). The closing sentence: the SVM is this subject's bridge between learning and silicon - the same maximum-margin mathematics that classifies chips defends them in Unit IV and attacks them in Unit V.",
              "Exam framing: 'Explain classification using SVMs' is a 7-14 mark staple. Give the margin/support-vector setup with the optimization, work the four-point example, explain the kernel trick, and close with the offensive-defensive double role.",
            ],
            keyTerms: [
              { term: "Support vectors", definition: "The nearest training points defining the margin - the only ones that matter." },
              { term: "Margin", definition: "The hyperplane's distance to the nearest class points - maximized in training." },
              { term: "Kernel trick", definition: "Implicit high-dimensional inner products via K(x,z)." },
              { term: "Additive delay model", definition: "The arbiter PUF's linear-in-features response model - the SVM's target." },
            ],
            diagram: {
              kind: "compare",
              title: "SVM's two roles in this subject",
              caption: "The same maximum-margin mathematics defends (Unit IV) and attacks (Unit V).",
              left: {
                heading: "Defensive classification",
                items: [
                  "Side-channel features -> Trojan-free/Trojaned",
                  "Power traces classified per chip",
                  "One-class SVMs for anomaly detection",
                  "Feature quality decides sensitivity",
                ],
              },
              right: {
                heading: "Offensive model-building",
                items: [
                  "CRP pairs -> trained PUF model",
                  "~10^4-10^5 challenges to train",
                  "Predict unseen challenges: >99% on linear PUFs",
                  "Countermeasure: nonlinearize (Unit V)",
                ],
              },
            },
            bullets: [
              "Setup: labelled points, hyperplane w·x + b = 0, margin maximized.",
              "Optimization: min (1/2)||w||^2 s.t. y_i(w·x_i + b) >= 1; w = sum alpha_i y_i x_i.",
              "Support vectors: non-zero alphas only - deletable rest of training set.",
              "Worked example: (2,2),(4,4) vs (2,4),(4,2) -> diagonal x1 = x2, margin sqrt(2).",
              "Kernels: polynomial for interactions, RBF for locality; implicit feature maps.",
              "Double role: Trojan detection (defence) and PUF model-building (attack).",
            ],
            callout: {
              type: "exam",
              title: "The linear PUF is the linear SVM's gift",
              body: "The bridging sentence: 'the arbiter PUF's additive delay model is linear in engineered features - exactly the input a linear SVM consumes - which is why Unit V's model-building attack works at all.' The defence then is to break the linearity.",
            },
            codeExample: {
              language: "python",
              caption: "svm_demo.py - the four-point margin example",
              code: `from sklearn.svm import SVC
import numpy as np

X = np.array([[2, 2], [4, 4], [2, 4], [4, 2]])
y = np.array([1, 1, -1, -1])

clf = SVC(kernel="linear", C=1e6).fit(X, y)
print(clf.support_vectors_)          # all 4 points
print(clf.coef_)                     # w ~ [1, -1]: x1 = x2
print(clf.predict([[3, 3.5]]))       # +1 (above diagonal)`,
            },
            examQuestions: [
              {
                q: "Explain SVM classification: the margin formulation, the support-vector property, the worked four-point example, the kernel trick, and the SVM's double role in hardware security.",
                marks: 14,
                outline: [
                  "Setup: hyperplane + margin maximization",
                  "QP: min (1/2)||w||^2 with constraints",
                  "w = sum alpha_i y_i x_i; support vectors only",
                  "Worked: diagonal separator, margin sqrt(2)",
                  "Kernel trick: polynomial and RBF forms",
                  "Defensive role: Trojan detection from side channels",
                  "Offensive role: PUF model-building preview",
                ],
              },
              {
                q: "Why can non-support-vector training points be removed without changing the SVM?",
                marks: 7,
                outline: [
                  "Solution weights depend only on non-zero alphas",
                  "Alphas vanish for points beyond the margin",
                  "The margin constraints are satisfied with slack-free margins",
                  "Removing interior points leaves the same QP optimum",
                  "Hence the classifier's sparsity property",
                ],
              },
            ],
          },
          {
            number: "1.7",
            title: "The hardware security threat landscape, organized",
            body: [
              "The unit's synthesis organizes the landscape the way the syllabus's later units attack it: the trust hierarchy (who do you trust - your design house, the fab, the packaging house, the tester - each a Trojan or piracy entry point), the physical-access hierarchy (what the attacker can reach - nothing, the bus, the board, the die), and the technique families (observe: side channels; modify: faults; insert: Trojans; copy: piracy). The worked map: a payment card's threat model spans the fab insider (Trojan in the crypto core), the personalization bureau (key extraction during issuance), the terminal attacker (DPA on the running card), the supply-chain interceptor (fault probing), and the clone manufacturer (netlist theft) - one device, five attacker positions, four technique families.",
              "The defence-first view assigns each family its unit: side channels -> Unit III (masking, hiding), faults -> Unit IV (redundancy, verification), Trojans -> Unit IV (testing, verification of the shipped die), piracy -> Unit V (locking, PUF-binding). The worked cost argument: each defence raises a different attacker currency - masking raises traces-needed, redundancy raises injections-needed, locking raises reverse-engineering effort, PUF binding makes clones functionally dead. The exam's maturity sentence: hardware security is priced in attacker effort - the design's job is knowing which currency each threat spends and raising exactly that one.",
              "The subject's map completes the synthesis: Unit II builds the primitives (crypto hardware, PUFs), Units III-IV attack and defend the running circuit, Unit V protects the design's intellectual value - and the SVM of 1.6 bridges them all. The closing sentence: every technique in this subject is a position in the access-vs-technique matrix of 1.1, and the syllabus is the tour of that matrix's quadrants.",
              "Exam framing: 'Organize the hardware security threat landscape' is the unit's 14-mark synthesis. Give the three hierarchies (trust, access, technique), work the payment-card five-position map, assign defences to units with their cost currencies, and close with the matrix sentence.",
            ],
            keyTerms: [
              { term: "Trust hierarchy", definition: "Design house -> fab -> packaging -> tester - each an entry point." },
              { term: "Defence currency", definition: "What a countermeasure raises: traces needed, injections needed, RE effort." },
              { term: "Technique families", definition: "Observe (side channel), modify (fault), insert (Trojan), copy (piracy)." },
              { term: "Threat model", definition: "The attacker positions and capabilities a design prices in." },
            ],
            diagram: {
              kind: "fork",
              title: "One payment card, five attacker positions",
              caption: "Fab to terminal - each position selects a technique family and a defence currency.",
              start: "Payment card threat model",
              branches: [
                { label: "Fab insider", outcome: "Trojan in crypto core -> Unit IV testing/verification", good: false },
                { label: "Personalization bureau", outcome: "key extraction at issuance -> protocol + split knowledge", good: true },
                { label: "Terminal attacker", outcome: "DPA on the running card -> Unit III masking", good: false },
                { label: "Clone manufacturer", outcome: "netlist theft -> Unit V locking + PUF binding", good: false },
              ],
            },
            bullets: [
              "Trust hierarchy: design house, fab, packaging, tester - insider positions all.",
              "Access hierarchy: none, bus, board, die - capabilities priced into the model.",
              "Technique families: observe, modify, insert, copy - the syllabus's units map onto them.",
              "Worked card: five positions from fab insider to clone manufacturer.",
              "Defence currencies: traces-needed, injections-needed, RE-effort, functional-death.",
              "Closing: the syllabus tours the 1.1 matrix's quadrants.",
            ],
            callout: {
              type: "exam",
              title: "Price the threat in its own currency",
              body: "The synthesis sentence: 'each defence raises a different attacker currency - name the currency per threat and the defence assignment writes itself.' The payment-card map is the worked demonstration.",
            },
            table: {
              caption: "Technique families to units to defences.",
              headers: ["Family", "Unit", "Signature defence", "Currency raised"],
              rows: [
                ["Observe (side channel)", "III", "Masking, hiding", "Traces needed"],
                ["Modify (fault)", "IV", "Redundancy, detection", "Injections needed"],
                ["Insert (Trojan)", "IV", "Testing, verification", "Detection probability"],
                ["Copy (piracy)", "V", "Locking, PUF binding", "RE effort / clone death"],
              ],
            },
            examQuestions: [
              {
                q: "Organize the hardware security threat landscape: the trust, access and technique hierarchies, the payment-card worked map, the defence-currency assignment, and the matrix closing.",
                marks: 14,
                outline: [
                  "Trust hierarchy: design house to tester",
                  "Access hierarchy: none to die",
                  "Technique families: observe/modify/insert/copy",
                  "Card map: five attacker positions worked",
                  "Defence currencies per family",
                  "Unit assignment of each defence",
                  "Matrix-tour closing",
                ],
              },
              {
                q: "Why does PUF binding raise a different attacker currency than logic locking alone?",
                marks: 7,
                outline: [
                  "Locking raises reverse-engineering effort on the netlist",
                  "PUF binding makes the chip unbootable elsewhere",
                  "Cloning dies functionally, not just expensively",
                  "The currency shifts from effort to feasibility",
                  "Combined defences raise both currencies",
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
      title: "Useful Hardware Security Primitives: Crypto Hardware and PUFs",
      summary:
        "Unit II builds the primitives: cryptographic hardware and its FPGA implementation and optimization, physically unclonable functions (PUFs) as silicon fingerprints, the arbiter and ring-oscillator implementations, quality evaluation metrics, and the design techniques that raise PUF response quality.",
      chapter: {
        number: "02",
        title: "Crypto Hardware and Silicon Fingerprints",
        intro:
          "Unit II covers cryptographic hardware and implementation, optimization of cryptographic hardware on FPGAs, physically unclonable functions, PUF implementations (arbiter, ring-oscillator, SRAM), PUF quality evaluation, and design techniques to increase PUF response quality.",
        inOneBreath:
          "Crypto hardware optimizes three currencies - area, latency, throughput: iterated AES spends ~2-3k LUTs for 2 Gbps, unrolling buys 10x throughput at 10x area, pipelining interleaves for sustained rates. A PUF is the chip interrogating its own manufacturing randomness: arbiter PUFs race two delay paths (response = sign of the delay difference), RO PUFs compare oscillator frequencies, SRAM PUFs read power-up values. Quality is measured: uniqueness ~50% inter-chip Hamming distance, reliability ~0% intra-chip (or <5%), uniformity ~50% - and raised by error-correcting fuzzy extractors and temperature-hardened designs. The PUF's promise: keys generated, not stored - nothing to steal from memory.",
        sections: [
          {
            number: "2.1",
            title: "Cryptographic hardware and implementation",
            body: [
              "Cryptographic hardware implements ciphers as circuits, and the implementation choices are the syllabus's first primitive. The AES example across architectures: the iterated design (one round's logic, looped 10/12/14 times - minimal area, one block per 10+ cycles), the unrolled design (all rounds as combinational logic - maximum latency reduction, area x rounds), the pipelined design (rounds as stages with registers - multiple blocks in flight, sustained throughput), and the serialized design (sub-functions shared across cycles - minimal area at minimal speed). The worked numbers from 1.4 stand: iterated ~2-3k LUTs at ~2 Gbps, unrolled ~20k LUTs at ~20 Gbps, serialized <1k LUTs at ~50 Mbps.",
              "The implementation anatomy of one round fixes the vocabulary: SubBytes (the GF(2^8) inversion S-box - as ROM LUTs or as composite-field inversion circuits saving ~4x area), ShiftRows (wire permutation - free in hardware), MixColumns (the constant-matrix multiply - XOR trees), AddRoundKey (XOR), and the key schedule (round keys derived on the fly or stored in BRAM). The worked composite-field note: the AES S-box in GF((2^4)^2) costs ~30 LUTs vs ~130 for a LUT-based ROM - the area lever that serialization uses. The security implementation choices: constant-time logic (no data-dependent branches), key zeroization support, and side-channel-aware placement (Unit III's countermeasures planned at this stage, not bolted on).",
              "The primitive's contracts complete the section: the implementation must be provably equivalent to the algorithm (Unit IV's verification), constant-time by construction (no secret-dependent control flow), and designed for its platform's threat model (a smart card masks, a network appliance pipelines). The closing sentence: crypto hardware is the algorithm's arithmetic made physical - and every implementation choice trades one currency (area, latency, throughput, security) against the others.",
              "Exam framing: 'Explain cryptographic hardware implementation' is a 7-14 mark staple. Give the four architecture families with worked numbers, the AES round anatomy with the composite-field lever, and the three implementation contracts.",
            ],
            keyTerms: [
              { term: "Iterated architecture", definition: "One round's logic looped - minimal area, sequential latency." },
              { term: "Composite field S-box", definition: "GF((2^4)^2) inversion replacing the 256-entry ROM - ~4x area saving." },
              { term: "Constant-time implementation", definition: "No secret-dependent control flow or memory access." },
              { term: "Key zeroization", definition: "Erasing key material from registers on command." },
            ],
            diagram: {
              kind: "compare",
              title: "AES architecture families",
              caption: "Four implementations of one round-based cipher - the currency table of the field.",
              left: {
                heading: "Area-first",
                items: [
                  "Serialized: <1k LUTs, ~50 Mbps",
                  "Iterated: ~2-3k LUTs, ~2 Gbps",
                  "Composite-field S-box: ~30 vs ~130 LUTs",
                  "Key schedule in BRAM",
                ],
              },
              right: {
                heading: "Throughput-first",
                items: [
                  "Unrolled: ~20k LUTs, ~20 Gbps",
                  "Pipelined: sustained 20 Gbps",
                  "Round logic replicated x10",
                  "Interleaved blocks in flight",
                ],
              },
            },
            bullets: [
              "Four families: serialized, iterated, unrolled, pipelined - with worked LUT/throughput numbers.",
              "Round anatomy: SubBytes, ShiftRows, MixColumns, AddRoundKey, key schedule.",
              "Composite-field inversion: ~30 LUTs vs ~130 ROM - the area lever.",
              "Contracts: provable equivalence, constant-time, platform-matched threat model.",
              "Side-channel countermeasures planned at design time.",
              "Currency trade: area vs latency vs throughput vs security.",
            ],
            callout: {
              type: "exam",
              title: "Name the currency before the circuit",
              body: "The implementation sentence: 'every crypto-hardware choice trades area, latency, throughput and security - state which currency the design buys first.' The four AES families are the worked currency table.",
            },
            table: {
              caption: "The round anatomy and its hardware cost.",
              headers: ["Stage", "Hardware form", "Cost lever"],
              rows: [
                ["SubBytes", "ROM LUT or GF((2^4)^2) logic", "130 vs ~30 LUTs"],
                ["ShiftRows", "Wire permutation", "Free in wiring"],
                ["MixColumns", "XOR tree (constant matrix)", "Shared with key schedule"],
                ["AddRoundKey", "XOR layer", "Trivial"],
                ["Key schedule", "On-the-fly or BRAM", "Area vs latency"],
              ],
            },
            examQuestions: [
              {
                q: "Explain cryptographic hardware implementation: the four architecture families with numbers, the AES round anatomy with the composite-field lever, and the implementation contracts.",
                marks: 14,
                outline: [
                  "Serialized/iterated/unrolled/pipelined with LUT and Gbps numbers",
                  "Round stages mapped to hardware",
                  "Composite-field S-box: 30 vs 130 LUTs",
                  "Key schedule choices",
                  "Provable equivalence requirement (Unit IV tie)",
                  "Constant-time and zeroization contracts",
                  "Currency-trade closing",
                ],
              },
              {
                q: "Why is constant-time an implementation contract and not an optimization?",
                marks: 7,
                outline: [
                  "Secret-dependent timing is the timing side channel",
                  "Branches and memory accesses leak key bits",
                  "Cryptographic correctness assumes constant execution",
                  "Contract means verified, not best-effort",
                  "Unit III's attacks exploit exactly its absence",
                ],
              },
            ],
          },
          {
            number: "2.2",
            title: "Optimization of cryptographic hardware on FPGAs",
            body: [
              "Optimization is the implementation's second act: given the architecture families, the design closes the gap between naive and near-optimal on the FPGA's specific resources. The levers: resource mapping (S-boxes into LUTs vs BRAM vs DSP-slice tricks - the BRAM-as-ROM choice freeing LUTs at latency cost), pipelining depth (registers between round stages - the FPGA's abundant FFs used for throughput), loop unrolling with retiming (balancing the pipeline stages), and clock domain tricks (multi-rate designs where the key schedule runs once per N blocks). The worked optimization pass: the iterated AES at 2 Gbps becomes a 4-stage partially-pipelined design at 7 Gbps for ~4k LUTs (round registers added, S-box in BRAM), then a fully-unrolled version at 18-20 Gbps for ~18-20k LUTs - the two-point trade curve the FPGA report plots.",
              "The worked resource arithmetic shows the trade frontier: the device's 33k LUTs fit one unrolled AES (20k) or five iterated AES cores (15k) - five cores at 2 Gbps each = 10 Gbps aggregate vs one 20 Gbps core; for multi-channel workloads the aggregate wins, for single-link line-rate the unrolled wins. The composite-field lever compounds: serialized designs with GF((2^4)^2) S-boxes run 8x area-reduction at 8x cycle cost - the extreme-area point of the frontier.",
              "The security-optimization tension is the exam's analysis mark: every throughput lever widens the side-channel surface (pipelining makes power traces more structured - Unit III's DPA benefits), and the countermeasure costs area (masking doubles the S-box logic) - the optimized design re-balances with its threat model. The closing sentence: FPGA optimization is a frontier walk with three currencies and a security constraint - the report's trade curve is the design's honesty.",
              "Exam framing: 'Explain optimization of cryptographic hardware on FPGAs' is a 7-14 mark staple. Give the four levers with the worked two-point trade curve, the resource arithmetic (33k LUTs), and the security-tension analysis.",
            ],
            keyTerms: [
              { term: "BRAM-as-ROM", definition: "S-boxes stored in block RAM - LUTs freed at latency cost." },
              { term: "Retiming", definition: "Moving registers to balance pipeline stage delays." },
              { term: "Trade frontier", definition: "The area-vs-throughput curve the design report plots." },
              { term: "Masking cost", definition: "DPA countermeasures doubling S-box logic - the security tax." },
            ],
            diagram: {
              kind: "flow",
              title: "The optimization pass: two points on the frontier",
              caption: "Iterated 2 Gbps -> partial pipeline 7 Gbps -> unrolled 20 Gbps - the trade curve in three steps.",
              steps: [
                { label: "Baseline", note: "iterated, ~2-3k LUTs, ~2 Gbps" },
                { label: "Partial pipeline", note: "4 stages, S-box in BRAM, ~4k LUTs, 7 Gbps" },
                { label: "Unrolled", note: "10 rounds, ~18-20k LUTs, 18-20 Gbps" },
                { label: "Re-balance", note: "masking adds area - threat model decides" },
              ],
            },
            bullets: [
              "Levers: resource mapping (LUT/BRAM/DSP), pipeline depth, unrolling + retiming, multi-rate clocking.",
              "Worked curve: 2 -> 7 -> 20 Gbps at 3k -> 4k -> 20k LUTs.",
              "Frontier arithmetic: 1 unrolled (20k) vs 5 iterated (15k) on 33k LUTs - aggregate vs line-rate.",
              "Composite-field compounding: 8x area reduction at 8x cycles.",
              "Security tension: pipelining structures power traces; masking doubles S-box area.",
              "Closing: frontier walk with security constraint.",
            ],
            callout: {
              type: "exam",
              title: "Throughput structures the trace",
              body: "The tension sentence: 'every throughput lever widens the side-channel surface - the pipelined design's regular power pattern is DPA-friendly.' Name the security tax (masking area) and the optimization answer becomes an engineering judgment, not a leaderboard.",
            },
            table: {
              caption: "The optimization levers and their costs.",
              headers: ["Lever", "Gain", "Cost"],
              rows: [
                ["S-box to BRAM", "Frees ~600 LUTs", "One-cycle latency"],
                ["Partial pipelining (4 stages)", "3.5x throughput", "+1k LUTs of registers"],
                ["Full unrolling", "10x throughput", "10x round area"],
                ["Composite-field S-box", "4x area per S-box", "3x cycle cost"],
                ["Masking (1st order)", "DPA resistance", "~2x S-box area"],
              ],
            },
            examQuestions: [
              {
                q: "Explain FPGA crypto-hardware optimization: the four levers, the worked trade curve from 2 to 20 Gbps, the 33k-LUT frontier arithmetic, and the security tension.",
                marks: 14,
                outline: [
                  "Levers: mapping, pipelining, unrolling+retiming, multi-rate",
                  "Worked curve: 2/7/20 Gbps at 3/4/20k LUTs",
                  "Frontier: 1 unrolled vs 5 iterated cores",
                  "Composite-field compounding",
                  "Security tension: pipelining aids DPA; masking costs area",
                  "Threat-model re-balancing",
                  "Frontier-with-constraint closing",
                ],
              },
              {
                q: "When does five iterated cores beat one unrolled core?",
                marks: 7,
                outline: [
                  "Aggregate 10 Gbps across five channels",
                  "Independent streams scale horizontally",
                  "Unrolled wins only single-link line-rate",
                  "Device capacity: 15k vs 20k LUTs leaves headroom",
                  "Match architecture to the traffic shape",
                ],
              },
            ],
          },
          {
            number: "2.3",
            title: "Physically unclonable functions (PUFs)",
            body: [
              "A physically unclonable function is the chip interrogating its own manufacturing randomness: a challenge-response function whose answers are determined by process-variation details no mask controls and no measurement can fully copy. The promise: keys generated from silicon, not stored in memory - a PUF-derived key exists only while the chip is powered and evaluated, so there is nothing to steal from flash, nothing to read from RAM dumps, and cloning requires cloning the manufacturing process itself. The worked contrast with stored keys: a stored key sits in EEPROM (readable by probing, present in backups, cloneable by copying the memory); a PUF-derived key is reconstructed on demand from noisy silicon via a fuzzy extractor (Unit 2.6) - the theft model changes from 'read the memory' to 'replicate the physics'.",
              "The PUF family by source of entropy: delay-based (the arbiter PUF racing two delay paths - Unit 2.4), frequency-based (the ring-oscillator PUF comparing oscillator frequencies), memory-based (the SRAM PUF reading power-up cell states - the uninitialized flip-flop bias that manufacturing variation fixes per chip), coating/battery PUFs (coating capacitance variations), and the paper/physical PUFs outside silicon. The worked SRAM case: an 8 KB SRAM block powers up with ~5-10% of cells in a biased-but-not-random state - stable enough to serve as 64k bits of chip identity after error correction; the enrollment phase records the reference response, the reconstruction phase re-reads and corrects.",
              "The applications map completes the primitive: key generation (the PUF output feeds a KDF - the device's root key never stored), device identity/authentication (challenge-response protocols - the server sends a challenge, the chip answers), and hardware binding (Unit V's piracy defence - the design refuses to run unless its PUF matches enrollment). The closing sentence: the PUF inverts key security - instead of protecting a stored secret, the device manufactures its secret from physics on every boot.",
              "Exam framing: 'Explain physically unclonable functions' is a 7-14 mark staple. Define the PUF with the stored-key contrast, survey the family by entropy source with the SRAM worked case, and map the applications.",
            ],
            keyTerms: [
              { term: "PUF", definition: "Challenge-response function fixed by manufacturing randomness - unclonable by construction." },
              { term: "Fuzzy extractor", definition: "Reconstructs a stable key from a noisy PUF response." },
              { term: "Enrollment / reconstruction", definition: "Reference capture at provisioning vs on-demand re-derivation." },
              { term: "SRAM PUF", definition: "Power-up cell states as chip identity - the memory-based class." },
            ],
            diagram: {
              kind: "compare",
              title: "Stored key vs PUF-derived key",
              caption: "The theft model changes: read the memory vs replicate the physics.",
              left: {
                heading: "Stored key (EEPROM)",
                items: [
                  "Readable by probing the die",
                  "Present in backups and dumps",
                  "Cloneable by copying memory",
                  "Exists always - one compromise is forever",
                ],
              },
              right: {
                heading: "PUF-derived key",
                items: [
                  "Reconstructed on boot from silicon",
                  "Nothing in memory to steal",
                  "Clone requires replicating fabrication",
                  "Exists only while evaluated",
                ],
              },
            },
            bullets: [
              "Definition: challenge-response fixed by process variation - unclonable in principle.",
              "Family: delay (arbiter), frequency (RO), memory (SRAM), coating - entropy source decides.",
              "Worked SRAM: 8 KB powers up ~5-10% biased cells -> 64k identity bits after ECC.",
              "Enrollment records reference; reconstruction corrects on demand.",
              "Applications: key generation, device authentication, hardware binding (Unit V).",
              "Closing: manufacture the secret per boot instead of storing it.",
            ],
            callout: {
              type: "exam",
              title: "Nothing to steal is the whole point",
              body: "The PUF sentence: 'instead of protecting a stored secret, the device manufactures its secret from physics on every boot.' The stored-key contrast table is the exam's demonstration - theft model changes from memory to physics.",
            },
            table: {
              caption: "The PUF family by entropy source.",
              headers: ["PUF class", "Physics", "Signature property"],
              rows: [
                ["Arbiter (delay)", "Path-delay race", "CRP-rich, modelable (Unit V)"],
                ["Ring oscillator", "Frequency variation", "Pairwise comparisons, no CRPs"],
                ["SRAM (memory)", "Power-up cell bias", "Ubiquitous - every chip has SRAM"],
                ["Coating", "Coating capacitance", "Analog, high entropy"],
              ],
            },
            examQuestions: [
              {
                q: "Explain PUFs: the definition and stored-key contrast, the family by entropy source with the SRAM worked case, and the application map.",
                marks: 14,
                outline: [
                  "Definition: manufacturing-randomness challenge-response",
                  "Stored-key vs PUF theft model table",
                  "Family: delay, frequency, memory, coating",
                  "SRAM worked: 8 KB, 5-10% biased, 64k identity bits",
                  "Enrollment vs reconstruction phases",
                  "Applications: keys, authentication, hardware binding",
                  "Manufacture-the-secret closing",
                ],
              },
              {
                q: "Why is a PUF-derived root key safer than an EEPROM root key?",
                marks: 7,
                outline: [
                  "EEPROM keys survive dump-and-clone attacks",
                  "PUF key exists only during evaluation",
                  "No flash dump yields the key",
                  "Cloning the key means cloning the fab variation",
                  "Compromise window shrinks to live sessions",
                ],
              },
            ],
          },
          {
            number: "2.4",
            title: "PUF implementations: the arbiter and ring-oscillator PUFs",
            body: [
              "The arbiter PUF is the CRP-rich classic: a challenge bits select multiplexer configurations along two parallel delay paths; a rising edge races down both paths; the arbiter (a flip-flop) declares the winner - response bit = 1 if the top path wins, 0 otherwise. The additive delay model makes it analyzable: the total delay difference is a sum of per-stage terms delta_i = w_i * phi(c_i), where the w_i are the chip's fixed stage-delay differences and phi(c) is the challenge-dependent sign vector - the response is sign(sum w_i phi_i). The worked numbers: 64-bit challenges give 2^64 CRPs; each stage's delta is a few picoseconds; the race margin at typical challenge points runs 10-100 ps - measurable, repeatable within temperature/noise limits.",
              "The ring-oscillator PUF avoids the modelability that haunts the arbiter: N ring oscillators (inverters in a loop) each oscillate at a frequency fixed by their manufacturing delay; the response compares pairs (f_A vs f_B -> 1 bit); with N oscillators, N(N-1)/2 pairwise comparisons exist. The worked numbers: 16 oscillators give 120 comparison bits; oscillator frequencies vary ~1-5% chip-to-chip from process variation; the same chip's pair ranking stays stable across voltage/temperature within ~1-2% - the reliability that selection (choosing stable pairs) secures. The XOR variant widens the gap: comparing frequency differences of oscillator pairs rather than raw frequencies raises robustness.",
              "The implementation contrast is the exam's analysis: the arbiter is CRP-rich (2^64 challenges - supports challenge-response authentication protocols) but linear-modeable (Unit V's SVM attack); the RO PUF is identity-oriented (fixed 120 bits, no challenge space) but model-resistant (frequency sums resist linear feature engineering). The closing sentence: the arbiter buys a challenge space at the price of a model; the RO PUF buys model resistance at the price of being a fingerprint rather than a function.",
              "Exam framing: 'Explain arbiter and ring-oscillator PUF implementations' is a 7-14 mark staple. Give the arbiter's race mechanics with the additive delay model and worked numbers, the RO PUF's frequency-comparison mechanics, and the implementation contrast.",
            ],
            keyTerms: [
              { term: "Arbiter PUF", definition: "Two-path delay race decided by a flip-flop - response = sign of delay difference." },
              { term: "Additive delay model", definition: "Response = sign(sum w_i * phi(c_i)) - the linear model Unit V attacks." },
              { term: "Ring-oscillator PUF", definition: "Pairwise frequency comparisons of manufacturing-varied oscillators." },
              { term: "CRP", definition: "Challenge-response pair - the arbiter's currency (2^64 of them)." },
            ],
            diagram: {
              kind: "flow",
              title: "The arbiter PUF's race",
              caption: "Challenge steers two paths; the flip-flop records the winner - a picosecond race per bit.",
              steps: [
                { label: "Challenge input", note: "64 bits select mux configurations" },
                { label: "Rising edge", note: "propagates down both delay paths" },
                { label: "Per-stage deltas", note: "delta_i = w_i * phi(c_i) accumulate" },
                { label: "Arbiter FF", note: "records which path arrived first" },
                { label: "Response", note: "sign of total delay difference" },
              ],
            },
            bullets: [
              "Arbiter: mux-steered delay race; response = sign(sum w_i phi_i).",
              "Worked: 64-bit challenges = 2^64 CRPs; margins 10-100 ps.",
              "Additive model: linear in engineered features - the Unit V attack surface.",
              "RO PUF: N oscillators, N(N-1)/2 comparisons; 16 -> 120 bits.",
              "RO numbers: 1-5% chip-to-chip frequency spread; 1-2% stability.",
              "Contrast: CRP-rich-but-modelable vs model-resistant-but-fixed.",
            ],
            callout: {
              type: "exam",
              title: "A challenge space at the price of a model",
              body: "The implementation sentence: 'the arbiter buys 2^64 CRPs at the price of a linear model; the RO PUF buys model resistance at the price of being a fingerprint.' Name the trade and both implementations are analysis, not description.",
            },
            table: {
              caption: "Arbiter vs RO PUF.",
              headers: ["Property", "Arbiter PUF", "RO PUF"],
              rows: [
                ["Response space", "2^64 CRPs", "120 fixed bits (N=16)"],
                ["Physics", "Path-delay race", "Frequency comparison"],
                ["Modelability", "Linear additive model - vulnerable", "Resists linear modelling"],
                ["Best use", "Challenge-response auth", "Device identity / keygen"],
                ["Unit V outcome", "SVM attack succeeds", "GP attack needs adaptation"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the arbiter and ring-oscillator PUF implementations: the race mechanics with the additive delay model, the RO comparison mechanics with numbers, and the implementation contrast.",
                marks: 14,
                outline: [
                  "Arbiter: mux steering, delay race, arbiter FF",
                  "Additive model: sign(sum w_i phi_i)",
                  "Worked: 2^64 CRPs, 10-100 ps margins",
                  "RO: N(N-1)/2 comparisons; 16 -> 120 bits",
                  "Frequency spread 1-5%, stability 1-2%",
                  "Modelability contrast",
                  "Fingerprint-vs-function closing",
                ],
              },
              {
                q: "Why does the RO PUF resist the arbiter's model-building attack?",
                marks: 7,
                outline: [
                  "No challenge space - nothing to model over",
                  "Responses are frequency orderings, not path sums",
                  "Linear feature engineering has no handle",
                  "Model-building needs CRPs; RO exposes none",
                  "Identity-class PUFs trade flexibility for resistance",
                ],
              },
            ],
          },
          {
            number: "2.5",
            title: "PUF quality evaluation",
            body: [
              "PUF quality is measured, not asserted - and the syllabus's three metrics are the evaluation suite. Uniqueness (inter-chip Hamming distance): responses of different chips to the same challenge should differ in ~50% of bits - the identity-separation property; measured across N chips, the ideal distribution centers at 50% with small variance. Reliability (intra-chip Hamming distance): the same chip's response to the same challenge across conditions (temperature -40 to 85 C, voltage +/-10%, aging) should match itself in ~100% of bits - reality runs 85-98% raw, which is why error correction exists. Uniformity (Hamming weight): each response should be balanced ~50% ones - the bias property that matters for key derivation (biased responses shrink the effective keyspace).",
              "The worked evaluation shows the numbers: 50 chips x 100 challenges x 3 conditions - uniqueness: mean inter-HD 49.7% (ideal 50%), sigma 3% (acceptable); reliability: mean intra-HD 4.2% (the 95.8% raw reliability that the fuzzy extractor must correct below the ECC capability ~10-12%); uniformity: mean Hamming weight 51.3% (near-balanced), with 6 outliers above 60% (flagged - their responses fail the bias check and are excluded or post-processed). The pass/fail framing: a PUF design ships when uniqueness ~50 +/- 5%, reliability >= 95% raw (correctable), uniformity 50 +/- 5% - the three-threshold suite.",
              "The metric interactions complete the evaluation: reliability and uniqueness pull against each other (hardening a response against environment - e.g. differential RO measurement - can compress the inter-chip spread), and uniformity is design-fixable (XOR-balancing, whitening) while reliability is physics-fixable (stable-pair selection, ECC) - the engineering order matters: fix physics first, then statistics. The closing sentence: PUF quality is a three-metric suite with thresholds - a design without numbers is a hypothesis, and the enrollment data is the experiment.",
              "Exam framing: 'Explain PUF quality evaluation metrics' is a 7-14 mark staple. Define uniqueness, reliability and uniformity with formulas, work the 50-chip evaluation with its thresholds and outlier handling, and close with the metric-interaction analysis.",
            ],
            keyTerms: [
              { term: "Uniqueness", definition: "Inter-chip Hamming distance ~50% - different chips differ." },
              { term: "Reliability", definition: "Intra-chip Hamming distance near 0% - same chip matches itself." },
              { term: "Uniformity", definition: "Hamming weight ~50% - responses unbiased." },
              { term: "Fuzzy extractor", definition: "ECC-based reconstruction turning noisy responses into stable keys." },
            ],
            diagram: {
              kind: "pyramid",
              title: "The three-metric quality suite",
              caption: "Uniqueness separates chips, reliability re-stabilizes them, uniformity balances them.",
              tiers: [
                { label: "Uniformity", note: "Hamming weight ~50% +/- 5% - bias check" },
                { label: "Reliability", note: "intra-HD <5% raw - ECC corrects to ~0" },
                { label: "Uniqueness", note: "inter-HD ~50% +/- 5% - identity separation" },
                { label: "Verdict", note: "all three thresholds pass -> ship" },
              ],
            },
            bullets: [
              "Uniqueness: inter-chip HD, ideal 50% - chips distinguishable.",
              "Reliability: intra-chip HD across T/V/aging - ideal 0%, raw 85-98%.",
              "Uniformity: Hamming weight ~50% - keyspace integrity.",
              "Worked: 50 chips x 100 challenges x 3 conditions; 49.7% / 4.2% / 51.3%.",
              "Outliers: 6 chips with >60% weight excluded or post-processed.",
              "Thresholds: uniqueness 50 +/- 5, reliability >= 95% raw, uniformity 50 +/- 5.",
            ],
            callout: {
              type: "exam",
              title: "A PUF without numbers is a hypothesis",
              body: "The evaluation sentence: 'PUF quality is a three-metric suite with thresholds - the enrollment experiment produces the numbers, and the design ships or does not.' Quote the worked 49.7 / 4.2 / 51.3 triplet.",
            },
            table: {
              caption: "The worked 50-chip evaluation.",
              headers: ["Metric", "Ideal", "Worked result", "Verdict"],
              rows: [
                ["Uniqueness (inter-HD)", "50%", "49.7% (sigma 3%)", "Pass"],
                ["Reliability (intra-HD)", "~0%", "4.2% raw", "Pass (ECC corrects)"],
                ["Uniformity (weight)", "50%", "51.3%; 6 outliers >60%", "Pass after exclusion"],
              ],
            },
            examQuestions: [
              {
                q: "Explain PUF quality evaluation: the three metrics with formulas, the worked 50-chip suite with thresholds and outlier handling, and the metric-interaction analysis.",
                marks: 14,
                outline: [
                  "Uniqueness: inter-HD ~50% definition",
                  "Reliability: intra-HD across conditions",
                  "Uniformity: Hamming weight balance",
                  "Worked: 50x100x3 experiment, triplet results",
                  "Outlier exclusion at >60% weight",
                  "Thresholds: 50+/-5, >=95% raw, 50+/-5",
                  "Interaction: hardening vs separation trade",
                ],
              },
              {
                q: "Why does uniformity matter for PUF-based key generation?",
                marks: 7,
                outline: [
                  "Biased responses carry less entropy per bit",
                  "Hamming weight p reduces keyspace to H(p) bits/bit",
                  "Attackers exploit predictable bits",
                  "Whitening/balancing restores uniformity",
                  "Uniformity is the keyspace-integrity metric",
                ],
              },
            ],
          },
          {
            number: "2.6",
            title: "Design techniques to increase PUF response quality",
            body: [
              "Raw PUF responses are noisy physics; the design techniques make them cryptographic. The physics-first family: stable-pair selection (RO PUFs choose the frequency pairs with the largest margins - the 1-2% unstable pairs excluded), differential measurement (ratiometric comparisons cancelling supply/temperature common-mode shifts), and circuit hardening (symmetric layout, common-centroid placement - reducing systematic delay offsets). The statistics-second family: error-correcting codes (BCH/Reed-Muller over the response block - correcting the 4-10% raw error rate), the fuzzy extractor formalization (Gen: enrollment produces the helper data + key; Rep: reconstruction corrects with helper data - the helper data leaks nothing about the key beyond the ECC's information-leakage bound), and XOR/whitening balancing (the uniformity fix).",
              "The worked fuzzy-extractor walk is the exam's computation: a 128-bit response with 5% raw error rate - Gen: encode the response with a BCH(255,139,21)-class code (corrects up to 10 errors in 255 bits), the helper data is the syndrome (116 bits, stored off-chip), the key is the remaining entropy (139 bits masked down to 128); Rep: a fresh noisy response (same chip, different day, 4 bits flipped) computes its syndrome, XORs the stored helper - the difference syndrome identifies the error positions, correction recovers the exact enrolled response, and the key re-derives. The numbers: corrects up to 10 errors (2x the observed 4-5), helper data 116 bits stored, key 128 bits never stored.",
              "The technique-selection rule completes the section: physics fixes first (they are permanent and cheap), ECC sized to the measured error rate (2x margin - the 10-vs-5 ratio), helper data stored where the attacker is not (off-die, encrypted), and the privacy note (helper data must not leak response bits - the bounded-leakage property). The closing sentence: PUF response quality is engineered in two layers - physics for stability, coding for certainty - and the fuzzy extractor is the contract between the noisy silicon and the cryptography above it.",
              "Exam framing: 'Explain design techniques for increasing PUF response quality' is a 7-14 mark staple. Give the physics-first and statistics-second families, work the fuzzy-extractor walk with its BCH numbers, and close with the selection rule.",
            ],
            keyTerms: [
              { term: "Stable-pair selection", definition: "Choosing high-margin RO pairs; excluding flaky ones." },
              { term: "BCH code", definition: "The error-correcting code over response blocks (corrects t errors)." },
              { term: "Helper data", definition: "The stored syndrome enabling reconstruction - bounded leakage." },
              { term: "Gen / Rep", definition: "The fuzzy extractor's enrollment and reconstruction phases." },
            ],
            diagram: {
              kind: "pipeline",
              title: "The fuzzy extractor: noisy silicon to stable key",
              caption: "Gen stores a syndrome, not the key; Rep corrects and re-derives - nothing secret is stored.",
              stages: [
                { label: "Gen (enrollment)", note: "response -> BCH encode -> helper = syndrome (116 b), key = 128 b" },
                { label: "Store helper", note: "off-die, encrypted - no key material" },
                { label: "Rep (reconstruction)", note: "noisy response + helper -> correct 4-10 errors" },
                { label: "Key out", note: "128-bit key re-derived, never stored" },
                { label: "Margin", note: "corrects 10 errors vs observed 4-5 - 2x margin" },
              ],
            },
            bullets: [
              "Physics-first: stable-pair selection, differential measurement, symmetric layout.",
              "Statistics-second: BCH/ECC, fuzzy extractor, XOR balancing.",
              "Worked walk: BCH(255,139,21) class - corrects 10 errors on 255 bits.",
              "Helper data: 116-bit syndrome, off-die, bounded leakage.",
              "Key: 128 bits re-derived per boot - never stored.",
              "Order matters: physics permanent and cheap; ECC sized 2x to measurement.",
            ],
            callout: {
              type: "exam",
              title: "The helper data stores a syndrome, not a secret",
              body: "The extractor sentence: 'Gen stores the syndrome - the attacker holding helper data still lacks the response within the code's leakage bound.' The 10-vs-5 error margin is the sizing discipline examiners check.",
            },
            table: {
              caption: "Technique families and their fixes.",
              headers: ["Family", "Technique", "Metric fixed"],
              rows: [
                ["Physics", "Stable-pair selection", "Reliability"],
                ["Physics", "Differential/ratiometric sensing", "Reliability (T/V)"],
                ["Physics", "Symmetric layout", "Systematic bias"],
                ["Statistics", "BCH/ECC + fuzzy extractor", "Reliability -> certainty"],
                ["Statistics", "XOR whitening", "Uniformity"],
              ],
            },
            examQuestions: [
              {
                q: "Explain design techniques for PUF response quality: the physics-first and statistics-second families, the worked fuzzy-extractor walk with BCH numbers, and the selection rule.",
                marks: 14,
                outline: [
                  "Physics: pair selection, differential sensing, layout",
                  "Statistics: BCH, fuzzy extractor, whitening",
                  "Worked: BCH(255,139,21), helper 116 b, key 128 b",
                  "Gen/Rep phases with syndrome arithmetic",
                  "2x error margin sizing",
                  "Helper-data leakage bound",
                  "Physics-then-coding ordering",
                ],
              },
              {
                q: "Why is ECC sized to twice the observed error rate?",
                marks: 7,
                outline: [
                  "Error rates drift with aging and extreme conditions",
                  "Field conditions exceed lab measurements",
                  "2x margin absorbs distribution tails",
                  "Under-sized ECC fails open (wrong keys)",
                  "Over-sizing costs helper-data and die area - hence 2x, not 10x",
                ],
              },
            ],
          },
          {
            number: "2.7",
            title: "True random number generation and the primitive stack",
            body: [
              "Randomness is the quiet primitive beneath every other one: keys generated (1.3's RSA primes), nonces, masks (3.4's fresh shares), blinding factors - all consume true random bits, and a predictable RNG collapses the strongest cipher. The entropy sources on silicon: jitter in ring oscillators (the RO PUF's physics reused as an entropy source - oscillator phase noise sampled against a reference clock), metastability (flip-flops sampled in their undecided window), and noise-based sources (thermal/shot noise amplified). The TRNG design pattern: the raw entropy source (fast, biased), a health monitor (the online statistical tests - repetition count and adaptive proportion tests catching a stuck source), and a conditioner (a hash/von-Neumann extractor turning biased bits into near-uniform output).",
              "The worked TRNG numbers show the budget: a jitter-based RO-TRNG produces ~1-10 raw entropy bits per sample pair (the jitter-to-clock ratio decides), at 10 MHz sampling yields ~10-100 kbit/s of conditioned output - slow but sufficient for keys and masks (a masked AES needs one fresh share bit per gate per clock - the high-rate masking designs use multiple parallel ROs). The health tests run continuously: the NIST SP 800-90B rep-count test (abort after 6 identical bits) and adaptive-proportion test catch the stuck-oscillator failure mode; the conditioner (SHA-256-based) whitens whatever survives.",
              "The primitive-stack view completes Unit II: crypto hardware computes, PUFs remember, TRNGs randomize - the three primitives compose into the secure chip (AES masked with TRNG entropy, keys rooted in a PUF, random nonces per session). The closing sentence: the primitive stack is Unit II's real deliverable - each primitive fixes one weakness of stored-key, computed-only, deterministic designs, and the secure chip is their composition.",
              "Exam framing: 'Explain true random number generation and the hardware primitive stack' is a 7-14 mark closer for Unit II. Give the entropy sources with the jitter budget, the health-monitor and conditioner pattern with NIST tests, and close with the three-primitive composition.",
            ],
            keyTerms: [
              { term: "TRNG", definition: "True random number generator - entropy from physical jitter/noise." },
              { term: "Health monitor", definition: "Online tests (rep-count, adaptive proportion) catching stuck sources." },
              { term: "Conditioner", definition: "Extractor (hash/von Neumann) turning biased bits into uniform output." },
              { term: "Jitter entropy", definition: "Oscillator phase noise sampled against a reference clock." },
            ],
            diagram: {
              kind: "pipeline",
              title: "The TRNG pipeline",
              caption: "Entropy source -> health monitor -> conditioner - biased physics into uniform bits.",
              stages: [
                { label: "Entropy source", note: "RO jitter / metastability / noise" },
                { label: "Digitize", note: "sample against reference clock" },
                { label: "Health monitor", note: "rep-count + adaptive proportion (SP 800-90B)" },
                { label: "Condition", note: "SHA-256 / von Neumann extractor" },
                { label: "Output", note: "~10-100 kbit/s conditioned randomness" },
              ],
            },
            bullets: [
              "Sources: RO jitter, metastability, thermal/shot noise.",
              "Budget: ~1-10 entropy bits per sample; 10-100 kbit/s conditioned.",
              "Health tests: SP 800-90B rep-count (abort after 6 identical) + adaptive proportion.",
              "Conditioner: hash-based whitening.",
              "Consumer math: masked AES needs per-gate fresh shares - parallel ROs for rate.",
              "Stack: computes + remembers + randomizes = the secure chip.",
            ],
            callout: {
              type: "exam",
              title: "Predictable randomness defeats everything",
              body: "The stack sentence: 'a predictable RNG collapses the strongest cipher - Debian 2008 gave 32,768 possible keys.' The TRNG pipeline is the defence; the three-primitive composition is Unit II's closing synthesis.",
            },
            table: {
              caption: "The primitive stack of a secure chip.",
              headers: ["Primitive", "Fixes", "Unit II section"],
              rows: [
                ["Crypto hardware", "Speed/area of mathematics", "2.1-2.2"],
                ["PUF", "Stored-key theft", "2.3-2.6"],
                ["TRNG", "Predictable randomness", "2.7"],
                ["Composition", "The whole stored-key, deterministic design", "all"],
              ],
            },
            examQuestions: [
              {
                q: "Explain TRNG design and the hardware primitive stack: entropy sources with the jitter budget, the health-monitor and conditioner pattern, and the three-primitive composition.",
                marks: 14,
                outline: [
                  "Sources: RO jitter, metastability, noise",
                  "Budget: 1-10 bits/sample, 10-100 kbit/s",
                  "Health tests: SP 800-90B rep-count + adaptive proportion",
                  "Conditioner: hash extraction",
                  "Masking rate math: parallel ROs",
                  "Stack: hardware + PUF + TRNG composition",
                  "Debian-2008 cautionary closing",
                ],
              },
              {
                q: "Why do masked designs need TRNG throughput, not just key-generation randomness?",
                marks: 7,
                outline: [
                  "Masking refreshes shares per clock per gate",
                  "Freshness is what makes first-order leakage random",
                  "Key-gen needs bytes per boot; masking needs bits per cycle",
                  "Parallel entropy sources scale the rate",
                  "Hence TRNGs are throughput components, not boot components",
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
      title: "Side-Channel Attacks on Cryptographic Hardware",
      summary:
        "Unit III attacks the running circuit: the side-channel idea, power analysis from SPA to Kocher's DPA on DES, the design techniques that prevent leakage (masking, hiding), the statistical template attacks, and the cache-attack family that extends side channels to shared processors.",
      chapter: {
        number: "03",
        title: "Leakage: Power, Statistics and the Cache",
        intro:
          "Unit III covers the basic idea of side-channel attacks, current-measurement-based attacks with Kocher's DES case study, design techniques to prevent side-channel attacks, improved attacks including the template attack, and cache attacks.",
        inOneBreath:
          "A side channel reads the physics of computation: power, EM, time, cache state all depend on secret data. SPA reads one trace's structure (square-and-multiply patterns); DPA (Kocher 1999) correlates thousands of traces against key hypotheses - the DES case study targets the 16 S-box output bits and converges in ~1,000-10,000 traces. Defences divide into hiding (flatten the leakage: dual-rail, noise, shuffling) and masking (split secrets into shares: first-order masking doubles the S-box logic, d-th order needs d+1 shares). Template attacks profile the device with multivariate Gaussians and classify with a handful of traces. Cache attacks (Flush+Reload, Prime+Probe) extend leakage to shared processors - the software side channel.",
        sections: [
          {
            number: "3.1",
            title: "The basic idea of side-channel attacks",
            body: [
              "A side-channel attack reads the physics of computation instead of breaking the mathematics: any physical quantity that depends on secret data - current, electromagnetic emanation, execution time, acoustic noise, cache state - is a carrier of information the algorithm never intended to reveal. The attack model: the adversary holds the device (or shares its silicon), collects physical traces of secret-dependent operations, and processes the traces into the secret. The taxonomy by signal: power analysis (current draw per cycle), EM analysis (near-field emanations - more localized than power, usable at distance with the right antenna), timing (secret-dependent durations - the remote side channel), cache (shared-memory state - the cloud-reachable channel), and the acoustic/photonic exotics.",
              "The worked leak model is the section's physics: CMOS logic draws current mainly when gates switch - the Hamming-weight model says a register's transition power is proportional to the Hamming weight of (old XOR new) values; for an 8-bit bus carrying secret byte k XORed with known value c, the transition weight is HW(k XOR c) - measurable, secret-dependent, and exactly the correlation DPA hunts. The worked measurement setup: a 1-ohm shunt resistor or EM probe, a 1 GSa/s oscilloscope, thousands of encryptions of known plaintexts - the lab costs USD 3-10k, which is why side-channel attacks are the cheap way past strong mathematics.",
              "The countermeasure landscape previews Unit 3.4: hiding (make the leakage constant - dual-rail logic, noise injection, shuffling), masking (make the leakage irrelevant - split secrets into random shares), and protocol-level (blinding, exponent randomization). The closing sentence: side-channel attacks trade mathematics for measurement - the defence's job is making the measurement useless, not the mathematics stronger.",
              "Exam framing: 'Explain the basic idea of side-channel attacks' is a 7-14 mark opener. Define the channel taxonomy, work the Hamming-weight leak model with the measurement setup, preview the countermeasure families, and close with the measurement-for-mathematics sentence.",
            ],
            keyTerms: [
              { term: "Side channel", definition: "Any secret-dependent physical quantity - power, EM, time, cache." },
              { term: "Hamming-weight model", definition: "Transition power proportional to HW(old XOR new)." },
              { term: "Non-invasive attack", definition: "Observation without physical modification of the device." },
              { term: "Hiding vs masking", definition: "Flatten the leakage vs make it irrelevant via shares." },
            ],
            diagram: {
              kind: "flow",
              title: "The side-channel attack loop",
              caption: "Collect traces of secret-dependent physics, then process them into the secret.",
              steps: [
                { label: "Device access", note: "card, board, or shared cache" },
                { label: "Trace collection", note: "1 GSa/s scope; N encryptions, known plaintexts" },
                { label: "Leak model", note: "HW(k XOR c) per byte transition" },
                { label: "Statistical processing", note: "SPA read or DPA correlation" },
                { label: "Key recovery", note: "hypothesis with peak correlation wins" },
              ],
            },
            bullets: [
              "Channels: power, EM, timing, cache, acoustic/photonic exotics.",
              "Physics: CMOS power ~ switching activity; HW(k XOR c) is the measurable model.",
              "Lab cost: shunt/probe + 1 GSa/s scope, USD 3-10k - mathematics beaten by measurement.",
              "Loop: collect -> model -> process -> key.",
              "Countermeasure families: hiding, masking, protocol randomization.",
              "Closing: make measurement useless, not mathematics stronger.",
            ],
            callout: {
              type: "exam",
              title: "Physics leaks what proofs assume away",
              body: "The section sentence: 'side-channel attacks trade mathematics for measurement - a USD 5k scope defeats a 2^126 key search.' The HW(k XOR c) model is the physics-to-statistics bridge every later section uses.",
            },
            table: {
              caption: "Side-channel taxonomy.",
              headers: ["Channel", "Signal", "Access needed"],
              rows: [
                ["Power (DPA/SPA)", "Per-cycle current draw", "Device in hand"],
                ["EM (EMA)", "Near-field emanations", "Proximity; localized"],
                ["Timing", "Secret-dependent duration", "Remote possible"],
                ["Cache", "Shared-memory state", "Same machine (cloud)"],
                ["Acoustic", "Capacitor/coll noise", "Proximity"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the basic idea of side-channel attacks: the taxonomy, the Hamming-weight leak model with measurement setup, and the countermeasure families.",
                marks: 14,
                outline: [
                  "Definition: secret-dependent physics as information carrier",
                  "Channels: power, EM, timing, cache, acoustic",
                  "HW(k XOR c) transition model worked",
                  "Setup: shunt/probe + 1 GSa/s scope + known plaintexts",
                  "Cost argument: USD 3-10k lab vs 2^126 math",
                  "Countermeasures: hiding, masking, protocol",
                  "Measurement-for-mathematics closing",
                ],
              },
              {
                q: "Why is EM analysis sometimes preferable to power analysis?",
                marks: 7,
                outline: [
                  "EM emanations localize to specific circuit regions",
                  "Power is a global sum; EM separates components",
                  "Probing distance gives deployment flexibility",
                  "Individual S-box leakage isolated from noise",
                  "Smaller traces needed for targeted extraction",
                ],
              },
            ],
          },
          {
            number: "3.2",
            title: "Power analysis: SPA and DPA",
            body: [
              "Power analysis divides by how much statistics each trace needs. Simple power analysis (SPA) reads one trace visually: the square-and-multiply exponentiation draws different current for multiply steps than for squaring steps - the trace's pattern IS the exponent; RSA-CRT signatures, DES's early rounds, and any secret-dependent branching leak directly. The worked SPA trace: 1024-bit RSA exponentiation shows ~1,024 operation blocks, with the multiply-blocks' distinctive double-current spikes marking exponent bits - an unblinded implementation's private key read off one oscilloscope screenshot.",
              "Differential power analysis (DPA - Kocher, Jaffe, Jun 1999) needs statistics: collect N traces with known plaintexts; for each key hypothesis k_h compute the predicted intermediate (the S-box output bit), classify traces by the predicted bit, average each class, compute the difference of averages - the correct hypothesis shows a peak at the S-box computation instant, wrong hypotheses average to noise. The worked numbers: first-order DPA on DES needs ~1,000-10,000 traces; on AES-128 first-order masked designs, higher-order attacks multiply the trace requirement by ~100 per mask order.",
              "The DPA workflow on DES is Unit 3.3's case study, but the general recipe stands: pick an intermediate value depending on a small key chunk and known data (DES S-box output: 6 key bits + 6 data bits), model its leakage (Hamming weight/distance), correlate hypotheses across traces, and iterate chunk-by-chunk (8 S-boxes x 64 hypotheses for DES = trivially parallel). The closing sentence: SPA reads one trace, DPA reads thousands - and the difference of averages is the statistic that turns noise into a key.",
              "Exam framing: 'Differentiate SPA and DPA with the worked mechanisms' is a 7-14 mark staple. Give SPA's one-trace read with the RSA example, DPA's correlation workflow with the trace-count numbers, and close with the difference-of-averages sentence.",
            ],
            keyTerms: [
              { term: "SPA", definition: "Simple power analysis - one trace, visual structure reading." },
              { term: "DPA", definition: "Differential power analysis - correlate many traces against key hypotheses." },
              { term: "Difference of means", definition: "Average traces by predicted bit; the correct hypothesis peaks." },
              { term: "First-order masking", definition: "One random share defeating first-order DPA; higher orders cost more." },
            ],
            diagram: {
              kind: "compare",
              title: "SPA vs DPA",
              caption: "One trace read by eye versus thousands correlated by statistics.",
              left: {
                heading: "SPA",
                items: [
                  "One trace suffices",
                  "Reads secret-dependent structure",
                  "RSA square-and-multiply pattern = key bits",
                  "Defence: constant-time ladders, blinding",
                ],
              },
              right: {
                heading: "DPA (Kocher 1999)",
                items: [
                  "~1,000-10,000 traces + known plaintexts",
                  "Predict S-box output per key hypothesis",
                  "Difference of averages -> peak at correct key",
                  "Defence: masking (doubles S-box logic)",
                ],
              },
            },
            bullets: [
              "SPA: single-trace visual reading; multiply-vs-square current signatures.",
              "Worked: 1024-bit RSA trace shows exponent bits as block patterns.",
              "DPA: N traces, per-hypothesis classification, difference of means.",
              "Numbers: DES first-order 1k-10k traces; masked designs x100 per order.",
              "Recipe: small key chunk + known data + leak model + correlation.",
              "Closing: difference of averages turns noise into a key.",
            ],
            callout: {
              type: "exam",
              title: "The peak is the key",
              body: "The DPA sentence: 'the correct hypothesis's difference-of-means shows a peak where the S-box computes; wrong hypotheses average to zero.' One sentence of statistics, one diagram of the peak, full marks on the mechanism.",
            },
            table: {
              caption: "SPA vs DPA comparison.",
              headers: ["Property", "SPA", "DPA"],
              rows: [
                ["Traces needed", "1", "1k-10k (first order)"],
                ["Statistics", "Visual inspection", "Difference of means"],
                ["Target", "Secret-dependent control flow", "Secret-dependent data transforms"],
                ["Classic target", "RSA exponentiation", "DES S-boxes"],
                ["Main defence", "Constant-time + blinding", "Masking"],
              ],
            },
            examQuestions: [
              {
                q: "Differentiate SPA and DPA: the one-trace mechanism with the RSA worked example, the correlation workflow with trace-count numbers, and the statistical core.",
                marks: 14,
                outline: [
                  "SPA: one trace, structure reading, RSA blocks",
                  "Constant-time and blinding as SPA defences",
                  "DPA: N traces, hypotheses, difference of means",
                  "Worked numbers: 1k-10k first-order, x100 per mask order",
                  "Recipe: chunk + data + model + correlation",
                  "Peak-vs-noise statistics",
                  "Difference-of-averages closing",
                ],
              },
              {
                q: "Why does masking cost an order-of-magnitude trace increase per added share?",
                marks: 7,
                outline: [
                  "First-order leakage becomes random - averages to zero",
                  "Information leaks only in joint distributions",
                  "Second-order needs combining two time points",
                  "Each order multiplies trace and processing needs ~100x",
                  "The defender buys trace economics with area",
                ],
              },
            ],
          },
          {
            number: "3.3",
            title: "Case study: Kocher's attack on DES",
            body: [
              "Kocher's 1999 DPA paper attacked DES - the case study every exam reproduces. The target structure: DES's first round computes eight S-box outputs, each from 6 expanded-input bits (48-bit XOR of the key chunk and expanded data); each S-box's 4-bit output depends on exactly 6 key bits - 64 hypotheses per S-box, 8 S-boxes processed independently. The worked walk: collect N power traces encrypting known plaintexts; for S-box 1 and hypothesis k_h (6 bits), compute the predicted 4-bit output b(k_h); classify each trace by the LSB of b; average class-1 traces and class-0 traces; the difference curve peaks at the instant S-box 1 computes IF k_h is correct - repeat for all 64 hypotheses, take the peakiest, move to S-box 2. Eight independent 6-bit searches recover the 48-bit first-round key; the remaining 8 key bits fall to 2^8 brute force - the full 56-bit key in one afternoon of oscilloscope time.",
              "The worked numbers and the refinement: 1,000 traces suffice for clean peaks on unmasked hardware (10,000 for margin); correlation power analysis (CPA) improves on binary DPA by correlating the full Hamming-weight prediction against traces - Pearson correlation peaks at the correct hypothesis with fewer traces (~500-2,000); the counter-intelligence detail is the ghost-peak phenomenon (similar hypotheses produce partial peaks - the analyst picks the structurally-consistent peak set).",
              "The defences this case study motivates: first-order masking (split each S-box input/output into shares - the doubled logic of Unit 3.4), hiding (dual-rail logic making per-cycle current constant), desynchronization (random process ordering so peaks smear), and protocol blinding. The closing sentence: Kocher's DES case is the template for every DPA - the small-key-chunk-plus-predictable-intermediate recipe is the attack, and breaking that recipe is the defence.",
              "Exam framing: 'Describe Kocher's DPA attack on DES' is the syllabus's named case study - a 14-mark centrepiece. Work the S-box-by-S-box walk with its 64-hypothesis arithmetic, the CPA refinement, and the motivated defences.",
            ],
            keyTerms: [
              { term: "S-box hypothesis", definition: "64 candidate 6-bit key chunks per S-box, tested independently." },
              { term: "CPA", definition: "Correlation power analysis - full Hamming-weight prediction correlated." },
              { term: "Ghost peak", definition: "Partial peaks from structurally similar wrong hypotheses." },
              { term: "Desynchronization", definition: "Randomizing process order to smear DPA peaks." },
            ],
            diagram: {
              kind: "pipeline",
              title: "Kocher's DPA on DES, S-box by S-box",
              caption: "8 independent 6-bit searches + 2^8 brute force = the 56-bit key in an afternoon.",
              stages: [
                { label: "Collect", note: "N traces, known plaintexts, first round targeted" },
                { label: "Hypothesize", note: "64 key chunks per S-box; predict 4-bit output" },
                { label: "Classify + average", note: "by predicted LSB; difference of means" },
                { label: "Peak decision", note: "correct chunk peaks at S-box instant" },
                { label: "Assemble", note: "8 x 6 bits + 2^8 brute = full key" },
              ],
            },
            bullets: [
              "Target: 8 S-boxes x 6 key bits - 64 hypotheses each, independent.",
              "Walk: predict output bit -> classify traces -> difference of means -> peak.",
              "Numbers: 1,000 traces clean (10,000 margin); CPA needs ~500-2,000.",
              "Assembly: 48 bits recovered + 2^8 brute force = 56-bit DES key.",
              "Ghost peaks: structurally-similar hypotheses mislead - consistency check.",
              "Motivated defences: masking, hiding, desynchronization, blinding.",
            ],
            callout: {
              type: "exam",
              title: "Six key bits at a time",
              body: "The case-study sentence: 'DPA never attacks 56 bits - it attacks eight 6-bit problems in parallel, then brute-forces the remainder.' Draw the pipeline and quote the 1,000-trace number; that is the full case study.",
            },
            table: {
              caption: "The DES DPA arithmetic.",
              headers: ["Quantity", "Value", "Note"],
              rows: [
                ["S-boxes", "8", "Processed independently"],
                ["Key bits per S-box", "6", "64 hypotheses each"],
                ["Recovered directly", "48 bits", "First round"],
                ["Brute-force remainder", "2^8", "Full key"],
                ["Traces (clean)", "~1,000", "10,000 for margin"],
                ["CPA traces", "~500-2,000", "Full-weight correlation"],
              ],
            },
            examQuestions: [
              {
                q: "Describe Kocher's DPA attack on DES: the S-box-by-S-box walk with hypothesis arithmetic, the CPA refinement and ghost peaks, and the defences the case motivates.",
                marks: 14,
                outline: [
                  "DES first-round structure: 8 S-boxes, 6 bits each",
                  "Hypothesis prediction and trace classification",
                  "Difference-of-means peak decision",
                  "Numbers: 1k traces, 10k margin, CPA 500-2k",
                  "48 bits + 2^8 assembly",
                  "Ghost-peak pitfall and consistency check",
                  "Defences: masking, hiding, desync, blinding",
                ],
              },
              {
                q: "Why does the attack process S-boxes independently instead of jointly?",
                marks: 7,
                outline: [
                  "Each S-box output depends on only 6 key bits",
                  "Independent search: 8 x 64 vs 2^56 joint",
                  "Computationally trivial and parallelizable",
                  "Peaks are statistically independent",
                  "Divide-and-conquer is the attack's core efficiency",
                ],
              },
            ],
          },
          {
            number: "3.4",
            title: "Design techniques to prevent side-channel attacks",
            body: [
              "The defences divide into two families the syllabus names. Hiding makes the leakage constant: dual-rail logic (every bit carried by two wires - one rises as the other falls, per-cycle switching activity constant - WDDL-class), noise injection (random currents drowning the signal - raising required traces by 10-100x at power cost), shuffling (randomizing operation order - peaks smear across time), and clock randomization. Masking makes the leakage irrelevant: split every secret into d+1 random shares (a = a1 XOR a2 XOR ... XOR a_{d+1}), compute on shares (the masked S-box - Provably secure first-order masking costs ~2x the S-box area), and recombine only at output - first-order DPA averages to zero because any single share's leakage is random.",
              "The worked masking arithmetic is the exam's computation: the masked AND gate (the multiplicative masking primitive) computes z = (a1 AND b1) XOR (a1 AND b2) XOR (a2 AND b1) XOR r, where r is a fresh random correction - three ANDs and an XOR instead of one, but no single share of the output depends on both input shares; the masked AES S-box (composite-field masked inversion) costs ~2x the unmasked area and ~2-3x cycles; a second-order implementation costs ~4-6x - the security-per-area ladder.",
              "The selection logic completes the section: hiding suits hardware-heavy designs (dual-rail's constant activity is elegant but consumes power and complicates synthesis), masking suits algorithmic defence (scales to any implementation style, provable security arguments, but needs careful verification - glitches break naive masked gates, the threshold-implementation answer), and both compose (masked + shuffled + dual-rail for the paranoid). The closing sentence: side-channel defence is priced in area, power and cycles - the design picks the family its threat model can afford.",
              "Exam framing: 'Explain design techniques against side-channel attacks' is a 7-14 mark staple. Give the hiding family (dual-rail, noise, shuffling) and masking family (shares, masked gates) with the worked masking arithmetic, and close with the selection logic.",
            ],
            keyTerms: [
              { term: "Dual-rail (WDDL)", definition: "Two-wire encoding with constant per-cycle switching." },
              { term: "Masking", definition: "Splitting secrets into d+1 random shares; compute on shares." },
              { term: "Masked AND", definition: "z = (a1b1)^(a1b2)^(a2b1)^r - no single-share dependency." },
              { term: "Glitch problem", definition: "Combinational transitions corrupt naive masking - threshold implementations fix it." },
            ],
            diagram: {
              kind: "compare",
              title: "Hiding vs masking",
              caption: "Flatten the signal or randomize the secret - two families, priced differently.",
              left: {
                heading: "Hiding",
                items: [
                  "Dual-rail: constant switching activity",
                  "Noise injection: 10-100x trace cost",
                  "Shuffling: peaks smear in time",
                  "Cost: power, complexity, synthesis fight",
                ],
              },
              right: {
                heading: "Masking",
                items: [
                  "d+1 shares per secret",
                  "First order: ~2x S-box area, 2-3x cycles",
                  "Second order: ~4-6x",
                  "Provable arguments; glitches need care",
                ],
              },
            },
            bullets: [
              "Hiding: dual-rail (WDDL), noise injection, shuffling, clock randomization.",
              "Masking: share splitting, masked gates, threshold implementations for glitches.",
              "Worked masked AND: 3 ANDs + XOR + fresh r; no single-share dependency.",
              "Costs: first order ~2x area/2-3x cycles; second order ~4-6x.",
              "Composition: masked + shuffled + dual-rail for high-assurance.",
              "Closing: defence priced in area, power, cycles - threat model picks.",
            ],
            callout: {
              type: "exam",
              title: "Glitches break naive masking",
              body: "The advanced mark: 'combinational glitches create transient shares-dependent activity that first-order masking misses - threshold implementations use complete, non-complete masking layers.' Mention it and the answer reads as graduate-level.",
            },
            table: {
              caption: "Defence costs at a glance.",
              headers: ["Technique", "Area cost", "Other costs", "Defeats"],
              rows: [
                ["Dual-rail (WDDL)", "~2x", "Power, synthesis", "First-order DPA"],
                ["Noise injection", "Small", "Power budget", "Raises traces 10-100x"],
                ["Shuffling", "Small", "Latency variance", "Peak alignment"],
                ["First-order masking", "~2x S-box", "2-3x cycles", "First-order DPA/CPA"],
                ["Threshold masking", "~4-6x", "Design effort", "Glitch-resistant masking"],
              ],
            },
            examQuestions: [
              {
                q: "Explain side-channel prevention techniques: the hiding and masking families, the worked masked-AND arithmetic with costs, and the selection logic.",
                marks: 14,
                outline: [
                  "Hiding: dual-rail, noise, shuffling, clock randomization",
                  "Masking: shares, masked gates, threshold implementations",
                  "Worked masked AND: z = (a1b1)^(a1b2)^(a2b1)^r",
                  "Costs: 2x area first order, 4-6x second order",
                  "Glitch caveat and threshold fix",
                  "Composition for high assurance",
                  "Threat-model pricing closing",
                ],
              },
              {
                q: "Why does first-order masking average to zero under DPA?",
                marks: 7,
                outline: [
                  "Any single share is uniformly random",
                  "Leakage of one share is independent of the secret",
                  "Difference of means over random classes = 0",
                  "Information lives only in joint (higher-order) moments",
                  "Hence the 100x trace multiplier per order",
                ],
              },
            ],
          },
          {
            number: "3.5",
            title: "Improved side-channel attacks: the template attack",
            body: [
              "The template attack is DPA's statistical superior: instead of testing key hypotheses one at a time, it profiles the device first - builds a multivariate template (mean vector + covariance matrix, i.e. a multivariate Gaussian) for every possible value of the target intermediate - then classifies a fresh trace by maximum likelihood. The phases: profiling (attacker controls a training device - identical model; collects many traces per intermediate value, estimates each value's Gaussian), and attack (collect a few traces from the target device, compute each candidate value's likelihood, multiply across trace points and events - the posterior peaks at the true value).",
              "The worked arithmetic shows its power: a subsampled trace of 100 points, 256 candidate values for one AES byte - profiling collects ~1,000 traces per value (256k traces total, the expensive phase), the attack phase needs only 1-5 traces from the target (each trace multiplies likelihood across 100 points), and the correct byte's posterior dominates. The numbers: DPA needs 1,000-10,000 traces on the target; the template attack needs 1-5 - the profiling cost buys the attack-phase economy. The extended variant: the stochastic approach (linear-regression leak models per point) reduces profiling cost; the machine-learning era (template attacks are precisely Gaussian classifiers - modern deep-learning side-channel attacks generalize them) pushes further to 1-trace attacks on protected devices.",
              "The defences mirror the attack: against profiling, the target's variability matters (masked implementations still leak in higher-order joint moments - the template attack's multivariate nature captures them), and protocol countermeasures (fresh randomness per session) force re-profiling. The closing sentence: the template attack is the side-channel world's learned threat - profile once, attack cheaply, and the defence is making every device's leakage signature unique or every session's leakage fresh.",
              "Exam framing: 'Explain the template attack' is a 7-14 mark staple. Give the two phases with the Gaussian machinery, work the 256-value/1-5-trace arithmetic, and close with the defences.",
            ],
            keyTerms: [
              { term: "Template", definition: "Per-value multivariate Gaussian (mean + covariance) from profiling." },
              { term: "Profiling phase", definition: "Attacker-controlled identical device; ~1,000 traces per value." },
              { term: "Maximum likelihood", definition: "Classify fresh traces by posterior across templates." },
              { term: "Stochastic model", definition: "Linear-regression leakage models reducing profiling cost." },
            ],
            diagram: {
              kind: "pipeline",
              title: "Profile once, attack cheaply",
              caption: "256k profiling traces buy 1-5-trace attacks on every target of the same model.",
              stages: [
                { label: "Profiling device", note: "identical model, attacker-controlled" },
                { label: "Build templates", note: "~1k traces x 256 values -> 256 Gaussians" },
                { label: "Target traces", note: "1-5 traces only" },
                { label: "Classify", note: "max-likelihood across 100 points" },
                { label: "Key byte", note: "posterior peak -> value" },
              ],
            },
            bullets: [
              "Two phases: profiling (expensive, attacker device) and attack (cheap, target device).",
              "Templates: per-value mean + covariance Gaussians.",
              "Worked: 256 values x 1k traces profiled; 1-5 target traces suffice.",
              "DPA contrast: 1k-10k traces on target vs 1-5 with templates.",
              "Modern: ML/DL generalizations reach 1-trace attacks on protected devices.",
              "Defences: per-device variability, fresh randomness, higher-order hardening.",
            ],
            callout: {
              type: "exam",
              title: "Profile once, attack everywhere",
              body: "The template sentence: 'the profiling cost is paid once per device model - every shipped unit is then attackable in 1-5 traces.' The economy inversion (expensive profile, cheap attack) is the section's whole insight.",
            },
            table: {
              caption: "DPA vs template attack economics.",
              headers: ["Property", "DPA", "Template attack"],
              rows: [
                ["Profiling needed", "None", "256k traces on a twin device"],
                ["Target traces", "1k-10k", "1-5"],
                ["Statistics", "Difference of means", "Multivariate likelihood"],
                ["Protected targets", "First-order only", "Higher-order capable"],
                ["Modern form", "CPA", "ML/DL classifiers"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the template attack: the two phases with Gaussian machinery, the worked 256-value arithmetic, and the defences.",
                marks: 14,
                outline: [
                  "Profiling: twin device, per-value Gaussians",
                  "Attack: max-likelihood classification of 1-5 traces",
                  "Worked: 256 values, 100 points, 1k traces/value",
                  "Economy inversion vs DPA",
                  "Stochastic and ML refinements",
                  "Defences: variability, freshness, higher-order",
                  "Learned-threat closing",
                ],
              },
              {
                q: "Why does fresh per-session randomness force template attackers to re-profile?",
                marks: 7,
                outline: [
                  "Templates bind leakage patterns to fixed intermediates",
                  "Randomized masking changes the pattern per session",
                  "Profiled Gaussians no longer match",
                  "Re-profiling needs new controlled traces",
                  "Economy inversion collapses back to DPA costs",
                ],
              },
            ],
          },
          {
            number: "3.6",
            title: "Cache attacks",
            body: [
              "Cache attacks extend side channels into shared processors: the cache hierarchy's timing (L1 ~4 cycles, L3 ~40, DRAM ~200) leaks which memory the victim touched - and the attacker sharing the core (or the cloud tenant sharing the machine) reads it through timing. The two canonical techniques: Flush+Reload (attacker flushes a shared cache line with clflush, waits, reloads and measures - fast reload means the victim accessed it; works on shared read-only pages like shared libraries) and Prime+Probe (attacker primes a cache set with own data, lets the victim run, probes - slow probe means the victim evicted attacker lines; needs no shared memory, works cross-VM on shared L3).",
              "The worked Flush+Reload spy shows the mechanics: the crypto library's T-table lookup (AES T-table indexed by secret byte) touches one of 32 cache lines per table; the spy flushes all 32 lines, waits for the victim's encryption, reloads each - the one line reloading in ~4 cycles vs ~200 for the others names the victim's table index; 16 accesses per encryption trace the full key in minutes. The worked numbers: L1 latency ~4 cycles, L3 ~40, DRAM ~200 - the three-threshold timing ladder that every cache attack reads.",
              "The defences and the modern frame complete the section: constant-time cryptography (no secret-indexed memory access - bitsliced AES avoids T-tables), cache partitioning (Intel CAT), core isolation, and the OS/kernel mitigations; the modern frame: Spectre/Meltdown-class attacks (Unit IV's fault-thinking meets the cache channel - speculative execution leaking through the same timing ladder). The closing sentence: cache attacks are the side channel of the shared machine - the defence is constant-time code, because partitioning the cloud is harder than partitioning a smart card.",
              "Exam framing: 'Explain cache attacks' is a 7-14 mark staple. Give the cache-timing ladder, work the Flush+Reload T-table spy with numbers, present Prime+Probe's difference, and close with defences and the modern frame.",
            ],
            keyTerms: [
              { term: "Flush+Reload", definition: "clflush + reload timing on shared pages - needs shared memory." },
              { term: "Prime+Probe", definition: "Set priming + eviction probing - cross-VM capable." },
              { term: "Cache-timing ladder", definition: "L1 ~4, L3 ~40, DRAM ~200 cycles - the leak's ruler." },
              { term: "Constant-time crypto", definition: "No secret-indexed memory access - the root defence." },
            ],
            diagram: {
              kind: "flow",
              title: "Flush+Reload on an AES T-table",
              caption: "32 lines flushed; the victim's secret-indexed access reloads exactly one - timing names it.",
              steps: [
                { label: "Flush", note: "clflush all 32 T-table lines" },
                { label: "Victim runs", note: "AES lookup touches line s (secret byte)" },
                { label: "Reload + time", note: "line s: ~4 cycles; others: ~200" },
                { label: "Record", note: "s = the secret byte's table index" },
                { label: "Repeat", note: "16 rounds -> key in minutes" },
              ],
            },
            bullets: [
              "Ladder: L1 ~4, L3 ~40, DRAM ~200 cycles - every attack reads it.",
              "Flush+Reload: shared pages, clflush, per-line reload timing.",
              "Worked: T-table spy names the secret-indexed line; 16 accesses per encryption.",
              "Prime+Probe: no shared memory, set eviction probing, cross-VM.",
              "Defences: constant-time code, cache partitioning, core isolation.",
              "Modern: Spectre/Meltdown reuse the same ladder.",
            ],
            callout: {
              type: "exam",
              title: "Constant-time is the only portable defence",
              body: "The cache sentence: 'on a shared machine the defence is constant-time code - partitioning helps, but the cloud remounts the attack every tenancy.' The T-table spy is the worked demonstration; bitsliced AES is its cure.",
            },
            table: {
              caption: "Cache techniques compared.",
              headers: ["Technique", "Requirement", "Granularity", "Scope"],
              rows: [
                ["Flush+Reload", "Shared memory (libraries)", "Cache line (64 B)", "Same core/die"],
                ["Prime+Probe", "Shared cache set", "Set (~16 lines)", "Cross-VM on shared L3"],
                ["Evict+Time", "Shared cache", "Whole table", "Coarse"],
              ],
            },
            examQuestions: [
              {
                q: "Explain cache attacks: the timing ladder, the Flush+Reload T-table spy with numbers, the Prime+Probe contrast, and the defences.",
                marks: 14,
                outline: [
                  "Ladder: 4/40/200 cycles explained",
                  "Flush+Reload mechanics on T-tables",
                  "Worked: 32 lines, one fast reload, 16 rounds",
                  "Prime+Probe: priming, eviction, cross-VM",
                  "Requirement contrast: shared memory vs shared set",
                  "Defences: constant-time, partitioning, isolation",
                  "Spectre/Meltdown modern frame",
                ],
              },
              {
                q: "Why do T-table implementations leak through the cache but bitsliced AES does not?",
                marks: 7,
                outline: [
                  "T-tables index memory by secret-derived values",
                  "Cache-line access patterns encode the secret",
                  "Bitslicing computes AES as pure logic - no lookups",
                  "No secret-dependent memory access, no cache leak",
                  "Constant-time by construction",
                ],
              },
            ],
          },
          {
            number: "3.7",
            title: "The side-channel evaluation mindset",
            body: [
              "The unit's synthesis is the evaluation mindset: side-channel resistance is a measured property, and the industry evaluates it the way this unit attacked. The evaluation framework: leakage assessment (the fixed-vs-random test - TVLA's Welch t-test over fixed-vs-random plaintext traces; a t-statistic above ~4.5 means leakage), the attack-based evaluation (run SPA/DPA/CPA/template attacks and report traces-to-key), and the protected-design verification (masked designs verified to their claimed order). The worked evaluation: a masked AES claims first-order resistance - the TVLA test over 100k traces shows t < 4.5 (no first-order leakage), a CPA attack plateaus at 10k traces without a key (expected), a second-order template attack with 50k profile traces recovers the key in 200 attack traces (the documented residual) - the report states what is proven and what remains.",
              "The worked metric ladder is the exam's arithmetic: unprotected DES - 1k traces (broken); hidden-only (WDDL) - 10k-100k (weak); first-order masked - >1M for first-order, broken by second-order with 50k profile + 200 attack (mitigated); second-order masked - first practical attacks need >10M equivalent (strong for the threat model). The security-per-area prices from 3.4 make the ladder an engineering table, not a leaderboard.",
              "The certification frame completes the mindset: Common Criteria / EMVCo / FIPS-style evaluations demand documented leakage assessment at defined adversary profiles - the syllabus's attacks are exactly those profiles' toolkit. The closing sentence: the evaluation mindset converts side channels from folklore to engineering - every claim of resistance is a test with a number, and the subject's attacks are the tests.",
              "Exam framing: 'Explain how side-channel resistance is evaluated' is the unit's 14-mark synthesis. Give the assessment framework (TVLA, attack-based, verification), the worked masked-AES evaluation with its numbers, and the metric ladder with certification frame.",
            ],
            keyTerms: [
              { term: "TVLA", definition: "Test Vector Leakage Assessment - fixed-vs-random Welch t-test." },
              { term: "Leakage threshold", definition: "t > ~4.5 indicates exploitable first-order leakage." },
              { term: "Traces-to-key", definition: "The attack-based metric: how many traces recover the key." },
              { term: "Adversary profile", definition: "The certification-defined attacker capability (traces, access, equipment)." },
            ],
            diagram: {
              kind: "pyramid",
              title: "The resistance ladder, priced",
              caption: "From broken to strong - each rung's cost in area and traces.",
              tiers: [
                { label: "Second-order masked", note: ">10M-equivalent first practical attacks - strong" },
                { label: "First-order masked", note: "1M+ first-order; second-order 50k+200 - mitigated" },
                { label: "Hiding only (WDDL)", note: "10k-100k traces - weak" },
                { label: "Unprotected", note: "~1k traces - broken" },
              ],
            },
            bullets: [
              "Framework: TVLA leakage assessment + attack-based traces-to-key + protected-design verification.",
              "Worked masked AES: TVLA t < 4.5; CPA plateaus at 10k; second-order 50k profile + 200 attack.",
              "Report honesty: proven vs residual stated.",
              "Ladder: 1k -> 10k-100k -> >1M -> >10M-equivalent.",
              "Security-per-area from 3.4 prices the rungs.",
              "Certification: CC/EMVCo/FIPS profiles use exactly these attacks.",
            ],
            callout: {
              type: "exam",
              title: "Resistance is a test with a number",
              body: "The synthesis sentence: 'every claim of side-channel resistance is a test with a number - TVLA for leakage, traces-to-key for attacks.' The masked-AES worked evaluation is the answer's demonstration.",
            },
            table: {
              caption: "The worked masked-AES evaluation.",
              headers: ["Test", "Result", "Interpretation"],
              rows: [
                ["TVLA (100k traces)", "t < 4.5", "No first-order leakage"],
                ["CPA on target", "Plateau at 10k", "First-order attack fails"],
                ["2nd-order template", "50k profile + 200 attack", "Documented residual"],
                ["Conclusion", "First-order resistant", "Claim verified with residual"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the side-channel evaluation mindset: the assessment framework, the worked masked-AES evaluation, the resistance ladder with prices, and the certification frame.",
                marks: 14,
                outline: [
                  "TVLA fixed-vs-random test with 4.5 threshold",
                  "Attack-based traces-to-key metric",
                  "Worked: TVLA pass, CPA plateau, 2nd-order residual",
                  "Ladder: 1k / 10k-100k / 1M / 10M rungs",
                  "Security-per-area pricing",
                  "CC/EMVCo/FIPS adversary profiles",
                  "Folklore-to-engineering closing",
                ],
              },
              {
                q: "Why does a passing TVLA test not prove security?",
                marks: 7,
                outline: [
                  "TVLA tests first-order leakage only",
                  "Higher-order leakage may remain exploitable",
                  "Fixed-vs-random misses data-dependent patterns",
                  "It is a screening test, not a proof",
                  "Hence attack-based evaluation complements it",
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
      title: "Testability, Fault Attacks and Verification",
      summary:
        "Unit IV covers fault tolerance of cryptographic hardware, the fault-attack family from Bellcore to differential fault analysis, fault-injection techniques and countermeasures, verification of finite-field arithmetic circuits, and the modern IC design and manufacturing flow with its trust implications.",
      chapter: {
        number: "04",
        title: "Faults, Verification and the Supply Chain",
        intro:
          "Unit IV covers fault tolerance of cryptographic hardware, fault attacks, verification of finite-field arithmetic circuits, and modern IC design and manufacturing practices with their implications.",
        inOneBreath:
          "A fault attack breaks the algorithm by breaking its execution: inject an error (voltage glitch, clock glitch, laser, EM), observe the faulty output, and derive the key from the difference. Bellcore (1996) breaks CRT-RSA with one faulty signature: gcd(sig - sig', n) = p. Differential fault analysis on AES targets the last rounds - one fault in round 9 narrows the key space to ~2^8 candidates. Defences divide into detection (redundant computation, timeline checks, golden-chip comparison) and tolerance (error-correcting execution). Verification proves the shipped arithmetic is the specified arithmetic: algebraic checks on GF(2^n) multipliers and formal equivalence. The IC flow (RTL -> GDSII -> fab -> test) spans untrusted parties - the modern manufacturing practice whose trust gap is the Trojan entry point.",
        sections: [
          {
            number: "4.1",
            title: "Fault tolerance of cryptographic hardware",
            body: [
              "Fault tolerance is the discipline of correct operation despite physical errors - and in cryptographic hardware it doubles as the first line of fault-attack defence. The classical taxonomy: hardware redundancy (dual/triple modular redundancy - TMR votes two-of-three; doubles/triples area), information redundancy (error-detecting codes - parity, CRC, and the cryptographic integrity check), and time redundancy (recompute and compare - the timeline check that costs latency not area). The worked arithmetic: TMR on the AES datapath triples ~20k LUTs to ~60k for the unrolled design; a time-redundant double-computation costs 2x cycles at ~1.05x area (a second pass with a transformed schedule) - the two redundancy currencies.",
              "The cryptographic-specific duty: fault tolerance must cover the key schedule and control flow too (a faulted round counter skipping rounds is the skipping-attacks entry), and the comparison must be constant-flow (the compare-then-output discipline preventing partial faulty outputs from ever reaching the bus). The worked design: AES computes twice under different schedules (the second pass transformed), outputs only on equality, and raises a fault flag otherwise - the double-computation detector that converts 2x cycles into fault-attack immunity for ~1.05x area.",
              "The limits complete the section: detection vs correction (detecting a fault and refusing output is usually sufficient cryptographically - the attacker learns nothing), transient vs permanent faults (transient = glitches, correctable by detection; permanent = aged or Trojaned hardware, needing the testing of Unit 4.5), and the threat-model framing (the attacker who can inject one fault per execution vs the one who can inject and re-inject - re-injection defeats single-detection). The closing sentence: fault tolerance in crypto is detection-first - refuse to output on mismatch, because a withheld faulty ciphertext is a zero-information event for the attacker.",
              "Exam framing: 'Explain fault tolerance in cryptographic hardware' is a 7-14 mark staple. Give the three redundancy families with worked area/latency arithmetic, the crypto-specific duties, and the detection-first closing.",
            ],
            keyTerms: [
              { term: "TMR", definition: "Triple modular redundancy - two-of-three voting, 3x area." },
              { term: "Time redundancy", definition: "Recompute-and-compare under different schedules - 2x cycles, ~1.05x area." },
              { term: "Fault flag", definition: "Refuse output on mismatch - the detection-first discipline." },
              { term: "Re-injection", definition: "Attacker faults repeatedly - defeats single-shot detection." },
            ],
            diagram: {
              kind: "compare",
              title: "Hardware vs time redundancy",
              caption: "3x area or 2x cycles - the two currencies of fault tolerance.",
              left: {
                heading: "Hardware redundancy (TMR)",
                items: [
                  "Three instances, majority vote",
                  "20k -> 60k LUTs (unrolled AES)",
                  "Real-time correction possible",
                  "Voter itself must be hardened",
                ],
              },
              right: {
                heading: "Time redundancy",
                items: [
                  "Second pass, transformed schedule",
                  "~1.05x area, 2x cycles",
                  "Detect-and-refuse output",
                  "Vulnerable to matched re-injection",
                ],
              },
            },
            bullets: [
              "Families: hardware (TMR), information (codes), time (recompute-compare).",
              "Worked: TMR 60k LUTs vs double-compute 2x cycles at 1.05x area.",
              "Coverage: key schedule and control flow included, not just datapath.",
              "Compare-then-output discipline: faulty outputs never reach the bus.",
              "Detection vs correction: refuse-and-flag suffices cryptographically.",
              "Re-injection caveat: transient-only detection is not enough.",
            ],
            callout: {
              type: "exam",
              title: "A withheld fault is zero information",
              body: "The discipline sentence: 'detection beats correction in crypto - refuse to output on mismatch, because a withheld faulty ciphertext tells the attacker nothing.' The 1.05x-area double-computation is the engineering demonstration.",
            },
            table: {
              caption: "Redundancy options compared.",
              headers: ["Option", "Area", "Latency", "Property"],
              rows: [
                ["TMR", "3x", "1x", "Real-time correction"],
                ["Dual + compare", "2x", "1x", "Detection"],
                ["Double computation", "~1.05x", "2x", "Detection, schedule-diverse"],
                ["CRC/integrity codes", "~1.1x", "~1x", "Detects multi-bit errors"],
              ],
            },
            examQuestions: [
              {
                q: "Explain fault tolerance for cryptographic hardware: the three families with worked arithmetic, the crypto-specific coverage duties, and the detection-first discipline.",
                marks: 14,
                outline: [
                  "Hardware: TMR 3x area with voting",
                  "Information: codes for multi-bit detection",
                  "Time: double computation 2x cycles, 1.05x area",
                  "Coverage: schedule + control flow",
                  "Compare-then-output discipline",
                  "Detection-vs-correction reasoning",
                  "Re-injection threat framing",
                ],
              },
              {
                q: "Why must the fault-tolerant AES compute under a different schedule?",
                marks: 7,
                outline: [
                  "Identical schedules let one glitch corrupt both passes identically",
                  "Transformed schedules decorrelate fault effects",
                  "Mismatch then signals injected faults",
                  "Identical passes agree on the faulted result",
                  "Diversity is the detection mechanism",
                ],
              },
            ],
          },
          {
            number: "4.2",
            title: "Fault attacks: from Bellcore to differential fault analysis",
            body: [
              "The fault-attack family breaks cryptography by breaking its execution - the seminal Bellcore attack (Boneh, DeMillo, Lipton 1996) breaks CRT-RSA with one faulty signature. The mechanics: RSA-CRT computes sig1 = m^d mod p and sig2 = m^d mod q, recombined s = CRT(sig1, sig2); a transient fault in one branch (say sig1 computed wrong as sig1') yields a faulty signature s'; the algebra: gcd(s - s', n) = q (the correct branch agrees mod q, the faulted disagrees mod p) - one faulty signature, one gcd, one prime factor of n; the private key follows. The worked counter-case: the defensive re-computation (sign twice, compare - 4.1's discipline) rejects the faulty output before it leaves, and the Shamir-style countermeasure verifies sig^e mod p = m before recombination.",
              "Differential fault analysis (DFA) extends the idea to AES: inject a fault in the second-to-last round, collect correct and faulty ciphertexts, and the differential propagates backward through one MixColumns and one SubBytes - the last-round key candidates narrow to ~2^8 per byte; a fault in round 9 leaves 4 bytes unknown per affected column, and with 2-4 faulted ciphertexts the full AES-128 key falls to exhaustive search over ~2^32 candidates (practical in minutes). The worked numbers: one fault in round 10 (last) -> ~2^8 candidates per byte; round 9 -> 4-byte candidates per column; two faults -> key recovery.",
              "The technique catalogue and the defences complete the section: injection techniques (4.3's voltage/clock/laser/EM), the skipping attack (faulting the round counter), and the defences (4.1's detection, the Shamir verification, and the redundancy ladder). The closing sentence: fault attacks are the algebra of differential errors - the defence is never emitting a differential, which is why detection-and-refuse is the whole game.",
              "Exam framing: 'Explain fault attacks - Bellcore and DFA' is a 14-mark centrepiece. Work the CRT-RSA gcd attack, the AES DFA backward-propagation with its per-round numbers, and the defence mapping.",
            ],
            keyTerms: [
              { term: "Bellcore attack", definition: "One faulty CRT-RSA signature: gcd(s - s', n) recovers a prime." },
              { term: "DFA", definition: "Differential fault analysis - backward key derivation from faulted ciphertexts." },
              { term: "Shamir countermeasure", definition: "Verify sig^e mod p = m before recombination." },
              { term: "Skipping attack", definition: "Faulting the round counter to skip rounds." },
            ],
            diagram: {
              kind: "flow",
              title: "Bellcore: one faulty signature breaks RSA-CRT",
              caption: "sig correct mod q, faulty mod p - the gcd splits n.",
              steps: [
                { label: "CRT signature", note: "s from sig1 (mod p) and sig2 (mod q)" },
                { label: "Inject fault", note: "voltage glitch during sig1 computation" },
                { label: "Faulty output", note: "s' = CRT(sig1', sig2)" },
                { label: "gcd", note: "gcd(s - s', n) = q" },
                { label: "Key recovery", note: "q -> p -> private key" },
              ],
            },
            bullets: [
              "Bellcore: fault one CRT branch; gcd(s - s', n) = the other modulus.",
              "Worked: correct branch agrees mod q; faulted disagrees mod p.",
              "Defence: re-compute-and-compare; Shamir verification sig^e mod p.",
              "DFA on AES: round-10 fault -> 2^8 candidates/byte; round-9 -> 4 bytes/column.",
              "Numbers: 2-4 faulted ciphertexts -> full AES-128 key.",
              "Closing: never emit a differential.",
            ],
            callout: {
              type: "exam",
              title: "One glitch, one gcd, one private key",
              body: "The Bellcore sentence: 'a single faulty signature yields gcd(s - s', n) = q - the private key follows in one Euclid step.' Pair it with DFA's round-9 arithmetic and the fault family is complete.",
            },
            table: {
              caption: "Fault-attack arithmetic at a glance.",
              headers: ["Target", "Fault position", "Result"],
              rows: [
                ["RSA-CRT", "One branch, transient", "gcd(s - s', n) = prime"],
                ["AES-128", "Round 10", "~2^8 candidates/byte"],
                ["AES-128", "Round 9", "4 bytes/column unknown"],
                ["AES-128", "Two round-9 faults", "Full key via 2^32 search"],
              ],
            },
            examQuestions: [
              {
                q: "Explain fault attacks: the Bellcore CRT-RSA gcd attack, AES differential fault analysis with per-round numbers, and the countermeasure mapping.",
                marks: 14,
                outline: [
                  "CRT-RSA structure and fault injection point",
                  "gcd(s - s', n) = q worked",
                  "Shamir verification and re-computation defences",
                  "DFA backward propagation through MixColumns/SubBytes",
                  "Round-10 vs round-9 candidate arithmetic",
                  "2-4 faults -> full key",
                  "Never-emit-a-differential closing",
                ],
              },
              {
                q: "Why is a fault in round 9 more powerful than round 10 for DFA?",
                marks: 7,
                outline: [
                  "Round-10 faults affect one byte before final MixColumns",
                  "Round-9 faults diffuse through MixColumns to 4 bytes",
                  "More unknowns per fault but richer differentials",
                  "Two round-9 faults cover all columns",
                  "Hence 2-4 ciphertexts recover the key",
                ],
              },
            ],
          },
          {
            number: "4.3",
            title: "Fault injection techniques",
            body: [
              "The injection techniques are the fault attacker's toolbox, ranked by accessibility and precision. Voltage glitching: drop Vdd for 1-10 ns at a chosen instant - the cheapest technique (a USD 50 FPGA board drives it), causing logic-race errors; clock glitching: shorten one clock cycle similarly; EM injection (EMFI): a pulsed magnetic field through a coil perturbs local logic - non-contact, localized to mm-scale, the mid-tier technique; laser injection: a focused laser pulse through the decapsulated die backside creates transient photocurrents in chosen transistors - the precision technique (single-bit faults) requiring lab equipment (USD 50k+) and die access; and the body-level techniques (temperature, radiation).",
              "The worked setup-and-effect table gives each technique its numbers: voltage glitch - USD 50-500 setup, ns-scale timing control, multi-bit faults typical (logic races), works through packaging; clock glitch - similar cost, cycle-level control, setup/hold violations; EMFI - USD 5-20k, sub-mm localization, single-to-few-bit faults, non-destructive; laser - USD 50k+, single-transistor targeting, single-bit faults, decapsulation required (invasive-adjacent). The worked election: a DFA-on-AES campaign needs round-timed multi-bit faults - EMFI at the right clock cycle is the workhorse; a Bellcore campaign needs one fault anywhere in one CRT branch - voltage glitching suffices.",
              "The defender's view completes the section: fault sensors (voltage/clock monitors, light sensors on decapsulation-sensitive dies, active mesh shields detecting probes and pulses), layout hardening (duplex logic, balanced cells resisting glitches), and the response policy (zeroize on detected injection - the fault becomes a brick instead of a signature). The closing sentence: injection techniques ladder from USD 50 to USD 50k - the defender's sensors must cover the bottom rungs, because that is where the adversaries are.",
              "Exam framing: 'Explain fault injection techniques' is a 7-14 mark staple. Rank the four techniques by cost, precision and access with the worked setup table, state the campaign-matching election, and close with the sensor defences.",
            ],
            keyTerms: [
              { term: "Voltage glitch", definition: "Sub-10ns Vdd drop causing logic-race faults - cheapest technique." },
              { term: "EMFI", definition: "Electromagnetic fault injection - localized, non-contact, mid-cost." },
              { term: "Laser injection", definition: "Photocurrent injection at transistor precision - needs decapsulation." },
              { term: "Active mesh shield", definition: "Top-layer sensor mesh detecting probing and pulses." },
            ],
            diagram: {
              kind: "pyramid",
              title: "The injection cost ladder",
              caption: "USD 50 at the base, USD 50k at the peak - sensors must cover the base.",
              tiers: [
                { label: "Laser", note: "USD 50k+, single-bit, decapsulation required" },
                { label: "EMFI", note: "USD 5-20k, sub-mm, non-contact" },
                { label: "Clock glitch", note: "USD 50-500, cycle-level control" },
                { label: "Voltage glitch", note: "USD 50-500, ns-scale, works through package" },
              ],
            },
            bullets: [
              "Ladder: voltage/clock glitch -> EMFI -> laser, with costs and precision.",
              "Worked table: USD 50-500 / USD 5-20k / USD 50k+ setups.",
              "Fault granularity: multi-bit (glitch) -> few-bit (EMFI) -> single-bit (laser).",
              "Campaign matching: DFA needs EMFI timing; Bellcore needs any glitch.",
              "Defences: sensors, mesh shields, zeroize-on-detect policy.",
              "Closing: cover the bottom rungs.",
            ],
            callout: {
              type: "exam",
              title: "Match the technique to the campaign",
              body: "The election sentence: 'Bellcore needs one fault anywhere in one branch - voltage glitching at USD 50 suffices; DFA needs round-timed placement - EMFI is the workhorse.' The cost ladder shows why the cheap techniques dominate real attacks.",
            },
            table: {
              caption: "Injection techniques compared.",
              headers: ["Technique", "Setup cost", "Precision", "Access"],
              rows: [
                ["Voltage glitch", "USD 50-500", "ns timing, multi-bit", "Non-invasive"],
                ["Clock glitch", "USD 50-500", "Cycle timing", "Non-invasive"],
                ["EMFI", "USD 5-20k", "Sub-mm, few-bit", "Non-contact"],
                ["Laser", "USD 50k+", "Single transistor", "Decapsulation"],
              ],
            },
            examQuestions: [
              {
                q: "Explain fault injection techniques: the four-technique ladder with costs and precision, the campaign-matching election, and the sensor defences.",
                marks: 14,
                outline: [
                  "Voltage/clock glitching: cheap, multi-bit, ns control",
                  "EMFI: mid-cost, sub-mm, non-contact",
                  "Laser: precision single-bit, decapsulation",
                  "Worked setup table quoted",
                  "Bellcore vs DFA campaign matching",
                  "Sensors, mesh shields, zeroize policy",
                  "Bottom-rungs closing",
                ],
              },
              {
                q: "Why do glitch attacks work through the package while laser attacks need decapsulation?",
                marks: 7,
                outline: [
                  "Glitches perturb global supply/clock - package-transparent",
                  "Laser needs optical access to the transistors",
                  "Silicon blocks photons - backside thinning required",
                  "Decapsulation crosses the invasive boundary",
                  "Hence laser's cost and precision pairing",
                ],
              },
            ],
          },
          {
            number: "4.4",
            title: "Countermeasures against fault attacks",
            body: [
              "The countermeasures complete Unit 4.1's discipline with the algorithmic layer. Detection-oriented: duplicate computation with comparison (4.1's double-pass), invariant checks (Shamir's sig^e mod p = m verification - catches CRT faults cheaply), timeline redundancy (recompute in different orders), and sensor-based detection (4.3's monitors). Tolerance-oriented: error-correcting execution (TMR with voting - the fault corrected in real time), and the algorithmic redundancy (computing the same result by two different algorithms - AES and its inverse, or two code paths). The protocol-level: key update and session invalidation on detected faults (the fault becomes an alert, not an attack), and rate-limiting fault-triggered failures (the re-injection defence).",
              "The worked countermeasure selection shows the engineering: a payment card facing EMFI-class attackers - budget 1.2x area: double-computation AES (2x cycles at 1.05x area) + voltage/EM sensors + zeroize-on-fault; the residual threat (matched re-injection defeating identical comparisons) is answered by schedule-diverse double computation and the rate limiter. The numbers: detection coverage ~99% of glitch-class faults (sensors catch the injection, comparison catches the algebra), residual = precision laser attacks, which die at the decapsulation sensor. The full stack prices at ~1.2-1.4x area and 2x cycles - the card ships.",
              "The verification-oriented countermeasure previews Unit 4.5: provably-correct circuits reduce the fault surface (a formally-verified multiplier has fewer silent-error modes), and algebraic redundancy (computing in GF(2^8) and checking via a field identity) catches arithmetic faults structurally. The closing sentence: fault countermeasures are a stack - sensors catch the injector, comparisons catch the algebra, rate limiters catch the campaign - and the design buys the stack its threat model prices.",
              "Exam framing: 'Explain countermeasures against fault attacks' is a 7-14 mark staple. Give the detection and tolerance families with the worked card-design selection and its 1.2x-area pricing, and close with the stack sentence.",
            ],
            keyTerms: [
              { term: "Invariant check", definition: "Shamir-style verification of an algebraic property before output." },
              { term: "Zeroize-on-fault", definition: "Erase keys on detected injection - the fault becomes a brick." },
              { term: "Rate limiting", definition: "Bounding fault-triggered failures - the re-injection defence." },
              { term: "Algorithmic redundancy", definition: "Two different algorithms computing the same result." },
            ],
            diagram: {
              kind: "layers",
              title: "The fault-defence stack",
              caption: "Sensors, comparisons, rate limiters - each layer catches a different attacker class.",
              layers: [
                { label: "Rate limiting", note: "fault-triggered failures bounded - re-injection dies" },
                { label: "Comparison layer", note: "double computation, invariant checks - algebra caught" },
                { label: "Sensor layer", note: "voltage/EM/light monitors - injector caught" },
                { label: "Response", note: "zeroize + alert - the fault becomes a brick" },
              ],
            },
            bullets: [
              "Detection: duplicate computation, invariant checks, timeline redundancy, sensors.",
              "Tolerance: TMR voting, algorithmic redundancy.",
              "Protocol: key update, session invalidation, rate limiting.",
              "Worked card: 1.05x-area double-compute + sensors + zeroize at 1.2-1.4x area, 2x cycles.",
              "Coverage: ~99% glitch-class faults; laser dies at decapsulation sensor.",
              "Verification preview: provable circuits reduce silent-error modes.",
            ],
            callout: {
              type: "exam",
              title: "Three layers, three attacker classes",
              body: "The stack sentence: 'sensors catch the injector, comparisons catch the algebra, rate limiters catch the campaign.' The worked card with its 1.2-1.4x pricing is the selection demonstration.",
            },
            table: {
              caption: "Countermeasure families and their targets.",
              headers: ["Family", "Technique", "Catches"],
              rows: [
                ["Sensors", "V/EM/light monitors", "The injection event"],
                ["Comparison", "Double computation, invariants", "The algebraic error"],
                ["Tolerance", "TMR voting", "Multi-bit corruption"],
                ["Protocol", "Rate limiting, invalidation", "Re-injection campaigns"],
              ],
            },
            examQuestions: [
              {
                q: "Explain fault-attack countermeasures: the detection and tolerance families, the worked card-design selection with pricing, and the stack closing.",
                marks: 14,
                outline: [
                  "Detection: duplicates, invariants, timeline, sensors",
                  "Tolerance: TMR, algorithmic redundancy",
                  "Protocol: invalidation, rate limiting",
                  "Worked card: 1.05x double-compute + sensors",
                  "Pricing: 1.2-1.4x area, 2x cycles",
                  "Coverage: 99% glitch class; laser vs mesh",
                  "Stack sentence",
                ],
              },
              {
                q: "How does rate limiting defeat re-injection campaigns?",
                marks: 7,
                outline: [
                  "DFA needs multiple faulted executions",
                  "Repeated fault-triggered failures lock the card",
                  "The campaign ends before the differential set completes",
                  "Unlocks require legitimate re-enablement",
                  "Attack economics collapse to one shot",
                ],
              },
            ],
          },
          {
            number: "4.5",
            title: "Verification of finite-field arithmetic circuits",
            body: [
              "Verification asks whether the shipped circuit computes the specified mathematics - and the syllabus's named scope is finite-field arithmetic. The techniques: algebraic verification (prove the multiplier satisfies the field identity for symbolic inputs - the distributivity identity a*(b+c) = a*b + a*c verified over GF(2^n) polynomials via canonical BDD/algebraic forms; the theorem: an n-bit GF(2^n) multiplier proven correct on the distributivity identity is correct for all inputs - the field's algebra does the induction), simulation with coverage (exhaustive for n <= 10, random + directed for larger), and formal equivalence checking (the optimized netlist vs the golden model - SAT/BDD-based, the industry's sign-off step).",
              "The worked algebraic proof sketch shows the technique: the GF(2^8) multiplier M(a,b) = a * b mod p(x) - verify M satisfies: M(a, M(b,c)) = M(M(a,b), c) (associativity) and M(a, b XOR c) = M(a,b) XOR M(a,c) (distributivity over the field's addition); the algebraic-form proof expands both sides as polynomials over GF(2)[x] and checks canonical equality - a decidable, tool-supported check (the Gate-Level Information Flow Tracking / algebraic-verification line of work). The numbers: an 8-bit multiplier verifies in seconds-to-minutes on a workstation; a 163-bit ECC multiplier (binary field) verifies with the same algebra but heavier polynomial machinery.",
              "The verification-vs-testing contrast completes the section: testing samples inputs (coverage estimates correctness - never proves it), verification proves all inputs (the field identity theorem), and the practical flow runs both (simulation catches implementation bugs fast; algebraic verification certifies the shipped netlist). The closing sentence: in a subject about faults and Trojans, verification is the shipped-die honesty check - the arithmetic the customer runs is the arithmetic the designer specified.",
              "Exam framing: 'Explain verification of finite-field arithmetic circuits' is a 7-14 mark staple. Give the three techniques with the algebraic-identity theorem, the worked GF(2^8) proof sketch with timing numbers, and the verification-vs-testing contrast.",
            ],
            keyTerms: [
              { term: "Algebraic verification", definition: "Proving field identities symbolically over the multiplier's polynomial form." },
              { term: "Distributivity identity", definition: "a*(b+c) = a*b + a*c - the check that certifies GF(2^n) multipliers." },
              { term: "Formal equivalence", definition: "Netlist vs golden model comparison - SAT/BDD-based sign-off." },
              { term: "Coverage", definition: "The testing estimate of correctness - sampling, not proof." },
            ],
            diagram: {
              kind: "compare",
              title: "Testing vs verification",
              caption: "Sampling estimates correctness; the field identity proves it for all inputs.",
              left: {
                heading: "Simulation + coverage",
                items: [
                  "Exhaustive only for n <= 10",
                  "Random + directed for larger n",
                  "Coverage = confidence, never proof",
                  "Fast, catches implementation bugs",
                ],
              },
              right: {
                heading: "Algebraic verification",
                items: [
                  "Field identities as the proof obligation",
                  "Canonical polynomial comparison",
                  "All inputs certified - decidable",
                  "Seconds-to-minutes for 8-bit multipliers",
                ],
              },
            },
            bullets: [
              "Techniques: algebraic identities, simulation+coverage, formal equivalence.",
              "Theorem: distributivity on GF(2^n) multiplier => correct for all inputs.",
              "Worked sketch: associativity + distributivity over GF(2)[x], canonical check.",
              "Numbers: 8-bit in seconds-minutes; 163-bit ECC heavier but same algebra.",
              "Contrast: sampling vs proof; both run in practice.",
              "Closing: shipped-die honesty check.",
            ],
            callout: {
              type: "exam",
              title: "The field does the induction",
              body: "The verification sentence: 'a GF(2^n) multiplier proven correct on the distributivity identity is correct for all inputs - the field's algebra replaces the impossible 2^2n exhaustive test.' Quote the seconds-to-minutes timing.",
            },
            table: {
              caption: "Verification techniques at a glance.",
              headers: ["Technique", "Guarantee", "Cost"],
              rows: [
                ["Exhaustive simulation", "All inputs (n <= 10)", "2^2n vectors"],
                ["Random + directed testing", "Coverage estimate", "Fast, unproven"],
                ["Formal equivalence", "Netlist = model", "SAT/BDD effort"],
                ["Algebraic identities", "All inputs, proven", "Polynomial machinery"],
              ],
            },
            examQuestions: [
              {
                q: "Explain verification of finite-field arithmetic: the three techniques, the algebraic-identity theorem with the worked GF(2^8) sketch, and the testing contrast.",
                marks: 14,
                outline: [
                  "Algebraic: field identities as proof obligations",
                  "Theorem: distributivity certifies all inputs",
                  "Worked: associativity + distributivity, canonical forms",
                  "Timings: 8-bit seconds-minutes; 163-bit heavier",
                  "Formal equivalence as sign-off",
                  "Testing's coverage estimate role",
                  "Honesty-check closing",
                ],
              },
              {
                q: "Why can the distributivity identity certify a multiplier completely?",
                marks: 7,
                outline: [
                  "GF(2^n) is generated by its field axioms",
                  "A function satisfying distributivity over the prime field is GF-linear",
                  "GF-linearity plus basis behavior fixes the function fully",
                  "Hence identity satisfaction implies correctness",
                  "The algebra replaces exponential testing",
                ],
              },
            ],
          },
          {
            number: "4.6",
            title: "Modern IC design and manufacturing flow",
            body: [
              "The modern IC flow is the supply chain's map - and its trust gaps are the subject's structural threats. The flow: RTL design (the HDL at 1.4), functional verification (simulation, formal), synthesis (RTL to gate netlist), physical design (place-and-route to GDSII), tapeout (GDSII to the foundry), fabrication (wafer fabs - often untrusted third parties), packaging and test (final test at ATE - often outsourced), and distribution. The trust gaps the syllabus highlights: the foundry sees the GDSII (the full design - cloning or Trojan insertion point), the test house sees the die (probing access), the packaging house sees both (4.6's overbuilding opportunity - extra dies produced and sold gray-market).",
              "The worked trust map prices each gap: the fab insider can insert a Trojan at layout (detected only by 4.7-style testing or 4.5-style verification of the shipped die), can overbuild (produce extra units - the IC-piracy class of Unit V), or can leak the GDSII (the netlist theft that logic locking answers); the test-house operator can probe and characterize (the side-channel profiling of Unit III done by the supply chain); the designer's countermeasures - split fabrication (design and fab separated), layout obfuscation, and post-fab activation (Unit V's PUF binding). The numbers: a 28 nm mask set costs USD 1-3M (the piracy incentive), a fab contract spans 6-18 months (the insider window), and split-fabrication adds ~10-20% design effort.",
              "The manufacturing practices' implications complete the section: horizontal specialization (fabless design + merchant fab - efficiency at trust cost), shrinkage (smaller nodes, more layers, more entry points), and the re-use/modernization of old IP (the legacy core with unknown provenance). The closing sentence: the IC flow is a chain of specialized trust - and every unit of this subject after this one is a countermeasure for one of its gaps.",
              "Exam framing: 'Explain the modern IC design and manufacturing flow and its security implications' is a 7-14 mark staple. Give the flow stages, the three trust gaps with the worked pricing, and close with the countermeasure mapping.",
            ],
            keyTerms: [
              { term: "GDSII", definition: "The final mask-layout file - the fab's full design view." },
              { term: "Tapeout", definition: "Releasing GDSII to fabrication - the trust handoff." },
              { term: "Split fabrication", definition: "Design and manufacturing separated to limit fab knowledge." },
              { term: "Fabless model", definition: "Design house + merchant fab - the modern horizontal specialization." },
            ],
            diagram: {
              kind: "pipeline",
              title: "The IC flow and its trust gaps",
              caption: "Each handoff is a trust decision - the fab sees everything.",
              stages: [
                { label: "RTL + verification", note: "designer's domain" },
                { label: "Synthesis + P&R", note: "netlist to GDSII" },
                { label: "Tapeout -> fab", note: "GAP 1: fab sees full design" },
                { label: "Fabrication", note: "GAP 2: overbuilding, Trojan insertion" },
                { label: "Packaging + test", note: "GAP 3: die-level probing access" },
              ],
            },
            bullets: [
              "Stages: RTL, verification, synthesis, P&R, tapeout, fab, packaging/test.",
              "Gap 1: fab sees GDSII - cloning/Trojan/leak entry.",
              "Gap 2: overbuilding - extra dies sold gray-market.",
              "Gap 3: test-house probing - supply-chain side-channel profiling.",
              "Numbers: mask set USD 1-3M; fab window 6-18 months; split-fab +10-20% effort.",
              "Countermeasures: split fab, obfuscation, post-fab activation (Unit V).",
            ],
            callout: {
              type: "exam",
              title: "The fab sees everything",
              body: "The flow sentence: 'the IC flow is a chain of specialized trust - and the fab's GDSII view is the widest gap in the chain.' Price the gaps (USD 1-3M masks, 6-18 month windows) and the countermeasure map follows.",
            },
            table: {
              caption: "Trust gaps and countermeasures.",
              headers: ["Gap", "Threat", "Countermeasure"],
              rows: [
                ["Fab sees GDSII", "Cloning, Trojan, leak", "Split fab, locking (Unit V)"],
                ["Fab overbuilds", "Gray-market ICs", "Post-fab activation, metering"],
                ["Test house probes", "Characterization, side channels", "Test-time protocols, shielding"],
                ["Packaging swaps", "Counterfeit dies", "Die marking, PUF binding"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the IC design and manufacturing flow: the stages, the three trust gaps with pricing, and the countermeasure mapping.",
                marks: 14,
                outline: [
                  "Flow: RTL to distribution named",
                  "Gap 1: GDSII visibility at the fab",
                  "Gap 2: overbuilding economics",
                  "Gap 3: test-house probing",
                  "Numbers: mask cost, fab window, split-fab effort",
                  "Countermeasures per gap incl. Unit V ties",
                  "Specialized-trust closing",
                ],
              },
              {
                q: "Why does the fabless model increase hardware security risk?",
                marks: 7,
                outline: [
                  "Design and manufacturing are separate companies",
                  "The fab is an economic actor, not a trusted agent",
                  "Incentives exist for overbuild and IP leakage",
                  "No contractual visibility into fab floor operations",
                  "Hence the split-fabrication and activation research",
                ],
              },
            ],
          },
          {
            number: "4.7",
            title: "Hardware Trojans and the shipped-die trust problem",
            body: [
              "The hardware Trojan is the flow's darkest gap: malicious circuitry inserted into the design or the die. The taxonomy: by trigger (always-on - the simplest, detectable by differential power; conditional - triggered by a rare input sequence or internal state; time-bomb - activates after N cycles/days), by payload (modify results - the crypto core that leaks key bits in the ciphertext's LSBs; deny service - brick on command; leak - the radio/EM channel exfiltrating secrets), and by insertion point (RTL - caught by code review and formal methods; netlist - caught by equivalence checking against golden RTL; layout/fab - caught only by the shipped-die tests of this section).",
              "The worked Trojan case shows the leak class: a Trojan flip in the AES S-box - for one specific 8-bit input (the trigger), the output flips one bit; the ciphertext's last byte leaks one key bit per chosen plaintext - 128 chosen plaintexts recover an AES-128 key with a footprint of one extra XOR gate (~20 LUTs). The numbers: the trigger probability is 1/256 per byte (invisible in functional testing's random vectors), the payload is functionally invisible without chosen-plaintext comparison against a golden die, and the detection challenge is exactly why the syllabus pairs Trojans with testability.",
              "The detection approaches complete the section: side-channel fingerprinting (chip power fingerprints compared against golden-chip statistics - the SVM classifier of 1.6 in its defensive role), logical testing with rare-trigger excitation (generate inputs maximizing trigger probability - the MERO-class test-generation problem), structural comparison (reverse-engineer the die and diff against GDSII - expensive, invasive), and run-time detection (on-chip monitors - the 4.4 sensors). The closing sentence: the Trojan is the flow's insiders-only threat - and the shipped die is tested not because the designer distrusts himself but because the fab is an economic actor.",
              "Exam framing: 'Explain hardware Trojans and their detection' is the unit's 14-mark synthesis. Give the trigger/payload/insertion taxonomy, work the S-box leak Trojan with its 128-plaintext numbers, and survey the detection approaches.",
            ],
            keyTerms: [
              { term: "Trigger", definition: "The rare condition activating the Trojan (input, state, time)." },
              { term: "Payload", definition: "The malicious effect: leak, modify, deny." },
              { term: "Golden chip", definition: "The trusted reference die for differential comparison." },
              { term: "Rare-trigger excitation", definition: "Test generation maximizing trigger probability." },
            ],
            diagram: {
              kind: "fork",
              title: "Trojan detection approaches",
              caption: "Power fingerprints, rare-trigger tests, structural diffs - each catches a different insertion point.",
              start: "Suspected Trojan in shipped die",
              branches: [
                { label: "Side-channel fingerprint", outcome: "SVM on power features vs golden chips - catches always-on and most conditional", good: true },
                { label: "Rare-trigger testing", outcome: "generated vectors excite conditional triggers", good: true },
                { label: "Structural reverse-engineering", outcome: "die diff vs GDSII - definitive, expensive, destructive", good: true },
                { label: "Random functional testing", outcome: "1/256 triggers evade it - the failed approach", good: false },
              ],
            },
            bullets: [
              "Taxonomy: triggers (always-on, conditional, time-bomb), payloads (leak, modify, deny), insertion points (RTL, netlist, fab).",
              "Worked S-box Trojan: 1/256 trigger, one flipped bit, 128 chosen plaintexts -> AES key, ~20 LUT footprint.",
              "Random testing misses 1/256 triggers by construction.",
              "Detection: SVM power fingerprints, rare-trigger excitation, structural diffs, run-time monitors.",
              "Insertion point decides the catching method.",
              "Closing: the fab is an economic actor - hence shipped-die testing.",
            ],
            callout: {
              type: "exam",
              title: "One XOR, one bit, one key",
              body: "The Trojan sentence: 'a single flipped S-box bit leaks one key bit per chosen plaintext - 128 plaintexts, ~20 LUTs of footprint, no functional-test visibility.' The 1/256 trigger probability is why random testing fails and rare-trigger generation exists.",
            },
            table: {
              caption: "Trojan classes and detection fit.",
              headers: ["Class", "Example", "Best detection"],
              rows: [
                ["Always-on payload", "Extra leakage path", "Side-channel fingerprinting"],
                ["Conditional trigger", "Specific 8-bit input", "Rare-trigger excitation"],
                ["Time-bomb", "Activates after N cycles", "Accelerated aging + monitors"],
                ["RTL-level", "Backdoor in HDL", "Code review + formal methods"],
              ],
            },
            examQuestions: [
              {
                q: "Explain hardware Trojans: the taxonomy by trigger, payload and insertion point, the worked S-box leak case with numbers, and the detection approaches.",
                marks: 14,
                outline: [
                  "Trigger classes: always-on, conditional, time-bomb",
                  "Payload classes: leak, modify, deny",
                  "Insertion points: RTL, netlist, fab",
                  "Worked: 1/256 trigger, 128 chosen plaintexts, 20 LUTs",
                  "Random testing's 1/256 blindness",
                  "Detection: SVM fingerprints, rare-trigger tests, diffs",
                  "Economic-actor closing",
                ],
              },
              {
                q: "Why does the S-box-flip Trojan evade functional testing?",
                marks: 7,
                outline: [
                  "Trigger needs one specific byte value",
                  "Random vectors hit it with probability 1/256 each",
                  "Thousands of vectors still miss with high probability",
                  "Output differs only on that trigger",
                  "Rare-trigger generation targets exactly such predicates",
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
      title: "IP Piracy, PUF-Based Defence and Model-Building Attacks",
      summary:
        "Unit V closes the piracy war: hardware IP and IC piracy classes, watermarking and logic locking, PUF-based hardware locking, and the model-building attacks - SVM modelling of arbiter PUFs and genetic-programming modelling of ring-oscillator PUFs - with the defences that raise their cost.",
      chapter: {
        number: "05",
        title: "The Piracy War",
        intro:
          "Unit V covers hardware IP and IC piracy, design techniques to prevent piracy, using PUFs to prevent hardware piracy, and model-building attacks on PUFs - the SVM modelling of arbiter PUFs and genetic-programming modelling of ring-oscillator PUFs - with defences.",
        inOneBreath:
          "Piracy takes four forms: cloning (copy the netlist), overbuilding (the fab makes extra dies), tampering (modify the shipped die), and counterfeiting (rebrand). Defences: watermarking (embedded proof of ownership), logic locking (key-gates making the netlist function only with the right key), and PUF-based activation (the netlist partially keyed by the chip's own silicon - clones are functionally dead). Model-building attacks answer locking's challenge: the arbiter PUF's additive delay model is linear, so an SVM trained on ~50k-100k CRPs predicts unseen challenges at >99%; genetic programming symbolically regresses RO PUF pair rankings. Defences against model-building: XOR obfuscation of arbiter stages, feed-forward nonlinearity, and challenge obfuscation - raising the attack from linear to intractable.",
        sections: [
          {
            number: "5.1",
            title: "Hardware IP piracy and IC piracy",
            body: [
              "The piracy taxonomy the syllabus names: hardware IP piracy (the stolen or re-sold RTL/netlist used in someone else's product), IC piracy (the overbuilt or cloned chips - Unit 4.6's fab producing extra dies and selling them gray-market), counterfeiting (rebranded or remarked chips passing as genuine), and tampering (the modified shipped die). The economics: a 28 nm mask set costs USD 1-3M (the design's fixed cost - the pirate skips it), a fab contract spans months (the overbuild window), and a cloned netlist reproduces the product at marginal cost - the incentive structure that makes piracy a business, not a prank. The worked piracy case: a fab overbuilds 50k extra dies of a payment-card chip (per 4.6's window) - the ICs are genuine silicon with genuine security, just unauthorized; the only defence is making them non-functional without activation (Unit 5.3).",
              "The attack-chain framing: piracy needs (a) access to the design (netlist theft, GDSII leak, reverse engineering), (b) manufacturing capability (the fab or a partner fab), and (c) distribution (the gray market) - and each link has a countermeasure: (a) locking and watermarking, (b) metering and activation, (c) detection and legal enforcement. The worked numbers: reverse engineering a 28 nm die costs USD 100k-1M and months (the copying-without-design path), versus netlist theft at near-zero cost - the thief picks the cheapest link, and the defender prices every link.",
              "The trust economics complete the section: every participant in 4.6's flow (fab, test, packaging) can pirate, and the design house's legal remedies (contracts, patents) work only against identifiable entities in enforceable jurisdictions - the technical countermeasures (locking, activation, metering) are what survive jurisdiction-shopping. The closing sentence: piracy is an incentive problem wearing a technical costume - the defences work by breaking the economics: an unlocked clone costs the same as the original, and a locked one costs more than designing it.",
              "Exam framing: 'Explain hardware IP and IC piracy' is a 7-14 mark opener. Give the four-form taxonomy with the worked overbuild case, the three-link attack chain with per-link countermeasures, and close with the economics sentence.",
            ],
            keyTerms: [
              { term: "IP piracy", definition: "Unauthorized reuse of RTL/netlist in another product." },
              { term: "IC overbuilding", definition: "Fab producing more dies than contracted, sold gray-market." },
              { term: "Metering", definition: "Recording and reporting chip usage to detect overbuild." },
              { term: "Gray market", definition: "The unauthorized distribution channel for genuine-but-unlicensed ICs." },
            ],
            diagram: {
              kind: "fork",
              title: "The piracy attack chain",
              caption: "Three links, three countermeasures - the thief picks the cheapest link.",
              start: "Piracy attempt",
              branches: [
                { label: "Design access", outcome: "netlist theft / GDSII leak / RE -> locking, watermarking, split fab", good: false },
                { label: "Manufacturing", outcome: "overbuild, clone fab -> metering, activation (5.3)", good: false },
                { label: "Distribution", outcome: "gray market -> detection, legal enforcement", good: false },
                { label: "Defended design", outcome: "clone costs >= original design - economics broken", good: true },
              ],
            },
            bullets: [
              "Four forms: IP piracy, IC piracy, counterfeiting, tampering.",
              "Economics: masks USD 1-3M skipped; RE path USD 100k-1M; netlist theft ~free.",
              "Worked overbuild: 50k genuine-but-unauthorized dies in the fab window.",
              "Chain: design access -> manufacturing -> distribution, each countered.",
              "Legal remedies fail against jurisdiction shopping.",
              "Closing: break the economics - locked clones cost more than designing.",
            ],
            callout: {
              type: "exam",
              title: "Genuine but unauthorized",
              body: "The piracy sentence: 'overbuilt dies are genuine silicon with genuine security - the only defence is making them non-functional without activation.' It links 4.6's flow directly to 5.3's PUF defence.",
            },
            table: {
              caption: "Piracy forms and their economics.",
              headers: ["Form", "Cost to pirate", "Primary defence"],
              rows: [
                ["IP piracy", "~0 (netlist theft)", "Logic locking, watermarking"],
                ["IC cloning", "RE: USD 100k-1M", "Split fab, activation"],
                ["Overbuilding", "~0 for the fab", "Metering, PUF activation"],
                ["Counterfeiting", "Low", "Die marking, authentication"],
              ],
            },
            examQuestions: [
              {
                q: "Explain hardware IP and IC piracy: the four-form taxonomy, the worked overbuild case, the three-link chain with countermeasures, and the economics closing.",
                marks: 14,
                outline: [
                  "Forms: IP piracy, IC piracy, counterfeiting, tampering",
                  "Cost structure: masks skipped, RE path priced",
                  "Overbuild: 50k genuine-unauthorized dies",
                  "Chain links and per-link defences",
                  "Legal limits across jurisdictions",
                  "Economics-breaking as the design goal",
                ],
              },
              {
                q: "Why is netlist theft cheaper than die reverse engineering?",
                marks: 7,
                outline: [
                  "Netlist: a file copy, near-zero cost",
                  "RE: decap, delayer, imaging, months of work",
                  "Both yield the design; the thief takes the cheap link",
                  "Defences must therefore cover the file path too",
                  "Hence locking + watermarking + controlled distribution",
                ],
              },
            ],
          },
          {
            number: "5.2",
            title: "Design techniques to prevent IP and IC piracy",
            body: [
              "The defensive techniques divide into evidentiary (proving ownership after the fact) and preventing (making piracy functionally fail). Watermarking: embed a signature in the design (a combinational watermark - extra gates encoding the designer's bits, verified by a proof-of-ownership protocol; a constraint-based watermark - the design's optimization constraints encode the signature); fingerprinting: embed per-customer identifiers (each shipped design instance carries its buyer's mark - the leak-tracing capability). The worked watermark numbers: a combinational watermark adds ~2-5% area, survives synthesis optimizations if constraint-embedded, and proves ownership with high probability (the false-positive probability of finding the signature by chance is ~2^-k for k watermark bits).",
              "Logic locking (EPIC-lineage): insert key gates (XOR/XNOR trees) into the netlist so the circuit functions correctly only under the correct key value - the stolen netlist without the key produces wrong outputs for most inputs. The worked mechanism: an XOR key gate at a signal node - key bit 0 preserves the signal, key bit 1 inverts it; a locked netlist with k key bits has 2^k functional variants, only one correct - the pirate's clone is a random-function generator. The numbers: k = 64 key gates = 2^64 variants; key storage in non-volatile memory or derived from a PUF (5.3); the locking overhead runs 2-10% area.",
              "Metering and activation complete the set: passive metering (the chip records its usage - the overbuild evidence), active metering (the chip reports to the owner), and post-fabrication activation (the die is functionally incomplete until the owner's activation - typically PUF-based, Unit 5.3). The closing sentence: the technique set answers the three links of 5.1 - watermarking proves, locking prevents, metering detects, and activation makes every defence physical.",
              "Exam framing: 'Explain design techniques against IP and IC piracy' is a 7-14 mark staple. Give watermarking/fingerprinting and logic locking with worked numbers, and the metering/activation layer.",
            ],
            keyTerms: [
              { term: "Combinational watermark", definition: "Signature gates verified by a proof-of-ownership protocol." },
              { term: "Logic locking (key gates)", definition: "XOR/XNOR gates making the netlist function only under the correct key." },
              { term: "2^k variants", definition: "k key gates give that many functional variants - one correct." },
              { term: "Active metering", definition: "Chips reporting usage to the design owner." },
            ],
            diagram: {
              kind: "compare",
              title: "Evidentiary vs preventing defences",
              caption: "Watermarks prove after the fact; locking makes the clone fail before it.",
              left: {
                heading: "Evidentiary (watermark/fingerprint)",
                items: [
                  "Signature in gates or constraints",
                  "~2-5% area overhead",
                  "Ownership provable with 2^-k false positive",
                  "Fingerprints trace the leaked copy",
                ],
              },
              right: {
                heading: "Preventing (locking)",
                items: [
                  "XOR/XNOR key gates in the netlist",
                  "2^64 variants, one correct",
                  "2-10% area overhead",
                  "Stolen netlist outputs garbage",
                ],
              },
            },
            bullets: [
              "Watermarking: combinational and constraint-based; false-positive 2^-k.",
              "Fingerprinting: per-customer marks enabling leak tracing.",
              "Logic locking: key gates, 2^k variants, 2-10% overhead.",
              "Metering: passive (records) and active (reports).",
              "Activation: post-fab functional completion - PUF-based in 5.3.",
              "Closing: prove, prevent, detect, activate.",
            ],
            callout: {
              type: "exam",
              title: "The locked clone is a random-function generator",
              body: "The locking sentence: 'with k key gates the stolen netlist has 2^k functional variants and the pirate holds none of the keys - the clone outputs garbage on most inputs.' The 2^64 number is the exam's arithmetic.",
            },
            table: {
              caption: "Anti-piracy techniques compared.",
              headers: ["Technique", "Overhead", "Answers"],
              rows: [
                ["Combinational watermark", "~2-5% area", "Ownership proof"],
                ["Fingerprinting", "~2-5% area", "Leak tracing"],
                ["Logic locking", "2-10% area", "Functional prevention"],
                ["Metering", "Small logic", "Overbuild detection"],
                ["PUF activation (5.3)", "PUF + logic", "Physical prevention"],
              ],
            },
            examQuestions: [
              {
                q: "Explain anti-piracy design techniques: watermarking and fingerprinting, logic locking with 2^k arithmetic, and the metering/activation layer.",
                marks: 14,
                outline: [
                  "Watermark forms and 2^-k false-positive math",
                  "Fingerprint per-customer tracing",
                  "Locking: key gates, variants, overhead",
                  "Key storage: NVM vs PUF derivation",
                  "Metering passive vs active",
                  "Activation as physical completion",
                  "Prove-prevent-detect-activate closing",
                ],
              },
              {
                q: "Why does constraint-based watermarking survive synthesis better than gate-level watermarking?",
                marks: 7,
                outline: [
                  "Constraints guide optimization choices internally",
                  "The signature rides the solution, not extra gates",
                  "Gate-level marks are pruned as 'dead logic' sometimes",
                  "Constraint marks are invisible in the netlist shape",
                  "Trade-off: harder to verify externally",
                ],
              },
            ],
          },
          {
            number: "5.3",
            title: "Using PUFs to prevent hardware piracy",
            body: [
              "PUF-based activation is the physical completion of 5.2's locking: the netlist's key gates are fed by the chip's own PUF - the design functions only on dies whose PUF responses match the enrollment. The mechanics: during manufacturing, the design house enrolls each legitimate die's PUF responses (the 2.6 fuzzy-extractor helper data stored on-chip or in a secure server); at power-up, the PUF derives its response, the fuzzy extractor reconstructs the key, and the key gates open - a cloned netlist loaded into a different die produces a different PUF response, hence a different key, hence garbage outputs. The worked flow: k = 128-bit PUF-derived key, helper data 116 bits on-die (encrypted), the boot sequence reads PUF -> reconstructs -> unlocks -> the design runs; an overbuilt die outside enrollment produces a key with ~64 wrong bits - functional death.",
              "The worked numbers show why it works: a 128-bit PUF response differs between two dies in ~50% of bits (the 2.5 uniqueness metric) - the clone's derived key matches the enrolled key with probability 2^-128; the enrollment database holds only legitimate dies; the fab's overbuilt units are enrolled-never. The economics: the pirate's clone needs the PUF helper data AND the enrollment record - the helper data on-die is encrypted, and the enrollment record stays with the design house; the gray-market die remains a brick.",
              "The design considerations complete the section: PUF choice (RO/identity-class PUFs for stability - the modelable arbiter needs the XOR obfuscation of 5.5), helper-data storage (on-die encrypted vs server-side - the threat model picks), aging compensation (re-enrollment or robust ECC - silicon drifts), and the fallback protocol (a challenge-response activation channel for re-provisioning). The closing sentence: PUF activation fuses the chip's identity with its functionality - the pirate can copy the design, but cannot copy the silicon that unlocks it.",
              "Exam framing: 'Explain PUF-based prevention of hardware piracy' is a 7-14 mark staple. Give the enrollment-to-activation mechanics with the 128-bit/2^-128 arithmetic, the economics of the brick, and the design considerations.",
            ],
            keyTerms: [
              { term: "PUF activation", definition: "Key gates fed by the die's own PUF - enrollment-required function." },
              { term: "Enrollment record", definition: "The design house's database of legitimate PUF responses." },
              { term: "Functional death", definition: "Clone dies derive wrong keys and output garbage." },
              { term: "Re-provisioning", definition: "The challenge-response fallback for legitimate re-activation." },
            ],
            diagram: {
              kind: "pipeline",
              title: "PUF-activated boot: enrollment to unlock",
              caption: "PUF -> fuzzy extractor -> key gates open - only enrolled dies boot functional.",
              stages: [
                { label: "Enrollment (fab)", note: "legitimate dies' PUF responses recorded" },
                { label: "Power-up", note: "PUF response read from silicon" },
                { label: "Fuzzy extractor", note: "helper data -> stable 128-bit key" },
                { label: "Key gates open", note: "design functional" },
                { label: "Unenrolled die", note: "~64 wrong bits -> garbage outputs" },
              ],
            },
            bullets: [
              "Mechanics: enrollment -> PUF read -> reconstruction -> unlock.",
              "Worked: 128-bit responses; clone match probability 2^-128.",
              "Overbuilt dies: enrolled-never = brick.",
              "Economics: helper data encrypted on-die; enrollment record off-die.",
              "Design: identity-class PUFs preferred; aging compensation; fallback protocol.",
              "Closing: copy the design, not the silicon that unlocks it.",
            ],
            callout: {
              type: "exam",
              title: "The pirate needs the enrollment record",
              body: "The activation sentence: 'the helper data is on the die, but the enrollment record stays with the design house - the gray-market die remains a brick.' The 2^-128 match probability is the arithmetic that ends the economics argument.",
            },
            table: {
              caption: "PUF activation design choices.",
              headers: ["Choice", "Option A", "Option B"],
              rows: [
                ["PUF class", "RO/identity (stable)", "Arbiter + XOR (5.5)"],
                ["Helper data", "On-die encrypted", "Server-side (needs network)"],
                ["Aging", "Robust ECC", "Re-enrollment protocol"],
                ["Fallback", "Challenge-response activation", "Physical re-touch"],
              ],
            },
            examQuestions: [
              {
                q: "Explain PUF-based hardware piracy prevention: the enrollment-to-activation mechanics, the 2^-128 arithmetic, the brick economics, and the design considerations.",
                marks: 14,
                outline: [
                  "Flow: enroll -> PUF -> fuzzy extractor -> unlock",
                  "128-bit uniqueness -> 2^-128 clone match",
                  "Overbuilt dies never enrolled",
                  "Helper data vs enrollment record split",
                  "PUF class choice incl. arbiter caveat",
                  "Aging and fallback protocols",
                  "Silicon-unlock closing",
                ],
              },
              {
                q: "Why should activation use an identity-class PUF rather than a raw arbiter PUF?",
                marks: 7,
                outline: [
                  "Arbiter is linear-modelable (Unit 5.5 attack)",
                  "An attacker could derive the key model from CRPs",
                  "Identity PUFs expose no CRP interface",
                  "Or arbiter + XOR obfuscation breaks linearity",
                  "Activation security inherits PUF security",
                ],
              },
            ],
          },
          {
            number: "5.4",
            title: "Model-building attacks on PUFs",
            body: [
              "The model-building attack is the machine-learning counter-offensive against CRP-rich PUFs: collect challenge-response pairs, train a model of the PUF's physics, and predict unseen challenges - the authentication protocol collapses once its responses become predictable. The attack surface rule: any PUF whose response is a smooth, learnable function of the challenge is attackable; the arbiter PUF's additive delay model (2.4's sign(sum w_i phi_i)) is linear in engineered features - the textbook case. The workflow: collect N CRPs (chosen or random challenges), engineer features (the phi vector - each challenge bit-expanded to a ±1 parity vector with the constant term), train (SVM or logistic regression), and predict held-out challenges - reporting the prediction accuracy as the attack's success metric.",
              "The worked numbers for the arbiter PUF: a 64-stage arbiter PUF modelled by linear SVM/logistic regression needs ~18k CRPs for 99% prediction on unseen 64-bit challenges, ~50k-100k CRPs for 99.99% (the reliability threshold for authentication forgery); the training takes seconds-to-minutes on a laptop - the attack is practical, not theoretical. The noise caveat: real PUFs add ~5% response noise (2.5's reliability), which caps clean-model accuracy - the attacker's answer is majority voting across repeated challenges (the protocol sends the same challenge k times; the model predicts the majority) and reliability-aware training.",
              "The general rule completes the section: modelability is a design property - linear additive models fall, nonlinear compositions resist - and the PUF designer's job is knowing where their PUF sits on the learnability spectrum (the arbiter at the linear end, the RO PUF at the identity end, XOR-composed arbiters pushed toward nonlinearity with the cost trade of 5.5). The closing sentence: model-building attacks convert PUF security from a physics claim into a learning-theory claim - the defence is physics the machine cannot fit within the protocol's CRP budget.",
              "Exam framing: 'Explain model-building attacks on PUFs' is a 7-14 mark staple. Give the workflow with the feature-engineering step, the arbiter's worked numbers (18k/50k-100k CRPs), the noise caveat with majority voting, and the learnability rule.",
            ],
            keyTerms: [
              { term: "Model-building attack", definition: "Train on CRPs, predict unseen challenges - authentication collapse." },
              { term: "Feature engineering (phi)", definition: "Challenge-to-parity-vector mapping exposing the linear model." },
              { term: "Reliability-aware training", definition: "Accounting for PUF noise in the learned model." },
              { term: "Learnability spectrum", definition: "Linear (arbiter) to nonlinear (XOR-composed) PUF physics." },
            ],
            diagram: {
              kind: "pipeline",
              title: "The model-building workflow",
              caption: "Collect CRPs, engineer phi features, train, predict - authentication collapses at 99.99%.",
              stages: [
                { label: "Collect CRPs", note: "18k for 99%; 50k-100k for 99.99%" },
                { label: "Engineer features", note: "phi(c): parity expansion + constant" },
                { label: "Train", note: "SVM / logistic regression - seconds on a laptop" },
                { label: "Predict", note: "held-out challenges, accuracy reported" },
                { label: "Handle noise", note: "majority vote over repeated challenges" },
              ],
            },
            bullets: [
              "Rule: smooth learnable response functions are attackable.",
              "Arbiter's additive model is linear in phi features - textbook case.",
              "Worked: 18k CRPs -> 99%; 50k-100k -> 99.99%; minutes to train.",
              "Noise cap ~5% - answered by majority voting over repeats.",
              "Spectrum: arbiter (linear) -> XOR-composed (nonlinear) -> RO (identity).",
              "Closing: physics claim becomes learning-theory claim.",
            ],
            callout: {
              type: "exam",
              title: "99.99% is forgery",
              body: "The attack sentence: 'at 99.99% prediction the attacker answers authentication challenges better than the chip's own noise allows rejection - the protocol collapses.' The 18k-to-100k CRP ladder is the exam's arithmetic.",
            },
            table: {
              caption: "Arbiter PUF attack economics.",
              headers: ["Goal", "CRPs needed", "Training"],
              rows: [
                ["99% prediction", "~18k", "Seconds (linear SVM)"],
                ["99.99% (forgery-grade)", "50k-100k", "Minutes"],
                ["Noise handling", "k repeats per challenge", "Majority vote"],
                ["64-stage, 64-bit", "2^64 space sampled sparsely", "Model generalizes"],
              ],
            },
            examQuestions: [
              {
                q: "Explain model-building attacks on PUFs: the workflow with feature engineering, the arbiter's worked numbers, the noise handling, and the learnability rule.",
                marks: 14,
                outline: [
                  "Collect -> engineer -> train -> predict workflow",
                  "phi parity expansion exposing linearity",
                  "18k/50k-100k CRP ladder with accuracies",
                  "5% noise cap and majority voting",
                  "Learnability spectrum across PUF classes",
                  "Authentication-collapse consequence",
                  "Learning-theory closing",
                ],
              },
              {
                q: "Why does majority voting over repeated challenges defeat PUF noise but not the model?",
                marks: 7,
                outline: [
                  "Noise is zero-mean across repeats - majority recovers the true bit",
                  "The model predicts the noiseless underlying function",
                  "Voting helps attacker and verifier equally",
                  "Protocols cannot out-vote a correct model",
                  "Hence the fix must be physical nonlinearity",
                ],
              },
            ],
          },
          {
            number: "5.5",
            title: "Case study: SVM modelling of the arbiter PUF",
            body: [
              "The case study runs 1.6's SVM against 2.4's arbiter PUF. The feature engineering is the attack's heart: the additive delay model writes the response as sign(sum_{i=1}^{64} w_i * phi_i(c)), where phi_i(c) = product of ±1-transformed challenge bits - a 65-dimensional parity feature vector (including the constant 1); the stage weights w_i are the chip's fixed secret, and the SVM's learned hyperplane estimates exactly those weights. The worked training run: 50,000 random 64-bit challenges collected from the PUF simulation (with 5% reliability noise), features computed, a linear SVM trained with C = 10 - training completes in ~40 seconds; held-out accuracy on 10,000 unseen challenges: 99.2% raw, 99.9% after majority-voting 5 repeats.",
              "The worked interpretation connects the mathematics: the learned hyperplane's weights (normalized) recover the stage-delay differences to within the noise floor - the attack is not merely predicting; it is reverse-engineering the physical secret (the w_i) - which is why XOR obfuscation (XORing k arbiter PUF outputs) works: the composed function becomes the product of k sign-computations, nonlinear in the single-PUF features, and the linear SVM's accuracy collapses from 99% to ~60-70% (near-random) - the defender's nonlinearity purchase, priced at k x arbiter area.",
              "The sensitivity analysis completes the case: accuracy vs CRPs (the 18k/50k ladder of 5.4), accuracy vs XOR width (k = 1: 99%; k = 4: ~70%; k = 8: ~55%), and accuracy vs reliability noise (5% noise caps raw accuracy at ~95% without voting - the majority-vote fix). The closing sentence: the case study's lesson is symmetry - the SVM that classifies chips in 1.6 dissects them here, and the defender's answer is to break the linearity the SVM feeds on.",
              "Exam framing: 'Describe the SVM modelling attack on the arbiter PUF' is the syllabus's named case study - a 14-mark centrepiece. Work the phi feature engineering, the 50k-CRP training run with its accuracies, the XOR-defence collapse numbers, and the symmetry lesson.",
            ],
            keyTerms: [
              { term: "phi feature vector", definition: "65-dim parity expansion of the challenge - the SVM's input." },
              { term: "XOR obfuscation", definition: "XOR of k arbiter outputs - nonlinearity purchased with k x area." },
              { term: "Stage weights w_i", definition: "The chip's delay secrets the hyperplane recovers." },
              { term: "Majority voting", definition: "k repeats per challenge - noise removed, model preserved." },
            ],
            diagram: {
              kind: "pipeline",
              title: "The SVM attack run, end to end",
              caption: "50k CRPs -> phi features -> linear SVM -> 99.9% with voting - in 40 seconds.",
              stages: [
                { label: "Collect CRPs", note: "50,000 random 64-bit challenges" },
                { label: "Engineer phi", note: "65-dim parity vector per challenge" },
                { label: "Train", note: "linear SVM, C=10 - ~40 s on a laptop" },
                { label: "Evaluate", note: "99.2% raw; 99.9% with 5-repeat voting" },
                { label: "Extract", note: "hyperplane weights ~ stage delays w_i" },
              ],
            },
            bullets: [
              "Feature engineering: phi_i(c) parity products; 65 dimensions incl. constant.",
              "Worked run: 50k CRPs, C = 10, 40 seconds, 99.2% raw / 99.9% voted.",
              "Interpretation: weights recover the physical w_i - reverse engineering.",
              "XOR defence: k = 4 drops accuracy to ~70%; k = 8 to ~55%.",
              "Noise sensitivity: 5% noise caps raw accuracy; voting restores.",
              "Symmetry lesson: same SVM defends (1.6) and dissects (here).",
            ],
            callout: {
              type: "exam",
              title: "The hyperplane is the chip's secret",
              body: "The case-study sentence: 'the learned hyperplane's normalized weights recover the stage-delay differences - the attack reverse-engineers the physics, not just the responses.' The XOR-collapse ladder (99 -> 70 -> 55%) is the defence's price tag.",
            },
            codeExample: {
              language: "python",
              caption: "puf_svm.py - the case study in 20 lines",
              code: `import numpy as np
from sklearn.svm import SVC
from sklearn.metrics import accuracy_score

def phi(c):                     # 64-stage parity features
    c01 = 2*np.array(c, dtype=np.int8) - 1
    feats = [1]
    for i in range(64):
        feats.append(np.prod(c01[i:] * (-1) if False else c01[i:]))
    # simplified: real phi_i = prod of transformed bits up to stage i
    return np.array(feats[:65])

# 50k CRPs from the (simulated) arbiter PUF, 5% noise
X = np.array([phi(c) for c in challenges])
y = np.array(responses)         # +1/-1

clf = SVC(kernel="linear", C=10).fit(X[:40000], y[:40000])
acc = accuracy_score(y[40000:], clf.predict(X[40000:]))
print(f"raw accuracy: {acc:.3f}")        # ~0.992`,
            },
            examQuestions: [
              {
                q: "Describe the SVM modelling attack on the arbiter PUF: the phi feature engineering, the worked training run with accuracies, the XOR-defence collapse, and the symmetry lesson.",
                marks: 14,
                outline: [
                  "Additive model recap: sign(sum w_i phi_i)",
                  "phi vector: parity products, 65 dims",
                  "Worked: 50k CRPs, C=10, 40 s, 99.2/99.9%",
                  "Hyperplane weights recover stage delays",
                  "XOR defence: 99/70/55% ladder at k = 1/4/8",
                  "Noise cap and majority voting",
                  "Defend-vs-dissect symmetry",
                ],
              },
              {
                q: "Why does XOR-ing four arbiter PUFs collapse the linear attack?",
                marks: 7,
                outline: [
                  "XOR of sign functions is nonlinear in single-PUF features",
                  "No linear hyperplane separates the composed labels",
                  "Linear SVM degrades toward chance (~70% at k=4)",
                  "Recovery needs nonlinear models and far more CRPs",
                  "The defender trades area for learnability",
                ],
              },
            ],
          },
          {
            number: "5.6",
            title: "Case study: genetic-programming modelling of the RO PUF",
            body: [
              "The RO PUF resists linear modelling (5.4's spectrum), and the genetic-programming (GP) attack is the adaptive answer: symbolic regression that evolves mathematical expressions fitting the observed pair rankings. The mechanics: GP evolves a population of candidate expressions (tree-structured formulas over the oscillator frequencies f_1..f_N and arithmetic operators), scores each by fit to the training rankings, selects and mutates the fittest, and after generations the best expression predicts pair orderings for held-out oscillator pairs - the evolved formula IS the chip's frequency model compressed into one expression.",
              "The worked setup-and-result shows the reach: 16 oscillators, 120 pairwise comparisons, 100 known from the training set - GP evolves expressions over {f_i, +, -, *, /, exp} with population 500 over 50 generations; the best expression ranks the 20 held-out pairs with ~85-90% accuracy (vs ~50% for linear regression on raw frequencies) - the nonlinear relations (frequency differences interacting with temperature proxies) that linear models miss are captured by the evolved tree. The numbers: GP needs no feature engineering (the evolution searches the formula space), runs hours (not seconds - the cost of adaptivity), and generalizes from 100 to 120 pairs - the small-data regime where SVM feature engineering struggles.",
              "The comparison and the defences complete the case: GP vs SVM - SVM needs engineered features and excels on linear physics; GP needs none and climbs nonlinear physics at computational cost; the RO PUF's residual defence is pair selection (2.6's stable pairs remove the informative-but-noisy comparisons) and temperature/hardware obfuscation (varying the comparison set per session). The closing sentence: the GP case study generalizes 5.4's rule - the attack adapts to the physics, so the defence must make the physics expensive to express, not merely nonlinear.",
              "Exam framing: 'Describe genetic-programming modelling of the RO PUF' is a 7-14 mark staple. Give the symbolic-regression mechanics with the evolved-expression form, the worked 16-oscillator/120-pair numbers, and the SVM-vs-GP comparison with defences.",
            ],
            keyTerms: [
              { term: "Symbolic regression", definition: "Evolving mathematical expressions fitting observed data." },
              { term: "GP tree", definition: "The expression representation - operators and leaves as nodes." },
              { term: "Fitness by ranking", definition: "Scoring candidates on pair-ordering accuracy." },
              { term: "Pair selection", definition: "2.6's stable-pair filtering - also a GP defence." },
            ],
            diagram: {
              kind: "compare",
              title: "SVM vs GP on PUF modelling",
              caption: "Engineered features vs evolved expressions - linear physics vs nonlinear physics.",
              left: {
                heading: "SVM (arbiter case)",
                items: [
                  "Needs phi feature engineering",
                  "Seconds to train",
                  "Dominates linear physics (99%)",
                  "Collapses on XOR nonlinearity",
                ],
              },
              right: {
                heading: "GP (RO case)",
                items: [
                  "No feature engineering - evolves formulas",
                  "Hours to converge",
                  "Handles nonlinear relations: ~85-90%",
                  "Defeated by stable-pair selection",
                ],
              },
            },
            bullets: [
              "GP mechanics: population of trees, fitness on rankings, mutation breeding.",
              "Worked: 16 oscillators, 120 pairs, 100 training; held-out ~85-90%.",
              "Operators: {f_i, +, -, *, /, exp}; population 500, 50 generations.",
              "Cost: hours vs SVM's seconds - adaptivity's price.",
              "Comparison: SVM excels linear+engineered; GP climbs nonlinear+unengineered.",
              "Defences: stable-pair selection, per-session comparison sets.",
            ],
            callout: {
              type: "exam",
              title: "The attack adapts to the physics",
              body: "The GP sentence: 'the attack adapts to the physics - the defence must make the physics expensive to express, not merely nonlinear.' The 85-90% held-out accuracy from 100 pairs is the small-data result examiners quote.",
            },
            table: {
              caption: "The GP attack run.",
              headers: ["Parameter", "Value", "Note"],
              rows: [
                ["Oscillators", "16", "120 pairwise comparisons"],
                ["Training pairs", "100", "Held-out 20"],
                ["Population / generations", "500 / 50", "Typical GP budget"],
                ["Held-out accuracy", "~85-90%", "vs ~50% linear regression"],
                ["Runtime", "Hours", "vs SVM's seconds"],
              ],
            },
            examQuestions: [
              {
                q: "Describe GP modelling of the RO PUF: the symbolic-regression mechanics, the worked 16-oscillator numbers, and the SVM-vs-GP comparison with defences.",
                marks: 14,
                outline: [
                  "GP: evolving expressions over frequencies and operators",
                  "Fitness: pair-ranking accuracy",
                  "Worked: 120 pairs, 100 train, 85-90% held-out",
                  "Linear regression's ~50% baseline",
                  "Cost contrast: hours vs seconds",
                  "Defences: pair selection, session-varying sets",
                  "Expressibility-cost closing",
                ],
              },
              {
                q: "Why does stable-pair selection defend against GP attacks?",
                marks: 7,
                outline: [
                  "GP fits rankings from noisy comparisons",
                  "Flaky pairs inject inconsistent labels",
                  "Selection removes the informative-but-unstable pairs",
                  "The evolved expression generalizes worse",
                  "Same selection serves reliability and security",
                ],
              },
            ],
          },
          {
            number: "5.7",
            title: "Defences against model building and the road ahead",
            body: [
              "The unit's synthesis is the defence ladder against model building, from cheap to principled. The ladder: controlled CRP exposure (the protocol reveals few CRPs - authentication protocols that never re-ask the same challenge; the CRP budget as a security parameter), XOR obfuscation (k arbiter outputs XORed - the 5.5 collapse ladder at k x area), feed-forward nonlinearity (intermediate arbiter outputs feeding later stages - breaking the pure additive chain), challenge obfuscation (hashing the challenge before PUF input - the model must fit the hash composition), and the identity-class shift (RO/SRAM PUFs with no CRP interface at all - 5.4's spectrum end).",
              "The worked defence pricing shows the trade table: XOR-4 - 4x PUF area, attack accuracy ~70%; feed-forward - ~1.3x delay-path logic, restores nonlinearity structurally; challenge hashing - a hash core (~2-3k LUTs), breaks phi feature engineering entirely; identity PUFs - no CRP exposure but no challenge-response protocol either (the functionality trade). The security-per-area argument closes the loop with 3.4's: every defence buys attack-cost with silicon, and the designer's job is matching the purchase to the adversary profile - the CRP-budget attacker dies at controlled exposure, the ML-attacker dies at XOR-8, the nation-state attacker is the reason the road ahead exists.",
              "The road ahead completes the subject: combined defences (XOR + feed-forward + hashed challenges), the reconfigurable-PUF direction (silicon whose response mapping is re-writable), and the formal learnability analysis (proving bounds on CRPs-required for the composed function - the theoretical answer to 5.4's empirical attacks). The closing sentence: the piracy war and the model-building war are the same war at different layers - both are won by raising the attacker's cost above the value of the prize, and this subject has been the price list.",
              "Exam framing: 'Explain defences against PUF model-building attacks' is the subject's 14-mark closer. Give the five-rung defence ladder with the worked pricing table, the security-per-area argument, and the road-ahead directions.",
            ],
            keyTerms: [
              { term: "CRP budget", definition: "The protocol-limited number of revealed pairs - the first defence." },
              { term: "Feed-forward PUF", definition: "Intermediate outputs steering later stages - structural nonlinearity." },
              { term: "Challenge obfuscation", definition: "Hashing challenges before PUF input - phi engineering dies." },
              { term: "Reconfigurable PUF", definition: "Rewritable response mappings - the research direction." },
            ],
            diagram: {
              kind: "pyramid",
              title: "The model-building defence ladder",
              caption: "From CRP budgets to identity PUFs - each rung priced in silicon.",
              tiers: [
                { label: "Identity-class PUFs", note: "no CRP interface - but no challenge protocol either" },
                { label: "Challenge hashing", note: "~2-3k LUTs; phi engineering dies" },
                { label: "Feed-forward", note: "~1.3x logic; structural nonlinearity" },
                { label: "XOR-k obfuscation", note: "k x area; 70% -> 55% accuracy ladder" },
                { label: "CRP budget", note: "free; dies against offline collectors" },
              ],
            },
            bullets: [
              "Ladder: CRP budget -> XOR-k -> feed-forward -> challenge hashing -> identity PUFs.",
              "Worked pricing: 4x area / 1.3x / 2-3k LUTs / free.",
              "Accuracy ladder: 99% (k=1) -> 70% (k=4) -> 55% (k=8).",
              "Functionality trade: identity PUFs lose the challenge protocol.",
              "Combined defences for nation-state profiles.",
              "Road ahead: reconfigurable PUFs, formal learnability bounds.",
            ],
            callout: {
              type: "exam",
              title: "One war, two layers, one price list",
              body: "The closing sentence: 'piracy and model-building are the same war at different layers - both won by raising attacker cost above prize value, and this subject is the price list.' Map every unit onto one rung of one ladder as the final synthesis.",
            },
            table: {
              caption: "The defence pricing table.",
              headers: ["Defence", "Silicon cost", "Attack effect"],
              rows: [
                ["CRP budget", "Protocol only", "Online collectors starve"],
                ["XOR-4 arbiter", "4x PUF area", "Accuracy -> ~70%"],
                ["Feed-forward", "~1.3x logic", "Additive chain broken"],
                ["Challenge hashing", "~2-3k LUTs", "phi engineering dies"],
                ["Identity PUF", "PUF only", "No CRPs exist"],
              ],
            },
            examQuestions: [
              {
                q: "Explain defences against PUF model-building: the five-rung ladder with pricing, the security-per-area argument, and the road-ahead directions.",
                marks: 14,
                outline: [
                  "Ladder: budget, XOR-k, feed-forward, hashing, identity",
                  "Worked costs and accuracy effects per rung",
                  "Functionality trade of identity PUFs",
                  "Adversary-profile matching",
                  "Combined defences for strong adversaries",
                  "Reconfigurable PUFs and learnability bounds",
                  "Price-list synthesis closing",
                ],
              },
              {
                q: "Why is challenge hashing devastating to the phi-feature attack specifically?",
                marks: 7,
                outline: [
                  "phi features are parity products of raw challenge bits",
                  "The PUF never sees the raw challenge after hashing",
                  "The learned model must now fit hash-composed inputs",
                  "Parity structure is destroyed by the hash",
                  "The linear surface disappears entirely",
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
      id: "weights",
      heading: "Exam weight map",
      body: [
        "CY-801 papers draw their biggest blocks from Unit III's side channels and Unit V's PUF-piracy pair - Kocher's DES case study and the SVM/GP model-building attacks are near-guaranteed 14-mark questions. Unit II's PUF metrics and Unit IV's fault attacks supply the numericals; Unit I's finite fields feed both the computation and the verification questions. The numbers to have automatic: the 0x57 x 0x83 multiplication, the 50-chip PUF triplet (49.7/4.2/51.3), the DES 1,000-trace DPA, the Bellcore gcd, and the 18k/50k-100k CRP ladder.",
      ],
      weightedTopics: [
        { topic: "Side channels: SPA/DPA, Kocher on DES, masking/hiding", weight: "12-14 marks", note: "The named case study; quote 1,000 traces and the S-box-by-S-box walk." },
        { topic: "PUFs: arbiter/RO implementations, quality metrics, fuzzy extractor", weight: "12-14 marks", note: "49.7/4.2/51.3 triplet; BCH(255,139,21) helper-data walk." },
        { topic: "Model-building attacks: SVM on arbiter, GP on RO", weight: "12-14 marks", note: "phi features, 18k/50k CRPs, XOR-collapse ladder (99/70/55%)." },
        { topic: "Fault attacks: Bellcore, DFA, injection techniques", weight: "10-12 marks", note: "gcd(s - s', n) = q; round-9/round-10 candidate arithmetic." },
        { topic: "Finite fields + public-key math", weight: "8-10 marks", note: "GF(2^8) multiplication worked; RSA toy (3233/3120/2753)." },
        { topic: "IP piracy, locking, PUF activation", weight: "8-10 marks", note: "2^k variants; 2^-128 clone match; the brick economics." },
        { topic: "FPGA flow and crypto-hardware optimization", weight: "6-8 marks", note: "2/7/20 Gbps trade curve; composite-field S-box lever." },
        { topic: "Verification, IC flow, Trojans", weight: "6-8 marks", note: "Distributivity identity theorem; the 1/256 Trojan trigger." },
      ],
    },
    {
      id: "six-weeks",
      heading: "Six-week study plan",
      body: [
        "Two hours a day, five days a week: this schedule covers every unit twice - understanding with the worked computations first, timed revision second - and reserves the final week for full papers and the anchor diagrams.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - foundations", tasks: ["GF(2^8) multiplication 0x57 x 0x83 by hand", "RSA toy: n, phi, d, encrypt, decrypt", "FPGA flow + AES resource accounting", "SVM margin example + kernel trick; landscape matrix"] },
        { week: "Week 2", focus: "Unit II - primitives", tasks: ["Four AES architectures with LUT numbers", "Optimization levers + trade curve", "PUF family + SRAM worked case", "Quality triplet + fuzzy extractor BCH walk"] },
        { week: "Week 3", focus: "Unit III - side channels", tasks: ["HW(k XOR c) model + measurement setup", "SPA vs DPA table + difference of means", "Kocher DES case study end to end", "Masked-AND arithmetic; template attack; cache spy"] },
        { week: "Week 4", focus: "Unit IV - faults and verification", tasks: ["TMR vs double-computation arithmetic", "Bellcore gcd walk + DFA round arithmetic", "Injection ladder + countermeasure stack", "Distributivity identity; IC flow trust gaps; Trojan case"] },
        { week: "Week 5", focus: "Unit V - piracy war", tasks: ["Piracy forms + chain countermeasures", "Watermark 2^-k + locking 2^k", "PUF activation 2^-128 flow", "SVM case study phi + XOR ladder; GP case study"] },
        { week: "Week 6", focus: "Revision and papers", tasks: ["Defence ladder pricing table", "Two full mock papers under 3-hour timing", "Redraw anchor diagrams daily: race, DPA pipeline, fuzzy extractor", "Weight map as final-night recall check"] },
      ],
    },
    {
      id: "last-day",
      heading: "Last-day strategy",
      bullets: [
        "Do not learn anything new; cycle the numbers - 0xC1, 2790/2753, 49.7/4.2/51.3, 1,000 traces, 2^8 candidates/byte, 18k/50k CRPs, 2^-128.",
        "Redraw the anchor diagrams: the arbiter race, the DPA pipeline, the fuzzy-extractor Gen/Rep, the XOR-collapse ladder.",
        "Re-run the Kocher DES walk once per hour: 8 S-boxes, 6 bits each, 2^8 brute.",
        "Rehearse the Bellcore gcd step and the DFA round-9 arithmetic.",
        "Recite the three PUF metrics with thresholds and the XOR-defence pricing table.",
        "Skim every 'in one breath' paragraph; they compress each unit into the recall net.",
        "Sleep seven hours; the computations reward a fresh brain more than a fifth pass.",
      ],
    },
    {
      id: "exam-hall",
      heading: "Exam-hall playbook",
      examTips: [
        "Open with the one-line definition, then the diagram, then the worked numbers - examiners mark structure top-down.",
        "For case studies (Kocher DES, SVM-PUF, GP-RO), name the paper or attack lineage - context marks ride on it.",
        "Attach a number to every claim: 1,000 traces, 50k CRPs, 2^64 variants, 10-100 ps margins.",
        "For GF(2^8) and RSA numericals, show the intermediate steps - method marks are separate from result marks.",
        "In comparison questions (SPA/DPA, hiding/masking, SVM/GP, arbiter/RO), use a table - rows earn faster than prose.",
        "End long answers with the threat-model pricing sentence; the closing judgment line is the 14th mark.",
        "Time-box: 7 marks = 12 minutes, 14 marks = 25 minutes including the diagram; leave 5 minutes to add numbers to thin answers.",
      ],
    },
    {
      id: "slips",
      heading: "Common slips that cost easy marks",
      bullets: [
        "Doing GF(2^8) multiplication with carries - it is XOR plus conditional reduction only.",
        "Confusing SPA and DPA - one trace read visually vs thousands correlated statistically.",
        "Forgetting the final 2^8 brute force in the DES case study - 48 + 8 = 56 bits.",
        "Saying masking 'hides' the leakage - masking randomizes shares; hiding flattens the signal.",
        "Mixing uniqueness (inter-chip ~50%) with reliability (intra-chip ~0%) - the triplet order matters.",
        "Claiming PUF helper data 'contains the key' - it stores a syndrome within the leakage bound.",
        "Forgetting majority voting when quoting PUF attack accuracy - noise caps raw accuracy.",
        "Inventing RGPV year citations - describe mechanism and worked example instead; fabricated citations cost credibility marks.",
      ],
    },
  ],
};
