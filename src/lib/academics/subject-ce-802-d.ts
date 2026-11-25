/**
 * Academics - RGPV Civil Engineering 8th-semester subject:
 * CE-802(D) Earthquake Resistant Design of Structure.
 *
 * Structure mirrors subject-cs-302.ts: units -> one chapter per unit ->
 * numbered sections.  Each section carries body paragraphs, five bullets,
 * a diagram, key terms, a callout, a table or python code sample, and three
 * exam-style questions (one 7-mark with outline + two shorts).
 *
 * Technical basis: IS 1893 (Part 1): 2002 and IS 13920: 1993, with the
 * seismology, dynamics, detailing and retrofit/isolation material that the
 * RGPV syllabus prescribes.
 */

import type { AcademicSubject } from "./types";

export const ce802d: AcademicSubject = {
  id: "ce-802-d",
  code: "CE-802(D)",
  title: "Earthquake Resistant Design of Structure",
  semester: "VIII Semester",
  program: "RGPV · Civil Engineering",
  tagline:
    "The complete visual guide to earthquake resistant design for RGPV civil: plate tectonics and seismic waves, structural dynamics and the response spectrum, the IS 1893 lateral force ladder, IS 13920 ductile detailing, and retrofitting with base isolation.",
  description:
    "Five units walk from the seismology that generates ground motion - plates, waves, magnitude and intensity - through the SDOF and MDOF dynamics every code clause rests on, into the full IS 1893 (Part 1): 2002 equivalent static procedure from zone factor to lateral force distribution, then capacity design and IS 13920 detailing that make the response reduction factor honest, and finally vulnerability assessment, jacketing, bracing, base isolation, control devices and the lessons of Bhuj 2001. Every section pairs the theory with a worked numeric, a redrawable diagram, and the exam questions RGPV actually asks.",
  accentColor: "#ef4444",
  emoji: "EQ",
  unitCount: 5,
  totalSections: 25,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Earthquake Basics",
      summary:
        "Seismology for the structural engineer: why earthquakes happen, how shaking travels to sites, how size and effect are measured, and how IS 1893 maps India's hazard into zone factors.",
      chapter: {
        number: "01",
        title: "Earthquake Fundamentals and Seismology",
        intro:
          "Unit I lays the seismological foundations: the plate tectonics that generates earthquakes, the body and surface waves that carry energy to sites, the magnitude and intensity scales that size events, the instruments that record them, and the IS 1893 zoning that converts geology into design numbers.",
        inOneBreath:
          "Plates creep 2 to 10 cm per year on a convecting mantle and meet at divergent, convergent and transform boundaries; elastic strain snaps back as seismic waves - P (compressional, fastest), S (shear, blocked by liquids), Love and Rayleigh (surface, slowest, most destructive); magnitude (Richter, moment) sizes the source while MSK intensity grades the local effect; accelerographs record three components above about 0.01 g; and IS 1893 zones II to V with Z from 0.10 to 0.36 turn hazard into the design chain Ah = (Z/2)(Sa/g)(I/R).",
        sections: [
          {
            number: "1.1",
            title: "Plate tectonics and the causes of earthquakes",
            body: [
              "The Earth's rigid outer shell, the lithosphere, is broken into about a dozen major plates and several minor ones that ride on the hot, slowly creeping asthenosphere below. Driven by mantle convection, slab pull at subduction zones and ridge push at spreading centres, the plates move between 2 and 10 cm per year - roughly the speed at which fingernails grow. Most of the world's seismicity, volcanism and mountain building concentrates along the narrow boundaries where plates are created, consumed or ground past each other. India sits on the northern edge of the Indo-Australian plate, colliding with Eurasia at about 5 cm per year.",
              "Three boundary styles generate earthquakes. At divergent boundaries such as the Mid-Atlantic Ridge, plates pull apart, upwelling magma forms new crust, and shallow moderate earthquakes occur. At convergent boundaries, oceanic plates subduct beneath their neighbours (the Pacific Ring of Fire) producing the largest and deepest events, or continents collide as in the Himalaya, where the continuing India-Eurasia convergence keeps the entire northern border of India seismically alive. At transform boundaries such as the San Andreas Fault, plates slide past each other and shallow strike-slip earthquakes dominate. Intraplate earthquakes, like Latur 1993 and Koyna 1967 in the supposedly stable Indian shield, rupture old weakened faults inside plates and catch engineers unprepared.",
              "The elastic rebound theory proposed by H.F. Reid after the 1906 San Francisco earthquake explains how strain is stored: rocks on either side of a fault deform elastically for decades until friction is overcome, then snap back, converting stored strain energy into heat, crushing and seismic waves. The point where rupture initiates is the focus or hypocentre; the point on the surface directly above it is the epicentre. Foci are classified as shallow (less than 70 km), intermediate (70 to 300 km) and deep (beyond 300 km); shallow events are the most damaging because their energy reaches populated surfaces with little attenuation. Indian seismicity mixes shallow Himalayan thrust events with rare intraplate ruptures in the peninsula.",
            ],
            bullets: [
              "Lithosphere: the rigid plates, 70-100 km thick, riding on the ductile asthenosphere.",
              "Driving forces: mantle convection, slab pull at subduction zones, ridge push at spreading ridges.",
              "Plate speeds: 2 to 10 cm per year - slow, but relentless on geological time.",
              "Boundary styles: divergent (shallow, moderate), convergent (largest and deepest), transform (shallow strike-slip).",
              "Elastic rebound (Reid): strain builds, friction yields, rock snaps back - stored energy leaves as seismic waves.",
            ],
            table: {
              caption: "The three plate boundary styles at a glance.",
              headers: ["Boundary", "Relative motion", "Typical quakes", "Example"],
              rows: [
                ["Divergent", "plates separate", "shallow, up to moderate", "Mid-Atlantic Ridge"],
                ["Convergent - subduction", "one plate dives below", "largest, deepest, tsunamis", "Andaman arc, Ring of Fire"],
                ["Convergent - collision", "continents crumple", "shallow, large, widespread", "Himalaya"],
                ["Transform", "lateral sliding", "shallow strike-slip", "San Andreas Fault"],
                ["Intraplate", "old interior faults slip", "rare, shallow, unexpected", "Latur 1993, Koyna 1967"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Where earthquakes are made: the layered Earth",
              caption:
                "Only the cool, brittle lithosphere stores elastic strain; the asthenosphere below flows and convects.",
              layers: [
                { label: "Crust - brittle, stores elastic strain", note: "quakes originate here" },
                { label: "Lithosphere - the moving plates", note: "70-100 km thick" },
                { label: "Asthenosphere - weak, slowly flowing", note: "permits plate motion" },
                { label: "Mantle - convection engine", note: "drives the plates from below" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Examiners love the trio 'plate tectonics - elastic rebound - focus versus epicentre'. Write the boundary table, name one Indian example per boundary (Himalaya for collision, the Andaman arc for subduction, Latur for intraplate), and close with Reid's elastic rebound sketch.",
            },
            keyTerms: [
              { term: "Lithosphere", definition: "The rigid outer shell of the Earth, broken into plates, typically 70-100 km thick." },
              { term: "Focus (hypocentre)", definition: "The point within the Earth where rupture initiates and seismic energy is first released." },
              { term: "Elastic rebound", definition: "Reid's theory that accumulated elastic strain is released suddenly when fault friction is overcome." },
            ],
            examQuestions: [
              {
                q: "Explain the theory of plate tectonics. Describe the three types of plate boundaries with one example of each, discuss the origin of intraplate earthquakes in India, and outline the elastic rebound theory with a neat sketch.",
                marks: 7,
                outline: [
                  "Define lithosphere, asthenosphere and plates; state plate speeds of 2-10 cm per year.",
                  "Name the driving mechanisms: mantle convection, slab pull, ridge push.",
                  "Divergent boundary: plates separate, new crust, shallow moderate events - Mid-Atlantic Ridge.",
                  "Convergent boundary: subduction (Andaman arc) and collision (Himalaya) - the largest events.",
                  "Transform boundary: lateral sliding, shallow strike-slip - San Andreas.",
                  "Intraplate quakes on old weak faults: Koyna 1967 and Latur 1993 in the Indian shield.",
                  "Elastic rebound (Reid, 1906): strain accumulates, the fault snaps, energy radiates; define focus and epicentre.",
                ],
              },
              {
                q: "Distinguish between the focus and the epicentre of an earthquake.",
                marks: 2,
              },
              {
                q: "Why do earthquakes occur within stable continental regions such as the Indian peninsular shield? Name two Indian examples.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.2",
            title: "Seismic waves: body and surface waves",
            body: [
              "When a fault ruptures, the released energy travels outward as elastic waves. Body waves pass through the Earth's interior. P (primary) waves are compressional: particles push and pull parallel to the direction of travel, like sound, at roughly 5 to 8 km/s - the fastest seismic waves and therefore the first to reach a distant station. They pass through solids, liquids and gases. S (secondary) waves are shear waves in which particles oscillate transverse to propagation; they travel at about 3 to 4.5 km/s, roughly 1.7 times slower than P waves, and they cannot propagate through liquids because fluids offer no shear resistance.",
              "Surface waves are generated when body waves reach the free surface. Love waves shear the ground horizontally, side to side, like a slithering snake; Rayleigh waves roll the ground in a retrograde elliptical motion reminiscent of ocean swells, producing both vertical and horizontal movement. Surface waves are the slowest, longest-period and largest-amplitude arrivals, and at distance from the epicentre they usually govern the damage: soft soils amplify them further, which is why alluvial cities suffer far more than hard-rock neighbours. Their long duration also drains energy from already-damaged structures, precipitating collapse.",
              "Engineers exploit the wave physics. The time gap between the P and S arrivals grows with distance - roughly 8 km of separation for every second of S-P delay - so a single station can find its distance to the earthquake and three stations triangulate the epicentre. The seismogram of any event reads like a timetable: a small P onset, a stronger S arrival, then a long, booming surface-wave train. For designers the crucial fact is direction: buildings carry a large reserve against gravity, but horizontal shaking - the Rayleigh and Love contribution - attacks the comparatively weak lateral system, which is why codes concentrate on horizontal components.",
            ],
            bullets: [
              "P waves: compressional, fastest (5-8 km/s), first arrival, travel through solids and liquids.",
              "S waves: shear, transverse motion, about 60 percent of P speed, blocked by liquids.",
              "Love waves: horizontal surface shear, snake-like; Rayleigh waves: rolling retrograde elliptical motion.",
              "Surface waves: slowest, largest amplitude, longest duration - the principal cause of damage.",
              "S-P interval: about 8 km of epicentral distance per second of delay; three stations fix the epicentre.",
            ],
            table: {
              caption: "The four seismic waves compared.",
              headers: ["Wave", "Type", "Particle motion", "Speed", "Damage role"],
              rows: [
                ["P", "body", "parallel (push-pull)", "5-8 km/s", "first arrival, small amplitude"],
                ["S", "body", "transverse shear", "3-4.5 km/s", "strong shaking on rock sites"],
                ["Love", "surface", "horizontal shear", "slower than S", "tears foundations and walls sideways"],
                ["Rayleigh", "surface", "rolling elliptical", "slowest", "largest, longest shaking; governs damage"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "From rupture to shaking",
              caption: "A seismogram in the making: arrivals sort themselves by speed.",
              steps: [
                { label: "Rupture at the focus" },
                { label: "P waves race ahead", note: "5-8 km/s, first tick on the record" },
                { label: "S waves follow", note: "about 60 percent of P speed" },
                { label: "Surface waves form at the free surface", note: "Love and Rayleigh" },
                { label: "Peak shaking arrives", note: "slow, large, long Rayleigh train" },
              ],
            },
            callout: {
              type: "tip",
              title: "Sketch the seismogram",
              body: "Draw the classic record: small P onset, bigger S arrival, mountainous surface-wave train. Labelling those three arrivals correctly is an easy two marks in any seismology question.",
            },
            keyTerms: [
              { term: "Body waves", definition: "P and S waves that travel through the Earth's interior." },
              { term: "Surface waves", definition: "Love and Rayleigh waves generated at the free surface; slowest but most destructive." },
              { term: "S-wave shadow zone", definition: "The band beyond about 103 degrees receiving no S waves - proof that the outer core is liquid." },
            ],
            examQuestions: [
              {
                q: "Describe P, S, Love and Rayleigh waves with particle-motion sketches. Explain why S waves cannot traverse the outer core and what the S-wave shadow zone proves. Why do surface waves dominate damage in cities?",
                marks: 7,
                outline: [
                  "Body versus surface waves; energy released at the focus.",
                  "P wave: compressional, 5-8 km/s, through all media, first arrival.",
                  "S wave: shear, 3-4.5 km/s, solids only, about 1.7 times slower.",
                  "S waves vanish beyond 103 degrees: the outer core is liquid - the shadow-zone argument.",
                  "Love: horizontal snake-like shear; Rayleigh: retrograde elliptical roll.",
                  "Surface waves slowest, largest amplitude, longest duration; soft-soil amplification.",
                  "Conclusion: distant damage is surface-wave driven; codes design for horizontal components.",
                ],
              },
              {
                q: "Why can S waves not travel through the Earth's outer core?",
                marks: 2,
              },
              {
                q: "How is the S-P time interval used to help locate the epicentre of an earthquake?",
                marks: 3,
              },
            ],
          },
          {
            number: "1.3",
            title: "Magnitude versus intensity: Richter and MSK scales",
            body: [
              "Magnitude measures the size of an earthquake at its source from instrument readings. Charles Richter (1935) defined the local magnitude ML as the base-10 logarithm of the amplitude, in microns, recorded on a standard Wood-Anderson torsion seismograph at an epicentral distance of 100 km, with distance corrections for other stations. The scale is open-ended and logarithmic: one magnitude step means ten times the ground amplitude and, because radiated energy scales as 10 to the power 1.5M, roughly 31.6 times the energy. For great earthquakes seismologists prefer moment magnitude Mw, derived from the seismic moment (rigidity times rupture area times slip), which does not saturate.",
              "Intensity measures the effect of shaking at a particular place - on people, structures and the ground. It falls with distance, sharpens on soft soil, and depends utterly on construction quality. India uses the MSK-64 scale of Medvedev, Sponheuer and Karnik - twelve degrees from I (imperceptible) to XII (total destruction) - similar to the Modified Mercalli scale used in the United States. Plotting intensity observations on a map and contouring them produces isoseismals, the fingerprints of a single event. A moment of thought settles the classic exam line: one earthquake has exactly one magnitude but as many intensities as there are places shaken.",
              "IS 1893 (Part 1): 2002 anchors its zoning to MSK intensities: zone II corresponds to about MSK VI, zone III to VII, zone IV to VIII, and zone V to IX and above. The Bhuj earthquake of 2001 had a moment magnitude of about 7.7 and released about 2 x 10^16 joules - more than a thousand magnitude-5 events combined - while intensity reached devastating levels in Kutch but only moderate levels in distant cities. Magnitude feeds hazard analysis and code maps; intensity feeds damage statistics, vulnerability curves and post-earthquake reconnaissance. State both scales correctly and the seven marks follow.",
            ],
            bullets: [
              "Richter ML: log of amplitude on a Wood-Anderson instrument at 100 km, with distance corrections.",
              "Each magnitude step: 10 times amplitude, about 31.6 times energy (10^1.5 per unit).",
              "Moment magnitude Mw: from seismic moment = rigidity x rupture area x slip; no saturation.",
              "MSK-64: twelve intensity degrees, I to XII, based on observed effects; used with IS 1893.",
              "One quake: one magnitude, many intensities - distance, soil and construction all matter.",
            ],
            codeExample: {
              language: "python",
              caption: "Energy and amplitude arithmetic behind the magnitude scale.",
              code: `import math

def energy_joules(M):
    """Gutenberg-Richter relation: log10(E) = 1.5 M + 4.8, E in joules."""
    return 10 ** (1.5 * M + 4.8)

# Bhuj 2001 (Mw about 7.7) versus a moderate magnitude-5 event
e_bhuJ = energy_joules(7.7)
e_five = energy_joules(5.0)

print("Bhuj 2001 energy :", format(e_bhuJ, ".3g"), "J")
print("Magnitude 5 energy:", format(e_five, ".3g"), "J")
print("Energy ratio      :", round(e_bhuJ / e_five), "times")

# One magnitude step multiplies recorded amplitude tenfold
print("Amplitude gain, M6 over M4:", 10 ** 2, "times")`,
            },
            diagram: {
              kind: "compare",
              title: "Magnitude versus intensity",
              caption: "Two rulers for one earthquake: energy released at the source versus effect felt at a site.",
              left: {
                heading: "Magnitude (size at source)",
                items: [
                  "Instrument-based, quantitative",
                  "One value per earthquake",
                  "Richter ML, moment Mw",
                  "Open-ended, logarithmic",
                  "Input for hazard maps",
                ],
              },
              right: {
                heading: "Intensity (effect at a place)",
                items: [
                  "Observation-based, qualitative",
                  "Many values - an isoseismal map",
                  "MSK-64: degrees I to XII",
                  "Falls with distance, rises on soft soil",
                  "Input for vulnerability studies",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "The guaranteed two marks",
              body: "Write 'one earthquake, one magnitude, many intensities'. Then quote Bhuj 2001: Mw about 7.7, MSK X and above in Kutch, only moderate intensity in Ahmedabad 250 km away - soil and soft storeys did the damage there.",
            },
            keyTerms: [
              { term: "Richter magnitude", definition: "Base-10 logarithm of the amplitude recorded on a standard seismograph at 100 km; open-ended scale." },
              { term: "MSK intensity", definition: "Twelve-degree scale of observed earthquake effects used in India, from imperceptible (I) to total destruction (XII)." },
              { term: "Isoseismal", definition: "A contour on a map joining places of equal intensity for one earthquake." },
            ],
            examQuestions: [
              {
                q: "Distinguish between the magnitude and the intensity of an earthquake. Explain the Richter and MSK-64 scales, describe an isoseismal map, and justify: 'a single earthquake has one magnitude but many intensities.'",
                marks: 7,
                outline: [
                  "Magnitude: source size, instrumental, logarithmic; Richter definition.",
                  "Amplitude scaling 10 times and energy scaling 31.6 times per magnitude step.",
                  "Moment magnitude for large events; no saturation.",
                  "Intensity: local effect; factors - distance, soil, construction quality.",
                  "MSK-64 twelve degrees I to XII; parallel with Modified Mercalli.",
                  "Isoseismal map: concentric contours with soft-soil bulges.",
                  "Conclusion with Bhuj 2001: Mw about 7.7, MSK X in Kutch, lower intensity far away.",
                ],
              },
              {
                q: "An earthquake measures ML 6. How much more energy does it release than an ML 4 event?",
                marks: 2,
              },
              {
                q: "Which MSK intensity values are associated with seismic zones III and IV in IS 1893?",
                marks: 3,
              },
            ],
          },
          {
            number: "1.4",
            title: "Seismographs and strong-motion instruments",
            body: [
              "Every seismograph exploits one idea: inertia. A mass is suspended by a spring and damper from a frame bolted to the ground; when the ground lurches, the frame moves with it but the mass lags, and the relative motion between them - recorded optically, electromagnetically or digitally - is the trace of the shaking. Damping is tuned so the mass returns to rest quickly instead of ringing. The Wood-Anderson torsion instrument, the machine that defines Richter magnitude, is one such device. Modern stations use broadband sensors with digital acquisition and GPS timing.",
              "Strong-motion instruments - accelerographs - are the engineer's cousins of the seismograph. They are far less sensitive, do not record until a threshold of about 0.01 g is exceeded, and can faithfully capture accelerations of a full g or more near a fault. They record three components: two horizontal and one vertical. Arrays of accelerographs in free fields, inside buildings and down boreholes - plus the post-2001 digital networks in India - supply the accelerograms on which code spectra rest. Integration with baseline correction converts an accelerogram to velocity and displacement time histories, and the key engineering parameters are read off: PGA, PGV, PGD, duration and frequency content.",
              "A recorded accelerogram is only a raw ingredient. Engineers reduce each record to a response spectrum, smooth ensembles of spectra from many events into design spectra, and match or generate time histories for nonlinear analysis. Strong-motion data also calibrate the attenuation relations used in hazard mapping and reveal site effects - the dramatic soft-soil amplifications of Mexico City in 1985 were diagnosed from instrument arrays. When a question asks 'how is a design spectrum obtained', the full chain - trigger, record, correct, integrate, respond, smooth - is the expected answer.",
            ],
            bullets: [
              "Principle: a damped suspended mass stands still by inertia while the ground and frame move.",
              "Seismograph: very sensitive, distant events, timing first; accelerograph: rugged, near-field, threshold about 0.01 g.",
              "Tri-axial recording: two horizontal components and one vertical.",
              "Accelerogram products: PGA, PGV, PGD, duration, frequency content.",
              "Spectra and attenuation laws are distilled from ensembles of strong-motion records.",
            ],
            table: {
              caption: "Seismograph versus strong-motion accelerograph.",
              headers: ["Aspect", "Seismograph", "Strong-motion accelerograph"],
              rows: [
                ["Purpose", "locate quakes, assign magnitudes", "engineering ground motion"],
                ["Sensitivity", "extremely high", "low, triggers in the near field"],
                ["Trigger", "records continuously", "starts above about 0.01 g"],
                ["Motion measured", "displacement", "acceleration, three components"],
                ["Typical output", "seismogram, arrival times", "accelerogram, PGA, spectra"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "From shaking to spectrum",
              caption: "The processing chain every design spectrum travels.",
              stages: [
                { label: "Accelerograph triggers", note: "PGA above about 0.01 g" },
                { label: "Tri-axial recording", note: "two horizontal, one vertical" },
                { label: "Correct and integrate", note: "PGA, PGV, PGD, duration" },
                { label: "Compute SDOF peak responses", note: "a family of oscillators" },
                { label: "Smooth into a design spectrum", note: "an ensemble of events" },
              ],
            },
            callout: {
              type: "tip",
              title: "Numbers examiners reuse",
              body: "Remember the trigger threshold (about 0.01 g) and the three recorded components - both appear regularly as two-mark shorts in the seismology part of the paper.",
            },
            keyTerms: [
              { term: "Seismograph", definition: "An instrument that records the relative motion between an inertial mass and the shaking ground." },
              { term: "Accelerogram", definition: "The record of ground acceleration versus time from a strong-motion instrument." },
              { term: "PGA", definition: "Peak ground acceleration: the maximum absolute ground acceleration at a site; the anchor of design spectra." },
            ],
            examQuestions: [
              {
                q: "Explain the working principle of a seismograph with a neat sketch. How does a strong-motion accelerograph differ from it, and which strong-motion parameters does the earthquake engineer extract from its records?",
                marks: 7,
                outline: [
                  "Inertial mass, spring and damper; the frame moves, the mass lags.",
                  "Damping prevents free ringing; relative motion is the record.",
                  "Seismograph: high sensitivity, teleseismic events; Wood-Anderson and Richter.",
                  "Accelerograph: threshold about 0.01 g, near-field, up to and beyond 1 g.",
                  "Tri-axial components; digital acquisition and GPS timing.",
                  "Derived parameters: PGA, PGV, PGD, duration, frequency content.",
                  "Uses: design spectra, time histories, attenuation relations, site-effect studies.",
                ],
              },
              {
                q: "What is peak ground acceleration and why do codes normalize design spectra to it?",
                marks: 2,
              },
              {
                q: "Why do strong-motion instruments record two horizontal components in addition to the vertical?",
                marks: 3,
              },
            ],
          },
          {
            number: "1.5",
            title: "Seismic zones of India: the IS 1893 map",
            body: [
              "A seismic zone is a region mapped to an expected level of shaking. IS 1893 (Part 1): 2002 divides India into four zones - II, III, IV and V - replacing the five-zone map of the 1984 version by merging the old zone I into zone II. Each zone carries a zone factor Z, the zero-period peak ground acceleration expected for the maximum considered earthquake: 0.10 for zone II, 0.16 for III, 0.24 for IV and 0.36 for V. Because the code designs for about half the MCE motion, the effective design acceleration is Z/2.",
              "The map follows India's tectonics. The Himalayan collision belt from Kashmir through Himachal and Uttarakhand to the Northeast, the Kutch region and the Andaman-Nicobar subduction arc fall in zone V; the Indo-Gangetic belt and Jammu and Kashmir sit largely in zone IV; Mumbai, Pune, Koyna and Jabalpur lie in zone III; most of the peninsular interior is zone II. The shield was once considered stable, but Koyna 1967, Latur 1993 and Jabalpur 1997 exposed intraplate risk, and about 59 percent of India's landmass is now rated prone to moderate-to-severe shaking. Delhi and Guwahati, in zones IV and V, carry the largest urban exposure.",
              "The zone factor enters design through the seismic coefficient Ah = (Z/2)(Sa/g)(I/R), and zone-wise MSK intensities underpin the mapping - VI for zone II, VII for III, VIII for IV, and IX and above for V. Critical facilities require site-specific hazard studies, and metropolitan areas increasingly use microzonation - city-scale maps refining ground motion, soil amplification and liquefaction susceptibility, as prepared for Jabalpur, Delhi and Bangalore after 2001. The 2016 revision of the code retains the same zones and factors. Memorize the Z table: it is quoted in almost every numerical question of this subject.",
            ],
            bullets: [
              "Four zones: II, III, IV, V; zone I of the 1984 code was merged into II.",
              "Zone factor Z (MCE zero-period acceleration): 0.10, 0.16, 0.24, 0.36 for zones II to V.",
              "Design uses Z/2 - approximately the design basis earthquake.",
              "Zone V: Himalayan belt, Northeast, Kutch, Andaman; about 59 percent of India is prone.",
              "Microzonation refines the macro map for cities: ground motion, amplification, liquefaction.",
            ],
            table: {
              caption: "IS 1893 (Part 1): 2002 seismic zones of India.",
              headers: ["Zone", "Damage risk (MSK)", "Z factor", "Representative regions"],
              rows: [
                ["II", "Low, about VI", "0.10", "peninsular interior, Bengaluru, Hyderabad"],
                ["III", "Moderate, VII", "0.16", "Mumbai, Pune, Koyna, Jabalpur, Lucknow"],
                ["IV", "Severe, VIII", "0.24", "Delhi, Dehradun, Patna, Jammu"],
                ["V", "Very severe, IX and above", "0.36", "Kutch, Himachal, Northeast, Andaman, Srinagar"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "The hazard pyramid of India",
              caption: "From the wide, quiet interior to the narrow, violent boundary belts (top tier = highest hazard).",
              tiers: [
                { label: "Zone V - very severe", note: "Z = 0.36; Kutch, Northeast, Andaman" },
                { label: "Zone IV - severe", note: "Z = 0.24; Delhi, Dehradun, Patna" },
                { label: "Zone III - moderate", note: "Z = 0.16; Mumbai, Koyna, Jabalpur" },
                { label: "Zone II - low", note: "Z = 0.10; most of the peninsular shield" },
              ],
            },
            callout: {
              type: "exam",
              title: "Memorize the Z table",
              body: "The Z table (0.10, 0.16, 0.24, 0.36) plus the MSK pairing (VI to IX and above) is a standing objective question - and the first input of every base-shear numerical in Units II and III.",
            },
            keyTerms: [
              { term: "Zone factor", definition: "Code value of the MCE zero-period peak ground acceleration of a zone: 0.10 to 0.36." },
              { term: "Microzonation", definition: "City-scale hazard mapping of ground motion, site amplification and liquefaction potential." },
              { term: "Maximum considered earthquake (MCE)", definition: "The most severe earthquake motion used for zoning; design forces use about half of it." },
            ],
            examQuestions: [
              {
                q: "Describe the seismic zoning of India according to IS 1893 (Part 1): 2002. Tabulate the zones with zone factors and MSK intensities, name regions falling in zones IV and V, and explain the role of Z in design.",
                marks: 7,
                outline: [
                  "Four zones after 2002 (old zone I merged into II); basis: tectonics and history.",
                  "Z table: 0.10 / 0.16 / 0.24 / 0.36; MSK VI / VII / VIII / IX and above.",
                  "Zone V regions: Kutch, the Himalayan belt, the Northeast, the Andaman arc.",
                  "Zone IV: Delhi, Dehradun, Patna; zone III: Mumbai, Koyna, Jabalpur.",
                  "Koyna, Latur, Jabalpur: intraplate events that reshaped the hazard view; 59 percent of land at risk.",
                  "Z enters Ah = (Z/2)(Sa/g)(I/R); Z/2 approximates the design basis earthquake.",
                  "Site-specific studies and microzonation for critical projects and cities.",
                ],
              },
              {
                q: "State the zone factors for zones II to V as per IS 1893 (Part 1): 2002.",
                marks: 2,
              },
              {
                q: "Why were the areas of former zone I merged into zone II in the 2002 code?",
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
      title: "Structural Dynamics Review",
      summary:
        "The dynamics beneath the code: SDOF and MDOF behaviour, the response spectrum, and the ductility and reduction factors that let yielding structures survive forces they were never designed to resist elastically.",
      chapter: {
        number: "02",
        title: "Structural Dynamics for Earthquake Engineering",
        intro:
          "Unit II reviews the dynamics that every code clause quietly assumes: the SDOF oscillator and its equation of motion, multi-degree systems and their modes, the response spectrum that converts time histories into design curves, and the ductility and reduction factors that bridge elastic analysis and inelastic reality.",
        inOneBreath:
          "An SDOF obeys m x'' + c x' + k x = -m x''g with T = 2 pi sqrt(m/k) and zeta = c / (2 sqrt(km)); MDOF systems diagonalize into orthogonal modes combined by SRSS or CQC until 90 percent of the mass participates; the response spectrum plots peak SDOF response against period - for IS 1893, 1 + 15T to 0.1 s, a 2.5 plateau to a soil corner of 0.40/0.55/0.67 s, then 1.36/T; ductility lets members yield and dissipate energy; and R = Rmu x Rs x Rr shrinks the elastic demand from 5.0 (SMRF) to 1.5 (masonry) in exchange for detailing.",
        sections: [
          {
            number: "2.1",
            title: "SDOF systems: equation of motion and free vibration",
            body: [
              "Almost every seismic code clause is a condensed piece of structural dynamics, and the condenser is the single-degree-of-freedom system. An idealized storey - a mass m concentrated at the floor, a spring of stiffness k representing the columns, and a damper c - is base-excited by ground acceleration. Writing equilibrium among the inertia force, the damping force and the elastic force gives the equation of motion: m x'' + c x' + k x = -m x''g, where x is displacement measured relative to the moving ground. Everything a code formula does later begins on this one line.",
              "Free vibration reveals the system's signature quantities: the natural circular frequency omega-n = sqrt(k/m), the natural period T = 2 pi sqrt(m/k), and the frequency f = 1/T. The damping ratio zeta = c divided by the critical damping 2 sqrt(km) describes energy loss; most structures sit between 2 and 5 percent, and IS 1893 spectra are drawn for 5 percent. Under-damped free vibration decays exponentially, and the logarithmic decrement of successive peaks measures zeta. Under harmonic loading, response amplifies violently near resonance - when the forcing period equals T - which is why a soft-soil site whose dominant period matches a building's period is a deadly combination.",
              "Earthquake excitation is transient rather than harmonic, so the response depends on the ratio of the ground motion's period content to the structure's period: short, stiff structures suffer acceleration; long, flexible ones suffer displacement. The Duhamel integral, or direct numerical integration, solves the response history; alternatively, the response spectrum hands the peak answer directly. A quick rule of thumb pegs a RC building's period near 0.1 s per storey, linking everyday design to the SDOF mathematics. A worked frame with m = 200000 kg and k = 12 x 10^6 N/m has omega-n = 7.75 rad/s and T = 0.81 s.",
            ],
            bullets: [
              "SDOF idealization: mass m at the floor, spring k from the columns, damper c.",
              "Equation of motion: m x'' + c x' + k x = -m x''g (relative displacement formulation).",
              "omega-n = sqrt(k/m); T = 2 pi sqrt(m/k); f = 1/T.",
              "Damping ratio zeta = c / (2 sqrt(km)); code spectra assume 5 percent.",
              "Resonance when the forcing matches the natural period; soft-soil resonance is deadly (Mexico City 1985).",
            ],
            codeExample: {
              language: "python",
              caption: "Natural period and damping of a one-storey frame.",
              code: `import math

m = 200000.0   # seismic mass of the floor, kg
k = 12.0e6     # storey lateral stiffness, N/m

omega_n = math.sqrt(k / m)          # natural circular frequency, rad/s
T = 2 * math.pi / omega_n           # natural period, s
f = 1 / T                           # natural frequency, Hz

c_crit = 2 * math.sqrt(k * m)       # critical damping, N-s/m
zeta = 0.05                         # 5 percent - the code value
omega_d = omega_n * math.sqrt(1 - zeta ** 2)   # damped frequency

print("omega_n       =", round(omega_n, 2), "rad/s")
print("T             =", round(T, 3), "s")
print("f             =", round(f, 3), "Hz")
print("damped omega_d =", round(omega_d, 2), "rad/s")`,
            },
            diagram: {
              kind: "flow",
              title: "Solving an SDOF earthquake problem",
              caption: "The route every dynamics numerical follows.",
              steps: [
                { label: "Idealize: m, k, c" },
                { label: "Write the equation of motion", note: "m x'' + c x' + k x = -m x''g" },
                { label: "Compute omega-n, T, zeta" },
                { label: "Choose the solution route", note: "Duhamel, step integration, or spectrum" },
                { label: "Read the peak response", note: "Sa from the design spectrum" },
              ],
            },
            callout: {
              type: "tip",
              title: "Always compute T first",
              body: "The examiner's next demand will be Sa/g from the IS 1893 spectrum, which needs T. Chain them without pause: T, then Sa/g, then Ah, then VB - the same chain appears in Unit III.",
            },
            keyTerms: [
              { term: "SDOF system", definition: "An idealization with one mass and one displacement coordinate." },
              { term: "Natural period", definition: "T = 2 pi sqrt(m/k): the period of free vibration of the undamped system." },
              { term: "Damping ratio", definition: "Actual damping divided by critical damping 2 sqrt(km); 5 percent is the code value." },
            ],
            examQuestions: [
              {
                q: "Derive the equation of motion of an SDOF system subjected to base excitation, define the natural period and damping ratio, and compute T for a frame with m = 200000 kg and k = 12 x 10^6 N/m.",
                marks: 7,
                outline: [
                  "Sketch the mass, spring and damper on a moving base.",
                  "D'Alembert equilibrium: inertia + damping + elastic forces balance the excitation.",
                  "Result: m x'' + c x' + k x = -m x''g, with x relative to the ground.",
                  "omega-n = sqrt(k/m) = 7.75 rad/s.",
                  "T = 2 pi sqrt(m/k) = 2 pi sqrt(2e5 / 1.2e7) = 0.81 s.",
                  "zeta = c / (2 sqrt(km)); code spectra assume 5 percent.",
                  "Comment: the 0.1 s per storey rule gives the same order for a four-storey frame.",
                ],
              },
              {
                q: "Define critical damping.",
                marks: 2,
              },
              {
                q: "If the lateral storey stiffness of a building is doubled, how does its natural period change?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.2",
            title: "MDOF systems, mode shapes and mass participation",
            body: [
              "A real building has many masses and many coupled displacement coordinates. An N-storey idealization yields N simultaneous equations written compactly as M x'' + C x' + K x = -M r x''g, with M, C and K the mass, damping and stiffness matrices and r the influence vector. The undamped free-vibration problem - the eigenvalue problem - delivers N natural frequencies and N mode shapes: deformation patterns in which the structure oscillates freely. Modes are orthogonal to one another, and that orthogonality is the mathematical licence to treat each mode as an independent SDOF oscillator.",
              "Mode superposition exploits the licence: the response is decomposed into modal responses, each governed by a modal SDOF with its own period, and the modal maxima are combined - by the square-root-of-sum-of-squares (SRSS) rule when modes are well separated, or by the complete quadratic combination (CQC) when frequencies cluster, as they do in torsionally irregular plans. The code requires enough modes to be captured for at least 90 percent of the mass to participate. For regular low-rise buildings the first mode alone mobilizes 80 percent or more of the mass, which is precisely why the equivalent static method with its inverted-triangle force pattern succeeds.",
              "Higher modes rise in importance as buildings grow taller and plans grow irregular: they add shear to the upper storeys and rotate torsionally irregular floors. IS 1893 therefore mandates dynamic analysis - response spectrum or time history - for regular buildings above 40 m in zones II and III, above 90 m in zones IV and V, and for irregular buildings above 12 m in any zone. Torsionally coupled buildings must carry their calculated and accidental eccentricities through every mode. And when the dynamic base shear falls below the static estimate, code scaling pulls the design forces back up.",
            ],
            bullets: [
              "MDOF: M x'' + C x' + K x = -M r x''g; N coupled equations for N storeys.",
              "The eigenvalue problem yields N frequencies and N orthogonal mode shapes.",
              "Mode superposition: each mode behaves as an SDOF with modal mass and stiffness.",
              "Combine modal maxima by SRSS (separated modes) or CQC (closely spaced modes).",
              "90 percent mass participation rule; the first mode dominates regular low-rise buildings.",
            ],
            table: {
              caption: "SDOF versus MDOF idealizations.",
              headers: ["Aspect", "SDOF", "MDOF"],
              rows: [
                ["Equations", "one scalar equation", "N coupled matrix equations"],
                ["Frequencies", "one natural period", "N modes with mode shapes"],
                ["Method", "Duhamel or spectrum", "mode superposition, SRSS or CQC"],
                ["Code use", "concept behind spectra", "dynamic analysis of tall or irregular buildings"],
                ["Participation", "all mass in one mode", "90 percent mass participation required"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "Where the response lives",
              caption: "Mode participation in a regular building: the first mode towers over the rest (widest tier = largest share).",
              tiers: [
                { label: "Modes 3 and higher", note: "small; captured for the 90 percent rule" },
                { label: "Mode 2", note: "secondary; matters in the upper storeys" },
                { label: "Mode 1 - fundamental", note: "about 80 percent of the mass; governs low-rise design" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Write the matrix equation, then define mode shapes as orthogonal free-vibration patterns - that definition alone earns two of the seven marks. Finish with SRSS, CQC and the 90 percent rule.",
            },
            keyTerms: [
              { term: "Mode shape", definition: "An orthogonal free-vibration deformation pattern of an MDOF system." },
              { term: "Mode superposition", definition: "Decomposing the seismic response into independent modal (SDOF) responses." },
              { term: "Mass participation", definition: "The fraction of total mass mobilized by a mode; the code demands 90 percent overall." },
            ],
            examQuestions: [
              {
                q: "Explain mode superposition analysis of MDOF systems. What are mode shapes and mass participation, why are modal maxima combined by SRSS or CQC, and when does IS 1893 require dynamic analysis?",
                marks: 7,
                outline: [
                  "Matrix equation M x'' + C x' + K x = -M r x''g.",
                  "Eigenvalue problem; N modes; orthogonality.",
                  "Each mode is an SDOF with modal mass and period; solve via the spectrum.",
                  "SRSS for well-separated modes; CQC for closely spaced ones.",
                  "90 percent mass participation rule; first-mode dominance in low-rise buildings.",
                  "Dynamic analysis: regular over 40 m (zones II-III), over 90 m (zones IV-V), irregular over 12 m.",
                  "Scale the dynamic base shear up to the static value when it is lower.",
                ],
              },
              {
                q: "Define a mode shape.",
                marks: 2,
              },
              {
                q: "Why does the first mode usually govern the response of regular low-rise buildings?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.3",
            title: "The response spectrum",
            body: [
              "A response spectrum condenses a complete time history into a single design-friendly curve. Take the ground motion, pass it through a family of SDOF oscillators of every period but identical damping - 5 percent by code convention - and plot each oscillator's peak response against its natural period. The result, spectral acceleration Sa (or velocity or displacement) versus T, tells the designer the peak force a structure of that period would feel, replacing a costly time-history analysis with a single lookup.",
              "The IS 1893 design spectrum is a smoothed envelope of many such curves. For 5 percent damping: Sa/g rises as 1 + 15T from zero period to 0.1 s; holds a plateau of 2.5 from 0.1 s to a soil-dependent corner - 0.40 s for rock or hard soil, 0.55 s for medium, 0.67 s for soft; then falls as 1.36/T. Soft soil keeps amplification high at longer periods, the effect that destroyed mid-rise buildings on Mexico City's lakebed in 1985. A building whose period sits inside the plateau receives two and a half times the zero-period acceleration - a sobering thought for stiff low-rise frames.",
              "Spectra enter design twice: directly in the equivalent static method, where Ah = (Z/2)(Sa/g)(I/R) reads the spectrum at the empirical period, and in modal response spectrum analysis, where every mode reads it at its own period before the results combine. Smooth code spectra are envelopes of recorded and simulated motions scaled to the zone's PGA; ductility-reduced (inelastic) spectra pre-divide by R. For critical or unusual structures, site-specific spectra from a hazard analysis replace the code curve. Every numerical chain in this subject passes through the spectral values, so the three branch equations must be memorized.",
            ],
            bullets: [
              "Definition: peak SDOF response versus natural period for a given ground motion.",
              "Rising branch: Sa/g = 1 + 15T up to T = 0.1 s.",
              "Plateau: Sa/g = 2.5 out to 0.40 / 0.55 / 0.67 s by soil type (hard / medium / soft).",
              "Falling branch: Sa/g = 1.36/T beyond the corner period.",
              "One lookup replaces a full time-history analysis - the spectrum is the code's currency.",
            ],
            codeExample: {
              language: "python",
              caption: "Reading the IS 1893 (Part 1): 2002 design spectrum.",
              code: `def is1893_spectral(T, soil="medium"):
    """IS 1893 (Part 1): 2002 design spectrum, 5 percent damping."""
    corner = {"hard": 0.40, "medium": 0.55, "soft": 0.67}[soil]
    if T < 0.10:
        return 1.0 + 15.0 * T        # rising branch
    if T <= corner:
        return 2.5                    # plateau
    return 1.36 / T                   # falling branch

for T in (0.08, 0.30, 0.55, 0.60, 1.20):
    print("T =", round(T, 2),
          "s -> Sa/g =", round(is1893_spectral(T), 3))`,
            },
            diagram: {
              kind: "pipeline",
              title: "Building a design spectrum",
              caption: "From raw records to the smooth curve the code prints.",
              stages: [
                { label: "Collect accelerograms", note: "recorded plus simulated, scaled to the zone" },
                { label: "Run a family of SDOF oscillators", note: "every period, 5 percent damping" },
                { label: "Extract peak response per period", note: "Sa, Sv, Sd" },
                { label: "Envelope and smooth", note: "soil-dependent corners" },
                { label: "Publish as the code curve", note: "1 + 15T, then 2.5, then 1.36/T" },
              ],
            },
            callout: {
              type: "exam",
              title: "Reproduce the curve",
              body: "The three equations (1 + 15T, 2.5, 1.36/T) and the three corner periods (0.40 / 0.55 / 0.67 s) are certain to be examined. Practise drawing the spectrum with axes labelled Sa/g against T.",
            },
            keyTerms: [
              { term: "Response spectrum", definition: "A plot of the peak response of SDOF oscillators of varying period to a given ground motion." },
              { term: "Design spectrum", definition: "A smoothed envelope of response spectra adopted by codes for design." },
              { term: "Spectral amplification", definition: "The plateau factor - 2.5 in IS 1893 - by which peak ground acceleration is magnified for periods between 0.1 s and the soil corner." },
            ],
            examQuestions: [
              {
                q: "Define the response spectrum and explain how it is constructed from an accelerogram. Reproduce the IS 1893 five-percent-damped design spectrum with its equations, and explain the influence of soil type.",
                marks: 7,
                outline: [
                  "Definition: family of SDOF oscillators; peak response plotted against period.",
                  "Construction: one record, fixed damping, sweep the periods.",
                  "Rising branch 1 + 15T to 0.1 s; plateau 2.5; falling branch 1.36/T.",
                  "Corners: 0.40 s hard, 0.55 s medium, 0.67 s soft soil.",
                  "Soft soil prolongs amplification - Mexico City 1985 example.",
                  "Uses: Ah in the static method; modal analysis; site-specific replacement.",
                  "Sketch with axes labelled and T = 0.1 s plus the corner marked.",
                ],
              },
              {
                q: "Compute Sa/g for a medium-soil site if the fundamental period is 0.6 s.",
                marks: 2,
              },
              {
                q: "Why is a smooth design spectrum used instead of the spectrum of a single recorded motion?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.4",
            title: "Ductility and inelastic response",
            body: [
              "Ductility is the capacity to deform well beyond first yield while continuing to carry load - the structural equivalent of bending before breaking. Displacement ductility mu is the ratio of ultimate to yield displacement; curvature ductility, the section-level counterpart, is several times larger because plastic rotation concentrates in hinge zones. The opposite pole is brittleness: shear failure in concrete, bond slip and compression failure announce nothing and collapse without warning. Earthquake-resistant design is largely the art of arranging ductile flexural yielding and suppressing brittle modes.",
              "Why allow yielding at all? Designing a building to remain elastic in the maximum considered earthquake is possible but economically absurd; codes instead reduce the elastic force demand by the response reduction factor and let the structure dissipate the difference through hysteretic energy release at plastic hinges. Newmark's classic findings formalize the trade: for structures with periods beyond the spectrum corner, peak displacements stay near the elastic value (the equal displacement rule), so strength can drop in proportion to ductility; short, stiff structures follow equal energy, with a force reduction of the order of sqrt(2 mu - 1).",
              "Ductility is delivered by detailing, not by analysis. Confinement by closely spaced closed hoops multiplies the failure strain of core concrete; strong-column weak-beam design spreads hinges over many beams instead of concentrating them in one storey; capacity design protects joints, shear zones and connections by making them stronger than the flexural capacity of the members feeding them. Mild steel with a long yield plateau, IS 13920 transverse reinforcement and careful lap placement complete the recipe. A special moment-resisting frame is expected to sustain a displacement ductility of roughly 3 to 5.",
            ],
            bullets: [
              "Ductility: deformation capacity beyond yield with strength retained.",
              "Displacement ductility mu = ultimate displacement / yield displacement; curvature ductility is larger still.",
              "Equal displacement rule (long periods): strength drops with mu without extra drift.",
              "Equal energy rule (short periods): reduction of the order of sqrt(2 mu - 1).",
              "Ductility comes from detailing: confinement, hinges in beams, capacity design.",
            ],
            table: {
              caption: "Brittle versus ductile structural response.",
              headers: ["Aspect", "Brittle", "Ductile"],
              rows: [
                ["Warning", "none, sudden", "large visible deformations"],
                ["Failure mode", "shear, bond, compression", "flexural yielding"],
                ["Energy", "little dissipated", "hysteresis loops absorb energy"],
                ["Collapse", "abrupt, no escape time", "gradual, load path survives"],
                ["Design remedy", "prevent by capacity design", "create by IS 13920 detailing"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Two ways to fail",
              caption: "The same earthquake, two very different endings.",
              left: {
                heading: "Brittle member",
                items: [
                  "Diagonal shear crack opens",
                  "Cover spalls, bar bond lost",
                  "Load drops suddenly",
                  "No deformation capacity",
                  "Capacity design must prevent it",
                ],
              },
              right: {
                heading: "Ductile member",
                items: [
                  "Flexural crack, steel yields",
                  "Plastic hinge rotates",
                  "Force held while it deforms",
                  "Energy dissipated in hysteresis",
                  "IS 13920 detailing creates it",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "Detailing, not R",
              body: "Never write 'ductility is provided by choosing a higher R factor'. R is a promise; detailing is the collateral. Examiners specifically hunt for this confusion in theory answers.",
            },
            keyTerms: [
              { term: "Ductility", definition: "The ability to deform beyond yield without significant loss of strength." },
              { term: "Plastic hinge", definition: "The yielded region of a member that rotates under near-constant moment." },
              { term: "Displacement ductility ratio", definition: "Ultimate displacement divided by yield displacement, mu." },
            ],
            examQuestions: [
              {
                q: "Define ductility and distinguish displacement ductility from curvature ductility. Using the equal displacement and equal energy concepts, explain why codes permit design forces below the elastic demand, and state how ductility is achieved in RC buildings.",
                marks: 7,
                outline: [
                  "Define ductility; contrast brittle and ductile behaviour.",
                  "mu = delta-u / delta-y; curvature ductility is the larger, section-level quantity.",
                  "Elastic design for the MCE is uneconomical; hysteretic energy dissipation is the alternative.",
                  "Equal displacement (long period): displacement unchanged; strength falls with mu.",
                  "Equal energy (short period): reduction of order sqrt(2 mu - 1).",
                  "Detailing delivers it: confinement hoops, SCWB, capacity design, mild steel.",
                  "A special moment frame targets mu of roughly 3 to 5.",
                ],
              },
              {
                q: "Define the displacement ductility ratio.",
                marks: 2,
              },
              {
                q: "State two brittle failure modes in RC members that detailing must prevent.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.5",
            title: "The response reduction factor R",
            body: [
              "The response reduction factor R is the ratio between the force a perfectly elastic structure would feel and the much smaller force the code asks it to be designed for. Its justification has three strands. Ductility: plastic hysteresis dissipates energy, letting the structure survive displacements larger than its elastic strength would allow. Overstrength: real members are stronger than design forces - material characteristic values, strain hardening, minimum sizes and detailing requirements pile reserve capacity into every member. Redundancy: many parallel load paths let the structure redistribute forces as individual members yield.",
              "Formally R is decomposed as the product of the ductility factor Rmu, the overstrength factor Rs and the redundancy factor Rr. IS 1893 tabulates R by lateral system: 1.5 for unreinforced masonry load-bearing walls, 2.5 for reinforced masonry, 3.0 for an ordinary RC moment-resisting frame (OMRF, designed only to IS 456), and 5.0 for a special moment-resisting frame (SMRF) detailed to IS 13920; steel systems occupy a similar band. Choosing a large R is not a discount - it is a contract to supply ductility through detailing, testing and inspection.",
              "The abuse of R is the classic fatal error. A structure analysed with R = 5 but built with IS 456-level detailing will be asked to dissipate a five-fold energy it cannot deliver - precisely the pathology of several Ahmedabad buildings in 2001, designed to older provisions while assuming SMRF behaviour. Base isolation takes the opposite bargain: cutting demand rather than supplying ductility, keeping the superstructure nearly elastic. Between them, R, overstrength and the load factors define the gap between analysis and reality; the responsible designer keeps that gap deliberate.",
            ],
            bullets: [
              "R = elastic force demand / code design force.",
              "Components: R = Rmu (ductility) x Rs (overstrength) x Rr (redundancy).",
              "IS 1893 values: masonry 1.5 to 2.5, RC OMRF 3.0, RC SMRF 5.0, steel about 4.0.",
              "R = 5 is a contract: full IS 13920 detailing must back it.",
              "Isolation reduces the demand instead of demanding ductility.",
            ],
            table: {
              caption: "IS 1893 (Part 1): 2002 response reduction factors (selected systems).",
              headers: ["Lateral system", "R", "Detailing demanded"],
              rows: [
                ["Unreinforced masonry walls", "1.5", "nominal ductility only"],
                ["Reinforced masonry walls", "2.5", "bands and reinforcement"],
                ["RC ordinary moment frame (OMRF)", "3.0", "IS 456, no special detailing"],
                ["RC special moment frame (SMRF)", "5.0", "full IS 13920 ductile detailing"],
                ["Ordinary steel moment frame", "4.0", "IS 800 with attention to connections"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "What R buys, layer by layer",
              caption: "Three reserves hide inside every response reduction factor.",
              layers: [
                { label: "Redundancy Rr", note: "many load paths; force redistributes" },
                { label: "Overstrength Rs", note: "real capacity above the design force" },
                { label: "Ductility Rmu", note: "hysteretic energy dissipation at hinges" },
              ],
            },
            callout: {
              type: "warning",
              title: "The Ahmedabad lesson in one line",
              body: "Quoting SMRF's R = 5 without IS 13920 detailing builds a five-fold energy deficit. In every answer, pair each R value with its detailing clause.",
            },
            keyTerms: [
              { term: "Response reduction factor", definition: "Ratio of elastic seismic force to design force; IS 1893 values run from 1.5 to 5.0." },
              { term: "Overstrength", definition: "The reserve strength of a real structure above code design forces." },
              { term: "Redundancy", definition: "The availability of multiple load paths so local yielding can redistribute." },
            ],
            examQuestions: [
              {
                q: "Explain the physical basis of the response reduction factor R. Decompose it into its components, tabulate IS 1893 values for at least four lateral systems, and discuss why a high R must be matched by ductile detailing.",
                marks: 7,
                outline: [
                  "Definition: elastic demand divided by design force.",
                  "Three strands: ductility (hysteretic dissipation), overstrength (reserve capacity), redundancy (multiple paths).",
                  "Decomposition: R = Rmu x Rs x Rr.",
                  "Values: unreinforced masonry 1.5, reinforced masonry 2.5, OMRF 3.0, SMRF 5.0.",
                  "SMRF implies full IS 13920 detailing - R is a detailing contract.",
                  "Misuse case: Ahmedabad 2001 buildings; the energy deficit.",
                  "Contrast with base isolation, which cuts demand instead.",
                ],
              },
              {
                q: "State the IS 1893 response reduction factors for OMRF and SMRF.",
                marks: 2,
              },
              {
                q: "What is overstrength and where does it come from?",
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
      title: "IS 1893 Provisions",
      summary:
        "IS 1893 (Part 1): 2002 from philosophy to numbers: design philosophy, the base shear ladder, the zone, importance and reduction factors, the empirical fundamental period, and lateral force distribution.",
      chapter: {
        number: "03",
        title: "IS 1893 (Part 1): 2002 Lateral Force Design",
        intro:
          "Unit III is the code's engine room: the design philosophy that prices risk, the equivalent static method that turns philosophy into arithmetic, the three policy dials Z, I and R, the empirical fundamental period, and the vertical and horizontal distribution of the base shear.",
        inOneBreath:
          "Design tolerates damage but forbids collapse: the DBE is about half the MCE via Z/2, importance runs 1.0 or 1.5, reduction 1.5 to 5.0; the ladder runs W, then Ta = 0.075 h^0.75 (or 0.09 h / sqrt(d) for infilled buildings), then Sa/g from the 5 percent spectrum, then Ah = (Z/2)(Sa/g)(I/R), then VB = Ah x W; and the base shear climbs the building as Qi proportional to Wi hi^2, with storey shears summed from the top and shared between frames by stiffness under a 5 percent accidental eccentricity.",
        sections: [
          {
            number: "3.1",
            title: "Seismic design philosophy",
            body: [
              "Earthquakes differ from every other design load in three ways: they are rare, they are uncertain, and they are violent. Designing a building to emerge elastic and undamaged from the maximum considered earthquake is technically possible and financially indefensible. IS 1893 therefore adopts the philosophy accepted worldwide: minor shaking should cause no damage, moderate shaking may cause repairable damage, and the strongest credible shaking should not kill anyone - the structure may be an economic write-off, but the life-safety objective must hold. Damage is tolerated; collapse is not.",
              "The code implements this two-level thinking numerically. The design basis earthquake is roughly half the MCE, embedded in Ah through Z/2. The response reduction factor R shrinks the design force in recognition of ductility, so the structure is expected to yield - in controlled places - during the design event. The importance factor I raises the bar for facilities society cannot lose: hospitals, emergency control centres and lifeline structures carry 1.5, spending their margin on staying functional rather than merely standing. Partial safety factors and load combinations - 1.2(DL + LL + EL), 1.5(DL + EL) and 0.9DL + 1.5EL - complete the framework.",
              "Three analysis routes implement the philosophy. The equivalent static (seismic coefficient) method converts dynamic reality into static forces for regular buildings of modest height. The response spectrum method handles tall and irregular buildings whose higher modes matter. Time-history analysis serves special structures, isolators and validation studies. Beyond the code's minimum, performance-based design makes the objectives explicit - immediate occupancy, life safety, collapse prevention at defined hazard levels - and this vocabulary increasingly shapes retrofit practice. Answer every 'design philosophy' question with the three damage levels, the DBE/MCE halving, and the roles of Z, I and R.",
            ],
            bullets: [
              "Philosophy: no damage in minor, repairable damage in moderate, no collapse in major shaking.",
              "The DBE is about half the MCE: it enters through Z/2 in Ah.",
              "R trades ductility for force; I raises the bar for critical facilities.",
              "Combinations include 1.2(DL + LL + EL), 1.5(DL + EL) and 0.9DL + 1.5EL.",
              "Routes: equivalent static, response spectrum, time history; PBD makes objectives explicit.",
            ],
            table: {
              caption: "Design objectives versus earthquake level.",
              headers: ["Level", "Frequency", "Accepted state", "Tool"],
              rows: [
                ["Frequent minor", "years", "no damage, operational", "serviceability checks"],
                ["Moderate (about DBE)", "design event", "repairable cracking and yielding", "R-factor design"],
                ["Major (about MCE)", "maximum considered", "heavy damage, no collapse", "Z/2 margin plus detailing"],
                ["Critical facility", "any level", "functional after the event", "I = 1.5 plus detailing"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "The performance pyramid",
              caption: "Rarer events, higher stakes (top tier = rarest, most demanding objective).",
              tiers: [
                { label: "No collapse - MCE level", note: "rarest shaking; life safety holds" },
                { label: "Repairable damage - DBE level", note: "design event; hinges yield in beams" },
                { label: "No damage - frequent events", note: "building stays operational" },
              ],
            },
            callout: {
              type: "exam",
              title: "Open with the three lines",
              body: "The three-line philosophy (no damage / repairable damage / no collapse) opens almost every IS 1893 long answer. Quote it, then show how Z/2, R, I and the load combinations operationalize each line.",
            },
            keyTerms: [
              { term: "Design basis earthquake (DBE)", definition: "The design-level shaking, about half the MCE, embedded through Z/2." },
              { term: "Life safety", definition: "The governing performance objective: collapse must not occur." },
              { term: "Load combination", definition: "A factored sum including earthquake, e.g. 1.5(DL + EL) and 0.9DL + 1.5EL." },
            ],
            examQuestions: [
              {
                q: "State the seismic design philosophy adopted by IS 1893 (Part 1): 2002. Explain how the zone factor, importance factor, response reduction factor and load combinations implement it, and sketch the performance pyramid.",
                marks: 7,
                outline: [
                  "Earthquakes are rare, uncertain, violent; elastic MCE design is uneconomical.",
                  "Three objectives: no damage (minor), repairable (moderate), no collapse (major).",
                  "The DBE is about half the MCE via Z/2.",
                  "R supplies ductility; I protects critical facilities with 1.5.",
                  "Load combinations: 1.2(DL + LL + EL), 1.5(DL + EL), 0.9DL + 1.5EL.",
                  "Analysis routes: equivalent static, response spectrum, time history.",
                  "Performance-based extension: IO / LS / CP objectives at defined hazards.",
                ],
              },
              {
                q: "Why are buildings not designed to remain elastic in the maximum considered earthquake?",
                marks: 2,
              },
              {
                q: "Write any two seismic load combinations as per IS 1893.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.2",
            title: "Base shear: the equivalent static method",
            body: [
              "The equivalent static method packages all of Unit III into one arithmetic ladder. First assemble the seismic weight W: full dead load plus 25 percent of floor imposed loads (the up-to-3 kN/m2 class), no live load on the roof, and appropriate reductions for snow. Then estimate the fundamental period Ta from the code's empirical expressions, read Sa/g from the design spectrum at Ta, compute the design horizontal seismic coefficient Ah = (Z/2)(Sa/g)(I/R), and obtain the base shear VB = Ah x W - the total horizontal force the building must deliver to the ground through its lateral system.",
              "Each symbol earns its place: Z/2 is the design (about half-MCE) zero-period acceleration, Sa/g the dynamic amplification at the building's period, I the importance multiplier, and R the ductility discount. Because Ta decides which spectrum branch applies - short periods land on the 2.5 plateau, longer ones on the 1.36/T branch - the period estimate alone can swing Ah substantially. Worked example: a five-storey RC special-moment-frame hospital, h = 16 m, medium soil, zone IV (Z = 0.24), I = 1.5, R = 5.0, W = 4000 kN. Ta = 0.075 x 16^0.75 = 0.6 s; Sa/g = 1.36/0.6 = 2.27; Ah = 0.12 x 2.27 x 0.3 = 0.082; VB = 327 kN.",
              "The base shear is only the first station: it is next distributed up the height as storey forces, shared among frames and walls, and carried down to the foundations. The method is limited to regular buildings within height bands; irregular or tall buildings go to the response-spectrum or time-history routes. Note the levers: a hospital's I = 1.5 raises forces 50 percent over a residential block, and adding IS 13920 detailing (SMRF, R = 5) more than offsets that against an OMRF's R = 3. The ladder - W, Ta, Sa/g, Ah, VB - is the subject's most reliable numerical.",
            ],
            bullets: [
              "Seismic weight W: full dead load plus 25 percent of floor live load (3 kN/m2 class).",
              "The ladder: W, then Ta, then Sa/g, then Ah, then VB = Ah x W.",
              "Ah = (Z/2)(Sa/g)(I/R).",
              "Worked: the 16 m SMRF hospital in zone IV gives Ta = 0.6 s, Ah = 0.082, VB = 327 kN for W = 4000 kN.",
              "Equivalent static is for regular buildings; tall or irregular ones need dynamic analysis.",
            ],
            codeExample: {
              language: "python",
              caption: "Equivalent static base shear per IS 1893 (Part 1): 2002.",
              code: `def base_shear_is1893(h, W, Z, I, R, soil="medium", frame="rc"):
    """Equivalent static base shear, IS 1893 (Part 1): 2002."""
    if frame == "rc":
        Ta = 0.075 * h ** 0.75              # bare RC frame, h in m
    else:
        Ta = 0.085 * h ** 0.75              # bare steel frame

    corner = {"hard": 0.40, "medium": 0.55, "soft": 0.67}[soil]
    if Ta <= 0.10:
        Sa = 1.0 + 15.0 * Ta                # rising branch
    elif Ta <= corner:
        Sa = 2.5                             # plateau
    else:
        Sa = 1.36 / Ta                       # falling branch

    Ah = (Z / 2.0) * Sa * (I / R)
    return Ah, Ah * W

# Five-storey hospital: RC SMRF, h = 16 m, zone IV, medium soil
Ah, VB = base_shear_is1893(h=16.0, W=4000.0, Z=0.24, I=1.5, R=5.0)
print("Ta = 0.6 s, Sa/g = 2.267")
print("Ah =", round(Ah, 4))
print("VB =", round(VB, 1), "kN")`,
            },
            diagram: {
              kind: "flow",
              title: "The equivalent static ladder",
              caption: "Five rungs from weight to base shear - climb them in order, every time.",
              steps: [
                { label: "Seismic weight W" },
                { label: "Empirical period Ta", note: "0.075 h^0.75 for a bare RC frame" },
                { label: "Spectral value Sa/g", note: "read at Ta on the soil's branch" },
                { label: "Coefficient Ah = (Z/2)(Sa/g)(I/R)" },
                { label: "Base shear VB = Ah x W", note: "distribute next as Qi" },
              ],
            },
            callout: {
              type: "exam",
              title: "The most reliable numerical",
              body: "This chain is the paper's banker question. Practise it end-to-end with the worked hospital numbers until you can reproduce Ah = 0.082 and VB = 327 kN in ninety seconds.",
            },
            keyTerms: [
              { term: "Base shear", definition: "The total horizontal seismic force at the base: VB = Ah x W." },
              { term: "Seismic weight", definition: "The effective weight participating in the dynamic response: dead load plus 25 percent of floor live load." },
              { term: "Design horizontal seismic coefficient", definition: "Ah = (Z/2)(Sa/g)(I/R): the fraction of the weight applied as design base shear." },
            ],
            examQuestions: [
              {
                q: "A five-storey hospital building in zone IV has a bare RC special moment frame of height 16 m on medium soil, with W = 4000 kN, I = 1.5 and R = 5.0. Compute Ta, Sa/g, Ah and the design base shear per IS 1893 (Part 1): 2002.",
                marks: 7,
                outline: [
                  "Assemble the inputs: Z = 0.24 (zone IV), medium soil, I = 1.5, R = 5.0.",
                  "Ta = 0.075 h^0.75 = 0.075 x 16^0.75 = 0.075 x 8 = 0.6 s.",
                  "Spectrum: medium-soil corner 0.55 s; Ta lies beyond it, so Sa/g = 1.36/0.6 = 2.27.",
                  "Ah = (Z/2)(Sa/g)(I/R) = 0.12 x 2.27 x 0.30 = 0.082.",
                  "VB = Ah x W = 0.082 x 4000 = 327 kN (about 8.2 percent of W).",
                  "Comment: the hospital's I = 1.5 raises demand; SMRF detailing repays it through R = 5.",
                  "State the next steps: distribute Qi up the height, share by stiffness, check torsion.",
                ],
              },
              {
                q: "What percentage of imposed load enters the seismic weight of floors?",
                marks: 2,
              },
              {
                q: "Distinguish between base shear and storey shear.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.3",
            title: "Zone factor, importance factor, response reduction factor",
            body: [
              "Three of the four dials in Ah belong to policy as much as physics. The zone factor Z encodes the site's hazard as the MCE zero-period acceleration - 0.10, 0.16, 0.24 and 0.36 for zones II through V - and the code halves it to Z/2 inside Ah so that structures are designed for approximately the design basis earthquake rather than the maximum considered one. The zone is not negotiable: it is geography. Site-specific hazard studies may refine it for critical projects, but the tabulated values anchor ordinary design.",
              "The importance factor I prices the consequence of failure. Ordinary residential and commercial buildings carry I = 1.0; buildings whose post-earthquake function is critical - hospitals, emergency control centres, fire stations and lifeline structures - carry 1.5, raising their design force by 50 percent so the structure spends its ductility margin staying operational instead of merely standing. The response reduction factor R, the third dial, works in the opposite direction: it divides the force in recognition of ductility and overstrength, from 1.5 for unreinforced masonry up to 5.0 for a fully detailed RC special moment frame.",
              "Read together, the three factors are a design conversation. Raising I and lowering R buys a safer, more conservative structure; lowering I and honestly raising R builds economy. Note that R is the only dial the designer truly controls, and it is controlled through workmanship: an SMRF's 5.0 is delivered by IS 13920 stirrups, confinement zones and splice rules, not by the analysis file. Exam questions usually ask for the table plus one sentence on each factor's role - memorize Z's four values, I's two, and R's canonical set from Unit II.",
            ],
            bullets: [
              "Z (site): MCE zero-period acceleration 0.10 / 0.16 / 0.24 / 0.36; halved to Z/2 in Ah.",
              "I (consequence): 1.0 ordinary, 1.5 critical facilities such as hospitals.",
              "R (capacity): 1.5 (unreinforced masonry) to 5.0 (SMRF); it divides the demand.",
              "I and R pull in opposite directions; Z is fixed by geography.",
              "R is the designer's dial - paid for in detailing, not in analysis.",
            ],
            table: {
              caption: "The dials inside Ah = (Z/2)(Sa/g)(I/R).",
              headers: ["Factor", "Encodes", "Values", "Direction"],
              rows: [
                ["Zone factor Z", "site hazard (MCE PGA)", "0.10 to 0.36", "multiplies (halved)"],
                ["Importance factor I", "consequence of failure", "1.0 or 1.5", "multiplies"],
                ["Response reduction R", "ductility, overstrength, redundancy", "1.5 to 5.0", "divides"],
                ["Spectral term Sa/g", "dynamic amplification at Ta", "up to 2.5", "multiplies"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Three dials of the design coefficient",
              caption: "Hazard and consequence multiply; capacity divides.",
              layers: [
                { label: "Zone factor Z - what the site delivers", note: "halved: design for about the DBE" },
                { label: "Importance I - what failure costs", note: "1.5 for critical facilities" },
                { label: "Reduction R - what the structure absorbs", note: "divides; backed by IS 13920" },
              ],
            },
            callout: {
              type: "exam",
              title: "The Z/2 question",
              body: "A favourite objective item: 'Why Z/2 and not Z?' Answer: Z is the MCE motion; designing every building for it is uneconomical, so the code halves it to approximate the design basis earthquake while detailing covers the difference.",
            },
            keyTerms: [
              { term: "Zone factor", definition: "The tabulated MCE zero-period acceleration of the zone; halved inside Ah." },
              { term: "Importance factor", definition: "A multiplier of 1.0 or 1.5 reflecting post-earthquake functional need." },
              { term: "Design basis earthquake", definition: "The approximately half-MCE shaking level used for design; Z/2 in the coefficient." },
            ],
            examQuestions: [
              {
                q: "Explain the roles of the zone factor, importance factor and response reduction factor in the design seismic coefficient of IS 1893. Tabulate their values and explain why I and R act in opposite directions.",
                marks: 7,
                outline: [
                  "Write Ah = (Z/2)(Sa/g)(I/R) and identify each factor.",
                  "Z: the hazard dial; values 0.10/0.16/0.24/0.36; Z/2 gives about the DBE.",
                  "I: the consequence dial; 1.0 ordinary, 1.5 critical (hospitals, lifelines).",
                  "R: the capacity dial; 1.5 to 5.0; it divides the force.",
                  "Opposite directions: I spends margin on function; R spends it on economy.",
                  "R is controlled by detailing - IS 13920 backs the SMRF value.",
                  "Numerical illustration: a hospital in zone IV with SMRF versus OMRF.",
                ],
              },
              {
                q: "Give the IS 1893 importance factor for a fire station and the response reduction factor for unreinforced masonry.",
                marks: 2,
              },
              {
                q: "Why does the code use Z/2 rather than Z in the expression for Ah?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.4",
            title: "Fundamental period Ta and the spectrum position",
            body: [
              "The fundamental period decides where a building sits on the spectrum, so the code prescribes empirical formulas rather than trusting any single calculation. For bare RC moment frames, Ta = 0.075 h^0.75 with h in metres; for bare steel frames, 0.085 h^0.75; for RC buildings with substantial masonry infill panels or RC structural walls, Ta = 0.09 h divided by the square root of d, where d is the base dimension in metres in the direction of the lateral force. The coefficients and exponents were fitted to measurements on real buildings.",
              "The empirical values are deliberately conservative - shorter than the periods real buildings exhibit once cracking and infill degradation soften them. Why insist? Because a longer computed period slides down the 1.36/T falling branch and shrinks the design force; the code refuses to let idealization cheapen the design. In dynamic analysis the computed period may be used, but safeguards apply: where the analysis base shear falls below the empirical static estimate, the forces are scaled up. Infills shorten the period and raise stiffness - an infilled 24 m building with d = 24 m has Ta = 0.09 x 24 / sqrt(24) = 0.44 s against 0.81 s for the bare frame.",
              "Designers also steer the period deliberately. Adding shear walls shortens it - usually landing on or inside the plateau, raising the force but crushing the drift; isolation lengthens it far beyond the energetic range to cut the force. After an earthquake, a damaged building's period elongates, a diagnostic seismologists exploit. Quick figures worth memorizing: a 16 m frame gives Ta = 0.6 s and a 30 m frame 0.96 s; the rule of thumb of 0.1 s per storey gives the same order. Every numerical opens by asking for Ta, so the three formulas must be reproducible from memory.",
            ],
            bullets: [
              "RC bare frame: Ta = 0.075 h^0.75; steel bare frame: Ta = 0.085 h^0.75.",
              "Infilled or shear-wall buildings: Ta = 0.09 h / sqrt(d), d along the force direction.",
              "Empirical periods are conservative (short) - they refuse to cheapen the design.",
              "The 24 m example: bare 0.81 s versus infilled with d = 24 m, 0.44 s.",
              "Rule of thumb: about 0.1 s per storey for RC frames.",
            ],
            codeExample: {
              language: "python",
              caption: "Empirical fundamental periods from IS 1893.",
              code: `import math

def ta_is1893(h, kind="rc_bare", d=None):
    """Empirical fundamental period, IS 1893 (Part 1): 2002."""
    if kind == "rc_bare":
        return 0.075 * h ** 0.75
    if kind == "steel_bare":
        return 0.085 * h ** 0.75
    # RC building with masonry infill or RC structural walls
    return 0.09 * h / math.sqrt(d)

for h in (12.0, 16.0, 24.0, 30.0):
    print("h =", h, "m -> bare RC Ta =", round(ta_is1893(h), 3), "s")

print("24 m infilled, d = 24 m: Ta =",
      round(ta_is1893(24.0, kind="infilled", d=24.0), 3), "s")`,
            },
            diagram: {
              kind: "compare",
              title: "Two ways to get Ta",
              caption: "Empirical shortcut versus eigen-analysis - and why the code keeps both on a leash.",
              left: {
                heading: "Empirical formula",
                items: [
                  "One line: height and width only",
                  "Fitted to measured buildings",
                  "Conservative (short) periods",
                  "Cannot be gamed by soft modelling",
                  "Mandatory for the static method",
                ],
              },
              right: {
                heading: "Dynamic (eigen) analysis",
                items: [
                  "Models mass and stiffness explicitly",
                  "Reflects cracking and infill states",
                  "Computes longer periods",
                  "Base shear scaled up if below static",
                  "Required for tall and irregular buildings",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "Do not shave forces",
              body: "Answering a numerical with a computed 'flexible' period and quietly dropping the force by 30 percent is exactly what the code's scaling clause prevents. Quote the empirical Ta unless the question explicitly asks for the dynamic value.",
            },
            keyTerms: [
              { term: "Fundamental period", definition: "The period of the first mode of vibration, fixing the building's position on the spectrum." },
              { term: "Empirical period formula", definition: "Code expressions: 0.075 h^0.75 (RC bare), 0.085 h^0.75 (steel), 0.09 h / sqrt(d) (infilled)." },
              { term: "Period elongation", definition: "The lengthening of natural period as cracking and yielding soften a structure." },
            ],
            examQuestions: [
              {
                q: "State the empirical expressions for the approximate fundamental natural period in IS 1893 (Part 1): 2002. Compute Ta for (a) a bare 24 m RC frame and (b) the same building with masonry infill, d = 24 m, and explain why the code prefers conservative periods.",
                marks: 7,
                outline: [
                  "Formulas: 0.075 h^0.75 (RC bare), 0.085 h^0.75 (steel), 0.09 h / sqrt(d) (infilled).",
                  "(a) Ta = 0.075 x 24^0.75 = 0.075 x 10.84 = 0.81 s.",
                  "(b) Ta = 0.09 x 24 / sqrt(24) = 2.16 / 4.90 = 0.44 s.",
                  "Infill stiffens the building: the period falls, and the spectral value rises on the falling branch.",
                  "Conservatism: measured periods run longer, and 1.36/T would otherwise reduce the demand.",
                  "Dynamic-analysis periods are allowed but the base shear is scaled up if it falls below the static value.",
                  "Cross-check with the 0.1 s per storey rule: 24 m is about 8 storeys, about 0.8 s - consistent.",
                ],
              },
              {
                q: "Why are the code's empirical periods called conservative?",
                marks: 2,
              },
              {
                q: "Compute Ta for a bare steel frame building with h = 16 m.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.5",
            title: "Distribution of base shear and storey shear",
            body: [
              "The base shear is spent storey by storey. IS 1893 distributes it vertically as Qi = VB x Wi hi^2 / sum of (Wj hj^2): the force delivered at level i grows with that level's weight and with the square of its height - an inverted-triangle shape sharpened by the square law. Storey shear Vi is then the sum of all Qi above level i, so the ground storey carries the full VB while the top storey carries only its own Qi. Heavier upper storeys and rooftop water tanks, which add mass high up, are penalized accordingly by the square of their height.",
              "Horizontally, the storey shear is shared among the frames and walls in proportion to their lateral stiffness - valid while floor diaphragms act rigidly, which is the design intent. Flexible diaphragms instead distribute the forces by tributary area. Every storey force is applied with an accidental eccentricity of 5 percent of the plan dimension perpendicular to the force, added to any calculated eccentricity, to cover torsion from stiffness, mass and construction imperfections; torsionally irregular plans amplify the effect, and the negative torsional shear case must also be checked so that torsion never unloads one edge while overloading the other.",
              "A worked example fixes the arithmetic. A four-storey building with equal floor weights W at heights 3, 6, 9 and 12 m has Wi hi^2 proportional to 9, 36, 81 and 144 - a sum of 270. With VB = 300 kN, the storey forces from first floor to roof are 10, 40, 90 and 160 kN, and the storey shears build to 10, 50, 140 and 300 kN. Two observations travel with the table: 53 percent of the base shear is applied at the roof level alone, and the distribution depends only on geometry and weight, not on stiffness - the code's simple stand-in for dynamics. Diaphragm design forces and collector elements close the load path.",
            ],
            bullets: [
              "Vertical distribution: Qi = VB x Wi hi^2 / sum(Wj hj^2) - the square law sharpens the triangle.",
              "Storey shear Vi = sum of all Qi above that level; the ground storey carries the full VB.",
              "Horizontal sharing: by member stiffness under rigid diaphragms; tributary area for flexible ones.",
              "Accidental eccentricity: 5 percent of the plan dimension perpendicular to the force.",
              "Worked: 3/6/9/12 m, equal weights, VB = 300 kN gives Qi = 10/40/90/160 kN from bottom to roof.",
            ],
            table: {
              caption: "Worked distribution: VB = 300 kN, equal storey weights at heights 3, 6, 9 and 12 m.",
              headers: ["Storey (from top)", "hi (m)", "Wi hi^2 share", "Qi (kN)", "Storey shear Vi (kN)"],
              rows: [
                ["4th (roof)", "12", "144/270", "160", "160"],
                ["3rd", "9", "81/270", "90", "250"],
                ["2nd", "6", "36/270", "40", "290"],
                ["1st", "3", "9/270", "10", "300"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "From base shear to member forces",
              caption: "The distribution chain that converts one number into a design.",
              steps: [
                { label: "Base shear VB = Ah x W" },
                { label: "Vertical split into Qi", note: "proportional to Wi hi^2" },
                { label: "Storey shears Vi", note: "sum from the top down" },
                { label: "Share among frames and walls", note: "by stiffness, rigid diaphragm" },
                { label: "Add accidental torsion", note: "5 percent of the plan dimension" },
              ],
            },
            callout: {
              type: "exam",
              title: "The table earns the marks",
              body: "The distribution question is a standing seven-marker: derive Qi, tabulate, then sum down for Vi. Show the share column (144/270 and so on) - the method marks live there, not in the final answers alone.",
            },
            keyTerms: [
              { term: "Storey shear", definition: "The sum of all lateral forces applied above a storey: Vi = sum of Qi above." },
              { term: "Accidental eccentricity", definition: "A 5-percent-of-plan-dimension offset of the force line to cover unforeseen torsion." },
              { term: "Diaphragm", definition: "The floor slab acting as a horizontal beam distributing storey forces to frames and walls." },
            ],
            examQuestions: [
              {
                q: "A four-storey building with equal storey weights at heights 3, 6, 9 and 12 m has a design base shear of 300 kN. Distribute the base shear per IS 1893 and tabulate the storey forces and storey shears.",
                marks: 7,
                outline: [
                  "Write the formula: Qi = VB Wi hi^2 / sum(Wj hj^2).",
                  "Compute Wi hi^2: 9, 36, 81, 144; the sum is 270.",
                  "Storey forces: 10, 40, 90 and 160 kN from first floor to roof.",
                  "Check: 10 + 40 + 90 + 160 = 300 kN.",
                  "Storey shears: V4 = 160, V3 = 250, V2 = 290, V1 = 300 kN.",
                  "Note that the roof alone receives 53 percent of VB - the square law penalizes height.",
                  "Mention horizontal sharing by stiffness and the 5 percent accidental eccentricity.",
                ],
              },
              {
                q: "Why is the lateral force apportioned as Wi hi^2 rather than Wi alone?",
                marks: 2,
              },
              {
                q: "What is accidental torsion and what value does IS 1893 prescribe for it?",
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
      title: "Capacity Design and Detailing",
      summary:
        "Capacity design and IS 13920: choosing where the structure yields - strong column weak beam - and detailing beams, columns, splices and joints so that every brittle mode is designed out of existence.",
      chapter: {
        number: "04",
        title: "Capacity Design and IS 13920 Ductile Detailing",
        intro:
          "Unit IV converts the R factor's promise into steel and concrete: capacity design chooses the plastic mechanism, the strong column weak beam rule fixes the hierarchy, and IS 13920's detailing - beam hinge zones, column confinement, splice placement, joint integrity - manufactures the ductility that Units II and III spent.",
        inOneBreath:
          "Capacity design picks the plastic mechanism and strengthens everything else beyond it: columns stay stronger than beams (sum Mc >= 1.1 sum Mb at each joint) and shear is sized from overstrength moments; beams get width at least 200 mm, depth at most a quarter of the clear span, steel floored and capped per face, 2d hinge zones with d/4 stirrups and 135-degree hooks; columns get 300 mm minimums, 0.8 to 6 percent steel, laps only in the middle half of the clear height, and Lo = max of height/6, larger side, 450 mm of close confinement; joints stay elastic with ties through the core; and soft storeys (70 percent stiffness rule) and short columns (1/h^3 stiffness) are the two pathologies all of it exists to defeat.",
        sections: [
          {
            number: "4.1",
            title: "Capacity design and strong column weak beam",
            body: [
              "A chain is as strong as its weakest link - and capacity design is the discipline of choosing, in advance, where that link lies. Introduced by Blume, Newmark and Corley and systematized by Park and Paulay, the method selects a favourable plastic mechanism, then makes every potentially brittle mode so strong that it can never be reached before the chosen ductile modes yield. The designer does not ask 'what force will act?' but 'how strong must the brittle modes be so that yielding happens only where I want it?'",
              "The canonical application is the strong column weak beam (SCWB) rule. Plastic hinges are welcome in beams - many beams, spreading energy dissipation through the building - and unwelcome in columns, whose hinging concentrates drift in one storey and invites the P-delta collapse of a soft storey. IS 13920 enforces the hierarchy at every joint: the sum of the column moment capacities shall be at least 1.1 times the sum of the beam moment capacities framing into that joint, in each principal plane. Beam-sway mechanisms are ductile and redundant; column-sway (soft-storey) mechanisms are the classic pancake pattern.",
              "The full hierarchy orders every failure mode: flexure before shear (member shear designed for the overstrength moment actually deliverable), beam before column, member before joint, and superstructure before foundation. The checks use nominal capacities with the real, as-built reinforcement - not analysis forces. The photographs of collapsed open-ground-storey buildings from Bhuj 2001 are, in structural terms, capacity design violated: columns hinged first, a storey mechanism formed, and gravity finished the job. When the examiner asks for the philosophy, the chain analogy, the 1.1 rule and a sketch of both sway mechanisms carry the seven marks.",
            ],
            bullets: [
              "Capacity design: choose the plastic mechanism; make every brittle mode stronger than the ductile ones.",
              "SCWB rule: the sum of column capacities >= 1.1 times the sum of beam capacities at each joint.",
              "Beam sway: many hinges, energy spread - ductile. Column sway: soft storey - brittle collapse.",
              "Hierarchy: flexure before shear, beam before column, member before joint.",
              "The Bhuj 2001 open-ground collapses were capacity design violated - column sway.",
            ],
            table: {
              caption: "The capacity design hierarchy: what protects what.",
              headers: ["Protected (kept elastic)", "Threatened by", "Protected by"],
              rows: [
                ["Column flexural hinge", "beam hinges forming first", "the 1.1 capacity rule"],
                ["Member shear", "flexural overstrength", "shear from overstrength moments"],
                ["Beam-column joint", "beam and column capacities", "joint confinement and sizing"],
                ["Foundation", "superstructure hinging", "capacity design of footings"],
                ["Non-structural elements", "storey drift", "drift limits"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Where the plastic hinge forms decides the outcome",
              caption: "Same joint, same earthquake - three very different mechanisms.",
              start: "A plastic hinge forms adjacent to a beam-column joint",
              branches: [
                {
                  label: "Hinge in the beam",
                  outcome: "Beam-sway mechanism: dozens of beams yield, energy spreads through the frame and the gravity load paths survive - the intended design",
                  good: true,
                },
                {
                  label: "Hinge in the column",
                  outcome: "Storey-sway mechanism: one soft storey absorbs all the drift, P-delta amplifies it, and the frame pancakes",
                  good: false,
                },
                {
                  label: "Hinge in the joint core",
                  outcome: "The joint degrades and loses both beam and column anchorage - the least repairable failure of all",
                  good: false,
                },
              ],
            },
            callout: {
              type: "exam",
              title: "Quote the inequality",
              body: "Write the IS 13920 rule symbolically: sum(Mc) >= 1.1 x sum(Mb), joint by joint, in both directions. Pair it with the two sway-mechanism sketches and the chain analogy for full marks.",
            },
            keyTerms: [
              { term: "Capacity design", definition: "Selecting the plastic mechanism and strengthening all other modes beyond it." },
              { term: "Strong column weak beam", definition: "The joint rule: the sum of column moment capacities is at least 1.1 times the sum of beam capacities." },
              { term: "Overstrength", definition: "The real reserve strength used to size protected (brittle) modes." },
            ],
            examQuestions: [
              {
                q: "Explain the philosophy of capacity design with the chain analogy. State and justify the strong column weak beam provision of IS 13920, and sketch the beam-sway and column-sway mechanisms.",
                marks: 7,
                outline: [
                  "Chain analogy: the weakest link decides the mechanism - choose it deliberately.",
                  "Plastic mechanism selection; brittle modes designed beyond the ductile ones.",
                  "SCWB: sum(Mc) >= 1.1 x sum(Mb) at each joint, in each principal plane.",
                  "Beam sway: distributed hinges, high global ductility.",
                  "Column sway: soft storey, P-delta collapse; the pancaking evidence of 2001.",
                  "Full hierarchy: flexure before shear, member before joint, foundation strongest.",
                  "Checks use as-built nominal capacities, not analysis forces.",
                ],
              },
              {
                q: "Write the IS 13920 strong column weak beam inequality.",
                marks: 2,
              },
              {
                q: "Why are beams preferred over columns as the location of plastic hinges?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.2",
            title: "Ductile detailing of beams: IS 13920",
            body: [
              "IS 13920 begins with geometry, because ductility needs room. Beam width must be at least 200 mm, and depth must not exceed one quarter of the clear span, keeping members stocky enough to avoid deep, shear-critical profiles. At least two bars must run on each face (12 mm minimum diameter), and the longitudinal steel on any face is floored by the code's minimum expression - 0.24 sqrt(fck)/fy times b times d - and capped at 2.5 percent of the section. At the face of each support the positive (sagging) capacity must be at least half the negative (hogging) capacity, because seismic moment reversal turns bottom steel into top steel every half cycle.",
              "Shear is designed not from analysis but from the beam's own strength: the design shear is derived from the plastic moment capacities deliverable at the two ends (with an overstrength allowance) divided by the clear span, plus the gravity shear. The consequence: a beam can never lose its shear before its flexural strength is exhausted. Transverse steel then does double work. Over a confinement length of 2d from each support face - the plastic hinge zone - stirrups are closely spaced, at a quarter of the effective depth or less, with additional limits tied to bar and hoop diameters; along the middle of the span the spacing may relax to half the effective depth.",
              "Detailing completes the recipe. Hoops are closed, engage the corner bars, and end in 135-degree hooks bent into the core with a six-diameter extension of at least 65 mm - the geometry that keeps a hoop anchored after the cover spalls. Top bars pass continuously through interior joints; at exterior joints they anchor with hooks into the joint core. The visible contrast with an IS 456-only 'ordinary' beam is stark: more steel top and bottom, dramatically denser stirrups at the ends, closed 135-degree hoops, and a shear check anchored to overstrength rather than to analysis.",
            ],
            bullets: [
              "Geometry: width at least 200 mm; depth at most a quarter of the clear span.",
              "Longitudinal steel: two bars per face (12 mm minimum); minimum 0.24 sqrt(fck)/fy b d per face, capped at 2.5 percent.",
              "Support balance: positive capacity at the support face at least half the negative capacity.",
              "Shear from overstrength plastic moments divided by the clear span, plus gravity shear.",
              "Confinement: 2d length at each end at d/4 or closer, d/2 mid-span; 135-degree hooks, six diameters, minimum 65 mm.",
            ],
            table: {
              caption: "IS 13920 beam checklist versus ordinary IS 456 detailing.",
              headers: ["Requirement", "IS 456 ordinary beam", "IS 13920 ductile beam"],
              rows: [
                ["Min width", "none specific", "200 mm or more"],
                ["Longitudinal steel", "nominal minima", "0.24 sqrt(fck)/fy b d per face, max 2.5 percent"],
                ["Moment reversal", "not required", "positive at least half negative at supports"],
                ["Shear basis", "analysis forces", "overstrength plastic moments"],
                ["Stirrups", "nominal spacing", "2d hinge zones at d/4; 135-degree hooks"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Ordinary beam versus ductile beam",
              caption: "Same span, same loads - the difference is entirely in the detail.",
              left: {
                heading: "IS 456 ordinary beam",
                items: [
                  "Sparse stirrups at code minimum",
                  "Top steel cut off where the moment fades",
                  "90-degree hooks, cover-dependent",
                  "Shear from analysis forces only",
                  "Lap splices anywhere convenient",
                ],
              },
              right: {
                heading: "IS 13920 ductile beam",
                items: [
                  "Dense closed hoops over the 2d ends",
                  "Steel top and bottom, full length",
                  "135-degree hooks into the core",
                  "Shear from overstrength moments",
                  "Hinge zones deliberately detailed",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "The checklist question",
              body: "'List the ductile detailing requirements of beams as per IS 13920' is a standing seven-mark question. Answer in the exam's own order: geometry, longitudinal steel, moment balance, design shear, transverse reinforcement, hooks.",
            },
            keyTerms: [
              { term: "Confinement", definition: "Restraint of core concrete by closed transverse reinforcement, multiplying strain capacity." },
              { term: "Plastic hinge zone", definition: "The 2d length at each beam end where yielding is expected and hoops close up." },
              { term: "Overstrength shear", definition: "Beam shear computed from deliverable plastic moments rather than analysis forces." },
            ],
            examQuestions: [
              {
                q: "List and explain the IS 13920 provisions for ductile detailing of RC beams: member geometry, longitudinal reinforcement, moment capacity balance, design shear, and transverse reinforcement with hooks. Support each with one number.",
                marks: 7,
                outline: [
                  "Geometry: width at least 200 mm; depth at most a quarter of the clear span.",
                  "Longitudinal: two bars per face, 12 mm minimum; minimum 0.24 sqrt(fck)/fy b d; maximum 2.5 percent.",
                  "Balance: at support faces, positive capacity at least half the negative.",
                  "Shear: from overstrength plastic moments over the clear span, plus gravity.",
                  "Confinement zone 2d at each end; stirrup spacing d/4 or less there, d/2 mid-span.",
                  "Closed hoops with 135-degree hooks, six diameters or 65 mm extension.",
                  "A cross-section sketch labelling all of the above.",
                ],
              },
              {
                q: "State the minimum beam width and the depth-to-span limit in IS 13920.",
                marks: 2,
              },
              {
                q: "Why must stirrup hooks be bent 135 degrees with a 65 mm extension?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.3",
            title: "Ductile detailing of columns and confinement",
            body: [
              "Columns live under axial load, and axial load eats ductility - so IS 13920 compensates with geometry and confinement. The minimum lateral dimension is 300 mm, and the shorter side must be at least 0.4 times the longer, barring the slender, shear-hungry sections that earthquakes expose. Longitudinal steel runs between 0.8 and 6 percent of the gross area (about 4 percent is the practical ceiling where laps crowd a section), with bars of at least 12 mm diameter distributed around the perimeter so hoops can grip them.",
              "Splices are the column's Achilles heel. Bond deteriorates under cyclic strain reversals, so laps are permitted only in the central half of the clear height - never inside the plastic hinge regions at the ends - and are staggered so that not all bars splice at one level. Transverse reinforcement is then tuned by region. Over a special confining length Lo at each end - the largest of the clear height divided by 6, the larger lateral dimension, and 450 mm - ties close down to a pitch capped by a quarter of the minimum column dimension and by 100 mm. Elsewhere the nominal tie rules resume.",
              "The mechanics reward the rules. Closely spaced closed hoops put the core concrete into triaxial compression, multiplying its strain capacity several-fold; when the cover spalls at large drift, the confined core - not the cover - continues to carry load and rotation. A ductile column thus fails outside-in: the cover goes first and loudly, the core holds. The same confining ties extend through beam-column joints where framing beams do not confine the joint on all four faces. In exams, the Lo trio (height/6, larger dimension, 450 mm) and the splice restriction are the two most reliably examined facts of this unit.",
            ],
            bullets: [
              "Geometry: minimum dimension 300 mm; shorter side at least 0.4 times the longer.",
              "Longitudinal steel: 0.8 to 6 percent of gross area (about 4 percent practical), 12 mm bars.",
              "Laps only in the middle half of the clear height, staggered - never in the hinge zones.",
              "Lo = largest of clear height/6, larger lateral dimension, 450 mm; tie pitch there at a quarter of the minimum dimension and at most 100 mm.",
              "Confinement converts the core to triaxial compression; loss of cover is survivable.",
            ],
            table: {
              caption: "IS 13920 column checklist.",
              headers: ["Item", "Rule"],
              rows: [
                ["Min dimension", "300 mm; aspect ratio at least 0.4"],
                ["Longitudinal steel", "0.8 to 6 percent of gross; bars at least 12 mm"],
                ["Splices", "central half of the clear height only, staggered"],
                ["Confining length Lo", "max of height/6, larger side, 450 mm"],
                ["Tie pitch in Lo", "quarter of the minimum dimension, 100 mm cap"],
                ["Hooks", "135 degrees, six diameters, minimum 65 mm, into the core"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "A ductile column, zone by zone",
              caption: "From joint to mid-height: where the steel goes and why.",
              layers: [
                { label: "Joint zone (top)", note: "confining ties continue into the joint" },
                { label: "End confinement region Lo", note: "max of h/6, larger side, 450 mm; tightest ties" },
                { label: "Middle half", note: "nominal ties; lap splices live here" },
                { label: "End confinement region Lo (base)", note: "mirror of the top; hinges expected above and below" },
              ],
            },
            callout: {
              type: "tip",
              title: "Sixth, side, or 450",
              body: "Memorize the Lo trio as 'sixth, side, or 450' and you own two marks of every column-detailing question. Add the middle-half splice rule and the 1.1 SCWB inequality for the full set.",
            },
            keyTerms: [
              { term: "Special confining reinforcement", definition: "Closely spaced closed ties over Lo at member ends and through joints." },
              { term: "Lo region", definition: "The confining length: the largest of clear height/6, largest lateral dimension and 450 mm." },
              { term: "Core concrete", definition: "The concrete enclosed by hoops; it retains load capacity after the cover spalls." },
            ],
            examQuestions: [
              {
                q: "Explain confinement and the role of special confining reinforcement in columns per IS 13920. Define Lo with its three criteria, state the splice restrictions, and sketch the tie arrangement with 135-degree hooks.",
                marks: 7,
                outline: [
                  "Why confinement: axial load lowers ductility; hoops supply triaxial compression.",
                  "The core retains capacity after the cover spalls - failure proceeds outside-in.",
                  "Lo = largest of clear height/6, largest lateral dimension, 450 mm.",
                  "Tie pitch in Lo: a quarter of the minimum dimension, subject to the 100 mm cap.",
                  "Laps only in the middle half of the clear height, staggered; bond degrades at the ends.",
                  "Hooks: 135 degrees, six diameters, minimum 65 mm.",
                  "Joint confinement extended where beams do not enclose all four faces.",
                ],
              },
              {
                q: "State the minimum column dimension and the longitudinal steel limits in IS 13920.",
                marks: 2,
              },
              {
                q: "Why must column lap splices avoid the end regions?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.4",
            title: "Lap splices and beam-column joints",
            body: [
              "The beam-column joint is the busiest square metre of a frame: beam bars anchor or pass through, column bars continue, and huge cyclic bond stresses act on both, all inside a region that must remain elastic - the last thing allowed to hinge. Detailing therefore protects joints absolutely. Beam top bars are carried straight through interior joints; at exterior joints they hook into the core. Column longitudinal bars run uninterrupted through the joint, and the column's special confining ties continue through the joint core whenever framing beams do not confine it on all four faces.",
              "Lap splices obey the same logic elsewhere in the structure. Force transfer by bond is fragile under load reversals: cycles of large strain break the concrete grip around a bar, so splices are banned from plastic hinge zones. In columns, laps live in the middle half of the clear height; in beams they stay away from the 2d end zones; and they are staggered so that at most about half the bars splice at any one section. Where laps cannot be avoided in crowded regions, mechanical couplers or qualified welding replace them.",
              "Two failure modes dominate joint pathology. Bond slip: beam bars anchored too shallowly ratchet through the core under reversal, visibly losing stiffness - the elongating beam that pushes columns apart and wrecks slabs. Core shear: the joint panel cracks diagonally when the confining hoops are sparse. Reconnaissance from Turkey 1999 and India 2001 repeatedly photographed both. The remedies are unglamorous and absolute: confinement through the joint, adequate anchorage and development lengths, beam bars sized against the column face (thick columns relative to the bar diameter), and the SCWB rule keeping the joint out of the energy business.",
            ],
            bullets: [
              "Joints stay elastic: hinges belong to members, never to the joint panel.",
              "Interior joints: beam bars pass through; exterior joints: bars hook into the core.",
              "Column confining ties continue through joints not enclosed on all four faces by beams.",
              "Laps: never inside hinge zones; columns the middle half only; staggered.",
              "Joint pathologies: bond slip (beam elongation, stiffness loss) and diagonal core shear.",
            ],
            table: {
              caption: "Joint and splice rules at a glance.",
              headers: ["Element", "IS 13920 practice", "Failure if ignored"],
              rows: [
                ["Beam bars, interior joint", "continuous through the core", "bond slip, stiffness loss"],
                ["Beam bars, exterior joint", "hooks anchored in the core", "pull-out at the first reversal"],
                ["Column bars", "unspliced through joints", "loss of the load path"],
                ["Joint core", "confining ties through the joint", "diagonal shear cracking"],
                ["Column laps", "middle half, staggered", "lap slips inside the hinge zone"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Where a lap splice may live",
              caption: "One detailing decision separates a code-compliant column from a fatal one.",
              start: "A lap splice must be detailed in a column",
              branches: [
                {
                  label: "Middle half of the clear height",
                  outcome: "A low-moment region: bond stays intact and plastic hinges form where they were designed to - the code-compliant choice",
                  good: true,
                },
                {
                  label: "Inside the Lo end region",
                  outcome: "Strain reversals strip the bond exactly where the column must stay elastic; the splice slips and the storey mechanism wins",
                  good: false,
                },
              ],
            },
            callout: {
              type: "warning",
              title: "The commonest sketch error",
              body: "Drawing a lap inside a column's end zone is the most frequent mistake in university drawings and in the field. When in doubt, repeat: 'laps in the middle half, ties in the ends.'",
            },
            keyTerms: [
              { term: "Lap splice", definition: "Force transfer between bars by overlap and bond; restricted to low-moment zones." },
              { term: "Beam-column joint", definition: "The panel region where beams and columns meet; designed to remain elastic." },
              { term: "Bond slip", definition: "Loss of grip between bar and concrete under cyclic reversals; elongates beams and softens the frame." },
            ],
            examQuestions: [
              {
                q: "Why are lap splices restricted in seismic design? Describe the detailing requirements of beam-column joints per IS 13920 with sketches of interior and exterior joints, and name the two dominant joint failure modes.",
                marks: 7,
                outline: [
                  "Bond degrades under strain reversals; splices must avoid hinge zones.",
                  "Column laps: the middle half of the clear height, staggered.",
                  "Beam laps: away from the 2d end zones; couplers where unavoidable.",
                  "Interior joints: beam bars through; exterior: hooks into the core.",
                  "Joint confinement: column ties continue unless beams enclose all four faces.",
                  "Failure modes: bond slip (beam elongation) and diagonal core cracking.",
                  "SCWB and bar sizing keep the joint elastic.",
                ],
              },
              {
                q: "Where must column lap splices not be located, and why?",
                marks: 2,
              },
              {
                q: "What is bond slip and how does it show itself in a damaged frame?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.5",
            title: "Soft storey and short column effects",
            body: [
              "Two configuration pathologies produce disproportionate damage: the soft storey and the short column. A soft storey is one storey markedly less stiff than the storey above - the open ground floor of shops and parking below masonry-infilled apartments is the textbook case. IS 1893 quantifies it: if a storey's lateral stiffness is below 70 percent of the storey above (or 80 percent of the average of the three above), it is a soft storey; below 60 percent, an extreme soft storey. The drift that the upper storeys resist easily through their infills then concentrates almost entirely in the one flexible storey.",
              "The consequences are visible in every reconnaissance album from Bhuj 2001: ground-storey columns yielding, P-delta amplifying the drift, and the block above descending nearly intact - the pancake. The code's remedies: where the soft storey is retained, its columns and any shear walls must be designed for 2.5 times the storey shear computed by the usual analysis, or the building must be analysed dynamically; the better cure is to eliminate the irregularity - add shear walls or bracing in the open storey, or carry the columns through as a proper framed storey.",
              "The short column is a stiffness ambush rather than a missing one. When an infill wall with a window opening leaves a column with a short clear height, its stiffness - proportional to 1 over height cubed for a member in bending - jumps; the stub attracts several times the shear of its full-height neighbour and fails in brittle shear before anyone yields. Partial masonry infills, plinth beams and ramped ground floors create captive columns the same way. Remedies: design the captive column for the enhanced shear, isolate the infill with a movement gap so the column keeps its full height, or place openings clear of the columns.",
            ],
            bullets: [
              "Soft storey: stiffness below 70 percent of the storey above (or 80 percent of the three-storey average); below 60 percent is extreme soft.",
              "Drift and ductility demand concentrate in the flexible storey; P-delta finishes it.",
              "Retained soft storey: design its columns and walls for 2.5 times the storey shear, or analyse dynamically.",
              "Short (captive) column: stiffness scales as 1/h^3, the shear demand explodes, and the failure is brittle.",
              "Remedies: walls or bracing in the open storey; enhanced shear design for captive columns; gap the infill.",
            ],
            table: {
              caption: "Two irregularity pathologies compared.",
              headers: ["Aspect", "Soft storey", "Short column"],
              rows: [
                ["Trigger", "open ground floor, heavy infill above", "infill with openings beside a column"],
                ["Stiffness outcome", "one storey far too flexible", "one member far too stiff"],
                ["Failure mode", "storey drift, P-delta, pancaking", "brittle shear failure"],
                ["Code answer", "2.5 times the storey shear, or dynamic analysis", "design for the enhanced shear"],
                ["Better fix", "add walls or bracing; avoid the irregularity", "gap the infill; move the openings"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Soft storey versus short column",
              caption: "Two ways configuration kills - and the fix for each.",
              left: {
                heading: "Soft storey",
                items: [
                  "Open ground floor, stiff block above",
                  "All drift pours into one storey",
                  "Columns hinge, P-delta takes over",
                  "Pancake collapse (Ahmedabad 2001)",
                  "Fix: shear walls, bracing, 2.5 x shear",
                ],
              },
              right: {
                heading: "Short column",
                items: [
                  "Infill leaves a stub of clear height",
                  "Stiffness jumps as 1/h cubed",
                  "The stub grabs the shear, fails brittle",
                  "A diagonal shear crack, sudden loss",
                  "Fix: enhanced shear design, gap the infill",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Quote the numbers",
              body: "The 2.5-times storey shear factor is a favourite objective item, and the soft-storey definition (70 / 60 percent) follows close behind. Attach the Ahmedabad 2001 description to the answer - examiners reward the case evidence.",
            },
            keyTerms: [
              { term: "Soft storey", definition: "A storey with lateral stiffness below 70 percent of the storey above; drift concentrates there." },
              { term: "Short (captive) column", definition: "A column with reduced clear height whose high stiffness attracts disproportionate shear." },
              { term: "P-delta effect", definition: "Second-order moments from vertical load acting on a laterally displaced structure." },
            ],
            examQuestions: [
              {
                q: "Define the soft storey and short column effects with sketches. Explain why each is dangerous, state the IS 1893 remedies including the design factor for soft storey columns, and cite evidence from the Bhuj 2001 earthquake.",
                marks: 7,
                outline: [
                  "Soft storey definition: the 70 percent rule; extreme soft at 60 percent.",
                  "Mechanism: drift concentration, P-delta, storey collapse; the Ahmedabad 2001 pancaking.",
                  "IS 1893 remedy: soft storey columns and walls designed for 2.5 times the storey shear, or dynamic analysis.",
                  "Elimination: shear walls or bracing in the open storey.",
                  "Short column: clear height cut by infill; stiffness as 1/h cubed.",
                  "Brittle shear failure before flexural yielding; captive columns at ramps and windows.",
                  "Remedies: enhanced shear design, movement gaps, relocated openings.",
                ],
              },
              {
                q: "When does IS 1893 call a storey an 'extreme soft storey'?",
                marks: 2,
              },
              {
                q: "Why does a short column attract more shear than a full-height column of the same section?",
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
      title: "Retrofitting and Isolation",
      summary:
        "Assessment and intervention: vulnerability screening, member jacketing, global strengthening with walls and braces, base isolation with LRB and sliding systems, control devices and performance-based design - read through the casebook of Bhuj 2001.",
      chapter: {
        number: "05",
        title: "Retrofitting, Base Isolation and Structural Control",
        intro:
          "Unit V turns from new design to the existing world and the cutting edge: assessing vulnerability, strengthening members by jacketing, upgrading systems with walls and braces, sidestepping the ground with isolation, managing energy with dampers and active devices, and the performance-based vocabulary - all read through the casebook of Bhuj 2001.",
        inOneBreath:
          "Assess before strengthening (rapid visual screening, DCR checks, pushover analysis, fragility curves); fix members with RC, steel or FRP jackets; fix systems with symmetric shear walls, concentric or eccentric braces, ferrocement infills and mass reduction; or sidestep the ground entirely with LRBs and friction pendulums that stretch the period to 2-4 seconds behind a moat; damp the remainder with TMDs, viscous or MR devices; verify it all in performance-based language (immediate occupancy, life safety, collapse prevention at defined hazards); and never forget Bhuj 2001 - soft storeys, missing detailing and soft soil killed where the code would have protected.",
        sections: [
          {
            number: "5.1",
            title: "Seismic vulnerability assessment",
            body: [
              "Existing buildings were built under older codes - or none - and the first engineering question is which of them will fail. Seismic vulnerability assessment proceeds in stages of increasing depth. Rapid visual screening (the FEMA 154 street-survey approach, adapted in Indian guidelines) walks a building with a score sheet: a basic structural score, then modifiers for soft storeys, irregularity, construction type, age and falling hazards. A low score does not condemn the building; it promotes it to the next stage of evaluation.",
              "Preliminary and detailed evaluations follow. The preliminary stage checks the demand-to-capacity of the critical members with simple hand calculations. The detailed stage builds an analytical model - often a nonlinear static (pushover) analysis - and compares the capacity curve with the demand spectrum, reporting DCRs member by member. Vulnerability is also expressed statistically as fragility curves: the probability of reaching a damage state (slight, moderate, extensive, complete) as a function of intensity. Fragility curves feed regional loss estimates, insurance models and the retrofit prioritization of whole building classes.",
              "The factors that drive vulnerability repeat themselves across surveys: pre-code vintage, open ground storeys, floating columns, heavy brittle infills, unreinforced masonry, poor materials and maintenance, vertical and plan irregularities, and inadequate detailing - everything Units III and IV demand, absent. The output ranks buildings: acceptable as-is, retrofit to a chosen performance objective, restrict occupancy, or demolish. That ranking - and the objective chosen, life safety for ordinary stock, immediate occupancy for hospitals - is the hinge between assessment and the retrofit techniques of the next sections.",
            ],
            bullets: [
              "Rapid visual screening: a street survey with a basic score and modifiers; triage in minutes.",
              "Preliminary evaluation: DCR spot checks of the critical members.",
              "Detailed evaluation: nonlinear static (pushover) analysis, capacity versus demand.",
              "Fragility curves: probability of damage states versus intensity for building classes.",
              "Outcome: accept, retrofit, restrict use or demolish - ranked against a chosen objective.",
            ],
            table: {
              caption: "The assessment ladder.",
              headers: ["Stage", "Input", "Output"],
              rows: [
                ["Rapid visual screening", "one visit, a score sheet", "a screening score, triage"],
                ["Preliminary evaluation", "drawings if available, quick calcs", "DCR flags"],
                ["Detailed evaluation", "a full model, pushover", "capacity curve, member demands"],
                ["Decision", "cost, occupancy, objective", "a retrofit scheme or acceptance"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "The vulnerability assessment ladder",
              caption: "Cheap and broad at the entrance, expensive and precise at the exit.",
              stages: [
                { label: "Rapid visual screening", note: "street survey, score sheet" },
                { label: "Preliminary evaluation", note: "DCR checks of critical members" },
                { label: "Detailed evaluation", note: "pushover, nonlinear model" },
                { label: "Decide and rank", note: "accept, retrofit, restrict, demolish" },
              ],
            },
            callout: {
              type: "tip",
              title: "Definition-rich answers",
              body: "Vulnerability questions reward crisp definitions: write RVS, DCR and fragility curve as one-liners, then the four-step ladder. One sentence of Indian context - the post-2001 screening drives in Gujarat - strengthens any answer.",
            },
            keyTerms: [
              { term: "Rapid visual screening", definition: "A street-survey scoring procedure that identifies buildings needing detailed evaluation." },
              { term: "Demand-capacity ratio (DCR)", definition: "Member demand divided by member capacity; a DCR above 1 flags a deficiency." },
              { term: "Fragility curve", definition: "The probability of reaching a damage state as a function of ground-motion intensity." },
            ],
            examQuestions: [
              {
                q: "Describe the stages of seismic vulnerability assessment of an existing building, from rapid visual screening to detailed evaluation. List the main vulnerability factors and explain how the assessment outcome steers the retrofit decision.",
                marks: 7,
                outline: [
                  "Why assess: a pre-code stock and limited funds force prioritization.",
                  "RVS: FEMA 154-style score sheet with modifiers; minutes per building.",
                  "Preliminary: DCR checks; flag members above 1.",
                  "Detailed: nonlinear static pushover; capacity curve against the demand spectrum.",
                  "Vulnerability factors: soft storeys, URM, irregularity, vintage, detailing, maintenance.",
                  "Fragility curves for portfolio-level loss estimation.",
                  "Outcome ranking and performance objective; the link to retrofit selection.",
                ],
              },
              {
                q: "What is a demand-capacity ratio?",
                marks: 2,
              },
              {
                q: "Why do pre-code RC buildings score poorly in rapid visual screening?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.2",
            title: "Local retrofitting: jacketing techniques",
            body: [
              "When member capacity is the problem, jacketing is the answer. An RC jacket wraps the deficient member in new concrete: added longitudinal bars doweled or anchored to the parent member, new closed ties, a jacket thickness commonly of the order of 100 mm, continued through the slab by coring and tied into an enlarged or strengthened foundation. The jacket adds axial, flexural and shear strength - and stiffness: the period shortens, forces rise, and load redistributes toward the strengthened members, so the global effect must be analysed, not just the member.",
              "Steel jackets work differently. Angles at the corners with batten plates, or full casings with a small grout gap, wrap the member in a steel straitjacket that confines the core and supplies shear - with only a modest stiffness increase and far less disruption than concrete. The deliberate gap stops the casing from grabbing axial load, keeping its job confinement. FRP wrapping - carbon or glass sheets bonded with epoxy - is the third option: negligible weight and stiffness change, big gains in shear strength and confinement, speed and no change in member size, at the cost of fire-protection needs and skilled application.",
              "Selection follows the deficiency. An axial or flexural strength deficit calls for an RC jacket; a ductility or shear deficit with no room to grow the section suits a steel cage or FRP wrap. Beams receive bonded side and soffit plates or wraps; joints get corbels and haunches where access allows. Quality control decides outcomes: surface roughening, dowel anchorage, grouting and curing, and verifiable epoxy work. Jacketing is local retrofit - it fixes members. When the system itself is inadequate, the global techniques of the next section enter, and the two are frequently combined in one project.",
            ],
            bullets: [
              "RC jacket: dowels, new bars and ties, about 100 mm thickness, through-slab coring, foundation tie-in.",
              "RC jackets add strength AND stiffness - re-analyse the whole building for redistribution.",
              "Steel cage: angles and battens or a casing; confinement and shear with little stiffness change.",
              "The grout gap keeps a steel casing from attracting axial load.",
              "FRP wrap: shear and confinement, no stiffness or size change; needs fire protection and skill.",
            ],
            table: {
              caption: "Three jacket families compared.",
              headers: ["Aspect", "RC jacket", "Steel cage", "FRP wrap"],
              rows: [
                ["Strength gain", "axial + flexure + shear", "shear + confinement", "shear + confinement"],
                ["Stiffness change", "large increase", "small", "almost none"],
                ["Section size", "grows about 100 mm", "grows little", "grows millimetres"],
                ["Speed and disruption", "slow, wet, intrusive", "moderate", "fast, clean"],
                ["Watch-outs", "redistribution, slabs, foundations", "gap detailing, corrosion", "fire protection, bonding"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Anatomy of a jacketed column",
              caption: "Built from the inside out: the original member wrapped in layers of capability.",
              layers: [
                { label: "FRP sheet or steel casing (outermost)", note: "confinement and shear" },
                { label: "Grout or epoxy layer", note: "bond and load transfer" },
                { label: "Dowels into the parent column", note: "shear connection" },
                { label: "Original column core", note: "carries the standing load" },
              ],
            },
            callout: {
              type: "warning",
              title: "Never a member errand",
              body: "The classic conceptual error is jacketing one ground-storey column and walking away. Strength added in one member redistributes force to it, its neighbours and the foundations - retrofit analysis is a whole-building exercise.",
            },
            keyTerms: [
              { term: "RC jacketing", definition: "Enlarging a member with doweled reinforcement and new concrete for strength and stiffness." },
              { term: "Steel caging", definition: "Wrapping a member in angles and battens (or a casing) for confinement and shear." },
              { term: "FRP wrap", definition: "Carbon or glass fibre sheets bonded in epoxy, adding shear capacity and confinement without stiffness change." },
            ],
            examQuestions: [
              {
                q: "Compare RC jacketing, steel jacketing and FRP wrapping as column retrofit techniques: mechanism, strength and stiffness effects, construction sequence and suitability. Sketch a jacketed section.",
                marks: 7,
                outline: [
                  "When: member-level deficiencies identified by the assessment.",
                  "RC jacket: dowels, bars, ties, about 100 mm, coring, foundation; large strength and stiffness gains.",
                  "The redistribution consequence: a whole-building re-analysis is mandatory.",
                  "Steel cage: angles, battens, a grout gap; confinement and shear with little stiffness.",
                  "FRP: bonded sheets; no size or stiffness change; fire protection and quality control issues.",
                  "Suitability mapping: strength deficit versus ductility deficit.",
                  "Sketch: the original core, dowels, jacket, ties or wrap.",
                ],
              },
              {
                q: "Which jacketing technique changes the building's natural period the least?",
                marks: 2,
              },
              {
                q: "Why is a gap deliberately left between a steel casing and the column?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.3",
            title: "Global retrofitting: shear walls, bracing and infills",
            body: [
              "When the lateral system itself is inadequate, the retrofit adds one. RC shear walls are the workhorse: cast against the existing frame or added as new external walls, they multiply lateral strength and stiffness, slash drift and cure soft storeys by matching the open floor's weakness to the block above. Placement is everything: walls must sit near-symmetrically about the plan's centre of mass, or the retrofit buys torsion with its strength. Foundations must be checked - new walls deliver large overturning moments and uplift to footings that may need underpinning or piles.",
              "Steel bracing is the lighter alternative. Concentric braces - X, diagonal, V and inverted-V - add stiffness and strength with small members, often bolted to the outside of the frame with minimal disruption and no wet work; tension braces carry the load while compression braces buckle. Eccentric braces deliberately offset their work points to create short ductile links that yield and dissipate energy - stiffness with a fuse. Bracing suits buildings that need stiffness but cannot absorb the weight, thickness or construction of concrete walls.",
              "The third family strengthens what is already there. Masonry infill is strengthened with ferrocement or shotcrete overlays and mesh, corner and opening strengthening, and positive wall-to-frame connectors that stop the deadly out-of-plane collapse; openings are framed so they do not create captive columns. Mass reduction - removing heavy rooftop water tanks, replacing brittle partitions, even demolishing a problematic top storey - lowers the forces at a stroke. Diaphragm and parapet tying, collector detailing and falling-hazard removal complete the global scheme.",
            ],
            bullets: [
              "Shear walls: large strength and stiffness gains, drift control, a soft-storey cure; symmetric placement is everything.",
              "Check and usually strengthen the foundations for new wall overturning and uplift.",
              "Concentric bracing: X, V, inverted-V; light, fast, often bolted; tension works, compression buckles.",
              "Eccentric bracing: short ductile links fuse the system - stiffness with energy dissipation.",
              "Infill strengthening: ferrocement, shotcrete, connectors against out-of-plane failure; mass reduction lowers forces.",
            ],
            table: {
              caption: "Global retrofit techniques and their habitats.",
              headers: ["Technique", "Best for", "Chief caution"],
              rows: [
                ["RC shear walls", "weak, soft or drift-hungry frames", "torsion if asymmetric; foundation upgrades"],
                ["Concentric steel bracing", "stiffness without weight", "brace buckling, connection design"],
                ["Eccentric steel bracing", "stiffness plus ductility", "link detailing is specialized"],
                ["Infill strengthening", "URM out-of-plane risk", "connectors must be positive"],
                ["Mass reduction", "heavy roofs, tanks, top storeys", "functional loss; check redistribution"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Choosing the retrofit tool",
              caption: "Pick the quadrant before the product: scope against dominant effect.",
              axes: { x: "adds strength/stiffness vs adds ductility/dissipation", y: "global system vs local member" },
              quadrants: [
                { label: "RC shear walls", note: "global strength and stiffness" },
                { label: "Braced frames, dampers", note: "global dissipation" },
                { label: "RC jacketing", note: "local strength" },
                { label: "FRP wraps, steel cages", note: "local ductility and shear" },
              ],
            },
            callout: {
              type: "exam",
              title: "The menu answer",
              body: "The seven-mark version of this question expects the full menu - shear walls, bracing (concentric and eccentric), infill strengthening and mass reduction - each with one advantage, one limitation and one sketch. Symmetric wall placement and foundation checks are the examiner-favourite cautions.",
            },
            keyTerms: [
              { term: "RC shear wall", definition: "A cast-in-place wall acting as the primary lateral system; the retrofit workhorse." },
              { term: "Concentric bracing", definition: "Diagonal members meeting at beam-column points; tension-carrying and buckling-prone in compression." },
              { term: "Ferrocement", definition: "Thin mortar with closely spaced wire mesh used to strengthen masonry infill and walls." },
            ],
            examQuestions: [
              {
                q: "Discuss global retrofit options for a deficient RC frame: shear walls, steel bracing and infill strengthening. Explain their effects on stiffness, torsion and foundations, and justify why new walls must be placed symmetrically.",
                marks: 7,
                outline: [
                  "Trigger: a system-level deficiency in strength, stiffness, drift or soft storey.",
                  "Shear walls: strength and stiffness; a drift and soft-storey cure.",
                  "Symmetry: off-centre walls create torsion; place them about the centre of mass.",
                  "Foundations: overturning and uplift demand underpinning or piles.",
                  "Bracing: concentric (X, V) for stiffness; eccentric links add ductility.",
                  "Infill strengthening: ferrocement, shotcrete, connectors for out-of-plane safety.",
                  "Mass reduction and tying complete the global scheme.",
                ],
              },
              {
                q: "Why is steel bracing a lighter retrofit than adding RC shear walls?",
                marks: 2,
              },
              {
                q: "How is an unreinforced masonry infill protected against out-of-plane collapse?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.4",
            title: "Base isolation: LRB and sliding systems",
            body: [
              "Base isolation changes the question. Instead of strengthening the building to fight the ground, it decouples the two: a layer of flexible bearings between foundation and superstructure stretches the system's period from roughly half a second to 2 or 4 seconds, out beyond the energetic hump of the spectrum. Base shear drops dramatically, the superstructure rides nearly rigid above the bearings, and the drift that used to rack every storey concentrates in the isolation plane, where nothing structural lives. The force-reduction logic of Unit II - a period shift off the spectral peak - becomes the whole design.",
              "The laminated rubber bearing (LRB) is the classic device: alternating layers of rubber and steel shims give high vertical stiffness with horizontal flexibility, and a central lead plug yields in shear to dissipate energy, adding effective damping well above the structural 5 percent. Sliding systems take the pendulum route: a concave dish and articulated slider make the structure a pendulum whose period is set by the dish radius (T = 2 pi sqrt(R/g)), with friction supplying damping and gravity re-centring the mass after the event. Hybrid and elastomeric systems complete the market.",
              "Isolation is a scalpel, not a panacea. It shines for stiff, low- and mid-rise buildings - hospitals, emergency control centres - on firm soil, where the demand cut is large and long-period ground motion is modest. It wastes its money on tall slender buildings (already long-period) and on soft-soil sites whose motion concentrates exactly where the isolator moves the period. Design must provide a moat: a seismic gap of the order of 150 to 250 mm or more around the building for the bearing displacement, flexible service connections, and a plan for inspecting and replacing bearings. Since the Foothill Communities Law and Justice Center in California (1985), thousands of buildings and bridges worldwide - many of them hospitals - have adopted the technology.",
            ],
            bullets: [
              "Isolation stretches the period to 2-4 s, off the spectral peak; base shear collapses.",
              "Drift moves to the isolation plane; the superstructure stays nearly rigid and elastic.",
              "LRB: a rubber-steel laminate for vertical load, a lead core for hysteretic damping.",
              "Friction pendulum: the period set by the dish radius, T = 2 pi sqrt(R/g); friction damps, gravity recentres.",
              "Best for stiff, low or mid-rise buildings on firm soil; wrong for slender towers and soft sites; provide a moat gap.",
            ],
            codeExample: {
              language: "python",
              caption: "The period shift behind base isolation, in numbers.",
              code: `import math

# Superstructure carried on laminated rubber bearings
W = 60000.0            # weight carried by the isolators, kN
k_iso = 30000.0        # total isolator lateral stiffness, kN/m
m = W / 9.81           # equivalent mass, kN-s2/m

T_fixed = 0.6          # fixed-base period of the building, s
T_iso = 2 * math.pi * math.sqrt(m / k_iso)

print("Isolated period   :", round(T_iso, 2), "s")

# Rough demand ratio on the falling branch (Sa/g = 1.36/T
# beyond the medium-soil corner of 0.55 s); lead-core damping
# reduces the demand further in practice.
ratio = (1.36 / T_iso) / (1.36 / T_fixed)
print("Approx force ratio:", round(ratio, 3))`,
            },
            diagram: {
              kind: "compare",
              title: "Fixed base versus isolated base",
              caption: "Same building, two strategies: resist the shaking or sidestep it.",
              left: {
                heading: "Fixed base",
                items: [
                  "Period inside the energetic band",
                  "Storey drift racks the frame",
                  "Plastic hinges by design",
                  "Damage expected, repair budget too",
                  "Detailing carries the day",
                ],
              },
              right: {
                heading: "Isolated base",
                items: [
                  "Period shifted to 2-4 s",
                  "The bearing plane takes the drift",
                  "The superstructure stays near-rigid",
                  "Functional after the event",
                  "Moat, services and access designed in",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "Know the limits",
              body: "Examiners like the limits question: isolation underperforms for tall slender buildings and on soft soil, where long-period motion meets the isolated period head-on. Always state the moat gap and flexible services as design prerequisites.",
            },
            keyTerms: [
              { term: "Base isolation", definition: "Decoupling a superstructure from ground motion through a flexible, damped bearing layer." },
              { term: "Laminated rubber bearing (LRB)", definition: "A rubber-steel laminate with a lead core providing flexibility and hysteretic damping." },
              { term: "Friction pendulum system", definition: "A concave sliding isolator whose radius fixes the period; friction damps and gravity recentres." },
            ],
            examQuestions: [
              {
                q: "Explain the principle of seismic base isolation with a period-shift diagram. Describe the construction and behaviour of a laminated rubber bearing and a friction pendulum system, and state where isolation is and is not appropriate.",
                marks: 7,
                outline: [
                  "Principle: lengthen the period beyond the spectral peak; the demand falls.",
                  "Sketch: the fixed-base position versus the isolated position on the 1.36/T branch.",
                  "LRB: rubber layers for flexibility, steel shims for vertical stiffness, lead core for damping.",
                  "FPS: a concave dish; T = 2 pi sqrt(R/g); friction damping; self-centring.",
                  "Drift concentrates at the isolation interface; a moat gap of 150-250 mm or more.",
                  "Ideal: stiff low or mid-rise buildings on firm soil, especially critical facilities.",
                  "Poor: tall slender buildings and soft-soil sites; flexible services and access needed.",
                ],
              },
              {
                q: "Name two situations in which base isolation is a poor choice.",
                marks: 2,
              },
              {
                q: "How does the lead core of an LRB dissipate energy?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.5",
            title: "Damping devices, active control and the lessons of Bhuj 2001",
            body: [
              "Between full strengthening and full isolation lies a family of devices that manage energy. Passive dampers - metallic yield, friction, viscous fluid and viscoelastic - bolt into frames and dissipate energy through cycles, cutting storey drift and force without any power supply. The tuned mass damper is passive too: a mass of a few hundred tonnes (the 660-tonne sphere of Taipei 101 being the celebrity) mounted on a tower's upper floors and tuned to its fundamental period, absorbing resonant energy while the building beneath it shakes less.",
              "Active control adds sensors, a controller and powered actuators: the active mass damper drives a mass to cancel the measured motion, as first demonstrated on the Kyobashi Seiwa building in Tokyo in 1989. Its weakness is electricity - the 1995 Kobe earthquake cut power exactly when control was needed - so the field migrated toward semi-active devices (variable-orifice and magnetorheological dampers) that need only milliwatts to modulate large passive forces, and hybrid systems pairing a small active damper with a tuned mass. All remain niche additions; detailing and configuration still carry the code.",
              "Performance-based design supplies the modern vocabulary that unifies assessment, retrofit and control: choose explicit objectives - immediate occupancy, life safety, collapse prevention - at defined hazard levels, analyse nonlinearly (pushover with a capacity spectrum, or time history), and iterate until the demand curve meets the capacity curve at the intended point. The Bhuj earthquake of 26 January 2001 (Mw about 7.7, roughly 13,800 deaths) wrote the Indian case studies: open-ground-storey apartment blocks in Ahmedabad pancaked on soft soils, poorly detailed columns failed where IS 13920 confinement was absent, and brittle infills behaved as unintended stiffeners. The professional response - enforced detailing, soft-storey rules, microzonation, isolated hospitals - is precisely the syllabus of this subject.",
            ],
            bullets: [
              "Passive dampers: metallic yield, friction, viscous, viscoelastic - drift and force cuts without power.",
              "TMD: a tuned mass (Taipei 101's 660 tonnes) soaking up the resonant response of tall towers.",
              "Active control: a sensor-controller-actuator loop (AMD, Kyobashi Seiwa 1989); power-dependent.",
              "Semi-active and hybrid devices (MR dampers, AMD + TMD) need only trivial power to modulate.",
              "PBD: IO / LS / CP objectives at set hazard levels, verified by pushover; Bhuj 2001 is the Indian casebook.",
            ],
            table: {
              caption: "Structural control devices at a glance.",
              headers: ["Device", "Class", "Power", "Flagship example"],
              rows: [
                ["Tuned mass damper", "passive", "none", "Taipei 101 sphere (660 t)"],
                ["Viscous fluid damper", "passive", "none", "bridges and braced frames"],
                ["Active mass damper", "active", "full", "Kyobashi Seiwa, Tokyo (1989)"],
                ["MR damper", "semi-active", "milliwatts", "full-scale bridge trials"],
                ["Hybrid TMD + AMD", "hybrid", "partial", "Japanese towers"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "The performance-based design loop",
              caption: "Objectives drive analysis; the comparison drives redesign - around until it closes.",
              steps: [
                { label: "Choose performance objectives", note: "IO / LS / CP at set hazard levels" },
                { label: "Define the hazard", note: "spectra or time histories per site" },
                { label: "Analyse nonlinearly", note: "pushover or time history" },
                { label: "Check demand versus capacity", note: "at each performance level" },
                { label: "Accept or redesign", note: "iterate to the target performance" },
              ],
            },
            callout: {
              type: "exam",
              title: "The case-study paragraph",
              body: "Bhuj 2001 is the default case study: date, magnitude, toll, and the three signature failures - soft storeys in Ahmedabad, absent IS 13920 detailing, soft-soil amplification. Quote it in any question about lessons or retrofit motivation.",
            },
            keyTerms: [
              { term: "Tuned mass damper", definition: "A passive mass-spring-damper tuned to the structure's period to absorb resonant energy." },
              { term: "Active control", definition: "Real-time force application by powered actuators under sensor feedback." },
              { term: "Performance-based design", definition: "Design to explicit performance objectives at defined hazard levels, verified by nonlinear analysis." },
            ],
            examQuestions: [
              {
                q: "Explain passive, active and semi-active structural control with examples. Introduce performance-based design and its performance levels, and draw the lessons of the 2001 Bhuj earthquake for Indian earthquake engineering practice.",
                marks: 7,
                outline: [
                  "Passive: TMD, viscous, friction and metallic dampers - no power; Taipei 101's 660-tonne sphere.",
                  "Active: the AMD sensor-controller-actuator loop; Kyobashi Seiwa 1989; power dependency.",
                  "Semi-active and hybrid: MR dampers, AMD plus TMD; the Kobe 1995 power lesson.",
                  "PBD: objectives of immediate occupancy, life safety, collapse prevention at defined hazards.",
                  "Bhuj 2001: 26 January, Mw about 7.7, roughly 13,800 deaths.",
                  "Signature failures: Ahmedabad soft storeys, no IS 13920 detailing, soil amplification.",
                  "Response: enforcement, microzonation, isolated hospitals; PBD vocabulary for retrofit.",
                ],
              },
              {
                q: "What is the chief limitation of active control systems during earthquakes?",
                marks: 2,
              },
              {
                q: "Name the three standard performance levels of performance-based design.",
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
      id: "weightage",
      heading: "Exam weightage - where to spend the hours",
      body: [
        "RGPV CE-802(D) papers concentrate the numerical marks on the IS 1893 ladder and the force-distribution table, and the theory marks on IS 13920 detailing and the capacity design philosophy. Allocate revision time in roughly the same ratio, and keep one full practice slot per unit regardless of weight - the seismology definitions anchor the two-mark shorts of every paper.",
      ],
      weightedTopics: [
        { topic: "Base shear and the IS 1893 ladder (W, Ta, Sa/g, Ah, VB)", weight: "10-14 marks", note: "The guaranteed numerical; drill the hospital example to ninety-second recall." },
        { topic: "IS 13920 beam and column detailing", weight: "10-12 marks", note: "Checklist questions; reproduce 200 mm, 2d, d/4, 300 mm and the Lo trio from memory." },
        { topic: "Vertical distribution Qi and storey shears", weight: "8-10 marks", note: "A four-storey table appears almost every year; always show the Wi hi^2 share column." },
        { topic: "Capacity design and strong column weak beam", weight: "6-8 marks", note: "Chain analogy plus sum(Mc) >= 1.1 sum(Mb) and both sway-mechanism sketches." },
        { topic: "Soft storey and short column effects", weight: "6-8 marks", note: "Definitions (70/60 percent), the 2.5-times storey shear remedy, Bhuj 2001 evidence." },
        { topic: "Response spectrum: definition and IS 1893 curve", weight: "6-8 marks", note: "Reproduce 1 + 15T, the 2.5 plateau and 1.36/T with soil corners 0.40/0.55/0.67." },
        { topic: "Ductility, equal displacement/equal energy, R factor", weight: "6-8 marks", note: "mu definition, the Newmark rules, the R decomposition and its table." },
        { topic: "Base isolation: LRB and friction pendulum", weight: "6-8 marks", note: "Period-shift sketch, device anatomy, applicability limits and the moat gap." },
        { topic: "Retrofitting: jackets, shear walls, braces, infills", weight: "6-8 marks", note: "Menu answer: one advantage, one caution and one sketch per technique." },
        { topic: "Seismology definitions: waves, magnitude vs intensity, zones", weight: "4-6 marks", note: "Feeds the two-mark shorts; the Z table and MSK pairing are near-certain." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Assuming five days a week with two hours a day, this schedule covers every section twice - once for understanding, once for revision - and reserves the final week for full papers under exam timing.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - seismology basics", tasks: ["Boundary table with Indian examples; elastic rebound sketch", "P/S/Love/Rayleigh table and the seismogram sketch", "Magnitude vs intensity; memorize the Z table and the MSK pairing"] },
        { week: "Week 2", focus: "Unit II - dynamics", tasks: ["SDOF derivation and two period numericals; damping ratio drill", "Mode shapes, SRSS/CQC, the 90 percent rule; draw the mode pyramid", "Reproduce the IS 1893 spectrum from memory; three Sa/g lookups"] },
        { week: "Week 3", focus: "Unit III - the code ladder", tasks: ["Design philosophy and load combinations; the performance pyramid", "Rework the hospital example twice unaided (Ah = 0.082, VB = 327 kN)", "The Z, I, R dial table; quiz the R values until instant"] },
        { week: "Week 4", focus: "Unit III close and Unit IV start", tasks: ["Ta formulas: compute bare, steel and infilled variants three times each", "The 300 kN distribution table until it flows without notes", "Capacity design: chain analogy, the 1.1 rule, sway-mechanism sketches"] },
        { week: "Week 5", focus: "Unit IV - detailing", tasks: ["Beam checklist: write all numbers from memory, then check", "Column checklist: Lo trio, splice zone, tie pitch; sketch the zone-by-zone column", "Soft storey and short column: definitions, remedies, Bhuj evidence"] },
        { week: "Week 6", focus: "Unit V + full revision", tasks: ["Vulnerability ladder; jacketing comparison table from memory", "Isolation and control: period-shift sketch, LRB anatomy, device table", "Two full mock papers under time; recite the Bhuj case paragraph"] },
      ],
    },
    {
      id: "last-day",
      heading: "The last 24 hours",
      bullets: [
        "Redraw from memory: the IS 1893 spectrum with all three branches and soil corners, the equivalent static ladder, and the distribution table for the 300 kN example.",
        "Recite the number sheet: Z (0.10-0.36), I (1.0/1.5), R (1.5-5.0), the Ta formulas, 200 mm and 2d and d/4, 300 mm, the Lo trio, the 1.1 SCWB rule, 2.5-times soft-storey shear, 5 percent accidental eccentricity.",
        "Re-run the worked hospital numerical (Ta = 0.6 s, Ah = 0.082, VB = 327 kN) until the chain flows without notes.",
        "Sketch four figures once each: the sway mechanisms, a beam hinge-zone cross-section, a jacketed column, and the isolation period-shift diagram.",
        "Skim Bhuj 2001 (26 January, Mw about 7.7, roughly 13,800 deaths, soft storeys, detailing, soil) - one paragraph serves five different questions.",
        "Stop by early evening; rested recall beats one more tired pass through the tables.",
      ],
    },
    {
      id: "exam-tips",
      heading: "Exam-hall strategy",
      examTips: [
        "Open long answers with the definition or philosophy verbatim - definition lines are marked separately from the working.",
        "In every numerical, chain the formulas visibly (Ta, then Sa/g, then Ah, then VB) - method marks survive arithmetic slips.",
        "Sketches earn: the spectrum, the sway mechanisms, a hinge-zone cross-section, the isolation period shift. Label axes and dimensions.",
        "Quote clause numbers and code names (IS 1893 Table values, IS 13920 detailing) - a cited answer outscores an anonymous one.",
        "Time-box: 2-3 mark shorts in 4-5 minutes, 7-mark questions in 15, and hold the last 10 minutes to verify every table has its headers and every diagram its labels.",
      ],
    },
    {
      id: "slips",
      heading: "Common slips that cost easy marks",
      bullets: [
        "Writing Ah with Z instead of Z/2 - the design basis is about half the MCE; forgetting the halving doubles the base shear.",
        "Distributing Qi by Wi hi instead of Wi hi^2 - the square law is the whole point of the distribution.",
        "Quoting R = 5 (SMRF) without mentioning IS 13920 detailing - examiners treat the omission as a conceptual error.",
        "Using a computed long period to slide down the 1.36/T branch - the empirical Ta and the base-shear scaling clause exist to prevent it.",
        "Placing column laps inside the Lo end zones - laps belong in the middle half of the clear height.",
        "Mixing magnitude with intensity (Bhuj was Mw about 7.7; MSK reached X in Kutch) - one value sizes the source, the other grades the local effect.",
      ],
    },
  ],
};
