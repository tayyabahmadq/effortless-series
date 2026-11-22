import type { AcademicSubject } from "./types";

export const it602: AcademicSubject = {
  id: "it-602",
  code: "IT-602",
  title: "Wireless and Mobile Computing",
  semester: "VI Semester",
  program: "RGPV · Information Technology",
  tagline:
    "Five units, one journey: how radio waves survive the air, how GSM and GPRS built the cellular machine, how 802.11, HIPERLAN and Bluetooth cut the cable, how Mobile IP and adapted TCP learn to move, and how intruders, malware and firewalls are kept out of it all.",
  description:
    "The subject walks from physics to security. Unit I builds the air interface: antennas and their patterns, ground/sky/LOS propagation, fading, the wireless digital communication model, the SDMA/TDMA/FDMA/CDMA/DAMA/PRMA access family, cellular organization with handoff, power control, sectorization, and Erlang traffic engineering. Unit II crosses into 2G: GSM services, architecture, logical channels, calling and handover, A3/A5/A8 security, then the data upgrades HSCSD and GPRS with SGSN/GGSN and mobility management, and the cordless and trunked worlds of DECT, TETRA and UMTS. Unit III cuts the cable: 802.11 architecture and its a/b/g physical layers, the CSMA/CA MAC with hidden and exposed terminals, MAC management, and the HIPERLAN family and Bluetooth stacks. Unit IV makes the internet mobile: Mobile IP with its three encapsulations, DHCP, ad hoc networks and their routing, wireless sensor networks, the I-TCP/snooping/M-TCP transport fixes, and WAP. Unit V defends it all: intruders, intrusion detection, password management, viruses and worms, biometrics versus conventional authentication, and firewall design principles. Every section pairs a definition-first explanation with a worked engineering example, one diagram, a table or code, key terms, a callout and exam questions traced to the May 2023, December 2024 and June 2025 papers.",
  accentColor: "#14b8a6",
  emoji: "WM",
  unitCount: 5,
  totalSections: 37,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Wireless Transmission and Cellular Fundamentals",
      summary:
        "Unit I is the physics-plus-arithmetic half of the subject: antennas and radiation patterns, the ground/sky/LOS propagation modes, the fading family, the block model of wireless digital communication, the SDMA/TDMA/FDMA/CDMA/DAMA/PRMA multiple-access family, cellular organization and operation with handoff, power control and sectorization, and traffic engineering with Poisson arrivals, lost calls cleared and the Erlang-B grade of service.",
      chapter: {
        number: "01",
        title: "The Air Interface Machine",
        intro:
          "Unit I covers antennas (radiation pattern, types, gain), the three propagation modes and the fading family, the wireless digital communication model with Schiller's five-layer reference model, the multiple access techniques SDMA, TDMA, FDMA, CDMA, DAMA, PRMA and MAC/CA, and the cellular system: organization, operation, propagation effects, handoff, power control, sectorization, and traffic engineering with infinite sources, lost calls cleared, grade of service and the Poisson arrival process.",
        inOneBreath:
          "The antenna shapes energy, propagation chooses the path, fading is the channel's price; FDMA/TDMA/CDMA/SDMA divide the spectrum by frequency, time, code and space, while DAMA and PRMA allocate channels on demand; cells reuse frequencies under an MSC's control, handoff migrates the call, sectorization and power control clean interference, and Erlang-B turns Poisson arrivals into a grade-of-service number.",
        sections: [
          {
            number: "1.1",
            title: "Antennas: radiation pattern, types and gain",
            body: [
              "An antenna is the transducer that converts guided electrical energy from a transmitter into free-space electromagnetic waves — and reverses the trick at the receiver. Its behaviour is summarized by the radiation pattern, the plot of radiated power versus direction: the main lobe carries the energy, side lobes leak it, nulls protect it. Antenna gain measures how strongly the pattern concentrates energy relative to a reference — dBi against the isotropic radiator (a perfect sphere that cannot be built), dBd against a half-wave dipole (1 dBd = 2.15 dBi). Gain is not amplification: a passive antenna steals energy from unwanted directions and spends it in the wanted ones, so beamwidth and gain trade off directly.",
              "The standard catalogue runs from omni to pencil beam. A half-wave dipole radiates uniformly around its axis (2.15 dBi); the quarter-wave monopole over a ground plane gives about 5.15 dBi, which is why handsets and car antennas are whips. A Yagi-Uda adds parasitic elements for a 10-15 dBi forward lobe. The helical antenna fires an end-fire beam with circular polarization, ideal for satellite links where orientation keeps changing — May 2023 Q1b asked for its operation with a neat sketch. A parabolic dish of diameter D at wavelength λ delivers G ≈ η(πD/λ)², tens of dBi for microwave backhaul and earth stations.",
              "Numbers make the concentration concrete. A GSM base-station antenna with 17 dBi gain and 40 W transmit power behaves, in the main-lobe direction, like an isotropic radiator pushing roughly 40 × 10^1.7 ≈ 2000 W — that effective radiated power is what the link budget spends. The same power into an omni antenna lights up the whole cell; into three 120° sector antennas it cuts each sector's interference by roughly 5 dB, which is precisely the sectorization arithmetic of section 1.7. At 900 MHz over 5 km, path loss is about 118 dB, so a 53 dBm EIRP link lands near −65 dBm — comfortably above a −100 dBm receiver sensitivity.",
              "The exam angle is recall plus one sketch. Know the pattern vocabulary (main lobe, side lobes, front-to-back ratio, beamwidth), the gain units and their conversion, and one line on why circular polarization helps satellite links. Traps: writing 'gain amplifies the signal' (it reshapes it), quoting dB where dBi is meant (the 2.15 dB offset matters in link budgets), and forgetting the isotropic radiator is a theoretical reference, not a buildable antenna. Dec 2024 Q1a asked 'What is an antenna? Draw and explain any two types' — a dipole (figure-of-eight pattern) plus a Yagi or dish (narrow lobe) is a complete answer.",
            ],
            keyTerms: [
              { term: "Radiation pattern", definition: "A plot of radiated power versus direction — main lobe, side lobes and nulls describe where the energy goes." },
              { term: "Antenna gain (dBi)", definition: "Concentration of energy in the main lobe relative to an isotropic radiator; passive, not amplification." },
              { term: "Isotropic radiator", definition: "The theoretical point source radiating equally in all directions; 0 dBi reference for all gain figures." },
              { term: "Helical antenna", definition: "End-fire antenna radiating circular polarization — the standard choice for satellite links." },
              { term: "Front-to-back ratio", definition: "The dB difference between the main lobe and the opposite direction — how well the antenna rejects the rear." },
            ],
            table: {
              caption: "Antenna types and where they earn their keep.",
              headers: ["Type", "Radiation", "Typical gain", "Where it is used"],
              rows: [
                ["Isotropic (reference)", "perfect sphere (theoretical)", "0 dBi by definition", "benchmark for every gain figure"],
                ["Half-wave dipole", "omni in the horizontal plane, figure-of-eight", "2.15 dBi", "basic links, pattern reference"],
                ["Monopole (quarter-wave)", "omni above the ground plane", "≈ 5.15 dBi", "handsets, car whips, base stations"],
                ["Yagi-Uda", "narrow forward lobe", "10-15 dBi", "fixed point-to-point, TV reception"],
                ["Helical (axial mode)", "circular-polarized end-fire beam", "up to ≈ 15 dBi", "satellite and space links"],
                ["Parabolic dish", "very narrow pencil beam", "20-40 dBi", "microwave backhaul, earth stations"],
              ],
            },
            bullets: [
              "Antenna converts guided electrical energy into free-space waves and back.",
              "Radiation pattern: main lobe carries energy, side lobes leak, nulls protect.",
              "Gain in dBi (vs isotropic) or dBd (vs dipole); 1 dBd = 2.15 dBi.",
              "Gain reshapes energy, never amplifies — beamwidth and gain trade off.",
              "Dipole 2.15 dBi, monopole ≈ 5.15 dBi, Yagi 10-15 dBi, dish tens of dBi.",
              "Helical gives circular polarization — satellite links keep their orientation free.",
              "17 dBi on 40 W ≈ 2000 W EIRP — concentration is the whole link-budget story.",
            ],
            diagram: {
              kind: "compare",
              title: "Omnidirectional vs directional antennas",
              caption:
                "Same total power, two spending strategies — coverage everywhere or a strong beam where it matters.",
              left: {
                heading: "Omnidirectional (dipole, monopole)",
                items: [
                  "Uniform in the horizontal plane",
                  "Low gain (2-5 dBi), huge beamwidth",
                  "Covers all directions from one element",
                  "Handsets, car antennas, small base sites",
                ],
              },
              right: {
                heading: "Directional (Yagi, helical, dish)",
                items: [
                  "Concentrated main lobe with nulls",
                  "High gain (10-40 dBi), narrow beamwidth",
                  "Must be aimed — or steered (smart antennas)",
                  "Backhaul, satellite links, sector antennas",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Antennas opened the December 2024 paper",
              body: "Dec 2024 Q1a: 'What is an Antenna? Draw and explain any two types of antennas' (7 marks), and May 2023 Q1b asked for the helical antenna's operation with a neat sketch. Prepare dipole, monopole, Yagi, helical and dish with one sketch each — and be ready to define gain in dBi versus dBd, the detail that separates full-mark answers.",
            },
            examQuestions: [
              {
                q: "What is an Antenna? Draw and explain any two types of antennas.",
                marks: 7,
                appearances: ["Dec 2024"],
                outline: [
                  "Definition: transducer between guided electrical energy and free-space waves",
                  "Radiation pattern, main lobe, side lobes, beamwidth, gain (dBi)",
                  "Type 1: half-wave dipole — figure-of-eight pattern, 2.15 dBi, omni in azimuth",
                  "Type 2: Yagi-Uda — driven element + parasitic reflector/directors, 10-15 dBi forward lobe",
                  "(Alternative: helical — circular polarization; parabolic dish — pencil beam, G ≈ η(πD/λ)²)",
                  "One neat sketch per type with labelled pattern",
                  "Close with gain = energy redistribution, not amplification",
                ],
              },
              {
                q: "With neat sketch, explain the operation of helical antenna.",
                marks: 7,
                appearances: ["May 2023"],
                outline: [
                  "Geometry: wire wound into a helix of circumference C ≈ λ, pitch and number of turns",
                  "Axial (end-fire) mode: maximum radiation along the helix axis",
                  "Circular polarization — survives satellite orientation changes",
                  "Gain grows with the number of turns, up to about 15 dBi",
                  "Sketch: helix, ground plane, axis, beam direction, polarization sense",
                  "Applications: satellite and space communication, telemetry",
                ],
              },
              {
                q: "Define antenna gain and distinguish dBi from dBd. Why is a passive antenna still said to have gain?",
                marks: 7,
                outline: [
                  "Gain: power density in the main lobe relative to a reference, same input power",
                  "dBi references the isotropic radiator; dBd references a half-wave dipole",
                  "Conversion: 1 dBd = 2.15 dBi",
                  "Passive gain = energy redistributed from unwanted directions into the main lobe",
                  "Trade-off: narrower beamwidth buys higher gain",
                  "Example: 17 dBi base antenna turns 40 W into ≈ 2000 W EIRP",
                ],
              },
            ],
          },
          {
            number: "1.2",
            title: "Propagation modes: ground wave, sky wave and LOS",
            body: [
              "Propagation modes describe which path a wave takes from transmitter to receiver, and the frequency decides. Ground wave propagation hugs the curvature of the Earth along its surface; it works below roughly 2 MHz, where long wavelengths diffract around obstacles and follow the terrain, and it serves AM broadcasting and maritime communication. Sky wave propagation bounces signals off the ionosphere between about 2 and 30 MHz: ionized layers reflect HF signals back to Earth hundreds of kilometres from the transmitter, enabling short-wave radio — though the ionosphere varies with time of day and solar activity, so the link quality comes and goes.",
              "Above 30 MHz the ionosphere is transparent and only line-of-sight (LOS) space-wave propagation works: a direct ray plus a ground-reflected ray must connect the antennas. The Earth's curvature and standard atmospheric refraction cap the reach at the radio horizon, d ≈ 3.57(√h_t + √h_r) kilometres for antenna heights in metres — a 30 m tower talking to a 1.5 m handset reaches about 24 km, and beyond that the link needs another cell. This horizon arithmetic is the physical reason cellular networks exist: coverage is rebuilt hop by hop.",
              "The modes interact with mobile realities. LOS links suffer multipath from the ground-reflected ray and from buildings, producing the fading of section 1.3; sky-wave links suffer multipath from multiple hops and ionospheric layers, with a silent skip distance near the transmitter; ground-wave links attenuate faster over land than over sea. Jun 2025 Q1a asked for all three models with suitable diagrams — the expected sketch set shows the surface-hugging ground wave, the ionospheric skip of the sky wave, and the direct-plus-reflected LOS ray pair meeting the radio horizon.",
              "For the exam, memorize the three frequency regimes with one application each, draw the three sketches in under three minutes, and quote the horizon formula with the worked 24 km number. Traps: claiming sky wave works at GHz frequencies (the ionosphere passes those straight through — that is why satellites use them), and forgetting that LOS includes the ground-reflected component, which is where two-ray interference and the ripple in received power come from.",
            ],
            keyTerms: [
              { term: "Ground wave", definition: "Surface-following propagation below about 2 MHz — AM radio and maritime links." },
              { term: "Sky wave", definition: "Ionosphere-reflected propagation in the 2-30 MHz HF band, with skip distance and day/night variation." },
              { term: "Line of sight (LOS)", definition: "Direct-ray propagation above 30 MHz, limited by the radio horizon d ≈ 3.57(√h_t + √h_r) km." },
              { term: "Radio horizon", definition: "The maximum LOS distance set by Earth curvature plus standard refraction." },
              { term: "Skip distance", definition: "The zone near a sky-wave transmitter that the reflected wave overshoots — no signal except ground wave." },
            ],
            bullets: [
              "Ground wave: below ≈ 2 MHz, follows the Earth's surface; AM, maritime.",
              "Sky wave: 2-30 MHz reflected by the ionosphere; skip distance, HF variability.",
              "LOS space wave: above 30 MHz, direct ray + ground-reflected ray.",
              "Radio horizon d ≈ 3.57(√h_t + √h_r) km — 30 m + 1.5 m ≈ 24 km reach.",
              "The horizon formula is why cellular coverage is rebuilt hop by hop.",
              "Multipath from the reflected ray creates the fading of section 1.3.",
              "Ionosphere transparent above 30 MHz — satellite bands pass straight through.",
            ],
            diagram: {
              kind: "fork",
              title: "A wave leaves the antenna — which path does it take?",
              caption:
                "Frequency picks the propagation mode; each mode brings its own coverage behaviour and problems.",
              start: "Transmitted RF wave",
              branches: [
                { label: "Below ≈ 2 MHz: ground wave", outcome: "follows the Earth's surface — AM broadcast, maritime; attenuates faster over land", good: true },
                { label: "2-30 MHz: sky wave", outcome: "reflected by the ionosphere — HF skip over hundreds of km, time-varying", good: true },
                { label: "Above 30 MHz: LOS space wave", outcome: "direct + ground-reflected ray — capped by the radio horizon, hence cells", good: true },
              ],
            },
            callout: {
              type: "exam",
              title: "Asked verbatim in Jun 2025",
              body: "Jun 2025 Q1a: 'With the help of suitable diagrams explain Ground wave, sky wave and LOS propagation models of wave propagation' (7 marks). Three sketches — surface wave, ionospheric skip, direct+reflected pair — plus one frequency band and one application per mode is the full answer.",
            },
            codeExample: {
              language: "python",
              caption: "horizon.py — how far can an LOS link reach?",
              code: `import math

def radio_horizon_km(h_tx_m: float, h_rx_m: float) -> float:
    # d(km) = 3.57 * (sqrt(h_tx) + sqrt(h_rx)) with standard refraction (4/3 earth)
    return 3.57 * (math.sqrt(h_tx_m) + math.sqrt(h_rx_m))

print(round(radio_horizon_km(30, 1.5)))    # 30 m tower to a 1.5 m handset: ~24 km
print(round(radio_horizon_km(60, 1.5)))    # doubling tower height buys only ~10 km
# beyond the horizon a >30 MHz link needs another cell — the reason cells exist`,
            },
            examQuestions: [
              {
                q: "With the help of suitable diagrams explain Ground wave, sky wave and LOS propagation models of wave propagation.",
                marks: 7,
                appearances: ["Jun 2025"],
                outline: [
                  "Ground wave: below 2 MHz, follows the Earth's curvature; AM, maritime",
                  "Attenuates faster over land than sea; long wavelengths diffract",
                  "Sky wave: 2-30 MHz reflected by ionized layers; skip distance, HF day/night drift",
                  "LOS space wave: above 30 MHz, direct + ground-reflected rays",
                  "Radio horizon d ≈ 3.57(√h_t + √h_r) km; 30 m + 1.5 m ≈ 24 km",
                  "Three labelled sketches: surface wave, ionospheric skip, ray pair + horizon",
                  "Ionosphere transparent above 30 MHz — satellite bands pass through",
                ],
              },
              {
                q: "Why does a 30 m base-station antenna reach only about 24 km at 900 MHz, and what does that limit imply for network design?",
                marks: 7,
                outline: [
                  "LOS propagation is capped by the radio horizon, not by transmit power",
                  "d ≈ 3.57(√h_t + √h_r) = 3.57(5.48 + 1.22) ≈ 24 km",
                  "Raising the tower buys only the √h term — height scales poorly",
                  "Implication: coverage must be rebuilt hop by hop — the cellular principle",
                  "Frequency reuse across many small cells replaces one tall transmitter",
                ],
              },
              {
                q: "Compare ground wave and sky wave propagation with respect to frequency range, coverage and stability.",
                marks: 7,
                outline: [
                  "Ground wave: < 2 MHz, surface-hugging, hundreds of km, stable but land-attenuated",
                  "Sky wave: 2-30 MHz, ionospheric hops, thousands of km in two hops",
                  "Sky wave unstable: layer height drifts diurnally, solar activity, skip distance",
                  "Sky wave multipath from multiple layers/hops; ground wave multipath minimal",
                  "Applications: AM and maritime vs short-wave broadcasting",
                ],
              },
            ],
          },
          {
            number: "1.3",
            title: "Fading and mobile radio propagation effects",
            body: [
              "Mobile radio propagation effects are everything the channel does to a signal between the antennas: path loss grows with distance (roughly d^−3.5 to d^−4 in cities versus free-space d^−2), shadowing from buildings adds slow log-normal variation, reflection and diffraction create multipath echoes with a spread of arrival delays, and motion adds the Doppler shift f_d = v/λ — a phone at 100 km/h on a 900 MHz carrier sees about ±83 Hz of shift. Dec 2024 Q2b asked for exactly this effects list; the full-mark answer pairs each effect with its consequence on the link.",
              "Fading is the received-power fluctuation all of this produces, and it divides by scale. Large-scale fading is path loss plus shadowing — terrain and buildings — changing over tens of metres. Small-scale fading is multipath: copies arriving with different delays add constructively and destructively over fractions of a wavelength, so walking one hand-span can swing the received power by 20-30 dB. The delay spread smears symbols into inter-symbol interference. In a non-line-of-sight channel the envelope is Rayleigh distributed; with a dominant LOS component it becomes Rician.",
              "Two orthogonal axes classify any fade. Flat versus frequency-selective depends on the signal bandwidth B against the coherence bandwidth B_c ≈ 1/(5·σ_τ): if B < B_c all frequencies fade together (flat); if B > B_c parts of the band fade independently and equalizers or OFDM must undo the distortion. Fast versus slow depends on the symbol period against the coherence time T_c ≈ 1/f_d: a fast channel changes within a symbol; a slow one holds across many. Worked anchor: an urban delay spread σ_τ ≈ 1 μs gives B_c ≈ 200 kHz — exactly why GSM's 200 kHz carriers sit at the flat/selective boundary.",
              "Exam practice: state both axes explicitly, place GSM, wideband CDMA and WLAN links into the 2×2 grid, and attach the countermeasure — interleaving, diversity and RAKE for multipath/fast fading, equalization and OFDM for selective fading, margin and power control for slow shadowing. The classic slip is treating fast/slow and flat/selective as one property; they are independent, and a link can be flat-and-fast or selective-and-slow.",
            ],
            keyTerms: [
              { term: "Path loss", definition: "Distance-driven power falloff — roughly d^−3.5 to d^−4 in cities versus d^−2 in free space." },
              { term: "Delay spread (σ_τ)", definition: "The spread of multipath arrival times; it sets the coherence bandwidth B_c ≈ 1/(5·σ_τ)." },
              { term: "Coherence time (T_c)", definition: "How long the channel stays roughly constant, T_c ≈ 1/f_d; symbol periods beyond it see fast fading." },
              { term: "Rayleigh fading", definition: "Multipath-only envelope distribution (no dominant LOS path) — deep fades are common." },
              { term: "Doppler shift", definition: "f_d = v/λ, the frequency offset from motion — ±83 Hz for 100 km/h at 900 MHz." },
            ],
            table: {
              caption: "The fading family: every row is a different axis of the same channel.",
              headers: ["Fading type", "Dividing line", "Cause", "Typical fix"],
              rows: [
                ["Large-scale (path loss + shadowing)", "distance and terrain", "log-normal shadowing from buildings", "link margin, cell planning"],
                ["Small-scale multipath", "fractions of a wavelength", "reflections with different delays", "equalizer, RAKE receiver, diversity"],
                ["Flat fading", "signal BW < coherence BW", "all frequencies fade together", "subcarrier spacing (OFDM), spread spectrum"],
                ["Frequency-selective fading", "signal BW > coherence BW", "delay spread causes ISI", "equalization, OFDM, RAKE"],
                ["Fast fading", "coherence time < symbol period", "speed × frequency (Doppler)", "interleaving, fast power control"],
                ["Slow fading", "coherence time > symbol period", "shadow drifts as the user moves", "margin, handoff to a better cell"],
              ],
            },
            bullets: [
              "Effects list: path loss, log-normal shadowing, multipath echoes, delay spread, Doppler.",
              "f_d = v/λ — 100 km/h at 900 MHz gives ±83 Hz.",
              "Large-scale fading changes over tens of metres; small-scale over half a wavelength.",
              "Rayleigh envelope without LOS; Rician with a dominant LOS component.",
              "Flat vs selective: signal bandwidth vs B_c ≈ 1/(5·σ_τ).",
              "Fast vs slow: symbol period vs T_c ≈ 1/f_d — two independent axes.",
              "Urban σ_τ ≈ 1 μs → B_c ≈ 200 kHz, the boundary GSM carriers were sized to.",
              "Countermeasures: interleaving/diversity (fast), equalizer/OFDM (selective), margin (slow).",
            ],
            diagram: {
              kind: "matrix",
              title: "Which fading is it?",
              caption:
                "Bandwidth against coherence bandwidth picks flat or selective; symbol rate against coherence time picks slow or fast — two independent dials.",
              axes: { x: "Signal bandwidth vs coherence bandwidth (flat -> selective)", y: "Channel change vs symbol period (slow -> fast)" },
              quadrants: [
                { label: "Selective + fast", note: "wideband signal on a fast channel — hardest case; OFDM + interleaving" },
                { label: "Selective + slow", note: "fixed wideband link with echoes — equalizer or RAKE suffices" },
                { label: "Flat + fast", note: "narrowband carrier in motion — GSM legacy case; interleaving + power control" },
                { label: "Flat + slow", note: "narrowband, stationary — plain margin and diversity cover it" },
              ],
            },
            callout: {
              type: "warning",
              title: "Two axes, not one",
              body: "Fading questions trap students who merge the two classifications. Flat/selective is a frequency-axis property (signal bandwidth vs coherence bandwidth); fast/slow is a time-axis property (symbol period vs coherence time). Saying 'fast fading needs an equalizer' mixes the axes — equalizers fix selectivity, interleaving fixes speed.",
            },
            examQuestions: [
              {
                q: "Discuss the various effects of mobile radio propagation.",
                marks: 7,
                appearances: ["Dec 2024"],
                outline: [
                  "Path loss: d^−3.5 to d^−4 urban vs d^−2 free space",
                  "Shadowing: log-normal slow variation from buildings and terrain",
                  "Multipath: reflections arrive with a delay spread → ISI",
                  "Small-scale fading: 20-30 dB swings over fractions of a wavelength",
                  "Rayleigh (no LOS) vs Rician (dominant LOS) envelope distributions",
                  "Doppler shift f_d = v/λ — 100 km/h at 900 MHz ≈ ±83 Hz",
                  "Countermeasures: margin, diversity, equalization/OFDM, interleaving, power control",
                ],
              },
              {
                q: "Distinguish flat and frequency-selective fading using coherence bandwidth, with a worked number.",
                marks: 7,
                outline: [
                  "Coherence bandwidth B_c ≈ 1/(5·σ_τ) from the delay spread",
                  "Signal bandwidth B < B_c: all frequencies fade together — flat",
                  "B > B_c: parts of the band fade independently — selective, ISI appears",
                  "Urban σ_τ ≈ 1 μs → B_c ≈ 200 kHz",
                  "GSM's 200 kHz carriers are the boundary case; UMTS's 5 MHz is selective",
                  "Fix for selective: equalizers, OFDM subcarriers, RAKE combining",
                ],
              },
              {
                q: "Explain Rayleigh versus Rician fading and why the distinction matters for receiver design.",
                marks: 7,
                outline: [
                  "Rayleigh: many equal-strength paths, no LOS — envelope Rayleigh-distributed",
                  "Rician: one dominant LOS component plus scattered paths — parameterized by K factor",
                  "Rayleigh channels show frequent deep fades; Rician is more stable",
                  "Receiver impact: RAKE/equalizer sizing, diversity order, link margin",
                  "Indoor hotspots often Rician; street-level cellular often Rayleigh",
                ],
              },
            ],
          },
          {
            number: "1.4",
            title: "The model for wireless digital communication",
            body: [
              "The model for wireless digital communication is a block chain every signal follows. At the transmitter: the source encoder compresses the information (GSM's speech codec outputs 13 kbit/s); the channel encoder adds controlled redundancy for forward error correction (260 voice bits become 456 coded bits); the interleaver spreads coded bits across bursts so a fade damages spread, correctable bits; and the modulator maps bits onto the carrier (GMSK in GSM, QPSK/8PSK elsewhere). The channel adds path loss, fading, delay spread and noise. The receiver mirrors the chain: demodulator, deinterleaver, channel decoder, source decoder.",
              "A worked trace ties the blocks together. GSM full-rate speech: 260 bits per 20 ms frame; channel coding adds parity and convolutional protection to reach 456 bits; interleaving spreads them over 4 TDMA bursts of 114 payload bits; GMSK carries 1 bit per symbol at 270.833 kbaud on a 200 kHz carrier. A deep fade hitting one burst now corrupts at most a quarter of a frame's coded bits — the Viterbi decoder corrects them. Without interleaving the same fade would erase consecutive bits beyond any code's reach.",
              "Schiller's reference model lifts the same story to protocol layers: the physical layer handles frequency bands and modulation; the data link layer adds MAC, framing and error control, including the FEC and interleaving above; the network layer handles addressing and routing, including Mobile IP tunneling; the transport layer adapts TCP to wireless losses and disconnections (Unit IV); the application layer adapts services themselves, WAP being the classic case. May 2023 Q6b asked for this reference model of wireless and mobile networks with a neat diagram — five layers, each annotated with its wireless duty.",
              "Exam angle: reproduce the block chain in order (a missing interleaver costs the fade argument), attach one function and one example to each block, then draw the five-layer reference model with its wireless annotations. Known slips: placing the equalizer at the transmitter (it lives in the receiver, undoing channel distortion), and confusing source coding (removes natural redundancy) with channel coding (adds controlled redundancy) — they push in opposite directions on purpose.",
            ],
            keyTerms: [
              { term: "Source encoder", definition: "Compresses information to its essential bits — speech codecs like GSM's 13 kbit/s full-rate coder." },
              { term: "Channel encoder", definition: "Adds controlled redundancy so the decoder can correct channel errors (FEC, convolutional codes)." },
              { term: "Interleaver", definition: "Spreads coded bits across bursts so a fade's clustered errors become correctable isolated ones." },
              { term: "GMSK", definition: "Gaussian minimum shift keying — GSM's constant-envelope modulation on a 200 kHz carrier." },
              { term: "Wireless reference model", definition: "Schiller's five layers (physical, data link, network, transport, application) annotated with their wireless duties." },
            ],
            bullets: [
              "Transmit chain: source encode -> channel encode -> interleave -> modulate.",
              "Channel adds path loss, fading, delay spread, noise; receive chain mirrors the chain.",
              "Interleaving converts burst errors into isolated, correctable errors.",
              "GSM trace: 260 speech bits -> 456 coded -> 4 bursts × 114 bits -> GMSK at 270.833 kbaud.",
              "Source coding removes redundancy; channel coding adds it back deliberately.",
              "Reference model layers: physical, data link, network, transport, application.",
              "Wireless duties: MAC/FEC at layer 2, Mobile IP at layer 3, TCP fixes at layer 4, WAP at layer 5.",
            ],
            diagram: {
              kind: "pipeline",
              title: "The wireless digital communication chain",
              caption:
                "Every block has one job; the interleaver's job is to make the fade fair to the code.",
              stages: [
                { label: "Source encoder", note: "compress — GSM speech 13 kbit/s" },
                { label: "Channel encoder", note: "add FEC — 260 -> 456 bits" },
                { label: "Interleaver", note: "spread across 4+ bursts" },
                { label: "Modulator", note: "GMSK/QPSK onto the carrier" },
                { label: "Wireless channel", note: "path loss · fading · noise" },
                { label: "Receiver chain", note: "equalize, deinterleave, decode" },
              ],
            },
            callout: {
              type: "tip",
              title: "Two codings, opposite directions",
              body: "Source coding and channel coding look contradictory until separated: source coding strips natural redundancy to save bandwidth; channel coding adds engineered redundancy to survive errors. If a question asks 'why encode twice?', that sentence plus the interleaver's burst-spreading role is the expected answer.",
            },
            codeExample: {
              language: "python",
              caption: "ber.py — why every dB of Eb/N0 matters",
              code: `import math

def bpsk_ber(eb_n0_db: float) -> float:
    eb_n0 = 10 ** (eb_n0_db / 10)
    return 0.5 * math.erfc(math.sqrt(eb_n0))

for snr in [4, 8, 12]:
    print(f"Eb/N0 = {snr} dB -> BER {bpsk_ber(snr):.2e}")
# 4 dB -> ~1.3e-2 ; 8 dB -> ~1.9e-4 ; 12 dB -> ~1e-8
# this cliff is why the channel encoder and interleaver exist`,
            },
            examQuestions: [
              {
                q: "With the help of a neat diagram, explain the reference model of wireless and mobile networks.",
                marks: 7,
                appearances: ["May 2023"],
                outline: [
                  "Five layers: physical, data link, network, transport, application",
                  "Physical: frequency bands, modulation (GMSK, QPSK), FEC and interleaving",
                  "Data link: MAC (CSMA/CA), framing, error control, LAPDm in GSM",
                  "Network: addressing and routing — Mobile IP tunneling, ad hoc routing",
                  "Transport: TCP adapted to wireless — I-TCP, snooping, M-TCP (Unit IV)",
                  "Application: WAP, location-aware services",
                  "Draw the stack; annotate each layer with its wireless duty",
                ],
              },
              {
                q: "Draw and explain the block diagram of a wireless digital communication system, giving the role of each block.",
                marks: 7,
                outline: [
                  "Source encoder: compress — GSM speech codec, 13 kbit/s",
                  "Channel encoder: add FEC — 260 voice bits -> 456 coded bits",
                  "Interleaver: spread coded bits over 4+ bursts against fade bursts",
                  "Modulator: GMSK/QPSK onto the RF carrier; PA and antenna",
                  "Channel: path loss, multipath fading, noise, Doppler",
                  "Receiver: demodulate, equalize, deinterleave, decode, source-decode",
                  "Equalizer lives in the receiver; interleaving beats clustered errors",
                ],
              },
              {
                q: "Why does the transmitter interleave coded bits before modulation? Illustrate with the GSM full-rate chain.",
                marks: 7,
                outline: [
                  "Fades corrupt clusters of consecutive bits, not random single bits",
                  "A code tuned for isolated errors fails on bursts beyond its span",
                  "Interleaving spreads 456 coded bits over 4 (later 8) bursts",
                  "A fade hitting one burst damages ≤ 1/4 of the frame's coded bits",
                  "Viterbi decoder corrects the scattered errors; burst erased nothing fatal",
                  "Cost: added latency — the price of fade robustness",
                ],
              },
            ],
          },
          {
            number: "1.5",
            title: "Multiple access: SDMA, TDMA, FDMA and CDMA",
            body: [
              "Multiple access techniques let many users share one spectrum pool in one cell. FDMA assigns each user a frequency band with guard bands between carriers — simple and always-on, but wasteful for bursty traffic. TDMA divides a carrier into time slots, so several users rotate through one frequency — it needs guard time and tight synchronization but enables variable slot allocation. CDMA gives every user a unique spreading code and lets all transmit simultaneously on the same band; the receiver correlates with the code and every other user collapses into noise-like interference. SDMA divides by space: sectorized or adaptive antenna arrays form beams so users in different directions reuse the same frequency, time slot and code.",
              "The canonical engineering example is GSM's hybrid: 25 MHz of paired uplink (890-915 MHz) and downlink (935-960 MHz) is sliced into 124 FDMA carriers of 200 kHz, and each carrier runs an 8-slot TDMA frame of 4.615 ms — FDMA outside, TDMA inside. CDMA (IS-95) instead floods 1.25 MHz with all users at once and lives or dies by power control: a mobile 10 dB closer to the base drowns out the far one (the near-far problem), so closed-loop power control commands handsets hundreds of times per second. Dec 2024 Q1b asked for the SDMA/TDMA/FDMA/DAMA comparison in one 7-mark half — a filled table is the ready answer.",
              "SDMA completes the family: a three-sector cell reuses each carrier three times over, and smart antennas steer beams toward individual users, adding capacity without new spectrum at the cost of tracking hardware. DAMA (demand assignment multiple access) is not a fourth division axis but an allocation policy — a central controller grants channels on demand rather than fixing them in advance, standard in satellite earth stations and developed with PRMA in section 1.6. The four division axes compose: GSM is FDMA+TDMA, UMTS is CDMA+SDMA sectors, TETRA is TDMA with DAMA-style trunking.",
              "Exam angle: define each scheme by what it divides (frequency, time, code, space), state its hardware need (guard bands, sync + guard time, power control + code orthogonality, antenna arrays), and give one deployed system per row. Traps: calling CDMA collision-free (it is interference-limited — capacity is set by S/I, not by collisions), or calling SDMA a modulation (it is antenna processing), and forgetting guard time in TDMA costs capacity exactly as guard bands cost spectrum in FDMA.",
            ],
            keyTerms: [
              { term: "FDMA", definition: "One frequency band per user with guard bands — the analog AMPS scheme." },
              { term: "TDMA", definition: "Time slots rotating on one carrier — GSM's 8 slots per 200 kHz, needing sync and guard time." },
              { term: "CDMA", definition: "Unique spreading codes over one shared band; interference-limited, needs tight power control." },
              { term: "Near-far problem", definition: "A close CDMA transmitter swamps distant ones — solved by fast, precise power control." },
              { term: "SDMA", definition: "Spatial division via sectorized or adaptive beam antennas — same resources reused per direction." },
            ],
            table: {
              caption: "The access family in one table — Dec 2024 Q1b's comparison question, pre-answered.",
              headers: ["Scheme", "Users share by", "Hardware need", "Weakness", "Deployed in"],
              rows: [
                ["FDMA", "a frequency band per user", "guard bands", "wastes spectrum at low duty cycle", "analog AMPS"],
                ["TDMA", "time slots on one carrier", "slot sync + guard time", "whole-slot allocation is rigid", "GSM (8 slots), TETRA (4 slots)"],
                ["CDMA", "unique spreading codes", "near-exact power control", "near-far problem, cell breathing", "IS-95, UMTS W-CDMA"],
                ["SDMA", "directional beams / sectors", "adaptive antenna arrays", "beam-tracking hardware", "sectorized cells, smart antennas"],
                ["DAMA", "central controller grants on demand", "reservation signalling", "controller latency", "satellite earth stations"],
                ["PRMA", "statistical slot reservation", "contention phase per frame", "contention collisions", "packet voice over cellular"],
              ],
            },
            bullets: [
              "Four division axes: frequency (FDMA), time (TDMA), code (CDMA), space (SDMA).",
              "DAMA is an allocation policy (demand-assigned channels), not a division axis.",
              "GSM = 124 FDMA carriers × 8 TDMA slots; FDMA outside, TDMA inside.",
              "CDMA is interference-limited: the near-far problem makes power control mandatory.",
              "Guard bands (FDMA) and guard time (TDMA) both spend capacity to keep users apart.",
              "SDMA: three sectors reuse each carrier three times; smart antennas go further.",
              "Systems: AMPS (FDMA), GSM (TDMA), IS-95/UMTS (CDMA), sectorized GSM (SDMA).",
            ],
            diagram: {
              kind: "fork",
              title: "One coverage area, many users — divide what?",
              caption:
                "Every multiple-access scheme is one answer to the same question: which dimension do we cut?",
              start: "Share the spectrum",
              branches: [
                { label: "Divide frequency (FDMA)", outcome: "a band per user, guard bands keep carriers apart — analog AMPS", good: true },
                { label: "Divide time (TDMA)", outcome: "slots rotate on one carrier — GSM's 8 × 4.615 ms frame", good: true },
                { label: "Divide code (CDMA)", outcome: "all talk at once, codes separate them — power control decides capacity", good: true },
                { label: "Divide space (SDMA)", outcome: "beams and sectors reuse everything per direction — smart antennas", good: true },
              ],
            },
            callout: {
              type: "exam",
              title: "The comparison question is a fixture",
              body: "Dec 2024 Q1b: 'Compare between SDMA, TDMA, FDMA and DAMA' (7 marks), and Jun 2025 Q1b opened with 'What do you mean by multiple access techniques?'. Answer by division axis + hardware need + weakness + one deployed system per row — the table above is the skeleton; reproduce it and every marking point is on the page.",
            },
            examQuestions: [
              {
                q: "Compare between SDMA, TDMA, FDMA and DAMA.",
                marks: 7,
                appearances: ["Dec 2024"],
                outline: [
                  "FDMA: frequency band per user; guard bands; analog AMPS; rigid, wasteful for bursts",
                  "TDMA: slots on one carrier; needs sync + guard time; GSM 8 slots",
                  "CDMA (contrast): codes over one band; near-far -> power control; IS-95/UMTS",
                  "SDMA: space — sectors and adaptive beams; same resources per direction",
                  "DAMA: demand-assigned allocation by a controller, usually over FDMA/TDMA",
                  "DAMA is a policy, not a division axis — the standard trap",
                  "One table, one row per scheme, one example each",
                ],
              },
              {
                q: "Explain the CDMA principle and the near-far problem. Why does CDMA capacity depend on power control?",
                marks: 7,
                outline: [
                  "Each user spreads with a unique code; receiver de-spreads only the wanted code",
                  "Others' signals stay spread — noise-like interference raised by processing gain",
                  "Near-far: a close mobile arrives 10+ dB stronger and drowns the far one",
                  "Closed-loop power control equalizes received levels (hundreds of commands/s)",
                  "Capacity is interference-limited: every dB of S/I improvement adds users",
                  "Contrast with FDMA/TDMA where users are orthogonal, not stacked",
                ],
              },
              {
                q: "How does GSM combine FDMA and TDMA? Give the arithmetic of its air interface.",
                marks: 7,
                outline: [
                  "Uplink 890-915 MHz, downlink 935-960 MHz — 25 MHz paired each way",
                  "124 FDMA carriers of 200 kHz with guard bands",
                  "Each carrier: 8-slot TDMA frame of 4.615 ms, slot 0.577 ms, 114 payload bits",
                  "Raw carrier rate 270.833 kbit/s per 200 kHz (GMSK)",
                  "Duplexing: FDD, 45 MHz up/down separation",
                  "Result: FDMA outside, TDMA inside — the hybrid pattern",
                ],
              },
            ],
          },
          {
            number: "1.6",
            title: "DAMA, PRMA and priority-based access",
            body: [
              "DAMA — demand assignment multiple access — replaces fixed channel ownership with on-demand grants: a user requests a circuit, a central controller assigns a free channel for the call's duration, and the channel returns to the pool afterwards. It marries the efficiency of sharing to the simplicity of circuit switching and is the standard access discipline for satellite earth stations. PRMA — packet reservation multiple access — is its statistical cousin for packet voice over TDMA frames: free slots are contended for with slotted ALOHA, a winner holds (reserves) the slot for the whole talk spurt, and the slot is released when the speaker goes silent.",
              "A PRMA frame makes it concrete. Take an 8-slot TDMA frame shared by 12 voice users, each speaking about 40% of the time. At frame start, users with speech but no slot transmit their first packet on a randomly chosen free slot; collisions lose and retry next frame. MS1 wins slot 3 and keeps it for 2 seconds of speech; MS2 wins slot 7; when MS1 goes silent, slot 3 re-enters the free pool. Statistical multiplexing lets 12 users live comfortably on 8 slots — exactly the arithmetic examiners ask for when Jun 2025 Q1b says 'discuss DAMA and PRMA techniques'.",
              "Priority-based access extends the same frame logic with service classes: control packets and retransmissions get shorter backoff windows or dedicated priority slots, so signalling and safety-critical traffic win contention against best-effort packets. May 2023 Q1a asked exactly how priority-based multiple access schemes can be implemented — answer with a priority field in the packet, differentiated contention windows or slots, and reservation precedence, one sentence each. MAC/CA — medium access control with collision avoidance (CSMA/CA, Unit III) — is the distributed cousin of this whole family.",
              "Jun 2025 Q1b paired 'what do you mean by multiple access techniques' with 'discuss DAMA and PRMA' — so the answer opens with the general definition (coordinated sharing of a common medium among many users), then the two mechanisms with their reservation loops. Traps: confusing DAMA (a demand-driven allocation policy, typically circuit-oriented) with CDMA (code-division spread spectrum), and describing PRMA contention as collision-free — it is slotted ALOHA; collisions are expected and simply retried next frame.",
            ],
            keyTerms: [
              { term: "DAMA", definition: "Demand assignment multiple access — a controller grants channels per call instead of fixing ownership." },
              { term: "PRMA", definition: "Packet reservation multiple access — slotted-ALOHA contention wins a slot reserved for the whole talk spurt." },
              { term: "Talk spurt", definition: "A continuous speech burst between silences — the unit a PRMA reservation protects." },
              { term: "Slotted ALOHA", definition: "Random access confined to slot boundaries; collisions are detected and retried." },
              { term: "MAC/CA", definition: "Medium access control with collision avoidance — the distributed contention discipline (CSMA/CA) of WLANs." },
            ],
            bullets: [
              "DAMA: request -> grant -> use -> release; central controller owns the pool.",
              "DAMA is an allocation policy layered over FDMA/TDMA, not a spread-spectrum scheme.",
              "PRMA: contend on free slots (slotted ALOHA), reserve for the talk spurt, release on silence.",
              "Statistical gain: 12 bursty voice users fit 8 slots because speech is ≈ 40% active.",
              "Priority access: priority field + shorter contention windows + reservation precedence.",
              "Signalling and retransmissions win contention; best-effort yields.",
              "Jun 2025 Q1b asked DAMA + PRMA; May 2023 Q1a asked priority-based implementation.",
            ],
            diagram: {
              kind: "flow",
              title: "PRMA's slot reservation loop",
              caption:
                "Contention is brief and only for the first packet; the reservation carries the whole talk spurt.",
              steps: [
                { label: "Frame of slots", note: "some free, some reserved" },
                { label: "Contend", note: "slotted ALOHA on a free slot" },
                { label: "Win -> reserve", note: "slot held for the talk spurt" },
                { label: "Talk", note: "same slot every frame, no contention" },
                { label: "Silence -> release", note: "slot returns to the free pool" },
              ],
            },
            callout: {
              type: "exam",
              title: "Two papers, one question",
              body: "Jun 2025 Q1b (7 marks) asked for multiple access in general plus DAMA and PRMA specifically; May 2023 Q1a (7 marks) asked how priority-based multiple access can be implemented. Prepare one paragraph per mechanism plus the three-point priority answer — the pairing of definitions with a reservation loop is the marking scheme.",
            },
            codeExample: {
              language: "python",
              caption: "prma.py — a reservation loop in twelve lines",
              code: `slots = 8                    # one PRMA frame: 8 TDMA slots
reserved = {}                # slot -> mobile id holding it

def request_slot(ms: int, talking: bool) -> str:
    if talking:
        free = [s for s in range(slots) if s not in reserved]
        if free:                       # slotted-ALOHA contention wins a slot
            reserved[free[0]] = ms
            return f"MS{ms} reserved slot {free[0]} for its talk spurt"
        return f"MS{ms} collided -> retry next frame"
    released = [s for s, v in reserved.items() if v == ms]
    for s in released:
        del reserved[s]                # silence frees the reservation
    return f"MS{ms} went silent; released {released}"

print(request_slot(1, True))       # MS1 reserved slot 0
print(request_slot(2, True))       # MS2 reserved slot 1`,
            },
            examQuestions: [
              {
                q: "What do you mean by multiple access techniques? Discuss DAMA and PRMA techniques of Multiple access.",
                marks: 7,
                appearances: ["Jun 2025"],
                outline: [
                  "Multiple access: coordinated sharing of one medium by many users",
                  "Family: FDMA/TDMA/CDMA/SDMA divide frequency, time, code, space",
                  "DAMA: central controller grants channels on demand; used in satellite systems",
                  "DAMA loop: request -> assign -> use -> release to the pool",
                  "PRMA: slotted-ALOHA contention for free TDMA slots",
                  "Winner reserves the slot for the whole talk spurt; release on silence",
                  "Statistical gain: 12 users at 40% activity on 8 slots",
                ],
              },
              {
                q: "Explain how priority based multiple access schemes can be implemented.",
                marks: 7,
                appearances: ["May 2023"],
                outline: [
                  "Carry a priority field in each packet header",
                  "Differentiate contention: shorter backoff windows or dedicated priority slots",
                  "Reservation precedence: control/signalling traffic pre-empts best-effort",
                  "Retransmissions of critical data join the priority class",
                  "Example: voice > signalling > data ordering in a cellular frame",
                  "Fairness note: priorities starve low classes — bound the share",
                ],
              },
              {
                q: "Contrast fixed assignment (FDMA/TDMA) with demand assignment (DAMA) and statistical reservation (PRMA).",
                marks: 7,
                outline: [
                  "Fixed: channels owned permanently — simple, wasteful at low duty cycle",
                  "DAMA: granted per call — efficient for long, coherent sessions",
                  "PRMA: granted per talk spurt — efficient for bursty packet voice",
                  "Signalling cost grows from fixed -> DAMA -> PRMA",
                  "Collision risk appears only in PRMA (slotted ALOHA contention)",
                  "Choose by traffic pattern: circuit calls vs bursty speech vs data",
                ],
              },
            ],
          },
          {
            number: "1.7",
            title: "Cellular network organization and operation",
            body: [
              "A cellular network replaces one high-power transmitter with many low-power cells, each served by a base transceiver station and reusing frequencies in a spatial pattern. The organization stacks into layers: the mobile station (handset + SIM), the base transceiver stations at cell sites, base station controllers managing dozens of BTSs (channel assignment, handover decisions), and the mobile switching centre routing calls into the PSTN, assisted by the HLR (home subscriber register), VLR (visitor register) and AuC (authentication centre). Cluster size N sets reuse: adjacent clusters reuse the same frequencies, and reuse distance D = √(3N)·R keeps co-channel interference bounded.",
              "Operation is a conversation of measurements. A powered mobile scans broadcast channels, camps on the strongest cell, and continuously reports neighbour signal strengths; the BSC uses those reports to decide handovers; the MSC anchors the call across inter-BSC and inter-MSC boundaries. Why 'cellular'? Because coverage is a honeycomb of cells whose frequencies repeat — Jun 2025 Q2a asked architecture, working and exactly that question; the expected answer names frequency reuse as the defining property, not the hexagonal drawing alone.",
              "Handoff (handover) migrates an ongoing call between channels or cells; the decision uses signal-strength thresholds with hysteresis so a fading edge does not ping-pong the call between cells. Power control keeps every mobile's received level equal at the base — vital in CDMA against the near-far problem and useful everywhere against interference. Sectorization splits a cell into 3 × 120° or 6 × 60° sectors with directional antennas, cutting co-channel interference by roughly 6 dB for three sectors and letting the same spectrum carry more traffic. Jun 2025 Q2b asked for crisp definitions of handoff and sectorization; Dec 2024 Q2a paired the cellular architecture with 'what is hand off'.",
              "Exam angle: draw the MS-BTS-BSC-MSC stack, name the databases, walk one mobile-originated call (camp -> request on RACH -> authenticate -> traffic channel assigned), and define hard versus soft handover in one line each. Traps: claiming cells exist to 'increase range' — they increase capacity by reuse over a fixed range — and omitting hysteresis from the handoff criterion, which is the standard marking point.",
            ],
            keyTerms: [
              { term: "Frequency reuse", definition: "The same channels reused in spaced cells; cluster size N and reuse distance D = √(3N)·R bound interference." },
              { term: "HLR / VLR", definition: "Home register holds the subscriber's profile; the visited register holds roaming users locally." },
              { term: "Handoff (handover)", definition: "Migration of an ongoing call to a new channel or cell, decided on thresholds with hysteresis." },
              { term: "Power control", definition: "Adjusting transmit levels so all mobiles arrive equally strong — anti-near-far and anti-interference." },
              { term: "Sectorization", definition: "Splitting a cell into 120°/60° directional sectors to cut interference and multiply capacity." },
            ],
            table: {
              caption: "Handover types — one line each is the exam answer.",
              headers: ["Handover", "Between", "Decided by", "Note"],
              rows: [
                ["Intra-cell", "channels within one cell", "BSC", "interference clean-up, no cell change"],
                ["Intra-BSC (inter-cell)", "cells under one BSC", "BSC", "fastest external handover; MSC unaware"],
                ["Inter-BSC", "cells of two BSCs", "MSC", "MSC reroutes the trunk"],
                ["Inter-MSC", "cells of two MSCs", "anchor MSC", "old MSC relays the call to the new one"],
                ["Hard (break-before-make)", "any GSM handover", "measurement reports", "brief silence at the switch"],
                ["Soft (make-before-break)", "CDMA/UMTS cells", "RAKE combining", "no gap; both links carry the call"],
              ],
            },
            bullets: [
              "Stack: MS -> BTS -> BSC -> MSC; databases HLR, VLR, AuC, EIR.",
              "Cells exist for capacity through frequency reuse, not for range.",
              "Cluster size N; reuse distance D = √(3N)·R bounds co-channel interference.",
              "Mobile-originated call: camp on BCH -> access on RACH -> authenticate -> TCH.",
              "Handoff criterion: neighbour stronger by hysteresis (≈ 3 dB) for a dwell time.",
              "Hard handover = break-before-make (GSM); soft = make-before-break (CDMA/UMTS).",
              "Power control: equalizes received levels; mandatory in CDMA, useful in GSM.",
              "Sectorization: 3 × 120° sectors cut interference ≈ 6 dB and triple reuse per cell.",
            ],
            diagram: {
              kind: "layers",
              title: "Cellular architecture, top down",
              caption:
                "Radio lives at the bottom; switching and databases at the top; the BSC owns the handover decision.",
              layers: [
                { label: "MSC + GMSC", note: "call switching, gateway to PSTN; HLR/VLR/AuC/EIR databases" },
                { label: "BSC", note: "controls dozens of BTSs — channels, handover decisions" },
                { label: "BTS", note: "transceivers at the cell site; the actual radio" },
                { label: "MS", note: "handset + SIM; camps, measures, reports" },
              ],
            },
            callout: {
              type: "exam",
              title: "Q2 of two papers lived here",
              body: "Jun 2025 Q2a asked cellular architecture and 'why is it called cellular network' (7), Jun 2025 Q2b asked to define handoff and sectorization (7), and Dec 2024 Q2a asked architecture plus 'what is hand off' (7). One prepared diagram (MS-BTS-BSC-MSC) plus four definitions covers all three questions.",
            },
            examQuestions: [
              {
                q: "Write about architecture and working of a cellular communication system. Why is it called cellular network?",
                marks: 7,
                appearances: ["Jun 2025"],
                outline: [
                  "Architecture: MS, BTS, BSC, MSC with HLR/VLR/AuC/EIR",
                  "Coverage split into cells, each a low-power BTS",
                  "Frequencies reused across clusters; D = √(3N)·R bounds interference",
                  "Working: camp on broadcast channel, measure neighbours, report",
                  "BSC decides handover; MSC switches and anchors calls",
                  "'Cellular' = honeycomb of reused frequencies — reuse is the defining property",
                  "One sketch: cells + cluster + MS-BTS-BSC-MSC stack",
                ],
              },
              {
                q: "Draw and explain the architecture of cellular system. What is Hand off?",
                marks: 7,
                appearances: ["Dec 2024"],
                outline: [
                  "Draw MS -> BTS -> BSC -> MSC -> PSTN with HLR/VLR/AuC databases",
                  "BTS: radio per cell; BSC: channel + handover control for many BTSs",
                  "MSC: switching, gateway; HLR holds profiles, VLR holds roamers",
                  "Handoff: migrating an ongoing call to a new channel/cell",
                  "Criterion: neighbour stronger by hysteresis, confirmed over a dwell time",
                  "Types: intra-cell, intra-BSC, inter-BSC, inter-MSC; hard vs soft",
                ],
              },
              {
                q: "Define the terms: (i) handoff, (ii) sectorization.",
                marks: 7,
                appearances: ["Jun 2025"],
                outline: [
                  "Handoff: transfer of an ongoing call to another channel/cell without termination",
                  "Triggered by signal strength + hysteresis; hard (break-before-make) vs soft",
                  "Purposes: maintain the link at cell edge, balance load, clear interference",
                  "Sectorization: one cell site serves 3-6 directional sectors",
                  "Each sector gets its own channels — same spectrum reused in-site",
                  "Effect: co-channel interference down ≈ 6 dB (3 sectors), capacity up",
                ],
              },
              {
                q: "Explain the role of power control in cellular systems and why CDMA cannot work without it.",
                marks: 7,
                outline: [
                  "Goal: all mobiles arrive at the base with near-equal received power",
                  "Open-loop estimate at access; closed-loop corrections hundreds of times/s",
                  "Benefits in TDMA/FDMA: less interference, longer battery life",
                  "CDMA: all users share one band — one strong signal drowns the rest",
                  "Near-far problem: without control, capacity collapses to the closest user",
                  "Also used on the downlink to balance cell-edge vs near users",
                ],
              },
            ],
          },
          {
            number: "1.8",
            title: "Traffic engineering: GoS, lost calls cleared and Poisson arrivals",
            body: [
              "Traffic engineering sizes a network's circuits against demand. Calls are modelled as a Poisson arrival process: arrivals are random and independent at a steady average rate λ, and the process is memoryless — the property examiners want named, since it makes the mathematics tractable. Holding times are exponential with mean 1/μ. Offered traffic A = λ/μ is measured in Erlangs: one Erlang is one circuit fully busy for an hour — 60 calls of 1 minute each also load 1 Erlang.",
              "The lost calls cleared (LCC) model assumes blocked calls leave immediately and never return — the classical infinite-sources, lost-calls-cleared system. Its blocking probability is the Erlang-B formula: P_B = (A^N/N!) / Σ_{k=0..N} A^k/k! for N circuits. Grade of Service (GoS) is that blocking probability measured in the busy hour — 2% is the classical design target, written P.02. The recursive form P(k) = A·P(k−1)/(k + A·P(k−1)) starting from P(0) = 1 makes hand calculation and code trivial.",
              "A worked sizing: a cell must carry A = 2 Erlangs at GoS ≤ 2%. With N = 5 circuits, Erlang-B gives P_B ≈ 3.7% — too high; N = 6 gives ≈ 1.2% — accepted, so six trunks are provisioned. Read the same table in reverse: at 2% GoS, 1 circuit carries 0.02 E, 5 carry about 1.66 E, 20 carry about 15.2 E — trunking efficiency grows with group size, which is why small cells with few channels per cell waste capacity, and why sectorization's interference win trades against trunking efficiency.",
              "Exam angle: define Poisson arrivals, Erlang, LCC and GoS in one line each, then work one Erlang-B number — the recursion makes it a three-minute calculation. Traps: quoting Erlang-B for queueing systems (that is Erlang-C, lost calls delayed), and equating offered load with carried load — offered A includes blocked attempts; carried = A(1 − P_B). State the assumptions explicitly: infinite sources, Poisson arrivals, exponential holding times, blocked calls cleared.",
            ],
            keyTerms: [
              { term: "Poisson arrival process", definition: "Random, independent, memoryless call arrivals at average rate λ — the standard call model." },
              { term: "Erlang", definition: "Unit of traffic intensity: one circuit busy for the whole hour; A = λ/μ." },
              { term: "Lost calls cleared (LCC)", definition: "Assumption that blocked calls leave immediately — yields the Erlang-B formula." },
              { term: "Grade of Service (GoS)", definition: "Busy-hour blocking probability, e.g. P.02 = 2% of call attempts blocked." },
              { term: "Erlang-B", definition: "P_B = (A^N/N!) / Σ A^k/k! — blocking probability of an N-trunk LCC system." },
            ],
            bullets: [
              "Poisson arrivals: independent, memoryless, rate λ; holding times exponential, mean 1/μ.",
              "Offered traffic A = λ/μ in Erlangs; 1 E = one circuit busy an hour.",
              "LCC: blocked calls cleared, never retried — the Erlang-B assumption set.",
              "Erlang-B recursion: P(k) = A·P(k−1)/(k + A·P(k−1)), P(0) = 1.",
              "GoS = busy-hour blocking probability; classical target P.02.",
              "Sizing example: A = 2 E at 2% GoS needs N = 6 trunks (N = 5 gives 3.7%).",
              "Trunking efficiency rises with group size: 20 trunks carry ≈ 15.2 E at 2%.",
              "Offered ≠ carried: carried = A(1 − P_B).",
            ],
            diagram: {
              kind: "flow",
              title: "A call through a lost-calls-cleared trunk group",
              caption:
                "The LCC contract: no queueing, no retry — a blocked call is simply gone and counted in the GoS.",
              steps: [
                { label: "Call attempt", note: "Poisson arrival, rate λ" },
                { label: "Inspect N trunks", note: "any free circuit?" },
                { label: "Free -> connect", note: "holding time exponential, 1/μ" },
                { label: "All busy -> blocked", note: "call cleared, never queued" },
                { label: "Measure", note: "A = λ/μ Erlangs, GoS = P_B" },
              ],
            },
            callout: {
              type: "tip",
              title: "Erlang-B in three minutes",
              body: "The recursion P(0) = 1, P(k) = A·P(k−1)/(k + A·P(k−1)) reaches P(N) = P_B with N small integer steps — for A = 2, N = 5: 0.667, 0.4, 0.211, 0.095, 0.037. Practise this trace once and the sizing question becomes free marks.",
            },
            codeExample: {
              language: "python",
              caption: "erlangb.py — the recursion, runnable",
              code: `def erlang_b(a: float, n: int) -> float:
    # P(0) = 1 ; P(k) = a*P(k-1) / (k + a*P(k-1)) ; P(N) = blocking probability
    p = 1.0
    for k in range(1, n + 1):
        p = a * p / (k + a * p)
    return p

print(round(erlang_b(2.0, 5), 4))    # 0.0367 -> 3.7% blocking, too high for P.02

trunks = 1
while erlang_b(2.0, trunks) > 0.02:  # dimension for a 2% GoS
    trunks += 1
print(trunks)                        # 6 circuits carry 2 E within GoS`,
            },
            examQuestions: [
              {
                q: "Define grade of service, Erlang, lost calls cleared and the Poisson arrival process. Size a trunk group for A = 2 Erlangs at GoS ≤ 2%.",
                marks: 7,
                outline: [
                  "Poisson arrivals: independent, memoryless, rate λ",
                  "Holding times exponential with mean 1/μ; A = λ/μ Erlangs",
                  "LCC: blocked calls leave, never queue or retry",
                  "GoS: busy-hour blocking probability, e.g. P.02",
                  "Erlang-B: P_B = (A^N/N!) / Σ_{k=0..N} A^k/k!",
                  "Recursion trace for A = 2: N = 5 → 3.7%, N = 6 → 1.2%",
                  "Answer: provision 6 trunks",
                ],
              },
              {
                q: "Why does trunking efficiency improve with group size? Support with Erlang-B numbers.",
                marks: 7,
                outline: [
                  "Statistical sharing: large groups average out demand spikes",
                  "At 2% GoS: 1 trunk = 0.02 E, 5 trunks ≈ 1.66 E, 20 trunks ≈ 15.2 E",
                  "Per-trunk capacity grows from 2% to 76% of one Erlang",
                  "Implication: few large cells beat many small ones for trunking",
                  "Trade-off: small cells win on reuse and coverage, lose on trunking",
                  "Sectorization helps interference but shrinks each trunk group",
                ],
              },
              {
                q: "State the assumptions behind the Erlang-B formula and one situation where each fails.",
                marks: 7,
                outline: [
                  "Infinite sources — fails for small closed user groups",
                  "Poisson arrivals — fails for scheduled traffic or re-dialling storms",
                  "Exponential holding times — heavy-tailed call lengths distort P_B",
                  "Blocked calls cleared — fails when callers retry (lost calls held/delayed)",
                  "Alternatives: Erlang-C (queueing), delayed-call models",
                  "Busy-hour measurement keeps the model honest in practice",
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
      title: "GSM, GPRS and 2G+ Systems",
      summary:
        "Unit II is the 2G story: GSM's services and subsystem architecture, its 200 kHz FDMA-times-TDMA radio interface with the logical channel tree, localization and calling with the four handover types, the A3/A8/A5 security trio, then the data upgrades HSCSD and GPRS (SGSN, GGSN, interfaces, channels, mobility states) and the neighbouring standards DECT, TETRA and UMTS.",
      chapter: {
        number: "02",
        title: "From GSM to GPRS and Beyond",
        intro:
          "Unit II covers GSM services and system architecture, the radio interface and logical channels, protocols, localization and calling, handover, security, HSCSD, GPRS architecture with its interfaces, channels and mobility management, and the surrounding systems DECT, TETRA and UMTS.",
        inOneBreath:
          "GSM = services (teleservices, bearer, supplementary) + MS/BSS/NSS/OSS architecture + 124 FDMA carriers of 8 TDMA slots + a logical channel tree (broadcast, common, dedicated) + LAPDm under RR/MM/CM + location areas routed via HLR/MSRN + handover in four scopes + A3/A8/A5 security with TMSI; HSCSD glues slots for 57.6 kbit/s, GPRS overlays packet switching with SGSN/GGSN, GTP tunnels, attach and PDP contexts; DECT is cordless TDMA/TDD, TETRA is trunked 4-slot TDMA for public safety, UMTS is GSM's W-CDMA heir at 5 MHz.",
        sections: [
          {
            number: "2.1",
            title: "GSM services and system architecture",
            body: [
              "GSM organizes what it offers into three service families. Teleservices are complete communications for people: telephony, emergency calls, SMS (a store-and-forward service of up to 160 characters), fax and voicemail. Bearer services carry user data transparently: synchronous and asynchronous data at up to 9.6 kbit/s over circuit-switched channels. Supplementary services modify or enhance calls: call forwarding, call barring, call waiting, caller identification (CLIP/CLIR), conference calling — all of them are how the Dec 2024 Q3b 'types of mobile services provided by GSM' question is graded.",
              "The architecture divides into four subsystems. The mobile station is the mobile equipment plus the SIM card — the SIM holds the IMSI identity and the authentication key Ki, so a subscriber, not a handset, owns the line. The base station subsystem contains the BTS transceivers at cell sites and the BSC controlling dozens of them (channel assignment, handover decisions). The network switching subsystem centres on the MSC (call switching), the GMSC (gateway to the PSTN), and the databases: HLR (home subscriber profiles), VLR (currently roaming users), AuC (authentication keys), EIR (equipment IMEI lists). The operation subsystem manages the whole network remotely.",
              "The air interface arithmetic anchors everything: 25 MHz paired spectrum — uplink 890-915 MHz, downlink 935-960 MHz — split into 124 FDMA carriers of 200 kHz, each carrying an 8-slot TDMA frame of 4.615 ms with 114 payload bits per slot, GMSK-modulated at 270.833 kbit/s raw. Duplexing is FDD with a fixed 45 MHz up/down split. DCS 1800 repeats the design in a second band with 374 carriers, which is how two operators share a country.",
              "Exam angle: draw the four subsystems with their elements and one job each, name the three service families with two examples per family, and quote the air-interface numbers (124 × 200 kHz × 8 slots). Traps: putting the SIM in the BSS (it belongs to the MS), confusing HLR (permanent profile) with VLR (temporary visitor data), and forgetting the GMSC — the question 'which node talks to the PSTN' is a standard probe.",
            ],
            keyTerms: [
              { term: "SIM", definition: "Subscriber identity module holding IMSI and Ki — the subscriber's identity travels with the card, not the handset." },
              { term: "HLR", definition: "Home location register — the permanent database of every subscriber's profile and current location area." },
              { term: "VLR", definition: "Visitor location register — temporary database of subscribers currently roaming in an MSC's area." },
              { term: "BTS / BSC", definition: "Base transceiver station is the radio at the cell site; the base station controller manages many BTSs." },
              { term: "GMSC", definition: "Gateway MSC — the switch that terminates PSTN-originated calls into the GSM network." },
            ],
            table: {
              caption: "GSM subsystems and their elements.",
              headers: ["Subsystem", "Elements", "Job"],
              rows: [
                ["Mobile Station", "ME + SIM (IMSI, Ki)", "user equipment; SIM carries identity and keys"],
                ["Base Station Subsystem", "BTS, BSC", "radio transceivers; channel and handover control"],
                ["Network Switching Subsystem", "MSC, GMSC, HLR, VLR, AuC, EIR", "call switching, registers, authentication"],
                ["Operation Subsystem", "OMC, maintenance terminals", "network management and monitoring"],
              ],
            },
            bullets: [
              "Teleservices: telephony, emergency, SMS (160 chars), fax, voicemail.",
              "Bearer services: sync/async data at up to 9.6 kbit/s circuit-switched.",
              "Supplementary: forwarding, barring, waiting, CLIP/CLIR, conference.",
              "MS = ME + SIM; the SIM holds IMSI and Ki — identity follows the card.",
              "BSS = BTS (radio) + BSC (controls dozens, owns handover decisions).",
              "NSS = MSC, GMSC, HLR, VLR, AuC, EIR — switching plus registers.",
              "Air interface: 124 × 200 kHz carriers × 8 slots; GMSK at 270.833 kbit/s raw.",
              "HLR = permanent profile; VLR = temporary visitor data — never swap them.",
            ],
            diagram: {
              kind: "layers",
              title: "GSM architecture, top down",
              caption:
                "Radio at the bottom, intelligence and databases on top; the SIM rides with the subscriber.",
              layers: [
                { label: "OSS", note: "operations & maintenance of the whole network" },
                { label: "NSS", note: "MSC · GMSC · HLR · VLR · AuC · EIR" },
                { label: "BSS", note: "BSC controls dozens of BTSs; handover and channels" },
                { label: "MS", note: "mobile equipment + SIM (IMSI, Ki)" },
              ],
            },
            callout: {
              type: "exam",
              title: "Services were asked point-blank in Dec 2024",
              body: "Dec 2024 Q3b: 'Discuss the different types of mobile services provided by GSM? Explain each in brief' (7 marks). The expected skeleton is the three families — teleservices, bearer services, supplementary services — with two examples each; adding SMS's store-and-forward mechanism earns the depth mark.",
            },
            examQuestions: [
              {
                q: "Discuss the different types of mobile services provided by GSM? Explain each in brief.",
                marks: 7,
                appearances: ["Dec 2024"],
                outline: [
                  "Teleservices: complete person-to-person services",
                  "Examples: telephony, emergency calls, SMS (160 chars, store-and-forward), fax",
                  "Bearer services: transparent data carriage up to 9.6 kbit/s, sync and async",
                  "Supplementary services: call forwarding, barring, waiting, CLIP/CLIR",
                  "Short message service path: SMSC relays via the signalling network",
                  "One example per family with one sentence of mechanism",
                ],
              },
              {
                q: "Explain the GSM system architecture with a neat diagram, giving the function of each subsystem and element.",
                marks: 7,
                outline: [
                  "MS = ME + SIM; SIM holds IMSI and Ki — subscriber owns the line",
                  "BSS: BTS transceivers + BSC controlling channels and handover",
                  "NSS: MSC switches calls; GMSC gates PSTN traffic",
                  "HLR: permanent profiles; VLR: roaming users' temporary data",
                  "AuC: authentication vectors (RAND, SRES, Kc); EIR: IMEI lists",
                  "OSS: operations and maintenance",
                  "Interfaces: Um (air), Abis (BTS-BSC), A (BSC-MSC)",
                ],
              },
              {
                q: "What is the role of the HLR, VLR and AuC when a subscriber roams to a new city? Walk through the registers touched.",
                marks: 7,
                outline: [
                  "New MSC's VLR copies the subscriber's profile from the home HLR",
                  "HLR records the new location area for routing incoming calls",
                  "AuC supplies authentication vectors so the visit can be verified",
                  "Incoming call: GMSC interrogates HLR -> HLR returns VLR/MSC address",
                  "Outgoing calls: VLR serves the data locally — no home round-trip",
                  "Roaming cancellation: HLR instructs the old VLR to purge",
                ],
              },
            ],
          },
          {
            number: "2.2",
            title: "The radio interface and logical channels",
            body: [
              "The radio interface Um carries everything GSM does, and it is organized as logical channels — purpose-dedicated slots riding on the same physical 200 kHz carriers. Three families cover every purpose. Broadcast channels flow one way, base to all: FCCH (frequency correction — the pure carrier tone every mobile tunes to), SCH (synchronization — frame number and base-station identity), BCCH (broadcast control — cell parameters and the list of neighbours). Common control channels coordinate access: PCH pages a mobile with an incoming call, AGCH assigns a channel to a requester, and RACH is the lone uplink contention channel where mobiles ask for service.",
              "Dedicated channels belong to one conversation. SDCCH (standalone dedicated control channel) carries the slow signalling of call setup, registration and SMS before voice starts. The TCH (traffic channel) carries the payload itself — TCH/FS at 13 kbit/s of coded speech. SACCH accompanies every dedicated channel with slow measurements (signal levels, timing advance) on a parallel loop, and FACCH steals TCH bursts in emergencies (handover commands) using the stealing flags in each burst. The pyramid below is the memorization scaffold: broadcast on top, common control in the middle, dedicated channels with traffic at the base.",
              "The physical layer packages these into burst types: the normal burst (114 data bits, 26-bit training sequence, 8.25-bit guard), the frequency-correction burst (FCCH's pure tone), the synchronization burst (SCH's long training sequence), the access burst (RACH's short preamble with a big guard for unknown distance), and the dummy burst (filler). Timing advance keeps every mobile's bursts landing inside their slots despite distance: the base commands 0-63 bit times of advance, one bit-time per ~550 m of round-trip distance, which caps a GSM cell at roughly 35 km.",
              "Exam angle: draw the logical channel tree with the three families and the direction arrows (RACH is the only uplink common channel — a favourite check), map each logical channel to its burst type, and reproduce the 260→456→4×114 speech chain from section 1.4 as evidence the slots add up. Traps: calling FCCH and SCH control channels of the common family (they are broadcast), and forgetting SACCH's measurement role — it is the channel that feeds the handover decision of section 2.3.",
            ],
            keyTerms: [
              { term: "BCCH", definition: "Broadcast control channel — the cell's own parameters, transmitted continuously to all." },
              { term: "RACH", definition: "Random access channel — the uplink contention channel where mobiles request service." },
              { term: "SDCCH", definition: "Standalone dedicated control channel — slow signalling for setup, registration, SMS." },
              { term: "TCH/FS", definition: "Full-rate traffic channel — 13 kbit/s of coded speech over 22.8 kbit/s gross." },
              { term: "Timing advance", definition: "0-63 bit-times of transmit offset commanded by the base; caps cell radius near 35 km." },
            ],
            bullets: [
              "Broadcast (down): FCCH (tone), SCH (sync + identity), BCCH (cell parameters).",
              "Common control: PCH (paging), AGCH (assignment) down; RACH up — the only uplink common channel.",
              "Dedicated: SDCCH for slow signalling; TCH for payload; SACCH for measurements.",
              "FACCH steals TCH bursts for urgent messages (handover) via stealing flags.",
              "Burst types: normal, frequency-correction, synchronization, access, dummy.",
              "Timing advance 0-63 bit-times → cell radius ≈ 35 km maximum.",
              "Speech chain: 260 bits → 456 coded → 4 bursts × 114 interleaved bits.",
            ],
            diagram: {
              kind: "pyramid",
              title: "The GSM logical channel tree",
              caption:
                "Broadcast reaches everyone, common control admits newcomers, dedicated channels carry the conversation.",
              tiers: [
                { label: "Broadcast (down)", note: "FCCH · SCH · BCCH — every mobile tunes and camps here" },
                { label: "Common control", note: "PCH · AGCH (down) · RACH (up) — paging and admission" },
                { label: "Dedicated control", note: "SDCCH (setup, SMS) · SACCH (measurements) · FACCH (stolen bursts)" },
                { label: "Traffic", note: "TCH/FS 13 kbit/s voice · TCH data — the payload itself" },
              ],
            },
            callout: {
              type: "tip",
              title: "One arrow to remember",
              body: "Direction arrows are where marks hide: FCCH, SCH, BCCH, PCH, AGCH flow downlink only; RACH flows uplink only; SACCH and FACCH ride alongside whichever dedicated channel is active. Draw the pyramid with arrows and the examiner's direction-check questions are pre-answered.",
            },
            codeExample: {
              language: "python",
              caption: "gsm_bits.py — the slot arithmetic behind every channel",
              code: `burst_bits = 156.25                    # one normal burst: 114 data + training + tails
frame_ms = 4.615                       # 8 bursts share the 200 kHz carrier
raw_rate = burst_bits * 8 / (frame_ms / 1000)
print(round(raw_rate))                 # 270833 bit/s — GSM's raw carrier rate

voice_bits, coded_bits = 260, 456      # speech coder -> channel coder output
print(coded_bits // 4)                 # 114 bits per burst over 4 interleaved bursts
# timing advance: 1 bit-time ≈ 550 m round trip -> 63 * 550/2 ≈ 35 km cell radius`,
            },
            examQuestions: [
              {
                q: "Explain the GSM logical channels, classifying them into broadcast, common control and dedicated channels with directions and purposes.",
                marks: 7,
                outline: [
                  "Broadcast (down): FCCH tone, SCH sync/identity, BCCH cell parameters",
                  "Common control: PCH and AGCH downlink; RACH uplink contention",
                  "Dedicated: SDCCH slow signalling; SACCH measurements; FACCH stolen bursts",
                  "Traffic: TCH/FS 13 kbit/s; TCH data variants",
                  "Direction arrows: RACH is the sole uplink common channel",
                  "Map channels to burst types (normal, FCCH, SCH, access, dummy)",
                ],
              },
              {
                q: "Explain timing advance in GSM and how it limits the cell radius.",
                marks: 7,
                outline: [
                  "Distant mobiles' bursts arrive late and overlap the next slot",
                  "Base commands timing advance 0-63 bit-times of early transmission",
                  "One bit-time ≈ 550 m of round-trip distance",
                  "Maximum advance 63 × 550 / 2 ≈ 17 km one-way ≈ 35 km radius",
                  "Access burst has a large guard for the first, unknown-distance contact",
                  "Beyond 35 km: extended-cell techniques or a second cell",
                ],
              },
              {
                q: "What are GSM burst types and which logical channel does each serve?",
                marks: 7,
                outline: [
                  "Normal burst: 114 data bits + 26-bit training + guard — TCH, SACCH, FACCH",
                  "Frequency-correction burst: pure tone — FCCH",
                  "Synchronization burst: long training + frame number — SCH",
                  "Access burst: short preamble, large guard — RACH",
                  "Dummy burst: filler on idle broadcast slots — BCCH continuity",
                  "Training sequence enables channel estimation and equalization",
                ],
              },
            ],
          },
          {
            number: "2.3",
            title: "Localization, calling and handover",
            body: [
              "Localization is how the network finds a mobile without searching the whole country. The coverage area is partitioned into location areas (groups of cells); a mobile updates its location on area change, periodically, or on power-up. The HLR records the current VLR address, the VLR holds the visitor's data, and a TMSI (temporary identity) replaces the IMSI on the air so eavesdroppers cannot track a subscriber. Paging then only sweeps one location area, not the nation — that trade (update signalling cost versus paging cost) is the design heart of localization.",
              "A mobile-terminated call walks the chain: PSTN routes to the GMSC; the GMSC interrogates the HLR; the HLR fetches an MSRN (mobile station roaming number) from the visited VLR; the call is routed to the visited MSC; that MSC pages across the location area; the mobile answers on RACH, a channel is assigned, and the conversation starts. Mobile-originated calls are simpler — the mobile requests a channel on RACH and signals the called number over SDCCH. May 2023 Q2b's 'handover and services available in GSM' rides on exactly this machinery.",
              "Handover comes in four scopes, decided from SACCH measurement reports with hysteresis: intra-cell (new channel, same cell), intra-BSC (neighbouring cell, same controller — the fast case), inter-BSC (a second controller; the MSC reroutes), and inter-MSC (a second switch; the anchor MSC keeps the call and relays). Measurement is mobile-assisted: the handset reports neighbour levels every 480 ms, the BSC decides, and the FACCH carries the handover command; after switching, the mobile sends handover complete and the old channel is released.",
              "Exam angle: draw the MTC routing chain (PSTN → GMSC → HLR → MSRN → visited MSC → paging → RACH), list the four handover scopes with who decides, and state why hysteresis exists. Traps: paging the whole network instead of one location area, forgetting the MSRN (the temporary routing number is what actually carries the call), and describing handover as MSC-decided — in GSM the BSC decides except at inter-BSC/inter-MSC scope.",
            ],
            keyTerms: [
              { term: "Location area", definition: "A group of cells within which a mobile is paged; updates fire on area change or periodically." },
              { term: "TMSI", definition: "Temporary mobile subscriber identity used on the air instead of the IMSI — anti-tracking." },
              { term: "MSRN", definition: "Mobile station roaming number — the temporary routing number that steers a call to the visited MSC." },
              { term: "MAHO", definition: "Mobile-assisted handover — the handset measures neighbours and reports; the network decides." },
              { term: "Hysteresis", definition: "The margin (≈ 3 dB) by which a neighbour must beat the current cell before handover fires." },
            ],
            bullets: [
              "Location areas bound paging; updates on change, timer, or power-up.",
              "TMSI hides the IMSI over the air; re-allocated at each location update.",
              "MTC: PSTN -> GMSC -> HLR -> MSRN from VLR -> visited MSC -> paging -> RACH.",
              "MO call: RACH request -> SDCCH signalling -> TCH assigned.",
              "Handover scopes: intra-cell, intra-BSC, inter-BSC, inter-MSC.",
              "MAHO: mobile measures (SACCH), BSC decides, FACCH carries the command.",
              "Hysteresis prevents ping-ponging at cell borders.",
              "Inter-MSC handover keeps the anchor MSC in the call path.",
            ],
            diagram: {
              kind: "flow",
              title: "Routing a mobile-terminated call",
              caption:
                "The MSRN is the trick: a temporary number that lets the PSTN's own signalling find a moving subscriber.",
              steps: [
                { label: "PSTN dials", note: "MSISDN routes to the GMSC" },
                { label: "Ask HLR", note: "which VLR serves this subscriber?" },
                { label: "Fetch MSRN", note: "visited VLR returns a routing number" },
                { label: "Route call", note: "GMSC -> visited MSC via MSRN" },
                { label: "Page", note: "across the location area on PCH" },
                { label: "Answer", note: "RACH -> channel assigned -> speech" },
              ],
            },
            callout: {
              type: "exam",
              title: "Asked in May 2023",
              body: "May 2023 Q2b: 'Describe the handover and services available in GSM' (7 marks) — a compound question. Answer as two halves: the four handover scopes with the measurement-decision-command cycle, then the service families from section 2.1. Examiners mark the halves separately; omitting one costs 3-4 marks.",
            },
            codeExample: {
              language: "python",
              caption: "handover.py — the hysteresis decision",
              code: `HYSTERESIS_DB = 3.0                     # margin against ping-pong

def needs_handover(rxlev_current: float, rxlev_neighbour: float) -> bool:
    # switch only when the neighbour is better by more than the margin
    return rxlev_neighbour > rxlev_current + HYSTERESIS_DB

print(needs_handover(-75, -77))         # False: margin not crossed
print(needs_handover(-75, -71))         # True: 4 dB stronger -> trigger
# real BSCs also require the condition to hold for a dwell time`,
            },
            examQuestions: [
              {
                q: "Describe the handover and services available in GSM.",
                marks: 7,
                appearances: ["May 2023"],
                outline: [
                  "Handover purpose: keep the call alive across cell changes",
                  "Scopes: intra-cell, intra-BSC, inter-BSC, inter-MSC",
                  "MAHO cycle: SACCH measurements -> BSC decision -> FACCH command -> complete",
                  "Hysteresis prevents ping-pong at borders",
                  "Hard handover (break-before-make) is GSM's mode",
                  "Services: teleservices (telephony, SMS), bearer (9.6 kbit/s data), supplementary",
                ],
              },
              {
                q: "Explain localization and paging in GSM. Why are location areas neither one cell nor the whole country?",
                marks: 7,
                outline: [
                  "Location areas group cells; mobiles update on change/timer/power-up",
                  "Paging sweeps one LA on PCH, not the whole network",
                  "Small LAs: accurate paging, heavy update signalling",
                  "Large LAs: cheap updates, expensive page sweeps",
                  "TMSI keeps the identity hidden across updates",
                  "HLR/VLR records make the routing chain (MSRN) work",
                ],
              },
              {
                q: "Compare the four GSM handover types and name who decides each.",
                marks: 7,
                outline: [
                  "Intra-cell: new channel, same cell — BSC, for interference repair",
                  "Intra-BSC: neighbour cell, same controller — BSC; fastest, MSC unaware",
                  "Inter-BSC: two controllers — MSC reroutes the trunk",
                  "Inter-MSC: two switches — anchor MSC relays, new MSC takes over locally",
                  "All use MAHO measurement reports with hysteresis",
                  "FACCH delivers the command; handover complete releases the old channel",
                ],
              },
            ],
          },
          {
            number: "2.4",
            title: "GSM protocols and security",
            body: [
              "GSM's signalling protocol stack mirrors OSI with three layer-3 monsters on top of the LAPDm data link. Radio Resource management (RR) owns the radio itself: channel assignment, measurement reports, handover execution. Mobility Management (MM) owns identity and location: authentication, TMSI allocation, location updates, attach/detach. Connection Management (CM) owns the user's session: call control (CC), supplementary services (SS), and short message service (SMS). LAPDm below frames and acknowledges these messages on the air interface; above, SS7/MAP carries the same conversations between network nodes (HLR-VLR-MSC).",
              "Security is a trio of mechanisms, all keyed from the SIM's secret Ki. Authentication: the AuC generates RAND; the SIM computes SRES = A3(Ki, RAND); the network compares — a cloned SIM without Ki cannot answer. Key generation: Kc = A8(Ki, RAND) derives a session cipher key from the same challenge. Ciphering: the A5 stream cipher, clocked by Kc and the frame number, encrypts every burst on the Um interface; three variants (A5/1 strong, A5/2 weak, A5/3 newer) trade strength and export law.",
              "Identity privacy and equipment checking complete the protection. The TMSI replaces the IMSI over the air and changes at every location update, so passive listeners cannot track a subscriber. The EIR keeps white, grey and black IMEI lists, and stolen or defective handsets are refused at network entry. Note the scope honestly: GSM protects the radio path and the network against cloning — it does not encrypt the core network, and A5/2 was broken academically, which is why A5/3 exists.",
              "Exam angle: draw the challenge-response exchange as three boxes (AuC/SIM/A3) plus the A8/A5 derivation, and map RR/MM/CM to one duty each. Traps: writing 'GSM uses A5 for authentication' (A5 ciphers; A3 authenticates; A8 derives the key), forgetting that Ki never leaves the SIM or the AuC, and claiming TMSI encrypts anything — it hides identity, it does not protect content.",
            ],
            keyTerms: [
              { term: "A3", definition: "Authentication algorithm: SRES = A3(Ki, RAND) — proves the SIM knows Ki." },
              { term: "A8", definition: "Key-generation algorithm: Kc = A8(Ki, RAND) — derives the session cipher key." },
              { term: "A5", definition: "Stream cipher family encrypting the Um bursts, keyed by Kc and frame number." },
              { term: "RR / MM / CM", definition: "Layer-3 trio: radio resource, mobility management, connection management." },
              { term: "EIR", definition: "Equipment identity register with IMEI white/grey/black lists — blocks stolen handsets." },
            ],
            table: {
              caption: "The GSM security trio and its supporting cast.",
              headers: ["Mechanism", "Algorithm / data", "What it protects"],
              rows: [
                ["Authentication", "SRES = A3(Ki, RAND)", "network against cloned SIMs"],
                ["Key generation", "Kc = A8(Ki, RAND)", "derives the per-session cipher key"],
                ["Ciphering", "A5/1, A5/2, A5/3 keyed by Kc + frame number", "voice and signalling on the Um interface"],
                ["Identity privacy", "TMSI instead of IMSI", "subscriber tracking by passive listeners"],
                ["Equipment check", "IMEI vs EIR white/grey/black lists", "stolen or defective handsets at entry"],
              ],
            },
            bullets: [
              "Layer 2: LAPDm frames and acks signalling on Um; SS7/MAP carries it inside the network.",
              "RR: channels, measurements, handover — the radio's own management.",
              "MM: authentication, TMSI, location update, attach/detach.",
              "CM: call control, supplementary services, SMS.",
              "Authentication: RAND to the SIM, SRES = A3(Ki, RAND) back, compared by the network.",
              "Kc = A8(Ki, RAND); A5(Kc, frame number) ciphers every burst.",
              "TMSI hides identity; EIR blocks blacklisted IMEIs.",
              "Scope: radio path protected; core network and A5/2 not.",
            ],
            diagram: {
              kind: "fork",
              title: "GSM protects four things — with four mechanisms",
              caption:
                "One secret (Ki) feeds all four; keep straight which algorithm does which job.",
              start: "GSM security",
              branches: [
                { label: "Authentication", outcome: "A3: RAND -> SRES with Ki — clones fail the challenge", good: true },
                { label: "Ciphering", outcome: "A8 derives Kc; A5 stream-ciphers every burst", good: true },
                { label: "Identity privacy", outcome: "TMSI replaces IMSI over the air, renewed per update", good: true },
                { label: "Equipment check", outcome: "IMEI verified against EIR lists at network entry", good: true },
              ],
            },
            callout: {
              type: "warning",
              title: "The A3/A8/A5 mix-up",
              body: "The single most common slip in GSM security answers is swapping the trio's jobs. Fix it with one sentence: A3 authenticates (SRES), A8 derives (Kc), A5 ciphers (bursts) — and Ki never leaves the SIM. Questions on this topic are definition-heavy; one swapped algorithm costs the mechanism marks.",
            },
            examQuestions: [
              {
                q: "Explain GSM security mechanisms: authentication, ciphering, identity confidentiality and equipment identity, naming the algorithms involved.",
                marks: 7,
                outline: [
                  "Authentication: AuC sends RAND; SIM returns SRES = A3(Ki, RAND)",
                  "Network compares SRES — no Ki, no service (anti-cloning)",
                  "Key derivation: Kc = A8(Ki, RAND) from the same challenge",
                  "Ciphering: A5 stream cipher keyed by Kc + frame number on Um",
                  "Identity confidentiality: TMSI replaces IMSI, renewed at each update",
                  "Equipment identity: IMEI checked against EIR black/grey/white lists",
                  "Scope: radio path and cloning protected; core network not encrypted",
                ],
              },
              {
                q: "Draw the GSM signalling protocol architecture from the MS to the MSC, naming LAPDm, RR, MM and CM.",
                marks: 7,
                outline: [
                  "Layer 1: Um physical — bursts, GMSK, timing advance",
                  "Layer 2: LAPDm — framing, acknowledgement on the air",
                  "Layer 3: RR (channels, handover), MM (auth, TMSI, location), CM (CC, SS, SMS)",
                  "BTS relays LAPDm; BSC terminates RR; MSC hosts MM/CM with VLR",
                  "SS7/MAP carries MM/CM conversations between network nodes",
                  "One stacked diagram MS-BTS-BSC-MSC with layer labels",
                ],
              },
              {
                q: "Why does GSM use a temporary identity (TMSI) and why does it not protect the content of calls?",
                marks: 7,
                outline: [
                  "IMSI sent in clear would let listeners track one subscriber",
                  "TMSI is allocated by the VLR and changes at each location update",
                  "Paging and signalling use TMSI — identity stays hidden",
                  "Content protection is A5 ciphering's job, not TMSI's",
                  "TMSI itself is transmitted inside ciphered signalling after first contact",
                ],
              },
            ],
          },
          {
            number: "2.5",
            title: "HSCSD and the GPRS architecture",
            body: [
              "HSCSD (high speed circuit switched data) is GSM's first data upgrade, and its idea is blunt: aggregate several full-rate time slots into one circuit-switched connection. A normal data call occupies one slot at 9.6 kbit/s; HSCSD binds up to four slots for about 38.4-57.6 kbit/s, still on the circuit-switched call model — the connection is dialled, held and billed by time whether or not data flows. It needs no new network elements beyond slot-binding support, which is both its speed of deployment and its economic ceiling.",
              "GPRS (general packet radio service) replaces the model instead of stretching it: a packet-switched overlay on the same BSS, always-on, billed by volume. Two new nodes appear. The SGSN (serving GPRS support node) is the packet-side analogue of the MSC: it attaches mobiles, manages mobility (attach, routing area updates) and delivers packets to the radio. The GGSN (gateway GPRS support node) is a router hiding the mobility: it anchors IP addresses, terminates GTP tunnels from every SGSN, and forwards packets to external PDNs — the internet sees GGSN addresses, never a moving handset's.",
              "May 2023 Q2a and Dec 2024 Q3a both asked 'explain the architecture of GPRS' verbatim — the expected drawing is the chain MS → BSS → SGSN → GGSN → PDN with the new interfaces labelled (Gb to the BSS, Gn between the support nodes, Gi outward). Contrast with HSCSD in one sentence: HSCSD binds circuit slots per call; GPRS multiplexes many users statistically over shared packet channels, so idle users cost nothing.",
              "Exam angle: draw the five-element chain and name each node's job in one sentence; contrast circuit vs packet billing and session models. Traps: making the SGSN a radio device (it is a core-network node), forgetting the GGSN anchors the IP address (that is why sessions survive SGSN changes), and writing that GPRS replaced GSM's radio interface — it reuses GSM's carriers, adding new logical packet channels on them.",
            ],
            keyTerms: [
              { term: "HSCSD", definition: "High speed circuit switched data — up to 4 GSM slots aggregated into one dialled connection (~57.6 kbit/s)." },
              { term: "SGSN", definition: "Serving GPRS support node — attach, mobility and packet delivery to the radio side." },
              { term: "GGSN", definition: "Gateway GPRS support node — anchors IP addresses, ends GTP tunnels, routes to the internet." },
              { term: "GTP", definition: "GPRS tunnelling protocol — carries user packets between SGSN and GGSN." },
              { term: "PDP context", definition: "The per-session record (address, QoS, APN) that makes a mobile's data session active." },
            ],
            table: {
              caption: "Circuit slot-stacking versus packet overlay — the HSCSD vs GPRS contrast.",
              headers: ["Aspect", "HSCSD", "GPRS"],
              rows: [
                ["Model", "circuit-switched, dialled per call", "packet-switched, always-on"],
                ["Radio resources", "up to 4 slots held for the whole call", "slots shared statistically per packet"],
                ["Typical rate", "38.4-57.6 kbit/s", "~21.4 kbit/s per slot (CS-4), ~50 kbit/s real"],
                ["New elements", "none (slot binding only)", "SGSN + GGSN core nodes"],
                ["Billing", "per minute of connection", "per kilobyte of volume"],
              ],
            },
            bullets: [
              "HSCSD aggregates up to 4 slots — a dialled, time-billed, circuit connection.",
              "GPRS overlays packet switching on the same GSM radio carriers.",
              "SGSN: attach, mobility (routing areas), packet delivery toward the radio.",
              "GGSN: anchors IP addresses, terminates GTP tunnels, exits to the PDN.",
              "Internet sees GGSN addresses; the mobile's movement is tunnel-internal.",
              "Chain: MS -> BSS -> SGSN -> GGSN -> external PDN (internet).",
              "Billing flips from minutes (HSCSD) to volume (GPRS).",
              "GPRS reuses GSM carriers — it adds packet logical channels, not a new radio.",
            ],
            diagram: {
              kind: "pipeline",
              title: "The GPRS packet path",
              caption:
                "Same radio as GSM, two new core nodes; the tunnel makes mobility invisible to the internet.",
              stages: [
                { label: "MS", note: "GPRS attach; packet session" },
                { label: "BSS", note: "packet channels on GSM carriers" },
                { label: "SGSN", note: "mobility + delivery anchor" },
                { label: "GGSN", note: "GTP tunnel endpoint, IP router" },
                { label: "PDN", note: "the internet, unaware of movement" },
              ],
            },
            callout: {
              type: "exam",
              title: "Asked verbatim in two papers",
              body: "May 2023 Q2a 'Explain the architecture of GPRS in detail' and Dec 2024 Q3a 'Explain the Architecture of GPRS' — the same 7-mark question two sessions running. The MS-BSS-SGSN-GGSN-PDN drawing plus one job per node plus the Gb/Gn/Gi interface labels is the complete answer; it was also the base of Jun 2025's 14-mark GPRS vs GSM comparison.",
            },
            examQuestions: [
              {
                q: "Explain the architecture of GPRS in detail.",
                marks: 7,
                appearances: ["May 2023", "Dec 2024"],
                outline: [
                  "Packet-switched overlay on the GSM BSS — same carriers, new channels",
                  "SGSN: attach, mobility (routing areas), delivery to the radio",
                  "GGSN: IP anchor, GTP tunnel endpoint, gateway to the PDN",
                  "Chain drawing: MS -> BSS -> SGSN -> GGSN -> internet",
                  "Interfaces: Gb (BSS-SGSN), Gn (SGSN-GGSN), Gi (GGSN-PDN), Gr (HLR)",
                  "Tunnelling hides movement; the internet sees only GGSN addresses",
                  "Always-on sessions via PDP contexts; billing by volume",
                ],
              },
              {
                q: "Compare HSCSD and GPRS as GSM's two data upgrades, with rates and resource models.",
                marks: 7,
                outline: [
                  "HSCSD: binds up to 4 circuit slots; 38.4-57.6 kbit/s; dialled call",
                  "Billed per minute even when idle — circuit economics",
                  "GPRS: statistical packet sharing; ~21.4 kbit/s per slot (CS-4)",
                  "Always-on via attach + PDP context; billed per kilobyte",
                  "New nodes: SGSN + GGSN; HSCSD needs none",
                  "Choose HSCSD for steady streams, GPRS for bursty sessions",
                ],
              },
              {
                q: "Explain the roles of the SGSN and GGSN and why two nodes are needed.",
                marks: 7,
                outline: [
                  "SGSN: the packet MSC — attach, routing-area mobility, radio-side delivery",
                  "GGSN: the border router — IP anchoring, GTP termination, PDN exit",
                  "Split lets mobility stay local (SGSN changes) while sessions survive",
                  "GTP tunnels connect them; the IP address never moves",
                  "Inter-PLMN roaming rides Gp between operators' GGSN/SGSN",
                  "Analogy: MSC/HLR pair vs SGSN/GGSN pair",
                ],
              },
            ],
          },
          {
            number: "2.6",
            title: "GPRS interfaces, channels and mobility management",
            body: [
              "GPRS's interfaces spell out who talks to whom. Gb joins the BSS to the SGSN (the packet-side counterpart of GSM's A interface); Gn tunnels between SGSN and GGSN inside one operator's network, and Gp does the same across operators for roaming; Gi is the GGSN's exit to the external PDN; Gr feeds subscription data from the HLR; Gs lets the SGSN coordinate paging with the MSC/VLR; Gd connects SMS gateways. Jun 2025 Q3's 14-mark comparison (GPRS vs GSM architecture) rewards exactly this map plus the contrast table below.",
              "On the air, GPRS adds packet data logical channels riding GSM carriers: PBCCH broadcasts packet-system information, PRACH is the packet random access (uplink contention), PPCH pages, PAGCH assigns, and PDTCH carries the payload with PACCH for in-band signalling. Coding schemes trade rate for robustness: CS-1 (9.05 kbit/s per slot), CS-2 (13.4), CS-3 (15.6) and CS-4 (21.4, no FEC — needs a clean signal). Eight slots of CS-4 reach the theoretical 171.2 kbit/s; real deployments hover near 50 kbit/s per user. EDGE later swaps GMSK for 8PSK and roughly triples the rate.",
              "Mobility management is a three-state machine. Idle: no attach, nothing known. Standby: attached and reachable, but only routing-area updates are tracked — mobility is coarse-grained to save signalling. Ready: a PDP context is open and data flows; now every cell change is tracked. Attach moves idle → standby; opening a data session (PDP context activation with an APN) moves standby → ready; the ready timer, detach, or GGSN closure drops back down. Billing counts bytes, and the always-on model means the handset holds an IP address across idle periods.",
              "Exam angle: name four interfaces with endpoints, draw the state machine with its transitions, and quote CS-1..CS-4 rates. Traps: attaching to the wrong endpoint (Gb is BSS-SGSN, not BSC-MSC), claiming CS-4 always delivers 171 kbit/s (that is 8 slots × CS-4, theoretical), and confusing routing-area updates (standby) with cell updates (ready only).",
            ],
            keyTerms: [
              { term: "Gb / Gn / Gi", definition: "BSS-SGSN access, SGSN-GGSN tunnelling, GGSN-PDN exit — GPRS's three load-bearing interfaces." },
              { term: "PDTCH", definition: "Packet data traffic channel — the GPRS payload channel on GSM carriers." },
              { term: "CS-1..CS-4", definition: "GPRS coding schemes trading robustness for rate: 9.05 to 21.4 kbit/s per slot." },
              { term: "Routing area", definition: "Standby-state mobility granularity — a group of cells; updates fire on RA change." },
              { term: "PDP context activation", definition: "Opening a data session: APN chosen, IP address assigned, tunnel to the GGSN built." },
            ],
            table: {
              caption: "GSM vs GPRS — Jun 2025 Q3's comparison, pre-answered.",
              headers: ["Aspect", "GSM", "GPRS"],
              rows: [
                ["Switching", "circuit-switched voice channels", "packet-switched over the same radio"],
                ["Session model", "dial a call, hold, release", "attach + PDP contexts, always-on"],
                ["Billing", "per minute of connection", "per kilobyte (or flat) of volume"],
                ["Data rate", "9.6 kbit/s (HSCSD to 57.6)", "9.05-21.4 kbit/s per slot; ~170 theoretical"],
                ["New elements", "none", "SGSN + GGSN with GTP tunnels"],
                ["Channels", "TCH/S DCCH tree", "PBCCH/PRACH/PDTCH packet tree"],
              ],
            },
            bullets: [
              "Interfaces: Gb (BSS-SGSN), Gn/Gp (SGSN-GGSN), Gi (to PDN), Gr (HLR), Gs (MSC), Gd (SMS).",
              "Air channels: PBCCH, PRACH, PPCH, PAGCH, PDTCH + PACCH.",
              "Coding: CS-1 9.05, CS-2 13.4, CS-3 15.6, CS-4 21.4 kbit/s per slot.",
              "Theoretical max 171.2 kbit/s = 8 slots × CS-4; realistic ≈ 50 kbit/s.",
              "States: idle -> standby (attach) -> ready (PDP context) -> back.",
              "Standby tracks routing areas; ready tracks cell changes.",
              "Billing by volume; EDGE triples rate with 8PSK later.",
            ],
            diagram: {
              kind: "cycle",
              title: "The GPRS mobility state machine",
              caption:
                "Coarse tracking when idle of packets, fine tracking when they flow — signalling is spent only where it pays.",
              steps: [
                { label: "Idle", note: "not attached; network knows nothing" },
                { label: "Standby", note: "attach done; routing-area updates only" },
                { label: "Ready", note: "PDP context open; cell-level tracking; data flows" },
                { label: "Down again", note: "ready timer / detach / PDP closure" },
              ],
            },
            callout: {
              type: "exam",
              title: "The 14-mark comparison of Jun 2025",
              body: "Jun 2025 Q3: 'Draw and explain architecture of following communication systems. Also give a comparison of both: (i) GPRS (ii) GSM' — 14 marks. Budget it: one architecture drawing per system (MS-BTS-BSC-MSC vs MS-BSS-SGSN-GGSN-PDN), then the six-row contrast table (switching, session, billing, rate, elements, channels).",
            },
            codeExample: {
              language: "python",
              caption: "gprs_states.py — the mobility machine as a class",
              code: `class GprsMs:
    def __init__(self) -> None:
        self.state = "idle"          # not attached, unreachable
    def attach(self) -> None:
        self.state = "standby"       # reachable via routing-area paging
    def open_pdp(self, apn: str) -> None:
        self.state = "ready"         # PDP context active, IP address bound
    def ready_timer_expired(self) -> None:
        self.state = "standby"       # cell tracking stops, RA tracking stays
    def detach(self) -> None:
        self.state = "idle"

ms = GprsMs(); ms.attach(); ms.open_pdp("internet")
print(ms.state)                      # ready`,
            },
            examQuestions: [
              {
                q: "Draw and explain architecture of following communication systems. Also give a comparison of both: (i) GPRS (ii) GSM.",
                marks: 14,
                appearances: ["Jun 2025"],
                outline: [
                  "GSM drawing: MS -> BTS -> BSC -> MSC/GMSC with HLR/VLR/AuC",
                  "GPRS drawing: MS -> BSS -> SGSN -> GGSN -> PDN with Gb/Gn/Gi",
                  "GSM: circuit-switched, per-minute billing, TCH logical channels",
                  "GPRS: packet-switched, per-volume billing, PDTCH channels + SGSN/GGSN",
                  "Shared base: same FDMA/TDMA radio carriers and BSS hardware",
                  "Contrast table: switching, session model, billing, rate, new elements, channels",
                  "Always-on vs dialled sessions is the headline difference",
                ],
              },
              {
                q: "Explain GPRS mobility management: the three states, attach and PDP context activation, and the role of routing areas.",
                marks: 7,
                outline: [
                  "Idle: no attach, network knows nothing",
                  "Standby: attach done; only routing-area changes reported",
                  "Ready: PDP context active; every cell change tracked",
                  "Attach: identity + subscription check via HLR (Gr)",
                  "PDP activation: APN -> GGSN, IP address, GTP tunnel built",
                  "Ready timer/detach returns to standby/idle",
                  "Design intent: signalling spent proportionally to activity",
                ],
              },
              {
                q: "List the GPRS coding schemes and explain the trade-off each makes.",
                marks: 7,
                outline: [
                  "CS-1: 9.05 kbit/s per slot, heaviest FEC — robust at cell edge",
                  "CS-2: 13.4; CS-3: 15.6 — middle ground",
                  "CS-4: 21.4, no FEC — needs high S/I, good near the base",
                  "Link adaptation picks the scheme per radio conditions",
                  "8 × CS-4 = 171.2 kbit/s theoretical ceiling",
                  "EDGE later swaps GMSK for 8PSK, roughly tripling rates",
                ],
              },
            ],
          },
          {
            number: "2.7",
            title: "DECT and TETRA",
            body: [
              "DECT (digital enhanced cordless telecommunications) is ETSI's cordless standard: the radio layer for home phones, office PBX extensions and wireless local loop. It runs 1880-1900 MHz in Europe with TDMA/TDD — one 10 ms frame of 24 slots carries 12 duplex conversations (each up/down pair on the same carrier, time-separated). Voice is 32 kbit/s ADPCM, cells are microcells of 100-500 m, and the signature capability is seamless handover between base stations while talking — a cordless phone that behaves cellularly indoors. 120 duplex carriers-times-slots give small dense systems a lot of cheap capacity.",
              "TETRA (terrestrial trunked radio) is ETSI's digital trunked radio for professional and public-safety users: police, fire, ambulance, utilities. It runs TDMA with 4 slots per 25 kHz carrier (π/4-DQPSK, 7.2 kbit/s voice per slot, up to 28.8 kbit/s data on all four) in dedicated bands such as 380-400/410-430 MHz. Its features are professional, not consumer: group calls where a press talks to a whole talkgroup, dispatch centres, priority and pre-emption, fast call setup, direct mode operation (talk without infrastructure), and end-to-end encryption options.",
              "The two standards answer different questions and Jun 2025 Q4 asked for all of DECT, TETRA and UMTS in one 14-mark question (UMTS sits in section 2.8; the DECT/TETRA halves live here). The comparison line: DECT optimizes cheap, dense, indoor duplex telephony with TDD; TETRA optimizes wide-area, group-oriented, mission-critical voice with priority control. Dec 2024's short-note list also carried TETRA — the four-slot frame, the talkgroup call and DMO are its three mark-earning specifics.",
              "Exam angle: for DECT give band, TDMA/TDD frame arithmetic (24 slots → 12 duplex calls), ADPCM codec and microcell handover; for TETRA give band, 4-slot frame, group call + priority + DMO. Traps: calling DECT cellular (no HLR/VLR machinery — its controller is local), calling TDD full duplex by frequency (it is full duplex by time), and forgetting TETRA's direct mode — the feature consumer systems do not have.",
            ],
            keyTerms: [
              { term: "DECT", definition: "ETSI cordless standard — 1880-1900 MHz TDMA/TDD, 32 kbit/s ADPCM, microcells with seamless handover." },
              { term: "TDD", definition: "Time division duplex — uplink and downlink share one carrier, separated in time, not frequency." },
              { term: "TETRA", definition: "Terrestrial trunked radio — 4-slot TDMA at 25 kHz for public safety with group calls and priority." },
              { term: "Direct mode operation (DMO)", definition: "TETRA mobiles talk directly, radio-to-radio, without base stations." },
              { term: "Talkgroup call", definition: "One press transmits to a whole predefined group — TETRA's defining call model." },
            ],
            table: {
              caption: "DECT vs TETRA — the cordless and the trunked, side by side.",
              headers: ["Aspect", "DECT", "TETRA"],
              rows: [
                ["Market", "cordless: home, office PBX, WLL", "trunked PMR: police, fire, utilities"],
                ["Band (Europe)", "1880-1900 MHz", "380-400 / 410-430 MHz (+ variants)"],
                ["Access", "TDMA/TDD, 24 slots per 10 ms (12 duplex calls)", "TDMA, 4 slots per 25 kHz carrier"],
                ["Voice", "32 kbit/s ADPCM", "7.2 kbit/s per slot (ACELP)"],
                ["Cell size", "microcells 100-500 m", "wide-area macro cells + repeaters"],
                ["Signature features", "seamless inter-base handover", "group calls, priority, DMO, encryption"],
              ],
            },
            bullets: [
              "DECT: 1880-1900 MHz, TDMA/TDD, 24 slots -> 12 duplex conversations per frame.",
              "DECT voice: 32 kbit/s ADPCM; microcells 100-500 m; handover between bases mid-call.",
              "DECT roles: cordless home phone, office PBX extension, wireless local loop.",
              "TETRA: 4 slots per 25 kHz carrier; 7.2 kbit/s voice per slot, 28.8 kbit/s on four.",
              "TETRA features: talkgroup calls, dispatch, priority/pre-emption, fast setup.",
              "DMO: direct mobile-to-mobile without infrastructure — mission-critical resilience.",
              "TDD vs FDD: DECT duplexes by time on one carrier; GSM duplexes by frequency.",
            ],
            diagram: {
              kind: "compare",
              title: "DECT vs TETRA",
              caption:
                "Both are ETSI TDMA standards, but one optimizes indoor telephony and the other mission-critical group voice.",
              left: {
                heading: "DECT — cordless density",
                items: [
                  "1880-1900 MHz, TDMA/TDD (24 slots)",
                  "12 duplex calls per 10 ms frame",
                  "32 kbit/s ADPCM, microcells 100-500 m",
                  "Seamless handover between home bases",
                ],
              },
              right: {
                heading: "TETRA — trunked safety",
                items: [
                  "380-430 MHz bands, TDMA (4 slots/25 kHz)",
                  "7.2 kbit/s voice; 28.8 kbit/s data on 4 slots",
                  "Group calls, dispatch, priority, pre-emption",
                  "Direct mode: talk with no infrastructure",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "A 14-mark trio in Jun 2025",
              body: "Jun 2025 Q4: 'Discuss following protocols of wireless networks: (i) DECT (ii) TETRA (iii) UMTS' — 14 marks. Answer as three mini-essays of 4-5 marks each: DECT (TDD frame + ADPCM + handover), TETRA (4-slot TDMA + talkgroup/priority + DMO), UMTS (W-CDMA + R99 architecture — section 2.8). Dec 2024 Q8 also carried TETRA as a short note.",
            },
            examQuestions: [
              {
                q: "Discuss following protocols of wireless networks: (i) DECT (ii) TETRA (iii) UMTS.",
                marks: 14,
                appearances: ["Jun 2025"],
                outline: [
                  "DECT: cordless standard, 1880-1900 MHz, TDMA/TDD 24-slot frame",
                  "DECT: 12 duplex calls, 32 kbit/s ADPCM, microcell handover, WLL use",
                  "TETRA: trunked radio, 4 slots per 25 kHz, 7.2 kbit/s voice",
                  "TETRA: group calls, dispatch, priority, DMO, encryption",
                  "UMTS: 3G successor to GSM — W-CDMA 5 MHz carriers",
                  "UMTS R99: UE -> UTRAN (Node B + RNC) -> CN (CS + PS domains)",
                  "384 kbit/s wide-area, 2 Mbps indoor targets; soft handover",
                ],
              },
              {
                q: "Write a short note on TETRA and its fitness for public-safety communication.",
                marks: 7,
                outline: [
                  "Terrestrial trunked radio — ETSI PMR/PAMR standard",
                  "4-slot TDMA per 25 kHz carrier; π/4-DQPSK; 7.2 kbit/s voice",
                  "Talkgroup calls: one press reaches the whole team",
                  "Priority and pre-emption: emergency traffic beats routine",
                  "Direct mode operation: radio-to-radio without base stations",
                  "Fast call setup and encryption for mission-critical use",
                ],
              },
              {
                q: "Explain the DECT TDMA/TDD frame and how it achieves 12 duplex calls on one carrier.",
                marks: 7,
                outline: [
                  "10 ms frame divided into 24 slots",
                  "Slots paired: one down + one up per conversation (TDD)",
                  "12 pairs = 12 duplex calls per carrier per frame",
                  "Duplexing by time on one carrier — no paired spectrum needed",
                  "32 kbit/s ADPCM speech per pair",
                  "Dynamic channel selection + seamless handover between bases",
                ],
              },
            ],
          },
          {
            number: "2.8",
            title: "UMTS",
            body: [
              "UMTS (universal mobile telecommunications system) is the 3G successor to GSM within the same standards family, and its headline change is the radio: wideband CDMA. Carriers widen from GSM's 200 kHz to 5 MHz, chip rate is 3.84 Mcps, and the paired bands are 1920-1980 MHz uplink / 2110-2170 MHz downlink (FDD). All users share each carrier simultaneously, separated by spreading codes — the access theory of section 1.5 executed at scale, with the near-far problem handled by fast closed-loop power control and RAKE receivers combining multipath energy.",
              "The Release 99 architecture keeps GSM's layering philosophy. The UE (user equipment: mobile + USIM) talks to the UTRAN — Node B transceivers plus RNCs (radio network controllers, the BSC's richer heir). The core network splits into a CS domain (MSC/VLR for circuit voice) and a PS domain (SGSN/GGSN carried over from GPRS), with the HLR (renamed HSS later) holding subscriptions. Target rates: 384 kbit/s wide-area and 2 Mbit/s indoor on Release 99 — two orders of magnitude over GPRS's practical 50 kbit/s.",
              "The signature mobility feature is soft handover: because all cells share one frequency, a UE can talk to two or three Node Bs at once while the RNC combines the streams (macro diversity) — no break-before-make gap, and the RAKE receiver treats each leg as another multipath finger. Hard handover survives only for inter-frequency or inter-system moves (to GSM, for coverage). Combined with fast power control — 1500 commands per second — this is W-CDMA's answer to the interference budget of section 1.7.",
              "Exam angle: give the radio numbers (5 MHz, 3.84 Mcps, paired FDD bands), draw the R99 chain (UE → UTRAN → CN with CS/PS domains), and explain soft handover with the active-set idea. Traps: calling UMTS time-division (it is code-division in R99; TD-CDMA is a separate variant), forgetting that the PS domain reuses GPRS's SGSN/GGSN — the continuity of section 2.5 is the point — and confusing chip rate with user rate (processing gain is their ratio, ≈ 10 dB for a 384 kbit/s bearer).",
            ],
            keyTerms: [
              { term: "W-CDMA", definition: "Wideband CDMA — UMTS's 5 MHz radio access with 3.84 Mcps chip rate, all users sharing one carrier." },
              { term: "UTRAN", definition: "The UMTS radio network: Node B transceivers + RNC controllers." },
              { term: "RNC", definition: "Radio network controller — manages Node Bs, owns soft-handover combining and scheduling." },
              { term: "Soft handover", definition: "Make-before-break via multiple simultaneous radio links whose signals the RNC combines." },
              { term: "Processing gain", definition: "Chip rate / user rate — ≈ 10 dB for a 384 kbit/s bearer at 3.84 Mcps." },
            ],
            bullets: [
              "Radio: W-CDMA, 5 MHz carriers, 3.84 Mcps chips, FDD 1920-1980 / 2110-2170 MHz.",
              "All users share one carrier by spreading codes; power control runs ~1500 times/s.",
              "R99 chain: UE -> UTRAN (Node B + RNC) -> CN (CS: MSC/VLR; PS: SGSN/GGSN).",
              "Rates: 384 kbit/s wide-area, 2 Mbit/s indoor (Release 99 targets).",
              "Soft handover: 2-3 Node Bs in the active set; RNC combines (macro diversity).",
              "Hard handover only for inter-frequency or inter-system (GSM) moves.",
              "PS domain inherits GPRS's SGSN/GGSN — section 2.5's continuity.",
              "RAKE receiver turns multipath and extra handover legs into signal, not noise.",
            ],
            diagram: {
              kind: "flow",
              title: "Soft handover in UMTS",
              caption:
                "One frequency everywhere means the new cell is added before the old is dropped — no gap, two radios, one call.",
              steps: [
                { label: "Measure", note: "UE reports neighbour pilot strengths" },
                { label: "Add leg", note: "RNC puts a second Node B in the active set" },
                { label: "Dual transmit", note: "UE talks to both Node Bs at once" },
                { label: "Combine", note: "RNC merges streams — macro diversity" },
                { label: "Drop leg", note: "old link released when the new one is solid" },
              ],
            },
            callout: {
              type: "tip",
              title: "Processing gain is an exam number",
              body: "Chip rate over user rate gives the spreading gain: 3.84 Mcps / 384 kbit/s = 10 → 10 dB; at 12.2 kbit/s voice it is 3.84 Mcps / 12.2 k ≈ 315 → 25 dB. Quoting this ratio shows you know why wideband CDMA tolerates interference that would sink narrowband systems.",
            },
            codeExample: {
              language: "python",
              caption: "wcdma_gain.py — spreading arithmetic",
              code: `import math

chip_rate = 3.84e6          # W-CDMA chips per second
for bearer in [384e3, 12.2e3]:        # data bearer vs voice bearer
    gain_db = 10 * math.log10(chip_rate / bearer)
    print(f"{bearer/1e3:.1f} kbit/s -> {gain_db:.1f} dB processing gain")
# 384 kbit/s -> 10.0 dB ; 12.2 kbit/s voice -> 25.0 dB`,
            },
            examQuestions: [
              {
                q: "Explain the UMTS (Release 99) architecture and how it relates to GSM and GPRS.",
                marks: 7,
                outline: [
                  "UE = mobile + USIM; UTRAN = Node B + RNC",
                  "CS domain: MSC/VLR carries circuit voice as in GSM",
                  "PS domain: SGSN/GGSN carried over from GPRS",
                  "HLR/HSS holds subscriptions; USIM plays the SIM's role",
                  "Radio: W-CDMA 5 MHz, 3.84 Mcps — replaces GSM's 200 kHz TDMA",
                  "Continuity: same registers, new radio — the migration story",
                ],
              },
              {
                q: "Explain soft handover in UMTS and contrast it with GSM's hard handover.",
                marks: 7,
                outline: [
                  "All UMTS cells share one frequency — no frequency change needed",
                  "UE adds a second Node B to the active set before dropping the first",
                  "RNC combines the two streams: macro diversity, no gap",
                  "RAKE receiver treats each leg as another multipath finger",
                  "GSM: hard handover, break-before-make, brief silence",
                  "Cost: extra radio links consume capacity — active set is bounded",
                ],
              },
              {
                q: "Give the W-CDMA air-interface parameters and explain why wideband CDMA raises capacity over narrowband systems.",
                marks: 7,
                outline: [
                  "5 MHz carriers; 3.84 Mcps chip rate; FDD paired bands",
                  "All users share the carrier, separated by spreading codes",
                  "Processing gain = chip/user rate: 10 dB at 384 kbit/s, 25 dB for voice",
                  "Interference-limited capacity: fast power control (~1500 Hz) defends S/I",
                  "RAKE exploits multipath; soft handover adds macro diversity",
                  "Wideband + code separation beats narrowband reuse planning",
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
      title: "Wireless LANs: IEEE 802.11, HIPERLAN and Bluetooth",
      summary:
        "Unit III cuts the cable: why WLANs exist and the 802.11 architecture (BSS, IBSS, ESS, DS), the a/b/g physical layers over the CSMA/CA MAC with hidden and exposed terminals, MAC management (scanning, association, power save), the ETSI HIPERLAN family with its EY-NPMA access control, and Bluetooth's piconet design with its radio and baseband layers.",
      chapter: {
        number: "03",
        title: "Cutting the Cable",
        intro:
          "Unit III covers IEEE 802.11 LAN architecture and the 802.11a, b and g physical layers, the protocol architecture (LLC, MAC, PHY), the MAC layer and its management, the HIPERLAN protocol architecture with its physical layer, access control sublayer and MAC sublayer, and Bluetooth: user scenarios, physical layer and MAC layer.",
        inOneBreath:
          "802.11 networks are BSS (one AP), IBSS (ad hoc) and ESS (many APs on one distribution system); a/b/g differ in band and PHY — 2.4 GHz DSSS/HR-DSSS vs 5 GHz and 2.4 GHz OFDM at 54 Mbit/s; the MAC is CSMA/CA with SIFS/PIFS/DIFS spacing, exponential backoff and RTS/CTS against hidden terminals, plus beacons, scanning, authentication, association and power save; HIPERLAN/1 runs 23.5 Mbit/s at 5 GHz on the EY-NPMA access control (prioritization, elimination, yield) while HIPERLAN/2 adds OFDM and QoS; Bluetooth hops 1600 times a second across 79 channels in master-driven piconets of 7 active slaves.",
        sections: [
          {
            number: "3.1",
            title: "Why wireless LAN and the 802.11 architecture",
            body: [
              "A wireless LAN replaces the cabled last hundred metres of a network with radio, and the reasons are practical: mobility (users and devices roam with their connections), no cabling cost or disruption (historical buildings, open floors, temporary sites), fast deployment and reconfiguration, and reach where cables cannot go. The costs are equally real: shared, interference-prone medium with lower and burstier rates, security that must be engineered rather than implied by a locked switch cabinet, and power drawn from batteries. Every 802.11 design decision trades one for the other.",
              "The 802.11 architecture is a set of nesting boxes. A station (STA) is any device; a basic service set (BSS) is one access point plus its member stations — the AP's MAC address is the BSSID and the network name is the SSID. An independent BSS (IBSS) is the peer-to-peer ad hoc form with no AP at all: stations coordinate directly. A distribution system (DS) — usually the wired LAN — interconnects multiple BSSs into an extended service set (ESS), all sharing one SSID; a portal bridges the DS to non-802.11 LANs. Roaming between APs is reassociation inside the ESS — the architecture exists precisely to make that move invisible to IP.",
              "May 2023 Q3a and Dec 2024 Q4a asked the same 7-mark question verbatim: 'Why do we need wireless LAN, explain architecture of 802.11 LAN'. The winning structure is two halves in order: four reasons for WLAN (mobility, no cabling, deployment speed, reach), then the architecture drawn as BSS → DS → ESS with IBSS contrasted — name every box (STA, BSS, BSSID, SSID, DS, ESS, portal) or the diagram loses its marks.",
              "Exam angle: draw one figure with two APs joined by a DS, stations under each, one IBSS bubble beside, and label everything. Traps: confusing BSS and BSSID (set vs the AP's address), calling the DS 'the wireless backbone' (it is usually the wired LAN, and 802.11 MAC does not specify it), and omitting the portal — the element that lets wireless frames enter Ethernet at all.",
            ],
            keyTerms: [
              { term: "STA", definition: "A station — any 802.11 device with MAC and PHY conformance." },
              { term: "BSS / BSSID", definition: "Basic service set — one AP and its stations; the AP's MAC address is the BSSID." },
              { term: "IBSS", definition: "Independent BSS — ad hoc peer-to-peer network with no AP." },
              { term: "ESS / DS", definition: "Extended service set — multiple BSSs interconnected by a distribution system under one SSID." },
              { term: "Portal", definition: "The bridge through which 802.11 frames cross into non-802.11 (wired) LANs." },
            ],
            table: {
              caption: "The 802.11 architecture elements — name every one in the diagram question.",
              headers: ["Element", "What it is", "Exam note"],
              rows: [
                ["STA", "any 802.11 station", "the standard's basic unit"],
                ["BSS", "one AP + its member stations", "infrastructure mode; BSSID = AP MAC"],
                ["IBSS", "peer-to-peer set, no AP", "ad hoc mode; stations self-coordinate"],
                ["DS", "backbone interconnecting BSSs", "usually the wired LAN; MAC-independent"],
                ["ESS", "multiple BSSs on one DS", "one SSID; roaming = reassociation"],
                ["Portal", "bridge to non-802.11 LANs", "where wireless frames enter Ethernet"],
              ],
            },
            bullets: [
              "Why WLAN: mobility, no cabling cost/disruption, fast deployment, hard-to-cable places.",
              "Costs: shared medium, interference, engineered security, battery power.",
              "BSS = AP + stations; the AP's MAC is the BSSID, the name is the SSID.",
              "IBSS = ad hoc: no AP, stations coordinate directly.",
              "DS interconnects BSSs into an ESS under one SSID.",
              "Roaming = reassociation between APs of one ESS — invisible to IP.",
              "Portal bridges 802.11 into wired LANs.",
              "Asked verbatim in May 2023 Q3a and Dec 2024 Q4a.",
            ],
            diagram: {
              kind: "fork",
              title: "Deploying a WLAN — which topology?",
              caption:
                "Three legal shapes; the ESS is what turns several APs into one network with roaming.",
              start: "An 802.11 deployment",
              branches: [
                { label: "BSS — infrastructure", outcome: "one AP serves its stations; BSSID + SSID identify it", good: true },
                { label: "ESS — multiple APs", outcome: "APs on one DS share an SSID; stations roam by reassociation", good: true },
                { label: "IBSS — ad hoc", outcome: "no AP at all; stations talk peer-to-peer", good: true },
              ],
            },
            callout: {
              type: "exam",
              title: "The most repeated question in the three papers",
              body: "'Why do we need wireless LAN, explain architecture of 802.11 LAN' appeared verbatim in May 2023 (Q3a) and again in Dec 2024 (Q4a) — 7 marks each time. Two halves, both needed: four reasons, then the labelled architecture (STA/BSS/BSSID/SSID/DS/ESS/portal) with an IBSS contrast.",
            },
            examQuestions: [
              {
                q: "Why do we need wireless LAN explain architecture of 802.11 LAN?",
                marks: 7,
                appearances: ["May 2023", "Dec 2024"],
                outline: [
                  "Reasons: mobility, no cabling cost, fast deployment, unreachable places",
                  "Costs: shared medium, interference, security must be engineered",
                  "STA = any 802.11 device",
                  "BSS = one AP + stations; BSSID = AP MAC; SSID = network name",
                  "IBSS = ad hoc, no AP, peer-to-peer",
                  "DS joins BSSs into an ESS under one SSID — roaming via reassociation",
                  "Portal bridges to wired LANs; label all boxes in the sketch",
                ],
              },
              {
                q: "Explain the difference between BSS, IBSS and ESS with sketches, and how roaming between APs works.",
                marks: 7,
                outline: [
                  "BSS: one AP, its stations, BSSID + SSID",
                  "IBSS: no AP — stations coordinate directly, coverage limited",
                  "ESS: several APs on one DS, one SSID",
                  "Roaming: station scans, chooses a better AP, sends reassociation request",
                  "APs coordinate through the DS; the IP address survives the move",
                  "Sketch: two BSSs + DS + one IBSS bubble, all labelled",
                ],
              },
              {
                q: "Justify WLAN deployment for (a) a heritage building and (b) a conference hall, naming one risk each.",
                marks: 7,
                outline: [
                  "Heritage: cabling forbidden/disruptive — WLAN avoids drilling",
                  "Risk: range loss through thick walls — site survey needed",
                  "Conference: hundreds of transient devices, zero cabling time",
                  "Risk: contention and co-channel interference — channel planning",
                  "Both benefit: mobility + rapid reconfiguration",
                ],
              },
            ],
          },
          {
            number: "3.2",
            title: "The 802.11 protocol architecture and physical layers",
            body: [
              "The 802.11 protocol architecture slots under Ethernet-style LAN standards: LLC (IEEE 802.2) on top, then the 802.11 MAC, then the physical layer split into PLCP (physical layer convergence procedure — framing, carrier sense, adaptation to the PMD) and PMD (physical medium dependent — the actual modulation). The MAC serves both infrastructure and ad hoc modes; the PLCP exists precisely so that one MAC can ride several unrelated radio technologies without modification — the family's key design move.",
              "The physical layers are a family tree. The 1997 baseline offered FHSS and DSSS at 1-2 Mbit/s in the 2.4 GHz ISM band. 802.11b (HR-DSSS with CCK coding) raised it to 5.5 and 11 Mbit/s in the same band, and made Wi-Fi cheap. 802.11a moved to 5 GHz with OFDM — 52 subcarriers per 20 MHz channel — reaching 54 Mbit/s, at the cost of shorter range (higher frequency attenuates faster) and no backward compatibility. 802.11g brought OFDM back into 2.4 GHz at 54 Mbit/s while remaining interoperable with 802.11b devices — the best-seller that made 54 Mbit/s universal.",
              "May 2023 Q3b asked 'which waves are used in wireless LAN communication and why' — the answer is microwaves in the unlicensed 2.4 GHz and 5 GHz ISM/UNII bands: short enough wavelength for compact antennas, licence-free (the regulatory reason they could spread), and offering tens of metres of useful indoor range. Jun 2025 Q8 carried IEEE 802.11a as a short-note topic — its OFDM story (52 subcarriers, 20 MHz, BPSK-to-64QAM per subcarrier) is the note's backbone.",
              "Exam angle: draw the stack (LLC → MAC → PLCP → PMD), fill the a/b/g table (band, rate, technique), and explain why OFDM resists multipath — many slow parallel subcarriers tolerate delay spread that would destroy one fast serial carrier. Traps: placing OFDM in 802.11b (b is HR-DSSS), forgetting that 5 GHz range is shorter than 2.4 GHz, and calling the PLCP a separate layer of the OSI stack — it is a sublayer of the PHY.",
            ],
            keyTerms: [
              { term: "PLCP", definition: "PHY convergence sublayer — frames the MAC's data for whichever PMD is beneath." },
              { term: "PMD", definition: "PHY medium-dependent sublayer — the actual radio modulation (DSSS, CCK, OFDM)." },
              { term: "OFDM", definition: "Orthogonal frequency division multiplexing — 52 parallel subcarriers per 20 MHz; 802.11a/g's engine." },
              { term: "HR-DSSS", definition: "High-rate DSSS with CCK coding — 802.11b's 5.5/11 Mbit/s in 2.4 GHz." },
              { term: "ISM band", definition: "Licence-free industrial/scientific/medical spectrum — 2.4 GHz is the WLAN workhorse band." },
            ],
            table: {
              caption: "The 802.11 physical family — the a/b/g table every paper hints at.",
              headers: ["Standard", "Band", "Max rate", "Technique"],
              rows: [
                ["802.11 (1997)", "2.4 GHz", "2 Mbit/s", "FHSS or DSSS"],
                ["802.11b", "2.4 GHz", "11 Mbit/s", "HR-DSSS with CCK"],
                ["802.11a", "5 GHz", "54 Mbit/s", "OFDM, 52 subcarriers, shorter range"],
                ["802.11g", "2.4 GHz", "54 Mbit/s", "OFDM, backward compatible with b"],
              ],
            },
            bullets: [
              "Stack: LLC (802.2) -> MAC -> PLCP -> PMD.",
              "PLCP exists so one MAC can serve many radio technologies.",
              "1997 baseline: FHSS/DSSS at 1-2 Mbit/s in 2.4 GHz ISM.",
              "802.11b: HR-DSSS + CCK, 11 Mbit/s, 2.4 GHz — made Wi-Fi cheap.",
              "802.11a: OFDM at 5 GHz, 54 Mbit/s, shorter range, no b compatibility.",
              "802.11g: OFDM in 2.4 GHz, 54 Mbit/s, interoperable with b.",
              "OFDM beats multipath: many slow subcarriers vs one fast serial carrier.",
              "Waves used: microwaves in licence-free 2.4/5 GHz bands (May 2023 Q3b).",
            ],
            diagram: {
              kind: "layers",
              title: "The 802.11 protocol stack",
              caption:
                "One MAC, many radios — the PLCP absorbs the differences between DSSS, CCK and OFDM.",
              layers: [
                { label: "LLC (IEEE 802.2)", note: "logical link control shared with Ethernet-style LANs" },
                { label: "MAC", note: "CSMA/CA, addressing, reliability, fragmentation" },
                { label: "PLCP", note: "convergence: framing, clear-channel assessment" },
                { label: "PMD", note: "modulation: DSSS · CCK (b) · OFDM (a/g)" },
              ],
            },
            callout: {
              type: "exam",
              title: "Waves and the 802.11a note",
              body: "May 2023 Q3b asked 'Which waves are used in wireless LAN communication and why?' (7 marks) — answer: microwaves in licence-free 2.4/5 GHz, with antenna-size, regulation and indoor-range reasons. Jun 2025 Q8 offered IEEE 802.11a as a short note — prepare OFDM, 52 subcarriers, 54 Mbit/s, 5 GHz, shorter range.",
            },
            examQuestions: [
              {
                q: "Which waves are used in wireless LAN communication and why?",
                marks: 7,
                appearances: ["May 2023"],
                outline: [
                  "Microwaves in the 2.4 GHz ISM and 5 GHz UNII bands",
                  "Licence-free — regulation is the reason Wi-Fi could spread",
                  "Wavelength ~12 cm at 2.4 GHz: compact antennas inside devices",
                  "Tens of metres indoor range — right-sized for a LAN, not a cell network",
                  "Trade-offs: interference from microwave ovens/Bluetooth (2.4 GHz), range loss at 5 GHz",
                  "802.11a/b/g ride these bands with DSSS/CCK/OFDM",
                ],
              },
              {
                q: "Compare 802.11a, 802.11b and 802.11g in band, maximum rate, modulation and compatibility.",
                marks: 7,
                outline: [
                  "b: 2.4 GHz, 11 Mbit/s, HR-DSSS/CCK, huge installed base",
                  "a: 5 GHz, 54 Mbit/s, OFDM, shorter range, no b compatibility",
                  "g: 2.4 GHz, 54 Mbit/s, OFDM, interoperates with b devices",
                  "OFDM resists multipath via parallel slow subcarriers",
                  "5 GHz is cleaner (fewer interferers) but attenuates faster",
                  "g's compatibility made it the commercial winner",
                ],
              },
              {
                q: "Write a short note on IEEE 802.11a.",
                marks: 7,
                outline: [
                  "First OFDM WLAN standard, ratified 1999",
                  "5 GHz UNII band; 20 MHz channels with 52 subcarriers (48 data + 4 pilot)",
                  "Per-subcarrier modulation BPSK to 64-QAM; rates 6-54 Mbit/s",
                  "Shorter range than 2.4 GHz — higher frequency attenuates more",
                  "Advantages: more channels, less interference, 54 Mbit/s",
                  "Disadvantage: no interoperability with b; early hardware was costly",
                ],
              },
            ],
          },
          {
            number: "3.3",
            title: "The 802.11 MAC: CSMA/CA, hidden and exposed terminals",
            body: [
              "The 802.11 MAC's first duty is medium access, and the design constraint explains everything: a radio cannot listen while transmitting — its own signal drowns every other — so collision detection (Ethernet's CD) is impossible. Hence CSMA/CA: carrier sense, multiple access with collision avoidance. A station senses the channel for DIFS (DCF interframe space); if idle, it may transmit; if busy, it waits, then draws a random backoff counter and decrements it one slot at a time while the channel stays idle — whoever's counter hits zero transmits. Every collision doubles the contention window, backing traffic off exponentially under load.",
              "Reliability comes from positive acknowledgement: the receiver ACKs each frame after SIFS (short interframe space, the highest priority), and silence means loss and retransmission. The IFS ladder enforces priority: SIFS < PIFS (point coordinator, for polled traffic) < DIFS (normal contention) — shorter spacing wins the channel. The optional RTS/CTS handshake protects large frames: the sender asks (RTS), the AP answers (CTS) heard by everyone in range — including the hidden stations — and each listener sets its NAV (network allocation vector) to stay silent for the whole exchange.",
              "The two classic terminal problems live here, and Jun 2025 Q5b asked for both. Hidden terminal: A and C both reach B but not each other; A transmits to B, C senses the channel idle, transmits — collision at B. RTS/CTS fixes it because C hears B's CTS and defers. Exposed terminal: B transmits to A; C wants to transmit to D and hears B's transmission, so it defers — unnecessarily, since C's transmission would not disturb A. Exposed terminals are pure throughput loss; RTS/CTS cannot help (there is no CTS to C), and only spatial separation or directional antennas do.",
              "Dec 2024 Q5b asked the MAC's principle responsibilities: medium access with fairness, reliable delivery (ACKs, retransmission), fragmentation of long frames, duplicate detection, encryption hooks (WEP), and power-save support — six bullets, one line each. May 2023 Q8 carried 'MAC layer' as a short note: pair the CSMA/CA mechanism with the reliability services and the terminal problems, and the note writes itself.",
              "Exam angle: state why CD fails over radio, then draw the DIFS-sense-backoff-DATA-ACK sequence with the IFS ladder labelled, and define both terminal problems with a three-node sketch. Traps: claiming CSMA/CD works in WLAN (it does not — the self-signal), using RTS/CTS for every frame (it pays only for long frames — the overhead is four messages), and swapping hidden and exposed definitions — hidden causes collisions; exposed causes needless waiting.",
            ],
            keyTerms: [
              { term: "CSMA/CA", definition: "Carrier sense with collision avoidance — sense, backoff, transmit; no collision detection while sending." },
              { term: "SIFS / PIFS / DIFS", definition: "The interframe-space ladder — shorter spacing wins the channel: ACKs, polled traffic, then contention." },
              { term: "NAV", definition: "Network allocation vector — a timer set by hearing RTS/CTS, silencing a station for the exchange's duration." },
              { term: "Hidden terminal", definition: "Two senders out of each other's range collide at a receiver between them; fixed by RTS/CTS." },
              { term: "Exposed terminal", definition: "A sender defers because of an unrelated transmission it hears — needless throughput loss." },
            ],
            bullets: [
              "Radio half-duplex at the carrier: cannot listen while transmitting — so no CSMA/CD.",
              "CSMA/CA: sense DIFS -> random backoff -> transmit -> positive ACK after SIFS.",
              "IFS ladder: SIFS < PIFS < DIFS — ACKs and polls beat contention traffic.",
              "Exponential backoff: each collision doubles the contention window.",
              "RTS/CTS reserves the medium; listeners set NAV and stay silent.",
              "Hidden terminal: collision at the receiver — RTS/CTS is the cure.",
              "Exposed terminal: needless deferral — no RTS/CTS cure; needs spacing/antennas.",
              "MAC also does fragmentation, duplicate detection, WEP hooks, power save.",
            ],
            diagram: {
              kind: "flow",
              title: "CSMA/CA with RTS/CTS",
              caption:
                "Sense, defer, reserve, send, acknowledge — and every overhearing station keeps quiet via its NAV.",
              steps: [
                { label: "Sense for DIFS", note: "channel idle?" },
                { label: "Backoff", note: "random counter, decremented on idle slots" },
                { label: "RTS -> CTS", note: "AP reserves medium; others set NAV" },
                { label: "DATA", note: "frame transmitted" },
                { label: "ACK after SIFS", note: "silence = loss -> retransmit" },
              ],
            },
            callout: {
              type: "exam",
              title: "Asked twice in the three papers",
              body: "Jun 2025 Q5b asked for hidden and exposed terminal problems (7 marks); Dec 2024 Q5b asked the MAC's principle responsibilities (7 marks); May 2023 Q8 carried 'MAC layer' as a short note. Prepare the three-node sketches for both problems plus the six responsibility bullets — the same preparation answers all three.",
            },
            codeExample: {
              language: "python",
              caption: "backoff.py — the exponential contention window",
              code: `import random

def backoff(attempt: int, cw_min: int = 16) -> int:
    cw = min(cw_min * 2 ** attempt, 1024)   # collision doubles the window
    return random.randrange(cw)             # slots to wait before transmitting

for attempt in range(4):
    print(f"attempt {attempt}: wait {backoff(attempt)} slots")
# window 16 -> 32 -> 64 -> 128: congestion backs itself off`,
            },
            examQuestions: [
              {
                q: "Write about hidden and exposed terminal problem of wireless channel access.",
                marks: 7,
                appearances: ["Jun 2025"],
                outline: [
                  "Hidden: A and C both reach B, not each other",
                  "A transmits to B; C senses idle and transmits — collision at B",
                  "Cure: RTS/CTS — C hears B's CTS and sets NAV to defer",
                  "Exposed: B transmits to A; C->D defers on hearing B",
                  "C->D would not disturb A — pure throughput loss",
                  "No RTS/CTS cure for exposed; needs spacing/directional antennas",
                  "Three-node sketches with collision point marked",
                ],
              },
              {
                q: "What are the principle responsibilities of MAC protocol?",
                marks: 7,
                appearances: ["Dec 2024"],
                outline: [
                  "Medium access: CSMA/CA with IFS ladder and exponential backoff",
                  "Reliable delivery: positive ACKs, retransmission with limits",
                  "RTS/CTS reservation against hidden terminals; NAV management",
                  "Fragmentation and reassembly of long frames",
                  "Duplicate detection and sequence control",
                  "Security hooks (WEP) and power-save coordination",
                ],
              },
              {
                q: "Why is collision detection impossible in wireless LANs and how does CSMA/CA compensate?",
                marks: 7,
                outline: [
                  "Own transmit signal dominates the receiver — CD cannot work",
                  "Ethernet's CD relies on hearing collisions mid-transmission",
                  "CSMA/CA avoids instead: sense DIFS, random backoff, transmit",
                  "Positive ACK after SIFS replaces collision detection",
                  "Collision -> no ACK -> contention window doubles -> retry",
                  "RTS/CTS adds reservation for long frames",
                ],
              },
            ],
          },
          {
            number: "3.4",
            title: "MAC management: scanning, association and power save",
            body: [
              "Above access, the MAC manages membership and energy. Synchronization: APs broadcast beacons every ~100 ms carrying the TSF clock, so stations share timing — the base for power-save windows. Scanning finds APs: passive scanning just listens to beacons across channels; active scanning sends probe requests and waits for probe responses — faster, at the cost of extra airtime. Authentication follows (open-system — accept everyone — or shared-key WEP challenge), then association: the station joins one AP of the BSS, and that AP now routes its frames.",
              "Reassociation is roaming's mechanism: as a station moves and its current AP weakens, it scans, picks a better AP of the same ESS, sends a reassociation request, and the APs hand the station's context over through the distribution system — IP unchanged, session unbroken. Disassociation and deauthentication clean up departures. Each management step is a frame exchange with named frame types (beacon, probe request/response, auth, assoc/reassoc) — the examiner checks the names.",
              "Power management is the battery's protection. In infrastructure mode a dozing station tells the AP to buffer its traffic; beacons carry the TIM (traffic indication map) listing stations with pending frames, and the station wakes on its beacon to fetch with PS-Poll frames. In ad hoc mode, ATIM windows coordinate the same trick peer-to-peer. The design point: radio receive drains batteries, so sleeping through idle beacons is where the energy goes — a well-managed station transmits for milliseconds and sleeps for seconds.",
              "Exam angle: walk the join sequence in order (scan → authenticate → associate → reassociate on roam) and explain TIM/PS-Poll in two sentences. Traps: swapping authentication and association (authentication proves the right to join; association is the join), claiming active scanning is required (passive is the quiet default), and forgetting that reassociation — not a new association — is what makes roaming seamless.",
            ],
            keyTerms: [
              { term: "Beacon", definition: "Periodic AP broadcast carrying SSID, clock (TSF) and the TIM." },
              { term: "Passive / active scanning", definition: "Listening to beacons across channels vs sending probe requests — quiet vs fast." },
              { term: "Association", definition: "The frame exchange by which a station joins one AP of a BSS." },
              { term: "Reassociation", definition: "Moving membership to another AP of the same ESS — roaming's mechanism." },
              { term: "TIM / PS-Poll", definition: "Beacon flag of buffered traffic; the dozing station's fetch request." },
            ],
            table: {
              caption: "MAC management tasks and their mechanisms.",
              headers: ["Task", "Mechanism", "Why it exists"],
              rows: [
                ["Synchronization", "beacons carry the TSF clock", "power-save windows need common time"],
                ["Scanning", "passive (beacons) or active (probes)", "find APs before joining"],
                ["Authentication", "open-system or shared-key (WEP)", "prove the right to associate"],
                ["Association / reassociation", "assoc / reassoc frames", "join a BSS; roam without losing IP"],
                ["Power management", "AP buffers; TIM + PS-Poll fetch", "sleep through idle beacons, save battery"],
              ],
            },
            bullets: [
              "Join order: scan -> authenticate -> associate; roam = reassociate.",
              "Passive scan: listen to beacons; active scan: probe request/response — faster, louder.",
              "Open-system auth accepts all; shared-key WEP challenges with RC4.",
              "Beacons every ~100 ms carry SSID, TSF clock, TIM.",
              "Dozing stations: AP buffers, TIM flags pending traffic, PS-Poll fetches.",
              "Ad hoc power save: ATIM windows coordinate sleep peer-to-peer.",
              "Transmission is milliseconds; sleep is seconds — that ratio is battery life.",
            ],
            diagram: {
              kind: "cycle",
              title: "Joining, roaming and leaving an 802.11 network",
              caption:
                "Membership is a loop of management frames; reassociation is the step that makes roaming seamless.",
              steps: [
                { label: "Scan", note: "passive beacons or active probes" },
                { label: "Authenticate", note: "open-system or shared-key" },
                { label: "Associate", note: "join one AP of the BSS" },
                { label: "Reassociate", note: "roam to a better AP of the same ESS" },
                { label: "Disassociate", note: "leave cleanly or time out" },
              ],
            },
            callout: {
              type: "tip",
              title: "Authentication vs association — get the order right",
              body: "Authentication proves you may join; association is the join itself. Answers that associate before authenticating, or conflate the two, lose the sequence marks. Remember: scan -> authenticate -> associate -> (roam) reassociate.",
            },
            examQuestions: [
              {
                q: "Explain 802.11 MAC management: scanning, authentication, association and reassociation, in the correct order.",
                marks: 7,
                outline: [
                  "Scanning: passive (beacons) vs active (probe request/response)",
                  "Authentication: open-system accepts all; shared-key WEP challenge",
                  "Association: station joins one AP; AP routes its frames",
                  "Reassociation: move to a better AP within the ESS — roaming",
                  "DS transfers the station context between APs; IP survives",
                  "Disassociation/deauthentication clean up departures",
                ],
              },
              {
                q: "How does 802.11 power management work in infrastructure mode?",
                marks: 7,
                outline: [
                  "Station announces doze mode; AP buffers its traffic",
                  "Beacons every ~100 ms carry the TIM listing pending stations",
                  "Station wakes for its beacon, reads TIM, sends PS-Poll",
                  "AP delivers buffered frame(s); station dozes again",
                  "Ad hoc variant: ATIM windows coordinate peers",
                  "Effect: milliseconds awake per beacon interval",
                ],
              },
              {
                q: "Compare passive and active scanning with one advantage each.",
                marks: 7,
                outline: [
                  "Passive: listen to beacons across channels — silent, energy-cheap",
                  "Downside: discovery takes a beacon interval per channel",
                  "Active: send probe requests — fast discovery",
                  "Downside: extra airtime, reveals presence",
                  "Both precede authentication/association",
                ],
              },
            ],
          },
          {
            number: "3.5",
            title: "HIPERLAN: the four versions and protocol architecture",
            body: [
              "HIPERLAN is ETSI's high-performance radio LAN family — Europe's answer to 802.11, and a paper fixture: May 2023 Q4a asked for the four versions with neat sketches and Dec 2024 Q4b asked for the HIPERLAN protocol in detail. HIPERLAN/1 (type 1) is the wireless LAN: 5 GHz, 23.5 Mbit/s (20 typical), ~50 m range, with a channel-access scheme (EY-NPMA, section 3.6) that prioritizes traffic and supports multi-hop relaying through intermediate nodes.",
              "HIPERLAN/2 (type 2) is the multimedia upgrade: 5 GHz OFDM at up to 54 Mbit/s, connection-oriented with negotiated QoS — error control, retransmission and per-connection scheduling. Its architecture is cellular in spirit: an access point controls its cell, stations attach and move with automatic handover, and the DLC layer interfaces cleanly to ATM or IP networks. Type 3 and type 4 were renamed to their applications: HIPERACCESS (formerly HIPERLAN/3) is outdoor fixed wireless access — broadband to home or office; HIPERLINK (formerly HIPERLAN/4) is point-to-point long-distance interconnection of networks at ~155 Mbit/s.",
              "HIPERLAN/1's protocol architecture stacks a physical layer (5 GHz, GMSK-like equalized modulation), a channel access control (CAC) sublayer implementing EY-NPMA, and a MAC sublayer above that handles addressing, hysteresis-based routing over relay nodes and fragmentation. HIPERLAN/2 reorganizes: a physical layer (OFDM), a DLC layer containing MAC, error control (EC) and radio link control (RLC), with RLC handling association and radio resource management. The two architectures answer different philosophies: /1 is distributed and ad-hoc-friendly; /2 is infrastructure-controlled with QoS guarantees.",
              "Exam angle: name all four types with role + radio + rate (a four-row table is the sketch-friendly answer), then draw /1's three sublayers and /2's DLC split. Traps: giving /1 the OFDM engine (OFDM belongs to /2), calling HIPERACCESS a LAN (it is fixed access), and forgetting that HIPERLAN/2's QoS comes from its connection-oriented DLC — that sentence is the standard differentiator against 802.11.",
            ],
            keyTerms: [
              { term: "HIPERLAN/1", definition: "ETSI's 23.5 Mbit/s wireless LAN at 5 GHz with EY-NPMA access and multi-hop relaying." },
              { term: "HIPERLAN/2", definition: "54 Mbit/s OFDM standard with connection-oriented QoS and cellular-style access points." },
              { term: "HIPERACCESS", definition: "Formerly HIPERLAN/3 — outdoor fixed broadband wireless access." },
              { term: "HIPERLINK", definition: "Formerly HIPERLAN/4 — long-distance point-to-point network interconnection (~155 Mbit/s)." },
              { term: "CAC sublayer", definition: "Channel access control — the HIPERLAN/1 sublayer running the EY-NPMA contention." },
            ],
            table: {
              caption: "The four HIPERLAN versions — May 2023 Q4a's question, pre-answered.",
              headers: ["Version", "Role", "Radio", "Rate"],
              rows: [
                ["HIPERLAN/1", "wireless LAN, multi-hop", "5 GHz", "23.5 Mbit/s (20 typical)"],
                ["HIPERLAN/2", "multimedia LAN with QoS", "5 GHz OFDM", "up to 54 Mbit/s"],
                ["HIPERLAN/3 -> HIPERACCESS", "fixed wireless access (outdoor)", "licensed bands", "tens of Mbit/s"],
                ["HIPERLAN/4 -> HIPERLINK", "point-to-point interconnection", "17 GHz class", "≈ 155 Mbit/s"],
              ],
            },
            bullets: [
              "HIPERLAN/1: 5 GHz, 23.5 Mbit/s, ~50 m, EY-NPMA, multi-hop relaying.",
              "HIPERLAN/2: OFDM, 54 Mbit/s, connection-oriented QoS, AP-controlled cells.",
              "HIPERACCESS (type 3): fixed outdoor broadband access, not a LAN.",
              "HIPERLINK (type 4): ~155 Mbit/s point-to-point network interconnection.",
              "HIPERLAN/1 stack: PHY -> CAC (EY-NPMA) -> MAC (hysteresis routing).",
              "HIPERLAN/2 stack: PHY -> DLC (MAC + EC + RLC); RLC owns association/RRM.",
              "/1 is distributed and ad hoc friendly; /2 is centrally controlled with QoS.",
            ],
            diagram: {
              kind: "compare",
              title: "HIPERLAN/1 vs HIPERLAN/2",
              caption:
                "Same family, two philosophies: distributed contention vs centrally scheduled QoS.",
              left: {
                heading: "HIPERLAN/1",
                items: [
                  "23.5 Mbit/s at 5 GHz, ~50 m",
                  "Distributed EY-NPMA contention",
                  "Multi-hop relaying through nodes",
                  "Best-effort, connectionless",
                ],
              },
              right: {
                heading: "HIPERLAN/2",
                items: [
                  "Up to 54 Mbit/s at 5 GHz, OFDM",
                  "AP-scheduled, connection-oriented",
                  "Negotiated QoS + error control (ARQ)",
                  "Automatic handover between cells",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "HIPERLAN is a two-paper fixture",
              body: "May 2023 asked twice — Q4a (four versions with sketches, 7) and Q4b (three channel accesses of HIPERLAN-1, 7); Dec 2024 Q4b asked 'Explain HIPERLAN protocol in detail' (7); Jun 2025 Q6a asked its physical layer and access control sublayer (7). One prepared four-version table plus the /1 stack covers all four questions.",
            },
            examQuestions: [
              {
                q: "What are the four different versions of HIPERLAN? Explain with neat sketches.",
                marks: 7,
                appearances: ["May 2023"],
                outline: [
                  "HIPERLAN/1: wireless LAN, 5 GHz, 23.5 Mbit/s, multi-hop, EY-NPMA",
                  "HIPERLAN/2: multimedia LAN, OFDM, 54 Mbit/s, connection-oriented QoS",
                  "HIPERLAN/3 = HIPERACCESS: fixed outdoor broadband access",
                  "HIPERLAN/4 = HIPERLINK: ~155 Mbit/s point-to-point interconnection",
                  "Four-row table or four labelled sketches",
                  "Differentiate LAN vs access vs interconnection roles",
                ],
              },
              {
                q: "Explain HIPERLAN protocol in detail.",
                marks: 7,
                appearances: ["Dec 2024"],
                outline: [
                  "Family of four: /1 LAN, /2 QoS LAN, /3 HIPERACCESS, /4 HIPERLINK",
                  "HIPERLAN/1 stack: PHY -> CAC -> MAC",
                  "CAC runs EY-NPMA prioritized contention",
                  "MAC adds hysteresis-based routing over relay nodes",
                  "HIPERLAN/2 stack: PHY (OFDM) -> DLC (MAC, EC, RLC)",
                  "RLC handles association and radio resource management; QoS per connection",
                ],
              },
              {
                q: "How does HIPERLAN/2 deliver QoS, and why can HIPERLAN/1 not?",
                marks: 7,
                outline: [
                  "/2 is connection-oriented: per-connection negotiation of rate/error targets",
                  "AP schedules uplink/downlink per connection — deterministic slots",
                  "Error control layer retries with ARQ per connection",
                  "/1 is distributed contention: EY-NPMA gives priority, not guarantees",
                  "Contention offers probability, not determinism — no contracts",
                  "Trade-off: /2 needs infrastructure and control overhead",
                ],
              },
            ],
          },
          {
            number: "3.6",
            title: "HIPERLAN physical layer, access control and MAC sublayers",
            body: [
              "HIPERLAN/1's physical layer works at 5 GHz with a channel spacing of 20 MHz (five channels) and a single-carrier modulation — GMSK with adaptive equalization pushing to 23.5 Mbit/s nominal (20 Mbit/s usable). Range is about 50 m at 1 Mbit/s fallback rates. The equalizer is not optional: indoor 5 GHz multipath is severe, and the same section-1.3 arithmetic that forced OFDM into 802.11a forces equalization here.",
              "The channel access control (CAC) sublayer runs EY-NPMA — elimination yield, non-preemptive multiple access — a three-phase contention. Prioritization: a burst whose length tracks the packet's priority clears lower-priority rivals first. Elimination: each contender bursts a random length (0-4 slots); survivors advance. Yield: each survivor listens a further random slot count; the first to find silence transmits. Highest priority statistically wins, and within a priority class the winner is random — fair, distributed, and collision-free in practice without any access point.",
              "The MAC sublayer sits above CAC and adds what contention cannot: three MAC addresses per packet (source, destination, and the current relay node — the multi-hop trick), a lifetime field for the relaying decision, and hysteresis-based routing: each node tracks neighbours ranked by signal quality, forwarding via the best path with enough margin, so routes survive node movement without a routing protocol. This hop-by-hop relaying was HIPERLAN/1's signature — a WLAN that routed itself years before mesh Wi-Fi.",
              "May 2023 Q4b asked 'what are the three channel accesses in HIPERLAN-1' — the answer is the EY-NPMA trio: prioritization, elimination, yield. Jun 2025 Q6a asked for the physical layer and access control sublayer — pair the 5 GHz/23.5 Mbit/s PHY numbers with the three-phase contention and both questions are covered. Traps: giving /2's OFDM to /1 (wrong generation), forgetting the third MAC address (the relay — evidence you know it is multi-hop), and describing yield as another burst (it is listening, not transmitting).",
            ],
            keyTerms: [
              { term: "EY-NPMA", definition: "Elimination yield, non-preemptive multiple access — HIPERLAN/1's prioritized three-phase contention." },
              { term: "Prioritization phase", definition: "Burst length proportional to packet priority — clears lower classes first." },
              { term: "Elimination phase", definition: "Random-length burst (0-4 slots); survivors advance to yield." },
              { term: "Yield phase", definition: "Random listening window; the first station to find the channel idle transmits." },
              { term: "Hysteresis routing", definition: "MAC-level forwarding over the best-quality neighbour path with margin — multi-hop without a routing protocol." },
            ],
            bullets: [
              "PHY: 5 GHz, 20 MHz channels, GMSK + adaptive equalizer, 23.5 Mbit/s.",
              "Equalizer mandatory: indoor 5 GHz multipath is severe.",
              "CAC = EY-NPMA: prioritization -> elimination -> yield.",
              "Priority burst length clears lower classes; elimination is a random burst duel.",
              "Yield: listen a random number of slots — silence means you transmit.",
              "MAC adds three addresses (source, destination, relay) — multi-hop native.",
              "Hysteresis routing: forward via best neighbour with quality margin.",
            ],
            diagram: {
              kind: "flow",
              title: "EY-NPMA: three phases to the channel",
              caption:
                "Priority filters the field, elimination thins it, yield picks one — no access point, no collisions in practice.",
              steps: [
                { label: "Prioritization", note: "burst length = packet priority" },
                { label: "Elimination", note: "random 0-4 slot bursts; survivors advance" },
                { label: "Yield", note: "listen a random further count" },
                { label: "Transmit", note: "first silent-listener wins the channel" },
              ],
            },
            callout: {
              type: "exam",
              title: "Both halves asked across two papers",
              body: "May 2023 Q4b: 'What are the three channel accesses in HIPERLAN-1?' — prioritization, elimination, yield. Jun 2025 Q6a: 'Discuss physical layer and access control sub layer of HIPERLAN' — the 5 GHz/23.5 Mbit/s PHY plus the same three phases. One EY-NPMA paragraph plus one PHY paragraph answers both 7-mark questions.",
            },
            codeExample: {
              language: "python",
              caption: "ey_npma.py — the three phases as arithmetic",
              code: `import random

def ey_npma_offset(priority: int) -> int:
    # 1. prioritization: earlier start for higher priority
    prio = 1 + (3 - priority)          # high priority (3) starts at slot 1
    # 2. elimination: each node bursts 0..4 slots; survivors advance
    elim = random.randint(0, 4)
    # 3. yield: listen a further random 0..(prio+elim) slots
    return prio + elim + random.randint(0, prio + elim)

# lowest total offset transmits first - priority biases, randomness breaks ties`,
            },
            examQuestions: [
              {
                q: "What are the three channel accesses in HIPERLAN-1?",
                marks: 7,
                appearances: ["May 2023"],
                outline: [
                  "Prioritization: burst length proportional to packet priority",
                  "Lower-priority rivals cleared before contention starts",
                  "Elimination: random 0-4 slot bursts; only survivors advance",
                  "Yield: each survivor listens a random further count of slots",
                  "First to find the channel idle transmits — collision-free in practice",
                  "Distributed: no AP, no central scheduler",
                ],
              },
              {
                q: "Discuss physical layer and access control sub layer of HIPERLAN.",
                marks: 7,
                appearances: ["Jun 2025"],
                outline: [
                  "PHY: 5 GHz band, 20 MHz channel spacing, five channels",
                  "Single-carrier GMSK with adaptive equalization; 23.5 Mbit/s nominal",
                  "Range ~50 m with 1 Mbit/s fallback rates",
                  "CAC sublayer runs EY-NPMA: prioritization, elimination, yield",
                  "Priority burst length; elimination duel; yield listening",
                  "Result: prioritized, fair, distributed channel access",
                ],
              },
              {
                q: "Explain HIPERLAN/1's multi-hop capability: the third MAC address and hysteresis routing.",
                marks: 7,
                outline: [
                  "Packets carry source, destination and current relay addresses",
                  "Intermediate nodes forward toward the destination",
                  "Hysteresis routing: rank neighbours by signal quality",
                  "Forward via the best path with a quality margin",
                  "Routes survive node movement without a routing protocol",
                  "Coverage extends beyond one cell — mesh Wi-Fi's ancestor",
                ],
              },
            ],
          },
          {
            number: "3.7",
            title: "Bluetooth: scenarios, physical layer and MAC",
            body: [
              "Bluetooth (IEEE 802.15.1) is the personal-area network: cable replacement over ~10 m. User scenarios cover the everyday list — cordless headset and hands-free audio, file transfer and object push between phone and PC, synchronization of calendars and contacts, dial-up networking through a phone's modem, LAN access through a master, cordless peripherals (mouse, keyboard), and intercom. Dec 2024 Q5a and Jun 2025 Q5a asked 'what is Bluetooth network? notes on physical and MAC layer' — the scenario list opens the answer, the radio and MAC carry the rest.",
              "The physical layer is engineered for cheap, crowded spectrum: 2.4 GHz ISM, 79 channels of 1 MHz, frequency-hopping at 1600 hops per second (a new channel every 625 μs slot) — interference resistance by agility, not by power. GFSK modulation gives 1 Mbit/s raw (≈ 721 kbit/s usable asymmetric). Power classes set range: class 3 (1 mW, ~1 m), class 2 (2.5 mW, ~10 m — the phone default), class 1 (100 mW, ~100 m). Hopping patterns are derived from the master's address and clock, which is also how devices find each other: inquiry discovers, paging connects.",
              "The MAC is master-driven time-division duplex. A piconet has one master and up to 7 active slaves (3-bit AM_ADDR); more devices sit parked (up to 255, unaddressed but synchronized). The master polls — slaves transmit only in slots the master's addressing opens — and packets occupy 1, 3 or 5 slots. Two link types split the traffic: SCO (synchronous connection-oriented — reserved periodic slots, 64 kbit/s voice, no retransmission) and ACL (asynchronous connectionless — best-effort data with fast ACK/retransmit). Scatternets link piconets through bridge devices that time-share between masters.",
              "Exam angle: name the stack heights (radio → baseband → LMP → L2CAP → RFCOMM/SDP → profiles), give the radio numbers (79 channels, 1600 hops/s, 625 μs, 1 Mbit/s), and define the piconet arithmetic (1 master + 7 active + 255 parked, SCO vs ACL). Traps: saying Bluetooth is CSMA-based (it is polled TDD — the master decides), confusing hopping rate with data rate, and forgetting that only 7 slaves are active (3-bit address is the reason).",
            ],
            keyTerms: [
              { term: "Piconet", definition: "One master + up to 7 active slaves (+255 parked) sharing a hopping sequence." },
              { term: "Frequency hopping", definition: "1600 hops/s across 79 × 1 MHz channels — interference resistance by agility." },
              { term: "SCO / ACL", definition: "Reserved periodic slots for 64 kbit/s voice vs best-effort polled data with retransmission." },
              { term: "L2CAP", definition: "Logical link control and adaptation protocol — multiplexing and segmentation above baseband." },
              { term: "Scatternet", definition: "Linked piconets joined by bridge devices participating in several masters' schedules." },
            ],
            table: {
              caption: "Bluetooth radio and network parameters at a glance.",
              headers: ["Parameter", "Value", "Why it matters"],
              rows: [
                ["Band", "2.4 GHz ISM, 79 × 1 MHz channels", "licence-free but crowded"],
                ["Hop rate / slot", "1600 hops/s, 625 μs slots", "agility beats interference"],
                ["Modulation / rate", "GFSK, 1 Mbit/s (~721 usable)", "cheap, low-power radios"],
                ["Topology", "1 master + 7 active + 255 parked", "3-bit AM_ADDR caps active slaves"],
                ["Links", "SCO 64 kbit/s voice; ACL best-effort data", "voice survives, data retries"],
                ["Range (classes)", "1 m / 10 m / 100 m", "class 2 is the phone default"],
              ],
            },
            bullets: [
              "Scenarios: headset audio, file transfer, synchronization, dial-up, LAN access, peripherals, intercom.",
              "Radio: 2.4 GHz, 79 channels, 1600 hops/s, 625 μs slots, GFSK 1 Mbit/s.",
              "Power classes: 1 mW (~1 m), 2.5 mW (~10 m), 100 mW (~100 m).",
              "Piconet: 1 master + 7 active slaves (3-bit address) + 255 parked.",
              "Master-driven TDD polling; packets of 1, 3 or 5 slots.",
              "SCO: reserved slots, 64 kbit/s voice, no retries; ACL: best-effort with retransmission.",
              "Stack: radio -> baseband -> LMP -> L2CAP -> RFCOMM/SDP -> profiles.",
              "Scatternet: bridges time-share between two piconets.",
            ],
            diagram: {
              kind: "layers",
              title: "The Bluetooth protocol stack",
              caption:
                "Hardware at the bottom, profiles on top; L2CAP is the multiplexing hinge.",
              layers: [
                { label: "Profiles / applications", note: "headset, file transfer, LAN access, sync" },
                { label: "RFCOMM · SDP · OBEX · TCS", note: "serial emulation, service discovery, object exchange" },
                { label: "L2CAP", note: "multiplexing, segmentation, QoS hints" },
                { label: "LMP", note: "link setup, power modes, encryption control" },
                { label: "Baseband", note: "hopping, packets (1/3/5 slots), SCO + ACL" },
                { label: "Radio", note: "2.4 GHz GFSK, 79 channels, 1600 hops/s" },
              ],
            },
            callout: {
              type: "exam",
              title: "Asked in both Dec 2024 and Jun 2025",
              body: "Dec 2024 Q5a: 'Comment on physical and MAC layer of Bluetooth technology'; Jun 2025 Q5a: 'What is Bluetooth network? Write notes on physical and MAC layer of Bluetooth network' — near-identical 7-mark questions two sessions apart. The scenario list + radio numbers + piconet/SCO/ACL structure is the complete prepared answer.",
            },
            examQuestions: [
              {
                q: "What is Bluetooth network? Write notes on physical and MAC layer of Bluetooth network.",
                marks: 7,
                appearances: ["Dec 2024", "Jun 2025"],
                outline: [
                  "Bluetooth = 802.15.1 personal-area network, ~10 m cable replacement",
                  "Scenarios: headset, file transfer, sync, dial-up, LAN access, peripherals",
                  "Physical: 2.4 GHz ISM, 79 × 1 MHz channels, 1600 hops/s, GFSK 1 Mbit/s",
                  "Power classes: 1 mW / 2.5 mW / 100 mW — ranges 1/10/100 m",
                  "MAC: master-driven TDD polling in piconets (1 + 7 active + 255 parked)",
                  "SCO (voice, reserved, no retry) vs ACL (data, best-effort, retried)",
                  "Scatternets via bridge devices",
                ],
              },
              {
                q: "Explain the Bluetooth piconet and the roles of master, slave and parked devices.",
                marks: 7,
                outline: [
                  "Piconet: one master + up to 7 active slaves",
                  "3-bit AM_ADDR is why exactly 7 are active",
                  "Master's address + clock define the hopping sequence",
                  "Master polls; slaves speak only when addressed (TDD slots)",
                  "Parked devices: synchronized but unaddressed, up to 255",
                  "Parked -> active swap keeps more devices reachable",
                ],
              },
              {
                q: "Compare Bluetooth's SCO and ACL links with one use case each.",
                marks: 7,
                outline: [
                  "SCO: synchronous connection-oriented — reserved periodic slots",
                  "64 kbit/s voice; no retransmission (late is worse than lost)",
                  "Use: headset audio, intercom",
                  "ACL: asynchronous, best-effort — polled slots, fast ACK/retry",
                  "Use: file transfer, synchronization, LAN access",
                  "A slave supports limited SCO links plus one ACL",
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
      title: "Mobile Network and Transport Layers",
      summary:
        "Unit IV carries the internet into motion: Mobile IP with its agents, registration and three encapsulations; DHCP's lease machinery; ad hoc networks with their characteristics, performance issues and routing families (DSDV, AODV, DSR); wireless sensor networks; the mobile transport layer — indirect TCP, snooping TCP, mobile TCP, timeout freezing, selective retransmission, transaction-oriented TCP — and an introduction to WAP.",
      chapter: {
        number: "04",
        title: "Making IP and TCP Move",
        intro:
          "Unit IV covers Mobile IP (agent discovery, registration, tunneling, encapsulations), DHCP, ad hoc network characteristics and performance with routing for mobile hosts, wireless sensor networks, the mobile transport layer fixes (indirect TCP, snooping TCP, mobile TCP, timeout freezing, selective retransmission, transaction-oriented TCP) and an introduction to WAP.",
        inOneBreath:
          "Mobile IP keeps one home address while a home agent tunnels packets to a care-of address using IP-in-IP, minimal or GRE encapsulation; DHCP's DORA exchange leases addresses dynamically; MANETs are infrastructure-free multi-hop nets whose routes break with mobility — answered by proactive DSDV or reactive AODV/DSR; WSNs spend bandwidth on energy discipline around a sink; TCP breaks on wireless because loss means congestion — fixed by splitting (I-TCP), transparent snooping, window-freezing M-TCP, timer freezing, selective retransmission, or T/TCP's one-RTT transactions; WAP compresses the web into WAE/WSP/WTP/WTLS/WDP.",
        sections: [
          {
            number: "4.1",
            title: "Mobile IP: agents, registration and tunneling",
            body: [
              "IP was designed for stationary hosts: the address binds identity to location, so moving breaks routing. Mobile IP (RFC 2002) repairs this without changing IP: a mobile node (MN) keeps its home address; a home agent (HA) router in the home network intercepts packets for it; a foreign agent (FA) in the visited network offers a care-of address (COA); and a tunnel carries packets from HA to COA. Correspondent nodes (CN) send to the home address as always — mobility stays invisible to them.",
              "The lifecycle has three phases. Agent discovery: HA and FA advertise COAs via ICMP router advertisements (or the MN solicits). Registration: the MN sends a registration request (via FA) to its HA; the HA authenticates, binds home address → COA, and replies — the binding has a lifetime and must be renewed. Tunneling and delivery: the HA encapsulates packets for the home address into packets for the COA; the FA decapsulates and delivers on the local link. The MN replies directly to the CN — hence triangular routing. Reverse tunneling (RFC 3024) exists for networks that filter source addresses.",
              "Three encapsulations carry the tunnel, and May 2023 Q7b asked for their header fields. IP-in-IP (RFC 2003): a complete second IP header (20 bytes) prepended, protocol number 4 — simple but heavy. Minimal encapsulation (RFC 2004): a compact 8-12 byte forwarding header (type, next header, checksum, identifier, optional original source address) inserted between outer and inner headers — lighter, needs the FA. GRE (generic routing encapsulation, protocol 47): a flexible header (flags/version, protocol type) that can tunnel any payload protocol, not just IP. Dec 2024 Q8 also carried 'Mobile IP' as short-note (a) of its three-note 14-mark question.",
              "Exam angle: draw the triangle (CN → HA → tunnel → FA → MN, MN → CN direct), list the three phases in order, and tabulate the three encapsulations with header size and protocol number. Traps: saying the MN registers directly with the HA (the FA relays), claiming the COA is the MN's own address (that is the co-located variant; the classic COA belongs to the FA), and forgetting registration lifetimes — mobility soft-state, not permanent state.",
            ],
            keyTerms: [
              { term: "Home agent (HA)", definition: "Home-network router that intercepts packets for the MN and tunnels them to the COA." },
              { term: "Foreign agent (FA)", definition: "Visited-network router offering a COA and decapsulating delivered packets." },
              { term: "Care-of address (COA)", definition: "The tunnel's exit address — the FA's address, or the MN's own co-located address." },
              { term: "IP-in-IP encapsulation", definition: "RFC 2003 tunneling: a full 20-byte IP header prepended, protocol number 4." },
              { term: "Triangular routing", definition: "CN → HA → tunnel → MN outbound, MN → CN direct inbound." },
            ],
            bullets: [
              "Problem: IP address binds identity and location — movement breaks both.",
              "Entities: MN, HA, FA, COA, CN; home address never changes.",
              "Phase 1 agent discovery: ICMP advertisements offer the COA.",
              "Phase 2 registration: MN → (FA) → HA; authenticated binding with lifetime.",
              "Phase 3 tunneling: HA encapsulates to COA; FA decapsulates to the MN.",
              "Encapsulations: IP-in-IP (proto 4, 20 B), minimal (proto 55, 8-12 B), GRE (proto 47, flexible).",
              "MN replies directly to the CN — triangular routing; reverse tunnel fixes filtering.",
              "Dec 2024 Q8 carried Mobile IP as a short note; May 2023 Q7b asked the header fields.",
            ],
            diagram: {
              kind: "flow",
              title: "Mobile IP packet delivery",
              caption:
                "The home address never changes; the tunnel moves; the CN never learns anything happened.",
              steps: [
                { label: "Agent discovery", note: "HA/FA advertisements offer a COA" },
                { label: "Registration", note: "MN -> (FA) -> HA; binding with lifetime" },
                { label: "CN sends", note: "to the unchanged home address" },
                { label: "HA tunnels", note: "IP-in-IP to the COA" },
                { label: "FA delivers", note: "decapsulates onto the visited link" },
                { label: "MN replies", note: "directly to the CN (triangular routing)" },
              ],
            },
            callout: {
              type: "exam",
              title: "Mobile IP earned 21 marks across two papers",
              body: "Dec 2024 Q8 asked short notes on Mobile IP (with TETRA and Intruders) — 14 marks; May 2023 Q7b asked the header fields of IP-in-IP, minimal and generic routing encapsulation — 7 marks. Prepare the triangle diagram plus a three-row encapsulation table; both questions are then free marks.",
            },
            codeExample: {
              language: "python",
              caption: "ip_in_ip.py — tunnel encapsulation as data",
              code: `def ip_in_ip(inner: dict, ha: str, coa: str) -> dict:
    # RFC 2003: a whole IP packet becomes the payload of a new IP header
    return {
        "src": ha,            # tunnel entry: the home agent
        "dst": coa,           # tunnel exit: the care-of address
        "protocol": 4,        # IP-in-IP
        "payload": inner,     # untouched original (CN -> home address)
    }

packet = ip_in_ip({"src": "10.0.0.9", "dst": "161.85.14.122"},
                  ha="161.85.0.1", coa="170.10.0.2")
print(packet["protocol"], packet["dst"])   # 4 170.10.0.2`,
            },
            examQuestions: [
              {
                q: "Write short notes on the following: (a) Mobile IP, (b) TETRA, (c) Intruders.",
                marks: 14,
                appearances: ["Dec 2024"],
                outline: [
                  "Mobile IP: MN/HA/FA/COA/CN entities; home address never changes",
                  "Discovery -> registration -> tunneling; IP-in-IP/minimal/GRE encapsulations",
                  "Triangular routing and reverse tunneling; registration lifetimes",
                  "TETRA: 4-slot TDMA trunked radio; talkgroups, priority, DMO (section 2.7)",
                  "Intruders: masquerader, misfeasor, clandestine — classes + behaviour (section 5.1)",
                  "Three compact notes, each definition + diagram/list",
                ],
              },
              {
                q: "Explain the header fields of IP-in-IP, minimal, generic routing encapsulation.",
                marks: 7,
                appearances: ["May 2023"],
                outline: [
                  "IP-in-IP (RFC 2003): full second IP header — src = HA, dst = COA, protocol 4",
                  "Fields: version, IHL, ToS, total length, ID, flags, TTL, protocol, checksum, addresses",
                  "Minimal encapsulation (RFC 2004): 8-12 byte forwarding header",
                  "Fields: type, next header, header checksum, identifier, optional original source address",
                  "GRE (protocol 47): flags+version word, protocol type, then payload",
                  "GRE tunnels any protocol, not only IP; minimal is the lightest for IP",
                ],
              },
              {
                q: "Explain Mobile IP registration and agent discovery with the message sequence.",
                marks: 7,
                outline: [
                  "Agent advertisement: ICMP router advertisement + COA extensions",
                  "MN may solicit; chooses FA-COA or co-located COA (DHCP)",
                  "Registration request: MN -> FA -> HA (home address, COA, lifetime)",
                  "HA authenticates (mobile-home auth extension) and binds",
                  "Registration reply: HA -> FA -> MN; lifetime renewal while roaming",
                  "Deregistration on return home; bindings are soft state",
                ],
              },
            ],
          },
          {
            number: "4.2",
            title: "DHCP and dynamic address allocation",
            body: [
              "DHCP (dynamic host configuration protocol, RFC 2131) hands out network configuration on demand: an arriving client broadcasts a DISCOVER, and DHCP servers reply with everything needed to operate — IP address, subnet mask, default gateway, DNS servers, and a lease time. Configuration becomes a property of the connection, not of the machine: plug into any network, receive a valid identity, leave and free it. UDP ports 67 (server) and 68 (client); relay agents carry broadcasts across routers so one server can serve many subnets.",
              "The exchange is DORA. Discover: the client broadcasts its request. Offer: a server proposes an address and parameters. Request: the client broadcasts its acceptance of one offer (so other servers withdraw theirs). Ack: the chosen server confirms the lease with a T1 renewal time at 50% and T2 rebinding at 87.5% of the lifetime — a bound client unicast a renewal request to its original server at T1, falls back to broadcasting at T2, and must rebind or restart if the lease dies. Allocation modes: dynamic (default), automatic (permanent), and manual (admin-assigned) — DHCP still relays the manual entry.",
              "Why mobile networks care: movement creates reconfiguration churn. A device crossing networks needs a valid address per network — manually assigned addresses break, and DHCP makes the transition automatic; DHCP is also how Mobile IP's co-located care-of addresses are obtained. DHCP itself is not mobility: it reconfigures rather than preserves — a leased address changes at every network, killing TCP sessions — which is exactly the gap Mobile IP fills on top.",
              "Dec 2024 Q6b asked 'What is DHCP? How does DHCP support dynamic address allocation?' — the answer is DORA plus the lease timers. May 2023 Q8 carried DHCP as short-note (i) of its 14-mark pair with MAC layer. Traps: writing DISCOVER → OFFER → REQUEST → ACK with no lease/timers (the allocation story is the question's core), forgetting that REQUEST is broadcast (to withdraw losing offers), and claiming DHCP gives mobility — it gives configuration; Mobile IP gives mobility.",
            ],
            keyTerms: [
              { term: "DORA", definition: "Discover → Offer → Request → Ack — DHCP's four-message lease exchange." },
              { term: "Lease", definition: "Time-limited grant of an address; T1 = 50% renewal, T2 = 87.5% rebinding." },
              { term: "DHCP relay agent", definition: "Forwards client broadcasts across routers to a central server (giaddr marks the subnet)." },
              { term: "Co-located COA", definition: "A Mobile IP care-of address the MN obtains itself — typically via DHCP." },
              { term: "Allocation modes", definition: "Dynamic (leased), automatic (permanent), manual (admin-fixed but DHCP-delivered)." },
            ],
            table: {
              caption: "The DORA exchange and its timers.",
              headers: ["Message", "From -> to", "Content / role"],
              rows: [
                ["DISCOVER", "client -> broadcast", "'I need configuration'"],
                ["OFFER", "server -> client", "proposed IP, mask, gateway, DNS, lease time"],
                ["REQUEST", "client -> broadcast", "accepts one offer; losing servers withdraw"],
                ["ACK", "server -> client", "lease bound; T1 = 50%, T2 = 87.5% of lifetime"],
                ["NAK / DECLINE", "either direction", "lease refused or address conflict found"],
                ["RELEASE", "client -> server", "returns the address early"],
              ],
            },
            bullets: [
              "DHCP hands out IP, mask, gateway, DNS and lease time on demand.",
              "UDP 67 server / 68 client; relay agents bridge subnets.",
              "DORA: Discover -> Offer -> Request (broadcast) -> Ack.",
              "Lease timers: renew at T1 = 50% to the original server; rebind at T2 = 87.5%.",
              "Allocation modes: dynamic, automatic, manual.",
              "For mobility: DHCP = automatic reconfiguration; Mobile IP = preserved identity.",
              "DHCP supplies Mobile IP's co-located care-of addresses.",
              "Dec 2024 Q6b + May 2023 Q8 both asked DHCP.",
            ],
            diagram: {
              kind: "cycle",
              title: "The DHCP lease life",
              caption:
                "Four messages to get in, two timers to stay in, one release to get out.",
              steps: [
                { label: "DISCOVER", note: "client broadcasts for any server" },
                { label: "OFFER", note: "server proposes address + parameters" },
                { label: "REQUEST / ACK", note: "lease bound" },
                { label: "RENEW at T1", note: "unicast to the original server (T2 = rebind)" },
              ],
            },
            callout: {
              type: "exam",
              title: "DHCP asked in two papers",
              body: "Dec 2024 Q6b asked DHCP and how it supports dynamic address allocation (7 marks); May 2023 Q8 carried DHCP as short-note (i) of its 14-mark pair. Prepare DORA + lease timers + one mobility link (co-located COA) — all three marking points in one paragraph.",
            },
            examQuestions: [
              {
                q: "What is DHCP? How does DHCP support dynamic address allocation?",
                marks: 7,
                appearances: ["Dec 2024"],
                outline: [
                  "DHCP: automatic host configuration (IP, mask, gateway, DNS) on demand",
                  "DORA: DISCOVER broadcast -> OFFER -> REQUEST -> ACK",
                  "REQUEST broadcast so losing servers withdraw their offers",
                  "Lease with T1 = 50% renewal, T2 = 87.5% rebinding",
                  "Allocation modes: dynamic, automatic, manual",
                  "Relay agents serve many subnets from one server",
                ],
              },
              {
                q: "Write short notes on the following: (i) Dynamic Host Configuration Protocol (DHCP), (ii) MAC layer.",
                marks: 14,
                appearances: ["May 2023"],
                outline: [
                  "DHCP: purpose + DORA exchange + lease timers T1/T2",
                  "DHCP: relay agents, allocation modes, role in mobile configuration",
                  "MAC layer: medium access control — CSMA/CA in WLAN, TDMA in GSM",
                  "MAC: framing, addressing, reliable delivery, power management",
                  "Two compact notes, one sketch each (DORA arrows; MAC position in stack)",
                ],
              },
              {
                q: "How does DHCP interact with Mobile IP, and why is DHCP alone not mobility?",
                marks: 7,
                outline: [
                  "DHCP provides co-located care-of addresses for Mobile IP",
                  "DHCP reconfigures: new network, new address — TCP sessions break",
                  "Mobile IP preserves the home address across moves",
                  "DHCP = configuration mobility; Mobile IP = session continuity",
                  "FA-less operation: MN registers its DHCP address as COA",
                ],
              },
            ],
          },
          {
            number: "4.3",
            title: "Ad hoc networks: characteristics and performance issues",
            body: [
              "A mobile ad hoc network (MANET) is a network without infrastructure: every node is both terminal and router, forwarding others' packets over multi-hop wireless paths. No base stations, no fixed servers, no pre-built addressing — the network exists wherever the nodes are, self-organizing and self-healing. Contrast with the managed WLAN of Unit III: there an AP coordinates; here coordination itself is distributed.",
              "The characteristics are a fixed list in every textbook and every exam answer: dynamic topology (nodes move, links appear and vanish), multi-hop communication, distributed operation with no central coordinator, bandwidth-constrained shared radio, energy-constrained battery devices, limited physical security (no locked switch rooms — attacks ride the air), and autonomous terminals. Jun 2025 Q6b asked for exactly these with performance issues and applications — a five-bullet characteristics list plus a five-bullet issues list is the prepared answer.",
              "Performance issues follow from the characteristics. Throughput decays with hop count — every hop re-transmits the same packets over the same shared channel, and practical capacity collapses beyond 2-3 hops. Route breakage under mobility forces rediscovery floods that dominate the channel at speed. MAC contention, hidden terminals and interference grow with load. Energy drains disproportionately on relay nodes. Applications ride the same list: disaster recovery and rescue (infrastructure destroyed), military battlefield networks, vehicular communication, conference/classroom collaboration, and sensor field deployment.",
              "Exam angle: define MANET in one sentence (infrastructure-less, self-organizing, multi-hop), list characteristics and performance issues as paired bullets, and close with three applications. Traps: confusing MANET with the 802.11 IBSS (an IBSS is a single-hop ad hoc bubble; MANET implies multi-hop routing), and listing applications without the infrastructure-destroyed motivation that justifies them.",
            ],
            keyTerms: [
              { term: "MANET", definition: "Mobile ad hoc network — infrastructure-less, self-organizing, every node a router." },
              { term: "Multi-hop", definition: "Packets forwarded node-to-node; reach without radios that span the distance." },
              { term: "Dynamic topology", definition: "Links form and break as nodes move — routing must track the map continuously." },
              { term: "Hop-count capacity decay", definition: "Each hop re-transmits over the shared channel; throughput falls steeply past 2-3 hops." },
              { term: "Energy-constrained routing", definition: "Relay nodes spend battery on others' traffic — routing must balance load." },
            ],
            table: {
              caption: "MANET characteristics, their performance consequences, and the mitigations.",
              headers: ["Characteristic", "Performance consequence", "Mitigation"],
              rows: [
                ["No infrastructure — every node routes", "capacity falls with hop count", "efficient on-demand routing (AODV/DSR)"],
                ["Dynamic topology from mobility", "routes break; floods rediscover", "sequence numbers, local repair, route cache"],
                ["Shared wireless bandwidth", "contention, hidden terminals", "RTS/CTS, load-aware channel access"],
                ["Energy-constrained nodes", "relaying drains the battery", "power-aware metrics, duty cycling"],
                ["No central trust point", "routing attacks (blackhole, replay)", "cryptographic route authentication"],
              ],
            },
            bullets: [
              "MANET = infrastructure-less, self-organizing, multi-hop wireless network.",
              "Characteristics: dynamic topology, distributed operation, bandwidth + energy constraints, weak physical security.",
              "Throughput decays with hop count — practical beyond ~2-3 hops.",
              "Mobility breaks routes; rediscovery floods dominate at speed.",
              "Hidden terminals and contention grow with load.",
              "Applications: disaster recovery, military, vehicular, conferences, sensor fields.",
              "IBSS ≠ MANET: single-hop bubble vs multi-hop routing network.",
            ],
            diagram: {
              kind: "matrix",
              title: "Where does a MANET sit among wireless networks?",
              caption:
                "Mobility against infrastructure dependence — the MANET quadrant is the hard one, and the exam's favourite.",
              axes: { x: "Infrastructure dependence (independent -> dependent)", y: "Node mobility (low -> high)" },
              quadrants: [
                { label: "MANET", note: "mobile nodes, no infrastructure — self-routing (Unit IV)" },
                { label: "Cellular / managed WLAN", note: "mobile nodes, fixed infrastructure coordinates" },
                { label: "WSN", note: "static nodes, no infrastructure — data-centric (next section)" },
                { label: "Traditional wired LAN", note: "static nodes, full infrastructure" },
              ],
            },
            callout: {
              type: "exam",
              title: "Asked in Jun 2025",
              body: "Jun 2025 Q6b: 'What is an Ad Hoc network? Write characteristics, performance issues and applications of Ad hoc networks' (7 marks). Answer as three labelled lists — definition, characteristics (4-5), issues (4-5) — and close with three applications; the infrastructure-destroyed motivation earns the application mark.",
            },
            examQuestions: [
              {
                q: "What is an Ad Hoc network? Write characteristics, performance issues and applications of Ad hoc networks.",
                marks: 7,
                appearances: ["Jun 2025"],
                outline: [
                  "Definition: infrastructure-less, self-organizing, multi-hop network",
                  "Characteristics: dynamic topology, distributed routing, bandwidth/energy limits",
                  "Weak physical security — attacks ride the air",
                  "Issues: throughput decays with hops; route breakage; contention; energy drain",
                  "Rediscovery floods under high mobility",
                  "Applications: disaster recovery, military, vehicular, conferences, sensors",
                ],
              },
              {
                q: "Why does MANET throughput collapse with hop count, and what mitigates it?",
                marks: 7,
                outline: [
                  "Every hop re-transmits over the same shared channel",
                  "n hops of one flow consume ≈ n times the airtime",
                  "Interference extends beyond one hop — spatial reuse is limited",
                  "Practical: beyond 2-3 hops, end-to-end capacity collapses",
                  "Mitigations: fewer hops by placement, directional antennas, load-aware routing",
                ],
              },
              {
                q: "Contrast a MANET with an infrastructure WLAN and a cellular network in one table.",
                marks: 7,
                outline: [
                  "Infrastructure: cellular/WLAN have fixed APs/MSCs; MANET none",
                  "Routing: network-controlled vs every-node-routes",
                  "Topology: stable vs dynamic per movement",
                  "Capacity: planned vs interference-limited multi-hop",
                  "Security: central authentication vs hop-by-hop trust",
                  "Deployment: engineered vs instant (disaster/military)",
                ],
              },
            ],
          },
          {
            number: "4.4",
            title: "Routing in mobile ad hoc networks",
            body: [
              "MANET routing splits by philosophy. Proactive (table-driven) protocols keep routes to every destination continuously updated — DSDV (destination sequenced distance vector) is the classic: Bellman-Ford distance vectors, but each entry carries a destination-generated sequence number that strictly orders route freshness, killing the count-to-infinity loops of classical DV routing. Periodic and triggered updates keep the tables honest; the cost is constant signalling regardless of traffic.",
              "Reactive (on-demand) protocols discover routes only when needed. AODV floods a route request (RREQ); the destination (or a node with a fresh enough route — sequence numbers again) answers with a route reply (RREP) that sets up forwarding state along the path; breakage triggers route error (RERR) and rediscovery. DSR (source routing) puts the entire route in every packet's header — no forwarding tables at all, nodes learn from overheard traffic (promiscuous listening) and cache routes; May 2023 Q7a asked for exactly this protocol. DSR's header grows with path length; AODV's tables grow with destinations — the trade between them.",
              "Hybrid protocols split the difference: ZRP (zone routing protocol) runs proactive routing inside a k-hop zone around each node and reactive discovery between zones — local flooding stays bounded, distant destinations are found on demand. The selection rule for the exam: high mobility + sparse traffic favours reactive (no stale tables), dense traffic among stable nodes favours proactive (no discovery latency), and zone-based hybrids cover mixed loads.",
              "Exam angle: name the three families, give one protocol each with its loop-avoidance mechanism (sequence numbers for DSDV/AODV, source route in the header for DSR), and walk DSR's route discovery once. Traps: saying DSDV floods route requests (that is AODV/DSR — DSDV updates tables continuously), forgetting that AODV is a distances-vector descendant while DSR is source routing (they answer differently to mobility), and omitting RERR — route maintenance is half the protocol.",
            ],
            keyTerms: [
              { term: "DSDV", definition: "Destination sequenced distance vector — proactive DV routing with per-destination sequence numbers preventing loops." },
              { term: "AODV", definition: "Ad hoc on-demand distance vector — RREQ/RREP discovery, sequence-numbered freshness, RERR maintenance." },
              { term: "DSR", definition: "Dynamic source routing — the whole route rides in the packet header; routes cached from discovery and eavesdropping." },
              { term: "RREQ / RREP / RERR", definition: "Route request flood, unicast reply, and error on breakage — AODV's three-message life." },
              { term: "ZRP", definition: "Zone routing protocol — proactive inside a k-hop zone, reactive beyond it." },
            ],
            bullets: [
              "Proactive (DSDV, OLSR): tables always fresh; constant signalling, zero discovery delay.",
              "Sequence numbers order route freshness and kill routing loops.",
              "Reactive (AODV, DSR): discover on demand; no idle overhead, discovery latency.",
              "AODV: RREQ flood -> RREP sets path state -> RERR on breakage.",
              "DSR: full source route in each packet header; route cache + promiscuous learning.",
              "DSR header grows with path length; AODV tables grow with destinations.",
              "Hybrid (ZRP): proactive in-zone, reactive inter-zone.",
              "High mobility + sparse traffic -> reactive; dense traffic -> proactive.",
            ],
            diagram: {
              kind: "fork",
              title: "A MANET needs routes — which family?",
              caption:
                "Freshness against latency: keep every table (proactive), or discover every route (reactive) — or zone it (hybrid).",
              start: "Routing strategy",
              branches: [
                { label: "Proactive — DSDV/OLSR", outcome: "tables always fresh; constant updates; instant forwarding", good: true },
                { label: "Reactive — AODV/DSR", outcome: "discover on demand; no idle cost; discovery latency", good: true },
                { label: "Hybrid — ZRP", outcome: "proactive inside k-hop zones, reactive between zones", good: true },
              ],
            },
            callout: {
              type: "exam",
              title: "Asked in May 2023",
              body: "May 2023 Q7a: 'Explain about dynamic source routing protocol' (7 marks). Answer with DSR's discovery (RREQ flood with accumulated route), reply, source-routed forwarding, route cache and promiscuous learning, plus the header-growth trade against AODV.",
            },
            codeExample: {
              language: "python",
              caption: "dsdv_rule.py — the sequence-number freshness rule",
              code: `def better_route(old: dict, new_seq: int, new_metric: int) -> bool:
    # DSDV: a newer sequence number always wins (freshness beats metric)
    if new_seq > old["seq"]:
        return True
    if new_seq == old["seq"] and new_metric < old["metric"]:
        return True
    return False

route = {"seq": 302, "metric": 3}
print(better_route(route, 303, 5))    # True - newer beats shorter
print(better_route(route, 302, 2))    # True - same seq, strictly shorter`,
            },
            examQuestions: [
              {
                q: "Explain about dynamic source routing protocol.",
                marks: 7,
                appearances: ["May 2023"],
                outline: [
                  "Reactive, source-routing protocol for MANETs",
                  "Route discovery: RREQ flood accumulates the path hop by hop",
                  "Destination (or cached route) replies RREP along the reverse path",
                  "Forwarding: the whole route rides in each packet's header",
                  "Route maintenance: breakage detected on transmit failure; RERR sent",
                  "Route cache + promiscuous learning reduce rediscovery",
                  "Trade: header grows with path length vs AODV's forwarding tables",
                ],
              },
              {
                q: "Compare DSDV and AODV as MANET routing strategies.",
                marks: 7,
                outline: [
                  "DSDV proactive: tables for all destinations, periodic updates",
                  "Constant signalling regardless of traffic; instant forwarding",
                  "AODV reactive: discover per demand; no idle cost, discovery latency",
                  "Both use destination sequence numbers against loops/stale routes",
                  "AODV adds RERR route maintenance; DSDV relies on triggered updates",
                  "Choice: dense stable traffic -> DSDV; mobile sparse traffic -> AODV",
                ],
              },
              {
                q: "Explain AODV's route discovery and maintenance with the three message types.",
                marks: 7,
                outline: [
                  "RREQ: flooded with source seq + broadcast id (duplicate suppression)",
                  "Intermediate nodes reply only with fresher seq numbers",
                  "RREP: unicast back, leaving forwarding state at each hop",
                  "Data flows; each hop's table maps destination -> next hop",
                  "Breakage: node detects unreachable next hop, sends RERR upstream",
                  "Sources rediscover; sequence numbers reject stale replies",
                ],
              },
            ],
          },
          {
            number: "4.5",
            title: "Wireless sensor networks",
            body: [
              "A wireless sensor network (WSN) deploys many small, cheap, battery-powered nodes that sense, process locally and relay their readings over multi-hop radio toward a sink (base station). The node is four units plus options: sensing unit (sensors + ADC), processing unit (microcontroller + memory running the stack), transceiver (low-power radio), power unit (battery, sometimes harvesting); optional location-finding and mobilizer units. Jun 2025 Q7b asked for the architecture drawn and its applications — the node block diagram plus field-to-sink-to-observer chain is the expected picture.",
              "The design inversion: energy, not bandwidth, is the currency. Nodes are static, densely deployed, and must run for months unattended, so the stack spends compute to save radio: in-network processing and data aggregation (a cluster head averages its cluster's readings before transmitting), duty cycling (radios sleep most of the time), and topology control (only some nodes relay). Data-centric behaviour replaces addressing: queries name the phenomenon ('temperatures above 40° in region A'), not node IDs — directed diffusion and LEACH-style clustering are the classic routing answers.",
              "Applications justify the constraints: environmental monitoring (forest fire, flood), military surveillance and target tracking, health monitoring (wearable patches), industrial process control and machine condition, precision agriculture, smart buildings. Performance topics mirror MANET's but tilt differently: scalability (thousands of nodes), fault tolerance (nodes die continuously), localization (where was it measured?), and the aggregation-vs-latency trade — aggregating saves radio but delays readings.",
              "Exam angle: draw the node (four units) and the network (field → cluster heads → sink → observer/task manager), list five applications, and state the energy-driven design rules. Traps: treating a WSN as a small MANET (nodes are mostly static and data-centric; routing optimizes energy, not paths), forgetting the sink as a distinct element, and claiming all nodes transmit directly to the sink — multi-hop and clustering are the point.",
            ],
            keyTerms: [
              { term: "Sink / base station", definition: "The WSN's collection point — data flows toward it; commands flow back." },
              { term: "Data aggregation", definition: "In-network combination of readings (average, max) to cut radio traffic — the primary energy saver." },
              { term: "Duty cycling", definition: "Radios sleep between scheduled wake-ups; the biggest single energy lever." },
              { term: "LEACH", definition: "Low-energy adaptive clustering hierarchy — rotating cluster heads spread the relay burden." },
              { term: "Directed diffusion", definition: "Data-centric routing: interests flood, gradients form, data flows along reinforced paths." },
            ],
            table: {
              caption: "The WSN node: four units plus the optional two.",
              headers: ["Unit", "Contents", "Job"],
              rows: [
                ["Sensing", "sensors + ADC", "turn temperature, motion, light into samples"],
                ["Processing", "microcontroller + memory", "run MAC/routing; aggregate locally"],
                ["Transceiver", "low-power radio", "multi-hop relay toward the sink"],
                ["Power", "battery, sometimes harvesting", "the constraint every other unit obeys"],
                ["Location finding (opt.)", "GPS / trilateration support", "tag readings with position"],
                ["Mobilizer (opt.)", "actuator", "rare mechanical repositioning"],
              ],
            },
            bullets: [
              "WSN: many cheap nodes, static, dense, multi-hop toward a sink.",
              "Node = sensing + processing + transceiver + power (+ location, mobilizer).",
              "Energy is the currency: aggregation, duty cycling, topology control.",
              "Data-centric: queries name phenomena, not node addresses.",
              "LEACH rotates cluster heads; directed diffusion reinforces useful paths.",
              "Applications: environment, military surveillance, health, industry, agriculture.",
              "Extra concerns: scalability, fault tolerance, localization, aggregation delay.",
              "WSN ≠ small MANET: static, data-centric, energy-first routing.",
            ],
            diagram: {
              kind: "pipeline",
              title: "The WSN data path",
              caption:
                "Sense, aggregate locally, relay hop-by-hop, collect at the sink, decide at the task manager.",
              stages: [
                { label: "Sensor nodes", note: "sense + process locally" },
                { label: "Cluster heads", note: "aggregate the cluster's readings" },
                { label: "Sink / gateway", note: "collects the field's data" },
                { label: "Base station", note: "internet-side task manager node" },
                { label: "Observer", note: "application: monitor, alert, decide" },
              ],
            },
            callout: {
              type: "exam",
              title: "Asked in Jun 2025",
              body: "Jun 2025 Q7b: 'Draw architecture of wireless sensor network and comment on its applications' (7 marks). Draw both levels — the node (four units) and the network (field -> sink -> observer) — then five applications with one-line motivations; the sink and aggregation are the two details most answers forget.",
            },
            examQuestions: [
              {
                q: "Draw architecture of wireless sensor network and comment on its applications.",
                marks: 7,
                appearances: ["Jun 2025"],
                outline: [
                  "Node architecture: sensing + ADC, processing, transceiver, power",
                  "Optional: location finding, mobilizer",
                  "Network: field -> cluster heads -> sink -> base station -> observer",
                  "Energy-first operation: aggregation, duty cycling",
                  "Applications: environmental (fire/flood), military surveillance, health, industry, agriculture",
                  "One line per application on why infrastructure-free sensing fits",
                ],
              },
              {
                q: "How does a WSN differ from a MANET in design priorities and routing?",
                marks: 7,
                outline: [
                  "WSN nodes mostly static; MANET nodes mobile",
                  "WSN data-centric (queries name phenomena); MANET address-centric",
                  "Energy the primary WSN metric; throughput/latency the MANET metric",
                  "Routing: LEACH clustering, directed diffusion vs DSDV/AODV/DSR",
                  "Aggregation in-network reduces WSN traffic; MANET forwards intact",
                  "Both share: multi-hop, shared radio, self-organization",
                ],
              },
              {
                q: "Explain LEACH-style clustering and why it extends network lifetime.",
                marks: 7,
                outline: [
                  "Nodes elect cluster heads for one round; heads aggregate and relay",
                  "Cluster-head role rotates — the energy burden is shared",
                  "Intra-cluster communication is short-range and cheap",
                  "Head-to-sink transmission amortizes many readings per packet",
                  "Random rotation prevents any node draining first",
                  "Result: lifetime scales with rounds, not with distance to sink",
                ],
              },
            ],
          },
          {
            number: "4.6",
            title: "Indirect TCP and snooping TCP",
            body: [
              "TCP misreads wireless. Its congestion control treats every loss as congestion and halves the window; on a wireless link, losses come from fading and handover, not buffer overflow — so throughput collapses on links that are fine. Add long, variable delay, asymmetric bandwidth and intermittent disconnection, and classical TCP needs help. The classical fixes split into two families: split the connection (indirect TCP), or fix it transparently from inside (snooping TCP) — and M-TCP (next section) for disconnection.",
              "Indirect TCP (I-TCP) splits the connection at the foreign agent: the fixed network sees a standard TCP connection CN↔FA; the wireless leg FA↔MN uses an optimized local protocol with fast local ACKs and local retransmission. Wireless losses never reach the CN's congestion control — the big win. The cost is principled: end-to-end TCP semantics break (the FA ACKs data the MN may not have), handoff must transfer connection state between FAs (latency), and the FA reads unencrypted traffic.",
              "Snooping TCP keeps the connection intact and adds a soft-state module at the FA: it watches packets both ways, caches unacknowledged segments, and on a wireless loss (duplicate ACKs or a local timeout) retransmits locally from its cache — the CN never learns the link hiccuped. End-to-end semantics are largely preserved and handoffs are trivial (soft state is dropped). Its limits: it cannot fully fix long disconnections (that is M-TCP's job), it needs to see plaintext (IPsec defeats it), and duplicate-ACK suppression can misfire on reordering.",
              "May 2023 Q6a asked to compare the classical approaches with advantages and disadvantages; Dec 2024 Q6a asked to differentiate indirect, snooping and mobile TCP; Jun 2025 Q8 carried snooping TCP as a short note. The comparison table below is all three answers at once. Traps: attributing the broken end-to-end semantics to snooping (that is I-TCP's flaw — snooping is transparent), and forgetting I-TCP's handoff state-transfer cost.",
            ],
            keyTerms: [
              { term: "I-TCP", definition: "Indirect TCP — the FA splits the connection; wireless losses stay local; end-to-end semantics break." },
              { term: "Snooping TCP", definition: "Transparent FA module caching segments and locally retransmitting on wireless loss." },
              { term: "End-to-end semantics", definition: "The ACK reaching the CN proves the MN received the data — what I-TCP breaks." },
              { term: "Soft state", definition: "Snooping's cache: expires harmlessly, no state transfer at handoff." },
              { term: "Congestion control misfire", definition: "TCP halving its window for wireless loss that was never congestion." },
            ],
            table: {
              caption: "The three mobile-TCP approaches — Dec 2024 Q6a's differentiation, pre-answered.",
              headers: ["Aspect", "Indirect TCP", "Snooping TCP", "Mobile TCP"],
              rows: [
                ["Mechanism", "FA splits the connection", "FA snoops and locally retransmits", "supervisor splits; window freeze on disconnection"],
                ["End-to-end semantics", "broken — FA ACKs early", "largely preserved", "preserved"],
                ["Wireless loss handling", "local protocol on wireless leg", "cached segments retransmitted locally", "zero-window freeze; resume after reconnect"],
                ["Handoff cost", "state transfer between FAs", "none — soft state dropped", "state at supervisor node"],
                ["Best for", "very lossy, high-latency links", "moderate loss, transparency needed", "long, frequent disconnections"],
              ],
            },
            bullets: [
              "Wireless TCP's enemy: loss misread as congestion — windows halve for nothing.",
              "Other stressors: long/variable RTT, asymmetric bandwidth, disconnections, handover gaps.",
              "I-TCP: split at FA; local ACKs/retransmits; fast but semantics-breaking.",
              "I-TCP costs: handoff state transfer, FA reads plaintext, no IPsec.",
              "Snooping: transparent cache-and-retransmit at FA; semantics largely kept.",
              "Snooping limits: long disconnections unsolved, plaintext needed.",
              "Both fix loss; only M-TCP (next section) fixes disconnection.",
              "Dec 2024 Q6a, May 2023 Q6a, Jun 2025 Q8b — three papers, same topic.",
            ],
            diagram: {
              kind: "compare",
              title: "Split vs snooped",
              caption:
                "One rewrites the connection's shape, the other rewrites only the link's behaviour — semantics decide the trade.",
              left: {
                heading: "Indirect TCP (split)",
                items: [
                  "CN <-> FA and FA <-> MN connections",
                  "Local ACKs and retransmissions — fast recovery",
                  "End-to-end semantics broken",
                  "Handoff must move connection state",
                ],
              },
              right: {
                heading: "Snooping TCP (transparent)",
                items: [
                  "One end-to-end connection, unchanged",
                  "FA caches, watches duplicate ACKs, retransmits locally",
                  "Semantics largely preserved",
                  "Soft state — handoff just drops it",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "The transport question is in every paper",
              body: "May 2023 Q6a (compare classical approaches, advantages/disadvantages), Dec 2024 Q6a (differentiate indirect, snooping and mobile TCP), Jun 2025 Q8b (snooping TCP short note). One three-column comparison table plus the 'loss vs congestion' opening paragraph answers all three.",
            },
            examQuestions: [
              {
                q: "Differentiate indirect TCP, snooping TCP and mobile TCP.",
                marks: 7,
                appearances: ["Dec 2024"],
                outline: [
                  "I-TCP: FA splits the connection; local recovery; semantics broken",
                  "I-TCP handoff: state transfer; plaintext exposure at FA",
                  "Snooping: transparent cache + local retransmit at FA; semantics kept",
                  "Snooping limits: disconnections unsolved; IPsec defeats it",
                  "M-TCP: supervisor splits; zero-window freeze on disconnection",
                  "M-TCP keeps end-to-end ACKs; best for long outages",
                ],
              },
              {
                q: "Compare the classical approaches to make the TCP suitable for mobile environment. Give their relative advantages and disadvantages.",
                marks: 7,
                appearances: ["May 2023"],
                outline: [
                  "Problem: wireless loss misfires congestion control; delay and disconnection",
                  "I-TCP advantage: wireless losses isolated, fast local recovery",
                  "I-TCP disadvantage: semantics broken, handoff cost, security exposure",
                  "Snooping advantage: transparent, semantics preserved, cheap handoff",
                  "Snooping disadvantage: no fix for long outages, needs plaintext",
                  "M-TCP advantage: freezes timers across disconnection; disadvantage: needs supervisor",
                ],
              },
              {
                q: "Why does TCP throughput collapse on a wireless link even when the link is healthy?",
                marks: 7,
                outline: [
                  "TCP infers congestion only from loss",
                  "Wireless losses come from fading, interference, handover gaps",
                  "Every loss halves the congestion window — recovery takes many RTTs",
                  "Long/variable RTT and asymmetric bandwidth aggravate it",
                  "Fixes aim to hide wireless loss from the sender (snooping) or isolate it (I-TCP)",
                ],
              },
            ],
          },
          {
            number: "4.7",
            title: "Mobile TCP, timeout freezing, selective retransmission and T/TCP",
            body: [
              "M-TCP (mobile TCP) targets what snooping cannot: long, frequent disconnections. It splits the connection at a supervisor node — but unlike I-TCP it preserves end-to-end ACKs: the supervisor forwards ACKs only when the mobile truly received data. When the wireless link dies, the supervisor advertises a zero window to the sender, which stalls without halving its window; on reconnection the window reopens and transmission resumes at full speed — no slow-start penalty, no retransmission burst. Timeout freezing is the companion trick: while disconnected, all retransmission timers are frozen so they neither fire nor back off.",
              "Selective retransmission (SACK-style) fixes a different failure: lossy links with reordering. Standard cumulative ACKs retransmit everything after the gap; selective ACKs report exactly which segments arrived, and the sender retransmits only the missing ones — on a link that loses 1% of packets, that is the difference between resending one segment and resending a window. It needs SACK options negotiated end-to-end and survives the semantics question untouched (it is still ordinary TCP, just better informed).",
              "Transaction-oriented TCP (T/TCP, RFC 1644) serves the request/response pattern that dominates mobile client use: instead of connect → send → receive → close (three round trips before data), T/TCP's CC options let data ride in the SYN and FIN, collapsing a transaction to roughly one RTT — ideal for HTTP-style lookups over expensive wireless links. The cost is security: T/TCP weakens the three-way handshake's protection against old duplicate segments, which is why it stayed experimental.",
              "Exam angle: match each mechanism to its failure — M-TCP + timeout freezing for disconnection, selective retransmission for lossy/reordering links, T/TCP for short transactions — with one mechanism sentence each. Traps: crediting M-TCP with loss recovery (it is the disconnection specialist), writing that timeout freezing restarts timers (it parks them), and presenting T/TCP without its duplicate-segment caveat — examiners look for the trade-off.",
            ],
            keyTerms: [
              { term: "M-TCP", definition: "Mobile TCP — supervisor split that freezes the sender's window (zero-window advertisement) across disconnections." },
              { term: "Timeout freezing", definition: "Parking all retransmission timers while disconnected — no spurious backoff, no burst on return." },
              { term: "Selective retransmission (SACK)", definition: "ACKs report exact gaps; only missing segments are retransmitted." },
              { term: "T/TCP", definition: "Transaction TCP — data in SYN/FIN collapses request/response to ~1 RTT; weakens duplicate protection." },
              { term: "Zero-window advertisement", definition: "The supervisor tells the sender to stall — windows freeze instead of collapsing." },
            ],
            bullets: [
              "M-TCP: supervisor split; end-to-end ACKs preserved.",
              "Disconnection -> zero-window freeze; reconnection resumes at full speed.",
              "Timeout freezing parks retransmission timers during outages.",
              "Selective retransmission: SACK reports exact gaps; resend only the missing.",
              "SACK shines on lossy, reordering links — semantics untouched.",
              "T/TCP: data rides in SYN/FIN — one RTT transactions.",
              "T/TCP cost: weaker three-way-handshake duplicate protection.",
              "Match the fix: disconnection -> M-TCP; loss -> SACK; short transfers -> T/TCP.",
            ],
            diagram: {
              kind: "fork",
              title: "Match the TCP fix to the failure",
              caption:
                "Wireless TCP has four distinct diseases; each cure targets exactly one.",
              start: "What is hurting the connection?",
              branches: [
                { label: "Long disconnections", outcome: "M-TCP freezes the window; timers park — resume at full speed", good: true },
                { label: "Lossy, reordering link", outcome: "selective retransmission resends only the true gaps", good: true },
                { label: "Short request/response", outcome: "T/TCP collapses the handshake to ~1 RTT", good: true },
                { label: "Sneaky local loss", outcome: "snooping TCP (previous section) hides it from the sender", good: true },
              ],
            },
            callout: {
              type: "tip",
              title: "Four cures, four diseases",
              body: "Exam answers that blend the mechanisms read as memorized. Write the pairing explicitly — disconnection (M-TCP/freeze), lossy reorder (SACK), short transactions (T/TCP), hidden wireless loss (snooping) — and the differentiation marks follow automatically.",
            },
            codeExample: {
              language: "python",
              caption: "freeze.py — timeout freezing at the supervisor",
              code: `class Sender:
    def __init__(self) -> None:
        self.retx_timer = 2.0
        self.frozen = False
    def link_down(self) -> None:
        self.frozen = True          # park every retransmission timer
    def link_up(self) -> None:
        self.frozen = False         # resume exactly where timers stopped
        # no exponential backoff burst after the outage

# M-TCP advertises a zero window while frozen - the sender stalls, not collapses`,
            },
            examQuestions: [
              {
                q: "Explain mobile TCP (M-TCP) and timeout freezing. How do they handle long disconnections differently from I-TCP and snooping TCP?",
                marks: 7,
                outline: [
                  "M-TCP splits at a supervisor but preserves end-to-end ACKs",
                  "On disconnection, supervisor advertises zero window to the sender",
                  "Sender stalls without window collapse — no slow-start penalty",
                  "Timeout freezing parks retransmission timers during the outage",
                  "I-TCP: semantics broken; snooping: cannot survive long outages",
                  "Reconnection resumes at full speed — no burst",
                ],
              },
              {
                q: "What is selective retransmission and why does it suit lossy wireless links?",
                marks: 7,
                outline: [
                  "SACK options report exactly which segments arrived",
                  "Sender retransmits only the true gaps, not the whole window",
                  "On 1% loss, resends shrink from a window to a segment",
                  "Handles reordering without spurious retransmission",
                  "End-to-end semantics untouched — ordinary TCP, better informed",
                  "Needs both ends to negotiate the SACK option",
                ],
              },
              {
                q: "Explain transaction-oriented TCP and its security trade-off.",
                marks: 7,
                outline: [
                  "Goal: request/response in ~1 RTT over expensive wireless links",
                  "Normal TCP: connect + data + close = 3+ RTTs before payload",
                  "T/TCP: CC options let data ride in SYN and FIN",
                  "Accumulated-ACK shortcuts skip full handshake on repeated contact",
                  "Trade-off: weakened protection against old duplicate segments",
                  "Ideal for HTTP-style mobile queries; stayed experimental for that reason",
                ],
              },
            ],
          },
          {
            number: "4.8",
            title: "Introduction to WAP",
            body: [
              "WAP (wireless application protocol) was the late-1990s answer to a real gap: phones had tiny screens, slow CPUs and kilobit bearers (SMS, CSD, early GPRS), while the web assumed desktop screens and megabit links. WAP compressed the entire model: a microbrowser rendering WML (wireless markup language — card-and-deck pages), and a layered stack engineered for high-latency, low-bandwidth, intermittently-connected bearers.",
              "The stack mirrors TCP/IP but thinner at every layer. WAE (wireless application environment) holds WML, WMLScript and the microbrowser. WSP (wireless session protocol) is a binary, compact HTTP-alike with session suspend/resume — a session survives a bearer drop. WTP (wireless transaction protocol) gives reliable request/response in three classes (0: unreliable, 1: reliable one-way, 2: reliable request/response) without TCP's connection weight. WTLS (wireless TLS) secures the radio leg with handshakes optimized for long latencies. WDP (wireless datagram protocol) adapts to whatever bearer exists — UDP over GPRS, SMS, CSD.",
              "The architecture's hinge is the WAP gateway sitting in the operator's network: it translates WSP↔HTTP and WTLS↔TLS, encodes HTML into WML, and keeps the phone's stack light. The classic controversy is the security gap: WTLS at the gateway terminates and re-encrypts, so content is briefly plaintext inside the operator's machine — acceptable to some, disqualifying to banks. WAP 2.0 answered by dropping the proprietary stack: XHTML-MP pages, direct HTTP over TCP/IP, and push services, aligning WAP with the ordinary web as phone hardware caught up.",
              "Exam angle: draw the stack (WAE → WSP → WTP → WTLS → WDP → bearers) beside the HTTP/TCP/TLS/IP stack, and explain the gateway's two translations plus the WTLS gap. Traps: calling WAP a bearer technology (it rides bearers), placing the gateway inside the phone (it is in the network), and presenting WAP 1.x without the WAP 2.0 correction — the standard closes with it.",
            ],
            keyTerms: [
              { term: "WML", definition: "Wireless markup language — card-and-deck pages for microbrowsers." },
              { term: "WSP / WTP", definition: "Binary HTTP-alike session protocol; transaction protocol with three reliability classes." },
              { term: "WTLS", definition: "Wireless TLS — security for the radio leg, handshake tuned for latency." },
              { term: "WDP", definition: "Wireless datagram protocol — adapts the stack to any bearer (SMS, CSD, GPRS/UDP)." },
              { term: "WAP gateway", definition: "Network element translating WSP/WTLS to HTTP/TLS and HTML to WML — site of the security gap." },
            ],
            table: {
              caption: "The WAP stack against the web stack it mirrors.",
              headers: ["WAP layer", "Web equivalent", "Wireless adaptation"],
              rows: [
                ["WAE (WML, WMLScript)", "HTML, JavaScript", "card-and-deck pages, microbrowser"],
                ["WSP", "HTTP", "binary encoding, session suspend/resume"],
                ["WTP", "TCP (request/response role)", "3 reliability classes, no connection weight"],
                ["WTLS", "TLS", "latency-tuned handshake; terminates at the gateway"],
                ["WDP", "IP/UDP", "adapts to SMS, CSD, GPRS bearers"],
                ["Bearers", "fixed links", "whatever the phone has — SMS to GPRS"],
              ],
            },
            bullets: [
              "Motivation: tiny screens, slow CPUs, kilobit bearers vs the desktop web.",
              "Stack: WAE -> WSP -> WTP -> WTLS -> WDP -> bearer.",
              "WML organizes pages as decks of cards; the microbrowser renders cards.",
              "WSP sessions suspend/resume — survive bearer drops.",
              "WTP class 2 = reliable request/response without TCP's weight.",
              "Gateway translates WSP<->HTTP, WTLS<->TLS, HTML->WML.",
              "Security gap: WTLS ends at the gateway — brief plaintext inside the operator.",
              "WAP 2.0: XHTML-MP + HTTP/TCP/IP direct — the proprietary stack retired.",
            ],
            diagram: {
              kind: "layers",
              title: "The WAP stack, top down",
              caption:
                "Every layer is a compressed twin of the web stack beneath it — and the gateway is the hinge.",
              layers: [
                { label: "WAE", note: "WML, WMLScript, microbrowser" },
                { label: "WSP", note: "binary session protocol; suspend/resume" },
                { label: "WTP", note: "reliable transactions, three classes" },
                { label: "WTLS", note: "wireless TLS; terminates at the gateway" },
                { label: "WDP", note: "datagram over any bearer" },
                { label: "Bearers", note: "SMS · CSD · GPRS" },
              ],
            },
            callout: {
              type: "tip",
              title: "The gateway is the exam hinge",
              body: "WAP questions turn on the gateway: it terminates WTLS, translates to HTTP/TLS, and re-encodes HTML into WML. Name the security gap (plaintext inside the operator's gateway) and the WAP 2.0 fix (direct HTTP over TCP/IP, XHTML-MP) and the answer reaches full depth.",
            },
            examQuestions: [
              {
                q: "Give an introduction to WAP: its motivation, protocol stack and the role of the WAP gateway.",
                marks: 7,
                outline: [
                  "Motivation: tiny screens, slow CPUs, low-bandwidth intermittent bearers",
                  "Stack: WAE -> WSP -> WTP -> WTLS -> WDP -> bearers",
                  "WML card/deck model; WSP suspend/resume; WTP three classes",
                  "Gateway: WSP<->HTTP, WTLS<->TLS, HTML->WML translation",
                  "Security gap: plaintext at the gateway; WAP 2.0 goes direct HTTP/TCP",
                  "Draw the stack beside the web stack it mirrors",
                ],
              },
              {
                q: "Explain how WTP provides reliability without TCP's connection overhead.",
                marks: 7,
                outline: [
                  "WTP classes: 0 unreliable datagram, 1 reliable one-way, 2 reliable request/response",
                  "Transactions carry their own acks — no connection setup/teardown",
                  "Suspends across bearer drops; resumes without re-handshake",
                  "Suited to high-latency, low-bandwidth links",
                  "Contrast: TCP's 3-way handshake + slow start is too heavy",
                ],
              },
              {
                q: "What changed in WAP 2.0 and why did the original stack retire?",
                marks: 7,
                outline: [
                  "WAP 1.x: proprietary stack + gateway + WML",
                  "Phones grew screens and CPUs; GPRS gave real bandwidth",
                  "WAP 2.0: XHTML-MP pages, HTTP over TCP/IP direct, TLS end-to-end",
                  "Push services standardized; gateway becomes optional proxy",
                  "Security gap (WTLS termination) disappears with end-to-end TLS",
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
      title: "Network Security: Intruders, Malware and Firewalls",
      summary:
        "Unit V defends what the first four units built: the three intruder classes and their behaviour, intrusion detection by signature and anomaly on hosts and networks, password management challenges and methods, the virus/worm/trojan-horse family with its defenses, biometrics versus conventional authentication, and firewall design principles from packet filters to screened subnets.",
      chapter: {
        number: "05",
        title: "Defending the Network",
        intro:
          "Unit V covers intruders and their classes, intrusion detection, password management, viruses and related threats with worm and trojan-horse defenses, the difference between biometrics and conventional authentication systems, and firewall design principles.",
        inOneBreath:
          "Intruders are masqueraders (outsiders with stolen credentials), misfeasors (insiders abusing privilege) and clandestine users (hidden supervisory control); IDS hunts them by signature or anomaly, on host or network, backed by honeypots; passwords are managed by selection policies, salted hashing and proactive checking; viruses need hosts, worms spread alone, trojans hide in useful programs — signature and heuristic antivirus plus hygiene fight all three; biometrics trade revocability for uniqueness measured in FAR/FRR; firewalls enforce a policy choke point as packet filter, stateful engine, application gateway or screened-subnet DMZ.",
        sections: [
          {
            number: "5.1",
            title: "Intruders and their behaviour",
            body: [
              "An intruder is anyone gaining access beyond authorization, and Anderson's classic classification sorts them into three classes. The masquerader is an outsider who has seized another user's account — the stolen-password attacker the authentication machinery of sections 2.4 and 5.3 is aimed at. The misfeasor is a legitimate insider abusing authorized privileges: reading records beyond need, escalating rights, quietly exfiltrating. The clandestine user has seized supervisory control and acts to evade audit — disabling logs, hiding as a system process. Insider threats are the hardest: they start inside the perimeter.",
              "Intrusion techniques concentrate on the weakest link: passwords. Guessing (default passwords, dictionary attacks against predictable human choices), capture (keyloggers, network sniffing on unencrypted links, shoulder surfing), and privilege abuse cover most entries; once inside, the intruder acquires access, escalates privilege, and covers tracks. The behaviour-pattern insight for the exam: intruders leave traces at each stage — failed logins before success, unusual access times, abnormal file/activity volumes — and those traces are exactly what the intrusion detection of section 5.2 learns to see.",
              "Dec 2024 Q8 carried 'Intruders' as short-note (c) of its 14-mark trio. The expected note is compact: definition, the three classes with one behavioural line each, the standard intrusion techniques (password guessing/capture), and the response menu (detection, prevention — strong authentication, least privilege — and recovery). The three-class list is the marking skeleton; everything else hangs on it.",
              "Exam angle: name the three classes with 'who' and 'how' in one sentence each, connect password attack to password management (section 5.3), and end with the detection hook. Traps: calling every attacker a hacker (the classes are behavioural, not fashionable), and claiming firewalls stop insiders — the misfeasor is already inside the perimeter, which is precisely why host-based detection exists.",
            ],
            keyTerms: [
              { term: "Masquerader", definition: "Outsider operating under a stolen user identity." },
              { term: "Misfeasor", definition: "Legitimate insider misusing authorized privileges." },
              { term: "Clandestine user", definition: "Attacker with supervisory control who suppresses audit trails to stay hidden." },
              { term: "Intrusion signature", definition: "The repeatable trace an attack leaves — failed logins, odd hours, abnormal volumes." },
              { term: "Least privilege", definition: "Granting only the access a role needs — the structural defense against misfeasors." },
            ],
            table: {
              caption: "The three intruder classes — the note's marking skeleton.",
              headers: ["Class", "Who", "Typical behaviour"],
              rows: [
                ["Masquerader", "outsider with a stolen account", "exploits another user's legitimate credentials"],
                ["Misfeasor", "legitimate insider", "abuses authorized access — over-reading, escalation"],
                ["Clandestine user", "holder of supervisory control", "disables audit, hides as a manager/system process"],
              ],
            },
            bullets: [
              "Intruder = access beyond authorization; three behavioural classes.",
              "Masquerader: outsider + stolen identity — fights password management.",
              "Misfeasor: insider + privilege abuse — fights least privilege.",
              "Clandestine user: hides supervisory control, evades audit.",
              "Techniques: password guessing, capture (keyloggers, sniffing), privilege abuse.",
              "Traces: failed logins, unusual hours, abnormal volumes — IDS fuel.",
              "Responses: detection (5.2), prevention (auth + least privilege), recovery.",
              "Firewalls cannot stop insiders — the misfeasor is already inside.",
            ],
            diagram: {
              kind: "fork",
              title: "Who is attacking?",
              caption:
                "Three intruder classes, three different defenders — perimeter, privilege policy, audit integrity.",
              start: "Intruder classes",
              branches: [
                { label: "Masquerader", outcome: "outsider with stolen credentials — blocked by authentication", good: false },
                { label: "Misfeasor", outcome: "insider abusing privilege — contained by least privilege + audit", good: false },
                { label: "Clandestine user", outcome: "hides with supervisory control — caught by integrity checks and anomaly detection", good: false },
              ],
            },
            callout: {
              type: "exam",
              title: "A short-note fixture in Dec 2024",
              body: "Dec 2024 Q8 asked 'Intruders' as short-note (c) of its 14-mark trio. The full-mark note: definition, three classes (masquerader, misfeasor, clandestine user) with one behaviour line each, intrusion techniques (password guessing/capture), and the prevention-detection-recovery triple.",
            },
            examQuestions: [
              {
                q: "Explain the classes of intruders and their typical behaviour patterns. How does each class get caught?",
                marks: 7,
                outline: [
                  "Masquerader: outsider + stolen account; caught by login anomalies, 2FA",
                  "Misfeasor: insider abusing privilege; caught by audit of access patterns",
                  "Clandestine user: hides supervisory control; caught by integrity checks, file-system baselines",
                  "Techniques: password guessing, capture, privilege abuse",
                  "Behaviour traces: failed logins, unusual times, abnormal volumes",
                  "Defences: strong authentication, least privilege, monitoring (5.2)",
                ],
              },
              {
                q: "Why are insider threats harder to stop than outsider attacks, and what structural defenses apply?",
                marks: 7,
                outline: [
                  "Insiders pass the perimeter — firewalls and front-door auth are moot",
                  "Misfeasors use legitimate credentials and channels",
                  "Defence: least privilege and role separation shrink what any account can do",
                  "Audit trails on sensitive operations reveal over-reading",
                  "Anomaly detection flags volume/timing deviations from the role profile",
                  "Segregation of duties requires collusion for high-value fraud",
                ],
              },
              {
                q: "Write a short note on intruders and intrusion techniques.",
                marks: 7,
                outline: [
                  "Definition: unauthorized access or privilege use",
                  "Three classes: masquerader, misfeasor, clandestine user",
                  "Techniques: password guessing (dictionary, defaults), capture (sniffing, keyloggers)",
                  "Escalation and track-covering inside the system",
                  "Response: prevention (auth, least privilege), detection (5.2), recovery",
                ],
              },
            ],
          },
          {
            number: "5.2",
            title: "Intrusion detection",
            body: [
              "Intrusion detection accepts that prevention fails and watches for the failure. An IDS has four components: sensors (network taps or host audit collectors) gathering raw events; an analyzer (the detection engine) deciding intrusion-or-not; a manager console for triage; and response (alerts, blocking, evidence). Architecturally it divides host-based (watching logs, system calls, file integrity on one machine) versus network-based (watching packets on a segment), and detection-wise into signature (misuse) detection versus anomaly detection — the pairing every exam question wants.",
              "Signature (misuse) detection matches traffic against known attack patterns — the antivirus model applied to networks: precise, low-false-alarm, blind to anything not in the rule set, and dependent on constant updates. Anomaly detection builds statistical profiles of normal behaviour (users' command mixes, traffic volumes, login times) and flags significant deviations: it can catch novel attacks and insiders, at the price of false alarms whenever users legitimately drift. The two compose in practice — signatures for the known, anomaly scores for the unknown.",
              "Jun 2025 Q8 asked 'Intrusion detection system' as short-note (a) of its any-two-of-three 14-mark question. The expected note: definition and purpose, the four components, signature vs anomaly with one strength and one weakness each, host vs network placement, and a honeypot sentence — decoy systems deployed to be attacked, luring intruders away from production and teaching new signatures. Distributed IDS closes the architecture: host modules and LAN modules report to a central manager that correlates across the estate.",
              "Exam angle: draw the sensor → analyzer → console → response chain, give the signature/anomaly table, and place honeypots as the active-learning arm. Traps: claiming anomaly detection has low false positives (it is the false-alarm-heavy half), calling a honeypot a firewall (it is a decoy), and forgetting that IDS complements — not replaces — the firewall: one watches what gets through, the other decides what gets in.",
            ],
            keyTerms: [
              { term: "Signature detection", definition: "Matching events against known attack patterns — precise on the known, blind to the novel." },
              { term: "Anomaly detection", definition: "Statistical profiles of normal behaviour; deviations raise alarms — catches the unknown, false-alarm prone." },
              { term: "HIDS / NIDS", definition: "Host-based (logs, syscalls, file integrity) vs network-based (packet watching) sensor placement." },
              { term: "Honeypot", definition: "Decoy system deployed to be attacked — lures intruders, harvests new signatures." },
              { term: "False positive / negative", definition: "Alarm without attack / attack without alarm — the two tuning failures of any IDS." },
            ],
            table: {
              caption: "Signature vs anomaly detection — the differentiation marks.",
              headers: ["Aspect", "Signature (misuse) detection", "Anomaly detection"],
              rows: [
                ["Model", "match known attack patterns", "flag deviation from user/system profiles"],
                ["Catches", "known attacks only", "novel attacks and insiders"],
                ["Misses", "zero-day and variant attacks", "misuse within normal-looking limits"],
                ["False alarms", "low on known patterns", "high — profile drift looks like attack"],
                ["Maintenance", "constant signature updates", "profile training and threshold tuning"],
              ],
            },
            bullets: [
              "IDS = sensors -> analyzer -> manager console -> response.",
              "Signature detection: antivirus model — precise, incomplete, update-dependent.",
              "Anomaly detection: statistical profiles — novel-catching, false-alarm-prone.",
              "Host-based watches logs/syscalls/file integrity; network-based watches segments.",
              "Honeypots: decoys that lure attackers and teach new signatures.",
              "Distributed IDS: host + LAN modules correlating at a central manager.",
              "IDS complements the firewall — it watches what gets through.",
              "Jun 2025 Q8 asked IDS as short-note (a) of an any-two 14-mark question.",
            ],
            diagram: {
              kind: "pipeline",
              title: "The intrusion detection pipeline",
              caption:
                "Collect, decide, triage, respond — with a honeypot alongside to teach the analyzer new patterns.",
              stages: [
                { label: "Sensors", note: "packets, host logs, file integrity" },
                { label: "Analyzer", note: "signature match + anomaly scoring" },
                { label: "Manager console", note: "triage and correlation" },
                { label: "Response", note: "alert, block, capture evidence" },
              ],
            },
            callout: {
              type: "exam",
              title: "A short-note topic in Jun 2025",
              body: "Jun 2025 Q8: 'Write short notes on any two: (a) Intrusion detection system, (b) Snooping TCP, (c) IEEE 802.11a' — 14 marks. The IDS note needs the four components, the signature/anomaly contrast with one strength and one weakness each, and the honeypot line.",
            },
            examQuestions: [
              {
                q: "Write short notes on any two of the following: (a) Intrusion detection system, (b) Snooping TCP, (c) IEEE 802.11a.",
                marks: 14,
                appearances: ["Jun 2025"],
                outline: [
                  "IDS: sensors -> analyzer -> console -> response pipeline",
                  "Signature detection: known patterns, precise, update-bound",
                  "Anomaly detection: statistical profiles, novel-catching, false-alarm-prone",
                  "HIDS vs NIDS placement; honeypots as decoys",
                  "Snooping TCP: transparent FA cache + local retransmission (section 4.6)",
                  "802.11a: 5 GHz OFDM, 54 Mbit/s, 52 subcarriers (section 3.2)",
                ],
              },
              {
                q: "Compare signature-based and anomaly-based intrusion detection with strengths, weaknesses and one deployment each.",
                marks: 7,
                outline: [
                  "Signature: match known patterns — low false alarms, misses zero-days",
                  "Needs constant rule updates; antivirus-style deployment",
                  "Anomaly: statistical user/traffic profiles — catches novel and insider",
                  "High false positives; threshold and training costs",
                  "Deployment: signatures at the perimeter NIDS; anomaly on critical hosts",
                  "Together: signatures for the known, anomaly scores for the unknown",
                ],
              },
              {
                q: "Explain honeypots and their role in a distributed intrusion detection architecture.",
                marks: 7,
                outline: [
                  "Honeypot: decoy system with no production value — traffic to it is suspicious by definition",
                  "Lures attackers away from real assets",
                  "Harvests new attack signatures and behaviour",
                  "Distributed IDS: host modules + LAN modules + central manager correlation",
                  "Placement: DMZ segment, alongside but isolated from production",
                  "Legal/ethical note: containment so the decoy cannot attack outward",
                ],
              },
            ],
          },
          {
            number: "5.3",
            title: "Password management",
            body: [
              "Passwords remain the dominant authentication factor, which makes their management a system-design discipline with two halves: helping users select good passwords, and storing/verifying them without leaks. The challenges (May 2023 Q5a asked for the list) are human before technical: memory burden pushes users to write or reuse passwords across systems; predictable choices (names, birthdays, dictionary words) fall to dictionary attacks; short passwords fall to brute force; social engineering and keyloggers bypass strength entirely; and shared administrative passwords never rotate.",
              "The storage defence is hashing plus salting: the system stores only H(salt ‖ password) — the salt is unique per user and stored in the clear. Salt defeats precomputed rainbow tables (each user's hash needs its own table), and a deliberately slow hash (PBKDF2, bcrypt, scrypt — thousands of iterations) defeats offline brute force even when the file leaks. Without these, a stolen password file is a cracked password file: the classic failure of unsalted fast hashes.",
              "The selection methods (May 2023 Q5b and Dec 2024 Q7b asked for them) form a ladder. User selection with a checker: users pick memorable passwords screened against a mangled dictionary and composition rules. Reactive checking: the system periodically runs dictionary attacks against its own password file and forces changes. Proactive password checking: rules and dictionary enforced at selection time with feedback — the strongest software answer. Beyond passwords: system-generated pronounceable passwords (FIPS 181 style), one-time password tokens and smart cards, and biometrics — each trading memorability for strength. Policies complete the ladder: minimum length and complexity, expiry, lockout on failures, and education.",
              "Exam angle: split the answer into challenges (the human list) and methods (the ladder from user-chosen+checker to tokens), and always include salted-slow-hash storage as the third leg. Traps: listing password-cracking tools when the question asks management (management is the defensive side), forgetting that the salt must be unique per user, and writing 'encrypt the password file' — passwords are hashed, never encrypted, because verification needs no decryption.",
            ],
            keyTerms: [
              { term: "Salt", definition: "Unique per-user random string hashed with the password — defeats precomputed rainbow tables." },
              { term: "Slow hash", definition: "Deliberately iterative hash (PBKDF2, bcrypt) that makes offline brute force expensive." },
              { term: "Proactive password checking", definition: "Rules + dictionary enforced at selection time, with feedback to the user." },
              { term: "One-time password", definition: "Token-generated code valid once — steals lose value instantly." },
              { term: "Dictionary attack", definition: "Trying likely words and mangles against a captured hash file." },
            ],
            bullets: [
              "Challenges: memory burden, reuse across systems, predictable choices, short passwords.",
              "Social engineering and keyloggers bypass strength entirely.",
              "Storage: hash + per-user salt; verification needs no decryption — never encrypt.",
              "Slow hashes (PBKDF2/bcrypt) make leaked files expensive to crack.",
              "Methods ladder: user-chosen + checker -> reactive checking -> proactive checking.",
              "Alternatives: system-generated pronounceable, OTP tokens, smart cards, biometrics.",
              "Policies: length/complexity minimums, expiry, lockout, education.",
              "Asked twice in May 2023 (Q5a, Q5b) and again in Dec 2024 (Q7b).",
            ],
            diagram: {
              kind: "fork",
              title: "Password management — the methods ladder",
              caption:
                "From user-chosen to token-held, each rung trades memorability for strength.",
              start: "Getting and keeping good passwords",
              branches: [
                { label: "User selection + checker", outcome: "memorable passwords screened against mangled dictionaries", good: true },
                { label: "Reactive checking", outcome: "periodic dictionary attack on the store; weak ones forced to change", good: true },
                { label: "Proactive checking", outcome: "rules + dictionary at selection time, with feedback — the strongest software answer", good: true },
                { label: "Tokens / OTP / biometrics", outcome: "possession or biometric replaces memorization entirely", good: true },
              ],
            },
            callout: {
              type: "exam",
              title: "Asked three times in the three papers",
              body: "May 2023 Q5a (challenges of password management), May 2023 Q5b (methods), Dec 2024 Q7b (methods) — password management is the most repeated Unit V topic. Prepare two lists: challenges (human factors) and methods (the ladder), plus the salted-slow-hash storage sentence.",
            },
            codeExample: {
              language: "python",
              caption: "passwd_store.py — salted, slow hashing",
              code: `import hashlib, os

def store_password(password: str) -> str:
    salt = os.urandom(16)                      # unique per user, stored in the clear
    digest = hashlib.pbkdf2_hmac("sha256", password.encode(), salt, 100_000)
    return salt.hex() + ":" + digest.hex()     # salt:hash

def verify(password: str, stored: str) -> bool:
    salt_hex, digest_hex = stored.split(":")
    digest = hashlib.pbkdf2_hmac("sha256", password.encode(),
                                 bytes.fromhex(salt_hex), 100_000)
    return digest.hex() == digest_hex

# salt defeats rainbow tables; iterations defeat brute force`,
            },
            examQuestions: [
              {
                q: "List out the different challenges of password management.",
                marks: 7,
                appearances: ["May 2023"],
                outline: [
                  "Memory burden -> written-down or reused passwords",
                  "Reuse across systems: one leak compromises many accounts",
                  "Predictable choices: names, birthdays, dictionary words",
                  "Short passwords fall to brute force",
                  "Social engineering and keyloggers bypass strength",
                  "Shared administrative passwords rarely rotate",
                ],
              },
              {
                q: "What are the different methods of password management?",
                marks: 7,
                appearances: ["May 2023", "Dec 2024"],
                outline: [
                  "User selection + checker: mangled-dictionary screening",
                  "Reactive checking: periodic attack on the store, forced changes",
                  "Proactive checking: rules + dictionary at selection with feedback",
                  "System-generated pronounceable passwords (FIPS 181 style)",
                  "Tokens and one-time passwords; smart cards",
                  "Storage: salted slow hash (PBKDF2/bcrypt) + policies (expiry, lockout)",
                ],
              },
              {
                q: "Why are passwords hashed and salted rather than encrypted, and what does the salt accomplish?",
                marks: 7,
                outline: [
                  "Verification compares hashes — decryption is never needed",
                  "Encrypted files carry a key that itself must be protected",
                  "Hashing is one-way: the store leaks nothing directly",
                  "Salt is unique per user and stored in the clear",
                  "Without salt: one precomputed rainbow table cracks every user",
                  "With salt + slow hash: offline cracking becomes per-user, expensive",
                ],
              },
            ],
          },
          {
            number: "5.4",
            title: "Viruses, worms and trojan horses",
            body: [
              "Malicious software divides by how it travels. A virus is code that attaches to a host program or file and spreads when the infected carrier runs or opens — it needs a host and human action. A worm is a self-contained program that propagates across networks by itself, exploiting services and misconfigurations without any carrier file — the Morris worm of 1988 is the canonical case. A trojan horse hides inside something useful (a fake installer, a game, a utility) and executes its hidden payload when the user runs it — the deception is the delivery.",
              "A virus's life runs four phases: dormant (idle, waiting), propagation (copies itself into hosts), triggering (an event — date, count, action — activates it), execution (the payload does its damage). Classifications follow the host: parasitic (attaches to executables), memory-resident, boot-sector, stealth (hides its changes from the OS), polymorphic (mutates its signature per copy), and macro viruses riding document scripting. Worms and trojans skip the host phases but share the triggering/execution structure.",
              "Defense is layered, and no single layer suffices. Detection: signature scanning (fast, incomplete), heuristic and behaviour-based detection (catches variants, raises false alarms), and integrity checking (baseline hashes of system files reveal tampering). Prevention and containment: patch management (worms ride unpatched services), least privilege and sandboxing (limit what code may do), email/download hygiene (the human vector), network segmentation to slow propagation, and — as the textbook's capstone — the digital immune system idea: a captured sample is analysed in a quarantine environment, a signature is extracted and distributed to every machine automatically.",
              "Exam angle: define the three threat types with 'needs a host?' and 'spreads by' distinctions, list the virus's four phases, and give the defense layers in order. Traps: calling a worm a network virus (worms need no host), claiming antivirus signatures catch polymorphic code reliably (that is why heuristics exist), and presenting defense as antivirus alone — patching and privilege control carry half the marks.",
            ],
            keyTerms: [
              { term: "Virus", definition: "Host-attaching code that spreads on user action through a four-phase life." },
              { term: "Worm", definition: "Self-contained self-propagating program exploiting network services — no host needed." },
              { term: "Trojan horse", definition: "Hidden payload inside a useful-looking program — deception is the delivery." },
              { term: "Polymorphic virus", definition: "Mutates its code signature each copy — defeats plain signature scanning." },
              { term: "Digital immune system", definition: "Quarantine-and-analyse pipeline that distributes new signatures automatically after each infection." },
            ],
            table: {
              caption: "The malware family by transmission.",
              headers: ["Threat", "Needs a host?", "Spreads by", "Canonical example"],
              rows: [
                ["Virus", "yes — attaches to programs/files", "infected files opened or run by users", "boot-sector and macro viruses"],
                ["Worm", "no — self-contained", "autonomous network exploitation", "Morris worm (1988)"],
                ["Trojan horse", "hosted in a decoy program", "user tricked into running it", "fake installers, RAT droppers"],
              ],
            },
            bullets: [
              "Virus: host + human action; four phases — dormant, propagation, triggering, execution.",
              "Types: parasitic, memory-resident, boot-sector, stealth, polymorphic, macro.",
              "Worm: self-propagating over networks; Morris worm the classic case.",
              "Trojan horse: useful-looking wrapper, hidden payload.",
              "Detection: signatures (fast, incomplete) + heuristics/behaviour + integrity checks.",
              "Prevention: patching, least privilege, sandboxing, hygiene, segmentation.",
              "Digital immune system: quarantine -> analyse -> distribute new signatures.",
              "Stealth hides changes; polymorphism mutates signatures — both dodge scanners.",
            ],
            diagram: {
              kind: "flow",
              title: "The virus life cycle",
              caption:
                "Four phases; detection windows differ per phase — dormant is the quiet one, execution is the loud one.",
              steps: [
                { label: "Dormant", note: "idle, waiting for conditions" },
                { label: "Propagation", note: "copies itself into hosts/files" },
                { label: "Triggering", note: "date, count or event fires the payload" },
                { label: "Execution", note: "damage done — and the detection window opens" },
              ],
            },
            callout: {
              type: "warning",
              title: "Three names, three mechanisms",
              body: "The classic conflation: worm ≠ virus. A virus needs a host file and a user; a worm needs neither. If the question names all three (virus, worm, trojan horse), the table with 'needs a host?' and 'spreads by' columns is the answer shape examiners expect.",
            },
            examQuestions: [
              {
                q: "Differentiate viruses, worms and trojan horses, and explain the defense against each.",
                marks: 7,
                outline: [
                  "Virus: attaches to host files; spreads on user action",
                  "Worm: self-contained, self-propagating over networks",
                  "Trojan horse: hidden payload in a useful-looking program",
                  "Virus phases: dormant, propagation, triggering, execution",
                  "Detection: signatures + heuristics/behaviour + integrity checking",
                  "Prevention: patching, least privilege, sandboxing, hygiene, segmentation",
                  "Digital immune system: quarantine -> analyse -> distribute signatures",
                ],
              },
              {
                q: "Explain the four phases of a virus and why polymorphic and stealth viruses complicate detection.",
                marks: 7,
                outline: [
                  "Dormant: idle; propagation: copies into hosts",
                  "Triggering: event fires; execution: payload runs",
                  "Signature scanners match static code — polymorphism mutates per copy",
                  "Stealth viruses intercept OS calls, hiding file changes",
                  "Answers: heuristics, behaviour monitoring, integrity baselines",
                ],
              },
              {
                q: "Why do worms spread faster than viruses, and which defenses specifically contain them?",
                marks: 7,
                outline: [
                  "No host or user needed — automated exploitation",
                  "Propagation rate follows vulnerable-machine discovery, not human file sharing",
                  "Morris worm (1988) saturated much of the early internet",
                  "Defence: patch management closes the exploited services",
                  "Firewall segmentation and rate limiting slow the scan",
                  "Egress filtering blocks the worm's command channel",
                ],
              },
            ],
          },
          {
            number: "5.5",
            title: "Biometrics versus conventional authentication",
            body: [
              "Authentication rests on three factors: something you know (passwords, PINs), something you have (smart cards, tokens), and something you are — biometrics. A biometric system enrols a template of a physical or behavioural trait and verifies future presentations against it: fingerprint, face, iris/retina, hand geometry, voice, signature dynamics, keystroke rhythm. The syllabus's phrase 'difference biometrics and authentication system' resolves into comparing this third factor with the conventional two.",
              "The differences are structural. Knowledge and possession factors are revocable: a leaked password is reset, a lost card is reissued. A biometric cannot be re-issued — ten fingerprints are all the fingerprints you get — so a leaked template is permanent damage, which is why templates must be stored as protected mathematical representations, never raw images. Knowledge factors can be shared, forgotten or typed under duress; biometrics cannot be lent or forgotten but can be noisy — the same finger presents differently each time, so the system matches within a threshold rather than exactly.",
              "That threshold is the exam's arithmetic: the false acceptance rate (FAR — impostors accepted) and false rejection rate (FRR — legitimate users rejected) trace opposing curves as the threshold moves; the crossover error rate (CER/EER) is where they meet and is the standard single-number quality metric — a lower CER means a better biometric. Choose per application: high-security entry tunes toward low FAR and accepts some FRR; consumer convenience tunes the reverse. Compared honestly: biometrics beat passwords on uniqueness and non-transferability, lose on cost, privacy, revocability and environmental sensitivity (gloves, lighting, noise for voice).",
              "Exam angle: name the three factors, give four biometric modalities, and draw the FAR/FRR crossover with CER labelled. Traps: claiming biometrics are 'more secure, period' (they shift, not remove, the failure modes), forgetting the non-revocability point — it is the deepest difference — and matching 'exactly' instead of 'within threshold', which misses why FAR/FRR exist at all.",
            ],
            keyTerms: [
              { term: "Template", definition: "The stored mathematical representation of a biometric trait used for matching." },
              { term: "FAR", definition: "False acceptance rate — impostors wrongly accepted; security's enemy." },
              { term: "FRR", definition: "False rejection rate — legitimate users wrongly rejected; usability's enemy." },
              { term: "CER / EER", definition: "Crossover (equal) error rate — the FAR=FRR point; lower means a better biometric." },
              { term: "Non-revocability", definition: "A compromised biometric cannot be re-issued — the deepest difference from passwords." },
            ],
            table: {
              caption: "The three authentication factors compared.",
              headers: ["Factor", "Examples", "Strength", "Weakness"],
              rows: [
                ["Something you know", "passwords, PINs", "free, revocable, familiar", "guessable, phishable, forgettable"],
                ["Something you have", "smart cards, OTP tokens", "possession required", "lost, stolen, cloned"],
                ["Something you are (biometric)", "fingerprint, iris, face, voice", "unique, non-transferable", "noisy matching; non-revocable; costly"],
              ],
            },
            bullets: [
              "Three factors: know (password), have (token), are (biometric).",
              "Biometric = enrol a template, then verify within a threshold.",
              "Modalities: fingerprint, face, iris/retina, hand geometry, voice, signature, keystroke.",
              "FAR (impostors accepted) and FRR (users rejected) trade off along the threshold.",
              "CER/EER = the crossover point; lower CER = better system.",
              "Passwords are revocable; biometrics are not — templates must be protected.",
              "Biometrics cannot be lent, forgotten or typed under duress.",
              "Costs: hardware, privacy, environment sensitivity (gloves, lighting, noise).",
            ],
            diagram: {
              kind: "compare",
              title: "Conventional authentication vs biometrics",
              caption:
                "Revocability against uniqueness — the trade every deployment weighs.",
              left: {
                heading: "Conventional (password/token)",
                items: [
                  "Exact match — hash equality or key check",
                  "Revocable: reset on compromise",
                  "Cheap, universal, no hardware for passwords",
                  "Sharable, forgettable, phishable",
                ],
              },
              right: {
                heading: "Biometric",
                items: [
                  "Threshold match — FAR/FRR curves",
                  "Unique, non-transferable, always carried",
                  "Cannot be re-issued once compromised",
                  "Costly hardware; privacy and environment sensitivity",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "CER is the single-number answer",
              body: "When a question asks to 'compare' biometric systems, one sentence does the differentiating: systems are ranked by crossover error rate — the threshold where FAR equals FRR — and everything else (modality, cost, environment) explains why a given system lands where it does.",
            },
            examQuestions: [
              {
                q: "Differentiate biometric authentication systems from conventional (password/token) authentication, with modalities and error metrics.",
                marks: 7,
                outline: [
                  "Factors: something known, something held, something you are",
                  "Biometrics: enrol template, verify within threshold",
                  "Modalities: fingerprint, iris, face, voice, signature dynamics",
                  "FAR vs FRR trade along the threshold; CER is their crossover",
                  "Passwords revocable; biometrics non-revocable — templates protected",
                  "Biometrics cannot be lent or forgotten; passwords can",
                ],
              },
              {
                q: "Explain FAR, FRR and the crossover error rate with a sketch of the threshold trade-off.",
                marks: 7,
                outline: [
                  "FAR: impostors accepted — falls as the threshold tightens",
                  "FRR: legitimate users rejected — rises as the threshold tightens",
                  "The curves cross: that threshold is the CER/EER",
                  "Lower CER = better biometric system",
                  "High-security tuning: low FAR, tolerate FRR",
                  "Consumer tuning: low FRR, accept some FAR",
                ],
              },
              {
                q: "Why is a compromised biometric template worse than a compromised password, and how is the risk managed?",
                marks: 7,
                outline: [
                  "Passwords reset; fingers do not — non-revocability",
                  "One leaked template poisons every system using that trait",
                  "Mitigation: store mathematical templates, never raw images",
                  "Encrypt templates; bind them per-application (salt-like separation)",
                  "Prefer challenge-response verification over template export",
                  "Multi-factor: biometric as one factor among two",
                ],
              },
            ],
          },
          {
            number: "5.6",
            title: "Firewall design principles",
            body: [
              "A firewall is the enforced choke point between a trusted internal network and untrusted external ones. Its design goals are the syllabus's exact phrase 'firewall design principles' (Dec 2024 Q7a): all traffic must pass through the firewall (the single checkpoint), only authorized traffic may pass (defined by a written security policy), and the firewall itself must be immune to penetration — an exploitable gateway is worse than none, because it concentrates trust.",
              "The toolkit divides by where decisions are made. Packet filtering (the border router) decides per-packet on addresses, ports and flags — fast and transparent, but application-blind and user-blind, and it cannot inspect payload. Stateful inspection keeps a connection table and admits only packets belonging to known sessions — cheaply blocks unsolicited replies. Application-level gateways (proxies) terminate each service (HTTP, FTP, DNS) and mediate content and user identity — deep control and logging at the cost of one proxy per protocol and slower throughput. Circuit-level gateways (SOCKS) relay sessions without inspecting application content.",
              "Architecture composes these into depth. A screened-host firewall puts a packet filter between the internet and a bastion host (the hardened application gateway). The screened subnet (DMZ) adds a second filter: public services (web, mail) live in a demilitarized zone that neither the internet nor the internal network reaches directly — a compromised web server cannot see inside. Control knobs span service control (which services), direction control (inbound/outbound), user control (per-user proxy auth) and behaviour control (spam, malware filtering). Limitations are part of the answer: firewalls cannot stop insider misuse, cannot inspect encrypted traffic (without interception), bypass via rogue wireless links and tunnels, and are not a substitute for patched, hardened hosts.",
              "Jun 2025 Q7a asked 'What do you mean by Firewall? Write and discuss various issues of firewall designing' and Dec 2024 Q7a asked 'Write and explain firewall design principles' — two phrasings of the same 7-mark question. The prepared answer: definition + three design goals + the four techniques with one strength/limitation each + the DMZ sketch + the limitations list. Traps: answering 'types' when 'principles' is asked (the goals list is the question), forgetting firewall immunity as a goal, and claiming firewalls stop viruses at modern times without behavioural filtering — classic packet filters pass infected payloads.",
            ],
            keyTerms: [
              { term: "Firewall", definition: "The enforced choke point through which all traffic between trust zones must pass." },
              { term: "Packet filter", definition: "Per-packet address/port decisioning — fast, transparent, application-blind." },
              { term: "Application gateway (proxy)", definition: "Per-service mediator with content inspection and user authentication." },
              { term: "Bastion host", definition: "The hardened, minimal gateway host exposed to the internet." },
              { term: "Screened subnet (DMZ)", definition: "Buffer zone between two filters hosting public services — compromise there stays contained." },
            ],
            table: {
              caption: "Firewall techniques — strength and limitation per row.",
              headers: ["Technique", "Decides on", "Strength", "Limitation"],
              rows: [
                ["Packet filter", "IP/port/flag rules per packet", "fast, transparent", "no user auth, no payload inspection"],
                ["Stateful inspection", "connection-state table", "blocks unsolicited replies cheaply", "still application-blind"],
                ["Application gateway", "per-service protocol content", "deep control, logging, user auth", "one proxy per service; slower"],
                ["Circuit-level gateway", "session relay (SOCKS)", "protocol-agnostic relaying", "no content inspection"],
                ["Screened subnet (DMZ)", "layered filters + bastion host", "public services isolated", "more hardware and policy to maintain"],
              ],
            },
            bullets: [
              "Three design goals: all traffic through it, only authorized passes, it survives attack.",
              "Packet filter: fast per-packet rules; blind to users and payloads.",
              "Stateful inspection: connection table admits known sessions only.",
              "Application gateway: deep per-service control; one proxy per protocol.",
              "Screened host: filter + bastion host; screened subnet adds the DMZ.",
              "Controls: service, direction, user, behaviour.",
              "Limitations: insiders, encryption, bypass links, unpatched hosts behind it.",
              "Dec 2024 Q7a and Jun 2025 Q7a asked this from two angles.",
            ],
            diagram: {
              kind: "fork",
              title: "Choosing the firewall architecture",
              caption:
                "Depth buys containment: each rung adds a second line between the internet and the intranet.",
              start: "Where is the trust boundary?",
              branches: [
                { label: "Border only", outcome: "packet filter — fast, coarse; one rule list guards everything", good: true },
                { label: "Screened host", outcome: "filter + bastion host — proxies gain user and content control", good: true },
                { label: "Screened subnet (DMZ)", outcome: "two filters sandwich public services — a web-server breach stays outside", good: true },
                { label: "Application gateway per service", outcome: "deepest control per protocol; slowest, most maintenance", good: true },
              ],
            },
            callout: {
              type: "exam",
              title: "Asked in both Dec 2024 and Jun 2025",
              body: "Dec 2024 Q7a: 'Write and explain firewall design principles'; Jun 2025 Q7a: 'What do you mean by Firewall? Write and discuss various issues of firewall designing' — same 7-mark territory twice. Answer with the three goals, four techniques (one line each), the DMZ sketch and the limitations; 'principles' questions die when answered with only 'types'.",
            },
            examQuestions: [
              {
                q: "Write and explain firewall design principles.",
                marks: 7,
                appearances: ["Dec 2024"],
                outline: [
                  "Definition: enforced choke point between trust zones",
                  "Goal 1: all traffic passes through the firewall",
                  "Goal 2: only authorized traffic passes — per the security policy",
                  "Goal 3: the firewall itself is immune to penetration",
                  "Techniques: packet filter, stateful, application gateway, circuit gateway",
                  "Architecture: screened host; screened subnet (DMZ) sketch",
                  "Limitations: insiders, encrypted traffic, bypass links, unpatched hosts",
                ],
              },
              {
                q: "What do you mean by Firewall? Write and discuss various issues of firewall designing.",
                marks: 7,
                appearances: ["Jun 2025"],
                outline: [
                  "Definition + the three design goals (through, authorized, immune)",
                  "Issue: policy definition — what is 'authorized' must be written down",
                  "Issue: performance vs depth — filters fast, proxies deep",
                  "Issue: encrypted traffic cannot be inspected without termination",
                  "Issue: bypass paths — wireless links, tunnels, modems defeat the choke point",
                  "Issue: insider traffic never crosses the perimeter",
                  "DMZ architecture as the structural answer",
                ],
              },
              {
                q: "Compare packet filtering and application-level gateways with one deployment each.",
                marks: 7,
                outline: [
                  "Packet filter: per-packet IP/port rules on the border router",
                  "Fast, transparent, user-blind, payload-blind",
                  "Application gateway: per-service proxy with auth and logging",
                  "Deep control; one proxy per protocol; slower",
                  "Deployment: filter at the border + proxy for web/mail in the DMZ",
                  "Stateful inspection as the middle path",
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
        { topic: "Cellular system: architecture, handoff, sectorization, power control", weight: "≈ 28 marks", note: "Q1-Q2 of every paper: May 2023 Q1, Dec 2024 Q1-Q2, Jun 2025 Q1-Q2 — two full questions per session." },
        { topic: "Multiple access: SDMA/TDMA/FDMA/CDMA/DAMA/PRMA", weight: "≈ 14 marks", note: "Dec 2024 Q1b comparison; Jun 2025 Q1b DAMA+PRMA; May 2023 Q1a priority access." },
        { topic: "GSM and GPRS: architecture, services, comparison", weight: "≈ 14-28 marks", note: "GPRS architecture verbatim twice (May 2023 Q2a, Dec 2024 Q3a); Jun 2025 Q3 is a 14-mark GPRS vs GSM comparison." },
        { topic: "IEEE 802.11: architecture, MAC, hidden/exposed terminals", weight: "≈ 14-28 marks", note: "The LAN-architecture question appeared verbatim twice (May 2023 Q3a, Dec 2024 Q4a); MAC and terminals in Dec 2024 Q5 and Jun 2025 Q5." },
        { topic: "HIPERLAN versions and channel access", weight: "≈ 14-21 marks", note: "May 2023 Q4 (both halves), Dec 2024 Q4b detail, Jun 2025 Q6a — three papers, four questions." },
        { topic: "Mobile transport layer: I-TCP, snooping, M-TCP", weight: "≈ 14 marks", note: "May 2023 Q6a, Dec 2024 Q6a differentiation, Jun 2025 Q8b snooping note — every paper." },
        { topic: "Mobile IP, DHCP and encapsulations", weight: "≈ 14-21 marks", note: "May 2023 Q7b headers + Q8 note; Dec 2024 Q6b + Q8 Mobile IP note." },
        { topic: "Unit V security: password management, firewalls, IDS, intruders", weight: "≈ 21-28 marks", note: "May 2023 Q5 (both halves), Dec 2024 Q7 + Q8, Jun 2025 Q7 + Q8 — one full question per session." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Two hours a day, five days a week, with weekends for the three known past papers (May 2023, Dec 2024, Jun 2025). Draw every diagram at least once by hand — 'with neat sketch' appears in the question text of antennas, cellular architecture, GPRS, 802.11 and WSN.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I — antennas, propagation, fading", tasks: ["Antenna types + gain with one sketch each (dBi vs dBd)", "Ground/sky/LOS propagation + radio horizon arithmetic", "Fading taxonomy: flat/selective × fast/slow with Rayleigh/Rician", "Wireless digital communication chain + five-layer reference model"] },
        { week: "Week 2", focus: "Unit I — access, cellular, traffic engineering", tasks: ["SDMA/TDMA/FDMA/CDMA comparison table + GSM hybrid arithmetic", "DAMA and PRMA reservation loops; priority-based access", "Cellular stack, handoff types, hysteresis, sectorization, power control", "Erlang-B recursion: size a trunk group for A = 2 E at P.02"] },
        { week: "Week 3", focus: "Unit II — GSM and GPRS", tasks: ["GSM subsystems + services (three families)", "Logical channel tree with directions; burst types; timing advance", "MTC routing via HLR/MSRN; four handover scopes; A3/A8/A5 security", "GPRS architecture drawing: MS-BSS-SGSN-GGSN-PDN + interfaces; states and CS-1..CS-4"] },
        { week: "Week 4", focus: "Unit II leftovers + Unit III WLANs", tasks: ["DECT TDMA/TDD frame; TETRA 4-slot + talkgroup/DMO; UMTS R99 + soft handover", "802.11 architecture (BSS/IBSS/ESS/DS) — asked verbatim twice", "a/b/g physical family table; CSMA/CA with IFS ladder", "Hidden vs exposed terminal sketches; MAC management join order; power save"] },
        { week: "Week 5", focus: "Unit III leftovers + Unit IV network layer", tasks: ["HIPERLAN four versions + EY-NPMA phases; Bluetooth radio + piconet/SCO/ACL", "Mobile IP lifecycle + three encapsulations' header fields", "DHCP DORA + lease timers; MANET characteristics and issues", "DSDV/AODV/DSR routing; WSN node + field architecture and applications"] },
        { week: "Week 6", focus: "Unit IV transport + Unit V security + papers", tasks: ["I-TCP vs snooping vs M-TCP comparison; timeout freezing; SACK; T/TCP", "WAP stack + gateway + security gap", "Intruder classes; IDS signature vs anomaly; password challenges/methods", "Virus/worm/trojan table; biometrics FAR/FRR; firewall goals + DMZ; two full past papers timed"] },
      ],
    },
    {
      id: "exam-tips",
      heading: "Exam-hall strategy",
      examTips: [
        "The paper is attempt-any-five-of-eight, each full question 14 marks split 7+7 — scan all eight before choosing; two units usually share the early questions.",
        "Every unit opened at least one question in all three known sessions (May 2023, Dec 2024, Jun 2025) — never leave a unit unrevised.",
        "'With neat sketch' is printed in the question text for antennas, cellular architecture, GPRS, 802.11 and WSN — the labelled diagram earns marks on its own; draw it first, then explain.",
        "Comparison questions want tables: SDMA/TDMA/FDMA/DAMA (Dec 2024), GSM vs GPRS (Jun 2025), I-TCP vs snooping vs M-TCP (Dec 2024) — reproduce the row-per-item table.",
        "Define-the-terms halves (Jun 2025 Q2b: handoff, sectorization) reward two crisp lines each, not essays — budget two minutes per definition.",
        "Q8 is always short notes: three topics, all required (May 2023, Dec 2024) or any two (Jun 2025) — prepare one compact paragraph plus one sketch per note topic.",
        "The English version is final in case of dispute — if a printed Hindi translation looks odd, answer the English line.",
        "Time-box: 7-mark half ≤ 12 min, 14-mark question ≤ 25 min, leaving 20 minutes for a second pass over sketches and definitions.",
      ],
    },
    {
      id: "slips",
      heading: "Common slips that cost easy marks",
      bullets: [
        "Calling DAMA a spread-spectrum scheme — DAMA is demand-assigned channel allocation layered over TDMA/FDMA, not code division.",
        "Describing GSM security as one algorithm — it is the A3/A8/A5 trio around RAND, Ki, SRES and Kc; swapping their jobs costs the mechanism marks.",
        "Claiming CDMA works without power control — the near-far problem makes closed-loop power control mandatory.",
        "Swapping hidden and exposed terminals — hidden causes collisions at the receiver; exposed causes needless deferral (Jun 2025 asked both).",
        "Attributing broken end-to-end semantics to snooping TCP — that is indirect TCP's flaw; snooping is transparent (Dec 2024's differentiation question probes exactly this).",
        "Writing 'handoff' and 'handover' as different mechanisms — one term, four scopes (intra-cell, intra-BSC, inter-BSC, inter-MSC); name the scopes.",
        "Putting the WAP gateway inside the phone — it sits in the operator's network, terminating WTLS and translating to HTTP/TLS.",
        "Listing firewall types when the question asks design principles — the three goals (all traffic through it, only authorized passes, it survives attack) are the asked answer (Dec 2024 Q7a).",
        "Answering Erlang-B questions with offered load = carried load — carried = A(1 − P_B); state the LCC assumptions before the formula.",
        "Forgetting the salt in password storage — hashing without a unique per-user salt leaves rainbow tables open.",
      ],
    },
  ],
};
