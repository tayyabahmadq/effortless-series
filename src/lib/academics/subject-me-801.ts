/**
 * Academics - RGPV ME 8th-semester subject: ME-801 Refrigeration and Air
 * Conditioning.
 *
 * Structure mirrors subject-cs-302.ts: units -> one chapter per unit ->
 * numbered sections.  Each section carries body paragraphs, bullets, a
 * diagram, key terms, a callout, a table or python code sample, and three
 * exam-style questions (one 7-mark with outline + two shorts).
 */

import type { AcademicSubject } from "./types";

export const me801: AcademicSubject = {
  id: "me-801",
  code: "ME-801",
  title: "Refrigeration and Air Conditioning",
  semester: "VIII Semester",
  program: "RGPV · Mechanical Engineering",
  tagline:
    "The complete visual guide to RAC for mechanical engineering: refrigeration fundamentals and refrigerants, vapour compression and absorption systems, gas and unconventional cycles, psychrometry and cooling loads, and the applications and controls that turn cycles into plant.",
  description:
    "Five units walk from the ton of refrigeration, COP and the reversed Carnot benchmark, through refrigerant chemistry after Montreal and Kigali, into the vapour compression cycle on the P-h chart with subcooling, superheating, multistage and cascade variations, then the ammonia-water and LiBr-water absorption machines. Unit III refrigerates with air, steam, electrons, vortices and liquefied gases. Unit IV builds psychrometry, comfort, system classifications, CLTD cooling loads and duct-fan design. Unit V ends with cold storage, transport and data centre practice, thermostats and safety cutouts, BEE stars and VRF heat recovery - every section paired with a redrawable diagram and the questions RGPV actually asks.",
  accentColor: "#0ea5e9",
  emoji: "RA",
  unitCount: 5,
  totalSections: 25,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Refrigeration Fundamentals",
      summary:
        "What refrigeration is and how it is measured: the ton of refrigeration, coefficient of performance, the reversed Carnot ideal, a survey of methods, refrigerant properties and nomenclature, and the ODP/GWP lens that reshaped refrigerant choice.",
      chapter: {
        number: "01",
        title: "Fundamentals of Refrigeration",
        intro:
          "Unit I fixes the vocabulary and the benchmarks: refrigeration and its units with the ton of refrigeration, COP and the reversed Carnot cycle that caps every machine, the family tree of refrigeration methods, refrigerant numbering and properties, and the ozone and global-warming rules that decided which refrigerants survive.",
        inOneBreath:
          "Refrigeration moves heat uphill from a cold space to a warm sink by spending work; one ton of refrigeration equals 3.517 kW; the reversed Carnot COP T_L/(T_H - T_L) caps every real machine; refrigerants are numbered by composition and now judged by ODP and GWP after the Montreal and Kigali protocols.",
        sections: [
          {
            number: "1.1",
            title: "Refrigeration, its applications and the ton of refrigeration",
            body: [
              "Refrigeration is the process of removing heat from a space, a substance or a process fluid and rejecting it to a warmer surroundings, so that the cooled space stays below the temperature of its environment. Since heat never flows unaided from a colder body to a hotter one, every refrigerator is a reversed heat engine that consumes external work - electrical, mechanical or thermal. The applications are everywhere: food preservation and the cold chain, comfort and process air conditioning, ice making, gas liquefaction and cryogenics, chemical and pharmaceutical processes, electronics cooling and medical preservation from vaccines to blood banks.",
              "The practical unit of refrigeration is the ton of refrigeration, TR, born from the ice trade. It is defined as the rate of heat removal needed to melt one short ton - 907 kg - of ice at 0 C in 24 hours. With a latent heat of fusion of about 335 kJ/kg, the arithmetic is 907 x 335 = 303,845 kJ per day, which divided by 86,400 seconds gives 3.517 kW. So 1 TR = 3.517 kW = 12,000 Btu/h, and a cold store rejecting 70 kW of load is roughly a 20 TR plant. The refrigerating effect is the heat absorbed per kilogram of refrigerant in the evaporator, and total capacity is simply mass flow times refrigerating effect.",
              "A refrigerator and a heat pump are the same machine judged by different purposes: the refrigerator is rated on the heat it removes from the cold space, the heat pump on the heat it delivers to the warm space. The same distinction fixes which coefficient of performance you quote. Rating conditions matter too - a compressor nominally rated at 10 TR delivers that only at specified evaporating and condensing temperatures, which is why manufacturers publish capacity curves rather than single numbers.",
            ],
            bullets: [
              "Refrigeration removes heat to hold a space below ambient; because heat will not flow uphill unaided, external work must always be paid.",
              "1 TR = 3.517 kW = 12,000 Btu/h, derived from melting one short ton (907 kg) of ice in 24 h at 335 kJ/kg latent heat.",
              "Refrigerating effect is the heat absorbed per kg of refrigerant in the evaporator (kJ/kg); plant capacity = mass flow x refrigerating effect.",
              "A refrigerator and a heat pump are the same cycle - the purpose decides whether the cold side or the hot side is credited.",
              "Applications span the food cold chain, comfort and process air conditioning, ice making, gas liquefaction, electronics and medical cooling.",
            ],
            table: {
              caption: "Refrigeration units and conversions worth memorising.",
              headers: ["Quantity", "Definition", "Value"],
              rows: [
                ["1 TR", "heat to melt 907 kg ice in 24 h", "3.517 kW"],
                ["1 TR", "in British units", "12,000 Btu/h"],
                ["1 TR", "in metric heat units", "≈ 3025 kcal/h"],
                ["1 kW", "in British units", "3412 Btu/h"],
                ["Latent heat of ice", "0 C, atmospheric pressure", "335 kJ/kg"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "How a cold room earns its tons",
              caption: "Follow the heat from product to ambient - the path every vapour compression plant repeats.",
              steps: [
                { label: "Product, fan and infiltration heat enter the cold room" },
                { label: "Evaporator absorbs it as refrigerant boils", note: "the refrigerating effect" },
                { label: "Compressor lifts the heat to condenser pressure" },
                { label: "Condenser rejects the heat to ambient" },
                { label: "Check: room load vs plant TR rating", note: "capacity curves, not nameplate" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "The TR derivation is a guaranteed short question: write 907 kg x 335 kJ/kg = 303,845 kJ per 24 h, divide by 86,400 s, land on 3.517 kW. Show the unit chain explicitly - examiners award the method marks for the conversion, not the final number alone.",
            },
            keyTerms: [
              { term: "Refrigeration", definition: "The process of extracting heat from a space or substance and rejecting it to warmer surroundings using external energy." },
              { term: "Ton of refrigeration", definition: "Heat removal rate equal to melting one short ton (907 kg) of ice at 0 C in 24 hours; 3.517 kW or 12,000 Btu/h." },
              { term: "Refrigerating effect", definition: "Heat absorbed by one kilogram of refrigerant while evaporating in the evaporator, in kJ/kg." },
            ],
            examQuestions: [
              {
                q: "Define refrigeration and the ton of refrigeration. Derive the kW equivalent of 1 TR and distinguish a refrigerator from a heat pump, giving both COP definitions.",
                marks: 7,
                outline: [
                  "Define refrigeration as heat removal below ambient using external work.",
                  "Define TR as melting 907 kg of ice in 24 h at 0 C.",
                  "Compute: 907 x 335 kJ / (24 x 3600 s) = 3.517 kW; also quote 12,000 Btu/h.",
                  "Note refrigerating effect and capacity = mass flow x refrigerating effect.",
                  "Explain that refrigerator and heat pump are the same machine with different credited sides.",
                  "Give COP_R = Q_L / W and COP_HP = Q_H / W = COP_R + 1.",
                  "List applications in one line to close: food, comfort, cryogenics, electronics.",
                ],
              },
              {
                q: "A cold storage load is 20 TR. Express it in kW and kcal/h.",
                marks: 2,
              },
              {
                q: "Justify the statement: a refrigerator is a reversed heat engine.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.2",
            title: "Coefficient of performance and the reversed Carnot cycle",
            body: [
              "The coefficient of performance judges a refrigerating machine the way thermal efficiency judges an engine, but with the desired effect in the numerator: for a refrigerator COP = heat removed Q_L divided by net work input W, and for a heat pump COP = heat delivered Q_H divided by W. Because the machine moves heat rather than creating it, COP legitimately exceeds 1 - a window unit with COP 3.5 removes 3.5 kW of heat for every kW of electricity. A heat pump and refrigerator working between the same reservoirs satisfy COP_HP = COP_R + 1, since Q_H = Q_L + W.",
              "The reversed Carnot cycle is the benchmark: the same four processes as the Carnot power cycle run backwards. The refrigerant is compressed isentropically from the low temperature T_L to the high temperature T_H, rejects heat isothermally at T_H while condensing, expands isentropically back to T_L, and absorbs heat isothermally at T_L while evaporating. Working the steady-flow energy balance gives COP_Carnot = T_L / (T_H - T_L), with absolute temperatures in kelvin. A cold store at -10 C (263 K) rejecting to 40 C (313 K) has a Carnot COP of 263/50 ≈ 5.26 - the ceiling no real plant between those temperatures can beat.",
              "The ceiling is unreachable because isothermal heat transfer needs an infinitely slow, infinitely large heat exchanger, and real cycles accept finite temperature differences to keep equipment affordable. The formula still pays the engineer: reducing temperature lift - raising the evaporating temperature or lowering the condensing temperature - raises the Carnot COP directly, and each kelvin of lift avoided is worth roughly 2-3% of the energy bill for the life of the plant. Real machines capture 50-65% of Carnot, so the ratio of actual to Carnot COP is a fair health check on any installation.",
            ],
            bullets: [
              "COP = desired effect / net work input: Q_L/W for refrigerators, Q_H/W for heat pumps, and COP_HP = COP_R + 1.",
              "COP above 1 is normal and violates nothing - the machine transports heat, it does not create it.",
              "Reversed Carnot COP = T_L / (T_H - T_L) with temperatures in kelvin.",
              "The same machine is a refrigerator in summer and a heat pump in winter; the purpose fixes the COP definition.",
              "Every kelvin of reduced temperature lift - higher evaporator or lower condenser - lifts the Carnot ceiling by about 2-3% of plant energy.",
            ],
            diagram: {
              kind: "cycle",
              title: "The reversed Carnot cycle",
              caption: "Two isotherms and two isentropes - the reference every real cycle is measured against.",
              steps: [
                { label: "1-2 Isentropic compression", note: "temperature rises from T_L to T_H" },
                { label: "2-3 Isothermal heat rejection at T_H", note: "condensation" },
                { label: "3-4 Isentropic expansion", note: "temperature falls back to T_L" },
                { label: "4-1 Isothermal evaporation at T_L", note: "the refrigerating effect" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "Carnot COP and the price of temperature lift",
              code: `def carnot_cop(t_low_c, t_high_c):
    """COP of a reversed Carnot cycle between two reservoirs."""
    tl = t_low_c + 273.15
    th = t_high_c + 273.15
    return tl / (th - tl)

# Cold store: -10 C inside, 40 C condensing temperature
print(round(carnot_cop(-10, 40), 2))    # 5.26

# Same store with a cleaner condenser: 35 C instead of 40 C
print(round(carnot_cop(-10, 35), 2))    # 5.80

# Raising the evaporator by 5 K helps just as much
print(round(carnot_cop(-5, 40), 2))     # 5.83

# Real plants capture 50-65% of Carnot, so every kelvin of
# avoided lift is roughly 2-3% energy saved for the plant's life.
`,
            },
            callout: {
              type: "warning",
              title: "Kelvin, always",
              body: "Students lose easy marks by plugging Celsius into T_L/(T_H - T_L). Convert first: -10 C becomes 263 K, 40 C becomes 313 K, and only then divide. The denominator may be a temperature difference - identical in both scales - but the numerator must be absolute temperature.",
            },
            keyTerms: [
              { term: "Coefficient of performance", definition: "Ratio of the desired heat effect to the net work input of a refrigeration or heat pump cycle." },
              { term: "Reversed Carnot cycle", definition: "A Carnot power cycle run in reverse - two isentropes and two isotherms - giving the maximum possible COP between two reservoirs." },
              { term: "Temperature lift", definition: "The difference T_H - T_L between condensing and evaporating temperatures; the quantity a designer minimises." },
            ],
            examQuestions: [
              {
                q: "Draw the reversed Carnot cycle on T-s axes, derive its COP, and explain why practical refrigeration cycles cannot attain it.",
                marks: 7,
                outline: [
                  "Sketch the rectangle on T-s axes and label all four states.",
                  "Describe the four processes: isentropic compression, isothermal rejection, isentropic expansion, isothermal evaporation.",
                  "Apply the steady flow energy balance to obtain COP = T_L/(T_H - T_L).",
                  "Explain: isothermal heat transfer needs zero temperature difference, hence infinite area or time.",
                  "Note that real cycles trade COP for finite heat exchanger size and finite compression speed.",
                  "State the design lesson: minimise temperature lift to approach Carnot.",
                ],
              },
              {
                q: "A refrigerator removes 3.5 kW of heat using 800 W of work. Find its COP.",
                marks: 2,
              },
              {
                q: "Show that the heat pump COP equals the refrigerator COP plus one for the same cycle.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.3",
            title: "Methods of refrigeration: a survey",
            body: [
              "Refrigerating machines come in families. Vapour compression systems - the overwhelming majority - pump a refrigerant around a closed loop of compressor, condenser, valve and evaporator, exploiting the latent heat of phase change. Vapour absorption systems replace the compressor with a generator, absorber and a small pump, so heat rather than electricity drives them. Gas cycles such as Bell-Coleman refrigerate with air that never changes phase. Steam jet systems compress water vapour with an ejector, thermoelectric modules pump heat with DC current, vortex tubes split compressed air into hot and cold streams, and magnetic refrigeration reaches millikelvin by adiabatic demagnetisation.",
              "The deep division is between vapour and gas systems. Vapour systems absorb and reject heat at nearly constant temperature because latent heat dominates - a small mass flow carries a large duty, so the machinery is compact. Gas systems use only sensible heat, so the working fluid temperature glides during heat transfer, the mass flow per kilowatt is large, and heat exchangers become bulky; in exchange the fluid is free and safe. Non-conventional devices trade efficiency for virtues nothing else offers: thermoelectric coolers are silent and miniature, vortex tubes need only a compressed-air line, and steam ejectors have no moving parts at all.",
              "Selection is an engineering judgement, not a COP contest. The questions to ask are: what temperature level and capacity are needed, what energy sources exist on site - electricity, waste steam, gas, solar - what safety, noise and vibration limits apply, and what maintenance skill is available. A hotel with a boiler and cheap steam favours absorption; a remote telecom shelter favours a vapour compression unit with wide tolerance; an aircraft exploits its own engine bleed air through an air-cycle machine. Every method in this survey has a niche where it is the correct answer.",
            ],
            bullets: [
              "Vapour systems - compression and absorption - exploit latent heat at near-constant temperature, which keeps mass flow and hardware small.",
              "Gas cycles such as Bell-Coleman use sensible heat only: bulky exchangers, but the working fluid is free and safe.",
              "Absorption machines swap the compressor for a generator and pump, so waste heat, steam or solar energy can drive cooling.",
              "Thermoelectric and vortex devices sacrifice COP for silence, size or intrinsic safety - no refrigerant, few or no moving parts.",
              "Selection weighs capacity, temperature lift, available energy, safety, noise and maintenance skill - COP alone never decides.",
            ],
            table: {
              caption: "Refrigeration methods compared.",
              headers: ["Method", "Energy input", "Typical COP", "Best niche"],
              rows: [
                ["Vapour compression", "electric or shaft work", "3-6", "almost every duty, 0.3 to 2000 TR"],
                ["Vapour absorption", "steam, gas, solar heat", "0.5-1.2", "hotels, hospitals, CCHP and solar cooling"],
                ["Air (Bell-Coleman)", "compressor work", "0.5-2", "aircraft cabins with bleed air"],
                ["Steam jet (ejector)", "motive steam", "0.2-0.5", "mills with spare steam needing chilled water"],
                ["Thermoelectric", "DC electricity", "0.3-0.7", "portable and spot coolers, sensors"],
                ["Vortex tube", "compressed air", "≈ 0.1", "machine-tool and cabinet spot cooling"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Choosing the refrigeration method",
              caption: "Match the machine to the duty and the energy actually available on site.",
              start: "What is the duty, and which energy source is cheap here?",
              branches: [
                { label: "Vapour compression", outcome: "General-purpose cooling from a fraction of a TR to megawatts - COP 3 to 6 on electricity", good: true },
                { label: "Vapour absorption with waste heat", outcome: "Steam or exhaust already paid for - cooling at COP ≈ 0.7 with almost no electricity", good: true },
                { label: "Air cycle for aircraft", outcome: "Engine bleed air arrives free and pressurised; cabin air is the working fluid", good: true },
                { label: "Thermoelectric for whole buildings", outcome: "COP below 1 at room-cooling scale - electricity cost rules it out", good: false },
              ],
            },
            callout: {
              type: "tip",
              title: "Sketch, then argue",
              body: "When a question says 'classify refrigeration methods', draw the family tree first - vapour vs gas, then compression vs absorption under vapour - and annotate one line per method: working fluid, energy input, typical COP, one application. The diagram carries as many marks as the prose.",
            },
            keyTerms: [
              { term: "Vapour compression", definition: "Refrigeration by mechanically circulating a fluid that evaporates and condenses in a closed loop." },
              { term: "Vapour absorption", definition: "A refrigeration cycle in which a heat-driven generator, absorber and pump replace the compressor." },
              { term: "Non-conventional refrigeration", definition: "Cooling by thermoelectric, vortex, steam jet, magnetic or other means outside the vapour and gas cycle families." },
            ],
            examQuestions: [
              {
                q: "Classify the methods of refrigeration with simple sketches, and explain the criteria that decide the selection of a system for a given duty.",
                marks: 7,
                outline: [
                  "Draw the family tree: vapour cycles, gas cycles, and non-conventional methods.",
                  "Explain vapour compression in one line with its four components.",
                  "Explain vapour absorption and why heat can replace compressor work.",
                  "Describe air cycle, steam jet, thermoelectric and vortex tube briefly.",
                  "Compare vapour vs gas systems: latent vs sensible heat, size and mass flow.",
                  "List selection criteria: temperature, capacity, energy source, safety, noise, maintenance.",
                  "Give one matching application for each family.",
                ],
              },
              {
                q: "Name two refrigeration methods that use no moving parts.",
                marks: 2,
              },
              {
                q: "Why is vapour compression preferred over air refrigeration for domestic applications?",
                marks: 3,
              },
            ],
          },
          {
            number: "1.4",
            title: "Refrigerants: properties and nomenclature",
            body: [
              "A refrigerant is the working fluid that carries heat around the cycle, and the whole plant is designed around its character. Thermodynamically it should have a high latent heat of vaporisation for a large effect per kilogram, a low suction vapour specific volume so the compressor stays small, a high critical temperature so it can condense on hot days, and a low freezing point for deep cold. Practically it must be non-toxic and non-flammable in the concentrations expected, chemically stable over years, non-corrosive to metals and windings, miscible with lubricating oil, cheap, and detectable when it leaks.",
              "The R-numbering system encodes composition for halocarbons. For a saturated compound C_m H_n F_p Cl_q, the digits are (m - 1), (n + 1) and p, with leading zeros dropped. R-12, CCl2F2, has m = 1, n = 0, p = 2, giving 0-1-2, hence R-12. R-134a, C2H2F4, gives (2-1), (2+1), 4 = 134, the letter 'a' distinguishing the isomer. Series carry meaning: methane derivatives occupy 000-029, ethane 100-199, blends follow - 400-series are zeotropes whose composition shifts as they evaporate, 500-series are azeotropes that behave like single substances, 600-series are hydrocarbons such as R-600a isobutane, 700-series are inorganics numbered by molecular mass - R-717 ammonia, R-718 water, R-744 carbon dioxide.",
              "In practice a handful of fluids dominate. R-22 served decades of splits and packaged units and is now phased out under the Montreal schedule; R-134a holds automotive and chiller duty; R-410A powered high-efficiency splits until its global warming potential forced a rethink; R-32, R-454B and HFOs such as R-1234yf are the low-GWP generation; ammonia rules industrial cold storage for its efficiency and near-zero environmental cost; CO2 and hydrocarbons grow in retail and domestic use. Safety classes run A/B for toxicity and 1/2L/2/3 for flammability - A1 the safest, and mildly flammable A2L fluids now need risk assessments.",
            ],
            bullets: [
              "A good refrigerant shows high latent heat, low suction specific volume, high critical temperature and low freezing point.",
              "Safety classes pair toxicity (A/B) with flammability (1, 2L, 2, 3); A1 fluids such as R-134a need the fewest precautions.",
              "Decode R-numbers as (carbons - 1)(hydrogens + 1)(fluorines): R-12 is CCl2F2, R-134a is C2H2F4.",
              "Series shortcuts: 400 zeotropic blends, 500 azeotropes, 600 hydrocarbons, 700 inorganics by molar mass (R-717, R-718, R-744).",
              "Modern choice weighs ODP and GWP as heavily as thermodynamics - environmental law now decides which fluids may be sold.",
            ],
            diagram: {
              kind: "flow",
              title: "Decoding R-134a",
              caption: "Four rules turn any halocarbon formula into its R-number.",
              steps: [
                { label: "Write the formula: C2H2F4" },
                { label: "First digit = carbons - 1 = 1" },
                { label: "Second digit = hydrogens + 1 = 3" },
                { label: "Third digit = fluorines = 4" },
                { label: "Suffix 'a' names the isomer", note: "R-134a identified" },
              ],
            },
            table: {
              caption: "Where the refrigerant series live.",
              headers: ["Series", "Family", "Examples"],
              rows: [
                ["000-029", "methane derivatives", "R-11, R-12, R-22"],
                ["100-199", "ethane derivatives", "R-134a, R-143a, R-152a"],
                ["400", "zeotropic blends", "R-407C, R-410A"],
                ["500", "azeotropic blends", "R-502, R-507"],
                ["600", "hydrocarbons", "R-290 propane, R-600a isobutane"],
                ["700", "inorganic (by molar mass)", "R-717 NH3, R-718 H2O, R-744 CO2"],
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Practise decoding both ways: formula to number (R-22 = CHClF2) and number to formula. Then anchor the 700-series by molar mass - ammonia 17, water 18, carbon dioxide 44 - because that pairing is a favourite two-mark question.",
            },
            keyTerms: [
              { term: "Refrigerant", definition: "The working fluid that absorbs heat by evaporating at low pressure and rejects it by condensing at high pressure." },
              { term: "Zeotropic blend", definition: "A mixture whose components evaporate at slightly different temperatures, so its composition glides during phase change." },
              { term: "Critical temperature", definition: "The temperature above which a vapour cannot be condensed, however high the pressure; it caps the condensing temperature a refrigerant permits." },
            ],
            examQuestions: [
              {
                q: "State the desirable properties of a refrigerant and explain the R-numbering system, decoding R-12 and R-134a as examples.",
                marks: 7,
                outline: [
                  "List thermodynamic wants: high latent heat, low specific volume of suction vapour, high critical temperature, low freezing point.",
                  "List practical wants: non-toxic, non-flammable, stable, non-corrosive, oil-miscible, cheap, easily detected.",
                  "State the digit rule (m - 1)(n + 1)(p) for C_m H_n F_p Cl_q.",
                  "Decode R-12 = CCl2F2 step by step.",
                  "Decode R-134a = C2H2F4 and explain the suffix 'a'.",
                  "Mention the series: 400 zeotropes, 500 azeotropes, 600 hydrocarbons, 700 inorganics.",
                ],
              },
              {
                q: "Decode R-22 and write its chemical formula.",
                marks: 2,
              },
              {
                q: "Why does ammonia remain the first choice for large cold storage despite its toxicity?",
                marks: 3,
              },
            ],
          },
          {
            number: "1.5",
            title: "ODP, GWP and the refrigerant transition",
            body: [
              "The ozone story changed refrigeration forever. Chlorofluorocarbons are chemically inert in the lower atmosphere, so leaked molecules drift to the stratosphere, where ultraviolet light splits off a chlorine atom. Each chlorine atom catalytically destroys many thousands of ozone molecules before it is scavenged. Ozone depletion potential, ODP, measures the damage per kilogram relative to R-11, which is fixed at ODP = 1. CFCs such as R-12 share ODP ≈ 1; the transitional HCFC R-22 sits near 0.05 because hydrogen in the molecule lets it break down lower in the atmosphere.",
              "Global warming potential, GWP, is the second scorecard: the integrated warming effect of a kilogram of gas over 100 years relative to carbon dioxide, GWP = 1. The numbers are sobering - R-11 ≈ 4,600, R-12 ≈ 10,900, R-134a ≈ 1,430, R-410A ≈ 2,100, R-32 ≈ 675, R-1234yf below 1, ammonia 0. The Montreal Protocol of 1987 froze CFC production, its amendments retired HCFCs on a schedule running to 2030 for developing economies, and the Kigali Amendment of 2016 brought HFCs inside the same treaty with a phasedown aimed at roughly an 85% cut by 2047. Refrigerant selection is now regulation, not preference.",
              "The engineering response has been a ladder of replacements - CFC to HCFC to HFC to HFO blends and natural refrigerants - each rung greener and each demanding new engineering. Mildly flammable A2L fluids such as R-32 and R-1234yf need charge limits and ventilation rules; CO2 runs transcritically at 100 bar; hydrocarbons demand strict charge caps indoors; ammonia requires machine-room detection and ventilation. Holistic metrics help decide: TEWI adds direct refrigerant emissions to the indirect emissions of the electricity the plant consumes over its life, so an efficient plant running a moderately high-GWP fluid can beat an inefficient one on a nominally green fluid. Recovery, recycling and certified technicians complete the picture.",
            ],
            bullets: [
              "ODP measures ozone damage per kg against R-11 (ODP = 1); CFCs score ≈ 1, HCFC R-22 ≈ 0.05, HFCs 0.",
              "GWP measures 100-year warming per kg against CO2 (GWP = 1); R-134a ≈ 1,430, R-410A ≈ 2,100, R-32 ≈ 675.",
              "Montreal Protocol (1987) retired CFCs; its Kigali Amendment (2016) now phases HFCs down toward an 85% cut by 2047.",
              "The replacement ladder runs CFC -> HCFC -> HFC -> HFO blends and naturals (NH3, CO2, hydrocarbons), each with new safety rules.",
              "TEWI = direct refrigerant emissions + indirect energy emissions, so efficiency and leak-tightness can outweigh a fluid's GWP.",
            ],
            diagram: {
              kind: "flow",
              title: "The refrigerant transition",
              caption: "Each rung fixed the previous generation's flaw and exposed a new one.",
              steps: [
                { label: "CFCs (R-11, R-12): ODP 1", note: "banned from 1996" },
                { label: "HCFCs (R-22): ODP ≈ 0.05", note: "transitional, phased out by 2030" },
                { label: "HFCs (R-134a, R-410A): ODP 0", note: "but GWP 1,400-2,100" },
                { label: "Kigali Amendment 2016", note: "HFC phasedown begins" },
                { label: "HFOs and naturals: R-1234yf, R-32, NH3, CO2", note: "GWP near zero" },
              ],
            },
            table: {
              caption: "ODP and GWP of common refrigerants (100-year GWP).",
              headers: ["Refrigerant", "Type", "ODP", "GWP"],
              rows: [
                ["R-11", "CFC", "1.0", "≈ 4,600"],
                ["R-12", "CFC", "1.0", "≈ 10,900"],
                ["R-22", "HCFC", "≈ 0.05", "≈ 1,800"],
                ["R-134a", "HFC", "0", "≈ 1,430"],
                ["R-410A", "HFC blend", "0", "≈ 2,100"],
                ["R-32", "HFC", "0", "≈ 675"],
                ["R-1234yf", "HFO", "0", "< 1"],
                ["R-717 (ammonia)", "natural", "0", "0"],
              ],
            },
            callout: {
              type: "warning",
              title: "Numbers move - habits should not",
              body: "GWP values are revised between IPCC assessment reports, so quote them as approximate and cite the table you used. What never changes: CFCs destroy ozone, HFCs warm the climate, and the protocol timeline - 1987 Montreal, 2016 Kigali - is safe to state exactly.",
            },
            keyTerms: [
              { term: "ODP", definition: "Ozone depletion potential: ozone destroyed per kg of gas relative to R-11, which is fixed at 1." },
              { term: "GWP", definition: "Global warming potential: 100-year integrated warming effect per kg of gas relative to carbon dioxide." },
              { term: "TEWI", definition: "Total equivalent warming impact: lifetime direct refrigerant emissions plus indirect emissions from the plant's energy use." },
            ],
            examQuestions: [
              {
                q: "Define ODP and GWP, explain how CFCs damage the ozone layer, and outline the refrigerant phase-out timeline from Montreal to Kigali.",
                marks: 7,
                outline: [
                  "Define ODP relative to R-11 = 1 and GWP relative to CO2 = 1 over 100 years.",
                  "Explain the mechanism: inert CFCs survive to the stratosphere; UV releases chlorine; chlorine catalytically destroys ozone.",
                  "Quote representative values: R-12 ODP 1, R-22 ODP 0.05, R-134a GWP 1,430, R-32 GWP 675.",
                  "Montreal Protocol 1987: CFC freeze and phase-out.",
                  "HCFC transition with retirement scheduled by 2030 in developing economies.",
                  "Kigali Amendment 2016: HFC phasedown targeting about 85% reduction by 2047.",
                  "Close with the replacement ladder: HFOs, R-32, naturals such as NH3 and CO2.",
                ],
              },
              {
                q: "Why do HFCs have zero ODP but high GWP?",
                marks: 2,
              },
              {
                q: "Suggest suitable refrigerants for a domestic split air conditioner and a large cold store, with one reason each.",
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
      title: "Vapour Compression and Vapour Absorption Systems",
      summary:
        "The workhorse of the subject: the vapour compression cycle on the P-h chart, subcooling and superheating, multistage and cascade arrangements for deep cold, and the two absorption pairs - ammonia-water with its rectifier and the LiBr-water chiller.",
      chapter: {
        number: "02",
        title: "VCRS and VAR Systems",
        intro:
          "Unit II studies both ways of running a vapour cycle. Compression systems do it with a compressor and electricity; absorption systems do it with heat, an absorber and a pump. Between them sit the performance tricks - subcooling, superheating, intercooling, cascading - that exam papers probe hardest.",
        inOneBreath:
          "The vapour compression cycle compresses, condenses, throttles and evaporates a refrigerant, and every quantity reads straight off the P-h chart; subcooling stretches the refrigerating effect while superheating protects the compressor; multistage and cascade systems beat high pressure ratios; absorption systems swap the compressor for generator, absorber and pump - ammonia-water for deep cold, LiBr-water for chilled water.",
        sections: [
          {
            number: "2.1",
            title: "The vapour compression cycle on the P-h diagram",
            body: [
              "The vapour compression refrigeration system has exactly four components joined by pipe: a compressor that raises the refrigerant from evaporating to condensing pressure, a condenser that rejects heat to ambient as the vapour desuperheats and condenses, an expansion valve that drops the pressure through a throttle, and an evaporator where the refrigerant boils absorbing the load. The pressure-enthalpy chart turns this into geometry: pressure on a log scale vertically, enthalpy horizontally, the saturation dome between liquid and vapour lines, and constant-pressure processes as horizontal lines, so the cycle becomes a quadrilateral you can read like a balance sheet.",
              "Walk the states. Point 1 is saturated or slightly superheated vapour entering the compressor; 1-2 is ideally isentropic compression to a superheated discharge. 2-3 is the constant-pressure path through the condenser - first desuperheating, then condensing on the flat two-phase line. 3-4 is throttling: isenthalpic, so it drops vertically on the chart, and some liquid flashes to vapour. 4-1 is constant-pressure evaporation back to the dome. All the exam quantities are horizontal and vertical distances: refrigerating effect RE = h1 - h4, compressor work W = h2 - h1, and COP = (h1 - h4)/(h2 - h1).",
              "Illustrative numbers make it real. Take R-134a between -10 C and 40 C: h1 ≈ 392.6, h2 ≈ 425.0, h3 = h4 ≈ 256.4 kJ/kg. Then RE = 136.2 kJ/kg, W = 32.4 kJ/kg and COP ≈ 4.2. A 10 TR plant - 35.2 kW - needs a mass flow of 35.2/136.2 ≈ 0.26 kg/s and about 8.4 kW of compressor power. Practitioners prefer the P-h chart to the T-s chart precisely because these energy quantities appear as lengths, capacity and power follow from one multiplication each, and the effects of changing either pressure, subcooling or superheat are visible as shifts of the corner points.",
            ],
            bullets: [
              "Four components, one closed loop: compressor, condenser, expansion valve, evaporator - learn the state points between them.",
              "On the P-h chart constant-pressure lines are horizontal, so evaporation and condensation are flat lines inside the dome.",
              "Throttling is isenthalpic - a vertical line, the only irreversible process in the ideal cycle.",
              "RE = h1 - h4, W = h2 - h1, COP = (h1 - h4)/(h2 - h1): all read as lengths on the chart.",
              "Dry compression - slightly superheated suction - protects the compressor from liquid slugging and is the practical default.",
            ],
            diagram: {
              kind: "cycle",
              title: "The vapour compression cycle",
              caption: "Four processes, four corners of the P-h quadrilateral.",
              steps: [
                { label: "1-2 Compression", note: "isentropic; discharge is superheated vapour" },
                { label: "2-3 Condensation", note: "desuperheat, then condense at constant pressure" },
                { label: "3-4 Throttling", note: "vertical isenthalpic drop; flash gas forms" },
                { label: "4-1 Evaporation", note: "boiling absorbs the load" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "VCRS performance from P-h state enthalpies",
              code: `def vcrs_cop(h1, h2, h4):
    """COP of an ideal vapour compression cycle from state enthalpies."""
    re = h1 - h4        # refrigerating effect, kJ/kg
    w = h2 - h1         # compressor work, kJ/kg
    return re / w

# Illustrative R-134a values: -10 C evaporating, 40 C condensing
h1, h2, h3, h4 = 392.6, 425.0, 256.4, 256.4   # kJ/kg

cop = vcrs_cop(h1, h2, h4)
print("COP =", round(cop, 2))                   # 4.2

# A 10 TR (35.2 kW) plant running on the same cycle
m_dot = 35.2 / (h1 - h4)
print("mass flow =", round(m_dot, 3), "kg/s")   # 0.258
print("power =", round(m_dot * (h2 - h1), 1), "kW")  # 8.4
`,
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Always draw the P-h chart before any numericals: dome, saturation lines, four corner points, then annotate RE, W, and the pressures. A correct sketch earns method marks even if arithmetic slips, and the examiner can trace exactly which length you used for which quantity.",
            },
            keyTerms: [
              { term: "P-h chart", definition: "The pressure-enthalpy (Mollier) diagram for a refrigerant on which the vapour compression cycle plots as a quadrilateral with horizontal constant-pressure lines." },
              { term: "Isenthalpic throttling", definition: "Expansion through a valve or capillary at constant enthalpy, converting pressure drop into flash vapour with no work." },
              { term: "Dry compression", definition: "Compressing vapour that is dry saturated or slightly superheated, so no liquid droplets enter the compressor." },
            ],
            examQuestions: [
              {
                q: "Draw the vapour compression cycle on a P-h diagram, label all processes and state points, and derive expressions for refrigerating effect, compressor work and COP.",
                marks: 7,
                outline: [
                  "Sketch the dome with saturated liquid and vapour lines, two horizontal isobars.",
                  "Mark states 1-4 and name each process: isentropic compression, constant-pressure condensation, isenthalpic throttling, constant-pressure evaporation.",
                  "Define RE = h1 - h4 as the evaporator length.",
                  "Define W = h2 - h1 as the compression lift.",
                  "State COP = (h1 - h4)/(h2 - h1) and note heat rejected Q = h2 - h3.",
                  "Add typical numbers, e.g. R-134a at -10/40 C, COP about 4.2.",
                  "Mention that capacity = mass flow x RE and power = mass flow x W.",
                ],
              },
              {
                q: "Why is the throttling process shown as a vertical line on the P-h chart?",
                marks: 2,
              },
              {
                q: "Distinguish wet and dry compression and state which one practical plants prefer and why.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.2",
            title: "Subcooling, superheating and their effect on COP",
            body: [
              "Subcooling means the liquid leaving the condenser is colder than the saturation temperature at condensing pressure; superheating means the vapour leaving the evaporator is hotter than saturation at evaporating pressure. Both are created by adding heat-exchange surface: subcooling by enlarging the condenser or submerging more liquid tube, superheating by letting vapour pick up load in the last rows of the evaporator or in a liquid-suction heat exchanger that trades the two against each other. A few kelvin of each - typically 5 K - is the practical norm.",
              "Subcooling is almost pure gain. It shifts state 3 left on the P-h chart, and the refrigerating effect grows by the liquid specific heat times the subcooling, cp times delta-T, while compressor work per kilogram is untouched - so COP rises and, as a bonus, no flash gas forms in the liquid line to starve the expansion valve. Superheating is subtler. If the extra heat is absorbed in the evaporator it is useful and adds to the load carried, but superheated vapour is less dense, so the compressor pumps fewer kilograms per revolution; per-kilogram work also rises with discharge temperature. The net effect is refrigerant-dependent: mildly beneficial or neutral for R-134a and R-22, and harmful for ammonia, whose discharge temperature is already high.",
              "Distinguish useful from useless superheat in the exam answer. Superheat gained inside the evaporator is a credit; superheat picked up in a long, warm suction line outside the cooled space is a pure loss - the vapour is less dense but no load was removed. Ammonia plants therefore keep suction superheat near 5 K and often run flooded evaporators that return wet vapour to a separator. A liquid-suction heat exchanger, giving subcooling and superheat simultaneously, pays for R-134a systems and marginal benefit for NH3 - a classic trade-off question.",
            ],
            bullets: [
              "Subcooling shifts state 3 left on the P-h chart, adding cp x delta-T to the refrigerating effect at no extra compressor work.",
              "Superheat gained inside the evaporator is useful; superheat picked up in the suction line is a pure loss of capacity.",
              "Superheated suction vapour is less dense, so mass flow and capacity per kW of swept volume fall.",
              "Ammonia tolerates little superheat - discharge temperatures already run high - so NH3 plants keep superheat near 5 K.",
              "A liquid-suction heat exchanger creates subcooling and superheat together: worth it for R-134a, marginal for ammonia.",
            ],
            diagram: {
              kind: "compare",
              title: "Subcooling vs superheating",
              caption: "Both add chart length, but only one is dependable profit.",
              left: {
                heading: "Subcooling",
                items: [
                  "Liquid leaves the condenser below saturation",
                  "Refrigerating effect grows by cp x delta-T",
                  "No flash gas in the liquid line",
                  "COP almost always improves",
                  "Cheap: more condenser surface or a heat exchanger",
                ],
              },
              right: {
                heading: "Superheating",
                items: [
                  "Vapour leaves the evaporator above saturation",
                  "Useful superheat adds load carried",
                  "Protects the compressor from liquid slugging",
                  "Suction density drops - capacity per revolution falls",
                  "Net COP change depends on the refrigerant",
                ],
              },
            },
            table: {
              caption: "Typical effect of 5 K subcooling and 5 K superheating.",
              headers: ["Change", "Refrigerating effect", "Compressor work", "COP"],
              rows: [
                ["Subcooling 5 K", "up 4-8%", "nearly unchanged", "rises"],
                ["Useful superheat 5 K (evaporator)", "up 2-5%", "up slightly", "refrigerant dependent"],
                ["Useless superheat 5 K (suction line)", "no change", "up", "falls"],
              ],
            },
            callout: {
              type: "warning",
              title: "Say which superheat",
              body: "Answers that write 'superheating increases COP' lose marks because it is only half true. Always qualify: useful superheat gained in the evaporator can help; line-loss superheat always hurts; and for ammonia superheating is avoided because of discharge temperature.",
            },
            keyTerms: [
              { term: "Subcooling", definition: "Cooling of condenser liquid below the saturation temperature at condensing pressure." },
              { term: "Superheating", definition: "Heating of evaporator vapour above the saturation temperature at evaporating pressure." },
              { term: "Flash gas", definition: "Vapour formed when liquid refrigerant partly evaporates during throttling or in a warm liquid line, reducing capacity at the expansion device." },
            ],
            examQuestions: [
              {
                q: "Define subcooling and superheating, show both on a P-h diagram, and analyse their effects on refrigerating effect, capacity and COP.",
                marks: 7,
                outline: [
                  "Define both terms with reference to saturation temperatures.",
                  "Show subcooling as a leftward shift of state 3 and superheat as an extension past state 1 on the P-h chart.",
                  "Subcooling: RE increases by cp x delta-T, work unchanged, COP rises; also prevents flash gas.",
                  "Useful superheat: adds to RE but lowers suction density; net effect refrigerant dependent.",
                  "Useless superheat in the suction line: capacity falls, work rises, COP falls.",
                  "Note ammonia's low superheat tolerance due to high discharge temperature.",
                  "Mention the liquid-suction heat exchanger as the device that produces both together.",
                ],
              },
              {
                q: "What is flash gas and where does it form?",
                marks: 2,
              },
              {
                q: "Why is suction superheat kept small in ammonia plants but welcomed in R-134a systems?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.3",
            title: "Multi-stage compression and cascade systems",
            body: [
              "A single compressor stage struggles when the pressure ratio climbs. Below about -40 C evaporating or with high condensing pressure, the ratio exceeds 8 to 10, and three problems compound: the discharge temperature gets hot enough to carbonise lubricating oil and damage valves; volumetric efficiency falls because the clearance gas re-expands instead of pumping; and wet compression - liquid droplets in the cylinders - becomes a risk. The remedy is either to split the compression between stages or to split the temperature span between separate cycles.",
              "Multi-stage or compound compression does the first. Vapour is compressed to an intermediate pressure, cooled - ideally to saturated vapour by complete intercooling or by flashing part of the liquid in a flash chamber - then compressed the rest of the way. Work saved by intercooling typically trims 10-20% from the power bill at deep temperatures, and each compressor operates in a comfortable ratio band. The flash chamber adds a second benefit: expanding to intermediate pressure and separating the vapour means only liquid, not flash gas, reaches the evaporator, so the whole low-stage flow does useful cooling.",
              "Cascade systems do the second: two independent circuits coupled by a cascade heat exchanger that is the condenser of the low-temperature machine and the evaporator of the high-temperature machine. Each circuit uses the refrigerant best suited to its span - for example R-23 or ethane below and R-404A or R-134a above - so neither fluid is asked to work at extremes of pressure. A small temperature overlap, around 5-10 K, is accepted in the exchanger. Cascades serve -60 to -120 C duties such as freeze drying, environmental chambers and gas liquefaction, and the CO2-NH3 cascade has become standard in European supermarket racks.",
            ],
            bullets: [
              "Beyond a pressure ratio of about 8-10 per stage, discharge temperature and re-expansion losses climb steeply - split the compression.",
              "Intercooling between stages cuts total work, typically 10-20%, and keeps discharge temperature safe for the oil.",
              "A flash chamber separates vapour at intermediate pressure so only liquid reaches the evaporator.",
              "Cascade systems couple two separate cycles through one heat exchanger, each with its own refrigerant and moderate pressures.",
              "Duties: two-stage for -30 to -60 C freeze drying; cascade for -60 to -120 C chambers; CO2-NH3 cascade in supermarkets.",
            ],
            diagram: {
              kind: "flow",
              title: "Two-stage system with flash intercooler",
              caption: "Split the lift, flash the liquid, intercool the vapour.",
              steps: [
                { label: "Low-stage compressor lifts vapour to interstage pressure" },
                { label: "Flash chamber: expand to interstage, separate flash gas", note: "intercooling plus liquid-only feed" },
                { label: "High-stage compressor raises to condensing pressure" },
                { label: "Condenser rejects heat; liquid expands back toward the flash chamber" },
                { label: "Evaporator absorbs the -40 C load", note: "only liquid enters it" },
              ],
            },
            table: {
              caption: "Single-stage vs compound vs cascade.",
              headers: ["Arrangement", "Temperature range", "Refrigerants", "Notes"],
              rows: [
                ["Single-stage", "about -30 C and above", "one", "simplest and cheapest"],
                ["Two-stage compound", "-30 to -60 C", "one", "intercooling saves 10-20% power"],
                ["Cascade", "-60 to -120 C", "two or more", "moderate pressures; 5-10 K overlap"],
                ["CO2-NH3 cascade", "-30 to -55 C evaporating CO2", "CO2 + NH3", "supermarket and industrial standard"],
              ],
            },
            callout: {
              type: "warning",
              title: "Name both fluids",
              body: "Cascade answers sink when the sketch shows one fluid going all the way down. Always name both refrigerants - for the supermarket standard, CO2 in the low stage, NH3 in the high stage - and mark the shared heat exchanger that is condenser to one and evaporator to the other.",
            },
            keyTerms: [
              { term: "Pressure ratio", definition: "The ratio of condensing to evaporating pressure (or absolute discharge to suction pressure); the driver of discharge temperature and volumetric efficiency loss." },
              { term: "Intercooling", definition: "Cooling the refrigerant between compression stages to reduce work and discharge temperature." },
              { term: "Cascade system", definition: "Two or more refrigeration cycles coupled by a heat exchanger, each cycle using the refrigerant best suited to its temperature span." },
            ],
            examQuestions: [
              {
                q: "Why is single-stage compression unsuitable below about -40 C? Explain two-stage compression with intercooling and compare it with a cascade system.",
                marks: 7,
                outline: [
                  "State the limits: pressure ratio above 8-10, discharge temperature, volumetric efficiency, oil breakdown.",
                  "Draw the two-stage arrangement with intercooler/flash chamber.",
                  "Explain complete intercooling to saturated vapour and the work saved (10-20%).",
                  "Explain the flash chamber: liquid-only feed to the evaporator.",
                  "Draw the cascade arrangement: two circuits, shared heat exchanger, 5-10 K overlap.",
                  "Compare: compound uses one refrigerant; cascade uses two, each at moderate pressures.",
                  "Applications: freeze drying -40 C two-stage; -80 C chambers cascade; CO2-NH3 supermarket racks.",
                ],
              },
              {
                q: "What is the function of a flash chamber in a multi-stage system?",
                marks: 2,
              },
              {
                q: "State three advantages of cascade systems over compound compression.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.4",
            title: "The ammonia-water vapour absorption system",
            body: [
              "A vapour absorption system does with heat what a compression system does with electricity. The compressor's suction and discharge duties are split between two vessels: in the absorber, weak water solution soaks up ammonia vapour, creating the low-side vacuum a compressor would otherwise maintain; in the generator, heat boils ammonia back out of the strong solution at high pressure. A small pump moves liquid solution between them - about 1% of the energy a compressor would need - and water is the absorbent while ammonia is the refrigerant, a pair that works down to about -30 C.",
              "Follow the circuit. Strong aqua leaves the absorber, is pumped to generator pressure, and is preheated in a solution heat exchanger by the hot weak solution returning through a pressure-reducing valve. In the generator, steam or a gas flame drives off ammonia vapour - but water vapour rides along with it, and water frozen in the evaporator would block the plant, so an analyser and rectifier above the generator strip the water back to the solution. The ammonia then condenses, throttles, and evaporates in the evaporator doing the refrigerating duty before returning to the absorber to close the loop. The COP on heat supplied runs about 0.5-0.7.",
              "The domestic Electrolux refrigerator is the elegant cousin. It adds a third fluid, hydrogen, and needs no pump at all. The total pressure is nearly equal everywhere, so ammonia evaporates in the evaporator because its partial pressure there is low - the hydrogen dilutes it - and a bubble pump lifts the strong solution by thermo-syphon action. With no moving parts the machine is silent, which is why hotel minibars and gas-fired caravan refrigerators used the principle for decades. Comparing it with a small compression unit highlights the trade: silent, heat-driven operation against very low COP.",
            ],
            bullets: [
              "Absorption replaces the compressor with absorber plus pump plus generator - heat does the work electricity did.",
              "Water is the absorbent and ammonia the refrigerant; the pair refrigerates down to about -30 C.",
              "An analyser and rectifier strip water vapour from the ammonia stream - water in the evaporator would freeze and block it.",
              "The solution heat exchanger preheats strong solution with hot weak solution, lifting COP to about 0.5-0.7.",
              "The Electrolux domestic unit adds hydrogen and a bubble pump: no moving parts, completely silent.",
            ],
            diagram: {
              kind: "cycle",
              title: "The NH3-H2O absorption loop",
              caption: "Heat in at the generator, cooling out at the evaporator - a pump the size of a torch battery in between.",
              steps: [
                { label: "Generator: heat boils ammonia out of strong solution" },
                { label: "Condenser: ammonia rejects heat and liquefies" },
                { label: "Evaporator: liquid ammonia absorbs the load at low pressure" },
                { label: "Absorber: weak solution soaks up ammonia vapour", note: "cooling water carries the heat away" },
                { label: "Solution pump lifts strong aqua back to generator pressure", note: "about 1% of plant energy" },
              ],
            },
            table: {
              caption: "NH3-H2O components and their duties.",
              headers: ["Component", "What it does"],
              rows: [
                ["Generator", "drives ammonia vapour out of the strong solution with heat"],
                ["Analyser and rectifier", "return entrained water vapour to the generator"],
                ["Absorber", "weak aqua absorbs refrigerant vapour, cooled by water"],
                ["Solution pump", "raises strong solution from absorber to generator pressure"],
                ["Solution heat exchanger", "recovers heat between hot weak and cold strong streams"],
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "The sketch is half the answer: draw generator with analyser and rectifier on top, condenser, valve, evaporator, absorber, pump, and the solution heat exchanger between the two streams. Label strong and weak solution paths with arrowheads - examiners check the direction of the solution loop before anything else.",
            },
            keyTerms: [
              { term: "Strong solution", definition: "The ammonia-rich aqua leaving the absorber, destined for the generator." },
              { term: "Rectifier", definition: "The packed column above the generator that condenses water vapour out of the ammonia stream." },
              { term: "Vapour absorption", definition: "Refrigeration in which a liquid absorbent takes up refrigerant vapour, replacing compressor suction with chemical solution." },
            ],
            examQuestions: [
              {
                q: "Describe the ammonia-water vapour absorption system with a neat sketch, explain the function of the analyser and rectifier, and define its COP.",
                marks: 7,
                outline: [
                  "Draw the full circuit: generator, analyser, rectifier, condenser, valve, evaporator, absorber, pump, solution heat exchanger.",
                  "Explain the absorber maintaining low pressure as weak solution soaks up ammonia.",
                  "Explain the generator boiling ammonia out with steam or gas heat.",
                  "State why water must not reach the evaporator: it freezes and blocks the pipe.",
                  "Explain the analyser and rectifier stripping water vapour back to solution.",
                  "Define COP = refrigerating effect / heat supplied to generator, typically 0.5-0.7.",
                  "Note the pump consumes about 1% of the energy of an equivalent compressor.",
                ],
              },
              {
                q: "What is the role of the solution heat exchanger in an absorption plant?",
                marks: 2,
              },
              {
                q: "Explain how the Electrolux refrigerator circulates refrigerant without any pump.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.5",
            title: "The LiBr-water chiller and compression vs absorption",
            body: [
              "Swap the pair and you change the market. In the lithium bromide-water machine, water is the refrigerant and a concentrated LiBr salt solution the absorbent. Water evaporates at 4-10 C under a deep vacuum - about 0.85 kPa at 5 C - so the machine produces chilled water for air conditioning and nothing colder. The great simplification is that the absorbent is essentially non-volatile: no analyser, no rectifier, and no risk of salt crystals crossing to the condenser. The deep vacuum, however, demands a purge unit, because even small air leaks raise the evaporating pressure and kill capacity.",
              "The cycle mirrors ammonia-water. Steam or hot water boils refrigerant off the dilute solution in the generator; the vapour condenses in the condenser, throttles to the evaporator where it sprays over the chilled-water tubes and evaporates under vacuum, then is absorbed by the concentrated solution in the absorber, which cooling water keeps cool. A solution heat exchanger recovers heat between the streams. Single-effect machines on low-pressure steam or 90 C hot water reach COP ≈ 0.7; double-effect machines, with a second generator driven by the first stage's vapour, reach ≈ 1.1-1.3. Crystallisation - salt dropping out of an over-concentrated solution - is the classic failure, prevented by dilution cycles and concentration control.",
              "Choosing between compression and absorption is an energy-economics exam question with a fixed template. Absorption consumes almost no electricity, is near-silent, tolerates part load gracefully and loves waste heat, steam from a boiler, exhaust from a gas engine or solar collectors - which is why hotels, hospitals and CCHP plants install it. Against that: it costs more to buy, needs a cooling tower sized for about 50% more heat rejection, is bigger and heavier, and demands water chemistry discipline. Trigeneration and solar cooling are its natural homes; wherever electricity is cheap and heat dear, compression wins.",
            ],
            bullets: [
              "LiBr-H2O pairs water as refrigerant with lithium bromide brine as absorbent, working under deep vacuum for 4-10 C chilled water.",
              "The absorbent is non-volatile, so no analyser or rectifier is needed - simpler than the ammonia-water machine.",
              "Single-effect COP ≈ 0.7 on low-pressure steam; double effect ≈ 1.2 by generating vapour twice in series.",
              "Guard against crystallisation and purge non-condensables - the two operational commandments of LiBr plant.",
              "Absorption wins where waste heat, steam or solar energy is cheap and electricity dear: hotels, hospitals, CCHP, solar cooling.",
            ],
            diagram: {
              kind: "compare",
              title: "VCRS vs VAR at a glance",
              caption: "Same refrigerating effect, two completely different energy stories.",
              left: {
                heading: "Vapour compression",
                items: [
                  "Electric compressor drives the cycle",
                  "COP 3-6, but on purchased electricity",
                  "Compact; high electrical demand",
                  "Needs skilled mechanical maintenance",
                  "Scales from 0.3 TR window units to 2000 TR chillers",
                ],
              },
              right: {
                heading: "Vapour absorption",
                items: [
                  "Heat-driven; pump work is about 1% of duty",
                  "COP ≈ 0.7 single effect, ≈ 1.2 double effect",
                  "Near-silent, almost vibration-free",
                  "Best with waste steam, gas exhaust or solar heat",
                  "Bigger footprint; mind crystallisation and air leaks",
                ],
              },
            },
            codeExample: {
              language: "python",
              caption: "Quick running-cost comparison of the two chiller types",
              code: `def chiller_cost(cooling_kwh, cop, price_per_kwh):
    """Energy cost to deliver a given amount of cooling."""
    return cooling_kwh / cop * price_per_kwh

# 100 kWh of cooling: VCRS at COP 5 on electricity at Rs 9/kWh
print("VCRS cost:", round(chiller_cost(100, 5.0, 9.0), 1))    # 180.0

# Absorption at COP 0.7 on waste steam charged at Rs 1.5/kWh
print("VAR cost :", round(chiller_cost(100, 0.7, 1.5), 1))    # 214.3

# Same absorption machine on genuinely free waste heat
print("VAR free-heat cost:", chiller_cost(100, 0.7, 0.0))     # 0.0

# Auxiliary pump and fan power (about 2% of duty) still applies,
# so even 'free' heat is not literally zero-cost to run.
`,
            },
            callout: {
              type: "tip",
              title: "Remember the ratio",
              body: "One number survives every exam: LiBr machines reject roughly 30-50% more heat than compression chillers for the same duty - heat in plus cooling duty all leaves at the cooling tower. Size the tower for absorption accordingly, and mention it whenever asked to compare the two systems.",
            },
            keyTerms: [
              { term: "Lithium bromide", definition: "A hygroscopic salt whose aqueous solution serves as the absorbent in water-chilled absorption machines." },
              { term: "Double-effect chiller", definition: "An absorption machine with two generators in series, using the first stage's vapour to drive the second, reaching COP about 1.2." },
              { term: "Trigeneration", definition: "Combined cooling, heat and power: an engine or turbine's waste heat drives an absorption chiller." },
            ],
            examQuestions: [
              {
                q: "Explain the LiBr-H2O absorption chiller with a sketch, distinguish single- and double-effect operation, and compare it with a vapour compression chiller.",
                marks: 7,
                outline: [
                  "State the pair: water refrigerant, LiBr absorbent, deep vacuum, 4-10 C chilled water.",
                  "Draw generator, condenser, evaporator, absorber, solution pump and heat exchanger.",
                  "Explain the absorber's cooling-water duty and the purge unit for non-condensables.",
                  "Single effect: one generator, COP about 0.7 on LP steam or hot water.",
                  "Double effect: second generator driven by first-stage vapour, COP about 1.2.",
                  "Compare with VCRS: electricity vs heat, noise, part load, footprint, heat rejection.",
                  "Applications: hotels, hospitals, CCHP and solar cooling.",
                ],
              },
              {
                q: "Why can a LiBr-H2O machine not produce chilled water below 0 C?",
                marks: 2,
              },
              {
                q: "List three operating precautions needed to avoid crystallisation in a LiBr machine.",
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
      title: "Gas Cycle and Unconventional Refrigeration",
      summary:
        "Refrigeration without phase change and without refrigerants: the Bell-Coleman air cycle with its expander, the steam ejector, thermoelectric modules, the vortex tube, and the Linde and Claude routes to liquefying gases.",
      chapter: {
        number: "03",
        title: "Gas Cycle and Other Refrigeration Methods",
        intro:
          "Unit III leaves the familiar vapour chart for machines that refrigerate with air, steam, electrons and swirling gas, then pushes past -150 C into cryogenic liquefaction - the systems that fly on aircraft, cool sensors, chill machine tools and fill the world with liquid nitrogen.",
        inOneBreath:
          "Air, steam, electrons and vortices can all refrigerate: Bell-Coleman trades the throttle for an expander and flies on aircraft; the steam ejector uses a nozzle as its compressor; thermoelectric couples pump heat with DC current; the vortex tube splits compressed air into hot and cold streams; and Linde and Claude liquefy gases by Joule-Thomson throttling plus expansion work.",
        sections: [
          {
            number: "3.1",
            title: "The Bell-Coleman (reversed Brayton) air cycle",
            body: [
              "Air refrigeration keeps the working fluid gaseous throughout. The Bell-Coleman cycle - the reversed Joule or Brayton cycle - has four components: a compressor that raises air from the cold-side pressure to the ambient-side pressure, a cooler that rejects heat at constant pressure, an expander or turbine in which the air does work while its temperature plunges, and a cold heat exchanger where the frigid air absorbs the load. On aircraft the cycle is open: engine bleed air feeds the machine and the cabin exhaust is the working fluid discarded after one pass.",
              "The processes are the mirror of the gas turbine: 1-2 isentropic compression, 2-3 constant-pressure cooling, 3-4 isentropic expansion with work recovery, 4-1 constant-pressure warming in the cabin or cold store. Two features separate it from vapour compression. First, the expander returns work to the shaft - a throttle would simply waste the pressure, so air machines recover 30-50% of the compressor input. Second, heat transfer is sensible, over a range of temperatures, so for the same duty the machine moves several times the mass of air and needs large heat exchangers. The ideal COP is 1 divided by (pressure ratio raised to (gamma-1)/gamma, minus 1) - about 2.1 at a pressure ratio of 4 with gamma = 1.4.",
              "The cycle's merits are the fluid's: air is free, non-toxic, non-flammable, needs no leak-hunting, and cannot contaminate anything it touches, which is why it survived in aircraft long after losing ground on land. Its demerits are the mirror image: low practical COP, bulky heat exchangers and low refrigerating effect per kilogram of air. The simple system is boosted on aircraft into the bootstrap system, which adds a secondary compressor driven by the expander and a heat exchanger to raise pressure before the cooler; the reduced-ambient variant rams air at altitude. Ground uses persist where blast air is already available, such as rapid ground cooling of aircraft cabins.",
            ],
            bullets: [
              "All four processes stay in the gas region - no boiling, no condensation, no refrigerant charge to manage.",
              "The expander recovers expansion work and returns it to the compressor, where a VCRS would waste it in a throttle.",
              "Ideal COP = 1 / (pressure_ratio^((gamma-1)/gamma) - 1): about 2.1 at ratio 4 for air.",
              "Sensible-heat transfer means large air flows and bulky heat exchangers per kW of cooling.",
              "Aircraft air-cycle machines thrive because bleed air arrives free and pressurised and cabin air is the working fluid.",
            ],
            diagram: {
              kind: "cycle",
              title: "The Bell-Coleman air cycle",
              caption: "Compress, cool, expand through a turbine, absorb the load - all in the gas region.",
              steps: [
                { label: "1-2 Isentropic compression", note: "pressure rises to p2" },
                { label: "2-3 Constant-pressure cooling", note: "heat rejected to ambient air" },
                { label: "3-4 Isentropic expansion in the turbine", note: "air turns bitterly cold; work recovered" },
                { label: "4-1 Constant-pressure warming", note: "cabin load heats the air" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "Bell-Coleman COP against pressure ratio",
              code: `def bell_coleman_cop(pressure_ratio, gamma=1.4):
    """Ideal COP of a reversed Brayton (Bell-Coleman) cycle."""
    exponent = (gamma - 1.0) / gamma
    return 1.0 / (pressure_ratio ** exponent - 1.0)

for rp in (2, 4, 6, 8):
    print("rp =", rp, "-> COP =", round(bell_coleman_cop(rp), 2))

# rp 2 -> 4.57 | rp 4 -> 2.06 | rp 6 -> 1.50 | rp 8 -> 1.23
# Raising the pressure ratio raises the temperature lift but
# lowers the COP - aircraft designers pick the smallest ratio
# that still meets the cabin temperature on the hottest day.
`,
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "State the COP formula before substituting, and keep the exponent as (gamma-1)/gamma written in symbols until the final line. Then interpret: a smaller pressure ratio means a better COP but a warmer cold stream - exactly the trade the question usually wants you to discuss.",
            },
            keyTerms: [
              { term: "Bell-Coleman cycle", definition: "The reversed Brayton air-refrigeration cycle: isentropic compression, constant-pressure cooling, isentropic expansion, constant-pressure heat absorption." },
              { term: "Expander", definition: "A turbine or reciprocating engine in which compressed air does work while expanding and cooling sharply." },
              { term: "Bootstrap system", definition: "An aircraft air-cycle variant with a secondary compressor driven by the expander and an intermediate heat exchanger for higher cabin pressure." },
            ],
            examQuestions: [
              {
                q: "Draw the Bell-Coleman cycle on T-s axes, derive its ideal COP, and state the merits and demerits of air refrigeration with its aircraft application.",
                marks: 7,
                outline: [
                  "Sketch the cycle on T-s axes and label the four states.",
                  "Identify each process: isentropic compression, isobaric cooling, isentropic expansion, isobaric heat pickup.",
                  "Derive COP = T1/(T2 - T1) = 1/(r_p^((gamma-1)/gamma) - 1).",
                  "Work a number: r_p = 4, gamma = 1.4 gives COP ≈ 2.1.",
                  "Merits: air is free, safe, no phase change, expander recovers work.",
                  "Demerits: sensible heat only, bulky exchangers, low practical COP.",
                  "Application: aircraft environmental control using engine bleed air.",
                ],
              },
              {
                q: "Why does an air cycle need an expander while a vapour compression system uses a throttle valve?",
                marks: 2,
              },
              {
                q: "Compute the ideal COP of a Bell-Coleman cycle with pressure ratio 8 (gamma = 1.4).",
                marks: 3,
              },
            ],
          },
          {
            number: "3.2",
            title: "Steam jet (ejector) refrigeration",
            body: [
              "Steam jet refrigeration compresses water vapour with a nozzle instead of a piston. High-pressure motive steam - typically 5 to 10 bar - expands through a converging-diverging nozzle to supersonic velocity, and the low static pressure at the nozzle exit draws flash vapour out of a chilled-water chamber. The two streams mix, and a diffuser slows the mixture down, converting velocity back into pressure high enough to condense in the condenser. Water is simultaneously the refrigerant and the product: the chilled water left behind in the flash chamber, at 5-10 C, is pumped to air conditioning coils or process heat exchangers.",
              "The ejector has four sections, each with one duty. The nozzle converts motive-steam pressure into velocity. The suction chamber entrains the flash vapour. The mixing section transfers momentum from steam to vapour. The diffuser decelerates the mixture and recovers condenser pressure. The key performance number is the entrainment ratio - kilograms of flash vapour carried per kilogram of motive steam - typically 0.4 to 0.8 depending on the pressures. A secondary air ejector or vacuum pump removes non-condensables that would otherwise blanket the condenser, because the whole low side operates at the saturation pressure of water at the chilled temperature - under 1.2 kPa for 10 C.",
              "The economics are simple and brutal: on a heat basis the COP is only 0.2 to 0.5, so the machine is justified only where high-pressure steam is already being made for another process and would otherwise be wasted. Textile mills, paper plants, breweries and chemical works installed ejector chillers because they need no lubricant, no moving parts in the refrigerant path, tolerate dirty environments, and can be built in almost any material. Against that: large cooling-water consumption, noise from the jet, poor part-load behaviour - capacity is stepped by nozzle plugs - and near-extinction wherever cheap electricity and compact vapour compression exist.",
            ],
            bullets: [
              "An ejector is a static compressor: nozzle, suction chamber, mixing section and diffuser convert pressure to velocity and back.",
              "Water flashes under the vacuum the jet creates; its latent heat comes from the remaining water, chilling it to 5-10 C.",
              "Entrainment ratio - kg of flash vapour per kg of motive steam - fixes capacity; typical values 0.4-0.8.",
              "COP on a heat basis is only 0.2-0.5, so the system pays only with cheap or waste steam.",
              "No moving parts and water as refrigerant suit textile, paper, brewery and chemical plants; noise and water use are the costs.",
            ],
            diagram: {
              kind: "flow",
              title: "The steam jet refrigeration train",
              caption: "Pressure becomes velocity becomes pressure again - and chilled water falls out of the middle.",
              steps: [
                { label: "Boiler supplies high-pressure motive steam" },
                { label: "Nozzle accelerates steam to supersonic speed", note: "static pressure collapses" },
                { label: "Suction entrains flash vapour from the chilled-water chamber" },
                { label: "Diffuser mixes and recompresses to condenser pressure" },
                { label: "Condenser liquefies the stream; chilled water leaves at 5-10 C" },
              ],
            },
            table: {
              caption: "Ejector sections and their duties.",
              headers: ["Section", "What happens"],
              rows: [
                ["Nozzle", "motive steam pressure falls, velocity becomes supersonic"],
                ["Suction chamber", "flash vapour is entrained into the high-velocity jet"],
                ["Mixing section", "momentum transfers from steam to the entrained vapour"],
                ["Diffuser", "velocity falls, static pressure recovers"],
                ["Condenser", "the mixture liquefies; air ejector strips non-condensables"],
              ],
            },
            callout: {
              type: "warning",
              title: "Vacuum discipline",
              body: "Every steam jet answer must mention non-condensables. Air leaking into a system running below 1.2 kPa accumulates in the condenser, raises back-pressure, stalls the diffuser and collapses the entrainment ratio. The auxiliary air ejector is not an accessory - it is why the machine keeps working.",
            },
            keyTerms: [
              { term: "Ejector", definition: "A device with no moving parts that compresses a vapour by entraining it in a supersonic motive jet and recovering pressure in a diffuser." },
              { term: "Entrainment ratio", definition: "Kilograms of flash vapour compressed per kilogram of motive steam; the governing performance number of a steam jet system." },
              { term: "Flash chamber", definition: "The vessel where water evaporates under vacuum, chilling the remaining water that is circulated as the product." },
            ],
            examQuestions: [
              {
                q: "Explain steam jet refrigeration with a sketch of the ejector, define entrainment ratio, and discuss the conditions under which the system is economical.",
                marks: 7,
                outline: [
                  "Sketch boiler, nozzle, suction chamber, mixing section, diffuser, flash chamber, condenser.",
                  "Explain the nozzle: pressure to velocity, supersonic jet, low static pressure.",
                  "Explain flashing: water boils at 5-10 C under vacuum; latent heat chills the balance.",
                  "Explain the diffuser: velocity back to pressure for condensation.",
                  "Define entrainment ratio and give typical values 0.4-0.8.",
                  "Economics: COP 0.2-0.5, viable with waste or cheap steam.",
                  "Applications: textile, paper, brewery, chemical plants.",
                ],
              },
              {
                q: "What is the refrigerant in a steam jet refrigeration system?",
                marks: 2,
              },
              {
                q: "Why does a steam jet system need an auxiliary air ejector or vacuum pump?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.3",
            title: "Thermoelectric refrigeration",
            body: [
              "Thermoelectric cooling rests on three linked effects. The Seebeck effect turns a temperature difference across a junction pair into a voltage - the thermocouple's principle. The Peltier effect is its reverse: pass a DC current through a junction of two dissimilar conductors and heat is absorbed on one side and liberated on the other, in proportion to the current. The Thomson effect describes reversible heating or cooling along a single conductor carrying current in a temperature gradient. A practical module stacks dozens of p-type and n-type semiconductor pellets, electrically in series and thermally in parallel, between two ceramic plates.",
              "The cold junction's balance sheet explains both the promise and the ceiling. The Peltier term pumps heat proportional to current; two thieves steal from it - Joule heating, half of which migrates to the cold side, and simple conduction leaking back from the hot side. Net cooling equals alpha times T_c times I, minus half I-squared R, minus K times the temperature difference. Pushing current raises the first term linearly but the second quadratically, so cooling peaks at an optimum current and then declines. The figure of merit ZT, combining Seebeck coefficient, resistivity and conductivity, is about 1 for commercial bismuth telluride; the result is a COP of 0.3-0.7 and a maximum single-stage temperature span of about 70 K.",
              "The applications follow from the virtues: no moving parts, no refrigerant, no noise, milli-kelvin control by adjusting current, operation in any orientation and any gravity, and instant reversal from cooler to heater by reversing polarity. Portable picnic and wine coolers, dehumidifiers, laser diode and infrared sensor spot cooling, CPU test chillers and scientific instrumentation all use modules. Reversed as generators, the same couples power spacecraft radioisotope thermoelectric generators. The price is efficiency an order of magnitude below vapour compression and a cost per watt that confines modules to small duties.",
            ],
            bullets: [
              "Peltier effect: DC current across a junction pumps heat Q = alpha x T x I; reversing the current swaps hot and cold sides.",
              "Net cooling = alpha T_c I - 0.5 I^2 R - K dT: Joule heat and back-conduction fight the Peltier pumping.",
              "Figure of merit ZT ≈ 1 for bismuth telluride modules, capping COP at 0.3-0.7 and single-stage span near 70 K.",
              "There is an optimum current: beyond it, quadratic Joule heating overtakes linear Peltier gain.",
              "No moving parts, no refrigerant, ±0.1 K control, any orientation - ideal for sensors, optics and portable coolers.",
            ],
            diagram: {
              kind: "layers",
              title: "Anatomy of a thermoelectric module",
              caption: "Layer by layer from the load to the heatsink.",
              layers: [
                { label: "Cold-side ceramic substrate", note: "spreads heat from the device being cooled" },
                { label: "Copper interconnects", note: "wire the couples in electrical series" },
                { label: "n-type and p-type pellets", note: "the active couples, thermally in parallel" },
                { label: "Hot-side ceramic substrate", note: "must be heatsunk or cooling stops" },
                { label: "Heatsink and fan", note: "rejects pumped heat plus Joule heat" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "Peltier cooling vs drive current",
              code: `def peltier_cooling(alpha, tc, i, r, k, dth):
    """Net cooling at the cold junction, watts."""
    peltier = alpha * tc * i        # heat pumped by the junction
    joule = 0.5 * i**2 * r          # half the Joule heat reaches cold side
    leak = k * dth                  # conduction back from hot side
    return peltier - joule - leak

# Typical single-stage module, 30 K span
for amps in (2, 3, 4, 5, 6):
    q = peltier_cooling(0.05, 300.0, amps, 3.0, 0.6, 30.0)
    print(amps, "A ->", round(q, 1), "W")

# 2 A -> 6.0 W | 3 A -> 13.5 W | 4 A -> 18.0 W
# 5 A -> 19.5 W | 6 A -> 18.0 W
# Cooling peaks near 5 A and then falls - quadratic Joule
# heating overtakes the linear Peltier term. Real drives sit
# just below the peak for maximum efficiency per watt moved.
`,
            },
            callout: {
              type: "tip",
              title: "Hot side first",
              body: "A Peltier module with a poor heatsink is a heater, not a cooler: every watt pumped plus every watt of Joule loss must leave the hot side, or the conduction term eats the entire Peltier gain. Mentioning hot-side thermal design is the mark of a complete answer.",
            },
            keyTerms: [
              { term: "Peltier effect", definition: "Heating or cooling at a junction of two conductors when DC current crosses it, reversible with current direction." },
              { term: "Figure of merit (ZT)", definition: "Dimensionless measure alpha-squared-T over resistivity times conductivity that caps thermoelectric efficiency." },
              { term: "Thermoelectric module", definition: "An array of p-n couples in electrical series and thermal parallel between ceramic plates." },
            ],
            examQuestions: [
              {
                q: "Explain the Seebeck, Peltier and Thomson effects, state the cooling equation of a thermoelectric couple, and discuss applications and limitations of thermoelectric refrigeration.",
                marks: 7,
                outline: [
                  "Define Seebeck: temperature difference generates EMF (thermocouple).",
                  "Define Peltier: current pumps heat at a junction; Q proportional to I, reversible.",
                  "Define Thomson: reversible heat along a conductor with current in a gradient.",
                  "Draw the module: series p-n couples between ceramic plates.",
                  "State Q_c = alpha T_c I - 0.5 I^2 R - K dT and explain each term.",
                  "Discuss optimum current and ZT ≈ 1 giving COP 0.3-0.7 and 70 K span.",
                  "Applications: portable coolers, sensor and laser spot cooling, power generation in reverse.",
                ],
              },
              {
                q: "What single change converts a Peltier cooler into a heater?",
                marks: 2,
              },
              {
                q: "Why do thermoelectric modules use many couples instead of one?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.4",
            title: "Vortex tube refrigeration",
            body: [
              "The vortex tube, found by Ranque in 1931 and refined by Hilsch in 1945, splits a single compressed-air stream into a hot flow and a cold flow with no moving parts. Compressed air at 5 to 7 bar is injected tangentially through nozzles into a cylindrical chamber, where it spins at speeds that correspond to about a million revolutions per minute. The outer layers of the spiral become hot; the inner core becomes cold. A conical valve at the far end throttles the hot periphery; the cold core escapes backwards through a central orifice near the inlet end.",
              "The mechanism is energy separation by the vortex itself. Viscous shear between fast outer layers and the slower inner core pumps energy outward, so the periphery is heated by work done on it while the inner gas, expanding against the strong centrifugal field, cools. The adjustable hot valve sets the split: the fraction of inlet air leaving cold - the cold fraction - trades depth against quantity. A small cold fraction exits far colder, up to 40-50 K below inlet temperature but at low flow; a large fraction leaves milder but copious. Capacity per tube is modest - tens to a few hundred watts - and the machine consumes large volumes of compressed air, giving an overall COP near 0.1.",
              "That COP would be disqualifying if the alternative were a compressor, but the comparison is against other ways of using an existing compressed-air line. Vortex tubes cool spot welds and cutter bits, blow cold dry air into electrical cabinets, chill samples for quality tests, feed operators' vests in hot workshops, and shrink-fit parts - all intrinsically safe, with no electricity at the point of use, no refrigerant, no wear, and a response measured in seconds. Selection questions are answered honestly: use the vortex tube where compressed air exists and the duty is small and local; use anything else for real tonnage.",
            ],
            bullets: [
              "A vortex tube splits compressed air into a cold core stream and a hot peripheral spiral - no moving parts at all.",
              "Tangential injection creates the vortex; viscous shear pumps energy outward, cooling the inner core as it expands.",
              "The hot valve sets the cold fraction: less cold flow leaves colder, more leaves milder.",
              "Temperature drops of 30-50 K from a 6-7 bar supply are routine; capacity is only a few hundred watts per tube.",
              "COP is near 0.1 - justified only where compressed air already exists and the duty is small, local and safety-critical.",
            ],
            diagram: {
              kind: "pipeline",
              title: "Energy separation in the vortex tube",
              caption: "From compressed-air line to cold spot in five stages.",
              stages: [
                { label: "Compressed air inlet (5-7 bar)" },
                { label: "Tangential nozzle sets up the vortex" },
                { label: "Outer spiral heats; inner core cools", note: "viscous shear moves energy outward" },
                { label: "Hot valve at the far end sets the split" },
                { label: "Cold stream exits near the inlet end", note: "30-50 K below inlet" },
              ],
            },
            table: {
              caption: "Indicative vortex tube operating map (6-7 bar inlet).",
              headers: ["Cold fraction", "Cold outlet", "Cold flow"],
              rows: [
                ["≈ 20%", "up to 50 K below inlet", "small"],
                ["≈ 40%", "≈ 35 K below inlet", "moderate"],
                ["≈ 60%", "≈ 25 K below inlet", "good"],
                ["≈ 80%", "≈ 10 K below inlet", "near full flow"],
              ],
            },
            callout: {
              type: "warning",
              title: "Not a compressor alternative",
              body: "Examiners like to ask why the vortex tube has not replaced vapour compression. The honest answer is energy: producing compressed air costs several times the electricity the 'cooling' seems to save, so overall COP sits near 0.1. It wins on safety, size and simplicity - never on efficiency.",
            },
            keyTerms: [
              { term: "Vortex tube", definition: "A static device that separates compressed air into hot and cold streams by setting up a high-speed vortex." },
              { term: "Cold fraction", definition: "The percentage of inlet air that leaves through the cold outlet; adjustable via the hot valve." },
              { term: "Ranque-Hilsch effect", definition: "The energy separation that occurs in a swirling gas, heating the periphery and cooling the core." },
            ],
            examQuestions: [
              {
                q: "Explain the construction and working of a vortex tube with a sketch, the role of the hot valve, and its applications and limitations.",
                marks: 7,
                outline: [
                  "Draw the tube: tangential nozzles, vortex chamber, central cold orifice, conical hot valve.",
                  "Explain vortex formation and the equivalent of a million rpm.",
                  "Explain energy separation: viscous shear outward, expansion cooling of the core.",
                  "Define cold fraction and its trade-off between depth and quantity.",
                  "Quote performance: 30-50 K drop at 6-7 bar, a few hundred watts per tube.",
                  "Applications: spot cooling of welds and tools, cabinets, vests, sample chilling.",
                  "Limitations: COP near 0.1, small capacity, air-hungry - only sensible with an existing air line.",
                ],
              },
              {
                q: "Define the cold fraction of a vortex tube.",
                marks: 2,
              },
              {
                q: "Why is the vortex tube used only for spot cooling rather than room cooling?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.5",
            title: "Cryogenic liquefaction: Linde and Claude systems",
            body: [
              "Cryogenics begins where ordinary refrigeration gives up, conventionally below about -150 C or 123 K, where nitrogen boils at 77 K, oxygen at 90 K, hydrogen at 20 K and helium at 4.2 K. A gas can be liquefied only below its critical temperature - 126 K for nitrogen, 33 K for hydrogen, 5.2 K for helium - so room temperature is already far too warm for every permanent gas, and the art of liquefaction is building a cold ladder down from ambient. Liquid nitrogen, oxygen and hydrogen feed steel plants, medical and food industries, rocket engines and MRI magnets.",
              "The Linde (Hampson) system liquefies air with a beautiful economy of parts. Gas is compressed to about 200 bar in stages with intercooling, passes through a counterflow heat exchanger where returning cold vapour chills it, then throttled through a valve. The Joule-Thomson effect - a real-gas effect in which enthalpy stays constant but temperature drops - liquefies a fraction; the separator draws off liquid and the unliquefied vapour returns through the heat exchanger to pre-cool the next batch, regeneratively dragging the temperature lower until steady liquefaction. The catch is the inversion temperature: throttling cools a gas only below it, fine for air (621 K) but useless for hydrogen (202 K) and helium (45 K) without pre-cooling.",
              "The Claude system of 1902 adds an expander. After compression and pre-cooling, roughly two-thirds of the stream is diverted through a turbine or reciprocating expander, where adiabatic work extraction cools it far more steeply than throttling; it rejoins to chill the throttle stream, of which a portion still liquefies at the valve - an expander cannot tolerate liquid forming inside it. The reward is roughly double the liquid yield per unit of compression work, at the cost of cold moving machinery. Large air separation units run Claude and cascade-Claude variants; Kapitza's low-pressure modification and the Collins helium liquefier extend the ladder to 4 K.",
            ],
            bullets: [
              "Liquefaction demands temperatures below the critical point: 126 K for nitrogen, 33 K for hydrogen, 5.2 K for helium.",
              "Linde uses isenthalpic Joule-Thomson throttling after counterflow pre-cooling - simple, with no cold moving parts.",
              "Throttling cools a gas only below its inversion temperature: air 621 K (easy), hydrogen 202 K, helium 45 K (needs pre-cooling).",
              "Claude diverts part of the flow through an expander: work extraction roughly doubles liquid yield per unit energy.",
              "Applications: air separation for O2 and N2, LNG, rocket propellants, MRI helium, food freezing with LN2 at 77 K.",
            ],
            diagram: {
              kind: "pipeline",
              title: "The Linde liquefaction train",
              caption: "Compress, pre-cool by the returning vapour, throttle, separate - and recycle.",
              stages: [
                { label: "Compressor: to about 200 bar with intercooling" },
                { label: "Counterflow heat exchanger", note: "cold return pre-chills the feed" },
                { label: "Joule-Thomson valve: isenthalpic drop", note: "part of the gas liquefies" },
                { label: "Separator: liquid drawn off, vapour recycled" },
                { label: "Recycled vapour regeneratively cools the next feed" },
              ],
            },
            table: {
              caption: "Linde vs Claude liquefaction.",
              headers: ["Aspect", "Linde (JT only)", "Claude (expander + JT)"],
              rows: [
                ["Cooling mechanism", "throttling only", "expander plus throttling"],
                ["Moving parts in the cold box", "none", "expander or turbine"],
                ["Work per kg of liquid", "higher", "roughly half to two-thirds"],
                ["Hydrogen and helium duty", "needs pre-cooling below inversion", "expander handles the first ladder"],
                ["Natural scale", "small and simple plants", "large air separation units"],
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "The inversion temperature table is the crisp fact examiners want: air 621 K, hydrogen 202 K, helium 45 K. Pair it with the sentence 'throttling warms a gas above its inversion temperature' and any Linde-Claude question is half answered before you draw anything.",
            },
            keyTerms: [
              { term: "Inversion temperature", definition: "The temperature below which a gas cools on throttling; above it, Joule-Thomson expansion warms the gas." },
              { term: "Joule-Thomson effect", definition: "The temperature change of a real gas expanding at constant enthalpy through a valve or porous plug." },
              { term: "Cryogenics", definition: "The science and technology of producing and using temperatures below about -150 C (123 K)." },
            ],
            examQuestions: [
              {
                q: "Describe the Linde gas liquefaction system and explain how the Claude cycle improves upon it. Define the inversion temperature and explain why it matters.",
                marks: 7,
                outline: [
                  "Draw the Linde train: compressor, counterflow exchanger, JT valve, separator, recycle.",
                  "Explain the regenerative role of the returning vapour.",
                  "Define the Joule-Thomson effect and the inversion temperature.",
                  "Quote inversion values: air 621 K, hydrogen 202 K, helium 45 K.",
                  "Explain that hydrogen and helium need pre-cooling before JT will work.",
                  "Describe Claude: expander on part of the flow, roughly double the yield.",
                  "Note the constraint: no liquid may form inside the expander; throttle handles final liquefaction.",
                ],
              },
              {
                q: "Why can helium not be liquefied by simple Linde throttling starting from room temperature?",
                marks: 2,
              },
              {
                q: "List three industrial uses of liquid nitrogen.",
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
      title: "Air Conditioning",
      summary:
        "The air side of the subject: psychrometry and its chart, human comfort and effective temperature, system classifications from summer to year-round and all-air to all-water, CLTD cooling load estimation, and the ducts and fans that deliver the air.",
      chapter: {
        number: "04",
        title: "Air Conditioning Systems and Load Estimation",
        intro:
          "Unit IV turns from refrigerant circuits to moist air: the psychrometric properties and processes, what comfort actually means physiologically, how systems are classified and configured, how the cooling load is computed by the CLTD method, and how ducts and fans move the air against friction and dynamic losses.",
        inOneBreath:
          "Psychrometry tracks dry air and water vapour through every process on one chart; comfort is a heat balance best expressed by effective temperature; systems are classified by season and by medium - all-air or all-water; the CLTD method converts walls, glass, people and lights into a block cooling load; ducts and fans then deliver the air against friction and dynamic losses.",
        sections: [
          {
            number: "4.1",
            title: "Psychrometry and the psychrometric chart",
            body: [
              "Psychrometry is the study of moist air - dry air mixed with water vapour - treated as a mixture of ideal gases obeying Dalton's law: total atmospheric pressure equals the partial pressure of dry air plus the partial pressure of water vapour. Three temperatures describe any state. Dry-bulb temperature is what an ordinary thermometer reads. Wet-bulb temperature is read by a thermometer wrapped in a wet wick swung through the air; evaporation cools it toward the adiabatic saturation temperature, so wet bulb tracks the total energy of the mixture. Dew point is the temperature at which the air becomes saturated and dew begins to form - cool below it and water condenses.",
              "The calculated properties follow from the vapour pressure. The humidity ratio W = 0.622 p_v / (p - p_v) in kilograms of water per kilogram of dry air; relative humidity compares the actual vapour pressure with the saturation pressure at the same temperature. Enthalpy of moist air is h = 1.005 t + W (2501 + 1.86 t) kJ per kg of dry air - the first term dry air, the second water vapour's 2501 kJ/kg of vaporisation plus superheat. As a worked example: air at 30 C dry bulb and 50% RH has p_v = 0.5 x 4.246 = 2.123 kPa, so W ≈ 0.0133 kg/kg dry air and h ≈ 64.2 kJ/kg dry air.",
              "The psychrometric chart compresses all of this onto one sheet: dry-bulb temperature on the horizontal axis, humidity ratio on the vertical, the curved saturation line at the left boundary, relative-humidity lines sweeping up-right, wet-bulb lines running diagonally almost parallel to enthalpy lines, and specific volume lines nearly vertical. Processes plot as straight lines: sensible heating and cooling run horizontally, humidification and dehumidification vertically, and adiabatic saturation - the air washer - follows the constant-enthalpy direction. Two independent properties fix any state; everything else is then read off the chart, which is why chart-reading speed is an exam skill in itself.",
            ],
            bullets: [
              "Moist air obeys Dalton's law: total pressure = partial pressure of dry air + partial pressure of water vapour.",
              "W = 0.622 p_v / (p - p_v); relative humidity compares p_v with saturation pressure at the same temperature.",
              "Enthalpy h = 1.005 t + W (2501 + 1.86 t) kJ per kg of dry air - memorise this formula.",
              "DBT, WBT and dew point coincide only at saturation: WBT tracks enthalpy, dew point tracks moisture alone.",
              "Processes are straight lines on the chart: heating horizontal, humidifying vertical, adiabatic saturation along constant enthalpy.",
            ],
            diagram: {
              kind: "matrix",
              title: "The four corners of moist air",
              caption: "Where a state sits on the chart dictates which treatment it needs.",
              axes: {
                x: "Dry-bulb temperature (right = warmer)",
                y: "Humidity ratio (up = more moisture)",
              },
              quadrants: [
                { label: "Cool and humid", note: "winter fog - heat without adding moisture" },
                { label: "Hot and humid", note: "monsoon air - cool and dehumidify together" },
                { label: "Cold and dry", note: "heat and humidify for winter comfort" },
                { label: "Hot and dry", note: "desert air - evaporative cooling shines" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "Psychrometric properties from vapour pressure",
              code: `def humidity_ratio(p_v_kpa, p_atm=101.325):
    """Humidity ratio, kg water per kg dry air."""
    return 0.622 * p_v_kpa / (p_atm - p_v_kpa)

def moist_air_enthalpy(t_c, w):
    """Enthalpy, kJ per kg of dry air."""
    return 1.005 * t_c + w * (2501.0 + 1.86 * t_c)

# Air at 30 C DBT and 50% RH: saturation pressure at 30 C is 4.246 kPa
p_v = 0.5 * 4.246
w = humidity_ratio(p_v)
h = moist_air_enthalpy(30.0, w)
print("W =", round(w, 4), "kg/kg dry air")    # 0.0133
print("h =", round(h, 1), "kJ/kg dry air")    # 64.2

# Same air cooled to its dew point: p_v unchanged, RH reaches 100%
print("dew point: saturation pressure equals", round(p_v, 3), "kPa")
`,
            },
            callout: {
              type: "tip",
              title: "Two properties, one state",
              body: "Chart questions are solved by finding the intersection of the two given properties - say DBT and WBT - and reading everything else along the lines through that point. Practise locating states from DBT + RH, DBT + WBT, and WBT + dew point combinations; each pair appears in RGPV papers.",
            },
            keyTerms: [
              { term: "Wet-bulb temperature", definition: "The equilibrium temperature of a wetted thermometer, approximating the adiabatic saturation temperature of the air." },
              { term: "Humidity ratio", definition: "Mass of water vapour per kilogram of dry air, W = 0.622 p_v/(p - p_v)." },
              { term: "Dew point", definition: "The temperature at which moist air becomes saturated on cooling at constant pressure and moisture content." },
            ],
            examQuestions: [
              {
                q: "Define dry-bulb, wet-bulb and dew point temperatures, humidity ratio and relative humidity. Explain the layout of the psychrometric chart and show sensible heating, sensible cooling and adiabatic saturation on it.",
                marks: 7,
                outline: [
                  "Define each temperature and the instrument that measures it.",
                  "Define W and RH with their formulas.",
                  "Sketch the chart: saturation curve, RH lines, DBT and W axes, enthalpy lines.",
                  "Sensible heating: horizontal line right at constant W.",
                  "Sensible cooling: horizontal line left.",
                  "Adiabatic saturation (air washer): along constant-enthalpy direction, up-left.",
                  "State that two independent properties fix a state and everything else is read.",
                ],
              },
              {
                q: "State Dalton's law as applied to moist air.",
                marks: 2,
              },
              {
                q: "Air at 30 C and 50% RH has saturation pressure 4.246 kPa. Compute its humidity ratio at 101.325 kPa.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.2",
            title: "Comfort air conditioning and effective temperature",
            body: [
              "Comfort is a heat balance, not a number on a dial. A seated adult generates about 100 W - roughly 60 W sensible and 40 W latent at rest - and must continuously shed it to surroundings near a skin temperature of about 33 C. The body has three channels: radiation and convection to cooler surfaces and air, and evaporation of sweat when the first two fail. Comfort is the state in which this shedding happens effortlessly, with no shivering and no visible perspiration; discomfort is the body being forced to fight for balance.",
              "In 1923 Houghton and Yaglou folded temperature, humidity and air movement into a single comfort index: the effective temperature - the temperature of saturated, still air that feels the same as the actual condition. Higher humidity hampers evaporation, so humid air of a given dry-bulb feels warmer and needs a lower DBT for the same effective temperature; air movement strips away the boundary layer, so moving air feels cooler until it becomes a draught. Comfort charts draw the zone where 90% of lightly clothed, sedentary people are comfortable; for Indian summer conditions this sits near 25 C and 50-60% RH with air velocity about 0.2-0.4 m/s. Age, sex, clothing insulation and seasonal acclimatisation shift individual comfort within the zone.",
              "Design conditions are stated, not discovered: summer comfort around 25 ± 1 C at 50-60% RH; winter comfort 20-22 C at 30-50% RH with dew-point control to stop window condensation. Industrial air conditioning is specified by process instead of people: textile spinning holds 26-28 C and 55-65% RH for yarn regain, printing holds tight humidity for register, pharmaceutical cleanrooms and data halls hold temperature bands 24 hours a day. Ventilation standards add fresh air - about 30 cubic metres per hour per person in a typical office - because oxygen, odours and CO2 are part of comfort even though no thermostat senses them.",
            ],
            bullets: [
              "Comfort is a heat balance: the body sheds ≈ 100 W at rest through radiation, convection and evaporation at a skin temperature near 33 C.",
              "Effective temperature fuses DBT, RH and air velocity into one index; humid air needs a lower DBT for the same sensation.",
              "The Indian summer comfort zone sits near 25 C and 50-60% RH with gentle air movement of 0.2-0.4 m/s.",
              "Winter comfort means 20-22 C with 30-50% RH and dew-point control against condensation.",
              "Industrial air conditioning is process-specified - yarn regain, print register, cleanrooms, server halls - not comfort-specified.",
            ],
            diagram: {
              kind: "pyramid",
              title: "The comfort pyramid",
              caption: "Each layer rests on the ones below it.",
              tiers: [
                { label: "Personal factors", note: "clothing, activity, age, acclimatisation" },
                { label: "Effective temperature", note: "DBT + RH + velocity fused into one index" },
                { label: "The four air qualities", note: "temperature, humidity, purity, motion" },
                { label: "Ventilation and fresh air", note: "≈ 30 m^3/h per person" },
              ],
            },
            table: {
              caption: "Indicative indoor design conditions.",
              headers: ["Application", "DBT", "RH", "Notes"],
              rows: [
                ["Summer comfort", "25 ± 1 C", "50-60%", "light clothing assumed"],
                ["Winter comfort", "20-22 C", "30-50%", "heating plus optional humidification"],
                ["Server room", "22-24 C", "45-55%", "process driven, continuous duty"],
                ["Textile spinning", "26-28 C", "55-65%", "yarn moisture regain control"],
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Definitions earn marks fastest here: effective temperature in one sentence, the comfort zone as the region where most people are comfortable, and the four factors (temperature, humidity, air motion, air purity) listed by name. Then give the design numbers - examiners reward specific values over adjectives.",
            },
            keyTerms: [
              { term: "Effective temperature", definition: "A comfort index: the temperature of still, saturated air that produces the same sensation as the actual air condition." },
              { term: "Metabolic rate", definition: "The rate of internal heat generation of the human body, about 100 W for a seated adult." },
              { term: "Comfort zone", definition: "The region on the psychrometric chart where the majority of lightly clothed, sedentary occupants feel comfortable." },
            ],
            examQuestions: [
              {
                q: "Explain effective temperature and the factors governing human comfort, and state recommended indoor design conditions for Indian summer and winter.",
                marks: 7,
                outline: [
                  "Explain the body heat balance: ≈ 100 W generated, shed by radiation, convection and evaporation.",
                  "Define effective temperature with its Houghten-Yaglou origin.",
                  "Explain humidity's role: high RH blocks evaporation, air feels warmer.",
                  "Explain air movement's role: extends comfort until it becomes a draught.",
                  "Give the comfort zone and factors: clothing, activity, age, acclimatisation.",
                  "State design conditions: summer ≈ 25 C at 50-60% RH; winter 20-22 C at 30-50% RH.",
                  "Distinguish comfort from industrial air conditioning with one example.",
                ],
              },
              {
                q: "Define effective temperature.",
                marks: 2,
              },
              {
                q: "Why does industrial air conditioning differ from comfort air conditioning?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.3",
            title: "Summer, winter and year-round systems; all-air, all-water and unitary",
            body: [
              "Air conditioning systems are classified along four axes. By purpose: comfort versus industrial. By season handled: summer (cooling and dehumidifying), winter (heating and humidifying), or year-round (both, plus controls). By construction: central plant with ducts, packaged units, split systems and window units. By heat-transfer medium: all-air, where ducts carry everything; all-water, where pipes feed fan-coil units; air-water hybrids; and unitary refrigerant-based equipment including variable refrigerant flow systems.",
              "The summer circuit is the psychrometric workhorse. Return air mixes with fresh ventilation air, filters, then crosses a chilled-water or DX coil whose surface sits below the air's dew point, so the process line runs diagonally down the chart - cooling and dehumidification together - toward the apparatus dew point (ADP). Not all air touches the coil surface; the bypass factor, defined as (t_exit - ADP)/(t_inlet - ADP), runs 0.05 to 0.3 for real coils, zero for the perfect coil. Supply air at 12-16 C is delivered through ducts; reheaters trim individual zones where humidity control or different loads demand it. Winter is the mirror image: preheat to enable humidification, spray or steam-inject moisture, then reheat to the supply temperature.",
              "The medium decides the building's anatomy. All-air systems - single-duct constant volume to VAV - give the best humidity and temperature control and dominate hospitals, theatres and offices, at the cost of the largest ductwork and ceiling space. All-water systems pipe chilled water to fan-coil units in each room: tiny pipes, per-room control, ideal for hotels and retrofits, but they do not by themselves deliver ventilation air. Air-water induction systems and primary-air fan coils blend the two. Unitary and split DX equipment serves small buildings and room-by-room additions cheaply. Selection follows size, zoning needs, control precision and the ceiling void actually available.",
            ],
            bullets: [
              "Classify by season (summer, winter, year-round), construction (central, packaged, split, window) and medium (all-air, all-water, air-water, DX).",
              "The summer coil runs below the air's dew point: cooling and dehumidification proceed together toward the apparatus dew point.",
              "Bypass factor = (t_exit - ADP)/(t_inlet - ADP): 0 for a perfect coil, 0.05-0.30 for real ones.",
              "Winter treatment is the mirror image: preheat, humidify, reheat to supply temperature.",
              "All-air gives the tightest control but the largest ducts; all-water saves space but cannot ventilate alone.",
            ],
            diagram: {
              kind: "compare",
              title: "All-air vs all-water distribution",
              caption: "Same cooling duty, two completely different building anatomies.",
              left: {
                heading: "All-air",
                items: [
                  "One central AHU serves every zone",
                  "Cooling happens only at the plant",
                  "Large supply and return ducts",
                  "Excellent humidity and temperature control",
                  "Hospitals, theatres, large offices",
                ],
              },
              right: {
                heading: "All-water",
                items: [
                  "Chilled water piped to fan-coil units",
                  "Small pipes replace ductwork",
                  "Ventilation air must be added separately",
                  "Per-room control, easy zoning and retrofit",
                  "Hotels, apartments, older buildings",
                ],
              },
            },
            table: {
              caption: "Medium against typical application.",
              headers: ["Medium", "Examples", "Best for"],
              rows: [
                ["All-air", "single duct, VAV", "offices, hospitals, theatres"],
                ["All-water", "fan-coil units", "hotels, retrofits with no duct space"],
                ["Air-water", "induction units with primary air", "high-rise perimeter zones"],
                ["Unitary / DX", "window, split, packaged, VRF", "small buildings, room-by-room additions"],
              ],
            },
            callout: {
              type: "warning",
              title: "Name the axes",
              body: "Questions asking 'classify air conditioning systems' are marked by axes, not by catalogue. Structure the answer as four classifications - purpose, season, construction, medium - and give two examples per axis. Rambling through brand names and product types earns nothing.",
            },
            keyTerms: [
              { term: "Apparatus dew point", definition: "The effective coil surface temperature toward which air moves as it is cooled and dehumidified." },
              { term: "Bypass factor", definition: "The fraction of air leaving a coil unchanged: (t_exit - ADP)/(t_inlet - ADP); zero for an ideal coil." },
              { term: "Fan-coil unit", definition: "A terminal device with a fan and a water coil, used in all-water systems for room-by-room conditioning." },
            ],
            examQuestions: [
              {
                q: "Classify air conditioning systems, and explain summer and winter air conditioning with a psychrometric sketch of each process.",
                marks: 7,
                outline: [
                  "Give the four classification axes with examples for each.",
                  "Summer: sketch mix point, cooling-dehumidifying line down to the supply state.",
                  "Define apparatus dew point and bypass factor.",
                  "Explain the role of fresh air and the filter in the treatment train.",
                  "Winter: sketch preheat, adiabatic humidification, reheat path.",
                  "Year-round: both coils plus humidifier and controls.",
                  "Close with a comparison of all-air and all-water distribution.",
                ],
              },
              {
                q: "Define bypass factor of a cooling coil.",
                marks: 2,
              },
              {
                q: "Why do hotels favour all-water systems while hospitals insist on all-air?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.4",
            title: "Cooling load estimation and the CLTD method",
            body: [
              "The cooling load is the rate at which heat must be removed to hold design conditions, and it is assembled from eight components: conduction through walls and roof, solar gain and conduction through glass, heat from people (sensible plus latent), lighting, appliances and equipment, infiltration through cracks and doors, ventilation air mandated for freshness, and product or process loads such as fresh food dropped into a freezer. Heat gain is not the same as cooling load: radiation absorbed by walls and furniture is released hours later, so the load on the coil lags the sun on the roof.",
              "The CLTD method - cooling load temperature difference - handles the lag with precomputed tables. For opaque surfaces, Q = U x A x CLTD, where the CLTD is an equivalent temperature difference that already contains solar intensity, time lag, daily range and colour corrections. Glass solar gain uses Q = A x SC x SCL, with SCL the shading coefficient corrected solar cooling load; conduction through glass is small and treated separately. Internal gains use cooling load factors: people contribute roughly 100 W sensible and 60 W latent each when seated, and lights contribute their wattage times a CLF that reflects thermal storage. Summing everything and adding a 5-10% margin gives the block load for plant selection.",
              "A worked example fixes the method. Roof: U = 1.5 W/m2K, area 40 m2, CLTD 30 K, giving 1.80 kW. Glass: 6 m2 with shading coefficient 0.7 and SCL 300 W/m2, giving 1.26 kW. Eight sedentary people at 150 W each add 1.20 kW. Lights rated 1.5 kW with CLF 0.8 add 1.20 kW. Infiltration and fan heat add 0.35 kW. The block load is 5.81 kW; with a 10% margin, 6.4 kW, roughly 1.8 TR - and the plant is selected at the next standard size above. Modern software performs the full radiant time series or heat balance method, but the CLTD hand method remains what exams and quick surveys use.",
            ],
            bullets: [
              "Eight load components: walls and roof, glass solar and conduction, people, lights, equipment, infiltration, ventilation, product loads.",
              "CLTD bundles solar gain, time lag and daily range into one equivalent temperature difference: Q = U x A x CLTD.",
              "Glass solar uses Q = A x SC x SCL; internal gains use cooling load factors to model thermal-mass delay.",
              "People shed ≈ 100 W sensible and 60 W latent each when seated; every lighting watt ends up as heat.",
              "Add 5-10% margin and select the next standard plant size - never round down.",
            ],
            diagram: {
              kind: "flow",
              title: "Assembling the block cooling load",
              caption: "From sun on the roof to plant capacity in five steps.",
              steps: [
                { label: "Envelope gains: walls, roof, glass and sun" },
                { label: "Internal gains: people, lights, machines" },
                { label: "Air gains: infiltration plus fresh ventilation air" },
                { label: "Storage lag via CLTD and CLF", note: "peak load trails the sun by hours" },
                { label: "Sum + 5-10% margin = plant capacity" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "CLTD block load for a small office",
              code: `loads = {
    "roof U=1.5, 40 m2, CLTD 30":        1.5 * 40 * 30 / 1000.0,   # 1.80 kW
    "glass 6 m2, SC 0.7, SCL 300":      6 * 0.7 * 300 / 1000.0,   # 1.26 kW
    "people 8 x 150 W":                 8 * 150 / 1000.0,         # 1.20 kW
    "lights 1.5 kW, CLF 0.8":           1.5 * 0.8,                # 1.20 kW
    "infiltration and fan heat":        0.35,                     # 0.35 kW
}

total = sum(loads.values())
for name, kw in loads.items():
    print(f"{name:34s} {kw:5.2f} kW")

print("block load =", round(total, 2), "kW")             # 5.81
print("with 10% margin =", round(total * 1.10, 2), "kW") # 6.39
print("plant size ~=", round(total * 1.10 / 3.517, 1), "TR")  # 1.8
`,
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Tabulate the calculation exactly as the code does - component, formula, result - because examiners award marks per correctly computed line. Quote the CLTD method formulas first (U A CLTD, A SC SCL, W x CLF), then substitute. End with the margin and the plant size in TR; forgetting the margin is the most common slip.",
            },
            keyTerms: [
              { term: "CLTD", definition: "Cooling load temperature difference: a tabulated equivalent temperature difference that folds solar gain and thermal lag into Q = U x A x CLTD." },
              { term: "CLF", definition: "Cooling load factor: the fraction of an internal gain that reaches the coil at a given hour, reflecting storage in the building mass." },
              { term: "SCL", definition: "Solar cooling load: the tabulated solar gain per square metre of glazing for a given orientation, hour and latitude." },
            ],
            examQuestions: [
              {
                q: "List the components of cooling load, explain the CLTD method with formulas for walls, glass and internal gains, and work a small example.",
                marks: 7,
                outline: [
                  "List the eight components in two groups: envelope and internal.",
                  "Explain heat gain vs cooling load - storage delay.",
                  "Walls and roof: Q = U x A x CLTD, with corrections for colour and daily range.",
                  "Glass: solar Q = A x SC x SCL plus small conduction term.",
                  "Internal: people ≈ 100 W sensible + 60 W latent; lights W x CLF.",
                  "Work the example: 1.80 + 1.26 + 1.20 + 1.20 + 0.35 = 5.81 kW.",
                  "Add 5-10% margin, convert to TR (≈ 1.8), select the next standard size.",
                ],
              },
              {
                q: "Why does the peak cooling load lag the peak solar radiation?",
                marks: 2,
              },
              {
                q: "Distinguish between heat gain and cooling load.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.5",
            title: "Fans, ducts and air distribution",
            body: [
              "Ducts are the arteries of an all-air system, built most often of galvanised steel sheet, sometimes of aluminium, fabric or fibre board. Round ducts lose the least pressure for a given cross-section; rectangular ducts fit tight ceiling voids, and flat-oval splits the difference. Pressure losses come in two currencies: friction along straight ducts, given by the Darcy relation as f times L/D times the dynamic pressure, and dynamic losses at every fitting - bends, tees, transitions and diffusers - quoted as equivalent lengths of straight duct. Design by the equal friction method fixes a single friction rate, typically 0.8 to 1.0 Pa per metre, and sizes each duct section for its flow; velocities are held to about 6-9 m/s in mains and 4-6 m/s in branches to keep noise acceptable.",
              "Fans supply the pressure. Centrifugal fans come in forward-curved multi-vane form - compact, quiet, developing pressure at low speed - and backward-curved or airfoil form, which are more efficient and non-overloading, hence the industry favourite for large AHUs. Axial fans - propeller, tube-axial and vane-axial - move large volumes at low pressure and suit return air and cooling tower duty. Three affinity laws govern everything: flow varies with speed, pressure with speed squared, and power with speed cubed. Hence a 20% speed reduction cuts power by almost half, which is precisely why variable frequency drives transformed fan energy economics.",
              "The fan and the duct system negotiate at the duty point: where the fan's pressure-flow curve crosses the system's parabolic resistance curve. Throttling dampers steepen the system curve wastefully; a VFD slides the fan curve down along the system curve, riding the affinity laws. Design then moves to terminals: grilles, registers and diffusers chosen for throw, spread and noise criterion - offices sit around NC 35-40 - with balancing dampers set during testing and commissioning. Duct leakage class and access doors matter for commissioning; insulation and acoustic lining decide whether the energy and the noise both stay inside.",
            ],
            bullets: [
              "Round ducts lose least pressure for equal area; rectangular saves ceiling space - choose by the headroom actually available.",
              "Total pressure loss = friction (f L/D x dynamic pressure) + dynamic fitting losses quoted as equivalent lengths.",
              "Equal friction design fixes ≈ 0.8-1.0 Pa/m throughout: size each section for its flow, then balance with dampers.",
              "Fan laws: flow varies with N, pressure with N squared, power with N cubed - a 20% speed cut almost halves the power.",
              "The duty point is the intersection of the fan curve with the system curve; VFDs ride down the curve instead of throttling it.",
            ],
            diagram: {
              kind: "pipeline",
              title: "The supply air path",
              caption: "From return grille to diffuser through the air handling unit.",
              stages: [
                { label: "Return air grille and mixing box" },
                { label: "Filter bank" },
                { label: "Chilled-water cooling coil" },
                { label: "Supply fan" },
                { label: "Main duct, branches and dampers" },
                { label: "Ceiling diffusers", note: "throw and noise criterion decide the terminal" },
              ],
            },
            table: {
              caption: "Fan affinity laws at a glance.",
              headers: ["Quantity", "Against speed N", "Against air density"],
              rows: [
                ["Volume flow Q", "varies with N", "no change"],
                ["Pressure developed", "varies with N^2", "varies with density"],
                ["Power absorbed", "varies with N^3", "varies with density"],
              ],
            },
            callout: {
              type: "tip",
              title: "The cubic law is the money",
              body: "Whenever a question mixes fans and energy, quote the cube law explicitly: power varies with speed cubed, so small speed reductions yield dramatic savings - 20% slower is about 49% power. Then add that VFDs exploit exactly this while dampers do not, and you have the complete modern answer.",
            },
            keyTerms: [
              { term: "Equal friction method", definition: "Duct sizing at a single friction rate, typically 0.8-1.0 Pa per metre, across all sections." },
              { term: "Fan affinity laws", definition: "Flow proportional to speed, pressure to speed squared, power to speed cubed, for a fixed system." },
              { term: "System curve", definition: "The parabolic relation between flow and resistance of a given duct system; its intersection with the fan curve is the duty point." },
            ],
            examQuestions: [
              {
                q: "Explain duct pressure losses and the equal friction design method, state the fan affinity laws, and show the energy saving from a 20% speed reduction.",
                marks: 7,
                outline: [
                  "Split losses into friction (Darcy: f L/D x rho V^2/2) and dynamic (fittings, equivalent length).",
                  "Explain equal friction: one friction rate, 0.8-1.0 Pa/m; velocities capped for noise.",
                  "Compare rectangular vs round ducts briefly.",
                  "State the three laws: Q with N, pressure with N^2, power with N^3.",
                  "Compute: 0.8 speed means 0.8^3 = 0.51, about 49% power saving.",
                  "Explain the duty point as fan curve intersecting system curve.",
                  "Note VFDs exploit the cube law; throttling dampers do not.",
                ],
              },
              {
                q: "Why are round ducts more efficient than rectangular ducts?",
                marks: 2,
              },
              {
                q: "Compare forward-curved and backward-curved centrifugal fans.",
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
      title: "Applications, Controls and Energy Efficiency",
      summary:
        "Where the theory earns its keep: cold storage and ice plants, refrigerated transport, data centre and precision cooling, thermostats and safety cutouts, and the efficiency agenda of BEE star ratings, inverter drives and VRF heat recovery.",
      chapter: {
        number: "05",
        title: "Applications and Controls",
        intro:
          "Unit V walks the plant floor: preserving food and freezing ice, carrying the cold chain by road and sea, holding server halls at temperature with the least electricity, keeping machines safe with thermostats and cutouts, and finishing with the rating systems and variable-speed technologies that decide an installation's energy bill.",
        inOneBreath:
          "Cold stores and ice plants preserve food and freeze water in brine; trucks, ships and containers carry the cold chain on engine-driven, eutectic or cryogenic systems; data centres spend almost as much energy moving heat as the servers do making it; thermostats, pressurestats and cutouts keep plants safe; and BEE stars, inverter drives and VRF heat recovery decide whether the electricity bill is kind.",
        sections: [
          {
            number: "5.1",
            title: "Cold storage and ice plant",
            body: [
              "Food spoils through microbial growth, enzyme action and oxidation, and every one of these slows dramatically with temperature - a rough rule halves the spoilage rate for each 10 K of cooling. Chilling holds produce just above 0 C to slow decay without freezing; freezing at -18 C or below stops microbial growth outright and extends life from days to months. The cold chain is the discipline of holding the right temperature from harvest to plate: field heat must be removed within hours of picking, and every link - store, truck, display cabinet and domestic refrigerator - must hold its segment.",
              "A cold storage is an insulated envelope with a refrigeration plant matched to its heat leaks and product loads. Modern rooms use PUF sandwich panels with a vapour barrier on the warm side of the insulation - placed wrongly, moisture condenses inside the panel and destroys it. Floors are insulated and either heated or ventilated to prevent frost heave from freezing the soil below. Unit coolers give high air throw for even temperatures; defrost by electric heaters or hot gas clears the evaporator on a timer terminated by temperature. Doors get air curtains and strip curtains; alarms protect trapped staff. Typical rooms: chiller 0-4 C, freezer -18 to -25 C, potato store 8-12 C, ice-cream hardening at -25 to -30 C.",
              "The ice plant is the classic brine application. Potable water in cans is dipped into a brine tank - sodium chloride or calcium chloride solution held near -10 C by the main plant - and an agitator circulates brine around the cans for even freezing. Block sizes from 11 to 140 kg freeze in roughly 12 to 48 hours; the load per kilogram of ice is the sensible cooling of water from ambient plus the 335 kJ/kg latent heat, so a 25 kg block absorbs about 11.5 MJ. Flake and tube ice plants freeze thin layers continuously on a drum, harvesting in minutes for fisheries and concrete cooling.",
            ],
            bullets: [
              "Every 10 K of cooling roughly halves spoilage rate - the entire logic of the cold chain from harvest to plate.",
              "Cold rooms are PUF-insulated envelopes with a warm-side vapour barrier, frost-protected floors and defrosting unit coolers.",
              "Typical rooms: chiller 0-4 C, freezer -18 to -25 C, potato 8-12 C, ice-cream hardening -25 to -30 C.",
              "Block ice plants freeze water in cans dipped in agitated brine near -10 C; 11-140 kg blocks take 12-48 h.",
              "Ice load = chilling water from ambient (4.18 kJ/kg K) + latent heat of fusion (335 kJ/kg) + tank heat leak.",
            ],
            diagram: {
              kind: "flow",
              title: "The cold chain",
              caption: "One unbroken temperature discipline from field to plate.",
              steps: [
                { label: "Harvest or process" },
                { label: "Pre-cool within hours", note: "field heat out fast" },
                { label: "Chill or freeze store", note: "0 to -25 C by product" },
                { label: "Refrigerated transport", note: "no breaks in temperature" },
                { label: "Retail display and home", note: "the chain ends on the plate" },
              ],
            },
            table: {
              caption: "Indicative storage conditions for common products.",
              headers: ["Product", "Temperature", "RH", "Typical life"],
              rows: [
                ["Apples", "0 to 4 C", "≈ 90%", "2-6 months"],
                ["Potatoes", "8 to 12 C", "85-90%", "6-8 months"],
                ["Butter", "-18 to -20 C", "sealed wrap", "8-12 months"],
                ["Ice cream", "-25 C", "any", "3-6 months"],
                ["Fresh fish", "0 C on ice", "wet", "5-10 days"],
              ],
            },
            callout: {
              type: "warning",
              title: "Vapour barrier side",
              body: "The classic cold-storage trap question: which side does the vapour barrier go? Always the warm side - the side moisture would drive from. Cold-side barriers or missing barriers let vapour diffuse in, condense inside the insulation and freeze, silently turning the insulation into an ice block with no R-value.",
            },
            keyTerms: [
              { term: "Cold chain", definition: "The unbroken sequence of refrigerated handling that holds product temperature from harvest to consumption." },
              { term: "Field heat", definition: "The sensible heat carried by freshly harvested produce, which must be removed quickly to begin preservation." },
              { term: "Secondary refrigerant", definition: "A heat-transfer fluid such as brine, chilled by the primary plant and circulated to the load." },
            ],
            examQuestions: [
              {
                q: "Explain the design essentials of a cold storage - insulation, vapour barrier, floor protection and refrigeration load - and describe the working of a block ice plant.",
                marks: 7,
                outline: [
                  "State the preservation principle: spoilage roughly halves per 10 K of cooling.",
                  "Insulation: PUF panels, correct thickness for the room duty.",
                  "Vapour barrier on the warm side; explain interstitial condensation if misplaced.",
                  "Floor heating or ventilation against frost heave.",
                  "Load = transmission + product + infiltration + fan and defrost heat.",
                  "Ice plant: cans in agitated brine at about -10 C, 12-48 h per block.",
                  "Compute the load per kg of ice: 4.18 x temperature drop + 335 kJ/kg.",
                ],
              },
              {
                q: "What is field heat and why must it be removed quickly?",
                marks: 2,
              },
              {
                q: "Why must the vapour barrier sit on the warm side of the insulation?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.2",
            title: "Transport refrigeration",
            body: [
              "Refrigerated transport carries the cold chain on wheels, rails, water and wings. The insulated body is a sandwich of PUF panels achieving an overall U-value near 0.4 W/m2K; the loads it must fight are transmission through the panels under tropical sun, infiltration every time a door opens, respiration of fresh produce, defrost heat and the pull-down of warm product loaded in error. European ATP rules classify equipment by the temperature it can hold - class A down to 0 C, B to -10 C, C to -20 C, with classes D, E and F defined at or below 0, -10 and -20 C.",
              "Road machinery comes in four families. Engine-driven compressors take power from the vehicle engine - cheap, but cooling stops when the cab idles down. Self-contained diesel-electric units, the trailer and container standard, run independently of the tractor and can be plugged into shore power at the dock. Eutectic plates - beams of phase-change material frozen overnight on cheap off-peak electricity - suit multi-drop milk and bakery rounds because they hold temperature through many door openings in silence. Cryogenic systems spray liquid nitrogen or carbon dioxide directly into the cargo space: no engine, no vibration, precise control, but running cost rides on gas price.",
              "Marine and container systems scale the same ideas. Reefer ships circulate brine or secondary refrigerant from a central plant to holds via grid coils; container fleets use integral clip-on units with their own diesel gensets for overland legs; controlled-atmosphere technology extends fruit voyages to weeks by trimming oxygen to 2-5% and scrubbing CO2 and ethylene. Air cargo uses active containers with battery packs or passive packages with dry ice and phase-change panels for pharmaceuticals. Selection weighs journey length, door openings, ambient extremes and the value of the cargo - pharma demands redundancy and recorders that frozen chips do not.",
            ],
            bullets: [
              "Insulated bodies achieve U ≈ 0.4 W/m2K and must hold class temperatures to -20 C (ATP classes A to F).",
              "Power families: engine-driven compressor, diesel-electric unit, eutectic plates, cryogenic spray - each fits a duty cycle.",
              "Door openings dominate real loads: a minute of open door at -18 C can cost an hour of pull-down.",
              "Fresh produce rides with a small fresh-air exchange to strip CO2 and ethylene; frozen loads travel sealed.",
              "Controlled atmosphere (2-5% O2) and CA containers stretch fruit voyages to weeks.",
            ],
            diagram: {
              kind: "matrix",
              title: "Choosing transport refrigeration",
              caption: "Match the machinery to journey length and cargo sensitivity.",
              axes: {
                x: "Journey length (right = longer)",
                y: "Cargo sensitivity (up = more sensitive)",
              },
              quadrants: [
                { label: "Short and sensitive", note: "eutectic plates, pre-frozen - silent multi-drop dairy and pharma rounds" },
                { label: "Long and sensitive", note: "integral diesel-electric reefer with redundancy, recorders, CA option" },
                { label: "Short and robust", note: "insulated body, maybe no plant at all - overnight parcels" },
                { label: "Long and robust", note: "diesel unit or cryogenic - frozen goods line-haul" },
              ],
            },
            table: {
              caption: "Mode against typical machinery.",
              headers: ["Mode", "Typical plant", "Notes"],
              rows: [
                ["Road van", "engine-driven compressor", "cheap; cooling follows engine speed"],
                ["Trailer / 40-ft container", "diesel-electric integral unit", "standby on shore power at docks"],
                ["Multi-drop dairy", "eutectic plates", "charged overnight, silent drops"],
                ["Cryogenic", "LN2 or LCO2 spray", "no engine, precise, gas-priced"],
                ["Marine hold", "central NH3 with brine grid", "one plant, many holds"],
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Structure any transport question as loads first, then machinery families, then one matched example. The examiner's checklist: body U-value and door losses, the four power families, and a sentence on controlled atmosphere for fruit. Close with temperature classes if the question mentions standards.",
            },
            keyTerms: [
              { term: "Eutectic plate", definition: "A beam of phase-change material, frozen while parked, that cools a cargo space by melting during delivery rounds." },
              { term: "Reefer", definition: "A refrigerated vehicle or container fitted with its own cooling machinery." },
              { term: "Controlled atmosphere", definition: "Modified O2 and CO2 levels in a sealed cargo space that slow respiration and ripening of fruit." },
            ],
            examQuestions: [
              {
                q: "Explain the heat loads of a refrigerated truck body and compare engine-driven, eutectic and cryogenic refrigeration systems with their applications.",
                marks: 7,
                outline: [
                  "List loads: transmission, infiltration at doors, product respiration and pull-down, defrost.",
                  "Give the body U-value ≈ 0.4 W/m2K and mention tropical ambient design.",
                  "Engine-driven: cheap, tied to engine speed - vans and trucks.",
                  "Eutectic: overnight charge, silent multi-drop - dairy and bakery.",
                  "Cryogenic LN2/LCO2: no engine, precise - pharma and high-value loads.",
                  "Diesel-electric integral units: the trailer and container standard.",
                  "Close with ATP temperature classes A to F.",
                ],
              },
              {
                q: "What is a eutectic plate?",
                marks: 2,
              },
              {
                q: "Why do fruit-carrying reefer containers have fresh-air vents?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.3",
            title: "Data centre and precision cooling case studies",
            body: [
              "A data centre is a refrigerator for mathematics: essentially every watt the servers consume leaves as heat, so the cooling plant is sized for the IT load plus lighting and losses. Rack densities have climbed from 1-2 kW to 10-40 kW for AI clusters, and the industry tracks efficiency with PUE - power usage effectiveness, total facility energy divided by IT energy. Perfect is 1.0; legacy halls sat near 1.8-2.0, modern facilities target 1.2-1.5, and hyperscale leaders with free cooling reach about 1.1. ASHRAE recommends inlet air of 18-27 C, and most of the efficiency art is learning to work at the top of that band.",
              "The technique ladder climbs with density. Room-based CRAC (direct expansion) or CRAH (chilled water) units around the perimeter gave way to hot-aisle/cold-aisle arrangement and then containment, so the cold air goes only to server inlets and the hot exhaust never mixes with it. Raised-floor supply or overhead ducting feeds the cold aisle; higher chilled-water temperatures - 15-20 C supply instead of 7 C - open the door to water-side economisers and cooling towers doing free cooling for most of the year; air-side economisers filter and admit outside air when it is cold enough. Above roughly 30 kW per rack, air gives up: rear-door heat exchangers, direct-to-chip cold plates and immersion cooling take over.",
              "Case studies write the lesson. A 1000 kW legacy hall with PUE 1.8 spends 800 kW on cooling and losses; after containment, variable-frequency fans and a 5 K warmer chilled-water setpoint, cooling drops toward 350 kW and PUE lands near 1.45 - the extra 450 kW saved every hour is revenue. A Nordic hyperscale site with water-side free cooling nearly all year posts PUE ≈ 1.1. Telecom shelters in hot climates pair split units with fan-only fresh-air free cooling to survive grid outages. In every case the instrumentation came first - DCIM sensors on every rack - because you cannot save what you cannot see.",
            ],
            bullets: [
              "Nearly every IT watt exits as heat: size cooling for the IT load plus lighting and distribution losses.",
              "PUE = total facility energy / IT energy; legacy ≈ 1.8, good practice ≈ 1.4, leaders with free cooling ≈ 1.1.",
              "Contain hot and cold aisles first - the cheapest 10-20% energy saving in most existing halls.",
              "Raise chilled-water temperature to widen economiser hours: every kelvin up is more free-cooling time.",
              "Above about 30 kW a rack, move to rear-door, direct-to-chip or immersion liquid cooling.",
            ],
            diagram: {
              kind: "layers",
              title: "The heat removal stack",
              caption: "From silicon to sky - each layer must clear the one above it.",
              layers: [
                { label: "IT load: chips and memory", note: "all input power ends as heat" },
                { label: "Chip or in-rack cold plates", note: "for 30 kW+ racks" },
                { label: "Row coolers and rear-door exchangers", note: "close-coupled air capture" },
                { label: "Room-level CRAH with chilled water", note: "N+1 or 2N redundancy" },
                { label: "Heat rejection: towers, dry coolers, economisers", note: "free cooling when conditions allow" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "PUE arithmetic for a 1 MW hall",
              code: `def pue(it_kw, cooling_kw, ups_loss_kw, lighting_kw):
    """Power usage effectiveness = total facility / IT energy."""
    total = it_kw + cooling_kw + ups_loss_kw + lighting_kw
    return total / it_kw

# Legacy hall: 1000 kW IT, 700 kW cooling, 80 kW UPS losses, 20 kW other
print("legacy PUE =", round(pue(1000, 700, 80, 20), 2))    # 1.80

# After containment + VFD fans + warmer water: cooling halves
print("upgraded PUE =", round(pue(1000, 350, 80, 20), 2))  # 1.45

# Cooling energy saved per year at 1000 kW IT, continuous duty
saved_kw = (700 - 350)
print("saved:", saved_kw, "kW =", round(saved_kw * 8.76, 1), "lakh kWh/yr")
# 350 kW x 8760 h = 30.66 lakh units - real money at any tariff.
`,
            },
            callout: {
              type: "tip",
              title: "Order of operations",
              body: "Interview and exam answers both shine when the efficiency sequence is ordered: measure first (DCIM), then contain aisles, then raise temperatures, then economise, and only then buy new plant. Jumping straight to new chillers is the expensive mistake the ordering prevents.",
            },
            keyTerms: [
              { term: "PUE", definition: "Power usage effectiveness: total facility energy divided by IT equipment energy; 1.0 is the ideal." },
              { term: "CRAC / CRAH", definition: "Computer room air conditioning (DX) or air handling (chilled water) units serving the data hall." },
              { term: "Free cooling", definition: "Using outside air, water-side economisers or towers instead of compressors when conditions permit." },
            ],
            examQuestions: [
              {
                q: "Define PUE, explain hot-aisle/cold-aisle containment and free cooling, and describe how a 1 MW legacy data hall can be made energy-efficient.",
                marks: 7,
                outline: [
                  "State the heat problem: IT load in equals heat out; cooling sized accordingly.",
                  "Define PUE with benchmarks: legacy 1.8, good 1.4, leaders 1.1.",
                  "Explain hot/cold aisle arrangement and containment - no mixing of supply and exhaust.",
                  "Explain raised chilled-water temperature enabling water-side free cooling.",
                  "Air-side economiser: filtered outside air when ambient is cold enough.",
                  "Case study numbers: 1000 kW IT, cooling 700 to 350 kW, PUE 1.80 to 1.45.",
                  "High-density future: rear-door, direct-to-chip and immersion cooling.",
                ],
              },
              {
                q: "State the ASHRAE recommended inlet temperature range for IT equipment.",
                marks: 2,
              },
              {
                q: "Why is liquid cooling displacing air cooling in AI clusters?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.4",
            title: "Controls: thermostats, electronic control and safety devices",
            body: [
              "Every control loop has three parts: a sensing element, a controller and an actuator. The workhorse thermostat senses temperature with a bimetal strip that snaps contacts, or with a bellows fed by a remote bulb - a volatile liquid charge that vapourises and pushes the bellows as the sensed temperature rises. The same bellows mechanism reading pressure instead of temperature makes a pressurestat, which controls vehicles and large plants on suction pressure; a humidistat with a moisture-sensitive element does the same job for humidity. Identify those three parts in any exam circuit and half the marks are banked.",
              "Electrical and electronic layers sit above the primary controls. Relay logic and contactors switch compressor motors, with direct-on-line starters and overload protection for small machines and star-delta or soft starters for large ones. A solenoid valve upstream of the expansion valve, wired to the thermostat, enables pump-down: on thermostat satisfaction the solenoid closes, the compressor empties the low side into the receiver and trips on low pressure - so the compressor never starts against liquid. Defrost control runs on a timer but must terminate on evaporator temperature, because heaters plus ice plus no termination is a pressure bomb. Modern plants add thermistors and RTDs feeding DDC controllers and BMS with PID loops, and electronic expansion valves with adaptive superheat control.",
              "Safety devices are wired in series so that any one opens and stops the machine. The high-pressure cutout guards against condenser failure or blocked discharge; the low-pressure cutout trips on loss of charge and doubles as the pump-down switch; the oil-pressure failure switch includes a time delay because oil pressure takes seconds to build at start; motor overloads, thermal and electronic, protect the windings; relief valves and rupture discs back up the cutouts mechanically; fusible plugs guard against fire exposure; crankcase heaters prevent refrigerant condensing in the oil during off cycles. Ammonia plants add detectors and ventilation interlocks. The philosophy: protection devices are fail-safe, manual reset after every trip.",
            ],
            bullets: [
              "Every loop has sensor, controller and actuator - name all three when you sketch any control circuit.",
              "Bellows-and-bulb thermostats and pressurestats remain the primary controls; DDC and BMS layer intelligence on top.",
              "Solenoid plus thermostat gives pump-down: refrigerant is parked in the receiver before the compressor stops.",
              "Defrost must terminate on temperature, not time alone - heaters plus ice without termination causes pressure spikes.",
              "Safety cutouts (HP, LP, oil pressure, overload, relief valve, fusible plug) sit in series, fail-safe, manual reset.",
            ],
            diagram: {
              kind: "fork",
              title: "Discharge pressure climbs - what happens next",
              caption: "The same event, four very different engineering responses.",
              start: "Compressor discharge pressure rises toward the red line",
              branches: [
                { label: "HP cutout opens at set point", outcome: "Compressor stops safely and the alarm sounds - protection done right", good: true },
                { label: "Operator bypasses the switch to keep running", outcome: "Relief valve bursts or the head cracks - the dangerous shortcut", good: false },
                { label: "Condenser fouling traced and cleaned", outcome: "Root cause removed; pressure returns to normal band", good: true },
                { label: "Reset without investigating the cause", outcome: "Repeated trips cook the motor - nuisance failure mode", good: false },
              ],
            },
            table: {
              caption: "Control and safety devices at a glance.",
              headers: ["Device", "Senses", "Action"],
              rows: [
                ["Thermostat", "temperature (bimetal or bulb)", "starts and stops compressor or solenoid"],
                ["Humidistat", "relative humidity element", "modulates humidifier or dehumidifier"],
                ["HP cutout", "discharge pressure", "stops compressor, manual reset"],
                ["LP cutout", "suction pressure", "stops on low charge; pump-down switch"],
                ["Oil pressure switch", "net oil pressure", "time-delayed stop on oil failure"],
                ["Relief valve", "pressure", "vents to atmosphere as last resort"],
              ],
            },
            callout: {
              type: "warning",
              title: "Series, fail-safe, manual reset",
              body: "Three phrases that must appear in every safety answer: cutouts are wired in series so any one stops the machine; they fail safe (de-energise to trip); and they demand manual reset so someone must look at the plant before it runs again. Automatic-reset safety devices are a contradiction in terms.",
            },
            keyTerms: [
              { term: "Thermostat", definition: "A temperature-actuated switch, using a bimetal element or a remote bulb and bellows, controlling the refrigeration circuit." },
              { term: "Pump-down control", definition: "Closing a liquid solenoid so the compressor evacuates the low side into the receiver before stopping on low pressure." },
              { term: "HP/LP cutout", definition: "Pressure-actuated protective switches that stop the compressor on excessive discharge or insufficient suction pressure." },
            ],
            examQuestions: [
              {
                q: "Explain the working of a bellows-type thermostat and describe the safety devices fitted on a vapour compression plant, with the philosophy of their settings.",
                marks: 7,
                outline: [
                  "Describe the bulb-capillary-bellows thermostat and its snap-action contacts.",
                  "Explain pressurestat and humidistat as siblings of the same mechanism.",
                  "Pump-down: solenoid closes, compressor empties the low side, LP switch stops it.",
                  "HP cutout: guards against condenser failure or blocked discharge.",
                  "LP cutout: loss of charge protection and pump-down duty.",
                  "Oil pressure switch with time delay: oil takes seconds to build at start.",
                  "Philosophy: series wiring, fail-safe, manual reset; relief valve as mechanical backup.",
                ],
              },
              {
                q: "What is pump-down control and why is it used?",
                marks: 2,
              },
              {
                q: "Why must the oil-pressure failure switch include a time delay?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.5",
            title: "Energy efficiency: BEE ratings, inverter drives and VRF systems",
            body: [
              "Room air conditioners are graded by the Bureau of Energy Efficiency, and two numbers matter. EER - energy efficiency ratio - is the spot ratio of cooling capacity in watts to electrical power input in watts at rated conditions. ISEER - the Indian seasonal EER - is the smarter metric: total cooling delivered over a typical Indian season divided by total energy consumed, which rewards machines that stay efficient at part load, where an air conditioner spends most of its life. Star bands for split ACs in the current table rise from about 3.3 ISEER for one star to 5.0 and above for five stars; the bands tighten every few years so a yesterday's five-star becomes today's three-star.",
              "The inverter compressor is what makes high ISEER possible. Instead of cycling full-on and full-off - which wastes energy in start transients and swings the room temperature - an inverter drive varies compressor speed continuously between roughly 25% and 120% of rated, matching output to the load with electronic expansion valves. Seasonal energy savings of 20-40% against fixed-speed units are typical, with quieter running and tighter temperature control as bonuses. Variable refrigerant flow extends the idea to whole buildings: one outdoor unit or bank serves 2 to 60+ indoor units on common refrigerant piping, each zone metered by its own electronic expansion valve, the outdoor compressor modulating to follow the total demand.",
              "Heat-recovery VRF is the elegant endpoint: a three-pipe arrangement with branch controllers lets the system move heat between zones, cooling a sunlit server room while simultaneously heating a shaded meeting room, with recovered heat replacing much of the purchased energy. Two-pipe VRF switches all zones between heating and cooling; three-pipe runs both at once. Case studies: an office tower replacing electric reheat with heat-recovery VRF cut winter energy sharply; a hotel zoning guest rooms individually at a fraction of central plant cost. The exam answer pairs the technology with the metric: ISEER for rooms, VRF with heat recovery and occupancy controls for buildings, all above the energy hierarchy of eliminate, reduce and recover.",
            ],
            bullets: [
              "EER is the spot ratio of cooling watts to input watts at rated conditions; ISEER weights the whole season and rewards part-load efficiency.",
              "BEE star bands for split ACs run from about 3.3 ISEER (1 star) to 5.0+ (5 star) in the current table - and tighten over time.",
              "Inverter compressors vary speed 25-120% instead of cycling, saving 20-40% seasonally with tighter temperature control.",
              "VRF serves many indoor units from one outdoor bank, each zone metered by an electronic expansion valve.",
              "Heat-recovery VRF moves heat between zones simultaneously heating and cooling - recovered heat replaces purchased energy.",
            ],
            diagram: {
              kind: "pyramid",
              title: "The building energy hierarchy",
              caption: "Climb from the base: never buy what you can avoid, reduce or recover.",
              tiers: [
                { label: "Eliminate", note: "shading, insulation, tight envelope, honest setpoints" },
                { label: "Reduce", note: "5-star plant, inverter drives, VRF zoning, EC fans, economisers" },
                { label: "Recover", note: "heat-recovery VRF, desuperheaters, exhaust-air heat exchangers" },
              ],
            },
            table: {
              caption: "Indicative BEE split-AC star bands (ISEER).",
              headers: ["Star rating", "ISEER band"],
              rows: [
                ["1 star", "3.30 and above"],
                ["2 star", "3.50 and above"],
                ["3 star", "3.80 and above"],
                ["4 star", "4.40 and above"],
                ["5 star", "5.00 and above"],
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Define EER and ISEER with their ratio formulas before discussing stars - the definitions are the marks. Then name the two VRF variants (two-pipe heat pump, three-pipe heat recovery) and one benefit each. Quote band numbers as indicative since they are revised periodically.",
            },
            keyTerms: [
              { term: "ISEER", definition: "Indian seasonal energy efficiency ratio: annual cooling delivered divided by annual energy consumed at varying loads." },
              { term: "VRF", definition: "Variable refrigerant flow: a system of one outdoor unit serving many indoor units, each metered by an electronic expansion valve." },
              { term: "Inverter compressor", definition: "A compressor driven by a variable-frequency drive, modulating speed continuously instead of cycling on and off." },
            ],
            examQuestions: [
              {
                q: "Differentiate EER and ISEER, explain the BEE star labelling scheme, and describe VRF with heat recovery and its advantages over constant-volume systems.",
                marks: 7,
                outline: [
                  "Define EER = cooling capacity (W) / power input (W) at rated conditions.",
                  "Define ISEER = seasonal cooling (kWh) / seasonal energy (kWh); note part-load weighting.",
                  "Explain star bands, roughly 3.3 to 5.0+ ISEER for splits, tightening over time.",
                  "Explain inverter technology: 25-120% modulation, 20-40% seasonal savings.",
                  "Describe VRF: one outdoor bank, many indoor units, EEV per zone.",
                  "Two-pipe heat pump vs three-pipe heat recovery; simultaneous heating and cooling.",
                  "Advantages: zoning, part-load efficiency, no reheat, individual metering.",
                ],
              },
              {
                q: "Define EER and state its units.",
                marks: 2,
              },
              {
                q: "How does an inverter air conditioner save energy compared with a fixed-speed unit?",
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
        "RGPV ME-801 papers concentrate marks on the vapour compression cycle with numericals, psychrometry with chart work, and the absorption systems, with cooling load estimation and Carnot-based theory anchoring the rest. Allocate revision in roughly this ratio, and keep one full practice slot per unit regardless of weight.",
      ],
      weightedTopics: [
        { topic: "Vapour compression cycle on P-h: RE, work, COP numericals", weight: "10-12 marks", note: "Almost guaranteed; practise 6-8 full solves with enthalpy reads." },
        { topic: "Psychrometry: properties, chart, all processes", weight: "10-12 marks", note: "Definitions plus one process sketch; memorise the W and h formulas." },
        { topic: "Absorption systems: NH3-H2O and LiBr-H2O", weight: "8-10 marks", note: "Sketches with analyser/rectifier and purge unit are the differentiators." },
        { topic: "Cooling load by CLTD method", weight: "8-10 marks", note: "Tabulated component-by-component calculation earns every step mark." },
        { topic: "Reversed Carnot, COP, ton of refrigeration", weight: "6-8 marks", note: "Definitions and derivations; watch the kelvin conversion." },
        { topic: "Applications: cold storage, transport, data centres", weight: "6-8 marks", note: "Load lists plus one worked example each." },
        { topic: "Subcooling and superheating", weight: "4-6 marks", note: "P-h sketch plus the useful-vs-useless superheat distinction." },
        { topic: "Multi-stage and cascade systems", weight: "4-6 marks", note: "Why split the lift; sketch both arrangements." },
        { topic: "Bell-Coleman air cycle", weight: "4-6 marks", note: "COP formula with the pressure-ratio exponent." },
        { topic: "Ducts, fans, BEE stars and VRF", weight: "6-8 marks", note: "Fan laws cube-power saving and ISEER definitions are short-question bankers." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Assuming five days a week with two hours a day, this schedule covers every unit twice - once for understanding, once for revision - and reserves the final week for full papers under exam timing.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - fundamentals", tasks: ["TR derivation, COP, reversed Carnot numericals", "Refrigerant numbering drills both directions", "ODP/GWP table and the Montreal-Kigali timeline"] },
        { week: "Week 2", focus: "Unit II - VCRS core", tasks: ["P-h cycle with 6 numericals (RE, W, COP, mass flow)", "Subcooling and superheating effects on chart", "Multi-stage and cascade sketches with advantages"] },
        { week: "Week 3", focus: "Unit II - absorption", tasks: ["NH3-H2O full sketch with analyser and rectifier", "LiBr-H2O single and double effect", "VCRS vs VAR comparison table from memory"] },
        { week: "Week 4", focus: "Unit III - gas and unconventional", tasks: ["Bell-Coleman derivation and 4 COP numericals", "Steam jet, thermoelectric and vortex tube sketches", "Linde vs Claude with inversion temperatures"] },
        { week: "Week 5", focus: "Unit IV - air conditioning", tasks: ["Psychrometric formulas and 5 chart problems", "Comfort and effective temperature definitions", "CLTD worked example; duct sizing and fan laws"] },
        { week: "Week 6", focus: "Unit V + full revision", tasks: ["Cold storage, ice plant, transport loads", "Data centre PUE numerical; controls and safety list", "Two full past papers under time"] },
      ],
    },
    {
      id: "last-day",
      heading: "Last-day strategy",
      body: [
        "The final 24 hours are for consolidation, not conquest. Reread nothing new; drill the artefacts that carry marks and the numbers that cannot be re-derived.",
      ],
      bullets: [
        "Redraw the P-h cycle, the absorption loop and the psychrometric chart axes from blank paper - three sketches, ten minutes each.",
        "Recite the formula set: COP_Carnot, W and h formulas, Q = U A CLTD, fan laws, and the TR conversion 3.517 kW.",
        "Re-solve yesterday's numericals cold: one VCRS, one psychrometric, one CLTD block load.",
        "Refresh the two tables: ODP/GWP values and BEE ISEER star bands.",
        "Rehearse the 7-mark skeletons: 6-8 outline points per question, written as headings you could expand.",
        "Sleep. A rested memory of 80% of the syllabus beats a frazzled memory of 100%.",
      ],
    },
    {
      id: "exam-hall",
      heading: "Exam-hall strategy",
      examTips: [
        "Sketch before you write: P-h chart, absorption circuit, psychrometric process or duct layout first - diagrams are marked separately from prose.",
        "State the formula in symbols, substitute, then compute - method marks survive arithmetic slips, but only if the formula line is visible.",
        "Convert temperatures to kelvin the moment you read a Carnot or gas-cycle question; the Celsius slip is the single most common lost mark.",
        "In numericals, carry units through every line and sanity-check the answer (a COP of 40 is a wrong answer, not a good one).",
        "When time runs short, write outline answers as numbered points - a skeleton with correct headings earns more than one perfect paragraph.",
      ],
    },
    {
      id: "slips",
      heading: "Common slips that cost marks",
      body: [
        "These six errors recur in every ME-801 paper. Each is a habit, and each is fixable the week before the exam.",
      ],
      bullets: [
        "Plugging Celsius into T_L/(T_H - T_L): convert to kelvin first, always.",
        "Writing 'superheating increases COP' without qualifying useful versus useless superheat, and ignoring ammonia's discharge-temperature problem.",
        "Placing the vapour barrier on the cold side of cold storage insulation - it belongs on the warm side.",
        "Forgetting the 5-10% margin and the conversion to TR at the end of a cooling load calculation.",
        "Quoting GWP values as exact instead of approximate, or confusing ODP with GWP in the refrigerant table.",
        "Drawing the absorption solution loop without arrowheads, so strong and weak solution directions cannot be marked.",
      ],
    },
  ],
};
