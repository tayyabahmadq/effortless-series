import type { AcademicSubject } from "./types";

export const ec502: AcademicSubject = {
  id: "ec-502",
  code: "EC-502",
  title: "Digital Communication",
  semester: "V Semester",
  program: "RGPV · Electronics and Communication Engineering",
  tagline:
    "Every topic of the syllabus as one connected story: how sampling turns waveforms into pulses, how PCM, companding and delta modulation compress them, how ASK, PSK, FSK, MSK and QAM carry them through band-pass channels, how matched filters and signal space decide bits with minimum error, and how Shannon's entropy and coding theory bound and protect the whole chain.",
  description:
    "Five units walk from the sampling theorem for low-pass and band-pass signals with ideal, natural and flat-top sampling, TDM and the PAM/PWM/PPM pulse family, through PCM quantization noise, companding, ISI and eye patterns, delta and adaptive modulation, and line coding, into band-pass transmission with ASK, BPSK, QPSK, DPSK, BFSK, MSK and QAM, then matched filtering, Gram-Schmidt orthogonalization and error-probability computation, ending with entropy, channel capacity, Shannon's theorem, and linear block, cyclic, burst-error and convolutional coding.",
  accentColor: "#3b82f6",
  emoji: "DC",
  unitCount: 5,
  totalSections: 33,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Sampling and Pulse Modulation",
      summary:
        "Unit I converts continuous signals into pulses: the sampling theorem for low-pass and band-pass signals, ideal, natural and flat-top sampling, aliasing and crosstalk, time division multiplexing, and the generation and detection of PAM, PWM and PPM.",
      chapter: {
        number: "01",
        title: "From Waveform to Pulses",
        intro:
          "Unit I covers the sampling theorem for low-pass and band-pass signals, ideal/natural/flat-top sampling, aliasing, crosstalk in TDM, and the generation and detection of PAM, PWM and PPM.",
        inOneBreath:
          "A band-limited signal of W Hz is fully described by samples taken at 2W per second - the Nyquist rate; sampling slower folds the spectrum (aliasing) and loses information forever. Ideal sampling multiplies by an impulse train, natural sampling by finite pulses, flat-top sampling by a sample-and-hold that adds an aperture effect correctable with an equalizer. PAM/PWM/PPM carry sample values as amplitude, width or position of pulses; TDM interleaves users in time, with crosstalk appearing when pulses smear into neighbouring slots.",
        sections: [
          {
            number: "1.1",
            title: "Sampling theorem for low-pass signals",
            body: [
              "The sampling theorem is the licence for the whole digital revolution: a band-limited signal g(t) with no spectral content above W Hz is completely specified by samples taken at a rate fs >= 2W, and can be exactly reconstructed by passing the sampled signal through an ideal low-pass filter of bandwidth W. The rate 2W is the Nyquist rate; the equal-spacing reconstruction formula g(t) = sum of samples x sinc terms shows each sample carrying the entire waveform's fate.",
              "The proof logic is worth stating: sampling multiplies g(t) by an impulse train, and multiplication in time is convolution in frequency - so the sampled spectrum is the original spectrum replicated at every multiple of fs. If fs > 2W the replicas (images) do not overlap and a low-pass filter of bandwidth W recovers the original exactly; if fs < 2W the replicas overlap and the folded tails contaminate the baseband permanently. A worked case: voice with W = 3.4 kHz needs fs >= 6.8 kHz; the practical PCM standard samples at 8 kHz, leaving 1.2 kHz of guard band so realizable filters - not ideal ones - can do the job.",
              "Reconstruction needs the interpolating filter's gain scaled by fs: the sampled spectrum is (1/Ts) G(f), so the reconstruction filter must have gain Ts across the passband (or equivalently the sampled signal is multiplied by Ts). This gain factor is the detail most exam derivations expect, alongside the sinc-function reconstruction formula.",
              "In the exam: state the theorem precisely, draw the three-spectrum picture (original, sampled with fs > 2W, sampled with fs < 2W), and close with a numerical Nyquist-rate computation. The 8 kHz voice example with its guard band is the standard closing line.",
            ],
            keyTerms: [
              { term: "Nyquist rate", definition: "Minimum sampling rate 2W for exact reconstruction of a W-Hz band-limited signal." },
              { term: "Aliasing", definition: "Spectral overlap of sampling images when fs < 2W; irrecoverable information loss." },
              { term: "Guard band", definition: "Extra sampling headroom (fs > 2W) that lets practical filters reject images." },
              { term: "Reconstruction filter", definition: "Ideal low-pass of bandwidth W and gain Ts that converts samples back to the waveform." },
            ],
            diagram: {
              kind: "flow",
              title: "Sampling, spectra and recovery",
              caption: "Replicate the spectrum, avoid overlap, filter out the copies - the three beats of the theorem.",
              steps: [
                { label: "Band-limit to W", note: "anti-aliasing filter first" },
                { label: "Sample at fs >= 2W", note: "spectrum replicated at k*fs" },
                { label: "No overlap", note: "images separated" },
                { label: "LPF (gain Ts, BW W)", note: "extract baseband copy" },
                { label: "Recovered g(t)", note: "exact reconstruction" },
              ],
            },
            bullets: [
              "Band-limited W: exact recovery needs fs >= 2W (Nyquist rate).",
              "Sampling = multiplication by impulse train = spectral replication every fs.",
              "fs < 2W folds image tails into baseband - aliasing, irreversible.",
              "Voice: W = 3.4 kHz, Nyquist 6.8 kHz, practical fs = 8 kHz with guard band.",
              "Reconstruction filter: bandwidth W, gain Ts (= 1/fs).",
              "Anti-aliasing filter must precede the sampler, not follow it.",
            ],
            callout: {
              type: "exam",
              title: "The guard-band sentence",
              body: "Examiners reward the practical line: fs = 8 kHz for 3.4 kHz voice is not 2W but a deliberate guard band of 1.2 kHz so that realizable (not ideal) reconstruction filters suffice. Quote it after the theorem statement.",
            },
            table: {
              caption: "Nyquist arithmetic, worked cases.",
              headers: ["Signal", "Bandwidth W", "Nyquist rate 2W", "Practical fs"],
              rows: [
                ["Speech (PCM)", "3.4 kHz", "6.8 kHz", "8 kHz"],
                ["Music (CD)", "20 kHz", "40 kHz", "44.1 kHz"],
                ["Video (component)", "5.5 MHz", "11 MHz", "13.5 MHz"],
              ],
            },
            examQuestions: [
              {
                q: "State and prove the sampling theorem for low-pass signals. Why does practical PCM sample 3.4 kHz voice at 8 kHz rather than at exactly 6.8 kHz?",
                marks: 14,
                outline: [
                  "Theorem: band-limited W fully determined by samples at fs >= 2W",
                  "Sampling = impulse-train multiplication -> spectral replication at k*fs",
                  "fs > 2W: non-overlapping images; LPF of bandwidth W recovers g(t)",
                  "fs < 2W: overlap -> aliasing, irreversible",
                  "Reconstruction filter gain Ts; sinc interpolation formula",
                  "Worked: W = 3.4 kHz, 2W = 6.8 kHz, fs = 8 kHz",
                  "Guard band 1.2 kHz lets realizable filters reject images",
                ],
              },
              {
                q: "A signal has bandwidth 12 kHz. Compute the Nyquist rate and the output bit rate if it is PCM-coded at that rate with 8 bits per sample.",
                marks: 7,
                outline: [
                  "Nyquist rate = 2 x 12 kHz = 24 ksamples/s",
                  "Bit rate = 24,000 x 8 = 192 kbps",
                  "Anti-aliasing filter must cut at 12 kHz before sampling",
                ],
              },
            ],
          },
          {
            number: "1.2",
            title: "Sampling theorem for band-pass signals",
            body: [
              "A band-pass signal occupying fL to fH (bandwidth B = fH - fL) does not need to be sampled at 2fH. Because the signal's energy lives entirely in a band away from DC, a lower rate suffices: band-pass sampling (undersampling, or harmonic sampling) samples at fs = 2B only when the band edges are integer multiples of B/2, and generally at a rate in the range 2B to 4B depending on the band position. The trick: sampling deliberately translates the band down to baseband as one of the spectral replicas, so the sampler doubles as a mixer.",
              "The condition set is the exam's algebra. Write fH = kB + xB where x is the fractional position (0 <= x < 1); alias-free sampling requires fs to satisfy 2fH/m <= fs <= 2fL/(m-1) for some integer m, and the minimum fs = 2B is achieved when x = 0 or x = 0.5 - i.e., when the band edges fall on multiples of B/2. Worked case: a signal from 4B to 5B (fL = 4B, fH = 5B, exactly one band wide, x = 0) samples at fs = 2B with the band aliasing directly to DC-to-B.",
              "Practical value: digitizing an IF or RF band directly. A satellite receiver with a 70 MHz IF and 10 MHz bandwidth could sample at 20-40 Msamples/s instead of 140 Msamples/s - halving to seventh the sampler and ADC cost. The costs are strict anti-alias filtering (now it must reject the whole of the lower spectrum, not just near-DC) and jitter sensitivity, which grows because the sample instants carry frequency-translation accuracy.",
              "In the exam, present the fH = kB + xB formulation, the alias-free range inequality, the minimum-2B condition at x = 0/0.5, and one numeric IF-sampling example. Draw the replica picture showing which image lands on baseband - it is the visual that makes the algebra credible.",
            ],
            keyTerms: [
              { term: "Band-pass sampling", definition: "Sampling a band-limited-to-B signal at ~2B-4B by letting an image land on baseband." },
              { term: "Undersampling", definition: "Deliberate sampling below 2fH; the sampler acts as a mixer." },
              { term: "Alias-free range", definition: "2fH/m <= fs <= 2fL/(m-1) for some integer m." },
              { term: "Minimum rate 2B", definition: "Achieved when band edges are multiples of B/2 (x = 0 or 0.5)." },
            ],
            diagram: {
              kind: "pipeline",
              title: "Band-pass sampling as free downconversion",
              caption: "Sample the RF/IF band; one replica lands at baseband - the ADC doubles as a mixer.",
              stages: [
                { label: "Band at fL-fH", note: "bandwidth B" },
                { label: "Sample at fs ~ 2B", note: "replicas every fs" },
                { label: "Choose m", note: "alias-free range check" },
                { label: "Replica at baseband", note: "band translated to DC-B" },
                { label: "Digital filtering", note: "reject other replicas" },
              ],
            },
            bullets: [
              "Band-pass signals need not be sampled at 2fH - 2B to 4B suffices.",
              "Alias-free condition: 2fH/m <= fs <= 2fL/(m-1) for some integer m.",
              "Minimum fs = 2B when band edges are multiples of B/2 (x = 0 or 0.5).",
              "Worked: 4B-5B band samples at 2B, aliasing to DC-B.",
              "Saves ADC rate: 70 MHz IF, 10 MHz BW -> 20-40 Msample/s, not 140.",
              "Penalty: much stricter anti-alias filter; jitter matters more.",
            ],
            callout: {
              type: "tip",
              title: "Undersampling is deliberate",
              body: "In low-pass sampling, fs < 2W is a bug; in band-pass sampling, fs < 2fH is the whole design. Saying that sentence in the answer shows you understand why the two theorems look contradictory but are not.",
            },
            table: {
              caption: "Band position vs minimum rate.",
              headers: ["Band (fL to fH)", "x = fL/B mod 1", "Minimum fs"],
              rows: [
                ["0 to B", "0", "2B"],
                ["B to 2B", "1 (x=0)", "2B"],
                ["4B to 5B", "0", "2B"],
                ["2.5B to 3.5B", "0.5", "2B"],
                ["arbitrary x", "not 0/0.5", "up to 4B"],
              ],
            },
            examQuestions: [
              {
                q: "State the sampling theorem for band-pass signals. Derive the alias-free sampling rate range and show that a 4B-5B band can be sampled at 2B.",
                marks: 14,
                outline: [
                  "Band-pass signal fL-fH, bandwidth B = fH - fL",
                  "Sampling replicates the band every fs - one replica can land at baseband",
                  "Alias-free range: 2fH/m <= fs <= 2fL/(m-1)",
                  "Minimum fs = 2B when x = 0 or 0.5",
                  "4B-5B: m = 5 works; fs = 2B maps the band to DC-B",
                  "Numerical: 70 MHz IF, 10 MHz BW -> 20 Msample/s possible",
                  "Costs: strict anti-alias filter, jitter sensitivity",
                ],
              },
              {
                q: "Why must the anti-aliasing filter be much sharper in band-pass sampling than in low-pass sampling?",
                marks: 7,
                outline: [
                  "Every spectral component from near-DC to fH can alias into the band",
                  "Low-pass case only guards against content above W",
                  "Band-pass needs rejection over the whole lower spectrum",
                ],
              },
            ],
          },
          {
            number: "1.3",
            title: "Ideal, natural and flat-top sampling",
            body: [
              "Three sampling implementations trade fidelity against realizability. Ideal sampling multiplies the signal by a true impulse train - infinitely narrow pulses of area Ts - producing spectra scaled by 1/Ts with no distortion beyond the spectral replication; it is unbuildable but is the reference model of Unit 1.1's proof. Natural sampling multiplies by finite-width pulses of width tau, so the top of each pulse follows the signal during the pulse; the spectrum's images are weighted by sinc functions (the pulse transform), preserving signal shape within each pulse.",
              "Flat-top sampling is the practical one: sample-and-hold first captures instantaneous values, then pulses of fixed width and amplitude carry them. The output spectrum's images are weighted by sinc(pi f tau) - the aperture effect - which attenuates higher frequencies by up to 3.9 dB at f = 1/(2tau) and droops the whole reconstruction unless corrected. The cure is an equalization filter with frequency response rising as 1/sinc(pi f tau), or simply keeping tau << Ts (tau = Ts/10 costs about 0.14 dB at edge).",
              "A worked comparison: voice sampled at 8 kHz with pulse width tau = 10 microseconds. Aperture attenuation at 3.4 kHz: sinc(pi x 3400 x 10e-6) = sinc(0.107 rad) = sin(0.107)/(0.107) = 0.998 - under 0.02 dB, negligible. With tau = 100 microseconds (Ts/2), the loss at 3.4 kHz reaches sinc(1.07) = 0.83 - about 1.6 dB, clearly needing the equalizer. The numbers show why designs keep tau small or equalize.",
              "In the exam, draw the three time-domain pictures (impulses, shaped pulses, flat tops) and the three spectral pictures, then compute one aperture loss. The sinc-weighting mechanism - pulse transform multiplying each image - is the conceptual thread that unifies the three cases.",
            ],
            keyTerms: [
              { term: "Ideal sampling", definition: "Impulse-train multiplication; spectral images unweighted - the mathematical reference." },
              { term: "Natural sampling", definition: "Finite pulses whose tops follow the signal; images weighted by the pulse's sinc transform." },
              { term: "Flat-top sampling", definition: "Sample-and-hold pulses of fixed amplitude; aperture effect = sinc droop." },
              { term: "Aperture effect", definition: "High-frequency attenuation sinc(pi f tau) in flat-top sampling; fixed by equalizer." },
            ],
            diagram: {
              kind: "compare",
              title: "Three samplers, three spectra",
              caption: "The pulse shape is the spectral weighting - impulse, shaped top, or flat top.",
              left: {
                heading: "Ideal / natural",
                items: [
                  "Ideal: impulse train, images scaled 1/Ts only",
                  "Natural: pulse tops follow the signal",
                  "Images weighted by sinc(f tau)",
                  "No aperture correction needed",
                ],
              },
              right: {
                heading: "Flat-top (practical)",
                items: [
                  "Sample-and-hold: amplitude fixed at sample instant",
                  "Images weighted by sinc(pi f tau)",
                  "Aperture droop up to 3.9 dB at 1/(2 tau)",
                  "Equalizer or tau << Ts cures it",
                ],
              },
            },
            bullets: [
              "Ideal: infinite-time resolution, unbuildable; images unweighted.",
              "Natural: pulse-width tau, top follows signal; images sinc-weighted.",
              "Flat-top: sample-and-hold; images sinc(pi f tau)-weighted - aperture effect.",
              "Aperture loss at f: sinc(pi f tau); 3.9 dB maximum at f = 1/(2 tau).",
              "Worked: tau = 10 microseconds at 8 kHz -> 0.02 dB loss at 3.4 kHz; tau = 100 microseconds -> 1.6 dB.",
              "Cure: equalizing filter ~ 1/sinc(pi f tau), or shrink tau.",
            ],
            callout: {
              type: "warning",
              title: "Aperture effect is not aliasing",
              body: "Both distort flat-top spectra, but aliasing is information loss from overlap while aperture effect is recoverable amplitude droop. Answers that mix the two mechanisms lose the distinction mark - name sinc weighting, not folding, for flat-top distortion.",
            },
            table: {
              caption: "Aperture loss worked numbers (fs = 8 kHz).",
              headers: ["Pulse width tau", "sinc argument at 3.4 kHz", "Loss at 3.4 kHz"],
              rows: [
                ["10 microseconds", "0.107 rad", "~0.02 dB"],
                ["50 microseconds", "0.534 rad", "~0.4 dB"],
                ["100 microseconds", "1.07 rad", "~1.6 dB"],
                ["125 microseconds (1/(2tau)=4kHz)", "1.34 rad", "~2.4 dB"],
              ],
            },
            examQuestions: [
              {
                q: "Compare ideal, natural and flat-top sampling with their spectral effects. Explain the aperture effect and compute the loss at 3.4 kHz for pulse widths of 10 and 100 microseconds at 8 kHz sampling.",
                marks: 14,
                outline: [
                  "Ideal: impulse train; images unweighted; reference model",
                  "Natural: finite pulses, tops follow signal; sinc-weighted images",
                  "Flat-top: sample-and-hold; sinc(pi f tau) weighting = aperture effect",
                  "Aperture droop up to 3.9 dB at f = 1/(2 tau)",
                  "tau = 10 microseconds: sinc(0.107) = 0.998 -> 0.02 dB",
                  "tau = 100 microseconds: sinc(1.07) = 0.83 -> 1.6 dB",
                  "Cure: equalizer with 1/sinc response or small tau",
                ],
              },
              {
                q: "Why does natural sampling need no aperture correction while flat-top sampling does?",
                marks: 7,
                outline: [
                  "Natural sampling preserves the waveform shape within pulses",
                  "Its spectral weighting mirrors the pulse transform but baseband is intact",
                  "Flat-top holds amplitude constant, imposing sinc droop on all images including baseband",
                ],
              },
            ],
          },
          {
            number: "1.4",
            title: "Aliasing and its prevention",
            body: [
              "Aliasing is the folding of spectral content above fs/2 back into the baseband - high frequencies masquerading as low ones, permanently corrupting the sampled signal. The canonical audible example: sampling a 7 kHz tone at 8 kHz produces an in-band artifact at |7 - 8| = 1 kHz; the original is unrecoverable because the folded energy is now indistinguishable from true 1 kHz content. In images, aliasing shows as moire patterns; in wheel movies, as backward spin - the same fold, different senses.",
              "Prevention is a two-part discipline applied before sampling. First, band-limit: an anti-aliasing low-pass filter must cut everything above fs/2 (for the voice case, a filter with passband to 3.4 kHz and stopband from 4 kHz, since fs/2 = 4 kHz), with enough stopband attenuation (40-60 dB typical) that folded content falls below the quantization noise floor. Second, oversample: fs = 8 kHz against a 3.4 kHz band leaves 600 Hz of transition band for the filter - steep but buildable; CD audio oversamples 40 vs 20 kHz for the same reason.",
              "A worked design: choose fs for a 4 kHz channel with a filter roll-off achievable at 48 dB/octave. Sampling at exactly 8 kHz leaves zero transition band - impossible. Sampling at 9 kHz gives a 0.5 kHz transition below fs/2 = 4.5 kHz; the standard 8 kHz choice pairs a 3.4 kHz passband with a 4 kHz stopband edge, giving 600 Hz - the engineering compromise the numbers justify.",
              "In the exam: define aliasing with the fold frequency |f - k fs|, draw the folded-spectrum picture, list the two preventions, and work one filter-budget case. The alias frequency formula - the folded tone lands at distance to the nearest multiple of fs - is the numerical tool every aliasing question uses.",
            ],
            keyTerms: [
              { term: "Aliasing", definition: "Folding of content above fs/2 into baseband; |f - k fs| gives the in-band artifact." },
              { term: "Anti-aliasing filter", definition: "Low-pass before the sampler, cutting at fs/2 with deep stopband." },
              { term: "Oversampling", definition: "fs well above 2W to widen the filter's transition band." },
              { term: "Fold frequency", definition: "Distance from the tone to the nearest sampling-image line." },
            ],
            diagram: {
              kind: "matrix",
              title: "Aliasing risk by sampling choice",
              caption: "Only one quadrant is safe - and it costs filter sharpness or headroom.",
              axes: { x: "Anti-alias filter present?", y: "fs vs 2W" },
              quadrants: [
                { label: "Safe", note: "filter + fs > 2W: images rejected, no overlap" },
                { label: "Aperture-only risk", note: "fs > 2W but no filter: out-of-band noise folds in" },
                { label: "Overlap aliasing", note: "filter but fs < 2W: signal folds onto itself - unrecoverable" },
                { label: "Severe aliasing", note: "neither: corruption plus noise folding" },
              ],
            },
            bullets: [
              "Aliased tone appears at |f - k fs| for the nearest image k.",
              "7 kHz tone sampled at 8 kHz appears at 1 kHz - the canonical example.",
              "Prevention 1: anti-alias LPF cutting at fs/2 before the sampler.",
              "Prevention 2: oversample to widen the filter transition band.",
              "Voice design: passband 3.4 kHz, stopband 4 kHz, fs = 8 kHz - 600 Hz of transition.",
              "Aliasing is irreversible - the folded energy is indistinguishable from true signal.",
            ],
            callout: {
              type: "warning",
              title: "Sampling cannot fix aliasing later",
              body: "No post-sampling filter recovers aliased content - it is spectrally indistinguishable from genuine low frequencies. Every design answer must put the anti-alias filter before the sampler; placing it after is an automatic design mark loss.",
            },
            codeExample: {
              language: "python",
              caption: "alias_demo.py - hear the fold happen",
              code: `import numpy as np

fs = 8000                       # sampling rate
t = np.arange(0, 0.1, 1/fs)
f_tone = 7000                   # above Nyquist (4 kHz)
x = np.sin(2*np.pi*f_tone*t)

# FFT shows the tone folded to |7000 - 8000| = 1 kHz
spectrum = np.abs(np.fft.rfft(x))
peak_bin = spectrum.argmax()
peak_freq = peak_bin * fs / len(t)
print(peak_freq)                # ~1000 Hz, not 7000`,
            },
            examQuestions: [
              {
                q: "What is aliasing? Explain its cause, give the folded-frequency formula with a worked example, and describe the two prevention measures with their design numbers.",
                marks: 14,
                outline: [
                  "Definition: content above fs/2 folds into baseband",
                  "Fold formula: artifact at |f - k fs|",
                  "Worked: 7 kHz tone at fs = 8 kHz -> 1 kHz artifact",
                  "Irreversible - folded energy indistinguishable from signal",
                  "Prevention: anti-alias LPF before sampler (cut at fs/2, 40-60 dB stopband)",
                  "Prevention: oversampling to widen transition band",
                  "Voice design numbers: 3.4 kHz passband, 4 kHz stopband, fs = 8 kHz",
                ],
              },
              {
                q: "A 6 kHz tone is sampled at 10 kHz. At what frequency does it appear, and why?",
                marks: 7,
                outline: [
                  "Nyquist = 5 kHz; the tone is above it",
                  "Fold to nearest image: |6000 - 10000| = 4 kHz",
                  "Appears as a 4 kHz tone - aliasing",
                ],
              },
            ],
          },
          {
            number: "1.5",
            title: "Time division multiplexing and crosstalk",
            body: [
              "Time division multiplexing shares one channel among N users by interleaving their sample pulses in time: a commutator samples each input in turn, producing a composite frame that repeats at the sampling rate and contains N time slots. With 8 kHz voice sampling and N = 24 channels (the T1 system), the frame period is 125 microseconds and each slot is about 5.2 microseconds; the total pulse rate is N x fs = 192 ksamples/s before coding. Guard time between slots absorbs timing jitter so pulses never collide.",
              "Crosstalk is TDM's characteristic impairment: energy from one user's pulse leaking into the neighbouring slot, heard as faint speech from another conversation. Two mechanisms dominate - bandwidth limitation, where finite channel bandwidth (tau_r = 1/(2B) rise time) smears pulses into adjacent slots, and switching transients, where the commutator's edges couple between channels. The cure calculus: the channel's impulse response must decay to a small fraction within the guard time, so required bandwidth scales with slot rate - roughly B > 1/(2 tau_slot) for negligible overlap.",
              "A worked estimate: T1 slots of 5.2 microseconds with 2-microsecond pulses. For the tail to decay by, say, 20 dB within the 3.2 microseconds remaining, the channel needs B >= 1/(2 x 3.2 microseconds) x margin - about 300 kHz minimum against the pulse's own spectral demands (1/(2 x 2 microseconds) = 250 kHz). Under-engineering bandwidth by half doubles the rise time and makes the pulse tail land squarely in the next slot - the arithmetic behind 'crosstalk = insufficient bandwidth'.",
              "In the exam, draw the TDM frame (N slots, frame period Ts = 1/fs, guard time), derive the slot arithmetic for a stated N, and present the two crosstalk mechanisms with their bandwidth condition. Framing - one extra sync slot so the receiver knows where frames begin - completes the system picture.",
            ],
            keyTerms: [
              { term: "TDM frame", definition: "One cycle of N time slots, repeating at fs; slot width Ts/N." },
              { term: "Guard time", definition: "Slot spacing that absorbs pulse tails and jitter, preventing slot collision." },
              { term: "Crosstalk", definition: "Leakage of one channel's pulse energy into adjacent slots - bandwidth-limited tails and commutator transients." },
              { term: "Framing", definition: "A sync slot/pattern marking frame boundaries for slot de-interleaving." },
            ],
            diagram: {
              kind: "pipeline",
              title: "A TDM frame",
              caption: "N samples interleaved per frame period; sync marks the boundary; guard time absorbs tails.",
              stages: [
                { label: "Sync slot", note: "frame marker" },
                { label: "Slot 1 (ch 1)", note: "sample pulse" },
                { label: "Slot 2 (ch 2)", note: "guard gap between" },
                { label: "...", note: "slots 3..N-1" },
                { label: "Slot N (ch N)", note: "frame repeats at fs" },
              ],
            },
            bullets: [
              "TDM interleaves N users' samples in time; frame period Ts = 1/fs.",
              "T1 example: 24 channels, 8 kHz, 125 microseconds frame, ~5.2 microseconds slots.",
              "Total sample rate N x fs = 192 ksamples/s for T1's pulse plane.",
              "Crosstalk source 1: channel bandwidth limits - pulse tails leak into next slot.",
              "Crosstalk source 2: commutator switching transients coupling channels.",
              "Condition for negligible crosstalk: channel response decays within guard time; B ~ 1/(2 tau).",
            ],
            callout: {
              type: "exam",
              title: "Crosstalk is a bandwidth bill",
              body: "The line examiners want: crosstalk in TDM is the price of insufficient channel bandwidth - the pulse tail cannot decay within the guard time. Then give the B ~ 1/(2 tau) estimate with the slot numbers, and the answer moves from definition to design.",
            },
            table: {
              caption: "T1-style frame arithmetic.",
              headers: ["Quantity", "Value", "Derivation"],
              rows: [
                ["Sampling rate", "8 kHz", "voice Nyquist + guard"],
                ["Channels N", "24", "T1 standard"],
                ["Frame period", "125 microseconds", "1/8000"],
                ["Slot width", "5.2 microseconds", "125/24"],
                ["Sample rate total", "192 ksamples/s", "24 x 8000"],
                ["Pulse bandwidth need", "> 250 kHz", "1/(2 x 2 microseconds pulse)"],
              ],
            },
            examQuestions: [
              {
                q: "Explain time division multiplexing with a frame diagram. For 24 voice channels sampled at 8 kHz, compute the frame period, slot width and total sample rate, and explain how crosstalk arises and is minimized.",
                marks: 14,
                outline: [
                  "TDM: interleaved sample slots per frame at fs",
                  "Frame period = 1/8000 = 125 microseconds",
                  "Slot width = 125/24 = 5.2 microseconds",
                  "Total rate = 24 x 8 k = 192 ksamples/s",
                  "Crosstalk mechanism 1: bandwidth-limited pulse tails into next slot",
                  "Crosstalk mechanism 2: commutator switching transients",
                  "Cures: guard time, bandwidth >= ~1/(2 tau), better isolation; framing for sync",
                ],
              },
              {
                q: "Why does increasing the number of TDM channels worsen crosstalk for a fixed channel bandwidth?",
                marks: 7,
                outline: [
                  "Slot width shrinks as N grows (Ts/N)",
                  "Pulse width and guard time shrink proportionally",
                  "Fixed bandwidth -> fixed rise time -> tail now occupies a larger fraction of the slot",
                ],
              },
            ],
          },
          {
            number: "1.6",
            title: "PAM: generation and detection",
            body: [
              "Pulse amplitude modulation encodes each sample as the amplitude of a pulse of fixed width and timing - the simplest analogue-to-pulse scheme and the bridge into PCM. Generation: the signal is band-limited, sampled (flat-top or natural), and the sampled values drive the pulse amplitude; in flat-top form a sample-and-hold feeds a pulse generator, producing the staircase-topped pulse train of Unit 1.3. PAM is the immediate input to a quantizer, which is why PCM systems describe PAM as their 'pulse plane'.",
              "Detection inverts generation: after channel transmission, the pulse train passes through a low-pass filter (the reconstruction filter of Unit 1.1, gain Ts, bandwidth W) which converts pulse amplitudes back to the continuous waveform; in sample-and-hold receivers, a hold circuit followed by the LPF smooths the staircase. Because amplitude carries the information, PAM inherits AM's weaknesses - channel gain variation and additive noise directly corrupt the samples, which is exactly why PCM quantizes and recodes it.",
              "A worked link into PCM: a 4 kHz voice channel PAM-sampled at 8 kHz with 125 microseconds frames; each 5.2 microseconds PAM slot is then quantized to 8 bits, producing 64 kbps per channel - the arithmetic chain (sampling -> PAM -> quantization -> 64 kbps) is the standard exam thread connecting Unit I to Unit II. Noise analysis: additive noise n on the channel perturbs each sample by n, so PAM output SNR equals the channel SNR - no processing gain, the fact that motivates PWM/PPM next.",
              "In the exam: give the PAM definition, the flat-top generation block diagram, the LPF detection argument, and the worked 64 kbps PCM chain. The 'amplitude is fragile' conclusion sets up the next section's comparison.",
            ],
            keyTerms: [
              { term: "PAM", definition: "Sample values carried as pulse amplitudes of fixed width and timing." },
              { term: "Sample-and-hold", definition: "Circuit holding each sampled value constant for the pulse duration (flat-top)." },
              { term: "Detection LPF", definition: "Reconstruction filter (BW W, gain Ts) converting PAM back to the waveform." },
              { term: "64 kbps", definition: "8 kHz x 8 bits - the PCM rate per voice channel built on PAM." },
            ],
            diagram: {
              kind: "pipeline",
              title: "PAM generation and detection",
              caption: "Band-limit, sample-and-hold, pulse train - transmit - LPF back to the waveform.",
              stages: [
                { label: "Anti-alias LPF", note: "band-limit to W" },
                { label: "Sampler / S&H", note: "flat-top values" },
                { label: "PAM train", note: "fixed width, varying amplitude" },
                { label: "Channel", note: "amplitude noise hits directly" },
                { label: "Detection LPF", note: "gain Ts, BW W -> g(t)" },
              ],
            },
            bullets: [
              "PAM: information in pulse amplitude; width and position fixed.",
              "Generation: anti-alias filter -> sampler (natural or flat-top) -> pulse train.",
              "Detection: LPF of bandwidth W and gain Ts (or S&H + LPF).",
              "Noise hits amplitude directly - PAM SNR = channel SNR, no gain.",
              "PAM is the quantizer's input: 8 kHz sampling + 8 bits = 64 kbps per voice channel.",
              "TDM interleaves PAM from N users - the composite frame of Unit 1.5.",
            ],
            callout: {
              type: "exam",
              title: "PAM is the bridge, not the destination",
              body: "State explicitly that PAM's noise sensitivity is why PCM quantizes: amplitude information converted to digits survives the channel. That one sentence ties Unit I to Unit II and is worth its own mark in most schemes.",
            },
            table: {
              caption: "PAM-to-PCM chain, worked voice case.",
              headers: ["Stage", "Value", "Arithmetic"],
              rows: [
                ["Bandwidth W", "3.4 kHz", "speech band"],
                ["Sampling fs", "8 kHz", "guard-banded Nyquist"],
                ["PAM slot", "5.2 microseconds", "125 microseconds / 24 (T1)"],
                ["Quantizer", "8 bits", "256 levels"],
                ["Bit rate", "64 kbps", "8000 x 8"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the generation and detection of PAM with block diagrams, and show how it forms the first stage of a 64 kbps PCM voice channel.",
                marks: 14,
                outline: [
                  "PAM definition: amplitude carries sample values",
                  "Generation: anti-alias LPF, sampler/S&H, pulse train",
                  "Detection: LPF (BW W, gain Ts) reconstructs g(t)",
                  "Noise sensitivity: channel noise directly perturbs samples",
                  "Chain: 8 kHz sampling -> 8-bit quantization -> 64 kbps",
                  "TDM interleaves PAM slots (24 x 5.2 microseconds frame)",
                  "Conclusion: quantization digitizes amplitude to survive the channel",
                ],
              },
              {
                q: "Why does PAM provide no noise immunity improvement over the baseband signal itself?",
                marks: 7,
                outline: [
                  "Information rides on amplitude - exactly what additive noise corrupts",
                  "SNR_out = SNR_channel; no processing gain",
                  "PWM/PPM move information to time, gaining amplitude-noise immunity",
                ],
              },
            ],
          },
          {
            number: "1.7",
            title: "PWM and PPM: generation and detection",
            body: [
              "Pulse width modulation encodes each sample as the duration of a pulse of fixed amplitude; pulse position modulation encodes it as the displacement of a narrow pulse from its nominal slot centre. Both move the information from amplitude into time - and that is their entire point: a channel that attenuates or adds amplitude noise leaves width and position untouched, so PWM/PPM deliver noise immunity PAM cannot. The cost is bandwidth: timing information needs sharper edges, so PWM/PPM demand wider channel bandwidth than PAM for the same message.",
              "Generation is clock-driven. PWM: a sawtooth (or triangular) carrier is compared with the sample values; the comparator output is high while the ramp is below the sample - pulse width proportional to sample value. PPM follows from PWM by differentiation: the trailing (or leading) edges of PWM pulses trigger narrow pulses at a reference time plus the encoded delay; a monostable fixes the narrow pulse width. Detection: PAM-style integration converts PWM width back to amplitude (integrate each pulse, the area carries the value); PPM is detected by converting position back to width (a PWM regeneration stage) then integrating, or by direct time-interval measurement against the recovered clock.",
              "A worked design: PWM with a 5 microseconds reference period and full-scale width 4 microseconds, sampling 1 kHz audio into 1 ms frames - width resolution needed 4 microseconds/256 levels = 15.6 ns, demanding channel bandwidth ~ 1/(2 x 15.6 ns) ~ 32 MHz for full 8-bit equivalence; the number shows why PWM/PPM trade bandwidth for noise immunity and why they suit power-control and telemetry (narrow pulses, constant amplitude) more than voice trunks, which PCM took over.",
              "In the exam: define both schemes, draw the comparator-based PWM generator and the differentiate-to-PPM path, give the detection methods (integrate for PWM; position-to-width for PPM), and quantify the bandwidth-versus-noise-immunity trade. The constant-amplitude property - transmitter power independent of signal - is the application argument examiners reward.",
            ],
            keyTerms: [
              { term: "PWM", definition: "Sample value carried as pulse duration; amplitude constant." },
              { term: "PPM", definition: "Sample value carried as pulse displacement from the nominal slot." },
              { term: "Comparator generation", definition: "Sawtooth vs sample comparison produces width-proportional pulses." },
              { term: "Integration detection", definition: "Pulse area recovers the sample value for PWM; PPM converts position to width first." },
            ],
            diagram: {
              kind: "fork",
              title: "Pulse-time modulation family",
              caption: "Same samples, different carriers - width or position, both immune to amplitude noise.",
              start: "Sample values",
              branches: [
                { label: "PWM", outcome: "comparator vs ramp; detect by integration (area = value)", good: true },
                { label: "PPM", outcome: "differentiate PWM; narrow pulse at encoded delay; detect by position-to-width", good: true },
                { label: "PAM (contrast)", outcome: "amplitude carries value; no noise immunity", good: false },
                { label: "Bandwidth cost", outcome: "timing edges demand ~1/(2 x resolution) bandwidth", good: false },
              ],
            },
            bullets: [
              "PWM: width proportional to sample; amplitude and period fixed.",
              "PPM: position displacement proportional to sample; narrow constant pulses.",
              "Generation: ramp comparator -> PWM; differentiator + monostable -> PPM.",
              "Detection: integrate area (PWM); convert position to width then integrate (PPM).",
              "Noise immunity: amplitude noise cannot touch timing information.",
              "Cost: bandwidth ~ 1/(2 x timing resolution); 15.6 ns edges ~ 32 MHz.",
              "Applications: power converters, telemetry, IR remotes - constant-amplitude benefits.",
            ],
            callout: {
              type: "tip",
              title: "Area is the detector",
              body: "The one-line detection insight: integrating a PWM pulse yields its area = amplitude x width, so width becomes amplitude again. Write that sentence before the block diagram - it shows why the integrator (not an LPF alone) is the PWM detector.",
            },
            table: {
              caption: "PAM vs PWM vs PPM.",
              headers: ["Property", "PAM", "PWM", "PPM"],
              rows: [
                ["Information carrier", "amplitude", "width", "position"],
                ["Amplitude-noise immunity", "none", "high", "high"],
                ["Bandwidth demand", "lowest", "higher", "highest"],
                ["Constant transmitter power", "no", "no (variable width)", "yes"],
                ["Detection", "LPF", "integrator", "position->width + integrator"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the generation and detection of PWM and PPM with diagrams. Why do they offer noise immunity over PAM, and at what bandwidth cost?",
                marks: 14,
                outline: [
                  "PWM: comparator of sample vs sawtooth; width proportional",
                  "PPM: differentiate PWM; monostable narrows pulses at encoded positions",
                  "Detection: integrator (area) for PWM; position-to-width conversion for PPM",
                  "Immunity: information in time, untouched by amplitude noise",
                  "Bandwidth cost: edge resolution 15.6 ns for 8-bit-equivalent -> ~32 MHz",
                  "Constant amplitude -> constant transmitter power (PPM)",
                  "Applications: telemetry, power control; voice trunks moved to PCM",
                ],
              },
              {
                q: "Why is PPM preferred over PWM in power-limited transmitters?",
                marks: 7,
                outline: [
                  "PPM pulses have fixed narrow width - average power constant",
                  "PWM width varies - average power tracks the signal",
                  "PPM also allows peak-power (not average) limited links to reach farther",
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
      title: "PCM, Delta Modulation and Line Coding",
      summary:
        "Unit II digitizes the pulses: PCM with quantization noise and companding, intersymbol interference and the eye pattern, delta and adaptive delta modulation, and the line codes - on-off, polar, RZ, bipolar AMI, Manchester and differential - with their advantages and disadvantages.",
      chapter: {
        number: "02",
        title: "Digitizing the Signal",
        intro:
          "Unit II covers PCM generation, quantization and quantization noise, companding, intersymbol interference and eye patterns, delta modulation with slope overload and granular noise, adaptive delta modulation, and line-coding techniques with their tradeoffs.",
        inOneBreath:
          "PCM samples, quantizes and codes: 8 bits at 8 kHz gives 64 kbps, with quantization noise bounded by step/2 and SNR = 6.02n + 1.76 dB. Companding (A-law/mu-law) logs the compressor so quiet sounds get fine steps. ISI from band-limited channels closes the eye; equalization and Nyquist pulse shaping reopen it. Delta modulation transmits the sign of each increment - simple, but slope overload chases steep waveforms and granular noise ripples flat ones, cured by adaptation. Line codes (NRZ, RZ, AMI, Manchester) trade bandwidth against clocking and DC balance.",
        sections: [
          {
            number: "2.1",
            title: "Pulse code modulation: the generation chain",
            body: [
              "PCM converts each PAM sample into a binary word through three operations: sampling (Unit I), quantizing (mapping each continuous sample to the nearest of 2^n levels), and encoding (labelling the level with an n-bit binary word). The quantizer's transfer is a staircase - decision levels at multiples of the step, output levels at step midpoints - and the encoder emits, for an 8-bit voice channel, either a sign-magnitude or a companded code (Unit 2.3). At 8 kHz sampling the output is the canonical 64 kbps digital stream.",
              "The system view: a PCM multiplex concatenates N channels' words into frames, adds framing, and transmits the serial bit stream over any digital medium. At the receiver, the inverse chain decodes words to levels, holds them (sample-and-hold), and low-pass filters to the analogue output. Quantization error is the only irreversible step - everything else is invertible signal processing - which is why SNR discussions centre on the quantizer.",
              "A worked chain: 4 kHz voice, 8 kHz sampling, 8-bit uniform quantizer. Levels = 256; step = 2 Vfull-scale/256; if full-scale is 2 V peak-to-peak (±1 V), the step is 7.8125 mV and the maximum quantization error is ±3.9 mV. Bit rate = 8000 x 8 = 64 kbps; a T1 frame of 24 channels adds one framing bit per 125 microseconds frame, giving 1.544 Mbps total - the arithmetic backbone of the digital network.",
              "In the exam, draw the three-block chain with waveforms at each point (samples, staircase, bits), state the level/step/error arithmetic for given numbers, and compute the bit rate for stated n and fs. The T1 closing (24 x 64 kbps + framing = 1.544 Mbps) is the canonical numerical finish.",
            ],
            keyTerms: [
              { term: "PCM", definition: "Sample-quantize-encode chain producing a binary bit stream per channel." },
              { term: "Quantizer staircase", definition: "Decision levels at step boundaries; reconstruction levels at midpoints." },
              { term: "64 kbps", definition: "8 kHz x 8 bits per voice channel - the PCM standard rate." },
              { term: "T1 framing", definition: "24 channels x 8 bits + 1 framing bit per 125 microseconds = 1.544 Mbps." },
            ],
            diagram: {
              kind: "pipeline",
              title: "The PCM chain",
              caption: "Sample, quantize, encode - transmit - decode, hold, filter. Only quantization is irreversible.",
              stages: [
                { label: "LPF + sampler", note: "fs = 8 kHz voice" },
                { label: "Quantizer", note: "256 levels; error <= step/2" },
                { label: "Encoder", note: "8-bit words" },
                { label: "TDM + framing", note: "24ch + sync -> 1.544 Mbps" },
                { label: "Decode + S&H + LPF", note: "analogue out" },
              ],
            },
            bullets: [
              "PCM = sampling + quantization + binary encoding.",
              "8-bit quantizer: 256 levels, step = full-scale/256, error bounded by step/2.",
              "Voice chain: 8 kHz x 8 bits = 64 kbps per channel.",
              "T1: 24 x 64 kbps + 8 kbps framing = 1.544 Mbps.",
              "Quantization is the only irreversible PCM step - noise analysis lives there.",
              "Receiver chain: decode -> sample-and-hold -> reconstruction LPF.",
            ],
            callout: {
              type: "exam",
              title: "The T1 closing line",
              body: "Whenever a PCM question asks for 'the bit rate of the system', finish with the multiplex arithmetic: 24 channels x 64 kbps plus 8 kbps of framing equals 1.544 Mbps. The framing-bit detail converts a bare multiplication into a systems answer.",
            },
            codeExample: {
              language: "python",
              caption: "pcm_chain.py - quantize a sine, count the error",
              code: `import numpy as np

fs, n = 8000, 8                 # 8 kHz, 8-bit
t = np.arange(0, 1/1000, 1/fs)
x = np.sin(2*np.pi*1000*t)      # 1 kHz test tone, +/-1 V

step = 2 / 2**n                 # full-scale 2 V, 256 levels
q = np.round(x/step) * step     # mid-tread quantizer
err = x - q
print("step mV:", step*1000)            # 7.8125
print("max |err| mV:", np.abs(err).max()*1000)   # <= 3.90625
print("bit rate:", fs*n, "bps")          # 64000`,
            },
            examQuestions: [
              {
                q: "Explain PCM generation and reception with block diagrams. For 8 kHz sampling of a 2 V peak-to-peak signal with an 8-bit quantizer, compute the number of levels, step size, maximum quantization error and bit rate.",
                marks: 14,
                outline: [
                  "Chain: LPF, sampler, quantizer, encoder; receiver inverse",
                  "Levels = 2^8 = 256",
                  "Step = 2 V/256 = 7.8125 mV",
                  "Max error = step/2 = 3.9 mV",
                  "Bit rate = 8000 x 8 = 64 kbps",
                  "T1 multiplex: 24 x 64 k + framing = 1.544 Mbps",
                  "Quantization is the only irreversible stage",
                ],
              },
              {
                q: "Why is quantization the only distortion PCM cannot undo at the receiver?",
                marks: 7,
                outline: [
                  "Sampling: invertible by LPF (theorem)",
                  "Encoding/decoding and framing: exact mapping",
                  "Quantization discards the intra-step position permanently",
                ],
              },
            ],
          },
          {
            number: "2.2",
            title: "Quantization noise and signal-to-quantization-noise ratio",
            body: [
              "Quantization error is the difference between the true sample and its staircase value; for a uniform mid-tread quantizer with step delta, the error lies in [-delta/2, +delta/2] and - for signals busy enough to straddle many steps - is modelled as uniform, giving mean-square error delta^2/12. Quantization noise power is therefore Nq = delta^2/12, independent of the signal itself; the signal power is A^2/2 for a full-scale sine of amplitude A = n delta/2... more precisely A = (2^n/2) delta for a peak-to-peak span of 2^n delta.",
              "The famous closed form falls out: SQNR = (A^2/2)/(delta^2/12) with A = 2^(n-1) delta gives (3/2) x 2^(2n) = 1.5 x 4^n, or in decibels SQNR = 6.02n + 1.76 dB. Every added bit buys 6 dB - the single most quotable number in digital communication. Worked case: n = 8 gives 6.02 x 8 + 1.76 = 49.9 dB; n = 16 gives 98.1 dB. For speech, realizable SQNR is lower because quiet passages fail to straddle steps - which is exactly the problem companding solves.",
              "Granular versus overload: error stays within ±delta/2 only when the signal fits the quantizer range; signals exceeding full-scale clip, producing overload distortion far worse than granular noise. The designer's dial: bigger delta (fewer levels) worsens granular noise; smaller delta risks clipping loud peaks. The uniform quantizer is optimal only for uniformly distributed signals - speech's Laplacian-like distribution wastes levels on rare loud samples, motivating the non-uniform quantizers of Unit 2.3.",
              "In the exam, derive SQNR = 6.02n + 1.76 dB step by step (uniform-error assumption, delta^2/12, full-scale sine), quote the 6 dB-per-bit rule, and compute for given n. The quiet-signal failure mode is the bridge to companding - state it explicitly.",
            ],
            keyTerms: [
              { term: "Quantization error", definition: "Sample minus quantized value; bounded by ±delta/2, uniform model gives delta^2/12." },
              { term: "SQNR", definition: "6.02n + 1.76 dB for a full-scale sine in an n-bit uniform quantizer." },
              { term: "6 dB per bit", definition: "Each added bit multiplies SQNR by 4 (+6.02 dB)." },
              { term: "Granular vs overload", definition: "In-range ripple noise vs clipping distortion for out-of-range peaks." },
            ],
            diagram: {
              kind: "pyramid",
              title: "Quantizer design pressures",
              caption: "Step size sits at the pinch point between three demands.",
              tiers: [
                { label: "Overload risk", note: "small range: loud peaks clip" },
                { label: "Granular noise", note: "large step: flat regions ripple" },
                { label: "Bit budget", note: "n bits -> 6.02n + 1.76 dB SQNR" },
                { label: "Speech statistics", note: "non-uniform distribution -> companding" },
              ],
            },
            bullets: [
              "Uniform error model: Nq = delta^2/12.",
              "Full-scale sine SQNR = 1.5 x 4^(n-1)... = 6.02n + 1.76 dB.",
              "Each extra bit: +6.02 dB - the canonical design currency.",
              "n = 8: 49.9 dB; n = 12: 74.0 dB; n = 16: 98.1 dB.",
              "Overload: signals beyond full-scale clip - worse than granular noise.",
              "Uniform quantizers waste levels on speech's peaky distribution - companding follows.",
            ],
            callout: {
              type: "exam",
              title: "Derive, do not just quote",
              body: "The 6.02n + 1.76 dB formula earns full marks only with its derivation: uniform error delta^2/12, full-scale sine A^2/2 with A = 2^(n-1) delta, ratio 1.5 x 4^n, then dB. Quoting alone typically loses the derivation marks this question exists to test.",
            },
            table: {
              caption: "SQNR by bit depth (full-scale sine).",
              headers: ["Bits n", "Levels", "SQNR (dB)"],
              rows: [
                ["8", "256", "49.9"],
                ["10", "1024", "62.0"],
                ["12", "4096", "74.0"],
                ["16", "65536", "98.1"],
              ],
            },
            examQuestions: [
              {
                q: "Derive the signal-to-quantization-noise ratio of an n-bit uniform quantizer for a full-scale sinusoidal input, and compute SQNR for 8 and 12 bits.",
                marks: 14,
                outline: [
                  "Error uniform in [-delta/2, delta/2] -> Nq = delta^2/12",
                  "Full-scale sine amplitude A = 2^(n-1) delta; power A^2/2",
                  "SQNR = (A^2/2)/(delta^2/12) = 1.5 x 4^n",
                  "dB form: 6.02n + 1.76 dB",
                  "n = 8: 49.9 dB; n = 12: 74.0 dB",
                  "6 dB-per-bit rule stated",
                  "Caveat: quiet signals underperform -> companding (next section)",
                ],
              },
              {
                q: "How many bits are needed for SQNR of at least 72 dB, and what bit rate results at 8 kHz sampling?",
                marks: 7,
                outline: [
                  "6.02n + 1.76 >= 72 -> n >= 11.66 -> 12 bits",
                  "12-bit check: 6.02 x 12 + 1.76 = 74.0 dB",
                  "Bit rate = 8000 x 12 = 96 kbps",
                ],
              },
            ],
          },
          {
            number: "2.3",
            title: "Companding: A-law and mu-law",
            body: [
              "Companding compresses the signal at the transmitter (logarithmic amplitude warping) and expands it at the receiver (inverse) so that the effective quantizer becomes non-uniform: fine steps for small signals, coarse steps for large ones. Because speech spends most time near low amplitudes, this matches the step size to the signal statistics and lifts effective SQNR for quiet passages by tens of decibels at the same bit count. The word itself is COMpress + exPAND.",
              "The two standards. mu-law (North America/Japan): y = ln(1 + mu|x|/xm)/ln(1 + mu) with mu = 255; A-law (Europe/ITU): y = A|x|/(1 + ln A) near zero and (1 + ln(A|x|))/(1 + ln A) above 1/A, with A = 87.56. Both are implemented as piecewise-linear approximations - mu-law as a 15-segment and A-law as a 13-segment characteristic - so encoders use small lookup tables instead of true logarithms. A-law gives slightly better quiet-signal SNR and a smaller idle-channel output; mu-law slightly better dynamic-range behaviour at loud levels.",
              "A worked comparison: for a signal 40 dB below full-scale, an 8-bit uniform quantizer's SQNR drops to 49.9 - 40 = 9.9 dB (unintelligible), while mu-law companding restores roughly 24-26 dB of that (the companding gain at that level), yielding ~34 dB - intelligible. Equivalently: companded 8 bits behave like ~12 uniform bits for quiet speech. Digital standards: mu-law codes to 64 kbps (T1), A-law to 64 kbps (E1); transcoders A-to-mu exist for interworking.",
              "In the exam, state the companding principle (non-uniform effective quantization), give both formulas with their constants and segment counts, and work the 40 dB-below-full-scale comparison. The 'fine steps for quiet, coarse for loud' sentence plus the segment diagrams is the expected form.",
            ],
            keyTerms: [
              { term: "Companding", definition: "Log compression before quantization + expansion after; non-uniform effective steps." },
              { term: "mu-law", definition: "y = ln(1+mu|x|/xm)/ln(1+mu), mu = 255; 15 segments; North America/Japan." },
              { term: "A-law", definition: "Piecewise A=87.56 characteristic; 13 segments; Europe/ITU." },
              { term: "Companding gain", definition: "SQNR improvement for low-level signals; ~24 dB at -40 dBFS with 8 bits." },
            ],
            diagram: {
              kind: "compare",
              title: "Uniform vs companded quantizer",
              caption: "Same 256 levels - redistributed to where speech actually lives.",
              left: {
                heading: "Uniform quantizer",
                items: [
                  "Constant step delta across range",
                  "Quiet signals use few steps -> tiny SQNR",
                  "-40 dBFS with 8 bits: ~9.9 dB SQNR",
                  "Wastes levels on rare loud peaks",
                ],
              },
              right: {
                heading: "Companded (mu/A-law)",
                items: [
                  "Small steps near zero, large near peaks",
                  "Log characteristic; 15/13-segment approximation",
                  "-40 dBFS with 8 bits: ~34 dB SQNR",
                  "Effective ~12 uniform bits for quiet speech",
                ],
              },
            },
            bullets: [
              "Companding = COMpression at TX + exPANSion at RX.",
              "mu = 255, 15 segments (North America); A = 87.56, 13 segments (Europe).",
              "Fine steps for small signals match speech's low-amplitude statistics.",
              "Worked: -40 dBFS signal, 8 bits: uniform 9.9 dB -> companded ~34 dB.",
              "Both standards run at 64 kbps per channel; A/mu transcoders interwork them.",
              "Piecewise-linear tables replace true logarithms in hardware.",
            ],
            callout: {
              type: "exam",
              title: "Which standard where",
              body: "The two-mark geography: mu-law = North America and Japan (T1, 15 segments, mu = 255); A-law = Europe and ITU (E1, 13 segments, A = 87.56). Mixing them up is a classic silly-loss; state both constants with their segment counts.",
            },
            table: {
              caption: "The two companding standards.",
              headers: ["Property", "mu-law", "A-law"],
              rows: [
                ["Region", "North America, Japan", "Europe, ITU"],
                ["Parameter", "mu = 255", "A = 87.56"],
                ["Segments", "15", "13"],
                ["Formula near zero", "log form throughout", "linear below 1/A"],
                ["Carrier system", "T1 (1.544 Mbps)", "E1 (2.048 Mbps)"],
              ],
            },
            examQuestions: [
              {
                q: "What is companding and why is it needed? Give the mu-law and A-law characteristics with their parameters, and quantify the SQNR improvement for a signal 40 dB below full scale with 8-bit quantization.",
                marks: 14,
                outline: [
                  "Principle: log compression + expansion -> non-uniform effective quantization",
                  "Speech statistics: most energy at low amplitudes",
                  "mu-law: ln(1+mu|x|/xm)/ln(1+mu), mu = 255, 15 segments",
                  "A-law: linear below 1/A then log, A = 87.56, 13 segments",
                  "Uniform 8-bit at -40 dBFS: 49.9 - 40 = 9.9 dB",
                  "Companding gain ~24 dB -> ~34 dB SQNR, intelligible",
                  "Equivalent to ~12 uniform bits for quiet speech",
                ],
              },
              {
                q: "Why is the companding characteristic implemented piecewise-linearly rather than exactly?",
                marks: 7,
                outline: [
                  "True log needs multipliers/linearization in hardware",
                  "Segments approximate the curve within tolerance",
                  "Only shift/add logic and lookup tables needed - cheaper, faster, standard",
                ],
              },
            ],
          },
          {
            number: "2.4",
            title: "Intersymbol interference and the eye pattern",
            body: [
              "Intersymbol interference (ISI) is the smearing of one symbol's energy into the decision instants of its neighbours - the digital impairment of band-limited or dispersive channels. Causes: channel bandwidth restriction (pulse spread = 1/B), multipath echoes, and imperfect filtering. When the pulse response has not decayed by the next sampling instant, the detected level is current symbol plus tails of previous ones - and beyond a threshold of ISI, decisions collapse in cascades.",
              "Nyquist's zero-ISI criterion gives the cure: if the overall pulse shape p(t) satisfies p(nTs) = 1 for n = 0 and 0 for all other integers n, samples at symbol instants carry no neighbour tails. The raised-cosine family realizes it: p(t) = sinc(t/Ts) x cos(pi beta t/Ts)/(1 - (2 beta t/Ts)^2), with roll-off factor beta from 0 (brick-wall, bandwidth Ts/2... Nyquist bandwidth = Rs/2) to 1 (100% excess bandwidth, 2 x Rs/2). The raised-cosine splits between transmit and receive filters - each a square-root raised cosine - so the cascade is Nyquist.",
              "The eye pattern is the oscilloscope diagnostic: overlay all symbol intervals; a wide-open eye means generous noise margins and small ISI and jitter; a closed eye means ISI and noise are closing in. Read from it: best sampling instant (eye's widest opening), noise margin (vertical opening), timing jitter tolerance (horizontal opening), and the zero-crossing slope region (sampling-time sensitivity). Eye closure in dB directly quantifies the ISI penalty the equalizer must recover.",
              "In the exam: define ISI with its three causes, state the Nyquist criterion and the raised-cosine solution with the bandwidth formula B = (1 + beta) Rs/2, and interpret the eye pattern's four readings. The square-root split between TX and RX filters is the detail that separates fluent answers.",
            ],
            keyTerms: [
              { term: "ISI", definition: "Neighbouring symbols' tails corrupting the current decision instant." },
              { term: "Nyquist criterion", definition: "p(nTs) = delta(n) - zero ISI at sampling instants." },
              { term: "Raised cosine", definition: "Nyquist pulse family with roll-off beta; bandwidth (1 + beta) Rs/2." },
              { term: "Eye pattern", definition: "Overlaid symbol intervals; openings measure noise margin and jitter tolerance." },
              { term: "Square-root raised cosine", definition: "TX and RX filters each sqrt(Nyquist) so the cascade has zero ISI." },
            ],
            diagram: {
              kind: "flow",
              title: "From ISI to open eye",
              caption: "Band-limit causes tails; Nyquist shaping controls them; the eye verifies the result.",
              steps: [
                { label: "Band-limited channel", note: "pulse spreads > Ts" },
                { label: "ISI at decision instants", note: "tails add to current symbol" },
                { label: "Raised-cosine shaping", note: "p(nTs) = delta(n)" },
                { label: "TX sqrt + RX sqrt", note: "matched pair, zero-ISI cascade" },
                { label: "Eye opens", note: "margins restored" },
              ],
            },
            bullets: [
              "ISI causes: bandwidth limits, multipath echoes, filter imperfection.",
              "Nyquist criterion: zero ISI if p(nTs) = 0 for n != 0.",
              "Raised cosine: B = (1 + beta) Rs/2; beta = 0 minimum bandwidth, beta = 1 double.",
              "Split as square-root raised cosines at TX and RX for matched filtering.",
              "Eye readings: noise margin (vertical), jitter tolerance (horizontal), best sampling instant, slope sensitivity.",
              "A closed eye = ISI + noise beyond margins; equalization reopens it.",
            ],
            callout: {
              type: "exam",
              title: "Bandwidth with the roll-off",
              body: "Always write the bandwidth as (1 + beta)Rs/2, not Rs/2 alone - the roll-off factor is where practical bandwidth goes. A worked comparison beta = 0.5 vs beta = 1 doubles the visible bandwidth difference and earns the design mark.",
            },
            table: {
              caption: "Raised-cosine roll-off tradeoffs (Rs = 1 Mbaud).",
              headers: ["Roll-off beta", "Bandwidth B", "Filter difficulty"],
              rows: [
                ["0", "500 kHz", "impossible (brick wall)"],
                ["0.25", "625 kHz", "hard"],
                ["0.5", "750 kHz", "practical"],
                ["1.0", "1 MHz", "easy"],
              ],
            },
            examQuestions: [
              {
                q: "Explain intersymbol interference, state the Nyquist criterion for zero ISI, and describe the raised-cosine solution with its bandwidth formula. Interpret the four measurements of an eye diagram.",
                marks: 14,
                outline: [
                  "ISI definition and three causes",
                  "Nyquist: p(nTs) = delta(n) - no tails at decision instants",
                  "Raised cosine family; B = (1 + beta) Rs/2",
                  "beta = 0 brick wall (unrealizable) to beta = 1 (2x Nyquist BW)",
                  "Square-root split between TX and RX matched filters",
                  "Eye readings: noise margin, jitter tolerance, best instant, slope",
                  "Equalization/e.prediction as the corrective layer",
                ],
              },
              {
                q: "A 2 Mbps link uses raised-cosine shaping with beta = 0.5. Compute the required bandwidth.",
                marks: 7,
                outline: [
                  "Rs = 2 Mbaud (binary)",
                  "B = (1 + 0.5) x 2M/2 = 1.5 MHz",
                  "beta = 1 alternative would need 2 MHz",
                ],
              },
            ],
          },
          {
            number: "2.5",
            title: "Delta modulation: slope overload and granular noise",
            body: [
              "Delta modulation (DM) replaces PCM's full-word quantization with a single-bit differential code: at each sample time the transmitter sends +delta if the signal rose since last output, -delta if it fell; the receiver accumulates the steps in an integrator, approximating the input as a staircase. Hardware is minimal - one comparator, one integrator each side, no multi-bit quantizer - and the bit rate equals the sample rate (one bit per sample), not fs x n.",
              "Two error mechanisms define DM's quality. Granular noise: on nearly flat signals the staircase ripples up and down by delta at every step - error bounded by delta but continuous. Slope overload: when the input rises faster than the staircase can (slope limit = delta x fs), the staircase falls behind and the error grows unboundedly for the overload duration. The two pull the design dial in opposite directions: small delta tames granularity but worsens overload; large delta the reverse; raising fs helps both but costs bandwidth.",
              "The design condition quantifies the trade: to track a full-amplitude sine A cos(2 pi f t) without overload, need delta x fs >= 2 pi f A, so delta >= 2 pi f A/fs. Worked case: 1 kHz tone at A = 1 V, fs = 32 kHz needs delta >= 2 pi x 1000/32000 = 0.196 V - a coarse step; with delta = 0.05 V the maximum trackable slope is 0.05 x 32000 = 1600 V/s < 2 pi x 1000 = 6283 V/s - overload. DM's quality rule of thumb: works well for slowly varying sources (speech with delta tuned) at sample rates several times PCM's.",
              "In the exam: give the DM principle and block diagram (comparator, integrator, sampler), define granular noise and slope overload with their error behaviours, and work the overload condition numerically. The delta-fs-slope triangle is the entire design story.",
            ],
            keyTerms: [
              { term: "Delta modulation", definition: "1-bit differential coding: transmit the sign of each signal increment." },
              { term: "Granular noise", definition: "Staircase ripple on flat inputs; error bounded by delta." },
              { term: "Slope overload", definition: "Input slope exceeding delta x fs; staircase falls behind, error grows." },
              { term: "Accumulator/integrator", definition: "Receiver (and TX feedback) element summing the +/-delta steps." },
            ],
            diagram: {
              kind: "compare",
              title: "The two DM failure modes",
              caption: "Same staircase, two ways to miss the signal - flat ripple vs falling behind.",
              left: {
                heading: "Granular noise",
                items: [
                  "Input nearly flat",
                  "Staircase oscillates +/-delta every step",
                  "Error bounded by delta",
                  "Cure: smaller delta",
                ],
              },
              right: {
                heading: "Slope overload",
                items: [
                  "Input rises faster than delta x fs",
                  "Staircase lags the signal",
                  "Error grows during overload",
                  "Cure: larger delta or higher fs",
                ],
              },
            },
            bullets: [
              "DM transmits one bit per sample: sign of the increment.",
              "Receiver integrates the steps into a staircase approximation.",
              "Granular noise: bounded ripple on flat segments; shrink delta to reduce.",
              "Slope overload: need delta x fs >= max signal slope (2 pi f A for a sine).",
              "Worked: fs = 32 kHz, 1 kHz, 1 V needs delta >= 0.196 V.",
              "Design dial: delta vs fs trade; speech needs adaptation (next section).",
            ],
            callout: {
              type: "warning",
              title: "The delta-fs-slope triangle",
              body: "Every DM numerical reduces to delta x fs vs signal slope. Write the inequality first, substitute the sine's 2 pi f A, and conclude - answers that start from the formula instead of wandering through waveforms score consistently.",
            },
            table: {
              caption: "Overload check, worked numbers (fs = 32 kHz).",
              headers: ["delta", "Max slope delta x fs", "1 kHz, 1 V needs 6283 V/s?", "Verdict"],
              rows: [
                ["0.05 V", "1600 V/s", "no", "overload"],
                ["0.10 V", "3200 V/s", "no", "overload"],
                ["0.196 V", "6272 V/s", "borderline", "marginal"],
                ["0.25 V", "8000 V/s", "yes", "tracks (granularity up)"],
              ],
            },
            examQuestions: [
              {
                q: "Explain delta modulation with its transmitter and receiver. Define granular noise and slope overload, and derive the condition on delta and fs to track a sinusoid without overload.",
                marks: 14,
                outline: [
                  "1-bit differential: sign of increment; integrator at receiver",
                  "Bit rate = fs (one bit per sample) - simplicity vs PCM",
                  "Granular: bounded +/-delta ripple on flat inputs",
                  "Overload: slope demand exceeds delta x fs; error unbounded while active",
                  "Condition: delta x fs >= 2 pi f A for sine",
                  "Worked: fs = 32 kHz, 1 kHz, 1 V -> delta >= 0.196 V",
                  "Design dial: delta vs granularity vs overload; adaptation cures both",
                ],
              },
              {
                q: "Why does delta modulation need higher sampling rates than PCM for the same source quality?",
                marks: 7,
                outline: [
                  "One bit per sample carries far less information than n bits",
                  "Fine tracking needs frequent small steps - fs several times PCM's",
                  "Trade: simpler hardware, higher fs, vs PCM's fewer samples with more bits",
                ],
              },
            ],
          },
          {
            number: "2.6",
            title: "Adaptive delta modulation",
            body: [
              "Adaptive delta modulation (ADM) fixes DM's delta dilemma by making the step size vary with the signal's recent behaviour: when consecutive output bits agree (the staircase is chasing a slope), the step grows; when they alternate (granular territory), the step shrinks. A syllabus-standard rule: delta(n) = delta(n-1) x P on repeated bits, delta(n) = delta(n-1) x Q on alternations, with P > 1 > Q (typically P = 2, Q = 0.5), bounded between delta_min and delta_max.",
              "The mechanism tracks both failure modes at once. Slope overload: during steep rises the bits stay +1/+1, so delta doubles each sample until delta x fs catches the slope - the staircase re-acquires within a few samples. Granularity: on flat segments bits alternate, delta halves toward delta_min, and the ripple shrinks below the noise floor. The receiver needs only the same adaptation logic (it sees the same bits), so no side information is transmitted - a strictly local algorithm.",
              "A worked trace: delta_min = 0.02 V, P = 2. After five consecutive +1 bits the step is 0.02 x 2^5 = 0.64 V - the slope capability rises from 0.02 x fs to 0.64 x fs (a 32x increase in five samples), enough to chase a sudden onset that fixed-DM with delta = 0.02 would overload on. Meanwhile a flat stretch halving five times returns to 0.000625 V - clipped by delta_min - keeping granular noise at the floor.",
              "In the exam: state the adaptive rule with P/Q values, trace a five-bit pattern through the step-size updates, and conclude with the overload-recovery and granularity numbers. Continuously variable slope delta modulation (CVSD) - the practical name for this family - is worth naming as the syllabus's real-world instance.",
            ],
            keyTerms: [
              { term: "ADM", definition: "Delta modulation whose step grows on repeated bits and shrinks on alternations." },
              { term: "Adaptation rule", definition: "delta(n) = delta(n-1) x P (repeat) or x Q (alternate), P ~ 2, Q ~ 0.5." },
              { term: "CVSD", definition: "Continuously Variable Slope Delta modulation - the practical ADM standard." },
              { term: "delta_min / delta_max", definition: "Bounds preventing runaway shrink/growth of the step." },
            ],
            diagram: {
              kind: "cycle",
              title: "The ADM step-size loop",
              caption: "Watch the bits, grow on runs, shrink on dither, clamp at bounds - repeat every sample.",
              steps: [
                { label: "Compare input vs staircase" },
                { label: "Emit +1 or -1" },
                { label: "Run? grow delta x P", note: "chasing a slope" },
                { label: "Alternating? shrink delta x Q", note: "granular territory" },
                { label: "Clamp to bounds", note: "delta_min..delta_max" },
                { label: "Next sample", note: "receiver mirrors the same rule" },
              ],
            },
            bullets: [
              "ADM varies delta: grow on bit runs (slope), shrink on alternations (granularity).",
              "Typical rule: P = 2, Q = 0.5, clamped to delta_min..delta_max.",
              "Five-run example: step 0.02 -> 0.64 V, slope capability up 32x in five samples.",
              "Receiver applies the same rule to the received bits - no side information.",
              "Cures both DM failure modes with no increase in bit rate (still 1 bit/sample).",
              "CVSD is the standardized practical form (e.g. 32/16 kbps speech links).",
            ],
            callout: {
              type: "tip",
              title: "Same bits, same adaptation",
              body: "The elegance line: because adaptation depends only on the transmitted bits, transmitter and receiver stay in lockstep with zero overhead. That self-synchronizing property is what examiners look for as the 'why ADM works' insight.",
            },
            table: {
              caption: "ADM step-size trace (delta0 = 0.02 V, P = 2, Q = 0.5).",
              headers: ["Bit pattern", "Step after update", "Meaning"],
              rows: [
                ["+1 +1 +1 +1 +1", "0.02 x 32 = 0.64 V", "chasing steep slope"],
                ["+1 -1 +1 -1 +1", "0.02 x 0.03 = 0.0006 V -> delta_min", "granular floor"],
                ["+1 +1 -1 +1 +1", "0.02 x 2 x 0.5 x 2 x 2 = 0.08 V", "mixed, moderate"],
              ],
            },
            examQuestions: [
              {
                q: "Explain adaptive delta modulation and its adaptation rule. Trace the step size through five consecutive +1 bits and through five alternating bits, starting from delta = 0.02 V with P = 2, Q = 0.5.",
                marks: 14,
                outline: [
                  "ADM definition: step grows on runs, shrinks on alternations",
                  "Rule delta(n) = delta(n-1) x P or x Q with bounds",
                  "Five +1 bits: 0.02 x 2^5 = 0.64 V - slope capacity up 32x",
                  "Five alternations: 0.02 x 0.5^5 ~ 0.0006 V -> clamped at delta_min",
                  "Overload recovery within a few samples; granularity reduced at rest",
                  "Receiver mirrors the rule - self-synchronizing, no overhead",
                  "Bit rate unchanged at 1 bit/sample; CVSD as the standard instance",
                ],
              },
              {
                q: "Why must ADM clamp the step size between delta_min and delta_max?",
                marks: 7,
                outline: [
                  "delta_min: keep the step above the noise/idle floor",
                  "delta_max: prevent runaway growth that would overshoot and oscillate",
                  "Bounds also bound the maximum trackable slope",
                ],
              },
            ],
          },
          {
            number: "2.7",
            title: "Line coding: on-off, polar, RZ, bipolar AMI, Manchester and differential",
            body: [
              "Line codes map bit sequences to waveforms, trading bandwidth, clock content, DC balance and error detection. On-off (unipolar NRZ): 1 = pulse, 0 = nothing - simple, but has DC wander for long zero runs and no timing on them. Polar NRZ: +V/-V for 1/0 - balanced for random data, still clock-poor on runs. RZ (return-to-zero): each 1 returns to zero mid-bit - introduces a clock component but doubles bandwidth; unipolar RZ keeps DC, polar RZ (bipolar RZ) removes it.",
              "Bipolar AMI (alternate mark inversion): 1s alternate between +V and -V, 0s stay zero - zero net DC regardless of data, and a missing-polarity violation detects single errors; its weakness is clock loss on long zero runs (solved in practice by B8ZS zero substitution). Manchester (biphase): every bit carries a guaranteed mid-bit transition - 1 = high-to-low, 0 = low-to-low... precisely, 0 = low-to-high, 1 = high-to-low by one convention - giving perfect clocking and zero DC at the cost of doubled bandwidth (transition every half-bit). Differential encoding represents 1 as a transition, 0 as no transition (or vice versa) - making the code immune to polarity reversal in wiring.",
              "A worked bandwidth comparison at R = 1 Mbps: NRZ needs B ~ R/2 = 500 kHz (main lobe); RZ needs ~R = 1 MHz; Manchester needs ~2R = 2 MHz - the factor-of-four span from most to least bandwidth-efficient, with clock content improving in the same order (NRZ worst, Manchester perfect). Error detection: AMI's bipolar violation flags a single bit error with zero overhead; Manchester's guaranteed transitions also detect loss of signal instantly.",
              "In the exam, present the codes as waveforms plus a properties table (bandwidth, DC, clock, error detection), then work the 1 Mbps bandwidth ladder. The AMI violation-detection mechanism and B8ZS's role in fixing AMI's zero-run problem are the two connoisseur details.",
            ],
            keyTerms: [
              { term: "NRZ (on-off, polar)", definition: "Full-width levels; minimal bandwidth; poor clocking on runs." },
              { term: "RZ", definition: "Pulse returns to zero mid-bit; clock component; ~2x NRZ bandwidth." },
              { term: "AMI", definition: "Bipolar alternate-mark inversion; zero DC; violations flag errors; zero runs hurt clocking." },
              { term: "Manchester", definition: "Mid-bit transition every bit; perfect clocking, zero DC; 2x bandwidth." },
              { term: "Differential encoding", definition: "Transitions encode 1s - immune to polarity reversal." },
            ],
            diagram: {
              kind: "pyramid",
              title: "Line codes by bandwidth cost",
              caption: "Bandwidth buys clocking and DC balance - the ladder from cheapest to richest.",
              tiers: [
                { label: "NRZ family", note: "~R/2 bandwidth; clocking weak on runs; DC issues (on-off)" },
                { label: "RZ / AMI", note: "~R bandwidth; AMI gives zero DC + violation detection" },
                { label: "Manchester", note: "~2R bandwidth; perfect clocking, zero DC" },
                { label: "Differential overlay", note: "any base code + transition encoding; polarity-proof" },
              ],
            },
            bullets: [
              "On-off NRZ: simplest, DC-wandering, no clock on zero runs.",
              "Polar NRZ: balanced levels; still clock-poor; ~R/2 bandwidth.",
              "RZ: clock content present; ~R bandwidth; unipolar version keeps DC.",
              "AMI: 1s alternate +/-, zero DC, violation = error flag; B8ZS fixes zero runs.",
              "Manchester: guaranteed mid-bit transition; perfect clock; ~2R bandwidth.",
              "Differential: encode transitions; immune to accidental polarity swap.",
              "Worked ladder at 1 Mbps: 500 kHz (NRZ) -> 1 MHz (RZ) -> 2 MHz (Manchester).",
            ],
            callout: {
              type: "exam",
              title: "AMI's free error check",
              body: "The highest-yield line: AMI detects single errors with zero overhead - two successive same-polarity marks violate the alternation rule. Add that B8ZS substitutes coded violations for eight-zero runs to keep clock recovery alive, and the AMI answer is complete.",
            },
            table: {
              caption: "Line-code scorecard.",
              headers: ["Code", "Bandwidth", "DC component", "Clock content", "Error detection"],
              rows: [
                ["On-off NRZ", "R/2", "yes (wanders)", "poor", "none"],
                ["Polar NRZ", "R/2", "balanced-ish", "poor", "none"],
                ["Unipolar RZ", "R", "yes", "good", "none"],
                ["Bipolar RZ", "R", "zero", "good", "some"],
                ["AMI", "R/2", "zero", "poor on zero runs", "violation flag"],
                ["Manchester", "2R", "zero", "perfect", "transition loss"],
                ["Differential NRZ", "R/2", "depends on base", "poor", "polarity-immune"],
              ],
            },
            examQuestions: [
              {
                q: "Explain on-off, polar, RZ, AMI, Manchester and differential line codes with waveforms. Compare their bandwidth, DC, clocking and error-detection properties, and compute the bandwidth ladder at 1 Mbps.",
                marks: 14,
                outline: [
                  "Waveforms for each code",
                  "NRZ family: R/2 bandwidth, weak clocking, DC issues",
                  "RZ: clock present, ~R bandwidth",
                  "AMI: zero DC, violation detection, zero-run clock problem (B8ZS)",
                  "Manchester: mid-bit transition always, perfect clock, 2R bandwidth",
                  "Differential: transition-encoding, polarity-immune",
                  "Worked: 500 kHz -> 1 MHz -> 2 MHz at 1 Mbps",
                ],
              },
              {
                q: "Why does AMI lose clock synchronization during long runs of zeros, and how does B8ZS fix it?",
                marks: 7,
                outline: [
                  "AMI clock comes from mark polarity alternations",
                  "Zero runs carry no transitions - receiver clock drifts",
                  "B8ZS substitutes 000VB0VB violation pattern for 8 zeros",
                  "Receiver recognizes and removes the substitution",
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
      title: "Band-Pass Data Transmission",
      summary:
        "Unit III moves digital data onto carriers: ASK, BPSK and DPSK, QPSK with its spectrum, coherent and non-coherent BFSK plus M-ary FSK, minimum shift keying, and QAM with the M-ary PSK constellation family - ending with the spectral properties that decide which scheme fits which channel.",
      chapter: {
        number: "03",
        title: "Carrying Bits on Carriers",
        intro:
          "Unit III covers ASK, BPSK, DPSK, QPSK, coherent and non-coherent BFSK, MSK, QAM, M-ary PSK/FSK, and the spectral properties of QPSK and MSK.",
        inOneBreath:
          "Band-pass modulation shifts bits onto a carrier: ASK flips amplitude, BPSK phase (antipodal, best error performance), QPSK packs two bits per symbol at the same BER as BPSK, DPSK dodges carrier recovery, BFSK splits frequencies, MSK keeps phase continuous for a compact spectrum, QAM mixes amplitude and phase for the highest bits-per-Hz. Constellation distance decides error probability; symbol rate Rs = Rb/k decides bandwidth.",
        sections: [
          {
            number: "3.1",
            title: "Amplitude shift keying (ASK/OOK)",
            body: [
              "Amplitude shift keying represents bits by switching a carrier's amplitude between two levels; on-off keying (OOK) is the binary special case - carrier on for 1, off for 0. s(t) = A cos(2 pi fc t) for 1 and 0 for 0, over each bit period T. It is the oldest and simplest band-pass scheme - an envelope detector suffices for non-coherent detection - and it survives wherever simplicity beats efficiency: optical fibre (light on/off), IR remotes, RFID backscatter.",
              "Detection comes in two grades. Coherent: multiply by a recovered carrier, integrate over T, threshold at A/2 - the error probability is Pe = Q(sqrt(Eb/N0)) with a 3 dB penalty relative to BPSK because the two signals are not antipodal (their correlation is +Eb/2 instead of -Eb). Non-coherent (envelope detector): Pe ~ 0.5 exp(-Eb/2N0) - another 3 dB worse than coherent ASK, but requiring no carrier recovery at all, which is why cheap receivers use it.",
              "A worked comparison at Eb/N0 = 10 dB (ratio 10): coherent OOK Pe = Q(sqrt(10)) = Q(3.16) ~ 7.8 x 10^-4; BPSK at the same Eb/N0 gives Q(sqrt(20)) = Q(4.47) ~ 3.9 x 10^-6 - two orders better for the same energy, the price of OOK's non-antipodal signalling. Spectrally, OOK's main lobe spans fc +/- Rb (2Rb wide), with sidelobes from the rectangular pulse shape, reducible by pulse shaping (raised cosine) to ~1.5Rb.",
              "In the exam: give the OOK waveform and constellation (0 and A points, not antipodal), both Pe formulas, the worked Q-function comparison at 10 dB, and the bandwidth statement. The 'non-antipodal = 3 dB worse' argument generalizes to every binary scheme comparison that follows.",
            ],
            keyTerms: [
              { term: "ASK/OOK", definition: "Bits switch carrier amplitude; on-off keying = carrier present/absent." },
              { term: "Non-antipodal", definition: "Signal pair with positive correlation - 3 dB Pe penalty vs antipodal." },
              { term: "Envelope detection", definition: "Non-coherent detection via rectifier + LPF; Pe ~ 0.5 exp(-Eb/2N0)." },
              { term: "Threshold A/2", definition: "Coherent OOK decision level, midway between the two signal amplitudes." },
            ],
            diagram: {
              kind: "compare",
              title: "OOK vs BPSK at the same Eb/N0",
              caption: "Antipodal spacing doubles the decision distance - two orders of error probability.",
              left: {
                heading: "OOK (coherent)",
                items: [
                  "Constellation: 0 and A - distance A",
                  "Pe = Q(sqrt(Eb/N0))",
                  "10 dB: Q(3.16) ~ 7.8e-4",
                  "Envelope detection possible",
                ],
              },
              right: {
                heading: "BPSK",
                items: [
                  "Constellation: +A and -A - distance 2A",
                  "Pe = Q(sqrt(2 Eb/N0))",
                  "10 dB: Q(4.47) ~ 3.9e-6",
                  "Needs coherent carrier recovery",
                ],
              },
            },
            bullets: [
              "OOK: carrier on/off per bit; s(t) = A cos(wc t) or 0.",
              "Coherent Pe = Q(sqrt(Eb/N0)) - 3 dB worse than BPSK (non-antipodal).",
              "Non-coherent Pe ~ 0.5 exp(-Eb/2N0) - another 3 dB, no carrier recovery needed.",
              "Worked at 10 dB: OOK 7.8e-4 vs BPSK 3.9e-6.",
              "Main-lobe bandwidth 2Rb; pulse shaping trims it toward 1.5Rb.",
              "Home ground: optical links, IR, RFID - where simplicity dominates.",
            ],
            callout: {
              type: "exam",
              title: "The 3 dB geometry",
              body: "Every binary Pe comparison is geometry: antipodal signals double the constellation distance, giving sqrt(2) more argument to Q - exactly 3 dB. Say '3 dB geometry' once and each scheme's formula becomes a corollary.",
            },
            table: {
              caption: "Binary schemes at Eb/N0 = 10 dB.",
              headers: ["Scheme", "Pe formula", "Pe at 10 dB"],
              rows: [
                ["Coherent OOK", "Q(sqrt(Eb/N0))", "7.8e-4"],
                ["Non-coherent OOK", "~0.5 exp(-Eb/2N0)", "2.3e-2"],
                ["Coherent BPSK", "Q(sqrt(2Eb/N0))", "3.9e-6"],
                ["DPSK", "0.5 exp(-Eb/N0)", "2.3e-5"],
                ["Coherent BFSK", "Q(sqrt(Eb/N0))", "7.8e-4"],
                ["Non-coherent BFSK", "0.5 exp(-Eb/2N0)", "2.3e-2"],
              ],
            },
            examQuestions: [
              {
                q: "Explain on-off keying with its waveform and constellation. Derive its coherent error probability, compare it with BPSK at Eb/N0 = 10 dB, and state the non-coherent detection result.",
                marks: 14,
                outline: [
                  "OOK: carrier on/off; constellation 0/A, non-antipodal",
                  "Coherent detection: multiplier, integrator, threshold A/2",
                  "Pe = Q(sqrt(Eb/N0))",
                  "BPSK antipodal: Q(sqrt(2Eb/N0)) - 3 dB geometry",
                  "Worked: 10 dB -> 7.8e-4 vs 3.9e-6",
                  "Non-coherent envelope: ~0.5 exp(-Eb/2N0)",
                  "Bandwidth 2Rb main lobe; applications in optics/IR/RFID",
                ],
              },
              {
                q: "Why is OOK preferred for optical fibre despite its 3 dB penalty?",
                marks: 7,
                outline: [
                  "Light cannot have negative intensity - antipodal signalling unavailable",
                  "Direct detection is simple and cheap (photodiode + threshold)",
                  "Fibre SNRs are high, so the 3 dB is affordable",
                ],
              },
            ],
          },
          {
            number: "3.2",
            title: "BPSK and DPSK",
            body: [
              "Binary phase shift keying encodes bits as carrier phase: bit 1 -> cos(2 pi fc t), bit 0 -> cos(2 pi fc t + pi) - two antipodal signals 180 degrees apart, the best binary geometry available. With coherent detection (multiplier, integrator over T, threshold at 0), Pe = Q(sqrt(2 Eb/N0)) - the binary benchmark every other scheme is measured against. The constellation is two points at +/-(sqrt(Eb), 0); distance 2 sqrt(Eb) maximizes the decision margin for given energy.",
              "DPSK removes the carrier-recovery burden by encoding differences: bit 1 = phase change from the previous symbol, bit 0 = no change. The receiver delays the received signal by one symbol and multiplies it by itself - the delayed-signal correlator - so the previous symbol serves as the phase reference. Pe = 0.5 exp(-Eb/N0), about 1 dB worse than coherent BPSK at practical error rates (at Eb/N0 = 10 dB: DPSK 2.3e-5 vs BPSK 3.9e-6), the modest premium for eliminating the carrier-recovery circuit.",
              "A worked pair: at Eb/N0 = 8 dB (ratio 6.31), BPSK Pe = Q(sqrt(12.6)) = Q(3.55) ~ 1.9e-4; DPSK = 0.5 exp(-6.31) = 9.1e-4 - DPSK 4.8x worse but hardware-simpler. Differential encoding also protects against phase ambiguity: a PLL-locked carrier recovered with 180-degree ambiguity would invert all BPSK bits; DPSK is immune because only differences carry information.",
              "In the exam: draw the BPSK constellation and modulator, derive Pe = Q(sqrt(2Eb/N0)) via the antipodal geometry, present DPSK's differential encoding and delayed-correlator receiver with Pe = 0.5 exp(-Eb/N0), and work one numeric comparison. The phase-ambiguity immunity argument is the reason DPSK exists - state it.",
            ],
            keyTerms: [
              { term: "BPSK", definition: "Two antipodal carrier phases; Pe = Q(sqrt(2Eb/N0)) - the binary benchmark." },
              { term: "DPSK", definition: "Differential BPSK: phase changes encode 1s; delayed-signal self-detection." },
              { term: "Carrier recovery", definition: "PLL-based reconstruction of the coherent reference; subject to phase ambiguity." },
              { term: "Delayed correlator", definition: "DPSK receiver: multiply the signal by its one-symbol delayed copy." },
            ],
            diagram: {
              kind: "fork",
              title: "BPSK or DPSK?",
              caption: "One decibel of error performance versus the entire carrier-recovery subsystem.",
              start: "Binary phase choice",
              branches: [
                { label: "Coherent BPSK", outcome: "Pe = Q(sqrt(2Eb/N0)); needs PLL + phase-ambiguity resolution", good: true },
                { label: "DPSK", outcome: "Pe = 0.5 exp(-Eb/N0); ~1 dB worse; no carrier recovery; ambiguity-immune", good: true },
                { label: "Very low Eb/N0 budget", outcome: "consider coding or stronger schemes before either", good: false },
              ],
            },
            bullets: [
              "BPSK: 180-degree phase per bit; antipodal - best binary geometry.",
              "Coherent Pe = Q(sqrt(2Eb/N0)); 10 dB -> 3.9e-6.",
              "DPSK: 1 = phase reversal, 0 = no change; previous symbol is the reference.",
              "DPSK receiver: one-symbol delay + multiplier + integrator.",
              "DPSK Pe = 0.5 exp(-Eb/N0); 10 dB -> 2.3e-5 (~1 dB worse than BPSK).",
              "DPSK immunity to 180-degree carrier ambiguity is its raison d'etre.",
            ],
            callout: {
              type: "warning",
              title: "The 180-degree ambiguity trap",
              body: "A recovered BPSK carrier locked in the wrong phase inverts every bit silently. Coherent receivers need differential coding or known preamble to resolve it; DPSK avoids the trap by construction. Mentioning this failure mode elevates the standard comparison answer.",
            },
            table: {
              caption: "BPSK vs DPSK worked numbers.",
              headers: ["Eb/N0", "BPSK Pe", "DPSK Pe", "Ratio"],
              rows: [
                ["8 dB", "1.9e-4", "9.1e-4", "4.8x"],
                ["10 dB", "3.9e-6", "2.3e-5", "5.9x"],
                ["12 dB", "3.9e-8", "1.5e-6", "38x"],
              ],
            },
            examQuestions: [
              {
                q: "Explain BPSK modulation and coherent detection with the constellation, derive Pe = Q(sqrt(2Eb/N0)), then explain DPSK encoding and its delayed-correlator receiver with error probability and a numeric comparison at 10 dB.",
                marks: 14,
                outline: [
                  "BPSK: two antipodal phases; constellation +/-(sqrt(Eb), 0)",
                  "Coherent receiver: multiplier, integrator, zero threshold",
                  "Antipodal geometry -> Pe = Q(sqrt(2Eb/N0))",
                  "DPSK: differential encoding; previous symbol as reference",
                  "Delayed-signal correlator; Pe = 0.5 exp(-Eb/N0)",
                  "Worked: 10 dB -> 3.9e-6 vs 2.3e-5 (~1 dB premium)",
                  "DPSK avoids carrier recovery and 180-degree ambiguity",
                ],
              },
              {
                q: "How does differential encoding protect a PSK link against carrier-recovery phase ambiguity?",
                marks: 7,
                outline: [
                  "Ambiguity multiplies the recovered carrier phase by pi",
                  "Absolute-phase code: all bits inverted - catastrophic",
                  "Differential code: only the reference bit affected; differences preserved",
                ],
              },
            ],
          },
          {
            number: "3.3",
            title: "QPSK and its spectral properties",
            body: [
              "Quadrature phase shift keying puts two bits per symbol into four carrier phases separated by 90 degrees: the even bit stream modulates cos(wc t) (the I arm), the odd bit stream modulates sin(wc t) shifted (the Q arm), and the sum lands on one of four constellation points (+/-1, +/-1)/sqrt(2). Each symbol carries 2 bits, so the symbol rate is half the bit rate - Rs = Rb/2 - and the bandwidth halves relative to BPSK at the same Rb.",
              "The remarkable fact: QPSK's bit error probability equals BPSK's, Pe = Q(sqrt(2 Eb/N0)), because the two arms are independent BPSK signals in orthogonal carriers, and each bit's energy budget Eb is unchanged. Phase transitions between adjacent constellation points can pass through the origin (both arms flip) - the cause of QPSK's envelope dips; OQPSK (offset) staggers the two bit streams by one bit period so only one arm changes at a time, forbidding origin crossings and easing amplifier linearity demands.",
              "The spectral statement examiners want: for the same information rate, QPSK's main lobe spans fc +/- Rs/2 = fc +/- Rb/4 - half of BPSK's fc +/- Rb/2. With raised-cosine shaping, QPSK delivers the same Rb in (1 + beta) Rb/4 Hz versus BPSK's (1 + beta) Rb/2 Hz - a factor-2 bandwidth saving at zero error-performance cost, which is why QPSK is the default satellite and cellular workhorse. Worked numbers: Rb = 2 Mbps, beta = 0.5 gives BPSK 1.5 MHz vs QPSK 750 kHz.",
              "In the exam: draw the four-point constellation and the I/Q modulator, prove Pe = Q(sqrt(2Eb/N0)) via the orthogonal-arms argument, and derive the half-bandwidth result with the worked 2 Mbps case. The origin-crossing transition issue and OQPSK's fix complete the picture.",
            ],
            keyTerms: [
              { term: "QPSK", definition: "Four-phase modulation, 2 bits per symbol; same BER as BPSK, half the bandwidth." },
              { term: "I/Q arms", definition: "Even/odd bit streams on orthogonal cos/sin carriers - two BPSKs summed." },
              { term: "OQPSK", definition: "Offset QPSK: streams staggered one bit; no origin-crossing transitions." },
              { term: "Symbol rate Rs", definition: "Rs = Rb/k for k bits per symbol; bandwidth scales with Rs." },
            ],
            diagram: {
              kind: "matrix",
              title: "QPSK constellation and bit mapping",
              caption: "Four points on the axes-diagonals; each adjacent move flips exactly one bit (Gray coding).",
              axes: { x: "In-phase (I) bit", y: "Quadrature (Q) bit" },
              quadrants: [
                { label: "Q=1, I=0 -> 45 deg", note: "point (+1,+1)/sqrt(2)" },
                { label: "Q=1, I=1 -> 135 deg", note: "point (-1,+1)/sqrt(2)" },
                { label: "Q=0, I=0 -> -45 deg", note: "point (+1,-1)/sqrt(2)" },
                { label: "Q=0, I=1 -> -135 deg", note: "point (-1,-1)/sqrt(2)" },
              ],
            },
            bullets: [
              "QPSK: 4 phases, 2 bits/symbol; Rs = Rb/2.",
              "Two orthogonal BPSK arms (I on cos, Q on sin) summed.",
              "Pe = Q(sqrt(2Eb/N0)) - identical to BPSK, per orthogonal-arm independence.",
              "Bandwidth for same Rb: half of BPSK; shaped: (1 + beta)Rb/4 vs (1 + beta)Rb/2.",
              "Worked: 2 Mbps, beta = 0.5 -> 750 kHz (QPSK) vs 1.5 MHz (BPSK).",
              "Adjacent-constellation transitions via origin cause envelope dips; OQPSK staggers arms to prevent it.",
              "Gray coding (one bit per adjacent move) minimizes decoded errors per symbol error.",
            ],
            callout: {
              type: "exam",
              title: "Two for the price of one",
              body: "The sentence that captures QPSK's magic: 'twice the bits per symbol at the same bit error probability as BPSK - because the arms are orthogonal BPSKs.' Write it, then prove it with the per-arm Eb argument; the bandwidth halving follows from Rs = Rb/2.",
            },
            table: {
              caption: "BPSK vs QPSK at Rb = 2 Mbps, beta = 0.5.",
              headers: ["Property", "BPSK", "QPSK"],
              rows: [
                ["Bits per symbol", "1", "2"],
                ["Symbol rate", "2 Mbaud", "1 Mbaud"],
                ["Shaped bandwidth", "1.5 MHz", "0.75 MHz"],
                ["Pe at 10 dB Eb/N0", "3.9e-6", "3.9e-6"],
                ["Envelope dips", "none", "yes (origin crossings); OQPSK fixes"],
              ],
            },
            examQuestions: [
              {
                q: "Explain QPSK modulation with its constellation and I/Q structure. Show that its bit error probability equals BPSK's, and derive the bandwidth saving for the same bit rate with a worked 2 Mbps example.",
                marks: 14,
                outline: [
                  "Four phases, 2 bits/symbol; Rs = Rb/2",
                  "I and Q arms = two orthogonal BPSKs summed",
                  "Per-arm Pe = Q(sqrt(2Eb/N0)); bit streams independent -> same BER",
                  "Main lobe fc +/- Rs/2 = fc +/- Rb/4 (vs BPSK Rb/2)",
                  "Shaped: (1 + beta)Rb/4 vs (1 + beta)Rb/2",
                  "Worked: 2 Mbps, beta = 0.5 -> 750 kHz vs 1.5 MHz",
                  "Origin-crossing transitions; OQPSK one-bit stagger; Gray coding",
                ],
              },
              {
                q: "Why do QPSK envelope dips matter for satellite transponders, and how does OQPSK help?",
                marks: 7,
                outline: [
                  "Origin crossings = amplitude nulls -> high envelope dynamic range",
                  "Nonlinear PAs (TWTA) distort large-dynamic-range envelopes (spectral regrowth)",
                  "OQPSK staggers arms by T/2: only one arm flips - no origin crossing",
                ],
              },
            ],
          },
          {
            number: "3.4",
            title: "BFSK (coherent and non-coherent) and M-ary FSK",
            body: [
              "Frequency shift keying encodes bits as carrier frequencies: bit 1 at f1, bit 0 at f2. Coherent BFSK with orthogonal tones (separation = multiple of 1/2T) gives Pe = Q(sqrt(Eb/N0)) - 3 dB worse than BPSK because orthogonal signals share no energy, versus antipodal signals' perfect opposition. Minimum orthogonal spacing: delta f = n/(2T) for integer n; the practical minimum shift keying choice (delta f = 1/(2T)) belongs to the next section.",
              "Non-coherent BFSK abandons phase knowledge: two bandpass filters/envelope detectors compare which tone is present, with Pe = 0.5 exp(-Eb/2N0) - another 3 dB down, but needing no carrier or phase recovery, only two frequency-selective detectors. FSK's practical virtue survives: frequency modulation is insensitive to amplitude fading and nonlinear amplifiers, and the constant envelope suits saturating power stages.",
              "M-ary FSK spreads M symbols across M orthogonal frequencies. For fixed total power and symbol energy Es = Eb log2 M, orthogonal M-FSK's error probability improves with M (the energy splits across more degrees of freedom, and the union bound shrinks) while bandwidth grows linearly in M: B ~ M/(2T) = (M log2 M) Rb/2 for orthogonal spacing. The trade: M-FSK buys error performance with bandwidth - the opposite corner of the trade space from QAM - hence its niche in fading channels and FH spreads.",
              "In the exam: define BFSK with the orthogonal-spacing condition, give both Pe formulas, contrast with BPSK (the 3 dB geometry), and present M-ary FSK's bandwidth-for-error trade. The worked comparison at 10 dB (coherent BFSK 7.8e-4 vs BPSK 3.9e-6) anchors the numbers.",
            ],
            keyTerms: [
              { term: "BFSK", definition: "Two carrier frequencies per bit; orthogonal tones at separation n/2T." },
              { term: "Orthogonal signals", definition: "Zero correlation over T - 3 dB Pe penalty vs antipodal." },
              { term: "Coherent BFSK Pe", definition: "Q(sqrt(Eb/N0)) with phase-locked detection." },
              { term: "M-ary FSK", definition: "M orthogonal tones; improves Pe with M, bandwidth grows ~M log2 M." },
            ],
            diagram: {
              kind: "compare",
              title: "FSK corners of the trade space",
              caption: "FSK trades bandwidth for robustness - the mirror image of QAM.",
              left: {
                heading: "Binary FSK",
                items: [
                  "Coherent: Pe = Q(sqrt(Eb/N0)) - 3 dB vs BPSK",
                  "Non-coherent: 0.5 exp(-Eb/2N0)",
                  "Constant envelope - nonlinear-PA friendly",
                  "Needs delta f >= 1/2T (orthogonal)",
                ],
              },
              right: {
                heading: "M-ary FSK",
                items: [
                  "M orthogonal tones, log2 M bits/symbol",
                  "Pe improves as M grows (union bound shrinks)",
                  "Bandwidth ~ (M log2 M) Rb/2 - grows fast",
                  "Fading/FH niche; bandwidth-inefficient",
                ],
              },
            },
            bullets: [
              "BFSK: bit 1 -> f1, bit 0 -> f2; orthogonal spacing delta f = n/2T.",
              "Coherent Pe = Q(sqrt(Eb/N0)); non-coherent Pe = 0.5 exp(-Eb/2N0).",
              "Both 3 dB tiers worse than BPSK (antipodal vs orthogonal vs envelope).",
              "Worked at 10 dB: coherent BFSK 7.8e-4; non-coherent 2.3e-2; BPSK 3.9e-6.",
              "M-FSK: Pe falls with M at fixed Eb/N0; bandwidth ~ M log2 M x Rb/2.",
              "Constant envelope survives nonlinear amplification and amplitude fading.",
            ],
            callout: {
              type: "tip",
              title: "Correlation is the ordering",
              body: "Order all binary schemes by signal correlation: antipodal (rho = -1, BPSK best), orthogonal (rho = 0, FSK, 3 dB worse), non-coherent envelope (worst). One table, three dB tiers - the entire binary comparison in one insight.",
            },
            table: {
              caption: "Binary schemes ranked at Eb/N0 = 10 dB.",
              headers: ["Scheme", "Signal correlation", "Pe"],
              rows: [
                ["Coherent BPSK", "antipodal (rho = -1)", "3.9e-6"],
                ["DPSK", "differential antipodal", "2.3e-5"],
                ["Coherent OOK/BFSK", "orthogonal-ish (rho = 0)", "7.8e-4"],
                ["Non-coherent FSK/OOK", "envelope only", "2.3e-2"],
              ],
            },
            examQuestions: [
              {
                q: "Explain coherent and non-coherent BFSK detection with error probabilities and the orthogonal-tone spacing condition. Compare with BPSK and outline the M-ary FSK trade.",
                marks: 14,
                outline: [
                  "BFSK: f1/f2 per bit; orthogonal spacing n/2T",
                  "Coherent Pe = Q(sqrt(Eb/N0)); non-coherent 0.5 exp(-Eb/2N0)",
                  "3 dB geometry vs antipodal BPSK",
                  "Worked 10 dB: 7.8e-4, 2.3e-2 vs BPSK 3.9e-6",
                  "Constant envelope suits nonlinear PAs and fading",
                  "M-FSK: Pe improves with M; bandwidth ~ M log2 M x Rb/2",
                  "Niche: fading channels, frequency hopping",
                ],
              },
              {
                q: "Why does M-ary FSK improve error probability as M grows, while M-ary PSK degrades?",
                marks: 7,
                outline: [
                  "M-FSK adds orthogonal dimensions - decision distances grow with M",
                  "M-PSK crowds M points on one circle - distances shrink with M",
                  "FSK spends bandwidth to buy error margin; PSK spends error margin to save bandwidth",
                ],
              },
            ],
          },
          {
            number: "3.5",
            title: "Minimum shift keying (MSK)",
            body: [
              "Minimum shift keying is continuous-phase FSK with the minimum tone spacing that still gives orthogonal detection over one bit period: delta f = 1/(2T), a modulation index h = delta f x T = 0.5. The phase advances +90 degrees for a 1 and -90 degrees for a 0 - a constant-envelope trajectory that never jumps, hence no spectral splatter from phase discontinuities. Equivalently, MSK is OQPSK shaped by half-sinusoid pulses: the same orthogonal-arm structure with sinusoidal weighting instead of rectangles.",
              "The spectral payoff is the reason MSK exists. Rectangular-keyed schemes (BPSK/QPSK with sharp bit transitions) have sinc^2 spectra with slow sidelobe roll-off (-20 dB/decade); MSK's phase continuity plus sinusoidal shaping gives a main lobe of 1.5 Rs and sidelobes rolling at -40 dB/decade - markedly more compact. Worked comparison at Rb: BPSK main lobe 2Rb wide vs MSK 1.5Rb, and at 3Rb offset MSK's sidelobes are already ~30 dB down where rectangular QPSK is barely 20 dB down - the difference that matters in adjacent-channel-limited bands.",
              "The phase trajectory makes the detection story concrete: phase(t) accumulates +/- pi/2 per bit, so over any two-bit interval the phase returns to a known state, enabling coherent detection with the recovered carrier plus a differential decoder; non-coherent differential MSK variants exist too. Gaussian-filtered MSK (GMSK) - MSK with a Gaussian premodulation filter - tightens the spectrum further (BT = 0.3 in GSM) at the cost of controlled ISI, the family's practical descendant.",
              "In the exam: state MSK's definition (h = 0.5 continuous-phase FSK), the +/- pi/2 phase-per-bit rule, the equivalence to sinusoidally-shaped OQPSK, and the spectral comparison with numbers. Constant envelope + compact spectrum is the one-line summary examiners scan for.",
            ],
            keyTerms: [
              { term: "MSK", definition: "CPFSK with h = 0.5: +/-90-degree phase per bit, continuous trajectory." },
              { term: "Modulation index h", definition: "h = delta f x T; MSK's 0.5 is the minimum for orthogonal coherent FSK." },
              { term: "Continuous phase", definition: "No phase jumps - sidelobe energy falls at -40 dB/decade." },
              { term: "GMSK", definition: "MSK with Gaussian prefilter (BT = 0.3 in GSM); tighter spectrum, controlled ISI." },
            ],
            diagram: {
              kind: "compare",
              title: "Rectangular QPSK vs MSK spectrum",
              caption: "Phase continuity narrows the main lobe and steepens the sidelobe fall.",
              left: {
                heading: "Rectangular QPSK/BPSK",
                items: [
                  "Main lobe 2Rb wide (BPSK)",
                  "Sidelobes fall at -20 dB/decade",
                  "Phase jumps at bit boundaries cause splatter",
                  "Envelope dips on origin crossings (QPSK)",
                ],
              },
              right: {
                heading: "MSK",
                items: [
                  "Main lobe 1.5Rb wide",
                  "Sidelobes fall at -40 dB/decade",
                  "Phase advances +/-90 degrees continuously - no jumps",
                  "Constant envelope - nonlinear-PA friendly",
                ],
              },
            },
            bullets: [
              "MSK = CPFSK with h = 0.5; tones separated by 1/2T (minimum orthogonal).",
              "Phase per bit: +pi/2 for 1, -pi/2 for 0 - continuous, no discontinuities.",
              "Equivalent to OQPSK with half-sinusoid pulse shaping.",
              "Spectrum: main lobe 1.5Rb; sidelobes -40 dB/decade vs rectangular -20.",
              "Worked: at 3Rb offset, MSK ~30 dB down; rectangular QPSK ~20 dB.",
              "GMSK (Gaussian prefilter, BT = 0.3) is GSM's air interface.",
              "Constant envelope + compact spectrum = the satellite/cellular sweet spot.",
            ],
            callout: {
              type: "exam",
              title: "Why h = 0.5 is 'minimum'",
              body: "The naming question hides a fact: two FSK tones are orthogonally detectable over T only if delta f >= 1/(2T) (for coherent detection with phase knowledge), so h = 0.5 is the smallest spacing that works - hence MINIMUM shift keying. Deriving that line earns the definition's marks.",
            },
            table: {
              caption: "Spectral comparison at Rb (main lobe and roll-off).",
              headers: ["Scheme", "Main lobe width", "Sidelobe roll-off", "Envelope"],
              rows: [
                ["BPSK (rect)", "2Rb", "-20 dB/decade", "constant"],
                ["QPSK (rect)", "Rb", "-20 dB/decade", "dips at origin"],
                ["MSK", "1.5Rb", "-40 dB/decade", "constant"],
                ["GMSK (BT=0.3)", "~0.86Rb", "steeper still", "constant (approx)"],
              ],
            },
            examQuestions: [
              {
                q: "Explain MSK: its definition as CPFSK with h = 0.5, the phase trajectory rule, the equivalence to shaped OQPSK, and its spectral advantages over rectangular QPSK with numbers.",
                marks: 14,
                outline: [
                  "CPFSK with delta f = 1/2T, h = 0.5 - minimum orthogonal spacing",
                  "Phase: +pi/2 for 1, -pi/2 for 0; continuous trajectory",
                  "Equivalent to OQPSK with half-sinusoid pulses",
                  "Main lobe 1.5Rb vs QPSK Rb (same Rb)",
                  "Sidelobes -40 vs -20 dB/decade",
                  "Worked: 3Rb offset ~30 dB down vs ~20 dB",
                  "Constant envelope; GMSK descendant in GSM (BT = 0.3)",
                ],
              },
              {
                q: "Derive why two FSK tones separated by 1/(2T) are orthogonal over a bit period.",
                marks: 7,
                outline: [
                  "Correlation integral of cos(2pi f1 t) cos(2pi f2 t) over T",
                  "Product splits into sum and difference frequencies",
                  "Difference term integrates to zero when (f1 - f2)T = n/2",
                  "Smallest nonzero n = 1 -> delta f = 1/2T -> h = 0.5",
                ],
              },
            ],
          },
          {
            number: "3.6",
            title: "QAM and M-ary PSK: constellations and efficiency",
            body: [
              "Quadrature amplitude modulation loads amplitude and phase into one symbol: the constellation arranges M points on a square grid (16-QAM: 4x4; 64-QAM: 8x8), each symbol carrying log2 M bits on both I and Q arms. M-ary PSK instead places all M points on one circle of constant amplitude - 8-PSK, 16-PSK - trading amplitude dynamics for phase-only signalling. At equal M and average energy, square QAM beats M-PSK: its points pack the circle's interior, increasing minimum distance; at M = 16, 16-QAM needs about 2.5 dB less Eb/N0 than 16-PSK for the same error rate.",
              "The efficiency ledger is the design tool. Bits per symbol k = log2 M; symbol rate Rs = Rb/k; bandwidth (raised cosine) B = (1 + beta) Rs/2 = (1 + beta) Rb/(2k). Spectral efficiency eta = Rb/B = 2k/(1 + beta) bits/s/Hz: 4-QAM (= QPSK) 1.33, 16-QAM 2.67, 64-QAM 4.0, 256-QAM 5.33 at beta = 0.5. The price: higher-order constellations need more Eb/N0 - each doubling of M costs roughly 3 dB (distance shrinks as points crowd). Worked: 64-QAM needs ~8-10 dB more than QPSK at the same error rate.",
              "Choosing M is a channel-adaptation decision: clean channels (fibre, cable, microwave LOS, modern cellular) take 64/256-QAM; noisy or fading channels fall back to QPSK/BPSK. Adaptive modulation - switching M with measured SNR - is how modern systems harvest the trade continuously. The formula pair (eta = 2k/(1 + beta); Pe scaling ~ 3 dB per bit added) is the compact answer to 'compare QAM orders'.",
              "In the exam: draw 16-QAM and 16-PSK constellations, derive eta = 2k/(1 + beta) with the worked ladder, and quantify the QAM-vs-PSK distance advantage and the 3-dB-per-bit price. Gray mapping and the rectangular-vs-circular packing argument earn the geometry marks.",
            ],
            keyTerms: [
              { term: "QAM", definition: "Square-grid constellation using both amplitude and phase; k = log2 M bits/symbol." },
              { term: "M-ary PSK", definition: "M constant-amplitude phases on one circle; less sensitive to amplitude nonlinearity." },
              { term: "Spectral efficiency", definition: "eta = 2 log2 M/(1 + beta) bits/s/Hz for shaped M-QAM." },
              { term: "3 dB per bit", definition: "Approximate Eb/N0 cost of each constellation doubling (distance shrinks)." },
            ],
            diagram: {
              kind: "pyramid",
              title: "The constellation ladder",
              caption: "Climb for bits-per-Hz, pay in dB - each tier doubles M and adds ~3 dB.",
              tiers: [
                { label: "256-QAM", note: "8 bits/sym; eta 5.33 (beta=.5); ~+9 dB vs 16-QAM" },
                { label: "64-QAM", note: "6 bits/sym; eta 4.0; cable/DOCSIS, LTE high SNR" },
                { label: "16-QAM", note: "4 bits/sym; eta 2.67; ~2.5 dB better than 16-PSK" },
                { label: "QPSK/4-QAM", note: "2 bits/sym; eta 1.33; the robust baseline" },
              ],
            },
            bullets: [
              "QAM: square grid, both arms amplitude+phase; M-PSK: circle, phase only.",
              "k = log2 M bits/symbol; Rs = Rb/k; B = (1 + beta)Rb/2k.",
              "eta ladder (beta = 0.5): 1.33 (4-QAM) -> 2.67 (16) -> 4.0 (64) -> 5.33 (256).",
              "Each constellation doubling costs ~3 dB Eb/N0 (crowding shrinks distance).",
              "16-QAM vs 16-PSK: ~2.5 dB advantage from square packing.",
              "Adaptive modulation switches M with channel SNR in modern systems.",
            ],
            callout: {
              type: "exam",
              title: "Eta is two lines",
              body: "Whenever a QAM question asks for efficiency, write eta = Rb/B = 2 log2 M/(1 + beta) and substitute once. The formula plus one substitution (64-QAM, beta = 0.5 -> 4.0 bits/s/Hz) is a complete 7-mark core.",
            },
            table: {
              caption: "Efficiency and price of the QAM ladder (beta = 0.5).",
              headers: ["Constellation", "Bits/symbol", "eta (bits/s/Hz)", "Relative Eb/N0"],
              rows: [
                ["4-QAM (QPSK)", "2", "1.33", "0 dB (baseline)"],
                ["16-QAM", "4", "2.67", "~+4 dB"],
                ["64-QAM", "6", "4.0", "~+8 dB"],
                ["256-QAM", "8", "5.33", "~+12 dB"],
              ],
            },
            examQuestions: [
              {
                q: "Explain QAM and M-ary PSK constellations. Derive the spectral efficiency of shaped M-QAM, compute the ladder from 4- to 256-QAM at beta = 0.5, and quantify why square QAM beats M-PSK.",
                marks: 14,
                outline: [
                  "QAM: 4x4/8x8 grids; PSK: points on a circle",
                  "k = log2 M; Rs = Rb/k; B = (1 + beta)Rb/2k",
                  "eta = 2 log2 M/(1 + beta)",
                  "Ladder at beta = 0.5: 1.33, 2.67, 4.0, 5.33",
                  "Distance crowding -> ~3 dB per constellation doubling",
                  "16-QAM packing beats 16-PSK by ~2.5 dB",
                  "Adaptive modulation selects M by channel SNR",
                ],
              },
              {
                q: "A cable channel offers 30 dB SNR and 6 MHz. Estimate the achievable bit rate with 64-QAM shaped at beta = 0.5.",
                marks: 7,
                outline: [
                  "eta for 64-QAM = 2 x 6/(1.5) = 4.0 bits/s/Hz",
                  "Rb = 4.0 x 6 MHz = 24 Mbps",
                  "30 dB SNR supports 64-QAM (typical threshold ~22-25 dB)",
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
      title: "Optimum Reception and Error Probability",
      summary:
        "Unit IV is detection theory: the matched filter that maximizes output SNR, the correlator receiver that implements it, the Gram-Schmidt procedure that builds signal space, decision regions for computing error probability, the Pe derivations for BPSK, QPSK, QAM and coherent BFSK, and the grand comparison of modulation techniques.",
      chapter: {
        number: "04",
        title: "Deciding Bits Optimally",
        intro:
          "Unit IV covers the matched filter and correlator detector, Gram-Schmidt orthogonalization, signal-space representation and decision regions, error-probability computation for BPSK/QPSK/QAM/coherent BFSK, and the comparison of modulation schemes.",
        inOneBreath:
          "The matched filter h(t) = s(T - t) maximizes SNR at the sampling instant, giving SNR_max = 2E/N0; the correlator integral s(t) x reference implements it. Gram-Schmidt turns any M-signal set into N <= M orthonormal basis vectors, mapping signals to constellation points. Decision regions partition signal space; the Q-function of distance-to-threshold over noise gives Pe - antipodal Q(sqrt(2Eb/N0)), orthogonal Q(sqrt(Eb/N0)), M-ary per-symbol from nearest-neighbour distances.",
        sections: [
          {
            number: "4.1",
            title: "The matched filter",
            body: [
              "The matched filter answers the question: what linear filter maximizes the signal-to-noise ratio at the decision instant? For a known signal s(t) observed in additive white Gaussian noise of two-sided PSD N0/2, the answer is the time-reversed, delayed copy of the signal itself: h(t) = k s(T - t), with T the observation interval. The proof is a Cauchy-Schwarz argument: output SNR at t = T is |integral S(f) H(f) e^(j2 pi f T) df|^2 / (N0/2 integral |H(f)|^2 df), maximized when H(f) proportional to S*(f) e^(-j2 pi f T) - the frequency-domain statement of the same result.",
              "The maximum value is the famous SNR_max = 2E/N0 (two-sided convention) where E = integral s^2(t) dt is the signal energy - independent of the signal's shape! Only energy matters; a narrow spike and a smooth pulse of equal energy match equally well. This is why all Pe formulas in digital communication are functions of Eb/N0 alone - the matched filter theory is the reason the whole subject is normalized to Eb/N0.",
              "A worked instantiation: rectangular pulse s(t) = A over [0, T]. The matched filter is a integrator-and-dump: h(t) = A over [T, 0] reversed = integrate the input over the bit period and sample at T. Output signal component = A^2 T = E; noise variance = N0 E/2; SNR = 2E/N0 as promised. For E = Eb = A^2 T and N0 = 10^-10 W/Hz with A = 1 mV, T = 10 microseconds: Eb = 10^-11 J; at Eb/N0 = 10 dB, Eb = 10 x 10^-10 = 10^-9 J implies A^2 T scaling - the design loop between amplitude, rate and noise.",
              "In the exam: state the matched-filter problem, derive or state h(t) = s(T - t) via Cauchy-Schwarz, present SNR_max = 2E/N0 with the shape-independence insight, and instantiate it on a rectangle. The 'energy is destiny' line - shape independence - is the conceptual mark.",
            ],
            keyTerms: [
              { term: "Matched filter", definition: "h(t) = k s(T - t): maximizes output SNR at t = T for signal s in AWGN." },
              { term: "SNR_max = 2E/N0", definition: "Peak SNR depends only on signal energy, not shape." },
              { term: "Integrate-and-dump", definition: "Matched filter for rectangular pulses: integrate over T, sample, reset." },
              { term: "Cauchy-Schwarz proof", definition: "SNR maximized when H(f) ~ S*(f) e^(-j2pi f T)." },
            ],
            diagram: {
              kind: "flow",
              title: "Matched-filter reception",
              caption: "Reverse the signal, convolve, sample at T - the SNR-optimal linear receiver.",
              steps: [
                { label: "r(t) = s(t) + n(t)", note: "AWGN channel" },
                { label: "h(t) = s(T - t)", note: "matched filter" },
                { label: "Output at t = T", note: "signal peak aligned" },
                { label: "SNR_max = 2E/N0", note: "shape-independent" },
                { label: "Threshold decision", note: "map SNR to Pe via Q" },
              ],
            },
            bullets: [
              "Matched filter h(t) = k s(T - t) maximizes SNR at the decision instant.",
              "Frequency form: H(f) ~ S*(f) e^(-j2 pi f T).",
              "SNR_max = 2E/N0 - depends only on energy E, not waveform shape.",
              "Rectangular pulse -> integrate-and-dump implementation.",
              "All digital Pe formulas are Q-functions of Eb/N0 because of this result.",
              "Correlator receivers (next section) implement the same operation actively.",
            ],
            callout: {
              type: "exam",
              title: "Shape independence is the insight",
              body: "The one-line depth test: matched-filter SNR depends only on energy - two waveforms of equal energy give identical Pe. Quoting that (and its consequence, Eb/N0 normalization of every scheme) distinguishes understanding from formula recall.",
            },
            codeExample: {
              language: "python",
              caption: "matched_filter.py - SNR at the sampling instant",
              code: `import numpy as np

T, fs = 10e-6, 10e6
t = np.arange(0, T, 1/fs)
A = 1e-3
s = A * np.ones_like(t)          # rectangular pulse
E = np.sum(s**2) / fs            # energy ~ A^2*T = 1e-11 J

N0 = 1e-10                       # W/Hz (two-sided 5e-11 x2)
snr_max = 2*E/N0
print("SNR_max (dB):", 10*np.log10(snr_max))   # e.g. ~ -7 dB here

h = s[::-1]                      # matched filter = reversed pulse
print("h is time-reversed s: h(t) = s(T-t)")`,
            },
            examQuestions: [
              {
                q: "Derive the matched filter for a known signal in AWGN and show that its maximum output SNR is 2E/N0, independent of waveform shape. Instantiate the result for a rectangular pulse.",
                marks: 14,
                outline: [
                  "Objective: max SNR at t = T",
                  "Output signal = convolution peak; noise variance = N0/2 x ||h||^2",
                  "Cauchy-Schwarz -> H(f) ~ S*(f)e^(-j2pi f T) -> h(t) = k s(T-t)",
                  "SNR_max = 2E/N0 with E = integral s^2 dt",
                  "Shape independence: energy is the only variable",
                  "Rectangular pulse: integrate-and-dump; signal A^2 T, noise N0 A^2 T/2",
                  "Consequence: all Pe formulas normalized to Eb/N0",
                ],
              },
              {
                q: "Why does the matched filter differ from a simple narrowband filter centered on the carrier?",
                marks: 7,
                outline: [
                  "Narrowband filter maximizes in-band SNR continuously - not decision-instant SNR",
                  "Matched filter aligns the entire signal energy at one instant",
                  "Its bandwidth matches the signal's spectrum, not a nominal carrier window",
                ],
              },
            ],
          },
          {
            number: "4.2",
            title: "The correlator receiver",
            body: [
              "The correlator implements matched filtering without building a filter: multiply the received signal by a stored replica of each candidate waveform and integrate over the symbol period - the decision variable is r = integral r(t) si(t) dt. The correlation operation is mathematically identical to matched filtering (convolution with the reversed signal evaluated at T), but it needs only a multiplier, an integrator, and a reset - the architecture every digital receiver actually builds.",
              "For binary antipodal signalling the receiver is one correlator: r = integral r(t) s1(t) dt, threshold at 0 (decide s1 if r > 0). For orthogonal binary (BFSK) it is two correlators against each other, choosing the larger output. For M-ary schemes it is M correlators (or N basis correlators after Gram-Schmidt), each producing one coordinate of the received point in signal space; the decision block then finds the nearest constellation point.",
              "A worked binary trace: antipodal s1(t) = +A, s2(t) = -A on [0, T]. Correlator output for true s1: signal component = A^2 T = Eb; noise component ~ N(0, N0 Eb/2); so r ~ N(+Eb, N0 Eb/2) under s1 and N(-Eb, N0 Eb/2) under s2. Error when r < 0 given s1: Pe = Q(Eb/sqrt(N0 Eb/2)) = Q(sqrt(2 Eb/N0)) - the BPSK formula derived in four lines, the model derivation Unit 4.5 expands.",
              "In the exam: state the correlation integral and its equivalence to the matched filter, draw the one-correlator antipodal receiver and the two-correlator FSK receiver, and derive the antipodal Pe from the noise statistics of the decision variable. The 'same math, cheaper hardware' line introduces the architecture.",
            ],
            keyTerms: [
              { term: "Correlator", definition: "Multiplies r(t) by a stored signal replica and integrates over T - the matched filter in architecture form." },
              { term: "Decision variable", definition: "r = integral r(t) si(t) dt; Gaussian with signal mean + noise variance." },
              { term: "Bank of correlators", definition: "M (or N basis) correlators feeding the nearest-point decision." },
              { term: "Threshold at zero", definition: "Antipodal binary decision boundary; midway between symmetric outputs." },
            ],
            diagram: {
              kind: "pipeline",
              title: "A correlator receiver",
              caption: "Multiply by each candidate, integrate, reset - one coordinate per correlator, then decide.",
              stages: [
                { label: "r(t) in", note: "signal + AWGN" },
                { label: "Multipliers", note: "si(t) replicas (or basis phi_n)" },
                { label: "Integrators over T", note: "decision variables ri" },
                { label: "Reset each T", note: "symbol boundaries" },
                { label: "Decision logic", note: "max / nearest point" },
              ],
            },
            bullets: [
              "Correlator output r = integral r(t) si(t) dt over one symbol.",
              "Equivalent to matched filter evaluated at t = T - same math, simple hardware.",
              "Antipodal binary: one correlator, threshold 0.",
              "Orthogonal binary (FSK): two correlators, pick the larger.",
              "M-ary: M correlators or N Gram-Schmidt basis correlators.",
              "Decision variable noise: variance N0 Eb/2 (antipodal) -> Pe = Q(sqrt(2Eb/N0)).",
            ],
            callout: {
              type: "exam",
              title: "From correlator to Pe in four lines",
              body: "The derivation chain examiners reward: r ~ N(+/-Eb, N0 Eb/2); error = tail beyond 0; Pe = Q(Eb/sqrt(N0 Eb/2)) = Q(sqrt(2Eb/N0)). Memorize the four moves - they regenerate every binary Pe on demand.",
            },
            codeExample: {
              language: "python",
              caption: "correlator.py - antipodal decisions and measured Pe",
              code: `import numpy as np

T, fs = 1e-3, 100e3
t = np.arange(0, T, 1/fs)
Eb = 1.0
N0 = 0.5                          # Eb/N0 = 3 dB

s1 = np.ones_like(t)*np.sqrt(Eb/T); s2 = -s1

rng = np.random.default_rng(0)
errs = 0
for _ in range(200000):
    n = rng.normal(0, np.sqrt(N0/2*fs), t.size)
    r = np.sum((s1 + n)*s1)/fs     # correlator vs s1
    if r < 0: errs += 1            # sent s1, decided s2
print(errs/200000)                 # ~ Q(sqrt(2*Eb/N0))`,
            },
            examQuestions: [
              {
                q: "Explain the correlator receiver and its equivalence to the matched filter. For antipodal binary signalling, derive Pe = Q(sqrt(2Eb/N0)) from the decision variable's statistics.",
                marks: 14,
                outline: [
                  "Correlator: multiply by si(t), integrate over T, reset",
                  "Same operation as matched filter at t = T - architecture choice",
                  "Antipodal: one correlator, threshold 0",
                  "Decision variable: mean +/-Eb, variance N0 Eb/2",
                  "Pe = Q(Eb/sqrt(N0 Eb/2)) = Q(sqrt(2Eb/N0))",
                  "Orthogonal case: two correlators, larger wins",
                  "M-ary: bank of correlators -> nearest constellation point",
                ],
              },
              {
                q: "Why does the correlator receiver need symbol-timing knowledge, and what happens if the integration window drifts?",
                marks: 7,
                outline: [
                  "Integration must span exactly one symbol for full energy capture",
                  "Drift loses signal energy and captures neighbour tails (ISI-like)",
                  "SNR falls toward the overlap fraction; symbol sync is mandatory",
                ],
              },
            ],
          },
          {
            number: "4.3",
            title: "Gram-Schmidt orthogonalization",
            body: [
              "The Gram-Schmidt procedure converts any set of M finite-energy waveforms into N <= M orthonormal basis functions, giving every signal a coordinate vector - the mathematical bridge from waveforms to constellations. The recipe: take s1(t), normalize it to phi1(t) = s1(t)/sqrt(E1); project s2 onto phi1, subtract that projection, normalize the remainder to phi2; continue until every remaining signal is exactly expressible in the basis (its residual is zero). N is the dimension of the signal set - at most M, often fewer.",
              "A worked 3-signal set shows the machinery: s1 = (1, 0, 1) pulse pattern on three time slots, s2 = (0, 1, 1), s3 = (1, 1, 1). phi1 = s1/sqrt(2). s2's projection onto phi1 = (s2 . s1)/E1 = 1/2; residual = s2 - 0.5 s1 = (-0.5, 1, 0.5), energy 1.5, phi2 = residual/sqrt(1.5). s3 projects fully onto span(phi1, phi2) - residual zero - so N = 2: the three waveforms live in a 2-D plane, and their coordinates ((sqrt(2), 0), (0.5/sqrt(2), sqrt(1.5)/... ) etc.) become the constellation.",
              "The payoff is receiver economy and geometric insight. Receiver: N correlators against the N basis functions replace M signal correlators - for an 8-signal set lying in 2 dimensions, 2 correlators suffice. Geometry: distances between coordinate vectors are the waveform distances that decide error probability; decision regions are Voronoi cells around the points; and the whole Unit 4.4-4.5 apparatus operates on the coordinates rather than the waveforms.",
              "In the exam: state the procedure stepwise, work a 2- or 3-signal reduction to its basis and coordinates, and state the receiver-economy consequence (N correlators). Showing one residual is exactly zero - and why that collapses the dimension - is the detail that proves the algorithm, not just recites it.",
            ],
            keyTerms: [
              { term: "Gram-Schmidt", definition: "Builds an orthonormal basis from signal waveforms by successive projection-and-subtract." },
              { term: "Basis function phi_n(t)", definition: "Unit-energy orthonormal waveform; signals become coordinate vectors." },
              { term: "Signal-space dimension N", definition: "Number of basis functions needed; N <= M, fewer when signals are dependent." },
              { term: "Coordinates", definition: "s_ik = integral si(t) phi_k(t) dt - the constellation point of signal i." },
            ],
            diagram: {
              kind: "flow",
              title: "Gram-Schmidt, step by step",
              caption: "Normalize, project, subtract, normalize the residual - repeat until signals are exhausted.",
              steps: [
                { label: "phi1 = s1/sqrt(E1)" },
                { label: "Project s2 on phi1" },
                { label: "Residual = s2 - proj" },
                { label: "phi2 = residual/sqrt(E)" },
                { label: "Repeat for s3..sM", note: "zero residual -> stop (N < M)" },
                { label: "Coordinates s_ik", note: "constellation points" },
              ],
            },
            bullets: [
              "Gram-Schmidt: orthonormalize M waveforms into N <= M basis functions.",
              "phi1 = s1/sqrt(E1); later phis from projection-subtracted residuals.",
              "Zero residual means the signal is dependent - dimension collapses.",
              "Worked: 3 binary-pulse signals reduce to N = 2.",
              "Coordinates s_ik = correlation with phi_k form the constellation.",
              "Receiver needs only N correlators - economy dimension brings.",
            ],
            callout: {
              type: "exam",
              title: "Order matters only for the basis",
              body: "The basis depends on which signal is taken first, but the geometry (distances, angles) does not - any orthonormal rotation gives identical decisions. Mentioning this invariance pre-empts the classic 'is my basis the right one?' confusion and earns the maturity mark.",
            },
            table: {
              caption: "Worked reduction of three pulse signals.",
              headers: ["Step", "Computation", "Result"],
              rows: [
                ["phi1", "s1/sqrt(E1), E1 = 2", "unit-energy along s1"],
                ["s2 projection", "(s2.s1)/2 = 1/2", "component along phi1"],
                ["residual 2", "s2 - 0.5 s1, energy 1.5", "orthogonal remainder"],
                ["phi2", "residual/sqrt(1.5)", "second basis function"],
                ["s3 residual", "zero", "s3 in span(phi1, phi2): N = 2"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the Gram-Schmidt orthogonalization procedure and apply it to the three signals s1 = (1,0,1), s2 = (0,1,1), s3 = (1,1,1) on three time slots, finding the basis and dimension.",
                marks: 14,
                outline: [
                  "Recipe: normalize, project, subtract, normalize residual",
                  "phi1 = s1/sqrt(2)",
                  "s2 projection = 1/2; residual (-0.5, 1, 0.5), energy 1.5",
                  "phi2 = residual/sqrt(1.5)",
                  "s3 residual = 0 -> s3 in span(phi1, phi2)",
                  "N = 2 < M = 3: 2-D constellation",
                  "Receiver consequence: 2 correlators replace 3",
                ],
              },
              {
                q: "Why do orthogonal waveforms always yield N = M basis functions while dependent sets yield fewer?",
                marks: 7,
                outline: [
                  "Orthogonal signals each add a new dimension (residual = itself)",
                  "Dependent signals lie in the span of earlier ones (residual = 0)",
                  "Dimension = rank of the signal set's Gram matrix",
                ],
              },
            ],
          },
          {
            number: "4.4",
            title: "Signal space and decision regions",
            body: [
              "Signal space turns detection into geometry: each possible transmitted waveform is a point in N-dimensional space (its Gram-Schmidt coordinates); the received signal r = s + n is a point jittered by AWGN, whose noise cloud is isotropic with variance N0/2 per dimension. The optimal receiver - maximum a posteriori, reducing to minimum Euclidean distance for equal priors - partitions the space into decision regions, one per constellation point, each the Voronoi cell of that point.",
              "The geometry decides the error. A symbol errors when noise pushes the received point across a region boundary - probability dominated by the Q-function of the distance to the nearest boundary: Pe ~ Q(dmin/2 sigma) summed over neighbours, where sigma = sqrt(N0/2). All the constellation design rules become geometry: maximize dmin for given energy (antipodal doubles distance; QAM's square packing beats circle packing), balance points (equal average energy), and count nearest neighbours (fewer neighbours, fewer error terms).",
              "A worked region picture: BPSK points at +/-sqrt(Eb) on the real axis; the boundary is x = 0; noise along that axis has variance N0/2, so Pe = P(noise < -sqrt(Eb)) = Q(sqrt(Eb)/sqrt(N0/2)) = Q(sqrt(2Eb/N0)) - the antipodal result falling out of a picture. QPSK: four points at (+/-sqrt(Eb/2), +/-sqrt(Eb/2)); square decision cells with boundaries on the axes; per-bit error = Q(sqrt(2Eb/N0)) as Unit 3.3 promised.",
              "In the exam: define signal space (coordinates, noise cloud, MAP = nearest-neighbour), draw decision regions for BPSK and QPSK, and derive one Pe geometrically. The Voronoi-cell language plus one picture-derived Q() is the pair that earns the marks.",
            ],
            keyTerms: [
              { term: "Signal space", definition: "N-dim space of waveform coordinates; noise adds isotropic Gaussian jitter." },
              { term: "Decision region", definition: "Voronoi cell of each constellation point; boundaries where MAP decisions change." },
              { term: "MAP / nearest-neighbour", definition: "Optimal rule for equal priors: choose the closest point." },
              { term: "dmin", definition: "Minimum Euclidean distance between constellation points; drives Pe." },
            ],
            diagram: {
              kind: "matrix",
              title: "QPSK decision regions",
              caption: "Four square Voronoi cells; errors occur when noise crosses an axis.",
              axes: { x: "I coordinate", y: "Q coordinate" },
              quadrants: [
                { label: "Region of (+,+)", note: "decide symbol 00 (example)" },
                { label: "Region of (-,+)", note: "boundary: Q axis" },
                { label: "Region of (+,-)", note: "boundary: I axis" },
                { label: "Region of (-,-)", note: "dmin = 2 sqrt(Eb/2)" },
              ],
            },
            bullets: [
              "Signals = points; received = point + isotropic Gaussian noise.",
              "Optimal rule (equal priors): nearest Euclidean neighbour (MAP).",
              "Decision regions = Voronoi cells around the constellation.",
              "Pe dominated by Q(dmin/2 sigma) per nearest neighbour, sigma^2 = N0/2.",
              "BPSK geometry: boundary at 0 -> Pe = Q(sqrt(2Eb/N0)).",
              "Constellation design = maximize dmin per average energy (packing problem).",
            ],
            callout: {
              type: "tip",
              title: "Draw before you derive",
              body: "For any Pe question, sketch the constellation, mark the decision boundaries, and identify the distance from a point to its boundary. The Q-function argument falls out of the picture - derivation without the drawing is where errors breed.",
            },
            table: {
              caption: "Geometry-to-formula map.",
              headers: ["Scheme", "Constellation geometry", "Pe (per bit)"],
              rows: [
                ["BPSK", "2 antipodal points, 1-D", "Q(sqrt(2Eb/N0))"],
                ["QPSK", "4 points, square cells", "Q(sqrt(2Eb/N0))"],
                ["Coherent BFSK", "2 orthogonal points", "Q(sqrt(Eb/N0))"],
                ["16-QAM", "4x4 grid", "~ Q-terms per dmin = 2 sqrt(Es/10)... "],
              ],
            },
            examQuestions: [
              {
                q: "Explain the signal-space concept: coordinates, noise clouds, and decision regions as Voronoi cells. Derive BPSK's error probability geometrically.",
                marks: 14,
                outline: [
                  "Gram-Schmidt coordinates place signals as points",
                  "AWGN adds isotropic jitter, variance N0/2 per dimension",
                  "MAP with equal priors = nearest neighbour",
                  "Decision regions = Voronoi cells",
                  "BPSK: points +/-sqrt(Eb), boundary x = 0",
                  "Pe = P(noise < -sqrt(Eb)) = Q(sqrt(2Eb/N0))",
                  "Design rule: maximize dmin for given average energy",
                ],
              },
              {
                q: "Why is dmin the master variable of constellation design?",
                marks: 7,
                outline: [
                  "Symbol errors cross the nearest boundary - dominated by dmin",
                  "Larger dmin at same energy = exponentially smaller Pe via Q",
                  "All constellation families differ in how they pack points vs energy",
                ],
              },
            ],
          },
          {
            number: "4.5",
            title: "Error probability: BPSK, QPSK, QAM and coherent BFSK",
            body: [
              "The four canonical derivations follow one template: find the decision variable's Gaussian statistics, identify the error event, express it as a Q-function tail. BPSK: variable ~ N(+/-sqrt(Eb), N0/2) on one axis; Pe = Q(sqrt(2Eb/N0)). QPSK: two independent BPSK arms; per-bit Pe identical, per-symbol error = 1 - (1 - Pb)^2 ~ 2Pb. Coherent BFSK: orthogonal variables, decision on the difference; Pe = Q(sqrt(Eb/N0)) - the 3 dB tier.",
              "M-QAM: a square grid with average energy Es; for even-bit square constellations the per-symbol error is approximately Pe_symbol ~ 4(1 - 1/sqrt(M)) Q(sqrt(3 Es/((M-1) N0))), and per-bit ~ Pe_symbol/log2 M. Worked: 16-QAM at Es/N0 = 14 dB: argument sqrt(3 x 25.1/15) = sqrt(5.03) = 2.24; Q(2.24) = 1.25e-2; per-symbol ~ 4 x 0.75 x 1.25e-2 = 3.75e-2; per-bit ~ 9.4e-3. The same machinery on 64-QAM gives the ~3 dB/bit ladder of Unit 3.6.",
              "M-PSK generalization: Pe_symbol ~ 2 Q(sqrt(2 k Eb/N0) sin(pi/M)) for Gray-coded M-PSK (k = log2 M) - the sin(pi/M) factor quantifies circular crowding; at M = 4 it equals QPSK's, beyond M = 4 the penalty grows, consistent with the 2.5 dB 16-QAM advantage. Worked check: 8-PSK at Eb/N0 = 12 dB: sqrt(2 x 3 x 15.85) = 9.75; sin(pi/8) = 0.383; argument 3.73; Q = 9.5e-5; per-symbol ~ 1.9e-4.",
              "In the exam, reproduce the template for BPSK in full (decision variable, error event, Q-tail), state the QPSK arm-independence argument, present the M-QAM and M-PSK approximations with one substitution each, and keep the BFSK 3 dB line. Showing the chain variable -> event -> Q() three times is the skill; memorized answers without the chain fail the follow-ups.",
            ],
            keyTerms: [
              { term: "BPSK Pe", definition: "Q(sqrt(2Eb/N0)) - antipodal benchmark." },
              { term: "QPSK Pe", definition: "Per-bit equal to BPSK via orthogonal arms; symbol error ~ 2Pb." },
              { term: "M-QAM Pe", definition: "~4(1 - 1/sqrt(M)) Q(sqrt(3Es/((M-1)N0))) per symbol." },
              { term: "M-PSK Pe", definition: "~2 Q(sqrt(2k Eb/N0) sin(pi/M)) - circular crowding factor." },
            ],
            diagram: {
              kind: "flow",
              title: "The Pe derivation template",
              caption: "Variable, event, tail - one template generates every formula in this unit.",
              steps: [
                { label: "Decision variable", note: "Gaussian, mean = signal, var = N0/2 per dim" },
                { label: "Error event", note: "variable crosses decision boundary" },
                { label: "Distance to boundary", note: "dmin/2 or dmin/sqrt(2)" },
                { label: "Q-tail", note: "Pe = Q(distance/sigma)" },
                { label: "Sum over neighbours", note: "union bound; M-QAM/M-PSK forms" },
              ],
            },
            bullets: [
              "BPSK: Pe = Q(sqrt(2Eb/N0)) - derive via the zero-threshold tail.",
              "QPSK: orthogonal arms -> per-bit = BPSK; symbol error ~ 2Pb.",
              "Coherent BFSK: Pe = Q(sqrt(Eb/N0)) - 3 dB worse (orthogonal).",
              "M-QAM: ~4(1 - 1/sqrt(M)) Q(sqrt(3Es/((M-1)N0))); divide by k for bit error.",
              "M-PSK: ~2 Q(sqrt(2k Eb/N0) sin(pi/M)) - crowding factor sin(pi/M).",
              "Worked 16-QAM at 14 dB Es/N0: per-bit ~ 9.4e-3.",
              "Worked 8-PSK at 12 dB: per-symbol ~ 1.9e-4.",
            ],
            callout: {
              type: "exam",
              title: "Derive one, cite the rest",
              body: "Examiners expect one full derivation (usually BPSK) and formula-level recall for the rest. Derive BPSK through the four-line chain, then present M-QAM/M-PSK with substitutions - that combination matches the mark scheme's depth gradient.",
            },
            table: {
              caption: "Formula sheet (two-sided noise, matched-filter reception).",
              headers: ["Scheme", "Per-bit / per-symbol Pe"],
              rows: [
                ["Coherent BPSK", "Pb = Q(sqrt(2Eb/N0))"],
                ["QPSK (Gray)", "Pb = Q(sqrt(2Eb/N0)); Ps ~ 2Pb"],
                ["Coherent BFSK", "Pb = Q(sqrt(Eb/N0))"],
                ["DPSK", "Pb = 0.5 exp(-Eb/N0)"],
                ["M-PSK", "Ps ~ 2Q(sqrt(2k Eb/N0) sin(pi/M))"],
                ["Square M-QAM", "Ps ~ 4(1-1/sqrt(M)) Q(sqrt(3Es/((M-1)N0)))"],
              ],
            },
            examQuestions: [
              {
                q: "Derive the error probability of coherent BPSK using the decision-variable method, then state with brief justification the Pe of QPSK, coherent BFSK, and the M-QAM/M-PSK approximations.",
                marks: 14,
                outline: [
                  "BPSK: r ~ N(+/-sqrt(Eb), N0/2); error when r crosses 0",
                  "Pe = Q(sqrt(Eb)/sqrt(N0/2)) = Q(sqrt(2Eb/N0))",
                  "QPSK: two orthogonal BPSK arms; Pb unchanged; Ps ~ 2Pb",
                  "BFSK: orthogonal - decision distance halved -> Q(sqrt(Eb/N0))",
                  "M-QAM: union bound over nearest neighbours -> given form",
                  "M-PSK: sin(pi/M) crowding factor",
                  "Worked substitutions: 16-QAM at 14 dB; 8-PSK at 12 dB",
                ],
              },
              {
                q: "Compute the symbol error probability of 16-QAM at Es/N0 = 14 dB.",
                marks: 7,
                outline: [
                  "Argument: sqrt(3 x 25.1/15) = 2.24",
                  "Q(2.24) = 1.25e-2",
                  "Ps ~ 4(1 - 1/4) x 1.25e-2 = 3.75e-2",
                  "Per-bit ~ 9.4e-3 (divide by 4)",
                ],
              },
            ],
          },
          {
            number: "4.6",
            title: "Comparison of modulation techniques",
            body: [
              "The comparison table is the unit's synthesis and the exam's favourite: rank schemes by Eb/N0 required for a target Pe, by bandwidth efficiency, by implementation complexity, and by robustness (envelope, fading, nonlinear amplifiers). The Eb/N0 ordering at Pe = 10^-5 is roughly: coherent BPSK/QPSK best (~9.6 dB), DPSK +1 dB, coherent BFSK +3 dB, non-coherent FSK/OOK further, higher-order QAM paying ~3 dB per constellation doubling for spectral efficiency.",
              "The bandwidth-efficiency ordering runs opposite: QAM ladder (eta = 2k/(1 + beta)) up to 5+ bits/s/Hz, M-PSK similar but less power-efficient, QPSK 1.33-2, binary schemes under 1.5. The two orderings cross: no scheme is best at both - the fundamental trade space. Choosing is matching: satellite (nonlinear PA) -> constant-envelope QPSK/MSK; cable/fibre (clean, linear) -> 64/256-QAM; fading cellular -> adaptive QAM with QPSK fallback; deep space (power-only) -> BPSK with coding.",
              "A worked selection: deliver 10 Mbps in 3 MHz with Pe = 10^-6. Required eta = 3.33 bits/s/Hz -> from the ladder, 32-QAM or 64-QAM (eta 3.33/4.0); 64-QAM at Pe = 10^-6 needs ~24-26 dB SNR - check the link budget; if the channel provides 20 dB, fall back to 16-QAM (eta 2.67 -> 8 Mbps... insufficient) or widen bandwidth/reduce rate - the iteration loop the table enables.",
              "In the exam, produce the four-column table (Eb/N0, eta, complexity, robustness) from memory, rank the canonical schemes, and demonstrate one selection calculation. The 'no free lunch' crossing of the two orderings is the thesis sentence every comparison answer should open with.",
            ],
            keyTerms: [
              { term: "Power efficiency", definition: "Eb/N0 needed for target Pe - BPSK/QPSK lead." },
              { term: "Bandwidth efficiency", definition: "bits/s/Hz delivered - QAM ladder leads." },
              { term: "Robustness", definition: "Tolerance to fading, phase noise, nonlinear PAs - constant-envelope schemes lead." },
              { term: "Adaptive modulation", definition: "Switching constellation order with measured channel SNR." },
            ],
            diagram: {
              kind: "compare",
              title: "Power vs bandwidth efficiency",
              caption: "The trade space's two axes - every scheme is a point; channels choose the corner.",
              left: {
                heading: "Power-efficient corner",
                items: [
                  "BPSK/QPSK: ~9.6 dB at 1e-5",
                  "DPSK +1 dB, BFSK +3 dB",
                  "Constant envelope, PA-friendly",
                  "Low eta (~1-2 bits/s/Hz)",
                ],
              },
              right: {
                heading: "Bandwidth-efficient corner",
                items: [
                  "64/256-QAM: 4-5.3 bits/s/Hz",
                  "Pay ~3 dB per constellation doubling",
                  "Needs linear PA, clean SNR",
                  "Adaptive modulation harvests both",
                ],
              },
            },
            bullets: [
              "Eb/N0 ranking at 1e-5: BPSK/QPSK < DPSK < BFSK < non-coherent < high-M QAM.",
              "eta ranking: 256-QAM > 64-QAM > 16-QAM > QPSK > binary schemes.",
              "The orderings cross - no scheme maximizes both; selection = channel matching.",
              "Satellite: constant envelope (QPSK/MSK) for nonlinear transponders.",
              "Cable/fibre: high-order QAM for clean linear channels.",
              "Cellular: adaptive QAM with QPSK fallback under fading.",
              "Worked: 10 Mbps in 3 MHz -> eta 3.33 -> 64-QAM if SNR >= ~25 dB.",
            ],
            callout: {
              type: "exam",
              title: "Open with the crossing",
              body: "Thesis first: power and bandwidth efficiency order oppositely - the comparison table exists to locate each scheme on both axes. Then fill the table and close with one channel-matching example; that structure scores across the whole rubric.",
            },
            table: {
              caption: "The grand comparison (target Pe = 1e-5, shaped bandwidths).",
              headers: ["Scheme", "Eb/N0 (dB)", "eta (bits/s/Hz)", "Complexity / robustness"],
              rows: [
                ["Coherent BPSK", "~9.6", "~0.8", "carrier recovery; robust"],
                ["QPSK", "~9.6", "~1.7", "+ I/Q; PA-dip issue (OQPSK fix)"],
                ["DPSK", "~10.5", "~0.8", "no carrier recovery; ambiguity-immune"],
                ["MSK", "~9.6 (coherent)", "~1.3", "compact spectrum; constant env"],
                ["Coherent BFSK", "~12.5", "~0.8", "simple; fading-robust"],
                ["16-QAM", "~14", "~3.3", "linear PA; needs ~14+ dB SNR"],
                ["64-QAM", "~18-20", "~5", "high SNR; adaptive fallback"],
              ],
            },
            examQuestions: [
              {
                q: "Compare BPSK, DPSK, QPSK, BFSK, MSK and QAM on error probability, bandwidth efficiency, complexity and robustness. Recommend a scheme for (a) a satellite link with a nonlinear transponder and (b) a clean cable channel carrying maximum data.",
                marks: 14,
                outline: [
                  "Table: Eb/N0, eta, complexity, robustness per scheme",
                  "BPSK/QPSK best Eb/N0; QAM ladder best eta",
                  "Orderings cross - the fundamental trade",
                  "MSK: compact spectrum + constant envelope",
                  "(a) Satellite -> OQPSK/MSK: envelope survives TWTA nonlinearity",
                  "(b) Cable -> 64/256-QAM: clean linear channel maximizes eta",
                  "Adaptive modulation as the general answer under varying SNR",
                ],
              },
              {
                q: "A link must deliver 10 Mbps in 3 MHz at Pe = 1e-6 with 22 dB available SNR. Which modulation would you select and why?",
                marks: 7,
                outline: [
                  "Required eta = 3.33 bits/s/Hz",
                  "16-QAM gives 2.67 - insufficient; 64-QAM gives 4.0",
                  "64-QAM needs ~25 dB at 1e-6 - marginal at 22 dB",
                  "Select 32-QAM (eta 3.33) or add FEC coding margin",
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
      title: "Information Theory and Error-Control Coding",
      summary:
        "Unit V bounds and protects communication: entropy and information rate, source encoding with zero-memory extensions, channel capacity with Shannon's and Shannon-Hartley theorems, the bandwidth-SNR tradeoff, linear block codes with encoder/decoder circuits, cyclic codes with their shift-register circuits, burst-error correction, and the concept of convolutional codes.",
      chapter: {
        number: "05",
        title: "Limits and Protection",
        intro:
          "Unit V covers entropy, information rate, source encoding, channel capacity, Shannon's theorem, the Shannon-Hartley law and bandwidth-SNR tradeoff, linear block codes and cyclic codes with encoder/decoder circuits, burst-error-correcting codes, and convolutional codes.",
        inOneBreath:
          "Information is -log2 p: entropy H is average information per symbol, rate R = rs H. Shannon: reliable transmission below channel capacity C is possible, above it impossible; C = B log2(1 + S/N) for band-limited AWGN - bandwidth and SNR trade multiplicatively inside the log. Linear block codes append parity from a generator matrix; cyclic codes generate codewords as remainders of g(x) division in shift registers; burst codes (Fire, interleaved) fix clustered errors; convolutional codes add memory and get decoded by Viterbi.",
        sections: [
          {
            number: "5.1",
            title: "Information measure, entropy and information rate",
            body: [
              "Information quantifies surprise: a message with probability p carries I = log2(1/p) = -log2 p bits - likely events say little, rare events say much. The logarithmic law is forced by additivity: independent events' information adds, and their probabilities multiply - only a logarithm does that. The base-2 logarithm prices information in bits: a fair coin toss (p = 0.5) carries exactly 1 bit.",
              "Entropy is the average information per source symbol: H(X) = sum pi log2(1/pi) - the mean surprise rate. Its bounds: H = 0 when one outcome is certain (p = 1); H = log2 M when all M outcomes are equiprobable (maximum uncertainty). A worked binary case: p = 0.9/0.1 gives H = 0.9 log2(1/0.9) + 0.1 log2(10) = 0.137 + 0.332 = 0.469 bits/symbol - a biased source compresses to less than half a bit per symbol, the seed of all source coding.",
              "Information rate multiplies by symbol rate: R = rs x H bits/s. Worked: a telegraph source emitting 5 symbols/s with the 0.469-bit entropy above produces R = 2.35 bits/s. For the four-symbol source {A: 0.5, B: 0.25, C: 0.125, D: 0.125}: H = 0.5(1) + 0.25(2) + 0.125(3) + 0.125(3) = 1.75 bits/symbol - the exact number Huffman coding (next section) achieves, because that source is dyadic.",
              "In the exam: define information and entropy with the log law justification, compute H for given distributions (binary biased and 4-symbol), and state the bounds. The dyadic-source coincidence - Huffman achieving H exactly - is the bridge sentence to source coding.",
            ],
            keyTerms: [
              { term: "Information I", definition: "I = -log2 p bits: surprise of an event with probability p." },
              { term: "Entropy H(X)", definition: "Average information per symbol: sum pi log2(1/pi); 0 to log2 M." },
              { term: "Information rate R", definition: "R = rs x H - bits per second from the source." },
              { term: "Dyadic source", definition: "Probabilities that are powers of 1/2; Huffman coding achieves H exactly." },
            ],
            diagram: {
              kind: "pyramid",
              title: "Entropy vs probability profile",
              caption: "From certainty to uniform - entropy climbs from 0 to log2 M.",
              tiers: [
                { label: "Certain outcome", note: "p = 1: H = 0 bits" },
                { label: "Skewed binary", note: "p = 0.9/0.1: H = 0.469 bits" },
                { label: "Fair binary", note: "p = 0.5/0.5: H = 1 bit" },
                { label: "Uniform M-ary", note: "H = log2 M - maximum" },
              ],
            },
            bullets: [
              "I = -log2 p: rarer events carry more information.",
              "Log law: independent events add information; probabilities multiply.",
              "H(X) = sum pi log2(1/pi); bounds 0 <= H <= log2 M.",
              "Worked binary: p = 0.9/0.1 -> H = 0.469 bits/symbol.",
              "Worked 4-symbol dyadic {0.5, 0.25, 0.125, 0.125}: H = 1.75 bits.",
              "Information rate R = rs x H (bits/s).",
            ],
            callout: {
              type: "exam",
              title: "Log base is a unit",
              body: "Base 2 gives bits, base e gives nats - always state the base in entropy answers. The one-line justification (additivity of independent events) is the theory mark; the numerical H computation is the application mark.",
            },
            table: {
              caption: "Entropy computations, worked.",
              headers: ["Source", "Distribution", "H (bits/symbol)"],
              rows: [
                ["Certain", "p = 1", "0"],
                ["Biased binary", "0.9 / 0.1", "0.469"],
                ["Fair binary", "0.5 / 0.5", "1.0"],
                ["Dyadic 4-ary", "0.5/0.25/0.125/0.125", "1.75"],
                ["Uniform 4-ary", "0.25 x 4", "2.0"],
              ],
            },
            examQuestions: [
              {
                q: "Define information content and entropy. Compute the entropy of a binary source with p = 0.9/0.1 and of a 4-symbol source with probabilities 0.5, 0.25, 0.125, 0.125; give the information rate at 100 symbols/s for each.",
                marks: 14,
                outline: [
                  "I = -log2 p; additivity justification",
                  "H = sum pi log2(1/pi); bounds 0..log2 M",
                  "Binary: 0.137 + 0.332 = 0.469 bits",
                  "4-ary dyadic: 0.5 + 0.5 + 0.375 + 0.375 = 1.75 bits",
                  "Rates: 46.9 bps and 175 bps",
                  "Dyadic note: Huffman achieves 1.75 exactly",
                ],
              },
              {
                q: "Why must the information measure be logarithmic?",
                marks: 7,
                outline: [
                  "Independent events: probabilities multiply",
                  "Information should add for independent messages",
                  "Only log converts multiplication to addition",
                ],
              },
            ],
          },
          {
            number: "5.2",
            title: "Source encoding and extension of a zero-memory source",
            body: [
              "Source encoding compresses: assign short codewords to probable symbols and long codewords to rare ones, guided by entropy. Shannon's noiseless coding theorem sets the floor - no lossless code can average fewer than H bits/symbol, and codes approaching H exist. Two properties make a code usable: unique decodability (no ambiguity in parsing) and - for real-time decoders - the prefix condition (no codeword is another's prefix; Kraft's inequality sum 2^-li <= 1 governs length feasibility).",
              "The nth extension of a zero-memory source is the source emitting blocks of n symbols; its entropy is nH, and coding the extension lets the average length per symbol approach H as n grows - the mechanism by which block codes beat symbol codes. Worked: the 0.9/0.1 binary source has H = 0.469; coding pairs (00, 01, 10, 11 with probabilities 0.81, 0.09, 0.09, 0.01) by Huffman yields lengths 1, 3, 3, 3... average 0.81 x 1 + 0.18 x 3 + 0.01 x 3 = 1.41 bits per pair = 0.705 bits/symbol - already below the symbol-code 1 bit, trending to 0.469 as n grows.",
              "Huffman's algorithm builds the optimal prefix code: repeatedly merge the two least-probable nodes; label branches 0/1; read lengths from root to leaves. For the dyadic source {0.5, 0.25, 0.125, 0.125} it yields lengths 1, 2, 3, 3 - average 1.75 = H exactly, the perfect case. Efficiency = H / L_bar x 100%: the pair-coded example gives 0.469/0.705 = 66.5% (still short); with n = 4-8 blocks, efficiencies above 95% are routine.",
              "In the exam: state Shannon's noiseless theorem and the prefix/Kraft conditions, define the nth extension and show the pair-coding computation, and build one Huffman code with its efficiency. The extension-coding trend toward H is the conceptual spine.",
            ],
            keyTerms: [
              { term: "Source coding theorem", definition: "L_bar >= H for any lossless code; codes with L_bar -> H exist." },
              { term: "Prefix condition", definition: "No codeword prefixes another - instant decodability; Kraft: sum 2^-li <= 1." },
              { term: "nth extension", definition: "Block source of n-tuples; entropy nH; coding blocks approaches H per symbol." },
              { term: "Huffman coding", definition: "Optimal prefix code by merging least-probable nodes." },
            ],
            diagram: {
              kind: "pipeline",
              title: "From source to efficient code",
              caption: "Extend to blocks, count block probabilities, Huffman them, divide by n - approach H.",
              stages: [
                { label: "Zero-memory source", note: "entropy H per symbol" },
                { label: "n-th extension", note: "blocks of n; entropy nH" },
                { label: "Block probabilities", note: "products of symbol probs" },
                { label: "Huffman on blocks", note: "L_bar(n) per block" },
                { label: "L_bar(n)/n -> H", note: "efficiency rises with n" },
              ],
            },
            bullets: [
              "Coding floor: average length >= H (Shannon's noiseless theorem).",
              "Prefix condition + Kraft inequality guarantee instant decodability.",
              "Extension coding: blocks of n symbols; L/n -> H as n grows.",
              "Worked 0.9/0.1 source: symbol code 1.0 bit; pair code 0.705 bit; H = 0.469.",
              "Huffman algorithm: merge two least probable repeatedly; optimal prefix code.",
              "Dyadic source: Huffman hits H exactly (1.75 for the worked 4-ary).",
              "Efficiency = H/L x 100%; block coding pushes it above 95%.",
            ],
            callout: {
              type: "tip",
              title: "Work the pair extension once",
              body: "The 0.9/0.1 pair-code computation (1.41 bits/pair -> 0.705 bits/symbol) is the standard numerical for extensions. Practise it once slowly; it regenerates for any n and any biased source on demand.",
            },
            table: {
              caption: "Extension coding trend (0.9/0.1 source, H = 0.469).",
              headers: ["Block length n", "L_bar per block", "Bits/symbol", "Efficiency"],
              rows: [
                ["1", "1.00", "1.000", "46.9%"],
                ["2", "1.41", "0.705", "66.5%"],
                ["3", "1.81", "0.603", "77.8%"],
                ["large n", "-> nH", "-> 0.469", "-> 100%"],
              ],
            },
            examQuestions: [
              {
                q: "State the source coding theorem and the prefix condition. Explain the nth extension of a zero-memory source and show, for the binary source p = 0.9/0.1, how coding pairs reduces the average length below 1 bit per symbol.",
                marks: 14,
                outline: [
                  "Theorem: L_bar >= H; achievable in the limit",
                  "Prefix condition and Kraft sum 2^-li <= 1",
                  "Extension: block source, entropy nH",
                  "Pair probabilities: 0.81, 0.09, 0.09, 0.01",
                  "Huffman lengths 1, 3, 3, 3 -> L_bar = 1.41 bits/pair",
                  "Per symbol 0.705 < 1.0 (symbol code)",
                  "Trend: L/n -> H = 0.469 as n grows",
                ],
              },
              {
                q: "Construct the Huffman code for {0.5, 0.25, 0.125, 0.125} and compute its efficiency.",
                marks: 7,
                outline: [
                  "Merge 0.125+0.125 = 0.25; merge with 0.25 = 0.5; merge with 0.5",
                  "Lengths: 1, 2, 3, 3",
                  "L_bar = 0.5 + 0.5 + 0.375 + 0.375 = 1.75",
                  "H = 1.75 -> efficiency 100% (dyadic)",
                ],
              },
            ],
          },
          {
            number: "5.3",
            title: "Channel capacity and Shannon's theorem",
            body: [
              "Channel capacity is the maximum mutual information between channel input and output - the fastest rate at which reliable (arbitrarily small error) communication is possible. Shannon's channel coding theorem: for any rate R < C, codes exist making the error probability arbitrarily small with increasing block length; for R > C, no code can - capacity is a hard wall, not a guideline. The theorem's genius is separating source statistics from channel physics: capacity depends only on the channel.",
              "For the band-limited AWGN channel the capacity takes the Shannon-Hartley form: C = B log2(1 + S/N) bits/s, where B is bandwidth and S/N the signal-to-noise power ratio. The derivation logic: an AWGN channel of bandwidth B carries 2B degrees of freedom per second, each with noise variance N0B... condensed, the mutual information maximizes to the log formula. Worked: telephone line B = 3.4 kHz at SNR = 30 dB (1000): C = 3400 log2(1001) = 3400 x 9.97 = 33.9 kbps - the number that capped dial-up modems until compression and multi-level signalling reached toward it.",
              "The binary symmetric channel gives the discrete-flavour case: capacity C = 1 - H(p) bits per channel use, where p is the crossover probability. Worked: p = 0.1 gives C = 1 - 0.469 = 0.531 bits/use - a channel that flips 1 in 10 bits still reliably carries over half a bit per use with the right code; p = 0.5 collapses capacity to zero (output independent of input).",
              "In the exam: define capacity and state the coding theorem both directions, present the Shannon-Hartley law with a numerical evaluation, and give the BSC result. The 'wall not guideline' phrasing and the 33.9 kbps worked case are the expected anchors.",
            ],
            keyTerms: [
              { term: "Channel capacity C", definition: "Maximum mutual information; the reliable-transmission rate limit." },
              { term: "Shannon's coding theorem", definition: "R < C: arbitrarily reliable codes exist; R > C: impossible." },
              { term: "Shannon-Hartley law", definition: "C = B log2(1 + S/N) for band-limited AWGN." },
              { term: "BSC capacity", definition: "C = 1 - H(p) bits per use for crossover probability p." },
            ],
            diagram: {
              kind: "flow",
              title: "Reading the capacity statement",
              caption: "Below C codes exist, above C nothing works - and the AWGN log formula sets the number.",
              steps: [
                { label: "Characterize channel", note: "B, S/N (or BSC p)" },
                { label: "Compute C", note: "B log2(1 + S/N)" },
                { label: "Choose R < C", note: "reliable operation" },
                { label: "Error-control code", note: "operates near C" },
                { label: "R > C?", note: "no code can save it" },
              ],
            },
            bullets: [
              "Capacity = max mutual information I(X; Y) over input distributions.",
              "Shannon: R < C -> arbitrarily small Pe with long block codes; R > C -> impossible.",
              "Shannon-Hartley: C = B log2(1 + S/N).",
              "Worked: 3.4 kHz at 30 dB -> 33.9 kbps.",
              "BSC: C = 1 - H(p); p = 0.1 -> 0.531 bits/use; p = 0.5 -> 0.",
              "Capacity depends on the channel only - coding bridges any source to it.",
            ],
            callout: {
              type: "exam",
              title: "The wall, both directions",
              body: "State the theorem in BOTH directions: below C codes exist (positive), above C none can exist (converse). Answers that only assert the positive direction lose the theorem's actual content - the converse is the hard part Shannon proved.",
            },
            table: {
              caption: "Shannon-Hartley, worked cases.",
              headers: ["Channel", "B", "SNR", "C"],
              rows: [
                ["Voice line", "3.4 kHz", "30 dB", "33.9 kbps"],
                ["Voice line", "3.4 kHz", "40 dB", "45.1 kbps"],
                ["Wideband", "1 MHz", "20 dB", "6.66 Mbps"],
                ["Wideband", "1 MHz", "0 dB", "1.0 Mbps"],
              ],
            },
            examQuestions: [
              {
                q: "Define channel capacity and state Shannon's channel coding theorem in both directions. Evaluate the Shannon-Hartley capacity of a 3.4 kHz channel at 30 dB SNR and give the BSC capacity at p = 0.1.",
                marks: 14,
                outline: [
                  "C = max I(X; Y) - reliable-rate ceiling",
                  "Direct: R < C -> Pe -> 0 with block length",
                  "Converse: R > C -> no code achieves reliability",
                  "C = B log2(1 + S/N)",
                  "Worked: 3400 x log2(1001) = 33.9 kbps",
                  "BSC: C = 1 - H(0.1) = 1 - 0.469 = 0.531 bits/use",
                  "Capacity is channel-only; codes bridge sources to it",
                ],
              },
              {
                q: "How much bandwidth does a 100 Mbps link need at 20 dB SNR, per Shannon-Hartley?",
                marks: 7,
                outline: [
                  "C = B log2(101) = B x 6.66",
                  "B = 100e6/6.66 = 15 MHz",
                  "Below that bandwidth, 100 Mbps is impossible at 20 dB",
                ],
              },
            ],
          },
          {
            number: "5.4",
            title: "Bandwidth and SNR tradeoff",
            body: [
              "The Shannon-Hartley law encodes a trade: capacity grows linearly in bandwidth but only logarithmically in SNR - so doubling SNR (3 dB) adds just one extra bit per second per hertz, while doubling bandwidth doubles the whole capacity. The consequence shapes system design: when bandwidth is scarce and power cheap (satellite downlinks), spread the spectrum wide at low SNR; when bandwidth is cheap and power scarce (deep space... inverse - fibre), pack bits densely at high SNR.",
              "The low-SNR limit makes the trade quantitative: for S/N << 1, C = B log2(1 + S/N) ~ B x S/(N ln 2) = (1/ln 2) x (Eb/N0)^-1 x (R/C normalization)... in energy terms C ~ B x (S/N)/ln 2, linear in SNR - so at low SNR every 1 dB buys a proportional capacity slice, and the Eb/N0 floor emerges: as B -> infinity at fixed Eb, capacity approaches Eb/N0 / ln 2, giving the ultimate Shannon limit Eb/N0 = ln 2 = -1.6 dB - the number below which NO modulation can communicate reliably.",
              "Worked trade study: need 10 Mbps. Option A - 20 dB SNR, B = 10e6/6.66 = 1.5 MHz. Option B - 10 dB SNR, B = 10e6/3.46 = 2.9 MHz. Option C - 0 dB SNR, B = 10 MHz. Power-rich/band-poor systems take A; band-rich/power-poor take C. Multiply by coding: operating at R = 0.8C needs 25% more bandwidth-or-SNR headroom - coding trades rate for reliability inside the same law.",
              "In the exam, present the log-vs-linear asymmetry, derive or state the low-SNR behaviour and the -1.6 dB Shannon limit, and work the three-option trade table. The '3 dB = one bit/s/Hz' rule of thumb is the quotable core.",
            ],
            keyTerms: [
              { term: "Logarithmic SNR growth", definition: "C grows as log2(1 + S/N): 3 dB adds one bit/s/Hz." },
              { term: "Linear bandwidth growth", definition: "C proportional to B - bandwidth is the stronger currency at low SNR." },
              { term: "Shannon limit", definition: "Eb/N0 = ln 2 = -1.6 dB: the ultimate floor for any coding/modulation." },
              { term: "Spectral spread trade", definition: "Low-SNR links widen B; high-SNR links densify bits." },
            ],
            diagram: {
              kind: "pyramid",
              title: "Capacity levers, weakest to strongest",
              caption: "SNR works inside a log; bandwidth works linearly - and coding converts between margins.",
              tiers: [
                { label: "More SNR", note: "log growth: 3 dB -> +1 bit/s/Hz" },
                { label: "More bandwidth", note: "linear growth: double B doubles C" },
                { label: "Coding at R ~ 0.8C", note: "reliability margin inside the same budget" },
                { label: "Shannon limit", note: "Eb/N0 = -1.6 dB: nobody goes below" },
              ],
            },
            bullets: [
              "C = B log2(1 + S/N): linear in B, log in SNR.",
              "Rule of thumb: +3 dB SNR -> +1 bit/s/Hz of capacity.",
              "Low-SNR limit: C ~ B(S/N)/ln 2 - linear; spread spectrum exploits this.",
              "Shannon limit: Eb/N0 = ln 2 = -1.6 dB - the absolute floor.",
              "Worked 10 Mbps: 1.5 MHz at 20 dB / 2.9 MHz at 10 dB / 10 MHz at 0 dB.",
              "Coding trades rate (R ~ 0.8C) for reliability inside the law.",
            ],
            callout: {
              type: "exam",
              title: "Quote the -1.6 dB",
              body: "The Eb/N0 = ln 2 = -1.6 dB Shannon limit is the most-quoted number in digital communication theory. Stating it - and that turbo/LDPC codes now operate within ~0.5 dB of it - converts a formula question into a systems answer.",
            },
            table: {
              caption: "Three ways to buy 10 Mbps (Shannon-Hartley).",
              headers: ["Option", "SNR", "Bandwidth needed", "Design lesson"],
              rows: [
                ["A", "20 dB (x100)", "1.5 MHz", "power-rich, band-poor"],
                ["B", "10 dB (x10)", "2.9 MHz", "balanced"],
                ["C", "0 dB (x1)", "10 MHz", "band-rich, power-poor (spread)"],
              ],
            },
            examQuestions: [
              {
                q: "Discuss the bandwidth-SNR tradeoff implied by the Shannon-Hartley law. Show the low-SNR behaviour, state the ultimate Eb/N0 limit, and work a 10 Mbps design across three SNR choices.",
                marks: 14,
                outline: [
                  "C linear in B, logarithmic in SNR",
                  "3 dB -> +1 bit/s/Hz rule of thumb",
                  "Low-SNR limit: C ~ B(S/N)/ln 2 - spread-spectrum regime",
                  "Shannon limit: Eb/N0 = ln 2 = -1.6 dB",
                  "Option A: 20 dB -> 1.5 MHz",
                  "Option B: 10 dB -> 2.9 MHz; Option C: 0 dB -> 10 MHz",
                  "Coding margin: operate R ~ 0.8C for reliability",
                ],
              },
              {
                q: "Why do deep-space links prefer low-rate strong coding over high-order modulation?",
                marks: 7,
                outline: [
                  "Power (Eb) is the scarce resource; bandwidth is free",
                  "Strong coding at R << C drives required Eb/N0 toward -1.6 dB",
                  "High-order QAM would waste power on constellation crowding",
                ],
              },
            ],
          },
          {
            number: "5.5",
            title: "Linear block codes: encoder and decoder",
            body: [
              "A linear block code maps k information bits to n codeword bits (n > k) by appending n - k parity bits computed as linear combinations: c = mG, where G is the k x n generator matrix and all arithmetic is mod 2. Linearity means codewords form a vector space - sums of codewords are codewords - which makes the algebra tractable: minimum distance equals the minimum nonzero codeword weight, and the code's (n, k, d) triple summarizes it.",
              "The Hamming (7, 4) code is the canonical worked case: d = 3, correcting any single error or detecting any double. Its parity-check matrix H ((n-k) x n) defines the syndrome s = rH^T on reception: s = 0 means no detectable error; a nonzero syndrome equals the column of H where the error sits - decode by flipping that bit. Worked: message 1011, G in standard form [I | P] with P rows 1010/1111/0110... produces codeword 1011010; flipping bit 3 in the channel yields r = 1010010, syndrome = H column 3, decoder corrects to 1011010 and reads 1011.",
              "Hardware mirrors the algebra: the encoder is k XOR trees (one per parity bit) or a shift register; the decoder computes the syndrome with n - k XOR trees, looks up the error position in a table (or decodes syndrome directly for Hamming codes), and corrects. Rates: (7,4) has R_c = 4/7 = 0.571 - the redundancy price; extended codes trade rate for distance. Bounds frame design: Hamming bound 2^(n-k) >= sum of correction capability, Singleton d <= n - k + 1.",
              "In the exam: define the code with G/H roles, encode a given message step by step, compute a syndrome and correct a stated error, and quote the (7,4) parameters. Showing the syndrome-column identification is the operational core examiners mark.",
            ],
            keyTerms: [
              { term: "(n, k) linear block code", definition: "k info bits -> n codeword bits via c = mG (mod 2)." },
              { term: "Syndrome s = rH^T", definition: "Zero if no detectable error; otherwise identifies the error position." },
              { term: "Minimum distance d", definition: "Minimum nonzero codeword weight; corrects t = floor((d-1)/2) errors." },
              { term: "Hamming (7,4)", definition: "d = 3 single-error-correcting code; the canonical worked example." },
            ],
            diagram: {
              kind: "pipeline",
              title: "Block-code transmit and receive",
              caption: "Encode with G, suffer errors, syndrome with H, correct, extract the message.",
              stages: [
                { label: "Message m (k bits)" },
                { label: "Encoder c = mG", note: "append parity via XOR trees" },
                { label: "Channel", note: "up to t errors" },
                { label: "Syndrome s = rH^T", note: "n-k XOR trees" },
                { label: "Correct + decode", note: "flip syndrome-indicated bit" },
              ],
            },
            bullets: [
              "Codeword c = mG mod 2; linearity: code is a vector space.",
              "H defines parity checks; syndrome s = rH^T localizes errors.",
              "(7,4) Hamming: d = 3, t = 1, rate 4/7.",
              "Worked encode: 1011 -> 1011010; single-bit error corrected via syndrome.",
              "Minimum distance = minimum nonzero codeword weight.",
              "Bounds: Hamming and Singleton frame achievable (n, k, d).",
              "Hardware: XOR-tree encoder, syndrome decoder, lookup correction.",
            ],
            callout: {
              type: "exam",
              title: "Syndrome = column of H",
              body: "For Hamming codes the syndrome IS the binary position of the error - s = 101 points at column 5. State that identity explicitly; it converts syndrome computation into instant correction and is the mark-scheme's favourite line.",
            },
            codeExample: {
              language: "python",
              caption: "hamming74.py - encode, corrupt, syndrome-correct",
              code: `import numpy as np

G = np.array([[1,0,0,0,1,0,1],
              [0,1,0,0,1,1,0],
              [0,0,1,0,1,1,1],
              [0,0,0,1,0,1,1]])          # [I | P]
H = np.array([[1,1,1,0,1,0,0],
              [1,1,0,1,0,1,0],
              [1,0,1,1,0,0,1]])          # [P^T | I]

m = np.array([1,0,1,1])
c = m @ G % 2                      # 1 0 1 1 0 1 0
r = c.copy(); r[2] ^= 1            # error in bit 3
s = r @ H.T % 2
pos = int("".join(map(str, s)), 2) # syndrome as binary = 3
r[pos-1] ^= 1                      # correct
print("decoded:", r[:4])           # 1 0 1 1`,
            },
            examQuestions: [
              {
                q: "Explain linear block codes with generator and parity-check matrices. Encode 1011 with the (7,4) Hamming code, and show how a single-bit error is detected and corrected via the syndrome.",
                marks: 14,
                outline: [
                  "c = mG mod 2; H defines checks; syndrome s = rH^T",
                  "(7,4): n = 7, k = 4, d = 3, t = 1, rate 4/7",
                  "Encode 1011 -> 1011010",
                  "Introduce error at bit 3: r = 1010010",
                  "Syndrome = column 3 of H = 011 (binary 3)",
                  "Flip bit 3; extract message 1011",
                  "Minimum distance = min nonzero weight; Hamming/Singleton bounds",
                ],
              },
              {
                q: "Why does minimum distance d = 2t + 1 allow correction of t errors?",
                marks: 7,
                outline: [
                  "Correction spheres of radius t around codewords must not overlap",
                  "Two spheres overlap iff distance < 2t + 1",
                  "d >= 2t + 1 keeps spheres disjoint -> unique nearest codeword",
                ],
              },
            ],
          },
          {
            number: "5.6",
            title: "Cyclic codes: encoder and decoder circuits",
            body: [
              "A cyclic code is a linear block code closed under cyclic shifts - any cyclic rotation of a codeword is a codeword. This property lets codewords be polynomials over GF(2): a codeword c(x) of degree < n is valid iff it is divisible by the generator polynomial g(x) of degree n - k. Every cyclic code is defined by its g(x); the (7,4) Hamming code is cyclic with g(x) = 1 + x + x^3, and the CRC family used in every network protocol is a cyclic code.",
              "Encoding is polynomial division: append n - k zeros to the message m(x), divide by g(x), and use the remainder as parity: c(x) = m(x) x^(n-k) + rem. Hardware: a shift register of length n - k with feedback taps at g(x)'s nonzero coefficients - the message clocks in, the remainder sits in the register, appended at the end. Decoding repeats the division on the received word: a nonzero remainder (syndrome polynomial) indicates error; for single-error-correcting cyclic codes the syndrome maps to the error position via the syndrome table.",
              "A worked encode with g(x) = 1 + x + x^3 (degree 3, (7,4)): message 1011 -> m(x) = 1 + x^2 + x^3; append 3 zeros: x^3 + x^5 + x^6; divide by g(x): remainder = 1 + x (check: c(x) = x^6 + x^5 + x^3 + x + 1 -> codeword 1101011... expressed LSB-first as 1011010 shifted conventions aside - the division steps are what the exam marks). The shift-register circuit has 3 flip-flops and XOR taps at positions 0, 1, 3; clocking the 7 bits leaves the remainder in the register.",
              "In the exam: state the divisibility definition and cyclic-shift closure, perform one polynomial division encode with g(x) = 1 + x + x^3, draw the LFSR encoder, and explain syndrome-based decoding. The remainder-as-parity arithmetic is the numerical core; the tap pattern = g(x) coefficients is the circuit core.",
            ],
            keyTerms: [
              { term: "Cyclic code", definition: "Linear block code closed under cyclic shifts; codewords divisible by g(x)." },
              { term: "Generator polynomial g(x)", definition: "Degree n - k divisor defining the code; its coefficients are the LFSR taps." },
              { term: "Remainder encoding", definition: "c(x) = m(x)x^(n-k) + (m(x)x^(n-k) mod g(x))." },
              { term: "LFSR encoder", definition: "n - k stage shift register with feedback taps per g(x)." },
            ],
            diagram: {
              kind: "pipeline",
              title: "Cyclic encoding by division",
              caption: "Shift message with appended zeros through the g(x) register; the remainder is the parity.",
              stages: [
                { label: "Message m(x)", note: "k bits" },
                { label: "Append n-k zeros", note: "m(x) x^(n-k)" },
                { label: "Divide by g(x)", note: "LFSR with taps per g" },
                { label: "Remainder", note: "n-k parity bits" },
                { label: "Codeword", note: "m followed by remainder" },
              ],
            },
            bullets: [
              "Cyclic closure: rotations of codewords are codewords.",
              "Validity test: g(x) divides c(x); g(x) degree n - k.",
              "Encoding: remainder of m(x)x^(n-k) / g(x) appended as parity.",
              "(7,4) Hamming as cyclic: g(x) = 1 + x + x^3.",
              "LFSR: flip-flops = n - k, XOR taps at g(x) coefficients (0, 1, 3).",
              "Decoder: same division; nonzero syndrome -> error location table.",
              "CRC family: cyclic codes used as error detectors in networking.",
            ],
            callout: {
              type: "warning",
              title: "Taps mirror g(x) exactly",
              body: "The LFSR feedback tap at stage i exists iff g(x) has the x^i term. Drawing the register without matching taps to the polynomial is the most common circuit-mark loss; annotate each tap with its polynomial term as you draw.",
            },
            codeExample: {
              language: "python",
              caption: "cyclic74.py - remainder encoding with g = 1+x+x^3",
              code: `def mod2_div(dividend, divisor):
    d = dividend[:]; n = len(divisor)
    for i in range(len(dividend) - n + 1):
        if d[i]:
            for j in range(n):
                d[i+j] ^= divisor[j]
    return d[-(n-1):]                 # remainder

g = [1,0,1,1]                          # 1 + x^2 + x^3 (MSB-first taps)
msg = [1,0,1,1]
aug = msg + [0,0,0]                    # append n-k = 3 zeros
rem = mod2_div(aug, g)
print("parity:", rem)                  # remainder bits
print("codeword:", msg + rem)`,
            },
            examQuestions: [
              {
                q: "Explain cyclic codes and their generator polynomial. Encode message 1011 with the (7,4) cyclic code using g(x) = 1 + x + x^3 by polynomial division, and sketch the LFSR encoder.",
                marks: 14,
                outline: [
                  "Definition: linear + cyclic-shift closure; divisibility by g(x)",
                  "g(x) = 1 + x + x^3, degree 3 -> (7,4)",
                  "Augment: m(x) x^3",
                  "Divide; remainder (3 bits) is the parity",
                  "Codeword = message + remainder",
                  "LFSR: 3 flip-flops, taps at x^0, x^1, x^3",
                  "Decoder: redivide; nonzero syndrome -> error table",
                ],
              },
              {
                q: "Why do cyclic codes dominate practical error detection (CRC)?",
                marks: 7,
                outline: [
                  "Shift-register encoders/decoders: minimal hardware",
                  "Strong burst-detection properties for chosen g(x)",
                  "Systematic form keeps the message intact inside the codeword",
                ],
              },
            ],
          },
          {
            number: "5.7",
            title: "Burst-error correction and convolutional codes",
            body: [
              "Random-error codes assume errors fall independently; real channels (fading, impulsive noise, tape defects) produce bursts - clusters of consecutive errors. Burst-error-correcting codes specialize in them: a code correcting bursts of length b must have its check structure spread wider than b; the cyclic Fire codes are the classical family, and interleaving is the universal practical technique - scrambling b independent codewords so a channel burst of length L spreads as ~L/b single errors across b codewords, which random-error correction then absorbs.",
              "The interleaving arithmetic makes it concrete: b codeframes of a single-error-correcting (7,4) code, written column-wise into a 7-row buffer and transmitted row-wise, converts any 7-bit channel burst into at most one error per codeword - each (7,4) word corrects its own. De-interleave at the receiver, correct, done. Cost: memory and latency of the buffer, zero rate loss - which is why interleaving ships in every cellular, storage and space standard.",
              "Convolutional codes take a different architecture: instead of block parity, the coder convolves the bit stream with a small memory - k bits in, n bits out per step, each output a parity of the current and previous K - 1 inputs (constraint length K). The (2,1,3) code with generators g1 = 111, g2 = 101 (octal 7, 5) outputs two bits per input bit at rate 1/2; its states form a trellis, and the Viterbi algorithm finds the maximum-likelihood path through it - the decoding engine behind deep-space links, GSM and 802.11 legacy rates.",
              "In the exam: define burst vs random errors, present Fire-code structure briefly and the interleaving arithmetic with the 7-row worked case, then explain convolutional encoding (K, generators, rate) and the Viterbi idea. The interleave-conversion sentence - burst to scattered singles - and the trellis picture are the marks.",
            ],
            keyTerms: [
              { term: "Burst error", definition: "Cluster of consecutive channel errors; characterized by burst length b." },
              { term: "Interleaving", definition: "Column-write/row-read spreading bursts into singles across b codewords." },
              { term: "Fire code", definition: "Cyclic burst-correcting code family with generator x^(2b-1) + ... structure." },
              { term: "Convolutional code", definition: "n outputs per input from constraint length K memory; trellis-structured." },
              { term: "Viterbi decoding", definition: "Maximum-likelihood path search through the trellis." },
            ],
            diagram: {
              kind: "compare",
              title: "Block parity vs convolutional memory",
              caption: "Two protection architectures - finite blocks with syndromes, or a streaming trellis.",
              left: {
                heading: "Block/cyclic + interleaving",
                items: [
                  "Bursts spread by column/row interleave",
                  "7-row buffer: 7-bit burst -> 7 single errors",
                  "Syndrome correction per block",
                  "Cost: buffering latency, zero rate loss",
                ],
              },
              right: {
                heading: "Convolutional + Viterbi",
                items: [
                  "Rate 1/2, K = 3 (generators 7, 5 octal)",
                  "Trellis of 2^(K-1) states",
                  "Viterbi: ML path search, soft decisions usable",
                  "Coding gain ~5-6 dB; deep-space standard",
                ],
              },
            },
            bullets: [
              "Bursts cluster; random-error codes waste their correction on them.",
              "Interleaving: b-way spread converts burst length L to ~L/b singles.",
              "Worked: 7-row interleave + (7,4) codes absorbs any 7-bit burst.",
              "Fire codes correct bursts cyclically without interleaving.",
              "Convolutional (2,1,3): generators g1 = 111, g2 = 101; rate 1/2.",
              "Trellis states = 2^(K-1) = 4 for K = 3; Viterbi finds ML path.",
              "Coding gain ~5-6 dB in Eb/N0; used with interleaving in real standards.",
            ],
            callout: {
              type: "tip",
              title: "Interleaving + convolutional is the real recipe",
              body: "Practical systems rarely choose one: GSM interleaves across 8 bursts AND convolutionally codes. Saying 'convolutional for random errors, interleaving for bursts, together for fading channels' is the systems-level sentence that lifts the answer.",
            },
            table: {
              caption: "Burst protection options.",
              headers: ["Technique", "Mechanism", "Cost"],
              rows: [
                ["Fire (cyclic) code", "g(x) designed for burst length b", "rate loss"],
                ["b-way interleaving", "spread burst over b codewords", "memory + latency"],
                ["Convolutional + Viterbi", "ML trellis decoding", "2^(K-1) states; delay"],
                ["Concatenated (RS + conv)", "inner conv, outer RS", "complexity; near-optimal"],
              ],
            },
            examQuestions: [
              {
                q: "Explain burst errors and how interleaving with block codes corrects them, with the worked 7-row case. Then describe convolutional codes (constraint length, generators, rate) and the Viterbi decoding concept.",
                marks: 14,
                outline: [
                  "Burst definition; random codes waste capability on clusters",
                  "Interleave: column-write, row-read; burst spread across frames",
                  "7-row + (7,4): any 7-bit burst -> one error per codeword",
                  "De-interleave, syndrome-correct each block",
                  "Convolutional: n out per input, K - 1 memory; (2,1,3) g = 7,5 octal",
                  "Trellis states 2^(K-1); branch metric; ML path",
                  "Viterbi: keep best path per state; traceback; ~5-6 dB gain",
                ],
              },
              {
                q: "Why does the Viterbi algorithm make convolutional codes practical?",
                marks: 7,
                outline: [
                  "Exhaustive ML search over sequences is exponential",
                  "Viterbi prunes per state - complexity linear in length x states",
                  "Soft-decision metrics integrate directly - near-optimal decoding",
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
        { topic: "Sampling theorem (LP + BP), aliasing, sampling types", weight: "≈ 10-12 marks", note: "Proofs plus the 8 kHz/2B worked numbers." },
        { topic: "PCM, quantization noise, companding", weight: "≈ 10-12 marks", note: "Derive 6.02n + 1.76 dB; A/mu-law with constants." },
        { topic: "Delta and adaptive modulation", weight: "≈ 8-10 marks", note: "Overload condition delta x fs >= 2 pi f A; ADM trace." },
        { topic: "Band-pass schemes: BPSK/QPSK/FSK/MSK/QAM", weight: "≈ 12-14 marks", note: "Pe formulas + bandwidth arithmetic + constellations." },
        { topic: "Matched filter, Gram-Schmidt, signal space", weight: "≈ 10 marks", note: "h(t) = s(T-t), SNR 2E/N0, one GS reduction." },
        { topic: "Error probability derivations", weight: "≈ 10 marks", note: "BPSK full derivation; M-QAM/M-PSK substitutions." },
        { topic: "Entropy, capacity, Shannon-Hartley", weight: "≈ 10-12 marks", note: "Numericals: H, 33.9 kbps, bandwidth trade." },
        { topic: "Block, cyclic, burst, convolutional codes", weight: "≈ 8-10 marks", note: "Hamming syndrome worked; g(x) division; interleave." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Two hours a day, five days a week, with weekends for derivations and numericals by hand. This subject rewards the Q-function and log2 fluency - drill the standard computations until they are reflexes.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - sampling and pulses", tasks: ["LP sampling proof + spectrum pictures", "Band-pass alias-free range + 4B-5B case", "Ideal/natural/flat-top comparison + aperture numbers", "TDM frame arithmetic; PAM/PWM/PPM generation-detection"] },
        { week: "Week 2", focus: "Unit II - PCM and delta", tasks: ["PCM chain + 64 kbps + T1 arithmetic", "Derive 6.02n + 1.76 dB; compute for n = 8/12", "A-law/mu-law formulas + segment tables", "DM overload condition; ADM step trace"] },
        { week: "Week 3", focus: "Unit III - band-pass schemes", tasks: ["OOK/BPSK/DPSK constellations + Pe at 10 dB", "QPSK orthogonal-arm proof + bandwidth halving", "MSK h = 0.5 derivation + spectrum table", "QAM eta ladder + 3 dB-per-bit rule"] },
        { week: "Week 4", focus: "Unit IV - detection theory", tasks: ["Matched filter derivation + 2E/N0", "Correlator-to-Pe four-line chain", "Gram-Schmidt on the 3-signal set", "Signal-space picture -> BPSK Pe"] },
        { week: "Week 5", focus: "Unit IV/V - Pe + information theory", tasks: ["M-QAM and M-PSK formula substitutions", "Entropy computations + Huffman build", "Shannon-Hartley numericals + BSC capacity", "Bandwidth-SNR trade table"] },
        { week: "Week 6", focus: "Unit V coding + revision", tasks: ["(7,4) encode + syndrome correct by hand", "Cyclic g(x) division + LFSR taps", "Interleave arithmetic; Viterbi concept", "Two full papers under time; formula-sheet drill"] },
      ],
    },
    {
      id: "exam-tips",
      heading: "Exam-hall strategy",
      examTips: [
        "Attach a spectrum or constellation drawing to every answer - these papers mark diagrams heavily.",
        "For Pe questions, write the four-line chain (variable -> event -> distance -> Q) even when quoting the formula.",
        "Keep the 3 dB geometry table handy mentally: antipodal < differential < orthogonal < envelope.",
        "Every bandwidth answer states shaped bandwidth (1 + beta)Rs/2 with the beta substitution.",
        "Numericals first, theory after: entropy H, capacity 33.9 kbps, SQNR 49.9 dB, QPSK 750 kHz - these numbers repeat across papers.",
        "For coding questions, actually perform the encode/syndrome/division - examiners mark the working, not the conclusion.",
        "State assumptions: uniform quantization, AWGN, coherent detection, Gray mapping - one line each before deriving.",
        "Time-box: 7 marks in 12 minutes, 14 in 22; the comparison-table question is a guaranteed scorer - do it early.",
      ],
    },
    {
      id: "slips",
      heading: "Last-day strategy and common slips",
      body: [
        "Last day: redraw the five anchor diagrams (sampling spectra, PCM chain, QPSK constellation, signal-space decision regions, cyclic LFSR), re-derive the four formulas (6.02n + 1.76 dB, BPSK Pe, Shannon-Hartley, M-QAM Pe), and re-run the four numericals (8 kHz voice chain, 16-QAM at 14 dB, 3.4 kHz at 30 dB, (7,4) syndrome). No new material tonight - consolidation wins this subject.",
      ],
      bullets: [
        "Sampling at exactly 2W with no guard band - practical filters cannot realize it; always state the guard band.",
        "Quoting SQNR without the derivation - the delta^2/12 step carries the marks.",
        "Confusing mu-law (255, 15 segments, T1) with A-law (87.56, 13 segments, E1).",
        "Writing QPSK bandwidth as Rb/4 without the (1 + beta) shaping factor.",
        "Claiming MSK's h = 0.5 is arbitrary - it is the minimum orthogonal spacing; derive it.",
        "Using Eb/N0 where Es/N0 belongs in M-ary formulas (Es = Eb log2 M).",
        "Gram-Schmidt: forgetting to normalize residuals to unit energy.",
        "Quoting Shannon's theorem only in the positive direction - the converse is the theorem's teeth.",
        "Forgetting count-minus-one style details in cyclic division (remainder width n - k).",
        "Drawing LFSR taps that do not match g(x)'s coefficients.",
        "Interleaving arithmetic: claiming a burst of length L needs L-way interleaving - it needs ~L/b for t = (b-1)/2... check the code's correction radius.",
        "Ending with definitions only - these papers want the worked number every time.",
      ],
    },
  ],
};
