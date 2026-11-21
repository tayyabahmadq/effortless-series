/**
 * Academics - RGPV first-year common subject: BT-101 Engineering Chemistry.
 *
 * Structure mirrors subject-cs-302.ts: units -> one chapter per unit ->
 * numbered sections. Each section carries body paragraphs, bullets, a
 * diagram, key terms, a callout, a table or Python code sample, and three
 * exam-style questions (one 7-mark with outline + two shorts).
 *
 * Content is fully ASCII: degree symbols written "deg", superscripts
 * written with caret (x^2, CaCO3), arrows written "->", no unicode math.
 */

import type { AcademicSubject } from "./types";

export const bt101: AcademicSubject = {
  id: "bt-101",
  code: "BT-101",
  title: "Engineering Chemistry",
  semester: "I Semester",
  program: "RGPV · First Year Common (all B.Tech branches)",
  tagline:
    "The complete visual guide to BT-101: water and its treatment, fuels and combustion, lubricants and cement, polymers and polymerization, instrumental methods of analysis - every syllabus point paired with a worked example you can redraw in the exam hall.",
  description:
    "Five units walk from the chemistry of water used in boilers and city mains, through the calorific value of fuels and the stoichiometry of combustion, into the properties of lubricants and the manufacture of cement, then across the giant molecules of polymers from PVC to nylon, and finally into the instrumental toolkit - Beer-Lambert, IR, NMR, mass spec and chromatography - that an engineer uses to assay water, fuel and polymer alike. Every section pairs the principle with a worked numerical, a redrawable diagram and the questions RGPV actually asks.",
  accentColor: "#f59e0b",
  emoji: "CH",
  unitCount: 5,
  totalSections: 30,
  units: [
    // =========================================================================
    // UNIT I - WATER AND ITS INDUSTRIAL APPLICATIONS
    // =========================================================================
    {
      number: 1,
      roman: "I",
      title: "Water and Its Industrial Applications",
      summary:
        "The chemistry of natural and process water: sources and impurities, hardness as mg/L CaCO3 with numericals, the boiler troubles scale and sludge cause, the softening routes lime-soda, zeolite and ion exchange, municipal treatment from screening to disinfection, and reverse osmosis for desalination.",
      chapter: {
        number: "01",
        title: "Water and Its Industrial Applications",
        intro:
          "Unit I begins with where water comes from and what it carries, then defines hardness in mg/L as CaCO3 and works through EDTA numericals. It moves into the four boiler troubles - scale, sludge, priming, foaming, caustic embrittlement - and the three softening methods (lime-soda, zeolite, ion exchange) that prevent them. It closes with the municipal treatment train from screening to chlorination and a brief look at reverse osmosis for desalination.",
        inOneBreath:
          "Surface water is turbid, groundwater is hard, rainwater is soft but acidic; impurities split into dissolved minerals, dissolved gases, suspended solids, colloids and microbes; hardness is Ca2+ and Mg2+ expressed as mg/L CaCO3 and splits into temporary (bicarbonate, removed by boiling) and permanent (chloride, sulphate); the EDTA formula Hardness = (V_edta x M_edta x 100 x 1000) / V_sample converts titration to mg/L; boiler troubles are scale (CaSO4, CaCO3), sludge (loose), priming (wet steam), foaming (bubbles) and caustic embrittlement (NaOH cracking at rivets); softening is done by lime-soda (cheap, batch), zeolite (Na2Z exchanges Ca2+ for 2Na+) or ion exchange (RH + R'OH gives demineralised water); municipal treatment is screening, aeration, coagulation with alum, filtration, chlorination; reverse osmosis forces water through a membrane at 25 to 80 atm leaving 95 percent of salts behind.",
        sections: [
          {
            number: "1.1",
            title: "Sources of water and the impurities it carries",
            body: [
              "Water reaches industry and homes from three broad sources. Surface sources - rivers, lakes, reservoirs and streams - carry large volumes but pick up dissolved minerals, suspended silt, organic matter and micro-organisms as they flow across drainage basins. Groundwater, drawn from wells, springs and borewells, is usually clear and free of suspended solids because the overlying soil filters it, yet it dissolves calcium, magnesium, iron and sulphate from the rocks it touches and tends to be harder. Rainwater, harvested from rooftops or caught in catchments, is the softest natural water but dissolves atmospheric carbon dioxide, sulphur dioxide and oxides of nitrogen, becoming mildly acidic.",
              "The impurities in water fall into four broad classes. Dissolved minerals include bicarbonates, chlorides and sulphates of calcium, magnesium, sodium and potassium - the chief carriers of hardness. Dissolved gases such as oxygen, carbon dioxide and hydrogen sulphide corrode boiler steel and pipes. Suspended impurities - clay, silt, organic debris and microbes - cause turbidity and may carry pathogens; coarse particles settle in slow streams, fine ones stay colloidal. Colloidal impurities are sub-micron particles of silica, iron oxide or humic acid that resist ordinary filtration because of their tiny size and surface charge.",
              "These impurities are quantified by a handful of standard tests. Total dissolved solids (TDS) is the residue left after evaporating a filtered sample at 105 deg C; drinking water should stay below 500 mg/L. Turbidity, measured in NTU, gauges the scattering of light by suspended particles; the WHO limit is 5 NTU. Alkalinity and pH tell how acid or basic the water is - most natural waters sit between pH 6.5 and 8.5. Hardness, expressed in mg/L as CaCO3, measures the soap-consuming power of calcium and magnesium ions and decides whether the water will scale a boiler or foam in a cooling tower.",
              "Industry treats water to match the end use. Boiler feed water must be soft, low in dissolved oxygen and silica, and mildly alkaline (pH 9 to 11) to prevent corrosion of steel drums; hardness below 0.5 mg/L is the target for high-pressure boilers. Cooling water needs only moderate treatment - biocide, scale inhibitor and anti-corrosion - because it cycles many times before blow-down. Process water for textiles, paper or food has tighter limits on iron, manganese and residual chlorine so it does not stain or flavour the product. Drinking water must clear the IS 10500 standards for coliform count, fluoride, nitrate and heavy metals.",
            ],
            bullets: [
              "Surface sources (rivers, lakes): turbid, low in dissolved salts, easy to treat by clarification.",
              "Groundwater (wells, springs): clear but hard; carries Ca2+, Mg2+, Fe2+, SO4 2- from rocks.",
              "Rainwater: softest natural water; absorbs CO2, SO2, NOx and becomes mildly acidic (pH ~5.6).",
              "Dissolved impurities: bicarbonates, chlorides, sulphates, nitrates of Ca, Mg, Na, K.",
              "Suspended impurities: clay, silt, organic debris; measured as turbidity in NTU.",
              "Colloidal impurities: silica, humic acid; carry charge, resist simple filtration.",
              "Microbiological: bacteria, viruses, protozoa; demand disinfection before drinking.",
              "TDS limit 500 mg/L, turbidity 5 NTU, pH 6.5 to 8.5 for drinking water (IS 10500).",
            ],
            table: {
              caption: "Source-to-impurity map for natural waters.",
              headers: ["Source", "Dominant impurity", "Typical hardness (mg/L CaCO3)", "First treatment step"],
              rows: [
                ["Rainwater", "Dissolved gases (CO2, SO2)", "0 to 10", "Neutralisation, filtration"],
                ["Surface (river)", "Suspended silt, microbes", "60 to 150", "Coagulation, filtration"],
                ["Groundwater (well)", "Ca2+, Mg2+, Fe2+, SO4 2-", "200 to 400", "Softening, aeration"],
                ["Sea / brackish", "NaCl, TDS > 1000", ">1000", "Reverse osmosis"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "From raw water source to fit-for-purpose stream",
              caption:
                "Each arrow is one class of treatment - the same train reappears in section 1.6 for a city supply.",
              steps: [
                { label: "Source (surface / ground / rain)", note: "raw water" },
                { label: "Screen + aerate", note: "remove debris, strip gases" },
                { label: "Coagulate + filter", note: "drop suspended and colloidal load" },
                { label: "Soften / demineralise", note: "remove Ca2+, Mg2+ as needed" },
                { label: "Disinfect", note: "kill microbes; deliver to user" },
              ],
            },
            callout: {
              type: "tip",
              title: "Match treatment to the user",
              body: "Drinking water needs disinfection; boiler feed needs demineralisation; cooling water needs only anti-scale and biocide. Examiners award a mark for naming the right stream with the right treatment - do not prescribe RO for a simple cooling tower.",
            },
            keyTerms: [
              { term: "TDS", definition: "Total dissolved solids - residue left when a filtered water sample is evaporated at 105 deg C, in mg/L." },
              { term: "Turbidity", definition: "The scattering of light by suspended and colloidal particles, measured in NTU." },
              { term: "Hardness", definition: "The soap-consuming power of water due to Ca2+ and Mg2+ ions, expressed as mg/L CaCO3." },
              { term: "Colloidal impurity", definition: "Sub-micron charged particles (silica, humic acid) that stay suspended and resist ordinary filtration." },
            ],
            examQuestions: [
              {
                q: "Discuss the sources of water and the various types of impurities present in natural water. Explain how each class of impurity influences the choice of treatment for a 10 tonne/hour boiler feed.",
                marks: 7,
                outline: [
                  "List three sources: surface, ground, rain - note typical hardness of each.",
                  "Dissolved minerals (Ca, Mg bicarbonates, chlorides, sulphates) cause hardness and scale.",
                  "Dissolved gases (O2, CO2, H2S) corrode boiler steel; CO2 also lowers pH.",
                  "Suspended solids cause turbidity and deposit as sludge in low-flow zones.",
                  "Colloids (silica, humic acid) resist filtration; need coagulation with alum.",
                  "Microbes demand chlorination before any potable or process use.",
                  "Boiler feed therefore needs softening + deaeration + pH control; mention 0.5 mg/L hardness target.",
                ],
              },
              {
                q: "Distinguish between suspended, colloidal and dissolved impurities with one example each.",
                marks: 2,
              },
              {
                q: "Why is rainwater called acidic even when collected far from industry?",
                marks: 3,
              },
            ],
          },
          {
            number: "1.2",
            title: "Hardness of water: types, causes and units",
            body: [
              "Hardness is the property of water that prevents lather with soap and leaves scale in boilers and pipes. Chemically it is the total concentration of calcium and magnesium ions expressed as mg/L of calcium carbonate, CaCO3. Other polyvalent cations - Fe2+, Mn2+, Al3+ - contribute but are usually minor. Soaps such as sodium stearate precipitate as calcium stearate or magnesium stearate in hard water, consuming soap before any lather forms, and the resulting scum clings to fabric and skin.",
              "Hardness splits into two types by cause. Temporary or carbonate hardness (CH) comes from the bicarbonates of calcium and magnesium - Ca(HCO3)2 and Mg(HCO3)2 - and is removed by boiling, which drives off CO2 and precipitates CaCO3 or Mg(OH)2. Permanent or non-carbonate hardness (NCH) comes from the chlorides, sulphates and nitrates of calcium and magnesium - CaSO4, MgCl2, CaCl2, MgSO4 - which are not decomposed by boiling and need chemical softening. Total hardness TH = CH + NCH.",
              "Four units of hardness appear in textbooks and exam questions. The most common is mg/L as CaCO3, numerically equal to ppm by mass. The English degree Clarke (1 deg Clarke = 14.3 ppm CaCO3) is one grain of CaCO3 per imperial gallon. The French degree (1 deg French = 10 ppm CaCO3) is one part CaCO3 per 100,000 parts water. The German degree (1 deg German = 17.9 ppm CaCO3) is one part CaO per 100,000 parts water. Conversion between them is a 2-mark favourite.",
              "A worked conversion makes the units concrete. A sample with 250 mg/L CaCO3 is therefore 250 ppm, 17.5 deg French (divide by 10), 17.5 deg Clarke (divide by 14.3, equals 17.5 only as coincidence of the chosen number; recompute: 250/14.3 = 17.5 deg Clarke), and 14.0 deg German (250/17.9 = 14.0). The pattern to remember is: multiply or divide by the reciprocal of the unit's ppm value. Water below 60 mg/L CaCO3 is soft, 60 to 120 moderately hard, 120 to 180 hard, and above 180 very hard.",
            ],
            bullets: [
              "Hardness = Ca2+ + Mg2+ (plus minor Fe2+, Mn2+), reported as mg/L CaCO3.",
              "Temporary (carbonate) hardness: Ca(HCO3)2 and Mg(HCO3)2 - removed by boiling.",
              "Permanent (non-carbonate) hardness: CaSO4, MgCl2, CaCl2, MgSO4 - needs softening.",
              "Total hardness TH = CH + NCH; both expressed as mg/L CaCO3.",
              "1 mg/L as CaCO3 = 1 ppm = 0.07 deg Clarke = 0.1 deg French = 0.056 deg German.",
              "Conversion factors: deg Clarke = ppm / 14.3; deg French = ppm / 10; deg German = ppm / 17.9.",
              "Classification: <60 soft, 60-120 moderate, 120-180 hard, >180 mg/L very hard.",
              "Latent test: soap forms scum (Ca/Mg stearate) instead of lather in hard water.",
            ],
            table: {
              caption: "Units of hardness and their conversion to mg/L CaCO3.",
              headers: ["Unit", "Definition", "1 unit in mg/L CaCO3"],
              rows: [
                ["mg/L (ppm)", "mg CaCO3 per litre of water", "1"],
                ["deg Clarke (English)", "1 grain CaCO3 per imperial gallon", "14.3"],
                ["deg French", "1 part CaCO3 per 100,000 parts water", "10"],
                ["deg German", "1 part CaO per 100,000 parts water", "17.9"],
                ["meq/L", "milli-equivalents per litre", "50"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Building total hardness from its components",
              caption:
                "Top layer is total hardness; lower layers decompose it into carbonate and non-carbonate parts.",
              layers: [
                { label: "Total hardness TH = CH + NCH (mg/L as CaCO3)", note: "what the EDTA titration gives" },
                { label: "Carbonate hardness CH", note: "from Ca(HCO3)2, Mg(HCO3)2; removed by boiling" },
                { label: "Non-carbonate hardness NCH", note: "from CaSO4, MgCl2, CaCl2, MgSO4" },
                { label: "Ca2+ contribution", note: "usually dominant over Mg2+" },
                { label: "Mg2+ contribution", note: "minor but causes more scaling per mg" },
              ],
            },
            callout: {
              type: "exam",
              title: "Quote the conversion factors verbatim",
              body: "RGPV examiners love a 2-mark conversion: '1 mg/L = 1 ppm = 1/14.3 deg Clarke = 1/10 deg French = 1/17.9 deg German'. Write the four equalities in one line at the top of any numerical answer that asks for a unit conversion.",
            },
            keyTerms: [
              { term: "Temporary hardness", definition: "Hardness due to Ca and Mg bicarbonates; removable by boiling as it decomposes to CaCO3 or Mg(OH)2." },
              { term: "Permanent hardness", definition: "Hardness due to Ca and Mg chlorides, sulphates and nitrates; not removed by boiling, needs softening." },
              { term: "mg/L as CaCO3", definition: "The standard unit: mg of CaCO3 equivalent per litre of water, numerically equal to ppm." },
              { term: "Deg Clarke", definition: "English hardness unit, 1 grain CaCO3 per imperial gallon, equals 14.3 ppm CaCO3." },
            ],
            examQuestions: [
              {
                q: "Define hardness of water. Distinguish between temporary and permanent hardness with reactions. Convert 320 mg/L CaCO3 into deg Clarke, deg French and deg German.",
                marks: 7,
                outline: [
                  "Define hardness as Ca2+ + Mg2+ expressed as mg/L CaCO3.",
                  "Temporary (carbonate) hardness from Ca(HCO3)2, Mg(HCO3)2; reaction Ca(HCO3)2 -> CaCO3 + CO2 + H2O on boiling.",
                  "Permanent (non-carbonate) from CaSO4, MgCl2, CaCl2, MgSO4; not decomposed by boiling.",
                  "Total hardness TH = CH + NCH.",
                  "Quote conversions: 1 ppm = 1/14.3 deg Clarke = 1/10 deg French = 1/17.9 deg German.",
                  "Compute: 320 ppm = 22.4 deg Clarke = 32 deg French = 17.9 deg German.",
                  "Classify the sample (>180 ppm = very hard).",
                ],
              },
              {
                q: "Why does soap not lather freely in hard water?",
                marks: 2,
              },
              {
                q: "Name the cation that contributes most to hardness in most natural waters.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.3",
            title: "Numerical problems on hardness (EDTA method)",
            body: [
              "The standard laboratory method for total hardness is the EDTA titration. EDTA (ethylenediaminetetraacetic acid, disodium salt) forms stable 1:1 complexes with Ca2+ and Mg2+. A measured volume of water sample is buffered to pH 10 with ammonia-ammonium chloride, Eriochrome Black T indicator is added (wine-red in the presence of Ca/Mg), and EDTA is run in from a burette until the colour turns blue at the endpoint. The moles of EDTA used equal the moles of Ca2+ plus Mg2+ in the sample.",
              "The working formula is straightforward. Hardness in mg/L as CaCO3 equals (V_edta in mL x M_edta x 100 x 1000) divided by V_sample in mL, where 100 is the molar mass of CaCO3 in grams and 1000 converts grams to milligrams. The factor 100 works because EDTA binds Ca2+ and Mg2+ in 1:1 molar ratio, and one mole of either ion is reported as one mole of CaCO3.",
              "A worked example: a 50 mL water sample requires 8.0 mL of 0.01 M EDTA to reach the blue endpoint. Hardness = (8.0 x 0.01 x 100 x 1000) / 50 = 8000 / 50 = 160 mg/L as CaCO3 - a moderately hard sample. If the same titration gives 25 mL EDTA, the hardness jumps to 500 mg/L and the water is rated very hard, requiring lime-soda or ion-exchange softening before boiler use.",
              "EDTA also splits carbonate from non-carbonate hardness in a two-stage titration. First the sample is titrated directly with EDTA for total hardness. A second aliquot is boiled with a known excess of Na2CO3 to precipitate carbonate hardness as CaCO3 and Mg(OH)2, filtered, and the unused Na2CO3 in the filtrate is back-titrated - the difference gives carbonate hardness. Permanent hardness is then TH minus CH. The same arithmetic, written in Python below, takes titration readings and reports both TH and NCH.",
            ],
            bullets: [
              "EDTA binds Ca2+ and Mg2+ 1:1 at pH 10 (ammonia buffer); Eriochrome Black T is the indicator.",
              "Endpoint colour change: wine red (Ca/Mg-EBT) to blue (free EBT).",
              "Formula: Hardness (mg/L CaCO3) = (V_edta x M_edta x 100 x 1000) / V_sample.",
              "The factor 100 is the molar mass of CaCO3 used as the reporting equivalent.",
              "Worked: 50 mL sample, 8 mL of 0.01 M EDTA -> 160 mg/L CaCO3.",
              "Boil + Na2CO3 aliquot: precipitates carbonate hardness; back-titrate to find CH.",
              "NCH = TH - CH; if TH 160 and CH 95 mg/L, then NCH = 65 mg/L.",
              "Hardness < 0.5 mg/L is the high-pressure boiler feed target.",
            ],
            codeExample: {
              language: "python",
              caption: "Compute total hardness (and split CH/NCH) from EDTA titration readings.",
              code: [
                "# Inputs from the bench: burette readings and sample volume",
                "V_edta_mL = 8.0       # volume of EDTA used, mL",
                "M_edta    = 0.01      # molarity of EDTA, mol/L",
                "V_sample  = 50.0      # water sample volume, mL",
                "",
                "# Total hardness as mg/L CaCO3",
                "TH = (V_edta_mL * M_edta * 100 * 1000) / V_sample",
                "print(f'Total hardness = {TH:.1f} mg/L as CaCO3')",
                "",
                "# Carbonate hardness from a boiled-Na2CO3 back-titration",
                "V_na2co3_mL, M_na2co3 = 25.0, 0.02",
                "V_back_mL            = 14.0   # EDTA used to back-titrate excess",
                "CH = ((V_na2co3_mL * M_na2co3 - V_back_mL * M_edta) * 100 * 1000) / V_sample",
                "NCH = TH - CH",
                "print(f'CH = {CH:.1f}, NCH = {NCH:.1f} mg/L as CaCO3')",
              ].join("\n"),
            },
            diagram: {
              kind: "fork",
              title: "Classifying a water sample by EDTA result",
              caption:
                "Take the titration number to the threshold, then pick the softening route.",
              start: "EDTA titration gives TH in mg/L as CaCO3",
              branches: [
                { label: "TH below 60", outcome: "soft - potable as is, no softening", good: true },
                { label: "TH 60 to 180", outcome: "moderate - lime-soda softening suffices for cooling", good: true },
                { label: "TH above 180", outcome: "very hard - ion exchange before boiler feed", good: false },
                { label: "NCH high, CH low", outcome: "zeolite or ion-exchange; boiling alone useless", good: false },
              ],
            },
            callout: {
              type: "warning",
              title: "Buffer and indicator are not optional",
              body: "At pH below 10 the Ca-EDTA complex is unstable; above pH 11, Mg(OH)2 precipitates before it can complex. Always write 'pH 10 ammonia buffer, EBT indicator' in the procedure - a missing phrase routinely costs a mark.",
            },
            keyTerms: [
              { term: "EDTA", definition: "Ethylene diamine tetra acetic acid (disodium salt); a hexadentate ligand that complexes Ca2+ and Mg2+ in 1:1 molar ratio." },
              { term: "Eriochrome Black T", definition: "The metal-ion indicator that turns from wine red to blue when all Ca2+/Mg2+ has been complexed by EDTA at pH 10." },
              { term: "Total hardness TH", definition: "Sum of Ca2+ and Mg2+ concentrations in water, expressed as mg/L CaCO3, found by direct EDTA titration." },
              { term: "Carbonate hardness CH", definition: "Hardness equivalent to the bicarbonate content of the sample; removable by boiling or by Na2CO3 precipitation." },
            ],
            examQuestions: [
              {
                q: "Describe the EDTA method for determining total hardness of water. A 50 mL water sample required 12.5 mL of 0.01 M EDTA for the endpoint. Calculate the hardness in mg/L as CaCO3 and classify the sample.",
                marks: 7,
                outline: [
                  "Principle: EDTA forms 1:1 complex with Ca2+ and Mg2+ at pH 10.",
                  "Reagents: standard EDTA, ammonia-ammonium chloride buffer (pH 10), EBT indicator.",
                  "Procedure: take sample, add buffer + indicator (wine red), titrate with EDTA to blue.",
                  "Formula: Hardness = (V_edta x M_edta x 100 x 1000) / V_sample.",
                  "Substitute: (12.5 x 0.01 x 100 x 1000) / 50 = 250 mg/L as CaCO3.",
                  "Classify: >180 mg/L is very hard; needs softening before use.",
                  "Mention that EBT is the indicator and the colour change is wine red to blue.",
                ],
              },
              {
                q: "Why is the ammonia buffer necessary in the EDTA titration for hardness?",
                marks: 2,
              },
              {
                q: "Write the chemical formula of EDTA and state its denticity.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.4",
            title: "Boiler troubles: scale, sludge, priming, foaming, caustic embrittlement",
            body: [
              "When hard water feeds a boiler, the heat and concentration inside the drum convert the dissolved salts into solid deposits. Scale is a hard, adherent layer of CaSO4, CaCO3 or Mg(OH)2 that sticks to the heating surfaces. Sludge is a soft, loose, non-adherent precipitate of MgCO3, Mg(OH)2 or CaCl2 that settles at the bottom and is removed by blow-down. The two are distinguished by adherence: scale clings, sludge drifts.",
              "Scale has serious consequences. A 1 mm layer of CaSO4 scale can drop boiler efficiency by 8 to 12 percent because calcium sulphate conducts heat roughly 20 times worse than steel; a 3 mm layer can waste 25 percent of fuel. Worse, the metal under the scale overheats because heat cannot escape, and at 600 deg C the steel tubes bulge and rupture, causing catastrophic boiler failure. Scale forms by three routes: thermal decomposition of bicarbonates (Ca(HCO3)2 -> CaCO3 + CO2 + H2O), hydrolysis of MgCl2 to Mg(OH)2, and deposition of CaSO4 when its solubility of 1200 mg/L is exceeded at the hot surface.",
              "Priming and foaming are wet-steam troubles. Priming is the violent ejection of water droplets into the steam pipe, often triggered by a too-high water level, sudden load swings, or high dissolved-solids concentration; it carries salts into the superheater and turbine. Foaming is the formation of a persistent bubble layer on the water surface, caused by dissolved organic matter, oils, soaps or fine suspended solids that lower surface tension. Both are controlled by keeping the water level moderate, maintaining total dissolved solids below 2000 mg/L by blow-down, and adding antifoaming agents such as castor oil or polyamides.",
              "Caustic embrittlement is the most dangerous failure of all: intergranular cracks that form in riveted or welded boiler steel where the water concentrates caustic soda (NaOH) above 100 mg/L. The mechanism is electrochemical - concentrated NaOH dissolves the iron at the grain boundaries as sodium ferrate, leaving hairline cracks that propagate without warning. The Lilly and Nelson remedy is to maintain the mass ratio Na2SO4 : NaOH at or above 1:1 (older plants used 2:1 for low-pressure boilers, 3:1 for high pressure) so the sulphate ions block the crack tip, and to keep the boiler water mildly alkaline (pH 9.5 to 10.5) rather than strongly caustic.",
            ],
            bullets: [
              "Scale: hard, adherent CaSO4 / CaCO3 / Mg(OH)2 on heating surfaces; reduces heat transfer.",
              "Sludge: soft, loose, non-adherent MgCO3 / CaCl2; removed by blow-down.",
              "1 mm CaSO4 scale drops boiler efficiency by ~10 percent; 3 mm can rupture tubes.",
              "Scale forms by bicarbonate decomposition, MgCl2 hydrolysis, or CaSO4 deposition above 1200 mg/L.",
              "Priming: water droplets in steam from high level or load swings; carries salts to turbine.",
              "Foaming: persistent bubbles from dissolved organics, oils; controlled by antifoam and blow-down.",
              "Caustic embrittlement: NaOH > 100 mg/L cracks riveted steel at grain boundaries.",
              "Prevention: keep Na2SO4 : NaOH ratio at least 1:1 by mass; pH 9.5 to 10.5.",
            ],
            table: {
              caption: "Boiler troubles and their control.",
              headers: ["Trouble", "Cause", "Consequence", "Prevention"],
              rows: [
                ["Scale", "CaSO4, CaCO3, Mg(OH)2 deposition", "Fuel loss 8-25%, tube rupture", "Soft feed water, blow-down"],
                ["Sludge", "MgCO3, CaCl2 precipitate loose", "Blocks pipes, dirties steam", "Periodic blow-down"],
                ["Priming", "High water level, sudden load", "Wet steam, salt carry-over", "Steady level, moderate TDS"],
                ["Foaming", "Organic matter, oils, soaps", "Wet steam, water hammer", "Antifoam (castor oil, polyamide)"],
                ["Caustic embrittlement", "NaOH > 100 mg/L at rivets", "Intergranular cracks", "Na2SO4:NaOH >= 1:1, pH 9.5-10.5"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "From dissolved salt to boiler failure to control",
              caption:
                "Each stage maps to one control measure - cite the prevention in any 7-mark answer.",
              stages: [
                { label: "Hard feed water enters boiler", note: "Ca2+, Mg2+, HCO3-, SO4 2-" },
                { label: "Heat concentrates salts", note: "decompose bicarbonates, hydrolyse MgCl2" },
                { label: "Scale / sludge / caustic form", note: "adherent solids or concentrated NaOH" },
                { label: "Loss of efficiency, cracking", note: "fuel waste, embrittlement cracks" },
                { label: "Control: soft feed + blow-down + Na2SO4", note: "prevent at source and at drum" },
              ],
            },
            callout: {
              type: "warning",
              title: "The Na2SO4 : NaOH ratio is exam gold",
              body: "For caustic embrittlement questions, always write 'maintain the mass ratio Na2SO4 : NaOH at 1:1 for low pressure and 3:1 for high pressure'. Examiners look for that exact ratio and award a full mark for stating it.",
            },
            keyTerms: [
              { term: "Scale", definition: "A hard, adherent deposit of CaSO4, CaCO3 or Mg(OH)2 on boiler heating surfaces that reduces heat transfer." },
              { term: "Sludge", definition: "A soft, loose, non-adherent precipitate (MgCO3, CaCl2) that settles at the boiler bottom and is removed by blow-down." },
              { term: "Priming", definition: "The violent ejection of water droplets with steam, caused by high water level or sudden load changes." },
              { term: "Caustic embrittlement", definition: "Intergranular cracking of riveted boiler steel where concentrated NaOH dissolves iron at grain boundaries." },
            ],
            examQuestions: [
              {
                q: "What are boiler troubles? Discuss the causes, consequences and prevention of scale, sludge, priming, foaming and caustic embrittlement in a high-pressure boiler.",
                marks: 7,
                outline: [
                  "Define boiler troubles as deposits or steam-quality issues from dissolved salts.",
                  "Scale: CaSO4, CaCO3, Mg(OH)2 adherent - 8-25% fuel loss, tube rupture; prevent by soft feed.",
                  "Sludge: loose MgCO3, CaCl2 - removed by blow-down.",
                  "Priming: wet steam from high water level; prevent by steady level and moderate TDS.",
                  "Foaming: bubbles from organics; prevent with antifoam and blow-down.",
                  "Caustic embrittlement: NaOH > 100 mg/L cracks riveted steel at grain boundaries.",
                  "Prevention: maintain Na2SO4 : NaOH >= 1:1 (LP) or 3:1 (HP), pH 9.5 to 10.5.",
                ],
              },
              {
                q: "Distinguish between scale and sludge with one example each.",
                marks: 2,
              },
              {
                q: "State the role of sodium sulphate in preventing caustic embrittlement.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.5",
            title: "Softening methods: lime-soda, zeolite, ion exchange",
            body: [
              "Lime-soda softening is the oldest and cheapest method, suitable for large volumes of moderately hard water. Hydrated lime Ca(OH)2 and soda ash Na2CO3 are dosed into the raw water in calculated amounts: lime destroys temporary hardness by precipitating CaCO3 and Mg(OH)2, soda ash destroys permanent hardness by precipitating CaCO3 and Mg(OH)2 from the chlorides and sulphates. The reactions are written with CaO + MgO in sludge form: Ca(HCO3)2 + Ca(OH)2 -> 2 CaCO3 + 2 H2O, MgCl2 + Ca(OH)2 + Na2CO3 -> Mg(OH)2 + CaCO3 + 2 NaCl.",
              "The lime and soda doses are worked out from the hardness split. For 1 m^3 of water containing CH and NCH, the lime requirement in kg as CaO is (CH + Mg-content + free CO2 + HCl-acidity) divided by 100 times 56 (the molar mass of CaO divided by that of CaCO3); soda requirement in kg as Na2CO3 is (NCH) divided by 100 times 106. In practice one adds 10 percent excess of both reagents to drive reactions to completion and coagulates with alum to settle the precipitate. Treated water has hardness around 50 to 80 mg/L - not boiler-grade.",
              "The zeolite or permutit process uses a sodium aluminosilicate exchanger, Na2Z (Z = the zeolite anion). As hard water percolates through a bed of zeolite granules, Ca2+ and Mg2+ swap for two Na+ ions: CaSO4 + Na2Z -> CaZ + Na2SO4. The bed is regenerated when exhausted by passing a concentrated 10 percent NaCl solution: CaZ + 2 NaCl -> Na2Z + CaCl2 (run to drain). Zeolite softening gives water of about 10 mg/L hardness, is continuous, compact and automatic, but cannot tolerate turbidity, iron or chlorine in the feed, and is limited to about 60 deg C operating temperature.",
              "Ion-exchange demineralisation produces water softer than zeolite can: it removes all ions, not just Ca2+ and Mg2+. The bed has two resins in series or in a mixed bed: a cation exchanger RH (sulphonated polystyrene) that swaps H+ for all cations, and an anion exchanger R'OH (quaternary ammonium) that swaps OH- for all anions. The H+ and OH- released combine to water, leaving nothing behind. Output conductivity is below 1 microS/cm, hardness essentially zero. Regeneration is with dilute HCl (or H2SO4) for the cation bed and dilute NaOH for the anion bed. The process is the gold standard for high-pressure boiler feed and for electronic-grade rinse water.",
            ],
            bullets: [
              "Lime-soda: Ca(OH)2 + Na2CO3 precipitate CaCO3 and Mg(OH)2; cheapest for bulk softening.",
              "Lime dose: (CH + Mg + CO2 + acidity) x 56/100 kg CaO per m^3.",
              "Soda dose: NCH x 106/100 kg Na2CO3 per m^3 (10% excess added in practice).",
              "Treated lime-soda water: ~50-80 mg/L hardness; not boiler grade.",
              "Zeolite (permutit, Na2Z): swaps Ca2+, Mg2+ for 2 Na+; regenerates with 10% NaCl.",
              "Zeolite output: ~10 mg/L hardness; cannot tolerate turbidity, Fe, Cl2; max 60 deg C.",
              "Ion exchange: RH gives H+; R'OH gives OH-; combines to water; output < 1 microS/cm.",
              "Ion-exchange regeneration: HCl for cation bed, NaOH for anion bed.",
            ],
            codeExample: {
              language: "python",
              caption: "Calculate lime (as CaO) and soda (as Na2CO3) doses from the hardness split.",
              code: [
                "# Hardness split in mg/L as CaCO3, water volume in m^3",
                "CH_mg       = 180.0   # carbonate hardness",
                "NCH_mg      = 70.0    # non-carbonate hardness",
                "Mg_mg       = 25.0    # magnesium as CaCO3",
                "free_CO2_mg = 15.0    # free carbon dioxide as CaCO3",
                "acidity_mg  = 0.0     # mineral acidity as CaCO3",
                "volume_m3   = 1000.0  # one thousand cubic metres",
                "",
                "# Equivalent weights: CaO = 56/100 of CaCO3, Na2CO3 = 106/100 of CaCO3",
                "lime_kg  = (CH_mg + Mg_mg + free_CO2_mg + acidity_mg) * 56 / 100 / 1000 * volume_m3",
                "soda_kg  = (NCH_mg + Mg_mg) * 106 / 100 / 1000 * volume_m3",
                "# 10 percent excess added in plant practice",
                "lime_kg *= 1.10",
                "soda_kg *= 1.10",
                "print(f'Lime (as CaO)  = {lime_kg:.1f} kg for {volume_m3} m^3')",
                "print(f'Soda (as Na2CO3)= {soda_kg:.1f} kg for {volume_m3} m^3')",
              ].join("\n"),
            },
            diagram: {
              kind: "compare",
              title: "Lime-soda vs ion-exchange softening",
              caption:
                "Left: cheap, batch, leaves 50-80 mg/L. Right: costly, continuous, leaves zero.",
              left: {
                heading: "Lime-soda process",
                items: [
                  "Reagents: Ca(OH)2 + Na2CO3 (cheap bulk chemicals)",
                  "Mechanism: precipitate CaCO3 and Mg(OH)2 as sludge",
                  "Treated hardness: 50 to 80 mg/L CaCO3",
                  "Best for: large municipal or cooling make-up",
                  "Sludge disposal required; non-regenerable",
                ],
              },
              right: {
                heading: "Ion-exchange demineralisation",
                items: [
                  "Reagents: RH (cation) and R'OH (anion) resins",
                  "Mechanism: H+ swaps for cations, OH- for anions; gives pure water",
                  "Treated hardness: near 0 mg/L, conductivity < 1 microS/cm",
                  "Best for: high-pressure boiler feed, electronics rinse",
                  "Regeneration: dilute HCl + NaOH; resin lasts years",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Always write the dose formula",
              body: "For lime-soda numericals, write 'Lime as CaO = (CH + Mg + CO2 + acidity) x 56/100' and 'Soda as Na2CO3 = (NCH + Mg) x 106/100' on the answer sheet before plugging numbers. The formula carries 2 marks even if the arithmetic slips.",
            },
            keyTerms: [
              { term: "Lime-soda process", definition: "Softening by dosing Ca(OH)2 and Na2CO3 to precipitate CaCO3 and Mg(OH)2 from hard water." },
              { term: "Zeolite (permutit) process", definition: "Softening by passing water through Na2Z, which swaps Ca2+ and Mg2+ for 2 Na+; regenerated with 10% NaCl." },
              { term: "Ion exchange", definition: "Demineralisation by sequential cation (RH) and anion (R'OH) resins producing ion-free water." },
              { term: "Regeneration", definition: "Restoring an exhausted exchanger bed - zeolite with NaCl, cation resin with HCl, anion resin with NaOH." },
            ],
            examQuestions: [
              {
                q: "Compare the lime-soda, zeolite and ion-exchange methods of water softening. State the reactions and the typical treated-water hardness from each, and recommend a method for a 100 bar boiler feed.",
                marks: 7,
                outline: [
                  "Lime-soda: Ca(OH)2 + Na2CO3 precipitate CaCO3, Mg(OH)2; output 50-80 mg/L.",
                  "Write two key reactions: Ca(HCO3)2 + Ca(OH)2 -> 2 CaCO3 + 2 H2O; MgCl2 + Ca(OH)2 + Na2CO3 -> Mg(OH)2 + CaCO3 + 2 NaCl.",
                  "Zeolite: Na2Z + CaSO4 -> CaZ + Na2SO4; regenerates with 10% NaCl; output ~10 mg/L.",
                  "Ion exchange: RH swaps H+ for cations, R'OH swaps OH- for anions; output < 1 microS/cm.",
                  "Lime-soda is cheap and bulk; zeolite compact and automatic; ion exchange gives pure water.",
                  "For 100 bar boiler, only ion-exchange (mixed bed) meets the 0.5 mg/L hardness target.",
                  "Mention regeneration chemicals: HCl for cation, NaOH for anion bed.",
                ],
              },
              {
                q: "Write the regeneration reaction of an exhausted zeolite bed.",
                marks: 2,
              },
              {
                q: "Why is ion-exchange water called demineralised rather than softened?",
                marks: 3,
              },
            ],
          },
          {
            number: "1.6",
            title: "Municipal water treatment and desalination",
            body: [
              "A city water plant takes raw river or reservoir water through a six-stage train. Screening at the intake removes leaves, fish and grit on bar screens of 20 to 50 mm spacing. Aeration then sprays or bubbles the water to strip dissolved gases (H2S, CO2) and to oxidise dissolved iron and manganese to filterable Fe(OH)3 and MnO2, while also freshening the taste and odour. Coagulation follows: alum Al2(SO4)3.18H2O is dosed at 10 to 30 mg/L with a flocculant aid, the hydrolysis forms gelatinous Al(OH)3 that sweeps colloidal clay and humic matter down as floc.",
              "Filtration is the workhorse stage. Rapid gravity sand filters run at 5000 L per square metre per day through 60 to 90 cm of graded sand over gravel; slow sand filters run at 50 to 100 L per square metre per day but produce a biological schmutzdecke layer that removes pathogens. After filtration, the water is clear but not sterile. Disinfection with chlorine gas or bleaching powder is the final barrier: a dose of 1 to 2 mg/L leaves a residual of 0.2 mg/L at the consumer's tap, guarding against re-contamination in the distribution main.",
              "The breakpoint chlorination curve is a standard exam diagram. As chlorine dose rises, chloramines form first (combined residual, falling curve) until the breakpoint near 0.5 to 1 mg/L free chlorine, beyond which any added chlorine appears as free residual (rising line). Beyond the breakpoint, the water is bacteriologically safe and has no chloramine odour. Alternative disinfectants are ozone (no residual, more expensive), chlorine dioxide and UV light (no residual, instant, but no protection in the main).",
              "Desalination removes the dissolved salts themselves, needed where total dissolved solids exceed 1000 mg/L as in sea or brackish water. Reverse osmosis dominates modern practice: a high-pressure pump forces water at 25 to 80 atm through a semi-permeable polyamide membrane that rejects 95 to 99 percent of dissolved salts, leaving a brine concentrate and a permeate of less than 500 mg/L TDS. Electrodialysis, the older thermal methods (multistage flash, multiple-effect), and solar stills are alternatives. The energy cost of RO is about 3 to 5 kWh per cubic metre for seawater - a tenth of what distillation used to take.",
            ],
            bullets: [
              "Train: screening, aeration, coagulation, filtration, disinfection, (softening if needed).",
              "Alum dose 10-30 mg/L forms Al(OH)3 floc that sweeps colloids down.",
              "Rapid sand filter: 5000 L/m^2/day; slow sand filter: 50-100 L/m^2/day.",
              "Chlorine dose 1-2 mg/L leaves residual 0.2 mg/L at the tap.",
              "Breakpoint: free residual rises only beyond ~0.5-1 mg/L chlorine dose.",
              "RO: 25-80 atm pressure, polyamide membrane, rejects 95-99% of salts.",
              "RO permeate TDS < 500 mg/L; energy ~3-5 kWh/m^3 for seawater.",
              "Alternatives: electrodialysis, multistage flash distillation, solar still.",
            ],
            table: {
              caption: "Municipal treatment train - stage, purpose and dose.",
              headers: ["Stage", "Purpose", "Typical dose or rate"],
              rows: [
                ["Screening", "Remove debris, fish, grit", "20-50 mm bar screens"],
                ["Aeration", "Strip gases, oxidise Fe/Mn", "Spray or bubble, 10-30 min"],
                ["Coagulation", "Drop colloids as floc", "Alum 10-30 mg/L"],
                ["Rapid filtration", "Clarify after coagulation", "5000 L/m^2/day"],
                ["Disinfection", "Kill pathogens", "Chlorine 1-2 mg/L, residual 0.2 mg/L"],
                ["Reverse osmosis", "Remove dissolved salts", "25-80 atm, 3-5 kWh/m^3"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Municipal treatment train from river to tap",
              caption:
                "Each step targets one class of impurity - screening (large solids), aeration (gases), coagulation (colloids), filtration (suspended), chlorination (microbes).",
              steps: [
                { label: "Screen", note: "bar screens 20-50 mm" },
                { label: "Aerate", note: "strip CO2, H2S; oxidise Fe, Mn" },
                { label: "Coagulate", note: "alum 10-30 mg/L forms Al(OH)3 floc" },
                { label: "Filter", note: "rapid sand 5000 L/m^2/day" },
                { label: "Disinfect", note: "Cl2 1-2 mg/L, residual 0.2 mg/L" },
                { label: "Distribute", note: "clear well to consumer's tap" },
              ],
            },
            callout: {
              type: "tip",
              title: "Match dose with target",
              body: "When asked 'what is the chlorine dose for municipal water', answer with both the dose (1-2 mg/L) and the residual (0.2 mg/L at the tap). The residual is what guards re-contamination and is the figure examiners look for after the dose.",
            },
            keyTerms: [
              { term: "Coagulation", definition: "Adding alum (Al2(SO4)3) at 10-30 mg/L to form Al(OH)3 floc that sweeps colloids out of water." },
              { term: "Breakpoint chlorination", definition: "The dose beyond which all ammonia is oxidised and additional chlorine appears as free residual, giving reliable disinfection." },
              { term: "Reverse osmosis", definition: "Forcing water at 25-80 atm through a semi-permeable membrane that rejects 95-99% of dissolved salts." },
              { term: "Rapid sand filter", definition: "A gravity filter running at ~5000 L/m^2/day through 60-90 cm of graded sand over gravel." },
            ],
            examQuestions: [
              {
                q: "Describe the various steps involved in the treatment of water for municipal supply. Explain the significance of breakpoint chlorination and state the typical chlorine dose and residual.",
                marks: 7,
                outline: [
                  "List the train: screening, aeration, coagulation, filtration, disinfection.",
                  "Screening: bar screens 20-50 mm remove debris.",
                  "Aeration: strip CO2/H2S, oxidise Fe2+ to Fe(OH)3.",
                  "Coagulation: alum 10-30 mg/L forms Al(OH)3 floc sweeping colloids.",
                  "Filtration: rapid sand filter 5000 L/m^2/day or slow 50-100 L/m^2/day.",
                  "Disinfection: chlorine dose 1-2 mg/L, residual 0.2 mg/L at tap.",
                  "Breakpoint: free residual rises beyond ~0.5-1 mg/L; combined residual (chloramines) before it.",
                ],
              },
              {
                q: "Why is alum used in coagulation? Write the hydrolysis reaction.",
                marks: 2,
              },
              {
                q: "State the operating pressure and salt rejection of a typical reverse osmosis membrane.",
                marks: 3,
              },
            ],
          },
        ],
      },
    },

    // =========================================================================
    // UNIT II - FUELS AND COMBUSTION
    // =========================================================================
    {
      number: 2,
      roman: "II",
      title: "Fuels and Combustion",
      summary:
        "The chemistry and stoichiometry of heat: classification of fuels, calorific value HCV and LCV with Dulong's formula and the bomb calorimeter, proximate and ultimate analysis of coal, petroleum refining and cracking, octane and cetane numbers, gaseous fuels CNG and LPG, and the air and flue-gas calculations for combustion.",
      chapter: {
        number: "02",
        title: "Fuels and Combustion",
        intro:
          "Unit II opens with the classification of fuels and the definitions of HCV, LCV and Dulong's formula, works through bomb calorimeter numericals and the proximate and ultimate analysis of coal, follows the refining of crude oil and the thermal and catalytic cracking of fractions, contrasts the octane rating of petrol with the cetane rating of diesel, surveys the gaseous fuels CNG, LPG, producer gas and water gas, and ends with the stoichiometric calculation of theoretical air and flue gas from an ultimate analysis.",
        inOneBreath:
          "Fuels split into primary (natural: wood, coal, petroleum, natural gas) and secondary (artificial: coke, charcoal, petrol, producer gas) and into solid, liquid, gaseous; calorific value is the heat released per unit mass or volume, with HCV (water condensed) and LCV (water as vapour) differing by 9 x H/100 x 587 kcal per kg; Dulong's formula GCV = (8080 C + 34460 (H - O/8) + 2240 S) / 100 kcal per kg estimates HCV from ultimate analysis; the bomb calorimeter measures HCV at constant volume as (W + w) x delta T / mass; coal ranks from peat (60% C) to lignite, bituminous, anthracite (90% C); proximate analysis gives moisture, volatile matter, ash, fixed carbon = 100 - (M + VM + A); petroleum is refined by fractional distillation into petrol (40-200 deg C), kerosene (200-250), diesel (250-320), heavy oil; thermal cracking (570-720 K, 50 atm, free-radical) and catalytic cracking (SiO2-Al2O3, 670-770 K, carbocation) raise gasoline yield; octane number uses iso-octane (100) and n-heptane (0); cetane number uses cetane (100) and alpha-methylnaphthalene (0); CNG is 95% methane at 8500 kcal/m^3, LPG is propane-butane at 25000; theoretical air per kg fuel = (32/12 x C + 8 x H + 1 x S - O) / 0.23.",
        sections: [
          {
            number: "2.1",
            title: "Classification of fuels and the calorific value",
            body: [
              "A fuel is any substance that releases usable heat on combustion. By origin fuels are primary - occurring naturally, like wood, peat, coal, petroleum and natural gas - or secondary, manufactured from a primary stock, like coke from coal, charcoal from wood, petrol and diesel from crude oil, or producer gas from coal. By physical state they are solid (coal, coke, wood), liquid (petrol, diesel, kerosene, alcohol) or gaseous (natural gas, LPG, hydrogen, producer gas). Most Indian fuel economy runs on coal (power) and petroleum derivatives (transport).",
              "Calorific value (CV) is the heat released when a unit mass (kg) or volume (m^3 at NTP) of fuel is burnt completely with oxygen, the products cooling back to the starting temperature. For solid and liquid fuels the unit is kcal/kg or kJ/kg (1 kcal = 4.184 kJ); for gases it is kcal/m^3 or BTU per cubic foot (1 BTU/ft^3 = 8.9 kcal/m^3). A good steam coal sits around 7000 kcal/kg, petrol near 11200 kcal/kg, natural gas about 8500 kcal/m^3.",
              "Two calorific values are reported because water is a combustion product. The higher or gross calorific value (HCV, GCV) assumes the water vapour condenses, releasing its latent heat of 587 kcal per kg. The lower or net calorific value (LCV, NCV) assumes the water leaves as vapour, taking that latent heat with it. The relationship is LCV = HCV - 9 x (H/100) x 587 kcal per kg of fuel, where H is the mass percent of hydrogen in the fuel and the factor 9 is the mass of water formed per unit mass of hydrogen burnt (H2 + 1/2 O2 -> H2O, 2 kg H gives 18 kg water).",
              "Dulong's formula estimates the HCV of a solid or liquid fuel from its ultimate analysis (mass percentages of C, H, O and S): HCV (kcal/kg) = (1/100) x [8080 C + 34460 (H - O/8) + 2240 S]. The coefficients are the calorific values of pure C (8080), H (34460, the highest among the elements) and S (2240) per kg. The subtraction O/8 in the hydrogen term corrects for the oxygen already chemically combined with hydrogen in the fuel as water; eight grams of oxygen neutralise one gram of hydrogen. The formula is approximate (within 2 to 5 percent of bomb-calorimeter data) but is the standard exam estimate.",
            ],
            bullets: [
              "Primary fuels: wood, peat, coal, petroleum, natural gas - found in nature.",
              "Secondary fuels: coke, charcoal, petrol, diesel, producer gas - made from primary.",
              "Solid fuels: coal, coke, wood; liquid: petrol, diesel, kerosene; gaseous: NG, LPG, H2.",
              "Calorific value: heat released per kg (solids/liquids) or m^3 (gases) on complete combustion.",
              "HCV (GCV) counts latent heat of water condensed; LCV (NCV) treats water as vapour.",
              "LCV = HCV - 9 x (H/100) x 587 kcal per kg of fuel.",
              "Dulong's formula: HCV = (1/100) x [8080 C + 34460 (H - O/8) + 2240 S] kcal/kg.",
              "1 kcal = 4.184 kJ; 1 BTU/ft^3 = 8.9 kcal/m^3.",
            ],
            table: {
              caption: "Calorific values of common fuels (representative).",
              headers: ["Fuel", "State", "Calorific value", "Unit"],
              rows: [
                ["Anthracite coal", "Solid", "8500", "kcal/kg"],
                ["Bituminous coal", "Solid", "6500-8000", "kcal/kg"],
                ["Petrol (gasoline)", "Liquid", "11200", "kcal/kg"],
                ["Diesel", "Liquid", "10800", "kcal/kg"],
                ["Natural gas (CNG)", "Gas", "8500", "kcal/m^3"],
                ["LPG (propane-butane)", "Gas", "25000", "kcal/m^3"],
                ["Hydrogen", "Gas", "3050", "kcal/m^3"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "Ranking fuels by calorific value",
              caption:
                "Top tier is the most energy-dense; the same numbers reappear in the combustion numerical of section 2.6.",
              tiers: [
                { label: "LPG ~25000 kcal/m^3; Petrol ~11200 kcal/kg", note: "highest energy density" },
                { label: "Diesel ~10800; Anthracite ~8500 kcal/kg", note: "transport fuels and best coal" },
                { label: "Bituminous coal 6500-8000 kcal/kg", note: "thermal power station fuel" },
                { label: "CNG ~8500 kcal/m^3; Producer gas ~1300 kcal/m^3", note: "low energy per m^3" },
              ],
            },
            callout: {
              type: "exam",
              title: "Quote Dulong's formula verbatim",
              body: "HCV (kcal/kg) = (1/100) x [8080 C + 34460 (H - O/8) + 2240 S] - write this line before any numerical on calorific value. The coefficients 8080, 34460, 2240 are worth a mark on their own.",
            },
            keyTerms: [
              { term: "Calorific value", definition: "The heat released when a unit mass (kg) or volume (m^3) of fuel is burnt completely and the products cool back to the starting temperature." },
              { term: "HCV (GCV)", definition: "Higher or gross calorific value - includes the latent heat recovered when combustion water condenses to liquid." },
              { term: "LCV (NCV)", definition: "Lower or net calorific value - excludes the latent heat of water that leaves as vapour; LCV = HCV - 9 x H/100 x 587." },
              { term: "Dulong's formula", definition: "HCV (kcal/kg) = (1/100) x [8080 C + 34460 (H - O/8) + 2240 S] from ultimate analysis." },
            ],
            examQuestions: [
              {
                q: "Classify fuels with examples. Define calorific value and distinguish between HCV and LCV. State Dulong's formula and explain the meaning of the O/8 term.",
                marks: 7,
                outline: [
                  "Primary (wood, coal, petroleum, NG) vs secondary (coke, charcoal, petrol, producer gas).",
                  "By state: solid (coal, coke), liquid (petrol, diesel), gaseous (NG, LPG).",
                  "Calorific value = heat per kg or m^3 on complete combustion.",
                  "HCV counts latent heat of condensed water; LCV treats water as vapour.",
                  "Relation LCV = HCV - 9 x (H/100) x 587 kcal/kg.",
                  "Dulong: HCV = (1/100) [8080 C + 34460 (H - O/8) + 2240 S].",
                  "O/8 corrects for oxygen already combined with hydrogen as water in the fuel.",
                ],
              },
              {
                q: "Why is the calorific value of hydrogen the highest among fuels?",
                marks: 2,
              },
              {
                q: "Convert 11200 kcal/kg into kJ/kg.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.2",
            title: "Bomb calorimeter and numericals on calorific value",
            body: [
              "The bomb calorimeter measures the HCV of a solid or liquid fuel at constant volume with full accuracy. A known mass of fuel (about 0.5 to 1 g) is pressed into a pellet, placed in a steel bomb charged with oxygen at 25 to 30 atm, and ignited electrically by a fuse wire. The bomb sits in a measured mass of water (about 2000 g) inside an insulated calorimeter, and the rise in water temperature is read to 0.001 deg C on a precise thermometer. Because the bomb is sealed, all combustion water condenses and the HCV is obtained directly.",
              "The working equation is HCV = (W + w) x (T2 - T1) / m, where W is the mass of water in the calorimeter, w is the water equivalent of the calorimeter assembly (bomb, stirrer, thermometer, can), (T2 - T1) is the corrected temperature rise in deg C, and m is the mass of fuel burnt in kg. The water equivalent w is determined separately by burning a fuel of known calorific value (benzoic acid, 6319 kcal/kg) in the same apparatus. Cooling correction, fuse correction and acid correction are subtracted from the gross rise to give the net temperature change used in the equation.",
              "A worked example. A 0.92 g sample of coal raises the temperature of 1950 g water and a calorimeter of water equivalent 380 g by 2.4 deg C. Without corrections: HCV = (1950 + 380) x 2.4 / 0.00092 kg = 2330 x 2.4 / 0.00092 = 6.08 million kcal/kg... wait, that is wrong by a factor of 1000. The fuel mass must be in kg in the formula's denominator: 0.92 g = 0.00092 kg. Then HCV = (2330 g x 2.4 deg C) / 0.92 g = 6078 kcal/kg - the cleaner form, with masses in the same unit, gives the right magnitude without the 1000 trap.",
              "The LCV is then found from HCV by subtracting the latent heat of the water produced. If the same coal has 4.5 percent hydrogen by mass, water formed = 9 x 4.5/100 = 0.405 kg per kg of fuel, and latent heat lost = 0.405 x 587 = 237.7 kcal per kg. So LCV = 6078 - 238 = 5840 kcal/kg. A 2-mark numerical often stops here; a 7-mark question adds cooling correction (a 0.02 to 0.05 deg C subtraction from T2 - T1) and fuse correction (a few calories subtracted from the heat input). The Python snippet below automates the routine.",
            ],
            bullets: [
              "Bomb calorimeter: constant-volume, sealed bomb in 25-30 atm O2, measures HCV directly.",
              "Working equation: HCV = (W + w) x (T2 - T1) / m, with masses in same unit.",
              "W = water mass (~2000 g); w = water equivalent of calorimeter (~300-400 g).",
              "Cooling, fuse and acid corrections subtracted from gross temperature rise.",
              "Benzoic acid (6319 kcal/kg) calibrates the water equivalent w.",
              "Worked: (1950 + 380) x 2.4 / 0.92 g = 6078 kcal/kg.",
              "LCV = HCV - 9 x (H/100) x 587; for H = 4.5%, subtract ~238 kcal/kg.",
              "Sealed bomb condenses all combustion water, so the measurement is HCV not LCV.",
            ],
            codeExample: {
              language: "python",
              caption: "Compute HCV and LCV of a fuel from bomb calorimeter readings.",
              code: [
                "# Bomb calorimeter readings",
                "W_g     = 1950.0   # water taken, g",
                "w_g     = 380.0    # water equivalent of calorimeter, g",
                "dT_C    = 2.4      # corrected temperature rise, deg C",
                "m_g     = 0.92     # fuel mass, g",
                "H_pct   = 4.5      # hydrogen percent in fuel",
                "",
                "# HCV in kcal/kg (masses cancel if in same unit)",
                "HCV = (W_g + w_g) * dT_C / m_g",
                "print(f'HCV = {HCV:.0f} kcal/kg')",
                "",
                "# LCV: subtract latent heat of water formed from hydrogen",
                "latent = 587.0",
                "water_per_kg_fuel = 9.0 * (H_pct / 100.0)",
                "LCV = HCV - water_per_kg_fuel * latent",
                "print(f'LCV = {LCV:.0f} kcal/kg')",
                "print(f'Water formed = {water_per_kg_fuel:.3f} kg per kg fuel')",
              ].join("\n"),
            },
            diagram: {
              kind: "fork",
              title: "From bomb rise to reported calorific value",
              caption:
                "Three corrections between raw temperature rise and the published HCV.",
              start: "Burn fuel in bomb, measure temperature rise",
              branches: [
                { label: "no corrections applied", outcome: "rough HCV - acceptable for class demo only", good: false },
                { label: "subtract cooling correction", outcome: "net rise accounts for heat leak to room", good: true },
                { label: "subtract fuse + acid correction", outcome: "true HCV ready for engineering use", good: true },
                { label: "subtract latent heat 9 x H/100 x 587", outcome: "LCV - the value quoted in fuel contracts", good: true },
              ],
            },
            callout: {
              type: "warning",
              title: "Mind the mass unit",
              body: "The classic 1-mark slip is mixing grams of fuel with kilograms in the denominator, giving an answer a thousand times too large. Use masses in the same unit throughout the formula HCV = (W + w) x dT / m - the result is then in cal/g or kcal/kg without further scaling.",
            },
            keyTerms: [
              { term: "Bomb calorimeter", definition: "A constant-volume sealed steel vessel charged with O2 at 25-30 atm in which a fuel sample is burnt to measure HCV." },
              { term: "Water equivalent w", definition: "The mass of water that would absorb the same heat as the calorimeter assembly (bomb, stirrer, thermometer, can), calibrated with benzoic acid." },
              { term: "Cooling correction", definition: "A small temperature subtraction (0.02-0.05 deg C) for heat leaked to the surroundings during the experiment." },
              { term: "Fuse correction", definition: "Heat contributed by the ignition fuse wire that must be subtracted from the gross heat release." },
            ],
            examQuestions: [
              {
                q: "Describe the construction and working of a bomb calorimeter for determining the calorific value of a solid fuel. A 0.92 g coal sample raised the temperature of 1950 g water plus a calorimeter of water equivalent 380 g by 2.4 deg C. The fuel contains 4.5 percent hydrogen. Calculate HCV and LCV in kcal/kg.",
                marks: 7,
                outline: [
                  "Describe bomb: steel vessel, O2 at 25-30 atm, pellet of fuel, fuse wire, water bath.",
                  "Calibrate water equivalent w using benzoic acid (6319 kcal/kg).",
                  "Formula: HCV = (W + w) x (T2 - T1) / m, with masses in same unit.",
                  "Substitute: (1950 + 380) x 2.4 / 0.92 = 6078 kcal/kg.",
                  "Water formed per kg fuel = 9 x 4.5/100 = 0.405 kg.",
                  "Latent heat lost = 0.405 x 587 = 237.7 kcal/kg.",
                  "LCV = 6078 - 238 = 5840 kcal/kg (quote cooling, fuse corrections as further refinements).",
                ],
              },
              {
                q: "Why does a bomb calorimeter give HCV rather than LCV directly?",
                marks: 2,
              },
              {
                q: "What is the water equivalent of a calorimeter and how is it determined?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.3",
            title: "Solid fuels: coal classification, proximate and ultimate analysis",
            body: [
              "Coal is the rank-ordered fossil of plant matter, compressed and carbonised over geological time. The rank series runs from peat (60 percent carbon, 60 to 70 percent moisture, calorific value about 4000 kcal/kg) through lignite or brown coal (60 to 70 percent carbon, 10 to 20 percent moisture, 4000 to 6000 kcal/kg) to bituminous coal (70 to 85 percent carbon, 6500 to 8000 kcal/kg, the workhorse of Indian thermal power) and finally anthracite (90 percent carbon, hard, smokeless, 8500 to 8700 kcal/kg). As rank rises, moisture and volatile matter fall, fixed carbon and calorific value rise.",
              "Proximate analysis is a quick three-fraction test that gauges the burning quality of coal. Moisture is determined by heating 1 g of powdered coal at 105 to 110 deg C for one hour; a good steam coal has 1 to 4 percent moisture. Volatile matter is the loss when the moisture-free sample is heated in a covered crucible at 900 to 950 deg C for seven minutes - it captures the tars and gases driven off as the coal cooks, typically 20 to 35 percent. Ash is the residue after burning the sample in an open crucible at 700 to 750 deg C in a muffle furnace. Fixed carbon is by difference: FC = 100 - (M + VM + A).",
              "Each proximate fraction has a clear significance. Moisture wastes heat (it must be evaporated before combustion) and lowers calorific value. Volatile matter governs flame length and smoke: too high means a long, smoky flame unsuitable for metallurgical furnaces; too low means the coal is hard to ignite. Ash is inert ballast - it lowers CV, must be handled as fly ash in boilers, and 20 percent ash means 200 kg of ash per tonne of coal. Fixed carbon is the actual combustible skeleton that burns to CO2 on the grate; high FC means caking coal, good for coke-making.",
              "Ultimate analysis is the elemental breakdown of the combustible matter: carbon, hydrogen, nitrogen, sulphur and oxygen (oxygen by difference from 100 - (C + H + N + S + ash)). It is more laborious (combustion in a CHN analyser, Kjeldahl or Dumas for nitrogen, Eschka method for sulphur) but it is the input to Dulong's formula and to the stoichiometric air calculation in section 2.6. A typical bituminous coal has C 75 percent, H 5 percent, O 10 percent, N 1.5 percent, S 1 percent, ash 7.5 percent.",
            ],
            bullets: [
              "Coal rank series: peat (60% C) -> lignite -> bituminous (70-85% C) -> anthracite (~90% C).",
              "Anthracite: hard, smokeless, CV 8500-8700 kcal/kg; bituminous 6500-8000.",
              "Proximate analysis: moisture (105 deg C, 1 h), volatile matter (950 deg C, 7 min, covered), ash (750 deg C, muffle).",
              "Fixed carbon = 100 - (M + VM + A); typical FC 40-60 percent for bituminous coal.",
              "Moisture wastes heat; VM governs flame and smoke; ash is inert ballast.",
              "Ultimate analysis: C, H, N, S, O (O by difference) - feeds Dulong's formula.",
              "Eschka method for sulphur; Kjeldahl or Dumas for nitrogen.",
              "Typical bituminous ultimate: C 75, H 5, O 10, N 1.5, S 1, ash 7.5 percent.",
            ],
            table: {
              caption: "Proximate analysis of a steam coal sample.",
              headers: ["Fraction", "Method", "Typical value", "Significance"],
              rows: [
                ["Moisture", "105 deg C, 1 h", "1-4%", "Wastes heat, lowers CV"],
                ["Volatile matter", "950 deg C, 7 min, covered", "20-35%", "Flame length, smoke"],
                ["Ash", "750 deg C, muffle, open", "5-20%", "Inert ballast, fly ash"],
                ["Fixed carbon", "by difference", "40-60%", "Combustible skeleton"],
                ["Total", "-", "100%", "complete balance"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Proximate analysis step by step",
              caption:
                "Four fractions from one sample; the final fixed carbon is found by subtraction.",
              stages: [
                { label: "Powder coal, heat 105 deg C, 1 h", note: "loss = moisture" },
                { label: "Moisture-free, covered crucible, 950 deg C, 7 min", note: "loss = volatile matter" },
                { label: "Open crucible, muffle, 750 deg C", note: "residue = ash" },
                { label: "Subtract from 100", note: "fixed carbon = 100 - (M + VM + A)" },
                { label: "Report all four fractions", note: "complete proximate analysis" },
              ],
            },
            callout: {
              type: "exam",
              title: "Significance is worth two marks",
              body: "Do not stop at the procedure for proximate analysis. RGPV wants 'significance' of each fraction: moisture wastes heat, volatile matter governs flame and smoke, ash is inert ballast, fixed carbon is the combustible that burns on the grate. One sentence per fraction wins the 7-mark question.",
            },
            keyTerms: [
              { term: "Proximate analysis", definition: "A four-fraction test (moisture, volatile matter, ash, fixed carbon) gauging the burning quality of coal." },
              { term: "Ultimate analysis", definition: "Elemental breakdown of coal into C, H, N, S and O (by difference), feeding Dulong's formula and air calculations." },
              { term: "Volatile matter", definition: "The mass loss (as percent) when moisture-free coal is heated at 950 deg C for 7 min in a covered crucible." },
              { term: "Fixed carbon", definition: "The combustible residue after moisture, volatile matter and ash have been removed; FC = 100 - (M + VM + A)." },
            ],
            examQuestions: [
              {
                q: "Classify coal by rank. Describe the proximate analysis of coal and state the significance of each fraction. A sample has 4% moisture, 32% volatile matter and 12% ash; find its fixed carbon.",
                marks: 7,
                outline: [
                  "Rank series: peat -> lignite -> bituminous -> anthracite; CV rises with rank.",
                  "Moisture: heat 1 g at 105 deg C, 1 h; significance - wastes heat, lowers CV.",
                  "Volatile matter: 950 deg C, 7 min, covered crucible; significance - flame length, smoke.",
                  "Ash: 750 deg C, muffle, open crucible; significance - inert ballast, fly ash load.",
                  "Fixed carbon: FC = 100 - (M + VM + A) = 100 - (4 + 32 + 12) = 52 percent.",
                  "Significance of FC: combustible skeleton, caking coal for coke-making.",
                  "Mention typical bituminous values: M 1-4, VM 20-35, A 5-20, FC 40-60 percent.",
                ],
              },
              {
                q: "How is sulphur determined in coal? Name the method.",
                marks: 2,
              },
              {
                q: "Why is oxygen reported by difference in ultimate analysis?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.4",
            title: "Liquid fuels: petroleum refining and cracking",
            body: [
              "Crude petroleum is a complex mixture of hydrocarbons (paraffins, naphthenes, aromatics, asphaltenes) ranging from C1 gases to C60 bitumens, with small amounts of sulphur, nitrogen, oxygen and metals. Refining separates this mixture into marketable fractions by fractional distillation in a 30 to 50 m tall column that runs at near-atmospheric pressure with a temperature gradient from about 400 deg C at the reboiler to 30 deg C at the top. The crude is preheated in a pipe still to 350 to 400 deg C and flashed into the column; vapours condense on bubble-cap trays at progressively lower temperatures.",
              "The fractions taken off the column are gasoline (petrol) boiling at 40 to 200 deg C, kerosene at 200 to 250 deg C, diesel at 250 to 320 deg C, heavy fuel oil at 320 to 400 deg C, and a residual bottom of bitumen or vacuum residue. Straight-run gasoline is only 20 to 30 percent of the crude barrel; demand for petrol far exceeds this, so refiners crack the heavier, less valuable fractions into lighter, more valuable gasoline-range molecules. Cracking also improves the octane number because branched and aromatic products resist knock better than straight-chain paraffins.",
              "Thermal cracking heats the heavy oil to 570 to 720 K (about 300 to 450 deg C) under a pressure of 50 to 100 atm without a catalyst. The mechanism is free-radical: a long paraffin chain cleaves homolytically at the C-C bond, giving two radicals that further fragment by beta-scission to smaller olefins and paraffins. Thermal cracking gives a wider spread of products, more gas, and more olefinic gasoline of moderate octane. The older Burton process and the modern visbreaker are variants.",
              "Catalytic cracking is the modern workhorse: a fluidised bed of zeolite catalyst (synthetic silica-alumina, SiO2-Al2O3 with rare-earth doping) at 670 to 770 K and 1 to 3 atm cracks the vapourised heavy oil into gasoline. The mechanism is carbocation (the acidic sites on the catalyst protonate an olefin, forming a carbenium ion that rearranges by hydride and methyl shifts to branched products before beta-scission). Catalytic cracking yields more gasoline of higher octane (75 to 90 versus 65 to 75 thermal) with less gas and coke, and the catalyst is continuously regenerated in a separate regenerator where the deposited coke is burnt off.",
            ],
            bullets: [
              "Crude: paraffins, naphthenes, aromatics, asphaltenes; S, N, O, V, Ni impurities.",
              "Refining: fractional distillation, 30-50 m column, gradient 400 deg C to 30 deg C.",
              "Fractions: gasoline (40-200), kerosene (200-250), diesel (250-320), heavy oil (320-400 deg C).",
              "Straight-run gasoline is only 20-30% of crude; cracking lifts the gasoline yield above 60%.",
              "Thermal cracking: 570-720 K, 50-100 atm, free-radical mechanism, more olefins.",
              "Catalytic cracking: 670-770 K, 1-3 atm, SiO2-Al2O3 zeolite, carbocation mechanism.",
              "Catalytic gives higher-octane gasoline (75-90) than thermal (65-75) with less gas and coke.",
              "Catalytic cracker regenerator burns off coke to restore catalyst activity.",
            ],
            table: {
              caption: "Petroleum fractions from a crude distillation column.",
              headers: ["Fraction", "Boiling range (deg C)", "Carbon range", "Use"],
              rows: [
                ["Gasoline (petrol)", "40-200", "C5-C10", "Spark-ignition engines"],
                ["Kerosene", "200-250", "C10-C14", "Aviation, lighting, cooking"],
                ["Diesel", "250-320", "C14-C20", "Compression-ignition engines"],
                ["Heavy fuel oil", "320-400", "C20-C30", "Boiler and marine fuel"],
                ["Bitumen residue", ">400", "C30+", "Roads, roofing"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Petroleum refinery from crude to product",
              caption:
                "Preheat, flash into column, draw fractions, crack the heavy oil to gasoline, treat and blend.",
              steps: [
                { label: "Crude preheat 350-400 deg C", note: "pipe still furnace" },
                { label: "Flash to fractionating column", note: "30-50 m, bubble-cap trays" },
                { label: "Draw gasoline, kerosene, diesel", note: "at their boiling cuts" },
                { label: "Send heavy oil to cracker", note: "thermal or catalytic" },
                { label: "Cracked gasoline + blend", note: "to motor gasoline pool" },
              ],
            },
            callout: {
              type: "tip",
              title: "Distinguish the two cracking mechanisms",
              body: "When asked to compare, write 'thermal cracking = free-radical, 570-720 K, 50-100 atm' and 'catalytic cracking = carbocation on SiO2-Al2O3, 670-770 K, 1-3 atm, higher-octane gasoline'. Pairing the mechanism with the conditions wins the marks.",
            },
            keyTerms: [
              { term: "Fractional distillation", definition: "Separation of crude petroleum into boiling-range fractions in a tall column with a temperature gradient." },
              { term: "Thermal cracking", definition: "Breaking large hydrocarbons into smaller ones at 570-720 K and 50-100 atm by a free-radical mechanism, without a catalyst." },
              { term: "Catalytic cracking", definition: "Cracking of heavy oil over a zeolite (SiO2-Al2O3) catalyst at 670-770 K and 1-3 atm by a carbocation mechanism, giving higher-octane gasoline." },
              { term: "Fluid catalytic cracker", definition: "A unit in which cracking catalyst is continuously circulated and regenerated by burning off coke." },
            ],
            examQuestions: [
              {
                q: "Describe the refining of petroleum by fractional distillation and list the fractions obtained. Compare thermal and catalytic cracking with respect to conditions, mechanism and product quality.",
                marks: 7,
                outline: [
                  "Crude is preheated to 350-400 deg C in a pipe still and flashed into a 30-50 m column.",
                  "Fractions: gasoline (40-200), kerosene (200-250), diesel (250-320), heavy oil (320-400 deg C).",
                  "Straight-run gasoline is 20-30% of crude; cracking lifts yield above 60%.",
                  "Thermal cracking: 570-720 K, 50-100 atm, free-radical mechanism, more olefins, lower octane.",
                  "Catalytic cracking: 670-770 K, 1-3 atm, SiO2-Al2O3 zeolite, carbocation mechanism.",
                  "Catalytic gives octane 75-90 vs thermal 65-75, less gas and coke.",
                  "Regenerator burns off coke on catalyst; cracker improves refinery economics.",
                ],
              },
              {
                q: "Name the catalyst used in catalytic cracking.",
                marks: 2,
              },
              {
                q: "Why is cracked gasoline preferred over straight-run gasoline?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.5",
            title: "Octane and cetane numbers, and gaseous fuels",
            body: [
              "Octane number rates the anti-knock quality of gasoline. Knock is the explosive auto-ignition of the end-gas ahead of the flame front in a spark-ignition engine; it raises cylinder pressure abruptly and damages pistons. The scale anchors on two pure hydrocarbons: iso-octane (2,2,4-trimethylpentane) is defined as 100 and n-heptane as 0. A petrol of octane number 85 knocks like a blend of 85 percent iso-octane and 15 percent n-heptane. Branched paraffins, aromatics and olefins have high octane; long straight-chain paraffins have low octane.",
              "Octane is raised at the refinery by alkylation (combining small olefins into branched C7-C8 paraffins), isomerisation (converting n-paraffins to iso-paraffins over Pt-zeolite), reforming (dehydrogenation of naphthenes to aromatics over Pt/Al2O3) and by additives. The historical additive was tetra-ethyl lead (TEL, Pb(C2H5)4) at 0.5 mL/L - one of the most effective anti-knock agents ever, but it deposits lead in the environment and poisons catalytic converters, so India banned leaded petrol nationwide in 2000. Methyl tertiary butyl ether (MTBE) and ethanol blending (up to 10 percent in India) are the modern octane boosters.",
              "Cetane number rates diesel fuel on the opposite axis: it measures how readily the fuel ignites under compression. The scale anchors on cetane (n-hexadecane, C16H34) at 100 and alpha-methylnaphthalene at 0. A diesel of cetane number 50 ignites like a 50/50 blend of the two. Higher cetane means a shorter ignition delay between injection and auto-ignition, smoother combustion, less diesel knock and lower particulate. Indian diesel is rated CN 48 minimum; refinery cetane improvers include alkyl nitrates such as iso-octyl nitrate. Note the inverse correlation: paraffins that have low octane (ignites easily, knocks in petrol) have high cetane (ignites easily, good in diesel).",
              "The gaseous fuels carry their own calorific values and use cases. Compressed natural gas (CNG) is mostly methane (90 to 95 percent) compressed to 200 to 250 bar; its calorific value is about 8500 kcal/m^3 and it is the dominant fuel for city buses in Delhi and Mumbai. Liquefied petroleum gas (LPG) is a propane-butane mix stored as a liquid under modest pressure; CV ~25000 kcal/m^3 or 11000 kcal/kg, used as domestic cooking gas. Producer gas (CO about 25 percent, N2 about 50 percent, H2 about 10 percent) is made by partial combustion of coal or coke in air-steam blast; CV only 1300 kcal/m^3 but cheap for furnace heating. Water gas (CO and H2 in roughly equal measure) is made by passing steam over white-hot coke; CV ~2800 kcal/m^3.",
            ],
            bullets: [
              "Octane number: iso-octane = 100, n-heptane = 0; higher = more anti-knock.",
              "Branched paraffins, aromatics, olefins = high octane; straight paraffins = low.",
              "TEL (Pb(C2H5)4) at 0.5 mL/L was banned in India in 2000 for on-road petrol.",
              "Modern boosters: alkylation, isomerisation, MTBE, ethanol blend up to 10%.",
              "Cetane number: cetane (C16H34) = 100, alpha-methylnaphthalene = 0; higher = shorter ignition delay.",
              "Indian diesel: CN 48 minimum; improved with alkyl nitrates.",
              "CNG: ~95% methane at 200-250 bar, 8500 kcal/m^3; LPG: propane-butane, 25000 kcal/m^3.",
              "Producer gas ~1300 kcal/m^3; water gas ~2800 kcal/m^3; both from coal or coke.",
            ],
            table: {
              caption: "Gaseous fuels at a glance.",
              headers: ["Fuel", "Main components", "Calorific value", "Typical use"],
              rows: [
                ["CNG", "Methane 90-95%", "~8500 kcal/m^3", "City buses, autos"],
                ["LPG", "Propane + butane", "~25000 kcal/m^3", "Domestic cooking"],
                ["Producer gas", "CO 25%, N2 50%, H2 10%", "~1300 kcal/m^3", "Furnace heating"],
                ["Water gas", "CO + H2 (1:1)", "~2800 kcal/m^3", "Industry, synthesis feed"],
                ["Coal gas", "H2 50%, CH4 30%, CO 10%", "~5000 kcal/m^3", "Legacy town gas"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Octane versus cetane - two opposite quality scales",
              caption:
                "Same hydrocarbon ranks high on one scale and low on the other: paraffins ignite easily.",
              left: {
                heading: "Octane number (petrol)",
                items: [
                  "Iso-octane = 100 (best anti-knock)",
                  "n-Heptane = 0 (worst knock)",
                  "High = resists auto-ignition",
                  "Branched paraffins and aromatics score high",
                  "Indian regular petrol ~87 to 91",
                ],
              },
              right: {
                heading: "Cetane number (diesel)",
                items: [
                  "Cetane (n-C16H34) = 100 (ignites fast)",
                  "alpha-Methylnaphthalene = 0 (ignites slow)",
                  "High = short ignition delay, smooth",
                  "Straight paraffins score high",
                  "Indian diesel CN >= 48",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Mention the TEL ban",
              body: "When asked about octane improvers, list TEL but add that India banned leaded petrol in 2000 because of lead toxicity and catalyst poisoning. That sentence shows engineering judgement and earns a margin mark.",
            },
            keyTerms: [
              { term: "Octane number", definition: "The anti-knock rating of petrol, defined by iso-octane = 100 and n-heptane = 0; higher means more resistance to auto-ignition." },
              { term: "Cetane number", definition: "The ignition-quality rating of diesel, defined by cetane (C16H34) = 100 and alpha-methylnaphthalene = 0; higher means shorter ignition delay." },
              { term: "CNG", definition: "Compressed natural gas, 90-95% methane stored at 200-250 bar; CV ~8500 kcal/m^3, used for city transport." },
              { term: "LPG", definition: "Liquefied petroleum gas, a propane-butane mix stored as liquid under modest pressure; CV ~25000 kcal/m^3, used as domestic cooking fuel." },
            ],
            examQuestions: [
              {
                q: "Define octane number and cetane number with their reference fuels. Explain how the octane number of petrol is improved, mentioning one chemical additive that has been phased out in India. Compare CNG and LPG as fuels.",
                marks: 7,
                outline: [
                  "Octane number: iso-octane = 100, n-heptane = 0; higher = more anti-knock.",
                  "Cetane number: cetane (C16H34) = 100, alpha-methylnaphthalene = 0; higher = shorter ignition delay.",
                  "Inverse correlation: easy-igniting paraffins are low-octane, high-cetane.",
                  "Octane improvers: alkylation, isomerisation, reforming, MTBE, ethanol blend.",
                  "TEL (Pb(C2H5)4, 0.5 mL/L) banned in India in 2000 for on-road use.",
                  "CNG: ~95% methane at 200-250 bar, CV ~8500 kcal/m^3; city buses.",
                  "LPG: propane-butane at low pressure, CV ~25000 kcal/m^3; domestic cooking.",
                ],
              },
              {
                q: "What is the significance of a high cetane number in a diesel engine?",
                marks: 2,
              },
              {
                q: "Name two octane improvers other than TEL.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.6",
            title: "Combustion calculations: theoretical air and flue gas",
            body: [
              "Combustion is the rapid oxidation of the combustible elements of a fuel - carbon, hydrogen and sulphur - to carbon dioxide, water and sulphur dioxide, releasing the calorific value as heat. The stoichiometric or theoretical oxygen is the minimum mass of O2 required for complete combustion; the corresponding air, containing 23 percent oxygen by mass (21 percent by volume), is the theoretical air. Any air supplied beyond this is the excess air, expressed as a percentage of theoretical.",
              "The three stoichiometric equations are: C + O2 -> CO2 (12 kg C needs 32 kg O2, so 1 kg C needs 2.67 kg O2); 2 H2 + O2 -> 2 H2O (4 kg H needs 32 kg O2, so 1 kg H needs 8 kg O2); S + O2 -> SO2 (32 kg S needs 32 kg O2, so 1 kg S needs 1 kg O2). The oxygen already chemically combined in the fuel as O is credited at 1/8 of its mass as hydrogen equivalent (because 8 g oxygen neutralises 1 g hydrogen as water), so it is subtracted. Net O2 needed per kg fuel = (32/12 x C + 8 x H + 1 x S - O) where C, H, S, O are mass fractions.",
              "A worked example. A coal with ultimate analysis C 80 percent, H 5 percent, O 4 percent, S 2 percent, N 1 percent, ash 8 percent is burnt completely. Per kg of fuel: O2 for C = 0.80 x 32/12 = 2.133 kg; O2 for H = 0.05 x 8 = 0.400 kg; O2 for S = 0.02 x 1 = 0.020 kg; total O2 needed = 2.553 kg; subtract O already in fuel 0.04 kg; net O2 = 2.513 kg. Theoretical air = 2.513 / 0.23 = 10.92 kg air per kg of fuel, or about 11 kg. At NTP (air density 1.293 kg/m^3), this is 10.92 / 1.293 = 8.45 m^3 air per kg fuel.",
              "The flue gas is what leaves the stack: CO2 from carbon, H2O from hydrogen, SO2 from sulphur, N2 from the air (and from the fuel), and any excess O2 if excess air was used. The Orsat apparatus analyses flue gas volumetrically by absorbing CO2 in KOH, O2 in alkaline pyrogallol, and CO in ammoniacal cuprous chloride, reading the volumes in turn on a water-jacketed burette. A flue gas showing high CO2 and low O2 indicates efficient near-stoichiometric combustion; high O2 with low CO2 means too much excess air (heat carried out of the stack); the presence of CO indicates incomplete combustion and a waste of fuel.",
            ],
            bullets: [
              "Combustion: C, H, S oxidised to CO2, H2O, SO2; releases the fuel's calorific value.",
              "C: 12 kg C needs 32 kg O2 (2.67 kg O2 per kg C).",
              "H: 4 kg H needs 32 kg O2 (8 kg O2 per kg H).",
              "S: 32 kg S needs 32 kg O2 (1 kg O2 per kg S).",
              "Oxygen in fuel credited at 1/8 mass as hydrogen equivalent, subtracted.",
              "Air = O2 / 0.23 by mass; 1 kg air = ~0.77 m^3 at NTP (density 1.293 kg/m^3).",
              "Worked: C 80, H 5, O 4, S 2, N 1, ash 8 -> net O2 2.513 kg, air 10.92 kg per kg fuel.",
              "Orsat: KOH for CO2, alkaline pyrogallol for O2, ammoniacal Cu2Cl2 for CO.",
            ],
            codeExample: {
              language: "python",
              caption: "Theoretical air for complete combustion from ultimate analysis.",
              code: [
                "# Ultimate analysis as mass fractions (kg per kg fuel)",
                "C = 0.80; H = 0.05; O = 0.04; S = 0.02; N = 0.01; ash = 0.08",
                "",
                "# Stoichiometric oxygen per kg of fuel (kg)",
                "o2_C = C * 32 / 12   # 2.667 kg O2 per kg C",
                "o2_H = H * 8         # 8 kg O2 per kg H",
                "o2_S = S * 1         # 1 kg O2 per kg S",
                "o2_total = o2_C + o2_H + o2_S - O",
                "print(f'O2 needed = {o2_total:.3f} kg per kg fuel')",
                "",
                "# Theoretical air: air is 23% O2 by mass",
                "air_kg = o2_total / 0.23",
                "print(f'Theoretical air = {air_kg:.2f} kg per kg fuel')",
                "",
                "# Volume at NTP, air density 1.293 kg/m^3",
                "air_m3 = air_kg / 1.293",
                "print(f'Air at NTP = {air_m3:.2f} m^3 per kg fuel')",
              ].join("\n"),
            },
            diagram: {
              kind: "layers",
              title: "Stacking the theoretical air calculation",
              caption:
                "Bottom layer is the oxygen demand of each element; top is the air that supplies it.",
              layers: [
                { label: "Theoretical air = net O2 / 0.23", note: "23% O2 in air by mass" },
                { label: "Net O2 needed", note: "subtract O already in fuel" },
                { label: "O2 for H (8 x H)", note: "1 kg H needs 8 kg O2" },
                { label: "O2 for C (32/12 x C)", note: "1 kg C needs 2.67 kg O2" },
                { label: "O2 for S (1 x S)", note: "1 kg S needs 1 kg O2" },
              ],
            },
            callout: {
              type: "warning",
              title: "Do not forget the oxygen credit",
              body: "A common numerical slip is to forget that the oxygen chemically bound in the fuel already covers some of the hydrogen's demand. Always subtract the fuel's oxygen content (as mass fraction, not divided) from the gross oxygen demand before dividing by 0.23 for air.",
            },
            keyTerms: [
              { term: "Theoretical (stoichiometric) air", definition: "The minimum mass of air containing just enough O2 (23% by mass) for complete combustion of a fuel." },
              { term: "Excess air", definition: "Air supplied beyond the theoretical amount, expressed as a percentage of theoretical, to ensure complete burning." },
              { term: "Orsat apparatus", definition: "A volumetric flue-gas analyser absorbing CO2 in KOH, O2 in alkaline pyrogallol, and CO in ammoniacal cuprous chloride." },
              { term: "Flue gas", definition: "The gas leaving a combustion chamber, composed of CO2, H2O vapour, SO2, N2 and any excess O2 or unburnt CO." },
            ],
            examQuestions: [
              {
                q: "Calculate the minimum mass and volume of air required for complete combustion of 1 kg of a coal sample containing 80% C, 5% H, 4% O, 2% S, 1% N and 8% ash. Air contains 23% O2 by mass and has density 1.293 kg/m^3 at NTP.",
                marks: 7,
                outline: [
                  "Stoichiometric ratios: C needs 32/12, H needs 8, S needs 1 kg O2 per kg.",
                  "O2 for C = 0.80 x 32/12 = 2.133 kg.",
                  "O2 for H = 0.05 x 8 = 0.400 kg.",
                  "O2 for S = 0.02 x 1 = 0.020 kg.",
                  "Subtract O in fuel = 0.04 kg; net O2 = 2.513 kg per kg fuel.",
                  "Theoretical air = 2.513 / 0.23 = 10.92 kg per kg fuel.",
                  "Volume at NTP = 10.92 / 1.293 = 8.45 m^3 per kg fuel.",
                ],
              },
              {
                q: "Define excess air and state why some excess is used in practice.",
                marks: 2,
              },
              {
                q: "What does the Orsat apparatus measure and which absorbent is used for O2?",
                marks: 3,
              },
            ],
          },
        ],
      },
    },

    // =========================================================================
    // UNIT III - LUBRICANTS AND CEMENT
    // =========================================================================
    {
      number: 3,
      roman: "III",
      title: "Lubricants and Cement",
      summary:
        "The chemistry of friction and the chemistry of binding: lubricant classification, properties from viscosity index to aniline point, additives, the acidic-basic-neutral families of refractories, the raw materials and Bogue compounds of Portland cement, and the dry and wet manufacturing routes that end in setting and hardening.",
      chapter: {
        number: "03",
        title: "Lubricants and Cement",
        intro:
          "Unit III opens with friction and the functions of lubricants, classifies them as liquid, semi-solid and solid, then walks through viscosity, viscosity index, flash and fire points, cloud and pour points, aniline point, and the additive package that modern oils carry. It surveys refractories by chemical character - acidic, basic, neutral - and the properties that decide furnace choice. It closes with Portland cement: raw materials, Bogue's compounds (C3S, C2S, C3A, C4AF), dry and wet manufacture, and the chemistry of setting and hardening that turns concrete into RCC.",
        inOneBreath:
          "Friction resists relative motion (coefficient mu = F/N) and wear removes material from surfaces in contact; lubricants cut friction, carry away heat, prevent corrosion, seal and flush; they are liquid (mineral, synthetic oils), semi-solid (greases: soap + oil) or solid (graphite, MoS2); viscosity is resistance to flow (dynamic eta in poise, kinematic nu = eta/rho in stokes); viscosity index (VI) measures how viscosity falls with temperature (Pennsylvania = 100, Gulf = 0; high VI good); flash point is the lowest temperature at which oil vapour ignites momentarily, fire point where it burns for 5 seconds (fire > flash by 5-40 deg C); cloud point first wax on cooling, pour point lowest flowable temperature (~3 deg C above solidification); aniline point is the lowest temperature at which oil mixes with an equal volume of aniline (low = aromatic, good for rubber); additives include detergents, antioxidants, anti-wear ZDDP, EP additives (S, Cl, P), pour-point depressants and VI improvers; refractories withstand >1500 deg C, classified as acidic (SiO2), basic (MgO, dolomite) or neutral (alumina, chromite); Portland cement raw materials are calcareous (limestone, CaO 60-67%) and argillaceous (clay, SiO2 17-25%, Al2O3 3-8%, Fe2O3 0.5-6%); Bogue's compounds are alite C3S (30-50%, early strength), belite C2S (20-45%, ultimate strength), celite C3A (5-11%, flash set, retarded by gypsum), felite C4AF (5-13%); manufacturing dry (powder feed) or wet (slurry 30-40% water) ends in a 1500 deg C rotary kiln producing clinker, ground with 2-3% gypsum; setting is C3A hydration retarded by gypsum; hardening is C3S hydration to C-S-H gel and Ca(OH)2.",
        sections: [
          {
            number: "3.1",
            title: "Friction, wear and the functions of lubricants",
            body: [
              "Friction is the resistance to relative motion between two surfaces in contact. The coefficient of friction mu is the ratio of the friction force F to the normal load N - typical values are 0.1 to 0.4 for dry steel on steel. Friction both wastes energy as heat and causes wear, the progressive loss of material from the sliding surfaces by adhesion, abrasion, fatigue or corrosion. In an automotive engine, friction and wear can consume 1.5 to 3 percent of the fuel energy and limit the life of rings, bearings and cylinder liners.",
              "A lubricant reduces friction by interposing a film between the surfaces so that the asperities never touch. It carries five other functions: it dissipates the heat generated at the contact zone (cooling); it prevents corrosion by coating the metal with an oil film that excludes oxygen and water; it flushes wear particles and dirt away from the contact; it seals clearances, as piston rings rely on oil to seal combustion gases; and in hydraulic systems it transmits power. Different applications weight these functions differently: a turbine oil prizes cooling and rust prevention; a gearbox oil prizes anti-wear; a hydraulic fluid prizes power transmission.",
              "Lubricants are classified by physical state. Liquid lubricants are mineral oils refined from petroleum (the bulk of the market), synthetic oils (polyalphaolefins, esters, silicones for extreme temperature), and water-based emulsions (for metal-cutting coolants). Semi-solid lubricants are greases - a mineral oil thickened with a metallic soap (lithium, calcium, sodium stearate) to a consistency that stays put on a vertical surface; grease is used where oil would leak or be thrown off. Solid lubricants are graphite, molybdenum disulphide (MoS2) and PTFE powder, used in dry bearings, vacuum and space applications, and at temperatures above the decomposition point of oils.",
              "Three lubrication regimes describe the film behaviour. In hydrodynamic lubrication the surfaces are fully separated by a thick oil film (mu ~0.005) - this is the regime of journal bearings at full speed. Boundary lubrication occurs when the film is only molecules thick, asperities touch, and chemical additives carry the load (mu ~0.1) - this is the regime of engine start-up and high-load gears. Mixed lubrication is the transition between the two. Extreme-pressure (EP) lubricants use sulphur, chlorine or phosphorus additives that form a sacrificial solid film on the metal at high temperature to prevent scuffing.",
            ],
            bullets: [
              "Friction coefficient mu = F/N; ~0.1-0.4 for dry steel-on-steel.",
              "Wear mechanisms: adhesive, abrasive, fatigue, corrosive.",
              "Lubricant functions: reduce friction, cool, prevent corrosion, flush, seal, transmit power.",
              "Liquid: mineral oils (bulk), synthetic (PAO, ester, silicone), water-based cutting coolants.",
              "Semi-solid: greases = oil + soap thickener (Li, Ca, Na stearate).",
              "Solid: graphite, MoS2, PTFE - used in dry, vacuum, high-temperature service.",
              "Regimes: hydrodynamic (mu ~0.005), boundary (mu ~0.1), mixed.",
              "EP additives: S, Cl, P compounds form sacrificial films at high temperature.",
            ],
            table: {
              caption: "Lubricant classes and where each shines.",
              headers: ["Class", "Example", "Typical use", "Limit"],
              rows: [
                ["Liquid mineral oil", "SAE 20W-50", "Engine crankcase", "Decomposes above 250 deg C"],
                ["Liquid synthetic", "Polyalphaolefin", "Jet turbine, low temp", "Costly"],
                ["Semi-solid grease", "Lithium grease", "Wheel bearings", "Poor heat removal"],
                ["Solid lubricant", "MoS2, graphite", "Vacuum, dry bearings", "Cannot be renewed in situ"],
                ["Water-based emulsion", "Soluble cutting oil", "Machining coolant", "Corrosive to ferrous parts"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Choosing the lubrication regime",
              caption:
                "Pick the regime by speed and load; the friction coefficient falls two orders of magnitude across the tree.",
              start: "Bearing or sliding contact",
              branches: [
                { label: "high speed, low load", outcome: "hydrodynamic film, mu ~0.005 - plain journal bearings", good: true },
                { label: "high load, low speed", outcome: "boundary film, mu ~0.1 - engine start-up, gears", good: false },
                { label: "very high load / temp", outcome: "EP lubrication with S, Cl, P additives", good: false },
                { label: "oil decomposes or vacuum", outcome: "solid lubricant - graphite, MoS2, PTFE", good: false },
              ],
            },
            callout: {
              type: "tip",
              title: "List all six functions",
              body: "A 7-mark question on 'functions of lubricants' expects at least six: reduce friction, reduce wear, dissipate heat, prevent corrosion, flush debris, seal clearances, transmit power. Two-mark answers lose half the marks by stopping at friction.",
            },
            keyTerms: [
              { term: "Friction", definition: "The resistance to relative motion between two contacting surfaces, measured as the coefficient mu = F/N." },
              { term: "Hydrodynamic lubrication", definition: "A regime in which a thick oil film fully separates the moving surfaces, giving mu ~0.005." },
              { term: "Boundary lubrication", definition: "A regime where the film is only molecules thick and asperities touch; additives carry the load, mu ~0.1." },
              { term: "Grease", definition: "A semi-solid lubricant formed by thickening a mineral oil with a metallic soap (lithium, calcium or sodium stearate)." },
            ],
            examQuestions: [
              {
                q: "Define friction and wear. State the functions of a lubricant and classify lubricants with examples. Explain the three lubrication regimes.",
                marks: 7,
                outline: [
                  "Friction = resistance to relative motion; mu = F/N; causes heat and wear.",
                  "Wear: adhesive, abrasive, fatigue, corrosive loss of material.",
                  "Functions: reduce friction, cool, prevent corrosion, flush debris, seal, transmit power.",
                  "Classification: liquid (mineral, synthetic, water-based), semi-solid (grease), solid (graphite, MoS2).",
                  "Hydrodynamic regime: thick film, mu ~0.005, journal bearings.",
                  "Boundary regime: monolayer film, mu ~0.1, additives carry load, engine start-up.",
                  "Mixed regime is the transition; EP additives (S, Cl, P) handle very high loads.",
                ],
              },
              {
                q: "Why are solid lubricants preferred in vacuum or space applications?",
                marks: 2,
              },
              {
                q: "Name two metallic soaps used as grease thickeners.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.2",
            title: "Viscosity, viscosity index, flash and fire points",
            body: [
              "Viscosity is the resistance of a fluid to flow under an applied shear stress. The dynamic (or absolute) viscosity, eta, has units of poise (1 P = 0.1 Pa.s = 0.1 N.s/m^2); water at 20 deg C is about 1 centipoise. The kinematic viscosity, nu, is the ratio of dynamic viscosity to density, nu = eta/rho, with units of stokes (1 St = 10^-4 m^2/s) or centistokes (cSt, 1 cSt = 1 mm^2/s). An SAE 20W-50 engine oil has a kinematic viscosity near 17 cSt at 100 deg C; a heavy gear oil may be 100 cSt or more.",
              "Viscosity falls steeply as temperature rises - a 5 deg C rise can halve the viscosity of a light mineral oil - and this is bad for lubrication because the oil squeezes out at high temperature and barely flows at low temperature. The viscosity index (VI) quantifies this temperature sensitivity on a scale anchored by two reference oils: Pennsylvania crude (low sensitivity, defined VI = 100) and Gulf Coast crude (high sensitivity, defined VI = 0). A high-VI oil changes less with temperature and is preferred for engines that must start cold and run hot. Modern multigrade oils use polymeric VI improvers (polyisobutylene, polymethacrylate) to push VI above 100, even to 200.",
              "The flash point is the lowest temperature at which an oil gives off enough vapour to form an ignitable mixture with air, so that a small flame passed over the surface produces a momentary flash. The fire point is the lowest temperature at which the oil vapour burns for at least five seconds when the test flame is applied; it is usually 5 to 40 deg C above the flash point. Two test methods are used: the Cleveland open cup (COC) for heavy oils and the Pensky-Martens closed cup for lighter oils. A lubricating oil for an engine should have a flash point above 200 deg C and a fire point above 220 deg C to be fire-safe in service.",
              "Flash and fire points matter for safety and storage. A low flash point means the oil is volatile, will evaporate in service, and poses a fire risk in a hot engine room. Transport regulations classify oils by flash point: above 60 deg C the oil is 'combustible' and easier to ship; below 60 deg C it is 'flammable' with strict packaging. The values also diagnose oil contamination - a sudden drop in flash point signals dilution by unburnt fuel leaking past the rings into the crankcase, a common fault in petrol engines with poor cold-start mixture control.",
            ],
            bullets: [
              "Dynamic viscosity eta in poise (1 P = 0.1 Pa.s); water ~1 cP at 20 deg C.",
              "Kinematic viscosity nu = eta/rho in stokes (1 St = 10^-4 m^2/s).",
              "SAE 20W-50 ~17 cSt at 100 deg C; multigrade numbering uses winter (W) and 100 deg C.",
              "Viscosity falls ~half per 5 deg C rise for light oils - bad for lubrication.",
              "VI anchored: Pennsylvania = 100, Gulf = 0; high VI = small change with temperature.",
              "Multigrade VI improvers: polyisobutylene, polymethacrylate - push VI above 100.",
              "Flash point: lowest T at which oil vapour flashes momentarily with a flame.",
              "Fire point: lowest T at which vapour burns 5 s; usually 5-40 deg C above flash.",
            ],
            table: {
              caption: "Viscosity, VI and flash points of typical lubricants.",
              headers: ["Oil", "Viscosity at 100 deg C", "VI", "Flash point (deg C)"],
              rows: [
                ["SAE 30", "~11 cSt", "95", "220"],
                ["SAE 20W-50", "~17 cSt", "140", "230"],
                ["Gear oil GL-5 90", "~15 cSt", "95", "200"],
                ["Turbine oil ISO VG 46", "~5 cSt", "100", "210"],
                ["Silicone oil", "~50 cSt", "300+", "300"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "VI and temperature sensitivity of oils",
              caption:
                "Pick an oil by where it lands: high VI for engines spanning cold start to hot run.",
              axes: { x: "Temperature sensitivity (low to high)", y: "Viscosity (low to high)" },
              quadrants: [
                { label: "TL: low viscosity, low sensitivity", note: "synthetic PAO - jet engines, low temp" },
                { label: "TR: high viscosity, low sensitivity", note: "multigrade 20W-50 - car engines" },
                { label: "BL: low viscosity, high sensitivity", note: "light spindle oil - steady temp only" },
                { label: "BR: high viscosity, high sensitivity", note: "straight mineral gear oil - summer only" },
              ],
            },
            callout: {
              type: "warning",
              title: "Flash point and fire point are different",
              body: "Students often write them as one quantity. The flash point is the momentary ignition; the fire point sustains combustion for 5 s. Always quote both, and add that fire point is 5 to 40 deg C above flash point.",
            },
            keyTerms: [
              { term: "Dynamic viscosity", definition: "The resistance of a fluid to flow under shear stress, eta, in poise (1 P = 0.1 Pa.s)." },
              { term: "Kinematic viscosity", definition: "The ratio of dynamic viscosity to density, nu = eta/rho, in stokes (1 St = 10^-4 m^2/s)." },
              { term: "Viscosity index (VI)", definition: "A dimensionless scale anchored by Pennsylvania crude (100) and Gulf Coast crude (0) that measures how an oil's viscosity changes with temperature; high VI is good." },
              { term: "Flash point", definition: "The lowest temperature at which oil vapour ignites momentarily when a small flame is passed over the surface." },
            ],
            examQuestions: [
              {
                q: "Define viscosity, kinematic viscosity and viscosity index. Explain how the viscosity index is improved and why it matters in engine lubricants. Distinguish between flash point and fire point.",
                marks: 7,
                outline: [
                  "Dynamic viscosity eta (poise, 1 P = 0.1 Pa.s) is resistance to flow.",
                  "Kinematic viscosity nu = eta/rho (stokes, 1 St = 10^-4 m^2/s).",
                  "Viscosity falls with temperature; VI measures the rate of change.",
                  "Anchors: Pennsylvania crude = 100, Gulf Coast crude = 0.",
                  "High VI = small temperature sensitivity; preferred for cold-start to hot-run engines.",
                  "VI improvers (polyisobutylene, polymethacrylate) push VI above 100 in multigrade oils.",
                  "Flash point: momentary ignition of vapour; fire point: burns 5 s; fire > flash by 5-40 deg C.",
                ],
              },
              {
                q: "Why is a low-viscosity oil unsuitable for a heavy gearbox?",
                marks: 2,
              },
              {
                q: "State the units of dynamic and kinematic viscosity.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.3",
            title: "Cloud point, pour point, aniline point and additives",
            body: [
              "Cloud point and pour point describe low-temperature flow behaviour. The cloud point is the temperature at which wax first crystallises out of the oil as it is cooled, making it cloudy; for diesel and lubricating oils it sets the lower limit for filters, which clog on wax. The pour point is the lowest temperature at which the oil will still just flow under gravity - about 3 deg C above the temperature at which it solidifies completely. A winter diesel might have a cloud point of -10 deg C and a pour point of -18 deg C, set by the paraffin wax content; Arctic-grade diesel is dewaxed to pour at -40 deg C.",
              "Pour-point depressants (PPDs) are polymeric additives - polyalkyl methacrylates, alkylated naphthalenes - that co-crystallise with the wax and prevent it from forming the interlocking network that gels the oil. A few percent of PPD can drop the pour point by 20 to 30 deg C without changing the viscosity at operating temperature. They do not change the cloud point: the wax still comes out, but in smaller, less-entangled crystals.",
              "The aniline point is the lowest temperature at which equal volumes of the oil and freshly distilled aniline (C6H5NH2) are completely miscible. Aromatic hydrocarbons dissolve aniline readily, paraffins do not. A low aniline point therefore signals a high aromatic content; a high aniline point signals a paraffinic oil. The aniline point matters because aromatics are good solvents for rubber and additives, so rubber-processing oils are selected with low aniline points (below 60 deg C) to swell and plasticise rubber, while crankcase oils prefer a higher aniline point (above 90 deg C) so they do not attack seals and hoses.",
              "A modern lubricant is a formulated product, not just a base oil. Additives make up 5 to 25 percent of the finished oil. Detergents (calcium or magnesium sulphonates, phenates) neutralise acidic combustion products and prevent sludge deposition in engines. Dispersants (polyisobutenyl succinimides) keep soot and sludge particles suspended so they drain with the oil at change. Antioxidants (hindered phenols, aromatic amines, ZDDP) stop free-radical oxidation that thickens the oil. Anti-wear agents (ZDDP - zinc dialkyl dithiophosphate) form a sacrificial iron-phosphate-iron sulphide film on the metal. EP additives (sulphurised olefins, chlorinated paraffins, tricresyl phosphate) take over at high loads. Pour-point depressants and VI improvers complete the package.",
            ],
            bullets: [
              "Cloud point: temperature at which wax first appears on cooling; filters clog below it.",
              "Pour point: lowest temperature at which oil still flows; ~3 deg C above solidification.",
              "Pour-point depressants (PMA, alkylated naphthalene) drop pour point 20-30 deg C.",
              "PPDs do not change cloud point - wax still crystallises, in smaller particles.",
              "Aniline point: lowest T at which oil + aniline (equal volumes) mix completely.",
              "Low aniline point = aromatic oil (rubber-processing); high = paraffinic (crankcase).",
              "Additives (5-25% of oil): detergents, dispersants, antioxidants, anti-wear (ZDDP), EP.",
              "EP additives: sulphurised olefins, chlorinated paraffins, tricresyl phosphate.",
            ],
            table: {
              caption: "Lubricant additives and their jobs.",
              headers: ["Additive class", "Example compound", "Function"],
              rows: [
                ["Detergent", "Ca/Mg sulphonate", "Neutralise acids, prevent sludge"],
                ["Dispersant", "Polyisobutenyl succinimide", "Suspend soot and sludge"],
                ["Antioxidant", "Hindered phenol, aromatic amine", "Stop free-radical thickening"],
                ["Anti-wear", "ZDDP (zinc dialkyl dithiophosphate)", "Form sacrificial film on metal"],
                ["EP additive", "Sulphurised olefin, tricresyl phosphate", "Carry load at high temperature"],
                ["Pour-point depressant", "Polyalkyl methacrylate", "Drop low-temperature pour point"],
                ["VI improver", "Polyisobutylene, polymethacrylate", "Reduce viscosity loss with temperature"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "A finished lubricant is base oil plus a stack of additives",
              caption:
                "Each layer fixes one failure mode of the base oil; together they make a modern engine oil.",
              layers: [
                { label: "Base oil (mineral or synthetic, 75-95%)", note: "carries viscosity and lubrication" },
                { label: "VI improver (polyisobutylene)", note: "keeps viscosity steady from cold to hot" },
                { label: "Pour-point depressant (PMA)", note: "prevents wax gelling at low temperature" },
                { label: "Detergent + dispersant (Ca sulphonate, succinimide)", note: "neutralise acids, suspend soot" },
                { label: "Anti-wear + EP + antioxidant (ZDDP, TCP, phenol)", note: "protect metal, stop oxidation" },
              ],
            },
            callout: {
              type: "tip",
              title: "Quote the aniline point meaning",
              body: "The single sentence 'low aniline point = aromatic, good for rubber; high aniline point = paraffinic, safer for seals' carries the 2-mark definition and the 3-mark application in one line.",
            },
            keyTerms: [
              { term: "Cloud point", definition: "The temperature at which wax first crystallises out of an oil on cooling, making it cloudy." },
              { term: "Pour point", definition: "The lowest temperature at which an oil still flows under gravity; about 3 deg C above solidification." },
              { term: "Aniline point", definition: "The lowest temperature at which equal volumes of oil and aniline are completely miscible; low means aromatic, high means paraffinic." },
              { term: "ZDDP", definition: "Zinc dialkyl dithiophosphate, the primary anti-wear additive in engine oils, forming a sacrificial film on ferrous surfaces." },
            ],
            examQuestions: [
              {
                q: "Define cloud point, pour point and aniline point. Explain how the pour point is lowered by additives. List five important lubricant additives with their functions.",
                marks: 7,
                outline: [
                  "Cloud point: temperature at which wax first appears on cooling; clogs filters.",
                  "Pour point: lowest temperature at which oil still flows; ~3 deg C above solidification.",
                  "Aniline point: lowest T at which oil and aniline mix; low = aromatic, high = paraffinic.",
                  "Pour-point depressants (PMA, alkylated naphthalene) co-crystallise with wax, drop pour point 20-30 deg C.",
                  "Detergents (Ca sulphonate) neutralise acids; dispersants (succinimide) suspend soot.",
                  "Antioxidants (phenol, amine) stop oxidation; ZDDP forms anti-wear film.",
                  "EP additives (S, Cl, P) carry high loads; VI improvers (PIB) cut viscosity-temperature slope.",
                ],
              },
              {
                q: "Why is a rubber-processing oil selected with a low aniline point?",
                marks: 2,
              },
              {
                q: "Name the polymer used as a pour-point depressant.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.4",
            title: "Refractories: classification and properties",
            body: [
              "A refractory is a material that retains its strength at high temperatures, generally above 1500 deg C, and resists chemical attack by molten metals, slags and gases. Refractories line every metallurgical furnace, cement rotary kiln, glass tank and boiler combustion chamber. By chemical character they are classified as acidic, basic or neutral. Acidic refractories are rich in silica (SiO2 above 90 percent) and resist acidic slags; basic refractories are rich in magnesia (MgO) or dolomite (CaO.MgO) and resist basic slags; neutral refractories (alumina, chromite, carbon) resist both.",
              "Acidic refractories include silica bricks (SiO2 95 to 97 percent with 2 percent lime as a bond), fireclay bricks (aluminosilicate, 25 to 70 percent Al2O3) and ganister bricks. They are used in the roofs and walls of acid open-hearth furnaces, in glass-tank crowns, and in coke-oven walls. Their chief weakness is attack by basic slags rich in CaO and MgO, which flux the silica at high temperature. The PCE (pyrometric cone equivalent) of a silica brick is around cone 32 (1710 deg C).",
              "Basic refractories include magnesite bricks (MgO 85 to 95 percent), dolomite bricks (CaO + MgO), and chrome-magnesite (a blend of Cr2O3 and MgO). They line basic oxygen steelmaking converters (BOF), basic Bessemer (Thomas) converters, and copper and lead smelting furnaces where the slag is basic (CaO-rich) and would dissolve an acidic silica brick in hours. Magnesite bricks have very high refractoriness (PCE above cone 40, 1825 deg C) but poor thermal spalling resistance because of the large reversible thermal expansion of MgO.",
              "Neutral refractories include high-alumina bricks (Al2O3 above 70 percent), chromite bricks (FeO.Cr2O3), and carbon or silicon-carbide bricks. They sit where acidic and basic materials meet and neither family would survive - for example at the boundary between an acidic roof and a basic hearth. Carbon refractories (graphite) withstand 3000 deg C in reducing conditions and line blast-furnace hearths; silicon carbide (SiC) handles abrasive and high-conductivity duties such as kiln furniture. The key engineering properties are refractoriness (PCE), thermal conductivity, porosity, slag resistance and resistance to thermal spalling - the cracking caused by rapid temperature change that flakes pieces off the hot face.",
            ],
            bullets: [
              "Refractory: retains strength above 1500 deg C; resists slag and gas attack.",
              "Acidic: silica (SiO2 > 90%), fireclay (Al2O3 25-70%); resist acid slags.",
              "Basic: magnesite (MgO > 85%), dolomite, chrome-magnesite; resist basic slags.",
              "Neutral: high-alumina (Al2O3 > 70%), chromite, carbon, SiC; resist both acid and base.",
              "PCE (pyrometric cone equivalent) measures refractoriness in Orton cones.",
              "Silica PCE ~cone 32 (1710 deg C); magnesite ~cone 40 (1825 deg C).",
              "Thermal spalling: cracking from rapid temperature change; magnesite is poor.",
              "Use map: BOF uses basic; glass tank crown uses silica; blast-furnace hearth uses carbon.",
            ],
            table: {
              caption: "Refractory families by chemical character.",
              headers: ["Family", "Composition", "PCE (deg C)", "Typical use"],
              rows: [
                ["Silica (acidic)", "SiO2 > 95%", "~1710", "Glass tank crown, coke oven"],
                ["Fireclay (acidic)", "Al2O3 25-70%", "~1600-1700", "Boiler, low-duty furnace"],
                ["Magnesite (basic)", "MgO 85-95%", "~1825", "BOF steel converter"],
                ["Dolomite (basic)", "CaO + MgO", "~1770", "Cement rotary kiln"],
                ["High-alumina (neutral)", "Al2O3 > 70%", "~1790", "Boundary zone, ladle"],
                ["Carbon (neutral)", "C graphite", ">2000 reducing", "Blast furnace hearth"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Acidic versus basic refractories",
              caption:
                "Match the refractory to the slag - the wrong choice dissolves within hours.",
              left: {
                heading: "Acidic refractories",
                items: [
                  "Main oxide: SiO2 (silica, fireclay)",
                  "Resist acid slags rich in SiO2",
                  "Attacked by basic CaO/MgO slags",
                  "Use: glass tanks, acid open-hearth",
                  "PCE around cone 32 (1710 deg C)",
                ],
              },
              right: {
                heading: "Basic refractories",
                items: [
                  "Main oxide: MgO (magnesite, dolomite)",
                  "Resist basic slags rich in CaO",
                  "Attacked by acid SiO2 slags",
                  "Use: BOF, Thomas converter, cement kiln",
                  "PCE around cone 40 (1825 deg C)",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Quote the use with the chemistry",
              body: "When asked to classify refractories, do not stop at the chemistry. Pair each family with its furnace: silica for the acid open-hearth, magnesite for the basic oxygen furnace, dolomite for the cement kiln. That pairing is the answer the examiner is looking for.",
            },
            keyTerms: [
              { term: "Refractory", definition: "A material that retains mechanical strength above 1500 deg C and resists chemical attack by slags and gases in furnaces." },
              { term: "Acidic refractory", definition: "A silica-rich (SiO2 > 90%) refractory such as silica or fireclay brick that resists acidic slags." },
              { term: "Basic refractory", definition: "A magnesia-rich (MgO) or dolomite refractory that resists basic (CaO-rich) slags, used in steel converters." },
              { term: "Thermal spalling", definition: "Cracking and flaking of a refractory caused by rapid temperature changes that produce steep internal stress gradients." },
            ],
            examQuestions: [
              {
                q: "Classify refractories with examples and state the properties required of a good refractory. Justify the choice of a basic refractory for a basic oxygen steelmaking converter.",
                marks: 7,
                outline: [
                  "Define refractory: retains strength > 1500 deg C, resists slag and gas attack.",
                  "Acidic: silica (SiO2 > 95%), fireclay (Al2O3 25-70%); resist acid slags.",
                  "Basic: magnesite (MgO > 85%), dolomite, chrome-magnesite; resist basic slags.",
                  "Neutral: high-alumina, chromite, carbon, SiC; resist both.",
                  "Properties: refractoriness (PCE), thermal conductivity, porosity, slag resistance, spalling resistance.",
                  "BOF slag is basic (CaO-rich from limestone flux); an acidic silica brick would be fluxed and dissolve.",
                  "Therefore basic magnesite or dolomite bricks line the BOF; magnesite PCE ~cone 40 (1825 deg C).",
                ],
              },
              {
                q: "What is thermal spalling in a refractory?",
                marks: 2,
              },
              {
                q: "Name two neutral refractories.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.5",
            title: "Cement: composition, raw materials and Bogue's compounds",
            body: [
              "Portland cement is the hydraulic binder that, mixed with water, sand and aggregate, sets and hardens to concrete. It was patented by Joseph Aspdin in 1824 and named for its resemblance to Portland stone. The four main oxides - CaO, SiO2, Al2O3 and Fe2O3 - account for more than 95 percent of the cement. Typical oxide composition is CaO 60 to 67 percent, SiO2 17 to 25 percent, Al2O3 3 to 8 percent, Fe2O3 0.5 to 6 percent, plus MgO below 5 percent, SO3 around 2.5 percent from added gypsum, and small amounts of alkalis.",
              "Two classes of raw material supply these oxides. Calcareous materials rich in CaO are limestone, chalk or marble (all mostly CaCO3) and provide the calcium; they make up about 60 percent of the raw mix by mass. Argillaceous materials rich in SiO2, Al2O3 and Fe2O3 are clay, shale, slate or fly ash; they supply the silica, alumina and iron and make up the remaining 40 percent. To correct an imbalance the plant may add bauxite (Al2O3) or iron ore (Fe2O3) if the clay is deficient, or sand if silica is short. Gypsum (CaSO4.2H2O) at 2 to 3 percent is added at the final grinding stage, not as a raw material but to retard the setting.",
              "The four oxides do not exist as free oxides in finished cement; they combine during the 1400 to 1500 deg C sintering in the rotary kiln into four crystalline minerals called the Bogue compounds. Alite is tricalcium silicate, C3S (3CaO.SiO2), 30 to 50 percent of cement, responsible for early strength developed in the first 7 to 28 days. Belite is dicalcium silicate, C2S (2CaO.SiO2), 20 to 45 percent, slower hydrating and responsible for the gradual strength gain over months and years. Celite is tricalcium aluminate, C3A (3CaO.Al2O3), 5 to 11 percent, fast hydrating and the chief cause of flash set if not retarded by gypsum. Felite (the brownmillerite phase) is tetracalcium aluminoferrite, C4AF (4CaO.Al2O3.Fe2O3), 5 to 13 percent, contributing little to strength but lowering the clinkering temperature.",
              "The Bogue equations allow the cement chemist to estimate these mineral percentages from the oxide analysis: C3S = 4.071 CaO - 7.600 SiO2 - 6.718 Al2O3 - 1.430 Fe2O3 - 2.852 SO3; C2S = 2.867 SiO2 - 0.7544 C3S; C3A = 2.650 Al2O3 - 1.692 Fe2O3; C4AF = 3.043 Fe2O3. The C3A content is the most closely watched because it governs both setting behaviour and sulphate resistance - low-C3A (below 5 percent) cements resist sulphate attack in foundations and are designated sulphate-resistant Portland cement (SRPC).",
            ],
            bullets: [
              "Portland cement patented by Joseph Aspdin in 1824.",
              "Main oxides: CaO 60-67%, SiO2 17-25%, Al2O3 3-8%, Fe2O3 0.5-6%.",
              "Calcareous raw material: limestone, chalk, marble (CaCO3) - supplies CaO.",
              "Argillaceous raw material: clay, shale, slate - supplies SiO2, Al2O3, Fe2O3.",
              "Gypsum (CaSO4.2H2O) 2-3% added at finish grinding to retard set.",
              "Bogue compounds: C3S (30-50%, early strength), C2S (20-45%, ultimate strength).",
              "C3A (5-11%, flash set, retarded by gypsum); C4AF (5-13%, flux, low strength).",
              "Low-C3A (<5%) cements resist sulphate attack (SRPC grade).",
            ],
            table: {
              caption: "Bogue's compounds of Portland cement.",
              headers: ["Compound", "Formula", "Typical %", "Role"],
              rows: [
                ["Alite (C3S)", "3CaO.SiO2", "30-50%", "Early strength (7-28 days)"],
                ["Belite (C2S)", "2CaO.SiO2", "20-45%", "Ultimate strength (months-years)"],
                ["Celite (C3A)", "3CaO.Al2O3", "5-11%", "Flash set, retarded by gypsum"],
                ["Felite (C4AF)", "4CaO.Al2O3.Fe2O3", "5-13%", "Flux, low strength"],
                ["Gypsum", "CaSO4.2H2O", "2-3%", "Retarder added at finish grinding"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "Bogue compounds by abundance and role",
              caption:
                "Top tier gives early strength; bottom tier is the slow backbone that builds long-term strength.",
              tiers: [
                { label: "Alite C3S (30-50%)", note: "early strength, first 7-28 days" },
                { label: "Belite C2S (20-45%)", note: "slow hydration, ultimate strength" },
                { label: "Celite C3A (5-11%)", note: "flash set; retarded by gypsum" },
                { label: "Felite C4AF (5-13%)", note: "flux, low strength contribution" },
              ],
            },
            callout: {
              type: "tip",
              title: "C3A is the one to watch",
              body: "Whenever the question mentions setting time or sulphate resistance, write 'C3A causes flash set, retarded by gypsum' or 'low C3A (<5%) gives sulphate-resistant cement'. C3A is the most examined of the four Bogue compounds.",
            },
            keyTerms: [
              { term: "Portland cement", definition: "Hydraulic cement patented by Joseph Aspdin in 1824, made by sintering calcareous and argillaceous raw materials and grinding the clinker with gypsum." },
              { term: "Calcareous material", definition: "A calcium-rich raw material such as limestone, chalk or marble that supplies the CaO of cement." },
              { term: "Argillaceous material", definition: "A clay-rich raw material supplying the SiO2, Al2O3 and Fe2O3 of cement." },
              { term: "Bogue compounds", definition: "The four crystalline minerals of Portland cement - C3S, C2S, C3A and C4AF - formed by sintering the oxides." },
            ],
            examQuestions: [
              {
                q: "State the chemical composition of Portland cement. Describe the raw materials used and explain Bogue's compounds with their percentages and roles.",
                marks: 7,
                outline: [
                  "Composition: CaO 60-67%, SiO2 17-25%, Al2O3 3-8%, Fe2O3 0.5-6%.",
                  "Calcareous raw material: limestone/chalk (CaCO3) supplies CaO; ~60% of mix.",
                  "Argillaceous raw material: clay/shale supplies SiO2, Al2O3, Fe2O3; ~40% of mix.",
                  "Gypsum 2-3% added at finish grinding to retard set.",
                  "Bogue compounds formed by sintering at 1400-1500 deg C in rotary kiln.",
                  "Alite C3S (30-50%) - early strength; Belite C2S (20-45%) - ultimate strength.",
                  "Celite C3A (5-11%) - flash set, retarded by gypsum; Felite C4AF (5-13%) - flux, low strength.",
                ],
              },
              {
                q: "Why is gypsum added during the finish grinding of cement?",
                marks: 2,
              },
              {
                q: "Which Bogue compound is responsible for early strength development?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.6",
            title: "Cement manufacture, setting and hardening",
            body: [
              "Portland cement is made in two main routes, dry and wet, that differ in how the raw mix is fed to the kiln. In the dry process the crushed limestone and clay are ground together in a ball mill, dried, classified, and fed as a fine powder to the upper (cold) end of a 3 to 5 degree inclined rotary kiln, 60 to 150 m long and 3 to 6 m diameter. In the wet process the same materials are ground with water to a slurry of 30 to 40 percent moisture and pumped into the kiln; the slurry blends more homogeneously but wastes heat evaporating the water. Modern plants favour the dry process with a preheater and precalciner for fuel efficiency.",
              "Inside the kiln, four temperature zones process the mix. In the upper drying-preheating zone (up to 500 deg C) the raw mix loses free and combined water - clay dehydrates. In the calcination zone (600 to 900 deg C) limestone decomposes: CaCO3 -> CaO + CO2, releasing the bulk of the carbon dioxide from cement manufacture. In the burning or clinkering zone (1400 to 1500 deg C) the oxides partially melt and combine into the Bogue minerals - C3S, C2S, C3A and C4AF - forming hard grey nodules called clinker. The clinker drops into a cooler where air quenches it below 100 deg C, then is ground in a ball mill with 2 to 3 percent gypsum to give the final cement powder, typically 330 to 350 m^2/kg Blaine specific surface.",
              "Setting is the stiffening of cement paste from plastic to solid within a few hours; hardening is the gain of strength over days, months and years. Both come from hydration of the Bogue minerals with water. C3A hydrates fastest and would cause a violent flash set were it not for gypsum, which forms a temporary coating of ettringite (calcium sulpho-aluminate) on the C3A grains and slows the reaction to a manageable 60 minutes for the initial set and 10 hours for the final set (Vicat apparatus). The main strength comes from C3S: 2 C3S + 6 H2O -> C3S2H3 (calcium silicate hydrate, C-S-H gel) + 3 Ca(OH)2. The C-S-H gel grows as interlocking fibres that bind the sand and aggregate; Ca(OH)2 is a by-product that gives the paste its high pH (~12.5) and protects reinforcing steel from corrosion.",
              "Concrete is the composite of cement, sand, coarse aggregate and water, typically mixed in the volumetric ratio 1:2:4 (cement:sand:aggregate) with a water-to-cement ratio of 0.45 to 0.55 by mass. The compressive strength at 28 days is the standard grade; an M25 concrete reaches 25 N/mm^2. Reinforced cement concrete (RCC) embeds steel bars that carry tensile loads the concrete cannot; the high alkalinity of the Ca(OH)2 in the hydrated paste passivates the steel against rust, which is the chemical reason RCC works as a structural material.",
            ],
            bullets: [
              "Dry process: powder feed to kiln; wet process: slurry 30-40% water - dry is more fuel-efficient.",
              "Rotary kiln: 60-150 m long, 3-6 m diameter, inclined 3-5 degrees.",
              "Drying zone (to 500 deg C), calcination (600-900 deg C: CaCO3 -> CaO + CO2).",
              "Clinkering zone (1400-1500 deg C): oxides combine into C3S, C2S, C3A, C4AF.",
              "Clinker cooled, ground with 2-3% gypsum; Blaine surface 330-350 m^2/kg.",
              "Setting: C3A hydration retarded by gypsum (initial set 60 min, final 10 h).",
              "Hardening: 2 C3S + 6 H2O -> C-S-H gel + 3 Ca(OH)2; high pH protects steel.",
              "Concrete 1:2:4 mix, w/c 0.45-0.55; RCC uses steel rebars for tensile load.",
            ],
            table: {
              caption: "Temperature zones of a cement rotary kiln.",
              headers: ["Zone", "Temperature (deg C)", "Reaction", "Product"],
              rows: [
                ["Drying / preheating", "up to 500", "Loss of free and combined water", "Dehydrated clay"],
                ["Calcination", "600-900", "CaCO3 -> CaO + CO2", "Lime (CaO)"],
                ["Burning / clinkering", "1400-1500", "CaO + SiO2/Al2O3/Fe2O3 -> Bogue minerals", "Clinker nodules"],
                ["Cooling", "1500 to 100", "Quench", "Cooled clinker"],
                ["Finish grinding", "ambient", "Clinker + 2-3% gypsum ground", "Portland cement"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Cement manufacture from quarry to bag",
              caption:
                "Five stages take limestone and clay to a finished bag of cement powder.",
              stages: [
                { label: "Crush + grind limestone and clay", note: "ball mill; dry powder or wet slurry" },
                { label: "Feed to rotary kiln", note: "60-150 m long, inclined 3-5 deg" },
                { label: "Calcine at 600-900 deg C", note: "CaCO3 -> CaO + CO2" },
                { label: "Clinker at 1400-1500 deg C", note: "C3S, C2S, C3A, C4AF form" },
                { label: "Cool + grind with 2-3% gypsum", note: "Portland cement powder" },
              ],
            },
            callout: {
              type: "exam",
              title: "Write the C3S hydration reaction",
              body: "For setting and hardening questions, always write '2 C3S + 6 H2O -> C-S-H gel + 3 Ca(OH)2' and add that the high pH from Ca(OH)2 protects reinforcing steel. The reaction equation and the corrosion-protection sentence together are worth two marks.",
            },
            keyTerms: [
              { term: "Dry process", definition: "Cement manufacture in which the raw materials are ground and fed as a dry powder to the rotary kiln; more fuel-efficient than the wet process." },
              { term: "Clinker", definition: "The hard grey nodules of Bogue minerals formed in the burning zone at 1400-1500 deg C, later ground with gypsum to cement." },
              { term: "Setting", definition: "The stiffening of cement paste from plastic to solid within hours, driven by C3A hydration and retarded by gypsum." },
              { term: "C-S-H gel", definition: "Calcium silicate hydrate gel formed on hydration of C3S and C2S; the interlocking fibres give cement its strength." },
            ],
            examQuestions: [
              {
                q: "Describe the manufacture of Portland cement by the dry process. Explain the chemistry of setting and hardening, naming the responsible Bogue compounds and writing the key hydration reaction.",
                marks: 7,
                outline: [
                  "Raw materials limestone (calcareous) and clay (argillaceous) crushed and ground dry.",
                  "Powder fed to upper end of 60-150 m rotary kiln inclined 3-5 deg.",
                  "Drying (to 500 deg C), calcination (600-900 deg C: CaCO3 -> CaO + CO2).",
                  "Clinkering at 1400-1500 deg C forms Bogue minerals C3S, C2S, C3A, C4AF.",
                  "Clinker cooled and ground with 2-3% gypsum to cement.",
                  "Setting: C3A hydrates first; gypsum forms ettringite coat, retards to 60 min initial, 10 h final.",
                  "Hardening: 2 C3S + 6 H2O -> C-S-H gel + 3 Ca(OH)2; Ca(OH)2 gives pH 12.5, protects steel.",
                ],
              },
              {
                q: "Differentiate between the dry and wet processes of cement manufacture.",
                marks: 2,
              },
              {
                q: "Why is concrete reinforced with steel bars in RCC?",
                marks: 3,
              },
            ],
          },
        ],
      },
    },

    // =========================================================================
    // UNIT IV - POLYMERS AND POLYMERIZATION
    // =========================================================================
    {
      number: 4,
      roman: "IV",
      title: "Polymers and Polymerization",
      summary:
        "The chemistry of giant molecules: monomers, polymers and degree of polymerization; classification by origin, mechanism and thermal behaviour; free-radical addition and condensation mechanisms; copolymers; the important polymers from PVC to nylon; natural rubber, vulcanization and synthetic rubbers; composites and biodegradable polymers.",
      chapter: {
        number: "04",
        title: "Polymers and Polymerization",
        intro:
          "Unit IV begins with the vocabulary of polymer science - monomer, polymer, degree of polymerization, functionality, average molecular weights - then classifies polymers by origin, by polymerization mechanism (addition versus condensation) and by thermal behaviour (thermoplastic versus thermosetting). It walks through free-radical addition polymerization (initiation, propagation, termination) and step-growth condensation with examples. It introduces copolymers and surveys the important commercial polymers (PVC, PMMA, Teflon, nylon-6,6, bakelite, polyester). It closes with natural rubber and vulcanization, synthetic rubbers (Buna-S, Buna-N, neoprene), composites and biodegradable polymers.",
        inOneBreath:
          "A monomer is a small reactive molecule, a polymer a chain of many monomer units, and the degree of polymerization DP = MW polymer / MW monomer (polyethylene with MW 10^5 and ethylene MW 28 has DP ~3500); functionality is the number of bonds a monomer can form (bifunctional gives linear, trifunctional gives cross-linked); number-average Mn = sum NiMi / sum Ni, weight-average Mw = sum NiMi^2 / sum NiMi, and PDI = Mw/Mn >= 1 (1 means monodisperse); polymers classify by origin (natural cellulose, rubber; synthetic PE, PVC; semi-synthetic cellulose acetate), by mechanism (addition chain-growth no byproduct, condensation step-growth with byproduct H2O, HCl), and by thermal behaviour (thermoplastics PE, PVC, PS soften and recyclable; thermosets bakelite, epoxy set permanently cross-linked); free-radical addition has initiation (benzoyl peroxide -> 2 radicals at 60 deg C), propagation (radical adds monomer), termination (combination or disproportionation), and chain transfer; condensation polymerization releases small molecules - nylon-6,6 from hexamethylenediamine + adipic acid loses 2n H2O, bakelite from phenol + formaldehyde loses water, polyester (PET) from ethylene glycol + dimethyl terephthalate loses methanol; copolymers are random, alternating, block, graft; important polymers PVC (pipes, cable), PMMA (lenses, windows), Teflon (inert, non-stick), nylon-6,6 (fibres, bearings), bakelite (electrical), PET (bottles, fabric); natural rubber is cis-polyisoprene from Hevea latex, vulcanised with 3-5% sulphur at 140-160 deg C forming -S-S- cross-links; Buna-S (SBR, tyres), Buna-N (NBR, oil seals), neoprene (chloroprene); composites = matrix (polymer, metal, ceramic) + reinforcement (glass, carbon, Kevlar fibre); biodegradable polymers PHBV, PLA, PGA used in sutures and packaging.",
        sections: [
          {
            number: "4.1",
            title: "Monomers, polymers and degree of polymerization",
            body: [
              "A polymer is a high-molecular-weight substance built by the chemical linking of many small repeating units called monomers. The simplest example is polyethylene, where ethylene (CH2=CH2) opens its double bond and links into the chain ...-CH2-CH2-CH2-CH2-..., written -[CH2-CH2]n- with n the number of repeat units. A single polymer chain may carry thousands or millions of repeat units, giving molecular weights from 10^4 to over 10^6 g/mol - vastly larger than the small molecules of organic chemistry.",
              "The degree of polymerization, DP, is the average number of monomer units in a polymer chain. It is computed as DP = MW polymer / MW monomer. For polyethylene with a molecular weight of 10^5 g/mol and an ethylene monomer weighing 28 g/mol, DP is about 3500. A high DP is needed for useful mechanical properties: below a DP of about 100, polyethylene is a waxy grease; above 1000 it is a tough plastic; above 10^4 it is ultra-high-molecular-weight PE used in hip implants and ballistic vests.",
              "Functionality is the number of bonds a monomer can form when it polymerises. Bifunctional monomers (ethylene, vinyl chloride, styrene) give linear chains. Trifunctional monomers (glycerol with three -OH, or phenol with three reactive ring positions) can branch and ultimately cross-link into a three-dimensional network - the chemistry of thermosets. The choice of monomer functionality is therefore the chemist's first decision when designing a polymer for a property.",
              "Because polymerisation is a statistical process, a synthetic polymer is a mixture of chains of different lengths, not a single molecular weight. Two averages describe this distribution. The number-average molecular weight Mn = sum(Ni x Mi) / sum(Ni) counts each chain equally. The weight-average molecular weight Mw = sum(Ni x Mi^2) / sum(Ni x Mi) weights each chain by its mass, so heavy chains contribute more. The ratio Mw/Mn is the polydispersity index (PDI); it is always at least 1, and a value of 1 means a monodisperse sample. Mn governs colligative properties (osmotic pressure), Mw governs mechanical strength.",
            ],
            bullets: [
              "Monomer: small reactive molecule; polymer: chain of many linked monomers.",
              "Polyethylene: -[CH2-CH2]n- from ethylene CH2=CH2 opening the double bond.",
              "Degree of polymerization DP = MW polymer / MW monomer; PE MW 10^5 has DP ~3500.",
              "Below DP ~100 PE is grease; above 1000 tough plastic; above 10^4 UHMWPE.",
              "Functionality: bifunctional gives linear; trifunctional gives branched or cross-linked.",
              "Mn = sum(Ni x Mi)/sum(Ni); Mw = sum(Ni x Mi^2)/sum(Ni x Mi).",
              "Polydispersity index PDI = Mw/Mn >= 1; PDI = 1 means monodisperse.",
              "Mn governs colligative properties; Mw governs mechanical strength.",
            ],
            table: {
              caption: "DP and properties of polyethylene.",
              headers: ["DP", "MW (g/mol)", "State", "Typical use"],
              rows: [
                ["10", "~280", "Waxy grease", "No engineering use"],
                ["100", "~2800", "Soft wax", "Candles"],
                ["1000", "~28000", "Tough plastic", "Film, bottles"],
                ["5000", "~140000", "Pipe, moulding", "HDPE drums"],
                ["35000+", "~10^6", "Ultra-tough", "UHMWPE hip implants"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "From monomer to engineering polymer",
              caption:
                "Each arrow shows one decision that fixes a property: functionality, DP, and molecular weight distribution.",
              steps: [
                { label: "Choose monomer", note: "ethylene, vinyl chloride, styrene" },
                { label: "Set functionality", note: "bi- = linear; tri- = cross-linked" },
                { label: "Polymerise to target DP", note: "DP = MW polymer / MW monomer" },
                { label: "Control PDI", note: "narrow PDI for predictable strength" },
                { label: "Form and use", note: "film, fibre, moulded article" },
              ],
            },
            callout: {
              type: "tip",
              title: "Quote the DP and PDI definitions",
              body: "Always write 'DP = MW polymer / MW monomer' and 'PDI = Mw/Mn, with PDI >= 1' when asked about polymer molecular weight. These two equations are the heart of the 7-mark question on molecular weight averages.",
            },
            keyTerms: [
              { term: "Monomer", definition: "A small reactive molecule (e.g. ethylene, styrene) that links with others to form a polymer." },
              { term: "Degree of polymerization (DP)", definition: "The average number of monomer units in a polymer chain, DP = MW polymer / MW monomer." },
              { term: "Functionality", definition: "The number of bonds a monomer can form during polymerisation; bifunctional gives linear chains, trifunctional gives networks." },
              { term: "Polydispersity index", definition: "The ratio Mw/Mn; it is at least 1, with 1 meaning a monodisperse sample of uniform chain length." },
            ],
            examQuestions: [
              {
                q: "Define monomer, polymer and degree of polymerization. Distinguish between number-average and weight-average molecular weight and explain the polydispersity index. Compute the DP of polyethylene of MW 1.4 x 10^5.",
                marks: 7,
                outline: [
                  "Monomer = small reactive unit; polymer = chain of linked monomers.",
                  "Degree of polymerization DP = MW polymer / MW monomer.",
                  "Mn = sum(Ni x Mi)/sum(Ni); Mw = sum(Ni x Mi^2)/sum(Ni x Mi).",
                  "Mn counts chains equally; Mw weights by mass, so heavy chains dominate.",
                  "PDI = Mw/Mn >= 1; PDI = 1 means monodisperse.",
                  "For PE: monomer MW = 28 g/mol; DP = 1.4 x 10^5 / 28 = 5000.",
                  "Comment: DP 5000 corresponds to tough moulding-grade HDPE.",
                ],
              },
              {
                q: "What is the functionality of glycerol and how does it affect polymer structure?",
                marks: 2,
              },
              {
                q: "Why is Mw always greater than or equal to Mn?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.2",
            title: "Classification of polymers",
            body: [
              "Polymers are classified along three orthogonal axes: origin, polymerization mechanism and thermal behaviour. By origin they are natural (cellulose from plants, natural rubber from Hevea latex, proteins like keratin and silk), synthetic (polyethylene, PVC, nylon, polyester made in the lab) or semi-synthetic (chemically modified naturals - cellulose acetate for rayon and film, vulcanised rubber). Natural polymers were the only ones available until Baekeland's bakelite in 1907; today the synthetic family dominates engineering applications.",
              "By polymerization mechanism, addition (chain-growth) polymers form when a monomer with a double bond opens and links one unit at a time, with no byproduct: n CH2=CH2 -> -[CH2-CH2]n-. Examples are polyethylene, polypropylene, PVC, polystyrene, PMMA. Condensation (step-growth) polymers form when bifunctional monomers react with each other, stepwise, releasing a small molecule such as water, HCl, methanol or ammonia. Examples are nylon-6,6 (loss of water), bakelite (loss of water), polyesters (loss of methanol), polyurethanes. Addition polymers usually have a carbon backbone and grow fast; condensation polymers have heteroatoms in the backbone and grow more slowly.",
              "By thermal behaviour, thermoplastics soften on heating and re-solidify on cooling - they can be melted and re-moulded many times and are the recyclable family. Examples are polyethylene (LDPE and HDPE), polypropylene, PVC, polystyrene, PMMA, nylon. Thermosetting polymers, in contrast, undergo an irreversible chemical cross-linking reaction the first time they are heated, becoming an infusible three-dimensional network that will not melt again - it only chars. Examples are bakelite (phenol-formaldehyde), urea-formaldehyde, melamine-formaldehyde, epoxies and unsaturated polyesters. Thermosets cannot be recycled by re-melting.",
              "By end use a fourth classification splits polymers into plastics (moulded shapes), fibres (drawn into long thin filaments - nylon, polyester, acrylic), elastomers (recover high strain - natural rubber, SBR, neoprene), adhesives (epoxy, cyanoacrylate) and coatings (alkyd paints). The same polymer can appear in more than one class: nylon is both a fibre and an engineering plastic; polypropylene is a plastic, a fibre and a film. This four-axis classification (origin, mechanism, thermal, use) is the standard exam answer.",
            ],
            bullets: [
              "Origin: natural (cellulose, rubber, proteins), synthetic (PE, PVC, nylon), semi-synthetic (cellulose acetate).",
              "Mechanism: addition (chain-growth, no byproduct) vs condensation (step-growth, releases H2O/HCl).",
              "Addition polymers: PE, PP, PVC, PS, PMMA, Teflon - carbon backbone.",
              "Condensation polymers: nylon-6,6, bakelite, polyester, polyurethane - heteroatom backbone.",
              "Thermal: thermoplastics (PE, PP, PVC, PS, PMMA) soften and recyclable.",
              "Thermosets (bakelite, epoxy, UF, MF) cross-link irreversibly, do not re-melt.",
              "Use: plastics, fibres, elastomers, adhesives, coatings.",
              "Bakelite (1907) by Leo Baekeland was the first fully synthetic polymer.",
            ],
            table: {
              caption: "Classification matrix for common polymers.",
              headers: ["Polymer", "Origin", "Mechanism", "Thermal"],
              rows: [
                ["Polyethylene", "synthetic", "addition", "thermoplastic"],
                ["PVC", "synthetic", "addition", "thermoplastic"],
                ["Nylon-6,6", "synthetic", "condensation", "thermoplastic"],
                ["Bakelite", "synthetic", "condensation", "thermoset"],
                ["Natural rubber", "natural", "addition", "elastomer"],
                ["Cellulose acetate", "semi-synthetic", "condensation", "thermoplastic"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Two-axis polymer classification",
              caption:
                "Origin along the rows, mechanism along the columns - covers most exam classifications.",
              axes: { x: "Mechanism (addition to condensation)", y: "Origin (natural to synthetic)" },
              quadrants: [
                { label: "TL: natural addition", note: "natural rubber (cis-polyisoprene)" },
                { label: "TR: natural condensation", note: "cellulose, proteins" },
                { label: "BL: synthetic addition", note: "PE, PVC, PS, PMMA, Teflon" },
                { label: "BR: synthetic condensation", note: "nylon-6,6, bakelite, PET" },
              ],
            },
            callout: {
              type: "exam",
              title: "Cover all three axes",
              body: "An RGPV 7-mark question expects classifications by origin AND mechanism AND thermal behaviour in one answer. Sketching a small table (origin x mechanism, with thermal noted in parentheses) is the cleanest way to score all three.",
            },
            keyTerms: [
              { term: "Addition polymerization", definition: "Chain-growth polymerisation of a monomer with a double bond, one unit at a time, without byproduct - e.g. ethylene to polyethylene." },
              { term: "Condensation polymerization", definition: "Step-growth reaction between bifunctional monomers with the release of a small molecule such as water or HCl - e.g. nylon-6,6 from diamine + diacid." },
              { term: "Thermoplastic", definition: "A polymer that softens on heating and re-solidifies on cooling, so can be re-melted and re-moulded - e.g. PE, PVC, nylon." },
              { term: "Thermosetting polymer", definition: "A polymer that cross-links irreversibly on first heating into an infusible network that will not melt again - e.g. bakelite, epoxy." },
            ],
            examQuestions: [
              {
                q: "Classify polymers on the basis of origin, polymerization mechanism and thermal behaviour with two examples in each category.",
                marks: 7,
                outline: [
                  "Origin: natural (cellulose, rubber), synthetic (PE, PVC), semi-synthetic (cellulose acetate).",
                  "Mechanism: addition (PE, PVC, PMMA - no byproduct) vs condensation (nylon-6,6, bakelite - water lost).",
                  "Addition grows one monomer at a time; condensation grows stepwise between bifunctional monomers.",
                  "Thermal: thermoplastics (PE, PVC, PS) soften and re-melt; recyclable.",
                  "Thermosets (bakelite, epoxy, UF) cross-link irreversibly on first heating.",
                  "Mention Bakeland's bakelite (1907) as the first fully synthetic polymer.",
                  "Optionally add a fourth axis by use: plastics, fibres, elastomers, adhesives, coatings.",
                ],
              },
              {
                q: "Give one example of a semi-synthetic polymer.",
                marks: 2,
              },
              {
                q: "Why cannot thermosetting polymers be recycled by re-melting?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.3",
            title: "Free-radical addition polymerization",
            body: [
              "Addition polymerization proceeds by a chain-growth mechanism in three stages: initiation, propagation and termination. In initiation, an initiator decomposes into free radicals that attack the monomer's double bond. Benzoyl peroxide (C6H5COO)2 splits at 60 to 80 deg C into two benzoyloxy radicals, which may further decarboxylate to phenyl radicals; these add to the first monomer to start a chain. Other common initiators are azo-bis-isobutyronitrile (AIBN) and potassium persulphate (used in emulsion polymerisation of PVC).",
              "Propagation is the rapid, exothermic addition of monomer units to the growing radical chain. The radical end of the chain opens the double bond of a fresh monomer, the bond shifts to the new end, and the chain grows by one unit. The reaction is fast - thousands of additions per second - and the heat released (60 to 80 kJ per mole of monomer) must be removed by cooling or by carrying out the reaction in emulsion or suspension in water. The growing chain ends with a radical that keeps it alive until termination.",
              "Termination kills the radical. Two mechanisms operate. In combination, two growing radicals meet end-to-end and form a single dead chain with both ends incorporated - the resulting chain has the combined length of both. In disproportionation, one radical abstracts a hydrogen atom from another, leaving one chain with a saturated end and one with a terminal double bond; two dead chains result, each the original length. The ratio of combination to disproportionation depends on the monomer: styrene favours combination, methyl methacrylate favours disproportionation.",
              "Chain transfer is a side reaction in which the growing radical abstracts an atom from a monomer, solvent, or another polymer chain, starting a new radical there. To monomer or solvent it just starts a new chain (lowers MW); to a finished polymer chain it creates a branch, which lowers crystallinity and density - this is how low-density polyethylene (LDPE) gets its branches. Ziegler-Natta catalysts (TiCl3 with Al(C2H5)3, discovered 1953) bypass the radical route entirely and polymerise ethylene and propylene by a coordination-insertion mechanism that gives linear, stereoregular (isotactic) chains - the chemistry of high-density polyethylene (HDPE) and isotactic polypropylene.",
            ],
            bullets: [
              "Three stages: initiation, propagation, termination.",
              "Initiators: benzoyl peroxide (60-80 deg C), AIBN, potassium persulphate.",
              "Benzoyl peroxide: (C6H5COO)2 -> 2 C6H5COO. -> 2 C6H5. + 2 CO2.",
              "Propagation: radical opens monomer double bond, chain grows by one unit; fast.",
              "Heat released 60-80 kJ/mol; removed by cooling or emulsion/suspension in water.",
              "Termination: combination (one chain) or disproportionation (two chains).",
              "Chain transfer to polymer creates branches - the chemistry of LDPE.",
              "Ziegler-Natta (TiCl3 + AlEt3) gives linear isotactic HDPE and polypropylene.",
            ],
            codeExample: {
              language: "text",
              caption: "Styrene polymerisation by free-radical addition (mechanism sketch).",
              code: [
                "Initiation:",
                "  (C6H5COO)2  ->  2 C6H5COO.        (benzoyloxy radical)",
                "  C6H5COO.    ->  C6H5.  +  CO2      (decarboxylation)",
                "  C6H5.  +  CH2=CHC6H5  ->  C6H5-CH2-CH(-C6H5).",
                "",
                "Propagation (n times):",
                "  ...-CH2-CH(-C6H5).  +  CH2=CHC6H5",
                "      ->  ...-CH2-CH(-C6H5)-CH2-CH(-C6H5).",
                "",
                "Termination by combination:",
                "  two growing radicals meet end-to-end -> one dead chain",
                "Termination by disproportionation:",
                "  one abstracts H from other -> one saturated + one vinyl-terminated chain",
              ].join("\n"),
            },
            diagram: {
              kind: "cycle",
              title: "Free-radical addition polymerisation cycle",
              caption:
                "Initiation starts the chain, propagation grows it, termination ends it; chain transfer branches it.",
              steps: [
                { label: "Initiator decomposes to radicals", note: "benzoyl peroxide, 60-80 deg C" },
                { label: "Radical adds first monomer", note: "starts a living chain" },
                { label: "Propagation: thousands of monomers added", note: "60-80 kJ/mol released" },
                { label: "Chain transfer may branch", note: "abstracts H from finished chain" },
                { label: "Termination: combination or disproportionation", note: "dead chain(s)" },
                { label: "Back to fresh initiator for next chain", note: "until monomer exhausted" },
              ],
            },
            callout: {
              type: "exam",
              title: "Write the three stages by name",
              body: "Open the answer with the words 'Initiation, Propagation, Termination' and give one reaction for each. Examiners award structural marks for naming all three, even if you skip the side reactions. Add 'chain transfer' as a bonus for full marks.",
            },
            keyTerms: [
              { term: "Initiator", definition: "A compound such as benzoyl peroxide or AIBN that decomposes into free radicals to start addition polymerisation." },
              { term: "Propagation", definition: "The rapid addition of monomer units to the growing radical chain, transferring the radical to the new end each time." },
              { term: "Termination", definition: "The killing of the growing radical by combination (two chains join) or disproportionation (H transfer, two chains form)." },
              { term: "Ziegler-Natta catalyst", definition: "A coordination catalyst (TiCl3 + AlR3) that polymerises ethylene and propylene to linear, stereoregular polymers." },
            ],
            examQuestions: [
              {
                q: "Describe the mechanism of free-radical addition polymerization with reference to styrene, naming the three stages and giving reactions for each. Mention two initiators and the role of chain transfer.",
                marks: 7,
                outline: [
                  "Initiation: benzoyl peroxide decomposes to radicals at 60-80 deg C.",
                  "Write (C6H5COO)2 -> 2 C6H5COO. -> 2 C6H5. + 2 CO2.",
                  "Radical adds first styrene monomer: C6H5. + CH2=CHC6H5 -> C6H5-CH2-CH(-C6H5).",
                  "Propagation: radical opens successive monomer double bonds; 60-80 kJ/mol released.",
                  "Termination: combination (one chain) or disproportionation (two chains); styrene favours combination.",
                  "Chain transfer to polymer creates branches - basis of LDPE.",
                  "Mention AIBN, potassium persulphate as alternative initiators.",
                ],
              },
              {
                q: "What is the role of an initiator in addition polymerization?",
                marks: 2,
              },
              {
                q: "Name the catalyst used to make isotactic polypropylene.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.4",
            title: "Condensation polymerization and copolymers",
            body: [
              "Condensation polymerization is step-growth: bifunctional (or higher) monomers react with each other, joining two molecules at a time and releasing a small byproduct - water, HCl, methanol or ammonia. Each step is a discrete chemical reaction, so the chain grows more slowly than in addition polymerization, and high molecular weight is reached only at very high conversion (typically above 99 percent). The classic example is nylon-6,6, formed by reacting hexamethylenediamine H2N-(CH2)6-NH2 with adipic acid HOOC-(CH2)4-COOH: n of each combine to -[HN-(CH2)6-NH-CO-(CH2)4-CO]n- with the loss of 2n molecules of water.",
              "Bakelite, the first fully synthetic polymer (Baekeland, 1907), is a condensation thermoset of phenol and formaldehyde under acid or base catalyst. Formaldehyde bridges the ortho and para positions of phenol, first forming linear novolac chains and then, with more formaldehyde and heat, cross-linking into a three-dimensional network that cannot melt. The water lost in the reaction must be removed in the early stages or it foams the product. Bakelite is rigid, electrically insulating and heat-resistant - it dominates electrical switchgear and kitchenware handles.",
              "Polyesters form by condensation of a diol with a diacid or diester. Polyethylene terephthalate (PET), the polyester of Dacron and beverage bottles, is made by transesterification of ethylene glycol HO-(CH2)2-OH with dimethyl terephthalate, releasing methanol, then polycondensing at 280 deg C under vacuum to drive off more methanol and build molecular weight. Kevlar, the aromatic polyamide used in bulletproof vests, is a condensation product of terephthalic acid and p-phenylenediamine - the rigid aromatic rings give it exceptional tensile strength per unit mass.",
              "When two or more different monomers are polymerised together, the product is a copolymer. Four arrangements are recognised: random copolymers (monomers distributed statistically along the chain), alternating copolymers (strict A-B-A-B sequence), block copolymers (long runs of A followed by long runs of B), and graft copolymers (a backbone of A with branches of B). Styrene-butadiene rubber (SBR, Buna-S) is a random copolymer of styrene and butadiene - about 25 percent styrene gives tyre-grade rubber; ABS plastic is a graft copolymer of acrylonitrile, butadiene and styrene used for helmets and TV cabinets.",
            ],
            bullets: [
              "Condensation: step-growth, releases H2O/HCl/MeOH; needs >99% conversion for high MW.",
              "Nylon-6,6: hexamethylenediamine + adipic acid - 2n H2O; -[HN(CH2)6NHCO(CH2)4CO]n-.",
              "Bakelite: phenol + formaldehyde (acid/base) - water; thermoset, electrical use.",
              "PET: ethylene glycol + dimethyl terephthalate - methanol; polyester for bottles and fibre.",
              "Kevlar: terephthalic acid + p-phenylenediamine; aromatic polyamide for bulletproof vests.",
              "Copolymers: random, alternating, block, graft.",
              "SBR (Buna-S): random copolymer of styrene and butadiene for tyres.",
              "ABS: graft copolymer of acrylonitrile, butadiene, styrene - helmets, appliance bodies.",
            ],
            table: {
              caption: "Condensation polymers and their building blocks.",
              headers: ["Polymer", "Monomers", "Byproduct", "Use"],
              rows: [
                ["Nylon-6,6", "Hexamethylenediamine + adipic acid", "H2O", "Fibres, bearings"],
                ["Bakelite", "Phenol + formaldehyde", "H2O", "Switches, handles"],
                ["PET (Dacron)", "Ethylene glycol + dimethyl terephthalate", "CH3OH", "Bottles, fabric"],
                ["Kevlar", "Terephthalic acid + p-phenylenediamine", "H2O", "Bulletproof vests"],
                ["Polyurethane", "Diisocyanate + diol", "None", "Foams, coatings"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Addition versus condensation polymerization",
              caption:
                "Same chain length, very different chemistry: one builds carbon backbone fast, the other builds heteroatom backbone with byproduct.",
              left: {
                heading: "Addition (chain-growth)",
                items: [
                  "Monomer has C=C double bond",
                  "Initiator starts a radical",
                  "Grows one unit at a time",
                  "No byproduct released",
                  "Fast; PE, PVC, PS, PMMA",
                ],
              },
              right: {
                heading: "Condensation (step-growth)",
                items: [
                  "Monomers are bifunctional",
                  "Two ends react stepwise",
                  "Releases H2O, HCl, MeOH",
                  "Needs >99% conversion for high MW",
                  "Slower; nylon, bakelite, PET",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Always name the byproduct",
              body: "For every condensation polymer you cite, name the byproduct: nylon-6,6 loses water, bakelite loses water, PET loses methanol. The byproduct is the diagnostic feature that distinguishes condensation from addition in the exam.",
            },
            keyTerms: [
              { term: "Condensation polymerization", definition: "Step-growth reaction between bifunctional monomers releasing a small molecule (H2O, HCl, MeOH); e.g. nylon-6,6, bakelite, PET." },
              { term: "Nylon-6,6", definition: "A condensation polyamide from hexamethylenediamine and adipic acid, losing 2n H2O per repeat; a thermoplastic fibre and bearing material." },
              { term: "Bakelite", definition: "Phenol-formaldehyde condensation thermoset (Baekeland, 1907); cross-linked, rigid, electrically insulating." },
              { term: "Copolymer", definition: "A polymer built from two or more different monomers; arrangements are random, alternating, block or graft." },
            ],
            examQuestions: [
              {
                q: "Describe the mechanism of condensation polymerization with the reaction for nylon-6,6. Give two further examples of condensation polymers with their monomers and byproducts. Explain the four types of copolymers.",
                marks: 7,
                outline: [
                  "Condensation: bifunctional monomers react stepwise, release small byproduct.",
                  "Nylon-6,6: n H2N(CH2)6NH2 + n HOOC(CH2)4COOH -> -[HN(CH2)6NHCO(CH2)4CO]n- + 2n H2O.",
                  "Bakelite: phenol + formaldehyde under acid/base, water released; thermoset for switchgear.",
                  "PET: ethylene glycol + dimethyl terephthalate, methanol released; bottles and Dacron.",
                  "Copolymer types: random (SBR), alternating, block (SBS), graft (ABS).",
                  "Mention Kevlar (aromatic polyamide) for high strength.",
                  "Note high conversion (>99%) needed for useful molecular weight.",
                ],
              },
              {
                q: "Write the repeat unit and byproduct of PET.",
                marks: 2,
              },
              {
                q: "Distinguish between a block copolymer and a graft copolymer.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.5",
            title: "Important commercial polymers",
            body: [
              "Polyvinyl chloride (PVC) is the second-largest commodity plastic after polyethylene. Polymerised from vinyl chloride CH2=CHCl by suspension polymerisation with a peroxide initiator, it has the repeat unit -[CH2-CHCl]n- and a density of 1.4 g/cm^3. Rigid PVC pipes dominate building water supply and drainage; plasticised PVC, with 30 to 50 percent of a phthalate ester plasticiser, gives flexible cable insulation, medical tubing and vinyl upholstery. PVC is cheap, flame-retardant (self-extinguishing) and chemically inert, but it weather- yellows and emits HCl on combustion.",
              "Polymethyl methacrylate (PMMA, trade names Perspex, Lucite, Plexiglas) is polymerised from methyl methacrylate CH2=C(CH3)(COOCH3) by bulk polymerisation with AIBN. Its repeat unit is -[CH2-C(CH3)(COOCH3)]n-. PMMA is exceptionally transparent (92 percent light transmission), weather-resistant and rigid, so it is used for optical lenses, aircraft canopies, light fittings, signboards and aquarium windows. PMMA is a thermoplastic and can be cast, machined and cemented.",
              "Teflon or polytetrafluoroethylene (PTFE) is polymerised from tetrafluoroethylene CF2=CF2 by a persulphate initiator under pressure, giving -[CF2-CF2]n-. The strong C-F bond (485 kJ/mol) makes PTFE chemically inert to almost everything except molten alkali metals, electrically insulating, and so non-stick that nothing adheres to it. Its coefficient of friction against steel is 0.04 - among the lowest of any solid - which is why PTFE is used for non-stick cookware, bearings, seals, gaskets and Gore-Tex membranes. Its weakness is poor wear resistance and difficulty of processing: it cannot be melt-moulded, only sintered.",
              "Nylon-6,6 is the engineering polyamide from hexamethylenediamine and adipic acid. It melts at 264 deg C, has high tensile strength, toughness, abrasion resistance and self-lubricating properties, and is shaped into fibres (textiles, carpet, fishing line), bearings, gears, electrical connectors and automotive under-bonnet parts. Bakelite (phenol-formaldehyde) is the rigid thermoset for electrical switches, distributor caps and appliance handles. Polyesters (PET) make Dacron fibre for fabric and beverage bottles; the bottle grade needs high molecular weight and crystallinity to keep CO2 in carbonated drinks.",
            ],
            bullets: [
              "PVC: -[CH2-CHCl]n- from vinyl chloride; rigid pipes, plasticised cable insulation.",
              "PVC density 1.4 g/cm^3; self-extinguishing but emits HCl on burning.",
              "PMMA (Perspex, Lucite): -[CH2-C(CH3)(COOCH3)]n-; 92% light transmission.",
              "PMMA uses: lenses, aircraft canopies, signboards, aquarium windows.",
              "Teflon (PTFE): -[CF2-CF2]n-; C-F bond 485 kJ/mol; chemically inert.",
              "PTFE coefficient of friction ~0.04; non-stick cookware, bearings, Gore-Tex.",
              "Nylon-6,6 melts 264 deg C; fibres, bearings, gears, fishing line.",
              "Bakelite: phenol-formaldehyde thermoset for switches; PET for bottles and fabric.",
            ],
            table: {
              caption: "Important commercial polymers and their repeat units.",
              headers: ["Polymer", "Repeat unit", "Key property", "Use"],
              rows: [
                ["PVC", "-[CH2-CHCl]n-", "Cheap, rigid, self-extinguishing", "Pipes, cable insulation"],
                ["PMMA", "-[CH2-C(CH3)(COOCH3)]n-", "92% transparent", "Lenses, canopies"],
                ["PTFE (Teflon)", "-[CF2-CF2]n-", "Inert, mu ~0.04", "Non-stick, bearings"],
                ["Nylon-6,6", "-[HN(CH2)6NHCO(CH2)4CO]n-", "Tough, melts 264 deg C", "Fibres, gears"],
                ["Bakelite", "phenol-formaldehyde network", "Rigid, insulating", "Switches, handles"],
                ["PET", "-[OCH2CH2OOC-C6H4-CO]n-", "Crystalline, strong", "Bottles, Dacron"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "From monomer to engineered polymer article",
              caption:
                "Each layer is a design choice that fixes a property; the bottom is the monomer chemistry.",
              layers: [
                { label: "Article: pipe, lens, bearing, bottle", note: "engineered shape" },
                { label: "Processing: extrude, mould, sinter", note: "PVC extrusion, PMMA cast, PTFE sinter" },
                { label: "Polymer architecture", note: "MW, PDI, crystallinity" },
                { label: "Repeat unit", note: "PVC, PMMA, PTFE, nylon, PET" },
                { label: "Monomer chemistry", note: "vinyl chloride, MMA, TFE, etc." },
              ],
            },
            callout: {
              type: "exam",
              title: "Cite the repeat unit",
              body: "For every polymer you mention in a 7-mark answer, write its repeat unit in brackets: -[CH2-CHCl]n- for PVC, -[CF2-CF2]n- for Teflon, -[HN(CH2)6NHCO(CH2)4CO]n- for nylon-6,6. The repeat unit carries a mark each.",
            },
            keyTerms: [
              { term: "PVC", definition: "Polyvinyl chloride, -[CH2-CHCl]n-, from vinyl chloride; rigid pipes or plasticised cable insulation; self-extinguishing." },
              { term: "PMMA", definition: "Polymethyl methacrylate (Perspex, Lucite), -[CH2-C(CH3)(COOCH3)]n-; 92% transparent rigid thermoplastic for lenses and canopies." },
              { term: "Teflon (PTFE)", definition: "Polytetrafluoroethylene, -[CF2-CF2]n-; chemically inert and non-stick (mu ~0.04) from the strong C-F bond (485 kJ/mol)." },
              { term: "Nylon-6,6", definition: "Condensation polyamide from hexamethylenediamine and adipic acid; melts at 264 deg C, used for fibres, bearings and gears." },
            ],
            examQuestions: [
              {
                q: "Give the preparation, repeat unit, properties and uses of PVC, PMMA, Teflon, nylon-6,6 and bakelite.",
                marks: 7,
                outline: [
                  "PVC from vinyl chloride by suspension polymerisation; -[CH2-CHCl]n-; pipes, cables.",
                  "PMMA from methyl methacrylate + AIBN; -[CH2-C(CH3)(COOCH3)]n-; lenses, canopies.",
                  "Teflon from tetrafluoroethylene + persulphate; -[CF2-CF2]n-; non-stick, bearings.",
                  "Nylon-6,6 from diamine + adipic acid (condensation); melts 264 deg C; fibres, gears.",
                  "Bakelite from phenol + formaldehyde (condensation thermoset); switches, handles.",
                  "Cite at least one property per polymer (rigid, transparent, inert, tough, insulating).",
                  "Mention a use per polymer to complete the answer.",
                ],
              },
              {
                q: "Why is Teflon chemically inert?",
                marks: 2,
              },
              {
                q: "Write the repeat unit of nylon-6,6.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.6",
            title: "Rubber, vulcanization, composites and biodegradable polymers",
            body: [
              "Natural rubber is cis-polyisoprene, the polymer of isoprene (2-methyl-1,3-butadiene) by 1,4-addition: n CH2=C(CH3)-CH=CH2 -> -[CH2-C(CH3)=CH-CH2]n-. The cis configuration about the double bond gives the chains enough flexibility to coil and uncoil, which is the source of rubber's elasticity. Natural rubber is harvested as latex from the Hevea brasiliensis tree, coagulated with acid, and rolled into sheets; raw rubber is soft, tacky and ages badly, so it is vulcanised before use.",
              "Vulcanization, discovered by Charles Goodyear in 1839, heats rubber with 3 to 5 percent sulphur at 140 to 160 deg C. The sulphur forms -S-S- (and -S-S-S-) cross-links between chains, tying the coiled polymer into a loose three-dimensional network. The cross-links stop the chains from sliding past each other permanently, so the rubber returns to its original shape after deformation. Tensile strength rises from about 2 MPa for raw rubber to 20 to 30 MPa for vulcanised; the material keeps its elasticity across a wider temperature range. Adding more sulphur (30 to 50 percent) gives ebonite, a hard, rigid material used for tank linings and electrical insulators.",
              "Synthetic rubbers supplement natural rubber where oil resistance, weathering or specific duty cycles matter. Buna-S (SBR, styrene-butadiene rubber) is a random copolymer of 25 percent styrene and 75 percent butadiene by mass; it is the workhorse tyre tread and dominates motor-vehicle rubber. Buna-N (NBR, nitrile rubber) is a copolymer of acrylonitrile and butadiene; its nitrile groups make it oil-resistant, so it is used for fuel hoses, oil seals and gaskets. Neoprene is polychloroprene, with a Cl atom on each repeat unit, giving flame resistance and weathering resistance for wetsuits and conveyor belts. Thiokol (polysulphide rubber) seals fuel tanks and glass.",
              "Composites combine a matrix (polymer, metal or ceramic) with a reinforcement (fibre, whisker or particle) to give properties neither component has alone. Fibre-reinforced plastics (FRP) use glass, carbon or Kevlar fibre in an epoxy, polyester or vinyl-ester matrix; carbon-fibre-reinforced polymer (CFRP) is the material of aircraft fuselage panels, F1 monocoques and high-end bicycle frames, with a specific strength many times that of steel. Biodegradable polymers address the plastic-waste problem: polyhydroxybutyrate-co-valerate (PHBV) made by bacterial fermentation, polylactic acid (PLA) from corn-starch-derived lactic acid, and polyglycolic acid (PGA) are used in absorbable surgical sutures, drug-delivery matrices and compostable packaging, slowly hydrolysing back to natural metabolites in the body or in soil.",
            ],
            bullets: [
              "Natural rubber: cis-polyisoprene from Hevea latex; repeat -[CH2-C(CH3)=CH-CH2]n-.",
              "Vulcanization (Goodyear 1839): 3-5% sulphur, 140-160 deg C, forms -S-S- cross-links.",
              "Tensile strength rises from 2 MPa (raw) to 20-30 MPa (vulcanised).",
              "30-50% sulphur gives ebonite - hard, rigid, tank linings.",
              "Buna-S (SBR): 25% styrene + 75% butadiene; tyre treads.",
              "Buna-N (NBR): acrylonitrile + butadiene; oil-resistant fuel hoses and seals.",
              "Neoprene: polychloroprene; flame- and weather-resistant (wetsuits).",
              "Biodegradable: PHBV (bacterial), PLA (corn starch), PGA - sutures, packaging.",
            ],
            table: {
              caption: "Natural and synthetic rubbers.",
              headers: ["Rubber", "Monomer(s)", "Property", "Use"],
              rows: [
                ["Natural rubber", "Isoprene (cis-1,4)", "Elastic, ages poorly raw", "Tyres (after vulcanization)"],
                ["Buna-S (SBR)", "Styrene + butadiene", "Abrasion-resistant", "Tyre treads"],
                ["Buna-N (NBR)", "Acrylonitrile + butadiene", "Oil-resistant", "Fuel hoses, seals"],
                ["Neoprene", "Chloroprene", "Flame-, weather-resistant", "Wetsuits, belts"],
                ["Thiokol", "Ethylene dichloride + polysulphide", "Solvent-resistant", "Tank sealants"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Choosing a rubber by duty",
              caption:
                "Match the chemistry to the environment: oil, heat, fuel or just general wear.",
              start: "Rubber application",
              branches: [
                { label: "general wear, tyres", outcome: "Buna-S (SBR) - abrasion-resistant and cheap", good: true },
                { label: "oil and fuel contact", outcome: "Buna-N (NBR) - nitrile groups resist oil", good: true },
                { label: "flame and weather", outcome: "Neoprene - Cl atom gives resistance", good: true },
                { label: "high strength, elasticity", outcome: "Vulcanised natural rubber - cis-polyisoprene", good: true },
              ],
            },
            callout: {
              type: "tip",
              title: "Quote the vulcanization conditions",
              body: "Write '3 to 5 percent sulphur at 140 to 160 deg C, forming -S-S- cross-links' whenever vulcanization appears. The numbers and the -S-S- notation together carry the mark. Add that 30 to 50 percent sulphur gives ebonite for a bonus.",
            },
            keyTerms: [
              { term: "Natural rubber", definition: "cis-polyisoprene, repeat unit -[CH2-C(CH3)=CH-CH2]n-, harvested as latex from Hevea brasiliensis." },
              { term: "Vulcanization", definition: "Heating rubber with 3-5% sulphur at 140-160 deg C to form -S-S- cross-links, raising tensile strength from ~2 MPa to 20-30 MPa." },
              { term: "Buna-S (SBR)", definition: "Styrene-butadiene random copolymer rubber (25% styrene), the dominant tyre-tread material." },
              { term: "Biodegradable polymer", definition: "A polymer such as PHBV, PLA or PGA that hydrolyses in the body or in soil back to natural metabolites, used for sutures and packaging." },
            ],
            examQuestions: [
              {
                q: "What is natural rubber? Describe vulcanization with conditions and the chemical change produced. Give the monomers and one use each of Buna-S, Buna-N and neoprene. Name two biodegradable polymers.",
                marks: 7,
                outline: [
                  "Natural rubber = cis-polyisoprene from Hevea latex; repeat -[CH2-C(CH3)=CH-CH2]n-.",
                  "Vulcanization (Goodyear): 3-5% sulphur at 140-160 deg C, forms -S-S- cross-links.",
                  "Cross-links raise tensile strength from ~2 MPa to 20-30 MPa and widen working temperature.",
                  "Buna-S (SBR): styrene + butadiene; tyre treads.",
                  "Buna-N (NBR): acrylonitrile + butadiene; oil seals and fuel hoses.",
                  "Neoprene: chloroprene; flame- and weather-resistant, wetsuits.",
                  "Biodegradable: PHBV (bacterial) and PLA (corn-starch derived) - sutures and packaging.",
                ],
              },
              {
                q: "What is the role of sulphur in vulcanization?",
                marks: 2,
              },
              {
                q: "Why is Buna-N preferred over Buna-S for fuel hoses?",
                marks: 3,
              },
            ],
          },
        ],
      },
    },

    // =========================================================================
    // UNIT V - INSTRUMENTAL METHODS OF ANALYSIS
    // =========================================================================
    {
      number: 5,
      roman: "V",
      title: "Instrumental Methods of Analysis",
      summary:
        "The toolkit the engineer uses to assay water, fuel and polymer: spectroscopy fundamentals with the Beer-Lambert law, UV-visible and IR absorption, an introduction to NMR and mass spectrometry, the chromatography family from paper to HPLC, thermal analysis by TGA and DTA, and the pollution indices DO, BOD and COD that close the subject with green chemistry.",
      chapter: {
        number: "05",
        title: "Instrumental Methods of Analysis",
        intro:
          "Unit V opens with the electromagnetic spectrum and the Beer-Lambert law with a worked numerical, then walks through UV-visible spectroscopy (chromophores, instrumentation, Woodward-Fieser), IR spectroscopy (vibrational regions and FTIR), an introduction to 1H NMR (chemical shift, splitting) and mass spectrometry (molecular ion, fragmentation). It surveys chromatography from paper and TLC to GC and HPLC, then thermal analysis by TGA and DTA. It closes with water-pollution indices (DO by Winkler, BOD, COD) and the 12 principles of green chemistry.",
        inOneBreath:
          "Spectroscopy probes matter with electromagnetic radiation across the UV (200-400 nm), visible (400-800 nm), IR (2.5-25 micrometre, 4000-400 cm^-1) and radiofrequency (NMR) regions; the Beer-Lambert law A = epsilon x c x l = log10(I0/I) = -log(T) ties absorbance to concentration, with epsilon the molar absorptivity in L mol^-1 cm^-1, c in mol/L and l the path length in cm; for epsilon 5000, c 2x10^-5, l 1 cm, A = 0.1 and T = 10^-0.1 = 0.794; UV-visible spectroscopy sees electronic transitions (sigma->sigma* ~150 nm, n->sigma* 180-250, pi->pi* and n->pi* 200-700 nm) in chromophores like C=C, C=O, NO2; IR spectroscopy sees molecular vibrations when the dipole moment changes, with O-H/N-H stretch 4000-2500, C-H 3300-2700, C=O ~1700 cm^-1; 1H NMR has spin-1/2 protons absorbing RF in a strong magnetic field, chemical shift delta (ppm) referenced to TMS at 0, splitting by the n+1 rule; mass spectrometry ionises the molecule at 70 eV and gives m/z peaks with M+ the molecular ion and isotope peaks M+1 (13C), M+2 (34S, 37Cl, 81Br); chromatography separates by partition between stationary and mobile phases - paper Rf = spot/solvent front, TLC on silica, GC with FID/TCD detectors, HPLC at 100-300 bar with UV detector; TGA plots mass vs temperature, DTA plots delta T between sample and reference; DO by Winkler (MnSO4 + NaOH -> MnO(OH)2, then KI + H2SO4 + Na2S2O3), BOD is 5-day oxygen demand at 20 deg C, COD uses K2Cr2O7 + H2SO4 reflux; green chemistry has 12 principles including atom economy, safer solvents and renewable feedstocks.",
        sections: [
          {
            number: "5.1",
            title: "Spectroscopy fundamentals and the Beer-Lambert law",
            body: [
              "Spectroscopy is the study of the interaction of electromagnetic radiation with matter. The electromagnetic spectrum is divided into regions by wavelength: ultraviolet (UV, 200 to 400 nm), visible (400 to 800 nm), infrared (IR, 2.5 to 25 micrometre, equivalent to 4000 to 400 cm^-1), microwave, and radiofrequency (RF, used in NMR). Each region excites a different molecular motion: UV-visible excites electronic transitions, IR excites molecular vibrations, RF flips nuclear spins in a magnetic field. The choice of region is the analyst's first decision when designing a method.",
              "When a beam of monochromatic light of intensity I0 passes through a sample of path length l and concentration c, the transmitted intensity I is smaller because the sample absorbs part of the light. Two laws combine to describe the loss. Lambert's law says the fractional loss is independent of intensity and proportional to path length; Beer's law says it is proportional to concentration. Together they give the Beer-Lambert law: A = epsilon x c x l = log10(I0 / I) = -log10(T), where A is absorbance (dimensionless), epsilon is the molar absorptivity in L mol^-1 cm^-1, c is concentration in mol/L, l is path length in cm, and T = I/I0 is transmittance.",
              "A worked example fixes the formula. A solution of a coloured complex has molar absorptivity epsilon = 5000 L mol^-1 cm^-1 at 510 nm. A 2.5 x 10^-5 mol/L solution in a 1 cm cuvette gives A = 5000 x 2.5 x 10^-5 x 1 = 0.125; transmittance T = 10^-0.125 = 0.750, so 75 percent of the light passes through. If the same solution is diluted to half its concentration (1.25 x 10^-5 mol/L), the absorbance halves to 0.0625 - the linear dependence on concentration that makes Beer-Lambert the workhorse of quantitative analysis.",
              "Deviations from Beer-Lambert appear at high concentration (where solute-solute interactions change epsilon), in the presence of stray light in the instrument, and when the solute dissociates, associates, or reacts with the solvent (chemical deviation). Practical spectrophotometry therefore restricts measurements to absorbance between 0.1 and 1.0 (transmittance 10 to 80 percent), where the calibration curve stays linear. The Python snippet below takes epsilon, c and l and returns absorbance and transmittance, and inverts the calculation to find concentration from a measured absorbance.",
            ],
            bullets: [
              "EM regions: UV 200-400 nm, visible 400-800 nm, IR 2.5-25 micrometre, RF for NMR.",
              "UV-visible: electronic transitions; IR: vibrations; RF: nuclear spin flips.",
              "Beer-Lambert: A = epsilon x c x l = log10(I0/I) = -log10(T).",
              "Units: epsilon in L mol^-1 cm^-1, c in mol/L, l in cm, T = I/I0.",
              "Worked: epsilon 5000, c 2.5 x 10^-5, l 1 cm -> A = 0.125, T = 0.750.",
              "Linear in c: doubling c doubles A; basis of quantitative analysis.",
              "Deviations: high concentration, stray light, dissociation/association.",
              "Working range A = 0.1 to 1.0 (T = 10 to 80 percent) for linearity.",
            ],
            codeExample: {
              language: "python",
              caption: "Apply the Beer-Lambert law: absorbance to concentration and back.",
              code: [
                "import math",
                "",
                "# Beer-Lambert: A = epsilon * c * l ; T = 10**(-A)",
                "epsilon = 5000.0    # L mol^-1 cm^-1",
                "c       = 2.5e-5    # mol/L",
                "l       = 1.0       # cm",
                "",
                "A = epsilon * c * l",
                "T = 10.0 ** (-A)",
                "print(f'Absorbance A = {A:.4f}')",
                "print(f'Transmittance T = {T:.4f} ({T*100:.2f}%)')",
                "",
                "# Inverse: find concentration from a measured absorbance",
                "A_measured = 0.420",
                "c_from_A = A_measured / (epsilon * l)",
                "print(f'Concentration from A={A_measured}: {c_from_A:.3e} mol/L')",
              ].join("\n"),
            },
            diagram: {
              kind: "flow",
              title: "Beer-Lambert experiment from lamp to readout",
              caption:
                "Each block is one component of a single-beam spectrophotometer; the working equation ties them together.",
              steps: [
                { label: "Source lamp (tungsten / deuterium)", note: "broadband white or UV" },
                { label: "Monochromator (prism or grating)", note: "select one wavelength" },
                { label: "Sample cuvette (l = 1 cm)", note: "absorbs part of the light" },
                { label: "Detector (photomultiplier)", note: "measures transmitted I" },
                { label: "Readout A = log10(I0/I)", note: "Beer-Lambert applied" },
              ],
            },
            callout: {
              type: "exam",
              title: "Quote the Beer-Lambert equation",
              body: "Write A = epsilon x c x l = log10(I0/I) = -log10(T) on the first line of any spectroscopy numerical. Examiners look for the equation, the units of epsilon, and the explicit log form - all three together carry the formula mark.",
            },
            keyTerms: [
              { term: "Electromagnetic spectrum", definition: "The continuum of radiation classified by wavelength: UV 200-400 nm, visible 400-800 nm, IR 2.5-25 micrometre, RF for NMR." },
              { term: "Beer-Lambert law", definition: "A = epsilon x c x l = log10(I0/I) = -log10(T), relating absorbance to molar absorptivity, concentration and path length." },
              { term: "Molar absorptivity (epsilon)", definition: "The absorbance of a 1 mol/L solution in a 1 cm path, in L mol^-1 cm^-1; a wavelength-specific constant for each species." },
              { term: "Transmittance T", definition: "The fraction of incident light transmitted, T = I/I0; absorbance A = -log10(T)." },
            ],
            examQuestions: [
              {
                q: "State the Beer-Lambert law and explain each term with units. A solution of a complex (epsilon = 5000 L mol^-1 cm^-1 at 510 nm) has concentration 2.5 x 10^-5 mol/L in a 1 cm cuvette. Calculate the absorbance and percent transmittance. Mention two causes of deviation from the law.",
                marks: 7,
                outline: [
                  "State the law: A = epsilon x c x l = log10(I0/I) = -log10(T).",
                  "Define epsilon (L mol^-1 cm^-1), c (mol/L), l (cm), T = I/I0.",
                  "Substitute: A = 5000 x 2.5 x 10^-5 x 1 = 0.125.",
                  "T = 10^-0.125 = 0.750 = 75.0 percent.",
                  "Note the linear dependence of A on c, the basis of quantitative analysis.",
                  "Deviations: high concentration (solute-solute interaction changes epsilon).",
                  "Deviations: stray light in the instrument; chemical dissociation/association.",
                ],
              },
              {
                q: "Why is spectroscopy usually carried out in the absorbance range 0.1 to 1.0?",
                marks: 2,
              },
              {
                q: "What is molar absorptivity and what are its units?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.2",
            title: "UV-visible spectroscopy",
            body: [
              "UV-visible spectroscopy probes electronic transitions in molecules. When a photon of energy h x nu matches the gap between two electronic energy levels, the molecule absorbs it and an electron jumps from a bonding or non-bonding orbital to an antibonding one. Four transitions matter: sigma to sigma* (~150 nm, far UV, saturated molecules), n to sigma* (~180 to 250 nm, alcohols, ethers, amines), pi to pi* (~200 to 700 nm, alkenes, aromatics, carbonyls) and n to pi* (~250 to 700 nm, carbonyls, nitro). The last two fall in the near-UV and visible and are the useful ones.",
              "A chromophore is a functional group with a pi to pi* or n to pi* transition in the accessible range: C=C, C=O, NO2, N=N, the aromatic ring. An auxochrome is a saturated group with a lone pair that does not itself absorb in the near-UV but shifts the chromophore's lambda_max when attached: -OH, -NH2, -Cl, -OR. Conjugation extends the chromophore and shifts lambda_max to longer wavelength (a bathochromic or red shift) because the pi to pi* gap shrinks - butadiene absorbs at 217 nm versus ethylene at 170 nm, and beta-carotene with 11 conjugated double bonds absorbs in the visible at 450 nm, giving it an orange colour.",
              "A UV-visible spectrophotometer has five parts. The source is a deuterium lamp for the UV (200 to 400 nm) and a tungsten-halogen lamp for the visible (400 to 800 nm), switched automatically. The monochromator is a prism or diffraction grating that selects a narrow band of wavelengths (bandpass 1 to 2 nm). The sample compartment holds matched quartz cuvettes for UV (glass absorbs below 350 nm) or glass cuvettes for the visible, with a reference cuvette of pure solvent. The detector is a photomultiplier tube or photodiode array. The readout displays absorbance versus wavelength - the absorption spectrum.",
              "Applications cover both qualitative and quantitative work. Qualitatively, the lambda_max and the band shape identify the chromophore; Woodward-Fieser rules estimate the lambda_max of dienes and enones from structural contributions, allowing structure confirmation of an unknown. Quantitatively, Beer-Lambert converts absorbance to concentration at the lambda_max; this is how a water analyst measures residual chlorine (DPD method, 530 nm), nitrate in drinking water (220 nm) or iron by the 1,10-phenanthroline complex (510 nm). Kinetics measurements track the disappearance of a reactant's absorbance over time, giving the rate constant directly.",
            ],
            bullets: [
              "Four transitions: sigma->sigma* (~150 nm), n->sigma* (180-250), pi->pi* and n->pi* (200-700 nm).",
              "Chromophores: C=C, C=O, NO2, N=N, aromatic ring - absorb in near-UV/visible.",
              "Auxochromes: -OH, -NH2, -Cl, -OR - shift lambda_max without absorbing themselves.",
              "Conjugation red-shifts: ethylene 170 nm, butadiene 217 nm, beta-carotene 450 nm.",
              "Source: deuterium (UV) + tungsten-halogen (visible); monochromator grating.",
              "Cuvettes: quartz for UV (glass absorbs below 350 nm), glass for visible.",
              "Detector: photomultiplier or photodiode array.",
              "Applications: residual Cl2 (DPD 530 nm), NO3- (220 nm), Fe (phenanthroline 510 nm).",
            ],
            table: {
              caption: "Electronic transitions and their wavelengths.",
              headers: ["Transition", "Wavelength (nm)", "Typical group", "Region"],
              rows: [
                ["sigma -> sigma*", "~150", "C-C, C-H", "Far UV"],
                ["n -> sigma*", "180-250", "-OH, -NH2, -Cl", "Near UV"],
                ["pi -> pi*", "200-700", "C=C, C=O, aromatic", "Near UV / visible"],
                ["n -> pi*", "250-700", "C=O, NO2, N=N", "Near UV / visible"],
                ["Charge transfer", "300-700", "Fe(III)-SCN", "Visible"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Anatomy of a UV-visible spectrophotometer",
              caption:
                "Five blocks from lamp to readout; the same layout reappears in IR with different source and detector.",
              layers: [
                { label: "Source: deuterium (UV) + tungsten-halogen (visible)", note: "broadband emission" },
                { label: "Monochromator: grating or prism", note: "selects 1-2 nm band" },
                { label: "Sample: matched quartz (UV) / glass (visible) cuvettes", note: "1 cm path" },
                { label: "Detector: photomultiplier or photodiode array", note: "measures transmitted I" },
                { label: "Readout: absorbance vs wavelength", note: "the absorption spectrum" },
              ],
            },
            callout: {
              type: "exam",
              title: "Pair the cuvette with the region",
              body: "Always write 'quartz cuvette for UV, glass for visible'. Glass absorbs below 350 nm, so a glass cuvette ruins a UV measurement - a 1-mark slip examiners watch for.",
            },
            keyTerms: [
              { term: "Chromophore", definition: "A functional group with a pi->pi* or n->pi* transition in the near-UV or visible, such as C=C, C=O or NO2." },
              { term: "Auxochrome", definition: "A saturated group with a lone pair (-OH, -NH2, -Cl, -OR) that shifts a chromophore's lambda_max without absorbing itself." },
              { term: "Bathochromic (red) shift", definition: "A shift of lambda_max to longer wavelength, typically caused by extending conjugation." },
              { term: "Lambda_max", definition: "The wavelength of maximum absorbance of a chromophore, used as the analytical wavelength for Beer-Lambert quantification." },
            ],
            examQuestions: [
              {
                q: "Explain the principle of UV-visible spectroscopy with the four types of electronic transitions. Distinguish between chromophore and auxochrome with examples. Describe the instrumentation in five blocks.",
                marks: 7,
                outline: [
                  "Principle: photon energy matches electronic gap; electron jumps to antibonding orbital.",
                  "Transitions: sigma->sigma* (~150 nm), n->sigma* (180-250), pi->pi* (200-700), n->pi* (250-700).",
                  "Chromophore: group with accessible transition - C=C, C=O, NO2, aromatic.",
                  "Auxochrome: -OH, -NH2, -Cl shift lambda_max without absorbing themselves.",
                  "Conjugation red-shifts lambda_max (ethylene 170 -> butadiene 217 nm).",
                  "Instrument: source (D2 + W), monochromator, cuvette (quartz UV / glass visible), detector (PMT), readout.",
                  "Application: residual chlorine by DPD at 530 nm, nitrate at 220 nm, Fe by phenanthroline at 510 nm.",
                ],
              },
              {
                q: "Why must a quartz cuvette be used for measurements below 350 nm?",
                marks: 2,
              },
              {
                q: "Name two auxochromes and state their effect on lambda_max.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.3",
            title: "Infrared spectroscopy",
            body: [
              "Infrared spectroscopy probes molecular vibrations. A molecule is not rigid: its bonds stretch, bend, rock, wag and twist like springs with masses on the ends. When the frequency of incoming IR radiation matches one of these vibrational frequencies, the molecule absorbs the photon and the vibrational amplitude increases - but only if the vibration changes the molecular dipole moment. Symmetric vibrations of homonuclear bonds (N2, O2, the C=C in ethylene) are IR-inactive; asymmetric vibrations and polar bonds (C=O, O-H, C-Cl) are IR-active.",
              "The IR spectrum is reported as percent transmittance versus wavenumber in cm^-1, from 4000 to 400 cm^-1 (the mid-IR). Three regions are read in turn. The functional group region (4000 to 2500 cm^-1) holds X-H stretches: O-H and N-H near 3300 cm^-1 (broad for hydrogen-bonded O-H), C-H 2700 to 3300 (aldehyde C-H near 2700, sp3 C-H near 2900, sp2 near 3100, sp near 3300). The triple and double bond region (2500 to 1500 cm^-1) holds C=C near 1640, C=O near 1700 (very diagnostic - ketones 1715, aldehydes 1725, acids 1710, esters 1735, amides 1650), C=N near 1650 and C triple bond C near 2100. The fingerprint region (1500 to 400 cm^-1) is the molecule's signature.",
              "Modern instruments are Fourier-transform IR (FTIR). A Michelson interferometer splits the broadband IR beam into two paths of varying length, recombines them, and records an signal - an interferogram - as a function of mirror position. A computer takes the Fourier transform of the interferogram to recover the spectrum in seconds, accumulating many scans for high signal-to-noise. The source is a Nernst glower (rare-earth oxide rod heated to 1500 deg C) or a globar (silicon carbide rod); samples are prepared as KBr pellets (1 mg sample in 200 mg KBr, pressed into a transparent disc), as a thin film between NaCl plates, or by attenuated total reflectance (ATR) pressing the sample against a diamond crystal.",
              "IR spectroscopy is the standard tool for identifying the functional groups of an unknown organic compound. A carbonyl peak near 1700 cm^-1 confirms a ketone, aldehyde, acid or ester; the absence of an O-H band rules out acid and alcohol; a sharp N-H band near 3300 with a C=O near 1650 suggests an amide; broad O-H near 3300 with C=O near 1710 suggests a carboxylic acid. Combined with NMR and mass spectrometry (next sections), IR forms the triad that identifies any organic structure - the standard skill of an RGPV analytical question.",
            ],
            bullets: [
              "IR probes molecular vibrations: stretching, bending, rocking, wagging, twisting.",
              "Selection rule: vibration must change dipole moment; symmetric bonds (N2, O2) are IR-inactive.",
              "Spectrum: percent transmittance vs wavenumber (cm^-1), 4000 to 400 cm^-1.",
              "X-H region 4000-2500: O-H/N-H ~3300, C-H 2700-3300 (aldehyde 2700, sp3 2900, sp2 3100).",
              "Triple/double region 2500-1500: C=O ~1700, C=C ~1640, C triple C ~2100 cm^-1.",
              "Fingerprint region 1500-400 cm^-1 is the molecule's unique signature.",
              "FTIR uses a Michelson interferometer; source is Nernst glower or globar.",
              "Sample prep: KBr pellet, thin film between NaCl plates, or ATR on a diamond crystal.",
            ],
            table: {
              caption: "Diagnostic IR absorption bands.",
              headers: ["Bond", "Wavenumber (cm^-1)", "Shape", "Diagnostic of"],
              rows: [
                ["O-H (alcohol)", "3200-3600", "broad", "Hydrogen-bonded -OH"],
                ["O-H (acid)", "2500-3300", "very broad", "Carboxylic acid"],
                ["N-H", "3300-3500", "sharp", "Amine, amide"],
                ["C-H (sp3)", "2850-2960", "sharp", "Alkane"],
                ["C=O", "1650-1750", "strong", "Ketone 1715, ester 1735, amide 1650"],
                ["C=C", "1620-1680", "medium", "Alkene, aromatic"],
                ["C triple bond C", "2100-2260", "weak", "Alkyne"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "The three regions of an IR spectrum",
              caption:
                "Functional-group region is read for class; fingerprint region is matched against a reference.",
              left: {
                heading: "Functional group region (4000-1500 cm^-1)",
                items: [
                  "O-H, N-H stretches 3300 cm^-1",
                  "C-H stretches 2700-3300 cm^-1",
                  "C=O stretch ~1700 cm^-1 (diagnostic)",
                  "C=C and C=N near 1640-1650 cm^-1",
                  "C triple bond C and C triple bond N near 2100-2260 cm^-1",
                ],
              },
              right: {
                heading: "Fingerprint region (1500-400 cm^-1)",
                items: [
                  "C-H bends, C-O stretches",
                  "Whole-molecule vibration pattern",
                  "Unique to each compound",
                  "Matched against spectral library",
                  "Confirms identity, not functional group",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "C=O near 1700 cm^-1 is the diagnostic peak",
              body: "When asked to identify a compound from its IR spectrum, first look for a strong peak near 1700 cm^-1. If present, the molecule has a carbonyl (ketone, aldehyde, acid, ester, amide); then narrow by checking for O-H (acid), N-H (amide) or C-O (ester). The 1700 cm^-1 peak is the first thing to mention in any IR identification.",
            },
            keyTerms: [
              { term: "Wavenumber", definition: "The reciprocal of wavelength, in cm^-1; the IR spectrum is plotted as transmittance versus wavenumber from 4000 to 400 cm^-1." },
              { term: "FTIR", definition: "Fourier-transform infrared spectroscopy, using a Michelson interferometer and a computer Fourier transform to acquire the spectrum in seconds." },
              { term: "Fingerprint region", definition: "The 1500-400 cm^-1 region of an IR spectrum, unique to each molecule, matched against a reference library to confirm identity." },
              { term: "KBr pellet", definition: "A transparent disc of 1 mg sample in 200 mg KBr pressed under vacuum, the standard IR sample preparation for solids." },
            ],
            examQuestions: [
              {
                q: "Explain the principle of IR spectroscopy and state the selection rule. Describe the three regions of an IR spectrum and give the wavenumber ranges for O-H, C-H, C=O and C=C stretches. Outline FTIR instrumentation.",
                marks: 7,
                outline: [
                  "Principle: photon energy matches molecular vibrational frequency; amplitude increases.",
                  "Selection rule: vibration must change dipole moment; symmetric bonds (N2, O2) are inactive.",
                  "Functional group region 4000-2500 cm^-1: O-H, N-H near 3300; C-H 2700-3300.",
                  "Triple/double region 2500-1500: C=O ~1700 (ketone 1715, ester 1735); C=C ~1640.",
                  "Fingerprint 1500-400 cm^-1: unique to each molecule, matched against library.",
                  "FTIR: Michelson interferometer, Nernst or globar source, KBr pellet or ATR sample.",
                  "Application: identify C=O, O-H, N-H to assign functional groups.",
                ],
              },
              {
                q: "Why is the C=C bond in ethylene IR-inactive?",
                marks: 2,
              },
              {
                q: "What is the fingerprint region of an IR spectrum?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.4",
            title: "NMR spectroscopy and mass spectrometry",
            body: [
              "Nuclear magnetic resonance (NMR) spectroscopy exploits the magnetic property of certain nuclei. A nucleus with spin I = 1/2 - the proton 1H, 13C, 19F, 31P - behaves like a tiny bar magnet. In a strong external magnetic field B0 it can align with or against the field, two states separated by a small energy gap proportional to B0. A radiofrequency pulse at the resonance frequency flips the nuclei between the states; the absorbed frequency is detected. For protons in a 4.7 T magnet the resonance frequency is 200 MHz; modern instruments run at 400, 500 or even 900 MHz.",
              "The chemical shift, delta (in ppm, parts per million), measures how far a proton's resonance is from a reference, tetramethylsilane (TMS, (CH3)4Si) defined as delta = 0. The shift reflects the electronic environment: electron-withdrawing groups deshield the proton and move it to higher delta (downfield). Typical 1H shifts: methyl next to carbon CH3 0.9, methylene CH2 1.3, methine CH 1.5, methyl next to oxygen O-CH3 3.5, vinyl =C-H 4.5 to 6.5, aromatic 6.5 to 8.5, aldehyde -CHO 9 to 10, carboxylic acid -COOH 10 to 12. The number of peaks in a pattern reveals neighbouring protons by the n+1 rule: a proton with n equivalent neighbours is split into n+1 peaks (singlet, doublet, triplet, quartet).",
              "Mass spectrometry (MS) measures the mass-to-charge ratio (m/z) of ionised molecules and their fragments. In the standard electron-impact source, vapourised sample molecules are bombarded by 70 eV electrons, knocking out one electron to give the molecular ion M+ (the highest m/z in most spectra, giving the molecular weight). Excess energy fragments M+ by cleaving bonds, giving a pattern of fragment peaks that diagnoses the structure. Isotope peaks help: M+1 from 13C (1.1 percent per carbon); M+2 strong from 34S, 37Cl (one Cl gives a 3:1 M:M+2 pair), 81Br (one Br gives a 1:1 pair).",
              "Together, MS, IR and NMR identify any organic compound. MS gives the molecular weight (from M+) and the formula (from isotope peaks and high-resolution mass). IR gives the functional groups (C=O, O-H, N-H). 1H NMR gives the count of each proton type (from integration), the chemical environment (from chemical shift) and the number of neighbours (from splitting). A 7-mark analytical question typically presents three spectra and asks for a structure: read M+ from MS, the carbonyl from IR, the splitting patterns from NMR, and assemble the molecule.",
            ],
            bullets: [
              "NMR active nuclei: spin 1/2 - 1H, 13C, 19F, 31P; proton resonance 200 MHz at 4.7 T.",
              "Chemical shift delta (ppm), reference TMS at 0; electron-withdrawing groups shift downfield.",
              "Typical 1H shifts: CH3 0.9, CH2 1.3, OCH3 3.5, aromatic 7.2, CHO 9-10, COOH 10-12 ppm.",
              "Splitting (n+1 rule): n equivalent neighbours give n+1 peaks - singlet, doublet, triplet, quartet.",
              "MS: 70 eV electron impact knocks out one electron -> molecular ion M+.",
              "M+ gives molecular weight; isotope peaks: M+1 (13C), M+2 (34S, 37Cl, 81Br).",
              "One Cl gives M:M+2 in 3:1; one Br gives 1:1.",
              "Triad MS + IR + NMR identifies any organic compound.",
            ],
            table: {
              caption: "Diagnostic 1H NMR chemical shifts.",
              headers: ["Proton type", "Shift delta (ppm)", "Splitting", "Notes"],
              rows: [
                ["R-CH3", "0.9", "triplet if next to CH2", "Methyl on saturated carbon"],
                ["R-CH2-R", "1.3", "quartet or multiplet", "Methylene"],
                ["R-O-CH3", "3.5", "singlet", "Methoxy"],
                ["C=C-H", "4.5-6.5", "multiplet", "Vinyl"],
                ["Ar-H", "6.5-8.5", "multiplet", "Aromatic ring"],
                ["R-CHO", "9-10", "singlet", "Aldehyde"],
                ["R-COOH", "10-12", "broad singlet", "Carboxylic acid"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Which spectroscopy answers which question",
              caption:
                "Pick the technique by the structural question being asked.",
              start: "Structural question about an unknown",
              branches: [
                { label: "Molecular weight or formula", outcome: "Mass spectrometry - read M+ and isotope peaks", good: true },
                { label: "Functional groups present", outcome: "IR - look for C=O, O-H, N-H", good: true },
                { label: "Number and neighbours of each H", outcome: "1H NMR - integration and splitting", good: true },
                { label: "Conjugation or chromophore", outcome: "UV-visible - lambda_max shift", good: true },
              ],
            },
            callout: {
              type: "tip",
              title: "Quote the n+1 rule and TMS",
              body: "For NMR answers, write 'chemical shift referenced to TMS at delta = 0 ppm' and 'splitting follows the n+1 rule - n equivalent neighbours give n+1 peaks'. These two sentences carry the structural marks of any NMR question.",
            },
            keyTerms: [
              { term: "Chemical shift (delta)", definition: "The position of an NMR resonance relative to TMS at 0 ppm, reflecting the electronic (shielding) environment of the nucleus." },
              { term: "n+1 rule", definition: "A proton with n equivalent neighbouring protons is split into n+1 peaks - the basis of NMR multiplet patterns." },
              { term: "Molecular ion (M+)", definition: "The highest m/z peak in a mass spectrum, formed by loss of one electron from the molecule; gives the molecular weight." },
              { term: "Electron-impact ionisation", definition: "Bombarding vapourised molecules with 70 eV electrons to generate M+ and fragment ions for mass analysis." },
            ],
            examQuestions: [
              {
                q: "Explain the principle of 1H NMR spectroscopy. Define chemical shift with its reference, state the n+1 splitting rule, and give typical shift values for CH3, aromatic, aldehyde and carboxylic acid protons. Outline the principle of mass spectrometry and the significance of M+ and M+2 peaks.",
                marks: 7,
                outline: [
                  "Principle: spin-1/2 proton flips between alignments in a strong magnetic field under RF.",
                  "Chemical shift delta (ppm), referenced to TMS at 0.",
                  "Typical shifts: CH3 0.9, aromatic 6.5-8.5, aldehyde 9-10, COOH 10-12 ppm.",
                  "n+1 rule: n equivalent neighbours split a proton into n+1 peaks.",
                  "MS: 70 eV electron impact forms molecular ion M+ giving molecular weight.",
                  "Isotope peaks M+1 (13C), M+2 strong for 34S, 37Cl (3:1) and 81Br (1:1).",
                  "Triad MS (MW) + IR (functional groups) + NMR (H count and neighbours) identifies structure.",
                ],
              },
              {
                q: "What is the reference compound for 1H NMR chemical shift?",
                marks: 2,
              },
              {
                q: "How does a single chlorine atom affect the mass spectrum?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.5",
            title: "Chromatography: paper, TLC, GC and HPLC",
            body: [
              "Chromatography separates the components of a mixture by their differential distribution between a stationary phase and a moving mobile phase. The components that bind more strongly to the stationary phase move more slowly; those that prefer the mobile phase move faster. The separated bands or spots are then detected, identified by their characteristic retention factor or time, and quantified by the area under the peak. The choice of stationary and mobile phases and of the geometry (planar or column) defines the technique.",
              "Paper chromatography and thin-layer chromatography (TLC) are planar techniques. In paper chromatography a strip of filter paper (cellulose, with adsorbed water as the stationary phase) is spotted with the sample and dipped in a solvent (mobile phase); the solvent rises by capillarity and the components separate as spots. The retention factor Rf = distance moved by spot / distance moved by solvent front, a value between 0 and 1 characteristic of each compound under fixed conditions. TLC replaces paper with a thin layer of silica gel or alumina on a glass or plastic plate, giving faster runs (15 to 30 minutes), sharper spots and a wider choice of mobile phases.",
              "Gas chromatography (GC) separates volatile compounds in a gaseous mobile phase. A micro-litre of sample is injected into a heated port (250 to 300 deg C) where it vapourises and is swept by an inert carrier gas (helium or nitrogen at 1 to 2 mL/min) through a long capillary column (10 to 60 m, internal diameter 0.25 mm) coated inside with a liquid stationary phase (silicone, polyethylene glycol). Components partition between the gas and the liquid film and emerge at different retention times (2 to 30 minutes). A flame-ionisation detector (FID) burns the organic effluent in a hydrogen flame and measures the ion current; a thermal-conductivity detector (TCD) responds to any gas. GC resolves hundreds of peaks and is the standard method for petrol, perfume and pesticide analysis.",
              "High-performance liquid chromatography (HPLC) is the liquid-phase counterpart, for compounds that are not volatile or would decompose in GC. A pump pushes the liquid mobile phase (water, acetonitrile, methanol, often buffered) at 100 to 300 bar through a stainless-steel column (10 to 25 cm long, 4.6 mm diameter) packed with 3 to 5 micrometre silica particles bonded with C18 (octadecylsilane) for reversed-phase work. A 20 microlitre sample is injected and the separated components are detected by UV absorbance (most common), refractive index or mass spectrometry. HPLC dominates pharmaceutical quality control (assay of active ingredient), environmental analysis (pesticides in water) and clinical chemistry (drugs in blood).",
            ],
            bullets: [
              "Principle: components partition between stationary and mobile phases; bind strength sets speed.",
              "Paper chromatography: cellulose + adsorbed water stationary; solvent mobile; Rf = spot/solvent front.",
              "TLC: silica or alumina on glass plate; faster (15-30 min) and sharper than paper.",
              "GC: capillary column 10-60 m, He carrier, 250-300 deg C injector; FID or TCD detector.",
              "GC retention times 2-30 min; resolves hundreds of volatile components.",
              "HPLC: pump 100-300 bar, C18 bonded silica column, UV or RI detector.",
              "HPLC for non-volatile, thermally labile compounds (pharmaceuticals, pesticides, drugs).",
              "Reversed-phase HPLC: non-polar C18 stationary, polar water/acetonitrile mobile.",
            ],
            table: {
              caption: "Comparison of chromatography techniques.",
              headers: ["Technique", "Mobile phase", "Stationary phase", "Best for"],
              rows: [
                ["Paper", "Liquid (solvent)", "Cellulose + water", "Polar organics, amino acids"],
                ["TLC", "Liquid (solvent)", "Silica or alumina", "Quick qualitative check"],
                ["GC", "Gas (He, N2)", "Liquid film on capillary wall", "Volatile organics (petrol, perfume)"],
                ["HPLC", "Liquid (water/ACN)", "C18 bonded silica", "Non-volatile, thermally labile"],
                ["Ion exchange", "Liquid buffer", "Charged resin", "Ions, amino acids"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "A chromatography run from sample to chromatogram",
              caption:
                "The same five stages apply to paper, TLC, GC and HPLC - only the phases change.",
              stages: [
                { label: "Inject / spot the sample", note: "micro-litre (GC/HPLC) or spot (paper/TLC)" },
                { label: "Mobile phase carries it through", note: "gas for GC, liquid for HPLC" },
                { label: "Components partition", note: "differential binding to stationary phase" },
                { label: "Separate bands or peaks form", note: "Rf value or retention time" },
                { label: "Detect and quantify", note: "FID/UV/RI; peak area is concentration" },
              ],
            },
            callout: {
              type: "tip",
              title: "Define Rf and retention time",
              body: "For planar chromatography, write 'Rf = distance moved by spot / distance moved by solvent front, between 0 and 1'. For column chromatography, write 'retention time = time from injection to peak maximum, characteristic under fixed conditions'. These two definitions are the heart of the chromatography question.",
            },
            keyTerms: [
              { term: "Stationary phase", definition: "The fixed phase (cellulose, silica, C18-bonded silica, liquid film) to which components bind with different affinities." },
              { term: "Mobile phase", definition: "The moving phase (gas or liquid) that carries the sample through the stationary phase." },
              { term: "Retention factor Rf", definition: "In planar chromatography, the ratio of distance moved by a spot to distance moved by the solvent front; a value between 0 and 1." },
              { term: "Retention time", definition: "In column chromatography, the time from injection to the peak maximum; characteristic of a compound under fixed conditions." },
            ],
            examQuestions: [
              {
                q: "Explain the principle of chromatography. Compare paper, TLC, GC and HPLC in terms of mobile and stationary phases, sample type, and detector. Define Rf and retention time.",
                marks: 7,
                outline: [
                  "Principle: differential distribution of components between stationary and mobile phases.",
                  "Paper: cellulose + water stationary, solvent mobile; Rf = spot/solvent front.",
                  "TLC: silica/alumina on plate; faster, sharper; spot detection by UV or iodine.",
                  "GC: He carrier, capillary column 10-60 m, 250-300 deg C injector; FID or TCD detector.",
                  "HPLC: pump 100-300 bar, C18 silica column, UV or RI detector.",
                  "Rf (planar) and retention time (column) are the characteristic identifiers.",
                  "GC for volatile, HPLC for non-volatile/thermally labile compounds.",
                ],
              },
              {
                q: "Why is HPLC preferred over GC for pharmaceutical analysis?",
                marks: 2,
              },
              {
                q: "Define retention factor Rf and state its range.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.6",
            title: "Thermal analysis, water pollution indices and green chemistry",
            body: [
              "Thermal analysis tracks a property of a sample as temperature changes. Thermogravimetric analysis (TGA) measures mass versus temperature (or time) on a microbalance in a furnace: the mass stays constant until a decomposition or vaporisation begins, then drops. TGA gives the thermal stability of a polymer, the decomposition temperature, the moisture and ash content of a fuel, and the composition of a composite (resin burns off, fibre remains). A PVC sample loses HCl near 300 deg C, leaving a carbonaceous residue that further degrades above 450 deg C.",
              "Differential thermal analysis (DTA) measures the temperature difference delta T between a sample and an inert reference (alumina) as both are heated at a controlled rate. An endothermic event (melting, dehydration, glass transition) cools the sample below the reference, giving a negative peak; an exothermic event (crystallisation, oxidation, cure of a thermoset) heats the sample above the reference, giving a positive peak. DSC (differential scanning calorimetry) is the quantitative variant that measures the heat flow directly, giving enthalpies of fusion and reaction. Together TGA and DTA identify the thermal fingerprint of a polymer, drug or fuel.",
              "Water pollution is monitored by three biochemical indices. Dissolved oxygen (DO) is measured by the Winkler iodometric method: MnSO4 + NaOH + KI fix the dissolved oxygen as MnO(OH)2; acidification with H2SO4 releases iodine proportional to the oxygen, which is titrated with sodium thiosulphate (Na2S2O3) using starch indicator. DO above 4 mg/L is healthy; below 2 mg/L the water is dead. Biochemical oxygen demand (BOD) is the oxygen consumed by microbes decomposing organic matter in 5 days at 20 deg C: BOD = (D1 - D5) / P, where D1 and D5 are the DO of the sample on day 1 and day 5 and P is the dilution factor; clean water has BOD below 5 mg/L, polluted above 20 mg/L.",
              "Chemical oxygen demand (COD) is the oxygen equivalent of the oxidisable matter, measured by refluxing the sample with a known excess of potassium dichromate K2Cr2O7 in concentrated sulphuric acid for 2 hours; the unused dichromate is titrated with ferrous ammonium sulphate (FAS). COD = (V_blank - V_sample) x M x 8000 / V_sample, where the factor 8000 converts equivalents to mg of O2. COD is always higher than BOD because it oxidises biologically resistant compounds too; a COD above 250 mg/L signals serious industrial pollution. The unit closes with green chemistry - the 12 principles of Anastas and Warner (1998): atom economy, safer solvents, renewable feedstocks, design for degradation, energy efficiency, real-time analysis, catalysis over stoichiometric reagents - the framework that makes modern chemical engineering sustainable.",
            ],
            bullets: [
              "TGA: mass vs temperature; gives thermal stability, decomposition, ash content.",
              "PVC TGA: loses HCl near 300 deg C; carbonaceous residue burns above 450 deg C.",
              "DTA: delta T between sample and inert reference; endotherm (melting, dehydration) negative.",
              "DSC: quantitative heat flow; gives enthalpy of fusion and reaction.",
              "DO by Winkler: MnSO4 + NaOH + KI -> MnO(OH)2; acidify with H2SO4; titrate I2 with Na2S2O3.",
              "DO > 4 mg/L healthy; < 2 mg/L water is dead.",
              "BOD: 5-day, 20 deg C, BOD = (D1 - D5)/P; < 5 mg/L clean, > 20 mg/L polluted.",
              "COD: K2Cr2O7 + H2SO4 reflux 2 h; COD = (V_b - V_s) x M x 8000 / V_s; > 250 mg/L serious.",
            ],
            codeExample: {
              language: "python",
              caption: "Compute DO, BOD and COD from titration data.",
              code: [
                "# Winkler DO: volume of 0.025 M Na2S2O3 for 200 mL sample",
                "V_thio = 8.4    # mL",
                "M_thio = 0.025  # mol/L",
                "V_sample_mL = 200.0",
                "# 1 mol thiosulphate ~ 0.25 mol O2 (4 I- ~ 1 O2 -> 2 I2 ~ 4 thio)",
                "DO = (V_thio * M_thio * 8 * 1000) / V_sample_mL",
                "print(f'DO = {DO:.2f} mg/L')",
                "",
                "# BOD: DO on day 1 and day 5 with dilution factor P = 0.05",
                "D1, D5, P = 8.5, 3.2, 0.05",
                "BOD = (D1 - D5) / P",
                "print(f'BOD = {BOD:.1f} mg/L')",
                "",
                "# COD: blank and sample titres of FAS",
                "V_blank, V_sample, M_FAS = 22.0, 9.5, 0.1",
                "V_sample_COD_mL = 25.0",
                "COD = (V_blank - V_sample) * M_FAS * 8000 / V_sample_COD_mL",
                "print(f'COD = {COD:.1f} mg/L')",
              ].join("\n"),
            },
            diagram: {
              kind: "cycle",
              title: "From sample to pollution index to green chemistry",
              caption:
                "Each loop closes one analytical question and feeds the next; the cycle ends with greener design.",
              steps: [
                { label: "Collect water sample", note: "river, effluent, tap" },
                { label: "Measure DO by Winkler", note: "MnO(OH)2 fixes O2" },
                { label: "Incubate 5 days at 20 deg C for BOD", note: "bioavailable carbon" },
                { label: "Reflux with K2Cr2O7 for COD", note: "total oxidisable matter" },
                { label: "Compare with limits", note: "DO > 4, BOD < 20, COD < 250 mg/L" },
                { label: "Apply green chemistry principles", note: "redesign process to cut waste" },
              ],
            },
            callout: {
              type: "exam",
              title: "Quote the three formulas",
              body: "For pollution analysis, write the three formulas in one block: DO from Winkler (V_thio x M x 8 x 1000 / V_sample), BOD = (D1 - D5)/P, and COD = (V_b - V_s) x M x 8000 / V_s. Examiners give one mark per correctly written formula.",
            },
            keyTerms: [
              { term: "TGA", definition: "Thermogravimetric analysis - mass of a sample versus temperature, giving decomposition, moisture and ash content." },
              { term: "Dissolved oxygen (DO)", definition: "The oxygen dissolved in water, measured by the Winkler iodometric method; DO > 4 mg/L is healthy." },
              { term: "BOD", definition: "Biochemical oxygen demand - oxygen consumed by microbes in 5 days at 20 deg C; BOD = (D1 - D5)/P; below 5 mg/L is clean." },
              { term: "COD", definition: "Chemical oxygen demand - oxygen equivalent of all oxidisable matter, measured by K2Cr2O7 reflux; always >= BOD." },
            ],
            examQuestions: [
              {
                q: "Explain TGA and DTA. Describe the determination of dissolved oxygen by the Winkler method and define BOD and COD with their formulas and significance. State any four principles of green chemistry.",
                marks: 7,
                outline: [
                  "TGA: mass vs temperature; gives thermal stability, decomposition, ash content.",
                  "DTA: delta T between sample and reference; endotherm (melting, dehydration) negative peak.",
                  "Winkler DO: MnSO4 + NaOH + KI fix O2 as MnO(OH)2; acidify with H2SO4; titrate I2 with Na2S2O3.",
                  "BOD: 5-day, 20 deg C, BOD = (D1 - D5)/P; < 5 mg/L clean, > 20 polluted.",
                  "COD: K2Cr2O7 + H2SO4 reflux 2 h; COD = (V_b - V_s) x M x 8000 / V_s; > 250 mg/L serious.",
                  "COD >= BOD because dichromate oxidises biologically resistant compounds too.",
                  "Green chemistry principles: atom economy, safer solvents, renewable feedstocks, design for degradation, catalysis over stoichiometric reagents.",
                ],
              },
              {
                q: "Why is COD always greater than or equal to BOD?",
                marks: 2,
              },
              {
                q: "Name any three principles of green chemistry.",
                marks: 3,
              },
            ],
          },
        ],
      },
    },
  ],

  // =========================================================================
  // STUDY PLAN
  // =========================================================================
  studyPlan: [
    {
      id: "weights",
      heading: "Exam weight map",
      weightedTopics: [
        { topic: "Hardness types, units and EDTA numericals", weight: "High", note: "Almost every paper has a 7-mark hardness numerical; learn the EDTA formula cold." },
        { topic: "Softening methods (lime-soda, zeolite, ion exchange)", weight: "High", note: "Compare three methods with reactions and treated hardness; a recurring 7-mark question." },
        { topic: "Boiler troubles and their prevention", weight: "High", note: "Scale, sludge, priming, foaming, caustic embrittlement; quote the Na2SO4:NaOH ratio." },
        { topic: "Calorific value HCV/LCV and Dulong's formula", weight: "High", note: "Dulong's formula and the bomb calorimeter numerical appear in nearly every paper." },
        { topic: "Combustion calculation (theoretical air)", weight: "High", note: "7-mark numerical from ultimate analysis; memorise C:32/12, H:8, S:1 stoichiometry." },
        { topic: "Proximate and ultimate analysis of coal", weight: "Medium", note: "Significance of each fraction is the examiner's favourite twist." },
        { topic: "Polymers: classification and addition mechanism", weight: "High", note: "Free-radical mechanism (initiation, propagation, termination) plus thermoplastic/thermoset." },
        { topic: "Important polymers (PVC, PMMA, Teflon, nylon-6,6, bakelite)", weight: "Medium", note: "Repeat units, properties and uses - write each repeat unit in brackets." },
        { topic: "Beer-Lambert law and UV-visible spectroscopy", weight: "Medium", note: "7-mark numerical on A = epsilon c l; instrument blocks of UV-Vis spectrophotometer." },
        { topic: "Water pollution: DO, BOD, COD and green chemistry", weight: "Medium", note: "Winkler DO method, BOD and COD formulas, plus four green-chemistry principles." },
      ],
    },
    {
      id: "six-weeks",
      heading: "Six-week study plan",
      weeks: [
        { week: "Week 1", focus: "Water and hardness (Unit I part 1)", tasks: ["Master sources, impurities and hardness definitions.", "Memorise the four hardness units and conversion factors.", "Practise 10 EDTA numericals for total and split hardness."] },
        { week: "Week 2", focus: "Boiler troubles and softening (Unit I part 2)", tasks: ["Make a one-page table of the five boiler troubles with causes and prevention.", "Write the lime-soda dose formula and 5 numericals.", "Sketch the zeolite and ion-exchange beds with their reactions."] },
        { week: "Week 3", focus: "Fuels and combustion (Unit II)", tasks: ["Learn coal rank series, proximate and ultimate analysis.", "Practise bomb calorimeter and Dulong numericals.", "Master the combustion air calculation from an ultimate analysis."] },
        { week: "Week 4", focus: "Lubricants, cement, refractories (Unit III)", tasks: ["Memorise viscosity, VI, flash/fire, cloud/pour, aniline point definitions.", "Tabulate the 7 lubricant additives with examples and functions.", "Sketch the cement kiln zones and the four Bogue compounds."] },
        { week: "Week 5", focus: "Polymers (Unit IV)", tasks: ["Master classification by origin, mechanism and thermal behaviour.", "Write the free-radical addition mechanism with all three stages.", "Tabulate PVC, PMMA, Teflon, nylon-6,6, bakelite with repeat units and uses."] },
        { week: "Week 6", focus: "Instrumental analysis (Unit V)", tasks: ["Practise Beer-Lambert numericals and the UV-Vis spectrophotometer blocks.", "Learn the IR regions and the C=O ~1700 cm^-1 diagnostic.", "Write the Winkler DO method, BOD and COD formulas."] },
      ],
    },
    {
      id: "last-day",
      heading: "Last-day strategy",
      bullets: [
        "Revise the four hardness unit conversions and the EDTA formula on one card.",
        "Memorise Dulong's formula and the LCV subtraction: 9 x H/100 x 587 kcal/kg.",
        "Re-memorise the stoichiometric ratios: C 32/12, H 8, S 1 kg O2 per kg element.",
        "Write the five Bogue compounds (C3S, C2S, C3A, C4AF) with their percentages.",
        "Quote the free-radical mechanism as Initiation, Propagation, Termination, Chain transfer.",
        "Write the Beer-Lambert equation A = epsilon c l = -log10(T) and the UV-Vis blocks.",
        "Memorise the Winkler reagents and the COD formula with the 8000 factor.",
        "Keep the Na2SO4:NaOH >= 1:1 ratio for caustic embrittlement ready in your head.",
      ],
    },
    {
      id: "exam-hall",
      heading: "Exam-hall playbook",
      bullets: [
        "Open each 7-mark answer with the formula or definition - then plug in numbers.",
        "Write the chemical equation for every reaction you cite (softening, cracking, hydration).",
        "Quote one use for every polymer, refractory and fuel you mention.",
        "For numericals, keep mass units consistent - do not mix grams and kilograms in one formula.",
        "For spectroscopy, always pair the instrument block diagram with the working equation.",
        "Mention the units of every quantity (mg/L, kcal/kg, cSt, cm^-1, ppm) - one mark rides on units.",
        "End each answer with a one-line significance or application sentence to clinch the final mark.",
      ],
    },
    {
      id: "slips",
      heading: "Common mistakes",
      bullets: [
        "Forgetting to subtract the oxygen already in the fuel when computing theoretical air.",
        "Quoting LCV = HCV - 9 x H/100 x 587 without explaining the factor 9 (water mass per H).",
        "Mixing grams and kilograms in the bomb calorimeter formula, giving answers 1000x off.",
        "Writing 'flash point and fire point are the same' - fire point is 5-40 deg C higher.",
        "Confusing thermoplastic and thermosetting - thermoplastics re-melt, thermosets do not.",
        "Writing the C3S hydration reaction without the Ca(OH)2 product and its pH 12.5 role.",
        "Forgetting that GC needs volatile samples and HPLC handles non-volatile, thermally labile ones.",
        "Naming TEL as the modern octane booster without noting its 2000 ban in India.",
      ],
    },
  ],
};
